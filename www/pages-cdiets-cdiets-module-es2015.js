(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cdiets-cdiets-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cdiets/cdiets.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cdiets/cdiets.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-header class=\"lightheader\" no-border>\r\n  <ion-toolbar mode=\"ios\" class=\"ion-color\" [style.background-color]=\"customColor\">\r\n    <ion-title class=\"ion-text-capitalize\">\r\n        {{title}}\r\n      </ion-title>\r\n            <ion-buttons slot=\"start\">\r\n              <app-backbutton class=\"arrow\"></app-backbutton>\r\n            </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fixed class=\"ion-color\" [style.background-color]=\"customColor\">\r\n\r\n  <app-loading *ngIf=\"isLoading\"></app-loading>\r\n  <app-empty *ngIf=\"diets.length === 0\" [title]=\"strings.ST142\"></app-empty>\r\n\r\n  <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\" *ngFor=\"let item of diets\" [routerLink]=\"['/ddetails', item.diet_id]\" [ngStyle]=\"{'height': height}\">\r\n           <div class=\"cardcategory\" [style.background-image]=\"'url(' + (item.diet_image | image) + ')'\">\r\n               <div class=\"overlay\">\r\n               <div class=\"texts\">\r\n               <h1>{{item.diet_title}}</h1>\r\n               <p><ion-icon name=\"ios-stopwatch\" color=\"light\"></ion-icon>{{item.diet_time}} <ion-icon style=\"margin-left: 8px;\" name=\"ios-flame\" color=\"light\"></ion-icon>{{item.diet_calories}} {{strings.ST45}}</p>\r\n               </div>\r\n             </div>\r\n             </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      \r\n    </ion-grid>\r\n\r\n    \r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/cdiets/cdiets-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/cdiets/cdiets-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CdietsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdietsPageRoutingModule", function() { return CdietsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cdiets_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cdiets.page */ "./src/app/pages/cdiets/cdiets.page.ts");




const routes = [
    {
        path: '',
        component: _cdiets_page__WEBPACK_IMPORTED_MODULE_3__["CdietsPage"]
    }
];
let CdietsPageRoutingModule = class CdietsPageRoutingModule {
};
CdietsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CdietsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/cdiets/cdiets.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/cdiets/cdiets.module.ts ***!
  \***********************************************/
/*! exports provided: CdietsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdietsPageModule", function() { return CdietsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cdiets_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cdiets-routing.module */ "./src/app/pages/cdiets/cdiets-routing.module.ts");
/* harmony import */ var _cdiets_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cdiets.page */ "./src/app/pages/cdiets/cdiets.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









let CdietsPageModule = class CdietsPageModule {
};
CdietsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _cdiets_routing_module__WEBPACK_IMPORTED_MODULE_5__["CdietsPageRoutingModule"]
        ],
        declarations: [_cdiets_page__WEBPACK_IMPORTED_MODULE_6__["CdietsPage"]]
    })
], CdietsPageModule);



/***/ }),

/***/ "./src/app/pages/cdiets/cdiets.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/cdiets/cdiets.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  height: 100%;\n  max-width: 95%;\n  margin: 20px auto; }\n\nion-content {\n  background: #191919; }\n\nion-row {\n  height: 100%; }\n\n.cardcategory {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  border-radius: 8px; }\n\n.cardcategory .overlay {\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.75)));\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 100%);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  text-align: left;\n  border-radius: 8px; }\n\n.cardcategory .texts {\n  padding: 15px 15px 15px 0;\n  position: relative;\n  top: 4.8em; }\n\n.cardcategory .texts h1 {\n  color: white;\n  margin: 0;\n  font-weight: bold;\n  font-size: 14px;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.cardcategory .texts p {\n  color: white;\n  font-size: 12px;\n  display: -webkit-box;\n  display: flex;\n  margin-top: 7px;\n  text-transform: capitalize;\n  letter-spacing: 0;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-right: 5px; }\n\n.cardcategory .texts p ion-icon {\n  margin-right: 4px;\n  font-size: 15px; }\n\n.ion-page .in-toolbar .toolbar-background {\n  background: #212121 !important; }\n\n.ion-text-capitalize {\n  width: 100%;\n  color: #f7474f;\n  font-family: Proxima-bold;\n  font-size: 20px !important;\n  text-transform: none !important; }\n\n.in-toolbar {\n  padding: 30px 0 10px 0 !important;\n  background: #212121; }\n\n.item-native {\n  background-color: #454545; }\n\nion-col {\n  margin-bottom: 4em;\n  height: 221px !important; }\n\n.sc-ion-textarea-md-h {\n  margin-top: 2px; }\n\n.arrow {\n  color: #f7474f !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2RpZXRzL0M6XFxVc2Vyc1xcSGFyaXNoXFxMb2NhbF9kZXZcXEd5bW1hdGVBcHAvc3JjXFxhcHBcXHBhZ2VzXFxjZGlldHNcXGNkaWV0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUd0QjtFQUdJLDRHQUErRTtFQUEvRSxxRkFBK0U7RUFDL0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXlCO1VBQXpCLHlCQUF5QjtFQUN6Qix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFpQjtFQUFqQiw2QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSx5QkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFHZDtFQUNJLFlBQVk7RUFDWixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxZQUFZO0VBQ1osZUFBZTtFQUNmLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHbkI7RUFHUSw4QkFBNkIsRUFBQTs7QUFLbkM7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsK0JBQStCLEVBQUE7O0FBRS9CO0VBQ0ksaUNBQWlDO0VBQ2pDLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLHlCQUF3QixFQUFBOztBQUc1QjtFQUNELGtCQUFrQjtFQUNsQix3QkFBd0IsRUFBQTs7QUFHdkI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0kseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jZGlldHMvY2RpZXRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlke1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTkxOTE5O1xyXG59XHJcblxyXG5pb24tcm93e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZGNhdGVnb3J5e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uY2FyZGNhdGVnb3J5IC5vdmVybGF5e1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgwLDAsMCwwKSAwJSwgcmdiYSgwLDAsMCwwLjc1KSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIHJnYmEoMCwwLDAsMCkgMCUscmdiYSgwLDAsMCwwLjc1KSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICByZ2JhKDAsMCwwLDApIDAlLHJnYmEoMCwwLDAsMC43NSkgMTAwJSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5jYXJkY2F0ZWdvcnkgLnRleHRze1xyXG4gICAgcGFkZGluZzogIDE1cHggMTVweCAxNXB4IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDQuOGVtO1xyXG59XHJcblxyXG4uY2FyZGNhdGVnb3J5IC50ZXh0cyBoMXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4uY2FyZGNhdGVnb3J5IC50ZXh0cyBwe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDdweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5jYXJkY2F0ZWdvcnkgLnRleHRzIHAgaW9uLWljb257XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLmlvbi1wYWdlIHtcclxuICAgIC5pbi10b29sYmFyIHtcclxuICAgICAgLnRvb2xiYXItYmFja2dyb3VuZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDojMjEyMTIxICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC1jYXBpdGFsaXple1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogI2Y3NDc0ZjtcclxuICAgIGZvbnQtZmFtaWx5OiBQcm94aW1hLWJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuaW4tdG9vbGJhcntcclxuICAgICAgICBwYWRkaW5nOiAzMHB4IDAgMTBweCAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzIxMjEyMTtcclxuICAgIH1cclxuXHJcbiAgICAuaXRlbS1uYXRpdmV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojNDU0NTQ1O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jb2x7XHJcbiAgIG1hcmdpbi1ib3R0b206IDRlbTtcclxuICAgaGVpZ2h0OiAyMjFweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2MtaW9uLXRleHRhcmVhLW1kLWh7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hcnJvd3tcclxuICAgICAgICBjb2xvcjogI2Y3NDc0ZiAhaW1wb3J0YW50O1xyXG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/cdiets/cdiets.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/cdiets/cdiets.page.ts ***!
  \*********************************************/
/*! exports provided: CdietsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdietsPage", function() { return CdietsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");






let CdietsPage = class CdietsPage {
    constructor(dataService, router, route, plt) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.plt = plt;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_5__["strings"];
        this.diets = [];
        this.isLoading = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = true;
            this.route.params.subscribe(data => {
                this.id = data.id;
                this.title = data.title;
                this.getDiets();
                if (!this.id) {
                    this.goBack();
                }
            });
        });
    }
    goBack() {
        this.router.navigate(['/home']);
    }
    getDiets() {
        this.dataService.getDataDietsByCategory(this.id)
            .subscribe(resp => {
            this.diets = resp;
            if (this.diets.length === 1) {
                this.height = '167.273px';
            }
            else if (this.diets.length === 3 || this.diets.length === 2) {
                this.height = 'inherit !important';
            }
            else if (this.diets.length >= 4) {
                this.height = this.plt.height() / 4.4 + 'px';
            }
            this.isLoading = false;
        });
    }
};
CdietsPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
CdietsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cdiets',
        template: __webpack_require__(/*! raw-loader!./cdiets.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cdiets/cdiets.page.html"),
        styles: [__webpack_require__(/*! ./cdiets.page.scss */ "./src/app/pages/cdiets/cdiets.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
], CdietsPage);



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
//# sourceMappingURL=pages-cdiets-cdiets-module-es2015.js.map