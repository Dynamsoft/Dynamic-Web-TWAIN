function isDesktopFunc() {

    "use strict";

	var getNavInfoByUserAgent = function(a_userAgent, a_platform) {

		var ua = a_userAgent.toLowerCase(),
			_platform = a_platform.toLowerCase(),
			
			_bChromeOS = (/cros/).test(ua),
			_bAndroid = (/android/g).test(ua),
			_biPhone = (/iphone/g).test(ua) || (/iphone/g).test(_platform),
			
			_bPadOrMacDesktop = (/macintosh/).test(ua),	// maybe iPad or MAC Desktop
			_biPad = (/ipad/g).test(ua) || ((_bPadOrMacDesktop||(_platform=='macintel')) && navigator.maxTouchPoints && navigator.maxTouchPoints > 1),
			
			_bUC = (/ucweb|ucbrowser/g).test(ua),
			_bNexus = !_bUC && (/nexus/g).test(ua) && (/version\/[\d.]+.*safari\//g).test(ua),

			_bPlaybook = (/playbook/g).test(ua),
			_bHpTablet = (/hp-tablet/g).test(ua),
			_bBlackBerry = (/blackberry|bb10/g).test(ua),
			_bSymbian = (/symbian/g).test(ua),
			_bWindowsPhone = (/windows phone/g).test(ua);

		var _bPad = _bPlaybook || _biPad || _bHpTablet,		
			_bMobile = _biPhone || _bNexus ||
					   _bBlackBerry || _bSymbian || _bWindowsPhone || _bAndroid,

			_bNotMobileOS = !_bMobile && !_bPad && !_bChromeOS,

			_bWin = _bNotMobileOS && (/win32|win64|windows/).test(_platform),
			_bWin64 = _bWin && (/win64|x64/).test(ua),

			_bMac = _bNotMobileOS && (/mac68k|macppc|macintosh|macintel/).test(ua),
			_bLinux = _bNotMobileOS && (/linux/).test(_platform);

		return {

			bWin: _bWin,
			bMac: _bMac,
			bLinux: _bLinux
		};
	};
	
	var getNavInfoByUAData = function(a_highEntData){
		
		var fnGetNavInfo = function(highEntData){
			
			var uaData = navigator['userAgentData'],
				_platform = highEntData.platform.toLowerCase(),				// Windows
				_bMac = (_platform.indexOf('mac')>=0);
				
			return {

				bWin: (_platform == 'windows'),
				bMac: _bMac,
				bLinux: (_platform == 'linux')
			};	
		};
		
		if(a_highEntData) {
			return Promise.resolve(function(){
				return fnGetNavInfo(a_highEntData);
			});
		}
		
		return navigator['userAgentData']
			.getHighEntropyValues([
				"platform",         // Windows
				"platformVersion", 	// "10.0; "         (win10)
				"architecture" 		// Win64; x64
			])
			.then(fnGetNavInfo);
	};

	return new Promise(function(resolve,reject){

		if('userAgentData' in navigator) {
			getNavInfoByUAData().then(function(navInfo){
				resolve(navInfo.bWin || navInfo.bMac || navInfo.bLinux);
			}, reject);

		} else {
			// by old userAgent
			var _navInfo = getNavInfoByUserAgent(navigator.userAgent, navigator.platform);
			resolve(_navInfo.bWin || _navInfo.bMac || _navInfo.bLinux);
		}
	});
};
