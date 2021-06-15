# Dynamic Web TWAIN SDK
![version](https://img.shields.io/npm/v/dwt.svg)
![downloads](https://img.shields.io/npm/dm/dwt.svg) 
![jsdelivr](https://img.shields.io/jsdelivr/npm/hm/dwt.svg)
![](https://img.shields.io/snyk/vulnerabilities/npm/dwt.svg)

Cross-platform and cross-browser JavaScript library for web document scanning.

## Table of Contents
- [Introduction](#Introduction)
- [Online Demo](#Online-Demo)
- [License Key](#License-Key)
- [Installation](#Installation)
- [Deployment](#Deployment)
- [Quick Start](#Quick-Start)
- [Documentation](#Documentation)
- [Features](#Features)
- [Contact Us](#Contact-Us)
- [License Agreement](#License-Agreement)
- [Versions](#Versions)

## Introduction

[Dynamic Web TWAIN](https://www.dynamsoft.com/web-twain/overview/) is a cross-platform scanning SDK designed for web document management applications. With just a few lines of JavaScript code, you can develop robust web applications to scan documents, edit images and save them to file systems on **Windows**, **Linux** and **macOS**. You can even use your mobile devices running iOS | iPadOS | Android with the library starting in 17.0!

### Supported OSs
- Windows
- Linux
- macOS
- Android / iOS (Remote scanner or camera)

### Supported CPU Architectures
- x86/x64
- MIPS64
- ARM64

### Supported Web Browsers
- Firefox
- Edge
- Chrome
- Safari

## Online Demo
https://demo.dynamsoft.com/web-twain/

## Installation

- Official web site

    [Dynamic Web TWAIN SDK for Windows, Linux, macOS](https://www.dynamsoft.com/web-twain/downloads)

- NPM

    ```bash
    npm install dwt
    ```

### A Virtual Scanner

If you do not have a physical scanner to test on Windows, you can install a virtual scanner. 
- [Virtual Scanner for Windows](https://download.dynamsoft.com/tool/twainds.win32.installer.2.1.3.msi)

Read more [here](https://www.dynamsoft.com/web-twain/docs/getstarted/hardware.html?ver=latest#no-scanner-to-test).

## Deployment

Dynamic Web TWAIN relies on the files in the `/dist/` folder to work. Make sure to put these files on your server and correctly refer to them by specifying the path with `ResourcesPath` (relative and absolute paths are both fine).

If you are making use of the `CDN` [jsDelivr](https://cdn.jsdelivr.net/npm/dwt), you will still need to host the `/dist/` folder somewhere on your server and refer to it by specifying the path with `ResourcesPath`. This is because file types like .msi are not allowed by this CDN.

## Quick Start

### For Dynamic Web TWAIN Installer
1. Create a new web project and copy the `<Dynamic Web TWAIN SDK {Version Number}>\Resources` folder to your project directory.

2. Create an empty HTML page:

    ![image](https://www.dynamsoft.com/Support/DWTGuide/Documents/res/Images/ResourcesAndHTML.png)

3. Include the Dynamic Web TWAIN JavaScript library:

    ```html
    <script type="text/javascript" src="Resources/dynamsoft.webtwain.initiate.js"></script>
    <script type="text/javascript" src="Resources/dynamsoft.webtwain.config.js"></script>
    ```


4. Add Dynamic Web TWAIN container:

    ```html
    <div id="dwtcontrolContainer"> </div>
    ```

5. Add a Scan button:

    ```html
    <input type="button" value="Scan" onclick="AcquireImage();" />
    <script type="text/javascript"> 
        function AcquireImage() {
			var DWObject = Dynamsoft.DWT.GetWebTwain('dwtcontrolContainer');
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
                    console.log('Failed to select a source!');
                });
            }
        }
    </script>
    ```

Full Sample

```html
<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
    <script type="text/javascript" src="Resources/dynamsoft.webtwain.initiate.js"></script>
    <script type="text/javascript" src="Resources/dynamsoft.webtwain.config.js"></script>
</head>
<body>
    <div id="dwtcontrolContainer" ></div>
    <input type="button" value="Scan" onclick="AcquireImage();" />
    <script type="text/javascript">
    function AcquireImage() {
	var DWObject = Dynamsoft.DWT.GetWebTwain('dwtcontrolContainer');
	if (DWObject) {		
		DWObject.SelectSource(function () {		
		var OnAcquireImageSuccess = OnAcquireImageFailure = function () {
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

### For NPM 
1. Create a HTML page and load **`dynamsoft.webtwain.min.js`** into your page:

    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>Hello World</title>
        <script src="dist/dynamsoft.webtwain.min.js"></script>
    </head>
    <body>
    </body>
    </html>
    ```

    > Note that a **relative path** is used. You might want to change it based on where you are putting your code. The best practise is to put all the files on your own server and under the same domain as your web application.

2. Add a script tag and make initial settings:

    ```html
    <!DOCTYPE html>
    <html>
    <head>
    <title>Hello World</title>
    <script src="dist/dynamsoft.webtwain.min.js"></script>
    </head>
    <body>
    <script type="text/javascript">
        Dynamsoft.DWT.ResourcesPath = "dist";
    </script>
    </body>
    </html>
    ```
    
> Note that `ResourcesPath`  must be set in order to use the library. 

1. `ResourcesPath` is a relative path to where you put the directory "/dist/" and all the files in it.
    
3. Write code to use the package to do a simple document scan

    > The following code demonstrates the minimum code needed to use the package. Note the addition of HTML elements as well as JavaScript code. For more sophisticated sample or demo, check out the [Sample Gallery](https://www.dynamsoft.com/web-twain/resources/code-gallery/) and our [Github Repositories](https://github.com/dynamsoft-dwt).

    ```html
    <!DOCTYPE html>
    <html>
    <head>
    <title>Hello World</title>
    <script src="dist/dynamsoft.webtwain.min.js"></script>
    </head>
    <body>
    <input type="button" value="Scan" onclick="AcquireImage();" />
    <div id="dwtcontrolContainer"></div>
    <script type="text/javascript">
        /** v17.1 LICENSE ALERT - README
         * The library requires a license to work, the APIs organizationID and handshakeCode specify how to acquire a license.
         * If nothing is specified, a 7-day (public) trial license will be used by default which is the case in this sample.
         * Note that network connection is required for this license to work.
         */
    
        /* When using your own license, please uncomment the following lines and fill in your own information. */
        /* For more information, please refer to https://www.dynamsoft.com/license-tracking/docs/about/licensefaq.html?ver=latest#how-to-use-a-trackable-license. */
    
        // Dynamsoft.DWT.organizationID = "YOUR-ORGANIZATION-ID";
        // Dynamsoft.DWT.handshakeCode = "A-SPECIFIC-HANDSHAKECODE";
        // Dynamsoft.DWT.sessionPassword = "PASSWORD-TO-PROTECT-YOUR-LICENSE"; // Important field to protect your license.
        // Dynamsoft.DWT.licenseServer = ["YOUR-OWN-MAIN-LTS", "YOUR-OWN-STANDBY-LTS"]; // Ignore this line if you are using Dynamsoft-hosting LTS
    
        /* The API "ProductKey" is an alternative way to license the library, the major difference is that it does not require a network. Contact support@dynamsoft.com for more information. */
    
        // Dynamsoft.DWT.ProductKey = "YOUR-PRODUCT-KEY";
    
        /** LICENSE ALERT - THE END */
        Dynamsoft.DWT.ResourcesPath = "dist";
        window.onload = function () {
        Dynamsoft.DWT.Load();
        };
        var DWObject;
        function Dynamsoft_OnReady() {
        // dwtcontrolContainer is the id of the DIV to create the WebTwain instance in.
        DWObject = Dynamsoft.DWT.GetWebTwain('dwtcontrolContainer');
        }
        function AcquireImage() {
        if (DWObject) {
            DWObject.SelectSource(function () {
            DWObject.OpenSource();
            DWObject.AcquireImage(
                {
                PixelType: Dynamsoft.EnumDWT_PixelType.TWPT_RGB,
                Resolution: 200,
                IfDisableSourceAfterAcquire: true
                },
                function () {
                console.log("Successful!");
                },
                function (settings, errCode, errString) {
                alert(errString)
                }
            );
            }, function () {
            alert('SelectSource failed!');
            });
        }
        }
    </script>
    </body>
    </html>
    ```

## Documentation

* [Developer's Guide](https://www.dynamsoft.com/web-twain/docs/about/index.html)
* [API Reference](https://www.dynamsoft.com/web-twain/docs/info/api/index.html)
* [Sample Gallery](https://www.dynamsoft.com/web-twain/resources/code-gallery/)

## Features

- Document Scanning
- Document Editing
- Saving, Uploading and Downloading
- Opening Local Files

| Document Scanning        | Desktop            | Mobile  |
| ------------- |:-------------:| -----:|
| Supports up to TWAIN specification 2.3        | Windows Client Only | N/A |
| SANE compatible                               | Linux Client Only      |   N/A|
| Supports up to TWAIN specification 1.9; ICA compatible | macOS Client Only     |    N/A |
| Supports capturing via built-in mobile camera    | N/A | ✓ |
| Optional disk caching mechanism for high volume scanning (thousands of pages)    | ✓      |   N/A |
| Built-In Auto Document Feeder (ADF) and multiple image acquisition | ✓      |    N/A |
| Offers duplex scanning mode   | ✓ | N/A |
|Supports blank page detection    | ✓      |   N/A |
|Built-in wizard mode intelligently manages TWAIN states | ✓      |    N/A |
| Supports setting up image acquisition parameters (resolution, pixel type, bit depth, brightness, contrast, page size, unit, etc.) | ✓ | N/A |
| Provides native and disk file image transfer modes    | ✓      |   N/A |
| Buffered memory transfer mode | Windows Client Only      |    N/A |



[More](https://www.dynamsoft.com/web-twain/features/)

## Contact Us

[Contact Dynamsoft](https://www.dynamsoft.com/company/contact/) to resolve any issue you encounter with the library.

## License Agreement
https://www.dynamsoft.com/Products/WebTWAIN_License.aspx

## Versions

>`Dynamsoft Service (DynamsoftService.exe, 64bit)`
>
>**v17.1** (build version 1, 7, 0, 0330)
>
>`Dynamsoft Service Manager (DWASManager_17100525.dll, 64bit)`
>
>**v17.1** (build version 17, 1, 0, 0525)
>
>`Dynamic Web TWAIN (dwt_17.1.0.0525.dll, 64bit)`
>
>**v17.1** (build version 17, 1, 0, 0525)
>
>`Dynamsoft PDF Rasterizer (DynamicPdfRx64_11.2.0.0330.dll, 64bit)`
>
>**v17.1** (build version 11, 2, 0, 0330)
>
>`Dynamsoft OCR Basic Engine (DynamicOCRx64_10.0.0.0618.dll, 64bit)`
>
>**v17.1** (build version 10, 0, 0, 0618)
>
>`Dynamsoft Barcode Reader (dbrx64_8.2.0.0525.dll, 64bit)`
>
>**v8.2.0** (build version 8, 2, 0, 0525)
>
>`Dynamsoft Webcam Addon (DynamicWebcamx64_15.0.0.0625.dll, 64bit)`
>
>**v17.1** (build version 15, 0, 0, 0625)
>
>`Dynamsoft Upload Module (UploadModule_1.7.1.0525.dll, 64bit)`
>
>**v17.0** (build version 1, 7, 1, 0525)

## Changelog

Check out the [release notes](https://www.dynamsoft.com/web-twain/docs/info/schedule/stable.html?product=dwt&utm_source=npm) of the Dynamic Web TWAIN library.