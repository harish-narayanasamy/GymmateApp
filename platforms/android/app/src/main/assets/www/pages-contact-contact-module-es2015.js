(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contact-contact-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/contact/contact.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/contact/contact.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"darkheader\" mode=\"ios\" no-border>\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-title class=\"ion-text-capitalize\">\r\n      {{strings.ST73}}\r\n    </ion-title>\r\n      <ion-buttons slot=\"start\">\r\n        <app-backbutton color=\"light\"></app-backbutton>\r\n      </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-no-padding\">\r\n\r\n  <ion-grid class=\"ion-no-padding\">\r\n    <ion-row class=\"header-bg\" [ngStyle]=\"{'height': innerHeight}\">\r\n      <div class=\"text\">\r\n        <ion-icon name=\"mail\" mode=\"md\" color=\"primary\"></ion-icon>\r\n      <p class=\"title\">{{strings.ST77}}</p>\r\n      <p class=\"subtitle\">{{strings.ST76}}</p>\r\n    </div>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n  <form class=\"form\" autocomplete=\"off\" [formGroup]=\"validationsform\" (ngSubmit)=\"sentMessage(validationsform.value)\">\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">{{strings.ST78}}</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"name\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">{{strings.ST79}}</ion-label>\r\n      <ion-input type=\"email\" formControlName=\"email\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">{{strings.ST80}}</ion-label>\r\n      <ion-textarea formControlName=\"message\"></ion-textarea>\r\n    </ion-item>\r\n\r\n    <ion-button color=\"primary\" type=\"submit\" [disabled]=\"!validationsform.valid\" expand=\"block\" mode=\"ios\">\r\n      {{strings.ST81}}\r\n    </ion-button>\r\n\r\n  </form>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/contact/contact-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/contact/contact-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ContactPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageRoutingModule", function() { return ContactPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.page */ "./src/app/pages/contact/contact.page.ts");




const routes = [
    {
        path: '',
        component: _contact_page__WEBPACK_IMPORTED_MODULE_3__["ContactPage"]
    }
];
let ContactPageRoutingModule = class ContactPageRoutingModule {
};
ContactPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/contact/contact.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/contact/contact.module.ts ***!
  \*************************************************/
/*! exports provided: ContactPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-routing.module */ "./src/app/pages/contact/contact-routing.module.ts");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact.page */ "./src/app/pages/contact/contact.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let ContactPageModule = class ContactPageModule {
};
ContactPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _contact_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactPageRoutingModule"]
        ],
        declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_6__["ContactPage"]]
    })
], ContactPageModule);



/***/ }),

/***/ "./src/app/pages/contact/contact.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/contact/contact.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-bg {\n  background-image: url('header.jpg');\n  background-position: center;\n  background-size: cover;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.header-bg .text {\n  color: #fff;\n  text-align: center; }\n\n.header-bg .title {\n  color: #fff;\n  text-align: center;\n  margin-bottom: 9px;\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 16px; }\n\n.header-bg .subtitle {\n  color: #fff;\n  margin-top: 5px;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px; }\n\nion-icon {\n  font-size: 42px; }\n\nion-item {\n  --padding-start: 0;\n  --border-color: #e2e2e2;\n  --background-activated: white;\n  --background-focused: white;\n  --background-hover: white;\n  margin-bottom: 10px; }\n\nion-label {\n  text-transform: uppercase;\n  font-weight: bold; }\n\nion-button {\n  text-transform: uppercase;\n  margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC9DOlxcVXNlcnNcXEhhcmlzaFxcTG9jYWxfZGV2XFxHeW1tYXRlQXBwL3NyY1xcYXBwXFxwYWdlc1xcY29udGFjdFxcY29udGFjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQ0FBMEQ7RUFDMUQsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksa0JBQWdCO0VBQ2hCLHVCQUFlO0VBQ2YsNkJBQXVCO0VBQ3ZCLDJCQUFxQjtFQUNyQix5QkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0kseUJBQXlCO0VBQ3pCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLHlCQUF5QjtFQUN6QixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWJne1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2hlYWRlci5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItYmcgLnRleHR7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlci1iZyAudGl0bGV7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmhlYWRlci1iZyAuc3VidGl0bGV7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNDJweDsgLy9QcmVmZXJyZWQgc2l6ZSBoZXJlXHJcbn1cclxuXHJcbmlvbi1pdGVte1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICNlMmUyZTI7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB3aGl0ZTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB3aGl0ZTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5pb24tbGFiZWx7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlvbi1idXR0b257XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/contact/contact.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/contact/contact.page.ts ***!
  \***********************************************/
/*! exports provided: ContactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPage", function() { return ContactPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");







let ContactPage = class ContactPage {
    constructor(plt, formBuilder, loadingController, navCtrl, http) {
        this.plt = plt;
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.http = http;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            })
        };
    }
    ngOnInit() {
        this.innerHeight = this.plt.height() / 2.5 + 'px';
        this.validationsform = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            ])),
        });
    }
    presentAlert(value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: null,
                duration: 2000,
                message: value,
                mode: 'ios'
            });
            yield loading.present();
        });
    }
    backButton() {
        const animations = {
            animated: true,
            animationDirection: 'back'
        };
        this.navCtrl.back(animations);
    }
    sentMessage(value) {
        const messageData = {
            name: value.name,
            email: value.email,
            message: value.message
        };
        this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_5__["config"].Url + '/controller/contactform.php', messageData, this.httpOptions)
            .subscribe(data => {
            if (data === 'false') {
                this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST32);
            }
            else {
                this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST74);
                this.backButton();
            }
        }, error => {
            console.log(error);
        });
    }
};
ContactPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
ContactPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(/*! raw-loader!./contact.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/contact/contact.page.html"),
        styles: [__webpack_require__(/*! ./contact.page.scss */ "./src/app/pages/contact/contact.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
], ContactPage);



/***/ })

}]);
//# sourceMappingURL=pages-contact-contact-module-es2015.js.map