module.exports = [
"[externals]/canvas-confetti [external] (canvas-confetti, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("canvas-confetti", () => require("canvas-confetti"));

module.exports = mod;
}),
"[project]/components/call-to-action.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$canvas$2d$confetti__$5b$external$5d$__$28$canvas$2d$confetti$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/canvas-confetti [external] (canvas-confetti, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
;
;
const CallToAction = ()=>{
    const randomInRange = (min, max)=>Math.random() * (max - min) + min;
    const handleConfetti = ()=>{
        const duration = 1000;
        const end = Date.now() + duration;
        (function frame() {
            (0, __TURBOPACK__imported__module__$5b$externals$5d2f$canvas$2d$confetti__$5b$external$5d$__$28$canvas$2d$confetti$2c$__cjs$29$__["default"])({
                particleCount: 3,
                angle: randomInRange(55, 125),
                spread: 60,
                origin: {
                    x: randomInRange(0.3, 0.7),
                    y: 0.6
                },
                colors: [
                    '#B31942'
                ],
                gravity: 0.8,
                scalar: 0.9,
                drift: 0
            });
            (0, __TURBOPACK__imported__module__$5b$externals$5d2f$canvas$2d$confetti__$5b$external$5d$__$28$canvas$2d$confetti$2c$__cjs$29$__["default"])({
                particleCount: 3,
                angle: randomInRange(55, 125),
                spread: 60,
                origin: {
                    x: randomInRange(0.3, 0.7),
                    y: 0.6
                },
                colors: [
                    '#FFFFFF'
                ],
                gravity: 0.8,
                scalar: 0.9,
                drift: 0
            });
            (0, __TURBOPACK__imported__module__$5b$externals$5d2f$canvas$2d$confetti__$5b$external$5d$__$28$canvas$2d$confetti$2c$__cjs$29$__["default"])({
                particleCount: 3,
                angle: randomInRange(55, 125),
                spread: 60,
                origin: {
                    x: randomInRange(0.3, 0.7),
                    y: 0.6
                },
                colors: [
                    '#0A3161'
                ],
                gravity: 0.8,
                scalar: 0.9,
                drift: 0
            });
            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "h-96 w-full bg-[#0A3161] flex flex-col items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 text-center relative z-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white font-semibold text-sm uppercase tracking-wide mb-6",
                        children: "Professional K9 Training Excellence"
                    }, void 0, false, {
                        fileName: "[project]/components/call-to-action.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl md:text-5xl font-bold text-white mb-10",
                        children: "Schedule Your Dog's Assessment Today"
                    }, void 0, false, {
                        fileName: "[project]/components/call-to-action.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            size: "lg",
                            className: "font-semibold bg-[#B31942] text-white hover:bg-white hover:text-[#B31942] transition-colors",
                            onMouseEnter: handleConfetti,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "https://book.squareup.com/appointments/c630ef62-7e6e-4179-a651-2e11ce546994/location/E0PRMNT5CJEZD/services/JBIZH4OF3F73LGYJE6P35JM5?savt=a9890cba-34fb-4bce-84bb-7b45527d4906",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "Get a At Home Training Evaluation"
                            }, void 0, false, {
                                fileName: "[project]/components/call-to-action.tsx",
                                lineNumber: 70,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/call-to-action.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/call-to-action.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/call-to-action.tsx",
                lineNumber: 55,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/call-to-action.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/call-to-action.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CallToAction;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ab6cc188._.js.map