import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { SetVocabStateResponse, CreateCustomizationResponse, VoicePrintDeleteRequest, DescribeAsyncRecognitionTasksRequest, ModifyCustomizationStateRequest, GetAsrVocabResponse, VoicePrintEnrollResponse, VoicePrintUpdateRequest, CreateAsyncRecognitionTaskRequest, GetAsrVocabRequest, DescribeTaskStatusResponse, SentenceRecognitionRequest, CloseAsyncRecognitionTaskResponse, CreateCustomizationRequest, DownloadAsrVocabResponse, CreateRecTaskResponse, ModifyCustomizationResponse, GetModelInfoRequest, CreateAsyncRecognitionTaskResponse, VoicePrintDeleteResponse, DeleteAsrVocabResponse, DownloadCustomizationResponse, CreateRecTaskRequest, GetAsrVocabListRequest, GetCustomizationListResponse, VoicePrintVerifyRequest, DownloadAsrVocabRequest, SetVocabStateRequest, CloseAsyncRecognitionTaskRequest, ModifyCustomizationRequest, DeleteCustomizationResponse, DeleteAsrVocabRequest, GetCustomizationListRequest, UpdateAsrVocabResponse, VoicePrintEnrollRequest, VoicePrintVerifyResponse, CreateAsrVocabResponse, CreateAsrVocabRequest, GetModelInfoResponse, UpdateAsrVocabRequest, VoicePrintCountRequest, DescribeTaskStatusRequest, SentenceRecognitionResponse, VoicePrintUpdateResponse, DeleteCustomizationRequest, VoicePrintCountResponse, ModifyCustomizationStateResponse, DescribeAsyncRecognitionTasksResponse, GetAsrVocabListResponse, DownloadCustomizationRequest } from "./asr_models";
/**
 * asr client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 用户通过本接口进行对应的词表信息更新。
     */
    UpdateAsrVocab(req: UpdateAsrVocabRequest, cb?: (error: string, rep: UpdateAsrVocabResponse) => void): Promise<UpdateAsrVocabResponse>;
    /**
     * 本接口用于对语音流进行准实时识别，通过异步回调来返回识别结果。适用于直播审核等场景。
<br>• 支持rtmp、rtsp等流媒体协议，以及各类基于http协议的直播流(不支持hls)
<br>• 音频流时长无限制，服务会自动拉取音频流数据，若连续10分钟拉不到流数据时，服务会终止识别任务
<br>• 服务通过回调的方式来提供识别结果，用户需要提供CallbackUrl。回调时机为一小段话(最长15秒)回调一次。
<br>• 签名方法参考 [公共参数](https://cloud.tencent.com/document/api/1093/35640) 中签名方法v3。
<br>• 默认单账号限制并发数为20路，如您有提高并发限制的需求，请提[工单](https://console.cloud.tencent.com/workorder/category)进行咨询。
     */
    CreateAsyncRecognitionTask(req: CreateAsyncRecognitionTaskRequest, cb?: (error: string, rep: CreateAsyncRecognitionTaskResponse) => void): Promise<CreateAsyncRecognitionTaskResponse>;
    /**
     * 查询自学习模型列表
     */
    GetCustomizationList(req: GetCustomizationListRequest, cb?: (error: string, rep: GetCustomizationListResponse) => void): Promise<GetCustomizationListResponse>;
    /**
     * 统计并返回注册的说话人id总数
     */
    VoicePrintCount(req?: VoicePrintCountRequest, cb?: (error: string, rep: VoicePrintCountResponse) => void): Promise<VoicePrintCountResponse>;
    /**
     * 用户通过该接口，可获得所有的热词表及其信息。
     */
    GetAsrVocabList(req: GetAsrVocabListRequest, cb?: (error: string, rep: GetAsrVocabListResponse) => void): Promise<GetAsrVocabListResponse>;
    /**
     * 用户根据词表的ID可以获取对应的热词表信息
     */
    GetAsrVocab(req: GetAsrVocabRequest, cb?: (error: string, rep: GetAsrVocabResponse) => void): Promise<GetAsrVocabResponse>;
    /**
     * 用户通过该接口可以设置热词表的默认状态。初始状态为0，用户可设置状态为1，即为默认状态。默认状态表示用户在请求识别时，如不设置热词表ID，则默认使用状态为1的热词表。
     */
    SetVocabState(req: SetVocabStateRequest, cb?: (error: string, rep: SetVocabStateResponse) => void): Promise<SetVocabStateResponse>;
    /**
     * 用户通过本接口进行热词表的下载，获得词表权重文件形式的 base64 值，文件形式为通过 “|” 分割的词和权重，即 word|weight 的形式。
     */
    DownloadAsrVocab(req: DownloadAsrVocabRequest, cb?: (error: string, rep: DownloadAsrVocabResponse) => void): Promise<DownloadAsrVocabResponse>;
    /**
     * 用户使用该接口可以创建自学习模型，以供识别调用。

注意：调用该接口后，模型会自动训练。新建模型成功后，调用ModifyCustomizationState接口修改为上线状态，即可在识别请求中使用对应模型ID。
     */
    CreateCustomization(req: CreateCustomizationRequest, cb?: (error: string, rep: CreateCustomizationResponse) => void): Promise<CreateCustomizationResponse>;
    /**
     * 用户通过本接口进行热词表的删除。
     */
    DeleteAsrVocab(req: DeleteAsrVocabRequest, cb?: (error: string, rep: DeleteAsrVocabResponse) => void): Promise<DeleteAsrVocabResponse>;
    /**
     * 本接口用于对60秒之内的短音频文件进行识别。<br>•   支持中文普通话、英语、粤语、日语、越南语、马来语、印度尼西亚语、菲律宾语、泰语、葡萄牙语、土耳其语、阿拉伯语、印地语、法语、上海话、四川话、武汉话、贵阳话、昆明话、西安话、郑州话、太原话、兰州话、银川话、西宁话、南京话、合肥话、南昌话、长沙话、苏州话、杭州话、济南话、天津话、石家庄话、黑龙江话、吉林话、辽宁话。<br>•   支持本地语音文件上传和语音URL上传两种请求方式，音频时长不能超过60s，音频文件大小不能超过3MB。<br>•   音频格式支持wav、pcm、ogg-opus、speex、silk、mp3、m4a、aac。<br>•   请求方法为 HTTP POST , Content-Type为"application/json; charset=utf-8"<br>•   签名方法参考 [公共参数](https://cloud.tencent.com/document/api/1093/35640) 中签名方法v3。<br>•   默认接口请求频率限制：30次/秒，如您有提高请求频率限制的需求，请[前往购买](https://buy.cloud.tencent.com/asr)。
     */
    SentenceRecognition(req: SentenceRecognitionRequest, cb?: (error: string, rep: SentenceRecognitionResponse) => void): Promise<SentenceRecognitionResponse>;
    /**
     * 本接口可对较长的录音文件进行识别。如希望直接使用带界面的语音识别产品，请访问[产品体验中心](https://console.cloud.tencent.com/asr/demonstrate)。产品计费标准请查阅 [计费概述（在线版）](https://cloud.tencent.com/document/product/1093/35686)
• 接口默认限频：20次/秒。此处仅限制任务提交频次，与识别结果返回时效无关
• 返回时效：异步回调，非实时返回。最长3小时返回识别结果，**大多数情况下，1小时的音频1-3分钟即可完成识别**。请注意：上述返回时长不含音频下载时延，且30分钟内发送超过1000小时录音或2万条任务的情况除外
• 音频格式：wav、mp3、m4a、flv、mp4、wma、3gp、amr、aac、ogg-opus、flac
• 支持语言：在本页面上搜索 **EngineModelType**，或前往 [产品功能](https://cloud.tencent.com/document/product/1093/35682) 查看
• 音频提交方式：本接口支持**音频 URL 、本地音频文件**两种请求方式。推荐使用 [腾讯云COS](https://cloud.tencent.com/document/product/436/38484) 来存储、生成URL并提交任务，此种方式将不产生外网和流量下行费用，可节约成本、提升任务速度（COS桶权限需要设置公有读私有写，或URL设置外部可访问）
• 音频限制：音频 URL 时长不能大于5小时，文件大小不超过1GB；本地音频文件不能大于5MB
• 如何获取识别结果：支持**回调或轮询**的方式获取结果，具体请参考 [录音文件识别结果查询](https://cloud.tencent.com/document/product/1093/37822)
• 识别结果有效时间：在服务端保存7天
• 签名方法参考 [公共参数](https://cloud.tencent.com/document/api/1093/35640) 中签名方法 v3
     */
    CreateRecTask(req: CreateRecTaskRequest, cb?: (error: string, rep: CreateRecTaskResponse) => void): Promise<CreateRecTaskResponse>;
    /**
     * 在调用录音文件识别请求接口后，有回调和轮询两种方式获取识别结果。
<br>• 当采用回调方式时，识别完成后会将结果通过 POST 请求的形式通知到用户在请求时填写的回调 URL，具体请参见[ 录音识别结果回调 ](https://cloud.tencent.com/document/product/1093/52632)。
<br>• 当采用轮询方式时，需要主动提交任务ID来轮询识别结果，共有任务成功、等待、执行中和失败四种结果，具体信息请参见下文说明。
<br>•   请求方法为 HTTP POST , Content-Type为"application/json; charset=utf-8"
<br>•   签名方法参考 [公共参数](https://cloud.tencent.com/document/api/1093/35640) 中签名方法v3。
<br>•   默认接口请求频率限制：50次/秒，如您有提高请求频率限制的需求，请提[工单](https://console.cloud.tencent.com/workorder/category)进行咨询。
     */
    DescribeTaskStatus(req: DescribeTaskStatusRequest, cb?: (error: string, rep: DescribeTaskStatusResponse) => void): Promise<DescribeTaskStatusResponse>;
    /**
     * 说话人注册接口用于注册一个指定音频，生成一个唯一的说话人id，后续可通过说话人验证接口验证其它音频和已有的说话人ID匹配度，注册时可指定说话人昵称，方便标识说话人ID，  说话人昵称可重复配置。
（注: 一个appid最多可以注册1000个说话人ID，一个说话人ID仅支持一条音频注册，后续可通过更新接口进行更新）

使用须知
支持的输入格式：编码文件(PCM, WAV)、16 bit采样位数、单声道（mono）。

支持的音频采样率：16000 Hz。
     */
    VoicePrintEnroll(req: VoicePrintEnrollRequest, cb?: (error: string, rep: VoicePrintEnrollResponse) => void): Promise<VoicePrintEnrollResponse>;
    /**
     * 本接口用于校验传入音频与已注册音频的匹配程度，通过指定说话人ID（VoicePrintId）和一段音频进行音频和说话人的匹配度判断
     */
    VoicePrintVerify(req: VoicePrintVerifyRequest, cb?: (error: string, rep: VoicePrintVerifyResponse) => void): Promise<VoicePrintVerifyResponse>;
    /**
     * 本接口用于查询当前在运行的语音流异步识别任务列表。
<br>•   签名方法参考 [公共参数](https://cloud.tencent.com/document/api/1093/35640) 中签名方法v3。
     */
    DescribeAsyncRecognitionTasks(req?: DescribeAsyncRecognitionTasksRequest, cb?: (error: string, rep: DescribeAsyncRecognitionTasksResponse) => void): Promise<DescribeAsyncRecognitionTasksResponse>;
    /**
     * 本接口用于以删除已经注册的说话人信息（删除之后，原有的说话人ID和说话人音频数据都会失效）
     */
    VoicePrintDelete(req: VoicePrintDeleteRequest, cb?: (error: string, rep: VoicePrintDeleteResponse) => void): Promise<VoicePrintDeleteResponse>;
    /**
     * 本接口用于更新和覆盖已注册的音频数据和说话人昵称，更新后原有的音频数据将失效。
     */
    VoicePrintUpdate(req: VoicePrintUpdateRequest, cb?: (error: string, rep: VoicePrintUpdateResponse) => void): Promise<VoicePrintUpdateResponse>;
    /**
     * 用户通过该接口可以更新自学习模型，如模型名称、模型类型、模型语料。
     */
    ModifyCustomization(req: ModifyCustomizationRequest, cb?: (error: string, rep: ModifyCustomizationResponse) => void): Promise<ModifyCustomizationResponse>;
    /**
     * 本接口用于关闭语音流异步识别任务。
     */
    CloseAsyncRecognitionTask(req: CloseAsyncRecognitionTaskRequest, cb?: (error: string, rep: CloseAsyncRecognitionTaskResponse) => void): Promise<CloseAsyncRecognitionTaskResponse>;
    /**
     * 通过自学习模型id获取自学习模型详细信息
     */
    GetModelInfo(req: GetModelInfoRequest, cb?: (error: string, rep: GetModelInfoResponse) => void): Promise<GetModelInfoResponse>;
    /**
     * 通过该接口，用户可以修改自学习模型状态，上下线自学习模型
     */
    ModifyCustomizationState(req: ModifyCustomizationStateRequest, cb?: (error: string, rep: ModifyCustomizationStateResponse) => void): Promise<ModifyCustomizationStateResponse>;
    /**
     * 用户通过本接口进行热词表的创建。
<br>•   默认最多可创建30个热词表。
<br>•   每个热词表最多可添加1000个词，每个词最长10个汉字或30个英文字符，不能超出限制。
<br>•   热词表可以通过数组或者本地文件形式上传。
<br>•   本地文件必须为UTF-8编码格式，每行仅添加一个热词且不能包含标点和特殊字符。
<br>•   热词权重取值范围为[1,11]之间的整数，权重越大代表该词被识别出来的概率越大。
<br>• 注意:  热词权重设置为11时，当前热词将升级为超级热词，建议仅将重要且必须生效的热词设置到11，设置过多权重为11的热词将影响整体字准率。
     */
    CreateAsrVocab(req: CreateAsrVocabRequest, cb?: (error: string, rep: CreateAsrVocabResponse) => void): Promise<CreateAsrVocabResponse>;
    /**
     * 用户通过该接口可以删除自学习模型
     */
    DeleteCustomization(req: DeleteCustomizationRequest, cb?: (error: string, rep: DeleteCustomizationResponse) => void): Promise<DeleteCustomizationResponse>;
    /**
     * 用户通过该接口可以下载自学习模型的语料
     */
    DownloadCustomization(req: DownloadCustomizationRequest, cb?: (error: string, rep: DownloadCustomizationResponse) => void): Promise<DownloadCustomizationResponse>;
}
