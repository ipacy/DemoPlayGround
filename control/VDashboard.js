sap.ui.define([
    "sap/ui/core/Control",
    "sap/f/GridContainer",
], function (Control, GridContainer) {
    "use strict";
    return Control.extend("vistex.control.VDashboard", {
        metadata: {
            properties: {
                value: {type: "float", defaultValue: 0},
                currentColumn: {type: "string", defaultValue: ''},
                screenSize: {
                    type: "object", defaultValue: {
                        "c1": {
                            'name': 'c1',
                            'columns': 1,
                            'width': [0, 656],
                            'config': '',
                            'ranges': 'Less than 656 px'
                        },
                        "c2": {
                            'name': 'c2',
                            'columns': 5,
                            'width': [656, 975],
                            'config': '',
                            'ranges': '656 – 975 px'
                        },
                        "c3": {
                            'name': 'c3',
                            'columns': 6,
                            'width': [976, 1359],
                            'config': '',
                            'ranges': '976 – 1359 px'
                        },
                        "c4": {
                            'name': 'c4',
                            'columns': 12,
                            'width': [1360, 1679],
                            'config': '',
                            'ranges': '1360 – 1679 px'
                        },
                        "c5": {
                            'name': 'c5',
                            'columns': 12,
                            'width': [1680, 1999],
                            'config': '',
                            'ranges': '1680 – 1999 px'
                        },
                        "c6": {
                            'name': 'c6',
                            'columns': 12,
                            'width': [0, 2000],
                            'config': '',
                            'ranges': 'More than 2000 px'
                        },
                    }
                }
            },
            aggregations: {
                cards: {
                    type: "sap.ui.core.Control",
                    multiple: true,
                    singularName: "card"
                }
            }
        },

        resizeGrid: function (grid) {
            let width = document.body.clientWidth,
                screenSize = this.getScreenSize(),
                cl = 0, name = "";
            switch (true) {
                case (width < 656):
                    name = 'c1';
                    break;
                case (width > 656 && width < 975):
                    name = 'c2';
                    break;
                case (width > 976 && width < 1359):
                    name = 'c3';
                    break;
                case (width > 1360 && width < 1679):
                    name = 'c4';
                    break;
                case (width > 1680 && width < 1999):
                    name = 'c5';
                    break;
                case (width > 2000):
                    name = 'c6';
                    break;

            }

            cl = screenSize[name].columns;
            if (!!cl) {
                grid.column(cl);
            }
            this.setProperty('currentColumn', cl, false);
            let message = `Screen size: ${width} |||| Columns : ${cl} |||| Info : ${screenSize[name].ranges} |||| Column : ${name}`;
          //  sap.ui.getCore().byId('__component0---View--myPanel').setTitle(message)
            grid.compact();
        },

        loadManualData: function (data) {
            let nodes = this.grid.engine.nodes;
            data.forEach((item, i) => {
                this.grid.update(nodes[i].el, item.x, item.y, item.width, item.height);
            });
            this.grid.batchUpdate();
            this.grid.commit();
        },

        generateSavedManualData: function () {
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

        generateSavedData: function () {
            return this.grid.save();
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
