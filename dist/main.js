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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-background-color=\"white\" data-active-color=\"danger\">\n        <sidebar-cmp></sidebar-cmp>\n    </div>\n    <div class=\"main-panel\">\n        <navbar-int-cmp></navbar-int-cmp>\n        <div class=\"content\">\n            <router-outlet></router-outlet>\n        </div>\n        <footer-cmp></footer-cmp>\n    </div>\n</div>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/users.service */ "./src/app/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            providers: [_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_management_reducers_segment_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./state-management/reducers/segment.reducer */ "./src/app/state-management/reducers/segment.reducer.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_app_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app/app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sidebar/sidebar.module */ "./src/app/sidebar/sidebar.module.ts");
/* harmony import */ var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/footer/footer.module */ "./src/app/shared/footer/footer.module.ts");
/* harmony import */ var _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/navbar/navbar.module */ "./src/app/shared/navbar/navbar.module.ts");
/* harmony import */ var _shared_navbar_int_navbar_int_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/navbar-int/navbar-int.module */ "./src/app/shared/navbar-int/navbar-int.module.ts");
/* harmony import */ var _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/fixedplugin/fixedplugin.module */ "./src/app/shared/fixedplugin/fixedplugin.module.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_list_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user/list/list.component */ "./src/app/user/list/list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















// import { DashboAppRoutingModuleardComponent } from './dashboard/dashboard.component';
// import { TableComponent } from './table/table.component';
// import { TypographyComponent } from './typography/typography.component';
// import { IconsComponent } from './icons/icons.component';
// import { NotificationsComponent } from './notifications/notifications.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_18__["UserComponent"],
                _user_list_list_component__WEBPACK_IMPORTED_MODULE_19__["UserListComponent"],
            ],
            imports: [
                angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot({
                    segmentReducer: _state_management_reducers_segment_reducer__WEBPACK_IMPORTED_MODULE_8__["segmentReducer"]
                }),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_app_routing__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_13__["SidebarModule"],
                _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_15__["NavbarModule"],
                _shared_navbar_int_navbar_int_module__WEBPACK_IMPORTED_MODULE_16__["NavbarIntModule"],
                _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_14__["FooterModule"],
                _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_17__["FixedPluginModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/list/list.component */ "./src/app/user/list/list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { DashboardComponent } from './dashboard/dashboard.component';
// import { TableComponent } from './table/table.component';
// import { TypographyComponent } from './typography/typography.component';
// import { IconsComponent } from './icons/icons.component';
// import { NotificationsComponent } from './notifications/notifications.component';
var AppRoutes = [
    {
        path: '',
        redirectTo: 'user/list',
        pathMatch: 'full',
    },
    // {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // },
    {
        path: 'user',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_1__["UserComponent"],
    },
    { path: 'user/list', component: _user_list_list_component__WEBPACK_IMPORTED_MODULE_2__["UserListComponent"] },
    { path: 'user/edit/:id', component: _user_user_component__WEBPACK_IMPORTED_MODULE_1__["UserComponent"] }
    // {
    //     path: 'table',
    //     component: TableComponent
    // },
    // {
    //     path: 'typography',
    //     component: TypographyComponent
    // },
    // {
    //     path: 'icons',
    //     component: IconsComponent
    // },
    // {
    //     path: 'notifications',
    //     component: NotificationsComponent
    // },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(AppRoutes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/services/methodsFirebase.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/methodsFirebase.service.ts ***!
  \*****************************************************/
/*! exports provided: MethodsFirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MethodsFirebaseService", function() { return MethodsFirebaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MethodsFirebaseService = /** @class */ (function () {
    function MethodsFirebaseService(db) {
        this.db = db;
    }
    MethodsFirebaseService.prototype.listData = function (path) {
        console.log(path);
        var data = null;
        data = this.db.list(path);
        return data;
    };
    MethodsFirebaseService.prototype.handleError = function (error) {
        console.log(error);
    };
    MethodsFirebaseService.prototype.queryItem = function (path, type, value) {
        var data;
        var ref = this.db.database.ref(path);
        ref.orderByChild(type).equalTo(value).on('child_added', function (snapshot) {
            data = snapshot.val();
        });
        return data;
    };
    MethodsFirebaseService.prototype.getListData = function (path) {
        return this.listData(path);
    };
    MethodsFirebaseService.prototype.create = function (path, data) {
        var create = this.listData(path);
        create.push(data);
    };
    MethodsFirebaseService.prototype.update = function (path, key, value) {
        var _this = this;
        var data = this.listData(path);
        data.update(key, value).catch(function (error) { return _this.handleError(error); });
    };
    MethodsFirebaseService.prototype.delete = function (path, key) {
        var _this = this;
        var data = this.listData(path);
        data.remove(key).catch(function (error) { return _this.handleError(error); });
    };
    MethodsFirebaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], MethodsFirebaseService);
    return MethodsFirebaseService;
}());



/***/ }),

/***/ "./src/app/services/users.model.ts":
/*!*****************************************!*\
  !*** ./src/app/services/users.model.ts ***!
  \*****************************************/
/*! exports provided: Users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Users", function() { return Users; });
var Users = /** @class */ (function () {
    function Users() {
    }
    return Users;
}());



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _methodsFirebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methodsFirebase.service */ "./src/app/services/methodsFirebase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(methodsFirebase) {
        this.methodsFirebase = methodsFirebase;
    }
    UserService.prototype.searchUserData = function (path, type, value) {
        return this.methodsFirebase.queryItem(path, type, value);
    };
    UserService.prototype.getListData = function (path) {
        return this.methodsFirebase.getListData(path);
    };
    UserService.prototype.createUser = function (path, user) {
        this.methodsFirebase.create(path, user);
    };
    UserService.prototype.updateUser = function (path, key, value) {
        this.methodsFirebase.update(path, key, value);
    };
    UserService.prototype.deleteUser = function (path, key) {
        this.methodsFirebase.delete(path, key);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_methodsFirebase_service__WEBPACK_IMPORTED_MODULE_1__["MethodsFirebaseService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/fixedplugin/fixedplugin.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fixed-plugin\">\n    <div class=\"dropdown show-dropdown\">\n        <a href=\"#\" data-toggle=\"dropdown\">\n        <i class=\"fa fa-cog fa-2x\"> </i>\n        </a>\n        <ul class=\"dropdown-menu\">\n            <li class=\"header-title\">Sidebar Background</li>\n            <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\n                        <span class=\"badge filter badge-white active\" data-color=\"white\"></span>\n                        <span class=\"badge filter badge-black\" data-color=\"black\"></span>\n                </a>\n            </li>\n\n\t\t\t<li class=\"header-title\">Sidebar Active Color</li>\n            <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\n                        <span class=\"badge filter badge-primary\" data-color=\"primary\"></span>\n                        <span class=\"badge filter badge-info\" data-color=\"info\"></span>\n                        <span class=\"badge filter badge-success\" data-color=\"success\"></span>\n                        <span class=\"badge filter badge-warning\" data-color=\"warning\"></span>\n                        <span class=\"badge filter badge-danger active\" data-color=\"danger\"></span>\n                </a>\n            </li>\n\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/fixedplugin/fixedplugin.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.component.ts ***!
  \*************************************************************/
/*! exports provided: FixedPluginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedPluginComponent", function() { return FixedPluginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FixedPluginComponent = /** @class */ (function () {
    function FixedPluginComponent() {
    }
    FixedPluginComponent.prototype.ngOnInit = function () {
        var $sidebar = $('.sidebar');
        var $off_canvas_sidebar = $('.off-canvas-sidebar');
        var window_width = $(window).width();
        if (window_width > 767) {
            if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                $('.fixed-plugin .dropdown').addClass('open');
            }
        }
        $('.fixed-plugin a').click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if ($(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        $('.fixed-plugin .background-color span').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length != 0) {
                $sidebar.attr('data-background-color', new_color);
            }
            if ($off_canvas_sidebar.length != 0) {
                $off_canvas_sidebar.attr('data-background-color', new_color);
            }
        });
        $('.fixed-plugin .active-color span').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length != 0) {
                $sidebar.attr('data-active-color', new_color);
            }
            if ($off_canvas_sidebar.length != 0) {
                $off_canvas_sidebar.attr('data-active-color', new_color);
            }
        });
    };
    FixedPluginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'fixedplugin-cmp',
            template: __webpack_require__(/*! ./fixedplugin.component.html */ "./src/app/shared/fixedplugin/fixedplugin.component.html")
        })
    ], FixedPluginComponent);
    return FixedPluginComponent;
}());



/***/ }),

/***/ "./src/app/shared/fixedplugin/fixedplugin.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.module.ts ***!
  \**********************************************************/
/*! exports provided: FixedPluginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedPluginModule", function() { return FixedPluginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fixedplugin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fixedplugin.component */ "./src/app/shared/fixedplugin/fixedplugin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FixedPluginModule = /** @class */ (function () {
    function FixedPluginModule() {
    }
    FixedPluginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_3__["FixedPluginComponent"]],
            exports: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_3__["FixedPluginComponent"]]
        })
    ], FixedPluginModule);
    return FixedPluginModule;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <!-- <nav class=\"pull-left\">\n            <ul>\n\n                <li>\n                    <a href=\"https://www.creative-tim.com\">\n                        Creative Tim\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://blog.creative-tim.com\">\n                       Blog\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://www.creative-tim.com/license\">\n                        Licenses\n                    </a>\n                </li>\n            </ul>\n        </nav> -->\n        <div class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}}\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'footer-cmp',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/footer/footer.module.ts ***!
  \************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.component */ "./src/app/shared/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
            exports: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "./src/app/shared/navbar-int/navbar-int.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/navbar-int/navbar-int.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar bar1\"></span>\n                <span class=\"icon-bar bar2\"></span>\n                <span class=\"icon-bar bar3\"></span>\n            </button>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-left\">\n                <li class=\"dropdown\">\n                      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                            <p>Cadastros</p>\n                            <b class=\"caret\"></b>\n                      </a>\n                      <ul class=\"dropdown-menu\">\n                          <li><a href=\"#\" [routerLink]=\"['/user']\">Cadastrar</a></li>\n                        <li><a href=\"#\" [routerLink]=\"['/user/list']\">Listar</a></li>\n\n                      </ul>\n                </li>\n            </ul>\n\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/navbar-int/navbar-int.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/navbar-int/navbar-int.component.ts ***!
  \***********************************************************/
/*! exports provided: NavbarIntComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarIntComponent", function() { return NavbarIntComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarIntComponent = /** @class */ (function () {
    function NavbarIntComponent(location, renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    NavbarIntComponent.prototype.ngOnInit = function () {
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    };
    NavbarIntComponent.prototype.getTitle = function () {
        var titlee = window.location.pathname;
        titlee = titlee.substring(1);
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarIntComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("navbar-cmp"),
        __metadata("design:type", Object)
    ], NavbarIntComponent.prototype, "button", void 0);
    NavbarIntComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'navbar-int-cmp',
            template: __webpack_require__(/*! ./navbar-int.component.html */ "./src/app/shared/navbar-int/navbar-int.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NavbarIntComponent);
    return NavbarIntComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar-int/navbar-int.module.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/navbar-int/navbar-int.module.ts ***!
  \********************************************************/
/*! exports provided: NavbarIntModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarIntModule", function() { return NavbarIntModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _navbar_int_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar-int.component */ "./src/app/shared/navbar-int/navbar-int.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavbarIntModule = /** @class */ (function () {
    function NavbarIntModule() {
    }
    NavbarIntModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_navbar_int_component__WEBPACK_IMPORTED_MODULE_3__["NavbarIntComponent"]],
            exports: [_navbar_int_component__WEBPACK_IMPORTED_MODULE_3__["NavbarIntComponent"]]
        })
    ], NavbarIntModule);
    return NavbarIntModule;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar bar1\"></span>\n                <span class=\"icon-bar bar2\"></span>\n                <span class=\"icon-bar bar3\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"ti-panel\"></i>\n                        <p>Stats</p>\n                    </a>\n                </li>\n                <li class=\"dropdown\">\n                      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                            <i class=\"ti-bell\"></i>\n                            <p class=\"notification\">5</p>\n                            <p>Notifications</p>\n                            <b class=\"caret\"></b>\n                      </a>\n                      <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">Notification 1</a></li>\n                        <li><a href=\"#\">Notification 2</a></li>\n                        <li><a href=\"#\">Notification 3</a></li>\n                        <li><a href=\"#\">Notification 4</a></li>\n                        <li><a href=\"#\">Another notification</a></li>\n                      </ul>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        <i class=\"ti-settings\"></i>\n                        <p>Settings</p>\n                    </a>\n                </li>\n            </ul>\n\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = window.location.pathname;
        titlee = titlee.substring(1);
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("navbar-cmp"),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "button", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'navbar-cmp',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/navbar/navbar.module.ts ***!
  \************************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]],
            exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]]
        })
    ], NavbarModule);
    return NavbarModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_methodsFirebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/methodsFirebase.service */ "./src/app/services/methodsFirebase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            ],
            declarations: [],
            providers: [
                _services_methodsFirebase_service__WEBPACK_IMPORTED_MODULE_4__["MethodsFirebaseService"],
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"sidebar-wrapper\">\n    <div class=\"logo\">\n        <div class=\"simple-text\">\n            <div class=\"logo-img\">\n                <img src=\"../../assets/img/projetovelhoamigo.jpg\" alt=\"Logotipo de uma árvore, representando o Projeto Velho Amigo\">\n            </div>\n        </div>\n    </div>\n    <ul class=\"nav\">\n            <!-- <li *ngIf=\"isNotMobileMenu()\">\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                    <i class=\"ti-panel\"></i>\n\t\t\t\t\t<p>Stats</p>\n                </a>\n            </li>\n            <li class=\"dropdown\" *ngIf=\"isNotMobileMenu()\">\n                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"ti-bell\"></i>\n                        <p class=\"notification\">5</p>\n    \t\t\t\t\t<p>Notifications</p>\n    \t\t\t\t\t<b class=\"caret\"></b>\n                  </a>\n                  <ul class=\"dropdown-menu\">\n                    <li><a href=\"#\">Notification 1</a></li>\n                    <li><a href=\"#\">Notification 2</a></li>\n                    <li><a href=\"#\">Notification 3</a></li>\n                    <li><a href=\"#\">Notification 4</a></li>\n                    <li><a href=\"#\">Another notification</a></li>\n                  </ul>\n            </li>\n            <li *ngIf=\"isNotMobileMenu()\">\n                <a href=\"#\">\n\t\t\t\t\t<i class=\"ti-settings\"></i>\n\t\t\t\t\t<p>Settings</p>\n                </a>\n            </li>\n            <li class=\"divider\" *ngIf=\"isNotMobileMenu()\"></li> -->\n        <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\">\n            <a [routerLink]=\"[menuItem.path]\">\n                <i class=\"{{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>\n\n\n<!-- <input id=\"upload\" type=\"file\" (change)=\"imageChange($event)\"/>\n\n\n<img [src]=\"dstImg\" /> -->\n<!-- <img [src]=\"dstImg\" alt=\"\"> -->\n\n\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ROUTES = [
    { path: 'user', title: 'Cadastros', icon: 'ti-user', class: '' },
];
// [
//     { path: 'dashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
//     { path: 'user', title: 'User Profile',  icon: 'ti-user', class: '' },
//     { path: 'table', title: 'Table List',  icon: 'ti-view-list-alt', class: '' },
//     { path: 'typography', title: 'Typography',  icon: 'ti-text', class: '' },
//     { path: 'icdataUrlons', title: 'Icons',  icon: 'ti-pencil-alt2', class: '' },
//     { path: 'notifications', title: 'Notifications',  icon: 'ti-bell', class: '' },
// ];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(domSanitizer) {
        this.domSanitizer = domSanitizer;
        this.dstImg = 'https://via.placeholder.com/100';
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isNotMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    SidebarComponent.prototype.handleFileInput = function (file) {
        // console.log(file);
        // console.log(this.transform(file));
        this.imageChange(file);
    };
    SidebarComponent.prototype.imageChange = function (input) {
        var _this = this;
        // Loop through each picture file
        this.files = (input.target.files[0]);
        // Create an img element and add the image file data to it
        var img = document.createElement('img');
        img.src = window.URL.createObjectURL(input.target.files[0]);
        // console.log(img.src);
        // console.log(input);
        var reader = new FileReader();
        reader.addEventListener('load', function (event) {
            img.src = event.target.result;
            _this.imageToShow = event.target.result;
            console.log(event.target.result);
            // Resize the image
            _this.resize(img);
        }, false);
        reader.readAsDataURL(input.target.files[0]);
    };
    SidebarComponent.prototype.resize = function (img, MAX_WIDTH, MAX_HEIGHT) {
        // const canvas = document.createElement('canvas');
        // canvas.width = img.width;
        // canvas.height = img.height;
        if (MAX_WIDTH === void 0) { MAX_WIDTH = 100; }
        if (MAX_HEIGHT === void 0) { MAX_HEIGHT = 100; }
        // const ctx = canvas.getContext('2d');
        // // ctx.drawImage(img, 0, 0);
        // ctx.drawImage(img, 0, 0, img.width, img.height);
        // console.log(ctx);
        // const imageData = ctx.getImageData(200, 400, 200, 200);
        // console.log(imageData);
        // // create destiantion canvas
        // const canvas1 = document.createElement('canvas');
        // canvas1.width = 100;
        // canvas1.height = 100;
        // const ctx1 = canvas1.getContext('2d');
        // ctx1.rect(0, 0, 100, 100);
        // ctx1.fillStyle = 'white';
        // ctx1.fill();
        // ctx1.putImageData(imageData, 0, 0);
        // // console.log(ctx1);
        // // put data to the img element
        // this.dstImg = canvas1.toDataURL('image/jpeg');
        var canvas = document.createElement('canvas');
        console.log(img);
        console.log(img.width);
        console.log(img.height);
        var width = img.width;
        var height = img.height;
        if (width > height) {
            if (width > MAX_WIDTH) {
                height *= MAX_WIDTH / width;
                width = MAX_WIDTH;
            }
        }
        else {
            if (height > MAX_HEIGHT) {
                width *= MAX_HEIGHT / height;
                height = MAX_HEIGHT;
            }
        }
        canvas.width = width;
        canvas.height = height;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        this.dstImg = canvas.toDataURL('image/jpeg');
        // return canvas.toDataURL('image/jpeg');
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'sidebar-cmp',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sidebar/sidebar.module.ts ***!
  \*******************************************/
/*! exports provided: SidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarModule", function() { return SidebarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]],
            exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]]
        })
    ], SidebarModule);
    return SidebarModule;
}());



/***/ }),

/***/ "./src/app/state-management/actions/segment.actions.ts":
/*!*************************************************************!*\
  !*** ./src/app/state-management/actions/segment.actions.ts ***!
  \*************************************************************/
/*! exports provided: LOGIN_VALUE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_VALUE", function() { return LOGIN_VALUE; });
var LOGIN_VALUE = 'LOGIN_VALUE';


/***/ }),

/***/ "./src/app/state-management/reducers/segment.reducer.ts":
/*!**************************************************************!*\
  !*** ./src/app/state-management/reducers/segment.reducer.ts ***!
  \**************************************************************/
/*! exports provided: segmentReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "segmentReducer", function() { return segmentReducer; });
/* harmony import */ var _state_segment_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/segment.state */ "./src/app/state-management/state/segment.state.ts");
/* harmony import */ var _actions_segment_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/segment.actions */ "./src/app/state-management/actions/segment.actions.ts");


function segmentReducer(state, action) {
    if (state === void 0) { state = _state_segment_state__WEBPACK_IMPORTED_MODULE_0__["intitialState"]; }
    switch (action.type) {
        case _actions_segment_actions__WEBPACK_IMPORTED_MODULE_1__["LOGIN_VALUE"]: {
            return action;
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/state-management/state/segment.state.ts":
/*!*********************************************************!*\
  !*** ./src/app/state-management/state/segment.state.ts ***!
  \*********************************************************/
/*! exports provided: intitialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intitialState", function() { return intitialState; });
var intitialState = {
    payload: {
        name: '',
        email: '',
        isLogged: false
    }
};


/***/ }),

/***/ "./src/app/user/list/list.component.html":
/*!***********************************************!*\
  !*** ./src/app/user/list/list.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"header\">\n\t\t\t\t\t\t<h4 class=\"title\">Lista dos Cadastrados</h4>\n\t\t\t\t\t\t<p class=\"category\">descrição vem aqui</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"content table-responsive table-full-width\">\n\t\t\t\t\t\t<table class=\"table table-striped\">\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th *ngFor=\"let cell of tableData1.headerRow\">{{ cell }}</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of users; let i = index\">\n\t\t\t\t\t\t\t\t\t<td>{{ i + 1 }}</td>\n\t\t\t\t\t\t\t\t\t<td>{{ item.name }}</td>\n\t\t\t\t\t\t\t\t\t<td>{{ item.rg }}</td>\n\t\t\t\t\t\t\t\t\t<td>{{ item.cpf }}</td>\n\t\t\t\t\t\t\t\t\t<td>{{ item.active }}</td>\n\t\t\t\t\t\t\t\t\t<td><a [routerLink]=\"['/user/edit', item.registration]\">editar</a></td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" (click)=\"teste(item.key)\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">\n\t\t\t\t\t\t\t\t\t\t\tapagar\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Modal -->\n\t\t\t\t<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n\t\t\t\t\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t\t\t\t\t<div class=\"modal-content\">\n\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Confirmação de Exclusão</h5>\n\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\tTem certeza que deseja Excluir o usuário?\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Não</button>\n\t\t\t\t\t\t\t<button type=\"button\" (click)=\"deleteUser(key)\" data-dismiss=\"modal\" class=\"btn btn-primary\">Sim</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>"

/***/ }),

/***/ "./src/app/user/list/list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/list/list.component.ts ***!
  \*********************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserListComponent = /** @class */ (function () {
    function UserListComponent(usersService, store) {
        this.usersService = usersService;
        this.store = store;
        this.basePath = '/users';
        this.edit = false;
        this.key = '';
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.getUsersList();
        this.tableData1 = {
            headerRow: [' ', 'Nome', 'RG', 'CPF', 'Ativo'],
            dataRows: [],
        };
    };
    UserListComponent.prototype.getUsersList = function () {
        var _this = this;
        this.usersService.getListData(this.basePath).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (users) {
            _this.users = users;
        });
    };
    UserListComponent.prototype.deleteUser = function (userKey) {
        this.usersService.deleteUser(this.basePath, userKey);
    };
    UserListComponent.prototype.teste = function (key) {
        this.key = key;
    };
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-list-cmp',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/user/list/list.component.html")
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t\t<!-- <div class=\"col-lg-4 col-md-5\">\n\t\t\t\t\t<div class=\"card card-user\">\n\t\t\t\t\t\t<div class=\"image\">\n\t\t\t\t\t\t\t<img src=\"assets/img/background.jpg\" alt=\"...\"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t\t<div class=\"author\">\n\t\t\t\t\t\t\t  <img class=\"avatar border-white\" src=\"assets/img/faces/face-2.jpg\" alt=\"...\"/>\n\t\t\t\t\t\t\t  <h4 class=\"title\">Chet Faker<br />\n\t\t\t\t\t\t\t\t <a href=\"#\"><small>@chetfaker</small></a>\n\t\t\t\t\t\t\t  </h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<p class=\"description text-center\">\n\t\t\t\t\t\t\t\t\"I like the way you work it <br>\n\t\t\t\t\t\t\t\tNo diggity <br>\n\t\t\t\t\t\t\t\tI wanna bag it up\"\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-3 col-md-offset-1\">\n\t\t\t\t\t\t\t\t\t<h5>12<br /><small>Files</small></h5>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t<h5>2GB<br /><small>Used</small></h5>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t<h5>24,6$<br /><small>Spent</small></h5>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"header\">\n\t\t\t\t\t\t\t<h4 class=\"title\">Team Members</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t\t<ul class=\"list-unstyled team-members\">\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"avatar\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/faces/face-0.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tDJ Khaled\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-muted\"><small>Offline</small></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-3 text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-sm btn-success btn-icon\"><i class=\"fa fa-envelope\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"avatar\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/faces/face-1.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tCreative Tim\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-success\"><small>Available</small></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-3 text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-sm btn-success btn-icon\"><i class=\"fa fa-envelope\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"avatar\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/faces/face-3.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tFlume\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-danger\"><small>Busy</small></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-3 text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-sm btn-success btn-icon\"><i class=\"fa fa-envelope\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div> -->\n\t\t<div class=\"col-lg-12 col-md-7\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"header\">\n\t\t\t\t\t<h4 class=\"title\">{{ title }}</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"content\">\n\t\t\t\t\t<div [hidden]=\"submitted\">\n\t\t\t\t\t\t<form (ngSubmit)=\"onSubmit()\">\n\t\t\t\t\t\t\t<ul class=\"nav nav-pills mb-3\" id=\"pills-tab\" role=\"tablist\">\n\t\t\t\t\t\t\t\t<li class=\"nav-item active\">\n\t\t\t\t\t\t\t\t\t<a class=\"nav-link active\"\n\t\t\t\t\t\t\t\t\t\tid=\"pills-home-tab\"\n\t\t\t\t\t\t\t\t\t\tdata-toggle=\"pill\"\n\t\t\t\t\t\t\t\t\t\thref=\"#pills-home\" role=\"tab\"\n\t\t\t\t\t\t\t\t\t\taria-controls=\"pills-home\"\n\t\t\t\t\t\t\t\t\t\taria-selected=\"true\">Geral</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t<a class=\"nav-link\"\n\t\t\t\t\t\t\t\t\t\tid=\"pills-profile-tab\"\n\t\t\t\t\t\t\t\t\t\tdata-toggle=\"pill\"\n\t\t\t\t\t\t\t\t\t\thref=\"#pills-profile\"\n\t\t\t\t\t\t\t\t\t\trole=\"tab\"\n\t\t\t\t\t\t\t\t\t\taria-controls=\"pills-profile\"\n\t\t\t\t\t\t\t\t\t\taria-selected=\"false\">Informações Complementares</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div class=\"tab-content\" id=\"pills-tabContent\">\n\t\t\t\t\t\t\t\t<div class=\"tab-pane fade active in\"\n\t\t\t\t\t\t\t\t\tid=\"pills-home\" role=\"tabpanel\"\n\t\t\t\t\t\t\t\t\taria-labelledby=\"pills-home-tab\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"regis\">Matricula:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control border-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"regis\"\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisabled\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"registration\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Matrícula\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"registration\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-1\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"checkbox\" [style.margin-top]=\"'35px'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"active\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"users.active\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tchecked=\"checked\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"checkbox\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"active\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tAtivo\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"genero\">Gênero:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select  class=\"form-control border-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"genero\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"users.genero\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"genero\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" disabled>--Selecione--</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"homem\">Homem</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mulher\">Mulher</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"outro\">Outro</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"dataCadastro\">Data de Cadastro</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dataCadastro\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"date\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisabled\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"dateCad\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"dateCad\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control border-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Data de Cadastro\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"lastUpdate\">Última Atualização</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"date\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control border-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"lastUpdate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisabled\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"dateAct\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Matrícula\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Data de Cadastro\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"dateAct\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"fullName\">Nome Completo:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"fullName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"users.name\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"name\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control border-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Nome Completo\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"nickname\">Apelido</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"nickname\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"users.nickname\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"nickname\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control border-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Apelido\" />\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"birthday\">Data de Nascimento</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"date\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"birthday\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"users.birthday\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"birthday\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control border-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Data de Nascimento\" />\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"age\">Idade</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"age\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"users.age\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"age\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control border-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Idade\" />\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"rg\">RG:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"rg\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"users.rg\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"rg\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control border-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"RG\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"cpf\">CPF:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"cpf\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"users.cpf\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"cpf\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control border-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"CPF\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"cel\">Celular:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"cel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"users.cel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"cel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control border-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Celular\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"tel\">Tel. Residencial:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"tel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"users.tel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"tel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control border-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Tel. Residencial\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"address\">Endereço:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"address\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"users.address\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"address\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control border-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Endereço\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"complement\">Complemento:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"complement\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"users.complement\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"complement\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control border-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Complemento\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"neighborhood\">Bairro:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"neighborhood\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"users.neighborhood\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"neighborhood\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control border-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Bairro\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"city\">Cidade</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"city\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"users.city\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"city\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control border-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Cidade\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"São Paulo\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"uf\">UF:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"uf\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"users.uf\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"uf\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control border-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"UF\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"São Paulo\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"zipcode\">CEP:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"zipcode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"users.zipcode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"zipcode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control border-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"CEP\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"institution\">Instituição:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"institution\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"users.institution\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"institution\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control border-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Instituição\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"contactForScraps\">Contato para Recados:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"contactForScraps\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"users.contactForScraps\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"contactForScraps\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control border-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Contato para Recados:\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"scrapsContact\">Tel. Contato:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"scrapsContact\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"users.scrapsContact\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"scrapsContact\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control border-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Tel. Contato\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"tab-pane fade\"\n\t\t\t\t\t\t\t\t\tid=\"pills-profile\" role=\"tabpanel\"\n\t\t\t\t\t\t\t\t\taria-labelledby=\"pills-profile-tab\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"email\">E-Mail:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control border-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"email\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"users.email\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"E-Mail\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"email\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"retirement\">Possui Aposentadoria:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<select  class=\"form-control border-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"retirement\"\n\t\t\t\t\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"users.retirement\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"retirement\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" disabled>--Selecione--</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"sim\">Sim</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"nao\">Não</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"dwelling\">Condições de Moradia:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<select  class=\"form-control border-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dwelling\"\n\t\t\t\t\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"users.dwelling\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"dwelling\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" disabled>--Selecione--</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"propria\">Própria</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"aluguel\">Aluguel</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"shooling\">Escolaridade:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<select  class=\"form-control border-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"shooling\"\n\t\t\t\t\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"users.shooling\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"shooling\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" disabled>--Selecione--</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"ensinoFundamental\">Ensino Fundamental</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"ensinoMedio\">Ensino Médio</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"superior\">Superior</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mestrado\">Mestrado</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"doutorado\">Doutorado</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"professionalActivity\">Atividade profissional já realizada:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control border-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"professionalActivity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"users.professionalActivity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Atividade profissional já realizada\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"professionalActivity\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"resourceInflows\">Formas de entradas de recursos:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control border-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"resourceInflows\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"users.resourceInflows\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Formas de entradas de recursos\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"resourceInflows\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"reasonsToParticipate\">Motivos para participar</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control border-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"reasonsToParticipate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"users.reasonsToParticipate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Motivos para participar\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"reasonsToParticipate\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"kernel\">Como soube do núcleo:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control border-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"kernel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"users.kernel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Como soube do núcleo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"kernel\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t\t\t\t\t\t<h5>Dados da vestimenta</h5>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"shirt\">camisa:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select  class=\"form-control border-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"shirt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"users.shirt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"shirt\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" disabled>--Selecione--</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"p\">P</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"m\">M</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"g\">G</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"gg\">gg</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"extraG\">Extra G</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"pants\">calça:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select  class=\"form-control border-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"pants\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"users.pants\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"pants\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let value of numberPants\" [value]=\"value\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ value }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"shoes\">sapato:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select  class=\"form-control border-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"shoes\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"users.shoes\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"shoes\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let value of numberShoes\" [value]=\"value\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ value }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"shoes\">vestido:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select  class=\"form-control border-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dress\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"users.dress\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"dress\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" disabled>--Selecione--</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"p\">P</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"m\">M</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"g\">G</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"gg\">gg</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"extraG\">Extra G</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t\t<div *ngIf=\"!isEdit\" class=\"text-center\">\n\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\ttype=\"submit\"\n\t\t\t\t\t\t\t\t\tclass=\"btn btn-info btn-fill btn-wd\">Salvar</button>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div *ngIf=\"isEdit\" class=\"text-center\">\n\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t(click)=\"updateUser(user)\"\n\t\t\t\t\t\t\t\t\tclass=\"btn btn-info btn-fill btn-wd\">Salvar Edição</button>\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t<div [hidden]=\"!submitted\">\n\t\t\t\t\t\t<h4>{{ subtitle }}</h4>\n\t\t\t\t\t\t<button class=\"btn btn-success\" (click)=\"newUser()\">Adicionar Novo</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_users_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/users.model */ "./src/app/services/users.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserComponent = /** @class */ (function () {
    function UserComponent(router, route, userService, store) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.store = store;
        this.baseUserPath = '/users';
        this.users = new _services_users_model__WEBPACK_IMPORTED_MODULE_3__["Users"]();
        this.submitted = false;
        this.isEdit = false;
        this.title = 'Cadastrar Usuário';
        this.subtitle = 'Usuário criado com sucesso!';
        this.numberPants = this.range(36, 25);
        this.numberShoes = this.range(33, 16);
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var dataAtual = new Date();
        var ano = dataAtual.getFullYear();
        var mes = dataAtual.getMonth();
        var dia = dataAtual.getDate();
        var generateNumber = this.getRandomInt(1, 9999);
        this.random = this.getRandomInt(1, 9999);
        this.users.active = true;
        this.genres = [{ name: 'Homem' }, { name: 'Mulher' }, { name: 'Outro' }];
        this.dateAct = ano + '-' + mes + '-' + dia;
        this.dateCad = ano + '-' + mes + '-' + dia;
        this.registration = ano + '' + mes + '' + dia + '' + generateNumber;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params.id;
        });
        this.userService.getListData(this.baseUserPath).snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (users) {
            users.map(function (item) {
                if (_this.id && item.registration === _this.id.toString()) {
                    _this.users = item;
                    _this.isEdit = !_this.isEdit;
                    _this.title = 'Editar Usuário';
                    _this.subtitle = 'Usuário atualizado com sucesso!';
                }
            });
        });
    };
    UserComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.isEdit) {
            this.updateUser();
        }
        else {
            this.saveUser();
        }
    };
    UserComponent.prototype.updateUser = function () {
        this.userService.updateUser(this.baseUserPath, this.users.key, this.users);
    };
    UserComponent.prototype.saveUser = function () {
        this.users.registration = this.registration;
        this.users.dateAct = this.dateAct;
        this.users.dateCad = this.dateCad;
        this.userService.createUser(this.baseUserPath, this.users);
        this.users = new _services_users_model__WEBPACK_IMPORTED_MODULE_3__["Users"]();
    };
    UserComponent.prototype.newUser = function () {
        this.submitted = false;
        this.users.active = true;
        this.router.navigate(['/user']);
    };
    UserComponent.prototype.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    UserComponent.prototype.range = function (start, end) {
        return Array.from({ length: end }, function (x, i) { return i + start; });
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-cmp',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], UserComponent);
    return UserComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyDKh9_62F0P4ZInigQtZ2SLNFryECawRG4',
        authDomain: 'crud-poc-c42af.firebaseapp.com',
        databaseURL: 'https://crud-poc-c42af.firebaseio.com',
        projectId: 'crud-poc-c42af',
        storageBucket: 'crud-poc-c42af.appspot.com',
        messagingSenderId: '296399531050'
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/luizalves/Public/freela/old-friend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map