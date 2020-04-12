(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-weday-weday-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/weday/weday.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/weday/weday.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <ion-header  class=\"lightheader\" mode=\"ios\" no-border>\r\n    <ion-toolbar mode=\"ios\" class=\"ion-color\" [style.background-color]=\"customColor\">\r\n        <ion-title class=\"ion-text-capitalize\">\r\n          {{strings.ST87}} {{day}}\r\n          </ion-title>\r\n                <ion-buttons slot=\"start\">\r\n                  <app-backbutton color=\"primary\"></app-backbutton>\r\n                </ion-buttons>\r\n                <ion-buttons slot=\"end\">\r\n                  <ion-button  slot=\"start\" [routerLink]=\"['/tabs/tab1']\">\r\n                    <img src=\"./assets/images/close.png\" class=\"close-img\"/> \r\n                    </ion-button>\r\n                </ion-buttons>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n  \r\n  <ion-content class=\"ion-color\" [style.background-color]=\"customColor\">\r\n    \r\n    <app-loading *ngIf=\"isLoading\"></app-loading>\r\n\r\n  <app-restday *ngIf=\"exercises.length === 0\"></app-restday>\r\n  \r\n    <ion-list lines=\"none\" class=\"ion-padding-top\">\r\n  \r\n    <ion-item *ngFor=\"let item of exercises\" [routerLink]=\"['/edetails', item.exercise_id]\" class=\"ion-color\" [style.background-color]=\"customColor\" detail=\"false\">\r\n      <ion-avatar slot=\"start\">\r\n        <img [src]=\"item.exercise_image | image\">\r\n      </ion-avatar>  \r\n      <ion-label>{{item.exercise_title}}</ion-label>\r\n        <ion-icon name=\"arrow-forward\" class=\"ion-color arrow\" [style.background-color]=\"customColor\" slot=\"end\"></ion-icon>\r\n    \r\n      </ion-item>\r\n  \r\n    </ion-list>\r\n  \r\n  </ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _weday_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weday.page */ "./src/app/pages/weday/weday.page.ts");




const routes = [
    {
        path: '',
        component: _weday_page__WEBPACK_IMPORTED_MODULE_3__["WedayPage"]
    }
];
let WedayPageRoutingModule = class WedayPageRoutingModule {
};
WedayPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WedayPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _weday_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weday-routing.module */ "./src/app/pages/weday/weday-routing.module.ts");
/* harmony import */ var _weday_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./weday.page */ "./src/app/pages/weday/weday.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









let WedayPageModule = class WedayPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/weday/weday.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/weday/weday.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar {\n  width: 98px !important;\n  height: 90px !important;\n  border-radius: 0;\n  margin: 0 15px 0 -16px; }\n\nion-avatar img {\n  border-radius: 0; }\n\nion-item ion-label {\n  padding-left: 0px;\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 13px;\n  line-height: 20px;\n  white-space: normal !important;\n  color: #aeabab !important; }\n\nion-item {\n  background-color: #313235;\n  --background-color: #313235 !important;\n  padding: 0px;\n  position: relative;\n  color: #fafafa !important;\n  --opacity: 1 !important;\n  --color: #fafafa !important;\n  opacity: 1 !important;\n  border-radius: 5px;\n  max-width: 90%;\n  margin: 0 auto 15px auto; }\n\nion-label {\n  margin-top: 0px !important;\n  margin-bottom: 0px !important;\n  margin-right: 0px !important;\n  margin-left: 0px !important;\n  --margin-top: 0px !important;\n  --margin-bottom: 0px !important ;\n  --margin-right: 0px !important ;\n  --margin-left: 0px !important; }\n\n.item .sc-ion-label-ios-h {\n  font-size: 16px !important;\n  text-transform: uppercase !important;\n  font-weight: bold !important;\n  margin: 0 !important;\n  font-family: 'Proxima-bold' !important;\n  color: #fafafa !important;\n  line-height: 18px !important;\n  text-transform: none !important; }\n\nion-item:last-child {\n  border-bottom: none !important; }\n\nion-grid {\n  background-color: #191919; }\n\n.in-toolbar {\n  background: #191919; }\n\n.ion-page .in-toolbar .toolbar-background {\n  background: transparent !important; }\n\nion-content {\n  background: #191919 !important; }\n\n.close-img {\n  max-width: 16px;\n  max-height: 16px; }\n\n.ion-text-capitalize {\n  width: 100%;\n  color: #f7474f;\n  font-family: Proxima-bold;\n  font-size: 20px !important;\n  text-transform: none !important; }\n\nion-list {\n  --background-color: #191919;\n  background-color: #191919;\n  padding-top: 20px; }\n\nion-item ion-icon {\n  font-size: 22px; }\n\n.arrow, ion-item {\n  --color: #aeabab !important;\n  color: #aeabab !important; }\n\n.in-toolbar {\n  padding: 20px 0 10px 0 !important;\n  background: #191919; }\n\n@media only screen and (max-width: 300px) {\n  ion-item ion-label {\n    font-size: 12px;\n    line-height: 18px; }\n  ion-avatar {\n    margin-right: 10px; } }\n\n@media only screen and (max-width: 280px) {\n  ion-avatar {\n    max-width: 75px; }\n  ion-item ion-label {\n    line-height: 16px; } }\n\n.further-info {\n  margin: 0 auto;\n  border: 1px solid #313235;\n  border-top: none;\n  padding: 5%; }\n\n.further-info p {\n  color: #fafafa;\n  line-height: 20px;\n  font-size: 16px;\n  font-family: 'Proxima-regular';\n  --padding-inline-start: 0px !important;\n  -webkit-padding-start: 0px !important;\n          padding-inline-start: 0px !important; }\n\n.further-info span {\n  margin-left: -23px !important;\n  display: block; }\n\n.further-info .exer-title {\n  color: #fafafa;\n  line-height: 24px;\n  font-size: 20px;\n  font-family: 'Proxima-bold'; }\n\n.further-info .subtitle {\n  color: #fafafa;\n  line-height: 20px;\n  font-size: 16px;\n  font-family: 'Proxima-bold'; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2VkYXkvQzpcXFVzZXJzXFxIYXJpc2hcXExvY2FsX2RldlxcR3ltbWF0ZUFwcC9zcmNcXGFwcFxccGFnZXNcXHdlZGF5XFx3ZWRheS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDUSxzQkFBc0I7RUFDM0IsdUJBQXVCO0VBQ3RCLGdCQUFnQjtFQUNoQixzQkFBdUIsRUFBQTs7QUFFM0I7RUFDSSxnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5Qix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSx5QkFBeUI7RUFDekIsc0NBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHVCQUFVO0VBQ1YsMkJBQVE7RUFDUixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCx3QkFBd0IsRUFBQTs7QUFHM0I7RUFFRywwQkFBMEI7RUFDMUIsNkJBQThCO0VBQzlCLDRCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0IsNEJBQWE7RUFDYixnQ0FBZ0I7RUFDaEIsK0JBQWU7RUFDZiw2QkFBYyxFQUFBOztBQUdsQjtFQUNJLDBCQUEwQjtFQUMxQixvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUNwQixzQ0FBc0M7RUFDdEMseUJBQXlCO0VBQ3pCLDRCQUEyQjtFQUMzQiwrQkFBK0IsRUFBQTs7QUFHbkM7RUFDSSw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSx5QkFBeUIsRUFBQTs7QUFLN0I7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFHUSxrQ0FBa0MsRUFBQTs7QUFLeEM7RUFDRSw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksV0FBVztFQUNYLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLCtCQUErQixFQUFBOztBQUdsQztFQUNHLDJCQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLDJCQUFRO0VBQ1IseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksaUNBQWlDO0VBQ2pDLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQixFQUFBO0VBR3JCO0lBQ0ksa0JBQWtCLEVBQUEsRUFDckI7O0FBR0g7RUFDRTtJQUNJLGVBQWUsRUFBQTtFQUVuQjtJQUNJLGlCQUFpQixFQUFBLEVBQ3BCOztBQUVIO0VBRUUsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLHNDQUF1QjtFQUN2QixxQ0FBb0M7VUFBcEMsb0NBQW9DLEVBQUE7O0FBR3hDO0VBQ0ksNkJBQTZCO0VBQzdCLGNBQWMsRUFBQTs7QUFJbEI7RUFDSSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dlZGF5L3dlZGF5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hdmF0YXIgIHsgICAgICAgXHJcbiAgICAgICAgd2lkdGg6IDk4cHggIWltcG9ydGFudDtcclxuICAgaGVpZ2h0OiA5MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgbWFyZ2luOiAwIDE1cHggMCAtMTZweCA7XHJcbiAgICB9XHJcbmlvbi1hdmF0YXIgaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuXHJcbn1cclxuXHJcbmlvbi1pdGVtIGlvbi1sYWJlbHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2FlYWJhYiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24taXRlbXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTMyMzU7XHJcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICMzMTMyMzUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGNvbG9yOiAjZmFmYWZhICFpbXBvcnRhbnQ7XHJcbiAgICAtLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIC0tY29sb3I6ICNmYWZhZmEgIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMTVweCBhdXRvO1xyXG4gfVxyXG5cclxuIGlvbi1sYWJlbHtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50IDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQgO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1tYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIC0tbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQgO1xyXG4gICAgLS1tYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50IDtcclxuICAgIC0tbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaXRlbSAuc2MtaW9uLWxhYmVsLWlvcy1oe1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogJ1Byb3hpbWEtYm9sZCcgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmFmYWZhICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMThweCFpbXBvcnRhbnQ7IFxyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuIH1cclxuXHJcbmlvbi1pdGVtOmxhc3QtY2hpbGR7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1ncmlke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcclxufVxyXG5cclxuXHJcblxyXG4uaW4tdG9vbGJhcntcclxuICAgIGJhY2tncm91bmQ6ICMxOTE5MTk7XHJcbn1cclxuXHJcbi5pb24tcGFnZSB7XHJcbiAgICAuaW4tdG9vbGJhciB7XHJcbiAgICAgIC50b29sYmFyLWJhY2tncm91bmQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZDogIzE5MTkxOSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2xvc2UtaW1ne1xyXG4gICAgbWF4LXdpZHRoOiAxNnB4O1xyXG4gICAgbWF4LWhlaWdodDogMTZweDtcclxufVxyXG5cclxuLmlvbi10ZXh0LWNhcGl0YWxpemV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjZjc0NzRmO1xyXG4gICAgZm9udC1mYW1pbHk6IFByb3hpbWEtYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuIGlvbi1saXN0IHtcclxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuaW9uLWl0ZW0gaW9uLWljb257XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5hcnJvdywgaW9uLWl0ZW17XHJcbiAgICAtLWNvbG9yOiAjYWVhYmFiICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2FlYWJhYiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW4tdG9vbGJhcntcclxuICAgIHBhZGRpbmc6IDIwcHggMCAxMHB4IDAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICMxOTE5MTk7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICAgIGlvbi1pdGVtIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1hdmF0YXJ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyODBweCkge1xyXG4gICAgaW9uLWF2YXRhcntcclxuICAgICAgICBtYXgtd2lkdGg6IDc1cHg7XHJcbiAgICB9XHJcbiAgICBpb24taXRlbSBpb24tbGFiZWwge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuZnVydGhlci1pbmZvIHtcclxuXHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMTMyMzU7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgcGFkZGluZzogNSU7XHJcbn1cclxuXHJcbiAgLmZ1cnRoZXItaW5mbyBwIHtcclxuICAgIGNvbG9yOiAjZmFmYWZhO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1Byb3hpbWEtcmVndWxhcic7XHJcbiAgICAtLXBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZ1cnRoZXItaW5mbyBzcGFuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjNweCAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcblxyXG4uZnVydGhlci1pbmZvIC5leGVyLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmFmYWZhO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1Byb3hpbWEtYm9sZCc7XHJcbn1cclxuXHJcbi5mdXJ0aGVyLWluZm8gLnN1YnRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmFmYWZhO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1Byb3hpbWEtYm9sZCc7XHJcbn1cclxuXHJcbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_admob_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/admob.service */ "./src/app/services/admob.service.ts");







let WedayPage = class WedayPage {
    constructor(dataService, router, route, plt, admob) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.plt = plt;
        this.admob = admob;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
        this.exercises = [];
        this.isLoading = false;
    }
    ngOnInit() {
        this.admob.BannerAd();
    }
    // tslint:disable-next-line: use-lifecycle-interface
    ngOnDestroy() {
        this.admob.HideBannerAd();
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = true;
            this.route.params.subscribe(data => {
                this.id = data.id;
                this.day = data.day;
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
    getExercises() {
        this.dataService.getDataWorkoutExercisesByDay(this.id, this.day)
            .subscribe(resp => {
            this.exercises = resp;
            this.isLoading = false;
        });
    }
};
WedayPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _services_admob_service__WEBPACK_IMPORTED_MODULE_6__["AdmobService"] }
];
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
//# sourceMappingURL=pages-weday-weday-module-es2015.js.map