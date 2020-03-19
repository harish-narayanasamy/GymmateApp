(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-motivation-motivation-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/motivation/motivation.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/motivation/motivation.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\r\n    <ion-toolbar mode=\"ios\">\r\n        <ion-title class=\"ion-text-capitalize\">\r\n          {{strings.ST5}}\r\n        </ion-title>\r\n        <ion-buttons slot=\"start\">\r\n            <app-backbutton color=\"dark\"></app-backbutton>\r\n          </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n  <app-loading *ngIf=\"isLoading\"></app-loading>\r\n\r\n  <ion-slides *ngIf=\"!isLoading\" [options]=\"slideOpts\" mode=\"ios\">\r\n      <ion-slide class=\"slide\" *ngFor=\"let quote of quotes\">\r\n        <ion-card mode=\"ios\" class=\"card\">\r\n          <ion-icon name=\"md-quote\"></ion-icon>\r\n          <h1>{{quote.quote_title}}</h1>\r\n        </ion-card>\r\n      </ion-slide>\r\n    </ion-slides>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/motivation/motivation-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/motivation/motivation-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: MotivationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotivationPageRoutingModule", function() { return MotivationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _motivation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./motivation.page */ "./src/app/pages/motivation/motivation.page.ts");




const routes = [
    {
        path: '',
        component: _motivation_page__WEBPACK_IMPORTED_MODULE_3__["MotivationPage"]
    }
];
let MotivationPageRoutingModule = class MotivationPageRoutingModule {
};
MotivationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MotivationPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/motivation/motivation.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/motivation/motivation.module.ts ***!
  \*******************************************************/
/*! exports provided: MotivationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotivationPageModule", function() { return MotivationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _motivation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./motivation-routing.module */ "./src/app/pages/motivation/motivation-routing.module.ts");
/* harmony import */ var _motivation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./motivation.page */ "./src/app/pages/motivation/motivation.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let MotivationPageModule = class MotivationPageModule {
};
MotivationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _motivation_routing_module__WEBPACK_IMPORTED_MODULE_5__["MotivationPageRoutingModule"]
        ],
        declarations: [_motivation_page__WEBPACK_IMPORTED_MODULE_6__["MotivationPage"]]
    })
], MotivationPageModule);



/***/ }),

/***/ "./src/app/pages/motivation/motivation.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/motivation/motivation.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-slides {\n  height: 100%; }\n\n.slide {\n  height: 100%; }\n\n.card {\n  height: 100%;\n  width: 100%;\n  background-color: var(--ion-color-primary);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 0 30px;\n  text-align: left; }\n\n.card h1 {\n  color: white;\n  font-size: 26px;\n  text-transform: uppercase; }\n\n.card ion-icon {\n  color: rgba(0, 0, 0, 0.25);\n  font-size: 110px;\n  position: absolute;\n  top: 30px;\n  right: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbW90aXZhdGlvbi9DOlxcVXNlcnNcXEhhcmlzaFxcTG9jYWxfZGV2XFxHeW1tYXRlQXBwL3NyY1xcYXBwXFxwYWdlc1xcbW90aXZhdGlvblxcbW90aXZhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxZQUFZLEVBQUE7O0FBRVo7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCwwQ0FBMEM7RUFDMUMsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxZQUFZO0VBQ1osZUFBZTtFQUNmLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tb3RpdmF0aW9uL21vdGl2YXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlc3tcclxuaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5zbGlkZXtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uY2FyZCBoMXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5jYXJkIGlvbi1pY29ue1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBmb250LXNpemU6IDExMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMHB4O1xyXG4gICAgcmlnaHQ6IDMwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/motivation/motivation.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/motivation/motivation.page.ts ***!
  \*****************************************************/
/*! exports provided: MotivationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotivationPage", function() { return MotivationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");




let MotivationPage = class MotivationPage {
    constructor(DataService) {
        this.DataService = DataService;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
        this.quotes = [];
        this.isLoading = false;
        this.slideOpts = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            freeMode: false
        };
    }
    ngOnInit() {
        this.isLoading = true;
        this.DataService.getDataMotivation()
            .subscribe(resp => {
            this.quotes = resp;
            this.isLoading = false;
        });
    }
};
MotivationPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
MotivationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-motivation',
        template: __webpack_require__(/*! raw-loader!./motivation.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/motivation/motivation.page.html"),
        styles: [__webpack_require__(/*! ./motivation.page.scss */ "./src/app/pages/motivation/motivation.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
], MotivationPage);



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
//# sourceMappingURL=pages-motivation-motivation-module-es2015.js.map