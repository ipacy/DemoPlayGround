sap.ui.define([
    "sap/f/GridContainer",
    "vistex/control/FDashboardRenderer",
    "sap/ui/thirdparty/jqueryui/jquery-ui-resizable",
    "sap/ui/core/ResizeHandler",
    "sap/ushell/ui/launchpad/GridContainer"
], function (Control, FDashboardRenderer, resizable, ResizeHandler, LGridContainer) {
    "use strict";
    return Control.extend("vistex.control.FDashboard", {
        onAfterRendering: function () {
            let items = this.getItems();
            items.forEach(function (item) {
                ResizeHandler.register(item, this._onResize.bind(this));
            }.bind(this));
            // ResizeHandler.register(oItem, this._onResize.bind(this));
        },
        _onResize: function (event) {
            var c = sap.ui.getCore().byId(event.currentTarget.id);
            if (c.hasOwnProperty('_userInteracted') && !!c._userInteracted) {
                var columns = c.getLayoutData().getColumns();
                var rows = c.getLayoutData().getMinRows();

                if (event.size.width > event.oldSize.width) {
                    var p1 = (event.oldSize.width * 100) / event.size.width;
                    var p2 = 100 - p1;
                    var c1 = (columns * p2)/p1;
                    var c2 = c1 + columns;
                    c.getAggregation('layoutData').setProperty('columns', Math.round(c2), true)
                } else if (event.size.width < event.oldSize.width) {
                    var p1 = (event.size.width * 100) / event.oldSize.width;
                    var p2 = 100 - p1;
                    var c1 = (p2 * columns)/100;
                    var c2 = columns - c1;
                    c.getAggregation('layoutData').setProperty('columns', Math.round(c2), true)
                }
                if (event.size.height > event.oldSize.height) {
                    var p1 = (event.oldSize.height * 100) / event.size.height;
                    var p2 = 100 - p1;
                    var r1 = (rows * p2)/p1;
                    var r2 = r1 + rows;
                    c.getAggregation('layoutData').setProperty('minRows', Math.round(r2), true)
                } else if (!!c._hProps && c._hProps.currentHeight < c._hProps.originalHeight){
                    var p1 = (c._hProps.currentHeight * 100) / c._hProps.originalHeight;
                    var p2 = 100 - p1;
                    var r1 = (p2 * rows)/100;
                    var r2 = rows - r1;
                    c.getAggregation('layoutData').setProperty('minRows', Math.round(r2), true)
                }
                this.invalidate();
                c._userInteracted = false;
                c._hProps = null
            }

        },
        renderer: FDashboardRenderer,
    })
});
