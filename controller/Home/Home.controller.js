sap.ui.define([
        "vistex/controller/BaseController",
        "sap/m/MessageBox",
        "vistex/utils/Constants",
        "sap/ui/model/json/JSONModel",
        "vistex/utils/Formatter",
        "sap/m/MessageToast",
        'vistex/control/IntegrationCard',
        'vistex/control/CustomContent',
        'vistex/control/VDashboard',
    ],
    function (BaseController, MessageBox, Constants, JSONModel, Formatter, MessageToast, IntegrationCard, CustomContent, VDashboard) {
        "use strict";
        return BaseController.extend("vistex.controller.Home.Home", {
            onInit: function () {
                // sap.ui.getCore().loadLibrary("sap.viz");
                this.loadDashboardData();
            },

            loadDashboardData: function () {
                let dPage = {
                    "id": "myovp",
                    "Type": "vistex.control.VDashboard",
                    'class': 'sapUiMediumMarginBeginEnd',
                    "cards": [
                        {
                            "Type": "vistex.control.IntegrationCard",
                            "title": "{data>/cards/0/title}",
                            "subTitle": "{data>/cards/0/subTitle}",
                            "cardHeight": "{data>/cards/0/cardHeight}",
                            "cardWidth": "{data>/cards/0/cardWidth}",
                            "counter": "{data>/cards/0/counter}",
                            "manifest": "{data>/cards/0/modelData}",
                            "content": {
                                "Type": "sap.m.List",
                                "showSeparators": "Inner",
                                "items": {
                                    "path": "data>/cards/0/modelData",
                                    "templateShareable": false,
                                    "template": {
                                        "Type": "sap.m.StandardListItem",
                                        "title": "{data>name}",
                                        "icon": "sap-icon://group"
                                    }
                                }
                            },
                            "cardConfiguration": "{data>/cards/0/cardConfiguration}"
                        },
                        {
                            "Type": "vistex.control.IntegrationCard",
                            "title": "{data>/cards/1/title}",
                            "subTitle": "{data>/cards/1/subTitle}",
                            "cardHeight": "{data>/cards/1/cardHeight}",
                            "cardWidth": "{data>/cards/1/cardWidth}",
                            "counter": "{data>/cards/1/counter}",
                            "manifest": "{data>/cards/1/modelData}",
                            "content": {
                                "Type": "sap.m.List",
                                "showSeparators": "Inner",
                                "items": {
                                    "path": "data>/cards/1/modelData",
                                    "templateShareable": false,
                                    "template": {
                                        "Type": "sap.m.StandardListItem",
                                        "title": "{data>name}",
                                        "icon": "sap-icon://group"
                                    }
                                }
                            },
                            "cardConfiguration": "{data>/cards/1/cardConfiguration}"
                        },
                        {
                            "Type": "vistex.control.IntegrationCard",
                            "title": "{data>/cards/2/title}",
                            "subTitle": "{data>/cards/2/subTitle}",
                            "cardHeight": "{data>/cards/2/cardHeight}",
                            "cardWidth": "{data>/cards/2/cardWidth}",
                            "counter": "{data>/cards/2/counter}",
                            "manifest": "{data>/cards/2/modelData}",
                            "content": {
                                "Type": "sap.m.List",
                                "showSeparators": "Inner",
                                "items": {
                                    "path": "data>/cards/2/modelData",
                                    "templateShareable": false,
                                    "template": {
                                        "Type": "sap.m.StandardListItem",
                                        "title": "{data>name}",
                                        "icon": "sap-icon://group"
                                    }
                                }
                            },
                            "cardConfiguration": "{data>/cards/2/cardConfiguration}"
                        },
                        {
                            "Type": "vistex.control.IntegrationCard",
                            "title": "{data>/cards/3/title}",
                            "subTitle": "{data>/cards/3/subTitle}",
                            "cardHeight": "{data>/cards/3/cardHeight}",
                            "cardWidth": "{data>/cards/3/cardWidth}",
                            "counter": "{data>/cards/3/counter}",
                            "manifest": "{data>/cards/3/modelData}",
                            "content": {
                                "Type": "sap.m.List",
                                "showSeparators": "Inner",
                                "items": {
                                    "path": "data>/cards/3/modelData",
                                    "templateShareable": false,
                                    "template": {
                                        "Type": "sap.m.StandardListItem",
                                        "title": "{data>name}",
                                        "icon": "sap-icon://group"
                                    }
                                }
                            },
                            "cardConfiguration": "{data>/cards/3/cardConfiguration}"
                        },
                        {
                            "Type": "vistex.control.IntegrationCard",
                            "title": "{data>/cards/4/title}",
                            "subTitle": "{data>/cards/4/subTitle}",
                            "cardHeight": "{data>/cards/4/cardHeight}",
                            "cardWidth": "{data>/cards/5/cardWidth}",
                            "counter": "{data>/cards/4/counter}",
                            "manifest": "{data>/cards/4/modelData}",
                            "content": {
                                "Type": "sap.m.List",
                                "showSeparators": "Inner",
                                "items": {
                                    "path": "data>/cards/4/modelData",
                                    "templateShareable": false,
                                    "template": {
                                        "Type": "sap.m.StandardListItem",
                                        "title": "{data>name}",
                                        "icon": "sap-icon://group"
                                    }
                                }
                            },
                            "cardConfiguration": "{data>/cards/4/cardConfiguration}"
                        },
                        {
                            "Type": "vistex.control.IntegrationCard",
                            "title": "{data>/cards/5/title}",
                            "subTitle": "{data>/cards/5/subTitle}",
                            "cardHeight": "{data>/cards/5/cardHeight}",
                            "cardWidth": "{data>/cards/5/cardWidth}",
                            "counter": "{data>/cards/5/counter}",
                            "manifest": "{data>/cards/5/modelData}",
                            "content": {
                                "Type": "sap.m.List",
                                "showSeparators": "Inner",
                                "items": {
                                    "path": "data>/cards/5/modelData",
                                    "templateShareable": false,
                                    "template": {
                                        "Type": "sap.m.StandardListItem",
                                        "title": "{data>name}",
                                        "icon": "sap-icon://group"
                                    }
                                }
                            },
                            "cardConfiguration": "{data>/cards/5/cardConfiguration}"
                        },
                        {
                            "Type": "vistex.control.IntegrationCard",
                            "title": "{data>/cards/6/title}",
                            "subTitle": "{data>/cards/6/subTitle}",
                            "cardHeight": "{data>/cards/6/cardHeight}",
                            "cardWidth": "{data>/cards/6/cardWidth}",
                            "counter": "{data>/cards/6/counter}",
                            "manifest": "{data>/cards/6/modelData}",
                            "content": {
                                "Type": "sap.m.List",
                                "showSeparators": "Inner",
                                "items": {
                                    "path": "data>/cards/6/modelData",
                                    "templateShareable": false,
                                    "template": {
                                        "Type": "sap.m.StandardListItem",
                                        "title": "{data>name}",
                                        "icon": "sap-icon://group"
                                    }
                                }
                            },
                            "cardConfiguration": "{data>/cards/6/cardConfiguration}"
                        },
                        {
                            "Type": "vistex.control.IntegrationCard",
                            "title": "{data>/cards/7/title}",
                            "subTitle": "{data>/cards/7/subTitle}",
                            "cardHeight": "{data>/cards/7/cardHeight}",
                            "cardWidth": "{data>/cards/7/cardWidth}",
                            "counter": "{data>/cards/7/counter}",
                            "manifest": "{data>/cards/7/modelData}",
                            "content": {
                                "Type": "sap.m.List",
                                "showSeparators": "Inner",
                                "items": {
                                    "path": "data>/cards/7/modelData",
                                    "templateShareable": false,
                                    "template": {
                                        "Type": "sap.m.StandardListItem",
                                        "title": "{data>name}",
                                        "icon": "sap-icon://group"
                                    }
                                }
                            },
                            "cardConfiguration": "{data>/cards/7/cardConfiguration}"
                        },
                        {
                            "Type": "vistex.control.IntegrationCard",
                            "title": "{data>/cards/8/title}",
                            "subTitle": "{data>/cards/8/subTitle}",
                            "cardHeight": "{data>/cards/8/cardHeight}",
                            "cardWidth": "{data>/cards/8/cardWidth}",
                            "counter": "{data>/cards/8/counter}",
                            "manifest": "{data>/cards/8/modelData}",
                            "content": {
                                "Type": "sap.m.List",
                                "showSeparators": "Inner",
                                "items": {
                                    "path": "data>/cards/8/modelData",
                                    "templateShareable": false,
                                    "template": {
                                        "Type": "sap.m.StandardListItem",
                                        "title": "{data>name}",
                                        "icon": "sap-icon://group"
                                    }
                                }
                            },
                            "cardConfiguration": "{data>/cards/8/cardConfiguration}"
                        },
                    ]
                };

                let displayObj = sap.ui.base.ManagedObject.create(dPage);
                this.getView().byId('myPanel').setContent(displayObj);

                let cardManifests = new sap.ui.model.json.JSONModel();
                this.getView().setModel(cardManifests, "data");
                this.getView().getModel("data").loadData("model/cardData.json");
            },

            onNavTo: function () {
                this.getRouter().navTo('grid');
            },

            onSaveGridConfig: function () {
                var ovp = sap.ui.getCore().byId('myovp');
                ovp._saveGridConfig();
            }

        })
    });
