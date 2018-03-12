<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="OCR-PDF-Online.aspx.cs" Inherits="OCRProServer.OCR_PDF_Online" %>

<!DOCTYPE html>
<html>
<head>
<title>Online OCR | Dynamic Web TWAIN SDK | Dynamsoft</title>
<meta http-equiv="description" content="The sample demonstrates how to upload local files to the server, perform server-side OCR and return the results" />
<link rel="stylesheet" href="Style/ocr_pdf.css">
<link rel="stylesheet" href="Style/ocr_extra.css">
<script src="Scripts/Common.js"></script>
<script src="Scripts/kissy-min.js"></script>
<script src="Scripts/ocrpropureserverside.js"></script>
<script src="Scripts/dynamsoft.webtwain.config.js"></script>
</head>
<body>
<div id="wrapper">
    <div class="D-dailog round" id="dlg-node-name">
        <div id="strBody" runat="server"></div>
    </div>
    <div id="demoContent">
        <div id="ocrPDFDemo" class="clearfix">
            <div class="ct-top"> <span class="title">OCR (text recognition)</span> <span class="desc">Related products:</span> <a target="_blank" href="https://www.dynamsoft.com/Products/WebTWAIN_Overview.aspx"><img src="Style/Images/icon-dwt.svg" style="height:35px" title="Dynamic Web TWAIN" alt="Dynamic Web TWAIN"></a> </div>
            <div class="mainContent">
                <form id="form1" runat="server">
                    <div class="item">
                        <div class="lt">
                            <p class="lbl">Upload a PDF or image:</p>
                            <asp:FileUpload CssClass="ImgLocalPath" ID="upLoadFile" Style="width: 340px; height: 36px; filter: alpha(opacity=0); -moz-opacity: 0; opacity: 0; font-size: 23px; position: absolute; z-index: 99999;"
                                runat="server" onchange="txtUploadFileName.value = this.value;" />
                            <asp:TextBox ID="txtUploadFileName" ReadOnly="true" Style="width: 250px; cursor: pointer; height: 36px; border: solid 1px #ccc; border-radius: 3px 0 0 3px; -webkit-border-radius: 3px 0 0 3px; -moz-border-radius: 3px 0 0 3px; outline: none;" runat="server"></asp:TextBox>
                            <input type="button" id="btnUploadFile" style=" float:right; width: 90px; height: 36px; border: solid 1px #ccc; border-left:none; background: #f8f8f8; margin: 0; margin-left: -6px; font-size: 14px; border-radius: 0 3px 3px 0; -webkit-border-radius: 0 3px 3px 0; -moz-border-radius: 0 3px 3px 0; outline: none; font-family:OpenSans-Regular, Arial, sans-serif, Verdana, Helvetica; color:#606060;" value="Browse..." />
                            <span id='formatTip' title="supported format: tiff (G4 / LZW / jpeg), jpeg, PDF,BMP,jpep2000, jbig, jbig2, png, pda, pgx, xps, wmp, opg, max, awd, dcx, pcx"></span> </div>
                    </div>
                    <div class="item">
                        <div class="lt">
                            <p class="lbl">Language:</p>
                            <select size="1" id="ddlLanguages" name="ddlLanguages" class="w100p">
                            </select>
                        </div>
                    </div>
                    <div class="item">
                        <div class="lt">
                            <p class="lbl">Recognition Mode:</p>
                            <input type="text" name="OCRPTrialKey" id="OCRPTrialKey" hidden="hidden" />
                            <select size="1" id="ddlOCRRecognitionModule" name="ddlOCRRecognitionModule">
                            </select>
                        </div>
                    </div>
                    <div class="item">
                        <div class="lt">
                            <p class="lbl">Output Format:</p>
                            <select size="1" id="ddlOCROutputFormat" name="ddlOCROutputFormat" onchange="SetIfUseRedaction();">
                            </select>
                        </div>
                        <div id="divVersion" style="display: none">
                            <div class="ct">
                                <p class="lbl">PDF Version:</p>
                                <select size="1" id="ddlPDFVersion" name="ddlPDFVersion">
                                </select>
                            </div>
                            <div class="rt">
                                <p class="lbl">PDF/A Version:</p>
                                <select size="1" id="ddlPDFAVersion" name="ddlPDFAVersion">
                                </select>
                            </div>
                        </div>
                    </div>
                    <div id="divIfUseRedaction" class="item" style="display: none;">
                        <label for="chkUseRedaction">
                            <input type="checkbox" id="chkUseRedaction" name="chkUseRedaction" onclick="SetRedaction();" />
                            Search Text and Redact</label>
                    </div>
                    <div id="divLblFindTXT" class="item" style="display: none">
                        <div class="lt">
                            <p class="lbl">Find Text:</p>
                            <input type="text" id="txtFindText" name="txtFindText" />
                        </div>
                        <div class="ct">
                            <p class="lbl">Match Mode:</p>
                            <select size="1" id="ddlFindTextFlags" name="ddlFindTextFlags">
                            </select>
                        </div>
                        <div id="divCtrlFindTXT" class="rt" style="display: none">
                            <p class="lbl">Find Text Action:</p>
                            <select size="1" id="ddlFindTextAction" name="ddlFindTextAction">
                            </select>
                        </div>
                    </div>
                    <div class="item">
                        <input type="button" id="id_OCRBtn" value="OCR" onclick="ClickOCR();" class="d-btn bgBlue" style="width: 130px;" />
                        <br />
                        <span id="spOCRResult" style="display: none">(<a id="aOCRResult" href="#" target="_blank" class="bluelink"><u><%=strOCRResult%></u></a>)</span>
                        <div style="display: none;">
                            <input id="DoOCR" type="submit" />
                        </div>
                        <p class="serverSideLink"><a class="bluelink" href="https://www.dynamsoft.com/demo/OCR/OCRProServerSide.aspx">Scan Documents and Server-side OCR &rsaquo;</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
        var confirmFlag = 1;
        var vSessionID;
        document.getElementById("OCRPTrialKey").value = Dynamsoft.WebTwainEnv.ProductKey;
        window.onbeforeunload = function () {
            vSessionID = '<%=SessionID%>';
            if (confirmFlag)
                deleteOCRResult();
        }
    </script>
</body>
</html>
