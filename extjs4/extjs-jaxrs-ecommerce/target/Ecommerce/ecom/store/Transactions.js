/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global Ext */

Ext.define('ecom.store.Transactions',{
    extend: 'Ext.data.Store',
    requires:['ecom.model.Transaction'],
    model:'ecom.model.Transaction',
    autoLoad:true,
    proxy:{
        type:'ajax',
        url:'http://localhost:8080/Ecommerce/api/trans',
        reader:{
            type:'json',
            rootProperty:'data'
        }
    }
});


