(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-posts-posts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/posts/posts.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/posts/posts.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <ion-header *ngIf=\"!isLoading\" class=\"lightheader\" no-border>\r\n    <ion-toolbar mode=\"ios\" class=\"ion-color\" [style.background-color]=\"customColor\">\r\n      <ion-title  class=\"ion-text-capitalize\">\r\n        {{strings.ST4}}\r\n      </ion-title>\r\n      <!--<ion-buttons slot=\"start\">\r\n                <app-backbutton color=\"dark\"></app-backbutton>\r\n              </ion-buttons>\r\n              -->\r\n              <ion-buttons slot=\"end\">\r\n                <ion-button [routerLink]=\"['/tags']\">\r\n                  <ion-label class=\"view-more\">\r\n                    View more\r\n                  </ion-label>\r\n                    </ion-button>\r\n              </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <app-loading *ngIf=\"isLoading\"></app-loading>\r\n\r\n<ion-content *ngIf=\"!isLoading\" class=\"ion-no-padding ion-color\" [style.background-color]=\"customColor\">\r\n <ion-grid>\r\n   <ion-row>\r\n     <ion-col size=\"6\" *ngFor=\"let item of recentposts\" [routerLink]=\"['/pdetails', item.post_id]\">\r\n        <div class=\"cardcategory\" [style.background-image]=\"'url(' + (item.post_image | image) + ')'\">\r\n            <div class=\"overlay\">\r\n            <div class=\"texts\">\r\n            <h1>{{item.post_title}}</h1>\r\n            </div>\r\n          </div>\r\n          </div>\r\n     </ion-col>\r\n   </ion-row>\r\n </ion-grid>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/posts/posts-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/posts/posts-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PostsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsPageRoutingModule", function() { return PostsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _posts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts.page */ "./src/app/pages/posts/posts.page.ts");




const routes = [
    {
        path: '',
        component: _posts_page__WEBPACK_IMPORTED_MODULE_3__["PostsPage"]
    }
];
let PostsPageRoutingModule = class PostsPageRoutingModule {
};
PostsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PostsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/posts/posts.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/posts/posts.module.ts ***!
  \*********************************************/
/*! exports provided: PostsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsPageModule", function() { return PostsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _posts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posts-routing.module */ "./src/app/pages/posts/posts-routing.module.ts");
/* harmony import */ var _posts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./posts.page */ "./src/app/pages/posts/posts.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









let PostsPageModule = class PostsPageModule {
};
PostsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
            _posts_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostsPageRoutingModule"]
        ],
        declarations: [_posts_page__WEBPACK_IMPORTED_MODULE_6__["PostsPage"]]
    })
], PostsPageModule);



/***/ }),

/***/ "./src/app/pages/posts/posts.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/posts/posts.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 100%;\n  height: 250px;\n  background-size: cover;\n  background-position: center;\n  position: relative; }\n\n.card .overlay {\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.75)));\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 100%);\n  position: absolute;\n  width: 100%;\n  height: 250px;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  text-align: left; }\n\n.card .texts {\n  padding: 30px 15px; }\n\n.card .texts p {\n  color: var(--ion-color-primary);\n  margin: 0;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 14px;\n  margin-bottom: 6px; }\n\n.card .texts h1 {\n  color: white;\n  margin: 0;\n  font-weight: bold;\n  font-size: 18px; }\n\n.cardcategory {\n  width: 100%;\n  height: 100px;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  border-radius: 8px;\n  min-height: 180px; }\n\n.cardcategory .overlay {\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.75)));\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 100%);\n  position: absolute;\n  width: 100%;\n  height: 100px;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  text-align: left;\n  border-radius: 8px;\n  min-height: 180px; }\n\n.cardcategory .texts {\n  padding: 15px;\n  position: relative;\n  display: block;\n  width: 100%; }\n\n.cardcategory .texts h1 {\n  color: white;\n  margin: 0;\n  font-weight: bold;\n  font-size: 14px;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\nion-content {\n  background: #191919; }\n\nion-header {\n  background-color: #191919;\n  height: 100%;\n  padding: 10px 5% !important;\n  height: auto; }\n\n.ion-text-capitalize {\n  width: 100%;\n  color: #eafff7;\n  font-family: Proxima-bold;\n  font-size: 32px !important;\n  line-height: 32px;\n  text-transform: none !important;\n  text-align: left;\n  padding: 0; }\n\n.view-more {\n  width: 100%;\n  color: #f7474f;\n  font-family: Proxima-bold;\n  font-size: 16px !important;\n  line-height: 16px;\n  text-transform: none !important; }\n\n.today {\n  color: #e0e0e0;\n  font-family: 'Proxima-semi';\n  line-height: 24px;\n  font-size: 20px;\n  text-align: left;\n  margin-top: 0px;\n  width: 80%; }\n\nion-grid {\n  background-color: #191919 !important;\n  padding: 25px 0 40px 0;\n  max-width: 95%;\n  margin: 0 auto; }\n\n.sc-ion-buttons-md-s ion-button {\n  --padding-start: 0px !important;\n  --padding-end: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9zdHMvQzpcXFVzZXJzXFxIYXJpc2hcXExvY2FsX2RldlxcR3ltbWF0ZUFwcC9zcmNcXGFwcFxccGFnZXNcXHBvc3RzXFxwb3N0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0Isa0JBQWtCLEVBQUE7O0FBR3RCO0VBR0ksNEdBQStFO0VBQS9FLHFGQUErRTtFQUMvRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixxQkFBeUI7VUFBekIseUJBQXlCO0VBQ3pCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQWlCO0VBQWpCLDZCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksK0JBQThCO0VBQzlCLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxZQUFZO0VBQ1osU0FBUztFQUNULGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBSW5CO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBR0ksNEdBQStFO0VBQS9FLHFGQUErRTtFQUMvRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixxQkFBeUI7VUFBekIseUJBQXlCO0VBQ3pCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQWlCO0VBQWpCLDZCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxZQUFZO0VBQ1osU0FBUztFQUNULGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0kseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsWUFBYSxFQUFBOztBQUdqQjtFQUNJLFdBQVc7RUFDWCxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQixVQUFVLEVBQUE7O0FBR1Y7RUFDSSxXQUFXO0VBQ1gsY0FBYztFQUNkLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLCtCQUErQixFQUFBOztBQUluQztFQUNJLGNBQWM7RUFDZCwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFVBQVUsRUFBQTs7QUFHbEI7RUFDSSxvQ0FBb0M7RUFDcEMsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksK0JBQWdCO0VBQ2hCLDZCQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wb3N0cy9wb3N0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYXJkIC5vdmVybGF5e1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgwLDAsMCwwKSAwJSwgcmdiYSgwLDAsMCwwLjc1KSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIHJnYmEoMCwwLDAsMCkgMCUscmdiYSgwLDAsMCwwLjc1KSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICByZ2JhKDAsMCwwLDApIDAlLHJnYmEoMCwwLDAsMC43NSkgMTAwJSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uY2FyZCAudGV4dHN7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDE1cHg7XHJcbn1cclxuXHJcbi5jYXJkIC50ZXh0cyBwe1xyXG4gICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG59XHJcblxyXG4uY2FyZCAudGV4dHMgaDF7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuXHJcbn1cclxuXHJcbi5jYXJkY2F0ZWdvcnl7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgbWluLWhlaWdodDogMTgwcHg7XHJcbn1cclxuXHJcbi5jYXJkY2F0ZWdvcnkgLm92ZXJsYXl7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDAsMCwwLDApIDAlLCByZ2JhKDAsMCwwLDAuNzUpIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgwLDAsMCwwKSAwJSxyZ2JhKDAsMCwwLDAuNzUpIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIHJnYmEoMCwwLDAsMCkgMCUscmdiYSgwLDAsMCwwLjc1KSAxMDAlKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxODBweDtcclxufVxyXG5cclxuLmNhcmRjYXRlZ29yeSAudGV4dHN7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhcmRjYXRlZ29yeSAudGV4dHMgaDF7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTkxOTE5O1xyXG59XHJcblxyXG5pb24taGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMTkxOTE5IDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggNSUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogYXV0byA7XHJcbn1cclxuXHJcbi5pb24tdGV4dC1jYXBpdGFsaXple1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogI2VhZmZmNztcclxuICAgIGZvbnQtZmFtaWx5OiBQcm94aW1hLWJvbGQ7XHJcbiAgICBmb250LXNpemU6IDMycHggIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC52aWV3LW1vcmV7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgY29sb3I6ICNmNzQ3NGY7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFByb3hpbWEtYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAudG9kYXl7XHJcbiAgICAgICAgY29sb3I6ICNlMGUwZTA7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQcm94aW1hLXNlbWknO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG5cclxuaW9uLWdyaWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAyNXB4IDAgNDBweCAwO1xyXG4gICAgbWF4LXdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLW1kLXMgaW9uLWJ1dHRvbntcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwcHggIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/posts/posts.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/posts/posts.page.ts ***!
  \*******************************************/
/*! exports provided: PostsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsPage", function() { return PostsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");




let PostsPage = class PostsPage {
    constructor(DataService) {
        this.DataService = DataService;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
        this.posts = [];
        this.recentposts = [];
        this.isLoading = false;
        this.isReady = true;
        this.limit = 8;
        this.slideOpts = {
            slidesPerView: 1,
            freeMode: false
        };
    }
    ngOnInit() {
        this.isLoading = true;
        this.DataService.getDataFeaturedPosts()
            .subscribe(resp => {
            this.posts = resp;
            this.isReady = true;
        });
        this.DataService.getDataRecentPosts(this.limit)
            .subscribe(resp => {
            this.recentposts = resp;
            this.isLoading = false;
        });
    }
};
PostsPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
PostsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posts',
        template: __webpack_require__(/*! raw-loader!./posts.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/posts/posts.page.html"),
        styles: [__webpack_require__(/*! ./posts.page.scss */ "./src/app/pages/posts/posts.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
], PostsPage);



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
//# sourceMappingURL=pages-posts-posts-module-es2015.js.map