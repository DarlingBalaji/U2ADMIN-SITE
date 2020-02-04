(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./user-panel/user-panel.module": [
		"./src/app/user-panel/user-panel.module.ts",
		"user-panel-user-panel-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/Services/commonservice.service.ts":
/*!***************************************************!*\
  !*** ./src/app/Services/commonservice.service.ts ***!
  \***************************************************/
/*! exports provided: CommonserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonserviceService", function() { return CommonserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _assets_varconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/varconfig */ "./src/assets/varconfig.js");




var host = _assets_varconfig__WEBPACK_IMPORTED_MODULE_3__["BackendHost"];
var CommonserviceService = /** @class */ (function () {
    function CommonserviceService(http) {
        this.http = http;
    }
    // POST FUNCTION
    CommonserviceService.prototype.postfunction = function (url, data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        return this.http.post(host + url, data, { headers: headers });
    };
    CommonserviceService.prototype.activate = function (url, token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        return this.http.get(host + url, { headers: headers });
    };
    CommonserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CommonserviceService);
    return CommonserviceService;
}());



/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"FooterBackGroungColor1\">\n  <app-header></app-header>\n</section>\n<section>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-4 mt-4\">\n        <img src=\"assets/images/AboutUs.png\" alt=\"\" class=\"pull-left\">\n      </div>\n      <div class=\"col-lg-8\">\n        <h2 class=\"mt-4 About_Us_Heading\">About Us</h2>\n        <p class=\"ml-2 AboutUs_Section\">U2ADMIN is the native coin of its own PoS blockchain,\n           the U2ADMIN Network (eurekanetwork.io) and we have many projects\n           preparing to build upon it using tokens.\n           The U2ADMIN blockchain will not only be Proof of Stake itself \n           ( meaning U2ADMIN in itself can be used to earn passively ) \n           but other tokens/ sidechain coins will be able to be proof of stake\n           in themselves securing their own network.</p>\n           <p class=\"mt-4 ml-2 AboutUs_Section\">U2ADMIN is the native coin of its own PoS blockchain,\n              the U2ADMIN Network (eurekanetwork.io) and we have many projects\n              preparing to build upon it using tokens.\n              The U2ADMIN blockchain will not only be Proof of Stake itself \n              ( meaning U2ADMIN in itself can be used to earn passively ) \n              but other tokens/ sidechain coins will be able to be proof of stake\n              in themselves securing their own network.</p>\n      </div>\n      <div class=\"col-lg-12\">\n          <p class=\"AboutUs_Section ml-2\">U2ADMIN is the native coin of its own PoS blockchain,\n              the U2ADMIN Network (eurekanetwork.io) and we have many projects\n              preparing to build upon it using tokens.\n              The U2ADMIN blockchain will not only be Proof of Stake itself \n              ( meaning U2ADMIN in itself can be used to earn passively ) \n              but other tokens/ sidechain coins will be able to be proof of stake\n              in themselves securing their own network.</p>\n      </div>\n\n    </div>\n  </div>\n</section>\n<section class=\"FooterBackGroungColor mt-4\">\n  <app-footer></app-footer>\n</section>\n"

/***/ }),

/***/ "./src/app/about-us/about-us.component.scss":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.scss */ "./src/app/about-us/about-us.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forget-password/forget-password.component */ "./src/app/forget-password/forget-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var _term_condition_term_condition_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./term-condition/term-condition.component */ "./src/app/term-condition/term-condition.component.ts");
/* harmony import */ var _under_maintances_under_maintances_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./under-maintances/under-maintances.component */ "./src/app/under-maintances/under-maintances.component.ts");
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.component */ "./src/app/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var _new_dashboard_new_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./new-dashboard/new-dashboard.component */ "./src/app/new-dashboard/new-dashboard.component.ts");
/* harmony import */ var _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user-panel/user-panel.component */ "./src/app/user-panel/user-panel.component.ts");



















var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    { path: 'HomePage', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"] },
    { path: 'FAQ', component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_6__["FAQComponent"] },
    { path: 'AboutUs', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsComponent"] },
    { path: '404', component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_8__["ErrorPageComponent"] },
    { path: 'ContactUs', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_9__["ContactUsComponent"] },
    { path: 'Privacy_Policy', component: _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_16__["PrivacyPolicyComponent"] },
    { path: 'Login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: 'Signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"] },
    { path: 'ForgetPassword', component: _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_12__["ForgetPasswordComponent"] },
    { path: 'ResetPassword', component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_13__["ResetPasswordComponent"] },
    { path: 'Under_Maintanences', component: _under_maintances_under_maintances_component__WEBPACK_IMPORTED_MODULE_15__["UnderMaintancesComponent"] },
    { path: 'Teams&Condition', component: _term_condition_term_condition_component__WEBPACK_IMPORTED_MODULE_14__["TermConditionComponent"] },
    { path: 'DashboardNew', component: _new_dashboard_new_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["NewDashboardComponent"] },
    {
        path: '',
        component: _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_18__["UserPanelComponent"],
        children: [{
                path: '',
                loadChildren: './user-panel/user-panel.module#UserPanelModule'
            }]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'U2ADMIN';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_mat_search_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-mat-search-bar */ "./node_modules/ng-mat-search-bar/fesm5/ng-mat-search-bar.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/fesm5/ng-recaptcha.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/toastr.es5.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dashboard-header/dashboard-header.component */ "./src/app/dashboard-header/dashboard-header.component.ts");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./forget-password/forget-password.component */ "./src/app/forget-password/forget-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var _term_condition_term_condition_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./term-condition/term-condition.component */ "./src/app/term-condition/term-condition.component.ts");
/* harmony import */ var _under_maintances_under_maintances_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./under-maintances/under-maintances.component */ "./src/app/under-maintances/under-maintances.component.ts");
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.component */ "./src/app/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var _new_dashboard_new_dashboard_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./new-dashboard/new-dashboard.component */ "./src/app/new-dashboard/new-dashboard.component.ts");
/* harmony import */ var _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./user-panel/user-panel.component */ "./src/app/user-panel/user-panel.component.ts");









//External Section





// Material Section




//Components Section


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_19__["HomepageComponent"],
                _dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_20__["DashboardHeaderComponent"],
                _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_21__["SidenavComponent"],
                _faq_faq_component__WEBPACK_IMPORTED_MODULE_22__["FAQComponent"],
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_23__["AboutUsComponent"],
                _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_24__["ErrorPageComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_25__["ContactUsComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_27__["SignupComponent"],
                _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_28__["ForgetPasswordComponent"],
                _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_29__["ResetPasswordComponent"],
                _term_condition_term_condition_component__WEBPACK_IMPORTED_MODULE_30__["TermConditionComponent"],
                _under_maintances_under_maintances_component__WEBPACK_IMPORTED_MODULE_31__["UnderMaintancesComponent"],
                _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_32__["PrivacyPolicyComponent"],
                _new_dashboard_new_dashboard_component__WEBPACK_IMPORTED_MODULE_33__["NewDashboardComponent"],
                _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_34__["UserPanelComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatBadgeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"],
                ng_mat_search_bar__WEBPACK_IMPORTED_MODULE_9__["NgMatSearchBarModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_10__["RecaptchaModule"].forRoot(),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot(),
                // ComponentsModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                ngx_clipboard__WEBPACK_IMPORTED_MODULE_13__["ClipboardModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.html":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"FooterBackGroungColor1\">\n  <app-header></app-header>\n</section>\n<section>\n  <div class=\"container\">\n    <div class=\"row mt-4\">\n      <div class=\"col-lg-4\">\n        <p class=\"ContactUs_Heading\">Feel free to write Us a Message</p>\n        <p class=\"AboutUs_Section\">\n            U2ADMIN is the native coin of its own PoS blockchain,\n            the U2ADMIN Network (eurekanetwork.io) and we have many projects\n            preparing to build upon it using tokens.\n            The U2ADMIN blockchain will not only be Proof of Stake itself \n            ( meaning U2ADMIN in itself can be used to earn passively ) \n            but other tokens/ sidechain coins will be able to be proof of stake\n            in themselves securing their own network.\n        </p>\n      </div>\n      <div class=\"col-lg-8\">\n        <!-- Form Section Start -->\n        <form (ngSubmit)=\"f.form.valid\" #f=\"ngForm\" novalidate>\n          <!-- User Name -->\n            <mat-form-field appearance=\"outline\" class=\"col-lg-6\">\n              <mat-label>User Name</mat-label>\n              <input matInput placeholder=\"User Name\" class=\"matInputt\" autocomplete=\"off\" required\n              minlength=\"4\"\n\t\t\t\t\t\t\t[(ngModel)]=\"model.firstname\" \n\t\t\t\t\t\t\tname=\"firstname\"  pattern=\"^[a-zA-Z0-9]+$\"\n\t\t\t\t\t\t\t#firstname=\"ngModel\"\n\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': f.submitted && firstname.invalid }\"\n\t\t\t\t\t\t\trequired autocomplete=\"off\" \n\t\t\t\t\t\t\t><br>\n\t\t\t\t\t\t\t<mat-error *ngIf=\"firstname.invalid && f.submitted && firstname.errors?.required\">firstname is required</mat-error>\n\t\t\t\t\t\t\t<!-- <mat-error *ngIf=\"firstname.invalid && f.submitted && firstname.errors?.minlength\">firstname should have minimum 4 characters</mat-error> -->\n              <mat-error *ngIf=\"firstname.invalid && f.submitted && firstname.errors?.pattern\">Special Characters not Allowed</mat-error>\n              \n            </mat-form-field>\n\n            <!-- Phone Number -->\n            <mat-form-field appearance=\"outline\" class=\"col-lg-6\">\n              <mat-label>Phone Number</mat-label>\n              <input matInput placeholder=\"Enter Your Phone Number\" class=\"matInputt\" autocomplete=\"off\"\n              minlength=\"10\" maxlength=\"10\" [(ngModel)]=\"model.PhoneNumber\" \n              name=\"PhoneNumber\" pattern=\"[7-9]{1}[0-9]{9}\"\n              #PhoneNumber=\"ngModel\"\n              [ngClass]=\"{ 'is-invalid': f.submitted && PhoneNumber.invalid }\"\n              required autocomplete=\"off\" \n              >\n              <mat-error *ngIf=\"PhoneNumber.invalid && f.submitted && PhoneNumber.errors?.required\">Phone NUmber is required</mat-error>\n              <mat-error *ngIf=\"PhoneNumber.invalid && f.submitted && PhoneNumber.errors?.minlength\">firstname should have minimum 10 characters</mat-error>\n              <mat-error *ngIf=\"PhoneNumber.invalid && f.submitted && PhoneNumber.errors?.pattern\">Check your Number</mat-error>\n            </mat-form-field>\n\n            <!-- Mail_ID -->\n            <mat-form-field appearance=\"outline\" class=\"col-lg-6\">\n                <mat-label>User E-mail ID</mat-label>\n                <input matInput placeholder=\"Enter Your E-mail ID\" class=\"matInputt\" autocomplete=\"off\"\n                pattern=\".+@.+\\..+\" \n                [(ngModel)]=\"model.email\"\n                name=\"email\" #email=\"ngModel\"\n                [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\"\n                required autocomplete=\"off\" /><br>\n                <mat-error *ngIf=\"email.invalid && f.submitted && email.errors?.required\">Email is required</mat-error>\n                <mat-error *ngIf=\"email.invalid && f.submitted && email.errors?.pattern\">Email must be a valid email address</mat-error>\n            </mat-form-field>\n\n            <!-- Subject -->\n            <mat-form-field appearance=\"outline\" class=\"col-lg-6\">\n                <mat-label>Subject</mat-label>\n                <input matInput placeholder=\"Subject\" class=\"matInputt\" autocomplete=\"off\"\n                [(ngModel)]=\"model.Subject\"\n                name=\"Subject\" pattern=\"^[a-zA-Z]+$\"\n                #Subject=\"ngModel\"\n                [ngClass]=\"{ 'is-invalid' : f.submitted && Subject.invalid }\" required\n                autocomplete=\"off\">\n                <mat-error *ngIf=\"Subject.invalid && f.submitted && Subject.errors?.required\">Subject Required</mat-error>\n                <mat-error *ngIf=\"Subject.invalid && f.submitted && Subject.errors?.pattern\">Subject Should Contain Characters</mat-error>\n            </mat-form-field>\n\n            <!-- Message -->\n            <mat-form-field appearance=\"outline\" class=\"col-lg-12\">\n                <mat-label>Leave Your Message Here</mat-label>\n                <textarea matInput rows=\"5\" placeholder=\"Leave a comment\"\n                [(ngModel)]=\"model.Message\"\n                name=\"Message\"\n                #Message=\"ngModel\"\n                [ngClass]=\"{ 'is-invalid' : f.submitted && Message.invalid }\" required\n                autocomplete=\"off\"></textarea>\n                <mat-error *ngIf=\"Message.invalid && f.submitted && Message.errors?.required\">Message Required</mat-error>\n            </mat-form-field>\n\n            <!-- Button -->\n              <button class=\"ContactUs_Btn\">Send Message</button>\n          </form>\n          <!-- Form Section End -->\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"FooterBackGroungColor mt-4\">\n  <app-footer></app-footer>\n</section>\n"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.scss":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
        this.model = {};
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.scss */ "./src/app/contact-us/contact-us.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-header/dashboard-header.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dashboard-header/dashboard-header.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-md navpadding\" style=\"background-color: #010140\">\n    <!-- Brand -->\n    <a class=\"navbar-brand\" routerLink='/HomePage'><img src=\"/assets/images/logo.png\"></a>\n  \n    <!-- Toggler/collapsibe Button -->\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n    <mat-icon style=\"color:black\">menu</mat-icon>\n    </button>\n  \n    <!-- Navbar links -->\n    <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n          <ul class=\"navbar-nav ml-auto\" style=\"z-index: 12;\">    \n                  <li class=\"nav-item mt-4\">\n                  <button routerLink='/Support' class=\"btn navBtn\" >Support</button>\n                </li>\n                <li class=\"nav-item active mt-4\">\n                    <mat-icon matBadge=\"15\" matBadgeColor=\"accent\" class=\"shakeit\" style=\"color:white;margin-top: 10px;\">notification_important</mat-icon>\n                </li>\n                <li class=\"nav-item active nav_UserDetails\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n             \n                  <img src=\"assets/images/44948.png\" alt=\"\">\n                  <div class=\"nav_UserName\" >\n\t\t\t\t\t<span>Jhon Deo</span>\n\t\t\t\t\t<p style=\"color:#08ff08\"><i class=\"fa fa-circle\" aria-hidden=\"true\"></i><span style=\"\">online</span></p>\n\n                  </div>\n                <i class=\"fa fa-angle-down\" aria-hidden=\"true\" style=\"color:white;margin-top:20px;font-size:26px;\"></i>\n\t\t\t\t<div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\" style=\" margin-left:159px;  \">\n\t\t\t\t\t\t<a class=\"dropdown-item\">Action</a>\n\t\t\t\t\t\t<a class=\"dropdown-item\">Logout</a>\n\t\t\t\t\t\t<!-- <a class=\"dropdown-item\">Somethin</a> -->\n\t\t\t\t\t</div>\t\n\t\t\t</li>\n    </ul>\n    </div>\n  </nav> \n  \n    \n"

/***/ }),

/***/ "./src/app/dashboard-header/dashboard-header.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/dashboard-header/dashboard-header.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".shakeit:hover {\n  -webkit-animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n          animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-perspective: 1000px;\n          perspective: 1000px; }\n\n@-webkit-keyframes shake {\n  10%, 90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0); }\n  20%, 80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0); }\n  30%, 50%, 70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0); }\n  40%, 60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0); } }\n\n@keyframes shake {\n  10%, 90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0); }\n  20%, 80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0); }\n  30%, 50%, 70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0); }\n  40%, 60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0); } }\n\n.dropbtn {\n  background-color: #4CAF50;\n  color: white;\n  padding: 16px;\n  font-size: 16px;\n  border: none;\n  cursor: pointer; }\n\n.dropdown {\n  position: relative;\n  display: inline-block; }\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1; }\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block; }\n\n.dropdown-content a:hover {\n  background-color: #f1f1f1; }\n\n.dropdown:hover .dropdown-content {\n  display: block; }\n\n.dropdown:hover .dropbtn {\n  background-color: #3e8e41; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvVTJBRE1JTkdJVC9zcmMvYXBwL2Rhc2hib2FyZC1oZWFkZXIvZGFzaGJvYXJkLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlFQUF5RDtVQUF6RCxpRUFBeUQ7RUFDekQsd0NBQStCO1VBQS9CLGdDQUErQjtFQUMvQixvQ0FBMkI7VUFBM0IsNEJBQTJCO0VBQzNCLDRCQUFtQjtVQUFuQixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRTtJQUNJLDJDQUFrQztZQUFsQyxtQ0FBa0MsRUFBQTtFQUd0QztJQUNJLDBDQUFpQztZQUFqQyxrQ0FBaUMsRUFBQTtFQUdyQztJQUNJLDJDQUFrQztZQUFsQyxtQ0FBa0MsRUFBQTtFQUd0QztJQUNJLDBDQUFpQztZQUFqQyxrQ0FBaUMsRUFBQSxFQUFBOztBQWR2QztFQUNFO0lBQ0ksMkNBQWtDO1lBQWxDLG1DQUFrQyxFQUFBO0VBR3RDO0lBQ0ksMENBQWlDO1lBQWpDLGtDQUFpQyxFQUFBO0VBR3JDO0lBQ0ksMkNBQWtDO1lBQWxDLG1DQUFrQyxFQUFBO0VBR3RDO0lBQ0ksMENBQWlDO1lBQWpDLGtDQUFpQyxFQUFBLEVBQUE7O0FBSXZDO0VBQ0UsMEJBQXlCO0VBQ3pCLGFBQVk7RUFDWixjQUFhO0VBQ2IsZ0JBQWU7RUFDZixhQUFZO0VBQ1osZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsc0JBQXFCLEVBQ3RCOztBQUVEO0VBQ0UsY0FBYTtFQUNiLG1CQUFrQjtFQUNsQiwwQkFBeUI7RUFDekIsaUJBQWdCO0VBQ2hCLGdEQUE0QztFQUM1QyxXQUFVLEVBQ1g7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLHNCQUFxQjtFQUNyQixlQUFjLEVBQ2Y7O0FBRUQ7RUFBMkIsMEJBQXlCLEVBQUU7O0FBRXREO0VBQ0UsZUFBYyxFQUNmOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkLWhlYWRlci9kYXNoYm9hcmQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNoYWtlaXQ6aG92ZXIge1xuICAgIGFuaW1hdGlvbjogc2hha2UgMC44MnMgY3ViaWMtYmV6aWVyKC4zNiwuMDcsLjE5LC45NykgYm90aDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHNoYWtlIHtcbiAgICAxMCUsIDkwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMCk7XG4gICAgfVxuICBcbiAgICAyMCUsIDgwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTtcbiAgICB9XG4gIFxuICAgIDMwJSwgNTAlLCA3MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC00cHgsIDAsIDApO1xuICAgIH1cbiAgXG4gICAgNDAlLCA2MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDRweCwgMCwgMCk7XG4gICAgfVxuICB9XG5cbiAgLmRyb3BidG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5kcm9wZG93biB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICBcbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgbWluLXdpZHRoOiAxNjBweDtcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIFxuICAuZHJvcGRvd24tY29udGVudCBhIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMX1cbiAgXG4gIC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gIC5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTtcbiAgfVxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard-header/dashboard-header.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard-header/dashboard-header.component.ts ***!
  \****************************************************************/
/*! exports provided: DashboardHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardHeaderComponent", function() { return DashboardHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardHeaderComponent = /** @class */ (function () {
    function DashboardHeaderComponent() {
    }
    DashboardHeaderComponent.prototype.ngOnInit = function () {
    };
    DashboardHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-header',
            template: __webpack_require__(/*! ./dashboard-header.component.html */ "./src/app/dashboard-header/dashboard-header.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-header.component.scss */ "./src/app/dashboard-header/dashboard-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardHeaderComponent);
    return DashboardHeaderComponent;
}());



/***/ }),

/***/ "./src/app/error-page/error-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/error-page/error-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"Error404Page\" >\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <h1 class=\"Error404Desc\"><label class=\"Error404\">404</label><br>\n        Sorry the page your are looking for could not be found</h1>\n        <button class=\"ErrorBtn mt-4\">Are You Here</button>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/error-page/error-page.component.scss":
/*!******************************************************!*\
  !*** ./src/app/error-page/error-page.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/error-page/error-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/error-page/error-page.component.ts ***!
  \****************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent() {
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
    };
    ErrorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error-page',
            template: __webpack_require__(/*! ./error-page.component.html */ "./src/app/error-page/error-page.component.html"),
            styles: [__webpack_require__(/*! ./error-page.component.scss */ "./src/app/error-page/error-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ }),

/***/ "./src/app/faq/faq.component.html":
/*!****************************************!*\
  !*** ./src/app/faq/faq.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <nav class=\"navbar navbar-expand-md navpadding\" style=\"background-color: #020748\">\n          <!-- Brand -->\n          <a class=\"navbar-brand\" routerLink='/HomePage'><img src=\"/assets/images/logo.png\"></a>\n        \n          <!-- Toggler/collapsibe Button -->\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n          <mat-icon style=\"color:black\">menu</mat-icon>\n          </button>\n        \n          <!-- Navbar links -->\n          <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n                <ul class=\"navbar-nav ml-auto\">\n                      <li class=\"nav-item active\">\n                        <a routerLink='/HomePage' class=\"nav-link\">Home</a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a routerLink='/HomePage' class=\"nav-link\">About</a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a routerLink='/HomePage' class=\"nav-link\">Service</a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a routerLink='/HomePage' class=\"nav-link\">Blog</a>\n                      </li>\n                      <!-- <li class=\"nav-item\">\n                        <a class=\"nav-link\" data=\"id_services\" ng-reflect-ngx-scroll-to=\"#contact\" >Fees</a>\n                      </li> -->\n                      <li class=\"nav-item\">\n                        <a routerLink='/HomePage' class=\"nav-link\" >Contact Us</a>\n                      </li>\n                        <li class=\"nav-item\">\n                        <button href=\"#\" class=\"btn navBtn\" >Get a Quote</button>\n                      </li>\n                </ul>\n          </div>\n        </nav> \n\n<section style=\"background-color:#F5F8FF\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 mt-4\">\n          <div class=\"FAQ_Heading\">\n              <h2>FAQ</h2>\n          </div>\n      </div>\n      <div class=\"col-lg-8 mb-4\">\n        <div>\n            <mat-accordion>\n                <mat-expansion-panel>\n                  <mat-expansion-panel-header>\n                    <div class=\"FAQ_Accordion\">\n                      <p>How to Create Account</p>\n                    </div>\n                  </mat-expansion-panel-header>\n                  <p>I'm visible because I am open</p>\n                </mat-expansion-panel><div class=\"Space_Accordion\"></div>\n                <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                                     (closed)=\"panelOpenState = false\">\n                  <mat-expansion-panel-header>\n                      <div class=\"FAQ_Accordion\">\n                          <p>How to Exchange Currency</p>\n                        </div>\n                  </mat-expansion-panel-header>\n                  <p>I'm visible because I am open</p>\n                </mat-expansion-panel><div class=\"Space_Accordion\"></div>\n                <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                                     (closed)=\"panelOpenState = false\">\n                  <mat-expansion-panel-header>\n                      <div class=\"FAQ_Accordion\">\n                          <p>How to Exchange with Other User's</p>\n                        </div>\n                  </mat-expansion-panel-header>\n                  <p>I'm visible because I am open</p>\n                </mat-expansion-panel><div class=\"Space_Accordion\"></div>\n                <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                                     (closed)=\"panelOpenState = false\">\n                  <mat-expansion-panel-header>\n                      <div class=\"FAQ_Accordion\">\n                          <p>How to Sign-up with UsADMIN</p>\n                        </div>\n                  </mat-expansion-panel-header>\n                  <p>I'm visible because I am open</p>\n                </mat-expansion-panel><div class=\"Space_Accordion\"></div>\n                <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                                     (closed)=\"panelOpenState = false\">\n                  <mat-expansion-panel-header>\n                      <div class=\"FAQ_Accordion\">\n                          <p>How to Create Account</p>\n                        </div>\n                  </mat-expansion-panel-header>\n                  <p>I'm visible because I am open</p>\n                </mat-expansion-panel><div class=\"Space_Accordion\"></div>\n                <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                                     (closed)=\"panelOpenState = false\">\n                  <mat-expansion-panel-header>\n                      <div class=\"FAQ_Accordion\">\n                          <p>How to Create Account</p>\n                        </div>\n                  </mat-expansion-panel-header>\n                  <p>I'm visible because I am open</p>\n                </mat-expansion-panel><div class=\"Space_Accordion\"></div>\n                <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                (closed)=\"panelOpenState = false\">\n                <mat-expansion-panel-header>\n                <div class=\"FAQ_Accordion\">\n                    <p>How to Create Account</p>\n                  </div>\n                </mat-expansion-panel-header>\n                <p>I'm visible because I am open</p>\n                </mat-expansion-panel><div class=\"Space_Accordion\"></div>\n                <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                                (closed)=\"panelOpenState = false\">\n                <mat-expansion-panel-header>\n                <div class=\"FAQ_Accordion\">\n                    <p>How to Create Account</p>\n                  </div>\n                </mat-expansion-panel-header>\n                <p>I'm visible because I am open</p>\n                </mat-expansion-panel>\n              </mat-accordion>\n        </div>\n      </div>\n      <div class=\"col-lg-4 mb-4\">\n        <div class=\"FAQ_Section\">\n          <p>Still You  Have a Question</p>\n          <mat-form-field appearance=\"outline\" class=\"col-lg-12\">\n              <mat-label>Name</mat-label>\n              <input matInput placeholder=\"Placeholder\" autocomplete=\"off\">\n              <mat-icon matSuffix>contacts</mat-icon>\n              <!-- <mat-hint>Hint</mat-hint> -->\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" class=\"col-lg-12\">\n              <mat-label>E-mail</mat-label>\n              <input matInput placeholder=\"Enter your email\" required autocomplete=\"off\">\n              <mat-icon matSuffix>contact_mail</mat-icon>\n              <!-- <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error> -->\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" class=\"example-full-width col-lg-12\">\n              <mat-label>Leave Your Message Here</mat-label>\n              <textarea matInput rows=\"5\" placeholder=\"Leave a comment\"></textarea>\n          </mat-form-field>\n          <div class=\"text-center\">\n              <button class=\"FAQ_Btn\">Submit</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>      \n  \n    \n<section class=\"FooterBackGroungColor\">\n    <app-footer></app-footer>\n  </section>"

/***/ }),

/***/ "./src/app/faq/faq.component.scss":
/*!****************************************!*\
  !*** ./src/app/faq/faq.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {\n  background: #020748;\n  color: #ffffff; }\n\n.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {\n  background: #020748;\n  color: #ffffff; }\n\n::ng-deep .mat-expansion-indicator::after {\n  border-style: solid;\n  border-width: 0 2px 2px 0;\n  content: '';\n  color: #E72B90;\n  display: inline-block;\n  padding: 3px;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  vertical-align: middle; }\n\n.example-full-width {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvVTJBRE1JTkdJVC9zcmMvYXBwL2ZhcS9mYXEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBbUI7RUFDbkIsZUFBYyxFQUNqQjs7QUFLRDtFQUNJLG9CQUFtQjtFQUFDLGVBQWMsRUFDckM7O0FBQ0Q7RUFDSSxvQkFBbUI7RUFDbkIsMEJBQXlCO0VBQ3pCLFlBQVc7RUFDWCxlQUFjO0VBQ2Qsc0JBQXFCO0VBQ3JCLGFBQVk7RUFDWixpQ0FBd0I7VUFBeEIseUJBQXdCO0VBQ3hCLHVCQUFzQixFQUN6Qjs7QUFDRDtFQUNJLFlBQVcsRUFDWiIsImZpbGUiOiJzcmMvYXBwL2ZhcS9mYXEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDIwNzQ4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuLy8gOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsOjphZnRlciAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKTpmb2N1cyB7XG4vLyAgICAgYmFja2dyb3VuZDogIzAyMDc0ODtcbi8vICAgICBjb2xvcjogI2ZmZmZmZjtcbi8vIH1cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5tYXQtZXhwYW5kZWQ6Zm9jdXMsIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5tYXQtZXhwYW5kZWQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICMwMjA3NDg7Y29sb3I6ICNmZmZmZmY7XG59XG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24taW5kaWNhdG9yOjphZnRlciB7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGNvbG9yOiAjRTcyQjkwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/faq/faq.component.ts":
/*!**************************************!*\
  !*** ./src/app/faq/faq.component.ts ***!
  \**************************************/
/*! exports provided: FAQComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAQComponent", function() { return FAQComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var FAQComponent = /** @class */ (function () {
    function FAQComponent() {
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
    }
    FAQComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    FAQComponent.prototype.ngOnInit = function () {
    };
    FAQComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.scss */ "./src/app/faq/faq.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FAQComponent);
    return FAQComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-lg-5\">\n      <div class=\"FooterCompanyDetails\">\n          <img src=\"assets/images/logo.png\" alt=\"\">\n          <p class=\"FoterDesc\">About Company is the world number one crypto exchange with many users.</p>\n      </div>\n    </div>\n    <div class=\"col-lg-2 col-md-2 col-sm-6 col-xs-6\">\n        <h3 class=\"FooterLinkHeading\">Quick Links</h3>\n        <ul class=\"FooterLinkItem\">\n          <li class=\"FoterLink\" routerLink='/HomePage'>Home</li>\n          <li class=\"FoterLink\" routerLink='/AboutUs'>About</li>\n          <li class=\"FoterLink\">Market</li>\n          <li class=\"FoterLink\">Blog</li>\n        </ul>\n      </div>\n      <div class=\"col-lg-2 col-md-2 col-sm-6 col-xs-6\">\n          <h3 class=\"FooterLinkHeading\">Navigate</h3>\n          <ul class=\"FooterLinkItem\">\n            <li class=\"FoterLink\"><a herf=\"\">Company</a></li>\n            <li class=\"FoterLink\">Developer</li>\n            <li class=\"FoterLink\">Advisers</li>\n            <li class=\"FoterLink\">Connect</li>\n          </ul>\n      </div>\n      <div class=\"col-lg-3\">\n          <h3 class=\"FooterLinkHeading\">Contact Us</h3>\n          <ul class=\"FooterContactUsList\">\n            <li class=\"FooterContactUsItem\"><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i><span class=\"FooterContactUsDetails\">u2admin@gmail.com</span></li>\n            <li class=\"FooterContactUsItem\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i><span class=\"FooterContactUsDetails\">+91 2395744286</span></li>\n            <li class=\"FooterContactUsItem\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span class=\"FooterContactUsDetails\">234, Dubai main road<br>Dubai</span></li>\n          </ul>\n      </div>\n      <div class=\"col-lg-12 FoterSocialLink\">\n          <a href=\"\" class=\"FoterSocialItem\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>\n          <a href=\"\" class=\"FoterSocialItem\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n          <a href=\"\" class=\"FoterSocialItem\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a>\n        <div class=\"FoterHrLine\"></div>\n      </div>\n      <div class=\"col-lg-12 text-center\">\n          <h5 class=\"copyright\">&copy;Copyright 2020 U2Admin. All rights reserved.</h5>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/forget-password/forget-password.component.html":
/*!****************************************************************!*\
  !*** ./src/app/forget-password/forget-password.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"FooterBackGroungColor1 BackGroundIMG1\">\n  <app-header></app-header>\n  <div class=\"container\">\n    <div class=\"row\"  fxLayout=\"column\">\n      <div class=\"col-lg-5 m-auto col-md-8 col-12 text-center\">\n        <div class=\"FormsCSS\">\n          <h4 class=\"Title_Login\">Forget Password</h4>\n          <p class=\"Desc_Login\">If you Remember Password <a routerLink='/Login' class=\"SignUp_HyperLink\">Login</a></p>\n          <img src=\"assets/images/mail-512.png\" alt=\"\">\n          <!-- Form Section Start -->\n          <form (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n            <!-- E-Mail_ID Section -->\n            <input placeholder=\"E-mail Address\" class=\"InputField_Login mt-4 mb-2\"\n            [(ngModel)]=\"model.email\" name=\"email\"\n            #email=\"ngModel\"\n            [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\" \n            required autocomplete=\"off\">\n\n            <div class=\"err\">\n                <mat-error *ngIf=\"email.invalid && f.submitted && email.errors.required\">\n                  E-mail_ID Required\n                </mat-error>\n            </div>\n\n            <div fxLayoutAlign=\"center center\" class=\"ReCaptcha\">\n              <re-captcha (resolved)=\"resolved($event)\" siteKey=\"6LdwMMgUAAAAAGteaHHXv3OTn8I9nYXO-USZVdbk\"></re-captcha>\t\n            </div>\n\n              <button class=\"Submin_Btn\" type=\"submit\" *ngIf=\"!submitted\">Submit</button>\n          </form>\n          <!-- Form Section End -->\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/forget-password/forget-password.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/forget-password/forget-password.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/forget-password/forget-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forget-password/forget-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function() { return ForgetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_commonservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/commonservice.service */ "./src/app/Services/commonservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/toastr.es5.js");



// import { HttpClient, HttpEventType } from '@angular/common/http';



var ForgetPasswordComponent = /** @class */ (function () {
    function ForgetPasswordComponent(fb, service, toastr, router) {
        this.fb = fb;
        this.service = service;
        this.toastr = toastr;
        this.router = router;
        this.model = {};
        this.userIn = false;
    }
    ForgetPasswordComponent.prototype.resolved = function (captchaResponse) {
        console.log("Resolved captcha with response: " + captchaResponse);
    };
    ForgetPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgetPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        var datas = {
            "email_ID": this.model.email,
        };
        this.service.postfunction('users/forgetpassword', datas).subscribe(function (res) {
            console.log(res);
            if (res.status == true) {
                _this.toastr.clear();
                _this.toastr.success(res.message, 'Success');
                // this.router.navigate(['/HomePage']);
            }
            else {
                _this.toastr.clear();
                _this.toastr.error(res.message, 'Oops');
            }
        });
    };
    ForgetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forget-password',
            template: __webpack_require__(/*! ./forget-password.component.html */ "./src/app/forget-password/forget-password.component.html"),
            styles: [__webpack_require__(/*! ./forget-password.component.scss */ "./src/app/forget-password/forget-password.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _Services_commonservice_service__WEBPACK_IMPORTED_MODULE_3__["CommonserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <nav class=\"navbar navbar-expand-md navpadding\" style=\"padding: 28px 70px;\">\n        <!-- Brand -->\n        <a class=\"navbar-brand\" routerLink='/HomePage'><img src=\"/assets/images/logo.png\"></a>\n      \n        <!-- Toggler/collapsibe Button -->\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n        <mat-icon style=\"color:black\">menu</mat-icon>\n        </button>\n      \n        <!-- Navbar links -->\n        <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n              <ul class=\"navbar-nav ml-auto\">\n                    <li class=\"nav-item active\">\n                      <a routerLink='/HomePage' class=\"nav-link\">Home</a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a routerLink='/AboutUs' class=\"nav-link\">About</a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a routerLink='/Dashboard' class=\"nav-link\">Service</a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a routerLink='/HomePage' class=\"nav-link\">Blog</a>\n                    </li>\n                    <!-- <li class=\"nav-item\">\n                      <a class=\"nav-link\" data=\"id_services\" ng-reflect-ngx-scroll-to=\"#contact\" >Fees</a>\n                    </li> -->\n                    <li class=\"nav-item\">\n                      <a routerLink='/ContactUs' class=\"nav-link\" >Contact Us</a>\n                    </li>\n                      <li class=\"nav-item\">\n                      <button routerLink='/Login' class=\"btn navBtn\" >Login</button>\n                    </li>\n              </ul>\n        </div>\n      </nav> \n\n  "

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"BackGroundIMG\">\n  <app-header></app-header>\n  <div class=\"container\">\n    <div class=\"row text-center\">\n      <div class=\"col-lg-12\">\n        <h1 class=\"BannerHeader\">Easy Way to Trade Your Crypto</h1>\n        <p class=\"BannerDesc\">Exchange any currency to have your Crypto</p>\n        <button routerLink='/Signup' class=\"BannerBtn\">Get Started</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Market Value Section -->\n<section>\n    <div class=\"container\">\n        <div class=\"row\" fxHide fxShow.xs>\n          <div class=\"col-lg-12\">\n              <h2 class=\"HomepageHeading text-center\">Market Price</h2>\n          </div>\n        </div>\n        <div class=\"row text-center\">\n          <div class=\"col-lg-12 m-auto MarketTableSection\">\n            \n              <div class=\"example-container mat-elevation-z8 Send_Receive_Table\">\n               <div style=\"display:inline-flex;background-color: white;width: 100%;padding: 10px; position: sticky;\">\n               <div class=\"col-lg-4 MarketPriceInput\">\n                  <mat-search-bar></mat-search-bar>\n                 <!-- <input type=\"text\" placeholder=\"Search\"> -->\n                 <!-- <i class=\"fa fa-search\" style=\"margin-left: -25px;color:lightgray\" aria-hidden=\"true\"></i> -->\n               </div>\n      \n      \n                    <h2 class=\"TableHeading col-lg-4\"fxShow fxHide.xs>Market Price</h2>\n                    <div class=\"col-lg-4\">\n                    <div class=\"CoinDropDown\">\n                        <mat-form-field appearance=\"outline\">\n                            <mat-label>Currency</mat-label>\n                            <mat-select [(value)]=\"selected\">\n                              <mat-option>None</mat-option>\n                              <mat-option value=\"option1\">Option 1</mat-option>\n                              <mat-option value=\"option2\">Option 2</mat-option>\n                              <mat-option value=\"option3\">Option 3</mat-option>\n                            </mat-select>\n                          </mat-form-field>  \n                        <!-- <p style=\"color:gray\">USD</p>\n                        <i class=\"fa fa-angle-down\" aria-hidden=\"true\" style=\"font-size:24px;color:lightgray;margin-left: 30px;\"></i> -->\n                      </div>\n                    </div>\n                  </div> \n                  <table mat-table [dataSource]=\"dataSource\" class=\"\">\n                \n                    <!-- Position Column -->\n                    <ng-container matColumnDef=\"position\">\n                      <th mat-header-cell *matHeaderCellDef> S.no </th>\n                      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n                    </ng-container>\n                \n                    <!-- Name Column -->\n                    <ng-container matColumnDef=\"name\">\n                      <th mat-header-cell *matHeaderCellDef> Pair </th>\n                      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                    </ng-container>\n                \n                    <!-- Weight Column -->\n                    <ng-container matColumnDef=\"weight\">\n                      <th mat-header-cell *matHeaderCellDef> Price </th>\n                      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n                    </ng-container>\n                \n                    <!-- Symbol Column -->\n                    <ng-container matColumnDef=\"symbol\">\n                      <th mat-header-cell *matHeaderCellDef> 24th Change </th>\n                      <td mat-cell *matCellDef=\"let element\"  [ngStyle]=\"{'color':element.symbol >= '0.24%' ? 'red' : 'green' }\"> {{element.symbol}} </td>\n                    </ng-container>\n      \n                    <!-- Symbol Column -->\n                    <ng-container matColumnDef=\"ol\">\n                        <th mat-header-cell *matHeaderCellDef> 24H High </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.ol}} </td>\n                      </ng-container>\n      \n                    <!-- Symbol Column -->\n                    <ng-container matColumnDef=\"vol\">\n                        <th mat-header-cell *matHeaderCellDef> 24H Vol</th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.vol}} </td>\n                      </ng-container>\n                      \n                    <!-- Symbol Column -->\n                    <ng-container matColumnDef=\"change\" >\n                        <th mat-header-cell *matHeaderCellDef fxHide fxShow.gt-sm> Change </th>\n                        <td mat-cell *matCellDef=\"let element\" fxHide fxShow.gt-sm><img src=\"{{element.change}}\" alt=\"\">  </td>\n                      </ng-container>    \n      \n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                  </table>\n                </div>\n                <div class=\"col-lg-12\">\n                <button class=\"MarketPriceButton\">View More</button></div>\n          </div>\n        </div>\n      </div>\n</section>\n\n\n<div class=\"BodyBackGround\">\n<!-- Buy & Sell Coin Quick  -->\n<section fxHide fxShow.gt-sm>\n  <div class=\"container mt-4 margin-top-bottom\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center margin-bottom\">\n          <h2 class=\"HomepageHeading\">Buy & Sell Coin Quick</h2>\n          <p class=\"HomepageHeading-Desc\">Buy and Sell Coin Quickly with our new futures</p>\n      </div>\n    </div>\n    <div class=\"row Buy-SellSection\">\n      <div class=\"col-lg-5 text-center\">\n          <p class=\"text-center\">Buy</p>\n        <div class=\"text-center\" style=\"display: inline-flex;\" class=\"col-lg-12\">\n          <img src=\"assets/images/Bitcoin.png\" alt=\"\">\n          <div style=\"margin-left: 40px;margin-top:10px;font-size: 14px;font-weight: 600;\">\n              <button class=\"Buy_SellBtn\"  id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  {{ SelectedOption }}\n                  <i class=\"fa fa-angle-down Buy-SellArrowIcon pull-right\"  aria-hidden=\"true\"\n                  style=\"font-size: 24px;\"></i>\n                </button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" *ngFor= \"let Currencys of Currency\">\n                    <a class=\"dropdown-item\" (click)=\"Change1( Currencys.name )\">{{ Currencys.name }}</a>\n                </div>\n          </div>\n      </div>\n      <form class=\"example-form text-center\">\n        <mat-form-field class=\"example-full-width\" class=\"col-lg-12\">\n          <input matInput placeholder=\"\" value=\"37.45\"  [(ngModel)]=\"demo\"  [ngModelOptions]=\"{standalone:\n            true}\">\n        </mat-form-field>\n      </form>\n    </div>\n      <div class=\"col-lg-2 Buy-SellCoin-MiddleSection text-center\" >\n        <p style=\"margin-top:44px;\">1BTC = $24.00</p>\n        <img class=\"Transfer-Img\" (click)=\"ChangeInverse(demo, demo1)\" src=\"assets/images/transfer (2).png\" alt=\"\">\n      </div>\n      <div class=\"col-lg-5 text-center\">\n          <p class=\"text-center\">Rate</p>\n          <div style=\"display: inline-flex;\" class=\"col-lg-12\">\n            <img src=\"assets/images/Dollor.png\" alt=\"\">\n            <div style=\"margin-left: 40px;margin-top:10px;font-size: 14px;font-weight: 600;\">\n                <button class=\"Buy_SellBtn\"  id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  {{ selectedOption1 }}\n                  <i class=\"fa fa-angle-down Buy-SellArrowIcon pull-right\" aria-hidden=\"true\"\n                  style=\"font-size: 24px;\"></i>\n                </button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" *ngFor= \"let Currencys of Currency\">\n                    <a class=\"dropdown-item\" (click)=\"Change( Currencys.name )\">{{ Currencys.name }}</a>\n                </div>\n              </div>\n        </div>\n        <form class=\"example-form\">\n            <mat-form-field class=\"example-full-width\" class=\"col-lg-12\">\n              <input matInput placeholder=\"\" value=\"37.4\"  [(ngModel)]=\"demo1\"  [ngModelOptions]=\"{standalone:\n                true}\">\n            </mat-form-field>\n            </form>\n      </div>\n    </div>\n  </div>\n</section>\n<section fxShow fxHide.gt-sm>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <!-- <div class=\"col-lg-4 \"> -->\n            <h2 class=\"HomepageHeading text-center\">Exchange</h2>\n          <!-- <h2 class=\"Dashboard_Heading mt-4 mb-4\">Exchange</h2> -->\n          <div class=\"Exchange_Section\">\n            <h4 class=\"Exchange_heading text-center\">You Have</h4>\n            <div class=\"row\">\n                <div class=\"col-lg-6 text-center\">\n                    <input type=\"text\" class=\"Exchange_Input\" value=\"4456\">\n                  </div>\n                  <div class=\"col-lg-6 text-center\">\n                    <mat-form-field>\n                        <mat-label>Currency</mat-label>\n                        <mat-select [(value)]=\"selected\"  panelClass=\"my-panel\" >\n                          <mat-option>NONE</mat-option>\n                          <mat-option value=\"option1\">ETH</mat-option>\n                          <mat-option value=\"option2\">LIT</mat-option>\n                          <mat-option value=\"option3\">ERK</mat-option>\n                          <mat-option value=\"option3\">BTC</mat-option>\n                        </mat-select>\n                      </mat-form-field>\n                      \n                    </div>\n                    <div class=\"text-center col-lg-12\">\n                        <!-- <img src=\"assets/images/transfer(3).png\" alt=\"\" style=\"    background-color: lightgray;\n                        border-radius: 55%;\n                        height: 18px;\n                        padding: 5px;\n                        margin-top: 6px;\"> -->\n                        <mat-icon class=\"SWAP_Change\">swap_horizontal_circle</mat-icon>\n                        <hr class=\"line\">\n                      </div>\n                      <div class=\"col-lg-12\">\n                          <h4 class=\"Exchange_heading text-center mt-4\">You Get</h4>\n                      </div>\n                      \n                      <div class=\"col-lg-6 text-center\">\n                          <input type=\"text\" class=\"Exchange_Input\" value=\"4456\">\n                        </div>\n                        <div class=\"col-lg-6 text-center\">\n                            <mat-form-field>\n                                <mat-label>Currency</mat-label>\n                                <mat-select [(value)]=\"selected\"  panelClass=\"my-panel\" >\n                                  <mat-option>NONE</mat-option>\n                                  <mat-option value=\"option1\">ETH</mat-option>\n                                  <mat-option value=\"option2\">LIT</mat-option>\n                                  <mat-option value=\"option3\">ERK</mat-option>\n                                  <mat-option value=\"option3\">BTC</mat-option>\n                                </mat-select>\n                              </mat-form-field>\n                          </div>\n            </div>\n            <div class=\"text-center mt-4\">\n                <button class=\"ExchangeBtn\">Exchange</button>\n            </div>\n          </div>\n \n      <!-- </div> -->\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- CryptoCurrency Exchange -->\n<section>\n  <div class=\"container mt-4 margin-top-bottom\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center margin-bottom\">\n          <h2 class=\"HomepageHeading\">Investing In Cryptocurrency Exchange</h2>\n          <p class=\"HomepageHeading-Desc\">What we do for the Cryptocurrency Exchange</p>\n      </div>\n      <div class=\"col-lg-3 text-center\">\n        <img src=\"assets/images/CryptoExchange2.png\" alt=\"\">\n        <div class=\"CryptoExchange-Title\">Its Better Way To Move Money</div>\n        <div class=\"CryptoExchange-Desc\">What we do for the Cryptocurrency Exchange</div>\n      </div>\n      <div class=\"col-lg-3 text-center\">\n          <img src=\"assets/images/CryptoExchange3.png\" alt=\"\">\n        <div class=\"CryptoExchange-Title\">Its True Finacial Freedom</div>\n        <div class=\"CryptoExchange-Desc\">What we do for the Cryptocurrency Exchange</div>\n      </div>\n      <div class=\"col-lg-3 text-center\">\n          <img src=\"assets/images/CryptoExchange4.png\" alt=\"\">\n        <div class=\"CryptoExchange-Title\">Its New Type of Inversment</div>\n        <div class=\"CryptoExchange-Desc\">What we do for the Cryptocurrency Exchange</div>\n        </div>\n      <div class=\"col-lg-3 text-center\">\n          <img src=\"assets/images/CryptoExchange1.png\" alt=\"\">\n        <div class=\"CryptoExchange-Title\">Available in Over a Country</div>\n        <div class=\"CryptoExchange-Desc\">What we do for the Cryptocurrency Exchange</div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!--Latest News  -->\n<section>\n  <div class=\"container mt-4 margin-top-bottom\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center margin-bottom\">\n          <h2 class=\"HomepageHeading\"> Latest News</h2>\n          <p class=\"HomepageHeading-Desc\">Latest News about the crypto world and U2ADMIN</p>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"LatestNewsSection\">\n            <div class=\"\">\n                <img class=\"LatestNewsSection-Image\" src=\"assets/images/LatestNewsImage3.jpeg\" alt=\"Card image\" style=\"width:100%\">\n                <div class=\"card-body\">\n                  <h4 class=\"LatestNewsSection-Header\">Are Argentinians paying for Uber rides with bitcoins?</h4>\n                  <p class=\"LatestNewsSection-Desc\">Bitcoin is not being used to pay for Uber in Argentina, and any such news should be</p>\n                  <a href=\"\" class=\"LatestNewsSection-ReadMore\">Read More</a>\n                </div>\n              </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n          <div class=\"LatestNewsSection\">\n              <div class=\"\">\n                  <img class=\"LatestNewsSection-Image\" src=\"assets/images/LatestNewsImage2.jpeg\" alt=\"Card image\" style=\"width:100%\">\n                  <div class=\"card-body\">\n                    <h4 class=\"LatestNewsSection-Header\">Bitcoin to banknotes</h4>\n                    <p class=\"LatestNewsSection-Desc\">The cryptocurrency is going tangible: 10,000 notes have been manufactured and</p>\n                    <a href=\"\" class=\"LatestNewsSection-ReadMore\">Read More</a>\n                  </div>\n                </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4\">\n            <div class=\"LatestNewsSection\">\n                <div class=\"\">\n                    <img class=\"LatestNewsSection-Image\" src=\"assets/images/LatestNewsImage1.jpeg\" alt=\"Card image\" style=\"width:100%\">\n                    <div class=\"card-body\">\n                      <h4 class=\"LatestNewsSection-Header\">BoE: Bitcoin not a currency</h4>\n                      <p class=\"LatestNewsSection-Desc\">Mark Carney, the Governor of the Bank of England, blatantly stated that bitcoin has</p>\n                      <a href=\"\" class=\"LatestNewsSection-ReadMore\">Read More</a>\n                    </div>\n                  </div>\n            </div>\n          </div>\n    </div>\n  </div>\n</section>\n\n<!-- News Letters Section -->\n<section>\n  <div class=\"container mt-4 margin-top-bottom\">\n    <div class=\"row text-center\">\n      <div class=\"col-lg-12\">\n        <h2 class=\"HomepageHeading\">News Letters</h2>\n        <p class=\"HomepageHeading-Desc margin-bottom\">If you want to get latest new or infomation about crypto touch with us </p>\n        <form class=\"NewLetterForm mt-4\">\n            <input type=\"text\" class=\"NewLetteInput\" placeholder=\"Enter your E-mail_ID\">\n            <button class=\"btn NewLetterButton\">Subscribe</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n</div>\n<section class=\"FooterBackGroungColor mt-4\">\n  <app-footer></app-footer>\n</section>\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.scss":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  height: 375px;\n  overflow: auto;\n  margin-top: -250px;\n  overflow-x: hidden;\n  scroll-behavior: smooth; }\n\n.MarketPriceInput {\n  margin-top: 26px; }\n\nmat-search-bar {\n  margin-left: 213px; }\n\ntable {\n  width: 100%; }\n\ntr.mat-header-row {\n  background-color: #0E1F70; }\n\nth.mat-header-cell {\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: center; }\n\ntr.mat-row:nth-child(odd) {\n  background-color: #F7F7F7; }\n\ntr.mat-row {\n  border: none; }\n\n.TableHeading {\n  color: black;\n  background-color: #ffffff;\n  margin-bottom: 0px;\n  font-size: 18px;\n  padding: 20px;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.CoinDropDown {\n  margin-top: 10px; }\n\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-infix {\n  padding: 12px 0 12px 0 !important; }\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 90%; }\n\n.example-full-width {\n  width: 100%; }\n\n.dropdown-menu {\n  right: auto;\n  bottom: auto;\n  width: 69%; }\n\n.dropdown-item:active {\n  color: #fff;\n  text-decoration: none;\n  background-color: #E72B90; }\n\n.dropdown-item:focus, .dropdown-item:hover {\n  color: #ffffff !important;\n  text-decoration: none;\n  background-color: #E72B90; }\n\n@media only screen and (max-width: 600px) {\n  .NewLetteInput {\n    width: 100%; }\n  .btn.NewLetterButton {\n    margin-top: 10px; }\n  td.mat-cell, td.mat-footer-cell, th.mat-header-cell {\n    font-size: 13px; }\n  mat-search-bar[_ngcontent-c1] {\n    margin-left: 0px; }\n  .example-container[_ngcontent-c1] {\n    height: auto; }\n  .MarketTableSection {\n    margin-top: 0px; } }\n\n@media only screen and (max-width: 780px) {\n  mat-search-bar[_ngcontent-c1] {\n    margin-left: 0px; } }\n\n@media only screen and (max-width: 400px) {\n  .Send_Receive_Table {\n    width: 100%;\n    overflow-x: scroll; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvVTJBRE1JTkdJVC9zcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLGVBQWM7RUFDZCxtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLHdCQUF1QixFQUMxQjs7QUFDRDtFQUNJLGlCQUFnQixFQUNuQjs7QUFDRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFDRDtFQUNJLFlBQVcsRUFDZDs7QUFDRDtFQUNJLDBCQUF5QixFQUM1Qjs7QUFDRDtFQUNJLGVBQWM7RUFDZCxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixtQkFDSixFQUFDOztBQUNEO0VBQ0ksMEJBQXlCLEVBQzVCOztBQUNEO0VBQ0ksYUFBWSxFQUNmOztBQUNEO0VBQ0ksYUFBWTtFQUNaLDBCQUF5QjtFQUN6QixtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixjQUFhO0VBQ2IseUJBQXVCO1VBQXZCLHdCQUF1QixFQUMxQjs7QUFDRDtFQUNJLGlCQUFnQixFQUNuQjs7QUFDRDtFQUNJLGtDQUFpQyxFQUNwQzs7QUFDRDtFQUNJLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsV0FBVSxFQUNiOztBQUVEO0VBQ0ksWUFBVyxFQUNkOztBQUNEO0VBQ0ksWUFBVztFQUNYLGFBQVk7RUFDWixXQUFVLEVBQ2I7O0FBQ0Q7RUFDSSxZQUFXO0VBQ1gsc0JBQXFCO0VBQ3JCLDBCQUF5QixFQUM1Qjs7QUFDRDtFQUNJLDBCQUF3QjtFQUN4QixzQkFBcUI7RUFDckIsMEJBQXlCLEVBQzVCOztBQUNEO0VBQ0k7SUFDQSxZQUFXLEVBQ1Y7RUFDRDtJQUNJLGlCQUFnQixFQUNuQjtFQUNEO0lBQ0ksZ0JBQWUsRUFDbEI7RUFDRDtJQUNJLGlCQUFnQixFQUNuQjtFQUNEO0lBQ0ksYUFBWSxFQUNmO0VBQ0Q7SUFDSSxnQkFBZSxFQUNsQixFQUFBOztBQUVMO0VBQ0E7SUFDUSxpQkFBZ0IsRUFDbkIsRUFBQTs7QUFFTDtFQUNJO0lBQ0ksWUFBVztJQUNYLG1CQUFrQixFQUNyQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xuICAgIGhlaWdodDogMzc1cHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogLTI1MHB4O1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cbi5NYXJrZXRQcmljZUlucHV0IHtcbiAgICBtYXJnaW4tdG9wOiAyNnB4OyAgICAgICBcbn1cbm1hdC1zZWFyY2gtYmFye1xuICAgIG1hcmdpbi1sZWZ0OiAyMTNweDtcbn1cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbnRyLm1hdC1oZWFkZXItcm93e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRTFGNzA7XG59XG50aC5tYXQtaGVhZGVyLWNlbGx7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG59XG50ci5tYXQtcm93Om50aC1jaGlsZChvZGQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xufVxudHIubWF0LXJvd3tcbiAgICBib3JkZXI6IG5vbmU7XG59XG4uVGFibGVIZWFkaW5ne1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5Db2luRHJvcERvd257XG4gICAgbWFyZ2luLXRvcDogMTBweDsgXG59XG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIHBhZGRpbmc6IDEycHggMCAxMnB4IDAgIWltcG9ydGFudDtcbn1cbi5leGFtcGxlLWZvcm0ge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3aWR0aDogOTAlO1xufVxuICBcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmRyb3Bkb3duLW1lbnV7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgYm90dG9tOiBhdXRvO1xuICAgIHdpZHRoOiA2OSU7XG59XG4uZHJvcGRvd24taXRlbTphY3RpdmUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTcyQjkwO1xufVxuLmRyb3Bkb3duLWl0ZW06Zm9jdXMsIC5kcm9wZG93bi1pdGVtOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZmZmZiFpbXBvcnRhbnQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNzJCOTA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLk5ld0xldHRlSW5wdXR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5idG4uTmV3TGV0dGVyQnV0dG9ue1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgICB0ZC5tYXQtY2VsbCwgdGQubWF0LWZvb3Rlci1jZWxsLCB0aC5tYXQtaGVhZGVyLWNlbGwge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuICAgIG1hdC1zZWFyY2gtYmFyW19uZ2NvbnRlbnQtYzFdIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICB9XG4gICAgLmV4YW1wbGUtY29udGFpbmVyW19uZ2NvbnRlbnQtYzFde1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuICAgIC5NYXJrZXRUYWJsZVNlY3Rpb257XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4MHB4KSB7XG5tYXQtc2VhcmNoLWJhcltfbmdjb250ZW50LWMxXSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAgIC5TZW5kX1JlY2VpdmVfVGFibGV7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgfVxuICB9Il19 */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol', 'ol', 'vol', 'change'];
        this.dataSource = ELEMENT_DATA;
        this.selectedOption1 = "Dollor";
        this.SelectedOption = "Bitcoin ( BTC )";
        this.Inverse = "";
        this.Currency = [{ name: 'Lite Coin ( LTC )' }, { name: 'B' }];
    }
    HomepageComponent.prototype.ngOnInit = function () {
        console.log(this.SelectedOption, this.selectedOption1);
    };
    HomepageComponent.prototype.Change = function (val) {
        this.selectedOption1 = val;
    };
    HomepageComponent.prototype.Change1 = function (val1) {
        this.SelectedOption = val1;
    };
    HomepageComponent.prototype.ChangeInverse = function (demo, demo1) {
        // this.selectedOption1 == this.SelectedOption;
        // console.log(this.SelectedOption, this.selectedOption1)
        // // console.log(this.Inverse)
        // this.Inverse ==this.selectedOption1;
        // this.SelectedOption == this.Inverse;
        // console.log(this.selectedOption1, this.SelectedOption)
        // this.SelectedOption = this.Inverse;
        this.demo1 = demo;
        this.demo = demo1;
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.scss */ "./src/app/homepage/homepage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());

var ELEMENT_DATA = [
    { position: 1, name: 'BTC', weight: '$10.079', symbol: '0.05%', ol: '0.05%', vol: 23833, change: 'assets/images/grahp3.png' },
    { position: 2, name: 'Litecoin', weight: '$37.079', symbol: '0.03%', ol: '0.05%', vol: 23833, change: 'assets/images/graph1.png' },
    { position: 3, name: 'Ethereum', weight: '$75.079', symbol: '0.05%', ol: '0.05%', vol: 23833, change: 'assets/images/graph4.png' },
];


/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"FooterBackGroungColor1 BackGroundIMG1\">\n  <app-header></app-header>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-5 m-auto col-md-8 col-12 text-center\">\n        <div class=\"FormsCSS\">\n          <h4 class=\"Title_Login\">LOGIN</h4>\n          <p class=\"Desc_Login\">Create a Account <a routerLink='/Signup' class=\"SignUp_HyperLink\">Signin</a></p>\n          <div style=\"display: inline-flex\">\n            <div style=\"border: 1px solid lightgray;\n            padding: 3px;\n            border-radius: 20px;\n            width: 32%;\n            margin-left: 47px;cursor: pointer;\">\n              <a href=\"https://www.google.co.in/\"><img src=\"assets/images/icons8-google-160.png\" width=\"15%\" alt=\"\"><span style=\"margin-left:5px;\">Google</span></a>\n            </div>\n            <div style=\"    border: 1px solid lightgray;\n            padding: 3px;\n            border-radius: 20px;\n            width: 32%;\n            margin-left: 60px;\">\n              <a href=\"https://www.facebook.com/\"><img src=\"assets/images/icons8-facebook-f-150.png\" width=\"15%\" alt=\"\"><span style=\"margin-left:5px;\">Facebook</span></a>\n            </div>\n          </div>\n\n          <!-- Form Section Start -->\n          <form (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n            <!-- E-Mail ID -->\n            <input placeholder=\"E-mail ID\" class=\"InputField_Login\"\n            [(ngModel)]=\"model.email\" name=\"email\"\n            #email=\"ngModel\" pattern=\"[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,63}\"\n            [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\" \n            required autocomplete=\"off\">\n\n            <div class=\"err\">\n                <mat-error *ngIf=\"email.invalid && f.submitted && email.errors.required\">\n                  E-mail_ID Required\n                </mat-error>\n                <mat-error *ngIf=\"email.invalid && f.submitted && email.errors.pattern\">\n                 Invalid Mail ID\n                </mat-error>\n              </div>\n\n            <!-- Password -->\n            <input placeholder=\"Password\" class=\"InputField_Login\"\n                   type=\"password\"\n                  [(ngModel)]=\"model.pass\" name=\"pass\" \n                  #pass=\"ngModel\" \n                  [ngClass]=\"{ 'is-invalid': f.submitted && pass.invalid }\" \n                  required autocomplete=\"off\">\n\n                  <div class=\"err\">\n                      <mat-error *ngIf=\"pass.invalid && f.submitted && pass.errors.required\">\n                       Incorrect Password\n                      </mat-error>\n                    </div>\n                   \n                    \n            <a routerLink='/ForgetPassword' fxLayoutAlign=\"start\" class=\"ForgetHyperLink\">ForgetPassword</a>\n            <div fxLayoutAlign=\"center center\" class=\"ReCaptcha\">\n              <re-captcha (resolved)=\"resolved($event)\" siteKey=\"6LdwMMgUAAAAAGteaHHXv3OTn8I9nYXO-USZVdbk\"></re-captcha>\t\n            </div>\n        \n              <button class=\"Submin_Btn\" type=\"submit\" *ngIf=\"!submitted\">Submit</button>\n\n          </form>\n          <!-- form Section End -->\n        </div>\n      </div> \n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_commonservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/commonservice.service */ "./src/app/Services/commonservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/toastr.es5.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, service, toastr, router, route) {
        this.fb = fb;
        this.service = service;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.model = {};
        this.userIn = false;
    }
    LoginComponent.prototype.resolved = function (captchaResponse) {
        console.log("Resolved captcha with response: " + captchaResponse);
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var datas = {
            "email_ID": this.model.email,
            "Password": this.model.pass,
        };
        this.service.postfunction('users/login', datas).subscribe(function (res) {
            console.log(res);
            if (res.status == true) {
                _this.toastr.clear();
                _this.toastr.success(res.message, 'Success');
                _this.router.navigate(['/HomePage']);
            }
            else {
                _this.toastr.clear();
                _this.toastr.error(res.message, 'Oops');
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _Services_commonservice_service__WEBPACK_IMPORTED_MODULE_3__["CommonserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/new-dashboard/new-dashboard.component.html":
/*!************************************************************!*\
  !*** ./src/app/new-dashboard/new-dashboard.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard-header></app-dashboard-header>\n<section>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-2\">\n        <app-sidenav></app-sidenav>\n      </div>\n      <div class=\"col-lg-10\">\n        <div class=\"margin-topXX\"> \n            <router-outlet></router-outlet>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/new-dashboard/new-dashboard.component.scss":
/*!************************************************************!*\
  !*** ./src/app/new-dashboard/new-dashboard.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin-topXX {\n  margin-top: 115px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvVTJBRE1JTkdJVC9zcmMvYXBwL25ldy1kYXNoYm9hcmQvbmV3LWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFpQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL25ldy1kYXNoYm9hcmQvbmV3LWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW4tdG9wWFh7XG4gICAgbWFyZ2luLXRvcDogMTE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/new-dashboard/new-dashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/new-dashboard/new-dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: NewDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewDashboardComponent", function() { return NewDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewDashboardComponent = /** @class */ (function () {
    function NewDashboardComponent() {
    }
    NewDashboardComponent.prototype.ngOnInit = function () {
    };
    NewDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-dashboard',
            template: __webpack_require__(/*! ./new-dashboard.component.html */ "./src/app/new-dashboard/new-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./new-dashboard.component.scss */ "./src/app/new-dashboard/new-dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewDashboardComponent);
    return NewDashboardComponent;
}());



/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.component.html":
/*!**************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"FooterBackGroungColor1\">\n    <app-header></app-header>\n</section>\n  <section>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <p class=\"Privacy_Policy_Title\">Privacy & Policy</p>\n\n        </div>\n        \n        <div class=\"col-lg-12\">\n            <label class=\"Privacy_Policy_SubTitle\">What Information do we collect</label>\n            <p class=\"Privacy_Policy_Desc\">Our Privacy Policy Generator includes several compliance verification tools to help you effectively protect your customers privacy, while limiting your liability, all while adhering to the most notable state and federal privacy laws and 3rd party initiatives. All you do is answer a few simple questions about your business and your website privacy policy or website terms & conditions agreement is created and ready to add to your site. In fact, for most people it takes less than 15 minutes.</p>\n        </div>\n        \n        <div class=\"col-lg-12\">\n            <label class=\"Privacy_Policy_SubTitle\">What Information do we collect</label>\n            <p class=\"Privacy_Policy_Desc\">Our Privacy Policy Generator includes several compliance verification tools to help you effectively protect your customers privacy, while limiting your liability, all while adhering to the most notable state and federal privacy laws and 3rd party initiatives. All you do is answer a few simple questions about your business and your website privacy policy or website terms & conditions agreement is created and ready to add to your site. In fact, for most people it takes less than 15 minutes.</p>\n        </div>\n\n        <div class=\"col-lg-12\">\n            <label class=\"Privacy_Policy_SubTitle\">What Information do we collect</label>\n            <p class=\"Privacy_Policy_Desc\">Our Privacy Policy Generator includes several compliance verification tools to help you effectively protect your customers privacy, while limiting your liability, all while adhering to the most notable state and federal privacy laws and 3rd party initiatives. All you do is answer a few simple questions about your business and your website privacy policy or website terms & conditions agreement is created and ready to add to your site. In fact, for most people it takes less than 15 minutes.</p>\n        </div>\n      </div>\n    </div>\n  </section>\n<section class=\"FooterBackGroungColor mt-4\">\n  <app-footer></app-footer>\n</section>\n  "

/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.component.ts":
/*!************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.component.ts ***!
  \************************************************************/
/*! exports provided: PrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function() { return PrivacyPolicyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent() {
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
    };
    PrivacyPolicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-privacy-policy',
            template: __webpack_require__(/*! ./privacy-policy.component.html */ "./src/app/privacy-policy/privacy-policy.component.html"),
            styles: [__webpack_require__(/*! ./privacy-policy.component.scss */ "./src/app/privacy-policy/privacy-policy.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());



/***/ }),

/***/ "./src/app/reset-password/reset-password.component.html":
/*!**************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"FooterBackGroungColor1 BackGroundIMG1\">\n  <app-header></app-header>\n  <div class=\"container\">\n    <div class=\"row\"  fxLayout=\"column\">\n      <div class=\"col-lg-5 m-auto col-md-8 col-12 text-center\">\n        <div class=\"FormsCSS\">\n          <h4 class=\"Title_Login\">Reset Password</h4>  \n          <!-- Form Section Start -->\n          <form [formGroup]=\"accountDetailsForm\" novalidate (ngSubmit)=\"onSubmitAccountDetails(accountDetailsForm.value)\">\n       <!-- Password -->\n       <div formGroupName=\"matching_passwords\">\n          <input placeholder=\"Password\" type=\"password\" class=\"InputField_Login\"\n          formControlName=\"password\">\n          \n          <div class=\"err\">\n            <mat-error *ngFor=\"let validation of account_validation_messages.password\">\n              <mat-error class=\"error-message\" *ngIf=\"accountDetailsForm.get('matching_passwords').get('password').hasError(validation.type) && (accountDetailsForm.get('matching_passwords').get('password').dirty || accountDetailsForm.get('matching_passwords').get('password').touched)\">{{validation.message}}</mat-error>\n            </mat-error>\n          </div>\n\n          <!-- Confirm Password -->\n          <input placeholder=\"Confrim Password\" type=\"password\" class=\"InputField_Login\"\n            formControlName=\"confirm_password\"\n            ([errorStateMatcher])=\"parentErrorStateMatcher\" required>\n\n          <div class=\"err\">\n            <mat-error *ngFor=\"let validation of account_validation_messages.confirm_password\">\n              <mat-error class=\"error-message\"\n               *ngIf=\"(accountDetailsForm.get('matching_passwords')\n               .get('confirm_password').hasError(validation.type)|| accountDetailsForm.get('matching_passwords').hasError(validation.type)) && (accountDetailsForm.get('matching_passwords').get('confirm_password').dirty || accountDetailsForm.get('matching_passwords').get('confirm_password').touched)\">{{validation.message}}</mat-error>\n            </mat-error>\n          </div>\n        </div>\n           \n            \n            <!-- Re-Captcha -->\n            <div fxLayoutAlign=\"center center\" class=\"ReCaptcha mt-4\">\n              <re-captcha (resolved)=\"resolved($event)\" siteKey=\"6LdwMMgUAAAAAGteaHHXv3OTn8I9nYXO-USZVdbk\"></re-captcha>\t\n            </div>\n              <button class=\"Submin_Btn\" type=\"submit\" [disabled]=\"!accountDetailsForm.valid\">Submit</button>\n          </form>\n          <!-- Form Section End -->\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.ts":
/*!************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.ts ***!
  \************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/validators */ "./src/app/validators/index.ts");
/* harmony import */ var _Services_commonservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/commonservice.service */ "./src/app/Services/commonservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/toastr.es5.js");




// import { HttpClient, HttpEventType } from '@angular/common/http';



var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(fb, service, toastr, router) {
        this.fb = fb;
        this.service = service;
        this.toastr = toastr;
        this.router = router;
        this.model = {};
        this.userIn = false;
        this.parentErrorStateMatcher = new src_app_validators__WEBPACK_IMPORTED_MODULE_3__["ParentErrorStateMatcher"]();
        this.hide = true;
        this.account_validation_messages = {
            'confirm_password': [
                { type: 'required', message: 'Confirm password is required' },
                { type: 'areEqual', message: 'Password mismatch' }
            ],
            'password': [
                { type: 'required', message: 'Password is required' },
                { type: 'minlength', message: 'Password must be at least 5 characters long' },
                { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
            ],
        };
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.createForms();
    };
    ResetPasswordComponent.prototype.createForms = function () {
        // matching passwords validation
        this.matching_passwords_group = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[a-zA-Z0-9_.$@$!%*?&+-]+$')
            ])),
            confirm_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        }, function (formGroup) {
            return src_app_validators__WEBPACK_IMPORTED_MODULE_3__["PasswordValidator"].areEqual(formGroup);
        });
        this.accountDetailsForm = this.fb.group({
            matching_passwords: this.matching_passwords_group,
        });
    };
    ResetPasswordComponent.prototype.onSubmitAccountDetails = function (value) {
        var _this = this;
        var datas = {
            // "username": this.accountDetailsForm.value.username,
            // "email_ID": this.accountDetailsForm.value.email,
            "Password": this.matching_passwords_group.value.password,
        };
        // this.toastr.success("hello")
        console.log(this.accountDetailsForm.value);
        this.service.postfunction('users/register', datas).subscribe(function (res) {
            if (res.status == true) {
                _this.toastr.clear();
                _this.toastr.success(res.message, 'Account Created Successfully!!!');
                _this.toastr.success('Check Your Mail to Login With As!!!!');
                // this.router.navigate(['/HomePage']);
            }
            else {
                _this.toastr.clear();
                _this.toastr.error(res.message, 'Oops');
            }
        });
        this.accountDetailsForm.reset(this.accountDetailsForm);
    };
    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.scss */ "./src/app/reset-password/reset-password.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _Services_commonservice_service__WEBPACK_IMPORTED_MODULE_4__["CommonserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/sidenav/sidenav.component.html":
/*!************************************************!*\
  !*** ./src/app/sidenav/sidenav.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"SideNavigation\">\n    <ul class=\"row Sidenav\">\n        <li class=\"sidenav_Items col-lg-11 col-6\" routerLink='/Dashboard'>\n           <mat-icon>dashboard</mat-icon><p class=\"sidenav_Desc\">Dashboard</p></li>\n        <li class=\"sidenav_Items col-lg-11 col-6\" routerLink='/Exchange'>\n            <mat-icon>repeat</mat-icon><p class=\"sidenav_Desc\">Exchange</p></li>\n        <li class=\"sidenav_Items col-lg-11 col-6\" routerLink='/Send_Receive'>\n            <mat-icon>swap_horizontal_circle</mat-icon><p class=\"sidenav_Desc\">Send / Receive</p></li>\n        <li class=\"sidenav_Items col-lg-11 col-6\" routerLink='/Your_Profile'>\n            <mat-icon>settings_input_svideo</mat-icon><p class=\"sidenav_Desc\">Settings</p></li>\n        <li class=\"sidenav_Items col-lg-11 col-6\" routerLink='/DepositWithdraw'>\n            <mat-icon>archive\n                </mat-icon><p class=\"sidenav_Desc\">Deposit / Withdraw</p></li>\n        <li class=\"sidenav_Items col-lg-11 col-6\">\n            <mat-icon>power_settings_new</mat-icon><p class=\"sidenav_Desc\">Logout</p></li>\n      </ul>\n</div> -->\n\n<div class=\"sidenav mb-4\"fxShow fxHide.xs>\n    <a routerLink='/Dashboard' class=\"active\"><mat-icon>dashboard</mat-icon>Dashboard</a>\n    <a routerLink='/Exchange'> <mat-icon>repeat</mat-icon>Exchange</a>\n    <a routerLink='/Send'><mat-icon>swap_horizontal_circle</mat-icon>Send / Receive</a>\n    <a routerLink='/Settings'> <mat-icon>settings_input_svideo</mat-icon>Settings</a>\n    <a routerLink='/Deposit'><mat-icon>archive</mat-icon>Deposit / Withdraw</a>\n    <a><mat-icon>power_settings_new</mat-icon>Logout</a>\n  </div>\n  "

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidenav/sidenav.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 600px) {\n  .sidenav_Desc {\n    margin-left: 10px;\n    cursor: pointer;\n    font-size: 14px;\n    font-weight: 100; } }\n\n.sidenav {\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  width: 180px;\n  position: -webkit-sticky;\n  position: sticky;\n  z-index: 1;\n  top: 159px;\n  left: 0px;\n  /* background-color: #ffffff; */\n  overflow-x: hidden;\n  /* box-shadow: 0px 0px 10px 0px lightgrey; */ }\n\n.sidenav a {\n  padding: 6px 6px 6px 15px;\n  text-decoration: none;\n  font-size: 14px;\n  color: #ffffffff;\n  display: block;\n  border: 2px solid #E72B90;\n  border-radius: 10px;\n  margin: 8px 0px; }\n\n.sidenav a:hover {\n  color: white;\n  background-color: #E72B90; }\n\n.sidenav a:focus,\n.sidenav a:active {\n  color: white;\n  background-color: #E72B90; }\n\nmat-icon {\n  font-size: 16px;\n  font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvVTJBRE1JTkdJVC9zcmMvYXBwL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQTtFQUNJO0lBQ0ksa0JBQWlCO0lBQ2pCLGdCQUFlO0lBQ2YsZ0JBQWU7SUFDZixpQkFBZ0IsRUFDbkIsRUFBQTs7QUFHTDtFQUNFLDRCQUEyQjtFQUMzQix5QkFBd0I7RUFDeEIsb0JBQW1CO0VBQ25CLGFBQVk7RUFDWix5QkFBd0I7RUFDeEIsaUJBQWdCO0VBQ2hCLFdBQVU7RUFDVixXQUFVO0VBQ1YsVUFBUztFQUNULGdDQUFnQztFQUNoQyxtQkFBa0I7RUFDbEIsNkNBQTZDLEVBQzVDOztBQUVEO0VBQ0UsMEJBQXlCO0VBQ3pCLHNCQUFxQjtFQUNyQixnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixlQUFjO0VBQ2QsMEJBQXlCO0VBQ3pCLG9CQUFtQjtFQUNuQixnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLGFBQVk7RUFDWiwwQkFBeUIsRUFDMUI7O0FBQ0Q7O0VBRUUsYUFBWTtFQUNaLDBCQUF5QixFQUMxQjs7QUFDSDtFQUNFLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdWx7XG4vLyAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuLy8gICAgIHBhZGRpbmctbGVmdDogMHB4O1xuLy8gfVxuLy8gbGl7XG4vLyAgICAgLy8gbWFyZ2luOiA1cHggMHB4O1xuLy8gfVxuXG4vLyAuU2lkZU5hdmlnYXRpb257XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7aGVpZ2h0OiAxMDAlO1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gfVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5zaWRlbmF2X0Rlc2Mge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgfVxufVxuXG4uc2lkZW5hdiB7XG4gIGhlaWdodDogLXdlYmtpdC1tYXgtY29udGVudDtcbiAgaGVpZ2h0OiAtbW96LW1heC1jb250ZW50O1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICB3aWR0aDogMTgwcHg7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAxNTlweDtcbiAgbGVmdDogMHB4O1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyAqL1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIC8qIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggbGlnaHRncmV5OyAqL1xuICB9XG4gIFxuICAuc2lkZW5hdiBhIHtcbiAgICBwYWRkaW5nOiA2cHggNnB4IDZweCAxNXB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICNmZmZmZmZmZjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRTcyQjkwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luOiA4cHggMHB4O1xuICB9XG4gIFxuICAuc2lkZW5hdiBhOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U3MkI5MDtcbiAgfVxuICAuc2lkZW5hdiBhOmZvY3VzLFxuICAuc2lkZW5hdiBhOmFjdGl2ZXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U3MkI5MDtcbiAgfVxubWF0LWljb257XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.ts ***!
  \**********************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.scss */ "./src/app/sidenav/sidenav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"FooterBackGroungColor1 BackGroundIMG1\">\n  <app-header></app-header>\n  <div class=\"container\">\n    <div class=\"row\"  fxLayout=\"column\">\n      <div class=\"col-lg-5 m-auto col-md-8 col-12 text-center\">\n        <div class=\"FormsCSS\">\n          <h4 class=\"Title_Login\">SIGNIN</h4>\n          <p class=\"Desc_Login\">Already have an Account <a routerLink='/Login' class=\"SignUp_HyperLink\">Login</a></p>\n          <div style=\"display: inline-flex\">\n            <div style=\"border: 1px solid lightgray;\n            padding: 3px;\n            border-radius: 20px;\n            width: 32%;\n            margin-left: 47px;cursor: pointer;\">\n              <a href=\"https://www.google.co.in/\"><img src=\"assets/images/icons8-google-160.png\" width=\"15%\" alt=\"\"><span style=\"margin-left:5px;\">Google</span></a>\n            </div>\n            <div style=\"    border: 1px solid lightgray;\n            padding: 3px;\n            border-radius: 20px;\n            width: 32%;\n            margin-left: 60px;\">\n              <a href=\"https://www.facebook.com/\"><img src=\"assets/images/icons8-facebook-f-150.png\" width=\"15%\" alt=\"\"><span style=\"margin-left:5px;\">Facebook</span></a>\n            </div>\n          </div>\n          <!-- Form Section Start -->\n          <form [formGroup]=\"accountDetailsForm\" novalidate (ngSubmit)=\"onSubmitAccountDetails(accountDetailsForm.value)\">\n            \n            <!-- UserName -->\n            <input placeholder=\"UserName\" class=\"InputField_Login\" \n            maxlength=\"25\" minlength=\"8\" \n            formControlName=\"username\"\n            required autocomplete=\"off\">\n\n            <div class=\"err\">\n              <mat-error *ngFor=\"let validation of account_validation_messages.username\">\n                <mat-error class=\"error-message\"\n                    *ngIf=\"accountDetailsForm.get('username').hasError(validation.type)\n                    && (accountDetailsForm.get('username').dirty ||\n                    accountDetailsForm.get('username').touched)\">\n                    {{validation.message}}<br>\n                  </mat-error>\n              </mat-error>\n            </div>\n\n            <!-- E-Mail ID -->\n            <input placeholder=\"E-mail ID\" class=\"InputField_Login\"\n              name=\"email\" type=\"email\"\n              formControlName=\"email\"\n              required autocomplete=\"off\" >\n\n            <div class=\"err\">\n              <mat-error *ngFor=\"let validation of account_validation_messages.email\">\n                <mat-error class=\"error-message\"\n                 *ngIf=\"accountDetailsForm.get('email').hasError(validation.type) && (accountDetailsForm.get('email').dirty || accountDetailsForm.get('email').touched)\">{{validation.message}}</mat-error>\n              </mat-error>\n            </div>\n            \n            <!-- Password -->\n            <div formGroupName=\"matching_passwords\">\n            <input placeholder=\"Password\" type=\"password\" class=\"InputField_Login\"\n            formControlName=\"password\">\n            \n            <div class=\"err\">\n              <mat-error *ngFor=\"let validation of account_validation_messages.password\">\n                <mat-error class=\"error-message\" *ngIf=\"accountDetailsForm.get('matching_passwords').get('password').hasError(validation.type) && (accountDetailsForm.get('matching_passwords').get('password').dirty || accountDetailsForm.get('matching_passwords').get('password').touched)\">{{validation.message}}</mat-error>\n              </mat-error>\n            </div>\n\n            <!-- Confirm Password -->\n            <input placeholder=\"Confrim Password\" type=\"password\" class=\"InputField_Login\"\n              formControlName=\"confirm_password\"\n              ([errorStateMatcher])=\"parentErrorStateMatcher\" required>\n\n            <div class=\"err\">\n              <mat-error *ngFor=\"let validation of account_validation_messages.confirm_password\">\n                <mat-error class=\"error-message\"\n                 *ngIf=\"(accountDetailsForm.get('matching_passwords')\n                 .get('confirm_password').hasError(validation.type)|| accountDetailsForm.get('matching_passwords').hasError(validation.type)) && (accountDetailsForm.get('matching_passwords').get('confirm_password').dirty || accountDetailsForm.get('matching_passwords').get('confirm_password').touched)\">{{validation.message}}</mat-error>\n              </mat-error>\n            </div>\n          </div>\n            \n            <!-- Re-Captcha -->\n            <div fxLayoutAlign=\"center center\" class=\"ReCaptcha\">\n              <re-captcha (resolved)=\"resolved($event)\" siteKey=\"6LdwMMgUAAAAAGteaHHXv3OTn8I9nYXO-USZVdbk\"></re-captcha>\t\n            </div>\n            \n            <!-- Button -->\n            <button type=\"submit\" class=\"Submin_Btn\" [disabled]=\"!accountDetailsForm.valid\">Submit</button>\n          </form>\n          <!-- Form Section End -->\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".err {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvVTJBRE1JTkdJVC9zcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycntcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/validators */ "./src/app/validators/index.ts");
/* harmony import */ var _Services_commonservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/commonservice.service */ "./src/app/Services/commonservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/toastr.es5.js");




// import { HttpClient, HttpEventType } from '@angular/common/http';



var SignupComponent = /** @class */ (function () {
    function SignupComponent(fb, service, toastr, router) {
        this.fb = fb;
        this.service = service;
        this.toastr = toastr;
        this.router = router;
        this.model = {};
        this.userIn = false;
        this.parentErrorStateMatcher = new src_app_validators__WEBPACK_IMPORTED_MODULE_3__["ParentErrorStateMatcher"]();
        this.hide = true;
        this.account_validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required' },
                { type: 'pattern', message: 'Enter a valid email' }
            ],
            'username': [
                { type: 'required', message: 'Username is required' },
                { type: 'minlength', message: 'Username must be at least 8 characters long' },
                { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
                { type: 'pattern', message: 'Only First letter should be in capital' },
                { type: 'validUsername', message: 'Your username has already been taken' }
            ],
            'confirm_password': [
                { type: 'required', message: 'Confirm password is required' },
                { type: 'areEqual', message: 'Password mismatch' }
            ],
            'password': [
                { type: 'required', message: 'Password is required' },
                { type: 'minlength', message: 'Password must be at least 5 characters long' },
                { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
            ],
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.createForms();
    };
    SignupComponent.prototype.createForms = function () {
        // matching passwords validation
        this.matching_passwords_group = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[a-zA-Z0-9_.$@$!%*?&+-]+$')
            ])),
            confirm_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        }, function (formGroup) {
            return src_app_validators__WEBPACK_IMPORTED_MODULE_3__["PasswordValidator"].areEqual(formGroup);
        });
        this.accountDetailsForm = this.fb.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[A-Z][a-z]+$'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,63}')
                // ^[a-zA-Z0-9_.+-]+@[a-zA-Z]+.[a-zA-Z]+$
                // ^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$
                // ^[a-z0-9._%+-]+@[a-z0-9.-]+[a-z]{2,4}$
            ])),
            matching_passwords: this.matching_passwords_group,
        });
    };
    SignupComponent.prototype.onSubmitAccountDetails = function (value) {
        var _this = this;
        var datas = {
            "username": this.accountDetailsForm.value.username,
            "email_ID": this.accountDetailsForm.value.email,
            "Password": this.matching_passwords_group.value.password,
        };
        // this.toastr.success("hello")
        console.log(this.accountDetailsForm.value);
        this.service.postfunction('users/register', datas).subscribe(function (res) {
            if (res.status == true) {
                _this.toastr.clear();
                _this.toastr.success(res.message, 'Account Created Successfully!!!');
                _this.toastr.success('Check Your Mail to Login With As!!!!');
                // this.router.navigate(['/HomePage']);
            }
            else {
                _this.toastr.clear();
                _this.toastr.error(res.message, 'Oops');
            }
        });
        this.accountDetailsForm.reset(this.accountDetailsForm);
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _Services_commonservice_service__WEBPACK_IMPORTED_MODULE_4__["CommonserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/term-condition/term-condition.component.html":
/*!**************************************************************!*\
  !*** ./src/app/term-condition/term-condition.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"FooterBackGroungColor1\">\n  <app-header></app-header>\n</section>\n<section>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p class=\"Privacy_Policy_Title\">Terms & Conditions</p>\n      </div>\n      \n      <div class=\"col-lg-12\">\n          <label class=\"Privacy_Policy_SubTitle\">What Information do we collect</label>\n          <p class=\"Privacy_Policy_Desc\">Our Privacy Policy Generator includes several compliance verification tools to help you effectively protect your customers privacy, while limiting your liability, all while adhering to the most notable state and federal privacy laws and 3rd party initiatives. All you do is answer a few simple questions about your business and your website privacy policy or website terms & conditions agreement is created and ready to add to your site. In fact, for most people it takes less than 15 minutes.</p>\n      </div>\n      \n      <div class=\"col-lg-12\">\n          <label class=\"Privacy_Policy_SubTitle\">What Information do we collect</label>\n          <p class=\"Privacy_Policy_Desc\">Our Privacy Policy Generator includes several compliance verification tools to help you effectively protect your customers privacy, while limiting your liability, all while adhering to the most notable state and federal privacy laws and 3rd party initiatives. All you do is answer a few simple questions about your business and your website privacy policy or website terms & conditions agreement is created and ready to add to your site. In fact, for most people it takes less than 15 minutes.</p>\n      </div>\n\n      <div class=\"col-lg-12\">\n          <label class=\"Privacy_Policy_SubTitle\">What Information do we collect</label>\n          <p class=\"Privacy_Policy_Desc\">Our Privacy Policy Generator includes several compliance verification tools to help you effectively protect your customers privacy, while limiting your liability, all while adhering to the most notable state and federal privacy laws and 3rd party initiatives. All you do is answer a few simple questions about your business and your website privacy policy or website terms & conditions agreement is created and ready to add to your site. In fact, for most people it takes less than 15 minutes.</p>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"FooterBackGroungColor mt-4\">\n<app-footer></app-footer>\n</section>\n"

/***/ }),

/***/ "./src/app/term-condition/term-condition.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/term-condition/term-condition.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlcm0tY29uZGl0aW9uL3Rlcm0tY29uZGl0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/term-condition/term-condition.component.ts":
/*!************************************************************!*\
  !*** ./src/app/term-condition/term-condition.component.ts ***!
  \************************************************************/
/*! exports provided: TermConditionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermConditionComponent", function() { return TermConditionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TermConditionComponent = /** @class */ (function () {
    function TermConditionComponent() {
    }
    TermConditionComponent.prototype.ngOnInit = function () {
    };
    TermConditionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-term-condition',
            template: __webpack_require__(/*! ./term-condition.component.html */ "./src/app/term-condition/term-condition.component.html"),
            styles: [__webpack_require__(/*! ./term-condition.component.scss */ "./src/app/term-condition/term-condition.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TermConditionComponent);
    return TermConditionComponent;
}());



/***/ }),

/***/ "./src/app/under-maintances/under-maintances.component.html":
/*!******************************************************************!*\
  !*** ./src/app/under-maintances/under-maintances.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"UM_BG\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <h1 class=\"UM_DESC\">SITE UNDER MAINTANANCE</h1>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/under-maintances/under-maintances.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/under-maintances/under-maintances.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VuZGVyLW1haW50YW5jZXMvdW5kZXItbWFpbnRhbmNlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/under-maintances/under-maintances.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/under-maintances/under-maintances.component.ts ***!
  \****************************************************************/
/*! exports provided: UnderMaintancesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderMaintancesComponent", function() { return UnderMaintancesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UnderMaintancesComponent = /** @class */ (function () {
    function UnderMaintancesComponent() {
    }
    UnderMaintancesComponent.prototype.ngOnInit = function () {
    };
    UnderMaintancesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-under-maintances',
            template: __webpack_require__(/*! ./under-maintances.component.html */ "./src/app/under-maintances/under-maintances.component.html"),
            styles: [__webpack_require__(/*! ./under-maintances.component.scss */ "./src/app/under-maintances/under-maintances.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UnderMaintancesComponent);
    return UnderMaintancesComponent;
}());



/***/ }),

/***/ "./src/app/user-panel/user-panel.component.html":
/*!******************************************************!*\
  !*** ./src/app/user-panel/user-panel.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-dashboard-header></app-dashboard-header> -->\n<div class=\"BackGroundIMGS\">\n<section ><app-dashboard-header></app-dashboard-header>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-2\">\n        <app-sidenav></app-sidenav>\n      </div>\n      <div class=\"col-lg-10\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</section>\n<div class=\"mt-4\">\n    <app-footer></app-footer>\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/user-panel/user-panel.component.scss":
/*!******************************************************!*\
  !*** ./src/app/user-panel/user-panel.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcGFuZWwvdXNlci1wYW5lbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/user-panel/user-panel.component.ts":
/*!****************************************************!*\
  !*** ./src/app/user-panel/user-panel.component.ts ***!
  \****************************************************/
/*! exports provided: UserPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPanelComponent", function() { return UserPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserPanelComponent = /** @class */ (function () {
    function UserPanelComponent() {
    }
    UserPanelComponent.prototype.ngOnInit = function () {
    };
    UserPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-panel',
            template: __webpack_require__(/*! ./user-panel.component.html */ "./src/app/user-panel/user-panel.component.html"),
            styles: [__webpack_require__(/*! ./user-panel.component.scss */ "./src/app/user-panel/user-panel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserPanelComponent);
    return UserPanelComponent;
}());



/***/ }),

/***/ "./src/app/validators/index.ts":
/*!*************************************!*\
  !*** ./src/app/validators/index.ts ***!
  \*************************************/
/*! exports provided: PasswordValidator, ParentErrorStateMatcher, UsernameValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _password_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password.validator */ "./src/app/validators/password.validator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordValidator", function() { return _password_validator__WEBPACK_IMPORTED_MODULE_0__["PasswordValidator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParentErrorStateMatcher", function() { return _password_validator__WEBPACK_IMPORTED_MODULE_0__["ParentErrorStateMatcher"]; });

/* harmony import */ var _username_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./username.validator */ "./src/app/validators/username.validator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsernameValidator", function() { return _username_validator__WEBPACK_IMPORTED_MODULE_1__["UsernameValidator"]; });

//  export { Country } from './country.model';

//  export { PhoneValidator } from './phone.validator';



/***/ }),

/***/ "./src/app/validators/password.validator.ts":
/*!**************************************************!*\
  !*** ./src/app/validators/password.validator.ts ***!
  \**************************************************/
/*! exports provided: ParentErrorStateMatcher, PasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentErrorStateMatcher", function() { return ParentErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidator", function() { return PasswordValidator; });
var ParentErrorStateMatcher = /** @class */ (function () {
    function ParentErrorStateMatcher() {
    }
    ParentErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = !!(form && form.submitted);
        var controlTouched = !!(control && (control.dirty || control.touched));
        var controlInvalid = !!(control && control.invalid);
        var parentInvalid = !!(control && control.parent && control.parent.invalid && (control.parent.dirty || control.parent.touched));
        return isSubmitted || (controlTouched && (controlInvalid || parentInvalid));
    };
    return ParentErrorStateMatcher;
}());

var PasswordValidator = /** @class */ (function () {
    function PasswordValidator() {
    }
    PasswordValidator.areEqual = function (formGroup) {
        var value;
        var valid = true;
        for (var key in formGroup.controls) {
            if (formGroup.controls.hasOwnProperty(key)) {
                var control = formGroup.controls[key];
                if (value === undefined) {
                    value = control.value;
                }
                else {
                    if (value !== control.value) {
                        valid = false;
                        break;
                    }
                }
            }
        }
        if (valid) {
            return null;
        }
        return {
            areEqual: true
        };
    };
    return PasswordValidator;
}());



/***/ }),

/***/ "./src/app/validators/username.validator.ts":
/*!**************************************************!*\
  !*** ./src/app/validators/username.validator.ts ***!
  \**************************************************/
/*! exports provided: UsernameValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsernameValidator", function() { return UsernameValidator; });
var UsernameValidator = /** @class */ (function () {
    function UsernameValidator() {
    }
    UsernameValidator.validUsername = function (fc) {
        if (fc.value.toLowerCase() === "ven123" || fc.value.toLowerCase() === "ven123") {
            return {
                validUsername: true
            };
        }
        else {
            return null;
        }
    };
    return UsernameValidator;
}());



/***/ }),

/***/ "./src/assets/varconfig.js":
/*!*********************************!*\
  !*** ./src/assets/varconfig.js ***!
  \*********************************/
/*! exports provided: BackendHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendHost", function() { return BackendHost; });
var host = window.location.hostname;
var BackendHost;
if(host == '192.168.2.174'){
	BackendHost = "http://"+host+":3800/";
} else {
	BackendHost = "http://"+host+":3800/";
}

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/U2ADMINGIT/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map