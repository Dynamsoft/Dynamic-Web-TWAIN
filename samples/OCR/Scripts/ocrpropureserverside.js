window.onload = initValue;
var OCRFindTextFlags = [
        { desc: "whole word", val: 1 },
        { desc: "match case", val: 2 },
        { desc: "fuzzy match", val: 4 }
];
var OCRFindTextAction = [
        { desc: "highlight", val: 0 },
        { desc: "strikeout", val: 1 },
        { desc: "mark for redact", val: 2 }
];
var OCRLanguages = [
        { desc: "English", val: "eng" },
        { desc: "French", val: "french" },
        { desc: "Arabic", val: "arabic" },
        { desc: "Spanish", val: "spanish" },
        { desc: "Portuguese", val: "port" },
        { desc: "German", val: "german" },
        { desc: "Italian", val: "italian" },
        { desc: "Russian", val: "russian" }
];
var OCRRecognitionModule = [
        { desc: "auto", val: "AUTO" },
        { desc: "most accurate", val: "MOSTACCURATE" },
        { desc: "balanced", val: "BALANCED" },
        { desc: "fastest", val: "FASTEST" }
];
var OCROutputFormat = [
        { desc: "TXT", val: "TXTS" },
        { desc: "CSV", val: "TXTCSV" },
        { desc: "Text Formatted", val: "TXTF" },
        { desc: "XML", val: "XML" },
        { desc: "PDF", val: "IOTPDF" },
        { desc: "PDF with MRC compression", val: "IOTPDF_MRC" }
];
var OCRPDFVersion = [
        { desc: "", val: "" },
        { desc: "1.0", val: "1.0" },
        { desc: "1.1", val: "1.1" },
        { desc: "1.2", val: "1.2" },
        { desc: "1.3", val: "1.3" },
        { desc: "1.4", val: "1.4" },
        { desc: "1.5", val: "1.5" },
        { desc: "1.6", val: "1.6" },
        { desc: "1.7", val: "1.7" }

];
var OCRPDFAVersion = [
        { desc: "", val: "" },
        { desc: "pdf/a-1a", val: "pdf/a-1a" },
        { desc: "pdf/a-1b", val: "pdf/a-1b" },
        { desc: "pdf/a-2a", val: "pdf/a-2a" },
        { desc: "pdf/a-2b", val: "pdf/a-2b" },
        { desc: "pdf/a-2u", val: "pdf/a-2u" },
        { desc: "pdf/a-3a", val: "pdf/a-3a" },
        { desc: "pdf/a-3b", val: "pdf/a-3b" },
        { desc: "pdf/a-3u", val: "pdf/a-3u" }

];
function initValue() {
    for (var i = 0; i < OCRFindTextFlags.length; i++)
        document.getElementById("ddlFindTextFlags").options.add(new Option(OCRFindTextFlags[i].desc, OCRFindTextFlags[i].val));
    for (i = 0; i < OCRFindTextAction.length; i++)
        document.getElementById("ddlFindTextAction").options.add(new Option(OCRFindTextAction[i].desc, OCRFindTextAction[i].val));
    for (i = 0; i < OCRLanguages.length; i++)
        document.getElementById("ddlLanguages").options.add(new Option(OCRLanguages[i].desc, OCRLanguages[i].val));
    for (i = 0; i < OCROutputFormat.length; i++)
        document.getElementById("ddlOCROutputFormat").options.add(new Option(OCROutputFormat[i].desc, OCROutputFormat[i].val));
    for (i = 0; i < OCRRecognitionModule.length; i++)
        document.getElementById("ddlOCRRecognitionModule").options.add(new Option(OCRRecognitionModule[i].desc, OCRRecognitionModule[i].val));
    for (i = 0; i < OCRPDFVersion.length; i++)
        document.getElementById("ddlPDFVersion").options.add(new Option(OCRPDFVersion[i].desc, OCRPDFVersion[i].val));
    for (i = 0; i < OCRPDFAVersion.length; i++)
        document.getElementById("ddlPDFAVersion").options.add(new Option(OCRPDFAVersion[i].desc, OCRPDFAVersion[i].val));
    document.getElementById("ddlPDFVersion").selectedIndex = 6;
    document.getElementById("ddlPDFAVersion").selectedIndex = 1;
}
function SetIfUseRedaction() {
    var selectValue = OCROutputFormat[document.getElementById("ddlOCROutputFormat").selectedIndex].val;
    if (selectValue === "IOTPDF" ||
        selectValue === "IOTPDF_MRC") {
        document.getElementById("divVersion").style.display = "";
        document.getElementById("divIfUseRedaction").style.display = "";
    }
    else if (selectValue == "TXTF") {
        document.getElementById("divVersion").style.display = "none";
        document.getElementById("divIfUseRedaction").style.display = "";
    }
    else {
        document.getElementById("divVersion").style.display = "none";
        document.getElementById("divIfUseRedaction").style.display = "none";
        document.getElementById("divLblFindTXT").style.display = "none";
        document.getElementById("divCtrlFindTXT").style.display = "none";
        document.getElementById("divLblTXTAction").style.display = "none";
        document.getElementById("ddlFindTextAction").style.display = "none";
        document.getElementById("lblBtnOCR").style.display = "";
        document.getElementById("chkUseRedaction").checked = false;
    }
}
function SetRedaction() {
    if (document.getElementById("chkUseRedaction").checked) {
        document.getElementById("divLblFindTXT").style.display = "";
        document.getElementById("divCtrlFindTXT").style.display = "";
        document.getElementById("txtFindText").focus()
    }
    else {
        document.getElementById("divLblFindTXT").style.display = "none";
        document.getElementById("divCtrlFindTXT").style.display = "none";
        document.getElementById("chkUseRedaction").checked = false;
    }
}
function S_get(id) {
    return document.getElementById(id);
}
var S = KISSY;
var dlgDoOCR;
function Dynamsoft__OnclickCloseInstallEx() {
    if (dlgDoOCR) {
        dlgDoOCR.hide();
    }
}
function GetErrorDialog(errorString, height) {
    var ObjString = "<div class=\"D-dailog-body-error round style=\"height:" + height + "\">";
    ObjString += "<div style=\"height:150px;position:relative;\">";
    ObjString += "<div style=\"height:30px;background-color: #f5f5f5;\">";
    ObjString += "<a href=\"javascript: void(0)\" style=\"text-decoration:none;\" class=\"ClosetblCanNotScan\"></a>";
    ObjString += "</div>";
    ObjString += "<div class=\"ErrorLogo\" alt=\"Dynamsoft Corporation\" border=\"0\"></div>";
    ObjString += "</div>";
    ObjString += "<div class=\"dwt-box-title\">" + errorString + "</div>";
    ObjString += "</div>";
    document.getElementById("strBody").innerHTML = ObjString;
    ShowWaitDialog(360, height);
    for (var i = 0; i < document.links.length; i++) {
        if (document.links[i].className == 'ClosetblCanNotScan') {
            document.links[i].onclick = Dynamsoft__OnclickCloseInstallEx;
        }
    }
}
function ShowWaitDialog(varWidth, varHeight) {
    S.use("overlay", function (S, o) {
        dlgDoOCR = new o.Dialog({
            srcNode: "#dlg-node-name",
            width: varWidth,
            height: varHeight,
            closable: false,
            mask: true,
            align: {
                points: ['cc', 'cc']
            }
        });
        dlgDoOCR.show();
        run = 1;
    });
}
function ClickOCR() {
    if (document.getElementById("spOCRResult"))
        document.getElementById("spOCRResult").innerHTML = "";
    if (document.getElementById("txtUploadFileName").value != "") {
        showWaitDialog();
        document.getElementById('DoOCR').click();
    }
    else
        GetErrorDialog("Please upload a PDF or image first.", 300);
}
function showWaitDialog() {
    confirmFlag = 0;
    var ObjString = "<div style=\"margin:0 auto;width:100px;line-height:300px\"><img src=\"Style/Images/loading.gif\" /></div>";
    document.getElementById("strBody").innerHTML = ObjString;
    ShowWaitDialog(360, 0);
}