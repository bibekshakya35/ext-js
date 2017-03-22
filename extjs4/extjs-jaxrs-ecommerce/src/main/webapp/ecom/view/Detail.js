/* global Ext */

Ext.define('ecom.view.Detail', {
    extend: 'Ext.window.Window',
    alias: 'widget.detail',
    height: 300,
    width: 400,
    modal: true,
//    requires: ['pg.util.Util'],
    layout: {
        type: 'fit'
    },
    title: 'User',
    items: [
        {
            xtype: 'form',
            bodyPadding: 20,
            layout: {
                type: 'hbox'
            },
            height:300,
            items: [
                {
                    xtype: 'fieldset',
                    //flex: 2,
                    title: 'User Information',
                    defaults: {
                        afterLabelTextTpl: '<span style="color:red;font-weight:bold" data-qtip="Required"> *</span>', // #1
                        anchor: '100%',
                        xtype: 'textfield',
                        allowBlank: false,
                        labelWidth: 140
                    },
                    items: [
                        {
                            fieldLabel: 'Name',
                            name: 'userName'
                        },
                        {
                            fieldLabel: 'Address',
                            maxLength: 100,
                            name: 'address'
                        },
                        {
                            fieldLabel: 'Email',
                            maxLength: 100,
                            name: 'emailId'
                        },
                        {
                            fieldLabel: 'Land Line Number',
                            maxLength: 100,
                            name: 'landLineNumber'
                        },
                        {
                            fieldLabel: 'Mobile Number',
                            maxLength: 100,
                            name: 'mobileNumber',
                            padding:{bottom:10}
                        }
//                        {
//                            xtype: 'combobox',
//                            fieldLabel: 'Role Code',
//                            name: 'roleId', // #1
//                            id: 'example',
//                            triggerAction: 'all',
//                            mode: 'remote',
//                            displayField: 'name',
//                            valueField: 'code',
//                            store: Ext.create('Ext.data.Store', {
//                                fields: [
//                                    {name: 'code'},
//                                    {name: 'name'}
//                                ],
//                                //autoLoad: false,
//                                proxy: {
//                                    type: 'ajax',
//                                    url: 'http://localhost:8080/parkgarau-ws/ws/park/role',
//                                    reader: {
//                                        type: 'json'
//                                    }
//                                }
//                            }
//                            ),
//                            listeners: {
//                                render: function (combobox) {
//                                    Ext.getCmp('example').getStore().load();
//                                    combobox.getStore().load();
//                                }
//                            }// #5
//                        }
//                        {
//                            xtype: 'filefield',
//                            fieldLabel: 'Picture',
//                            name: 'picture',
//                            allowBlank: true, // #6
//                            afterLabelTextTpl: '' // #7
//                        }


                    ]

                }
//                {
//                    xtype: 'fieldset',
//                    title: 'Picture',
//                    width: 400, // #1
//                    items: [
//                        {
//                            xtype: 'image',
//                            itemId: 'userpicture', // #2
//                            height: 400,
//                            width: 400,
//                            src: '' // #3
//                        }
//                    ]
//                }

            ]
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            flex: 1,
            dock: 'bottom',
            ui: 'footer',
            layout: {
                pack: 'end', // #1
                type: 'hbox'
            },
            items: [
                {
                    xtype: 'button',
                    text: 'Cancel',
                    itemId: 'detailcancel',
                    iconCls: 'fa fa-close'
                },
                {
                    xtype: 'button',
                    text: 'Pay With Dpay',
                    itemId: 'detailsave',
                    iconCls: 'fa fa-floppy-o ',
                    handler: function () {
                        var win = Ext.WindowManager.getActive();
                        if (win) {
                            win.close();
                        }
                        var x = Ext.create('ecom.view.Transaction');
                        x.show();
                    }
                }
            ]
        }
    ]

});