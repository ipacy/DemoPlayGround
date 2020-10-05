sap.ui.define([
    "vistex/controller/BaseController",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/dnd/DragInfo",
    "sap/f/dnd/GridDropInfo",
    "sap/ui/core/dnd/DropPosition",
    "sap/ui/core/dnd/DropLayout",
    "sap/ui/core/ResizeHandler",
    "sap/ui/thirdparty/jqueryui/jquery-ui-resizable"
], function (BaseController, Controller, JSONModel, DragInfo, GridDropInfo, DropPosition, DropLayout, ResizeHandler, jqueryuiresizable) {
    "use strict";

    return BaseController.extend("vistex.controller.V", {

        onInit: function () {
            var oCardManifests = new JSONModel(sap.ui.require.toUrl("vistex/model/cards.json"));
            var olist = new JSONModel([
                {
                    "title": "Alain Chevalier",
                    "rows": 4,
                    "columns": 5
                },
                {
                    "title": "Monique Legrand",
                    "rows": 4,
                    "columns": 4
                },
                {
                    "title": "Elena Petrova",
                    "rows": 3,
                    "columns": 4
                },
                {
                    "title": "Monique Legrand",
                    "rows": 3,
                    "columns": 4
                },
                {
                    "title": "Alain Chevalier",
                    "rows": 2,
                    "columns": 4
                },
                {
                    "title": "Elena Petrova",
                    "rows": 2,
                    "columns": 4
                }
            ]);
            var oGrid = this.byId("grid1");
            this.getView().setModel(olist, "listCards");
           // this.getView().setModel(oCardManifests, "manifests");

            oGrid.addDragDropConfig(new DragInfo({
                sourceAggregation: "items"
            }));

            oGrid.addDragDropConfig(new GridDropInfo({
                targetAggregation: "items",
                dropPosition: DropPosition.Between,
                dropLayout: DropLayout.Horizontal,
                drop: function (oInfo) {
                    var oDragged = oInfo.getParameter("draggedControl"),
                        oDropped = oInfo.getParameter("droppedControl"),
                        sInsertPosition = oInfo.getParameter("dropPosition"),
                        iDragPosition = oGrid.indexOfItem(oDragged),
                        iDropPosition = oGrid.indexOfItem(oDropped);

                    oGrid.removeItem(oDragged);

                    if (iDragPosition < iDropPosition) {
                        iDropPosition--;
                    }

                    if (sInsertPosition === "After") {
                        iDropPosition++;
                    }

                    oGrid.insertItem(oDragged, iDropPosition);
                    // oGrid.focusItem(iDropPosition);
                }
            }));

            // Use smaller margin around grid when on smaller screens
            oGrid.attachLayoutChange(function (oEvent) {
                var sLayout = oEvent.getParameter("layout");

                if (sLayout === "layoutXS" || sLayout === "layoutS") {
                    oGrid.removeStyleClass("sapUiSmallMargin");
                    oGrid.addStyleClass("sapUiTinyMargin");
                } else {
                    oGrid.removeStyleClass("sapUiTinyMargin");
                    oGrid.addStyleClass("sapUiSmallMargin");
                }
            });
        },

        onAfterRendering: function () {
            var cardManifests = new JSONModel(sap.ui.require.toUrl("vistex/model/cardManifest.json"));
            this.getView().setModel(cardManifests, "data");

            /*let g = this.byId('grid1');
            let items = g.getItems();


            items.forEach(function (item) {
                // item.addStyleClass('ui-widget-content');
                //  $("#" + item.sId).resizable();
                // $("#" + item.sId).on( "resizestop", this._onResizeStop.bind(this) );//function( event, ui ) {}
                // item.addStyleClass('sapUiDlgGrip');
                ResizeHandler.register(item, this._onResize.bind(this));
            }.bind(this))*/
            // ResizeHandler.register(this, this._onResizeRef);
        },

        _onResize: function (event, ui) {


            var c = sap.ui.getCore().byId(event.currentTarget.id);
            // c.setLayoutData(new sap.f.GridContainerItemLayoutData({minRows:1,  columns:1}));

            // c.getLayoutData().setProperty('minRows', 1, true);
          //  sap.ui.getCore().byId('__component0---View2--grid1').rerender()
            //c.getLayoutData().setMinRows(8)

        },

        _onResizeStop: function (event, ui) {

        },
        onNavTo: function () {
            this.getRouter().navTo('home');
        },
        onRevealGrid: function () {
            //RevealGrid.toggle("grid1", this.getView());
        },

        onExit: function () {
            //RevealGrid.destroy("grid1", this.getView());
        }

    });
});
