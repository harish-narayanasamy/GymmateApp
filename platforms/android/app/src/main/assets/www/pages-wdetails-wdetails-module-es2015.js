(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wdetails-wdetails-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/wdetails/wdetails.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/wdetails/wdetails.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\r\n  <ion-toolbar mode=\"ios\" class=\"ion-color\" [style.background-color]=\"customColor\">\r\n    <ion-title class=\"ion-text-capitalize\">\r\n      Workouts\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <app-backbutton class=\"arrow\"></app-backbutton>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-no-padding ion-color\" [style.background-color]=\"customColor\">\r\n\r\n    <app-loading *ngIf=\"isLoading\"></app-loading>\r\n\r\n    <ion-grid class=\"ion-no-padding header-info\">\r\n      <img src=\"./assets/images/top_header.png\" class=\"start-logo\"/>\r\n        <ion-row class=\"header-bg\" [ngStyle]=\"{'height': innerHeight}\">\r\n          <div class=\"text\">\r\n          <p class=\"name\">{{workout.workout_title}}</p>\r\n          <p class=\"time\">{{workout.workout_duration}}</p>\r\n        </div>\r\n        </ion-row>\r\n        <ion-row class=\"cols\">\r\n          <ion-col size=\"6\" class=\"ion-text-center\">\r\n            <p class=\"text\">{{strings.ST16}}</p>\r\n            <p class=\"value\">{{workout.goal_title}}</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\" class=\"ion-text-center\">\r\n              <p class=\"text\">{{strings.ST17}}</p>\r\n              <p class=\"value\">{{workout.level_title}}</p>\r\n            </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <div class=\"days\">\r\n\r\n      <div *ngFor=\"let item of days let i = index\">\r\n            <div class=\"tags\" [routerLink]=\"['/weday', workout.workout_id, i+1]\">\r\n                <h1>{{strings.ST87}} {{i+1}}</h1>\r\n                <ion-icon name=\"arrow-forward\" color=\"primary\" slot=\"end\"></ion-icon>\r\n            </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/wdetails/wdetails-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/wdetails/wdetails-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: WdetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WdetailsPageRoutingModule", function() { return WdetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _wdetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wdetails.page */ "./src/app/pages/wdetails/wdetails.page.ts");




const routes = [
    {
        path: '',
        component: _wdetails_page__WEBPACK_IMPORTED_MODULE_3__["WdetailsPage"]
    }
];
let WdetailsPageRoutingModule = class WdetailsPageRoutingModule {
};
WdetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WdetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/wdetails/wdetails.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/wdetails/wdetails.module.ts ***!
  \***************************************************/
/*! exports provided: WdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WdetailsPageModule", function() { return WdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wdetails-routing.module */ "./src/app/pages/wdetails/wdetails-routing.module.ts");
/* harmony import */ var _wdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wdetails.page */ "./src/app/pages/wdetails/wdetails.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









let WdetailsPageModule = class WdetailsPageModule {
};
WdetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _wdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["WdetailsPageRoutingModule"]
        ],
        declarations: [_wdetails_page__WEBPACK_IMPORTED_MODULE_6__["WdetailsPage"]]
    })
], WdetailsPageModule);



/***/ }),

/***/ "./src/app/pages/wdetails/wdetails.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/wdetails/wdetails.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cols {\n  background-color: var(--ion-color-primary);\n  padding: 10px 0; }\n\n.cols .text {\n  color: #ffffff;\n  font-weight: bold;\n  text-transform: uppercase;\n  margin: 0;\n  padding-bottom: 5px; }\n\n.cols .value {\n  text-transform: uppercase;\n  margin: 0;\n  color: #ffffff;\n  font-size: 14px;\n  opacity: 0.7; }\n\n.days {\n  padding: 16px; }\n\n.tags {\n  background-color: #f9f9f9;\n  border-left: 3px solid var(--ion-color-primary);\n  padding: 15px;\n  position: relative;\n  margin-bottom: 10px; }\n\n.tags h1 {\n  font-size: 13px;\n  text-transform: uppercase;\n  font-weight: bold;\n  margin: 0; }\n\n.tags ion-icon {\n  position: absolute;\n  right: 14px;\n  top: 11px;\n  font-size: 22px; }\n\n.ion-text-capitalize {\n  width: 100%;\n  color: #f7474f;\n  font-family: Proxima-bold;\n  font-size: 20px !important;\n  text-transform: none !important; }\n\n.arrow {\n  color: #f7474f !important; }\n\n.in-toolbar {\n  padding: 30px 0 20px 0 !important;\n  background: #191919; }\n\n.ion-page .in-toolbar .toolbar-background {\n  background: transparent !important; }\n\nion-content {\n  background: #191919 !important; }\n\n.header-info ion-row, .days {\n  max-width: 90%;\n  margin: 0 auto !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2RldGFpbHMvQzpcXFVzZXJzXFxIYXJpc2hcXExvY2FsX2RldlxcR3ltbWF0ZUFwcC9zcmNcXGFwcFxccGFnZXNcXHdkZXRhaWxzXFx3ZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQSwwQ0FBMEM7RUFDMUMsZUFBZSxFQUFBOztBQUdmO0VBQ0ksY0FBYTtFQUNiLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsU0FBUztFQUNULG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsY0FBYTtFQUNiLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLHlCQUF5QjtFQUN6QiwrQ0FBK0M7RUFDL0MsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixTQUFRLEVBQUE7O0FBR1o7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksV0FBVztFQUNYLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLCtCQUErQixFQUFBOztBQUcvQjtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGlDQUFpQztFQUNqQyxtQkFBbUIsRUFBQTs7QUFHdkI7RUFHUSxrQ0FBa0MsRUFBQTs7QUFLeEM7RUFDRSw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSxjQUFjO0VBQ2QseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93ZGV0YWlscy93ZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbHN7XHJcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxucGFkZGluZzogMTBweCAwO1xyXG59XHJcblxyXG4uY29scyAudGV4dHtcclxuICAgIGNvbG9yOiNmZmZmZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59IFxyXG5cclxuLmNvbHMgLnZhbHVle1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbn0gXHJcblxyXG4uZGF5c3tcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi50YWdze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi50YWdzIGgxe1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOjA7XHJcbn1cclxuXHJcbi50YWdzIGlvbi1pY29ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE0cHg7XHJcbiAgICB0b3A6IDExcHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5pb24tdGV4dC1jYXBpdGFsaXple1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogI2Y3NDc0ZjtcclxuICAgIGZvbnQtZmFtaWx5OiBQcm94aW1hLWJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9ICAgXHJcblxyXG4gICAgLmFycm93e1xyXG4gICAgICAgIGNvbG9yOiAjZjc0NzRmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmluLXRvb2xiYXJ7XHJcbiAgICAgICAgcGFkZGluZzogMzBweCAwIDIwcHggMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxOTE5MTk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pb24tcGFnZSB7XHJcbiAgICAgICAgLmluLXRvb2xiYXIge1xyXG4gICAgICAgICAgLnRvb2xiYXItYmFja2dyb3VuZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgaW9uLWNvbnRlbnR7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzE5MTkxOSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5oZWFkZXItaW5mbyBpb24tcm93LCAuZGF5c3tcclxuICAgICAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xyXG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/wdetails/wdetails.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/wdetails/wdetails.page.ts ***!
  \*************************************************/
/*! exports provided: WdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WdetailsPage", function() { return WdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_favorite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/favorite.service */ "./src/app/services/favorite.service.ts");







let WdetailsPage = class WdetailsPage {
    constructor(dataService, router, route, plt, dataFavorite) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.plt = plt;
        this.dataFavorite = dataFavorite;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_4__["strings"];
        this.workout = {};
        this.isLoading = false;
        this.days = new Array(7);
        this.icon = 'star-outline';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = true;
            this.innerHeight = this.plt.height() / 3 + 'px';
            this.route.params.subscribe(data => {
                this.id = data.id;
                this.getDetails();
                this.dataFavorite.existWorkout(this.id)
                    .then(exist => this.icon = (exist) ? 'star' : 'star-outline');
                if (!this.id) {
                    this.goBack();
                }
            });
        });
    }
    goBack() {
        this.router.navigate(['/home']);
    }
    getDetails() {
        this.dataService.getDataWorkoutById(this.id)
            .subscribe(resp => {
            this.workout = resp[0];
            this.isLoading = false;
        });
    }
    addToFavorites() {
        const workout = {
            id: this.workout.workout_id,
            title: this.workout.workout_title,
            image: this.workout.workout_image,
        };
        const exist = this.dataFavorite.saveWorkout(workout);
        this.icon = (exist) ? 'star' : 'star-outline';
    }
};
WdetailsPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _services_favorite_service__WEBPACK_IMPORTED_MODULE_6__["FavoriteService"] }
];
WdetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wdetails',
        template: __webpack_require__(/*! raw-loader!./wdetails.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/wdetails/wdetails.page.html"),
        styles: [__webpack_require__(/*! ./wdetails.page.scss */ "./src/app/pages/wdetails/wdetails.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
        _services_favorite_service__WEBPACK_IMPORTED_MODULE_6__["FavoriteService"]])
], WdetailsPage);



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
//# sourceMappingURL=pages-wdetails-wdetails-module-es2015.js.map