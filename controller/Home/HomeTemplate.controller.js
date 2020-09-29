sap.ui.define([
        "vistex/controller/BaseController",
        "vistex/utils/MessageHelper",
        "sap/m/MessageBox",
        "vistex/utils/Constants",
        "sap/ui/model/json/JSONModel",
        "vistex/utils/Formatter",
        "sap/m/MessageToast",
        "sap/m/Button",
        "sap/m/Text",
        "sap/ui/core/Locale",
        "sap/ui/core/LocaleData",
        "sap/ui/model/type/Currency",
        "sap/m/ObjectAttribute"
    ],
    function (BaseController, MessageHelper, MessageBox, Constants, JSONModel, Formatter, MessageToast, Button, Text,
              Locale, LocaleData, Currency, ObjectAttribute) {
        "use strict";
        return BaseController.extend("vistex.controller.Home.HomeTemplate", {

            onInit: function () {
                BaseController.prototype.onInit.apply(this, arguments);
                this.getRouter().getRoute('home').attachPatternMatched(this._onRouteMatched, this);
                var oModel = new JSONModel(sap.ui.require.toUrl("vistex/model/data.json"));
                this.getView().setModel(oModel, 'requireModel');


                var oProductsModel = new JSONModel(sap.ui.require.toUrl("vistex/model/Products.json"));
                this.getView().setModel(oProductsModel, 'products');

            },

            // Define sample preprocessor functions
            fnXmlPreprocessor: function (xml, info, settings) {
                return new Promise(function (resolve) {
                    setTimeout(function () {
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
            },

            fnViewXmlPreprocessor: function (xml, info, settings) {
                return new Promise(function (resolve) {
                    setTimeout(function () {
                        // alert(info.name + ": " + settings.message);
                        // Convert apples to oranges
                        var sXml = new XMLSerializer().serializeToString(xml);
                        sXml = sXml.replace(/Category/g, "WeightUnit");
                        //sXml = sXml.replace("apple", 'Guava with id='+xml.outerHTML.split('id="')[1].split('"')[0]);
                        resolve(new DOMParser().parseFromString(sXml, "application/xml").documentElement);
                    }, 500); // Timeout just for the effect :)
                });
            },

            fnControlPreprocessor: function (controls, info, settings) {
                return new Promise(function (resolve) {
                    setTimeout(function () {
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
                            press: function () {
                                alert("Fruit alert!");  // eslint-disable-line no-alert
                            }
                        }));
                        resolve(/*return value is irrelevant for 'controls'*/);
                    }, 500); // Timeout just for the effect :)
                });
            },

            onBeforeRendering: function (oEvent) {

            },
            onAfterRendering: function (oEvent) {

            },

            _onRouteMatched: function (oEvent) {

            },

            formatMail: function(sFirstName, sLastName) {
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                return mobileLibrary.URLHelper.normalizeEmail(
                    sFirstName + "." + sLastName + "@example.com",
                    oBundle.getText("mailSubject", [sFirstName]),
                    oBundle.getText("mailBody"));
            },

            formatStockValue : function(fUnitPrice, iStockLevel, sCurrCode) {
                var sBrowserLocale = sap.ui.getCore().getConfiguration().getLanguage();
                var oLocale = new Locale(sBrowserLocale);
                var oLocaleData = new LocaleData(oLocale);
                var oCurrency = new Currency(oLocaleData.mData.currencyFormat);
                return oCurrency.formatValue([fUnitPrice * iStockLevel, sCurrCode], "string");
            },

            onItemSelected : function(oEvent) {
                var oSelectedItem = oEvent.getSource();
                var oContext = oSelectedItem.getBindingContext("products");
                var sPath = oContext.getPath();
                var oProductDetailPanel = this.byId("productDetailsPanel");
                oProductDetailPanel.bindElement({ path: sPath, model: "products" });
            },

            productListFactory : function(sId, oContext) {
                var oUIControl;

                // Decide based on the data which dependant to clone
                if (oContext.getProperty("UnitsInStock") === 0 && oContext.getProperty("Discontinued")) {
                    // The item is discontinued, so use a StandardListItem
                    oUIControl = this.byId("productSimple").clone(sId);
                } else {
                    // The item is available, so we will create an ObjectListItem
                    oUIControl = this.byId("productExtended").clone(sId);

                    // The item is temporarily out of stock, so we will add a status
                    if (oContext.getProperty("UnitsInStock") < 1) {
                        oUIControl.addAttribute(new ObjectAttribute({
                            text : {
                                path: "i18n>outOfStock"
                            }
                        }));
                    }
                }

                return oUIControl;
            },

            submitPress: function (oEvent) {

            }

        })
    });
