sap.ui.define([],

    function () {
        'use strict';
        sap.ui.getCore().initLibrary({
            name: "vistex.control.VDashboard",
            noLibraryCSS: true,
            dependencies: [],
            interfaces: [],
            controls: [
                "vistex.control.VDashboard",
                "vistex.control.IntegrationCard",
                "vistex.control.CustomContent",
                "vistex.control.CardRenderer",
            ],
            elements: [
            ],
        });

        return vistex.control.VDashboard;
    });
