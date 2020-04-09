(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"!isLoading\" class=\"lightheader\" no-border>\r\n  <ion-toolbar mode=\"ios\" class=\"ion-color\" [style.background-color]=\"customColor\">\r\n    <ion-title  class=\"ion-text-capitalize\">\r\n      Profile\r\n    </ion-title>\r\n \r\n    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"ion-no-padding\">\r\n\r\n  <app-loading *ngIf=\"isLoading\"></app-loading>\r\n\r\n  <ion-grid class=\"ion-no-padding\">\r\n    <ion-row class=\"edit\">        \r\n      <ion-buttons class=\"edit-profile\"> \r\n      <ion-button [routerLink]=\"['/editprofile']\">\r\n        <ion-label class=\"view-more\">\r\n          Edit Profile\r\n        </ion-label>\r\n          </ion-button>\r\n    </ion-buttons></ion-row>\r\n    <ion-row class=\"header-bg\" >\r\n      <div class=\"text\">\r\n          <img src={{profilePicture}} class=\"author-img\"/>\r\n      <!-- <img src=\"./assets/images/avatar.png\" class=\"author-img\"/>--> \r\n        <div class=\"author\">\r\n           \r\n        <p class=\"author-info\">{{profile.name}}</p>\r\n        <ion-buttons *ngIf=\"subscribe !== 'active'\" slot=\"start\">\r\n          <ion-button [routerLink]=\"['/pro']\" style=\"padding: 0 !important;\">\r\n          <img src=\"./assets/images/pro.png\" class=\"pro\">\r\n              </ion-button>\r\n        </ion-buttons>\r\n        </div>\r\n        <app-postrating *ngIf=\"rating > 0\" [value]=\"rating\" color=\"rgba(255, 255, 255, 0.3)\" [size]=\"18\"></app-postrating>\r\n      </div>\r\n    </ion-row> \r\n  </ion-grid>\r\n  <ion-list style=\"margin: 0; padding: 0;\">\r\n    \r\n      <ion-button expand=\"block\" (click)=\"logout()\" class=\"log-out\">\r\n        Sign Out\r\n      </ion-button>\r\n    \r\n  </ion-list>\r\n \r\n\r\n\r\n<!--\r\n\r\n  <ion-card *ngIf=\"subscribe !== 'active'\" else cancelSub>\r\n\r\n    <ion-card-content class=\"plans\">\r\n      <ion-list>\r\n        <ion-radio-group value=\"plan\">\r\n          <ion-list-header>\r\n            <ion-label><b>Subscription Plans</b></ion-label>\r\n          </ion-list-header>\r\n          <div class=\"price-plans\">\r\n          <ion-item>\r\n            <ion-radio slot=\"end\"></ion-radio>\r\n            <b>Free</b>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-radio slot=\"end\" (ionSelect)=\"logForm($event)\" value=\"monthly\"></ion-radio>\r\n            <b>5$/month</b>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-radio slot=\"end\" (ionSelect)=\"logForm($event)\" value=\"yearly\"></ion-radio>\r\n            <b>50$/year</b>\r\n          </ion-item>\r\n        </div>\r\n\r\n        </ion-radio-group>\r\n      </ion-list>\r\n    </ion-card-content>\r\n\r\n  </ion-card>\r\n-->\r\n  <ion-card *ngIf=\"subscribe === 'active'\">\r\n    <!--<ion-img src=\"../../../assets/images/demo-image.png\"></ion-img>-->\r\n    <ion-card-content>\r\n      <ion-card-header>\r\n        <ion-card-subtitle><b>Subscription type:</b> {{this.type | titlecase}}</ion-card-subtitle>\r\n      </ion-card-header>\r\n      <ion-item>\r\n        <ion-button (click)=\"presentAlert()\">Cancel Subscription</ion-button>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-button (click)=\"showsubpage()\">Edit</ion-button>\r\n      </ion-item>\r\n\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-list style=\"margin: 0; padding: 0;\">\r\n    <ion-list-header>\r\n      <ion-label style=\"font-weight: bold; letter-spacing: 0;\">{{strings.ST56}}</ion-label>\r\n    </ion-list-header>\r\n  </ion-list>\r\n\r\n  <div class=\"ion-padding fav-info\">\r\n\r\n    <!-- Workouts -->\r\n\r\n    <div class=\"tags\" (click)=toggleWorkouts()>\r\n      <h1>{{strings.ST1}}</h1>\r\n      <ion-icon [name]=\"isWorkouts ? 'arrow-forward' : 'arrow-down'\" color=\"light\" slot=\"end\"></ion-icon>\r\n    </div>\r\n\r\n    <div class=\"animated fadeIn\" [hidden]=\"isWorkouts\">\r\n      <app-workoutsfav></app-workoutsfav>\r\n    </div>\r\n\r\n    <!-- Workouts -->\r\n\r\n    <!-- Posts -->\r\n\r\n    <div class=\"tags\" (click)=togglePosts()>\r\n      <h1>{{strings.ST4}}</h1>\r\n      <ion-icon [name]=\"isPosts ? 'arrow-forward' : 'arrow-down'\" color=\"light\" slot=\"end\"></ion-icon>\r\n    </div>\r\n\r\n    <div class=\"animated fadeIn\" [hidden]=\"isPosts\">\r\n      <app-postsfav></app-postsfav>\r\n    </div>\r\n\r\n    <!-- Posts -->\r\n\r\n    <!-- Diets -->\r\n\r\n    <div class=\"tags\" (click)=toggleDiets()>\r\n      <h1>{{strings.ST3}}</h1>\r\n      <ion-icon [name]=\"isDiets ? 'arrow-forward' : 'arrow-down'\" color=\"light\" slot=\"end\"></ion-icon>\r\n    </div>\r\n\r\n    <div class=\"animated fadeIn\" [hidden]=\"isDiets\">\r\n      <app-dietsfav></app-dietsfav>\r\n    </div>\r\n\r\n    <!-- Diets -->\r\n\r\n  </div>\r\n  \r\n</ion-content>"

/***/ }),

/***/ "./node_modules/time-ago-pipe/esm2015/time-ago-pipe.js":
/*!*************************************************************!*\
  !*** ./node_modules/time-ago-pipe/esm2015/time-ago-pipe.js ***!
  \*************************************************************/
/*! exports provided: TimeAgoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeAgoPipe", function() { return TimeAgoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TimeAgoPipe {
    /**
     * @param {?} changeDetectorRef
     * @param {?} ngZone
     */
    constructor(changeDetectorRef, ngZone) {
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        this.removeTimer();
        let /** @type {?} */ d = new Date(value);
        let /** @type {?} */ now = new Date();
        let /** @type {?} */ seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
        let /** @type {?} */ timeToUpdate = (Number.isNaN(seconds)) ? 1000 : this.getSecondsUntilUpdate(seconds) * 1000;
        this.timer = this.ngZone.runOutsideAngular(() => {
            if (typeof window !== 'undefined') {
                return window.setTimeout(() => {
                    this.ngZone.run(() => this.changeDetectorRef.markForCheck());
                }, timeToUpdate);
            }
            return null;
        });
        let /** @type {?} */ minutes = Math.round(Math.abs(seconds / 60));
        let /** @type {?} */ hours = Math.round(Math.abs(minutes / 60));
        let /** @type {?} */ days = Math.round(Math.abs(hours / 24));
        let /** @type {?} */ months = Math.round(Math.abs(days / 30.416));
        let /** @type {?} */ years = Math.round(Math.abs(days / 365));
        if (Number.isNaN(seconds)) {
            return '';
        }
        else if (seconds <= 45) {
            return 'a few seconds ago';
        }
        else if (seconds <= 90) {
            return 'a minute ago';
        }
        else if (minutes <= 45) {
            return minutes + ' minutes ago';
        }
        else if (minutes <= 90) {
            return 'an hour ago';
        }
        else if (hours <= 22) {
            return hours + ' hours ago';
        }
        else if (hours <= 36) {
            return 'a day ago';
        }
        else if (days <= 25) {
            return days + ' days ago';
        }
        else if (days <= 45) {
            return 'a month ago';
        }
        else if (days <= 345) {
            return months + ' months ago';
        }
        else if (days <= 545) {
            return 'a year ago';
        }
        else {
            // (days > 545)
            return years + ' years ago';
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.removeTimer();
    }
    /**
     * @return {?}
     */
    removeTimer() {
        if (this.timer) {
            window.clearTimeout(this.timer);
            this.timer = null;
        }
    }
    /**
     * @param {?} seconds
     * @return {?}
     */
    getSecondsUntilUpdate(seconds) {
        let /** @type {?} */ min = 60;
        let /** @type {?} */ hr = min * 60;
        let /** @type {?} */ day = hr * 24;
        if (seconds < min) {
            // less than 1 min, update every 2 secs
            return 2;
        }
        else if (seconds < hr) {
            // less than an hour, update every 30 secs
            return 30;
        }
        else if (seconds < day) {
            // less then a day, update every 5 mins
            return 300;
        }
        else {
            // update every hour
            return 3600;
        }
    }
}
TimeAgoPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                name: 'timeAgo',
                pure: false
            },] },
];
/** @nocollapse */
TimeAgoPipe.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=time-ago-pipe.js.map


/***/ }),

/***/ "./src/app/pages/profile/profile-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/pages/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm2015/time-ago-pipe.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");










let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"], time_ago_pipe__WEBPACK_IMPORTED_MODULE_7__["TimeAgoPipe"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-bg {\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.header-bg .text {\n  color: #fff;\n  text-align: center; }\n\n.header-bg .name {\n  color: var(--ion-color-primary);\n  text-align: center;\n  margin-bottom: 9px;\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 16px; }\n\n.header-bg .since {\n  color: #fff;\n  margin-top: 5px;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px; }\n\n.tags {\n  background-color: #313235;\n  padding: 15px;\n  position: relative;\n  margin-bottom: 10px;\n  border-radius: 5px; }\n\n.tags h1 {\n  font-size: 16px;\n  text-transform: uppercase;\n  font-weight: bold;\n  margin: 0;\n  font-family: 'Proxima-bold';\n  color: #fafafa;\n  line-height: 18px; }\n\n.tags ion-icon {\n  position: absolute;\n  right: 14px;\n  top: 11px;\n  font-size: 22px; }\n\n.view-more {\n  width: 100%;\n  color: #f7474f;\n  font-family: Proxima-bold;\n  font-size: 16px !important;\n  line-height: 16px;\n  text-transform: none !important;\n  text-align: right !important; }\n\nion-header {\n  background-color: #191919;\n  height: 100%;\n  padding: 10px 5% 0px 5% !important;\n  height: auto; }\n\n.ion-text-capitalize {\n  width: 100%;\n  color: #eafff7;\n  font-family: Proxima-bold;\n  font-size: 32px !important;\n  line-height: 32px;\n  text-transform: none !important;\n  text-align: left;\n  padding: 0; }\n\nion-list ion-button {\n  max-width: 100%;\n  margin: 0 auto;\n  font-size: 18px;\n  line-height: 18px;\n  font-family: 'Proxima-bold'; }\n\n.text {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  width: 100%;\n  margin: 0 auto;\n  background-color: #313235;\n  border-radius: 5px;\n  padding: 20px;\n  margin-bottom: 20px; }\n\n.author-img {\n  max-width: 80px;\n  max-height: 80px;\n  border-radius: 50%;\n  margin-right: 20px; }\n\n.pro {\n  height: 100%;\n  display: block;\n  margin-right: auto; }\n\n.sc-ion-buttons-ios-s ion-button {\n  --padding-start: 0px !important;\n  --padding-end: 0px !important;\n  padding: 0px !important;\n  margin: 0px;\n  --margin: 0px;\n  width: 100%; }\n\n.author-info {\n  font-family: 'Proxima-bold';\n  font-family: 22px;\n  line-height: 26px;\n  margin: 5px 0; }\n\nion-content, .edit {\n  background: #191919; }\n\n.edit .sc-ion-buttons-ios-h {\n  width: 100%;\n  margin: 0 auto; }\n\nion-grid, ion-card, ion-list, .fav-info {\n  padding: 0 5% !important;\n  background-color: #191919; }\n\nion-card {\n  margin: 0;\n  border-radius: 0; }\n\n.card-content-ios {\n  padding: 0; }\n\n.plans ion-list, ion-list-header, .plans {\n  padding: 0 !important; }\n\nion-list-header {\n  color: #979797;\n  font-size: 18px;\n  line-height: 20px;\n  font-family: 'Proxima-regular';\n  text-transform: none;\n  margin-top: 30px;\n  background-color: none !important; }\n\nion-item {\n  --background-color: #313235!important;\n  --background: #313235!important;\n  color: #fafafa;\n  --padding-inline-start: 0px !important;\n  --padding: 0px !important;\n  padding: 0 !important;\n  font-size: 18px;\n  line-height: 20px;\n  font-family: 'Proxima-regular'; }\n\n.price-plans {\n  border-radius: 5px;\n  padding: 10px 10px 30px 10px;\n  background-color: #313235; }\n\n.animated {\n  margin-bottom: 20px !important; }\n\n.fav-info {\n  padding-bottom: 40px !important; }\n\n.edit-profile {\n  margin-left: auto; }\n\n.sc-ion-buttons-md-s ion-button {\n  --padding-start: 0 !important;\n  --padding-end: 0 !important; }\n\n@media only screen and (max-width: 320px) {\n  .author-img {\n    max-width: 60px;\n    max-height: 60px;\n    margin-right: 15px; }\n  .text {\n    padding: 20px 15px; } }\n\n@media only screen and (max-width: 260px) {\n  .author-img {\n    max-width: 50px;\n    max-height: 50px;\n    margin-right: 10px; }\n  .text {\n    padding: 20px 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9DOlxcVXNlcnNcXEhhcmlzaFxcTG9jYWxfZGV2XFxHeW1tYXRlQXBwL3NyY1xcYXBwXFxwYWdlc1xccHJvZmlsZVxccHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsU0FBUTtFQUNSLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZUFBZSxFQUFBOztBQUduQjtFQUNJLFdBQVc7RUFDWCxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsK0JBQStCO0VBQy9CLDRCQUE0QixFQUFBOztBQUdoQztFQUNJLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLFlBQWEsRUFBQTs7QUFHakI7RUFDSSxXQUFXO0VBQ1gsY0FBYztFQUNkLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIsVUFBVSxFQUFBOztBQUlkO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSwrQkFBZ0I7RUFDaEIsNkJBQWM7RUFDZCx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGFBQVM7RUFDVCxXQUFXLEVBQUE7O0FBSWY7RUFDSSwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksV0FBVztFQUNYLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSx3QkFBd0I7RUFDeEIseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksU0FBUztFQUNULGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFVBQVcsRUFBQTs7QUFHZjtFQUNJLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5QixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGlDQUFpQyxFQUFBOztBQUdyQztFQUNJLHFDQUFtQjtFQUNuQiwrQkFBYTtFQUNiLGNBQWM7RUFDZCxzQ0FBdUI7RUFDdkIseUJBQVU7RUFDVixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSxrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLHlCQUF5QixFQUFBOztBQUk3QjtFQUNJLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLCtCQUErQixFQUFBOztBQUduQztFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLDZCQUFnQjtFQUNoQiwyQkFBYyxFQUFBOztBQUdsQjtFQUNJO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBQTtFQUV0QjtJQUNJLGtCQUFrQixFQUFBLEVBQ3JCOztBQUdMO0VBQ0k7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQixFQUFBO0VBRXRCO0lBQ0ksa0JBQWtCLEVBQUEsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1iZ3tcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlci1iZyAudGV4dHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyLWJnIC5uYW1le1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmhlYWRlci1iZyAuc2luY2V7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi50YWdze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMxMzIzNTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4udGFncyBoMXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQcm94aW1hLWJvbGQnO1xyXG4gICAgY29sb3I6ICNmYWZhZmE7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxufVxyXG5cclxuLnRhZ3MgaW9uLWljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTRweDtcclxuICAgIHRvcDogMTFweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuLnZpZXctbW9yZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICNmNzQ3NGY7XHJcbiAgICBmb250LWZhbWlseTogUHJveGltYS1ib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24taGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMTkxOTE5IDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggNSUgMHB4IDUlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IGF1dG8gO1xyXG59XHJcblxyXG4uaW9uLXRleHQtY2FwaXRhbGl6ZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICNlYWZmZjc7XHJcbiAgICBmb250LWZhbWlseTogUHJveGltYS1ib2xkO1xyXG4gICAgZm9udC1zaXplOiAzMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuXHJcblxyXG5pb24tbGlzdCBpb24tYnV0dG9ue1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUHJveGltYS1ib2xkJztcclxufVxyXG5cclxuLnRleHR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzMjM1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5hdXRob3ItaW1ne1xyXG4gICAgbWF4LXdpZHRoOiA4MHB4O1xyXG4gICAgbWF4LWhlaWdodDogODBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLnByb3tcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgaW9uLWJ1dHRvbiB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgLS1tYXJnaW46IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLmF1dGhvci1pbmZve1xyXG4gICAgZm9udC1mYW1pbHk6ICdQcm94aW1hLWJvbGQnO1xyXG4gICAgZm9udC1mYW1pbHk6IDIycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50LCAuZWRpdHtcclxuICAgIGJhY2tncm91bmQ6ICMxOTE5MTk7XHJcbn1cclxuXHJcbi5lZGl0IC5zYy1pb24tYnV0dG9ucy1pb3MtaHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbmlvbi1ncmlkLCBpb24tY2FyZCwgaW9uLWxpc3QsIC5mYXYtaW5mb3tcclxuICAgIHBhZGRpbmc6IDAgNSUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuLmNhcmQtY29udGVudC1pb3N7XHJcbiAgICBwYWRkaW5nOiAwIDtcclxufVxyXG5cclxuLnBsYW5zIGlvbi1saXN0LCBpb24tbGlzdC1oZWFkZXIsIC5wbGFuc3tcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWxpc3QtaGVhZGVye1xyXG4gICAgY29sb3I6ICM5Nzk3OTc7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUHJveGltYS1yZWd1bGFyJztcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICMzMTMyMzUhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMzEzMjM1IWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmFmYWZhO1xyXG4gICAgLS1wYWRkaW5nLWlubGluZS1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1Byb3hpbWEtcmVndWxhcic7XHJcbn1cclxuXHJcbi5wcmljZS1wbGFuc3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAzMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzMjM1O1xyXG59XHJcblxyXG5cclxuLmFuaW1hdGVke1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmF2LWluZm97XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZWRpdC1wcm9maWxle1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1tZC1zIGlvbi1idXR0b257XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDAgIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gICAgLmF1dGhvci1pbWd7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2MHB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLnRleHR7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAxNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2MHB4KSB7XHJcbiAgICAuYXV0aG9yLWltZ3tcclxuICAgICAgICBtYXgtd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNTBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAudGV4dHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _modals_plan_plan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modals/plan/plan.page */ "./src/app/modals/plan/plan.page.ts");
/* harmony import */ var _modals_subscription_subscription_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modals/subscription/subscription.page */ "./src/app/modals/subscription/subscription.page.ts");
/* harmony import */ var _services_subscription_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/subscription.service */ "./src/app/services/subscription.service.ts");













let ProfilePage = class ProfilePage {
    constructor(plt, firebase, authService, subService, modalController, alertController, toastController, navCtrl) {
        this.plt = plt;
        this.firebase = firebase;
        this.authService = authService;
        this.subService = subService;
        this.modalController = modalController;
        this.alertController = alertController;
        this.toastController = toastController;
        this.navCtrl = navCtrl;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
        this.isLoading = true;
        this.isWorkouts = false;
        this.isPosts = false;
        this.isDiets = false;
        this.subscriptiontext = "Only $4.99 per month";
        this.buttonname = "Change to Yearly";
        this.profile = { name: "GymateUser" };
        this.profilePicture = "https://www.gravatar.com/avatar/";
        this.text = 'Change to yearly';
        this.subscribe = true;
    }
    ngOnInit() {
    }
    logout() {
        this.authService.doLogout();
    }
    logForm(form) {
        this.useremail = this.authService.getUserEmail();
        this.userid = this.authService.getUserId();
        console.log(form.detail.value);
        this.presentModal(form.detail.value, this.useremail, this.userid, _modals_plan_plan_page__WEBPACK_IMPORTED_MODULE_6__["PlanPage"]);
    }
    showsubpage() {
        this.presentModal(this.cusid, this.useremail, this.userid, _modals_subscription_subscription_page__WEBPACK_IMPORTED_MODULE_7__["SubscriptionPage"]);
    }
    presentModal(value, email, userid, page) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: page,
                componentProps: {
                    'value': value,
                    'email': email,
                    'userid': userid
                }
            });
            return yield modal.present();
        });
    }
    presentToast(msg, color) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000,
                color: color,
                position: "top"
            });
            toast.present();
        });
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm!',
                message: 'Cancel <strong>Subscription</strong>!!!',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Okay',
                        handler: () => {
                            console.log('Confirm Okay');
                            console.log(this.useremail, this.userid, this.subid, this.cusid, this.type);
                            this.subService.deleteSubscription(this.useremail, this.userid, this.subid, this.cusid, this.type)
                                .subscribe((data) => {
                                console.log(data);
                                this.presentToast("Success", "success");
                                this.navCtrl.back();
                            }, err => {
                                this.presentToast("failed", "danger");
                                console.log(err);
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("view");
            let det = yield this.firebase.getData();
            let iurl = yield this.firebase.getprofileImage();
            if (iurl) {
                this.profilePicture = iurl.url;
            }
            this.profile.name = det.name;
            this.isLoading = true;
            this.useremail = this.authService.getUserEmail();
            this.userid = this.authService.getUserId();
            this.subService.getStatus(this.userid).subscribe((data) => {
                this.subscribe = data.status;
                this.type = data.type;
                this.subid = data.subid;
                this.cusid = data.cusid;
            }, err => { console.log(err); });
            this.name = yield this.firebase.getDisplayName();
            this.since = yield this.firebase.getCreationTime();
            this.innerHeight = this.plt.height() / 3 + 'px';
            this.isLoading = false;
        });
    }
    toggleWorkouts() {
        this.isWorkouts = !this.isWorkouts;
    }
    togglePosts() {
        this.isPosts = !this.isPosts;
    }
    toggleDiets() {
        this.isDiets = !this.isDiets;
    }
    changeText(text) {
        //alert(text)
        if (text == "Change to Yearly") {
            this.subscriptiontext = "Only $54.99 per year";
            this.buttonname = "Change to Monthly";
        }
        if (text == "Change to Monthly") {
            this.subscriptiontext = "Only $4.99 per month";
            this.buttonname = "Change to Yearly";
        }
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _services_subscription_service__WEBPACK_IMPORTED_MODULE_8__["SubscriptionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html"),
        styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _services_subscription_service__WEBPACK_IMPORTED_MODULE_8__["SubscriptionService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module-es2015.js.map