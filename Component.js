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

         /*   JSONView.prototype.onControllerConnected = function (oController) {
                var that = this;

                //use preprocessors to fix IDs, associations and event handler references
                ManagedObject.runWithPreprocessors(function () {
                        // parse
                        that.applySettings({
                            content: that._oJSONView.content
                        }, oController);
                    },

                    {
                        // preprocessors
                        id: function (sId) {
                            // prefix only if prefix doesn't exist already. Avoids double prefixes
                            // for composite components (now done in createId)
                            return that.createId(sId);
                        },
                        // preprocess 'mSettings' for setting the controller as Listener for defined events
                        // => make sure to store old preprocessor in case of nested views
                        settings: function (oSettings) {
                            var oMetadata = this.getMetadata(),
                                aValidKeys = oMetadata.getJSONKeys(), // UID names required, they're part of the documented contract
                                sKey, oValue, oKeyInfo;
                            for (sKey in oSettings) {
                                if (sKey === "class" && typeof this.addStyleClass === "function") {
                                    this.addStyleClass(oSettings[sKey]);
                                }
                                if (oSettings[sKey] && oSettings[sKey]['sorter'] && oSettings[sKey]['sorter']['path']) {
                                    oSettings[sKey]['sorter'] = new sap.ui.model.Sorter(oSettings[sKey]['sorter']);
                                }

                                var propertyInfo = this.getMetadata().getProperty(sKey);
                                if (propertyInfo && propertyInfo.type === 'boolean' && typeof oSettings[sKey] === 'string') {
                                    var bindingInfo = ManagedObject['bindingParser'](oSettings[sKey], null, true);
                                    if (typeof bindingInfo === 'string') {
                                        oSettings[sKey] = bindingInfo === 'true';
                                    }
                                }

                                // get info object for the key
                                if ((oKeyInfo = aValidKeys[sKey]) !== undefined) {
                                    oValue = oSettings[sKey];
                                    switch (oKeyInfo._iKind) {
                                        case 3: // SINGLE ASSOCIATIONS
                                            // prefix the association ids with the view id
                                            if (typeof oValue === "string") {
                                                oSettings[sKey] = that.createId(oValue);
                                            }
                                            break;
                                        case 5: // EVENTS
                                            if (typeof oValue === "string") {
                                                oSettings[sKey] = EventHandlerResolver.resolveEventHandler(oValue, oController);
                                            }
                                            break;
                                    }
                                }
                            }

                            delete oSettings.class;
                        }
                    });
            };*/

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
