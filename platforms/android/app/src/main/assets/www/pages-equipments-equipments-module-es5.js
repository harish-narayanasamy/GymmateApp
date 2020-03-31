(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-equipments-equipments-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/equipments/equipments.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/equipments/equipments.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\r\n  <ion-toolbar mode=\"ios\" class=\"ion-color\" [style.background-color]=\"customColor\">\r\n      <ion-title class=\"ion-text-capitalize\">\r\n        {{strings.ST38}}\r\n      </ion-title>\r\n            <ion-buttons slot=\"start\">\r\n              <app-backbutton class=\"arrow\"></app-backbutton>\r\n            </ion-buttons>\r\n            <ion-buttons slot=\"end\">\r\n              <ion-button  slot=\"start\" [routerLink]=\"['/tabs/tab1']\">\r\n                <img src=\"./assets/images/close.png\" class=\"close-img\"/> \r\n                </ion-button>\r\n            </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n  \r\n<!--\r\n  <ion-content class=\"ion-padding-top\">\r\n  \r\n    <app-loading *ngIf=\"isLoading\"></app-loading>\r\n\r\n\r\n    <ion-list lines=\"none\" class=\"ion-padding-top\">\r\n\r\n    <ion-item *ngFor=\"let item of equipments\" [routerLink]=\"['/eequipments', item.equipment_id, item.equipment_title]\" style=\"margin-bottom: 30px;\">\r\n        <ion-avatar slot=\"start\">\r\n          <img [src]=\"item.equipment_image | image\">\r\n        </ion-avatar>\r\n        <ion-label>{{item.equipment_title}}</ion-label>\r\n      </ion-item>\r\n\r\n    </ion-list>\r\n\r\n</ion-content>\r\n-->\r\n\r\n<ion-content fixed class=\"ion-color\" [style.background-color]=\"customColor\">\r\n\r\n  <app-loading *ngIf=\"isLoading\"></app-loading>\r\n  <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col *ngFor=\"let item of equipments\" size=\"6\" [routerLink]=\"['/eequipments', item.equipment_id, item.equipment_title]\" [ngStyle]=\"{'height': height}\">\r\n\r\n\r\n          <div class=\"cardcategory\" style=\"background-image: url(http://hosting.lakeba.com:8092/images/{{item.equipment_image}})\">\r\n            <div class=\"overlay\">\r\n            <div class=\"texts\">\r\n            <h1>{{item.equipment_title}}</h1>\r\n            </div>\r\n          </div>\r\n          </div>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/equipments/equipments-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/equipments/equipments-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: EquipmentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentsPageRoutingModule", function() { return EquipmentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _equipments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./equipments.page */ "./src/app/pages/equipments/equipments.page.ts");




var routes = [
    {
        path: '',
        component: _equipments_page__WEBPACK_IMPORTED_MODULE_3__["EquipmentsPage"]
    }
];
var EquipmentsPageRoutingModule = /** @class */ (function () {
    function EquipmentsPageRoutingModule() {
    }
    EquipmentsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EquipmentsPageRoutingModule);
    return EquipmentsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/equipments/equipments.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/equipments/equipments.module.ts ***!
  \*******************************************************/
/*! exports provided: EquipmentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentsPageModule", function() { return EquipmentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _equipments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./equipments-routing.module */ "./src/app/pages/equipments/equipments-routing.module.ts");
/* harmony import */ var _equipments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./equipments.page */ "./src/app/pages/equipments/equipments.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









var EquipmentsPageModule = /** @class */ (function () {
    function EquipmentsPageModule() {
    }
    EquipmentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _equipments_routing_module__WEBPACK_IMPORTED_MODULE_5__["EquipmentsPageRoutingModule"]
            ],
            declarations: [_equipments_page__WEBPACK_IMPORTED_MODULE_6__["EquipmentsPage"]]
        })
    ], EquipmentsPageModule);
    return EquipmentsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/equipments/equipments.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/equipments/equipments.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  height: 100%;\n  padding: 15px 8px !important;\n  height: auto; }\n\nion-content {\n  background: #191919; }\n\nion-row {\n  height: 100%; }\n\n.cardcategory {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  border-radius: 8px; }\n\n.cardcategory .overlay {\n  background: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  text-align: left;\n  border-radius: 8px; }\n\n.cardcategory .texts:before {\n  content: \"\";\n  background: var(--ion-color-primary);\n  height: 3px;\n  display: block;\n  width: 40px;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  top: 0;\n  margin-bottom: 10px;\n  display: none; }\n\n.cardcategory .texts {\n  padding-bottom: 15px;\n  text-align: center;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  position: relative;\n  height: 20%;\n  bottom: 40%;\n  left: 10%; }\n\n.cardcategory .texts h1 {\n  color: white;\n  margin: 0;\n  font-size: 30px;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 30px;\n  letter-spacing: 1px;\n  font-family: 'Gilroy-blacktalic'; }\n\nion-col {\n  -webkit-box-flex: 0 !important;\n          flex: 0 0 calc(calc(12 / var(--ion-grid-columns, 12)) * 90%) !important;\n  width: calc(calc(12 / var(--ion-grid-columns, 12)) * 90%) !important;\n  max-width: calc(calc(12 / var(--ion-grid-columns, 12)) * 90%) !important;\n  max-height: 135px;\n  min-height: 135px;\n  margin: 5px auto;\n  padding-left: 0px;\n  padding-right: 0px; }\n\n.ion-page .in-toolbar .toolbar-background {\n  background: transparent !important; }\n\n.ion-text-capitalize {\n  width: 100%;\n  color: #f7474f;\n  font-family: Proxima-bold;\n  font-size: 20px !important;\n  text-transform: none !important; }\n\n.search-bar {\n  max-width: 90%;\n  margin: 20px auto 10px auto;\n  height: 40px;\n  border-radius: 8px;\n  background-color: #454545;\n  color: #979797;\n  display: -webkit-box;\n  display: flex; }\n\n.item-native {\n  background-color: #454545; }\n\n.in-toolbar {\n  padding: 30px 0 0px 0 !important;\n  background: #191919; }\n\n.ios-search {\n  padding-right: 5px;\n  margin-bottom: 7px; }\n\n.button-solid {\n  width: 100% !important;\n  margin: 0px !important;\n  background-color: #F7474F;\n  height: 80px;\n  font-size: 18px;\n  font-weight: bold;\n  padding-bottom: 21px; }\n\n.filter {\n  max-width: 25px; }\n\nion-textarea {\n  margin-top: 0px !important; }\n\n.arrow {\n  color: #f7474f !important; }\n\n.close-img {\n  max-width: 16px;\n  max-height: 16px; }\n\n@media only screen and (max-width: 320px) {\n  .cardcategory .texts h1 {\n    font-size: 25px;\n    line-height: 30px; } }\n\n@media only screen and (max-width: 260px) {\n  .cardcategory .texts h1 {\n    font-size: 22px;\n    line-height: 35px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXF1aXBtZW50cy9DOlxcVXNlcnNcXEhhcmlzaFxcTG9jYWxfZGV2XFxHeW1tYXRlQXBwL3NyY1xcYXBwXFxwYWdlc1xcZXF1aXBtZW50c1xcZXF1aXBtZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLFlBQWEsRUFBQTs7QUFHakI7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSw4QkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXlCO1VBQXpCLHlCQUF5QjtFQUN6Qix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFpQjtFQUFqQiw2QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixtQkFBbUI7RUFDbkIsYUFBYSxFQUFBOztBQUdqQjtFQUNJLG9CQUFvQjtFQUVwQixrQkFBa0I7RUFFbEIsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxTQUFTLEVBQUE7O0FBR2I7RUFDSSxZQUFZO0VBQ1osU0FBUztFQUNULGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFFbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQ0FBZ0MsRUFBQTs7QUFHcEM7RUFDSSw4QkFBdUU7VUFBdkUsdUVBQXVFO0VBQ3ZFLG9FQUFvRTtFQUNwRSx3RUFBd0U7RUFDeEUsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNwQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUduQjtFQUdRLGtDQUFrQyxFQUFBOztBQUt4QztFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQiwrQkFBK0IsRUFBQTs7QUFHL0I7RUFDSSxjQUFjO0VBQ2QsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXdCO0VBQ3hCLGNBQWM7RUFDZCxvQkFBYTtFQUFiLGFBQWEsRUFBQTs7QUFHakI7RUFDSSx5QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSxnQ0FBZ0M7RUFDaEMsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUloQjtFQUNJLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFvQixFQUFBOztBQUd4QjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSwwQkFBMEIsRUFBQTs7QUFJcEM7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0k7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCLEVBQUEsRUFDcEI7O0FBR0w7RUFDSTtJQUNJLGVBQWU7SUFDZixpQkFBaUIsRUFBQSxFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VxdWlwbWVudHMvZXF1aXBtZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE1cHggOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IGF1dG8gO1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICAgIGJhY2tncm91bmQ6ICMxOTE5MTk7XHJcbn1cclxuXHJcbmlvbi1yb3d7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJkY2F0ZWdvcnl7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5jYXJkY2F0ZWdvcnkgLm92ZXJsYXl7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTApO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uY2FyZGNhdGVnb3J5IC50ZXh0czpiZWZvcmV7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmNhcmRjYXRlZ29yeSAudGV4dHN7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMjAlO1xyXG4gICAgYm90dG9tOiA0MCU7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbn1cclxuXHJcbi5jYXJkY2F0ZWdvcnkgLnRleHRzIGgxe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gXHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0dpbHJveS1ibGFja3RhbGljJztcclxufVxyXG5cclxuaW9uLWNvbHtcclxuICAgIGZsZXg6IDAgMCBjYWxjKGNhbGMoMTIgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogOTAlKSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IGNhbGMoY2FsYygxMiAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDEyKSkgKiA5MCUpICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoY2FsYygxMiAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDEyKSkgKiA5MCUpICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMzVweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEzNXB4O1xyXG4gbWFyZ2luOiA1cHggYXV0bztcclxuIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcblxyXG4uaW9uLXBhZ2Uge1xyXG4gICAgLmluLXRvb2xiYXIge1xyXG4gICAgICAudG9vbGJhci1iYWNrZ3JvdW5kIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQtY2FwaXRhbGl6ZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICNmNzQ3NGY7XHJcbiAgICBmb250LWZhbWlseTogUHJveGltYS1ib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtYmFye1xyXG4gICAgICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgICAgIG1hcmdpbjogMjBweCBhdXRvIDEwcHggYXV0bztcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IzQ1NDU0NTtcclxuICAgICAgICBjb2xvcjojOTc5Nzk3IDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtLW5hdGl2ZXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0NTQ1NDU7XHJcbiAgICB9XHJcblxyXG4gICAgLmluLXRvb2xiYXJ7XHJcbiAgICAgICAgcGFkZGluZzogMzBweCAwIDBweCAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzE5MTkxOTtcclxuICAgIH1cclxuXHJcbiAgICAuaW9zLXNlYXJjaHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAuYnV0dG9uLXNvbGlkICAge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc0NzRGO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIxcHg7XHJcbiAgICAgICAgICB9ICAgXHJcblxyXG4gICAgICAgICAgLmZpbHRlcntcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW9uLXRleHRhcmVhe1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAuYXJyb3d7XHJcbiAgICAgICAgY29sb3I6ICNmNzQ3NGYgIWltcG9ydGFudDtcclxuICAgIH0gICAgXHJcblxyXG4gICAgLmNsb3NlLWltZ3tcclxuICAgICAgICBtYXgtd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgICAgICAgLmNhcmRjYXRlZ29yeSAudGV4dHMgaDF7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYwcHgpIHtcclxuICAgICAgICAuY2FyZGNhdGVnb3J5IC50ZXh0cyBoMXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/equipments/equipments.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/equipments/equipments.page.ts ***!
  \*****************************************************/
/*! exports provided: EquipmentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentsPage", function() { return EquipmentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");




var EquipmentsPage = /** @class */ (function () {
    function EquipmentsPage(DataService) {
        this.DataService = DataService;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
        this.equipments = [];
        this.isLoading = false;
    }
    EquipmentsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.DataService.getDataEquipments()
            .subscribe(function (resp) {
            _this.equipments = resp;
            _this.isLoading = false;
        });
    };
    EquipmentsPage.ctorParameters = function () { return [
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
    ]; };
    EquipmentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-equipments',
            template: __webpack_require__(/*! raw-loader!./equipments.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/equipments/equipments.page.html"),
            styles: [__webpack_require__(/*! ./equipments.page.scss */ "./src/app/pages/equipments/equipments.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], EquipmentsPage);
    return EquipmentsPage;
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
//# sourceMappingURL=pages-equipments-equipments-module-es5.js.map