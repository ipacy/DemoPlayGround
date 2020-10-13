sap.ui.define([
    "sap/ui/core/Control",
    "vistex/control/VDashboardRenderer",
], function (Control, VDashboardRenderer) {
    "use strict";
    return Control.extend("vistex.control.VDashboard", {
        metadata: {
            properties: {
                currentColumn: {type: "string", defaultValue: ''},
            },
            aggregations: {
                cards: {
                    type: "sap.ui.core.Control",
                    multiple: true,
                    singularName: "card"
                }
            },
            events: {
                onResize: {
                    parameters: {
                        value: {type: "object"}
                    }
                }
            }
        },

        _getConfig: function () {
            let width = document.body.clientWidth,
                name = "";
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
            return name;
        },

        _screenSize: {
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
                'columns': 10,
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
        },

        resizeGrid: function (grid) {
            let width = document.body.clientWidth,
                screenSize = this._screenSize,
                name = "";
            name = this._getConfig();

            let cl = screenSize[name].columns;

            if (!!cl) {
                grid.column(cl);
            }
            this.setProperty('currentColumn', cl, false);
            this._applyStateConfig(cl);
            let message = `Screen size: ${width} |||| Columns : ${cl} |||| Info : ${screenSize[name].ranges}`; //|||| Column : ${name}
            grid.compact();
            this.fireEvent("onResize", {
                value: {
                    "columnName": name,
                    "width": width,
                    "column": cl,
                    "screenSize":screenSize,
                    "range": `${screenSize[name].ranges}`,
                    "message": message
                }
            });
        },

        _applyStateConfig: function (cl) {
            let data = this.getCards()[0].getProperty("cardConfiguration");
            if (data && data[`c${cl}`]) {
                let nodes = this.grid.engine.nodes;
                nodes.forEach((item, i) => {
                    let sId = $(this.grid.engine.nodes[i].el).children().children().attr('id'),
                        oCard = sap.ui.getCore().byId(sId);
                    let oData = oCard.getProperty("cardConfiguration")[`c${cl}`];
                    this.grid.update(nodes[i].el, oData.x, oData.y, oData.width, oData.height);
                });
            }
        },

        updateGridConfig: function () {
            let nodes = this.grid.engine.nodes;
            nodes.forEach((item, i) => {
                let sId = $(this.grid.engine.nodes[i].el).children().children().attr('id'),
                    oCard = sap.ui.getCore().byId(sId),
                    node = this.grid.engine.nodes[i],
                    cl = this.getProperty('currentColumn'),
                    oConfig = oCard.getProperty("cardConfiguration");
                oConfig[`c${cl}`] = {
                    height: node.height,
                    width: node.width,
                    x: node.x,
                    y: node.y
                };
                oCard.setProperty("cardConfiguration", oConfig);
            });
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
                resizable: {handles: 'e, se, s, sw, w', autoHide: true},
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
        renderer: VDashboardRenderer.render,
    });
});
