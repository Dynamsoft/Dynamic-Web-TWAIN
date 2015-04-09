
function OnWebTwainNotFoundOnWindowsCallback(ProductName, InstallerUrl) {
    var ObjString = [
		'<div class="dwt-box-title">',
		ProductName,
		' is not installed</div>',
		'<ul>',
		'<li>If you have already installed Dynamic Web TWAIN, please wait a few seconds for it to initialize.</li>',
		'<li>If you haven\'t installed Dynamic Web TWAIN, Please click the below button to download it. ',
		'You need to manually install it after the downloading.</li>',
		'</ul>',
		'<p class="dwt-red">If you still see this dialog after the installation, please REFRESH your browser.</p>',
		'<a id="dwt-btn-install" target="_blank" href="',
		InstallerUrl,
		'" onclick="Dynamsoft_OnClickInstallButton()"><div class="dwt-button"></div></a>',
		];

	Dynamsoft.WebTwainEnv.ShowDialog(392, 310, ObjString.join(''));
}

function OnWebTwainNotFoundOnMacCallback(ProductName, InstallerUrl) {
    var ObjString =
        [
		'<div class="dwt-box-title">',
		ProductName,
		' is not installed</div>',
		'<ul>',
		'<li>Please click the below button to download and install it.</li>',
		'</ul>',
		'<p class="dwt-red">If you still see this dialog after the installation, please REFRESH your browser.</p>',
		'If you are using Safari 5.0, you need to <a href="http://kb.dynamsoft.com/questions/666/How+to+run+Safari+5.0+in+32-bit+mode+on+Mac+OS+X"><span class="link">run the browser in 32-bit Mode</span></a>.',
		'<a id="dwt-btn-install" target="_blank" href="',
		InstallerUrl,
		'" onclick="Dynamsoft_OnClickInstallButton()"><div class="dwt-button"></div></a>',
		];

	Dynamsoft.WebTwainEnv.ShowDialog(392, 277, ObjString.join(''));
}

function OnWebTwainOldPluginNotAllowedCallback(ProductName) {
    var ObjString = [
		'<div class="dwt-box-title">',
		ProductName,
		' plugin is not allowed to run on this site.</div>',
		'<ul>',
		'<li>Please click "<b>Always run on this site</b>" for the prompt "',
		ProductName,
		' Plugin needs your permission to run", then <a href="javascript:void(0);" style="color:blue" class="ClosetblCanNotScan">close</a> this dialog OR refresh/restart the browser and try again.</li>',
		'</ul>'];

	Dynamsoft.WebTwainEnv.ShowDialog(392, 227, ObjString.join(''));
}

function OnWebTwainNeedUpgradeCallback(ProductName, InstallerUrl){
	var ObjString = ['<div class="dwt-box-title"></div>',
		'<div style="font-size: 15px;">',
		'This page is using a newer version of Dynamic Web TWAIN than your local copy. Please download and upgrade now.',
		'</div>',
		'<a id="dwt-btn-install" target="_blank" href="',
		InstallerUrl,
		'" onclick="Dynamsoft_OnClickInstallButton()"><div class="dwt-button"></div></a>',
		'<p class="dwt-red">Please REFRESH your browser after the upgrade.</p>'];

	Dynamsoft.WebTwainEnv.ShowDialog(392, 227, ObjString.join(''));
}
