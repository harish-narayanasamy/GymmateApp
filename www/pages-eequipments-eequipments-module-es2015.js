(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-eequipments-eequipments-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/eequipments/eequipments.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/eequipments/eequipments.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\r\n  <ion-toolbar mode=\"ios\">\r\n      <ion-title class=\"ion-text-capitalize\">\r\n        {{title}}\r\n      </ion-title>\r\n            <ion-buttons slot=\"start\">\r\n              <app-backbutton color=\"#f7474f\"></app-backbutton>\r\n            </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  \r\n  <app-loading *ngIf=\"isLoading\"></app-loading>\r\n\r\n  <app-empty *ngIf=\"exercises.length === 0\" [title]=\"strings.ST140\"></app-empty>\r\n\r\n  <ion-list lines=\"none\" class=\"ion-padding-top\">\r\n\r\n  <ion-item *ngFor=\"let item of exercises\" [routerLink]=\"['/edetails', item.exercise_id]\">\r\n      <ion-avatar slot=\"start\">\r\n        <img [src]=\"item.exercise_image | image\">\r\n      </ion-avatar>\r\n      <ion-label>{{item.exercise_title}}</ion-label>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/eequipments/eequipments-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/eequipments/eequipments-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: EequipmentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EequipmentsPageRoutingModule", function() { return EequipmentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _eequipments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eequipments.page */ "./src/app/pages/eequipments/eequipments.page.ts");




const routes = [
    {
        path: '',
        component: _eequipments_page__WEBPACK_IMPORTED_MODULE_3__["EequipmentsPage"]
    }
];
let EequipmentsPageRoutingModule = class EequipmentsPageRoutingModule {
};
EequipmentsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EequipmentsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/eequipments/eequipments.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/eequipments/eequipments.module.ts ***!
  \*********************************************************/
/*! exports provided: EequipmentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EequipmentsPageModule", function() { return EequipmentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _eequipments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eequipments-routing.module */ "./src/app/pages/eequipments/eequipments-routing.module.ts");
/* harmony import */ var _eequipments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eequipments.page */ "./src/app/pages/eequipments/eequipments.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









let EequipmentsPageModule = class EequipmentsPageModule {
};
EequipmentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _eequipments_routing_module__WEBPACK_IMPORTED_MODULE_5__["EequipmentsPageRoutingModule"]
        ],
        declarations: [_eequipments_page__WEBPACK_IMPORTED_MODULE_6__["EequipmentsPage"]]
    })
], EequipmentsPageModule);



/***/ }),

/***/ "./src/app/pages/eequipments/eequipments.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/eequipments/eequipments.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 124px !important;\n  max-height: 124px !important;\n  border-radius: 0;\n  padding-top: 5px; }\n\nion-avatar img {\n  border-radius: 6px; }\n\nion-item ion-label {\n  padding-left: 0px;\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 13px;\n  white-space: normal !important; }\n\nion-item {\n  border-bottom: 1px solid #eee !important; }\n\nion-item {\n  --background-focused:#fff !important;\n  --background-activated:#fff !important;\n  --detail-icon-color: var(--ion-color-primary);\n  --detail-icon-opacity: 1; }\n\nion-item:last-child {\n  border-bottom: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWVxdWlwbWVudHMvQzpcXFVzZXJzXFxIYXJpc2hcXExvY2FsX2RldlxcR3ltbWF0ZUFwcC9zcmNcXGFwcFxccGFnZXNcXGVlcXVpcG1lbnRzXFxlZXF1aXBtZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBcUI7RUFDckIsdUJBQXdCO0VBQ3hCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGtCQUFrQixFQUFBOztBQUl0QjtFQUNJLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZiw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSx3Q0FBd0MsRUFBQTs7QUFHNUM7RUFDSSxvQ0FBcUI7RUFDckIsc0NBQXVCO0VBQ3ZCLDZDQUFvQjtFQUNwQix3QkFBc0IsRUFBQTs7QUFHMUI7RUFDSSw4QkFBOEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VlcXVpcG1lbnRzL2VlcXVpcG1lbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hdmF0YXIgIHsgICAgIFxyXG4gICAgd2lkdGg6MTAwJSAhaW1wb3J0YW50OyAgXHJcbiAgICBoZWlnaHQgOiAxMDAlICFpbXBvcnRhbnQ7ICBcclxuICAgIG1heC13aWR0aDogMTI0cHggIWltcG9ydGFudDtcclxuICAgIG1heC1oZWlnaHQ6IDEyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIH1cclxuXHJcbmlvbi1hdmF0YXIgaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG5cclxufVxyXG5cclxuaW9uLWl0ZW0gaW9uLWxhYmVse1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1pdGVte1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDojZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiNmZmYgIWltcG9ydGFudDtcclxuICAgIC0tZGV0YWlsLWljb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIC0tZGV0YWlsLWljb24tb3BhY2l0eTogMTtcclxuIH1cclxuXHJcbmlvbi1pdGVtOmxhc3QtY2hpbGR7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/eequipments/eequipments.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/eequipments/eequipments.page.ts ***!
  \*******************************************************/
/*! exports provided: EequipmentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EequipmentsPage", function() { return EequipmentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _services_admob_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/admob.service */ "./src/app/services/admob.service.ts");







let EequipmentsPage = class EequipmentsPage {
    constructor(dataService, router, route, plt, admob) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.plt = plt;
        this.admob = admob;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_5__["strings"];
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
                this.title = data.title;
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
        this.dataService.getDataExercisesByEquipment(this.id)
            .subscribe(resp => {
            this.exercises = resp;
            this.isLoading = false;
        });
    }
};
EequipmentsPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _services_admob_service__WEBPACK_IMPORTED_MODULE_6__["AdmobService"] }
];
EequipmentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-eequipments',
        template: __webpack_require__(/*! raw-loader!./eequipments.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/eequipments/eequipments.page.html"),
        styles: [__webpack_require__(/*! ./eequipments.page.scss */ "./src/app/pages/eequipments/eequipments.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _services_admob_service__WEBPACK_IMPORTED_MODULE_6__["AdmobService"]])
], EequipmentsPage);



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
//# sourceMappingURL=pages-eequipments-eequipments-module-es2015.js.map