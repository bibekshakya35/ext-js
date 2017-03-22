/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global Ext */

Ext.define('ecom.model.Transaction',{
    extend: 'Ext.data.Model',
    idProperty:'tranId1',
    fields:[
        {name:'tranId1'},
        {name:'tranId2'},
        {name:'tranId3'}
    ]
});


