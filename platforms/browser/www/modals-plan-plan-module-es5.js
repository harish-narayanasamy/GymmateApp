(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modals-plan-plan-module"],{

/***/ "./src/app/modals/plan/plan-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/modals/plan/plan-routing.module.ts ***!
  \****************************************************/
/*! exports provided: PlanPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanPageRoutingModule", function() { return PlanPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _plan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plan.page */ "./src/app/modals/plan/plan.page.ts");




var routes = [
    {
        path: '',
        component: _plan_page__WEBPACK_IMPORTED_MODULE_3__["PlanPage"]
    }
];
var PlanPageRoutingModule = /** @class */ (function () {
    function PlanPageRoutingModule() {
    }
    PlanPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PlanPageRoutingModule);
    return PlanPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/modals/plan/plan.module.ts":
/*!********************************************!*\
  !*** ./src/app/modals/plan/plan.module.ts ***!
  \********************************************/
/*! exports provided: PlanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanPageModule", function() { return PlanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _plan_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plan-routing.module */ "./src/app/modals/plan/plan-routing.module.ts");
/* harmony import */ var _plan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plan.page */ "./src/app/modals/plan/plan.page.ts");







var PlanPageModule = /** @class */ (function () {
    function PlanPageModule() {
    }
    PlanPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _plan_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlanPageRoutingModule"]
            ],
            declarations: [_plan_page__WEBPACK_IMPORTED_MODULE_6__["PlanPage"]]
        })
    ], PlanPageModule);
    return PlanPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=modals-plan-plan-module-es5.js.map