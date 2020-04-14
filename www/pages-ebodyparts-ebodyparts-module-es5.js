(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ebodyparts-ebodyparts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ebodyparts/ebodyparts.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ebodyparts/ebodyparts.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\r\n  <ion-toolbar mode=\"ios\" class=\"ion-color\" [style.background-color]=\"customColor\">\r\n    <ion-title class=\"ion-text-capitalize\">\r\n      {{title}}\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <app-backbutton class=\"arrow\"></app-backbutton>\r\n    </ion-buttons>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button  slot=\"start\" [routerLink]=\"['/tabs/tab1']\">\r\n        <img src=\"./assets/images/close.png\" class=\"close-img\"/> \r\n        </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content fixed class=\"ion-color\" [style.background-color]=\"customColor\">\r\n\r\n  <app-loading *ngIf=\"isLoading\"></app-loading>\r\n\r\n  <app-empty *ngIf=\"exercises.length === 0\" [title]=\"strings.ST140\"></app-empty>\r\n\r\n  <ion-list lines=\"none\" class=\"ion-padding-top\">\r\n    <ng-container *ngFor=\"let item of exercises; index as i;\">\r\n\r\n\r\n      <ion-item *ngIf=\"subscribe || item.premium=='0';else notShow \" class=\"ion-color\" [style.background-color]=\"customColor\">\r\n  \r\n        <div class=\" body-parts\">\r\n          <div class=\"tags\" (click)=toggleInfo(i,item.exercise_id)>\r\n\r\n            <ion-avatar slot=\"start\">\r\n\r\n              <img src=\"http://hosting.lakeba.com:8092/images/{{item.exercise_image}}\" class=\"exer-img\" />\r\n\r\n            </ion-avatar>\r\n            <div class=\"exer-info\">\r\n              <ion-label>{{item.exercise_title}}</ion-label>\r\n             <p>{{item.bodypart_title}}</p>\r\n\r\n              <ion-icon  *ngIf=\"enabledID!=i\" name=\"arrow-down\" slot=\"end\" class=\"arrow-icon\"></ion-icon>\r\n              <ion-icon *ngIf=\"enabledID==i\" name=\"arrow-up\" slot=\"end\" class=\"arrow-icon\"></ion-icon>\r\n\r\n              <!--\r\n                <ion-icon [name]=\"isInfoHidden ? 'arrow-down' : 'arrow-up'\" slot=\"end\" class=\"arrow-icon\"></ion-icon>\r\n\r\n-->\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div *ngIf=\"enabledID==i\" class=\"animated fadeIn subinfo\">\r\n            <div class=\"test\">\r\n    \r\n              <div class=\"further-info\">\r\n\r\n                <p class=\"exer-title\">{{item.exercise_title}}</p>\r\n                <p class=\"subtitle\">{{exercise2.level_title}}</p>\r\n                <p>{{exercise2.exercise_reps}} Reps - {{exercise2.exercise_sets}} Sets</p>\r\n\r\n                <p><span [innerHTML]=\"exercise2.exercise_instructions\"></span></p>\r\n\r\n                <ion-footer mode=\"ios\" no-border>\r\n                  <ion-button (click)=\"play()\" class=\"primary ion-text-uppercase ion-text-bold\" mode=\"ios\"\r\n                    expand=\"block\">\r\n                    {{strings.ST102}}\r\n                    <ion-icon slot=\"start\" name=\"md-arrow-dropright-circle\"></ion-icon>\r\n                  </ion-button>\r\n                </ion-footer>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n      </ion-item>\r\n      \r\n      <ng-template #notShow >\r\n        <ion-item class=\"disabled\" [routerLink]=\"['/tabs/tab5']\">\r\n\r\n          <ion-avatar slot=\"start\">\r\n            <img class=\"body-img\" [src]=\"item.exercise_image | image\">\r\n          </ion-avatar>\r\n          <div class=\"body-info\">\r\n          <ion-label>{{item.exercise_title}}</ion-label>\r\n          <p>10 Reps - 4 Sets</p>\r\n          </div>\r\n        </ion-item>\r\n      </ng-template>\r\n      \r\n    </ng-container>\r\n  </ion-list>\r\n\r\n\r\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ebodyparts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ebodyparts.page */ "./src/app/pages/ebodyparts/ebodyparts.page.ts");




var routes = [
    {
        path: '',
        component: _ebodyparts_page__WEBPACK_IMPORTED_MODULE_3__["EbodypartsPage"]
    }
];
var EbodypartsPageRoutingModule = /** @class */ (function () {
    function EbodypartsPageRoutingModule() {
    }
    EbodypartsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EbodypartsPageRoutingModule);
    return EbodypartsPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ebodyparts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ebodyparts-routing.module */ "./src/app/pages/ebodyparts/ebodyparts-routing.module.ts");
/* harmony import */ var _ebodyparts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ebodyparts.page */ "./src/app/pages/ebodyparts/ebodyparts.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









var EbodypartsPageModule = /** @class */ (function () {
    function EbodypartsPageModule() {
    }
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
    return EbodypartsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ebodyparts/ebodyparts.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/ebodyparts/ebodyparts.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 90px !important;\n  max-height: 98px !important;\n  border-radius: 0;\n  margin: 0 15px 0px 0 !important; }\n\nion-avatar img {\n  border-radius: 0; }\n\nion-item ion-label,\n.exer-info ion-label {\n  padding-left: 0px;\n  white-space: normal !important;\n  color: #ffffff !important;\n  font-size: 18px;\n  line-height: 20px;\n  font-family: 'Proxima-bold'; }\n\nion-item {\n  border-bottom: 1px solid #eee !important; }\n\nion-item {\n  --background-focused: #191919 !important;\n  --background-activated: #191919 !important;\n  --detail-icon-color: transparent;\n  --detail-icon-opacity: 1;\n  background: none !important;\n  border: none !important; }\n\n.item-native {\n  background-color: #191919 !important;\n  display: none !important; }\n\n.disabled {\n  opacity: 1;\n  position: relative;\n  z-index: 1000;\n  -webkit-filter: blur(1px);\n          filter: blur(1px); }\n\n.item-native {\n  background-color: #454545; }\n\n.in-toolbar {\n  padding: 30px 0 00px 0 !important;\n  background: #191919; }\n\n.ion-page .in-toolbar .toolbar-background {\n  background: transparent !important; }\n\nion-content {\n  background: #191919; }\n\nion-list {\n  background-color: #191919;\n  padding-top: 20px; }\n\nion-item {\n  --background: none !important;\n  margin-bottom: 20px !important;\n  --padding-start: 0px !important;\n  --inner-padding-end: 0px !important;\n  max-width: 90%;\n  margin: 0 auto;\n  border: 1px solid #313235 !important;\n  border-radius: 5px; }\n\n.body-img {\n  width: 90px;\n  height: 98px; }\n\n.ion-text-capitalize {\n  width: 100%;\n  color: #f7474f;\n  font-family: Proxima-bold;\n  font-size: 20px !important;\n  text-transform: none !important; }\n\np {\n  color: #ffffff;\n  margin: 5px 0;\n  font-size: 16px;\n  line-height: normal;\n  letter-spacing: normal;\n  font-family: 'Muli-light'; }\n\n.body-info {\n  position: absolute;\n  top: 20px; }\n\nion-item {\n  --background-focused: #fff !important;\n  --background-activated: #fff !important;\n  --detail-icon-color: var(--ion-color-primary);\n  --detail-icon-opacity: 1;\n  --detail-icon-transform: rotate(90deg) !important; }\n\n.body-info p,\n.exer-info p {\n  font-size: 16px;\n  color: #979797;\n  line-height: 16px;\n  font-family: 'Nunito-light'; }\n\n.arrow {\n  color: #f7474f !important; }\n\n.tags {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  max-width: 100%;\n  border: 1px solid #313235;\n  border-radius: 5px; }\n\n.exer-img {\n  width: 98px;\n  height: 90px;\n  display: block; }\n\n.exer-info {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 50%; }\n\n.arrow-icon {\n  position: absolute;\n  right: 4%;\n  width: 20px;\n  height: 20px;\n  color: #8d8a8a !important; }\n\n.subinfo {\n  max-width: 100%;\n  margin: 0 auto; }\n\n.further-info {\n  margin: 0 auto;\n  border: 1px solid #313235;\n  border-top: none;\n  padding: 5%; }\n\n.exer-title {\n  color: #fafafa;\n  line-height: 26px;\n  font-size: 22px;\n  font-family: 'Proxima-bold'; }\n\n.subinfo .subtitle {\n  color: #fafafa;\n  line-height: 20px;\n  font-size: 16px;\n  font-family: 'Muli-Regular'; }\n\n.sub-img {\n  display: block;\n  margin-top: -3px;\n  border-right: 1px solid #313235;\n  border-left: 1px solid #313235; }\n\n.body-parts {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: normal !important;\n          flex-direction: column !important;\n  --display: flex !important;\n  --flex-direction: column !important;\n  width: 100%; }\n\n.close-img {\n  max-width: 16px;\n  max-height: 16px; }\n\n.further-info p {\n  color: #fafafa;\n  line-height: 20px;\n  font-size: 16px;\n  font-family: 'Proxima-regular';\n  --padding-inline-start: 0px !important;\n  -webkit-padding-start: 0px !important;\n          padding-inline-start: 0px !important; }\n\n.further-info span {\n  margin-left: -23px !important;\n  display: block; }\n\n.further-info .exer-title {\n  color: #fafafa;\n  line-height: 24px;\n  font-size: 20px;\n  font-family: 'Proxima-bold'; }\n\n.further-info .subtitle {\n  color: #fafafa;\n  line-height: 20px;\n  font-size: 16px;\n  font-family: 'Proxima-bold'; }\n\n@media only screen and (max-width: 280px) {\n  ion-item ion-label,\n  .exer-info ion-label {\n    font-size: 16px;\n    line-height: 18px; }\n  ion-avatar {\n    margin: 0 10px 0 0 !important;\n    max-width: 75px !important; }\n  .arrow-icon {\n    right: 2%; } }\n\n@media only screen and (max-width: 250px) {\n  ion-avatar {\n    max-width: 70px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWJvZHlwYXJ0cy9DOlxcVXNlcnNcXEhhcmlzaFxcTG9jYWxfZGV2XFxHeW1tYXRlQXBwL3NyY1xcYXBwXFxwYWdlc1xcZWJvZHlwYXJ0c1xcZWJvZHlwYXJ0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLCtCQUErQixFQUFBOztBQUduQztFQUNJLGdCQUFnQixFQUFBOztBQUlwQjs7RUFFSSxpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLHdDQUF3QyxFQUFBOztBQUc1QztFQUNJLHdDQUFxQjtFQUNyQiwwQ0FBdUI7RUFDdkIsZ0NBQW9CO0VBQ3BCLHdCQUFzQjtFQUV0QiwyQkFBMkI7RUFDM0IsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksb0NBQW9DO0VBQ3BDLHdCQUF3QixFQUFBOztBQUc1QjtFQUVJLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHlCQUFpQjtVQUFqQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxpQ0FBaUM7RUFDakMsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBR1ksa0NBQWtDLEVBQUE7O0FBSzlDO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0kseUJBQXlCO0VBQ3pCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLDZCQUFhO0VBQ2IsOEJBQThCO0VBQzlCLCtCQUFnQjtFQUNoQixtQ0FBb0I7RUFDcEIsY0FBYztFQUNkLGNBQWM7RUFDZCxvQ0FBb0M7RUFDcEMsa0JBQWtCLEVBQUE7O0FBSXRCO0VBQ0ksV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXO0VBQ1gsY0FBYztFQUNkLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsK0JBQStCLEVBQUE7O0FBR25DO0VBQ0ksY0FBYztFQUNkLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUyxFQUFBOztBQUdiO0VBQ0kscUNBQXFCO0VBQ3JCLHVDQUF1QjtFQUN2Qiw2Q0FBb0I7RUFDcEIsd0JBQXNCO0VBQ3RCLGlEQUF3QixFQUFBOztBQUc1Qjs7RUFFSSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiwyQkFBMkIsRUFBQTs7QUFJL0I7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYyxFQUFBOztBQUdsQjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBR2xCO0VBRUksY0FBYztFQUNkLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQUlmO0VBQ0ksY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksY0FBYztFQUNkLGdCQUFnQjtFQUNoQiwrQkFBK0I7RUFDL0IsOEJBQThCLEVBQUE7O0FBR2xDO0VBQ0ksK0JBQXdCO0VBQXhCLHdCQUF3QjtFQUN4Qix1Q0FBaUM7RUFBakMsd0NBQWlDO1VBQWpDLGlDQUFpQztFQUNqQywwQkFBVTtFQUNWLG1DQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLHNDQUF1QjtFQUN2QixxQ0FBb0M7VUFBcEMsb0NBQW9DLEVBQUE7O0FBR3hDO0VBQ0ksNkJBQTZCO0VBQzdCLGNBQWMsRUFBQTs7QUFJbEI7RUFDSSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiwyQkFBMkIsRUFBQTs7QUFJL0I7RUFFSTs7SUFFSSxlQUFlO0lBQ2YsaUJBQWlCLEVBQUE7RUFHckI7SUFDSSw2QkFBNkI7SUFDN0IsMEJBQTBCLEVBQUE7RUFHOUI7SUFDSSxTQUFTLEVBQUEsRUFDWjs7QUFHTDtFQUNJO0lBQ0ksMEJBQTBCLEVBQUEsRUFDN0IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lYm9keXBhcnRzL2Vib2R5cGFydHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDkwcHggIWltcG9ydGFudDtcclxuICAgIG1heC1oZWlnaHQ6IDk4cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBtYXJnaW46IDAgMTVweCAwcHggMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tYXZhdGFyIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG5cclxufVxyXG5cclxuaW9uLWl0ZW0gaW9uLWxhYmVsLFxyXG4uZXhlci1pbmZvIGlvbi1sYWJlbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUHJveGltYS1ib2xkJztcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICMxOTE5MTkgIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMxOTE5MTkgIWltcG9ydGFudDtcclxuICAgIC0tZGV0YWlsLWljb24tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1kZXRhaWwtaWNvbi1vcGFjaXR5OiAxO1xyXG5cclxuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaXRlbS1uYXRpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGlzYWJsZWQge1xyXG4gICAgLy8gIHBvaW50ZXItZXZlbnRzOiBub25lOyAvL1RoaXMgbWFrZXMgaXQgbm90IGNsaWNrYWJsZVxyXG4gICAgb3BhY2l0eTogMTsgLy9UaGlzIGdyYXlzIGl0IG91dCB0byBsb29rIGRpc2FibGVkXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgZmlsdGVyOiBibHVyKDFweCk7XHJcbn1cclxuXHJcbi5pdGVtLW5hdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU0NTQ1O1xyXG59XHJcblxyXG4uaW4tdG9vbGJhciB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDAgMDBweCAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTkxOTE5O1xyXG59XHJcblxyXG4uaW9uLXBhZ2Uge1xyXG4gICAgLmluLXRvb2xiYXIge1xyXG4gICAgICAgIC50b29sYmFyLWJhY2tncm91bmQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogIzE5MTkxOTtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHggIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzEzMjM1ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG59XHJcblxyXG4uYm9keS1pbWcge1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IDk4cHg7XHJcbn1cclxuXHJcbi5pb24tdGV4dC1jYXBpdGFsaXplIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICNmNzQ3NGY7XHJcbiAgICBmb250LWZhbWlseTogUHJveGltYS1ib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5wIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNdWxpLWxpZ2h0JztcclxufVxyXG5cclxuLmJvZHktaW5mbyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAtLWRldGFpbC1pY29uLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAtLWRldGFpbC1pY29uLW9wYWNpdHk6IDE7XHJcbiAgICAtLWRldGFpbC1pY29uLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9keS1pbmZvIHAsXHJcbi5leGVyLWluZm8gcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzk3OTc5NztcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8tbGlnaHQnO1xyXG5cclxufVxyXG5cclxuLmFycm93IHtcclxuICAgIGNvbG9yOiAjZjc0NzRmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50YWdzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMxMzIzNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmV4ZXItaW1nIHtcclxuICAgIHdpZHRoOiA5OHB4O1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5leGVyLWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5hcnJvdy1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA0JTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICM4ZDhhOGEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN1YmluZm8ge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5mdXJ0aGVyLWluZm8ge1xyXG5cclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMxMzIzNTtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxufVxyXG5cclxuXHJcbi5leGVyLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmFmYWZhO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LWZhbWlseTogJ1Byb3hpbWEtYm9sZCc7XHJcbn1cclxuXHJcbi5zdWJpbmZvIC5zdWJ0aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZhZmFmYTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNdWxpLVJlZ3VsYXInO1xyXG59XHJcblxyXG4uc3ViLWltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IC0zcHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzEzMjM1O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMzEzMjM1O1xyXG59XHJcblxyXG4uYm9keS1wYXJ0cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgICAtLWRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIC0tZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jbG9zZS1pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxNnB4O1xyXG4gICAgbWF4LWhlaWdodDogMTZweDtcclxufVxyXG5cclxuLmZ1cnRoZXItaW5mbyBwIHtcclxuICAgIGNvbG9yOiAjZmFmYWZhO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1Byb3hpbWEtcmVndWxhcic7XHJcbiAgICAtLXBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZ1cnRoZXItaW5mbyBzcGFuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjNweCAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcblxyXG4uZnVydGhlci1pbmZvIC5leGVyLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmFmYWZhO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1Byb3hpbWEtYm9sZCc7XHJcbn1cclxuXHJcbi5mdXJ0aGVyLWluZm8gLnN1YnRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmFmYWZhO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1Byb3hpbWEtYm9sZCc7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI4MHB4KSB7XHJcblxyXG4gICAgaW9uLWl0ZW0gaW9uLWxhYmVsLFxyXG4gICAgLmV4ZXItaW5mbyBpb24tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tYXZhdGFyIHtcclxuICAgICAgICBtYXJnaW46IDAgMTBweCAwIDAgIWltcG9ydGFudDtcclxuICAgICAgICBtYXgtd2lkdGg6IDc1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuYXJyb3ctaWNvbiB7XHJcbiAgICAgICAgcmlnaHQ6IDIlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI1MHB4KSB7XHJcbiAgICBpb24tYXZhdGFyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDcwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _services_admob_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/admob.service */ "./src/app/services/admob.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_subscription_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/subscription.service */ "./src/app/services/subscription.service.ts");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "./node_modules/@ionic-native/streaming-media/ngx/index.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");











var EbodypartsPage = /** @class */ (function () {
    function EbodypartsPage(dataService, router, route, plt, streamingMedia, admob, screenOrientation, auth, subService) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.plt = plt;
        this.streamingMedia = streamingMedia;
        this.admob = admob;
        this.screenOrientation = screenOrientation;
        this.auth = auth;
        this.subService = subService;
        this.enabledID = null;
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
    EbodypartsPage.prototype.ngOnInit = function () {
        this.admob.BannerAd();
        this.subscribe = false;
    };
    // tslint:disable-next-line: use-lifecycle-interface
    EbodypartsPage.prototype.ngOnDestroy = function () {
        this.admob.HideBannerAd();
    };
    EbodypartsPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userid;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                userid = this.auth.getUserId();
                this.subService.getStatus(userid).subscribe(function (data) {
                    if (data.status != "active") {
                        _this.subscribe = false;
                    }
                    if (data.status == "active") {
                        _this.subscribe = true;
                    }
                }, function (err) { console.log(err); });
                this.isLoading = true;
                this.route.params.subscribe(function (data) {
                    _this.id = data.id;
                    _this.title = data.title;
                    _this.getExercises();
                    if (!_this.id) {
                        _this.goBack();
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    EbodypartsPage.prototype.goBack = function () {
        this.router.navigate(['/home']);
    };
    EbodypartsPage.prototype.toggleInfo = function (index, id) {
        var _this = this;
        if (this.enabledID == index) {
            this.enabledID = null;
        }
        else {
            this.dataService.getDataExerciseById(id)
                .subscribe(function (resp) {
                _this.exercise2 = resp[0];
                _this.isLoading = false;
            });
            this.show[index] = true;
            this.enabledID = index;
        }
    };
    EbodypartsPage.prototype.play = function () {
        var options = {
            successCallback: function () { console.log('Video played'); },
            errorCallback: function (e) { console.log('Error streaming'); },
            orientation: 'landscape',
            shouldAutoClose: true,
            controls: true
        };
        // tslint:disable-next-line: max-line-length
        this.streamingMedia.playVideo('https://firebasestorage.googleapis.com/v0/b/six-pack-app.appspot.com/o/video.mp4?alt=media&token=453512dd-f079-4355-a325-92a9b2f7e465', options);
    };
    EbodypartsPage.prototype.getExercises = function () {
        var _this = this;
        this.dataService.getDataExercisesByBodypart(this.id)
            .subscribe(function (resp) {
            _this.exercises = resp;
            _this.isLoading = false;
        });
    };
    EbodypartsPage.ctorParameters = function () { return [
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_9__["StreamingMedia"] },
        { type: _services_admob_service__WEBPACK_IMPORTED_MODULE_6__["AdmobService"] },
        { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_10__["ScreenOrientation"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: _services_subscription_service__WEBPACK_IMPORTED_MODULE_8__["SubscriptionService"] }
    ]; };
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
    return EbodypartsPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");




var Url = _config_config__WEBPACK_IMPORTED_MODULE_3__["config"].Url;
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.page = 0;
    }
    DataService.prototype.ejectQuery = function (query) {
        query = Url + query;
        return this.http.get(query);
    };
    DataService.prototype.getDataStrings = function () {
        return this.ejectQuery('/json/data_strings.php');
    };
    DataService.prototype.getDataMotivation = function () {
        return this.ejectQuery('/json/data_quotes.php');
    };
    DataService.prototype.getDataFeaturedDiets = function () {
        return this.ejectQuery('/json/data_diets.php?featured=1');
    };
    DataService.prototype.getDataCategories = function () {
        return this.ejectQuery('/json/data_categories.php');
    };
    DataService.prototype.getDataGoals = function () {
        return this.ejectQuery('/json/data_goals.php');
    };
    DataService.prototype.getDataLevels = function () {
        return this.ejectQuery('/json/data_levels.php');
    };
    DataService.prototype.getDataTags = function () {
        return this.ejectQuery('/json/data_tags.php');
    };
    DataService.prototype.getDataEquipments = function () {
        return this.ejectQuery('/json/data_equipments.php');
    };
    DataService.prototype.getDataBodyparts = function () {
        return this.ejectQuery('/json/data_bodyparts.php');
    };
    DataService.prototype.getDataFeaturedPosts = function () {
        return this.ejectQuery('/json/data_posts.php?featured=1');
    };
    DataService.prototype.getDataRecentPosts = function (limit) {
        return this.ejectQuery("/json/data_posts.php?limit=" + limit);
    };
    DataService.prototype.getDataWorkoutsByGoal = function (id) {
        return this.ejectQuery("/json/data_workouts.php?goal=" + id);
    };
    DataService.prototype.getDataWorkoutsByLevel = function (id) {
        return this.ejectQuery("/json/data_workouts.php?level=" + id);
    };
    DataService.prototype.getDataExercisesByBodypart = function (id) {
        return this.ejectQuery("/json/data_bodypart.php?id=" + id);
    };
    DataService.prototype.getDataExercisesByEquipment = function (id) {
        return this.ejectQuery("/json/data_equipment.php?id=" + id);
    };
    DataService.prototype.getDataDietsByCategory = function (id) {
        return this.ejectQuery("/json/data_diets.php?category=" + id);
    };
    DataService.prototype.getDataPostsByTag = function (id) {
        return this.ejectQuery("/json/data_posts.php?tag=" + id);
    };
    DataService.prototype.getDataExerciseById = function (id) {
        return this.ejectQuery("/json/data_exercises.php?id=" + id + "&limit=1");
    };
    DataService.prototype.getDataWorkoutById = function (id) {
        return this.ejectQuery("/json/data_workouts.php?id=" + id + "&limit=1");
    };
    DataService.prototype.getDataDietById = function (id) {
        return this.ejectQuery("/json/data_diets.php?id=" + id + "&limit=1");
    };
    DataService.prototype.getDataPostById = function (id) {
        return this.ejectQuery("/json/data_posts.php?id=" + id + "&limit=1");
    };
    DataService.prototype.getDataWorkoutExercisesByDay = function (id, day) {
        return this.ejectQuery("/json/data_days.php?id=" + id + "&day=" + day);
    };
    DataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ebodyparts-ebodyparts-module-es5.js.map