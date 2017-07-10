//初始化Framework7
var myApp = new Framework7({
	modalTitle: '农业专家系统',
	cache: true,
	template7Pages: true,
	material: true,
	activeState: false,
	pushState: false,
	modalButtonOk: "确定",
	modalButtonCancel: "取消",
	//	tapHold: true,
	init: true,
	materialRipple: false
	
	
});
var mainView = myApp.addView('.view-main', {
    domCache: true //enable inline pages
});

var $$ = Dom7;
