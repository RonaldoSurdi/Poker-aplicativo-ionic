webpackJsonp([7],{

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizaNotificacaoPokerclubsPageModule", function() { return VisualizaNotificacaoPokerclubsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_photo_viewer__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__visualiza_notificacao_pokerclubs__ = __webpack_require__(829);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var VisualizaNotificacaoPokerclubsPageModule = /** @class */ (function () {
    function VisualizaNotificacaoPokerclubsPageModule() {
    }
    VisualizaNotificacaoPokerclubsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__visualiza_notificacao_pokerclubs__["a" /* VisualizaNotificacaoPokerclubsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["b" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__visualiza_notificacao_pokerclubs__["a" /* VisualizaNotificacaoPokerclubsPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_photo_viewer__["a" /* PhotoViewer */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicErrorHandler */] }
            ],
        })
    ], VisualizaNotificacaoPokerclubsPageModule);
    return VisualizaNotificacaoPokerclubsPageModule;
}());

//# sourceMappingURL=visualiza-notificacao-pokerclubs.module.js.map

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageViewerController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_viewer__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__image_viewer_component__ = __webpack_require__(735);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};




var ImageViewerController = (function () {
    function ImageViewerController(_app, config, deepLinker) {
        this._app = _app;
        this.config = config;
        this.deepLinker = deepLinker;
    }
    /**
     * Create a image-viewer instance to display. See below for options.
     *
     * @param {object} imageElement The image element
     * @param {object} opts ImageViewer options
     */
    /**
       * Create a image-viewer instance to display. See below for options.
       *
       * @param {object} imageElement The image element
       * @param {object} opts ImageViewer options
       */
    ImageViewerController.prototype.create = /**
       * Create a image-viewer instance to display. See below for options.
       *
       * @param {object} imageElement The image element
       * @param {object} opts ImageViewer options
       */
    function (imageElement, opts) {
        if (opts === void 0) { opts = {}; }
        var image = imageElement.src;
        var position = imageElement.getBoundingClientRect();
        var options = __assign({ image: image, position: position }, opts);
        return new __WEBPACK_IMPORTED_MODULE_2__image_viewer__["a" /* ImageViewer */](this._app, __WEBPACK_IMPORTED_MODULE_3__image_viewer_component__["a" /* ImageViewerComponent */], options, this.config, this.deepLinker);
    };
    ImageViewerController.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    /** @nocollapse */
    ImageViewerController.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */], },
        { type: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Config */], },
        { type: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* DeepLinker */], },
    ]; };
    return ImageViewerController;
}());

//# sourceMappingURL=image-viewer.controller.js.map

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__image_viewer_src_animation__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__image_viewer_transition_gesture__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__image_viewer_zoom_gesture__ = __webpack_require__(747);
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






var ImageViewerComponent = (function (_super) {
    __extends(ImageViewerComponent, _super);
    function ImageViewerComponent(_gestureCtrl, elementRef, _nav, _zone, renderer, domCtrl, platform, _navParams, _config, _sanitizer) {
        var _this = _super.call(this, _config, elementRef, renderer) || this;
        _this._gestureCtrl = _gestureCtrl;
        _this.elementRef = elementRef;
        _this._nav = _nav;
        _this._zone = _zone;
        _this.renderer = renderer;
        _this.domCtrl = domCtrl;
        _this.platform = platform;
        _this._navParams = _navParams;
        _this._sanitizer = _sanitizer;
        var url = _navParams.get('image');
        _this.updateImageSrc(url);
        return _this;
    }
    ImageViewerComponent.prototype.updateImageSrc = function (src) {
        this.imageUrl = this._sanitizer.bypassSecurityTrustUrl(src);
    };
    ImageViewerComponent.prototype.updateImageSrcWithTransition = function (src) {
        var imageElement = this.image.nativeElement;
        var lowResImgWidth = imageElement.clientWidth;
        this.updateImageSrc(src);
        var animation = new __WEBPACK_IMPORTED_MODULE_3__image_viewer_src_animation__["a" /* ImageViewerSrcAnimation */](this.platform, this.image);
        imageElement.onload = function () { return animation.scaleFrom(lowResImgWidth); };
    };
    ImageViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navPop = function () { return _this._nav.pop(); };
        this.unregisterBackButton = this.platform.registerBackButtonAction(navPop);
        this._zone.runOutsideAngular(function () { return _this.dragGesture = new __WEBPACK_IMPORTED_MODULE_4__image_viewer_transition_gesture__["a" /* ImageViewerTransitionGesture */](_this.platform, _this, _this.domCtrl, _this.renderer, navPop); });
    };
    ImageViewerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // imageContainer is set after the view has been initialized
        this._zone.runOutsideAngular(function () { return _this.pinchGesture = new __WEBPACK_IMPORTED_MODULE_5__image_viewer_zoom_gesture__["a" /* ImageViewerZoomGesture */](_this, _this.imageContainer, _this.platform, _this.renderer); });
    };
    ImageViewerComponent.prototype.ngOnDestroy = function () {
        this.dragGesture && this.dragGesture.destroy();
        this.pinchGesture && this.pinchGesture.destroy();
        this.unregisterBackButton();
    };
    ImageViewerComponent.prototype.bdClick = function () {
        if (this._navParams.get('enableBackdropDismiss')) {
            this._nav.pop();
        }
    };
    ImageViewerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */], args: [{
                    selector: 'image-viewer',
                    template: "\n\t\t<ion-header no-border>\n\t\t\t<ion-navbar>\n\t\t\t</ion-navbar>\n\t\t</ion-header>\n\n\t\t<ion-backdrop (click)=\"bdClick()\"></ion-backdrop>\n\n\t\t<div class=\"image-wrapper\">\n\t\t\t<div class=\"image\" #imageContainer>\n\t\t\t\t<img [src]=\"imageUrl\" tappable #image />\n\t\t\t</div>\n\t\t</div>\n\t",
                    styles: ['image-viewer.ion-page { position: absolute; top: 0; right: 0; bottom: 0; left: 0; display: flex; flex-direction: column; height: 100%; opacity: 1; } image-viewer.ion-page ion-navbar.toolbar .toolbar-background { background-color: transparent; } image-viewer.ion-page ion-navbar.toolbar.toolbar-ios { padding-top: calc(20px + 4px); } image-viewer.ion-page ion-navbar .bar-button-default { color: white; } image-viewer.ion-page .backdrop { will-change: opacity; } image-viewer.ion-page .image-wrapper { position: relative; z-index: 10; display: flex; overflow: hidden; flex-direction: column; pointer-events: none; margin-top: 56px; flex-grow: 1; justify-content: center; } image-viewer.ion-page .image { will-change: transform; } image-viewer.ion-page img { display: block; pointer-events: auto; max-width: 100%; max-height: 100vh; margin: 0 auto; } '],
                    encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* ViewEncapsulation */].None
                },] },
    ];
    /** @nocollapse */
    ImageViewerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* GestureController */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["t" /* NavController */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgZone */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["V" /* Renderer */], },
        { type: __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* DomController */], },
        { type: __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["w" /* Platform */], },
        { type: __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["u" /* NavParams */], },
        { type: __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* Config */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], },
    ]; };
    ImageViewerComponent.propDecorators = {
        "imageContainer": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */], args: ['imageContainer',] },],
        "image": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */], args: ['image',] },],
    };
    return ImageViewerComponent;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* Ion */]));

//# sourceMappingURL=image-viewer.component.js.map

/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageViewerDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__image_viewer_controller__ = __webpack_require__(734);


var ImageViewerDirective = (function () {
    function ImageViewerDirective(_el, imageViewerCtrl) {
        this._el = _el;
        this.imageViewerCtrl = imageViewerCtrl;
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ImageViewerDirective.prototype.onClick = function (event) {
        var _this = this;
        event.stopPropagation();
        var element = this._el.nativeElement;
        var onCloseCallback = function () { return _this.close.emit(); };
        var imageViewer = this.imageViewerCtrl.create(element, { fullResImage: this.src, onCloseCallback: onCloseCallback });
        imageViewer.present();
    };
    ImageViewerDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */], args: [{
                    selector: '[imageViewer]'
                },] },
    ];
    /** @nocollapse */
    ImageViewerDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__image_viewer_controller__["a" /* ImageViewerController */], },
    ]; };
    ImageViewerDirective.propDecorators = {
        "src": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */], args: ['imageViewer',] },],
        "close": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */] },],
        "onClick": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */], args: ['click', ['$event'],] },],
    };
    return ImageViewerDirective;
}());

//# sourceMappingURL=image-viewer.directive.js.map

/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageViewer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular_navigation_overlay_proxy__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__image_viewer_impl__ = __webpack_require__(743);
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


var ImageViewer = (function (_super) {
    __extends(ImageViewer, _super);
    function ImageViewer(app, component, opts, config, deepLinker) {
        if (opts === void 0) { opts = {}; }
        var _this = _super.call(this, app, component, config, deepLinker) || this;
        _this.opts = opts;
        return _this;
    }
    ImageViewer.prototype.getImplementation = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__image_viewer_impl__["a" /* ImageViewerImpl */](this._app, this._component, this.opts, this._config);
    };
    return ImageViewer;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular_navigation_overlay_proxy__["a" /* OverlayProxy */]));

//# sourceMappingURL=image-viewer.js.map

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoViewer; });
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
 * @name Photo Viewer
 * @description This plugin can display your image in full screen with the ability to pan, zoom, and share the image.
 * @usage
 * ```typescript
 * import { PhotoViewer } from '@ionic-native/photo-viewer';
 *
 * constructor(private photoViewer: PhotoViewer) { }
 *
 * ...
 *
 * this.photoViewer.show('https://mysite.com/path/to/image.jpg');
 *
 * this.photoViewer.show('https://mysite.com/path/to/image.jpg', 'My image title', {share: false});
 * ```
 */
var PhotoViewer = (function (_super) {
    __extends(PhotoViewer, _super);
    function PhotoViewer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Shows an image in full screen
     * @param url {string} URL or path to image
     * @param title {string}
     * @param options {PhotoViewerOptions}
     */
    /**
       * Shows an image in full screen
       * @param url {string} URL or path to image
       * @param title {string}
       * @param options {PhotoViewerOptions}
       */
    PhotoViewer.prototype.show = /**
       * Shows an image in full screen
       * @param url {string} URL or path to image
       * @param title {string}
       * @param options {PhotoViewerOptions}
       */
    function (url, title, options) { };
    PhotoViewer.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object]),
        __metadata("design:returntype", void 0)
    ], PhotoViewer.prototype, "show", null);
    /**
     * @name Photo Viewer
     * @description This plugin can display your image in full screen with the ability to pan, zoom, and share the image.
     * @usage
     * ```typescript
     * import { PhotoViewer } from '@ionic-native/photo-viewer';
     *
     * constructor(private photoViewer: PhotoViewer) { }
     *
     * ...
     *
     * this.photoViewer.show('https://mysite.com/path/to/image.jpg');
     *
     * this.photoViewer.show('https://mysite.com/path/to/image.jpg', 'My image title', {share: false});
     * ```
     */
    PhotoViewer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            pluginName: 'PhotoViewer',
            plugin: 'com-sarriaroman-photoviewer',
            pluginRef: 'PhotoViewer',
            repo: 'https://github.com/sarriaroman/photoviewer',
            platforms: ['Android', 'iOS']
        })
    ], PhotoViewer);
    return PhotoViewer;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_module__ = __webpack_require__(742);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_image_viewer_component__ = __webpack_require__(735);
/* unused harmony reexport ImageViewerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_image_viewer_directive__ = __webpack_require__(736);
/* unused harmony reexport ImageViewerDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_image_viewer_controller__ = __webpack_require__(734);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__src_image_viewer_controller__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_image_viewer__ = __webpack_require__(737);
/* unused harmony reexport ImageViewer */





//# sourceMappingURL=ionic-img-viewer.js.map

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonicImageViewerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_viewer_directive__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__image_viewer_component__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__image_viewer_controller__ = __webpack_require__(734);





var IonicImageViewerModule = (function () {
    function IonicImageViewerModule() {
    }
    IonicImageViewerModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicModule */]],
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_3__image_viewer_component__["a" /* ImageViewerComponent */],
                        __WEBPACK_IMPORTED_MODULE_2__image_viewer_directive__["a" /* ImageViewerDirective */]
                    ],
                    providers: [__WEBPACK_IMPORTED_MODULE_4__image_viewer_controller__["a" /* ImageViewerController */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_2__image_viewer_directive__["a" /* ImageViewerDirective */]],
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_3__image_viewer_component__["a" /* ImageViewerComponent */]]
                },] },
    ];
    /** @nocollapse */
    IonicImageViewerModule.ctorParameters = function () { return []; };
    return IonicImageViewerModule;
}());

//# sourceMappingURL=module.js.map

/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageViewerImpl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__image_viewer_transitions__ = __webpack_require__(744);
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




var ImageViewerImpl = (function (_super) {
    __extends(ImageViewerImpl, _super);
    function ImageViewerImpl(app, component, opts, config) {
        if (opts === void 0) { opts = {}; }
        var _this = _super.call(this, component, opts) || this;
        _this.app = app;
        config.setTransition('image-viewer-enter', __WEBPACK_IMPORTED_MODULE_3__image_viewer_transitions__["a" /* ImageViewerEnter */]);
        config.setTransition('image-viewer-leave', __WEBPACK_IMPORTED_MODULE_3__image_viewer_transitions__["b" /* ImageViewerLeave */]);
        _this.didLeave.subscribe(function () { return opts.onCloseCallback && opts.onCloseCallback(); });
        _this.willEnter.subscribe(function () {
            return _this.handleHighResImageLoad(opts.fullResImage);
        });
        return _this;
    }
    ImageViewerImpl.prototype.getTransitionName = function (direction) {
        return "image-viewer-" + (direction === 'back' ? 'leave' : 'enter');
    };
    ImageViewerImpl.prototype.present = function (navOptions) {
        if (navOptions === void 0) { navOptions = {}; }
        return this.app.present(this, navOptions);
    };
    ImageViewerImpl.prototype.handleHighResImageLoad = function (fullResImage) {
        var _this = this;
        if (!fullResImage) {
            return;
        }
        var image = new Image();
        image.src = fullResImage;
        if (!image.complete) {
            var onLoadObservable = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (obs) {
                image.onload = function () {
                    obs.next(image);
                    obs.complete();
                };
            });
            // We want the animation to finish before replacing the pic
            // as the calculation has been done with the smaller image
            // AND, to avoid a flash if it loads "too quickly", wait at least 300ms after didEnter
            onLoadObservable
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["zip"])(this.didEnter.pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["delay"])(300))))
                .subscribe(function () {
                return _this.instance.updateImageSrcWithTransition(fullResImage);
            });
        }
        else {
            this.instance.updateImageSrc(fullResImage);
        }
    };
    return ImageViewerImpl;
}(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ViewController */]));

//# sourceMappingURL=image-viewer-impl.js.map

/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageViewerEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ImageViewerLeave; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(57);
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

var ImageViewerEnter = (function (_super) {
    __extends(ImageViewerEnter, _super);
    function ImageViewerEnter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageViewerEnter.prototype.init = function () {
        var css = this.plt.Css;
        var ele = this.enteringView.pageRef().nativeElement;
        var imgElement = ele.querySelector('img');
        var backdropElement = ele.querySelector('ion-backdrop');
        var fromPosition = this.enteringView.data.position;
        var toPosition = imgElement.getBoundingClientRect();
        var flipS = fromPosition.width / toPosition.width;
        var flipY = fromPosition.top - toPosition.top;
        var flipX = fromPosition.left - toPosition.left;
        var backdrop = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, backdropElement);
        var image = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, imgElement);
        // Using `Animation.beforeStyles()` here does not seems to work
        imgElement.style[css.transformOrigin] = '0 0';
        image.fromTo('translateY', flipY + "px", '0px')
            .fromTo('translateX', flipX + "px", '0px')
            .fromTo('scale', flipS, 1)
            .afterClearStyles([css.transformOrigin]);
        backdrop.fromTo('opacity', 0.01, 1);
        this.easing('ease-in-out')
            .duration(150)
            .add(backdrop)
            .add(image);
        var enteringPageEle = this.enteringView.pageRef().nativeElement;
        var enteringNavbarEle = enteringPageEle.querySelector('ion-navbar');
        var enteringBackBtnEle = enteringPageEle.querySelector('.back-button');
        var enteringNavBar = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, enteringNavbarEle);
        enteringNavBar.afterAddClass('show-navbar');
        this.add(enteringNavBar);
        var enteringBackButton = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, enteringBackBtnEle);
        this.add(enteringBackButton);
        enteringBackButton.afterAddClass('show-back-button');
    };
    return ImageViewerEnter;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["y" /* Transition */]));

var ImageViewerLeave = (function (_super) {
    __extends(ImageViewerLeave, _super);
    function ImageViewerLeave() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageViewerLeave.prototype.init = function () {
        var css = this.plt.Css;
        var ele = this.leavingView.pageRef().nativeElement;
        var imgElement = ele.querySelector('img');
        var backdropElement = ele.querySelector('ion-backdrop');
        var toPosition = this.leavingView.data.position;
        var fromPosition = imgElement.getBoundingClientRect();
        var flipS = toPosition.width / fromPosition.width;
        var flipY = toPosition.top - fromPosition.top;
        var flipX = toPosition.left - fromPosition.left;
        var backdropOpacity = backdropElement.style['opacity'];
        var backdrop = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, backdropElement);
        var image = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, imgElement);
        image.fromTo('translateY', 0 + "px", flipY + "px")
            .fromTo('translateX', "0px", flipX + "px")
            .fromTo('scale', 1, flipS)
            .beforeStyles((_a = {}, _a[css.transformOrigin] = '0 0', _a))
            .afterClearStyles([css.transformOrigin]);
        backdrop.fromTo('opacity', backdropOpacity, 0);
        this.easing('ease-in-out')
            .duration(150)
            .add(backdrop)
            .add(image);
        var _a;
    };
    return ImageViewerLeave;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["y" /* Transition */]));

//# sourceMappingURL=image-viewer-transitions.js.map

/***/ }),

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageViewerSrcAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(57);

var ImageViewerSrcAnimation = (function () {
    function ImageViewerSrcAnimation(platform, image) {
        this.element = image.nativeElement;
        this.imageAnimation = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](platform, image);
    }
    ImageViewerSrcAnimation.prototype.scaleFrom = function (lowResImgWidth) {
        var highResImgWidth = this.element.clientWidth;
        var imageTransition = this.imageAnimation
            .fromTo('scale', lowResImgWidth / highResImgWidth, 1)
            .duration(100)
            .easing('ease-in-out')
            .play();
    };
    return ImageViewerSrcAnimation;
}());

//# sourceMappingURL=image-viewer-src-animation.js.map

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageViewerTransitionGesture; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_dom__ = __webpack_require__(18);
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


var HAMMER_THRESHOLD = 10;
var MAX_ATTACK_ANGLE = 45;
var DRAG_THRESHOLD = 70;
var ImageViewerTransitionGesture = (function (_super) {
    __extends(ImageViewerTransitionGesture, _super);
    function ImageViewerTransitionGesture(platform, component, domCtrl, renderer, cb) {
        var _this = _super.call(this, platform, component.getNativeElement(), {
            maxAngle: MAX_ATTACK_ANGLE,
            threshold: HAMMER_THRESHOLD,
            gesture: component._gestureCtrl.createGesture({ name: 'image-viewer' }),
            direction: 'y',
            domController: domCtrl
        }) || this;
        _this.component = component;
        _this.renderer = renderer;
        _this.cb = cb;
        _this.translationY = 0;
        _this.imageContainer = component.getNativeElement().querySelector('.image');
        _this.backdrop = component.getNativeElement().querySelector('ion-backdrop');
        _this.listen();
        return _this;
    }
    // As we handle both pinch and drag, we have to make sure we don't drag when we are trying to pinch
    // As we handle both pinch and drag, we have to make sure we don't drag when we are trying to pinch
    ImageViewerTransitionGesture.prototype.isPinching = 
    // As we handle both pinch and drag, we have to make sure we don't drag when we are trying to pinch
    function (ev) {
        return ev.touches && ev.touches.length > 1;
    };
    ImageViewerTransitionGesture.prototype.onDragStart = function (ev) {
        ev.preventDefault();
        if (this.isPinching(ev)) {
            this.abort(ev);
        }
        var coord = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_dom__["f" /* pointerCoord */])(ev);
        this.startY = coord.y;
        return true;
    };
    ImageViewerTransitionGesture.prototype.canStart = function (ev) {
        return !this.component.isZoomed && !this.isPinching(ev);
    };
    ImageViewerTransitionGesture.prototype.onDragMove = function (ev) {
        var _this = this;
        if (this.isPinching(ev)) {
            this.abort(ev);
        }
        var coord = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_dom__["f" /* pointerCoord */])(ev);
        this.translationY = coord.y - this.startY;
        this.opacity = Math.max(1 - Math.abs(this.translationY) / (10 * DRAG_THRESHOLD), .5);
        this.plt.raf(function () {
            _this.renderer.setElementStyle(_this.imageContainer, _this.plt.Css.transform, "translateY(" + _this.translationY + "px)");
            _this.renderer.setElementStyle(_this.backdrop, 'opacity', _this.opacity.toString());
        });
        return true;
    };
    ImageViewerTransitionGesture.prototype.onDragEnd = function (ev) {
        if (Math.abs(this.translationY) > DRAG_THRESHOLD) {
            this.cb();
        }
        else {
            var imageContainerAnimation = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, this.imageContainer);
            var backdropAnimation = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, this.backdrop);
            backdropAnimation.fromTo('opacity', this.opacity, '1');
            imageContainerAnimation.fromTo('translateY', this.translationY + "px", '0px');
            new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt)
                .easing('ease-in')
                .duration(150)
                .add(backdropAnimation)
                .add(imageContainerAnimation)
                .play();
        }
        return true;
    };
    return ImageViewerTransitionGesture;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["v" /* PanGesture */]));

//# sourceMappingURL=image-viewer-transition-gesture.js.map

/***/ }),

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageViewerZoomGesture; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_gestures_hammer__ = __webpack_require__(304);
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


var MAX_SCALE = 3;
var ImageViewerZoomGesture = (function (_super) {
    __extends(ImageViewerZoomGesture, _super);
    function ImageViewerZoomGesture(component, element, platform, renderer) {
        var _this = _super.call(this, element.nativeElement) || this;
        _this.component = component;
        _this.platform = platform;
        _this.renderer = renderer;
        _this.adjustScale = 1;
        _this.adjustDeltaX = 0;
        _this.adjustDeltaY = 0;
        _this.currentScale = 1;
        _this.currentDeltaX = 0;
        _this.currentDeltaY = 0;
        _this.allowedXMargin = 0;
        _this.allowedYMargin = 0;
        // Force both directions after super to avoid override allowing only one direction
        // Force both directions after super to avoid override allowing only one direction
        _this.options({ direction: __WEBPACK_IMPORTED_MODULE_1_ionic_angular_gestures_hammer__["a" /* DIRECTION_HORIZONTAL */] | __WEBPACK_IMPORTED_MODULE_1_ionic_angular_gestures_hammer__["b" /* DIRECTION_VERTICAL */] });
        _this.listen();
        _this.on('pinch', function (e) { return _this.onPinch(e); });
        _this.on('pinchend', function (e) { return _this.onPinchEnd(e); });
        _this.on('panstart', function (e) { return _this.onPanStart(e); });
        _this.on('pan', function (e) { return _this.onPan(e); });
        _this.on('panend', function (e) { return _this.onPanEnd(e); });
        _this.on('doubletap', function (e) { return _this.onDoubleTap(e); });
        return _this;
    }
    ImageViewerZoomGesture.prototype.onPinch = function (event) {
        this.component.dragGesture.abort(event);
        this.currentScale = Math.max(1, Math.min(MAX_SCALE, this.adjustScale * event.scale));
        this.currentDeltaX = this.adjustDeltaX + (event.deltaX / this.currentScale);
        this.currentDeltaY = this.adjustDeltaY + (event.deltaY / this.currentScale);
        this.setImageContainerTransform();
    };
    ImageViewerZoomGesture.prototype.onPinchEnd = function (event) {
        this.component.isZoomed = (this.currentScale !== 1);
        if (!this.component.isZoomed) {
            new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.platform, this.element)
                .fromTo('translateX', this.currentDeltaX + "px", '0')
                .fromTo('translateY', this.currentDeltaY + "px", '0')
                .easing('ease-in')
                .duration(50)
                .play();
            this.currentDeltaX = 0;
            this.currentDeltaY = 0;
        }
        // Saving the final transforms for adjustment next time the user interacts.
        this.adjustScale = this.currentScale;
        this.adjustDeltaX = this.currentDeltaX;
        this.adjustDeltaY = this.currentDeltaY;
    };
    ImageViewerZoomGesture.prototype.onPanStart = function (event) {
        if (!this.component.isZoomed) {
            return;
        }
        var originalImageWidth = this.element.offsetWidth;
        var originalImageHeight = this.element.offsetHeight;
        this.allowedXMargin = ((originalImageWidth * this.currentScale) - originalImageWidth) / 4;
        this.allowedYMargin = ((originalImageHeight * this.currentScale) - originalImageHeight) / 4;
    };
    ImageViewerZoomGesture.prototype.onPan = function (event) {
        if (!this.component.isZoomed) {
            return;
        }
        this.currentDeltaX = this.boundAdjustement(Math.floor(this.adjustDeltaX + event.deltaX / this.currentScale), this.allowedXMargin);
        this.currentDeltaY = this.boundAdjustement(Math.floor(this.adjustDeltaY + event.deltaY / this.currentScale), this.allowedYMargin);
        this.setImageContainerTransform();
    };
    ImageViewerZoomGesture.prototype.boundAdjustement = function (adjustement, bound) {
        if (adjustement > bound || adjustement < -bound) {
            return Math.min(bound, Math.max(adjustement, -bound));
        }
        return adjustement;
    };
    ImageViewerZoomGesture.prototype.onPanEnd = function (event) {
        if (!this.component.isZoomed) {
            return;
        }
        this.adjustDeltaX = this.currentDeltaX;
        this.adjustDeltaY = this.currentDeltaY;
    };
    ImageViewerZoomGesture.prototype.onDoubleTap = function (event) {
        this.component.isZoomed = !this.component.isZoomed;
        if (this.component.isZoomed) {
            this.currentScale = 2;
        }
        else {
            this.currentScale = 1;
            this.adjustDeltaX = this.currentDeltaX = 0;
            this.adjustDeltaY = this.currentDeltaY = 0;
        }
        this.adjustScale = this.currentScale;
        this.setImageContainerTransform();
    };
    ImageViewerZoomGesture.prototype.setImageContainerTransform = function () {
        var transforms = [];
        transforms.push("scale(" + this.currentScale + ")");
        transforms.push("translate(" + this.currentDeltaX + "px, " + this.currentDeltaY + "px)");
        this.renderer.setElementStyle(this.element, this.platform.Css.transform, transforms.join(' '));
    };
    return ImageViewerZoomGesture;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* Gesture */]));

//# sourceMappingURL=image-viewer-zoom-gesture.js.map

/***/ }),

/***/ 829:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizaNotificacaoPokerclubsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_clientrest_pokerclubs_clientrest_pokerclubs__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_photo_viewer__ = __webpack_require__(738);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VisualizaNotificacaoPokerclubsPage = /** @class */ (function () {
    function VisualizaNotificacaoPokerclubsPage(navCtrl, navParams, globalvars, clientrest, alertCtrl, photoViewer, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalvars = globalvars;
        this.clientrest = clientrest;
        this.alertCtrl = alertCtrl;
        this.photoViewer = photoViewer;
        this.platform = platform;
        this.usuarioCadastrado = false;
    }
    VisualizaNotificacaoPokerclubsPage.prototype.ionViewDidLoad = function () {
        this.getMensagem();
        this.usuarioCadastrado = (parseInt(this.globalvars.getidUsuario()) !== 1);
    };
    VisualizaNotificacaoPokerclubsPage.prototype.ionViewDidEnter = function () {
        this.initializeBackButtonCustomHandler();
    };
    VisualizaNotificacaoPokerclubsPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    VisualizaNotificacaoPokerclubsPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        // Regitrando o Botao Voltar do Android
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.botaoVoltarAndroid();
        }, 101);
    };
    VisualizaNotificacaoPokerclubsPage.prototype.botaoVoltarAndroid = function () {
        this.navCtrl.pop();
    };
    VisualizaNotificacaoPokerclubsPage.prototype.showZoomFoto = function (titulo, imagem) {
        this.photoViewer.show(imagem, titulo, { share: true });
    };
    VisualizaNotificacaoPokerclubsPage.prototype.getMensagem = function () {
        var _this = this;
        var dataParam = {
            'msg_id': this.globalvars.getidMensagemAtual(),
            'user_id': this.globalvars.getidUsuario()
        };
        this.clientrest.getMensagem(dataParam).then(function (data) {
            if (data["result"] == "S") {
                _this.id = data["items"][0]["id"];
                _this.nomeClube = data["items"][0]["club"]["name"];
                _this.data = data["items"][0]["date"];
                _this.titulo = data["items"][0]["title"];
                _this.imagem = data["items"][0]["image"];
                _this.texto = data["items"][0]["text"];
                _this.mensagemImagem = false;
                if (_this.imagem !== "") {
                    _this.mensagemImagem = true;
                }
            }
            else {
                _this.CriaAlerta("Mensagens", data["message"]);
            }
        }).catch(function (error) {
            //this.CriaAlerta("PokerClubs", "Ocorreu um erro ao requisitar os dados.<br>Tente novamente mais tarde.");        
        });
    };
    VisualizaNotificacaoPokerclubsPage.prototype.excluirMensagem = function (idMensagem) {
        var _this = this;
        var dataParam = {
            'msg_id': this.globalvars.getidMensagemAtual(),
            'user_id': this.globalvars.getidUsuario()
        };
        this.clientrest.excluirMensagem(dataParam).then(function (data) {
            if (data["result"] == "S") {
                _this.navCtrl.pop();
            }
            else {
                _this.CriaAlerta("Mensagens", data["message"]);
            }
        });
    };
    VisualizaNotificacaoPokerclubsPage.prototype.CriaAlerta = function (titulo, subtitulo) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: subtitulo,
            cssClass: 'alertaCustom',
            enableBackdropDismiss: false,
            buttons: ['OK']
        });
        alert.present();
    };
    VisualizaNotificacaoPokerclubsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-visualiza-notificacao-pokerclubs',template:/*ion-inline-start:"C:\Roots\SAINTEC\pokerclubs\src\pages\visualiza-notificacao-pokerclubs\visualiza-notificacao-pokerclubs.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Notificações - PokerClubs</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <p class="data-mensagem" [innerHTML]="data"></p>           \n      <p class="titulo-mensagem" [innerHTML]="titulo"></p>\n      <p class="nome-clube-mensagem" [innerHTML]="nomeClube"></p>\n      <p>&nbsp;</p>\n      <p class="texto-mensagem" [innerHTML]="texto"></p>\n      <img *ngIf="mensagemImagem" [src]="imagem" (click)="showZoomFoto(titulo, imagem)">\n      <p>\n      <ion-item *ngIf="usuarioCadastrado" class="item-botao-excluir" text-right>\n        <button class="botao-excluir" ion-button (click)="excluirMensagem(id)">\n          Excluir\n        </button>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Roots\SAINTEC\pokerclubs\src\pages\visualiza-notificacao-pokerclubs\visualiza-notificacao-pokerclubs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_clientrest_pokerclubs_clientrest_pokerclubs__["a" /* ClientrestPokerclubsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_photo_viewer__["a" /* PhotoViewer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Platform */]])
    ], VisualizaNotificacaoPokerclubsPage);
    return VisualizaNotificacaoPokerclubsPage;
}());

//# sourceMappingURL=visualiza-notificacao-pokerclubs.js.map

/***/ })

});
//# sourceMappingURL=7.js.map