(window.webpackJsonp = window.webpackJsonp || []).push([
    [30], {
        263: function (e, t, a) {
            "use strict";
            a.d(t, "a", (function () {
                return c
            }));
            var n = a(277),
                i = a.n(n),
                c = function (e) {
                    return i
                        .a
                        .sanitize(e)
                }
        },
        298: function (e, t, a) {
            "use strict";
            a.d(t, "a", (function () {
                return le
            })),
            a.d(t, "b", (function () {
                return me
            }));
            var n = a(8),
                i = a(42),
                c = a(119),
                l = a(58),
                o = a(47),
                r = a(118),
                s = a(0),
                u = a.n(s),
                d = a(17),
                m = a.n(d),
                p = a(2),
                v = a(19),
                g = a(37),
                b = a(4),
                E = a(1),
                O = a(130),
                f = a(84),
                _ = a(21),
                h = function (e) {
                    var t = function () {
                        e.onClick && e.onClick()
                    };
                    return u
                        .a
                        .createElement(
                            u.a.Fragment,
                            null,
                            e.recommended && e.isActive
                                ? u.a.createElement("div", {
                                    className: m()(
                                        "w-mini-articles__item",
                                        "w-mini-articles__item-recommended-active",
                                        "w-mini-articles__item--" + e.deviceType,
                                        {
                                            "w-mini-articles__item--is-active": e.isActive,
                                            "w-mini-articles__item--last": e.isLastItem,
                                            "w-mini-articles__item--contained": E.b.FULL_SIZE_IMAGE
                                        }
                                    ),
                                    style: {
                                        backgroundImage: "url(" + e.src + ")"
                                    },
                                    onClick: t
                                })
                                : u.a.createElement("div", {
                                    className: m()(
                                        "w-mini-articles__item",
                                        "w-mini-articles__item--" + e.deviceType,
                                        {
                                            "w-mini-articles__item--is-active": e.isActive,
                                            "w-mini-articles__item--last": e.isLastItem,
                                            "w-mini-articles__item--contained": E.b.FULL_SIZE_IMAGE
                                        }
                                    ),
                                    style: {
                                        backgroundImage: "url(" + e.src + ")"
                                    },
                                    onClick: t
                                })
                        )
                },
                C = a(106),
                A = a(14),
                S = function (e) {
                    var t,
                        a = e.isActive,
                        i = Object(n.c)(),
                        c = Object(C.useDevice)().deviceType;
                    return u
                        .a
                        .createElement(h, {
                            isActive: a,
                            onClick: function () {
                                i(Object(A.b)(!1)),
                                i(Object(A.f)(E.b.CUSTOM_PRODUCT))
                            },
                            deviceType: c,
                            src: (
                                null === (t = E.b.CUSTOM_PRODUCT) || void 0 === t
                                    ? void 0
                                    : t.preview_path
                            ) || E.b.CUSTOM_PRODUCT.image_path
                        })
                },
                y = function (e) {
                    var t = e.article,
                        a = e.articleType,
                        i = e.deviceType,
                        c = e.isActive,
                        l = e.isLastItem,
                        o = e.isApplyLoading,
                        r = e.recommended,
                        s = e.selectArticleItem,
                        d = e.selectProductCallback,
                        m = Object(n.c)(),
                        g = u
                            .a
                            .useMemo((function () {
                                var e;
                                return t.image_path
                                    ? "" + Object(b.g)({
                                        shortPath: t.image_path,
                                        size: p.d.small,
                                        type: p.e.product,
                                        fullSizeImage: E.b.FULL_SIZE_IMAGE,
                                        productTypeCode: null === (
                                            e = null == t
                                                ? void 0
                                                : t.product_type
                                        ) || void 0 === e
                                            ? void 0
                                            : e.code
                                    })
                                    : _.kb
                            }), [t]);
                    return u
                        .a
                        .createElement(h, {
                            onClick: function () {
                                t.image_path && !o && (
                                    d && d({article: t, articleType: a}),
                                    s({article: t, articleType: a}),
                                    m(Object(v.selectProduct)(
                                        {
                                            step: v.CatalogViewEnum.products,
                                            type: a,
                                            selectedProduct: {
                                                product: t,
                                                name: t.name,
                                                uuid: t.uuid,
                                                step: v.CatalogViewEnum.products
                                            }
                                        }
                                    )),
                                    m(Object(f.setScrollPosition)(0, v.CatalogViewEnum.products, !0))
                                )
                            },
                            src: g,
                            deviceType: i,
                            isActive: c,
                            isLastItem: l,
                            recommended: r
                        })
                },
                T = a(13),
                k = a(36),
                w = {
                    selectArticleItem: i.selectArticleItem
                },
                P = Object(n.b)((function (e) {
                    return {
                        deviceType: Object(T.g)(e),
                        isApplyLoading: Object(k.getApplyLoading)(e)
                    }
                }), w)(y),
                j = a(82),
                F = a(9),
                I = function (e, t) {
                    return Array
                        .from(e.current.children)
                        .find((function (e) {
                            var a = e.attributes["data-article"];
                            if (!a || !t) 
                                return !1;
                            var n = JSON.parse((
                                null == a
                                    ? void 0
                                    : a.value
                            ) || {});
                            return n.uuid === t.uuid && n.collection_uuid === t.collection_uuid && n.recommended === (
                                t.isRecommended || !1
                            )
                        }))
                },
                N = function (e) {
                    var t = Object(s.useRef)(null),
                        a = Object(s.useRef)(null),
                        i = Object(s.useState)(null),
                        c = i[0],
                        l = i[1],
                        o = Object(s.useState)(!1),
                        r = o[0],
                        u = o[1],
                        d = Object(s.useState)(!1),
                        m = d[0],
                        p = d[1],
                        g = Object(n.d)(v.getSelectedProduct),
                        b = Object(n.d)(j.getCurrentView),
                        E = Object(n.d)(T.h);
                    return Object(s.useEffect)((function () {
                        if (e.length > 0 && l(e[0]), e.length > 0 && !r) 
                            u(!0),
                            setTimeout((function () {
                                p(!0)
                            }), 500);
                        else if (r && c && e.length > 0 && e[0].uuid !== c.uuid) {
                            var n = I(t, c);
                            n && (
                                null == n
                                    ? void 0
                                    : n.offsetLeft
                            ) && a
                                .current
                                .scrollTo((
                                    null == n
                                        ? void 0
                                        : n.offsetLeft
                                ) - 100, 0)
                        }
                    }), [e.length]),
                    Object(s.useEffect)((function () {
                        var e = setTimeout((function () {
                            if (r && (
                                null == g
                                    ? void 0
                                    : g.product
                            ) && (g.step === v.CatalogViewEnum.products || b === F.a.search)) {
                                var e = I(
                                    t,
                                    null == g
                                        ? void 0
                                        : g.product
                                );
                                if (e && (
                                    null == e
                                        ? void 0
                                        : e.offsetLeft
                                )) {
                                    var n = e.offsetLeft - (t.current.clientWidth / 2 - e.clientWidth / 2);
                                    a
                                        .current
                                        .scrollTo({
                                            left: n,
                                            behavior: c
                                                ? "smooth"
                                                : "auto"
                                        })
                                }
                            }
                        }), 0);
                        return function () {
                            return clearTimeout(e)
                        }
                    }), [
                        g,
                        E,
                        t,
                        a,
                        b,
                        r
                    ]),
                    [t, a, m]
                },
                L = a(264),
                R = a(129),
                M = a(263),
                B = a(6),
                V = a(24),
                D = a(96),
                U = function () {
                    return (U = Object.assign || function (e) {
                        for (var t, a = 1, n = arguments.length; a < n; a++) 
                            for (var i in t = arguments[a]) 
                                Object
                                    .prototype
                                    .hasOwnProperty
                                    .call(t, i) && (e[i] = t[i]);
                        return e
                    }).apply(this, arguments)
                },
                H = function (e, t, a) {
                    if (a || 2 === arguments.length) 
                        for (var n, i = 0, c = t.length; i < c; i++) 
                            !n && i in t || (n || (n = Array.prototype.slice.call(t, 0, i)), n[i] = t[i]);
                return e.concat(n || Array.prototype.slice.call(t))
                },
                W = function (e) {
                    return (
                        null == e
                            ? void 0
                            : e.collection_uuid
                    ) + "_" + e.uuid + "_" + (
                        e.isRecommended || !1
                    )
                },
                G = a(3),
                z = a(252),
                J = Object(G.q)((function (e) {
                    var t,
                        a = e.deviceType,
                        i = e.orientation,
                        c = e.products,
                        l = e.articleType,
                        o = e.isMiniCatalogCollapsed,
                        r = e.itemClassName,
                        s = void 0 === r
                            ? ""
                            : r,
                        d = e.isLoading,
                        p = e.initArticlePage,
                        g = e.articleView,
                        f = e.catalogStep,
                        _ = e.searchResults,
                        h = e.surfaces,
                        C = e.loadMore,
                        A = e.loadMoreFilteredArticles,
                        y = e.getLocalizationProperty,
                        T = u
                            .a
                            .useMemo((function () {
                                var e,
                                    t,
                                    a = {
                                        data: []
                                    };
                                switch (g) {
                                    case F.a.search:
                                        return (
                                            null === (
                                                e = null == _
                                                    ? void 0
                                                    : _.data
                                            ) || void 0 === e
                                                ? void 0
                                                : e.length
                                        ) > 0
                                            ? _
                                            : a;
                                    case F.a.products:
                                        return (
                                            null === (
                                                t = null == c
                                                    ? void 0
                                                    : c.data
                                            ) || void 0 === t
                                                ? void 0
                                                : t.length
                                        ) > 0
                                            ? c
                                            : a;
                                    case F.a.customProducts:
                                    default:
                                        return a
                                }
                            }), [g, _, c]),
                        k = function (e) {
                            var t = e.articleType,
                                a = u
                                    .a
                                    .useState([]),
                                i = a[0],
                                c = a[1],
                                l = u
                                    .a
                                    .useState(!1),
                                o = l[0],
                                r = l[1],
                                s = u
                                    .a
                                    .useState(null),
                                d = s[0],
                                m = s[1],
                                p = Object(n.d)(v.getSelectedProduct),
                                g = Object(n.d)(D.i);
                            u
                                .a
                                .useEffect((function () {
                                    var e,
                                        t;
                                    if (p && (
                                        null == p
                                            ? void 0
                                            : p.product
                                    ) && !(
                                        null === (
                                            e = null == p
                                                ? void 0
                                                : p.product
                                        ) || void 0 === e
                                            ? void 0
                                            : e.isRecommended
                                    )) {
                                        if (m(p.product), p.product && i.length > 0) {
                                            var a = i.map((function (e) {
                                                return e.key !== W(p.product)
                                                    ? U(U({}, e), {
                                                        open: !1
                                                    })
                                                    : e
                                            }));
                                            c(a)
                                        }
                                    } else 
                                        p && (
                                            null == p
                                                ? void 0
                                                : p.product
                                        ) && (
                                            null === (
                                                t = null == p
                                                    ? void 0
                                                    : p.product
                                            ) || void 0 === t
                                                ? void 0
                                                : t.isRecommended
                                        ) && B
                                            .c
                                            .fireEvent(B.a.similarProductsApplied, {
                                                additional_data: {
                                                    eventValue: {
                                                        article_sku: p.product.vendor_code
                                                    }
                                                }
                                            })
                                    }), [p]),
                            u
                                .a
                                .useEffect((function () {
                                    g && (c([]), r(!1))
                                }), [g]);
                            return {
                                recommendedLoading: o,
                                lastSelectedProduct: d,
                                recommendedProducts: i,
                                onHandleClickRecommendedButton: function (e) {
                                    if (!o) {
                                        B
                                            .c
                                            .fireEvent(B.a.similarProductsClicked),
                                        r(!0);
                                        var a = H([], i, !0),
                                            n = a.findIndex((function (t) {
                                                return t.key === W(e)
                                            }));
                                        -1 === n
                                            ? Object(V.getRecommendedProducts)(e.uuid, {type: t})
                                                .then((function (t) {
                                                    if (t.data.length > 0) {
                                                        var n = H([], t.data, !0).map((function (e) {
                                                            return U(U({}, e), {
                                                                isRecommended: !0
                                                            })
                                                        }));
                                                        a.push({
                                                            key: W(e),
                                                            loading: !1,
                                                            products: n,
                                                            open: !0,
                                                            noData: !n.length
                                                        })
                                                    } else 
                                                        a.push({
                                                            key: W(e),
                                                            loading: !1,
                                                            products: [],
                                                            open: !1,
                                                            noData: !0
                                                        });
                                                    c(a),
                                                    r(!1)
                                                }))
                                                .catch((function () {
                                                    r(!1),
                                                    a.push({
                                                        key: W(e),
                                                        loading: !1,
                                                        products: [],
                                                        open: !1,
                                                        noData: !0
                                                    }),
                                                    c(a)
                                                }))
                                            : (a[n].products.length > 0 && (a[n].open = !0, c(a)), r(!1))
                                    }
                                }
                            }
                        }({articleType: l}),
                        w = k.recommendedProducts,
                        j = k.lastSelectedProduct,
                        I = k.recommendedLoading,
                        J = k.onHandleClickRecommendedButton,
                        Z = N(T.data),
                        q = Z[0],
                        x = Z[1],
                        K = Z[2],
                        Q = function (e, t) {
                            var a,
                                n;
                            e && t.isIntersecting && (
                                null === (
                                    a = null == T
                                        ? void 0
                                        : T.meta
                                ) || void 0 === a
                                    ? void 0
                                    : a.last_page
                            ) > (
                                null === (
                                    n = null == T
                                        ? void 0
                                        : T.meta
                                ) || void 0 === n
                                    ? void 0
                                    : n.current_page
                            ) && !d && (
                                g === F.a.search
                                    ? A()
                                    : C(f, l)
                            )
                        },
                        Y = m()(
                            "w-mini-catalog",
                            "w-mini-catalog--" + a,
                            "w-mini-catalog--" + a + "--" + i,
                            ((t = {})["w-mini-catalog--" + a + "-collapsed"] = o, t),
                            {
                                "w-mini-catalog--custom": g === F.a.customProducts
                            }
                        ),
                        X = u
                            .a
                            .createElement(
                                "div",
                                {
                                    ref: q,
                                    className: m()("w-mini-catalog__inner", "w-mini-catalog__inner--" + a, "" + s)
                                },
                                g === F.a.products && f === v.CatalogViewEnum.products && p > 1 && K && (T.data || []).length > 0 && Array(1).fill(null).map((function (e, t) {
                                    return 0 === t
                                        ? u
                                            .a
                                            .createElement(R.a, {
                                                as: "span",
                                                onChange: function (e, t) {
                                                    e && t.isIntersecting && p > 1 && !d && C(f, l, p - 1)
                                                },
                                                key: Object(b.m)()
                                            }, u.a.createElement(O.a, {
                                                variant: "rect",
                                                className: m()(
                                                    "w-mini-articles__item",
                                                    "mini-catalog--skeleton",
                                                    "w-mini-articles__item--" + a
                                                )
                                            }))
                                        : u
                                            .a
                                            .createElement("span", {
                                                key: Object(b.m)()
                                            }, u.a.createElement(O.a, {
                                                key: Object(b.m)(),
                                                variant: "rect",
                                                className: m()(
                                                    "w-mini-articles__item",
                                                    "mini-catalog--skeleton",
                                                    "w-mini-articles__item--" + a
                                                )
                                            }))
                                })),
                                T.data.map((function (e, t) {
                                    var n = Object(L.b)(h, l, e),
                                        i = t === T.data.length - 1,
                                        c = W(e),
                                        o = w.find((function (e) {
                                            return e.key === c
                                        })),
                                        r = E.b.IS_RECOMMENDER_PRODUCTS
                                            ? u
                                                .a
                                                .createElement(u.a.Fragment, null, !!n && j && c === W(j) && !(
                                                    null == o
                                                        ? void 0
                                                        : o.open
                                                ) && u.a.createElement(
                                                    "span",
                                                    {
                                                        className: "recommended__button",
                                                        onClick: function () {
                                                            J(e)
                                                        }
                                                    },
                                                    I
                                                        ? u.a.createElement("div", {
                                                            className: "progress__wrapper"
                                                        }, u.a.createElement(z.a, {
                                                            style: {
                                                                color: "#FFFFFF"
                                                            },
                                                            className: "progress"
                                                        }))
                                                        : u.a.createElement(G.k, {
                                                            dangerouslySetInnerHTML: {
                                                                __html: Object(M.a)(y(
                                                                    (
                                                                            null == o
                                                                                ? void 0
                                                                                : o.noData
                                                                        )
                                                                        ? "ARTICLE_LIST.NO_RESULTS_MESSAGE"
                                                                        : "ARTICLE_LIST.SIMILAR_PRODUCTS"
                                                                ))
                                                            },
                                                            fontName: "new_label",
                                                            as: "div",
                                                            className: "recommended__title"
                                                        })
                                                ), o && (
                                                    null == o
                                                        ? void 0
                                                        : o.open
                                                ) && (
                                                    null == o
                                                        ? void 0
                                                        : o.products.length
                                                ) > 0 && u.a.createElement(u.a.Fragment, null, o.products.map((function (e, t) {
                                                    var a = Object(L.b)(h, l, e);
                                                    return u
                                                        .a
                                                        .createElement(
                                                            u.a.Fragment,
                                                            null,
                                                            u.a.createElement("span", {
                                                                key: W(e),
                                                                "data-article": JSON.stringify({
                                                                    uuid: e.uuid,
                                                                    collection_uuid: e.collection_uuid,
                                                                    recommended: !0
                                                                }),
                                                                className: m()("recommended", {
                                                                    "recommended--active": !!a,
                                                                    "recommended--first-child": 0 === t,
                                                                    "recommended--last-child": t === o.products.length - 1
                                                                })
                                                            }, u.a.createElement(P, {
                                                                articleType: l,
                                                                article: e,
                                                                isActive: !!a,
                                                                isLastItem: i,
                                                                recommended: !0
                                                            })),
                                                            !!a && t !== o.products.length - 1 && u.a.createElement("span", {className: "recommended__stub"})
                                                        )
                                                }))))
                                            : null;
                                    return i
                                        ? u
                                            .a
                                            .createElement(u.a.Fragment, {
                                                key: c
                                            }, u.a.createElement(R.a, {
                                                as: "span",
                                                onChange: Q,
                                                key: c,
                                                "data-article": JSON.stringify({
                                                    uuid: e.uuid,
                                                    collection_uuid: e.collection_uuid,
                                                    recommended: !1
                                                })
                                            }, u.a.createElement(P, {
                                                articleType: l,
                                                article: e,
                                                isActive: !!n,
                                                isLastItem: i && !d
                                            })), r, d && u.a.createElement("span", {
                                                key: Object(b.m)()
                                            }, u.a.createElement(O.a, {
                                                variant: "rect",
                                                className: m()(
                                                    "w-mini-articles__item",
                                                    "mini-catalog--skeleton",
                                                    "w-mini-articles__item--" + a,
                                                    {"w-mini-articles__item--last": i}
                                                )
                                            })))
                                        : u
                                            .a
                                            .createElement(u.a.Fragment, {
                                                key: c
                                            }, u.a.createElement("span", {
                                                key: c,
                                                "data-article": JSON.stringify({
                                                    uuid: e.uuid,
                                                    collection_uuid: e.collection_uuid,
                                                    recommended: !1
                                                })
                                            }, u.a.createElement(P, {
                                                articleType: l,
                                                key: c,
                                                article: e,
                                                isActive: !!n,
                                                isLastItem: i
                                            })), r)
                                })),
                                g === F.a.customProducts && u.a.createElement(S, {
                                    surfaces: h,
                                    isActive: !!h.find((function (e) {
                                        var t,
                                            a;
                                        return (
                                            null === (
                                                t = null == e
                                                    ? void 0
                                                    : e.product
                                            ) || void 0 === t
                                                ? void 0
                                                : t.vendor_code
                                        ) === (
                                            null === (a = E.b.CUSTOM_PRODUCT) || void 0 === a
                                                ? void 0
                                                : a.vendor_code
                                        )
                                    }))
                                })
                            );
                    return u
                        .a
                        .createElement("div", {
                            className: Y,
                            ref: x
                        }, X)
                })),
                Z = a(44),
                q = {
                    loadMore: v.loadMoreProducts,
                    loadMoreFilteredArticles: Z.loadMoreFilteredArticles
                },
                x = Object(n.b)((function (e) {
                    return {
                        deviceType: Object(T.g)(e),
                        orientation: Object(T.h)(e),
                        products: Object(v.getProductsForView)(e),
                        isMiniCatalogCollapsed: e.miniCatalog.isCollapsed,
                        articleType: e.articles.type,
                        isLoading: Object(v.getCatalogLoading)(e),
                        articleView: g
                            .navigationSelectors
                            .getCurrentView(e),
                        initArticlePage: Object(v.getInitProductPage)(e),
                        catalogStep: Object(v.getCurrentStep)(e),
                        searchResults: g
                            .articleSelectors
                            .getSearchResults(e),
                        surfaces: Object(o.g)(e)
                    }
                }), q)(J),
                K = a(273),
                Q = a(71),
                Y = a(65),
                X = function () {
                    var e = Object(n.d)(k.getArticleType),
                        t = Object(n.d)(Q.getFavorites),
                        a = Object(n.d)(o.d),
                        i = Object(n.d)(Y.b),
                        c = Object(s.useMemo)((function () {
                            var n = 0,
                                c = 0,
                                l = 0;
                            return a.forEach((function (a) {
                                t[e] && t[e].articles && t[e].articles.length && t[e]
                                    .articles
                                    .find((function (e) {
                                        return e.article_uuid === a.uuid && e.collection_uuid === a.collection_uuid
                                    })) && (n += 1),
                                i.find((function (e) {
                                    return e.uuid === a.uuid
                                })) && (c += 1),
                                a.availability !== p.a.outOfStock && a.availability !== p.a.preorder || (
                                    l += 1
                                )
                            })), {
                                isActiveFavorite: n > 0 && n === a.length,
                                isActiveShoppingCart: c > 0 && c === a.length,
                                isArticleOutOfStock: l > 0
                            }
                        }), [a, e, i, t]);
                    return {isActiveFavorite: c.isActiveFavorite, isActiveShoppingCart: c.isActiveShoppingCart, isArticleOutOfStock: c.isArticleOutOfStock}
                },
                $ = a(270),
                ee = (a(271), a(272)),
                te = Object(G.q)((function (e) {
                    var t = e.isControlsVisible,
                        a = e.orientation,
                        n = e.articlesNavigationView,
                        i = e.currentProductsStep,
                        c = e.activeSurefacesWithProducts,
                        l = e.surfacesWithAppliedCustomProducts,
                        o = e.appliedProducts,
                        r = e.appliedProductsInActive,
                        s = e.activeSurfaces,
                        d = e.resetOverlay,
                        g = e.addFavoritesFromApplied,
                        b = e.deleteFavoriteFromApplied,
                        O = e.addItemsToShoppingCartFromApplied,
                        f = e.deleteShoppingCartItemsFromApplied,
                        h = e.openShare,
                        A = e.onDownloadClick,
                        S = e.getLocalizationProperty,
                        y = Object(ee.a)().isRugType,
                        T = X(),
                        k = E.b.IS_SHOWN_SHOPPING_CART,
                        w = E.b.ENABLE_TWO_WAY_SHOPPING_CART,
                        P = Object(C.useBackButton)(),
                        j = P.isBackButtonAction,
                        I = P.onHandleClickBackButton,
                        N = Object($.a)(),
                        L = N.onClickUp,
                        R = N.onMouseDown,
                        M = N.onTouchStart;
                    return u
                        .a
                        .createElement(
                            u.a.Fragment,
                            null,
                            o.length > 0 && u.a.createElement("div", {
                                className: m()("w-mobile-controls", "controls-element", {
                                    "controls-element--hide": !t
                                })
                            }, u.a.createElement(
                                "div",
                                {
                                    className: "w-mobile-controls w-mobile-controls__left"
                                },
                                u.a.createElement(K.c, null, (r.length > 0 || 0 === s.length || y) && u.a.createElement(K.d, {
                                    icon: u
                                        .a
                                        .createElement(_.V, null),
                                    onClick: d
                                }), !y && u.a.createElement(K.d, {
                                    icon: u
                                        .a
                                        .createElement(_.db, null),
                                    onMouseDown: R,
                                    onMouseUp: L,
                                    onMouseLeave: L,
                                    onTouchStart: M,
                                    onTouchEnd: L
                                })),
                                !y && u.a.createElement(K.c, {
                                    "increasedВadding": !0
                                }, u.a.createElement(K.d, {
                                    icon: u
                                        .a
                                        .createElement(_.Z, null),
                                    onClick: h
                                }), u.a.createElement(K.d, {
                                    icon: u
                                        .a
                                        .createElement(_.r, null),
                                    onClick: A
                                }))
                            )),
                            u.a.createElement("div", {
                                className: m()(
                                    "w-mobile-controls",
                                    "w-mobile-controls__right",
                                    "controls-element",
                                    {
                                        "controls-element--hide": !t
                                    }
                                )
                            }, j && u.a.createElement(K.e, {
                                tooltipTitle: "TOOLTIPS.GALLERY",
                                icon: u
                                    .a
                                    .createElement(_.k, null),
                                onClick: I
                            })),
                            (n === F.a.products || n === F.a.search) && u.a.createElement("div", {
                                className: m()(
                                    "w-mini-controls--mobile__left",
                                    "w-mini-controls--mobile__left--" + a,
                                    "controls-element",
                                    {
                                        "controls-element--hide": !t
                                    }
                                )
                            }, c.length > 0 && 0 === l.length && u.a.createElement(
                                u.a.Fragment,
                                null,
                                k && (!T.isArticleOutOfStock && w || !w) && u.a.createElement(G.c, {
                                    icon: u
                                        .a
                                        .createElement(_.b, null),
                                    deviceType: p.c.MOBILE,
                                    isActive: T.isActiveShoppingCart,
                                    onClick: T.isActiveShoppingCart
                                        ? f
                                        : O
                                }),
                                u.a.createElement(G.c, {
                                    icon: u
                                        .a
                                        .createElement(_.B, null),
                                    deviceType: p.c.MOBILE,
                                    onClick: T.isActiveFavorite
                                        ? b
                                        : g,
                                    isActive: T.isActiveFavorite
                                })
                            )),
                            u.a.createElement(K.a, null),
                            u.a.createElement(
                                "div",
                                {
                                    className: m()(
                                        "w-catalog-controls",
                                        "w-catalog-controls--mobile",
                                        "controls-element",
                                        {
                                            "controls-element--hide": !t
                                        }
                                    )
                                },
                                (i === v.CatalogViewEnum.products && n === F.a.products || n === F.a.search || n === F.a.customProducts) && u.a.createElement(x, {
                                    itemClassName: "controls-element " + (
                                        t
                                            ? ""
                                            : "controls-element--hide"
                                    )
                                })
                            ),
                            u.a.createElement("div", {
                                className: m()("w-buttons-tooltip_wrapper", {
                                    "tooltip-visible": !t
                                })
                            }, u.a.createElement(G.k, {
                                as: "span",
                                className: "w-buttons-tooltip",
                                fontName: "new_body_text"
                            }, S("MESSAGE.MOB_UNHIDE_BUTTONS")))
                        )
                })),
                ae = a(52),
                ne = a(132),
                ie = a(131),
                ce = {
                    resetOverlay: i.resetOverlay,
                    openRoomPicker: r.h,
                    openMyRoomPicker: c.c,
                    addFavoritesFromApplied: l.addFavoritesFromApplied,
                    deleteFavoriteFromApplied: l.deleteFavoriteFromApplied,
                    addItemsToShoppingCartFromApplied: ae.b,
                    deleteShoppingCartItemsFromApplied: ae.g,
                    openShoppingCart: ae.k,
                    openShare: ie.a,
                    onDownloadClick: ne.a
                },
                le = Object(n.b)((function (e) {
                    return {
                        isControlsVisible: e.navigation.isControlsVisible,
                        surfacesWithAppliedCustomProducts: Object(o.h)(e),
                        activeSurefacesWithProducts: Object(o.b)(e),
                        shoppingCartCommonQuantity: Object(Y.c)(e),
                        orientation: Object(T.h)(e),
                        articlesNavigationView: Object(j.getCurrentView)(e),
                        currentProductsStep: Object(v.getCurrentStep)(e),
                        appliedProducts: Object(o.c)(e),
                        appliedProductsInActive: Object(o.d)(e),
                        activeSurfaces: Object(o.a)(e)
                    }
                }), ce)(te),
                oe = (a(281), a(88)),
                re = a(142),
                se = a(279),
                ue = Object(G.q)((function (e) {
                    var t = e.isControlsVisible,
                        a = e.isOpenedFeedback,
                        n = e.numberOfOverlayResult,
                        i = e.interiorType,
                        c = e.shoppingCartCommonQuantity,
                        l = e.articlesNavigationView,
                        o = e.currentProductsStep,
                        r = e.isApplyLoading,
                        s = e.appliedProducts,
                        d = e.surfacesWithAppliedCustomProducts,
                        g = e.appliedProductsInActive,
                        b = e.activeSurfaces,
                        O = e.resetOverlay,
                        f = e.openMyRoomPicker,
                        h = e.addFavoritesFromApplied,
                        A = e.deleteFavoriteFromApplied,
                        S = e.addItemsToShoppingCartFromApplied,
                        y = e.deleteShoppingCartItemsFromApplied,
                        T = e.openShare,
                        k = e.onDownloadClick,
                        w = e.openRoomPicker,
                        P = e.openFeedbackForm,
                        j = e.openShoppingCart,
                        I = e.getLocalizationProperty,
                        N = Object(se.a)().showHistoryButton,
                        L = Object(ee.a)().isRugType,
                        R = X(),
                        M = E.b.IS_SHOWN_SHOPPING_CART,
                        B = E.b.ENABLE_TWO_WAY_SHOPPING_CART,
                        V = n > 5 && !a,
                        D = Object(C.useBackButton)(),
                        U = D.isBackButtonAction,
                        H = D.onHandleClickBackButton,
                        W = Object($.a)(),
                        z = W.onClickUp,
                        J = W.onMouseDown,
                        Z = W.onTouchStart;
                    return u
                        .a
                        .createElement(
                            u.a.Fragment,
                            null,
                            u.a.createElement("div", {
                                className: m()("w-tablet-controls__left", "controls-element", {
                                    "controls-element--hide": !t
                                })
                            }, u.a.createElement(K.c, {
                                "increasedВadding": !0
                            }, u.a.createElement(K.d, {
                                icon: u
                                    .a
                                    .createElement(_.d, null),
                                onClick: w,
                                title: I("TOOLTIPS.INTERIORS_BACK_BUTTON")
                            }))),
                            u.a.createElement(
                                "div",
                                {
                                    className: m()("right_scene_controls", "controls-element", {
                                        "controls-element--hide": !t
                                    })
                                },
                                s.length > 0 && u.a.createElement(
                                    u.a.Fragment,
                                    null,
                                    u.a.createElement(K.c, null, (g.length > 0 || 0 === b.length || L) && u.a.createElement(K.d, {
                                        icon: u
                                            .a
                                            .createElement(_.V, null),
                                        onClick: O
                                    }), !L && u.a.createElement(K.d, {
                                        icon: u
                                            .a
                                            .createElement(_.db, null),
                                        onMouseDown: J,
                                        onMouseUp: z,
                                        onMouseLeave: z,
                                        onTouchStart: Z,
                                        onTouchEnd: z
                                    })),
                                    !L && u.a.createElement(K.c, {
                                        "increasedВadding": !0
                                    }, u.a.createElement(K.d, {
                                        icon: u
                                            .a
                                            .createElement(_.Z, null),
                                        onClick: T,
                                        title: I("TOOLTIPS.SHARE")
                                    }), u.a.createElement(K.d, {
                                        icon: u
                                            .a
                                            .createElement(_.r, null),
                                        onClick: k,
                                        title: I("TOOLTIPS.DOWNLOAD")
                                    }))
                                ),
                                M && u.a.createElement(re.a, {
                                    badgeContent: c
                                }, u.a.createElement(K.e, {
                                    tooltipTitle: "TOOLTIPS.OPEN_SHOPPING_CART",
                                    icon: u
                                        .a
                                        .createElement(_.bb, null),
                                    onClick: j
                                })),
                                s.length > 0 && i === p.g.MyInterior && u.a.createElement(K.e, {
                                    tooltipTitle: "TOOLTIPS.FEEDBACK",
                                    icon: u
                                        .a
                                        .createElement(_.v, null),
                                    onClick: P,
                                    showNotification: V
                                }),
                                u.a.createElement(K.f, null),
                                U && u.a.createElement(K.e, {
                                    tooltipTitle: "TOOLTIPS.BACK_TO_WEBSITE",
                                    icon: u
                                        .a
                                        .createElement(_.k, null),
                                    onClick: H
                                })
                            ),
                            u.a.createElement(
                                "div",
                                {
                                    className: m()(
                                        "w-mini-controls",
                                        "w-mini-controls--tablet",
                                        "controls-element",
                                        {
                                            "controls-element--hide": !t || !N
                                        }
                                    )
                                },
                                s.length > 0 && 0 === d.length && u.a.createElement(u.a.Fragment, null, (l === F.a.products || l === F.a.search) && u.a.createElement(
                                    u.a.Fragment,
                                    null,
                                    M && (!R.isArticleOutOfStock && B || !B) && u.a.createElement(G.c, {
                                        icon: u
                                            .a
                                            .createElement(_.b, null),
                                        deviceType: p.c.TABLET,
                                        onClick: R.isActiveShoppingCart
                                            ? y
                                            : S,
                                        isActive: R.isActiveShoppingCart
                                    }),
                                    u.a.createElement(G.c, {
                                        icon: u
                                            .a
                                            .createElement(_.B, null),
                                        deviceType: p.c.TABLET,
                                        onClick: R.isActiveFavorite
                                            ? A
                                            : h,
                                        isActive: R.isActiveFavorite
                                    })
                                )),
                                N && u.a.createElement(re.a, {
                                    badgeContent: 0
                                }, u.a.createElement(G.c, {
                                    icon: u
                                        .a
                                        .createElement(_.J, null),
                                    deviceType: p.c.TABLET,
                                    onClick: f,
                                    size: "m",
                                    disable: r
                                }))
                            ),
                            u.a.createElement(
                                "div",
                                {
                                    className: m()(
                                        "w-catalog-controls w-catalog-controls--tablet",
                                        "controls-element",
                                        {
                                            "controls-element--hide": !t
                                        }
                                    )
                                },
                                (o === v.CatalogViewEnum.products && l === F.a.products || l === F.a.search || l === F.a.customProducts) && u.a.createElement(x, null),
                                u.a.createElement("div", {
                                    className: m()(
                                        "w-catalog-controls__button w-catalog-controls__button--tablet",
                                        {"w-catalog-controls--disabled": r}
                                    )
                                }, u.a.createElement(K.b, null))
                            ),
                            u.a.createElement("div", {
                                className: m()("w-buttons-tooltip_wrapper", {
                                    "tooltip-visible": !t
                                })
                            }, u.a.createElement(G.k, {
                                as: "span",
                                className: "w-buttons-tooltip",
                                fontName: "new_body_text"
                            }, I("MESSAGE.MOB_UNHIDE_BUTTONS")))
                        )
                })),
                de = {
                    openShare: ie.a,
                    onDownloadClick: ne.a,
                    resetOverlay: i.resetOverlay,
                    openMyRoomPicker: c.c,
                    addFavoritesFromApplied: l.addFavoritesFromApplied,
                    deleteFavoriteFromApplied: l.deleteFavoriteFromApplied,
                    addItemsToShoppingCartFromApplied: ae.b,
                    deleteShoppingCartItemsFromApplied: ae.g,
                    openRoomPicker: r.h,
                    openFeedbackForm: oe.c,
                    openShoppingCart: ae.k
                },
                me = Object(n.b)((function (e) {
                    return {
                        overlayResult: e.rooms.overlayResult,
                        catalogList: Object(v.getProductsForView)(e),
                        isOpenedFeedback: e.feedback.isOpenedFeedback,
                        isControlsVisible: e.navigation.isControlsVisible,
                        numberOfOverlayResult: e.rooms.numberOfOverlayResult,
                        interiorType: Object(D.k)(e),
                        appliedProducts: Object(o.c)(e),
                        shoppingCartCommonQuantity: Object(Y.c)(e),
                        orientation: Object(T.h)(e),
                        articlesNavigationView: Object(j.getCurrentView)(e),
                        currentProductsStep: Object(v.getCurrentStep)(e),
                        isApplyLoading: Object(k.getApplyLoading)(e),
                        surfacesWithAppliedCustomProducts: Object(o.h)(e),
                        appliedProductsInActive: Object(o.d)(e),
                        activeSurfaces: Object(o.a)(e)
                    }
                }), de)(ue)
        },
        393: function (e, t, a) {
            "use strict";
            a.r(t);
            var n = a(8),
                i = a(25),
                c = a(0),
                l = a.n(c),
                o = a(2),
                r = a(299),
                s = a(86),
                u = a(298),
                d = a(293),
                m = a(292),
                p = a(282),
                v = a(297),
                g = l
                    .a
                    .lazy((function () {
                        return a
                            .e(5)
                            .then(a.bind(null, 397))
                    })),
                b = l
                    .a
                    .lazy((function () {
                        return a
                            .e(16)
                            .then(a.bind(null, 398))
                    })),
                E = function (e) {
                    var t = e.view,
                        a = e.onHandleCloseCatalog,
                        n = l
                            .a
                            .useState(!1),
                        i = n[0],
                        c = n[1];
                    return l
                        .a
                        .useEffect((function () {
                            t !== o.k.Main || i || c(!0)
                        }), [t]),
                    l
                        .a
                        .createElement(
                            "div",
                            {
                                className: "w-tablet-layout"
                            },
                            i && l.a.createElement(l.a.Fragment, null, l.a.createElement(v.a, null), l.a.createElement(u.b, null)),
                            l.a.createElement(
                                r.a,
                                {
                                    onHandleClose: a
                                },
                                t === o.k.ArticlePicker && l.a.createElement(p.a, null, l.a.createElement(g, null)),
                                t === o.k.RoomPicker && l.a.createElement(p.a, null, l.a.createElement(m.a, null)),
                                t === o.k.ArticlesInfo && l.a.createElement(p.a, null, l.a.createElement(b, {onClose: a})),
                                t === o.k.Download && l.a.createElement(p.a, null, l.a.createElement(s.c, {onClose: a})),
                                t === o.k.ShoppingCart && l.a.createElement(p.a, null, l.a.createElement(d.a, {onClose: a}))
                            )
                        )
                },
                O = {
                    onHandleCloseCatalog: i.closeArticleCatalog
                };
            t.default = Object(n.b)((function (e) {
                return {view: e.navigation.view}
            }), O)(E)
        }
    }
]);