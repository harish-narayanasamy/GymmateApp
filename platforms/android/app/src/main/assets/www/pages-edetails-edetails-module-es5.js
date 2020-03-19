(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edetails-edetails-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/edetails/edetails.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/edetails/edetails.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\r\n  <ion-toolbar mode=\"ios\">\r\n      <ion-title class=\"ion-text-capitalize\">\r\n        {{strings.ST115}}\r\n      </ion-title>\r\n            <ion-buttons slot=\"start\">\r\n              <app-backbutton color=\"#f7474f\"></app-backbutton>\r\n            </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n  <app-loading *ngIf=\"isLoading\"></app-loading>\r\n\r\n  <div class=\"details\">\r\n\r\n  <img [src]=\"exercise.exercise_image | image\">\r\n\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n        <ion-col size=\"4\" class=\"col-icon\">\r\n        <ion-icon name=\"md-list\" color=\"primary\"></ion-icon>\r\n        <p class=\"name\">{{strings.ST97}}</p>\r\n        <p class=\"value\">{{exercise.exercise_sets}}</p>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" class=\"col-icon\">\r\n          <ion-icon name=\"md-sync\" color=\"primary\"></ion-icon>\r\n          <p class=\"name\">{{strings.ST98}}</p>\r\n          <p class=\"value\">{{exercise.exercise_reps}}</p>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\" class=\"col-icon\">\r\n            <ion-icon name=\"md-stopwatch\" color=\"primary\"></ion-icon>\r\n            <p class=\"name\">{{strings.ST99}}</p>\r\n            <p class=\"value\">{{exercise.exercise_rest}}</p>\r\n        </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n    <div class=\"tags\" (click)=toggleInfo()>\r\n        <h1>{{strings.ST112}}</h1>\r\n        <ion-icon [name]=\"isInfoHidden ? 'arrow-forward' : 'arrow-down'\" color=\"primary\" slot=\"end\"></ion-icon>\r\n      </div>\r\n    \r\n      <div class=\"animated fadeIn subinfo\" [hidden]=\"isInfoHidden\">\r\n      <p class=\"title\">{{strings.ST111}}</p>\r\n      <p class=\"subtitle\">{{exercise.exercise_title}}</p>\r\n\r\n      <p class=\"title\">{{strings.ST17}}</p>\r\n      <p class=\"subtitle\">{{exercise.level_title}}</p>\r\n\r\n      </div> \r\n    \r\n      <div class=\"tags\" (click)=toggleInstru()>\r\n          <h1>{{strings.ST113}}</h1>\r\n          <ion-icon [name]=\"isInstruHidden ? 'arrow-forward' : 'arrow-down'\" color=\"primary\" slot=\"end\"></ion-icon>\r\n        </div>\r\n      \r\n        <div class=\"animated fadeIn subinfo\" [hidden]=\"isInstruHidden\">\r\n        <app-html [htmlcontent]=\"exercise.exercise_instructions\"></app-html>\r\n        </div> \r\n\r\n\r\n        <div class=\"tags\" (click)=toggleTips()>\r\n            <h1>{{strings.ST114}}</h1>\r\n            <ion-icon [name]=\"isTipsHidden ? 'arrow-forward' : 'arrow-down'\" color=\"primary\" slot=\"end\"></ion-icon>\r\n          </div>\r\n        \r\n          <div class=\"animated fadeIn subinfo\" [hidden]=\"isTipsHidden\">\r\n          <app-html [htmlcontent]=\"exercise.exercise_tips\"></app-html>\r\n          </div> \r\n\r\n</div>\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer mode=\"ios\" no-border>\r\n    <ion-button (click)=\"play()\" class=\"primary ion-text-uppercase ion-text-bold\" mode=\"ios\" expand=\"block\">\r\n      {{strings.ST102}}\r\n        <ion-icon slot=\"start\" name=\"md-arrow-dropright-circle\"></ion-icon>\r\n    </ion-button>\r\n  </ion-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/edetails/edetails-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/edetails/edetails-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: EdetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdetailsPageRoutingModule", function() { return EdetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edetails.page */ "./src/app/pages/edetails/edetails.page.ts");




var routes = [
    {
        path: '',
        component: _edetails_page__WEBPACK_IMPORTED_MODULE_3__["EdetailsPage"]
    }
];
var EdetailsPageRoutingModule = /** @class */ (function () {
    function EdetailsPageRoutingModule() {
    }
    EdetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EdetailsPageRoutingModule);
    return EdetailsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/edetails/edetails.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/edetails/edetails.module.ts ***!
  \***************************************************/
/*! exports provided: EdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdetailsPageModule", function() { return EdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edetails-routing.module */ "./src/app/pages/edetails/edetails-routing.module.ts");
/* harmony import */ var _edetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edetails.page */ "./src/app/pages/edetails/edetails.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









var EdetailsPageModule = /** @class */ (function () {
    function EdetailsPageModule() {
    }
    EdetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _edetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["EdetailsPageRoutingModule"]
            ],
            declarations: [_edetails_page__WEBPACK_IMPORTED_MODULE_6__["EdetailsPage"]]
        })
    ], EdetailsPageModule);
    return EdetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/edetails/edetails.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/edetails/edetails.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".details img {\n  width: 100%;\n  display: block;\n  max-width: 340px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 15px;\n  margin-top: 15px; }\n\n.details {\n  margin: 14px; }\n\nion-grid {\n  margin-bottom: 20px; }\n\np {\n  font-size: 14px;\n  margin: 0; }\n\n.subinfo {\n  padding: 20px; }\n\n.title {\n  margin-bottom: 8px;\n  font-weight: bold; }\n\n.subtitle {\n  margin-bottom: 18px; }\n\n.col-icon {\n  text-align: center; }\n\n.col-icon ion-icon {\n  font-size: 38px;\n  display: block;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 14px; }\n\n.col-icon .name {\n  margin: 0;\n  font-weight: bold;\n  font-size: 14px;\n  margin-bottom: 7px; }\n\n.col-icon .value {\n  margin: 0;\n  font-size: 14px; }\n\n.tags {\n  background-color: #f9f9f9;\n  border-left: 3px solid var(--ion-color-primary);\n  padding: 15px;\n  position: relative;\n  margin-bottom: 10px; }\n\n.tags h1 {\n  font-size: 13px;\n  text-transform: uppercase;\n  font-weight: bold;\n  margin: 0; }\n\n.tags ion-icon {\n  position: absolute;\n  right: 14px;\n  top: 11px;\n  font-size: 22px; }\n\nion-footer {\n  padding: 9px 11px; }\n\nion-footer ion-button {\n  font-size: 14px;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRldGFpbHMvQzpcXFVzZXJzXFxIYXJpc2hcXExvY2FsX2RldlxcR3ltbWF0ZUFwcC9zcmNcXGFwcFxccGFnZXNcXGVkZXRhaWxzXFxlZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksZUFBZTtFQUNmLFNBQVMsRUFBQTs7QUFHYjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDQSxTQUFTO0VBQ1QsZUFBZSxFQUFBOztBQUlmO0VBQ0kseUJBQXlCO0VBQ3pCLCtDQUErQztFQUMvQyxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFNBQVEsRUFBQTs7QUFHWjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFFQSxlQUFlO0VBQ2YsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lZGV0YWlscy9lZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlscyBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOiAzNDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5kZXRhaWxze1xyXG4gICAgbWFyZ2luOiAxNHB4O1xyXG59XHJcblxyXG5pb24tZ3JpZHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5zdWJpbmZve1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZXtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbn1cclxuXHJcbi5jb2wtaWNvbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbC1pY29uIGlvbi1pY29ue1xyXG4gICAgZm9udC1zaXplOiAzOHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbn1cclxuXHJcbi5jb2wtaWNvbiAubmFtZXtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG59XHJcblxyXG4uY29sLWljb24gLnZhbHVle1xyXG5tYXJnaW46IDA7XHJcbmZvbnQtc2l6ZTogMTRweDtcclxuICAgIFxyXG59XHJcblxyXG4udGFnc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4udGFncyBoMXtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjowO1xyXG59XHJcblxyXG4udGFncyBpb24taWNvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxNHB4O1xyXG4gICAgdG9wOiAxMXB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG5pb24tZm9vdGVye1xyXG4gICAgcGFkZGluZzogOXB4IDExcHg7XHJcbn1cclxuaW9uLWZvb3RlciBpb24tYnV0dG9ue1xyXG5cclxuZm9udC1zaXplOiAxNHB4O1xyXG5mb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/edetails/edetails.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/edetails/edetails.page.ts ***!
  \*************************************************/
/*! exports provided: EdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdetailsPage", function() { return EdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "./node_modules/@ionic-native/streaming-media/ngx/index.js");
/* harmony import */ var _services_admob_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/admob.service */ "./src/app/services/admob.service.ts");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");








var EdetailsPage = /** @class */ (function () {
    function EdetailsPage(dataService, router, route, streamingMedia, admob, screenOrientation) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.streamingMedia = streamingMedia;
        this.admob = admob;
        this.screenOrientation = screenOrientation;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_4__["strings"];
        this.exercise = {};
        this.isLoading = false;
        this.isInfoHidden = true;
        this.isInstruHidden = true;
        this.isTipsHidden = true;
        this.orientation = 'landscape';
    }
    EdetailsPage.prototype.ngOnInit = function () {
        this.admob.HideBannerAd();
        if (this.orientation === 'landscape') {
            this.setPortrait();
        }
    };
    EdetailsPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.isLoading = true;
                this.route.params.subscribe(function (data) {
                    _this.id = data.id;
                    _this.getDetails();
                    if (!_this.id) {
                        _this.goBack();
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    EdetailsPage.prototype.goBack = function () {
        this.router.navigate(['/home']);
    };
    EdetailsPage.prototype.toggleInfo = function () {
        this.isInfoHidden = !this.isInfoHidden;
    };
    EdetailsPage.prototype.toggleInstru = function () {
        this.isInstruHidden = !this.isInstruHidden;
    };
    EdetailsPage.prototype.toggleTips = function () {
        this.isTipsHidden = !this.isTipsHidden;
    };
    EdetailsPage.prototype.getDetails = function () {
        var _this = this;
        this.dataService.getDataExerciseById(this.id)
            .subscribe(function (resp) {
            _this.exercise = resp[0];
            _this.isLoading = false;
        });
    };
    EdetailsPage.prototype.play = function () {
        var options = {
            successCallback: function () { console.log('Video played'); },
            errorCallback: function (e) { console.log('Error streaming'); },
            orientation: 'landscape',
            shouldAutoClose: true,
            controls: true
        };
        // tslint:disable-next-line: max-line-length
        this.streamingMedia.playVideo('https://firebasestorage.googleapis.com/v0/b/six-pack-app.appspot.com/o/video.mp4?alt=media&token=453512dd-f079-4355-a325-92a9b2f7e465', options);
    };
    EdetailsPage.prototype.setPortrait = function () {
        // set to portrait
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    };
    EdetailsPage.ctorParameters = function () { return [
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_5__["StreamingMedia"] },
        { type: _services_admob_service__WEBPACK_IMPORTED_MODULE_6__["AdmobService"] },
        { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__["ScreenOrientation"] }
    ]; };
    EdetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edetails',
            template: __webpack_require__(/*! raw-loader!./edetails.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/edetails/edetails.page.html"),
            styles: [__webpack_require__(/*! ./edetails.page.scss */ "./src/app/pages/edetails/edetails.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_5__["StreamingMedia"],
            _services_admob_service__WEBPACK_IMPORTED_MODULE_6__["AdmobService"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__["ScreenOrientation"]])
    ], EdetailsPage);
    return EdetailsPage;
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
//# sourceMappingURL=pages-edetails-edetails-module-es5.js.map