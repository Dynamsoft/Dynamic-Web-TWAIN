using System;
using System.Data;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using System.Net;

namespace OCRProServer
{
    public class DoOCRPro
    {
        private bool m_bFinsh = false;
        private string m_strResponse = "";
        public event UploadStringCompletedEventHandler UploadStringCompleted;
        public string DoOCR(string strRequestBody)
        {
            try
            {
                System.ComponentModel.AsyncOperationManager.SynchronizationContext = new System.Threading.SynchronizationContext();

                m_bFinsh = false;
                m_strResponse = "";
                using (System.Net.WebClient client = new System.Net.WebClient())
                {
                    client.Headers.Set("User-Agent", "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.7 Safari/537.36");
                    client.UploadStringCompleted += new UploadStringCompletedEventHandler(UploadStringCallback);
                    Uri objUrl = new Uri("http://127.0.0.1:18622/dwt/dwt_trial_13300115/OCRPro");
                    client.UploadStringAsync(objUrl, strRequestBody);
                    while (1 > 0)
                    {
                        if (m_bFinsh == true)
                            break;
                        System.Threading.Thread.Sleep(1000);
                    }
                    return m_strResponse;
                }
            }
            catch (Exception ex)
            {
                string _ex = ex.Message;
                return _ex;
            }
        }

        private void UploadStringCallback(object sender, UploadStringCompletedEventArgs e)
        {
            m_bFinsh = true;
            m_strResponse = e.Result;   
        }
    }   
}
