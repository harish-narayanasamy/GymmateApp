(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-login-login-module~pages-signup-signup-module~pages-start-start-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/signup/signup.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/signup/signup.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\r\n  <ion-header class=\"lightheader\" no-border>\r\n    <ion-toolbar mode=\"ios\" class=\"ion-color\" [style.background-color]=\"customColor\">\r\n      <ion-title class=\"ion-text-capitalize\">\r\n        Sign Up\r\n        </ion-title>\r\n            <ion-buttons slot=\"start\">\r\n              <ion-button color=\"primary\" mode=\"md\" (click)=\"goClosePage()\" slot=\"start\">\r\n                <ion-icon name=\"md-arrow-back\"></ion-icon>\r\n              </ion-button>\r\n            </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content fixed class=\"ion-color\" [style.background-color]=\"customColor\">\r\n  \r\n  <ion-grid fixed style=\"height: 100%;\">\r\n  \r\n      <ion-row class=\"ion-justify-content-center ion-align-items-center\" style=\"height: 100%;\">\r\n        <ion-col size=\"8\" class=\"ion-text-center\">\r\n          <h1>Create an account</h1>\r\n    \r\n          <form class=\"form\" [formGroup]=\"validationsform\" (ngSubmit)=\"tryRegister(validationsform.value)\">\r\n            <ion-list class=\"line-input\" mode=\"md\"> \r\n              <ion-item mode=\"md\">\r\n                  \r\n            <ion-input class=\"ion-text-left ion-color\" placeholder=\"Full Name\" type=\"text\" formControlName=\"name\" [style.background-color]=\"customColor\"></ion-input>\r\n              </ion-item> \r\n            </ion-list>\r\n  \r\n            <ion-list class=\"line-input\" mode=\"md\"> \r\n              <ion-item mode=\"md\">\r\n                  \r\n            <ion-input class=\"ion-text-left\" placeholder=\"Email\" type=\"email\" formControlName=\"email\"></ion-input>\r\n              </ion-item> \r\n            </ion-list>\r\n  \r\n            <ion-list class=\"line-input\" mode=\"md\"> \r\n                <ion-item mode=\"md\"> \r\n              \r\n            <ion-input class=\"ion-text-left\" type=\"Password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\r\n            <ion-icon name=\"md-eye\" size=\"medium\" slot=\"end\"></ion-icon>\r\n                </ion-item> \r\n              </ion-list>\r\n          <ion-button class=\"button-h ion-color\" mode=\"ios\" type=\"submit\" [disabled]=\"!validationsform.valid\" [style.background-color]=\"customColor\" fill=\"solid\" size=\"default\" shape=\"round\" expand=\"block\">\r\n                {{strings.ST28}}\r\n              </ion-button>\r\n            </form>\r\n    \r\n        </ion-col>\r\n      </ion-row>\r\n    \r\n    </ion-grid>\r\n  \r\n  </ion-content>\r\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/termsguest/termsguest.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/termsguest/termsguest.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\r\n  <ion-toolbar mode=\"ios\">\r\n      <ion-title class=\"ion-text-capitalize\">\r\n        {{strings.ST82}}\r\n      </ion-title>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-buttons slot=\"start\">\r\n            <ion-button color=\"dark\" mode=\"md\" (click)=\"goClosePage()\" slot=\"start\">\r\n              <ion-icon name=\"md-arrow-back\"></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n      </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\" fixed>\r\n\r\n  <app-loading *ngIf=\"isLoading\"></app-loading>\r\n  \r\n  <div *ngIf=\"!isLoading\">\r\n  <div [innerHTML]=\"privacypolicy\"></div>\r\n  <div [innerHTML]=\"termsofservice\"></div>\r\n  </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/signup/signup.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".start-logo {\n  max-width: 160px;\n  margin-bottom: 20px; }\n\n.main-wrapper {\n  background-image: url('log-background.jpg') !important;\n  height: 100% !important;\n  background-size: cover;\n  background-repeat: none; }\n\n.button-h {\n  height: 50px;\n  font-size: 14px;\n  font-weight: bold !important;\n  margin: 0 !important;\n  margin-top: 10px !important;\n  text-transform: uppercase !important; }\n\n.go-to-terms {\n  text-align: center;\n  margin-top: 20px;\n  font-size: 13px;\n  text-transform: uppercase !important; }\n\n.go-to-terms a {\n  color: #807e7e; }\n\n.ion-text-capitalize {\n  padding: 0 4%;\n  text-align: right;\n  width: 100%;\n  color: #ffffff;\n  font-family: Proxima-bold; }\n\n.line-input {\n  margin-bottom: 0 !important; }\n\n.line-input ion-item {\n    --border-color: transparent!important;\n    --background-activated: #21201F;\n    --background-focused: #21201F;\n    --background-hover: #21201F;\n    --highlight-height: 0;\n    border: 1px solid #21201F;\n    border-radius: 5px; }\n\n.line-input ion-item.item-has-focus {\n      border: 1px solid var(--ion-color-primary); }\n\n.line-input ion-item ion-label {\n      color: #979797 !important;\n      font-weight: 300;\n      font-size: 14px !important; }\n\n.line-input ion-item ion-icon {\n      color: #807e7e !important;\n      margin-right: 8px !important; }\n\n.sc-ion-input-ios-h {\n  font-size: 14px !important; }\n\n.ion-page .in-toolbar .toolbar-background {\n  background: transparent !important;\n  padding: 0 !important; }\n\n.button-h {\n  height: 50px;\n  font-size: 18px;\n  font-weight: normal !important;\n  margin: 0 !important;\n  margin-top: 10px !important;\n  border-radius: 50px;\n  color: #ffffff; }\n\n.ion-text-center {\n  -webkit-box-flex: 0 !important;\n          flex: 0 0 calc(calc(8 / var(--ion-grid-columns, 9)) * 100%) !important;\n  width: calc(calc(8 / var(--ion-grid-columns, 9)) * 100%) !important;\n  max-width: calc(calc(8 / var(--ion-grid-columns, 9)) * 100%) !important;\n  height: 90%; }\n\n.line-input {\n  background: none !important; }\n\nion-item {\n  --ion-background-color: #21201F !important; }\n\n.ion-text-left {\n  color: #979797 !important;\n  font-size: 20px !important;\n  font-weight: normal;\n  opacity: 1 !important; }\n\n.button-h {\n  background-color: #E71923;\n  color: #ffffff !important;\n  font-weight: 600 !important;\n  margin-top: 50px !important;\n  height: 60px; }\n\n.button {\n  --opacity: 1 !important;\n  --font-size: 18px !important;\n  --font-family: Proxima-bold; }\n\nion-header {\n  background-image: url('log-background.jpg') !important;\n  padding: 20px 5% 0px 5%;\n  background-position: top;\n  margin-bottom: -50px; }\n\nh1 {\n  font-size: 30px;\n  line-height: normal;\n  text-align: left;\n  color: #ffffff;\n  margin-bottom: 40px;\n  font-family: Proxima-black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL0M6XFxVc2Vyc1xcSGFyaXNoXFxMb2NhbF9kZXZcXEd5bW1hdGVBcHAvc3JjXFxhcHBcXHBhZ2VzXFxzaWdudXBcXHNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksc0RBQTZFO0VBQzdFLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsdUJBQXVCLEVBQUE7O0FBSTNCO0VBQ0ksWUFBWTtFQUNaLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBQ3BCLDJCQUEyQjtFQUMzQixvQ0FBb0MsRUFBQTs7QUFHeEM7RUFFRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixvQ0FBb0MsRUFBQTs7QUFHdEM7RUFFRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0ksYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsY0FBYztFQUNkLHlCQUF5QixFQUFBOztBQUd6QjtFQUNJLDJCQUEwQixFQUFBOztBQUQ5QjtJQUdRLHFDQUFlO0lBQ2YsK0JBQXVCO0lBQ3ZCLDZCQUFxQjtJQUNyQiwyQkFBbUI7SUFDbkIscUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixrQkFBa0IsRUFBQTs7QUFUMUI7TUFZWSwwQ0FBMEMsRUFBQTs7QUFadEQ7TUFnQlkseUJBQXdCO01BQ3hCLGdCQUFnQjtNQUNoQiwwQkFBeUIsRUFBQTs7QUFsQnJDO01Bc0JZLHlCQUF5QjtNQUN6Qiw0QkFBNEIsRUFBQTs7QUFJNUM7RUFDSSwwQkFBMEIsRUFBQTs7QUFHOUI7RUFHUSxrQ0FBa0M7RUFDbEMscUJBQXFCLEVBQUE7O0FBSzdCO0VBQ0ksWUFBWTtFQUNaLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsY0FBYyxFQUFBOztBQUdsQjtFQUNJLDhCQUFzRTtVQUF0RSxzRUFBc0U7RUFDdEUsbUVBQW1FO0VBQ25FLHVFQUF1RTtFQUN2RSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSSwwQ0FBdUIsRUFBQTs7QUFJekI7RUFDRSx5QkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQiwyQkFBMkI7RUFDM0IsWUFBWSxFQUFBOztBQUdoQjtFQUNJLHVCQUFVO0VBQ1YsNEJBQVk7RUFDWiwyQkFBYyxFQUFBOztBQUdsQjtFQUNJLHNEQUE2RTtFQUM3RSx1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLG9CQUFvQixFQUFBOztBQUd4QjtFQUNJLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGFydC1sb2dve1xyXG4gICAgbWF4LXdpZHRoOiAxNjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5tYWluLXdyYXBwZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nLWJhY2tncm91bmQuanBnJykgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBub25lO1xyXG5cclxufVxyXG5cclxuLmJ1dHRvbi1oe1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZ28tdG8tdGVybXNcclxue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5nby10by10ZXJtcyBhXHJcbntcclxuICBjb2xvcjogIzgwN2U3ZTtcclxufVxyXG5cclxuLmlvbi10ZXh0LWNhcGl0YWxpemV7XHJcbiAgICBwYWRkaW5nOiAwIDQlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6IFByb3hpbWEtYm9sZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxpbmUtaW5wdXQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAhaW1wb3J0YW50O1xyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzIxMjAxRjtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICMyMTIwMUY7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIzIxMjAxRjtcclxuICAgICAgICAgICAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMjEyMDFGO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBcclxuICAgICAgICAgICAgJi5pdGVtLWhhcy1mb2N1cyB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM5Nzk3OTchaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjODA3ZTdlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4uc2MtaW9uLWlucHV0LWlvcy1oe1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tcGFnZSB7XHJcbiAgICAuaW4tdG9vbGJhciB7XHJcbiAgICAgIC50b29sYmFyLWJhY2tncm91bmQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuLmJ1dHRvbi1oe1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5pb24tdGV4dC1jZW50ZXJ7XHJcbiAgICBmbGV4OiAwIDAgY2FsYyhjYWxjKDggLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCA5KSkgKiAxMDAlKSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IGNhbGMoY2FsYyg4IC8gdmFyKC0taW9uLWdyaWQtY29sdW1ucywgOSkpICogMTAwJSkgIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogY2FsYyhjYWxjKDggLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCA5KSkgKiAxMDAlKSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbn1cclxuXHJcbi5saW5lLWlucHV0e1xyXG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMDFGICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmlvbi10ZXh0LWxlZnR7XHJcbiAgICBjb2xvcjogICM5Nzk3OTcgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5idXR0b24taHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNzE5MjM7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4uYnV0dG9ue1xyXG4gICAgLS1vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAtLWZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG4gICAgLS1mb250LWZhbWlseTogUHJveGltYS1ib2xkO1xyXG59XHJcblxyXG5pb24taGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZy1iYWNrZ3JvdW5kLmpwZycpICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDUlIDBweCA1JTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICAgIG1hcmdpbi1ib3R0b206IC01MHB4O1xyXG59XHJcblxyXG5oMXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFByb3hpbWEtYmxhY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/signup/signup.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _termsguest_termsguest_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../termsguest/termsguest.page */ "./src/app/pages/termsguest/termsguest.page.ts");









let SignupPage = class SignupPage {
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
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
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
    tryRegister(value) {
        this.authService.doRegister(value)
            .then(res => {
            firebase_app__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.updateProfile({
                displayName: value.name,
            });
            this.modalCtrl.dismiss();
            this.router.navigate(['/tabs/tab1']);
        }, err => {
            if (err.code === 'auth/email-already-in-use') {
                this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"].ST36);
            }
            else {
                this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"].ST32);
            }
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
    goClosePage() {
        this.modalCtrl.dismiss();
    }
    goTermsPage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _termsguest_termsguest_page__WEBPACK_IMPORTED_MODULE_8__["TermsguestPage"],
            });
            modal.present();
        });
    }
};
SignupPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/signup/signup.page.html"),
        styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/pages/signup/signup.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
], SignupPage);



/***/ }),

/***/ "./src/app/pages/termsguest/termsguest.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/termsguest/termsguest.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlcm1zZ3Vlc3QvdGVybXNndWVzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/termsguest/termsguest.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/termsguest/termsguest.page.ts ***!
  \*****************************************************/
/*! exports provided: TermsguestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsguestPage", function() { return TermsguestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");





let TermsguestPage = class TermsguestPage {
    constructor(modalCtrl, dataService) {
        this.modalCtrl = modalCtrl;
        this.dataService = dataService;
        this.isLoading = true;
        // tslint:disable-next-line: variable-name
        this._strings = _config_strings__WEBPACK_IMPORTED_MODULE_3__["strings"];
    }
    get strings() {
        return this._strings;
    }
    ngOnInit() {
        this.isLoading = true;
        this.dataService.getDataStrings()
            .subscribe(resp => {
            const data = resp[0];
            this.privacypolicy = data.st_privacypolicy;
            this.termsofservice = data.st_termsofservice;
            this.isLoading = false;
        });
    }
    goClosePage() {
        this.modalCtrl.dismiss();
    }
};
TermsguestPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
];
TermsguestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-termsguest',
        template: __webpack_require__(/*! raw-loader!./termsguest.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/termsguest/termsguest.page.html"),
        styles: [__webpack_require__(/*! ./termsguest.page.scss */ "./src/app/pages/termsguest/termsguest.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
], TermsguestPage);



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");




const Url = _config_config__WEBPACK_IMPORTED_MODULE_3__["config"].Url;
let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.page = 0;
    }
    ejectQuery(query) {
        query = Url + query;
        return this.http.get(query);
    }
    getDataStrings() {
        return this.ejectQuery('/json/data_strings.php');
    }
    getDataMotivation() {
        return this.ejectQuery('/json/data_quotes.php');
    }
    getDataFeaturedDiets() {
        return this.ejectQuery('/json/data_diets.php?featured=1');
    }
    getDataCategories() {
        return this.ejectQuery('/json/data_categories.php');
    }
    getDataGoals() {
        return this.ejectQuery('/json/data_goals.php');
    }
    getDataLevels() {
        return this.ejectQuery('/json/data_levels.php');
    }
    getDataTags() {
        return this.ejectQuery('/json/data_tags.php');
    }
    getDataEquipments() {
        return this.ejectQuery('/json/data_equipments.php');
    }
    getDataBodyparts() {
        return this.ejectQuery('/json/data_bodyparts.php');
    }
    getDataFeaturedPosts() {
        return this.ejectQuery('/json/data_posts.php?featured=1');
    }
    getDataRecentPosts(limit) {
        return this.ejectQuery(`/json/data_posts.php?limit=${limit}`);
    }
    getDataWorkoutsByGoal(id) {
        return this.ejectQuery(`/json/data_workouts.php?goal=${id}`);
    }
    getDataWorkoutsByLevel(id) {
        return this.ejectQuery(`/json/data_workouts.php?level=${id}`);
    }
    getDataExercisesByBodypart(id) {
        return this.ejectQuery(`/json/data_bodypart.php?id=${id}`);
    }
    getDataExercisesByEquipment(id) {
        return this.ejectQuery(`/json/data_equipment.php?id=${id}`);
    }
    getDataDietsByCategory(id) {
        return this.ejectQuery(`/json/data_diets.php?category=${id}`);
    }
    getDataPostsByTag(id) {
        return this.ejectQuery(`/json/data_posts.php?tag=${id}`);
    }
    getDataExerciseById(id) {
        return this.ejectQuery(`/json/data_exercises.php?id=${id}&limit=1`);
    }
    getDataWorkoutById(id) {
        return this.ejectQuery(`/json/data_workouts.php?id=${id}&limit=1`);
    }
    getDataDietById(id) {
        return this.ejectQuery(`/json/data_diets.php?id=${id}&limit=1`);
    }
    getDataPostById(id) {
        return this.ejectQuery(`/json/data_posts.php?id=${id}&limit=1`);
    }
    getDataWorkoutExercisesByDay(id, day) {
        return this.ejectQuery(`/json/data_days.php?id=${id}&day=${day}`);
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], DataService);



/***/ })

}]);
//# sourceMappingURL=default~pages-login-login-module~pages-signup-signup-module~pages-start-start-module-es2015.js.map