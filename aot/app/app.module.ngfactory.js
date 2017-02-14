/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../app/app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/http/src/http_module';
import * as import6 from '../../app/model/model.module';
import * as import7 from '@angular/forms/src/directives';
import * as import8 from '@angular/forms/src/form_providers';
import * as import9 from '@angular/router/src/router_module';
import * as import10 from '../../app/store/store.module';
import * as import11 from '../../app/admin/admin.module';
import * as import12 from '@angular/common/src/localization';
import * as import13 from '@angular/core/src/application_init';
import * as import14 from '@angular/core/src/testability/testability';
import * as import15 from '@angular/core/src/application_ref';
import * as import16 from '@angular/core/src/linker/compiler';
import * as import17 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import18 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import19 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import20 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import21 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import22 from '@angular/core/src/linker/view_utils';
import * as import23 from '@angular/platform-browser/src/browser/title';
import * as import24 from '@angular/http/src/backends/browser_xhr';
import * as import25 from '@angular/http/src/base_response_options';
import * as import26 from '@angular/http/src/backends/xhr_backend';
import * as import27 from '@angular/http/src/base_request_options';
import * as import28 from '../../app/model/rest.datasource';
import * as import29 from '../../app/model/product.repository';
import * as import30 from '../../app/model/cart.model';
import * as import31 from '../../app/model/order.model';
import * as import32 from '../../app/model/order.repository';
import * as import33 from '../../app/model/auth.service';
import * as import34 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import35 from '@angular/router/src/url_tree';
import * as import36 from '@angular/router/src/router_outlet_map';
import * as import37 from '@angular/common/src/location/location';
import * as import38 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import39 from '../../app/admin/auth.guard';
import * as import40 from '@angular/router/src/router_preloader';
import * as import41 from '../../app/storeFirst.guard';
import * as import43 from './store/store.component.ngfactory';
import * as import44 from './store/cartDetail.component.ngfactory';
import * as import45 from './store/checkout.component.ngfactory';
import * as import46 from './admin/auth.component.ngfactory';
import * as import47 from './admin/admin.component.ngfactory';
import * as import48 from './admin/productEditor.component.ngfactory';
import * as import49 from './admin/productTable.component.ngfactory';
import * as import50 from './admin/orderTable.component.ngfactory';
import * as import51 from './app.component.ngfactory';
import * as import52 from '@angular/core/src/application_tokens';
import * as import53 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import54 from '@angular/platform-browser/src/dom/events/key_events';
import * as import55 from '@angular/core/src/zone/ng_zone';
import * as import56 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import57 from '@angular/common/src/location/platform_location';
import * as import58 from '@angular/common/src/location/location_strategy';
import * as import59 from '../../app/store/store.component';
import * as import60 from '../../app/store/cartDetail.component';
import * as import61 from '../../app/store/checkout.component';
import * as import62 from '../../app/admin/auth.component';
import * as import63 from '../../app/admin/admin.component';
import * as import64 from '../../app/admin/productEditor.component';
import * as import65 from '../../app/admin/productTable.component';
import * as import66 from '../../app/admin/orderTable.component';
import * as import67 from '@angular/router/src/url_handling_strategy';
import * as import68 from '@angular/router/src/router';
import * as import69 from '@angular/core/src/console';
import * as import70 from '@angular/core/src/i18n/tokens';
import * as import71 from '@angular/core/src/error_handler';
import * as import72 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import73 from '@angular/platform-browser/src/dom/animation_driver';
import * as import74 from '@angular/core/src/render/api';
import * as import75 from '@angular/core/src/security';
import * as import76 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import77 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import78 from '@angular/http/src/interfaces';
import * as import79 from '@angular/http/src/http';
import * as import80 from '../../app/model/static.datasource';
import * as import81 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import82 from '@angular/router/src/router_config_loader';
import * as import83 from '@angular/router/src/router_state';
var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        _super.call(this, parent, [
            import43.StoreComponentNgFactory,
            import44.CartDetailComponentNgFactory,
            import45.CheckoutComponentNgFactory,
            import46.AuthComponentNgFactory,
            import47.AdminComponentNgFactory,
            import48.ProductEditorComponentNgFactory,
            import48.ProductEditorComponentNgFactory,
            import49.ProductTableComponentNgFactory,
            import50.OrderTableComponentNgFactory,
            import51.AppComponentNgFactory
        ], [import51.AppComponentNgFactory]);
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_12", {
        get: function () {
            if ((this.__LOCALE_ID_12 == null)) {
                (this.__LOCALE_ID_12 = 'en-US');
            }
            return this.__LOCALE_ID_12;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_13", {
        get: function () {
            if ((this.__NgLocalization_13 == null)) {
                (this.__NgLocalization_13 = new import12.NgLocaleLocalization(this._LOCALE_ID_12));
            }
            return this.__NgLocalization_13;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ApplicationRef_18", {
        get: function () {
            if ((this.__ApplicationRef_18 == null)) {
                (this.__ApplicationRef_18 = this._ApplicationRef__17);
            }
            return this.__ApplicationRef_18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_19", {
        get: function () {
            if ((this.__Compiler_19 == null)) {
                (this.__Compiler_19 = new import16.Compiler());
            }
            return this.__Compiler_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_20", {
        get: function () {
            if ((this.__APP_ID_20 == null)) {
                (this.__APP_ID_20 = import52._appIdRandomProviderFactory());
            }
            return this.__APP_ID_20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DOCUMENT_21", {
        get: function () {
            if ((this.__DOCUMENT_21 == null)) {
                (this.__DOCUMENT_21 = import4._document());
            }
            return this.__DOCUMENT_21;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_22", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_22 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_22 = new import17.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_23", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_23 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_23 = [
                    new import53.DomEventsPlugin(),
                    new import54.KeyEventsPlugin(),
                    new import17.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_22)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_24", {
        get: function () {
            if ((this.__EventManager_24 == null)) {
                (this.__EventManager_24 = new import18.EventManager(this._EVENT_MANAGER_PLUGINS_23, this.parent.get(import55.NgZone)));
            }
            return this.__EventManager_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSharedStylesHost_25", {
        get: function () {
            if ((this.__DomSharedStylesHost_25 == null)) {
                (this.__DomSharedStylesHost_25 = new import19.DomSharedStylesHost(this._DOCUMENT_21));
            }
            return this.__DomSharedStylesHost_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_26", {
        get: function () {
            if ((this.__AnimationDriver_26 == null)) {
                (this.__AnimationDriver_26 = import4._resolveDefaultAnimationDriver());
            }
            return this.__AnimationDriver_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomRootRenderer_27", {
        get: function () {
            if ((this.__DomRootRenderer_27 == null)) {
                (this.__DomRootRenderer_27 = new import20.DomRootRenderer_(this._DOCUMENT_21, this._EventManager_24, this._DomSharedStylesHost_25, this._AnimationDriver_26, this._APP_ID_20));
            }
            return this.__DomRootRenderer_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RootRenderer_28", {
        get: function () {
            if ((this.__RootRenderer_28 == null)) {
                (this.__RootRenderer_28 = import56._createConditionalRootRenderer(this._DomRootRenderer_27, this.parent.get(import56.NgProbeToken, null)));
            }
            return this.__RootRenderer_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_29", {
        get: function () {
            if ((this.__DomSanitizer_29 == null)) {
                (this.__DomSanitizer_29 = new import21.DomSanitizerImpl());
            }
            return this.__DomSanitizer_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_30", {
        get: function () {
            if ((this.__Sanitizer_30 == null)) {
                (this.__Sanitizer_30 = this._DomSanitizer_29);
            }
            return this.__Sanitizer_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ViewUtils_31", {
        get: function () {
            if ((this.__ViewUtils_31 == null)) {
                (this.__ViewUtils_31 = new import22.ViewUtils(this._RootRenderer_28, this._Sanitizer_30));
            }
            return this.__ViewUtils_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_32", {
        get: function () {
            if ((this.__IterableDiffers_32 == null)) {
                (this.__IterableDiffers_32 = import3._iterableDiffersFactory());
            }
            return this.__IterableDiffers_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_33", {
        get: function () {
            if ((this.__KeyValueDiffers_33 == null)) {
                (this.__KeyValueDiffers_33 = import3._keyValueDiffersFactory());
            }
            return this.__KeyValueDiffers_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SharedStylesHost_34", {
        get: function () {
            if ((this.__SharedStylesHost_34 == null)) {
                (this.__SharedStylesHost_34 = this._DomSharedStylesHost_25);
            }
            return this.__SharedStylesHost_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_35", {
        get: function () {
            if ((this.__Title_35 == null)) {
                (this.__Title_35 = new import23.Title());
            }
            return this.__Title_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserXhr_36", {
        get: function () {
            if ((this.__BrowserXhr_36 == null)) {
                (this.__BrowserXhr_36 = new import24.BrowserXhr());
            }
            return this.__BrowserXhr_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ResponseOptions_37", {
        get: function () {
            if ((this.__ResponseOptions_37 == null)) {
                (this.__ResponseOptions_37 = new import25.BaseResponseOptions());
            }
            return this.__ResponseOptions_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XSRFStrategy_38", {
        get: function () {
            if ((this.__XSRFStrategy_38 == null)) {
                (this.__XSRFStrategy_38 = import5._createDefaultCookieXSRFStrategy());
            }
            return this.__XSRFStrategy_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XHRBackend_39", {
        get: function () {
            if ((this.__XHRBackend_39 == null)) {
                (this.__XHRBackend_39 = new import26.XHRBackend(this._BrowserXhr_36, this._ResponseOptions_37, this._XSRFStrategy_38));
            }
            return this.__XHRBackend_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RequestOptions_40", {
        get: function () {
            if ((this.__RequestOptions_40 == null)) {
                (this.__RequestOptions_40 = new import27.BaseRequestOptions());
            }
            return this.__RequestOptions_40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Http_41", {
        get: function () {
            if ((this.__Http_41 == null)) {
                (this.__Http_41 = import5.httpFactory(this._XHRBackend_39, this._RequestOptions_40));
            }
            return this.__Http_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RestDataSource_42", {
        get: function () {
            if ((this.__RestDataSource_42 == null)) {
                (this.__RestDataSource_42 = new import28.RestDataSource(this._Http_41));
            }
            return this.__RestDataSource_42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ProductRepository_43", {
        get: function () {
            if ((this.__ProductRepository_43 == null)) {
                (this.__ProductRepository_43 = new import29.ProductRepository(this._RestDataSource_42));
            }
            return this.__ProductRepository_43;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Cart_44", {
        get: function () {
            if ((this.__Cart_44 == null)) {
                (this.__Cart_44 = new import30.Cart());
            }
            return this.__Cart_44;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Order_45", {
        get: function () {
            if ((this.__Order_45 == null)) {
                (this.__Order_45 = new import31.Order(this._Cart_44));
            }
            return this.__Order_45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_OrderRepository_46", {
        get: function () {
            if ((this.__OrderRepository_46 == null)) {
                (this.__OrderRepository_46 = new import32.OrderRepository(this._RestDataSource_42));
            }
            return this.__OrderRepository_46;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_StaticDataSource_47", {
        get: function () {
            if ((this.__StaticDataSource_47 == null)) {
                (this.__StaticDataSource_47 = new import28.RestDataSource(this._Http_41));
            }
            return this.__StaticDataSource_47;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AuthService_48", {
        get: function () {
            if ((this.__AuthService_48 == null)) {
                (this.__AuthService_48 = new import33.AuthService(this._RestDataSource_42));
            }
            return this.__AuthService_48;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RadioControlRegistry_49", {
        get: function () {
            if ((this.__RadioControlRegistry_49 == null)) {
                (this.__RadioControlRegistry_49 = new import34.RadioControlRegistry());
            }
            return this.__RadioControlRegistry_49;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_UrlSerializer_50", {
        get: function () {
            if ((this.__UrlSerializer_50 == null)) {
                (this.__UrlSerializer_50 = new import35.DefaultUrlSerializer());
            }
            return this.__UrlSerializer_50;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RouterOutletMap_51", {
        get: function () {
            if ((this.__RouterOutletMap_51 == null)) {
                (this.__RouterOutletMap_51 = new import36.RouterOutletMap());
            }
            return this.__RouterOutletMap_51;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_CONFIGURATION_52", {
        get: function () {
            if ((this.__ROUTER_CONFIGURATION_52 == null)) {
                (this.__ROUTER_CONFIGURATION_52 = {});
            }
            return this.__ROUTER_CONFIGURATION_52;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_LocationStrategy_53", {
        get: function () {
            if ((this.__LocationStrategy_53 == null)) {
                (this.__LocationStrategy_53 = import9.provideLocationStrategy(this.parent.get(import57.PlatformLocation), this.parent.get(import58.APP_BASE_HREF, null), this._ROUTER_CONFIGURATION_52));
            }
            return this.__LocationStrategy_53;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Location_54", {
        get: function () {
            if ((this.__Location_54 == null)) {
                (this.__Location_54 = new import37.Location(this._LocationStrategy_53));
            }
            return this.__Location_54;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgModuleFactoryLoader_55", {
        get: function () {
            if ((this.__NgModuleFactoryLoader_55 == null)) {
                (this.__NgModuleFactoryLoader_55 = new import38.SystemJsNgModuleLoader(this._Compiler_19, this.parent.get(import38.SystemJsNgModuleLoaderConfig, null)));
            }
            return this.__NgModuleFactoryLoader_55;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTES_56", {
        get: function () {
            if ((this.__ROUTES_56 == null)) {
                (this.__ROUTES_56 = [[
                        {
                            path: 'store',
                            component: import59.StoreComponent,
                            canActivate: [import41.StoreFirstGuard]
                        },
                        {
                            path: 'cart',
                            component: import60.CartDetailComponent,
                            canActivate: [import41.StoreFirstGuard]
                        },
                        {
                            path: 'checkout',
                            component: import61.CheckoutComponent,
                            canActivate: [import41.StoreFirstGuard]
                        },
                        {
                            path: 'admin',
                            children: [
                                {
                                    path: 'auth',
                                    component: import62.AuthComponent
                                },
                                {
                                    path: 'main',
                                    component: import63.AdminComponent,
                                    canActivate: [import39.AuthGuard],
                                    children: [
                                        {
                                            path: 'products/:mode/:id',
                                            component: import64.ProductEditorComponent
                                        },
                                        {
                                            path: 'products/:mode',
                                            component: import64.ProductEditorComponent
                                        },
                                        {
                                            path: 'products',
                                            component: import65.ProductTableComponent
                                        },
                                        {
                                            path: 'orders',
                                            component: import66.OrderTableComponent
                                        },
                                        {
                                            path: '**',
                                            redirectTo: 'products'
                                        }
                                    ]
                                },
                                {
                                    path: '**',
                                    redirectTo: 'auth'
                                }
                            ],
                            canActivate: [import41.StoreFirstGuard]
                        },
                        {
                            path: '**',
                            redirectTo: '/store'
                        }
                    ]
                ]);
            }
            return this.__ROUTES_56;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Router_57", {
        get: function () {
            if ((this.__Router_57 == null)) {
                (this.__Router_57 = import9.setupRouter(this._ApplicationRef_18, this._UrlSerializer_50, this._RouterOutletMap_51, this._Location_54, this, this._NgModuleFactoryLoader_55, this._Compiler_19, this._ROUTES_56, this._ROUTER_CONFIGURATION_52, this.parent.get(import67.UrlHandlingStrategy, null)));
            }
            return this.__Router_57;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AuthGuard_58", {
        get: function () {
            if ((this.__AuthGuard_58 == null)) {
                (this.__AuthGuard_58 = new import39.AuthGuard(this._Router_57, this._AuthService_48));
            }
            return this.__AuthGuard_58;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ActivatedRoute_59", {
        get: function () {
            if ((this.__ActivatedRoute_59 == null)) {
                (this.__ActivatedRoute_59 = import9.rootRoute(this._Router_57));
            }
            return this.__ActivatedRoute_59;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PreloadAllModules_63", {
        get: function () {
            if ((this.__PreloadAllModules_63 == null)) {
                (this.__PreloadAllModules_63 = new import40.PreloadAllModules());
            }
            return this.__PreloadAllModules_63;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_INITIALIZER_64", {
        get: function () {
            if ((this.__ROUTER_INITIALIZER_64 == null)) {
                (this.__ROUTER_INITIALIZER_64 = import9.initialRouterNavigation(this._Router_57, this._ApplicationRef_18, this._RouterPreloader_62, this._ROUTER_CONFIGURATION_52));
            }
            return this.__ROUTER_INITIALIZER_64;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_65", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_65 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_65 = [this._ROUTER_INITIALIZER_64]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_65;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_StoreFirstGuard_66", {
        get: function () {
            if ((this.__StoreFirstGuard_66 == null)) {
                (this.__StoreFirstGuard_66 = new import41.StoreFirstGuard(this._Router_57));
            }
            return this.__StoreFirstGuard_66;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ApplicationModule_1 = new import3.ApplicationModule();
        this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._HttpModule_3 = new import5.HttpModule();
        this._ModelModule_4 = new import6.ModelModule();
        this._InternalFormsSharedModule_5 = new import7.InternalFormsSharedModule();
        this._FormsModule_6 = new import8.FormsModule();
        this._ROUTER_FORROOT_GUARD_7 = import9.provideForRootGuard(this.parent.get(import68.Router, null));
        this._RouterModule_8 = new import9.RouterModule(this._ROUTER_FORROOT_GUARD_7);
        this._StoreModule_9 = new import10.StoreModule();
        this._AdminModule_10 = new import11.AdminModule();
        this._AppModule_11 = new import1.AppModule();
        this._ErrorHandler_14 = import4.errorHandler();
        this._ApplicationInitStatus_15 = new import13.ApplicationInitStatus(this.parent.get(import13.APP_INITIALIZER, null));
        this._Testability_16 = new import14.Testability(this.parent.get(import55.NgZone));
        this._ApplicationRef__17 = new import15.ApplicationRef_(this.parent.get(import55.NgZone), this.parent.get(import69.Console), this, this._ErrorHandler_14, this, this._ApplicationInitStatus_15, this.parent.get(import14.TestabilityRegistry, null), this._Testability_16);
        this._NoPreloading_60 = new import40.NoPreloading();
        this._PreloadingStrategy_61 = this._NoPreloading_60;
        this._RouterPreloader_62 = new import40.RouterPreloader(this._Router_57, this._NgModuleFactoryLoader_55, this._Compiler_19, this, this._PreloadingStrategy_61);
        return this._AppModule_11;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.ApplicationModule)) {
            return this._ApplicationModule_1;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_2;
        }
        if ((token === import5.HttpModule)) {
            return this._HttpModule_3;
        }
        if ((token === import6.ModelModule)) {
            return this._ModelModule_4;
        }
        if ((token === import7.InternalFormsSharedModule)) {
            return this._InternalFormsSharedModule_5;
        }
        if ((token === import8.FormsModule)) {
            return this._FormsModule_6;
        }
        if ((token === import9.ROUTER_FORROOT_GUARD)) {
            return this._ROUTER_FORROOT_GUARD_7;
        }
        if ((token === import9.RouterModule)) {
            return this._RouterModule_8;
        }
        if ((token === import10.StoreModule)) {
            return this._StoreModule_9;
        }
        if ((token === import11.AdminModule)) {
            return this._AdminModule_10;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_11;
        }
        if ((token === import70.LOCALE_ID)) {
            return this._LOCALE_ID_12;
        }
        if ((token === import12.NgLocalization)) {
            return this._NgLocalization_13;
        }
        if ((token === import71.ErrorHandler)) {
            return this._ErrorHandler_14;
        }
        if ((token === import13.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_15;
        }
        if ((token === import14.Testability)) {
            return this._Testability_16;
        }
        if ((token === import15.ApplicationRef_)) {
            return this._ApplicationRef__17;
        }
        if ((token === import15.ApplicationRef)) {
            return this._ApplicationRef_18;
        }
        if ((token === import16.Compiler)) {
            return this._Compiler_19;
        }
        if ((token === import52.APP_ID)) {
            return this._APP_ID_20;
        }
        if ((token === import72.DOCUMENT)) {
            return this._DOCUMENT_21;
        }
        if ((token === import17.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_22;
        }
        if ((token === import18.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_23;
        }
        if ((token === import18.EventManager)) {
            return this._EventManager_24;
        }
        if ((token === import19.DomSharedStylesHost)) {
            return this._DomSharedStylesHost_25;
        }
        if ((token === import73.AnimationDriver)) {
            return this._AnimationDriver_26;
        }
        if ((token === import20.DomRootRenderer)) {
            return this._DomRootRenderer_27;
        }
        if ((token === import74.RootRenderer)) {
            return this._RootRenderer_28;
        }
        if ((token === import21.DomSanitizer)) {
            return this._DomSanitizer_29;
        }
        if ((token === import75.Sanitizer)) {
            return this._Sanitizer_30;
        }
        if ((token === import22.ViewUtils)) {
            return this._ViewUtils_31;
        }
        if ((token === import76.IterableDiffers)) {
            return this._IterableDiffers_32;
        }
        if ((token === import77.KeyValueDiffers)) {
            return this._KeyValueDiffers_33;
        }
        if ((token === import19.SharedStylesHost)) {
            return this._SharedStylesHost_34;
        }
        if ((token === import23.Title)) {
            return this._Title_35;
        }
        if ((token === import24.BrowserXhr)) {
            return this._BrowserXhr_36;
        }
        if ((token === import25.ResponseOptions)) {
            return this._ResponseOptions_37;
        }
        if ((token === import78.XSRFStrategy)) {
            return this._XSRFStrategy_38;
        }
        if ((token === import26.XHRBackend)) {
            return this._XHRBackend_39;
        }
        if ((token === import27.RequestOptions)) {
            return this._RequestOptions_40;
        }
        if ((token === import79.Http)) {
            return this._Http_41;
        }
        if ((token === import28.RestDataSource)) {
            return this._RestDataSource_42;
        }
        if ((token === import29.ProductRepository)) {
            return this._ProductRepository_43;
        }
        if ((token === import30.Cart)) {
            return this._Cart_44;
        }
        if ((token === import31.Order)) {
            return this._Order_45;
        }
        if ((token === import32.OrderRepository)) {
            return this._OrderRepository_46;
        }
        if ((token === import80.StaticDataSource)) {
            return this._StaticDataSource_47;
        }
        if ((token === import33.AuthService)) {
            return this._AuthService_48;
        }
        if ((token === import34.RadioControlRegistry)) {
            return this._RadioControlRegistry_49;
        }
        if ((token === import35.UrlSerializer)) {
            return this._UrlSerializer_50;
        }
        if ((token === import36.RouterOutletMap)) {
            return this._RouterOutletMap_51;
        }
        if ((token === import9.ROUTER_CONFIGURATION)) {
            return this._ROUTER_CONFIGURATION_52;
        }
        if ((token === import58.LocationStrategy)) {
            return this._LocationStrategy_53;
        }
        if ((token === import37.Location)) {
            return this._Location_54;
        }
        if ((token === import81.NgModuleFactoryLoader)) {
            return this._NgModuleFactoryLoader_55;
        }
        if ((token === import82.ROUTES)) {
            return this._ROUTES_56;
        }
        if ((token === import68.Router)) {
            return this._Router_57;
        }
        if ((token === import39.AuthGuard)) {
            return this._AuthGuard_58;
        }
        if ((token === import83.ActivatedRoute)) {
            return this._ActivatedRoute_59;
        }
        if ((token === import40.NoPreloading)) {
            return this._NoPreloading_60;
        }
        if ((token === import40.PreloadingStrategy)) {
            return this._PreloadingStrategy_61;
        }
        if ((token === import40.RouterPreloader)) {
            return this._RouterPreloader_62;
        }
        if ((token === import40.PreloadAllModules)) {
            return this._PreloadAllModules_63;
        }
        if ((token === import9.ROUTER_INITIALIZER)) {
            return this._ROUTER_INITIALIZER_64;
        }
        if ((token === import52.APP_BOOTSTRAP_LISTENER)) {
            return this._APP_BOOTSTRAP_LISTENER_65;
        }
        if ((token === import41.StoreFirstGuard)) {
            return this._StoreFirstGuard_66;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__17.ngOnDestroy();
        this._RouterPreloader_62.ngOnDestroy();
    };
    return AppModuleInjector;
}(import0.NgModuleInjector));
export var AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);
