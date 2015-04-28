// Copyright (c) CBC/Radio-Canada. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.


define(['knockout'],
    function(ko) {
        'use strict';

        function KnockoutDisposer() {
            this.subscriptions = [];
        }

        KnockoutDisposer.prototype.add = function(subscription) {
            this.subscriptions.push(subscription);
        };

        KnockoutDisposer.prototype.dispose = function() {
            for (var i in this.subscriptions) {
                var subscription = this.subscriptions[i];

                if(subscription && subscription.dispose){
                    subscription.dispose();
                }
            }
        };

        return KnockoutDisposer;
    });
