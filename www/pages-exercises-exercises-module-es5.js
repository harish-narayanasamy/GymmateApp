(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-exercises-exercises-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/exercises/exercises.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/exercises/exercises.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\r\n    <ion-toolbar mode=\"ios\" class=\"ion-color\" [style.background-color]=\"customColor\">\r\n        <ion-title class=\"ion-text-capitalize\">\r\n            {{strings.ST2}} \r\n          </ion-title>\r\n        <!--\r\n        <ion-buttons slot=\"start\">\r\n            <app-backbutton color=\"dark\"></app-backbutton>\r\n          </ion-buttons>\r\n-->\r\n  </ion-toolbar>\r\n  </ion-header>\r\n    \r\n  <ion-content fixed class=\"ion-color\" [style.background-color]=\"customColor\">\r\n    \r\n        <ion-grid>\r\n          \r\n            <ion-row>\r\n              <ion-col [routerLink]=\"['/bodyparts']\">\r\n                <div class=\"card-center-image\" style=\"background-image: url('./assets/images/bodyparts.jpg');\">\r\n                  <div class=\"card-center-bg\">\r\n                    <div class=\"card-center-text\">\r\n                    <p class=\"title\">{{strings.ST37}}</p>\r\n                    <p class=\"subtitle\">{{strings.ST40}}</p>\r\n                  </div>\r\n                  </div>\r\n                </div>\r\n                \r\n              </ion-col>\r\n            </ion-row>\r\n          \r\n            <ion-row>\r\n                <ion-col [routerLink]=\"['/equipments']\">\r\n                    <div class=\"card-center-image\" style=\"background-image: url('./assets/images/equipments.jpg');\">\r\n                        <div class=\"card-center-bg\">\r\n                          <div class=\"card-center-text\">\r\n                              <p class=\"title\">{{strings.ST38}}</p>\r\n                              <p class=\"subtitle\">{{strings.ST39}}</p>\r\n                        </div>\r\n                        </div>\r\n                      </div>\r\n                </ion-col>\r\n              </ion-row>\r\n    \r\n          </ion-grid>\r\n    \r\n    </ion-content>"

/***/ }),

/***/ "./src/app/pages/exercises/exercises-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/exercises/exercises-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ExercisesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisesPageRoutingModule", function() { return ExercisesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _exercises_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exercises.page */ "./src/app/pages/exercises/exercises.page.ts");




var routes = [
    {
        path: '',
        component: _exercises_page__WEBPACK_IMPORTED_MODULE_3__["ExercisesPage"]
    }
];
var ExercisesPageRoutingModule = /** @class */ (function () {
    function ExercisesPageRoutingModule() {
    }
    ExercisesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ExercisesPageRoutingModule);
    return ExercisesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/exercises/exercises.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/exercises/exercises.module.ts ***!
  \*****************************************************/
/*! exports provided: ExercisesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisesPageModule", function() { return ExercisesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _exercises_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exercises-routing.module */ "./src/app/pages/exercises/exercises-routing.module.ts");
/* harmony import */ var _exercises_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exercises.page */ "./src/app/pages/exercises/exercises.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var ExercisesPageModule = /** @class */ (function () {
    function ExercisesPageModule() {
    }
    ExercisesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _exercises_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExercisesPageRoutingModule"]
            ],
            declarations: [_exercises_page__WEBPACK_IMPORTED_MODULE_6__["ExercisesPage"]]
        })
    ], ExercisesPageModule);
    return ExercisesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/exercises/exercises.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/exercises/exercises.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-bottom: 20px;\n  margin-top: 20px; }\n  ion-grid ion-row {\n    -webkit-box-flex: 1;\n            flex-grow: 1;\n    height: 100%; }\n  ion-content {\n  background: #191919; }\n  ion-header {\n  background-color: #212121;\n  height: 100%;\n  padding: 10px 0 10px 0 !important;\n  height: auto; }\n  .ion-text-capitalize {\n  width: 100%;\n  color: #f7474f;\n  font-family: Proxima-bold;\n  font-size: 20px !important;\n  text-transform: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXhlcmNpc2VzL0M6XFxVc2Vyc1xcSGFyaXNoXFxMb2NhbF9kZXZcXEd5bW1hdGVBcHAvc3JjXFxhcHBcXHBhZ2VzXFxleGVyY2lzZXNcXGV4ZXJjaXNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBO0VBTHBCO0lBUVEsbUJBQVk7WUFBWixZQUFZO0lBQ1osWUFBWSxFQUFBO0VBS2xCO0VBQ0UsbUJBQW1CLEVBQUE7RUFHdkI7RUFDSSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxZQUFhLEVBQUE7RUFHakI7RUFDSSxXQUFXO0VBQ1gsY0FBYztFQUNkLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsK0JBQStCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9leGVyY2lzZXMvZXhlcmNpc2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlkIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgXHJcbiAgICBpb24tcm93IHtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbiBcclxuICBpb24tY29udGVudHtcclxuICAgIGJhY2tncm91bmQ6ICMxOTE5MTk7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyMTIxMjEgO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweCAwIDEwcHggMCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBhdXRvIDtcclxufVxyXG5cclxuLmlvbi10ZXh0LWNhcGl0YWxpemV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjZjc0NzRmO1xyXG4gICAgZm9udC1mYW1pbHk6IFByb3hpbWEtYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/exercises/exercises.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/exercises/exercises.page.ts ***!
  \***************************************************/
/*! exports provided: ExercisesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisesPage", function() { return ExercisesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");



var ExercisesPage = /** @class */ (function () {
    function ExercisesPage() {
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
    }
    ExercisesPage.prototype.ngOnInit = function () {
    };
    ExercisesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-exercises',
            template: __webpack_require__(/*! raw-loader!./exercises.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/exercises/exercises.page.html"),
            styles: [__webpack_require__(/*! ./exercises.page.scss */ "./src/app/pages/exercises/exercises.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExercisesPage);
    return ExercisesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-exercises-exercises-module-es5.js.map