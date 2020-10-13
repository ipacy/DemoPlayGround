sap.ui.define([
        "vistex/controller/BaseController",
        "sap/m/MessageBox",
        "sap/ui/model/json/JSONModel",
        "sap/m/MessageToast",
        'sap/ui/core/BusyIndicator',
        'vistex/control/ovp/IntegrationCard',
        'vistex/control/VDashboard',
    ],
    function (BaseController, MessageBox, JSONModel, MessageToast, BusyIndicator, IntegrationCard, VDashboard) {
        "use strict";
        return BaseController.extend("vistex.controller.Home.Home", {
            onInit: function () {
                sap.ui.getCore().loadLibrary("sap.viz");
                this.loadMetadata();
            },

            loadDashboardData: function (metadata) {
                let displayObj = sap.ui.base.ManagedObject.create(metadata);
                this.getView().byId('myPanel').setContent(displayObj);
                let cardManifests = new sap.ui.model.json.JSONModel("model/cardData.json");
                this.getView().setModel(cardManifests, "data");

                var ovp = sap.ui.getCore().byId('myovp');
                if (!!ovp) {
                    ovp.attachOnResize(this.onHandleResize.bind(this));
                }
                this.getView().setBusy(false);
            },

            onAfterRendering: function () {
            },

            onHandleResize: function (values) {
                let width = values.getParameter('value').width,
                    // name = values.getParameter('value').columnName,
                    range = values.getParameter('value').range,
                    cl = values.getParameter('value').column;
                let message = `Screen size: ${width} |||| Columns : ${cl} |||| Info : ${range}`;
                this.byId('myTitle').setText(message);
            },

            onNavTo: function () {
                this.getRouter().navTo('grid');
            },

            onSaveGridConfig: function () {
                var ovp = sap.ui.getCore().byId('myovp');
                ovp.updateGridConfig();
            },

            loadMetadata: function () {
                try {
                    let fetchData = {
                        method: 'GET',
                        mode: 'cors',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                    this.getView().setBusy(true);
                    fetch('model/metadata.json', fetchData)
                        .then(res => {
                            return res.json();
                        })
                        .then(function (oResponse) {
                            this.loadDashboardData(oResponse);
                        }.bind(this))
                        .catch(function (err) {

                        }.bind(this));
                } catch (e) {

                }
            }

        })
    });
