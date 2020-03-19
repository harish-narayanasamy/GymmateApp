(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pdetails-pdetails-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/pdetails/pdetails.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/pdetails/pdetails.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\r\n    <ion-toolbar mode=\"ios\" class=\"ion-color\" [style.background-color]=\"customColor\">\r\n      <ion-title class=\"ion-text-capitalize\">\r\n            {{strings.ST130}}\r\n          </ion-title>\r\n        <ion-buttons slot=\"start\">\r\n            <app-backbutton class=\"arrow\"></app-backbutton>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-content  class=\"ion-color ion-no-padding\" [style.background-color]=\"customColor\">\r\n      <app-loading *ngIf=\"isLoading\"></app-loading>\r\n\r\n      <ion-grid class=\"ion-no-padding\">\r\n          <ion-row class=\"header-bg\" [ngStyle]=\"{'height': innerHeight}\">\r\n            <div class=\"text\">\r\n            <p class=\"name\">{{post.post_title}}</p>\r\n            <div class=\"author\">\r\n            <img src=\"./assets/images/avatar.png\" class=\"author-img\"/>   \r\n            <p class=\"author-info\">Sanjay Tarana - Fitness World</p>\r\n            </div>\r\n            <app-postrating *ngIf=\"rating > 0\" [value]=\"rating\" color=\"rgba(255, 255, 255, 0.3)\" [size]=\"18\"></app-postrating>\r\n          </div>\r\n      </ion-row>\r\n      </ion-grid>\r\n      \r\n        <div class=\"ion-padding\">\r\n        <app-html [htmlcontent]=\"post.post_description\" class=\"test\" [style.font-size]=\"fontVariable\"></app-html>\r\n        </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/pdetails/pdetails-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/pdetails/pdetails-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PdetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdetailsPageRoutingModule", function() { return PdetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pdetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pdetails.page */ "./src/app/pages/pdetails/pdetails.page.ts");




const routes = [
    {
        path: '',
        component: _pdetails_page__WEBPACK_IMPORTED_MODULE_3__["PdetailsPage"]
    }
];
let PdetailsPageRoutingModule = class PdetailsPageRoutingModule {
};
PdetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PdetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/pdetails/pdetails.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/pdetails/pdetails.module.ts ***!
  \***************************************************/
/*! exports provided: PdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdetailsPageModule", function() { return PdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pdetails-routing.module */ "./src/app/pages/pdetails/pdetails-routing.module.ts");
/* harmony import */ var _pdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pdetails.page */ "./src/app/pages/pdetails/pdetails.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









let PdetailsPageModule = class PdetailsPageModule {
};
PdetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _pdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["PdetailsPageRoutingModule"]
        ],
        declarations: [_pdetails_page__WEBPACK_IMPORTED_MODULE_6__["PdetailsPage"]]
    })
], PdetailsPageModule);



/***/ }),

/***/ "./src/app/pages/pdetails/pdetails.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/pdetails/pdetails.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-bg {\n  background-position: center;\n  background-size: cover;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: auto !important; }\n\n.header-bg .text {\n  color: #fff;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 20px 0 0 0;\n  max-width: 90%;\n  margin: 0 auto; }\n\n.header-bg .name {\n  color: #ffffff;\n  text-align: left;\n  margin: 0;\n  font-family: 'Proxima-bold';\n  font-size: 22px;\n  margin-bottom: 6px;\n  line-height: 26px;\n  padding-left: 0px; }\n\n.header-bg .time {\n  color: var(--ion-color-primary);\n  margin-bottom: 5px;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 14px;\n  font-weight: bold;\n  margin-top: 0px; }\n\n.cols {\n  background-color: var(--ion-color-primary);\n  padding: 10px 24px; }\n\n.col-text {\n  color: white;\n  font-size: 14px;\n  text-transform: uppercase;\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex; }\n\n.cols ion-icon {\n  padding: 0 5px; }\n\n.date-category {\n  border-top: 1px solid #eee;\n  border-bottom: 1px solid #eee;\n  padding: 20px; }\n\n.date-category p {\n  margin: 0;\n  font-size: 13px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-transform: uppercase;\n  padding-right: 10px;\n  color: #9e9e9e; }\n\n.date-category ion-icon {\n  margin-right: 5px;\n  font-size: 16px; }\n\n.ion-page .in-toolbar .toolbar-background {\n  background: #212121 !important; }\n\nion-content {\n  background: #191919; }\n\nion-header {\n  background-color: #212121;\n  height: 100%;\n  padding: 10px 0 10px 0 !important;\n  height: auto; }\n\n.ion-text-capitalize {\n  width: 100%;\n  color: #f7474f;\n  font-family: Proxima-bold;\n  font-size: 20px !important;\n  text-transform: none !important; }\n\n.author-img {\n  width: 25px;\n  height: 25px;\n  border-radius: 20px; }\n\n.author {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: start;\n          justify-content: flex-start; }\n\n.author p, .ion-no-padding p {\n  margin: 0px;\n  padding: 3px 10px;\n  font-family: 'Proxima-light';\n  font-size: 14px;\n  line-height: 18px;\n  color: #fafafa;\n  text-align: left; }\n\napp-html {\n  color: #ffffff !important;\n  font-family: 'Nunito' !important;\n  font-size: 18px !important;\n  line-height: 22px !important; }\n\n.ion-padding {\n  padding-top: var(--ion-padding, 5px) !important; }\n\n.arrow {\n  color: #f7474f !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGRldGFpbHMvQzpcXFVzZXJzXFxIYXJpc2hcXExvY2FsX2RldlxcR3ltbWF0ZUFwcC9zcmNcXGFwcFxccGFnZXNcXHBkZXRhaWxzXFxwZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUduQjtFQUNJLDBDQUEwQztFQUMxQyxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxZQUFZO0VBQ1osZUFBZTtFQUNmLHlCQUF5QjtFQUN6Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLG9CQUFhO0VBQWIsYUFBYSxFQUFBOztBQUVqQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxTQUFTO0VBQ1QsZUFBZTtFQUNmLDJCQUFvQjtFQUFwQixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHbkI7RUFHUSw4QkFBOEIsRUFBQTs7QUFLcEM7RUFDRSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxZQUFhLEVBQUE7O0FBR2pCO0VBQ0ksV0FBVztFQUNYLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLCtCQUErQixFQUFBOztBQUduQztFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsdUJBQTJCO1VBQTNCLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUduQjtFQUNHLHlCQUF5QjtFQUN6QixnQ0FBZ0M7RUFDaEMsMEJBQTBCO0VBQzFCLDRCQUE0QixFQUFBOztBQUdoQztFQUNJLCtDQUErQyxFQUFBOztBQUduRDtFQUNJLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGRldGFpbHMvcGRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1iZ3tcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlYWRlci1iZyAudGV4dHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMjBweCAwIDAgMDtcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5oZWFkZXItYmcgLm5hbWV7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogJ1Byb3hpbWEtYm9sZCc7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWJnIC50aW1le1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLmNvbHN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDI0cHg7XHJcbiAgICB9XHJcblxyXG4uY29sLXRleHR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmNvbHMgaW9uLWljb257XHJcbiAgICBwYWRkaW5nOiAwIDVweDtcclxufVxyXG5cclxuLmRhdGUtY2F0ZWdvcnl7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmRhdGUtY2F0ZWdvcnkgcHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBjb2xvcjogIzllOWU5ZTtcclxufVxyXG5cclxuLmRhdGUtY2F0ZWdvcnkgaW9uLWljb257XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmlvbi1wYWdlIHtcclxuICAgIC5pbi10b29sYmFyIHtcclxuICAgICAgLnRvb2xiYXItYmFja2dyb3VuZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzIxMjEyMSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpb24tY29udGVudHtcclxuICAgIGJhY2tncm91bmQ6ICMxOTE5MTk7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyMTIxMjEgO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweCAwIDEwcHggMCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBhdXRvIDtcclxufVxyXG5cclxuLmlvbi10ZXh0LWNhcGl0YWxpemV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjZjc0NzRmO1xyXG4gICAgZm9udC1mYW1pbHk6IFByb3hpbWEtYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbi5hdXRob3ItaW1ne1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59ICAgIFxyXG5cclxuLmF1dGhvcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uYXV0aG9yIHAsIC5pb24tbm8tcGFkZGluZyBwe1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUHJveGltYS1saWdodCc7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGNvbG9yOiAjZmFmYWZhO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuIGFwcC1odG1se1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJyAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLXBhZGRpbmd7XHJcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDVweCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFycm93e1xyXG4gICAgY29sb3I6ICNmNzQ3NGYgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/pdetails/pdetails.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/pdetails/pdetails.page.ts ***!
  \*************************************************/
/*! exports provided: PdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdetailsPage", function() { return PdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");
/* harmony import */ var _components_postcomments_postcomments_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/postcomments/postcomments.component */ "./src/app/components/postcomments/postcomments.component.ts");
/* harmony import */ var _components_addcomment_addcomment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/addcomment/addcomment.component */ "./src/app/components/addcomment/addcomment.component.ts");
/* harmony import */ var _services_favorite_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/favorite.service */ "./src/app/services/favorite.service.ts");
/* harmony import */ var _services_admob_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/admob.service */ "./src/app/services/admob.service.ts");












let PdetailsPage = class PdetailsPage {
    constructor(dataService, router, route, plt, modalCtrl, dataFavorite, admob) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.plt = plt;
        this.modalCtrl = modalCtrl;
        this.dataFavorite = dataFavorite;
        this.admob = admob;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_5__["strings"];
        this.post = {};
        this.isLoading = false;
        this.rating = 0;
        this.count = 0;
        this.postcomments = [];
        this.icon = 'star-outline';
    }
    ngOnInit() {
        this.admob.BannerAd();
    }
    // tslint:disable-next-line: use-lifecycle-interface
    ngOnDestroy() {
        this.admob.HideBannerAd();
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = true;
            this.innerHeight = this.plt.height() / 3 + 'px';
            this.route.params.subscribe(data => {
                this.id = data.id;
                this.getDetails();
                this.dataFavorite.existPost(this.id)
                    .then(exist => this.icon = (exist) ? 'star' : 'star-outline');
                const commentsRef = firebase_app__WEBPACK_IMPORTED_MODULE_6__["database"]().ref(`postComments/${this.id}`);
                commentsRef.on('child_added', snapshot => {
                    commentsRef.on('value', snap => {
                        const comments = [];
                        snap.forEach(row => {
                            comments.push(Number(row.val().rating));
                        });
                        this.rating = comments.reduce((previous, current) => previous + current, 0) / comments.length;
                        this.count = comments.length;
                    });
                });
                if (!this.id) {
                    this.goBack();
                }
            });
        });
    }
    goBack() {
        this.router.navigate(['/home']);
    }
    showComments(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _components_postcomments_postcomments_component__WEBPACK_IMPORTED_MODULE_8__["PostcommentsComponent"],
                componentProps: {
                    id
                }
            });
            modal.present();
        });
    }
    addComment(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _components_addcomment_addcomment_component__WEBPACK_IMPORTED_MODULE_9__["AddcommentComponent"],
                componentProps: {
                    id
                }
            });
            modal.present();
        });
    }
    getDetails() {
        this.dataService.getDataPostById(this.id)
            .subscribe(resp => {
            this.post = resp[0];
            this.isLoading = false;
        });
    }
    addToFavorites() {
        const post = {
            id: this.post.post_id,
            title: this.post.post_title,
            image: this.post.post_image,
        };
        const exist = this.dataFavorite.savePost(post);
        this.icon = (exist) ? 'star' : 'star-outline';
    }
};
PdetailsPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_favorite_service__WEBPACK_IMPORTED_MODULE_10__["FavoriteService"] },
    { type: _services_admob_service__WEBPACK_IMPORTED_MODULE_11__["AdmobService"] }
];
PdetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pdetails',
        template: __webpack_require__(/*! raw-loader!./pdetails.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/pdetails/pdetails.page.html"),
        styles: [__webpack_require__(/*! ./pdetails.page.scss */ "./src/app/pages/pdetails/pdetails.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _services_favorite_service__WEBPACK_IMPORTED_MODULE_10__["FavoriteService"],
        _services_admob_service__WEBPACK_IMPORTED_MODULE_11__["AdmobService"]])
], PdetailsPage);



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
//# sourceMappingURL=pages-pdetails-pdetails-module-es2015.js.map