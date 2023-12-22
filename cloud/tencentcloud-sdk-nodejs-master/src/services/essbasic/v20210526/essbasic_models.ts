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

/**
 * SyncProxyOrganization返回参数结构体
 */
export interface SyncProxyOrganizationResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用户计费使用情况详情
 */
export interface BillUsageDetail {
  /**
   * 合同流程ID，为32位字符串。
建议开发者妥善保存此流程ID，以便于顺利进行后续操作。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowId?: string
  /**
   * 合同经办人名称
如果有多个经办人用分号隔开。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OperatorName?: string
  /**
   * 发起方组织机构名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateOrganizationName?: string
  /**
   * 合同流程的名称（可自定义此名称），长度不能超过200，只能由中文、字母、数字和下划线组成。
该名称还将用于合同签署完成后的下载文件名。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowName?: string
  /**
   * 当前合同状态,如下是状态码对应的状态。
0-还没有发起
1-等待签署
2-部分签署 
3-拒签
4-已签署 
5-已过期 
6-已撤销 
7-还没有预发起
8-等待填写
9-部分填写 
10-拒填
11-已解除
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 套餐类型
对应关系如下
CloudEnterprise-企业版合同
SingleSignature-单方签章
CloudProve-签署报告
CloudOnlineSign-腾讯会议在线签约
ChannelWeCard-微工卡
SignFlow-合同套餐
SignFace-签署意愿（人脸识别）
SignPassword-签署意愿（密码）
SignSMS-签署意愿（短信）
PersonalEssAuth-签署人实名（腾讯电子签认证）
PersonalThirdAuth-签署人实名（信任第三方认证）
OrgEssAuth-签署企业实名
FlowNotify-短信通知
AuthService-企业工商信息查询
注意：此字段可能返回 null，表示取不到有效值。
   */
  QuotaType?: string
  /**
   * 合同使用量
注意：此字段可能返回 null，表示取不到有效值。
   */
  UseCount?: number
  /**
   * 消耗的时间戳，格式为Unix标准时间戳（秒）。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CostTime?: number
  /**
   * 消耗的套餐名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  QuotaName?: string
  /**
   * 消耗类型
1.扣费 2.撤销返还
注意：此字段可能返回 null，表示取不到有效值。
   */
  CostType?: number
  /**
   * 备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
}

/**
 * ChannelCreateConvertTaskApi返回参数结构体
 */
export interface ChannelCreateConvertTaskApiResponse {
  /**
   * 接口返回的文件转换任务Id，可以调用接口<a href="https://qian.tencent.com/developers/partnerApis/files/ChannelGetTaskResultApi" target="_blank">查询转换任务状态</a>获取转换任务的状态和转换后的文件资源Id。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChannelCreateFlowReminds返回参数结构体
 */
export interface ChannelCreateFlowRemindsResponse {
  /**
   * 合同催办结果的详细信息列表。
   */
  RemindFlowRecords?: Array<RemindFlowRecords>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 此结构体 (Component) 用于描述控件属性。

在通过文件发起合同时，对应的component有三种定位方式
1. 绝对定位方式
2. 表单域(FIELD)定位方式
3. 关键字(KEYWORD)定位方式，使用关键字定位时，请确保PDF原始文件内是关键字以文字形式保存在PDF文件中，不支持对图片内文字进行关键字查找
可以参考官网说明
https://cloud.tencent.com/document/product/1323/78346#component-.E4.B8.89.E7.A7.8D.E5.AE.9A.E4.BD.8D.E6.96.B9.E5.BC.8F.E8.AF.B4.E6.98.8E
 */
export interface Component {
  /**
   * 控件编号

CreateFlowByTemplates发起合同时优先以ComponentId（不为空）填充；否则以ComponentName填充

注：
当GenerateMode=KEYWORD时，通过"^"来决定是否使用关键字整词匹配能力。
例：当GenerateMode=KEYWORD时，如果传入关键字"^甲方签署^"，则会在PDF文件中有且仅有"甲方签署"关键字的地方进行对应操作。
如传入的关键字为"甲方签署"，则PDF文件中每个出现关键字的位置都会执行相应操作。

创建控件时，此值为空
查询时返回完整结构
   */
  ComponentId?: string
  /**
   * 如果是Component控件类型，则可选的字段为：
TEXT - 普通文本控件，输入文本字符串；
MULTI_LINE_TEXT - 多行文本控件，输入文本字符串；
CHECK_BOX - 勾选框控件，若选中填写ComponentValue 填写 true或者 false 字符串；
FILL_IMAGE - 图片控件，ComponentValue 填写图片的资源 ID；
DYNAMIC_TABLE - 动态表格控件；
ATTACHMENT - 附件控件,ComponentValue 填写附件图片的资源 ID列表，以逗号分割；
SELECTOR - 选择器控件，ComponentValue填写选择的字符串内容；
DATE - 日期控件；默认是格式化为xxxx年xx月xx日字符串；
DISTRICT - 省市区行政区控件，ComponentValue填写省市区行政区字符串内容；

如果是SignComponent控件类型，则可选的字段为
SIGN_SEAL - 签署印章控件；
SIGN_DATE - 签署日期控件；
SIGN_SIGNATURE - 用户签名控件；
SIGN_PERSONAL_SEAL - 个人签署印章控件（使用文件发起暂不支持此类型）；
SIGN_PAGING_SEAL - 骑缝章；若文件发起，需要对应填充ComponentPosY、ComponentWidth、ComponentHeight
SIGN_OPINION - 签署意见控件，用户需要根据配置的签署意见内容，完成对意见内容的确认;
SIGN_LEGAL_PERSON_SEAL - 企业法定代表人控件。

表单域的控件不能作为印章和签名控件
   */
  ComponentType?: string
  /**
   * 控件简称，不超过30个字符
   */
  ComponentName?: string
  /**
   * 控件是否为必填项，
默认为false-非必填
   */
  ComponentRequired?: boolean
  /**
   * 控件关联的参与方ID，对应Recipient结构体中的RecipientId
   */
  ComponentRecipientId?: string
  /**
   * 控件所属文件的序号 (文档中文件的排列序号，从0开始)
   */
  FileIndex?: number
  /**
   * 控件生成的方式：
NORMAL - 普通控件
FIELD - 表单域
KEYWORD - 关键字（设置关键字时，请确保PDF原始文件内是关键字以文字形式保存在PDF文件中，不支持对图片内文字进行关键字查找）
   */
  GenerateMode?: string
  /**
   * 参数控件宽度，默认100，单位px
表单域和关键字转换控件不用填
   */
  ComponentWidth?: number
  /**
   * 参数控件高度，默认100，单位px
表单域和关键字转换控件不用填
   */
  ComponentHeight?: number
  /**
   * 参数控件所在页码，从1开始
   */
  ComponentPage?: number
  /**
   * 参数控件X位置，单位px
   */
  ComponentPosX?: number
  /**
   * 参数控件Y位置，单位px
   */
  ComponentPosY?: number
  /**
   * 扩展参数：
为JSON格式。
不同类型的控件会有部分非通用参数

ComponentType为TEXT、MULTI_LINE_TEXT时，支持以下参数：
1 Font：目前只支持黑体、宋体
2 FontSize： 范围12-72
3 FontAlign： Left/Right/Center，左对齐/居中/右对齐
4 FontColor：字符串类型，格式为RGB颜色数字
参数样例：{\"FontColor\":\"255,0,0\",\"FontSize\":12}

ComponentType为FILL_IMAGE时，支持以下参数：
NotMakeImageCenter：bool。是否设置图片居中。false：居中（默认）。 true: 不居中
FillMethod: int. 填充方式。0-铺满（默认）；1-等比例缩放

ComponentType为SIGN_SIGNATURE类型可以控制签署方式
{“ComponentTypeLimit”: [“xxx”]}
xxx可以为：
HANDWRITE – 手写签名
OCR_ESIGN -- AI智能识别手写签名
ESIGN -- 个人印章类型
SYSTEM_ESIGN -- 系统签名（该类型可以在用户签署时根据用户姓名一键生成一个签名来进行签署）
如：{“ComponentTypeLimit”: [“SYSTEM_ESIGN”]}

ComponentType为SIGN_DATE时，支持以下参数：
1 Font：字符串类型目前只支持"黑体"、"宋体"，如果不填默认为"黑体"
2 FontSize： 数字类型，范围6-72，默认值为12
3 FontAlign： 字符串类型，可取Left/Right/Center，对应左对齐/居中/右对齐
4 Format： 字符串类型，日期格式，必须是以下五种之一 “yyyy m d”，”yyyy年m月d日”，”yyyy/m/d”，”yyyy-m-d”，”yyyy.m.d”。
5 Gaps:： 字符串类型，仅在Format为“yyyy m d”时起作用，格式为用逗号分开的两个整数，例如”2,2”，两个数字分别是日期格式的前后两个空隙中的空格个数
如果extra参数为空，默认为”yyyy年m月d日”格式的居中日期
特别地，如果extra中Format字段为空或无法被识别，则extra参数会被当作默认值处理（Font，FontSize，Gaps和FontAlign都不会起效）
参数样例： "ComponentExtra": "{"Format":“yyyy m d”,"FontSize":12,"Gaps":"2,2", "FontAlign":"Right"}"

ComponentType为SIGN_SEAL类型时，支持以下参数：
1.PageRanges：PageRange的数组，通过PageRanges属性设置该印章在PDF所有页面上盖章（适用于标书在所有页面盖章的情况）
参数样例： "ComponentExtra":"{"PageRanges":[{"BeginPage":1,"EndPage":-1}]}"
   */
  ComponentExtra?: string
  /**
   * 控件填充vaule，ComponentType和传入值类型对应关系：
TEXT - 文本内容
MULTI_LINE_TEXT - 文本内容
CHECK_BOX - true/false
FILL_IMAGE、ATTACHMENT - 附件的FileId，需要通过UploadFiles接口上传获取
SELECTOR - 选项值
DATE - 默认是格式化为xxxx年xx月xx日
DYNAMIC_TABLE - 传入json格式的表格内容，具体见数据结构FlowInfo：https://cloud.tencent.com/document/api/1420/61525#FlowInfo
SIGN_SEAL - 印章ID
SIGN_PAGING_SEAL - 可以指定印章ID

控件值约束说明：
企业全称控件：
  约束：企业名称中文字符中文括号
  检查正则表达式：/^[\u3400-\u4dbf\u4e00-\u9fa5（）]+$/

统一社会信用代码控件：
  检查正则表达式：/^[A-Z0-9]{1,18}$/

法人名称控件：
  约束：最大50个字符，2到25个汉字或者1到50个字母
  检查正则表达式：/^([\u3400-\u4dbf\u4e00-\u9fa5.·]{2,25}|[a-zA-Z·,\s-]{1,50})$/

签署意见控件：
  约束：签署意见最大长度为50字符

签署人手机号控件：
  约束：国内手机号 13,14,15,16,17,18,19号段长度11位

签署人身份证控件：
  约束：合法的身份证号码检查

控件名称：
  约束：控件名称最大长度为20字符

单行文本控件：
  约束：只允许输入中文，英文，数字，中英文标点符号

多行文本控件：
  约束：只允许输入中文，英文，数字，中英文标点符号

勾选框控件：
  约束：选择填字符串true，不选填字符串false

选择器控件：
  约束：同单行文本控件约束，填写选择值中的字符串

数字控件：
  约束：请输入有效的数字(可带小数点) 
  检查正则表达式：/^(-|\+)?\d+(\.\d+)?$/

日期控件：
  约束：格式：yyyy年mm月dd日

附件控件：
  约束：JPG或PNG图片，上传数量限制，1到6个，最大6个附件

图片控件：
  约束：JPG或PNG图片，填写上传的图片资源ID

邮箱控件：
  约束：请输入有效的邮箱地址, w3c标准
  检查正则表达式：/^([A-Za-z0-9_\-.!#$%&])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
  参考：https://emailregex.com/

地址控件：
  同单行文本控件约束

省市区控件：
  同单行文本控件约束

性别控件：
  同单行文本控件约束，填写选择值中的字符串

学历控件：
  同单行文本控件约束，填写选择值中的字符串
   */
  ComponentValue?: string
  /**
   * 日期签署控件的字号，默认为 12

签署区日期控件会转换成图片格式并带存证，需要通过字体决定图片大小
   */
  ComponentDateFontSize?: number
  /**
   * 控件所属文档的Id, 模板相关接口为空值
   */
  DocumentId?: string
  /**
   * 控件描述，不超过30个字符
   */
  ComponentDescription?: string
  /**
   * 指定关键字时横坐标偏移量，单位pt
   */
  OffsetX?: number
  /**
   * 指定关键字时纵坐标偏移量，单位pt
   */
  OffsetY?: number
  /**
   * 平台企业控件ID。
如果不为空，属于平台企业预设控件；
   */
  ChannelComponentId?: string
  /**
   * 指定关键字排序规则，
Positive-正序，
Reverse-倒序。
传入Positive时会根据关键字在PDF文件内的顺序进行排列。在指定KeywordIndexes时，0代表在PDF内查找内容时，查找到的第一个关键字。
传入Reverse时会根据关键字在PDF文件内的反序进行排列。在指定KeywordIndexes时，0代表在PDF内查找内容时，查找到的最后一个关键字。
   */
  KeywordOrder?: string
  /**
   * 指定关键字页码。
指定页码后，将只在指定的页码内查找关键字，非该页码的关键字将不会查询出来
   */
  KeywordPage?: number
  /**
   * 关键字位置模式，
Middle-居中，
Below-正下方，
Right-正右方，
LowerRight-右上角，
UpperRight-右下角。
示例：如果设置Middle的关键字盖章，则印章的中心会和关键字的中心重合，如果设置Below，则印章在关键字的正下方
   */
  RelativeLocation?: string
  /**
   * 关键字索引，如果一个关键字在PDF文件中存在多个，可以通过关键字索引指定使用第几个关键字作为最后的结果，可指定多个索引。
示例[0,2]，说明使用PDF文件内第1个和第3个关键字位置。
   */
  KeywordIndexes?: Array<number | bigint>
  /**
   * 填写提示的内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Placeholder?: string
  /**
   * 是否锁定控件值不允许编辑（嵌入式发起使用） <br/>默认false：不锁定控件值，允许在页面编辑控件值	
注意：此字段可能返回 null，表示取不到有效值。
   */
  LockComponentValue?: boolean
  /**
   * 是否禁止移动和删除控件 <br/>默认false，不禁止移动和删除控件	
注意：此字段可能返回 null，表示取不到有效值。
   */
  ForbidMoveAndDelete?: boolean
}

/**
 * ChannelDeleteSealPolicies请求参数结构体
 */
export interface ChannelDeleteSealPoliciesRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。
   */
  Agent: Agent
  /**
   * 操作的印章ID
   */
  SealId: string
  /**
   * 需要删除授权的用户ID数组，可以传入电子签系统用户ID或OpenId。
注: 
1. `填写OpenId时，系统会通过组织+渠道+OpenId查询得到对应的UserId进行授权取消操作`
   */
  UserIds: Array<string>
  /**
   * 组织机构信息，不用传
   * @deprecated
   */
  Organization?: OrganizationInfo
  /**
   * 操作人（用户）信息，不用传
   * @deprecated
   */
  Operator?: UserInfo
}

/**
 * ChannelBatchCancelFlows返回参数结构体
 */
export interface ChannelBatchCancelFlowsResponse {
  /**
   * 签署流程批量撤销失败原因，错误信息与流程Id一一对应，成功为"", 失败则对应失败原因

注:  `如果全部撤销成功, 此数组为空数组`
   */
  FailMessages?: Array<string>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChannelDisableUserAutoSign返回参数结构体
 */
export interface ChannelDisableUserAutoSignResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeExtendedServiceAuthDetail返回参数结构体
 */
export interface DescribeExtendedServiceAuthDetailResponse {
  /**
   * 服务授权的信息列表，根据查询类型返回特定扩展服务的开通和授权状况。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuthInfoDetail?: AuthInfoDetail
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 第三方应用集成员工部门信息
 */
export interface Department {
  /**
   * 部门id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DepartmentId: string
  /**
   * 部门名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DepartmentName: string
}

/**
 * 签署人配置信息
 */
export interface CommonApproverOption {
  /**
   * 是否允许修改签署人信息
   */
  CanEditApprover?: boolean
}

/**
 * ChannelCreateFlowGroupByTemplates返回参数结构体
 */
export interface ChannelCreateFlowGroupByTemplatesResponse {
  /**
   * 合同组ID，为32位字符串。
建议开发者妥善保存此合同组ID，以便于顺利进行后续操作。
   */
  FlowGroupId?: string
  /**
   * 合同组中每个合同流程ID，每个ID均为32位字符串。

注:
`此数组的顺序和入参中的FlowInfos顺序一致`
   */
  FlowIds?: Array<string>
  /**
   * 复杂文档合成任务（如，包含动态表格的预览任务）的任务信息数组；
如果文档需要异步合成，此字段会返回该异步任务的任务信息，后续可以通过ChannelGetTaskResultApi接口查询任务详情；
   */
  TaskInfos?: Array<TaskInfo>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChannelCreateFlowSignReview请求参数结构体
 */
export interface ChannelCreateFlowSignReviewRequest {
  /**
   * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。
   */
  Agent: Agent
  /**
   * 签署流程编号
   */
  FlowId: string
  /**
   * 企业内部审核结果
PASS: 通过
REJECT: 拒绝
SIGN_REJECT:拒签(流程结束)
   */
  ReviewType: string
  /**
   * 审核原因 
当ReviewType 是REJECT 时此字段必填,字符串长度不超过200
   */
  ReviewMessage?: string
  /**
   * 签署节点审核时需要指定，给个人审核时必填。
   */
  RecipientId?: string
  /**
   * 操作类型，默认：SignReview；SignReview:签署审核，CreateReview：发起审核
注：接口通过该字段区分操作类型
该字段不传或者为空，则默认为SignReview签署审核，走签署审核流程
若想使用发起审核，请指定该字段为：CreateReview
若发起个人审核，则指定该字段为：SignReview
   */
  OperateType?: string
}

/**
 * 授权出错信息
 */
export interface AuthFailMessage {
  /**
   * 第三方平台子客企业的唯一标识，长度不能超过64，只能由字母和数字组成。开发者可自定义此字段的值，并需要保存此 ID 以便进行后续操作。

一个第三方平台子客企业主体与子客企业 ProxyOrganizationOpenId 是一一对应的，不可更改，不可重复使用。例如，可以使用企业名称的哈希值，或者社会统一信用代码的哈希值，或者随机哈希值。
   */
  ProxyOrganizationOpenId?: string
  /**
   * 错误信息
   */
  Message?: string
}

/**
 * DescribeFlowDetailInfo请求参数结构体
 */
export interface DescribeFlowDetailInfoRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent: Agent
  /**
   * 需要查询的流程ID列表，最多可传入100个ID。
如果要查询合同组的信息，则不需要传入此参数，只需传入 FlowGroupId 参数即可。
   */
  FlowIds?: Array<string>
  /**
   * 需要查询的流程组ID，如果传入此参数，则会忽略 FlowIds 参数。

合同组由<a href="https://qian.tencent.com/developers/partnerApis/startFlows/ChannelCreateFlowGroupByTemplates" target="_blank">通过多模板创建合同组签署流程</a>和<a href="https://qian.tencent.com/developers/partnerApis/startFlows/ChannelCreateFlowGroupByFiles" target="_blank">通过多文件创建合同组签署流程</a>等接口创建。
   */
  FlowGroupId?: string
  /**
   * 暂未开放
   * @deprecated
   */
  Operator?: UserInfo
}

/**
 * ChannelCancelUserAutoSignEnableUrl返回参数结构体
 */
export interface ChannelCancelUserAutoSignEnableUrlResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyExtendedService请求参数结构体
 */
export interface ModifyExtendedServiceRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业标识: Agent. ProxyOperator.OpenId</li>
<li>第三方平台子客企业中的员工标识: Agent.AppId</li>
</ul>
   */
  Agent: Agent
  /**
   *   扩展服务类型
<ul>
<li>AUTO_SIGN             企业自动签（自动签署）</li>
<li>  OVERSEA_SIGN          企业与港澳台居民*签署合同</li>
<li>  MOBILE_CHECK_APPROVER 使用手机号验证签署方身份</li>
<li> PAGING_SEAL           骑缝章</li>
<li> DOWNLOAD_FLOW         授权渠道下载合同 </li>
<li>AGE_LIMIT_EXPANSION 拓宽签署方年龄限制</li>
</ul>
   */
  ServiceType: string
  /**
   * 操作类型 
OPEN:开通 
CLOSE:关闭
   */
  Operate: string
  /**
   * 链接跳转类型，支持以下类型
<ul>
<li>WEIXINAPP : 短链直接跳转到电子签小程序  (默认值)</li>
<li>APP : 第三方APP或小程序跳转电子签小程序</li>
</ul>
   */
  Endpoint?: string
}

/**
 * DescribeResourceUrlsByFlows请求参数结构体
 */
export interface DescribeResourceUrlsByFlowsRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent.ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent: Agent
  /**
   * 需要下载的合同流程的ID,  至少需要1个,  做多50个
   */
  FlowIds?: Array<string>
  /**
   * 操作者的信息，不用传
   * @deprecated
   */
  Operator?: UserInfo
}

/**
 * 企业扩展服务授权列表详情
 */
export interface AuthInfoDetail {
  /**
   * 扩展服务类型，和入参一致	
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 扩展服务名称	
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 授权员工列表	
注意：此字段可能返回 null，表示取不到有效值。
   */
  HasAuthUserList?: Array<HasAuthUser>
  /**
   * 授权企业列表（企业自动签时，该字段有值）	
注意：此字段可能返回 null，表示取不到有效值。
   */
  HasAuthOrganizationList?: Array<HasAuthOrganization>
  /**
   * 授权员工列表总数	
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuthUserTotal?: number
  /**
   * 授权企业列表总数	
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuthOrganizationTotal?: number
}

/**
 * CreateChannelOrganizationInfoChangeUrl返回参数结构体
 */
export interface CreateChannelOrganizationInfoChangeUrlResponse {
  /**
   * 创建的企业信息变更链接。需要在移动端打开，会跳转到微信腾讯电子签小程序进行更换。
   */
  Url?: string
  /**
   * 链接过期时间。链接7天有效。
   */
  ExpiredTime?: number
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 催办接口返回的详细信息。
 */
export interface RemindFlowRecords {
  /**
   * 合同流程是否可以催办： true - 可以，false - 不可以。 若无法催办，将返回RemindMessage以解释原因。
   */
  CanRemind?: boolean
  /**
   * 合同流程ID，为32位字符串。
   */
  FlowId?: string
  /**
   * 在合同流程无法催办的情况下，系统将返回RemindMessage以阐述原因。
   */
  RemindMessage?: string
}

/**
 * ChannelCreateFlowSignUrl返回参数结构体
 */
export interface ChannelCreateFlowSignUrlResponse {
  /**
   * 签署人签署链接信息
   */
  FlowApproverUrlInfos?: Array<FlowApproverUrlInfo>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 被授权的用户信息
 */
export interface HasAuthUser {
  /**
   * 第三方应用平台自定义，对应第三方平台子客企业员工的唯一标识。


注意：此字段可能返回 null，表示取不到有效值。
   */
  OpenId?: string
}

/**
 * ChannelCreateBatchSignUrl返回参数结构体
 */
export interface ChannelCreateBatchSignUrlResponse {
  /**
   * 批量签署链接，以短链形式返回，短链的有效期参考回参中的 ExpiredTime。

注: `非小程序和APP集成使用`
   */
  SignUrl?: string
  /**
   * 链接过期时间以 Unix 时间戳格式表示，从生成链接时间起，往后7天有效期。过期后短链将失效，无法打开。
   */
  ExpiredTime?: number
  /**
   * 从客户小程序或者客户APP跳转至腾讯电子签小程序进行批量签署的跳转路径

注: `小程序和APP集成使用`
   */
  MiniAppPath?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChannelCreatePrepareFlow返回参数结构体
 */
export interface ChannelCreatePrepareFlowResponse {
  /**
   * 发起的合同嵌入链接， 可以直接点击进入进行合同发起， 有效期为5分钟
   */
  PrepareFlowUrl?: string
  /**
   * 合同发起后预览链接， 注意此时合同并未发起，仅只是展示效果， 有效期为5分钟
   */
  PreviewFlowUrl?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 主题配置
 */
export interface WebThemeConfig {
  /**
   * 是否显示页面底部电子签logo，取值如下：
<ul><li> **true**：页面底部显示电子签logo</li>
<li> **false**：页面底部不显示电子签logo（默认）</li></ul>
   */
  DisplaySignBrandLogo?: boolean
  /**
   * 主题颜色：
支持十六进制颜色值以及RGB格式颜色值，例如：#D54941，rgb(213, 73, 65)
<br/>
   */
  WebEmbedThemeColor?: string
}

/**
 * OperateChannelTemplate返回参数结构体
 */
export interface OperateChannelTemplateResponse {
  /**
   * 第三方应用平台的应用ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: string
  /**
   * 合同模板ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TemplateId?: string
  /**
   * 描述模板可见性更改的结果。
<ul>
<li>all-success: 全部成功</li>
<li>part-success: 部分成功,失败的会在FailMessageList中展示</li>
<li>fail:全部失败, 失败的会在FailMessageList中展示</li>
</ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  OperateResult?: string
  /**
   * 模板可见范围:
**all**: 所有本第三方应用合作企业可见
**part**: 指定的本第三方应用合作企业
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuthTag?: string
  /**
   * 第三方平台子客企业标识列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProxyOrganizationOpenIds?: Array<string>
  /**
   * 操作失败信息数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailMessageList?: Array<AuthFailMessage>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 合同组中每个子合同的发起信息
 */
export interface FlowFileInfo {
  /**
   * 签署文件资源Id列表，目前仅支持单个文件
   */
  FileIds: Array<string>
  /**
   * 签署流程名称，长度不超过200个字符
   */
  FlowName: string
  /**
   * 签署流程签约方列表，最多不超过5个参与方
   */
  FlowApprovers: Array<FlowApproverInfo>
  /**
   * 签署流程截止时间，十位数时间戳，最大值为33162419560，即3020年
   */
  Deadline?: number
  /**
   * 签署流程的描述，长度不超过1000个字符
   */
  FlowDescription?: string
  /**
   * 签署流程的类型，长度不超过255个字符
   */
  FlowType?: string
  /**
   * 签署流程回调地址，长度不超过255个字符
   */
  CallbackUrl?: string
  /**
   * 第三方应用的业务信息，最大长度1000个字符。发起自动签署时，需设置对应自动签署场景，目前仅支持场景：处方单-E_PRESCRIPTION_AUTO_SIGN
   */
  CustomerData?: string
  /**
   * 合同签署顺序类型(无序签,顺序签)，默认为false，即有序签署
   */
  Unordered?: boolean
  /**
   * 签署文件中的发起方的填写控件，需要在发起的时候进行填充
   */
  Components?: Array<Component>
  /**
   * 合同显示的页卡模板，说明：只支持{合同名称}, {发起方企业}, {发起方姓名}, {签署方N企业}, {签署方N姓名}，且N不能超过签署人的数量，N从1开始
   */
  CustomShowMap?: string
  /**
   * 本企业(发起方企业)是否需要签署审批
   */
  NeedSignReview?: boolean
}

/**
 * 创建合同个性化参数
 */
export interface CreateFlowOption {
  /**
   * 是否允许修改合同信息，
   **true**：可以
   **false**：（默认）不可以
   */
  CanEditFlow?: boolean
  /**
   * 是否允许发起合同弹窗隐藏合同名称
   **true**：允许
   **false**：（默认）不允许
   */
  HideShowFlowName?: boolean
  /**
   * 是否允许发起合同弹窗隐藏合同类型，
   **true**：允许
   **false**：（默认）不允许
   */
  HideShowFlowType?: boolean
  /**
   * 是否允许发起合同弹窗隐藏合同到期时间
   **true**：允许
   **false**：（默认）不允许
   */
  HideShowDeadline?: boolean
  /**
   * 是否允许发起合同步骤跳过指定签署方步骤
   **true**：允许
   **false**：（默认）不允许
   */
  CanSkipAddApprover?: boolean
  /**
   * 定制化发起合同弹窗的描述信息，长度不能超过500，只能由中文、字母、数字和标点组成。
   */
  CustomCreateFlowDescription?: string
  /**
   * 禁止编辑填写控件

**true**：禁止编辑填写控件
**false**：（默认）允许编辑填写控件
   */
  ForbidEditFillComponent?: boolean
  /**
   * 跳过上传文件步骤

**true**：跳过
**false**：（默认）不跳过，需要传ResourceId
   */
  SkipUploadFile?: boolean
}

/**
 * ChannelCreateRole请求参数结构体
 */
export interface ChannelCreateRoleRequest {
  /**
   * 角色名称，最大长度为20个字符，仅限中文、字母、数字和下划线组成。
   */
  Name: string
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent: Agent
  /**
   * 角色描述，最大长度为50个字符
   */
  Description?: string
  /**
   * 权限树，权限树内容 PermissionGroups 可参考接口 ChannelDescribeRoles 的输出
   */
  PermissionGroups?: Array<PermissionGroup>
}

/**
 * 基础流程信息
 */
export interface BaseFlowInfo {
  /**
   * 合同流程的名称（可自定义此名称），长度不能超过200，只能由中文、字母、数字和下划线组成。
   */
  FlowName: string
  /**
   * 合同流程的类别分类（可自定义名称，如销售合同/入职合同等），最大长度为200个字符，仅限中文、字母、数字和下划线组成。
   */
  FlowType: string
  /**
   * 合同流程描述信息(可自定义此描述)，最大长度1000个字符。
   */
  FlowDescription: string
  /**
   * 合同流程的签署截止时间，格式为Unix标准时间戳（秒），如果在签署截止时间前未完成签署，则合同状态会变为已过期，导致合同作废。
   */
  Deadline: number
  /**
   * 合同流程的签署顺序类型：
   **false**：(默认)有序签署, 本合同多个参与人需要依次签署
   **true**：无序签署, 本合同多个参与人没有先后签署限制
   */
  Unordered?: boolean
  /**
   * 是否打开智能添加填写区(默认开启，打开:"OPEN" 关闭："CLOSE")
   */
  IntelligentStatus?: string
  /**
   * 填写控件内容， 填写的控制的ID-填写的内容对列表
   */
  FormFields?: Array<FormField>
  /**
   * 发起方企业的签署人进行签署操作前，是否需要企业内部走审批流程，取值如下：
<ul><li> **false**：（默认）不需要审批，直接签署。</li>
<li> **true**：需要走审批流程。当到对应参与人签署时，会阻塞其签署操作，等待企业内部审批完成。</li></ul>
企业可以通过CreateFlowSignReview审批接口通知腾讯电子签平台企业内部审批结果
<ul><li> 如果企业通知腾讯电子签平台审核通过，签署方可继续签署动作。</li>
<li> 如果企业通知腾讯电子签平台审核未通过，平台将继续阻塞签署方的签署动作，直到企业通知平台审核通过。</li></ul>
注：`此功能可用于与企业内部的审批流程进行关联，支持手动、静默签署合同`
   */
  NeedSignReview?: boolean
  /**
   * 调用方自定义的个性化字段(可自定义此名称)，并以base64方式编码，支持的最大数据大小为1000长度。

在合同状态变更的回调信息等场景中，该字段的信息将原封不动地透传给贵方。回调的相关说明可参考开发者中心的回调通知模块。
   */
  UserData?: string
  /**
   * 合同流程的抄送人列表，最多可支持50个抄送人，抄送人可查看合同内容及签署进度，但无需参与合同签署。

   */
  CcInfos?: Array<CcInfo>
  /**
   * 发起方企业的签署人进行发起操作是否需要企业内部审批。使用此功能需要发起方企业有参与签署。

若设置为true，发起审核结果需通过接口 [提交企业签署流程审批结果](https://qian.tencent.com/developers/partnerApis/operateFlows/ChannelCreateFlowSignReview)通知电子签，审核通过后，发起方企业签署人方可进行发起操作，否则会阻塞其发起操作。


   */
  NeedCreateReview?: boolean
  /**
   * 填写控件：文件发起使用
   */
  Components?: Array<Component>
}

/**
 * 解除协议的签署人，如不指定，默认使用待解除流程(原流程)中的签署人。</br>
`注意`:
 - 不支持更换C端(个人身份类型)签署人，如果原流程中含有C端签署人，默认使用原流程中的该签署人。
 - 目前不支持替换C端(个人身份类型)签署人，但是可以指定C端签署人的签署方自定义控件别名，具体见参数ApproverSignRole描述。 
 - 当指定C端签署人的签署方自定义控件别名不空时，除参数ApproverNumber外，可以只传参数ApproverSignRole。

如果需要指定B端(企业身份类型)签署人，其中ReleasedApprover需要传递的参数如下：
`ApproverNumber`, `OrganizationName`, `ApproverType`必传。</br>
对于其他身份标识：
- **子客企业指定经办人**：OpenId必传，OrganizationOpenId必传；
- **非子客企业经办人**：Name、Mobile必传。
 */
export interface ReleasedApprover {
  /**
   * 签署人在原合同签署人列表中的顺序序号(从0开始，按顺序依次递增)。</br>
可以通过<a href="https://qian.tencent.com/developers/partnerApis/flows/DescribeFlowDetailInfo" target="_blank">DescribeFlowDetailInfo</a>接口查看原流程中的签署人列表。
   */
  ApproverNumber: number
  /**
   * 指定签署人类型，目前支持
<ul><li> **ORGANIZATION**：企业(默认值)</li>
<li> **ENTERPRISESERVER**：企业静默签</li></ul>
   */
  ApproverType: string
  /**
   * 签署人姓名，最大长度50个字。
   */
  Name?: string
  /**
   * 签署方经办人的证件类型，支持以下类型
<ul><li>ID_CARD : 居民身份证(默认值)</li>
<li>HONGKONG_AND_MACAO : 港澳居民来往内地通行证</li>
<li>HONGKONG_MACAO_AND_TAIWAN : 港澳台居民居住证(格式同居民身份证)</li></ul>
   */
  IdCardType?: string
  /**
   * 证件号码，应符合以下规则
<ul><li>居民身份证号码应为18位字符串，由数字和大写字母X组成(如存在X，请大写)。</li>
<li>港澳居民来往内地通行证号码应为9位字符串，第1位为“C”，第2位为英文字母(但“I”、“O”除外)，后7位为阿拉伯数字。</li>
<li>港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。</li></ul>
   */
  IdCardNumber?: string
  /**
   * 签署人手机号。
   */
  Mobile?: string
  /**
   * 组织机构名称。
请确认该名称与企业营业执照中注册的名称一致。
如果名称中包含英文括号()，请使用中文括号（）代替。
如果签署方是企业签署方(approverType = 0 或者 approverType = 3)， 则企业名称必填。
   */
  OrganizationName?: string
  /**
   * 第三方平台子客企业的唯一标识，定义Agent中的ProxyOrganizationOpenId一样, 可以参考<a href="https://qian.tencent.com/developers/partnerApis/dataTypes/#agent" target="_blank">Agent结构体</a>。</br>
当为子客企业指定经办人时，此OrganizationOpenId必传。
   */
  OrganizationOpenId?: string
  /**
   * 第三方平台子客企业员工的唯一标识，长度不能超过64，只能由字母和数字组成。</br>
当签署方为同一第三方平台下的员工时，此OpenId必传。
   */
  OpenId?: string
  /**
   * 签署控件类型，支持自定义企业签署方的签署控件类型
<ul><li> **SIGN_SEAL**：默认为印章控件类型(默认值)</li>
<li> **SIGN_SIGNATURE**：手写签名控件类型</li></ul>
   */
  ApproverSignComponentType?: string
  /**
   * 参与方在合同中的角色是按照创建合同的时候来排序的，解除协议默认会将第一个参与人叫`甲方`,第二个叫`乙方`,  第三个叫`丙方`，以此类推。</br>
如果需改动此参与人的角色名字，可用此字段指定，由汉字,英文字符,数字组成，最大20个字。
   */
  ApproverSignRole?: string
}

/**
 * CreateConsoleLoginUrl返回参数结构体
 */
export interface CreateConsoleLoginUrlResponse {
  /**
   * 跳转链接, 链接的有效期根据企业,员工状态和终端等有区别, 可以参考下表
<table> <thead> <tr> <th>子客企业状态</th> <th>子客企业员工状态</th> <th>Endpoint</th> <th>链接有效期限</th> </tr> </thead>  <tbody> <tr> <td>企业未激活</td> <td>员工未认证</td> <td>PC/PC_SHORT_URL</td> <td>5分钟</td>  </tr>  <tr> <td>企业未激活</td> <td>员工未认证</td> <td>CHANNEL/APP</td> <td>一年</td>  </tr>  <tr> <td>企业已激活</td> <td>员工未认证</td> <td>PC/PC_SHORT_URL</td> <td>5分钟</td>  </tr> <tr> <td>企业已激活</td> <td>员工未认证</td> <td>PC/CHANNEL/APP</td> <td>一年</td>  </tr>  <tr> <td>企业已激活</td> <td>员工已认证</td> <td>PC</td> <td>5分钟</td>  </tr>  <tr> <td>企业已激活</td> <td>员工已认证</td> <td>CHANNEL/APP</td> <td>一年</td>  </tr> </tbody> </table>
注： 
`1.链接仅单次有效，每次登录需要需要重新创建新的链接`
`2.创建的链接应避免被转义，如：&被转义为\u0026；如使用Postman请求后，请选择响应类型为 JSON，否则链接将被转义`

   */
  ConsoleUrl?: string
  /**
   * 子客企业是否已开通腾讯电子签，
<ul><li> **true** :已经开通腾讯电子签</li>
<li> **false** :还未开通腾讯电子签</li></ul>

注：`企业是否实名根据传参Agent.ProxyOrganizationOpenId进行判断，非企业名称或者社会信用代码`
   */
  IsActivated?: boolean
  /**
   * 当前经办人是否已认证并加入功能
<ul><li> **true** : 已经认证加入公司</li>
<li> **false** : 还未认证加入公司</li></ul>
注意：**员工是否实名是根据Agent.ProxyOperator.OpenId判断，非经办人姓名**
   */
  ProxyOperatorIsVerified?: boolean
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChannelDeleteRoleUsers请求参数结构体
 */
export interface ChannelDeleteRoleUsersRequest {
  /**
   * 代理信息此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。
   */
  Agent: Agent
  /**
   * 角色Id（非超管或法人角色Id）
   */
  RoleId: string
  /**
   * 电子签用户ID列表，与OpenIds参数二选一,优先UserIds参数，最多两百
   */
  UserIds?: Array<string>
  /**
   * 操作人信息
   * @deprecated
   */
  Operator?: UserInfo
  /**
   * 客户系统用户ID列表，与UserIds参数二选一,优先UserIds参数，最多两百
   */
  OpenIds?: Array<string>
}

/**
 * ChannelCreateUserRoles返回参数结构体
 */
export interface ChannelCreateUserRolesResponse {
  /**
   * 绑定失败的用户角色列表
   */
  FailedCreateRoleData?: Array<FailedCreateRoleData>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SyncProxyOrganization请求参数结构体
 */
export interface SyncProxyOrganizationRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
</ul>

   */
  Agent: Agent
  /**
   * 第三方平台子客企业名称，请确认该名称与企业营业执照中注册的名称一致。
注: `如果名称中包含英文括号()，请使用中文括号（）代替。`
   */
  ProxyOrganizationName: string
  /**
   * 营业执照正面照(PNG或JPG) base64格式, 大小不超过5M
   */
  BusinessLicense?: string
  /**
   * 第三方平台子客企业统一社会信用代码，最大长度200个字符
   */
  UniformSocialCreditCode?: string
  /**
   * 第三方平台子客企业法定代表人的名字
   */
  ProxyLegalName?: string
  /**
   * 暂未开放
   * @deprecated
   */
  Operator?: UserInfo
  /**
   * 第三方平台子客企业法定代表人的证件类型，支持以下类型
<ul><li>ID_CARD : 居民身份证 (默认值)</li></ul>
注: `现在仅支持ID_CARD居民身份证类型`
   */
  ProxyLegalIdCardType?: string
  /**
   * 第三方平台子客企业法定代表人的证件号码, 应符合以下规则
<ul><li>居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。</li></ul>
   */
  ProxyLegalIdCardNumber?: string
  /**
   * 第三方平台子客企业详细住所，最大长度500个字符

注：`需要符合省市区详情的格式例如： XX省XX市XX区街道具体地址`
   */
  ProxyAddress?: string
}

/**
 * ChannelCreatePrepareFlow请求参数结构体
 */
export interface ChannelCreatePrepareFlowRequest {
  /**
   * 资源类型，取值有：
<ul><li> **1**：模板</li>
<li> **2**：文件（默认值）</li></ul>
   */
  ResourceType: number
  /**
   * 要创建的合同信息
   */
  FlowInfo: BaseFlowInfo
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent?: Agent
  /**
   * 资源id，与ResourceType相对应，取值范围：
<ul>
<li>文件Id（通过UploadFiles获取文件资源Id）</li>
<li>模板Id</li>
</ul>
   */
  ResourceId?: string
  /**
   * 合同流程配置信息，用于配置发起合同时定制化如是否允许修改，某些按钮的隐藏等逻辑
   */
  FlowOption?: CreateFlowOption
  /**
   * 合同签署人信息
   */
  FlowApproverList?: Array<CommonFlowApprover>
  /**
   * 合同Id：用于通过一个已发起的合同快速生成一个发起流程web链接
注: `该参数必须是一个待发起审核的合同id，并且还未审核通过`
   */
  FlowId?: string
  /**
   * 该参数不可用，请通过获取 web 可嵌入接口获取合同流程预览 URL
   * @deprecated
   */
  NeedPreview?: boolean
  /**
   * 企业机构信息，不用传
   * @deprecated
   */
  Organization?: OrganizationInfo
  /**
   * 操作人（用户）信息，不用传
   * @deprecated
   */
  Operator?: UserInfo
}

/**
 * ChannelCreateFlowReminds请求参数结构体
 */
export interface ChannelCreateFlowRemindsRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent: Agent
  /**
   * 需执行催办的合同流程ID数组，最多支持100个。
   */
  FlowIds: Array<string>
}

/**
 * ChannelCreateSealPolicy返回参数结构体
 */
export interface ChannelCreateSealPolicyResponse {
  /**
   * 最终授权成功的电子签系统用户ID数组。其他的跳过的是已经授权了的。
请求参数填写OpenId时，返回授权成功的 Openid。
   */
  UserIds?: Array<string>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 电子文档的控件填充信息。按照控件类型进行相应的填充。

当控件的 ComponentType='TEXT'时，FormField.ComponentValue填入文本内容
```
FormField输入示例：
{
    "ComponentId": "componentId1",
    "ComponentValue": "文本内容"
}
```
当控件的 ComponentType='MULTI_LINE_TEXT'时，FormField.ComponentValue填入文本内容，支持自动换行。
```
FormField输入示例：
{
    "ComponentId": "componentId1",
    "ComponentValue": "多行文本内容"
}
```
当控件的 ComponentType='CHECK_BOX'时，FormField.ComponentValue填入true或false文本
```
FormField输入示例：
{
    "ComponentId": "componentId1",
    "ComponentValue": "true"
}
```
当控件的 ComponentType='FILL_IMAGE'时，FormField.ComponentValue填入图片的资源ID
```
FormField输入示例：
{
    "ComponentId": "componentId1",
    "ComponentValue": "yDwhsxxxxxxxxxxxxxxxxxxxxxxxxxxx"
}
```
当控件的 ComponentType='ATTACHMENT'时，FormField.ComponentValue填入附件图片的资源ID列表，以逗号分隔，单个附件控件最多支持6个资源ID；
```
FormField输入示例：
{
    "ComponentId": "componentId1",
    "ComponentValue": "yDwhsxxxxxxxxxxxxxxxxxxxxxxxxxx1,yDwhsxxxxxxxxxxxxxxxxxxxxxxxxxx2,yDwhsxxxxxxxxxxxxxxxxxxxxxxxxxx3"
}
```
当控件的 ComponentType='SELECTOR'时，FormField.ComponentValue填入选择的选项内容；
```
FormField输入示例：
{
    "ComponentId": "componentId1",
    "ComponentValue": "选择的内容"
}
```
当控件的 ComponentType='DATE'时，FormField.ComponentValue填入日期内容；
```
FormField输入示例：
{
    "ComponentId": "componentId1",
    "ComponentValue": "2023年01月01日"
}
```
当控件的 ComponentType='DISTRICT'时，FormField.ComponentValue填入省市区内容；
```
FormField输入示例：
{
    "ComponentId": "componentId1",
    "ComponentValue": "广东省深圳市福田区"
}
```
【数据表格传参说明】
当控件的 ComponentType='DYNAMIC_TABLE'时，FormField.ComponentValue需要传递json格式的字符串参数，用于确定表头&填充数据表格（支持内容的单元格合并）
输入示例1：

```
{
    "headers":[
        {
            "content":"head1"
        },
        {
            "content":"head2"
        },
        {
            "content":"head3"
        }
    ],
    "rowCount":3,
    "body":{
        "cells":[
            {
                "rowStart":1,
                "rowEnd":1,
                "columnStart":1,
                "columnEnd":1,
                "content":"123"
            },
            {
                "rowStart":2,
                "rowEnd":3,
                "columnStart":1,
                "columnEnd":2,
                "content":"456"
            },
            {
                "rowStart":3,
                "rowEnd":3,
                "columnStart":3,
                "columnEnd":3,
                "content":"789"
            }
        ]
    }
}

```

输入示例2（表格表头宽度比例配置）：

```
{
    "headers":[
        {
            "content":"head1",
            "widthPercent": 30
        },
        {
            "content":"head2",
            "widthPercent": 30
        },
        {
            "content":"head3",
            "widthPercent": 40
        }
    ],
    "rowCount":3,
    "body":{
        "cells":[
            {
                "rowStart":1,
                "rowEnd":1,
                "columnStart":1,
                "columnEnd":1,
                "content":"123"
            },
            {
                "rowStart":2,
                "rowEnd":3,
                "columnStart":1,
                "columnEnd":2,
                "content":"456"
            },
            {
                "rowStart":3,
                "rowEnd":3,
                "columnStart":3,
                "columnEnd":3,
                "content":"789"
            }
        ]
    }
}

```


输入示例3（表格设置字体加粗颜色）：

```
{
    "headers":[
        {
            "content":"head1"
        },
        {
            "content":"head2"
        },
        {
            "content":"head3"
        }
    ],
    "rowCount":3,
    "body":{
        "cells":[
            {
                "rowStart":1,
                "rowEnd":1,
                "columnStart":1,
                "columnEnd":1,
                "content":"123",
                "style": {"color": "#b50000", "fontSize": 12,"bold": true,"align": "CENTER"}
            },
            {
                "rowStart":2,
                "rowEnd":3,
                "columnStart":1,
                "columnEnd":2,
                "content":"456",
                "style": {"color": "#b50000", "fontSize": 12,"bold": true,"align": "LEFT"}
            },
            {
                "rowStart":3,
                "rowEnd":3,
                "columnStart":3,
                "columnEnd":3,
                "content":"789",
                "style": {"color": "#b500bf", "fontSize": 12,"bold": false,"align": "RIGHT"}
            }
        ]
    }
}

```

表格参数说明

| 名称                | 类型    | 描述                                              |
| ------------------- | ------- | ------------------------------------------------- |
| headers             | Array   | 表头：不超过10列，不支持单元格合并，字数不超过100 |
| rowCount            | Integer | 表格内容最大行数                                  |
| cells.N.rowStart    | Integer | 单元格坐标：行起始index                           |
| cells.N.rowEnd      | Integer | 单元格坐标：行结束index                           |
| cells.N.columnStart | Integer | 单元格坐标：列起始index                           |
| cells.N.columnEnd   | Integer | 单元格坐标：列结束index                           |
| cells.N.content     | String  | 单元格内容，字数不超过100                         |
| cells.N.style         | String  | 单元格字体风格配置 ，风格配置的json字符串  如： {"font":"黑体","fontSize":12,"color":"#FFFFFF","bold":true,"align":"CENTER"}      |

表格参数headers说明
widthPercent Integer 表头单元格列占总表头的比例，例如1：30表示 此列占表头的30%，不填写时列宽度平均拆分；例如2：总2列，某一列填写40，剩余列可以为空，按照60计算。；例如3：总3列，某一列填写30，剩余2列可以为空，分别为(100-30)/2=35

content String 表头单元格内容，字数不超过100

style String 为字体风格设置 风格支持： font : 目前支持 黑体、宋体; fontSize： 6-72; color：000000-FFFFFF  字符串形如：  "#FFFFFF" 或者 "0xFFFFFF"; bold ： 是否加粗， true ： 加粗 false： 不加粗; align: 对其方式， 支持 LEFT / RIGHT / CENTER
 */
export interface FormField {
  /**
   * 控件填充值，ComponentType和传入值格式对应关系如下：
<ul>
<li>TEXT - 普通文本控件，需输入文本字符串；</li>
<li>MULTI_LINE_TEXT - 多行文本控件，需输入文本字符串；</li>
<li>CHECK_BOX - 勾选框控件，若选中需填写ComponentValue，填写 true或者 false 字符串；</li>
<li>FILL_IMAGE - 图片控件，需填写ComponentValue为图片的资源 ID；</li>
<li>DYNAMIC_TABLE - 动态表格控件；</li>
<li>ATTACHMENT - 附件控件，需填写ComponentValue为附件图片的资源 ID列表，以逗号分割；</li>
<li>DATE - 日期控件；格式为 <b>xxxx年xx月xx日</b> 字符串；</li>
<li>DISTRICT - 省市区行政区控件，需填写ComponentValue为省市区行政区字符串内容；</li>
</ul>

   */
  ComponentValue: string
  /**
   * 表单域或控件的ID，跟ComponentName二选一，不能全为空；
CreateFlowsByTemplates 接口不使用此字段。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ComponentId?: string
  /**
   * 控件的名字，跟ComponentId二选一，不能全为空
注意：此字段可能返回 null，表示取不到有效值。
   */
  ComponentName?: string
  /**
   * 是否锁定模板控件值，锁定后无法修改（用于嵌入式发起合同），true-锁定，false-不锁定
注意：此字段可能返回 null，表示取不到有效值。
   */
  LockComponentValue?: boolean
}

/**
 * ChannelCancelFlow返回参数结构体
 */
export interface ChannelCancelFlowResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 签署流程下载信息
 */
export interface DownloadFlowInfo {
  /**
   * 文件夹名称
   */
  FileName: string
  /**
   * 签署流程的标识数组
   */
  FlowIdList: Array<string>
}

/**
 * 签署人签署链接信息。
 */
export interface FlowApproverUrlInfo {
  /**
   * 签署短链接。</br>
注意:
- 该链接有效期为**30分钟**，同时需要注意保密，不要外泄给无关用户。
- 该链接不支持小程序嵌入，仅支持**移动端浏览器**打开。
   */
  SignUrl?: string
  /**
   * 签署人类型。
- **PERSON**: 个人
   */
  ApproverType?: string
  /**
   * 签署人姓名。
   */
  Name?: string
  /**
   * 签署人手机号。
   */
  Mobile?: string
  /**
   * 签署长链接。</br>
注意:
- 该链接有效期为**30分钟**，同时需要注意保密，不要外泄给无关用户。
- 该链接不支持小程序嵌入，仅支持**移动端浏览器**打开。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LongUrl?: string
}

/**
 * ChannelCreateWebThemeConfig请求参数结构体
 */
export interface ChannelCreateWebThemeConfigRequest {
  /**
   * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。
   */
  Agent: Agent
  /**
   * 主题类型<br/>EMBED_WEB_THEME：嵌入式主题
<br/>目前只支持EMBED_WEB_THEME，web页面嵌入的主题风格配置
   */
  ThemeType: string
  /**
   * 主题配置
   */
  WebThemeConfig: WebThemeConfig
}

/**
 * ChannelCreateConvertTaskApi请求参数结构体
 */
export interface ChannelCreateConvertTaskApiRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent: Agent
  /**
   * 需要进行转换的资源文件类型
支持的文件类型如下：
<ul><li>doc</li>
<li>docx</li>
<li>xls</li>
<li>xlsx</li>
<li>jpg</li>
<li>jpeg</li>
<li>png</li>
<li>bmp</li>
<li>html</li>
<li>txt</li></ul>
   */
  ResourceType: string
  /**
   * 需要进行转换操作的文件资源名称，带资源后缀名。

注:  `资源名称长度限制为256个字符`
   */
  ResourceName: string
  /**
   * 需要进行转换操作的文件资源Id，通过<a href="https://qian.tencent.com/developers/partnerApis/files/UploadFiles" target="_blank">UploadFiles</a>接口获取文件资源Id。

注:  `目前，此接口仅支持单个文件进行转换。`
   */
  ResourceId: string
  /**
   * 调用方用户信息，不用传
   * @deprecated
   */
  Operator?: UserInfo
  /**
   * 暂未开放
   * @deprecated
   */
  Organization?: OrganizationInfo
}

/**
 * ChannelCreateFlowByFiles请求参数结构体
 */
export interface ChannelCreateFlowByFilesRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业标识: Agent. ProxyOperator.OpenId</li>
<li>第三方平台子客企业中的员工标识: Agent.AppId</li>
</ul>
   */
  Agent?: Agent
  /**
   * 合同流程的名称（可自定义此名称），长度不能超过200，只能由中文、字母、数字和下划线组成。
   */
  FlowName?: string
  /**
   * 合同流程描述信息(可自定义此描述)，最大长度1000个字符。
   */
  FlowDescription?: string
  /**
   * 合同流程的参与方列表, 最多可支持50个参与方，可在列表中指定企业B端签署方和个人C端签署方的联系和认证方式等信息，具体定义可以参考开发者中心的<a href="https://qian.tencent.com/developers/partnerApis/dataTypes/#flowapproverinfo" target="_blank">FlowApproverInfo结构体</a>。

如果合同流程是有序签署，Approvers列表中参与人的顺序就是默认的签署顺序, 请确保列表中参与人的顺序符合实际签署顺序。
   */
  FlowApprovers?: Array<FlowApproverInfo>
  /**
   * 本合同流程需包含的PDF文件资源编号列表，通过<a href="https://qian.tencent.com/developers/partnerApis/files/UploadFiles" target="_blank">UploadFiles</a>接口获取PDF文件资源编号。

注: `目前，此接口仅支持单个文件发起。`
   */
  FileIds?: Array<string>
  /**
   * 模板或者合同中的填写控件列表，列表中可支持下列多种填写控件，控件的详细定义参考开发者中心的Component结构体
<ul><li>单行文本控件</li>
<li>多行文本控件</li>
<li>勾选框控件</li>
<li>数字控件</li>
<li>图片控件</li>
<li>数据表格等填写控件</li></ul>
   */
  Components?: Array<Component>
  /**
   * 合同流程的签署截止时间，格式为Unix标准时间戳（秒），如果未设置签署截止时间，则默认为合同流程创建后的365天时截止。
如果在签署截止时间前未完成签署，则合同状态会变为已过期，导致合同作废。
   */
  Deadline?: number
  /**
   * 执行结果的回调URL，长度不超过255个字符，该URL仅支持HTTP或HTTPS协议，建议采用HTTPS协议以保证数据传输的安全性。
腾讯电子签服务器将通过POST方式，application/json格式通知执行结果，请确保外网可以正常访问该URL。
回调的相关说明可参考开发者中心的<a href="https://qian.tencent.com/developers/partner/callback_data_types" target="_blank">回调通知</a>模块。

注:
`如果不传递回调地址， 则默认是配置应用号时候使用的回调地址`
   */
  CallbackUrl?: string
  /**
   * 合同流程的签署顺序类型：
<ul><li> **false**：(默认)有序签署, 本合同多个参与人需要依次签署 </li>
<li> **true**：无序签署, 本合同多个参与人没有先后签署限制</li></ul>
**注**: `有序签署时以传入FlowApprovers数组的顺序作为签署顺序`
   */
  Unordered?: boolean
  /**
   * 合同流程的类别分类（可自定义名称，如销售合同/入职合同等），最大长度为255个字符，仅限中文、字母、数字和下划线组成。
   */
  FlowType?: string
  /**
   * 您可以自定义腾讯电子签小程序合同列表页展示的合同内容模板，模板中支持以下变量：
<ul><li>{合同名称}   </li>
<li>{发起方企业} </li>
<li>{发起方姓名} </li>
<li>{签署方N企业}</li>
<li>{签署方N姓名}</li></ul>
其中，N表示签署方的编号，从1开始，不能超过签署人的数量。

例如，如果是腾讯公司张三发给李四名称为“租房合同”的合同，您可以将此字段设置为：`合同名称:{合同名称};发起方: {发起方企业}({发起方姓名});签署方:{签署方1姓名}`，则小程序中列表页展示此合同为以下样子

合同名称：租房合同 
发起方：腾讯公司(张三) 
签署方：李四


   */
  CustomShowMap?: string
  /**
   * 调用方自定义的个性化字段(可自定义此名称)，并以base64方式编码，支持的最大数据大小为 1000长度。

在合同状态变更的回调信息等场景中，该字段的信息将原封不动地透传给贵方。回调的相关说明可参考开发者中心的<a href="https://qian.tencent.com/developers/partner/callback_types_contracts_sign" target="_blank">回调通知</a>模块。
   */
  CustomerData?: string
  /**
   * 发起方企业的签署人进行签署操作前，是否需要企业内部走审批流程，取值如下：
<ul><li> **false**：（默认）不需要审批，直接签署。</li>
<li> **true**：需要走审批流程。当到对应参与人签署时，会阻塞其签署操作，等待企业内部审批完成。</li></ul>
企业可以通过ChannelCreateFlowSignReview审批接口通知腾讯电子签平台企业内部审批结果
<ul><li> 如果企业通知腾讯电子签平台审核通过，签署方可继续签署动作。</li>
<li> 如果企业通知腾讯电子签平台审核未通过，平台将继续阻塞签署方的签署动作，直到企业通知平台审核通过。</li></ul>
注：`此功能可用于与企业内部的审批流程进行关联，支持手动、静默签署合同`
   */
  NeedSignReview?: boolean
  /**
   * 签署人校验方式
VerifyCheck: 人脸识别（默认）
MobileCheck：手机号验证，用户手机号和参与方手机号（ApproverMobile）相同即可查看合同内容（当手写签名方式为OCR_ESIGN时，该校验方式无效，因为这种签名方式依赖实名认证）
参数说明：可选人脸识别或手机号验证两种方式，若选择后者，未实名个人签署方在签署合同时，无需经过实名认证和意愿确认两次人脸识别，该能力仅适用于个人签署方。
   */
  ApproverVerifyType?: string
  /**
   * 签署方签署控件（印章/签名等）的生成方式：
<ul><li> **0**：在合同流程发起时，由发起人指定签署方的签署控件的位置和数量。</li>
<li> **1**：签署方在签署时自行添加签署控件，可以拖动位置和控制数量。</li></ul>
**注**: `发起后添加控件功能不支持添加签批控件`
   */
  SignBeanTag?: number
  /**
   * 合同流程的抄送人列表，最多可支持50个抄送人，抄送人可查看合同内容及签署进度，但无需参与合同签署。
   */
  CcInfos?: Array<CcInfo>
  /**
   * 可以设置以下时间节点来给抄送人发送短信通知来查看合同内容：
<ul><li> **0**：合同发起时通知（默认值）</li>
<li> **1**：签署完成后通知</li></ul>
   */
  CcNotifyType?: number
  /**
   * 个人自动签名的使用场景包括以下, 个人自动签署(即ApproverType设置成个人自动签署时)业务此值必传：
<ul><li> **E_PRESCRIPTION_AUTO_SIGN**：电子处方单（医疗自动签）  </li><li> **OTHER** :  通用场景</li></ul>
注: `个人自动签名场景是白名单功能，使用前请与对接的客户经理联系沟通。`
   */
  AutoSignScene?: string
  /**
   * 操作者的信息，不用传
   * @deprecated
   */
  Operator?: UserInfo
}

/**
 * UploadFiles返回参数结构体
 */
export interface UploadFilesResponse {
  /**
   * 上传成功文件数量
注: `如果一个文件上传失败, 则全部文件皆上传失败`
   */
  TotalCount?: number
  /**
   * 文件资源ID数组，每个文件资源ID为32位字符串。
建议开发者保存此资源ID，后续创建合同或创建合同流程需此资源ID。
注:`有效期一个小时, 有效期内此文件id可以反复使用, 超过有效期无法使用`
   */
  FileIds?: Array<string>
  /**
   * 对应上传文件的下载链接，过期时间5分钟
   */
  FileUrls?: Array<string>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 应用相关信息, 整体应用的层级图如下

注:
  1. `不同的业务系统可以采用不同的应用，不同应用下的数据是隔离的,  应用A中的某个企业已经实名, 在应用B中此企业还需要重新认证`
 */
export interface Agent {
  /**
   * 应用的唯一标识(由电子签平台自动生成)。不同的业务系统可以采用不同的AppId，不同AppId下的数据是隔离的。可以由控制台开发者中心-应用集成自主生成。位置如下:

![image](https://qcloudimg.tencent-cloud.cn/raw/fac77e0d3f28aaec56669f67e65c8db8.png)
   */
  AppId: string
  /**
   * 第三方应用平台自定义，对应第三方平台子客企业的唯一标识。一个第三方平台子客企业主体与子客企业ProxyOrganizationOpenId是一一对应的，不可更改，不可重复使用。（例如，可以使用企业名称的hash值，或者社会统一信用代码的hash值，或者随机hash值，需要第三方应用平台保存），最大64位字符串
   */
  ProxyOrganizationOpenId?: string
  /**
   * 第三方平台子客企业中的员工/经办人，通过第三方应用平台进入电子签完成实名、且被赋予相关权限后，可以参与到企业资源的管理或签署流程中。
   */
  ProxyOperator?: UserInfo
  /**
   * **不用填写**，在第三方平台子客企业开通电子签后，会生成唯一的子客应用Id（ProxyAppId）用于代理调用时的鉴权，在子客开通的回调中获取。
   */
  ProxyAppId?: string
  /**
   * 内部参数，暂未开放使用
   * @deprecated
   */
  ProxyOrganizationId?: string
}

/**
 * ChannelCreatePreparedPersonalEsign返回参数结构体
 */
export interface ChannelCreatePreparedPersonalEsignResponse {
  /**
   * 电子印章ID，为32位字符串。
建议开发者保留此印章ID，后续指定签署区印章或者操作印章需此印章ID。
可登录腾讯电子签控制台，在 "印章"->"印章中心"选择查看的印章，在"印章详情" 中查看某个印章的SealId(在页面中展示为印章ID)。
   */
  SealId?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 签署人的流程信息明细
 */
export interface FlowApproverDetail {
  /**
   * 模板配置时候的签署人角色ID(用PDF文件发起也可以指定,如果不指定则自动生成此角色ID), 所有的填写控件和签署控件都归属不同的角色
   */
  ReceiptId?: string
  /**
   * 第三方平台子客企业的唯一标识，定义Agent中的ProxyOrganizationOpenId一样, 可以参考<a href="https://qian.tencent.com/developers/partnerApis/dataTypes/#agent" target="_blank">Agent结构体</a>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProxyOrganizationOpenId?: string
  /**
   * 第三方平台子客企业员工的唯一标识
   */
  ProxyOperatorOpenId?: string
  /**
   * 第三方平台子客企业名称，与企业营业执照中注册的名称一致。
   */
  ProxyOrganizationName?: string
  /**
   * 签署人手机号
   */
  Mobile?: string
  /**
   * 签署顺序，如果是有序签署，签署顺序从小到大
   */
  SignOrder?: number
  /**
   * 签署方经办人的姓名。
经办人的姓名将用于身份认证和电子签名，请确保填写的姓名为签署方的真实姓名，而非昵称等代名。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApproveName?: string
  /**
   * 当前签署人的状态, 状态如下
<ul><li> **PENDING** :待签署</li>
<li> **FILLPENDING** :待填写</li>
<li> **FILLACCEPT** :填写完成</li>
<li> **FILLREJECT** :拒绝填写</li>
<li> **WAITPICKUP** :待领取</li>
<li> **ACCEPT** :已签署</li>
<li> **REJECT** :拒签</li>
<li> **DEADLINE** :过期没人处理</li>
<li> **CANCEL** :流程已撤回</li>
<li> **FORWARD** :已经转他人处理</li>
<li> **STOP** :流程已终止</li>
<li> **RELIEVED** :解除协议（已解除）</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApproveStatus?: string
  /**
   * 签署人拒签等情况的时候填写的原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApproveMessage?: string
  /**
   * 签署人签署时间戳，单位秒
   */
  ApproveTime?: number
  /**
   * 参与者类型 
<ul><li> **ORGANIZATION** :企业签署人</li>
<li> **PERSON** :个人签署人</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApproveType?: string
  /**
   * 自定义签署人的角色名, 如: 收款人、开具人、见证人等
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApproverRoleName?: string
}

/**
 * DescribeResourceUrlsByFlows返回参数结构体
 */
export interface DescribeResourceUrlsByFlowsResponse {
  /**
   * 合同流程PDF下载链接
   */
  FlowResourceUrlInfos?: Array<FlowResourceUrlInfo>
  /**
   * 如果某个序号的合同流程生成PDF下载链接成功, 对应序号的值为空
如果某个序号的合同流程生成PDF下载链接失败, 对应序号的值为错误的原因
   */
  ErrorMessages?: Array<string>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChannelCreateFlowGroupByFiles请求参数结构体
 */
export interface ChannelCreateFlowGroupByFilesRequest {
  /**
   * 合同组中每个合同签署流程的信息，合同组中最少包含2个合同，不能超过50个合同。
   */
  FlowFileInfos: Array<FlowFileInfo>
  /**
   * 合同组的名称（可自定义此名称），长度不能超过200，只能由中文、字母、数字和下划线组成。
   */
  FlowGroupName: string
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent.ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent?: Agent
  /**
   * 合同组中签署人校验和认证的方式：
<ul><li>**VerifyCheck**：人脸识别（默认）</li>
<li>**MobileCheck**：手机号验证</li></ul>
注意：
`1. MobileCheck 方式，未实名的个人/自然人签署方无需进行人脸识别实名认证即可查看合同（但签署合同时仍然需要人脸实名），企业签署方需经过人脸认证。`
`2. 合同组的校验和认证的方式会优先使用，会覆盖合同组中单个合同和合同签署方认证方式的限制配置。`
   */
  ApproverVerifyType?: string
  /**
   * 合同组的签署配置项信息，例如在合同组签署过程中，是否需要对每个子合同进行独立的意愿确认。
   */
  FlowGroupOptions?: FlowGroupOptions
  /**
   * 操作者的信息，此参数不用传
   * @deprecated
   */
  Operator?: UserInfo
}

/**
 * ChannelCreateOrganizationModifyQrCode请求参数结构体
 */
export interface ChannelCreateOrganizationModifyQrCodeRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。

渠道应用标识: Agent.AppId
第三方平台子客企业标识: Agent.ProxyOrganizationOpenId
第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent: Agent
}

/**
 * ChannelCreateFlowByFiles返回参数结构体
 */
export interface ChannelCreateFlowByFilesResponse {
  /**
   * 合同流程ID，为32位字符串。
建议开发者妥善保存此流程ID，以便于顺利进行后续操作。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowId?: string
  /**
   * 签署方信息，如角色ID、角色名称等
注意：此字段可能返回 null，表示取不到有效值。
   */
  Approvers?: Array<ApproverItem>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFlowDetailInfo返回参数结构体
 */
export interface DescribeFlowDetailInfoResponse {
  /**
   * 合同归属的第三方平台应用号ID
   */
  ApplicationId?: string
  /**
   * 合同归属的第三方平台子客企业OpenId
   */
  ProxyOrganizationOpenId?: string
  /**
   * 合同流程的详细信息。
如果查询的是合同组信息，则返回的是组内所有子合同流程的详细信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowInfo?: Array<FlowDetailInfo>
  /**
   * 合同组ID，只有在查询合同组信息时才会返回。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowGroupId?: string
  /**
   * 合同组名称，只有在查询合同组信息时才会返回。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowGroupName?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 参与方填写控件信息
 */
export interface RecipientComponentInfo {
  /**
   * 参与方的角色ID
   */
  RecipientId?: string
  /**
   * 参与方填写状态

<ul><li> **0** : 还没有填写</li>
<li> **1** : 已经填写</li></ul>
   */
  RecipientFillStatus?: string
  /**
   * 此角色是否是发起方角色

<ul><li> **true** : 是发起方角色</li>
<li> **false** : 不是发起方角色</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsPromoter?: boolean
  /**
   * 此角色的填写控件列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Components?: Array<FilledComponent>
}

/**
 * ChannelDescribeRoles请求参数结构体
 */
export interface ChannelDescribeRolesRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent: Agent
  /**
   * 指定每页返回的数据条数，和Offset参数配合使用，单页最大200。

注: `因为历史原因, 此字段为字符串类型`
   */
  Limit: string
  /**
   * 查询的关键字段:
Key:"**RoleType**",Values:["**1**"]查询系统角色，
Key:"**RoleType**",Values:["**2**"]查询自定义角色
Key:"**RoleStatus**",Values:["**1**"]查询启用角色
Key:"**RoleStatus**",Values:["**2**"]查询禁用角色
Key:"**IsReturnPermissionGroup**"，Values:["**0**"]表示接口不返回角色对应的权限树字段
Key:"**IsReturnPermissionGroup**"，Values:["**1**"]表示接口返回角色对应的权限树字段

注: `同名字的Key的过滤条件会冲突, 只能填写一个`

   */
  Filters?: Array<Filter>
  /**
   * 查询结果分页返回，指定从第几页返回数据，和Limit参数配合使用，最大2000条。

注：
1.`offset从0开始，即第一页为0。`
2.`默认从第一页返回。`
   */
  Offset?: number
  /**
   * 操作人信息
   * @deprecated
   */
  Operator?: UserInfo
}

/**
 * DescribeBatchOrganizationRegistrationUrls请求参数结构体
 */
export interface DescribeBatchOrganizationRegistrationUrlsRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent: Agent
  /**
   * 通过接口CreateBatchOrganizationRegistrationTasks创建企业批量认证链接任得到的任务Id
   */
  TaskId: string
}

/**
 * PrepareFlows返回参数结构体
 */
export interface PrepareFlowsResponse {
  /**
   * 待发起文件确认页
   */
  ConfirmUrl?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChannelCancelFlow请求参数结构体
 */
export interface ChannelCancelFlowRequest {
  /**
   * 要撤销的合同流程ID
   */
  FlowId: string
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent?: Agent
  /**
   * 撤回原因，长度不能超过200，只能由中文、字母、数字和下划线组成。
   */
  CancelMessage?: string
  /**
   * 撤销理由自定义格式,  会展示在合同预览的界面中,  可以选择下面的组合方式：

**0** : 默认格式,  合同封面页面会展示为: 发起方-企业名称-撤销的经办人名字以**CancelMessage**的理由撤销当前合同
**1** :  合同封面页面会展示为:  发起方以**CancelMessage**的理由撤销当前合同
**2** : 保留企业名称,  合同封面页面会展示为:  发起方-企业名称以**CancelMessage**的理由撤销当前合同
**3** : 保留企业名称+经办人名字,  合同封面页面会展示为: 发起方-企业名称-撤销的经办人名字以**CancelMessage**的理由撤销当前合同

注: `CancelMessage为撤销当前合同的理由`

![image](https://dyn.ess.tencent.cn/guide/capi/channel_ChannelCancelFlow.png)
   */
  CancelMessageFormat?: number
  /**
   * 暂未开放
   * @deprecated
   */
  Operator?: UserInfo
}

/**
 * 此结构体 (TemplateInfo) 用于描述模板的信息。

> **模板组成** 
>
>  一个模板通常会包含以下结构信息
>- 模板基本信息
>- 签署参与方 Recipients，在模板发起合同时用于指定参与方
>- 填写控件 Components
>- 签署控件 SignComponents
 */
export interface TemplateInfo {
  /**
   * 模板ID，模板的唯一标识
   */
  TemplateId?: string
  /**
   * 模板名
   */
  TemplateName?: string
  /**
   * 模板描述信息
   */
  Description?: string
  /**
   * 模板的填充控件列表
   */
  Components?: Array<Component>
  /**
   * 模板中的签署参与方列表
   */
  Recipients?: Array<Recipient>
  /**
   * 模板中的签署控件列表
   */
  SignComponents?: Array<Component>
  /**
   * 模板类型：1-静默签；3-普通模板
   */
  TemplateType?: number
  /**
   * 是否是发起人 ,已弃用
   * @deprecated
   */
  IsPromoter?: boolean
  /**
   * 模板的创建者信息，电子签系统用户ID
   */
  Creator?: string
  /**
   * 模板创建的时间戳，格式为Unix标准时间戳（秒）
   */
  CreatedOn?: number
  /**
   * 模板的H5预览链接,有效期5分钟。
可以通过浏览器打开此链接预览模板，或者嵌入到iframe中预览模板。
（此功能开放需要联系客户经理）
注意：此字段可能返回 null，表示取不到有效值。
   */
  PreviewUrl?: string
  /**
   * 第三方应用集成-模板PDF文件链接，有效期5分钟。
请求参数WithPdfUrl=true时返回
（此功能开放需要联系客户经理）。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PdfUrl?: string
  /**
   * 本模板关联的第三方应用平台企业模板ID
   */
  ChannelTemplateId?: string
  /**
   * 本模板关联的三方应用平台平台企业模板名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChannelTemplateName?: string
  /**
   * 0-需要子客企业手动领取平台企业的模板(默认); 
1-平台自动设置子客模板
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChannelAutoSave?: number
  /**
   * 模板版本，全数字字符。
默认为空，初始版本为yyyyMMdd001。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TemplateVersion?: string
  /**
   * 模板可用状态：
1启用（默认）
2停用
注意：此字段可能返回 null，表示取不到有效值。
   */
  Available?: number
}

/**
 * ChannelCreateOrganizationBatchSignUrl请求参数结构体
 */
export interface ChannelCreateOrganizationBatchSignUrlRequest {
  /**
   * 关于渠道应用的相关信息，包括子客企业及应用编、号等详细内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。
   */
  Agent: Agent
  /**
   * 请指定需执行批量签署的流程ID，数量范围为1-100。 您可登录腾讯电子签控制台，浏览 "合同"->"合同中心" 以查阅某一合同的FlowId（在页面中显示为合同ID）。 用户将利用链接对这些合同实施批量操作。
   */
  FlowIds?: Array<string>
  /**
   * 第三方应用平台的用户openid。 您可登录腾讯电子签控制台，在 "更多能力"->"组织管理" 中查阅某位员工的OpenId。 OpenId必须是传入合同（FlowId）中的签署人。 - 1. 若OpenId为空，Name和Mobile 必须提供。 - 2. 若OpenId 与 Name，Mobile均存在，将优先采用OpenId对应的员工。
   */
  OpenId?: string
  /**
   * 签署方经办人的姓名。
经办人的姓名将用于身份认证和电子签名，请确保填写的姓名为签署方的真实姓名，而非昵称等代名。

注：`请确保和合同中填入的一致`
   */
  Name?: string
  /**
   * 员工手机号，必须与姓名一起使用。 如果OpenId为空，则此字段不能为空。同时，姓名和手机号码必须与传入合同（FlowId）中的签署人信息一致。
   */
  Mobile?: string
}

/**
 * GetDownloadFlowUrl返回参数结构体
 */
export interface GetDownloadFlowUrlResponse {
  /**
   * 跳转控制台合同下载页面链接 , 5分钟之内有效，且只能访问一次

   */
  DownLoadUrl?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 角色信息
 */
export interface ChannelRole {
  /**
   * 角色ID,为32位字符串
注意：此字段可能返回 null，表示取不到有效值。
   */
  RoleId?: string
  /**
   * 角色的名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  RoleName?: string
  /**
   * 此角色状态
1: 已经启用
2: 已经禁用
   */
  RoleStatus?: number
  /**
   * 此角色对应的权限列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  PermissionGroups?: Array<PermissionGroup>
}

/**
 * 流程中签署方和填写方(如果有填写控件存证时)的信息
 */
export interface Recipient {
  /**
   * 合同参与方的角色ID
   */
  RecipientId?: string
  /**
   * 参与者类型, 可以选择的类型如下:
<ul><li> **ENTERPRISE** :此角色为企业参与方</li>
<li> **INDIVIDUAL** :此角色为个人参与方</li>
<li> **PROMOTER** :此角色是发起方</li></ul>
   */
  RecipientType?: string
  /**
   * 合同参与方的角色描述，长度不能超过100，只能由中文、字母、数字和下划线组成。
   */
  Description?: string
  /**
   * 合同参与方的角色名字，长度不能超过20，只能由中文、字母、数字和下划线组成。
   */
  RoleName?: string
  /**
   * 是否需要校验，
true-是，
false-否
   */
  RequireValidation?: boolean
  /**
   * 是否必须填写，
true-是，
false-否
   */
  RequireSign?: boolean
  /**
   * 内部字段，签署类型
   */
  SignType?: number
  /**
   * 签署顺序：数字越小优先级越高
   */
  RoutingOrder?: number
  /**
   * 是否是发起方，
true-是 
false-否
   */
  IsPromoter?: boolean
  /**
   * 签署人查看合同校验方式, 支持的类型如下:
<ul><li> 1 :实名认证查看</li>
<li> 2 :手机号校验查看</li></ul>
   */
  ApproverVerifyTypes?: Array<number | bigint>
  /**
   * 签署人进行合同签署时的认证方式，支持的类型如下:
<ul><li> 1 :人脸认证</li>
<li> 2 :签署密码</li>
<li> 3 :运营商三要素认证</li>
<li> 4 :UKey认证</li></ul>
   */
  ApproverSignTypes?: Array<number | bigint>
}

/**
 * DescribeTemplates返回参数结构体
 */
export interface DescribeTemplatesResponse {
  /**
   * 模板详情列表数据
   */
  Templates?: Array<TemplateInfo>
  /**
   * 查询到的模板总数
   */
  TotalCount?: number
  /**
   * 每页返回的数据条数
   */
  Limit?: number
  /**
   * 查询结果分页返回，此处指定第几页。页码从0开始，即首页为0。
   */
  Offset?: number
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 自动签开启、签署相关配置
 */
export interface AutoSignConfig {
  /**
   * 自动签开通个人用户信息, 包括名字,身份证等
   */
  UserInfo: UserThreeFactor
  /**
   * 是否回调证书信息:
<ul><li>**false**: 不需要(默认)</li>
<li>**true**:需要</li></ul>
   */
  CertInfoCallback?: boolean
  /**
   * 是否支持用户自定义签名印章:
<ul><li>**false**: 不能自己定义(默认)</li>
<li>**true**: 可以自己定义</li></ul>
   */
  UserDefineSeal?: boolean
  /**
   * 回调中是否需要自动签将要使用的印章（签名）图片的 base64:
<ul><li>**false**: 不需要(默认)</li>
<li>**true**: 需要</li></ul>
   */
  SealImgCallback?: boolean
  /**
   * 回调链接，如果渠道已经配置了，可以不传
   */
  CallbackUrl?: string
  /**
   * 开通时候的身份验证方式, 取值为：
<ul><li>**WEIXINAPP** : 微信人脸识别</li>
<li>**INSIGHT** : 慧眼人脸认别</li>
<li>**TELECOM** : 运营商三要素验证</li></ul>
注：
<ul><li>如果是小程序开通链接，支持传 WEIXINAPP / TELECOM。为空默认 WEIXINAPP</li>
<li>如果是 H5 开通链接，支持传 INSIGHT / TELECOM。为空默认 INSIGHT </li></ul>
   */
  VerifyChannels?: Array<string>
  /**
   * 设置用户开通自动签时是否绑定个人自动签账号许可。

<ul><li>**0**: (默认) 使用个人自动签账号许可进行开通，个人自动签账号许可有效期1年，注: `不可解绑释放更换他人`</li>
<li>**1**: 不绑定自动签账号许可开通，后续使用合同份额进行合同发起</li></ul>
   */
  LicenseType?: number
}

/**
 * 第三方应用集成员工角色信息
 */
export interface StaffRole {
  /**
   * 角色id
注意：此字段可能返回 null，表示取不到有效值。
   */
  RoleId: string
  /**
   * 角色名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  RoleName: string
}

/**
 * CreateBatchOrganizationRegistrationTasks返回参数结构体
 */
export interface CreateBatchOrganizationRegistrationTasksResponse {
  /**
   * 生成注册链接的任务Id，
根据这个id， 调用DescribeBatchOrganizationRegistrationUrls 获取生成的链接，进入认证流程
若存在其中任意一条链接错误，则返回具体的错误描述, 不会返回TaskId
   */
  TaskId?: string
  /**
   * 批量生成企业认证链接的详细错误信息，
顺序与输入参数保持一致。
若企业认证均成功生成，则不返回错误信息；
若存在任何错误，则返回具体的错误描述。
   */
  ErrorMessages?: Array<string>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChannelVerifyPdf请求参数结构体
 */
export interface ChannelVerifyPdfRequest {
  /**
   * 合同流程ID，为32位字符串。
   */
  FlowId: string
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent?: Agent
  /**
   * 暂未开放
   * @deprecated
   */
  Operator?: UserInfo
}

/**
 * CreateChannelFlowEvidenceReport请求参数结构体
 */
export interface CreateChannelFlowEvidenceReportRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent: Agent
  /**
   * 合同流程ID，为32位字符串。
建议开发者妥善保存此流程ID，以便于顺利进行后续操作。
   */
  FlowId: string
  /**
   * 暂未开放
   * @deprecated
   */
  Operator?: UserInfo
}

/**
 * ChannelDescribeBillUsageDetail请求参数结构体
 */
export interface ChannelDescribeBillUsageDetailRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent: Agent
  /**
   * 查询开始时间字符串，格式为yyyymmdd,时间跨度不能大于31天
   */
  StartTime: string
  /**
   * 查询结束时间字符串，格式为yyyymmdd,时间跨度不能大于31天
   */
  EndTime: string
  /**
   * 查询的套餐类型 （选填 ）不传则查询所有套餐；
目前支持:
<ul>
<li>**CloudEnterprise**: 企业版合同</li>
<li>**SingleSignature**: 单方签章</li>
<li>**CloudProve**: 签署报告</li>
<li>**CloudOnlineSign**: 腾讯会议在线签约</li>
<li>**ChannelWeCard**: 微工卡</li>
<li>**SignFlow**: 合同套餐</li>
<li>**SignFace**: 签署意愿（人脸识别）</li>
<li>**SignPassword**: 签署意愿（密码）</li>
<li>**SignSMS**: 签署意愿（短信）</li>
<li>**PersonalEssAuth**: 签署人实名（腾讯电子签认证）</li>
<li>**PersonalThirdAuth**: 签署人实名（信任第三方认证）</li>
<li>**OrgEssAuth**: 签署企业实名</li>
<li>**FlowNotify**: 短信通知</li>
<li>**AuthService**: 企业工商信息查询</li>
</ul>
   */
  QuotaType?: string
  /**
   * 指定分页返回第几页的数据，如果不传默认返回第一页，页码从 0 开始，即首页为 0
   */
  Offset?: number
  /**
   * 指定分页每页返回的数据条数，如果不传默认为 50，单页最大支持 50。
   */
  Limit?: number
}

/**
 * ChannelCancelUserAutoSignEnableUrl请求参数结构体
 */
export interface ChannelCancelUserAutoSignEnableUrlRequest {
  /**
   * 渠道应用相关信息
   */
  Agent: Agent
  /**
   * 操作人信息
   */
  Operator: UserInfo
  /**
   * 自动签使用的场景值, 可以选择的场景值如下:
<ul><li> **E_PRESCRIPTION_AUTO_SIGN** :  电子处方场景</li><li> **OTHER** :  通用场景</li></ul>
   */
  SceneKey: string
  /**
   * 指定撤销链接的用户信息，包含姓名、证件类型、证件号码。
   */
  UserInfo: UserThreeFactor
}

/**
 * 权限树节点权限
 */
export interface Permission {
  /**
   * 权限名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 权限key
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key?: string
  /**
   * 权限类型 1前端，2后端
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: number
  /**
   * 是否隐藏
注意：此字段可能返回 null，表示取不到有效值。
   */
  Hide?: number
  /**
   * 数据权限标签 1:表示根节点，2:表示叶子结点
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataLabel?: number
  /**
   * 数据权限独有，1:关联其他模块鉴权，2:表示关联自己模块鉴权
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataType?: number
  /**
   * 数据权限独有，表示数据范围，1：全公司，2:部门及下级部门，3:自己
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataRange?: number
  /**
   * 关联权限, 表示这个功能权限要受哪个数据权限管控
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataTo?: string
  /**
   * 父级权限key
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentKey?: string
  /**
   * 是否选中
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsChecked?: boolean
  /**
   * 子权限集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  Children?: Array<Permission>
}

/**
 * DescribeExtendedServiceAuthDetail请求参数结构体
 */
export interface DescribeExtendedServiceAuthDetailRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent: Agent
  /**
   * 要查询的扩展服务类型。
如下所示：
<ul><li> AUTO_SIGN：企业静默签署</li>
<li>BATCH_SIGN：批量签署</li>
</ul>

   */
  ExtendServiceType: string
  /**
   * 指定每页返回的数据条数，和Offset参数配合使用。 注：`1.默认值为20，单页做大值为200。`
   */
  Limit?: number
  /**
   * 查询结果分页返回，指定从第几页返回数据，和Limit参数配合使用。 注：`1.offset从0开始，即第一页为0。` `2.默认从第一页返回。`
   */
  Offset?: number
}

/**
 * 企业批量注册链接信息
 */
export interface OrganizationAuthUrl {
  /**
   * 跳转链接, 链接的有效期根据企业,员工状态和终端等有区别, 可以参考下表
<table> <thead> <tr> <th>子客企业状态</th> <th>子客企业员工状态</th> <th>Endpoint</th> <th>链接有效期限</th> </tr> </thead>  <tbody> <tr> <td>企业未激活</td> <td>员工未认证</td> <td>PC</td> <td>5分钟</td>  </tr>  <tr> <td>企业未激活</td> <td>员工未认证</td> <td>CHANNEL/SHORT_URL/APP</td> <td>一年</td>  </tr>  <tr> <td>企业已激活</td> <td>员工未认证</td> <td>PC</td> <td>5分钟</td>  </tr> <tr> <td>企业已激活</td> <td>员工未认证</td> <td>CHANNEL/SHORT_URL/APP</td> <td>一年</td>  </tr>  <tr> <td>企业已激活</td> <td>员工已认证</td> <td>PC</td> <td>5分钟</td>  </tr>  <tr> <td>企业已激活</td> <td>员工已认证</td> <td>CHANNEL/SHORT_URL/APP</td> <td>一年</td>  </tr> </tbody> </table>
注： 
`1.链接仅单次有效，每次登录需要需要重新创建新的链接`
`2.创建的链接应避免被转义，如：&被转义为\u0026；如使用Postman请求后，请选择响应类型为 JSON，否则链接将被转义`

   */
  AuthUrl?: string
  /**
   * 企业批量注册的错误信息，例如：企业三要素不通过
   */
  ErrorMessage?: string
}

/**
 * 企业员工信息
 */
export interface Staff {
  /**
   * 员工在电子签平台的用户ID
   */
  UserId: string
  /**
   * 显示的员工名
   */
  DisplayName: string
  /**
   * 员工手机号
   */
  Mobile: string
  /**
   * 员工邮箱
注意：此字段可能返回 null，表示取不到有效值。
   */
  Email: string
  /**
   * 员工在第三方应用平台的用户ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  OpenId: string
  /**
   * 员工角色
注意：此字段可能返回 null，表示取不到有效值。
   */
  Roles: Array<StaffRole>
  /**
   * 员工部门
注意：此字段可能返回 null，表示取不到有效值。
   */
  Department: Department
  /**
   * 员工是否实名
   */
  Verified: boolean
  /**
   * 员工创建时间戳，单位秒
   */
  CreatedOn: number
  /**
   * 员工实名时间戳，单位秒
   */
  VerifiedOn: number
  /**
   * 员工是否离职：0-未离职，1-离职
   */
  QuiteJob: number
}

/**
 * 签署控件的类型和范围限制条件，用于控制文件发起后签署人拖拽签署区时可使用的控件类型和具体的印章或签名方式。
 */
export interface ComponentLimit {
  /**
   * 控件类型，支持以下类型
<ul><li>SIGN_SEAL : 印章控件</li>
<li>SIGN_PAGING_SEAL : 骑缝章控件</li>
<li>SIGN_LEGAL_PERSON_SEAL : 企业法定代表人控件</li>
<li>SIGN_SIGNATURE : 用户签名控件</li></ul>
   */
  ComponentType: string
  /**
   * 签署控件类型的值(可选)，用与限制签署时印章或者签名的选择范围

1.当ComponentType 是 SIGN_SEAL 或者 SIGN_PAGING_SEAL 时可传入企业印章Id（支持多个）

2.当ComponentType 是 SIGN_SIGNATURE 时可传入以下类型（支持多个）

<ul><li>HANDWRITE : 手写签名</li>
<li>OCR_ESIGN : OCR印章（智慧手写签名）</li>
<li>ESIGN : 个人印章</li>
<li>SYSTEM_ESIGN : 系统印章</li></ul>

3.当ComponentType 是 SIGN_LEGAL_PERSON_SEAL 时无需传递此参数。
   */
  ComponentValue?: Array<string>
}

/**
 * ChannelVerifyPdf返回参数结构体
 */
export interface ChannelVerifyPdfResponse {
  /**
   * 验签结果代码，代码的含义如下：

<ul><li>**1**：文件未被篡改，全部签名在腾讯电子签完成。</li>
<li>**2**：文件未被篡改，部分签名在腾讯电子签完成。</li>
<li>**3**：文件被篡改。</li>
<li>**4**：异常：文件内没有签名域。(如果合同还没有签署也会返回此代码)</li>
<li>**5**：异常：文件签名格式错误。</li></ul>
   */
  VerifyResult?: number
  /**
   * 验签结果详情，所有签署区(包括签名区, 印章区, 日期签署区,骑缝章等)的签署验签结果
   */
  PdfVerifyResults?: Array<PdfVerifyResult>
  /**
   * 验签序列号, 为11为数组组成的字符串
   */
  VerifySerialNo?: string
  /**
   * 合同文件MD5哈希值
   */
  PdfResourceMd5?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateConsoleLoginUrl请求参数结构体
 */
export interface CreateConsoleLoginUrlRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容
此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent.ProxyOperator.OpenId</li>
</ul>注:
`1. 企业激活时， 此时的Agent.ProxyOrganizationOpenId将会是企业激活后企业的唯一标识，建议开发者保存企业ProxyOrganizationOpenId，后续各项接口调用皆需要此参数。 `
`2. 员工认证时， 此时的Agent.ProxyOperator.OpenId将会是员工认证加入企业后的唯一标识，建议开发者保存此员工的OpenId，后续各项接口调用皆需要此参数。 `
`3. 同渠道应用(Agent.AppId)下，企业唯一标识ProxyOrganizationOpenId需要保持唯一，员工唯一标识OpenId也要保持唯一 (而不是企业下唯一)。 `
   */
  Agent: Agent
  /**
   * 第三方平台子客企业名称，请确认该名称与企业营业执照中注册的名称一致。

注:
 `1. 如果名称中包含英文括号()，请使用中文括号（）代替。`
 `2、该名称需要与Agent.ProxyOrganizationOpenId相匹配,  企业激活后Agent.ProxyOrganizationOpenId会跟此企业名称一一绑定; 如果您的企业已经在认证授权中或者激活完成，这里修改子客企业名字将不会生效。 `
   */
  ProxyOrganizationName: string
  /**
   * 子客企业统一社会信用代码，最大长度200个字符
注意：`如果您的企业已经在认证授权中或者激活完成，这里修改子客企业名字将不会生效`。
   */
  UniformSocialCreditCode?: string
  /**
   * 子客企业员工的姓名，最大长度50个字符,  员工的姓名将用于身份认证和电子签名，请确保填写的姓名为签署方的真实姓名，而非昵称等代名。

注：`该姓名需要和Agent.ProxyOperator.OpenId相匹配,  当员工完成认证后该姓名会和Agent.ProxyOperator.OpenId一一绑定, 若员工已认证加入企业，这里修改经办人名字传入将不会生效`
   */
  ProxyOperatorName?: string
  /**
   * Web控制台登录后进入的功能模块,  支持的模块包括：
<ul>
<li> **空值** :(默认)企业中心模块</li>
<li> **DOCUMENT** :合同管理模块</li>
<li> **TEMPLATE** :企业模板管理模块</li>
<li> **SEAL** :印章管理模块</li>
<li> **OPERATOR** :组织管理模块</li></ul>
注意：
1、如果EndPoint选择"CHANNEL"或"APP"，该参数仅支持传递"SEAL"，进入印章管理模块
2、该参数**仅在企业和员工激活已经完成，登录控制台场景才生效**。
   */
  Module?: string
  /**
   * 该参数和Module参数配合使用，用于指定模块下的资源Id，指定后链接登录将展示该资源的详情。

根据Module参数的不同所代表的含义不同(ModuleId需要和Module对应，ModuleId可以通过API或者控制台获取到)。当前支持：
<table> <thead> <tr> <th>Module传值</th> <th>ModuleId传值</th> <th>进入的目标页面</th> </tr> </thead> <tbody> <tr> <td>SEAL</td> <td>印章ID</td> <td>查看指定印章的详情页面</td> </tr> <tr> <td>TEMPLATE</td> <td>合同模板ID</td> <td>指定模板的详情页面</td> </tr> <tr> <td>DOCUMENT</td> <td>合同ID</td> <td>指定合同的详情页面</td> </tr> </tbody> </table>
注意：该参数**仅在企业和员工激活完成，登录控制台场景才生效**。

   */
  ModuleId?: string
  /**
   * 是否展示左侧菜单栏 
<ul><li> **ENABLE** : (默认)进入web控制台展示左侧菜单栏</li>
<li> **DISABLE** : 进入web控制台不展示左侧菜单栏</li></ul>
注：该参数**仅在企业和员工激活完成，登录控制台场景才生效**。
   */
  MenuStatus?: string
  /**
   * 生成链接的类型：
<ul><li>**PC**：(默认)web控制台链接, 需要在PC浏览器中打开</li>
<li>**CHANNEL**：H5跳转到电子签小程序链接, 一般用于发送短信中带的链接, 打开后进入腾讯电子签小程序</li>
<li>**SHORT_URL**：H5跳转到电子签小程序链接的短链形式, 一般用于发送短信中带的链接, 打开后进入腾讯电子签小程序</li>
<li>**APP**：第三方APP或小程序跳转电子签小程序链接, 一般用于贵方小程序或者APP跳转过来,  打开后进入腾讯电子签小程序</li></ul>
   */
  Endpoint?: string
  /**
   * 触发自动跳转事件，仅对EndPoint为App类型有效，可选值包括：
<ul><li> **VERIFIED** :企业认证完成/员工认证完成后跳回原App/小程序</li></ul>
   */
  AutoJumpBackEvent?: string
  /**
   * 可选的此企业允许的授权方式, 可以设置的方式有:
<ul><li>1：上传授权书</li>
<li>2：转法定代表人授权</li>
<li>4：企业实名认证（信任第三方认证源）（此项有排他性, 选择后不能增添其他的方式）</li></ul>
注:<ul>
<li>未选择信任第三方认证源时，如果是法人进行企业激活，仅支持法人扫脸直接授权，该配置不对此法人生效`</li>
<li>选择信任第三方认证源时，请先通过<a href="https://qian.tencent.com/developers/partnerApis/accounts/SyncProxyOrganization" target="_blank">同步企业信息</a>接口同步信息。</li>
<li>该参数仅在企业未激活时生效</li>
</ul>
   */
  AuthorizationTypes?: Array<number | bigint>
  /**
   * 暂未开放
   * @deprecated
   */
  Operator?: UserInfo
}

/**
 * 机构信息
 */
export interface OrganizationInfo {
  /**
   * 用户在渠道的机构编号
   */
  OrganizationOpenId: string
  /**
   * 机构在平台的编号
   */
  OrganizationId?: string
  /**
   * 用户渠道
   */
  Channel?: string
  /**
   * 用户真实的IP
   * @deprecated
   */
  ClientIp?: string
  /**
   * 机构的代理IP
   * @deprecated
   */
  ProxyIp?: string
}

/**
 * 签署链接内容
 */
export interface SignUrlInfo {
  /**
   * 签署链接，过期时间为90天
注意：此字段可能返回 null，表示取不到有效值。
   */
  SignUrl?: string
  /**
   * 合同过期时间戳，单位秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  Deadline?: number
  /**
   * 当流程为顺序签署此参数有效时，数字越小优先级越高，暂不支持并行签署 可选
注意：此字段可能返回 null，表示取不到有效值。
   */
  SignOrder?: number
  /**
   * 签署人编号
注意：此字段可能返回 null，表示取不到有效值。
   */
  SignId?: string
  /**
   * 自定义用户编号
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  CustomUserId?: string
  /**
   * 用户姓名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 用户手机号码
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mobile?: string
  /**
   * 签署参与者机构名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  OrganizationName?: string
  /**
   * 参与者类型, 类型如下:
**ORGANIZATION**:企业经办人
**PERSON**: 自然人
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApproverType?: string
  /**
   * 经办人身份证号
注意：此字段可能返回 null，表示取不到有效值。
   */
  IdCardNumber?: string
  /**
   * 签署链接对应流程Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowId?: string
  /**
   * 企业经办人 用户在渠道的编号
注意：此字段可能返回 null，表示取不到有效值。
   */
  OpenId?: string
  /**
   * 合同组签署链接对应的合同组id
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowGroupId?: string
  /**
   * 二维码，在生成动态签署人跳转封面页链接时返回
注意：此字段可能返回 null，表示取不到有效值。
   */
  SignQrcodeUrl?: string
}

/**
 * 通用签署人信息
 */
export interface CommonFlowApprover {
  /**
   * 指定签署人非第三方平台子客企业下员工还是SaaS平台企业，在ApproverType为ORGANIZATION时指定。
<ul>
<li>false: 默认值，第三方平台子客企业下员工</li>
<li>true: SaaS平台企业下的员工</li>
</ul>

   */
  NotChannelOrganization: boolean
  /**
   * 在指定签署方时，可选择企业B端或个人C端等不同的参与者类型，可选类型如下:

 **0** :企业/企业员工（企业签署方或模板发起时的企业静默签）
 **1** :个人/自然人
**3** :企业/企业员工自动签（他方企业自动签署或文件发起时的本方企业自动签）

注：类型为3（企业/企业员工自动签）时，此接口会默认完成该签署方的签署。静默签署仅进行盖章操作，不能自动签名。
使用自动签时，请确保企业已经开通自动签功能，开通方式：控制台 -> 企业设置 -> 扩展服务 -> 企业自动签。
使用文件发起自动签时使用前请联系对接的客户经理沟通。

   */
  ApproverType?: number
  /**
   * 电子签平台给企业生成的企业id
   */
  OrganizationId?: string
  /**
   * 企业OpenId，第三方应用集成非静默签子客企业签署人发起合同必传
   */
  OrganizationOpenId?: string
  /**
   * 企业名称，第三方应用集成非静默签子客企业签署人必传，saas企业签署人必传
   */
  OrganizationName?: string
  /**
   * 电子签平台给企业员工或者自热人生成的用户id
   */
  UserId?: string
  /**
   * 第三方平台子客企业员工的唯一标识
   */
  OpenId?: string
  /**
   * 签署方经办人的姓名。
经办人的姓名将用于身份认证和电子签名，请确保填写的姓名为签署方的真实姓名，而非昵称等代名。
   */
  ApproverName?: string
  /**
   * 签署人手机号，saas企业签署人，个人签署人必传
   */
  ApproverMobile?: string
  /**
   * 签署方经办人的证件类型，支持以下类型
<ul><li>ID_CARD : 居民身份证  (默认值)</li>
<li>HONGKONG_AND_MACAO : 港澳居民来往内地通行证</li>
<li>HONGKONG_MACAO_AND_TAIWAN : 港澳台居民居住证(格式同居民身份证)</li>
<li>OTHER_CARD_TYPE : 其他证件</li></ul>

注: `其他证件类型为白名单功能，使用前请联系对接的客户经理沟通。`
   */
  ApproverIdCardType?: string
  /**
   * 签署方经办人的证件号码，应符合以下规则
<ul><li>居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。</li>
<li>港澳居民来往内地通行证号码应为9位字符串，第1位为“C”，第2位为英文字母（但“I”、“O”除外），后7位为阿拉伯数字。</li>
<li>港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。</li></ul>
   */
  ApproverIdCardNumber?: string
  /**
   * 签署人Id，使用模板发起是，对应模板配置中的签署人RecipientId
注意：模板发起时该字段必填
   */
  RecipientId?: string
  /**
   * 签署前置条件：阅读时长限制，不传默认10s,最大300s，最小3s
   */
  PreReadTime?: number
  /**
   * 签署前置条件：阅读全文限制
   */
  IsFullText?: boolean
  /**
   * 通知签署方经办人的方式, 有以下途径:
<ul><li> **SMS** :(默认)短信</li>
<li> **NONE** : 不通知</li></ul>

注: `签署方为第三方子客企业时会被置为NONE,   不会发短信通知`
   */
  NotifyType?: string
  /**
   * 签署人配置
   */
  ApproverOption?: CommonApproverOption
  /**
   * 使用PDF文件直接发起合同时，签署人指定的签署控件；<br/>使用模板发起合同时，指定本企业印章签署控件的印章ID: <br/>通过ComponentId或ComponenetName指定签署控件，ComponentValue为印章ID。
   */
  SignComponents?: Array<Component>
  /**
   * 指定个人签署方查看合同的校验方式,可以传值如下:
<ul><li>  **1**   : （默认）人脸识别,人脸识别后才能合同内容</li>
<li>  **2**  : 手机号验证, 用户手机号和参与方手机号(ApproverMobile)相同即可查看合同内容（当手写签名方式为OCR_ESIGN时，该校验方式无效，因为这种签名方式依赖实名认证）
</li></ul>
注: 
<ul><li>如果合同流程设置ApproverVerifyType查看合同的校验方式,    则忽略此签署人的查看合同的校验方式</li>
<li>此字段可传多个校验方式</li></ul>
   */
  ApproverVerifyTypes?: Array<number | bigint>
  /**
   * 签署人签署合同时的认证方式
<ul><li> **1** :人脸认证</li>
<li> **2** :签署密码</li>
<li> **3** :运营商三要素</li></ul>

默认为1(人脸认证 ),2(签署密码)

注: 
1. 用<font color='red'>模板创建合同场景</font>, 签署人的认证方式需要在配置模板的时候指定, <font color='red'>在创建合同重新指定无效</font>
2. 运营商三要素认证方式对手机号运营商及前缀有限制,可以参考[运营商支持列表类](https://qian.tencent.com/developers/partner/mobile_support)得到具体的支持说明
   */
  ApproverSignTypes?: Array<number | bigint>
}

/**
 * 指定补充签署人信息
- RecipientId 必须指定
 */
export interface FillApproverInfo {
  /**
   * 签署方经办人在模板中配置的参与方ID，与控件绑定，是控件的归属方，ID为32位字符串。

   */
  RecipientId: string
  /**
   * 指定企业经办签署人OpenId
   */
  OpenId?: string
  /**
   * 签署人姓名
   */
  ApproverName?: string
  /**
   * 签署人手机号码
   */
  ApproverMobile?: string
  /**
   * 企业名称
   */
  OrganizationName?: string
  /**
   * 企业OpenId
   */
  OrganizationOpenId?: string
  /**
   * 签署企业非渠道子客，默认为false，即表示同一渠道下的企业；如果为true，则目前表示接收方企业为SaaS企业, 为渠道子客时，OrganizationOpenId 必传
   */
  NotChannelOrganization?: boolean
}

/**
 * ChannelCreateUserAutoSignSealUrl请求参数结构体
 */
export interface ChannelCreateUserAutoSignSealUrlRequest {
  /**
   * 渠道应用相关信息。
   */
  Agent: Agent
  /**
   * 自动签使用的场景值, 可以选择的场景值如下:
<ul><li> **E_PRESCRIPTION_AUTO_SIGN** :  电子处方场景</li><li> **OTHER** :  通用场景</li></ul>
   */
  SceneKey: string
  /**
   * 自动签开通个人用户信息，包括名字，身份证等。
   */
  UserInfo: UserThreeFactor
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator?: UserInfo
  /**
   * 链接的过期时间，格式为Unix时间戳，不能早于当前时间，且最大为当前时间往后30天。`如果不传，默认过期时间为当前时间往后7天。`
   */
  ExpiredTime?: number
}

/**
 * 合同验签每个签署区的信息
 */
export interface PdfVerifyResult {
  /**
   * 验签结果详情，每个签名域对应的验签结果。状态值如下
<ul><li> **1** :验签成功，在电子签签署</li>
<li> **2** :验签成功，在其他平台签署</li>
<li> **3** :验签失败</li>
<li> **4** :pdf文件没有签名域</li>
<li> **5** :文件签名格式错误</li></ul>
   */
  VerifyResult?: number
  /**
   * 签署平台
如果文件是在腾讯电子签平台签署，则为**腾讯电子签**，
如果文件不在腾讯电子签平台签署，则为**其他平台**。
   */
  SignPlatform?: string
  /**
   * 申请证书的主体的名字

如果是在腾讯电子签平台签署, 则对应的主体的名字个数如下
**企业**:  ESS@企业名称@平台生成的数字编码
**个人**: ESS@个人姓名@证件号@平台生成的数字编码

如果在其他平台签署的, 主体的名字参考其他平台的说明
   */
  SignerName?: string
  /**
   * 签署时间的Unix时间戳，单位毫秒
   */
  SignTime?: number
  /**
   * 证书签名算法,  如SHA1withRSA等算法
   */
  SignAlgorithm?: string
  /**
   * CA供应商下发给用户的证书编号

注意：`腾讯电子签接入多家CA供应商以提供容灾能力，不同CA下发的证书编号区别较大，但基本都是由数字和字母组成，长度在200以下`。
   */
  CertSn?: string
  /**
   * 证书起始时间的Unix时间戳，单位毫秒
   */
  CertNotBefore?: number
  /**
   * 证书过期时间的时间戳，单位毫秒
   */
  CertNotAfter?: number
  /**
   * 签名类型, 保留字段, 现在全部为0


   */
  SignType?: number
  /**
   * 签名域横坐标，单位px
   */
  ComponentPosX?: number
  /**
   * 签名域纵坐标，单位px
   */
  ComponentPosY?: number
  /**
   * 签名域宽度，单位px
   */
  ComponentWidth?: number
  /**
   * 签名域高度，单位px
   */
  ComponentHeight?: number
  /**
   * 签名域所在页码，1～N
   */
  ComponentPage?: number
}

/**
 * 用户的三要素：姓名，证件号，证件类型
 */
export interface UserThreeFactor {
  /**
   * 签署方经办人的姓名。
经办人的姓名将用于身份认证和电子签名，请确保填写的姓名为签署方的真实姓名，而非昵称等代名。
   */
  Name: string
  /**
   * 证件类型，支持以下类型
<ul><li>ID_CARD : 居民身份证 (默认值)</li>
<li>HONGKONG_AND_MACAO : 港澳居民来往内地通行证</li>
<li>HONGKONG_MACAO_AND_TAIWAN : 港澳台居民居住证(格式同居民身份证)</li></ul>
   */
  IdCardType: string
  /**
   * 证件号码，应符合以下规则
<ul><li>居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。</li>
<li>港澳居民来往内地通行证号码应为9位字符串，第1位为“C”，第2位为英文字母（但“I”、“O”除外），后7位为阿拉伯数字。</li>
<li>港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。</li></ul>
   */
  IdCardNumber: string
}

/**
 * ChannelCreateUserAutoSignEnableUrl请求参数结构体
 */
export interface ChannelCreateUserAutoSignEnableUrlRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。
   */
  Agent: Agent
  /**
   * 自动签使用的场景值, 可以选择的场景值如下:
<ul><li> **E_PRESCRIPTION_AUTO_SIGN** :  电子处方场景</li><li> **OTHER** :  通用场景</li></ul>
   */
  SceneKey: string
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator?: UserInfo
  /**
   * 自动签开通配置信息, 包括开通的人员的信息等
   */
  AutoSignConfig?: AutoSignConfig
  /**
   * 生成的链接类型：
<ul><li> 不传(即为空值) 则会生成小程序端开通链接(默认)</li>
<li> **H5SIGN** : 生成H5端开通链接</li></ul>
   */
  UrlType?: string
  /**
   * 是否通知开通方，通知类型:
<ul><li>默认不设置为不通知开通方</li>
<li>**SMS** :  短信通知 ,如果需要短信通知则NotifyAddress填写对方的手机号</li></ul>
   */
  NotifyType?: string
  /**
   * 如果通知类型NotifyType选择为SMS，则此处为手机号, 其他通知类型不需要设置此项
   */
  NotifyAddress?: string
  /**
   * 链接的过期时间，格式为Unix时间戳，不能早于当前时间，且最大为当前时间往后30天。`如果不传，默认过期时间为当前时间往后7天。`
   */
  ExpiredTime?: number
}

/**
 * ChannelCancelMultiFlowSignQRCode请求参数结构体
 */
export interface ChannelCancelMultiFlowSignQRCodeRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent: Agent
  /**
   * 需要取消签署的二维码ID，为32位字符串。由[创建一码多扫流程签署二维码](https://qian.tencent.com/developers/partnerApis/templates/ChannelCreateMultiFlowSignQRCode)返回
   */
  QrCodeId: string
  /**
   * 暂未开放
   * @deprecated
   */
  Operator?: UserInfo
}

/**
 * 合同组的配置项信息包括：在合同组签署过程中，是否需要对每个子合同进行独立的意愿确认。
 */
export interface FlowGroupOptions {
  /**
   * 发起方企业经办人（即签署人为发起方企业员工）是否需要对子合同进行独立的意愿确认
<ul><li>**false**（默认）：发起方企业经办人签署时对所有子合同进行统一的意愿确认。</li>
<li>**true**：发起方企业经办人签署时需要对子合同进行独立的意愿确认。</li></ul>
   */
  SelfOrganizationApproverSignEach?: boolean
  /**
   * 非发起方企业经办人（即：签署人为个人或者不为发起方企业的员工）是否需要对子合同进行独立的意愿确认
<ul><li>**false**（默认）：非发起方企业经办人签署时对所有子合同进行统一的意愿确认。</li>
<li>**true**：非发起方企业经办人签署时需要对子合同进行独立的意愿确认。</li></ul>
   */
  OtherApproverSignEach?: boolean
}

/**
 * ChannelDescribeOrganizationSeals请求参数结构体
 */
export interface ChannelDescribeOrganizationSealsRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent: Agent
  /**
   * 返回最大数量，最大为100
   */
  Limit: number
  /**
   * 分页查询偏移量，默认为0，最大为20000
   */
  Offset?: number
  /**
   * 查询信息类型
支持的值如下：
<ul><li>0-默认，不返回授权用户信息</li>
<li>1-返回授权用户信息</li>
</ul>
   */
  InfoType?: number
  /**
   * 印章id（没有输入返回所有）

注:  `没有输入返回所有记录，最大返回100条。`
   */
  SealId?: string
  /**
   * 电子印章类型 , 可选类型如下: 
<ul><li>**OFFICIAL**: (默认)公章</li>
<li>**CONTRACT**: 合同专用章;</li>
<li>**FINANCE**: 财务专用章;</li>
<li>**PERSONNEL**: 人事专用章</li>
<li>**INVOICE**: 发票专用章</li>
</ul>

注:  `为空时查询所有类型的印章。`
   */
  SealTypes?: Array<string>
}

/**
 * DescribeUsage请求参数结构体
 */
export interface DescribeUsageRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
</ul>
   */
  Agent: Agent
  /**
   * 查询日期范围的开始时间, 查询会包含此日期的数据 , 格式为yyyy-mm-dd (例如：2021-03-21)

注: `查询日期范围区间长度大于90天`。
   */
  StartDate: string
  /**
   * 查询日期范围的结束时间, 查询会包含此日期的数据 , 格式为yyyy-mm-dd (例如：2021-04-21)

注: `查询日期范围区间长度大于90天`。
   */
  EndDate: string
  /**
   * 是否汇总数据，默认不汇总。
<ul><li> **true** :  汇总数据,  即每个企业一条数据, 对日志范围内的数据相加</li>
<li> **false** :  不会总数据,  返回企业每日明细,   按日期返回每个企业的数据(如果企业对应天数没有操作则无此企业此日期的数据)</li></ul>

   */
  NeedAggregate?: boolean
  /**
   * 指定每页返回的数据条数，和Offset参数配合使用。

注: `默认值为1000，单页做大值为1000`
   */
  Limit?: number
  /**
   * 查询结果分页返回，指定从第几页返回数据，和Limit参数配合使用。

注：`offset从0开始，即第一页为0。`
   */
  Offset?: number
  /**
   * 暂未开放
   * @deprecated
   */
  Operator?: UserInfo
}

/**
 * DescribeExtendedServiceAuthInfo请求参数结构体
 */
export interface DescribeExtendedServiceAuthInfoRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业标识: Agent. ProxyOperator.OpenId</li>
<li>第三方平台子客企业中的员工标识: Agent.AppId</li>
</ul>
   */
  Agent: Agent
}

/**
 * DescribeChannelSealPolicyWorkflowUrl请求参数结构体
 */
export interface DescribeChannelSealPolicyWorkflowUrlRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。

渠道应用标识: Agent.AppId
第三方平台子客企业标识: Agent.ProxyOrganizationOpenId
第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent: Agent
  /**
   * 用印审批单的ID，可通过用印申请回调获取。
   */
  WorkflowInstanceId: string
  /**
   * 生成链接的类型：
生成链接的类型
<ul><li>**LongLink**：(默认)长链接，H5跳转到电子签小程序链接，链接有效期为1年</li>
<li>**ShortLink**：H5跳转到电子签小程序链接，一般用于发送短信中带的链接，打开后进入腾讯电子签小程序，链接有效期为7天</li>
<li>**App**：第三方APP或小程序跳转电子签小程序链接，一般用于贵方小程序或者APP跳转过来，打开后进入腾讯电子签小程序，链接有效期为1年</li></ul>
   */
  Endpoint?: string
}

/**
 * CreatePartnerAutoSignAuthUrl返回参数结构体
 */
export interface CreatePartnerAutoSignAuthUrlResponse {
  /**
   * 授权链接，以短链形式返回，短链的有效期参考回参中的 ExpiredTime。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Url?: string
  /**
   * 从客户小程序或者客户APP跳转至腾讯电子签小程序进行批量签署的跳转路径

   */
  MiniAppPath?: string
  /**
   * 链接过期时间以 Unix 时间戳格式表示，从生成链接时间起，往后7天有效期。过期后短链将失效，无法打开。
   */
  ExpireTime?: number
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 此结构体 (FlowInfo) 用于描述签署流程信息。
 */
export interface FlowInfo {
  /**
   * 合同流程的名称（可自定义此名称），长度不能超过200，只能由中文、字母、数字和下划线组成。
   */
  FlowName: string
  /**
   * 合同流程的签署截止时间，格式为Unix标准时间戳（秒），如果未设置签署截止时间，则默认为合同流程创建后的365天时截止。
如果在签署截止时间前未完成签署，则合同状态会变为已过期，导致合同作废。
示例值：1604912664
   */
  Deadline: number
  /**
   * 用户配置的合同模板ID，会基于此模板创建合同文档，为32位字符串。
如果使用模板发起接口，此参数为必填。

可以通过<a href="https://qian.tencent.com/developers/partnerApis/accounts/CreateConsoleLoginUrl" target="_blank">生成子客登录链接</a>登录企业控制台, 在**企业模板**中得到合同模板ID。
   */
  TemplateId?: string
  /**
   * 多个签署人信息，最大支持50个签署方
   */
  FlowApprovers?: Array<FlowApproverInfo>
  /**
   * 表单K-V对列表
   */
  FormFields?: Array<FormField>
  /**
   * 合同状态变动结的通知回调URL，该URL仅支持HTTP或HTTPS协议，建议采用HTTPS协议以保证数据传输的安全性，最大长度1000个字符。

腾讯电子签服务器将通过POST方式，application/json格式通知执行结果，请确保外网可以正常访问该URL。
回调的相关说明可参考开发者中心的<a href="https://qian.tencent.com/developers/partner/callback_data_types" target="_blank">回调通知</a>模块
   */
  CallbackUrl?: string
  /**
   * 合同流程的类别分类（可自定义名称，如销售合同/入职合同等），最大长度为200个字符，仅限中文、字母、数字和下划线组成。
   */
  FlowType?: string
  /**
   * 合同流程描述信息(可自定义此描述)，最大长度1000个字符。
   */
  FlowDescription?: string
  /**
   * 调用方自定义的个性化字段(可自定义此名称)，并以base64方式编码，支持的最大数据大小为1000长度。

在合同状态变更的回调信息等场景中，该字段的信息将原封不动地透传给贵方。回调的相关说明可参考开发者中心的回调通知模块。
   */
  CustomerData?: string
  /**
   * 您可以自定义腾讯电子签小程序合同列表页展示的合同内容模板，模板中支持以下变量：
<ul><li>{合同名称}   </li>
<li>{发起方企业} </li>
<li>{发起方姓名} </li>
<li>{签署方N企业}</li>
<li>{签署方N姓名}</li></ul>
其中，N表示签署方的编号，从1开始，不能超过签署人的数量。

例如，如果是腾讯公司张三发给李四名称为“租房合同”的合同，您可以将此字段设置为：`合同名称:{合同名称};发起方: {发起方企业}({发起方姓名});签署方:{签署方1姓名}`，则小程序中列表页展示此合同为以下样子

合同名称：租房合同 
发起方：腾讯公司(张三) 
签署方：李四


   */
  CustomShowMap?: string
  /**
   * 合同流程的抄送人列表，最多可支持50个抄送人，抄送人可查看合同内容及签署进度，但无需参与合同签署。
   */
  CcInfos?: Array<CcInfo>
  /**
   * 发起方企业的签署人进行签署操作前，是否需要企业内部走审批流程，取值如下：
<ul><li> **false**：（默认）不需要审批，直接签署。</li>
<li> **true**：需要走审批流程。当到对应参与人签署时，会阻塞其签署操作，等待企业内部审批完成。</li></ul>
企业可以通过CreateFlowSignReview审批接口通知腾讯电子签平台企业内部审批结果
<ul><li> 如果企业通知腾讯电子签平台审核通过，签署方可继续签署动作。</li>
<li> 如果企业通知腾讯电子签平台审核未通过，平台将继续阻塞签署方的签署动作，直到企业通知平台审核通过。</li></ul>
注：`此功能可用于与企业内部的审批流程进行关联，支持手动、静默签署合同`
   */
  NeedSignReview?: boolean
  /**
   * 若在创建签署流程时指定了关注人CcInfos，此参数可设定向关注人发送短信通知的类型：
<ul><li> **0** :合同发起时通知通知对方来查看合同（默认）</li>
<li> **1** : 签署完成后通知对方来查看合同</li></ul>
   */
  CcNotifyType?: number
  /**
   * 个人自动签名的使用场景包括以下, 个人自动签署(即ApproverType设置成个人自动签署时)业务此值必传：
<ul><li> **E_PRESCRIPTION_AUTO_SIGN**：电子处方单（医疗自动签）  </li><li> **OTHER** :  通用场景</li></ul>
注: `个人自动签名场景是白名单功能，使用前请与对接的客户经理联系沟通。`
   */
  AutoSignScene?: string
}

/**
 * 接口调用的员工信息
 */
export interface UserInfo {
  /**
   * 第三方应用平台自定义，对应第三方平台子客企业员工的唯一标识。


注意:
1. OpenId在子客企业对应一个真实员工，**本应用唯一, 不可重复使用**，最大64位字符串
2. 可使用用户在贵方企业系统中的Userid或者hash值作为子客企业的员工OpenId
3. **员工加入企业后**, 可以通过<a href="https://qian.tencent.com/developers/partnerApis/accounts/CreateConsoleLoginUrl" target="_blank">生成子客登录链接</a>登录子客控制台后, 在**组织架构**模块查看员工们的OpenId, 样式如下图
![image](https://qcloudimg.tencent-cloud.cn/raw/bb67fb66c926759df3a0af5838fdafd5.png)
   */
  OpenId?: string
  /**
   * 内部参数，暂未开放使用
   * @deprecated
   */
  Channel?: string
  /**
   * 内部参数，暂未开放使用
   * @deprecated
   */
  CustomUserId?: string
  /**
   * 内部参数，暂未开放使用
   * @deprecated
   */
  ClientIp?: string
  /**
   * 内部参数，暂未开放使用
   * @deprecated
   */
  ProxyIp?: string
}

/**
 * 复杂文档合成任务的任务信息
 */
export interface TaskInfo {
  /**
   * 合成任务Id，可以通过 ChannelGetTaskResultApi 接口获取任务信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId: string
  /**
   * 任务状态：READY - 任务已完成；NOTREADY - 任务未完成；
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskStatus: string
}

/**
 * ChannelCreateBoundFlows返回参数结构体
 */
export interface ChannelCreateBoundFlowsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChannelCreateUserAutoSignSealUrl返回参数结构体
 */
export interface ChannelCreateUserAutoSignSealUrlResponse {
  /**
   * 腾讯电子签小程序的AppId，用于其他小程序/APP等应用跳转至腾讯电子签小程序使用。
   */
  AppId?: string
  /**
   * 腾讯电子签小程序的原始Id，用于其他小程序/APP等应用跳转至腾讯电子签小程序使用。
   */
  AppOriginalId?: string
  /**
   * 个人用户自动签的开通链接, 短链形式。过期时间受 `ExpiredTime` 参数控制。
   */
  Url?: string
  /**
   * 腾讯电子签小程序的跳转路径，用于其他小程序/APP等应用跳转至腾讯电子签小程序使用。
   */
  Path?: string
  /**
   * base64格式的跳转二维码图片，可通过微信扫描后跳转到腾讯电子签小程序的开通界面。
   */
  QrCode?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 指定签署方经办人控件类型是个人印章签署控件（SIGN_SIGNATURE） 时，可选的签名方式。
 */
export interface ApproverComponentLimitType {
  /**
   * 签署方经办人在模板中配置的参与方ID，与控件绑定，是控件的归属方，ID为32位字符串。
   */
  RecipientId: string
  /**
   * 签署方经办人控件类型是个人印章签署控件（SIGN_SIGNATURE） 时，可选的签名方式。

签名方式：
<ul>
<li>HANDWRITE-手写签名</li>
<li>ESIGN-个人印章类型</li>
<li>OCR_ESIGN-AI智能识别手写签名</li>
<li>SYSTEM_ESIGN-系统签名</li>
</ul>
   */
  Values?: Array<string>
}

/**
 * 授权企业列表（目前仅用于“企业自动签 -> 合作企业授权”）
 */
export interface HasAuthOrganization {
  /**
   * 授权企业openid，
注意：此字段可能返回 null，表示取不到有效值。
   */
  OrganizationOpenId?: string
  /**
   * 授权企业名称	
注意：此字段可能返回 null，表示取不到有效值。
   */
  OrganizationName?: string
  /**
   * 被授权企业openid，
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuthorizedOrganizationOpenId?: string
  /**
   * 被授权企业名称	
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuthorizedOrganizationName?: string
  /**
   * 授权时间，格式为时间戳，单位s	
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuthorizeTime?: number
}

/**
 * 资源链接信息
 */
export interface ResourceUrlInfo {
  /**
   * 资源链接地址，过期时间5分钟
注意：此字段可能返回 null，表示取不到有效值。
   */
  Url?: string
  /**
   * 资源名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 资源类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
}

/**
 * ChannelCreateBatchQuickSignUrl请求参数结构体
 */
export interface ChannelCreateBatchQuickSignUrlRequest {
  /**
   * 批量签署的流程签署人，其中姓名(ApproverName)、参与人类型(ApproverType)必传，手机号(ApproverMobile)和证件信息(ApproverIdCardType、ApproverIdCardNumber)可任选一种或全部传入。
注:
`1. ApproverType目前只支持个人类型的签署人。`
`2. 签署人只能有手写签名和时间类型的签署控件，其他类型的填写控件和签署控件暂时都未支持。`
`3. 当需要通过短信验证码签署时，手机号ApproverMobile需要与发起合同时填写的用户手机号一致。`
   */
  FlowApproverInfo: FlowApproverInfo
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。
   */
  Agent?: Agent
  /**
   * 批量签署的合同流程ID数组。
注: `在调用此接口时，请确保合同流程均为本企业发起，且合同数量不超过100个。`
   */
  FlowIds?: Array<string>
  /**
   * 合同组编号
注：`该参数和合同流程ID数组必须二选一`
   */
  FlowGroupId?: string
  /**
   * 签署完之后的H5页面的跳转链接，此链接及支持http://和https://，最大长度1000个字符。(建议https协议)
   */
  JumpUrl?: string
  /**
   * 指定批量签署合同的签名类型，可传递以下值：
<ul><li>**0**：手写签名(默认)</li>
<li>**1**：OCR楷体</li></ul>
注：
<ul><li>默认情况下，签名类型为手写签名</li>
<li>您可以传递多种值，表示可用多种签名类型。</li></ul>
   */
  SignatureTypes?: Array<number | bigint>
  /**
   * 指定批量签署合同的认证校验方式，可传递以下值：
<ul><li>**1**：人脸认证(默认)，需进行人脸识别成功后才能签署合同</li>
<li>**2**：密码认证(默认)，需输入与用户在腾讯电子签设置的密码一致才能校验成功进行合同签署</li>
<li>**3**：运营商三要素，需到运营商处比对手机号实名信息(名字、手机号、证件号)校验一致才能成功进行合同签署。</li></ul>
注：
<ul><li>默认情况下，认证校验方式为人脸和密码认证</li>
<li>您可以传递多种值，表示可用多种认证校验方式。</li></ul>
   */
  ApproverSignTypes?: Array<number | bigint>
  /**
   * 生成H5签署链接时，您可以指定签署方签署合同的认证校验方式的选择模式，可传递一下值：
<ul><li>**0**：签署方自行选择，签署方可以从预先指定的认证方式中自由选择；</li>
<li>**1**：自动按顺序首位推荐，签署方无需选择，系统会优先推荐使用第一种认证方式。</li></ul>
注：
`不指定该值时，默认为签署方自行选择。`
   */
  SignTypeSelector?: number
}

/**
 * ChannelCreateBoundFlows请求参数结构体
 */
export interface ChannelCreateBoundFlowsRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证,  合同会领取给对应的Agent.ProxyOperator.OpenId指定的员工来处理
   */
  Agent: Agent
  /**
   * 需要领取的合同流程的ID列表
   */
  FlowIds?: Array<string>
  /**
   * 暂未开放
   * @deprecated
   */
  Operator?: UserInfo
}

/**
 * ChannelDescribeEmployees请求参数结构体
 */
export interface ChannelDescribeEmployeesRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent: Agent
  /**
   * 指定分页每页返回的数据条数，单页最大支持 20。
   */
  Limit: number
  /**
   * 查询的关键字段，支持Key-Values查询。可选键值如下：
<ul>
  <li>Key:**"Status"**，Values: **["IsVerified"]**, 查询已实名的员工</li>
  <li>Key:**"Status"**，Values: **["QuiteJob"]**, 查询离职员工</li>
  <li>Key:**"StaffOpenId"**，Values: **["OpenId1","OpenId2",...]**, 根据第三方系统用户OpenId查询员工</li>
</ul>
注: `同名字的Key的过滤条件会冲突,  只能填写一个`
   */
  Filters?: Array<Filter>
  /**
   * 指定分页返回第几页的数据，如果不传默认返回第一页。
页码从 0 开始，即首页为 0，最大20000。
   */
  Offset?: number
  /**
   * 暂未开放
   * @deprecated
   */
  Operator?: UserInfo
}

/**
 * 授权用户
 */
export interface AuthorizedUser {
  /**
   * 第三方应用平台的用户openid
   */
  OpenId: string
}

/**
 * ChannelDeleteRoleUsers返回参数结构体
 */
export interface ChannelDeleteRoleUsersResponse {
  /**
   * 角色id
   */
  RoleId?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SyncProxyOrganizationOperators请求参数结构体
 */
export interface SyncProxyOrganizationOperatorsRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
</ul>
第三方平台子客企业必须已经经过实名认证
   */
  Agent: Agent
  /**
   * 操作类型，对应的操作
<ul><li> **CREATE** :新增员工</li>
<li> **UPDATE** :修改员工</li>
<li> **RESIGN** :离职员工</li></ul>
   */
  OperatorType: string
  /**
   * 员工信息列表，最多支持200个
   */
  ProxyOrganizationOperators: Array<ProxyOrganizationOperator>
  /**
   * 暂未开放
   * @deprecated
   */
  Operator?: UserInfo
}

/**
 * ChannelCreateFlowApprovers返回参数结构体
 */
export interface ChannelCreateFlowApproversResponse {
  /**
   * 批量补充签署人时，补充失败的报错说明 
注:`目前仅补充动态签署人时会返回补充失败的原因`	
注意：此字段可能返回 null，表示取不到有效值。
   */
  FillError?: Array<FillError>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBillUsageDetail返回参数结构体
 */
export interface DescribeBillUsageDetailResponse {
  /**
   * 返回查询记录总数
   */
  Total?: number
  /**
   * 消耗记录详情
   */
  Details?: Array<BillUsageDetail>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUsage返回参数结构体
 */
export interface DescribeUsageResponse {
  /**
   * 用量明细条数
   */
  Total?: number
  /**
   * 用量明细
注意：此字段可能返回 null，表示取不到有效值。
   */
  Details?: Array<UsageDetail>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSignUrls请求参数结构体
 */
export interface CreateSignUrlsRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经过实名认证
   */
  Agent: Agent
  /**
   * 合同流程ID数组，最多支持100个。
注: `该参数和合同组编号必须二选一`
   */
  FlowIds?: Array<string>
  /**
   * 合同组编号
注：`该参数和合同流程ID数组必须二选一`
   */
  FlowGroupId?: string
  /**
   * 签署链接类型,可以设置的参数如下
<ul><li> **WEIXINAPP** :(默认)跳转电子签小程序的http_url, 短信通知或者H5跳转适合此类型 ，此时返回短链</li>
<li> **CHANNEL** :带有H5引导页的跳转电子签小程序的链接</li>
<li> **APP** :第三方App或小程序跳转电子签小程序的path, App或者小程序跳转适合此类型</li>
<li> **LONGURL2WEIXINAPP** :跳转电子签小程序的链接, H5跳转适合此类型，此时返回长链</li></ul>

详细使用场景可以参数接口说明中的 **主要使用场景可以更加EndPoint分类如下**
   */
  Endpoint?: string
  /**
   * 签署链接生成类型，可以选择的类型如下

<ul><li>**ALL**：(默认)全部签署方签署链接，此时不会给自动签署(静默签署)的签署方创建签署链接</li>
<li>**CHANNEL**：第三方子企业员工签署方</li>
<li>**NOT_CHANNEL**：SaaS平台企业员工签署方</li>
<li>**PERSON**：个人/自然人签署方</li>
<li>**FOLLOWER**：关注方，目前是合同抄送方</li>
<li>**RECIPIENT**：获取RecipientId对应的签署链接，可用于生成动态签署人补充链接</li></ul>
   */
  GenerateType?: string
  /**
   * SaaS平台企业员工签署方的企业名称
如果名称中包含英文括号()，请使用中文括号（）代替。

注: `GenerateType为"NOT_CHANNEL"时必填`
   */
  OrganizationName?: string
  /**
   * 合同流程里边参与方的姓名。
注: `GenerateType为"PERSON"(即个人签署方)时必填`
   */
  Name?: string
  /**
   * 合同流程里边签署方经办人手机号码， 支持国内手机号11位数字(无需加+86前缀或其他字符)。
注:  `GenerateType为"PERSON"或"FOLLOWER"时必填`
   */
  Mobile?: string
  /**
   * 证件类型，支持以下类型
<ul><li>ID_CARD : 居民身份证</li>
<li>HONGKONG_AND_MACAO : 港澳居民来往内地通行证</li>
<li>HONGKONG_MACAO_AND_TAIWAN : 港澳台居民居住证(格式同居民身份证)</li></ul>
   */
  IdCardType?: string
  /**
   * 证件号码，应符合以下规则
<ul><li>居民身份证号码应为18位字符串，由数字和大写字母X组成(如存在X，请大写)。</li>
<li>港澳居民来往内地通行证号码应为9位字符串，第1位为“C”，第2位为英文字母(但“I”、“O”除外)，后7位为阿拉伯数字。</li>
<li>港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。</li></ul>
   */
  IdCardNumber?: string
  /**
   * 第三方平台子客企业的企业的标识, 即OrganizationOpenId
注: `GenerateType为"CHANNEL"时必填`
   */
  OrganizationOpenId?: string
  /**
   * 第三方平台子客企业员工的标识OpenId，GenerateType为"CHANNEL"时可用，指定到具体参与人, 仅展示已经实名的经办人信息
   */
  OpenId?: string
  /**
   * Endpoint为"APP" 类型的签署链接，可以设置此值；支持调用方小程序打开签署链接，在电子签小程序完成签署后自动回跳至调用方小程序
   */
  AutoJumpBack?: boolean
  /**
   * 签署完之后的H5页面的跳转链接，针对Endpoint为CHANNEL时有效，最大长度1000个字符。
   */
  JumpUrl?: string
  /**
   * 暂未开放
   * @deprecated
   */
  Operator?: UserInfo
  /**
   * 生成的签署链接在签署页面隐藏的按钮列表，可设置如下：

<ul><li> **0** :合同签署页面更多操作按钮</li>
<li> **1** :合同签署页面更多操作的拒绝签署按钮</li>
<li> **2** :合同签署页面更多操作的转他人处理按钮</li>
<li> **3** :签署成功页的查看详情按钮</li></ul>

注:  `字段为数组, 可以传值隐藏多个按钮`
   */
  Hides?: Array<number | bigint>
  /**
   * 参与方角色ID，用于生成动态签署人链接完成领取。

注：`使用此参数需要与flow_ids数量一致并且一一对应, 表示在对应同序号的流程中的参与角色ID`，
   */
  RecipientIds?: Array<string>
}

/**
 * 企业认证信息参数， 需要保证这些参数跟营业执照中的信息一致。
 */
export interface RegistrationOrganizationInfo {
  /**
   * 组织机构名称。
请确认该名称与企业营业执照中注册的名称一致。
如果名称中包含英文括号()，请使用中文括号（）代替。
   */
  OrganizationName: string
  /**
   * 机构在贵司业务系统中的唯一标识，用于与腾讯电子签企业账号进行映射，确保在同一应用内不会出现重复。
该标识最大长度为64位字符串，仅支持包含26个英文字母和数字0-9的字符。
   */
  OrganizationOpenId: string
  /**
   * 员工在贵司业务系统中的唯一身份标识，用于与腾讯电子签账号进行映射，确保在同一应用内不会出现重复。
该标识最大长度为64位字符串，仅支持包含26个英文字母和数字0-9的字符。
   */
  OpenId: string
  /**
   * 组织机构企业统一社会信用代码。
请确认该企业统一社会信用代码与企业营业执照中注册的统一社会信用代码一致。
   */
  UniformSocialCreditCode: string
  /**
   * 组织机构法人的姓名。
请确认该企业统一社会信用代码与企业营业执照中注册的法人姓名一致。
   */
  LegalName: string
  /**
   * 组织机构企业注册地址。
请确认该企业注册地址与企业营业执照中注册的地址一致。
   */
  Address: string
  /**
   * 组织机构超管姓名。
在注册流程中，必须是超管本人进行操作。
如果法人作为超管管理组织机构,超管姓名就是法人姓名
   */
  AdminName?: string
  /**
   * 组织机构超管姓名。
在注册流程中，这个手机号必须跟操作人在电子签注册的个人手机号一致。
   */
  AdminMobile?: string
  /**
   * 可选的此企业允许的授权方式, 可以设置的方式有:
1：上传授权书+对公打款
2：法人授权/认证  会根据当前操作人的身份判定,如果当前操作人是法人,则是法人认证, 如果当前操作人不是法人,则走法人授权

注:
`1. 当前仅支持一种认证方式`
`2. 如果当前的企业类型是政府/事业单位, 则只支持上传授权书+对公打款`
   */
  AuthorizationTypes?: Array<number | bigint>
}

/**
 * ChannelCreateMultiFlowSignQRCode请求参数结构体
 */
export interface ChannelCreateMultiFlowSignQRCodeRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent: Agent
  /**
   * 合同模板ID，为32位字符串。
   */
  TemplateId: string
  /**
   * 合同流程的名称（可自定义此名称），长度不能超过200，只能由中文、字母、数字和下划线组成。 该名称还将用于合同签署完成后的下载文件名。
   */
  FlowName: string
  /**
   * 通过此二维码可发起的流程最大限额，如未明确指定，默认为5份。 一旦发起流程数超越该限制，该二维码将自动失效。
   */
  MaxFlowNum?: number
  /**
   * 合同流程的签署有效期限，若未设定签署截止日期，则默认为自合同流程创建起的7天内截止。 若在签署截止日期前未完成签署，合同状态将变更为已过期，从而导致合同无效。 最长设定期限不得超过30天。
   */
  FlowEffectiveDay?: number
  /**
   * 二维码的有效期限，默认为7天，最高设定不得超过90天。 一旦超过二维码的有效期限，该二维码将自动失效。
   */
  QrEffectiveDay?: number
  /**
   * 指定签署人信息。 在指定签署人后，仅允许特定签署人通过扫描二维码进行签署。
   */
  Restrictions?: Array<ApproverRestriction>
  /**
   * 指定签署方经办人控件类型是个人印章签署控件（SIGN_SIGNATURE） 时，可选的签名方式。
   */
  ApproverComponentLimitTypes?: Array<ApproverComponentLimitType>
  /**
   * 已废弃，回调配置统一使用企业应用管理-应用集成-第三方应用中的配置
<br/> 通过一码多扫二维码发起的合同，回调消息可参考文档 https://qian.tencent.com/developers/partner/callback_types_contracts_sign
<br/> 用户通过签署二维码发起合同时，因企业额度不足导致失败 会触发签署二维码相关回调,具体参考文档 https://qian.tencent.com/developers/partner/callback_types_commons#%E7%AD%BE%E7%BD%B2%E4%BA%8C%E7%BB%B4%E7%A0%81%E7%9B%B8%E5%85%B3%E5%9B%9E%E8%B0%83
   * @deprecated
   */
  CallbackUrl?: string
  /**
   * 限制二维码用户条件（已弃用）
   * @deprecated
   */
  ApproverRestrictions?: ApproverRestriction
  /**
   * 暂未开放
   * @deprecated
   */
  Operator?: UserInfo
}

/**
 * 签署二维码的基本信息，用于创建二维码，用户可扫描该二维码进行签署操作。
 */
export interface SignQrCode {
  /**
   * 二维码ID，为32位字符串。	

注: 需要保留此二维码ID, 用于后序通过<a href="https://qian.tencent.com/developers/partnerApis/templates/ChannelCancelMultiFlowSignQRCode" target="_blank">取消一码多扫二维码</a>关闭这个二维码的签署功能。	
   */
  QrCodeId?: string
  /**
   * 二维码URL，可通过转换二维码的工具或代码组件将此URL转化为二维码，以便用户扫描进行流程签署。
   */
  QrCodeUrl?: string
  /**
   * 二维码的有截止时间，格式为Unix标准时间戳（秒），可以通过入参的QrEffectiveDay来设置有效期，默认为7天有效期。 
一旦超过二维码的有效期限，该二维码将自动失效。	
   */
  ExpiredTime?: number
}

/**
 * 创建签署流程签署人入参。

**各种场景传参说明**:

<table>
<thead>
<tr>
<th>场景编号</th>
<th>可作为发起方类型</th>
<th>可作为签署方的类型</th>
<th>签署方传参说明</th>
</tr>
</thead>

<tbody>
<tr>
<td>场景一</td>
<td>第三方子企业A员工</td>
<td>第三方子企业A员工</td>
<td>OpenId、OrganizationName、OrganizationOpenId必传 ,ApproverType设置为ORGANIZATION</td>
</tr>

<tr>
<td>场景二</td>
<td>第三方子企业A员工</td>
<td>第三方子企业B(不指定经办人)</td>
<td>OrganizationName、OrganizationOpenId必传 ,ApproverType设置为ORGANIZATION</td>
</tr>

<tr>
<td>场景三</td>
<td>第三方子企业A员工</td>
<td>第三方子企业B员工</td>
<td>OpenId、OrganizationOpenId、OrganizationName必传, ApproverType设置为ORGANIZATION</td>
</tr>

<tr>
<td>场景四</td>
<td>第三方子企业A员工</td>
<td>个人/自然人</td>
<td>Name、Mobile必传, ApproverType设置为PERSON</td>
</tr>

<tr>
<td>场景五</td>
<td>第三方子企业A员工</td>
<td>SaaS平台企业员工</td>
<td>Name、Mobile、OrganizationName必传，且NotChannelOrganization=True。 ApproverType设置为ORGANIZATION</td>
</tr>
</tbody>
</table>

**注1**: `使用模板发起合同时，RecipientId（模板发起合同时）必传`

RecipientId参数获取：
从<a href="https://qian.tencent.com/developers/companyApis/templatesAndFiles/DescribeFlowTemplates" target="_blank">DescribeFlowTemplates接口</a>接口中，可以得到模板下的签署方Recipient列表，根据模板自定义的Rolename在此结构体中确定其RecipientId。

**注2**:  `如果发起的是动态签署方（即ApproverOption.FillType指定为1），可以不指定具体签署人信息`,  动态签署方可以参考<a href="https://qian.tencent.com/developers/partner/dynamic_signer" target="_blank">此文档</a>
 */
export interface FlowApproverInfo {
  /**
   * 签署方经办人的姓名。
经办人的姓名将用于身份认证和电子签名，请确保填写的姓名为签署方的真实姓名，而非昵称等代名。
   */
  Name?: string
  /**
   * 签署方经办人的证件类型，支持以下类型
<ul><li>ID_CARD : 居民身份证  (默认值)</li>
<li>HONGKONG_AND_MACAO : 港澳居民来往内地通行证</li>
<li>HONGKONG_MACAO_AND_TAIWAN : 港澳台居民居住证(格式同居民身份证)</li>
<li>OTHER_CARD_TYPE : 其他证件</li></ul>

注: `其他证件类型为白名单功能，使用前请联系对接的客户经理沟通。`
   */
  IdCardType?: string
  /**
   * 签署方经办人的证件号码，应符合以下规则
<ul><li>居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。</li>
<li>港澳居民来往内地通行证号码应为9位字符串，第1位为“C”，第2位为英文字母（但“I”、“O”除外），后7位为阿拉伯数字。</li>
<li>港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。</li></ul>
   */
  IdCardNumber?: string
  /**
   * 签署方经办人手机号码， 支持国内手机号11位数字(无需加+86前缀或其他字符)， 不支持海外手机号。
请确认手机号所有方为此合同签署方。
   */
  Mobile?: string
  /**
   * 组织机构名称。
请确认该名称与企业营业执照中注册的名称一致。
如果名称中包含英文括号()，请使用中文括号（）代替。
   */
  OrganizationName?: string
  /**
   * 指定签署人非第三方平台子客企业下员工还是SaaS平台企业，在ApproverType为ORGANIZATION时指定。
<ul>
<li>false: 默认值，第三方平台子客企业下员工</li>
<li>true: SaaS平台企业下的员工</li>
</ul>

   */
  NotChannelOrganization?: boolean
  /**
   * 第三方平台子客企业员工的唯一标识，长度不能超过64，只能由字母和数字组成

当签署方为同一第三方平台下的员工时，该字段若不指定，则发起【待领取】的流程
   */
  OpenId?: string
  /**
   * 同应用下第三方平台子客企业的唯一标识，定义Agent中的ProxyOrganizationOpenId一样，签署方为非发起方企业场景下必传，最大长度64个字符
   */
  OrganizationOpenId?: string
  /**
   * 在指定签署方时，可选择企业B端或个人C端等不同的参与者类型，可选类型如下:
<ul><li> **PERSON** :个人/自然人</li>
<li> **PERSON_AUTO_SIGN** :个人/自然人自动签署，适用于个人自动签场景</li>
<li> **ORGANIZATION** :企业/企业员工（企业签署方或模板发起时的企业静默签）</li>
<li> **ENTERPRISESERVER** :企业/企业员工自动签（他方企业自动签署或文件发起时的本方企业自动签）</li></ul>

注:  
`1. 个人自动签场景(PERSON_AUTO_SIGN)为白名单功能, 使用前请联系对接的客户经理沟通。`
`2. 若要实现他方企业（同一应用下）自动签，需要满足3个条件：`
<ul><li>条件1：ApproverType 设置为ENTERPRISESERVER</li>
<li>条件2：子客之间完成授权</li>
<li>条件3：联系对接的客户经理沟通如何使用</li></ul>
   */
  ApproverType?: string
  /**
   * 签署流程签署人在模板中对应的签署人Id；在非单方签署、以及非B2C签署的场景下必传，用于指定当前签署方在签署流程中的位置；
   */
  RecipientId?: string
  /**
   * 本签署人在此合同流程的签署截止时间，格式为Unix标准时间戳（秒），如果未设置签署截止时间，则默认为合同流程创建后的365天时截止。
如果在签署截止时间前未完成签署，则合同状态会变为已过期，导致合同作废。
   */
  Deadline?: number
  /**
   * 签署完回调url，最大长度1000个字符
   * @deprecated
   */
  CallbackUrl?: string
  /**
   * 使用PDF文件直接发起合同时，签署人指定的签署控件；<br/>使用模板发起合同时，指定本企业印章签署控件的印章ID: <br/>通过ComponentId或ComponenetName指定签署控件，ComponentValue为印章ID。
   */
  SignComponents?: Array<Component>
  /**
   * 签署方控件类型为 SIGN_SIGNATURE时，可以指定签署方签名方式
	HANDWRITE – 手写签名
	OCR_ESIGN -- AI智能识别手写签名
	ESIGN -- 个人印章类型
	SYSTEM_ESIGN -- 系统签名（该类型可以在用户签署时根据用户姓名一键生成一个签名来进行签署）
   */
  ComponentLimitType?: Array<string>
  /**
   * 签署方在签署合同之前，需要强制阅读合同的时长，可指定为3秒至300秒之间的任意值。

若未指定阅读时间，则会按照合同页数大小计算阅读时间，计算规则如下：
<ul>
<li>合同页数少于等于2页，阅读时间为3秒；</li>
<li>合同页数为3到5页，阅读时间为5秒；</li>
<li>合同页数大于等于6页，阅读时间为10秒。</li>
</ul>
   */
  PreReadTime?: number
  /**
   * 签署完前端跳转的url，此字段的用法场景请联系客户经理确认
   */
  JumpUrl?: string
  /**
   * 可以控制签署方在签署合同时能否进行某些操作，例如拒签、转交他人、是否为动态补充签署人等。
详细操作可以参考开发者中心的ApproverOption结构体。
   */
  ApproverOption?: ApproverOption
  /**
   * 当前签署方进行签署操作是否需要企业内部审批，true 则为需要
   */
  ApproverNeedSignReview?: boolean
  /**
   * 指定个人签署方查看合同的校验方式,可以传值如下:
<ul><li>  **1**   : （默认）人脸识别,人脸识别后才能合同内容</li>
<li>  **2**  : 手机号验证, 用户手机号和参与方手机号(ApproverMobile)相同即可查看合同内容（当手写签名方式为OCR_ESIGN时，该校验方式无效，因为这种签名方式依赖实名认证）
</li></ul>
注: 
<ul><li>如果合同流程设置ApproverVerifyType查看合同的校验方式,    则忽略此签署人的查看合同的校验方式</li>
<li>此字段可传多个校验方式</li></ul>
   */
  ApproverVerifyTypes?: Array<number | bigint>
  /**
   * 签署人签署合同时的认证方式
<ul><li> **1** :人脸认证</li>
<li> **2** :签署密码</li>
<li> **3** :运营商三要素</li></ul>

默认为1(人脸认证 ),2(签署密码)

注: 
1. 用<font color='red'>模板创建合同场景</font>, 签署人的认证方式需要在配置模板的时候指定, <font color='red'>在创建合同重新指定无效</font>
2. 运营商三要素认证方式对手机号运营商及前缀有限制,可以参考[运营商支持列表类](https://qian.tencent.com/developers/partner/mobile_support)得到具体的支持说明
   */
  ApproverSignTypes?: Array<number | bigint>
  /**
   * 签署ID
- 发起流程时系统自动补充
- 创建签署链接时，可以通过查询详情接口获得签署人的SignId，然后可传入此值为该签署人创建签署链接，无需再传姓名、手机号、证件号等其他信息
   */
  SignId?: string
  /**
   * 通知签署方经办人的方式, 有以下途径:
<ul><li> **SMS** :(默认)短信</li>
<li> **NONE** : 不通知</li></ul>

注: `签署方为第三方子客企业时会被置为NONE,   不会发短信通知`
   */
  NotifyType?: string
  /**
   * [通过文件创建签署流程](https://qian.tencent.com/developers/partnerApis/startFlows/ChannelCreateFlowByFiles)时,如果设置了外层参数SignBeanTag=1(允许签署过程中添加签署控件),则可通过此参数明确规定合同所使用的签署控件类型（骑缝章、普通章法人章等）和具体的印章（印章ID）或签名方式。

注：`限制印章控件或骑缝章控件情况下,仅本企业签署方可以指定具体印章（通过传递ComponentValue,支持多个），他方企业或个人只支持限制控件类型。`
   */
  AddSignComponentsLimits?: Array<ComponentLimit>
  /**
   * 可以自定义签署人角色名：收款人、开具人、见证人等，长度不能超过20，只能由中文、字母、数字和下划线组成。

注: `如果是用模板发起, 优先使用此处上传的, 如果不传则用模板的配置的`
   */
  ApproverRoleName?: string
  /**
   * 生成H5签署链接时，您可以指定签署方签署合同的认证校验方式的选择模式，可传递一下值：
<ul><li>**0**：签署方自行选择，签署方可以从预先指定的认证方式中自由选择；</li>
<li>**1**：自动按顺序首位推荐，签署方无需选择，系统会优先推荐使用第一种认证方式。</li></ul>
注：
`不指定该值时，默认为签署方自行选择。`
   */
  SignTypeSelector?: number
}

/**
 * ChannelCreateUserAutoSignEnableUrl返回参数结构体
 */
export interface ChannelCreateUserAutoSignEnableUrlResponse {
  /**
   * 个人用户自动签的开通链接, 短链形式。过期时间受 `ExpiredTime` 参数控制。
   */
  Url?: string
  /**
   * 腾讯电子签小程序的 AppID，用于其他小程序/APP等应用跳转至腾讯电子签小程序使用

注: `如果获取的是H5链接, 则不会返回此值`
   */
  AppId?: string
  /**
   * 腾讯电子签小程序的原始 Id,  ，用于其他小程序/APP等应用跳转至腾讯电子签小程序使用

注: `如果获取的是H5链接, 则不会返回此值`
   */
  AppOriginalId?: string
  /**
   * 腾讯电子签小程序的跳转路径，用于其他小程序/APP等应用跳转至腾讯电子签小程序使用

注: `如果获取的是H5链接, 则不会返回此值`
   */
  Path?: string
  /**
   * base64 格式的跳转二维码图片，可通过微信扫描后跳转到腾讯电子签小程序的开通界面。

注: `如果获取的是H5链接, 则不会返回此二维码图片`
   */
  QrCode?: string
  /**
   * 返回的链接类型
<ul><li> 空: 默认小程序端链接</li>
<li> **H5SIGN** : h5端链接</li></ul>
   */
  UrlType?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChannelGetTaskResultApi请求参数结构体
 */
export interface ChannelGetTaskResultApiRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent: Agent
  /**
   * 转换任务Id，通过接口<a href="https://qian.tencent.com/developers/partnerApis/files/ChannelCreateConvertTaskApi" target="_blank">创建文件转换任务接口</a>得到的转换任务id
   */
  TaskId: string
  /**
   * 操作者的信息，不用传
   * @deprecated
   */
  Operator?: UserInfo
  /**
   * 暂未开放
   * @deprecated
   */
  Organization?: OrganizationInfo
}

/**
 * DescribeChannelOrganizations请求参数结构体
 */
export interface DescribeChannelOrganizationsRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。

渠道应用标识: Agent.AppId
第三方平台子客企业标识: Agent.ProxyOrganizationOpenId
第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId

第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent: Agent
  /**
   * 指定分页每页返回的数据条数，单页最大支持 200。
   */
  Limit: number
  /**
   * 该字段是指第三方平台子客企业的唯一标识，用于查询单独某个子客的企业数据。

**注**：`如果需要批量查询本应用下的所有企业的信息，则该字段不需要赋值`
   */
  OrganizationOpenId?: string
  /**
   * 可以按照当前企业的认证状态进行过滤。可值如下：
<ul><li>**"UNVERIFIED"**： 未认证的企业</li>
  <li>**"VERIFYINGLEGALPENDINGAUTHORIZATION"**： 认证中待法人授权的企业</li>
  <li>**"VERIFYINGAUTHORIZATIONFILEPENDING"**： 认证中授权书审核中的企业</li>
  <li>**"VERIFYINGAUTHORIZATIONFILEREJECT"**： 认证中授权书已驳回的企业</li>
  <li>**"VERIFYING"**： 认证进行中的企业</li>
  <li>**"VERIFIED"**： 已认证完成的企业</li></ul>
   */
  AuthorizationStatusList?: Array<string>
  /**
   * 指定分页返回第几页的数据，如果不传默认返回第一页。 页码从 0 开始，即首页为 0，最大20000。
   */
  Offset?: number
}

/**
 * ChannelCreatePreparedPersonalEsign请求参数结构体
 */
export interface ChannelCreatePreparedPersonalEsignRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。
   */
  Agent: Agent
  /**
   * 个人用户姓名
   */
  UserName: string
  /**
   * 证件号码, 应符合以下规则
<ul><li>居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。</li>
<li>港澳居民来往内地通行证号码应为9位字符串，第1位为“C”，第2位为英文字母（但“I”、“O”除外），后7位为阿拉伯数字。</li>
<li>港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。</li></ul>
   */
  IdCardNumber: string
  /**
   * 电子印章名字，1-50个中文字符
注:`同一企业下电子印章名字不能相同`
   */
  SealName: string
  /**
   * 电子印章图片base64编码，大小不超过10M（原始图片不超过5M），只支持PNG或JPG图片格式。


   */
  SealImage: string
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator?: UserInfo
  /**
   * 证件类型，支持以下类型
<ul><li>ID_CARD : 居民身份证 (默认值)</li>
<li>HONGKONG_AND_MACAO : 港澳居民来往内地通行证</li>
<li>HONGKONG_MACAO_AND_TAIWAN : 港澳台居民居住证(格式同居民身份证)</li>
<li>OTHER_CARD_TYPE : 其他</li></ul>

注: `其他证件类型为白名单功能，使用前请联系对接的客户经理沟通。`
   */
  IdCardType?: string
  /**
   * 是否开启印章图片压缩处理，默认不开启，如需开启请设置为 true。当印章超过 2M 时建议开启，开启后图片的 hash 将发生变化。
   */
  SealImageCompress?: boolean
  /**
   * 手机号码；当需要开通自动签时，该参数必传
   */
  Mobile?: string
  /**
   * 是否开通自动签，该功能需联系运营工作人员开通后使用
   */
  EnableAutoSign?: boolean
  /**
   * 设置用户开通自动签时是否绑定个人自动签账号许可。一旦绑定后，将扣减购买的个人自动签账号许可一次（1年有效期），不可解绑释放。不传默认为绑定自动签账号许可。 0-绑定个人自动签账号许可，开通后将扣减购买的个人自动签账号许可一次 1-不绑定，发起合同时将按标准合同套餐进行扣减
   */
  LicenseType?: number
  /**
   * <ul><li> **E_PRESCRIPTION_AUTO_SIGN** :  电子处方场景</li><li> **OTHER** :  通用场景</li></ul>
   */
  SceneKey?: string
}

/**
 * 批量补充签署人时，补充失败的报错说明
 */
export interface FillError {
  /**
   * 为签署方经办人在签署合同中的参与方ID，与控件绑定，是控件的归属方，ID为32位字符串。与入参中补充的签署人角色ID对应，批量补充部分失败返回对应的错误信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecipientId?: string
  /**
   * 补充失败错误说明
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrMessage?: string
}

/**
 * ChannelDescribeBillUsageDetail返回参数结构体
 */
export interface ChannelDescribeBillUsageDetailResponse {
  /**
   * 返回查询记录总数
   */
  Total?: number
  /**
   * 消耗记录详情
   */
  Details?: Array<ChannelBillUsageDetail>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 此结构体(FlowDetailInfo)描述的是合同(流程)的详细信息
 */
export interface FlowDetailInfo {
  /**
   * 合同流程ID，为32位字符串。
   */
  FlowId?: string
  /**
   * 合同流程的名称（可自定义此名称），长度不能超过200，只能由中文、字母、数字和下划线组成。
   */
  FlowName?: string
  /**
   * 合同流程的类别分类（如销售合同/入职合同等）。
   */
  FlowType?: string
  /**
   * 合同流程当前的签署状态, 会存在下列的状态值
<ul><li> **INIT** :合同创建</li>
<li> **PART** :合同签署中(至少有一个签署方已经签署)</li>
<li> **REJECT** :合同拒签</li>
<li> **ALL** :合同签署完成</li>
<li> **DEADLINE** :合同流签(合同过期)</li>
<li> **CANCEL** :合同撤回</li>
<li> **RELIEVED** :解除协议（已解除）</li></ul>
 
   */
  FlowStatus?: string
  /**
   * 当合同流程状态为已拒签（即 FlowStatus=REJECT）或已撤销（即 FlowStatus=CANCEL ）时，此字段 FlowMessage 为拒签或撤销原因。
   */
  FlowMessage?: string
  /**
   * 合同流程的创建时间戳，格式为Unix标准时间戳（秒）。
   */
  CreateOn?: number
  /**
   * 签署流程的签署截止时间, 值为unix时间戳, 精确到秒。
   */
  DeadLine?: number
  /**
   * 调用方自定义的个性化字段(可自定义此字段的值)，并以base64方式编码，支持的最大数据大小为 1000长度。
在合同状态变更的回调信息等场景中，该字段的信息将原封不动地透传给贵方。
   */
  CustomData?: string
  /**
   * 合同流程的签署方数组
   */
  FlowApproverInfos?: Array<FlowApproverDetail>
  /**
   * 合同流程的关注方信息数组
   */
  CcInfos?: Array<FlowApproverDetail>
  /**
   * 是否需要发起前审批
<ul><li>当NeedCreateReview为true，表明当前流程是需要发起前审核的合同，可能无法进行查看，签署操作，需要等审核完成后，才可以继续后续流程</li>
<li>当NeedCreateReview为false，不需要发起前审核的合同</li></ul>
   */
  NeedCreateReview?: boolean
}

/**
 * CreateFlowsByTemplates返回参数结构体
 */
export interface CreateFlowsByTemplatesResponse {
  /**
   * 生成的合同流程ID数组，合同流程ID为32位字符串。
建议开发者妥善保存此流程ID数组，以便于顺利进行后续操作。
   */
  FlowIds?: Array<string>
  /**
   * 第三方应用平台的业务信息, 与创建合同的FlowInfos数组中的CustomerData一一对应
   */
  CustomerData?: Array<string>
  /**
   * 创建消息，对应多个合同ID，
成功为“”,创建失败则对应失败消息
   */
  ErrorMessages?: Array<string>
  /**
   * 合同预览链接URL数组。

注：如果是预览模式(即NeedPreview设置为true)时, 才会有此预览链接URL
   */
  PreviewUrls?: Array<string>
  /**
   * 复杂文档合成任务（如，包含动态表格的预览任务）的任务信息数组；
如果文档需要异步合成，此字段会返回该异步任务的任务信息，后续可以通过ChannelGetTaskResultApi接口查询任务详情；
   */
  TaskInfos?: Array<TaskInfo>
  /**
   * 签署方信息，如角色ID、角色名称等
   */
  FlowApprovers?: Array<FlowApproverItem>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeChannelFlowEvidenceReport请求参数结构体
 */
export interface DescribeChannelFlowEvidenceReportRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent: Agent
  /**
   * 签署报告编号, 由<a href="https://qian.tencent.com/developers/partnerApis/certificate/CreateChannelFlowEvidenceReport" target="_blank">提交申请出证报告任务</a>产生
   */
  ReportId: string
  /**
   * 暂未开放
   * @deprecated
   */
  Operator?: UserInfo
}

/**
 * ChannelCreateRole返回参数结构体
 */
export interface ChannelCreateRoleResponse {
  /**
   * 角色id
   */
  RoleId?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SyncProxyOrganizationOperators返回参数结构体
 */
export interface SyncProxyOrganizationOperatorsResponse {
  /**
   *  同步的状态,  全部同步失败接口是接口会直接报错

<ul><li> **1** :全部成功</li>
<li> **2** :部分成功</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 同步失败员工ID及其失败原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailedList?: Array<SyncFailReason>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 绑定失败的用户角色信息
 */
export interface FailedCreateRoleData {
  /**
   * 用户userId
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserId?: string
  /**
   * 角色RoleId列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  RoleIds?: Array<string>
}

/**
 * ChannelDescribeUserAutoSignStatus请求参数结构体
 */
export interface ChannelDescribeUserAutoSignStatusRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。
   */
  Agent: Agent
  /**
   * 自动签使用的场景值, 可以选择的场景值如下:
<ul><li> **E_PRESCRIPTION_AUTO_SIGN** :  电子处方场景</li><li> **OTHER** :  通用场景</li></ul>
   */
  SceneKey: string
  /**
   * 要查询状态的用户信息, 包括名字,身份证等
   */
  UserInfo: UserThreeFactor
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator?: UserInfo
}

/**
 * 流程对应资源链接信息
 */
export interface FlowResourceUrlInfo {
  /**
   * 合同流程的ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowId?: string
  /**
   * 对应的合同流程的PDF下载链接
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceUrlInfos?: Array<ResourceUrlInfo>
}

/**
 * 此结构体 (UploadFile) 用于描述多文件上传的文件信息。
 */
export interface UploadFile {
  /**
   * Base64编码后的文件内容
   */
  FileBody: string
  /**
   * 文件名
   */
  FileName?: string
}

/**
 * 扩展服务开通和授权的详细信息
 */
export interface ExtentServiceAuthInfo {
  /**
   * 扩展服务类型
<ul>
<li>AUTO_SIGN             企业自动签（自动签署）</li>
<li>  OVERSEA_SIGN          企业与港澳台居民*签署合同</li>
<li>  MOBILE_CHECK_APPROVER 使用手机号验证签署方身份</li>
<li> PAGING_SEAL           骑缝章</li>
<li> DOWNLOAD_FLOW         授权渠道下载合同 </li>
<li>AGE_LIMIT_EXPANSION 拓宽签署方年龄限制</li>
</ul>
   */
  Type?: string
  /**
   * 扩展服务名称
   */
  Name?: string
  /**
   * 扩展服务的开通状态
   **ENABLE**：开通
   **DISABLE**：未开通
   */
  Status?: string
  /**
   * 操作扩展服务的操作人第三方应用平台的用户openid
注意：此字段可能返回 null，表示取不到有效值。
   */
  OperatorOpenId?: string
  /**
   * 扩展服务的操作时间，格式为Unix标准时间戳（秒）。	
注意：此字段可能返回 null，表示取不到有效值。
   */
  OperateOn?: number
}

/**
 * ChannelModifyRole返回参数结构体
 */
export interface ChannelModifyRoleResponse {
  /**
   * 角色id
   */
  RoleId?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 此结构体 (Filter) 用于描述查询过滤条件。
 */
export interface Filter {
  /**
   * 查询过滤条件的Key
   */
  Key: string
  /**
   * 查询过滤条件的Value列表
   */
  Values: Array<string>
}

/**
 * 文档内的填充控件返回结构体，返回控件的基本信息和填写内容值
 */
export interface FilledComponent {
  /**
   * 填写控件ID
   */
  ComponentId?: string
  /**
   * 控件名称
   */
  ComponentName?: string
  /**
   * 此填写控件的填写状态
   **0** : 此填写控件**未填写**
   **1** : 此填写控件**已填写**
   */
  ComponentFillStatus?: string
  /**
   * 控件填写内容
   */
  ComponentValue?: string
  /**
   * 图片填充控件下载链接，如果是图片填充控件时，这里返回图片的下载链接。

注: `链接不是永久链接,  默认有效期5分钟后, 到期后链接失效`
   */
  ImageUrl?: string
}

/**
 * 签署方信息，如角色ID、角色名称等
 */
export interface FlowApproverItem {
  /**
   * 合同编号
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowId?: string
  /**
   * 签署方信息，如角色ID、角色名称等
注意：此字段可能返回 null，表示取不到有效值。
   */
  Approvers?: Array<ApproverItem>
}

/**
 * 渠道企业信息
 */
export interface ChannelOrganizationInfo {
  /**
   * 电子签平台给企业分配的ID（在不同应用下同一个企业会分配通用的ID）
   */
  OrganizationId?: string
  /**
   * 第三方平台子客企业的唯一标识
   */
  OrganizationOpenId?: string
  /**
   * 第三方平台子客企业名称
   */
  OrganizationName?: string
  /**
   * 企业的统一社会信用代码
   */
  UnifiedSocialCreditCode?: string
  /**
   * 企业法定代表人的姓名
   */
  LegalName?: string
  /**
   * 企业法定代表人作为第三方平台子客企业员工的唯一标识
   */
  LegalOpenId?: string
  /**
   * 企业超级管理员的姓名
   */
  AdminName?: string
  /**
   * 企业超级管理员作为第三方平台子客企业员工的唯一标识
   */
  AdminOpenId?: string
  /**
   * 企业超级管理员的手机号码
   **注**：`手机号码脱敏（隐藏部分用*替代）`
   */
  AdminMobile?: string
  /**
   * 企业认证状态字段。值如下：
<ul>
  <li>**"UNVERIFIED"**： 未认证的企业</li>
  <li>**"VERIFYINGLEGALPENDINGAUTHORIZATION"**： 认证中待法人授权的企业</li>
  <li>**"VERIFYINGAUTHORIZATIONFILEPENDING"**： 认证中授权书审核中的企业</li>
  <li>**"VERIFYINGAUTHORIZATIONFILEREJECT"**： 认证中授权书已驳回的企业</li>
  <li>**"VERIFYING"**： 认证中的企业</li>
  <li>**"VERIFIED"**： 已认证的企业</li>
</ul>
   */
  AuthorizationStatus?: string
  /**
   * 企业认证方式字段。值如下：
<ul>
  <li>**"AuthorizationInit"**： 暂未选择授权方式</li>
  <li>**"AuthorizationFile"**： 授权书</li>
  <li>**"AuthorizationLegalPerson"**： 法人授权超管</li>
  <li>**"AuthorizationLegalIdentity"**： 法人直接认证</li>
</ul>
   */
  AuthorizationType?: string
}

/**
 * CreateSignUrls返回参数结构体
 */
export interface CreateSignUrlsResponse {
  /**
   * 签署参与者签署H5链接信息数组
   */
  SignUrlInfos?: Array<SignUrlInfo>
  /**
   * 生成失败时的错误信息，成功返回”“，顺序和出参SignUrlInfos保持一致
   */
  ErrorMessages?: Array<string>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChannelDeleteRole请求参数结构体
 */
export interface ChannelDeleteRoleRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent: Agent
  /**
   * 角色id，最多20个
   */
  RoleIds: Array<string>
}

/**
 * CreateBatchOrganizationRegistrationTasks请求参数结构体
 */
export interface CreateBatchOrganizationRegistrationTasksRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent: Agent
  /**
   * 当前应用下子客的组织机构注册信息。
一次最多支持10条认证流
   */
  RegistrationOrganizations: Array<RegistrationOrganizationInfo>
  /**
   * 生成链接的类型：
<ul><li>**PC**：(默认)web控制台链接, 需要在PC浏览器中打开</li>
<li>**CHANNEL**：H5跳转到电子签小程序链接, 一般用于发送短信中带的链接, 打开后进入腾讯电子签小程序</li>
<li>**SHORT_URL**：H5跳转到电子签小程序链接的短链形式, 一般用于发送短信中带的链接, 打开后进入腾讯电子签小程序</li>
<li>**APP**：第三方APP或小程序跳转电子签小程序链接, 一般用于贵方小程序或者APP跳转过来,  打开后进入腾讯电子签小程序</li></ul>
示例值：PC

   */
  Endpoint?: string
}

/**
 * ChannelCreateBatchQuickSignUrl返回参数结构体
 */
export interface ChannelCreateBatchQuickSignUrlResponse {
  /**
   * 签署人签署链接信息
   */
  FlowApproverUrlInfo?: FlowApproverUrlInfo
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePartnerAutoSignAuthUrl请求参数结构体
 */
export interface CreatePartnerAutoSignAuthUrlRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent: Agent
  /**
   * 被授企业id，和AuthorizedOrganizationName二选一，不能同时为空
注：`被授权企业必须和当前企业在同一应用号下`
   */
  AuthorizedOrganizationId?: string
  /**
   * 被授权企业名，和AuthorizedOrganizationId二选一，不能同时为空
注：`被授权企业必须和当前企业在同一应用号下`
   */
  AuthorizedOrganizationName?: string
}

/**
 * ChannelCreateBatchCancelFlowUrl请求参数结构体
 */
export interface ChannelCreateBatchCancelFlowUrlRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent: Agent
  /**
   * 要撤销的合同流程ID列表，最多100个，超过100不处理
   */
  FlowIds: Array<string>
  /**
   * 暂未开放
   * @deprecated
   */
  Operator?: UserInfo
}

/**
 * 指定签署人限制项
 */
export interface ApproverRestriction {
  /**
   * 指定签署人姓名
   */
  Name?: string
  /**
   * 指定签署人手机号，11位数字
   */
  Mobile?: string
  /**
   * 指定签署人证件类型，ID_CARD-身份证，HONGKONG_AND_MACAO-港澳居民来往内地通行证，HONGKONG_MACAO_AND_TAIWAN-港澳台居民居住证
   */
  IdCardType?: string
  /**
   * 指定签署人证件号码，其中字母大写
   */
  IdCardNumber?: string
}

/**
 * PrepareFlows请求参数结构体
 */
export interface PrepareFlowsRequest {
  /**
   * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。
   */
  Agent: Agent
  /**
   * 多个合同（签署流程）信息，最大支持20个签署流程。
   */
  FlowInfos: Array<FlowInfo>
  /**
   * 操作完成后的跳转地址，最大长度200
   */
  JumpUrl: string
  /**
   * 暂未开放
   * @deprecated
   */
  Operator?: UserInfo
}

/**
 * 签署方信息，发起合同后可获取到对应的签署方信息，如角色ID，角色名称
 */
export interface ApproverItem {
  /**
   * 签署方唯一编号

在<a href="https://qian.tencent.com/developers/company/dynamic_signer" target="_blank">动态补充签署人</a>场景下，可以用此编号确定参与方
注意：此字段可能返回 null，表示取不到有效值。
   */
  SignId?: string
  /**
   * 签署方角色编号

在<a href="https://qian.tencent.com/developers/company/dynamic_signer" target="_blank">动态补充签署人</a>场景下，可以用此编号确定参与方
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecipientId?: string
  /**
   * 签署方角色名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApproverRoleName?: string
}

/**
 * ChannelCreateFlowSignReview返回参数结构体
 */
export interface ChannelCreateFlowSignReviewResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChannelDisableUserAutoSign请求参数结构体
 */
export interface ChannelDisableUserAutoSignRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。
   */
  Agent: Agent
  /**
   * 自动签使用的场景值, 可以选择的场景值如下:
<ul><li> **E_PRESCRIPTION_AUTO_SIGN** :  电子处方场景</li><li> **OTHER** :  通用场景</li></ul>
   */
  SceneKey: string
  /**
   * 需要关闭自动签的个人的信息，如姓名，证件信息等。
   */
  UserInfo: UserThreeFactor
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator?: UserInfo
}

/**
 * ChannelDescribeOrganizationSeals返回参数结构体
 */
export interface ChannelDescribeOrganizationSealsResponse {
  /**
   * 在设置了SealId时返回0或1，没有设置时返回公司的总印章数量，可能比返回的印章数组数量多
   */
  TotalCount?: number
  /**
   * 查询到的印章结果数组
   */
  Seals?: Array<OccupiedSeal>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSealByImage返回参数结构体
 */
export interface CreateSealByImageResponse {
  /**
   * 电子印章ID，为32位字符串。
建议开发者保留此印章ID，后续指定签署区印章或者操作印章需此印章ID。
   */
  SealId?: string
  /**
   * 电子印章预览链接地址，地址默认失效时间为24小时。

注:`图片上传生成的电子印章无预览链接地址`
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageUrl?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChannelCancelMultiFlowSignQRCode返回参数结构体
 */
export interface ChannelCancelMultiFlowSignQRCodeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChannelDescribeRoles返回参数结构体
 */
export interface ChannelDescribeRolesResponse {
  /**
   * 查询结果分页返回，指定从第几页返回数据，和Limit参数配合使用，最大2000条。
   */
  Offset?: number
  /**
   * 指定每页返回的数据条数，和Offset参数配合使用，单页最大200。
   */
  Limit?: number
  /**
   * 查询角色的总数量
   */
  TotalCount?: number
  /**
   * 查询的角色信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChannelRoles?: Array<ChannelRole>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChannelCreateReleaseFlow请求参数结构体
 */
export interface ChannelCreateReleaseFlowRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent: Agent
  /**
   * 待解除的签署流程编号(即原签署流程的编号)。
   */
  NeedRelievedFlowId: string
  /**
   * 解除协议内容, 包括解除理由等信息。
   */
  ReliveInfo: RelieveInfo
  /**
   * 指定解除协议的签署人，如不指定，则默认使用原流程的签署人。 <br/>
如需更换原合同中的企业端签署人，可通过指定该签署人在原合同列表中的ApproverNumber编号来更换此企业端签署人。(可通过接口<a href="https://qian.tencent.com/developers/partnerApis/flows/DescribeFlowDetailInfo/">DescribeFlowDetailInfo</a>查询签署人的ApproverNumber编号，默认从0开始，顺序递增)<br/>

注意：
<ul>
<li>只能更换自己企业的签署人，不支持更换个人类型或者其他企业的签署人</li>
<li>可以不指定替换签署人，使用原流程的签署人</li>
</ul>
   */
  ReleasedApprovers?: Array<ReleasedApprover>
  /**
   * 签署完回调url，最大长度1000个字符
   * @deprecated
   */
  CallbackUrl?: string
  /**
   * 暂未开放
   * @deprecated
   */
  Organization?: OrganizationInfo
  /**
   * 暂未开放
   * @deprecated
   */
  Operator?: UserInfo
  /**
   * 合同流程的签署截止时间，格式为Unix标准时间戳(秒)，如果未设置签署截止时间，则默认为合同流程创建后的7天时截止。
如果在签署截止时间前未完成签署，则合同状态会变为已过期，导致合同作废。
   */
  Deadline?: number
  /**
   * 调用方自定义的个性化字段，该字段的值可以是字符串JSON或其他字符串形式，客户可以根据自身需求自定义数据格式并在需要时进行解析。该字段的信息将以Base64编码的形式传输，支持的最大数据大小为20480长度。

在合同状态变更的回调信息等场景中，该字段的信息将原封不动地透传给贵方。

回调的相关说明可参考开发者中心的<a href="https://qian.tencent.com/developers/company/callback_types_v2" target="_blank">回调通知</a>模块。
   */
  UserData?: string
}

/**
 * ChannelDescribeFlowComponents返回参数结构体
 */
export interface ChannelDescribeFlowComponentsResponse {
  /**
   * 合同填写控件信息列表，填写控件会按照参与方角色进行分类。
   */
  RecipientComponentInfos?: Array<RecipientComponentInfo>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChannelCreateFlowGroupByFiles返回参数结构体
 */
export interface ChannelCreateFlowGroupByFilesResponse {
  /**
   * 合同组ID，为32位字符串。
建议开发者妥善保存此合同组ID，以便于顺利进行后续操作。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowGroupId?: string
  /**
   * 合同组中每个合同流程ID，每个ID均为32位字符串。

注:
`此数组的顺序和入参中的FlowGroupInfos顺序一致`
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowIds?: Array<string>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChannelCreateMultiFlowSignQRCode返回参数结构体
 */
export interface ChannelCreateMultiFlowSignQRCodeResponse {
  /**
   * 签署二维码的基本信息，用于创建二维码，用户可扫描该二维码进行签署操作。
   */
  QrCode?: SignQrCode
  /**
   * 流程签署二维码的签署信息，适用于客户系统整合二维码功能。通过链接，用户可直接访问电子签名小程序并签署合同。
   */
  SignUrls?: SignUrl
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 签署人个性化能力信息
 */
export interface ApproverOption {
  /**
   * 是否可以拒签 默认false-可以拒签 true-不可以拒签
   */
  NoRefuse?: boolean
  /**
   * 是否可以转发 默认false-可以转发 true-不可以转发
   */
  NoTransfer?: boolean
  /**
   * 是否隐藏一键签署 默认false-不隐藏true-隐藏
   */
  HideOneKeySign?: boolean
  /**
   * 签署人信息补充类型，默认无需补充。

<ul><li> **1** : ( 动态签署人（可发起合同后再补充签署人信息）注：`企业自动签不支持动态补充`</li>
</ul>
   */
  FillType?: number
  /**
   * 签署人阅读合同限制参数
 <br/>取值：
<ul>
<li> LimitReadTimeAndBottom，阅读合同必须限制阅读时长并且必须阅读到底</li>
<li> LimitReadTime，阅读合同仅限制阅读时长</li>
<li> LimitBottom，阅读合同仅限制必须阅读到底</li>
<li> NoReadTimeAndBottom，阅读合同不限制阅读时长且不限制阅读到底（白名单功能，请联系客户经理开白使用）</li>
</ul>
   */
  FlowReadLimit?: string
}

/**
 * ChannelDescribeUserAutoSignStatus返回参数结构体
 */
export interface ChannelDescribeUserAutoSignStatusResponse {
  /**
   * 查询用户是否已开通自动签
   */
  IsOpen?: boolean
  /**
   * 自动签许可生效时间。当且仅当已通过许可开通自动签时有值。

值为unix时间戳,单位为秒。
   */
  LicenseFrom?: number
  /**
   * 自动签许可到期时间。当且仅当已通过许可开通自动签时有值。

值为unix时间戳,单位为秒。
   */
  LicenseTo?: number
  /**
   * 设置用户开通自动签时是否绑定个人自动签账号许可。

<ul><li>**0**: 使用个人自动签账号许可进行开通，个人自动签账号许可有效期1年，注: `不可解绑释放更换他人`</li></ul>
   */
  LicenseType?: number
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 同步的员工的信息
 */
export interface ProxyOrganizationOperator {
  /**
   * 员工的唯一标识(即OpenId),  定义Agent中的OpenId一样, 可以参考<a href="https://qian.tencent.com/developers/partnerApis/dataTypes/#agent" target="_blank">Agent结构体</a>
   */
  Id: string
  /**
   * 员工的姓名，最大长度50个字符
员工的姓名将用于身份认证和电子签名，请确保填写的姓名为真实姓名，而非昵称等代名。
   */
  Name?: string
  /**
   * 签署方经办人的证件类型，支持以下类型
<ul><li>ID_CARD : 居民身份证  (默认值)</li>
<li>HONGKONG_AND_MACAO : 港澳居民来往内地通行证</li>
<li>HONGKONG_MACAO_AND_TAIWAN : 港澳台居民居住证(格式同居民身份证)</li></ul>

   */
  IdCardType?: string
  /**
   * 经办人证件号
   */
  IdCardNumber?: string
  /**
   * 员工的手机号，支持国内手机号11位数字(无需加+86前缀或其他字符)，不支持海外手机号。
   */
  Mobile?: string
  /**
   * 预先分配员工的角色, 可以分配的角色如下:
<table> <thead> <tr> <th>可以分配的角色</th> <th>角色名称</th> <th>角色描述</th> </tr> </thead> <tbody> <tr> <td>admin</td> <td>业务管理员（IT 系统负责人，e.g. CTO）</td> <td>有企业合同模块、印章模块、模板模块等全量功能及数据权限。</td> </tr> <tr> <td>channel-normal-operator</td> <td>经办人（企业法务负责人）</td> <td>有发起合同、签署合同（含填写、拒签）、撤销合同、持有印章等权限能力，可查看企业所有合同数据。</td> </tr> <tr> <td>channel-sales-man</td> <td>业务员（一般为销售员、采购员）</td> <td>有发起合同、签署合同（含填写、拒签）、撤销合同、持有印章等权限能力，可查看自己相关所有合同数据。</td> </tr> </tbody> </table>
   */
  DefaultRole?: string
}

/**
 * ModifyExtendedService返回参数结构体
 */
export interface ModifyExtendedServiceResponse {
  /**
   * 操作跳转链接，有效期24小时
若操作时没有返回跳转链接，表示无需跳转操作，此时会直接开通/关闭服务。

当操作类型是 OPEN 且 扩展服务类型是  AUTO_SIGN 或 DOWNLOAD_FLOW 或者 OVERSEA_SIGN 时返回操作链接，
返回的链接需要平台方自行触达超管或法人，超管或法人点击链接完成服务开通操作。
   */
  OperateUrl?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChannelCreateUserRoles请求参数结构体
 */
export interface ChannelCreateUserRolesRequest {
  /**
   * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。
   */
  Agent: Agent
  /**
   * 绑定角色的角色id列表，最多 100 个
   */
  RoleIds: Array<string>
  /**
   * 电子签用户ID列表，与OpenIds参数二选一,优先UserIds参数，最多 100 个
   */
  UserIds?: Array<string>
  /**
   * 客户系统用户ID列表，与UserIds参数二选一,优先UserIds参数，最多 100 个
   */
  OpenIds?: Array<string>
  /**
   * 操作者信息
   * @deprecated
   */
  Operator?: UserInfo
}

/**
 * ChannelGetTaskResultApi返回参数结构体
 */
export interface ChannelGetTaskResultApiResponse {
  /**
   * 任务Id
   */
  TaskId?: string
  /**
   * 任务状态，需要关注的状态
<ul><li>**0**  :NeedTranform   - 任务已提交</li>
<li>**4**  :Processing     - 文档转换中</li>
<li>**8**  :TaskEnd        - 任务处理完成</li>
<li>**-2** :DownloadFailed - 下载失败</li>
<li>**-6** :ProcessFailed  - 转换失败</li>
<li>**-13**:ProcessTimeout - 转换文件超时</li></ul>
   */
  TaskStatus?: number
  /**
   * 状态描述，需要关注的状态
<ul><li> **NeedTranform** : 任务已提交</li>
<li> **Processing** : 文档转换中</li>
<li> **TaskEnd** : 任务处理完成</li>
<li> **DownloadFailed** : 下载失败</li>
<li> **ProcessFailed** : 转换失败</li>
<li> **ProcessTimeout** : 转换文件超时</li></ul>
   */
  TaskMessage?: string
  /**
   * 资源Id（即FileId），用于[用PDF文件创建签署流程](https://qian.tencent.com/developers/partnerApis/startFlows/ChannelCreateFlowByFiles)
   */
  ResourceId?: string
  /**
   * 预览文件Url，有效期30分钟 
当前字段返回为空，发起的时候，将ResourceId 放入发起即可
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  PreviewUrl?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 权限树中的权限组
 */
export interface PermissionGroup {
  /**
   * 权限组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupName?: string
  /**
   * 权限组key
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupKey?: string
  /**
   * 是否隐藏分组，0否1是
注意：此字段可能返回 null，表示取不到有效值。
   */
  Hide?: number
  /**
   * 权限集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  Permissions?: Array<Permission>
}

/**
 * ChannelCreateBatchSignUrl请求参数结构体
 */
export interface ChannelCreateBatchSignUrlRequest {
  /**
   * 关于渠道应用的相关信息，包括子客企业及应用编、号等详细内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。
   */
  Agent: Agent
  /**
   * 签署方经办人的姓名。
经办人的姓名将用于身份认证和电子签名，请确保填写的姓名为签署方的真实姓名，而非昵称等代名。

注：`请确保和合同中填入的一致`
   */
  Name: string
  /**
   * 手机号码， 支持国内手机号11位数字(无需加+86前缀或其他字符)。
请确认手机号所有方为此业务通知方。

注：`请确保和合同中填入的一致,  若无法保持一致，请确保在发起和生成批量签署链接时传入相同的参与方证件信息`
   */
  Mobile: string
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator?: UserInfo
  /**
   * 证件类型，支持以下类型
<ul><li>**ID_CARD** : 居民身份证 (默认值)</li>
<li>**HONGKONG_AND_MACAO** : 港澳居民来往内地通行证</li>
<li>**HONGKONG_MACAO_AND_TAIWAN** : 港澳台居民居住证(格式同居民身份证)</li></ul>

注：`请确保和合同中填入的一致`
   */
  IdCardType?: string
  /**
   * 证件号码，应符合以下规则
<ul><li>居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。</li>
<li>港澳居民来往内地通行证号码应为9位字符串，第1位为“C”，第2位为英文字母（但“I”、“O”除外），后7位为阿拉伯数字。</li>
<li>港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。</li></ul>

注：`请确保和合同中填入的一致`
   */
  IdCardNumber?: string
  /**
   * 通知用户方式：
<ul>
<li>**NONE** : 不通知（默认）</li>
<li>**SMS** : 短信通知（发送短信通知到Mobile参数所传的手机号）</li>
</ul>
   */
  NotifyType?: string
  /**
   * 本次需要批量签署的合同流程ID列表。
可以不传,  如不传则是发给对方的所有待签署合同流程。

   */
  FlowIds?: Array<string>
  /**
   * 目标签署人的企业名称，签署人如果是企业员工身份，需要传此参数。

注：
<ul>
<li>请确认该名称与企业营业执照中注册的名称一致。</li>
<li>如果名称中包含英文括号()，请使用中文括号（）代替。</li>
<li>请确保此企业已完成腾讯电子签企业认证。</li>
<li>若为子客企业，请确保员工已经加入企业。</li>
</ul>
   */
  OrganizationName?: string
  /**
   * 是否直接跳转至合同内容页面进行签署
<ul>
<li>**false**: 会跳转至批量合同流程的列表,  点击需要批量签署合同后进入合同内容页面进行签署(默认)</li>
<li>**true**: 跳过合同流程列表, 直接进入合同内容页面进行签署</li>
</ul>
   */
  JumpToDetail?: boolean
}

/**
 * ChannelCreateOrganizationModifyQrCode返回参数结构体
 */
export interface ChannelCreateOrganizationModifyQrCodeResponse {
  /**
   * 二维码下载链接
   */
  QrCodeUrl?: string
  /**
   * 二维码失效时间 UNIX 时间戳 精确到秒
   */
  ExpiredTime?: number
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChannelDeleteSealPolicies返回参数结构体
 */
export interface ChannelDeleteSealPoliciesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChannelCreateWebThemeConfig返回参数结构体
 */
export interface ChannelCreateWebThemeConfigResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetDownloadFlowUrl请求参数结构体
 */
export interface GetDownloadFlowUrlRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent.ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent: Agent
  /**
   * 流程合同ID列表,  可将这些流程ID组织成合同组的形式, 下载时候每个文件夹会是一个zip压缩包,  每个文件夹对多20个合同, 所有文件夹最多50个合同

如下列组织形式,  控制台下载页面点击下载按钮后, 会生成**2023采购合同.zip**和**2023入职合同.zip** 两个下载任务(注:`部分浏览器需要授权或不支持创建多下载任务`)

**2023采购合同.zip**压缩包会有`yDwivUUckpor6wtoUuogwQHCAB0ES0pQ`和`yDwi8UUckpo5fz9cUqI6nGwcuTvt9YSh`两个合同的文件
**2023入职合同.zip** 压缩包会有`yDwivUUckpor6wobUuogwQHvdGfvDi5K`的文件

![image](	https://dyn.ess.tencent.cn/guide/capi/channel_GetDownloadFlowUrl_DownLoadFlows.png)
   */
  DownLoadFlows?: Array<DownloadFlowInfo>
  /**
   * 操作者的信息，不用传
   * @deprecated
   */
  Operator?: UserInfo
}

/**
 * ChannelCreateEmbedWebUrl返回参数结构体
 */
export interface ChannelCreateEmbedWebUrlResponse {
  /**
   * 嵌入的web链接，5分钟有效
   */
  WebUrl?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChannelBatchCancelFlows请求参数结构体
 */
export interface ChannelBatchCancelFlowsRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent: Agent
  /**
   * 要撤销的合同流程ID列表，最多100个，超过100不处理
   */
  FlowIds: Array<string>
  /**
   * 撤回原因，长度不能超过200，只能由中文、字母、数字和下划线组成。

备注:`如果不传递撤回原因，那么默认撤回原因是 "自动撤销（通过接口实现）"`
   */
  CancelMessage?: string
  /**
   * 撤销理由自定义格式,  会展示在合同预览的界面中,  可以选择下面的组合方式：

**0** : 默认格式,  合同封面页面会展示为: 发起方-企业名称-撤销的经办人名字以**CancelMessage**的理由撤销当前合同
**1** :  合同封面页面会展示为:  发起方以**CancelMessage**的理由撤销当前合同
**2** : 保留企业名称,  合同封面页面会展示为:  发起方-企业名称以**CancelMessage**的理由撤销当前合同
**3** : 保留企业名称+经办人名字,  合同封面页面会展示为: 发起方-企业名称-撤销的经办人名字以**CancelMessage**的理由撤销当前合同

注: `CancelMessage为撤销当前合同的理由`

![image](https://qcloudimg.tencent-cloud.cn/raw/f16cf37dbb3a09d6569877f093b92204/channel_ChannelCancelFlow.png)


   */
  CancelMessageFormat?: number
  /**
   * 暂未开放
   * @deprecated
   */
  Operator?: UserInfo
}

/**
 * CreateChannelOrganizationInfoChangeUrl请求参数结构体
 */
export interface CreateChannelOrganizationInfoChangeUrlRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent. ProxyOperator.OpenId</li>
<li>第三方平台子客企业中的员工标识: Agent.ProxyOrganizationOpenId</li>
</ul>
   */
  Agent: Agent
  /**
   * 企业信息变更类型，可选类型如下：
<ul><li>**1**：企业超管变更, 可以将超管换成同企业的其他员工</li>
<li>**2**：企业基础信息变更, 可以改企业名称 , 所在地址 , 法人名字等信息</li></ul>
   */
  ChangeType: number
}

/**
 * ChannelModifyRole请求参数结构体
 */
export interface ChannelModifyRoleRequest {
  /**
   * 代理企业和员工的信息。
   */
  Agent: Agent
  /**
   * 角色名称，最大长度为20个字符，仅限中文、字母、数字和下划线组成。
   */
  Name: string
  /**
   * 角色Id，可通过接口 ChannelDescribeRoles 查询获取
   */
  RoleId: string
  /**
   * 角色描述，最大长度为50个字符
   */
  Description?: string
  /**
   * 权限树，权限树内容 PermissionGroups 可参考接口 ChannelDescribeRoles的输出
   */
  PermissionGroups?: Array<PermissionGroup>
}

/**
 * ChannelUpdateSealStatus请求参数结构体
 */
export interface ChannelUpdateSealStatusRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。
   */
  Agent: Agent
  /**
   * 印章状态，目前支持传入以下类型：
<ul><li>DISABLE-停用印章</li></ul>
   */
  Status: string
  /**
   * 印章ID
   */
  SealId: string
  /**
   * 更新印章状态原因说明
   */
  Reason?: string
  /**
   * 操作者的信息
   * @deprecated
   */
  Operator?: UserInfo
}

/**
 * ChannelCreateFlowGroupByTemplates请求参数结构体
 */
export interface ChannelCreateFlowGroupByTemplatesRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent.ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent: Agent
  /**
   * 合同组中每个合同签署流程的信息，合同组中最少包含2个合同，不能超过50个合同。
   */
  FlowInfos: Array<FlowInfo>
  /**
   * 合同组的名称（可自定义此名称），长度不能超过200，只能由中文、字母、数字和下划线组成。
   */
  FlowGroupName: string
}

/**
 * 流程签署二维码的签署信息，适用于客户系统整合二维码功能。 通过链接，用户可直接访问电子签名小程序并签署合同。
 */
export interface SignUrl {
  /**
   * 跳转至电子签名小程序签署的链接地址。 适用于客户端APP及小程序直接唤起电子签名小程序。
   */
  AppSignUrl?: string
  /**
   * 签署链接有效时间，格式类似"2022-08-05 15:55:01"
   */
  EffectiveTime?: string
  /**
   * 跳转至电子签名小程序签署的链接地址，格式类似于https://essurl.cn/xxx。 打开此链接将会展示H5中间页面，随后唤起电子签名小程序以进行合同签署。
   */
  HttpSignUrl?: string
}

/**
 * 用户计费使用情况详情
 */
export interface ChannelBillUsageDetail {
  /**
   * 合同流程ID，为32位字符串。
   */
  FlowId?: string
  /**
   * 合同经办人名称
如果有多个经办人用分号隔开。
   */
  OperatorName?: string
  /**
   * 发起方组织机构名称
   */
  CreateOrganizationName?: string
  /**
   * 合同流程的名称。
   */
  FlowName?: string
  /**
   * 合同流程当前的签署状态, 会存在下列的状态值
<ul>
<li>**INIT**: 合同创建</li>
<li>**PART**: 合同签署中(至少有一个签署方已经签署)</li>
<li>**REJECT**: 合同拒签</li>
<li>**ALL**: 合同签署完成</li>
<li>**DEADLINE**: 合同流签(合同过期)</li>
<li>**CANCEL**: 合同撤回</li>
<li>**RELIEVED**: 解除协议（已解除）</li>
<li>**WILLEXPIRE**: 合同即将过期</li>
<li>**EXCEPTION**: 合同异常</li>
</ul>
   */
  FlowStatus?: string
  /**
   * 查询的套餐类型
对应关系如下:
<ul>
<li>**CloudEnterprise**: 企业版合同</li>
<li>**SingleSignature**: 单方签章</li>
<li>**CloudProve**: 签署报告</li>
<li>**CloudOnlineSign**: 腾讯会议在线签约</li>
<li>**ChannelWeCard**: 微工卡</li>
<li>**SignFlow**: 合同套餐</li>
<li>**SignFace**: 签署意愿（人脸识别）</li>
<li>**SignPassword**: 签署意愿（密码）</li>
<li>**SignSMS**: 签署意愿（短信）</li>
<li>**PersonalEssAuth**: 签署人实名（腾讯电子签认证）</li>
<li>**PersonalThirdAuth**: 签署人实名（信任第三方认证）</li>
<li>**OrgEssAuth**: 签署企业实名</li>
<li>**FlowNotify**: 短信通知</li>
<li>**AuthService**: 企业工商信息查询</li>
</ul>
   */
  QuotaType?: string
  /**
   * 合同使用量
注: `如果消耗类型是撤销返还，此值为负值代表返还的合同数量`
   */
  UseCount?: number
  /**
   * 消耗的时间戳，格式为Unix标准时间戳（秒）。
   */
  CostTime?: number
  /**
   * 消耗的套餐名称
   */
  QuotaName?: string
  /**
   * 消耗类型
   **1**.扣费
   **2**.撤销返还
   */
  CostType?: number
  /**
   * 备注
   */
  Remark?: string
}

/**
 * DescribeBillUsageDetail请求参数结构体
 */
export interface DescribeBillUsageDetailRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。
   */
  Agent: Agent
  /**
   * 查询开始时间字符串，格式为yyyymmdd,时间跨度不能大于31天
   */
  StartTime: string
  /**
   * 查询结束时间字符串，格式为yyyymmdd,时间跨度不能大于31天
   */
  EndTime: string
  /**
   * 查询的套餐类型 （选填 ）不传则查询所有套餐；
对应关系如下
CloudEnterprise-企业版合同
SingleSignature-单方签章
CloudProve-签署报告
CloudOnlineSign-腾讯会议在线签约
ChannelWeCard-微工卡
SignFlow-合同套餐
SignFace-签署意愿（人脸识别）
SignPassword-签署意愿（密码）
SignSMS-签署意愿（短信）
PersonalEssAuth-签署人实名（腾讯电子签认证）
PersonalThirdAuth-签署人实名（信任第三方认证）
OrgEssAuth-签署企业实名
FlowNotify-短信通知
AuthService-企业工商信息查询
   */
  QuotaType?: string
  /**
   * 指定分页返回第几页的数据，如果不传默认返回第一页，页码从 0 开始，即首页为 0
   */
  Offset?: number
  /**
   * 指定分页每页返回的数据条数，如果不传默认为 50，单页最大支持 50。
   */
  Limit?: number
}

/**
 * 解除协议文档中内容信息，包括但不限于：解除理由、解除后仍然有效的条款-保留条款、原合同事项处理-费用结算、原合同事项处理-其他事项、其他约定等。
 */
export interface RelieveInfo {
  /**
   * 解除理由，最大支持200个字
   */
  Reason: string
  /**
   * 解除后仍然有效的条款，保留条款，最大支持200个字
   */
  RemainInForceItem?: string
  /**
   * 原合同事项处理-费用结算，最大支持200个字
   */
  OriginalExpenseSettlement?: string
  /**
   * 原合同事项处理-其他事项，最大支持200个字
   */
  OriginalOtherSettlement?: string
  /**
   * 其他约定，最大支持200个字
   */
  OtherDeals?: string
}

/**
 * ChannelCreateSealPolicy请求参数结构体
 */
export interface ChannelCreateSealPolicyRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。

渠道应用标识: Agent.AppId
第三方平台子客企业标识: Agent.ProxyOrganizationOpenId
第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId
第三方平台子客企业和员工必须已经经过实名认证。
   */
  Agent: Agent
  /**
   * 电子印章ID，为32位字符串。
建议开发者保留此印章ID，后续指定签署区印章或者操作印章需此印章ID。
可登录腾讯电子签控制台，在 "印章"->"印章中心"选择查看的印章，在"印章详情" 中查看某个印章的SealId(在页面中展示为印章ID)。
   */
  SealId: string
  /**
   * 
员工在腾讯电子签平台的唯一身份标识，为32位字符串。
可登录腾讯电子签控制台，在 "更多能力"->"组织管理" 中查看某位员工的UserId(在页面中展示为用户ID)。
员工在贵司业务系统中的唯一身份标识，用于与腾讯电子签账号进行映射，确保在同一企业内不会出现重复。
该标识最大长度为64位字符串，仅支持包含26个英文字母和数字0-9的字符。
指定待授权的用户ID数组,电子签的用户ID
可以填写OpenId，系统会通过组织+渠道+OpenId查询得到UserId进行授权。
   */
  UserIds: Array<string>
  /**
   * 操作人（用户）信息，不用传
   * @deprecated
   */
  Operator?: UserInfo
  /**
   * 企业机构信息，不用传
   * @deprecated
   */
  Organization?: OrganizationInfo
}

/**
 * 持有的电子印章信息
 */
export interface OccupiedSeal {
  /**
   * 电子印章编号
   */
  SealId: string
  /**
   * 电子印章名称
   */
  SealName: string
  /**
   * 电子印章授权时间戳，单位秒
   */
  CreateOn: number
  /**
   * 电子印章授权人，电子签的UserId
   */
  Creator: string
  /**
   * 电子印章策略Id
   */
  SealPolicyId: string
  /**
   * 印章状态，有以下六种：CHECKING（审核中）SUCCESS（已启用）FAIL（审核拒绝）CHECKING-SADM（待超管审核）DISABLE（已停用）STOPPED（已终止）
   */
  SealStatus: string
  /**
   * 审核失败原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailReason: string
  /**
   * 印章图片url，5分钟内有效
   */
  Url: string
  /**
   * 印章类型，OFFICIAL-企业公章，CONTRACT-合同专用章，LEGAL_PERSON_SEAL-法人章
   */
  SealType: string
  /**
   * 用印申请是否为永久授权
   */
  IsAllTime: boolean
  /**
   * 授权人列表
   */
  AuthorizedUsers: Array<AuthorizedUser>
}

/**
 * CreateFlowsByTemplates请求参数结构体
 */
export interface CreateFlowsByTemplatesRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent.ProxyOperator.OpenId</li>
</ul>
   */
  Agent: Agent
  /**
   * 要创建的合同信息列表，最多支持一次创建20个合同
   */
  FlowInfos: Array<FlowInfo>
  /**
   * 是否为预览模式，取值如下：
<ul><li> **false**：非预览模式（默认），会产生合同流程并返回合同流程编号FlowId。</li>
<li> **true**：预览模式，不产生合同流程，不返回合同流程编号FlowId，而是返回预览链接PreviewUrl，有效期为300秒，用于查看真实发起后合同的样子。</li></ul>

注:

`如果预览的文件中指定了动态表格控件，此时此接口返回的是合成前的文档预览链接，合成完成后的文档预览链接需要通过回调通知的方式或使用返回的TaskInfo中的TaskId通过ChannelGetTaskResultApi接口查询得到`

   */
  NeedPreview?: boolean
  /**
   * 预览模式下产生的预览链接类型 
<ul><li> **0** :(默认) 文件流 ,点开后下载预览的合同PDF文件 </li>
<li> **1** :H5链接 ,点开后在浏览器中展示合同的样子</li></ul>
注: `此参数在NeedPreview 为true时有效`

   */
  PreviewType?: number
  /**
   * 操作者的信息，不用传
   * @deprecated
   */
  Operator?: UserInfo
}

/**
 * DescribeBatchOrganizationRegistrationUrls返回参数结构体
 */
export interface DescribeBatchOrganizationRegistrationUrlsResponse {
  /**
   * 企业批量注册链接信息
   */
  OrganizationAuthUrls?: Array<OrganizationAuthUrl>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UploadFiles请求参数结构体
 */
export interface UploadFilesRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent: Agent
  /**
   * 
文件对应业务类型,可以选择的类型如下
<ul><li> **TEMPLATE** : 此上传的文件用户生成合同模板，文件类型支持.pdf/.doc/.docx/.html格式，如果非pdf文件需要通过<a href="https://qian.tencent.com/developers/partnerApis/files/ChannelGetTaskResultApi" target="_blank">创建文件转换任务</a>转换后才能使用</li>
<li> **DOCUMENT** : 此文件用来发起合同流程，文件类型支持.pdf/.doc/.docx/.jpg/.png/.xls.xlsx/.html，如果非pdf文件需要通过<a href="https://qian.tencent.com/developers/partnerApis/files/ChannelGetTaskResultApi" target="_blank">创建文件转换任务</a>转换后才能使用</li></ul>
   */
  BusinessType: string
  /**
   * 上传文件内容数组，最多支持上传20个文件。
   */
  FileInfos?: Array<UploadFile>
  /**
   * 操作者的信息
   * @deprecated
   */
  Operator?: UserInfo
}

/**
 * DescribeChannelOrganizations返回参数结构体
 */
export interface DescribeChannelOrganizationsResponse {
  /**
   * 满足查询条件的企业信息列表。
   */
  ChannelOrganizationInfos?: Array<ChannelOrganizationInfo>
  /**
   * 指定分页返回第几页的数据。页码从 0 开始，即首页为 0，最大20000。
   */
  Offset?: number
  /**
   * 指定分页每页返回的数据条数，单页最大支持 200。
   */
  Limit?: number
  /**
   * 满足查询条件的企业总数量。
   */
  Total?: number
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChannelCreateOrganizationBatchSignUrl返回参数结构体
 */
export interface ChannelCreateOrganizationBatchSignUrlResponse {
  /**
   * 批量签署入口链接，用户可使用这个链接跳转到控制台页面对合同进行签署操作。
   */
  SignUrl?: string
  /**
   * 链接过期时间以 Unix 时间戳格式表示，从生成链接时间起，往后7天有效期。过期后短链将失效，无法打开。
   */
  ExpiredTime?: number
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用量明细
 */
export interface UsageDetail {
  /**
   * 子客企业标识
   */
  ProxyOrganizationOpenId?: string
  /**
   * 子客企业名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProxyOrganizationName?: string
  /**
   * 对应的消耗日期, **如果是汇总数据则为1970-01-01**
注意：此字段可能返回 null，表示取不到有效值。
   */
  Date?: string
  /**
   * 消耗合同数量
   */
  Usage?: number
  /**
   * 撤回合同数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Cancel?: number
  /**
   * 消耗渠道
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowChannel?: string
}

/**
 * ChannelCreateBatchCancelFlowUrl返回参数结构体
 */
export interface ChannelCreateBatchCancelFlowUrlResponse {
  /**
   * 批量撤销合同的URL链接, 需要在手机端打开, 有效期24小时
   */
  BatchCancelFlowUrl?: string
  /**
   * 与入参的FlowIds数组一致,   成功生成到撤销链接中,则为"",   不能撤销合同则为失败原因
   */
  FailMessages?: Array<string>
  /**
   * 签署撤销链接的过期时间(格式为:年-月-日 时:分:秒), 默认是生成链接的24小时后失效


   */
  UrlExpireOn?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * OperateChannelTemplate请求参数结构体
 */
export interface OperateChannelTemplateRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>第三方平台子客企业中的员工标识: Agent.AppId</li>
</ul>
   */
  Agent: Agent
  /**
   * 操作类型，可取值如下:
<ul>
<li>SELECT:  查询</li>
<li>DELETE:  删除</li>
<li>UPDATE: 更新</li>
</ul>
   */
  OperateType: string
  /**
   * 合同模板ID，为32位字符串。
注: ` 此处为第三方应用平台模板库模板ID，非子客模板ID`
   */
  TemplateId: string
  /**
   * 第三方平台子客企业的唯一标识，支持批量(用,分割)，
   */
  ProxyOrganizationOpenIds?: string
  /**
   * 模板可见范围, 可以设置的值如下:

**all**: 所有本第三方应用合作企业可见
**part**: 指定的本第三方应用合作企业

对应控制台的位置
![image](https://qcloudimg.tencent-cloud.cn/raw/68b97812c68d6af77a5991e3bff5c790.png)

   */
  AuthTag?: string
  /**
   * 当OperateType=UPDATE时，可以通过设置此字段对模板启停用状态进行操作。
<ul>
<li>0: 不修改模板可用状态</li>
<li>1:  启用模板</li>
<li>2: 停用模板</li>
</ul>
启用后模板可以正常领取。

停用后，推送方式为【自动推送】的模板则无法被子客使用，推送方式为【手动领取】的模板则无法出现被模板库被子客领用。
如果Available更新失败，会直接返回错误。
   */
  Available?: number
  /**
   * 暂未开放
   * @deprecated
   */
  Operator?: UserInfo
}

/**
 * DescribeChannelSealPolicyWorkflowUrl返回参数结构体
 */
export interface DescribeChannelSealPolicyWorkflowUrlResponse {
  /**
   * 用印审批小程序链接，链接类型（通过H5唤起小程序或通过APP跳转方式查看）。
   */
  WorkflowUrl?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateChannelFlowEvidenceReport返回参数结构体
 */
export interface CreateChannelFlowEvidenceReportResponse {
  /**
   * 出证报告 ID，可用于<a href="https://qian.tencent.com/developers/partnerApis/certificate/DescribeChannelFlowEvidenceReport" target="_blank">获取出证报告任务执行结果</a>查询出证任务结果和出证PDF的下载URL
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReportId?: string
  /**
   * 出证任务执行的状态, 状态含义如下：

<ul><li>**EvidenceStatusExecuting**：  出证任务在执行中</li>
<li>**EvidenceStatusSuccess**：  出证任务执行成功</li>
<li>**EvidenceStatusFailed** ： 出征任务执行失败</li></ul>
   */
  Status?: string
  /**
   * 废除，字段无效
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReportUrl?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 同步员工失败原因
 */
export interface SyncFailReason {
  /**
   * 企业员工标识(即OpenId)
   */
  Id?: string
  /**
   * 新增员工或者员工离职失败原因, 可能存证ID不符合规范、证件号码不合法等原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
}

/**
 * ChannelDescribeEmployees返回参数结构体
 */
export interface ChannelDescribeEmployeesResponse {
  /**
   * 员工信息列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Employees?: Array<Staff>
  /**
   * 指定分页返回第几页的数据。页码从 0 开始，即首页为 0，最大20000。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Offset?: number
  /**
   * 指定分页每页返回的数据条数，单页最大支持 20。
   */
  Limit?: number
  /**
   * 符合条件的员工数量。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChannelDeleteRole返回参数结构体
 */
export interface ChannelDeleteRoleResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChannelCreateReleaseFlow返回参数结构体
 */
export interface ChannelCreateReleaseFlowResponse {
  /**
   * 解除协议流程编号
   */
  FlowId?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeChannelFlowEvidenceReport返回参数结构体
 */
export interface DescribeChannelFlowEvidenceReportResponse {
  /**
   * 出证报告PDF的下载 URL，有效期为5分钟，超过有效期后将无法再下载。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReportUrl?: string
  /**
   * 出证任务执行的状态, 状态含义如下：

<ul><li>**EvidenceStatusExecuting**：  出证任务在执行中</li>
<li>**EvidenceStatusSuccess**：  出证任务执行成功</li>
<li>**EvidenceStatusFailed** ： 出征任务执行失败</li></ul>
   */
  Status?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSealByImage请求参数结构体
 */
export interface CreateSealByImageRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent.ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent: Agent
  /**
   * 电子印章名字，1-50个中文字符
注:`同一企业下电子印章名字不能相同`
   */
  SealName: string
  /**
   * 电子印章图片base64编码，大小不超过10M（原始图片不超过5M），只支持PNG或JPG图片格式

注: `通过图片创建的电子印章，需电子签平台人工审核`


   */
  SealImage?: string
  /**
   * 操作者的信息
   * @deprecated
   */
  Operator?: UserInfo
  /**
   * 电子印章生成方式
<ul>
<li><strong>空值</strong>:(默认)使用上传的图片生成印章, 此时需要上传SealImage图片</li>
<li><strong>SealGenerateSourceSystem</strong>: 系统生成印章, 无需上传SealImage图片</li>
</ul>
   */
  GenerateSource?: string
  /**
   * 电子印章类型 , 可选类型如下: 
<ul><li>**OFFICIAL**: (默认)公章</li>
<li>**CONTRACT**: 合同专用章;</li>
<li>**FINANCE**: 财务专用章;</li>
<li>**PERSONNEL**: 人事专用章</li>
<li>**INVOICE**: 发票专用章</li>
</ul>
注: `同企业下只能有一个公章, 重复创建会报错`
   */
  SealType?: string
  /**
   * 企业印章横向文字，最多可填15个汉字  (若超过印章最大宽度，优先压缩字间距，其次缩小字号)
横向文字的位置如下图中的"印章横向文字在这里"

![image](https://dyn.ess.tencent.cn/guide/capi/CreateSealByImage2.png)

   */
  SealHorizontalText?: string
  /**
   * 印章样式, 可以选择的样式如下: 
<ul><li>**circle**:(默认)圆形印章</li>
<li>**ellipse**:椭圆印章</li></ul>
   */
  SealStyle?: string
  /**
   * 印章尺寸取值描述, 可以选择的尺寸如下: 
<ul><li> **42_42**: 圆形企业公章直径42mm, 当SealStyle是圆形的时候才有效</li>
<li> **40_40**: 圆形企业印章直径40mm, 当SealStyle是圆形的时候才有效</li>
<li> **45_30**: 椭圆形印章45mm x 30mm, 当SealStyle是椭圆的时候才有效</li>
<li> **40_30**: 椭圆形印章40mm x 30mm, 当SealStyle是椭圆的时候才有效</li></ul>
   */
  SealSize?: string
  /**
   * 企业税号
注: `1.印章类型SealType是INVOICE类型时，此参数才会生效`
`2.印章类型SealType是INVOICE类型，且该字段没有传入值或传入空时，会取该企业对应的统一社会信用代码作为默认的企业税号`
   */
  TaxIdentifyCode?: string
}

/**
 * ChannelCreateFlowApprovers请求参数结构体
 */
export interface ChannelCreateFlowApproversRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent: Agent
  /**
   * 合同流程ID，为32位字符串。 建议开发者妥善保存此流程ID，以便于顺利进行后续操作。 可登录腾讯电子签控制台，在 "合同"->"合同中心" 中查看某个合同的FlowId(在页面中展示为合同ID)。
   */
  FlowId: string
  /**
   * 补充企业签署人信息。

- 如果发起方指定的补充签署人是企业签署人，则需要提供企业名称或者企业OpenId；

- 如果不指定，则使用姓名和手机号进行补充。
   */
  Approvers: Array<FillApproverInfo>
  /**
   * 签署人信息补充方式

<ul><li>**1**: 表示往未指定签署人的节点，添加一个明确的签署人，支持企业或个人签署方。</li></ul>
   */
  FillApproverType?: number
  /**
   * 操作人信息
   */
  Operator?: UserInfo
}

/**
 * ChannelUpdateSealStatus返回参数结构体
 */
export interface ChannelUpdateSealStatusResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChannelCreateFlowSignUrl请求参数结构体
 */
export interface ChannelCreateFlowSignUrlRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent: Agent
  /**
   * 合同流程ID，为32位字符串。
建议开发者妥善保存此流程ID，以便于顺利进行后续操作。
可登录腾讯电子签控制台，在 "合同"->"合同中心" 中查看某个合同的FlowId(在页面中展示为合同ID)。
   */
  FlowId: string
  /**
   * 流程签署人列表，其中结构体的Name，Mobile和ApproverType必传，其他可不传。
注:
`1. ApproverType目前只支持个人(PERSON)类型的签署人。`
`2. 签署人只能有手写签名和时间类型的签署控件，其他类型的填写控件和签署控件暂时都未支持。`
   */
  FlowApproverInfos: Array<FlowApproverInfo>
  /**
   * 用户信息，暂未开放
   * @deprecated
   */
  Operator?: UserInfo
  /**
   * 机构信息，暂未开放
   * @deprecated
   */
  Organization?: OrganizationInfo
  /**
   * 签署完之后的H5页面的跳转链接，此链接及支持http://和https://，最大长度1000个字符。(建议https协议)
   */
  JumpUrl?: string
}

/**
 * DescribeTemplates请求参数结构体
 */
export interface DescribeTemplatesRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent: Agent
  /**
   * 合同模板ID，为32位字符串。

可以通过<a href="https://qian.tencent.com/developers/partnerApis/accounts/CreateConsoleLoginUrl" target="_blank">生成子客登录链接</a>登录企业控制台, 在企业模板中得到合同模板ID。
   */
  TemplateId?: string
  /**
   * 查询模板的内容

<ul><li>**0**：（默认）模板列表及详情</li>
<li>**1**：仅模板列表, 不会返回模板中的签署控件, 填写控件, 参与方角色列表等信息</li></ul>
   */
  ContentType?: number
  /**
   * 合同模板ID数组，每一个合同模板ID为32位字符串,  最多支持200个模板的批量查询。

注意: 
1.` 此参数TemplateIds与TemplateId互为独立，若两者均传入，以TemplateId为准。`
2. `请确保每个模板均正确且属于当前企业，若有任一模板不存在，则返回错误。`
4. `若传递此参数，分页参数(Limit,Offset)无效`

   */
  TemplateIds?: Array<string>
  /**
   * 指定每页返回的数据条数，和Offset参数配合使用。

注：`1.默认值为20，单页做大值为200。`
   */
  Limit?: number
  /**
   * 查询结果分页返回，指定从第几页返回数据，和Limit参数配合使用。

注：`1.offset从0开始，即第一页为0。`
`2.默认从第一页返回。`
   */
  Offset?: number
  /**
   * 模糊搜索的模板名称，注意是模板名的连续部分，长度不能超过200，可支持由中文、字母、数字和下划线组成字符串。
   */
  TemplateName?: string
  /**
   * 对应第三方应用平台企业的模板ID，通过此值可以搜索由第三方应用平台模板ID下发或领取得到的子客模板列表。
   */
  ChannelTemplateId?: string
  /**
   * 返回控件的范围, 是只返回发起方自己的还是所有参与方的

<ul><li>**false**：（默认）只返回发起方控件</li>
<li>**true**：返回所有参与方(包括发起方和签署方)控件</li></ul>
   */
  QueryAllComponents?: boolean
  /**
   * 是否获取模板预览链接。

<ul><li>**false**：不获取（默认）</li>
<li>**true**：获取</li></ul>

设置为true之后， 返回参数PreviewUrl，为模板的H5预览链接,  有效期5分钟。可以通过浏览器打开此链接预览模板，或者嵌入到iframe中预览模板。

注: `此功能为白名单功能，使用前请联系对接的客户经理沟通。`
   */
  WithPreviewUrl?: boolean
  /**
   * 是否获取模板的PDF文件链接。

<ul><li>**false**：不获取（默认）</li>
<li>**true**：获取</li></ul>

设置为true之后， 返回参数PdfUrl，为模板PDF文件链接，有效期5分钟, 可以用于将PDF文件下载到本地

注: `此功能为白名单功能，使用前请联系对接的客户经理沟通。`
   */
  WithPdfUrl?: boolean
  /**
   * 操作者的信息
   * @deprecated
   */
  Operator?: UserInfo
}

/**
 * DescribeExtendedServiceAuthInfo返回参数结构体
 */
export interface DescribeExtendedServiceAuthInfoResponse {
  /**
   * 服务开通和授权的信息列表，根据查询类型返回所有支持的扩展服务开通和授权状况，或者返回特定扩展服务的开通和授权状况。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuthInfo?: Array<ExtentServiceAuthInfo>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChannelCreateEmbedWebUrl请求参数结构体
 */
export interface ChannelCreateEmbedWebUrlRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent: Agent
  /**
   * 要生成WEB嵌入界面的类型, 可以选择的值如下: 

<ul>
<li>CREATE_SEAL: 生成创建印章的嵌入页面</li>
<li>CREATE_TEMPLATE：生成创建模板的嵌入页面</li>
<li>MODIFY_TEMPLATE：生成修改模板的嵌入页面</li>
<li>PREVIEW_TEMPLATE：生成预览模板的嵌入页面</li>
<li>PREVIEW_FLOW：生成预览合同文档的嵌入页面</li>
<li>PREVIEW_FLOW_DETAIL：生成预览合同详情的嵌入页面</li>
<li>PREVIEW_SEAL_LIST：生成预览印章列表的嵌入页面</li>
<li>PREVIEW_SEAL_DETAIL：生成预览印章详情的嵌入页面</li>
<li>EXTEND_SERVICE：生成扩展服务的嵌入页面</li>
</ul>
   */
  EmbedType: string
  /**
   * WEB嵌入的业务资源ID

<ul>
<li>当EmbedType取值MODIFY_TEMPLATE，PREVIEW_TEMPLATE时需要填写模板id作为BusinessId</li>
<li>当EmbedType取值PREVIEW_FLOW，PREVIEW_FLOW_DETAIL时需要填写合同id作为BusinessId</li>
<li>当EmbedType取值PREVIEW_SEAL_DETAIL需要填写印章id作为BusinessId</li>
</ul>
   */
  BusinessId?: string
  /**
   * 是否隐藏控件，只有预览模板时生效
   */
  HiddenComponents?: boolean
  /**
   * 渠道操作者信息
   * @deprecated
   */
  Operator?: UserInfo
  /**
   * 用户自定义参数
<ul>
<li>目前仅支持EmbedType=CREATE_TEMPLATE时传入</li>
<li>指定后，创建，编辑，删除模板时，回调都会携带该userData</li>
<li>支持的格式：json字符串的BASE64编码字符串</li>
<li>示例：<ul>
                 <li>json字符串：{"ComeFrom":"xxx"}，BASE64编码：eyJDb21lRnJvbSI6Inh4eCJ9</li>
                 <li>eyJDb21lRnJvbSI6Inh4eCJ9，为符合要求的userData数据格式</li>
</ul>
</li>
</ul>
   */
  UserData?: string
}

/**
 * 抄送信息
 */
export interface CcInfo {
  /**
   * 被抄送人手机号，大陆11位手机号
   */
  Mobile?: string
  /**
   * 被抄送人姓名
   */
  Name?: string
  /**
   * 被抄送人类型
0--个人. 1--员工
   */
  CcType?: number
  /**
   * 被抄送人权限
0--可查看
1--可查看也可下载
   */
  CcPermission?: number
}

/**
 * ChannelDescribeFlowComponents请求参数结构体
 */
export interface ChannelDescribeFlowComponentsRequest {
  /**
   * 关于渠道应用的相关信息，包括渠道应用标识、第三方平台子客企业标识及第三方平台子客企业中的员工标识等内容，您可以参阅开发者中心所提供的 Agent 结构体以获取详细定义。

此接口下面信息必填。
<ul>
<li>渠道应用标识:  Agent.AppId</li>
<li>第三方平台子客企业标识: Agent.ProxyOrganizationOpenId</li>
<li>第三方平台子客企业中的员工标识: Agent. ProxyOperator.OpenId</li>
</ul>
第三方平台子客企业和员工必须已经经过实名认证
   */
  Agent: Agent
  /**
   * 需要获取填写控件填写内容的合同流程ID
   */
  FlowId: string
}