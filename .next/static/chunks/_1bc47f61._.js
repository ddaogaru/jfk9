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
                className: "absolute inset-0 flex items-center justify-center font-semibold text-sm [background:linear-gradient(135deg,#3C3B6E_0%,#B22234_100%)] [background-clip:text] [-webkit-text-fill-color:transparent]",
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
"[project]/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-4 whitespace-nowrap rounded-full px-6 py-2 text-xs md:text-sm lg:text-base font-semibold transition-all duration-200 has-[>svg]:px-6 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-brand-navy focus-visible:ring-2 focus-visible:ring-brand-navy/50 aria-invalid:ring-brand-red/20 dark:aria-invalid:ring-brand-red/40 aria-invalid:border-brand-red shadow-lg", {
    variants: {
        variant: {
            default: "bg-brand-navy text-white border border-brand-navy shadow-lg hover:bg-white hover:text-brand-navy hover:border-brand-navy hover:shadow-xl hover:shadow-brand-navy/25",
            destructive: "bg-brand-red text-white border border-brand-red shadow-lg hover:bg-white hover:text-brand-red hover:border-brand-red hover:shadow-xl hover:shadow-brand-red/25",
            outline: "border border-brand-navy bg-white text-brand-navy shadow-lg hover:bg-brand-navy hover:text-white hover:shadow-xl hover:shadow-brand-navy/25",
            secondary: "bg-white text-brand-navy border border-brand-navy shadow-lg hover:bg-brand-red hover:text-white hover:border-brand-red hover:shadow-xl hover:shadow-brand-red/25",
            ghost: "text-brand-navy bg-transparent hover:bg-brand-red/10 hover:text-brand-red hover:shadow-md",
            link: "text-brand-navy underline underline-offset-4 hover:text-brand-red hover:decoration-brand-red"
        },
        size: {
            default: "",
            sm: "px-4 py-1 gap-2 has-[>svg]:px-4",
            lg: "px-8 py-3 gap-6 has-[>svg]:px-8",
            icon: "size-10 rounded-full p-2 [&_svg]:size-5"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button(param) {
    let { className, variant, size, asChild = false, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/error-boundary.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ErrorBoundary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ErrorBoundary(param) {
    let { children, fallback } = param;
    _s();
    const [hasError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Simulate error boundary for demo; in real use, wrap with try/catch or use error boundary lib
    if (hasError) {
        return fallback ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: fallback
        }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-[200px] w-full items-center justify-center rounded-lg border border-destructive/20 bg-destructive/10 p-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-destructive",
                        children: "Something went wrong"
                    }, void 0, false, {
                        fileName: "[project]/components/error-boundary.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground max-w-md",
                        children: "This component encountered an error. Please refresh the page or try again later."
                    }, void 0, false, {
                        fileName: "[project]/components/error-boundary.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "default",
                        className: "mt-4 px-4 py-2",
                        onClick: ()=>window.location.reload(),
                        children: "Refresh Page"
                    }, void 0, false, {
                        fileName: "[project]/components/error-boundary.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/error-boundary.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/error-boundary.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(ErrorBoundary, "MrT3giuhbqH0kGdkD6U/ICB0Uow=");
_c = ErrorBoundary;
var _c;
__turbopack_context__.k.register(_c, "ErrorBoundary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1bc47f61._.js.map