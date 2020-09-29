sap.ui.define([
    "sap/ui/core/Control",
    "sap/m/RatingIndicator",
    "sap/m/Label",
    "sap/m/Button"

], function (Control, RatingIndicator, Label, Button) {
    "use strict";
    return Control.extend("vistex.control.ProductRating", {
        metadata : {
            properties : {
                value: 	{type : "float", defaultValue : 0}
            },
            aggregations : {

            }
        },
        init : function () {

        },


        renderer : function (oRM, oControl) {
            oRM.write("<div");
            oRM.writeControlData(oControl);
            oRM.addClass("sapUiDemoWTProductRating");
            oRM.writeClasses();
            oRM.write(">");
            oRM.write("</div>");
        }
    });
});
