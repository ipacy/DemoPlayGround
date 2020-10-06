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
        /*init: function () {

        },*/
        _screenSizes: {
            "c1": {
                'name': 'c1',
                'columns': 1,
                'config': ''
            },
            "c2": {
                'name': 'c2',
                'columns': 3,
                'config': ''
            },
            "c3": {
                'name': 'c3',
                'columns': 6,
                'config': ''
            },
            "c4": {
                'name': 'c4',
                'columns': 8,
                'config': ''
            },
            "c5": {
                'name': 'c5',
                'columns': 11,
                'config': ''
            },
            "c6": {
                'name': 'c6',
                'columns': 12,
                'config': ''
            },
        },
        resizeGrid: function (grid) {
            let width = document.body.clientWidth;
            let cl = 0, ranges = "", name = "";
            if (width < 656) {
                name = "c1";
                cl = this._screenSizes[name].columns;
                /*   if (!this._screenSizes[name].config) {
                       this._screenSizes[name].config = this.getSavedData();
                       grid.column(cl);
                       grid.compact();
                   } else {
                       this.loadData(this._screenSizes[name].config);
                       grid.compact();
                   }*/
                ranges = "Less than 656 px";
            } else if (width > 656 && width < 975) {
                name = "c2";
                cl = this._screenSizes[name].columns;
                /* if (!this._screenSizes[name].config) {
                     this._screenSizes[name].config = this.getSavedData();
                     grid.column(cl);
                     grid.compact();
                 } else {
                     this.loadData(this._screenSizes[name].config);
                     grid.compact();
                 }*/
                ranges = "656 – 975 px";
            } else if (width > 976 && width < 1359) {
                name = "c3";
                cl = this._screenSizes[name].columns;
                /*    if (!this._screenSizes[name].config) {
                        this._screenSizes[name].config = this.getSavedData();
                        grid.column(cl);
                        grid.compact();
                    } else {
                        this.loadData(this._screenSizes[name].config);
                        grid.compact();
                    }*/
                ranges = "976 – 1359 px";
            } else if (width > 1360 && width < 1679) {
                name = "c4";
                cl = this._screenSizes[name].columns;
                /* if (!this._screenSizes[name].config) {
                     this._screenSizes[name].config = this.getSavedData();
                     grid.column(cl);
                     grid.compact();
                 } else {
                     this.loadData(this._screenSizes[name].config);
                     grid.compact();
                 }*/
                ranges = "1360 – 1679 px";
            } else if (width > 1680 && width < 1999) {
                name = "c5";
                cl = this._screenSizes[name].columns;
                /*  if (!this._screenSizes[name].config) {
                      this._screenSizes[name].config = this.getSavedData();
                      grid.column(cl);
                      grid.compact();
                  } else {
                      this.loadData(this._screenSizes[name].config);
                      grid.compact();
                  }*/
                ranges = "1680 – 1999 px";
            } else if (width > 2000) {
                name = "c6";
                cl = this._screenSizes[name].columns;
                /*   if (!this._screenSizes[name].config) {
                       this._screenSizes[name].config = this.getSavedData();
                       grid.column(cl);
                       grid.compact();
                   } else {
                       this.loadData(this._screenSizes[name].config);
                       grid.compact();
                   }*/
                ranges = "More than 2000 px";
            }
            grid.column(cl);
            grid.compact();
            this.currentColumns = cl;
            let message = `Screen size: ${width} |||| Columns : ${cl} |||| Info : ${ranges} |||| name : ${name}`;
            sap.ui.getCore().byId('__component0---View--myPanel').setTitle(message);
        },

        loadData: function (data) {
            let nodes = this.grid.engine.nodes;
            data.forEach((item, i) => {
                this.grid.update(nodes[i].el, item.x, item.y, item.width, item.height);
            });
            this.grid.batchUpdate();
            this.grid.commit();
        },

        getSavedData1: function () {
            let serializedData = [];
            this.grid.engine.nodes.forEach(function (node) {
                serializedData.push({
                    x: node.x,
                    y: node.y,
                    width: node.width,
                    height: node.height,
                    id: node.id,
                    custom: 'save anything here'
                });
            });
            return serializedData;
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
                float: false,
                cellHeight: 200,
                oneColumnModeDomSort: true,
                acceptWidgets: true,
                // resizable: { aspectRatio: "true" },
                dragInOptions: {revert: 'invalid', scroll: false, appendTo: 'body', helper: 'clone'},
                animate: true,
            });

            this.grid = grid;
            this.resizeGrid(grid)
            window.addEventListener('resize', function () {
                this.resizeGrid(grid)
            }.bind(this));
        },

        onAfterRendering: function () {
            this.commitGrid();
        },

        renderer: function (oRm, oControl) {
            oRm.write("<div class='grid-stack'"); //grid-stack-N
            oRm.writeControlData(oControl);
            /*oRm.addClass('sapUiMediumMarginBeginEnd');
            oRm.writeClasses();*/
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
