sap.ui.define([
    "vistex/controller/BaseController",
    "sap/m/MessageBox"
], function (BaseController, MessageBox) {
    "use strict";

    return BaseController.extend("vistex.controller.App", {

        onInit: function () {
            BaseController.prototype.onInit.apply(this, arguments);
        }
    });
});
