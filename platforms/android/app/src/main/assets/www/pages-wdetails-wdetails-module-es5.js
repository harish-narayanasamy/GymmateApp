(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wdetails-wdetails-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/wdetails/wdetails.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/wdetails/wdetails.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header  class=\"lightheader\" mode=\"ios\" no-border>\r\n  <ion-toolbar mode=\"ios\" class=\"ion-color\" [style.background-color]=\"customColor\">\r\n      <ion-title class=\"ion-text-capitalize\">\r\n        Workout        </ion-title>\r\n              <ion-buttons slot=\"start\">\r\n                <app-backbutton color=\"primary\"></app-backbutton>\r\n              </ion-buttons>\r\n              <ion-buttons slot=\"end\">\r\n                <ion-button  slot=\"start\" [routerLink]=\"['/tabs/tab1']\">\r\n                  <img src=\"./assets/images/close.png\" class=\"close-img\"/> \r\n                  </ion-button>\r\n              </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n<ion-content class=\"ion-no-padding\">\r\n\r\n    <app-loading *ngIf=\"isLoading\"></app-loading>\r\n\r\n    <ion-grid class=\"ion-no-padding\">\r\n      <ion-row class=\"header-bg\" [style.background-image]=\"'url(' + (workout.workout_image | image) + ')'\" [ngStyle]=\"{'height': innerHeight}\">\r\n        </ion-row>\r\n        <ion-row class=\"w-info\">\r\n          <div class=\"w-name\">\r\n          <div class=\"text\">\r\n            <p class=\"time\">{{workout.workout_duration}}</p>\r\n          <p class=\"name\">{{workout.workout_title}}</p>\r\n        </div>\r\n        <div class=\"star-favourite\">\r\n          <ion-buttons slot=\"end\">\r\n            <ion-button (click)=\"addToFavorites()\" slot=\"start\">\r\n              <ion-icon color=\"light\" mode=\"md\" [name]=\"icon\"></ion-icon>\r\n              </ion-button>\r\n      </ion-buttons>\r\n        </div>\r\n      </div>\r\n        </ion-row>\r\n        <ion-row class=\"cols\">\r\n          <ion-col size=\"6\" class=\"ion-text-center\">\r\n            <p class=\"text\">{{strings.ST16}}</p>\r\n            <p class=\"value\">{{workout.goal_title}}</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\" class=\"ion-text-center\">\r\n              <p class=\"text\">{{strings.ST17}}</p>\r\n              <p class=\"value\">Easy</p>\r\n            </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <div class=\"days\">\r\n\r\n      <div *ngFor=\"let item of days let i = index\">\r\n            <div class=\"tags\" [routerLink]=\"['/weday', workout.workout_id, i+1]\">\r\n                <h1>{{strings.ST87}} {{i+1}}</h1>\r\n                <ion-icon name=\"arrow-forward\" class=\"ion-color arrow\" [style.background-color]=\"customColor\" slot=\"end\"></ion-icon>\r\n            </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wdetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wdetails.page */ "./src/app/pages/wdetails/wdetails.page.ts");




var routes = [
    {
        path: '',
        component: _wdetails_page__WEBPACK_IMPORTED_MODULE_3__["WdetailsPage"]
    }
];
var WdetailsPageRoutingModule = /** @class */ (function () {
    function WdetailsPageRoutingModule() {
    }
    WdetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], WdetailsPageRoutingModule);
    return WdetailsPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wdetails-routing.module */ "./src/app/pages/wdetails/wdetails-routing.module.ts");
/* harmony import */ var _wdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wdetails.page */ "./src/app/pages/wdetails/wdetails.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









var WdetailsPageModule = /** @class */ (function () {
    function WdetailsPageModule() {
    }
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
    return WdetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/wdetails/wdetails.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/wdetails/wdetails.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-bg {\n  background-color: #191919;\n  padding: 0 25% 0 5%;\n  background-position: center;\n  background-size: cover;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.time {\n  max-width: 120px;\n  width: 100%;\n  background: #f7474f;\n  text-align: center;\n  border-radius: 5px;\n  padding: 5px;\n  color: #ffffff;\n  font-size: 12px;\n  line-height: normal;\n  letter-spacing: normal;\n  font-family: 'Proxima-bold'; }\n\n.tags {\n  background-color: #313235;\n  padding: 15px;\n  position: relative;\n  margin-bottom: 10px;\n  border-radius: 5px; }\n\n.tags h1 {\n  font-size: 16px;\n  text-transform: uppercase;\n  font-weight: bold;\n  margin: 0;\n  font-family: 'Proxima-bold';\n  color: #aeabab;\n  line-height: 18px; }\n\n.days {\n  padding: 40px 5%;\n  background-color: #191919; }\n\n.tags ion-icon {\n  font-size: 22px; }\n\nion-grid {\n  background-color: #191919; }\n\n.text {\n  margin: 25px 0 30px 0;\n  width: 80%; }\n\n/* */\n\n.cols {\n  background-color: var(--ion-color-primary);\n  padding: 10px 0;\n  border-radius: 5px;\n  margin: 0 auto;\n  max-width: 90%; }\n\n.cols .value {\n  margin: 0;\n  color: #ffffff;\n  font-size: 14px;\n  font-family: 'Nunito';\n  font-weight: 600;\n  line-height: 16px; }\n\n.tags ion-icon {\n  position: absolute;\n  right: 14px;\n  top: 11px;\n  font-size: 22px; }\n\n.ion-text-capitalize {\n  width: 100%;\n  color: #f7474f;\n  font-family: Proxima-bold;\n  font-size: 20px !important;\n  text-transform: none !important; }\n\n.in-toolbar {\n  padding: 20px 0 10px 0 !important;\n  background: #191919; }\n\n.ion-page .in-toolbar .toolbar-background {\n  background: transparent !important; }\n\nion-content {\n  background: #191919 !important; }\n\n.header-info ion-row {\n  max-width: 90%;\n  margin: 0 auto !important;\n  height: auto !important; }\n\n.name {\n  font-size: 30px;\n  line-height: 35px;\n  font-family: 'Proxima-bold';\n  color: #ffffff;\n  margin-bottom: 0px;\n  margin-top: 0px;\n  max-width: 300px; }\n\n.close-img {\n  max-width: 16px;\n  max-height: 16px; }\n\n.w-info {\n  max-width: 90%;\n  margin: 0 auto; }\n\n.w-name {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  width: 100%; }\n\n.arrow, .tags {\n  --color: #aeabab !important;\n  color: #aeabab !important; }\n\n.star-favourite {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  width: 20%; }\n\n.cols .text {\n  color: #ffffff;\n  font-weight: bold;\n  margin: 0;\n  padding-bottom: 5px;\n  font-family: 'Nunito';\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 20px;\n  width: 100%; }\n\n.star-favourite .sc-ion-buttons-md-h {\n  margin-left: auto !important; }\n\n@media only screen and (max-width: 320px) {\n  .header-bg {\n    background-color: #191919;\n    padding: 0 15% 0 5%; }\n  .name {\n    font-size: 25px;\n    line-height: 30px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2RldGFpbHMvQzpcXFVzZXJzXFxIYXJpc2hcXExvY2FsX2RldlxcR3ltbWF0ZUFwcC9zcmNcXGFwcFxccGFnZXNcXHdkZXRhaWxzXFx3ZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCLEVBQUE7O0FBSTNCO0VBQ0ksZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxnQkFBZ0I7RUFDaEIseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLHFCQUFxQjtFQUNyQixVQUFVLEVBQUE7O0FBRWQsSUFBQTs7QUFDQTtFQUNBLDBDQUEwQztFQUMxQyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBR2Q7RUFDSSxTQUFTO0VBQ1QsY0FBYTtFQUNiLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUlyQjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxXQUFXO0VBQ1gsY0FBYztFQUNkLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsK0JBQStCLEVBQUE7O0FBRy9CO0VBQ0ksaUNBQWlDO0VBQ2pDLG1CQUFtQixFQUFBOztBQUd2QjtFQUdRLGtDQUFrQyxFQUFBOztBQUt4QztFQUNFLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ1EsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUd4QjtFQUNJLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsV0FBVyxFQUFBOztBQUdmO0VBQ0ksMkJBQVE7RUFDUix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSx5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFVBQVUsRUFBQTs7QUFHZDtFQUNJLGNBQWE7RUFDYixpQkFBaUI7RUFDakIsU0FBUztFQUNULG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUVmO0VBQ0ksNEJBQTRCLEVBQUE7O0FBRzVCO0VBQ0k7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CLEVBQUE7RUFFdkI7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCLEVBQUEsRUFFcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93ZGV0YWlscy93ZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWJne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcclxuICAgIHBhZGRpbmc6IDAgMjUlIDAgNSU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLnRpbWV7XHJcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjc0NzRmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUHJveGltYS1ib2xkJztcclxufVxyXG5cclxuLnRhZ3N7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzMjM1O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi50YWdzIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUHJveGltYS1ib2xkJztcclxuICAgIGNvbG9yOiAjYWVhYmFiO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbn1cclxuLmRheXN7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcclxufVxyXG5cclxuLnRhZ3MgaW9uLWljb257XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbmlvbi1ncmlke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcclxufVxyXG5cclxuLnRleHR7XHJcbiAgICBtYXJnaW46IDI1cHggMCAzMHB4IDA7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcbi8qICovXHJcbi5jb2xze1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbnBhZGRpbmc6IDEwcHggMDtcclxuYm9yZGVyLXJhZGl1czogNXB4O1xyXG5tYXJnaW46IDAgYXV0bztcclxubWF4LXdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi5jb2xzIC52YWx1ZXtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTogJ051bml0byc7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcblxyXG59IFxyXG5cclxuLnRhZ3MgaW9uLWljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTRweDtcclxuICAgIHRvcDogMTFweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuLmlvbi10ZXh0LWNhcGl0YWxpemV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjZjc0NzRmO1xyXG4gICAgZm9udC1mYW1pbHk6IFByb3hpbWEtYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH0gICBcclxuXHJcbiAgICAuaW4tdG9vbGJhcntcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDAgMTBweCAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzE5MTkxOTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmlvbi1wYWdlIHtcclxuICAgICAgICAuaW4tdG9vbGJhciB7XHJcbiAgICAgICAgICAudG9vbGJhci1iYWNrZ3JvdW5kIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBpb24tY29udGVudHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTkxOTE5ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlci1pbmZvIGlvbi1yb3d7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubmFtZXtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQcm94aW1hLWJvbGQnO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIH1cclxuICAgIC5jbG9zZS1pbWd7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTZweDtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAudy1pbmZve1xyXG4gICAgICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC53LW5hbWV7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5hcnJvdywgLnRhZ3N7XHJcbiAgICAgICAgLS1jb2xvcjogI2FlYWJhYiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjYWVhYmFiICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0YXItZmF2b3VyaXRle1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbHMgLnRleHR7XHJcbiAgICAgICAgY29sb3I6I2ZmZmZmZjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ051bml0byc7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9IFxyXG4gICAgLnN0YXItZmF2b3VyaXRlIC5zYy1pb24tYnV0dG9ucy1tZC1oIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gICAgICAgICAgICAuaGVhZGVyLWJnIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE1JSAwIDUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uYW1le1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_favorite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/favorite.service */ "./src/app/services/favorite.service.ts");







var WdetailsPage = /** @class */ (function () {
    function WdetailsPage(dataService, router, route, plt, dataFavorite) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.plt = plt;
        this.dataFavorite = dataFavorite;
        this.show = {};
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_4__["strings"];
        this.workout = {};
        this.isLoading = false;
        this.days = new Array(7);
        this.icon = 'star-outline';
        this.exercise = {};
        this.isInfoHidden = true;
        this.isInstruHidden = true;
        this.isTipsHidden = true;
        this.orientation = 'landscape';
    }
    WdetailsPage.prototype.ngOnInit = function () {
    };
    WdetailsPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.isLoading = true;
                this.innerHeight = this.plt.height() / 3 + 'px';
                this.route.params.subscribe(function (data) {
                    _this.id = data.id;
                    _this.getDetails();
                    _this.dataFavorite.existWorkout(_this.id)
                        .then(function (exist) { return _this.icon = (exist) ? 'star' : 'star-outline'; });
                    if (!_this.id) {
                        _this.goBack();
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    WdetailsPage.prototype.goBack = function () {
        this.router.navigate(['/home']);
    };
    WdetailsPage.prototype.getDetails = function () {
        var _this = this;
        this.dataService.getDataWorkoutById(this.id)
            .subscribe(function (resp) {
            _this.workout = resp[0];
            _this.isLoading = false;
        });
    };
    WdetailsPage.prototype.addToFavorites = function () {
        var workout = {
            id: this.workout.workout_id,
            title: this.workout.workout_title,
            image: this.workout.workout_image,
        };
        var exist = this.dataFavorite.saveWorkout(workout);
        this.icon = (exist) ? 'star' : 'star-outline';
    };
    WdetailsPage.prototype.toggleInfo = function (index) {
        this.show[index] = true;
    };
    WdetailsPage.ctorParameters = function () { return [
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
        { type: _services_favorite_service__WEBPACK_IMPORTED_MODULE_6__["FavoriteService"] }
    ]; };
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
    return WdetailsPage;
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
//# sourceMappingURL=pages-wdetails-wdetails-module-es5.js.map