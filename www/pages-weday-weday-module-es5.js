(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-weday-weday-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/weday/weday.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/weday/weday.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header  class=\"lightheader\" mode=\"ios\" no-border>\r\n  <ion-toolbar mode=\"ios\" class=\"ion-color\" [style.background-color]=\"customColor\">\r\n      <ion-title class=\"ion-text-capitalize\">\r\n        {{strings.ST87}} {{day}}\r\n      </ion-title>\r\n       \r\n        <ion-buttons slot=\"start\">\r\n          <app-backbutton color=\"primary\"></app-backbutton>\r\n        </ion-buttons>\r\n              <ion-buttons slot=\"end\">\r\n                <ion-button  slot=\"start\" [routerLink]=\"['/tabs/tab1']\">\r\n                  <img src=\"./assets/images/close.png\" class=\"close-img\"/> \r\n                  </ion-button>\r\n              </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n\r\n  \r\n  <ion-grid class=\"ion-no-padding header-info\">\r\n\r\n        <ion-list lines=\"none\" class=\"ion-padding-top\">\r\n          <ng-container *ngFor=\"let item of exercises; index as i;\">\r\n      \r\n      \r\n            <ion-item class=\"ion-color\" [style.background-color]=\"customColor\">\r\n              <div class=\" body-parts\">\r\n                    <div class=\"tags\"  (click)=toggleInfo(i,item.exercise_id)>\r\n          \r\n                      <ion-avatar slot=\"start\">\r\n                        <img class=\"exer-img\" [src]=\"item.exercise_image | image\">\r\n\r\n          \r\n                      </ion-avatar>\r\n                      <div class=\"exer-info\">\r\n                        <ion-label>{{item.exercise_title}}</ion-label>\r\n          \r\n                        <ion-icon  *ngIf=\"enabledID!=i\" name=\"arrow-down\" slot=\"end\" class=\"arrow-icon\"></ion-icon>\r\n                        <ion-icon *ngIf=\"enabledID==i\" name=\"arrow-up\" slot=\"end\" class=\"arrow-icon\"></ion-icon>                      </div>\r\n          \r\n                    </div>\r\n          \r\n                    <div *ngIf=\"enabledID==i\" class=\"animated fadeIn subinfo\">\r\n                      <div class=\"test\">\r\n              \r\n                        <div class=\"further-info\">\r\n\r\n                          <p class=\"exer-title\">{{item.exercise_title}}</p>\r\n                          <p class=\"subtitle\">{{exercise2.level_title}}</p>\r\n                          <p>{{exercise2.exercise_reps}} Reps - {{exercise2.exercise_sets}} Sets</p>\r\n          \r\n                          <p><span [innerHTML]=\"exercise2.exercise_instructions\"></span></p>\r\n                          <ion-footer mode=\"ios\" no-border>\r\n                            <ion-button (click)=\"play()\" class=\"primary ion-text-uppercase ion-text-bold\" mode=\"ios\"\r\n                              expand=\"block\">\r\n                              {{strings.ST102}}\r\n                              <ion-icon slot=\"start\" name=\"md-arrow-dropright-circle\"></ion-icon>\r\n                            </ion-button>\r\n                          </ion-footer>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n              \r\n                </div>\r\n      \r\n            </ion-item>\r\n            \r\n          </ng-container>\r\n        </ion-list>\r\n      </ion-grid>\r\n\r\n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/weday/weday-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/weday/weday-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: WedayPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WedayPageRoutingModule", function() { return WedayPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _weday_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weday.page */ "./src/app/pages/weday/weday.page.ts");




var routes = [
    {
        path: '',
        component: _weday_page__WEBPACK_IMPORTED_MODULE_3__["WedayPage"]
    }
];
var WedayPageRoutingModule = /** @class */ (function () {
    function WedayPageRoutingModule() {
    }
    WedayPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], WedayPageRoutingModule);
    return WedayPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/weday/weday.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/weday/weday.module.ts ***!
  \*********************************************/
/*! exports provided: WedayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WedayPageModule", function() { return WedayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _weday_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weday-routing.module */ "./src/app/pages/weday/weday-routing.module.ts");
/* harmony import */ var _weday_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./weday.page */ "./src/app/pages/weday/weday.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









var WedayPageModule = /** @class */ (function () {
    function WedayPageModule() {
    }
    WedayPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _weday_routing_module__WEBPACK_IMPORTED_MODULE_5__["WedayPageRoutingModule"]
            ],
            declarations: [_weday_page__WEBPACK_IMPORTED_MODULE_6__["WedayPage"]]
        })
    ], WedayPageModule);
    return WedayPageModule;
}());



/***/ }),

/***/ "./src/app/pages/weday/weday.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/weday/weday.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  background-color: #191919;\n  padding-top: 5px;\n  height: 100%; }\n\nion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 90px !important;\n  max-height: 98px !important;\n  border-radius: 0;\n  margin: 0 15px 0px 0 !important; }\n\nion-avatar img {\n  border-radius: 0; }\n\nion-item ion-label, .exer-info ion-label {\n  padding-left: 0px;\n  white-space: normal !important;\n  color: #ffffff !important;\n  font-size: 18px;\n  line-height: 20px;\n  font-family: 'Proxima-bold'; }\n\nion-item {\n  border-bottom: 1px solid #eee !important; }\n\nion-item {\n  --background-focused: #191919 !important;\n  --background-activated: #191919 !important;\n  --detail-icon-color: transparent;\n  --detail-icon-opacity: 1;\n  background: none !important;\n  border: none !important; }\n\n.item-native {\n  background-color: #191919 !important;\n  display: none !important; }\n\n.disabled {\n  opacity: 1;\n  position: relative;\n  z-index: 1000;\n  -webkit-filter: blur(1px);\n          filter: blur(1px); }\n\n.item-native {\n  background-color: #454545; }\n\n.in-toolbar {\n  padding: 30px 0 00px 0 !important;\n  background: #191919; }\n\n.ion-page .in-toolbar .toolbar-background {\n  background: transparent !important; }\n\nion-content {\n  background: #191919; }\n\nion-list {\n  background-color: #191919;\n  padding-top: 12px; }\n\nion-item {\n  --background: none !important;\n  margin-bottom: 20px !important;\n  --padding-start: 0px !important;\n  --inner-padding-end: 0px !important;\n  max-width: 90%;\n  margin: 0 auto;\n  border-radius: 5px; }\n\n.body-img {\n  width: 90px;\n  height: 98px; }\n\n.ion-text-capitalize {\n  width: 100%;\n  color: #f7474f;\n  font-family: Proxima-bold;\n  font-size: 20px !important;\n  text-transform: none !important; }\n\np {\n  color: #ffffff;\n  margin: 5px 0;\n  font-size: 16px;\n  line-height: normal;\n  letter-spacing: normal;\n  font-family: 'Muli-light'; }\n\n.body-info {\n  position: absolute;\n  top: 20px; }\n\nion-item {\n  --background-focused: #fff !important;\n  --background-activated: #fff !important;\n  --detail-icon-color: var(--ion-color-primary);\n  --detail-icon-opacity: 1;\n  --detail-icon-transform: rotate(90deg) !important; }\n\n.body-info p, .exer-info p {\n  font-size: 16px;\n  color: #979797;\n  line-height: 16px;\n  font-family: 'Nunito-light'; }\n\n.arrow {\n  color: #f7474f !important; }\n\n.tags {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  max-width: 100%;\n  border: 1px solid #313235;\n  border-radius: 5px; }\n\n.exer-img {\n  width: 98px;\n  height: 90px;\n  display: block; }\n\n.exer-info {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 50%; }\n\n.arrow-icon {\n  position: absolute;\n  right: 4%;\n  width: 20px;\n  height: 20px;\n  color: #8d8a8a !important; }\n\n.subinfo {\n  max-width: 100%;\n  margin: 0 auto;\n  width: 100%;\n  margin-top: 10px; }\n\nion-list .further-info {\n  margin: 0 auto;\n  border: 1px solid #313235;\n  border-top: none;\n  padding: 5%; }\n\n.exer-title {\n  color: #fafafa;\n  line-height: 26px;\n  font-size: 22px;\n  font-family: 'Proxima-bold'; }\n\n.subinfo .subtitle {\n  color: #fafafa;\n  line-height: 20px;\n  font-size: 16px;\n  font-family: 'Muli-Regular'; }\n\n.sub-img {\n  display: block;\n  margin-top: -3px;\n  border-right: 1px solid #313235;\n  border-left: 1px solid #313235; }\n\n.body-parts {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: normal !important;\n          flex-direction: column !important;\n  --display: flex !important;\n  --flex-direction: column !important;\n  width: 100%; }\n\n.close-img {\n  max-width: 16px;\n  max-height: 16px; }\n\n.further-info p {\n  color: #fafafa;\n  line-height: 20px;\n  font-size: 16px;\n  font-family: 'Proxima-regular';\n  --padding-inline-start: 0px !important;\n  -webkit-padding-start: 0px !important;\n          padding-inline-start: 0px !important; }\n\n.further-info span {\n  margin-left: -23px !important;\n  display: block; }\n\n.further-info .exer-title {\n  color: #fafafa;\n  line-height: 24px;\n  font-size: 20px;\n  font-family: 'Proxima-bold'; }\n\n.further-info .subtitle {\n  color: #fafafa;\n  line-height: 20px;\n  font-size: 16px;\n  font-family: 'Proxima-bold'; }\n\n.body-parts2 .animated {\n  width: 100%;\n  margin-top: -13px; }\n\n.body-parts2 .tags {\n  margin-bottom: 10px; }\n\n.list-ios {\n  margin-bottom: 0px !important; }\n\n.play-button {\n  margin: 10px 0; }\n\n.cols {\n  background-color: var(--ion-color-primary);\n  padding: 10px 0; }\n\n.cols .text {\n  color: #ffffff;\n  font-weight: bold;\n  text-transform: uppercase;\n  margin: 0;\n  padding-bottom: 5px; }\n\n.cols .value {\n  text-transform: uppercase;\n  margin: 0;\n  color: #ffffff;\n  font-size: 14px;\n  opacity: 0.7; }\n\n.days {\n  padding: 16px; }\n\n.tags {\n  background-color: #f9f9f9;\n  padding: 15px;\n  position: relative;\n  margin-bottom: 10px; }\n\n.tags h1 {\n  font-size: 13px;\n  text-transform: uppercase;\n  font-weight: bold;\n  margin: 0; }\n\n.tags ion-icon {\n  position: absolute;\n  font-size: 22px; }\n\n.ion-text-capitalize {\n  width: 100%;\n  color: #f7474f;\n  font-family: Proxima-bold;\n  font-size: 20px !important;\n  text-transform: none !important; }\n\n.arrow {\n  color: #f7474f !important; }\n\n.in-toolbar {\n  padding: 20px 0 10px 0 !important;\n  background: #191919; }\n\n.ion-page .in-toolbar .toolbar-background {\n  background: transparent !important; }\n\nion-content {\n  background: #191919 !important; }\n\n.header-info ion-row, .days {\n  max-width: 90%;\n  margin: 0 auto !important;\n  height: auto !important; }\n\n.days {\n  max-width: 100%; }\n\n.name {\n  font-size: 30px;\n  line-height: 35px;\n  font-family: 'Proxima-bold';\n  color: #fafafa;\n  margin-bottom: 0px;\n  margin-top: 0px;\n  width: 100%; }\n\n.author, .further-info {\n  font-size: 16px;\n  line-height: 20px;\n  font-family: 'Nunito';\n  color: #fafafa;\n  margin-top: 5px;\n  margin-bottom: 25px; }\n\n.level-info {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  background-color: #313235;\n  border-radius: 5px;\n  max-width: 95%;\n  padding: 5px 15px;\n  margin-bottom: 10px; }\n\n.level-logo {\n  max-width: 25px;\n  max-height: 25px; }\n\n.task, .task-info {\n  color: #fafafa;\n  font-size: 16px;\n  line-height: 20px;\n  font-family: 'Nunito-bold';\n  margin: 0px; }\n\n.task {\n  margin: 0 16px 0px 8px; }\n\n.text {\n  margin-bottom: 40px;\n  width: 100%; }\n\n.exercise-header {\n  color: #efeeee;\n  font-size: 22px;\n  line-height: 26px;\n  font-family: 'Proxima-semi';\n  margin: 0px;\n  text-align: left; }\n\n.title-info {\n  margin-top: 35px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row; }\n\n.star {\n  padding-left: 5px;\n  margin-left: auto; }\n\n.close-img {\n  max-width: 16px;\n  max-height: 16px; }\n\n.tags {\n  background-color: #313235;\n  padding: 0px;\n  position: relative;\n  margin-bottom: 10px;\n  border-radius: 5px; }\n\n.tags h1 {\n  font-size: 16px;\n  text-transform: uppercase;\n  font-weight: bold;\n  margin: 0;\n  font-family: 'Proxima-bold';\n  color: #aeabab;\n  line-height: 18px; }\n\n.days {\n  padding: 40px 5%;\n  background-color: #191919; }\n\n.tags ion-icon {\n  font-size: 22px; }\n\n.arrow, .tags {\n  --color: #aeabab !important;\n  color: #aeabab !important; }\n\nion-list .further-info, ion-list .tags {\n  margin-bottom: 0px; }\n\n.click-button {\n  display: -webkit-box;\n  display: flex;\n  text-align: center;\n  max-width: 90%;\n  margin: 0 auto;\n  background: #313235;\n  border-radius: 5px;\n  margin-bottom: 30px; }\n\n.multiple {\n  background-color: #979797; }\n\n.click-button p {\n  width: 50%;\n  padding: 20px 0;\n  margin: 0px;\n  border-radius: 5px;\n  font-family: 'Proxima-bold';\n  font-size: 16px;\n  line-height: 18px; }\n\n.play-button {\n  margin: 25px 0; }\n\n.body-parts2 {\n  width: 100%; }\n\n.body-parts2 .exer-title {\n  font-size: 24px;\n  line-height: 28px;\n  color: #ffffff;\n  font-family: 'Proxima-bold'; }\n\n.body-parts2 .subtitle {\n  font-size: 16px;\n  line-height: 20px;\n  color: #fafafa;\n  font-family: 'Muli-Regular';\n  font-weight: bold; }\n\n.body-parts2 .detail-info .sub-info {\n  color: #fafafa; }\n\n.body-parts .body-parts2 {\n  margin-bottom: 10px !important; }\n\n.animated .body-parts2 .tags {\n  padding: 0px !important; }\n\n.animated .body-parts2 .tags ion-icon {\n  top: inherit !important; }\n\n.arrow-back {\n  font-size: 22px !important; }\n\n.week-exercise {\n  font-family: 'Proxima-semi';\n  font-size: 18px;\n  line-height: 22px;\n  color: #efeeee;\n  text-align: left;\n  padding: 0; }\n\n@media only screen and (max-width: 320px) {\n  .task, .task-info {\n    font-size: 14px;\n    line-height: 16px; }\n  .task {\n    margin-right: 10px; }\n  .level-logo {\n    max-width: 18px;\n    max-height: 18px; }\n  .level-info {\n    max-width: 100%;\n    padding: 5px 10px; }\n  .animated .body-parts2 .tags ion-icon {\n    right: 4px; } }\n\n@media only screen and (max-width: 280px) {\n  ion-item ion-label, .exer-info ion-label {\n    font-size: 16px;\n    line-height: 18px; }\n  ion-avatar {\n    margin: 0 10px 0 0 !important;\n    max-width: 75px !important; }\n  .arrow-icon {\n    right: 2%; }\n  .level-info {\n    padding: 5px 8px; }\n  .level-logo {\n    max-width: 16px;\n    max-height: 16px; }\n  .animated .body-parts2 .tags ion-icon {\n    right: 2px; } }\n\n@media only screen and (max-width: 250px) {\n  ion-avatar {\n    max-width: 70px !important; }\n  .level-info {\n    padding: 5px; }\n  .task, .task-info {\n    font-size: 12px;\n    line-height: 14px; } }\n\n.further-info {\n  margin: 0 auto;\n  border: 1px solid #313235;\n  border-top: none;\n  padding: 5%; }\n\n.further-info p {\n  color: #fafafa;\n  line-height: 20px;\n  font-size: 16px;\n  font-family: 'Proxima-regular';\n  --padding-inline-start: 0px !important;\n  -webkit-padding-start: 0px !important;\n          padding-inline-start: 0px !important; }\n\n.further-info span {\n  margin-left: -23px !important;\n  display: block; }\n\n.further-info .exer-title {\n  color: #fafafa;\n  line-height: 24px;\n  font-size: 20px;\n  font-family: 'Proxima-bold'; }\n\n.further-info .subtitle {\n  color: #fafafa;\n  line-height: 20px;\n  font-size: 16px;\n  font-family: 'Proxima-bold'; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2VkYXkvQzpcXFVzZXJzXFxIYXJpc2hcXExvY2FsX2RldlxcR3ltbWF0ZUFwcC9zcmNcXGFwcFxccGFnZXNcXHdlZGF5XFx3ZWRheS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLCtCQUErQixFQUFBOztBQUduQztFQUNJLGdCQUFnQixFQUFBOztBQUlwQjtFQUNJLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksd0NBQXdDLEVBQUE7O0FBRzVDO0VBQ0ksd0NBQXFCO0VBQ3JCLDBDQUF1QjtFQUN2QixnQ0FBb0I7RUFDcEIsd0JBQXNCO0VBRXRCLDJCQUEyQjtFQUMzQix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxvQ0FBb0M7RUFDcEMsd0JBQXdCLEVBQUE7O0FBRTVCO0VBRUksVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IseUJBQWlCO1VBQWpCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLHlCQUF3QixFQUFBOztBQUc1QjtFQUNJLGlDQUFpQztFQUNqQyxtQkFBbUIsRUFBQTs7QUFHdkI7RUFHUSxrQ0FBa0MsRUFBQTs7QUFLeEM7RUFDRSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSx5QkFBeUI7RUFDekIsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksNkJBQWE7RUFDYiw4QkFBOEI7RUFDOUIsK0JBQWdCO0VBQ2hCLG1DQUFvQjtFQUNwQixjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUlyQjtFQUNHLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Y7RUFDRyxX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Q0ksZUFBZTtJQUNmLGlCQUFpQixFQUFBO0VBR3JCO0lBQ0ksa0JBQWtCLEVBQUE7RUFHdEI7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7RUFFcEI7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCLEVBQUE7RUFFckI7SUFDQyxVQUFVLEVBQUEsRUFDVjs7QUFFTDtFQUNJO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQixFQUFBO0VBR3JCO0lBQ0ksNkJBQTZCO0lBQzdCLDBCQUEwQixFQUFBO0VBRzlCO0lBQ0ksU0FBUyxFQUFBO0VBRWI7SUFDSSxnQkFBZ0IsRUFBQTtFQUdwQjtJQUNJLGVBQWU7SUFDZixnQkFBZ0IsRUFBQTtFQUVwQjtJQUNJLFVBQVUsRUFBQSxFQUNWOztBQUdSO0VBQ0k7SUFDSSwwQkFBMEIsRUFBQTtFQUU5QjtJQUNJLFlBQVksRUFBQTtFQUVoQjtJQUNJLGVBQWU7SUFDZixpQkFBaUIsRUFBQSxFQUNwQjs7QUFHWDtFQUVFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixzQ0FBdUI7RUFDdkIscUNBQW9DO1VBQXBDLG9DQUFvQyxFQUFBOztBQUd4QztFQUNJLDZCQUE2QjtFQUM3QixjQUFjLEVBQUE7O0FBSWxCO0VBQ0ksY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93ZWRheS93ZWRheS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbmlvbi1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiA5MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtaGVpZ2h0OiA5OHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgbWFyZ2luOiAwIDE1cHggMHB4IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWF2YXRhciBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuXHJcbn1cclxuXHJcbmlvbi1pdGVtIGlvbi1sYWJlbCwgLmV4ZXItaW5mbyBpb24tbGFiZWwge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1Byb3hpbWEtYm9sZCc7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjMTkxOTE5ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMTkxOTE5ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWRldGFpbC1pY29uLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC0tZGV0YWlsLWljb24tb3BhY2l0eTogMTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLml0ZW0tbmF0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5kaXNhYmxlZCB7XHJcbiAgLy8gIHBvaW50ZXItZXZlbnRzOiBub25lOyAvL1RoaXMgbWFrZXMgaXQgbm90IGNsaWNrYWJsZVxyXG4gICAgb3BhY2l0eTogMTsgLy9UaGlzIGdyYXlzIGl0IG91dCB0byBsb29rIGRpc2FibGVkXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgZmlsdGVyOiBibHVyKDFweCk7XHJcbn1cclxuXHJcbi5pdGVtLW5hdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzQ1NDU0NTtcclxufVxyXG5cclxuLmluLXRvb2xiYXJ7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDAgMDBweCAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTkxOTE5O1xyXG59XHJcblxyXG4uaW9uLXBhZ2Uge1xyXG4gICAgLmluLXRvb2xiYXIge1xyXG4gICAgICAudG9vbGJhci1iYWNrZ3JvdW5kIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpb24tY29udGVudHtcclxuICAgIGJhY2tncm91bmQ6ICMxOTE5MTk7XHJcbn1cclxuXHJcbmlvbi1saXN0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMTkxOTE5IDtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG59XHJcbmlvbi1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxufVxyXG5cclxuIC5ib2R5LWltZ3tcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgaGVpZ2h0OiA5OHB4O1xyXG4gfSBcclxuXHJcbiAuaW9uLXRleHQtY2FwaXRhbGl6ZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICNmNzQ3NGY7XHJcbiAgICBmb250LWZhbWlseTogUHJveGltYS1ib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfSAgIFxyXG5cclxuIHB7XHJcbiAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgIGZvbnQtZmFtaWx5OiAnTXVsaS1saWdodCc7XHJcbiB9XHJcblxyXG4gLmJvZHktaW5mb3tcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgdG9wOiAyMHB4O1xyXG4gfVxyXG5cclxuIGlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAtLWRldGFpbC1pY29uLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAtLWRldGFpbC1pY29uLW9wYWNpdHk6IDE7XHJcbiAgICAtLWRldGFpbC1pY29uLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4gLmJvZHktaW5mbyBwLCAuZXhlci1pbmZvIHB7XHJcbiAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgIGNvbG9yOiAjOTc5Nzk3O1xyXG4gICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvLWxpZ2h0JztcclxuXHJcbiB9XHJcblxyXG4gLmFycm93e1xyXG4gICAgIGNvbG9yOiAjZjc0NzRmICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4gLnRhZ3N7XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMxMzIzNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuZXhlci1pbWd7XHJcbiAgICAgICAgd2lkdGg6IDk4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5leGVyLWluZm97XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFycm93LWljb257XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiA0JTtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6IzhkOGE4YSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5zdWJpbmZve1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1saXN0IC5mdXJ0aGVyLWluZm97XHJcbiAgICAgICBcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzEzMjM1O1xyXG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogNSU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5leGVyLXRpdGxle1xyXG4gICAgICAgIGNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ1Byb3hpbWEtYm9sZCc7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1YmluZm8gLnN1YnRpdGxle1xyXG4gICAgICAgIGNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ011bGktUmVndWxhcic7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1Yi1pbWd7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTNweDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzEzMjM1O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzMxMzIzNTtcclxuICAgIH1cclxuXHJcbiAgICAuYm9keS1wYXJ0c3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gICAgICAgLS1kaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1mbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNsb3NlLWltZ3tcclxuICAgICAgICBtYXgtd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAuZnVydGhlci1pbmZvIHB7XHJcbiAgICAgICAgY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUHJveGltYS1yZWd1bGFyJztcclxuICAgICAgICAtLXBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmZ1cnRoZXItaW5mbyAgc3BhbntcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTIzcHggIWltcG9ydGFudDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcblxyXG4gICAgLmZ1cnRoZXItaW5mbyAuZXhlci10aXRsZXtcclxuICAgICAgICBjb2xvcjogI2ZhZmFmYTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdQcm94aW1hLWJvbGQnO1xyXG4gICAgfVxyXG5cclxuICAgIC5mdXJ0aGVyLWluZm8gLnN1YnRpdGxle1xyXG4gICAgICAgIGNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ1Byb3hpbWEtYm9sZCc7XHJcbiAgICB9XHJcblxyXG4gICAgLmJvZHktcGFydHMyIC5hbmltYXRlZHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTNweDtcclxuICAgIH1cclxuXHJcbiAgICAuYm9keS1wYXJ0czIgLnRhZ3N7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAubGlzdC1pb3N7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnBsYXktYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgfVxyXG5cclxuICBcclxuIFxyXG5cclxuLmNvbHN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb2xzIC50ZXh0e1xyXG4gICAgICAgIGNvbG9yOiNmZmZmZmY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIH0gXHJcbiAgICBcclxuICAgIC5jb2xzIC52YWx1ZXtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBjb2xvcjojZmZmZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICB9IFxyXG4gICAgXHJcbiAgICAuZGF5c3tcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGFnc3tcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50YWdzIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbjowO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGFncyBpb24taWNvbntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW9uLXRleHQtY2FwaXRhbGl6ZXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBjb2xvcjogI2Y3NDc0ZjtcclxuICAgICAgICBmb250LWZhbWlseTogUHJveGltYS1ib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfSAgIFxyXG4gICAgXHJcbiAgICAgICAgLmFycm93e1xyXG4gICAgICAgICAgICBjb2xvcjogI2Y3NDc0ZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5pbi10b29sYmFye1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDAgMTBweCAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxOTE5MTk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5pb24tcGFnZSB7XHJcbiAgICAgICAgICAgIC5pbi10b29sYmFyIHtcclxuICAgICAgICAgICAgICAudG9vbGJhci1iYWNrZ3JvdW5kIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICBpb24tY29udGVudHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzE5MTkxOSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5oZWFkZXItaW5mbyBpb24tcm93LCAuZGF5c3tcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRheXN7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgICAgICAubmFtZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQcm94aW1hLWJvbGQnO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZhZmFmYTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYXV0aG9yLCAuZnVydGhlci1pbmZve1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ051bml0byc7XHJcbiAgICBjb2xvcjogI2ZhZmFmYTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLmxldmVsLWluZm97XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzMxMzIzNTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDk1JTtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAubGV2ZWwtbG9nb3tcclxuICAgICAgICAgICBtYXgtd2lkdGg6IDI1cHg7O1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC50YXNrLCAudGFzay1pbmZve1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZhZmFmYTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8tYm9sZCc7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGFza3tcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDE2cHggMHB4IDhweDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAudGV4dHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLmV4ZXJjaXNlLWhlYWRlcntcclxuICAgICAgICAgICAgY29sb3I6ICNlZmVlZWU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUHJveGltYS1zZW1pJztcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLnRpdGxlLWluZm97XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLnN0YXJ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAuY2xvc2UtaW1ne1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIC50YWdze1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMxMzIzNTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC50YWdzIGgxIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUHJveGltYS1ib2xkJztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjYWVhYmFiO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRheXN7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0MHB4IDUlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnRhZ3MgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5hcnJvdywgLnRhZ3N7XHJcbiAgICAgICAgICAgICAgICAtLWNvbG9yOiAjYWVhYmFiICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2FlYWJhYiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24tbGlzdCAuZnVydGhlci1pbmZvLCBpb24tbGlzdCAudGFnc3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIC5jbGljay1idXR0b257XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogIzMxMzIzNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubXVsdGlwbGV7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5Nzk3OTc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jbGljay1idXR0b24gcHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1Byb3hpbWEtYm9sZCc7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucGxheS1idXR0b257XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjVweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYm9keS1wYXJ0czJ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJvZHktcGFydHMyIC5leGVyLXRpdGxle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQcm94aW1hLWJvbGQnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJvZHktcGFydHMyIC5zdWJ0aXRsZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTXVsaS1SZWd1bGFyJztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYm9keS1wYXJ0czIgLmRldGFpbC1pbmZvIC5zdWItaW5mb3tcclxuICAgICAgICAgICAgY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYm9keS1wYXJ0cyAuYm9keS1wYXJ0czJ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hbmltYXRlZCAuYm9keS1wYXJ0czIgLnRhZ3N7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFuaW1hdGVkIC5ib2R5LXBhcnRzMiAudGFncyBpb24taWNvbntcclxuICAgICAgICAgICAgdG9wOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYXJyb3ctYmFja3tcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAud2Vlay1leGVyY2lzZXtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQcm94aW1hLXNlbWknO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2VmZWVlZTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAgICAgICAgICAgLnRhc2ssIC50YXNrLWluZm97XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRhc2t7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5sZXZlbC1sb2dve1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGV2ZWwtaW5mb3tcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hbmltYXRlZCAuYm9keS1wYXJ0czIgLnRhZ3MgaW9uLWljb257XHJcbiAgICAgICAgICAgICByaWdodDogNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjgwcHgpIHtcclxuICAgICAgICAgICAgaW9uLWl0ZW0gaW9uLWxhYmVsLCAuZXhlci1pbmZvIGlvbi1sYWJlbHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgaW9uLWF2YXRhcntcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDAgMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAuYXJyb3ctaWNvbntcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAyJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGV2ZWwtaW5mb3tcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCA4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgICAgICAubGV2ZWwtbG9nb3tcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTZweDtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmFuaW1hdGVkIC5ib2R5LXBhcnRzMiAudGFncyBpb24taWNvbntcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI1MHB4KSB7XHJcbiAgICAgICAgICAgIGlvbi1hdmF0YXJ7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDcwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGV2ZWwtaW5mb3tcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGFzaywgLnRhc2staW5mb3tcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAuZnVydGhlci1pbmZvIHtcclxuXHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMTMyMzU7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgcGFkZGluZzogNSU7XHJcbn1cclxuXHJcbiAgLmZ1cnRoZXItaW5mbyBwIHtcclxuICAgIGNvbG9yOiAjZmFmYWZhO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1Byb3hpbWEtcmVndWxhcic7XHJcbiAgICAtLXBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZ1cnRoZXItaW5mbyBzcGFuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjNweCAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcblxyXG4uZnVydGhlci1pbmZvIC5leGVyLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmFmYWZhO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1Byb3hpbWEtYm9sZCc7XHJcbn1cclxuXHJcbi5mdXJ0aGVyLWluZm8gLnN1YnRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmFmYWZhO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1Byb3hpbWEtYm9sZCc7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/weday/weday.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/weday/weday.page.ts ***!
  \*******************************************/
/*! exports provided: WedayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WedayPage", function() { return WedayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_admob_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/admob.service */ "./src/app/services/admob.service.ts");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "./node_modules/@ionic-native/streaming-media/ngx/index.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");









var WedayPage = /** @class */ (function () {
    function WedayPage(dataService, router, route, plt, streamingMedia, admob, screenOrientation) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.plt = plt;
        this.streamingMedia = streamingMedia;
        this.admob = admob;
        this.screenOrientation = screenOrientation;
        this.enabledID = null;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
        this.exercises = [];
        this.isLoading = false;
        this.show = {};
        this.exercise = {};
        this.isInfoHidden = true;
        this.isInstruHidden = true;
        this.isTipsHidden = true;
        this.orientation = 'landscape';
        this.exercise2 = {};
    }
    WedayPage.prototype.ngOnInit = function () {
        this.admob.BannerAd();
    };
    // tslint:disable-next-line: use-lifecycle-interface
    WedayPage.prototype.ngOnDestroy = function () {
        this.admob.HideBannerAd();
    };
    WedayPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.isLoading = true;
                this.route.params.subscribe(function (data) {
                    _this.id = data.id;
                    _this.day = data.day;
                    _this.getExercises();
                    if (!_this.id) {
                        _this.goBack();
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    WedayPage.prototype.goBack = function () {
        this.router.navigate(['/home']);
    };
    WedayPage.prototype.getExercises = function () {
        var _this = this;
        this.dataService.getDataWorkoutExercisesByDay(this.id, this.day)
            .subscribe(function (resp) {
            _this.exercises = resp;
            _this.isLoading = false;
        });
    };
    WedayPage.prototype.toggleInfo = function (index, id) {
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
    WedayPage.prototype.play = function () {
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
    WedayPage.ctorParameters = function () { return [
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
        { type: _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_7__["StreamingMedia"] },
        { type: _services_admob_service__WEBPACK_IMPORTED_MODULE_6__["AdmobService"] },
        { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__["ScreenOrientation"] }
    ]; };
    WedayPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-weday',
            template: __webpack_require__(/*! raw-loader!./weday.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/weday/weday.page.html"),
            styles: [__webpack_require__(/*! ./weday.page.scss */ "./src/app/pages/weday/weday.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
            _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_7__["StreamingMedia"],
            _services_admob_service__WEBPACK_IMPORTED_MODULE_6__["AdmobService"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__["ScreenOrientation"]])
    ], WedayPage);
    return WedayPage;
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
//# sourceMappingURL=pages-weday-weday-module-es5.js.map