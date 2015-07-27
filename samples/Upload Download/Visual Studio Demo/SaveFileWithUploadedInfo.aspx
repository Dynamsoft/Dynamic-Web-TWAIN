<%@ Page Language="C#" %>

<%
    try
    {
        String strImageName;
        String strInfo = HttpContext.Current.Request["extraInfo"];
        HttpFileCollection files = HttpContext.Current.Request.Files;
        HttpPostedFile uploadfile = files["RemoteFile"];
        strImageName = uploadfile.FileName;

        uploadfile.SaveAs(Server.MapPath(".") + "\\UploadedImages\\" + strImageName);
        Response.Write("Extra Info: " + strInfo);
    }
    catch
    {
    }
%>