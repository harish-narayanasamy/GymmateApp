(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-equipments-equipments-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/equipments/equipments.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/equipments/equipments.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\r\n    <ion-toolbar mode=\"ios\">\r\n        <ion-title class=\"ion-text-capitalize\">\r\n          {{strings.ST38}}\r\n        </ion-title>\r\n              <ion-buttons slot=\"start\">\r\n                <app-backbutton color=\"#f7474f\"></app-backbutton>\r\n              </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content class=\"ion-padding-top\">\r\n  \r\n    <app-loading *ngIf=\"isLoading\"></app-loading>\r\n\r\n\r\n    <ion-list lines=\"none\" class=\"ion-padding-top\">\r\n\r\n    <ion-item *ngFor=\"let item of equipments\" [routerLink]=\"['/eequipments', item.equipment_id, item.equipment_title]\" style=\"margin-bottom: 30px;\">\r\n        <ion-avatar slot=\"start\">\r\n          <img [src]=\"item.equipment_image | image\">\r\n        </ion-avatar>\r\n        <ion-label>{{item.equipment_title}}</ion-label>\r\n      </ion-item>\r\n\r\n    </ion-list>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/equipments/equipments-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/equipments/equipments-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: EquipmentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentsPageRoutingModule", function() { return EquipmentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _equipments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./equipments.page */ "./src/app/pages/equipments/equipments.page.ts");




const routes = [
    {
        path: '',
        component: _equipments_page__WEBPACK_IMPORTED_MODULE_3__["EquipmentsPage"]
    }
];
let EquipmentsPageRoutingModule = class EquipmentsPageRoutingModule {
};
EquipmentsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EquipmentsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/equipments/equipments.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/equipments/equipments.module.ts ***!
  \*******************************************************/
/*! exports provided: EquipmentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentsPageModule", function() { return EquipmentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _equipments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./equipments-routing.module */ "./src/app/pages/equipments/equipments-routing.module.ts");
/* harmony import */ var _equipments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./equipments.page */ "./src/app/pages/equipments/equipments.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









let EquipmentsPageModule = class EquipmentsPageModule {
};
EquipmentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _equipments_routing_module__WEBPACK_IMPORTED_MODULE_5__["EquipmentsPageRoutingModule"]
        ],
        declarations: [_equipments_page__WEBPACK_IMPORTED_MODULE_6__["EquipmentsPage"]]
    })
], EquipmentsPageModule);



/***/ }),

/***/ "./src/app/pages/equipments/equipments.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/equipments/equipments.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 50px !important;\n  max-height: 50px !important; }\n\nion-avatar img {\n  border-radius: 0; }\n\nion-item ion-label {\n  padding-left: 20px;\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 14px; }\n\nion-item {\n  --background-focused:#fff !important;\n  --background-activated:#fff !important;\n  --detail-icon-color: var(--ion-color-primary);\n  --detail-icon-opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXF1aXBtZW50cy9DOlxcVXNlcnNcXEhhcmlzaFxcTG9jYWxfZGV2XFxHeW1tYXRlQXBwL3NyY1xcYXBwXFxwYWdlc1xcZXF1aXBtZW50c1xcZXF1aXBtZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBcUI7RUFDckIsdUJBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQiwyQkFBMkIsRUFBQTs7QUFFL0I7RUFDSSxnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksb0NBQXFCO0VBQ3JCLHNDQUF1QjtFQUN2Qiw2Q0FBb0I7RUFDcEIsd0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lcXVpcG1lbnRzL2VxdWlwbWVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhciAgeyAgICAgXHJcbiAgICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7ICBcclxuICAgIGhlaWdodCA6IDEwMCUgIWltcG9ydGFudDsgIFxyXG4gICAgbWF4LXdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbmlvbi1hdmF0YXIgaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuXHJcbn1cclxuXHJcbmlvbi1pdGVtIGlvbi1sYWJlbHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDojZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiNmZmYgIWltcG9ydGFudDtcclxuICAgIC0tZGV0YWlsLWljb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIC0tZGV0YWlsLWljb24tb3BhY2l0eTogMTtcclxuIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/equipments/equipments.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/equipments/equipments.page.ts ***!
  \*****************************************************/
/*! exports provided: EquipmentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentsPage", function() { return EquipmentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");




let EquipmentsPage = class EquipmentsPage {
    constructor(DataService) {
        this.DataService = DataService;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
        this.equipments = [];
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.DataService.getDataEquipments()
            .subscribe(resp => {
            this.equipments = resp;
            this.isLoading = false;
        });
    }
};
EquipmentsPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
EquipmentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-equipments',
        template: __webpack_require__(/*! raw-loader!./equipments.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/equipments/equipments.page.html"),
        styles: [__webpack_require__(/*! ./equipments.page.scss */ "./src/app/pages/equipments/equipments.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
], EquipmentsPage);



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
//# sourceMappingURL=pages-equipments-equipments-module-es2015.js.map