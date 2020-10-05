/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([],
    function () {
        "use strict";
        /* global Map */

        /**
         * GridContainer renderer
         * @namespace
         */
        var FDashboardRenderer = {};

        /**
         * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
         *
         * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the render output buffer
         * @param {sap.ui.core.Control} control an object representation of the control that should be rendered
         */
        FDashboardRenderer.render = function (rm, control) {

            rm.write('<div');
            rm.writeControlData(control);

            rm.addClass("sapFGridContainer");

            if (control.getSnapToRow()) {
                rm.addClass("sapFGridContainerSnapToRow");
            }

            if (control.getAllowDenseFill()) {
                rm.addClass("sapFGridContainerDenseFill");
            }

            rm.writeClasses();

            // Add inline styles
            if (control.getWidth()) {
                rm.addStyle("width", control.getWidth());
            }
            this.addGridStyles(rm, control);
            rm.writeStyles();

            // Add tooltip
            var tooltip = control.getTooltip_AsString();
            if (tooltip) {
                rm.writeAttributeEscaped("title", tooltip);
            }

            // Close opening tag
            rm.write(">");

            control.getItems().forEach(function (oItem) {
                if (!oItem.getLayoutData()) {
                    oItem.setLayoutData(new sap.f.GridContainerItemLayoutData({minRows: 4, columns: 4}));
                }else {
                    var minRows = oItem.getLayoutData().getMinRows();
                    var columns = oItem.getLayoutData().getColumns();
                    oItem.setLayoutData(new sap.f.GridContainerItemLayoutData({minRows: minRows, columns: columns}));
                }
                this.renderItem(rm, oItem, control);
            }.bind(this));

            rm.write("</div>");
        };


        /**
         * Adds grid styles depending on the layout settings
         *
         * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the render output buffer
         * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
         */
        FDashboardRenderer.addGridStyles = function (rm, oControl) {
            var mStyles = oControl._getActiveGridStyles();
            for (var sName in mStyles) {
                rm.addStyle(sName, mStyles[sName]);
            }
        };

        /**
         * Renders a single item in the grid.
         * @param {sap.ui.core.RenderManager} rm The RenderManager that can be used for writing to the render output buffer
         * @param {sap.ui.core.Control} oItem The grid item
         * @param {sap.ui.core.Control} oControl The grid
         */
        FDashboardRenderer.renderItem = function (rm, oItem, oControl) {
            var mStylesInfo = FDashboardRenderer.getStylesForItemWrapper(oItem, oControl),
                mStyles = mStylesInfo.styles,
                aClasses = mStylesInfo.classes;

            rm.write("<div");

            mStyles.forEach(function (sValue, sKey) {
                rm.addStyle(sKey, sValue);
            });

            aClasses.forEach(function (sValue) {
                rm.addClass(sValue);
            });

            rm.writeClasses();
            rm.writeStyles();
            rm.write(">");

            rm.renderControl(oItem);
            rm.write("</div>");
        };

        /**
         * Gets styles and classes which has to be applied to an item's wrapper element.
         * @param {sap.ui.core.Control} oItem The grid item
         * @param {sap.ui.core.Control} oControl The grid
         * @returns {object} An object containing styles and classes
         */
        FDashboardRenderer.getStylesForItemWrapper = function (oItem, oControl) {
            var mStyles = new Map(),
                aClasses = ["sapFGridContainerItemWrapper"];

            var oLayoutData = oItem.getLayoutData();
            if (oLayoutData) {
                var iItemColumns = oLayoutData.getColumns(),
                    iTotalColumns = oControl.getActiveLayoutSettings().getColumns();

                if (iItemColumns && iTotalColumns) {
                    // do not allow items to have more columns than total columns, else the layout brakes
                    iItemColumns = Math.min(iItemColumns, iTotalColumns);
                }

                if (iItemColumns) {
                    mStyles.set("grid-column", "span " + iItemColumns);
                }

                if (oControl.getInlineBlockLayout()) {
                    mStyles.set("grid-row", "span 1");
                } else if (oLayoutData.getRows() || oLayoutData.getMinRows()) {
                    mStyles.set("grid-row", "span " + oLayoutData.getActualRows());
                }

                if (!oLayoutData.hasAutoHeight()) {
                    aClasses.push("sapFGridContainerItemFixedRows");
                }
            }

            if (!oItem.getVisible()) {
                aClasses.push("sapFGridContainerInvisiblePlaceholder");
            }

            return {
                styles: mStyles,
                classes: aClasses
            };
        };

        return FDashboardRenderer;

    }, /* bExport= */ true);
