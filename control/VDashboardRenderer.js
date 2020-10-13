sap.ui.define([], function () {
        'use strict';
    return {
            render: function (oRm, oControl) {
                oRm.write("<div");
                oRm.writeControlData(oControl);
                oRm.addClass("grid-stack grid-stack-N");
                oRm.writeClasses();
                oRm.write(">");
                let oCards = oControl.getCards();
                if (!!oCards) {
                    oCards.forEach(function (card) {

                        let firstChild = card.getContent();
                        if (Array.isArray(firstChild) && firstChild[0] || firstChild instanceof sap.m.ScrollContainer) {
                            firstChild.addStyleClass('ovpScroll');
                        }

                        let divRef = `<div class="grid-stack-item"
                data-gs-min-width="2"
                data-gs-min-height="1"
                data-gs-no-move="no"
                data-gs-width="${card.getProperty('cardWidth')}"
                data-gs-height="${card.getProperty('cardHeight')}">`;
                        oRm.write(divRef);
                        oRm.write('<div class="grid-stack-item-content">');
                        oRm.renderControl(card);
                        oRm.close("div");
                        oRm.close("div");
                    }.bind(this));
                }
                oRm.write("</div>");
            }
        };
    }
);
