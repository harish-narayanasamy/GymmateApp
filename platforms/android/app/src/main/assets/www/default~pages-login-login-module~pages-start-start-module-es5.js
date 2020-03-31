(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-login-login-module~pages-start-start-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\r\n  <ion-header class=\"lightheader\" no-border>\r\n    <ion-toolbar mode=\"ios\" class=\"ion-color\" [style.background-color]=\"customColor\">\r\n        <ion-title class=\"ion-text-capitalize\" (click)=\"goSignUpPage()\">\r\n          Log In\r\n        </ion-title>\r\n            <ion-buttons slot=\"start\">\r\n              <ion-button color=\"primary\" mode=\"md\" (click)=\"goClosePage()\" slot=\"start\">\r\n                <ion-icon name=\"md-arrow-back\"></ion-icon>\r\n              </ion-button>\r\n            </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fixed class=\"ion-color\" [style.background-color]=\"customColor\">\r\n\r\n  <ion-grid fixed style=\"height: 100%;\">\r\n\r\n      <ion-row class=\"ion-justify-content-center ion-align-items-center\" style=\"height: 100%;\">\r\n        <ion-col size=\"8\" class=\"ion-text-center\">\r\n          <h1>Sign In</h1>\r\n    \r\n          <form class=\"form\" autocomplete=\"off\" [formGroup]=\"validationsform\" (ngSubmit)=\"tryLogin(validationsform.value)\">\r\n              <ion-list class=\"line-input\" mode=\"md\"> \r\n                  <ion-item mode=\"md\">\r\n                      \r\n                <ion-input class=\"ion-text-left ion-color\" placeholder=\"Email\" type=\"email\" formControlName=\"email\" [style.background-color]=\"customColor\"></ion-input>\r\n                  </ion-item> \r\n                </ion-list>\r\n                <ion-list class=\"line-input\" mode=\"md\"> \r\n                    <ion-item mode=\"md\"> \r\n                  \r\n                <ion-input class=\"ion-text-left ion-color\" type=\"password\" placeholder=\"Password\" formControlName=\"password\" [style.background-color]=\"customColor\"></ion-input>\r\n                    </ion-item> \r\n                  </ion-list>\r\n              <ion-button class=\"button-h ion-color\" [style.background-color]=\"customColor\" mode=\"ios\" type=\"submit\" [disabled]=\"!validationsform.valid\"  fill=\"solid\" size=\"default\" shape=\"round\" expand=\"block\">\r\n                {{strings.ST28}}\r\n              </ion-button>\r\n            </form>\r\n\r\n            <p class=\"go-to-restpass\">\r\n                <a (click)=\"goRestPassPage()\">{{strings.ST29}}</a>\r\n              </p>\r\n    \r\n        </ion-col>\r\n      </ion-row>\r\n    \r\n    </ion-grid>\r\n\r\n</ion-content>\r\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
var LoginPageRoutingModule = /** @class */ (function () {
    function LoginPageRoutingModule() {
    }
    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LoginPageRoutingModule);
    return LoginPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var _forgotpass_forgotpass_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../forgotpass/forgotpass.module */ "./src/app/pages/forgotpass/forgotpass.module.ts");








var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
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
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".start-logo {\n  max-width: 160px;\n  margin-bottom: 20px; }\n\n.button-h {\n  background-color: #E71923;\n  color: #ffffff !important;\n  font-weight: 600 !important;\n  margin-top: 9em !important;\n  --background-color: #E71923 !important;\n  border-radius: 50px;\n  height: 60px;\n  font-size: 20px;\n  font-family: Proxima-bold; }\n\n.button {\n  --opacity: 1 !important;\n  --font-size: 18px !important; }\n\n.go-to-restpass {\n  text-align: right;\n  font-size: 16px;\n  font-weight: bold;\n  letter-spacing: normal;\n  position: relative;\n  bottom: 14em; }\n\n.go-to-restpass a {\n  color: #ffffff;\n  text-decoration: underline;\n  font-family: proxima-bold; }\n\n.line-input {\n  margin-bottom: 0 !important; }\n\n.line-input ion-item {\n    --border-color: transparent!important;\n    --background-activated: #21201F;\n    --background-focused: #21201F;\n    --background-hover: #21201F;\n    --highlight-height: 0;\n    border: 1px solid #21201F;\n    border-radius: 5px; }\n\n.line-input ion-item.item-has-focus {\n      border: 1px solid var(--ion-color-primary); }\n\n.line-input ion-item ion-label {\n      color: #979797 !important;\n      font-weight: 300;\n      font-size: 14px !important; }\n\n.line-input ion-item ion-icon {\n      color: #807e7e !important;\n      margin-right: 8px !important; }\n\n.sc-ion-input-ios-h {\n  font-size: 14px !important; }\n\n.main-wrapper {\n  background-image: url('log-background.jpg') !important;\n  height: 100% !important;\n  background-size: cover;\n  background-repeat: none; }\n\nion-header {\n  background-image: url('log-background.jpg') !important;\n  padding: 20px 5% 0px 5%;\n  background-position: top;\n  margin-bottom: -50px; }\n\n.ion-page .in-toolbar .toolbar-background {\n  background: transparent !important;\n  padding: 0 !important; }\n\n.line-input {\n  background: transparent !important; }\n\n.ion-text-capitalize {\n  padding: 0 4%;\n  text-align: right;\n  width: 100%;\n  color: #ffffff;\n  font-family: Proxima-bold; }\n\n.ion-text-center {\n  -webkit-box-flex: 0 !important;\n          flex: 0 0 calc(calc(8 / var(--ion-grid-columns, 9)) * 100%) !important;\n  width: calc(calc(8 / var(--ion-grid-columns, 9)) * 100%) !important;\n  max-width: calc(calc(8 / var(--ion-grid-columns, 9)) * 100%) !important;\n  height: 90%; }\n\n.line-input {\n  background: none !important; }\n\nion-item {\n  --ion-background-color: #21201F !important; }\n\n.sc-ion-input-ios-h {\n  font-size: 18px !important;\n  background: transparent !important;\n  background-color: transparent !important;\n  color: #979797 !important; }\n\n.native-input.sc-ion-input-ios {\n  font-size: 18px !important; }\n\nh1 {\n  font-size: 30px;\n  line-height: normal;\n  text-align: left;\n  color: #ffffff;\n  margin-bottom: 40px;\n  font-family: Proxima-black; }\n\n.ion-text-left {\n  color: #979797 !important;\n  font-size: 20px !important;\n  font-weight: normal;\n  opacity: 1 !important; }\n\n.form {\n  margin-bottom: 50px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxIYXJpc2hcXExvY2FsX2RldlxcR3ltbWF0ZUFwcC9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0kseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsMEJBQTBCO0VBQzFCLHNDQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSx1QkFBVTtFQUNWLDRCQUFZLEVBQUE7O0FBR2hCO0VBRUUsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBR2Q7RUFFRSxjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLHlCQUF5QixFQUFBOztBQUczQjtFQUNJLDJCQUEwQixFQUFBOztBQUQ5QjtJQUdRLHFDQUFlO0lBQ2YsK0JBQXVCO0lBQ3ZCLDZCQUFxQjtJQUNyQiwyQkFBbUI7SUFDbkIscUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixrQkFBa0IsRUFBQTs7QUFUMUI7TUFZWSwwQ0FBMEMsRUFBQTs7QUFadEQ7TUFnQlkseUJBQXdCO01BQ3hCLGdCQUFnQjtNQUNoQiwwQkFBeUIsRUFBQTs7QUFsQnJDO01Bc0JZLHlCQUF5QjtNQUN6Qiw0QkFBNEIsRUFBQTs7QUFLeEM7RUFDSSwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxzREFBNkU7RUFDN0UsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBQTs7QUFJM0I7RUFDSSxzREFBNkU7RUFDN0UsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixvQkFBb0IsRUFBQTs7QUFHeEI7RUFHUSxrQ0FBa0M7RUFDbEMscUJBQXFCLEVBQUE7O0FBSzNCO0VBQ0ksa0NBQWtDLEVBQUE7O0FBR3RDO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsY0FBYztFQUNkLHlCQUF5QixFQUFBOztBQUk3QjtFQUNJLDhCQUFzRTtVQUF0RSxzRUFBc0U7RUFDdEUsbUVBQW1FO0VBQ25FLHVFQUF1RTtFQUN2RSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSSwwQ0FBdUIsRUFBQTs7QUFHekI7RUFDRSwwQkFBMEI7RUFDMUIsa0NBQWtDO0VBQ2xDLHdDQUF3QztFQUN4Qyx5QkFBeUIsRUFBQTs7QUFFN0I7RUFDSSwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLHlCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLHFCQUFxQixFQUFBOztBQUd2QjtFQUNJLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXJ0LWxvZ297XHJcbiAgICBtYXgtd2lkdGg6IDE2MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmJ1dHRvbi1oe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U3MTkyMztcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiA5ZW0gIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogI0U3MTkyMyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBQcm94aW1hLWJvbGQ7XHJcbn1cclxuXHJcbi5idXR0b257XHJcbiAgICAtLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIC0tZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5nby10by1yZXN0cGFzc1xyXG57XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvdHRvbTogMTRlbTtcclxufVxyXG5cclxuLmdvLXRvLXJlc3RwYXNzIGFcclxue1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGZvbnQtZmFtaWx5OiBwcm94aW1hLWJvbGQ7XHJcbn1cclxuXHJcbi5saW5lLWlucHV0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAhaW1wb3J0YW50O1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzIxMjAxRjtcclxuICAgICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzIxMjAxRjtcclxuICAgICAgICAtLWJhY2tncm91bmQtaG92ZXI6ICMyMTIwMUY7XHJcbiAgICAgICAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMTIwMUY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgICAgICAmLml0ZW0taGFzLWZvY3VzIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgY29sb3I6ICM5Nzk3OTchaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHghaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIGNvbG9yOiAjODA3ZTdlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc2MtaW9uLWlucHV0LWlvcy1oe1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYWluLXdyYXBwZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nLWJhY2tncm91bmQuanBnJykgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBub25lO1xyXG5cclxufVxyXG5cclxuaW9uLWhlYWRlcntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2ctYmFja2dyb3VuZC5qcGcnKSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMjBweCA1JSAwcHggNSU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNTBweDtcclxufVxyXG5cclxuLmlvbi1wYWdlIHtcclxuICAgIC5pbi10b29sYmFyIHtcclxuICAgICAgLnRvb2xiYXItYmFja2dyb3VuZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5saW5lLWlucHV0e1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LWNhcGl0YWxpemV7XHJcbiAgICBwYWRkaW5nOiAwIDQlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6IFByb3hpbWEtYm9sZDtcclxuICAgIH1cclxuXHJcblxyXG4uaW9uLXRleHQtY2VudGVye1xyXG4gICAgZmxleDogMCAwIGNhbGMoY2FsYyg4IC8gdmFyKC0taW9uLWdyaWQtY29sdW1ucywgOSkpICogMTAwJSkgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiBjYWxjKGNhbGMoOCAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDkpKSAqIDEwMCUpICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoY2FsYyg4IC8gdmFyKC0taW9uLWdyaWQtY29sdW1ucywgOSkpICogMTAwJSkgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogOTAlO1xyXG59XHJcblxyXG4ubGluZS1pbnB1dHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzIxMjAxRiAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnNjLWlvbi1pbnB1dC1pb3MtaHtcclxuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzk3OTc5NyAhaW1wb3J0YW50O1xyXG59XHJcbi5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LWlvcyB7XHJcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaDF7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBQcm94aW1hLWJsYWNrO1xyXG59XHJcblxyXG4uaW9uLXRleHQtbGVmdHtcclxuICAgIGNvbG9yOiAgIzk3OTc5NyAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmZvcm17XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHggIWltcG9ydGFudDtcclxuICB9Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _forgotpass_forgotpass_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../forgotpass/forgotpass.page */ "./src/app/pages/forgotpass/forgotpass.page.ts");
/* harmony import */ var _signup_signup_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../signup/signup.page */ "./src/app/pages/signup/signup.page.ts");









var LoginPage = /** @class */ (function () {
    function LoginPage(authService, navCtrl, formBuilder, router, menuCtrl, modalCtrl, loadingController) {
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
    Object.defineProperty(LoginPage.prototype, "strings", {
        get: function () {
            return this._strings;
        },
        enumerable: true,
        configurable: true
    });
    LoginPage.prototype.ngOnInit = function () {
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
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    LoginPage.prototype.presentAlert = function (value) {
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
    LoginPage.prototype.tryLogin = function (value) {
        var _this = this;
        this.authService.doLogin(value)
            .then(function (res) {
            console.log("check authentication");
            _this.modalCtrl.dismiss();
            _this.router.navigate(['/tabs/tab1']);
        }, function (err) {
            if (err.code === 'auth/wrong-password') {
                _this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"].ST30);
            }
            else if (err.code === 'auth/user-not-found') {
                _this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"].ST31);
            }
            else {
                _this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"].ST32);
            }
        });
    };
    LoginPage.prototype.goRestPassPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _forgotpass_forgotpass_page__WEBPACK_IMPORTED_MODULE_7__["ForgotpassPage"],
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.goClosePage = function () {
        this.modalCtrl.dismiss();
    };
    LoginPage.prototype.goSignUpPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _signup_signup_page__WEBPACK_IMPORTED_MODULE_8__["SignupPage"],
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
    ]; };
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
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-login-login-module~pages-start-start-module-es5.js.map