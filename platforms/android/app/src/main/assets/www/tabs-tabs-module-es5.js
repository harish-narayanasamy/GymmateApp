(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/tabs.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\r\n\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"tab1\" >\r\n      <img src=\"./assets/images/workout.png\" class=\"tab-img\"/> \r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab2\">\r\n      <img src=\"./assets/images/exercises_.png\" class=\"tab-img\">\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab3\">\r\n      <img src=\"./assets/images/diet_.png\" class=\"tab-img\">\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"tab4\">\r\n      <img src=\"./assets/images/blog_.png\" class=\"tab-img\">\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"tab5\">\r\n      <img src=\"./assets/images/profile_.png\" class=\"tab-img\">\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>"

/***/ }),

/***/ "./src/app/tabs/tabs-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");




var routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return Promise.all(/*! import() | pages-workouts-workouts-module */[__webpack_require__.e("default~pages-about-about-module~pages-aboutus-aboutus-module~pages-bmiinfo-bmiinfo-module~pages-bod~9dbe5797"), __webpack_require__.e("pages-workouts-workouts-module")]).then(__webpack_require__.bind(null, /*! ../pages/workouts/workouts.module */ "./src/app/pages/workouts/workouts.module.ts")).then(function (m) { return m.WorkoutsPageModule; });
                        }
                    }
                ]
            },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return Promise.all(/*! import() | pages-exercises-exercises-module */[__webpack_require__.e("default~pages-about-about-module~pages-aboutus-aboutus-module~pages-bmiinfo-bmiinfo-module~pages-bod~9dbe5797"), __webpack_require__.e("pages-exercises-exercises-module")]).then(__webpack_require__.bind(null, /*! ../pages/exercises/exercises.module */ "./src/app/pages/exercises/exercises.module.ts")).then(function (m) { return m.ExercisesPageModule; });
                        }
                    }
                ]
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return Promise.all(/*! import() | pages-diets-diets-module */[__webpack_require__.e("default~pages-about-about-module~pages-aboutus-aboutus-module~pages-bmiinfo-bmiinfo-module~pages-bod~9dbe5797"), __webpack_require__.e("pages-diets-diets-module")]).then(__webpack_require__.bind(null, /*! ../pages/diets/diets.module */ "./src/app/pages/diets/diets.module.ts")).then(function (m) { return m.DietsPageModule; });
                        }
                    }
                ]
            },
            {
                path: 'tab4',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return Promise.all(/*! import() | pages-posts-posts-module */[__webpack_require__.e("default~pages-about-about-module~pages-aboutus-aboutus-module~pages-bmiinfo-bmiinfo-module~pages-bod~9dbe5797"), __webpack_require__.e("pages-posts-posts-module")]).then(__webpack_require__.bind(null, /*! ../pages/posts/posts.module */ "./src/app/pages/posts/posts.module.ts")).then(function (m) { return m.PostsPageModule; });
                        }
                    }
                ]
            },
            {
                path: 'tab5',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return Promise.all(/*! import() | pages-profile-profile-module */[__webpack_require__.e("default~pages-about-about-module~pages-aboutus-aboutus-module~pages-bmiinfo-bmiinfo-module~pages-bod~9dbe5797"), __webpack_require__.e("pages-profile-profile-module")]).then(__webpack_require__.bind(null, /*! ../pages/profile/profile.module */ "./src/app/pages/profile/profile.module.ts")).then(function (m) { return m.ProfilePageModule; });
                        }
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");







var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-tab-button {\n  background-color: #313235; }\n\nion-tab-bar {\n  border: none; }\n\nimg {\n  max-width: 27px !important;\n  max-height: 27px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9DOlxcVXNlcnNcXEhhcmlzaFxcTG9jYWxfZGV2XFxHeW1tYXRlQXBwL3NyY1xcYXBwXFx0YWJzXFx0YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSwwQkFBMEI7RUFDMUIsMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRhYi1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzMjM1O1xyXG59XHJcblxyXG5pb24tdGFiLWJhcntcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuaW1ne1xyXG4gICAgbWF4LXdpZHRoOiAyN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtaGVpZ2h0OiAyN3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabsPage = /** @class */ (function () {
    function TabsPage() {
    }
    TabsPage.prototype.ngOnInit = function () {
    };
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es5.js.map