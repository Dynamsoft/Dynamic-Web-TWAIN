Dynamic Web TWAIN SDK
=========
version 14.3.1

Introduction
-----------

[Dynamic Web TWAIN][1] is a cross-platform scanning SDK designed for web document management applications. With just a few lines of JavaScript code, you can develop robust web applications to scan documents, edit images and save them to file systems on **Windows**, **Linux** and **macOS**.

## License
Get a [FREE 30-day trial license](https://www.dynamsoft.com/CustomerPortal/Portal/Triallicense.aspx).

Download
-----------
https://www.dynamsoft.com/Downloads/WebTWAIN_Download.aspx

Documentation
--------------

https://www.dynamsoft.com/help/TWAIN/WebTwain/index.htm.

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
https://www.dynamsoft.com/Downloads/WebTWAIN-Sample-Download.aspx

Getting Started
---------------------------------
1. Create a new web project and copy the Dynamsoft's Resources folder to your project:

    ![image](https://www.dynamsoft.com/Support/DWTGuide/Documents/res/Images/ResourcesFolder.png)
2. Create an empty HTML page:

    ![image](https://www.dynamsoft.com/Support/DWTGuide/Documents/res/Images/ResourcesAndHTML.png)
3. Include the Dynamic Web TWAIN JavaScript library:

    ```
    <script type="text/javascript" src="Resources/dynamsoft.webtwain.initiate.js"> </script>
    <script type="text/javascript" src="Resources/dynamsoft.webtwain.config.js"> </script>
    ```
4. Add Dynamic Web TWAIN container:

    ```
    <div id="dwtcontrolContainer"> </div>
    ```

5. Add a Scan button:

    ```
    <input type="button" value="Scan" onclick="AcquireImage();" />
    <script type="text/javascript"> 
        function AcquireImage() {
			var DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
            if (DWObject) {
                DWObject.SelectSource(function () {
                    var OnAcquireImageSuccess, OnAcquireImageFailure;
                    OnAcquireImageSuccess = OnAcquireImageFailure = function () {
                        DWObject.CloseSource();
                    };
                    DWObject.OpenSource();
                    DWObject.IfDisableSourceAfterAcquire = true;
                    DWObject.AcquireImage(OnAcquireImageSuccess, OnAcquireImageFailure);
                }, function () {
                    console.log('SelectSource failed!');
                });
            }
        }
    </script>
    ```

Full Sample
----------

```
<!DOCTYPE html>
<html>

<head>
    <title>Hello World</title>
    <script type="text/javascript" src="Resources/dynamsoft.webtwain.initiate.js"></script>
    <script type="text/javascript" src="Resources/dynamsoft.webtwain.config.js"></script>
</head>

<body>
    <div id="dwtcontrolContainer"></div>
    <input type="button" value="Scan" onclick="AcquireImage();" />
    <script type="text/javascript">
        function AcquireImage() {
			var DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
            if (DWObject) {
                DWObject.SelectSource(function () {
                    var OnAcquireImageSuccess, OnAcquireImageFailure;
                    OnAcquireImageSuccess = OnAcquireImageFailure = function () {
                        DWObject.CloseSource();
                    };
                    DWObject.OpenSource();
                    DWObject.IfDisableSourceAfterAcquire = true;
                    DWObject.AcquireImage(OnAcquireImageSuccess, OnAcquireImageFailure);
                }, function () {
                    console.log('SelectSource failed!');
                });
            }
        }
    </script>
</body>

</html>
```

Contact Us
-------
support@dynamsoft.com

## License Agreement
https://www.dynamsoft.com/Products/WebTWAIN_License.aspx

[1]:https://www.dynamsoft.com/Products/WebTWAIN_Overview.aspx
[2]:https://www.dynamsoft.com/Products/WebTWAIN_Features.aspx
