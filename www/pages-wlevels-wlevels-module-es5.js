(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wlevels-wlevels-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/wlevels/wlevels.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/wlevels/wlevels.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header  class=\"lightheader\" mode=\"ios\" no-border>\r\n  <ion-toolbar mode=\"ios\" class=\"ion-color\" [style.background-color]=\"customColor\">\r\n      <ion-title class=\"ion-text-capitalize\">\r\n          {{title}}\r\n        </ion-title>\r\n              <ion-buttons slot=\"start\">\r\n                <app-backbutton color=\"#f7474f\"></app-backbutton>\r\n              </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content class=\"ion-color\" [style.background-color]=\"customColor\">\r\n  \r\n    <app-loading *ngIf=\"isLoading\"></app-loading>\r\n    <app-empty *ngIf=\"workouts.length === 0\" [title]=\"strings.ST141\"></app-empty>\r\n    \r\n    <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"12\" *ngFor=\"let item of workouts\" [routerLink]=\"['/wdetails', item.workout_id]\" [ngStyle]=\"{'height': height}\">\r\n             <div class=\"cardcategory\" [style.background-image]=\"'url(' + (item.workout_image | image) + ')'\">\r\n                 <div class=\"overlay\">\r\n                 <div class=\"texts\">\r\n                 <p>{{item.goal_title}}</p>\r\n                 <h1>{{item.workout_title}}</h1>\r\n                 <div class=\"more-info\">\r\n                 <h3><ion-icon name=\"ios-stopwatch\" color=\"light\"></ion-icon>20 minutes<ion-icon style=\"margin-left: 8px;\" name=\"ios-flame\" color=\"light\"></ion-icon>Easy</h3>\r\n                 </div>\r\n                </div>\r\n               </div>\r\n               </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n  \r\n  </ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/wlevels/wlevels-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/wlevels/wlevels-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: WlevelsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WlevelsPageRoutingModule", function() { return WlevelsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wlevels_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wlevels.page */ "./src/app/pages/wlevels/wlevels.page.ts");




var routes = [
    {
        path: '',
        component: _wlevels_page__WEBPACK_IMPORTED_MODULE_3__["WlevelsPage"]
    }
];
var WlevelsPageRoutingModule = /** @class */ (function () {
    function WlevelsPageRoutingModule() {
    }
    WlevelsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], WlevelsPageRoutingModule);
    return WlevelsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/wlevels/wlevels.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/wlevels/wlevels.module.ts ***!
  \*************************************************/
/*! exports provided: WlevelsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WlevelsPageModule", function() { return WlevelsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wlevels_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wlevels-routing.module */ "./src/app/pages/wlevels/wlevels-routing.module.ts");
/* harmony import */ var _wlevels_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wlevels.page */ "./src/app/pages/wlevels/wlevels.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









var WlevelsPageModule = /** @class */ (function () {
    function WlevelsPageModule() {
    }
    WlevelsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _wlevels_routing_module__WEBPACK_IMPORTED_MODULE_5__["WlevelsPageRoutingModule"]
            ],
            declarations: [_wlevels_page__WEBPACK_IMPORTED_MODULE_6__["WlevelsPage"]]
        })
    ], WlevelsPageModule);
    return WlevelsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/wlevels/wlevels.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/wlevels/wlevels.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  height: 100%; }\n\nion-row {\n  height: 100%; }\n\n.cardcategory {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  border-radius: 8px; }\n\n.cardcategory .overlay {\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.75)));\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 100%);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  text-align: left;\n  border-radius: 8px; }\n\n.cardcategory .texts {\n  padding: 15px 15px 8px 15px; }\n\n.cardcategory .texts h1 {\n  color: white;\n  margin: 0;\n  font-family: 'Proxima-extra';\n  font-size: 14px;\n  display: block;\n  overflow: hidden;\n  font-size: 18px; }\n\n.cardcategory .texts p {\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 12px;\n  display: block;\n  margin-bottom: 7px;\n  text-transform: none;\n  letter-spacing: 0;\n  background-color: #f7474f;\n  padding: 4px 8px;\n  text-align: center;\n  border-radius: 5px;\n  max-width: 100px;\n  font-family: 'Proxima-bold'; }\n\nion-header {\n  background-color: #212121;\n  height: 100%;\n  padding: 40px 0 10px 0 !important;\n  height: auto; }\n\n.ion-text-capitalize {\n  width: 100%;\n  color: #f7474f;\n  font-family: Proxima-bold;\n  font-size: 20px !important;\n  text-transform: none !important; }\n\nion-content {\n  background: #191919; }\n\nion-grid {\n  padding: 22px 8px; }\n\nion-col {\n  padding: 8px !important;\n  min-height: 150px; }\n\n.more-info {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row; }\n\n.more-info h3 {\n  color: #ffffff;\n  font-family: 'Nunito';\n  font-size: 14px !important;\n  text-transform: none !important;\n  line-height: 16px;\n  margin: 8px 0 0 0; }\n\n.more-info ion-icon {\n  margin-right: 4px !important;\n  margin-bottom: -1px !important; }\n\nion-col:nth-last-child(1) {\n  margin-bottom: 40px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2xldmVscy9DOlxcVXNlcnNcXEhhcmlzaFxcTG9jYWxfZGV2XFxHeW1tYXRlQXBwL3NyY1xcYXBwXFxwYWdlc1xcd2xldmVsc1xcd2xldmVscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBR0ksNEdBQStFO0VBQS9FLHFGQUErRTtFQUMvRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBeUI7VUFBekIseUJBQXlCO0VBQ3pCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQWlCO0VBQWpCLDZCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLFlBQVk7RUFDWixTQUFTO0VBQ1QsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxZQUFhLEVBQUE7O0FBR2pCO0VBQ0ksV0FBVztFQUNYLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLCtCQUErQixFQUFBOztBQUcvQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLHVCQUF1QjtFQUN2QixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksNEJBQTRCO0VBQzVCLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd2xldmVscy93bGV2ZWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlke1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5pb24tcm93e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZGNhdGVnb3J5e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uY2FyZGNhdGVnb3J5IC5vdmVybGF5e1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgwLDAsMCwwKSAwJSwgcmdiYSgwLDAsMCwwLjc1KSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIHJnYmEoMCwwLDAsMCkgMCUscmdiYSgwLDAsMCwwLjc1KSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICByZ2JhKDAsMCwwLDApIDAlLHJnYmEoMCwwLDAsMC43NSkgMTAwJSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5jYXJkY2F0ZWdvcnkgLnRleHRze1xyXG4gICAgcGFkZGluZzogMTVweCAxNXB4IDhweCAxNXB4O1xyXG59XHJcblxyXG4uY2FyZGNhdGVnb3J5IC50ZXh0cyBoMXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUHJveGltYS1leHRyYSc7O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uY2FyZGNhdGVnb3J5IC50ZXh0cyBwe1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNzQ3NGY7XHJcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUHJveGltYS1ib2xkJzs7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyMTIxMjEgO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogNDBweCAwIDEwcHggMCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBhdXRvIDtcclxufVxyXG5cclxuLmlvbi10ZXh0LWNhcGl0YWxpemV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjZjc0NzRmO1xyXG4gICAgZm9udC1mYW1pbHk6IFByb3hpbWEtYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tY29udGVudHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTkxOTE5O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1ncmlke1xyXG4gICAgICAgIHBhZGRpbmc6IDIycHggOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jb2x7XHJcbiAgICAgICAgcGFkZGluZzogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vcmUtaW5mb3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vcmUtaW5mbyBoM3tcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBmb250LWZhbWlseTogJ051bml0byc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICBtYXJnaW46IDhweCAwIDAgMDtcclxuICAgIH1cclxuXHJcbiAgICAubW9yZS1pbmZvIGlvbi1pY29uIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0xcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tY29sOm50aC1sYXN0LWNoaWxkKDEpe1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHggIWltcG9ydGFudDtcclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/wlevels/wlevels.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/wlevels/wlevels.page.ts ***!
  \***********************************************/
/*! exports provided: WlevelsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WlevelsPage", function() { return WlevelsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var WlevelsPage = /** @class */ (function () {
    function WlevelsPage(dataService, router, route, plt) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.plt = plt;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_3__["strings"];
        this.workouts = [];
        this.isLoading = false;
    }
    WlevelsPage.prototype.ngOnInit = function () {
    };
    WlevelsPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.isLoading = true;
                this.route.params.subscribe(function (data) {
                    _this.id = data.id;
                    _this.title = data.title;
                    _this.getWorkouts();
                    if (!_this.id) {
                        _this.goBack();
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    WlevelsPage.prototype.goBack = function () {
        this.router.navigate(['/home']);
    };
    WlevelsPage.prototype.getWorkouts = function () {
        var _this = this;
        this.dataService.getDataWorkoutsByLevel(this.id)
            .subscribe(function (resp) {
            _this.workouts = resp;
            if (_this.workouts.length === 1) {
                _this.height = '167.273px';
            }
            else if (_this.workouts.length === 3 || _this.workouts.length === 2) {
                _this.height = 'inherit !important';
            }
            else if (_this.workouts.length >= 4) {
                _this.height = _this.plt.height() / 4.4 + 'px';
            }
            _this.isLoading = false;
        });
    };
    WlevelsPage.ctorParameters = function () { return [
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
    ]; };
    WlevelsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wlevels',
            template: __webpack_require__(/*! raw-loader!./wlevels.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/wlevels/wlevels.page.html"),
            styles: [__webpack_require__(/*! ./wlevels.page.scss */ "./src/app/pages/wlevels/wlevels.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]])
    ], WlevelsPage);
    return WlevelsPage;
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
//# sourceMappingURL=pages-wlevels-wlevels-module-es5.js.map