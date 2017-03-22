/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global Ext */

Ext.define('ecom.controller.Detail', {
    extend: 'Ext.app.Controller',
    views: ['ecom.view.Detail'],
    init: function (application) {
        this.control({
            "#detailsave": {
                click: this.savePlease
            },
            "#detailcancel": {
                click: this.cancelPlease
            }
        });
    },
    savePlease: function (button, e, options) {
        var win = Ext.WindowManager.getActive();
        if (win) {
            win.close();
        }
        var x = Ext.create('ecom.view.Transaction');
        x.show();
    },
    cancelPlease: function (button, e, options) {
        var win = Ext.WindowManager.getActive();
        if (win) {
            win.close();
        }
    }

});


