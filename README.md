# Dynamic Web TWAIN SDK for Scanner and Camera
![version](https://img.shields.io/npm/v/dwt.svg)
![downloads](https://img.shields.io/npm/dm/dwt.svg) 
![jsdelivr](https://img.shields.io/jsdelivr/npm/hm/dwt.svg)

[Dynamic Web TWAIN](https://www.dynamsoft.com/web-twain/overview/) is a cross-platform scanning SDK designed for web document management applications. With just a few lines of JavaScript code, you can develop robust web applications to scan documents, edit images and save them to file systems. To see it in action, please visit <a href="https://demo.dynamsoft.com/web-twain/" target="_blank">**this online demo**</a>

Note: Dynamic Web TWAIN SDK **v19.3.1** is built in this package. For more detail, check the [Version Info](#versions).

## Table of Contents
- [Supported Environments](#supported-environments)
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

### Supported Web Browsers
- Chrome
- Firefox
- Edge
- Safari

### Supported OSs
- Windows
- Linux
- macOS

### Supported CPU Architectures
- x86/x64
- MIPS64
- ARM64

## License Key
[![](https://img.shields.io/badge/Get-30--day%20FREE%20Trial%20License-blue)](https://www.dynamsoft.com/customer/license/trialLicense/?product=dwt&utm_source=npm)

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

## Deployment

Dynamic Web TWAIN relies on the files in the `/dist/` folder to work. Make sure to put these files on your server and correctly refer to them by specifying the path with `ResourcesPath` (relative and absolute paths are both fine).

If you are making use of the `CDN` [jsDelivr](https://cdn.jsdelivr.net/npm/dwt), you will still need to host the `/dist/` folder somewhere on your server and refer to it by specifying the path with `ResourcesPath`. This is because file types like .msi are not allowed by this CDN.

## Quick Start

### Step 1 Create a HTML page and load **`dynamsoft.webtwain.min.js`** into your page:
- jsDelivr
```html
<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
    <script src="https://cdn.jsdelivr.net/npm/dwt@latest/dist/dynamsoft.webtwain.min.js"></script>
</head>
<body>
</body>
</html>
```

- UNPKG
```html
<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
    <script src="https://unpkg.com/dwt@latest/dist/dynamsoft.webtwain.min.js"></script>
</head>
<body>
</body>
</html>
```

   > Note that an **absolute path** is used here. Depending on the location of the code, you can modify it to a **relative path**. The best practice is to put all the files on your own server and under the same domain as your web application.

### Step 2 Add a script tag and make initial settings:

- jsDelivr
```html
<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
    <script src="https://cdn.jsdelivr.net/npm/dwt@latest/dist/dynamsoft.webtwain.min.js"></script>
</head>
<body>
    <script type="text/javascript">
      Dynamsoft.DWT.ResourcesPath = "https://cdn.jsdelivr.net/npm/dwt@latest/dist";
      //You need to set the service installer location here since the installer's size exceeds jsdelivr's limit. 
      //You'd better host the installers in your own environment.
	  Dynamsoft.DWT.ServiceInstallerLocation = 'https://unpkg.com/dwt/dist/dist/';
      Dynamsoft.DWT.ProductKey = 'DLS2eyJvcmdhbml6YXRpb25JRCI6IjIwMDAwMSJ9';
      Dynamsoft.DWT.Containers = [{ ContainerId: 'dwtcontrolContainer', Width: 270, Height: 350 }];
    </script>
</body>
</html>
```

- UNPKG
```html
<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
    <script src="https://unpkg.com/dwt@latest/dist/dynamsoft.webtwain.min.js"></script>
</head>
<body>
    <script type="text/javascript">
      Dynamsoft.DWT.ResourcesPath = "https://unpkg.com/dwt@latest/dist";
      Dynamsoft.DWT.ProductKey = 'DLS2eyJvcmdhbml6YXRpb25JRCI6IjIwMDAwMSJ9';
      Dynamsoft.DWT.Containers = [{ ContainerId: 'dwtcontrolContainer', Width: 270, Height: 350 }];
    </script>
</body>
</html>
```

> Note that `ResourcesPath`  must be set in order to use the library. 

   1. `ResourcesPath` is a relative path to where you put the directory "/dist/" and all the files in it.
   2. If you don't have a valid `ProductKey`, you can [request a trial key](https://www.dynamsoft.com/customer/license/trialLicense?product=dwt) to use.


### Step 3 Write code to use the package to do a simple document scan

> The following code demonstrates the minimum code needed to use the package. Note the addition of HTML elements as well as JavaScript code. For more sophisticated sample or demo, check out the [Sample Gallery](https://www.dynamsoft.com/web-twain/resources/code-gallery/) and our [Github Repositories](https://github.com/dynamsoft/web-twain-samples).

- jsDelivr
```html
<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
    <script src="https://cdn.jsdelivr.net/npm/dwt@latest/dist/dynamsoft.webtwain.min.js"></script>
</head>
<body>
	<button onclick="AcquireImage();">Scan</button>
    <div id="dwtcontrolContainer"></div>
    <script type="text/javascript">
      Dynamsoft.DWT.ResourcesPath = "https://cdn.jsdelivr.net/npm/dwt@latest/dist";
      //You need to set the service installer location here since the installer's size exceeds jsdelivr's limit. 
      //You'd better host the installers in your own environment.
      Dynamsoft.DWT.ServiceInstallerLocation = 'https://unpkg.com/dwt/dist/dist/';
      Dynamsoft.DWT.ProductKey = 'DLS2eyJvcmdhbml6YXRpb25JRCI6IjIwMDAwMSJ9';
      Dynamsoft.DWT.Containers = [{ ContainerId: 'dwtcontrolContainer', Width: 270, Height: 350 }];
      window.onload = function () {
        Dynamsoft.DWT.Load();
      };
      var DWTObject;
      Dynamsoft.DWT.RegisterEvent("OnWebTwainReady", function() {
        // dwtcontrolContainer is the id of the DIV to create the WebTwain instance in.
        DWTObject = Dynamsoft.DWT.GetWebTwain('dwtcontrolContainer');
      });
      function AcquireImage() {
        if (DWTObject) {
          DWTObject.SelectSourceAsync().then(function(){
            return DWTObject.AcquireImageAsync({
              PixelType: Dynamsoft.DWT.EnumDWT_PixelType.TWPT_RGB,
              Resolution: 200,
              IfCloseSourceAfterAcquire: true
            });
          }).catch(function (exp) {
            alert(exp.message);
          });
        }
      }
    </script>
</body>
</html>
```

- UNPKG
```html
<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
    <script src="https://unpkg.com/dwt@latest/dist/dynamsoft.webtwain.min.js"></script>
</head>
<body>
	<button onclick="AcquireImage();">Scan</button>
    <div id="dwtcontrolContainer"></div>
    <script type="text/javascript">
      Dynamsoft.DWT.ResourcesPath = "https://unpkg.com/dwt@latest/dist";
      Dynamsoft.DWT.ProductKey = 'DLS2eyJvcmdhbml6YXRpb25JRCI6IjIwMDAwMSJ9'; // Put your own key here
      Dynamsoft.DWT.Containers = [{ ContainerId: 'dwtcontrolContainer', Width: 270, Height: 350 }];
      window.onload = function () {
        Dynamsoft.DWT.Load();
      };
      var DWTObject;
      Dynamsoft.DWT.RegisterEvent("OnWebTwainReady", function() {
        // dwtcontrolContainer is the id of the DIV to create the WebTwain instance in.
        DWTObject = Dynamsoft.DWT.GetWebTwain('dwtcontrolContainer');
      });
      function AcquireImage() {
        if (DWTObject) {
          DWTObject.SelectSourceAsync().then(function(){
            return DWTObject.AcquireImageAsync({
              PixelType: Dynamsoft.DWT.EnumDWT_PixelType.TWPT_RGB,
              Resolution: 200,
              IfCloseSourceAfterAcquire: true
            });
          }).catch(function (exp) {
            alert(exp.message);
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

### Dynamic Web TWAIN Service for Scanner 

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

## Contact Us

[Contact Dynamsoft](https://www.dynamsoft.com/company/contact/) to resolve any issue you encounter with the library.

## License Agreement
https://www.dynamsoft.com/Products/WebTWAIN_License.aspx


## Versions

>`Dynamic Web TWAIN Service (DynamicWebTWAINService.exe, 64bit)`
>
>**v19.3.1** (build version 1, 9, 3, 1028)
>
>`Dynamic Web TWAIN Service Manager (DWASManager_19301028.dll, 64bit)`
>
>**v19.3.1** (build version 19, 3, 0, 1028)
>
>`Device Manager (DeviceManager_19301028.dll, 64bit)`
>
>**v19.3.1** (build version 19, 3, 0, 1028)
>
>`Dynamic Web TWAIN (dwt_19.3.0.1028.dll, 64bit)`
>
>**v19.3.1** (build version 19, 3, 0, 1028)
>
>`Dynamsoft Image encryption and decryption & PDF Rasterizer (DMCodecx64.dll, 64bit)`
>
>**v19.3.1** (build version 12, 0, 1, 1028)
>
>`Dynamsoft Barcode Reader (dbrx64_9.6.2.0318.dll, 64bit)`
>
>**v9.6.2** (build version 9, 6, 2, 0318)
>
>`Dynamsoft Webcam Addon (DynamicWebcamx64_19.2.0.0826.dll, 64bit)`
>
>**v19.3.1** (build version 19, 2, 0, 0826)
>
>`Dynamsoft Upload Module (UploadModule_1.9.0.0318.dll, 64bit)`
>
>**v19.3.1** (build version 1, 9, 0, 0318)

## Changelog

Check out the [release notes](https://www.dynamsoft.com/web-twain/docs/info/schedule/stable.html?product=dwt&utm_source=npm) of the Dynamic Web TWAIN library.
