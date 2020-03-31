(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edetails-edetails-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/edetails/edetails.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/edetails/edetails.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\r\n  <ion-toolbar mode=\"ios\" class=\"ion-color\" [style.background-color]=\"customColor\">\r\n    <ion-title class=\"ion-text-capitalize\">\r\n      Workouts\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <app-backbutton class=\"arrow\"></app-backbutton>\r\n    </ion-buttons>               \r\n     <ion-buttons slot=\"end\">\r\n      <ion-button  slot=\"start\" [routerLink]=\"['/tabs/tab1']\">\r\n        <img src=\"./assets/images/close.png\" class=\"close-img\"/> \r\n        </ion-button>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n<!--\r\n<ion-header class=\"lightheader\" no-border>\r\n  <ion-toolbar mode=\"ios\">\r\n      <ion-title class=\"ion-text-capitalize\">\r\n        {{strings.ST115}}\r\n      </ion-title>\r\n            <ion-buttons slot=\"start\">\r\n              <app-backbutton color=\"#f7474f\"></app-backbutton>\r\n            </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n-->\r\n\r\n<ion-content>\r\n\r\n  <app-loading *ngIf=\"isLoading\"></app-loading>\r\n<!--\r\n  <div class=\"details\">\r\n\r\n  <img [src]=\"exercise.exercise_image | image\">\r\n\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n        <ion-col size=\"4\" class=\"col-icon\">\r\n        <ion-icon name=\"md-list\" color=\"primary\"></ion-icon>\r\n        <p class=\"name\">{{strings.ST97}}</p>\r\n        <p class=\"value\">{{exercise.exercise_sets}}</p>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" class=\"col-icon\">\r\n          <ion-icon name=\"md-sync\" color=\"primary\"></ion-icon>\r\n          <p class=\"name\">{{strings.ST98}}</p>\r\n          <p class=\"value\">{{exercise.exercise_reps}}</p>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" class=\"col-icon\">\r\n            <ion-icon name=\"md-stopwatch\" color=\"primary\"></ion-icon>\r\n            <p class=\"name\">{{strings.ST99}}</p>\r\n            <p class=\"value\">{{exercise.exercise_rest}}</p>\r\n        </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n    <div class=\"tags\" (click)=toggleInfo()>\r\n        <h1>{{strings.ST112}}</h1>\r\n        <ion-icon [name]=\"isInfoHidden ? 'arrow-forward' : 'arrow-down'\" color=\"primary\" slot=\"end\"></ion-icon>\r\n      </div>\r\n    \r\n      <div class=\"animated fadeIn subinfo\" [hidden]=\"isInfoHidden\">\r\n      <p class=\"title\">{{strings.ST111}}</p>\r\n      <p class=\"subtitle\">{{exercise.exercise_title}}</p>\r\n\r\n      <p class=\"title\">{{strings.ST17}}</p>\r\n      <p class=\"subtitle\">{{exercise.level_title}}</p>\r\n\r\n      </div> \r\n    \r\n      <div class=\"tags\" (click)=toggleInstru()>\r\n          <h1>{{strings.ST113}}</h1>\r\n          <ion-icon [name]=\"isInstruHidden ? 'arrow-forward' : 'arrow-down'\" color=\"primary\" slot=\"end\"></ion-icon>\r\n        </div>\r\n      \r\n        <div class=\"animated fadeIn subinfo\" [hidden]=\"isInstruHidden\">\r\n        <app-html [htmlcontent]=\"exercise.exercise_instructions\"></app-html>\r\n        </div> \r\n\r\n\r\n        <div class=\"tags\" (click)=toggleTips()>\r\n            <h1>{{strings.ST114}}</h1>\r\n            <ion-icon [name]=\"isTipsHidden ? 'arrow-forward' : 'arrow-down'\" color=\"primary\" slot=\"end\"></ion-icon>\r\n          </div>\r\n        \r\n          <div class=\"animated fadeIn subinfo\" [hidden]=\"isTipsHidden\">\r\n          <app-html [htmlcontent]=\"exercise.exercise_tips\"></app-html>\r\n          </div> \r\n\r\n</div>\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer mode=\"ios\" no-border>\r\n    <ion-button (click)=\"play()\" class=\"primary ion-text-uppercase ion-text-bold\" mode=\"ios\" expand=\"block\">\r\n      {{strings.ST102}}\r\n        <ion-icon slot=\"start\" name=\"md-arrow-dropright-circle\"></ion-icon>\r\n    </ion-button>\r\n  </ion-footer>\r\n-->\r\n\r\n<ion-grid class=\"ion-no-padding header-info\">\r\n  <img [src]=\"exercise.exercise_image | image\" class=\"start-logo\">\r\n    <ion-row class=\"header-bg\" [ngStyle]=\"{'height': innerHeight}\">\r\n      <div class=\"text\">\r\n        <div class=\"title-info\">\r\n      <p class=\"name\">{{ exercise.exercise_title }}</p>\r\n     \r\n    </div>\r\n      <p class=\"author\">{{ exercise_title }}</p>\r\n      <p class=\"further-info\"><span [innerHTML]=\"exercise.exercise_tips\"></span></p>\r\n\r\n    <div class=\"level-info\">\r\n      <img src=\"./assets/images/level_easy.png\" class=\"level-logo\"/>\r\n      <p class=\"task\">Level</p>\r\n      <p class=\"task-info\">{{ exercise.exercise_level }}</p>\r\n    </div>\r\n    <div class=\"level-info\">\r\n      <img src=\"./assets/images/sets.png\" class=\"level-logo\"/>\r\n      <p class=\"task\">Sets</p>\r\n      <p class=\"task-info\">{{ exercise.exercise_sets }}</p>\r\n    </div>\r\n    <div class=\"level-info\">\r\n      <img src=\"./assets/images/reps.png\" class=\"level-logo\"/>\r\n      <p class=\"task\">Reps</p>\r\n      <p class=\"task-info\">{{ exercise.exercise_reps }}</p>\r\n    </div>\r\n    <div class=\"level-info\">\r\n      <img src=\"./assets/images/rest.png\" class=\"level-logo\"/>\r\n      <p class=\"task\">Rest</p>\r\n      <p class=\"task-info\">{{ exercise.exercise_rest }}</p>\r\n    </div>\r\n    </div>\r\n    </ion-row>\r\n    <ion-row class=\"cols\" style=\"display: none;\">\r\n      <ion-col size=\"6\" class=\"ion-text-center\">\r\n        <p class=\"text\">strings.ST16</p>\r\n        <p class=\"value\">workout.goal_title</p>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-center\">\r\n          <p class=\"text\">strings.ST17</p>\r\n          <p class=\"value\">workout.level_title</p>\r\n        </ion-col>\r\n    </ion-row>\r\n    </ion-grid>\r\n    <!--FOR EXTRACTING EXCERSISES FROM THE EXCERSISES PAGE-->\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/edetails/edetails-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/edetails/edetails-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: EdetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdetailsPageRoutingModule", function() { return EdetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edetails.page */ "./src/app/pages/edetails/edetails.page.ts");




const routes = [
    {
        path: '',
        component: _edetails_page__WEBPACK_IMPORTED_MODULE_3__["EdetailsPage"]
    }
];
let EdetailsPageRoutingModule = class EdetailsPageRoutingModule {
};
EdetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EdetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/edetails/edetails.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/edetails/edetails.module.ts ***!
  \***************************************************/
/*! exports provided: EdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdetailsPageModule", function() { return EdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edetails-routing.module */ "./src/app/pages/edetails/edetails-routing.module.ts");
/* harmony import */ var _edetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edetails.page */ "./src/app/pages/edetails/edetails.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









let EdetailsPageModule = class EdetailsPageModule {
};
EdetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _edetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["EdetailsPageRoutingModule"]
        ],
        declarations: [_edetails_page__WEBPACK_IMPORTED_MODULE_6__["EdetailsPage"]]
    })
], EdetailsPageModule);



/***/ }),

/***/ "./src/app/pages/edetails/edetails.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/edetails/edetails.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  background-color: #191919; }\n\n.cols {\n  background-color: var(--ion-color-primary);\n  padding: 10px 0; }\n\n.cols .text {\n  color: #ffffff;\n  font-weight: bold;\n  text-transform: uppercase;\n  margin: 0;\n  padding-bottom: 5px; }\n\n.cols .value {\n  text-transform: uppercase;\n  margin: 0;\n  color: #ffffff;\n  font-size: 14px;\n  opacity: 0.7; }\n\n.days {\n  padding: 16px; }\n\n.tags {\n  background-color: #f9f9f9;\n  border-left: 3px solid var(--ion-color-primary);\n  padding: 15px;\n  position: relative;\n  margin-bottom: 10px; }\n\n.tags h1 {\n  font-size: 13px;\n  text-transform: uppercase;\n  font-weight: bold;\n  margin: 0; }\n\n.tags ion-icon {\n  position: absolute;\n  right: 14px;\n  top: 11px;\n  font-size: 22px; }\n\n.ion-text-capitalize {\n  width: 100%;\n  color: #f7474f;\n  font-family: Proxima-bold;\n  font-size: 20px !important;\n  text-transform: none !important; }\n\n.arrow {\n  color: #f7474f !important; }\n\n.in-toolbar {\n  padding: 20px 0 10px 0 !important;\n  background: #191919; }\n\n.ion-page .in-toolbar .toolbar-background {\n  background: transparent !important; }\n\nion-content {\n  background: #191919 !important; }\n\n.header-info ion-row, .days {\n  max-width: 90%;\n  margin: 0 auto !important;\n  height: auto !important; }\n\n.name {\n  font-size: 30px;\n  line-height: 35px;\n  font-family: 'Proxima-bold';\n  color: #fafafa;\n  margin-bottom: 0px;\n  margin-top: 0px; }\n\n.author, .further-info {\n  font-size: 16px;\n  line-height: 20px;\n  font-family: 'Nunito';\n  color: #fafafa;\n  margin-top: 5px;\n  margin-bottom: 25px;\n  margin-left: -23px; }\n\n.level-info {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  background-color: #313235;\n  border-radius: 5px;\n  max-width: 95%;\n  padding: 5px 15px;\n  margin-bottom: 10px; }\n\n.level-logo {\n  max-width: 25px;\n  max-height: 25px; }\n\n.task, .task-info {\n  color: #fafafa;\n  font-size: 16px;\n  line-height: 20px;\n  font-family: 'Nunito-bold';\n  margin: 0px; }\n\n.task {\n  margin: 0 16px 0px 8px; }\n\n.text {\n  margin-bottom: 40px; }\n\n.exercise-header {\n  color: #efeeee;\n  font-size: 22px;\n  line-height: 26px;\n  font-family: 'Proxima-semi';\n  margin: 0px;\n  text-align: left; }\n\n.title-info {\n  margin-top: 35px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row; }\n\n.star {\n  padding-left: 5px;\n  margin-left: auto; }\n\n.close-img {\n  max-width: 16px;\n  max-height: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRldGFpbHMvQzpcXFVzZXJzXFxIYXJpc2hcXExvY2FsX2RldlxcR3ltbWF0ZUFwcC9zcmNcXGFwcFxccGFnZXNcXGVkZXRhaWxzXFxlZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUIsRUFBQTs7QUFFN0I7RUFDSSwwQ0FBMEM7RUFDMUMsZUFBZSxFQUFBOztBQUdmO0VBQ0ksY0FBYTtFQUNiLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsU0FBUztFQUNULG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsY0FBYTtFQUNiLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLHlCQUF5QjtFQUN6QiwrQ0FBK0M7RUFDL0MsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixTQUFRLEVBQUE7O0FBR1o7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksV0FBVztFQUNYLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLCtCQUErQixFQUFBOztBQUcvQjtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGlDQUFpQztFQUNqQyxtQkFBbUIsRUFBQTs7QUFHdkI7RUFHUSxrQ0FBa0MsRUFBQTs7QUFLeEM7RUFDRSw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUduQjtFQUNKLGVBQWU7RUFDZixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUdkO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIseUJBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBOztBQUl2QjtFQUNHLGVBQWU7RUFDZCxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsV0FBVyxFQUFBOztBQUVmO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxnQkFBZ0I7RUFDaEIsb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ1EsZUFBZTtFQUNmLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWRldGFpbHMvZWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xyXG59XHJcbi5jb2xze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29scyAudGV4dHtcclxuICAgICAgICBjb2xvcjojZmZmZmZmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICB9IFxyXG4gICAgXHJcbiAgICAuY29scyAudmFsdWV7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6I2ZmZmZmZjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgfSBcclxuICAgIFxyXG4gICAgLmRheXN7XHJcbiAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRhZ3N7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGFncyBoMXtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW46MDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRhZ3MgaW9uLWljb257XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAxNHB4O1xyXG4gICAgICAgIHRvcDogMTFweDtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pb24tdGV4dC1jYXBpdGFsaXple1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGNvbG9yOiAjZjc0NzRmO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQcm94aW1hLWJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICB9ICAgXHJcbiAgICBcclxuICAgICAgICAuYXJyb3d7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZjc0NzRmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLmluLXRvb2xiYXJ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMCAxMHB4IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzE5MTkxOTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmlvbi1wYWdlIHtcclxuICAgICAgICAgICAgLmluLXRvb2xiYXIge1xyXG4gICAgICAgICAgICAgIC50b29sYmFyLWJhY2tncm91bmQge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgIGlvbi1jb250ZW50e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTkxOTE5ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLmhlYWRlci1pbmZvIGlvbi1yb3csIC5kYXlze1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmFtZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQcm94aW1hLWJvbGQnO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZhZmFmYTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLmF1dGhvciwgLmZ1cnRoZXItaW5mb3tcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nO1xyXG4gICAgY29sb3I6ICNmYWZhZmE7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yM3B4O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5sZXZlbC1pbmZve1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzMTMyMzU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLmxldmVsLWxvZ297XHJcbiAgICAgICAgICAgbWF4LXdpZHRoOiAyNXB4OztcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMjVweDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAudGFzaywgLnRhc2staW5mb3tcclxuICAgICAgICAgICAgY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvLWJvbGQnO1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRhc2t7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxNnB4IDBweCA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLnRleHR7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLmV4ZXJjaXNlLWhlYWRlcntcclxuICAgICAgICAgICAgY29sb3I6ICNlZmVlZWU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUHJveGltYS1zZW1pJztcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLnRpdGxlLWluZm97XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLnN0YXJ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAuY2xvc2UtaW1ne1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgIl19 */"

/***/ }),

/***/ "./src/app/pages/edetails/edetails.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/edetails/edetails.page.ts ***!
  \*************************************************/
/*! exports provided: EdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdetailsPage", function() { return EdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "./node_modules/@ionic-native/streaming-media/ngx/index.js");
/* harmony import */ var _services_admob_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/admob.service */ "./src/app/services/admob.service.ts");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");








let EdetailsPage = class EdetailsPage {
    constructor(dataService, router, route, streamingMedia, admob, screenOrientation) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.streamingMedia = streamingMedia;
        this.admob = admob;
        this.screenOrientation = screenOrientation;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_4__["strings"];
        this.exercise = {};
        this.isLoading = false;
        this.orientation = 'landscape';
        this.show = {};
        this.workout = {};
        this.days = new Array(7);
        this.icon = 'star-outline';
    }
    ngOnInit() {
        this.admob.HideBannerAd();
        if (this.orientation === 'landscape') {
            this.setPortrait();
        }
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = true;
            this.route.params.subscribe(data => {
                this.id = data.id;
                this.getDetails();
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
        this.dataService.getDataExerciseById(this.id)
            .subscribe(resp => {
            this.exercise = resp[0];
            this.isLoading = false;
        });
    }
    play() {
        const options = {
            successCallback: () => { console.log('Video played'); },
            errorCallback: (e) => { console.log('Error streaming'); },
            orientation: 'landscape',
            shouldAutoClose: true,
            controls: true
        };
        // tslint:disable-next-line: max-line-length
        this.streamingMedia.playVideo('https://firebasestorage.googleapis.com/v0/b/six-pack-app.appspot.com/o/video.mp4?alt=media&token=453512dd-f079-4355-a325-92a9b2f7e465', options);
    }
    setPortrait() {
        // set to portrait
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }
    toggleInfo(index) {
        this.show[index] = true;
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
EdetailsPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_5__["StreamingMedia"] },
    { type: _services_admob_service__WEBPACK_IMPORTED_MODULE_6__["AdmobService"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__["ScreenOrientation"] }
];
EdetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edetails',
        template: __webpack_require__(/*! raw-loader!./edetails.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/edetails/edetails.page.html"),
        styles: [__webpack_require__(/*! ./edetails.page.scss */ "./src/app/pages/edetails/edetails.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_5__["StreamingMedia"],
        _services_admob_service__WEBPACK_IMPORTED_MODULE_6__["AdmobService"],
        _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__["ScreenOrientation"]])
], EdetailsPage);



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
//# sourceMappingURL=pages-edetails-edetails-module-es2015.js.map