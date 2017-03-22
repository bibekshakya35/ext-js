/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global Ext */
Ext.define('ecom.controller.Item', {
    extend: 'Ext.app.Controller',
    views: ['Item'],
    init: function (application) {
        this.control({
            "#buyNow": {
                click: this.buyNowPlease
            }
        });
    },
    buyNowPlease: function (button, e, options) {
        var win = Ext.WindowManager.getActive();
        if (win) {
            win.close();
        }
        var x =Ext.create('ecom.view.Detail');
        x.show();
    }

});


