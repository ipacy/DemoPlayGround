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
                let wid = [4,3,2,1, 2, 2, 2, 2, 2, 2]
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
                    /*  {
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

           /*     for (var i = 0; i < this.sizes.length; i++) {
                    this.sizes[i].customData[1].value = wid[i];
                }*/

                var dPage = {
                    "Type": "vistex.control.VDashboard",
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
                        },

                        /*   {
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

                dPage.cards.forEach(function (item, i) {
                    item.customData = this.sizes[i].customData;
                }.bind(this));

                var displayObj = sap.ui.base.ManagedObject.create(dPage);

                this.getView().byId('myPanel').addContent(displayObj);

                var cardManifests = new sap.ui.model.json.JSONModel();
                this.getView().setModel(cardManifests, "data");
                this.getView().getModel("data").loadData("model/cardManifest.json");

            },

            onNavTo: function (){
                this.getRouter().navTo('grid');
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
