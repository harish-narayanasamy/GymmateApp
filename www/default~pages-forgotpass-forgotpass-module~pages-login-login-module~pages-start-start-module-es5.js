(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-forgotpass-forgotpass-module~pages-login-login-module~pages-start-start-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/forgotpass/forgotpass.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/forgotpass/forgotpass.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\r\n  <ion-header class=\"lightheader\" no-border>\r\n    <ion-toolbar mode=\"ios\" class=\"ion-color\" [style.background-color]=\"customColor\">\r\n            <ion-buttons slot=\"start\">\r\n              <ion-button color=\"light\" mode=\"md\" (click)=\"goClosePage()\" slot=\"start\" color=\"primary\">\r\n                <ion-icon name=\"md-arrow-back\"></ion-icon>\r\n              </ion-button>\r\n            </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content class=\"ion-color\" [style.background-color]=\"customColor\">\r\n  \r\n  <ion-grid fixed style=\"height: 100%;\" >\r\n  \r\n      <ion-row class=\"ion-justify-content-center ion-align-items-center\" style=\"height: 100%;\">\r\n        <ion-col size=\"8\" class=\"ion-text-center\">\r\n          <ion-text color=\"light\">\r\n            <h1>Reset Password</h1>\r\n          </ion-text>\r\n    \r\n          <form class=\"form\" autocomplete=\"off\" [formGroup]=\"validationsform\" (ngSubmit)=\"tryRestPass(validationsform.value)\">\r\n              <ion-list class=\"line-input\" mode=\"md\"> \r\n                  <ion-item mode=\"md\">\r\n                <ion-input class=\"ion-text-left\" placeholder=\"Your email\" type=\"email\" formControlName=\"email\"></ion-input>\r\n                  </ion-item> \r\n                </ion-list>\r\n                <ion-text color=\"light\">\r\n                  <p>We’ll send you an email with instructions to reset your password.</p>\r\n                </ion-text>\r\n              <ion-button class=\"button-h ion-color\" mode=\"ios\" type=\"submit\" [disabled]=\"!validationsform.valid\" [style.background-color]=\"customColor\"fill=\"solid\" size=\"default\" shape=\"round\" expand=\"block\">\r\n                {{strings.ST28}}\r\n              </ion-button>\r\n            </form>\r\n        </ion-col>\r\n      </ion-row>\r\n    \r\n    </ion-grid>\r\n  \r\n  </ion-content>\r\n  </div>"

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

module.exports = ".start-logo {\n  max-width: 160px;\n  margin-bottom: 20px; }\n\n.button-h {\n  height: 50px;\n  font-size: 14px;\n  font-weight: bold !important;\n  margin: 0 !important;\n  margin-top: 10px !important;\n  text-transform: uppercase !important; }\n\n.go-to-restpass {\n  text-align: center;\n  margin-top: 20px;\n  font-size: 13px;\n  text-transform: uppercase !important; }\n\n.go-to-restpass a {\n  color: #807e7e; }\n\n.line-input {\n  margin-bottom: 0 !important; }\n\n.line-input ion-item {\n    --border-color: transparent!important;\n    --background-activated: #21201F;\n    --background-focused: #21201F;\n    --background-hover: #21201F;\n    --highlight-height: 0;\n    border: 1px solid #21201F;\n    border-radius: 5px; }\n\n.line-input ion-item.item-has-focus {\n      border: 1px solid var(--ion-color-primary); }\n\n.line-input ion-item ion-label {\n      color: #979797 !important;\n      font-weight: 300;\n      font-size: 14px !important; }\n\n.line-input ion-item ion-icon {\n      color: #807e7e !important;\n      margin-right: 8px !important; }\n\n.sc-ion-input-ios-h {\n  font-size: 14px !important; }\n\nh1 {\n  font-size: 30px;\n  line-height: normal;\n  text-align: left;\n  color: #ffffff;\n  margin-bottom: 20px;\n  font-family: Proxima-black; }\n\n.main-wrapper {\n  background-image: url('log-background.jpg') !important;\n  height: 100% !important;\n  background-size: cover;\n  background-repeat: none; }\n\n.ion-page .in-toolbar .toolbar-background {\n  background: transparent !important; }\n\n.ion-text-center {\n  text-align: left !important;\n  position: absolute;\n  top: 40px;\n  -webkit-box-flex: 0 !important;\n          flex: 0 0 calc(calc(12 / var(--ion-grid-columns, 12)) * 90%) !important;\n  width: calc(calc(12 / var(--ion-grid-columns, 12)) * 100%) !important;\n  max-width: calc(calc(12 / var(--ion-grid-columns, 12)) * 90%) !important;\n  margin: 0 auto; }\n\n.line-input {\n  background: none !important; }\n\nion-item {\n  --ion-background-color: #21201F !important; }\n\n.button-h {\n  background-color: #E71923;\n  color: #ffffff !important;\n  font-weight: 600 !important;\n  margin-top: 35% !important;\n  height: 60px;\n  border-radius: 50px;\n  font-size: 18px; }\n\n.button {\n  --opacity: 1 !important;\n  --font-size: 18px !important;\n  --font-family: Proxima-bold; }\n\n.ion-text-left {\n  color: #979797 !important;\n  font-size: 20px !important;\n  font-weight: normal;\n  opacity: 1 !important; }\n\np {\n  font-family: 'Proxima-regular';\n  font-size: 18px;\n  color: #ffffff;\n  line-height: normal;\n  margin: 5px 0 !important; }\n\nion-header {\n  margin-top: 40px;\n  margin-bottom: -50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9yZ290cGFzcy9DOlxcVXNlcnNcXEhhcmlzaFxcTG9jYWxfZGV2XFxHeW1tYXRlQXBwL3NyY1xcYXBwXFxwYWdlc1xcZm9yZ290cGFzc1xcZm9yZ290cGFzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksWUFBWTtFQUNaLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBQ3BCLDJCQUEyQjtFQUMzQixvQ0FBb0MsRUFBQTs7QUFHeEM7RUFFRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixvQ0FBb0MsRUFBQTs7QUFHdEM7RUFFRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0ksMkJBQTBCLEVBQUE7O0FBRDlCO0lBR1EscUNBQWU7SUFDZiwrQkFBdUI7SUFDdkIsNkJBQXFCO0lBQ3JCLDJCQUFtQjtJQUNuQixxQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGtCQUFrQixFQUFBOztBQVQxQjtNQVlZLDBDQUEwQyxFQUFBOztBQVp0RDtNQWdCWSx5QkFBd0I7TUFDeEIsZ0JBQWdCO01BQ2hCLDBCQUF5QixFQUFBOztBQWxCckM7TUFzQlkseUJBQXlCO01BQ3pCLDRCQUE0QixFQUFBOztBQUt4QztFQUNJLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksc0RBQTZFO0VBQzdFLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsdUJBQXVCLEVBQUE7O0FBSzNCO0VBR1Esa0NBQWtDLEVBQUE7O0FBS3hDO0VBQ0ksMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsOEJBQXVFO1VBQXZFLHVFQUF1RTtFQUN2RSxxRUFBcUU7RUFDckUsd0VBQXdFO0VBQ3hFLGNBQWMsRUFBQTs7QUFHbEI7RUFDRSwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSSwwQ0FBdUIsRUFBQTs7QUFHekI7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksdUJBQVU7RUFDViw0QkFBWTtFQUNaLDJCQUFjLEVBQUE7O0FBR2xCO0VBQ0kseUJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsOEJBQThCO0VBQzVCLGVBQWU7RUFDZixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHdCQUF3QixFQUFBOztBQUc1QjtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZvcmdvdHBhc3MvZm9yZ290cGFzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhcnQtbG9nb3tcclxuICAgIG1heC13aWR0aDogMTYwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uLWh7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5nby10by1yZXN0cGFzc1xyXG57XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmdvLXRvLXJlc3RwYXNzIGFcclxue1xyXG4gIGNvbG9yOiAjODA3ZTdlO1xyXG59XHJcblxyXG4ubGluZS1pbnB1dCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwIWltcG9ydGFudDtcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMyMTIwMUY7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICMyMTIwMUY7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjMjEyMDFGO1xyXG4gICAgICAgIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMjEyMDFGO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAgICAgJi5pdGVtLWhhcy1mb2N1cyB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOTc5Nzk3IWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4IWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBjb2xvcjogIzgwN2U3ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnNjLWlvbi1pbnB1dC1pb3MtaHtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5oMXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFByb3hpbWEtYmxhY2s7XHJcbn1cclxuXHJcbi5tYWluLXdyYXBwZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nLWJhY2tncm91bmQuanBnJykgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBub25lO1xyXG5cclxufVxyXG5cclxuXHJcbi5pb24tcGFnZSB7XHJcbiAgICAuaW4tdG9vbGJhciB7XHJcbiAgICAgIC50b29sYmFyLWJhY2tncm91bmQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC1jZW50ZXJ7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDQwcHg7XHJcbiAgICAgIGZsZXg6IDAgMCBjYWxjKGNhbGMoMTIgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogOTAlKSAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogY2FsYyhjYWxjKDEyIC8gdmFyKC0taW9uLWdyaWQtY29sdW1ucywgMTIpKSAqIDEwMCUpICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1heC13aWR0aDogY2FsYyhjYWxjKDEyIC8gdmFyKC0taW9uLWdyaWQtY29sdW1ucywgMTIpKSAqIDkwJSkgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuICAubGluZS1pbnB1dHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzIxMjAxRiAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi1oe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U3MTkyMztcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAzNSUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5idXR0b257XHJcbiAgICAtLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIC0tZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWZvbnQtZmFtaWx5OiBQcm94aW1hLWJvbGQ7XHJcbn1cclxuXHJcbi5pb24tdGV4dC1sZWZ0e1xyXG4gICAgY29sb3I6ICAjOTc5Nzk3ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBwe1xyXG4gICAgZm9udC1mYW1pbHk6ICdQcm94aW1hLXJlZ3VsYXInO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgICBtYXJnaW46IDVweCAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBpb24taGVhZGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNTBweDtcclxufSJdfQ== */"

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