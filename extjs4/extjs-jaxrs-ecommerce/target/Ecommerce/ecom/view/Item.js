/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global Ext */

Ext.define('ecom.view.Item', {
    extend: 'Ext.window.Window',
    alias: 'widget.item',
    height: 500,
    width: 400,
    ui: 'bubble',
    border: 0,
    layout: 'fit',
    modal: true,
    html: '<div class="row"><img src="https://unsplash.it/500/300?image=0"/></div><div class="row"><p style="text-align:center;font-size:18px;">Item is item</p></div>',
    dockedItems: [
        {
            xtype: 'toolbar',
            flex: 1,
            dock: 'bottom',
            items: [
                {
                    xtype: 'button',
                    itemId: 'buyNow',
                    iconCls: 'fa fa-shopping-cart',
                    text: 'Buy Now',
                    width: 400,
                    height: 30,
                    handler: function () {
                        var win = Ext.WindowManager.getActive();
                        if (win) {
                            win.close();
                        }
                        var x = Ext.create('ecom.view.Detail');
                        x.show();
                    }
                }
            ]
        }
    ]
});


