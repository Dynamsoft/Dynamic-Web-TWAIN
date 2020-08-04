# Dynamic Web TWAIN SDK
version 16.1

## Introduction

[Dynamic Web TWAIN][1] is a cross-platform scanning SDK designed for web document management applications. With just a few lines of JavaScript code, you can develop robust web applications to scan documents, edit images and save them to file systems on **Windows**, **Linux** and **macOS**.

## License
Get a [FREE 30-day trial license](https://www.dynamsoft.com/CustomerPortal/Portal/Triallicense.aspx).

## Download
https://www.dynamsoft.com/Downloads/WebTWAIN_Download.aspx

## Documentation

https://www.dynamsoft.com/help/TWAIN/WebTwain/index.htm.

## Features (Desktop and Mobile)

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



[More][2]



## Samples
https://www.dynamsoft.com/Downloads/WebTWAIN-Sample-Download.aspx

## Getting Started
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
	var DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
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

## Contact Us
support@dynamsoft.com

## License Agreement
https://www.dynamsoft.com/Products/WebTWAIN_License.aspx

[1]:https://www.dynamsoft.com/Products/WebTWAIN_Overview.aspx
[2]:https://www.dynamsoft.com/Products/WebTWAIN_Features.aspx
