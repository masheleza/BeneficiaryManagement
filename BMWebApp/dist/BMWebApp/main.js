(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _beneficiaries_add_beneficiary_add_beneficiary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./beneficiaries/add-beneficiary/add-beneficiary.component */ "./src/app/beneficiaries/add-beneficiary/add-beneficiary.component.ts");
/* harmony import */ var _beneficiaries_beneficiaries_beneficiaries_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./beneficiaries/beneficiaries/beneficiaries.component */ "./src/app/beneficiaries/beneficiaries/beneficiaries.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users/add-user/add-user.component */ "./src/app/users/add-user/add-user.component.ts");







var routes = [
    { path: '', component: _beneficiaries_beneficiaries_beneficiaries_component__WEBPACK_IMPORTED_MODULE_4__["BeneficiariesComponent"] },
    { path: 'AddBeneficiary', component: _beneficiaries_add_beneficiary_add_beneficiary_component__WEBPACK_IMPORTED_MODULE_3__["AddBeneficiaryComponent"] },
    { path: 'Register', component: _users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_6__["AddUserComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n<style>\n  :host {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 8px 0;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .spacer {\n    flex: 1;\n  }\n\n  .toolbar {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 60px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar img {\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo:hover {\n    opacity: 0.8;\n  }\n\n  .content {\n    display: flex;\n    margin: 82px auto 32px;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card svg.material-icons path {\n    fill: #888;\n  }\n\n  .card-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container .card:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container .card:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container .card:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(black, 0.35);\n  }\n\n  .card-container .card:not(.highlight-card):hover .material-icons path {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card span {\n    margin-left: 60px;\n  }\n\n  svg#rocket {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke {\n    height: calc(100vh - 95px);\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a,\n  a:visited,\n  a:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: #125699;\n  }\n\n  .terminal {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal pre {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer a {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27,31,35,.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n\n  .github-star-badge:hover {\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n    border-color: rgba(27,31,35,.35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge .material-icons {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  /* Responsive Styles */\n  @media screen and (max-width: 767px) {\n\n    .card-container > *:not(.circle-link) ,\n    .terminal {\n      width: 100%;\n    }\n\n    .card:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card span {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke {\n      display: none;\n      visibility: hidden;\n    }\n  }\n</style>\n<div>\n  <svg id=\"clouds\" alt=\"Gray Clouds Background\" xmlns=\"http://www.w3.org/2000/svg\" width=\"2611.084\" height=\"485.677\" viewBox=\"0 0 2611.084 485.677\">\n  </svg>\n</div>\n<!-- Toolbar -->\n\n<div class=\"content\" role=\"main\">\n  <div role=\"doc-acknowledgments\">\n    <router-outlet></router-outlet>\n  </div>\n  <!-- Footer -->\n  <footer>\n  </footer>\n</div>\n"

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
        this.title = 'BMWebApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users/add-user/add-user.component */ "./src/app/users/add-user/add-user.component.ts");
/* harmony import */ var _beneficiaries_beneficiaries_beneficiaries_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./beneficiaries/beneficiaries/beneficiaries.component */ "./src/app/beneficiaries/beneficiaries/beneficiaries.component.ts");
/* harmony import */ var _beneficiaries_add_beneficiary_add_beneficiary_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./beneficiaries/add-beneficiary/add-beneficiary.component */ "./src/app/beneficiaries/add-beneficiary/add-beneficiary.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/confirm/confirm.component */ "./src/app/shared/confirm/confirm.component.ts");
/* harmony import */ var _shared_please_wait_please_wait_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/please-wait/please-wait.component */ "./src/app/shared/please-wait/please-wait.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_7__["UsersComponent"],
                _users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_8__["AddUserComponent"],
                _beneficiaries_beneficiaries_beneficiaries_component__WEBPACK_IMPORTED_MODULE_9__["BeneficiariesComponent"],
                _beneficiaries_add_beneficiary_add_beneficiary_component__WEBPACK_IMPORTED_MODULE_10__["AddBeneficiaryComponent"],
                _shared_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmComponent"],
                _shared_please_wait_please_wait_component__WEBPACK_IMPORTED_MODULE_15__["PleaseWaitComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/beneficiaries/add-beneficiary/add-beneficiary.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/beneficiaries/add-beneficiary/add-beneficiary.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiZW5lZmljaWFyaWVzL2FkZC1iZW5lZmljaWFyeS9hZGQtYmVuZWZpY2lhcnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/beneficiaries/add-beneficiary/add-beneficiary.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/beneficiaries/add-beneficiary/add-beneficiary.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  add-beneficiary works!\n</p>\n<form *ngIf=\"addBeneficiaryForm\"   [formGroup=\"addBeneficiaryForm\"]>\n  <div mat-dialog-content>\n    <div class=\"row\">\n      <label>User Details:</label>\n      <div class=\"col-3\">\n        <label>Name:</label>\n        <input type=\"text\" formControlName=\"Name\" class=\"form-control\" (blur)=\"validateBeneficiary()\"/>\n        <mat-error>\n          <span *ngIf=\"!addBeneficiaryForm.get('Name').valid && addBeneficiaryForm.get('Name').touched\">Name is required</span>\n        </mat-error>\n      </div>\n      <div class=\"col-4\">\n        <label>Account Number:</label>\n        <input type=\"text\" formControlName=\"AccountNumber\" class=\"form-control\" (blur)=\"validateBeneficiary()\"/>\n        <mat-error>\n          <span *ngIf=\"!addBeneficiaryForm.get('AccountNumber').valid && addBeneficiaryForm.get('AccountNumber').touched\">Account Number is required</span>\n        </mat-error>\n      </div>\n      <div class=\"col-5\">\n        <label>Reference:</label>\n        <input type=\"text\" formControlName=\"Reference\" class=\"form-control\" (blur)=\"validateBeneficiary()\"/>\n        <mat-error>\n          <span *ngIf=\"!addBeneficiaryForm.get('Reference').valid && addBeneficiaryForm.get('Reference').touched\">Reference is required</span>\n        </mat-error>\n      </div>\n    </div>\n    <br/>\n    <br/>\n  </div>\n  <div mat-dialog-actions>\n    <button mat-button (click)=\"onNoClick()\">Cancel</button>\n    <button mat-button (click)=\"saveBeneficiary()\" cdkFocusInitial [disabled]=\"addBeneficiaryForm.invalid\" (refreshBeneficiariesEvent)=\"loadBeneficiaries()\"> Submit</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/beneficiaries/add-beneficiary/add-beneficiary.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/beneficiaries/add-beneficiary/add-beneficiary.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddBeneficiaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBeneficiaryComponent", function() { return AddBeneficiaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_models_beneficiary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/beneficiary */ "./src/app/models/beneficiary.ts");
/* harmony import */ var src_app_models_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/request */ "./src/app/models/request.ts");
/* harmony import */ var src_app_services_beneficiaries_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/beneficiaries.service */ "./src/app/services/beneficiaries.service.ts");
/* harmony import */ var src_app_services_ui_msg_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/ui-msg.service */ "./src/app/services/ui-msg.service.ts");








var AddBeneficiaryComponent = /** @class */ (function () {
    function AddBeneficiaryComponent(_benefService, _formBuilder, _uiService, dialogRef) {
        this._benefService = _benefService;
        this._formBuilder = _formBuilder;
        this._uiService = _uiService;
        this.dialogRef = dialogRef;
        this.benefRequest = new src_app_models_request__WEBPACK_IMPORTED_MODULE_5__["BeneficiaryRequest"]();
        this.benefDetails = new src_app_models_beneficiary__WEBPACK_IMPORTED_MODULE_4__["Beneficiary"]();
        this.benefList = [];
        this.color = 'accent';
    }
    AddBeneficiaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._benefService.GetUserBeneficiaries(this.userId).subscribe(function (result) {
            if (result.Success) {
                _this.benefList = result.Data;
            }
        });
        this.addBeneficiaryForm = this._formBuilder.group({
            Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)],
            AccountNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)],
            Reference: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)],
            MainMemberId: [this.userId]
        });
    };
    AddBeneficiaryComponent.prototype.saveBeneficiary = function () {
        var _this = this;
        this._uiService.showLoading('Saving, please wait....');
        this.benefDetails.Name = this.addBeneficiaryForm.value.Name;
        this.benefDetails.AccountNumber = this.addBeneficiaryForm.value.AccountNumber;
        this.benefDetails.Reference = this.addBeneficiaryForm.value.Reference;
        this.benefDetails.MainMemberId = this.addBeneficiaryForm.value.MainMemberId;
        this.benefRequest.Beneficary = this.benefDetails;
        var benef = this.benefExists();
        if (benef !== undefined && benef.AccountNumber !== null) {
            this.benefRequest.Beneficary.MainMemberId = this.userId;
            this._benefService.UpdateBeneficiary(this.benefRequest).subscribe(function (result) {
                if (result.Success) {
                    _this._uiService.snack('User has been successfully updated');
                }
                else {
                    _this._uiService.toast('Something went wrong while saving, please try again or contact system support');
                }
                _this.dialogRef.close();
                _this._uiService.hideLoading();
            });
        }
        else {
            this._benefService.AddBeneficiary(this.benefRequest).subscribe(function (result) {
                if (result.Success) {
                    _this._uiService.snack('User has been successfully Added');
                }
                else {
                    _this._uiService.toast('Something went wrong while saving, please try again or contact system support');
                }
                _this.dialogRef.close();
                _this._uiService.hideLoading();
            });
        }
    };
    AddBeneficiaryComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddBeneficiaryComponent.prototype.benefExists = function () {
        var _this = this;
        if (this.benefList.length > 0) {
            var benef = this.benefList.find(function (x) { return x.AccountNumber == _this.addBeneficiaryForm.value.AccountNumber; });
            if (benef !== undefined) {
                return benef;
            }
        }
    };
    AddBeneficiaryComponent.prototype.validateBenef = function () {
        var _this = this;
        if (this.benefList.length > 0) {
            var benef = this.benefList.find(function (x) { return x.AccountNumber == _this.addBeneficiaryForm.value.AccountNumber; });
            if (benef !== undefined) {
                this.addBeneficiaryForm.controls['AccountNumber'].setErrors({ 'Account Number already exist!': true });
            }
        }
    };
    AddBeneficiaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-beneficiary',
            template: __webpack_require__(/*! ./add-beneficiary.component.html */ "./src/app/beneficiaries/add-beneficiary/add-beneficiary.component.html"),
            styles: [__webpack_require__(/*! ./add-beneficiary.component.css */ "./src/app/beneficiaries/add-beneficiary/add-beneficiary.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_beneficiaries_service__WEBPACK_IMPORTED_MODULE_6__["BeneficiariesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_ui_msg_service__WEBPACK_IMPORTED_MODULE_7__["UiMsgService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], AddBeneficiaryComponent);
    return AddBeneficiaryComponent;
}());



/***/ }),

/***/ "./src/app/beneficiaries/beneficiaries/beneficiaries.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/beneficiaries/beneficiaries/beneficiaries.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".benef-container {\n    position: relative;\n    min-height: 200px;\n  }\n  \n  .benef-table-container {\n    position: relative;\n    height: 400px;\n    overflow: auto;\n  }\n  \n  table {\n    width: 100%;\n  }\n  \n  .benef-loading-shade {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 56px;\n    right: 0;\n    background: rgba(0, 0, 0, 0.15);\n    z-index: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  \n  .benef-rate-limit-reached {\n    color: #980000;\n    max-width: 360px;\n    text-align: center;\n  }\n  \n  /* Column Widths */\n  \n  .mat-column-number,\n  .mat-column-state {\n    max-width: 64px;\n  }\n  \n  .mat-column-created {\n    max-width: 124px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlbmVmaWNpYXJpZXMvYmVuZWZpY2lhcmllcy9iZW5lZmljaWFyaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLFFBQVE7SUFDUiwrQkFBK0I7SUFDL0IsVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0VBRUEsa0JBQWtCOztFQUNsQjs7SUFFRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6ImJlbmVmaWNpYXJpZXMvYmVuZWZpY2lhcmllcy9iZW5lZmljaWFyaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmVuZWYtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gIH1cbiAgXG4gIC5iZW5lZi10YWJsZS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG4gIFxuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5iZW5lZi1sb2FkaW5nLXNoYWRlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiA1NnB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgei1pbmRleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5iZW5lZi1yYXRlLWxpbWl0LXJlYWNoZWQge1xuICAgIGNvbG9yOiAjOTgwMDAwO1xuICAgIG1heC13aWR0aDogMzYwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAvKiBDb2x1bW4gV2lkdGhzICovXG4gIC5tYXQtY29sdW1uLW51bWJlcixcbiAgLm1hdC1jb2x1bW4tc3RhdGUge1xuICAgIG1heC13aWR0aDogNjRweDtcbiAgfVxuICBcbiAgLm1hdC1jb2x1bW4tY3JlYXRlZCB7XG4gICAgbWF4LXdpZHRoOiAxMjRweDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/beneficiaries/beneficiaries/beneficiaries.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/beneficiaries/beneficiaries/beneficiaries.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Beneficiaries works!\n</p>\n<div class=\"card dashboard-card\">\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-lg-2 col-md-12\">\n        <ul role=\"tablist\" class=\"nav nav-pills nav-pills-primary nav-pills-icons flex-column-lg flex-row-md justify-content-center mb-5\">\n          <li class=\"nav-item\"><a data-toggle=\"tab\" role=\"tablist\" class=\"nav-link active\">\n            <i class=\"material-icons\">pan_tool</i> Beneficiaries </a></li>\n        </ul>\n      </div>\n      <div class=\"col-lg-10 col-md-12\">\n        <div class=\"tab-content\">\n          <div class=\"tab-pane active show\" id=\"onhold-panel\">\n            <div class=\"card-header card-header-white mt-0 p-0\">\n              <div class=\"row align-items-center\">\n                <div class=\"col-6\">\n                  <h4 class=\"card-title\"></h4>\n                  <p class=\"card-category\">\n                  </p>\n                </div>\n                <div class=\"col-6\">\n                  <div class=\"d-flex pr-0 align-items-center input-group\">\n                    <input class=\"form-control mr-3\" (keyup)=\"searchBeneficiary($event.target.value)\" placeholder=\"Search\" type=\"text\">\n                    <div>\n                      <button mat-flat-button color=\"color\" (click)=\"AddBeneficiary()\">Add Beneficiary</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"table-responsive\">\n                <table mat-table class=\"table-responsive\" [dataSource=\"benefDataSource\"] multiTemplateDataRows matSort #empSort=\"matSort\">\n                  <ng-container matColumnDef=\"FirstName\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>Beneficiary Name</th>\n                  <td mat-cell *matCellDef=\"let benef\">{{benef.Name}}</td>\n                  </ng-container>\n                  <ng-container matColumnDef=\"Road\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>Account Number</th>\n                  <td mat-cell *matCellDef=\"let benef\">{{benef.AccountNumber}}</td>\n                  </ng-container>\n                  <ng-container matColumnDef=\"Suburb\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>Reference</th>\n                  <td mat-cell *matCellDef=\"let benef\">{{benef.Reference}}</td>\n                  </ng-container>\n\n                  <ng-container matColumnDef=\"Actions\">\n                    <th mat-header-cell *matHeaderCellDef style=\"width: 50px;\">Actions</th>\n                    <td mat-cell *matCellDef=\"let benef\" class=\"text-center\">\n                      <button color=\"info\" mat-icon-button aria-label=\"Edit this Beneficiary\" (refreshEmployessEvent)=\"loadBeneficiaries()\" (click)=\"editEmployee(emp)\" title=\"Click to Edit\">\n                        <mat-icon>edit</mat-icon>\n                      </button>\n                    </td>\n                  </ng-container>\n                  <tr mat-header-row *matHeaderRowDef=\"empDisplayColumns\" class=\"text-default\"></tr>\n                  <tr mat-row *matRowDef=\"let row; columns: empDisplayColumns;\"></tr>\n                </table>\n               <!-- <mat-toolbar>\n                  <mat-toolbar-rows class=\"p-0 bg-white\">\n                    <span style=\"flex: 1 1 auto\"></span>\n                    <mat-paginator  #empPaginator=\"matPaginator\" [pageSize]=\"10\"  [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n                  </mat-toolbar-rows>\n                </mat-toolbar>-->\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/beneficiaries/beneficiaries/beneficiaries.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/beneficiaries/beneficiaries/beneficiaries.component.ts ***!
  \************************************************************************/
/*! exports provided: BeneficiariesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficiariesComponent", function() { return BeneficiariesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/beneficiaries.service */ "./src/app/services/beneficiaries.service.ts");






var BeneficiariesComponent = /** @class */ (function () {
    function BeneficiariesComponent(_router, _benefService, _changeDetectedRefs, dialog) {
        this._router = _router;
        this._benefService = _benefService;
        this._changeDetectedRefs = _changeDetectedRefs;
        this.dialog = dialog;
        this.benefSearchColumn = [
            'Name',
            'AccountNumber',
            'Reference'
        ];
        this.displayColumns = [
            'Name',
            'AccountNumber',
            'Reference'
        ];
        this.benefList = [];
        this.benefDisplayColumns = [
            'Name',
            'AccountNumber',
            'Reference'
        ];
        this.color = 'accent';
        this.refreshBenefsEvent = new events__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.benefDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    BeneficiariesComponent.prototype.ngOnInit = function () {
        this.loadBeneficiaries();
    };
    BeneficiariesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.benefDataSource.filterPredicate = function (data, filter) {
            var matchFound = false;
            for (var _i = 0, _a = _this.benefSearchColumn; _i < _a.length; _i++) {
                var column = _a[_i];
                if (column in data) {
                    if (data[column]) {
                        matchFound =
                            matchFound ||
                                data[column]
                                    .toString()
                                    .trim()
                                    .toLowerCase()
                                    .indexOf(filter.trim().toLowerCase()) !== -1;
                    }
                }
            }
            return matchFound;
        };
        this.benefDataSource.filterPredicate = function (data, filter) {
            var matchFound = false;
            for (var _i = 0, _a = _this.benefSearchColumn; _i < _a.length; _i++) {
                var column = _a[_i];
                if (column in data) {
                    if (data[column]) {
                        matchFound =
                            matchFound ||
                                data[column]
                                    .toString()
                                    .trim()
                                    .toLowerCase()
                                    .indexOf(filter.trim().toLowerCase()) !== -1;
                    }
                }
            }
            return matchFound;
        };
        this.benefDataSource.sort = this.benefSort;
    };
    BeneficiariesComponent.prototype.loadBeneficiaries = function () {
        var _this = this;
        this._benefService.GetUserBeneficiaries(this.userId).subscribe(function (result) {
            if (result.Success && result.Data.length > 0) {
                _this.benefList = result.Data;
                _this.benefDataSource.data = _this.benefList;
                _this.benefDataSource.paginator = _this.benefPaginator;
                _this.benefDataSource.sort = _this.benefSort;
                _this._changeDetectedRefs.detectChanges();
            }
        });
    };
    BeneficiariesComponent.prototype.searchBeneficiary = function (searchValue) {
        searchValue = searchValue.trim();
        searchValue.toLocaleLowerCase();
        this.benefDataSource.filter = searchValue;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('benefPaginator'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], BeneficiariesComponent.prototype, "benefPaginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('benefSort'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], BeneficiariesComponent.prototype, "benefSort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BeneficiariesComponent.prototype, "refreshBenefsEvent", void 0);
    BeneficiariesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-beneficiaries',
            template: __webpack_require__(/*! ./beneficiaries.component.html */ "./src/app/beneficiaries/beneficiaries/beneficiaries.component.html"),
            styles: [__webpack_require__(/*! ./beneficiaries.component.css */ "./src/app/beneficiaries/beneficiaries/beneficiaries.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__["BeneficiariesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], BeneficiariesComponent);
    return BeneficiariesComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container .mat-form-field {\n    margin-left: 8px;\n  }\n  \n  .login-right-align {\n    text-align: right;\n  }\n  \n  input.login-right-align::-webkit-outer-spin-button,\n  input.login-right-align::-webkit-inner-spin-button {\n    display: -moz-boxs;\n  }\n  \n  input.login-right-align {\n    -moz-appearance: textfield ;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7O0lBRUUsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsMkJBQTJCO0VBQzdCIiwiZmlsZSI6ImxvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGFpbmVyIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgfVxuICBcbiAgLmxvZ2luLXJpZ2h0LWFsaWduIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuICBcbiAgaW5wdXQubG9naW4tcmlnaHQtYWxpZ246Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG4gIGlucHV0LmxvZ2luLXJpZ2h0LWFsaWduOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgICBkaXNwbGF5OiAtbW96LWJveHM7XG4gIH1cbiAgXG4gIGlucHV0LmxvZ2luLXJpZ2h0LWFsaWduIHtcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZCA7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"login-container\">\n  <p>\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Username:</mat-label>\n      <input matInput placeholder=\"Enter Username\">\n    </mat-form-field>\n  </p>\n  <p>\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Enter your password</mat-label>\n      <input matInput type=\"password\" placeholder=\"Password\" >\n    </mat-form-field>\n  </p>\n  <p> \n    <button mat-raised-button color=\"primary\">login</button>\n    <button mat-button color=\"primary\">register</button>\n  </p>\n</form>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/request */ "./src/app/models/request.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_ui_msg_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/ui-msg.service */ "./src/app/services/ui-msg.service.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(_formBulder, _router, _route, _authService, _uiService) {
        this._formBulder = _formBulder;
        this._router = _router;
        this._route = _route;
        this._authService = _authService;
        this._uiService = _uiService;
        this.loading = false;
        this.submitted = false;
        this.loginRequest = new _models_request__WEBPACK_IMPORTED_MODULE_4__["LoginRequest"]();
        if (this.authenticationService.currentUserValue) {
            this._router.navigate(['/']);
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this._formBulder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "formCont", {
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        else {
            this.loading = true;
            this.loginRequest.UserName = this.formCont.username.value;
            this.loginRequest.Password = this.formCont.password.value;
            this._authService.login(this.loginRequest).subscribe(function (result) {
                if (result && result.Data.token) {
                    _this._router.navigate([_this.returnUrl]);
                }
                else {
                    _this._uiService.toast('Something went wrong while saving, please try again or contact system support');
                    _this._uiService.hideLoading();
                }
            });
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _services_ui_msg_service__WEBPACK_IMPORTED_MODULE_6__["UiMsgService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/beneficiary.ts":
/*!***************************************!*\
  !*** ./src/app/models/beneficiary.ts ***!
  \***************************************/
/*! exports provided: Beneficiary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Beneficiary", function() { return Beneficiary; });
var Beneficiary = /** @class */ (function () {
    function Beneficiary() {
    }
    return Beneficiary;
}());



/***/ }),

/***/ "./src/app/models/request.ts":
/*!***********************************!*\
  !*** ./src/app/models/request.ts ***!
  \***********************************/
/*! exports provided: UserRequest, BeneficiaryRequest, LoginRequest, UserLoginQueryResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRequest", function() { return UserRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficiaryRequest", function() { return BeneficiaryRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRequest", function() { return LoginRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginQueryResponse", function() { return UserLoginQueryResponse; });
var UserRequest = /** @class */ (function () {
    function UserRequest() {
    }
    return UserRequest;
}());

var BeneficiaryRequest = /** @class */ (function () {
    function BeneficiaryRequest() {
    }
    return BeneficiaryRequest;
}());

var LoginRequest = /** @class */ (function () {
    function LoginRequest() {
    }
    return LoginRequest;
}());

var UserLoginQueryResponse = /** @class */ (function () {
    function UserLoginQueryResponse() {
    }
    return UserLoginQueryResponse;
}());



/***/ }),

/***/ "./src/app/models/useraccount.ts":
/*!***************************************!*\
  !*** ./src/app/models/useraccount.ts ***!
  \***************************************/
/*! exports provided: Useraccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Useraccount", function() { return Useraccount; });
var Useraccount = /** @class */ (function () {
    function Useraccount() {
    }
    return Useraccount;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(_http) {
        this._http = _http;
        this.baseApiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].serviceBaseUrl;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    AuthenticationService.prototype.login = function (loginRequest) {
        var _this = this;
        return this._http.post(this.baseApiUrl + "/api/authentication/login", loginRequest)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            if (user && user.Data.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                _this.currentUserSubject.next(user.Data);
            }
        }));
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/beneficiaries.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/beneficiaries.service.ts ***!
  \***************************************************/
/*! exports provided: BeneficiariesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficiariesService", function() { return BeneficiariesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var BeneficiariesService = /** @class */ (function () {
    function BeneficiariesService(_http) {
        this._http = _http;
        this.baseApiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serviceBaseUrl;
    }
    BeneficiariesService.prototype.AddBeneficiary = function (beneficiaryRequest) {
        return this._http.post(this.baseApiUrl + "/api/Beneficiary/AddBeneficiary", beneficiaryRequest);
    };
    BeneficiariesService.prototype.UpdateBeneficiary = function (beneficiaryRequest) {
        return this._http.post(this.baseApiUrl + "/api/Beneficiary/UpdateBeneficiary", beneficiaryRequest);
    };
    BeneficiariesService.prototype.DeleteBeneficiary = function (beneficiaryRequest) {
        return this._http.post(this.baseApiUrl + "/api/Beneficiary/RemoveBeneficiary", beneficiaryRequest);
    };
    BeneficiariesService.prototype.GetUserBeneficiaries = function (userId) {
        return this._http.get(this.baseApiUrl + "/api/Beneficiary/GetBeneficiaries");
    };
    BeneficiariesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BeneficiariesService);
    return BeneficiariesService;
}());



/***/ }),

/***/ "./src/app/services/ui-msg.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/ui-msg.service.ts ***!
  \********************************************/
/*! exports provided: UiMsgService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiMsgService", function() { return UiMsgService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/confirm/confirm.component */ "./src/app/shared/confirm/confirm.component.ts");
/* harmony import */ var _shared_please_wait_please_wait_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/please-wait/please-wait.component */ "./src/app/shared/please-wait/please-wait.component.ts");





var UiMsgService = /** @class */ (function () {
    function UiMsgService(_snackBar, _dialog) {
        this._snackBar = _snackBar;
        this._dialog = _dialog;
    }
    UiMsgService.prototype.snack = function (message, durationMiliSec) {
        if (durationMiliSec) {
            this._snackBar.open(message, null, {
                duration: durationMiliSec,
                panelClass: 'style-success'
            });
        }
        else {
            this._snackBar.open(message, null, {
                duration: 3000,
                panelClass: 'style-success'
            });
        }
    };
    UiMsgService.prototype.toast = function (message, durationMiliSec) {
        if (durationMiliSec) {
            this._snackBar.open(message, 'close', {
                politeness: 'assertive',
                panelClass: 'red-snackbar',
                duration: durationMiliSec
            });
        }
        else {
            this._snackBar.open(message, 'close', {
                politeness: 'assertive',
                panelClass: 'red-snackbar',
                duration: 5000
            });
        }
    };
    UiMsgService.prototype.confirm = function (message, title) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var confirmDialogRef, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        confirmDialogRef = this._dialog.open(_shared_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmComponent"], {
                            disableClose: true,
                            data: {
                                message: message,
                                title: title || 'Confirm?'
                            }
                        });
                        return [4 /*yield*/, confirmDialogRef.afterClosed().toPromise()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, Promise.resolve(!!result)];
                }
            });
        });
    };
    UiMsgService.prototype.showLoading = function (title) {
        this.hideLoading();
        this.opened = true;
        this._pleaseWaitDialogRef = this._dialog.open(_shared_please_wait_please_wait_component__WEBPACK_IMPORTED_MODULE_4__["PleaseWaitComponent"], {
            disableClose: true,
            data: { title: title || 'Loading...' }
        });
    };
    UiMsgService.prototype.hideLoading = function () {
        if (this._pleaseWaitDialogRef) {
            this._pleaseWaitDialogRef.close();
            this._pleaseWaitDialogRef = null;
            this.opened = false;
        }
    };
    UiMsgService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], UiMsgService);
    return UiMsgService;
}());



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var UsersService = /** @class */ (function () {
    function UsersService(_http) {
        this._http = _http;
        this.baseApiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serviceBaseUrl;
    }
    UsersService.prototype.AddUser = function (userRequest) {
        return this._http.post(this.baseApiUrl + "/api/User/RegisterUser", userRequest);
    };
    UsersService.prototype.GetAllUsers = function () {
        return this._http.get(this.baseApiUrl + "/api/User/GetAllUsers");
    };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/shared/confirm/confirm.component.css":
/*!******************************************************!*\
  !*** ./src/app/shared/confirm/confirm.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGFyZWQvY29uZmlybS9jb25maXJtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/confirm/confirm.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/confirm/confirm.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  confirm works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/confirm/confirm.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/confirm/confirm.component.ts ***!
  \*****************************************************/
/*! exports provided: ConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function() { return ConfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ConfirmComponent = /** @class */ (function () {
    function ConfirmComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ConfirmComponent.prototype.ngOnInit = function () {
    };
    ConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm',
            template: __webpack_require__(/*! ./confirm.component.html */ "./src/app/shared/confirm/confirm.component.html"),
            styles: [__webpack_require__(/*! ./confirm.component.css */ "./src/app/shared/confirm/confirm.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], ConfirmComponent);
    return ConfirmComponent;
}());



/***/ }),

/***/ "./src/app/shared/please-wait/please-wait.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/please-wait/please-wait.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGFyZWQvcGxlYXNlLXdhaXQvcGxlYXNlLXdhaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/please-wait/please-wait.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/please-wait/please-wait.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  please-wait works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/please-wait/please-wait.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/please-wait/please-wait.component.ts ***!
  \*************************************************************/
/*! exports provided: PleaseWaitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PleaseWaitComponent", function() { return PleaseWaitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PleaseWaitComponent = /** @class */ (function () {
    function PleaseWaitComponent() {
    }
    PleaseWaitComponent.prototype.ngOnInit = function () {
    };
    PleaseWaitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-please-wait',
            template: __webpack_require__(/*! ./please-wait.component.html */ "./src/app/shared/please-wait/please-wait.component.html"),
            styles: [__webpack_require__(/*! ./please-wait.component.css */ "./src/app/shared/please-wait/please-wait.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PleaseWaitComponent);
    return PleaseWaitComponent;
}());



/***/ }),

/***/ "./src/app/users/add-user/add-user.component.css":
/*!*******************************************************!*\
  !*** ./src/app/users/add-user/add-user.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy9hZGQtdXNlci9hZGQtdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/users/add-user/add-user.component.html":
/*!********************************************************!*\
  !*** ./src/app/users/add-user/add-user.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  add-user works!\n</p>\n<form *ngIf=\"addUserForm\"   [formGroup=\"addUserForm\"]>\n  <div mat-dialog-content>\n    <div class=\"row\">\n      <label>User Details:</label>\n      <div class=\"col-3\">\n        <label>Username:</label>\n        <input type=\"text\" formControlName=\"UserName\" class=\"form-control\" (blur)=\"validateUser()\"/>\n        <mat-error>\n          <span *ngIf=\"!addUserForm.get('UserName').valid && addUserForm.get('UserName').touched\">UserName is required</span>\n        </mat-error>\n      </div>\n      <div class=\"col-4\">\n        <label>FirstName:</label>\n        <input type=\"text\" formControlName=\"FirstName\" class=\"form-control\"/>\n        <mat-error>\n          <span *ngIf=\"!addUserForm.get('FirstName').valid && addUserForm.get('FirstName').touched\">FirstName is required</span>\n        </mat-error>\n      </div>\n      <div class=\"col-5\">\n        <label>Surname:</label>\n        <input type=\"text\" formControlName=\"Surname\" class=\"form-control\" />\n        <mat-error>\n          <span *ngIf=\"!addUserForm.get('Surname').valid && addUserForm.get('Surname').touched\">Surname is required</span>\n        </mat-error>\n      </div>\n      <div class=\"col-5\">\n        <label>Password:</label>\n        <input type=\"password\" formControlName=\"Password\" class=\"form-control\"/>\n        <mat-error>\n          <span *ngIf=\"!addUserForm.get('Password').valid && addUserForm.get('Password').touched\">Password is required</span>\n        </mat-error>\n      </div>\n      <div class=\"col-5\">\n        <label>Confirm Password:</label>\n        <input type=\"password\" formControlName=\"ConfirmPassword\" class=\"form-control\" />\n        <mat-error>\n          <span *ngIf=\"!addUserForm.get('ConfirmPassword').valid && addUserForm.get('ConfirmPassword').touched\">ConfirmPassword is required and must match Password!</span>\n        </mat-error>\n      </div>\n    </div>\n    <br/>\n    <br/>\n  </div>\n  <div mat-dialog-actions>\n    <button mat-button (click)=\"onNoClick()\">Cancel</button>\n    <button mat-button (click)=\"saveUser()\" cdkFocusInitial [disabled]=\"addUserForm.invalid\" (refreshUsersEvent)=\"loadUsers()\"> Save</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/users/add-user/add-user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/users/add-user/add-user.component.ts ***!
  \******************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_models_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/request */ "./src/app/models/request.ts");
/* harmony import */ var src_app_models_useraccount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/useraccount */ "./src/app/models/useraccount.ts");
/* harmony import */ var src_app_services_ui_msg_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ui-msg.service */ "./src/app/services/ui-msg.service.ts");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");








var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(_userService, _formBuilder, _uiService, dialogRef) {
        this._userService = _userService;
        this._formBuilder = _formBuilder;
        this._uiService = _uiService;
        this.dialogRef = dialogRef;
        this.userRequest = new src_app_models_request__WEBPACK_IMPORTED_MODULE_4__["UserRequest"]();
        this.userDetails = new src_app_models_useraccount__WEBPACK_IMPORTED_MODULE_5__["Useraccount"]();
        this.usersList = [];
        this.color = 'accent';
    }
    AddUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.GetAllUsers().subscribe(function (results) {
            if (results.Success) {
                _this.usersList = results.Data;
            }
        });
        this.addUserForm = this._formBuilder.group({
            Username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)],
            FirstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)],
            Surname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)],
            Password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)],
            IsActive: [true],
            IsAdmin: [false]
        });
    };
    AddUserComponent.prototype.saveUser = function () {
        var _this = this;
        this._uiService.showLoading('Saving please wait....');
        this.userDetails.UserName = this.addUserForm.value.Username;
        this.userDetails.FirstName = this.addUserForm.value.FirstName;
        this.userDetails.Surname = this.addUserForm.value.Surname;
        this.userDetails.Password = this.addUserForm.value.Password;
        this.userDetails.IsActive = this.addUserForm.value.IsActive;
        this.userDetails.IsAdmin = this.addUserForm.value.IsAdmin;
        this.userRequest.User = this.userDetails;
        this._userService.AddUser(this.userRequest).subscribe(function (result) {
            if (result.Success) {
                _this._uiService.snack('User has been successfully Added');
            }
            else {
                _this._uiService.toast('Something went wrong while saving, please try again or contact system support');
            }
            _this.dialogRef.close();
            _this._uiService.hideLoading();
        });
    };
    AddUserComponent.prototype.validateUser = function () {
        var _this = this;
        if (this.usersList.length > 0) {
            var user = this.usersList.find(function (x) { return x.UserName == _this.addUserForm.value.Username; });
            if (user !== undefined) {
                this.addUserForm.controls['Username'].setErrors({ 'username already exist!': true });
            }
        }
    };
    AddUserComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-user',
            template: __webpack_require__(/*! ./add-user.component.html */ "./src/app/users/add-user/add-user.component.html"),
            styles: [__webpack_require__(/*! ./add-user.component.css */ "./src/app/users/add-user/add-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_ui_msg_service__WEBPACK_IMPORTED_MODULE_6__["UiMsgService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  users works!\n</p>\n"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UsersComponent);
    return UsersComponent;
}());



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
    production: false,
    serviceBaseUrl: 'http://localhost:50043'
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

module.exports = __webpack_require__(/*! /Users/masheleza/Documents/development/Capitec/BMWebApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map