<%@ Page Language="C#" %>

<%
    try
    {
        string strSession = HttpContext.Current.Request.QueryString["TestID"];
        string strInputFile = Server.MapPath(".") + "\\UploadedImages\\results\\" + strSession;

        if (System.IO.Directory.Exists(strInputFile))
        {
            try
            {
                string[] aryFiles = System.IO.Directory.GetFiles(strInputFile);
                foreach (string strFileName in aryFiles)
                {
                    System.IO.File.Delete(strFileName);
                }
            }
            catch { }

            System.IO.Directory.Delete(strInputFile);
        }
    }
    catch { }

%>
