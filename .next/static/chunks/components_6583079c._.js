(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/scroll-indicator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const ScrollIndicator = ()=>{
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollIndicator.useEffect": ()=>{
            const handleScroll = {
                "ScrollIndicator.useEffect.handleScroll": ()=>{
                    const scrollTop = window.scrollY;
                    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                    const newProgress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
                    setProgress(newProgress);
                    setIsVisible(scrollTop > 100);
                }
            }["ScrollIndicator.useEffect.handleScroll"];
            handleScroll();
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            window.addEventListener('resize', handleScroll);
            return ({
                "ScrollIndicator.useEffect": ()=>{
                    window.removeEventListener('scroll', handleScroll);
                    window.removeEventListener('resize', handleScroll);
                }
            })["ScrollIndicator.useEffect"];
        }
    }["ScrollIndicator.useEffect"], []);
    if (!isVisible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-4 right-4 w-20 h-20 rounded-full flex items-center justify-center bg-white shadow-lg overflow-hidden z-50 transition-all duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-full h-full -rotate-90",
                viewBox: "0 0 100 100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "50",
                        cy: "50",
                        r: "40",
                        className: "stroke-[#0A3161]/20",
                        strokeWidth: "8",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/scroll-indicator.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "50",
                        cy: "50",
                        r: "40",
                        className: "stroke-[#B31942]",
                        strokeWidth: "8",
                        fill: "none",
                        strokeDasharray: "251.2",
                        strokeDashoffset: 251.2 * (1 - progress),
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/scroll-indicator.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/scroll-indicator.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center font-semibold text-sm gradient-text",
                children: "SCROLL"
            }, void 0, false, {
                fileName: "[project]/components/ui/scroll-indicator.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/scroll-indicator.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ScrollIndicator, "/y0P3B8eabnjj/mEgKUIjmAtnpk=");
_c = ScrollIndicator;
const __TURBOPACK__default__export__ = ScrollIndicator;
var _c;
__turbopack_context__.k.register(_c, "ScrollIndicator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/performance-monitor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PerformanceMonitor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const enableLogging = ("TURBOPACK compile-time value", "development") !== 'production' || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_ENABLE_PERF_LOGS === 'true';
function PerformanceMonitor() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PerformanceMonitor.useEffect": ()=>{
            // Enhanced performance monitoring for static HTML
            if ("object" !== 'undefined' && 'performance' in window && typeof PerformanceObserver !== 'undefined') {
                const sendMetric = {
                    "PerformanceMonitor.useEffect.sendMetric": (name, params)=>{
                        if ('gtag' in window) {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            window.gtag('event', name, params);
                        }
                    }
                }["PerformanceMonitor.useEffect.sendMetric"];
                const safeObserve = {
                    "PerformanceMonitor.useEffect.safeObserve": (observer, entryTypes)=>{
                        const supported = PerformanceObserver.supportedEntryTypes;
                        if (Array.isArray(entryTypes) && Array.isArray(supported)) {
                            const allSupported = entryTypes.every({
                                "PerformanceMonitor.useEffect.safeObserve.allSupported": (type)=>supported.includes(type)
                            }["PerformanceMonitor.useEffect.safeObserve.allSupported"]);
                            if (!allSupported) {
                                observer.disconnect();
                                return;
                            }
                        }
                        try {
                            observer.observe({
                                entryTypes
                            });
                        } catch  {
                            observer.disconnect();
                        }
                    }
                }["PerformanceMonitor.useEffect.safeObserve"];
                // Track page load performance
                const trackPageLoad = {
                    "PerformanceMonitor.useEffect.trackPageLoad": ()=>{
                        const navigation = performance.getEntriesByType('navigation')[0];
                        if (navigation) {
                            const metrics = {
                                dns: navigation.domainLookupEnd - navigation.domainLookupStart,
                                tcp: navigation.connectEnd - navigation.connectStart,
                                request: navigation.responseStart - navigation.requestStart,
                                response: navigation.responseEnd - navigation.responseStart,
                                dom: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
                                load: navigation.loadEventEnd - navigation.loadEventStart,
                                total: navigation.loadEventEnd - navigation.fetchStart
                            };
                            if ("TURBOPACK compile-time truthy", 1) {
                                console.log('📊 Page Load Metrics:', metrics);
                            }
                            sendMetric('page_load_time', {
                                event_category: 'Performance',
                                event_label: 'Static HTML',
                                value: Math.round(metrics.total)
                            });
                        }
                    }
                }["PerformanceMonitor.useEffect.trackPageLoad"];
                // Monitor Largest Contentful Paint (LCP)
                const observer = new PerformanceObserver({
                    "PerformanceMonitor.useEffect": (list)=>{
                        for (const entry of list.getEntries()){
                            if (entry.entryType === 'largest-contentful-paint') {
                                const lcp = entry.startTime;
                                if ("TURBOPACK compile-time truthy", 1) {
                                    console.log('🎯 LCP:', lcp, 'ms');
                                }
                                sendMetric('lcp', {
                                    event_category: 'Web Vitals',
                                    event_label: 'Largest Contentful Paint',
                                    value: Math.round(lcp)
                                });
                            }
                        }
                    }
                }["PerformanceMonitor.useEffect"]);
                safeObserve(observer, [
                    'largest-contentful-paint'
                ]);
                // Monitor First Input Delay (FID)
                const fidObserver = new PerformanceObserver({
                    "PerformanceMonitor.useEffect": (list)=>{
                        for (const entry of list.getEntries()){
                            if (entry.entryType === 'first-input') {
                                const fidEntry = entry;
                                const fid = fidEntry.processingStart - fidEntry.startTime;
                                if ("TURBOPACK compile-time truthy", 1) {
                                    console.log('⚡ FID:', fid, 'ms');
                                }
                                sendMetric('fid', {
                                    event_category: 'Web Vitals',
                                    event_label: 'First Input Delay',
                                    value: Math.round(fid)
                                });
                            }
                        }
                    }
                }["PerformanceMonitor.useEffect"]);
                safeObserve(fidObserver, [
                    'first-input'
                ]);
                // Monitor Cumulative Layout Shift (CLS)
                let clsValue = 0;
                const clsObserver = new PerformanceObserver({
                    "PerformanceMonitor.useEffect": (list)=>{
                        for (const entry of list.getEntries()){
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            const layoutShiftEntry = entry;
                            if (!layoutShiftEntry.hadRecentInput) {
                                clsValue += layoutShiftEntry.value;
                            }
                        }
                        if ("TURBOPACK compile-time truthy", 1) {
                            console.log('📐 CLS:', clsValue);
                        }
                        sendMetric('cls', {
                            event_category: 'Web Vitals',
                            event_label: 'Cumulative Layout Shift',
                            value: Math.round(clsValue * 1000)
                        });
                    }
                }["PerformanceMonitor.useEffect"]);
                safeObserve(clsObserver, [
                    'layout-shift'
                ]);
                // Monitor resource loading
                const resourceObserver = new PerformanceObserver({
                    "PerformanceMonitor.useEffect": (list)=>{
                        for (const entry of list.getEntries()){
                            if (entry.entryType === 'resource') {
                                const resource = entry;
                                if (resource.duration > 1000) {
                                    if ("TURBOPACK compile-time truthy", 1) {
                                        console.warn('🐌 Slow resource:', resource.name, resource.duration, 'ms');
                                    }
                                }
                            }
                        }
                    }
                }["PerformanceMonitor.useEffect"]);
                safeObserve(resourceObserver, [
                    'resource'
                ]);
                // Track page load when complete
                if (document.readyState === 'complete') {
                    trackPageLoad();
                } else {
                    window.addEventListener('load', trackPageLoad);
                }
                // Track service worker registration
                if ('serviceWorker' in navigator) {
                    navigator.serviceWorker.ready.then({
                        "PerformanceMonitor.useEffect": (registration)=>{
                            if ("TURBOPACK compile-time truthy", 1) {
                                console.log('🔧 Service Worker ready:', registration);
                            }
                        }
                    }["PerformanceMonitor.useEffect"]);
                }
                return ({
                    "PerformanceMonitor.useEffect": ()=>{
                        observer.disconnect();
                        fidObserver.disconnect();
                        clsObserver.disconnect();
                        resourceObserver.disconnect();
                        window.removeEventListener('load', trackPageLoad);
                    }
                })["PerformanceMonitor.useEffect"];
            }
        }
    }["PerformanceMonitor.useEffect"], []);
    return null;
}
_s(PerformanceMonitor, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = PerformanceMonitor;
var _c;
__turbopack_context__.k.register(_c, "PerformanceMonitor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/service-worker-register.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServiceWorkerRegister
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function ServiceWorkerRegister() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServiceWorkerRegister.useEffect": ()=>{
            if ("object" !== 'undefined' && 'serviceWorker' in navigator) {
                window.addEventListener('load', {
                    "ServiceWorkerRegister.useEffect": ()=>{
                        navigator.serviceWorker.register('/sw.js').then({
                            "ServiceWorkerRegister.useEffect": (registration)=>{
                                console.log('SW registered: ', registration);
                            }
                        }["ServiceWorkerRegister.useEffect"]).catch({
                            "ServiceWorkerRegister.useEffect": (registrationError)=>{
                                console.log('SW registration failed: ', registrationError);
                            }
                        }["ServiceWorkerRegister.useEffect"]);
                    }
                }["ServiceWorkerRegister.useEffect"]);
            }
        }
    }["ServiceWorkerRegister.useEffect"], []);
    return null;
}
_s(ServiceWorkerRegister, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ServiceWorkerRegister;
var _c;
__turbopack_context__.k.register(_c, "ServiceWorkerRegister");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_6583079c._.js.map