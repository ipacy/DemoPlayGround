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
        'sap/f/Card',
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
                                value: 2
                            },
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "width",
                                value: 1
                            },
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "x",
                                value: 6
                            },
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "y",
                                value: 0
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
                                value: 2
                            },
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "x",
                                value: 0
                            },
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "y",
                                value: 0
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
                            },
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "x",
                                value: 2
                            },
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "y",
                                value: 0
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
                            },
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "x",
                                value: 2
                            },
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "y",
                                value: 0
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
                            },
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "x",
                                value: 2
                            },
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "y",
                                value: 0
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
                            },
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "x",
                                value: 2
                            },
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "y",
                                value: 0
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
                            },
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "x",
                                value: 2
                            },
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "y",
                                value: 0
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
                            },
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "x",
                                value: 2
                            },
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "y",
                                value: 0
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
                                value: 4
                            },
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "x",
                                value: 4
                            },
                            {
                                Type: "sap.ui.core.CustomData",
                                key: "y",
                                value: 0
                            }
                        ],
                    }
                ];
                let dPage = {
                    "Type": "vistex.control.VDashboard",
                    'class':'sapUiMediumMarginBeginEnd',
                    "cards": [
                        {
                            "Type": "vistex.control.IntegrationCard",
                            "title": "1",
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
                            },
                        },
                        {
                            "Type": "vistex.control.IntegrationCard",
                            "title": "2",
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
                            },
                            "height": "100%"
                        },
                        {
                            "Type": "vistex.control.IntegrationCard",
                            "title": "3",
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
                            },
                        },
                        {
                            "Type": "vistex.control.IntegrationCard",
                            "title": "3",
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
                            },
                        },
                        {
                            "Type": "vistex.control.IntegrationCard",
                            "title": "3",
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
                            },
                        },
                        {
                            "Type": "vistex.control.IntegrationCard",
                            "title": "3",
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
                            },
                        },
                        {
                            "Type": "vistex.control.IntegrationCard",
                            "title": "3",
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
                            },
                        },
                        {
                            "Type": "vistex.control.IntegrationCard",
                            "title": "3",
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
                            },
                        },
                        {
                            "Type": "vistex.control.IntegrationCard",
                            "title": "4",
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
                            },
                            "height": "100%"
                        }
                    ]
                };

                dPage.cards.forEach(function (item, i) {
                    //item.id = (Math.floor(Math.random() * 10000000000) + 1).toString()+"edr";
                    item.customData = this.sizes[i].customData;
                }.bind(this));

                let displayObj = sap.ui.base.ManagedObject.create(dPage);
                displayObj.addStyleClass('sapUiMediumMarginBeginEnd');
                this.getView().byId('myPanel').addContent(displayObj);

                let cardManifests = new sap.ui.model.json.JSONModel();
                this.getView().setModel(cardManifests, "data");
                this.getView().getModel("data").loadData("model/cardManifest.json");
            },

            onNavTo: function () {
                this.getRouter().navTo('grid');
            }
        })
    });
