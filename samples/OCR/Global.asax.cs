using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.SessionState;

namespace OCRProServer
{
    public class Global : System.Web.HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {

        }

        protected void Session_Start(object sender, EventArgs e)
        {
            Session["SessionID"] = HttpContext.Current.Session.SessionID.ToString();
        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {

        }

        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {

        }

        protected void Application_Error(object sender, EventArgs e)
        {
            DeteOCRFile();
        }

        protected void Session_End(object sender, EventArgs e)
        {
           DeteOCRFile();
        }

        protected void Application_End(object sender, EventArgs e)
        {
            DeteOCRFile();
        }

        private void DeteOCRFile()
        {
            try
            {
                string strSession = Session["SessionID"].ToString();
                string strInputFile = System.Environment.CurrentDirectory + "\\UploadedImages\\" + strSession;

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
        }
    }
}