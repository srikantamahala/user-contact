(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('user-contact', ['exports', '@angular/core'], factory) :
    (factory((global['user-contact'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UserContactService = /** @class */ (function () {
        function UserContactService() {
        }
        UserContactService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        UserContactService.ctorParameters = function () { return []; };
        /** @nocollapse */ UserContactService.ngInjectableDef = i0.defineInjectable({ factory: function UserContactService_Factory() { return new UserContactService(); }, token: UserContactService, providedIn: "root" });
        return UserContactService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UserContactComponent = /** @class */ (function () {
        function UserContactComponent() {
        }
        /**
         * @return {?}
         */
        UserContactComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        UserContactComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-user-contact',
                        template: "\n    <p>\n      user-contact works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        UserContactComponent.ctorParameters = function () { return []; };
        return UserContactComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UserContactModule = /** @class */ (function () {
        function UserContactModule() {
        }
        UserContactModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [UserContactComponent],
                        imports: [],
                        exports: [UserContactComponent]
                    },] }
        ];
        return UserContactModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.UserContactService = UserContactService;
    exports.UserContactComponent = UserContactComponent;
    exports.UserContactModule = UserContactModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=user-contact.umd.js.map