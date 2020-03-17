(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-calculator-calculator-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/calculator/calculator.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/calculator/calculator.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"darkheader\" mode=\"ios\" no-border>\n    <ion-toolbar mode=\"ios\">\n        <ion-title class=\"ion-text-capitalize\">\n            {{strings.ST105}}\n          </ion-title>\n        <ion-buttons slot=\"start\">\n            <app-backbutton color=\"light\"></app-backbutton>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n          <ion-icon mode=\"md\" name=\"md-information-circle-outline\" [routerLink]=\"'/bmiinfo'\" slot=\"end\">\n          </ion-icon>\n        </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content class=\"ion-no-padding\">\n\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"col1\" [ngStyle]=\"{'background-color': color}\">\n\n        <div class=\"image\">\n          <img [src]=\"icon\">\n        </div>\n\n        <p class=\"name\">{{resultText}}</p>\n\n          <div class=\"circle\">\n              <p class=\"number\">{{resultNumber}}</p>\n              <p class=\"text\">BMI</p>\n          </div>\n\n      </ion-col>\n      <ion-col size=\"12\" class=\"col2\">\n\n        <div class=\"inputs\">\n          \n          <ion-list class=\"line-input\" mode=\"md\"> \n              <ion-item mode=\"md\">\n                <ion-input class=\"ion-text-center\" maxlength=\"3\" minlength=\"3\" [placeholder]=\"strings.ST136\" [(ngModel)]=\"height\" type=\"text\"></ion-input>\n              </ion-item> \n            </ion-list>\n\n            <ion-list class=\"line-input\" mode=\"md\"> \n                <ion-item mode=\"md\">\n                  <ion-input class=\"ion-text-center\" maxlength=\"3\" minlength=\"2\" [placeholder]=\"strings.ST137\" [(ngModel)]=\"weight\" type=\"text\"></ion-input>\n                </ion-item> \n              </ion-list>\n\n              <ion-button mode=\"ios\" (click)=\"MetricCalculate()\" type=\"submit\" color=\"dark\" fill=\"solid\" size=\"default\" shape=\"round\" expand=\"block\">\n                  {{strings.ST138}}\n              </ion-button>\n\n              <p class=\"footertext\">{{strings.ST139}}</p>\n\n          </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/calculator/calculator-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/calculator/calculator-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CalculatorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorPageRoutingModule", function() { return CalculatorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _calculator_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculator.page */ "./src/app/pages/calculator/calculator.page.ts");




const routes = [
    {
        path: '',
        component: _calculator_page__WEBPACK_IMPORTED_MODULE_3__["CalculatorPage"]
    }
];
let CalculatorPageRoutingModule = class CalculatorPageRoutingModule {
};
CalculatorPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CalculatorPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/calculator/calculator.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/calculator/calculator.module.ts ***!
  \*******************************************************/
/*! exports provided: CalculatorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorPageModule", function() { return CalculatorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _calculator_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calculator-routing.module */ "./src/app/pages/calculator/calculator-routing.module.ts");
/* harmony import */ var _calculator_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calculator.page */ "./src/app/pages/calculator/calculator.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let CalculatorPageModule = class CalculatorPageModule {
};
CalculatorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _calculator_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalculatorPageRoutingModule"]
        ],
        declarations: [_calculator_page__WEBPACK_IMPORTED_MODULE_6__["CalculatorPage"]]
    })
], CalculatorPageModule);



/***/ }),

/***/ "./src/app/pages/calculator/calculator.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/calculator/calculator.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  height: 100%; }\n\nion-row {\n  height: 100%; }\n\n.col1 {\n  height: 55%;\n  background-color: var(--ion-color-primary);\n  position: relative; }\n\n.col2 {\n  height: 45%; }\n\n.image {\n  max-width: 120px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 22%; }\n\n.name {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n  text-align: center;\n  color: white;\n  font-weight: bold;\n  font-size: 20px;\n  text-transform: uppercase; }\n\n.circle {\n  background-color: var(--ion-color-dark);\n  position: absolute;\n  bottom: -70px;\n  left: 50%;\n  width: 140px;\n  height: 140px;\n  margin-left: -67px;\n  border-radius: 100px;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  border: 10px solid #ffffff;\n  z-index: 9; }\n\n.circle p {\n  display: block;\n  color: white;\n  margin: 0; }\n\n.circle .number {\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: 6px; }\n\n.circle .text {\n  font-weight: bold;\n  font-size: 14px; }\n\n.inputs {\n  display: block;\n  max-width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 70px; }\n\n.line-input {\n  margin-bottom: 0 !important; }\n\n.line-input ion-item {\n    --border-color: transparent!important;\n    --highlight-height: 0;\n    border: 1px solid #cccccc;\n    border-radius: 50px; }\n\n.line-input ion-item.item-has-focus {\n      border: 1px solid var(--ion-color-primary); }\n\n.line-input ion-item ion-label {\n      color: #cccccc !important;\n      font-size: 14px !important; }\n\n.line-input ion-item ion-input {\n      --placeholder-color: #757575 !important; }\n\n.footertext {\n  color: #cccccc !important;\n  font-size: 14px !important;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FsY3VsYXRvci9DOlxcVXNlcnNcXEhhcmlzaFxcTG9jYWxfZGV2XFxpb25pY1xcR3ltbWF0ZS9zcmNcXGFwcFxccGFnZXNcXGNhbGN1bGF0b3JcXGNhbGN1bGF0b3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXO0VBQ1gsMENBQTBDO0VBQzFDLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSx1Q0FBdUM7RUFDdkMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixTQUFTO0VBQ1QsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLFVBQVUsRUFBQTs7QUFHZDtFQUNJLGNBQWM7RUFDZCxZQUFZO0VBQ1osU0FBUyxFQUFBOztBQUdiO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUduQjtFQUNJLGNBQWM7RUFDZCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSwyQkFBMEIsRUFBQTs7QUFEOUI7SUFHUSxxQ0FBZTtJQUNmLHFCQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsbUJBQW1CLEVBQUE7O0FBTjNCO01BU1ksMENBQTBDLEVBQUE7O0FBVHREO01BYVkseUJBQXdCO01BQ3hCLDBCQUF5QixFQUFBOztBQWRyQztNQWtCWSx1Q0FBb0IsRUFBQTs7QUFRaEM7RUFDSSx5QkFBd0I7RUFDeEIsMEJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FsY3VsYXRvci9jYWxjdWxhdG9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlke1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLXJvd3tcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb2wxe1xuICAgIGhlaWdodDogNTUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb2wye1xuICAgIGhlaWdodDogNDUlO1xufVxuXG4uaW1hZ2V7XG4gICAgbWF4LXdpZHRoOiAxMjBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMjIlO1xufVxuXG4ubmFtZXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY2lyY2xle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtNzBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGhlaWdodDogMTQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC02N3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXI6IDEwcHggc29saWQgI2ZmZmZmZjtcbiAgICB6LWluZGV4OiA5O1xufVxuXG4uY2lyY2xlIHB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmNpcmNsZSAubnVtYmVye1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5jaXJjbGUgLnRleHR7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaW5wdXRze1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xufVxuXG4ubGluZS1pbnB1dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMCFpbXBvcnRhbnQ7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xuICAgICAgICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cbiAgICAgICAgJi5pdGVtLWhhcy1mb2N1cyB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgY29sb3I6ICNjY2NjY2MhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4IWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1pbnB1dHtcbiAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICM3NTc1NzUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59XG5cblxuXG4uZm9vdGVydGV4dHtcbiAgICBjb2xvcjogI2NjY2NjYyFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNHB4IWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/calculator/calculator.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/calculator/calculator.page.ts ***!
  \*****************************************************/
/*! exports provided: CalculatorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorPage", function() { return CalculatorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");



let CalculatorPage = class CalculatorPage {
    constructor() {
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
        this.resultNumber = '00.0';
        this.resultText = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST131;
        this.icon = './assets/images/normal.png';
        this.color = 'var(--ion-color-primary)';
    }
    ngOnInit() {
    }
    MetricCalculate() {
        const height = this.height;
        const weight = this.weight;
        if (Number(height) && Number(weight)) {
            const imc = ((weight / height / height) * 10000);
            this.resultNumber = imc.toFixed(2);
            if (imc < 18.5) {
                this.resultText = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST132;
                this.color = '#22a6b3';
                this.icon = './assets/images/underweight.png';
            }
            else if (imc > 18.5 && imc < 25) {
                this.resultText = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST133;
                this.color = '#6ab04c';
                this.icon = './assets/images/normal.png';
            }
            else if (imc >= 25 && imc < 30) {
                this.resultText = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST134;
                this.color = '#f0932b';
                this.icon = './assets/images/overweight.png';
            }
            else {
                this.resultText = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST135;
                this.color = '#eb4d4b';
                this.icon = './assets/images/obesity.png';
            }
        }
    }
};
CalculatorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calculator',
        template: __webpack_require__(/*! raw-loader!./calculator.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/calculator/calculator.page.html"),
        styles: [__webpack_require__(/*! ./calculator.page.scss */ "./src/app/pages/calculator/calculator.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CalculatorPage);



/***/ })

}]);
//# sourceMappingURL=pages-calculator-calculator-module-es2015.js.map