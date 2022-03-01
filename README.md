# Dynamic Web TWAIN SDK for Scanner and Camera
![version](https://img.shields.io/npm/v/dwt.svg)
![downloads](https://img.shields.io/npm/dm/dwt.svg) 
![jsdelivr](https://img.shields.io/jsdelivr/npm/hm/dwt.svg)
![](https://img.shields.io/snyk/vulnerabilities/npm/dwt.svg)

[Dynamic Web TWAIN](https://www.dynamsoft.com/web-twain/overview/) is a cross-platform scanning SDK designed for web document management applications. With just a few lines of JavaScript code, you can develop robust web applications to scan documents, edit images and save them to file systems. To see it in action, please visit <a href="https://demo.dynamsoft.com/web-twain/" target="_blank">**this online demo**</a>

Note: Dynamic Web TWAIN SDK **v17.2.1** is built in this package. For more detail, check the [Version Info](#versions).

## Table of Contents
- [Supported Environments](#supported-environment)
- [License Key](#license-key)
- [Installation](#installation)
- [Deployment](#deployment)
- [Quick Start](#quick-start)
- [Documentation](#documentation)
- [Features](#features)
- [Contact Us](#contact-us)
- [License Agreement](#license-agreement)
- [Versions](#versions)

## Supported Environments

### Supported Image Capturing Devices
- Physical Document Scanners
- Desktop Webcam
- Mobile Camera

### Supported Web Browsers
- Chrome
- Firefox
- Edge
- Internet Explorer
- Safari

### Supported OSs
- Windows
- Linux
- macOS
- Android / iOS (Remote scanner or camera)

### Supported CPU Architectures
- x86/x64
- MIPS64
- ARM64

## License Key
[![](https://img.shields.io/badge/Get-30--day%20FREE%20Trial%20License-blue)](https://www.dynamsoft.com/customer/license/trialLicense/?product=dwt)

## Installation

- Official web site
	
    **Dynamic Web TWAIN SDK for Windows, Linux, macOS**
    
    [![](https://img.shields.io/badge/Download-Offline%20SDK-orange)](https://www.dynamsoft.com/web-twain/downloads)

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

### Step 1 Create a HTML page and load **`dynamsoft.webtwain.min.js`** into your page:

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

### Step 2 Add a script tag and make initial settings:

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
	  Dynamsoft.DWT.ProductKey = 't0140cQMAA...';
      Dynamsoft.DWT.Containers = [{ ContainerId: 'dwtcontrolContainer', Width: 270, Height: 350 }];
	</script>
</body>
</html>
   ```

> Note that `ResourcesPath`  must be set in order to use the library. 

   1. `ResourcesPath` is a relative path to where you put the directory "/dist/" and all the files in it.
   2. If you don't have a valid `ProductKey`, you can [request a trial key](https://www.dynamsoft.com/customer/license/trialLicense?product=dwt) to use.


### Step 3 Write code to use the package to do a simple document scan

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
	  Dynamsoft.DWT.ResourcesPath = "dist";
	  Dynamsoft.DWT.ProductKey = 't0140cQMAA...'; // Put your own key here
      Dynamsoft.DWT.Containers = [{ ContainerId: 'dwtcontrolContainer', Width: 270, Height: 350 }];
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

### Dynamsoft Service for Scanner 

| Features     | Windows            | Linux  | macOS|
| ------------- |:-------------:| -----:| -----:|
| Supports up to TWAIN specification 2.3        | :heavy_check_mark: | :x: |:x:|
| SANE compatible                               | :x:     |   :heavy_check_mark:|:x:|
| Supports up to TWAIN specification 1.9; ICA compatible | :x:|  :x:   |    :heavy_check_mark: |
| Supports capturing document  | :heavy_check_mark: | :heavy_check_mark: |:heavy_check_mark:|
| Supports editing document     | :heavy_check_mark: | :heavy_check_mark: |:heavy_check_mark:|
| Optional disk caching mechanism for high volume scanning (thousands of pages)    | :heavy_check_mark:     |   :heavy_check_mark: |:heavy_check_mark:|
| Built-In Auto Document Feeder (ADF) and multiple image acquisition | :heavy_check_mark:      |    :heavy_check_mark: |:heavy_check_mark:|
| Offers duplex scanning mode   | :heavy_check_mark: | :heavy_check_mark: |:heavy_check_mark:|
| Supports blank page detection    | :heavy_check_mark:     |   :heavy_check_mark: |:heavy_check_mark:|
| Supports setting up image acquisition parameters (resolution, pixel type, bit depth, brightness, contrast, page size, unit, etc.) | :heavy_check_mark: |:heavy_check_mark: |:heavy_check_mark:|
| Provides native and disk file image transfer modes    | :heavy_check_mark:    |   :heavy_check_mark: |:heavy_check_mark:|
| Buffered memory transfer mode | :heavy_check_mark:     |    :x: |:x:|

[More](https://www.dynamsoft.com/web-twain/features/)

### WebAssembly for Camera 

| Features     | Desktop            | Mobile  |
| ------------- |:-------------:| -----:|
| Document capture | :heavy_check_mark: | :heavy_check_mark: |
| Document edge detection    | :heavy_check_mark:     |  :heavy_check_mark: |
| Document perspective correction | :heavy_check_mark:     |  :heavy_check_mark: |
| Document post-processing by filters| :heavy_check_mark:     |  :heavy_check_mark: |
| Front and rear camera switching |:heavy_check_mark:     |  :heavy_check_mark: |
| Dedicated image and PDF viewer|:heavy_check_mark:     |  :heavy_check_mark: |
| Built-in ready-to-use UI| :heavy_check_mark:     |  :heavy_check_mark: |
| SIMD and WebGL acceleration | :heavy_check_mark:     |  :heavy_check_mark: |
| Multi-Format export and sharing | :heavy_check_mark:     |  :heavy_check_mark: |

[More](https://www.dynamsoft.com/web-twain/features/mobile-web-capture-sdk/)

## Contact Us

[Contact Dynamsoft](https://www.dynamsoft.com/company/contact/) to resolve any issue you encounter with the library.

## License Agreement
https://www.dynamsoft.com/Products/WebTWAIN_License.aspx


## Versions

>`Dynamsoft Service (DynamsoftService.exe, 64bit)`
>
>**v17.2.1** (build version 1, 7, 2, 0228)
>
>`Dynamsoft Service Manager (DWASManager_17210228.dll, 64bit)`
>
>**v17.2.1** (build version 17, 2, 1, 0228)
>
>`Dynamic Web TWAIN (dwt_17.2.1.0228.dll, 64bit)`
>
>**v17.2.1** (build version 17, 2, 1, 0228)
>
>`Dynamsoft PDF Rasterizer (DynamicPdfRx64_11.3.0.1026.dll, 64bit)`
>
>**v17.2.1** (build version 11, 3, 0, 1026)
>
>`Dynamsoft OCR Basic Engine (DynamicOCRx64_10.0.0.0618.dll, 64bit)`
>
>**v17.2.1** (build version 10, 0, 0, 0618)
>
>`Dynamsoft Barcode Reader (dbrx64_8.6.0.1026.dll, 64bit)`
>
>**v8.6.0** (build version 8, 6, 0, 1026)
>
>`Dynamsoft Webcam Addon (DynamicWebcamx64_15.0.0.0625.dll, 64bit)`
>
>**v17.2.1** (build version 15, 0, 0, 0625)
>
>`Dynamsoft Upload Module (UploadModule_1.7.2.1026.dll, 64bit)`
>
>**v17.2.1** (build version 1, 7, 2, 1026)

## Changelog

Check out the [release notes](https://www.dynamsoft.com/web-twain/docs/info/schedule/stable.html?product=dwt&utm_source=npm) of the Dynamic Web TWAIN library.


**Note**

If you are upgrading from the old versions to V17.1+, please add the following code after Dynamsoft.DWT.ProductKey to make [Dynamsoft.DWT.Load](https://www.dynamsoft.com/web-twain/docs/info/api/Dynamsoft_WebTwainEnv.html#load) take effect.

> Dynamsoft.DWT.Containers = [{ ContainerId: 'dwtcontrolContainer', Width: 270, Height: 350 }];

Otherwise, the initialization will fail.
