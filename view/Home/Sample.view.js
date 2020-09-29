sap.ui.define([
    "sap/m/Button",
    "sap/m/Text"
], function (Button, Text) {
    "use strict";

    sap.ui.jsview("vistex.view.Home.Sample", {

        getControllerName: function () {
            return "vistex.controller.Home.HomeTemplate";     // the Controller lives in Address.controller.js
        },

        createContent: function (oController) {

            // Define sample preprocessor functions
            /*   var fnXmlPreprocessor = function(xml, info, settings) {
                   return new Promise(function(resolve) {
                       setTimeout(function() {
                           // Convert apples to oranges
                           var sXml = new XMLSerializer().serializeToString(xml);
                           sXml = sXml.replace(/Category/g, "MainCategory")
                               .replace(/SupplierName/g, "Price")
                               .replace(/DimUnit/g, "UoM")
                               .replace(/MessageToast/g, "MessageBox")
                               .replace(/DateOfSale/g, "Name");
                           //sXml = sXml.replace("Category", "MainCategory");
                           resolve(new DOMParser().parseFromString(sXml, "application/xml").documentElement);
                       }, 500); // Timeout just for the effect :)
                   });
               };

               var fnViewXmlPreprocessor = function(xml, info, settings) {
                   return new Promise(function(resolve) {
                       setTimeout(function() {
                           // alert(info.name + ": " + settings.message);
                           // Convert apples to oranges
                           var sXml = new XMLSerializer().serializeToString(xml);
                           sXml = sXml.replace(/Category/g, "WeightUnit");
                           //sXml = sXml.replace("apple", 'Guava with id='+xml.outerHTML.split('id="')[1].split('"')[0]);
                           resolve(new DOMParser().parseFromString(sXml, "application/xml").documentElement);
                       }, 500); // Timeout just for the effect :)
                   });
               };

               var fnControlPreprocessor = function(controls, info, settings) {
                   return new Promise(function(resolve) {
                       setTimeout(function() {
                           // alert(info.name + ": " + settings.message);
                           // Some manipulation of the control tree
                           var oPanel = controls.getContent()[0];
                           oPanel.removeAllContent();
                           oPanel.addContent(new sap.m.Image({
                               src: "http://www.sap.com/global/ui/images/global/sap-logo.png"
                           }));
                           oPanel.addContent(new Button({
                               text: "Apple View",
                               icon: "sap-icon://nutrition-activity",
                               press: function() {
                                   alert("Fruit alert!");  // eslint-disable-line no-alert
                               }
                           }));
                           resolve(/!*return value is irrelevant for 'controls'*!/);
                       }, 500); // Timeout just for the effect :)
                   });
               };*/
            var jsview = this;
            var that = new sap.m.Page({title: "Preprocessor"});
            jsview.addContent(that);
            // Create a normal view
            // Create a view with preprocessor for 'xml'
            sap.ui.xmlview({
                viewName: "vistex.view.Home.Home",
                async: true
            }).loaded()
                .then(function (oView) {
                    that.addContent(
                        new sap.m.Toolbar({
                            content: [
                                new sap.m.Title({
                                    text: "Normal Table"
                                }).addStyleClass("sapUiSmallMargin")
                            ]
                        })
                    );
                    that.addContent(oView);
                    sap.ui.xmlview({
                        viewName: "vistex.view.Home.Home",
                        async: true,
                        preprocessors: {
                            xml: {
                                preprocessor: oController.fnXmlPreprocessor,
                                message: "'xml' preprocessor running"
                            }
                        }
                    }).loaded()
                        .then(function (oView) {
                            that.addContent(
                                new sap.m.Title({
                                    text: "XML view with 'xml' preprocessor:"
                                }).addStyleClass("sapUiSmallMargin")
                            );
                            that.addContent(oView);

                            //------------------------
                            // Create a view with preprocessor for 'viewxml'
                            sap.ui.xmlview({
                                viewName: "vistex.view.Home.Home",
                                async: true,
                                preprocessors: {
                                    viewxml: {
                                        preprocessor: oController.fnViewXmlPreprocessor,
                                        message: "'xml' preprocessor running"
                                    }
                                }
                            }).loaded()
                                .then(function (oView) {
                                    that.addContent(
                                        new sap.m.Title({
                                            text: "XML view with 'view xml' preprocessor:"
                                        }).addStyleClass("sapUiSmallMargin")
                                    );
                                    that.addContent(oView);

                                    // Create a view with preprocessor for 'controls'
                                    sap.ui.xmlview({
                                        viewName: "vistex.view.Home.Home",
                                        async: true,
                                        preprocessors: {
                                            controls: {
                                                preprocessor: oController.fnControlPreprocessor,
                                                message: "XML view with 'controls' preprocessor:"
                                            }
                                        }
                                    }).loaded()
                                        .then(function (oView) {
                                            that.addContent(
                                                new sap.m.Text({
                                                    text: "XML view with 'controls' preprocessor:"
                                                }).addStyleClass("sapUiSmallMargin")
                                            );
                                            that.addContent(oView);
                                        });
                                });
                        });
                });
        }
    });

});
