(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-about-about-module~pages-aboutus-aboutus-module~pages-bmiinfo-bmiinfo-module~pages-bod~9dbe5797"],{

/***/ "./node_modules/ionic4-star-rating/dist/components/ionic4-star-rating-component.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/ionic4-star-rating/dist/components/ionic4-star-rating-component.js ***!
  \*****************************************************************************************/
/*! exports provided: StarRating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRating", function() { return StarRating; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HTML_TEMPLATE = "\n<div class=\"ionic4-star-rating\">\n  <button [ngStyle]=\"{'width' : fontSize, 'height' : fontSize}\" *ngFor=\"let index of iconsArray\" id=\"{{index}}\" type=\"button\" ion-button icon-only (click)=\"changeRating($event)\">\n    <ion-icon [ngStyle]=\"{'color':index < this.Math.round(this.parseFloat(rating)) ? activeColor : defaultColor, 'font-size' : fontSize }\" name=\"{{(halfStar ==='true' && (rating - index > 0) && (rating - index <= 0.5)) ? halfIcon : (index < this.Math.round(this.parseFloat(rating))) ? activeIcon : defaultIcon}}\"></ion-icon>\n  </button>\n</div>\n";
var CSS_STYLE = "\n    .ionic4-star-rating button {\n        background: none;\n        box-shadow: none;\n        -webkit-box-shadow: none;\n        padding : 0px;\n    }\n";
var StarRating = /** @class */ (function () {
    function StarRating(events) {
        this.events = events;
        this.eventInfo = (function () {
            var id = new Date().getTime();
            var topic = "star-rating:" + id + ":changed";
            return {
                topic: topic
            };
        })();
        this.ratingChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.readonly = "false";
        this.activeColor = '#488aff';
        this.defaultColor = '#aaaaaa';
        this.activeIcon = 'ios-star';
        this.defaultIcon = 'ios-star-outline';
        this.halfIcon = 'ios-star-half';
        this.halfStar = "false";
        this.maxRating = 5;
        this.fontSize = '28px';
        this.iconsArray = [];
        this.Math = Math;
        this.parseFloat = parseFloat;
    }
    StarRating_1 = StarRating;
    StarRating.prototype.ngOnInit = function () {
        this.rating = this.rating || 3; //default after input`s initialization
        for (var i = 0; i < this.maxRating; i++) {
            this.iconsArray.push(i);
        }
    };
    StarRating.prototype.writeValue = function (obj) {
        this.rating = obj;
    };
    StarRating.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    StarRating.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    StarRating.prototype.setDisabledState = function (isDisabled) {
        this.readonly = isDisabled ? "true" : "false";
    };
    Object.defineProperty(StarRating.prototype, "rating", {
        get: function () {
            return this._rating;
        },
        set: function (val) {
            this._rating = val;
            // for form
            if (this.onChange) {
                this.onChange(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    StarRating.prototype.changeRating = function (event) {
        if (this.readonly && this.readonly === "true")
            return;
        // event is different for firefox and chrome
        var id = event.target.id ? parseInt(event.target.id) : parseInt(event.target.parentElement.id);
        if (this.halfStar && this.halfStar === "true") {
            this.rating = ((this.rating - id > 0) && (this.rating - id <= 0.5)) ? id + 1 : id + .5;
        }
        else {
            this.rating = id + 1;
        }
        // subscribe this event to get the changed value in your parent compoanent 
        this.events.publish("star-rating:changed", this.rating); //common event for all instances included for backwards compatibility
        this.events.publish(this.eventInfo.topic, this.rating); //common event for all instances
        // unique event
        this.ratingChanged.emit(this.rating);
    };
    var StarRating_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], StarRating.prototype, "rating", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], StarRating.prototype, "ratingChanged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StarRating.prototype, "readonly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StarRating.prototype, "activeColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StarRating.prototype, "defaultColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StarRating.prototype, "activeIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StarRating.prototype, "defaultIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StarRating.prototype, "halfIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StarRating.prototype, "halfStar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], StarRating.prototype, "maxRating", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StarRating.prototype, "fontSize", void 0);
    StarRating = StarRating_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ionic4-star-rating',
            template: HTML_TEMPLATE,
            styles: [CSS_STYLE],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: StarRating_1,
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"]])
    ], StarRating);
    return StarRating;
}());

//# sourceMappingURL=ionic4-star-rating-component.js.map

/***/ }),

/***/ "./node_modules/ionic4-star-rating/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/ionic4-star-rating/dist/index.js ***!
  \*******************************************************/
/*! exports provided: StarRatingModule, StarRating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ionic4_star_rating_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ionic4-star-rating.module */ "./node_modules/ionic4-star-rating/dist/ionic4-star-rating.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StarRatingModule", function() { return _ionic4_star_rating_module__WEBPACK_IMPORTED_MODULE_0__["StarRatingModule"]; });

/* harmony import */ var _components_ionic4_star_rating_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ionic4-star-rating-component */ "./node_modules/ionic4-star-rating/dist/components/ionic4-star-rating-component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StarRating", function() { return _components_ionic4_star_rating_component__WEBPACK_IMPORTED_MODULE_1__["StarRating"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ionic4-star-rating/dist/ionic4-star-rating.module.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ionic4-star-rating/dist/ionic4-star-rating.module.js ***!
  \***************************************************************************/
/*! exports provided: StarRatingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingModule", function() { return StarRatingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_ionic4_star_rating_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ionic4-star-rating-component */ "./node_modules/ionic4-star-rating/dist/components/ionic4-star-rating-component.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StarRatingModule = /** @class */ (function () {
    function StarRatingModule() {
    }
    StarRatingModule_1 = StarRatingModule;
    StarRatingModule.forRoot = function () {
        return {
            ngModule: StarRatingModule_1,
        };
    };
    var StarRatingModule_1;
    StarRatingModule = StarRatingModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
            declarations: [
                _components_ionic4_star_rating_component__WEBPACK_IMPORTED_MODULE_1__["StarRating"]
            ],
            exports: [
                _components_ionic4_star_rating_component__WEBPACK_IMPORTED_MODULE_1__["StarRating"]
            ]
        })
    ], StarRatingModule);
    return StarRatingModule;
}());

//# sourceMappingURL=ionic4-star-rating.module.js.map

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/addcomment/addcomment.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/addcomment/addcomment.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\r\n    <ion-toolbar mode=\"ios\">\r\n        <ion-title class=\"ion-text-capitalize\">\r\n          {{strings.ST83}}\r\n        </ion-title>\r\n              <ion-buttons slot=\"start\">\r\n                  <ion-button (click)=\"close()\" slot=\"start\">\r\n                      <ion-icon color=\"dark\" mode=\"md\" name=\"md-arrow-back\"></ion-icon>\r\n                    </ion-button>\r\n              </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content class=\"ion-padding\">\r\n\r\n      <form [formGroup]=\"validationsform\" (ngSubmit)=\"tryAddComment(validationsform.value)\">\r\n\r\n          <ionic4-star-rating #rating \r\n          activeIcon = \"ios-star\"\r\n          defaultIcon = \"ios-star\"\r\n          activeColor = \"#f1c40f\" \r\n          defaultColor = \"rgba(0, 0, 0, 0.2)\"\r\n          readonly = \"false\"\r\n          fontSize = \"32px\"\r\n          formControlName=\"rating\">\r\n          </ionic4-star-rating>\r\n      \r\n          <div class=\"line-input\">\r\n            <ion-item mode=\"ios\">\r\n            <ion-textarea rows=\"4\" formControlName=\"comment\" [placeholder]=\"strings.ST85\" mode=\"ios\"></ion-textarea>\r\n            </ion-item>\r\n          </div>\r\n\r\n          <ion-button color=\"primary\" type=\"submit\" [disabled]=\"!validationsform.valid\" expand=\"block\" mode=\"ios\">\r\n            {{strings.ST110}}\r\n          </ion-button>\r\n\r\n        </form>\r\n\r\n  </ion-content>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/backbutton/backbutton.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/backbutton/backbutton.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-button (click)=\"backButton()\" slot=\"start\" mode=\"md\" >\r\n  <ion-icon [color]=\"color\" mode=\"md\" name=\"md-arrow-back\"></ion-icon>\r\n</ion-button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dietsfav/dietsfav.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dietsfav/dietsfav.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"diets.length > 0\">\r\n  <ion-list lines=\"none\">\r\n    <ion-item *ngFor=\"let item of diets\" detail=\"false\">\r\n        <ion-thumbnail slot=\"start\" [routerLink]=\"['/ddetails', item.id]\">\r\n            <ion-img [src]=\"item.image | image\"></ion-img>\r\n          </ion-thumbnail>\r\n      <ion-label [routerLink]=\"['/ddetails', item.id]\">{{item.title}}</ion-label>\r\n      <ion-icon (click)=\"removeFromFavorites(item.id)\" name=\"md-close\" mode=\"ios\" slot=\"end\" color=\"light\"></ion-icon>\r\n    </ion-item>\r\n  </ion-list>\r\n  \r\n</div>\r\n\r\n<p *ngIf=\"diets.length === 0\">{{strings.ST67}}</p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/empty/empty.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/empty/empty.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <p>{{title}}</p>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/html/html.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/html/html.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"html\" [innerHTML]=\"htmlcontent\"></div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/loading/loading.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/loading/loading.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div>\r\n    <ion-spinner name=\"crescent\" color=\"primary\"></ion-spinner>\r\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/postcomments/postcomments.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/postcomments/postcomments.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\r\n    <ion-toolbar mode=\"ios\">\r\n        <ion-title class=\"ion-text-capitalize\">\r\n          {{strings.ST84}}\r\n        </ion-title>\r\n              <ion-buttons slot=\"start\">\r\n                  <ion-button (click)=\"close()\" slot=\"start\">\r\n                      <ion-icon color=\"dark\" mode=\"md\" name=\"md-arrow-back\"></ion-icon>\r\n                    </ion-button>\r\n              </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content fixed>\r\n\r\n      <app-loading *ngIf=\"isLoading\"></app-loading>\r\n      \r\n      <app-empty *ngIf=\"postcomments.length === 0\" [title]=\"strings.ST86\"></app-empty>\r\n\r\n    <ion-card class=\"comments\" *ngFor=\"let item of postcomments\" mode=\"ios\">\r\n        <ion-card-header>\r\n            <ion-card-subtitle>\r\n              <app-postrating [value]=\"item.rating\" color=\"rgba(0, 0, 0, 0.2)\" [size]=\"16\"></app-postrating>\r\n              <ion-label>{{item.user}}</ion-label>\r\n            </ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          {{item.comment}}\r\n        </ion-card-content>\r\n        </ion-card>\r\n  \r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/postrating/postrating.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/postrating/postrating.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ionic4-star-rating #rating\r\nactiveIcon = \"ios-star\"\r\ndefaultIcon = \"ios-star\"\r\nactiveColor = \"#f1c40f\" \r\n[defaultColor] = \"color\"\r\nreadonly=\"true\"\r\n[rating]=\"value\"\r\n[fontSize]= \"size + 'px'\">\r\n</ionic4-star-rating>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/postsfav/postsfav.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/postsfav/postsfav.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"posts.length > 0\">\r\n  <ion-list lines=\"none\">\r\n    <ion-item *ngFor=\"let item of posts\" detail=\"false\">\r\n        <ion-thumbnail slot=\"start\" [routerLink]=\"['/pdetails', item.id]\">\r\n            <ion-img [src]=\"item.image | image\"></ion-img>\r\n          </ion-thumbnail>\r\n      <ion-label [routerLink]=\"['/pdetails', item.id]\">{{item.title}}</ion-label>\r\n      <ion-icon (click)=\"removeFromFavorites(item.id)\" name=\"md-close\" mode=\"ios\" slot=\"end\" color=\"light\"></ion-icon>\r\n    </ion-item>\r\n  </ion-list>\r\n  \r\n</div>\r\n\r\n<p *ngIf=\"posts.length === 0\">{{strings.ST67}}</p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/restday/restday.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/restday/restday.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h1>{{strings.ST71}}</h1>\r\n    <p>{{strings.ST72}}</p>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/workoutsfav/workoutsfav.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/workoutsfav/workoutsfav.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"workouts.length > 0\">\r\n  <ion-list lines=\"none\">\r\n    <ion-item *ngFor=\"let item of workouts\" detail=\"false\">\r\n        <ion-thumbnail slot=\"start\" [routerLink]=\"['/wdetails', item.id]\">\r\n            <ion-img [src]=\"item.image | image\"></ion-img>\r\n          </ion-thumbnail>\r\n      <ion-label [routerLink]=\"['/wdetails', item.id]\">{{item.title}}</ion-label>\r\n      <ion-icon (click)=\"removeFromFavorites(item.id)\" name=\"md-close\" mode=\"ios\" slot=\"end\" color=\"light\"></ion-icon>\r\n    </ion-item>\r\n  </ion-list>\r\n  \r\n</div>\r\n\r\n<p *ngIf=\"workouts.length === 0\">{{strings.ST67}}</p>"

/***/ }),

/***/ "./src/app/components/addcomment/addcomment.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/addcomment/addcomment.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".line-input {\n  margin-bottom: 0 !important; }\n  .line-input ion-item {\n    --border-color: transparent!important;\n    --background-activated: white;\n    --background-focused: white;\n    --background-hover: white;\n    --highlight-height: 0;\n    border: 1px solid #cacaca;\n    border-radius: 8px;\n    margin: 24px 2px;\n    font-size: 15px; }\n  .line-input ion-item.item-has-focus {\n      border: 1px solid var(--ion-color-primary); }\n  ion-button {\n  text-transform: uppercase; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGRjb21tZW50L0M6XFxVc2Vyc1xcSGFyaXNoXFxMb2NhbF9kZXZcXEd5bW1hdGVBcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFkZGNvbW1lbnRcXGFkZGNvbW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBMEIsRUFBQTtFQUQ5QjtJQUdRLHFDQUFlO0lBQ2YsNkJBQXVCO0lBQ3ZCLDJCQUFxQjtJQUNyQix5QkFBbUI7SUFDbkIscUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTtFQVh2QjtNQWNZLDBDQUEwQyxFQUFBO0VBS3REO0VBQ0kseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZGNvbW1lbnQvYWRkY29tbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW5lLWlucHV0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAhaW1wb3J0YW50O1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogd2hpdGU7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHdoaXRlO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1ob3Zlcjogd2hpdGU7XHJcbiAgICAgICAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYWNhY2E7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIG1hcmdpbjogMjRweCAycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG5cclxuICAgICAgICAmLml0ZW0taGFzLWZvY3VzIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWJ1dHRvbntcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/addcomment/addcomment.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/addcomment/addcomment.component.ts ***!
  \***************************************************************/
/*! exports provided: AddcommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcommentComponent", function() { return AddcommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var AddcommentComponent = /** @class */ (function () {
    function AddcommentComponent(modalCtrl, formBuilder) {
        this.modalCtrl = modalCtrl;
        this.formBuilder = formBuilder;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
    }
    AddcommentComponent.prototype.ngOnInit = function () {
        this.validationsform = this.formBuilder.group({
            rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            ])),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            ])),
        });
    };
    AddcommentComponent.prototype.tryAddComment = function (values) {
        var _this = this;
        var user = firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.displayName;
        var date = new Date().toString();
        var data = {};
        var coment = { comment: values.comment, rating: values.rating, user: user, date: date };
        var comentario = Object.assign({}, coment);
        var ref = firebase_app__WEBPACK_IMPORTED_MODULE_3__["database"]().ref().child('postComments');
        var key = ref.push().key;
        data[this.id + "/" + key] = comentario;
        ref.update(data).then(function () {
            _this.modalCtrl.dismiss();
        });
    };
    AddcommentComponent.prototype.close = function () {
        this.modalCtrl.dismiss();
    };
    AddcommentComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddcommentComponent.prototype, "id", void 0);
    AddcommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addcomment',
            template: __webpack_require__(/*! raw-loader!./addcomment.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/addcomment/addcomment.component.html"),
            styles: [__webpack_require__(/*! ./addcomment.component.scss */ "./src/app/components/addcomment/addcomment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], AddcommentComponent);
    return AddcommentComponent;
}());



/***/ }),

/***/ "./src/app/components/backbutton/backbutton.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/backbutton/backbutton.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  --background-activated: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYWNrYnV0dG9uL0M6XFxVc2Vyc1xcSGFyaXNoXFxMb2NhbF9kZXZcXEd5bW1hdGVBcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGJhY2tidXR0b25cXGJhY2tidXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1Q0FBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFja2J1dHRvbi9iYWNrYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbiB7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/backbutton/backbutton.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/backbutton/backbutton.component.ts ***!
  \***************************************************************/
/*! exports provided: BackbuttonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackbuttonComponent", function() { return BackbuttonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var BackbuttonComponent = /** @class */ (function () {
    function BackbuttonComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    BackbuttonComponent.prototype.ngOnInit = function () { };
    BackbuttonComponent.prototype.backButton = function () {
        var animations = {
            animated: true,
            animationDirection: 'back'
        };
        this.navCtrl.back(animations);
    };
    BackbuttonComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BackbuttonComponent.prototype, "color", void 0);
    BackbuttonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-backbutton',
            template: __webpack_require__(/*! raw-loader!./backbutton.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/backbutton/backbutton.component.html"),
            styles: [__webpack_require__(/*! ./backbutton.component.scss */ "./src/app/components/backbutton/backbutton.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], BackbuttonComponent);
    return BackbuttonComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _backbutton_backbutton_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./backbutton/backbutton.component */ "./src/app/components/backbutton/backbutton.component.ts");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading/loading.component */ "./src/app/components/loading/loading.component.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _html_html_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./html/html.component */ "./src/app/components/html/html.component.ts");
/* harmony import */ var _postrating_postrating_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./postrating/postrating.component */ "./src/app/components/postrating/postrating.component.ts");
/* harmony import */ var _postcomments_postcomments_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./postcomments/postcomments.component */ "./src/app/components/postcomments/postcomments.component.ts");
/* harmony import */ var ionic4_star_rating__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ionic4-star-rating */ "./node_modules/ionic4-star-rating/dist/index.js");
/* harmony import */ var _addcomment_addcomment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./addcomment/addcomment.component */ "./src/app/components/addcomment/addcomment.component.ts");
/* harmony import */ var _empty_empty_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./empty/empty.component */ "./src/app/components/empty/empty.component.ts");
/* harmony import */ var _restday_restday_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./restday/restday.component */ "./src/app/components/restday/restday.component.ts");
/* harmony import */ var _postsfav_postsfav_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./postsfav/postsfav.component */ "./src/app/components/postsfav/postsfav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _workoutsfav_workoutsfav_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./workoutsfav/workoutsfav.component */ "./src/app/components/workoutsfav/workoutsfav.component.ts");
/* harmony import */ var _dietsfav_dietsfav_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dietsfav/dietsfav.component */ "./src/app/components/dietsfav/dietsfav.component.ts");



















var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            entryComponents: [_postcomments_postcomments_component__WEBPACK_IMPORTED_MODULE_10__["PostcommentsComponent"], _addcomment_addcomment_component__WEBPACK_IMPORTED_MODULE_12__["AddcommentComponent"]],
            declarations: [
                _backbutton_backbutton_component__WEBPACK_IMPORTED_MODULE_5__["BackbuttonComponent"],
                _loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"],
                _html_html_component__WEBPACK_IMPORTED_MODULE_8__["HtmlComponent"],
                _postrating_postrating_component__WEBPACK_IMPORTED_MODULE_9__["PostratingComponent"],
                _postcomments_postcomments_component__WEBPACK_IMPORTED_MODULE_10__["PostcommentsComponent"],
                _addcomment_addcomment_component__WEBPACK_IMPORTED_MODULE_12__["AddcommentComponent"],
                _empty_empty_component__WEBPACK_IMPORTED_MODULE_13__["EmptyComponent"],
                _restday_restday_component__WEBPACK_IMPORTED_MODULE_14__["RestdayComponent"],
                _postsfav_postsfav_component__WEBPACK_IMPORTED_MODULE_15__["PostsfavComponent"],
                _workoutsfav_workoutsfav_component__WEBPACK_IMPORTED_MODULE_17__["WorkoutsfavComponent"],
                _dietsfav_dietsfav_component__WEBPACK_IMPORTED_MODULE_18__["DietsfavComponent"]
            ],
            exports: [
                _backbutton_backbutton_component__WEBPACK_IMPORTED_MODULE_5__["BackbuttonComponent"],
                _loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"],
                _html_html_component__WEBPACK_IMPORTED_MODULE_8__["HtmlComponent"],
                _postrating_postrating_component__WEBPACK_IMPORTED_MODULE_9__["PostratingComponent"],
                _postcomments_postcomments_component__WEBPACK_IMPORTED_MODULE_10__["PostcommentsComponent"],
                _addcomment_addcomment_component__WEBPACK_IMPORTED_MODULE_12__["AddcommentComponent"],
                _empty_empty_component__WEBPACK_IMPORTED_MODULE_13__["EmptyComponent"],
                _restday_restday_component__WEBPACK_IMPORTED_MODULE_14__["RestdayComponent"],
                _postsfav_postsfav_component__WEBPACK_IMPORTED_MODULE_15__["PostsfavComponent"],
                _workoutsfav_workoutsfav_component__WEBPACK_IMPORTED_MODULE_17__["WorkoutsfavComponent"],
                _dietsfav_dietsfav_component__WEBPACK_IMPORTED_MODULE_18__["DietsfavComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                ionic4_star_rating__WEBPACK_IMPORTED_MODULE_11__["StarRatingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/dietsfav/dietsfav.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/dietsfav/dietsfav.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  margin-bottom: 12px;\n  border-radius: 5px;\n  --background-color: #313235;\n  --background: #313235;\n  --color: #fafafa;\n  --padding-top: 15px;\n  --padding-bottom: 15px; }\n\nion-list {\n  margin-bottom: 0;\n  background-color: #191919; }\n\nion-thumbnail {\n  --border-radius: 6px; }\n\nion-icon {\n  border-radius: 4px;\n  font-size: 21px; }\n\nion-label {\n  text-transform: uppercase;\n  font-size: 12px !important;\n  font-weight: bold; }\n\np {\n  text-transform: uppercase;\n  font-size: 12px;\n  color: #ccc;\n  display: block;\n  text-align: center;\n  margin: 20px 0;\n  font-family: 'Proxima-bold'; }\n\n.item .sc-ion-label-md-h {\n  color: #fafafa !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaWV0c2Zhdi9DOlxcVXNlcnNcXEhhcmlzaFxcTG9jYWxfZGV2XFxHeW1tYXRlQXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxkaWV0c2ZhdlxcZGlldHNmYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDJCQUFtQjtFQUNuQixxQkFBYTtFQUNiLGdCQUFRO0VBQ1IsbUJBQWM7RUFDZCxzQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxnQkFBZ0I7RUFDaEIseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksb0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kaWV0c2Zhdi9kaWV0c2Zhdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogIzMxMzIzNTtcclxuICAgIC0tYmFja2dyb3VuZDogIzMxMzIzNTtcclxuICAgIC0tY29sb3I6ICNmYWZhZmE7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuaW9uLWxpc3R7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcclxufVxyXG5cclxuaW9uLXRodW1ibmFpbHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG5pb24taWNvbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxufSBcclxuXHJcbmlvbi1sYWJlbHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5we1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUHJveGltYS1ib2xkJztcclxufVxyXG5cclxuLml0ZW0gLnNjLWlvbi1sYWJlbC1tZC1oIHtcclxuICAgIGNvbG9yOiAjZmFmYWZhICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/dietsfav/dietsfav.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/dietsfav/dietsfav.component.ts ***!
  \***********************************************************/
/*! exports provided: DietsfavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DietsfavComponent", function() { return DietsfavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _services_favorite_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/favorite.service */ "./src/app/services/favorite.service.ts");




var DietsfavComponent = /** @class */ (function () {
    function DietsfavComponent(dataFavorites) {
        this.dataFavorites = dataFavorites;
        this.diets = [];
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
    }
    DietsfavComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.dataFavorites.loadDiets()];
                    case 1:
                        _a.diets = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DietsfavComponent.prototype.removeFromFavorites = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.dataFavorites.removeDiet(id);
                        _a = this;
                        return [4 /*yield*/, this.dataFavorites.loadDiets()];
                    case 1:
                        _a.diets = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DietsfavComponent.ctorParameters = function () { return [
        { type: _services_favorite_service__WEBPACK_IMPORTED_MODULE_3__["FavoriteService"] }
    ]; };
    DietsfavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dietsfav',
            template: __webpack_require__(/*! raw-loader!./dietsfav.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dietsfav/dietsfav.component.html"),
            styles: [__webpack_require__(/*! ./dietsfav.component.scss */ "./src/app/components/dietsfav/dietsfav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_favorite_service__WEBPACK_IMPORTED_MODULE_3__["FavoriteService"]])
    ], DietsfavComponent);
    return DietsfavComponent;
}());



/***/ }),

/***/ "./src/app/components/empty/empty.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/empty/empty.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  height: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: flex;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  text-align: center;\n  width: 100%; }\n\np {\n  margin: 0;\n  padding: 0;\n  color: gray; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbXB0eS9DOlxcVXNlcnNcXEhhcmlzaFxcTG9jYWxfZGV2XFxHeW1tYXRlQXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxlbXB0eVxcZW1wdHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1oseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wdHkvZW1wdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5we1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/empty/empty.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/empty/empty.component.ts ***!
  \*****************************************************/
/*! exports provided: EmptyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyComponent", function() { return EmptyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");



var EmptyComponent = /** @class */ (function () {
    function EmptyComponent() {
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
    }
    EmptyComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmptyComponent.prototype, "title", void 0);
    EmptyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-empty',
            template: __webpack_require__(/*! raw-loader!./empty.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/empty/empty.component.html"),
            styles: [__webpack_require__(/*! ./empty.component.scss */ "./src/app/components/empty/empty.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmptyComponent);
    return EmptyComponent;
}());



/***/ }),

/***/ "./src/app/components/html/html.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/html/html.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".html {\n  font-size: 15px; }\n\n.html p, .html li, .html ol, .html p {\n  font-size: 14px !important; }\n\n.html li {\n  margin-bottom: 14px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9odG1sL0M6XFxVc2Vyc1xcSGFyaXNoXFxMb2NhbF9kZXZcXEd5bW1hdGVBcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGh0bWxcXGh0bWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksOEJBQThCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2h0bWwvaHRtbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaHRtbHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLmh0bWwgcCwgLmh0bWwgbGksIC5odG1sIG9sLCAuaHRtbCBwe1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5odG1sIGxpe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTRweCAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/html/html.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/html/html.component.ts ***!
  \***************************************************/
/*! exports provided: HtmlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlComponent", function() { return HtmlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HtmlComponent = /** @class */ (function () {
    function HtmlComponent() {
    }
    HtmlComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HtmlComponent.prototype, "htmlcontent", void 0);
    HtmlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-html',
            template: __webpack_require__(/*! raw-loader!./html.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/html/html.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./html.component.scss */ "./src/app/components/html/html.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HtmlComponent);
    return HtmlComponent;
}());



/***/ }),

/***/ "./src/app/components/loading/loading.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/loading/loading.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  height: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: flex;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  text-align: center;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2FkaW5nL0M6XFxVc2Vyc1xcSGFyaXNoXFxMb2NhbF9kZXZcXEd5bW1hdGVBcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxvYWRpbmdcXGxvYWRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1oseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/loading/loading.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/loading/loading.component.ts ***!
  \*********************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () { };
    LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! raw-loader!./loading.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.scss */ "./src/app/components/loading/loading.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/components/postcomments/postcomments.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/postcomments/postcomments.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comments ion-card-content {\n  border-bottom: 1px solid #eee;\n  padding-top: 0 !important;\n  font-size: 13px;\n  padding-bottom: 24px; }\n\n.comments ion-card-header {\n  padding-top: 0 !important;\n  padding-bottom: 6px !important; }\n\n.comments {\n  box-shadow: none !important; }\n\n.comments ion-label {\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 12px;\n  font-weight: 400; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0Y29tbWVudHMvQzpcXFVzZXJzXFxIYXJpc2hcXExvY2FsX2RldlxcR3ltbWF0ZUFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xccG9zdGNvbW1lbnRzXFxwb3N0Y29tbWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSx5QkFBeUI7RUFDekIsOEJBQThCLEVBQUE7O0FBR2xDO0VBQ0ksMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixNQUFNO0VBQ04sZUFBZTtFQUNmLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3N0Y29tbWVudHMvcG9zdGNvbW1lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbW1lbnRzIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcclxufVxyXG5cclxuLmNvbW1lbnRzIGlvbi1jYXJkLWhlYWRlcntcclxuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb21tZW50c3tcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbW1lbnRzIGlvbi1sYWJlbHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/postcomments/postcomments.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/postcomments/postcomments.component.ts ***!
  \*******************************************************************/
/*! exports provided: PostcommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostcommentsComponent", function() { return PostcommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");






var PostcommentsComponent = /** @class */ (function () {
    function PostcommentsComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_3__["strings"];
        this.postcomments = [];
        this.isLoading = false;
    }
    PostcommentsComponent.prototype.ngOnInit = function () { };
    PostcommentsComponent.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.isLoading = true;
                firebase_app__WEBPACK_IMPORTED_MODULE_4__["database"]().ref("postComments/" + this.id).on('value', function (snapshot) {
                    var comments = [];
                    snapshot.forEach(function (row) {
                        comments.push({
                            id: row.key,
                            rating: row.val().rating,
                            comment: row.val().comment,
                            user: row.val().user
                        });
                    });
                    _this.postcomments = comments;
                    _this.isLoading = false;
                });
                return [2 /*return*/];
            });
        });
    };
    PostcommentsComponent.prototype.close = function () {
        this.modalCtrl.dismiss();
    };
    PostcommentsComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostcommentsComponent.prototype, "id", void 0);
    PostcommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-postcomments',
            template: __webpack_require__(/*! raw-loader!./postcomments.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/postcomments/postcomments.component.html"),
            styles: [__webpack_require__(/*! ./postcomments.component.scss */ "./src/app/components/postcomments/postcomments.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], PostcommentsComponent);
    return PostcommentsComponent;
}());



/***/ }),

/***/ "./src/app/components/postrating/postrating.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/postrating/postrating.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdHJhdGluZy9wb3N0cmF0aW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/postrating/postrating.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/postrating/postrating.component.ts ***!
  \***************************************************************/
/*! exports provided: PostratingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostratingComponent", function() { return PostratingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PostratingComponent = /** @class */ (function () {
    function PostratingComponent() {
    }
    PostratingComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostratingComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostratingComponent.prototype, "color", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostratingComponent.prototype, "size", void 0);
    PostratingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-postrating',
            template: __webpack_require__(/*! raw-loader!./postrating.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/postrating/postrating.component.html"),
            styles: [__webpack_require__(/*! ./postrating.component.scss */ "./src/app/components/postrating/postrating.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PostratingComponent);
    return PostratingComponent;
}());



/***/ }),

/***/ "./src/app/components/postsfav/postsfav.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/postsfav/postsfav.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  margin-bottom: 12px;\n  border-radius: 5px;\n  --background-color: #313235;\n  --background: #313235;\n  --color: #fafafa;\n  --padding-top: 15px;\n  --padding-bottom: 15px; }\n\nion-list {\n  margin-bottom: 0;\n  background-color: #191919; }\n\nion-thumbnail {\n  --border-radius: 6px; }\n\nion-icon {\n  border-radius: 4px;\n  font-size: 21px; }\n\nion-label {\n  text-transform: uppercase;\n  font-size: 12px !important;\n  font-weight: bold; }\n\np {\n  text-transform: uppercase;\n  font-size: 12px;\n  color: #ccc;\n  display: block;\n  text-align: center;\n  margin: 20px 0;\n  font-family: 'Proxima-bold'; }\n\n.item .sc-ion-label-md-h {\n  color: #fafafa !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0c2Zhdi9DOlxcVXNlcnNcXEhhcmlzaFxcTG9jYWxfZGV2XFxHeW1tYXRlQXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwb3N0c2ZhdlxccG9zdHNmYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDJCQUFtQjtFQUNuQixxQkFBYTtFQUNiLGdCQUFRO0VBQ1IsbUJBQWM7RUFDZCxzQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxnQkFBZ0I7RUFDaEIseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksb0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3N0c2Zhdi9wb3N0c2Zhdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogIzMxMzIzNTtcclxuICAgIC0tYmFja2dyb3VuZDogIzMxMzIzNTtcclxuICAgIC0tY29sb3I6ICNmYWZhZmE7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuaW9uLWxpc3R7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcclxufVxyXG5cclxuaW9uLXRodW1ibmFpbHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG5pb24taWNvbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxufSBcclxuXHJcbmlvbi1sYWJlbHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5we1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUHJveGltYS1ib2xkJztcclxufVxyXG5cclxuLml0ZW0gLnNjLWlvbi1sYWJlbC1tZC1oIHtcclxuICAgIGNvbG9yOiAjZmFmYWZhICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/postsfav/postsfav.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/postsfav/postsfav.component.ts ***!
  \***********************************************************/
/*! exports provided: PostsfavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsfavComponent", function() { return PostsfavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_favorite_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/favorite.service */ "./src/app/services/favorite.service.ts");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");




var PostsfavComponent = /** @class */ (function () {
    function PostsfavComponent(dataFavorites) {
        this.dataFavorites = dataFavorites;
        this.posts = [];
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_3__["strings"];
    }
    PostsfavComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.dataFavorites.loadPosts()];
                    case 1:
                        _a.posts = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PostsfavComponent.prototype.removeFromFavorites = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.dataFavorites.removePost(id);
                        _a = this;
                        return [4 /*yield*/, this.dataFavorites.loadPosts()];
                    case 1:
                        _a.posts = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PostsfavComponent.ctorParameters = function () { return [
        { type: _services_favorite_service__WEBPACK_IMPORTED_MODULE_2__["FavoriteService"] }
    ]; };
    PostsfavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-postsfav',
            template: __webpack_require__(/*! raw-loader!./postsfav.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/postsfav/postsfav.component.html"),
            styles: [__webpack_require__(/*! ./postsfav.component.scss */ "./src/app/components/postsfav/postsfav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_favorite_service__WEBPACK_IMPORTED_MODULE_2__["FavoriteService"]])
    ], PostsfavComponent);
    return PostsfavComponent;
}());



/***/ }),

/***/ "./src/app/components/restday/restday.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/restday/restday.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  height: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: flex;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  text-align: center;\n  width: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\nh1 {\n  font-size: 22px;\n  text-transform: uppercase;\n  font-weight: bold;\n  margin: 0;\n  padding: 0;\n  margin-bottom: 10px; }\n\np {\n  margin: 0;\n  padding: 0;\n  text-transform: uppercase;\n  color: gray;\n  font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN0ZGF5L0M6XFxVc2Vyc1xcSGFyaXNoXFxMb2NhbF9kZXZcXEd5bW1hdGVBcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHJlc3RkYXlcXHJlc3RkYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1oseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsVUFBVTtFQUNWLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFNBQVM7RUFDVCxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jlc3RkYXkvcmVzdGRheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5oMXtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5we1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/restday/restday.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/restday/restday.component.ts ***!
  \*********************************************************/
/*! exports provided: RestdayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestdayComponent", function() { return RestdayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");



var RestdayComponent = /** @class */ (function () {
    function RestdayComponent() {
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
    }
    RestdayComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RestdayComponent.prototype, "title", void 0);
    RestdayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-restday',
            template: __webpack_require__(/*! raw-loader!./restday.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/restday/restday.component.html"),
            styles: [__webpack_require__(/*! ./restday.component.scss */ "./src/app/components/restday/restday.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RestdayComponent);
    return RestdayComponent;
}());



/***/ }),

/***/ "./src/app/components/workoutsfav/workoutsfav.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/workoutsfav/workoutsfav.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  margin-bottom: 12px;\n  border-radius: 5px;\n  --background-color: #313235;\n  --background: #313235;\n  --color: #fafafa;\n  --padding-top: 15px;\n  --padding-bottom: 15px; }\n\nion-list {\n  margin-bottom: 0;\n  background-color: #191919; }\n\nion-thumbnail {\n  --border-radius: 6px; }\n\nion-icon {\n  border-radius: 4px;\n  font-size: 21px; }\n\nion-label {\n  text-transform: uppercase;\n  font-size: 12px !important;\n  font-weight: bold; }\n\np {\n  text-transform: uppercase;\n  font-size: 12px;\n  color: #ccc;\n  display: block;\n  text-align: center;\n  margin: 20px 0;\n  font-family: 'Proxima-bold'; }\n\n.item .sc-ion-label-md-h {\n  color: #fafafa !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93b3Jrb3V0c2Zhdi9DOlxcVXNlcnNcXEhhcmlzaFxcTG9jYWxfZGV2XFxHeW1tYXRlQXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFx3b3Jrb3V0c2Zhdlxcd29ya291dHNmYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDJCQUFtQjtFQUNuQixxQkFBYTtFQUNiLGdCQUFRO0VBQ1IsbUJBQWM7RUFDZCxzQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxnQkFBZ0I7RUFDaEIseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksb0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93b3Jrb3V0c2Zhdi93b3Jrb3V0c2Zhdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogIzMxMzIzNTtcclxuICAgIC0tYmFja2dyb3VuZDogIzMxMzIzNTtcclxuICAgIC0tY29sb3I6ICNmYWZhZmE7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuaW9uLWxpc3R7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcclxufVxyXG5cclxuaW9uLXRodW1ibmFpbHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG5pb24taWNvbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxufSBcclxuXHJcbmlvbi1sYWJlbHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5we1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUHJveGltYS1ib2xkJztcclxufVxyXG5cclxuLml0ZW0gLnNjLWlvbi1sYWJlbC1tZC1oIHtcclxuICAgIGNvbG9yOiAjZmFmYWZhICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/workoutsfav/workoutsfav.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/workoutsfav/workoutsfav.component.ts ***!
  \*****************************************************************/
/*! exports provided: WorkoutsfavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutsfavComponent", function() { return WorkoutsfavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_favorite_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/favorite.service */ "./src/app/services/favorite.service.ts");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");




var WorkoutsfavComponent = /** @class */ (function () {
    function WorkoutsfavComponent(dataFavorites) {
        this.dataFavorites = dataFavorites;
        this.workouts = [];
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_3__["strings"];
    }
    WorkoutsfavComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.dataFavorites.loadWorkouts()];
                    case 1:
                        _a.workouts = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkoutsfavComponent.prototype.removeFromFavorites = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.dataFavorites.removeWorkout(id);
                        _a = this;
                        return [4 /*yield*/, this.dataFavorites.loadWorkouts()];
                    case 1:
                        _a.workouts = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkoutsfavComponent.ctorParameters = function () { return [
        { type: _services_favorite_service__WEBPACK_IMPORTED_MODULE_2__["FavoriteService"] }
    ]; };
    WorkoutsfavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-workoutsfav',
            template: __webpack_require__(/*! raw-loader!./workoutsfav.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/workoutsfav/workoutsfav.component.html"),
            styles: [__webpack_require__(/*! ./workoutsfav.component.scss */ "./src/app/components/workoutsfav/workoutsfav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_favorite_service__WEBPACK_IMPORTED_MODULE_2__["FavoriteService"]])
    ], WorkoutsfavComponent);
    return WorkoutsfavComponent;
}());



/***/ }),

/***/ "./src/app/pipes/image.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipes/image.pipe.ts ***!
  \*************************************/
/*! exports provided: ImagePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePipe", function() { return ImagePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");



var Url = _config_config__WEBPACK_IMPORTED_MODULE_2__["config"].Url + '/images';
var ImagePipe = /** @class */ (function () {
    function ImagePipe() {
    }
    // tslint:disable-next-line: ban-types
    ImagePipe.prototype.transform = function (img) {
        if (!img) {
            return '../assets/images/no-image.png';
        }
        var imgUrl = Url + "/" + img;
        return imgUrl;
    };
    ImagePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'image'
        })
    ], ImagePipe);
    return ImagePipe;
}());



/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _image_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image.pipe */ "./src/app/pipes/image.pipe.ts");
/* harmony import */ var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./safe-html.pipe */ "./src/app/pipes/safe-html.pipe.ts");





var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_image_pipe__WEBPACK_IMPORTED_MODULE_3__["ImagePipe"], _safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__["SafeHtmlPipe"]],
            exports: [
                _image_pipe__WEBPACK_IMPORTED_MODULE_3__["ImagePipe"],
                _safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__["SafeHtmlPipe"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "./src/app/pipes/safe-html.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/safe-html.pipe.ts ***!
  \*****************************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtmlPipe.prototype.transform = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    SafeHtmlPipe.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    SafeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safeHtml',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());



/***/ }),

/***/ "./src/app/services/favorite.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/favorite.service.ts ***!
  \**********************************************/
/*! exports provided: FavoriteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteService", function() { return FavoriteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var FavoriteService = /** @class */ (function () {
    function FavoriteService(storage, toastCtrl) {
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.posts = [];
        this.workouts = [];
        this.diets = [];
    }
    FavoriteService.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: message,
                            duration: 1500,
                            mode: 'ios',
                            color: 'dark',
                            cssClass: 'ion-toast'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    // ------------------------------- POSTS
    FavoriteService.prototype.savePost = function (post) {
        var exist = false;
        for (var _i = 0, _a = this.posts; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id === post.id) {
                exist = true;
                break;
            }
        }
        if (exist) {
            this.posts = this.posts.filter(function (item) { return item.id !== post.id; });
        }
        else {
            this.posts.push(post);
        }
        this.storage.set('posts', this.posts);
        return !exist;
    };
    FavoriteService.prototype.loadPosts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var posts;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('posts')];
                    case 1:
                        posts = _a.sent();
                        this.posts = posts || [];
                        return [2 /*return*/, this.posts];
                }
            });
        });
    };
    FavoriteService.prototype.existPost = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var exist;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadPosts()];
                    case 1:
                        _a.sent();
                        exist = this.posts.find(function (post) { return post.id === id; });
                        return [2 /*return*/, (exist) ? true : false];
                }
            });
        });
    };
    FavoriteService.prototype.removePost = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var ArrayFav;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                ArrayFav = this.posts.filter(function (e) { return e.id !== id; });
                this.storage.set('posts', ArrayFav);
                return [2 /*return*/];
            });
        });
    };
    // ------------------------------- WORKOUTS
    FavoriteService.prototype.saveWorkout = function (workout) {
        var exist = false;
        for (var _i = 0, _a = this.workouts; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id === workout.id) {
                exist = true;
                break;
            }
        }
        if (exist) {
            this.workouts = this.workouts.filter(function (item) { return item.id !== workout.id; });
        }
        else {
            this.workouts.push(workout);
        }
        this.storage.set('workouts', this.workouts);
        return !exist;
    };
    FavoriteService.prototype.loadWorkouts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var workouts;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('workouts')];
                    case 1:
                        workouts = _a.sent();
                        this.workouts = workouts || [];
                        return [2 /*return*/, this.workouts];
                }
            });
        });
    };
    FavoriteService.prototype.existWorkout = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var exist;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadWorkouts()];
                    case 1:
                        _a.sent();
                        exist = this.workouts.find(function (workout) { return workout.id === id; });
                        return [2 /*return*/, (exist) ? true : false];
                }
            });
        });
    };
    FavoriteService.prototype.removeWorkout = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var ArrayFav;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                ArrayFav = this.workouts.filter(function (e) { return e.id !== id; });
                this.storage.set('workouts', ArrayFav);
                return [2 /*return*/];
            });
        });
    };
    // ------------------------------- DIETS
    FavoriteService.prototype.saveDiet = function (diet) {
        var exist = false;
        for (var _i = 0, _a = this.diets; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id === diet.id) {
                exist = true;
                break;
            }
        }
        if (exist) {
            this.diets = this.diets.filter(function (item) { return item.id !== diet.id; });
        }
        else {
            this.diets.push(diet);
        }
        this.storage.set('diets', this.diets);
        return !exist;
    };
    FavoriteService.prototype.loadDiets = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var diets;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('diets')];
                    case 1:
                        diets = _a.sent();
                        this.diets = diets || [];
                        return [2 /*return*/, this.diets];
                }
            });
        });
    };
    FavoriteService.prototype.existDiet = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var exist;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadDiets()];
                    case 1:
                        _a.sent();
                        exist = this.diets.find(function (diet) { return diet.id === id; });
                        return [2 /*return*/, (exist) ? true : false];
                }
            });
        });
    };
    FavoriteService.prototype.removeDiet = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var ArrayFav;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                ArrayFav = this.diets.filter(function (e) { return e.id !== id; });
                this.storage.set('diets', ArrayFav);
                return [2 /*return*/];
            });
        });
    };
    FavoriteService.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
    ]; };
    FavoriteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], FavoriteService);
    return FavoriteService;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-about-about-module~pages-aboutus-aboutus-module~pages-bmiinfo-bmiinfo-module~pages-bod~9dbe5797-es5.js.map