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
                                value: 1
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
                    'class': 'sapUiMediumMarginBeginEnd',
                    "cards": [
                        {
                            "Type": "vistex.control.IntegrationCard",
                            "title": "{data>/cards/0/title}",
                            "subTitle": "{data>/cards/0/subTitle}",
                            "header": {
                                "Type": "sap.f.cards.Header",
                                "press": "consoleLog",
                                "class": "vistexOvpCardTitle",
                                "title": "{data>/cards/0/title}",
                                "subTitle": "{data>/cards/0/subTitle}",
                                "statusText": "{data>/cards/0/counter}",
                            },
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
                        },
                        {
                            "Type": "vistex.control.IntegrationCard",
                            "title": "{data>/cards/1/title}",
                            "subTitle": "{data>/cards/1/subTitle}",
                            "header": {
                                "Type": "sap.f.cards.Header",
                                "press": "consoleLog",
                                "class": "vistexOvpCardTitle",
                                "title": "{data>/cards/1/title}",
                                "subTitle": "{data>/cards/1/subTitle}",
                                "statusText": "{data>/cards/1/counter}",
                            },
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
                        },
                        {
                            "Type": "vistex.control.IntegrationCard",
                            "title": "{data>/cards/2/title}",
                            "subTitle": "{data>/cards/2/subTitle}",
                            "header": {
                                "Type": "sap.f.cards.Header",
                                "press": "consoleLog",
                                "class": "vistexOvpCardTitle",
                                "title": "{data>/cards/2/title}",
                                "subTitle": "{data>/cards/2/subTitle}",
                                "statusText": "{data>/cards/2/counter}",
                            },
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
                        },
                        {
                            "Type": "vistex.control.IntegrationCard",
                            "title": "{data>/cards/0/title}",
                            "subTitle": "{data>/cards/0/subTitle}",
                            "header": {
                                "Type": "sap.f.cards.Header",
                                "press": "consoleLog",
                                "class": "vistexOvpCardTitle",
                                "title": "{data>/cards/0/title}",
                                "subTitle": "{data>/cards/0/subTitle}",
                                "statusText": "{data>/cards/0/counter}",
                            },
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
                        },
                        {
                            "Type": "vistex.control.IntegrationCard",
                            "title": "{data>/cards/4/title}",
                            "subTitle": "{data>/cards/4/subTitle}",
                            "header": {
                                "Type": "sap.f.cards.Header",
                                "press": "consoleLog",
                                "class": "vistexOvpCardTitle",
                                "title": "{data>/cards/4/title}",
                                "subTitle": "{data>/cards/4/subTitle}",
                                "statusText": "{data>/cards/4/counter}",
                            },
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
                        },
                        {
                            "Type": "vistex.control.IntegrationCard",
                            "title": "{data>/cards/5/title}",
                            "subTitle": "{data>/cards/5/subTitle}",
                            "header": {
                                "Type": "sap.f.cards.Header",
                                "press": "consoleLog",
                                "class": "vistexOvpCardTitle",
                                "title": "{data>/cards/5/title}",
                                "subTitle": "{data>/cards/5/subTitle}",
                                "statusText": "{data>/cards/5/counter}",
                            },
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
                        },
                        {
                            "Type": "vistex.control.IntegrationCard",
                            "title": "{data>/cards/6/title}",
                            "subTitle": "{data>/cards/6/subTitle}",
                            "header": {
                                "Type": "sap.f.cards.Header",
                                "press": "consoleLog",
                                "class": "vistexOvpCardTitle",
                                "title": "{data>/cards/6/title}",
                                "subTitle": "{data>/cards/6/subTitle}",
                                "statusText": "{data>/cards/6/counter}",
                            },
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
                        },
                        {
                            "Type": "vistex.control.IntegrationCard",
                            "title": "{data>/cards/7/title}",
                            "subTitle": "{data>/cards/7/subTitle}",
                            "header": {
                                "Type": "sap.f.cards.Header",
                                "press": "consoleLog",
                                "class": "vistexOvpCardTitle",
                                "title": "{data>/cards/7/title}",
                                "subTitle": "{data>/cards/7/subTitle}",
                                "statusText": "{data>/cards/7/counter}",
                            },
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
                        },
                        {
                            "Type": "vistex.control.IntegrationCard",
                            "title": "{data>/cards/8/title}",
                            "subTitle": "{data>/cards/8/subTitle}",
                            "header": {
                                "Type": "sap.f.cards.Header",
                                "press": "consoleLog",
                                "class": "vistexOvpCardTitle",
                                "title": "{data>/cards/8/title}",
                                "subTitle": "{data>/cards/8/subTitle}",
                                "statusText": "{data>/cards/8/counter}",
                            },
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
                        },

                    ]
                };

                dPage.cards.forEach(function (item, i) {
                    item.title = (i + 1).toString();
                    item.customData = this.sizes[i].customData;
                }.bind(this));

                let displayObj = sap.ui.base.ManagedObject.create(dPage);
                displayObj.addStyleClass('sapUiMediumMarginBeginEnd');
                this.getView().byId('myPanel').setContent(displayObj);

                let cardManifests = new sap.ui.model.json.JSONModel();
                this.getView().setModel(cardManifests, "data");
                this.getView().getModel("data").loadData("model/cardData.json");
            },

            onNavTo: function () {
                this.getRouter().navTo('grid');
            }
        })
    });
