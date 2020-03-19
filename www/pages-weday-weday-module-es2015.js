(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-weday-weday-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/weday/weday.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/weday/weday.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\r\n    <ion-toolbar mode=\"ios\">\r\n        <ion-title class=\"ion-text-capitalize\">\r\n          {{strings.ST87}} {{day}}\r\n        </ion-title>\r\n              <ion-buttons slot=\"start\">\r\n                <app-backbutton color=\"dark\"></app-backbutton>\r\n              </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n    \r\n    <app-loading *ngIf=\"isLoading\"></app-loading>\r\n\r\n  <app-restday *ngIf=\"exercises.length === 0\"></app-restday>\r\n  \r\n    <ion-list lines=\"none\" class=\"ion-padding-top\">\r\n  \r\n    <ion-item *ngFor=\"let item of exercises\" [routerLink]=\"['/edetails', item.exercise_id]\" style=\"margin-bottom: 5px;\">\r\n        <ion-avatar slot=\"start\">\r\n          <img [src]=\"item.exercise_image | image\">\r\n        </ion-avatar>\r\n        <ion-label>{{item.exercise_title}}</ion-label>\r\n      </ion-item>\r\n  \r\n    </ion-list>\r\n  \r\n  </ion-content>"

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

module.exports = "ion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 124px !important;\n  max-height: 124px !important;\n  border-radius: 0; }\n\nion-avatar img {\n  border-radius: 0; }\n\nion-item ion-label {\n  padding-left: 0px;\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 13px;\n  white-space: normal !important; }\n\nion-item {\n  border-bottom: 1px solid #eee !important; }\n\nion-item {\n  --background-focused:#fff !important;\n  --background-activated:#fff !important;\n  --detail-icon-color: var(--ion-color-primary);\n  --detail-icon-opacity: 1; }\n\nion-item:last-child {\n  border-bottom: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2VkYXkvQzpcXFVzZXJzXFxIYXJpc2hcXExvY2FsX2RldlxcR3ltbWF0ZUFwcC9zcmNcXGFwcFxccGFnZXNcXHdlZGF5XFx3ZWRheS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBcUI7RUFDckIsdUJBQXdCO0VBQ3hCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0ksaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLHdDQUF3QyxFQUFBOztBQUc1QztFQUNJLG9DQUFxQjtFQUNyQixzQ0FBdUI7RUFDdkIsNkNBQW9CO0VBQ3BCLHdCQUFzQixFQUFBOztBQUcxQjtFQUNJLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd2VkYXkvd2VkYXkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhciAgeyAgICAgXHJcbiAgICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7ICBcclxuICAgIGhlaWdodCA6IDEwMCUgIWltcG9ydGFudDsgIFxyXG4gICAgbWF4LXdpZHRoOiAxMjRweCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LWhlaWdodDogMTI0cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB9XHJcbmlvbi1hdmF0YXIgaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuXHJcbn1cclxuXHJcbmlvbi1pdGVtIGlvbi1sYWJlbHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24taXRlbXtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6I2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAtLWRldGFpbC1pY29uLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAtLWRldGFpbC1pY29uLW9wYWNpdHk6IDE7XHJcbiB9XHJcblxyXG5pb24taXRlbTpsYXN0LWNoaWxke1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG59Il19 */"

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