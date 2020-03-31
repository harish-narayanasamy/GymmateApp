(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-eequipments-eequipments-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/eequipments/eequipments.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/eequipments/eequipments.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\r\n  <ion-toolbar mode=\"ios\" class=\"ion-color\" [style.background-color]=\"customColor\">\r\n    <ion-title class=\"ion-text-capitalize\">\r\n      {{title}}\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <app-backbutton class=\"arrow\"></app-backbutton>\r\n    </ion-buttons>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button  slot=\"start\" [routerLink]=\"['/tabs/tab1']\">\r\n        <img src=\"./assets/images/close.png\" class=\"close-img\"/> \r\n        </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content fixed class=\"ion-color\" [style.background-color]=\"customColor\">\r\n\r\n  <app-loading *ngIf=\"isLoading\"></app-loading>\r\n\r\n  <app-empty *ngIf=\"exercises.length === 0\" [title]=\"strings.ST140\"></app-empty>\r\n\r\n  <ion-list lines=\"none\" class=\"ion-padding-top\">\r\n    <ng-container *ngFor=\"let item of exercises; index as i;\">\r\n\r\n\r\n      <ion-item  class=\"ion-color\" [style.background-color]=\"customColor\">\r\n  \r\n        <div class=\" body-parts\">\r\n          <div class=\"tags\" (click)=toggleInfo(i,item.exercise_id)>\r\n\r\n            <ion-avatar slot=\"start\">\r\n\r\n              <img src=\"http://hosting.lakeba.com:8092/images/{{item.exercise_image}}\" class=\"exer-img\" />\r\n\r\n            </ion-avatar>\r\n            <div class=\"exer-info\">\r\n              <ion-label>{{item.exercise_title}}</ion-label>\r\n              <p>{{item.bodypart_title}}</p>\r\n\r\n              <ion-icon [name]=\"isInfoHidden ? 'arrow-down' : 'arrow-up'\" slot=\"end\" class=\"arrow-icon\"></ion-icon>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div *ngIf=\"show[i]\" class=\"animated fadeIn subinfo\">\r\n            <div class=\"test\">\r\n    \r\n              <div class=\"further-info\">\r\n\r\n                <p class=\"exer-title\">{{exercise2.exercise_title}}</p>\r\n                <p class=\"subtitle\">{{exercise2.level_title}}</p>\r\n                <p>{{exercise2.exercise_reps}} Reps - {{exercise2.exercise_sets}} Sets</p>\r\n\r\n                <p><span [innerHTML]=\"exercise2.exercise_instructions\"></span></p>\r\n\r\n                <ion-footer mode=\"ios\" no-border>\r\n                  <ion-button (click)=\"play()\" class=\"primary ion-text-uppercase ion-text-bold\" mode=\"ios\"\r\n                    expand=\"block\">\r\n                    {{strings.ST102}}\r\n                    <ion-icon slot=\"start\" name=\"md-arrow-dropright-circle\"></ion-icon>\r\n                  </ion-button>\r\n                </ion-footer>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </ion-item>\r\n      <!--\r\n      <ng-template #notShow >\r\n        <ion-item class=\"disabled\" [routerLink]=\"['/profile']\">\r\n\r\n          <ion-avatar slot=\"stat\">\r\n            <img class=\"body-img\" [src]=\"item.exercise_image | image\">\r\n          </ion-avatar>\r\n          <div class=\"body-info\">\r\n          <ion-label>{{item.exercise_title}}</ion-label>\r\n          <p>10 Reps - 4 Sets</p>\r\n          </div>\r\n        </ion-item>\r\n      </ng-template>\r\n      -->\r\n    </ng-container>\r\n  </ion-list>\r\n\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/eequipments/eequipments-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/eequipments/eequipments-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: EequipmentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EequipmentsPageRoutingModule", function() { return EequipmentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _eequipments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eequipments.page */ "./src/app/pages/eequipments/eequipments.page.ts");




var routes = [
    {
        path: '',
        component: _eequipments_page__WEBPACK_IMPORTED_MODULE_3__["EequipmentsPage"]
    }
];
var EequipmentsPageRoutingModule = /** @class */ (function () {
    function EequipmentsPageRoutingModule() {
    }
    EequipmentsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EequipmentsPageRoutingModule);
    return EequipmentsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/eequipments/eequipments.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/eequipments/eequipments.module.ts ***!
  \*********************************************************/
/*! exports provided: EequipmentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EequipmentsPageModule", function() { return EequipmentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _eequipments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eequipments-routing.module */ "./src/app/pages/eequipments/eequipments-routing.module.ts");
/* harmony import */ var _eequipments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eequipments.page */ "./src/app/pages/eequipments/eequipments.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









var EequipmentsPageModule = /** @class */ (function () {
    function EequipmentsPageModule() {
    }
    EequipmentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _eequipments_routing_module__WEBPACK_IMPORTED_MODULE_5__["EequipmentsPageRoutingModule"]
            ],
            declarations: [_eequipments_page__WEBPACK_IMPORTED_MODULE_6__["EequipmentsPage"]]
        })
    ], EequipmentsPageModule);
    return EequipmentsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/eequipments/eequipments.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/eequipments/eequipments.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 90px !important;\n  max-height: 98px !important;\n  border-radius: 0;\n  margin: 0 15px 0px 0 !important; }\n\nion-avatar img {\n  border-radius: 0; }\n\nion-item ion-label, .exer-info ion-label {\n  padding-left: 0px;\n  white-space: normal !important;\n  color: #ffffff !important;\n  font-size: 18px;\n  line-height: 20px;\n  font-family: 'Proxima-bold'; }\n\nion-item {\n  border-bottom: 1px solid #eee !important; }\n\nion-item {\n  --background-focused: #191919 !important;\n  --background-activated: #191919 !important;\n  --detail-icon-color: transparent;\n  --detail-icon-opacity: 1;\n  background: none !important;\n  border: none !important; }\n\n.item-native {\n  background-color: #191919 !important;\n  display: none !important; }\n\n.disabled {\n  opacity: 1;\n  position: relative;\n  z-index: 1000; }\n\n.item-native {\n  background-color: #454545; }\n\n.in-toolbar {\n  padding: 30px 0 0px 0 !important;\n  background: #191919; }\n\n.ion-page .in-toolbar .toolbar-background {\n  background: transparent !important; }\n\nion-content {\n  background: #191919; }\n\nion-list {\n  background-color: #191919;\n  padding-top: 20px;\n  height: auto; }\n\nion-item {\n  --background: none !important;\n  margin-bottom: 20px !important;\n  --padding-start: 0px !important;\n  --inner-padding-end: 0px !important;\n  max-width: 90%;\n  margin: 0 auto;\n  border: 1px solid #313235 !important;\n  border-radius: 5px; }\n\n.body-img {\n  width: 90px;\n  height: 98px; }\n\n.ion-text-capitalize {\n  width: 100%;\n  color: #f7474f;\n  font-family: Proxima-bold;\n  font-size: 20px !important;\n  text-transform: none !important; }\n\np {\n  color: #ffffff;\n  margin: 5px 0;\n  font-size: 16px;\n  line-height: normal;\n  letter-spacing: normal;\n  font-family: 'Muli-light'; }\n\n.body-info {\n  position: absolute;\n  top: 20px; }\n\nion-item {\n  --background-focused: #fff !important;\n  --background-activated: #fff !important;\n  --detail-icon-color: var(--ion-color-primary);\n  --detail-icon-opacity: 1;\n  --detail-icon-transform: rotate(90deg) !important; }\n\n.body-info p, .exer-info p {\n  font-size: 14px;\n  color: #979797;\n  line-height: 16px;\n  font-family: 'Nunito-light'; }\n\n.arrow {\n  color: #f7474f !important; }\n\n.tags {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  max-width: 100%;\n  border: 1px solid #313235;\n  border-radius: 5px; }\n\n.exer-img {\n  width: 98px;\n  height: 90px;\n  display: block; }\n\n.exer-info {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 50%; }\n\n.arrow-icon {\n  position: absolute;\n  right: 4%;\n  width: 20px;\n  height: 20px;\n  color: #8d8a8a !important; }\n\n.subinfo {\n  max-width: 100%;\n  margin: 0 auto; }\n\n.further-info {\n  margin: 0 auto;\n  border: 1px solid #313235;\n  border-top: none;\n  padding: 5%; }\n\n.exer-title {\n  color: #fafafa;\n  line-height: 26px;\n  font-size: 22px;\n  font-family: 'Proxima-bold'; }\n\n.subinfo .subtitle {\n  color: #fafafa;\n  line-height: 20px;\n  font-size: 16px;\n  font-family: 'Muli-Regular'; }\n\n.sub-img {\n  display: block;\n  margin-top: -3px;\n  border-right: 1px solid #313235;\n  border-left: 1px solid #313235; }\n\n.body-parts {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: normal !important;\n          flex-direction: column !important;\n  --display: flex !important;\n  --flex-direction: column !important;\n  width: 100%; }\n\n.s-ion-icon {\n  display: none !important; }\n\n.close-img {\n  max-width: 16px;\n  max-height: 16px; }\n\n.body-parts {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: normal !important;\n  flex-direction: column !important;\n  --display: flex !important;\n  --flex-direction: column !important;\n  width: 100%; }\n\n.body-parts .tags2 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  max-width: 100%;\n  border: 1px solid #313235;\n  border-radius: 5px; }\n\n.body-parts .exer-img {\n  width: 98px;\n  height: 90px;\n  display: block; }\n\n.body-parts .exer-info {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 50%; }\n\n.body-parts .arrow-icon {\n  position: absolute;\n  right: 4%;\n  width: 20px;\n  height: 20px;\n  color: #8d8a8a !important;\n  background-color: #191919 !important; }\n\n.body-parts .subinfo {\n  max-width: 100%;\n  margin: 0 auto; }\n\n.body-parts .further-info {\n  margin: 0 auto;\n  border: 1px solid #313235;\n  border-top: none;\n  padding: 5%; }\n\n.body-parts .exer-title {\n  color: #fafafa;\n  line-height: 26px;\n  font-size: 22px;\n  font-family: 'Proxima-bold'; }\n\n.body-parts .subinfo .subtitle {\n  color: #fafafa;\n  line-height: 20px;\n  font-size: 16px;\n  font-family: 'Muli-Regular'; }\n\n.body-parts .sub-img {\n  display: block;\n  margin-top: -3px;\n  border-right: 1px solid #313235;\n  border-left: 1px solid #313235; }\n\n.body-parts .body-parts {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: normal !important;\n          flex-direction: column !important;\n  --display: flex !important;\n  --flex-direction: column !important;\n  width: 100%; }\n\n.body-parts .s-ion-icon {\n  display: none !important; }\n\n.body-parts ion-item {\n  --background-focused: #fff !important;\n  --background-activated: #fff !important;\n  --detail-icon-color: var(--ion-color-primary);\n  --detail-icon-opacity: 1;\n  --detail-icon-transform: rotate(90deg) !important; }\n\nion-avatar img {\n  border-radius: 0; }\n\n.body-parts ion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 90px !important;\n  max-height: 98px !important;\n  border-radius: 0;\n  margin: 0 15px 0px 0 !important; }\n\n.body-parts ion-item ion-label, .body-parts ion-label {\n  padding-left: 0px;\n  white-space: normal !important;\n  color: #ffffff !important;\n  font-size: 18px;\n  line-height: 20px;\n  font-family: 'Proxima-bold'; }\n\n.workout-exercise {\n  background-color: transparent !important;\n  padding-bottom: 40px; }\n\n.exer-info p {\n  font-size: 14px;\n  color: #979797;\n  line-height: 16px;\n  font-family: 'Nunito-light';\n  margin: 5px 0; }\n\n.workout-exercise ion-item {\n  --inner-padding-end: 0px;\n  --padding-start: 0px ;\n  max-width: 90%;\n  margin: 0 auto; }\n\n.further-info p {\n  color: #fafafa;\n  line-height: 20px;\n  font-size: 16px;\n  font-family: 'Proxima-regular';\n  --padding-inline-start: 0px !important;\n  -webkit-padding-start: 0px !important;\n          padding-inline-start: 0px !important; }\n\n.further-info span {\n  margin-left: -23px !important;\n  display: block; }\n\n.further-info .exer-title {\n  color: #fafafa;\n  line-height: 24px;\n  font-size: 20px;\n  font-family: 'Proxima-bold'; }\n\n.further-info .subtitle {\n  color: #fafafa;\n  line-height: 20px;\n  font-size: 16px;\n  font-family: 'Proxima-bold'; }\n\n@media only screen and (max-width: 280px) {\n  .body-parts .exer-info ion-label {\n    font-size: 16px;\n    line-height: 18px; }\n  .body-parts ion-avatar {\n    margin: 0 10px 0 0 !important;\n    max-width: 75px !important; }\n  .body-parts .arrow-icon {\n    right: 2%; } }\n\n@media only screen and (max-width: 250px) {\n  .body-parts ion-avatar {\n    max-width: 70px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWVxdWlwbWVudHMvQzpcXFVzZXJzXFxIYXJpc2hcXExvY2FsX2RldlxcR3ltbWF0ZUFwcC9zcmNcXGFwcFxccGFnZXNcXGVlcXVpcG1lbnRzXFxlZXF1aXBtZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLCtCQUErQixFQUFBOztBQUduQztFQUNJLGdCQUFnQixFQUFBOztBQUlwQjtFQUNJLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksd0NBQXdDLEVBQUE7O0FBRzVDO0VBQ0ksd0NBQXFCO0VBQ3JCLDBDQUF1QjtFQUN2QixnQ0FBb0I7RUFDcEIsd0JBQXNCO0VBRXRCLDJCQUEyQjtFQUMzQix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxvQ0FBb0M7RUFDcEMsd0JBQXdCLEVBQUE7O0FBRTVCO0VBRUksVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixhQUFhLEVBQUE7O0FBR2pCO0VBQ0kseUJBQXdCLEVBQUE7O0FBRzVCO0VBQ0ksZ0NBQWdDO0VBQ2hDLG1CQUFtQixFQUFBOztBQUd2QjtFQUdRLGtDQUFrQyxFQUFBOztBQUt4QztFQUNFLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsWUFBWSxFQUFBOztBQUVoQjtFQUNJLDZCQUFhO0VBQ2IsOEJBQThCO0VBQzlCLCtCQUFnQjtFQUNoQixtQ0FBb0I7RUFDcEIsY0FBYztFQUNkLGNBQWM7RUFDZCxvQ0FBb0M7RUFDcEMsa0JBQWtCLEVBQUE7O0FBSXJCO0VBQ0csV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZjtFQUNHLFdBQVc7RUFDWCxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pC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QixFQUFBLEVBQzdCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWVxdWlwbWVudHMvZWVxdWlwbWVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDkwcHggIWltcG9ydGFudDtcclxuICAgIG1heC1oZWlnaHQ6IDk4cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBtYXJnaW46IDAgMTVweCAwcHggMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tYXZhdGFyIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG5cclxufVxyXG5cclxuaW9uLWl0ZW0gaW9uLWxhYmVsLCAuZXhlci1pbmZvIGlvbi1sYWJlbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUHJveGltYS1ib2xkJztcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICMxOTE5MTkgIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMxOTE5MTkgIWltcG9ydGFudDtcclxuICAgIC0tZGV0YWlsLWljb24tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1kZXRhaWwtaWNvbi1vcGFjaXR5OiAxO1xyXG5cclxuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaXRlbS1uYXRpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5ICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRpc2FibGVkIHtcclxuICAvLyAgcG9pbnRlci1ldmVudHM6IG5vbmU7IC8vVGhpcyBtYWtlcyBpdCBub3QgY2xpY2thYmxlXHJcbiAgICBvcGFjaXR5OiAxOyAvL1RoaXMgZ3JheXMgaXQgb3V0IHRvIGxvb2sgZGlzYWJsZWRcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi5pdGVtLW5hdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzQ1NDU0NTtcclxufVxyXG5cclxuLmluLXRvb2xiYXJ7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDAgMHB4IDAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICMxOTE5MTk7XHJcbn1cclxuXHJcbi5pb24tcGFnZSB7XHJcbiAgICAuaW4tdG9vbGJhciB7XHJcbiAgICAgIC50b29sYmFyLWJhY2tncm91bmQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZDogIzE5MTkxOTtcclxufVxyXG5cclxuaW9uLWxpc3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxOTE5MTkgO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuaW9uLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHggIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzEzMjM1ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG59XHJcblxyXG4gLmJvZHktaW1ne1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IDk4cHg7XHJcbiB9IFxyXG5cclxuIC5pb24tdGV4dC1jYXBpdGFsaXple1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogI2Y3NDc0ZjtcclxuICAgIGZvbnQtZmFtaWx5OiBQcm94aW1hLWJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9ICAgXHJcblxyXG4gcHtcclxuICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgZm9udC1mYW1pbHk6ICdNdWxpLWxpZ2h0JztcclxuIH1cclxuXHJcbiAuYm9keS1pbmZve1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB0b3A6IDIwcHg7XHJcbiB9XHJcblxyXG4gaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIC0tZGV0YWlsLWljb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIC0tZGV0YWlsLWljb24tb3BhY2l0eTogMTtcclxuICAgIC0tZGV0YWlsLWljb24tdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiAuYm9keS1pbmZvIHAsIC5leGVyLWluZm8gcHtcclxuICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgY29sb3I6ICM5Nzk3OTc7XHJcbiAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8tbGlnaHQnO1xyXG5cclxuIH1cclxuXHJcbiAuYXJyb3d7XHJcbiAgICAgY29sb3I6ICNmNzQ3NGYgIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiAudGFnc3tcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgXHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzEzMjM1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5leGVyLWltZ3tcclxuICAgICAgICB3aWR0aDogOThweDtcclxuICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLmV4ZXItaW5mb3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuXHJcbiAgICAuYXJyb3ctaWNvbntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDQlO1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICBjb2xvcjojOGQ4YThhICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1YmluZm97XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5mdXJ0aGVyLWluZm97XHJcbiAgICAgICBcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzEzMjM1O1xyXG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogNSU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5leGVyLXRpdGxle1xyXG4gICAgICAgIGNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ1Byb3hpbWEtYm9sZCc7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1YmluZm8gLnN1YnRpdGxle1xyXG4gICAgICAgIGNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ011bGktUmVndWxhcic7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1Yi1pbWd7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTNweDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzEzMjM1O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzMxMzIzNTtcclxuICAgIH1cclxuXHJcbiAgICAuYm9keS1wYXJ0c3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gICAgICAgLS1kaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1mbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnMtaW9uLWljb257XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5jbG9zZS1pbWd7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNnB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJvZHktcGFydHMge1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWwgIWltcG9ydGFudDtcclxuICAgICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxuICAgICAgICAtLWRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgICAtLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuYm9keS1wYXJ0cyAudGFnczJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxyXG4gICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgYm9yZGVyOiAxcHggc29saWQgIzMxMzIzNTtcclxuICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgIH1cclxuICAgXHJcbiAgICAgICAuYm9keS1wYXJ0cyAgLmV4ZXItaW1ne1xyXG4gICAgICAgICAgIHdpZHRoOiA5OHB4O1xyXG4gICAgICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgIH1cclxuICAgXHJcbiAgICAgICAuYm9keS1wYXJ0cyAgLmV4ZXItaW5mb3tcclxuICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgIH1cclxuICAgXHJcbiAgICAgICAuYm9keS1wYXJ0cyAgLmFycm93LWljb257XHJcbiAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgIHJpZ2h0OiA0JTtcclxuICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgY29sb3I6IzhkOGE4YSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTkgIWltcG9ydGFudDtcclxuICAgICAgIH1cclxuICAgXHJcbiAgICAgICAuYm9keS1wYXJ0cyAgLnN1YmluZm97XHJcbiAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgfVxyXG4gICBcclxuICAgICAgIC5ib2R5LXBhcnRzIC5mdXJ0aGVyLWluZm97XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzEzMjM1O1xyXG4gICAgICAgICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICAgICAgICAgcGFkZGluZzogNSU7XHJcbiAgICAgICB9XHJcbiAgIFxyXG4gICBcclxuICAgICAgIC5ib2R5LXBhcnRzIC5leGVyLXRpdGxle1xyXG4gICAgICAgICAgIGNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICBmb250LWZhbWlseTogJ1Byb3hpbWEtYm9sZCc7XHJcbiAgICAgICB9XHJcbiAgIFxyXG4gICAgICAgLmJvZHktcGFydHMgLnN1YmluZm8gLnN1YnRpdGxle1xyXG4gICAgICAgICAgIGNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICBmb250LWZhbWlseTogJ011bGktUmVndWxhcic7XHJcbiAgICAgICB9XHJcbiAgIFxyXG4gICAgICAgLmJvZHktcGFydHMgLnN1Yi1pbWd7XHJcbiAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgbWFyZ2luLXRvcDogLTNweDtcclxuICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzEzMjM1O1xyXG4gICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzMxMzIzNTtcclxuICAgICAgIH1cclxuICAgXHJcbiAgICAgICAuYm9keS1wYXJ0cyAuYm9keS1wYXJ0c3tcclxuICAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgLS1kaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgLS1mbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICB9XHJcbiAgIFxyXG4gICAgICAgLmJvZHktcGFydHMgLnMtaW9uLWljb257XHJcbiAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgfVxyXG5cclxuICAgICAgIC5ib2R5LXBhcnRzIGlvbi1pdGVte1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tZGV0YWlsLWljb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAtLWRldGFpbC1pY29uLW9wYWNpdHk6IDE7XHJcbiAgICAgICAgLS1kZXRhaWwtaWNvbi10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tYXZhdGFyIGltZyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIH1cclxuXHJcbiAgICAuYm9keS1wYXJ0cyBpb24tYXZhdGFye1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA5MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWF4LWhlaWdodDogOThweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwIDE1cHggMHB4IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5ib2R5LXBhcnRzICAgaW9uLWl0ZW0gaW9uLWxhYmVsLCAgICAuYm9keS1wYXJ0cyBpb24tbGFiZWx7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUHJveGltYS1ib2xkJztcclxuICAgIH1cclxuXHJcbiAgICAud29ya291dC1leGVyY2lzZXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmV4ZXItaW5mbyBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzk3OTc5NztcclxuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ051bml0by1saWdodCc7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAud29ya291dC1leGVyY2lzZSBpb24taXRlbXtcclxuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggO1xyXG4gICAgICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgICAuZnVydGhlci1pbmZvIHB7XHJcbiAgICAgICAgY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUHJveGltYS1yZWd1bGFyJztcclxuICAgICAgICAtLXBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmZ1cnRoZXItaW5mbyAgc3BhbntcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTIzcHggIWltcG9ydGFudDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcblxyXG4gICAgLmZ1cnRoZXItaW5mbyAuZXhlci10aXRsZXtcclxuICAgICAgICBjb2xvcjogI2ZhZmFmYTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdQcm94aW1hLWJvbGQnO1xyXG4gICAgfVxyXG5cclxuICAgIC5mdXJ0aGVyLWluZm8gLnN1YnRpdGxle1xyXG4gICAgICAgIGNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ1Byb3hpbWEtYm9sZCc7XHJcbiAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyODBweCkge1xyXG4gICAgICAgIC5ib2R5LXBhcnRzIC5leGVyLWluZm8gaW9uLWxhYmVse1xyXG4gICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgIH1cclxuICAgXHJcbiAgICAgICAgICAgLmJvZHktcGFydHMgaW9uLWF2YXRhcntcclxuICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHggMCAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgIG1heC13aWR0aDogNzVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgIH1cclxuICAgXHJcbiAgICAgICAgICAgLmJvZHktcGFydHMgLmFycm93LWljb257XHJcbiAgICAgICAgICAgICAgIHJpZ2h0OiAyJTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgIFxyXG4gICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNTBweCkge1xyXG4gICAgICAgIC5ib2R5LXBhcnRzICAgaW9uLWF2YXRhcntcclxuICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/eequipments/eequipments.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/eequipments/eequipments.page.ts ***!
  \*******************************************************/
/*! exports provided: EequipmentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EequipmentsPage", function() { return EequipmentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _services_admob_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/admob.service */ "./src/app/services/admob.service.ts");







var EequipmentsPage = /** @class */ (function () {
    function EequipmentsPage(dataService, router, route, plt, admob) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.plt = plt;
        this.admob = admob;
        this.show = {};
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_5__["strings"];
        this.exercises = [];
        this.isLoading = false;
        this.isInfoHidden = true;
        this.exercise2 = {};
        this.exercise = {};
        this.isInstruHidden = true;
        this.isTipsHidden = true;
        this.orientation = 'landscape';
    }
    EequipmentsPage.prototype.ngOnInit = function () {
        this.admob.BannerAd();
    };
    // tslint:disable-next-line: use-lifecycle-interface
    EequipmentsPage.prototype.ngOnDestroy = function () {
        this.admob.HideBannerAd();
    };
    EequipmentsPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
    EequipmentsPage.prototype.goBack = function () {
        this.router.navigate(['/home']);
    };
    EequipmentsPage.prototype.toggleInfo = function (index, id) {
        var _this = this;
        this.dataService.getDataExerciseById(id)
            .subscribe(function (resp) {
            _this.exercise2 = resp[0];
            _this.isLoading = false;
        });
        this.show[index] = true;
    };
    EequipmentsPage.prototype.getExercises = function () {
        var _this = this;
        this.dataService.getDataExercisesByEquipment(this.id)
            .subscribe(function (resp) {
            _this.exercises = resp;
            _this.isLoading = false;
        });
    };
    EequipmentsPage.ctorParameters = function () { return [
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _services_admob_service__WEBPACK_IMPORTED_MODULE_6__["AdmobService"] }
    ]; };
    EequipmentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-eequipments',
            template: __webpack_require__(/*! raw-loader!./eequipments.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/eequipments/eequipments.page.html"),
            styles: [__webpack_require__(/*! ./eequipments.page.scss */ "./src/app/pages/eequipments/eequipments.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _services_admob_service__WEBPACK_IMPORTED_MODULE_6__["AdmobService"]])
    ], EequipmentsPage);
    return EequipmentsPage;
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
//# sourceMappingURL=pages-eequipments-eequipments-module-es5.js.map