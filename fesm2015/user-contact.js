import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserContactService {
    constructor() { }
}
UserContactService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
UserContactService.ctorParameters = () => [];
/** @nocollapse */ UserContactService.ngInjectableDef = defineInjectable({ factory: function UserContactService_Factory() { return new UserContactService(); }, token: UserContactService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserContactComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
UserContactComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-user-contact',
                template: `
    <p>
      user-contact works!
    </p>
  `
            }] }
];
/** @nocollapse */
UserContactComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserContactModule {
}
UserContactModule.decorators = [
    { type: NgModule, args: [{
                declarations: [UserContactComponent],
                imports: [],
                exports: [UserContactComponent]
            },] }
];

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