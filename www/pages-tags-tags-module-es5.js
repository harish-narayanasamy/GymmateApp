(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tags-tags-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tags/tags.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tags/tags.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<ion-header class=\"lightheader\" no-border>\r\n  <ion-toolbar mode=\"ios\" class=\"ion-color\" [style.background-color]=\"customColor\">\r\n    <ion-title class=\"ion-text-capitalize\">\r\n      {{strings.ST55}}\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <app-backbutton color=\"primary\"></app-backbutton>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button  slot=\"start\" [routerLink]=\"['/tabs/tab1']\">\r\n        <img src=\"./assets/images/close.png\" class=\"close-img\"/> \r\n        </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding ion-color\" [style.background-color]=\"customColor\">\r\n\r\n  <app-loading *ngIf=\"isLoading\"></app-loading>\r\n\r\n  <div *ngFor=\"let item of tags\" [routerLink]=\"['/tposts', item.tag_id, item.tag_title]\" class=\"tags\">\r\n    <h1>{{item.tag_title}}</h1>\r\n    <ion-icon name=\"arrow-forward\" color=\"light\" slot=\"end\"></ion-icon>\r\n  </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/tags/tags-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/tags/tags-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TagsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsPageRoutingModule", function() { return TagsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tags_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tags.page */ "./src/app/pages/tags/tags.page.ts");




var routes = [
    {
        path: '',
        component: _tags_page__WEBPACK_IMPORTED_MODULE_3__["TagsPage"]
    }
];
var TagsPageRoutingModule = /** @class */ (function () {
    function TagsPageRoutingModule() {
    }
    TagsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TagsPageRoutingModule);
    return TagsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/tags/tags.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tags/tags.module.ts ***!
  \*******************************************/
/*! exports provided: TagsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsPageModule", function() { return TagsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tags_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tags-routing.module */ "./src/app/pages/tags/tags-routing.module.ts");
/* harmony import */ var _tags_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tags.page */ "./src/app/pages/tags/tags.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var TagsPageModule = /** @class */ (function () {
    function TagsPageModule() {
    }
    TagsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _tags_routing_module__WEBPACK_IMPORTED_MODULE_5__["TagsPageRoutingModule"]
            ],
            declarations: [_tags_page__WEBPACK_IMPORTED_MODULE_6__["TagsPage"]]
        })
    ], TagsPageModule);
    return TagsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tags/tags.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tags/tags.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tags {\n  background-color: #313235;\n  padding: 15px;\n  position: relative;\n  margin-bottom: 10px;\n  border-radius: 5px; }\n\n.tags h1 {\n  font-size: 16px;\n  text-transform: uppercase;\n  font-weight: bold;\n  margin: 0;\n  font-family: 'Proxima-bold';\n  color: #fafafa;\n  line-height: 18px; }\n\n.tags ion-icon {\n  position: absolute;\n  right: 14px;\n  top: 12px;\n  font-size: 22px; }\n\n.in-toolbar {\n  padding: 30px 0 10px 0 !important;\n  background: #191919; }\n\n.ion-page .in-toolbar .toolbar-background {\n  background: transparent !important; }\n\nion-content {\n  background: #191919; }\n\n.ion-text-capitalize {\n  width: 100%;\n  color: #f7474f;\n  font-family: Proxima-bold;\n  font-size: 20px !important;\n  text-transform: none !important; }\n\n.close-img {\n  max-width: 16px;\n  max-height: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFncy9DOlxcVXNlcnNcXEhhcmlzaFxcTG9jYWxfZGV2XFxHeW1tYXRlQXBwL3NyY1xcYXBwXFxwYWdlc1xcdGFnc1xcdGFncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBSXRCO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsU0FBUTtFQUNSLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZUFBZSxFQUFBOztBQUduQjtFQUNJLGlDQUFpQztFQUNqQyxtQkFBbUIsRUFBQTs7QUFHdkI7RUFHUSxrQ0FBa0MsRUFBQTs7QUFLeEM7RUFDRSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxXQUFXO0VBQ1gsY0FBYztFQUNkLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsK0JBQStCLEVBQUE7O0FBRy9CO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFncy90YWdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWdze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMxMzIzNTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5cclxuLnRhZ3MgaDF7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luOjA7XHJcbiAgZm9udC1mYW1pbHk6ICdQcm94aW1hLWJvbGQnO1xyXG4gIGNvbG9yOiAjZmFmYWZhO1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcblxyXG4udGFncyBpb24taWNvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxNHB4O1xyXG4gICAgdG9wOiAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4uaW4tdG9vbGJhcntcclxuICAgIHBhZGRpbmc6IDMwcHggMCAxMHB4IDAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICMxOTE5MTk7XHJcbn1cclxuXHJcbi5pb24tcGFnZSB7XHJcbiAgICAuaW4tdG9vbGJhciB7XHJcbiAgICAgIC50b29sYmFyLWJhY2tncm91bmQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZDogIzE5MTkxOTtcclxufVxyXG5cclxuLmlvbi10ZXh0LWNhcGl0YWxpemV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjZjc0NzRmO1xyXG4gICAgZm9udC1mYW1pbHk6IFByb3hpbWEtYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH0gIFxyXG5cclxuICAgIC5jbG9zZS1pbWd7XHJcbiAgICAgIG1heC13aWR0aDogMTZweDtcclxuICAgICAgbWF4LWhlaWdodDogMTZweDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/tags/tags.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tags/tags.page.ts ***!
  \*****************************************/
/*! exports provided: TagsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsPage", function() { return TagsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _services_admob_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/admob.service */ "./src/app/services/admob.service.ts");





var TagsPage = /** @class */ (function () {
    function TagsPage(dataService, admob) {
        this.dataService = dataService;
        this.admob = admob;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_3__["strings"];
        this.tags = [];
        this.isLoading = false;
    }
    TagsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.dataService.getDataTags()
            .subscribe(function (resp) {
            _this.tags = resp;
            _this.isLoading = false;
        });
        this.admob.BannerAd();
    };
    // tslint:disable-next-line: use-lifecycle-interface
    TagsPage.prototype.ngOnDestroy = function () {
        this.admob.HideBannerAd();
    };
    TagsPage.ctorParameters = function () { return [
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _services_admob_service__WEBPACK_IMPORTED_MODULE_4__["AdmobService"] }
    ]; };
    TagsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tags',
            template: __webpack_require__(/*! raw-loader!./tags.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tags/tags.page.html"),
            styles: [__webpack_require__(/*! ./tags.page.scss */ "./src/app/pages/tags/tags.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _services_admob_service__WEBPACK_IMPORTED_MODULE_4__["AdmobService"]])
    ], TagsPage);
    return TagsPage;
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
//# sourceMappingURL=pages-tags-tags-module-es5.js.map