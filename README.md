Dynamic Web TWAIN SDK
=========
version 11.0

Introduction
-----------

[Dynamic Web TWAIN][1] is a TWAIN-based scanning SDK software specifically designed for web applications. With just a few lines of code, you can develop robust applications to scan documents from TWAIN-compatible scanners, edit the scanned images and save them to a file system.

Download
-----------
http://www.dynamsoft.com/Downloads/WebTWAIN_Download.aspx

Documentation
--------------

http://www.dynamsoft.com/help/TWAIN/WebTwain/index.htm.

Highlights
-----------

##### Scan
* TWAIN specification 2.1 and below compatible (ActiveX, HTML5, Plugin Editions).
* TWAIN specification 1.9 and below compatible (Mac Edition).
* Supports both 32 and 64-bit TWAIN drivers (ActiveX, HTML5, Plugin Editions).
* Optional disk caching mechanism enables high volume document scanning (up to thousands of pages).
* Supports Auto Document Feeder (ADF) and multiple image acquisition.
* Supports duplex scanning mode.

[More][2]

##### Edit
* ActiveX, Plug-in and HTML5 editions provide an Image Editor for image editing and viewing.
* ActiveX, Plug-in and HTML5 Editions support adding colored rectangles to images.
* Supports multiple images selection.
* Supports image swapping.
* Supports clearing specified areas of an image, and filling cleared areas with color.
* Supports zooming.

[More][2]

##### Saving, Uploading, and Downloading
* Downloads and uploads images via HTTP/HTTPS or FTP/FTPS (no FTPS support for Mac Edition).
* Saves and uploads images as BMP, JPEG, PNG, TIFF and PDF files.
* Supports multi-page TIFF and multi-page PDF.
* Mac Edition supports loading JPEG2000, PSD, and TGA image formats.
* Mac Edition supports loading text-based PDF files.
* Supports saving images as a byte array.

[More][2]

##### Security
* ActiveX Control digitally signed by VeriSign.
* ActiveX Edition marked safe for initializing and scripting.
* Supports Windows Authentication, Forms Authentication and Basic Authentication.
* Compatible with Data Execution Prevention (DEP) and Protected Mode.
* Proxy connections supported, no need for customers to reconfigure their firewalls.
* ActiveX, Plug-in and HTML5 editions support SSL for FTP/HTTP uploading and downloading.(Mac Edition only includes SSL for HTTP uploading/downloading support).

Samples
-------
http://www.dynamsoft.com/Downloads/WebTWAIN-Sample-Download.aspx

Package
-------
```
Dynamic Web TWAIN SDK 10.2 Trial
/Documents
/Resources
/Samples
/DWTLicensing.exe
/Dynamic Web TWAIN SDK.html

```

A Simple Web Scanning Application
---------------------------------
1. Start a Web Application
  1. Copy the Dynamsoft's Resources folder to your project
  
      ![image](http://www.dynamsoft.com/Support/DWTGuide/Documents/res/Images/ResourcesFolder.png)
  2. Create an empty HTML page
  
      ![image](http://www.dynamsoft.com/Support/DWTGuide/Documents/res/Images/ResourcesAndHTML.png)
2. Add Dynamic Web TWAIN to the HTML Page
  1. Include the two Dynamsoft's JS files in the <head> tag.
  
      ```
      <script type="text/javascript" src="Resources/dynamsoft.webtwain.initiate.js"> </script>
      <script type="text/javascript" src="Resources/dynamsoft.webtwain.config.js"> </script>
      ```
  2. Add Dynamic Web TWAIN container to the <body> tag.

      ```
      <div id="dwtcontrolContainer"> </div>
      ```

3. Use Dynamic Web TWAIN
  1. Add a Scan button and the minimum scripts to scan
  
      ```
      <input type="button" value="Scan" onclick="AcquireImage();" />
<script type="text/javascript">
    function AcquireImage(){
        var DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
        DWObject.IfDisableSourceAfterAcquire = true;
        DWObject.SelectSource();
        DWObject.OpenSource();
        DWObject.AcquireImage();
    }
</script>
      ```
  2. Review the complete code.
  
      ```
      <html>  
    <head>
        <title>Hello World</title>
        <script type="text/javascript" src="Resources/dynamsoft.webtwain.initiate.js"> </script>
        <script type="text/javascript" src="Resources/dynamsoft.webtwain.config.js"> </script>
    </head>

    <body>
        <input type="button" value="Scan" onclick="AcquireImage();" />
        <div id="dwtcontrolContainer"> </div>
        <script type="text/javascript">
            function AcquireImage(){
                var DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
                DWObject.IfDisableSourceAfterAcquire = true;
                DWObject.SelectSource();
                DWObject.OpenSource();
                DWObject.AcquireImage();
            }
        </script>
    </body>  
</html>
      ```

[1]:http://www.dynamsoft.com/Products/WebTWAIN_Overview.aspx
[2]:http://www.dynamsoft.com/Products/WebTWAIN_Features.aspx
