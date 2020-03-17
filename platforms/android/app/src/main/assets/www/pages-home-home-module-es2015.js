(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"darkheader\">\n\n  <!--\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-button (click)=\"openMenu()\">\n              <ion-icon name=\"md-menu\"></ion-icon>\n          </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n  -->\n</ion-header>\n\n<ion-content color=\"primary\">\n\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row class=\"ion-justify-content-center ion-align-items-center row-header-bg\" [ngStyle]=\"{'height': innerHeight}\">\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <img src=\"./assets/images/logo.png\" class=\"col-header-logo\">\n        </ion-col>\n      </ion-row>\n  \n      <ion-row class=\"menu-cols align-items-stretch\">\n          <ion-col size=\"6\" [routerLink]=\"['/workouts']\">\n            <img src=\"./assets/images/workouts.png\">\n            <ion-label>{{strings.ST1}}</ion-label>\n          </ion-col>\n\n          <ion-col size=\"6\" [routerLink]=\"['/exercises']\">\n              <img src=\"./assets/images/exercises.png\">\n              <ion-label>{{strings.ST2}}</ion-label>\n          </ion-col>\n\n          <ion-col size=\"6\" [routerLink]=\"['/diets']\">\n              <img src=\"./assets/images/diets.png\">\n              <ion-label>{{strings.ST3}}</ion-label>\n          </ion-col>\n            \n          <ion-col size=\"6\" [routerLink]=\"['/posts']\">\n              <img src=\"./assets/images/blog.png\">\n              <ion-label>{{strings.ST4}}</ion-label>\n          </ion-col>\n\n          <ion-col size=\"6\" [routerLink]=\"['/calculator']\">\n              <img src=\"./assets/images/calculator.png\">\n              <ion-label>{{strings.ST105}}</ion-label>\n          </ion-col>\n            \n          <ion-col size=\"6\" [routerLink]=\"['/motivation']\">\n              <img src=\"./assets/images/quotes.png\">\n              <ion-label>{{strings.ST5}}</ion-label>\n          </ion-col>\n\n      </ion-row>\n  \n    </ion-grid>\n \n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row-header-bg {\n  background-image: url('header.jpg');\n  background-size: cover;\n  background-position: center; }\n\n.header-md:after {\n  display: none !important; }\n\n.col-header-logo {\n  max-width: 130px; }\n\n.menu-cols {\n  padding-top: 30px; }\n\n.menu-cols ion-col {\n  text-align: center;\n  padding: 20px 10px; }\n\n.menu-cols ion-col img {\n  max-width: 55px;\n  width: 100%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 14px; }\n\n.menu-cols ion-label {\n  text-transform: uppercase;\n  opacity: 0.5;\n  font-size: 14px;\n  font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXEhhcmlzaFxcTG9jYWxfZGV2XFxpb25pY1xcR3ltbWF0ZS9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUNBQTBEO0VBQzFELHNCQUFzQjtFQUN0QiwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSSx3QkFBd0IsRUFBQTs7QUFHNUI7RUFDQSxnQkFBZ0IsRUFBQTs7QUFHaEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDQSxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBR2xCO0VBQ0ksZUFBZTtFQUNmLFdBQVc7RUFDWCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWhlYWRlci1iZ3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uaGVhZGVyLW1kOmFmdGVye1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmNvbC1oZWFkZXItbG9nb3tcbm1heC13aWR0aDogMTMwcHg7XG59XG5cbi5tZW51LWNvbHN7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbi5tZW51LWNvbHMgaW9uLWNvbHtcbnRleHQtYWxpZ246IGNlbnRlcjtcbnBhZGRpbmc6IDIwcHggMTBweDtcbn1cblxuLm1lbnUtY29scyBpb24tY29sIGltZ3tcbiAgICBtYXgtd2lkdGg6IDU1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XG59O1xuXG4ubWVudS1jb2xzIGlvbi1sYWJlbHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");




let HomePage = class HomePage {
    constructor(menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_3__["strings"];
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(true, 'customMenu');
    }
    ngOnInit() {
        this.innerHeight = window.innerHeight / 3 + 'px';
    }
    openMenu() {
        this.menuCtrl.enable(true, 'customMenu');
        this.menuCtrl.open('customMenu');
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map