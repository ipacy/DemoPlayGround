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
            }
            this.currentConfig = {
                "columnCount": 0,
                "c1": {
                    'x': 0,
                    'y': 0,
                    'w': 0,
                    'h': 0
                },
                "c2": {
                    'x': 0,
                    'y': 0,
                    'w': 0,
                    'h': 0
                },
                "c3": {
                    'x': 0,
                    'y': 0,
                    'w': 0,
                    'h': 0
                },
                "c4": {
                    'x': 0,
                    'y': 0,
                    'w': 0,
                    'h': 0
                },
                "c5": {
                    'x': 0,
                    'y': 0,
                    'w': 0,
                    'h': 0
                },
                "c6": {
                    'x': 0,
                    'y': 0,
                    'w': 0,
                    'h': 0
                },
            }
        },
        resizeGrid: function (grid) {
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
            sap.ui.getCore().byId('__component0---View--myPanel').setTitle(`Screen size: ${width} && Columns : ${cl} && Info : ${ranges}`)
            // sap.ui.getCore().byId('__component0---View--myPanel').setTitle(`Screen size: ${width}`)
            // grid.compact();
        },

        getSavedData: function () {
            var serializedData = this.grid.save();
            return serializedData;
        },

        _onChange: function (e, items) {
            let w = 2;
            switch (this.currentColumns) {
                case 12:
                    w = 2;
                    break;
                case 10:
                    w = 4;
                    break;
                case 9:
                    w = 6;
                    break
                case 8:
                    w = 8;
                    break;
                case 6:
                    w = 8;
                    break;
                case 0:
                    w = 8;
                    break;
            }
            items.forEach(function (item, i) {
                // item.width = w;
                // str += ' (x,y)=' + item.x + ',' + item.y;
                sap.ui.getCore().byId('__component0---View--item1').getText();
            });
        },

        generateLayout: function(){
            return _.map(_.range(0, 4), function(item, i) {
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


            var options = { // put in gridstack options here
                alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                ),
                acceptWidgets: true,
                float: true,
                cellHeight: 200,
                // resizable: { aspectRatio: "true" },
                dragInOptions: {revert: 'invalid', scroll: false, appendTo: 'body', helper: 'clone'},
                // animate: true,
                disableOneColumnMode: true,
                column: 12,

            };
            var grid = GridStack.init(options);

            /*grid.batchUpdate();
            grid.commit();*/
            this.grid = grid;
            this.resizeGrid(grid)
            grid.compact();
            window.addEventListener('resize', function () {
                this.resizeGrid(grid)
            }.bind(this));

            grid.on('change', this._onChange.bind(this))

            /*   grid.on('change', function(e, items) {
                   let w = 2;
                   switch (this.currentColumns)
                   {
                       case 12:
                           w = 2;
                           break;
                       case 10:
                           w = 4;
                           break;
                       case 9:
                           w = 6;
                           break
                       case 8:
                           w = 8;
                           break;
                       case 6:
                           w = 8;
                           break;
                       case 0:
                           w = 8;
                           break;
                   }
                   items.forEach(function(item) {
                       // item.width = w;
                      // str += ' (x,y)=' + item.x + ',' + item.y;
                   });
               }.bind(this));*/
            /*  grid.on('change', function (event, items) {
                  var item = items[0];
                  var oItem = sap.ui.getCore().byId(item.el.children[0].children[0].id);
                  var contentHeight = jQuery(oItem.getDomRef().children[0].children[0].children).outerHeight(true)
                      + jQuery(oItem.getDomRef().children[1].children[0].children).outerHeight(true);
                  //this.grid.cellHeight(contentHeight+25)

                  //this.grid.cellHeight(this.grid.cellWidth() * 1.2);
              /!*    items.forEach(function (item) {
                      var oItem = sap.ui.getCore().byId(item.el.children[0].children[0].id);
                      var contentHeight = jQuery(oItem.getDomRef().children[0].children[0].children).outerHeight(true)
                          + jQuery(oItem.getDomRef().children[1].children[0].children).outerHeight(true);
                      this.grid.cellHeight(contentHeight, false)
                  }.bind(this));*!/
              }.bind(this));*/
        },

        onAfterRendering: function () {
            this.commitGrid();
        },

        renderer: function (oRm, oControl) {
            oRm.write("<div class='grid-stack grid-stack-N'");
            oRm.writeControlData(oControl);
            // oRm.attr('data-gs-animate', 'yes')
            oRm.write(">");
            var oCards = oControl.getCards();
            oCards.forEach(function (card) {
                var width = !!card.data('width') ? card.data('width') : 2;
                var height = !!card.data('height') ? card.data('height') : 2;
                var x = !!card.data('x') ? card.data('x') : 0;
                var y = !!card.data('y') ? card.data('y') : 0;
                /*  data-gs-x="${x}"
                data-gs-y="${y}"*/
                oRm.write(`<div class="grid-stack-item"
                data-gs-min-width="2"
                data-gs-no-move="no"
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
