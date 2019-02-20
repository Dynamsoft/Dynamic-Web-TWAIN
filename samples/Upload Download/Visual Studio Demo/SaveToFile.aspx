<%@ Page Language="C#" %>

<%
    try
    {
        String strImageName;
        HttpFileCollection files = HttpContext.Current.Request.Files;
        HttpPostedFile uploadfile = files["RemoteFile"];
        strImageName = uploadfile.FileName;

        string[] paths = {Server.MapPath("."), "UploadedImages"};
        string uploadFolder = System.IO.Path.Combine(paths);

        if (!System.IO.Directory.Exists(uploadFolder))
        {
            System.IO.Directory.CreateDirectory(uploadFolder);
        }

        string[] filapath = {uploadFolder, strImageName};
        uploadfile.SaveAs(System.IO.Path.Combine(filapath));

    }
    catch
    {
    }
%>