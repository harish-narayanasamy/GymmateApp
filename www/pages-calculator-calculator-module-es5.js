(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-calculator-calculator-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/calculator/calculator.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/calculator/calculator.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"darkheader\" mode=\"ios\" no-border>\r\n    <ion-toolbar mode=\"ios\">\r\n        <ion-title class=\"ion-text-capitalize\">\r\n            {{strings.ST105}}\r\n          </ion-title>\r\n        <ion-buttons slot=\"start\">\r\n            <app-backbutton color=\"light\"></app-backbutton>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-icon mode=\"md\" name=\"md-information-circle-outline\" [routerLink]=\"'/bmiinfo'\" slot=\"end\">\r\n          </ion-icon>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n<ion-content class=\"ion-no-padding\">\r\n\r\n  <ion-grid class=\"ion-no-padding\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"col1\" [ngStyle]=\"{'background-color': color}\">\r\n\r\n        <div class=\"image\">\r\n          <img [src]=\"icon\">\r\n        </div>\r\n\r\n        <p class=\"name\">{{resultText}}</p>\r\n\r\n          <div class=\"circle\">\r\n              <p class=\"number\">{{resultNumber}}</p>\r\n              <p class=\"text\">BMI</p>\r\n          </div>\r\n\r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\"col2\">\r\n\r\n        <div class=\"inputs\">\r\n          \r\n          <ion-list class=\"line-input\" mode=\"md\"> \r\n              <ion-item mode=\"md\">\r\n                <ion-input class=\"ion-text-center\" maxlength=\"3\" minlength=\"3\" [placeholder]=\"strings.ST136\" [(ngModel)]=\"height\" type=\"text\"></ion-input>\r\n              </ion-item> \r\n            </ion-list>\r\n\r\n            <ion-list class=\"line-input\" mode=\"md\"> \r\n                <ion-item mode=\"md\">\r\n                  <ion-input class=\"ion-text-center\" maxlength=\"3\" minlength=\"2\" [placeholder]=\"strings.ST137\" [(ngModel)]=\"weight\" type=\"text\"></ion-input>\r\n                </ion-item> \r\n              </ion-list>\r\n\r\n              <ion-button mode=\"ios\" (click)=\"MetricCalculate()\" type=\"submit\" color=\"dark\" fill=\"solid\" size=\"default\" shape=\"round\" expand=\"block\">\r\n                  {{strings.ST138}}\r\n              </ion-button>\r\n\r\n              <p class=\"footertext\">{{strings.ST139}}</p>\r\n\r\n          </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _calculator_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculator.page */ "./src/app/pages/calculator/calculator.page.ts");




var routes = [
    {
        path: '',
        component: _calculator_page__WEBPACK_IMPORTED_MODULE_3__["CalculatorPage"]
    }
];
var CalculatorPageRoutingModule = /** @class */ (function () {
    function CalculatorPageRoutingModule() {
    }
    CalculatorPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CalculatorPageRoutingModule);
    return CalculatorPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _calculator_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calculator-routing.module */ "./src/app/pages/calculator/calculator-routing.module.ts");
/* harmony import */ var _calculator_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calculator.page */ "./src/app/pages/calculator/calculator.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var CalculatorPageModule = /** @class */ (function () {
    function CalculatorPageModule() {
    }
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
    return CalculatorPageModule;
}());



/***/ }),

/***/ "./src/app/pages/calculator/calculator.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/calculator/calculator.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  height: 100%; }\n\nion-row {\n  height: 100%; }\n\n.col1 {\n  height: 55%;\n  background-color: var(--ion-color-primary);\n  position: relative; }\n\n.col2 {\n  height: 45%; }\n\n.image {\n  max-width: 120px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 22%; }\n\n.name {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n  text-align: center;\n  color: white;\n  font-weight: bold;\n  font-size: 20px;\n  text-transform: uppercase; }\n\n.circle {\n  background-color: var(--ion-color-dark);\n  position: absolute;\n  bottom: -70px;\n  left: 50%;\n  width: 140px;\n  height: 140px;\n  margin-left: -67px;\n  border-radius: 100px;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  border: 10px solid #ffffff;\n  z-index: 9; }\n\n.circle p {\n  display: block;\n  color: white;\n  margin: 0; }\n\n.circle .number {\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: 6px; }\n\n.circle .text {\n  font-weight: bold;\n  font-size: 14px; }\n\n.inputs {\n  display: block;\n  max-width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 70px; }\n\n.line-input {\n  margin-bottom: 0 !important; }\n\n.line-input ion-item {\n    --border-color: transparent!important;\n    --highlight-height: 0;\n    border: 1px solid #cccccc;\n    border-radius: 50px; }\n\n.line-input ion-item.item-has-focus {\n      border: 1px solid var(--ion-color-primary); }\n\n.line-input ion-item ion-label {\n      color: #cccccc !important;\n      font-size: 14px !important; }\n\n.line-input ion-item ion-input {\n      --placeholder-color: #757575 !important; }\n\n.footertext {\n  color: #cccccc !important;\n  font-size: 14px !important;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FsY3VsYXRvci9DOlxcVXNlcnNcXEhhcmlzaFxcTG9jYWxfZGV2XFxHeW1tYXRlQXBwL3NyY1xcYXBwXFxwYWdlc1xcY2FsY3VsYXRvclxcY2FsY3VsYXRvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLFdBQVc7RUFDWCwwQ0FBMEM7RUFDMUMsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksY0FBYztFQUNkLFlBQVk7RUFDWixTQUFTLEVBQUE7O0FBR2I7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksY0FBYztFQUNkLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLDJCQUEwQixFQUFBOztBQUQ5QjtJQUdRLHFDQUFlO0lBQ2YscUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixtQkFBbUIsRUFBQTs7QUFOM0I7TUFTWSwwQ0FBMEMsRUFBQTs7QUFUdEQ7TUFhWSx5QkFBd0I7TUFDeEIsMEJBQXlCLEVBQUE7O0FBZHJDO01Ba0JZLHVDQUFvQixFQUFBOztBQVFoQztFQUNJLHlCQUF3QjtFQUN4QiwwQkFBeUI7RUFDekIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYWxjdWxhdG9yL2NhbGN1bGF0b3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWR7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1yb3d7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jb2wxe1xyXG4gICAgaGVpZ2h0OiA1NSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jb2wye1xyXG4gICAgaGVpZ2h0OiA0NSU7XHJcbn1cclxuXHJcbi5pbWFnZXtcclxuICAgIG1heC13aWR0aDogMTIwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMjIlO1xyXG59XHJcblxyXG4ubmFtZXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uY2lyY2xle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtNzBweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTY3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICB6LWluZGV4OiA5O1xyXG59XHJcblxyXG4uY2lyY2xlIHB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNpcmNsZSAubnVtYmVye1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbn1cclxuXHJcbi5jaXJjbGUgLnRleHR7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmlucHV0c3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbn1cclxuXHJcbi5saW5lLWlucHV0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAhaW1wb3J0YW50O1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuXHJcbiAgICAgICAgJi5pdGVtLWhhcy1mb2N1cyB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjY2NjY2NjIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4IWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1pbnB1dHtcclxuICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzc1NzU3NSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4uZm9vdGVydGV4dHtcclxuICAgIGNvbG9yOiAjY2NjY2NjIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTRweCFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");



var CalculatorPage = /** @class */ (function () {
    function CalculatorPage() {
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
        this.resultNumber = '00.0';
        this.resultText = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST131;
        this.icon = './assets/images/normal.png';
        this.color = 'var(--ion-color-primary)';
    }
    CalculatorPage.prototype.ngOnInit = function () {
    };
    CalculatorPage.prototype.MetricCalculate = function () {
        var height = this.height;
        var weight = this.weight;
        if (Number(height) && Number(weight)) {
            var imc = ((weight / height / height) * 10000);
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
    };
    CalculatorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calculator',
            template: __webpack_require__(/*! raw-loader!./calculator.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/calculator/calculator.page.html"),
            styles: [__webpack_require__(/*! ./calculator.page.scss */ "./src/app/pages/calculator/calculator.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CalculatorPage);
    return CalculatorPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-calculator-calculator-module-es5.js.map