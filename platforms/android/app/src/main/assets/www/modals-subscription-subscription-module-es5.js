(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modals-subscription-subscription-module"],{

/***/ "./src/app/modals/subscription/subscription-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/modals/subscription/subscription-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: SubscriptionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionPageRoutingModule", function() { return SubscriptionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _subscription_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscription.page */ "./src/app/modals/subscription/subscription.page.ts");




var routes = [
    {
        path: '',
        component: _subscription_page__WEBPACK_IMPORTED_MODULE_3__["SubscriptionPage"]
    }
];
var SubscriptionPageRoutingModule = /** @class */ (function () {
    function SubscriptionPageRoutingModule() {
    }
    SubscriptionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SubscriptionPageRoutingModule);
    return SubscriptionPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/modals/subscription/subscription.module.ts":
/*!************************************************************!*\
  !*** ./src/app/modals/subscription/subscription.module.ts ***!
  \************************************************************/
/*! exports provided: SubscriptionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionPageModule", function() { return SubscriptionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _subscription_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscription-routing.module */ "./src/app/modals/subscription/subscription-routing.module.ts");
/* harmony import */ var _subscription_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subscription.page */ "./src/app/modals/subscription/subscription.page.ts");







var SubscriptionPageModule = /** @class */ (function () {
    function SubscriptionPageModule() {
    }
    SubscriptionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _subscription_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubscriptionPageRoutingModule"]
            ],
            declarations: [_subscription_page__WEBPACK_IMPORTED_MODULE_6__["SubscriptionPage"]]
        })
    ], SubscriptionPageModule);
    return SubscriptionPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=modals-subscription-subscription-module-es5.js.map