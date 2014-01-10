/*
 *
 * Toasted plugin for Android
 *
 * @Author Linkpass Srl
 *
 * @licenze GPL v3
 *
 *
 */

var exec = require('cordova/exec');

module.exports = {

    Toasted: function(message) {
		var options = { "message": message};
        exec( null, null, 'Toast_Notification', 'toasted', [options]);
    },
};