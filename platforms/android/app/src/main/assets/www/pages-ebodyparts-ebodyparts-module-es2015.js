(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ebodyparts-ebodyparts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ebodyparts/ebodyparts.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ebodyparts/ebodyparts.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\r\n  <ion-toolbar mode=\"ios\" class=\"ion-color\" [style.background-color]=\"customColor\">\r\n    <ion-title class=\"ion-text-capitalize\">\r\n      {{title}}\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <app-backbutton class=\"arrow\"></app-backbutton>\r\n    </ion-buttons>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button  slot=\"start\" [routerLink]=\"['/tabs/tab1']\">\r\n        <img src=\"./assets/images/close.png\" class=\"close-img\"/> \r\n        </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content fixed class=\"ion-color\" [style.background-color]=\"customColor\">\r\n\r\n  <app-loading *ngIf=\"isLoading\"></app-loading>\r\n\r\n  <app-empty *ngIf=\"exercises.length === 0\" [title]=\"strings.ST140\"></app-empty>\r\n\r\n  <ion-list lines=\"none\" class=\"ion-padding-top\">\r\n    <ng-container *ngFor=\"let item of exercises; index as i;\">\r\n\r\n\r\n      <ion-item *ngIf=\"subscribe || item.premium=='0';else notShow \" class=\"ion-color\" [style.background-color]=\"customColor\">\r\n  \r\n        <div class=\" body-parts\">\r\n          <div class=\"tags\" (click)=toggleInfo(i,item.exercise_id)>\r\n\r\n            <ion-avatar slot=\"start\">\r\n\r\n              <img src=\"http://hosting.lakeba.com:8092/images/{{item.exercise_image}}\" class=\"exer-img\" />\r\n\r\n            </ion-avatar>\r\n            <div class=\"exer-info\">\r\n              <ion-label>{{item.exercise_title}}</ion-label>\r\n              <p>{{item.bodypart_title}}</p>\r\n\r\n              <ion-icon [name]=\"isInfoHidden ? 'arrow-down' : 'arrow-up'\" slot=\"end\" class=\"arrow-icon\"></ion-icon>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div *ngIf=\"show[i]\" class=\"animated fadeIn subinfo\">\r\n            <div class=\"test\">\r\n    \r\n              <div class=\"further-info\">\r\n\r\n                <p class=\"exer-title\">{{exercise2.exercise_title}}</p>\r\n                <p class=\"subtitle\">{{exercise2.level_title}}</p>\r\n                <p>{{exercise2.exercise_reps}} Reps - {{exercise2.exercise_sets}} Sets</p>\r\n\r\n                <p><span [innerHTML]=\"exercise2.exercise_instructions\"></span></p>\r\n\r\n                <ion-footer mode=\"ios\" no-border>\r\n                  <ion-button (click)=\"play()\" class=\"primary ion-text-uppercase ion-text-bold\" mode=\"ios\"\r\n                    expand=\"block\">\r\n                    {{strings.ST102}}\r\n                    <ion-icon slot=\"start\" name=\"md-arrow-dropright-circle\"></ion-icon>\r\n                  </ion-button>\r\n                </ion-footer>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </ion-item>\r\n      \r\n      <ng-template #notShow >\r\n        <ion-item class=\"disabled\" [routerLink]=\"['/tabs/tab5']\">\r\n\r\n          <ion-avatar slot=\"start\">\r\n            <img class=\"body-img\" [src]=\"item.exercise_image | image\">\r\n          </ion-avatar>\r\n          <div class=\"body-info\">\r\n          <ion-label>{{item.exercise_title}}</ion-label>\r\n          <p>10 Reps - 4 Sets</p>\r\n          </div>\r\n        </ion-item>\r\n      </ng-template>\r\n      \r\n    </ng-container>\r\n  </ion-list>\r\n\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/ebodyparts/ebodyparts-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/ebodyparts/ebodyparts-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: EbodypartsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EbodypartsPageRoutingModule", function() { return EbodypartsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ebodyparts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ebodyparts.page */ "./src/app/pages/ebodyparts/ebodyparts.page.ts");




const routes = [
    {
        path: '',
        component: _ebodyparts_page__WEBPACK_IMPORTED_MODULE_3__["EbodypartsPage"]
    }
];
let EbodypartsPageRoutingModule = class EbodypartsPageRoutingModule {
};
EbodypartsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EbodypartsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/ebodyparts/ebodyparts.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/ebodyparts/ebodyparts.module.ts ***!
  \*******************************************************/
/*! exports provided: EbodypartsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EbodypartsPageModule", function() { return EbodypartsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ebodyparts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ebodyparts-routing.module */ "./src/app/pages/ebodyparts/ebodyparts-routing.module.ts");
/* harmony import */ var _ebodyparts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ebodyparts.page */ "./src/app/pages/ebodyparts/ebodyparts.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









let EbodypartsPageModule = class EbodypartsPageModule {
};
EbodypartsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _ebodyparts_routing_module__WEBPACK_IMPORTED_MODULE_5__["EbodypartsPageRoutingModule"]
        ],
        declarations: [_ebodyparts_page__WEBPACK_IMPORTED_MODULE_6__["EbodypartsPage"]]
    })
], EbodypartsPageModule);



/***/ }),

/***/ "./src/app/pages/ebodyparts/ebodyparts.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/ebodyparts/ebodyparts.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 90px !important;\n  max-height: 98px !important;\n  border-radius: 0;\n  margin: 0 15px 0px 0 !important; }\n\nion-avatar img {\n  border-radius: 0; }\n\nion-item ion-label, .exer-info ion-label {\n  padding-left: 0px;\n  white-space: normal !important;\n  color: #ffffff !important;\n  font-size: 18px;\n  line-height: 20px;\n  font-family: 'Proxima-bold'; }\n\nion-item {\n  border-bottom: 1px solid #eee !important; }\n\nion-item {\n  --background-focused: #191919 !important;\n  --background-activated: #191919 !important;\n  --detail-icon-color: transparent;\n  --detail-icon-opacity: 1;\n  background: none !important;\n  border: none !important; }\n\n.item-native {\n  background-color: #191919 !important;\n  display: none !important; }\n\n.disabled {\n  opacity: 1;\n  position: relative;\n  z-index: 1000;\n  -webkit-filter: blur(1px);\n          filter: blur(1px); }\n\n.item-native {\n  background-color: #454545; }\n\n.in-toolbar {\n  padding: 30px 0 00px 0 !important;\n  background: #191919; }\n\n.ion-page .in-toolbar .toolbar-background {\n  background: transparent !important; }\n\nion-content {\n  background: #191919; }\n\nion-list {\n  background-color: #191919;\n  padding-top: 20px; }\n\nion-item {\n  --background: none !important;\n  margin-bottom: 20px !important;\n  --padding-start: 0px !important;\n  --inner-padding-end: 0px !important;\n  max-width: 90%;\n  margin: 0 auto;\n  border: 1px solid #313235 !important;\n  border-radius: 5px; }\n\n.body-img {\n  width: 90px;\n  height: 98px; }\n\n.ion-text-capitalize {\n  width: 100%;\n  color: #f7474f;\n  font-family: Proxima-bold;\n  font-size: 20px !important;\n  text-transform: none !important; }\n\np {\n  color: #ffffff;\n  margin: 5px 0;\n  font-size: 16px;\n  line-height: normal;\n  letter-spacing: normal;\n  font-family: 'Muli-light'; }\n\n.body-info {\n  position: absolute;\n  top: 20px; }\n\nion-item {\n  --background-focused: #fff !important;\n  --background-activated: #fff !important;\n  --detail-icon-color: var(--ion-color-primary);\n  --detail-icon-opacity: 1;\n  --detail-icon-transform: rotate(90deg) !important; }\n\n.body-info p, .exer-info p {\n  font-size: 16px;\n  color: #979797;\n  line-height: 16px;\n  font-family: 'Nunito-light'; }\n\n.arrow {\n  color: #f7474f !important; }\n\n.tags {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  max-width: 100%;\n  border: 1px solid #313235;\n  border-radius: 5px; }\n\n.exer-img {\n  width: 98px;\n  height: 90px;\n  display: block; }\n\n.exer-info {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 50%; }\n\n.arrow-icon {\n  position: absolute;\n  right: 4%;\n  width: 20px;\n  height: 20px;\n  color: #8d8a8a !important; }\n\n.subinfo {\n  max-width: 100%;\n  margin: 0 auto; }\n\n.further-info {\n  margin: 0 auto;\n  border: 1px solid #313235;\n  border-top: none;\n  padding: 5%; }\n\n.exer-title {\n  color: #fafafa;\n  line-height: 26px;\n  font-size: 22px;\n  font-family: 'Proxima-bold'; }\n\n.subinfo .subtitle {\n  color: #fafafa;\n  line-height: 20px;\n  font-size: 16px;\n  font-family: 'Muli-Regular'; }\n\n.sub-img {\n  display: block;\n  margin-top: -3px;\n  border-right: 1px solid #313235;\n  border-left: 1px solid #313235; }\n\n.body-parts {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: normal !important;\n          flex-direction: column !important;\n  --display: flex !important;\n  --flex-direction: column !important;\n  width: 100%; }\n\n.close-img {\n  max-width: 16px;\n  max-height: 16px; }\n\n.further-info p {\n  color: #fafafa;\n  line-height: 20px;\n  font-size: 16px;\n  font-family: 'Proxima-regular';\n  --padding-inline-start: 0px !important;\n  -webkit-padding-start: 0px !important;\n          padding-inline-start: 0px !important; }\n\n.further-info span {\n  margin-left: -23px !important;\n  display: block; }\n\n.further-info .exer-title {\n  color: #fafafa;\n  line-height: 24px;\n  font-size: 20px;\n  font-family: 'Proxima-bold'; }\n\n.further-info .subtitle {\n  color: #fafafa;\n  line-height: 20px;\n  font-size: 16px;\n  font-family: 'Proxima-bold'; }\n\n@media only screen and (max-width: 280px) {\n  ion-item ion-label, .exer-info ion-label {\n    font-size: 16px;\n    line-height: 18px; }\n  ion-avatar {\n    margin: 0 10px 0 0 !important;\n    max-width: 75px !important; }\n  .arrow-icon {\n    right: 2%; } }\n\n@media only screen and (max-width: 250px) {\n  ion-avatar {\n    max-width: 70px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWJvZHlwYXJ0cy9DOlxcVXNlcnNcXEhhcmlzaFxcTG9jYWxfZGV2XFxHeW1tYXRlQXBwL3NyY1xcYXBwXFxwYWdlc1xcZWJvZHlwYXJ0c1xcZWJvZHlwYXJ0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLCtCQUErQixFQUFBOztBQUduQztFQUNJLGdCQUFnQixFQUFBOztBQUlwQjtFQUNJLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksd0NBQXdDLEVBQUE7O0FBRzVDO0VBQ0ksd0NBQXFCO0VBQ3JCLDBDQUF1QjtFQUN2QixnQ0FBb0I7RUFDcEIsd0JBQXNCO0VBRXRCLDJCQUEyQjtFQUMzQix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxvQ0FBb0M7RUFDcEMsd0JBQXdCLEVBQUE7O0FBRTVCO0VBRUksVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IseUJBQWlCO1VBQWpCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLHlCQUF3QixFQUFBOztBQUc1QjtFQUNJLGlDQUFpQztFQUNqQyxtQkFBbUIsRUFBQTs7QUFHdkI7RUFHUSxrQ0FBa0MsRUFBQTs7QUFLeEM7RUFDRSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSx5QkFBeUI7RUFDekIsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksNkJBQWE7RUFDYiw4QkFBOEI7RUFDOUIsK0JBQWdCO0VBQ2hCLG1DQUFvQjtFQUNwQixjQUFjO0VBQ2QsY0FBYztFQUNkLG9DQUFvQztFQUNwQyxrQkFBa0IsRUFBQTs7QUFJckI7RUFDRyxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdmO0VBQ0csV0FBVztFQUNYLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLCtCQUErQixFQUFBOztBQUdsQztFQUNJLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVMsRUFBQTs7QUFHYjtFQUNHLHFDQUFxQjtFQUNyQix1Q0FBdUI7RUFDdkIsNkNBQW9CO0VBQ3BCLHdCQUFzQjtFQUN0QixpREFBd0IsRUFBQTs7QUFHM0I7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiwyQkFBMkIsRUFBQTs7QUFJL0I7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDZCw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBOztBQUdsQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYyxFQUFBOztBQUdsQjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF3QixFQUFBOztBQUc1QjtFQUNJLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBR2xCO0VBRUksY0FBYztFQUNkLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQUlmO0VBQ0ksY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksY0FBYztFQUNkLGdCQUFnQjtFQUNoQiwrQkFBK0I7RUFDL0IsOEJBQThCLEVBQUE7O0FBR2xDO0VBQ0ksK0JBQXdCO0VBQXhCLHdCQUF3QjtFQUN4Qix1Q0FBaUM7RUFBakMsd0NBQWlDO1VBQWpDLGlDQUFpQztFQUNsQywwQkFBVTtFQUNULG1DQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLHNDQUF1QjtFQUN2QixxQ0FBb0M7VUFBcEMsb0NBQW9DLEVBQUE7O0FBR3hDO0VBQ0ksNkJBQTZCO0VBQzdCLGNBQWMsRUFBQTs7QUFJbEI7RUFDSSxjQUFjO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMkJBQTJCLEVBQUE7O0FBRzNCO0VBQ0ksY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMkJBQTJCLEVBQUE7O0FBSS9CO0VBQ0k7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCLEVBQUE7RUFHckI7SUFDSSw2QkFBNkI7SUFDN0IsMEJBQTBCLEVBQUE7RUFHOUI7SUFDSSxTQUFTLEVBQUEsRUFDWjs7QUFHTDtFQUNJO0lBQ0ksMEJBQTBCLEVBQUEsRUFDN0IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lYm9keXBhcnRzL2Vib2R5cGFydHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDkwcHggIWltcG9ydGFudDtcclxuICAgIG1heC1oZWlnaHQ6IDk4cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBtYXJnaW46IDAgMTVweCAwcHggMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tYXZhdGFyIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG5cclxufVxyXG5cclxuaW9uLWl0ZW0gaW9uLWxhYmVsLCAuZXhlci1pbmZvIGlvbi1sYWJlbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUHJveGltYS1ib2xkJztcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICMxOTE5MTkgIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMxOTE5MTkgIWltcG9ydGFudDtcclxuICAgIC0tZGV0YWlsLWljb24tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1kZXRhaWwtaWNvbi1vcGFjaXR5OiAxO1xyXG5cclxuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaXRlbS1uYXRpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5ICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRpc2FibGVkIHtcclxuICAvLyAgcG9pbnRlci1ldmVudHM6IG5vbmU7IC8vVGhpcyBtYWtlcyBpdCBub3QgY2xpY2thYmxlXHJcbiAgICBvcGFjaXR5OiAxOyAvL1RoaXMgZ3JheXMgaXQgb3V0IHRvIGxvb2sgZGlzYWJsZWRcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICBmaWx0ZXI6IGJsdXIoMXB4KTtcclxufVxyXG5cclxuLml0ZW0tbmF0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNDU0NTQ1O1xyXG59XHJcblxyXG4uaW4tdG9vbGJhcntcclxuICAgIHBhZGRpbmc6IDMwcHggMCAwMHB4IDAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICMxOTE5MTk7XHJcbn1cclxuXHJcbi5pb24tcGFnZSB7XHJcbiAgICAuaW4tdG9vbGJhciB7XHJcbiAgICAgIC50b29sYmFyLWJhY2tncm91bmQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZDogIzE5MTkxOTtcclxufVxyXG5cclxuaW9uLWxpc3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxOTE5MTkgO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuaW9uLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHggIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzEzMjM1ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG59XHJcblxyXG4gLmJvZHktaW1ne1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IDk4cHg7XHJcbiB9IFxyXG5cclxuIC5pb24tdGV4dC1jYXBpdGFsaXple1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogI2Y3NDc0ZjtcclxuICAgIGZvbnQtZmFtaWx5OiBQcm94aW1hLWJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9ICAgXHJcblxyXG4gcHtcclxuICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgZm9udC1mYW1pbHk6ICdNdWxpLWxpZ2h0JztcclxuIH1cclxuXHJcbiAuYm9keS1pbmZve1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB0b3A6IDIwcHg7XHJcbiB9XHJcblxyXG4gaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIC0tZGV0YWlsLWljb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIC0tZGV0YWlsLWljb24tb3BhY2l0eTogMTtcclxuICAgIC0tZGV0YWlsLWljb24tdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiAuYm9keS1pbmZvIHAsIC5leGVyLWluZm8gcHtcclxuICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgY29sb3I6ICM5Nzk3OTc7XHJcbiAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8tbGlnaHQnO1xyXG5cclxuIH1cclxuXHJcbiAuYXJyb3d7XHJcbiAgICAgY29sb3I6ICNmNzQ3NGYgIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiAudGFnc3tcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgXHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzEzMjM1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5leGVyLWltZ3tcclxuICAgICAgICB3aWR0aDogOThweDtcclxuICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLmV4ZXItaW5mb3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuXHJcbiAgICAuYXJyb3ctaWNvbntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDQlO1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICBjb2xvcjojOGQ4YThhICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1YmluZm97XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5mdXJ0aGVyLWluZm97XHJcbiAgICAgICBcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzEzMjM1O1xyXG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogNSU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5leGVyLXRpdGxle1xyXG4gICAgICAgIGNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ1Byb3hpbWEtYm9sZCc7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1YmluZm8gLnN1YnRpdGxle1xyXG4gICAgICAgIGNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ011bGktUmVndWxhcic7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1Yi1pbWd7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTNweDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzEzMjM1O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzMxMzIzNTtcclxuICAgIH1cclxuXHJcbiAgICAuYm9keS1wYXJ0c3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gICAgICAgLS1kaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1mbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNsb3NlLWltZ3tcclxuICAgICAgICBtYXgtd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAuZnVydGhlci1pbmZvIHB7XHJcbiAgICAgICAgY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUHJveGltYS1yZWd1bGFyJztcclxuICAgICAgICAtLXBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmZ1cnRoZXItaW5mbyAgc3BhbntcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTIzcHggIWltcG9ydGFudDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcblxyXG4gICAgLmZ1cnRoZXItaW5mbyAuZXhlci10aXRsZXtcclxuICAgICAgICBjb2xvcjogI2ZhZmFmYTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdQcm94aW1hLWJvbGQnO1xyXG4gICAgfVxyXG5cclxuICAgIC5mdXJ0aGVyLWluZm8gLnN1YnRpdGxle1xyXG4gICAgICAgIGNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ1Byb3hpbWEtYm9sZCc7XHJcbiAgICB9XHJcblxyXG4gIFxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyODBweCkge1xyXG4gICAgICAgIGlvbi1pdGVtIGlvbi1sYWJlbCwgLmV4ZXItaW5mbyBpb24tbGFiZWx7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tYXZhdGFye1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMTBweCAwIDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA3NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYXJyb3ctaWNvbntcclxuICAgICAgICAgICAgcmlnaHQ6IDIlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI1MHB4KSB7XHJcbiAgICAgICAgaW9uLWF2YXRhcntcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/ebodyparts/ebodyparts.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/ebodyparts/ebodyparts.page.ts ***!
  \*****************************************************/
/*! exports provided: EbodypartsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EbodypartsPage", function() { return EbodypartsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _services_admob_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/admob.service */ "./src/app/services/admob.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_subscription_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/subscription.service */ "./src/app/services/subscription.service.ts");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "./node_modules/@ionic-native/streaming-media/ngx/index.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");











let EbodypartsPage = class EbodypartsPage {
    constructor(dataService, router, route, plt, streamingMedia, admob, screenOrientation, auth, subService) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.plt = plt;
        this.streamingMedia = streamingMedia;
        this.admob = admob;
        this.screenOrientation = screenOrientation;
        this.auth = auth;
        this.subService = subService;
        this.show = {};
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_5__["strings"];
        this.exercises = [];
        this.isLoading = false;
        this.exercise = {};
        this.isInfoHidden = true;
        this.isInstruHidden = true;
        this.isTipsHidden = true;
        this.orientation = 'landscape';
        this.exercise2 = {};
    }
    ngOnInit() {
        this.admob.BannerAd();
        this.subscribe = false;
    }
    // tslint:disable-next-line: use-lifecycle-interface
    ngOnDestroy() {
        this.admob.HideBannerAd();
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let userid = this.auth.getUserId();
            this.subService.getStatus(userid).subscribe((data) => {
                if (data.status != "active") {
                    this.subscribe = false;
                }
                if (data.status == "active") {
                    this.subscribe = true;
                }
            }, err => { console.log(err); });
            this.isLoading = true;
            this.route.params.subscribe(data => {
                this.id = data.id;
                this.title = data.title;
                this.getExercises();
                if (!this.id) {
                    this.goBack();
                }
            });
        });
    }
    goBack() {
        this.router.navigate(['/home']);
    }
    toggleInfo(index, id) {
        this.dataService.getDataExerciseById(id)
            .subscribe(resp => {
            this.exercise2 = resp[0];
            this.isLoading = false;
        });
        this.show[index] = true;
    }
    play() {
        const options = {
            successCallback: () => { console.log('Video played'); },
            errorCallback: (e) => { console.log('Error streaming'); },
            orientation: 'landscape',
            shouldAutoClose: true,
            controls: true
        };
        // tslint:disable-next-line: max-line-length
        this.streamingMedia.playVideo('https://firebasestorage.googleapis.com/v0/b/six-pack-app.appspot.com/o/video.mp4?alt=media&token=453512dd-f079-4355-a325-92a9b2f7e465', options);
    }
    getExercises() {
        this.dataService.getDataExercisesByBodypart(this.id)
            .subscribe(resp => {
            this.exercises = resp;
            this.isLoading = false;
        });
    }
};
EbodypartsPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_9__["StreamingMedia"] },
    { type: _services_admob_service__WEBPACK_IMPORTED_MODULE_6__["AdmobService"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_10__["ScreenOrientation"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _services_subscription_service__WEBPACK_IMPORTED_MODULE_8__["SubscriptionService"] }
];
EbodypartsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ebodyparts',
        template: __webpack_require__(/*! raw-loader!./ebodyparts.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ebodyparts/ebodyparts.page.html"),
        styles: [__webpack_require__(/*! ./ebodyparts.page.scss */ "./src/app/pages/ebodyparts/ebodyparts.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_9__["StreamingMedia"],
        _services_admob_service__WEBPACK_IMPORTED_MODULE_6__["AdmobService"],
        _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_10__["ScreenOrientation"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _services_subscription_service__WEBPACK_IMPORTED_MODULE_8__["SubscriptionService"]])
], EbodypartsPage);



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
//# sourceMappingURL=pages-ebodyparts-ebodyparts-module-es2015.js.map