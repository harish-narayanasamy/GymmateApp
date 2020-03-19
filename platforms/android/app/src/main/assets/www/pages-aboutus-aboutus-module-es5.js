(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-aboutus-aboutus-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/aboutus/aboutus.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/aboutus/aboutus.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\r\n  <ion-toolbar mode=\"ios\">\r\n      <ion-title class=\"ion-text-capitalize\">\r\n        {{strings.ST7}}\r\n      </ion-title>\r\n      <ion-buttons slot=\"start\">\r\n        <app-backbutton color=\"dark\"></app-backbutton>\r\n      </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fixed>\r\n\r\n<ion-grid fixed style=\"height: 100%;\">\r\n\r\n    <ion-row class=\"ion-justify-content-center ion-align-items-center\" style=\"height: 100%;\">\r\n      <ion-col size=\"8\" class=\"ion-text-center\">\r\n        <img src=\"./assets/images/logo_dark.png\" class=\"start-logo\"/>\r\n  \r\n        <div class=\"tags\" [routerLink]=\"['/about']\">\r\n          <h1>{{strings.ST9}}</h1>\r\n          <ion-icon name=\"arrow-forward\" color=\"primary\" slot=\"end\"></ion-icon>\r\n        </div>\r\n\r\n        <div class=\"tags\" [routerLink]=\"['/contact']\">\r\n          <h1>{{strings.ST75}}</h1>\r\n          <ion-icon name=\"arrow-forward\" color=\"primary\" slot=\"end\"></ion-icon>\r\n        </div>\r\n\r\n        <div class=\"tags\" [routerLink]=\"['/terms']\">\r\n          <h1>{{strings.ST82}}</h1>\r\n          <ion-icon name=\"arrow-forward\" color=\"primary\" slot=\"end\"></ion-icon>\r\n        </div>\r\n\r\n        <div class=\"social\">\r\n          <ion-icon (click)=\"openUrl(config.Facebook)\" name=\"logo-facebook\"></ion-icon>\r\n          <ion-icon (click)=\"openUrl(config.Youtube)\" name=\"logo-youtube\"></ion-icon>\r\n          <ion-icon (click)=\"openUrl(config.Twitter)\" name=\"logo-twitter\"></ion-icon>\r\n          <ion-icon (click)=\"openUrl(config.Instagram)\" name=\"logo-instagram\"></ion-icon>\r\n      </div>\r\n  \r\n      </ion-col>\r\n    </ion-row>\r\n  \r\n  </ion-grid>\r\n\r\n</ion-content>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/aboutus/aboutus-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/aboutus/aboutus-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AboutusPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusPageRoutingModule", function() { return AboutusPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _aboutus_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutus.page */ "./src/app/pages/aboutus/aboutus.page.ts");




var routes = [
    {
        path: '',
        component: _aboutus_page__WEBPACK_IMPORTED_MODULE_3__["AboutusPage"]
    }
];
var AboutusPageRoutingModule = /** @class */ (function () {
    function AboutusPageRoutingModule() {
    }
    AboutusPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AboutusPageRoutingModule);
    return AboutusPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/aboutus/aboutus.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/aboutus/aboutus.module.ts ***!
  \*************************************************/
/*! exports provided: AboutusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusPageModule", function() { return AboutusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _aboutus_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aboutus-routing.module */ "./src/app/pages/aboutus/aboutus-routing.module.ts");
/* harmony import */ var _aboutus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aboutus.page */ "./src/app/pages/aboutus/aboutus.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var AboutusPageModule = /** @class */ (function () {
    function AboutusPageModule() {
    }
    AboutusPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _aboutus_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutusPageRoutingModule"]
            ],
            declarations: [_aboutus_page__WEBPACK_IMPORTED_MODULE_6__["AboutusPage"]]
        })
    ], AboutusPageModule);
    return AboutusPageModule;
}());



/***/ }),

/***/ "./src/app/pages/aboutus/aboutus.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/aboutus/aboutus.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".start-logo {\n  max-width: 130px;\n  margin-bottom: 30px; }\n\n.tags {\n  background-color: #f9f9f9;\n  border-left: 3px solid var(--ion-color-primary);\n  padding: 15px;\n  position: relative;\n  margin-bottom: 10px;\n  text-align: left; }\n\n.tags h1 {\n  font-size: 13px;\n  text-transform: uppercase;\n  font-weight: bold;\n  margin: 0; }\n\n.tags ion-icon {\n  position: absolute;\n  right: 14px;\n  top: 11px;\n  font-size: 22px; }\n\n.social {\n  margin-top: 36px; }\n\n.social ion-icon {\n  width: 22px;\n  height: 22px;\n  padding: 10px;\n  border-radius: 100px;\n  margin: 0 3px;\n  color: #fff;\n  background: var(--ion-color-primary); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXR1cy9DOlxcVXNlcnNcXEhhcmlzaFxcTG9jYWxfZGV2XFxHeW1tYXRlQXBwL3NyY1xcYXBwXFxwYWdlc1xcYWJvdXR1c1xcYWJvdXR1cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0kseUJBQXlCO0VBQ3pCLCtDQUErQztFQUMvQyxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixTQUFRLEVBQUE7O0FBR1o7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxlQUFlLEVBQUE7O0FBR25CO0VBQ0EsZ0JBQWdCLEVBQUE7O0FBR2hCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixXQUFXO0VBQ1gsb0NBQW9DLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hYm91dHVzL2Fib3V0dXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXJ0LWxvZ297XHJcbiAgICBtYXgtd2lkdGg6IDEzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLnRhZ3N7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi50YWdzIGgxe1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOjA7XHJcbn1cclxuXHJcbi50YWdzIGlvbi1pY29ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE0cHg7XHJcbiAgICB0b3A6IDExcHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5zb2NpYWx7XHJcbm1hcmdpbi10b3A6IDM2cHg7XHJcbn1cclxuXHJcbi5zb2NpYWwgaW9uLWljb257XHJcbiAgICB3aWR0aDogMjJweDtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIG1hcmdpbjogMCAzcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/aboutus/aboutus.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/aboutus/aboutus.page.ts ***!
  \***********************************************/
/*! exports provided: AboutusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusPage", function() { return AboutusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");





var AboutusPage = /** @class */ (function () {
    function AboutusPage(iab) {
        this.iab = iab;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
        this.config = _config_config__WEBPACK_IMPORTED_MODULE_3__["config"];
    }
    AboutusPage.prototype.ngOnInit = function () {
    };
    AboutusPage.prototype.openUrl = function (url) {
        this.iab.create(url, '_system');
    };
    AboutusPage.ctorParameters = function () { return [
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"] }
    ]; };
    AboutusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__(/*! raw-loader!./aboutus.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/aboutus/aboutus.page.html"),
            styles: [__webpack_require__(/*! ./aboutus.page.scss */ "./src/app/pages/aboutus/aboutus.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"]])
    ], AboutusPage);
    return AboutusPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-aboutus-aboutus-module-es5.js.map