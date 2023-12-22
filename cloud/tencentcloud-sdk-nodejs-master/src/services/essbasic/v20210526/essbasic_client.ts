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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  SyncProxyOrganizationResponse,
  BillUsageDetail,
  ChannelCreateConvertTaskApiResponse,
  ChannelCreateFlowRemindsResponse,
  Component,
  ChannelDeleteSealPoliciesRequest,
  ChannelBatchCancelFlowsResponse,
  ChannelDisableUserAutoSignResponse,
  DescribeExtendedServiceAuthDetailResponse,
  Department,
  CommonApproverOption,
  ChannelCreateFlowGroupByTemplatesResponse,
  ChannelCreateFlowSignReviewRequest,
  AuthFailMessage,
  DescribeFlowDetailInfoRequest,
  ChannelCancelUserAutoSignEnableUrlResponse,
  ModifyExtendedServiceRequest,
  DescribeResourceUrlsByFlowsRequest,
  AuthInfoDetail,
  CreateChannelOrganizationInfoChangeUrlResponse,
  RemindFlowRecords,
  ChannelCreateFlowSignUrlResponse,
  HasAuthUser,
  ChannelCreateBatchSignUrlResponse,
  ChannelCreatePrepareFlowResponse,
  WebThemeConfig,
  OperateChannelTemplateResponse,
  FlowFileInfo,
  CreateFlowOption,
  ChannelCreateRoleRequest,
  BaseFlowInfo,
  ReleasedApprover,
  CreateConsoleLoginUrlResponse,
  ChannelDeleteRoleUsersRequest,
  ChannelCreateUserRolesResponse,
  SyncProxyOrganizationRequest,
  ChannelCreatePrepareFlowRequest,
  ChannelCreateFlowRemindsRequest,
  ChannelCreateSealPolicyResponse,
  FormField,
  ChannelCancelFlowResponse,
  DownloadFlowInfo,
  FlowApproverUrlInfo,
  ChannelCreateWebThemeConfigRequest,
  ChannelCreateConvertTaskApiRequest,
  ChannelCreateFlowByFilesRequest,
  UploadFilesResponse,
  Agent,
  ChannelCreatePreparedPersonalEsignResponse,
  FlowApproverDetail,
  DescribeResourceUrlsByFlowsResponse,
  ChannelCreateFlowGroupByFilesRequest,
  ChannelCreateOrganizationModifyQrCodeRequest,
  ChannelCreateFlowByFilesResponse,
  DescribeFlowDetailInfoResponse,
  RecipientComponentInfo,
  ChannelDescribeRolesRequest,
  DescribeBatchOrganizationRegistrationUrlsRequest,
  PrepareFlowsResponse,
  ChannelCancelFlowRequest,
  TemplateInfo,
  ChannelCreateOrganizationBatchSignUrlRequest,
  GetDownloadFlowUrlResponse,
  ChannelRole,
  Recipient,
  DescribeTemplatesResponse,
  AutoSignConfig,
  StaffRole,
  CreateBatchOrganizationRegistrationTasksResponse,
  ChannelVerifyPdfRequest,
  CreateChannelFlowEvidenceReportRequest,
  ChannelDescribeBillUsageDetailRequest,
  ChannelCancelUserAutoSignEnableUrlRequest,
  Permission,
  DescribeExtendedServiceAuthDetailRequest,
  OrganizationAuthUrl,
  Staff,
  ComponentLimit,
  ChannelVerifyPdfResponse,
  CreateConsoleLoginUrlRequest,
  OrganizationInfo,
  SignUrlInfo,
  CommonFlowApprover,
  FillApproverInfo,
  ChannelCreateUserAutoSignSealUrlRequest,
  PdfVerifyResult,
  UserThreeFactor,
  ChannelCreateUserAutoSignEnableUrlRequest,
  ChannelCancelMultiFlowSignQRCodeRequest,
  FlowGroupOptions,
  ChannelDescribeOrganizationSealsRequest,
  DescribeUsageRequest,
  DescribeExtendedServiceAuthInfoRequest,
  DescribeChannelSealPolicyWorkflowUrlRequest,
  CreatePartnerAutoSignAuthUrlResponse,
  FlowInfo,
  UserInfo,
  TaskInfo,
  ChannelCreateBoundFlowsResponse,
  ChannelCreateUserAutoSignSealUrlResponse,
  ApproverComponentLimitType,
  HasAuthOrganization,
  ResourceUrlInfo,
  ChannelCreateBatchQuickSignUrlRequest,
  ChannelCreateBoundFlowsRequest,
  ChannelDescribeEmployeesRequest,
  AuthorizedUser,
  ChannelDeleteRoleUsersResponse,
  SyncProxyOrganizationOperatorsRequest,
  ChannelCreateFlowApproversResponse,
  DescribeBillUsageDetailResponse,
  DescribeUsageResponse,
  CreateSignUrlsRequest,
  RegistrationOrganizationInfo,
  ChannelCreateMultiFlowSignQRCodeRequest,
  SignQrCode,
  FlowApproverInfo,
  ChannelCreateUserAutoSignEnableUrlResponse,
  ChannelGetTaskResultApiRequest,
  DescribeChannelOrganizationsRequest,
  ChannelCreatePreparedPersonalEsignRequest,
  FillError,
  ChannelDescribeBillUsageDetailResponse,
  FlowDetailInfo,
  CreateFlowsByTemplatesResponse,
  DescribeChannelFlowEvidenceReportRequest,
  ChannelCreateRoleResponse,
  SyncProxyOrganizationOperatorsResponse,
  FailedCreateRoleData,
  ChannelDescribeUserAutoSignStatusRequest,
  FlowResourceUrlInfo,
  UploadFile,
  ExtentServiceAuthInfo,
  ChannelModifyRoleResponse,
  Filter,
  FilledComponent,
  FlowApproverItem,
  ChannelOrganizationInfo,
  CreateSignUrlsResponse,
  ChannelDeleteRoleRequest,
  CreateBatchOrganizationRegistrationTasksRequest,
  ChannelCreateBatchQuickSignUrlResponse,
  CreatePartnerAutoSignAuthUrlRequest,
  ChannelCreateBatchCancelFlowUrlRequest,
  ApproverRestriction,
  PrepareFlowsRequest,
  ApproverItem,
  ChannelCreateFlowSignReviewResponse,
  ChannelDisableUserAutoSignRequest,
  ChannelDescribeOrganizationSealsResponse,
  CreateSealByImageResponse,
  ChannelCancelMultiFlowSignQRCodeResponse,
  ChannelDescribeRolesResponse,
  ChannelCreateReleaseFlowRequest,
  ChannelDescribeFlowComponentsResponse,
  ChannelCreateFlowGroupByFilesResponse,
  ChannelCreateMultiFlowSignQRCodeResponse,
  ApproverOption,
  ChannelDescribeUserAutoSignStatusResponse,
  ProxyOrganizationOperator,
  ModifyExtendedServiceResponse,
  ChannelCreateUserRolesRequest,
  ChannelGetTaskResultApiResponse,
  PermissionGroup,
  ChannelCreateBatchSignUrlRequest,
  ChannelCreateOrganizationModifyQrCodeResponse,
  ChannelDeleteSealPoliciesResponse,
  ChannelCreateWebThemeConfigResponse,
  GetDownloadFlowUrlRequest,
  ChannelCreateEmbedWebUrlResponse,
  ChannelBatchCancelFlowsRequest,
  CreateChannelOrganizationInfoChangeUrlRequest,
  ChannelModifyRoleRequest,
  ChannelUpdateSealStatusRequest,
  ChannelCreateFlowGroupByTemplatesRequest,
  SignUrl,
  ChannelBillUsageDetail,
  DescribeBillUsageDetailRequest,
  RelieveInfo,
  ChannelCreateSealPolicyRequest,
  OccupiedSeal,
  CreateFlowsByTemplatesRequest,
  DescribeBatchOrganizationRegistrationUrlsResponse,
  UploadFilesRequest,
  DescribeChannelOrganizationsResponse,
  ChannelCreateOrganizationBatchSignUrlResponse,
  UsageDetail,
  ChannelCreateBatchCancelFlowUrlResponse,
  OperateChannelTemplateRequest,
  DescribeChannelSealPolicyWorkflowUrlResponse,
  CreateChannelFlowEvidenceReportResponse,
  SyncFailReason,
  ChannelDescribeEmployeesResponse,
  ChannelDeleteRoleResponse,
  ChannelCreateReleaseFlowResponse,
  DescribeChannelFlowEvidenceReportResponse,
  CreateSealByImageRequest,
  ChannelCreateFlowApproversRequest,
  ChannelUpdateSealStatusResponse,
  ChannelCreateFlowSignUrlRequest,
  DescribeTemplatesRequest,
  DescribeExtendedServiceAuthInfoResponse,
  ChannelCreateEmbedWebUrlRequest,
  CcInfo,
  ChannelDescribeFlowComponentsRequest,
} from "./essbasic_models"

/**
 * essbasic client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("essbasic.tencentcloudapi.com", "2021-05-26", clientConfig)
  }

  /**
   * 此接口（ChannelDeleteSealPolicies）用于删除已指定员工印章授权信息，删除员工的印章授权后，该员工使用印章进行盖章时，将需要提交印章授权申请且通过审核后才能使用该印章进行签署。
   */
  async ChannelDeleteSealPolicies(
    req: ChannelDeleteSealPoliciesRequest,
    cb?: (error: string, rep: ChannelDeleteSealPoliciesResponse) => void
  ): Promise<ChannelDeleteSealPoliciesResponse> {
    return this.request("ChannelDeleteSealPolicies", req, cb)
  }

  /**
     * 提交企业流程审批结果
目前存在两种审核操作，签署审核，发起审核
签署审核：通过接口（CreateFlowsByTemplates或ChannelCreateFlowByFiles或ChannelCreatePrepareFlow）发起签署流程后，若指定了参数 NeedSignReview 为true,则可以调用此接口，指定operate=SignReview，提交企业内部签署审批结果；若签署流程状态正常，且本企业存在签署方未签署，同一签署流程可以多次提交签署审批结果，签署时的最后一个“审批结果”有效

发起审核：通过接口ChannelCreatePrepareFlow指定发起后需要审核，则可以通过调用此接口，指定operate=CreateReview，提交企业内部审批结果，可多次提交，当通过后，后续提交结果无效
     */
  async ChannelCreateFlowSignReview(
    req: ChannelCreateFlowSignReviewRequest,
    cb?: (error: string, rep: ChannelCreateFlowSignReviewResponse) => void
  ): Promise<ChannelCreateFlowSignReviewResponse> {
    return this.request("ChannelCreateFlowSignReview", req, cb)
  }

  /**
     * 修改（操作）企业扩展服务 ，企业经办人需要是企业超管或者法人。

跳转小程序的几种方式：主要是设置不同的EndPoint
1. 通过链接Url直接跳转到小程序，不需要返回
设置EndPoint为WEIXINAPP，得到链接打开即可。

2. 客户App直接跳转到小程序-->腾讯电子签小程序操作完成-->返回App
跳转到小程序的实现，参考官方文档
https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/launchApp.html
其中小程序的原始Id，请联系<对接技术人员>获取，或者查看小程序信息自助获取。
设置EndPoint为APP，得到path。

4. 客户小程序直接跳到电子签小程序-->腾讯电子签小程序操作完成--->回到客户小程序
跳转到小程序的实现，参考官方文档（分为全屏、半屏两种方式）
全屏方式：
（https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateToMiniProgram.html）
半屏方式：
（https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html）
其中小程序的原始Id，请联系<对接技术人员>获取，或者查看小程序信息自助获取。
设置EndPoint为APP，得到path。

其中小程序的原始Id如下，或者查看小程序信息自助获取。

| 小程序 | AppID | 原始ID |
| ------------ | ------------ | ------------ |
| 腾讯电子签（正式版） | wxa023b292fd19d41d | gh_da88f6188665 |
| 腾讯电子签Demo | wx371151823f6f3edf | gh_39a5d3de69fa |
     */
  async ModifyExtendedService(
    req: ModifyExtendedServiceRequest,
    cb?: (error: string, rep: ModifyExtendedServiceResponse) => void
  ): Promise<ModifyExtendedServiceResponse> {
    return this.request("ModifyExtendedService", req, cb)
  }

  /**
     * 此接口（ChannelCreateMultiFlowSignQRCode）用于创建一码多扫流程签署二维码。 

**适用场景**:
签署人可通过扫描二维码补充签署信息进行实名签署。常用于提前不知道签署人的身份信息场景，例如：劳务工招工、大批量员工入职等场景。

**注意**:
1. 本接口适用于**发起方没有填写控件的 B2C或者单C模板**,  若是B2C模板,还要满足以下任意一个条件
    - 模板中配置的签署顺序是无序
    - B端企业的签署方式是静默签署
    - B端企业是非首位签署
2. 通过一码多扫二维码发起的合同，合同涉及到的回调消息可参考文档[合同发起及签署相关回调
]( https://qian.tencent.com/developers/partner/callback_types_contracts_sign)
3. 用户通过签署二维码发起合同时，因企业额度不足导致失败 会触发签署二维码相关回调,具体参考文档[签署二维码相关回调](https://qian.tencent.com/developers/partner/callback_types_commons#%E7%AD%BE%E7%BD%B2%E4%BA%8C%E7%BB%B4%E7%A0%81%E7%9B%B8%E5%85%B3%E5%9B%9E%E8%B0%83)

二维码的样式如下图:
![image](https://qcloudimg.tencent-cloud.cn/raw/27317cf5aacb094fb1dc6f94179a5148.png )
     */
  async ChannelCreateMultiFlowSignQRCode(
    req: ChannelCreateMultiFlowSignQRCodeRequest,
    cb?: (error: string, rep: ChannelCreateMultiFlowSignQRCodeResponse) => void
  ): Promise<ChannelCreateMultiFlowSignQRCodeResponse> {
    return this.request("ChannelCreateMultiFlowSignQRCode", req, cb)
  }

  /**
     * 此接口（ChannelModifyRole）用来更新企业自定义角色。

适用场景1：更新当前企业的自定义角色的名称或描述等其他信息，更新时不进行权限的设置（PermissionGroups 参数不传）。

适用场景2：更新当前企业的自定义角色的权限信息，更新时进行权限的设置（PermissionGroups 参数要传），权限树内容 PermissionGroups 可参考[查询角色列表接口](https://qian.tencent.com/developers/partnerApis/accounts/ChannelDescribeRoles) 的输出。此处注意权限树内容可能会更新，需尽量拉取最新的权限树内容，并且权限树内容 PermissionGroups 必须是一颗完整的权限树。
     */
  async ChannelModifyRole(
    req: ChannelModifyRoleRequest,
    cb?: (error: string, rep: ChannelModifyRoleResponse) => void
  ): Promise<ChannelModifyRoleResponse> {
    return this.request("ChannelModifyRole", req, cb)
  }

  /**
     * 接口（ChannelCreateFlowByFiles）用PDF文件创建签署流程。

适用场景：适用非制式的合同文件签署，开发者有每个签署流程的PDF，可以通过该接口传入完整的PDF文件及流程信息生成待签署的合同流程。

**注**: 
<ul>
<li>此接口静默签(企业自动签)能力为白名单功能，使用前请联系对接的客户经理沟通。</li>
<li>此接口需要依赖<a href="https://qian.tencent.com/developers/partnerApis/files/UploadFiles" target="_blank">文件上传接口</a>生成pdf资源编号（FileIds）进行使用。整体的逻辑如下图</li>
</ul>

![image](https://qcloudimg.tencent-cloud.cn/raw/bf86248a2c163228c4e894cf5926af69/ChannelCreateFlowByFiles.png)

**可以作为发起方和签署方的角色列表**
<table>
<thead>
<tr>
<th>场景编号</th>
<th>可作为发起方类型</th>
<th>可作为签署方的类型</th>
</tr>
</thead>

<tbody>
<tr>
<td>场景一</td>
<td>第三方子企业A员工</td>
<td>第三方子企业A员工</td>
</tr>

<tr>
<td>场景二</td>
<td>第三方子企业A员工</td>
<td>第三方子企业B(不指定经办人)</td>
</tr>

<tr>
<td>场景三</td>
<td>第三方子企业A员工</td>
<td>第三方子企业B员工</td>
</tr>

<tr>
<td>场景四</td>
<td>第三方子企业A员工</td>
<td>个人/自然人</td>
</tr>

<tr>
<td>场景五</td>
<td>第三方子企业A员工</td>
<td>SaaS平台企业员工</td>
</tr>
</tbody>
</table>

**注**: 
`1. 发起合同时候,  作为发起方的第三方子企业A员工的企业和员工必须经过实名, 而作为签署方的第三方子企业A员工/个人/自然人/SaaS平台企业员工/第三方子企业B员工企业中的企业和个人/员工可以未实名`

`2. 不同类型的签署方传参不同, 可以参考开发者中心的FlowApproverInfo结构体说明`

`3. 合同发起后就会扣减合同的额度, 如果未签署完成时撤销合同会返还此额度（过期，拒签，签署完成，解除完成等状态不会返还额度）`

`4. 静默（自动）签署不支持合同签署方存在填写功能`
     */
  async ChannelCreateFlowByFiles(
    req: ChannelCreateFlowByFilesRequest,
    cb?: (error: string, rep: ChannelCreateFlowByFilesResponse) => void
  ): Promise<ChannelCreateFlowByFilesResponse> {
    return this.request("ChannelCreateFlowByFiles", req, cb)
  }

  /**
     * 此接口用于获取企业批量认证异步任务的状态及结果。

前提条件：已调用 CreateBatchOrganizationRegistrationTasks创建企业批量认证链接任务接口，并得到了任务Id。

异步任务的处理完成时间视当前已提交的任务量、任务的复杂程度等因素决定，正常情况下 3~5 秒即可完成，但也可能需要更长的时间
     */
  async DescribeBatchOrganizationRegistrationUrls(
    req: DescribeBatchOrganizationRegistrationUrlsRequest,
    cb?: (error: string, rep: DescribeBatchOrganizationRegistrationUrlsResponse) => void
  ): Promise<DescribeBatchOrganizationRegistrationUrlsResponse> {
    return this.request("DescribeBatchOrganizationRegistrationUrls", req, cb)
  }

  /**
     * 1. 可以**通过图片**为子客企业代创建印章，图片最大5MB

2. 可以**系统创建**子客企业代创建印章, 系统创建的印章样子下图(样式可以调整)

![image](https://dyn.ess.tencent.cn/guide/capi/CreateSealByImage.png)
     */
  async CreateSealByImage(
    req: CreateSealByImageRequest,
    cb?: (error: string, rep: CreateSealByImageResponse) => void
  ): Promise<CreateSealByImageResponse> {
    return this.request("CreateSealByImage", req, cb)
  }

  /**
     * 此接口（CancelMultiFlowSignQRCode）用于废除一码多扫流程签署二维码。
该接口所需的二维码ID，源自[创建一码多扫流程签署二维码](https://qian.tencent.com/developers/partnerApis/templates/ChannelCreateMultiFlowSignQRCode)生成的。
如果该二维码尚处于有效期内，可通过本接口将其设置为失效状态。
     */
  async ChannelCancelMultiFlowSignQRCode(
    req: ChannelCancelMultiFlowSignQRCodeRequest,
    cb?: (error: string, rep: ChannelCancelMultiFlowSignQRCodeResponse) => void
  ): Promise<ChannelCancelMultiFlowSignQRCodeResponse> {
    return this.request("ChannelCancelMultiFlowSignQRCode", req, cb)
  }

  /**
     * 查询企业扩展服务的开通和授权情况，当前支持查询以下内容：
1. 企业自动签
2. 企业与港澳台居民签署合同
3. 使用手机号验证签署方身份
4. 骑缝章
5. 拓宽签署方年龄限制
6. 下载企业合同/文件

注: 此接口 参数Agent. ProxyOperator.OpenId 需要传递超管或者法人的OpenId
     */
  async DescribeExtendedServiceAuthInfo(
    req: DescribeExtendedServiceAuthInfoRequest,
    cb?: (error: string, rep: DescribeExtendedServiceAuthInfoResponse) => void
  ): Promise<DescribeExtendedServiceAuthInfoResponse> {
    return this.request("DescribeExtendedServiceAuthInfo", req, cb)
  }

  /**
     * 分页查询企业角色列表，法人的角色是系统保留角色，不会返回，按照角色创建时间升序排列。


<font color="red">**系统默认角色**</font>说明可参考下表

| 角色名称| 建议授予对象 | 角色描述 |
| --- | --- | --- |
| **超级管理员** |电子签业务最高权限，可以授权给法务/企业法人/业务负责人等 | 所有功能和数据管理权限，只能设置一位超管。 |
| **业务管理员**|IT 系统负责人，可以授权给CTO等 | 企业合同模块、印章模块、模板模块等全量功能及数据权限。 |
| **经办人**|企业法务负责人等 | 发起合同、签署合同（含填写、拒签）、撤销合同、持有印章等权限能力，可查看企业所有合同数据。 |
| **业务员**|销售员、采购员 等| 发起合同、签署合同（含填写、拒签）、撤销合同、持有印章等权限能力，可查看自己相关所有合同数据。 |
     */
  async ChannelDescribeRoles(
    req: ChannelDescribeRolesRequest,
    cb?: (error: string, rep: ChannelDescribeRolesResponse) => void
  ): Promise<ChannelDescribeRolesResponse> {
    return this.request("ChannelDescribeRoles", req, cb)
  }

  /**
     * 此接口（ChannelCreateConvertTaskApi）用来将word、excel、html、图片、txt类型文件转换为PDF文件。<br />
前提条件：源文件已经通过 <a href="https://qian.tencent.com/developers/partnerApis/files/UploadFiles" target="_blank">文件上传接口</a>完成上传，并得到了源文件的资源Id。<br />
适用场景1：已经上传了一个word文件，希望将该word文件转换成pdf文件后发起合同
适用场景2：已经上传了一个jpg图片文件，希望将该图片文件转换成pdf文件后发起合同<br />
转换文件是一个耗时操作，若想查看转换任务是否完成，可以通过<a href="https://qian.tencent.com/developers/partnerApis/files/ChannelGetTaskResultApi" target="_blank">查询转换任务状态</a>接口获取任务状态。<br />
注: 
1. `支持的文件类型有doc、docx、xls、xlsx、html、jpg、jpeg、png、bmp、txt`
2. `可通过发起合同时设置预览来检查转换文件是否达到预期效果`
     */
  async ChannelCreateConvertTaskApi(
    req: ChannelCreateConvertTaskApiRequest,
    cb?: (error: string, rep: ChannelCreateConvertTaskApiResponse) => void
  ): Promise<ChannelCreateConvertTaskApiResponse> {
    return this.request("ChannelCreateConvertTaskApi", req, cb)
  }

  /**
     * 此接口（DescribeUsage）用于获取此应用下子客企业的合同消耗数量。

注: 此接口**每日限频50次**，若要扩大限制次数,请提前与客服经理或邮件至e-contract@tencent.com进行联系。
     */
  async DescribeUsage(
    req: DescribeUsageRequest,
    cb?: (error: string, rep: DescribeUsageResponse) => void
  ): Promise<DescribeUsageResponse> {
    return this.request("DescribeUsage", req, cb)
  }

  /**
     * 查询企业扩展服务的授权详情（列表），当前支持查询以下内容：

1. **企业自动签**
2. **批量签署**


注: <font color='red'>所在企业的超管、法人才有权限调用此接口</font>(Agent.ProxyOperator.OpenId 需要传递超管或者法人的OpenId)
     */
  async DescribeExtendedServiceAuthDetail(
    req: DescribeExtendedServiceAuthDetailRequest,
    cb?: (error: string, rep: DescribeExtendedServiceAuthDetailResponse) => void
  ): Promise<DescribeExtendedServiceAuthDetailResponse> {
    return this.request("DescribeExtendedServiceAuthDetail", req, cb)
  }

  /**
     * 撤销签署流程接口

适用场景：如果某个合同流程当前至少还有一方没有签署，则可通过该接口取消该合同流程。常用于合同发错、内容填错，需要及时撤销的场景。

- **可撤回合同状态**：未全部签署完成
- **不撤回合同状态**：已全部签署完成、已拒签、已过期、已撤回、拒绝填写、已解除等合同状态。

注:
- 有对应合同撤销权限的人:  <font color='red'>**合同的发起人或者发起人所在企业的超管、法人**</font>
- 签署完毕的合同需要双方走解除流程将合同作废，可以参考<a href="https://qian.tencent.com/developers/partnerApis/startFlows/ChannelCreateReleaseFlow" target="_blank">发起解除合同流程接口</a>
     */
  async ChannelCancelFlow(
    req: ChannelCancelFlowRequest,
    cb?: (error: string, rep: ChannelCancelFlowResponse) => void
  ): Promise<ChannelCancelFlowResponse> {
    return this.request("ChannelCancelFlow", req, cb)
  }

  /**
     * 通过此接口，可以创建企业批量签署链接，员工只需点击链接即可跳转至控制台进行批量签署。

注：
- 员工必须在企业下完成实名认证，且需作为批量签署合同的签署方或者领取方。
- 仅支持传入待签署或者待领取的合同，待填写暂不支持。
- 员工批量签署，支持多种签名方式，包括手写签名、临摹签名、系统签名、个人印章、签批控件等。
     */
  async ChannelCreateOrganizationBatchSignUrl(
    req: ChannelCreateOrganizationBatchSignUrlRequest,
    cb?: (error: string, rep: ChannelCreateOrganizationBatchSignUrlResponse) => void
  ): Promise<ChannelCreateOrganizationBatchSignUrlResponse> {
    return this.request("ChannelCreateOrganizationBatchSignUrl", req, cb)
  }

  /**
   * 将指定印章授权给第三方平台子客企业下的某些员工
   */
  async ChannelCreateSealPolicy(
    req: ChannelCreateSealPolicyRequest,
    cb?: (error: string, rep: ChannelCreateSealPolicyResponse) => void
  ): Promise<ChannelCreateSealPolicyResponse> {
    return this.request("ChannelCreateSealPolicy", req, cb)
  }

  /**
     * 该接口用于发起合同后，生成个人用户的批量签署链接, 暂时不支持企业端签署。
**注意**：
1. 该接口目前仅支持签署人类型是**个人签署方的批量签署场景**(ApproverType=PERSON)。
2. 该接口可生成批量签署链接的C端签署人**必须仅有手写签名和时间类型的签署控件**，**不支持填写控件** 。
3. 请确保C端签署人在批量签署合同中**为待签署状态**，如需顺序签署请待前一位参与人签署完成后，再创建该C端用户的签署链接。
4. 该签署链接**有效期为30分钟**，过期后将失效，如需签署可重新创建批量签署链接 。
5. 该接口返回的签署链接适用于APP集成的场景，支持APP打开或浏览器直接打开，**不支持微信小程序嵌入**。
跳转到小程序的实现，参考微信官方文档(分为<a href="https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateToMiniProgram.html">全屏</a>、<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html">半屏</a>两种方式)，如何配置也可以请参考: <a href="https://qian.tencent.com/developers/company/openwxminiprogram">跳转电子签小程序配置</a>。
6.  因h5涉及人脸身份认证能力基于慧眼人脸核身，对Android和iOS系统均有一定要求， 因此<font color='red'>App嵌入H5签署合同需要按照慧眼提供的<a href="https://cloud.tencent.com/document/product/1007/61076">慧眼人脸核身兼容性文档</a>做兼容性适配</font>。
     */
  async ChannelCreateBatchQuickSignUrl(
    req: ChannelCreateBatchQuickSignUrlRequest,
    cb?: (error: string, rep: ChannelCreateBatchQuickSignUrlResponse) => void
  ): Promise<ChannelCreateBatchQuickSignUrlResponse> {
    return this.request("ChannelCreateBatchQuickSignUrl", req, cb)
  }

  /**
     * 接口（CreateFlowsByTemplates）用于使用模板批量创建签署流程。当前可批量发起合同（签署流程）数量为1-20个。
如若在模板中配置了动态表格, 上传的附件必须为A4大小 
合同发起人必须在电子签已经进行实名。

**整体的逻辑如下**

![image](https://qcloudimg.tencent-cloud.cn/raw/e193519d4383fa74782a9e19147ef01a/CreateFlowsByTemplates.png)

**可以作为发起方和签署方的角色列表**
<table>
<thead>
<tr>
<th>场景编号</th>
<th>可作为发起方类型</th>
<th>可作为签署方的类型</th>
</tr>
</thead>

<tbody>
<tr>
<td>场景一</td>
<td>第三方子企业A员工</td>
<td>第三方子企业A员工</td>
</tr>

<tr>
<td>场景二</td>
<td>第三方子企业A员工</td>
<td>第三方子企业B(不指定经办人)</td>
</tr>

<tr>
<td>场景三</td>
<td>第三方子企业A员工</td>
<td>第三方子企业B员工</td>
</tr>

<tr>
<td>场景四</td>
<td>第三方子企业A员工</td>
<td>个人/自然人</td>
</tr>

<tr>
<td>场景五</td>
<td>第三方子企业A员工</td>
<td>SaaS平台企业员工</td>
</tr>
</tbody>
</table>

**注**: 
`1. 发起合同时候,  作为发起方的第三方子企业A员工的企业和员工必须经过实名, 而作为签署方的第三方子企业A员工/个人/自然人/SaaS平台企业员工/第三方子企业B员工企业中的企业和个人/员工可以未实名`

`2. 不同类型的签署方传参不同, 可以参考开发者中心的FlowApproverInfo结构体说明`

`3. 合同发起后就会扣减合同的额度, 如果未签署完成时撤销合同会返还此额度（过期，拒签，签署完成，解除完成等状态不会返还额度）`

`4. 静默（自动）签署不支持合同签署方存在填写功能`
     */
  async CreateFlowsByTemplates(
    req: CreateFlowsByTemplatesRequest,
    cb?: (error: string, rep: CreateFlowsByTemplatesResponse) => void
  ): Promise<CreateFlowsByTemplatesResponse> {
    return this.request("CreateFlowsByTemplates", req, cb)
  }

  /**
     * 通过此接口可以关闭个人用户自动签功能。
无需对应的用户刷脸等方式同意即可关闭。

注意: 

<ul><li>处方单等特殊场景专用，此接口为白名单功能，使用前请联系对接的客户经理沟通。</li>
<li>如果此用户在开通时候绑定过个人自动签账号许可,  关闭此用户的自动签不会归还个人自动签账号许可的额度。</li></ul>
     */
  async ChannelDisableUserAutoSign(
    req: ChannelDisableUserAutoSignRequest,
    cb?: (error: string, rep: ChannelDisableUserAutoSignResponse) => void
  ): Promise<ChannelDisableUserAutoSignResponse> {
    return this.request("ChannelDisableUserAutoSign", req, cb)
  }

  /**
     * 此接口（ChannelDescribeOrganizationSeals）查询子客企业电子印章。<br />
注: 
1. `查询子客企业电子印章，需要操作者具有管理印章权限`
2. `客户指定需要获取的印章数量和偏移量，数量最多100，超过100按100处理`
3. `此接口只能查询启用的印章`
     */
  async ChannelDescribeOrganizationSeals(
    req: ChannelDescribeOrganizationSealsRequest,
    cb?: (error: string, rep: ChannelDescribeOrganizationSealsResponse) => void
  ): Promise<ChannelDescribeOrganizationSealsResponse> {
    return this.request("ChannelDescribeOrganizationSeals", req, cb)
  }

  /**
   * 通过此接口，删除员工绑定的角色，支持以电子签userId、客户系统userId两种方式调用。
   */
  async ChannelDeleteRoleUsers(
    req: ChannelDeleteRoleUsersRequest,
    cb?: (error: string, rep: ChannelDeleteRoleUsersResponse) => void
  ): Promise<ChannelDeleteRoleUsersResponse> {
    return this.request("ChannelDeleteRoleUsers", req, cb)
  }

  /**
     * 通过此接口（DescribeTemplates）查询该第三方平台子客企业在电子签拥有的有效模板，不包括第三方平台模板。

**适用场景**
 该接口常用来配合<a href="https://qian.tencent.com/developers/partnerApis/startFlows/CreateFlowsByTemplates" target="_blank">用模板创建签署流程</a>和<a href="https://qian.tencent.com/developers/partnerApis/startFlows/ChannelCreateFlowGroupByTemplates" target="_blank">通过多模板创建合同组签署流程</a>接口，作为创建合同的前置接口使用。 
通过此接口查询到模板信息后，再通过调用创建合同的接口，指定模板ID，指定模板中需要的填写控件内容等，完成合同文档的创建。

**模板的来源**
子客企业的模板有两种途径获取
- 渠道方(平台方)配置完成后, 分发给同应用的各个子企业
- 子客企业通过CreateConsoleLoginUrl创建的链接登录子客控制台自己创建

**一个模板通常会包含以下结构信息** 

- 模板ID, 模板名字等基本信息
- 发起方参与信息Promoter、签署参与方 Recipients，后者会在模板发起合同时用于指定参与方
- 发起方和签署方的填写控件 Components
- 签署方的签署控件 SignComponents

![image](https://qcloudimg.tencent-cloud.cn/raw/ab81fa948a0a6fea14f48cac91d0e36a/channel_DescribeTemplates.png)

模板中各元素的层级关系, 所有的填写控件和签署控件都归属某一个角色(通过控件的ComponentRecipientId来关联)

![image](https://qcloudimg.tencent-cloud.cn/raw/45c638bd93f9c8024763add9ab47c27f.png)


**注意**

>1. 查询条件TemplateId、TemplateName与ChannelTemplateId可同时存在，即可查询同时满足这些条件的模板。
>2. TemplateId 和TemplateIds互为独立，若两个参数都传入，则以TemplateId为准
     */
  async DescribeTemplates(
    req: DescribeTemplatesRequest,
    cb?: (error: string, rep: DescribeTemplatesResponse) => void
  ): Promise<DescribeTemplatesResponse> {
    return this.request("DescribeTemplates", req, cb)
  }

  /**
     * 本接口（CreateBatchOrganizationRegistrationTasks）用于批量创建企业认证链接
该接口为异步提交任务接口,需要跟查询企业批量认证链接(DescribeBatchOrganizationRegistrationUrls) 配合使用.

批量创建链接有以下限制：
1. 单次最多创建10个子客。
2. 一天同一家企业最多创建8000个子客。
3. 同一批创建的子客不能重复 其中包括 企业名称，企业统一信用代码，子客经办人openId。
4. 跳转到小程序的实现，参考微信官方文档（分为全屏、半屏两种方式），如何配置也可以请参考: 跳转电子签小程序配置

注： 1. 如果生成的链接是APP链接，跳转到小程序的实现，参考微信官方文档（分为<a href="https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateToMiniProgram.html">全屏</a>、<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html">半屏</a>两种方式），如何配置也可以请参考: <a href="https://qian.tencent.com/developers/company/openwxminiprogram">跳转电子签小程序配置</a>

**腾讯电子签小程序的AppID 和 原始Id如下:**

| 小程序 | AppID | 原始ID |
| ------------ | ------------ | ------------ |
| 腾讯电子签（正式版） | wxa023b292fd19d41d | gh_da88f6188665 |
| 腾讯电子签Demo | wx371151823f6f3edf | gh_39a5d3de69fa |
     */
  async CreateBatchOrganizationRegistrationTasks(
    req: CreateBatchOrganizationRegistrationTasksRequest,
    cb?: (error: string, rep: CreateBatchOrganizationRegistrationTasksResponse) => void
  ): Promise<CreateBatchOrganizationRegistrationTasksResponse> {
    return this.request("CreateBatchOrganizationRegistrationTasks", req, cb)
  }

  /**
     * 此接口（UploadFiles）文件上传。<br/>

适用场景：用于合同，印章的文件上传。文件上传以后，
如果是PDF格式文件可配合<a href="https://qian.tencent.com/developers/partnerApis/startFlows/ChannelCreateFlowByFiles" target="_blank">用PDF文件创建签署流程</a>接口进行合同流程的发起
如果是其他类型可以配合<a href="https://qian.tencent.com/developers/partnerApis/files/ChannelCreateConvertTaskApi" target="_blank">创建文件转换任务</a>接口转换成PDF文件

注: 
1. 图片类型(png/jpg/jpeg)限制大小为5M以下, PDF/word/excel等其他格式限制大小为60M以下
2. <font color='red'>此接口调用时需要单独设置Domain请求域名 </font>,  联调开发环境为 <font color='red'>file.test.ess.tencent.cn</font>，正式环境需要设置为<font color='red'>file.ess.tencent.cn</font>，代码示例
```
HttpProfile httpProfile = new HttpProfile();
httpProfile.setEndpoint("file.test.ess.tencent.cn");
```
     */
  async UploadFiles(
    req: UploadFilesRequest,
    cb?: (error: string, rep: UploadFilesResponse) => void
  ): Promise<UploadFilesResponse> {
    return this.request("UploadFiles", req, cb)
  }

  /**
     * 创建跳转小程序查看或签署的链接

**腾讯电子签小程序的AppID 和 原始Id如下:**

| 小程序 | AppID | 原始ID |
| ------------ | ------------ | ------------ |
| 腾讯电子签（正式版） | wxa023b292fd19d41d | gh_da88f6188665 |
| 腾讯电子签Demo | wx371151823f6f3edf | gh_39a5d3de69fa |

**主要使用场景可以更加EndPoint分类如下**

|EndPoint| 场景| 说明和示例|
|  ----  | ----  | --- |
|  WEIXINAPP  | 短链跳转腾讯电子签小程序签署场景  |  点击链接打开电子签小程序（与腾讯电子签官方短信提醒用户签署形式一样）<br> 示例: https://essurl.cn/x9nvWU8fTg|
|  LONGURL2WEIXINAPP  | 长链跳转腾讯电子签小程序签署场景  |  点击链接打开电子签小程序, 是WEIXINAPP生成短链代表的那个长链|
|  CHANNEL  | 带有H5引导页的跳转腾讯电子签小程序签署场景 |  点击链接打开一个H5引导页面, 页面中有个"前往小程序"的按钮, 点击后会跳转到腾讯电子签小程序签署场景;  签署完成会回到H5引导页面, 然后跳转到指定创建链接指定的JumpUrl<br>示例: https://res.ess.tencent.cn/cdn/h5-activity-beta/jump-mp.html?use=channel-guide&type=warning&token=uIFKIU8fTd |
|APP| 贵方App跳转腾讯电子签小程序签署场景|  贵方App直接跳转到小程序后, 在腾讯电子签小程序签署完成后返回贵方App的场景<br>跳转到腾讯电子签小程序的实现可以参考微信的官方文档:<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/launchApp.html" target="_blank">开放能力/打开 App</a> <br> 示例: pages/guide?from=default&where=mini& to=CONTRACT_DETAIL& id=yDwiBUUc*duRvquCSX8wd& shortKey=yDwivUA**W1yRsTre3 |
|APP| 贵方小程序跳转腾讯电子签小程序签署场景|  贵方App直接跳转到小程序后, 在腾讯电子签小程序签署完成后返回贵方小程序的场景<br>跳转到腾讯电子签小程序的实现可以参考微信官方文档<a href="https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateToMiniProgram.html" target="_blank">全屏方式</a>和<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html " target="_blank">半屏方式</a><br>此时返回的SignUrl就是官方文档中的path<br> 示例:pages/guide?from=default&where=mini& to=CONTRACT_DETAIL& id=yDwiBUUc*duRvquCSX8wd& shortKey=yDwivUA**W1yRsTre3  |
     */
  async CreateSignUrls(
    req: CreateSignUrlsRequest,
    cb?: (error: string, rep: CreateSignUrlsResponse) => void
  ): Promise<CreateSignUrlsResponse> {
    return this.request("CreateSignUrls", req, cb)
  }

  /**
     * 此接口（CreateConsoleLoginUrl）用于创建第三方平台子客企业控制台Web/移动登录链接。支持web控制台、电子签小程序和H5链接。登录链接是进入子客web企业控制台的唯一入口。

Web链接访问后，会根据子客企业(**Agent中ProxyOrganizationOpenId表示**)和员工(**Agent中OpenId表示**)的状态，进入不同的流程，主要情况分类如下：
<table>
<thead>
<tr>
<th>子客企业状态</th>
<th>子客企业员工状态</th>
<th>点击链接进入的流程</th>
</tr>
</thead>
<tbody>
<tr>
<td>企业未激活</td>
<td>员工未认证</td>
<td>进入企业激活流程，首次完成企业激活流程的员工会成为超管</td>
</tr>
<tr>
<td>企业已激活</td>
<td>员工未认证</td>
<td>进入员认证并加入企业流程</td>
</tr>
<tr>
<td>企业已激活</td>
<td>员工已认证</td>
<td>进入子客企业Web控制台</td>
</tr>
</tbody>
</table>
如果是企业激活流程，需要注意如下情况：

1. 若在激活过程中，**更换用户OpenID重新生成链接，之前的认证会被清理**。因此不要在企业认证过程生成多个链接给多人同时操作，会导致认证过程互相影响。
2. 若您认证中发现信息有误需要重新认证，**可通过更换用户OpenID重新生成链接的方式，来清理掉已有的流程**。

系统的渠道企业, 应用, 子客企业, 子客员工的组织形式
![image](https://qcloudimg.tencent-cloud.cn/raw/bee4b7375fe7a097f3573b18a1c1e30b.png)
     */
  async CreateConsoleLoginUrl(
    req: CreateConsoleLoginUrlRequest,
    cb?: (error: string, rep: CreateConsoleLoginUrlResponse) => void
  ): Promise<CreateConsoleLoginUrlResponse> {
    return this.request("CreateConsoleLoginUrl", req, cb)
  }

  /**
   * 生成渠道子客编辑企业信息二维码
   */
  async ChannelCreateOrganizationModifyQrCode(
    req: ChannelCreateOrganizationModifyQrCodeRequest,
    cb?: (error: string, rep: ChannelCreateOrganizationModifyQrCodeResponse) => void
  ): Promise<ChannelCreateOrganizationModifyQrCodeResponse> {
    return this.request("ChannelCreateOrganizationModifyQrCode", req, cb)
  }

  /**
     * 通过此接口指定合同、签署人、填写控件等信息，生成嵌入式链接，此链接可以嵌入到其他网页或者直接打开，打开后进入发起页面。在此页面上，合同信息和签署人信息均不可更改。

注意：
1. 只支持PC浏览器操作使用

嵌入的页面样式如下：
![image](https://qcloudimg.tencent-cloud.cn/raw/b2ae013fb4d747891dd3815bbe897208.png)
     */
  async ChannelCreatePrepareFlow(
    req: ChannelCreatePrepareFlowRequest,
    cb?: (error: string, rep: ChannelCreatePrepareFlowResponse) => void
  ): Promise<ChannelCreatePrepareFlowResponse> {
    return this.request("ChannelCreatePrepareFlow", req, cb)
  }

  /**
     * 通过合同编号生成批量撤销合同的链接，单次最多支持撤销100份合同,   返回的链接需要有此权限的人<font color='red'>**合同的发起人或者发起人所在企业的超管、法人**</font>在<font color='red'>**手机端**</font>打开,  跳转到腾讯电子签小程序输入撤销原因来进行撤销合同

适用场景：如果某个合同当前**至少还有一方没有签署**，则可通过该接口取消该合同流程。常用于合同发错、内容填错，需要及时撤销的场景。

- **可撤回合同状态**：未全部签署完成
- **不撤回合同状态**：已全部签署完成、已拒签、已过期、已撤回、拒绝填写、已解除等合同状态。

注:
- 签署完毕的合同需要双方走解除流程将合同作废，可以参考<a href="https://qian.tencent.com/developers/partnerApis/startFlows/ChannelCreateReleaseFlow" target="_blank">发起解除合同流程接口</a>
     */
  async ChannelCreateBatchCancelFlowUrl(
    req: ChannelCreateBatchCancelFlowUrlRequest,
    cb?: (error: string, rep: ChannelCreateBatchCancelFlowUrlResponse) => void
  ): Promise<ChannelCreateBatchCancelFlowUrlResponse> {
    return this.request("ChannelCreateBatchCancelFlowUrl", req, cb)
  }

  /**
     * 此接口（ChannelDeleteRole）用来删除企业自定义角色。

注意：系统角色不可删除。
     */
  async ChannelDeleteRole(
    req: ChannelDeleteRoleRequest,
    cb?: (error: string, rep: ChannelDeleteRoleResponse) => void
  ): Promise<ChannelDeleteRoleResponse> {
    return this.request("ChannelDeleteRole", req, cb)
  }

  /**
     * 此接口（ChannelGetTaskResultApi）用来查询转换任务的状态。如需发起转换任务，请使用<a href="https://qian.tencent.com/developers/partnerApis/files/ChannelCreateConvertTaskApi" target="_blank">创建文件转换任务接口</a>进行资源文件的转换操作<br />
前提条件：已调用 <a href="https://qian.tencent.com/developers/partnerApis/files/ChannelCreateConvertTaskApi" target="_blank">创建文件转换任务接口</a>进行文件转换，并得到了返回的转换任务Id。<br />

适用场景：已创建一个文件转换任务，想查询该文件转换任务的状态，或获取转换后的文件资源Id。<br />
注：
1. `大文件转换所需的时间可能会比较长`
     */
  async ChannelGetTaskResultApi(
    req: ChannelGetTaskResultApiRequest,
    cb?: (error: string, rep: ChannelGetTaskResultApiResponse) => void
  ): Promise<ChannelGetTaskResultApiResponse> {
    return this.request("ChannelGetTaskResultApi", req, cb)
  }

  /**
     * 提交申请出证报告任务并返回报告ID。

注意：
- 使用此功能**需搭配出证套餐**  ，使用前请联系对接的客户经理沟通。
- 操作人必须是**发起方或者签署方企业的(非走授权书认证)法人或者超管**。
- 合同流程必须**所有参与方已经签署完成**。
- 出证过程需一定时间，建议在**提交出证任务后的24小时之后**，通过<a href="https://qian.tencent.com/developers/partnerApis/certificate/DescribeChannelFlowEvidenceReport" target="_blank">获取出证报告任务执行结果</a>接口进行查询执行结果和出证报告的下载URL。


![image](https://qcloudimg.tencent-cloud.cn/raw/1b4307ed143a992940c41d61192d3a0f/channel_CreateChannelFlowEvidenceReport.png)
     */
  async CreateChannelFlowEvidenceReport(
    req: CreateChannelFlowEvidenceReportRequest,
    cb?: (error: string, rep: CreateChannelFlowEvidenceReportResponse) => void
  ): Promise<CreateChannelFlowEvidenceReportResponse> {
    return this.request("CreateChannelFlowEvidenceReport", req, cb)
  }

  /**
   * 此接口（ChannelUpdateSealStatus）用于第三方应用平台为子客企业更新印章状态。
   */
  async ChannelUpdateSealStatus(
    req: ChannelUpdateSealStatusRequest,
    cb?: (error: string, rep: ChannelUpdateSealStatusResponse) => void
  ): Promise<ChannelUpdateSealStatusResponse> {
    return this.request("ChannelUpdateSealStatus", req, cb)
  }

  /**
     * 通过此接口，创建小程序批量签署链接，个人/企业员工点击此链接即可跳转小程序进行批量签署。
请确保生成链接时候的身份信息和签署合同参与方的信息保持一致。

注：
- 使用此接口生成链接，需要提前开通 `使用手机号验证签署方身份` 功能，在 `腾讯电子签网页端-企业设置-拓展服务` 中可以找到。
- 参与人点击链接后需短信验证码才能查看合同内容。
- 企业用户批量签署，需要传OrganizationName（参与方所在企业名称）参数生成签署链接，`请确保此企业已完成腾讯电子签企业认证`。若为子客企业，请确保员工已经加入企业。
- 个人批量签署，签名区`仅支持手写签名`。
     */
  async ChannelCreateBatchSignUrl(
    req: ChannelCreateBatchSignUrlRequest,
    cb?: (error: string, rep: ChannelCreateBatchSignUrlResponse) => void
  ): Promise<ChannelCreateBatchSignUrlResponse> {
    return this.request("ChannelCreateBatchSignUrl", req, cb)
  }

  /**
     * 此接口（ChannelCreateBoundFlows）用于子客企业领取未归属给员工的合同，将合同领取给当前员工，合同不能重复领取。


**未归属合同发起方式**
 指定对应企业的OrganizationOpenId和OrganizationName而不指定具体的参与人(OpenId/名字/手机号等),  则合同进入待领取状态, 示例代码如下
```
		FlowApprovers: []*essbasic.FlowApproverInfo{
			{
				ApproverType:       common.StringPtr("ORGANIZATION"),
				OrganizationOpenId: common.StringPtr("org_dianziqian"),
				OrganizationName:   common.StringPtr("典子谦示例企业"),
			}
		},
```

可以<a href="https://qian.tencent.com/developers/partnerApis/accounts/CreateConsoleLoginUrl" target="_blank">生成子客登录链接</a>登录控制台查看带领取的合同
![image](https://qcloudimg.tencent-cloud.cn/raw/a34d0cc56ec871613e94dfc6252bc072.png)

注: `支持批量领取,  如果有一个合同流程无法领取会导致接口报错,  使得所有合同都领取失败`
     */
  async ChannelCreateBoundFlows(
    req: ChannelCreateBoundFlowsRequest,
    cb?: (error: string, rep: ChannelCreateBoundFlowsResponse) => void
  ): Promise<ChannelCreateBoundFlowsResponse> {
    return this.request("ChannelCreateBoundFlows", req, cb)
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
  async ChannelCreateUserAutoSignSealUrl(
    req: ChannelCreateUserAutoSignSealUrlRequest,
    cb?: (error: string, rep: ChannelCreateUserAutoSignSealUrlResponse) => void
  ): Promise<ChannelCreateUserAutoSignSealUrlResponse> {
    return this.request("ChannelCreateUserAutoSignSealUrl", req, cb)
  }

  /**
     * 通过此接口获取个人用户自动签的开通状态。

注意: `处方单等特殊场景专用，此接口为白名单功能，使用前请联系对接的客户经理沟通。`
     */
  async ChannelDescribeUserAutoSignStatus(
    req: ChannelDescribeUserAutoSignStatusRequest,
    cb?: (error: string, rep: ChannelDescribeUserAutoSignStatusResponse) => void
  ): Promise<ChannelDescribeUserAutoSignStatusResponse> {
    return this.request("ChannelDescribeUserAutoSignStatus", req, cb)
  }

  /**
   * 对合同流程文件进行数字签名验证，判断数字签名是否有效，合同文件内容是否被篡改。
   */
  async ChannelVerifyPdf(
    req: ChannelVerifyPdfRequest,
    cb?: (error: string, rep: ChannelVerifyPdfResponse) => void
  ): Promise<ChannelVerifyPdfResponse> {
    return this.request("ChannelVerifyPdf", req, cb)
  }

  /**
     * 用来创建嵌入式页面个性化主题配置（例如是否展示电子签logo、定义主题色等），该接口配合其他所有可嵌入页面接口使用
创建配置对当前第三方应用全局生效，如果多次调用，会以最后一次的配置为准
     */
  async ChannelCreateWebThemeConfig(
    req: ChannelCreateWebThemeConfigRequest,
    cb?: (error: string, rep: ChannelCreateWebThemeConfigResponse) => void
  ): Promise<ChannelCreateWebThemeConfigResponse> {
    return this.request("ChannelCreateWebThemeConfig", req, cb)
  }

  /**
     * 该接口用于发起合同后，生成个人用户的签署链接, 暂时不支持企业端签署 <br/>

**注意**
1. 该接口目前**仅支持签署人类型是个人签署方**的场景（PERSON）。
2. 该接口可生成签署链接的C端签署人必须仅有手写签名和时间类型的签署控件，**不支持填写控件** 。
3. 该签署**链接有效期为30分钟**，过期后将失效，如需签署可重新创建签署链接 。
4. 该接口返回的签署链接适用于APP集成的场景，支持APP打开或浏览器直接打开，**不支持微信小程序嵌入**。
跳转到小程序的实现，参考微信官方文档（分为<a href="https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateToMiniProgram.html">全屏</a>、<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html">半屏</a>两种方式），如何配置也可以请参考: <a href="https://qian.tencent.com/developers/company/openwxminiprogram">跳转电子签小程序配置</a>。
5. 因h5涉及人脸身份认证能力基于慧眼人脸核身，对Android和iOS系统均有一定要求， 因此<font color='red'>App嵌入H5签署合同需要按照慧眼提供的<a href="https://cloud.tencent.com/document/product/1007/61076">慧眼人脸核身兼容性文档</a>做兼容性适配</font>。
     */
  async ChannelCreateFlowSignUrl(
    req: ChannelCreateFlowSignUrlRequest,
    cb?: (error: string, rep: ChannelCreateFlowSignUrlResponse) => void
  ): Promise<ChannelCreateFlowSignUrlResponse> {
    return this.request("ChannelCreateFlowSignUrl", req, cb)
  }

  /**
     * 发起解除协议的主要应用场景为：基于一份已经签署的合同(签署流程)，进行解除操作。
解除协议的模板是官方提供，经过提供法务审核，暂不支持自定义。

注意：
<ul><li><code>原合同必须签署完</code>成后才能发起解除协议。</li>
<li>只有原合同企业类型的参与人才能发起解除协议，<code>个人参与方不能发起解除协议</code>。</li>
<li>原合同个人类型参与人必须是解除协议的参与人，<code>不能更换其他第三方个人</code>参与解除协议。</li>
<li>如果原合同企业参与人无法参与解除协议，可以指定同企业具有同等权限的<code>企业员工代为处理</code>。</li>
<li>发起解除协议同发起其他企业合同一样，也会参与合同<code>扣费</code>，扣费标准同其他类型合同。</li>
<li>在解除协议发起之后，原合同的状态将转变为解除中。一旦解除协议签署完毕，原合同及解除协议均变为已解除状态。</li></ul>
     */
  async ChannelCreateReleaseFlow(
    req: ChannelCreateReleaseFlowRequest,
    cb?: (error: string, rep: ChannelCreateReleaseFlowResponse) => void
  ): Promise<ChannelCreateReleaseFlowResponse> {
    return this.request("ChannelCreateReleaseFlow", req, cb)
  }

  /**
     * 获取企业员工信息, 可以获取员工的名字,OpenId,UserId和简述的角色等信息，支持设置过滤条件以筛选员工查询结果。

**注**:通过<a href="https://qian.tencent.com/developers/partnerApis/accounts/SyncProxyOrganizationOperators" target="_blank">企业员工新增或离职</a>接口增加的新员工或者离职的员工也会在列表中。
     */
  async ChannelDescribeEmployees(
    req: ChannelDescribeEmployeesRequest,
    cb?: (error: string, rep: ChannelDescribeEmployeesResponse) => void
  ): Promise<ChannelDescribeEmployeesResponse> {
    return this.request("ChannelDescribeEmployees", req, cb)
  }

  /**
     * 通过合同编号批量撤销合同，单次最多支持撤销100份合同。

适用场景：如果某个合同当前**至少还有一方没有签署**，则可通过该接口取消该合同流程。常用于合同发错、内容填错，需要及时撤销的场景。

- **可撤回合同状态**：未全部签署完成
- **不撤回合同状态**：已全部签署完成、已拒签、已过期、已撤回、拒绝填写、已解除等合同状态。

注:
- 有对应合同撤销权限的人:  <font color='red'>**合同的发起人或者发起人所在企业的超管、法人**</font>
- 签署完毕的合同需要双方走解除流程将合同作废，可以参考<a href="https://qian.tencent.com/developers/partnerApis/startFlows/ChannelCreateReleaseFlow" target="_blank">发起解除合同流程接口</a>
     */
  async ChannelBatchCancelFlows(
    req: ChannelBatchCancelFlowsRequest,
    cb?: (error: string, rep: ChannelBatchCancelFlowsResponse) => void
  ): Promise<ChannelBatchCancelFlowsResponse> {
    return this.request("ChannelBatchCancelFlows", req, cb)
  }

  /**
     * 该接口 (PrepareFlows) 用于创建待发起文件
用户通过该接口进入签署流程发起的确认页面，进行发起信息二次确认， 如果确认则进行正常发起。
目前该接口只支持B2C，<font color='red'> **不建议使用，将会废弃**</font>。
     */
  async PrepareFlows(
    req: PrepareFlowsRequest,
    cb?: (error: string, rep: PrepareFlowsResponse) => void
  ): Promise<PrepareFlowsResponse> {
    return this.request("PrepareFlows", req, cb)
  }

  /**
     * 此接口（GetDownloadFlowUrl）用户获取合同控制台下载页面链接,  点击链接后会跳转至本企业合同管理控制台(会筛选出传入的合同列表), 点击**下载**按钮后就会下载传入的合同列表, 下载页面如下图
![image](https://dyn.ess.tencent.cn/guide/capi/channel_GetDownloadFlowUrl.png)

注:
<ul>
<li>仅支持下载 <b>本企业</b> 下合同，链接会 <b>登录企业控制台</b> </li>
<li> <b>链接仅可使用一次</b>，不可重复使用</li>
</ul>
     */
  async GetDownloadFlowUrl(
    req: GetDownloadFlowUrlRequest,
    cb?: (error: string, rep: GetDownloadFlowUrlResponse) => void
  ): Promise<GetDownloadFlowUrlResponse> {
    return this.request("GetDownloadFlowUrl", req, cb)
  }

  /**
     * 适用场景：
当通过模板或文件发起合同时，若未指定企业签署人信息，则可调用此接口动态补充签署人。同一签署人只允许补充一人，最终实际签署人取决于谁先领取合同完成签署。

限制条件：
1. 本企业（发起方企业）企业签署人仅支持通过企业名称+姓名+手机号进行补充。
2. 个人签署人仅支持通过姓名+手机号进行补充。
     */
  async ChannelCreateFlowApprovers(
    req: ChannelCreateFlowApproversRequest,
    cb?: (error: string, rep: ChannelCreateFlowApproversResponse) => void
  ): Promise<ChannelCreateFlowApproversResponse> {
    return this.request("ChannelCreateFlowApprovers", req, cb)
  }

  /**
     * 创建他方自动签授权链接，通过该链接可进入小程序进行合作方企业的自动签授权，若当前企业未开通企业自动签，通过该链接会先引导开通本企业自动签。
该接口效果同控制台： 企业设置-> 扩展服务 -> 企业自动签署 -> 合作企业方授权



注: 
1. <font color='red'>所在企业的超管、法人才有权限调用此接口</font>(Agent.ProxyOperator.OpenId 需要传递超管或者法人的OpenId)
2. 已经在授权中或者授权成功的企业，无法重复授权
     */
  async CreatePartnerAutoSignAuthUrl(
    req: CreatePartnerAutoSignAuthUrlRequest,
    cb?: (error: string, rep: CreatePartnerAutoSignAuthUrlResponse) => void
  ): Promise<CreatePartnerAutoSignAuthUrlResponse> {
    return this.request("CreatePartnerAutoSignAuthUrl", req, cb)
  }

  /**
     * 此接口（ChannelCreateRole）用来创建企业自定义角色。

适用场景1：创建当前企业的自定义角色，并且创建时不进行权限的设置（PermissionGroups 参数不传），角色中的权限内容可通过接口 ChannelModifyRole 完成更新。

适用场景2：创建当前企业的自定义角色，并且创建时进行权限的设置（PermissionGroups 参数要传），权限树内容 PermissionGroups 可参考[查询角色列表接口](https://qian.tencent.com/developers/partnerApis/accounts/ChannelDescribeRoles) 的输出。此处注意权限树内容可能会更新，需尽量拉取最新的权限树内容，并且权限树内容 PermissionGroups 必须是一颗完整的权限树。
     */
  async ChannelCreateRole(
    req: ChannelCreateRoleRequest,
    cb?: (error: string, rep: ChannelCreateRoleResponse) => void
  ): Promise<ChannelCreateRoleResponse> {
    return this.request("ChannelCreateRole", req, cb)
  }

  /**
     * 获取合同流程PDF的下载链接，可以下载签署中、签署完的此子企业创建的合同

**注意**:   
有两种开通权限的途径

**第一种**:   需第三方应用的子企业登录控制台进行授权,  授权在**企业中心**的**授权管理**区域,  界面如下图
授权过程需要**子企业超管**扫描跳转到电子签小程序签署<<渠道端下载渠道子客合同功能授权委托书>>

![image](https://qcloudimg.tencent-cloud.cn/raw/8b483dfebdeafac85051279406944048.png)

**第二种**: 第三方应用的配置接口打开全第三个应用下的所有自己起开通, 需要**渠道方企业的超管**扫描二维码跳转到电子签小程序签署 <<渠道端下载渠道子客合同功能开通知情同意书>>
![image](https://qcloudimg.tencent-cloud.cn/raw/238979ef51dd381ccbdbc755a593debc/channel_DescribeResourceUrlsByFlows_appilications2.png)
     */
  async DescribeResourceUrlsByFlows(
    req: DescribeResourceUrlsByFlowsRequest,
    cb?: (error: string, rep: DescribeResourceUrlsByFlowsResponse) => void
  ): Promise<DescribeResourceUrlsByFlowsResponse> {
    return this.request("DescribeResourceUrlsByFlows", req, cb)
  }

  /**
     * 使用此接口，用来绑定企业实名员工的角色，
支持以电子签userId、客户系统openId两种方式进行绑定。
     */
  async ChannelCreateUserRoles(
    req: ChannelCreateUserRolesRequest,
    cb?: (error: string, rep: ChannelCreateUserRolesResponse) => void
  ): Promise<ChannelCreateUserRolesResponse> {
    return this.request("ChannelCreateUserRoles", req, cb)
  }

  /**
   * 此接口（ChannelCancelUserAutoSignEnableUrl）用来撤销发送给个人用户的自动签开通链接，撤销后对应的个人用户开通链接失效。若个人用户已经完成开通，将无法撤销。（处方单场景专用，使用此接口请与客户经理确认）
   */
  async ChannelCancelUserAutoSignEnableUrl(
    req: ChannelCancelUserAutoSignEnableUrlRequest,
    cb?: (error: string, rep: ChannelCancelUserAutoSignEnableUrlResponse) => void
  ): Promise<ChannelCancelUserAutoSignEnableUrlResponse> {
    return this.request("ChannelCancelUserAutoSignEnableUrl", req, cb)
  }

  /**
   * 生成渠道子客用印申请审批小程序链接，链接类型（通过H5唤起小程序或通过APP跳转的方式查看）
   */
  async DescribeChannelSealPolicyWorkflowUrl(
    req: DescribeChannelSealPolicyWorkflowUrlRequest,
    cb?: (error: string, rep: DescribeChannelSealPolicyWorkflowUrlResponse) => void
  ): Promise<DescribeChannelSealPolicyWorkflowUrlResponse> {
    return this.request("DescribeChannelSealPolicyWorkflowUrl", req, cb)
  }

  /**
     * 查询渠道子客企业信息时，可以支持单个子客和整个应用下所有子客的查询。返回的信息包括超管、法人的信息以及当前企业的认证状态等信息。

- 对于单个企业的查询，通过**指定子客的唯一标识**来查询该子客的企业信息
- 对于整个应用下所有企业的查询，**不需要指定子客的唯一标识**，直接查询整个应用下所有子客企业的企业信息
     */
  async DescribeChannelOrganizations(
    req: DescribeChannelOrganizationsRequest,
    cb?: (error: string, rep: DescribeChannelOrganizationsResponse) => void
  ): Promise<DescribeChannelOrganizationsResponse> {
    return this.request("DescribeChannelOrganizations", req, cb)
  }

  /**
     * 指定需要批量催办的签署流程ID，批量催办合同，最多100个。需要符合以下条件的合同才可被催办
1. 合同中当前状态为 **待签署** 的签署人是催办的对象
2. **每个合同只能催办一次**

**催办的效果**: 对方会收到如下的短信通知

![image](https://qcloudimg.tencent-cloud.cn/raw/3caf94b7f540fa5736270d38528d3a7b.png)


**注**：`合同催办是白名单功能，请联系客户经理申请开白后使用`
     */
  async ChannelCreateFlowReminds(
    req: ChannelCreateFlowRemindsRequest,
    cb?: (error: string, rep: ChannelCreateFlowRemindsResponse) => void
  ): Promise<ChannelCreateFlowRemindsResponse> {
    return this.request("ChannelCreateFlowReminds", req, cb)
  }

  /**
     * 此接口（SyncProxyOrganization）用于同步第三方平台子客企业信息，包括企业名称、企业营业执照、企业统一社会信用代码和法人姓名等，便于子客企业在企业激活过程中无需手动上传营业执照或补充企业信息。

注意：

- **需要在<a href="https://qian.tencent.com/developers/partnerApis/accounts/CreateConsoleLoginUrl" target="_blank">生成子客登录链接</a>前同步的企业信息**, 否则会出现信息同步没有用的情形
- **企业信息需要和营业执照信息对应**,  否则会出现激活过程验证不通过的问题

![image](https://qcloudimg.tencent-cloud.cn/raw/7ec91b79a0a4860e77c9ff9f4a5f13ad/channel_SyncProxyOrganization2.png)


- **企业统一社会信用代码**: 对应上图中的**1**
- **第三方平台子客企业名称**: 对应上图中的**2**
- **企业法定代表人的名字**:对应上图中的**3**
- **企业详细住所**:对应上图中的**4**
     */
  async SyncProxyOrganization(
    req: SyncProxyOrganizationRequest,
    cb?: (error: string, rep: SyncProxyOrganizationResponse) => void
  ): Promise<SyncProxyOrganizationResponse> {
    return this.request("SyncProxyOrganization", req, cb)
  }

  /**
     * 接口（ChannelCreateFlowGroupByTemplates）用于通过多模板创建合同组签署流程。

合同组是将多个合同签署流程组织在一起，多个合同同时创建，每个签署方得到一个签署链接，`一次完成合同组中多个合同的签署`。合同组的合同`不能拆分一个一个签署`，只能作为一个整体签署。

适用场景：该接口适用于需要一次性完成多份合同签署的情况，多份合同一般具有关联性，用户以目录的形式查看合同。

**注**: 
<ul>
<li>此接口静默签(企业自动签)能力为白名单功能，使用前请联系对接的客户经理沟通。</li>
<li>合同组暂不支持抄送功能</li>
</ul>

**可以作为发起方和签署方的角色列表**
<table>
<thead>
<tr>
<th>场景编号</th>
<th>可作为发起方类型</th>
<th>可作为签署方的类型</th>
</tr>
</thead>

<tbody>
<tr>
<td>场景一</td>
<td>第三方子企业A员工</td>
<td>第三方子企业A员工</td>
</tr>

<tr>
<td>场景二</td>
<td>第三方子企业A员工</td>
<td>第三方子企业B(不指定经办人)</td>
</tr>

<tr>
<td>场景三</td>
<td>第三方子企业A员工</td>
<td>第三方子企业B员工</td>
</tr>

<tr>
<td>场景四</td>
<td>第三方子企业A员工</td>
<td>个人/自然人</td>
</tr>

<tr>
<td>场景五</td>
<td>第三方子企业A员工</td>
<td>SaaS平台企业员工</td>
</tr>
</tbody>
</table>

**注**: 
`1. 发起合同时候,  作为发起方的第三方子企业A员工的企业和员工必须经过实名, 而作为签署方的第三方子企业A员工/个人/自然人/SaaS平台企业员工/第三方子企业B员工企业中的企业和个人/员工可以未实名`

`2. 不同类型的签署方传参不同, 可以参考开发者中心的FlowApproverInfo结构体说明`

`3. 合同发起后就会扣减合同的额度, 如果未签署完成时撤销合同会返还此额度（过期，拒签，签署完成，解除完成等状态不会返还额度），合同组中每个合同会扣减一个合同额度`

`4. 静默（自动）签署不支持合同签署方存在填写功能`
     */
  async ChannelCreateFlowGroupByTemplates(
    req: ChannelCreateFlowGroupByTemplatesRequest,
    cb?: (error: string, rep: ChannelCreateFlowGroupByTemplatesResponse) => void
  ): Promise<ChannelCreateFlowGroupByTemplatesResponse> {
    return this.request("ChannelCreateFlowGroupByTemplates", req, cb)
  }

  /**
     * 此接口（CreateChannelOrganizationInfoChangeUrl）用于创建子客企业信息变更链接（需要在移动端打开，会跳转到微信小程序），支持创建企业超管变更链接或企业基础信息变更链接，通过入参 ChangeType 指定。


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


注意： 
1. 生成的电子签小程序链接<font color='red'>只能由企业的法人或者超管</font>点击后进行操作， 其他员工打开后会提示“无权查看该内容”
2. 法人可以无需生成链接，直接在电子签小程序中更换本企业的超管
     */
  async CreateChannelOrganizationInfoChangeUrl(
    req: CreateChannelOrganizationInfoChangeUrlRequest,
    cb?: (error: string, rep: CreateChannelOrganizationInfoChangeUrlResponse) => void
  ): Promise<CreateChannelOrganizationInfoChangeUrlResponse> {
    return this.request("CreateChannelOrganizationInfoChangeUrl", req, cb)
  }

  /**
     * 此接口（SyncProxyOrganizationOperators）用于同步 第三方平台子客企业经办人列表，主要是同步经办人的离职状态。子客Web控制台的组织架构管理，是依赖于第三方应用平台的，无法针对员工做新增/更新/离职等操作。 

- **新增员工的场景**:    提前导入员工列表, 然后调用<a href="https://qian.tencent.com/developers/partnerApis/accounts/CreateConsoleLoginUrl" target="_blank">生成子客登录链接</a>分享给对应的员工进行实名, 新增员工后员工的状态为**未实名**, 通过链接实名后状态变为**已实名**, 已实名员工就可以参与合同的发起和签署

- **员工离职的场景**: 将员工置为离职, 员工无法登录控制台和腾讯电子签小程序进行操作了,   同时给此员工分配的openid会被回收可以给其他新员工使用 (离职后员工数据会被置空,  再次加入公司会从零开始) ,  若员工信息有误可通过离职后在新增来解决,  离职员工状态为**离职**

![image](https://qcloudimg.tencent-cloud.cn/raw/7a27a6bb0e4d39c2f6aa2a0b39946181/channel_SyncProxyOrganizationOperators.png)

**注**:    
-  新增员工可以配置白名单限制注册使用对应openid的员工必须满足SyncProxyOrganizationOperators导入的(默认生成子客登录链接生成的链接可以任意员工点击注册绑定对应的openid), 此白名单需要咨询接入经理
-  <font color='red'>超管和法人无法通过此接口离职</font>,  需要超管和法人将权限转移给其他人后才可通过此接口离职
- 新增员工的场景同ID不同员工会覆盖掉上一个同ID的员工, 如果上一个员工已经实名则不会被覆盖
     */
  async SyncProxyOrganizationOperators(
    req: SyncProxyOrganizationOperatorsRequest,
    cb?: (error: string, rep: SyncProxyOrganizationOperatorsResponse) => void
  ): Promise<SyncProxyOrganizationOperatorsResponse> {
    return this.request("SyncProxyOrganizationOperators", req, cb)
  }

  /**
     * 获取出证报告任务执行结果，返回报告 URL。

注意：

- 使用此功能`需搭配出证套餐` ，使用前请联系对接的客户经理沟通。
- 需调用创建并返回出证报告接口<a href="https://qian.tencent.com/developers/partnerApis/certificate/CreateChannelFlowEvidenceReport" target="_blank">提交申请出证报告任务</a>获取报告编号后调用当前接口获取报告链接。

![image](https://qcloudimg.tencent-cloud.cn/raw/1b4307ed143a992940c41d61192d3a0f/channel_CreateChannelFlowEvidenceReport.png)
     */
  async DescribeChannelFlowEvidenceReport(
    req: DescribeChannelFlowEvidenceReportRequest,
    cb?: (error: string, rep: DescribeChannelFlowEvidenceReportResponse) => void
  ): Promise<DescribeChannelFlowEvidenceReportResponse> {
    return this.request("DescribeChannelFlowEvidenceReport", req, cb)
  }

  /**
     * 此接口（OperateChannelTemplate）用于针对第三方应用平台模板库中的模板对子客企业发布授权的查询和设置。
平台模板库中的模板的位置在控制台 企业应用管理 中下面的应用模板库管理目录, 可以参照下图位置
![image](https://qcloudimg.tencent-cloud.cn/raw/7f2b6c94164b3e931efc9a037e0400f7.png)

# 支持的操作

## 1. 查询模板的子客企业授权 (OperateType=SELECT)
- 查询模板的授权子企业列表

## 2. 修改模板的子客企业授权 (OperateType=UPDATE)
- 当模板未发布时，可以修改模板的模板授权范围是**所有第三方应用合作企业**(AuthTag设置为all)或者**指定第三方应用合作企业**(AuthTag设置为part)，**当模板发布后，不可做此修改**
- 如果模板是部分授权,  可通过ProxyOrganizationOpenIds增加子客的授权范围。

## 3. 取消模板的子客企业授权 (OperateType=DELETE)
- 对子客企业进行模板库中模板授权范围的进行删除操作。
- 主要对于手动领取的模板，去除授权后子客在模板库中看不到，就无法再领取了。但是**已经领取过成为自有模板的不会同步删除**。
- 对于自动领取的模板，由于已经下发，更改授权不会影响。
- 如果要同步删除子客自有模板库中的模板，请使用OperateType=UPDATE+Available参数处理。
     */
  async OperateChannelTemplate(
    req: OperateChannelTemplateRequest,
    cb?: (error: string, rep: OperateChannelTemplateResponse) => void
  ): Promise<OperateChannelTemplateResponse> {
    return this.request("OperateChannelTemplate", req, cb)
  }

  /**
   * 本接口（ChannelCreatePreparedPersonalEsign）用于创建导入个人印章（处方单场景专用，使用此接口请与客户经理确认）。
   */
  async ChannelCreatePreparedPersonalEsign(
    req: ChannelCreatePreparedPersonalEsignRequest,
    cb?: (error: string, rep: ChannelCreatePreparedPersonalEsignResponse) => void
  ): Promise<ChannelCreatePreparedPersonalEsignResponse> {
    return this.request("ChannelCreatePreparedPersonalEsign", req, cb)
  }

  /**
     * 废弃接口

通过此接口（DescribeBillUsageDetail）查询该第三方平台子客企业的套餐消耗详情。
     */
  async DescribeBillUsageDetail(
    req: DescribeBillUsageDetailRequest,
    cb?: (error: string, rep: DescribeBillUsageDetailResponse) => void
  ): Promise<DescribeBillUsageDetailResponse> {
    return this.request("DescribeBillUsageDetail", req, cb)
  }

  /**
     * 接口（ChannelCreateFlowGroupByFiles）用于使用 PDF 文件创建合同组签署流程。

合同组是将多个合同签署流程组织在一起，多个合同同时创建，每个签署方得到一个签署链接，`一次完成合同组中多个合同的签署`。合同组的合同`不能拆分一个一个签署`，只能作为一个整体签署。

适用场景：该接口适用于需要一次性完成多份合同签署的情况，多份合同一般具有关联性，用户以目录的形式查看合同。



**注**: 
<ul>
<li>此接口静默签(企业自动签)能力为白名单功能，使用前请联系对接的客户经理沟通。</li>
<li>合同组暂不支持抄送功能</li>
<li>此接口需要依赖<a href="https://qian.tencent.com/developers/partnerApis/files/UploadFiles" target="_blank">文件上传接口</a>生成pdf资源编号（FileIds）进行使用。</li>
</ul>

**可以作为发起方和签署方的角色列表**
<table>
<thead>
<tr>
<th>场景编号</th>
<th>可作为发起方类型</th>
<th>可作为签署方的类型</th>
</tr>
</thead>

<tbody>
<tr>
<td>场景一</td>
<td>第三方子企业A员工</td>
<td>第三方子企业A员工</td>
</tr>

<tr>
<td>场景二</td>
<td>第三方子企业A员工</td>
<td>第三方子企业B(不指定经办人)</td>
</tr>

<tr>
<td>场景三</td>
<td>第三方子企业A员工</td>
<td>第三方子企业B员工</td>
</tr>

<tr>
<td>场景四</td>
<td>第三方子企业A员工</td>
<td>个人/自然人</td>
</tr>

<tr>
<td>场景五</td>
<td>第三方子企业A员工</td>
<td>SaaS平台企业员工</td>
</tr>
</tbody>
</table>

**注**: 
`1. 发起合同时候,  作为发起方的第三方子企业A员工的企业和员工必须经过实名, 而作为签署方的第三方子企业A员工/个人/自然人/SaaS平台企业员工/第三方子企业B员工企业中的企业和个人/员工可以未实名`

`2. 不同类型的签署方传参不同, 可以参考开发者中心的FlowApproverInfo结构体说明`

`3. 合同发起后就会扣减合同的额度, 如果未签署完成时撤销合同会返还此额度（过期，拒签，签署完成，解除完成等状态不会返还额度），合同组中每个合同会扣减一个合同额度`

`4. 静默（自动）签署不支持合同签署方存在填写功能`
     */
  async ChannelCreateFlowGroupByFiles(
    req: ChannelCreateFlowGroupByFilesRequest,
    cb?: (error: string, rep: ChannelCreateFlowGroupByFilesResponse) => void
  ): Promise<ChannelCreateFlowGroupByFilesResponse> {
    return this.request("ChannelCreateFlowGroupByFiles", req, cb)
  }

  /**
     * 本接口（ChannelCreateEmbedWebUrl）用于创建常规模块嵌入web的链接

本接口下面功能的签署页面链接的生成
- 创建印章
- 创建模板
- 修改模板
- 预览模板
- 预览合同流程
     */
  async ChannelCreateEmbedWebUrl(
    req: ChannelCreateEmbedWebUrlRequest,
    cb?: (error: string, rep: ChannelCreateEmbedWebUrlResponse) => void
  ): Promise<ChannelCreateEmbedWebUrlResponse> {
    return this.request("ChannelCreateEmbedWebUrl", req, cb)
  }

  /**
     * 此接口用于查询合同或者合同组的详情信息，支持查询多个（数量不能超过100）。

适用场景：可用于主动查询某个合同或者合同组的详情信息。

注:  `只能查询本企业创建的合同(创建合同用的Agent和此接口用的Agent数据最好一致) `
     */
  async DescribeFlowDetailInfo(
    req: DescribeFlowDetailInfoRequest,
    cb?: (error: string, rep: DescribeFlowDetailInfoResponse) => void
  ): Promise<DescribeFlowDetailInfoResponse> {
    return this.request("DescribeFlowDetailInfo", req, cb)
  }

  /**
   * 通过此接口（ChannelDescribeBillUsageDetail）查询该第三方平台子客企业的套餐消耗详情。
   */
  async ChannelDescribeBillUsageDetail(
    req: ChannelDescribeBillUsageDetailRequest,
    cb?: (error: string, rep: ChannelDescribeBillUsageDetailResponse) => void
  ): Promise<ChannelDescribeBillUsageDetailResponse> {
    return this.request("ChannelDescribeBillUsageDetail", req, cb)
  }

  /**
     * 获取个人用户自动签的开通链接。

注意: `处方单等特殊场景专用，此接口为白名单功能，使用前请联系对接的客户经理沟通。`
     */
  async ChannelCreateUserAutoSignEnableUrl(
    req: ChannelCreateUserAutoSignEnableUrlRequest,
    cb?: (error: string, rep: ChannelCreateUserAutoSignEnableUrlResponse) => void
  ): Promise<ChannelCreateUserAutoSignEnableUrlResponse> {
    return this.request("ChannelCreateUserAutoSignEnableUrl", req, cb)
  }

  /**
     * 用于获取合同中填写控件填写状态和填写的内容。 

**注意**: `附件控件不会出现在结果列表中`


**授权**:   
此接口需要授权,  有两种开通权限的途径

**第一种**:   需第三方应用的子企业登录控制台进行授权,  授权在**企业中心**的**授权管理**区域,  界面如下图
授权过程需要**子企业超管**扫描跳转到电子签小程序签署<<渠道端下载渠道子客合同功能授权委托书>>

![image](https://qcloudimg.tencent-cloud.cn/raw/8b483dfebdeafac85051279406944048.png)

**第二种**: 第三方应用的配置接口打开全第三个应用下的所有自己起开通, 需要**渠道方企业的超管**扫描二维码跳转到电子签小程序签署 <<渠道端下载渠道子客合同功能开通知情同意书>>
![image](https://qcloudimg.tencent-cloud.cn/raw/238979ef51dd381ccbdbc755a593debc/channel_DescribeResourceUrlsByFlows_appilications2.png)
     */
  async ChannelDescribeFlowComponents(
    req: ChannelDescribeFlowComponentsRequest,
    cb?: (error: string, rep: ChannelDescribeFlowComponentsResponse) => void
  ): Promise<ChannelDescribeFlowComponentsResponse> {
    return this.request("ChannelDescribeFlowComponents", req, cb)
  }
}