sap.ui.define([
        "vistex/controller/BaseController",
        "sap/m/MessageBox",
        "vistex/utils/Constants",
        "sap/ui/model/json/JSONModel",
        "vistex/utils/Formatter",
        "sap/m/MessageToast",
        'vistex/control/IntegrationCard',
        'vistex/control/ovp/IntegrationCard',
        'vistex/control/CustomContent',
        'vistex/control/VDashboard'
    ],
    function (BaseController, MessageBox, Constants, JSONModel, Formatter, MessageToast, OIntegrationCard, CustomContent, VDashboard) {
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
                    "cards": [
                        {
                            "Type": "vistex.control.ovp.IntegrationCard",
                            "cardHeight": "{data>/cards/0/cardHeight}",
                            "cardWidth": "{data>/cards/0/cardWidth}",
                            "header": {
                                "Type": "sap.f.cards.Header",
                                "title": "{data>/cards/0/title}",
                                "subtitle": "{data>/cards/0/subTitle}",
                                "statusText": "{data>/cards/0/info}"
                            },
                            "content": {
                                "Type": "sap.m.ScrollContainer",
                                "width": "100%",
                                "height": "100%",
                                "vertical": true,
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
                                }
                            },
                            "cardConfiguration": "{data>/cards/0/cardConfiguration}"
                        },
                        {
                            "Type": "vistex.control.ovp.IntegrationCard",
                            "cardHeight": "{data>/cards/1/cardHeight}",
                            "cardWidth": "{data>/cards/1/cardWidth}",
                            "header": {
                                "Type": "sap.f.cards.Header",
                                "title": "{data>/cards/1/title}",
                                "subtitle": "{data>/cards/1/subTitle}",
                                "statusText": "{data>/cards/1/info}",
                            },
                            "content": {
                                "Type": "sap.m.List",
                                "showSeparators": "Inner",
                                "items": {
                                    "path": "data>/cards/1/modelData",
                                    "templateShareable": false,
                                    "template": {
                                        "Type": "sap.m.DisplayListItem",
                                        "label": "{data>name}",
                                        "value": "{data>info}"
                                    }
                                }
                            },
                            "cardConfiguration": "{data>/cards/1/cardConfiguration}"
                        },
                        {
                            "Type": "vistex.control.ovp.IntegrationCard",
                            "cardHeight": "{data>/cards/2/cardHeight}",
                            "cardWidth": "{data>/cards/2/cardWidth}",
                            "header": {
                                "Type": "sap.f.cards.Header",
                                "title": "{data>/cards/2/title}",
                                "subtitle": "{data>/cards/2/subTitle}",
                                "statusText": "{data>/cards/2/info}",
                            },
                            "content": {
                                "Type": "sap.m.ScrollContainer",
                                "width": "100%",
                                "height": "100%",
                                "vertical": true,
                                "content": {
                                    "Type": "sap.m.List",
                                    "showSeparators": "Inner",
                                    "items": {
                                        "path": "data>/cards/2/modelData",
                                        "templateShareable": false,
                                        "template": {
                                            "Type": "sap.m.FeedListItem",
                                            "text": "{data>name}",
                                            "info": "{data>info}",
                                            "icon": "sap-icon://photo-voltaic"
                                        }
                                    }
                                }
                            },
                            "cardConfiguration": "{data>/cards/2/cardConfiguration}"
                        },
                        {
                            "Type": "vistex.control.ovp.IntegrationCard",
                            "cardHeight": "{data>/cards/3/cardHeight}",
                            "cardWidth": "{data>/cards/3/cardWidth}",
                            "header": {
                                "Type": "sap.f.cards.Header",
                                "title": "{data>/cards/3/title}",
                                "subtitle": "{data>/cards/3/subTitle}",
                                "statusText": "{data>/cards/3/info}",
                            },
                            "content": {
                                "Type": "sap.m.List",
                                "showSeparators": "Inner",
                                "items": {
                                    "path": "data>/cards/3/modelData",
                                    "templateShareable": false,
                                    "template": {
                                        "Type": "sap.m.StandardListItem",
                                        "title": "{data>name}",
                                        "description": "{data>description}"
                                    }
                                }
                            },
                            "cardConfiguration": "{data>/cards/3/cardConfiguration}"
                        },
                        {
                            "Type": "vistex.control.ovp.IntegrationCard",
                            "cardHeight": "{data>/cards/4/cardHeight}",
                            "cardWidth": "{data>/cards/4/cardWidth}",
                            "header": {
                                "Type": "sap.f.cards.Header",
                                "title": "{data>/cards/4/title}",
                                "subtitle": "{data>/cards/4/subTitle}",
                                "statusText": "{data>/cards/4/info}",
                            },
                            "content": {
                                "Type": "sap.m.List",
                                "showSeparators": "Inner",
                                "items": {
                                    "path": "data>/cards/4/modelData",
                                    "templateShareable": false,
                                    "template": {
                                        "Type": "sap.m.NotificationListItem",
                                        "title": "{data>name}",
                                        "description": "{data>description}",
                                        "priority": "None",
                                        "datetime": "1 hour",
                                        "authorName": "{data>info}",
                                        "authorPicture":"sap-icon://group"
                                    }
                                }
                            },
                            "cardConfiguration": "{data>/cards/4/cardConfiguration}"
                        },
                        {
                            "Type": "vistex.control.ovp.IntegrationCard",
                            "cardHeight": "{data>/cards/5/cardHeight}",
                            "cardWidth": "{data>/cards/5/cardWidth}",
                            "header": {
                                "Type": "sap.f.cards.Header",
                                "title": "{data>/cards/5/title}",
                                "subtitle": "{data>/cards/5/subTitle}",
                                "statusText": "{data>/cards/5/info}",
                            },
                            "content": {
                                "Type": "sap.m.PDFViewer",
                                "source": "assets/sample.pdf"
                            },
                            "cardConfiguration": "{data>/cards/5/cardConfiguration}"
                        },
                        {
                            "Type": "vistex.control.ovp.IntegrationCard",
                            "cardHeight": "{data>/cards/6/cardHeight}",
                            "cardWidth": "{data>/cards/6/cardWidth}",
                            "header": {
                                "Type": "sap.f.cards.Header",
                                "title": "{data>/cards/6/title}",
                                "subtitle": "{data>/cards/6/subTitle}",
                                "statusText": "{data>/cards/6/info}",
                            },
                            "content": {
                                "Type": "sap.m.List",
                                "showSeparators": "Inner",
                                "items": {
                                    "path": "data>/cards/6/modelData",
                                    "templateShareable": false,
                                    "template": {
                                        "Type": "sap.m.ObjectListItem",
                                        "title": "{data>name}",
                                        "icon": "sap-icon://group"
                                    }
                                }
                            },
                            "cardConfiguration": "{data>/cards/6/cardConfiguration}"
                        },
                        {
                            "Type": "vistex.control.ovp.IntegrationCard",
                            "cardHeight": "{data>/cards/7/cardHeight}",
                            "cardWidth": "{data>/cards/7/cardWidth}",
                            "header": {
                                "Type": "sap.f.cards.Header",

                                "title": "{data>/cards/7/title}",
                                "subtitle": "{data>/cards/7/subTitle}",
                                "statusText": "{data>/cards/7/info}",
                            },
                            "content": {
                                "Type": "sap.m.Table",
                                "columns": [
                                    {
                                        "Type": "sap.m.Column",
                                        "header": {
                                            "Type": "sap.m.Text",
                                            "text": "name"
                                        }
                                    },
                                    {
                                        "Type": "sap.m.Column",
                                        "minScreenWidth": "Desktop",
                                        "demandPopin": true,
                                        "header": {
                                            "Type": "sap.m.Text",
                                            "text": "Description"
                                        }
                                    },
                                    {
                                        "Type": "sap.m.Column",
                                        "minScreenWidth": "Desktop",
                                        "demandPopin": true,
                                        "header": {
                                            "Type": "sap.m.Text",
                                            "text": "Info"
                                        }
                                    }
                                ],
                                "items": {
                                    "path": "data>/cards/7/modelData",
                                    "templateShareable": false,
                                    "template": {
                                        "Type": "sap.m.ColumnListItem",
                                        "type": "Navigation",
                                        "cells": [
                                            {
                                                "Type": "sap.m.Text",
                                                "text": "{data>name}"
                                            },
                                            {
                                                "Type": "sap.m.Text",
                                                "text": "{data>description}"
                                            },
                                            {
                                                "Type": "sap.m.Text",
                                                "text": "{data>info}"
                                            }
                                        ]
                                    }
                                }
                            },
                            "cardConfiguration": "{data>/cards/7/cardConfiguration}"
                        },
                        {
                            "Type": "vistex.control.ovp.IntegrationCard",
                            "cardHeight": "{data>/cards/8/cardHeight}",
                            "cardWidth": "{data>/cards/8/cardWidth}",
                            "header": {
                                "Type": "sap.f.cards.Header",

                                "title": "{data>/cards/8/title}",
                                "subtitle": "{data>/cards/8/subTitle}",
                                "statusText": "{data>/cards/8/info}",
                            },
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
                        }
                    ]
                };

                let displayObj = sap.ui.base.ManagedObject.create(dPage);
                this.getView().byId('myPanel').setContent(displayObj);
                let cardManifests = new sap.ui.model.json.JSONModel("model/cardData.json");
                this.getView().setModel(cardManifests, "data");
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
