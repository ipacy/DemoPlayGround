sap.ui.define([
    "vistex/controller/BaseController",
    "sap/m/MessageBox",
    'vistex/utils/Formatter'
], function (BaseController, MessageBox, Formatter) {
    "use strict";

    return BaseController.extend("vistex.controller.App", {

        onInit: function () {
            BaseController.prototype.onInit.apply(this, arguments);
        }
    });
});
