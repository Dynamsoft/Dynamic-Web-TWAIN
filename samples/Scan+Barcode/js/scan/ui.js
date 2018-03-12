// tooltip
(function () {
    (function ($) {

        $.fn.easyTooltip = $.fn.easyTooltip || function (options) {

            // default configuration properties
            var defaults = {
                xOffset: 10,
                yOffset: 25,
                tooltipId: "easyTooltip",
                clickRemove: false,
                content: "",
                useElement: ""
            };

            var options = $.extend(defaults, options);
            var content;

            this.each(function () {
                var title = $(this).attr("title");
                $(this).hover(function (e) {
                    content = (options.content != "") ? options.content : title;
                    content = (options.useElement != "") ? $("#" + options.useElement).html() : content;
                    $(this).attr("title", "");
                    if (content != "" && content != undefined) {
                        $("body").append("<div id='" + options.tooltipId + "' class=''>" + content + "</div>");
                        $("#" + options.tooltipId)
                            .css("position", "absolute")
                            .css("top", (e.pageY - options.yOffset) + "px")
                            .css("left", (e.pageX + options.xOffset) + "px")
                            .css("display", "none")
                            .fadeIn("fast")
                    }
                },
                function () {
                    $("#" + options.tooltipId).remove();
                    $(this).attr("title", title);
                });
                $(this).mousemove(function (e) {
                    $("#" + options.tooltipId)
                        .css("top", (e.pageY - options.yOffset) + "px")
                        .css("left", (e.pageX + options.xOffset) + "px")
                });
                if (options.clickRemove) {
                    $(this).mousedown(function (e) {
                        $("#" + options.tooltipId).remove();
                        $(this).attr("title", title);
                    });
                }
            });
        };
    })(jQuery);

    $("#linearToolTip").easyTooltip({
        tooltipId: "tooltip",
        content: "<div class='tipBody' style='float:left; width:220px;'><div style='width:50%; float:left;'> Code 39<br />Code 93<br />Code 128<br />EAN-8<br />EAN-13</div><div style='float:right;'>Interleaved 2 of 5<br />Industrial 2 of 5<br />UPC-A<br />UPC-E<br />Codabar</div><div style='width:100%;'><img src='./image/oned.gif' style='width:100%; height:auto;'/></div></div>"
    });

    $("#qrCodeToolTip").easyTooltip({
        tooltipId: "tooltip",
        content: "<div class='tipBody' style='float:left; width:128px;'><div style='width:100%;'><img src='./image/qr.gif' style='width:100%; height:auto;'/></div></div>"
    });

    $("#pdf417ToolTip").easyTooltip({
        tooltipId: "tooltip",
        content: "<div class='tipBody' style='float:left; width:136px;'><div style='width:100%;'><img src='./image/pdf417.gif' style='width:100%; height:auto;'/></div></div>"
    });

    $("#dmToolTip").easyTooltip({
        tooltipId: "tooltip",
        content: "<div class='tipBody' style='float:left; width:128px;'><div style='width:100%;'><img src='./image/dm.gif' style='width:100%; height:auto;'/></div></div>"
    });
})();

(function () {
    $("#messageBoxWrapper").hover(
        function () {
            $("#btn-messClr").show();
        },
        function () {
            $("#btn-messClr").hide();
        }
    );

    $("#btn-messClr").click(function () {
        $("#divResult").html("");
    });


})();

//fix for activeX of dwt, use hack in dbr, need check when version change
function fixDwtActiveXCoverDbrDialog() {
    var dialog = $("div[id^=dbrdlg]");
    if (dialog.find("iframe[name='iframeForDwtActiveXCoverDbr']").length == 0) {
        var iFrame = '<iframe name="iframeForDwtActiveXCoverDbr" frameborder= "0" scrolling="no" style="filter:alpha(opacity=0);background-color:transparent; position: absolute; z-index: -1; width: 100%; height: 100%; top: 0; left:0; "></iframe>';
        dialog.append(iFrame);
    }
}

function getDialogFixedDwtActiveXCover(content) {
    var dialog = dynamsoft.dbrMasterPage20170526.getDialog(content);
    var isHtml5 = !!window.applicationCache;
    if (dynamsoft.navInfo.bIE && isHtml5) {
        dialog.append("<iframe frameborder=0 style='position:absolute; left:0; top:0; width: 100%; height:100%; z-index: 499999;'></iframe>");
    }
    return dialog;
}
