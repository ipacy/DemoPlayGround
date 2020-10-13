sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/routing/History",
        "sap/ui/model/json/JSONModel"
    ],
    function (Controller, History, JSONModel) {
        "use strict";

        return Controller.extend("vistex.controller.BaseController", {
            onInit: function () {
                this.setModel(new JSONModel({
                    busy: false
                }), "viewModel");
            },

            setViewBusy: function (bValue) {
                var oViewModel = this.getModel("viewModel");
                oViewModel.setProperty("/busy", bValue);
            },

            getComponent: function () {
                return this.getOwnerComponent();
            },

            getRouter: function () {
                return this.getOwnerComponent().getRouter();
            },

            getModel: function (sName) {
                return this.getView().getModel(sName);
            },

            getGlobalModel: function () {
                return this.getOwnerComponent().getModel("globalModel");
            },

            setModel: function (oModel, sName) {
                return this.getView().setModel(oModel, sName);
            },

            getResourceBundle: function () {
                return this.getOwnerComponent().getModel("i18n").getResourceBundle();
            },

            getText: function (key, args) {
                var resourceBundle = this.getResourceBundle();
                return resourceBundle.getText(key, args);
            },

            getObj: function (sName) {
                return this.getView().byId(sName);
            },

            createViewModel: function (oModel) {
                var oData = {
                    Busy: false,
                    Delay: 0,
                    Ext: {}
                };

                oData.Ext = oModel;

                return new JSONModel(oData);
            },

            onNavBack: function () {
                var sPreviousHash = History.getInstance().getPreviousHash();

                if (sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    this.getRouter().navTo("", {}, true);
                    window.location.reload();
                }
            },

            openUrl: function (oUrl) {
                if (oUrl)
                    window.open(oUrl);
            }

        });
    });
