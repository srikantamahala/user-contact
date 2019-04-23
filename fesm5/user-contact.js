import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserContactService = /** @class */ (function () {
    function UserContactService() {
    }
    UserContactService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UserContactService.ctorParameters = function () { return []; };
    /** @nocollapse */ UserContactService.ngInjectableDef = defineInjectable({ factory: function UserContactService_Factory() { return new UserContactService(); }, token: UserContactService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
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

export { UserContactService, UserContactComponent, UserContactModule };

//# sourceMappingURL=user-contact.js.map