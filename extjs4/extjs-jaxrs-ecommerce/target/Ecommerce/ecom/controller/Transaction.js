/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global Ext */

Ext.define('ecom.controller.Transaction', {
    extend: 'Ext.app.Controller',
    views: ['Transaction'],
    init: function (application) {
        this.control({
            "transaction": {
                render: this.onTransLoad
            }
        });
    },
    onTransLoad: function (component, options) {
        component.getStore().load();
        var transaction = this.getSchedulerSchedulerView();
        var splashscreen = Ext.get(transaction.getEl()).mask("Authenticating...", "Loading........ Please Wait......");
        var task = new Ext.util.DelayedTask(function () {
            //it will remove first div not the one you add explicit tei k tah icon
            splashscreen.fadeOut({
                duration: 1000, //in milisec
                remove: true
            });
            splashscreen.next().fadeOut({
                duration: 1000,
                remove: true,
                listeners: {
                    afteranimate: function (e1, startTime, eOpts) {
                        alert("SUCCCESS");
                    }
                }
            });
            console.log("Launch this shit");
        });
        task.delay(2000);

    }
});


