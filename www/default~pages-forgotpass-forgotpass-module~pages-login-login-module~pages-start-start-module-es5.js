(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-forgotpass-forgotpass-module~pages-login-login-module~pages-start-start-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/forgotpass/forgotpass.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/forgotpass/forgotpass.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\r\n  <ion-toolbar mode=\"ios\">\r\n      <ion-title class=\"ion-text-capitalize\">\r\n        {{strings.ST29}}\r\n      </ion-title>\r\n          <ion-buttons slot=\"start\">\r\n            <ion-button color=\"#f7474f\" mode=\"md\" (click)=\"goClosePage()\" slot=\"start\">\r\n              <ion-icon name=\"md-arrow-back\"></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n<ion-grid fixed style=\"height: 100%;\">\r\n\r\n    <ion-row class=\"ion-justify-content-center ion-align-items-center\" style=\"height: 100%;\">\r\n      <ion-col size=\"8\" class=\"ion-text-center\">\r\n        <img src=\"./assets/images/logo_dark.png\" class=\"start-logo\"/>\r\n  \r\n        <form class=\"form\" autocomplete=\"off\" [formGroup]=\"validationsform\" (ngSubmit)=\"tryRestPass(validationsform.value)\">\r\n            <ion-list class=\"line-input\" mode=\"md\"> \r\n                <ion-item mode=\"md\">\r\n                    <ion-icon name=\"md-mail\" size=\"small\" slot=\"start\"></ion-icon>\r\n              <ion-input class=\"ion-text-left\" placeholder=\"Email\" type=\"email\" formControlName=\"email\"></ion-input>\r\n                </ion-item> \r\n              </ion-list>\r\n            <ion-button class=\"button-h\" mode=\"ios\" type=\"submit\" [disabled]=\"!validationsform.valid\" color=\"primary\" fill=\"solid\" size=\"default\" shape=\"round\" expand=\"block\">\r\n              {{strings.ST28}}\r\n            </ion-button>\r\n          </form>\r\n\r\n          <p class=\"go-to-restpass\">\r\n              <a (click)=\"goClosePage()\">{{strings.ST35}}</a>\r\n            </p>\r\n  \r\n      </ion-col>\r\n    </ion-row>\r\n  \r\n  </ion-grid>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/forgotpass/forgotpass-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/forgotpass/forgotpass-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ForgotpassPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassPageRoutingModule", function() { return ForgotpassPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _forgotpass_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgotpass.page */ "./src/app/pages/forgotpass/forgotpass.page.ts");




var routes = [
    {
        path: '',
        component: _forgotpass_page__WEBPACK_IMPORTED_MODULE_3__["ForgotpassPage"]
    }
];
var ForgotpassPageRoutingModule = /** @class */ (function () {
    function ForgotpassPageRoutingModule() {
    }
    ForgotpassPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ForgotpassPageRoutingModule);
    return ForgotpassPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/forgotpass/forgotpass.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/forgotpass/forgotpass.module.ts ***!
  \*******************************************************/
/*! exports provided: ForgotpassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassPageModule", function() { return ForgotpassPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgotpass_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgotpass-routing.module */ "./src/app/pages/forgotpass/forgotpass-routing.module.ts");
/* harmony import */ var _forgotpass_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgotpass.page */ "./src/app/pages/forgotpass/forgotpass.page.ts");







var ForgotpassPageModule = /** @class */ (function () {
    function ForgotpassPageModule() {
    }
    ForgotpassPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _forgotpass_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotpassPageRoutingModule"]
            ],
            declarations: [_forgotpass_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpassPage"]]
        })
    ], ForgotpassPageModule);
    return ForgotpassPageModule;
}());



/***/ }),

/***/ "./src/app/pages/forgotpass/forgotpass.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/forgotpass/forgotpass.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".start-logo {\n  max-width: 160px;\n  margin-bottom: 20px; }\n\n.button-h {\n  height: 50px;\n  font-size: 14px;\n  font-weight: bold !important;\n  margin: 0 !important;\n  margin-top: 10px !important;\n  text-transform: uppercase !important; }\n\n.go-to-restpass {\n  text-align: center;\n  margin-top: 20px;\n  font-size: 13px;\n  text-transform: uppercase !important; }\n\n.go-to-restpass a {\n  color: #807e7e; }\n\n.line-input {\n  margin-bottom: 0 !important; }\n\n.line-input ion-item {\n    --border-color: transparent!important;\n    --background-activated: white;\n    --background-focused: white;\n    --background-hover: white;\n    --highlight-height: 0;\n    border: 1px solid #807e7e;\n    border-radius: 50px; }\n\n.line-input ion-item.item-has-focus {\n      border: 1px solid var(--ion-color-primary); }\n\n.line-input ion-item ion-label {\n      color: #807e7e !important;\n      font-weight: 300;\n      font-size: 14px !important; }\n\n.line-input ion-item ion-icon {\n      color: #807e7e !important;\n      margin-right: 8px !important; }\n\n.sc-ion-input-ios-h {\n  font-size: 14px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9yZ290cGFzcy9DOlxcVXNlcnNcXEhhcmlzaFxcTG9jYWxfZGV2XFxHeW1tYXRlQXBwL3NyY1xcYXBwXFxwYWdlc1xcZm9yZ290cGFzc1xcZm9yZ290cGFzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksWUFBWTtFQUNaLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBQ3BCLDJCQUEyQjtFQUMzQixvQ0FBb0MsRUFBQTs7QUFHeEM7RUFFRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixvQ0FBb0MsRUFBQTs7QUFHdEM7RUFFRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0ksMkJBQTBCLEVBQUE7O0FBRDlCO0lBR1EscUNBQWU7SUFDZiw2QkFBdUI7SUFDdkIsMkJBQXFCO0lBQ3JCLHlCQUFtQjtJQUNuQixxQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG1CQUFtQixFQUFBOztBQVQzQjtNQVlZLDBDQUEwQyxFQUFBOztBQVp0RDtNQWdCWSx5QkFBd0I7TUFDeEIsZ0JBQWdCO01BQ2hCLDBCQUF5QixFQUFBOztBQWxCckM7TUFzQlkseUJBQXlCO01BQ3pCLDRCQUE0QixFQUFBOztBQUt4QztFQUNJLDBCQUEwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZm9yZ290cGFzcy9mb3Jnb3RwYXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGFydC1sb2dve1xyXG4gICAgbWF4LXdpZHRoOiAxNjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5idXR0b24taHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmdvLXRvLXJlc3RwYXNzXHJcbntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZ28tdG8tcmVzdHBhc3MgYVxyXG57XHJcbiAgY29sb3I6ICM4MDdlN2U7XHJcbn1cclxuXHJcbi5saW5lLWlucHV0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAhaW1wb3J0YW50O1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogd2hpdGU7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHdoaXRlO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1ob3Zlcjogd2hpdGU7XHJcbiAgICAgICAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4MDdlN2U7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuXHJcbiAgICAgICAgJi5pdGVtLWhhcy1mb2N1cyB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjODA3ZTdlIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4IWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBjb2xvcjogIzgwN2U3ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnNjLWlvbi1pbnB1dC1pb3MtaHtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/forgotpass/forgotpass.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/forgotpass/forgotpass.page.ts ***!
  \*****************************************************/
/*! exports provided: ForgotpassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassPage", function() { return ForgotpassPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");







var ForgotpassPage = /** @class */ (function () {
    function ForgotpassPage(authService, navCtrl, formBuilder, router, menuCtrl, modalCtrl, loadingController) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingController = loadingController;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"];
    }
    ForgotpassPage.prototype.ngOnInit = function () {
        this.validationsform = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ]))
        });
    };
    ForgotpassPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    ForgotpassPage.prototype.presentAlert = function (value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: null,
                            duration: 2000,
                            message: value,
                            mode: 'ios'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ForgotpassPage.prototype.tryRestPass = function (value) {
        var _this = this;
        this.authService.doRestPass(value)
            .then(function (res) {
            _this.modalCtrl.dismiss();
            _this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"].ST34);
            _this.router.navigate(['/login']);
        }, function (err) {
            if (err.code === 'auth/user-not-found') {
                _this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"].ST31);
            }
            else {
                _this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"].ST32);
            }
        });
    };
    ForgotpassPage.prototype.goClosePage = function () {
        this.modalCtrl.dismiss();
    };
    ForgotpassPage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
    ]; };
    ForgotpassPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgotpass',
            template: __webpack_require__(/*! raw-loader!./forgotpass.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/forgotpass/forgotpass.page.html"),
            styles: [__webpack_require__(/*! ./forgotpass.page.scss */ "./src/app/pages/forgotpass/forgotpass.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
    ], ForgotpassPage);
    return ForgotpassPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-forgotpass-forgotpass-module~pages-login-login-module~pages-start-start-module-es5.js.map