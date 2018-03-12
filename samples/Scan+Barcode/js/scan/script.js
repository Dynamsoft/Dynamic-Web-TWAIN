dynamsoft = dynamsoft || {};
dynamsoft.dwtDbrDemo20170613 = new function () {
    var demo = this;

    var isHtml5 = !!window.applicationCache;

    // Check OS version
    (function () {
        var isWin = navigator.platform.toLowerCase().indexOf('win') != -1;
        demo.isPageIsAllowed = true;
        if (!isWin) {
            var content = "<div style='line-height:26px;'>Currently, this demo only supports browsers on Windows.<br>\
            It demonstrates how to perform barcode reading from scanner on the client side.<br>\
            Want to perform barcode reading on the server side? <a href='https://www.dynamsoft.com/Demo/DBR/BarcodeReaderDemo.aspx' class='link-blue'>Try it Now &gt;&gt;</a></div>";
            $('body').append(getDialogFixedDwtActiveXCover(content));
            demo.isPageIsAllowed = false;
        }
    })();
    if (!demo.isPageIsAllowed) {
        // OS is not supported
        return;
    }

    DWObject = null;
    dbrObject = null;

    //common
    var util = new function () {
        var divResult = $("#divResult");
        this.log = function (message) {
            divResult.append(['<p>',message,'</p>'].join(""));
            divResult[0].scrollTop = divResult[0].scrollHeight;
        };
        this.error = this.important = function(message){
            divResult.append(["<p>",message,'</p>'].join(""));
            divResult[0].scrollTop = divResult[0].scrollHeight;
        }
    }

    // Dynamic Web TWAIN
    var dwt = new function () {

        var dwt = this;

        //use when Dynamsoft.WebTwainEnv.AutoLoad == false
        Dynamsoft.WebTwainEnv.Load();

        Dynamsoft_OnReady = function () {
            DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
            DWObject.IfAllowLocalCache = true;
            initDwtWork();
            dbr.initDbr();
        };

        var initDwtWork = function () {

            // Initialize scanner sources
            var dwtSourceList = $("#dwtSourceList");
            var sourceCount = DWObject.SourceCount;
            if (sourceCount == 0 && Dynamsoft.Lib.env.bMac) {
                DWObject.CloseSourceManager();
                DWObject.ImageCaptureDriverType = 0;
                DWObject.OpenSourceManager();
                sourceCount = DWObject.SourceCount;
            }

            dwtSourceList.html('');
            for (var i = 0; i < sourceCount; ++i) {
                dwtSourceList[0].options.add(new Option(DWObject.GetSourceNameItems(i), i));
            }

            $("#btn-scan").click(function () {

                
                var souIndex = dwtSourceList.val();
                if (souIndex < 0) { return; }
                DWObject.SelectSourceByIndex(souIndex);
                //util.error("Debug: " + DWObject.ErrorString);
                DWObject.CloseSource();
                //util.error("Debug: " + DWObject.ErrorString);
                DWObject.OpenSource();
                //util.error("Debug: " + DWObject.ErrorString);
                DWObject.IfDisableSourceAfterAcquire = true;
                //util.error("Debug: " + DWObject.ErrorString);

                //ifShowUI
                DWObject.IfShowUI = $("#dwt-isShowUI").prop('checked');

                //AutoFeeder
                var ifFeederEnabled = $('#dwt-AutoFeeder').prop('checked');
                DWObject.IfFeederEnabled = ifFeederEnabled;
                if (ifFeederEnabled && DWObject.ErrorCode != 0) {
                    util.error("Error setting ADF value: " + DWObject.ErrorString);
                    $('#dwt-AutoFeeder').prop('checked', false);
                }

                //duplex
                var ifDuplexEnabled = $('#dwt-Duplex').prop('checked');
                DWObject.IfDuplexEnabled = ifDuplexEnabled;
                if (ifDuplexEnabled && DWObject.ErrorCode != 0) {
                    util.error("Error setting Duplex value: " + DWObject.ErrorString);
                    $('#dwt-Duplex').prop("checked", false);
                }

                //pixelType
                DWObject.PixelType = EnumDWT_PixelType['TWPT_' + $("input[name='dwt-pixelType']:checked").val()];
                if (DWObject.ErrorCode != 0) {
                    util.error("Error setting PixelType value: " + DWObject.ErrorString);
                }

                //Set resolution. If failed, it will use the default value.
                DWObject.Resolution = $('#dwtResolutionList').val();
                if (DWObject.ErrorCode != 0) {
                    util.error("Error setting Resolution value: " + DWObject.ErrorString);
                }

                DWObject.AcquireImage();

            });

            // Invoked when scan is finished
            DWObject.RegisterEvent('OnPostAllTransfers', function () {
                if (DWObject.ErrorCode == 0) {
                    //log scan info
                    if (Dynamsoft.Lib.env.bWin || (!Dynamsoft.Lib.env.bWin && DWObject.ImageCaptureDriverType == 0)) {
                        util.log("Pixel Type: " + DWObject.PixelType + "<br />Resolution: " + DWObject.Resolution + "<br />");
                    }
                }
                util.important(DWObject.ErrorString);
                updateNum();
            });
            // Invoked when a local image has been loaded into the Dynamic Web TWAIN viewer.
            DWObject.RegisterEvent('OnPostLoad', function () {
                updateNum();
            });

            $("#btn-scan").prop("disabled", false);

            //$("#dwt-viewMode").change(function () {
            //    var modeWH = this.value.split('x');
            //    DWObject.SetViewMode(modeWH[0], modeWH[1]);
            //});
            //$("#dwt-viewMode").val("1x1");
            //$("#dwt-viewMode").change();

            //stamp to identify the image
            dwt.curImageTimeStamp;

            //only needed when you draw rect using manual div
            var showAbleWidthOri = $("#dwtcontrolContainer").width() - 2;//2 for border
            dwt.showAbleWidth;
            dwt.showAbleHeight = $("#dwtcontrolContainer").height() - 4;//4 for border
            dwt.hasScrollBar = false;

            dwt.ImageWidth;
            dwt.ImageHeight;
            dwt.oriIndex;
            dwt.cur = -1;
            dwt.count = 0;
            var dwtChangePageBtns = $("button[name='dwt-changePage']");
            var updateNum = dwt.updateNum = function (isRemoveAll) {
                var oldCur = dwt.cur;
                var oldCount = dwt.count;
                if (isRemoveAll) {
                    dwt.cur = -1;
                    dwt.count = 0;
                } else {
                    dwt.cur = DWObject.CurrentImageIndexInBuffer * 1;
                    dwt.count = DWObject.HowManyImagesInBuffer * 1;
                }

                if(oldCur == dwt.cur && oldCount == dwt.count){
                    // not change
                    return;
                }
                $("#dwt-img-num").html(dwt.cur + 1 + "/" + dwt.count);
                dwt.curImageTimeStamp = (new Date()).getTime();
                dwt.isSelectedArea = false;
                dbr.clearBarcodeRect(dwt.oriIndex);
                
                dwt.updateBtnsState();

                // leave 16px for scroll bar
                dwt.showAbleWidth = dwt.count > 1 ? showAbleWidthOri - 16 : showAbleWidthOri;

                dwt.ImageWidth = DWObject.GetImageWidth(dwt.cur);
                dwt.ImageHeight = DWObject.GetImageHeight(dwt.cur);

                dwt.oriIndex = dwt.cur;
            }

            dwt.updateBtnsState = function(){
                if (dwt.cur == -1) {
                    dwtChangePageBtns.prop("disabled", true);
                } else {
                    dwtChangePageBtns.prop("disabled", false);
                    if (dwt.cur == 0) {
                        $("#dwt-img-first").prop("disabled", true);
                        $("#dwt-img-pre").prop("disabled", true);
                    }
                    if (dwt.cur == dwt.count - 1) {
                        $("#dwt-img-next").prop("disabled", true);
                        $("#dwt-img-last").prop("disabled", true);
                    }
                }
            };

            //update when roll scrollbar
            DWObject.RegisterEvent('OnTopImageInTheViewChanged', function (sImageIndex) {
                if (DWObject.CurrentImageIndexInBuffer != sImageIndex) {
                    DWObject.CurrentImageIndexInBuffer = sImageIndex;
                }
                updateNum();
            });

            $("#dwt-img-first").click(function () {
                DWObject.CurrentImageIndexInBuffer = 0;
            });
            $("#dwt-img-pre").click(function () {
                --DWObject.CurrentImageIndexInBuffer;
            });
            $("#dwt-img-next").click(function () {
                ++DWObject.CurrentImageIndexInBuffer;
            });
            $("#dwt-img-last").click(function () {
                DWObject.CurrentImageIndexInBuffer = DWObject.HowManyImagesInBuffer - 1;
            });

            $("#dwt-rmSld").click(function () {
                if(dwt.cur == -1){
                    return;
                }
                DWObject.RemoveImage(dwt.cur);
                updateNum();
            });
            $("#dwt-rmAll").click(function () {
                DWObject.RemoveAllImages();
                updateNum(true);
            });

            dwt.isSelectedArea = false;
            dwt.areaLeft;
            dwt.areaTop;
            dwt.areaRight;
            dwt.areaBottom;
            DWObject.RegisterEvent('OnImageAreaSelected', function (sImageIndex, left, top, right, bottom) {
                dwt.isSelectedArea = true;
                dwt.areaLeft = left;
                dwt.areaTop = top;
                dwt.areaRight = right;
                dwt.areaBottom = bottom;
            });
            DWObject.RegisterEvent('OnImageAreaDeSelected', function (sImageIndex) {
                dwt.isSelectedArea = false;
            });
        };

    };

    // Dynamsoft Barcode Reader
    var dbr = new function () {

        this.initDbr = function () {

            // fix ActiveX cover the Dbr dialog in ie6~9
            var itlFixActiveX = null;
            if (dynamsoft.navInfo.bIE && !isHtml5) {
                itlFixActiveX = setInterval(fixDwtActiveXCoverDbrDialog, 200);
            }

            dynamsoft.dbrEnv.init(
                //success
                function () {
                    dbrObject = new dynamsoft.dbrEnv.BarcodeReader();
                    initReadBtn();
                    if (itlFixActiveX != null) clearInterval(itlFixActiveX);
                },
                //fail
                function () {
                    if (itlFixActiveX != null) clearInterval(itlFixActiveX);
                }
            );
        }

        var initReadBtn = function () {
            $("#btn-readBarcode").click(function () {
                var btn = $(this);
                btn.prop("disabled", true);
                $("button[name='dwt-changePage']").prop("disabled", true);
                dbr.clearBarcodeRect();

                if ($("input[name='BarcodeType']:checked").length == 0) {
                    alert("Please select at least one barcode type first.");
                    readBarcodeFinally();
                    return;
                }

                if (dwt.cur == -1) {
                    alert("There is no image in the buffer. Please scan some pages first.");
                    btn.prop("disabled", false);
                    return;
                }
                //barcode region to read
                if (dwt.isSelectedArea) {
                    dbrObject.clearAllRegions();
                    dbrObject.addRegion(dwt.areaLeft, dwt.areaTop, dwt.areaRight, dwt.areaBottom, false);
                } else {
                    dbrObject.clearAllRegions();
                }

                //barcode type
                dbrObject.barcodeFormats = getBarcodeFormat();

                //dbrRead callback
                function onDbrReadSuccess(userData, result) {
                    logResult(result);
                    if (result.length != 0 && dwt.curImageTimeStamp == userData) {
                        drawBarcodeRect(result);
                    }
                    readBarcodeFinally();
                };
                function onDbrReadFail(userData, errorCode, errorStr){
                    readBarcodeFinally();
                };

                // HTML5 browsers: use url
                if (isHtml5) {
                    var dwtUrl = DWObject.GetImagePartURL(dwt.cur);
                    dbrObject.readURLAsync(
                        dwtUrl,
                        dwt.curImageTimeStamp,
                        //success
                        onDbrReadSuccess,
                        //fail
                        onDbrReadFail
                    );
                } else {
                    // ie6-9 use base64
                    //var OriBitDepth = DWObject.GetImageBitDepth(dwt.cur);
                    //if (OriBitDepth == 1 || OriBitDepth == 4) {
                    //    DWObject.ChangeBitDepth(dwt.cur, 8, false);
                    //}
                    var size = DWObject.GetSelectedImagesSize(EnumDWT_ImageType.IT_JPG);
                    if (!size) {
                        DWObject.GetSelectedImagesSize(EnumDWT_ImageType.IT_PNG);
                    }
                    var base64 = DWObject.SaveSelectedImagesToBase64Binary();
                    dbrObject.readBase64Async(
                        base64,
                        dwt.curImageTimeStamp,
                        //success
                        onDbrReadSuccess,
                        //fail
                        onDbrReadFail
                    );
                    base64 = null;//release memory in ie
                }
            });
            // finally after #btn-readBarcode click
            var readBarcodeFinally = function () {
                $("#btn-readBarcode").prop("disabled", false);
                //enable change-page btns
                dwt.updateBtnsState();
            };

            $("#btn-readBarcode").prop("disabled", false);
        };

        function getBarcodeFormat() {
            var vType = 0;
            var barcodeTypes = $("input[name='BarcodeType']:checked");
            for (var i = 0; i < barcodeTypes.length; ++i) {
                vType = vType | (barcodeTypes[i].value * 1);
            }
            return vType;
        }

        function logResult(result) {
            var iBarcodeCount = result.getCount();
            var strMsg = ["------------------------------------------<br>"];
            if (iBarcodeCount == 0) {
                strMsg.push("No barcode found for the selected format(s).<br><br>");
            } else {
                strMsg.push("<b>Total barcode(s) found: ", iBarcodeCount, "</b><br><br>");

                for (var i = 0; i < iBarcodeCount; ++i) {
                    var barcode = result.get(i);

                    var arr = ["<b>Barcode ", (i + 1), "</b><br>",
                        "<b>Type: <span style='color:#fe8e14'>", barcode.formatString, "</span></b><br>",
                        "<b>Value: <span style='color:#fe8e14'>", convertTextForHTML(barcode.text), "</span></b><br>",
                        "<b>Data: ", barcode.data, "</b><br>",
                        "<b>Angle: ", barcode.angle, "</b><br><br>"
                    ];
                    strMsg = strMsg.concat(arr);
                }
            }

            util.log(strMsg.join(""));
        }

        function convertTextForHTML(str) {
            str = str.replace(/</g, '&lt;');
            str = str.replace(/>/g, '&gt;');
            str = ['<pre class="resultPre">', str, '</pre>'].join('');
            if ((str.indexOf('\n') & str.indexOf('\r')) != -1) {
                str = '<br>' + str;
            }
            return str;
        }

        var dwtDiv = $("#dwtcontrolContainer");
        function drawBarcodeRect(result) {
            var zoom;
            if (dwt.showAbleWidth / dwt.showAbleHeight >= dwt.ImageWidth / dwt.ImageHeight) {
                zoom = dwt.showAbleHeight / dwt.ImageHeight;
            } else {
                zoom = dwt.showAbleWidth / dwt.ImageWidth;
            }
            for (var i = 0; i < result.length; ++i) {
                var info = result.get(i);
                // HTML5 borwsers: show rectangles and numbers. We use div to manually draw the rectangles, you can use OverlayRectangle as well
                if (isHtml5) {
                    var leftBase = 1 + dwt.showAbleWidth / 2 - dwt.ImageWidth / 2 * zoom;
                    var topBase = 1 + dwt.showAbleHeight / 2 - dwt.ImageHeight / 2 * zoom;
                    var left = leftBase + info.left * zoom;
                    var top = topBase + info.top * zoom;
                    var width = info.width * zoom;
                    var height = info.height * zoom;
                    dwtDiv.append(['<div class="barcodeInfoRect" style="left:', left, 'px;top:', top, 'px;width:', width, 'px;height:', height, 'px;">',
                        '<div class="spanContainer">', '<span>[', i + 1, ']</span></div></div>'].join(''));
                } else {
                    // IE6-9: only show rect, use OverlayRectangle to draw rectangles
                    var left = info.left;
                    var top = info.top;
                    var right = info.left + info.width;
                    var bottom = info.top + info.height;
                    var borderWidth = Math.floor(1 / zoom);
                    DWObject.OverlayRectangle(dwt.cur, left - borderWidth, top, left, bottom, 0xFF, 1);
                    DWObject.OverlayRectangle(dwt.cur, left, top - borderWidth, right, top, 0xFF, 1);
                    DWObject.OverlayRectangle(dwt.cur, right - borderWidth, top, right, bottom, 0xFF, 1);
                    DWObject.OverlayRectangle(dwt.cur, left, bottom - borderWidth, right, bottom, 0xFF, 1);
                }
            }
        }

        this.clearBarcodeRect = function (index) {
            if (isHtml5) {
                $(".barcodeInfoRect").remove();
            }
            // clear rect using OverlayRectangle make memery rise sharply
            //else {
            //    // clear when using OverlayRectangle to draw rect
            //    index = index || dwt.cur;
            //    DWObject.OverlayRectangle(index, 0, 0, dwt.ImageWidth, dwt.ImageHeight, 0xFFFFFF, 0.0000000001);
            //}
        }
    };
}