sap.ui.define([
        "vistex/controller/BaseController",
],

    function (BaseController) {
        "use strict";
        return BaseController.extend("vistex.controller.SplitView", {

            onInit: function () {
                BaseController.prototype.onInit.apply(this, arguments);
            }

        });
    });
