(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/marquee.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Marquee
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-client] (ecmascript)");
;
;
function Marquee(param) {
    let { className, reverse, pauseOnHover = false, children, vertical = false, repeat = 4, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ...props,
        "data-allow-animation": true,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group flex overflow-hidden px-2 py-0 [--duration:40s] [--gap:1rem] [gap:0]", {
            "flex-row": !vertical,
            "flex-col": vertical
        }, className),
        children: Array(repeat).fill(0).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex justify-around items-center [gap:var(--gap)] [will-change:transform]", {
                    // horizontal track should be at least the container width and not shrink
                    "animate-marquee flex-row min-w-full flex-none": !vertical,
                    // vertical track should be at least the container height and not shrink
                    "animate-marquee-vertical flex-col min-h-full flex-none": vertical
                }, {
                    "group-hover:[animation-play-state:paused]": pauseOnHover,
                    "[animation-direction:reverse]": reverse
                }),
                children: children
            }, i, false, {
                fileName: "[project]/components/ui/marquee.tsx",
                lineNumber: 41,
                columnNumber: 11
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ui/marquee.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = Marquee;
var _c;
__turbopack_context__.k.register(_c, "Marquee");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/testimonials.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$marquee$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/marquee.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$title$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/title.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
;
;
const Testimonials = ()=>{
    const testimonials = [
        {
            name: 'Nate Schoemer',
            role: 'Google Review 10/01/2025',
            content: 'I had the privilege of attending the Larry Krohn workshop at Joint Forces K9 this past March, and the experience was absolutely incredible. Not only is Larry an exceptional trainer, but the event itself was hosted flawlessly by Rob and his team...',
            fullContent: 'I had the privilege of attending the Larry Krohn workshop at Joint Forces K9 this past March, and the experience was absolutely incredible. Not only is Larry an exceptional trainer, but the event itself was hosted flawlessly by Rob and his team at Joint Forces K9. From start to finish, everything was handled in a truly professional way; refreshments and pastries were provided for attendees in the morning, the atmosphere was welcoming, and the event was run with an attention to detail that made it smooth and enjoyable for everyone.\n\nAs a professional dog trainer myself, and someone who is passionate about hosting training seminars, I had the chance to speak with Rob about the possibility of him hosting an event for me. From that very first conversation, it was clear that Rob is not only professional and courteous, but also genuinely invested in making each seminar a success. He took care of everything: promotion, logistics, hospitality, and creating a supportive environment. All I had to do was show up and train.\n\nThis was especially meaningful to me, as it was the first dog training seminar I taught in three years. Rob\'s professionalism, strong reputation for bringing in some of the best trainers in the world, and the warm welcome he extended made my return to teaching at workshops an unforgettable experience.\n\nRob, I can\'t thank you enough. Your commitment to excellence, both in running your business and supporting the dog training community, is second to none. For anyone considering attending or hosting a seminar, I can say with confidence that Joint Forces K9 is one of the very best places you could choose.',
            avatar: '/nate_schoemer.png',
            googleReviewUrl: 'https://maps.app.goo.gl/hvfrNeoy73VT7t3Y6'
        },
        {
            name: 'Jeff Eastburn',
            role: 'Google Review 9/30/2025',
            content: 'I had the opportunity to attend a dog training seminar at Joint Forces K9 Group with Nate Schoemer, and it was an amazing experience from start to finish. Joint Forces K9 Group was the perfect host—professional, well-organized, and welcoming...',
            fullContent: 'I had the opportunity to attend a dog training seminar at Joint Forces K9 Group with Nate Schoemer, and it was an amazing experience from start to finish. Joint Forces K9 Group was the perfect host—professional, well-organized, and welcoming. The facility was clean, spacious, and set up in a way that made the learning experience smooth and enjoyable.\n\nNate Schoemer\'s seminar was outstanding. He shared his deep knowledge of canine behavior and training in a way that was both easy to understand and incredibly practical. His teaching style kept everyone engaged, and he made sure all participants felt included, whether they were beginners or more experienced handlers.\n\nThe combination of Nate\'s expertise and Joint Forces K9 Group\'s top-notch hosting made this seminar one of the best training events I\'ve attended. I left feeling more confident as a handler and excited to apply what I learned. I would recommend any of the services offered by Joint Forces K9 Group, and I highly recommend attending any event they put on—you won\'t be disappointed.',
            avatar: '/jeff_eastburn.png',
            googleReviewUrl: 'https://maps.app.goo.gl/ViEVmKnDVvPn1vSt9'
        },
        {
            name: 'JST',
            role: 'Google Review 08/06/2025',
            content: 'Awesome group to work with. Very patient & professional. They are also willing to teach your dog a language other than what they do there, as long as you print out commands! Thanks to Abigail Wilmuth & the rest of the JF K9 team!',
            fullContent: 'Awesome group to work with. Very patient & professional. They are also willing to teach your dog a language other than what they do there, as long as you print out commands! Thanks to Abigail Wilmuth & the rest of the JF K9 team!',
            avatar: '/jst.png',
            googleReviewUrl: 'https://maps.app.goo.gl/xK2NEFsypQFw17FP8'
        },
        {
            name: 'Keila Rader',
            role: 'Google Review 09/02/2025',
            content: 'Terrific experience with Joint Forces K9 Group. We have 2 special pooches undergoing 2 week residential training now and are looking forward to the positive changes their training and our maintenance of the training will have in our home.',
            fullContent: 'Terrific experience with Joint Forces K9 Group. We have 2 special pooches undergoing 2 week residential training now and are looking forward to the positive changes their training and our maintenance of the training will have in our home.',
            avatar: '/keila_rader.png',
            googleReviewUrl: 'https://maps.app.goo.gl/d7H3AcXYATBVDk1L9'
        },
        {
            name: 'Kevin Perry',
            role: 'Google Review 07/31/2025',
            content: 'Moxy and I were treated as if we were the only ones there. Dylan took extra time to evaluate and suggest and I never felt more at home with everyone I had interacted with. Highly recommend.',
            fullContent: 'Moxy and I were treated as if we were the only ones there. Dylan took extra time to evaluate and suggest and I never felt more at home with everyone I had interacted with. Highly recommend.',
            avatar: '/kevin_perry.png',
            googleReviewUrl: 'https://maps.app.goo.gl/mV8GuNFragChs1LK8'
        },
        {
            name: 'Maria Garcia',
            role: 'Search & Rescue Team Lead',
            content: 'Outstanding training methodology and excellent results with our rescue dogs.',
            avatar: '/avatars/300-6.png',
            googleReviewUrl: undefined
        },
        {
            name: 'John Martinez',
            role: 'Private K9 Handler',
            content: 'The personalized training approach made all the difference for my service dog.',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
            googleReviewUrl: undefined
        },
        {
            name: 'Michael Brown',
            role: 'Head of Operations, ScaleTech',
            content: 'Reduced our operational costs by 40% while improving efficiency.',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
            googleReviewUrl: undefined
        },
        {
            name: 'Rachel Green',
            role: 'CTO, InnovateLab',
            content: 'The analytics dashboard gives us insights we never had before.',
            avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face',
            googleReviewUrl: undefined
        },
        {
            name: 'John Doe',
            role: 'CEO, TechStart',
            content: 'The analytics dashboard gives us insights we never had before.',
            avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face',
            googleReviewUrl: undefined
        }
    ];
    const TestimonialCard = (param)=>{
        let { testimonial, index } = param;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-shrink-0 w-[260px] sm:w-[300px] md:w-[340px] bg-gradient-to-br from-[#0A3161]/10 to-[#B31942]/10 rounded-xl p-3 sm:p-4 md:p-5 border border-border/50 shadow-sm mx-1 cursor-pointer hover:shadow-md transition-all duration-200 hover:border-[#B31942]/30",
            onClick: ()=>{
                if (testimonial.googleReviewUrl) {
                    window.open(testimonial.googleReviewUrl, '_blank', 'noopener,noreferrer');
                }
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground mb-4 font-medium line-clamp-4",
                    children: testimonial.content
                }, void 0, false, {
                    fileName: "[project]/components/testimonials.tsx",
                    lineNumber: 95,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: testimonial.avatar,
                            alt: testimonial.name,
                            width: 40,
                            height: 40,
                            className: "rounded-full object-cover",
                            sizes: "40px",
                            loading: index < 3 ? "eager" : "lazy",
                            priority: index < 3,
                            placeholder: "blur",
                            blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=",
                            unoptimized: true
                        }, void 0, false, {
                            fileName: "[project]/components/testimonials.tsx",
                            lineNumber: 97,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-semibold text-foreground",
                                    children: testimonial.name
                                }, void 0, false, {
                                    fileName: "[project]/components/testimonials.tsx",
                                    lineNumber: 111,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-muted-foreground",
                                    children: testimonial.role
                                }, void 0, false, {
                                    fileName: "[project]/components/testimonials.tsx",
                                    lineNumber: 112,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/testimonials.tsx",
                            lineNumber: 110,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        testimonial.googleReviewUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-[#B31942] font-medium hover:underline",
                            children: "Read Full Review →"
                        }, void 0, false, {
                            fileName: "[project]/components/testimonials.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/testimonials.tsx",
                    lineNumber: 96,
                    columnNumber: 3
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/testimonials.tsx",
            lineNumber: 87,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    };
    const firstColumn = testimonials.slice(0, 5);
    const secondColumn = testimonials.slice(5, 10);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "testimonials",
        className: "bg-white overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6 lg:px-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center flex-col text-center gap-3 mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomBadge"], {
                            variant: "blue-line-red-text",
                            children: "What Clients Say"
                        }, void 0, false, {
                            fileName: "[project]/components/testimonials.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$title$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomTitle"], {
                            children: "Loved by Thousands"
                        }, void 0, false, {
                            fileName: "[project]/components/testimonials.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground whitespace-nowrap max-w-4xl mx-auto text-center",
                            children: "Discover why clients trust Joint Forces K9 Group and join today to experience our professional K9 training services."
                        }, void 0, false, {
                            fileName: "[project]/components/testimonials.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/testimonials.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/testimonials.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex w-full flex-col gap-0.5 sm:gap-1 md:gap-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$marquee$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            pauseOnHover: true,
                            className: "[--duration:40s] [--gap:0.5rem] sm:[--gap:0.75rem] md:[--gap:1rem]",
                            repeat: 4,
                            children: firstColumn.map((testimonial, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialCard, {
                                    testimonial: testimonial,
                                    index: index
                                }, index, false, {
                                    fileName: "[project]/components/testimonials.tsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/components/testimonials.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$marquee$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            reverse: true,
                            pauseOnHover: true,
                            className: "[--duration:40s] [--gap:0.5rem] sm:[--gap:0.75rem] md:[--gap:1rem]",
                            repeat: 4,
                            children: secondColumn.map((testimonial, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialCard, {
                                    testimonial: testimonial,
                                    index: index + 5
                                }, index, false, {
                                    fileName: "[project]/components/testimonials.tsx",
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/components/testimonials.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/testimonials.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/testimonials.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/testimonials.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Testimonials;
const __TURBOPACK__default__export__ = Testimonials;
var _c;
__turbopack_context__.k.register(_c, "Testimonials");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_b01604f2._.js.map