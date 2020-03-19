(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-workouts-workouts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/workouts/workouts.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/workouts/workouts.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\r\n  <ion-toolbar mode=\"ios\" class=\"ion-color\" [style.background-color]=\"customColor\">\r\n      <ion-title class=\"ion-text-capitalize\">\r\n        {{strings.ST1}}\r\n      </ion-title>\r\n      <!--<ion-buttons slot=\"start\">\r\n              <app-backbutton color=\"dark\"></app-backbutton>\r\n            </ion-buttons>\r\n            --> \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fixed class=\"ion-color\" [style.background-color]=\"customColor\">\r\n\r\n    <ion-grid>\r\n      \r\n        <ion-row class=\"scroll\">\r\n          <ion-col >\r\n            <div class=\"card-center-image today-info\">\r\n              <div class=\"card-center-bg\">\r\n                <div class=\"card-center-text\">\r\n                <p class=\"today\">Today's motivation</p>\r\n                <img src=\"./assets/images/top_header.png\" class=\"workout-head\"/>\r\n              </div>\r\n              </div>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col >\r\n            <div class=\"card-center-image today-info\">\r\n              <div class=\"card-center-bg\">\r\n                <div class=\"card-center-text\">\r\n                <p class=\"today\">Workout based on Levels</p>\r\n                <div class=\"scrolling-wrapper\">\r\n                  <div class=\"card\"><img src=\"./assets/images/beginner.png\" class=\"workout-slide\"/></div>\r\n                  <div class=\"card\"><img src=\"./assets/images/inter.png\" class=\"workout-slide\"/></div>\r\n                  <div class=\"card\"><img src=\"./assets/images/level_card.png\" class=\"workout-slide\"/></div>\r\n                  <div class=\"card\"><img src=\"./assets/images/elite.png\" class=\"workout-slide\"/></div>\r\n                </div>\r\n                \r\n              </div>\r\n              </div>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"workout-info\">\r\n          <ion-col>\r\n            <div class=\"card-center-image\">\r\n              <div class=\"card-center-bg\">\r\n                <div class=\"card-center-text view-all\">\r\n                <p class=\"today\">Workout based on Goals</p>\r\n                <p class=\"info2\">View all</p>    \r\n              </div>\r\n              </div>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col [routerLink]=\"['/goals']\" class=\"goals goals-info\">\r\n            <div class=\"card-center-image\" style=\"background-image: url('./assets/images/goals.jpg');\">\r\n              <div class=\"card-center-bg\">\r\n                <div class=\"card-center-text\">\r\n                <p class=\"title \">Fat Loss</p>\r\n                <p class=\"subtitle\">Beginner    7 min</p>\r\n              </div>\r\n              </div>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col [routerLink]=\"['/levels']\" class=\"goals\">\r\n                <div class=\"card-center-image\" style=\"background-image: url('./assets/images/levels.jpg');\">\r\n                    <div class=\"card-center-bg\">\r\n                      <div class=\"card-center-text\">\r\n                        <p class=\"title\">Build Muscle</p>\r\n                        <p class=\"subtitle\">Intermediate    10 min</p>\r\n                    </div>\r\n                    </div>\r\n                  </div>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col [routerLink]=\"['/levels']\" class=\"goals\">\r\n                <div class=\"card-center-image\" style=\"background-image: url('./assets/images/levels.jpg');\">\r\n                    <div class=\"card-center-bg\">\r\n                      <div class=\"card-center-text\">\r\n                          <p class=\"title\">Transform</p>\r\n                          <p class=\"subtitle\">Beginner    7 min</p>\r\n                    </div>\r\n                    </div>\r\n                  </div>\r\n            </ion-col>\r\n          </ion-row>\r\n      </ion-grid>\r\n\r\n</ion-content>"

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

module.exports = "ion-grid {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding-top: 20px;\n  padding-bottom: 25px;\n  max-width: 95%;\n  margin: 0 auto; }\n  ion-grid ion-row {\n    -webkit-box-flex: 1;\n            flex-grow: 1;\n    height: 100%; }\n  ion-content {\n  background: #191919; }\n  ion-header {\n  background-color: #191919;\n  height: 100%;\n  padding: 10px 0 10px 0 !important;\n  height: auto; }\n  .ion-text-capitalize {\n  width: 100%;\n  color: #eafff7;\n  font-family: Proxima-bold;\n  font-size: 32px !important;\n  line-height: 32px;\n  text-transform: none !important;\n  padding: 0 5%;\n  text-align: left; }\n  ion-col {\n  min-height: 150px; }\n  .today {\n  color: #e0e0e0;\n  font-family: 'Proxima-semi';\n  line-height: 24px;\n  font-size: 20px;\n  text-align: left;\n  margin-top: 0px;\n  width: 80%; }\n  .view-all .today {\n  margin: 0px; }\n  .today-info .card-center-bg {\n  padding: 0px !important;\n  background: none; }\n  .workout-info .card-center-bg, .workout-info .card-center-image, .workout-info ion-col {\n  min-height: auto !important;\n  background: none !important;\n  padding: 0px !important; }\n  .workout-slide {\n  height: 250px;\n  width: 180px;\n  margin: 0 10px; }\n  .scrolling-wrapper {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n  margin-bottom: 50px !important; }\n  .scrolling-wrapper .card {\n    display: inline-block; }\n  .card-center-bg {\n  -webkit-box-pack: left !important;\n          justify-content: left !important; }\n  .card-center-text {\n  text-align: left !important; }\n  .goals .card-center-text {\n  position: absolute;\n  bottom: 10px; }\n  .card-center-text .title {\n  color: white;\n  margin: 0;\n  font-size: 30px !important;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 30px;\n  letter-spacing: 1px;\n  font-family: 'Gilroy-blacktalic' !important;\n  text-transform: none !important; }\n  .card-center-text .subtitle {\n  color: #fafafa;\n  text-transform: none !important;\n  font-size: 14px;\n  font-family: 'Nunito';\n  line-height: 18px; }\n  ion-row:nth-last-child(1) ion-col {\n  margin-bottom: 35px !important; }\n  .card:nth-last-child(1) .workout-slide:nth-last-child(1) {\n  margin-right: -10px; }\n  .card:nth-child(1) {\n  margin-left: -10px; }\n  .view-all {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  width: 100% !important;\n  margin-bottom: 20px; }\n  .info2 {\n  width: 20%;\n  text-align: right !important;\n  margin: 0px !important;\n  font-size: 16px;\n  line-height: 24px;\n  font-family: 'Proxima-semi';\n  color: #f7474f; }\n  .goals ion-col {\n  min-height: 150px; }\n  .goals-info ion-col {\n  min-height: auto; }\n  .scroll ion-col {\n  margin-bottom: 35px !important; }\n  .goals {\n  margin-bottom: 15px;\n  padding: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd29ya291dHMvQzpcXFVzZXJzXFxIYXJpc2hcXExvY2FsX2RldlxcR3ltbWF0ZUFwcC9zcmNcXGFwcFxccGFnZXNcXHdvcmtvdXRzXFx3b3Jrb3V0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsY0FBYyxFQUFBO0VBUGxCO0lBVVEsbUJBQVk7WUFBWixZQUFZO0lBQ1osWUFBWSxFQUFBO0VBSWxCO0VBQ0UsbUJBQW1CLEVBQUE7RUFHdkI7RUFDSSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxZQUFhLEVBQUE7RUFHakI7RUFDSSxXQUFXO0VBQ1gsY0FBYztFQUNkLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsZ0JBQWdCLEVBQUE7RUFHaEI7RUFDSSxpQkFBaUIsRUFBQTtFQUdyQjtFQUNJLGNBQWM7RUFDZCwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFVBQVUsRUFBQTtFQUdkO0VBQ0ksV0FBVyxFQUFBO0VBR2Y7RUFDSSx1QkFBdUI7RUFDdkIsZ0JBQWdCLEVBQUE7RUFHcEI7RUFDSSwyQkFBMkI7RUFDM0IsMkJBQTJCO0VBQzNCLHVCQUF1QixFQUFBO0VBSTNCO0VBQ0ksYUFBYTtFQUNiLFlBQVk7RUFDWixjQUFjLEVBQUE7RUFHbEI7RUFDSSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiw4QkFBOEIsRUFBQTtFQUpsQztJQU9NLHFCQUFxQixFQUFBO0VBSXpCO0VBQ0ksaUNBQWdDO1VBQWhDLGdDQUFnQyxFQUFBO0VBR3BDO0VBQ0ksMkJBQTJCLEVBQUE7RUFJaEM7RUFDRyxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBO0VBT2Q7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQiwyQ0FBMkM7RUFDM0MsK0JBQStCLEVBQUE7RUFHakM7RUFDRSxjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsaUJBQWlCLEVBQUE7RUFHckI7RUFDSSw4QkFBOEIsRUFBQTtFQUdsQztFQUNJLG1CQUFtQixFQUFBO0VBR3ZCO0VBQ0ksa0JBQWtCLEVBQUE7RUFHdEI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsbUJBQW1CLEVBQUE7RUFHdkI7RUFDSSxVQUFVO0VBQ1YsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixjQUFjLEVBQUE7RUFJbEI7RUFDSSxpQkFBaUIsRUFBQTtFQUdyQjtFQUNJLGdCQUFnQixFQUFBO0VBR3BCO0VBQ0ksOEJBQThCLEVBQUE7RUFHbEM7RUFDSSxtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93b3Jrb3V0cy93b3Jrb3V0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAgIGlvbi1yb3cge1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gXHJcbiAgaW9uLWNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTkxOTE5O1xyXG59XHJcblxyXG5pb24taGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMTkxOTE5IDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDAgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogYXV0byA7XHJcbn1cclxuXHJcbi5pb24tdGV4dC1jYXBpdGFsaXple1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogI2VhZmZmNztcclxuICAgIGZvbnQtZmFtaWx5OiBQcm94aW1hLWJvbGQ7XHJcbiAgICBmb250LXNpemU6IDMycHggIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAgNSU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jb2x7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRvZGF5e1xyXG4gICAgICAgIGNvbG9yOiAjZTBlMGUwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUHJveGltYS1zZW1pJztcclxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxuXHJcbiAgICAudmlldy1hbGwgLnRvZGF5e1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50b2RheS1pbmZvIC5jYXJkLWNlbnRlci1iZ3tcclxuICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC53b3Jrb3V0LWluZm8gLmNhcmQtY2VudGVyLWJnLCAud29ya291dC1pbmZvIC5jYXJkLWNlbnRlci1pbWFnZSwgLndvcmtvdXQtaW5mbyBpb24tY29se1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC53b3Jrb3V0LXNsaWRle1xyXG4gICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2Nyb2xsaW5nLXdyYXBwZXIge1xyXG4gICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIFxyXG4gICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXJkLWNlbnRlci1iZ3tcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FyZC1jZW50ZXItdGV4dHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgLmdvYWxzIC5jYXJkLWNlbnRlci10ZXh0e1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnZpZXctYWxse1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAgIC5jYXJkLWNlbnRlci10ZXh0IC50aXRsZXtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnR2lscm95LWJsYWNrdGFsaWMnICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQtY2VudGVyLXRleHQgLnN1YnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogI2ZhZmFmYTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ051bml0byc7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLXJvdzpudGgtbGFzdC1jaGlsZCgxKSBpb24tY29se1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZDpudGgtbGFzdC1jaGlsZCgxKSAud29ya291dC1zbGlkZTpudGgtbGFzdC1jaGlsZCgxKXtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkOm50aC1jaGlsZCgxKXtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnZpZXctYWxse1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm8ye1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ1Byb3hpbWEtc2VtaSc7XHJcbiAgICAgICAgY29sb3I6ICNmNzQ3NGY7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5nb2FscyBpb24tY29se1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5nb2Fscy1pbmZvIGlvbi1jb2x7XHJcbiAgICAgICAgbWluLWhlaWdodDogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAuc2Nyb2xsIGlvbi1jb2x7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5nb2Fsc3tcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4iXX0= */"

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



let WorkoutsPage = class WorkoutsPage {
    constructor() {
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
    }
    ngOnInit() {
    }
};
WorkoutsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-workouts',
        template: __webpack_require__(/*! raw-loader!./workouts.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/workouts/workouts.page.html"),
        styles: [__webpack_require__(/*! ./workouts.page.scss */ "./src/app/pages/workouts/workouts.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WorkoutsPage);



/***/ })

}]);
//# sourceMappingURL=pages-workouts-workouts-module-es2015.js.map