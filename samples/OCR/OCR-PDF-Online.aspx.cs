using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using System.IO;

namespace OCRProServer
{
    public partial class OCR_PDF_Online : System.Web.UI.Page
    {
        public string SessionID = "";
        public string strInputFilePath = "";
        public string strOCRResult = "";
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                strOCRResult = "";
                SessionID = Session["SessionID"].ToString();

                if (upLoadFile.HasFile)
                {
                    strInputFilePath = UpLoadImage(upLoadFile);
                    if (strInputFilePath != "")
                    {
                        string strOutputFilePath = GetOutPutFilePath(strInputFilePath, SessionID);
                        string strRequestBody = GetRequestBody(strInputFilePath, strOutputFilePath);

                        OCRProServer.DoOCRPro objDoOCRRro = new OCRProServer.DoOCRPro();
                        string strResponse = objDoOCRRro.DoOCR(strRequestBody);
                        if (System.IO.File.Exists(strOutputFilePath))
                        {
                            string findText = "UploadedImages\\results\\";
                            string filename = strOutputFilePath;
                            int pos = strOutputFilePath.IndexOf(findText);
                            if (pos > 0)
                                filename = strOutputFilePath.Substring(pos + findText.Length, strOutputFilePath.Length - pos - findText.Length);
                            string strURL = "UploadedImages\\results\\" + filename;
                            ShowDownloadDialog(strURL);
                        }
                        else
                        {
                            string strErrorMessage = GetErrorInfo(strResponse);
                            strOCRResult = "<script type='text/javascript'>GetErrorDialog('" + strErrorMessage + "', 300);</script>";
                        }
                    }
                    upLoadFile.Dispose();
                }
            }
            catch(Exception exp)
            {
                strOCRResult = "<script type='text/javascript'>GetErrorDialog('" + exp.Message + "', 300);</script>";
            }
        }

        private string UpLoadImage(System.Web.UI.WebControls.FileUpload uploadfileControl)
        {
            if (!uploadfileControl.HasFile)
            {
                throw new Exception("No file exist.");
            }

            string strInputFile = Server.MapPath(".") + "\\UploadedImages\\original";
            if (!System.IO.Directory.Exists(strInputFile))
            {
                System.IO.Directory.CreateDirectory(strInputFile);
            }

            DateTime now = DateTime.Now;
            string strData = now.ToString("yyyyMMdd_HHmmss_") + now.Millisecond + "_" + (new Random().Next() % 1000).ToString();       
            strInputFile = strInputFile + "\\" + strData + uploadfileControl.FileName;
            uploadfileControl.SaveAs(strInputFile);
            return strInputFile;
        }

        private string GetOutPutFilePath(string strInputFilePath, string strSessionID)
        {
            string outPutFile = strInputFilePath;
            string type = ".pdf";
            string value = Request["ddlOCROutputFormat"].ToString();
            switch (value)
            {
                case "TXTS":
                    type = ".txt";
                    break;
                case "TXTF":
                    type = ".rtf";
                    break;
                case "TXTCSV":
                    type = ".csv";
                    break;
                case "XML":
                    type = ".xml";
                    break;
                case "IOTPDF":
                case "IOTPDF_MRC":
                    type = ".pdf";
                    break;
            }

            string strInputFile = Server.MapPath(".") + "\\UploadedImages\\results\\" + strSessionID;
            if (!System.IO.Directory.Exists(strInputFile))
            {
                System.IO.Directory.CreateDirectory(strInputFile);
            }

            DateTime now = DateTime.Now;
            string strData = now.ToString("yyyyMMdd_HHmmss_") + now.Millisecond + "_" + (new Random().Next() % 1000).ToString();
            outPutFile = strInputFile + "\\" + strData + type;

            return outPutFile;
        }
    
        private string GetRequestBody(string strInputFilePath, string strOutputFilePath) {
            string value = Request["ddlOCROutputFormat"].ToString();
            string strRequestBody = "{";
            strRequestBody += "\"productKey\": \""+ Request["OCRPTrialKey"].ToString() + "\",";
            strRequestBody += "\"inputFile\":[\"" + strInputFilePath + "\"],";
            strRequestBody += "\"settings\": {";
            strRequestBody += "\"recognitionModule\": \"" + Request["ddlOCRRecognitionModule"].ToString() + "\",";
            strRequestBody += "\"languages\": \"" + Request["ddlLanguages"].ToString() + "\",";
            strRequestBody += "\"recognitionMethod\": \"Page\","; 
            strRequestBody += "\"threadCount\": \"2\",";
            strRequestBody += "\"outputFormat\": \"" + Request["ddlOCROutputFormat"].ToString()+ "\"";
            var selectValue = Request["ddlOCROutputFormat"].ToString();
            if (selectValue == "IOTPDF" ||
                selectValue == "IOTPDF_MRC") {
                strRequestBody += "," + "\"pdfVersion\": \"" + Request["ddlPDFVersion"].ToString() + "\",";
                strRequestBody += "\"pdfAVersion\": \"" + Request["ddlPDFAVersion"].ToString() + "\"";
            }
            if (Request["chkUseRedaction"] != null && Request["chkUseRedaction"].ToString() == "on") {
                strRequestBody += ",\"redaction\":{";
                strRequestBody += "\"findText\":\"" + Request["txtFindText"].ToString() + "\",";
                strRequestBody += "\"findTextFlags\":" + Request["ddlFindTextFlags"].ToString() + ",";
                strRequestBody += "\"findTextAction\":" + Request["ddlFindTextAction"].ToString();
                strRequestBody += "}";
            }
            strRequestBody += "},";
            strRequestBody += "\"zones\": [],";  //"\"zones\": [[100,100,200,300],[100,600,100,200]],";

            strRequestBody += "\"outputFile\": \"" + strOutputFilePath + "\"";
            strRequestBody += "}";
            return strRequestBody;
        }

        private string GetErrorInfo(string jsonString)
        {
            string strErrorMessage = "";
            string strTemp = jsonString;
            int pos = strTemp.IndexOf("\"code\":");
            if (pos > 0)
            {
                int endPos = strTemp.IndexOf(",", pos);
                if (endPos > 0)
                {
                    string strErrorcode = strTemp.Substring(pos + 8, endPos - pos - 9);  //get Errorcode
                    int iErrorcode = 0;
                    try
                    {
                        iErrorcode = Convert.ToInt32(strErrorcode);
                    }
                    catch (Exception ex){
                        string _ex = ex.Message;
                    }
                    if (iErrorcode != 0)
                    {
                        pos = strTemp.IndexOf("\"message\":");
                        if (pos > 0)
                        {
                            int tempPos = strTemp.IndexOf("\"message\":", pos + 1);
                            if (tempPos > 0)
                                pos = tempPos;
                            endPos = strTemp.IndexOf("}", pos);
                            if (endPos > 0)
                            {
                                strErrorMessage = strTemp.Substring(pos + 11, endPos - pos - 13);  //get message

                            }
                        }
                    }
                }
            }

            return strErrorMessage;
        }

        private void ShowDownloadDialog(string strURL)
        {
            string ObjString = "<div class=\"D-dailog-body round\">";
            ObjString += "<div style=\"height:150px;position:relative;\">";
            ObjString += "<div style=\"height:30px;background-color: #f5f5f5;\">"; 
            ObjString += "<a href=\"javascript: void(0)\" style=\"text-decoration:none;\" class=\"ClosetblCanNotScan\"></a>";
            ObjString += "</div>";
            ObjString += "<div class=\"SuccessLogo\" alt=\"Dynamsoft Corporation\" border=\"0\"></div>";
            ObjString += "</div>";
            ObjString += "<div class=\"dwt-box-title\">The OCR operation completed successfully!</div>";
            ObjString += "<div style=\"margin:38px;text-align:center\">";
            ObjString += "<a id=\"dwt-btn-install\" target=\"_blank\" href=\"" + strURL + "\">";
            ObjString += "<div class=\"dwt-button\"></div></a>";
            ObjString += "</div></div>";
            strBody.InnerHtml = ObjString;

            strOCRResult = "<script type='text/javascript'>ShowWaitDialog(360, 340); ";
            strOCRResult += "for (var i = 0; i < document.links.length; i++) {";
            strOCRResult += "if (document.links[i].className == 'ClosetblCanNotScan') {";
            strOCRResult += "document.links[i].onclick = Dynamsoft__OnclickCloseInstallEx;";
            strOCRResult += "}";
            strOCRResult += "}</script>";
        }

    }
}
