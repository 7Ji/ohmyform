'use strict';

angular.module('forms').config(['$translateProvider', function ($translateProvider) {

	$translateProvider.translations('cn', {

		//Configure Form Tab View
		ADVANCED_SETTINGS: '高级设置',
		FORM_NAME: '你的表单叫做:',
		FORM_STATUS: '状态：',
		PUBLIC: '公开',
		PRIVATE: '私有',
		GA_TRACKING_CODE: '谷歌分析跟踪代码',
		DISPLAY_FOOTER: '包含页尾',
		SAVE_CHANGES: '保存更改',
		CANCEL: '取消',
		DISPLAY_START_PAGE: '包含起始页',
		DISPLAY_END_PAGE: '包含结束页',
		GENERAL_TAB: '全局',
		SELF_NOTIFICATIONS_TAB: '通知给我',
		RESPONDENT_NOTIFICATIONS_TAB: '通知给填表者',

		SEND_NOTIFICATION_TO: '发送给',
		NO_EMAIL_FIELD_WARNING: '错误：你需要在表单中设置电子邮件栏才能发送邮件给填表人',
		REPLY_TO: '回复',
		EMAIL_SUBJECT: '主题',
		EMAIL_MESSAGE: '信息',
		ENABLE_RESPONDENT_NOTIFICATIONS: '填表人通知目前',
		ENABLE_SELF_NOTIFICATIONS: '制表人通知目前',
		TOGGLE_ENABLED: '启用',
		TOGGLE_DISABLED: '禁用',
		ADD_VARIABLE_BUTTON: '增加变量',

		//List Forms View
		CREATE_A_NEW_FORM: '创建新表单',
		CREATE_FORM: '创建表单',
		CREATED_ON: '创建于',
		MY_FORMS: '我的表单',
		NAME: '名称',
		LANGUAGE: '语言',
		FORM_PAUSED: '表单已暂停收集',

		//Edit Field Modal
		EDIT_FIELD: '编辑此字段',
		SAVE_FIELD: '保存',
		ON: '开',
		OFF: '关',
		REQUIRED_FIELD: '必选',
		LOGIC_JUMP: '逻辑跳转',
		SHOW_BUTTONS: '额外的按钮',
		SAVE_START_PAGE: '保存',
		ADD_OPTIONS_PLACEHOLDER: '每行添加一个选项，至少需要一个选项',

		//Admin Form View
		ARE_YOU_SURE: '你真的确定吗？',
		READ_WARNING: '如果你不阅读以下内容，将会发生意想不到的坏事!',
		DELETE_WARNING1: '此操作无法撤消。这将永久删除 "',
		DELETE_WARNING2: '" 表单并删除所有与之关联的表单提交记录',
		DELETE_CONFIRM: '请输入表单的名字来确认',
		I_UNDERSTAND: '我明白后果，删除此表单',
		DELETE_FORM_SM: '删除',
		DELETE_FORM_MD: '删除此表单',
		DELETE: '删除',
		FORM: '表单',
		VIEW_MY_OHMYFORM: '浏览我的表单',
		LIVE: '收集中',
		PREVIEW: '预览',

		//Share Tab
		COPIED_LABEL: '已复制',
		COPY: '复制',
		COPY_AND_PASTE: '将此内容复制到你的网站上从而将此表单添加到你的网站上',
		CHANGE_WIDTH_AND_HEIGHT: '修改宽度和高度已符合你的需求',
		POWERED_BY: '版权所有',
		OHMYFORM_URL: '你的表单将可以通过此链接访问',

		//Edit Form View
		DISABLED: '禁用',
		YES: '是',
		NO: '否',
		ADD_LOGIC_JUMP: '添加逻辑跳转',
		ADD_FIELD_LG: '单击以添加新问题',
		ADD_FIELD_MD: '添加新字段',
		ADD_FIELD_SM: '添加字段',
		EDIT_START_PAGE: '编辑起始页',
		EDIT_END_PAGE: '编辑结束页',
		WELCOME_SCREEN: '起始页',
		END_SCREEN: '结束页',
		INTRO_TITLE: '标题',
		INTRO_PARAGRAPH: '段落',
		INTRO_BTN: '开始按钮',
		TITLE: '标题',
		PARAGRAPH: '段落',
		BTN_TEXT: '返回按钮',
		BUTTONS: '按钮',
		BUTTON_TEXT: '文本',
		BUTTON_LINK: '链接',
		ADD_BUTTON: '增加按钮',
		PREVIEW_FIELD: '预览问题',
		QUESTION_TITLE: '标题',
		QUESTION_DESCRIPTION: '描述',
		OPTIONS: '选项',
		ADD_OPTION: '增加选项',
		NUM_OF_STEPS: '步长值',
		CLICK_FIELDS_FOOTER: '单击左侧问题以将之添加到这里',
		SHAPE: '形状',
		IF_THIS_FIELD: '如果此字段',
		IS_EQUAL_TO: '等于',
		IS_NOT_EQUAL_TO: '不等于',
		IS_GREATER_THAN: '大于',
		IS_GREATER_OR_EQUAL_THAN: '大于等于',
		IS_SMALLER_THAN: '小于',
		IS_SMALLER_OR_EQUAL_THAN: '小于等于',
		CONTAINS: '包含',
		DOES_NOT_CONTAINS: '不包含',
		ENDS_WITH: '以此内容结尾',
		DOES_NOT_END_WITH: '不以此内容结尾',
		STARTS_WITH: '由此内容开头',
		DOES_NOT_START_WITH: '不由此内容开头',
		THEN_JUMP_TO: '便跳转到',

		//Edit Submissions View
		TOTAL_VIEWS: '总唯一浏览数',
		RESPONSES: '响应数',
		COMPLETION_RATE: '完成率',
		AVERAGE_TIME_TO_COMPLETE: '平均完成时间',

		DESKTOP_AND_LAPTOP: '台式机或笔记本',
		TABLETS: '平板电脑',
		PHONES: '收集',
		OTHER: '其他',
		UNIQUE_VISITS: '唯一访问数',

		FIELD_TITLE: '字段标题',
		FIELD_VIEWS: '字段浏览',
		FIELD_DROPOFF: '字段完成度',
		FIELD_RESPONSES: '字段响应数',
		DELETE_SELECTED: '删除选中',
		EXPORT_TO_EXCEL: '导出为Excel',
		EXPORT_TO_CSV: '导出为CSV',
		EXPORT_TO_JSON: '导出为JSON',
		PERCENTAGE_COMPLETE: '填写完整度',
		TIME_ELAPSED: '已用时间',
		DEVICE: '设备',
		LOCATION: '位置',
		IP_ADDRESS: 'IP地址',
		DATE_SUBMITTED: '提交日期',

		//Design View
		BACKGROUND_COLOR: '背景颜色',
		DESIGN_HEADER: '更改表单的外观',
		QUESTION_TEXT_COLOR: '问题文本颜色',
		ANSWER_TEXT_COLOR: '回答文本颜色',
		BTN_BACKGROUND_COLOR: '按钮背景色',
		BTN_TEXT_COLOR: '按钮文本色',

	    //Share View
	    EMBED_YOUR_FORM: '嵌入你的表单',
	    SHARE_YOUR_FORM: '分享你的表单',

		//Admin Tabs
		CREATE_TAB: '编辑问题',
		DESIGN_TAB: '表单设计',
		CONFIGURE_TAB: '表单选项',
		ANALYZE_TAB: '结果分析',
    SHARE_TAB: '表单分享',

	    //Field Types
	    SHORT_TEXT: '短文本',
	    EMAIL: '电子邮件地址',
	    MULTIPLE_CHOICE: '多选题',
	    DROPDOWN: '下拉框',
	    DATE: '日期',
	    PARAGRAPH_FIELD: '段落',
	    YES_NO: '是非题',
	    LEGAL: '是否接受（通常用于条款）',
	    RATING: '等级',
	    NUMBERS: '数字',
	    SIGNATURE: '签字',
	    FILE_UPLOAD: '文件上传',
	    OPTION_SCALE: '选项比例',
	    PAYMENT: '付款',
	    STATEMENT: '说明文本',
	    LINK: '链接',

	    //Form Preview
	    FORM_SUCCESS: '表单条目提交成功！',
		REVIEW: '检查',
	    BACK_TO_FORM: '回到表单',
		EDIT_FORM: '编辑此表单',
		ADVANCEMENT: '{{done}} / {{total}} 已回答',
		CONTINUE_FORM: '继续表单',
		REQUIRED: '必选',
		COMPLETING_NEEDED: '{{answers_not_completed}} 处答案需要填写',
		OPTIONAL: '可选',
		ERROR_EMAIL_INVALID: '请输入合法的电子邮件地址',
		ERROR_NOT_A_NUMBER: '请输入合法的数字',
		ERROR_URL_INVALID: '请输入合法的链接',
		OK: '好',
		ENTER: '请按ENTER',
		NEWLINE: '请按SHIFT+ENTER换行',
		CONTINUE: '继续',
		LEGAL_ACCEPT: '我接受',
		LEGAL_NO_ACCEPT: '我不接受',
		SUBMIT: '提交',
		UPLOAD_FILE: '上传文件'
	});
}]);
