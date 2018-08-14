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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app {\r\n  font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', 'Roboto Rouble', sans-serif;\r\n}\r\n\r\n.ui-checkbox{\r\n  cursor: pointer;\r\n}\r\n\r\n.filters__group {\r\n  margin-right: 20px;\r\n  border: 1px solid #eee;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.filters__group-header {\r\n  font-weight: bold;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.table{\r\n  width: 100%;\r\n  padding: 0 10px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.table__header, .table__row {\r\n  display: flex;\r\n}\r\n\r\n.table__header{\r\n  padding: 5px 0;\r\n}\r\n\r\n.table__header .table__cell{\r\n  cursor: pointer;\r\n  font-weight: bold;\r\n}\r\n\r\n.table__cell{\r\n  padding: 10px 5px;\r\n  width: 20%;\r\n}\r\n\r\n.table__row:nth-of-type(2n) {\r\n  background-color: #eee;\r\n}\r\n\r\n.table__row:nth-of-type(2n + 1) {\r\n  background-color: #fff;\r\n}\r\n\r\n.filters {\r\n  display: flex;\r\n  max-width: 1200px;\r\n  padding: 10px;\r\n  margin-bottom: 5px;\r\n  margin-top: 30px;\r\n}\r\n\r\n.filters__group-body {\r\n  display: flex;\r\n}\r\n\r\n@media (max-width: 899px) {\r\n  .table__cell:last-child{\r\n    display: none;\r\n  }\r\n  .table__cell{\r\n    width: 25%;\r\n  }\r\n  .filters__group-body{\r\n    flex-direction: column;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\n  <div class=\"filters\">\n    <div class=\"filters__group\" *ngFor=\"let filters of getFilters\">\n      <div class=\"filters__group-header\">{{ filters.title }}</div>\n      <div class=\"filters__group-body\">\n        <div class=\"ui-checkbox__wrapper\" *ngFor=\"let filter of filters.list\">\n          <div class=\"ui-checkbox\" *ngIf=\"filter.length\">\n            <input type=\"checkbox\" [id]=\"filter.title\" [checked]=\"isChecked(filters.group, filter.title)\" (change)=\"changeFilter(filters.group, filter.title)\">\n            <label [for]=\"filter.title\">{{ filter.title }} ({{ filter.length }})</label>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"table\">\n      <div class=\"table__header\">\n        <div class=\"table__cell\" (click)=\"onSortTable('name')\">Имя</div>\n        <div class=\"table__cell\" (click)=\"onSortTable('age')\">Возраст</div>\n        <div class=\"table__cell\" (click)=\"onSortTable('gender')\">Пол</div>\n        <div class=\"table__cell\" (click)=\"onSortTable('department')\">Департамент</div>\n        <div class=\"table__cell\" (click)=\"onSortTable('address.city')\">Адрес</div>\n      </div>\n      <div class=\"table__row\" *ngFor=\"let user of usersView\">\n        <div class=\"table__cell\">{{user?.name}}</div>\n        <div class=\"table__cell\">{{user?.age}}</div>\n        <div class=\"table__cell\">{{user?.gender}}</div>\n        <div class=\"table__cell\">{{user?.department}}</div>\n        <div class=\"table__cell\">{{user?.address.city}}, {{user?.address.street}}</div>\n      </div>\n    </div>\n</div>"

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
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this._sortField = null;
        this._sortReverse = false;
        this._users = [];
        this._filterList = { gender: [], department: [], city: [] };
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Подписываемся на изменения входящих данных
        this.http.getData().subscribe(function (data) { return _this._users = data.slice(); }, function (error) { return console.error(error); });
    };
    // Изменение в фильтрах
    AppComponent.prototype.changeFilter = function (type, title) {
        var idx = this._filterList[type].findIndex(function (filter) { return filter === title; });
        if (idx < 0) {
            this._filterList[type].push(title);
        }
        else {
            this._filterList[type].splice(idx, 1);
        }
    };
    // Выбран ли фильтр
    AppComponent.prototype.isChecked = function (group, title) {
        return this._filterList[group].some(function (item) { return item === title; });
    };
    AppComponent.prototype.getInObjectByPath = function (obj, path) {
        try {
            var listParams = path.split('.');
            return listParams.reduce(function (state, way) {
                return state = state[way];
            }, obj);
        }
        catch (e) {
            return undefined;
        }
    };
    Object.defineProperty(AppComponent.prototype, "usersView", {
        // Получить список отфильтрованных и отсортированных данных
        get: function () {
            var _this = this;
            var result = this._users.slice();
            var _loop_1 = function (field) {
                if (this_1._filterList[field].length) {
                    result = result.filter(function (user) {
                        return _this._filterList[field].some(function (param) {
                            return field.toString() in user ? param === user[field] : param === user.address[field];
                        });
                    });
                }
            };
            var this_1 = this;
            for (var field in this._filterList) {
                _loop_1(field);
            }
            if (!this._sortField) {
                return result; // Нет сортировки
            }
            return result.sort(function (prevUser, curUser) {
                if (_this.getInObjectByPath(prevUser, _this._sortField) < _this.getInObjectByPath(curUser, _this._sortField)) {
                    return _this._sortReverse ? -1 : 1;
                }
                else {
                    return _this._sortReverse ? 1 : -1;
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    // Вспомогательная функция поиска уникальных значений в массиве и их суммирование
    AppComponent.prototype._uniqueSum = function (arr) {
        var result = [];
        arr.forEach(function (item) {
            var index = result.findIndex(function (enter) { return enter.title === item; });
            if (index < 0) {
                // Не найдено совпадений
                result.push({
                    title: item,
                    length: 1
                });
            }
            else {
                result[index].length++;
            }
        });
        // Без сортировки постоянно меняется положение фильтров
        return result.sort(function (prev, cur) {
            return prev.title < cur.title ? 1 : -1;
        });
    };
    Object.defineProperty(AppComponent.prototype, "getFilters", {
        // Список фильтров с количеством вхождений
        get: function () {
            return [{
                    title: 'Gender',
                    group: 'gender',
                    list: this._uniqueSum(this.usersView.map(function (user) { return user.gender; }))
                },
                {
                    title: 'City',
                    group: 'city',
                    list: this._uniqueSum(this.usersView.map(function (user) { return user.address.city; })),
                },
                {
                    title: 'Department',
                    group: 'department',
                    list: this._uniqueSum(this.usersView.map(function (user) { return user.department; }))
                }];
        },
        enumerable: true,
        configurable: true
    });
    // Обработка события сортировки
    AppComponent.prototype.onSortTable = function (path) {
        this._sortField = path;
        this._sortReverse = this._sortField === path && !this._sortReverse;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.getData = function () {
        return this.http.get('https://gist.githubusercontent.com/bunopus/f48fbb06578003fb521c7c1a54fd906a/raw/e5767c1e7f172c6375f064a9441f2edd57a79f15/test_users.json');
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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

module.exports = __webpack_require__(/*! C:\Users\Roman\Desktop\Development\table-filters\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map