(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-editprofile-editprofile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/editprofile/editprofile.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/editprofile/editprofile.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\r\n  <ion-toolbar mode=\"ios\" class=\"ion-color\" [style.background-color]=\"customColor\">\r\n    <ion-title class=\"ion-text-capitalize\">\r\n      Edit Profile\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-icon name=\"arrow-back\" [routerLink]=\"['/tabs/tab5']\" color=\"primary\" class=\"arrow-back\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button  slot=\"start\" [routerLink]=\"['/tabs/tab1']\">\r\n        <img src=\"./assets/images/close.png\" class=\"close-img\"/> \r\n        </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-no-padding\">\r\n\r\n\r\n  <ion-grid class=\"ion-no-padding\">\r\n    <ion-row class=\"header-bg\" >\r\n      <div class=\"text\">\r\n          <img src= {{url}} class=\"author-img\"/>\r\n       <!--<img src=\"./assets/images/avatar.png\" class=\"author-img\"/>\r\n              <p class=\"author-info\">Edit</p>\r\n\r\n      --> \r\n        <label>\r\n          <input (change)=\"uploadImage($event)\" type=\"file\" class=\"image-upload\" accept=\"image/*\">\r\n        </label>\r\n      </div>\r\n    </ion-row> \r\n    <ion-row  >\r\n  <div class=\"hero-image\">\r\n \r\n  <div  class=\"container bg-text\" >\r\n    <div style=\"margin:0 auto;width:90%\">\r\n        <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\r\n          <div class=\"alert alert-danger\" *ngIf=\"serverError\">\r\n            {{ serverMessage }}\r\n          </div>\r\n          <p class=\"info-required\">Name</p>\r\n          <div class=\"form-group\">\r\n            <input required [(ngModel)] =\"profile.name\" name=\"name\" #name=\"ngModel\" id=\"name\" type=\"text\"\r\n              class=\"form-control form-rounded \" rows=\"20\"\r\n              placeholder=\"Name\">\r\n            <div class=\"alert alert-danger\" *ngIf=\"name.touched && !name.valid\">\r\n              <div *ngIf=\"name.errors.required\" class=\"required\">\r\n                Name Required\r\n              </div>\r\n              <div *ngIf=\"name.errors.pattern\" class=\"required2\">\r\n                Enter a Valid Name\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <p class=\"info-required\">Age</p>\r\n          <div class=\"form-group\">\r\n            <input required  [(ngModel)] =\"profile.age\" name=\"age\" #age=\"ngModel\" id=\"age\" type=\"number\"\r\n              class=\"form-control form-rounded\" rows=\"20\" placeholder=\"Age\">\r\n             <div class=\"alert alert-danger\" *ngIf=\"age.touched && !age.valid\">\r\n              <div *ngIf=\"age.errors.required\" class=\"required\">\r\n                Age Required\r\n              </div>\r\n              <div *ngIf=\"age.errors.minlength\" class=\"required2\">\r\n                Enter a Valid Age\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <p class=\"info-required\">Gender</p>\r\n          <div class=\"form-group\">\r\n            <input required [(ngModel)] =\"profile.gender\" name=\"gender\" #gender=\"ngModel\" id=\"gender\" type=\"text\"\r\n               class=\"form-control form-rounded \" rows=\"20\"\r\n              placeholder=\"Gender\">\r\n            <div class=\"alert alert-danger\" *ngIf=\"gender.touched && !gender.valid\">\r\n              <div *ngIf=\"gender.errors.required\" class=\"required\">\r\n                Gender Required\r\n              </div>\r\n              <div *ngIf=\"gender.errors.pattern\" class=\"required2\">\r\n                Enter a Valid gender\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <p class=\"info-required\">Height</p>\r\n          <div class=\"form-group\">\r\n            <input required [(ngModel)] =\"profile.height\" name=\"Height\" #height=\"ngModel\" id=\"height\" type=\"number\"\r\n               class=\"form-control form-rounded \" rows=\"20\"\r\n              placeholder=\"Height\">\r\n            <div class=\"alert alert-danger\" *ngIf=\"height.touched && !height.valid\">\r\n              <div *ngIf=\"height.errors.required\" class=\"required\">\r\n                Height Required\r\n              </div>\r\n              <div *ngIf=\"height.errors.pattern\" class=\"required2\">\r\n                Enter a valid height\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <p class=\"info-required\">Weight</p>\r\n          <div class=\"form-group\">\r\n            <input required [(ngModel)] =\"profile.weight\" name=\"Weight\" #weight=\"ngModel\" id=\"weight\" type=\"number\"\r\n               class=\"form-control form-rounded \" rows=\"20\"\r\n              placeholder=\"Weight\">\r\n            <div class=\"alert alert-danger\" *ngIf=\"weight.touched && !weight.valid\">\r\n              <div *ngIf=\"weight.errors.required\" class=\"required\">\r\n                Weight Required\r\n              </div>\r\n              <div *ngIf=\"weight.errors.pattern\" class=\"required2\">\r\n                Enter a Valid weight\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group text-center submit\">\r\n            <button class=\"btn btn-primary btn-block\" [disabled]=\"!f.valid\">Save</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n \r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n    </ion-row>\r\n  </ion-grid>\r\n  \r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/editprofile/editprofile-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/editprofile/editprofile-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: EditprofilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofilePageRoutingModule", function() { return EditprofilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _editprofile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editprofile.page */ "./src/app/pages/editprofile/editprofile.page.ts");




var routes = [
    {
        path: '',
        component: _editprofile_page__WEBPACK_IMPORTED_MODULE_3__["EditprofilePage"]
    }
];
var EditprofilePageRoutingModule = /** @class */ (function () {
    function EditprofilePageRoutingModule() {
    }
    EditprofilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EditprofilePageRoutingModule);
    return EditprofilePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/editprofile/editprofile.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/editprofile/editprofile.module.ts ***!
  \*********************************************************/
/*! exports provided: EditprofilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofilePageModule", function() { return EditprofilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _editprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editprofile-routing.module */ "./src/app/pages/editprofile/editprofile-routing.module.ts");
/* harmony import */ var _editprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editprofile.page */ "./src/app/pages/editprofile/editprofile.page.ts");







var EditprofilePageModule = /** @class */ (function () {
    function EditprofilePageModule() {
    }
    EditprofilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _editprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditprofilePageRoutingModule"]
            ],
            declarations: [_editprofile_page__WEBPACK_IMPORTED_MODULE_6__["EditprofilePage"]]
        })
    ], EditprofilePageModule);
    return EditprofilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/editprofile/editprofile.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/editprofile/editprofile.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-bg {\n  background-color: #191919;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.header-bg .text {\n  color: #fff;\n  text-align: center; }\n\n.header-bg .name {\n  color: var(--ion-color-primary);\n  text-align: center;\n  margin-bottom: 9px;\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 16px; }\n\n.header-bg .since {\n  color: #fff;\n  margin-top: 5px;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px; }\n\n.tags {\n  background-color: #f9f9f9;\n  border-left: 3px solid var(--ion-color-primary);\n  padding: 15px;\n  position: relative;\n  margin-bottom: 10px; }\n\n.tags h1 {\n  font-size: 13px;\n  text-transform: uppercase;\n  font-weight: bold;\n  margin: 0; }\n\n.tags ion-icon {\n  position: absolute;\n  right: 14px;\n  top: 11px;\n  font-size: 22px; }\n\n.view-more {\n  width: 100%;\n  color: #f7474f;\n  font-family: Proxima-bold;\n  font-size: 16px !important;\n  line-height: 16px;\n  text-transform: none !important;\n  text-align: right !important; }\n\nion-header {\n  background-color: #191919;\n  height: 100%;\n  padding: 10px 4px 0px 4px !important;\n  height: auto; }\n\n.ion-text-capitalize {\n  width: 100%;\n  color: #eafff7;\n  font-family: Proxima-bold;\n  font-size: 32px !important;\n  line-height: 32px;\n  text-transform: none !important;\n  text-align: left;\n  padding: 0; }\n\nion-button {\n  margin-right: -5px !important; }\n\n.text {\n  width: 90%;\n  margin: 0 auto;\n  border-radius: 5px;\n  padding: 20px 0px 20px 0; }\n\n.author-img {\n  max-width: 80px;\n  max-height: 80px;\n  border-radius: 50%; }\n\n.pro {\n  height: 100%;\n  display: block;\n  margin-right: auto; }\n\n.sc-ion-buttons-ios-s ion-button {\n  --padding-start: 0px !important;\n  --padding-end: 0px !important;\n  padding: 0px !important;\n  margin: 0px;\n  --margin: 0px;\n  width: 100%; }\n\n.author-info {\n  font-family: 'Proxima-bold';\n  font-family: 14px;\n  line-height: 16px;\n  margin: 5px 0;\n  color: #f7474f; }\n\nion-content, .edit {\n  background: #191919; }\n\n.edit .sc-ion-buttons-ios-h {\n  width: 90%;\n  margin: 0 auto; }\n\n.ion-text-capitalize {\n  width: 100%;\n  color: #f7474f;\n  font-family: Proxima-bold;\n  font-size: 20px !important;\n  text-transform: none !important;\n  text-align: center; }\n\np {\n  color: #ffffff;\n  margin: 5px 0;\n  font-size: 16px;\n  line-height: normal;\n  letter-spacing: normal;\n  font-family: 'Muli-light'; }\n\n.body-info {\n  position: absolute;\n  top: 20px; }\n\nion-item {\n  --background-focused: #fff !important;\n  --background-activated: #fff !important;\n  --detail-icon-color: var(--ion-color-primary);\n  --detail-icon-opacity: 1;\n  --detail-icon-transform: rotate(90deg) !important; }\n\n.body-info p, .exer-info p {\n  font-size: 14px;\n  color: #979797;\n  line-height: 16px;\n  font-family: 'Nunito-light'; }\n\nion-content, .hero-image {\n  background: #191919;\n  width: 100%;\n  height: auto;\n  padding-bottom: 40px;\n  padding-top: 10px; }\n\n.form-group input, .form-group, form {\n  width: 100% !important; }\n\n.form-group {\n  margin-bottom: 20px; }\n\n.form-group input {\n  background-color: #313235;\n  border-radius: 5px;\n  padding: 10px;\n  color: #fafafa;\n  border: none; }\n\n.info-required {\n  font-family: 'Proxima-regular';\n  font-size: 14px;\n  line-height: 15px;\n  color: #aeabab; }\n\nbutton {\n  background: #f7474f !important;\n  width: 90% !important;\n  color: #ffffff !important;\n  border-radius: 40px !important;\n  margin: 0 auto !important;\n  display: block;\n  padding: 20px 0;\n  font-family: 'Proxima-regular';\n  font-size: 20px;\n  line-height: 22px; }\n\n.submit {\n  margin-top: 50px !important; }\n\n.close-img {\n  max-width: 16px;\n  max-height: 16px;\n  margin: 0 8px; }\n\n.arrow-back {\n  font-size: 22px;\n  padding: 0 8px; }\n\n.required, .required2 {\n  font-family: 'Proxima-regular';\n  font-size: 14px;\n  line-height: 15px;\n  color: #f7474f;\n  padding: 10px 0 0 0px; }\n\n.required2 {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdHByb2ZpbGUvQzpcXFVzZXJzXFxIYXJpc2hcXExvY2FsX2RldlxcR3ltbWF0ZUFwcC9zcmNcXGFwcFxccGFnZXNcXGVkaXRwcm9maWxlXFxlZGl0cHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZUFBZSxFQUFBOztBQUduQjtFQUNJLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixlQUFlLEVBQUE7O0FBR25CO0VBQ0kseUJBQXlCO0VBQ3pCLCtDQUErQztFQUMvQyxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFNBQVEsRUFBQTs7QUFHWjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxXQUFXO0VBQ1gsY0FBYztFQUNkLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLCtCQUErQjtFQUMvQiw0QkFBNEIsRUFBQTs7QUFHaEM7RUFDSSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxZQUFhLEVBQUE7O0FBR2pCO0VBQ0ksV0FBVztFQUNYLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQiwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLFVBQVUsRUFBQTs7QUFJZDtFQUNJLDZCQUE2QixFQUFBOztBQUdqQztFQUNJLFVBQVU7RUFDVixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHdCQUF3QixFQUFBOztBQUc1QjtFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSwrQkFBZ0I7RUFDaEIsNkJBQWM7RUFDZCx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGFBQVM7RUFDVCxXQUFXLEVBQUE7O0FBSWY7RUFDSSwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsY0FBYyxFQUFBOztBQUdsQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFVBQVU7RUFDVixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksV0FBVztFQUNYLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLCtCQUErQjtFQUMvQixrQkFBa0IsRUFBQTs7QUFHckI7RUFDSSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGtCQUFrQjtFQUNsQixTQUFTLEVBQUE7O0FBR2I7RUFDRyxxQ0FBcUI7RUFDckIsdUNBQXVCO0VBQ3ZCLDZDQUFvQjtFQUNwQix3QkFBc0I7RUFDdEIsaURBQXdCLEVBQUE7O0FBRzNCO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsMkJBQTJCLEVBQUE7O0FBSS9CO0VBQ0csbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksOEJBQThCO0VBQzlCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUdsQjtFQUNJLDhCQUE4QjtFQUM5QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYSxFQUFBOztBQUdqQjtFQUNJLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBR2xCO0VBQ0UsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHFCQUFxQixFQUFBOztBQUd2QjtFQUNJLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXRwcm9maWxlL2VkaXRwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItYmd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlci1iZyAudGV4dHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlci1iZyAubmFtZXtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA5cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXItYmcgLnNpbmNle1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgLnRhZ3N7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWdzIGgxe1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBtYXJnaW46MDtcclxuICB9XHJcbiAgXHJcbiAgLnRhZ3MgaW9uLWljb257XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDE0cHg7XHJcbiAgICAgIHRvcDogMTFweDtcclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxuICBcclxuICAudmlldy1tb3Jle1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgY29sb3I6ICNmNzQ3NGY7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBQcm94aW1hLWJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWhlYWRlcntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojMTkxOTE5IDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDRweCAwcHggNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogYXV0byA7XHJcbiAgfVxyXG4gIFxyXG4gIC5pb24tdGV4dC1jYXBpdGFsaXple1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgY29sb3I6ICNlYWZmZjc7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBQcm94aW1hLWJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzJweCAhaW1wb3J0YW50O1xyXG4gICAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgfVxyXG4gIFxyXG4gIFxyXG4gIGlvbi1idXR0b257XHJcbiAgICAgIG1hcmdpbi1yaWdodDogLTVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAudGV4dHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgcGFkZGluZzogMjBweCAwcHggMjBweCAwO1xyXG4gIH1cclxuICBcclxuICAuYXV0aG9yLWltZ3tcclxuICAgICAgbWF4LXdpZHRoOiA4MHB4O1xyXG4gICAgICBtYXgtaGVpZ2h0OiA4MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm97XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLnNjLWlvbi1idXR0b25zLWlvcy1zIGlvbi1idXR0b24ge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAtLW1hcmdpbjogMHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmF1dGhvci1pbmZve1xyXG4gICAgICBmb250LWZhbWlseTogJ1Byb3hpbWEtYm9sZCc7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAxNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgY29sb3I6ICNmNzQ3NGY7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jb250ZW50LCAuZWRpdHtcclxuICAgICAgYmFja2dyb3VuZDogIzE5MTkxOTtcclxuICB9XHJcbiAgXHJcbiAgLmVkaXQgLnNjLWlvbi1idXR0b25zLWlvcy1oe1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmlvbi10ZXh0LWNhcGl0YWxpemV7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBjb2xvcjogI2Y3NDc0ZjtcclxuICAgICAgZm9udC1mYW1pbHk6IFByb3hpbWEtYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfSAgIFxyXG4gIFxyXG4gICBwe1xyXG4gICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgICBmb250LWZhbWlseTogJ011bGktbGlnaHQnO1xyXG4gICB9XHJcbiAgXHJcbiAgIC5ib2R5LWluZm97XHJcbiAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICB0b3A6IDIwcHg7XHJcbiAgIH1cclxuICBcclxuICAgaW9uLWl0ZW0ge1xyXG4gICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgIC0tZGV0YWlsLWljb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgLS1kZXRhaWwtaWNvbi1vcGFjaXR5OiAxO1xyXG4gICAgICAtLWRldGFpbC1pY29uLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAgLmJvZHktaW5mbyBwLCAuZXhlci1pbmZvIHB7XHJcbiAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICBjb2xvcjogIzk3OTc5NztcclxuICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8tbGlnaHQnO1xyXG4gIFxyXG4gICB9XHJcbiAgXHJcbiAgIGlvbi1jb250ZW50LCAuaGVyby1pbWFnZXtcclxuICAgICAgYmFja2dyb3VuZDogIzE5MTkxOTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1ncm91cCBpbnB1dCwgLmZvcm0tZ3JvdXAsIGZvcm17XHJcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWdyb3Vwe1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1ncm91cCBpbnB1dHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMxMzIzNTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBjb2xvcjogI2ZhZmFmYTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuaW5mby1yZXF1aXJlZHtcclxuICAgICAgZm9udC1mYW1pbHk6ICdQcm94aW1hLXJlZ3VsYXInO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICBjb2xvcjogI2FlYWJhYjtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9ue1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjc0NzRmICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICBmb250LWZhbWlseTogJ1Byb3hpbWEtcmVndWxhcic7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdWJtaXR7XHJcbiAgICAgIG1hcmdpbi10b3A6IDUwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jbG9zZS1pbWd7XHJcbiAgICAgIG1heC13aWR0aDogMTZweDtcclxuICAgICAgbWF4LWhlaWdodDogMTZweDtcclxuICAgICAgbWFyZ2luOiAwIDhweDtcclxuICB9XHJcblxyXG4gIC5hcnJvdy1iYWNre1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIHBhZGRpbmc6IDAgOHB4O1xyXG4gIH1cclxuXHJcbiAgLnJlcXVpcmVkLCAucmVxdWlyZWQye1xyXG4gICAgZm9udC1mYW1pbHk6ICdQcm94aW1hLXJlZ3VsYXInO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBjb2xvcjogI2Y3NDc0ZjtcclxuICAgIHBhZGRpbmc6IDEwcHggMCAwIDBweDtcclxuICB9XHJcblxyXG4gIC5yZXF1aXJlZDJ7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/editprofile/editprofile.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/editprofile/editprofile.page.ts ***!
  \*******************************************************/
/*! exports provided: EditprofilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofilePage", function() { return EditprofilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");







var EditprofilePage = /** @class */ (function () {
    function EditprofilePage(dataService, router, navCtrl, afs, storage) {
        this.dataService = dataService;
        this.router = router;
        this.navCtrl = navCtrl;
        this.afs = afs;
        this.storage = storage;
        this.profile = { name: '', age: '', gender: '', height: '', weight: '' };
        this.url = "";
        this.newImage = {
            id: this.afs.createId(), image: ''
        };
        this.loading = false;
    }
    EditprofilePage.prototype.ngOnInit = function () {
    };
    EditprofilePage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.getdata();
                return [2 /*return*/];
            });
        });
    };
    EditprofilePage.prototype.getdata = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var det, iurl;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataService.getData()];
                    case 1:
                        det = _a.sent();
                        return [4 /*yield*/, this.dataService.getprofileImage()];
                    case 2:
                        iurl = _a.sent();
                        this.url = iurl.url;
                        this.profile.name = det.name;
                        this.profile.age = det.age;
                        this.profile.gender = det.gender;
                        this.profile.height = det.height;
                        this.profile.weight = det.weight;
                        return [2 /*return*/];
                }
            });
        });
    };
    EditprofilePage.prototype.onSubmit = function (f) {
        var _this = this;
        console.log(f.value.name, f.value.age, f.value.gender, f.value.Height, f.value.Weight);
        this.dataService.profileData(f.value.name, f.value.age, f.value.gender, f.value.Height, f.value.Weight)
            .then(function (res) {
            f.reset();
            _this.navCtrl.navigateBack('/profile');
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    EditprofilePage.prototype.uploadImage = function (event) {
        var _this = this;
        this.loading = true;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            // For Preview Of Image
            reader.onload = function (e) {
                _this.url = e.target.result;
                // For Uploading Image To Firebase
                var fileraw = event.target.files[0];
                console.log(fileraw);
                var filePath = '/Image/' + _this.newImage.id + '/' + 'Image' + (Math.floor(1000 + Math.random() * 9000) + 1);
                var result = _this.SaveImageRef(filePath, fileraw);
                var ref = result.ref;
                result.task.then(function (a) {
                    ref.getDownloadURL().subscribe(function (a) {
                        console.log(a);
                        _this.newImage.image = a;
                        _this.loading = false;
                        _this.dataService.profileImage(a);
                    });
                    //  this.afs.collection('Image').doc(this.newImage.id).set(this.newImage);
                });
            }, function (error) {
                alert("Error");
            };
        }
    };
    EditprofilePage.prototype.SaveImageRef = function (filePath, file) {
        return {
            task: this.storage.upload(filePath, file),
            ref: this.storage.ref(filePath)
        };
    };
    EditprofilePage.ctorParameters = function () { return [
        { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"] }
    ]; };
    EditprofilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editprofile',
            template: __webpack_require__(/*! raw-loader!./editprofile.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/editprofile/editprofile.page.html"),
            styles: [__webpack_require__(/*! ./editprofile.page.scss */ "./src/app/pages/editprofile/editprofile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"]])
    ], EditprofilePage);
    return EditprofilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-editprofile-editprofile-module-es5.js.map