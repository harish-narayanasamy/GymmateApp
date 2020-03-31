(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-levels-levels-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/levels/levels.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/levels/levels.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\r\n  <ion-toolbar mode=\"ios\" class=\"ion-color\" [style.background-color]=\"customColor\">\r\n      <ion-title class=\"ion-text-capitalize\">\r\n        {{strings.ST11}}\r\n      </ion-title>\r\n            <ion-buttons slot=\"start\">\r\n              <app-backbutton color=\"primary\"></app-backbutton>\r\n            </ion-buttons>\r\n            <ion-buttons slot=\"end\">\r\n              <ion-button  slot=\"start\" [routerLink]=\"['/tabs/tab1']\">\r\n                <img src=\"./assets/images/close.png\" class=\"close-img\"/> \r\n                </ion-button>\r\n            </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fixed class=\"ion-color\" [style.background-color]=\"customColor\">\r\n\r\n  <app-loading *ngIf=\"isLoading\"></app-loading>\r\n\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col *ngFor=\"let item of levels\" [routerLink]=\"['/wlevels', item.level_id, item.level_title]\" size=\"12\" [ngStyle]=\"{'height': height}\">\r\n        <div class=\"cardcategory\" [style.background-image]=\"'url(' + (item.level_image | image) + ')'\">\r\n          <div class=\"overlay\">\r\n          <div class=\"texts\">\r\n          <h1>{{item.level_title}}</h1>\r\n          </div>\r\n        </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/levels/levels-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/levels/levels-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: LevelsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelsPageRoutingModule", function() { return LevelsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _levels_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./levels.page */ "./src/app/pages/levels/levels.page.ts");




var routes = [
    {
        path: '',
        component: _levels_page__WEBPACK_IMPORTED_MODULE_3__["LevelsPage"]
    }
];
var LevelsPageRoutingModule = /** @class */ (function () {
    function LevelsPageRoutingModule() {
    }
    LevelsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LevelsPageRoutingModule);
    return LevelsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/levels/levels.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/levels/levels.module.ts ***!
  \***********************************************/
/*! exports provided: LevelsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelsPageModule", function() { return LevelsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _levels_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./levels-routing.module */ "./src/app/pages/levels/levels-routing.module.ts");
/* harmony import */ var _levels_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./levels.page */ "./src/app/pages/levels/levels.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









var LevelsPageModule = /** @class */ (function () {
    function LevelsPageModule() {
    }
    LevelsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
                _levels_routing_module__WEBPACK_IMPORTED_MODULE_5__["LevelsPageRoutingModule"]
            ],
            declarations: [_levels_page__WEBPACK_IMPORTED_MODULE_6__["LevelsPage"]]
        })
    ], LevelsPageModule);
    return LevelsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/levels/levels.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/levels/levels.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  -webkit-box-flex: 1;\n          flex: 1;\n  height: 100%; }\n\nion-row {\n  -webkit-box-flex: 1;\n          flex: 1;\n  height: 100%; }\n\n.cardcategory {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  border-radius: 8px; }\n\n.cardcategory .overlay {\n  background: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  text-align: left;\n  border-radius: 8px; }\n\n.cardcategory .texts:before {\n  content: \"\";\n  background: var(--ion-color-primary);\n  height: 3px;\n  display: block;\n  width: 40px;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  top: 0;\n  margin-bottom: 10px;\n  display: none; }\n\n.cardcategory .texts {\n  padding-bottom: 15px;\n  text-align: center;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  position: relative;\n  height: 20%;\n  bottom: 40%;\n  left: 10%; }\n\n.cardcategory .texts h1 {\n  color: white;\n  margin: 0;\n  font-size: 30px;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 30px;\n  letter-spacing: 1px;\n  font-family: 'Gilroy-blacktalic'; }\n\nion-header {\n  background-color: #191919;\n  height: 100%;\n  padding: 20px 0 0px 0 !important;\n  height: auto; }\n\n.ion-text-capitalize {\n  width: 100%;\n  color: #f7474f;\n  font-family: Proxima-bold;\n  font-size: 20px !important;\n  text-transform: none !important; }\n\nion-content {\n  background: #191919; }\n\nion-grid {\n  padding: 22px 8px; }\n\nion-col:nth-last-child(1) {\n  margin-bottom: 80px; }\n\nion-col {\n  -webkit-box-flex: 0 !important;\n          flex: 0 0 calc(calc(12 / var(--ion-grid-columns, 12)) * 90%) !important;\n  width: calc(calc(12 / var(--ion-grid-columns, 12)) * 90%) !important;\n  max-width: calc(calc(12 / var(--ion-grid-columns, 12)) * 90%) !important;\n  max-height: 135px;\n  min-height: 135px;\n  margin: 5px auto;\n  padding-left: 0px;\n  padding-right: 0px; }\n\n.close-img {\n  max-width: 16px;\n  max-height: 16px; }\n\n@media only screen and (max-width: 280px) {\n  .cardcategory .texts h1 {\n    font-size: 25px;\n    line-height: 28px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGV2ZWxzL0M6XFxVc2Vyc1xcSGFyaXNoXFxMb2NhbF9kZXZcXEd5bW1hdGVBcHAvc3JjXFxhcHBcXHBhZ2VzXFxsZXZlbHNcXGxldmVscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBTztVQUFQLE9BQU87RUFDUCxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksbUJBQU87VUFBUCxPQUFPO0VBQ1AsWUFBWSxFQUFBOztBQUloQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksOEJBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBaUI7RUFBakIsNkJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksV0FBVztFQUNYLG9DQUFvQztFQUNwQyxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sbUJBQW1CO0VBQ25CLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxvQkFBb0I7RUFFcEIsa0JBQWtCO0VBRWxCLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsU0FBUyxFQUFBOztBQUdiO0VBQ0ksWUFBWTtFQUNaLFNBQVM7RUFDVCxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0NBQWdDLEVBQUE7O0FBR3BDO0VBQ0kseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsWUFBYSxFQUFBOztBQUdqQjtFQUNJLFdBQVc7RUFDWCxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQiwrQkFBK0IsRUFBQTs7QUFHL0I7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSw4QkFBdUU7VUFBdkUsdUVBQXVFO0VBQ3ZFLG9FQUFvRTtFQUNwRSx3RUFBd0U7RUFDeEUsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNwQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUduQjtFQUNJLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSTtJQUNJLGVBQWU7SUFDZixpQkFBaUIsRUFBQSxFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xldmVscy9sZXZlbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWR7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5pb24tcm93e1xyXG4gICAgZmxleDogMTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5jYXJkY2F0ZWdvcnl7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5jYXJkY2F0ZWdvcnkgLm92ZXJsYXl7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTApO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uY2FyZGNhdGVnb3J5IC50ZXh0czpiZWZvcmV7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmNhcmRjYXRlZ29yeSAudGV4dHN7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMjAlO1xyXG4gICAgYm90dG9tOiA0MCU7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbn1cclxuXHJcbi5jYXJkY2F0ZWdvcnkgLnRleHRzIGgxe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3ktYmxhY2t0YWxpYyc7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweCAwIDBweCAwICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IGF1dG8gO1xyXG59XHJcblxyXG4uaW9uLXRleHQtY2FwaXRhbGl6ZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICNmNzQ3NGY7XHJcbiAgICBmb250LWZhbWlseTogUHJveGltYS1ib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jb250ZW50e1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxOTE5MTk7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWdyaWR7XHJcbiAgICAgICAgcGFkZGluZzogMjJweCA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNvbDpudGgtbGFzdC1jaGlsZCgxKXtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jb2x7XHJcbiAgICAgICAgZmxleDogMCAwIGNhbGMoY2FsYygxMiAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDEyKSkgKiA5MCUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoY2FsYygxMiAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDEyKSkgKiA5MCUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKGNhbGMoMTIgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogOTAlKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEzNXB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEzNXB4O1xyXG4gICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jbG9zZS1pbWd7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNnB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyODBweCkge1xyXG4gICAgICAgIC5jYXJkY2F0ZWdvcnkgLnRleHRzIGgxe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/levels/levels.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/levels/levels.page.ts ***!
  \*********************************************/
/*! exports provided: LevelsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelsPage", function() { return LevelsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LevelsPage = /** @class */ (function () {
    function LevelsPage(router, DataService, plt) {
        this.router = router;
        this.DataService = DataService;
        this.plt = plt;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
        this.levels = [];
        this.isLoading = false;
    }
    LevelsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.height = this.plt.height() / 4.4 + 'px';
        this.DataService.getDataLevels()
            .subscribe(function (resp) {
            _this.levels = resp;
            if (_this.levels.length === 0) {
                _this.height = '167.px';
            }
            else if (_this.levels.length === 3 || _this.levels.length === 2) {
                _this.height = 'inherit !important';
            }
            else if (_this.levels.length >= 4) {
                _this.height = _this.plt.height() / 4.4 + 'px';
            }
            _this.isLoading = false;
        });
    };
    LevelsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
    ]; };
    LevelsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-levels',
            template: __webpack_require__(/*! raw-loader!./levels.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/levels/levels.page.html"),
            styles: [__webpack_require__(/*! ./levels.page.scss */ "./src/app/pages/levels/levels.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
    ], LevelsPage);
    return LevelsPage;
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
//# sourceMappingURL=pages-levels-levels-module-es5.js.map