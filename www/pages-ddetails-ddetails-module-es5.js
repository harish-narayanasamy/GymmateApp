(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ddetails-ddetails-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ddetails/ddetails.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ddetails/ddetails.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" mode=\"ios\" no-border >\r\n  </ion-header>\r\n  \r\n  <ion-content class=\"ion-no-padding ion-color\" [style.background-color]=\"customColor\">\r\n\r\n      <ion-grid class=\"ion-no-padding\">\r\n        <ion-row [style.background-image]=\"'url(' + (diet.diet_image | image) + ')'\" [ngStyle]=\"{'height': innerHeight}\">\r\n          <div class=\"ion-header\">\r\n            <ion-toolbar mode=\"ios\" class=\"ion-color\" [style.background-color]=\"customColor\">\r\n              <ion-buttons slot=\"start\">\r\n                <app-backbutton color=\"arrow\" class=\"arrow\"></app-backbutton>\r\n              </ion-buttons>\r\n              <ion-buttons slot=\"end\">\r\n                <ion-button  slot=\"start\" [routerLink]=\"['/tabs/tab1']\">\r\n                  <img src=\"./assets/images/close.png\" class=\"close-img\"/> \r\n                  </ion-button>\r\n              </ion-buttons>\r\n          </ion-toolbar>\r\n           </div> \r\n        </ion-row>\r\n          <ion-row class=\"header-bg\" >\r\n      </ion-row>\r\n\r\n      </ion-grid>\r\n\r\n      <ion-toolbar mode=\"ios\" class=\"ion-color favourite\" [style.background-color]=\"customColor\">\r\n        <ion-buttons slot=\"end\" class=\"star\">\r\n          <ion-button (click)=\"addToFavorites()\" slot=\"start\">\r\n            <ion-icon color=\"primary\" mode=\"md\" [name]=\"icon\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n        <div class=\"text\">\r\n          <p class=\"time category\">{{diet.category_title}}</p>\r\n          <p class=\"name-food\">{{diet.diet_title}}</p>\r\n        </div>\r\n    </ion-toolbar>\r\n\r\n      <ion-toolbar no-border-top class=\"ion-no-padding ion-color\" [style.background-color]=\"customColor\">\r\n      <ion-segment (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"segment\" mode=\"md\" class=\"diet-container\">\r\n          <ion-segment-button value=\"0\" mode=\"md\">\r\n            <ion-label>{{strings.ST46}}</ion-label>\r\n          </ion-segment-button>\r\n          <ion-segment-button value=\"1\" mode=\"md\" class=\"second\"> \r\n            <ion-label>{{strings.ST47}}</ion-label>\r\n          </ion-segment-button>\r\n          <ion-segment-button value=\"2\" mode=\"md\">\r\n              <ion-label>{{strings.ST48}}</ion-label>\r\n            </ion-segment-button>\r\n        </ion-segment>\r\n      </ion-toolbar> \r\n\r\n      <ion-slides [options]=\"slideOpts\" #slides (ionSlideDidChange)=\"slideChanged()\" scrollbar=\"false\">  \r\n          <ion-slide>\r\n              <ion-grid fixed>\r\n                <ion-row>\r\n                  <p class=\"ion-color about-meal\" [style.background-color]=\"customColor\">About the meal</p>\r\n                  <app-html [htmlcontent]=\"diet.diet_description\" class=\"ion-text-left description-diet\"></app-html>\r\n              </ion-row>\r\n              <ion-row>\r\n               <p class=\"nutrition\">Nutrition</p>\r\n            </ion-row>\r\n                  <ion-row class=\"detail-info\">\r\n                      <ion-col size=\"3\" class=\"col-icon\">\r\n                      <p class=\"value\">{{diet.diet_calories}}</p>\r\n                      <p class=\"name\">{{strings.ST45}}</p>\r\n                      </ion-col>\r\n\r\n                      <ion-col size=\"3\" class=\"col-icon\">\r\n                        <p class=\"value\">{{diet.diet_protein}}</p>\r\n                          <p class=\"name\">{{strings.ST50}}</p>\r\n                          </ion-col>\r\n                  \r\n                          <ion-col size=\"3\" class=\"col-icon\">\r\n                            <p class=\"value\">{{diet.diet_fat}}</p>\r\n                              <p class=\"name\">{{strings.ST51}}</p>\r\n                              </ion-col>\r\n\r\n                              <ion-col size=\"3\" class=\"col-icon\">\r\n                                <p class=\"value\">{{diet.diet_carbs}}</p>\r\n                                  <p class=\"name\">{{strings.ST52}}</p>\r\n                                  </ion-col>\r\n\r\n                  </ion-row>\r\n                </ion-grid>\r\n\r\n          </ion-slide>  \r\n          <ion-slide class=\"ingredients\">\r\n            <p class=\"ion-color about-meal\" [style.background-color]=\"customColor\">Method</p>\r\n            <app-html [htmlcontent]=\"diet.diet_ingredients\" class=\"ion-text-left method\"></app-html>\r\n            <p class=\"ion-color about-meal recommend-info\" [style.background-color]=\"customColor\">Recommended Recipes</p>\r\n            <div class=\"recommend\">\r\n              <div class=\"fav\">\r\n                <img src = \"./assets/images/meal_card.png\" class=\"img-recommend\">\r\n                <p class=\"ion-color about-recommend\" [style.background-color]=\"customColor\">Tomato Meatballs</p>\r\n              </div>\r\n              <div class=\"fav\">\r\n                <img src = \"./assets/images/meal_card2.png\" class=\"img-recommend\">\r\n                <p class=\"ion-color about-recommend\" [style.background-color]=\"customColor\">Tomato Meatballs</p>\r\n              </div>\r\n            </div>\r\n          </ion-slide>  \r\n          <ion-slide class=\"direction\">\r\n            <p class=\"ion-color about-meal\" [style.background-color]=\"customColor\">Method</p> \r\n            <app-html [htmlcontent]=\"diet.diet_directions \" class=\"ion-text-left method\"></app-html> \r\n          </ion-slide>  \r\n          </ion-slides>  \r\n\r\n  </ion-content>\r\n  "

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ddetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ddetails.page */ "./src/app/pages/ddetails/ddetails.page.ts");




var routes = [
    {
        path: '',
        component: _ddetails_page__WEBPACK_IMPORTED_MODULE_3__["DdetailsPage"]
    }
];
var DdetailsPageRoutingModule = /** @class */ (function () {
    function DdetailsPageRoutingModule() {
    }
    DdetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DdetailsPageRoutingModule);
    return DdetailsPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ddetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ddetails-routing.module */ "./src/app/pages/ddetails/ddetails-routing.module.ts");
/* harmony import */ var _ddetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ddetails.page */ "./src/app/pages/ddetails/ddetails.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









var DdetailsPageModule = /** @class */ (function () {
    function DdetailsPageModule() {
    }
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
    return DdetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ddetails/ddetails.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/ddetails/ddetails.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px; }\n\n.header-bg {\n  background-position: center;\n  background-size: cover;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\nion-header {\n  background-color: #191919;\n  padding: 0 2%; }\n\n.header-bg .text {\n  color: #fff;\n  text-align: center;\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(10%, rgba(0, 0, 0, 0.4)), to(rgba(0, 0, 0, 0.75)));\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 10%, rgba(0, 0, 0, 0.75) 100%);\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 30px; }\n\n.ion-header {\n  width: 100%; }\n\n.header-bg .name {\n  color: #ffffff;\n  text-align: left;\n  margin: 0;\n  font-weight: bold;\n  font-size: 17px;\n  text-transform: capitalize; }\n\n.header-bg .time {\n  color: var(--ion-color-primary);\n  margin-bottom: 5px;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 14px;\n  font-weight: bold; }\n\nion-segment-button ion-label {\n  font-size: 16px !important;\n  font-weight: 500 !important;\n  letter-spacing: 0 !important;\n  text-transform: none !important;\n  margin: 0px !important; }\n\n.second .sc-ion-segment-md-h {\n  border-left: 1.5px solid #979797 !important;\n  border-right: 1.5px solid #979797 !important; }\n\nion-segment-button:hover, ion-segment-button:focus, ion-segment-button:active {\n  background-color: #979797 !important;\n  border-radius: 10px;\n  color: #ffffff !important; }\n\n.col-icon {\n  text-align: center; }\n\n.col-icon img {\n  width: 38px;\n  display: block;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 14px; }\n\n.col-icon .name {\n  margin: 0;\n  font-weight: bold;\n  font-size: 18px;\n  margin-bottom: 7px; }\n\n.col-icon .value {\n  margin: 0;\n  font-size: 36px; }\n\nion-slides {\n  min-height: 50%;\n  padding-top: 0;\n  width: 100%;\n  background-color: #191919; }\n\n.slide {\n  min-height: 60%;\n  width: 100%; }\n\nion-slide {\n  -webkit-box-align: start !important;\n          align-items: flex-start !important;\n  -webkit-box-pack: start !important;\n          justify-content: flex-start !important;\n  padding: 0 20px; }\n\n.ion-page .in-toolbar .toolbar-background {\n  background: #212121 !important; }\n\n.favourite {\n  z-index: 9999;\n  background-color: #191919; }\n\n.text {\n  margin: 30px auto 0 auto;\n  max-width: 90%; }\n\n.category {\n  max-width: 100px;\n  width: 100%;\n  background: #f7474f;\n  text-align: center;\n  border-radius: 5px;\n  padding: 5px;\n  color: #ffffff;\n  font-size: 12px;\n  line-height: normal;\n  letter-spacing: normal;\n  font-family: 'Proxima-bold'; }\n\n.name-food {\n  font-size: 36px;\n  line-height: normal;\n  letter-spacing: normal;\n  font-family: 'Proxima-extra';\n  margin: 0px;\n  color: #ffffff; }\n\nion-content {\n  background-color: #191919; }\n\n.ion-text-left, p {\n  color: #ffffff !important; }\n\n.sc-ion-segment-md-h {\n  background-color: #313235;\n  border-radius: 10px;\n  color: #aeabab;\n  max-width: 90%;\n  margin: 15px auto 0 auto; }\n\n.about-meal {\n  max-width: 90%;\n  margin: 10px auto 5px auto; }\n\n.about-meal, .nutrition {\n  text-align: left !important;\n  padding: 0px !important;\n  font-size: 24px;\n  line-height: 28px;\n  letter-spacing: normal;\n  font-family: Proxima-semi;\n  color: #ffffff;\n  width: 100% !important;\n  margin: 15px 0 !important; }\n\n.about-meal ion-title {\n  max-width: 90%;\n  margin: 0 auto; }\n\n.description-diet p {\n  margin-top: 0px !important; }\n\n.description-diet, .method {\n  background-color: #313235;\n  color: #ffffff;\n  padding: 0 14px;\n  font-size: 16px;\n  line-height: 18px;\n  border-radius: 5px;\n  width: 100% !important; }\n\nion-grid {\n  padding: 0px !important; }\n\nion-col {\n  -webkit-box-flex: 0 !important;\n          flex: 0 0 calc(calc(6 / var(--ion-grid-columns, 12)) * 100%) !important;\n  width: calc(calc(6 / var(--ion-grid-columns, 12)) * 100%) !important;\n  max-width: calc(calc(6 / var(--ion-grid-columns, 12)) * 100%) !important;\n  padding: 25px; }\n\n.detail-info {\n  background-color: #313235;\n  border-radius: 5px;\n  margin-bottom: 0px; }\n\nion-col:nth-child(1), ion-col:nth-last-child(2) {\n  border-right: 0.5px solid #979797; }\n\nion-col:nth-child(2), ion-col:nth-last-child(1) {\n  border-left: 0.5px solid #979797; }\n\nion-col:nth-child(1), ion-col:nth-child(2) {\n  border-bottom: 0.5px solid #979797; }\n\nion-col:nth-last-child(2), ion-col:nth-last-child(1) {\n  border-top: 0.5px solid #979797; }\n\n.value {\n  color: #ffffff;\n  text-align: center;\n  font-size: 36px;\n  font-family: 'Proxima-extra'; }\n\n.name {\n  color: #ffffff;\n  text-align: center;\n  font-size: 16px; }\n\n:nth-child(1) .name {\n  color: #f7474f !important; }\n\nion-col:nth-child(2) .name {\n  color: #d2dd04 !important; }\n\nion-col:nth-child(3) .name {\n  color: #01b2e6 !important; }\n\nion-col:nth-child(4) .name {\n  color: #05ca7a !important; }\n\n.html ol, .html ul {\n  font-family: 'Proxima-regular' !important; }\n\n.ingredients, .direction {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: normal !important;\n          flex-direction: column !important; }\n\n.html ul {\n  list-style-position: inside !important;\n  padding: 5% !important;\n  background-color: #313235 !important;\n  border-radius: 5px !important; }\n\n.recommend {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin: 0 auto;\n  margin: 0 -10px 50px 0; }\n\n.fav {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: 0 auto;\n  text-align: left;\n  margin: 0 10px; }\n\n.about-recommend {\n  font-size: 16px;\n  line-height: 18px;\n  font-family: 'Nunito-semi';\n  margin: 8px 0 !important; }\n\n.arrow {\n  color: #f7474f !important; }\n\n.cancel-img {\n  max-width: 25px;\n  max-height: 25px; }\n\n.star {\n  padding-top: 20px; }\n\n.close-img {\n  max-width: 16px;\n  max-height: 16px; }\n\n@media only screen and (max-width: 340px) {\n  .name-food {\n    font-size: 25px;\n    line-height: 30px; }\n  .diet-container {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n  ion-col {\n    padding: 25px 15px; }\n  .col-icon .value {\n    font-size: 28px;\n    line-height: 32px; }\n  .recommend-info {\n    font-size: 18px;\n    line-height: 22px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGRldGFpbHMvQzpcXFVzZXJzXFxIYXJpc2hcXExvY2FsX2RldlxcR3ltbWF0ZUFwcC9zcmNcXGFwcFxccGFnZXNcXGRkZXRhaWxzXFxkZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx5QkFBb0I7RUFDcEIsNEJBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDQSx5QkFBeUI7RUFDekIsYUFBYSxFQUFBOztBQUdiO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUdsQix5SEFBa0Y7RUFBbEYsd0ZBQWtGO0VBQ2xGLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2IscUJBQXlCO1VBQXpCLHlCQUF5QjtFQUN6Qix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLHNCQUFzQixFQUFBOztBQUcxQjtFQUNDLDJDQUEyQztFQUMxQyw0Q0FBNEMsRUFBQTs7QUFHOUM7RUFDSSxvQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLHlCQUF5QixFQUFBOztBQUk3QjtFQUNJLGtCQUFrQixFQUFBOztBQUd0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QXNCO0VBQ3RCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUdqQjtFQUNHLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLHdCQUF3QixFQUFBOztBQUczQjtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0c7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCLEVBQUE7RUFHekI7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQixFQUFBO0VBRzFCO0lBQ0ksa0JBQWtCLEVBQUE7RUFHdEI7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCLEVBQUE7RUFHckI7SUFDQSxlQUFlO0lBQ2YsaUJBQWlCLEVBQUEsRUFDZiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RkZXRhaWxzL2RkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG46cm9vdCB7ICBcclxuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7ICBcclxuICAgIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7ICBcclxuICB9ICBcclxuICBcclxuICAuaGVhZGVyLWJne1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG5pb24taGVhZGVye1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xyXG5wYWRkaW5nOiAwIDIlO1xyXG59XHJcblxyXG4uaGVhZGVyLWJnIC50ZXh0e1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDAsMCwwLDAuNCkgMTAlLCByZ2JhKDAsMCwwLDAuNzUpIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgwLDAsMCwwLjQpIDEwJSxyZ2JhKDAsMCwwLDAuNzUpIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIHJnYmEoMCwwLDAsMC40KSAxMCUscmdiYSgwLDAsMCwwLjc1KSAxMDAlKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG4uaW9uLWhlYWRlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaGVhZGVyLWJnIC5uYW1le1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLmhlYWRlci1iZyAudGltZXtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50LWJ1dHRvbiBpb24tbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlY29uZCAuc2MtaW9uLXNlZ21lbnQtbWQtaHtcclxuIGJvcmRlci1sZWZ0OiAxLjVweCBzb2xpZCAjOTc5Nzk3ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxLjVweCBzb2xpZCAjOTc5Nzk3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50LWJ1dHRvbjpob3ZlciwgaW9uLXNlZ21lbnQtYnV0dG9uOmZvY3VzLCBpb24tc2VnbWVudC1idXR0b246YWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk3OTc5NyFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi5jb2wtaWNvbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbC1pY29uIGltZ3tcclxuICAgIHdpZHRoOiAzOHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbn1cclxuXHJcbi5jb2wtaWNvbiAubmFtZXtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG59XHJcblxyXG4uY29sLWljb24gLnZhbHVle1xyXG5tYXJnaW46IDA7XHJcbmZvbnQtc2l6ZTogMzZweDtcclxuICAgIFxyXG59XHJcblxyXG4gIGlvbi1zbGlkZXN7XHJcbiAgICBtaW4taGVpZ2h0OiA1MCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMTkxOTE5O1xyXG4gICAgfVxyXG4gICAgLnNsaWRle1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDYwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxufSBcclxuaW9uLXNsaWRle1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG59XHJcblxyXG4uaW9uLXBhZ2Uge1xyXG4gICAgLmluLXRvb2xiYXIge1xyXG4gICAgICAudG9vbGJhci1iYWNrZ3JvdW5kIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiMyMTIxMjEgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAuZmF2b3VyaXRle1xyXG4gICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcclxuIH0gXHJcblxyXG4gLnRleHR7XHJcbiAgICAgbWFyZ2luOiAzMHB4IGF1dG8gMCBhdXRvO1xyXG4gICAgIG1heC13aWR0aDogOTAlO1xyXG4gfVxyXG5cclxuIC5jYXRlZ29yeXtcclxuICAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIGJhY2tncm91bmQ6ICNmNzQ3NGY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgICAgICAgZm9udC1mYW1pbHk6ICdQcm94aW1hLWJvbGQnO1xyXG4gfVxyXG5cclxuIC5uYW1lLWZvb2R7XHJcbiAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgICBmb250LWZhbWlseTogJ1Byb3hpbWEtZXh0cmEnO1xyXG4gICAgIG1hcmdpbjogMHB4O1xyXG4gICAgIGNvbG9yOiAjZmZmZmZmO1xyXG5cclxuIH1cclxuXHJcbiBpb24tY29udGVudHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxOTE5MTk7XHJcbiB9XHJcblxyXG5cclxuIC5pb24tdGV4dC1sZWZ0LCBwIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG5cclxuIC5zYy1pb24tc2VnbWVudC1tZC1oe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMxMzIzNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogI2FlYWJhYjtcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAxNXB4IGF1dG8gMCBhdXRvO1xyXG4gfVxyXG5cclxuIC5hYm91dC1tZWFse1xyXG5cclxuICAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgICBtYXJnaW46IDEwcHggYXV0byA1cHggYXV0bztcclxuIH1cclxuXHJcbiAuYWJvdXQtbWVhbCwgLm51dHJpdGlvbntcclxuICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgZm9udC1mYW1pbHk6IFByb3hpbWEtc2VtaTtcclxuICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgIG1hcmdpbjogMTVweCAwIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiAuYWJvdXQtbWVhbCBpb24tdGl0bGV7XHJcbiAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4gLmRlc2NyaXB0aW9uLWRpZXQgcHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiAuZGVzY3JpcHRpb24tZGlldCwgLm1ldGhvZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTMyMzU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6MCAxNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuIGlvbi1ncmlke1xyXG4gICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuIGlvbi1jb2x7XHJcbiAgICBmbGV4OiAwIDAgY2FsYyhjYWxjKDYgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogMTAwJSkgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiBjYWxjKGNhbGMoNiAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDEyKSkgKiAxMDAlKSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiBjYWxjKGNhbGMoNiAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDEyKSkgKiAxMDAlKSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgXHJcbiB9XHJcblxyXG4gLmRldGFpbC1pbmZve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMxMzIzNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuIH1cclxuXHJcbiBpb24tY29sOm50aC1jaGlsZCgxKSwgaW9uLWNvbDpudGgtbGFzdC1jaGlsZCgyKXtcclxuICAgIGJvcmRlci1yaWdodDogMC41cHggc29saWQgIzk3OTc5NztcclxuIH1cclxuICAgIFxyXG4gaW9uLWNvbDpudGgtY2hpbGQoMiksIGlvbi1jb2w6bnRoLWxhc3QtY2hpbGQoMSl7XHJcbiAgICBib3JkZXItbGVmdDogMC41cHggc29saWQgIzk3OTc5NztcclxuIH0gXHJcblxyXG4gaW9uLWNvbDpudGgtY2hpbGQoMSksIGlvbi1jb2w6bnRoLWNoaWxkKDIpe1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgIzk3OTc5NztcclxuIH1cclxuICAgIFxyXG4gaW9uLWNvbDpudGgtbGFzdC1jaGlsZCgyKSwgaW9uLWNvbDpudGgtbGFzdC1jaGlsZCgxKXtcclxuICAgIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkICM5Nzk3OTc7XHJcbiB9IFxyXG5cclxuIC52YWx1ZXtcclxuICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgIGZvbnQtZmFtaWx5OiAnUHJveGltYS1leHRyYSc7XHJcbiAgICB9XHJcblxyXG4gIC5uYW1le1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfSAgXHJcblxyXG5cclxuIDpudGgtY2hpbGQoMSkgLm5hbWV7XHJcbiAgICBjb2xvcjogI2Y3NDc0ZiAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuICBpb24tY29sOm50aC1jaGlsZCgyKSAubmFtZXtcclxuICAgIGNvbG9yOiAjZDJkZDA0ICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4gaW9uLWNvbDpudGgtY2hpbGQoMykgLm5hbWV7XHJcbiAgICBjb2xvcjogIzAxYjJlNiAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuICBpb24tY29sOm50aC1jaGlsZCg0KSAubmFtZXtcclxuICAgIGNvbG9yOiAjMDVjYTdhICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4gLmh0bWwgb2wsIC5odG1sIHVse1xyXG4gICAgZm9udC1mYW1pbHk6ICdQcm94aW1hLXJlZ3VsYXInICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4gLmluZ3JlZGllbnRzLCAuZGlyZWN0aW9ue1xyXG4gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxuIH1cclxuXHJcbi5odG1sIHVse1xyXG4gICAgbGlzdC1zdHlsZS1wb3NpdGlvbjogaW5zaWRlICFpbXBvcnRhbnQ7XHJcbiAgICAgcGFkZGluZzogNSUgIWltcG9ydGFudDtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzMjM1ICFpbXBvcnRhbnQ7XHJcbmJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG5cclxuIH1cclxuXHJcbiAucmVjb21tZW5ke1xyXG4gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICBtYXJnaW46IDAgLTEwcHggNTBweCAwO1xyXG4gfVxyXG5cclxuIC5mYXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gfVxyXG5cclxuIC5hYm91dC1yZWNvbW1lbmR7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvLXNlbWknO1xyXG4gICAgbWFyZ2luOiA4cHggMCAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuIC5hcnJvd3tcclxuICAgICBjb2xvcjogI2Y3NDc0ZiAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuIC5jYW5jZWwtaW1ne1xyXG4gICAgIG1heC13aWR0aDogMjVweDtcclxuICAgICBtYXgtaGVpZ2h0OiAyNXB4O1xyXG4gfVxyXG5cclxuIC5zdGFye1xyXG4gICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gfVxyXG5cclxuIC5jbG9zZS1pbWd7XHJcbiAgICAgbWF4LXdpZHRoOiAxNnB4O1xyXG4gICAgIG1heC1oZWlnaHQ6IDE2cHg7XHJcbiB9XHJcblxyXG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNDBweCkge1xyXG4gICAgLm5hbWUtZm9vZHtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4uZGlldC1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuaW9uLWNvbHtcclxuICAgIHBhZGRpbmc6IDI1cHggMTVweDtcclxufVxyXG5cclxuLmNvbC1pY29uIC52YWx1ZXtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG59XHJcblxyXG4ucmVjb21tZW5kLWluZm97XHJcbmZvbnQtc2l6ZTogMThweDtcclxubGluZS1oZWlnaHQ6IDIycHg7XHJcbiB9XHJcbiB9Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _services_favorite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/favorite.service */ "./src/app/services/favorite.service.ts");
/* harmony import */ var _services_admob_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/admob.service */ "./src/app/services/admob.service.ts");








var DdetailsPage = /** @class */ (function () {
    function DdetailsPage(dataService, router, route, plt, dataFavorite, admob) {
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
    DdetailsPage.prototype.ngOnInit = function () {
        this.admob.BannerAd();
    };
    // tslint:disable-next-line: use-lifecycle-interface
    DdetailsPage.prototype.ngOnDestroy = function () {
        this.admob.HideBannerAd();
    };
    DdetailsPage.prototype.segmentChanged = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.slider.slideTo(this.segment)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DdetailsPage.prototype.slideChanged = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.slider.getActiveIndex()];
                    case 1:
                        _a.segment = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DdetailsPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.isLoading = true;
                this.innerHeight = this.plt.height() / 3 + 'px';
                this.route.params.subscribe(function (data) {
                    _this.id = data.id;
                    _this.getDetails();
                    _this.dataFavorite.existDiet(_this.id)
                        .then(function (exist) { return _this.icon = (exist) ? 'star' : 'star-outline'; });
                    if (!_this.id) {
                        _this.goBack();
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    DdetailsPage.prototype.goBack = function () {
        this.router.navigate(['/home']);
    };
    DdetailsPage.prototype.getDetails = function () {
        var _this = this;
        this.dataService.getDataDietById(this.id)
            .subscribe(function (resp) {
            _this.diet = resp[0];
            _this.isLoading = false;
        });
    };
    DdetailsPage.prototype.addToFavorites = function () {
        var diet = {
            id: this.diet.diet_id,
            title: this.diet.diet_title,
            image: this.diet.diet_image,
        };
        var exist = this.dataFavorite.saveDiet(diet);
        this.icon = (exist) ? 'star' : 'star-outline';
    };
    DdetailsPage.ctorParameters = function () { return [
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _services_favorite_service__WEBPACK_IMPORTED_MODULE_6__["FavoriteService"] },
        { type: _services_admob_service__WEBPACK_IMPORTED_MODULE_7__["AdmobService"] }
    ]; };
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
    return DdetailsPage;
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
//# sourceMappingURL=pages-ddetails-ddetails-module-es5.js.map