"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * ess client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("ess.tencentcloudapi.com", "2020-11-11", clientConfig);
    }
    /**
     * 该接口用于发起合同后，生成个人用户的批量签署链接, 暂时不支持企业端签署。
**注意：**
1. 该接口目前仅支持签署人类型是**个人签署方的批量签署场景**(ApproverType=1)。
2. 该接口可生成批量签署链接的C端签署人**必须仅有手写签名和时间类型的签署控件**，**不支持填写控件** 。
3. 请确保C端签署人在批量签署合同中**为待签署状态**，如需顺序签署请待前一位参与人签署完成后，再创建该C端用户的签署链接。
4. 该签署链接**有效期为30分钟**，过期后将失效，如需签署可重新创建批量签署链接 。
5. 该接口返回的签署链接适用于APP集成的场景，支持APP打开或浏览器直接打开，**不支持微信小程序嵌入**。
跳转到小程序的实现，参考微信官方文档(分为<a href="https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateToMiniProgram.html">全屏</a>、<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html">半屏</a>两种方式)，如何配置也可以请参考: <a href="https://qian.tencent.com/developers/company/openwxminiprogram">跳转电子签小程序配置</a>。
6. 因h5涉及人脸身份认证能力基于慧眼人脸核身，对Android和iOS系统均有一定要求， 因此<font color='red'>App嵌入H5签署合同需要按照慧眼提供的<a href="https://cloud.tencent.com/document/product/1007/61076">慧眼人脸核身兼容性文档</a>做兼容性适配</font>。
     */
    async CreateBatchQuickSignUrl(req, cb) {
        return this.request("CreateBatchQuickSignUrl", req, cb);
    }
    /**
     * 此接口用于查询合同流程的详情信息，支持查询多个（数量不能超过100）。

适用场景：可用于主动查询某个合同详情信息。
     */
    async DescribeFlowInfo(req, cb) {
        return this.request("DescribeFlowInfo", req, cb);
    }
    /**
     * 新增/删除企业应用集成中的回调配置。
新增回调配置只会增加不存在的CallbackUrl；删除操作将针对找到的相同CallbackUrl的配置进行删除。
请确保回调地址能够接收并处理 HTTP POST 请求，并返回状态码 200 以表示处理正常。
更多回调相关的说明参考文档[回调通知能力](https://qian.tencent.com/developers/company/callback_types_v2)
     */
    async ModifyApplicationCallbackInfo(req, cb) {
        return this.request("ModifyApplicationCallbackInfo", req, cb);
    }
    /**
     * 此接口用于启动流程。它是模板发起合同的最后一步。
在[创建签署流程](https://qian.tencent.com/developers/companyApis/startFlows/CreateFlow)和[创建电子文档](https://qian.tencent.com/developers/companyApis/startFlows/CreateDocument)之后，用于开始整个合同流程,  推进流程进入到签署环节。

![image](https://qcloudimg.tencent-cloud.cn/raw/06f2bc0f1772d8deac2f92b5df61a5ac.png)

注：
- **合同发起后就会扣减合同的额度**, 如果未签署完成时撤销合同会返还此额度（过期，拒签，签署完成，解除完成等状态不会返还额度）
- **静默（自动）签署不支持合同签署方存在填写**功能
     */
    async StartFlow(req, cb) {
        return this.request("StartFlow", req, cb);
    }
    /**
     * 用于撤销合同流程<br/>
适用场景：如果某个合同流程当前至少还有一方没有签署，则可通过该接口取消该合同流程。常用于合同发错、内容填错，需要及时撤销的场景。<br/>

注:
`如果合同流程中的参与方均已签署完毕，则无法通过该接口撤销合同，`签署完毕的合同需要双方走解除流程将合同作废，可以参考<a href="https://qian.tencent.com/developers/companyApis/operateFlows/CreateReleaseFlow" target="_blank">发起解除合同流程</a>接口。
     */
    async CancelFlow(req, cb) {
        return this.request("CancelFlow", req, cb);
    }
    /**
     * 此接口（DescribeFlowTemplates）用于查询本企业模板列表信息。


**适用场景**
该接口常用来配合<a href="https://qian.tencent.com/developers/companyApis/startFlows/CreateDocument" target="_blank">模板发起合同-创建电子文档</a>接口，作为创建电子文档的前置接口使用。
通过此接口查询到模板信息后，再通过调用创建电子文档接口，指定模板ID，指定模板中需要的填写控件内容等，完成电子文档的创建。

**一个模板通常会包含以下结构信息**

- 模板模板ID, 模板名字等基本信息
- 发起方参与信息Promoter、签署参与方 Recipients，后者会在模板发起合同时用于指定参与方
- 发起方和签署方的填写控件 Components
- 签署方的签署控件 SignComponents

![image](https://qcloudimg.tencent-cloud.cn/raw/ab81fa948a0a6fea14f48cac91d0e36a/channel_DescribeTemplates.png)

模板中各元素的层级关系, 所有的填写控件和签署控件都归属某一个角色(通过控件的ComponentRecipientId来关联)
![image](https://qcloudimg.tencent-cloud.cn/raw/45c638bd93f9c8024763add9ab47c27f.png)
     */
    async DescribeFlowTemplates(req, cb) {
        return this.request("DescribeFlowTemplates", req, cb);
    }
    /**
     * 本接口（DeleteSealPolicies）用于撤销企业员工持有的印章权限
     */
    async DeleteSealPolicies(req, cb) {
        return this.request("DeleteSealPolicies", req, cb);
    }
    /**
     * 本接口（DescribeFileUrls）用于查询文件的下载URL。
适用场景：通过传参合同流程编号，下载对应的合同PDF文件流到本地。
     */
    async DescribeFileUrls(req, cb) {
        return this.request("DescribeFileUrls", req, cb);
    }
    /**
     * 获取设置自动签印章小程序链接。

注意：
<ul><li>需要<code>企业开通自动签</code>后使用。</li>
<li>仅支持<code>已经开通了自动签的个人</code>更换自动签印章。</li>
<li>链接有效期默认7天，<code>最多30天</code>。</li>
<li>该接口的链接适用于<code>小程序</code>端。</li>
<li>该接口不会扣除您的合同套餐，暂不参与计费。</li></ul>
     */
    async CreateUserAutoSignSealUrl(req, cb) {
        return this.request("CreateUserAutoSignSealUrl", req, cb);
    }
    /**
     * 获取个人用户自动签的开通链接。

注意: `处方单等特殊场景专用，此接口为白名单功能，使用前请联系对接的客户经理沟通。`
     */
    async CreateUserAutoSignEnableUrl(req, cb) {
        return this.request("CreateUserAutoSignEnableUrl", req, cb);
    }
    /**
     * 此接口（CreateIntegrationRole）用来创建企业自定义的SaaS角色或集团角色。

适用场景1：创建当前企业的自定义SaaS角色或集团角色，并且创建时不进行权限的设置（PermissionGroups 参数不传），角色中的权限内容可通过控制台编辑角色或通过接口 ModifyIntegrationRole 完成更新。

适用场景2：创建当前企业的自定义SaaS角色或集团角色，并且创建时进行权限的设置（PermissionGroups 参数要传），权限树内容 PermissionGroups 可参考接口 DescribeIntegrationRoles 的输出。此处注意权限树内容可能会更新，需尽量拉取最新的权限树内容，并且权限树内容 PermissionGroups 必须是一颗完整的权限树。

适用场景3：创建集团角色时可同时设置角色管理的子企业列表，可通过设置 SubOrganizationIds 参数达到此效果。

适用场景4：主企业代理子企业操作的场景，需要设置Agent参数，并且ProxyOrganizationId设置为子企业的id即可。

注意事项：SaaS角色和集团角色对应的权限树是不一样的。
     */
    async CreateIntegrationRole(req, cb) {
        return this.request("CreateIntegrationRole", req, cb);
    }
    /**
     * 本接口（CreateEmbedWebUrl）用于创建嵌入Web的链接，支持以下类型的Web链接创建：
1. 创建印章
2. 创建模板
3. 修改模板
4. 预览模板
5. 预览合同流程

用户可以通过这些链接快速将其集成到自己的系统中。
     */
    async CreateEmbedWebUrl(req, cb) {
        return this.request("CreateEmbedWebUrl", req, cb);
    }
    /**
     * 对合同流程文件进行数字签名验证，判断数字签名是否有效，合同文件内容是否被篡改。
     */
    async VerifyPdf(req, cb) {
        return this.request("VerifyPdf", req, cb);
    }
    /**
     * 此接口（UnbindEmployeeUserIdWithClientOpenId）用于解除电子签系统员工UserId与客户系统员工OpenId之间的绑定关系。

注：`在调用此接口时，需确保OpenId已通过调用`<a href="https://qian.tencent.com/developers/companyApis/staffs/BindEmployeeUserIdWithClientOpenId" target="_blank">BindEmployeeUserIdWithClientOpenId</a>`接口与电子签系统的UserId绑定过。若OpenId未经过绑定，则无法使用此接口进行解绑操作。`
     */
    async UnbindEmployeeUserIdWithClientOpenId(req, cb) {
        return this.request("UnbindEmployeeUserIdWithClientOpenId", req, cb);
    }
    /**
     * 注：此接口将会废弃，请使用撤销单个签署流程（CancelFlow）接口。
指定需要批量撤回的签署流程Id，获取批量撤销链接。
客户指定需要撤回的签署流程Id，最多100个，超过100不处理；接口调用成功返回批量撤回合同的链接，通过链接跳转到电子签小程序完成批量撤回。
     */
    async CreateBatchCancelFlowUrl(req, cb) {
        return this.request("CreateBatchCancelFlowUrl", req, cb);
    }
    /**
     * 此接口（DeleteIntegrationDepartment）用于删除企业的部门信息。
     */
    async DeleteIntegrationDepartment(req, cb) {
        return this.request("DeleteIntegrationDepartment", req, cb);
    }
    /**
     * 此接口（BindEmployeeUserIdWithClientOpenId）用于将电子签系统员工UserId与客户系统员工OpenId进行绑定。
     */
    async BindEmployeeUserIdWithClientOpenId(req, cb) {
        return this.request("BindEmployeeUserIdWithClientOpenId", req, cb);
    }
    /**
     * 本接口（CreatePreparedPersonalEsign）用于创建导入个人印章（处方单场景专用，使用此接口请与客户经理确认）。
     */
    async CreatePreparedPersonalEsign(req, cb) {
        return this.request("CreatePreparedPersonalEsign", req, cb);
    }
    /**
     * 适用场景：
当通过模板或文件发起合同时，若未指定企业签署人信息，则可调用此接口补充或添加签署人。同一签署人可补充多个员工作为或签署人，最终实际签署人取决于谁先领取合同完成签署。

限制条件：
1. 本企业（发起方企业）企业微信签署人仅支持通过企业微信UserId或姓名+手机号进行补充。
2. 本企业（发起方企业）非企业微信签署人仅支持通过姓名+手机号进行补充。
3. 他方企业仅支持通过姓名+手机号进行补充。
     */
    async CreateFlowApprovers(req, cb) {
        return this.request("CreateFlowApprovers", req, cb);
    }
    /**
     * 此接口（ModifyIntegrationDepartment）用于更新企业的部门信息，支持更新部门名称、客户系统部门ID和部门序号等信息。
     */
    async ModifyIntegrationDepartment(req, cb) {
        return this.request("ModifyIntegrationDepartment", req, cb);
    }
    /**
     * 解绑员工与对应角色的关系，如需绑定请使用 CreateIntegrationUserRoles 接口。
     */
    async DeleteIntegrationRoleUsers(req, cb) {
        return this.request("DeleteIntegrationRoleUsers", req, cb);
    }
    /**
     * 提交签署流程审批结果的适用场景包括：
1. 在使用模板（CreateFlow）或文件（CreateFlowByFiles）创建签署流程时，若指定了参数NeedSignReview为true，且发起方企业作为签署方参与了流程签署，则可以调用此接口提交企业内部签署审批结果。自动签署也需要进行审核通过才会进行签署。
2. 若签署流程状态正常，同一签署流程可以多次提交签署审批结果，签署时的最后一个“审批结果”有效。
     */
    async CreateFlowSignReview(req, cb) {
        return this.request("CreateFlowSignReview", req, cb);
    }
    /**
     * 创建发起流程web页面
<br/>适用场景：通过该接口（CreatePrepareFlow）传入合同文件/模板编号及签署人信息，可获得发起流程的可嵌入页面，在页面完成签署控件等信息的编辑与确认后，快速发起流程。
<br/>注：该接口包含模板/文件发起流程的全部功能，调用接口后不会立即发起，需在可嵌入页面点击按钮进行发起流程。
     */
    async CreatePrepareFlow(req, cb) {
        return this.request("CreatePrepareFlow", req, cb);
    }
    /**
     * 创建签署流程电子文档<br />

注：该接口需要给对应的流程指定一个模板id，并且填充该模板中需要补充的信息。需要配置<a href="https://qian.tencent.com/developers/companyApis/startFlows/CreateFlow" target="_blank">创建签署流程</a>和<a href="https://qian.tencent.com/developers/companyApis/startFlows/StartFlow" target="_blank">发起签署流程</a>接口使用。具体逻辑可以参考下图:

![image](https://qcloudimg.tencent-cloud.cn/raw/06f2bc0f1772d8deac2f92b5df61a5ac.png)
     */
    async CreateDocument(req, cb) {
        return this.request("CreateDocument", req, cb);
    }
    /**
     * 此接口（CreateMultiFlowSignQRCode）用于创建一码多扫流程签署二维码。

**适用场景**:
签署人可通过扫描二维码补充签署信息进行实名签署。常用于提前不知道签署人的身份信息场景，例如：劳务工招工、大批量员工入职等场景。

**注意**:
1. 本接口适用于**发起方没有填写控件的 B2C或者单C模板**,  若是B2C模板,还要满足以下任意一个条件
    - 模板中配置的签署顺序是无序
    - B端企业的签署方式是静默签署
    - B端企业是非首位签署
2. 通过一码多扫二维码发起的合同，合同涉及到的回调消息可参考文档[合同发起及签署相关回调
]( https://qian.tencent.com/developers/company/callback_types_contracts_sign)
3. 用户通过签署二维码发起合同时，因企业额度不足导致失败 会触发签署二维码相关回调,具体参考文档[签署二维码相关回调](https://qian.tencent.com/developers/company/callback_types_commons#%E7%AD%BE%E7%BD%B2%E4%BA%8C%E7%BB%B4%E7%A0%81%E7%9B%B8%E5%85%B3%E5%9B%9E%E8%B0%83)

二维码的样式如下图:
![image](https://qcloudimg.tencent-cloud.cn/raw/27317cf5aacb094fb1dc6f94179a5148.png )
     */
    async CreateMultiFlowSignQRCode(req, cb) {
        return this.request("CreateMultiFlowSignQRCode", req, cb);
    }
    /**
     * 提交申请出证报告任务并返回报告ID。

注意：
<ul><li>使用此功能`需搭配出证套餐` ，使用前请联系对接的客户经理沟通。</li>
<li>操作人必须是`发起方或者签署方企业的(非走授权书认证)法人或者超管`。</li>
<li>合同流程必须所有参与方`已经签署完成`。</li>
<li>出证过程需一定时间，建议在`提交出证任务后的24小时之后`，通过<a href="https://qian.tencent.com/developers/companyApis/certificate/DescribeFlowEvidenceReport" target="_blank">获取出证报告任务执行结果</a>接口进行查询执行结果和出证报告的下载URL。</li></ul>

<svg id="SvgjsSvg1006" width="262" height="229" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs"><defs id="SvgjsDefs1007"><pattern patternUnits="userSpaceOnUse" id="pattern_mark_0" width="300" height="300"><text x="150" y="100" fill="rgba(229,229,229,0.8)" font-size="18" transform="rotate(-45, 150, 150)" style="dominant-baseline: middle; text-anchor: middle;"></text></pattern><pattern patternUnits="userSpaceOnUse" id="pattern_mark_1" width="300" height="300"><text x="150" y="200" fill="rgba(229,229,229,0.8)" font-size="18" transform="rotate(-45, 150, 150)" style="dominant-baseline: middle; text-anchor: middle;"></text></pattern><marker id="SvgjsMarker1021" markerWidth="12" markerHeight="8" refX="9" refY="4" viewBox="0 0 12 8" orient="auto" markerUnits="userSpaceOnUse" stroke-dasharray="0,0"><path id="SvgjsPath1022" d="M0,0 L12,4 L0,8 L0,0" fill="#323232" stroke="#323232" stroke-width="1"></path></marker></defs><rect id="svgbackgroundid" width="262" height="229" fill="transparent"></rect><rect id="SvgjsRect1009" width="262" height="229" fill="url(#pattern_mark_0)"></rect><rect id="SvgjsRect1010" width="262" height="229" fill="url(#pattern_mark_1)"></rect><g id="SvgjsG1011" transform="translate(31.75,25)"><path id="SvgjsPath1012" d="M 0 0L 198 0L 198 59L 0 59Z" stroke="rgba(86,146,48,1)" stroke-width="1" fill-opacity="1" fill="#e7ebed"></path><g id="SvgjsG1013"><text id="SvgjsText1014" font-family="微软雅黑" text-anchor="middle" font-size="13px" width="178px" fill="#323232" font-weight="400" align="middle" lineHeight="125%" anchor="middle" family="微软雅黑" size="13px" weight="400" font-style="" opacity="1" y="10.375" transform="rotate(0)"><tspan id="SvgjsTspan1015" dy="16" x="99"><tspan id="SvgjsTspan1016" style="text-decoration:;fill: rgb(28, 30, 33);">CreateFlowEvidenceReport</tspan></tspan><tspan id="SvgjsTspan1017" dy="16" x="99"><tspan id="SvgjsTspan1018" style="text-decoration:;fill: rgb(51, 51, 51);">提交申请出证报告任务</tspan></tspan></text></g></g><g id="SvgjsG1019"><path id="SvgjsPath1020" d="M130.75 84.5L130.75 114.5L130.75 114.5L130.75 143.2" stroke="#323232" stroke-width="1" fill="none" marker-end="url(#SvgjsMarker1021)"></path></g><g id="SvgjsG1023" transform="translate(25,145)"><path id="SvgjsPath1024" d="M 0 0L 211.5 0L 211.5 59L 0 59Z" stroke="rgba(86,146,48,1)" stroke-width="1" fill-opacity="1" fill="#e7ebed"></path><g id="SvgjsG1025"><text id="SvgjsText1026" font-family="微软雅黑" text-anchor="middle" font-size="13px" width="192px" fill="#323232" font-weight="400" align="middle" lineHeight="125%" anchor="middle" family="微软雅黑" size="13px" weight="400" font-style="" opacity="1" y="10.375" transform="rotate(0)"><tspan id="SvgjsTspan1027" dy="16" x="106"><tspan id="SvgjsTspan1028" style="text-decoration:;fill: rgb(28, 30, 33);">DescribeFlowEvidenceReport</tspan></tspan><tspan id="SvgjsTspan1029" dy="16" x="106"><tspan id="SvgjsTspan1030" style="text-decoration:;fill: rgb(51, 51, 51);">获取出证报告任务执行结果</tspan></tspan></text></g></g></svg>
     */
    async CreateFlowEvidenceReport(req, cb) {
        return this.request("CreateFlowEvidenceReport", req, cb);
    }
    /**
     * 通过模板创建签署流程<br/>
适用场景：在标准制式的合同场景中，可通过提前预制好模板文件，每次调用模板文件的id，补充合同内容信息及签署信息生成电子合同。
<table>
    <thead>
        <tr>
            <th>签署人类别</th>
            <th>需要提前准备的信息</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>自己企业的员工签署（未认证加入或已认证加入）</td>
            <td>签署企业的名字、员工的真实名字、员工的触达手机号、员工的证件号（证件号非必传）</td>
        </tr>
        <tr>
            <td>自己企业的员工签署（已认证加入）</td>
            <td>签署企业的名字、员工在电子签平台的ID（UserId）</td>
        </tr>
        <tr>
            <td>其他企业的员工签署</td>
            <td>签署企业的名字、员工的真实名字、员工的触达手机号、员工的证件号（证件号非必传）</td>
        </tr>
        <tr>
            <td>个人（自然人）签署</td>
            <td>个人的真实名字、个人的触达手机号、个人的身份证（证件号非必传）</td>
        </tr>
    </tbody>
</table>


注：配合<a href="https://qian.tencent.com/developers/companyApis/startFlows/CreateDocument" target="_blank">创建电子文档</a>和<a href="https://qian.tencent.com/developers/companyApis/startFlows/StartFlow" target="_blank">发起签署流程</a>接口使用。整体的逻辑如下图

![image](https://qcloudimg.tencent-cloud.cn/raw/06f2bc0f1772d8deac2f92b5df61a5ac.png)

注：**静默（自动）签署不支持合同签署方存在填写**功能
     */
    async CreateFlow(req, cb) {
        return this.request("CreateFlow", req, cb);
    }
    /**
     * 发起解除协议的主要应用场景为：基于一份已经签署的合同（签署流程），进行解除操作。
解除协议的模板是官方提供 ，经过提供法务审核，暂不支持自定义。

注意：
<ul><li><code>原合同必须签署完</code>成后才能发起解除协议。</li>
<li>只有原合同企业类型的参与人才能发起解除协议，<code>个人参与方不能发起解除协议</code>。</li>
<li>原合同个人类型参与人必须是解除协议的参与人，<code>不能更换其他第三方个人</code>参与解除协议。</li>
<li>如果原合同企业参与人无法参与解除协议，可以指定同企业具有同等权限的<code>企业员工代为处理</code>。</li>
<li>发起解除协议同发起其他企业合同一样，也会参与合同<code>扣费</code>，扣费标准同其他类型合同。</li>
<li>在解除协议发起之后，原合同的状态将转变为解除中。一旦解除协议签署完毕，原合同及解除协议均变为已解除状态。</li></ul>
     */
    async CreateReleaseFlow(req, cb) {
        return this.request("CreateReleaseFlow", req, cb);
    }
    /**
     * 获取跳转至腾讯电子签小程序的签署链接

适用场景：如果需要签署人在自己的APP、小程序、H5应用中签署，可以通过此接口获取跳转腾讯电子签小程序的签署跳转链接。

跳转到小程序的实现，参考微信官方文档（分为<a href="https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateToMiniProgram.html">全屏</a>、<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html">半屏</a>两种方式），如何配置也可以请参考: <a href="https://qian.tencent.com/developers/company/openwxminiprogram">跳转电子签小程序配置</a>

注：
`1. 如果签署人是在PC端扫码签署，可以通过生成跳转链接自主转换成二维码，让签署人在PC端扫码签署`

`2. 签署链接的有效期为90天，超过有效期链接不可用`

`3. 如果需跳转详情页（即PathType值为1）进行填写或签署合同，需指定签署方信息：姓名、手机号码、企业名称等，才能生成正确的跳转链接`

其中小程序的原始Id如下，或者查看小程序信息自助获取。

| 小程序 | AppID | 原始ID |
| ------------ | ------------ | ------------ |
| 腾讯电子签（正式版） | wxa023b292fd19d41d | gh_da88f6188665 |
| 腾讯电子签Demo | wx371151823f6f3edf | gh_39a5d3de69fa |
     */
    async CreateSchemeUrl(req, cb) {
        return this.request("CreateSchemeUrl", req, cb);
    }
    /**
     * 通过此接口获取个人用户自动签的开通状态。

注意: `处方单等特殊场景专用，此接口为白名单功能，使用前请联系对接的客户经理沟通。`
     */
    async DescribeUserAutoSignStatus(req, cb) {
        return this.request("DescribeUserAutoSignStatus", req, cb);
    }
    /**
     * 此接口（CreateFlowGroupByTemplates）可用于通过多个模板创建合同组签署流程。

适用场景：该接口适用于需要一次性完成多份合同签署的情况，多份合同一般具有关联性，用户以目录的形式查看合同。

注：`合同发起后就会扣减合同的额度, 如果未签署完成时撤销合同会返还此额度（过期，拒签，签署完成，解除完成等状态不会返还额度），合同组中每个合同会扣减一个合同额度`
     */
    async CreateFlowGroupByTemplates(req, cb) {
        return this.request("CreateFlowGroupByTemplates", req, cb);
    }
    /**
     * 查询企业扩展服务的开通和授权情况，当前支持查询以下内容：
1. 企业自动签
2. 企业与港澳台居民签署合同
3. 使用手机号验证签署方身份
4. 骑缝章
5. 批量签署能力
6. 拓宽签署方年龄限制
     */
    async DescribeExtendedServiceAuthInfos(req, cb) {
        return this.request("DescribeExtendedServiceAuthInfos", req, cb);
    }
    /**
     * 此接口（UploadFiles）文件上传。<br/>

适用场景：用于合同，印章的文件上传。文件上传以后，
如果是PDF格式文件可配合<a href="https://qian.tencent.com/developers/companyApis/startFlows/CreateFlowByFiles" target="_blank">用PDF文件创建签署流程</a>接口进行合同流程的发起
如果是其他类型可以配合<a href="https://qian.tencent.com/developers/companyApis/templatesAndFiles/CreateConvertTaskApi" target="_blank">创建文件转换任务</a>接口转换成PDF文件

注:
1. 图片类型(png/jpg/jpeg)限制大小为5M以下, PDF/word/excel等其他格式限制大小为60M以下
2. 调用此接口时需要设置单独的Domain请求域名，<font color="red">联调开发环境为: file.test.ess.tencent.cn，正式环境需要设置为:file.ess.tencent.cn</font>，代码示例
```
HttpProfile httpProfile = new HttpProfile();
httpProfile.setEndpoint("file.test.ess.tencent.cn");
```
     */
    async UploadFiles(req, cb) {
        return this.request("UploadFiles", req, cb);
    }
    /**
     * 获取出证报告任务执行结果，返回报告 URL。



注意：
<ul><li>使用此功能`需搭配出证套餐` ，使用前请联系对接的客户经理沟通。</li>
<li>需调用创建并返回出证报告接口<a href="https://qian.tencent.com/developers/companyApis/certificate/CreateFlowEvidenceReport" target="_blank">提交申请出证报告任务</a>获取报告编号后调用当前接口获取报告链接。</li></ul>

<svg id="SvgjsSvg1006" width="262" height="229" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs"><defs id="SvgjsDefs1007"><pattern patternUnits="userSpaceOnUse" id="pattern_mark_0" width="300" height="300"><text x="150" y="100" fill="rgba(229,229,229,0.8)" font-size="18" transform="rotate(-45, 150, 150)" style="dominant-baseline: middle; text-anchor: middle;"></text></pattern><pattern patternUnits="userSpaceOnUse" id="pattern_mark_1" width="300" height="300"><text x="150" y="200" fill="rgba(229,229,229,0.8)" font-size="18" transform="rotate(-45, 150, 150)" style="dominant-baseline: middle; text-anchor: middle;"></text></pattern><marker id="SvgjsMarker1021" markerWidth="12" markerHeight="8" refX="9" refY="4" viewBox="0 0 12 8" orient="auto" markerUnits="userSpaceOnUse" stroke-dasharray="0,0"><path id="SvgjsPath1022" d="M0,0 L12,4 L0,8 L0,0" fill="#323232" stroke="#323232" stroke-width="1"></path></marker></defs><rect id="svgbackgroundid" width="262" height="229" fill="transparent"></rect><rect id="SvgjsRect1009" width="262" height="229" fill="url(#pattern_mark_0)"></rect><rect id="SvgjsRect1010" width="262" height="229" fill="url(#pattern_mark_1)"></rect><g id="SvgjsG1011" transform="translate(31.75,25)"><path id="SvgjsPath1012" d="M 0 0L 198 0L 198 59L 0 59Z" stroke="rgba(86,146,48,1)" stroke-width="1" fill-opacity="1" fill="#e7ebed"></path><g id="SvgjsG1013"><text id="SvgjsText1014" font-family="微软雅黑" text-anchor="middle" font-size="13px" width="178px" fill="#323232" font-weight="400" align="middle" lineHeight="125%" anchor="middle" family="微软雅黑" size="13px" weight="400" font-style="" opacity="1" y="10.375" transform="rotate(0)"><tspan id="SvgjsTspan1015" dy="16" x="99"><tspan id="SvgjsTspan1016" style="text-decoration:;fill: rgb(28, 30, 33);">CreateFlowEvidenceReport</tspan></tspan><tspan id="SvgjsTspan1017" dy="16" x="99"><tspan id="SvgjsTspan1018" style="text-decoration:;fill: rgb(51, 51, 51);">提交申请出证报告任务</tspan></tspan></text></g></g><g id="SvgjsG1019"><path id="SvgjsPath1020" d="M130.75 84.5L130.75 114.5L130.75 114.5L130.75 143.2" stroke="#323232" stroke-width="1" fill="none" marker-end="url(#SvgjsMarker1021)"></path></g><g id="SvgjsG1023" transform="translate(25,145)"><path id="SvgjsPath1024" d="M 0 0L 211.5 0L 211.5 59L 0 59Z" stroke="rgba(86,146,48,1)" stroke-width="1" fill-opacity="1" fill="#e7ebed"></path><g id="SvgjsG1025"><text id="SvgjsText1026" font-family="微软雅黑" text-anchor="middle" font-size="13px" width="192px" fill="#323232" font-weight="400" align="middle" lineHeight="125%" anchor="middle" family="微软雅黑" size="13px" weight="400" font-style="" opacity="1" y="10.375" transform="rotate(0)"><tspan id="SvgjsTspan1027" dy="16" x="106"><tspan id="SvgjsTspan1028" style="text-decoration:;fill: rgb(28, 30, 33);">DescribeFlowEvidenceReport</tspan></tspan><tspan id="SvgjsTspan1029" dy="16" x="106"><tspan id="SvgjsTspan1030" style="text-decoration:;fill: rgb(51, 51, 51);">获取出证报告任务执行结果</tspan></tspan></text></g></g></svg>
     */
    async DescribeFlowEvidenceReport(req, cb) {
        return this.request("DescribeFlowEvidenceReport", req, cb);
    }
    /**
     * 此接口（CreateFlowByFiles）用来通过上传后的pdf资源编号来创建待签署的合同流程。<br/>
适用场景：适用非制式的合同文件签署。一般开发者自己有完整的签署文件，可以通过该接口传入完整的PDF文件及流程信息生成待签署的合同流程。<br/>

<table>
    <thead>
        <tr>
            <th>签署人类别</th>
            <th>需要提前准备的信息</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>自己企业的员工签署（未认证加入或已认证加入）</td>
            <td>签署企业的名字、员工的真实名字、员工的触达手机号、员工的证件号（证件号非必传）</td>
        </tr>
        <tr>
            <td>自己企业的员工签署（已认证加入）</td>
            <td>签署企业的名字、员工在电子签平台的ID（UserId）</td>
        </tr>
        <tr>
            <td>其他企业的员工签署</td>
            <td>签署企业的名字、员工的真实名字、员工的触达手机号、员工的证件号（证件号非必传）</td>
        </tr>
        <tr>
            <td>个人（自然人）签署</td>
            <td>个人的真实名字、个人的触达手机号、个人的身份证（证件号非必传）</td>
        </tr>
    </tbody>
</table>



该接口需要依赖[上传文件](https://qian.tencent.com/developers/companyApis/templatesAndFiles/UploadFiles)接口生成pdf资源编号（FileIds）进行使用。（如果非pdf文件需要调用[创建文件转换任务](https://qian.tencent.com/developers/companyApis/templatesAndFiles/CreateConvertTaskApi)接口转换成pdf资源）<br/>


![image](https://qcloudimg.tencent-cloud.cn/raw/f097a74b289e3e1acd740936bdfe9843.png)

注：
- 不同类型的签署方传参不同, 可以参考开发者中心的ApproverInfo结构体说明
-  合同**发起后就会扣减合同的额度**, 如果未签署完成时撤销合同会返还此额度（**过期，拒签，签署完成，解除完成等状态不会返还额度**）
- **静默（自动）签署不支持合同签署方存在填写**功能
     */
    async CreateFlowByFiles(req, cb) {
        return this.request("CreateFlowByFiles", req, cb);
    }
    /**
     * 本接口（CreateSeal）用于创建企业电子印章，支持创建企业公章，合同章，财务专用章和人事专用章创建。

1. 可以**通过图片**创建印章，图片最大5MB
2. 可以**系统创建**创建印章, 系统创建的印章样子下图(样式可以调整)

![image](https://dyn.ess.tencent.cn/guide/capi/CreateSealByImage.png)
     */
    async CreateSeal(req, cb) {
        return this.request("CreateSeal", req, cb);
    }
    /**
     * 此接口（DescribeIntegrationRoles）用于分页查询企业角色列表，列表按照角色创建时间升序排列。
     */
    async DescribeIntegrationRoles(req, cb) {
        return this.request("DescribeIntegrationRoles", req, cb);
    }
    /**
     * 此接口（CreateIntegrationDepartment）用于创建企业的部门信息，支持绑定客户系统部门ID。
     */
    async CreateIntegrationDepartment(req, cb) {
        return this.request("CreateIntegrationDepartment", req, cb);
    }
    /**
     * 此接口（GetTaskResultApi）用来查询转换任务的状态。如需发起转换任务，请使用<a href="https://qian.tencent.com/developers/companyApis/templatesAndFiles/CreateConvertTaskApi" target="_blank">创建文件转换任务接口</a>进行资源文件的转换操作<br />
前提条件：已调用 <a href="https://qian.tencent.com/developers/companyApis/templatesAndFiles/CreateConvertTaskApi" target="_blank">创建文件转换任务接口</a>进行文件转换，并得到了返回的转换任务Id。<br />

适用场景：已创建一个文件转换任务，想查询该文件转换任务的状态，或获取转换后的文件资源Id。<br />
注：
1. `大文件转换所需的时间可能会比较长`
     */
    async GetTaskResultApi(req, cb) {
        return this.request("GetTaskResultApi", req, cb);
    }
    /**
     * 查询企业扩展服务的授权详情（列表），当前支持查询以下内容：
1. 企业自动签（本企业授权、集团企业授权、合作企业授权）
2. 批量签署能力


注: <font color='red'>所在企业的超管、法人才有权限调用此接口</font>(Agent.ProxyOperator.OpenId 需要传递超管或者法人的OpenId)
     */
    async DescribeExtendedServiceAuthDetail(req, cb) {
        return this.request("DescribeExtendedServiceAuthDetail", req, cb);
    }
    /**
     * 创建企业扩展服务授权，当前仅支持授权 “企业自动签” 和 “批量签署” 给企业员工。
该接口作用和电子签控制台 企业设置-扩展服务-企业自动签署和批量签署授权 两个模块功能相同，可通过该接口授权给企业员工。

注：“企业自动签授权”支持集团代子企业操作，请联系运营开通此功能。
     */
    async CreateExtendedServiceAuthInfos(req, cb) {
        return this.request("CreateExtendedServiceAuthInfos", req, cb);
    }
    /**
     * 此接口（CancelMultiFlowSignQRCode）用于废除一码多扫流程签署二维码。
该接口所需的二维码ID，源自[创建一码多扫流程签署二维码](https://qian.tencent.com/developers/companyApis/startFlows/CreateMultiFlowSignQRCode)生成的。
如果该二维码尚处于有效期内，可通过本接口将其设置为失效状态。
     */
    async CancelMultiFlowSignQRCode(req, cb) {
        return this.request("CancelMultiFlowSignQRCode", req, cb);
    }
    /**
     * 此接口（DescribeIntegrationEmployees）用于分页查询企业员工信息列表，支持设置过滤条件以筛选员工查询结果。
     */
    async DescribeIntegrationEmployees(req, cb) {
        return this.request("DescribeIntegrationEmployees", req, cb);
    }
    /**
     * 该接口用于发起合同后，生成个人用户的签署链接, 暂时不支持企业端签署 <br/>

**注意**
1. 该接口目前**仅支持签署人类型是个人签署方**的场景(PERSON)。
2. 该接口可生成签署链接的C端签署人必须仅有手写签名和时间类型的签署控件，**不支持填写控件** 。
3. 该签署**链接有效期为30分钟**，过期后将失效，如需签署可重新创建签署链接 。
4. 该接口返回的签署链接适用于APP集成的场景，支持APP打开或浏览器直接打开，**不支持微信小程序嵌入**。
跳转到小程序的实现，参考微信官方文档（分为<a href="https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateToMiniProgram.html">全屏</a>、<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html">半屏</a>两种方式），如何配置也可以请参考: <a href="https://qian.tencent.com/developers/company/openwxminiprogram">跳转电子签小程序配置</a>。
5. 因h5涉及人脸身份认证能力基于慧眼人脸核身，对Android和iOS系统均有一定要求， 因此<font color='red'>App嵌入H5签署合同需要按照慧眼提供的<a href="https://cloud.tencent.com/document/product/1007/61076">慧眼人脸核身兼容性文档</a>做兼容性适配</font>。
     */
    async CreateFlowSignUrl(req, cb) {
        return this.request("CreateFlowSignUrl", req, cb);
    }
    /**
     * 获取个人用户认证证书图片下载URL

个人用户认证证书图片样式如下图

![image](https://dyn.ess.tencent.cn/guide/capi/CreatePersonAuthCertificateImage.png)

注:
<ul>
<li>只能获取个人用户证明图片, 企业员工的暂不支持</li>
<li>处方单等特殊场景专用，此接口为白名单功能，使用前请联系对接的客户经理沟通。  </li>
</ul>
     */
    async CreatePersonAuthCertificateImage(req, cb) {
        return this.request("CreatePersonAuthCertificateImage", req, cb);
    }
    /**
     * 此接口（CreateConvertTaskApi）用来将word、excel、html、图片、txt类型文件转换为PDF文件。<br />
前提条件：源文件已经通过 <a href="https://qian.tencent.com/developers/companyApis/templatesAndFiles/UploadFiles" target="_blank">文件上传接口</a>完成上传，并得到了源文件的资源Id。<br />
适用场景1：已经上传了一个word文件，希望将该word文件转换成pdf文件后发起合同
适用场景2：已经上传了一个jpg图片文件，希望将该图片文件转换成pdf文件后发起合同<br />
转换文件是一个耗时操作，若想查看转换任务是否完成，可以通过<a href="https://qian.tencent.com/developers/companyApis/templatesAndFiles/GetTaskResultApi" target="_blank">查询转换任务状态</a>接口获取任务状态。<br />
注:
1. `支持的文件类型有doc、docx、xls、xlsx、html、jpg、jpeg、png、bmp、txt`
2. `可通过发起合同时设置预览来检查转换文件是否达到预期效果`
     */
    async CreateConvertTaskApi(req, cb) {
        return this.request("CreateConvertTaskApi", req, cb);
    }
    /**
     * 查询流程基础信息
适用场景：可用于主动查询某个合同流程的签署状态信息。可以配合回调通知使用。

注: `每个企业限制日调用量限制：100W，当日超过此限制后再调用接口返回错误`
     */
    async DescribeFlowBriefs(req, cb) {
        return this.request("DescribeFlowBriefs", req, cb);
    }
    /**
     * 此接口用于赋予员工指定的角色权限，如需解绑请使用 DeleteIntegrationRoleUsers 接口。
     */
    async CreateIntegrationUserRoles(req, cb) {
        return this.request("CreateIntegrationUserRoles", req, cb);
    }
    /**
     * 此接口（ModifyIntegrationRole）用来更新企业自定义的SaaS角色或集团角色。

适用场景1：更新当前企业的自定义SaaS角色或集团角色，并且更新时不进行角色中权限的更新（PermissionGroups 参数不传）。

适用场景2：更新当前企业的自定义SaaS角色或集团角色，并且更新时进行角色中权限的设置（PermissionGroups 参数要传），权限树内容 PermissionGroups 可参考接口 DescribeIntegrationRoles 的输出。此处注意权限树内容可能会更新，需尽量拉取最新的权限树内容，并且权限树内容 PermissionGroups 必须是一颗完整的权限树。

适用场景3：更新集团角色管理的子企业列表，可通过设置 SubOrganizationIds 参数达到此效果。

适用场景4：主企业代理子企业操作的场景，需要设置Agent参数，并且ProxyOrganizationId设置为子企业的id即可。

注意事项：SaaS角色和集团角色对应的权限树是不一样的。
     */
    async ModifyIntegrationRole(req, cb) {
        return this.request("ModifyIntegrationRole", req, cb);
    }
    /**
     * 通过此接口，创建小程序批量签署链接，个人/企业员工点击此链接即可跳转小程序进行批量签署。
请确保生成链接时候的身份信息和签署合同参与方的信息保持一致。

注：
- 使用此接口生成链接，需要提前开通 `使用手机号验证签署方身份` 功能，在 `腾讯电子签网页端-企业设置-拓展服务` 中可以找到。
- 参与人点击链接后需短信验证码才能查看合同内容。
- 企业用户批量签署，需要传OrganizationName（参与方所在企业名称）参数生成签署链接，`请确保此企业已完成腾讯电子签企业认证`。
- 个人批量签署，签名区`仅支持手写签名`。
     */
    async CreateBatchSignUrl(req, cb) {
        return this.request("CreateBatchSignUrl", req, cb);
    }
    /**
     * 使用此接口，您可以创建企业批量签署链接，员工只需点击链接即可跳转至控制台进行批量签署。<br/>
附注：
- 员工必须在企业下完成实名认证，且需作为批量签署合同的签署方。
- 如有UserId，应以UserId为主要标识；如果没有UserId，则必须填写Name和Mobile信息。
     */
    async CreateOrganizationBatchSignUrl(req, cb) {
        return this.request("CreateOrganizationBatchSignUrl", req, cb);
    }
    /**
     * 指定需要批量催办的签署流程ID，批量催办合同，最多100个。需要符合以下条件的合同才可被催办：

1. 发起合同时，**签署人的NotifyType需设置为sms**
2. 合同中当前状态为 **待签署** 的签署人是催办的对象
3. **每个合同只能催办一次**

**催办的效果**: 对方会收到如下的短信通知
![image](https://qcloudimg.tencent-cloud.cn/raw/3caf94b7f540fa5736270d38528d3a7b.png)

注：`合同催办是白名单功能，请联系客户经理申请开白后使用`
     */
    async CreateFlowReminds(req, cb) {
        return this.request("CreateFlowReminds", req, cb);
    }
    /**
     * 查询流程填写控件内容，可以根据合同流程ID查询该合同流程相关联的填写控件信息和填写内容。
     */
    async DescribeFlowComponents(req, cb) {
        return this.request("DescribeFlowComponents", req, cb);
    }
    /**
     * 通过此接口可以关闭个人用户自动签功能。
无需对应的用户刷脸等方式同意即可关闭。

注意:

<ul><li>处方单等特殊场景专用，此接口为白名单功能，使用前请联系对接的客户经理沟通。</li>
<li>如果此用户在开通时候绑定过个人自动签账号许可,  关闭此用户的自动签不会归还个人自动签账号许可的额度。</li></ul>
     */
    async DisableUserAutoSign(req, cb) {
        return this.request("DisableUserAutoSign", req, cb);
    }
    /**
     * 此接口（DescribePersonCertificate）用于查询个人数字证书信息。<br />注：`1.目前仅用于查询开通了医疗自动签署功能的个人数字证书。`<br />`2.调用此接口需要开通白名单，使用前请联系相关人员开通白名单。`
     */
    async DescribePersonCertificate(req, cb) {
        return this.request("DescribePersonCertificate", req, cb);
    }
    /**
     * 通过AuthCode查询个人用户是否实名


注意:
<ul>
<li>此接口为合作引流场景使用，使用`有白名单限制`，使用前请联系对接的客户经理沟通。</li>
<li>`AuthCode 只能使用一次`，查询一次再次查询会返回错误</li>
</ul>
     */
    async DescribeThirdPartyAuthCode(req, cb) {
        return this.request("DescribeThirdPartyAuthCode", req, cb);
    }
    /**
     * 用来设置本企业嵌入式页面个性化主题配置（例如是否展示电子签logo、定义主题色等），设置后获取的web签署界面都会使用此配置进行展示。

如果多次调用，会以最后一次的配置为准
     */
    async CreateWebThemeConfig(req, cb) {
        return this.request("CreateWebThemeConfig", req, cb);
    }
    /**
     * 查询企业印章的列表，需要操作者具有查询印章权限
客户指定需要获取的印章数量和偏移量，数量最多100，超过100按100处理；入参InfoType控制印章是否携带授权人信息，为1则携带，为0则返回的授权人信息为空数组。接口调用成功返回印章的信息列表还有企业印章的总数。
     */
    async DescribeOrganizationSeals(req, cb) {
        return this.request("DescribeOrganizationSeals", req, cb);
    }
    /**
     * 该接口（DeleteIntegrationEmployees）用于移除企业员工，同时可选择是否进行离职交接。
-  如果不设置交接人的ReceiveUserId或ReceiveOpenId，则该员工将被直接移除而不进行交接操作。
-  如果设置了ReceiveUserId或ReceiveOpenId，该员工未处理的合同将会被系统交接给设置的交接人，然后再对该员工进行离职操作。

注：`1. 超管或法人身份的员工不能被删除。2. 员工存在待处理合同且无人交接时不能被删除。`
     */
    async DeleteIntegrationEmployees(req, cb) {
        return this.request("DeleteIntegrationEmployees", req, cb);
    }
    /**
     * 此接口（CreateOrganizationInfoChangeUrl）用于创建企业信息变更链接，支持创建企业超管变更链接或企业基础信息变更链接，通过入参ChangeType指定。


<h3 id="1-企业超管变更">1. 企业超管变更</h3>

<p>换成企业的其他员工来当超管</p>

<h3 id="2-企业基础信息变更">2. 企业基础信息变更</h3>

<h4 id="可以变动">可以变动</h4>

<ul>
<li>企业名称<br>
</li>
<li>法定代表人姓名(新法人有邀请链接)<br>
</li>
<li>企业地址和所在地</li>
</ul>

<h4 id="不可变动">不可变动</h4>

<ul>
<li>统一社会信用代码<br>
</li>
<li>企业主体类型</li>
</ul>

<p>如果企业名称变动会引起下面的变动</p>

<ul>
<li>合同:   老合同不做任何处理,   新发起的合同需要用新的企业名字作为签署方, 否则无法签署</li>
<li>印章:   会删除所有的印章所有的机构公章和合同专用章,  然后用新企业名称生成新的机构公章 和合同专用章,  而法人章, 财务专用章和人事专用章不会处理</li>
<li>证书:   企业证书会重新请求CA机构用新企业名称生成新的证书</li>
</ul>
     */
    async CreateOrganizationInfoChangeUrl(req, cb) {
        return this.request("CreateOrganizationInfoChangeUrl", req, cb);
    }
    /**
     * 用来撤销<a href="https://qian.tencent.com/developers/companyApis/users/CreateUserAutoSignEnableUrl" target="_blank">获取个人用户自动签的开通状态</a>生成的开通链接，撤销生成的链接失效。

注:
<ul><li>若个人用户已经用生成的完成自动签署的开通，撤销链接无效不会对开通结果产生影响(此情况接口会报错)。</li>
<li>处方单等特殊场景专用，此接口为白名单功能，使用前请联系对接的客户经理沟通。</li></ul>
     */
    async CancelUserAutoSignEnableUrl(req, cb) {
        return this.request("CancelUserAutoSignEnableUrl", req, cb);
    }
    /**
     * 通过此接口（DescribeBillUsageDetail）查询该企业的套餐消耗详情。
     */
    async DescribeBillUsageDetail(req, cb) {
        return this.request("DescribeBillUsageDetail", req, cb);
    }
    /**
     * 此接口（DescribeIntegrationDepartments）用于查询企业的部门信息列表，支持查询单个部门节点或单个部门节点及一级子节点部门列表。
     */
    async DescribeIntegrationDepartments(req, cb) {
        return this.request("DescribeIntegrationDepartments", req, cb);
    }
    /**
     * 此接口（CreateFlowGroupByFiles）可用于通过多个文件创建合同组签署流程。

适用场景：该接口适用于需要一次性完成多份合同签署的情况，多份合同一般具有关联性，用户以目录的形式查看合同。

注意事项：使用该接口需要先依赖[多文件上传](https://qian.tencent.com/developers/companyApis/templatesAndFiles/UploadFiles)接口返回的FileIds。

注：`合同发起后就会扣减合同的额度, 如果未签署完成时撤销合同会返还此额度（过期，拒签，签署完成，解除完成等状态不会返还额度），合同组中每个合同会扣减一个合同额度`
     */
    async CreateFlowGroupByFiles(req, cb) {
        return this.request("CreateFlowGroupByFiles", req, cb);
    }
    /**
     * 此API接口用来查询加入集团的成员企业信息
适用场景：子企业在加入集团后，主企业可能通过此接口获取到所有的子企业列表，方便进行展示和统计
     */
    async DescribeOrganizationGroupOrganizations(req, cb) {
        return this.request("DescribeOrganizationGroupOrganizations", req, cb);
    }
    /**
     * 本接口（CreateSealPolicy）用于对企业员工进行印章授权
     */
    async CreateSealPolicy(req, cb) {
        return this.request("CreateSealPolicy", req, cb);
    }
    /**
     * 删除企业扩展服务授权，当前仅支持 “企业自动签” 和“批量签署”  的取消授权。
该接口作用和电子签控制台 企业设置-扩展服务-企业自动签署和批量签署授权 两个模块功能相同，可通过该接口取消企业员工授权。

注：支持集团代子企业操作，请联系运营开通此功能。
     */
    async DeleteExtendedServiceAuthInfos(req, cb) {
        return this.request("DeleteExtendedServiceAuthInfos", req, cb);
    }
    /**
     * 此接口（CreateIntegrationEmployees）用于创建企业员工。调用成功后会给员工发送提醒员工实名的短信。若通过手机号发现员工已经创建，则不会重新创建，但会发送短信提醒员工实名。另外，此接口还支持通过企微组织架构的openid 创建员工（将WeworkOpenId字段设置为企微员工明文的openid，但需确保该企微员工在应用的可见范围内），该场景下，员工会接收到提醒实名的企微消息。
     */
    async CreateIntegrationEmployees(req, cb) {
        return this.request("CreateIntegrationEmployees", req, cb);
    }
    /**
     * 更新员工信息(姓名，手机号，邮件、部门)，用户实名后无法更改姓名与手机号。
可进行批量操作，Employees中的userID与openID二选一必填
     */
    async UpdateIntegrationEmployees(req, cb) {
        return this.request("UpdateIntegrationEmployees", req, cb);
    }
}
exports.Client = Client;
