sap.ui.define([
    'vistex/controller/BaseController',
    'vistex/control/IntegrationCard',
    'vistex/control/ovp/IntegrationCard',
    'vistex/control/CustomContent',
    'vistex/control/VDashboard',
    "sap/m/MessageToast",
], function (BaseController, IntegrationCard, OIntegrationCard, CustomContent, VDashboard, MessageToast) {
    'use strict';

    return BaseController.extend('vistex.controller.Home.UI', {

        onInit: function () {
        },

        onResize: function (event) {
            //MessageToast.show(event.getParameter('value').message);
        },
    });
});
