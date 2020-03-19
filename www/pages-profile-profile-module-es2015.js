(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"darkheader\" mode=\"ios\" no-border>\r\n  <ion-toolbar mode=\"ios\">\r\n<!--\r\n    <ion-buttons slot=\"start\">\r\n      <app-backbutton color=\"light\"></app-backbutton>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon mode=\"md\" name=\"md-exit\" slot=\"end\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n-->\r\n    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-no-padding\">\r\n\r\n  <app-loading *ngIf=\"isLoading\"></app-loading>\r\n\r\n  <ion-grid class=\"ion-no-padding\">\r\n    <ion-row class=\"header-bg\" [ngStyle]=\"{'height': innerHeight}\">\r\n      <div class=\"text\">\r\n        <p class=\"name\">{{name}}</p>\r\n        <p class=\"since\">{{strings.ST65}} {{since | timeAgo}}</p>\r\n      </div>\r\n    </ion-row> \r\n  </ion-grid>\r\n  <ion-list style=\"margin: 0; padding: 0;\">\r\n    \r\n      <ion-button expand=\"block\" (click)=\"logout()\">\r\n        signout\r\n      </ion-button>\r\n    \r\n  </ion-list>\r\n  <!--<ion-card *ngIf=\"subscribe\">\r\n    <ion-card-header>\r\n      <ion-card-title>Subscribe</ion-card-title>\r\n    </ion-card-header>\r\n\r\n   <ion-card-content>\r\n     \r\n      <ion-toggle [(ngModel)]=\"subscribe\" (ionChange)=\"notify()\" color=\"success\"></ion-toggle>\r\n\r\n    </ion-card-content>\r\n  </ion-card>-->\r\n\r\n\r\n\r\n  <ion-card *ngIf=\"subscribe !== 'active'\" else cancelSub>\r\n\r\n\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-radio-group value=\"plan\">\r\n          <ion-list-header>\r\n            <ion-label><b>Subscription Plans</b></ion-label>\r\n          </ion-list-header>\r\n\r\n          <ion-item>\r\n            <ion-radio slot=\"end\"></ion-radio>\r\n            <i>Free</i>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-radio slot=\"end\" (ionSelect)=\"logForm($event)\" value=\"monthly\"></ion-radio>\r\n            <i>5$/month</i>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-radio slot=\"end\" (ionSelect)=\"logForm($event)\" value=\"yearly\"></ion-radio>\r\n            <i>50$/year</i>\r\n          </ion-item>\r\n\r\n\r\n        </ion-radio-group>\r\n      </ion-list>\r\n    </ion-card-content>\r\n\r\n  </ion-card>\r\n\r\n  <ion-card *ngIf=\"subscribe === 'active'\">\r\n    <!--<ion-img src=\"../../../assets/images/demo-image.png\"></ion-img>-->\r\n    <ion-card-content>\r\n      <ion-card-header>\r\n        <ion-card-subtitle><b>Subscription type:</b> {{this.type | titlecase}}</ion-card-subtitle>\r\n      </ion-card-header>\r\n      <ion-item>\r\n        <ion-button (click)=\"presentAlert()\">Cancel Subscription</ion-button>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-button (click)=\"showsubpage()\">Edit</ion-button>\r\n      </ion-item>\r\n\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-list style=\"margin: 0; padding: 0;\">\r\n    <ion-list-header color=\"primary\">\r\n      <ion-label style=\"font-weight: bold; letter-spacing: 0;\">{{strings.ST56}}</ion-label>\r\n    </ion-list-header>\r\n  </ion-list>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <!-- Workouts -->\r\n\r\n    <div class=\"tags\" (click)=toggleWorkouts()>\r\n      <h1>{{strings.ST1}}</h1>\r\n      <ion-icon [name]=\"isWorkouts ? 'arrow-forward' : 'arrow-down'\" color=\"primary\" slot=\"end\"></ion-icon>\r\n    </div>\r\n\r\n    <div class=\"animated fadeIn\" [hidden]=\"isWorkouts\">\r\n      <app-workoutsfav></app-workoutsfav>\r\n    </div>\r\n\r\n    <!-- Workouts -->\r\n\r\n    <!-- Posts -->\r\n\r\n    <div class=\"tags\" (click)=togglePosts()>\r\n      <h1>{{strings.ST4}}</h1>\r\n      <ion-icon [name]=\"isPosts ? 'arrow-forward' : 'arrow-down'\" color=\"primary\" slot=\"end\"></ion-icon>\r\n    </div>\r\n\r\n    <div class=\"animated fadeIn\" [hidden]=\"isPosts\">\r\n      <app-postsfav></app-postsfav>\r\n    </div>\r\n\r\n    <!-- Posts -->\r\n\r\n    <!-- Diets -->\r\n\r\n    <div class=\"tags\" (click)=toggleDiets()>\r\n      <h1>{{strings.ST3}}</h1>\r\n      <ion-icon [name]=\"isDiets ? 'arrow-forward' : 'arrow-down'\" color=\"primary\" slot=\"end\"></ion-icon>\r\n    </div>\r\n\r\n    <div class=\"animated fadeIn\" [hidden]=\"isDiets\">\r\n      <app-dietsfav></app-dietsfav>\r\n    </div>\r\n\r\n    <!-- Diets -->\r\n\r\n  </div>\r\n  \r\n</ion-content>"

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

module.exports = ".header-bg {\n  background-image: url('header.jpg');\n  background-position: center;\n  background-size: cover;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.header-bg .text {\n  color: #fff;\n  text-align: center; }\n\n.header-bg .name {\n  color: var(--ion-color-primary);\n  text-align: center;\n  margin-bottom: 9px;\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 16px; }\n\n.header-bg .since {\n  color: #fff;\n  margin-top: 5px;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px; }\n\n.tags {\n  background-color: #f9f9f9;\n  border-left: 3px solid var(--ion-color-primary);\n  padding: 15px;\n  position: relative;\n  margin-bottom: 10px; }\n\n.tags h1 {\n  font-size: 13px;\n  text-transform: uppercase;\n  font-weight: bold;\n  margin: 0; }\n\n.tags ion-icon {\n  position: absolute;\n  right: 14px;\n  top: 11px;\n  font-size: 22px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9DOlxcVXNlcnNcXEhhcmlzaFxcTG9jYWxfZGV2XFxHeW1tYXRlQXBwL3NyY1xcYXBwXFxwYWdlc1xccHJvZmlsZVxccHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQ0FBMEQ7RUFDMUQsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSx5QkFBeUI7RUFDekIsK0NBQStDO0VBQy9DLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsU0FBUSxFQUFBOztBQUdaO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItYmd7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlci1iZyAudGV4dHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyLWJnIC5uYW1le1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmhlYWRlci1iZyAuc2luY2V7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi50YWdze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi50YWdzIGgxe1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOjA7XHJcbn1cclxuXHJcbi50YWdzIGlvbi1pY29ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE0cHg7XHJcbiAgICB0b3A6IDExcHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn0iXX0= */"

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
        this.subscribe = false;
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