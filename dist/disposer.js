'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _knockout = require('knockout');

var _knockout2 = _interopRequireDefault(_knockout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function KnockoutDisposer() {
    this.subscriptions = [];
} // Copyright (c) CBC/Radio-Canada. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

KnockoutDisposer.prototype.add = function (subscription) {
    this.subscriptions.push(subscription);
};

KnockoutDisposer.prototype.dispose = function () {
    for (var i in this.subscriptions) {
        var subscription = this.subscriptions[i];

        if (subscription && subscription.dispose) {
            subscription.dispose();
        }
    }
};

exports.default = KnockoutDisposer;