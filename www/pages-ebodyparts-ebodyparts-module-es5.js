(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ebodyparts-ebodyparts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ebodyparts/ebodyparts.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ebodyparts/ebodyparts.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\r\n  <ion-toolbar mode=\"ios\" class=\"ion-color\" [style.background-color]=\"customColor\">\r\n    <ion-title class=\"ion-text-capitalize\">\r\n      {{title}}\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <app-backbutton class=\"arrow\"></app-backbutton>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content fixed class=\"ion-color\" [style.background-color]=\"customColor\">\r\n\r\n  <app-loading *ngIf=\"isLoading\"></app-loading>\r\n\r\n  <app-empty *ngIf=\"exercises.length === 0\" [title]=\"strings.ST140\"></app-empty>\r\n\r\n  <ion-list lines=\"none\" class=\"ion-padding-top\">\r\n    <ng-container *ngFor=\"let item of exercises\" >\r\n\r\n\r\n      <ion-item  *ngIf=\"subscribe;else notShow ion-color\" [routerLink]=\"['/edetails', item.exercise_id]\" [style.background-color]=\"customColor\">\r\n\r\n        <ion-avatar slot=\"start\">\r\n          <img class=\"body-img\" [src]=\"item.exercise_image | image\">\r\n        </ion-avatar>\r\n        <div class=\"body-info\">\r\n          <ion-label>{{item.exercise_title}}</ion-label>\r\n          <p>10 Reps - 4 Sets</p>\r\n          </div>\r\n      </ion-item>\r\n\r\n      <ng-template #notShow >\r\n        <ion-item class=\"disabled\" [routerLink]=\"['/profile']\">\r\n\r\n          <ion-avatar slot=\"stat\">\r\n            <img class=\"body-img\" [src]=\"item.exercise_image | image\">\r\n          </ion-avatar>\r\n          <div class=\"body-info\">\r\n          <ion-label>{{item.exercise_title}}</ion-label>\r\n          <p>10 Reps - 4 Sets</p>\r\n          </div>\r\n        </ion-item>\r\n      </ng-template>\r\n    </ng-container>\r\n  </ion-list>\r\n\r\n</ion-content>"

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

module.exports = "ion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 90px !important;\n  max-height: 98px !important;\n  border-radius: 0;\n  margin: 0 15px 0px 0 !important; }\n\nion-avatar img {\n  border-radius: 0; }\n\nion-item ion-label {\n  padding-left: 0px;\n  white-space: normal !important;\n  color: #ffffff !important;\n  font-size: 18px;\n  line-height: 20px;\n  font-family: 'Proxima-bold'; }\n\nion-item {\n  border-bottom: 1px solid #eee !important; }\n\nion-item {\n  --background-focused: #191919 !important;\n  --background-activated: #191919 !important;\n  --detail-icon-color: transparent;\n  --detail-icon-opacity: 1;\n  background: none !important;\n  border: none !important; }\n\n.item-native {\n  background-color: #191919 !important;\n  display: none !important; }\n\n.disabled {\n  opacity: 1;\n  position: relative;\n  z-index: 1000; }\n\n.item-native {\n  background-color: #454545; }\n\n.in-toolbar {\n  padding: 30px 0 10px 0 !important;\n  background: #212121; }\n\n.ion-page .in-toolbar .toolbar-background {\n  background: transparent !important; }\n\nion-content {\n  background: #191919; }\n\nion-list {\n  background-color: #191919;\n  padding-top: 30px; }\n\nion-item {\n  --background: none !important;\n  margin-bottom: 20px !important;\n  --padding-start: 0px !important;\n  --inner-padding-end: 0px !important;\n  max-width: 90%;\n  margin: 0 auto;\n  border: 1px solid #313235 !important;\n  border-radius: 5px; }\n\n.body-img {\n  width: 90px;\n  height: 98px; }\n\n.ion-text-capitalize {\n  width: 100%;\n  color: #f7474f;\n  font-family: Proxima-bold;\n  font-size: 20px !important;\n  text-transform: none !important; }\n\np {\n  color: #ffffff;\n  margin: 5px 0;\n  font-size: 16px;\n  line-height: normal;\n  letter-spacing: normal;\n  font-family: 'Muli-light'; }\n\n.body-info {\n  position: absolute;\n  top: 20px; }\n\nion-item {\n  --background-focused: #fff !important;\n  --background-activated: #fff !important;\n  --detail-icon-color: var(--ion-color-primary);\n  --detail-icon-opacity: 1;\n  --detail-icon-transform: rotate(90deg) !important; }\n\n.body-info p {\n  font-size: 14px;\n  color: #979797;\n  line-height: 16px;\n  font-family: 'Nunito-light'; }\n\n.arrow {\n  color: #f7474f !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWJvZHlwYXJ0cy9DOlxcVXNlcnNcXEhhcmlzaFxcTG9jYWxfZGV2XFxHeW1tYXRlQXBwL3NyY1xcYXBwXFxwYWdlc1xcZWJvZHlwYXJ0c1xcZWJvZHlwYXJ0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLCtCQUErQixFQUFBOztBQUduQztFQUNJLGdCQUFnQixFQUFBOztBQUlwQjtFQUNJLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksd0NBQXdDLEVBQUE7O0FBRzVDO0VBQ0ksd0NBQXFCO0VBQ3JCLDBDQUF1QjtFQUN2QixnQ0FBb0I7RUFDcEIsd0JBQXNCO0VBRXRCLDJCQUEyQjtFQUMzQix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxvQ0FBb0M7RUFDcEMsd0JBQXdCLEVBQUE7O0FBRTVCO0VBRUksVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixhQUFhLEVBQUE7O0FBR2pCO0VBQ0kseUJBQXdCLEVBQUE7O0FBRzVCO0VBQ0ksaUNBQWlDO0VBQ2pDLG1CQUFtQixFQUFBOztBQUd2QjtFQUdRLGtDQUFrQyxFQUFBOztBQUt4QztFQUNFLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLHlCQUF5QjtFQUN6QixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSw2QkFBYTtFQUNiLDhCQUE4QjtFQUM5QiwrQkFBZ0I7RUFDaEIsbUNBQW9CO0VBQ3BCLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsb0NBQW9DO0VBQ3BDLGtCQUFrQixFQUFBOztBQUlyQjtFQUNHLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Y7RUFDRyxXQUFXO0VBQ1gsY0FBYztFQUNkLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsK0JBQStCLEVBQUE7O0FBR2xDO0VBQ0ksY0FBYztFQUNkLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUyxFQUFBOztBQUdiO0VBQ0cscUNBQXFCO0VBQ3JCLHVDQUF1QjtFQUN2Qiw2Q0FBb0I7RUFDcEIsd0JBQXNCO0VBQ3RCLGlEQUF3QixFQUFBOztBQUczQjtFQUNJLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLDJCQUEyQixFQUFBOztBQUkvQjtFQUNJLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWJvZHlwYXJ0cy9lYm9keXBhcnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiA5MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtaGVpZ2h0OiA5OHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgbWFyZ2luOiAwIDE1cHggMHB4IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWF2YXRhciBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuXHJcbn1cclxuXHJcbmlvbi1pdGVtIGlvbi1sYWJlbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUHJveGltYS1ib2xkJztcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICMxOTE5MTkgIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMxOTE5MTkgIWltcG9ydGFudDtcclxuICAgIC0tZGV0YWlsLWljb24tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1kZXRhaWwtaWNvbi1vcGFjaXR5OiAxO1xyXG5cclxuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaXRlbS1uYXRpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5ICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRpc2FibGVkIHtcclxuICAvLyAgcG9pbnRlci1ldmVudHM6IG5vbmU7IC8vVGhpcyBtYWtlcyBpdCBub3QgY2xpY2thYmxlXHJcbiAgICBvcGFjaXR5OiAxOyAvL1RoaXMgZ3JheXMgaXQgb3V0IHRvIGxvb2sgZGlzYWJsZWRcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi5pdGVtLW5hdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzQ1NDU0NTtcclxufVxyXG5cclxuLmluLXRvb2xiYXJ7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDAgMTBweCAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjEyMTIxO1xyXG59XHJcblxyXG4uaW9uLXBhZ2Uge1xyXG4gICAgLmluLXRvb2xiYXIge1xyXG4gICAgICAudG9vbGJhci1iYWNrZ3JvdW5kIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpb24tY29udGVudHtcclxuICAgIGJhY2tncm91bmQ6ICMxOTE5MTk7XHJcbn1cclxuXHJcbmlvbi1saXN0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMTkxOTE5IDtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcbmlvbi1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMxMzIzNSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxufVxyXG5cclxuIC5ib2R5LWltZ3tcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgaGVpZ2h0OiA5OHB4O1xyXG4gfSBcclxuXHJcbiAuaW9uLXRleHQtY2FwaXRhbGl6ZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICNmNzQ3NGY7XHJcbiAgICBmb250LWZhbWlseTogUHJveGltYS1ib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfSAgIFxyXG5cclxuIHB7XHJcbiAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgIGZvbnQtZmFtaWx5OiAnTXVsaS1saWdodCc7XHJcbiB9XHJcblxyXG4gLmJvZHktaW5mb3tcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgdG9wOiAyMHB4O1xyXG4gfVxyXG5cclxuIGlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAtLWRldGFpbC1pY29uLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAtLWRldGFpbC1pY29uLW9wYWNpdHk6IDE7XHJcbiAgICAtLWRldGFpbC1pY29uLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4gLmJvZHktaW5mbyBwe1xyXG4gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICBjb2xvcjogIzk3OTc5NztcclxuICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICBmb250LWZhbWlseTogJ051bml0by1saWdodCc7XHJcblxyXG4gfVxyXG5cclxuIC5hcnJvd3tcclxuICAgICBjb2xvcjogI2Y3NDc0ZiAhaW1wb3J0YW50O1xyXG4gfSJdfQ== */"

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









var EbodypartsPage = /** @class */ (function () {
    function EbodypartsPage(dataService, router, route, plt, admob, auth, subService) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.plt = plt;
        this.admob = admob;
        this.auth = auth;
        this.subService = subService;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_5__["strings"];
        this.exercises = [];
        this.isLoading = false;
    }
    EbodypartsPage.prototype.ngOnInit = function () {
        this.admob.BannerAd();
        this.subscribe = true;
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
                    _this.subscribe = data.status;
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
        { type: _services_admob_service__WEBPACK_IMPORTED_MODULE_6__["AdmobService"] },
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
            _services_admob_service__WEBPACK_IMPORTED_MODULE_6__["AdmobService"],
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