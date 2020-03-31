(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bodyparts-bodyparts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/bodyparts/bodyparts.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/bodyparts/bodyparts.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\r\n  <ion-toolbar mode=\"ios\" class=\"ion-color\" [style.background-color]=\"customColor\">\r\n      <ion-title class=\"ion-text-capitalize\">\r\n        {{strings.ST37}}\r\n      </ion-title>\r\n            <ion-buttons slot=\"start\">\r\n              <app-backbutton class=\"arrow\"></app-backbutton>\r\n            </ion-buttons>\r\n            <ion-buttons slot=\"end\">\r\n              <ion-button  slot=\"start\" [routerLink]=\"['/tabs/tab1']\">\r\n                <img src=\"./assets/images/close.png\" class=\"close-img\"/> \r\n                </ion-button>\r\n            </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fixed class=\"ion-color\" [style.background-color]=\"customColor\">\r\n\r\n  <app-loading *ngIf=\"isLoading\"></app-loading>\r\n  <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col *ngFor=\"let item of bodyparts\" size=\"6\" [routerLink]=\"['/ebodyparts', item.bodypart_id, item.bodypart_title]\" [ngStyle]=\"{'height': height}\">\r\n\r\n \r\n          <div class=\"cardcategory\" [style.background-image]=\"'url(' + (item.bodypart_image | image) + ')'\">\r\n            <div class=\"overlay\">\r\n            <div class=\"texts\">\r\n            <h1>{{item.bodypart_title}}</h1>\r\n            </div>\r\n          </div>\r\n          </div>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/bodyparts/bodyparts-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/bodyparts/bodyparts-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: BodypartsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodypartsPageRoutingModule", function() { return BodypartsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bodyparts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bodyparts.page */ "./src/app/pages/bodyparts/bodyparts.page.ts");




const routes = [
    {
        path: '',
        component: _bodyparts_page__WEBPACK_IMPORTED_MODULE_3__["BodypartsPage"]
    }
];
let BodypartsPageRoutingModule = class BodypartsPageRoutingModule {
};
BodypartsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BodypartsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/bodyparts/bodyparts.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/bodyparts/bodyparts.module.ts ***!
  \*****************************************************/
/*! exports provided: BodypartsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodypartsPageModule", function() { return BodypartsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bodyparts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bodyparts-routing.module */ "./src/app/pages/bodyparts/bodyparts-routing.module.ts");
/* harmony import */ var _bodyparts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bodyparts.page */ "./src/app/pages/bodyparts/bodyparts.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









let BodypartsPageModule = class BodypartsPageModule {
};
BodypartsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _bodyparts_routing_module__WEBPACK_IMPORTED_MODULE_5__["BodypartsPageRoutingModule"]
        ],
        declarations: [_bodyparts_page__WEBPACK_IMPORTED_MODULE_6__["BodypartsPage"]]
    })
], BodypartsPageModule);



/***/ }),

/***/ "./src/app/pages/bodyparts/bodyparts.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/bodyparts/bodyparts.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  height: 100%;\n  padding: 15px 8px !important;\n  height: auto; }\n\nion-content {\n  background: #191919; }\n\nion-row {\n  height: 100%; }\n\n.cardcategory {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  border-radius: 8px; }\n\n.cardcategory .overlay {\n  background: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  text-align: left;\n  border-radius: 8px; }\n\n.cardcategory .texts:before {\n  content: \"\";\n  background: var(--ion-color-primary);\n  height: 3px;\n  display: block;\n  width: 40px;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  top: 0;\n  margin-bottom: 10px;\n  display: none; }\n\n.cardcategory .texts {\n  padding-bottom: 15px;\n  text-align: center;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  position: relative;\n  height: 20%;\n  bottom: 40%;\n  left: 10%; }\n\n.cardcategory .texts h1 {\n  color: white;\n  margin: 0;\n  font-size: 30px;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 30px;\n  letter-spacing: 1px;\n  font-family: 'Gilroy-blacktalic'; }\n\nion-col {\n  -webkit-box-flex: 0 !important;\n          flex: 0 0 calc(calc(12 / var(--ion-grid-columns, 12)) * 90%) !important;\n  width: calc(calc(12 / var(--ion-grid-columns, 12)) * 90%) !important;\n  max-width: calc(calc(12 / var(--ion-grid-columns, 12)) * 90%) !important;\n  max-height: 135px;\n  min-height: 135px;\n  margin: 5px auto;\n  padding-left: 0px;\n  padding-right: 0px; }\n\n.ion-page .in-toolbar .toolbar-background {\n  background: transparent !important; }\n\n.ion-text-capitalize {\n  width: 100%;\n  color: #f7474f;\n  font-family: Proxima-bold;\n  font-size: 20px !important;\n  text-transform: none !important; }\n\n.search-bar {\n  max-width: 90%;\n  margin: 20px auto 10px auto;\n  height: 40px;\n  border-radius: 8px;\n  background-color: #454545;\n  color: #979797;\n  display: -webkit-box;\n  display: flex; }\n\n.item-native {\n  background-color: #454545; }\n\n.in-toolbar {\n  padding: 30px 0 0px 0 !important;\n  background: #191919; }\n\n.ios-search {\n  padding-right: 5px;\n  margin-bottom: 7px; }\n\n.button-solid {\n  width: 100% !important;\n  margin: 0px !important;\n  background-color: #F7474F;\n  height: 80px;\n  font-size: 18px;\n  font-weight: bold;\n  padding-bottom: 21px; }\n\n.filter {\n  max-width: 25px; }\n\nion-textarea {\n  margin-top: 0px !important; }\n\n.arrow {\n  color: #f7474f !important; }\n\n.close-img {\n  max-width: 16px;\n  max-height: 16px; }\n\n@media only screen and (max-width: 320px) {\n  .cardcategory .texts h1 {\n    font-size: 25px;\n    line-height: 30px; } }\n\n@media only screen and (max-width: 260px) {\n  .cardcategory .texts h1 {\n    font-size: 22px;\n    line-height: 35px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYm9keXBhcnRzL0M6XFxVc2Vyc1xcSGFyaXNoXFxMb2NhbF9kZXZcXEd5bW1hdGVBcHAvc3JjXFxhcHBcXHBhZ2VzXFxib2R5cGFydHNcXGJvZHlwYXJ0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLFlBQWEsRUFBQTs7QUFHakI7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSw4QkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXlCO1VBQXpCLHlCQUF5QjtFQUN6Qix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFpQjtFQUFqQiw2QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixtQkFBbUI7RUFDbkIsYUFBYSxFQUFBOztBQUdqQjtFQUNJLG9CQUFvQjtFQUVwQixrQkFBa0I7RUFFbEIsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxTQUFTLEVBQUE7O0FBR2I7RUFDSSxZQUFZO0VBQ1osU0FBUztFQUNULGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFFbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQ0FBZ0MsRUFBQTs7QUFHcEM7RUFDSSw4QkFBdUU7VUFBdkUsdUVBQXVFO0VBQ3ZFLG9FQUFvRTtFQUNwRSx3RUFBd0U7RUFDeEUsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNwQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUduQjtFQUdRLGtDQUFrQyxFQUFBOztBQUt4QztFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQiwrQkFBK0IsRUFBQTs7QUFHL0I7RUFDSSxjQUFjO0VBQ2QsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXdCO0VBQ3hCLGNBQWM7RUFDZCxvQkFBYTtFQUFiLGFBQWEsRUFBQTs7QUFHakI7RUFDSSx5QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSxnQ0FBZ0M7RUFDaEMsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUloQjtFQUNJLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFvQixFQUFBOztBQUd4QjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSwwQkFBMEIsRUFBQTs7QUFJcEM7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0k7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCLEVBQUEsRUFDcEI7O0FBR0w7RUFDSTtJQUNJLGVBQWU7SUFDZixpQkFBaUIsRUFBQSxFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JvZHlwYXJ0cy9ib2R5cGFydHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWR7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDhweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBhdXRvIDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTkxOTE5O1xyXG59XHJcblxyXG5pb24tcm93e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZGNhdGVnb3J5e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uY2FyZGNhdGVnb3J5IC5vdmVybGF5e1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUwKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLmNhcmRjYXRlZ29yeSAudGV4dHM6YmVmb3Jle1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jYXJkY2F0ZWdvcnkgLnRleHRze1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxuICAgIGJvdHRvbTogNDAlO1xyXG4gICAgbGVmdDogMTAlO1xyXG59XHJcblxyXG4uY2FyZGNhdGVnb3J5IC50ZXh0cyBoMXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuIFxyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3ktYmxhY2t0YWxpYyc7XHJcbn1cclxuXHJcbmlvbi1jb2x7XHJcbiAgICBmbGV4OiAwIDAgY2FsYyhjYWxjKDEyIC8gdmFyKC0taW9uLWdyaWQtY29sdW1ucywgMTIpKSAqIDkwJSkgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiBjYWxjKGNhbGMoMTIgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogOTAlKSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiBjYWxjKGNhbGMoMTIgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogOTAlKSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LWhlaWdodDogMTM1cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMzVweDtcclxuIG1hcmdpbjogNXB4IGF1dG87XHJcbiBwYWRkaW5nLWxlZnQ6IDBweDtcclxuIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLmlvbi1wYWdlIHtcclxuICAgIC5pbi10b29sYmFyIHtcclxuICAgICAgLnRvb2xiYXItYmFja2dyb3VuZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LWNhcGl0YWxpemV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjZjc0NzRmO1xyXG4gICAgZm9udC1mYW1pbHk6IFByb3hpbWEtYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWJhcntcclxuICAgICAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgICAgICBtYXJnaW46IDIwcHggYXV0byAxMHB4IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0NTQ1NDU7XHJcbiAgICAgICAgY29sb3I6Izk3OTc5NyA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuXHJcbiAgICAuaXRlbS1uYXRpdmV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojNDU0NTQ1O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbi10b29sYmFye1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggMCAwcHggMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxOTE5MTk7XHJcbiAgICB9XHJcblxyXG4gICAgLmlvcy1zZWFyY2h7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgLmJ1dHRvbi1zb2xpZCAgIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3NDc0RjtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMXB4O1xyXG4gICAgICAgICAgfSAgIFxyXG5cclxuICAgICAgICAgIC5maWx0ZXJ7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlvbi10ZXh0YXJlYXtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgLmFycm93e1xyXG4gICAgICAgIGNvbG9yOiAjZjc0NzRmICFpbXBvcnRhbnQ7XHJcbiAgICB9ICAgIFxyXG5cclxuICAgIC5jbG9zZS1pbWd7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNnB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gICAgICAgIC5jYXJkY2F0ZWdvcnkgLnRleHRzIGgxe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2MHB4KSB7XHJcbiAgICAgICAgLmNhcmRjYXRlZ29yeSAudGV4dHMgaDF7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/bodyparts/bodyparts.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/bodyparts/bodyparts.page.ts ***!
  \***************************************************/
/*! exports provided: BodypartsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodypartsPage", function() { return BodypartsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let BodypartsPage = class BodypartsPage {
    constructor(DataService, plt) {
        this.DataService = DataService;
        this.plt = plt;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
        this.bodyparts = [];
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.height = this.plt.height() / 4.4 + 'px';
        this.DataService.getDataBodyparts()
            .subscribe(resp => {
            this.bodyparts = resp;
            if (this.bodyparts.length === 0) {
                this.height = '157.273px';
            }
            else if (this.bodyparts.length === 3 || this.bodyparts.length === 2) {
                this.height = 'inherit !important';
            }
            else if (this.bodyparts.length >= 4) {
                this.height = this.plt.height() / 4.4 + 'px';
            }
            this.isLoading = false;
        });
    }
};
BodypartsPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
BodypartsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bodyparts',
        template: __webpack_require__(/*! raw-loader!./bodyparts.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/bodyparts/bodyparts.page.html"),
        styles: [__webpack_require__(/*! ./bodyparts.page.scss */ "./src/app/pages/bodyparts/bodyparts.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
], BodypartsPage);



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
//# sourceMappingURL=pages-bodyparts-bodyparts-module-es2015.js.map