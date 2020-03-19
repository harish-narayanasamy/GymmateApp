(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-login-login-module~pages-start-start-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/forgotpass/forgotpass.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/forgotpass/forgotpass.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\r\n  <ion-toolbar mode=\"ios\">\r\n      <ion-title class=\"ion-text-capitalize\">\r\n        {{strings.ST29}}\r\n      </ion-title>\r\n          <ion-buttons slot=\"start\">\r\n            <ion-button color=\"#f7474f\" mode=\"md\" (click)=\"goClosePage()\" slot=\"start\">\r\n              <ion-icon name=\"md-arrow-back\"></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n<ion-grid fixed style=\"height: 100%;\">\r\n\r\n    <ion-row class=\"ion-justify-content-center ion-align-items-center\" style=\"height: 100%;\">\r\n      <ion-col size=\"8\" class=\"ion-text-center\">\r\n        <img src=\"./assets/images/logo_dark.png\" class=\"start-logo\"/>\r\n  \r\n        <form class=\"form\" autocomplete=\"off\" [formGroup]=\"validationsform\" (ngSubmit)=\"tryRestPass(validationsform.value)\">\r\n            <ion-list class=\"line-input\" mode=\"md\"> \r\n                <ion-item mode=\"md\">\r\n                    <ion-icon name=\"md-mail\" size=\"small\" slot=\"start\"></ion-icon>\r\n              <ion-input class=\"ion-text-left\" placeholder=\"Email\" type=\"email\" formControlName=\"email\"></ion-input>\r\n                </ion-item> \r\n              </ion-list>\r\n            <ion-button class=\"button-h\" mode=\"ios\" type=\"submit\" [disabled]=\"!validationsform.valid\" color=\"primary\" fill=\"solid\" size=\"default\" shape=\"round\" expand=\"block\">\r\n              {{strings.ST28}}\r\n            </ion-button>\r\n          </form>\r\n\r\n          <p class=\"go-to-restpass\">\r\n              <a (click)=\"goClosePage()\">{{strings.ST35}}</a>\r\n            </p>\r\n  \r\n      </ion-col>\r\n    </ion-row>\r\n  \r\n  </ion-grid>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\r\n  <ion-header class=\"lightheader\" no-border>\r\n    <ion-toolbar mode=\"ios\" class=\"ion-color\" [style.background-color]=\"customColor\">\r\n        <ion-title class=\"ion-text-capitalize\">\r\n          {{strings.ST26}}\r\n        </ion-title>\r\n            <ion-buttons slot=\"start\">\r\n              <ion-button color=\"light\" mode=\"md\" (click)=\"goClosePage()\" slot=\"start\">\r\n                <ion-icon name=\"md-arrow-back\"></ion-icon>\r\n              </ion-button>\r\n            </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fixed class=\"ion-color\" [style.background-color]=\"customColor\">\r\n\r\n  <ion-grid fixed style=\"height: 100%;\">\r\n\r\n      <ion-row class=\"ion-justify-content-center ion-align-items-center\" style=\"height: 100%;\">\r\n        <ion-col size=\"8\" class=\"ion-text-center\">\r\n          <h1>Sign In</h1>\r\n    \r\n          <form class=\"form\" autocomplete=\"off\" [formGroup]=\"validationsform\" (ngSubmit)=\"tryLogin(validationsform.value)\">\r\n              <ion-list class=\"line-input\" mode=\"md\"> \r\n                  <ion-item mode=\"md\">\r\n                      \r\n                <ion-input class=\"ion-text-left ion-color\" placeholder=\"Email\" type=\"email\" formControlName=\"email\" [style.background-color]=\"customColor\"></ion-input>\r\n                  </ion-item> \r\n                </ion-list>\r\n                <ion-list class=\"line-input\" mode=\"md\"> \r\n                    <ion-item mode=\"md\"> \r\n                  \r\n                <ion-input class=\"ion-text-left ion-color\" type=\"password\" placeholder=\"Password\" formControlName=\"password\" [style.background-color]=\"customColor\"></ion-input>\r\n                    </ion-item> \r\n                  </ion-list>\r\n              <ion-button class=\"button-h ion-color\" [style.background-color]=\"customColor\" mode=\"ios\" type=\"submit\" [disabled]=\"!validationsform.valid\"  fill=\"solid\" size=\"default\" shape=\"round\" expand=\"block\">\r\n                {{strings.ST28}}\r\n              </ion-button>\r\n            </form>\r\n\r\n            <p class=\"go-to-restpass\">\r\n                <a (click)=\"goRestPassPage()\">{{strings.ST29}}</a>\r\n              </p>\r\n    \r\n        </ion-col>\r\n      </ion-row>\r\n    \r\n    </ion-grid>\r\n\r\n</ion-content>\r\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _forgotpass_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgotpass.page */ "./src/app/pages/forgotpass/forgotpass.page.ts");




const routes = [
    {
        path: '',
        component: _forgotpass_page__WEBPACK_IMPORTED_MODULE_3__["ForgotpassPage"]
    }
];
let ForgotpassPageRoutingModule = class ForgotpassPageRoutingModule {
};
ForgotpassPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotpassPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgotpass_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgotpass-routing.module */ "./src/app/pages/forgotpass/forgotpass-routing.module.ts");
/* harmony import */ var _forgotpass_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgotpass.page */ "./src/app/pages/forgotpass/forgotpass.page.ts");







let ForgotpassPageModule = class ForgotpassPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");







let ForgotpassPage = class ForgotpassPage {
    constructor(authService, navCtrl, formBuilder, router, menuCtrl, modalCtrl, loadingController) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingController = loadingController;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"];
    }
    ngOnInit() {
        this.validationsform = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ]))
        });
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    presentAlert(value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: null,
                duration: 2000,
                message: value,
                mode: 'ios'
            });
            yield loading.present();
        });
    }
    tryRestPass(value) {
        this.authService.doRestPass(value)
            .then(res => {
            this.modalCtrl.dismiss();
            this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"].ST34);
            this.router.navigate(['/login']);
        }, err => {
            if (err.code === 'auth/user-not-found') {
                this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"].ST31);
            }
            else {
                this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"].ST32);
            }
        });
    }
    goClosePage() {
        this.modalCtrl.dismiss();
    }
};
ForgotpassPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
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



/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var _forgotpass_forgotpass_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../forgotpass/forgotpass.module */ "./src/app/pages/forgotpass/forgotpass.module.ts");








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _forgotpass_forgotpass_module__WEBPACK_IMPORTED_MODULE_7__["ForgotpassPageModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".start-logo {\n  max-width: 160px;\n  margin-bottom: 20px; }\n\n.button-h {\n  background-color: #E71923;\n  color: #ffffff !important;\n  font-weight: 600 !important;\n  margin-top: 9em !important;\n  --background-color: #E71923 !important;\n  border-radius: 50px;\n  height: 60px;\n  font-size: 20px;\n  font-family: Proxima-bold; }\n\n.button {\n  --opacity: 1 !important;\n  --font-size: 18px !important; }\n\n.go-to-restpass {\n  text-align: right;\n  font-size: 16px;\n  font-weight: bold;\n  letter-spacing: normal;\n  position: relative;\n  bottom: 14em; }\n\n.go-to-restpass a {\n  color: #ffffff;\n  text-decoration: underline;\n  font-family: proxima-bold; }\n\n.line-input {\n  margin-bottom: 0 !important; }\n\n.line-input ion-item {\n    --border-color: transparent!important;\n    --background-activated: #21201F;\n    --background-focused: #21201F;\n    --background-hover: #21201F;\n    --highlight-height: 0;\n    border: 1px solid #21201F;\n    border-radius: 5px; }\n\n.line-input ion-item.item-has-focus {\n      border: 1px solid var(--ion-color-primary); }\n\n.line-input ion-item ion-label {\n      color: #979797 !important;\n      font-weight: 300;\n      font-size: 14px !important; }\n\n.line-input ion-item ion-icon {\n      color: #807e7e !important;\n      margin-right: 8px !important; }\n\n.sc-ion-input-ios-h {\n  font-size: 14px !important; }\n\n.main-wrapper {\n  background-image: url('log-background.jpg') !important;\n  height: 100% !important;\n  background-size: cover;\n  background-repeat: none; }\n\n.ion-page .in-toolbar .toolbar-background {\n  background: transparent !important;\n  padding: 0 !important; }\n\n.line-input {\n  background: transparent !important; }\n\n.ion-text-capitalize {\n  padding: 0 4%;\n  text-align: right;\n  width: 100%;\n  color: #ffffff;\n  font-family: Proxima-bold; }\n\n.ion-text-center {\n  -webkit-box-flex: 0 !important;\n          flex: 0 0 calc(calc(8 / var(--ion-grid-columns, 9)) * 100%) !important;\n  width: calc(calc(8 / var(--ion-grid-columns, 9)) * 100%) !important;\n  max-width: calc(calc(8 / var(--ion-grid-columns, 9)) * 100%) !important;\n  height: 90%; }\n\n.line-input {\n  background: none !important; }\n\nion-item {\n  --ion-background-color: #21201F !important; }\n\n.sc-ion-input-ios-h {\n  font-size: 18px !important;\n  background: transparent !important;\n  background-color: transparent !important;\n  color: #979797 !important; }\n\n.native-input.sc-ion-input-ios {\n  font-size: 18px !important; }\n\nh1 {\n  font-size: 30px;\n  line-height: normal;\n  text-align: left;\n  color: #ffffff;\n  margin-bottom: 40px;\n  font-family: Proxima-black; }\n\nion-header {\n  max-width: 90%;\n  margin: 20px auto -50px auto; }\n\n.ion-text-left {\n  color: #979797 !important;\n  font-size: 20px !important;\n  font-weight: normal;\n  opacity: 1 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxIYXJpc2hcXExvY2FsX2RldlxcR3ltbWF0ZUFwcC9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0kseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsMEJBQTBCO0VBQzFCLHNDQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSx1QkFBVTtFQUNWLDRCQUFZLEVBQUE7O0FBR2hCO0VBRUUsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBR2Q7RUFFRSxjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLHlCQUF5QixFQUFBOztBQUczQjtFQUNJLDJCQUEwQixFQUFBOztBQUQ5QjtJQUdRLHFDQUFlO0lBQ2YsK0JBQXVCO0lBQ3ZCLDZCQUFxQjtJQUNyQiwyQkFBbUI7SUFDbkIscUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixrQkFBa0IsRUFBQTs7QUFUMUI7TUFZWSwwQ0FBMEMsRUFBQTs7QUFadEQ7TUFnQlkseUJBQXdCO01BQ3hCLGdCQUFnQjtNQUNoQiwwQkFBeUIsRUFBQTs7QUFsQnJDO01Bc0JZLHlCQUF5QjtNQUN6Qiw0QkFBNEIsRUFBQTs7QUFLeEM7RUFDSSwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxzREFBNkU7RUFDN0UsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBQTs7QUFJM0I7RUFHUSxrQ0FBa0M7RUFDbEMscUJBQXFCLEVBQUE7O0FBSzNCO0VBQ0ksa0NBQWtDLEVBQUE7O0FBR3RDO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsY0FBYztFQUNkLHlCQUF5QixFQUFBOztBQUk3QjtFQUNJLDhCQUFzRTtVQUF0RSxzRUFBc0U7RUFDdEUsbUVBQW1FO0VBQ25FLHVFQUF1RTtFQUN2RSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSSwwQ0FBdUIsRUFBQTs7QUFHekI7RUFDRSwwQkFBMEI7RUFDMUIsa0NBQWtDO0VBQ2xDLHdDQUF3QztFQUN4Qyx5QkFBeUIsRUFBQTs7QUFFN0I7RUFDSSwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLGNBQWM7RUFDZCw0QkFBNEIsRUFBQTs7QUFHaEM7RUFDSSx5QkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGFydC1sb2dve1xyXG4gICAgbWF4LXdpZHRoOiAxNjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5idXR0b24taHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNzE5MjM7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogOWVtICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICNFNzE5MjMgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogUHJveGltYS1ib2xkO1xyXG59XHJcblxyXG4uYnV0dG9ue1xyXG4gICAgLS1vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAtLWZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZ28tdG8tcmVzdHBhc3Ncclxue1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3R0b206IDE0ZW07XHJcbn1cclxuXHJcbi5nby10by1yZXN0cGFzcyBhXHJcbntcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBmb250LWZhbWlseTogcHJveGltYS1ib2xkO1xyXG59XHJcblxyXG4ubGluZS1pbnB1dCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwIWltcG9ydGFudDtcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMyMTIwMUY7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICMyMTIwMUY7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjMjEyMDFGO1xyXG4gICAgICAgIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMjEyMDFGO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAgICAgJi5pdGVtLWhhcy1mb2N1cyB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOTc5Nzk3IWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4IWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBjb2xvcjogIzgwN2U3ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnNjLWlvbi1pbnB1dC1pb3MtaHtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWFpbi13cmFwcGVye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZy1iYWNrZ3JvdW5kLmpwZycpICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm9uZTtcclxuXHJcbn1cclxuXHJcbi5pb24tcGFnZSB7XHJcbiAgICAuaW4tdG9vbGJhciB7XHJcbiAgICAgIC50b29sYmFyLWJhY2tncm91bmQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubGluZS1pbnB1dHtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC1jYXBpdGFsaXple1xyXG4gICAgcGFkZGluZzogMCA0JTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiBQcm94aW1hLWJvbGQ7XHJcbiAgICB9XHJcblxyXG5cclxuLmlvbi10ZXh0LWNlbnRlcntcclxuICAgIGZsZXg6IDAgMCBjYWxjKGNhbGMoOCAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDkpKSAqIDEwMCUpICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogY2FsYyhjYWxjKDggLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCA5KSkgKiAxMDAlKSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiBjYWxjKGNhbGMoOCAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDkpKSAqIDEwMCUpICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxufVxyXG5cclxuLmxpbmUtaW5wdXR7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMyMTIwMUYgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5zYy1pb24taW5wdXQtaW9zLWh7XHJcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM5Nzk3OTcgIWltcG9ydGFudDtcclxufVxyXG4ubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1pb3Mge1xyXG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBmb250LWZhbWlseTogUHJveGltYS1ibGFjaztcclxufVxyXG5cclxuaW9uLWhlYWRlcntcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gLTUwcHggYXV0bztcclxufVxyXG5cclxuLmlvbi10ZXh0LWxlZnR7XHJcbiAgICBjb2xvcjogICM5Nzk3OTcgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _forgotpass_forgotpass_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../forgotpass/forgotpass.page */ "./src/app/pages/forgotpass/forgotpass.page.ts");








let LoginPage = class LoginPage {
    constructor(authService, navCtrl, formBuilder, router, menuCtrl, modalCtrl, loadingController) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingController = loadingController;
        // tslint:disable-next-line: variable-name
        this._strings = _config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"];
    }
    get strings() {
        return this._strings;
    }
    ngOnInit() {
        this.validationsform = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
        });
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    presentAlert(value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: null,
                duration: 2000,
                message: value,
                mode: 'ios'
            });
            yield loading.present();
        });
    }
    tryLogin(value) {
        this.authService.doLogin(value)
            .then(res => {
            console.log("check authentication");
            this.modalCtrl.dismiss();
            this.router.navigate(['/tabs/tab1']);
        }, err => {
            if (err.code === 'auth/wrong-password') {
                this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"].ST30);
            }
            else if (err.code === 'auth/user-not-found') {
                this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"].ST31);
            }
            else {
                this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"].ST32);
            }
        });
    }
    goRestPassPage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _forgotpass_forgotpass_page__WEBPACK_IMPORTED_MODULE_7__["ForgotpassPage"],
            });
            modal.present();
        });
    }
    goClosePage() {
        this.modalCtrl.dismiss();
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=default~pages-login-login-module~pages-start-start-module-es2015.js.map