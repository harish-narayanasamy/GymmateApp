(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tposts-tposts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tposts/tposts.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tposts/tposts.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\r\n  <ion-toolbar mode=\"ios\">\r\n      <ion-title class=\"ion-text-capitalize\">\r\n        {{title}}\r\n      </ion-title>\r\n            <ion-buttons slot=\"start\">\r\n              <app-backbutton color=\"dark\"></app-backbutton>\r\n            </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <app-loading *ngIf=\"isLoading\"></app-loading>\r\n  <app-empty *ngIf=\"posts.length === 0\" [title]=\"strings.ST143\"></app-empty>\r\n\r\n  <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\" *ngFor=\"let item of posts\" [routerLink]=\"['/pdetails', item.post_id]\" [ngStyle]=\"{'height': height}\">\r\n           <div class=\"cardcategory\" [style.background-image]=\"'url(' + (item.post_image | image) + ')'\">\r\n               <div class=\"overlay\">\r\n               <div class=\"texts\">\r\n               <p>{{item.tag_title}}</p>\r\n               <h1>{{item.post_title}}</h1>\r\n               </div>\r\n             </div>\r\n             </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/tposts/tposts-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/tposts/tposts-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TpostsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TpostsPageRoutingModule", function() { return TpostsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tposts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tposts.page */ "./src/app/pages/tposts/tposts.page.ts");




const routes = [
    {
        path: '',
        component: _tposts_page__WEBPACK_IMPORTED_MODULE_3__["TpostsPage"]
    }
];
let TpostsPageRoutingModule = class TpostsPageRoutingModule {
};
TpostsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TpostsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tposts/tposts.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/tposts/tposts.module.ts ***!
  \***********************************************/
/*! exports provided: TpostsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TpostsPageModule", function() { return TpostsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tposts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tposts-routing.module */ "./src/app/pages/tposts/tposts-routing.module.ts");
/* harmony import */ var _tposts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tposts.page */ "./src/app/pages/tposts/tposts.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









let TpostsPageModule = class TpostsPageModule {
};
TpostsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _tposts_routing_module__WEBPACK_IMPORTED_MODULE_5__["TpostsPageRoutingModule"]
        ],
        declarations: [_tposts_page__WEBPACK_IMPORTED_MODULE_6__["TpostsPage"]]
    })
], TpostsPageModule);



/***/ }),

/***/ "./src/app/pages/tposts/tposts.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/tposts/tposts.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  height: 100%; }\n\nion-row {\n  height: 100%; }\n\n.cardcategory {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  border-radius: 8px; }\n\n.cardcategory .overlay {\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.75)));\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 100%);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  text-align: left;\n  border-radius: 8px; }\n\n.cardcategory .texts {\n  padding: 15px; }\n\n.cardcategory .texts h1 {\n  color: white;\n  margin: 0;\n  font-weight: bold;\n  font-size: 14px;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.cardcategory .texts p {\n  color: var(--ion-color-primary);\n  font-weight: bold;\n  font-size: 13px;\n  display: block;\n  margin-bottom: 7px;\n  text-transform: uppercase;\n  letter-spacing: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHBvc3RzL0M6XFxVc2Vyc1xcSGFyaXNoXFxMb2NhbF9kZXZcXEd5bW1hdGVBcHAvc3JjXFxhcHBcXHBhZ2VzXFx0cG9zdHNcXHRwb3N0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBR0ksNEdBQStFO0VBQS9FLHFGQUErRTtFQUMvRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBeUI7VUFBekIseUJBQXlCO0VBQ3pCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQWlCO0VBQWpCLDZCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxZQUFZO0VBQ1osU0FBUztFQUNULGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksK0JBQStCO0VBQy9CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90cG9zdHMvdHBvc3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlke1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5pb24tcm93e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZGNhdGVnb3J5e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uY2FyZGNhdGVnb3J5IC5vdmVybGF5e1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgwLDAsMCwwKSAwJSwgcmdiYSgwLDAsMCwwLjc1KSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIHJnYmEoMCwwLDAsMCkgMCUscmdiYSgwLDAsMCwwLjc1KSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICByZ2JhKDAsMCwwLDApIDAlLHJnYmEoMCwwLDAsMC43NSkgMTAwJSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5jYXJkY2F0ZWdvcnkgLnRleHRze1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLmNhcmRjYXRlZ29yeSAudGV4dHMgaDF7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLmNhcmRjYXRlZ29yeSAudGV4dHMgcHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tposts/tposts.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/tposts/tposts.page.ts ***!
  \*********************************************/
/*! exports provided: TpostsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TpostsPage", function() { return TpostsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let TpostsPage = class TpostsPage {
    constructor(dataService, router, route, plt) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.plt = plt;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_3__["strings"];
        this.posts = [];
        this.isLoading = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = true;
            this.route.params.subscribe(data => {
                this.id = data.id;
                this.title = data.title;
                this.getPosts();
                if (!this.id) {
                    this.goBack();
                }
            });
        });
    }
    goBack() {
        this.router.navigate(['/home']);
    }
    getPosts() {
        this.dataService.getDataPostsByTag(this.id)
            .subscribe(resp => {
            this.posts = resp;
            if (this.posts.length === 1) {
                this.height = '167.273px';
            }
            else if (this.posts.length === 3 || this.posts.length === 2) {
                this.height = 'inherit !important';
            }
            else if (this.posts.length >= 4) {
                this.height = this.plt.height() / 4.4 + 'px';
            }
            this.isLoading = false;
        });
    }
};
TpostsPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
];
TpostsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tposts',
        template: __webpack_require__(/*! raw-loader!./tposts.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tposts/tposts.page.html"),
        styles: [__webpack_require__(/*! ./tposts.page.scss */ "./src/app/pages/tposts/tposts.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]])
], TpostsPage);



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
//# sourceMappingURL=pages-tposts-tposts-module-es2015.js.map