sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "vistex/model/models",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/JSONView",
    "sap/ui/base/ManagedObject",
    "sap/ui/core/mvc/EventHandlerResolver",
], function (UIComponent, Device, models, JSONModel, JSONView, ManagedObject, EventHandlerResolver) {
    "use strict";

    return UIComponent.extend("vistex.Component", {

        metadata: {
            manifest: "json"
        },

        init: function () {
            this.setModel(models.createDeviceModel(), "device");

            UIComponent.prototype.init.apply(this, arguments);
            this.getRouter().initialize();
        },


        destroy: function () {
            UIComponent.prototype.destroy.apply(this, arguments);
        },

        getContentDensityClass: function () {
            if (this._sContentDensityClass === undefined) {
                if (jQuery(document.body).hasClass("sapUiSizeCozy") || jQuery(document.body).hasClass("sapUiSizeCompact")) {
                    this._sContentDensityClass = "";
                } else if (!Device.support.touch) {
                    this._sContentDensityClass = "sapUiSizeCompact";
                } else {
                    this._sContentDensityClass = "sapUiSizeCozy";
                }
            }
            return this._sContentDensityClass;
        }
    });
});
