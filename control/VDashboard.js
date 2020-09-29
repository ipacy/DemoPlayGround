sap.ui.define([
    "sap/ui/core/Control",
], function (Control) {
    "use strict";
    return Control.extend("vistex.control.VDashboard", {
        metadata: {
            properties: {
                value: {type: "float", defaultValue: 0}
            },
            aggregations: {
                cards: {
                    type: "sap.ui.core.Control",
                    multiple: true,
                    singularName: "card"
                }
            }
        },
        init: function () {

        },
        resizeGrid: function (grid) {
            grid.compact();
            let width = document.body.clientWidth;

            /* if (width < 700) {
                 grid.column(1);
             } else if (width < 850) {
                 grid.column(2);
             } else if (width < 950) {
                 grid.column(3);
             } else if (width < 1100) {
                 grid.column(8);
             } else {
                 grid.column(12);
             }
             this.commitGrid();*/
        },
        getSavedData: function () {
            var serializedData = this.grid.save();
            return serializedData;
        },

        commitGrid: function () {
            var options = { // put in gridstack options here
                alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                ),
                acceptWidgets: true,
                dragIn: '.newWidget',  // class that can be dragged from outside
                dragInOptions: {revert: 'invalid', scroll: false, appendTo: 'body', helper: 'clone'},
                removable: '#trash', // drag-out delete class
                removeTimeout: 100,
                animate: true,
            };
            var grid = GridStack.init(options);
            grid.cellHeight(grid.cellWidth() * 1.2);
            // grid.compact();
            this.grid = grid;
            grid.on('change', function (event, items) {
                var item = items[0];
                var oItem = sap.ui.getCore().byId(item.el.children[0].children[0].id);
                var contentHeight = jQuery(oItem.getDomRef().children[0].children[0].children).outerHeight(true)
                    + jQuery(oItem.getDomRef().children[1].children[0].children).outerHeight(true);
                //this.grid.cellHeight(contentHeight+25)

                this.grid.cellHeight(this.grid.cellWidth() * 1.2);
            /*    items.forEach(function (item) {
                    var oItem = sap.ui.getCore().byId(item.el.children[0].children[0].id);
                    var contentHeight = jQuery(oItem.getDomRef().children[0].children[0].children).outerHeight(true)
                        + jQuery(oItem.getDomRef().children[1].children[0].children).outerHeight(true);
                    this.grid.cellHeight(contentHeight, false)
                }.bind(this));*/
            }.bind(this));
            // this.grid.column(6);
            // this.resizeGrid(this.grid);
        },

        onAfterRendering: function () {
            this.commitGrid();
            window.addEventListener('resize', function () {
                this.resizeGrid(this.grid)
            }.bind(this));
        },

        renderer: function (oRm, oControl) {
            oRm.write("<div class='grid-stack'");
            oRm.writeControlData(oControl);
            // oRm.attr('data-gs-animate', 'yes')
            oRm.write(">");
            var oCards = oControl.getCards();
            oCards.forEach(function (card) {
                var width = !!card.data('width') ? card.data('width') : 2;
                var height = !!card.data('height') ? card.data('height') : 2;
                oRm.write(`<div class="grid-stack-item"
                data-gs-min-width="2"
                data-gs-width="${width}"
                data-gs-height="${height}">`); //data-gs-auto-position="true" data-gs-no-resize="false"     data-gs-locked='true'
                oRm.write('<div class="grid-stack-item-content">');
                oRm.renderControl(card);
                oRm.write("</div>");
                oRm.write("</div>");
            }.bind(this));
            oRm.write("</div>");
        }
    });
});
