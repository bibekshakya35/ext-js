/* global Ext */
Ext.application({
    name: 'ecom',
    appFolder: 'ecom',
    requires:['ecom.controller.Item','ecom.controller.Detail','ecom.controller.Transaction'],
    views:['ecom.controller.Transaction'],
    controllers:['ecom.controller.Item','ecom.controller.Detail'],
    autoCreateViewport: true,
    launch: function () {
        console.log("Show");
    }
});