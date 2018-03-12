var dynamsoft = dynamsoft || {};
dynamsoft.dbrMasterPage20170526 = new function () {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var IsPC = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            IsPC = false;
            break;
        }
    }
    if (!IsPC) {
        location.href = "http://demo1.dynamsoft.com/dbr/mobilecam/MobilecamBarcodeReader.html";
    }

    var isIe6 = !-[1,]&&!window.XMLHttpRequest;
    this.getDialog = function(content) {
        var arr = [];
        var ts = (new Date()).getTime();
        arr.push("<div id='dbrDemo20170526Dlg" + ts + "' style='position:fixed; left:0; top:0; font-family: verdana, sans-serif; width:100%; height:100%; *height:expression(document.documentElement.clientHeight+\"px\"); _position:absolute; _height:expression(document.documentElement.scrollHeight+\"px\"); z-index: 500000'>");
        // fog
        arr.push("<div style='position:absolute; left:0; top:0; width: 100%; height: 100%; z-index: 500000; background-color: #000; opacity: 0.3; filter: alpha(opacity:30)\\9;'></div>");
        // main dialog
        arr.push(   "<div class='position-fixed-cm' style='width: 392px; height: 274px; *margin-left:-196px; *margin-top:-137px; padding: 5px; z-index: 500002; border: 1px solid #e7e7e7; background-color: #f1f2f2; overflow-y:hidden;'>");
        arr.push(       "<div style='height: 264px; padding: 15px; border: 1px solid #e7e7e7; background-color: #fff;'>");
        arr.push(           "<img src='image/logo.gif' style='margin-bottom:10px'>");
        // ie6 has some problem if click to remove, so use hide
        arr.push(           "<div class='dbrDemo20170526DlgCloseBtn' style='font-size: 12px; color: #0000ed; position: absolute; right: 15px; top: 15px; cursor: pointer; text-decoration: none;' onclick='document.getElementById(\"dbrDemo20170526Dlg" + ts + "\").style.display=\"none\"'>X</div>");
        arr.push(           content);
        arr.push(       "</div>");
        arr.push("</div>");

        // iframe for ie6
        if(isIe6){
            arr.push("<iframe frameborder=0 style='position:absolute; left:0; top:0; width: 100%; height:100%; filter:alpha(opacity:0); z-index: 499999;'></iframe>");
        }
        arr.push("</div>");
        return $(arr.join(''));
    };
};



