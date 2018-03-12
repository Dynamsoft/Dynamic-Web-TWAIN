// whether video container is visable
var isOnVideo = true;

document.getElementById("btn-grab").onclick = function(){
	if (!isOnVideo) return;
    if (!dcsObject) return;

    // pause the video
    dcsObject.camera.pauseVideo();

	// grab an image
    dcsObject.camera.captureImage('image-container');

    $('#video-container').hide();

    if (dcsObject.getErrorCode() !== EnumDCS_ErrorCode.OK) {
        alert('Capture error: ' + dcsObject.getErrorString());
    }

    var count = imageViewer.image.getCount();
    if (count > 0)
    {
        imageViewer.io.copyToClipboard(count - 1);
        DWObject.LoadDibFromClipboard();
        appendMessage('Grab an image successfully.<br />');
        updatePageInfo();
    }

	isOnVideo = false;
	document.getElementById("btn-grab").style.backgroundColor="#aaa";
	document.getElementById("btn-grab").style.borderColor="#aaa";
	document.getElementById("btn-grab").style.cursor = "default";
	document.getElementById("btn-switch").value = "Switch to Video Viewer";
};

document.getElementById("btn-switch").onclick = function(){
    if (document.getElementById("video-container").style.display == "none") {
        makeInPlayVideoStatus();
	}else{
	    // pause the video
	    dcsObject.camera.pauseVideo();
	    $('#video-container').hide();
	    isOnVideo = false;
	    document.getElementById("btn-grab").style.backgroundColor = "#aaa";
		document.getElementById("btn-grab").style.borderColor="#aaa";
		document.getElementById("btn-grab").style.cursor = "default";
	    document.getElementById("btn-switch").value = "Switch to Video Viewer";
	    
	}
};

document.getElementById("image-container").style.display = "none";

var dcsObject, imageViewer;

function onInitSuccess(videoViewerId, imageViewerId) {    

    console.log(dynamsoft.initOrder);

    dcsObject = dynamsoft.dcsEnv.getObject(videoViewerId);
    imageViewer = dcsObject.getImageViewer(imageViewerId);
    imageViewer.ui.setImageViewMode(1, 1);

    var cameraList = dcsObject.camera.getCameraList();
	dcs_init(cameraList);
	
	showLoadingLayer(false);
}

function onInitFailure(errorCode, errorString) {
    alert('Init failed: ' + errorString);
	
	showLoadingLayer(false);
};

function start_init_dcs() {

    if (document.getElementById("aNoScanner") && window['bDWTOnlineDemo']) {
        document.getElementById("aNoScanner").style.color = "Red";
        document.getElementById("aNoScanner").innerHTML = "<b>(No TWAIN compatible drivers detected)<b/>";
    }

    showLoadingLayer(true);
    dynamsoft.dcsEnv.init('video-container', 'image-container', onInitSuccess, onInitFailure);
}

window.onbeforeunload = function() {
    if (dcsObject) dcsObject.destroy();
};

//triggered when dcs service is not found
dynamsoft.dcsEnv.ondcsnotfound = function() {
    showLoadingLayer(false);
	return false;
};

//show or hide loading layer
function showLoadingLayer(bShow){
	var loaderContent = document.getElementById('loaderContent'),
		elLoadingLayer = document.getElementById('loadingLayer');

	loaderContent.style.display = bShow ? 'block' : 'none';
	elLoadingLayer.style.display = bShow ? 'block' : 'none';
}

var vWebcamCount;
function dcs_init(cameraList)
{
    var selWebcamSource = document.getElementById("webcamsource");

    vWebcamCount = cameraList.length;
    if (selWebcamSource) {
        for (var i = 0; i < cameraList.length; i++)
            selWebcamSource.options.add(new Option(cameraList[i], i)); // Get Webcam Source names and put them in a drop-down box
        
		if(vWebcamCount>0)
			selWebcamSource.selectedIndex = DWTSourceCount;
		else
			selWebcamSource.selectedIndex = DWTSourceCount-1;
    }

    dcs_source_onchange();

}

function makeInPlayVideoStatus()
{
    $('.D_dcsButtons').show();
    $('#video-container').show();
    $('.D_dwtButtons').hide();

    if (dcsObject)
        dcsObject.camera.playVideo();
    isOnVideo = true;

    document.getElementById("btn-grab").style.backgroundColor = "";
	document.getElementById("btn-grab").style.borderColor="";
	document.getElementById("btn-grab").style.cursor = "";
    document.getElementById("btn-switch").value = "Switch to Image Viewer";
}

function dcs_source_onchange()
{
    var selWebcamSource = document.getElementById("webcamsource");
    var curIndex = -1;
	if(selWebcamSource)
		curIndex = selWebcamSource.selectedIndex;

    var bDcsIndex = false, dcsIndex = -1;

    if (curIndex >= DWTSourceCount)
    {
        bDcsIndex = true;
        dcsIndex = curIndex - DWTSourceCount;
    }

    if (bDcsIndex) {
        // show dcs
        if (document.getElementById("divWebcamType"))
            document.getElementById("divWebcamType").style.display = "";
        if (document.getElementById("divProductDetail"))
            document.getElementById("divProductDetail").style.display = "none";
        if (document.getElementById("divWebcamDetail"))
            document.getElementById("divWebcamDetail").style.display = "";

		var curText = selWebcamSource.options[curIndex].text;
		dcsObject.camera.takeCameraOwnership(curText);

		makeInPlayVideoStatus();
        /*
        var countMediaType = -1;
        var countResolution = -1;
        var MediaType = document.getElementById("MediaType");
        if (MediaType) {
            MediaType.options.length = 0;
            var aryMediaType = DWObject.Addon.Webcam.GetMediaType();
            countMediaType = aryMediaType.GetCount();
            var i;
            var value;
            for (i = 0; i < countMediaType; i++) {
                value = aryMediaType.Get(i);
                MediaType.options.add(new Option(value, value));
            }
        }
    
        var ResolutionWebcam = document.getElementById("ResolutionWebcam");
        if (ResolutionWebcam) {
            ResolutionWebcam.options.length = 0;
            var aryResolution = DWObject.Addon.Webcam.GetResolution();
            countResolution = aryResolution.GetCount();
            for (i = 0; i < countResolution; i++) {
                value = aryResolution.Get(i);
                ResolutionWebcam.options.add(new Option(value, value));
            }
        }
    
        if (Dynamsoft.Lib.env.bWin) {
            if (countMediaType <= 0 || countResolution <= 0) {
                appendMessage('<b>Webcam source is currently occupied by other program.</b>');
            }
        }
    
        DWObject.Addon.Webcam.CloseSource();
        */
    }
    else {
        // show dwt
        if (document.getElementById("divWebcamType"))
            document.getElementById("divWebcamType").style.display = "none";
        if (document.getElementById("divProductDetail"))
            document.getElementById("divProductDetail").style.display = "";

        $('.D_dcsButtons').hide();
        $('#video-container').hide();
        $('.D_dwtButtons').show();

        source_onchange();
    }

}

function dcsAcquireImage() {
    DWObject.SelectSourceByIndex(document.getElementById("webcamsource").selectedIndex);
    DWObject.CloseSource();
    DWObject.OpenSource();
    DWObject.IfShowUI = document.getElementById("ShowUI").checked;

    var i;
    for (i = 0; i < 3; i++) {
        if (document.getElementsByName("PixelType").item(i).checked == true)
            DWObject.PixelType = i;
    }
    if (DWObject.ErrorCode != 0) {
        appendMessage('<b>Error setting PixelType value: </b>');
        appendMessage("<span style='color:#cE5E04'><b>" + DWObject.ErrorString + "</b></span><br />");
    }
    DWObject.Resolution = document.getElementById("Resolution").value;
    if (DWObject.ErrorCode != 0) {
        appendMessage('<b>Error setting Resolution value: </b>');
        appendMessage("<span style='color:#cE5E04'><b>" + DWObject.ErrorString + "</b></span><br />");
    }

    var bADFChecked = document.getElementById("ADF").checked;
    DWObject.IfFeederEnabled = bADFChecked;
    if (bADFChecked == true && DWObject.ErrorCode != 0) {
        appendMessage('<b>Error setting ADF value: </b>');
        appendMessage("<span style='color:#cE5E04'><b>" + DWObject.ErrorString + "</b></span><br />");
    }

    var bDuplexChecked = document.getElementById("Duplex").checked;
    DWObject.IfDuplexEnabled = bDuplexChecked;
    if (bDuplexChecked == true && DWObject.ErrorCode != 0) {
        appendMessage('<b>Error setting Duplex value: </b>');
        appendMessage("<span style='color:#cE5E04'><b>" + DWObject.ErrorString + "</b></span><br />");
    }
    if (Dynamsoft.Lib.env.bWin || (!Dynamsoft.Lib.env.bWin && DWObject.ImageCaptureDriverType == 0))
        appendMessage("Pixel Type: " + DWObject.PixelType + "<br />Resolution: " + DWObject.Resolution + "<br />");
    DWObject.IfDisableSourceAfterAcquire = true;
    DWObject.AcquireImage();
}
