(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wgoals-wgoals-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/wgoals/wgoals.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/wgoals/wgoals.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header  class=\"lightheader\" mode=\"ios\" no-border>\r\n  <ion-toolbar mode=\"ios\" class=\"ion-color\" [style.background-color]=\"customColor\">\r\n      <ion-title class=\"ion-text-capitalize\">\r\n          {{title}}\r\n        </ion-title>\r\n              <ion-buttons slot=\"start\">\r\n                <app-backbutton class=\"arrow\"></app-backbutton>\r\n              </ion-buttons>\r\n              <ion-buttons slot=\"end\">\r\n                <ion-button  slot=\"start\" [routerLink]=\"['/tabs/tab1']\">\r\n                  <img src=\"./assets/images/close.png\" class=\"close-img\"/> \r\n                  </ion-button>\r\n              </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content class=\"ion-color\" [style.background-color]=\"customColor\">\r\n  \r\n    <app-loading *ngIf=\"isLoading\"></app-loading>\r\n    <app-empty *ngIf=\"workouts.length === 0\" [title]=\"strings.ST141\"></app-empty>\r\n\r\n  \r\n    <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"12\" *ngFor=\"let item of workouts\" [routerLink]=\"['/wdetails', item.workout_id]\" [ngStyle]=\"{'height': height}\">\r\n\r\n<!--\r\n            <ion-col size=\"12\" *ngFor=\"let item of workouts\" [routerLink]=\"['/newwdetails']\" [ngStyle]=\"{'height': height}\">\r\n\r\n\r\n-->\r\n             <div class=\"cardcategory\" [style.background-image]=\"'url(' + (item.workout_image | image) + ')'\">\r\n                 <div class=\"overlay\">\r\n                 <div class=\"texts\">\r\n                 <p>{{item.level_title}}</p>\r\n                 <h1>{{item.workout_title}}</h1>\r\n                 <div class=\"more-info\">\r\n                  <h3><ion-icon name=\"ios-stopwatch\" color=\"light\"></ion-icon>20 minutes<img src=\"./assets/images/level_easy.png\" class=\"level-easy\"/>Easy</h3>\r\n                  </div>\r\n                 </div>\r\n               </div>\r\n               </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n  </ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/wgoals/wgoals-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/wgoals/wgoals-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: WgoalsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WgoalsPageRoutingModule", function() { return WgoalsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _wgoals_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wgoals.page */ "./src/app/pages/wgoals/wgoals.page.ts");




const routes = [
    {
        path: '',
        component: _wgoals_page__WEBPACK_IMPORTED_MODULE_3__["WgoalsPage"]
    }
];
let WgoalsPageRoutingModule = class WgoalsPageRoutingModule {
};
WgoalsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WgoalsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/wgoals/wgoals.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/wgoals/wgoals.module.ts ***!
  \***********************************************/
/*! exports provided: WgoalsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WgoalsPageModule", function() { return WgoalsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wgoals_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wgoals-routing.module */ "./src/app/pages/wgoals/wgoals-routing.module.ts");
/* harmony import */ var _wgoals_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wgoals.page */ "./src/app/pages/wgoals/wgoals.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









let WgoalsPageModule = class WgoalsPageModule {
};
WgoalsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _wgoals_routing_module__WEBPACK_IMPORTED_MODULE_5__["WgoalsPageRoutingModule"]
        ],
        declarations: [_wgoals_page__WEBPACK_IMPORTED_MODULE_6__["WgoalsPage"]]
    })
], WgoalsPageModule);



/***/ }),

/***/ "./src/app/pages/wgoals/wgoals.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/wgoals/wgoals.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  height: auto; }\n\nion-row {\n  height: 100%; }\n\n.cardcategory {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  border-radius: 8px; }\n\n.cardcategory .overlay {\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.75)));\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 100%);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  text-align: left;\n  border-radius: 8px; }\n\n.cardcategory .texts {\n  padding: 15px 15px 8px 15px; }\n\n.cardcategory .texts h1 {\n  color: white;\n  margin: 0;\n  font-family: 'Proxima-extra';\n  font-size: 14px;\n  display: block;\n  overflow: hidden;\n  font-size: 18px; }\n\n.cardcategory .texts p {\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 12px;\n  display: block;\n  margin-bottom: 7px;\n  text-transform: none;\n  letter-spacing: 0;\n  background-color: #f7474f;\n  padding: 4px 8px;\n  text-align: center;\n  border-radius: 5px;\n  max-width: 100px;\n  font-family: 'Proxima-bold'; }\n\nion-header {\n  background-color: #191919;\n  height: 100%;\n  padding: 20px 0 0px 0 !important;\n  height: auto; }\n\n.ion-text-capitalize {\n  width: 100%;\n  color: #f7474f;\n  font-family: Proxima-bold;\n  font-size: 20px !important;\n  text-transform: none !important; }\n\nion-content {\n  background: #191919; }\n\nion-grid {\n  padding: 20px 0px; }\n\nion-col {\n  padding: 8px  0 !important;\n  min-height: 180px; }\n\n.more-info {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row; }\n\n.more-info h3 {\n  color: #ffffff;\n  font-family: 'Nunito';\n  font-size: 14px !important;\n  text-transform: none !important;\n  line-height: 16px;\n  margin: 8px 0 0 0; }\n\n.more-info ion-icon {\n  margin-right: 4px !important;\n  margin-bottom: -1px !important; }\n\n.arrow {\n  color: #f7474f !important; }\n\nion-col {\n  -webkit-box-flex: 0 !important;\n  flex: 0 0 calc(calc(12 / var(--ion-grid-columns, 12)) * 90%) !important;\n  width: calc(calc(12 / var(--ion-grid-columns, 12)) * 90%) !important;\n  max-width: calc(calc(12 / var(--ion-grid-columns, 12)) * 90%) !important;\n  margin: 5px auto; }\n\n.close-img {\n  max-width: 16px;\n  max-height: 16px; }\n\n.level-easy {\n  max-width: 14px;\n  max-height: 14px;\n  margin: 0 5px 0 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2dvYWxzL0M6XFxVc2Vyc1xcSGFyaXNoXFxMb2NhbF9kZXZcXEd5bW1hdGVBcHAvc3JjXFxhcHBcXHBhZ2VzXFx3Z29hbHNcXHdnb2Fscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBR0ksNEdBQStFO0VBQS9FLHFGQUErRTtFQUMvRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBeUI7VUFBekIseUJBQXlCO0VBQ3pCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQWlCO0VBQWpCLDZCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLDJCQUEyQixFQUFBOztBQUkvQjtFQUNJLFlBQVk7RUFDWixTQUFTO0VBQ1QsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSSx5QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxZQUFhLEVBQUE7O0FBR2pCO0VBQ0ksV0FBVztFQUNYLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLCtCQUErQixFQUFBOztBQUcvQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLDBCQUEwQjtFQUMxQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksNEJBQTRCO0VBQzVCLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLDhCQUE4QjtFQUM5Qix1RUFBdUU7RUFDdkUsb0VBQW9FO0VBQ3BFLHdFQUF3RTtFQUN4RSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dnb2Fscy93Z29hbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWR7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbmlvbi1yb3d7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJkY2F0ZWdvcnl7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5jYXJkY2F0ZWdvcnkgLm92ZXJsYXl7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDAsMCwwLDApIDAlLCByZ2JhKDAsMCwwLDAuNzUpIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgwLDAsMCwwKSAwJSxyZ2JhKDAsMCwwLDAuNzUpIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIHJnYmEoMCwwLDAsMCkgMCUscmdiYSgwLDAsMCwwLjc1KSAxMDAlKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLmNhcmRjYXRlZ29yeSAudGV4dHN7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggOHB4IDE1cHg7IFxyXG59XHJcblxyXG5cclxuLmNhcmRjYXRlZ29yeSAudGV4dHMgaDF7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogJ1Byb3hpbWEtZXh0cmEnOztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmNhcmRjYXRlZ29yeSAudGV4dHMgcHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjc0NzRmO1xyXG4gICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1Byb3hpbWEtYm9sZCc7O1xyXG59XHJcblxyXG5pb24taGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMTkxOTE5O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweCAwIDBweCAwICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IGF1dG8gO1xyXG59XHJcblxyXG4uaW9uLXRleHQtY2FwaXRhbGl6ZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICNmNzQ3NGY7XHJcbiAgICBmb250LWZhbWlseTogUHJveGltYS1ib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jb250ZW50e1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxOTE5MTk7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWdyaWR7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNvbHtcclxuICAgICAgICBwYWRkaW5nOiA4cHggIDAgIWltcG9ydGFudDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxODBweDtcclxuICAgIH1cclxuXHJcbiAgICAubW9yZS1pbmZve1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuXHJcbiAgICAubW9yZS1pbmZvIGgze1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJztcclxuICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbjogOHB4IDAgMCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5tb3JlLWluZm8gaW9uLWljb24ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTFweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5hcnJvd3tcclxuICAgICAgICBjb2xvcjogI2Y3NDc0ZiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jb2x7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtZmxleDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZsZXg6IDAgMCBjYWxjKGNhbGMoMTIgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogOTAlKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKGNhbGMoMTIgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogOTAlKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC13aWR0aDogY2FsYyhjYWxjKDEyIC8gdmFyKC0taW9uLWdyaWQtY29sdW1ucywgMTIpKSAqIDkwJSkgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IDVweCBhdXRvO1xyXG4gICAgfSAgIFxyXG5cclxuICAgIC5jbG9zZS1pbWd7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNnB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxldmVsLWVhc3kge1xyXG4gICAgICAgIG1heC13aWR0aDogMTRweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCA1cHggMCAxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/wgoals/wgoals.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/wgoals/wgoals.page.ts ***!
  \*********************************************/
/*! exports provided: WgoalsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WgoalsPage", function() { return WgoalsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let WgoalsPage = class WgoalsPage {
    constructor(dataService, router, route, plt) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.plt = plt;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_3__["strings"];
        this.workouts = [];
        this.isLoading = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = true;
            this.route.params.subscribe(data => {
                this.id = data.id;
                this.title = data.title;
                this.getWorkouts();
                if (!this.id) {
                    this.goBack();
                }
            });
        });
    }
    goBack() {
        this.router.navigate(['/home']);
    }
    getWorkouts() {
        this.dataService.getDataWorkoutsByGoal(this.id)
            .subscribe(resp => {
            this.workouts = resp;
            if (this.workouts.length === 1) {
                this.height = '167.273px';
            }
            else if (this.workouts.length === 3 || this.workouts.length === 2) {
                this.height = 'inherit !important';
            }
            else if (this.workouts.length >= 4) {
                this.height = this.plt.height() / 4.4 + 'px';
            }
            this.isLoading = false;
        });
    }
};
WgoalsPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
];
WgoalsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wgoals',
        template: __webpack_require__(/*! raw-loader!./wgoals.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/wgoals/wgoals.page.html"),
        styles: [__webpack_require__(/*! ./wgoals.page.scss */ "./src/app/pages/wgoals/wgoals.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]])
], WgoalsPage);



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
//# sourceMappingURL=pages-wgoals-wgoals-module-es2015.js.map