(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pro-pro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/pro/pro.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/pro/pro.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\r\n  <ion-toolbar mode=\"ios\" class=\"ion-color\" [style.background-color]=\"customColor\">\r\n    <ion-buttons slot=\"end\">\r\n      <button ion-button icon-only [routerLink]=\"['/tabs/tab5']\">\r\n        <img src=\"./assets/images/cancel_.png\" class=\"cancel-img\"/>\r\n      </button>\r\n  </ion-buttons>\r\n    \r\n  </ion-toolbar>\r\n</ion-header>\r\n<!--\r\n    <ion-buttons slot=\"start\">\r\n      <app-backbutton color=\"light\"></app-backbutton>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon mode=\"md\" name=\"md-exit\" slot=\"end\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n-->\r\n\r\n<ion-content class=\"ion-no-padding\">\r\n  <ion-grid class=\"ion-no-padding\">\r\n    <ion-row class=\"header-bg\" >\r\n      <div class=\"text\">\r\n        <img src=\"./assets/images/gymate_pro.png\" class=\"author-img\"/>\r\n      </div>\r\n    </ion-row> \r\n    <ion-row  >\r\n      <h1>Become a <br> PRO-member</h1>\r\n      <p class=\"price\">{{ subscriptiontext}}</p>\r\n      <p class=\"money\">30-day money back guarantee</p>\r\n      <div class=\"advantages\">\r\n        <div class=\"advantages-info\">\r\n        <h2> <span><img src=\"./assets/images/check.png\" class=\"cancel-img\">AD-Free Experience</span> </h2>\r\n        <h2> <span><img src=\"./assets/images/check.png\" class=\"cancel-img\">Exercises made only for you</span> </h2>\r\n        <h2> <span><img src=\"./assets/images/check.png\" class=\"cancel-img\">600+ recipes</span> </h2>\r\n        <h2> <span><img src=\"./assets/images/check.png\" class=\"cancel-img\">Coached Workouts by Professionals</span> </h2>\r\n        <h2> <span><img src=\"./assets/images/check.png\" class=\"cancel-img\">Unlimited Blogs </span> </h2>\r\n      </div>\r\n    </div>\r\n      <div class=\"submit\">\r\n        <button class=\"btn btn-primary btn-block\">Subscribe now</button>\r\n      </div>\r\n      <button (click)=\"changeText(buttonname)\" ion-button class=\"price\">{{buttonname}}</button> \r\n\r\n\r\n\r\n    </ion-row>\r\n    <ion-row>\r\n      <h3>Frequently asked questions</h3>\r\n      <div class=\"freq1>\">\r\n      <p class=\"question\">Why choose PRO Membership ?</p>\r\n      <p class=\"answer\">Pro membership includes all workout features based on user’s preference, unlimited meal recipes and a blog to get the most out of the application.</p>\r\n    </div>\r\n    <div class=\"freq1>\">\r\n      <p class=\"question\">Why choose PRO Membership ?</p>\r\n      <p class=\"answer\">Pro membership includes all workout features based on user’s preference, unlimited meal recipes and a blog to get the most out of the application.</p>\r\n    </div>\r\n    <div class=\"freq1>\">\r\n      <p class=\"question\">Why choose PRO Membership ?</p>\r\n      <p class=\"answer\">Pro membership includes all workout features based on user’s preference, unlimited meal recipes and a blog to get the most out of the application.</p>\r\n    </div>\r\n    </ion-row>\r\n  </ion-grid>\r\n  \r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/pro/pro-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/pro/pro-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ProPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProPageRoutingModule", function() { return ProPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pro.page */ "./src/app/pages/pro/pro.page.ts");




const routes = [
    {
        path: '',
        component: _pro_page__WEBPACK_IMPORTED_MODULE_3__["ProPage"]
    }
];
let ProPageRoutingModule = class ProPageRoutingModule {
};
ProPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/pro/pro.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/pro/pro.module.ts ***!
  \*****************************************/
/*! exports provided: ProPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProPageModule", function() { return ProPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pro-routing.module */ "./src/app/pages/pro/pro-routing.module.ts");
/* harmony import */ var _pro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pro.page */ "./src/app/pages/pro/pro.page.ts");







let ProPageModule = class ProPageModule {
};
ProPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pro_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProPageRoutingModule"]
        ],
        declarations: [_pro_page__WEBPACK_IMPORTED_MODULE_6__["ProPage"]]
    })
], ProPageModule);



/***/ }),

/***/ "./src/app/pages/pro/pro.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/pro/pro.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-bg {\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding-top: 10px; }\n\n.header-bg .text {\n  color: #fff;\n  text-align: center; }\n\n.header-bg .name {\n  color: var(--ion-color-primary);\n  text-align: center;\n  margin-bottom: 9px;\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 16px; }\n\n.header-bg .since {\n  color: #fff;\n  margin-top: 5px;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px; }\n\n.tags {\n  background-color: #f9f9f9;\n  border-left: 3px solid var(--ion-color-primary);\n  padding: 15px;\n  position: relative;\n  margin-bottom: 10px; }\n\n.tags h1 {\n  font-size: 13px;\n  text-transform: uppercase;\n  font-weight: bold;\n  margin: 0; }\n\n.tags ion-icon {\n  position: absolute;\n  right: 14px;\n  top: 11px;\n  font-size: 22px; }\n\n.view-more {\n  width: 100%;\n  color: #f7474f;\n  font-family: Proxima-bold;\n  font-size: 16px !important;\n  line-height: 16px;\n  text-transform: none !important;\n  text-align: right !important; }\n\nion-header {\n  background-color: #000000;\n  height: 100%;\n  padding: 10px 0 0px 0 !important;\n  height: auto; }\n\n.ion-text-capitalize {\n  width: 100%;\n  color: #eafff7;\n  font-family: Proxima-bold;\n  font-size: 32px !important;\n  line-height: 32px;\n  text-transform: none !important;\n  text-align: left;\n  padding: 0; }\n\nion-button {\n  margin-right: -5px !important; }\n\n.text {\n  width: 90%;\n  margin: 0 auto;\n  border-radius: 5px;\n  padding: 20px 20px 20px 0; }\n\n.author-img {\n  max-width: 70%; }\n\n.pro {\n  height: 100%;\n  display: block;\n  margin-right: auto; }\n\n.sc-ion-buttons-ios-s ion-button {\n  --padding-start: 0px !important;\n  --padding-end: 0px !important;\n  padding: 0px !important;\n  margin: 0px;\n  --margin: 0px;\n  width: 100%; }\n\n.author-info {\n  font-family: 'Proxima-bold';\n  font-family: 14px;\n  line-height: 16px;\n  margin: 5px 0;\n  color: #f7474f; }\n\nion-grid {\n  padding: 0 5% 50px 5%;\n  background-image: url('splash.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-color: #000000; }\n\n.edit .sc-ion-buttons-ios-h {\n  width: 90%;\n  margin: 0 auto; }\n\nh1 {\n  display: block;\n  width: 100%;\n  font-size: 30px;\n  line-height: 35px;\n  font-family: 'Proxima-black';\n  color: #fafafa;\n  text-align: center;\n  margin-bottom: 0;\n  margin-top: 4em; }\n\n.price {\n  font-size: 16px;\n  line-height: 18px;\n  text-align: center;\n  color: #fafafa;\n  font-family: 'Proxima-regular';\n  width: 100%;\n  margin: 15px 0; }\n\n.money {\n  font-size: 14px;\n  line-height: 14px;\n  text-align: center;\n  color: #fafafa;\n  font-family: 'Proxima-bold';\n  width: 85%;\n  display: block;\n  margin: 0 auto;\n  background-color: #f7474f;\n  padding: 8px 20px;\n  border-radius: 5px;\n  text-transform: uppercase; }\n\n.cancel-img, ion-grid img {\n  width: 25px; }\n\n.advantages {\n  width: 100%;\n  padding: 30px 5% 50px 5%; }\n\n.advantages h2 {\n  font-size: 18px;\n  line-height: 20px;\n  font-family: 'Proxima-bold';\n  color: #fafafa;\n  margin-bottom: 20px;\n  margin-top: 0px; }\n\nbutton {\n  background-color: transparent; }\n\n.advantages span {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.advantages img {\n  margin-right: 15px; }\n\n.advantages-info {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: start;\n          align-items: start;\n  width: 80%;\n  margin: 0 auto; }\n\n.submit button {\n  font-family: 'Muli-Regular';\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 22px;\n  width: 100%;\n  padding: 20px;\n  border-radius: 40px;\n  background-color: #f7474f;\n  color: #fafafa; }\n\n.submit {\n  width: 100%; }\n\n.change {\n  font-family: 'Proxima-regular';\n  text-align: center;\n  font-size: 16px;\n  line-height: 16px;\n  text-decoration: underline;\n  color: #f7474f;\n  width: 100%;\n  margin: 25px 0; }\n\nh3, .question {\n  font-size: 18px;\n  font-family: 'Proxima-regular';\n  color: #979797;\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  font-weight: 600;\n  text-align: center;\n  width: 100%;\n  margin-bottom: 30px; }\n\n.question {\n  text-align: left;\n  font-size: 16px;\n  font-family: 'Proxima-bold';\n  margin-bottom: 0px; }\n\n.answer {\n  text-align: left;\n  font-size: 16px;\n  font-family: 'Proxima-regular';\n  color: #979797;\n  margin: 8px 0; }\n\nion-grid .author-img {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvL0M6XFxVc2Vyc1xcSGFyaXNoXFxMb2NhbF9kZXZcXEd5bW1hdGVBcHAvc3JjXFxhcHBcXHBhZ2VzXFxwcm9cXHByby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZUFBZSxFQUFBOztBQUduQjtFQUNJLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixlQUFlLEVBQUE7O0FBR25CO0VBQ0kseUJBQXlCO0VBQ3pCLCtDQUErQztFQUMvQyxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFNBQVEsRUFBQTs7QUFHWjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxXQUFXO0VBQ1gsY0FBYztFQUNkLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLCtCQUErQjtFQUMvQiw0QkFBNEIsRUFBQTs7QUFHaEM7RUFDSSx5QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxZQUFhLEVBQUE7O0FBR2pCO0VBQ0ksV0FBVztFQUNYLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQiwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLFVBQVUsRUFBQTs7QUFJZDtFQUNJLDZCQUE2QixFQUFBOztBQUdqQztFQUNJLFVBQVU7RUFDVixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLCtCQUFnQjtFQUNoQiw2QkFBYztFQUNkLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsYUFBUztFQUNULFdBQVcsRUFBQTs7QUFJZjtFQUNJLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixjQUFjLEVBQUE7O0FBSWxCO0VBQ0kscUJBQW9CO0VBQ3JCLG1DQUEwRDtFQUMxRCw0QkFBNEI7RUFDM0Isd0JBQXdCO0VBQ3hCLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLFVBQVU7RUFDVixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksY0FBYztFQUNkLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBR25CO0VBQ0EsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsY0FBYyxFQUFBOztBQUdkO0VBQ0ksZUFBZTtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCwyQkFBMkI7RUFDM0IsVUFBVTtFQUNWLGNBQWM7RUFDZCxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUE7O0FBSXpCO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksV0FBVztFQUNYLHdCQUF3QixFQUFBOztBQUc1QjtFQUNJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZUFBZSxFQUFBOztBQUduQjtFQUNJLDZCQUE2QixFQUFBOztBQUdqQztFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHdCQUFrQjtVQUFsQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsY0FBYyxFQUFBOztBQUdsQjtFQUNBLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG1CQUFtQixFQUFBOztBQUduQjtFQUNBLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLGtCQUFrQixFQUFBOztBQUlsQjtFQUNJLGdCQUFnQjtFQUNwQixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLGNBQWM7RUFDZCxhQUFhLEVBQUE7O0FBR2I7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm8vcHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItYmd7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLmhlYWRlci1iZyAudGV4dHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyLWJnIC5uYW1le1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmhlYWRlci1iZyAuc2luY2V7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi50YWdze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi50YWdzIGgxe1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOjA7XHJcbn1cclxuXHJcbi50YWdzIGlvbi1pY29ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE0cHg7XHJcbiAgICB0b3A6IDExcHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi52aWV3LW1vcmV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjZjc0NzRmO1xyXG4gICAgZm9udC1mYW1pbHk6IFByb3hpbWEtYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWhlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAwMDAwMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMCAwcHggMCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBhdXRvIDtcclxufVxyXG5cclxuLmlvbi10ZXh0LWNhcGl0YWxpemV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjZWFmZmY3O1xyXG4gICAgZm9udC1mYW1pbHk6IFByb3hpbWEtYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMzJweCAhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcblxyXG5cclxuaW9uLWJ1dHRvbntcclxuICAgIG1hcmdpbi1yaWdodDogLTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDA7XHJcbn1cclxuXHJcbi5hdXRob3ItaW1ne1xyXG4gICAgbWF4LXdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi5wcm97XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLWlvcy1zIGlvbi1idXR0b24ge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIC0tbWFyZ2luOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5hdXRob3ItaW5mb3tcclxuICAgIGZvbnQtZmFtaWx5OiAnUHJveGltYS1ib2xkJztcclxuICAgIGZvbnQtZmFtaWx5OiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgY29sb3I6ICNmNzQ3NGY7XHJcbn1cclxuXHJcblxyXG5pb24tZ3JpZHtcclxuICAgIHBhZGRpbmc6MCA1JSA1MHB4IDUlO1xyXG4gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc3BsYXNoLnBuZycpO1xyXG4gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLmVkaXQgLnNjLWlvbi1idXR0b25zLWlvcy1oe1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG5oMXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUHJveGltYS1ibGFjayc7XHJcbiAgICBjb2xvcjogI2ZhZmFmYTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBtYXJnaW4tdG9wOiA0ZW07XHJcbn1cclxuXHJcbi5wcmljZXtcclxuZm9udC1zaXplOiAxNnB4O1xyXG5saW5lLWhlaWdodDogMThweDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5jb2xvcjogI2ZhZmFmYTtcclxuZm9udC1mYW1pbHk6ICdQcm94aW1hLXJlZ3VsYXInO1xyXG53aWR0aDogMTAwJTtcclxubWFyZ2luOiAxNXB4IDA7XHJcbn1cclxuXHJcbi5tb25leXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxubGluZS1oZWlnaHQ6IDE0cHg7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuY29sb3I6ICNmYWZhZmE7XHJcbmZvbnQtZmFtaWx5OiAnUHJveGltYS1ib2xkJztcclxud2lkdGg6IDg1JTtcclxuZGlzcGxheTogYmxvY2s7XHJcbm1hcmdpbjogMCBhdXRvO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZjc0NzRmO1xyXG5wYWRkaW5nOiA4cHggMjBweDtcclxuYm9yZGVyLXJhZGl1czogNXB4O1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5cclxuLmNhbmNlbC1pbWcsIGlvbi1ncmlkIGltZ3tcclxuICAgIHdpZHRoOiAyNXB4O1xyXG59XHJcblxyXG4uYWR2YW50YWdlc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMzBweCA1JSA1MHB4IDUlO1xyXG59XHJcblxyXG4uYWR2YW50YWdlcyBoMntcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdQcm94aW1hLWJvbGQnO1xyXG4gICAgY29sb3I6ICNmYWZhZmE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmFkdmFudGFnZXMgc3BhbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYWR2YW50YWdlcyBpbWd7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5hZHZhbnRhZ2VzLWluZm97XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uc3VibWl0IGJ1dHRvbntcclxuICAgIGZvbnQtZmFtaWx5OiAnTXVsaS1SZWd1bGFyJztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3NDc0ZjtcclxuICAgIGNvbG9yOiAjZmFmYWZhO1xyXG59XHJcblxyXG4uc3VibWl0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jaGFuZ2V7XHJcbiAgICBmb250LWZhbWlseTogJ1Byb3hpbWEtcmVndWxhcic7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6ICNmNzQ3NGY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMjVweCAwO1xyXG59XHJcblxyXG5oMywgLnF1ZXN0aW9ue1xyXG5mb250LXNpemU6IDE4cHg7XHJcbmZvbnQtZmFtaWx5OiAnUHJveGltYS1yZWd1bGFyJztcclxuY29sb3I6ICM5Nzk3OTc7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxubWFyZ2luLXRvcDogMTBweDtcclxubWFyZ2luLWJvdHRvbTogMTBweDtcclxuZm9udC13ZWlnaHQ6IDYwMDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG53aWR0aDogMTAwJTtcclxubWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLnF1ZXN0aW9ue1xyXG50ZXh0LWFsaWduOiBsZWZ0O1xyXG5mb250LXNpemU6IDE2cHg7XHJcbmZvbnQtZmFtaWx5OiAnUHJveGltYS1ib2xkJztcclxubWFyZ2luLWJvdHRvbTogMHB4O1xyXG5cclxufVxyXG5cclxuLmFuc3dlcntcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbmZvbnQtc2l6ZTogMTZweDtcclxuZm9udC1mYW1pbHk6ICdQcm94aW1hLXJlZ3VsYXInO1xyXG5jb2xvcjogIzk3OTc5NztcclxubWFyZ2luOiA4cHggMDtcclxufVxyXG5cclxuaW9uLWdyaWQgLmF1dGhvci1pbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/pro/pro.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pro/pro.page.ts ***!
  \***************************************/
/*! exports provided: ProPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProPage", function() { return ProPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProPage = class ProPage {
    constructor() {
        this.subscriptiontext = "Only $4.99 per month";
        this.buttonname = "Change to Yearly";
        this.text = 'Change to yearly';
    }
    ngOnInit() {
    }
    changeText(text) {
        //alert(text)
        if (text == "Change to Yearly") {
            this.subscriptiontext = "Only $54.99 per year";
            this.buttonname = "Change to Monthly";
        }
        if (text == "Change to Monthly") {
            this.subscriptiontext = "Only $4.99 per month";
            this.buttonname = "Change to Yearly";
        }
    }
};
ProPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pro',
        template: __webpack_require__(/*! raw-loader!./pro.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/pro/pro.page.html"),
        styles: [__webpack_require__(/*! ./pro.page.scss */ "./src/app/pages/pro/pro.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProPage);



/***/ })

}]);
//# sourceMappingURL=pages-pro-pro-module-es2015.js.map