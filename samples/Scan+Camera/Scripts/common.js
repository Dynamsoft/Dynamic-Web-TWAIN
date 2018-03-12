var dynamsoft = dynamsoft || {};

(function(){
	
    var ua = navigator.userAgent.toLowerCase(),
        _platform = navigator.platform.toLowerCase(),

        _bWin = (_platform == 'win32') || (_platform == 'win64') || (_platform == 'windows'),
		
        _nMSIE = ua.indexOf('msie'),
        _nTrident = ua.indexOf('trident'),
        _nRV = ua.indexOf('rv:'),
        _nEdge = ua.indexOf('edge'),

        _tmp = ua.match(/version\/([\d.]+).*safari/),
        _bSafari = _tmp ? !0 : !1,
        _nSafari = _tmp ? _tmp[1] : 0,

		_nFirefox = ua.indexOf('firefox'),
		_bFirefox = (_nFirefox != -1),
		
		_bEdge = _bWin && !_bFirefox && (_nEdge != -1),
		
		_indexOfChrome = ua.indexOf('chrome'),
		_bChrome =  !_bEdge && (_indexOfChrome != -1),

		_bIE = _bWin && !_bFirefox && !_bEdge && !_bChrome && (_nMSIE != -1 || _nTrident != -1 || _nRV != -1),

		_strBrowserVersion = '',
		_mainVer = 0;
	

	var _deviceType,
		bIsIpad = ua.match(/ipad/i) == "ipad",
		bIsIphoneOs = ua.match(/iphone os/i) == "iphone os",
		bIsMidp = ua.match(/midp/i) == "midp",
		bIsUc7 = ua.match(/rv:1.2.3.4/i) == "rv:1.2.3.4",
		bIsUc = ua.match(/ucweb/i) == "ucweb",
		bIsAndroid = ua.match(/android/i) == "android",
		bIsCE = ua.match(/windows ce/i) == "windows ce",
		bIsWM = ua.match(/windows mobile/i) == "windows mobile";
		
	if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
		_deviceType = 'phone'; 
	} else {
		_deviceType = 'pc'; 
	}  


    if(_bEdge) {
		_tmp = ua.slice(_nEdge + 5);
		_tmp = _tmp.slice(0, _tmp.indexOf(' '));
		_strBrowserVersion = _tmp;
		
	} else if (_bChrome) {
		_tmp = ua.slice(_indexOfChrome + 7);
		_tmp = _tmp.slice(0, _tmp.indexOf(' '));
		_strBrowserVersion = _tmp;

    } else if (_bFirefox) {	// FF
        _tmp = ua.slice(_nFirefox + 8);
        _tmp = _tmp.slice(0, _tmp.indexOf(' '));
        _strBrowserVersion = _tmp;

    } else if (_bIE) {
        if (_nMSIE != -1) {
            // 'msie'
            _tmp = ua.slice(_nMSIE + 4);
            _tmp = _tmp.slice(0, _tmp.indexOf(';'));
            _strBrowserVersion = _tmp;
        } else if (_nRV != -1) {
            // 'rv:'
            _tmp = ua.slice(_nRV + 3);
            _tmp = _tmp.slice(0, _tmp.indexOf(';'));
            _tmp = _tmp.slice(0, _tmp.indexOf(')'));
            _strBrowserVersion = _tmp;
        } else if (_nTrident != -1) {
            // 'trident'
            _tmp = ua.slice(_nTrident + 7);
            _tmp = _tmp.slice(0, _tmp.indexOf(';'));
            _strBrowserVersion = _tmp;
        }


    } else if (_bSafari) {
        if (_tmp) {
            _strBrowserVersion = _tmp[1];
        }
    }

    if(_strBrowserVersion.indexOf('.') > -1)
        _mainVer = _strBrowserVersion.slice(0, _strBrowserVersion.indexOf('.')) * 1.0;
	
	dynamsoft.onlineNavInfo = {
		bWin: _bWin,
		
		bIE: _bIE,
		bEdge: _bEdge,
		bFirefox: _bFirefox,
		bChrome: _bChrome,
		bSafari: _bSafari,
		
		strVersion: _strBrowserVersion,
        mainVer: _mainVer,
		deviceType: _deviceType
		
	};
})();
