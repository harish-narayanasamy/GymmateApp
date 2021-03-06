(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-diets-diets-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/diets/diets.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/diets/diets.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"!isLoading\" class=\"lightheader\" mode=\"ios\" no-border>\r\n  <ion-toolbar mode=\"ios\" class=\"ion-color\" [style.background-color]=\"customColor\">\r\n      <ion-title class=\"ion-text-capitalize\">\r\n          {{strings.ST3}}\r\n        </ion-title>\r\n\r\n         <!--\r\n        <ion-buttons slot=\"start\">\r\n          <app-backbutton color=\"light\"></app-backbutton>\r\n        </ion-buttons>\r\n        -->\r\n\r\n      <ion-buttons slot=\"end\">\r\n          <ion-button [routerLink]=\"['/categories']\">\r\n          </ion-button>\r\n      </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"ion-no-padding ion-color\" [style.background-color]=\"customColor\">\r\n\r\n<app-loading *ngIf=\"isLoading\"></app-loading>\r\n\r\n<ion-slides *ngIf=\"isReady\" [options]=\"slideOpts\" mode=\"ios\">\r\n  <ion-slide *ngFor=\"let item of diets\" [routerLink]=\"['/ddetails', item.diet_id]\">\r\n\r\n  </ion-slide>\r\n</ion-slides>\r\n\r\n<ion-grid>\r\n <ion-row>\r\n   <ion-col size=\"6\" *ngFor=\"let item of categories\" [routerLink]=\"['/cdiets', item.category_id, item.category_title]\">\r\n      <div class=\"cardcategory\" [style.background-image]=\"'url(' + (item.category_image | image) + ')'\">\r\n          <div class=\"overlay\">\r\n          <div class=\"texts\">\r\n          <h1>{{item.category_title}}</h1>\r\n          </div>\r\n        </div>\r\n        </div>\r\n   </ion-col>\r\n </ion-row>\r\n</ion-grid>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/diets/diets-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/diets/diets-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: DietsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DietsPageRoutingModule", function() { return DietsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _diets_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./diets.page */ "./src/app/pages/diets/diets.page.ts");




var routes = [
    {
        path: '',
        component: _diets_page__WEBPACK_IMPORTED_MODULE_3__["DietsPage"]
    }
];
var DietsPageRoutingModule = /** @class */ (function () {
    function DietsPageRoutingModule() {
    }
    DietsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DietsPageRoutingModule);
    return DietsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/diets/diets.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/diets/diets.module.ts ***!
  \*********************************************/
/*! exports provided: DietsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DietsPageModule", function() { return DietsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _diets_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./diets-routing.module */ "./src/app/pages/diets/diets-routing.module.ts");
/* harmony import */ var _diets_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./diets.page */ "./src/app/pages/diets/diets.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









var DietsPageModule = /** @class */ (function () {
    function DietsPageModule() {
    }
    DietsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
                _diets_routing_module__WEBPACK_IMPORTED_MODULE_5__["DietsPageRoutingModule"]
            ],
            declarations: [_diets_page__WEBPACK_IMPORTED_MODULE_6__["DietsPage"]]
        })
    ], DietsPageModule);
    return DietsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/diets/diets.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/diets/diets.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 100%;\n  height: 250px;\n  background-size: cover;\n  background-position: center;\n  position: relative; }\n\n.card .overlay {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(10%, rgba(0, 0, 0, 0.4)), to(rgba(0, 0, 0, 0.75)));\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 10%, rgba(0, 0, 0, 0.75) 100%);\n  position: absolute;\n  width: 100%;\n  height: 250px;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  text-align: left; }\n\n.card .texts {\n  padding: 30px 15px; }\n\n.card .texts p {\n  color: var(--ion-color-primary);\n  margin: 0;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 14px;\n  margin-bottom: 6px; }\n\n.card .texts h1 {\n  color: white;\n  margin: 0;\n  font-weight: bold;\n  font-size: 18px; }\n\n.cardcategory {\n  width: 100%;\n  height: 180px;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  border-radius: 8px; }\n\n.cardcategory .overlay {\n  position: absolute;\n  width: 100%;\n  height: 180px;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  text-align: left;\n  border-radius: 8px; }\n\n.cardcategory .texts {\n  padding: 15px;\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(100%, rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.5)));\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5) 100%);\n  width: 100%;\n  text-align: left; }\n\n.cardcategory .texts h1 {\n  color: white;\n  margin: 0;\n  line-height: normal;\n  font-size: 18px;\n  display: block;\n  overflow: hidden;\n  font-family: 'Gilroy-Extrabold';\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\nion-header {\n  background-color: #191919;\n  height: 100%;\n  padding: 10px 0 10px 0 !important;\n  height: auto; }\n\n.ion-text-capitalize {\n  width: 100%;\n  color: #eafff7;\n  font-family: Proxima-bold;\n  font-size: 32px !important;\n  line-height: 32px;\n  text-transform: none !important;\n  padding: 0 5%;\n  text-align: left; }\n\nion-content {\n  background: #191919; }\n\nion-grid {\n  padding: 10px 8px; }\n\nion-col {\n  padding: 8px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGlldHMvQzpcXFVzZXJzXFxIYXJpc2hcXExvY2FsX2RldlxcR3ltbWF0ZUFwcC9zcmNcXGFwcFxccGFnZXNcXGRpZXRzXFxkaWV0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0Isa0JBQWtCLEVBQUE7O0FBR3RCO0VBR0kseUhBQWtGO0VBQWxGLHdGQUFrRjtFQUNsRixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixxQkFBeUI7VUFBekIseUJBQXlCO0VBQ3pCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQWlCO0VBQWpCLDZCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksK0JBQThCO0VBQzlCLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxZQUFZO0VBQ1osU0FBUztFQUNULGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixxQkFBeUI7VUFBekIseUJBQXlCO0VBQ3pCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQWlCO0VBQWpCLDZCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGFBQWE7RUFHYix5SEFBeUY7RUFBekYsd0ZBQXlGO0VBQ3pGLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxZQUFZO0VBQ1osU0FBUztFQUNULG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQiwrQkFBK0I7RUFFL0IsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLFlBQWEsRUFBQTs7QUFHakI7RUFDSSxXQUFXO0VBQ1gsY0FBYztFQUNkLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsZ0JBQWdCLEVBQUE7O0FBR2hCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kaWV0cy9kaWV0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYXJkIC5vdmVybGF5e1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgwLDAsMCwwLjQpIDEwJSwgcmdiYSgwLDAsMCwwLjc1KSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIHJnYmEoMCwwLDAsMC40KSAxMCUscmdiYSgwLDAsMCwwLjc1KSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICByZ2JhKDAsMCwwLDAuNCkgMTAlLHJnYmEoMCwwLDAsMC43NSkgMTAwJSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uY2FyZCAudGV4dHN7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDE1cHg7XHJcbn1cclxuXHJcbi5jYXJkIC50ZXh0cyBwe1xyXG4gICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG59XHJcblxyXG4uY2FyZCAudGV4dHMgaDF7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmNhcmRjYXRlZ29yeXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5jYXJkY2F0ZWdvcnkgLm92ZXJsYXl7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uY2FyZGNhdGVnb3J5IC50ZXh0c3tcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDAsIDAsIDAsIDAuNSkgMTAwJSwgcmdiYSgwLCAwLCAwLCAwLjUpIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgwLCAwLCAwLCAwLjUpIDEwMCUsIHJnYmEoMCwgMCwgMCwgMC41KSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICByZ2JhKDAsIDAsIDAsIDAuNSkgMTAwJSwgcmdiYSgwLCAwLCAwLCAwLjUpIDEwMCUpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uY2FyZGNhdGVnb3J5IC50ZXh0cyBoMXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBmb250LWZhbWlseTogJ0dpbHJveS1FeHRyYWJvbGQnO1xyXG5cclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbn1cclxuaW9uLWhlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzE5MTkxOSA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IGF1dG8gO1xyXG59XHJcblxyXG4uaW9uLXRleHQtY2FwaXRhbGl6ZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICNlYWZmZjc7XHJcbiAgICBmb250LWZhbWlseTogUHJveGltYS1ib2xkO1xyXG4gICAgZm9udC1zaXplOiAzMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwIDUlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tY29udGVudHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTkxOTE5O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1ncmlke1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jb2x7XHJcbiAgICAgICAgcGFkZGluZzogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/diets/diets.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/diets/diets.page.ts ***!
  \*******************************************/
/*! exports provided: DietsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DietsPage", function() { return DietsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");




var DietsPage = /** @class */ (function () {
    function DietsPage(DataService) {
        this.DataService = DataService;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
        this.diets = [];
        this.categories = [];
        this.isLoading = false;
        this.isReady = true;
        this.slideOpts = {
            slidesPerView: 1,
            freeMode: false
        };
    }
    DietsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.DataService.getDataFeaturedDiets()
            .subscribe(function (resp) {
            _this.diets = resp;
            _this.isReady = true;
        });
        this.DataService.getDataCategories()
            .subscribe(function (resp) {
            _this.categories = resp;
            _this.isLoading = false;
        });
    };
    DietsPage.ctorParameters = function () { return [
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
    ]; };
    DietsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-diets',
            template: __webpack_require__(/*! raw-loader!./diets.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/diets/diets.page.html"),
            styles: [__webpack_require__(/*! ./diets.page.scss */ "./src/app/pages/diets/diets.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], DietsPage);
    return DietsPage;
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
//# sourceMappingURL=pages-diets-diets-module-es5.js.map