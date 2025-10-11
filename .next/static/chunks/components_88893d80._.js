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
"use client";
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
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            window.addEventListener("resize", handleScroll);
            return ({
                "ScrollIndicator.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                    window.removeEventListener("resize", handleScroll);
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
                        className: "stroke-brand-navy/20",
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
                        className: "stroke-brand-red",
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
                className: "absolute inset-0 flex items-center justify-center font-semibold text-sm [background:linear-gradient(135deg,hsl(212,88%,13%)_0%,hsl(336,90%,35%)_100%)] [background-clip:text] [-webkit-text-fill-color:transparent]",
                children: "SCROLL"
            }, void 0, false, {
                fileName: "[project]/components/ui/scroll-indicator.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/scroll-indicator.tsx",
        lineNumber: 33,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function PerformanceMonitor() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PerformanceMonitor.useEffect": ()=>{
            // Enhanced performance monitoring for static HTML
            if ("object" !== "undefined" && "performance" in window) {
                // Track page load performance
                const trackPageLoad = {
                    "PerformanceMonitor.useEffect.trackPageLoad": ()=>{
                        const navigation = performance.getEntriesByType("navigation")[0];
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
                            // Send to analytics (if configured)
                            if ("object" !== "undefined" && window.gtag) {
                                window.gtag("event", "page_load_time", {
                                    event_category: "Performance",
                                    event_label: "Static HTML",
                                    value: Math.round(metrics.total)
                                });
                            }
                        }
                    }
                }["PerformanceMonitor.useEffect.trackPageLoad"];
                // Monitor Largest Contentful Paint (LCP)
                const observer = new PerformanceObserver({
                    "PerformanceMonitor.useEffect": (list)=>{
                        for (const entry of list.getEntries()){
                            if (entry.entryType === "largest-contentful-paint") {
                                const lcp = entry.startTime;
                                // Track LCP performance
                                if ("object" !== "undefined" && window.gtag) {
                                    window.gtag("event", "lcp", {
                                        event_category: "Web Vitals",
                                        event_label: "Largest Contentful Paint",
                                        value: Math.round(lcp)
                                    });
                                }
                            }
                        }
                    }
                }["PerformanceMonitor.useEffect"]);
                observer.observe({
                    entryTypes: [
                        "largest-contentful-paint"
                    ]
                });
                // Monitor First Input Delay (FID)
                const fidObserver = new PerformanceObserver({
                    "PerformanceMonitor.useEffect": (list)=>{
                        for (const entry of list.getEntries()){
                            if (entry.entryType === "first-input") {
                                const fidEntry = entry;
                                const fid = fidEntry.processingStart - fidEntry.startTime;
                                if ("object" !== "undefined" && window.gtag) {
                                    window.gtag("event", "fid", {
                                        event_category: "Web Vitals",
                                        event_label: "First Input Delay",
                                        value: Math.round(fid)
                                    });
                                }
                            }
                        }
                    }
                }["PerformanceMonitor.useEffect"]);
                fidObserver.observe({
                    entryTypes: [
                        "first-input"
                    ]
                });
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
                        if ("object" !== "undefined" && window.gtag) {
                            window.gtag("event", "cls", {
                                event_category: "Web Vitals",
                                event_label: "Cumulative Layout Shift",
                                value: Math.round(clsValue * 1000)
                            });
                        }
                    }
                }["PerformanceMonitor.useEffect"]);
                clsObserver.observe({
                    entryTypes: [
                        "layout-shift"
                    ]
                });
                // Monitor resource loading
                const resourceObserver = new PerformanceObserver({
                    "PerformanceMonitor.useEffect": (list)=>{
                        for (const entry of list.getEntries()){
                            if (entry.entryType === "resource") {
                                const resource = entry;
                                if (resource.duration > 1000) {
                                // Log slow resources
                                // console.warn('🐌 Slow resource:', resource.name, resource.duration, 'ms');
                                }
                            }
                        }
                    }
                }["PerformanceMonitor.useEffect"]);
                resourceObserver.observe({
                    entryTypes: [
                        "resource"
                    ]
                });
                // Track page load when complete
                if (document.readyState === "complete") {
                    trackPageLoad();
                } else {
                    window.addEventListener("load", trackPageLoad);
                }
                // Track service worker registration
                if ("serviceWorker" in navigator) {
                    navigator.serviceWorker.ready.then({
                        "PerformanceMonitor.useEffect": ()=>{
                        // Service worker ready
                        }
                    }["PerformanceMonitor.useEffect"]);
                }
                return ({
                    "PerformanceMonitor.useEffect": ()=>{
                        observer.disconnect();
                        fidObserver.disconnect();
                        clsObserver.disconnect();
                        resourceObserver.disconnect();
                        window.removeEventListener("load", trackPageLoad);
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
"use client";
;
function ServiceWorkerRegister() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServiceWorkerRegister.useEffect": ()=>{
            if ("object" !== "undefined" && "serviceWorker" in navigator) {
                const handleLoad = {
                    "ServiceWorkerRegister.useEffect.handleLoad": ()=>{
                        navigator.serviceWorker.register("/sw.js").then({
                            "ServiceWorkerRegister.useEffect.handleLoad": ()=>{
                            // Registration successful
                            }
                        }["ServiceWorkerRegister.useEffect.handleLoad"]).catch({
                            "ServiceWorkerRegister.useEffect.handleLoad": ()=>{
                            // Registration failed
                            }
                        }["ServiceWorkerRegister.useEffect.handleLoad"]);
                    }
                }["ServiceWorkerRegister.useEffect.handleLoad"];
                window.addEventListener("load", handleLoad);
                return ({
                    "ServiceWorkerRegister.useEffect": ()=>{
                        window.removeEventListener("load", handleLoad);
                    }
                })["ServiceWorkerRegister.useEffect"];
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
"[project]/components/error-boundary.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Component {
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error
        };
    }
    componentDidCatch(error, errorInfo) {
        // Log error securely - avoid logging sensitive information in production
        if ("TURBOPACK compile-time truthy", 1) {
            console.error('ErrorBoundary caught an error:', error, errorInfo);
        } else //TURBOPACK unreachable
        ;
        // Call optional error callback
        if (this.props.onError) {
            this.props.onError(error, errorInfo);
        }
        // Report to analytics if available (with sanitized error message)
        if ("object" !== 'undefined' && window.gtag) {
            window.gtag('event', 'exception', {
                description: ("TURBOPACK compile-time truthy", 1) ? error.message : "TURBOPACK unreachable",
                fatal: false
            });
        }
    }
    render() {
        if (this.state.hasError) {
            // Custom fallback UI
            if (this.props.fallback) {
                return this.props.fallback;
            }
            // Default fallback UI
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-[200px] w-full items-center justify-center rounded-lg border border-destructive/20 bg-destructive/10 p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-destructive",
                            children: "Something went wrong"
                        }, void 0, false, {
                            fileName: "[project]/components/error-boundary.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground max-w-md",
                            children: "This component encountered an error. Please refresh the page or try again later."
                        }, void 0, false, {
                            fileName: "[project]/components/error-boundary.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>window.location.reload(),
                            className: "mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors",
                            children: "Refresh Page"
                        }, void 0, false, {
                            fileName: "[project]/components/error-boundary.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/error-boundary.tsx",
                    lineNumber: 59,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/error-boundary.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, this);
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }
}
const __TURBOPACK__default__export__ = ErrorBoundary;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_88893d80._.js.map