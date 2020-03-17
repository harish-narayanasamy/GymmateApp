(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pdetails-pdetails-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/pdetails/pdetails.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/pdetails/pdetails.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"darkheader\" mode=\"ios\" no-border>\n    <ion-toolbar mode=\"ios\">\n        <ion-title class=\"ion-text-capitalize\">\n            {{strings.ST130}}\n          </ion-title>\n        <ion-buttons slot=\"start\">\n            <app-backbutton color=\"light\"></app-backbutton>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n                <ion-button (click)=\"addToFavorites()\" slot=\"start\">\n                <ion-icon color=\"light\" mode=\"md\" [name]=\"icon\"></ion-icon>\n                </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content class=\"ion-no-padding\">\n\n      <app-loading *ngIf=\"isLoading\"></app-loading>\n\n      <ion-grid class=\"ion-no-padding\">\n          <ion-row class=\"header-bg\" [style.background-image]=\"'url(' + (post.post_image | image) + ')'\" [ngStyle]=\"{'height': innerHeight}\">\n            <div class=\"text\">\n            <p class=\"time\">{{post.tag_title}}</p>\n            <p class=\"name\">{{post.post_title}}</p>\n            <app-postrating *ngIf=\"rating > 0\" [value]=\"rating\" color=\"rgba(255, 255, 255, 0.3)\" [size]=\"18\"></app-postrating>\n          </div>\n      </ion-row>\n      </ion-grid>\n\n      <ion-grid class=\"ion-no-padding\">\n          <ion-row class=\"cols\">\n              <ion-col size=\"6\" (click)=\"showComments(post.post_id)\" class=\"col-text ion-justify-content-start\">\n                    {{strings.ST84}} ({{count}})\n              </ion-col>\n\n              <ion-col size=\"6\" (click)=\"addComment(post.post_id)\" class=\"col-text ion-justify-content-end\">\n                  {{strings.ST83}}\n                  <ion-icon name=\"ios-add-circle\"></ion-icon>\n              </ion-col>\n\n          </ion-row>\n        </ion-grid>\n\n        <div class=\"ion-padding\">\n        <app-html [htmlcontent]=\"post.post_description\"></app-html>\n        </div>\n\n    <div class=\"date-category\">\n        <p><ion-icon name=\"md-calendar\"></ion-icon> {{post.post_date}}</p>\n        <p><ion-icon name=\"md-folder-open\"></ion-icon> {{post.tag_title}}</p>\n    </div>\n\n\n</ion-content>\n"

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

module.exports = ".header-bg {\n  background-position: center;\n  background-size: cover;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.header-bg .text {\n  color: #fff;\n  text-align: center;\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(10%, rgba(0, 0, 0, 0.4)), to(rgba(0, 0, 0, 0.75)));\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 10%, rgba(0, 0, 0, 0.75) 100%);\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 30px; }\n\n.header-bg .name {\n  color: #ffffff;\n  text-align: left;\n  margin: 0;\n  font-weight: bold;\n  font-size: 17px;\n  text-transform: capitalize;\n  margin-bottom: 6px; }\n\n.header-bg .time {\n  color: var(--ion-color-primary);\n  margin-bottom: 5px;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 14px;\n  font-weight: bold; }\n\n.cols {\n  background-color: var(--ion-color-primary);\n  padding: 10px 24px; }\n\n.col-text {\n  color: white;\n  font-size: 14px;\n  text-transform: uppercase;\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex; }\n\n.cols ion-icon {\n  padding: 0 5px; }\n\n.date-category {\n  border-top: 1px solid #eee;\n  border-bottom: 1px solid #eee;\n  padding: 20px; }\n\n.date-category p {\n  margin: 0;\n  font-size: 13px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-transform: uppercase;\n  padding-right: 10px;\n  color: #9e9e9e; }\n\n.date-category ion-icon {\n  margin-right: 5px;\n  font-size: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGRldGFpbHMvQzpcXFVzZXJzXFxIYXJpc2hcXExvY2FsX2RldlxcaW9uaWNcXEd5bW1hdGUvc3JjXFxhcHBcXHBhZ2VzXFxwZGV0YWlsc1xccGRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCO0VBR2xCLHlIQUFrRjtFQUFsRix3RkFBa0Y7RUFDbEYsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBYTtFQUFiLGFBQWE7RUFDYixxQkFBeUI7VUFBekIseUJBQXlCO0VBQ3pCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsYUFBYSxFQUFBOztBQUdqQjtFQUNJLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksMENBQTBDO0VBQzFDLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFlBQVk7RUFDWixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsb0JBQWE7RUFBYixhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0IsYUFBYSxFQUFBOztBQUdqQjtFQUNJLFNBQVM7RUFDVCxlQUFlO0VBQ2YsMkJBQW9CO0VBQXBCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxpQkFBaUI7RUFDakIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGRldGFpbHMvcGRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1iZ3tcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaGVhZGVyLWJnIC50ZXh0e1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDAsMCwwLDAuNCkgMTAlLCByZ2JhKDAsMCwwLDAuNzUpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIHJnYmEoMCwwLDAsMC40KSAxMCUscmdiYSgwLDAsMCwwLjc1KSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAgcmdiYSgwLDAsMCwwLjQpIDEwJSxyZ2JhKDAsMCwwLDAuNzUpIDEwMCUpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAzMHB4O1xufVxuXG4uaGVhZGVyLWJnIC5uYW1le1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5oZWFkZXItYmcgLnRpbWV7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29sc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgcGFkZGluZzogMTBweCAyNHB4O1xuICAgIH1cblxuLmNvbC10ZXh0e1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uY29scyBpb24taWNvbntcbiAgICBwYWRkaW5nOiAwIDVweDtcbn1cblxuLmRhdGUtY2F0ZWdvcnl7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLmRhdGUtY2F0ZWdvcnkgcHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBjb2xvcjogIzllOWU5ZTtcbn1cblxuLmRhdGUtY2F0ZWdvcnkgaW9uLWljb257XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufSJdfQ== */"

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