(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-weday-weday-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/weday/weday.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/weday/weday.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <ion-header  class=\"lightheader\" mode=\"ios\" no-border>\r\n    <ion-toolbar mode=\"ios\" class=\"ion-color\" [style.background-color]=\"customColor\">\r\n        <ion-title class=\"ion-text-capitalize\">\r\n          {{strings.ST87}} {{day}}\r\n          </ion-title>\r\n                <ion-buttons slot=\"start\">\r\n                  <app-backbutton color=\"primary\"></app-backbutton>\r\n                </ion-buttons>\r\n                <ion-buttons slot=\"end\">\r\n                  <ion-button  slot=\"start\" [routerLink]=\"['/tabs/tab1']\">\r\n                    <img src=\"./assets/images/close.png\" class=\"close-img\"/> \r\n                    </ion-button>\r\n                </ion-buttons>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n  \r\n  <ion-content class=\"ion-color\" [style.background-color]=\"customColor\">\r\n    \r\n    <app-loading *ngIf=\"isLoading\"></app-loading>\r\n\r\n  <app-restday *ngIf=\"exercises.length === 0\"></app-restday>\r\n  \r\n    <ion-list lines=\"none\" class=\"ion-padding-top\">\r\n  \r\n    <ion-item *ngFor=\"let item of exercises\" [routerLink]=\"['/edetails', item.exercise_id]\" class=\"ion-color\" [style.background-color]=\"customColor\" detail=\"false\">\r\n      <ion-avatar slot=\"start\">\r\n        <img [src]=\"item.exercise_image | image\">\r\n      </ion-avatar>  \r\n      <ion-label>{{item.exercise_title}}</ion-label>\r\n        <ion-icon name=\"arrow-forward\" class=\"ion-color arrow\" [style.background-color]=\"customColor\" slot=\"end\"></ion-icon>\r\n      </ion-item>\r\n  \r\n    </ion-list>\r\n  \r\n  </ion-content>"

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

module.exports = "ion-avatar {\n  width: 98px !important;\n  height: 90px !important;\n  border-radius: 0;\n  margin: 0 15px 0 -16px; }\n\nion-avatar img {\n  border-radius: 0; }\n\nion-item ion-label {\n  padding-left: 0px;\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 13px;\n  line-height: 20px;\n  white-space: normal !important;\n  color: #aeabab !important; }\n\nion-item {\n  background-color: #313235;\n  --background-color: #313235 !important;\n  padding: 0px;\n  position: relative;\n  color: #fafafa !important;\n  --opacity: 1 !important;\n  --color: #fafafa !important;\n  opacity: 1 !important;\n  border-radius: 5px;\n  max-width: 90%;\n  margin: 0 auto 15px auto; }\n\nion-label {\n  margin-top: 0px !important;\n  margin-bottom: 0px !important;\n  margin-right: 0px !important;\n  margin-left: 0px !important;\n  --margin-top: 0px !important;\n  --margin-bottom: 0px !important ;\n  --margin-right: 0px !important ;\n  --margin-left: 0px !important; }\n\n.item .sc-ion-label-ios-h {\n  font-size: 16px !important;\n  text-transform: uppercase !important;\n  font-weight: bold !important;\n  margin: 0 !important;\n  font-family: 'Proxima-bold' !important;\n  color: #fafafa !important;\n  line-height: 18px !important;\n  text-transform: none !important; }\n\nion-item:last-child {\n  border-bottom: none !important; }\n\nion-grid {\n  background-color: #191919; }\n\n.in-toolbar {\n  background: #191919; }\n\n.ion-page .in-toolbar .toolbar-background {\n  background: transparent !important; }\n\nion-content {\n  background: #191919 !important; }\n\n.close-img {\n  max-width: 16px;\n  max-height: 16px; }\n\n.ion-text-capitalize {\n  width: 100%;\n  color: #f7474f;\n  font-family: Proxima-bold;\n  font-size: 20px !important;\n  text-transform: none !important; }\n\nion-list {\n  --background-color: #191919;\n  background-color: #191919;\n  padding-top: 20px; }\n\nion-item ion-icon {\n  font-size: 22px; }\n\n.arrow, ion-item {\n  --color: #aeabab !important;\n  color: #aeabab !important; }\n\n.in-toolbar {\n  padding: 20px 0 10px 0 !important;\n  background: #191919; }\n\n@media only screen and (max-width: 300px) {\n  ion-item ion-label {\n    font-size: 12px;\n    line-height: 18px; }\n  ion-avatar {\n    margin-right: 10px; } }\n\n@media only screen and (max-width: 280px) {\n  ion-avatar {\n    max-width: 75px; }\n  ion-item ion-label {\n    line-height: 16px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2VkYXkvQzpcXFVzZXJzXFxIYXJpc2hcXExvY2FsX2RldlxcR3ltbWF0ZUFwcC9zcmNcXGFwcFxccGFnZXNcXHdlZGF5XFx3ZWRheS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDUSxzQkFBc0I7RUFDM0IsdUJBQXVCO0VBQ3RCLGdCQUFnQjtFQUNoQixzQkFBdUIsRUFBQTs7QUFFM0I7RUFDSSxnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5Qix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSx5QkFBeUI7RUFDekIsc0NBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHVCQUFVO0VBQ1YsMkJBQVE7RUFDUixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCx3QkFBd0IsRUFBQTs7QUFHM0I7RUFFRywwQkFBMEI7RUFDMUIsNkJBQThCO0VBQzlCLDRCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0IsNEJBQWE7RUFDYixnQ0FBZ0I7RUFDaEIsK0JBQWU7RUFDZiw2QkFBYyxFQUFBOztBQUdsQjtFQUNJLDBCQUEwQjtFQUMxQixvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUNwQixzQ0FBc0M7RUFDdEMseUJBQXlCO0VBQ3pCLDRCQUEyQjtFQUMzQiwrQkFBK0IsRUFBQTs7QUFHbkM7RUFDSSw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSx5QkFBeUIsRUFBQTs7QUFLN0I7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFHUSxrQ0FBa0MsRUFBQTs7QUFLeEM7RUFDRSw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksV0FBVztFQUNYLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLCtCQUErQixFQUFBOztBQUdsQztFQUNHLDJCQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLDJCQUFRO0VBQ1IseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksaUNBQWlDO0VBQ2pDLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQixFQUFBO0VBR3JCO0lBQ0ksa0JBQWtCLEVBQUEsRUFDckI7O0FBR0g7RUFDRTtJQUNJLGVBQWUsRUFBQTtFQUVuQjtJQUNJLGlCQUFpQixFQUFBLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd2VkYXkvd2VkYXkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhciAgeyAgICAgICBcclxuICAgICAgICB3aWR0aDogOThweCAhaW1wb3J0YW50O1xyXG4gICBoZWlnaHQ6IDkwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBtYXJnaW46IDAgMTVweCAwIC0xNnB4IDtcclxuICAgIH1cclxuaW9uLWF2YXRhciBpbWd7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG5cclxufVxyXG5cclxuaW9uLWl0ZW0gaW9uLWxhYmVse1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjYWVhYmFiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1pdGVte1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMxMzIzNTtcclxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogIzMxMzIzNSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6ICNmYWZhZmEgIWltcG9ydGFudDtcclxuICAgIC0tb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgLS1jb2xvcjogI2ZhZmFmYSAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0byAxNXB4IGF1dG87XHJcbiB9XHJcblxyXG4gaW9uLWxhYmVse1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQgO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudCA7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLW1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1tYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudCA7XHJcbiAgICAtLW1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQgO1xyXG4gICAgLS1tYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pdGVtIC5zYy1pb24tbGFiZWwtaW9zLWh7XHJcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUHJveGltYS1ib2xkJyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmYWZhZmEgIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4IWltcG9ydGFudDsgXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuaW9uLWl0ZW06bGFzdC1jaGlsZHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWdyaWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xyXG59XHJcblxyXG5cclxuXHJcbi5pbi10b29sYmFye1xyXG4gICAgYmFja2dyb3VuZDogIzE5MTkxOTtcclxufVxyXG5cclxuLmlvbi1wYWdlIHtcclxuICAgIC5pbi10b29sYmFyIHtcclxuICAgICAgLnRvb2xiYXItYmFja2dyb3VuZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLWNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTkxOTE5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jbG9zZS1pbWd7XHJcbiAgICBtYXgtd2lkdGg6IDE2cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG4uaW9uLXRleHQtY2FwaXRhbGl6ZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICNmNzQ3NGY7XHJcbiAgICBmb250LWZhbWlseTogUHJveGltYS1ib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4gaW9uLWxpc3Qge1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG5pb24taXRlbSBpb24taWNvbntcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuLmFycm93LCBpb24taXRlbXtcclxuICAgIC0tY29sb3I6ICNhZWFiYWIgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjYWVhYmFiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbi10b29sYmFye1xyXG4gICAgcGFkZGluZzogMjBweCAwIDEwcHggMCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogIzE5MTkxOTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gICAgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWF2YXRhcntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI4MHB4KSB7XHJcbiAgICBpb24tYXZhdGFye1xyXG4gICAgICAgIG1heC13aWR0aDogNzVweDtcclxuICAgIH1cclxuICAgIGlvbi1pdGVtIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"

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







var WedayPage = /** @class */ (function () {
    function WedayPage(dataService, router, route, plt, admob) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.plt = plt;
        this.admob = admob;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
        this.exercises = [];
        this.isLoading = false;
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
    WedayPage.ctorParameters = function () { return [
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
        { type: _services_admob_service__WEBPACK_IMPORTED_MODULE_6__["AdmobService"] }
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
            _services_admob_service__WEBPACK_IMPORTED_MODULE_6__["AdmobService"]])
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