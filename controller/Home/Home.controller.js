sap.ui.define([
        "vistex/controller/BaseController",
        "sap/m/MessageBox",
        "vistex/utils/Constants",
        "sap/ui/model/json/JSONModel",
        "vistex/utils/Formatter",
        "sap/m/MessageToast",
        "sap/gantt/misc/Utility",
        'sap/ui/core/mvc/Controller',
        'vistex/control/IntegrationCard',
        'vistex/control/CustomContent',
        'vistex/control/VDashboard',
        'sap/m/List',
        'sap/m/StandardListItem',
        'sap/f/Card'
    ],
    function (BaseController, MessageBox, Constants, JSONModel, Formatter, MessageToast, Utility
        , Controller, IntegrationCard, CardRenderer, CustomContent, VDashboard, List, StandardListItem) {
        "use strict";
        return BaseController.extend("vistex.controller.Home.Home", {

            onInit: function () {
                this.sizes = [
                    {
                        "customData": [
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "height",
                                value: 1
                            },
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "width",
                                value: 2
                            }
                        ],
                    },
                    {
                        "customData": [
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "height",
                                value: 3
                            },
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "width",
                                value: 3
                            }
                        ],
                    },
                /*    {
                        "customData": [
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "height",
                                value: 2
                            },
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "width",
                                value: 2
                            }
                        ],
                    },
                    {
                        "customData": [
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "height",
                                value: 2
                            },
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "width",
                                value: 3
                            }
                        ],
                    },
                    {
                        "customData": [
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "height",
                                value: 2
                            },
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "width",
                                value: 3
                            }
                        ],
                    },
                    {
                        "customData": [
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "height",
                                value: 2
                            },
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "width",
                                value: 2
                            }
                        ],
                    },
                    {
                        "customData": [
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "height",
                                value: 2
                            },
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "width",
                                value: 2
                            }
                        ],
                    },
                    {
                        "customData": [
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "height",
                                value: 2
                            },
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "width",
                                value: 3
                            }
                        ],
                    },
                    {
                        "customData": [
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "height",
                                value: 2
                            },
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "width",
                                value: 2
                            }
                        ],
                    },
                    {
                        "customData": [
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "height",
                                value: 3
                            },
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "width",
                                value: 3
                            }
                        ],
                    }*/
                ];
                var dPage = {
                    "Type": "vistex.control.VDashboard",
                    "cards": [
                        {
                            "Type": "vistex.control.IntegrationCard",
                            "title": "{data>/cards/custom2/title}",
                            "subTitle": "{data>/cards/custom2/subTitle}",
                            "header": {
                                "Type": "sap.f.cards.Header",
                                "press": "consoleLog",
                                "class": "vistexOvpCardTitle",
                                "title": "{data>/cards/custom2/title}",
                                "subtitle": "{data>/cards/custom2/subTitle}",
                                "statusText": "{data>/cards/custom2/counter}"
                            },
                            "counter": "{data>/cards/custom2/counter}",
                            "manifest": "{data>/cards/custom1/data}",
                            "content": {
                                "Type": "sap.m.List",
                                "showSeparators": "Inner",
                                "items": {
                                    "path": "data>/cards/custom1/data",
                                    "templateShareable": false,
                                    "template": {
                                        "Type": "sap.m.StandardListItem",
                                        "title": "{data>name}",
                                        "icon": "sap-icon://group"
                                    }
                                }
                            }
                        },
                        {
                            "Type": "vistex.control.IntegrationCard",
                            "title": "{data>/cards/custom2/title}",
                            "subTitle": "{data>/cards/custom2/subTitle}",
                            "header": {
                                "Type": "sap.f.cards.Header",
                                "press": "consoleLog",
                                "class": "vistexOvpCardTitle",
                                "title": "{data>/cards/custom2/title}",
                                "subtitle": "{data>/cards/custom2/subTitle}",
                                "statusText": "{data>/cards/custom2/counter}"
                            },
                            "counter": "{data>/cards/custom2/counter}",
                            "manifest": "{data>/cards/custom1/data}",
                            "content": {
                                "Type": "sap.m.List",
                                "showSeparators": "Inner",
                                "items": {
                                    "path": "data>/cards/custom1/data",
                                    "templateShareable": false,
                                    "template": {
                                        "Type": "sap.m.StandardListItem",
                                        "title": "{data>name}"
                                    }
                                }
                            }
                        },
                       /* {
                            "Type": "sap.f.Card",
                            "title": "{data>/cards/custom2/title}",
                            "subTitle": "{data>/cards/custom2/subTitle}",
                            "header": {
                                "Type": "sap.f.cards.Header",
                                "press": "consoleLog",
                                "class": "vistexOvpCardTitle",
                                "title": "{data>/cards/custom2/title}",
                                "subtitle": "{data>/cards/custom2/subTitle}",
                                "statusText": "{data>/cards/custom2/counter}"
                            },
                            "counter": "{data>/cards/custom2/counter}",
                            "manifest": "{data>/cards/custom1/data}",
                            "content": {
                                "Type": "sap.m.List",
                                "showSeparators": "Inner",
                                "items": {
                                    "path": "data>/cards/custom1/data",
                                    "templateShareable": false,
                                    "template": {
                                        "Type": "sap.m.StandardListItem",
                                        "title": "{data>name}",

                                        "authorName": "Office Notification",

                                    }
                                }
                            }
                        },
                        {
                            "Type": "sap.f.Card",
                            "title": "{data>/cards/custom2/title}",
                            "subTitle": "{data>/cards/custom2/subTitle}",
                            "header": {
                                "Type": "sap.f.cards.Header",
                                "press": "consoleLog",
                                "class": "vistexOvpCardTitle",
                                "title": "{data>/cards/custom2/title}",
                                "subtitle": "{data>/cards/custom2/subTitle}",
                                "statusText": "{data>/cards/custom2/counter}"
                            },
                            "counter": "{data>/cards/custom2/counter}",
                            "manifest": "{data>/cards/custom1/data}",
                            "content": {
                                "Type": "sap.m.List",
                                "showSeparators": "Inner",
                                "items": {
                                    "path": "data>/cards/custom1/data",
                                    "templateShareable": false,
                                    "template": {
                                        "Type": "sap.m.StandardListItem",
                                        "title": "{data>name}"
                                    }
                                }
                            }
                        },
                        {
                            "Type": "sap.f.Card",
                            "title": "{data>/cards/custom2/title}",
                            "subTitle": "{data>/cards/custom2/subTitle}",
                            "header": {
                                "Type": "sap.f.cards.Header",
                                "press": "consoleLog",
                                "class": "vistexOvpCardTitle",
                                "title": "{data>/cards/custom2/title}",
                                "subtitle": "{data>/cards/custom2/subTitle}",
                                "statusText": "{data>/cards/custom2/counter}"
                            },
                            "counter": "{data>/cards/custom2/counter}",
                            "manifest": "{data>/cards/custom1/data}",
                            "content": {
                                "Type": "sap.m.List",
                                "showSeparators": "Inner",
                                "items": {
                                    "path": "data>/cards/custom1/data",
                                    "templateShareable": false,
                                    "template": {
                                        "Type": "sap.m.StandardListItem",
                                        "title": "{data>name}",
                                        "info": "{data>description}"
                                    }
                                }
                            }
                        },
                        {
                            "Type": "sap.f.Card",
                            "title": "{data>/cards/custom2/title}",
                            "subTitle": "{data>/cards/custom2/subTitle}",
                            "header": {
                                "Type": "sap.f.cards.Header",
                                "press": "consoleLog",
                                "class": "vistexOvpCardTitle",
                                "title": "{data>/cards/custom2/title}",
                                "subtitle": "{data>/cards/custom2/subTitle}",
                                "statusText": "{data>/cards/custom2/counter}"
                            },
                            "counter": "{data>/cards/custom2/counter}",
                            "manifest": "{data>/cards/custom1/data}",
                            "content": {
                                "Type": "sap.m.List",
                                "showSeparators": "Inner",
                                "items": {
                                    "path": "data>/cards/custom1/data",
                                    "templateShareable": false,
                                    "template": {
                                        "Type": "sap.m.StandardListItem",
                                        "title": "{data>name}",
                                        "info": "{data>description}"
                                    }
                                }
                            }
                        },
                        {
                            "Type": "sap.f.Card",
                            "title": "{data>/cards/custom2/title}",
                            "subTitle": "{data>/cards/custom2/subTitle}",
                            "header": {
                                "Type": "sap.f.cards.Header",
                                "press": "consoleLog",
                                "class": "vistexOvpCardTitle",
                                "title": "{data>/cards/custom2/title}",
                                "subtitle": "{data>/cards/custom2/subTitle}",
                                "statusText": "{data>/cards/custom2/counter}"
                            },
                            "counter": "{data>/cards/custom2/counter}",
                            "manifest": "{data>/cards/custom1/data}",
                            "content": {
                                "Type": "sap.m.List",
                                "showSeparators": "Inner",
                                "items": {
                                    "path": "data>/cards/custom1/data",
                                    "templateShareable": false,
                                    "template": {
                                        "Type": "sap.m.StandardListItem",
                                        "title": "{data>name}"
                                    }
                                }
                            }
                        },
                        {
                            "Type": "sap.f.Card",
                            "title": "{data>/cards/custom2/title}",
                            "subTitle": "{data>/cards/custom2/subTitle}",
                            "header": {
                                "Type": "sap.f.cards.Header",
                                "press": "consoleLog",
                                "class": "vistexOvpCardTitle",
                                "title": "{data>/cards/custom2/title}",
                                "subtitle": "{data>/cards/custom2/subTitle}",
                                "statusText": "{data>/cards/custom2/counter}"
                            },
                            "counter": "{data>/cards/custom2/counter}",
                            "manifest": "{data>/cards/custom1/data}",
                            "content": {
                                "Type": "sap.m.List",
                                "showSeparators": "Inner",
                                "items": {
                                    "path": "data>/cards/custom1/data",
                                    "templateShareable": false,
                                    "template": {
                                        "Type": "sap.m.StandardListItem",
                                        "title": "{data>name}"
                                    }
                                }
                            }
                        },
                        {
                            "Type": "sap.f.Card",
                            "title": "{data>/cards/custom2/title}",
                            "subTitle": "{data>/cards/custom2/subTitle}",
                            "header": {
                                "Type": "sap.f.cards.Header",
                                "press": "consoleLog",
                                "class": "vistexOvpCardTitle",
                                "title": "{data>/cards/custom2/title}",
                                "subtitle": "{data>/cards/custom2/subTitle}",
                                "statusText": "{data>/cards/custom2/counter}"
                            },
                            "counter": "{data>/cards/custom2/counter}",
                            "manifest": "{data>/cards/custom1/data}",
                            "content": {
                                "Type": "sap.m.List",
                                "showSeparators": "Inner",
                                "items": {
                                    "path": "data>/cards/custom1/data",
                                    "templateShareable": false,
                                    "template": {
                                        "Type": "sap.m.StandardListItem",
                                        "title": "{data>name}"
                                    }
                                }
                            }
                        },
                        {
                            "Type": "sap.f.Card",
                            "title": "{data>/cards/custom2/title}",
                            "subTitle": "{data>/cards/custom2/subTitle}",
                            "header": {
                                "Type": "sap.f.cards.Header",
                                "press": "consoleLog",
                                "class": "vistexOvpCardTitle",
                                "title": "{data>/cards/custom2/title}",
                                "subtitle": "{data>/cards/custom2/subTitle}",
                                "statusText": "{data>/cards/custom2/counter}"
                            },
                            "counter": "{data>/cards/custom2/counter}",
                            "manifest": "{data>/cards/custom1/data}",
                            "content": {
                                "Type": "sap.m.List",
                                "showSeparators": "Inner",
                                "items": {
                                    "path": "data>/cards/custom1/data",
                                    "templateShareable": false,
                                    "template": {
                                        "Type": "sap.m.StandardListItem",
                                        "title": "{data>name}"
                                    }
                                }
                            }
                        }*/
                    ]
                };
                dPage.cards.forEach(function(item, i){
                   item.customData = this.sizes[i].customData;
                }.bind(this));
                var displayObj = sap.ui.base.ManagedObject.create(dPage);
                this.getView().byId('myPanel').addContent(displayObj);
                var cardManifests = new sap.ui.model.json.JSONModel();
                this.getView().setModel(cardManifests, "data");
                this.getView().getModel("data").loadData("model/cardManifest.json");

            },

            onBeforeRendering: function (oEvent) {

            },
            onAfterRendering: function (oEvent) {
            },

            _onRouteMatched: function (oEvent) {

            },

            onUploadOpen: function () {
                var odialog = new sap.m.Dialog();
                var oUpload = new sap.ui.unified.FileUploader();
                odialog.addContent(new sap.m.VBox({items: [oUpload]}));
                odialog.open();
            },
            onUpdateValue: function () {
                this.getView().getModel('check').setData({val: 1234});
            }


        })
    });
