var xmlhttp;
function loadXMLDoc(url) {
    xmlhttp = null;
    if (window.XMLHttpRequest)
        xmlhttp = new XMLHttpRequest();

    if (xmlhttp != null) {
        xmlhttp.onreadystatechange = state_change;
        xmlhttp.open("POST", url, true);
        xmlhttp.send();
    }
    else
        alert("Your browser does not support XMLHTTP");
}
function state_change() {
    if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200) {

        }
        else {
            //alert("problem retrieving XML data");
        }
    }
}

function deleteOCRResult() {
    if (vSessionID) {
        var serverURL = "";
        var _strPort = location.port == "" ? 80 : location.port;
        if (document.location.protocol === 'https:') {
            _strPort = location.port == "" ? 443 : location.port;
            serverURL = "https://";
        }
        else {
            serverURL = "http://";
        }

        var CurrentPathName = unescape(location.pathname); // get current PathName in plain ASCII
        var CurrentPath = CurrentPathName.substring(0, CurrentPathName.lastIndexOf("/") + 1);
        var strActionPage = CurrentPath + "DeleteFiles.aspx?TestID=" + vSessionID;

        serverURL = serverURL + location.hostname + ":" + _strPort + strActionPage;
        loadXMLDoc(serverURL);
    }
}