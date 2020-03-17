(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ebodyparts-ebodyparts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ebodyparts/ebodyparts.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ebodyparts/ebodyparts.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\n  <ion-toolbar mode=\"ios\">\n    <ion-title class=\"ion-text-capitalize\">\n      {{title}}\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <app-backbutton color=\"dark\"></app-backbutton>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <app-loading *ngIf=\"isLoading\"></app-loading>\n\n  <app-empty *ngIf=\"exercises.length === 0\" [title]=\"strings.ST140\"></app-empty>\n\n  <ion-list lines=\"none\" class=\"ion-padding-top\">\n    <ng-container *ngFor=\"let item of exercises\" >\n\n\n      <ion-item  *ngIf=\"subscribe;else notShow\" [routerLink]=\"['/edetails', item.exercise_id]\">\n\n        <ion-avatar slot=\"start\">\n          <img [src]=\"item.exercise_image | image\">\n        </ion-avatar>\n        <ion-label>{{item.exercise_title}}</ion-label>\n\n      </ion-item>\n\n      <ng-template #notShow >\n        <ion-item class=\"disabled\" [routerLink]=\"['/tabs/tab5']\">\n\n          <ion-avatar slot=\"start\">\n            <img [src]=\"item.exercise_image | image\">\n          </ion-avatar>\n          <ion-label>{{item.exercise_title}}</ion-label>\n  \n        </ion-item>\n      </ng-template>\n    </ng-container>\n  </ion-list>\n\n</ion-content>"

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

module.exports = "ion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 124px !important;\n  max-height: 124px !important;\n  border-radius: 0; }\n\nion-avatar img {\n  border-radius: 0; }\n\nion-item ion-label {\n  padding-left: 0px;\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 13px;\n  white-space: normal !important; }\n\nion-item {\n  border-bottom: 1px solid #eee !important; }\n\nion-item {\n  --background-focused: #fff !important;\n  --background-activated: #fff !important;\n  --detail-icon-color: var(--ion-color-primary);\n  --detail-icon-opacity: 1; }\n\nion-item:last-child {\n  border-bottom: none !important; }\n\n.disabled {\n  opacity: 0.2;\n  position: relative;\n  background: url('diets.png') no-repeat center center;\n  z-index: 1000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWJvZHlwYXJ0cy9DOlxcVXNlcnNcXEhhcmlzaFxcTG9jYWxfZGV2XFxpb25pY1xcR3ltbWF0ZS9zcmNcXGFwcFxccGFnZXNcXGVib2R5cGFydHNcXGVib2R5cGFydHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFnQixFQUFBOztBQUlwQjtFQUNJLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZiw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSx3Q0FBd0MsRUFBQTs7QUFLNUM7RUFDSSxxQ0FBcUI7RUFDckIsdUNBQXVCO0VBQ3ZCLDZDQUFvQjtFQUNwQix3QkFBc0IsRUFBQTs7QUFHMUI7RUFDSSw4QkFBOEIsRUFBQTs7QUFHbEM7RUFFSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG9EQUEyRTtFQUMzRSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lYm9keXBhcnRzL2Vib2R5cGFydHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhciB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDEyNHB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMTI0cHggIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG5pb24tYXZhdGFyIGltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcblxufVxuXG5pb24taXRlbSBpb24tbGFiZWwge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlICFpbXBvcnRhbnQ7XG5cblxufVxuXG5pb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1kZXRhaWwtaWNvbi1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tZGV0YWlsLWljb24tb3BhY2l0eTogMTtcbn1cblxuaW9uLWl0ZW06bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZGlzYWJsZWQge1xuICAvLyAgcG9pbnRlci1ldmVudHM6IG5vbmU7IC8vVGhpcyBtYWtlcyBpdCBub3QgY2xpY2thYmxlXG4gICAgb3BhY2l0eTogMC4yOyAvL1RoaXMgZ3JheXMgaXQgb3V0IHRvIGxvb2sgZGlzYWJsZWRcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2RpZXRzLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICAgIHotaW5kZXg6IDEwMDA7XG59Il19 */"

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
        this.subscribe = false;
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