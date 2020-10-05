sap.ui.define([
    "sap/ui/core/Control",
    "sap/f/GridContainer",
], function (Control, GridContainer) {
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
            this.screenSize = {
                "c1": 1,
                "c2": 6,
                "c3": 11,
                "c4": 12,
                "c5": 12,
                "c6": 12,
            };
        },
        resizeGrid: function (grid) {
            /* let width = document.body.clientWidth;
             if (width < 700) {
                 grid.column(1);
                // text.innerHTML = 1;
             } else if (width < 850) {
                 grid.column(3);
                // text.innerHTML = 3;
             } else if (width < 950) {
                 grid.column(6);
               //  text.innerHTML = 6;
             } else if (width < 1100) {
                 grid.column(8);
              //   text.innerHTML = 8;
             } else {
                 grid.column(12);
               //  text.innerHTML = 12;
             }*/
            let width = document.body.clientWidth;
            let cl = 0, ranges = "";
            if (width < 656) {
                cl = this.screenSize.c1;
                ranges = "Less than 656 px";
            } else if (width > 656 && width < 975) {
                cl = this.screenSize.c2;
                ranges = "656 – 975 px";
            } else if (width > 976 && width < 1359) {
                cl = this.screenSize.c3;
                ranges = "976 – 1359 px";
            } else if (width > 1360 && width < 1679) {
                cl = this.screenSize.c4;
                ranges = "1360 – 1679 px";
            } else if (width > 1680 && width < 1999) {
                cl = this.screenSize.c5;
                ranges = "1680 – 1999 px";
            } else if (width > 2000) {
                cl = this.screenSize.c6
                ranges = "More than 2000 px";
            }
            if (cl !== 0) {
                grid.column(cl);
            }
            this.currentColumns = cl;
            sap.ui.getCore().byId('__component0---View--myPanel').setTitle(`Screen size: ${width} |||| Columns : ${cl} |||| Info : ${ranges}`)
            grid.compact();
        },

        getSavedData: function () {
            var serializedData = this.grid.save();
            return serializedData;
        },

        generateLayout: function () {
            return _.map(_.range(0, 4), function (item, i) {
                var y = i;//Math.ceil(Math.random() * 4) + 1;
                return {
                    x: Math.round(Math.random() * 5) * 2,
                    y: Math.floor(i / 6) * y,
                    w: 2,
                    h: y,
                    i: i.toString(),
                    static: Math.random() < 0.05
                };
            });
        },

        commitGrid: function () {

            let grid = GridStack.init({
                alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                ),
                disableOneColumnMode: true, // will manually do 1 column
                float: true,
                cellHeight: 200,
                oneColumnModeDomSort: true,
                //acceptWidgets: true,
                // resizable: { aspectRatio: "true" },
                //dragInOptions: {revert: 'invalid', scroll: false, appendTo: 'body', helper: 'clone'},
                // animate: true,
            });
            /*grid.batchUpdate();
            grid.commit();*/
            this.grid = grid;
            /*this.resizeGrid(grid)
            */
            window.addEventListener('resize', function () {
                this.resizeGrid(grid)
            }.bind(this));
        },

        onAfterRendering: function () {
            this.commitGrid();
        },

        renderer: function (oRm, oControl) {
            oRm.write("<div class='grid-stack grid-stack-N'");
            oRm.writeControlData(oControl);
            oRm.write(">");
            var oCards = oControl.getCards();
            oCards.forEach(function (card) {
                var width = !!card.data('width') ? card.data('width') : 2;
                var height = !!card.data('height') ? card.data('height') : 2;
                /*  var x = !!card.data('x') ? card.data('x') : 0;
                  var y = !!card.data('y') ? card.data('y') : 0;
                    data-gs-x="${x}"
                  data-gs-y="${y}"*/
                card.setHeight('100%');
                oRm.write(`<div class="grid-stack-item"
                data-gs-min-width="2"
                data-gs-no-move="no"
                data-gs-width="${width}"
                data-gs-height="${height}">`);
                oRm.write('<div class="grid-stack-item-content">');
                oRm.renderControl(card);
                oRm.write("</div>");
                oRm.write("</div>");
            }.bind(this));
            oRm.write("</div>");
        }
    });
});
