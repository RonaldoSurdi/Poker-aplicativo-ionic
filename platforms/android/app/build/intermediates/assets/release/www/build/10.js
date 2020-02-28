webpackJsonp([10],{

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PokerclubsPageModule", function() { return Tab1PokerclubsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_diagnostic__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_launch_navigator__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_open_native_settings__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tab1_pokerclubs__ = __webpack_require__(824);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var Tab1PokerclubsPageModule = /** @class */ (function () {
    function Tab1PokerclubsPageModule() {
    }
    Tab1PokerclubsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__tab1_pokerclubs__["a" /* Tab1PokerclubsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__tab1_pokerclubs__["a" /* Tab1PokerclubsPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_open_native_settings__["a" /* OpenNativeSettings */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
            ]
        })
    ], Tab1PokerclubsPageModule);
    return Tab1PokerclubsPageModule;
}());

//# sourceMappingURL=tab1-pokerclubs.module.js.map

/***/ }),

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaunchNavigator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(28);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Launch Navigator
 * @description
 * Requires Cordova plugin: uk.co.workingedge.phonegap.plugin.launchnavigator. For more info, please see the [LaunchNavigator plugin docs](https://github.com/dpa99c/phonegap-launch-navigator).
 *
 * @usage
 * Please refer to the plugin's repo for detailed usage. This docs page only explains the Native wrapper.
 *
 * ```typescript
 * import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
 *
 * constructor(private launchNavigator: LaunchNavigator) { }
 *
 * ...
 *
 * let options: LaunchNavigatorOptions = {
 *   start: 'London, ON',
 *   app: LaunchNavigator.APPS.UBER
 * };
 *
 * this.launchNavigator.navigate('Toronto, ON', options)
 *   .then(
 *     success => console.log('Launched navigator'),
 *     error => console.log('Error launching navigator', error)
 *   );
 * ```
 * @interfaces
 * LaunchNavigatorOptions
 * PromptsOptions
 * RememberChoiceOptions
 * AppSelectionOptions
 * UserChoice
 * UserPrompted
 * AppSelection
 */
var LaunchNavigator = (function (_super) {
    __extends(LaunchNavigator, _super);
    function LaunchNavigator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.APP = {
            USER_SELECT: 'user_select',
            APPLE_MAPS: 'apple_maps',
            GOOGLE_MAPS: 'google_maps',
            WAZE: 'waze',
            CITYMAPPER: 'citymapper',
            NAVIGON: 'navigon',
            TRANSIT_APP: 'transit_app',
            YANDEX: 'yandex',
            UBER: 'uber',
            TOMTOM: 'tomtom',
            BING_MAPS: 'bing_maps',
            SYGIC: 'sygic',
            HERE_MAPS: 'here_maps',
            MOOVIT: 'moovit'
        };
        _this.TRANSPORT_MODE = {
            DRIVING: 'driving',
            WALKING: 'walking',
            BICYCLING: 'bicycling',
            TRANSIT: 'transit'
        };
        return _this;
    }
    /**
     * Launches navigator app
     * @param destination {string|number[]} Location name or coordinates (as string or array)
     * @param options {LaunchNavigatorOptions}
     * @returns {Promise<any>}
     */
    /**
       * Launches navigator app
       * @param destination {string|number[]} Location name or coordinates (as string or array)
       * @param options {LaunchNavigatorOptions}
       * @returns {Promise<any>}
       */
    LaunchNavigator.prototype.navigate = /**
       * Launches navigator app
       * @param destination {string|number[]} Location name or coordinates (as string or array)
       * @param options {LaunchNavigatorOptions}
       * @returns {Promise<any>}
       */
    function (destination, options) { return; };
    /**
     * Determines if the given app is installed and available on the current device.
     * @param app {string}
     * @returns {Promise<any>}
     */
    /**
       * Determines if the given app is installed and available on the current device.
       * @param app {string}
       * @returns {Promise<any>}
       */
    LaunchNavigator.prototype.isAppAvailable = /**
       * Determines if the given app is installed and available on the current device.
       * @param app {string}
       * @returns {Promise<any>}
       */
    function (app) { return; };
    /**
     * Returns a list indicating which apps are installed and available on the current device.
     * @returns {Promise<string[]>}
     */
    /**
       * Returns a list indicating which apps are installed and available on the current device.
       * @returns {Promise<string[]>}
       */
    LaunchNavigator.prototype.availableApps = /**
       * Returns a list indicating which apps are installed and available on the current device.
       * @returns {Promise<string[]>}
       */
    function () { return; };
    /**
     * Returns the display name of the specified app.
     * @param app {string}
     * @returns {string}
     */
    /**
       * Returns the display name of the specified app.
       * @param app {string}
       * @returns {string}
       */
    LaunchNavigator.prototype.getAppDisplayName = /**
       * Returns the display name of the specified app.
       * @param app {string}
       * @returns {string}
       */
    function (app) { return; };
    /**
     * Returns list of supported apps on a given platform.
     * @param platform {string}
     * @returns {string[]}
     */
    /**
       * Returns list of supported apps on a given platform.
       * @param platform {string}
       * @returns {string[]}
       */
    LaunchNavigator.prototype.getAppsForPlatform = /**
       * Returns list of supported apps on a given platform.
       * @param platform {string}
       * @returns {string[]}
       */
    function (platform) { return; };
    /**
     * Indicates if an app on a given platform supports specification of transport mode.
     * @param app {string} specified as a string, you can use one of the constants, e.g `LaunchNavigator.APP.GOOGLE_MAPS`
     * @param platform {string}
     * @returns {boolean}
     */
    /**
       * Indicates if an app on a given platform supports specification of transport mode.
       * @param app {string} specified as a string, you can use one of the constants, e.g `LaunchNavigator.APP.GOOGLE_MAPS`
       * @param platform {string}
       * @returns {boolean}
       */
    LaunchNavigator.prototype.supportsTransportMode = /**
       * Indicates if an app on a given platform supports specification of transport mode.
       * @param app {string} specified as a string, you can use one of the constants, e.g `LaunchNavigator.APP.GOOGLE_MAPS`
       * @param platform {string}
       * @returns {boolean}
       */
    function (app, platform) { return; };
    /**
     * Returns the list of transport modes supported by an app on a given platform.
     * @param app {string}
     * @param platform {string}
     * @returns {string[]}
     */
    /**
       * Returns the list of transport modes supported by an app on a given platform.
       * @param app {string}
       * @param platform {string}
       * @returns {string[]}
       */
    LaunchNavigator.prototype.getTransportModes = /**
       * Returns the list of transport modes supported by an app on a given platform.
       * @param app {string}
       * @param platform {string}
       * @returns {string[]}
       */
    function (app, platform) { return; };
    /**
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    /**
       * @param app {string}
       * @param platform {string}
       * @returns {boolean}
       */
    LaunchNavigator.prototype.supportsDestName = /**
       * @param app {string}
       * @param platform {string}
       * @returns {boolean}
       */
    function (app, platform) { return; };
    /**
     * Indicates if an app on a given platform supports specification of start location.
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    /**
       * Indicates if an app on a given platform supports specification of start location.
       * @param app {string}
       * @param platform {string}
       * @returns {boolean}
       */
    LaunchNavigator.prototype.supportsStart = /**
       * Indicates if an app on a given platform supports specification of start location.
       * @param app {string}
       * @param platform {string}
       * @returns {boolean}
       */
    function (app, platform) { return; };
    /**
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    /**
       * @param app {string}
       * @param platform {string}
       * @returns {boolean}
       */
    LaunchNavigator.prototype.supportsStartName = /**
       * @param app {string}
       * @param platform {string}
       * @returns {boolean}
       */
    function (app, platform) { return; };
    /**
     * Indicates if an app on a given platform supports specification of launch mode.
     * Note that currently only Google Maps on Android does.
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    /**
       * Indicates if an app on a given platform supports specification of launch mode.
       * Note that currently only Google Maps on Android does.
       * @param app {string}
       * @param platform {string}
       * @returns {boolean}
       */
    LaunchNavigator.prototype.supportsLaunchMode = /**
       * Indicates if an app on a given platform supports specification of launch mode.
       * Note that currently only Google Maps on Android does.
       * @param app {string}
       * @param platform {string}
       * @returns {boolean}
       */
    function (app, platform) { return; };
    /**
     * @param destination {string | number[]}
     * @param options {LaunchNavigatorOptions}
     */
    /**
       * @param destination {string | number[]}
       * @param options {LaunchNavigatorOptions}
       */
    LaunchNavigator.prototype.userSelect = /**
       * @param destination {string | number[]}
       * @param options {LaunchNavigatorOptions}
       */
    function (destination, options) { };
    LaunchNavigator.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 2,
            errorIndex: 3
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], LaunchNavigator.prototype, "navigate", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], LaunchNavigator.prototype, "isAppAvailable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], LaunchNavigator.prototype, "availableApps", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", String)
    ], LaunchNavigator.prototype, "getAppDisplayName", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Array)
    ], LaunchNavigator.prototype, "getAppsForPlatform", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Boolean)
    ], LaunchNavigator.prototype, "supportsTransportMode", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Array)
    ], LaunchNavigator.prototype, "getTransportModes", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Boolean)
    ], LaunchNavigator.prototype, "supportsDestName", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Boolean)
    ], LaunchNavigator.prototype, "supportsStart", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Boolean)
    ], LaunchNavigator.prototype, "supportsStartName", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Boolean)
    ], LaunchNavigator.prototype, "supportsLaunchMode", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LaunchNavigator.prototype, "userSelect", null);
    /**
     * @name Launch Navigator
     * @description
     * Requires Cordova plugin: uk.co.workingedge.phonegap.plugin.launchnavigator. For more info, please see the [LaunchNavigator plugin docs](https://github.com/dpa99c/phonegap-launch-navigator).
     *
     * @usage
     * Please refer to the plugin's repo for detailed usage. This docs page only explains the Native wrapper.
     *
     * ```typescript
     * import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
     *
     * constructor(private launchNavigator: LaunchNavigator) { }
     *
     * ...
     *
     * let options: LaunchNavigatorOptions = {
     *   start: 'London, ON',
     *   app: LaunchNavigator.APPS.UBER
     * };
     *
     * this.launchNavigator.navigate('Toronto, ON', options)
     *   .then(
     *     success => console.log('Launched navigator'),
     *     error => console.log('Error launching navigator', error)
     *   );
     * ```
     * @interfaces
     * LaunchNavigatorOptions
     * PromptsOptions
     * RememberChoiceOptions
     * AppSelectionOptions
     * UserChoice
     * UserPrompted
     * AppSelection
     */
    LaunchNavigator = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            pluginName: 'LaunchNavigator',
            plugin: 'uk.co.workingedge.phonegap.plugin.launchnavigator',
            pluginRef: 'launchnavigator',
            repo: 'https://github.com/dpa99c/phonegap-launch-navigator',
            platforms: ['Android', 'iOS', 'Windows', 'Windows Phone 8']
        })
    ], LaunchNavigator);
    return LaunchNavigator;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Diagnostic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(28);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Diagnostic
 * @description
 * Checks whether device hardware features are enabled or available to the app, e.g. camera, GPS, wifi
 *
 * @usage
 * ```typescript
 * import { Diagnostic } from '@ionic-native/diagnostic';
 *
 * constructor(private diagnostic: Diagnostic) { }
 *
 * ...
 *
 * let successCallback = (isAvailable) => { console.log('Is available? ' + isAvailable); };
 * let errorCallback = (e) => console.error(e);
 *
 * this.diagnostic.isCameraAvailable().then(successCallback).catch(errorCallback);
 *
 * this.diagnostic.isBluetoothAvailable().then(successCallback, errorCallback);
 *
 *
 * this.diagnostic.getBluetoothState()
 *   .then((state) => {
 *     if (state == this.diagnostic.bluetoothState.POWERED_ON){
 *       // do something
 *     } else {
 *       // do something else
 *     }
 *   }).catch(e => console.error(e));
 *
 * ```
 *
 */
var Diagnostic = (function (_super) {
    __extends(Diagnostic, _super);
    function Diagnostic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.permission = {
            READ_CALENDAR: 'READ_CALENDAR',
            WRITE_CALENDAR: 'WRITE_CALENDAR',
            CAMERA: 'CAMERA',
            READ_CONTACTS: 'READ_CONTACTS',
            WRITE_CONTACTS: 'WRITE_CONTACTS',
            GET_ACCOUNTS: 'GET_ACCOUNTS',
            ACCESS_FINE_LOCATION: 'ACCESS_FINE_LOCATION',
            ACCESS_COARSE_LOCATION: 'ACCESS_COARSE_LOCATION',
            RECORD_AUDIO: 'RECORD_AUDIO',
            READ_PHONE_STATE: 'READ_PHONE_STATE',
            CALL_PHONE: 'CALL_PHONE',
            ADD_VOICEMAIL: 'ADD_VOICEMAIL',
            USE_SIP: 'USE_SIP',
            PROCESS_OUTGOING_CALLS: 'PROCESS_OUTGOING_CALLS',
            READ_CALL_LOG: 'READ_CALL_LOG',
            WRITE_CALL_LOG: 'WRITE_CALL_LOG',
            SEND_SMS: 'SEND_SMS',
            RECEIVE_SMS: 'RECEIVE_SMS',
            READ_SMS: 'READ_SMS',
            RECEIVE_WAP_PUSH: 'RECEIVE_WAP_PUSH',
            RECEIVE_MMS: 'RECEIVE_MMS',
            WRITE_EXTERNAL_STORAGE: 'WRITE_EXTERNAL_STORAGE',
            READ_EXTERNAL_STORAGE: 'READ_EXTERNAL_STORAGE',
            BODY_SENSORS: 'BODY_SENSORS'
        };
        _this.locationAuthorizationMode = {
            ALWAYS: 'always',
            WHEN_IN_USE: 'when_in_use'
        };
        _this.permissionGroups = {
            CALENDAR: ['READ_CALENDAR', 'WRITE_CALENDAR'],
            CAMERA: ['CAMERA'],
            CONTACTS: ['READ_CONTACTS', 'WRITE_CONTACTS', 'GET_ACCOUNTS'],
            LOCATION: ['ACCESS_FINE_LOCATION', 'ACCESS_COARSE_LOCATION'],
            MICROPHONE: ['RECORD_AUDIO'],
            PHONE: [
                'READ_PHONE_STATE',
                'CALL_PHONE',
                'ADD_VOICEMAIL',
                'USE_SIP',
                'PROCESS_OUTGOING_CALLS',
                'READ_CALL_LOG',
                'WRITE_CALL_LOG'
            ],
            SENSORS: ['BODY_SENSORS'],
            SMS: [
                'SEND_SMS',
                'RECEIVE_SMS',
                'READ_SMS',
                'RECEIVE_WAP_PUSH',
                'RECEIVE_MMS'
            ],
            STORAGE: ['READ_EXTERNAL_STORAGE', 'WRITE_EXTERNAL_STORAGE']
        };
        _this.locationMode = {
            HIGH_ACCURACY: 'high_accuracy',
            DEVICE_ONLY: 'device_only',
            BATTERY_SAVING: 'battery_saving',
            LOCATION_OFF: 'location_off'
        };
        _this.bluetoothState = {
            UNKNOWN: 'unknown',
            RESETTING: 'resetting',
            // iOS
            UNSUPPORTED: 'unsupported',
            // iOS
            UNAUTHORIZED: 'unauthorized',
            // iOS
            POWERED_OFF: 'powered_off',
            POWERED_ON: 'powered_on',
            POWERING_OFF: 'powering_off',
            POWERING_ON: 'powering_on'
        };
        return _this;
    }
    /**
     * Checks if app is able to access device location.
     * @returns {Promise<any>}
     */
    /**
       * Checks if app is able to access device location.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.isLocationAvailable = /**
       * Checks if app is able to access device location.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Checks if Wifi is connected/enabled. On iOS this returns true if the device is connected to a network by WiFi. On Android and Windows 10 Mobile this returns true if the WiFi setting is set to enabled.
     * On Android this requires permission. `<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />`
     * @returns {Promise<any>}
     */
    /**
       * Checks if Wifi is connected/enabled. On iOS this returns true if the device is connected to a network by WiFi. On Android and Windows 10 Mobile this returns true if the WiFi setting is set to enabled.
       * On Android this requires permission. `<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />`
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.isWifiAvailable = /**
       * Checks if Wifi is connected/enabled. On iOS this returns true if the device is connected to a network by WiFi. On Android and Windows 10 Mobile this returns true if the WiFi setting is set to enabled.
       * On Android this requires permission. `<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />`
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Checks if the device has a camera. On Android this returns true if the device has a camera. On iOS this returns true if both the device has a camera AND the application is authorized to use it. On Windows 10 Mobile this returns true if both the device has a rear-facing camera AND the
     * application is authorized to use it.
     * @param {boolean} [externalStorage] Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
     *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
     * @returns {Promise<any>}
     */
    /**
       * Checks if the device has a camera. On Android this returns true if the device has a camera. On iOS this returns true if both the device has a camera AND the application is authorized to use it. On Windows 10 Mobile this returns true if both the device has a rear-facing camera AND the
       * application is authorized to use it.
       * @param {boolean} [externalStorage] Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
       *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.isCameraAvailable = /**
       * Checks if the device has a camera. On Android this returns true if the device has a camera. On iOS this returns true if both the device has a camera AND the application is authorized to use it. On Windows 10 Mobile this returns true if both the device has a rear-facing camera AND the
       * application is authorized to use it.
       * @param {boolean} [externalStorage] Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
       *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
       * @returns {Promise<any>}
       */
    function (externalStorage) {
        return;
    };
    /**
     * Checks if the device has Bluetooth capabilities and if so that Bluetooth is switched on (same on Android, iOS and Windows 10 Mobile)
     * On Android this requires permission <uses-permission android:name="android.permission.BLUETOOTH" />
     * @returns {Promise<any>}
     */
    /**
       * Checks if the device has Bluetooth capabilities and if so that Bluetooth is switched on (same on Android, iOS and Windows 10 Mobile)
       * On Android this requires permission <uses-permission android:name="android.permission.BLUETOOTH" />
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.isBluetoothAvailable = /**
       * Checks if the device has Bluetooth capabilities and if so that Bluetooth is switched on (same on Android, iOS and Windows 10 Mobile)
       * On Android this requires permission <uses-permission android:name="android.permission.BLUETOOTH" />
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Displays the device location settings to allow user to enable location services/change location mode.
     */
    /**
       * Displays the device location settings to allow user to enable location services/change location mode.
       */
    Diagnostic.prototype.switchToLocationSettings = /**
       * Displays the device location settings to allow user to enable location services/change location mode.
       */
    function () { };
    /**
     * Displays mobile settings to allow user to enable mobile data.
     */
    /**
       * Displays mobile settings to allow user to enable mobile data.
       */
    Diagnostic.prototype.switchToMobileDataSettings = /**
       * Displays mobile settings to allow user to enable mobile data.
       */
    function () { };
    /**
     * Displays Bluetooth settings to allow user to enable Bluetooth.
     */
    /**
       * Displays Bluetooth settings to allow user to enable Bluetooth.
       */
    Diagnostic.prototype.switchToBluetoothSettings = /**
       * Displays Bluetooth settings to allow user to enable Bluetooth.
       */
    function () { };
    /**
     * Displays WiFi settings to allow user to enable WiFi.
     */
    /**
       * Displays WiFi settings to allow user to enable WiFi.
       */
    Diagnostic.prototype.switchToWifiSettings = /**
       * Displays WiFi settings to allow user to enable WiFi.
       */
    function () { };
    /**
     * Returns true if the WiFi setting is set to enabled, and is the same as `isWifiAvailable()`
     * @returns {Promise<boolean>}
     */
    /**
       * Returns true if the WiFi setting is set to enabled, and is the same as `isWifiAvailable()`
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isWifiEnabled = /**
       * Returns true if the WiFi setting is set to enabled, and is the same as `isWifiAvailable()`
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Enables/disables WiFi on the device.
     * Requires `ACCESS_WIFI_STATE` and `CHANGE_WIFI_STATE` permissions on Android
     * @param {boolean} state
     * @returns {Promise<any>}
     */
    /**
       * Enables/disables WiFi on the device.
       * Requires `ACCESS_WIFI_STATE` and `CHANGE_WIFI_STATE` permissions on Android
       * @param {boolean} state
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.setWifiState = /**
       * Enables/disables WiFi on the device.
       * Requires `ACCESS_WIFI_STATE` and `CHANGE_WIFI_STATE` permissions on Android
       * @param {boolean} state
       * @returns {Promise<any>}
       */
    function (state) {
        return;
    };
    /**
     * Enables/disables Bluetooth on the device.
     * Requires `BLUETOOTH` and `BLUETOOTH_ADMIN` permissions on Android
     * @param {boolean} state
     * @returns {Promise<any>}
     */
    /**
       * Enables/disables Bluetooth on the device.
       * Requires `BLUETOOTH` and `BLUETOOTH_ADMIN` permissions on Android
       * @param {boolean} state
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.setBluetoothState = /**
       * Enables/disables Bluetooth on the device.
       * Requires `BLUETOOTH` and `BLUETOOTH_ADMIN` permissions on Android
       * @param {boolean} state
       * @returns {Promise<any>}
       */
    function (state) {
        return;
    };
    // ANDROID AND IOS ONLY
    /**
     * Returns true if the device setting for location is on. On Android this returns true if Location Mode is switched on. On iOS this returns true if Location Services is switched on.
     * @returns {Promise<boolean>}
     */
    // ANDROID AND IOS ONLY
    /**
       * Returns true if the device setting for location is on. On Android this returns true if Location Mode is switched on. On iOS this returns true if Location Services is switched on.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isLocationEnabled = 
    // ANDROID AND IOS ONLY
    /**
       * Returns true if the device setting for location is on. On Android this returns true if Location Mode is switched on. On iOS this returns true if Location Services is switched on.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Checks if the application is authorized to use location.
     * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     * @returns {Promise<any>}
     */
    /**
       * Checks if the application is authorized to use location.
       * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.isLocationAuthorized = /**
       * Checks if the application is authorized to use location.
       * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Returns the location authorization status for the application.
     * @returns {Promise<any>}
     */
    /**
       * Returns the location authorization status for the application.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.getLocationAuthorizationStatus = /**
       * Returns the location authorization status for the application.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Returns the location authorization status for the application.
     * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     *
     * @param {string} [mode] iOS only: location authorization mode: "always" or "when_in_use". If not specified, defaults to "when_in_use".
     * @returns {Promise<any>}
     */
    /**
       * Returns the location authorization status for the application.
       * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
       *
       * @param {string} [mode] iOS only: location authorization mode: "always" or "when_in_use". If not specified, defaults to "when_in_use".
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.requestLocationAuthorization = /**
       * Returns the location authorization status for the application.
       * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
       *
       * @param {string} [mode] iOS only: location authorization mode: "always" or "when_in_use". If not specified, defaults to "when_in_use".
       * @returns {Promise<any>}
       */
    function (mode) {
        return;
    };
    /**
     * Checks if camera hardware is present on device.
     * @returns {Promise<any>}
     */
    /**
       * Checks if camera hardware is present on device.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.isCameraPresent = /**
       * Checks if camera hardware is present on device.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Checks if the application is authorized to use the camera.
     * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.
     * @param {boolean} [externalStorage] Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
     *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
     * @returns {Promise<any>}
     */
    /**
       * Checks if the application is authorized to use the camera.
       * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.
       * @param {boolean} [externalStorage] Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
       *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.isCameraAuthorized = /**
       * Checks if the application is authorized to use the camera.
       * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.
       * @param {boolean} [externalStorage] Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
       *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
       * @returns {Promise<any>}
       */
    function (externalStorage) {
        return;
    };
    /**
     * Returns the camera authorization status for the application.
     * @param {boolean} [externalStorage] Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
     *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
     * @returns {Promise<any>}
     */
    /**
       * Returns the camera authorization status for the application.
       * @param {boolean} [externalStorage] Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
       *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.getCameraAuthorizationStatus = /**
       * Returns the camera authorization status for the application.
       * @param {boolean} [externalStorage] Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
       *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
       * @returns {Promise<any>}
       */
    function (externalStorage) {
        return;
    };
    /**
     * Requests camera authorization for the application.
     * @param {boolean} [externalStorage] Android only: If true, requests permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
     *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
     * @returns {Promise<any>}
     */
    /**
       * Requests camera authorization for the application.
       * @param {boolean} [externalStorage] Android only: If true, requests permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
       *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.requestCameraAuthorization = /**
       * Requests camera authorization for the application.
       * @param {boolean} [externalStorage] Android only: If true, requests permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
       *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
       * @returns {Promise<any>}
       */
    function (externalStorage) {
        return;
    };
    /**
     * Checks if the application is authorized to use the microphone.
     * @returns {Promise<boolean>}
     */
    /**
       * Checks if the application is authorized to use the microphone.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isMicrophoneAuthorized = /**
       * Checks if the application is authorized to use the microphone.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Returns the microphone authorization status for the application.
     * @returns {Promise<any>}
     */
    /**
       * Returns the microphone authorization status for the application.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.getMicrophoneAuthorizationStatus = /**
       * Returns the microphone authorization status for the application.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Requests microphone authorization for the application.
     * @returns {Promise<any>}
     */
    /**
       * Requests microphone authorization for the application.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.requestMicrophoneAuthorization = /**
       * Requests microphone authorization for the application.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Checks if the application is authorized to use contacts (address book).
     * @returns {Promise<boolean>}
     */
    /**
       * Checks if the application is authorized to use contacts (address book).
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isContactsAuthorized = /**
       * Checks if the application is authorized to use contacts (address book).
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Returns the contacts authorization status for the application.
     * @returns {Promise<any>}
     */
    /**
       * Returns the contacts authorization status for the application.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.getContactsAuthorizationStatus = /**
       * Returns the contacts authorization status for the application.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Requests contacts authorization for the application.
     * @returns {Promise<any>}
     */
    /**
       * Requests contacts authorization for the application.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.requestContactsAuthorization = /**
       * Requests contacts authorization for the application.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Checks if the application is authorized to use the calendar.
     *
     * Notes for Android:
     *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.
     *
     * Notes for iOS:
     *   - This relates to Calendar Events (not Calendar Reminders)
     * @returns {Promise<boolean>}
     */
    /**
       * Checks if the application is authorized to use the calendar.
       *
       * Notes for Android:
       *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.
       *
       * Notes for iOS:
       *   - This relates to Calendar Events (not Calendar Reminders)
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isCalendarAuthorized = /**
       * Checks if the application is authorized to use the calendar.
       *
       * Notes for Android:
       *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.
       *
       * Notes for iOS:
       *   - This relates to Calendar Events (not Calendar Reminders)
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Returns the calendar authorization status for the application.
     *
     * Notes for Android:
     *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return `GRANTED` status as permissions are already granted at installation time.
     *
     * Notes for iOS:
     *   - This relates to Calendar Events (not Calendar Reminders)
     *
     * @returns {Promise<any>}
     */
    /**
       * Returns the calendar authorization status for the application.
       *
       * Notes for Android:
       *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return `GRANTED` status as permissions are already granted at installation time.
       *
       * Notes for iOS:
       *   - This relates to Calendar Events (not Calendar Reminders)
       *
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.getCalendarAuthorizationStatus = /**
       * Returns the calendar authorization status for the application.
       *
       * Notes for Android:
       *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return `GRANTED` status as permissions are already granted at installation time.
       *
       * Notes for iOS:
       *   - This relates to Calendar Events (not Calendar Reminders)
       *
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Requests calendar authorization for the application.
     *
     * Notes for iOS:
     *   - Should only be called if authorization status is NOT_DETERMINED. Calling it when in any other state will have no effect and just return the current authorization status.
     *   - This relates to Calendar Events (not Calendar Reminders)
     *
     * Notes for Android:
     *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will have no effect as the permissions are already granted at installation time.
     *   - This requests permission for `READ_CALENDAR` run-time permission
     *   - Required permissions must be added to `AndroidManifest.xml` as appropriate - see Android permissions: `READ_CALENDAR`, `WRITE_CALENDAR`
     *
     * @returns {Promise<any>}
     */
    /**
       * Requests calendar authorization for the application.
       *
       * Notes for iOS:
       *   - Should only be called if authorization status is NOT_DETERMINED. Calling it when in any other state will have no effect and just return the current authorization status.
       *   - This relates to Calendar Events (not Calendar Reminders)
       *
       * Notes for Android:
       *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will have no effect as the permissions are already granted at installation time.
       *   - This requests permission for `READ_CALENDAR` run-time permission
       *   - Required permissions must be added to `AndroidManifest.xml` as appropriate - see Android permissions: `READ_CALENDAR`, `WRITE_CALENDAR`
       *
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.requestCalendarAuthorization = /**
       * Requests calendar authorization for the application.
       *
       * Notes for iOS:
       *   - Should only be called if authorization status is NOT_DETERMINED. Calling it when in any other state will have no effect and just return the current authorization status.
       *   - This relates to Calendar Events (not Calendar Reminders)
       *
       * Notes for Android:
       *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will have no effect as the permissions are already granted at installation time.
       *   - This requests permission for `READ_CALENDAR` run-time permission
       *   - Required permissions must be added to `AndroidManifest.xml` as appropriate - see Android permissions: `READ_CALENDAR`, `WRITE_CALENDAR`
       *
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Opens settings page for this app.
     * On Android, this opens the "App Info" page in the Settings app.
     * On iOS, this opens the app settings page in the Settings app. This works only on iOS 8+ - iOS 7 and below will invoke the errorCallback.
     * @returns {Promise<any>}
     */
    /**
       * Opens settings page for this app.
       * On Android, this opens the "App Info" page in the Settings app.
       * On iOS, this opens the app settings page in the Settings app. This works only on iOS 8+ - iOS 7 and below will invoke the errorCallback.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.switchToSettings = /**
       * Opens settings page for this app.
       * On Android, this opens the "App Info" page in the Settings app.
       * On iOS, this opens the app settings page in the Settings app. This works only on iOS 8+ - iOS 7 and below will invoke the errorCallback.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Returns the state of Bluetooth on the device.
     * @returns {Promise<any>}
     */
    /**
       * Returns the state of Bluetooth on the device.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.getBluetoothState = /**
       * Returns the state of Bluetooth on the device.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Registers a function to be called when a change in Bluetooth state occurs.
     * @param {Function} handler
     */
    /**
       * Registers a function to be called when a change in Bluetooth state occurs.
       * @param {Function} handler
       */
    Diagnostic.prototype.registerBluetoothStateChangeHandler = /**
       * Registers a function to be called when a change in Bluetooth state occurs.
       * @param {Function} handler
       */
    function (handler) { };
    /**
     * Registers a function to be called when a change in Location state occurs.
     * @param {Function} handler
     */
    /**
       * Registers a function to be called when a change in Location state occurs.
       * @param {Function} handler
       */
    Diagnostic.prototype.registerLocationStateChangeHandler = /**
       * Registers a function to be called when a change in Location state occurs.
       * @param {Function} handler
       */
    function (handler) { };
    // ANDROID ONLY
    /**
     * Checks if high-accuracy locations are available to the app from GPS hardware.
     * Returns true if Location mode is enabled and is set to "Device only" or "High accuracy" AND if the app is authorized to use location.
     * @returns {Promise<boolean>}
     */
    // ANDROID ONLY
    /**
       * Checks if high-accuracy locations are available to the app from GPS hardware.
       * Returns true if Location mode is enabled and is set to "Device only" or "High accuracy" AND if the app is authorized to use location.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isGpsLocationAvailable = 
    // ANDROID ONLY
    /**
       * Checks if high-accuracy locations are available to the app from GPS hardware.
       * Returns true if Location mode is enabled and is set to "Device only" or "High accuracy" AND if the app is authorized to use location.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Checks if location mode is set to return high-accuracy locations from GPS hardware.
     *   Returns true if Location mode is enabled and is set to either:
     *   - Device only = GPS hardware only (high accuracy)
     *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
     * @returns {Promise<any>}
     */
    /**
       * Checks if location mode is set to return high-accuracy locations from GPS hardware.
       *   Returns true if Location mode is enabled and is set to either:
       *   - Device only = GPS hardware only (high accuracy)
       *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.isGpsLocationEnabled = /**
       * Checks if location mode is set to return high-accuracy locations from GPS hardware.
       *   Returns true if Location mode is enabled and is set to either:
       *   - Device only = GPS hardware only (high accuracy)
       *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Checks if low-accuracy locations are available to the app from network triangulation/WiFi access points.
     * Returns true if Location mode is enabled and is set to "Battery saving" or "High accuracy" AND if the app is authorized to use location.
     * @returns {Promise<any>}
     */
    /**
       * Checks if low-accuracy locations are available to the app from network triangulation/WiFi access points.
       * Returns true if Location mode is enabled and is set to "Battery saving" or "High accuracy" AND if the app is authorized to use location.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.isNetworkLocationAvailable = /**
       * Checks if low-accuracy locations are available to the app from network triangulation/WiFi access points.
       * Returns true if Location mode is enabled and is set to "Battery saving" or "High accuracy" AND if the app is authorized to use location.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Checks if location mode is set to return low-accuracy locations from network triangulation/WiFi access points.
     * Returns true if Location mode is enabled and is set to either:
     *   - Battery saving = network triangulation and Wifi network IDs (low accuracy)
     *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
     * @returns {Promise<any>}
     */
    /**
       * Checks if location mode is set to return low-accuracy locations from network triangulation/WiFi access points.
       * Returns true if Location mode is enabled and is set to either:
       *   - Battery saving = network triangulation and Wifi network IDs (low accuracy)
       *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.isNetworkLocationEnabled = /**
       * Checks if location mode is set to return low-accuracy locations from network triangulation/WiFi access points.
       * Returns true if Location mode is enabled and is set to either:
       *   - Battery saving = network triangulation and Wifi network IDs (low accuracy)
       *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Returns the current location mode setting for the device.
     * @returns {Promise<any>}
     */
    /**
       * Returns the current location mode setting for the device.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.getLocationMode = /**
       * Returns the current location mode setting for the device.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Returns the current authorization status for a given permission.
     * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     * @param permission
     * @returns {Promise<any>}
     */
    /**
       * Returns the current authorization status for a given permission.
       * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
       * @param permission
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.getPermissionAuthorizationStatus = /**
       * Returns the current authorization status for a given permission.
       * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
       * @param permission
       * @returns {Promise<any>}
       */
    function (permission) {
        return;
    };
    /**
     * Returns the current authorization status for multiple permissions.
     * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     * @param {any[]} permissions
     * @returns {Promise<any>}
     */
    /**
       * Returns the current authorization status for multiple permissions.
       * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
       * @param {any[]} permissions
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.getPermissionsAuthorizationStatus = /**
       * Returns the current authorization status for multiple permissions.
       * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
       * @param {any[]} permissions
       * @returns {Promise<any>}
       */
    function (permissions) {
        return;
    };
    /**
     * Requests app to be granted authorization for a runtime permission.
     * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will have no effect as the permissions are already granted at installation time.
     * @param permission
     * @returns {Promise<any>}
     */
    /**
       * Requests app to be granted authorization for a runtime permission.
       * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will have no effect as the permissions are already granted at installation time.
       * @param permission
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.requestRuntimePermission = /**
       * Requests app to be granted authorization for a runtime permission.
       * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will have no effect as the permissions are already granted at installation time.
       * @param permission
       * @returns {Promise<any>}
       */
    function (permission) {
        return;
    };
    /**
     * Requests app to be granted authorization for multiple runtime permissions.
     * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     * @param {any[]} permissions
     * @returns {Promise<any>}
     */
    /**
       * Requests app to be granted authorization for multiple runtime permissions.
       * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
       * @param {any[]} permissions
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.requestRuntimePermissions = /**
       * Requests app to be granted authorization for multiple runtime permissions.
       * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
       * @param {any[]} permissions
       * @returns {Promise<any>}
       */
    function (permissions) {
        return;
    };
    /**
     * Indicates if the plugin is currently requesting a runtime permission via the native API.
     * Note that only one request can be made concurrently because the native API cannot handle concurrent requests,
     * so the plugin will invoke the error callback if attempting to make more than one simultaneous request.
     * Multiple permission requests should be grouped into a single call since the native API is setup to handle batch requests of multiple permission groups.
     * @returns {boolean}
     */
    /**
       * Indicates if the plugin is currently requesting a runtime permission via the native API.
       * Note that only one request can be made concurrently because the native API cannot handle concurrent requests,
       * so the plugin will invoke the error callback if attempting to make more than one simultaneous request.
       * Multiple permission requests should be grouped into a single call since the native API is setup to handle batch requests of multiple permission groups.
       * @returns {boolean}
       */
    Diagnostic.prototype.isRequestingPermission = /**
       * Indicates if the plugin is currently requesting a runtime permission via the native API.
       * Note that only one request can be made concurrently because the native API cannot handle concurrent requests,
       * so the plugin will invoke the error callback if attempting to make more than one simultaneous request.
       * Multiple permission requests should be grouped into a single call since the native API is setup to handle batch requests of multiple permission groups.
       * @returns {boolean}
       */
    function () {
        return;
    };
    /**
     * Registers a function to be called when a runtime permission request has completed.
     * Pass in a falsy value to de-register the currently registered function.
     * @param {Function} handler
     */
    /**
       * Registers a function to be called when a runtime permission request has completed.
       * Pass in a falsy value to de-register the currently registered function.
       * @param {Function} handler
       */
    Diagnostic.prototype.registerPermissionRequestCompleteHandler = /**
       * Registers a function to be called when a runtime permission request has completed.
       * Pass in a falsy value to de-register the currently registered function.
       * @param {Function} handler
       */
    function (handler) {
        return;
    };
    /**
     * Checks if the device setting for Bluetooth is switched on.
     * This requires `BLUETOOTH` permission on Android
     * @returns {Promise<boolean>}
     */
    /**
       * Checks if the device setting for Bluetooth is switched on.
       * This requires `BLUETOOTH` permission on Android
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isBluetoothEnabled = /**
       * Checks if the device setting for Bluetooth is switched on.
       * This requires `BLUETOOTH` permission on Android
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Checks if the device has Bluetooth capabilities.
     * @returns {Promise<boolean>}
     */
    /**
       * Checks if the device has Bluetooth capabilities.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.hasBluetoothSupport = /**
       * Checks if the device has Bluetooth capabilities.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Checks if the device has Bluetooth Low Energy (LE) capabilities.
     * @returns {Promise<boolean>}
     */
    /**
       * Checks if the device has Bluetooth Low Energy (LE) capabilities.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.hasBluetoothLESupport = /**
       * Checks if the device has Bluetooth Low Energy (LE) capabilities.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Checks if the device supports Bluetooth Low Energy (LE) Peripheral mode.
     * @returns {Promise<boolean>}
     */
    /**
       * Checks if the device supports Bluetooth Low Energy (LE) Peripheral mode.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.hasBluetoothLEPeripheralSupport = /**
       * Checks if the device supports Bluetooth Low Energy (LE) Peripheral mode.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Checks if the application is authorized to use external storage.
     * @returns {Promise<boolean>}
     */
    /**
       * Checks if the application is authorized to use external storage.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isExternalStorageAuthorized = /**
       * Checks if the application is authorized to use external storage.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * CReturns the external storage authorization status for the application.
     * @returns {Promise<boolean>}
     */
    /**
       * CReturns the external storage authorization status for the application.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.getExternalStorageAuthorizationStatus = /**
       * CReturns the external storage authorization status for the application.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Requests external storage authorization for the application.
     * @returns {Promise<any>}
     */
    /**
       * Requests external storage authorization for the application.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.requestExternalStorageAuthorization = /**
       * Requests external storage authorization for the application.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Returns details of external SD card(s): absolute path, is writable, free space.
     *
     * The intention of this method is to return the location and details of removable external SD cards.
     * This differs from the "external directories" returned by cordova-plugin-file which return mount points relating to non-removable (internal) storage.
     *
     * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#getexternalsdcarddetails)
     *
     * @returns {Promise<any>}
     */
    /**
       * Returns details of external SD card(s): absolute path, is writable, free space.
       *
       * The intention of this method is to return the location and details of removable external SD cards.
       * This differs from the "external directories" returned by cordova-plugin-file which return mount points relating to non-removable (internal) storage.
       *
       * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#getexternalsdcarddetails)
       *
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.getExternalSdCardDetails = /**
       * Returns details of external SD card(s): absolute path, is writable, free space.
       *
       * The intention of this method is to return the location and details of removable external SD cards.
       * This differs from the "external directories" returned by cordova-plugin-file which return mount points relating to non-removable (internal) storage.
       *
       * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#getexternalsdcarddetails)
       *
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Switches to the wireless settings page in the Settings app. Allows configuration of wireless controls such as Wi-Fi, Bluetooth and Mobile networks.
     */
    /**
       * Switches to the wireless settings page in the Settings app. Allows configuration of wireless controls such as Wi-Fi, Bluetooth and Mobile networks.
       */
    Diagnostic.prototype.switchToWirelessSettings = /**
       * Switches to the wireless settings page in the Settings app. Allows configuration of wireless controls such as Wi-Fi, Bluetooth and Mobile networks.
       */
    function () { };
    /**
     * Displays NFC settings to allow user to enable NFC.
     */
    /**
       * Displays NFC settings to allow user to enable NFC.
       */
    Diagnostic.prototype.switchToNFCSettings = /**
       * Displays NFC settings to allow user to enable NFC.
       */
    function () { };
    /**
     * Checks if NFC hardware is present on device.
     * @returns {Promise<boolean>}
     */
    /**
       * Checks if NFC hardware is present on device.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isNFCPresent = /**
       * Checks if NFC hardware is present on device.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Checks if the device setting for NFC is switched on.
     * Note: this operation does not require NFC permission in the manifest.
     * @returns {Promise<boolean>}
     */
    /**
       * Checks if the device setting for NFC is switched on.
       * Note: this operation does not require NFC permission in the manifest.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isNFCEnabled = /**
       * Checks if the device setting for NFC is switched on.
       * Note: this operation does not require NFC permission in the manifest.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Checks if NFC is available to the app. Returns true if the device has NFC capabilities AND if NFC setting is switched on.
     * Note: this operation does not require NFC permission in the manifest.
     * @returns {Promise<any>}
     */
    /**
       * Checks if NFC is available to the app. Returns true if the device has NFC capabilities AND if NFC setting is switched on.
       * Note: this operation does not require NFC permission in the manifest.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.isNFCAvailable = /**
       * Checks if NFC is available to the app. Returns true if the device has NFC capabilities AND if NFC setting is switched on.
       * Note: this operation does not require NFC permission in the manifest.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Registers a function to be called when a change in NFC state occurs. Pass in a falsy value to de-register the currently registered function.
     * @param {Function} hander callback function to be called when NFC state changes
     * @returns {Promise<any>}
     */
    /**
       * Registers a function to be called when a change in NFC state occurs. Pass in a falsy value to de-register the currently registered function.
       * @param {Function} hander callback function to be called when NFC state changes
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.registerNFCStateChangeHandler = /**
       * Registers a function to be called when a change in NFC state occurs. Pass in a falsy value to de-register the currently registered function.
       * @param {Function} hander callback function to be called when NFC state changes
       * @returns {Promise<any>}
       */
    function (handler) { };
    /**
     * Checks if the device data roaming setting is enabled.
     * @returns {Promise<boolean>}
     */
    /**
       * Checks if the device data roaming setting is enabled.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isDataRoamingEnabled = /**
       * Checks if the device data roaming setting is enabled.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Checks if the device setting for ADB(debug) is switched on.
     * @returns {Promise<boolean>}
     */
    /**
       * Checks if the device setting for ADB(debug) is switched on.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isADBModeEnabled = /**
       * Checks if the device setting for ADB(debug) is switched on.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Checks if the device is rooted.
     * @returns {Promise<boolean>}
     */
    /**
       * Checks if the device is rooted.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isDeviceRooted = /**
       * Checks if the device is rooted.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    // IOS ONLY
    /**
     * Checks if the application is authorized to use the Camera Roll in Photos app.
     * @returns {Promise<boolean>}
     */
    // IOS ONLY
    /**
       * Checks if the application is authorized to use the Camera Roll in Photos app.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isCameraRollAuthorized = 
    // IOS ONLY
    /**
       * Checks if the application is authorized to use the Camera Roll in Photos app.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Returns the authorization status for the application to use the Camera Roll in Photos app.
     * @returns {Promise<string>}
     */
    /**
       * Returns the authorization status for the application to use the Camera Roll in Photos app.
       * @returns {Promise<string>}
       */
    Diagnostic.prototype.getCameraRollAuthorizationStatus = /**
       * Returns the authorization status for the application to use the Camera Roll in Photos app.
       * @returns {Promise<string>}
       */
    function () {
        return;
    };
    /**
     * Requests camera roll authorization for the application.
     * Should only be called if authorization status is NOT_REQUESTED.
     * Calling it when in any other state will have no effect.
     * @returns {Promise<any>}
     */
    /**
       * Requests camera roll authorization for the application.
       * Should only be called if authorization status is NOT_REQUESTED.
       * Calling it when in any other state will have no effect.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.requestCameraRollAuthorization = /**
       * Requests camera roll authorization for the application.
       * Should only be called if authorization status is NOT_REQUESTED.
       * Calling it when in any other state will have no effect.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Checks if remote (push) notifications are enabled.
     * @returns {Promise<boolean>}
     */
    /**
       * Checks if remote (push) notifications are enabled.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isRemoteNotificationsEnabled = /**
       * Checks if remote (push) notifications are enabled.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Indicates if the app is registered for remote (push) notifications on the device.
     * @returns {Promise<boolean>}
     */
    /**
       * Indicates if the app is registered for remote (push) notifications on the device.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isRegisteredForRemoteNotifications = /**
       * Indicates if the app is registered for remote (push) notifications on the device.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Returns the authorization status for the application to use Remote Notifications.
     * Note: Works on iOS 10+ only (iOS 9 and below will invoke the error callback).
     * @returns {Promise<string>}
     */
    /**
       * Returns the authorization status for the application to use Remote Notifications.
       * Note: Works on iOS 10+ only (iOS 9 and below will invoke the error callback).
       * @returns {Promise<string>}
       */
    Diagnostic.prototype.getRemoteNotificationsAuthorizationStatus = /**
       * Returns the authorization status for the application to use Remote Notifications.
       * Note: Works on iOS 10+ only (iOS 9 and below will invoke the error callback).
       * @returns {Promise<string>}
       */
    function () {
        return;
    };
    /**
     * Indicates the current setting of notification types for the app in the Settings app.
     * Note: on iOS 8+, if "Allow Notifications" switch is OFF, all types will be returned as disabled.
     * @returns {Promise<any>}
     */
    /**
       * Indicates the current setting of notification types for the app in the Settings app.
       * Note: on iOS 8+, if "Allow Notifications" switch is OFF, all types will be returned as disabled.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.getRemoteNotificationTypes = /**
       * Indicates the current setting of notification types for the app in the Settings app.
       * Note: on iOS 8+, if "Allow Notifications" switch is OFF, all types will be returned as disabled.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Checks if the application is authorized to use reminders.
     * @returns {Promise<boolean>}
     */
    /**
       * Checks if the application is authorized to use reminders.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isRemindersAuthorized = /**
       * Checks if the application is authorized to use reminders.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Returns the reminders authorization status for the application.
     * @returns {Promise<any>}
     */
    /**
       * Returns the reminders authorization status for the application.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.getRemindersAuthorizationStatus = /**
       * Returns the reminders authorization status for the application.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Requests reminders authorization for the application.
     * @returns {Promise<any>}
     */
    /**
       * Requests reminders authorization for the application.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.requestRemindersAuthorization = /**
       * Requests reminders authorization for the application.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Checks if the application is authorized for background refresh.
     * @returns {Promise<boolean>}
     */
    /**
       * Checks if the application is authorized for background refresh.
       * @returns {Promise<boolean>}
       */
    Diagnostic.prototype.isBackgroundRefreshAuthorized = /**
       * Checks if the application is authorized for background refresh.
       * @returns {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Returns the background refresh authorization status for the application.
     * @returns {Promise<any>}
     */
    /**
       * Returns the background refresh authorization status for the application.
       * @returns {Promise<any>}
       */
    Diagnostic.prototype.getBackgroundRefreshStatus = /**
       * Returns the background refresh authorization status for the application.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Requests Bluetooth authorization for the application.
     *
     * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#requestbluetoothauthorization)
     * @return {Promise<any>}
     */
    /**
       * Requests Bluetooth authorization for the application.
       *
       * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#requestbluetoothauthorization)
       * @return {Promise<any>}
       */
    Diagnostic.prototype.requestBluetoothAuthorization = /**
       * Requests Bluetooth authorization for the application.
       *
       * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#requestbluetoothauthorization)
       * @return {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Checks if motion tracking is available on the current device.
     * @return {Promise<boolean>}
     */
    /**
       * Checks if motion tracking is available on the current device.
       * @return {Promise<boolean>}
       */
    Diagnostic.prototype.isMotionAvailable = /**
       * Checks if motion tracking is available on the current device.
       * @return {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Checks if it's possible to determine the outcome of a motion authorization request on the current device.
     * There's no direct way to determine if authorization was granted or denied, so the Pedometer API must be used to indirectly determine this:
     * therefore, if the device supports motion tracking but not Pedometer Event Tracking, the outcome of requesting motion detection cannot be determined.
     *
     * @return {Promise<boolean>}
     */
    /**
       * Checks if it's possible to determine the outcome of a motion authorization request on the current device.
       * There's no direct way to determine if authorization was granted or denied, so the Pedometer API must be used to indirectly determine this:
       * therefore, if the device supports motion tracking but not Pedometer Event Tracking, the outcome of requesting motion detection cannot be determined.
       *
       * @return {Promise<boolean>}
       */
    Diagnostic.prototype.isMotionRequestOutcomeAvailable = /**
       * Checks if it's possible to determine the outcome of a motion authorization request on the current device.
       * There's no direct way to determine if authorization was granted or denied, so the Pedometer API must be used to indirectly determine this:
       * therefore, if the device supports motion tracking but not Pedometer Event Tracking, the outcome of requesting motion detection cannot be determined.
       *
       * @return {Promise<boolean>}
       */
    function () {
        return;
    };
    /**
     * Requests motion tracking authorization for the application.
     *
     * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#requestmotionauthorization)
     *
     * @return {Promise<string>}
     */
    /**
       * Requests motion tracking authorization for the application.
       *
       * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#requestmotionauthorization)
       *
       * @return {Promise<string>}
       */
    Diagnostic.prototype.requestMotionAuthorization = /**
       * Requests motion tracking authorization for the application.
       *
       * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#requestmotionauthorization)
       *
       * @return {Promise<string>}
       */
    function () {
        return;
    };
    /**
     * Checks motion authorization status for the application.
     *
     * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#getmotionauthorizationstatus)
     *
     * @return {Promise<string>}
     */
    /**
       * Checks motion authorization status for the application.
       *
       * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#getmotionauthorizationstatus)
       *
       * @return {Promise<string>}
       */
    Diagnostic.prototype.getMotionAuthorizationStatus = /**
       * Checks motion authorization status for the application.
       *
       * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#getmotionauthorizationstatus)
       *
       * @return {Promise<string>}
       */
    function () {
        return;
    };
    Diagnostic.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", Object)
    ], Diagnostic.prototype, "permissionStatus", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", Object)
    ], Diagnostic.prototype, "NFCState", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", Object)
    ], Diagnostic.prototype, "motionStatus", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isLocationAvailable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isWifiAvailable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isCameraAvailable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isBluetoothAvailable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true, platforms: ['Android', 'Windows 10', 'iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Diagnostic.prototype, "switchToLocationSettings", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true, platforms: ['Android', 'Windows 10'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Diagnostic.prototype, "switchToMobileDataSettings", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true, platforms: ['Android', 'Windows 10'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Diagnostic.prototype, "switchToBluetoothSettings", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true, platforms: ['Android', 'Windows 10'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Diagnostic.prototype, "switchToWifiSettings", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'Windows 10'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isWifiEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ callbackOrder: 'reverse', platforms: ['Android', 'Windows 10'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "setWifiState", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ callbackOrder: 'reverse', platforms: ['Android', 'Windows 10'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "setBluetoothState", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isLocationEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isLocationAuthorized", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "getLocationAuthorizationStatus", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'], callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "requestLocationAuthorization", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isCameraPresent", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'], callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isCameraAuthorized", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'], callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "getCameraAuthorizationStatus", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'], callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "requestCameraAuthorization", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isMicrophoneAuthorized", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "getMicrophoneAuthorizationStatus", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "requestMicrophoneAuthorization", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isContactsAuthorized", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "getContactsAuthorizationStatus", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "requestContactsAuthorization", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isCalendarAuthorized", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "getCalendarAuthorizationStatus", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "requestCalendarAuthorization", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "switchToSettings", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "getBluetoothState", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'], sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], Diagnostic.prototype, "registerBluetoothStateChangeHandler", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android', 'iOS'], sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], Diagnostic.prototype, "registerLocationStateChangeHandler", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isGpsLocationAvailable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isGpsLocationEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isNetworkLocationAvailable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isNetworkLocationEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "getLocationMode", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'], callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "getPermissionAuthorizationStatus", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'], callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "getPermissionsAuthorizationStatus", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'], callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "requestRuntimePermission", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'], callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "requestRuntimePermissions", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Diagnostic.prototype, "isRequestingPermission", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], Diagnostic.prototype, "registerPermissionRequestCompleteHandler", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isBluetoothEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "hasBluetoothSupport", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "hasBluetoothLESupport", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "hasBluetoothLEPeripheralSupport", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isExternalStorageAuthorized", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "getExternalStorageAuthorizationStatus", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "requestExternalStorageAuthorization", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "getExternalSdCardDetails", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['Android'],
            sync: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Diagnostic.prototype, "switchToWirelessSettings", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['Android'],
            sync: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Diagnostic.prototype, "switchToNFCSettings", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isNFCPresent", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isNFCEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isNFCAvailable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['Android'],
            sync: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], Diagnostic.prototype, "registerNFCStateChangeHandler", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isDataRoamingEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isADBModeEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isDeviceRooted", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isCameraRollAuthorized", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "getCameraRollAuthorizationStatus", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "requestCameraRollAuthorization", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS', 'Android'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isRemoteNotificationsEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isRegisteredForRemoteNotifications", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "getRemoteNotificationsAuthorizationStatus", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "getRemoteNotificationTypes", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isRemindersAuthorized", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "getRemindersAuthorizationStatus", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "requestRemindersAuthorization", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isBackgroundRefreshAuthorized", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "getBackgroundRefreshStatus", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "requestBluetoothAuthorization", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isMotionAvailable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "isMotionRequestOutcomeAvailable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "requestMotionAuthorization", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Diagnostic.prototype, "getMotionAuthorizationStatus", null);
    /**
     * @name Diagnostic
     * @description
     * Checks whether device hardware features are enabled or available to the app, e.g. camera, GPS, wifi
     *
     * @usage
     * ```typescript
     * import { Diagnostic } from '@ionic-native/diagnostic';
     *
     * constructor(private diagnostic: Diagnostic) { }
     *
     * ...
     *
     * let successCallback = (isAvailable) => { console.log('Is available? ' + isAvailable); };
     * let errorCallback = (e) => console.error(e);
     *
     * this.diagnostic.isCameraAvailable().then(successCallback).catch(errorCallback);
     *
     * this.diagnostic.isBluetoothAvailable().then(successCallback, errorCallback);
     *
     *
     * this.diagnostic.getBluetoothState()
     *   .then((state) => {
     *     if (state == this.diagnostic.bluetoothState.POWERED_ON){
     *       // do something
     *     } else {
     *       // do something else
     *     }
     *   }).catch(e => console.error(e));
     *
     * ```
     *
     */
    Diagnostic = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            pluginName: 'Diagnostic',
            plugin: 'cordova.plugins.diagnostic',
            pluginRef: 'cordova.plugins.diagnostic',
            repo: 'https://github.com/dpa99c/cordova-diagnostic-plugin',
            platforms: ['Android', 'iOS', 'Windows']
        })
    ], Diagnostic);
    return Diagnostic;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LatLng; });
/* unused harmony export LatLngBounds */
/* unused harmony export VisibleRegion */
/* unused harmony export StreetViewSource */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GoogleMapsEvent; });
/* unused harmony export GoogleMapsAnimation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GoogleMapsMapTypeId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMaps; });
/* unused harmony export BaseClass */
/* unused harmony export BaseArrayClass */
/* unused harmony export Circle */
/* unused harmony export Environment */
/* unused harmony export Geocoder */
/* unused harmony export LocationService */
/* unused harmony export Encoding */
/* unused harmony export Poly */
/* unused harmony export Spherical */
/* unused harmony export StreetViewPanorama */
/* unused harmony export GoogleMap */
/* unused harmony export GroundOverlay */
/* unused harmony export HtmlInfoWindow */
/* unused harmony export Marker */
/* unused harmony export MarkerCluster */
/* unused harmony export Polygon */
/* unused harmony export Polyline */
/* unused harmony export TileOverlay */
/* unused harmony export KmlOverlay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent__ = __webpack_require__(823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * @hidden
 */
var /**
 * @hidden
 */
LatLng = (function () {
    function LatLng(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
    LatLng.prototype.equals = function (other) {
        return this.lat === other.lat && this.lng === other.lng;
    };
    LatLng.prototype.toString = function () {
        return this.lat + ',' + this.lng;
    };
    LatLng.prototype.toUrlValue = function (precision) {
        precision = precision || 6;
        return this.lat.toFixed(precision) + ',' + this.lng.toFixed(precision);
    };
    return LatLng;
}());
/**
 * @hidden
 */

/**
 * @hidden
 */
var LatLngBounds = (function () {
    function LatLngBounds(points) {
        this._objectInstance = new (GoogleMaps.getPlugin()).LatLngBounds(points);
    }
    /**
     * Converts to string
     * @return {string}
     */
    /**
       * Converts to string
       * @return {string}
       */
    LatLngBounds.prototype.toString = /**
       * Converts to string
       * @return {string}
       */
    function () { return; };
    /**
     * Returns a string of the form "lat_sw,lng_sw,lat_ne,lng_ne" for this bounds, where "sw" corresponds to the southwest corner of the bounding box, while "ne" corresponds to the northeast corner of that box.
     * @param precision {number}
     * @return {string}
     */
    /**
       * Returns a string of the form "lat_sw,lng_sw,lat_ne,lng_ne" for this bounds, where "sw" corresponds to the southwest corner of the bounding box, while "ne" corresponds to the northeast corner of that box.
       * @param precision {number}
       * @return {string}
       */
    LatLngBounds.prototype.toUrlValue = /**
       * Returns a string of the form "lat_sw,lng_sw,lat_ne,lng_ne" for this bounds, where "sw" corresponds to the southwest corner of the bounding box, while "ne" corresponds to the northeast corner of that box.
       * @param precision {number}
       * @return {string}
       */
    function (precision) { return; };
    /**
     * Extends this bounds to contain the given point.
     * @param LatLng {ILatLng}
     */
    /**
       * Extends this bounds to contain the given point.
       * @param LatLng {ILatLng}
       */
    LatLngBounds.prototype.extend = /**
       * Extends this bounds to contain the given point.
       * @param LatLng {ILatLng}
       */
    function (latLng) { };
    /**
     * Returns true if the given lat/lng is in this bounds.
     * @param LatLng {ILatLng}
     */
    /**
       * Returns true if the given lat/lng is in this bounds.
       * @param LatLng {ILatLng}
       */
    LatLngBounds.prototype.contains = /**
       * Returns true if the given lat/lng is in this bounds.
       * @param LatLng {ILatLng}
       */
    function (LatLng) { return; };
    /**
     * Computes the center of this LatLngBounds
     * @return {LatLng}
     */
    /**
       * Computes the center of this LatLngBounds
       * @return {LatLng}
       */
    LatLngBounds.prototype.getCenter = /**
       * Computes the center of this LatLngBounds
       * @return {LatLng}
       */
    function () { return; };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* InstanceProperty */],
        __metadata("design:type", Object)
    ], LatLngBounds.prototype, "northeast", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* InstanceProperty */],
        __metadata("design:type", Object)
    ], LatLngBounds.prototype, "southwest", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* InstanceProperty */],
        __metadata("design:type", String)
    ], LatLngBounds.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], LatLngBounds.prototype, "toString", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", String)
    ], LatLngBounds.prototype, "toUrlValue", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LatLngBounds.prototype, "extend", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Boolean)
    ], LatLngBounds.prototype, "contains", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", LatLng)
    ], LatLngBounds.prototype, "getCenter", null);
    return LatLngBounds;
}());

/**
 * @hidden
 */
var VisibleRegion = (function () {
    function VisibleRegion(southwest, northeast, farLeft, farRight, nearLeft, nearRight) {
        this._objectInstance = new (GoogleMaps.getPlugin()).VisibleRegion(southwest, northeast, farLeft, farRight, nearLeft, nearRight);
    }
    /**
     * Converts to string
     * @return {string}
     */
    /**
       * Converts to string
       * @return {string}
       */
    VisibleRegion.prototype.toString = /**
       * Converts to string
       * @return {string}
       */
    function () { return; };
    /**
     * Returns a string of the form "lat_sw,lng_sw,lat_ne,lng_ne" for this bounds, where "sw" corresponds to the southwest corner of the bounding box, while "ne" corresponds to the northeast corner of that box.
     * @param precision {number}
     * @return {string}
     */
    /**
       * Returns a string of the form "lat_sw,lng_sw,lat_ne,lng_ne" for this bounds, where "sw" corresponds to the southwest corner of the bounding box, while "ne" corresponds to the northeast corner of that box.
       * @param precision {number}
       * @return {string}
       */
    VisibleRegion.prototype.toUrlValue = /**
       * Returns a string of the form "lat_sw,lng_sw,lat_ne,lng_ne" for this bounds, where "sw" corresponds to the southwest corner of the bounding box, while "ne" corresponds to the northeast corner of that box.
       * @param precision {number}
       * @return {string}
       */
    function (precision) { return; };
    /**
     * Returns true if the given lat/lng is in this bounds.
     * @param LatLng {ILatLng}
     */
    /**
       * Returns true if the given lat/lng is in this bounds.
       * @param LatLng {ILatLng}
       */
    VisibleRegion.prototype.contains = /**
       * Returns true if the given lat/lng is in this bounds.
       * @param LatLng {ILatLng}
       */
    function (LatLng) { return; };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* InstanceProperty */],
        __metadata("design:type", Object)
    ], VisibleRegion.prototype, "northeast", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* InstanceProperty */],
        __metadata("design:type", Object)
    ], VisibleRegion.prototype, "southwest", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* InstanceProperty */],
        __metadata("design:type", Object)
    ], VisibleRegion.prototype, "farLeft", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* InstanceProperty */],
        __metadata("design:type", Object)
    ], VisibleRegion.prototype, "farRight", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* InstanceProperty */],
        __metadata("design:type", Object)
    ], VisibleRegion.prototype, "nearLeft", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* InstanceProperty */],
        __metadata("design:type", Object)
    ], VisibleRegion.prototype, "nearRight", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* InstanceProperty */],
        __metadata("design:type", String)
    ], VisibleRegion.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], VisibleRegion.prototype, "toString", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", String)
    ], VisibleRegion.prototype, "toUrlValue", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Boolean)
    ], VisibleRegion.prototype, "contains", null);
    return VisibleRegion;
}());

/**
 * @hidden
 */
var StreetViewSource = {
    DEFAULT: 'DEFAULT',
    OUTDOOR: 'OUTDOOR'
};
/**
 * @hidden
 * You can listen to these events where appropriate
 */
var GoogleMapsEvent = {
    MAP_READY: 'map_ready',
    MAP_CLICK: 'map_click',
    MAP_LONG_CLICK: 'map_long_click',
    POI_CLICK: 'poi_click',
    MY_LOCATION_CLICK: 'my_location_click',
    MY_LOCATION_BUTTON_CLICK: 'my_location_button_click',
    INDOOR_BUILDING_FOCUSED: 'indoor_building_focused',
    INDOOR_LEVEL_ACTIVATED: 'indoor_level_activated',
    CAMERA_MOVE_START: 'camera_move_start',
    CAMERA_MOVE: 'camera_move',
    CAMERA_MOVE_END: 'camera_move_end',
    OVERLAY_CLICK: 'overlay_click',
    POLYGON_CLICK: 'polygon_click',
    POLYLINE_CLICK: 'polyline_click',
    CIRCLE_CLICK: 'circle_click',
    GROUND_OVERLAY_CLICK: 'groundoverlay_click',
    INFO_CLICK: 'info_click',
    INFO_LONG_CLICK: 'info_long_click',
    INFO_CLOSE: 'info_close',
    INFO_OPEN: 'info_open',
    MARKER_CLICK: 'marker_click',
    MARKER_DRAG: 'marker_drag',
    MARKER_DRAG_START: 'marker_drag_start',
    MARKER_DRAG_END: 'marker_drag_end',
    MAP_DRAG: 'map_drag',
    MAP_DRAG_START: 'map_drag_start',
    MAP_DRAG_END: 'map_drag_end',
    KML_CLICK: 'kml_click',
    PANORAMA_READY: 'panorama_ready',
    PANORAMA_CAMERA_CHANGE: 'panorama_camera_change',
    PANORAMA_LOCATION_CHANGE: 'panorama_location_change',
    PANORAMA_CLICK: 'panorama_click'
};
/**
 * @hidden
 */
var GoogleMapsAnimation = {
    BOUNCE: 'BOUNCE',
    DROP: 'DROP'
};
/**
 * @hidden
 */
var GoogleMapsMapTypeId = {
    NORMAL: 'MAP_TYPE_NORMAL',
    ROADMAP: 'MAP_TYPE_NORMAL',
    SATELLITE: 'MAP_TYPE_SATELLITE',
    HYBRID: 'MAP_TYPE_HYBRID',
    TERRAIN: 'MAP_TYPE_TERRAIN',
    NONE: 'MAP_TYPE_NONE'
};
/**
 * @name Google Maps
 * @description
 * This plugin uses the native Google Maps SDK
 * Note: As of Ionic native 4.0, this using the 2.0 version of the google maps plugin. Please make sure your plugin is updated
 * @usage
 * ```typescript
 * import {
 *  GoogleMaps,
 *  GoogleMap,
 *  GoogleMapsEvent,
 *  GoogleMapOptions,
 *  CameraPosition,
 *  MarkerOptions,
 *  Marker
 * } from '@ionic-native/google-maps';
 * import { Component } from "@angular/core/";
 *
 * @Component({
 *   selector: 'page-home',
 *   templateUrl: 'home.html'
 * })
 * export class HomePage {
 *   map: GoogleMap;
 *   constructor() { }
 *
 *   ionViewDidLoad() {
 *    this.loadMap();
 *   }
 *
 *  loadMap() {
 *
 *     let mapOptions: GoogleMapOptions = {
 *       camera: {
 *         target: {
 *           lat: 43.0741904,
 *           lng: -89.3809802
 *         },
 *         zoom: 18,
 *         tilt: 30
 *       }
 *     };
 *
 *     this.map = GoogleMaps.create('map_canvas', mapOptions);
 *
 *     // Wait the MAP_READY before using any methods.
 *     this.map.one(GoogleMapsEvent.MAP_READY)
 *       .then(() => {
 *         console.log('Map is ready!');
 *
 *         // Now you can use all methods safely.
 *         this.map.addMarker({
 *             title: 'Ionic',
 *             icon: 'blue',
 *             animation: 'DROP',
 *             position: {
 *               lat: 43.0741904,
 *               lng: -89.3809802
 *             }
 *           })
 *           .then(marker => {
 *             marker.on(GoogleMapsEvent.MARKER_CLICK)
 *               .subscribe(() => {
 *                 alert('clicked');
 *               });
 *           });
 *
 *       });
 *   }
 * }
 *
 * ```
 * @classes
 * GoogleMap
 * Circle
 * Encoding
 * Environment
 * Geocoder
 * GroundOverlay
 * HtmlInfoWindow
 * Geocoder
 * LatLng
 * LatLngBounds
 * Marker
 * MarkerCluster
 * Polygon
 * Polyline
 * Spherical
 * KmlOverlay
 * Poly
 * TileOverlay
 * BaseClass
 * BaseArrayClass
 * @interfaces
 * GoogleMapOptions
 * CameraPosition
 * CircleOptions
 * GeocoderRequest
 * GeocoderResult
 * GroundOverlayOptions
 * ILatLng
 * MarkerIcon
 * MarkerOptions
 * MarkerClusterIcon
 * MarkerClusterOptions
 * MyLocation
 * MyLocationOptions
 * PolygonOptions
 * PolylineOptions
 * TileOverlayOptions
 * KmlOverlayOptions
 * VisibleRegion
 */
var GoogleMaps = (function (_super) {
    __extends(GoogleMaps, _super);
    function GoogleMaps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoogleMaps_1 = GoogleMaps;
    /**
     * Creates a new GoogleMap instance
     * @param element {string | HTMLElement} Element ID or reference to attach the map to
     * @param options {GoogleMapOptions} [options] Options
     * @return {GoogleMap}
     */
    /**
       * Creates a new GoogleMap instance
       * @param element {string | HTMLElement} Element ID or reference to attach the map to
       * @param options {GoogleMapOptions} [options] Options
       * @return {GoogleMap}
       */
    GoogleMaps.create = /**
       * Creates a new GoogleMap instance
       * @param element {string | HTMLElement} Element ID or reference to attach the map to
       * @param options {GoogleMapOptions} [options] Options
       * @return {GoogleMap}
       */
    function (element, options) {
        if (element instanceof HTMLElement) {
            if (element.getAttribute('__pluginMapId')) {
                console.error('GoogleMaps', element.tagName + "[__pluginMapId='" + element.getAttribute('__pluginMapId') + "'] has already map.");
                return;
            }
        }
        else if (typeof element === 'object') {
            options = element;
            element = null;
        }
        var googleMap = new GoogleMap(element, options);
        googleMap.set('_overlays', {});
        return googleMap;
    };
    /**
     * @deprecation
     * @hidden
     */
    /**
       * @deprecation
       * @hidden
       */
    GoogleMaps.prototype.create = /**
       * @deprecation
       * @hidden
       */
    function (element, options) {
        console.error('GoogleMaps', '[deprecated] Please use GoogleMaps.create()');
        return GoogleMaps_1.create(element, options);
    };
    /**
     * Creates a new StreetView instance
     * @param element {string | HTMLElement} Element ID or reference to attach the map to
     * @param options {StreetViewOptions} [options] Options
     * @return {StreetViewPanorama}
     */
    /**
       * Creates a new StreetView instance
       * @param element {string | HTMLElement} Element ID or reference to attach the map to
       * @param options {StreetViewOptions} [options] Options
       * @return {StreetViewPanorama}
       */
    GoogleMaps.createPanorama = /**
       * Creates a new StreetView instance
       * @param element {string | HTMLElement} Element ID or reference to attach the map to
       * @param options {StreetViewOptions} [options] Options
       * @return {StreetViewPanorama}
       */
    function (element, options) {
        if (element instanceof HTMLElement) {
            if (element.getAttribute('__pluginMapId')) {
                console.error('GoogleMaps', element.tagName + "[__pluginMapId='" + element.getAttribute('__pluginMapId') + "'] has already map.");
                return;
            }
        }
        return new StreetViewPanorama(element, options);
    };
    GoogleMaps.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    /**
     * @name Google Maps
     * @description
     * This plugin uses the native Google Maps SDK
     * Note: As of Ionic native 4.0, this using the 2.0 version of the google maps plugin. Please make sure your plugin is updated
     * @usage
     * ```typescript
     * import {
     *  GoogleMaps,
     *  GoogleMap,
     *  GoogleMapsEvent,
     *  GoogleMapOptions,
     *  CameraPosition,
     *  MarkerOptions,
     *  Marker
     * } from '@ionic-native/google-maps';
     * import { Component } from "@angular/core/";
     *
     * @Component({
     *   selector: 'page-home',
     *   templateUrl: 'home.html'
     * })
     * export class HomePage {
     *   map: GoogleMap;
     *   constructor() { }
     *
     *   ionViewDidLoad() {
     *    this.loadMap();
     *   }
     *
     *  loadMap() {
     *
     *     let mapOptions: GoogleMapOptions = {
     *       camera: {
     *         target: {
     *           lat: 43.0741904,
     *           lng: -89.3809802
     *         },
     *         zoom: 18,
     *         tilt: 30
     *       }
     *     };
     *
     *     this.map = GoogleMaps.create('map_canvas', mapOptions);
     *
     *     // Wait the MAP_READY before using any methods.
     *     this.map.one(GoogleMapsEvent.MAP_READY)
     *       .then(() => {
     *         console.log('Map is ready!');
     *
     *         // Now you can use all methods safely.
     *         this.map.addMarker({
     *             title: 'Ionic',
     *             icon: 'blue',
     *             animation: 'DROP',
     *             position: {
     *               lat: 43.0741904,
     *               lng: -89.3809802
     *             }
     *           })
     *           .then(marker => {
     *             marker.on(GoogleMapsEvent.MARKER_CLICK)
     *               .subscribe(() => {
     *                 alert('clicked');
     *               });
     *           });
     *
     *       });
     *   }
     * }
     *
     * ```
     * @classes
     * GoogleMap
     * Circle
     * Encoding
     * Environment
     * Geocoder
     * GroundOverlay
     * HtmlInfoWindow
     * Geocoder
     * LatLng
     * LatLngBounds
     * Marker
     * MarkerCluster
     * Polygon
     * Polyline
     * Spherical
     * KmlOverlay
     * Poly
     * TileOverlay
     * BaseClass
     * BaseArrayClass
     * @interfaces
     * GoogleMapOptions
     * CameraPosition
     * CircleOptions
     * GeocoderRequest
     * GeocoderResult
     * GroundOverlayOptions
     * ILatLng
     * MarkerIcon
     * MarkerOptions
     * MarkerClusterIcon
     * MarkerClusterOptions
     * MyLocation
     * MyLocationOptions
     * PolygonOptions
     * PolylineOptions
     * TileOverlayOptions
     * KmlOverlayOptions
     * VisibleRegion
     */
    GoogleMaps = GoogleMaps_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            pluginName: 'GoogleMaps',
            pluginRef: 'plugin.google.maps',
            plugin: 'cordova-plugin-googlemaps',
            repo: 'https://github.com/mapsplugin/cordova-plugin-googlemaps',
            document: 'https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.3.0/README.md',
            install: 'ionic cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="YOUR_ANDROID_API_KEY_IS_HERE" --variable API_KEY_FOR_IOS="YOUR_IOS_API_KEY_IS_HERE"',
            installVariables: ['API_KEY_FOR_ANDROID', 'API_KEY_FOR_IOS'],
            platforms: ['Android', 'iOS', 'Brwoser']
        })
    ], GoogleMaps);
    return GoogleMaps;
    var GoogleMaps_1;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* IonicNativePlugin */]));

/**
 * @hidden
 * https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/class/BaseClass/README.md
 */
var BaseClass = (function () {
    function BaseClass() {
    }
    /**
     * Adds an event listener.
     * @param eventName {string} event name you want to observe.
     * @return {Observable<any>}
     */
    /**
       * Adds an event listener.
       * @param eventName {string} event name you want to observe.
       * @return {Observable<any>}
       */
    BaseClass.prototype.addEventListener = /**
       * Adds an event listener.
       * @param eventName {string} event name you want to observe.
       * @return {Observable<any>}
       */
    function (eventName) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this._objectInstance.on(eventName, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (args[args.length - 1] instanceof GoogleMaps.getPlugin().BaseClass) {
                    if (args[args.length - 1].type === 'Map' || args[args.length - 1].type === 'StreetViewPanorama') {
                        args[args.length - 1] = _this;
                    }
                    else if (_this instanceof MarkerCluster) {
                        var overlay = _this.get(args[args.length - 1].getId());
                        if (!overlay) {
                            var markerJS = args[args.length - 1];
                            var markerId_1 = markerJS.getId();
                            var markerCluster = _this;
                            overlay = new Marker(markerCluster.getMap(), markerJS);
                            _this.get('_overlays')[markerId_1] = overlay;
                            markerJS.one(markerJS.getId() + '_remove', function () {
                                _this.get('_overlays')[markerId_1] = null;
                            });
                        }
                        args[args.length - 1] = overlay;
                    }
                    else {
                        args[args.length - 1] = _this._objectInstance.getMap().get('_overlays')[args[args.length - 1].getId()];
                    }
                }
                observer.next(args);
            });
        });
    };
    /**
     * Adds an event listener that works once.
     * @param eventName {string} event name you want to observe.
     * @return {Promise<any>}
     */
    /**
       * Adds an event listener that works once.
       * @param eventName {string} event name you want to observe.
       * @return {Promise<any>}
       */
    BaseClass.prototype.addListenerOnce = /**
       * Adds an event listener that works once.
       * @param eventName {string} event name you want to observe.
       * @return {Promise<any>}
       */
    function (eventName) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._objectInstance.one(eventName, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (args[args.length - 1] instanceof GoogleMaps.getPlugin().BaseClass) {
                    if (args[args.length - 1].type === 'Map' || args[args.length - 1].type === 'StreetViewPanorama') {
                        args[args.length - 1] = _this;
                    }
                    else if (_this instanceof MarkerCluster) {
                        var overlay = _this.get(args[args.length - 1].getId());
                        if (!overlay) {
                            var markerJS = args[args.length - 1];
                            var markerId_2 = markerJS.getId();
                            var markerCluster = _this;
                            overlay = new Marker(markerCluster.getMap(), markerJS);
                            _this.get('_overlays')[markerId_2] = overlay;
                            markerJS.one(markerJS.getId() + '_remove', function () {
                                _this.get('_overlays')[markerId_2] = null;
                            });
                        }
                        args[args.length - 1] = overlay;
                    }
                    else {
                        args[args.length - 1] = _this._objectInstance.getMap().get('_overlays')[args[args.length - 1].getId()];
                    }
                }
                resolve(args);
            });
        });
    };
    /**
     * Gets a value
     * @param key {any}
     */
    /**
       * Gets a value
       * @param key {any}
       */
    BaseClass.prototype.get = /**
       * Gets a value
       * @param key {any}
       */
    function (key) { return; };
    /**
     * Sets a value
     * @param key {string} The key name for the value. `(key)_changed` will be fired when you set value through this method.
     * @param value {any}
     * @param noNotify {boolean} [options] True if you want to prevent firing the `(key)_changed` event.
     */
    /**
       * Sets a value
       * @param key {string} The key name for the value. `(key)_changed` will be fired when you set value through this method.
       * @param value {any}
       * @param noNotify {boolean} [options] True if you want to prevent firing the `(key)_changed` event.
       */
    BaseClass.prototype.set = /**
       * Sets a value
       * @param key {string} The key name for the value. `(key)_changed` will be fired when you set value through this method.
       * @param value {any}
       * @param noNotify {boolean} [options] True if you want to prevent firing the `(key)_changed` event.
       */
    function (key, value, noNotify) { };
    /**
     * Bind a key to another object
     * @param key {string} The property name you want to observe.
     * @param target {any} The target object you want to observe.
     * @param targetKey? {string} [options]  The property name you want to observe. If you omit this, the `key` argument is used.
     * @param noNotify? {boolean} [options] True if you want to prevent `(key)_changed` event when you bind first time, because the internal status is changed from `undefined` to something.
     */
    /**
       * Bind a key to another object
       * @param key {string} The property name you want to observe.
       * @param target {any} The target object you want to observe.
       * @param targetKey? {string} [options]  The property name you want to observe. If you omit this, the `key` argument is used.
       * @param noNotify? {boolean} [options] True if you want to prevent `(key)_changed` event when you bind first time, because the internal status is changed from `undefined` to something.
       */
    BaseClass.prototype.bindTo = /**
       * Bind a key to another object
       * @param key {string} The property name you want to observe.
       * @param target {any} The target object you want to observe.
       * @param targetKey? {string} [options]  The property name you want to observe. If you omit this, the `key` argument is used.
       * @param noNotify? {boolean} [options] True if you want to prevent `(key)_changed` event when you bind first time, because the internal status is changed from `undefined` to something.
       */
    function (key, target, targetKey, noNotify) { };
    /**
     * Alias of `addEventListener`
     * @param key {string} The property name you want to observe.
     * @return {Observable<any>}
     */
    /**
       * Alias of `addEventListener`
       * @param key {string} The property name you want to observe.
       * @return {Observable<any>}
       */
    BaseClass.prototype.on = /**
       * Alias of `addEventListener`
       * @param key {string} The property name you want to observe.
       * @return {Observable<any>}
       */
    function (eventName) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this._objectInstance.on(eventName, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (args[args.length - 1] instanceof GoogleMaps.getPlugin().BaseClass) {
                    if (args[args.length - 1].type === 'Map' || args[args.length - 1].type === 'StreetViewPanorama') {
                        args[args.length - 1] = _this;
                    }
                    else if (_this instanceof MarkerCluster) {
                        var overlay = _this.get(args[args.length - 1].getId());
                        if (!overlay) {
                            var markerJS = args[args.length - 1];
                            var markerId_3 = markerJS.getId();
                            var markerCluster = _this;
                            overlay = new Marker(markerCluster.getMap(), markerJS);
                            _this.get('_overlays')[markerId_3] = overlay;
                            markerJS.one(markerJS.getId() + '_remove', function () {
                                _this.get('_overlays')[markerId_3] = null;
                            });
                        }
                        args[args.length - 1] = overlay;
                    }
                    else {
                        args[args.length - 1] = _this._objectInstance.getMap().get('_overlays')[args[args.length - 1].getId()];
                    }
                }
                observer.next(args);
            });
        });
    };
    /**
     * Alias of `addEventListenerOnce`
     * @param key {string} The property name you want to observe.
     * @return {Promise<any>}
     */
    /**
       * Alias of `addEventListenerOnce`
       * @param key {string} The property name you want to observe.
       * @return {Promise<any>}
       */
    BaseClass.prototype.one = /**
       * Alias of `addEventListenerOnce`
       * @param key {string} The property name you want to observe.
       * @return {Promise<any>}
       */
    function (eventName) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._objectInstance.one(eventName, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (args[args.length - 1] instanceof GoogleMaps.getPlugin().BaseClass) {
                    if (args[args.length - 1].type === 'Map' || args[args.length - 1].type === 'StreetViewPanorama') {
                        args[args.length - 1] = _this;
                    }
                    else if (_this instanceof MarkerCluster) {
                        var overlay = _this.get(args[args.length - 1].getId());
                        if (!overlay) {
                            var markerJS = args[args.length - 1];
                            var markerId_4 = markerJS.getId();
                            var markerCluster = _this;
                            overlay = new Marker(markerCluster.getMap(), markerJS);
                            _this.get('_overlays')[markerId_4] = overlay;
                            markerJS.one(markerJS.getId() + '_remove', function () {
                                _this.get('_overlays')[markerId_4] = null;
                            });
                        }
                        args[args.length - 1] = overlay;
                    }
                    else {
                        args[args.length - 1] = _this._objectInstance.getMap().get('_overlays')[args[args.length - 1].getId()];
                    }
                }
                resolve(args);
            });
        });
    };
    /**
     * Clears all stored values
     */
    /**
       * Clears all stored values
       */
    BaseClass.prototype.empty = /**
       * Clears all stored values
       */
    function () { };
    /**
     * Dispatch event.
     * @param eventName {string} Event name
     * @param parameters {any} [options] The data you want to pass to event listerners.
     */
    /**
       * Dispatch event.
       * @param eventName {string} Event name
       * @param parameters {any} [options] The data you want to pass to event listerners.
       */
    BaseClass.prototype.trigger = /**
       * Dispatch event.
       * @param eventName {string} Event name
       * @param parameters {any} [options] The data you want to pass to event listerners.
       */
    function (eventName) {
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parameters[_i - 1] = arguments[_i];
        }
    };
    /**
     * Executes off() and empty()
     */
    /**
       * Executes off() and empty()
       */
    BaseClass.prototype.destroy = /**
       * Executes off() and empty()
       */
    function () {
        if (this._objectInstance.type === 'Map') {
            var map = this._objectInstance.getMap();
            if (map) {
                delete this._objectInstance.getMap().get('_overlays')[this._objectInstance.getId()];
            }
        }
        this._objectInstance.remove();
    };
    /**
     * Remove event listener(s)
     * The `removeEventListener()` has three usages:
     *  - removeEventListener("eventName", listenerFunction);
     *     This removes one particular event listener
     *  - removeEventListener("eventName");
     *     This removes the event listeners that added for the event name.
     *  - removeEventListener();
     *     This removes all listeners.
     *
     * @param eventName {string} [options] Event name
     * @param listener {Function} [options] Event listener
     */
    /**
       * Remove event listener(s)
       * The `removeEventListener()` has three usages:
       *  - removeEventListener("eventName", listenerFunction);
       *     This removes one particular event listener
       *  - removeEventListener("eventName");
       *     This removes the event listeners that added for the event name.
       *  - removeEventListener();
       *     This removes all listeners.
       *
       * @param eventName {string} [options] Event name
       * @param listener {Function} [options] Event listener
       */
    BaseClass.prototype.removeEventListener = /**
       * Remove event listener(s)
       * The `removeEventListener()` has three usages:
       *  - removeEventListener("eventName", listenerFunction);
       *     This removes one particular event listener
       *  - removeEventListener("eventName");
       *     This removes the event listeners that added for the event name.
       *  - removeEventListener();
       *     This removes all listeners.
       *
       * @param eventName {string} [options] Event name
       * @param listener {Function} [options] Event listener
       */
    function (eventName, listener) { };
    /**
     * Alias of `removeEventListener`
     *
     * @param eventName {string} [options] Event name
     * @param listener {Function} [options] Event listener
     */
    /**
       * Alias of `removeEventListener`
       *
       * @param eventName {string} [options] Event name
       * @param listener {Function} [options] Event listener
       */
    BaseClass.prototype.off = /**
       * Alias of `removeEventListener`
       *
       * @param eventName {string} [options] Event name
       * @param listener {Function} [options] Event listener
       */
    function (eventName, listener) { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])({ observable: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], BaseClass.prototype, "addEventListener", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], BaseClass.prototype, "addListenerOnce", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Object)
    ], BaseClass.prototype, "get", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, Boolean]),
        __metadata("design:returntype", void 0)
    ], BaseClass.prototype, "set", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, String, Boolean]),
        __metadata("design:returntype", void 0)
    ], BaseClass.prototype, "bindTo", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])({ observable: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], BaseClass.prototype, "on", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], BaseClass.prototype, "one", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BaseClass.prototype, "empty", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", void 0)
    ], BaseClass.prototype, "trigger", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BaseClass.prototype, "destroy", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Function]),
        __metadata("design:returntype", void 0)
    ], BaseClass.prototype, "removeEventListener", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Function]),
        __metadata("design:returntype", void 0)
    ], BaseClass.prototype, "off", null);
    /**
     * @hidden
     * https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/class/BaseClass/README.md
     */
    BaseClass = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            plugin: 'cordova-plugin-googlemaps',
            pluginName: 'GoogleMaps',
            pluginRef: 'plugin.google.maps.BaseClass',
            repo: ''
        })
    ], BaseClass);
    return BaseClass;
}());

/**
 * @hidden
 * https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/class/BaseArrayClass/README.md
 */
var BaseArrayClass = (function (_super) {
    __extends(BaseArrayClass, _super);
    function BaseArrayClass(initialData) {
        var _this = _super.call(this) || this;
        _this._objectInstance = (initialData instanceof GoogleMaps.getPlugin().BaseArrayClass) ?
            initialData : _this._objectInstance = new (GoogleMaps.getPlugin().BaseArrayClass)(initialData);
        return _this;
    }
    /**
     * Removes all elements from the array.
     * @param noNotify? {boolean} [options] Set true to prevent remove_at events.
     */
    /**
       * Removes all elements from the array.
       * @param noNotify? {boolean} [options] Set true to prevent remove_at events.
       */
    BaseArrayClass.prototype.empty = /**
       * Removes all elements from the array.
       * @param noNotify? {boolean} [options] Set true to prevent remove_at events.
       */
    function (noNotify) { };
    /**
     * Iterate over each element, calling the provided callback.
     * @param fn {Function}
     */
    /**
       * Iterate over each element, calling the provided callback.
       * @param fn {Function}
       */
    BaseArrayClass.prototype.forEach = /**
       * Iterate over each element, calling the provided callback.
       * @param fn {Function}
       */
    function (fn) { };
    /**
     * Iterate over each element, calling the provided callback.
     * @param fn {Function}
     * @return {Promise<void>}
     */
    /**
       * Iterate over each element, calling the provided callback.
       * @param fn {Function}
       * @return {Promise<void>}
       */
    BaseArrayClass.prototype.forEachAsync = /**
       * Iterate over each element, calling the provided callback.
       * @param fn {Function}
       * @return {Promise<void>}
       */
    function (fn) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._objectInstance.forEachAsync(fn, resolve);
        });
    };
    /**
     * Iterate over each element, then Returns a new value.
     * Then you can get the results of each callback.
     * @param fn {Function}
     * @return {Object[]} returns a new array with the results
     */
    /**
       * Iterate over each element, then Returns a new value.
       * Then you can get the results of each callback.
       * @param fn {Function}
       * @return {Object[]} returns a new array with the results
       */
    BaseArrayClass.prototype.map = /**
       * Iterate over each element, then Returns a new value.
       * Then you can get the results of each callback.
       * @param fn {Function}
       * @return {Object[]} returns a new array with the results
       */
    function (fn) { return; };
    /**
     * Iterate over each element, calling the provided callback.
     * Then you can get the results of each callback.
     * @param fn {Function}
     * @param callback {Function}
     * @return {Promise<any>} returns a new array with the results
     */
    /**
       * Iterate over each element, calling the provided callback.
       * Then you can get the results of each callback.
       * @param fn {Function}
       * @param callback {Function}
       * @return {Promise<any>} returns a new array with the results
       */
    BaseArrayClass.prototype.mapAsync = /**
       * Iterate over each element, calling the provided callback.
       * Then you can get the results of each callback.
       * @param fn {Function}
       * @param callback {Function}
       * @return {Promise<any>} returns a new array with the results
       */
    function (fn) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._objectInstance.mapAsync(fn, resolve);
        });
    };
    /**
     * Same as `mapAsync`, but keep the execution order
     * @param fn {Function}
     * @param callback {Function}
     * @return {Promise<any>} returns a new array with the results
     */
    /**
       * Same as `mapAsync`, but keep the execution order
       * @param fn {Function}
       * @param callback {Function}
       * @return {Promise<any>} returns a new array with the results
       */
    BaseArrayClass.prototype.mapSeries = /**
       * Same as `mapAsync`, but keep the execution order
       * @param fn {Function}
       * @param callback {Function}
       * @return {Promise<any>} returns a new array with the results
       */
    function (fn) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._objectInstance.mapSeries(fn, resolve);
        });
    };
    /**
     * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
     * @param fn {Function}
     * @return {T[]} returns a new filtered array
     */
    /**
       * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
       * @param fn {Function}
       * @return {T[]} returns a new filtered array
       */
    BaseArrayClass.prototype.filter = /**
       * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
       * @param fn {Function}
       * @return {T[]} returns a new filtered array
       */
    function (fn) { return; };
    /**
     * The filterAsync() method creates a new array with all elements that pass the test implemented by the provided function.
     * @param fn {Function}
     * @param callback {Function}
     * @return {Promise<T[]>} returns a new filtered array
     */
    /**
       * The filterAsync() method creates a new array with all elements that pass the test implemented by the provided function.
       * @param fn {Function}
       * @param callback {Function}
       * @return {Promise<T[]>} returns a new filtered array
       */
    BaseArrayClass.prototype.filterAsync = /**
       * The filterAsync() method creates a new array with all elements that pass the test implemented by the provided function.
       * @param fn {Function}
       * @param callback {Function}
       * @return {Promise<T[]>} returns a new filtered array
       */
    function (fn) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._objectInstance.filterAsync(fn, resolve);
        });
    };
    /**
     * Returns a reference to the underlying Array.
     * @return {Object[]}
     */
    /**
       * Returns a reference to the underlying Array.
       * @return {Object[]}
       */
    BaseArrayClass.prototype.getArray = /**
       * Returns a reference to the underlying Array.
       * @return {Object[]}
       */
    function () { return; };
    /**
     * Returns the element at the specified index.
     * @param index {number}
     * @return {Object}
     */
    /**
       * Returns the element at the specified index.
       * @param index {number}
       * @return {Object}
       */
    BaseArrayClass.prototype.getAt = /**
       * Returns the element at the specified index.
       * @param index {number}
       * @return {Object}
       */
    function (index) { };
    /**
     * Returns the number of the elements.
     * @return {number}
     */
    /**
       * Returns the number of the elements.
       * @return {number}
       */
    BaseArrayClass.prototype.getLength = /**
       * Returns the number of the elements.
       * @return {number}
       */
    function () { return; };
    /**
     * The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
     * @param element {Object}
     * @return {number}
     */
    /**
       * The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
       * @param element {Object}
       * @return {number}
       */
    BaseArrayClass.prototype.indexOf = /**
       * The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
       * @param element {Object}
       * @return {number}
       */
    function (element) { return; };
    /**
     * The reverse() method reverses an array in place.
     */
    /**
       * The reverse() method reverses an array in place.
       */
    BaseArrayClass.prototype.reverse = /**
       * The reverse() method reverses an array in place.
       */
    function () { };
    /**
     * The sort() method sorts the elements of an array in place and returns the array.
     */
    /**
       * The sort() method sorts the elements of an array in place and returns the array.
       */
    BaseArrayClass.prototype.sort = /**
       * The sort() method sorts the elements of an array in place and returns the array.
       */
    function () { };
    /**
     * Inserts an element at the specified index.
     * @param index {number}
     * @param element {Object}
     * @param noNotify? {boolean} [options] Set true to prevent insert_at event.
     * @return {Object}
     */
    /**
       * Inserts an element at the specified index.
       * @param index {number}
       * @param element {Object}
       * @param noNotify? {boolean} [options] Set true to prevent insert_at event.
       * @return {Object}
       */
    BaseArrayClass.prototype.insertAt = /**
       * Inserts an element at the specified index.
       * @param index {number}
       * @param element {Object}
       * @param noNotify? {boolean} [options] Set true to prevent insert_at event.
       * @return {Object}
       */
    function (index, element, noNotify) { };
    /**
     * Removes the last element of the array and returns that element.
     * @param noNotify? {boolean} [options] Set true to prevent remove_at event.
     * @return {Object}
     */
    /**
       * Removes the last element of the array and returns that element.
       * @param noNotify? {boolean} [options] Set true to prevent remove_at event.
       * @return {Object}
       */
    BaseArrayClass.prototype.pop = /**
       * Removes the last element of the array and returns that element.
       * @param noNotify? {boolean} [options] Set true to prevent remove_at event.
       * @return {Object}
       */
    function (noNotify) { return; };
    /**
     * Adds one element to the end of the array and returns the new length of the array.
     * @param element {object}
     * @param noNotify? {boolean} Set true to prevent insert_at events.
     */
    /**
       * Adds one element to the end of the array and returns the new length of the array.
       * @param element {object}
       * @param noNotify? {boolean} Set true to prevent insert_at events.
       */
    BaseArrayClass.prototype.push = /**
       * Adds one element to the end of the array and returns the new length of the array.
       * @param element {object}
       * @param noNotify? {boolean} Set true to prevent insert_at events.
       */
    function (element, noNotify) { };
    /**
     * Removes an element from the specified index.
     * @param index {number}
     * @param noNotify? {boolean} [options] Set true to prevent remove_at event.
     */
    /**
       * Removes an element from the specified index.
       * @param index {number}
       * @param noNotify? {boolean} [options] Set true to prevent remove_at event.
       */
    BaseArrayClass.prototype.removeAt = /**
       * Removes an element from the specified index.
       * @param index {number}
       * @param noNotify? {boolean} [options] Set true to prevent remove_at event.
       */
    function (index, noNotify) { return; };
    /**
     * Sets an element at the specified index.
     * @param index {number}
     * @param element {object}
     * @param noNotify? {boolean} [options] Set true to prevent set_at event.
     */
    /**
       * Sets an element at the specified index.
       * @param index {number}
       * @param element {object}
       * @param noNotify? {boolean} [options] Set true to prevent set_at event.
       */
    BaseArrayClass.prototype.setAt = /**
       * Sets an element at the specified index.
       * @param index {number}
       * @param element {object}
       * @param noNotify? {boolean} [options] Set true to prevent set_at event.
       */
    function (index, element, noNotify) { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], BaseArrayClass.prototype, "empty", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], BaseArrayClass.prototype, "forEach", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", Promise)
    ], BaseArrayClass.prototype, "forEachAsync", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", Array)
    ], BaseArrayClass.prototype, "map", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", Promise)
    ], BaseArrayClass.prototype, "mapAsync", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", Promise)
    ], BaseArrayClass.prototype, "mapSeries", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", Array)
    ], BaseArrayClass.prototype, "filter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", Promise)
    ], BaseArrayClass.prototype, "filterAsync", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Array)
    ], BaseArrayClass.prototype, "getArray", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Object)
    ], BaseArrayClass.prototype, "getAt", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], BaseArrayClass.prototype, "getLength", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Number)
    ], BaseArrayClass.prototype, "indexOf", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BaseArrayClass.prototype, "reverse", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BaseArrayClass.prototype, "sort", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Object, Boolean]),
        __metadata("design:returntype", void 0)
    ], BaseArrayClass.prototype, "insertAt", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", Object)
    ], BaseArrayClass.prototype, "pop", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Boolean]),
        __metadata("design:returntype", void 0)
    ], BaseArrayClass.prototype, "push", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Boolean]),
        __metadata("design:returntype", Object)
    ], BaseArrayClass.prototype, "removeAt", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Object, Boolean]),
        __metadata("design:returntype", void 0)
    ], BaseArrayClass.prototype, "setAt", null);
    /**
     * @hidden
     * https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/class/BaseArrayClass/README.md
     */
    BaseArrayClass = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            plugin: 'cordova-plugin-googlemaps',
            pluginName: 'GoogleMaps',
            pluginRef: 'plugin.google.maps.BaseArrayClass',
            repo: ''
        }),
        __metadata("design:paramtypes", [Object])
    ], BaseArrayClass);
    return BaseArrayClass;
}(BaseClass));

/**
 * @hidden
 * https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/class/Circle/README.md
 */
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle(_map, _objectInstance) {
        var _this = _super.call(this) || this;
        _this._map = _map;
        _this._objectInstance = _objectInstance;
        return _this;
    }
    /**
     * Returns the ID of instance.
     * @return {string}
     */
    /**
       * Returns the ID of instance.
       * @return {string}
       */
    Circle.prototype.getId = /**
       * Returns the ID of instance.
       * @return {string}
       */
    function () { return; };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    /**
       * Returns the map instance.
       * @return {GoogleMap}
       */
    Circle.prototype.getMap = /**
       * Returns the map instance.
       * @return {GoogleMap}
       */
    function () { return this._map; };
    /**
     * Changes the center position.
     * @param latLng {ILatLng}
     */
    /**
       * Changes the center position.
       * @param latLng {ILatLng}
       */
    Circle.prototype.setCenter = /**
       * Changes the center position.
       * @param latLng {ILatLng}
       */
    function (latLng) { };
    /**
     * Returns the current center position
     * @return {ILatLng}
     */
    /**
       * Returns the current center position
       * @return {ILatLng}
       */
    Circle.prototype.getCenter = /**
       * Returns the current center position
       * @return {ILatLng}
       */
    function () { return; };
    /**
     * Returns the current circle radius.
     * @return {number}
     */
    /**
       * Returns the current circle radius.
       * @return {number}
       */
    Circle.prototype.getRadius = /**
       * Returns the current circle radius.
       * @return {number}
       */
    function () { return; };
    /**
     * Changes the circle radius.
     * @param radius {number}
     */
    /**
       * Changes the circle radius.
       * @param radius {number}
       */
    Circle.prototype.setRadius = /**
       * Changes the circle radius.
       * @param radius {number}
       */
    function (radius) { };
    /**
     * Changes the filling color (inner color).
     * @param color {string}
     */
    /**
       * Changes the filling color (inner color).
       * @param color {string}
       */
    Circle.prototype.setFillColor = /**
       * Changes the filling color (inner color).
       * @param color {string}
       */
    function (color) { };
    /**
     * Returns the current circle filling color (inner color).
     * @return {string}
     */
    /**
       * Returns the current circle filling color (inner color).
       * @return {string}
       */
    Circle.prototype.getFillColor = /**
       * Returns the current circle filling color (inner color).
       * @return {string}
       */
    function () { return; };
    /**
     * Changes the stroke width.
     * @param strokeWidth {number}
     */
    /**
       * Changes the stroke width.
       * @param strokeWidth {number}
       */
    Circle.prototype.setStrokeWidth = /**
       * Changes the stroke width.
       * @param strokeWidth {number}
       */
    function (strokeWidth) { };
    /**
     * Returns the current circle stroke width (unit: pixel).
     * @return {number}
     */
    /**
       * Returns the current circle stroke width (unit: pixel).
       * @return {number}
       */
    Circle.prototype.getStrokeWidth = /**
       * Returns the current circle stroke width (unit: pixel).
       * @return {number}
       */
    function () { return; };
    /**
     * Changes the stroke color (outter color).
     * @param strokeColor {string}
     */
    /**
       * Changes the stroke color (outter color).
       * @param strokeColor {string}
       */
    Circle.prototype.setStrokeColor = /**
       * Changes the stroke color (outter color).
       * @param strokeColor {string}
       */
    function (strokeColor) { };
    /**
     * Returns the current circle stroke color (outer color).
     * @return {string}
     */
    /**
       * Returns the current circle stroke color (outer color).
       * @return {string}
       */
    Circle.prototype.getStrokeColor = /**
       * Returns the current circle stroke color (outer color).
       * @return {string}
       */
    function () { return; };
    /**
     * Changes click-ability of the circle.
     * @param clickable {boolean}
     */
    /**
       * Changes click-ability of the circle.
       * @param clickable {boolean}
       */
    Circle.prototype.setClickable = /**
       * Changes click-ability of the circle.
       * @param clickable {boolean}
       */
    function (clickable) { };
    /**
     * Returns true if the circle is clickable.
     * @return {boolean}
     */
    /**
       * Returns true if the circle is clickable.
       * @return {boolean}
       */
    Circle.prototype.getClickable = /**
       * Returns true if the circle is clickable.
       * @return {boolean}
       */
    function () { return; };
    /**
     * Changes the circle zIndex order.
     * @param zIndex {number}
     */
    /**
       * Changes the circle zIndex order.
       * @param zIndex {number}
       */
    Circle.prototype.setZIndex = /**
       * Changes the circle zIndex order.
       * @param zIndex {number}
       */
    function (zIndex) { };
    /**
     * Returns the current circle zIndex.
     * @return {number}
     */
    /**
       * Returns the current circle zIndex.
       * @return {number}
       */
    Circle.prototype.getZIndex = /**
       * Returns the current circle zIndex.
       * @return {number}
       */
    function () { return; };
    /**
     * Remove the circle.
     */
    /**
       * Remove the circle.
       */
    Circle.prototype.remove = /**
       * Remove the circle.
       */
    function () { };
    /**
     * Returns the latLngBounds (rectangle) that contains the circle.
     * @return {LatLngBounds}
     */
    /**
       * Returns the latLngBounds (rectangle) that contains the circle.
       * @return {LatLngBounds}
       */
    Circle.prototype.getBounds = /**
       * Returns the latLngBounds (rectangle) that contains the circle.
       * @return {LatLngBounds}
       */
    function () { return; };
    /**
     * Set circle visibility
     * @param visible {boolean}
     */
    /**
       * Set circle visibility
       * @param visible {boolean}
       */
    Circle.prototype.setVisible = /**
       * Set circle visibility
       * @param visible {boolean}
       */
    function (visible) { };
    /**
     * Returns true if the circle is visible.
     * @return {boolean}
     */
    /**
       * Returns true if the circle is visible.
       * @return {boolean}
       */
    Circle.prototype.getVisible = /**
       * Returns true if the circle is visible.
       * @return {boolean}
       */
    function () { return; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Circle.prototype, "getId", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Circle.prototype, "setCenter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], Circle.prototype, "getCenter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], Circle.prototype, "getRadius", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Circle.prototype, "setRadius", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Circle.prototype, "setFillColor", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Circle.prototype, "getFillColor", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Circle.prototype, "setStrokeWidth", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], Circle.prototype, "getStrokeWidth", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Circle.prototype, "setStrokeColor", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Circle.prototype, "getStrokeColor", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Circle.prototype, "setClickable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Circle.prototype, "getClickable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Circle.prototype, "setZIndex", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], Circle.prototype, "getZIndex", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Circle.prototype, "remove", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", LatLngBounds)
    ], Circle.prototype, "getBounds", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Circle.prototype, "setVisible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Circle.prototype, "getVisible", null);
    return Circle;
}(BaseClass));

/**
 * @hidden
 */
var Environment = (function () {
    function Environment() {
    }
    Environment_1 = Environment;
    /**
     * Set environment variables.
     */
    /**
       * Set environment variables.
       */
    Environment.setEnv = /**
       * Set environment variables.
       */
    function (envOptions) {
        GoogleMaps.getPlugin().environment.setEnv(envOptions);
    };
    /**
     * Get the open source software license information for Google Maps SDK for iOS.
     * @return {Promise<any>}
     */
    /**
       * Get the open source software license information for Google Maps SDK for iOS.
       * @return {Promise<any>}
       */
    Environment.getLicenseInfo = /**
       * Get the open source software license information for Google Maps SDK for iOS.
       * @return {Promise<any>}
       */
    function () {
        return new Promise(function (resolve) {
            GoogleMaps.getPlugin().environment.getLicenseInfo(function (text) { return resolve(text); });
        });
    };
    /**
     * @deprecation
     * @hidden
     */
    /**
       * @deprecation
       * @hidden
       */
    Environment.prototype.getLicenseInfo = /**
       * @deprecation
       * @hidden
       */
    function () {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Environment.getLicenseInfo()');
        return Environment_1.getLicenseInfo();
    };
    /**
     * Specifies the background color of the app.
     * @param color
     */
    /**
       * Specifies the background color of the app.
       * @param color
       */
    Environment.setBackgroundColor = /**
       * Specifies the background color of the app.
       * @param color
       */
    function (color) {
        GoogleMaps.getPlugin().environment.setBackgroundColor(color);
    };
    /**
     * @deprecation
     * @hidden
     */
    /**
       * @deprecation
       * @hidden
       */
    Environment.prototype.setBackgroundColor = /**
       * @deprecation
       * @hidden
       */
    function (color) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Environment.setBackgroundColor()');
        Environment_1.setBackgroundColor(color);
    };
    /**
     * @hidden
     */
    Environment = Environment_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            plugin: 'cordova-plugin-googlemaps',
            pluginName: 'GoogleMaps',
            pluginRef: 'plugin.google.maps.environment',
            repo: ''
        })
    ], Environment);
    return Environment;
    var Environment_1;
}());

/**
 * @hidden
 */
var Geocoder = (function () {
    function Geocoder() {
    }
    Geocoder_1 = Geocoder;
    /**
     * @deprecation
     * @hidden
     */
    /**
       * @deprecation
       * @hidden
       */
    Geocoder.prototype.geocode = /**
       * @deprecation
       * @hidden
       */
    function (request) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Geocoder.geocode()');
        return Geocoder_1.geocode(request);
    };
    /**
     * Converts position to address and vice versa
     * @param {GeocoderRequest} request Request object with either an address or a position
     * @return {Promise<GeocoderResult[] | BaseArrayClass<GeocoderResult>>}
     */
    /**
       * Converts position to address and vice versa
       * @param {GeocoderRequest} request Request object with either an address or a position
       * @return {Promise<GeocoderResult[] | BaseArrayClass<GeocoderResult>>}
       */
    Geocoder.geocode = /**
       * Converts position to address and vice versa
       * @param {GeocoderRequest} request Request object with either an address or a position
       * @return {Promise<GeocoderResult[] | BaseArrayClass<GeocoderResult>>}
       */
    function (request) {
        if (request.address instanceof Array || Array.isArray(request.address) ||
            request.position instanceof Array || Array.isArray(request.position)) {
            // -------------------------
            // Geocoder.geocode({
            //   address: [
            //    "Kyoto, Japan",
            //    "Tokyo, Japan"
            //   ]
            // })
            // -------------------------
            return new Promise(function (resolve, reject) {
                GoogleMaps.getPlugin().Geocoder.geocode(request, function (mvcArray) {
                    if (mvcArray) {
                        resolve(new BaseArrayClass(mvcArray));
                    }
                    else {
                        reject();
                    }
                });
            });
        }
        else {
            // -------------------------
            // Geocoder.geocode({
            //   address: "Kyoto, Japan"
            // })
            // -------------------------
            return new Promise(function (resolve, reject) {
                GoogleMaps.getPlugin().Geocoder.geocode(request, function (results) {
                    if (results) {
                        resolve(results);
                    }
                    else {
                        reject();
                    }
                });
            });
        }
    };
    /**
     * @hidden
     */
    Geocoder = Geocoder_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            pluginName: 'GoogleMaps',
            pluginRef: 'plugin.google.maps.Geocoder',
            plugin: 'cordova-plugin-googlemaps',
            repo: ''
        })
    ], Geocoder);
    return Geocoder;
    var Geocoder_1;
}());

/**
 * @hidden
 */
var LocationService = (function () {
    function LocationService() {
    }
    /**
     * Get the current device location without map
     * @return {Promise<MyLocation>}
     */
    /**
       * Get the current device location without map
       * @return {Promise<MyLocation>}
       */
    LocationService.getMyLocation = /**
       * Get the current device location without map
       * @return {Promise<MyLocation>}
       */
    function (options) {
        return new Promise(function (resolve, reject) {
            GoogleMaps.getPlugin().LocationService.getMyLocation(options, resolve, reject);
        });
    };
    /**
     * Return true if the application has geolocation permission
     * @return {Promise<boolean>}
     */
    /**
       * Return true if the application has geolocation permission
       * @return {Promise<boolean>}
       */
    LocationService.hasPermission = /**
       * Return true if the application has geolocation permission
       * @return {Promise<boolean>}
       */
    function () {
        return new Promise(function (resolve, reject) {
            GoogleMaps.getPlugin().LocationService.hasPermission(resolve, reject);
        });
    };
    /**
     * @hidden
     */
    LocationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            pluginName: 'GoogleMaps',
            pluginRef: 'plugin.google.maps.LocationService',
            plugin: 'cordova-plugin-googlemaps',
            repo: ''
        })
    ], LocationService);
    return LocationService;
}());

/**
 * @hidden
 */
var Encoding = (function () {
    function Encoding() {
    }
    Encoding_1 = Encoding;
    /**
     * @deprecation
     * @hidden
     */
    /**
       * @deprecation
       * @hidden
       */
    Encoding.prototype.decodePath = /**
       * @deprecation
       * @hidden
       */
    function (encoded, precision) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Encoding.decodePath()');
        return Encoding_1.decodePath(encoded, precision);
    };
    /**
     * @deprecation
     * @hidden
     */
    /**
       * @deprecation
       * @hidden
       */
    Encoding.prototype.encodePath = /**
       * @deprecation
       * @hidden
       */
    function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Encoding.encodePath()');
        return Encoding_1.encodePath(path);
    };
    /**
     * Decodes an encoded path string into a sequence of LatLngs.
     * @param encoded {string} an encoded path string
     * @param precision? {number} default: 5
     * @return {ILatLng[]}
     */
    /**
       * Decodes an encoded path string into a sequence of LatLngs.
       * @param encoded {string} an encoded path string
       * @param precision? {number} default: 5
       * @return {ILatLng[]}
       */
    Encoding.decodePath = /**
       * Decodes an encoded path string into a sequence of LatLngs.
       * @param encoded {string} an encoded path string
       * @param precision? {number} default: 5
       * @return {ILatLng[]}
       */
    function (encoded, precision) {
        return GoogleMaps.getPlugin().geometry.encoding.decodePath(encoded, precision);
    };
    /**
     * Encodes a sequence of LatLngs into an encoded path string.
     * @param path {ILatLng[] | BaseArrayClass<ILatLng>} a sequence of LatLngs
     * @return {string}
     */
    /**
       * Encodes a sequence of LatLngs into an encoded path string.
       * @param path {ILatLng[] | BaseArrayClass<ILatLng>} a sequence of LatLngs
       * @return {string}
       */
    Encoding.encodePath = /**
       * Encodes a sequence of LatLngs into an encoded path string.
       * @param path {ILatLng[] | BaseArrayClass<ILatLng>} a sequence of LatLngs
       * @return {string}
       */
    function (path) {
        return GoogleMaps.getPlugin().geometry.encoding.encodePath(path);
    };
    /**
     * @hidden
     */
    Encoding = Encoding_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            pluginName: 'GoogleMaps',
            pluginRef: 'plugin.google.maps.geometry.encoding',
            plugin: 'cordova-plugin-googlemaps',
            repo: ''
        })
    ], Encoding);
    return Encoding;
    var Encoding_1;
}());

/**
 * @hidden
 */
var Poly = (function () {
    function Poly() {
    }
    /**
     * Returns true if the specified location is in the polygon path
     * @param location {ILatLng}
     * @param path {ILatLng[]}
     * @return {boolean}
     */
    /**
       * Returns true if the specified location is in the polygon path
       * @param location {ILatLng}
       * @param path {ILatLng[]}
       * @return {boolean}
       */
    Poly.containsLocation = /**
       * Returns true if the specified location is in the polygon path
       * @param location {ILatLng}
       * @param path {ILatLng[]}
       * @return {boolean}
       */
    function (location, path) {
        return GoogleMaps.getPlugin().geometry.poly.containsLocation(location, path);
    };
    /**
     * Returns true if the specified location is on the polyline path
     * @param location {ILatLng}
     * @param path {ILatLng[]}
     * @return {boolean}
     */
    /**
       * Returns true if the specified location is on the polyline path
       * @param location {ILatLng}
       * @param path {ILatLng[]}
       * @return {boolean}
       */
    Poly.isLocationOnEdge = /**
       * Returns true if the specified location is on the polyline path
       * @param location {ILatLng}
       * @param path {ILatLng[]}
       * @return {boolean}
       */
    function (location, path) {
        return GoogleMaps.getPlugin().geometry.poly.isLocationOnEdge(location, path);
    };
    /**
     * @hidden
     */
    Poly = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            pluginName: 'GoogleMaps',
            pluginRef: 'plugin.google.maps.geometry.poly',
            plugin: 'cordova-plugin-googlemaps',
            repo: ''
        })
    ], Poly);
    return Poly;
}());

/**
 * @hidden
 */
var Spherical = (function () {
    function Spherical() {
    }
    Spherical_1 = Spherical;
    /**
     * @deprecation
     * @hidden
     */
    /**
       * @deprecation
       * @hidden
       */
    Spherical.prototype.computeDistanceBetween = /**
       * @deprecation
       * @hidden
       */
    function (from, to) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeDistanceBetween()');
        return Spherical_1.computeDistanceBetween(from, to);
    };
    /**
     * @deprecation
     * @hidden
     */
    /**
       * @deprecation
       * @hidden
       */
    Spherical.prototype.computeOffset = /**
       * @deprecation
       * @hidden
       */
    function (from, distance, heading) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeOffset()');
        return Spherical_1.computeOffset(from, distance, heading);
    };
    /**
     * @deprecation
     * @hidden
     */
    /**
       * @deprecation
       * @hidden
       */
    Spherical.prototype.computeOffsetOrigin = /**
       * @deprecation
       * @hidden
       */
    function (to, distance, heading) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeOffsetOrigin()');
        return Spherical_1.computeOffsetOrigin(to, distance, heading);
    };
    /**
     * @deprecation
     * @hidden
     */
    /**
       * @deprecation
       * @hidden
       */
    Spherical.prototype.computeLength = /**
       * @deprecation
       * @hidden
       */
    function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeLength()');
        return Spherical_1.computeLength(path);
    };
    /**
     * @deprecation
     * @hidden
     */
    /**
       * @deprecation
       * @hidden
       */
    Spherical.prototype.computeArea = /**
       * @deprecation
       * @hidden
       */
    function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeArea()');
        return Spherical_1.computeArea(path);
    };
    /**
     * @deprecation
     * @hidden
     */
    /**
       * @deprecation
       * @hidden
       */
    Spherical.prototype.computeSignedArea = /**
       * @deprecation
       * @hidden
       */
    function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeSignedArea()');
        return Spherical_1.computeSignedArea(path);
    };
    /**
     * @deprecation
     * @hidden
     */
    /**
       * @deprecation
       * @hidden
       */
    Spherical.prototype.computeHeading = /**
       * @deprecation
       * @hidden
       */
    function (from, to) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeHeading()');
        return Spherical_1.computeHeading(from, to);
    };
    /**
     * @deprecation
     * @hidden
     */
    /**
       * @deprecation
       * @hidden
       */
    Spherical.prototype.interpolate = /**
       * @deprecation
       * @hidden
       */
    function (from, to, fraction) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.interpolate()');
        return Spherical_1.interpolate(from, to, fraction);
    };
    /**
     * Returns the distance, in meters, between two LatLngs.
     * @param locationA {ILatLng}
     * @param locationB {ILatLng}
     * @return {number}
     */
    /**
       * Returns the distance, in meters, between two LatLngs.
       * @param locationA {ILatLng}
       * @param locationB {ILatLng}
       * @return {number}
       */
    Spherical.computeDistanceBetween = /**
       * Returns the distance, in meters, between two LatLngs.
       * @param locationA {ILatLng}
       * @param locationB {ILatLng}
       * @return {number}
       */
    function (from, to) {
        return GoogleMaps.getPlugin().geometry.spherical.computeDistanceBetween(from, to);
    };
    /**
     * Returns the LatLng resulting from moving a distance from an origin in the specified heading (expressed in degrees clockwise from north)
     * @param from {ILatLng}
     * @param distance {number}
     * @param heading {number}
     * @return {LatLng}
     */
    /**
       * Returns the LatLng resulting from moving a distance from an origin in the specified heading (expressed in degrees clockwise from north)
       * @param from {ILatLng}
       * @param distance {number}
       * @param heading {number}
       * @return {LatLng}
       */
    Spherical.computeOffset = /**
       * Returns the LatLng resulting from moving a distance from an origin in the specified heading (expressed in degrees clockwise from north)
       * @param from {ILatLng}
       * @param distance {number}
       * @param heading {number}
       * @return {LatLng}
       */
    function (from, distance, heading) {
        return GoogleMaps.getPlugin().geometry.spherical.computeOffset(from, distance, heading);
    };
    /**
     * Returns the location of origin when provided with a LatLng destination, meters travelled and original heading. Headings are expressed in degrees clockwise from North. This function returns null when no solution is available.
     * @param to {ILatLng} The destination LatLng.
     * @param distance {number} The distance travelled, in meters.
     * @param heading {number} The heading in degrees clockwise from north.
     * @return {LatLng}
     */
    /**
       * Returns the location of origin when provided with a LatLng destination, meters travelled and original heading. Headings are expressed in degrees clockwise from North. This function returns null when no solution is available.
       * @param to {ILatLng} The destination LatLng.
       * @param distance {number} The distance travelled, in meters.
       * @param heading {number} The heading in degrees clockwise from north.
       * @return {LatLng}
       */
    Spherical.computeOffsetOrigin = /**
       * Returns the location of origin when provided with a LatLng destination, meters travelled and original heading. Headings are expressed in degrees clockwise from North. This function returns null when no solution is available.
       * @param to {ILatLng} The destination LatLng.
       * @param distance {number} The distance travelled, in meters.
       * @param heading {number} The heading in degrees clockwise from north.
       * @return {LatLng}
       */
    function (to, distance, heading) {
        return GoogleMaps.getPlugin().geometry.spherical.computeOffsetOrigin(to, distance, heading);
    };
    /**
     * Returns the length of the given path.
     * @param path {ILatLng[] | BaseArrayClass<ILatLng>}
     * @return {number}
     */
    /**
       * Returns the length of the given path.
       * @param path {ILatLng[] | BaseArrayClass<ILatLng>}
       * @return {number}
       */
    Spherical.computeLength = /**
       * Returns the length of the given path.
       * @param path {ILatLng[] | BaseArrayClass<ILatLng>}
       * @return {number}
       */
    function (path) {
        return GoogleMaps.getPlugin().geometry.spherical.computeLength(path);
    };
    /**
     * Returns the area of a closed path. The computed area uses the same units as the radius.
     * @param path {ILatLng[] | BaseArrayClass<ILatLng>}.
     * @return {number}
     */
    /**
       * Returns the area of a closed path. The computed area uses the same units as the radius.
       * @param path {ILatLng[] | BaseArrayClass<ILatLng>}.
       * @return {number}
       */
    Spherical.computeArea = /**
       * Returns the area of a closed path. The computed area uses the same units as the radius.
       * @param path {ILatLng[] | BaseArrayClass<ILatLng>}.
       * @return {number}
       */
    function (path) {
        return GoogleMaps.getPlugin().geometry.spherical.computeArea(path);
    };
    /**
     * Returns the signed area of a closed path. The signed area may be used to determine the orientation of the path.
     * @param path {ILatLng[] | BaseArrayClass<ILatLng>}.
     * @return {number}
     */
    /**
       * Returns the signed area of a closed path. The signed area may be used to determine the orientation of the path.
       * @param path {ILatLng[] | BaseArrayClass<ILatLng>}.
       * @return {number}
       */
    Spherical.computeSignedArea = /**
       * Returns the signed area of a closed path. The signed area may be used to determine the orientation of the path.
       * @param path {ILatLng[] | BaseArrayClass<ILatLng>}.
       * @return {number}
       */
    function (path) {
        return GoogleMaps.getPlugin().geometry.spherical.computeSignedArea(path);
    };
    /**
     * Returns the heading from one LatLng to another LatLng. Headings are expressed in degrees clockwise from North within the range (-180,180).
     * @param from {ILatLng}
     * @param to {ILatLng}
     * @return {number}
     */
    /**
       * Returns the heading from one LatLng to another LatLng. Headings are expressed in degrees clockwise from North within the range (-180,180).
       * @param from {ILatLng}
       * @param to {ILatLng}
       * @return {number}
       */
    Spherical.computeHeading = /**
       * Returns the heading from one LatLng to another LatLng. Headings are expressed in degrees clockwise from North within the range (-180,180).
       * @param from {ILatLng}
       * @param to {ILatLng}
       * @return {number}
       */
    function (from, to) {
        return GoogleMaps.getPlugin().geometry.spherical.computeHeading(from, to);
    };
    /**
     * Returns the LatLng which lies the given fraction of the way between the origin LatLng and the destination LatLng.
     * @param from {ILatLng}     The LatLng from which to start.
     * @param to {ILatLng}       The LatLng toward which to travel.
     * @param fraction {number}  A fraction of the distance to travel from 0.0 to 1.0 .
     * @return {LatLng}
     */
    /**
       * Returns the LatLng which lies the given fraction of the way between the origin LatLng and the destination LatLng.
       * @param from {ILatLng}     The LatLng from which to start.
       * @param to {ILatLng}       The LatLng toward which to travel.
       * @param fraction {number}  A fraction of the distance to travel from 0.0 to 1.0 .
       * @return {LatLng}
       */
    Spherical.interpolate = /**
       * Returns the LatLng which lies the given fraction of the way between the origin LatLng and the destination LatLng.
       * @param from {ILatLng}     The LatLng from which to start.
       * @param to {ILatLng}       The LatLng toward which to travel.
       * @param fraction {number}  A fraction of the distance to travel from 0.0 to 1.0 .
       * @return {LatLng}
       */
    function (from, to, fraction) {
        return GoogleMaps.getPlugin().geometry.spherical.interpolate(from, to, fraction);
    };
    /**
     * @hidden
     */
    Spherical = Spherical_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            pluginName: 'GoogleMaps',
            pluginRef: 'plugin.google.maps.geometry.spherical',
            plugin: 'cordova-plugin-googlemaps',
            repo: ''
        })
    ], Spherical);
    return Spherical;
    var Spherical_1;
}());

/**
 * @hidden
 */
var StreetViewPanorama = (function (_super) {
    __extends(StreetViewPanorama, _super);
    function StreetViewPanorama(element, options) {
        var _this = _super.call(this) || this;
        if (Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["i" /* checkAvailability */])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
            if (element instanceof HTMLElement) {
                _this._objectInstance = GoogleMaps.getPlugin().StreetView.getPanorama(element, options);
            }
            else if (typeof element === 'string') {
                _this._objectInstance = GoogleMaps.getPlugin().StreetView.getPanorama(new Promise(function (resolve, reject) {
                    var count = 0;
                    var timer = setInterval(function () {
                        var target = document.querySelector('.show-page #' + element);
                        if (target) {
                            clearInterval(timer);
                            resolve([target, options]);
                        }
                        else {
                            if (count++ < 20) {
                                return;
                            }
                            clearInterval(timer);
                            _this._objectInstance.remove();
                            console.error('Can not find the element [#' + element + ']');
                            reject();
                        }
                    }, 100);
                }), options);
            }
        }
        return _this;
    }
    /**
     * Sets the point of view for the Street View panorama.
     */
    /**
       * Sets the point of view for the Street View panorama.
       */
    StreetViewPanorama.prototype.setPov = /**
       * Sets the point of view for the Street View panorama.
       */
    function (pov) { };
    /**
     * Sets the StreetViewPanorama to a given location.
     */
    /**
       * Sets the StreetViewPanorama to a given location.
       */
    StreetViewPanorama.prototype.setPosition = /**
       * Sets the StreetViewPanorama to a given location.
       */
    function (cameraPosition) { };
    /**
     * Toggles the ability for users to use pan around on the panorama using gestures.
     * @param gestureEnable {boolean}
     */
    /**
       * Toggles the ability for users to use pan around on the panorama using gestures.
       * @param gestureEnable {boolean}
       */
    StreetViewPanorama.prototype.setPanningGesturesEnabled = /**
       * Toggles the ability for users to use pan around on the panorama using gestures.
       * @param gestureEnable {boolean}
       */
    function (gestureEnable) { };
    /**
     * Retrun true if the panning gesture is enabled.
     * @return {boolean}
     */
    /**
       * Retrun true if the panning gesture is enabled.
       * @return {boolean}
       */
    StreetViewPanorama.prototype.getPanningGesturesEnabled = /**
       * Retrun true if the panning gesture is enabled.
       * @return {boolean}
       */
    function () { return; };
    /**
     * Toggles the ability for users to zoom on the panorama using gestures.
     * @param gestureEnable {boolean}
     */
    /**
       * Toggles the ability for users to zoom on the panorama using gestures.
       * @param gestureEnable {boolean}
       */
    StreetViewPanorama.prototype.setZoomGesturesEnabled = /**
       * Toggles the ability for users to zoom on the panorama using gestures.
       * @param gestureEnable {boolean}
       */
    function (gestureEnable) { };
    /**
     * Retrun true if the zooming gesture is enabled.
     * @return {boolean}
     */
    /**
       * Retrun true if the zooming gesture is enabled.
       * @return {boolean}
       */
    StreetViewPanorama.prototype.getZoomGesturesEnabled = /**
       * Retrun true if the zooming gesture is enabled.
       * @return {boolean}
       */
    function () { return; };
    /**
     * Toggles the ability for users to see street names on the panorama.
     * @param gestureEnable {boolean}
     */
    /**
       * Toggles the ability for users to see street names on the panorama.
       * @param gestureEnable {boolean}
       */
    StreetViewPanorama.prototype.setStreetNamesEnabled = /**
       * Toggles the ability for users to see street names on the panorama.
       * @param gestureEnable {boolean}
       */
    function (gestureEnable) { };
    /**
     * Retrun true if the street names control is enabled.
     * @return {boolean}
     */
    /**
       * Retrun true if the street names control is enabled.
       * @return {boolean}
       */
    StreetViewPanorama.prototype.getStreetNamesEnabled = /**
       * Retrun true if the street names control is enabled.
       * @return {boolean}
       */
    function () { return; };
    /**
     * Toggles the ability for users to move between panoramas.
     * @param gestureEnable {boolean}
     */
    /**
       * Toggles the ability for users to move between panoramas.
       * @param gestureEnable {boolean}
       */
    StreetViewPanorama.prototype.setNavigationEnabled = /**
       * Toggles the ability for users to move between panoramas.
       * @param gestureEnable {boolean}
       */
    function (gestureEnable) { };
    /**
     * Retrun true if the navigation control is enabled.
     * @return {boolean}
     */
    /**
       * Retrun true if the navigation control is enabled.
       * @return {boolean}
       */
    StreetViewPanorama.prototype.getNavigationEnabled = /**
       * Retrun true if the navigation control is enabled.
       * @return {boolean}
       */
    function () { return; };
    /**
     * Retrun the navigation links (StreetViewLocation.links)
     * @return {StreetViewNavigationLink[]}
     */
    /**
       * Retrun the navigation links (StreetViewLocation.links)
       * @return {StreetViewNavigationLink[]}
       */
    StreetViewPanorama.prototype.getLinks = /**
       * Retrun the navigation links (StreetViewLocation.links)
       * @return {StreetViewNavigationLink[]}
       */
    function () { return; };
    /**
     * Retrun the current location
     * @return {StreetViewLocation}
     */
    /**
       * Retrun the current location
       * @return {StreetViewLocation}
       */
    StreetViewPanorama.prototype.getLocation = /**
       * Retrun the current location
       * @return {StreetViewLocation}
       */
    function () { return; };
    /**
     * Retrun the current panorama id
     * @return {string}
     */
    /**
       * Retrun the current panorama id
       * @return {string}
       */
    StreetViewPanorama.prototype.getPano = /**
       * Retrun the current panorama id
       * @return {string}
       */
    function () { return; };
    /**
     * Retrun the current position (StreetViewLocation.latLng)
     * @return {string}
     */
    /**
       * Retrun the current position (StreetViewLocation.latLng)
       * @return {string}
       */
    StreetViewPanorama.prototype.getPosition = /**
       * Retrun the current position (StreetViewLocation.latLng)
       * @return {string}
       */
    function () { return; };
    /**
     * Destroy a map completely
     * @return {Promise<any>}
     */
    /**
       * Destroy a map completely
       * @return {Promise<any>}
       */
    StreetViewPanorama.prototype.remove = /**
       * Destroy a map completely
       * @return {Promise<any>}
       */
    function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._objectInstance.remove(function () { return resolve(); });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], StreetViewPanorama.prototype, "setPov", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], StreetViewPanorama.prototype, "setPosition", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], StreetViewPanorama.prototype, "setPanningGesturesEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], StreetViewPanorama.prototype, "getPanningGesturesEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], StreetViewPanorama.prototype, "setZoomGesturesEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], StreetViewPanorama.prototype, "getZoomGesturesEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], StreetViewPanorama.prototype, "setStreetNamesEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], StreetViewPanorama.prototype, "getStreetNamesEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], StreetViewPanorama.prototype, "setNavigationEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], StreetViewPanorama.prototype, "getNavigationEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Array)
    ], StreetViewPanorama.prototype, "getLinks", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], StreetViewPanorama.prototype, "getLocation", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], StreetViewPanorama.prototype, "getPano", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], StreetViewPanorama.prototype, "getPosition", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], StreetViewPanorama.prototype, "remove", null);
    /**
     * @hidden
     */
    StreetViewPanorama = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            pluginName: 'StreetViewPanorama',
            plugin: 'cordova-plugin-googlemaps'
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], StreetViewPanorama);
    return StreetViewPanorama;
}(BaseClass));

/**
 * @hidden
 */
var GoogleMap = (function (_super) {
    __extends(GoogleMap, _super);
    function GoogleMap(element, options) {
        var _this = _super.call(this) || this;
        if (Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["i" /* checkAvailability */])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
            if (element instanceof HTMLElement) {
                _this._objectInstance = GoogleMaps.getPlugin().Map.getMap(element, options);
            }
            else if (typeof element === 'string') {
                _this._objectInstance = GoogleMaps.getPlugin().Map.getMap(new Promise(function (resolve, reject) {
                    var count = 0;
                    var timer = setInterval(function () {
                        var target = document.querySelector('.show-page #' + element);
                        if (target) {
                            clearInterval(timer);
                            resolve([target, options]);
                        }
                        else {
                            if (count++ < 20) {
                                return;
                            }
                            clearInterval(timer);
                            _this._objectInstance.remove();
                            console.error('Can not find the element [#' + element + ']');
                            reject();
                        }
                    }, 100);
                }), options);
            }
            else if (element === null && options) {
                _this._objectInstance = GoogleMaps.getPlugin().Map.getMap(null, options);
            }
        }
        return _this;
    }
    /**
     * Changes the map div
     * @param domNode {HTMLElement | string} [options] If you want to display the map in an html element, you need to specify an element or id. If omit this argument, the map is detached from webview.
     */
    /**
       * Changes the map div
       * @param domNode {HTMLElement | string} [options] If you want to display the map in an html element, you need to specify an element or id. If omit this argument, the map is detached from webview.
       */
    GoogleMap.prototype.setDiv = /**
       * Changes the map div
       * @param domNode {HTMLElement | string} [options] If you want to display the map in an html element, you need to specify an element or id. If omit this argument, the map is detached from webview.
       */
    function (domNode) {
        if (typeof domNode === 'string') {
            this._objectInstance.setDiv(document.querySelector('.show-page #' + domNode));
        }
        else {
            this._objectInstance.setDiv(domNode);
        }
    };
    /**
     * Returns the map HTML element
     * @return {HTMLElement}
     */
    /**
       * Returns the map HTML element
       * @return {HTMLElement}
       */
    GoogleMap.prototype.getDiv = /**
       * Returns the map HTML element
       * @return {HTMLElement}
       */
    function () { return; };
    /**
     * Changes the map type id
     * @param mapTypeId {string}
     */
    /**
       * Changes the map type id
       * @param mapTypeId {string}
       */
    GoogleMap.prototype.setMapTypeId = /**
       * Changes the map type id
       * @param mapTypeId {string}
       */
    function (mapTypeId) { };
    /**
     * Moves the camera with animation
     * @return {Promise<any>}
     */
    /**
       * Moves the camera with animation
       * @return {Promise<any>}
       */
    GoogleMap.prototype.animateCamera = /**
       * Moves the camera with animation
       * @return {Promise<any>}
       */
    function (cameraPosition) { return; };
    /**
     * Zooming in the camera with animation
     * @return {Promise<any>}
     */
    /**
       * Zooming in the camera with animation
       * @return {Promise<any>}
       */
    GoogleMap.prototype.animateCameraZoomIn = /**
       * Zooming in the camera with animation
       * @return {Promise<any>}
       */
    function () { return; };
    /**
     * Zooming out the camera with animation
     * @return {Promise<any>}
     */
    /**
       * Zooming out the camera with animation
       * @return {Promise<any>}
       */
    GoogleMap.prototype.animateCameraZoomOut = /**
       * Zooming out the camera with animation
       * @return {Promise<any>}
       */
    function () { return; };
    /**
     * Moves the camera without animation
     * @return {Promise<any>}
     */
    /**
       * Moves the camera without animation
       * @return {Promise<any>}
       */
    GoogleMap.prototype.moveCamera = /**
       * Moves the camera without animation
       * @return {Promise<any>}
       */
    function (cameraPosition) { return; };
    /**
     * Zooming in the camera without animation
     * @return {Promise<any>}
     */
    /**
       * Zooming in the camera without animation
       * @return {Promise<any>}
       */
    GoogleMap.prototype.moveCameraZoomIn = /**
       * Zooming in the camera without animation
       * @return {Promise<any>}
       */
    function () { return; };
    /**
     * Zooming out the camera without animation
     * @return {Promise<any>}
     */
    /**
       * Zooming out the camera without animation
       * @return {Promise<any>}
       */
    GoogleMap.prototype.moveCameraZoomOut = /**
       * Zooming out the camera without animation
       * @return {Promise<any>}
       */
    function () { return; };
    /**
     * Get the position of the camera.
     * @return {CameraPosition}
     */
    /**
       * Get the position of the camera.
       * @return {CameraPosition}
       */
    GoogleMap.prototype.getCameraPosition = /**
       * Get the position of the camera.
       * @return {CameraPosition}
       */
    function () { return; };
    /**
     * Get the current camera target position
     * @return {ILatLng}
     */
    /**
       * Get the current camera target position
       * @return {ILatLng}
       */
    GoogleMap.prototype.getCameraTarget = /**
       * Get the current camera target position
       * @return {ILatLng}
       */
    function () { return; };
    /**
     * Get the current camera zoom level
     * @return {number}
     */
    /**
       * Get the current camera zoom level
       * @return {number}
       */
    GoogleMap.prototype.getCameraZoom = /**
       * Get the current camera zoom level
       * @return {number}
       */
    function () { return; };
    /**
     * Get the current camera bearing
     * @return {number}
     */
    /**
       * Get the current camera bearing
       * @return {number}
       */
    GoogleMap.prototype.getCameraBearing = /**
       * Get the current camera bearing
       * @return {number}
       */
    function () { return; };
    /**
     * Get the current camera tilt (view angle)
     * @return {number}
     */
    /**
       * Get the current camera tilt (view angle)
       * @return {number}
       */
    GoogleMap.prototype.getCameraTilt = /**
       * Get the current camera tilt (view angle)
       * @return {number}
       */
    function () { return; };
    /**
     * Set the center position of the camera view
     * @param latLng {ILatLng | ILatLng[]}
     */
    /**
       * Set the center position of the camera view
       * @param latLng {ILatLng | ILatLng[]}
       */
    GoogleMap.prototype.setCameraTarget = /**
       * Set the center position of the camera view
       * @param latLng {ILatLng | ILatLng[]}
       */
    function (latLng) { };
    /**
     * Set zoom level of the camera
     * @param zoomLevel {number} Zoom level
     */
    /**
       * Set zoom level of the camera
       * @param zoomLevel {number} Zoom level
       */
    GoogleMap.prototype.setCameraZoom = /**
       * Set zoom level of the camera
       * @param zoomLevel {number} Zoom level
       */
    function (zoomLevel) { };
    /**
     * Set the camera view angle
     * @param tiltAngle {number} Tilt angle
     */
    /**
       * Set the camera view angle
       * @param tiltAngle {number} Tilt angle
       */
    GoogleMap.prototype.setCameraTilt = /**
       * Set the camera view angle
       * @param tiltAngle {number} Tilt angle
       */
    function (tiltAngle) { };
    /**
     * Set camera bearing
     * @param bearing {any}
     */
    /**
       * Set camera bearing
       * @param bearing {any}
       */
    GoogleMap.prototype.setCameraBearing = /**
       * Set camera bearing
       * @param bearing {any}
       */
    function (bearing) { };
    /**
     * Changes the center of the map by the given distance in pixels
     * @param x {number}
     * @param y {number}
     */
    /**
       * Changes the center of the map by the given distance in pixels
       * @param x {number}
       * @param y {number}
       */
    GoogleMap.prototype.panBy = /**
       * Changes the center of the map by the given distance in pixels
       * @param x {number}
       * @param y {number}
       */
    function (x, y) { };
    /**
     * Get the current visible region (southWest and northEast)
     * @return {VisibleRegion}
     */
    /**
       * Get the current visible region (southWest and northEast)
       * @return {VisibleRegion}
       */
    GoogleMap.prototype.getVisibleRegion = /**
       * Get the current visible region (southWest and northEast)
       * @return {VisibleRegion}
       */
    function () { return; };
    /**
     * Get the current device location
     * @return {Promise<MyLocation>}
     */
    /**
       * Get the current device location
       * @return {Promise<MyLocation>}
       */
    GoogleMap.prototype.getMyLocation = /**
       * Get the current device location
       * @return {Promise<MyLocation>}
       */
    function (options) {
        return new Promise(function (resolve, reject) {
            GoogleMaps.getPlugin().LocationService.getMyLocation(options, resolve, reject);
        });
    };
    /**
     * Set false to ignore all clicks on the map
     * @param isClickable {boolean}
     */
    /**
       * Set false to ignore all clicks on the map
       * @param isClickable {boolean}
       */
    GoogleMap.prototype.setClickable = /**
       * Set false to ignore all clicks on the map
       * @param isClickable {boolean}
       */
    function (isClickable) { };
    /**
     * Destroy a map completely
     * @return {Promise<any>}
     */
    /**
       * Destroy a map completely
       * @return {Promise<any>}
       */
    GoogleMap.prototype.remove = /**
       * Destroy a map completely
       * @return {Promise<any>}
       */
    function () {
        var _this = this;
        if (this.get('_overlays')) {
            Object.keys(this.get('_overlays')).forEach(function (overlayId) {
                _this.get('_overlays')[overlayId] = null;
                delete _this.get('_overlays')[overlayId];
            });
        }
        return new Promise(function (resolve) {
            _this._objectInstance.remove(function () { return resolve(); });
        });
    };
    /**
     * Remove all overlays, such as marker
     * @return {Promise<any>}
     */
    /**
       * Remove all overlays, such as marker
       * @return {Promise<any>}
       */
    GoogleMap.prototype.clear = /**
       * Remove all overlays, such as marker
       * @return {Promise<any>}
       */
    function () {
        var _this = this;
        if (this.get('_overlays')) {
            Object.keys(this.get('_overlays')).forEach(function (overlayId) {
                _this.get('_overlays')[overlayId] = null;
                delete _this.get('_overlays')[overlayId];
            });
        }
        return new Promise(function (resolve) {
            _this._objectInstance.clear(function () { return resolve(); });
        });
    };
    /**
     * Convert the unit from LatLng to the pixels from the left/top of the map div
     * @return {Promise<any>}
     */
    /**
       * Convert the unit from LatLng to the pixels from the left/top of the map div
       * @return {Promise<any>}
       */
    GoogleMap.prototype.fromLatLngToPoint = /**
       * Convert the unit from LatLng to the pixels from the left/top of the map div
       * @return {Promise<any>}
       */
    function (latLng) { return; };
    /**
     * Convert the unit from the pixels from the left/top to the LatLng
     * @return {Promise<LatLng>}
     */
    /**
       * Convert the unit from the pixels from the left/top to the LatLng
       * @return {Promise<LatLng>}
       */
    GoogleMap.prototype.fromPointToLatLng = /**
       * Convert the unit from the pixels from the left/top to the LatLng
       * @return {Promise<LatLng>}
       */
    function (point) { return; };
    /**
     * Set true if you want to show the MyLocation control (blue dot)
     * @param enabled {boolean}
     */
    /**
       * Set true if you want to show the MyLocation control (blue dot)
       * @param enabled {boolean}
       */
    GoogleMap.prototype.setMyLocationEnabled = /**
       * Set true if you want to show the MyLocation control (blue dot)
       * @param enabled {boolean}
       */
    function (enabled) { };
    /**
     * Set true if you want to show the MyLocation button
     * @param enabled {boolean}
     */
    /**
       * Set true if you want to show the MyLocation button
       * @param enabled {boolean}
       */
    GoogleMap.prototype.setMyLocationButtonEnabled = /**
       * Set true if you want to show the MyLocation button
       * @param enabled {boolean}
       */
    function (enabled) { };
    /**
     * Get the currently focused building
     * @return {Promise<any>}
     */
    /**
       * Get the currently focused building
       * @return {Promise<any>}
       */
    GoogleMap.prototype.getFocusedBuilding = /**
       * Get the currently focused building
       * @return {Promise<any>}
       */
    function () { return; };
    /**
     * Set true if you want to show the indoor map
     * @param enabled {boolean}
     */
    /**
       * Set true if you want to show the indoor map
       * @param enabled {boolean}
       */
    GoogleMap.prototype.setIndoorEnabled = /**
       * Set true if you want to show the indoor map
       * @param enabled {boolean}
       */
    function (enabled) { };
    /**
     * Set true if you want to show the traffic layer
     * @param enabled {boolean}
     */
    /**
       * Set true if you want to show the traffic layer
       * @param enabled {boolean}
       */
    GoogleMap.prototype.setTrafficEnabled = /**
       * Set true if you want to show the traffic layer
       * @param enabled {boolean}
       */
    function (enabled) { };
    /**
     * Set true if you want to show the compass button
     * @param enabled {boolean}
     */
    /**
       * Set true if you want to show the compass button
       * @param enabled {boolean}
       */
    GoogleMap.prototype.setCompassEnabled = /**
       * Set true if you want to show the compass button
       * @param enabled {boolean}
       */
    function (enabled) { };
    /**
     * Sets the preference for whether all gestures should be enabled or disabled
     * @param enabled {boolean}
     */
    /**
       * Sets the preference for whether all gestures should be enabled or disabled
       * @param enabled {boolean}
       */
    GoogleMap.prototype.setAllGesturesEnabled = /**
       * Sets the preference for whether all gestures should be enabled or disabled
       * @param enabled {boolean}
       */
    function (enabled) { };
    /**
     * Set visibility of the map
     * @param visible {boolean}
     */
    /**
       * Set visibility of the map
       * @param visible {boolean}
       */
    GoogleMap.prototype.setVisible = /**
       * Set visibility of the map
       * @param visible {boolean}
       */
    function (visible) { };
    /**
     * Adjust the map padding (same as CSS padding rule)
     * @param top {number}
     * @param right {number}
     * @param left {number}
     * @param bottom {number}
     */
    /**
       * Adjust the map padding (same as CSS padding rule)
       * @param top {number}
       * @param right {number}
       * @param left {number}
       * @param bottom {number}
       */
    GoogleMap.prototype.setPadding = /**
       * Adjust the map padding (same as CSS padding rule)
       * @param top {number}
       * @param right {number}
       * @param left {number}
       * @param bottom {number}
       */
    function (top, right, bottom, left) { };
    /**
     * Set options
     * @param options
     */
    /**
       * Set options
       * @param options
       */
    GoogleMap.prototype.setOptions = /**
       * Set options
       * @param options
       */
    function (options) { };
    /**
     * Adds a marker
     * @param options {MarkerOptions} options
     * @return {Promise<Marker>}
     */
    /**
       * Adds a marker
       * @param options {MarkerOptions} options
       * @return {Promise<Marker>}
       */
    GoogleMap.prototype.addMarker = /**
       * Adds a marker
       * @param options {MarkerOptions} options
       * @return {Promise<Marker>}
       */
    function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addMarker(options, function (marker) {
                if (marker) {
                    var overlayId_1 = marker.getId();
                    var overlay_1 = new Marker(_this, marker);
                    _this.get('_overlays')[overlayId_1] = overlay_1;
                    marker.one(overlayId_1 + '_remove', function () {
                        if (_this.get('_overlays')) {
                            _this.get('_overlays')[overlayId_1] = null;
                            overlay_1.destroy();
                        }
                    });
                    resolve(overlay_1);
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * Adds a marker in synchronous
     * @param options {MarkerOptions} options
     * @Returns {Marker}
     */
    /**
       * Adds a marker in synchronous
       * @param options {MarkerOptions} options
       * @Returns {Marker}
       */
    GoogleMap.prototype.addMarkerSync = /**
       * Adds a marker in synchronous
       * @param options {MarkerOptions} options
       * @Returns {Marker}
       */
    function (options) {
        var _this = this;
        var marker = this._objectInstance.addMarker(options);
        var overlayId = marker.getId();
        var overlay = new Marker(this, marker);
        this.get('_overlays')[overlayId] = overlay;
        marker.one(overlayId + '_remove', function () {
            if (_this.get('_overlays')) {
                _this.get('_overlays')[overlayId] = null;
                overlay.destroy();
            }
        });
        return overlay;
    };
    /**
     * Adds a marker cluster
     * @param options {MarkerClusterOptions} options
     * @return {Promise<MarkerCluster>}
     */
    /**
       * Adds a marker cluster
       * @param options {MarkerClusterOptions} options
       * @return {Promise<MarkerCluster>}
       */
    GoogleMap.prototype.addMarkerCluster = /**
       * Adds a marker cluster
       * @param options {MarkerClusterOptions} options
       * @return {Promise<MarkerCluster>}
       */
    function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addMarkerCluster(options, function (markerCluster) {
                if (markerCluster) {
                    var overlayId_2 = markerCluster.getId();
                    var overlay_2 = new MarkerCluster(_this, markerCluster);
                    _this.get('_overlays')[overlayId_2] = overlay_2;
                    markerCluster.one('remove', function () {
                        if (_this.get('_overlays')) {
                            _this.get('_overlays')[overlayId_2] = null;
                            overlay_2.destroy();
                        }
                    });
                    markerCluster.set('_overlays', new BaseArrayClass());
                    resolve(overlay_2);
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * Adds a marker cluster in synchronous
     * @param options {MarkerClusterOptions} options
     * @Returns {MarkerCluster}
     */
    /**
       * Adds a marker cluster in synchronous
       * @param options {MarkerClusterOptions} options
       * @Returns {MarkerCluster}
       */
    GoogleMap.prototype.addMarkerClusterSync = /**
       * Adds a marker cluster in synchronous
       * @param options {MarkerClusterOptions} options
       * @Returns {MarkerCluster}
       */
    function (options) {
        var _this = this;
        var markerCluster = this._objectInstance.addMarkerCluster(options);
        var overlayId = markerCluster.getId();
        var overlay = new MarkerCluster(this, markerCluster);
        this.get('_overlays')[overlayId] = overlay;
        markerCluster.one(overlayId + '_remove', function () {
            if (_this.get('_overlays')) {
                _this.get('_overlays')[overlayId] = null;
                overlay.destroy();
            }
        });
        markerCluster.set('_overlays', new BaseArrayClass());
        return overlay;
    };
    /**
     * Adds a circle
     * @param options {CircleOptions} options
     * @return {Promise<Circle>}
     */
    /**
       * Adds a circle
       * @param options {CircleOptions} options
       * @return {Promise<Circle>}
       */
    GoogleMap.prototype.addCircle = /**
       * Adds a circle
       * @param options {CircleOptions} options
       * @return {Promise<Circle>}
       */
    function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addCircle(options, function (circle) {
                if (circle) {
                    var overlayId_3 = circle.getId();
                    var overlay_3 = new Circle(_this, circle);
                    _this.get('_overlays')[overlayId_3] = overlay_3;
                    circle.one(overlayId_3 + '_remove', function () {
                        if (_this.get('_overlays')) {
                            _this.get('_overlays')[overlayId_3] = null;
                            overlay_3.destroy();
                        }
                    });
                    resolve(overlay_3);
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * Adds a circle in synchronous
     * @param options {CircleOptions} options
     * @return {Circle}
     */
    /**
       * Adds a circle in synchronous
       * @param options {CircleOptions} options
       * @return {Circle}
       */
    GoogleMap.prototype.addCircleSync = /**
       * Adds a circle in synchronous
       * @param options {CircleOptions} options
       * @return {Circle}
       */
    function (options) {
        var _this = this;
        var circle = this._objectInstance.addCircle(options);
        var overlayId = circle.getId();
        var overlay = new Circle(this, circle);
        this.get('_overlays')[overlayId] = overlay;
        circle.one(overlayId + '_remove', function () {
            if (_this.get('_overlays')) {
                _this.get('_overlays')[overlayId] = null;
                overlay.destroy();
            }
        });
        return overlay;
    };
    /**
     * Adds a polygon
     * @param options {PolygonOptions} options
     * @return {Promise<Polygon>}
     */
    /**
       * Adds a polygon
       * @param options {PolygonOptions} options
       * @return {Promise<Polygon>}
       */
    GoogleMap.prototype.addPolygon = /**
       * Adds a polygon
       * @param options {PolygonOptions} options
       * @return {Promise<Polygon>}
       */
    function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addPolygon(options, function (polygon) {
                if (polygon) {
                    var overlayId_4 = polygon.getId();
                    var overlay_4 = new Polygon(_this, polygon);
                    _this.get('_overlays')[overlayId_4] = overlay_4;
                    polygon.one(overlayId_4 + '_remove', function () {
                        if (_this.get('_overlays')) {
                            _this.get('_overlays')[overlayId_4] = null;
                            overlay_4.destroy();
                        }
                    });
                    resolve(overlay_4);
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * Adds a polygon in synchronous
     * @param options {PolygonOptions} options
     * @return {Polygon}
     */
    /**
       * Adds a polygon in synchronous
       * @param options {PolygonOptions} options
       * @return {Polygon}
       */
    GoogleMap.prototype.addPolygonSync = /**
       * Adds a polygon in synchronous
       * @param options {PolygonOptions} options
       * @return {Polygon}
       */
    function (options) {
        var _this = this;
        var polygon = this._objectInstance.addPolygon(options);
        var overlayId = polygon.getId();
        var overlay = new Polygon(this, polygon);
        this.get('_overlays')[overlayId] = overlay;
        polygon.one(overlayId + '_remove', function () {
            if (_this.get('_overlays')) {
                _this.get('_overlays')[overlayId] = null;
                overlay.destroy();
            }
        });
        return overlay;
    };
    /**
     * Adds a polyline
     * @param options {PolylineOptions} options
     * @return {Promise<Polyline>}
     */
    /**
       * Adds a polyline
       * @param options {PolylineOptions} options
       * @return {Promise<Polyline>}
       */
    GoogleMap.prototype.addPolyline = /**
       * Adds a polyline
       * @param options {PolylineOptions} options
       * @return {Promise<Polyline>}
       */
    function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addPolyline(options, function (polyline) {
                if (polyline) {
                    var overlayId_5 = polyline.getId();
                    var overlay_5 = new Polyline(_this, polyline);
                    _this.get('_overlays')[overlayId_5] = overlay_5;
                    polyline.one(overlayId_5 + '_remove', function () {
                        if (_this.get('_overlays')) {
                            _this.get('_overlays')[overlayId_5] = null;
                            overlay_5.destroy();
                        }
                    });
                    resolve(overlay_5);
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * Adds a polyline in synchronous
     * @param options {PolylineOptions} options
     * @return {Polyline}
     */
    /**
       * Adds a polyline in synchronous
       * @param options {PolylineOptions} options
       * @return {Polyline}
       */
    GoogleMap.prototype.addPolylineSync = /**
       * Adds a polyline in synchronous
       * @param options {PolylineOptions} options
       * @return {Polyline}
       */
    function (options) {
        var _this = this;
        var polyline = this._objectInstance.addPolyline(options);
        var overlayId = polyline.getId();
        var overlay = new Polyline(this, polyline);
        this.get('_overlays')[overlayId] = overlay;
        polyline.one(overlayId + '_remove', function () {
            if (_this.get('_overlays')) {
                _this.get('_overlays')[overlayId] = null;
                overlay.destroy();
            }
        });
        return overlay;
    };
    /**
     * Adds a tile overlay
     * @param options {TileOverlayOptions} options
     * @return {Promise<TileOverlay>}
     */
    /**
       * Adds a tile overlay
       * @param options {TileOverlayOptions} options
       * @return {Promise<TileOverlay>}
       */
    GoogleMap.prototype.addTileOverlay = /**
       * Adds a tile overlay
       * @param options {TileOverlayOptions} options
       * @return {Promise<TileOverlay>}
       */
    function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addTileOverlay(options, function (tileOverlay) {
                if (tileOverlay) {
                    var overlayId_6 = tileOverlay.getId();
                    var overlay_6 = new TileOverlay(_this, tileOverlay);
                    _this.get('_overlays')[overlayId_6] = overlay_6;
                    tileOverlay.one(overlayId_6 + '_remove', function () {
                        if (_this.get('_overlays')) {
                            _this.get('_overlays')[overlayId_6] = null;
                            overlay_6.destroy();
                        }
                    });
                    resolve(overlay_6);
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * Adds a tile overlay in synchronous
     * @param options {TileOverlayOptions} options
     * @return {TileOverlay}
     */
    /**
       * Adds a tile overlay in synchronous
       * @param options {TileOverlayOptions} options
       * @return {TileOverlay}
       */
    GoogleMap.prototype.addTileOverlaySync = /**
       * Adds a tile overlay in synchronous
       * @param options {TileOverlayOptions} options
       * @return {TileOverlay}
       */
    function (options) {
        var _this = this;
        var tileOverlay = this._objectInstance.addTileOverlay(options);
        var overlayId = tileOverlay.getId();
        var overlay = new TileOverlay(this, tileOverlay);
        this.get('_overlays')[overlayId] = overlay;
        tileOverlay.one(overlayId + '_remove', function () {
            if (_this.get('_overlays')) {
                _this.get('_overlays')[overlayId] = null;
                overlay.destroy();
            }
        });
        return overlay;
    };
    /**
     * Adds a ground overlay
     * @param options {GroundOverlayOptions} options
     * @return {Promise<GroundOverlay>}
     */
    /**
       * Adds a ground overlay
       * @param options {GroundOverlayOptions} options
       * @return {Promise<GroundOverlay>}
       */
    GoogleMap.prototype.addGroundOverlay = /**
       * Adds a ground overlay
       * @param options {GroundOverlayOptions} options
       * @return {Promise<GroundOverlay>}
       */
    function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addGroundOverlay(options, function (groundOverlay) {
                if (groundOverlay) {
                    var overlayId_7 = groundOverlay.getId();
                    var overlay_7 = new GroundOverlay(_this, groundOverlay);
                    _this.get('_overlays')[overlayId_7] = overlay_7;
                    groundOverlay.one(overlayId_7 + '_remove', function () {
                        if (_this.get('_overlays')) {
                            _this.get('_overlays')[overlayId_7] = null;
                            overlay_7.destroy();
                        }
                    });
                    resolve(overlay_7);
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * Adds a ground overlay in synchronous
     * @param options {GroundOverlayOptions} options
     * @return {GroundOverlay}
     */
    /**
       * Adds a ground overlay in synchronous
       * @param options {GroundOverlayOptions} options
       * @return {GroundOverlay}
       */
    GoogleMap.prototype.addGroundOverlaySync = /**
       * Adds a ground overlay in synchronous
       * @param options {GroundOverlayOptions} options
       * @return {GroundOverlay}
       */
    function (options) {
        var _this = this;
        var groundOverlay = this._objectInstance.addGroundOverlay(options);
        var overlayId = groundOverlay.getId();
        var overlay = new GroundOverlay(this, groundOverlay);
        this.get('_overlays')[overlayId] = overlay;
        groundOverlay.one(overlayId + '_remove', function () {
            if (_this.get('_overlays')) {
                _this.get('_overlays')[overlayId] = null;
                overlay.destroy();
            }
        });
        return overlay;
    };
    /**
     * Adds a kml overlay
     * @param options {KmlOverlayOptions} options
     * @return {Promise<KmlOverlay>}
     */
    /**
       * Adds a kml overlay
       * @param options {KmlOverlayOptions} options
       * @return {Promise<KmlOverlay>}
       */
    GoogleMap.prototype.addKmlOverlay = /**
       * Adds a kml overlay
       * @param options {KmlOverlayOptions} options
       * @return {Promise<KmlOverlay>}
       */
    function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addKmlOverlay(options, function (kmlOverlay) {
                if (kmlOverlay) {
                    var overlayId_8 = kmlOverlay.getId();
                    var overlay_8 = new KmlOverlay(_this, kmlOverlay);
                    _this.get('_overlays')[overlayId_8] = overlay_8;
                    kmlOverlay.one(overlayId_8 + '_remove', function () {
                        if (_this.get('_overlays')) {
                            _this.get('_overlays')[overlayId_8] = null;
                            overlay_8.destroy();
                        }
                    });
                    resolve(overlay_8);
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * Returns the base64 encoded screen capture of the map.
     * @param options {ToDataUrlOptions} [options] options
     * @return {Promise<string>}
     */
    /**
       * Returns the base64 encoded screen capture of the map.
       * @param options {ToDataUrlOptions} [options] options
       * @return {Promise<string>}
       */
    GoogleMap.prototype.toDataURL = /**
       * Returns the base64 encoded screen capture of the map.
       * @param options {ToDataUrlOptions} [options] options
       * @return {Promise<string>}
       */
    function (options) { return; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setDiv", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", HTMLElement)
    ], GoogleMap.prototype, "getDiv", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setMapTypeId", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "animateCamera", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "animateCameraZoomIn", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "animateCameraZoomOut", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "moveCamera", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "moveCameraZoomIn", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "moveCameraZoomOut", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], GoogleMap.prototype, "getCameraPosition", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], GoogleMap.prototype, "getCameraTarget", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], GoogleMap.prototype, "getCameraZoom", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], GoogleMap.prototype, "getCameraBearing", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], GoogleMap.prototype, "getCameraTilt", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setCameraTarget", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setCameraZoom", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setCameraTilt", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setCameraBearing", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "panBy", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", VisibleRegion)
    ], GoogleMap.prototype, "getVisibleRegion", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "getMyLocation", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setClickable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "remove", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "clear", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "fromLatLngToPoint", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "fromPointToLatLng", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setMyLocationEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setMyLocationButtonEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "getFocusedBuilding", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setIndoorEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setTrafficEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setCompassEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setAllGesturesEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setVisible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number, Number, Number]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setPadding", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GoogleMap.prototype, "setOptions", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "addMarker", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Marker)
    ], GoogleMap.prototype, "addMarkerSync", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "addMarkerCluster", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", MarkerCluster)
    ], GoogleMap.prototype, "addMarkerClusterSync", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "addCircle", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Circle)
    ], GoogleMap.prototype, "addCircleSync", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "addPolygon", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Polygon)
    ], GoogleMap.prototype, "addPolygonSync", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "addPolyline", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Polyline)
    ], GoogleMap.prototype, "addPolylineSync", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "addTileOverlay", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", TileOverlay)
    ], GoogleMap.prototype, "addTileOverlaySync", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "addGroundOverlay", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", GroundOverlay)
    ], GoogleMap.prototype, "addGroundOverlaySync", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "addKmlOverlay", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GoogleMap.prototype, "toDataURL", null);
    /**
     * @hidden
     */
    GoogleMap = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            pluginName: 'GoogleMaps',
            plugin: 'cordova-plugin-googlemaps'
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], GoogleMap);
    return GoogleMap;
}(BaseClass));

/**
 * @hidden
 */
var GroundOverlay = (function (_super) {
    __extends(GroundOverlay, _super);
    function GroundOverlay(_map, _objectInstance) {
        var _this = _super.call(this) || this;
        _this._map = _map;
        _this._objectInstance = _objectInstance;
        return _this;
    }
    /**
     * Returns the ID of instance.
     * @return {string}
     */
    /**
       * Returns the ID of instance.
       * @return {string}
       */
    GroundOverlay.prototype.getId = /**
       * Returns the ID of instance.
       * @return {string}
       */
    function () { return; };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    /**
       * Returns the map instance.
       * @return {GoogleMap}
       */
    GroundOverlay.prototype.getMap = /**
       * Returns the map instance.
       * @return {GoogleMap}
       */
    function () { return this._map; };
    /**
     * Changes the bounds of the GroundOverlay
     * @param bounds { ILatLng[]}
     */
    /**
       * Changes the bounds of the GroundOverlay
       * @param bounds { ILatLng[]}
       */
    GroundOverlay.prototype.setBounds = /**
       * Changes the bounds of the GroundOverlay
       * @param bounds { ILatLng[]}
       */
    function (bounds) { };
    /**
     * Changes the bearing of the ground overlay
     * @param bearing {number}
     */
    /**
       * Changes the bearing of the ground overlay
       * @param bearing {number}
       */
    GroundOverlay.prototype.setBearing = /**
       * Changes the bearing of the ground overlay
       * @param bearing {number}
       */
    function (bearing) { };
    /**
     * Returns the current bearing value
     */
    /**
       * Returns the current bearing value
       */
    GroundOverlay.prototype.getBearing = /**
       * Returns the current bearing value
       */
    function () { return; };
    /**
     * Changes the image of the ground overlay
     * @param imageUrl {string} URL of image
     */
    /**
       * Changes the image of the ground overlay
       * @param imageUrl {string} URL of image
       */
    GroundOverlay.prototype.setImage = /**
       * Changes the image of the ground overlay
       * @param imageUrl {string} URL of image
       */
    function (imageUrl) { };
    /**
     * Changes the opacity of the ground overlay from 0.0 to 1.0
     * @param opacity {number}
     */
    /**
       * Changes the opacity of the ground overlay from 0.0 to 1.0
       * @param opacity {number}
       */
    GroundOverlay.prototype.setOpacity = /**
       * Changes the opacity of the ground overlay from 0.0 to 1.0
       * @param opacity {number}
       */
    function (opacity) { };
    /**
     * Returns the current opacity
     * @return {number}
     */
    /**
       * Returns the current opacity
       * @return {number}
       */
    GroundOverlay.prototype.getOpacity = /**
       * Returns the current opacity
       * @return {number}
       */
    function () { return; };
    /**
     * Changes click-ability of the ground overlay
     * @param clickable {boolean}
     */
    /**
       * Changes click-ability of the ground overlay
       * @param clickable {boolean}
       */
    GroundOverlay.prototype.setClickable = /**
       * Changes click-ability of the ground overlay
       * @param clickable {boolean}
       */
    function (clickable) { };
    /**
     * Returns true if the ground overlay is clickable
     * @return {boolean}
     */
    /**
       * Returns true if the ground overlay is clickable
       * @return {boolean}
       */
    GroundOverlay.prototype.getClickable = /**
       * Returns true if the ground overlay is clickable
       * @return {boolean}
       */
    function () { return; };
    /**
     * Changes visibility of the ground overlay
     * @param visible {boolean}
     */
    /**
       * Changes visibility of the ground overlay
       * @param visible {boolean}
       */
    GroundOverlay.prototype.setVisible = /**
       * Changes visibility of the ground overlay
       * @param visible {boolean}
       */
    function (visible) { };
    /**
     * Returns true if the ground overlay is visible
     * @return {boolean}
     */
    /**
       * Returns true if the ground overlay is visible
       * @return {boolean}
       */
    GroundOverlay.prototype.getVisible = /**
       * Returns true if the ground overlay is visible
       * @return {boolean}
       */
    function () { return; };
    /**
     * Changes the ground overlay zIndex order
     * @param index {number}
     */
    /**
       * Changes the ground overlay zIndex order
       * @param index {number}
       */
    GroundOverlay.prototype.setZIndex = /**
       * Changes the ground overlay zIndex order
       * @param index {number}
       */
    function (index) { };
    /**
     * Returns the current ground overlay zIndex
     * @return {number}
     */
    /**
       * Returns the current ground overlay zIndex
       * @return {number}
       */
    GroundOverlay.prototype.getZIndex = /**
       * Returns the current ground overlay zIndex
       * @return {number}
       */
    function () { return; };
    /**
     * Remove the ground overlay
     */
    /**
       * Remove the ground overlay
       */
    GroundOverlay.prototype.remove = /**
       * Remove the ground overlay
       */
    function () {
        delete this._objectInstance.getMap().get('_overlays')[this.getId()];
        this._objectInstance.remove();
        this.destroy();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], GroundOverlay.prototype, "getId", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], GroundOverlay.prototype, "setBounds", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], GroundOverlay.prototype, "setBearing", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], GroundOverlay.prototype, "getBearing", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], GroundOverlay.prototype, "setImage", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], GroundOverlay.prototype, "setOpacity", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], GroundOverlay.prototype, "getOpacity", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], GroundOverlay.prototype, "setClickable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], GroundOverlay.prototype, "getClickable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], GroundOverlay.prototype, "setVisible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], GroundOverlay.prototype, "getVisible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], GroundOverlay.prototype, "setZIndex", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], GroundOverlay.prototype, "getZIndex", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GroundOverlay.prototype, "remove", null);
    return GroundOverlay;
}(BaseClass));

/**
 * @hidden
 */
var HtmlInfoWindow = (function (_super) {
    __extends(HtmlInfoWindow, _super);
    function HtmlInfoWindow() {
        var _this = _super.call(this) || this;
        _this._objectInstance = new (GoogleMaps.getPlugin().HtmlInfoWindow)();
        return _this;
    }
    /**
     * Changes the backgroundColor
     * @param color {string}
     */
    /**
       * Changes the backgroundColor
       * @param color {string}
       */
    HtmlInfoWindow.prototype.setBackgroundColor = /**
       * Changes the backgroundColor
       * @param color {string}
       */
    function (color) { };
    /**
     * Set your HTML contents.
     * @param content {any} String containing text or HTML element
     * @param cssOptions? {any} CSS styles for the container element of HTMLInfoWindow
     */
    /**
       * Set your HTML contents.
       * @param content {any} String containing text or HTML element
       * @param cssOptions? {any} CSS styles for the container element of HTMLInfoWindow
       */
    HtmlInfoWindow.prototype.setContent = /**
       * Set your HTML contents.
       * @param content {any} String containing text or HTML element
       * @param cssOptions? {any} CSS styles for the container element of HTMLInfoWindow
       */
    function (content, cssOptions) { };
    /**
     * Open the htmlInfoWindow
     * @param marker {Marker}
     */
    /**
       * Open the htmlInfoWindow
       * @param marker {Marker}
       */
    HtmlInfoWindow.prototype.open = /**
       * Open the htmlInfoWindow
       * @param marker {Marker}
       */
    function (marker) { };
    /**
     * Close the htmlInfoWindow
     */
    /**
       * Close the htmlInfoWindow
       */
    HtmlInfoWindow.prototype.close = /**
       * Close the htmlInfoWindow
       */
    function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], HtmlInfoWindow.prototype, "setBackgroundColor", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], HtmlInfoWindow.prototype, "setContent", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], HtmlInfoWindow.prototype, "open", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HtmlInfoWindow.prototype, "close", null);
    /**
     * @hidden
     */
    HtmlInfoWindow = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            plugin: 'cordova-plugin-googlemaps',
            pluginName: 'GoogleMaps',
            pluginRef: 'plugin.google.maps.HtmlInfoWindow',
            repo: ''
        }),
        __metadata("design:paramtypes", [])
    ], HtmlInfoWindow);
    return HtmlInfoWindow;
}(BaseClass));

/**
 * @hidden
 */
var Marker = (function (_super) {
    __extends(Marker, _super);
    function Marker(_map, _objectInstance) {
        var _this = _super.call(this) || this;
        _this._map = _map;
        _this._objectInstance = _objectInstance;
        return _this;
    }
    /**
     * Returns the ID of instance.
     * @return {string}
     */
    /**
       * Returns the ID of instance.
       * @return {string}
       */
    Marker.prototype.getId = /**
       * Returns the ID of instance.
       * @return {string}
       */
    function () { return; };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    /**
       * Returns the map instance.
       * @return {GoogleMap}
       */
    Marker.prototype.getMap = /**
       * Returns the map instance.
       * @return {GoogleMap}
       */
    function () { return this._map; };
    /**
     * Set the marker position.
     * @param latLng {ILatLng}
     */
    /**
       * Set the marker position.
       * @param latLng {ILatLng}
       */
    Marker.prototype.setPosition = /**
       * Set the marker position.
       * @param latLng {ILatLng}
       */
    function (latLng) { return; };
    /**
     * Returns the marker position.
     * @return {ILatLng}
     */
    /**
       * Returns the marker position.
       * @return {ILatLng}
       */
    Marker.prototype.getPosition = /**
       * Returns the marker position.
       * @return {ILatLng}
       */
    function () { return; };
    /**
     * Show the normal infoWindow of the marker.
     */
    /**
       * Show the normal infoWindow of the marker.
       */
    Marker.prototype.showInfoWindow = /**
       * Show the normal infoWindow of the marker.
       */
    function () { };
    /**
     * Hide the normal infoWindow of the marker.
     */
    /**
       * Hide the normal infoWindow of the marker.
       */
    Marker.prototype.hideInfoWindow = /**
       * Hide the normal infoWindow of the marker.
       */
    function () { };
    /**
     * Specify the animation either `DROP` or `BOUNCE`
     * @param animation {string}
     */
    /**
       * Specify the animation either `DROP` or `BOUNCE`
       * @param animation {string}
       */
    Marker.prototype.setAnimation = /**
       * Specify the animation either `DROP` or `BOUNCE`
       * @param animation {string}
       */
    function (animation) { };
    /**
     * Set true if you **do not want** to move the map when you click on the marker.
     * @param disableAutoPan {boolean}
     */
    /**
       * Set true if you **do not want** to move the map when you click on the marker.
       * @param disableAutoPan {boolean}
       */
    Marker.prototype.setDisableAutoPan = /**
       * Set true if you **do not want** to move the map when you click on the marker.
       * @param disableAutoPan {boolean}
       */
    function (disableAutoPan) { };
    /**
     * Set false if you want to hide the marker.
     * @param visible
     */
    /**
       * Set false if you want to hide the marker.
       * @param visible
       */
    Marker.prototype.setVisible = /**
       * Set false if you want to hide the marker.
       * @param visible
       */
    function (visible) { };
    /**
     * Returns true if the marker is visible
     */
    /**
       * Returns true if the marker is visible
       */
    Marker.prototype.isVisible = /**
       * Returns true if the marker is visible
       */
    function () { return; };
    /**
     * Changes title of the normal infoWindow.
     * @param title {string}
     */
    /**
       * Changes title of the normal infoWindow.
       * @param title {string}
       */
    Marker.prototype.setTitle = /**
       * Changes title of the normal infoWindow.
       * @param title {string}
       */
    function (title) { };
    /**
     * Returns the title strings.
     * @return {string}
     */
    /**
       * Returns the title strings.
       * @return {string}
       */
    Marker.prototype.getTitle = /**
       * Returns the title strings.
       * @return {string}
       */
    function () { return; };
    /**
     * Changes snippet of the normal infoWindow.
     * @param snippet {string}
     */
    /**
       * Changes snippet of the normal infoWindow.
       * @param snippet {string}
       */
    Marker.prototype.setSnippet = /**
       * Changes snippet of the normal infoWindow.
       * @param snippet {string}
       */
    function (snippet) { };
    /**
     * Returns the snippet strings.
     * @return {string}
     */
    /**
       * Returns the snippet strings.
       * @return {string}
       */
    Marker.prototype.getSnippet = /**
       * Returns the snippet strings.
       * @return {string}
       */
    function () { return; };
    /**
     * Changes the marker opacity from 0.0 to 1.0.
     * @param alpha {number} Opacity
     */
    /**
       * Changes the marker opacity from 0.0 to 1.0.
       * @param alpha {number} Opacity
       */
    Marker.prototype.setOpacity = /**
       * Changes the marker opacity from 0.0 to 1.0.
       * @param alpha {number} Opacity
       */
    function (alpha) { };
    /**
     * Returns the marker opacity.
     * @return {number} Opacity
     */
    /**
       * Returns the marker opacity.
       * @return {number} Opacity
       */
    Marker.prototype.getOpacity = /**
       * Returns the marker opacity.
       * @return {number} Opacity
       */
    function () { return; };
    /**
     * Remove the marker.
     */
    /**
       * Remove the marker.
       */
    Marker.prototype.remove = /**
       * Remove the marker.
       */
    function () {
        delete this._objectInstance.getMap().get('_overlays')[this.getId()];
        this._objectInstance.remove();
        this.destroy();
    };
    /**
     * Changes the info window anchor. This defaults to 50% from the left of the image and at the bottom of the image.
     * @param x {number} Distance from left of the icon image in pixels.
     * @param y {number} Distance from top of the icon image in pixels.
     */
    /**
       * Changes the info window anchor. This defaults to 50% from the left of the image and at the bottom of the image.
       * @param x {number} Distance from left of the icon image in pixels.
       * @param y {number} Distance from top of the icon image in pixels.
       */
    Marker.prototype.setIconAnchor = /**
       * Changes the info window anchor. This defaults to 50% from the left of the image and at the bottom of the image.
       * @param x {number} Distance from left of the icon image in pixels.
       * @param y {number} Distance from top of the icon image in pixels.
       */
    function (x, y) { };
    /**
     * Changes the info window anchor. This defaults to 50% from the left of the image and at the top of the image.
     * @param x {number} Distance from left of the icon image in pixels.
     * @param y {number} Distance from top of the icon image in pixels.
     */
    /**
       * Changes the info window anchor. This defaults to 50% from the left of the image and at the top of the image.
       * @param x {number} Distance from left of the icon image in pixels.
       * @param y {number} Distance from top of the icon image in pixels.
       */
    Marker.prototype.setInfoWindowAnchor = /**
       * Changes the info window anchor. This defaults to 50% from the left of the image and at the top of the image.
       * @param x {number} Distance from left of the icon image in pixels.
       * @param y {number} Distance from top of the icon image in pixels.
       */
    function (x, y) { };
    /**
     * Returns true if the infoWindow is shown on the marker
     * @return {boolean}
     */
    /**
       * Returns true if the infoWindow is shown on the marker
       * @return {boolean}
       */
    Marker.prototype.isInfoWindowShown = /**
       * Returns true if the infoWindow is shown on the marker
       * @return {boolean}
       */
    function () { return; };
    /**
     * Higher zIndex value overlays will be drawn on top of lower zIndex value tile layers and overlays.
     * @param y {number} z-index
     */
    /**
       * Higher zIndex value overlays will be drawn on top of lower zIndex value tile layers and overlays.
       * @param y {number} z-index
       */
    Marker.prototype.setZIndex = /**
       * Higher zIndex value overlays will be drawn on top of lower zIndex value tile layers and overlays.
       * @param y {number} z-index
       */
    function (zIndex) { };
    /**
     * Get z-index
     * @return {number}
     */
    /**
       * Get z-index
       * @return {number}
       */
    Marker.prototype.getZIndex = /**
       * Get z-index
       * @return {number}
       */
    function () { return; };
    /**
     * Set true if you allow all users to drag the marker.
     * @param draggable {boolean}
     */
    /**
       * Set true if you allow all users to drag the marker.
       * @param draggable {boolean}
       */
    Marker.prototype.setDraggable = /**
       * Set true if you allow all users to drag the marker.
       * @param draggable {boolean}
       */
    function (draggable) { };
    /**
     * Returns true if the marker drag is enabled.
     * @return {boolean}
     */
    /**
       * Returns true if the marker drag is enabled.
       * @return {boolean}
       */
    Marker.prototype.isDraggable = /**
       * Returns true if the marker drag is enabled.
       * @return {boolean}
       */
    function () { return; };
    /**
     * Set true if you want to be flat marker.
     * @param flat {boolean}
     */
    /**
       * Set true if you want to be flat marker.
       * @param flat {boolean}
       */
    Marker.prototype.setFlat = /**
       * Set true if you want to be flat marker.
       * @param flat {boolean}
       */
    function (flat) { return; };
    /**
     * Changes icon url and/or size
     * @param icon
     */
    /**
       * Changes icon url and/or size
       * @param icon
       */
    Marker.prototype.setIcon = /**
       * Changes icon url and/or size
       * @param icon
       */
    function (icon) { return; };
    /**
     * Set the marker rotation angle.
     * @param rotation {number}
     */
    /**
       * Set the marker rotation angle.
       * @param rotation {number}
       */
    Marker.prototype.setRotation = /**
       * Set the marker rotation angle.
       * @param rotation {number}
       */
    function (rotation) { };
    /**
     * Returns the marker rotation angle.
     * @return {number}
     */
    /**
       * Returns the marker rotation angle.
       * @return {number}
       */
    Marker.prototype.getRotation = /**
       * Returns the marker rotation angle.
       * @return {number}
       */
    function () { return; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Marker.prototype, "getId", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setPosition", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], Marker.prototype, "getPosition", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "showInfoWindow", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "hideInfoWindow", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setAnimation", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setDisableAutoPan", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setVisible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Marker.prototype, "isVisible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setTitle", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Marker.prototype, "getTitle", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setSnippet", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Marker.prototype, "getSnippet", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setOpacity", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], Marker.prototype, "getOpacity", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "remove", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setIconAnchor", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setInfoWindowAnchor", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Marker.prototype, "isInfoWindowShown", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setZIndex", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], Marker.prototype, "getZIndex", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setDraggable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Marker.prototype, "isDraggable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setFlat", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setIcon", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Marker.prototype, "setRotation", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], Marker.prototype, "getRotation", null);
    return Marker;
}(BaseClass));

/**
 * @hidden
 */
var MarkerCluster = (function (_super) {
    __extends(MarkerCluster, _super);
    function MarkerCluster(_map, _objectInstance) {
        var _this = _super.call(this) || this;
        _this._map = _map;
        _this._objectInstance = _objectInstance;
        return _this;
    }
    /**
     * Returns the ID of instance.
     * @return {string}
     */
    /**
       * Returns the ID of instance.
       * @return {string}
       */
    MarkerCluster.prototype.getId = /**
       * Returns the ID of instance.
       * @return {string}
       */
    function () { return; };
    /**
     * Add one marker location
     * @param marker {MarkerOptions} one location
     * @param skipRedraw? {boolean} marker cluster does not redraw the marker cluster if true.
     */
    /**
       * Add one marker location
       * @param marker {MarkerOptions} one location
       * @param skipRedraw? {boolean} marker cluster does not redraw the marker cluster if true.
       */
    MarkerCluster.prototype.addMarker = /**
       * Add one marker location
       * @param marker {MarkerOptions} one location
       * @param skipRedraw? {boolean} marker cluster does not redraw the marker cluster if true.
       */
    function (marker, skipRedraw) { };
    /**
     * Add marker locations
     * @param markers {MarkerOptions[]} multiple location
     */
    /**
       * Add marker locations
       * @param markers {MarkerOptions[]} multiple location
       */
    MarkerCluster.prototype.addMarkers = /**
       * Add marker locations
       * @param markers {MarkerOptions[]} multiple location
       */
    function (markers) { };
    /**
     * Remove the marker cluster
     */
    /**
       * Remove the marker cluster
       */
    MarkerCluster.prototype.remove = /**
       * Remove the marker cluster
       */
    function () {
        this._objectInstance.set('_overlays', undefined);
        delete this._objectInstance.getMap().get('_overlays')[this.getId()];
        this._objectInstance.remove();
        this.destroy();
    };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    /**
       * Returns the map instance.
       * @return {GoogleMap}
       */
    MarkerCluster.prototype.getMap = /**
       * Returns the map instance.
       * @return {GoogleMap}
       */
    function () { return this._map; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], MarkerCluster.prototype, "getId", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Boolean]),
        __metadata("design:returntype", void 0)
    ], MarkerCluster.prototype, "addMarker", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], MarkerCluster.prototype, "addMarkers", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MarkerCluster.prototype, "remove", null);
    return MarkerCluster;
}(BaseClass));

/**
 * @hidden
 */
var Polygon = (function (_super) {
    __extends(Polygon, _super);
    function Polygon(_map, _objectInstance) {
        var _this = _super.call(this) || this;
        _this._map = _map;
        _this._objectInstance = _objectInstance;
        return _this;
    }
    /**
     * Returns the ID of instance.
     * @return {string}
     */
    /**
       * Returns the ID of instance.
       * @return {string}
       */
    Polygon.prototype.getId = /**
       * Returns the ID of instance.
       * @return {string}
       */
    function () { return; };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    /**
       * Returns the map instance.
       * @return {GoogleMap}
       */
    Polygon.prototype.getMap = /**
       * Returns the map instance.
       * @return {GoogleMap}
       */
    function () { return this._map; };
    /**
     * Changes the polygon points.
     * @param points {ILatLng[]}
     */
    /**
       * Changes the polygon points.
       * @param points {ILatLng[]}
       */
    Polygon.prototype.setPoints = /**
       * Changes the polygon points.
       * @param points {ILatLng[]}
       */
    function (points) { };
    /**
     * Returns an instance of the BaseArrayClass.
     * You can modify the points.
     * @return {BaseArrayClass<ILatLng>}
     */
    /**
       * Returns an instance of the BaseArrayClass.
       * You can modify the points.
       * @return {BaseArrayClass<ILatLng>}
       */
    Polygon.prototype.getPoints = /**
       * Returns an instance of the BaseArrayClass.
       * You can modify the points.
       * @return {BaseArrayClass<ILatLng>}
       */
    function () {
        return new BaseArrayClass(this._objectInstance.getPoints());
    };
    /**
     * Changes the polygon holes.
     * @param holes {ILatLng[][]}
     */
    /**
       * Changes the polygon holes.
       * @param holes {ILatLng[][]}
       */
    Polygon.prototype.setHoles = /**
       * Changes the polygon holes.
       * @param holes {ILatLng[][]}
       */
    function (holes) { };
    /**
     * Returns an instance of the BaseArrayClass.
     * You can modify the holes.
     * @return {BaseArrayClass<ILatLng[]>}
     */
    /**
       * Returns an instance of the BaseArrayClass.
       * You can modify the holes.
       * @return {BaseArrayClass<ILatLng[]>}
       */
    Polygon.prototype.getHoles = /**
       * Returns an instance of the BaseArrayClass.
       * You can modify the holes.
       * @return {BaseArrayClass<ILatLng[]>}
       */
    function () {
        var holes = this._objectInstance.getPoints();
        var results = new BaseArrayClass();
        holes.forEach(function (hole) {
            results.push(hole);
        });
        return results;
    };
    /**
     * Changes the filling color (inner color)
     * @param fillColor {string}
     */
    /**
       * Changes the filling color (inner color)
       * @param fillColor {string}
       */
    Polygon.prototype.setFillColor = /**
       * Changes the filling color (inner color)
       * @param fillColor {string}
       */
    function (fillColor) { };
    /**
     * Returns the current polygon filling color (inner color).
     * @return {string}
     */
    /**
       * Returns the current polygon filling color (inner color).
       * @return {string}
       */
    Polygon.prototype.getFillColor = /**
       * Returns the current polygon filling color (inner color).
       * @return {string}
       */
    function () { return; };
    /**
     * Changes the stroke color (outer color)
     * @param strokeColor {string}
     */
    /**
       * Changes the stroke color (outer color)
       * @param strokeColor {string}
       */
    Polygon.prototype.setStrokeColor = /**
       * Changes the stroke color (outer color)
       * @param strokeColor {string}
       */
    function (strokeColor) { };
    /**
     * Returns the current polygon stroke color (outer color)
     * @return {string}
     */
    /**
       * Returns the current polygon stroke color (outer color)
       * @return {string}
       */
    Polygon.prototype.getStrokeColor = /**
       * Returns the current polygon stroke color (outer color)
       * @return {string}
       */
    function () { return; };
    /**
     * Changes click-ability of the polygon
     * @param clickable {boolean}
     */
    /**
       * Changes click-ability of the polygon
       * @param clickable {boolean}
       */
    Polygon.prototype.setClickable = /**
       * Changes click-ability of the polygon
       * @param clickable {boolean}
       */
    function (clickable) { };
    /**
     * Returns true if the polygon is clickable
     */
    /**
       * Returns true if the polygon is clickable
       */
    Polygon.prototype.getClickable = /**
       * Returns true if the polygon is clickable
       */
    function () { return; };
    /**
     * Changes visibility of the polygon
     * @param visible {boolean}
     */
    /**
       * Changes visibility of the polygon
       * @param visible {boolean}
       */
    Polygon.prototype.setVisible = /**
       * Changes visibility of the polygon
       * @param visible {boolean}
       */
    function (visible) { };
    /**
     * Returns true if the polygon is visible
     * @return {boolean}
     */
    /**
       * Returns true if the polygon is visible
       * @return {boolean}
       */
    Polygon.prototype.getVisible = /**
       * Returns true if the polygon is visible
       * @return {boolean}
       */
    function () { return; };
    /**
     * Changes the polygon zIndex order.
     * @param zIndex {number}
     */
    /**
       * Changes the polygon zIndex order.
       * @param zIndex {number}
       */
    Polygon.prototype.setZIndex = /**
       * Changes the polygon zIndex order.
       * @param zIndex {number}
       */
    function (zIndex) { };
    /**
     * Returns the current polygon zIndex
     * @return {number}
     */
    /**
       * Returns the current polygon zIndex
       * @return {number}
       */
    Polygon.prototype.getZIndex = /**
       * Returns the current polygon zIndex
       * @return {number}
       */
    function () { return; };
    /**
     * Remove the polygon.
     */
    /**
       * Remove the polygon.
       */
    Polygon.prototype.remove = /**
       * Remove the polygon.
       */
    function () {
        delete this._objectInstance.getMap().get('_overlays')[this.getId()];
        this._objectInstance.remove();
        this.destroy();
    };
    /**
     * Changes the polygon stroke width
     */
    /**
       * Changes the polygon stroke width
       */
    Polygon.prototype.setStrokeWidth = /**
       * Changes the polygon stroke width
       */
    function (strokeWidth) { };
    /**
     * Returns the polygon stroke width
     */
    /**
       * Returns the polygon stroke width
       */
    Polygon.prototype.getStrokeWidth = /**
       * Returns the polygon stroke width
       */
    function () { return; };
    /**
     * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of the Earth.
     * @param geodesic {boolean}
     */
    /**
       * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of the Earth.
       * @param geodesic {boolean}
       */
    Polygon.prototype.setGeodesic = /**
       * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of the Earth.
       * @param geodesic {boolean}
       */
    function (geodesic) { };
    /**
     * Returns true if the polygon is geodesic.
     * @return {boolean}
     */
    /**
       * Returns true if the polygon is geodesic.
       * @return {boolean}
       */
    Polygon.prototype.getGeodesic = /**
       * Returns true if the polygon is geodesic.
       * @return {boolean}
       */
    function () { return; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Polygon.prototype, "getId", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], Polygon.prototype, "setPoints", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", BaseArrayClass)
    ], Polygon.prototype, "getPoints", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], Polygon.prototype, "setHoles", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", BaseArrayClass)
    ], Polygon.prototype, "getHoles", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Polygon.prototype, "setFillColor", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Polygon.prototype, "getFillColor", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Polygon.prototype, "setStrokeColor", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Polygon.prototype, "getStrokeColor", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Polygon.prototype, "setClickable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Polygon.prototype, "getClickable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Polygon.prototype, "setVisible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Polygon.prototype, "getVisible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Polygon.prototype, "setZIndex", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], Polygon.prototype, "getZIndex", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Polygon.prototype, "remove", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Polygon.prototype, "setStrokeWidth", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], Polygon.prototype, "getStrokeWidth", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Polygon.prototype, "setGeodesic", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Polygon.prototype, "getGeodesic", null);
    return Polygon;
}(BaseClass));

/**
 * @hidden
 */
var Polyline = (function (_super) {
    __extends(Polyline, _super);
    function Polyline(_map, _objectInstance) {
        var _this = _super.call(this) || this;
        _this._map = _map;
        _this._objectInstance = _objectInstance;
        return _this;
    }
    /**
     * Returns the ID of instance.
     * @return {string}
     */
    /**
       * Returns the ID of instance.
       * @return {string}
       */
    Polyline.prototype.getId = /**
       * Returns the ID of instance.
       * @return {string}
       */
    function () { return; };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    /**
       * Returns the map instance.
       * @return {GoogleMap}
       */
    Polyline.prototype.getMap = /**
       * Returns the map instance.
       * @return {GoogleMap}
       */
    function () { return this._map; };
    /**
     * Changes the polyline points.
     * @param points {ILatLng[]}
     */
    /**
       * Changes the polyline points.
       * @param points {ILatLng[]}
       */
    Polyline.prototype.setPoints = /**
       * Changes the polyline points.
       * @param points {ILatLng[]}
       */
    function (points) { };
    /**
     * Returns an instance of the BaseArrayClass
     * You can modify the points.
     * @return {BaseArrayClass<ILatLng>}
     */
    /**
       * Returns an instance of the BaseArrayClass
       * You can modify the points.
       * @return {BaseArrayClass<ILatLng>}
       */
    Polyline.prototype.getPoints = /**
       * Returns an instance of the BaseArrayClass
       * You can modify the points.
       * @return {BaseArrayClass<ILatLng>}
       */
    function () {
        return new BaseArrayClass(this._objectInstance.getPoints());
    };
    /**
     * When true, edges of the polyline are interpreted as geodesic and will follow the curvature of the Earth.
     * @param geoDesic {boolean}
     */
    /**
       * When true, edges of the polyline are interpreted as geodesic and will follow the curvature of the Earth.
       * @param geoDesic {boolean}
       */
    Polyline.prototype.setGeoDesic = /**
       * When true, edges of the polyline are interpreted as geodesic and will follow the curvature of the Earth.
       * @param geoDesic {boolean}
       */
    function (geoDesic) { };
    /**
     * Returns true if the polyline is geodesic
     */
    /**
       * Returns true if the polyline is geodesic
       */
    Polyline.prototype.getGeodesic = /**
       * Returns true if the polyline is geodesic
       */
    function () { return; };
    /**
     * Changes visibility of the polyline
     * @param visible {boolean}
     */
    /**
       * Changes visibility of the polyline
       * @param visible {boolean}
       */
    Polyline.prototype.setVisible = /**
       * Changes visibility of the polyline
       * @param visible {boolean}
       */
    function (visible) { };
    /**
     * Returns true if the polyline is visible
     * @return {boolean}
     */
    /**
       * Returns true if the polyline is visible
       * @return {boolean}
       */
    Polyline.prototype.getVisible = /**
       * Returns true if the polyline is visible
       * @return {boolean}
       */
    function () { return; };
    /**
     * Changes click-ability of the polyline
     * @param clickable {boolean}
     */
    /**
       * Changes click-ability of the polyline
       * @param clickable {boolean}
       */
    Polyline.prototype.setClickable = /**
       * Changes click-ability of the polyline
       * @param clickable {boolean}
       */
    function (clickable) { };
    /**
     * Returns true if the polyline is clickable
     * @return {boolean}
     */
    /**
       * Returns true if the polyline is clickable
       * @return {boolean}
       */
    Polyline.prototype.getClickable = /**
       * Returns true if the polyline is clickable
       * @return {boolean}
       */
    function () { return; };
    /**
     * Changes the polyline color
     * @param strokeColor {string}
     */
    /**
       * Changes the polyline color
       * @param strokeColor {string}
       */
    Polyline.prototype.setStrokeColor = /**
       * Changes the polyline color
       * @param strokeColor {string}
       */
    function (strokeColor) { };
    /**
     * Returns the current polyline color
     * @return {string}
     */
    /**
       * Returns the current polyline color
       * @return {string}
       */
    Polyline.prototype.getStrokeColor = /**
       * Returns the current polyline color
       * @return {string}
       */
    function () { return; };
    /**
     * Changes the polyline stroke width
     * @param strokeWidth {number}
     */
    /**
       * Changes the polyline stroke width
       * @param strokeWidth {number}
       */
    Polyline.prototype.setStrokeWidth = /**
       * Changes the polyline stroke width
       * @param strokeWidth {number}
       */
    function (strokeWidth) { };
    /**
     * Returns the current stroke width (unit: pixel).
     * @return {number}
     */
    /**
       * Returns the current stroke width (unit: pixel).
       * @return {number}
       */
    Polyline.prototype.getStrokeWidth = /**
       * Returns the current stroke width (unit: pixel).
       * @return {number}
       */
    function () { return; };
    /**
     * Changes the polyline zIndex order.
     * @param index {number}
     */
    /**
       * Changes the polyline zIndex order.
       * @param index {number}
       */
    Polyline.prototype.setZIndex = /**
       * Changes the polyline zIndex order.
       * @param index {number}
       */
    function (index) { };
    /**
     * Returns the current polyline zIndex
     * @return {number}
     */
    /**
       * Returns the current polyline zIndex
       * @return {number}
       */
    Polyline.prototype.getZIndex = /**
       * Returns the current polyline zIndex
       * @return {number}
       */
    function () { return; };
    /**
     * Remove the polyline
     */
    /**
       * Remove the polyline
       */
    Polyline.prototype.remove = /**
       * Remove the polyline
       */
    function () {
        delete this._objectInstance.getMap().get('_overlays')[this.getId()];
        this._objectInstance.remove();
        this.destroy();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Polyline.prototype, "getId", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], Polyline.prototype, "setPoints", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", BaseArrayClass)
    ], Polyline.prototype, "getPoints", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Polyline.prototype, "setGeoDesic", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Polyline.prototype, "getGeodesic", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Polyline.prototype, "setVisible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Polyline.prototype, "getVisible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], Polyline.prototype, "setClickable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Polyline.prototype, "getClickable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Polyline.prototype, "setStrokeColor", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Polyline.prototype, "getStrokeColor", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Polyline.prototype, "setStrokeWidth", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], Polyline.prototype, "getStrokeWidth", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Polyline.prototype, "setZIndex", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], Polyline.prototype, "getZIndex", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Polyline.prototype, "remove", null);
    return Polyline;
}(BaseClass));

/**
 * @hidden
 */
var TileOverlay = (function (_super) {
    __extends(TileOverlay, _super);
    function TileOverlay(_map, _objectInstance) {
        var _this = _super.call(this) || this;
        _this._map = _map;
        _this._objectInstance = _objectInstance;
        return _this;
    }
    /**
     * Returns the ID of instance.
     * @return {string}
     */
    /**
       * Returns the ID of instance.
       * @return {string}
       */
    TileOverlay.prototype.getId = /**
       * Returns the ID of instance.
       * @return {string}
       */
    function () { return; };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    /**
       * Returns the map instance.
       * @return {GoogleMap}
       */
    TileOverlay.prototype.getMap = /**
       * Returns the map instance.
       * @return {GoogleMap}
       */
    function () { return this._map; };
    /**
     * Set whether the tiles should fade in.
     * @param fadeIn {boolean}
     */
    /**
       * Set whether the tiles should fade in.
       * @param fadeIn {boolean}
       */
    TileOverlay.prototype.setFadeIn = /**
       * Set whether the tiles should fade in.
       * @param fadeIn {boolean}
       */
    function (fadeIn) { };
    /**
     * Get whether the tiles should fade in
     * @return {boolean}
     */
    /**
       * Get whether the tiles should fade in
       * @return {boolean}
       */
    TileOverlay.prototype.getFadeIn = /**
       * Get whether the tiles should fade in
       * @return {boolean}
       */
    function () { return; };
    /**
     * Set the zIndex of the tile overlay
     * @param zIndex {number}
     */
    /**
       * Set the zIndex of the tile overlay
       * @param zIndex {number}
       */
    TileOverlay.prototype.setZIndex = /**
       * Set the zIndex of the tile overlay
       * @param zIndex {number}
       */
    function (zIndex) { };
    /**
     * Returns the zIndex of the tile overlay
     * @return {number}
     */
    /**
       * Returns the zIndex of the tile overlay
       * @return {number}
       */
    TileOverlay.prototype.getZIndex = /**
       * Returns the zIndex of the tile overlay
       * @return {number}
       */
    function () { return; };
    /**
     * Set the opacity of the tile overlay
     * @param opacity {number}
     */
    /**
       * Set the opacity of the tile overlay
       * @param opacity {number}
       */
    TileOverlay.prototype.setOpacity = /**
       * Set the opacity of the tile overlay
       * @param opacity {number}
       */
    function (opacity) { };
    /**
     * Returns the opacity of the tile overlay
     * @return {number}
     */
    /**
       * Returns the opacity of the tile overlay
       * @return {number}
       */
    TileOverlay.prototype.getOpacity = /**
       * Returns the opacity of the tile overlay
       * @return {number}
       */
    function () { return; };
    /**
     * Set false if you want to hide
     * @param visible {boolean}
     */
    /**
       * Set false if you want to hide
       * @param visible {boolean}
       */
    TileOverlay.prototype.setVisible = /**
       * Set false if you want to hide
       * @param visible {boolean}
       */
    function (visible) { };
    /**
     * Returns true if the tile overlay is visible
     * @return {boolean}
     */
    /**
       * Returns true if the tile overlay is visible
       * @return {boolean}
       */
    TileOverlay.prototype.getVisible = /**
       * Returns true if the tile overlay is visible
       * @return {boolean}
       */
    function () { return; };
    /**
     * Get tile size
     */
    /**
       * Get tile size
       */
    TileOverlay.prototype.getTileSize = /**
       * Get tile size
       */
    function () { return; };
    /**
     * Remove the tile overlay
     */
    /**
       * Remove the tile overlay
       */
    TileOverlay.prototype.remove = /**
       * Remove the tile overlay
       */
    function () {
        delete this._objectInstance.getMap().get('_overlays')[this.getId()];
        this._objectInstance.remove();
        this.destroy();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], TileOverlay.prototype, "getId", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], TileOverlay.prototype, "setFadeIn", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], TileOverlay.prototype, "getFadeIn", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], TileOverlay.prototype, "setZIndex", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], TileOverlay.prototype, "getZIndex", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], TileOverlay.prototype, "setOpacity", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], TileOverlay.prototype, "getOpacity", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], TileOverlay.prototype, "setVisible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], TileOverlay.prototype, "getVisible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], TileOverlay.prototype, "getTileSize", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TileOverlay.prototype, "remove", null);
    return TileOverlay;
}(BaseClass));

/**
 * @hidden
 */
var KmlOverlay = (function (_super) {
    __extends(KmlOverlay, _super);
    function KmlOverlay(_map, _objectInstance) {
        var _this = _super.call(this) || this;
        _this._map = _map;
        _this._objectInstance = _objectInstance;
        Object.defineProperty(self, 'camera', {
            value: _this._objectInstance.camera,
            writable: false
        });
        Object.defineProperty(self, 'kmlData', {
            value: _this._objectInstance.kmlData,
            writable: false
        });
        return _this;
    }
    /**
     * Returns the viewport to contains all overlays
     */
    /**
       * Returns the viewport to contains all overlays
       */
    KmlOverlay.prototype.getDefaultViewport = /**
       * Returns the viewport to contains all overlays
       */
    function () { return; };
    /**
     * Returns the ID of instance.
     * @return {string}
     */
    /**
       * Returns the ID of instance.
       * @return {string}
       */
    KmlOverlay.prototype.getId = /**
       * Returns the ID of instance.
       * @return {string}
       */
    function () { return; };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    /**
       * Returns the map instance.
       * @return {GoogleMap}
       */
    KmlOverlay.prototype.getMap = /**
       * Returns the map instance.
       * @return {GoogleMap}
       */
    function () { return this._map; };
    /**
     * Changes visibility of the kml overlay
     * @param visible {boolean}
     */
    /**
       * Changes visibility of the kml overlay
       * @param visible {boolean}
       */
    KmlOverlay.prototype.setVisible = /**
       * Changes visibility of the kml overlay
       * @param visible {boolean}
       */
    function (visible) { };
    /**
     * Returns true if the kml overlay is visible
     * @return {boolean}
     */
    /**
       * Returns true if the kml overlay is visible
       * @return {boolean}
       */
    KmlOverlay.prototype.getVisible = /**
       * Returns true if the kml overlay is visible
       * @return {boolean}
       */
    function () { return; };
    /**
     * Changes click-ability of the KmlOverlay
     * @param clickable {boolean}
     */
    /**
       * Changes click-ability of the KmlOverlay
       * @param clickable {boolean}
       */
    KmlOverlay.prototype.setClickable = /**
       * Changes click-ability of the KmlOverlay
       * @param clickable {boolean}
       */
    function (clickable) { };
    /**
     * Returns true if the KmlOverlay is clickable
     * @return {boolean}
     */
    /**
       * Returns true if the KmlOverlay is clickable
       * @return {boolean}
       */
    KmlOverlay.prototype.getClickable = /**
       * Returns true if the KmlOverlay is clickable
       * @return {boolean}
       */
    function () { return; };
    /**
     * Remove the KmlOverlay
     */
    /**
       * Remove the KmlOverlay
       */
    KmlOverlay.prototype.remove = /**
       * Remove the KmlOverlay
       */
    function () {
        delete this._objectInstance.getMap().get('_overlays')[this.getId()];
        this._objectInstance.remove();
        this.destroy();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], KmlOverlay.prototype, "getDefaultViewport", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], KmlOverlay.prototype, "getId", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], KmlOverlay.prototype, "setVisible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], KmlOverlay.prototype, "getVisible", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], KmlOverlay.prototype, "setClickable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], KmlOverlay.prototype, "getClickable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], KmlOverlay.prototype, "remove", null);
    return KmlOverlay;
}(BaseClass));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenNativeSettings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(28);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Open Native Settings
 * @description
 * Plugin to open native screens of iOS/android settings
 * @usage
 * You can open any of these settings:
 * ```
 *  "about", // ios
 *  "accessibility", // ios, android
 *  "account", // ios, android
 *  "airplane_mode", // ios, android
 *  "apn", // android
 *  "application_details", // ios, android
 *  "application_development", // android
 *  "application", // android
 *  "autolock", // ios
 *  "battery_optimization", // android
 *  "bluetooth", // ios, android
 *  "castle", // ios
 *  "captioning", // android
 *  "cast", // android
 *  "cellular_usage", // ios
 *  "configuration_list", // ios
 *  "data_roaming", // android
 *  "date", // ios, android
 *  "display", // ios, android
 *  "dream", // android
 *  "facetime", // ios
 *  "home", // android
 *  "keyboard", // ios, android
 *  "keyboard_subtype", // android
 *  "locale", // ios, android
 * "location", // ios, android
 * "locations", // ios
 * "manage_all_applications", // android
 * "manage_applications", // android
 * "memory_card", // android
 * "music", // ios
 * "music_equalizer", // ios
 * "music_volume", // ios
 * "network", // ios, android
 * "nike_ipod", // ios
 * "nfcsharing", // android
 * "nfc_payment", // android
 * "nfc_settings", // android
 * "notes", // ios
 * "notification_id", // ios
 * "passbook", // ios
 * "phone", // ios
 * "photos", // ios
 * "print", // android
 * "privacy", // android
 * "quick_launch", // android
 * "reset", // ios
 * "ringtone", // ios
 * "browser", // ios
 * "search", // ios, android
 * "security", // android
 * "settings", // ios, android
 * "show_regulatory_info",
 * "sound", // ios, android
 * "software_update", // ios
 * "storage", // ios, android
 * "store", // ios, android
 * "sync", // android
 * "tethering", // ios
 * "twitter", // ios
 * "touch", // ios
 * "usage", // ios, android
 * "user_dictionary", // android
 * "video", // ios
 * "voice_input", // android
 * "vpn", // ios
 * "wallpaper", // ios
 * "wifi_ip", // android
 * "wifi", // ios, android
 * "wireless" // android
 *  ```
 * ```typescript
 * import { OpenNativeSettings } from '@ionic-native/open-native-settings';
 *
 *
 * constructor(private openNativeSettings: OpenNativeSettings) { }
 *
 * ...
 *
 *
 * ```
 */
var OpenNativeSettings = (function (_super) {
    __extends(OpenNativeSettings, _super);
    function OpenNativeSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Opens a setting dialog
     * @param setting {string|array} setting name
     * @return {Promise<any>}
     */
    /**
       * Opens a setting dialog
       * @param setting {string|array} setting name
       * @return {Promise<any>}
       */
    OpenNativeSettings.prototype.open = /**
       * Opens a setting dialog
       * @param setting {string|array} setting name
       * @return {Promise<any>}
       */
    function (setting) {
        return;
    };
    OpenNativeSettings.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], OpenNativeSettings.prototype, "open", null);
    /**
     * @name Open Native Settings
     * @description
     * Plugin to open native screens of iOS/android settings
     * @usage
     * You can open any of these settings:
     * ```
     *  "about", // ios
     *  "accessibility", // ios, android
     *  "account", // ios, android
     *  "airplane_mode", // ios, android
     *  "apn", // android
     *  "application_details", // ios, android
     *  "application_development", // android
     *  "application", // android
     *  "autolock", // ios
     *  "battery_optimization", // android
     *  "bluetooth", // ios, android
     *  "castle", // ios
     *  "captioning", // android
     *  "cast", // android
     *  "cellular_usage", // ios
     *  "configuration_list", // ios
     *  "data_roaming", // android
     *  "date", // ios, android
     *  "display", // ios, android
     *  "dream", // android
     *  "facetime", // ios
     *  "home", // android
     *  "keyboard", // ios, android
     *  "keyboard_subtype", // android
     *  "locale", // ios, android
     * "location", // ios, android
     * "locations", // ios
     * "manage_all_applications", // android
     * "manage_applications", // android
     * "memory_card", // android
     * "music", // ios
     * "music_equalizer", // ios
     * "music_volume", // ios
     * "network", // ios, android
     * "nike_ipod", // ios
     * "nfcsharing", // android
     * "nfc_payment", // android
     * "nfc_settings", // android
     * "notes", // ios
     * "notification_id", // ios
     * "passbook", // ios
     * "phone", // ios
     * "photos", // ios
     * "print", // android
     * "privacy", // android
     * "quick_launch", // android
     * "reset", // ios
     * "ringtone", // ios
     * "browser", // ios
     * "search", // ios, android
     * "security", // android
     * "settings", // ios, android
     * "show_regulatory_info",
     * "sound", // ios, android
     * "software_update", // ios
     * "storage", // ios, android
     * "store", // ios, android
     * "sync", // android
     * "tethering", // ios
     * "twitter", // ios
     * "touch", // ios
     * "usage", // ios, android
     * "user_dictionary", // android
     * "video", // ios
     * "voice_input", // android
     * "vpn", // ios
     * "wallpaper", // ios
     * "wifi_ip", // android
     * "wifi", // ios, android
     * "wireless" // android
     *  ```
     * ```typescript
     * import { OpenNativeSettings } from '@ionic-native/open-native-settings';
     *
     *
     * constructor(private openNativeSettings: OpenNativeSettings) { }
     *
     * ...
     *
     *
     * ```
     */
    OpenNativeSettings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            pluginName: 'OpenNativeSettings',
            plugin: 'cordova-open-native-settings',
            pluginRef: 'cordova.plugins.settings',
            repo: 'https://github.com/guyromb/Cordova-open-native-settings',
            platforms: ['Android', 'iOS']
        })
    ], OpenNativeSettings);
    return OpenNativeSettings;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 823:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(308);
//# sourceMappingURL=fromEvent.js.map

/***/ }),

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab1PokerclubsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_clientrest_pokerclubs_clientrest_pokerclubs__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_vars_global_vars__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_diagnostic__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_open_native_settings__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_app_minimize__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var Tab1PokerclubsPage = /** @class */ (function () {
    function Tab1PokerclubsPage(navCtrl, navParams, clientrest, alertCtrl, modalCtrl, loadingController, platform, globalvars, launchNavigator, diagnostic, toastController, storage, openNativeSettings, appMinimize) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.clientrest = clientrest;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingController = loadingController;
        this.platform = platform;
        this.globalvars = globalvars;
        this.launchNavigator = launchNavigator;
        this.diagnostic = diagnostic;
        this.toastController = toastController;
        this.storage = storage;
        this.openNativeSettings = openNativeSettings;
        this.appMinimize = appMinimize;
        this.map_itens = {};
        this.locations = [];
        this.myLocationEnabled = false;
    }
    Tab1PokerclubsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.globalvars.settipoPesquisaClubes("R");
        this.getPermissaoLocalizacao().then(function (permissao) {
            _this.DysplayMap(permissao).then(function (data) {
                if (_this.globalvars.getabriuAPPPelaNotificacao()) {
                    _this.globalvars.setabriuAPPPelaNotificacao(false);
                    _this.globalvars.setrecebeuNotificacao(false);
                    _this.navCtrl.push('VisualizaNotificacaoPokerclubsPage').then(function (data2) {
                    });
                }
            });
        });
    };
    Tab1PokerclubsPage.prototype.ionViewDidEnter = function () {
        this.initializeBackButtonCustomHandler();
        if (this.globalvars.getlocalizandoClubes()) {
            if (this.globalvars.gettipoPesquisaClubes() == "C") {
                var cidadeSelectedArray = this.globalvars.getcodigoCidadeAtual();
                if ((cidadeSelectedArray[0] !== 0) && (cidadeSelectedArray[1] !== '') && (cidadeSelectedArray[2] !== '') && (cidadeSelectedArray[3] !== '')) {
                    if (this.globalvars.getLocationInit()) {
                        this.globalvars.setLocationInit(false);
                        this.globalvars.setlatAtualDispositivo(cidadeSelectedArray[2]);
                        this.globalvars.setlngAtualDispositivo(cidadeSelectedArray[3]);
                        this.storage.set('latitude', cidadeSelectedArray[2]);
                        this.storage.set('longitude', cidadeSelectedArray[3]);
                    }
                    var movepos = new __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["d" /* LatLng */](cidadeSelectedArray[2], cidadeSelectedArray[3]);
                    this.map_pokerclubs.animateCamera({
                        target: movepos,
                        zoom: 10,
                        duration: 1250
                    });
                }
            }
            else if (this.globalvars.gettipoPesquisaClubes() == "N") {
                var clubeSelectedArray = this.globalvars.getcodigoClubeAtual();
                this.globalvars.getcodigoClubeAtual();
                if ((clubeSelectedArray[0] !== 0) && (clubeSelectedArray[1] !== '') && (clubeSelectedArray[2] !== '') && (clubeSelectedArray[3] !== '')) {
                    if (this.globalvars.getLocationInit()) {
                        this.globalvars.setLocationInit(false);
                        this.globalvars.setlatAtualDispositivo(clubeSelectedArray[2]);
                        this.globalvars.setlngAtualDispositivo(clubeSelectedArray[3]);
                        this.storage.set('latitude', clubeSelectedArray[2]);
                        this.storage.set('longitude', clubeSelectedArray[3]);
                    }
                    var movepos = new __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["d" /* LatLng */](clubeSelectedArray[2], clubeSelectedArray[3]);
                    this.map_pokerclubs.animateCamera({
                        target: movepos,
                        zoom: 10,
                        duration: 1250
                    });
                }
            }
            this.globalvars.settipoPesquisaClubes("R");
            this.globalvars.setlocalizandoClubes(false);
        }
    };
    Tab1PokerclubsPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    Tab1PokerclubsPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.botaoVoltarAndroid();
        }, 101);
    };
    Tab1PokerclubsPage.prototype.botaoVoltarAndroid = function () {
        this.appMinimize.minimize().then(function (data) {
        });
    };
    Tab1PokerclubsPage.prototype.getPermissaoLocalizacao = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.platform.is("android")) {
                _this.diagnostic.getPermissionAuthorizationStatus(_this.diagnostic.permission.ACCESS_COARSE_LOCATION).then(function (status) {
                    if (status !== _this.diagnostic.permissionStatus.GRANTED) {
                        _this.diagnostic.requestRuntimePermission(_this.diagnostic.permission.ACCESS_COARSE_LOCATION).then(function (data) {
                            if (data == "DENIED" || data == "DENIED_ALWAYS") {
                                resolve(false);
                            }
                            else {
                                resolve(true);
                            }
                        });
                    }
                    else {
                        resolve(true);
                    }
                });
            }
            if (_this.platform.is("ios")) {
                resolve(true);
            }
        });
    };
    Tab1PokerclubsPage.prototype.DysplayMap = function (permissao) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.showToast("Carregando mapa. Aguarde...", 3000);
            if (_this.globalvars.gettipoPesquisaClubes() == "R") {
                var latN_1 = -13.385265;
                var lngN_1 = -52.679194;
                var dataParam = {
                    'user_id': _this.globalvars.getidUsuario()
                };
                _this.clientrest.getClubsAllCidades(dataParam).then(function (data) {
                    if (data["result"] == "S") {
                        var clubesAll = data["items"];
                        _this.createMap(clubesAll, latN_1, lngN_1, _this);
                    }
                }).catch(function (error) {
                    if (_this.toast) {
                        try {
                            _this.toast.dismiss();
                        }
                        catch (exception) {
                        }
                    }
                });
            }
            resolve(true);
        });
    };
    Tab1PokerclubsPage.prototype.distanceFrom = function (origLat, origLng, destLat, destLng) {
        var lat = [origLat, destLat];
        var lng = [origLng, destLng];
        var R = 6378137;
        var dLat = (lat[1] - lat[0]) * Math.PI / 180;
        var dLng = (lng[1] - lng[0]) * Math.PI / 180;
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat[0] * Math.PI / 180) * Math.cos(lat[1] * Math.PI / 180) *
                Math.sin(dLng / 2) * Math.sin(dLng / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        var e = (Math.round(d / 1000 * 10) / 10) + 5;
        return Math.round(e);
    };
    Tab1PokerclubsPage.prototype.addCluster = function (objectThis) {
        objectThis.map_pokerclubs.addMarkerCluster({
            boundsDraw: false,
            markers: objectThis.locations,
            icons: [
                { min: 2, max: 1000, url: "assets/imgs/m3.png", anchor: { x: 16, y: 16 } }
            ]
        }).then(function (markerCluster) {
            markerCluster.on(__WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK).subscribe(function (cluster) {
                var markerClick = cluster[1];
                var ItemIdx = parseFloat(markerClick.get('zIndex'));
                if (ItemIdx > 99999991000) {
                    ItemIdx = ItemIdx - 99999991001;
                    var dataParam = {
                        'club_id': objectThis.map_itens[ItemIdx]["id"],
                        "user_id": objectThis.globalvars.getidUsuario()
                    };
                    console.log(objectThis.globalvars.getidUsuario());
                    objectThis.clientrest.getoClub(dataParam).then(function (data) {
                        if (data["result"] == "N") {
                            objectThis.CriaAlerta("O Clube", data["message"]);
                        }
                        else {
                            objectThis.globalvars.setdadosClubeAtual(data);
                            if (objectThis.map_itens[ItemIdx]["premium"] == "S") {
                                objectThis.loadingPage('ClubpremiumPokerclubsPage');
                            }
                            else {
                                var alert_1 = objectThis.alertCtrl.create({
                                    title: objectThis.map_itens[ItemIdx]["name"],
                                    message: objectThis.map_itens[ItemIdx]["address"],
                                    cssClass: 'alertaCustom',
                                    enableBackdropDismiss: false,
                                    buttons: [{
                                            text: 'Traçar Rota',
                                            role: 'Traçar Rota',
                                            handler: function () {
                                                objectThis.buttonTracarRota(objectThis.map_itens[ItemIdx]["lat"], objectThis.map_itens[ItemIdx]["lng"]);
                                            }
                                        }, {
                                            text: 'Fechar',
                                            handler: function () {
                                                alert_1.dismiss();
                                            }
                                        }]
                                });
                                alert_1.present();
                            }
                        }
                    });
                }
            });
            objectThis.map_pokerclubs.getMyLocation().then(function (locationSet) {
                if (!objectThis.myLocationEnabled) {
                    objectThis.myLocationEnabled = true;
                    objectThis.map_pokerclubs.setMyLocationButtonEnabled(true);
                    objectThis.map_pokerclubs.setCompassEnabled(true);
                }
                objectThis.globalvars.setSemPosicaoAtual(false);
                objectThis.globalvars.setlatAtualDispositivo(locationSet.latLng.lat);
                objectThis.globalvars.setlngAtualDispositivo(locationSet.latLng.lng);
                objectThis.storage.set('latitude', locationSet.latLng.lat);
                objectThis.storage.set('longitude', locationSet.latLng.lng);
                var movepos = new __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["d" /* LatLng */](locationSet.latLng.lat, locationSet.latLng.lng);
                objectThis.map_pokerclubs.animateCamera({
                    target: movepos,
                    zoom: 10,
                    duration: 1250
                });
            }).catch(function (error) {
                objectThis.storage.get('latitude').then(function (latitudeSalva) {
                    objectThis.storage.get('longitude').then(function (longitudeSalva) {
                        if (latitudeSalva !== null) {
                            var movepos = new __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["d" /* LatLng */](parseFloat(latitudeSalva), parseFloat(longitudeSalva));
                            objectThis.map_pokerclubs.animateCamera({
                                target: movepos,
                                zoom: 10,
                                duration: 1250
                            });
                        }
                        else {
                            var alert_2 = objectThis.alertCtrl.create({
                                title: 'Localização',
                                message: 'Não foi possível obter sua localização atual. Desejar acessar as configurações de localização?',
                                cssClass: 'alertaCustom',
                                enableBackdropDismiss: false,
                                buttons: [
                                    {
                                        text: 'Não',
                                        role: 'Não',
                                        handler: function () {
                                            objectThis.globalvars.setSemPosicaoAtual(true);
                                            objectThis.globalvars.setLocationInit(true);
                                            objectThis.navCtrl.parent.select(2);
                                            alert_2.dismiss();
                                        }
                                    },
                                    {
                                        text: 'Sim',
                                        handler: function () {
                                            objectThis.openNativeSettings.open("location").then(function () {
                                                objectThis.map_pokerclubs.getMyLocation().then(function (locationSet) {
                                                    if (!objectThis.myLocationEnabled) {
                                                        objectThis.myLocationEnabled = true;
                                                        objectThis.map_pokerclubs.setMyLocationButtonEnabled(true);
                                                        objectThis.map_pokerclubs.setCompassEnabled(true);
                                                    }
                                                    objectThis.globalvars.setSemPosicaoAtual(false);
                                                    objectThis.globalvars.setlatAtualDispositivo(locationSet.latLng.lat);
                                                    objectThis.globalvars.setlngAtualDispositivo(locationSet.latLng.lng);
                                                    objectThis.storage.set('latitude', locationSet.latLng.lat);
                                                    objectThis.storage.set('longitude', locationSet.latLng.lng);
                                                    var movepos = new __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["d" /* LatLng */](locationSet.latLng.lat, locationSet.latLng.lng);
                                                    objectThis.map_pokerclubs.animateCamera({
                                                        target: movepos,
                                                        zoom: 10,
                                                        duration: 1250
                                                    });
                                                });
                                            }).catch(function (error) {
                                                objectThis.globalvars.setSemPosicaoAtual(true);
                                                objectThis.globalvars.setLocationInit(true);
                                                objectThis.navCtrl.parent.select(2);
                                            });
                                            return false;
                                        }
                                    }
                                ]
                            });
                            alert_2.present();
                        }
                    });
                });
            });
        });
    };
    Tab1PokerclubsPage.prototype.createMap = function (listitens, parseLat, parseLng, objectThis) {
        objectThis.map_itens = listitens;
        objectThis.location = new __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["d" /* LatLng */](-13.385265, -52.679194);
        objectThis.locations = [];
        var countmarkers = listitens.length;
        var latS = 0;
        var lngS = 0;
        var imagemIcon = "";
        for (var ItemIdx = 0; ItemIdx < countmarkers; ItemIdx++) {
            latS = parseFloat(listitens[ItemIdx]["lat"]);
            lngS = parseFloat(listitens[ItemIdx]["lng"]);
            if (listitens[ItemIdx]["premium"] == "S") {
                imagemIcon = "assets/imgs/marker-premium.png";
            }
            else {
                imagemIcon = "assets/imgs/marker-nao-premium.png";
            }
            objectThis.locations.push({
                position: { lat: latS, lng: lngS },
                icon: imagemIcon,
                zIndex: 99999991000 + (ItemIdx + 1)
            });
        }
        objectThis.platform.ready().then(function () {
            var mapOptions = objectThis.getOptionsMapa(parseLat, parseLng, 4);
            var element = objectThis.mapElement.nativeElement;
            objectThis.map_pokerclubs = __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["a" /* GoogleMaps */].create(element, mapOptions);
            objectThis.map_pokerclubs.one(__WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY).then(function () {
                var options = {
                    target: objectThis.location,
                    zoom: 4
                };
                objectThis.map_pokerclubs.moveCamera(options);
                setTimeout(function () { objectThis.addCluster(objectThis); }, 500);
            });
        });
    };
    Tab1PokerclubsPage.prototype.buttonTracarRota = function (LatDestino, LngDestino) {
        var LatOrigem = -13.385265;
        var LngOrigem = -52.679194;
        if (this.myLocationEnabled) {
            this.map_pokerclubs.getMyLocation().then(function (locationSet) {
                LatOrigem = locationSet.latLng.lat;
                LngOrigem = locationSet.latLng.lng;
            });
        }
        var origem = LatOrigem + ',' + LngOrigem;
        var destino = LatDestino + ',' + LngDestino;
        var optionsSelection = {
            dialogHeaderText: "Selecione o aplicativo que deseja usar",
            cancelButtonText: "Cancelar"
        };
        var optionsNavigator = {
            start: origem,
            appSelection: optionsSelection
        };
        this.launchNavigator.navigate(destino, optionsNavigator)
            .then(function (success) {
        }, function (error) {
        });
    };
    Tab1PokerclubsPage.prototype.onAllClick = function () {
        var movepos = new __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["d" /* LatLng */](-13.385265, -52.679194);
        this.map_pokerclubs.animateCamera({
            target: movepos,
            zoom: 4,
            duration: 1500
        });
    };
    Tab1PokerclubsPage.prototype.loadingPage = function (pageName) {
        var _this = this;
        var loading = this.loadingController.create({
            spinner: "bubbles",
            cssClass: "class-loading"
        });
        loading.present();
        setTimeout(function () {
            _this.navCtrl.push(pageName);
        }, 1000);
        setTimeout(function () {
            try {
                loading.dismiss();
            }
            catch (exception) {
            }
        }, 2000);
    };
    // Funcao para criar alertas em todo o sistema
    Tab1PokerclubsPage.prototype.CriaAlerta = function (titulo, subtitulo) {
        var alert = this.alertCtrl.create({
            title: titulo,
            cssClass: 'alertaCustom',
            subTitle: subtitulo,
            enableBackdropDismiss: false,
            buttons: ['OK']
        });
        alert.present();
    };
    //Funcao que cria o model da propaganda quando entrar no mapa
    Tab1PokerclubsPage.prototype.DysplayBanner = function () {
        var data = {};
        var options = {
            enableBackdropDismiss: false,
            showBackdrop: false
        };
        var bannerModal = this.modalCtrl.create('BannermapPokerclubsPage', data, options);
        bannerModal.present();
    };
    Tab1PokerclubsPage.prototype.getOptionsMapa = function (parseLat, parseLng, parseZoom) {
        return {
            backgroundColor: '#38414e',
            mapType: __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["c" /* GoogleMapsMapTypeId */].ROADMAP,
            controls: {
                'compassButton': false,
                'compass': true,
                'myLocationButton': false,
                'myLocation': true,
                'indoorPicker': false,
                'zoom': true,
                'mapToolbar': false // android only
            },
            gestures: {
                scroll: true,
                tilt: true,
                zoom: true,
                rotate: true
            },
            camera: {
                target: { lat: parseLat, lng: parseLng },
                zoom: parseZoom,
                tilt: 30,
            },
            preferences: {
                zoom: {
                    minZoom: 1,
                    maxZoom: 20
                },
                padding: {
                    left: 0,
                    top: 0,
                    bottom: 0,
                    right: 0
                },
                building: true
            },
            styles: [
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#242f3e"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#746855"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#242f3e"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative.locality",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#d59563"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#d59563"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#263c3f"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#6b9a76"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#38414e"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#212a37"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9ca5b3"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#746855"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#1f2835"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#f3d19c"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#2f3948"
                        }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#d59563"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#17263c"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#515c6d"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#17263c"
                        }
                    ]
                }
            ]
        };
    };
    Tab1PokerclubsPage.prototype.showToast = function (messagem, tempo) {
        if (this.toast) {
            try {
                this.toast.dismiss();
            }
            catch (exception) {
            }
        }
        this.toast = this.toastController.create({
            message: messagem,
            duration: tempo,
            position: 'middle',
            cssClass: 'class-toast'
        });
        this.toast.onDidDismiss(function () {
        });
        this.toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("map_pokerclubs"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], Tab1PokerclubsPage.prototype, "mapElement", void 0);
    Tab1PokerclubsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab1-pokerclubs',template:/*ion-inline-start:"C:\Roots\SAINTEC\pokerclubs\src\pages\tab1-pokerclubs\tab1-pokerclubs.html"*/'<ion-header>\n  <ion-navbar>   \n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>    \n    <ion-title>PokerClubs - Clubes próximos a você</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div #map_pokerclubs id="map_pokerclubs">\n    <div class="map_menu">\n      <button color="cinza" ion-button (click)="onAllClick($event)">Exibir Todos</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Roots\SAINTEC\pokerclubs\src\pages\tab1-pokerclubs\tab1-pokerclubs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_clientrest_pokerclubs_clientrest_pokerclubs__["a" /* ClientrestPokerclubsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__["a" /* LaunchNavigator */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_open_native_settings__["a" /* OpenNativeSettings */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_app_minimize__["a" /* AppMinimize */]])
    ], Tab1PokerclubsPage);
    return Tab1PokerclubsPage;
}());

//# sourceMappingURL=tab1-pokerclubs.js.map

/***/ })

});
//# sourceMappingURL=10.js.map