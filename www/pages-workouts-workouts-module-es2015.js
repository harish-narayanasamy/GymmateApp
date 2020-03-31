(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-workouts-workouts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/workouts/workouts.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/workouts/workouts.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\r\n  <ion-toolbar mode=\"ios\" class=\"ion-color\" [style.background-color]=\"customColor\">\r\n    <ion-title class=\"ion-text-capitalize\">\r\n      {{strings.ST1}}\r\n    </ion-title>\r\n    <!--<ion-buttons slot=\"start\">\r\n              <app-backbutton color=\"dark\"></app-backbutton>\r\n            </ion-buttons>\r\n            -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fixed class=\"ion-color\" [style.background-color]=\"customColor\">\r\n\r\n  <ion-grid>\r\n\r\n    <ion-row class=\"scroll\">\r\n      <ion-col>\r\n        <div class=\"card-center-image today-info\">\r\n          <div class=\"card-center-bg\">\r\n            <div class=\"card-center-text\">\r\n              <p class=\"today\">Today's motivation</p>\r\n              <img src=\"./assets/images/top_header.png\" class=\"workout-head\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <div class=\"card-center-image today-info\">\r\n          <div class=\"card-center-bg\">\r\n            <div class=\"card-center-text\">\r\n              <p class=\"today\">Workout based on Levels</p>\r\n              <div class=\"scrolling-wrapper\">\r\n\r\n                <ion-col *ngFor=\"let item of levels\" [routerLink]=\"['/wlevels', item.level_id, item.level_title]\"  >\r\n\r\n                \r\n\r\n                  <div class=\"card\" >   <img src =\"http://hosting.lakeba.com:8092/images/{{item.level_image}}\" class=\"workout-slide\"/> </div>\r\n\r\n                </ion-col>\r\n\r\n\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"workout-info\">\r\n      <ion-col>\r\n        <div class=\"card-center-image\">\r\n          <div class=\"card-center-bg\">\r\n            <div class=\"card-center-text view-all\">\r\n              <p class=\"today\">Workout based on Goals</p>\r\n              <p class=\"info2\" [routerLink]=\"['/goals']\">View all</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"workout-level\">\r\n      <ion-col [routerLink]=\"['/goals']\" class=\"goals goals-info\">\r\n        <div class=\"card-center-image\" style=\"background-image: url('./assets/images/goals.jpg');\">\r\n          <div class=\"card-center-bg\">\r\n            <div class=\"card-center-text\">\r\n              <p class=\"title \">Fat Loss</p>\r\n              <p class=\"subtitle\">Beginner 7 min</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"workout-level\">\r\n      <ion-col [routerLink]=\"['/goals']\" class=\"goals\">\r\n        <div class=\"card-center-image\" style=\"background-image: url('http://hosting.lakeba.com:8092/images/goal_1516827137.jpg');\">\r\n          <div class=\"card-center-bg\">\r\n            <div class=\"card-center-text\">\r\n              <p class=\"title\">Build Muscle</p>\r\n              <p class=\"subtitle\">Intermediate 10 min</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"workout-level\">\r\n      <ion-col [routerLink]=\"['/goals']\" class=\"goals\">\r\n        <div class=\"card-center-image\" style=\"background-image: url('http://hosting.lakeba.com:8092/images/goal_1516827143.jpg');\">\r\n          <div class=\"card-center-bg\">\r\n            <div class=\"card-center-text\">\r\n              <p class=\"title\">Transform</p>\r\n              <p class=\"subtitle\">Transform 7 min</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/workouts/workouts-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/workouts/workouts-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: WorkoutsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutsPageRoutingModule", function() { return WorkoutsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _workouts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./workouts.page */ "./src/app/pages/workouts/workouts.page.ts");




const routes = [
    {
        path: '',
        component: _workouts_page__WEBPACK_IMPORTED_MODULE_3__["WorkoutsPage"]
    }
];
let WorkoutsPageRoutingModule = class WorkoutsPageRoutingModule {
};
WorkoutsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WorkoutsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/workouts/workouts.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/workouts/workouts.module.ts ***!
  \***************************************************/
/*! exports provided: WorkoutsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutsPageModule", function() { return WorkoutsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _workouts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./workouts-routing.module */ "./src/app/pages/workouts/workouts-routing.module.ts");
/* harmony import */ var _workouts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./workouts.page */ "./src/app/pages/workouts/workouts.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let WorkoutsPageModule = class WorkoutsPageModule {
};
WorkoutsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _workouts_routing_module__WEBPACK_IMPORTED_MODULE_5__["WorkoutsPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_workouts_page__WEBPACK_IMPORTED_MODULE_6__["WorkoutsPage"]]
    })
], WorkoutsPageModule);



/***/ }),

/***/ "./src/app/pages/workouts/workouts.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/workouts/workouts.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  height: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding-top: 20px;\n  padding-bottom: 25px;\n  max-width: 90%;\n  margin: 0 auto; }\n  ion-grid ion-row {\n    -webkit-box-flex: 1;\n            flex-grow: 1;\n    height: auto; }\n  ion-content {\n  background: #191919; }\n  ion-header {\n  background-color: #191919;\n  height: 100%;\n  padding: 10px 0 10px 0 !important;\n  height: auto; }\n  .ion-text-capitalize {\n  width: 100%;\n  color: #eafff7;\n  font-family: Proxima-bold;\n  font-size: 32px !important;\n  line-height: 32px;\n  text-transform: none !important;\n  padding: 0 5%;\n  text-align: left; }\n  ion-col {\n  min-height: 150px; }\n  .today {\n  color: #e0e0e0;\n  font-family: 'Proxima-semi';\n  line-height: 24px;\n  font-size: 20px;\n  text-align: left;\n  margin-top: 0px;\n  width: 100%; }\n  .workout-info .today {\n  width: 75%; }\n  .view-all .today {\n  margin: 0px; }\n  .today-info .card-center-bg {\n  padding: 0px !important;\n  background: none; }\n  .workout-info .card-center-bg, .workout-info .card-center-image, .workout-info ion-col {\n  min-height: auto !important;\n  background: none !important;\n  padding: 0px !important; }\n  .workout-slide {\n  height: 250px;\n  width: 180px;\n  margin: 0 10px; }\n  .scrolling-wrapper {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n  margin: 0 -10px 40px -10px; }\n  .scrolling-wrapper .card {\n    display: inline-block; }\n  .card-center-bg {\n  -webkit-box-pack: left !important;\n          justify-content: left !important; }\n  .card-center-text {\n  text-align: left !important; }\n  .goals .card-center-text {\n  position: absolute;\n  bottom: 10px; }\n  .card-center-text .title {\n  color: white;\n  margin: 0;\n  font-size: 30px !important;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 30px;\n  letter-spacing: 1px;\n  font-family: 'Gilroy-blacktalic' !important;\n  text-transform: none !important; }\n  .card-center-text .subtitle {\n  color: #fafafa;\n  text-transform: none !important;\n  font-size: 14px;\n  font-family: 'Nunito';\n  line-height: 18px; }\n  ion-row:nth-last-child(1) ion-col {\n  margin-bottom: 35px !important; }\n  .view-all {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  width: 100% !important;\n  margin-bottom: 20px; }\n  .info2 {\n  width: 25%;\n  text-align: right !important;\n  margin: 0px !important;\n  font-size: 16px;\n  line-height: 24px;\n  font-family: 'Proxima-semi';\n  color: #f7474f; }\n  .goals ion-col {\n  min-height: 150px; }\n  .goals-info ion-col {\n  min-height: auto; }\n  .scroll ion-col {\n  margin-bottom: 35px !important;\n  padding-left: 0; }\n  .goals {\n  margin-bottom: 15px;\n  padding: 0px !important; }\n  ion-col {\n  padding-right: 0;\n  padding-left: 0; }\n  @media only screen and (max-width: 320px) {\n  ion-grid {\n    max-width: 95%; } }\n  @media only screen and (max-width: 260px) {\n  .workout-info .today {\n    width: 65%; }\n  .info2 {\n    width: 35%; }\n  .today {\n    font-size: 18px;\n    line-height: 20px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd29ya291dHMvQzpcXFVzZXJzXFxIYXJpc2hcXExvY2FsX2RldlxcR3ltbWF0ZUFwcC9zcmNcXGFwcFxccGFnZXNcXHdvcmtvdXRzXFx3b3Jrb3V0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsY0FBYyxFQUFBO0VBUGxCO0lBVVEsbUJBQVk7WUFBWixZQUFZO0lBQ1osWUFBWSxFQUFBO0VBSWxCO0VBQ0UsbUJBQW1CLEVBQUE7RUFHdkI7RUFDSSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxZQUFhLEVBQUE7RUFHakI7RUFDSSxXQUFXO0VBQ1gsY0FBYztFQUNkLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsZ0JBQWdCLEVBQUE7RUFHaEI7RUFDSSxpQkFBaUIsRUFBQTtFQUdyQjtFQUNJLGNBQWM7RUFDZCwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVcsRUFBQTtFQUdmO0VBQ0ksVUFBVSxFQUFBO0VBR2Q7RUFDSSxXQUFXLEVBQUE7RUFHZjtFQUNJLHVCQUF1QjtFQUN2QixnQkFBZ0IsRUFBQTtFQUdwQjtFQUNJLDJCQUEyQjtFQUMzQiwyQkFBMkI7RUFDM0IsdUJBQXVCLEVBQUE7RUFJM0I7RUFDSSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGNBQWMsRUFBQTtFQUdsQjtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDBCQUEwQixFQUFBO0VBSjlCO0lBT00scUJBQXFCLEVBQUE7RUFJekI7RUFDSSxpQ0FBZ0M7VUFBaEMsZ0NBQWdDLEVBQUE7RUFHcEM7RUFDSSwyQkFBMkIsRUFBQTtFQUloQztFQUNHLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7RUFHZDtFQUNFLFlBQVk7RUFDWixTQUFTO0VBQ1QsMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLDJDQUEyQztFQUMzQywrQkFBK0IsRUFBQTtFQUdqQztFQUNFLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixpQkFBaUIsRUFBQTtFQUdyQjtFQUNJLDhCQUE4QixFQUFBO0VBS2xDO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG1CQUFtQixFQUFBO0VBR3ZCO0VBQ0ksVUFBVTtFQUNWLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0IsY0FBYyxFQUFBO0VBSWxCO0VBQ0ksaUJBQWlCLEVBQUE7RUFHckI7RUFDSSxnQkFBZ0IsRUFBQTtFQUdwQjtFQUNJLDhCQUE4QjtFQUM5QixlQUFlLEVBQUE7RUFHbkI7RUFDSSxtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7RUFHM0I7RUFDSSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0VBSW5CO0VBQ0k7SUFDSSxjQUFjLEVBQUEsRUFDakI7RUFHTDtFQUNFO0lBQ0ksVUFBVSxFQUFBO0VBRWQ7SUFDSSxVQUFVLEVBQUE7RUFHZDtJQUNJLGVBQWU7SUFDZixpQkFBaUIsRUFBQSxFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dvcmtvdXRzL3dvcmtvdXRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlkIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgaW9uLXJvdyB7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICB9XHJcbiBcclxuICBpb24tY29udGVudHtcclxuICAgIGJhY2tncm91bmQ6ICMxOTE5MTk7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxOTE5MTkgO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweCAwIDEwcHggMCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBhdXRvIDtcclxufVxyXG5cclxuLmlvbi10ZXh0LWNhcGl0YWxpemV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjZWFmZmY3O1xyXG4gICAgZm9udC1mYW1pbHk6IFByb3hpbWEtYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMzJweCAhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMCA1JTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNvbHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAudG9kYXl7XHJcbiAgICAgICAgY29sb3I6ICNlMGUwZTA7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQcm94aW1hLXNlbWknO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAud29ya291dC1pbmZvIC50b2RheXtcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgfVxyXG5cclxuICAgIC52aWV3LWFsbCAudG9kYXl7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRvZGF5LWluZm8gLmNhcmQtY2VudGVyLWJne1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLndvcmtvdXQtaW5mbyAuY2FyZC1jZW50ZXItYmcsIC53b3Jrb3V0LWluZm8gLmNhcmQtY2VudGVyLWltYWdlLCAud29ya291dC1pbmZvIGlvbi1jb2x7XHJcbiAgICAgICAgbWluLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLndvcmtvdXQtc2xpZGV7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zY3JvbGxpbmctd3JhcHBlciB7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIG1hcmdpbjogMCAtMTBweCA0MHB4IC0xMHB4O1xyXG4gICAgICBcclxuICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FyZC1jZW50ZXItYmd7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQtY2VudGVyLXRleHR7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgIC5nb2FscyAuY2FyZC1jZW50ZXItdGV4dHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgIC5jYXJkLWNlbnRlci10ZXh0IC50aXRsZXtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnR2lscm95LWJsYWNrdGFsaWMnICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQtY2VudGVyLXRleHQgLnN1YnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogI2ZhZmFmYTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ051bml0byc7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLXJvdzpudGgtbGFzdC1jaGlsZCgxKSBpb24tY29se1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgXHJcblxyXG4gICAgLnZpZXctYWxse1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm8ye1xyXG4gICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ1Byb3hpbWEtc2VtaSc7XHJcbiAgICAgICAgY29sb3I6ICNmNzQ3NGY7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5nb2FscyBpb24tY29se1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5nb2Fscy1pbmZvIGlvbi1jb2x7XHJcbiAgICAgICAgbWluLWhlaWdodDogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAuc2Nyb2xsIGlvbi1jb2x7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuZ29hbHN7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tY29se1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgICAgICAgaW9uLWdyaWR7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogOTUlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2MHB4KSB7XHJcbiAgICAgIC53b3Jrb3V0LWluZm8gLnRvZGF5e1xyXG4gICAgICAgICAgd2lkdGg6IDY1JTtcclxuICAgICAgfVxyXG4gICAgICAuaW5mbzJ7XHJcbiAgICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudG9kYXl7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/workouts/workouts.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/workouts/workouts.page.ts ***!
  \*************************************************/
/*! exports provided: WorkoutsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutsPage", function() { return WorkoutsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let WorkoutsPage = class WorkoutsPage {
    constructor(router, DataService, plt) {
        this.router = router;
        this.DataService = DataService;
        this.plt = plt;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
        this.levels = [];
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.height = this.plt.height() / 4.4 + 'px';
        this.DataService.getDataLevels()
            .subscribe(resp => {
            this.levels = resp;
            if (this.levels.length === 0) {
                this.height = '167.px';
            }
            else if (this.levels.length === 3 || this.levels.length === 2) {
                this.height = 'inherit !important';
            }
            else if (this.levels.length >= 4) {
                this.height = this.plt.height() / 4.4 + 'px';
            }
            this.isLoading = false;
        });
    }
};
WorkoutsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
WorkoutsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-workouts',
        template: __webpack_require__(/*! raw-loader!./workouts.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/workouts/workouts.page.html"),
        styles: [__webpack_require__(/*! ./workouts.page.scss */ "./src/app/pages/workouts/workouts.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
], WorkoutsPage);



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
//# sourceMappingURL=pages-workouts-workouts-module-es2015.js.map