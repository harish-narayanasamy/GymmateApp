(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ddetails-ddetails-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ddetails/ddetails.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ddetails/ddetails.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" mode=\"ios\" no-border>\r\n  <ion-toolbar mode=\"ios\" class=\"ion-color\" [style.background-color]=\"customColor\">\r\n        <ion-buttons slot=\"end\">\r\n            <app-backbutton color=\"dark\"></app-backbutton>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content class=\"ion-no-padding ion-color\" [style.background-color]=\"customColor\">\r\n\r\n      <app-loading *ngIf=\"isLoading\"></app-loading>\r\n\r\n      <ion-grid class=\"ion-no-padding\">\r\n          <ion-row class=\"header-bg\" [style.background-image]=\"'url(' + (diet.diet_image | image) + ')'\" [ngStyle]=\"{'height': innerHeight}\">\r\n      </ion-row>\r\n      </ion-grid>\r\n\r\n      <ion-toolbar mode=\"ios\" class=\"ion-color favourite\" [style.background-color]=\"customColor\">\r\n        <ion-buttons slot=\"end\">\r\n          <ion-button (click)=\"addToFavorites()\" slot=\"start\">\r\n            <ion-icon color=\"dark\" mode=\"md\" [name]=\"icon\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n        <div class=\"text\">\r\n          <p class=\"time category\">{{diet.category_title}}</p>\r\n          <p class=\"name-food\">{{diet.diet_title}}</p>\r\n        </div>\r\n    </ion-toolbar>\r\n\r\n      <ion-toolbar no-border-top class=\"ion-no-padding ion-color\" [style.background-color]=\"customColor\">\r\n      <ion-segment (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"segment\" mode=\"md\">\r\n          <ion-segment-button value=\"0\" mode=\"md\">\r\n            <ion-label>{{strings.ST46}}</ion-label>\r\n          </ion-segment-button>\r\n          <ion-segment-button value=\"1\" mode=\"md\" class=\"second\"> \r\n            <ion-label>{{strings.ST47}}</ion-label>\r\n          </ion-segment-button>\r\n          <ion-segment-button value=\"2\" mode=\"md\">\r\n              <ion-label>{{strings.ST48}}</ion-label>\r\n            </ion-segment-button>\r\n        </ion-segment>\r\n      </ion-toolbar> \r\n\r\n      <ion-slides [options]=\"slideOpts\" #slides (ionSlideDidChange)=\"slideChanged()\" scrollbar=\"false\">  \r\n          <ion-slide>\r\n              <ion-grid fixed>\r\n                <ion-row>\r\n                  <p class=\"ion-color about-meal\" [style.background-color]=\"customColor\">About the meal</p>\r\n                  <app-html [htmlcontent]=\"diet.diet_description\" class=\"ion-text-left description-diet\"></app-html>\r\n              </ion-row>\r\n              <ion-row>\r\n               <p class=\"nutrition\">Nutrition</p>\r\n            </ion-row>\r\n                  <ion-row class=\"detail-info\">\r\n                      <ion-col size=\"3\" class=\"col-icon\">\r\n                      <p class=\"value\">{{diet.diet_calories}}</p>\r\n                      <p class=\"name\">{{strings.ST45}}</p>\r\n                      </ion-col>\r\n\r\n                      <ion-col size=\"3\" class=\"col-icon\">\r\n                        <p class=\"value\">{{diet.diet_protein}}</p>\r\n                          <p class=\"name\">{{strings.ST50}}</p>\r\n                          </ion-col>\r\n                  \r\n                          <ion-col size=\"3\" class=\"col-icon\">\r\n                            <p class=\"value\">{{diet.diet_fat}}</p>\r\n                              <p class=\"name\">{{strings.ST51}}</p>\r\n                              </ion-col>\r\n\r\n                              <ion-col size=\"3\" class=\"col-icon\">\r\n                                <p class=\"value\">{{diet.diet_carbs}}</p>\r\n                                  <p class=\"name\">{{strings.ST52}}</p>\r\n                                  </ion-col>\r\n\r\n                  </ion-row>\r\n                </ion-grid>\r\n\r\n          </ion-slide>  \r\n          <ion-slide class=\"ingredients\">\r\n            <p class=\"ion-color about-meal\" [style.background-color]=\"customColor\">Method</p>\r\n            <app-html [htmlcontent]=\"diet.diet_ingredients\" class=\"ion-text-left method\"></app-html>\r\n            <p class=\"ion-color about-meal recommend-info\" [style.background-color]=\"customColor\">Recommended Recipes</p>\r\n            <div class=\"recommend\">\r\n              <div class=\"fav\">\r\n                <img src = \"./assets/images/logo-.png\" class=\"img-recommend\">\r\n                <p class=\"ion-color about-recommend\" [style.background-color]=\"customColor\">Tomato Meatballs</p>\r\n              </div>\r\n              <div class=\"fav\">\r\n                <img src = \"./assets/images/logo-.png\" class=\"img-recommend\">\r\n                <p class=\"ion-color about-recommend\" [style.background-color]=\"customColor\">Tomato Meatballs</p>\r\n              </div>\r\n            </div>\r\n          </ion-slide>  \r\n          <ion-slide class=\"direction\">\r\n            <p class=\"ion-color about-meal\" [style.background-color]=\"customColor\">Method</p> \r\n            <app-html [htmlcontent]=\"diet.diet_directions \" class=\"ion-text-left method\"></app-html> \r\n          </ion-slide>  \r\n          </ion-slides>  \r\n\r\n  </ion-content>\r\n  "

/***/ }),

/***/ "./src/app/pages/ddetails/ddetails-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/ddetails/ddetails-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: DdetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DdetailsPageRoutingModule", function() { return DdetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ddetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ddetails.page */ "./src/app/pages/ddetails/ddetails.page.ts");




const routes = [
    {
        path: '',
        component: _ddetails_page__WEBPACK_IMPORTED_MODULE_3__["DdetailsPage"]
    }
];
let DdetailsPageRoutingModule = class DdetailsPageRoutingModule {
};
DdetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DdetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/ddetails/ddetails.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/ddetails/ddetails.module.ts ***!
  \***************************************************/
/*! exports provided: DdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DdetailsPageModule", function() { return DdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ddetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ddetails-routing.module */ "./src/app/pages/ddetails/ddetails-routing.module.ts");
/* harmony import */ var _ddetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ddetails.page */ "./src/app/pages/ddetails/ddetails.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









let DdetailsPageModule = class DdetailsPageModule {
};
DdetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
            _ddetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["DdetailsPageRoutingModule"]
        ],
        declarations: [_ddetails_page__WEBPACK_IMPORTED_MODULE_6__["DdetailsPage"]]
    })
], DdetailsPageModule);



/***/ }),

/***/ "./src/app/pages/ddetails/ddetails.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/ddetails/ddetails.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px; }\n\n.header-bg {\n  background-position: center;\n  background-size: cover;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.header-bg .text {\n  color: #fff;\n  text-align: center;\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(10%, rgba(0, 0, 0, 0.4)), to(rgba(0, 0, 0, 0.75)));\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 10%, rgba(0, 0, 0, 0.75) 100%);\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 30px; }\n\n.header-bg .name {\n  color: #ffffff;\n  text-align: left;\n  margin: 0;\n  font-weight: bold;\n  font-size: 17px;\n  text-transform: capitalize; }\n\n.header-bg .time {\n  color: var(--ion-color-primary);\n  margin-bottom: 5px;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 14px;\n  font-weight: bold; }\n\nion-segment-button ion-label {\n  font-size: 16px !important;\n  font-weight: 500 !important;\n  letter-spacing: 0 !important;\n  text-transform: none !important;\n  margin: 0px !important; }\n\nion-segment-button {\n  max-height: 40px !important; }\n\n.second .sc-ion-segment-md-h {\n  border-left: 1.5px solid #979797 !important;\n  border-right: 1.5px solid #979797 !important; }\n\nion-segment-button:hover, ion-segment-button:focus, ion-segment-button:active {\n  background-color: #979797 !important;\n  border-radius: 10px;\n  color: #ffffff !important; }\n\n.col-icon {\n  text-align: center; }\n\n.col-icon img {\n  width: 38px;\n  display: block;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 14px; }\n\n.col-icon .name {\n  margin: 0;\n  font-weight: bold;\n  font-size: 18px;\n  margin-bottom: 7px; }\n\n.col-icon .value {\n  margin: 0;\n  font-size: 36px; }\n\nion-slides {\n  min-height: 50%;\n  padding-top: 0;\n  width: 100%;\n  background-color: #191919; }\n\n.slide {\n  min-height: 60%;\n  width: 100%; }\n\nion-slide {\n  -webkit-box-align: start !important;\n          align-items: flex-start !important;\n  -webkit-box-pack: start !important;\n          justify-content: flex-start !important;\n  padding: 0 20px; }\n\n.ion-page .in-toolbar .toolbar-background {\n  background: #212121 !important; }\n\n.favourite {\n  z-index: 9999;\n  background-color: #191919; }\n\n.text {\n  margin: 30px auto 0 auto;\n  max-width: 90%; }\n\n.category {\n  max-width: 100px;\n  width: 100%;\n  background: #f7474f;\n  text-align: center;\n  border-radius: 5px;\n  padding: 5px;\n  color: #ffffff;\n  font-size: 12px;\n  line-height: normal;\n  letter-spacing: normal;\n  font-family: 'Proxima-bold'; }\n\n.name-food {\n  font-size: 36px;\n  line-height: normal;\n  letter-spacing: normal;\n  font-family: 'Proxima-extra';\n  margin: 0px;\n  color: #ffffff; }\n\nion-content {\n  background-color: #191919; }\n\nion-header {\n  position: absolute; }\n\n.ion-text-left, p {\n  color: #ffffff !important; }\n\n.sc-ion-segment-md-h {\n  background-color: #313235;\n  border-radius: 10px;\n  color: #aeabab;\n  max-width: 90%;\n  margin: 15px auto 0 auto; }\n\n.about-meal {\n  max-width: 90%;\n  margin: 10px auto 5px auto; }\n\n.about-meal, .nutrition {\n  text-align: left !important;\n  padding: 0px !important;\n  font-size: 24px;\n  line-height: 28px;\n  letter-spacing: normal;\n  font-family: Proxima-semi;\n  color: #ffffff;\n  width: 100% !important;\n  margin: 15px 0 !important; }\n\n.about-meal ion-title {\n  max-width: 90%;\n  margin: 0 auto; }\n\n.description-diet p {\n  margin-top: 0px !important; }\n\n.description-diet, .method {\n  background-color: #313235;\n  color: #ffffff;\n  padding: 0 14px;\n  font-size: 16px;\n  line-height: 18px;\n  border-radius: 5px;\n  width: 100% !important; }\n\nion-grid {\n  padding: 0px !important; }\n\nion-col {\n  -webkit-box-flex: 0 !important;\n          flex: 0 0 calc(calc(6 / var(--ion-grid-columns, 12)) * 100%) !important;\n  width: calc(calc(6 / var(--ion-grid-columns, 12)) * 100%) !important;\n  max-width: calc(calc(6 / var(--ion-grid-columns, 12)) * 100%) !important;\n  padding: 25px; }\n\n.detail-info {\n  background-color: #313235;\n  border-radius: 5px;\n  margin-bottom: 80px; }\n\nion-col:nth-child(1), ion-col:nth-last-child(2) {\n  border-right: 0.5px solid #979797; }\n\nion-col:nth-child(2), ion-col:nth-last-child(1) {\n  border-left: 0.5px solid #979797; }\n\nion-col:nth-child(1), ion-col:nth-child(2) {\n  border-bottom: 0.5px solid #979797; }\n\nion-col:nth-last-child(2), ion-col:nth-last-child(1) {\n  border-top: 0.5px solid #979797; }\n\n.value {\n  color: #ffffff;\n  text-align: center;\n  font-size: 36px;\n  font-family: 'Proxima-extra'; }\n\n.name {\n  color: #ffffff;\n  text-align: center;\n  font-size: 16px; }\n\n:nth-child(1) .name {\n  color: #f7474f !important; }\n\nion-col:nth-child(2) .name {\n  color: #d2dd04 !important; }\n\nion-col:nth-child(3) .name {\n  color: #01b2e6 !important; }\n\nion-col:nth-child(4) .name {\n  color: #05ca7a !important; }\n\n.html ol, .html ul {\n  font-family: 'Proxima-regular' !important; }\n\n.ingredients, .direction {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: normal !important;\n          flex-direction: column !important; }\n\n.html ul {\n  list-style-position: inside !important;\n  padding: 5% !important;\n  background-color: #313235 !important;\n  border-radius: 5px !important; }\n\n.recommend {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin: 0 auto;\n  margin: 0 -10px 50px 0; }\n\n.fav {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: 0 auto;\n  text-align: left;\n  margin: 0 10px; }\n\n.about-recommend {\n  font-size: 16px;\n  line-height: 18px;\n  font-family: 'Nunito-semi';\n  margin: 8px 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGRldGFpbHMvQzpcXFVzZXJzXFxIYXJpc2hcXExvY2FsX2RldlxcR3ltbWF0ZUFwcC9zcmNcXGFwcFxccGFnZXNcXGRkZXRhaWxzXFxkZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx5QkFBb0I7RUFDcEIsNEJBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCO0VBR2xCLHlIQUFrRjtFQUFsRix3RkFBa0Y7RUFDbEYsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBYTtFQUFiLGFBQWE7RUFDYixxQkFBeUI7VUFBekIseUJBQXlCO0VBQ3pCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsYUFBYSxFQUFBOztBQUdqQjtFQUNJLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0Isc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksMkJBQTJCLEVBQUE7O0FBSS9CO0VBQ0MsMkNBQTJDO0VBQzFDLDRDQUE0QyxFQUFBOztBQUc5QztFQUNJLG9DQUFtQztFQUNuQyxtQkFBbUI7RUFDbkIseUJBQXlCLEVBQUE7O0FBSTdCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDQSxTQUFTO0VBQ1QsZUFBZSxFQUFBOztBQUliO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxXQUFXO0VBQ1gseUJBQXdCLEVBQUE7O0FBRXhCO0VBQ0ksZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFFbkI7RUFDSSxtQ0FBa0M7VUFBbEMsa0NBQWtDO0VBQ2xDLGtDQUFzQztVQUF0QyxzQ0FBc0M7RUFDdEMsZUFBZSxFQUFBOztBQUduQjtFQUdRLDhCQUE2QixFQUFBOztBQUtwQztFQUNJLGFBQWE7RUFDYix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSx3QkFBd0I7RUFDeEIsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUNyQiwyQkFBMkIsRUFBQTs7QUFHbkM7RUFDSSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLGNBQWMsRUFBQTs7QUFJbEI7RUFDSSx5QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDRyx5QkFBeUIsRUFBQTs7QUFJNUI7RUFDRyx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsd0JBQXdCLEVBQUE7O0FBRzNCO0VBRUksY0FBYztFQUNkLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIseUJBQXdCLEVBQUE7O0FBRzVCO0VBQ0csY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFHakI7RUFDTywwQkFBMEIsRUFBQTs7QUFHakM7RUFDRyx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGVBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBQTs7QUFHekI7RUFDSSx1QkFBdUIsRUFBQTs7QUFHM0I7RUFDRyw4QkFBdUU7VUFBdkUsdUVBQXVFO0VBQ3ZFLG9FQUFvRTtFQUNwRSx3RUFBd0U7RUFDeEUsYUFBYSxFQUFBOztBQUloQjtFQUNHLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3RCO0VBQ0csaUNBQWlDLEVBQUE7O0FBR3BDO0VBQ0csZ0NBQWdDLEVBQUE7O0FBR25DO0VBQ0csa0NBQWtDLEVBQUE7O0FBR3JDO0VBQ0csK0JBQStCLEVBQUE7O0FBR2xDO0VBQ0ksY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsNEJBQTRCLEVBQUE7O0FBRy9CO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBSWxCO0VBQ0cseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzVCO0VBQ0cseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzVCO0VBQ0cseUNBQXlDLEVBQUE7O0FBRzVDO0VBQ0ksdUNBQWlDO0VBQWpDLHdDQUFpQztVQUFqQyxpQ0FBaUMsRUFBQTs7QUFHdEM7RUFDSSxzQ0FBc0M7RUFDckMsc0JBQXNCO0VBQ3RCLG9DQUFvQztFQUN6Qyw2QkFBNkIsRUFBQTs7QUFJNUI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0csb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2pCO0VBQ0csZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsd0JBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZGV0YWlscy9kZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuOnJvb3QgeyAgXHJcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4OyAgXHJcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4OyAgXHJcbiAgfSAgXHJcbiAgXHJcbiAgLmhlYWRlci1iZ3tcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItYmcgLnRleHR7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgIHJnYmEoMCwwLDAsMC40KSAxMCUsIHJnYmEoMCwwLDAsMC43NSkgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDAsMCwwLDAuNCkgMTAlLHJnYmEoMCwwLDAsMC43NSkgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAgcmdiYSgwLDAsMCwwLjQpIDEwJSxyZ2JhKDAsMCwwLDAuNzUpIDEwMCUpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXItYmcgLm5hbWV7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uaGVhZGVyLWJnIC50aW1le1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaW9uLXNlZ21lbnQtYnV0dG9uIGlvbi1sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tc2VnbWVudC1idXR0b257XHJcbiAgICBtYXgtaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uc2Vjb25kIC5zYy1pb24tc2VnbWVudC1tZC1oe1xyXG4gYm9yZGVyLWxlZnQ6IDEuNXB4IHNvbGlkICM5Nzk3OTcgIWltcG9ydGFudDtcclxuICBib3JkZXItcmlnaHQ6IDEuNXB4IHNvbGlkICM5Nzk3OTcgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXNlZ21lbnQtYnV0dG9uOmhvdmVyLCBpb24tc2VnbWVudC1idXR0b246Zm9jdXMsIGlvbi1zZWdtZW50LWJ1dHRvbjphY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTc5Nzk3IWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLmNvbC1pY29ue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29sLWljb24gaW1ne1xyXG4gICAgd2lkdGg6IDM4cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxufVxyXG5cclxuLmNvbC1pY29uIC5uYW1le1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbn1cclxuXHJcbi5jb2wtaWNvbiAudmFsdWV7XHJcbm1hcmdpbjogMDtcclxuZm9udC1zaXplOiAzNnB4O1xyXG4gICAgXHJcbn1cclxuXHJcbiAgaW9uLXNsaWRlc3tcclxuICAgIG1pbi1oZWlnaHQ6IDUwJTtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxOTE5MTk7XHJcbiAgICB9XHJcbiAgICAuc2xpZGV7XHJcbiAgICAgICAgbWluLWhlaWdodDogNjAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG59IFxyXG5pb24tc2xpZGV7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbn1cclxuXHJcbi5pb24tcGFnZSB7XHJcbiAgICAuaW4tdG9vbGJhciB7XHJcbiAgICAgIC50b29sYmFyLWJhY2tncm91bmQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IzIxMjEyMSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuIC5mYXZvdXJpdGV7XHJcbiAgICAgei1pbmRleDogOTk5OTtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xyXG4gfSBcclxuXHJcbiAudGV4dHtcclxuICAgICBtYXJnaW46IDMwcHggYXV0byAwIGF1dG87XHJcbiAgICAgbWF4LXdpZHRoOiA5MCU7XHJcbiB9XHJcblxyXG4gLmNhdGVnb3J5e1xyXG4gICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgYmFja2dyb3VuZDogI2Y3NDc0ZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICAgICBmb250LWZhbWlseTogJ1Byb3hpbWEtYm9sZCc7XHJcbiB9XHJcblxyXG4gLm5hbWUtZm9vZHtcclxuICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgIGZvbnQtZmFtaWx5OiAnUHJveGltYS1leHRyYSc7XHJcbiAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gfVxyXG5cclxuIGlvbi1jb250ZW50e1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IzE5MTkxOTtcclxuIH1cclxuXHJcbiBpb24taGVhZGVye1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuIH1cclxuXHJcbiAuaW9uLXRleHQtbGVmdCwgcCB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuXHJcbiAuc2MtaW9uLXNlZ21lbnQtbWQtaHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTMyMzU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6ICNhZWFiYWI7XHJcbiAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMTVweCBhdXRvIDAgYXV0bztcclxuIH1cclxuXHJcbiAuYWJvdXQtbWVhbHtcclxuXHJcbiAgICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICAgbWFyZ2luOiAxMHB4IGF1dG8gNXB4IGF1dG87XHJcbiB9XHJcblxyXG4gLmFib3V0LW1lYWwsIC5udXRyaXRpb257XHJcbiAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgIGZvbnQtZmFtaWx5OiBQcm94aW1hLXNlbWk7XHJcbiAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICBtYXJnaW46IDE1cHggMCFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4gLmFib3V0LW1lYWwgaW9uLXRpdGxle1xyXG4gICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuIC5kZXNjcmlwdGlvbi1kaWV0IHB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4gLmRlc2NyaXB0aW9uLWRpZXQsIC5tZXRob2R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzMjM1O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOjAgMTRweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiBpb24tZ3JpZHtcclxuICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiBpb24tY29se1xyXG4gICAgZmxleDogMCAwIGNhbGMoY2FsYyg2IC8gdmFyKC0taW9uLWdyaWQtY29sdW1ucywgMTIpKSAqIDEwMCUpICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogY2FsYyhjYWxjKDYgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogMTAwJSkgIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogY2FsYyhjYWxjKDYgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogMTAwJSkgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgIFxyXG4gfVxyXG5cclxuIC5kZXRhaWwtaW5mb3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTMyMzU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG4gfVxyXG5cclxuIGlvbi1jb2w6bnRoLWNoaWxkKDEpLCBpb24tY29sOm50aC1sYXN0LWNoaWxkKDIpe1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwLjVweCBzb2xpZCAjOTc5Nzk3O1xyXG4gfVxyXG4gICAgXHJcbiBpb24tY29sOm50aC1jaGlsZCgyKSwgaW9uLWNvbDpudGgtbGFzdC1jaGlsZCgxKXtcclxuICAgIGJvcmRlci1sZWZ0OiAwLjVweCBzb2xpZCAjOTc5Nzk3O1xyXG4gfSBcclxuXHJcbiBpb24tY29sOm50aC1jaGlsZCgxKSwgaW9uLWNvbDpudGgtY2hpbGQoMil7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjOTc5Nzk3O1xyXG4gfVxyXG4gICAgXHJcbiBpb24tY29sOm50aC1sYXN0LWNoaWxkKDIpLCBpb24tY29sOm50aC1sYXN0LWNoaWxkKDEpe1xyXG4gICAgYm9yZGVyLXRvcDogMC41cHggc29saWQgIzk3OTc5NztcclxuIH0gXHJcblxyXG4gLnZhbHVle1xyXG4gICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgZm9udC1mYW1pbHk6ICdQcm94aW1hLWV4dHJhJztcclxuICAgIH1cclxuXHJcbiAgLm5hbWV7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9ICBcclxuXHJcblxyXG4gOm50aC1jaGlsZCgxKSAubmFtZXtcclxuICAgIGNvbG9yOiAjZjc0NzRmICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4gIGlvbi1jb2w6bnRoLWNoaWxkKDIpIC5uYW1le1xyXG4gICAgY29sb3I6ICNkMmRkMDQgIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiBpb24tY29sOm50aC1jaGlsZCgzKSAubmFtZXtcclxuICAgIGNvbG9yOiAjMDFiMmU2ICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4gIGlvbi1jb2w6bnRoLWNoaWxkKDQpIC5uYW1le1xyXG4gICAgY29sb3I6ICMwNWNhN2EgIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiAuaHRtbCBvbCwgLmh0bWwgdWx7XHJcbiAgICBmb250LWZhbWlseTogJ1Byb3hpbWEtcmVndWxhcicgIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiAuaW5ncmVkaWVudHMsIC5kaXJlY3Rpb257XHJcbiAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuLmh0bWwgdWx7XHJcbiAgICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGUgIWltcG9ydGFudDtcclxuICAgICBwYWRkaW5nOiA1JSAhaW1wb3J0YW50O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTMyMzUgIWltcG9ydGFudDtcclxuYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gfVxyXG5cclxuIC5yZWNvbW1lbmR7XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgIG1hcmdpbjogMCAtMTBweCA1MHB4IDA7XHJcbiB9XHJcblxyXG4gLmZhdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbiB9XHJcblxyXG4gLmFib3V0LXJlY29tbWVuZHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8tc2VtaSc7XHJcbiAgICBtYXJnaW46IDhweCAwICFpbXBvcnRhbnQ7XHJcbiB9Il19 */"

/***/ }),

/***/ "./src/app/pages/ddetails/ddetails.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/ddetails/ddetails.page.ts ***!
  \*************************************************/
/*! exports provided: DdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DdetailsPage", function() { return DdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _services_favorite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/favorite.service */ "./src/app/services/favorite.service.ts");
/* harmony import */ var _services_admob_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/admob.service */ "./src/app/services/admob.service.ts");








let DdetailsPage = class DdetailsPage {
    constructor(dataService, router, route, plt, dataFavorite, admob) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.plt = plt;
        this.dataFavorite = dataFavorite;
        this.admob = admob;
        this.segment = 0;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_5__["strings"];
        this.diet = {};
        this.isLoading = false;
        this.icon = 'star-outline';
        this.slideOpts = {
            slidesPerView: 1,
            freeMode: false
        };
    }
    ngOnInit() {
        this.admob.BannerAd();
    }
    // tslint:disable-next-line: use-lifecycle-interface
    ngOnDestroy() {
        this.admob.HideBannerAd();
    }
    segmentChanged(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.slider.slideTo(this.segment);
        });
    }
    slideChanged() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.segment = yield this.slider.getActiveIndex();
        });
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = true;
            this.innerHeight = this.plt.height() / 3 + 'px';
            this.route.params.subscribe(data => {
                this.id = data.id;
                this.getDetails();
                this.dataFavorite.existDiet(this.id)
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
        this.dataService.getDataDietById(this.id)
            .subscribe(resp => {
            this.diet = resp[0];
            this.isLoading = false;
        });
    }
    addToFavorites() {
        const diet = {
            id: this.diet.diet_id,
            title: this.diet.diet_title,
            image: this.diet.diet_image,
        };
        const exist = this.dataFavorite.saveDiet(diet);
        this.icon = (exist) ? 'star' : 'star-outline';
    }
};
DdetailsPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _services_favorite_service__WEBPACK_IMPORTED_MODULE_6__["FavoriteService"] },
    { type: _services_admob_service__WEBPACK_IMPORTED_MODULE_7__["AdmobService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"])
], DdetailsPage.prototype, "slider", void 0);
DdetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ddetails',
        template: __webpack_require__(/*! raw-loader!./ddetails.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ddetails/ddetails.page.html"),
        styles: [__webpack_require__(/*! ./ddetails.page.scss */ "./src/app/pages/ddetails/ddetails.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _services_favorite_service__WEBPACK_IMPORTED_MODULE_6__["FavoriteService"],
        _services_admob_service__WEBPACK_IMPORTED_MODULE_7__["AdmobService"]])
], DdetailsPage);



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
//# sourceMappingURL=pages-ddetails-ddetails-module-es2015.js.map