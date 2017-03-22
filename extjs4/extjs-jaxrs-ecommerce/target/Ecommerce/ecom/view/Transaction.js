/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global Ext */

Ext.define('ecom.view.Transaction', {
    extend: 'Ext.window.Window',
    alias: 'widget.transaction',
    store: Ext.create('ecom.store.Transactiona'),
    height: 100,
    width: 250,
    modal: true,
    items: [
        {
            width: 800,
            bodyPadding: 10,
            renderTo: Ext.getBody(),
            layout: 'hbox',
            items: [
                {
                    xtype: 'label',
                    forId: 'transactionId1',
                    text: 'Transaction Code',
                    margin: {left:10,right:10}
                },
                {
                    xtype: 'textfield',
                    name: 'tranId1',
                    itemId: 'transactionId1',
                    maxLength: 2,
                    readOnly: true,
                    width: 20,
                    height:10
                }, {
                    xtype: 'textfield',
                    name: 'tranId2',
                    itemId: 'transactionId2',
                    width: 20,
                    maxLength: 2,
                    readOnly: true,
                    height:10
                },
                {
                    xtype: 'textfield',
                    name: 'tranId3',
                    itemId: 'transactionId3',
                    width: 20,
                    maxLength: 2,
                    readOnly: true,
                    height:10
                }
            ]
        }
    ]
});

