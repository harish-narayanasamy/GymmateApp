(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-start-start-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/start/start.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/start/start.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content fixed class=\"dark\">\r\n\r\n<ion-grid fixed class=\"grid-bg\">\r\n\r\n  <ion-row class=\"ion-justify-content-center ion-align-items-center\" style=\"height: 100%;\">\r\n    <ion-col size=\"8\" class=\"ion-text-center\">\r\n      <div class=\"img-logo\">\r\n      <img src=\"./assets/images/logo-.png\" class=\"start-logo\"/>\r\n      </div>\r\n<div class=\"button-start\">\r\n  <ion-text color=\"light\">\r\n    <h1>FIND YOUR FIRE</h1>\r\n    <p>Create account to get your personalised nutrition & training </p>\r\n  </ion-text>\r\n      <ion-button class=\"fb-button button-h start-button\" mode=\"ios\" (click)=\"goLoginPage()\" color=\"#3A5998\" fill=\"solid\" size=\"default\" shape=\"round\" expand=\"block\">\r\n        {{strings.ST26}}\r\n      </ion-button>\r\n      <ion-text class=\"start-or\" color=\"light\">\r\n        or\r\n       </ion-text> \r\n      <ion-button class=\"button-h margin-h start-button\" (click)=\"goSignUpPage()\" mode=\"ios\" color=\"none\" fill=\"outline\" size=\"default\" shape=\"round\" expand=\"block\" no-border>\r\n        {{strings.ST27}}\r\n      </ion-button>\r\n\r\n     </div>\r\n\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-grid>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/start/start-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/start/start-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: StartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageRoutingModule", function() { return StartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _start_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start.page */ "./src/app/pages/start/start.page.ts");




var routes = [
    {
        path: '',
        component: _start_page__WEBPACK_IMPORTED_MODULE_3__["StartPage"]
    }
];
var StartPageRoutingModule = /** @class */ (function () {
    function StartPageRoutingModule() {
    }
    StartPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], StartPageRoutingModule);
    return StartPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/start/start.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/start/start.module.ts ***!
  \*********************************************/
/*! exports provided: StartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageModule", function() { return StartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _start_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./start-routing.module */ "./src/app/pages/start/start-routing.module.ts");
/* harmony import */ var _start_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./start.page */ "./src/app/pages/start/start.page.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../login/login.module */ "./src/app/pages/login/login.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _signup_signup_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../signup/signup.module */ "./src/app/pages/signup/signup.module.ts");










var StartPageModule = /** @class */ (function () {
    function StartPageModule() {
    }
    StartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _start_routing_module__WEBPACK_IMPORTED_MODULE_5__["StartPageRoutingModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_7__["LoginPageModule"],
                _signup_signup_module__WEBPACK_IMPORTED_MODULE_9__["SignupPageModule"]
            ],
            declarations: [_start_page__WEBPACK_IMPORTED_MODULE_6__["StartPage"]]
        })
    ], StartPageModule);
    return StartPageModule;
}());



/***/ }),

/***/ "./src/app/pages/start/start.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/start/start.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-bg {\n  height: 100%;\n  background-image: url('start.jpg');\n  background-size: cover;\n  background-position: center center fixed;\n  background-repeat: no-repeat;\n  min-height: 480px;\n  width: 100%; }\n\n.start-logo {\n  max-width: 160px; }\n\n.margin-h {\n  margin-bottom: 20px !important;\n  margin-top: 20px !important;\n  background-color: #E71923;\n  color: #ffffff;\n  border-radius: 50px; }\n\n.fb-button {\n  background-color: #3A5998;\n  border-radius: 50px;\n  margin-bottom: 20px; }\n\n.button-h {\n  height: 50px;\n  font-size: 16px;\n  font-weight: bold !important;\n  --border-image: none !important; }\n\n.color-facebook {\n  color: #3b5998 !important; }\n\n.button-native {\n  padding: 0 !important;\n  border: none !important; }\n\nion-button {\n  --border-style: none; }\n\nh1 {\n  font-size: 35px;\n  font-family: Gilroy-blacktalic; }\n\np {\n  margin-bottom: 45%;\n  font-family: Nunito; }\n\n.start-or {\n  font-size: 18px;\n  line-height: 18px; }\n\n.ion-text-center {\n  -webkit-box-flex: 0 !important;\n          flex: 0 0 calc(calc(8 / var(--ion-grid-columns, 9)) * 100%) !important;\n  width: calc(calc(8 / var(--ion-grid-columns, 9)) * 100%) !important;\n  max-width: calc(calc(8 / var(--ion-grid-columns, 9)) * 100%) !important;\n  height: 90%; }\n\n.button-start {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  min-height: 80%; }\n\n.img-logo {\n  height: 20%; }\n\n@media only screen and (min-width: 420px) {\n  p {\n    margin-bottom: 50px; }\n  .button-start {\n    min-height: auto; } }\n\n@media only screen and (max-width: 420px) {\n  p {\n    margin-bottom: 30%; } }\n\n@media only screen and (max-width: 370px) {\n  p {\n    margin-bottom: 25%; } }\n\n@media only screen and (max-width: 320px) {\n  p {\n    margin-bottom: 20%; } }\n\n@media only screen and (max-width: 280px) {\n  .grid-bg {\n    height: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RhcnQvQzpcXFVzZXJzXFxIYXJpc2hcXExvY2FsX2RldlxcR3ltbWF0ZUFwcC9zcmNcXGFwcFxccGFnZXNcXHN0YXJ0XFxzdGFydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFZO0VBQ1osa0NBQXlEO0VBQ3pELHNCQUFzQjtFQUN0Qix3Q0FBd0M7RUFDeEMsNEJBQTRCO0VBQzdCLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FBR2Q7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsbUJBQW1CLEVBQUE7O0FBSXZCO0VBQ0kseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxZQUFZO0VBQ1osZUFBZTtFQUNmLDRCQUE0QjtFQUM1QiwrQkFBZSxFQUFBOztBQUduQjtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLHFCQUFxQjtFQUNyQix1QkFBdUIsRUFBQTs7QUFJM0I7RUFDSSxvQkFBZSxFQUFBOztBQUdqQjtFQUNDLGVBQWU7RUFDZCw4QkFBK0IsRUFBQTs7QUFHbkM7RUFDSSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLDhCQUFzRTtVQUF0RSxzRUFBc0U7RUFDdEUsbUVBQW1FO0VBQ25FLHVFQUF1RTtFQUN2RSxXQUFXLEVBQUE7O0FBR2Y7RUFDRyxvQkFBYTtFQUFiLGFBQWE7RUFDYixxQkFBeUI7VUFBekIseUJBQXlCO0VBQ3pCLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLGVBQWUsRUFBQTs7QUFHbEI7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSTtJQUNJLG1CQUFtQixFQUFBO0VBRXZCO0lBQ0ksZ0JBQWdCLEVBQUEsRUFDbkI7O0FBR0Q7RUFDSTtJQUNJLGtCQUFrQixFQUFBLEVBRXJCOztBQUVUO0VBQ0E7SUFDSSxrQkFBa0IsRUFBQSxFQUNyQjs7QUFJRDtFQUNJO0lBQ0ksa0JBQWtCLEVBQUEsRUFDckI7O0FBSUQ7RUFDSTtJQUNBLFlBQVksRUFBQSxFQUNYIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3RhcnQvc3RhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5ncmlkLWJne1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3N0YXJ0LmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXIgZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICBtaW4taGVpZ2h0OiA0ODBweDtcclxuICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zdGFydC1sb2dve1xyXG4gICAgbWF4LXdpZHRoOiAxNjBweDtcclxufVxyXG5cclxuLm1hcmdpbi1oe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U3MTkyMztcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuXHJcbn1cclxuXHJcbi5mYi1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E1OTk4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5idXR0b24taHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJvcmRlci1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29sb3ItZmFjZWJvb2t7XHJcbiAgICBjb2xvcjogIzNiNTk5OCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnV0dG9uLW5hdGl2ZSB7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIFxyXG59XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gICAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBoMXtcclxuICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEdpbHJveS1ibGFja3RhbGljIDtcclxufVxyXG5cclxucHtcclxuICAgIG1hcmdpbi1ib3R0b206IDQ1JTtcclxuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbn1cclxuXHJcbi5zdGFydC1vcntcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcblxyXG4uaW9uLXRleHQtY2VudGVye1xyXG4gICAgZmxleDogMCAwIGNhbGMoY2FsYyg4IC8gdmFyKC0taW9uLWdyaWQtY29sdW1ucywgOSkpICogMTAwJSkgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiBjYWxjKGNhbGMoOCAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDkpKSAqIDEwMCUpICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoY2FsYyg4IC8gdmFyKC0taW9uLWdyaWQtY29sdW1ucywgOSkpICogMTAwJSkgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogOTAlO1xyXG59XHJcblxyXG4uYnV0dG9uLXN0YXJ0e1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICBtaW4taGVpZ2h0OiA4MCU7XHJcbn1cclxuXHJcbi5pbWctbG9nb3tcclxuICAgIGhlaWdodDogMjAlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyMHB4KSB7XHJcbiAgICBwe1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uLXN0YXJ0e1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwJTtcclxuICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3MHB4KSB7XHJcbnB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNSU7XHJcbn1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAgIHB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB9XHJcbiBcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjgwcHgpIHtcclxuICAgICAgICAuZ3JpZC1iZ3tcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgfSAiXX0= */"

/***/ }),

/***/ "./src/app/pages/start/start.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/start/start.page.ts ***!
  \*******************************************/
/*! exports provided: StartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPage", function() { return StartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _signup_signup_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../signup/signup.page */ "./src/app/pages/signup/signup.page.ts");









var StartPage = /** @class */ (function () {
    function StartPage(menuCtrl, authService, navCtrl, router, modalCtrl, loadingController, platform) {
        this.menuCtrl = menuCtrl;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.loadingController = loadingController;
        this.platform = platform;
        // tslint:disable-next-line: variable-name
        this._strings = _config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"];
        this.platform = platform;
    }
    Object.defineProperty(StartPage.prototype, "strings", {
        get: function () {
            return this._strings;
        },
        enumerable: true,
        configurable: true
    });
    StartPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    StartPage.prototype.ngOnInit = function () { };
    StartPage.prototype.ngAfterViewInit = function () {
        this.backButtonSubscription = this.platform.backButton.subscribe(function () {
            navigator['app'].exitApp();
        });
    };
    StartPage.prototype.ngOnDestroy = function () {
        this.backButtonSubscription.unsubscribe();
    };
    StartPage.prototype.goLoginPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _login_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"],
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    StartPage.prototype.presentAlert = function (value) {
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
    StartPage.prototype.goSignUpPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _signup_signup_page__WEBPACK_IMPORTED_MODULE_7__["SignupPage"],
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    StartPage.prototype.tryFacebookLogin = function () {
        var _this = this;
        this.authService.doFacebookLogin()
            .then(function (res) {
            _this.router.navigateByUrl('/home');
        }, function (err) {
            if (err === 'auth/wrong-password') {
                _this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"].ST30);
            }
            else if (err === 'auth/user-not-found') {
                _this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"].ST31);
            }
            else {
                _this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"].ST32);
            }
        });
    };
    StartPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
    ]; };
    StartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-start',
            template: __webpack_require__(/*! raw-loader!./start.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/start/start.page.html"),
            styles: [__webpack_require__(/*! ./start.page.scss */ "./src/app/pages/start/start.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], StartPage);
    return StartPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-start-start-module-es5.js.map