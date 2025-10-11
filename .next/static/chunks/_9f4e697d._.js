(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/hooks/use-membership-width.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMembershipWidth",
    ()=>useMembershipWidth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const FALLBACK_WIDTH = 800;
const resolveTarget = ()=>{
    const grid = document.querySelector(".membership-grid");
    if (grid) return grid;
    return document.querySelector(".membership-card");
};
function useMembershipWidth() {
    _s();
    const [width, setWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(FALLBACK_WIDTH);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMembershipWidth.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            let rafId = null;
            let resizeObserver = null;
            let listenersAttached = false;
            const updateWidth = {
                "useMembershipWidth.useEffect.updateWidth": ()=>{
                    const target = resolveTarget();
                    if (target) {
                        setWidth(target.getBoundingClientRect().width);
                    }
                }
            }["useMembershipWidth.useEffect.updateWidth"];
            const setup = {
                "useMembershipWidth.useEffect.setup": ()=>{
                    const target = resolveTarget();
                    if (!target) {
                        rafId = window.requestAnimationFrame(setup);
                        return;
                    }
                    updateWidth();
                    if (!listenersAttached) {
                        window.addEventListener("resize", updateWidth);
                        listenersAttached = true;
                    }
                    if (typeof ResizeObserver !== "undefined") {
                        resizeObserver = new ResizeObserver(updateWidth);
                        resizeObserver.observe(target);
                    }
                }
            }["useMembershipWidth.useEffect.setup"];
            setup();
            return ({
                "useMembershipWidth.useEffect": ()=>{
                    if (rafId !== null) {
                        window.cancelAnimationFrame(rafId);
                    }
                    if (listenersAttached) {
                        window.removeEventListener("resize", updateWidth);
                    }
                    resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.disconnect();
                }
            })["useMembershipWidth.useEffect"];
        }
    }["useMembershipWidth.useEffect"], []);
    return width;
}
_s(useMembershipWidth, "YZXEzs0zfDaT6qdQOqia9fh9xes=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/instagram-gallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$membership$2d$width$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-membership-width.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const InstagramGallery = ()=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InstagramGallery.useEffect": ()=>{
            // Load Instagram embed script
            const script = document.createElement("script");
            script.src = "https://www.instagram.com/embed.js";
            script.async = true;
            script.id = "instagram-embed-script";
            script.onload = ({
                "InstagramGallery.useEffect": ()=>{
                    var _window_instgrm_Embeds, _window_instgrm;
                    // Process embeds when the script is ready
                    if ((_window_instgrm = window.instgrm) === null || _window_instgrm === void 0 ? void 0 : (_window_instgrm_Embeds = _window_instgrm.Embeds) === null || _window_instgrm_Embeds === void 0 ? void 0 : _window_instgrm_Embeds.process) {
                        window.instgrm.Embeds.process();
                    }
                }
            })["InstagramGallery.useEffect"];
            document.body.appendChild(script);
            return ({
                "InstagramGallery.useEffect": ()=>{
                    // Cleanup script on unmount with better error handling
                    try {
                        const existingScript = document.getElementById("instagram-embed-script");
                        if (existingScript && existingScript.parentNode) {
                            existingScript.parentNode.removeChild(existingScript);
                        }
                    } catch (e) {
                    // Silently handle cleanup errors
                    // console.warn('Instagram script cleanup error:', error);
                    }
                }
            })["InstagramGallery.useEffect"];
        }
    }["InstagramGallery.useEffect"], []);
    const membershipWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$membership$2d$width$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMembershipWidth"])();
    const roundedWidth = Math.round(membershipWidth);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InstagramGallery.useEffect": ()=>{
            var _window_instgrm_Embeds, _window_instgrm;
            // Re-process embeds when membershipWidth changes
            if ((_window_instgrm = window.instgrm) === null || _window_instgrm === void 0 ? void 0 : (_window_instgrm_Embeds = _window_instgrm.Embeds) === null || _window_instgrm_Embeds === void 0 ? void 0 : _window_instgrm_Embeds.process) {
                window.instgrm.Embeds.process();
            }
        }
    }["InstagramGallery.useEffect"], [
        membershipWidth
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "gallery",
        className: "bg-white shadow-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-15 pt-[15px] pb-[15px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center flex flex-col items-center justify-center content-block gap-15",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomBadge"], {
                        variant: "blue-line-red-text",
                        inline: true,
                        className: "!mb-0 !py-0",
                        children: "Gallery"
                    }, void 0, false, {
                        fileName: "[project]/components/instagram-gallery.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "w-full font-bold text-center text-brand-navy text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight",
                        children: "Follow Our Journey"
                    }, void 0, false, {
                        fileName: "[project]/components/instagram-gallery.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base sm:text-lg md:text-xl text-brand-navy text-center leading-normal px-15 w-full responsive-width",
                        style: {
                            "--max-width": "".concat(roundedWidth, "px")
                        },
                        children: "See our latest training sessions, workshops, and proud K9 partners on Instagram."
                    }, void 0, false, {
                        fileName: "[project]/components/instagram-gallery.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://www.instagram.com/jointforcesk9group/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "inline-flex items-center justify-center gap-15 rounded-full px-15 py-15 text-sm sm:text-base lg:text-lg font-semibold bg-brand-red text-white shadow-lg hover:bg-brand-navy hover:text-white transition-all duration-300 hover:shadow-xl hover:shadow-brand-navy/25 w-full sm:w-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-6 h-6",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/instagram-gallery.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/instagram-gallery.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Follow Us On Instagram"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/instagram-gallery.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/instagram-gallery.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center w-full mt-15",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full responsive-width max-w-[800px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                className: "instagram-embed",
                                "data-instgrm-permalink": "https://www.instagram.com/jointforcesk9group/?utm_source=ig_embed&utm_campaign=loading",
                                "data-instgrm-version": "14",
                                style: {
                                    "--dynamic-width": "".concat(Math.round(membershipWidth), "px")
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://www.instagram.com/jointforcesk9group/?utm_source=ig_embed&utm_campaign=loading",
                                            className: "instagram-link",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-row items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                backgroundColor: "#F4F4F4",
                                                                borderRadius: "50%",
                                                                flexGrow: "0",
                                                                height: "40px",
                                                                marginRight: "14px",
                                                                width: "40px"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/instagram-gallery.tsx",
                                                            lineNumber: 115,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                flexGrow: "1",
                                                                justifyContent: "center"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        backgroundColor: "#F4F4F4",
                                                                        borderRadius: "4px",
                                                                        flexGrow: "0",
                                                                        height: "14px",
                                                                        marginBottom: "6px",
                                                                        width: "100px"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/instagram-gallery.tsx",
                                                                    lineNumber: 133,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        backgroundColor: "#F4F4F4",
                                                                        borderRadius: "4px",
                                                                        flexGrow: "0",
                                                                        height: "14px",
                                                                        width: "60px"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/instagram-gallery.tsx",
                                                                    lineNumber: 143,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/instagram-gallery.tsx",
                                                            lineNumber: 125,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/instagram-gallery.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: "19% 0"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/instagram-gallery.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "block",
                                                        height: "50px",
                                                        margin: "0 auto 12px",
                                                        width: "50px"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "50px",
                                                        height: "50px",
                                                        viewBox: "0 0 60 60",
                                                        version: "1.1",
                                                        xmlns: "https://www.w3.org/2000/svg",
                                                        xmlnsXlink: "https://www.w3.org/1999/xlink",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                            stroke: "none",
                                                            strokeWidth: "1",
                                                            fill: "none",
                                                            fillRule: "evenodd",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                                transform: "translate(-511.000000, -20.000000)",
                                                                fill: "#000000",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/instagram-gallery.tsx",
                                                                        lineNumber: 182,
                                                                        columnNumber: 31
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/instagram-gallery.tsx",
                                                                    lineNumber: 181,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/instagram-gallery.tsx",
                                                                lineNumber: 177,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/instagram-gallery.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/instagram-gallery.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/instagram-gallery.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        paddingTop: "8px"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            color: "#3897f0",
                                                            fontFamily: "Arial,sans-serif",
                                                            fontSize: "14px",
                                                            fontStyle: "normal",
                                                            fontWeight: "550",
                                                            lineHeight: "18px"
                                                        },
                                                        children: "View this profile on Instagram"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/instagram-gallery.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/instagram-gallery.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: "12.5% 0"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/instagram-gallery.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        marginBottom: "14px",
                                                        alignItems: "center"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        backgroundColor: "#F4F4F4",
                                                                        borderRadius: "50%",
                                                                        height: "12.5px",
                                                                        width: "12.5px",
                                                                        transform: "translateX(0px) translateY(7px)"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/instagram-gallery.tsx",
                                                                    lineNumber: 212,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        backgroundColor: "#F4F4F4",
                                                                        height: "12.5px",
                                                                        transform: "rotate(-45deg) translateX(3px) translateY(1px)",
                                                                        width: "12.5px",
                                                                        flexGrow: "0",
                                                                        marginRight: "14px",
                                                                        marginLeft: "2px"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/instagram-gallery.tsx",
                                                                    lineNumber: 221,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        backgroundColor: "#F4F4F4",
                                                                        borderRadius: "50%",
                                                                        height: "12.5px",
                                                                        width: "12.5px",
                                                                        transform: "translateX(9px) translateY(-18px)"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/instagram-gallery.tsx",
                                                                    lineNumber: 233,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/instagram-gallery.tsx",
                                                            lineNumber: 211,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                marginLeft: "8px"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        backgroundColor: "#F4F4F4",
                                                                        borderRadius: "50%",
                                                                        flexGrow: "0",
                                                                        height: "20px",
                                                                        width: "20px"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/instagram-gallery.tsx",
                                                                    lineNumber: 244,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        width: "0",
                                                                        height: "0",
                                                                        borderTop: "2px solid transparent",
                                                                        borderLeft: "6px solid #f4f4f4",
                                                                        borderBottom: "2px solid transparent",
                                                                        transform: "translateX(16px) translateY(-4px) rotate(30deg)"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/instagram-gallery.tsx",
                                                                    lineNumber: 253,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/instagram-gallery.tsx",
                                                            lineNumber: 243,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                marginLeft: "auto"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        width: "0px",
                                                                        borderTop: "8px solid #F4F4F4",
                                                                        borderRight: "8px solid transparent",
                                                                        transform: "translateY(16px)"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/instagram-gallery.tsx",
                                                                    lineNumber: 266,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        backgroundColor: "#F4F4F4",
                                                                        flexGrow: "0",
                                                                        height: "12px",
                                                                        width: "16px",
                                                                        transform: "translateY(-4px)"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/instagram-gallery.tsx",
                                                                    lineNumber: 274,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        width: "0",
                                                                        height: "0",
                                                                        borderTop: "8px solid #F4F4F4",
                                                                        borderLeft: "8px solid transparent",
                                                                        transform: "translateY(-4px) translateX(8px)"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/instagram-gallery.tsx",
                                                                    lineNumber: 283,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/instagram-gallery.tsx",
                                                            lineNumber: 265,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/instagram-gallery.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        flexGrow: "1",
                                                        justifyContent: "center",
                                                        marginBottom: "24px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                backgroundColor: "#F4F4F4",
                                                                borderRadius: "4px",
                                                                flexGrow: "0",
                                                                height: "14px",
                                                                marginBottom: "6px",
                                                                width: "224px"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/instagram-gallery.tsx",
                                                            lineNumber: 303,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                backgroundColor: "#F4F4F4",
                                                                borderRadius: "4px",
                                                                flexGrow: "0",
                                                                height: "14px",
                                                                width: "144px"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/instagram-gallery.tsx",
                                                            lineNumber: 313,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/instagram-gallery.tsx",
                                                    lineNumber: 294,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/instagram-gallery.tsx",
                                            lineNumber: 108,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: "#c9c8cd",
                                                fontFamily: "Arial,sans-serif",
                                                fontSize: "14px",
                                                lineHeight: "17px",
                                                marginBottom: "0",
                                                marginTop: "8px",
                                                overflow: "hidden",
                                                padding: "8px 0 7px",
                                                textAlign: "center",
                                                textOverflow: "ellipsis",
                                                whiteSpace: "nowrap"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://www.instagram.com/jointforcesk9group/?utm_source=ig_embed&utm_campaign=loading",
                                                    style: {
                                                        color: "#c9c8cd",
                                                        fontFamily: "Arial,sans-serif",
                                                        fontSize: "14px",
                                                        fontStyle: "normal",
                                                        fontWeight: "normal",
                                                        lineHeight: "17px"
                                                    },
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: "Joint Forces K9 Group"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/instagram-gallery.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " ",
                                                "(@",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://www.instagram.com/jointforcesk9group/?utm_source=ig_embed&utm_campaign=loading",
                                                    style: {
                                                        color: "#c9c8cd",
                                                        fontFamily: "Arial,sans-serif",
                                                        fontSize: "14px",
                                                        fontStyle: "normal",
                                                        fontWeight: "normal",
                                                        lineHeight: "17px"
                                                    },
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: "jointforcesk9group"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/instagram-gallery.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                ") • Instagram photos and videos"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/instagram-gallery.tsx",
                                            lineNumber: 324,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/instagram-gallery.tsx",
                                    lineNumber: 107,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/instagram-gallery.tsx",
                                lineNumber: 101,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/instagram-gallery.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/instagram-gallery.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "press",
                        className: "mt-15",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomBadge"], {
                            variant: "blue-line-red-text",
                            inline: true,
                            className: "!mb-0 !py-0",
                            children: "Press"
                        }, void 0, false, {
                            fileName: "[project]/components/instagram-gallery.tsx",
                            lineNumber: 380,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/instagram-gallery.tsx",
                        lineNumber: 379,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "w-full font-bold text-center text-[#0A3161] text-3xl md:text-5xl leading-none",
                        children: "Press & Media"
                    }, void 0, false, {
                        fileName: "[project]/components/instagram-gallery.tsx",
                        lineNumber: 389,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg md:text-xl text-[#0A3161] text-center whitespace-nowrap leading-normal",
                        style: {
                            maxWidth: "".concat(roundedWidth, "px"),
                            width: "100%",
                            fontSize: "clamp(1rem, 3vw, 1.5rem)"
                        },
                        children: "Explore recent coverage and download resources for your next story about Joint Forces K9."
                    }, void 0, false, {
                        fileName: "[project]/components/instagram-gallery.tsx",
                        lineNumber: 393,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center gap-15 sm:flex-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/press",
                                className: "inline-flex items-center justify-center rounded-full px-15 py-[15px] text-xs md:text-sm lg:text-base font-semibold bg-[#0A3161] text-white shadow-lg transition-all duration-200 hover:bg-[#B31942] hover:shadow-xl hover:shadow-[#B31942]/25",
                                children: "View Press Releases"
                            }, void 0, false, {
                                fileName: "[project]/components/instagram-gallery.tsx",
                                lineNumber: 406,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "mailto:info@jointforcesk9.com?subject=Press%20Inquiry",
                                className: "inline-flex items-center justify-center rounded-full px-15 py-[15px] text-xs md:text-sm lg:text-base font-semibold border border-[#0A3161] text-[#0A3161] shadow-lg transition-all duration-200 hover:border-[#B31942] hover:bg-[#B31942] hover:text-white hover:shadow-xl hover:shadow-[#B31942]/25",
                                children: "Contact Media Team"
                            }, void 0, false, {
                                fileName: "[project]/components/instagram-gallery.tsx",
                                lineNumber: 412,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/instagram-gallery.tsx",
                        lineNumber: 405,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/instagram-gallery.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/instagram-gallery.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/instagram-gallery.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(InstagramGallery, "LxkL7GA6nQRIXc4v+voIPuMXQ1A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$membership$2d$width$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMembershipWidth"]
    ];
});
_c = InstagramGallery;
const __TURBOPACK__default__export__ = InstagramGallery;
var _c;
__turbopack_context__.k.register(_c, "InstagramGallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_9f4e697d._.js.map