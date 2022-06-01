! function(t) {
  function e(e) {
    for (var r, i, c = e[0], u = e[1], l = e[2], s = 0, f = []; s < c.length; s++) i = c[s], Object.prototype.hasOwnProperty.call(o, i) && o[i] && f.push(o[i][0]), o[i] = 0;
    for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (t[r] = u[r]);
    for (d && d(e); f.length;) f.shift()();
    return a.push.apply(a, l || []), n()
  }

  function n() {
    for (var t, e = 0; e < a.length; e++) {
      for (var n = a[e], r = !0, i = 1; i < n.length; i++) {
        var u = n[i];
        0 !== o[u] && (r = !1)
      }
      r && (a.splice(e--, 1), t = c(c.s = n[0]))
    }
    return t
  }
  var r = {},
    i = {
      17: 0
    },
    o = {
      17: 0
    },
    a = [];

  function c(e) {
    if (r[e]) return r[e].exports;
    var n = r[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return t[e].call(n.exports, n, n.exports, c), n.l = !0, n.exports
  }
  c.e = function(t) {
    var e = [];
    i[t] ? e.push(i[t]) : 0 !== i[t] && {
      2: 1,
      3: 1,
      5: 1,
      6: 1,
      7: 1,
      8: 1,
      9: 1,
      10: 1,
      12: 1,
      13: 1,
      14: 1,
      16: 1,
      19: 1,
      21: 1,
      22: 1,
      23: 1,
      26: 1,
      27: 1,
      28: 1,
      29: 1,
      39: 1
    } [t] && e.push(i[t] = new Promise((function(e, n) {
      for (var r = ({
          0: "vendors_desktop-controls_mobile-layout_surface-select_tablet-layout",
          1: "vendors_disclaimer_mobile-layout_onboarding_tablet-layout",
          2: "desktop-controls",
          3: "desktop-layout_mobile-layout_tablet-layout",
          4: "vendors_firebase-app_firebase-app-an",
          5: "article-container",
          6: "contact-form",
          7: "cookie-policy",
          8: "custom-products-list",
          9: "desktop-layout",
          10: "disabled-dialog",
          11: "disclaimer",
          12: "download",
          13: "favorites-list",
          14: "filtres-view",
          15: "firebase-app",
          16: "interactive",
          19: "mobile-layout",
          20: "mui-dialog",
          21: "my-room",
          22: "onboarding",
          23: "onboarding-popup",
          25: "resize-image-utils",
          26: "rooms",
          27: "shopping-cart",
          28: "surface-select",
          29: "tablet-layout",
          30: "tooltip",
          32: "vendors_contact-form",
          33: "vendors_download",
          34: "vendors_firebase-app-an",
          35: "vendors_hammer",
          36: "vendors_interactive",
          37: "vendors_resize-image-utils",
          38: "vendors_surface-select",
          39: "w-modal"
        } [t] || t) + ".chunk.min.gzip.css", o = c.p + r, a = document.getElementsByTagName("link"), u = 0; u < a.length; u++) {
        var l = (d = a[u]).getAttribute("data-href") || d.getAttribute("href");
        if ("stylesheet" === d.rel && (l === r || l === o)) return e()
      }
      var s = document.getElementsByTagName("style");
      for (u = 0; u < s.length; u++) {
        var d;
        if ((l = (d = s[u]).getAttribute("data-href")) === r || l === o) return e()
      }
      var f = document.createElement("link");
      f.rel = "stylesheet", f.type = "text/css";
      f.onerror = f.onload = function(r) {
        if (f.onerror = f.onload = null, "load" === r.type) e();
        else {
          var a = r && ("load" === r.type ? "missing" : r.type),
            c = r && r.target && r.target.href || o,
            u = new Error("Loading CSS chunk " + t + " failed.\n(" + c + ")");
          u.code = "CSS_CHUNK_LOAD_FAILED", u.type = a, u.request = c, delete i[t], f.parentNode.removeChild(f), n(u)
        }
      }, f.href = o, document.head.appendChild(f)
    })).then((function() {
      i[t] = 0
    })));
    var n = o[t];
    if (0 !== n)
      if (n) e.push(n[2]);
      else {
        var r = new Promise((function(e, r) {
          n = o[t] = [e, r]
        }));
        e.push(n[2] = r);
        var a, u = document.createElement("script");
        u.charset = "utf-8", u.timeout = 120, c.nc && u.setAttribute("nonce", c.nc), u.src = function(t) {
          return c.p + "" + ({
            0: "vendors_desktop-controls_mobile-layout_surface-select_tablet-layout",
            1: "vendors_disclaimer_mobile-layout_onboarding_tablet-layout",
            2: "desktop-controls",
            3: "desktop-layout_mobile-layout_tablet-layout",
            4: "vendors_firebase-app_firebase-app-an",
            5: "article-container",
            6: "contact-form",
            7: "cookie-policy",
            8: "custom-products-list",
            9: "desktop-layout",
            10: "disabled-dialog",
            11: "disclaimer",
            12: "download",
            13: "favorites-list",
            14: "filtres-view",
            15: "firebase-app",
            16: "interactive",
            19: "mobile-layout",
            20: "mui-dialog",
            21: "my-room",
            22: "onboarding",
            23: "onboarding-popup",
            25: "resize-image-utils",
            26: "rooms",
            27: "shopping-cart",
            28: "surface-select",
            29: "tablet-layout",
            30: "tooltip",
            32: "vendors_contact-form",
            33: "vendors_download",
            34: "vendors_firebase-app-an",
            35: "vendors_hammer",
            36: "vendors_interactive",
            37: "vendors_resize-image-utils",
            38: "vendors_surface-select",
            39: "w-modal"
          } [t] || t) + ".chunk.min.gzip.js"
        }(t);
        var l = new Error;
        a = function(e) {
          u.onerror = u.onload = null, clearTimeout(s);
          var n = o[t];
          if (0 !== n) {
            if (n) {
              var r = e && ("load" === e.type ? "missing" : e.type),
                i = e && e.target && e.target.src;
              l.message = "Loading chunk " + t + " failed.\n(" + r + ": " + i + ")", l.name = "ChunkLoadError", l.type = r, l.request = i, n[1](l)
            }
            o[t] = void 0
          }
        };
        var s = setTimeout((function() {
          a({
            type: "timeout",
            target: u
          })
        }), 12e4);
        u.onerror = u.onload = a, document.head.appendChild(u)
      } return Promise.all(e)
  }, c.m = t, c.c = r, c.d = function(t, e, n) {
    c.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: n
    })
  }, c.r = function(t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, c.t = function(t, e) {
    if (1 & e && (t = c(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var n = Object.create(null);
    if (c.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t)
      for (var r in t) c.d(n, r, function(e) {
        return t[e]
      }.bind(null, r));
    return n
  }, c.n = function(t) {
    var e = t && t.__esModule ? function() {
      return t.default
    } : function() {
      return t
    };
    return c.d(e, "a", e), e
  }, c.o = function(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, c.p = "http://visual.ornato.mk/", c.oe = function(t) {
    throw console.error(t), t
  };
  var u = window.webpackJsonp = window.webpackJsonp || [],
    l = u.push.bind(u);
  u.push = e, u = u.slice();
  for (var s = 0; s < u.length; s++) e(u[s]);
  var d = l;
  a.push([211, 18, 24, 31]), n()
}([, function(t, e, n) {
  "use strict";
  (function(t) {
    n.d(e, "b", (function() {
      return u
    })), n.d(e, "a", (function() {
      return l
    })), n.d(e, "c", (function() {
      return s
    }));
    var r = n(2),
      i = n(5),
      o = n(22),
      a = function() {
        return (a = Object.assign || function(t) {
          for (var e, n = 1, r = arguments.length; n < r; n++)
            for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
          return t
        }).apply(this, arguments)
      },
      c = function(t, e, n) {
        if (n || 2 === arguments.length)
          for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
        return t.concat(r || Array.prototype.slice.call(e))
      },
      u = {
        USER_INDENTIFIER: null,
        DEVICE: null,
        PIM_LOCALE: null,
        ENABLE_TWO_WAY_SHOPPING_CART: null,
        ENABLE_TWO_WAY_FAVORITES: null,
        IS_WIZART_DEMO: null,
        MAIN_PAGE_LINK: null,
        MORE_ITEMS: [],
        START_SESSION_TIME: new Date,
        LOCATION: null,
        MANA: !1,
        LAYOUT_RIGHT_WIDTH: 436,
        ROOM_UUID: null,
        OPEN_FIRST_ROOM: !1,
        WALLS_ENABLED: !1,
        FLOORS_ENABLED: !1,
        IS_OPEN_PHOTO_SELECT_VIEW: !1,
        APPLY_HOST: null,
        SEND_TO_EMAIL: !1,
        DEACTIVATE_CUSTOM_PHOTO: null,
        CATALOG_STRUCTURE: [],
        DISCLAIMER: "",
        ONBOARDING_TITLE: "",
        ONBOARDING_SUBTITLE: "",
        DO_NOT_SHOW_ONBOARDING: !1,
        UNIT: r.j.meters,
        DEVICE_OS: null,
        FULL_SIZE_IMAGE: !1,
        BLOCKED: !1,
        CLIENT_STATUS: null,
        CUSTOM_PRODUCT: null,
        FILTERS: !1,
        CUSTOM_APPLY: null,
        DO_NOT_USE_CASHE: !1,
        IS_NEW_DEVICE: !1,
        START_WITH_PRODUCT: !1,
        COLLECTIONS_AB_VERSION: null,
        AB_TESTING_COLLECTION_ID: null,
        GOOGLE_ANALYTICS_ID: null,
        GOOGLE_OPTIMIZE: null,
        FILTERS_DELAY: 1e3,
        DISABLE_EA: !1,
        IS_RECOMMENDER_PRODUCTS: !1,
        TOKEN_TYPE: null,
        IS_USE_COOKIES: null,
        SID: null,
        SKEY: null
      },
      l = function(t) {
        return Object.keys(t).forEach((function(e) {
          u[e] = t[e]
        })), u
      },
      s = function(e, n, o) {
        var c, s, d, p = "en";
        if (window && window.navigator && window.navigator.language) {
          var _ = window.navigator.language,
            v = _.indexOf("-"),
            b = _.slice(0, v);
          if ("ar" !== b) {
            var O = _.slice(v + 1).toLowerCase();
            p = -1 === v ? _ : b === O ? b : b + "-" + O.toLocaleUpperCase()
          } else p = b
        }
        var E, m = e.menu_items && Object(i.p)(e.menu_items) && (null === (s = null === (c = JSON.parse(e.menu_items)) || void 0 === c ? void 0 : c.settings) || void 0 === s ? void 0 : s.items) || [],
          y = !0;
        e.is_enabled_privacy_policy_link && (y = !!+e.is_enabled_privacy_policy_link), e.main_color && Object(i.o)(e.main_color), e.font_family && (E = Object(i.f)(e.font_family));
        var g = "1" === e.use_3D,
          T = function(t) {
            if (!t) return null;
            try {
              var e = JSON.parse(t);
              return Object.keys(e).length < 1 ? null : a(a({}, e), {
                surface: (null == e ? void 0 : e.surface) || []
              })
            } catch (t) {
              return null
            }
          }(e.custom_apply);
        return l(a(a({}, u), {
          // INTERIORS_HOST: "https://rni.wizart.ai",
          // APPLY_HOST: g ? "https://rni.wizart.ai/apply/3d" : "https://rni.wizart.ai/apply",
          // PIM_HOST: "https://visual.ornato.mk",
          // STATIC_HOST: "http://visual.ornato.mk/images",
          // ANALYTICS_HOST: "https://aw.wizart.ai",

          INTERIORS_HOST: "http://visual.ornato.mk/",
          APPLY_HOST: "http://visual.ornato.mk/3d",
          PIM_HOST: "http://visual.ornato.mk",
          STATIC_HOST: "http://visual.ornato.mk/images",
          ANALYTICS_HOST: "http://visual.ornato.mk",

          CLIENT_IDENTIFIER: e.client_identifier,
          TOKEN: e.token,
          APP_VERSION: "WEB-2.0 release date 18.05.2022",
          LOCALE: e.locale || p,
          PIM_LOCALE: e.locale || null,
          MAX_IMAGE_SIZE: 1600,
          LOGO_PATH: e.logo_path || null,
          USER_INDENTIFIER: e.user_id || Object(i.d)(e.token).deviceID,
          MORE_ITEMS: m,
          ABOUT_APP_LINK: "https://wizart.ai",
          DO_NOT_SHOW_INFO_ABOUT_APP: !!+e.do_not_show_info_about_app || !1,
          TWITTER_MENTION: e.twitter_mention || "",
          FACEBOOK_APP_ID: e.facebook_app_id || "647396146080915",
          ORIGINAL_URL: e.original_url || "https://wizart.ai",
          DEVICE: n,
          CONTACT_FORM_DELAY_MS: +t.env.CONTACT_FORM_DELAY_MS || 9e4,
          IS_SHOWN_CONTACT_FORM: "true" === (t.env.IS_SHOWN_CONTACT_FORM || "").toLowerCase() || "1" === e.is_wizart_demo,
          BACK_BUTTON_BACKGROUND: e.back_button_background || "",
          BACK_BUTTON_ICON_COLOR: e.back_button_icon_color || "",
          PREVIEW_ROOM_WIDTH: 75,
          CONTEXT: e.context || "",
          IS_SHOWN_SHOPPING_CART: !!+e.enabled_shopping_cart || !1,
          IS_SHOWN_SHOPPING_CART_PRICES: !!+e.is_shown_shopping_cart_prices || !1,
          SHOPPING_CART_BUTTON_NAME: ("Go to shop" === e.shopping_cart_button_name ? null : e.shopping_cart_button_name) || null,
          SHOPPING_CART_LINK: e.custom_shopping_cart_link || e.shopping_cart_link || "",
          ENABLE_TWO_WAY_FAVORITES: !!+e.enable_two_way_favorites || !1,
          ENABLE_TWO_WAY_SHOPPING_CART: !!+e.enable_two_way_shopping_cart || !1,
          PRIVACY_POLICY_LINK: e.privacy_policy_link || "",
          IS_ENABLED_PRIVACY_POLICY_LINK: y,
          COOKIE_POLICY_LINK: e.cookie_policy_link || "",
          IS_WIZART_DEMO: "true" === (t.env.IS_WIZART_DEMO || "").toLowerCase() || "1" === e.is_wizart_demo,
          GALLERY_VIEW_TITLE: e.gallery_view_title || "",
          MAIN_COLOR: !!e.main_color || !1,
          FONT_FAMILY_LINK: E || "",
          MAIN_PAGE_LINK: e.main_page_link || "",
          WALLS_ENABLED: "1" === e.walls_enabled,
          FLOORS_ENABLED: "1" === e.floors_enabled,
          MANA: "1" === e.mana,
          ROOM_UUID: e.room_uuid || null,
          OPEN_FIRST_ROOM: "1" === e.open_first_room,
          SEND_TO_EMAIL: "1" === e.send_to_email,
          DEACTIVATE_CUSTOM_PHOTO: "1" === e.deactivate_custom_photo,
          CATALOG_STRUCTURE: f(e.catalog_structure),
          DISCLAIMER: e.disclaimer || "",
          ONBOARDING_TITLE: e.onboarding_title || "",
          ONBOARDING_SUBTITLE: e.onboarding_subtitle || "",
          DO_NOT_SHOW_ONBOARDING: !0,
          UNIT: e.unit === r.j.inches ? r.j.inches : r.j.meters,
          DEVICE_OS: (null === (d = null == n ? void 0 : n.os) || void 0 === d ? void 0 : d.name) || null,
          FULL_SIZE_IMAGE: "1" === e.is_full_size_image,
          BLOCKED: "disabled" === e.client_state,
          CLIENT_STATUS: e.client_status || null,
          CUSTOM_PRODUCT: T,
          FILTERS: "1" === e.is_enabled_filters,
          CUSTOM_APPLY: "https://rni.wizart.ai/apply",
          DO_NOT_USE_CASHE: "0" === e.use_cache || !1,
          IS_NEW_DEVICE: o,
          START_WITH_PRODUCT: T ? null : Object(i.c)(e.article_query),
          AB_TESTING_COLLECTION_ID: "MX9k5h1mRHKrSJk8UP1pGg",
          GOOGLE_ANALYTICS_ID: "UA-121898981-11",
          GOOGLE_OPTIMIZE: "OPT-MP2MT3L",
          FILTERS_DELAY: +t.env.FILTERS_DELAY || 1e3,
          SKEY: "sqMe1Tm7ST13kNT2",
          DISABLE_EA: "1" === e.disable_ea,
          IS_RECOMMENDER_PRODUCTS: "1" === e.is_recommender_products,
          TOKEN_TYPE: e.token_type,
          IS_USE_COOKIES: "1" === e.is_use_cookies,
          SID: Object(i.m)()
        }))
      },
      d = [o.CatalogViewEnum.brands, o.CatalogViewEnum.collections, o.CatalogViewEnum.products],
      f = function(t) {
        var e, n, r = Object(i.q)(t);
        if (!r || !(null == r ? void 0 : r.is_turned_on) || 0 === (null === (n = null === (e = null == r ? void 0 : r.settings) || void 0 === e ? void 0 : e.items) || void 0 === n ? void 0 : n.length)) return d;
        var o = (null == r ? void 0 : r.settings).items.sort((function(t, e) {
          return t.position - e.position
        })).reduce((function(t, e) {
          return e.active ? c(c([], t, !0), [e.name], !1) : t
        }), []);
        return o.length > 0 ? o : d
      }
  }).call(this, n(195))
}, function(t, e, n) {
  "use strict";
  var r, i, o, a, c, u, l, s, d, f, p, _, v;
  n.d(e, "f", (function() {
      return r
    })), n.d(e, "i", (function() {
      return i
    })), n.d(e, "j", (function() {
      return o
    })), n.d(e, "d", (function() {
      return a
    })), n.d(e, "e", (function() {
      return c
    })), n.d(e, "k", (function() {
      return u
    })), n.d(e, "b", (function() {
      return s
    })), n.d(e, "a", (function() {
      return d
    })), n.d(e, "c", (function() {
      return f
    })), n.d(e, "g", (function() {
      return p
    })), n.d(e, "h", (function() {
      return _
    })),
    function(t) {
      t.Landscape = "landscape", t.Portrait = "portrait"
    }(r || (r = {})),
    function(t) {
      t.FLOORS_ENABLED = "FLOORS_ENABLED", t.WALLS_ENABLED = "WALLS_ENABLED"
    }(i || (i = {})),
    function(t) {
      t.meters = "meters", t.inches = "inches"
    }(o || (o = {})),
    function(t) {
      t.large = "large", t.medium = "medium", t.thumbnail = "thumbnail", t.small = "small"
    }(a || (a = {})),
    function(t) {
      t.product = "product", t.interior = "interior"
    }(c || (c = {})),
    function(t) {
      t.Main = "Main", t.ArticlesInfo = "ArticlesInfo", t.Download = "Download", t.ArticlePicker = "ArticlePicker", t.RoomPicker = "RoomPicker", t.ShoppingCart = "ShoppingCart"
    }(u || (u = {})),
    function(t) {
      t[t.MyInteriors = 1] = "MyInteriors"
    }(l || (l = {})),
    function(t) {
      t.wall = "wall", t.floor = "floor"
    }(s || (s = {})),
    function(t) {
      t.inStock = "in_stock", t.outOfStock = "out_of_stock", t.preorder = "preorder"
    }(d || (d = {})),
    function(t) {
      t.MOBILE = "mobile", t.TABLET = "tablet", t.SMART_TV = "smarttv", t.CONSOLE = "console", t.WEARABLE = "wearable", t.DESKTOP = "desktop"
    }(f || (f = {})),
    function(t) {
      t[t.MyInterior = 1] = "MyInterior"
    }(p || (p = {})),
    function(t) {
      t[t.SERVER_ERROR = 500] = "SERVER_ERROR", t[t.BAD_REQUEST = 400] = "BAD_REQUEST", t[t.UNAUTHORIZAED = 401] = "UNAUTHORIZAED", t[t.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", t[t.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS"
    }(_ || (_ = {})),
    function(t) {
      t.Edge = "Edge"
    }(v || (v = {}))
}, function(t, e, n) {
  "use strict";
  n.d(e, "b", (function() {
    return u
  })), n.d(e, "n", (function() {
    return s
  })), n.d(e, "a", (function() {
    return d
  })), n.d(e, "p", (function() {
    return f
  })), n.d(e, "c", (function() {
    return p
  })), n.d(e, "l", (function() {
    return _.a
  })), n.d(e, "m", (function() {
    return r
  })), n.d(e, "q", (function() {
    return v.a
  })), n.d(e, "h", (function() {
    return y
  })), n.d(e, "k", (function() {
    return g.a
  })), n.d(e, "d", (function() {
    return h
  })), n.d(e, "j", (function() {
    return S.a
  })), n.d(e, "f", (function() {
    return A
  })), n.d(e, "i", (function() {
    return C
  })), n.d(e, "g", (function() {
    return R
  })), n.d(e, "e", (function() {
    return j
  })), n.d(e, "o", (function() {
    return L
  }));
  var r, i = n(0),
    o = n.n(i),
    a = n(17),
    c = n.n(a),
    u = function(t) {
      var e = t.children,
        n = t.deviceType,
        r = t.justifyContent,
        i = void 0 === r ? "flex-end" : r;
      return o.a.createElement("div", {
        className: c()("button-group", "button-group--" + n),
        style: {
          justifyContent: i
        }
      }, e)
    },
    l = n(38),
    s = (n(122), function(t) {
      var e, n, r, i = t.view,
        a = t.children,
        u = t.deviceType,
        s = t.type,
        d = void 0 === s ? "button" : s,
        f = t.disabled,
        p = void 0 !== f && f,
        _ = t.width,
        v = void 0 === _ ? "default" : _,
        b = t.textTransform,
        O = void 0 === b ? "none" : b,
        E = t.size,
        m = void 0 === E ? l.a.M : E,
        y = t.className,
        g = void 0 === y ? "" : y,
        T = t.fontWeight,
        h = void 0 === T ? "bold" : T,
        S = t.onClick;
      return o.a.createElement("button", {
        type: d,
        className: c()("common-button", "common-button--" + m, "common-button--" + v, {
          "common-button--disabled": p
        }, (e = {}, e["common-button--" + i] = !!i, e), (n = {}, n["common-button--" + u] = !!u, n), (r = {}, r["" + g] = !!g, r)),
        onClick: function() {
          S && !p && S()
        },
        style: {
          textTransform: O,
          fontWeight: h
        }
      }, a)
    }),
    d = function(t) {
      var e, n, r = t.view,
        i = t.children,
        a = t.type,
        u = void 0 === a ? "button" : a,
        s = t.disabled,
        d = void 0 !== s && s,
        f = t.width,
        p = void 0 === f ? "default" : f,
        _ = t.size,
        v = void 0 === _ ? l.a.M : _,
        b = t.className,
        O = void 0 === b ? "" : b,
        E = t.onClick;
      return o.a.createElement("button", {
        type: u,
        className: c()("button", "button--" + v, "button--" + p, {
          "button--disabled": d
        }, (e = {}, e["button--" + r] = !!r, e), (n = {}, n["" + O] = !!O, n)),
        onClick: function() {
          E && !d && E()
        }
      }, i)
    },
    f = function(t) {
      var e = t.size,
        n = void 0 === e ? l.a.M : e,
        r = t.textAlign,
        i = void 0 === r ? "center" : r,
        a = t.display,
        u = void 0 === a ? "initial" : a,
        s = t.children;
      return o.a.createElement("span", {
        className: c()("title", "title--" + n),
        style: {
          textAlign: i,
          display: u
        }
      }, s)
    },
    p = function(t) {
      var e, n = t.icon,
        i = t.title,
        a = t.deviceType,
        u = t.titlePlacement,
        l = void 0 === u ? r.top : u,
        s = t.isActive,
        d = t.size,
        f = void 0 === d ? "s" : d,
        p = t.disable,
        v = t.onClick,
        b = [n && o.a.createElement("span", {
          key: "content",
          className: c()("control-button__content")
        }, n && o.a.createElement("span", {
          key: "icon",
          className: c()("control-button__icon flex-center", {
            "control-button__icon--active": s
          })
        }, n))],
        O = o.a.createElement("div", {
          className: c()("control-button", "flex-center", (e = {}, e["control-button--" + a] = !!a, e), "control-button--" + f, {
            "control-button--disabled": p
          }),
          onClick: function(t) {
            v && v(t)
          }
        }, b);
      return i ? o.a.createElement(_.a, {
        title: i,
        placement: l
      }, O) : O
    },
    _ = n(83);
  ! function(t) {
    t.bottom = "bottom", t.left = "left", t.right = "right", t.top = "top"
  }(r || (r = {}));
  var v = n(81),
    b = n(117),
    O = n(54),
    E = function() {
      return (E = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    };
  window.w_icons = [];
  var m = function(t) {
      return window.w_icons.find((function(e) {
        return e.src === t
      }))
    },
    y = function(t) {
      var e = o.a.useState({
          svg: null,
          loading: !0
        }),
        n = e[0],
        r = e[1];
      return o.a.useEffect((function() {
        var e = m(t.src);
        e && e.text ? r({
          svg: e.text,
          loading: !1
        }) : fetch(t.src).then((function(t) {
          return t.text()
        })).then((function(e) {
          r({
            svg: e,
            loading: !1
          }), e && !m(t.src) && window.w_icons.push({
            src: t.src,
            text: e
          })
        })).catch((function(e) {
          Object(O.a)({
            error: e,
            url: t.src
          }), r({
            svg: null,
            loading: !1
          })
        }))
      }), []), o.a.createElement(o.a.Fragment, null, n.loading ? null : o.a.createElement(o.a.Fragment, null, n.svg ? Object(b.b)(n.svg, {
        replace: function(e) {
          var n = null == e ? void 0 : e.name,
            r = null == e ? void 0 : e.children;
          if (n && "svg" === n && r) {
            var i = Object(b.a)(e.attribs);
            return o.a.createElement("svg", E({}, i || {}, null == t ? void 0 : t.attributes), Object(b.c)(r))
          }
        }
      }) : null))
    },
    g = n(147),
    T = n(251),
    h = function(t) {
      var e = t.isOpen,
        n = t.anchor,
        r = void 0 === n ? "bottom" : n,
        i = t.variant,
        a = void 0 === i ? "permanent" : i,
        c = t.zIndex,
        u = void 0 === c ? 1300 : c,
        l = t.onClose,
        s = t.children;
      return o.a.createElement(T.a, {
        anchor: r,
        elevation: 0,
        variant: a,
        open: e,
        onClose: function() {
          l && l()
        },
        style: {
          zIndex: u
        }
      }, s)
    },
    S = n(129),
    A = function(t) {
      var e, n = t.className,
        r = void 0 === n ? "" : n,
        i = t.children;
      return o.a.createElement("div", {
        className: c()("w-list", (e = {}, e["" + r] = !!r, e))
      }, i)
    },
    I = n(20),
    C = function(t) {
      var e = t.text,
        n = t.active,
        r = t.onclick;
      return o.a.createElement("div", {
        className: c()("shopping-cart-button", {
          "shopping-cart-button--active": n
        }),
        onClick: r
      }, o.a.createElement(g.a, {
        fontName: "new_button",
        as: "div",
        className: "bold shopping-cart-button__title"
      }, e), o.a.createElement(I.bb, null))
    },
    R = function(t) {
      var e = t.onclick;
      return o.a.createElement("div", {
        className: "product-link-button",
        onClick: e
      }, o.a.createElement(I.S, null))
    },
    j = function(t) {
      var e = t.onClick,
        n = t.isActive;
      return o.a.createElement("div", {
        onClick: e,
        className: c()("w-catalog-image__favorite", {
          "w-catalog-image__favorite--is-active": n
        })
      }, o.a.createElement(_.a, {
        title: n ? "TOOLTIPS.REMOVE_FROM_FAVORITES" : "FAVORITES.ADD",
        placement: "top",
        className: "w-catalog-image__favorite-tooltip"
      }, o.a.createElement(I.u, {
        attributes: {
          className: "w-catalog-image__favorite-icon"
        }
      })))
    },
    L = Object(i.lazy)((function() {
      return n.e(39).then(n.bind(null, 394))
    }))
}, , function(t, e, n) {
  "use strict";
  n.d(e, "m", (function() {
    return s
  })), n.d(e, "d", (function() {
    return f
  })), n.d(e, "r", (function() {
    return _
  })), n.d(e, "e", (function() {
    return v
  })), n.d(e, "n", (function() {
    return O
  })), n.d(e, "g", (function() {
    return E
  })), n.d(e, "k", (function() {
    return m
  })), n.d(e, "l", (function() {
    return y
  })), n.d(e, "b", (function() {
    return T
  })), n.d(e, "a", (function() {
    return h
  })), n.d(e, "p", (function() {
    return S
  })), n.d(e, "q", (function() {
    return A
  })), n.d(e, "o", (function() {
    return I
  })), n.d(e, "f", (function() {
    return C
  })), n.d(e, "h", (function() {
    return R
  })), n.d(e, "c", (function() {
    return j
  })), n.d(e, "s", (function() {
    return L
  })), n.d(e, "i", (function() {
    return w
  })), n.d(e, "j", (function() {
    return P
  }));
  var r = n(1),
    i = n(22),
    o = n(2),
    a = n(27),
    c = n(63),
    u = function() {
      return (u = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    l = function(t, e, n) {
      if (n || 2 === arguments.length)
        for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
      return t.concat(r || Array.prototype.slice.call(e))
    },
    s = function() {
      function t() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
      }
      return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
    },
    d = function(t) {
      for (var e = "", n = [], r = [], i = (null == t ? void 0 : t.length) || 0, o = 0; o < i; o += 1) {
        var a = Math.round(122 * t.charCodeAt(0)) + 68;
        n[o] = t.charCodeAt(o) + a, r[o] = a
      }
      for (o = 0; o < i; o += 1) e += String.fromCharCode(n[o], r[o]);
      return e
    },
    f = function(t) {
      var e, n = d(t),
        r = Object(c.a)("wizart_device_id_cus")[n],
        i = !1;
      return r || ((null === (e = window.document) || void 0 === e ? void 0 : e.hasStorageAccess) ? ((r = Object(a.a)("w_guid_" + Object(a.b)(t))) && void 0 !== r && "undefined" !== r ? _(function(t) {
        var e = u({}, p);
        e.acceptedCookies = "1" === Object(a.a)("w_acceptedCookies_" + Object(a.b)(t)), e.disclaimer = "1" === Object(a.a)("w_disclaimer_" + Object(a.b)(t)), e.contactForm = "1" === Object(a.a)("w_contactForm_" + Object(a.b)(t)), e.onboarding = "1" === Object(a.a)("w_onboarding_" + Object(a.b)(t)), e.isCatalogOpen = "1" === Object(a.a)("w_isCatalogOpen_" + Object(a.b)(t)), e.participatesInCollectionsAB = "1" === Object(a.a)("w_participatesInCollectionsAB" + Object(a.b)(t));
        var n = Object(a.a)("w_shoppingCartWithCollections_" + Object(a.b)(t)),
          r = Object(a.a)("w_favoritesWithCollections_" + Object(a.b)(t));
        return n && (e.shoppingCartWithCollections = JSON.parse(n)), r && (e.favoritesWithCollections = JSON.parse(r)), e
      }(t), t) : (r = s(), i = !0), b(n, r)) : (r = s(), i = !0, b(n, r))), {
        deviceID: r,
        isNewDevice: i
      }
    },
    p = {
      onboarding: !1,
      contactForm: !1,
      disclaimer: !1,
      isCatalogOpen: !1,
      acceptedCookies: !1,
      shoppingCartWithCollections: [],
      favoritesWithCollections: {
        wall: [],
        floor: []
      },
      customApplies: [],
      participatesInCollectionsAB: !1
    },
    _ = function(t, e) {
      var n = d(e || r.b.TOKEN),
        i = Object(c.a)("wizart_device_settings"),
        o = u({}, i);
      o[n] = t, Object(c.c)("wizart_device_settings", o)
    },
    v = function() {
      var t = d(r.b.TOKEN),
        e = Object(c.a)("wizart_device_settings")[t];
      return e || _(e = p), e.shoppingCartWithCollections || (e.shoppingCartWithCollections = [], _(e)), e.favoritesWithCollections || (e.favoritesWithCollections = {
        wall: [],
        floor: []
      }, _(e)), e
    },
    b = function(t, e) {
      var n = Object(c.a)("wizart_device_id_cus"),
        r = u({}, n);
      r[t] = e, Object(c.c)("wizart_device_id_cus", r)
    },
    O = function(t, e) {
      void 0 === e && (e = "");
      var n = !1;
      e ? n = function() {
        try {
          if (window && window.localStorage) return window.localStorage.getItem("wizart_cust_device_id")
        } catch (t) {
          return null
        }
        return null
      }() === e : n = f(t).isNewDevice;
      return n
    },
    E = function(t) {
      return (r.b.STATIC_HOST + "/" + t.shortPath + "?resize=" + t.size + (t.type ? "&type=" + t.type : "") + (t.fullSizeImage ? "&preserve_shape=true" : "") + (t.productTypeCode ? "&product_type_code=" + t.productTypeCode : "") + (t.dl ? "&dl" : "")).replace(/ /gi, "%20").replace("'", "%27").replace("(", "%28").replace(")", "%29")
    },
    m = function() {
      var t = o.f.Landscape;
      window.screen && window.screen.orientation ? window.screen.orientation.type.includes("portrait") && (t = o.f.Portrait) : window.matchMedia("(orientation: portrait)").matches && (t = o.f.Portrait);
      return t
    },
    y = function() {
      var t, e = (new Date).getTimezoneOffset();
      if (e < 0) {
        var n = -e % 60 < 10 ? "0" : "";
        t = "GMT+" + Math.ceil(e / -60) + ":" + (n + -e % 60)
      } else {
        n = e % 60 < 10 ? "0" : "";
        t = "GMT-" + Math.floor(e / 60) + ":" + (n + e % 60)
      }
      return t
    },
    g = function(t, e) {
      return t.find((function(t) {
        return t.uuid === e
      }))
    },
    T = function(t, e) {
      var n = l([], t, !0);
      return Object.keys(e).forEach((function(t) {
        n = n.map((function(n) {
          var r = u({}, n);
          switch (t) {
            case "country":
              r.brand.country = g(e.country, (n.brand || {}).country_uuid);
              break;
            case "color":
              r.main_color = g(e.color, n.main_color_uuid);
              break;
            default:
              r[t] = g(e[t], n[t + "_uuid"])
          }
          return r
        }))
      })), n
    },
    h = function(t) {
      var e, n;
      return {
        uuid: t.uuid,
        application_type: t.application_type,
        vendor_code: t.vendor_code,
        name: t.name,
        collection_uuid: t.collection.uuid,
        brand_uuid: t.brand.uuid,
        image_path: t.image_path,
        preview_image_path: t.image_path,
        links_by_context: t.links_by_context,
        link: t.link,
        regular_price: t.regular_price,
        promotional_price: t.promotional_price,
        context: t.context,
        brand: {
          name: t.brand.name,
          uuid: t.brand.uuid
        },
        collection: {
          name: t.collection.name,
          uuid: t.collection.uuid
        },
        laying_patterns: (null == t ? void 0 : t.laying_patterns) || [],
        scene_data: null == t ? void 0 : t.scene_data,
        default_laying_pattern: null == t ? void 0 : t.default_laying_pattern,
        product_type: {
          uuid: null === (e = null == t ? void 0 : t.product_type) || void 0 === e ? void 0 : e.uuid,
          code: null === (n = null == t ? void 0 : t.product_type) || void 0 === n ? void 0 : n.code
        },
        mana: t.mana,
        sku: t.sku
      }
    },
    S = function(t) {
      try {
        JSON.parse(t)
      } catch (t) {
        return !1
      }
      return !0
    },
    A = function(t) {
      try {
        return JSON.parse(t)
      } catch (t) {
        return null
      }
      return null
    },
    I = function(t) {
      if (t) {
        3 === (t = t.slice(1)).length && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
        var e = parseInt(t, 16),
          n = {
            r: e >> 16 & 255,
            g: e >> 8 & 255,
            b: 255 & e
          },
          r = document.documentElement;
        r.style.setProperty("--wizart-brand-color", "rgba(" + n.r + "," + n.g + "," + n.b + ", 1)"), r.style.setProperty("--wizart-brand-color_006", "rgba(" + n.r + "," + n.g + "," + n.b + ", 0.06)"), r.style.setProperty("--wizart-brand-color_15", "rgba(" + n.r + "," + n.g + "," + n.b + ", 0.15)"), r.style.setProperty("--wizart-brand-color_30", "rgba(" + n.r + "," + n.g + "," + n.b + ", 0.3)"), r.style.setProperty("--wizart-brand-color_50", "rgba(" + n.r + "," + n.g + "," + n.b + ", 0.5)"), r.style.setProperty("--wizart-brand-color_60", "rgba(" + n.r + "," + n.g + "," + n.b + ", 0.6)")
      }
    },
    C = function(t) {
      if (t) {
        var e = [{
          font_family: "San Francisco, Ubuntu, Arial, sans-serif",
          link: null,
          name: "default"
        }, {
          font_family: "Helvetica, Arial, Nimbus Sans L, sans-serif",
          link: null,
          name: "Helvetica, Arial, sans-serif"
        }, {
          font_family: "'Montserrat', sans-serif",
          link: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap",
          name: "Montserrat, sans-serif"
        }, {
          font_family: "Roboto, sans-serif",
          link: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;800;900&display=swap",
          name: "Roboto, sans-serif"
        }, {
          font_family: "Roboto, sans-serif",
          link: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;800;900&display=swap",
          name: "Roboto, sans-serif"
        }, {
          font_family: "'Lato', sans-serif",
          name: "Lato, sans-serif",
          link: "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700;800;900&display=swap"
        }].find((function(e) {
          return e.name === t
        }));
        if (e) return document.documentElement.style.setProperty("--wizart-font-family", e.font_family), e.link
      }
    },
    R = function(t, e, n) {
      return t ? n.split(".").reduce((function(t, e) {
        return (t || {})[e]
      }), e) || n : ""
    },
    j = function(t) {
      void 0 === t && (t = "");
      if (!t.length) return !1;
      if (S(t) && Object.keys(JSON.parse(t)).length > 0) {
        var e = JSON.parse(t);
        return !!Object.keys(e).reduce((function(t, n) {
          return e[n].length > 0 ? t + 1 : t
        }), 0)
      }
    },
    L = function(t, e) {
      return r.b.FULL_SIZE_IMAGE && t === i.CatalogViewEnum.products || r.b.FULL_SIZE_IMAGE && (null == e ? void 0 : e.is_default_cover) && t !== i.CatalogViewEnum.products
    },
    w = function(t) {
      return r.b.PIM_LOCALE ? t + "locale=" + r.b.PIM_LOCALE : ""
    },
    P = function(t) {
      return t.reduce((function(t, e) {
        return t.includes(e.product_type.code) || t.push(e.product_type.code), t
      }), [])
    }
}, function(t, e, n) {
  "use strict";
  n.d(e, "c", (function() {
    return u
  })), n.d(e, "a", (function() {
    return c.b
  })), n.d(e, "b", (function() {
    return c.c
  }));
  var r = n(1),
    i = n(48),
    o = n(5),
    a = function() {
      return (a = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    c = n(23),
    u = n(11),
    l = function() {
      return (l = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    s = {
      apiKey: "AIzaSyDjLo50uC8OpdgIvwcDjvacLudvkeNs7cU",
      authDomain: "wizart-web.firebaseapp.com",
      databaseURL: "https://wizart-web.firebaseio.com",
      projectId: "wizart-web",
      storageBucket: "wizart-web.appspot.com",
      messagingSenderId: "474302746497",
      appId: "1:474302746497:web:99a7f8063d5fe63d92a280",
      measurementId: "G-HSF38XVDEV"
    },
    d = function(t, e) {
      try {
        window && window.parent && window.parent.postMessage && window.parent.postMessage({
          eventName: "wizart_analytics",
          analyticsEventName: t,
          payload: e
        }, "*")
      } catch (t) {
        console.log(t)
      }
    };
  e.d = {
    init: function() {
      var t = {
        client_identifier: r.b.CLIENT_IDENTIFIER,
        app_version: r.b.APP_VERSION,
        language: r.b.LOCALE,
        device: Object(i.e)(r.b.DEVICE)
      };
      r.b.DISABLE_EA || Promise.all([Promise.all([n.e(4), n.e(15)]).then(n.t.bind(null, 372, 7)), Promise.all([n.e(4), n.e(34)]).then(n.bind(null, 386))]).then((function(e) {
        var n = e[0],
          i = n.analytics,
          o = n.initializeApp;
        try {
          i.isSupported().then((function(e) {
            e && (o(s), i(), i().setUserId(r.b.USER_INDENTIFIER), i().setUserProperties(t), window.firebase_initialized = !0)
          }))
        } catch (t) {
          console.log(t)
        }
      })), d("user_init", l({
        user_identifier: r.b.USER_INDENTIFIER
      }, t))
    },
    sendLogEvent: function(t, e) {
      void 0 === e && (e = {});
      var c, u, s, f, p, _, v, b, O, E, m, y = l(l({}, e), e.additional_data ? e.additional_data.eventValue : {});
      delete y.additional_data, r.b.DISABLE_EA || Promise.all([Promise.all([n.e(4), n.e(15)]).then(n.t.bind(null, 372, 7)), Promise.all([n.e(4), n.e(34)]).then(n.bind(null, 386))]).then((function(e) {
        var n = e[0].analytics;
        try {
          n.isSupported().then((function(e) {
            e && window.firebase_initialized && n().logEvent(t, y)
          }))
        } catch (t) {
          console.log(t)
        }
      })), c = l({
        name: t
      }, e), s = r.b.DEVICE, f = Object(o.l)(), p = Math.floor(Date.now() / 1e3), _ = r.b.USER_INDENTIFIER, v = Object(i.e)(s), b = (s.os.name + " " + s.os.version).trim(), O = a(a({}, c), {
        source: "web",
        app_version: r.b.APP_VERSION,
        user_identifier: _,
        os_version: b || navigator.oscpu || navigator.platform,
        device_model: v || navigator.userAgent,
        timezone: f,
        time: "" + p,
        language: r.b.LOCALE,
        create_photo_times: Object(i.b)(),
        additional_data: a(a({}, (null == c ? void 0 : c.additional_data) || {}), {
          eventValue: a({
            SID: r.b.SID
          }, (null === (u = null == c ? void 0 : c.additional_data) || void 0 === u ? void 0 : u.eventValue) || {})
        })
      }), E = r.b.ANALYTICS_HOST + "/api/events", m = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
          Authorization: r.b.TOKEN
        },
        body: JSON.stringify(O),
        keepalive: !0
      }, fetch(E, m), d(t, y)
    }
  }
}, , , function(t, e, n) {
  "use strict";
  var r, i;
  n.d(e, "a", (function() {
      return r
    })), n.d(e, "b", (function() {
      return i
    })),
    function(t) {
      t.search = "search", t.favorites = "favorites", t.products = "products", t.customProducts = "customProducts", t.filters = "filters"
    }(r || (r = {})),
    function(t) {
      t.wall = "wall", t.floor = "floor", t.all = "all"
    }(i || (i = {}))
}, function(t, e, n) {
  "use strict";
  var r;
  n.r(e), n.d(e, "ArticlesActionTypes", (function() {
      return r
    })),
    function(t) {
      t.SET_ARTICLE_VIEW = "[ARTICLES] SET_ARTICLE_VIEW", t.SET_CATALOG_FIRST_VIEW = "[ARTICLES] SET_CATALOG_FIRST_VIEW", t.SET_PREVIOUS_ARTICLE_VIEW = "[ARTICLES] SET_PREVIOUS_ARTICLE_VIEW", t.SET_ARTICLE_NAVIGATION = "[ARTICLES_NAVIGATION] SET_ARTICLE_NAVIGATION", t.SET_FIRST_VIEW = "[ARTICLES] SET_FIRST_VIEW", t.LOAD_ARTICLES_SUCCESS = "[ARTICLES] LOAD_ARTICLES_SUCCESS", t.SWITCH_ARTICLE_TYPE = "[ARTICLES] SWITCH_ARTICLE_TYPE", t.SET_FILTER_NAME = "[ARTICLES] SET_FILTER_NAME", t.SET_FILTER_LIST = "[FILTERS] SET_FILTER_LIST", t.RESET_SELECTED_FILTERS = "[FILTERS] RESET_SELECTED_FILTERS", t.CHANGE_SELECTED_FILTERS = "[FILTERS] CHANGE_SELECTED_FILTERS", t.SET_FILTERS_LOADING = "[FILTERS] SET_FILTERS_LOADING", t.SWITCH_ARTICLE_LOADING_STATE = "[ARTICLES] SWITCH_ARTICLE_LOADING_STATE", t.LOAD_INIT_ARTICLE = "[ARTICLES] LOAD_INIT_ARTICLE", t.SWITCH_APPLY_LOADING = "[ARTICLES] SWITCH_APPLY_LOADING", t.CATALOG_INIT_WITH_ARTICLE = "[ARTICLES] CATALOG_INIT_WITH_ARTICLE", t.SET_MAIN_VIEW = "[ARTICLES] SET_MAIN_VIEW", t.CHANGE_IS_OPEN_CATALOG = "[ARTICLES] CHANGE_IS_OPEN_CATALOG", t.ADD_SHOPPING_CART_ARTICLES = "[ARTICLES] ADD_SHOPPING_CART_ARTICLES", t.DELETE_SHOPPING_CART_ARTICLES = "[ARTICLES] DELETE_SHOPPING_CART_ARTICLES", t.SET_IS_LOADING_FAVORITES = "[FAVORITES] SET_IS_LOADING_FAVORITES", t.ADD_FAVORITE_ARTICLES = "[FAVORITES] ADD_FAVORITE_ARTICLES", t.DELETE_FAVORITE_ARTICLE = "[FAVORITES] DELETE_FAVORITE_ARTICLE", t.REMOVE_INACTIVE_FAVORITES = "[FAVORITES] REMOVE_INACTIVE_FAVORITES", t.INIT_FAVORITE_ARTICLES = "[FAVORITES] INIT_FAVORITE_ARTICLES", t.SET_FAVORITES_TYPE = "[FAVORITES] SET_FAVORITES_TYPE", t.SET_SCROLL_POSITION = "[ARTICLES] SET_SCROLL_POSITION", t.LOAD_SEARCH_RESULTS_SUCCESS = "[SEARCH] LOAD_SEARCH_RESULTS_SUCCESS", t.SEARCH_RESULTS_RESET_TO_INITIAL_STATE = "[SEARCH] SEARCH_RESULTS_RESET_TO_INITIAL_STATE", t.CHANGE_IS_OPEN_PATTERNS_POPUP = "[PATTERNS] CHANGE_IS_OPEN_PATTERNS_POPUP", t.SET_IS_FILTER_KEY_PRESS = "[FAVORITES] SET_IS_FILTER_KEY_PRESS", t.GO_TO_HOME_VIEW = "[ARTICLES VIEW] GO_TO_HOME_VIEW"
    }(r || (r = {}))
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "openGallery", (function() {
    return u
  })), n.d(e, "selectRoom", (function() {
    return l
  })), n.d(e, "startCatalog", (function() {
    return s
  })), n.d(e, "selectSurface", (function() {
    return d
  })), n.d(e, "selectBrand", (function() {
    return f
  })), n.d(e, "selectCollection", (function() {
    return p
  })), n.d(e, "selectArticle", (function() {
    return _
  })), n.d(e, "apply", (function() {
    return v
  })), n.d(e, "selectFoundArticle", (function() {
    return b
  })), n.d(e, "imageRated", (function() {
    return E
  })), n.d(e, "clickInfo", (function() {
    return m
  })), n.d(e, "sessionStart", (function() {
    return y
  })), n.d(e, "sessionFinish", (function() {
    return g
  })), n.d(e, "createPhoto", (function() {
    return T
  })), n.d(e, "addFavorite", (function() {
    return h
  })), n.d(e, "removeFavorite", (function() {
    return S
  })), n.d(e, "removeFromShoppingCart", (function() {
    return A
  })), n.d(e, "addToShoppingCart", (function() {
    return I
  })), n.d(e, "fireEvent", (function() {
    return C
  }));
  var r = n(6),
    i = n(23),
    o = n(48),
    a = n(1),
    c = function() {
      return (c = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    u = function(t) {
      return r.d.sendLogEvent(i.b.openGallery, {
        additional_data: {
          eventValue: {
            start_app: "" + t
          }
        }
      })
    },
    l = function(t, e) {
      r.d.sendLogEvent(t ? i.b.selectMyRoom : i.b.selectRoom, {
        interior_identifier: e,
        additional_data: {
          eventValue: {
            interior_id: e
          }
        }
      })
    },
    s = function(t, e) {
      return r.d.sendLogEvent(i.b.startCatalog, {
        additional_data: {
          eventValue: {
            main: "" + t,
            surface: e
          }
        }
      })
    },
    d = function(t, e, n) {
      return r.d.sendLogEvent(e ? i.b.selectSurface : i.b.unselectSurface, {
        additional_data: {
          eventValue: {
            surface: t,
            surface_selected_by: n
          }
        }
      })
    },
    f = function(t) {
      return r.d.sendLogEvent(i.b.selectBrand, {
        additional_data: {
          eventValue: {
            brand_uuid: t.uuid,
            brand_name: t.name
          }
        }
      })
    },
    p = function(t) {
      return r.d.sendLogEvent(i.b.selectCollection, {
        additional_data: {
          eventValue: {
            brand_uuid: t.brand_uuid,
            collection_uuid: t.uuid,
            collection_name: t.name,
            ab_version: a.b.COLLECTIONS_AB_VERSION
          }
        }
      })
    },
    _ = function(t, e) {
      var n, o, a, c;
      return r.d.sendLogEvent(i.b.selectArticle, {
        additional_data: {
          eventValue: {
            brand_uuid: null === (n = null == t ? void 0 : t.brand) || void 0 === n ? void 0 : n.uuid,
            brand_name: null === (o = null == t ? void 0 : t.brand) || void 0 === o ? void 0 : o.name,
            collection_uuid: null === (a = null == t ? void 0 : t.collection) || void 0 === a ? void 0 : a.uuid,
            collection_name: null === (c = null == t ? void 0 : t.collection) || void 0 === c ? void 0 : c.name,
            article_uuid: t.uuid,
            article_name: t.name,
            article_sku: t.vendor_code,
            article_custom_sku: t.sku,
            mana: !!t.mana,
            catalog: e
          }
        }
      })
    },
    v = function(t, e, n, a, u, l) {
      var s = Object(o.a)(t, n);
      r.d.sendLogEvent(i.b.apply, c(c(c({}, s), l || {}), {
        additional_data: {
          eventValue: {
            brand_uuid: e.brand_uuid,
            collection_uuid: e.collection_uuid,
            article_uuid: e.uuid,
            article_name: e.name,
            article_sku: e.vendor_code,
            article_custom_sku: e.sku,
            mana: !!e.mana,
            search: a,
            use_filters_values: u
          }
        }
      }))
    },
    b = function(t) {
      return r.d.sendLogEvent(i.b.selectArticle, {
        additional_data: {
          eventValue: {
            brand_uuid: t.brand_uuid,
            collection_uuid: t.collection_uuid,
            article_uuid: t.uuid,
            article_name: t.name,
            article_sku: t.vendor_code,
            article_custom_sku: t.sku,
            mana: !!t.mana
          }
        }
      })
    },
    E = function(t, e, n) {
      r.d.sendLogEvent(i.b.imageRated, {
        interior_identifier: t.interior_identifier,
        product_identifiers: t.product_identifiers,
        additional_data: {
          eventValue: {
            message: e,
            rating: n
          }
        }
      })
    },
    m = function(t, e, n, o) {
      var a = {
        additional_data: {
          eventValue: {}
        }
      };
      t ? a.additional_data.eventValue.catalog = "full" : e && (a.additional_data.eventValue.catalog = "minimized"), r.d.sendLogEvent(i.b.clickInfo, {
        additional_data: {
          eventValue: c({
            my_room: "" + n,
            brand_uuid: o.brand_uuid,
            collection_uuid: o.collection_uuid,
            article_uuid: o.uuid,
            article_name: o.name,
            mana: !!o.mana
          }, a.additional_data.eventValue)
        }
      })
    };
  var y = function(t, e) {
      var n = a.b.START_SESSION_TIME,
        c = {
          start_with_article: "" + t,
          cohort_month: n.getMonth() + 1,
          cohort_day: Object(o.d)(n),
          cohort_weekday: Object(o.c)(n),
          cohort_time: n.getHours() + ":" + n.getMinutes()
        };
      e && (c.brand_uuid = e.brand_uuid, c.collection_uuid = e.collection_uuid, c.article_name = e.name, c.article_uuid = e.uuid, c.article_sku = e.vendor_code, c.article_custom_sku = e.sku), r.d.sendLogEvent(i.b.sessionStart, {
        additional_data: {
          eventValue: c
        }
      })
    },
    g = function() {
      var t, e, n, c = new Date,
        u = {
          cohort_month: c.getMonth() + 1,
          cohort_day: Object(o.d)(c),
          cohort_weekday: Object(o.c)(c),
          cohort_time: c.getHours() + ":" + c.getMinutes(),
          session_time: (t = c, e = a.b.START_SESSION_TIME, n = (t.getTime() - e.getTime()) / 1e3, n /= 60, Math.abs(Math.round(n)))
        };
      r.d.sendLogEvent(i.b.wizartSessionFinish, {
        additional_data: {
          eventValue: u
        }
      })
    },
    T = function(t) {
      return r.d.sendLogEvent(i.b.createPhoto, {
        interior_identifier: t
      })
    },
    h = function(t, e) {
      return r.d.sendLogEvent(i.b.addToFavorite, {
        additional_data: {
          eventValue: {
            catalog: t,
            brand_uuid: e.brand_uuid,
            collection_uuid: e.collection_uuid,
            article_uuid: e.uuid,
            article_name: e.name,
            article_sku: e.vendor_code,
            article_custom_sku: e.sku,
            mana: !!e.mana
          }
        }
      })
    },
    S = function(t) {
      return r.d.sendLogEvent(i.b.removeFromFavorite, {
        additional_data: {
          eventValue: {
            catalog: t
          }
        }
      })
    },
    A = function(t) {
      return r.d.sendLogEvent(i.b.removeFromShoppingCart, {
        additional_data: {
          eventValue: {
            brand_uuid: t.brand.uuid,
            brand_name: t.brand.name,
            collection_uuid: t.collection.uuid,
            collection_name: t.collection.name,
            article_uuid: t.uuid,
            article_name: t.name,
            mana: !!t.mana
          }
        }
      })
    },
    I = function(t) {
      return r.d.sendLogEvent(i.b.addToShoppingCart, {
        additional_data: {
          eventValue: {
            brand_uuid: t.brand.uuid,
            brand_name: t.brand.name,
            collection_uuid: t.collection.uuid,
            collection_name: t.collection.name,
            article_uuid: t.uuid,
            article_name: t.name,
            article_sku: t.vendor_code,
            article_custom_sku: t.sku,
            mana: !!t.mana
          }
        }
      })
    },
    C = function(t, e) {
      return r.d.sendLogEvent(t, e)
    }
}, function(t, e, n) {
  "use strict";
  n.d(e, "e", (function() {
    return r
  })), n.d(e, "i", (function() {
    return i
  })), n.d(e, "u", (function() {
    return o
  })), n.d(e, "g", (function() {
    return a
  })), n.d(e, "a", (function() {
    return c
  })), n.d(e, "o", (function() {
    return u
  })), n.d(e, "f", (function() {
    return l
  })), n.d(e, "b", (function() {
    return s
  })), n.d(e, "h", (function() {
    return d
  })), n.d(e, "k", (function() {
    return f
  })), n.d(e, "m", (function() {
    return p
  })), n.d(e, "q", (function() {
    return _
  })), n.d(e, "n", (function() {
    return v
  })), n.d(e, "j", (function() {
    return b
  })), n.d(e, "s", (function() {
    return O
  })), n.d(e, "d", (function() {
    return E
  })), n.d(e, "t", (function() {
    return m
  })), n.d(e, "l", (function() {
    return y
  })), n.d(e, "r", (function() {
    return g
  })), n.d(e, "c", (function() {
    return T
  })), n.d(e, "p", (function() {
    return h
  }));
  var r = "[SURFACES] INIT_SURFACES",
    i = "[SURFACES] SELECT_SURFACE",
    o = "[SURFACES] UPDATE_SURFACES",
    a = "[SURFACES] SELECT_ALL_SURFACES_BY_TYPE",
    c = "CHANGE_FLOOR_ROTATION",
    u = "SURFACES_RESET_TO_INITIAL_STATE",
    l = "INTERACTIVE_SURFACE_RESET_TO_INITIAL_STATE",
    s = "CHANGE_SETTINGS_ACTIVITY",
    d = "SELECT_PATTERN",
    f = "SET_INTERACTIVE_VIEW",
    p = "SET_VIEW",
    _ = "SWITCH_PROCESSING_SCREEN",
    v = "SET_VOCABULARY",
    b = "SET_DEVICE_TYPE",
    O = "SWITCH_SHOW_INITIAL_IMAGE_PATH",
    E = "INIT_BACK_BUTTON_ACTION",
    m = "SWITCH_SHOW_MESSAGE_SERVER_ERROR",
    y = "SET_ORIENTATION_APP_SIZES",
    g = "SWITCH_ROLLER_LOADING_SCREEN",
    T = "GET_LOCALIZATION_SUCCESS",
    h = "SWITCH_LOCALIZATION_VISIBLE"
}, function(t, e, n) {
  "use strict";
  n.d(e, "h", (function() {
    return a
  })), n.d(e, "a", (function() {
    return c
  })), n.d(e, "j", (function() {
    return u
  })), n.d(e, "e", (function() {
    return s
  })), n.d(e, "b", (function() {
    return d
  })), n.d(e, "g", (function() {
    return f
  })), n.d(e, "f", (function() {
    return p
  })), n.d(e, "d", (function() {
    return _
  })), n.d(e, "i", (function() {
    return v
  })), n.d(e, "c", (function() {
    return b
  }));
  var r = n(7),
    i = function(t) {
      return t.auxiliaries
    },
    o = Object(r.a)(i, (function(t) {
      return t.device
    })),
    a = Object(r.a)(i, (function(t) {
      return t.orientation
    })),
    c = Object(r.a)(i, (function(t) {
      return t.appHeight
    })),
    u = Object(r.a)(i, (function(t) {
      return t.serverError
    })),
    l = Object(r.a)(i, (function(t) {
      return t.backButtonAction
    })),
    s = Object(r.a)(o, (function(t) {
      return t
    })),
    d = Object(r.a)(i, (function(t) {
      return t.appWidth
    })),
    f = Object(r.a)(o, (function(t) {
      return null == t ? void 0 : t.type
    })),
    p = Object(r.a)(o, (function(t) {
      return null == t ? void 0 : t.model
    })),
    _ = Object(r.a)(o, (function(t) {
      var e;
      return null === (e = null == t ? void 0 : t.browser) || void 0 === e ? void 0 : e.name
    })),
    v = Object(r.a)(a, (function(t) {
      return t
    })),
    b = Object(r.a)(l, (function(t) {
      return t
    }))
}, function(t, e, n) {
  "use strict";
  var r = n(34);
  n.d(e, "c", (function() {
    return r.a
  })), n.d(e, "j", (function() {
    return r.f
  })), n.d(e, "k", (function() {
    return r.g
  })), n.d(e, "l", (function() {
    return r.h
  }));
  var i = n(36);
  n.d(e, "g", (function() {
    return i.a
  })), n.d(e, "m", (function() {
    return i.b
  }));
  var o = n(72);
  n.d(e, "a", (function() {
    return o.a
  })), n.d(e, "b", (function() {
    return o.c
  })), n.d(e, "d", (function() {
    return o.d
  })), n.d(e, "e", (function() {
    return o.e
  })), n.d(e, "f", (function() {
    return o.f
  })), n.d(e, "h", (function() {
    return o.g
  })), n.d(e, "i", (function() {
    return o.i
  }))
}, , , , function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "switchArticleType", (function() {
    return O
  })), n.d(e, "setIsFilterKeyPress", (function() {
    return E
  })), n.d(e, "switchLoadingState", (function() {
    return m
  })), n.d(e, "switchInitArticleNavigationLoadingState", (function() {
    return y
  })), n.d(e, "loadSuccess", (function() {
    return g
  })), n.d(e, "loadMore", (function() {
    return T
  })), n.d(e, "selectArticle", (function() {
    return h
  })), n.d(e, "resetToInitialState", (function() {
    return S
  })), n.d(e, "selectSurface", (function() {
    return A
  })), n.d(e, "selectAllSurfacesByType", (function() {
    return I
  })), n.d(e, "loadInitArticleDispatch", (function() {
    return C
  })), n.d(e, "scrollToInitArticleDesktop", (function() {
    return R
  })), n.d(e, "setSurfacesSelectorValue", (function() {
    return j
  }));
  var r = n(6),
    i = n(23),
    o = n(42),
    a = n(44),
    c = n(25),
    u = n(10),
    l = n(9),
    s = n(13),
    d = n(2),
    f = n(58),
    p = n(35),
    _ = n(93),
    v = n(1),
    b = n(12),
    O = function(t) {
      return {
        type: u.ArticlesActionTypes.SWITCH_ARTICLE_TYPE,
        payload: {
          type: t
        }
      }
    },
    E = function(t) {
      return {
        type: u.ArticlesActionTypes.SET_IS_FILTER_KEY_PRESS,
        payload: {
          isFilterKeyPress: t
        }
      }
    },
    m = function(t) {
      return {
        type: u.ArticlesActionTypes.SWITCH_ARTICLE_LOADING_STATE,
        payload: {
          isLoading: t
        }
      }
    },
    y = function(t) {
      return {
        type: u.ArticlesActionTypes.CATALOG_INIT_WITH_ARTICLE,
        payload: {
          isCatalogInitWithArticle: t
        }
      }
    },
    g = function(t, e) {
      return {
        type: t,
        payload: e
      }
    },
    T = function() {
      return function(t, e) {
        var n = e().articles;
        if (!n.isLoading) switch (n.navigation.current) {
          case l.a.search:
            t(Object(a.loadMoreFilteredArticles)())
        }
      }
    },
    h = function(t, e) {
      return function(n, r) {
        var a = r(),
          u = Object(s.g)(a),
          l = e,
          f = t.application_type.includes(e);
        f || e !== d.b.floor ? f || e !== d.b.wall || (n(I(d.b.floor, !0)), n(O(d.b.floor)), l = d.b.floor) : (n(I(d.b.wall, !0)), n(O(d.b.wall)), l = d.b.wall), n(Object(o.selectArticleItem)({
          article: t,
          articleType: l,
          catalogType: i.a.full
        })), u !== d.c.DESKTOP && n(Object(c.closeArticleCatalog)())
      }
    },
    S = function(t) {
      return {
        type: t
      }
    },
    A = function(t) {
      return function(e, n) {
        var i = Object(s.g)(n()),
          o = n(),
          f = o.surfaces,
          p = o.articles,
          v = o.catalog,
          E = f.currentSurfaces.filter((function(e) {
            return e.isActive && e.surfaceType === t.surfaceType
          }));
        r.c.selectSurface(t.surfaceType, !t.isActive, r.b.roller), e({
          type: b.i,
          payload: {
            surface: t
          }
        }), p.type !== t.surfaceType && (e(O(t.surfaceType)), e(Object(_.d)({
          type: p.type
        })), v[t.surfaceType].steps.length || e(Object(_.i)()), e(S(u.ArticlesActionTypes.SEARCH_RESULTS_RESET_TO_INITIAL_STATE)), e(Object(a.setFilterName)("", p.type)), e(Object(a.resetSelectedFilters)(p.type)), p.navigation.current === l.a.search && e(Object(c.setArticleNavigateFirstView)())), 0 === E.length && i !== d.c.DESKTOP && e(Object(c.openArticlesPicker)())
      }
    },
    I = function(t, e) {
      return function(n, r) {
        var i = r().articles;
        n({
          type: b.g,
          payload: {
            surfaceType: t,
            isActive: e
          }
        });
        var o = v.b.CATALOG_STRUCTURE[0];
        n(p.articlesActions.scrollActions.setScrollPosition(0, o, !1)), t !== i.type && (n(S(u.ArticlesActionTypes.SEARCH_RESULTS_RESET_TO_INITIAL_STATE)), n(Object(a.setFilterName)("", i.type)), n(Object(a.resetSelectedFilters)(i.type))), i.navigation.current === l.a.search && n(Object(c.setArticleNavigateFirstView)())
      }
    },
    C = function(t) {
      return {
        type: u.ArticlesActionTypes.LOAD_INIT_ARTICLE,
        payload: {
          article: t
        }
      }
    },
    R = function() {
      return function() {
        document.getElementsByClassName("scroll-to-selected-article").length && (document.getElementsByClassName("w-articles__container").item(0).scrollTop = document.getElementsByClassName("scroll-to-selected-article").item(0).parentElement.offsetTop - 50)
      }
    },
    j = function(t) {
      return function(e, n) {
        var i = n().articles;
        e(O(t)), e(S(u.ArticlesActionTypes.SEARCH_RESULTS_RESET_TO_INITIAL_STATE)), e(I(t, !0)), e(Object(_.l)({
          type: t
        })), i.navigation.current === l.a.favorites && e(Object(f.ensureFavoritesExists)()), t !== i.type && (e(S(u.ArticlesActionTypes.SEARCH_RESULTS_RESET_TO_INITIAL_STATE)), e(Object(a.setFilterName)("", i.type)), e(Object(a.resetSelectedFilters)(i.type))), i.navigation.current === l.a.search && e(Object(c.setArticleNavigateFirstView)()), r.c.selectSurface(t, !0, r.b.popover)
      }
    }
}, function(t, e, n) {
  "use strict";
  var r;
  n.d(e, "a", (function() {
      return r
    })),
    function(t) {
      t.product_type = "product_type", t.brands = "brands", t.collections = "collections", t.products = "products"
    }(r || (r = {}))
}, function(t, e, n) {
  "use strict";
  n.d(e, "A", (function() {
    return _
  })), n.d(e, "db", (function() {
    return v
  })), n.d(e, "P", (function() {
    return b
  })), n.d(e, "p", (function() {
    return O
  })), n.d(e, "F", (function() {
    return E
  })), n.d(e, "w", (function() {
    return m
  })), n.d(e, "ib", (function() {
    return y
  })), n.d(e, "z", (function() {
    return g
  })), n.d(e, "m", (function() {
    return T
  })), n.d(e, "f", (function() {
    return h
  })), n.d(e, "D", (function() {
    return S
  })), n.d(e, "W", (function() {
    return A
  })), n.d(e, "bb", (function() {
    return I
  })), n.d(e, "S", (function() {
    return C
  })), n.d(e, "u", (function() {
    return R
  })), n.d(e, "C", (function() {
    return j
  })), n.d(e, "X", (function() {
    return L
  })), n.d(e, "B", (function() {
    return w
  })), n.d(e, "O", (function() {
    return P
  })), n.d(e, "eb", (function() {
    return N
  })), n.d(e, "Y", (function() {
    return k
  })), n.d(e, "t", (function() {
    return F
  })), n.d(e, "c", (function() {
    return D
  })), n.d(e, "d", (function() {
    return M
  })), n.d(e, "N", (function() {
    return U
  })), n.d(e, "n", (function() {
    return V
  })), n.d(e, "G", (function() {
    return x
  })), n.d(e, "ab", (function() {
    return H
  })), n.d(e, "Z", (function() {
    return B
  })), n.d(e, "r", (function() {
    return G
  })), n.d(e, "I", (function() {
    return W
  })), n.d(e, "U", (function() {
    return z
  })), n.d(e, "v", (function() {
    return K
  })), n.d(e, "hb", (function() {
    return Y
  })), n.d(e, "k", (function() {
    return q
  })), n.d(e, "b", (function() {
    return Q
  })), n.d(e, "s", (function() {
    return J
  })), n.d(e, "l", (function() {
    return Z
  })), n.d(e, "i", (function() {
    return $
  })), n.d(e, "j", (function() {
    return X
  })), n.d(e, "a", (function() {
    return tt
  })), n.d(e, "R", (function() {
    return et
  })), n.d(e, "q", (function() {
    return nt
  })), n.d(e, "H", (function() {
    return rt
  })), n.d(e, "T", (function() {
    return it
  })), n.d(e, "V", (function() {
    return ot
  })), n.d(e, "cb", (function() {
    return at
  })), n.d(e, "Q", (function() {
    return ct
  })), n.d(e, "J", (function() {
    return ut
  })), n.d(e, "K", (function() {
    return lt
  })), n.d(e, "E", (function() {
    return st
  })), n.d(e, "gb", (function() {
    return dt
  })), n.d(e, "x", (function() {
    return ft
  })), n.d(e, "h", (function() {
    return pt
  })), n.d(e, "fb", (function() {
    return _t
  })), n.d(e, "o", (function() {
    return vt
  })), n.d(e, "y", (function() {
    return bt
  })), n.d(e, "e", (function() {
    return Ot
  })), n.d(e, "g", (function() {
    return s
  })), n.d(e, "L", (function() {
    return d
  })), n.d(e, "M", (function() {
    return f
  })), n.d(e, "jb", (function() {
    return p
  }));
  var r = n(0),
    i = n.n(r),
    o = n(3),
    a = "http://visual.ornato.mk/img/back-arrow.svg",
    c = "http://visual.ornato.mk/img/delete.svg",
    u = "http://visual.ornato.mk/img/rate.svg",
    l = "http://visual.ornato.mk/img/about-app.svg",
    s = "http://visual.ornato.mk/img/bad-photo.fl.svg",
    d = "http://visual.ornato.mk/img/close.fl.svg",
    f = "http://visual.ornato.mk/img/small-wizart-logo.fl.svg",
    p = "http://visual.ornato.mk/img/proccessing.png",
    _ = function(t) {
      var e = t.attributes;
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/language.svg",
        attributes: e
      })
    },
    v = function(t) {
      var e = t.attributes;
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/start-tutorial.svg",
        attributes: e
      })
    },
    b = function(t) {
      var e = t.attributes;
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/plus.svg",
        attributes: e
      })
    },
    O = function(t) {
      var e = t.attributes;
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/disabled-room.svg",
        attributes: e
      })
    },
    E = function(t) {
      var e = t.attributes;
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/minus.svg",
        attributes: e
      })
    },
    m = function(t) {
      var e = t.attributes;
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/filters.svg",
        attributes: e
      })
    },
    y = function(t) {
      var e = t.attributes;
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/wizart.more.svg",
        attributes: e
      })
    },
    g = function(t) {
      var e = t.attributes;
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/input_reset.svg",
        attributes: e
      })
    },
    T = function(t) {
      var e = t.attributes;
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/custom-product.svg",
        attributes: e
      })
    },
    h = function(t) {
      var e = t.attributes;
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/back-new.svg",
        attributes: e
      })
    },
    S = function(t) {
      var e = t.attributes;
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/mana.svg",
        attributes: e
      })
    },
    A = function(t) {
      var e = t.attributes;
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/search.svg",
        attributes: e
      })
    },
    I = function(t) {
      var e = t.attributes;
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/shopping-cart-icon.svg",
        attributes: e
      })
    },
    C = function(t) {
      var e = t.attributes;
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/product-link.svg",
        attributes: e
      })
    },
    R = function(t) {
      var e = t.attributes;
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/favorite-wrapper.svg",
        attributes: e
      })
    },
    j = function(t) {
      var e = t.attributes;
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/link.svg",
        attributes: e
      })
    },
    L = function(t) {
      var e = t.attributes;
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/settings.svg",
        attributes: e
      })
    },
    w = function() {
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/like.svg"
      })
    },
    P = function() {
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/pinterest.svg"
      })
    },
    N = function() {
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/twitter.svg"
      })
    },
    k = function() {
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/share.svg"
      })
    },
    F = function() {
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/facebook.svg"
      })
    },
    D = function() {
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/arrow.svg"
      })
    },
    M = function(t) {
      var e = t.attributes;
      return i.a.createElement(o.h, {
        src: a,
        attributes: e
      })
    },
    U = function() {
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/photo.svg"
      })
    },
    V = function() {
      return i.a.createElement(o.h, {
        src: c
      })
    },
    x = function() {
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/more.svg"
      })
    },
    H = function(t) {
      var e = t.attributes;
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/shopping-cart.svg",
        attributes: e
      })
    },
    B = function(t) {
      var e = t.attributes;
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/shopping-cart-delete.svg",
        attributes: e
      })
    },
    G = function() {
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/download.svg"
      })
    },
    W = function() {
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/my-room.svg"
      })
    },
    z = function() {
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/reset-overlay.svg"
      })
    },
    K = function() {
      return i.a.createElement(o.h, {
        src: u
      })
    },
    Y = function(t) {
      var e = t.attributes;
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/wizart-logo.svg",
        attributes: e
      })
    },
    q = function() {
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/close.svg"
      })
    },
    Q = function() {
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/add-to-shopping-cart.svg"
      })
    },
    J = function() {
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/envelope.svg"
      })
    },
    Z = function() {
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/contact_name.svg"
      })
    },
    $ = function() {
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/catalog-button.svg"
      })
    },
    X = function() {
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/catalog-inner.svg"
      })
    },
    tt = function() {
      return i.a.createElement(o.h, {
        src: l
      })
    },
    et = function() {
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/privacy.svg"
      })
    },
    nt = function() {
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/disclaimer.svg"
      })
    },
    rt = function() {
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/more-mobile.svg"
      })
    },
    it = function() {
      return i.a.createElement(o.h, {
        src: u
      })
    },
    ot = function() {
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/rotate-floor-icon.svg"
      })
    },
    at = function() {
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/show-original.svg"
      })
    },
    ct = function() {
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/face_positive.svg"
      })
    },
    ut = function() {
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/face_sad.svg"
      })
    },
    lt = function() {
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/face_neutral.svg"
      })
    },
    st = function() {
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/comment.svg"
      })
    },
    dt = function(t) {
      var e = t.attributes;
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/roller-wall.svg",
        attributes: e
      })
    },
    ft = function(t) {
      var e = t.attributes;
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/roller-floor.svg",
        attributes: e
      })
    },
    pt = function() {
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/camera-small.svg"
      })
    },
    _t = function() {
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/uploadButtonL.svg"
      })
    },
    vt = function(t) {
      var e = t.attributes;
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/disabled.svg",
        attributes: e
      })
    },
    bt = function(t) {
      var e = t.attributes;
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/heart.svg",
        attributes: e
      })
    },
    Ot = function(t) {
      var e = t.attributes;
      return i.a.createElement(o.h, {
        src: "http://visual.ornato.mk/img/back.svg",
        attributes: e
      })
    }
}, function(t, e, n) {
  "use strict";
  n.d(e, "d", (function() {
    return o.c
  })), n.d(e, "s", (function() {
    return o.g
  })), n.d(e, "y", (function() {
    return o.m
  })), n.d(e, "B", (function() {
    return o.p
  })), n.d(e, "p", (function() {
    return o.d
  })), n.d(e, "z", (function() {
    return o.n
  })), n.d(e, "x", (function() {
    return o.l
  })), n.d(e, "b", (function() {
    return o.a
  })), n.d(e, "w", (function() {
    return o.k
  })), n.d(e, "A", (function() {
    return o.o
  })), n.d(e, "t", (function() {
    return o.h
  })), n.d(e, "r", (function() {
    return o.f
  })), n.d(e, "u", (function() {
    return o.i
  })), n.d(e, "q", (function() {
    return o.e
  })), n.d(e, "c", (function() {
    return o.b
  })), n.d(e, "v", (function() {
    return o.j
  })), n.d(e, "a", (function() {
    return p
  })), n.d(e, "f", (function() {
    return v.b
  })), n.d(e, "e", (function() {
    return v.a
  })), n.d(e, "h", (function() {
    return v.d
  })), n.d(e, "g", (function() {
    return v.c
  })), n.d(e, "m", (function() {
    return v.i
  })), n.d(e, "l", (function() {
    return v.h
  })), n.d(e, "o", (function() {
    return v.k
  })), n.d(e, "j", (function() {
    return v.f
  })), n.d(e, "i", (function() {
    return v.e
  })), n.d(e, "n", (function() {
    return v.j
  })), n.d(e, "k", (function() {
    return v.g
  }));
  var r, i = n(2),
    o = n(93),
    a = n(39),
    c = n(69),
    u = n(1),
    l = function() {
      return (l = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    s = function(t, e, n) {
      if (n || 2 === arguments.length)
        for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
      return t.concat(r || Array.prototype.slice.call(e))
    },
    d = {
      currentStep: null,
      initProductPage: 1,
      selectedProducts: [],
      steps: []
    },
    f = ((r = {
      loading: !1,
      catalogWasOpen: !1,
      lastSelectedProduct: null,
      lastSelectedProductType: null
    })[i.b.wall] = l({}, d), r[i.b.floor] = l({}, d), r),
    p = Object(a.createReducer)(f, {
      CHANGE_CATALOG_LOADING: function(t, e) {
        return l(l({}, t), {
          loading: e.payload.loading
        })
      },
      SET_INIT_PRODUCT_PAGE: function(t, e) {
        var n;
        return l(l({}, t), ((n = {})[e.payload.type] = l(l({}, t[e.payload.type]), {
          initProductPage: e.payload.page
        }), n))
      },
      SET_CATALOG_OPENING_STATUS: function(t, e) {
        return l(l({}, t), {
          catalogWasOpen: e.payload.status
        })
      },
      FETCH_PRODUCTS_ERROR: function(t, e) {
        return l(l({}, t), {
          loading: !1
        })
      },
      FETCH_PRODUCTS_START: function(t, e) {
        var n, r = e.payload.type,
          i = _(e.payload.selectedProduct, t[r].selectedProducts, e.payload.selectedProduct.step);
        return l(l({}, t), ((n = {
          loading: !0
        })[r] = l(l({}, t[r]), {
          currentStep: e.payload.step,
          selectedProducts: i
        }), n))
      },
      FETCH_PRODUCTS_SUCCESS: function(t, e) {
        var n, r = e.payload.type;
        return l(l({}, t), ((n = {
          loading: e.payload.loading
        })[r] = l(l({}, t[r]), {
          currentStep: e.payload.step,
          steps: s(s([], t[r].steps, !0), [{
            name: e.payload.step,
            response: e.payload.response
          }], !1)
        }), n))
      },
      FETCH_MORE_SUCCESS: function(t, e) {
        var n, r, i, o, a, c = e.payload.type,
          u = s([], t[c].steps, !0),
          d = u.findIndex((function(t) {
            return t.name === e.payload.step
          })),
          f = null === (i = null === (r = e.payload.response) || void 0 === r ? void 0 : r.meta) || void 0 === i ? void 0 : i.current_page,
          p = t[c].initProductPage;
        if (-1 !== d) {
          var _ = null === (a = null === (o = u[d].response) || void 0 === o ? void 0 : o.meta) || void 0 === a ? void 0 : a.current_page;
          _ && f > _ ? (u[d].response.meta = e.payload.response.meta, u[d].response.data = s(s([], u[d].response.data, !0), e.payload.response.data, !0)) : (p -= 1, u[d].response.data = s(s([], e.payload.response.data, !0), u[d].response.data, !0))
        }
        return l(l({}, t), ((n = {
          loading: !1
        })[c] = l(l({}, t[c]), {
          initProductPage: p,
          steps: u
        }), n))
      },
      SELECT_PRODUCT: function(t, e) {
        var n, r = e.payload.type,
          i = _(e.payload.selectedProduct, t[r].selectedProducts, e.payload.selectedProduct.step);
        return l(l({}, t), ((n = {
          lastSelectedProduct: e.payload.selectedProduct.product,
          lastSelectedProductType: r
        })[r] = l(l({}, t[r]), {
          selectedProducts: i
        }), n))
      },
      SET_LAST_SELECTED_PRODUCT: function(t, e) {
        return l(l({}, t), {
          lastSelectedProduct: e.payload.product,
          lastSelectedProductType: e.payload.type
        })
      },
      RESET_LAST_SELECTED_PRODUCT: function(t) {
        return l(l({}, t), {
          lastSelectedProduct: null,
          lastSelectedProductType: null
        })
      },
      GO_TO_PREVIOUS_CATALOG_STEP: function(t, e) {
        var n, r = e.payload.type,
          i = s([], t[r].steps, !0),
          o = s([], t[r].selectedProducts, !0),
          a = i.findIndex((function(t) {
            return t.name === e.payload.currentStep
          })),
          c = o.findIndex((function(t) {
            return t.step === e.payload.currentStep
          }));
        return -1 !== c && o.splice(c, 1), i.splice(a, 1), l(l({}, t), ((n = {})[r] = l(l({}, t[r]), {
          initProductPage: 1,
          currentStep: e.payload.previousStep,
          steps: i,
          selectedProducts: o
        }), n))
      },
      RESET_TO_FIRST_STEP: function(t, e) {
        var n, r = u.b.CATALOG_STRUCTURE[0],
          i = Object(c.b)(r, t[e.payload.type].steps);
        return l(l({}, t), ((n = {})[e.payload.type] = l(l({}, t[e.payload.type]), {
          initProductPage: 1,
          currentStep: r,
          steps: i ? [i] : [],
          selectedProducts: []
        }), n))
      },
      RESET_SELECTED_PATTERNS: function(t, e) {
        var n;
        return l(l({}, t), ((n = {})[i.b.wall] = l(l({}, t[i.b.wall]), {
          selectedPattern: null
        }), n[i.b.floor] = l(l({}, t[i.b.floor]), {
          selectedPattern: null
        }), n))
      }
    }),
    _ = function(t, e, n) {
      var r = s([], e, !0),
        i = e.findIndex((function(t) {
          return t.step === n
        }));
      return -1 === i ? r.push(t) : r[i] = t, r
    },
    v = n(111)
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "getSurfaceTypeOfSelectedInteriorForFavorites", (function() {
    return a.c
  })), n.d(e, "getFavoriteKeys", (function() {
    return a.b
  })), n.d(e, "getDuplicates", (function() {
    return a.a
  })), n.d(e, "isNotValidSearchQuery", (function() {
    return a.d
  })), n.d(e, "CatalogViewEnum", (function() {
    return c.a
  })), n.d(e, "CatalogStepEndpoints", (function() {
    return d
  })), n.d(e, "getArticlePageEndpoint", (function() {
    return f
  })), n.d(e, "fetchProductsFlow", (function() {
    return p.d
  })), n.d(e, "goToPrevious", (function() {
    return p.s
  })), n.d(e, "selectProduct", (function() {
    return p.y
  })), n.d(e, "setLastSelectProduct", (function() {
    return p.B
  })), n.d(e, "goToFirstStep", (function() {
    return p.p
  })), n.d(e, "setCatalogOpeningStatus", (function() {
    return p.z
  })), n.d(e, "resetToFirstStep", (function() {
    return p.x
  })), n.d(e, "changeLoading", (function() {
    return p.b
  })), n.d(e, "resetLastSelectedProduct", (function() {
    return p.w
  })), n.d(e, "setInitProductPage", (function() {
    return p.A
  })), n.d(e, "goToPreviousCatalogStep", (function() {
    return p.t
  })), n.d(e, "goToNextCatalogStep", (function() {
    return p.r
  })), n.d(e, "initCatalog", (function() {
    return p.u
  })), n.d(e, "goToHomeView", (function() {
    return p.q
  })), n.d(e, "fetchMore", (function() {
    return p.c
  })), n.d(e, "loadMoreProducts", (function() {
    return p.v
  })), n.d(e, "catalogReducer", (function() {
    return p.a
  })), n.d(e, "getCatalogStore", (function() {
    return p.f
  })), n.d(e, "getCatalogLoading", (function() {
    return p.e
  })), n.d(e, "getCurrentStore", (function() {
    return p.h
  })), n.d(e, "getCurrentStep", (function() {
    return p.g
  })), n.d(e, "getProductsForView", (function() {
    return p.m
  })), n.d(e, "getPreviusSelectedProduct", (function() {
    return p.l
  })), n.d(e, "getSelectedProduct", (function() {
    return p.o
  })), n.d(e, "getLastSelectedProduct", (function() {
    return p.j
  })), n.d(e, "getInitProductPage", (function() {
    return p.i
  })), n.d(e, "getSelectedPattern", (function() {
    return p.n
  })), n.d(e, "getNavigationTitle", (function() {
    return p.k
  })), n.d(e, "Header", (function() {
    return P
  })), n.d(e, "FavoriteButton", (function() {
    return E.d
  })), n.d(e, "BackButton", (function() {
    return E.a
  })), n.d(e, "CloseButton", (function() {
    return E.b
  })), n.d(e, "HeaderButton", (function() {
    return E.g
  })), n.d(e, "FavoritesList", (function() {
    return E.e
  })), n.d(e, "FiltresView", (function() {
    return E.f
  })), n.d(e, "CustomProductsList", (function() {
    return E.c
  })), n.d(e, "SurfaceSelect", (function() {
    return E.h
  })), n.d(e, "articlesStore", (function() {
    return i
  })), n.d(e, "articlesAPI", (function() {
    return o
  }));
  var r, i = n(35),
    o = n(24),
    a = n(77),
    c = n(19),
    u = n(1),
    l = n(5),
    s = function(t) {
      var e = {
        type: t.type
      };
      return t[c.a.product_type] && (e.product_type_code = t[c.a.product_type]), e
    },
    d = ((r = {})[c.a.product_type] = function(t) {
      return u.b.PIM_HOST + "/api/v2/public/product-types?q=" + Object(o.generateQuery)({
        type: t.type
      }) + "&page=" + (t.page || 1) + Object(l.i)("&")
    }, r[c.a.brands] = function(t) {
      return u.b.PIM_HOST + "/api/brands?q=" + Object(o.generateQuery)(s(t)) + "&page=" + (t.page || 1) + Object(l.i)("&")
    }, r[c.a.collections] = function(t) {
      var e = 1 == +u.b.COLLECTIONS_AB_VERSION ? "&order=asc" : "";
      return t.brands ? u.b.PIM_HOST + "/api/brands/" + t.brands + "/collections?q=" + Object(o.generateQuery)(s(t)) + "&page=" + (t.page || 1) + e + Object(l.i)("&") : u.b.PIM_HOST + "/api/collections?q=" + Object(o.generateQuery)(s(t)) + "&page=" + (t.page || 1) + e + Object(l.i)("&")
    }, r[c.a.products] = function(t) {
      return t[c.a.brands] || t[c.a.collections] ? t[c.a.brands] ? t[c.a.collections] ? u.b.PIM_HOST + "/api/brands/" + t[c.a.brands] + "/collections/" + t[c.a.collections] + "/articles?q=" + Object(o.generateQuery)(s(t)) + "&page=" + (t.page || 1) + Object(l.i)("&") : u.b.PIM_HOST + "/api/brands/" + t[c.a.brands] + "/articles?q=" + Object(o.generateQuery)(s(t)) + "&page=" + (t.page || 1) + Object(l.i)("&") : u.b.PIM_HOST + "/api/collections/" + t[c.a.collections] + "/articles?q=" + Object(o.generateQuery)(s(t)) + "&page=" + (t.page || 1) + Object(l.i)("&") : u.b.PIM_HOST + "/api/articles?q=" + Object(o.generateQuery)(s(t)) + "&page=" + (t.page || 1) + Object(l.i)("&")
    }, r),
    f = function(t) {
      var e = Object(o.generateQuery)(s(t)),
        n = u.b.PIM_HOST + "/api/v2/public";
      return t.products && t.collections || t.products && t.collections && t.brands ? n + "/collections/" + t.collections + "/articles/" + t.products + "/pagination-page?q=" + e + Object(l.i)("&") : t.brands && !t.collections ? n + "/brands/" + t.brands + "/articles/" + t.products + "/pagination-page?q=" + e + Object(l.i)("&") : n + "/articles/" + t.products + "/pagination-page?q=" + e + Object(l.i)("&")
    },
    p = n(21),
    _ = n(0),
    v = n.n(_),
    b = n(139),
    O = n(144),
    E = n(100),
    m = n(17),
    y = n.n(m),
    g = n(8),
    T = n(13),
    h = n(3),
    S = n(20),
    A = function(t) {
      var e = t.value,
        n = void 0 === e ? "" : e,
        r = t.placeholder,
        i = t.errorMessage,
        o = t.deviceType,
        c = t.isFilterKeyPress,
        u = t.mana,
        l = t.onKeyPress,
        s = t.onChange,
        d = t.onClear,
        f = t.onInputSearchButtonClick,
        p = Object(a.d)(n) || c && !n.length;
      return v.a.createElement("div", {
        className: y()("w-search", {
          "w-search--error": p
        }, "w-search--" + o)
      }, v.a.createElement("div", {
        className: "w-input__wrapper"
      }, v.a.createElement("div", {
        className: "w-input__field"
      }, v.a.createElement("input", {
        className: y()("w-input--reset w-input", {
          "w-input--error": p
        }, {
          "w-input--mana": u
        }),
        value: n,
        onChange: s,
        onKeyPress: l,
        placeholder: r
      })), v.a.createElement(S.W, {
        attributes: {
          className: y()("w-input__icon", {
            "w-input__icon--active": n.length > 0
          })
        }
      }), v.a.createElement("div", {
        className: "w-input__actions"
      }, n.length > 0 && v.a.createElement(S.z, {
        attributes: {
          className: "w-input__reset",
          onClick: d
        }
      }), u && v.a.createElement(h.l, {
        title: "FILTER_PANEL.SEARCH_MANA",
        className: "mana-icon"
      }, v.a.createElement(S.D, {
        attributes: {
          onClick: f,
          className: "w-input__mana"
        }
      })))), p && v.a.createElement("div", {
        className: "w-input__message--error"
      }, i))
    },
    I = Object(g.b)((function(t) {
      return {
        deviceType: Object(T.g)(t),
        isFilterKeyPress: t.articles.isFilterKeyPress
      }
    }))(A),
    C = n(81),
    R = n(6),
    j = Object(C.a)((function(t) {
      var e = t.getLocalizationProperty,
        n = t.inputSearchValue,
        r = t.clearInputSearch,
        i = t.handleInputSearchButtonClick,
        o = t.handleKeyPress,
        a = t.changeInputSearch,
        c = t.handleClickMana,
        l = v.a.useRef(null),
        s = e("ARTICLE_LIST.NAVIGATION_SEARCH"),
        d = e("FILTER_PANEL.SEARCH_BAR_VALIDATION_MESSAGE"),
        f = Object(g.d)(T.g),
        p = Object(g.d)(T.i);
      return v.a.createElement("div", {
        className: "w-article-filters"
      }, v.a.createElement("div", {
        className: y()("w-articles-controlsw-article-filters__input-wrapper", "w-article-filters__input-wrapper--" + f, "w-article-filters__input-wrapper--" + p)
      }, v.a.createElement("div", {
        className: "w-article-filters__input-field"
      }, v.a.createElement(I, {
        mana: u.b.MANA,
        value: n,
        placeholder: s,
        errorMessage: d,
        onKeyPress: o,
        onChange: a,
        onClear: r,
        onInputSearchButtonClick: u.b.MANA ? function() {
          l && l.current && (l.current.click(), R.c.fireEvent(R.a.manaImageSearch))
        } : i
      }), u.b.MANA && v.a.createElement("input", {
        type: "file",
        ref: l,
        onClick: function(t) {
          return t.stopPropagation()
        },
        onChange: function(t) {
          c(t.target.files[0]), t.target.value = null
        },
        style: {
          display: "none"
        },
        accept: "image/*;capture=camera, .jpeg,.jpg,.png"
      }))))
    })),
    L = n(145),
    w = n(9),
    P = function() {
      var t = Object(b.c)(),
        e = t.title,
        n = t.showBack,
        r = t.favoriteCount,
        i = t.navigationStep,
        o = t.selectedRoomType,
        a = t.onHandleClickBack,
        c = t.onFavoriteClick,
        l = t.onCloseClick,
        s = t.onCustomProductClick,
        d = Object(O.a)(),
        f = d.changeInputSearch,
        p = d.clearInputSearch,
        _ = d.handleInputSearchButtonClick,
        m = d.handleKeyPress,
        y = d.inputSearchValue,
        g = d.handleClickMana,
        T = d.onHandleClickFilter,
        A = d.filters,
        I = v.a.useMemo((function() {
          return o === w.b.all && u.b.FLOORS_ENABLED && u.b.WALLS_ENABLED && i !== w.a.customProducts
        }), [o, i]);
      return v.a.createElement("div", {
        className: "new-catalog__header"
      }, v.a.createElement("div", {
        className: "new-catalog__header-first-part"
      }, v.a.createElement("div", {
        className: "header__title"
      }, n && v.a.createElement(h.l, {
        className: "flex-center",
        title: "TOOLTIPS.CATALOG_BACK_BUTTON",
        placement: "bottom"
      }, v.a.createElement(E.a, {
        onClick: a
      })), v.a.createElement(h.k, {
        as: "h2",
        className: "bold new-catalog__title"
      }, e)), v.a.createElement("div", {
        className: "nth_second-part"
      }, v.a.createElement("div", {
        className: "cheader__filters--first-row"
      }, I && v.a.createElement(v.a.Suspense, {
        fallback: v.a.createElement(v.a.Fragment, null)
      }, v.a.createElement(E.h, null)), i !== w.a.favorites && i !== w.a.customProducts && i !== w.a.filters && v.a.createElement(v.a.Fragment, null, v.a.createElement(j, {
        changeInputSearch: f,
        clearInputSearch: p,
        handleInputSearchButtonClick: _,
        handleKeyPress: m,
        inputSearchValue: y,
        handleClickMana: g
      }), u.b.FILTERS && v.a.createElement(h.l, {
        title: "TOOLTIPS.FILTER",
        placement: "right"
      }, v.a.createElement(E.g, {
        primary: !0,
        onClick: T,
        dot: A.selectedFilters && A.selectedFilters.length > 0
      }, v.a.createElement(S.w, null))))), i !== w.a.favorites && i !== w.a.customProducts && i !== w.a.filters && v.a.createElement(v.a.Fragment, null, u.b.CUSTOM_PRODUCT && v.a.createElement(h.l, {
        title: "TOOLTIPS.MY_PRODUCT",
        placement: "bottom"
      }, v.a.createElement(E.g, {
        onClick: s
      }, v.a.createElement(S.m, null))), v.a.createElement(h.l, {
        title: "FAVORITES.TITLE",
        placement: "bottom"
      }, v.a.createElement(L.a, {
        badgeContent: r
      }, v.a.createElement(E.d, {
        onClick: c
      })))), v.a.createElement(E.b, {
        onClick: l
      }))), (I || i !== w.a.favorites && i !== w.a.customProducts && i !== w.a.filters) && v.a.createElement("div", {
        className: "new-catalog__header-second-part"
      }, I && v.a.createElement(E.h, null), i !== w.a.favorites && i !== w.a.customProducts && i !== w.a.filters && v.a.createElement(v.a.Fragment, null, v.a.createElement(j, {
        changeInputSearch: f,
        clearInputSearch: p,
        handleInputSearchButtonClick: _,
        handleKeyPress: m,
        inputSearchValue: y,
        handleClickMana: g
      }), u.b.FILTERS && v.a.createElement(h.l, {
        title: "TOOLTIPS.FILTER",
        placement: "bottom"
      }, v.a.createElement(E.g, {
        primary: !0,
        onClick: T,
        dot: A.selectedFilters && A.selectedFilters.length > 0
      }, v.a.createElement(S.w, null))))))
    }
}, function(t, e, n) {
  "use strict";
  var r, i, o;
  n.d(e, "b", (function() {
      return r
    })), n.d(e, "a", (function() {
      return i
    })), n.d(e, "c", (function() {
      return o
    })),
    function(t) {
      t.sendFoto = "send_foto", t.openGallery = "gallery_open", t.selectRoom = "predefined_interior_selected", t.selectMyRoom = "custom_interior_selected", t.startRoomUpload = "custom_interior_start_upload", t.onClickUploudInterior = "custom_interior_selection_started", t.endRoomUpload = "photo_uploaded", t.errorRoomUpload = "error_photo_uploaded", t.customInteriorUploadError = "custom_interior_upload_error", t.openPrivacyPolicy = "privacy_policy_open", t.startCatalog = "catalog_start", t.selectSurface = "surface_select", t.unselectSurface = "surface_unselect", t.selectBrand = "brand_selected", t.selectCollection = "collection_selected", t.selectArticle = "article_selection", t.selectHome = "home", t.selectBackStep = "back", t.startSearch = "start_search", t.openMyRoom = "my_room_open", t.closeMyRoom = "my_room_close", t.changeBeforeAfterMode = "before-after", t.openDownloadView = "download_menu", t.closeDownloadView = "close_download_menu", t.downloadOriginal = "download_original", t.downloadResult = "download_result", t.downloadResultWithInfo = "download_result_with_info", t.clearSurfaces = "clear", t.launchFirstTime = "launch_first_time", t.sessionStart = "wizart_session_start", t.clickInfo = "info", t.clickClear = "clear", t.apply = "apply", t.shareImage = "share_image", t.rateTheImageStart = "rate_the_image_start", t.imageRated = "image_rated", t.createPhoto = "create", t.addToFavorite = "add_to_favorite", t.removeFromFavorite = "remove_from_favorite", t.openShoppingCart = "shopping_cart_open", t.closeShoppingCart = "shopping_cart_close", t.openInStore = "open_in_store", t.removeFromShoppingCart = "remove_from_shopping_cart", t.addToShoppingCart = "add_to_shopping_cart", t.increaseGoodsQuantity = "+1_item", t.reductionGoodsQuantity = "-1_item", t.wizartSessionFinish = "wizart_session_finish", t.manaImageSearch = "mana_start_search", t.manaImageUploaded = "mana_image_uploaded", t.manaImageUploadedError = "mana_image_uploaded_error", t["galleryСlosed"] = "gallery_closed_by_user", t.customTnteriorDeleted = "custom_interior_deleted", t.customInteriorRecognitionError = "custom_interior_recognition_error", t.backButtonClicked = "back_button_clicked", t.rotateFlooring = "rotate_flooring", t.layingPatternsMenu = "laying_patterns_menu", t.layingPatternsSelected = "laying_patterns_selected", t.favoriteOpen = "favorite_open", t.customProductsOpen = "custom_products_opened", t.favoriteClose = "favorite_close", t.filtersOpen = "filters_open", t.filtersClose = "filters_close", t.customInteriorRecognitionErrorUseanyway = "custom_interior_recognition_error_useanyway", t.customInteriorRecognitionErrorRetry = "custom_interior_recognition_error_retry", t.hideButtons = "hide_buttons", t.zoomImage = "zoom_image", t.disclaimerShown = "disclaimer_shown", t.disclaimerOk = "disclaimer_ok", t.disclaimerMenu = "disclaimer_menu", t.onboardingStarted = "onboarding_started", t.onboardingPassed = "onboarding_passed", t.errorMessageShown = "error_message_shown", t.logoClicked = "logo_clicked", t.filtersApplied = "filters_applied", t.filtersCleared = "filters_cleared", t.similarProductsClicked = "similar_products_clicked", t.similarProductsApplied = "similar_products_applied"
    }(r || (r = {})),
    function(t) {
      t.full = "full", t.minimized = "minimized"
    }(i || (i = {})),
    function(t) {
      t.popover = "popover", t.walls_button = "walls_button", t.roller = "roller"
    }(o || (o = {}))
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "generateQuery", (function() {
    return O
  })), n.d(e, "getArticlePage", (function() {
    return E
  })), n.d(e, "getArticles", (function() {
    return m
  })), n.d(e, "getFilteredArticles", (function() {
    return y
  })), n.d(e, "getArticleByQuery", (function() {
    return g
  })), n.d(e, "getArticlesByQuery", (function() {
    return T
  })), n.d(e, "getRecommendedProducts", (function() {
    return h
  })), n.d(e, "applyWallsData", (function() {
    return S
  })), n.d(e, "apply", (function() {
    return A
  })), n.d(e, "initSurfacesEnabled", (function() {
    return I
  })), n.d(e, "getFiltersBySurface", (function() {
    return C
  }));
  var r = n(11),
    i = n(31),
    o = n(1),
    a = n(113),
    c = n(2),
    u = n(18),
    l = n(34),
    s = n(35),
    d = n(38),
    f = n(5),
    p = n(50),
    _ = n.n(p),
    v = n(54),
    b = function() {
      return (b = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    O = function(t) {
      void 0 === t && (t = {});
      var e = o.b.CONTEXT ? b(b({}, t), {
        context: o.b.CONTEXT
      }) : b({}, t);
      return JSON.stringify(e)
    },
    E = function(t, e, n) {
      var r = O(n);
      return Object(i.a)(o.b.PIM_HOST + "/api/v2/public/collections/" + t + "/articles/" + e + "/pagination-page/?" + (n ? "q=" + r : "") + Object(f.i)(n ? "&" : "") + "\n  ", {
        Authorization: o.b.TOKEN
      })
    },
    m = function(t, e, n, r) {
      var c = O(r);
      return Object(i.a)(o.b.PIM_HOST + "/api/brands/" + e + "/collections/" + n + "/articles?page=" + t + (r ? "&q=" + c : "") + Object(f.i)("&"), {
        Authorization: o.b.TOKEN
      }).then((function(t) {
        return Object(a.a)(t)
      }))
    },
    y = function(t, e) {
      var n = o.b.CONTEXT ? b(b({}, e), {
          context: o.b.CONTEXT
        }) : b({}, e),
        r = n ? "&" + function(t) {
          return Object.keys(t).map((function(e) {
            return Array.isArray(t[e]) ? t[e].map((function(t, n) {
              return encodeURIComponent(e) + "[" + n + "]=" + encodeURIComponent(t)
            })).join("&") : encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
          })).join("&")
        }(n) : "";
      return Object(i.a)(o.b.PIM_HOST + "/api/articles/search?page=" + t + r + Object(f.i)("&"), {
        Authorization: o.b.TOKEN
      })
    },
    g = function(t) {
      if (Object(f.p)(t)) {
        var e = JSON.parse(t),
          n = "" + JSON.stringify({
            $and: [{
              $and: Object.keys(e).map((function(t) {
                return {
                  $eq: [t, e[t]]
                }
              }))
            }]
          });
        return y(1, {
          q: n
        }).then((function(t) {
          return t.data.length ? t : null
        }))
      }
      return Promise.resolve(null)
    },
    T = function(t, e, n) {
      void 0 === t && (t = 1), void 0 === n && (n = !1);
      var r = O(e);
      return Object(i.a)(o.b.PIM_HOST + "/api/articles?" + (t ? "page=" + t : "") + (e ? "&q=" + r : "") + (n ? "&no_limit=true" : "") + Object(f.i)("&"), {
        Authorization: o.b.TOKEN
      })
    },
    h = function(t, e) {
      var n = O(e);
      return Object(i.a)(o.b.PIM_HOST + "/api/v2.1/articles/" + t + "/recommender" + (e ? "?q=" + n : ""), {
        Authorization: o.b.TOKEN
      })
    },
    S = function(t) {
      var e, n = t.walls.map((function(t) {
        var e = {
          wall_id: t.wall_id,
          is_active: !!t.wallpaper,
          custom_rotation_angle: t.custom_rotation_angle
        };
        return t.wallpaper && (e.wallpaper = t.wallpaper), e
      }));
      return t.floor && t.floor.covering && (e = b(b({}, t.floor), {
        covering: t.floor.covering
      })), {
        id: t.uuid,
        image_path: t.image_path,
        walls: n,
        floor: e
      }
    },
    A = function(t, e, n, i, a, u) {
      void 0 === i && (i = !0);
      var l = S(t),
        s = JSON.stringify({
          room_data: {
            room: l
          }
        }),
        f = _()(s).toString();
      i && r.apply(t, e, n, a, u);
      var p = Object(d.c)(f);
      if (p && !o.b.DO_NOT_USE_CASHE) return Promise.resolve(p);
      var b, O = {
          method: "POST",
          headers: {
            Authorization: o.b.TOKEN,
            "Content-Type": "application/json",
            "device-token": o.b.USER_INDENTIFIER
          },
          body: s
        },
        E = o.b.APPLY_HOST + "/?resize=" + c.d.large + "&device=" + o.b.DEVICE.type;
        /*//xhevat
        console.log(o.b.CLIENT_IDENTIFIER);
        console.log(_());
        console.log(_()(o.b.CLIENT_IDENTIFIER));
        console.log(_()(o.b.CLIENT_IDENTIFIER).toString());*/
      return o.b.DO_NOT_USE_CASHE ? E += "&resources_cache=false" : E = E + "&hash=" + _()(o.b.CLIENT_IDENTIFIER).toString() + "-" + f, fetch(E, O).then((function(t) {
        if (b = t, t.status >= 400 && t.status <= 599) throw Object(v.a)({
          response: JSON.stringify(t),
          url: E,
          fetchData: JSON.stringify(O)
        }), Error(t.status);
        return t.text()
      })).then((function(t) {
        var e = "data:image/jpeg;base64," + t;
        return Object(d.e)({
          hash: f,
          image: e
        }), e
      })).catch((function(t) {
        var e = Number.isInteger(t) && +t || 500;
        return Object(v.a)({
          error: t,
          response: JSON.stringify(b),
          fetchData: JSON.stringify(O),
          url: E
        }), new Promise((function(t, n) {
          n({
            status: e,
            message: o.b.ERROR_MESSAGE
          })
        }))
      }))
    },
    I = function() {
      return function(t) {
        t(s.articlesActions.articleCommonActions.switchLoadingState(!0));
        var e = [c.b.floor, c.b.wall].map((function(t) {
          return function(t) {
            var e = O({
              type: t
            });
            return Object(i.a)(o.b.PIM_HOST + "/api/articles?q=" + e + Object(f.i)("&"), {
              Authorization: o.b.TOKEN
            })
          }(t)
        }));
        return t(Object(l.e)()), Promise.all(e).then((function(e) {
          var n;
          Object(o.a)(b(b({}, o.b), ((n = {})[c.i.FLOORS_ENABLED] = !!e[0].data.length, n[c.i.WALLS_ENABLED] = !!e[1].data.length, n))), t(Object(l.e)()), e[0].data.length && !e[1].data.length && t(Object(u.switchArticleType)(c.b.floor))
        }))
      }
    },
    C = function(t) {
      var e = O({
        type: t
      });
      return Object(i.a)(o.b.PIM_HOST + "/api/v2/public/product-filters?q=" + e + Object(f.i)("&"), {
        Authorization: o.b.TOKEN
      })
    }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "setMainView", (function() {
    return O
  })), n.d(e, "setPreviousView", (function() {
    return E
  })), n.d(e, "setArticleNavigation", (function() {
    return m
  })), n.d(e, "setArticleView", (function() {
    return y
  })), n.d(e, "setArticleNavigateFirstView", (function() {
    return g
  })), n.d(e, "articleNavigate", (function() {
    return T
  })), n.d(e, "openArticlesPicker", (function() {
    return h
  })), n.d(e, "closeArticleCatalog", (function() {
    return S
  })), n.d(e, "selectBackStep", (function() {
    return A
  })), n.d(e, "setFirstView", (function() {
    return I
  })), n.d(e, "resetToFirstNavigationView", (function() {
    return C
  })), n.d(e, "openCatalog", (function() {
    return R
  })), n.d(e, "selectFavoritesControl", (function() {
    return j
  })), n.d(e, "selectCustomProductControl", (function() {
    return L
  })), n.d(e, "changeIsCatalogOpen", (function() {
    return w
  })), n.d(e, "goToHomeArticlesView", (function() {
    return P
  }));
  var r = n(11),
    i = n(18),
    o = n(44),
    a = n(10),
    c = n(9),
    u = n(28),
    l = n(36),
    s = n(2),
    d = n(58),
    f = n(5),
    p = n(6),
    _ = n(21),
    v = n(85),
    b = function() {
      return (b = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    O = function(t) {
      return {
        type: a.ArticlesActionTypes.SET_MAIN_VIEW,
        payload: {
          view: t
        }
      }
    },
    E = function() {
      return {
        type: a.ArticlesActionTypes.SET_PREVIOUS_ARTICLE_VIEW
      }
    },
    m = function(t, e) {
      return {
        type: a.ArticlesActionTypes.SET_ARTICLE_NAVIGATION,
        payload: {
          view: t,
          history: e
        }
      }
    },
    y = function(t) {
      return {
        type: a.ArticlesActionTypes.SET_ARTICLE_VIEW,
        payload: {
          view: t
        }
      }
    },
    g = function() {
      return {
        type: a.ArticlesActionTypes.SET_CATALOG_FIRST_VIEW
      }
    },
    T = function(t) {
      return function(e) {
        e(y(t))
      }
    },
    h = function() {
      return function(t) {
        t(Object(l.a)(s.k.ArticlePicker)), t(Object(u.b)(!0))
      }
    },
    S = function() {
      return function(t, e) {
        var n = e().articles;
        "" === n.filters[n.type].name && n.navigation.current === c.a.search && t(Object(_.x)({
          type: n.type
        })), t(Object(u.a)())
      }
    },
    A = function() {
      return function(t, e) {
        var n = e(),
          u = n.articles,
          l = u.type,
          s = u.navigation,
          d = (u.filters, n.catalog),
          f = Object(v.getFiltersByArticleType)(e()),
          b = s.history.findIndex((function(t) {
            return t === s.current
          }));
        switch (s.current === c.a.search && (t(Object(o.setFilterName)("", l)), t(Object(o.changeSelectedFilters)([], l))), t(E()), s.current) {
          case c.a.search:
            t(Object(i.resetToInitialState)(a.ArticlesActionTypes.SEARCH_RESULTS_RESET_TO_INITIAL_STATE));
            break;
          case c.a.favorites:
            r.fireEvent(p.a.favoriteClose);
            break;
          case c.a.customProducts:
            d[l].steps.length || t(Object(_.u)())
        } - 1 !== b && b > 0 && s.history[b - 1] === c.a.search && 0 === f.selectedFilters.length && t(A())
      }
    },
    I = function() {
      return {
        type: a.ArticlesActionTypes.SET_FIRST_VIEW
      }
    },
    C = function() {
      return function(t, e) {
        t(I())
      }
    },
    R = function() {
      return function(t, e) {
        var n = e(),
          o = n.rooms,
          a = n.surfaces.currentSurfaces.find((function(t) {
            return t.surfaceType === s.b.floor
          })),
          c = Object(f.e)();
        Object(f.r)(b(b({}, c), {
          isCatalogOpen: !0
        })), t(w()), o.selectedRoom.walls.length || n.articles.type === s.b.floor ? o.selectedRoom.walls.length && n.articles.type !== s.b.wall && !(null == a ? void 0 : a.isActive) && (t(Object(i.switchArticleType)(s.b.wall)), t(C()), t(Object(_.u)())) : (t(Object(i.switchArticleType)(s.b.floor)), t(Object(_.u)())), t(h()), r.startCatalog(!0, s.b.wall)
      }
    },
    j = function() {
      return function(t, e) {
        e().articles.navigation.current !== c.a.favorites && (t(Object(d.ensureFavoritesExists)()), t(T(c.a.favorites)), r.fireEvent(p.a.favoriteOpen))
      }
    },
    L = function() {
      return function(t, e) {
        e().articles.navigation.current !== c.a.customProducts && (t(T(c.a.customProducts)), r.fireEvent(p.a.customProductsOpen))
      }
    },
    w = function() {
      return {
        type: a.ArticlesActionTypes.CHANGE_IS_OPEN_CATALOG
      }
    },
    P = function() {
      return {
        type: a.ArticlesActionTypes.GO_TO_HOME_VIEW
      }
    }
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return o
  }));
  var r = n(2),
    i = n(34),
    o = function(t, e) {
      console.log(t), t.status !== r.h.SERVER_ERROR && t.status !== r.h.UNAUTHORIZAED && t.status !== r.h.BAD_REQUEST && t.status ? t.status === r.h.TOO_MANY_REQUESTS && e(Object(i.h)(t.status, !0)) : e(Object(i.h)(t.status, !0))
    }
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return o
  })), n.d(e, "c", (function() {
    return a
  })), n.d(e, "b", (function() {
    return c
  }));
  var r = n(50),
    i = n.n(r),
    o = function(t) {
      var e = function() {
        if (window.document && window.document.cookie) try {
          return window.document.cookie.split("; ").reduce((function(t, e) {
            var n = e.split("="),
              r = n[0],
              i = n[1];
            return t[r] = i, t
          }), {})
        } catch (t) {
          return null
        }
        return null
      }();
      return e && e[t] || null
    },
    a = function(t, e) {
      if (window.document && window.document.cookie) try {
        window.document.cookie = t + "=" + e + "; Max-Age=2592000"
      } catch (t) {
        console.error(t)
      }
    },
    c = function(t) {
      return i()(t).toString()
    }
}, function(t, e, n) {
  "use strict";
  n.d(e, "b", (function() {
    return u
  })), n.d(e, "a", (function() {
    return l
  }));
  var r = n(2),
    i = n(36),
    o = n(116),
    a = n(52),
    c = n(6),
    u = function(t) {
      return {
        type: o.a,
        payload: {
          isOpen: t
        }
      }
    },
    l = function() {
      return function(t, e) {
        var n = e().navigation.view;
        n !== r.k.ShoppingCart && n !== r.k.RoomPicker || t(Object(a.e)()), n === r.k.ShoppingCart ? c.c.fireEvent(c.a.closeShoppingCart) : n === r.k.ArticlesInfo && c.c.fireEvent(c.a.closeMyRoom), t(u(!1)), setTimeout((function() {
          return t(Object(i.a)(r.k.Main))
        }), 225)
      }
    }
}, function(t, e, n) {
  "use strict";
  n.d(e, "d", (function() {
    return r
  })), n.d(e, "e", (function() {
    return i
  })), n.d(e, "a", (function() {
    return o
  })), n.d(e, "c", (function() {
    return a
  })), n.d(e, "f", (function() {
    return c
  })), n.d(e, "j", (function() {
    return u
  })), n.d(e, "g", (function() {
    return l
  })), n.d(e, "b", (function() {
    return s
  })), n.d(e, "h", (function() {
    return d
  })), n.d(e, "i", (function() {
    return f
  }));
  var r = "[ROOMS] LOAD_ROOMS",
    i = "[ROOMS] SELECT_ROOM",
    o = "[ROOMS] ADD_ROOM",
    a = "[ROOMS] DELETE_ROOM",
    c = "[ROOMS] SET_APPLY_ARTICLE_RESULT",
    u = "[ROOMS] SWITCH_ROOM_LOAD_ERROR",
    l = "[ROOMS] SET_COUNT_MY_INTERIORS",
    s = "[ROOMS] CHANGE_IS_ROOM_LIST_LOADING",
    d = "[LOAD ROOM] SET_PHOTO_QUALITY_ERROR",
    f = "[LOAD ROOM] SET_PREVIEW_PHOTO_LOAD"
}, , function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return u
  })), n.d(e, "b", (function() {
    return l
  }));
  var r = n(1),
    i = n(54),
    o = function() {
      return (o = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    a = function(t, e, n, r) {
      return new(n || (n = Promise))((function(i, o) {
        function a(t) {
          try {
            u(r.next(t))
          } catch (t) {
            o(t)
          }
        }

        function c(t) {
          try {
            u(r.throw(t))
          } catch (t) {
            o(t)
          }
        }

        function u(t) {
          var e;
          t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
            t(e)
          }))).then(a, c)
        }
        u((r = r.apply(t, e || [])).next())
      }))
    },
    c = function(t, e) {
      var n, r, i, o, a = {
        label: 0,
        sent: function() {
          if (1 & i[0]) throw i[1];
          return i[1]
        },
        trys: [],
        ops: []
      };
      return o = {
        next: c(0),
        throw: c(1),
        return: c(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this
      }), o;

      function c(o) {
        return function(c) {
          return function(o) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; a;) try {
              if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
              switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                case 0:
                case 1:
                  i = o;
                  break;
                case 4:
                  return a.label++, {
                    value: o[1],
                    done: !1
                  };
                case 5:
                  a.label++, r = o[1], o = [0];
                  continue;
                case 7:
                  o = a.ops.pop(), a.trys.pop();
                  continue;
                default:
                  if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                    a = 0;
                    continue
                  }
                  if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                    a.label = o[1];
                    break
                  }
                  if (6 === o[0] && a.label < i[1]) {
                    a.label = i[1], i = o;
                    break
                  }
                  if (i && a.label < i[2]) {
                    a.label = i[2], a.ops.push(o);
                    break
                  }
                  i[2] && a.ops.pop(), a.trys.pop();
                  continue
              }
              o = e.call(t, a)
            } catch (t) {
              o = [6, t], r = 0
            } finally {
              n = i = 0
            }
            if (5 & o[0]) throw o[1];
            return {
              value: o[0] ? o[1] : void 0,
              done: !0
            }
          }([o, c])
        }
      }
    },
    u = function(t, e) {
      var n;
      void 0 === e && (e = {});
      var a = {
        headers: o({
          Accept: "application/json"
        }, e)
      };
      return fetch(t, a).then((function(t) {
        return (n = t).json()
      })).then((function(e) {
        return (null == n ? void 0 : n.status) >= 400 && (null == n ? void 0 : n.status) <= 599 ? (Object(i.a)({
          response: JSON.stringify(n),
          fetchData: JSON.stringify(a),
          url: t
        }), Promise.reject({
          status: n.status,
          message: r.b.ERROR_MESSAGE
        })) : Promise.resolve(e)
      })).catch((function(e) {
        return Object(i.a)({
          error: e,
          response: JSON.stringify(n),
          fetchData: JSON.stringify(a),
          url: t
        }), Promise.reject({
          status: (null == n ? void 0 : n.status) || 500,
          message: r.b.ERROR_MESSAGE
        })
      }))
    },
    l = function(t, e, n) {
      var u;
      void 0 === n && (n = {});
      var l = {
        method: "POST",
        headers: o({
          Accept: "application/json"
        }, n),
        body: e
      };
      return fetch(t, l).then((function(t) {
        return a(void 0, void 0, void 0, (function() {
          var e;
          return c(this, (function(n) {
            switch (n.label) {
              case 0:
                return [4, (u = t).text()];
              case 1:
                return [2, "" === (e = n.sent()) ? {} : JSON.parse(e)]
            }
          }))
        }))
      })).then((function(e) {
        return new Promise((function(n, o) {
          return u.status >= 400 && u.status <= 599 ? (Object(i.a)({
            response: JSON.stringify(u),
            url: t,
            fetchData: JSON.stringify(l)
          }), o({
            status: u.status,
            message: r.b.ERROR_MESSAGE
          })) : n(e)
        }))
      }))
    }
}, , , function(t, e, n) {
  "use strict";
  n.d(e, "d", (function() {
    return l
  })), n.d(e, "f", (function() {
    return s
  })), n.d(e, "e", (function() {
    return d
  })), n.d(e, "a", (function() {
    return f
  })), n.d(e, "c", (function() {
    return p
  })), n.d(e, "g", (function() {
    return _
  })), n.d(e, "b", (function() {
    return v
  })), n.d(e, "h", (function() {
    return b
  }));
  var r = n(5),
    i = n(43),
    o = n(12),
    a = n(26),
    c = function(t, e, n, r) {
      return new(n || (n = Promise))((function(i, o) {
        function a(t) {
          try {
            u(r.next(t))
          } catch (t) {
            o(t)
          }
        }

        function c(t) {
          try {
            u(r.throw(t))
          } catch (t) {
            o(t)
          }
        }

        function u(t) {
          var e;
          t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
            t(e)
          }))).then(a, c)
        }
        u((r = r.apply(t, e || [])).next())
      }))
    },
    u = function(t, e) {
      var n, r, i, o, a = {
        label: 0,
        sent: function() {
          if (1 & i[0]) throw i[1];
          return i[1]
        },
        trys: [],
        ops: []
      };
      return o = {
        next: c(0),
        throw: c(1),
        return: c(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this
      }), o;

      function c(o) {
        return function(c) {
          return function(o) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; a;) try {
              if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
              switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                case 0:
                case 1:
                  i = o;
                  break;
                case 4:
                  return a.label++, {
                    value: o[1],
                    done: !1
                  };
                case 5:
                  a.label++, r = o[1], o = [0];
                  continue;
                case 7:
                  o = a.ops.pop(), a.trys.pop();
                  continue;
                default:
                  if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                    a = 0;
                    continue
                  }
                  if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                    a.label = o[1];
                    break
                  }
                  if (6 === o[0] && a.label < i[1]) {
                    a.label = i[1], i = o;
                    break
                  }
                  if (i && a.label < i[2]) {
                    a.label = i[2], a.ops.push(o);
                    break
                  }
                  i[2] && a.ops.pop(), a.trys.pop();
                  continue
              }
              o = e.call(t, a)
            } catch (t) {
              o = [6, t], r = 0
            } finally {
              n = i = 0
            }
            if (5 & o[0]) throw o[1];
            return {
              value: o[0] ? o[1] : void 0,
              done: !0
            }
          }([o, c])
        }
      }
    },
    l = function() {
      return function(t) {
        var e = Object(r.k)(),
          n = document.documentElement,
          i = n.clientHeight,
          a = n.clientWidth;
        n.style.setProperty("--app-height", i + "px"), t({
          type: o.l,
          payload: {
            orientation: e,
            appWidth: a,
            appHeight: i
          }
        })
      }
    },
    s = function(t) {
      return function(e) {
        e({
          type: o.q,
          payload: {
            isProcessing: t
          }
        })
      }
    },
    d = function() {
      return function(t) {
        t({
          type: o.r
        })
      }
    },
    f = function() {
      return function(t, e) {
        return c(void 0, void 0, void 0, (function() {
          return u(this, (function(n) {
            switch (n.label) {
              case 0:
                return e().auxiliaries.vocabulary ? [3, 2] : [4, t((function(t) {
                  return Object(i.c)().then((function(e) {
                    return t({
                      type: o.n,
                      payload: {
                        vocabulary: e
                      }
                    })
                  })).catch((function(e) {
                    Object(a.a)(e, t)
                  }))
                }))];
              case 1:
                n.sent(), n.label = 2;
              case 2:
                return [2]
            }
          }))
        }))
      }
    },
    p = function(t) {
      return {
        type: o.j,
        payload: {
          device: t
        }
      }
    },
    _ = function(t) {
      return function(e) {
        e({
          type: o.s,
          payload: {
            showInitialImagePath: t
          }
        })
      }
    },
    v = function(t) {
      return function(e) {
        return e({
          type: o.d,
          payload: {
            backButtonAction: t
          }
        })
      }
    },
    b = function(t, e) {
      return void 0 === t && (t = null), void 0 === e && (e = !1),
        function(n) {
          return n({
            type: o.t,
            payload: {
              statusCode: t,
              isError: e
            }
          })
        }
    }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "navigationSelectors", (function() {
    return a
  })), n.d(e, "articleSelectors", (function() {
    return c
  })), n.d(e, "favoriteSelectors", (function() {
    return u
  })), n.d(e, "patternSelectors", (function() {
    return r
  })), n.d(e, "filters", (function() {
    return p
  })), n.d(e, "ArticlesActionTypes", (function() {
    return _.ArticlesActionTypes
  })), n.d(e, "articlesActions", (function() {
    return o
  })), n.d(e, "constants", (function() {
    return _
  }));
  var r = {};
  n.r(r), n.d(r, "getIsOpenPatternPopup", (function() {
    return d
  })), n.d(r, "getSelectedPattern", (function() {
    return f
  }));
  var i = {};
  n.r(i), n.d(i, "onAddManaImage", (function() {
    return w
  }));
  var o = {};
  n.r(o), n.d(o, "patternsActions", (function() {
    return v
  })), n.d(o, "scrollActions", (function() {
    return b
  })), n.d(o, "favoritesActions", (function() {
    return O
  })), n.d(o, "applyActions", (function() {
    return E
  })), n.d(o, "articleCommonActions", (function() {
    return m
  })), n.d(o, "filterActions", (function() {
    return y
  })), n.d(o, "manaActions", (function() {
    return i
  })), n.d(o, "navigationActions", (function() {
    return g
  }));
  var a = n(82),
    c = n(40),
    u = n(71),
    l = n(7),
    s = n(111),
    d = Object(l.a)([c.getArticlesStore], (function(t) {
      return t.isOpenPatternPopup
    })),
    f = Object(l.a)([s.d], (function(t) {
      return t
    })),
    p = n(85),
    _ = n(10),
    v = n(110),
    b = n(84),
    O = n(58),
    E = n(42),
    m = n(18),
    y = n(44),
    g = n(25),
    T = n(43),
    h = n(1),
    S = n(9),
    A = n(113),
    I = n(5),
    C = n(6),
    R = n(24),
    j = n(54),
    L = function() {
      return (L = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    w = function(t) {
      return function(e, n) {
        var r = n().articles;
        e(o.articleCommonActions.switchLoadingState(!0));
        var i = {};
        i.type = r.type;
        var a = new FormData;
        a.append("image", t);
        var c = Object(R.generateQuery)(i);
        c && Object.keys(JSON.parse(c)).length > 0 && a.append("q", c), e(o.articleCommonActions.resetToInitialState(_.ArticlesActionTypes.SEARCH_RESULTS_RESET_TO_INITIAL_STATE)), r.navigation.current !== S.a.search && e(o.navigationActions.articleNavigate(S.a.search)), C.c.fireEvent(C.a.manaImageUploaded);
        var u, l = h.b.PIM_HOST + "/api/v2/public/articles/search/image" + Object(I.i)("?");
        return Object(T.d)(l, a, {
          Authorization: h.b.TOKEN,
          "device-token": h.b.USER_INDENTIFIER
        }).then((function(t) {
          u = t;
          var n = {
            data: t.data.map((function(t) {
              return L(L({}, t), {
                collection_uuid: t.collection.uuid,
                brand_uuid: t.brand.uuid,
                mana: !0
              })
            })),
            meta: {
              current_page: 1,
              from: 1,
              last_page: 1,
              per_page: t.data.length,
              to: t.data.length,
              total: t.data.length
            }
          };
          e(o.articleCommonActions.loadSuccess(_.ArticlesActionTypes.LOAD_SEARCH_RESULTS_SUCCESS, Object(A.a)(n)))
        })).catch((function(t) {
          Object(j.a)({
            error: t,
            url: l,
            data: JSON.stringify(a),
            res: u
          }), C.c.fireEvent(C.a.manaImageUploadedError)
        })).finally((function() {
          e(o.articleCommonActions.switchLoadingState(!1))
        }))
      }
    }
}, function(t, e, n) {
  "use strict";
  n.d(e, "b", (function() {
    return u
  })), n.d(e, "a", (function() {
    return l
  }));
  var r = n(2),
    i = n(12),
    o = n(6),
    a = function(t) {
      return {
        type: i.m,
        payload: {
          view: t,
          isLogoVisible: !0,
          isMenuVisible: !0,
          isLeftMenuVisible: !0,
          isModalWindow: !1,
          isReturnArrowVisible: !0,
          isControlsVisible: !0
        }
      }
    },
    c = function() {
      return {
        type: i.m,
        payload: {
          view: r.k.Main,
          isHeaderVisible: !0,
          isLogoVisible: !0,
          isMenuVisible: !0,
          isLeftMenuVisible: !0,
          isModalWindow: !1,
          isReturnArrowVisible: !0,
          isRollerVisible: !0,
          isControlsVisible: !0
        }
      }
    },
    u = function(t) {
      return void 0 === t && (t = {}),
        function(e, n) {
          var r = n().navigation;
          t.sendAnalytics && o.c.fireEvent(o.a.hideButtons, {
            additional_data: {
              eventValue: {
                hide: r.isRollerVisible
              }
            }
          }), e({
            type: i.m,
            payload: {
              isHeaderVisible: !r.isHeaderVisible,
              isLeftMenuVisible: !r.isLeftMenuVisible,
              isRollerVisible: !r.isRollerVisible,
              isControlsVisible: !r.isControlsVisible
            }
          })
        }
    },
    l = function(t) {
      return function(e) {
        switch (t) {
          case r.k.Main:
            e(c());
            break;
          case r.k.RoomPicker:
          case r.k.ShoppingCart:
          case r.k.ArticlesInfo:
          case r.k.ArticlePicker:
          case r.k.Download:
            e(a(t));
            break;
          default:
            e(c())
        }
      }
    }
}, , function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return i.a
  })), n.d(e, "b", (function() {
    return i.b
  })), n.d(e, "e", (function() {
    return a
  })), n.d(e, "c", (function() {
    return c
  })), n.d(e, "d", (function() {
    return r
  }));
  var r = n(106),
    i = n(41),
    o = [],
    a = function(t) {
      o.push(t)
    },
    c = function(t) {
      var e = o.find((function(e) {
        return e.hash === t
      }));
      return e ? e.image : null
    }
}, , function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "getArticlesStore", (function() {
    return a
  })), n.d(e, "getArticleType", (function() {
    return c
  })), n.d(e, "getApplyLoading", (function() {
    return u
  })), n.d(e, "getSearchResultsState", (function() {
    return l
  })), n.d(e, "getSearchResults", (function() {
    return s
  })), n.d(e, "getSearchResultTotal", (function() {
    return d
  })), n.d(e, "getIsLoading", (function() {
    return f
  })), n.d(e, "getInitArticle", (function() {
    return p
  })), n.d(e, "getInitArticleNavigationIsLoading", (function() {
    return _
  })), n.d(e, "getCountColumns", (function() {
    return v
  })), n.d(e, "getFilterNameByArticleType", (function() {
    return b
  }));
  var r = n(7),
    i = n(13),
    o = n(109),
    a = function(t) {
      return t.articles
    },
    c = Object(r.a)(a, (function(t) {
      return t.type
    })),
    u = Object(r.a)(a, (function(t) {
      return t.isApplyLoading
    })),
    l = Object(r.a)(a, (function(t) {
      return t.searchResults
    })),
    s = Object(r.a)(l, (function(t) {
      return t
    })),
    d = Object(r.a)(l, (function(t) {
      var e;
      return null === (e = null == t ? void 0 : t.meta) || void 0 === e ? void 0 : e.total
    })),
    f = Object(r.a)(a, (function(t) {
      return t.isLoading
    })),
    p = Object(r.a)(a, (function(t) {
      return t.initArticle
    })),
    _ = Object(r.a)(a, (function(t) {
      return t.isCatalogInitWithArticle
    })),
    v = Object(r.a)([i.e, i.h], (function(t, e) {
      return Object(o.a)(t, e)
    })),
    b = Object(r.a)(a, (function(t) {
      return t.filters[t.type].name
    }))
}, function(t, e, n) {
  "use strict";
  var r, i;
  n.d(e, "a", (function() {
      return r
    })), n.d(e, "b", (function() {
      return i
    })),
    function(t) {
      t.S = "s", t.M = "m", t.L = "l", t.XL = "xl"
    }(r || (r = {})),
    function(t) {
      t.carpetTile = "carpet_tile", t.rug = "rug"
    }(i || (i = {}))
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "applyArticleSuccess", (function() {
    return C
  })), n.d(e, "changeFloorRotation", (function() {
    return R
  })), n.d(e, "switchApplyLoading", (function() {
    return j
  })), n.d(e, "resetOverlay", (function() {
    return w
  })), n.d(e, "applyArticlesToRoom", (function() {
    return P
  })), n.d(e, "applyArticles", (function() {
    return N
  })), n.d(e, "performApply", (function() {
    return k
  })), n.d(e, "selectArticleItem", (function() {
    return F
  })), n.d(e, "clearApplyArticles", (function() {
    return D
  }));
  var r = n(11),
    i = n(23),
    o = n(24),
    a = n(10),
    c = n(9),
    u = Math.PI / 4,
    l = Math.PI / 2,
    s = function(t) {
      return t ? t % l == 0 ? l * (t / 90) : u * (t / 45) : 0
    },
    d = n(119),
    f = n(14),
    p = n(12),
    _ = n(26),
    v = n(2),
    b = n(29),
    O = n(52),
    E = n(110),
    m = n(21),
    y = n(19),
    g = n(54),
    T = n(47),
    h = n(41),
    S = n(5),
    A = function() {
      return (A = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    I = function(t, e, n) {
      if (n || 2 === arguments.length)
        for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
      return t.concat(r || Array.prototype.slice.call(e))
    },
    C = function(t) {
      return {
        type: b.f,
        payload: {
          overlayResult: t
        }
      }
    },
    R = function(t, e, n) {
      return {
        type: p.a,
        payload: {
          rotation_angle: t,
          surface: e,
          applyForAll: n
        }
      }
    },
    j = function(t) {
      return {
        type: a.ArticlesActionTypes.SWITCH_APPLY_LOADING,
        payload: {
          isLoading: t
        }
      }
    },
    L = function(t, e, n, r, i, a) {
      return function(c) {
        return Object(o.apply)(t, e, n, r, i, a).then((function(e) {
          c(C({
            id: t.uuid,
            src: e
          })), c(Object(f.j)(!1)), c(j(!1))
        })).catch((function(t) {
          Object(g.a)({
            error: t
          }), c(Object(f.j)(!1)), c(j(!1)), Object(_.a)(t, c)
        }))
      }
    },
    w = function() {
      return function(t, e) {
        r.fireEvent(i.b.clearSurfaces), t(Object(f.j)(!0)), t(j(!0));
        var n = e(),
          o = n.rooms,
          a = n.surfaces,
          c = n.catalog,
          u = a.currentSurfaces.filter((function(t) {
            return t.isActive
          }));
        if (c.lastSelectedProduct && c.lastSelectedProduct.product_type.code === h.b.rug && (t(Object(m.w)()), t(Object(f.i)(!0))), 0 === u.length || a.currentSurfaces.length === u.length) return t(C(null)), t(Object(f.j)(!1)), t(j(!1)), t(Object(f.d)(o.selectedRoom)), void t(Object(m.w)());
        var l = a.currentSurfaces.map((function(t) {
          var e = A({}, t);
          return t.isActive && (e.product = null, e.isActiveSettings = !1), e
        }));
        if (t({
            type: p.u,
            payload: {
              surfaces: l
            }
          }), 0 === l.reduce((function(t, e) {
            return t + (e.product ? 1 : 0)
          }), 0)) t(C(null)), t(Object(f.j)(!1)), t(j(!1)), t(Object(m.w)());
        else {
          l.map((function(t) {
            return t.product
          })).includes(c.lastSelectedProduct) || t(Object(m.w)());
          var s = P({
            room: o.selectedRoom,
            surfaces: I([], l, !0)
          });
          t(L(s, null, null, !1, !1, !1))
        }
        t(Object(d.b)())
      }
    },
    P = function(t) {
      var e, n, r, i, o, a, c = t.room,
        u = t.surfaces,
        l = A({}, c),
        d = u.find((function(t) {
          return t.surfaceType === v.b.floor
        }));
      if (d && d.product && d.product.product_type.code !== h.b.rug) {
        var f = s(d.custom_rotation_angle || c.floor.custom_rotation_angle),
          p = null;
        d.selectedPattern ? p = null === (r = null === (n = null === (e = d.product) || void 0 === e ? void 0 : e.scene_data) || void 0 === n ? void 0 : n.data) || void 0 === r ? void 0 : r.find((function(t) {
          return t.code === d.selectedPattern.laying_pattern_type
        })) : (null === (a = null === (o = null === (i = d.product) || void 0 === i ? void 0 : i.scene_data) || void 0 === o ? void 0 : o.data) || void 0 === a ? void 0 : a.length) > 1 && (p = d.product.scene_data.data.find((function(t) {
          return t.is_default
        }))), l.floor = A(A({}, c.floor), {
          covering: A(A({}, d.product), {
            scene_data: p ? {
              data: [p]
            } : d.product.scene_data
          }),
          custom_rotation_angle: f
        })
      }
      return l.walls = c.walls.map((function(t) {
        var e, n, r, i, o, a, c, l = u.find((function(e) {
            return e.id === t.wall_id && e.surfaceType === v.b.wall
          })),
          d = null;
        return l && l.selectedPattern ? d = null === (r = null === (n = null === (e = l.product) || void 0 === e ? void 0 : e.scene_data) || void 0 === n ? void 0 : n.data) || void 0 === r ? void 0 : r.find((function(t) {
          return t.code === l.selectedPattern.laying_pattern_type
        })) : l && (null === (a = null === (o = null === (i = null == l ? void 0 : l.product) || void 0 === i ? void 0 : i.scene_data) || void 0 === o ? void 0 : o.data) || void 0 === a ? void 0 : a.length) > 1 && (d = l.product.scene_data.data.find((function(t) {
          return t.is_default
        }))), A(A({}, t), {
          wallpaper: (null == l ? void 0 : l.product) ? A(A({}, l.product), {
            scene_data: d ? {
              data: [d]
            } : null === (c = l.product) || void 0 === c ? void 0 : c.scene_data
          }) : null,
          isActive: !!(null == l ? void 0 : l.product),
          custom_rotation_angle: s(l.custom_rotation_angle)
        })
      })), l
    },
    N = function(t, e) {
      return function(n, r) {
        var i = r(),
          o = i.rooms,
          a = i.surfaces,
          u = (i.catalog, i.articles),
          l = P({
            room: o.selectedRoom,
            surfaces: I([], a.currentSurfaces, !0)
          });
        n(L(l, t, e, !0, u.navigation.current === c.a.search, u.navigation.current === c.a.search && u.filters[e].selectedFilters && u.filters[e].selectedFilters.length > 0))
      }
    },
    k = function(t) {
      var e = t.sendAnalytics;
      return function(t, n) {
        var r = n(),
          i = r.rooms,
          o = r.surfaces,
          a = P({
            room: i.selectedRoom,
            surfaces: o.currentSurfaces
          });
        t(Object(f.j)(!0)), t(L(a, null, null, e, !1, !1))
      }
    },
    F = function(t) {
      var e = t.article,
        n = t.articleType,
        o = t.catalogType,
        a = void 0 === o ? i.a.minimized : o,
        u = t.isInitProduct,
        l = void 0 !== u && u;
      return function(t, i) {
        var o = i(),
          u = o.articles.navigation,
          s = o.rooms,
          p = Object(T.c)(o),
          _ = Object(S.j)(p);
        (e.product_type.code === h.b.rug || _.includes(h.b.rug)) && (t(C(null)), t(Object(f.d)(s.selectedRoom))), t(j(!0)), t(Object(f.j)(!0));
        var b = Object(m.g)(o);
        o.navigation.view === v.k.ShoppingCart && t(Object(O.e)()), t(Object(f.b)(!0)), t(Object(f.a)(e, n, !1)), e.product_type.code !== h.b.rug && t(N(e, n)), t(Object(d.b)()), u.current === c.a.favorites || u.current === c.a.search ? r.selectFoundArticle(e) : b !== y.a.products || l || r.selectArticle(e, a)
      }
    },
    D = function() {
      return function(t) {
        t(C(null)), t(Object(E.resetSelectedPatterns)())
      }
    }
}, function(t, e, n) {
  "use strict";
  n.d(e, "c", (function() {
    return a
  })), n.d(e, "b", (function() {
    return c
  })), n.d(e, "a", (function() {
    return i.a
  })), n.d(e, "d", (function() {
    return i.b
  }));
  var r = n(1),
    i = n(31),
    o = n(5),
    a = function() {
      return Object(i.a)(r.b.PIM_HOST + "/api/vocabulary" + Object(o.i)("?"), {
        Authorization: r.b.TOKEN
      })
    },
    c = function() {
      return Object(i.a)(r.b.PIM_HOST + "/api/translations/" + r.b.LOCALE, {})
    }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "setFiltersLoading", (function() {
    return _
  })), n.d(e, "resetSelectedFilters", (function() {
    return v
  })), n.d(e, "setFilterList", (function() {
    return b
  })), n.d(e, "changeSelectedFilters", (function() {
    return O
  })), n.d(e, "setFilterName", (function() {
    return E
  })), n.d(e, "loadMoreFilteredArticles", (function() {
    return m
  })), n.d(e, "makekeFilterQuery", (function() {
    return y
  })), n.d(e, "makeFilterFetch", (function() {
    return g
  })), n.d(e, "changeFilterName", (function() {
    return T
  }));
  var r = n(9),
    i = n(24),
    o = n(10),
    a = n(18),
    c = n(25),
    u = n(26),
    l = n(11),
    s = n(22),
    d = n(6),
    f = n(99),
    p = function() {
      return (p = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    _ = function(t) {
      return {
        type: o.ArticlesActionTypes.SET_FILTERS_LOADING,
        payload: {
          loading: t
        }
      }
    },
    v = function(t) {
      return {
        type: o.ArticlesActionTypes.RESET_SELECTED_FILTERS,
        payload: {
          type: t
        }
      }
    },
    b = function(t, e) {
      return {
        type: o.ArticlesActionTypes.SET_FILTER_LIST,
        payload: {
          filters: t,
          type: e
        }
      }
    },
    O = function(t, e) {
      return {
        type: o.ArticlesActionTypes.CHANGE_SELECTED_FILTERS,
        payload: {
          selectedFilters: t,
          type: e
        }
      }
    },
    E = function(t, e) {
      return {
        type: o.ArticlesActionTypes.SET_FILTER_NAME,
        payload: {
          name: t,
          type: e
        }
      }
    },
    m = function() {
      return function(t, e) {
        var n = e().articles,
          r = Object(f.b)(n.filters[n.type].selectedFilters),
          c = p({
            type: n.type
          }, r.reduce((function(t, e) {
            return t[e.code] = e.data, t
          }), {}));
        n.filters[n.type].name.length > 0 && (c.q = "" + JSON.stringify({
          $or: [{
            $like: ["name", n.filters[n.type].name]
          }, {
            $like: ["vendor_code", n.filters[n.type].name]
          }]
        })), t(Object(a.switchLoadingState)(!0)), Object(i.getFilteredArticles)(n.searchResults.meta.current_page + 1, c).then((function(e) {
          t(Object(a.loadSuccess)(o.ArticlesActionTypes.LOAD_SEARCH_RESULTS_SUCCESS, e))
        })).catch((function(e) {
          Object(u.a)(e, t)
        })).finally((function() {
          return t(Object(a.switchLoadingState)(!1))
        }))
      }
    },
    y = function(t, e, n) {
      void 0 === n && (n = []);
      var r = p({
        type: t
      }, n.reduce((function(t, e) {
        return t[e.code] = e.data, t
      }), {}));
      return e.length > 0 && (r.q = "" + JSON.stringify({
        $or: [{
          $like: ["name", e]
        }, {
          $like: ["vendor_code", e]
        }]
      })), r
    },
    g = function(t, e, n) {
      e(Object(a.switchLoadingState)(!0)), Object(i.getFilteredArticles)(1, t).then((function(t) {
        e(Object(a.loadSuccess)(o.ArticlesActionTypes.LOAD_SEARCH_RESULTS_SUCCESS, t))
      })).catch((function(t) {
        Object(u.a)(t, e)
      })).finally((function() {
        e(Object(a.switchLoadingState)(!1)), n && n()
      }))
    },
    T = function(t, e) {
      return function(n, i) {
        var u = i().articles;
        if (n(Object(a.setIsFilterKeyPress)(!0)), !Object(s.isNotValidSearchQuery)(t) && t.length) {
          n(E(t, e)), l.fireEvent(d.a.startSearch, {
            additional_data: {
              eventValue: {
                search_input: t
              }
            }
          });
          var p = y(e, t, Object(f.b)(u.filters[e].selectedFilters));
          n(Object(a.resetToInitialState)(o.ArticlesActionTypes.SEARCH_RESULTS_RESET_TO_INITIAL_STATE)), u.navigation.current !== r.a.search && n(Object(c.articleNavigate)(r.a.search)), g(p, n)
        }
      }
    }
}, , function(t, e, n) {
  "use strict";
  var r, i;
  n.d(e, "b", (function() {
      return r
    })), n.d(e, "a", (function() {
      return i
    })),
    function(t) {
      t[t.MyInteriors = 1] = "MyInteriors", t[t.LivingRoom = 5] = "LivingRoom"
    }(r || (r = {})),
    function(t) {
      t.badTargetConfidence = "badTargetConfidence", t.blurryConfidence = "blurryConfidence", t.darkConfidence = "darkConfidence", t.noisyConfidence = "noisyConfidence", t.surfaceRecognized = "surfaceRecognized"
    }(i || (i = {}))
}, function(t, e, n) {
  "use strict";
  n.d(e, "g", (function() {
    return a
  })), n.d(e, "f", (function() {
    return c
  })), n.d(e, "e", (function() {
    return u
  })), n.d(e, "a", (function() {
    return s
  })), n.d(e, "h", (function() {
    return d
  })), n.d(e, "b", (function() {
    return f
  })), n.d(e, "c", (function() {
    return p
  })), n.d(e, "d", (function() {
    return _
  }));
  var r = n(2),
    i = n(7),
    o = function(t) {
      return t.surfaces
    },
    a = Object(i.a)(o, (function(t) {
      return t.currentSurfaces
    })),
    c = Object(i.a)(o, (function(t) {
      return t.onlyInteractiveView
    })),
    u = Object(i.a)(o, (function(t) {
      return t.interactiveSurfaceHaveBeenCleared
    })),
    l = (Object(i.a)(a, (function(t) {
      return t.find((function(t) {
        return t.surfaceType === r.b.floor
      }))
    })), Object(i.a)([a], (function(t) {
      return t.filter((function(t) {
        return t.product
      }))
    }))),
    s = Object(i.a)([a], (function(t) {
      return t.filter((function(t) {
        return t.isActive
      }))
    })),
    d = Object(i.a)([a], (function(t) {
      return t.filter((function(t) {
        return t.product && t.isCustomProduct
      }))
    })),
    f = Object(i.a)([a], (function(t) {
      return t.filter((function(t) {
        return t.product && t.isActive
      }))
    })),
    p = (Object(i.a)([a], (function(t) {
      return t.filter((function(t) {
        return t.product && t.isActive && t.isCustomProduct
      }))
    })), Object(i.a)([l], (function(t) {
      var e = new Map;
      return t.map((function(t) {
        return t.product
      })).forEach((function(t) {
        e.set(t.uuid + "_" + t.collection_uuid, t)
      })), Array.from(e.values())
    }))),
    _ = Object(i.a)([f], (function(t) {
      var e = new Map;
      return t.map((function(t) {
        return t.product
      })).forEach((function(t) {
        e.set(t.uuid + "_" + t.collection_uuid, t)
      })), Array.from(e.values())
    }));
  Object(i.a)(a, (function(t) {
    return !!t.find((function(t) {
      return t.surfaceType === r.b.floor && t.isActive && t.product
    }))
  }))
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return i
  })), n.d(e, "e", (function() {
    return o
  })), n.d(e, "b", (function() {
    return a
  })), n.d(e, "f", (function() {
    return c
  })), n.d(e, "d", (function() {
    return u
  })), n.d(e, "c", (function() {
    return l
  }));
  var r = n(63),
    i = function(t, e) {
      var n = t.walls.reduce((function(t, e) {
        return e.wallpaper ? (t.find((function(t) {
          return t === e.wallpaper.uuid
        })) || t.push(e.wallpaper.uuid), t) : t
      }), []);
      return t.floor && t.floor.covering && n.push(t.floor.covering.uuid), {
        type: e,
        interior_identifier: t.id,
        product_identifiers: n
      }
    },
    o = function(t) {
      var e = ((null == t ? void 0 : t.vendor) || "") + " " + ((null == t ? void 0 : t.model) || "") + " " + ((null == t ? void 0 : t.type) || ""),
        n = " " + (((null == t ? void 0 : t.browser) || {}).name || "") + " " + (((null == t ? void 0 : t.browser) || {}).version || "") + " " + ((t.browser || {}).major || "");
      return (e + " " + (e && n ? "| " + n : "")).trim()
    },
    a = function() {
      return +(Object(r.b)("WIZART_COUNT_PHOTO_CREATED") || 0)
    },
    c = function() {
      var t = a() + 1;
      Object(r.d)("WIZART_COUNT_PHOTO_CREATED", t.toString())
    },
    u = function(t) {
      var e = new Date(t.getFullYear(), 0, 0);
      return Math.floor((t - e) / 864e5)
    },
    l = function(t) {
      return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][t.getDay()] || "none"
    }
}, , , function(t, e, n) {
  "use strict";
  n.d(e, "c", (function() {
    return r
  })), n.d(e, "d", (function() {
    return i
  })), n.d(e, "f", (function() {
    return o
  })), n.d(e, "b", (function() {
    return a
  })), n.d(e, "a", (function() {
    return c
  })), n.d(e, "e", (function() {
    return u
  }));
  var r = "SWITCH_FEEDBACK_MODAL_VISIBILITY",
    i = "SWITCH_FEEDBACK_RATING",
    o = "SWITCH_SUBMIT_ALERT_VISIBILITY",
    a = "SET_MESSAGE_RESPONSE",
    c = "SET_EMOTION_RESPONSE",
    u = "SWITCH_NOTIFICATION_STATE"
}, function(t, e, n) {
  "use strict";
  n.d(e, "d", (function() {
    return R
  })), n.d(e, "a", (function() {
    return j
  })), n.d(e, "b", (function() {
    return L
  })), n.d(e, "f", (function() {
    return w
  })), n.d(e, "g", (function() {
    return P
  })), n.d(e, "e", (function() {
    return N
  })), n.d(e, "k", (function() {
    return k
  })), n.d(e, "j", (function() {
    return F
  })), n.d(e, "c", (function() {
    return D
  })), n.d(e, "i", (function() {
    return U
  })), n.d(e, "h", (function() {
    return V
  }));
  var r = n(6),
    i = n(11),
    o = n(1),
    a = n(73),
    c = n(41),
    u = n(79),
    l = n(22),
    s = n(24),
    d = n(42),
    f = n(10),
    p = n(28),
    _ = n(47),
    v = n(5),
    b = function() {
      return (b = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    O = function(t, e, n) {
      if (n || 2 === arguments.length)
        for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
      return t.concat(r || Array.prototype.slice.call(e))
    },
    E = function() {
      return Object(v.e)().shoppingCartWithCollections
    },
    m = n(57),
    y = n(65),
    g = n(13),
    T = n(36),
    h = n(2),
    S = n(72),
    A = function() {
      return (A = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    I = function(t, e, n) {
      if (n || 2 === arguments.length)
        for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
      return t.concat(r || Array.prototype.slice.call(e))
    },
    C = function(t) {
      return {
        type: m.d,
        payload: {
          isLoading: t
        }
      }
    },
    R = function(t, e, n) {
      return function(r, i) {
        if (o.b.ENABLE_TWO_WAY_SHOPPING_CART) {
          var c = i(),
            l = Object(y.d)(c).find((function(e) {
              return t.uuid === e.article.uuid && t.collection_uuid === e.article.collection_uuid
            }));
          l && e > l.quantity ? Object(u.a)({
            vendor_code: t.vendor_code,
            sku: t.sku
          }) : l && Object(u.b)({
            vendor_code: t.vendor_code,
            sku: t.sku,
            removeAll: !1
          })
        } else r(function(t, e, n) {
            return {
              type: m.a,
              payload: {
                article: t,
                quantity: e,
                articleType: n
              }
            }
          }(t, e, n)),
          function(t, e) {
            var n = Object(v.e)(),
              r = n.shoppingCartWithCollections.findIndex(Object(a.a)(t));
            if (-1 !== r) {
              var i = O([], n.shoppingCartWithCollections, !0);
              i[r].quantity = e, Object(v.r)(b(b({}, n), {
                shoppingCartWithCollections: i
              }))
            }
          }(t, e)
      }
    },
    j = function(t, e) {
      return function(n) {
        o.b.ENABLE_TWO_WAY_SHOPPING_CART ? Object(u.a)({
          vendor_code: t.vendor_code,
          sku: t.sku
        }) : (n(function(t, e) {
          return {
            type: f.ArticlesActionTypes.ADD_SHOPPING_CART_ARTICLES,
            payload: {
              article: t,
              articleType: e
            }
          }
        }(t, e)), function(t, e) {
          var n = Object(v.e)(),
            r = O(O([], n.shoppingCartWithCollections || [], !0), [{
              uuid: t.uuid,
              articleType: e,
              quantity: 1,
              collection_uuid: t.collection_uuid
            }], !1);
          Object(v.r)(b(b({}, n), {
            shoppingCartWithCollections: r
          }))
        }(t, e)), i.addToShoppingCart(t)
      }
    },
    L = function() {
      return function(t, e) {
        var n = e(),
          r = Object(_.d)(n),
          i = Object(y.b)(n);
        r.forEach((function(e) {
          -1 === i.findIndex(Object(a.a)(e)) && t(j(e, n.articles.type))
        }))
      }
    },
    w = function(t, e) {
      return function(n) {
        o.b.ENABLE_TWO_WAY_SHOPPING_CART ? Object(u.b)({
          vendor_code: t.vendor_code,
          sku: t.sku,
          removeAll: !0
        }) : (n(function(t, e) {
          return {
            type: f.ArticlesActionTypes.DELETE_SHOPPING_CART_ARTICLES,
            payload: {
              surface: t,
              article: e
            }
          }
        }(e, t)), function(t) {
          var e = Object(v.e)(),
            n = e.shoppingCartWithCollections.findIndex(Object(a.a)(t));
          if (-1 !== n) {
            var r = O([], e.shoppingCartWithCollections, !0);
            r.splice(n, 1), Object(v.r)(b(b({}, e), {
              shoppingCartWithCollections: r
            }))
          }
        }(t)), i.removeFromShoppingCart(t)
      }
    },
    P = function() {
      return function(t, e) {
        var n = e(),
          r = Object(_.d)(n),
          i = Object(y.b)(n);
        r.forEach((function(e) {
          var r = i.find((function(t) {
            return t.uuid === e.uuid
          }));
          r && t(w(r, n.articles.type))
        }))
      }
    },
    N = function() {
      return {
        type: m.b
      }
    },
    k = function() {
      return function(t, e) {
        var n = e(),
          o = n.modal,
          a = n.navigation;
        t(N()),
          function() {
            var t = E();
            if (t.length) {
              var e = t.filter((function(t) {
                return t.quantity > 0
              }));
              if (t.length !== e.length) {
                var n = Object(v.e)();
                Object(v.r)(b(b({}, n), {
                  shoppingCartWithCollections: e
                }))
              }
            }
          }(), a.view === h.k.ShoppingCart && o.isOpen ? setTimeout((function() {
            t(Object(p.b)(!1)), setTimeout((function() {
              t(Object(T.a)(h.k.Main))
            }), 200)
          }), 0) : (t(Object(T.a)(h.k.ShoppingCart)), setTimeout((function() {
            return t(Object(p.b)(!0))
          }), 0)), o.isOpen ? a.view === h.k.ArticlesInfo ? (i.fireEvent(r.a.openShoppingCart), i.fireEvent(r.a.closeMyRoom)) : i.fireEvent(r.a.closeShoppingCart) : i.fireEvent(r.a.openShoppingCart)
      }
    },
    F = function() {
      return function(t, e) {
        var n = e();
        t(C(!0));
        var a, c = n.shoppingCart.list,
          u = {
            additional_data: {
              eventValue: {
                number_in_list: [],
                number_of_items: [],
                brand_uuid: [],
                collection_uuid: [],
                article_uuid: [],
                article_name: [],
                article_sku: [],
                article_custom_sku: [],
                mana: []
              }
            }
          };
        if (c.forEach((function(t, e) {
            var n = t.article;
            Array.isArray(u.additional_data.eventValue.number_in_list) && u.additional_data.eventValue.number_in_list.push(e), Array.isArray(u.additional_data.eventValue.number_of_items) && u.additional_data.eventValue.number_of_items.push(t.quantity), Array.isArray(u.additional_data.eventValue.brand_uuid) && u.additional_data.eventValue.brand_uuid.push(n.brand_uuid), Array.isArray(u.additional_data.eventValue.collection_uuid) && u.additional_data.eventValue.collection_uuid.push(n.collection_uuid), Array.isArray(u.additional_data.eventValue.article_uuid) && u.additional_data.eventValue.article_uuid.push(n.uuid), Array.isArray(u.additional_data.eventValue.article_name) && u.additional_data.eventValue.article_name.push(n.name), Array.isArray(u.additional_data.eventValue.mana) && u.additional_data.eventValue.mana.push(!!n.mana), Array.isArray(u.additional_data.eventValue.article_sku) && u.additional_data.eventValue.article_sku.push(!!n.vendor_code), Array.isArray(u.additional_data.eventValue.article_custom_sku) && u.additional_data.eventValue.article_custom_sku.push(!!n.sku)
          })), i.fireEvent(r.a.openInStore, u), a = c.map((function(t) {
            return {
              vendor_code: t.article.vendor_code,
              quantity: t.quantity
            }
          })), window && window.parent && window.parent.postMessage && window.parent.postMessage({
            eventName: "wizart_shopping_cart",
            payload: {
              list: a
            }
          }, "*"), o.b.SEND_TO_EMAIL) {
          var l = c.filter((function(t) {
              return 0 !== t.quantity
            })).map((function(t) {
              var e, n;
              return t.quantity + " x " + t.article.name + " / SKU: " + t.article.vendor_code + " / Brand: " + (null === (n = null === (e = t.article) || void 0 === e ? void 0 : e.brand) || void 0 === n ? void 0 : n.name)
            })),
            s = I(["Hi there!", "Below you can find a list of products you liked in the visualizer:%0A"], l, !0);
          window.open("mailto:?subject=Products you liked in the visualizer&body=" + s.join("%0A"))
        } else if (o.b.SHOPPING_CART_LINK) {
          var d = -1 !== o.b.SHOPPING_CART_LINK.indexOf("?");
          window.open("" + o.b.SHOPPING_CART_LINK + c.filter((function(t) {
            return 0 !== t.quantity
          })).map((function(t, e) {
            return 0 === e ? (d ? "&" : "?") + "vendorCode[]=" + t.article.vendor_code + "&quantity[]=" + t.quantity : "&vendorCode[]=" + t.article.vendor_code + "&quantity[]=" + t.quantity
          })).join(""), "_blank")
        }
        t(C(!1))
      }
    },
    D = function(t, e) {
      return function(n, r) {
        var i = r(),
          o = Object(g.g)(i),
          a = Object(l.getLastSelectedProduct)(i),
          u = Object(_.e)(i),
          s = t.product_type.code === c.b.rug ? h.b.floor : e;
        (t.product_type.code === c.b.rug && t.vendor_code !== (null == a ? void 0 : a.vendor_code) || t.product_type.code !== c.b.rug) && (n(Object(l.setLastSelectProduct)({
          product: t,
          type: s
        })), n(Object(d.selectArticleItem)({
          article: t,
          articleType: e
        }))), !a && u && n(Object(S.i)(!1)), o !== h.c.DESKTOP && setTimeout((function() {
          return n(Object(p.b)(!1))
        }), 0)
      }
    },
    M = function(t) {
      return {
        type: m.c,
        payload: {
          list: t
        }
      }
    },
    U = function(t) {
      return function(e, n) {
        var r = n(),
          i = Object(y.d)(r),
          o = t.reduce((function(t, e) {
            var n = A({}, t),
              r = i.findIndex((function(t) {
                return t.article.vendor_code === e.vendor_code
              }));
            return -1 === r ? n.itemsForQuery.push(e) : n.items.push({
              article: i[r].article,
              quantity: e.quantity,
              articleType: i[r].article.application_type[0]
            }), n
          }), {
            itemsForQuery: [],
            items: []
          });
        if (o.itemsForQuery.length > 0) {
          var a = {
            vendor_code: {
              $in: o.itemsForQuery.map((function(t) {
                return t.vendor_code
              }))
            }
          };
          Object(s.getArticlesByQuery)(null, a, !0).then((function(t) {
            var n = t.data.map((function(t) {
              var e = o.itemsForQuery.find((function(e) {
                return e.vendor_code === t.sku
              }));
              return {
                article: t,
                quantity: e.quantity,
                articleType: t.application_type[0]
              }
            }));
            e(M(I(I([], n, !0), o.items, !0)))
          }))
        } else e(M(o.items))
      }
    },
    V = function() {
      return function(t) {
        var e, n, r = (e = [], (n = E()).length && e.push.apply(e, n.map((function(t) {
          return t.uuid
        }))), e);
        if (r.length) {
          var i = {
            uuid: {
              $in: r
            }
          };
          Object(s.getArticlesByQuery)(1, i, !0).then((function(e) {
            var n = function(t) {
              var e = E();
              return t.reduce((function(t, n) {
                var r = e.find(Object(a.a)(n));
                return r && t.push({
                  article: n,
                  quantity: r.quantity,
                  articleType: r.articleType
                }), t
              }), [])
            }(e.data);
            n.length && t(M(n))
          }))
        }
      }
    }
}, , function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return r
  }));
  var r = function(t) {}
}, , , function(t, e, n) {
  "use strict";
  n.d(e, "e", (function() {
    return r
  })), n.d(e, "d", (function() {
    return i
  })), n.d(e, "a", (function() {
    return o
  })), n.d(e, "b", (function() {
    return a
  })), n.d(e, "c", (function() {
    return c
  }));
  var r = "[SHOPPING_CART] SWITCH_SHOPPING_CART_VISIBILITY",
    i = "[SHOPPING_CART] SWITCH_IS_LOADING_SHOPPING_CART_STATE",
    o = "[SHOPPING_CART] CHANGE_SHOPPING_CART_ITEM_QUANTITY",
    a = "[SHOPPING_CART] CLEARING_ZERO_SHOPPING_CART_ITEMS",
    c = "[SHOPPING_CART] SET_SHOPPING_CART_LIST"
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initFavoritesFromCustomer", (function() {
    return b
  })), n.d(e, "initFavoritesArticles", (function() {
    return O
  })), n.d(e, "addFavoriteItem", (function() {
    return E
  })), n.d(e, "deleteFavorite", (function() {
    return m
  })), n.d(e, "removeInactiveFavorites", (function() {
    return y
  })), n.d(e, "deleteFavoriteItem", (function() {
    return g
  })), n.d(e, "deleteFavoriteFromApplied", (function() {
    return T
  })), n.d(e, "addFavoritesFromApplied", (function() {
    return h
  })), n.d(e, "setIsLoading", (function() {
    return S
  })), n.d(e, "ensureFavoritesExists", (function() {
    return I
  })), n.d(e, "loadMoreFavorites", (function() {
    return C
  }));
  var r = n(11),
    i = n(23),
    o = n(1),
    a = n(105),
    c = n(5),
    u = n(68),
    l = n(24),
    s = n(10),
    d = n(77),
    f = n(47),
    p = n(70),
    _ = function() {
      return (_ = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    v = function(t, e, n) {
      if (n || 2 === arguments.length)
        for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
      return t.concat(r || Array.prototype.slice.call(e))
    },
    b = function(t) {
      return function(e) {
        var n = {
          vendor_code: {
            $in: t
          }
        };
        Object(l.getArticlesByQuery)(1, n, !0).then((function(t) {
          var n = t.data.reduce((function(t, e) {
            return t[e.application_type[0]] || (t[e.application_type[0]] = {
              articles: [],
              items: [],
              vendorCodes: [],
              meta: {
                current_page: 1,
                last_page: 1,
                total: 0
              },
              isLoading: !1
            }), t[e.application_type[0]].articles.push({
              article_uuid: e.uuid,
              collection_uuid: e.collection_uuid
            }), t[e.application_type[0]].vendorCodes.push(e.vendor_code), t[e.application_type[0]].items.push(e), t
          }), {});
          e({
            type: s.ArticlesActionTypes.INIT_FAVORITE_ARTICLES,
            payload: {
              favorites: n
            }
          })
        }))
      }
    },
    O = function() {
      return function(t) {
        var e = Object(c.e)(),
          n = Object.keys(e.favoritesWithCollections).reduce((function(t, n) {
            if (e.favoritesWithCollections[n] && e.favoritesWithCollections[n].length > 0) {
              var r = {
                type: n,
                q: "" + JSON.stringify({
                  $and: [{
                    $or: e.favoritesWithCollections[n].map((function(t) {
                      return {
                        $and: [{
                          $eq: ["uuid", t.article_uuid]
                        }, {
                          $eq: ["collection_uuid", t.collection_uuid]
                        }]
                      }
                    }))
                  }]
                })
              };
              t.push(Object(l.getFilteredArticles)(1, r).then((function(t) {
                return {
                  response: t,
                  type: n
                }
              })))
            }
            return t
          }), []);
        Promise.all(n).then((function(n) {
          var r = n.reduce((function(t, n) {
            return n.response.data.length && (t[n.type] = {
              articles: e.favoritesWithCollections[n.type],
              items: n.response.data,
              meta: n.response.meta,
              vendorCodes: []
            }), t
          }), _({}, p.a));
          t({
            type: s.ArticlesActionTypes.INIT_FAVORITE_ARTICLES,
            payload: {
              favorites: r
            }
          })
        }))
      }
    },
    E = function(t, e, n) {
      return void 0 === n && (n = i.a.full),
        function(i) {
          var u;
          if (o.b.ENABLE_TWO_WAY_FAVORITES) Object(a.a)({
            vendor_code: t.vendor_code,
            sku: t.sku
          });
          else {
            var l = Object(c.e)(),
              d = _(_({}, l.favoritesWithCollections), ((u = {})[e] = v(v([], l.favoritesWithCollections[e], !0), [{
                article_uuid: t.uuid,
                collection_uuid: t.collection_uuid
              }], !1), u));
            i(function(t, e) {
              return {
                type: s.ArticlesActionTypes.ADD_FAVORITE_ARTICLES,
                payload: {
                  article: t,
                  articleType: e
                }
              }
            }(t, e)), Object(c.r)(_(_({}, l), {
              favoritesWithCollections: d
            }))
          }
          r.addFavorite(n, t)
        }
    },
    m = function(t, e) {
      return {
        type: s.ArticlesActionTypes.DELETE_FAVORITE_ARTICLE,
        payload: {
          surface: t,
          article: e
        }
      }
    },
    y = function() {
      return {
        type: s.ArticlesActionTypes.REMOVE_INACTIVE_FAVORITES
      }
    },
    g = function(t, e) {
      return function(n) {
        var l;
        if (o.b.ENABLE_TWO_WAY_FAVORITES) Object(a.b)({
          vendor_code: t.vendor_code,
          sku: t.sku
        });
        else {
          var s = Object(c.e)(),
            d = s.favoritesWithCollections[e].findIndex(Object(u.c)(t));
          if (-1 !== d) {
            var f = v([], s.favoritesWithCollections[e], !0);
            f.splice(d, 1);
            var p = _(_({}, s.favoritesWithCollections), ((l = {})[e] = f, l));
            n(m(e, t)), Object(c.r)(_(_({}, s), {
              favoritesWithCollections: p
            }))
          }
        }
        r.removeFavorite(i.a.full)
      }
    },
    T = function() {
      return function(t, e) {
        var n = e().articles,
          o = Object(c.e)(),
          a = Object(f.d)(e()),
          l = _({}, o.favoritesWithCollections);
        a.forEach((function(e) {
          var r = l[n.type].findIndex(Object(u.c)(e));
          l[n.type].splice(r, 1), t(m(n.type, e))
        })), Object(c.r)(_(_({}, o), {
          favoritesWithCollections: l
        })), r.removeFavorite(i.a.minimized)
      }
    },
    h = function() {
      return function(t, e) {
        var n = e().articles,
          r = Object(f.d)(e()),
          o = Object(c.e)(),
          a = _({}, o.favoritesWithCollections);
        r.findIndex((function(e) {
          Object(u.a)(a[n.type], e) || (t(E(e, n.type, i.a.minimized)), a[n.type] = v(v([], a[n.type], !0), [{
            article_uuid: e.uuid,
            collection_uuid: e.collection_uuid
          }], !1))
        })), Object(c.r)(_(_({}, o), {
          favoritesWithCollections: a
        }))
      }
    },
    S = function(t, e) {
      return {
        type: s.ArticlesActionTypes.SET_IS_LOADING_FAVORITES,
        payload: {
          surface: t,
          isLoading: e
        }
      }
    },
    A = function(t, e) {
      return {
        type: e,
        q: "" + JSON.stringify({
          $and: [{
            $or: t[e].articles.map((function(t) {
              return {
                $and: [{
                  $eq: ["uuid", t.article_uuid]
                }, {
                  $eq: ["collection_uuid", t.collection_uuid]
                }]
              }
            }))
          }]
        })
      }
    },
    I = function() {
      return function(t, e) {
        var n = e().articles,
          r = n.favorites,
          i = n.type;
        t(y());
        var o = Object(d.b)(r).filter((function(t) {
          var e = r[t],
            n = e.articles || [],
            i = e.meta || {},
            o = i.current_page,
            a = i.last_page;
          return n.length && (!o || o && o !== a)
        }));
        if (o.length && o.includes(i)) {
          t(S(i, !0));
          var a = A(r, i);
          Object(l.getFilteredArticles)(1, a).then((function(e) {
            var n;
            t({
              type: s.ArticlesActionTypes.INIT_FAVORITE_ARTICLES,
              payload: {
                favorites: _(_({}, r), (n = {}, n[i] = {
                  articles: r[i].articles,
                  items: e.data,
                  meta: e.meta,
                  vendorCodes: []
                }, n))
              }
            }), t(S(i, !1))
          }))
        }
      }
    },
    C = function() {
      return function(t, e) {
        var n = e().articles,
          r = n.favorites,
          i = n.type,
          o = r[i],
          a = o.meta,
          c = a.current_page,
          u = a.last_page;
        if (o.articles.length && (!c || c && c !== u)) {
          t(S(i, !0));
          var d = A(r, i);
          Object(l.getFilteredArticles)(r[i].meta.current_page + 1, d).then((function(e) {
            var n;
            t({
              type: s.ArticlesActionTypes.INIT_FAVORITE_ARTICLES,
              payload: {
                favorites: _(_({}, r), (n = {}, n[i] = {
                  articles: r[i].articles,
                  items: r[i].meta && r[i].meta.current_page ? v(v([], r[i].items, !0), e.data, !0) : e.data,
                  meta: e.meta,
                  vendorCodes: v([], r[i].vendorCodes, !0)
                }, n))
              }
            }), t(S(i, !1))
          }))
        }
      }
    }
}, , , , function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return r
  }));
  var r = function(t) {
    window && window.parent && window.parent.postMessage && window.parent.postMessage(t, "*")
  }
}, function(t, e, n) {
  "use strict";
  n.d(e, "d", (function() {
    return r
  })), n.d(e, "b", (function() {
    return i
  })), n.d(e, "c", (function() {
    return o
  })), n.d(e, "a", (function() {
    return a
  }));
  var r = function(t, e) {
      try {
        window && window.localStorage && window.localStorage.setItem(t, e)
      } catch (t) {
        console.log(t)
      }
    },
    i = function(t) {
      try {
        if (window && window.localStorage) return window.localStorage.getItem(t)
      } catch (t) {
        return null
      }
      return null
    },
    o = function(t, e) {
      var n = JSON.stringify(e);
      r(t, n)
    },
    a = function(t) {
      var e, n = i(t);
      try {
        e = JSON.parse(n) || {}
      } catch (t) {
        e = {}
      }
      return e
    }
}, function(t, e, n) {
  "use strict";
  n.d(e, "d", (function() {
    return r
  })), n.d(e, "a", (function() {
    return i
  })), n.d(e, "c", (function() {
    return o
  })), n.d(e, "b", (function() {
    return a
  }));
  var r = "SWITCH_SHARE_MODAL_VISIBILITY",
    i = "SET_SHARING_RESPONSE",
    o = "SWITCH_IS_LOADING_STATE",
    a = "SWITCH_IS_ERROR"
}, function(t, e, n) {
  "use strict";
  n.d(e, "d", (function() {
    return o
  })), n.d(e, "b", (function() {
    return a
  })), n.d(e, "c", (function() {
    return c
  })), n.d(e, "a", (function() {
    return u
  }));
  var r = n(107),
    i = n(7),
    o = Object(i.a)((function(t) {
      return t.shoppingCart
    }), (function(t) {
      return t.list
    })),
    a = Object(i.a)(o, (function(t) {
      return t.map((function(t) {
        return t.article
      }))
    })),
    c = (Object(i.a)(o, (function(t) {
      return t.map((function(t) {
        return t.quantity
      }))
    })), Object(i.a)(a, (function(t) {
      return t.map((function(t) {
        return t.uuid
      }))
    })), Object(i.a)(o, (function(t) {
      return t.reduce((function(t, e) {
        return t + (e.quantity > 0 ? 1 : 0)
      }), 0)
    }))),
    u = Object(i.a)(o, (function(t) {
      var e, n = t.reduce((function(t, e) {
        var n = Object(r.a)(e.article).prices;
        return t + e.quantity * (n.regular_price || 0)
      }), 0);
      return e = n, Math.round(100 * e) / 100
    }))
}, , , function(t, e, n) {
  "use strict";
  n.d(e, "b", (function() {
    return r
  })), n.d(e, "c", (function() {
    return i
  })), n.d(e, "a", (function() {
    return o
  }));
  var r = function(t) {
      return function(e) {
        return e.uuid === t.uuid && e.collection_uuid === t.collection_uuid
      }
    },
    i = function(t) {
      return function(e) {
        var n;
        return e.article_uuid === t.uuid && e.collection_uuid === (t.collection_uuid || (null === (n = null == t ? void 0 : t.collection) || void 0 === n ? void 0 : n.uuid))
      }
    },
    o = function(t, e) {
      return void 0 === t && (t = []), !!t.find(i(e))
    }
}, function(t, e, n) {
  "use strict";
  n.d(e, "c", (function() {
    return i
  })), n.d(e, "a", (function() {
    return o
  })), n.d(e, "b", (function() {
    return a
  }));
  var r = n(1),
    i = function(t) {
      var e = r.b.CATALOG_STRUCTURE.findIndex((function(e) {
        return e === t
      }));
      return -1 === e || 0 === e ? null : r.b.CATALOG_STRUCTURE[e - 1]
    },
    o = function(t, e) {
      return e.find((function(e) {
        return e.step === t
      }))
    },
    a = function(t, e) {
      return e.find((function(e) {
        return e.name === t
      }))
    }
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return u
  })), n.d(e, "b", (function() {
    return s
  }));
  var r, i = n(9),
    o = n(2),
    a = n(19),
    c = function() {
      return (c = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    u = Object.keys(o.b).reduce((function(t, e) {
      return t[e] = {
        articles: [],
        items: [],
        vendorCodes: [],
        meta: {
          current_page: null,
          last_page: null,
          total: 0
        },
        isLoading: !1
      }, t
    }), {}),
    l = {
      top: 0,
      orientation: null,
      isMiniCatalog: !1
    },
    s = {
      navigation: {
        history: [],
        current: i.a.products,
        mainView: i.a.products
      },
      isCatalogOpen: !1,
      isLoading: !1,
      isOpenPatternPopup: !1,
      isCatalogInitWithArticle: !1,
      isApplyLoading: !1,
      type: o.b.wall,
      searchResults: {
        data: []
      },
      initArticle: null,
      filters: {
        wall: {
          name: "",
          filtersList: [],
          selectedFilters: []
        },
        floor: {
          name: "",
          filtersList: [],
          selectedFilters: []
        }
      },
      filtersLoading: !1,
      isFilterKeyPress: !1,
      favorites: c({}, u),
      scrollPosition: (r = {}, r[a.a.product_type] = c({}, l), r[a.a.brands] = c({}, l), r[a.a.collections] = c({}, l), r[a.a.products] = c({}, l), r)
    }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "getFavorites", (function() {
    return a
  })), n.d(e, "getCountFavorites", (function() {
    return c
  })), n.d(e, "getCountFavoritesOfTypes", (function() {
    return u
  }));
  var r = n(7),
    i = n(77),
    o = n(2),
    a = Object(r.a)([function(t) {
      return t.articles.favorites
    }], (function(t) {
      return t
    })),
    c = Object(r.a)([a], (function(t) {
      return Object(i.b)(t).reduce((function(e, n) {
        return e + ((t[n] || {}).items || t[n].articles || []).length
      }), 0)
    })),
    u = Object(r.a)([a], (function(t) {
      var e, n, r, a, c, u, l, s, d, f, p = {
          wall: {
            ids: 0,
            items: 0
          },
          floor: {
            ids: 0,
            items: 0
          },
          all: {
            ids: 0,
            items: 0
          }
        },
        _ = (null === (n = null === (e = t.wall) || void 0 === e ? void 0 : e.meta) || void 0 === n ? void 0 : n.total) || (null === (a = null === (r = t.wall) || void 0 === r ? void 0 : r.articles) || void 0 === a ? void 0 : a.length) || 0,
        v = (null === (u = null === (c = t.floor) || void 0 === c ? void 0 : c.meta) || void 0 === u ? void 0 : u.total) || (null === (s = null === (l = t.floor) || void 0 === l ? void 0 : l.articles) || void 0 === s ? void 0 : s.length) || 0;
      return p.wall.ids = _, p.floor.ids = v, p.wall.items = (null === (d = (t[o.b.wall] || {}).items) || void 0 === d ? void 0 : d.length) || 0, p.floor.items = (null === (f = (t[o.b.floor] || {}).items) || void 0 === f ? void 0 : f.length) || 0, p.all = Object(i.b)(t).reduce((function(e, n) {
        var r = (t[n] || {}).items;
        return e.items = e.items + (r || []).length, e
      }), {
        ids: _ + v,
        items: 0
      }), p
    }))
}, function(t, e, n) {
  "use strict";
  n.d(e, "c", (function() {
    return v
  })), n.d(e, "d", (function() {
    return b
  })), n.d(e, "h", (function() {
    return O
  })), n.d(e, "i", (function() {
    return E
  })), n.d(e, "b", (function() {
    return m
  })), n.d(e, "g", (function() {
    return y
  })), n.d(e, "a", (function() {
    return g
  })), n.d(e, "e", (function() {
    return S
  })), n.d(e, "f", (function() {
    return A
  }));
  var r, i = n(50),
    o = n.n(i),
    a = n(1),
    c = n(42),
    u = n(12),
    l = n(26),
    s = n(2),
    d = n(6),
    f = n(5),
    p = function() {
      return (p = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    _ = function(t, e, n) {
      if (n || 2 === arguments.length)
        for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
      return t.concat(r || Array.prototype.slice.call(e))
    },
    v = function(t) {
      return function(e, n) {
        var r = n().surfaces,
          i = _([], r.currentSurfaces, !0).map((function(e) {
            return p(p({}, e), {
              product: e.isCustomProduct !== t ? e.product : null,
              isCustomProduct: e.isCustomProduct !== t ? t : null
            })
          }));
        e({
          type: u.u,
          payload: {
            surfaces: i
          }
        })
      }
    },
    b = function(t) {
      return function(e) {
        e({
          type: u.e,
          payload: {
            room: t
          }
        })
      }
    },
    O = function(t) {
      return {
        type: u.k,
        payload: {
          onlyInteractiveView: t
        }
      }
    },
    E = function(t) {
      return {
        type: u.f,
        payload: {
          interactiveSurfaceHaveBeenCleared: t
        }
      }
    },
    m = function(t, e) {
      return function(n) {
        n({
          type: u.b,
          payload: {
            surface: t,
            isActive: e
          }
        })
      }
    },
    y = function(t, e, n) {
      return function(r) {
        r({
          type: u.h,
          payload: {
            surface: t,
            pattern: e,
            applyForAll: n
          }
        })
      }
    },
    g = function(t, e, n) {
      return function(r, i) {
        var o = i().surfaces,
          a = _([], o.currentSurfaces, !0),
          c = a.filter((function(t) {
            return t.isActive && t.surfaceType
          })),
          l = a.map((function(r) {
            var i = p(p({}, r), {
              isCustomProduct: n
            });
            return (c.length > 0 && r.isActive || 0 === c.length) && r.surfaceType === e && (i.product = t, i.isActive = !0, i.selectedPattern = null, i.custom_rotation_angle = 0), i.isActiveSettings = !1, i
          }));
        r({
          type: u.u,
          payload: {
            surfaces: l
          }
        })
      }
    },
    T = ((r = {})[s.b.wall] = "walls", r[s.b.floor] = "floors", r),
    h = function(t) {
      return t.map((function(t) {
        return {
          type: T[t.surfaceType],
          id: t.id
        }
      }))
    },
    S = function(t) {
      var e = t.surfaces,
        n = t.product,
        r = t.selectedRoom,
        i = t.share,
        o = e.filter((function(t) {
          return n.surface.includes(t.surfaceType)
        })),
        a = o.filter((function(t) {
          return t.isActive
        })),
        c = {
          data: {
            type: "products",
            attributes: n,
            relationships: {
              selected_surfaces: {
                data: 0 === a.length ? h(o) : h(a)
              },
              rooms: {
                data: {
                  type: "rooms",
                  id: r.uuid
                }
              },
              share: null
            }
          },
          included: []
        };
      return i && (c.data.relationships.share = {
        data: {
          type: "share",
          id: "1"
        }
      }, c.included.push({
        type: "share",
        id: "1",
        attributes: i
      })), {
        body: c,
        type: o[0].surfaceType
      }
    },
    A = function(t) {
      return function(e, n) {
        var r, i;
        e(Object(c.switchApplyLoading)(!0));
        var u = n(),
          s = u.surfaces,
          v = u.rooms,
          b = Object(f.e)(),
          O = ((null == b ? void 0 : b.customApplies) || []).find((function(t) {
            return t.path === a.b.CUSTOM_PRODUCT.image_path
          })),
          E = S({
            surfaces: s.currentSurfaces,
            product: a.b.CUSTOM_PRODUCT,
            selectedRoom: v.selectedRoom
          }),
          m = E.body,
          y = E.type;
        e(g(t, y, !0)), d.c.fireEvent(d.a.apply, {
          additional_data: {
            eventValue: {
              interior_identifier: v.selectedRoom.id,
              vendor_code: null === (r = a.b.CUSTOM_PRODUCT) || void 0 === r ? void 0 : r.vendor_code,
              name: null === (i = a.b.CUSTOM_PRODUCT) || void 0 === i ? void 0 : i.name,
              custom_apply: !0
            }
          }
        });
        var T = JSON.stringify(m),
          h = {
            method: "POST",
            headers: p({
              Authorization: a.b.TOKEN,
              "Content-Type": "application/json",
              "device-token": a.b.USER_INDENTIFIER,
              "Access-Control-Expose-Headers": "w-request-id"
            }, O ? {
              "w-request-id": O.wrid
            } : {}),
            body: T
          },
          A = a.b.CUSTOM_APPLY + "/custom?device=" + a.b.DEVICE.type;
        a.b.DO_NOT_USE_CASHE ? A += "&resources_cache=false" : A = A + "&hash=" + o()(a.b.CLIENT_IDENTIFIER).toString() + "-" + o()(T).toString(), fetch(A, h).then((function(t) {
          if (t.status >= 400 && t.status <= 500) throw t;
          var e = t.headers.get("w-request-id");
          if (!O && e) {
            var n = (null == b ? void 0 : b.customApplies) ? _([], null == b ? void 0 : b.customApplies, !0) : [];
            n.push({
              path: a.b.CUSTOM_PRODUCT.image_path,
              wrid: e
            }), Object(f.r)(p(p({}, b), {
              customApplies: n
            }))
          }
          return t.text()
        })).then((function(t) {
          var n = "data:image/jpeg;base64," + t;
          e(Object(c.applyArticleSuccess)({
            id: v.selectedRoom.uuid,
            src: n
          }))
        })).catch((function(t) {
          return Object(l.a)(t, e)
        })).finally((function() {
          return e(Object(c.switchApplyLoading)(!1))
        }))
      }
    }
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return r
  }));
  var r = function(t) {
    return function(e) {
      var n;
      return e.uuid === t.uuid && e.collection_uuid === ((null == t ? void 0 : t.collection_uuid) || (null === (n = null == t ? void 0 : t.collection) || void 0 === n ? void 0 : n.uuid))
    }
  }
}, function(t, e, n) {
  "use strict";
  n.d(e, "b", (function() {
    return r
  })), n.d(e, "a", (function() {
    return i
  }));
  var r = function(t) {
      return t.localization.localization
    },
    i = function(t) {
      return t.localization.isVisible
    }
}, , function(t, e, n) {
  "use strict";
  n.d(e, "c", (function() {
    return r
  })), n.d(e, "b", (function() {
    return i
  })), n.d(e, "a", (function() {
    return o
  }));
  var r = "SWITCH_IS_LOADING_MY_ROOM_LIST",
    i = "SET_MY_ROOM_LIST",
    o = "MY_ROOM_LIST_RESER_TO_INIT_STATE"
}, function(t, e, n) {
  "use strict";
  n.d(e, "c", (function() {
    return o
  })), n.d(e, "b", (function() {
    return a
  })), n.d(e, "a", (function() {
    return c
  })), n.d(e, "d", (function() {
    return u
  }));
  var r = n(2),
    i = function() {
      return (i = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    o = function(t) {
      var e, n, i, o;
      return t ? !t.walls.length || (null === (e = t.floor) || void 0 === e ? void 0 : e.x) || (null === (n = t.floor) || void 0 === n ? void 0 : n.y) ? !t.walls.length && (null === (i = t.floor) || void 0 === i ? void 0 : i.x) && (null === (o = t.floor) || void 0 === o ? void 0 : o.y) ? r.b.floor : void 0 : r.b.wall : void 0
    },
    a = function(t) {
      return Object.keys(t)
    },
    c = function(t) {
      var e = t.reduce((function(t, e) {
        var n;
        return i(i({}, t), ((n = {})[e] = (t[e] || 0) + 1, n))
      }), {});
      return Object.keys(e).filter((function(t) {
        return e[t] > 1
      }))
    },
    u = function(t) {
      void 0 === t && (t = "");
      var e = t.match(/[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|[\u4e00-\u9FFF]|[\uac00-\ud7a3]|[\u3040-\u30ff]|[\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufbc1]|[\ufbd3-\ufd3f]|[\ufd50-\ufd8f]|[\ufd92-\ufdc7]|[\ufe70-\ufefc]|[\uFDF0-\uFDFD]|[\u0590-\u05FF]|\u203B/i) || [];
      return t && t.length >= 0 && t.length < 3 && !e.length
    }
}, , function(t, e, n) {
  "use strict";
  n.d(e, "c", (function() {
    return o
  })), n.d(e, "a", (function() {
    return a
  })), n.d(e, "b", (function() {
    return c
  }));
  var r, i = n(62);
  ! function(t) {
    t.getStore = "getShoppingCartStore", t.add = "addShoppigCartItem", t.remove = "removeShoppigCartItem"
  }(r || (r = {}));
  var o = function(t) {
      Object(i.a)({
        eventName: r.getStore,
        payload: {
          list: t
        }
      })
    },
    a = function(t) {
      Object(i.a)({
        eventName: r.add,
        payload: {
          item: t
        }
      })
    },
    c = function(t) {
      Object(i.a)({
        eventName: r.remove,
        payload: {
          item: t
        }
      })
    }
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return m
  })), n.d(e, "c", (function() {
    return g
  })), n.d(e, "d", (function() {
    return T
  })), n.d(e, "e", (function() {
    return h
  })), n.d(e, "b", (function() {
    return S
  }));
  var r, i, o = n(2),
    a = n(42),
    c = n(50),
    u = n.n(c),
    l = n(1),
    s = n(31),
    d = n(24),
    f = n(14),
    p = n(5),
    _ = function() {
      return (_ = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    v = (r = function(t) {
      var e = Object(d.applyWallsData)(t),
        n = JSON.stringify({
          room_data: {
            room: e
          },
          redirect_to: l.b.ORIGINAL_URL,
          facebook_app_id: l.b.FACEBOOK_APP_ID
        }),
        r = l.b.INTERIORS_HOST + "/sharing/?resize=" + o.d.large + "&device=" + l.b.DEVICE.type;
      return l.b.DO_NOT_USE_CASHE ? r += "&resources_cache=false" : r = r + "&hash=" + u()(l.b.CLIENT_IDENTIFIER).toString() + "-" + u()(n).toString(), Object(s.b)(r, n, {
        "Content-Type": "application/json",
        Authorization: l.b.TOKEN,
        "device-token": l.b.USER_INDENTIFIER
      })
    }, i = {}, function(t) {
      var e = u()(JSON.stringify(t)).toString();
      return e in i || (i[e] = r(t)), i[e]
    }),
    b = n(11),
    O = n(26),
    E = n(34),
    m = function(t, e, n) {
      var r = Object(a.applyArticlesToRoom)({
        room: t,
        surfaces: e.currentSurfaces
      });
      return n ? function(t, e) {
        var n = Object(p.e)(),
          r = Object(f.e)({
            surfaces: t,
            product: l.b.CUSTOM_PRODUCT,
            selectedRoom: e,
            share: {
              redirect_to: l.b.ORIGINAL_URL,
              facebook_app_id: l.b.FACEBOOK_APP_ID
            }
          }).body,
          i = ((null == n ? void 0 : n.customApplies) || []).find((function(t) {
            return t.path === l.b.CUSTOM_PRODUCT.image_path
          })),
          o = _({
            Authorization: l.b.TOKEN,
            "Content-Type": "application/json",
            "device-token": l.b.USER_INDENTIFIER,
            "Access-Control-Expose-Headers": "w-request-id"
          }, i ? {
            "w-request-id": i.wrid
          } : {}),
          a = JSON.stringify(r),
          c = l.b.INTERIORS_HOST + "/sharing/custom?device=" + l.b.DEVICE.type;
        return l.b.DO_NOT_USE_CASHE ? c += "&resources_cache=false" : c = c + "&hash=" + u()(l.b.CLIENT_IDENTIFIER).toString() + "-" + u()(a).toString(), Object(s.b)(c, a, o)
      }(e.currentSurfaces, t) : v(r)
    },
    y = function(t, e) {
      void 0 === e && (e = "mywin"), window.open(t, e, "left=20,top=20,width=500,height=500,toolbar=1,resizable=0")
    },
    g = function(t) {
      y("\n    https://www.facebook.com/dialog/share?app_id=" + l.b.FACEBOOK_APP_ID + "&display=popup&href=" + t + "\n  "), b.shareImage("facebook")
    },
    T = function(t, e, n, r) {
      var i, a = encodeURI("https://www.pinterest.com/pin/create/button/?media=" + t + "&description=" + r + "&type=button_pinit_custom&guid=" + Object(p.m)());
      n.type === o.c.MOBILE && "Android" === (null === (i = null == n ? void 0 : n.os) || void 0 === i ? void 0 : i.name) && (a = encodeURI("https://www.pinterest.com/pin/create/button/?media=" + t + "&description=" + r + "&type=button_pinit_custom&guid=" + Object(p.m)() + "&url=" + e)), b.shareImage("pinterest"), window.open(a, "_blank")
    },
    h = function(t, e) {
      y(encodeURI("https://twitter.com/intent/tweet?text=" + e + "&url=" + t)), b.shareImage("twitter")
    },
    S = function(t, e, n) {
      var r = window.navigator;
      r.canShare ? (setTimeout(n(Object(E.f)(!0)), 3e3), fetch(t).then((function(t) {
        return t.blob()
      })).then((function(n) {
        var i = new File([n], "image.jpg", {
          type: "image/jpeg"
        });
        r.canShare({
          files: [i]
        }) ? r.share({
          text: e,
          files: [i]
        }) : r.share({
          text: e,
          url: t
        }), b.shareImage("browser_share")
      })).catch((function(t) {
        return Object(O.a)(t, n)
      })).finally((function() {
        return n(Object(E.f)(!1))
      }))) : (r.share({
        text: e,
        url: t
      }), b.shareImage("browser_share"))
    }
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return l
  }));
  var r = n(0),
    i = n.n(r),
    o = n(8),
    a = n(5),
    c = n(74),
    u = function() {
      return (u = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    };

  function l(t) {
    return Object(o.b)((function(t) {
      return {
        getLocalizationProperty: function(e) {
          return Object(a.h)(t.localization.isVisible, t.localization.localization, e)
        },
        localLoaded: Object(c.a)(t)
      }
    }))((function(e) {
      return i.a.createElement(t, u({}, e))
    }))
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "getCurrentView", (function() {
    return u
  })), n.d(e, "getMainView", (function() {
    return l
  })), n.d(e, "getFullScrollPosition", (function() {
    return s
  })), n.d(e, "getIsOpenFavorites", (function() {
    return d
  })), n.d(e, "getScrollPosition", (function() {
    return f
  }));
  var r = n(7),
    i = n(9),
    o = n(21),
    a = n(19),
    c = function(t) {
      return t.articles.navigation
    },
    u = Object(r.a)([c], (function(t) {
      return t.current
    })),
    l = Object(r.a)(c, (function(t) {
      return t.mainView
    })),
    s = Object(r.a)((function(t) {
      return t.articles
    }), (function(t) {
      return t.scrollPosition
    })),
    d = Object(r.a)(c, (function(t) {
      return t.current === i.a.favorites
    })),
    f = Object(r.a)([o.g, s], (function(t, e) {
      switch (t) {
        case a.a.product_type:
          return e.product_type;
        case a.a.brands:
          return e.brands;
        case a.a.collections:
          return e.collections;
        case a.a.products:
          return e.products;
        default:
          return {
            top: 0,
            orientation: null,
            isMiniCatalog: !1
          }
      }
    }))
}, function(t, e, n) {
  "use strict";
  var r = n(8),
    i = n(0),
    o = n.n(i),
    a = n(2),
    c = n(81),
    u = n(240),
    l = n(216),
    s = n(220),
    d = Object(u.a)((function() {
      return Object(l.a)({
        tooltip: {
          fontSize: "14px !important",
          userSelect: "none"
        }
      })
    })),
    f = Object(c.a)((function(t) {
      var e = t.title,
        n = t.placement,
        r = t.deviceType,
        i = t.children,
        c = t.className,
        u = void 0 === c ? "" : c,
        l = t.classNameDiv,
        f = void 0 === l ? "" : l,
        p = t.getLocalizationProperty,
        _ = d();
      return r !== a.c.DESKTOP ? o.a.createElement(o.a.Fragment, null, i) : o.a.createElement(o.a.Suspense, {
        fallback: o.a.createElement(o.a.Fragment, null)
      }, o.a.createElement(s.a, {
        arrow: !0,
        title: p(e),
        placement: n,
        classes: {
          tooltip: _.tooltip
        },
        className: u
      }, o.a.createElement("div", {
        className: f
      }, i)))
    })),
    p = n(13);
  e.a = Object(r.b)((function(t) {
    return {
      deviceType: Object(p.g)(t)
    }
  }))(f)
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "setCustomScrollPosition", (function() {
    return o
  })), n.d(e, "setScrollPosition", (function() {
    return a
  }));
  var r = n(13),
    i = n(10),
    o = function(t, e, n, r) {
      return void 0 === r && (r = !1), {
        type: i.ArticlesActionTypes.SET_SCROLL_POSITION,
        payload: {
          scrollTopPosition: t,
          view: e,
          orientation: n,
          isMiniCatalog: r
        }
      }
    },
    a = function(t, e, n) {
      return void 0 === n && (n = !1),
        function(i, a) {
          var c = Object(r.h)(a());
          i(o(t, e, c, n))
        }
    }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "getFiltersByArticleType", (function() {
    return o
  })), n.d(e, "getSelectedFiltersByArticleType", (function() {
    return a
  })), n.d(e, "getFiltersLoading", (function() {
    return c
  }));
  var r = n(7),
    i = n(40),
    o = Object(r.a)([i.getArticleType, i.getArticlesStore], (function(t, e) {
      return e.filters[t]
    })),
    a = Object(r.a)([i.getArticleType, i.getArticlesStore], (function(t, e) {
      return e.filters[t].selectedFilters
    })),
    c = Object(r.a)([i.getArticlesStore], (function(t) {
      return t.filtersLoading
    }))
}, function(t, e, n) {
  "use strict";
  n.d(e, "b", (function() {
    return o
  })), n.d(e, "e", (function() {
    return i
  })), n.d(e, "c", (function() {
    return a
  })), n.d(e, "d", (function() {
    return c
  })), n.d(e, "a", (function() {
    return u
  }));
  var r = n(0),
    i = (n(146), n(22)),
    o = Object(r.lazy)((function() {
      return Promise.all([n.e(1), n.e(11)]).then(n.bind(null, 395))
    })),
    a = Object(r.lazy)((function() {
      return Promise.all([n.e(33), n.e(12)]).then(n.bind(null, 376))
    })),
    c = Object(r.lazy)((function() {
      return Promise.all([n.e(1), n.e(22)]).then(n.bind(null, 378))
    })),
    u = Object(r.lazy)((function() {
      return n.e(10).then(n.bind(null, 383))
    }))
}, , function(t, e, n) {
  "use strict";
  n.d(e, "f", (function() {
    return l
  })), n.d(e, "d", (function() {
    return s
  })), n.d(e, "b", (function() {
    return f
  })), n.d(e, "c", (function() {
    return p
  })), n.d(e, "e", (function() {
    return _
  })), n.d(e, "a", (function() {
    return v
  }));
  var r = n(51),
    i = n(42),
    o = n(48),
    a = n(6),
    c = function() {
      return {
        type: r.c
      }
    },
    u = function(t) {
      return {
        type: r.d,
        payload: {
          rate: t
        }
      }
    },
    l = function() {
      return {
        type: r.f
      }
    },
    s = function(t) {
      return {
        type: r.b,
        payload: {
          message: t
        }
      }
    },
    d = function(t) {
      return {
        type: r.a,
        payload: {
          emotion: t
        }
      }
    },
    f = function() {
      return function(t) {
        t(u(!1)), t(s("")), t(d("")), t(c())
      }
    },
    p = function() {
      return function(t, e) {
        t(c());
        var n, i = e().feedback;
        i.isOpenedFeedback || t((n = !0, {
          type: r.e,
          payload: {
            isOpenedFeedback: n
          }
        })), i.isOpen && a.c.fireEvent(a.a.rateTheImageStart)
      }
    },
    _ = function(t) {
      return function(e, n) {
        var r = n().feedback;
        t.target.value === r.emotion ? (e(d("")), e(u(!1))) : (e(d(t.target.value)), e(u(!0)))
      }
    },
    v = function() {
      return function(t, e) {
        t(c());
        var n = e(),
          r = n.feedback,
          l = n.rooms,
          f = n.surfaces,
          p = Object(i.applyArticlesToRoom)({
            room: l.selectedRoom,
            surfaces: f.currentSurfaces
          }),
          _ = Object(o.a)(p);
        a.c.imageRated(_, r.message, r.emotion), t(d("")), t(s("")), t(u(!1))
      }
    }
}, , , , , function(t, e, n) {
  "use strict";
  n.d(e, "c", (function() {
    return T
  })), n.d(e, "g", (function() {
    return h
  })), n.d(e, "m", (function() {
    return S
  })), n.d(e, "p", (function() {
    return A
  })), n.d(e, "d", (function() {
    return I
  })), n.d(e, "n", (function() {
    return C
  })), n.d(e, "l", (function() {
    return R
  })), n.d(e, "a", (function() {
    return j
  })), n.d(e, "k", (function() {
    return L
  })), n.d(e, "o", (function() {
    return w
  })), n.d(e, "h", (function() {
    return N
  })), n.d(e, "f", (function() {
    return k
  })), n.d(e, "i", (function() {
    return D
  })), n.d(e, "e", (function() {
    return M
  })), n.d(e, "b", (function() {
    return U
  })), n.d(e, "j", (function() {
    return V
  }));
  var r, i, o = n(43),
    a = n(1),
    c = n(2),
    u = n(39),
    l = n(22),
    s = n(19),
    d = ((r = {})[s.a.product_type] = "product_type.code", r[s.a.brands] = "brand.uuid", r[s.a.collections] = "collection.uuid", r[s.a.products] = "uuid", r),
    f = ((i = {})[s.a.product_type] = "product_type.code", i[s.a.brands] = "brand.name", i[s.a.collections] = "collection.name", i[s.a.products] = "name", i),
    p = n(9),
    _ = n(25),
    v = n(6),
    b = n(26),
    O = n(69),
    E = n(18),
    m = n(13),
    y = function() {
      return (y = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    g = function(t, e, n) {
      if (n || 2 === arguments.length)
        for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
      return t.concat(r || Array.prototype.slice.call(e))
    },
    T = Object(u.createAsyncAction)("FETCH_PRODUCTS_START", "FETCH_PRODUCTS_SUCCESS", "FETCH_PRODUCTS_ERROR")(),
    h = Object(u.createAction)("GO_TO_PREVIOUS_CATALOG_STEP")(),
    S = Object(u.createAction)("SELECT_PRODUCT")(),
    A = Object(u.createAction)("SET_LAST_SELECTED_PRODUCT")(),
    I = Object(u.createAction)("RESET_TO_FIRST_STEP")(),
    C = Object(u.createAction)("SET_CATALOG_OPENING_STATUS")(),
    R = function(t) {
      return function(e, n) {
        var r = n().catalog,
          i = a.b.CATALOG_STRUCTURE[0],
          o = Object(O.b)(i, r[t.type].steps);
        e(I({
          type: t.type
        })), o || e(D())
      }
    },
    j = Object(u.createAction)("CHANGE_CATALOG_LOADING")(),
    L = Object(u.createAction)("RESET_LAST_SELECTED_PRODUCT")(),
    w = Object(u.createAction)("SET_INIT_PRODUCT_PAGE")(),
    P = function(t, e) {
      return y(y({}, t), {
        data: t.data.map((function(t) {
          return "attributes" in t ? y(y({}, t), t.attributes) : t
        }))
      })
    },
    N = function() {
      return function(t, e) {
        var n = e(),
          r = n.articles,
          i = n.catalog;
        if (r.navigation.current === p.a.products) {
          var c = i[r.type],
            u = c.currentStep,
            s = a.b.CATALOG_STRUCTURE.findIndex((function(t) {
              return t === u
            }));
          if (s > 0) {
            var d = s - 1,
              f = a.b.CATALOG_STRUCTURE[d],
              v = c.steps.find((function(t) {
                return t.name === f
              }));
            if (t(h({
                currentStep: u,
                previousStep: f,
                type: r.type
              })), v && 1 === v.response.data.length) t(N());
            else if (!v) {
              t(j({
                loading: !0
              }));
              var O = g([], c.selectedProducts, !0).reduce((function(t, e) {
                  var n;
                  return y(y({}, t), ((n = {})[e.step] = e.uuid, n))
                }), {}),
                E = l.CatalogStepEndpoints[f];
              Object(o.a)(E(y({
                type: r.type
              }, O)), {
                Authorization: a.b.TOKEN
              }).then((function(e) {
                t(T.success({
                  loading: 1 === e.data.length && 0 !== d,
                  step: f,
                  type: r.type,
                  response: P(e)
                })), 1 === e.data.length && 0 !== d && t(N())
              })).catch((function(e) {
                t(T.failure(e)), Object(b.a)(e, t)
              }))
            }
          }
        } else t(Object(_.selectBackStep)())
      }
    },
    k = function(t) {
      return void 0 === t && (t = {}),
        function(e, n) {
          var r = n(),
            i = r.articles,
            c = r.catalog[i.type],
            u = c.currentStep,
            s = g([], c.selectedProducts, !0),
            d = a.b.CATALOG_STRUCTURE.findIndex((function(t) {
              return t === u
            }));
          if (a.b.CATALOG_STRUCTURE.length - 1 > d) {
            var f = a.b.CATALOG_STRUCTURE[d + 1],
              p = {
                step: u,
                uuid: t.uuid,
                name: null == t ? void 0 : t.name,
                product: t.product
              };
            e(T.request({
              step: f,
              selectedProduct: p,
              type: i.type
            }));
            var _ = s.findIndex((function(t) {
              return t.step === f
            })); - 1 === _ ? s.push(p) : s[_] = p;
            var v = g(g([], c.selectedProducts, !0), [p], !1).reduce((function(t, e) {
                var n;
                return y(y({}, t), ((n = {})[e.step] = e.uuid, n))
              }), {}),
              O = l.CatalogStepEndpoints[f];
            Object(o.a)(O(y({
              type: i.type
            }, v)), {
              Authorization: a.b.TOKEN
            }).then((function(t) {
              var n;
              e(T.success({
                loading: 1 === t.data.length && f !== l.CatalogViewEnum.products,
                step: f,
                type: i.type,
                response: P(t)
              })), 1 === t.data.length && f !== l.CatalogViewEnum.products && e(k({
                uuid: t.data[0].uuid,
                name: null === (n = t.data[0]) || void 0 === n ? void 0 : n.name,
                product: t.data[0]
              }))
            })).catch((function(t) {
              e(T.failure(t)), Object(b.a)(t, e)
            }))
          }
        }
    },
    F = function(t, e) {
      return t.replace(/\[/g, ".").replace(/\]/g, "").split(".").reduce((function(t, e) {
        return t && t[e]
      }), e)
    },
    D = function(t) {
      return void 0 === t && (t = {}),
        function(e, n) {
          e(j({
            loading: !0
          }));
          var r = Object(m.g)(n()),
            i = n().articles,
            u = a.b.CATALOG_STRUCTURE[0],
            s = {
              type: i.type
            };
          if (t.product) {
            u = l.CatalogViewEnum.products, a.b.CATALOG_STRUCTURE.forEach((function(n) {
              if (d[n] && f[n]) {
                var r = F(d[n], t.product),
                  o = F(f[n], t.product);
                s[n] = r, e(T.request({
                  step: u,
                  type: i.type,
                  selectedProduct: {
                    step: n,
                    uuid: r,
                    name: o,
                    product: null
                  }
                }))
              }
            }), {}), e(S({
              step: u,
              selectedProduct: {
                step: u,
                uuid: t.product.uuid,
                name: t.product.name,
                product: t.product
              },
              type: i.type
            }));
            var p = Object(l.getArticlePageEndpoint)(s);
            Object(o.a)(p, {
              Authorization: a.b.TOKEN
            }).then((function(t) {
              var n, d, f, p, _ = l.CatalogStepEndpoints[u];
              s.page = null === (d = null === (n = null == t ? void 0 : t.data) || void 0 === n ? void 0 : n.attributes) || void 0 === d ? void 0 : d.pagination_page, e(w({
                page: (null === (p = null === (f = null == t ? void 0 : t.data) || void 0 === f ? void 0 : f.attributes) || void 0 === p ? void 0 : p.pagination_page) || 1,
                type: i.type
              })), Object(o.a)(_(s), {
                Authorization: a.b.TOKEN
              }).then((function(t) {
                e(T.success({
                  loading: !1,
                  step: u,
                  type: i.type,
                  response: P(t)
                })), r === c.c.DESKTOP && e(Object(E.scrollToInitArticleDesktop)())
              })).catch((function(t) {
                e(T.failure(t)), Object(b.a)(t, e)
              }))
            }))
          } else {
            var _ = l.CatalogStepEndpoints[u];
            Object(o.a)(_(s), {
              Authorization: a.b.TOKEN
            }).then((function(t) {
              e(T.success({
                loading: !1,
                step: u,
                type: i.type,
                response: P(t)
              }))
            })).catch((function(t) {
              Object(b.a)(t, e), e(T.failure(t))
            }))
          }
        }
    },
    M = function() {
      return function(t, e) {
        v.c.fireEvent(v.a.selectHome);
        var n = e(),
          r = n.articles,
          i = n.catalog;
        r.navigation.current !== p.a.products && t(Object(_.goToHomeArticlesView)()), i[r.type].currentStep !== a.b.CATALOG_STRUCTURE[0] && t(R({
          type: r.type
        }))
      }
    },
    U = Object(u.createAction)("FETCH_MORE_SUCCESS")(),
    V = function(t, e, n) {
      return function(r, i) {
        r(j({
          loading: !0
        }));
        var c = i().catalog,
          u = l.CatalogStepEndpoints[t],
          s = c[e],
          d = Object(O.b)(t, c[e].steps),
          f = g([], s.selectedProducts, !0).reduce((function(t, e) {
            var n;
            return y(y({}, t), ((n = {})[e.step] = e.uuid, n))
          }), {});
        Object(o.a)(u(y(y({
          type: e
        }, f), {
          page: n || d.response.meta.current_page + 1
        })), {
          Authorization: a.b.TOKEN
        }).then((function(n) {
          r(U({
            step: t,
            response: n,
            type: e
          }))
        })).catch((function(t) {
          r(T.failure(t)), Object(b.a)(t, r)
        }))
      }
    }
}, , , function(t, e, n) {
  "use strict";
  n.d(e, "i", (function() {
    return l
  })), n.d(e, "k", (function() {
    return s
  })), n.d(e, "h", (function() {
    return d
  })), n.d(e, "e", (function() {
    return f
  })), n.d(e, "d", (function() {
    return p
  })), n.d(e, "b", (function() {
    return _
  })), n.d(e, "j", (function() {
    return v
  })), n.d(e, "a", (function() {
    return b
  })), n.d(e, "c", (function() {
    return O
  })), n.d(e, "f", (function() {
    return E
  })), n.d(e, "g", (function() {
    return m
  }));
  var r = n(7),
    i = n(9),
    o = n(46),
    a = n(74),
    c = n(5),
    u = function(t) {
      return t.rooms
    },
    l = (Object(r.a)([u], (function(t) {
      return null
    })), Object(r.a)([u], (function(t) {
      return t.selectedRoom
    }))),
    s = Object(r.a)([l], (function(t) {
      return null == t ? void 0 : t.room_type_id
    })),
    d = Object(r.a)([u], (function(t) {
      return t.rooms
    })),
    f = Object(r.a)(u, (function(t) {
      return t.numberOfOverlayResult
    })),
    p = Object(r.a)(u, (function(t) {
      return t.isRoomListLoading
    })),
    _ = Object(r.a)(u, (function(t) {
      return t.overlayResult
    })),
    v = Object(r.a)(l, (function(t) {
      var e, n, r, o;
      return t ? !(null == t ? void 0 : t.walls.length) || (null === (e = null == t ? void 0 : t.floor) || void 0 === e ? void 0 : e.x) || (null === (n = null == t ? void 0 : t.floor) || void 0 === n ? void 0 : n.y) ? (null === (r = null == t ? void 0 : t.floor) || void 0 === r ? void 0 : r.x) && (null === (o = null == t ? void 0 : t.floor) || void 0 === o ? void 0 : o.y) && !(null == t ? void 0 : t.walls.length) ? i.b.floor : i.b.all : i.b.wall : null
    })),
    b = Object(r.a)(u, (function(t) {
      return t.countMyInteriors
    })),
    O = Object(r.a)(u, (function(t) {
      return t.isOpenBadPhotoPopup
    })),
    E = Object(r.a)(u, (function(t) {
      return t.photoQualityError
    })),
    m = Object(r.a)([E, a.b, a.a], (function(t, e, n) {
      var r = "";
      return t === o.a.badTargetConfidence ? r = "ERROR_MESSAGES.BAD_UPLOAD_PARAMETERS.NOT_INTERIOR_IMAGE_TITLE" : t === o.a.blurryConfidence ? r = "ERROR_MESSAGES.BAD_UPLOAD_PARAMETERS.BLURRY_IMAGE_TITLE" : t === o.a.darkConfidence ? r = "ERROR_MESSAGES.BAD_UPLOAD_PARAMETERS.DARK_IMAGE_TITLE" : t === o.a.noisyConfidence ? r = "ERROR_MESSAGES.BAD_UPLOAD_PARAMETERS.NOISY_IMAGE_TITLE" : t === o.a.surfaceRecognized && (r = "ERROR_MESSAGES.BAD_UPLOAD_PARAMETERS.NO_SURFACE_IMAGE_TITLE"), r ? Object(c.h)(n, e, r) : ""
    }))
}, , , function(t, e, n) {
  "use strict";
  n.d(e, "b", (function() {
    return _
  }));
  var r = n(0),
    i = n.n(r),
    o = n(8),
    a = n(6),
    c = n(40),
    u = n(44),
    l = n(22),
    s = n(9),
    d = n(18),
    f = n(25),
    p = n(85),
    _ = function(t) {
      return t.reduce((function(t, e) {
        var n = t.findIndex((function(t) {
          return t.code === e.code
        }));
        return -1 !== n ? (t[n].data.push(e.id), t[n].values.push(e.value)) : t.push({
          code: e.code,
          data: [e.id],
          values: [e.value]
        }), t
      }), [])
    };
  e.a = function() {
    var t = Object(o.d)(p.getFiltersByArticleType),
      e = Object(o.d)(c.getArticleType),
      n = Object(o.d)(c.getFilterNameByArticleType),
      _ = Object(o.d)(l.articlesStore.navigationSelectors.getCurrentView),
      v = Object(r.useState)(n),
      b = v[0],
      O = v[1],
      E = Object(o.c)();
    i.a.useEffect((function() {
      E(Object(d.setIsFilterKeyPress)(!1)), _ === s.a.search || n || O("")
    }), [_, n]);
    return {
      changeInputSearch: function(t) {
        O(t.target.value)
      },
      clearInputSearch: function() {
        O("")
      },
      handleInputSearchButtonClick: function() {
        E(Object(u.changeFilterName)(b, e))
      },
      handleKeyPress: function(t) {
        "Enter" === t.key && E(Object(u.changeFilterName)(b, e))
      },
      inputSearchValue: b,
      handleClickMana: function(t) {
        O(""), E(l.articlesStore.articlesActions.manaActions.onAddManaImage(t))
      },
      onHandleClickFilter: function() {
        E(Object(f.articleNavigate)(s.a.filters)), a.c.fireEvent(a.a.filtersOpen)
      },
      filters: t,
      type: e
    }
  }
}, function(t, e, n) {
  "use strict";
  n.d(e, "d", (function() {
    return a
  })), n.d(e, "a", (function() {
    return c
  })), n.d(e, "b", (function() {
    return u
  })), n.d(e, "g", (function() {
    return d
  })), n.d(e, "e", (function() {
    return f
  })), n.d(e, "f", (function() {
    return p
  })), n.d(e, "c", (function() {
    return _
  })), n.d(e, "h", (function() {
    return v
  }));
  var r = n(0),
    i = n.n(r),
    o = n(20),
    a = function(t) {
      return i.a.createElement("div", {
        className: "favorite-button flex-center",
        onClick: t.onClick
      }, i.a.createElement(o.y, null))
    },
    c = function(t) {
      return i.a.createElement("div", {
        className: "catalog-back-button",
        onClick: t.onClick
      }, i.a.createElement(o.e, null))
    },
    u = function(t) {
      return i.a.createElement("div", {
        className: "catalog-close-button",
        onClick: t.onClick
      }, i.a.createElement(o.k, null))
    },
    l = n(17),
    s = n.n(l),
    d = function(t) {
      return i.a.createElement("div", {
        className: s()("favorite-button flex-center", {
          "favorite-button--primary": t.primary
        }),
        onClick: t.onClick
      }, t.dot && i.a.createElement("div", {
        className: "favorite-button__dot"
      }), t.children)
    },
    f = Object(r.lazy)((function() {
      return n.e(13).then(n.bind(null, 390))
    })),
    p = Object(r.lazy)((function() {
      return n.e(14).then(n.bind(null, 381))
    })),
    _ = Object(r.lazy)((function() {
      return n.e(8).then(n.bind(null, 384))
    })),
    v = Object(r.lazy)((function() {
      return Promise.all([n.e(0), n.e(38), n.e(28)]).then(n.bind(null, 391))
    }))
}, , , , , function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return o
  })), n.d(e, "b", (function() {
    return a
  })), n.d(e, "c", (function() {
    return c
  }));
  var r, i = n(62);
  ! function(t) {
    t.getStore = "getFavorites", t.add = "addFavorite", t.remove = "removeFavorite"
  }(r || (r = {}));
  var o = function(t) {
      Object(i.a)({
        eventName: r.add,
        payload: {
          item: t
        }
      })
    },
    a = function(t) {
      Object(i.a)({
        eventName: r.remove,
        payload: {
          item: t
        }
      })
    },
    c = function(t) {
      Object(i.a)({
        eventName: r.getStore,
        payload: {
          list: t
        }
      })
    }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "useImage", (function() {
    return r.a
  })), n.d(e, "useDevice", (function() {
    return i.a
  })), n.d(e, "useBackButton", (function() {
    return u
  })), n.d(e, "useWizartInit", (function() {
    return j
  }));
  var r = n(142),
    i = n(127),
    o = n(8),
    a = n(6),
    c = n(13),
    u = function() {
      var t = Object(o.d)(c.c);
      return {
        isBackButtonAction: !!t,
        onHandleClickBackButton: function() {
          a.c.fireEvent(a.a.backButtonClicked), setTimeout((function() {
            return t()
          }), 225)
        }
      }
    },
    l = n(0),
    s = n.n(l),
    d = n(5),
    f = n(2),
    p = n(1),
    _ = n(109),
    v = n(36),
    b = n(11),
    O = n(86),
    E = n(12),
    m = n(43),
    y = n(26),
    g = function() {
      return function(t) {
        Object(m.b)().then((function(e) {
          t({
            type: E.c,
            payload: {
              localization: e
            }
          }), t({
            type: E.p
          })
        })).catch((function(e) {
          t({
            type: E.p
          }), Object(y.a)(e, t)
        }))
      }
    },
    T = n(28),
    h = n(138),
    S = n(118),
    A = n(155),
    I = n(52),
    C = n(34),
    R = n(156),
    j = function() {
      var t = s.a.useState(!1),
        e = t[0],
        n = t[1],
        r = Object(o.c)();
      return s.a.useLayoutEffect((function() {
        window.wizart = {
          init: function(t) {
            if (t.token && t.client_identifier && t.client_identifier.length) {
              r(Object(C.d)()), t.backButtonAction && r(Object(C.b)(t.backButtonAction));
              var e = Object(d.n)(t.token, t.user_id),
                i = Object(_.b)();
              r(Object(C.c)(i));
              var o = Object(p.c)(t, i, e);
              if (o.BLOCKED) return r(g()), r(Object(v.a)(f.k.RoomPicker)), void n(!0);
              "string" != typeof t.floors_enabled && "string" != typeof t.walls_enabled && r(O.e.articlesAPI.initSurfacesEnabled()), t.room_uuid ? r(Object(S.d)(t.room_uuid, t.article_query)) : (o.OPEN_FIRST_ROOM ? (r(Object(T.b)(!1)), r(Object(v.a)(f.k.Main))) : r(Object(v.a)(f.k.RoomPicker)), r(Object(S.b)({
                  articleQuery: t.article_query
                }))),
                function(t, e) {
                  a.d.init(), t && !p.b.BLOCKED && "ios" !== p.b.TOKEN_TYPE && b.fireEvent(a.a.launchFirstTime), e || p.b.BLOCKED || b.sessionStart(e)
                }(e, o.START_WITH_PRODUCT), o.ENABLE_TWO_WAY_FAVORITES || r(O.e.articlesStore.articlesActions.favoritesActions.initFavoritesArticles()), o.ENABLE_TWO_WAY_SHOPPING_CART || r(Object(I.h)()), r(Object(R.a)()), r(Object(h.b)()), r(Object(A.a)()), r(g()), b.openGallery(!0), n(!0)
            }
          }
        }
      }), []), {
        isAppInitialized: e
      }
    }
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return a
  })), n.d(e, "b", (function() {
    return c
  }));
  var r = n(1),
    i = function(t) {
      if (!t || !r.b.CONTEXT || !t.length) return null;
      var e = t.findIndex((function(t) {
        return t === r.b.CONTEXT
      }));
      return -1 === e ? null : e
    },
    o = function(t, e) {
      return e && e.length && e.length > 1 ? e[t || 0] : e && e.length ? e[0] : null
    },
    a = function(t) {
      var e = i(t.context),
        n = o(e, t.regular_price),
        r = o(e, t.promotional_price);
      return {
        link: function(t, e) {
          return e && e.length && e.length > 1 ? e[t || 0] : e && e.length ? e[0] : null
        }(e, t.links_by_context),
        prices: {
          promotional_price: r,
          regular_price: n
        },
        currency: o(e, t.currency_by_context)
      }
    },
    c = function(t) {
      var e = i(t.context),
        n = o(e, t.currency_by_context),
        r = "";
      return o(e, t.regular_price) && (t.context && n ? r = n : t.currency && (r = t.currency)), r
    }
}, , function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return a
  })), n.d(e, "b", (function() {
    return c
  }));
  var r = n(2),
    i = n(164),
    o = function() {
      return (o = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    a = function(t, e) {
      var n = 0;
      return t ? (t.type === r.c.DESKTOP && e === r.f.Landscape ? n = 8 : t.type === r.c.TABLET && e === r.f.Landscape ? n = 7 : t.type !== r.c.DESKTOP && t.type !== r.c.TABLET || e !== r.f.Portrait ? t.type === r.c.MOBILE && e === r.f.Portrait ? n = 2 : t.type === r.c.MOBILE && e === r.f.Landscape && (n = 4) : n = 4, n) : n
    },
    c = function() {
      var t = (new i.UAParser).getResult(),
        e = "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || "iPad" === navigator.platform ? r.c.TABLET : t.device.type || r.c.DESKTOP;
      return o(o({}, t.device), {
        type: e,
        os: t.os,
        browser: t.browser
      })
    }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "changeIsOpenPatternsPopup", (function() {
    return o
  })), n.d(e, "resetSelectedPatterns", (function() {
    return a
  })), n.d(e, "selectAndApplyPattern", (function() {
    return c
  }));
  var r = n(35),
    i = n(39),
    o = function(t) {
      return {
        type: r.ArticlesActionTypes.CHANGE_IS_OPEN_PATTERNS_POPUP,
        payload: {
          isOpen: t
        }
      }
    },
    a = Object(i.createAction)("RESET_SELECTED_PATTERNS")(),
    c = function(t, e) {
      return function(t) {
        t(r.articlesActions.applyActions.performApply({
          sendAnalytics: !1
        }))
      }
    }
}, function(t, e, n) {
  "use strict";
  n.d(e, "b", (function() {
    return d
  })), n.d(e, "a", (function() {
    return f
  })), n.d(e, "d", (function() {
    return _
  })), n.d(e, "c", (function() {
    return v
  })), n.d(e, "i", (function() {
    return b
  })), n.d(e, "h", (function() {
    return O
  })), n.d(e, "k", (function() {
    return E
  })), n.d(e, "f", (function() {
    return m
  })), n.d(e, "e", (function() {
    return y
  })), n.d(e, "j", (function() {
    return g
  })), n.d(e, "g", (function() {
    return T
  }));
  var r = n(7),
    i = n(40),
    o = n(69),
    a = n(9),
    c = n(19),
    u = n(74),
    l = n(5),
    s = n(1),
    d = function(t) {
      return t.catalog
    },
    f = Object(r.a)([d], (function(t) {
      return t.loading
    })),
    p = Object(r.a)([function(t) {
      return t.articles.navigation
    }], (function(t) {
      return t.current
    })),
    _ = Object(r.a)([d, i.getArticleType], (function(t, e) {
      return t[e]
    })),
    v = Object(r.a)([_], (function(t) {
      return t.currentStep
    })),
    b = Object(r.a)([_, v], (function(t, e) {
      var n = t.steps.find((function(t) {
        return t.name === e
      }));
      return n ? n.response : null
    })),
    O = Object(r.a)([_, v], (function(t, e) {
      var n = Object(o.c)(e);
      return n ? Object(o.a)(n, t.selectedProducts) : null
    })),
    E = Object(r.a)([_, v, p], (function(t, e, n) {
      var r = n === a.a.search ? c.a.products : e;
      return Object(o.a)(r, t.selectedProducts)
    })),
    m = Object(r.a)([d], (function(t) {
      return t.lastSelectedProduct
    })),
    y = Object(r.a)([_], (function(t) {
      return t.initProductPage
    })),
    g = Object(r.a)([_], (function(t) {
      return t
    })),
    T = Object(r.a)([p, v, u.b, u.a, O], (function(t, e, n, r, i) {
      var o;
      if (t === a.a.filters) return Object(l.h)(r, n, "FILTER_PANEL.FILTERS");
      if (t === a.a.search) return Object(l.h)(r, n, "ARTICLE_LIST.SEARCH_RESULTS");
      if (t === a.a.favorites) return Object(l.h)(r, n, "FAVORITES.TITLE");
      if (t === a.a.customProducts) return Object(l.h)(r, n, "ARTICLE_LIST.MY_PRODUCT");
      var u = s.b.CATALOG_STRUCTURE[0] === e,
        d = Object(l.h)(r, n, "ARTICLE_LIST.TITLE"),
        f = (null == i ? void 0 : i.step) === c.a.product_type ? Object(l.h)(r, n, "PRODUCT_TYPE." + (null === (o = null == i ? void 0 : i.uuid) || void 0 === o ? void 0 : o.toUpperCase())) : (null == i ? void 0 : i.name) || "";
      switch (e) {
        case c.a.brands:
        case c.a.collections:
        case c.a.products:
          return u ? d : f;
        case c.a.product_type:
          return d;
        default:
          return ""
      }
    }))
}, function(t, e, n) {
  "use strict";
  n.d(e, "c", (function() {
    return o
  })), n.d(e, "a", (function() {
    return a
  })), n.d(e, "b", (function() {
    return c
  }));
  var r = n(7),
    i = function(t) {
      return t.contactForm
    },
    o = Object(r.a)(i, (function(t) {
      return t.isOpen
    })),
    a = Object(r.a)(i, (function(t) {
      return t.areShownIcons
    })),
    c = Object(r.a)(i, (function(t) {
      return t.currentStep
    }));
  Object(r.a)(i, (function(t) {
    return t.isActive
  })), Object(r.a)(i, (function(t) {
    return t.isCalled
  }))
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return r
  }));
  var r = function(t) {
    return {
      data: t.data,
      page: +t.meta.current_page,
      lastPage: +t.meta.last_page,
      total: +t.meta.total,
      meta: t.meta
    }
  }
}, , , function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return r
  }));
  var r = "SWITCH_MODAL_VISIBILITY"
}, , function(t, e, n) {
  "use strict";
  n.d(e, "b", (function() {
    return L
  })), n.d(e, "d", (function() {
    return w
  })), n.d(e, "j", (function() {
    return P
  })), n.d(e, "i", (function() {
    return N
  })), n.d(e, "a", (function() {
    return k
  })), n.d(e, "f", (function() {
    return F
  })), n.d(e, "e", (function() {
    return U
  })), n.d(e, "g", (function() {
    return x
  })), n.d(e, "h", (function() {
    return H
  })), n.d(e, "c", (function() {
    return G
  })), n.d(e, "k", (function() {
    return z
  }));
  n(208);
  var r = n(11),
    i = n(31),
    o = n(1),
    a = function() {
      return (a = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    c = function(t) {
      var e = {
        Authorization: o.b.TOKEN,
        "device-token": ""
      };
      return o.b.DEACTIVATE_CUSTOM_PHOTO || (e["device-token"] = o.b.USER_INDENTIFIER), Object(i.a)(o.b.INTERIORS_HOST + "/api/rooms?page=" + t, e).then((function(t) {
        return a(a({}, t), {
          data: t.data.map((function(t) {
            return a(a({}, t), {
              isLoaded: !1
            })
          }))
        })
      }))
    },
    u = function(t) {
      var e = o.b.USER_INDENTIFIER;
      return fetch(o.b.INTERIORS_HOST + "/api/rooms/" + t, {
        method: "DELETE",
        headers: {
          "device-token": e,
          Authorization: o.b.TOKEN
        }
      })
    },
    l = n(18),
    s = n(29),
    d = n(46),
    f = n(2),
    p = n(14),
    _ = n(26),
    v = n(48),
    b = n(28),
    O = n(42),
    E = n(5),
    m = n(12),
    y = n(25),
    g = n(21),
    T = n(24),
    h = n(6),
    S = n(13),
    A = n(84),
    I = n(22),
    C = n(9),
    R = function(t) {
      return {
        type: s.e,
        payload: {
          room: t
        }
      }
    },
    j = function(t) {
      return {
        type: s.d,
        payload: {
          response: t
        }
      }
    },
    L = function(t) {
      var e = t.articleQuery;
      return function(t) {
        t(W(!0)), t(Object(l.switchInitArticleNavigationLoadingState)(!0));
        var n = [],
          i = !1;
        n.push(c(1)), Object(E.c)(e) && !o.b.CUSTOM_PRODUCT && n.push(Object(T.getArticleByQuery)(e)), Promise.allSettled(n).then((function(e) {
          var n = e[0];
          if (e.length > 1) {
            var a = e[1];
            if (a && "fulfilled" === a.status && a.value && a.value.data.length > 0) {
              var c = a.value.data[0];
              c.brand_uuid && c.collection_uuid && (i = !0, t(Object(l.loadInitArticleDispatch)(c)), r.sessionStart(!0, c))
            } else a && "fulfilled" === a.status && !a.value && r.sessionStart(!1)
          }
          if ("fulfilled" === n.status) {
            if (t(j(n.value)), o.b.OPEN_FIRST_ROOM)
              if (n && n.value.data.length > 0) {
                var u = n.value.data[0];
                t(Object(p.g)(f.k.Main)), o.b.CUSTOM_PRODUCT ? t(P(u)) : t(N(u))
              } else t(Object(p.g)(f.k.RoomPicker)), t(Object(b.b)(!0))
          } else "rejected" === n.status && Object(_.a)(n.reason, t)
        })).catch((function(e) {
          Object(_.a)(e, t)
        })).finally((function() {
          t(W(!1)), i || t(Object(l.switchInitArticleNavigationLoadingState)(!1))
        }))
      }
    },
    w = function(t, e) {
      return function(n) {
        var a = null;
        n(Object(l.switchLoadingState)(!0)), n(Object(p.j)(!0)), n(Object(l.switchInitArticleNavigationLoadingState)(!0));
        var c = [];
        c.push(function(t) {
          return Object(i.a)(o.b.INTERIORS_HOST + "/api/rooms/" + t, {
            Authorization: o.b.TOKEN,
            "device-token": o.b.USER_INDENTIFIER
          })
        }(t)), Object(E.c)(e) && !o.b.CUSTOM_PRODUCT && c.push(Object(T.getArticleByQuery)(e)), Promise.allSettled(c).then((function(t) {
          var e = t[0],
            r = t[1];
          r && "fulfilled" === r.status && r.value && r.value.data.length > 0 && (a = r.value.data[0]).collection_uuid && a.brand_uuid ? n(Object(l.loadInitArticleDispatch)(a)) : n(Object(l.switchInitArticleNavigationLoadingState)(!1)), "fulfilled" === e.status && e.value ? (n(Object(p.g)(f.k.Main)), o.b.CUSTOM_PRODUCT ? n(P(e.value)) : n(N(e.value)), n(Object(p.j)(!1))) : (n(L({})), n(Object(b.b)(!0)), n(Object(p.g)(f.k.RoomPicker)), n(Object(p.j)(!1)), n(Object(l.switchInitArticleNavigationLoadingState)(!1)))
        })).catch((function(t) {
          console.error("error", t)
        })).finally((function() {
          e && r.sessionStart(!0, a)
        }))
      }
    },
    P = function(t) {
      return function(e, n) {
        var i, a, c, u = n().rooms,
          l = t.walls.length > 0 && (null === (i = o.b.CUSTOM_PRODUCT) || void 0 === i ? void 0 : i.surface.includes(f.b.wall)),
          s = (null === (a = t.floor) || void 0 === a ? void 0 : a.x) && (null === (c = t.floor) || void 0 === c ? void 0 : c.y) && o.b.CUSTOM_PRODUCT.surface.includes(f.b.floor);
        !l && !s || u.isOpenBadPhotoPopup ? e(N(t)) : (e(Object(b.a)()), e(R(t)), e(Object(p.d)(t)), e(Object(p.g)(f.k.Main)), e(Object(y.articleNavigate)(C.a.customProducts)), e(Object(p.f)(o.b.CUSTOM_PRODUCT)), r.selectRoom(t.room_type_id === d.b.MyInteriors, t.uuid))
      }
    },
    N = function(t, e) {
      return void 0 === e && (e = !1),
        function(n, i) {
          var a, c, u, s = i(),
            _ = s.rooms.isOpenBadPhotoPopup,
            v = s.auxiliaries.device.type,
            T = s.modal,
            h = s.catalog,
            S = i().articles;
          r.selectRoom(t.room_type_id === d.b.MyInteriors, t.uuid), n(R(t)), n(Object(p.d)(t));
          var C = o.b.CATALOG_STRUCTURE[0],
            j = h[S.type].currentStep || C,
            L = null === (a = h[S.type].steps) || void 0 === a ? void 0 : a.find((function(t) {
              return t.name === j
            })),
            w = S.initArticle || h.lastSelectedProduct,
            P = t.walls.length,
            N = (null === (c = t.floor) || void 0 === c ? void 0 : c.x) && (null === (u = t.floor) || void 0 === u ? void 0 : u.y),
            k = w ? w.application_type : [],
            F = w && k.includes(f.b.floor) && N && o.b.FLOORS_ENABLED || k.includes(f.b.wall) && P && o.b.WALLS_ENABLED;
          if (T.isOpen && v === f.c.DESKTOP || h.catalogWasOpen && T.isOpen && F || _ && T.isOpen || w && F) {
            n(Object(b.a)()), setTimeout((function() {
              return n(Object(p.j)(!0))
            }), 225);
            var U = new Image;
            U.onload = function() {
              setTimeout((function() {
                return n(Object(p.j)(!1))
              }), 225)
            }, U.src = Object(E.g)({
              shortPath: t.image_path,
              size: f.d.large,
              type: f.e.interior
            })
          } else v !== f.c.DESKTOP && n(Object(y.openArticlesPicker)()), n(Object(p.j)(!1)), n(Object(g.z)({
            status: !0
          })), r.startCatalog(!0, S.type);
          if (F) {
            var V = f.b.floor;
            !(k.includes(f.b.wall) && P && o.b.WALLS_ENABLED) || h.lastSelectedProductType !== f.b.wall && h.lastSelectedProductType && N && o.b.FLOORS_ENABLED || (V = f.b.wall), n(Object(l.switchInitArticleNavigationLoadingState)(!0)), n(Object(l.switchArticleType)(V)), n(Object(g.z)({
              status: !0
            }));
            var x = h[V].steps.find((function(t) {
              return t.name === I.CatalogViewEnum.products
            }));
            return (x && !x.response.data.some((function(t) {
              return t.uuid === w.uuid && t.collection_uuid === w.collection_uuid
            })) || !x) && (n(Object(g.x)({
              type: V
            })), n(Object(g.u)({
              product: w
            }))), v !== f.c.DESKTOP && n(Object(A.setScrollPosition)(0, I.CatalogViewEnum.products, !0)), n(Object(O.selectArticleItem)({
              article: w,
              articleType: V,
              isInitProduct: !0
            })), n(Object(p.g)(f.k.Main)), void n(Object(l.loadInitArticleDispatch)(null))
          }(!P && S.type !== f.b.floor && N || N && S.type !== f.b.floor && !o.b.WALLS_ENABLED) && o.b.FLOORS_ENABLED ? (n(Object(l.switchArticleType)(f.b.floor)), n(Object(g.x)({
            type: f.b.wall
          })), n(Object(g.u)())) : !N && S.type !== f.b.wall && P && o.b.WALLS_ENABLED ? (n(Object(l.switchArticleType)(f.b.wall)), n(Object(g.x)({
            type: f.b.floor
          })), n(Object(g.u)())) : (L && !L.response.data.length || !L) && n(Object(g.u)()), n(Object(O.clearApplyArticles)()), n({
            type: m.o
          }), !e && M(t) && n(D(d.a.surfaceRecognized))
        }
    },
    k = function(t) {
      return function(e) {
        r.fireEvent(h.a.customInteriorRecognitionErrorRetry, {
          interior_identifier: t.uuid,
          additional_data: {
            eventValue: {
              interior_id: t.uuid,
              scene_image_info: t.scene_image_info
            }
          }
        }), t.room_type_id === d.b.MyInteriors && (e(V(t.uuid)), u(t.uuid).catch((function(t) {
          Object(_.a)(t, e)
        }))), e(H()), setTimeout((function() {
          return e(D(null))
        }), 500)
      }
    },
    F = function(t) {
      return function(e, n) {
        var i, a = n(),
          c = a.articles,
          u = a.rooms,
          l = a.catalog,
          s = Object(S.g)(a);
        e(D(null)), r.fireEvent(h.a.customInteriorRecognitionErrorUseanyway, {
          interior_identifier: t.uuid,
          additional_data: {
            eventValue: {
              interior_id: t.uuid,
              scene_image_info: t.scene_image_info
            }
          }
        }), o.b.CUSTOM_PRODUCT ? (e(Object(p.g)(f.k.Main)), e(Object(y.articleNavigate)(C.a.customProducts)), e(Object(p.f)(o.b.CUSTOM_PRODUCT))) : (null === (i = null == u ? void 0 : u.overlayResult) || void 0 === i ? void 0 : i.src) || l.catalogWasOpen || s === f.c.DESKTOP || (e(Object(y.openArticlesPicker)()), e(Object(p.j)(!1)), e(Object(g.z)({
          status: !0
        })), r.startCatalog(!0, c.type))
      }
    },
    D = function(t) {
      return {
        type: s.h,
        payload: {
          photoQualityError: t
        }
      }
    },
    M = function(t) {
      var e, n, r, i;
      return !o.b.FLOORS_ENABLED && o.b.WALLS_ENABLED && 0 === t.walls.length && (null === (e = t.floor) || void 0 === e ? void 0 : e.x) && (null === (n = t.floor) || void 0 === n ? void 0 : n.y) || t.walls.length > 0 && !o.b.WALLS_ENABLED && o.b.FLOORS_ENABLED && !(null === (r = t.floor) || void 0 === r ? void 0 : r.x) && !(null === (i = t.floor) || void 0 === i ? void 0 : i.y)
    },
    U = function(t, e) {
      return function(a) {
        return r.fireEvent(h.a.startRoomUpload), a(Object(p.j)(!0)), Promise.all([n.e(37), n.e(25)]).then(n.bind(null, 373)).then((function(n) {
          return (0, n.resizeImage)(t, e).then((function(t) {
            return function(t) {
              var e = new FormData;
              e.append("image", t);
              var n = o.b.USER_INDENTIFIER;
              return Object(i.b)(o.b.INTERIORS_HOST + "/api/rooms", e, {
                "device-token": n,
                Authorization: o.b.TOKEN
              }).then((function(t) {
                return r.createPhoto(t.uuid), t
              }))
            }(t)
          })).then((function(t) {
            a(function(t) {
              return {
                type: s.a,
                payload: {
                  room: t
                }
              }
            }(t)), a(function(t) {
              return function(e) {
                var n = null;
                M(t) ? n = d.a.surfaceRecognized : t.scene_image_info && t.scene_image_info.bad_target_confidence >= .998 ? n = d.a.badTargetConfidence : t.scene_image_info && t.scene_image_info.blurry_confidence >= .999999 ? n = d.a.blurryConfidence : t.scene_image_info && t.scene_image_info.dark_confidence >= .995 ? n = d.a.darkConfidence : t.scene_image_info && t.scene_image_info.noisy_confidence >= .999 && (n = d.a.noisyConfidence), n && r.fireEvent(h.a.customInteriorRecognitionError, {
                  interior_identifier: t.uuid,
                  additional_data: {
                    eventValue: {
                      error: n,
                      interior_id: t.uuid,
                      scene_image_info: t.scene_image_info
                    }
                  }
                }), e(D(n))
              }
            }(t)), o.b.CUSTOM_PRODUCT ? a(P(t)) : a(N(t, !0)), a(Object(p.j)(!1)), Object(v.f)(), r.fireEvent(h.a.endRoomUpload)
          })).catch((function(t) {
            a(Object(p.j)(!1)), t.status === f.h.BAD_REQUEST ? a(B()) : t.status === f.h.UNPROCESSABLE_ENTITY && a(Object(p.l)(t.status, !0)), Object(_.a)(t, a), r.fireEvent(h.a.errorRoomUpload, {
              additional_data: {
                eventValue: {
                  extension_error: !1
                }
              }
            })
          }))
        }))
      }
    },
    V = function(t) {
      return {
        type: s.c,
        payload: {
          roomID: t
        }
      }
    },
    x = function(t) {
      return function(e) {
        e(Object(p.j)(!0)), u(t).then((function() {
          e(V(t)), e(Object(p.j)(!1))
        })).catch((function(t) {
          e(Object(p.j)(!1)), Object(_.a)(t, e)
        }))
      }
    },
    H = function() {
      return function(t, e) {
        var n = e(),
          i = n.navigation.view;
        0 === n.rooms.rooms.data.length && t(L({})), i !== f.k.RoomPicker && n.modal.isOpen ? setTimeout((function() {
          t(Object(b.b)(!1)), i === f.k.ArticlesInfo ? r.fireEvent(h.a.closeMyRoom) : i === f.k.ShoppingCart && r.fireEvent(h.a.closeShoppingCart), setTimeout((function() {
            t(Object(p.g)(f.k.RoomPicker)), setTimeout((function() {
              return t(Object(b.b)(!0))
            }), 0)
          }), 200)
        }), 0) : (t(Object(p.g)(f.k.RoomPicker)), setTimeout((function() {
          return t(Object(b.b)(!0))
        }), 0)), r.openGallery(!1)
      }
    },
    B = function() {
      return {
        type: s.j
      }
    },
    G = function() {
      return function(t, e) {
        var n = e().rooms;
        c(n.rooms.meta.current_page + 1).then((function(e) {
          t(j(e))
        }))
      }
    },
    W = function(t) {
      return {
        type: s.b,
        payload: {
          isRoomListLoading: t
        }
      }
    },
    z = function(t, e) {
      return {
        type: s.i,
        payload: {
          isLoaded: t,
          uuid: e
        }
      }
    }
}, function(t, e, n) {
  "use strict";
  n.d(e, "b", (function() {
    return O
  })), n.d(e, "c", (function() {
    return E
  })), n.d(e, "a", (function() {
    return g
  }));
  var r = n(36),
    i = n(28),
    o = n(14),
    a = n(5),
    c = n(47),
    u = n(26),
    l = n(157),
    s = n(11),
    d = n(76),
    f = n(2),
    p = n(52),
    _ = n(6),
    v = function(t, e, n, r) {
      return new(n || (n = Promise))((function(i, o) {
        function a(t) {
          try {
            u(r.next(t))
          } catch (t) {
            o(t)
          }
        }

        function c(t) {
          try {
            u(r.throw(t))
          } catch (t) {
            o(t)
          }
        }

        function u(t) {
          var e;
          t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
            t(e)
          }))).then(a, c)
        }
        u((r = r.apply(t, e || [])).next())
      }))
    },
    b = function(t, e) {
      var n, r, i, o, a = {
        label: 0,
        sent: function() {
          if (1 & i[0]) throw i[1];
          return i[1]
        },
        trys: [],
        ops: []
      };
      return o = {
        next: c(0),
        throw: c(1),
        return: c(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this
      }), o;

      function c(o) {
        return function(c) {
          return function(o) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; a;) try {
              if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
              switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                case 0:
                case 1:
                  i = o;
                  break;
                case 4:
                  return a.label++, {
                    value: o[1],
                    done: !1
                  };
                case 5:
                  a.label++, r = o[1], o = [0];
                  continue;
                case 7:
                  o = a.ops.pop(), a.trys.pop();
                  continue;
                default:
                  if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                    a = 0;
                    continue
                  }
                  if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                    a.label = o[1];
                    break
                  }
                  if (6 === o[0] && a.label < i[1]) {
                    a.label = i[1], i = o;
                    break
                  }
                  if (i && a.label < i[2]) {
                    a.label = i[2], a.ops.push(o);
                    break
                  }
                  i[2] && a.ops.pop(), a.trys.pop();
                  continue
              }
              o = e.call(t, a)
            } catch (t) {
              o = [6, t], r = 0
            } finally {
              n = i = 0
            }
            if (5 & o[0]) throw o[1];
            return {
              value: o[0] ? o[1] : void 0,
              done: !0
            }
          }([o, c])
        }
      }
    },
    O = function() {
      return {
        type: d.a
      }
    },
    E = function() {
      return function(t, e) {
        var n = e();
        n.navigation.view === f.k.ShoppingCart && (t(Object(p.e)()), s.fireEvent(_.a.closeShoppingCart)), n.navigation.view === f.k.ArticlesInfo && n.modal.isOpen ? setTimeout((function() {
          t(Object(i.b)(!1)), setTimeout((function() {
            t(Object(r.a)(f.k.Main))
          }), 200)
        }), 0) : (t(Object(r.a)(f.k.ArticlesInfo)), setTimeout((function() {
          return t(Object(i.b)(!0))
        }), 0)), n.modal.isOpen && n.navigation.view === f.k.ArticlesInfo ? s.fireEvent(_.a.closeMyRoom) : s.fireEvent(_.a.openMyRoom)
      }
    },
    m = function(t) {
      return function(e) {
        e({
          type: d.c,
          payload: {
            isLoading: t
          }
        })
      }
    },
    y = function() {
      return function(t, e) {
        var n = e(),
          r = Object(c.c)(n);
        Object(l.a)(r).then((function(e) {
          var r, i = Object(a.b)(e, n.auxiliaries.vocabulary);
          t((r = i, {
            type: d.b,
            payload: {
              list: r
            }
          })), t(m(!1))
        })).catch((function(e) {
          t(m(!1)), Object(u.a)(e, t)
        }))
      }
    },
    g = function() {
      return function(t) {
        return v(void 0, void 0, void 0, (function() {
          return b(this, (function(e) {
            switch (e.label) {
              case 0:
                return [4, t(m(!0))];
              case 1:
                return e.sent(), [4, t(Object(o.c)())];
              case 2:
                return e.sent(), [4, t(y())];
              case 3:
                return e.sent(), [2]
            }
          }))
        }))
      }
    }
}, , , function(t, e, n) {}, , , , , function(t, e, n) {
  "use strict";
  var r = n(8),
    i = n(13),
    o = n(2);
  e.a = function() {
    var t = Object(r.d)(i.g),
      e = Object(r.d)(i.h);
    return {
      isMobile: t === o.c.MOBILE,
      isTablet: t === o.c.TABLET,
      deviceType: t,
      orientation: e
    }
  }
}, , function(t, e, n) {
  "use strict";
  var r = n(0),
    i = n.n(r),
    o = n(214),
    a = n(216),
    c = n(49);
  e.a = Object(c.a)((function() {
    return Object(a.a)({
      root: {
        backgroundColor: "var(--wizart-secondary-color_10)",
        borderRadius: "9%"
      }
    })
  }))((function(t) {
    var e = t.variant,
      n = t.height,
      r = void 0 === n ? null : n,
      a = t.styles,
      c = void 0 === a ? {} : a,
      u = t.className,
      l = void 0 === u ? "" : u,
      s = t.classes,
      d = t.animation,
      f = void 0 === d ? "pulse" : d;
    return i.a.createElement(o.a, {
      variant: e,
      height: r,
      classes: {
        root: s.root
      },
      style: c,
      className: l,
      animation: f
    })
  }))
}, function(t, e, n) {
  "use strict";
  n.d(e, "b", (function() {
    return c
  })), n.d(e, "a", (function() {
    return s
  }));
  var r = n(64),
    i = n(80),
    o = n(34),
    a = n(47),
    c = function() {
      return {
        type: r.d
      }
    },
    u = function(t) {
      return {
        type: r.b,
        payload: {
          isError: t
        }
      }
    },
    l = function() {
      return {
        type: r.c
      }
    },
    s = function() {
      return function(t, e) {
        var n = e();
        t(u(!1)), t(l()), t(Object(o.f)(!0)), t(c());
        var s = n.rooms,
          d = n.surfaces,
          f = Object(a.h)(n);
        Object(i.a)(s.selectedRoom, d, f.length > 0).then((function(e) {
          var n, i, o;
          t((n = e.url, i = e.customer_name, o = e.image_url, {
            type: r.a,
            payload: {
              shareURL: n,
              clientName: i,
              imageURL: o
            }
          }))
        })).catch((function() {
          t(u(!0))
        })).finally((function() {
          t(l()), t(Object(o.f)(!1))
        }))
      }
    }
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return u
  }));
  var r = n(2),
    i = n(6),
    o = n(36),
    a = n(11),
    c = n(28),
    u = function() {
      return function(t, e) {
        var n = e(),
          u = n.modal,
          l = n.navigation;
        u.isOpen && l.view === r.k.Download ? (t(Object(c.b)(!1)), t(Object(o.a)(r.k.Main)), a.fireEvent(i.a.closeDownloadView)) : !u.isOpen || l.view !== r.k.ArticlesInfo && l.view !== r.k.ShoppingCart ? (t(Object(o.a)(r.k.Download)), t(Object(c.b)(!0)), a.fireEvent(i.a.openDownloadView)) : (l.view === r.k.ArticlesInfo ? a.fireEvent(i.a.closeMyRoom) : l.view === r.k.ShoppingCart && a.fireEvent(i.a.closeShoppingCart), t(Object(c.b)(!1)), setTimeout((function() {
          t(Object(o.a)(r.k.Download)), t(Object(c.b)(!0))
        }), 0), a.fireEvent(i.a.openDownloadView))
      }
    }
}, , function(t, e, n) {
  "use strict";
  var r;
  n.d(e, "a", (function() {
      return r
    })),
    function(t) {
      t.fillIn = "fillIn", t.successResponse = "successResponse"
    }(r || (r = {}))
}, , , , , function(t, e, n) {
  "use strict";
  n.d(e, "b", (function() {
    return o
  })), n.d(e, "c", (function() {
    return a
  })), n.d(e, "a", (function() {
    return u
  }));
  var r = n(5),
    i = function() {
      return (i = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    o = function() {
      return function(t) {
        Object(r.e)().disclaimer ? t(c(1)) : t(c(0))
      }
    },
    a = function() {
      return function(t) {
        var e = Object(r.e)();
        Object(r.r)(i(i({}, e), {
          disclaimer: !0
        })), t(c(1))
      }
    },
    c = function(t) {
      return {
        type: "[DISCLAIMER] IS_CALLED_DISCLAIMER",
        payload: {
          isCalled: t
        }
      }
    },
    u = function(t) {
      return {
        type: "[DISCLAIMER] CHANGE_IS_OPEN_DISCLAIMER",
        payload: {
          isOpen: t
        }
      }
    }
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return C
  })), n.d(e, "b", (function() {
    return w
  })), n.d(e, "c", (function() {
    return D
  }));
  var r = n(11),
    i = n(5),
    o = n(107),
    a = n(68),
    c = n(73),
    u = n(18),
    l = n(58),
    s = n(71),
    d = n(52),
    f = n(65),
    p = n(0),
    _ = n.n(p),
    v = n(8),
    b = n(2),
    O = n(20),
    E = n(96),
    m = n(9),
    y = n(19),
    g = n(21),
    T = n(82),
    h = n(40),
    S = n(47),
    A = n(38),
    I = n(72),
    C = function(t, e) {
      var n, p, C = Object(v.c)(),
        R = Object(v.d)(g.g),
        j = Object(v.d)(T.getCurrentView),
        L = Object(v.d)(s.getFavorites),
        w = Object(a.a)(null === (n = L[e]) || void 0 === n ? void 0 : n.articles, t),
        P = Object(v.d)(g.j),
        N = _.a.useMemo((function() {
          return Object(i.s)(R, t)
        }), [R, t]),
        k = Object(v.d)(f.b),
        F = Object(v.d)(E.j),
        D = !!k.find(Object(c.a)(t)),
        M = Object(v.d)(S.e),
        U = Object(v.d)(h.getApplyLoading),
        V = t.image_path ? "" + Object(i.g)({
          shortPath: t.image_path,
          size: b.d.small,
          type: b.e.product,
          fullSizeImage: N,
          productTypeCode: null === (p = null == t ? void 0 : t.product_type) || void 0 === p ? void 0 : p.code
        }) : O.jb,
        x = Object(o.a)(t),
        H = _.a.useCallback((function(e) {
          e.stopPropagation(), window.open(x.link), r.clickInfo(!0, !1, !1, t)
        }), []),
        B = _.a.useCallback((function(n) {
          return n.stopPropagation(), C(w ? Object(l.deleteFavoriteItem)(t, e) : Object(l.addFavoriteItem)(t, e))
        }), [w]),
        G = _.a.useCallback((function(n) {
          return n.stopPropagation(), C(D ? Object(d.f)(t, e) : Object(d.a)(t, e))
        }), [D]),
        W = _.a.useCallback((function(n) {
          var i, o;
          if (!P && M && C(Object(I.i)(!1)), n.stopPropagation(), R === y.a.products && j === m.a.products || j === m.a.search) {
            if (P && t.product_type.code === A.b.rug && t.vendor_code === P.vendor_code) return;
            if (t.image_path && !U) {
              var a = j === m.a.search ? y.a.products : R;
              C(Object(u.selectArticle)(t, e)), C(Object(g.y)({
                selectedProduct: {
                  uuid: t.uuid,
                  name: t.name,
                  product: t,
                  step: a
                },
                step: a,
                type: e
              }))
            }
          } else if (j === m.a.favorites) {
            if (P && t.product_type.code === A.b.rug && t.vendor_code === P.vendor_code) return;
            C(Object(u.selectArticle)(t, e)), C(Object(g.B)({
              product: t,
              type: e
            }))
          } else R === y.a.collections ? r.selectCollection(t) : R === y.a.brands && r.selectBrand(t), C(Object(g.r)({
            uuid: R === y.a.product_type ? t.code : t.uuid,
            name: t.name,
            product: t
          }));
          var c = null === (i = t.application_type) || void 0 === i ? void 0 : i.includes(b.b.wall),
            l = null === (o = t.application_type) || void 0 === o ? void 0 : o.includes(b.b.floor);
          F === m.b.wall && l && !c || m.b.floor
        }), [t, U, P]);
      return {
        isFavorite: w,
        isAddedInShoppingCart: D,
        src: V,
        catalogStep: R,
        articleItemsByContext: x,
        onHandleClickInfo: H,
        onFavoriteClick: B,
        onShoppingCartClick: G,
        onHandleSelectArticle: W
      }
    },
    R = n(13),
    j = n(84),
    L = n(35),
    w = function() {
      var t = Object(v.c)(),
        e = Object(v.d)(R.h),
        n = Object(v.d)(L.navigationSelectors.getScrollPosition),
        r = Object(v.d)(g.o),
        i = Object(v.d)(L.articleSelectors.getArticleType),
        o = Object(v.d)(g.g),
        a = Object(v.d)(T.getCurrentView),
        c = Object(p.useRef)(null),
        u = _.a.useState(null),
        l = u[0],
        s = u[1],
        d = a === m.a.products;
      Object(p.useEffect)((function() {
        if (d && c.current && n.orientation === e && !n.isMiniCatalog) c.current.scrollTo(0, n.top);
        else if (d && c.current && r && r.product && (null !== n.orientation || n.isMiniCatalog)) {
          var t = c.current.children[0].children[0],
            i = Array.from(t.children).find((function(t) {
              var e, n, i;
              if (!t.attributes["data-article"]) return !1;
              var o = JSON.parse((null === (e = t.attributes["data-article"]) || void 0 === e ? void 0 : e.value) || {});
              return o.uuid === (null === (n = r.product) || void 0 === n ? void 0 : n.uuid) && o.collection_uuid === (null === (i = r.product) || void 0 === i ? void 0 : i.collection_uuid)
            }));
          i && i.offsetTop && c.current.scrollTo(0, i.offsetTop - 25)
        }
      }), [c.current, o]), _.a.useEffect((function() {
        (l && l !== i || !l && o !== y.a.products) && c.current.scrollTo(0, 0), s(i)
      }), [i]);
      return {
        listRef: c,
        onScroll: function() {
          c.current && d && t(Object(j.setScrollPosition)(c.current.scrollTop, o))
        }
      }
    },
    P = n(22),
    N = n(6),
    k = n(1),
    F = n(25),
    D = function() {
      var t = Object(v.c)(),
        e = Object(v.d)(P.getNavigationTitle),
        n = Object(v.d)(P.getCatalogLoading),
        r = Object(v.d)(P.getCurrentStep),
        i = Object(v.d)(L.navigationSelectors.getCurrentView),
        o = Object(v.d)(s.getCountFavoritesOfTypes),
        a = Object(v.d)(E.i),
        c = Object(v.d)(E.j),
        u = Object(P.getSurfaceTypeOfSelectedInteriorForFavorites)(a),
        l = Object(p.useState)(null),
        d = l[0],
        f = l[1],
        _ = Object(p.useState)(null),
        b = (_[0], _[1]),
        O = Object(p.useState)(!1),
        y = O[0],
        g = O[1],
        T = o[u || "all"].ids;
      Object(p.useEffect)((function() {
        !n && e && r && i !== m.a.customProducts ? (f(e), b(r), g(r && r !== k.b.CATALOG_STRUCTURE[0] && i === m.a.products || i === m.a.search || i === m.a.favorites || i === m.a.filters)) : !n && e && i === m.a.customProducts && (f(e), b(r), g(!0))
      }), [n, e, r, i]);
      var h = Object(p.useCallback)((function() {
        n || (N.c.fireEvent(N.a.selectBackStep), t(Object(P.goToPreviousCatalogStep)())), i === m.a.filters && N.c.fireEvent(N.a.filtersClose)
      }), [n, i]);
      return {
        title: d,
        showBack: y,
        favoriteCount: T,
        navigationStep: i,
        selectedRoomType: c,
        onHandleClickBack: h,
        onFavoriteClick: function() {
          t(Object(F.selectFavoritesControl)())
        },
        onCloseClick: function() {
          t(Object(F.closeArticleCatalog)()), i === m.a.filters && N.c.fireEvent(N.a.filtersClose)
        },
        onCustomProductClick: function() {
          t(Object(F.selectCustomProductControl)())
        }
      }
    }
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    i = n.n(r),
    o = n(17),
    a = n.n(o),
    c = n(240),
    u = n(216),
    l = n(248),
    s = function() {
      return (s = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    d = function(t, e) {
      var n = {};
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
      if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (r = Object.getOwnPropertySymbols(t); i < r.length; i++) e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]])
      }
      return n
    },
    f = Object(c.a)((function() {
      return Object(u.a)({
        root: {
          height: "max-content"
        }
      })
    }));
  e.a = function(t) {
    var e = t.children,
      n = t.badgeContent,
      r = t.overlap,
      o = void 0 === r ? "circular" : r,
      c = t.size,
      u = void 0 === c ? "m" : c,
      p = d(t, ["children", "badgeContent", "overlap", "size"]),
      _ = f({
        overlap: o,
        size: u
      }).root;
    return i.a.createElement(l.a, s({
      classes: {
        root: _,
        badge: a()("w-badge", {
          "w-badge--l": "l" === u
        })
      },
      badgeContent: n,
      max: 99,
      overlap: o,
      showZero: !1
    }, p), e)
  }
}, , function(t, e, n) {
  "use strict";
  var r = n(0),
    i = n.n(r),
    o = n(128);
  e.a = function(t, e, n) {
    void 0 === e && (e = !1);
    var r = i.a.useState(!e),
      a = r[0],
      c = r[1],
      u = i.a.useState(!1),
      l = u[0],
      s = u[1],
      d = Object(o.b)({
        threshold: 0,
        triggerOnce: !0
      }),
      f = d.ref,
      p = d.inView,
      _ = d.entry;
    return i.a.useEffect((function() {
      if (p && _.isIntersecting && !e) {
        var r = new Image,
          i = function() {
            n && n(), c(!1)
          };
        return r.onload = i, r.onerror = function() {
            s(!0), i()
          }, r.src = t,
          function() {
            return r.removeEventListener("load", i)
          }
      }
    }), [p]), {
      isLoading: a,
      imageRef: f,
      error: l
    }
  }
}, , function(t, e, n) {
  "use strict";
  var r = n(99);
  n.d(e, "a", (function() {
    return r.a
  }))
}, function(t, e, n) {
  "use strict";
  var r = n(140);
  n.d(e, "a", (function() {
    return r.a
  }))
}, function(t, e, n) {
  "use strict";
  var r, i = n(0),
    o = n.n(i),
    a = n(17),
    c = n.n(a),
    u = n(20),
    l = n(8),
    s = n(13),
    d = n(3),
    f = function() {
      return o.a.createElement(d.h, {
        src: "http://visual.ornato.mk/img/brick-bond-pattern.svg"
      })
    },
    p = function() {
      return o.a.createElement(d.h, {
        src: "http://visual.ornato.mk/img/offset-1-3.svg"
      })
    },
    _ = function() {
      return o.a.createElement(d.h, {
        src: "http://visual.ornato.mk/img/no-offset-pattern.svg"
      })
    },
    v = function() {
      return o.a.createElement(d.h, {
        src: "http://visual.ornato.mk/img/no-offset-carpet-tile.pattern.svg"
      })
    },
    b = function() {
      return o.a.createElement(d.h, {
        src: "http://visual.ornato.mk/img/offset-1-2-horizontal-carpet-tile.pattern.svg"
      })
    },
    O = function() {
      return o.a.createElement(d.h, {
        src: "http://visual.ornato.mk/img/offset-1-2-carpet-tile.patern.svg"
      })
    },
    E = function() {
      return o.a.createElement(d.h, {
        src: "http://visual.ornato.mk/img/chevron.pattern.svg"
      })
    },
    m = function() {
      return o.a.createElement(d.h, {
        src: "http://visual.ornato.mk/img/herringbone.pattern.svg"
      })
    },
    y = function() {
      return o.a.createElement(d.h, {
        src: "http://visual.ornato.mk/img/double_herringbone.pattern.svg"
      })
    },
    g = function() {
      return o.a.createElement(d.h, {
        src: "http://visual.ornato.mk/img/basket_weave.pattern.svg"
      })
    },
    T = function() {
      return o.a.createElement(d.h, {
        src: "http://visual.ornato.mk/img/random_offset.pattern.svg"
      })
    };
  ! function(t) {
    t["1_3_offset"] = "1_3_offset", t["1_2_offset"] = "1_2_offset", t["1_2_offset_horizontal"] = "1_2_offset_horizontal", t.no_offset = "no_offset", t.chevron = "chevron", t.herringbone = "herringbone", t.double_herringbone = "double_herringbone", t.basket_weave = "basket_weave", t.random_offset = "random_offset"
  }(r || (r = {}));
  var h = n(41),
    S = function(t) {
      var e = t.pattern,
        n = t.surface,
        i = t.active,
        a = t.productType,
        u = t.isGeneralButton,
        l = t.onClick,
        s = function(t, e) {
          var n = o.a.createElement(f, null);
          return t.laying_pattern_type === r["1_3_offset"] ? n = o.a.createElement(p, null) : t.laying_pattern_type === r.no_offset && e === h.b.carpetTile ? n = o.a.createElement(v, null) : t.laying_pattern_type === r.no_offset ? n = o.a.createElement(_, null) : t.laying_pattern_type === r["1_2_offset_horizontal"] ? n = o.a.createElement(b, null) : t.laying_pattern_type === r["1_2_offset"] && e === h.b.carpetTile ? n = o.a.createElement(O, null) : t.laying_pattern_type === r.chevron ? n = o.a.createElement(E, null) : t.laying_pattern_type === r.herringbone ? n = o.a.createElement(m, null) : t.laying_pattern_type === r.double_herringbone ? n = o.a.createElement(y, null) : t.laying_pattern_type === r.basket_weave ? n = o.a.createElement(g, null) : t.laying_pattern_type === r.random_offset && (n = o.a.createElement(T, null)), n
        }(e, a);
      return o.a.createElement("div", {
        className: "pattern",
        onClick: function() {
          return l(n, e, u)
        }
      }, o.a.createElement("div", {
        className: c()("pattern__inner", "flex-center", {
          "pattern__inner--active": i
        })
      }, s))
    },
    A = n(35),
    I = n(6),
    C = n(2),
    R = n(14),
    j = function() {
      var t = Object(l.c)();
      return {
        isOpen: Object(l.d)(A.patternSelectors.getIsOpenPatternPopup),
        handleSelectPattern: function(e, n, r) {
          var i;
          (null == n ? void 0 : n.laying_pattern_type) !== (null === (i = null == e ? void 0 : e.selectedPattern) || void 0 === i ? void 0 : i.laying_pattern_type) && (t(Object(R.h)(e, n, r)), t(A.articlesActions.applyActions.performApply({
            sendAnalytics: !1
          })), I.c.fireEvent(I.a.layingPatternsSelected, {
            additional_data: {
              eventValue: {
                laying_pattern: n.laying_pattern_type,
                article_name: e.product.name,
                article_uuid: e.product.uuid,
                collection_uuid: e.product.collection_uuid,
                brand_uuid: e.product.brand_uuid
              }
            }
          }))
        },
        onHandleChangeRotate: function(e, n) {
          if (e.product) {
            var r = e.custom_rotation_angle + (e.surfaceType === C.b.floor ? 45 : 90),
              i = r > 135 ? 0 : r;
            t(A.articlesActions.applyActions.changeFloorRotation(i, e, n)), t(A.articlesActions.applyActions.performApply({
              sendAnalytics: !1
            })), I.c.fireEvent(I.a.rotateFlooring, {
              additional_data: {
                eventValue: {
                  article_name: e.product.name,
                  article_uuid: e.product.uuid,
                  collection_uuid: e.product.collection_uuid,
                  brand_uuid: e.product.brand_uuid,
                  article_sku: e.product.vendor_code,
                  article_custom_sku: e.product.sku
                }
              }
            })
          }
        }
      }
    };
  e.a = Object(d.q)((function(t) {
    var e, n, r, i, a, f, p, _, v = t.surface,
      b = (t.placement, t.productType),
      O = t.generalSurfaceButton,
      E = t.surfaces,
      m = void 0 === E ? [] : E,
      y = t.getLocalizationProperty,
      g = t.onClose,
      T = Object(l.d)(s.g),
      h = j(),
      A = h.handleSelectPattern,
      I = h.onHandleChangeRotate,
      R = o.a.useMemo((function() {
        return m.reduce((function(t, e) {
          return e.surfaceType === v.surfaceType && e.selectedPattern && !t.includes(e.selectedPattern.laying_pattern_type) && t.push(e.selectedPattern.laying_pattern_type), t
        }), [])
      }), [m, v]);
    return o.a.createElement("div", {
      className: "laying-patterns"
    }, o.a.createElement("div", {
      className: c()("laying-patterns__header", {
        "laying-patterns__header--bottom": (null === (n = null === (e = null == v ? void 0 : v.product) || void 0 === e ? void 0 : e.laying_patterns) || void 0 === n ? void 0 : n.length) > 1
      })
    }, o.a.createElement(d.k, {
      as: "div",
      fontName: "new_body_text",
      className: "laying-patterns__title bold"
    }, y("LAYING_PATTERNS.PRODUCT_SETTINGS")), o.a.createElement("div", {
      className: "laying-patterns__right"
    }, o.a.createElement("div", {
      className: "laying-patterns__rotate flex-center",
      onClick: function() {
        return I(v, O)
      }
    }, o.a.createElement(u.V, null)), o.a.createElement("div", {
      className: "laying-patterns__close",
      onClick: g
    }, o.a.createElement(u.k, null)))), (null === (i = null === (r = null == v ? void 0 : v.product) || void 0 === r ? void 0 : r.laying_patterns) || void 0 === i ? void 0 : i.length) > 1 && o.a.createElement(o.a.Fragment, null, T === C.c.MOBILE ? o.a.createElement("div", {
      className: "laying-patterns__wrapper"
    }, o.a.createElement("div", {
      className: "laying-patterns__items"
    }, null === (f = null === (a = null == v ? void 0 : v.product) || void 0 === a ? void 0 : a.laying_patterns) || void 0 === f ? void 0 : f.map((function(t) {
      var e = v.selectedPattern ? v.selectedPattern.laying_pattern_type === t.laying_pattern_type : t.is_default;
      return O && R.length > 1 ? e = !1 : O && 0 === R.length && t.is_default && (e = !0), o.a.createElement(S, {
        key: t.uuid,
        pattern: t,
        active: e,
        productType: b,
        onClick: A,
        surface: v,
        isGeneralButton: O
      })
    })))) : o.a.createElement("div", {
      className: "laying-patterns__patterns"
    }, null === (_ = null === (p = null == v ? void 0 : v.product) || void 0 === p ? void 0 : p.laying_patterns) || void 0 === _ ? void 0 : _.map((function(t) {
      var e = v.selectedPattern ? v.selectedPattern.laying_pattern_type === t.laying_pattern_type : t.is_default;
      return O && R.length > 1 ? e = !1 : O && 0 === R.length && t.is_default && (e = !0), o.a.createElement(S, {
        key: t.uuid,
        pattern: t,
        active: e,
        productType: b,
        onClick: A,
        surface: v,
        isGeneralButton: O
      })
    })))))
  }))
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return l
  }));
  var r = n(0),
    i = n.n(r),
    o = n(17),
    a = n.n(o),
    c = n(106),
    u = function() {
      return (u = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    l = function(t) {
      var e, n, r, o, l = t.as,
        s = void 0 === l ? "span" : l,
        d = t.children,
        f = t.className,
        p = void 0 === f ? "" : f,
        _ = t.fontName,
        v = void 0 === _ ? "" : _,
        b = t.dangerouslySetInnerHTML,
        O = t.onClick,
        E = t.props,
        m = Object(c.useDevice)().deviceType,
        y = function() {
          O && O()
        };
      return b ? i.a.createElement(s, {
        className: a()("text-field", "" + m, (e = {}, e[p] = p, e), (n = {}, n[v] = v, n)),
        dangerouslySetInnerHTML: b,
        onClick: y
      }) : i.a.createElement(s, u({
        dir: "ltr",
        className: a()("text-field", "" + m, (r = {}, r[p] = p, r), (o = {}, o[v] = v, o)),
        onClick: y
      }, E), !!d && d)
    }
}, , , , , , , , function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return o
  })), n.d(e, "b", (function() {
    return a
  }));
  var r = n(5),
    i = function() {
      return (i = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    o = function() {
      return function(t) {
        Object(r.e)().acceptedCookies ? t({
          type: "[COOKIE-POLICY] ACCEPT_COOKIE_POLICY"
        }) : t({
          type: "[COOKIE-POLICY] OPEN_COOKIE_POLICY"
        })
      }
    },
    a = function() {
      return function(t) {
        var e = Object(r.e)();
        t({
          type: "[COOKIE-POLICY] ACCEPT_COOKIE_POLICY"
        }), Object(r.r)(i(i({}, e), {
          acceptedCookies: !0
        }))
      }
    }
}, function(t, e, n) {
  "use strict";
  n.d(e, "b", (function() {
    return c
  })), n.d(e, "a", (function() {
    return u
  }));
  var r = n(5),
    i = n(39),
    o = n(6),
    a = n(1),
    c = Object(i.createAction)("SET_ONBOARDING_STATUS")(),
    u = function() {
      return function(t) {
        Object(r.e)().onboarding || a.b.DO_NOT_SHOW_ONBOARDING || (o.c.fireEvent(o.a.onboardingStarted), t(c({
          open: !0
        })))
      }
    }
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return a
  }));
  var r = n(43),
    i = n(1),
    o = n(5),
    a = function(t) {
      return Promise.all(t.map((function(t) {
        return function(t) {
          var e = i.b.PIM_HOST + "/api/articles/" + t.uuid + "/collection/" + t.collection_uuid + Object(o.i)("?");
          return Object(r.a)(e, {
            Authorization: i.b.TOKEN
          }).then((function(t) {
            return t.data
          }))
        }(t)
      })))
    }
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return o
  })), n.d(e, "b", (function() {
    return a
  }));
  var r = n(7),
    i = function(t) {
      return t.cookiePolicy
    },
    o = Object(r.a)(i, (function(t) {
      return t.isAccepted
    })),
    a = Object(r.a)(i, (function(t) {
      return t.isOpen
    }))
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return i
  }));
  var r = n(7),
    i = Object(r.a)([function(t) {
      return t.onboarding
    }], (function(t) {
      return t.open
    }))
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", (function() {
    return r
  }));
  var r = "SWITCH_COLLAPSED_STATE"
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
  "use strict";
  n.r(e);
  n(185);
  var r = n(0),
    i = n.n(r),
    o = n(161),
    a = n(8),
    c = n(1),
    u = n(2),
    l = n(14),
    s = n(25),
    d = n(249),
    f = n(17),
    p = n.n(f),
    _ = n(112),
    v = n(13),
    b = function(t) {
      var e = t.isVisible,
        n = t.isLoading,
        r = t.view,
        o = t.isOpenSharePopup,
        c = Object(a.d)(v.g),
        l = Object(a.d)(_.c);
      return e ? i.a.createElement("div", {
        className: p()("progress-screen", {
          "progress-screen--main-view": r === u.k.Main,
          "progress-screen--sharing": o
        }, "progress-screen--" + c)
      }, (e || n) && (r === u.k.Main || r === u.k.ShoppingCart) && c === u.c.DESKTOP && !l && i.a.createElement("div", {
        className: p()("progress-screen--desktop", {
          "progress-screen--main-view": r === u.k.Main
        })
      }, i.a.createElement("div", {
        className: p()("progress-screen__wrapper", {
          "progress-screen__wrapper--desktop": c === u.c.DESKTOP,
          "progress-screen__wrapper--sharing": o
        })
      }, i.a.createElement("div", {
        className: "progress-screen__square"
      }, i.a.createElement(d.a, {
        style: {
          color: "#FFFFFF"
        }
      })))), (e || n) && (c !== u.c.DESKTOP || r === u.k.RoomPicker || r === u.k.Download || l) && i.a.createElement("div", {
        className: p()("progress-screen__wrapper")
      }, i.a.createElement("div", {
        className: "progress-screen__square"
      }, i.a.createElement(d.a, {
        style: {
          color: "#FFFFFF"
        }
      })))) : null
    },
    O = Object(a.b)((function(t) {
      return {
        isVisible: t.auxiliaries.isProcessing || t.articles.isApplyLoading || t.auxiliaries.isLoadingEnabledSurfaces && t.navigation.view === u.k.Main,
        view: t.navigation.view,
        isOpenSharePopup: t.share.isOpen
      }
    }))(b),
    E = n(3),
    m = n(5),
    y = n(27),
    g = n(34),
    T = function() {
      return (T = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    h = function() {
      var t = Object(a.c)(),
        e = Object(a.d)(v.g),
        n = Object(a.d)(v.h),
        o = Object(a.d)(v.b),
        l = Object(a.d)(v.a),
        s = Object(a.d)(v.f);
      Object(r.useEffect)((function() {
        var t = function() {
          window.addEventListener("click", (function() {
            var t;
            if (c.b.IS_WIZART_DEMO && (null === (t = window.document) || void 0 === t ? void 0 : t.requestStorageAccess) && c.b.USER_INDENTIFIER && !window.cookiesDeclined) {
              var e = Object(m.e)();
              window.document.requestStorageAccess().then((function() {
                Object(y.c)("w_guid_" + Object(y.b)(c.b.TOKEN), c.b.USER_INDENTIFIER), Object.keys(e).forEach((function(t) {
                  !0 === e[t] ? Object(y.c)("w_" + t + "_" + Object(y.b)(c.b.TOKEN), +e[t]) : !1 !== e[t] && Object(y.c)("w_" + t + "_" + Object(y.b)(c.b.TOKEN), JSON.stringify(e[t]))
                }))
              }), (function() {
                window.cookiesDeclined = !0
              }))
            }
          }))
        };
        return t(),
          function() {
            window.removeEventListener("click", t)
          }
      }), [c.b]), i.a.useLayoutEffect((function() {
        function e() {
          window.addEventListener("resize", (function() {
            "iPhone" === s && setTimeout((function() {
              window.scrollTo(window.scrollX, window.scrollY - 5), window.scrollTo(window.scrollX, window.scrollY + 5), t(Object(g.d)())
            }), 500), t(Object(g.d)())
          }), !1)
        }
        return e(),
          function() {
            window.removeEventListener("resize", e)
          }
      }), [s]), i.a.useLayoutEffect((function() {
        var t = document.documentElement;
        (e === u.c.DESKTOP || e === u.c.TABLET) && o <= 1440 || e === u.c.MOBILE && n === u.f.Landscape && o <= 640 ? (t.style.setProperty("--padding-s", "12px"), t.style.setProperty("--padding-m", "12px"), t.style.setProperty("--padding-l", "24px"), t.style.setProperty("--padding-xl", "36px")) : (t.style.setProperty("--padding-s", "12px"), t.style.setProperty("--padding-m", "24px"), t.style.setProperty("--padding-l", "36px"), t.style.setProperty("--padding-xl", "48px")), e === u.c.DESKTOP && o <= 1440 ? (t.style.setProperty("--layout-right-width", "318px"), Object(c.a)(T(T({}, c.b), {
          LAYOUT_RIGHT_WIDTH: 360
        }))) : e === u.c.DESKTOP && (t.style.setProperty("--layout-right-width", "424px"), Object(c.a)(T(T({}, c.b), {
          LAYOUT_RIGHT_WIDTH: 436
        })));
        var r = document.createElement("div");
        r.style.overflowY = "scroll", r.style.width = "50px", r.style.height = "50px", document.body.append(r);
        var i = r.offsetWidth - r.clientWidth;
        r.remove(), t.style.setProperty("--scroll-width", i + "px")
      }), [e, n, o, l]), i.a.useLayoutEffect((function() {
        var t = document.documentElement;
        t.dataset.device = e, t.dataset.deviceModel = s
      }), [e, s])
    },
    S = n(65),
    A = n(79),
    I = n(52),
    C = function() {
      var t = Object(a.c)(),
        e = Object(a.d)(S.d);
      Object(r.useEffect)((function() {
        var n = function(n) {
          if (n.data && "setShoppingCartStore" === n.data.eventName) t(Object(I.i)(n.data.payload));
          else if (n.data && "getShoppingCartStore" === n.data.eventName) {
            var r = e.map((function(t) {
              return {
                vendor_code: t.article.vendor_code,
                sku: t.article.sku,
                quantity: t.quantity
              }
            }));
            A.c(r)
          }
        };
        return window.addEventListener("message", n, !1),
          function() {
            window.removeEventListener("message", n)
          }
      }), [e])
    },
    R = n(71),
    j = n(105),
    L = n(58),
    w = function(t, e, n) {
      if (n || 2 === arguments.length)
        for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
      return t.concat(r || Array.prototype.slice.call(e))
    },
    P = function() {
      var t = Object(a.c)(),
        e = Object(a.d)(R.getFavorites);
      Object(r.useEffect)((function() {
        var n = function(n) {
          if (c.b.ENABLE_TWO_WAY_FAVORITES && n.data && "setFavoritesStore" === n.data.eventName) t(Object(L.initFavoritesFromCustomer)(n.data.payload));
          else if (n.data && "getFavoritesStore" === n.data.eventName) {
            var r = Object.keys(e).reduce((function(t, n) {
              return w(w([], t, !0), e[n].vendorCodes, !0)
            }), []);
            j.c(r)
          }
        };
        return window.addEventListener("message", n, !1),
          function() {
            window.removeEventListener("message", n)
          }
      }), [e])
    },
    N = Object(r.lazy)((function() {
      return Promise.all([n.e(3), n.e(9)]).then(n.bind(null, 387))
    })),
    k = Object(r.lazy)((function() {
      return Promise.all([n.e(0), n.e(1), n.e(2), n.e(3), n.e(29)]).then(n.bind(null, 388))
    })),
    F = Object(r.lazy)((function() {
      return Promise.all([n.e(0), n.e(1), n.e(2), n.e(3), n.e(19)]).then(n.bind(null, 389))
    })),
    D = n(130),
    M = n(131),
    U = n(214),
    V = function(t) {
      var e = t.icon,
        n = t.deviceType,
        r = t.orientation,
        o = t.itemClassName,
        a = t.isLoading,
        c = t.onClick;
      return i.a.createElement(i.a.Fragment, null, a ? i.a.createElement(U.a, {
        variant: "rect",
        className: "\n            w-share-item w-share-item--" + n + "\n            w-share-item--" + n + "-" + r + "\n            flex-center " + (o || "") + "\n          "
      }) : i.a.createElement("div", {
        className: "\n            w-share-item w-share-item--" + n + "\n            w-share-item--" + n + "-" + r + "\n            flex-center " + (o || "") + "\n          ",
        onClick: c
      }, e))
    },
    x = Object(a.b)((function(t) {
      return {
        deviceType: Object(v.g)(t),
        orientation: t.auxiliaries.orientation
      }
    }))(V),
    H = n(20),
    B = n(80),
    G = Object(E.q)((function(t) {
      var e = t.isOpen,
        n = t.deviceType,
        r = t.orientation,
        o = t.shareURL,
        c = t.imageURL,
        l = (t.clientName, t.isLoading),
        s = t.isError,
        d = t.device,
        f = t.onClose,
        p = t.getLocalizationProperty,
        _ = Object(a.c)();
      return i.a.createElement(i.a.Suspense, {
        fallback: i.a.createElement(i.a.Fragment, null)
      }, i.a.createElement(E.o, {
        open: e,
        onClose: f,
        backgroundColorBlur: !0,
        deviceType: n,
        orientation: r,
        title: p("SHARE.TITLE")
      }, i.a.createElement("div", {
        className: "\n        w-share-wrapper\n        w-share-wrapper--" + n + "\n        w-share-wrapper--" + n + "-" + r + "\n      "
      }, s ? i.a.createElement("div", {
        className: "share--error "
      }, p("SHARE.ERROR_MESSAGE")) : i.a.createElement("div", {
        className: "w-share-list w-share-list--" + n
      }, i.a.createElement(x, {
        icon: i.a.createElement(H.t, null),
        itemClassName: "w-share--facebook",
        onClick: function() {
          return Object(B.c)(c)
        },
        isLoading: l
      }), i.a.createElement(x, {
        icon: i.a.createElement(H.O, null),
        itemClassName: "w-share--pinterest",
        onClick: function(t) {
          t.preventDefault(), Object(B.d)(c, o, d, p("TOOLTIPS.SHARE_MESSAGE"))
        },
        isLoading: l
      }), i.a.createElement(x, {
        icon: i.a.createElement(H.eb, null),
        itemClassName: "w-share--twitter",
        onClick: function() {
          return Object(B.e)(c, p("TOOLTIPS.SHARE_MESSAGE"))
        },
        isLoading: l
      }), navigator.share && (n === u.c.MOBILE || n === u.c.TABLET) && i.a.createElement(x, {
        icon: i.a.createElement(H.Y, null),
        onClick: function() {
          return Object(B.b)(c, p("TOOLTIPS.SHARE_MESSAGE"), _)
        },
        isLoading: l
      })))))
    })),
    W = {
      onClose: D.b,
      onDownloadClick: M.a,
      switchProcessingScreen: l.j
    },
    z = Object(a.b)((function(t) {
      return {
        isOpen: t.share.isOpen,
        deviceType: Object(v.g)(t),
        orientation: t.auxiliaries.orientation,
        room: t.rooms.selectedRoom,
        surfaces: t.surfaces,
        overlayResult: t.rooms.overlayResult,
        shareURL: t.share.shareURL,
        imageURL: t.share.imageURL,
        isLoading: t.share.isLoading,
        isError: t.share.isError,
        device: Object(v.e)(t)
      }
    }), W)(G),
    K = n(83),
    Y = function(t) {
      var e = t.icon,
        n = t.deviceType,
        r = t.orientation,
        o = t.itemClassName,
        a = t.onClick;
      return i.a.createElement("div", {
        className: "\n      w-feedback-item w-feedback-item--" + n + "\n      w-feedback-item--" + n + "-" + r + "\n      flex-center \n      " + (o || "") + "\n    ",
        onClick: a
      }, e)
    },
    q = Object(a.b)((function(t) {
      return {
        deviceType: Object(v.g)(t),
        orientation: t.auxiliaries.orientation
      }
    }))(Y),
    Q = n(38),
    J = Object(E.q)((function(t) {
      var e = t.isOpen,
        n = t.isRate,
        r = t.isOpenSubmitAlert,
        o = t.message,
        a = t.emotion,
        c = t.deviceType,
        u = t.orientation,
        l = t.onClose,
        s = t.onSubmit,
        d = t.setOpenSubmitAlert,
        f = t.setMessage,
        p = t.handleEmotionChange,
        _ = t.getLocalizationProperty,
        v = i.a.useState(!0),
        b = v[0],
        O = v[1];
      return i.a.createElement(i.a.Fragment, null, i.a.createElement(i.a.Suspense, {
        fallback: i.a.createElement(i.a.Fragment, null)
      }, i.a.createElement(E.o, {
        onClose: l,
        backgroundColorBlur: !0,
        title: _("FEEDBACK.TITLE"),
        deviceType: c,
        orientation: u,
        open: e,
        disableBackdropClick: !0,
        fullSize: !0
      }, i.a.createElement("div", {
        className: "\n            w-feedback-wrapper\n            w-feedback-wrapper--" + c + "\n            w-feedback-wrapper--" + c + "-" + u + "\n          "
      }, i.a.createElement("form", {
        onSubmit: function(t) {
          t.preventDefault(), n && s()
        }
      }, i.a.createElement("div", {
        className: "w-rate-wrapper"
      }, i.a.createElement("div", {
        className: "\n              w-rate-list\n              w-rate-list--" + c + "\n              w-rate-list--" + c + "-" + u + "\n              "
      }, i.a.createElement(K.a, {
        title: "TOOLTIPS.RATE_GREAT",
        placement: "bottom"
      }, i.a.createElement("label", {
        className: "radio"
      }, i.a.createElement("input", {
        type: "checkbox",
        name: "rating",
        value: "happy",
        checked: "happy" === a,
        onChange: p
      }), i.a.createElement(q, {
        icon: i.a.createElement(H.Q, null),
        itemClassName: "w-feedback-positive"
      }))), i.a.createElement(K.a, {
        title: "TOOLTIPS.RATE_NORMAL",
        placement: "bottom"
      }, i.a.createElement("label", {
        className: "radio"
      }, i.a.createElement("input", {
        type: "checkbox",
        name: "rating",
        value: "neutral",
        checked: "neutral" === a,
        onChange: p
      }), i.a.createElement(q, {
        icon: i.a.createElement(H.K, null),
        itemClassName: "w-feedback-neutral"
      }))), i.a.createElement(K.a, {
        title: "TOOLTIPS.RATE_BAD",
        placement: "bottom"
      }, i.a.createElement("label", {
        className: "radio"
      }, i.a.createElement("input", {
        type: "checkbox",
        name: "rating",
        value: "sad",
        checked: "sad" === a,
        onChange: p
      }), i.a.createElement(q, {
        icon: i.a.createElement(H.J, null),
        itemClassName: "w-feedback-negative"
      }))))), i.a.createElement("div", {
        className: "\n              textarea-wrapper\n              textarea-wrapper--" + c + "\n              textarea-wrapper--" + c + "-" + u + "\n              "
      }, i.a.createElement("div", {
        className: "\n              message-svg\n              message-svg" + (b ? "" : "--hide") + "\n              message-svg--" + c + "\n              message-svg--" + c + "-" + u + "\n              "
      }, i.a.createElement(H.E, null)), i.a.createElement("textarea", {
        name: "message",
        value: o,
        className: "\n                w-feedback-textarea\n                w-feedback-textarea--" + c + "\n                w-feedback-textarea--" + c + "-" + u + "\n              ",
        onFocus: function() {
          return O(!1)
        },
        onBlur: function() {
          return O(!0)
        },
        onChange: function(t) {
          return f(t.target.value)
        },
        placeholder: _("FEEDBACK.TEXT_AREA_PLACEHOLDER")
      })), i.a.createElement("div", {
        className: "send-feedback-button"
      }, i.a.createElement(E.n, {
        size: Q.a.L,
        deviceType: c,
        view: "extra",
        disabled: !n,
        type: "submit",
        onClick: d
      }, _("FEEDBACK.BUTTON_SEND").toUpperCase())))))), i.a.createElement(i.a.Suspense, {
        fallback: i.a.createElement(i.a.Fragment, null)
      }, i.a.createElement(E.o, {
        zIndex: 2e3,
        backgroundColorBlur: !0,
        open: r,
        deviceType: c,
        orientation: u,
        title: _("FEEDBACK.RESPONSE.TITLE"),
        onClose: d
      }, i.a.createElement(E.p, {
        display: "block",
        textAlign: "center"
      }, _("FEEDBACK.RESPONSE.MESSAGE")), i.a.createElement(E.b, {
        deviceType: c,
        justifyContent: "center"
      }, i.a.createElement(E.n, {
        size: Q.a.L,
        deviceType: c,
        view: "extra",
        onClick: d,
        textTransform: "uppercase"
      }, _("COMMON.OK"))))))
    })),
    Z = n(88),
    $ = {
      onClose: Z.b,
      setOpenSubmitAlert: Z.f,
      onSubmit: Z.a,
      setMessage: Z.d,
      handleEmotionChange: Z.e
    },
    X = Object(a.b)((function(t) {
      return {
        isOpen: t.feedback.isOpen,
        isRate: t.feedback.isRate,
        isOpenSubmitAlert: t.feedback.isOpenSubmitAlert,
        deviceType: Object(v.g)(t),
        orientation: t.auxiliaries.orientation,
        message: t.feedback.message,
        emotion: t.feedback.emotion
      }
    }), $)(J),
    tt = Object(r.lazy)((function() {
      return Promise.all([n.e(32), n.e(6)]).then(n.bind(null, 380))
    })),
    et = Object(r.lazy)((function() {
      return n.e(7).then(n.bind(null, 385))
    })),
    nt = n(86),
    rt = n(158),
    it = n(159),
    ot = n(43),
    at = n(41),
    ct = n(72),
    ut = function(t) {
      var e = Object(a.c)();
      i.a.useEffect((function() {
        t && Object(ot.a)(c.b.PIM_HOST + "/api/v2/public/product-types?page=1" + Object(m.i)("&"), {
          Authorization: c.b.TOKEN
        }).then((function(t) {
          var n, r, i;
          1 === (null === (n = t.data) || void 0 === n ? void 0 : n.length) && (null === (i = null === (r = t.data[0]) || void 0 === r ? void 0 : r.attributes) || void 0 === i ? void 0 : i.code) === at.b.rug && e(Object(ct.h)(!0))
        }))
      }), [t])
    },
    lt = Object(a.b)((function(t) {
      return {
        serverError: Object(v.j)(t),
        deviceType: Object(v.g)(t),
        orientation: Object(v.h)(t),
        onboarding: Object(it.a)(t)
      }
    }), {
      onHandleCloseErrorModal: l.l,
      onHandleCloseCatalog: s.closeArticleCatalog
    })(Object(E.q)((function(t) {
      var e = t.deviceType,
        n = t.serverError,
        r = t.orientation,
        l = t.onboarding,
        s = t.onHandleCloseErrorModal,
        d = t.getLocalizationProperty,
        f = Q.d.useWizartInit().isAppInitialized;
      h(), C(), P(), ut(f);
      var p = d("ERROR_MESSAGES.SERVER_ERROR.TITLE"),
        v = d("ERROR_MESSAGES.SERVER_ERROR.MESSAGE"),
        b = Object(a.d)(rt.a),
        m = Object(a.d)(_.c);
      return i.a.createElement("div", {
        className: "wizart-app-container"
      }, f && i.a.createElement(i.a.Fragment, null, i.a.createElement(o.a, null, c.b.FONT_FAMILY_LINK && i.a.createElement("link", {
        href: c.b.FONT_FAMILY_LINK,
        rel: "stylesheet"
      })), c.b.BLOCKED ? i.a.createElement(i.a.Suspense, {
        fallback: i.a.createElement(i.a.Fragment, null)
      }, i.a.createElement(nt.a, null)) : i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
        id: "patterns-portal"
      }), e === u.c.DESKTOP && i.a.createElement(i.a.Suspense, {
        fallback: i.a.createElement(i.a.Fragment, null)
      }, i.a.createElement(N, null)), e === u.c.MOBILE && i.a.createElement(i.a.Suspense, {
        fallback: i.a.createElement(i.a.Fragment, null)
      }, i.a.createElement(F, null)), e === u.c.TABLET && i.a.createElement(i.a.Suspense, {
        fallback: i.a.createElement(i.a.Fragment, null)
      }, i.a.createElement(k, null)), i.a.createElement(z, null), i.a.createElement(X, null), m && i.a.createElement(i.a.Suspense, {
        fallback: i.a.createElement(i.a.Fragment, null)
      }, i.a.createElement(tt, null)), l && !n.isOpen && !c.b.DO_NOT_SHOW_ONBOARDING && i.a.createElement(i.a.Suspense, {
        fallback: i.a.createElement(i.a.Fragment, null)
      }, i.a.createElement(nt.d, null)), i.a.createElement(O, null), n.statusCode !== u.h.UNPROCESSABLE_ENTITY && i.a.createElement(i.a.Suspense, {
        fallback: i.a.createElement(i.a.Fragment, null)
      }, i.a.createElement(E.o, {
        zIndex: 2001,
        backgroundColorBlur: !0,
        open: n.isOpen,
        deviceType: e,
        orientation: r,
        onClose: n.statusCode !== u.h.TOO_MANY_REQUESTS ? s : null,
        title: "ERROR_MESSAGES.SERVER_ERROR.TITLE" === p ? "App is temporary unavailable." : p
      }, i.a.createElement("div", null, i.a.createElement(E.p, {
        textAlign: "center",
        display: "block"
      }, "ERROR_MESSAGES.SERVER_ERROR.MESSAGE" === v ? "Please try again later." : v)), n.statusCode !== u.h.TOO_MANY_REQUESTS && "ERROR_MESSAGES.SERVER_ERROR.TITLE" !== p && i.a.createElement(E.b, {
        justifyContent: "center",
        deviceType: e
      }, i.a.createElement(E.n, {
        view: "extra",
        deviceType: e,
        onClick: s,
        size: Q.a.L,
        textTransform: "uppercase"
      }, d("COMMON.OK"))))), n.statusCode === u.h.UNPROCESSABLE_ENTITY && i.a.createElement(i.a.Suspense, {
        fallback: i.a.createElement(i.a.Fragment, null)
      }, i.a.createElement(E.o, {
        zIndex: 2001,
        disablePortal: !0,
        backgroundColorBlur: !0,
        deviceType: e,
        orientation: r,
        open: n.isOpen,
        title: d("ERROR_MESSAGES.BAD_UPLOAD_PARAMETERS.NO_SURFACE_IMAGE_TITLE")
      }, i.a.createElement("div", {
        className: "bad-upload"
      }, i.a.createElement("img", {
        className: "bad-upload--image",
        src: H.g
      })), i.a.createElement(E.b, {
        justifyContent: "center",
        deviceType: e
      }, i.a.createElement(E.n, {
        view: "extra",
        deviceType: e,
        onClick: s,
        size: Q.a.L,
        textTransform: "uppercase"
      }, d("COMMON.OK"))))), c.b.IS_USE_COOKIES && !b && i.a.createElement(i.a.Suspense, {
        fallback: i.a.createElement(i.a.Fragment, null)
      }, i.a.createElement(et, null)))))
    }))),
    st = n(173),
    dt = n(92),
    ft = n(174),
    pt = n(12),
    _t = function() {
      return (_t = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    vt = {
      orientation: u.f.Landscape,
      appHeight: null,
      appWidth: null,
      isProcessing: !1,
      vocabulary: null,
      device: null,
      showInitialImagePath: !1,
      backButtonAction: null,
      serverError: {
        statusCode: null,
        isOpen: !1
      },
      isLoadingEnabledSurfaces: !1
    },
    bt = {
      view: null,
      isLogoVisible: !1,
      isMenuVisible: !1,
      isLeftMenuVisible: !0,
      isModalWindow: !0,
      isReturnArrowVisible: !1,
      isHeaderVisible: !0,
      isRollerVisible: !0,
      isControlsVisible: !0
    },
    Ot = function() {
      return (Ot = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    Et = function() {
      return (Et = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    mt = function(t, e, n) {
      if (n || 2 === arguments.length)
        for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
      return t.concat(r || Array.prototype.slice.call(e))
    },
    yt = {
      onlyInteractiveView: !1,
      currentSurfaces: [],
      interactiveSurfaceHaveBeenCleared: !1
    },
    gt = function(t) {
      var e, n, r = [];
      return t.walls.forEach((function(t) {
        r.push({
          isActive: !1,
          product: null,
          isCustomProduct: null,
          surfaceType: u.b.wall,
          id: t.wall_id,
          x: t.x,
          y: t.y,
          isActiveSettings: !1,
          selectedPattern: null,
          custom_rotation_angle: 0
        })
      })), (null === (e = null == t ? void 0 : t.floor) || void 0 === e ? void 0 : e.x) && (null === (n = null == t ? void 0 : t.floor) || void 0 === n ? void 0 : n.y) && r.push({
        isActive: !1,
        product: null,
        isCustomProduct: null,
        surfaceType: u.b.floor,
        id: 0,
        x: t.floor.x,
        y: t.floor.y,
        isActiveSettings: !1,
        selectedPattern: null,
        custom_rotation_angle: 0
      }), r
    },
    Tt = function() {
      return (Tt = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    ht = {
      localization: {},
      isVisible: !1
    },
    St = {
      isOpen: !0
    },
    At = n(116),
    It = function() {
      return (It = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    Ct = n(9),
    Rt = n(10),
    jt = n(70),
    Lt = function() {
      return (Lt = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    wt = n(68),
    Pt = function() {
      return (Pt = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    Nt = function(t, e, n) {
      if (n || 2 === arguments.length)
        for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
      return t.concat(r || Array.prototype.slice.call(e))
    },
    kt = function(t, e) {
      var n = t.navigation.history.findIndex((function(t) {
        return t === e
      }));
      return -1 !== n ? Nt([], t.navigation.history.slice(0, n + 1), !0) : Nt(Nt([], t.navigation.history, !0), [e], !1)
    },
    Ft = {
      isVisible: !1,
      isCollapsed: !1
    },
    Dt = n(160),
    Mt = function() {
      return (Mt = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    Ut = {
      isLoading: !1,
      page: 1,
      list: []
    },
    Vt = n(76),
    xt = function() {
      return (xt = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    Ht = {
      isOpen: !1,
      shareURL: null,
      imageURL: null,
      clientName: null,
      isLoading: !1,
      isError: !1
    },
    Bt = n(64),
    Gt = function() {
      return (Gt = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    Wt = {
      isOpen: !1,
      isOpenedFeedback: !1,
      isRate: !1,
      message: "",
      emotion: "",
      isOpenSubmitAlert: !1
    },
    zt = n(51),
    Kt = function() {
      return (Kt = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    Yt = {
      isOpen: !1,
      currentStep: n(133).a.fillIn,
      areShownIcons: !1,
      isRequestSuccess: !1,
      isActive: !1,
      isCalled: null
    },
    qt = function() {
      return (qt = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    Qt = {
      isOpen: !1,
      isCalled: 0
    },
    Jt = function() {
      return (Jt = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    Zt = n(57),
    $t = {
      isOpen: !1,
      isLoading: !1,
      list: []
    },
    Xt = function() {
      return (Xt = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    te = function(t, e, n) {
      if (n || 2 === arguments.length)
        for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
      return t.concat(r || Array.prototype.slice.call(e))
    },
    ee = {
      isAccepted: !1,
      isOpen: !1
    },
    ne = function() {
      return (ne = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    re = n(29),
    ie = {
      isRoomListLoading: !1,
      selectedRoom: null,
      overlayResult: null,
      numberOfOverlayResult: 0,
      isErrorLoaded: !1,
      countMyInteriors: 0,
      isOpenBadPhotoPopup: !1,
      photoQualityError: null,
      rooms: {
        meta: {
          current_page: null,
          from: null,
          last_page: null,
          per_page: null,
          to: null,
          total: null
        },
        data: []
      }
    },
    oe = function() {
      return (oe = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    ae = function(t, e, n) {
      if (n || 2 === arguments.length)
        for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
      return t.concat(r || Array.prototype.slice.call(e))
    },
    ce = function(t, e) {
      var n = ae([], t.rooms.data, !0),
        r = n.findIndex((function(t) {
          return t.uuid === e
        }));
      return -1 !== r && n.splice(r, 1), n
    },
    ue = n(21),
    le = n(39),
    se = function() {
      return (se = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
      }).apply(this, arguments)
    },
    de = Object(le.createReducer)({
      open: !1
    }, {
      SET_ONBOARDING_STATUS: function(t, e) {
        return se(se({}, t), {
          open: e.payload.open
        })
      }
    }),
    fe = Object(dt.combineReducers)({
      auxiliaries: function(t, e) {
        switch (void 0 === t && (t = vt), e.type) {
          case pt.l:
            return _t(_t({}, t), e.payload);
          case pt.q:
            return _t(_t({}, t), {
              isProcessing: e.payload.isProcessing
            });
          case pt.r:
            return _t(_t({}, t), {
              isLoadingEnabledSurfaces: !t.isLoadingEnabledSurfaces
            });
          case pt.n:
            return _t(_t({}, t), {
              vocabulary: e.payload.vocabulary
            });
          case pt.j:
            return _t(_t({}, t), {
              device: e.payload.device
            });
          case pt.s:
            return _t(_t({}, t), {
              showInitialImagePath: e.payload.showInitialImagePath
            });
          case pt.d:
            return _t(_t({}, t), {
              backButtonAction: e.payload.backButtonAction
            });
          case pt.t:
            return _t(_t({}, t), {
              serverError: {
                statusCode: e.payload.statusCode || null,
                isOpen: e.payload.isError
              }
            });
          default:
            return t
        }
      },
      navigation: function(t, e) {
        switch (void 0 === t && (t = bt), e.type) {
          case pt.m:
            return Ot(Ot({}, t), e.payload);
          default:
            return t
        }
      },
      surfaces: function(t, e) {
        switch (void 0 === t && (t = yt), e.type) {
          case pt.a:
            var n = mt([], t.currentSurfaces, !0);
            if (e.payload.applyForAll) n.forEach((function(t, r) {
              t.surfaceType === e.payload.surface.surfaceType && (n[r].custom_rotation_angle = e.payload.rotation_angle)
            }));
            else {
              var r = n.findIndex((function(t) {
                return t.surfaceType === e.payload.surface.surfaceType && t.id === e.payload.surface.id
              })); - 1 !== r && (n[r].custom_rotation_angle = e.payload.rotation_angle)
            }
            return Et(Et({}, t), {
              currentSurfaces: n
            });
          case pt.e:
            return Et(Et({}, t), {
              currentSurfaces: gt(e.payload.room)
            });
          case pt.i:
            var i = mt([], t.currentSurfaces, !0);
            i.forEach((function(t, e) {
              i[e].isActiveSettings = !1
            }));
            var o = i.filter((function(t) {
              return t.isActive && t.surfaceType !== e.payload.surface.surfaceType
            }));
            return -1 !== (l = i.findIndex((function(t) {
              return t.id === e.payload.surface.id && t.surfaceType === e.payload.surface.surfaceType
            }))) && (i[l].isActive = !i[l].isActive), 0 !== o.length && -1 !== l && i.forEach((function(t, n) {
              t.surfaceType !== e.payload.surface.surfaceType && t.isActive && (i[n].isActive = !1)
            })), Et(Et({}, t), {
              currentSurfaces: i
            });
          case pt.g:
            var a = t.currentSurfaces.map((function(t) {
              var n = Et({}, t);
              return n.surfaceType === e.payload.surfaceType && (n.isActive = e.payload.isActive), n
            }));
            return a.forEach((function(t, n) {
              t.surfaceType !== e.payload.surfaceType && t.isActive && (a[n].isActive = !1)
            })), Et(Et({}, t), {
              currentSurfaces: a
            });
          case pt.u:
            return Et(Et({}, t), {
              currentSurfaces: mt([], e.payload.surfaces, !0)
            });
          case pt.b:
            var c = mt([], t.currentSurfaces, !0),
              u = c.findIndex((function(t) {
                return t.id === e.payload.surface.id && t.surfaceType === e.payload.surface.surfaceType
              }));
            return -1 !== u && (c[u].isActiveSettings = e.payload.isActive, c.forEach((function(t, n) {
              n !== u && e.payload.isActive && (c[n].isActiveSettings = !e.payload.isActive)
            }))), Et({}, t);
          case pt.h:
            var l, s = mt([], t.currentSurfaces, !0);
            if (e.payload.applyForAll) s.forEach((function(t, n) {
              t.surfaceType === e.payload.surface.surfaceType && (s[n].selectedPattern = e.payload.pattern)
            }));
            else -1 !== (l = s.findIndex((function(t) {
              return t.id === e.payload.surface.id && t.surfaceType === e.payload.surface.surfaceType
            }))) && (s[l].selectedPattern = e.payload.pattern);
            return Et(Et({}, t), {
              currentSurfaces: s
            });
          case pt.k:
            return Et(Et({}, t), {
              onlyInteractiveView: e.payload.onlyInteractiveView
            });
          case pt.f:
            return Et(Et({}, t), {
              interactiveSurfaceHaveBeenCleared: e.payload.interactiveSurfaceHaveBeenCleared
            });
          default:
            return t
        }
      },
      localization: function(t, e) {
        switch (void 0 === t && (t = ht), e.type) {
          case pt.c:
            return Tt(Tt({}, t), {
              localization: e.payload.localization
            });
          case pt.p:
            return Tt(Tt({}, t), {
              isVisible: !t.isVisible
            });
          default:
            return t
        }
      },
      modal: function(t, e) {
        switch (void 0 === t && (t = St), e.type) {
          case At.a:
            return It(It({}, t), {
              isOpen: e.payload.isOpen
            });
          default:
            return t
        }
      },
      articles: function(t, e) {
        var n, r, i, o, a, c, u, l, s, d;
        switch (void 0 === t && (t = jt.b), e.type) {
          case Rt.ArticlesActionTypes.SET_ARTICLE_VIEW:
            if (e.payload.view === t.navigation.current) return t;
            var f = kt(t, e.payload.view);
            return Pt(Pt({}, t), {
              navigation: Pt(Pt({}, t.navigation), {
                current: e.payload.view,
                history: Nt([], f, !0)
              })
            });
          case Rt.ArticlesActionTypes.SET_ARTICLE_NAVIGATION:
            return Pt(Pt({}, t), {
              navigation: Pt(Pt({}, t.navigation), {
                current: e.payload.view,
                history: e.payload.history
              })
            });
          case Rt.ArticlesActionTypes.SET_CATALOG_FIRST_VIEW:
            return Pt(Pt({}, t), {
              navigation: Pt(Pt({}, t.navigation), {
                current: jt.b.navigation.current,
                history: []
              })
            });
          case Rt.ArticlesActionTypes.SET_PREVIOUS_ARTICLE_VIEW:
            var p = t.navigation.history.slice(0, -1);
            return Pt(Pt({}, t), {
              navigation: Pt(Pt({}, t.navigation), {
                history: p,
                current: p[p.length - 1] || t.navigation.mainView
              })
            });
          case Rt.ArticlesActionTypes.LOAD_SEARCH_RESULTS_SUCCESS:
            return Pt(Pt({}, t), {
              searchResults: {
                data: Nt(Nt([], t.searchResults.data, !0), e.payload.data, !0),
                meta: e.payload.meta
              }
            });
          case Rt.ArticlesActionTypes.SEARCH_RESULTS_RESET_TO_INITIAL_STATE:
            return Pt(Pt({}, t), {
              searchResults: Pt({}, jt.b.searchResults)
            });
          case Rt.ArticlesActionTypes.SWITCH_ARTICLE_TYPE:
            return Pt(Pt({}, t), {
              type: e.payload.type,
              navigation: Pt(Pt({}, t.navigation), {
                mainView: jt.b.navigation.mainView,
                history: jt.b.navigation.history
              })
            });
          case Rt.ArticlesActionTypes.SET_FILTER_NAME:
            return Pt(Pt({}, t), {
              filters: Pt(Pt({}, t.filters), (n = {}, n[e.payload.type] = Pt(Pt({}, t.filters[e.payload.type]), {
                name: e.payload.name
              }), n))
            });
          case Rt.ArticlesActionTypes.SET_FILTERS_LOADING:
            return Pt(Pt({}, t), {
              filtersLoading: e.payload.loading
            });
          case Rt.ArticlesActionTypes.SET_FILTER_LIST:
            return Pt(Pt({}, t), {
              filters: Pt(Pt({}, t.filters), (r = {}, r[e.payload.type] = Pt(Pt({}, t.filters[e.payload.type]), {
                filtersList: e.payload.filters
              }), r))
            });
          case Rt.ArticlesActionTypes.RESET_SELECTED_FILTERS:
            return Pt(Pt({}, t), {
              filters: Pt(Pt({}, t.filters), (i = {}, i[e.payload.type] = Pt(Pt({}, t.filters[e.payload.type]), {
                selectedFilters: []
              }), i))
            });
          case Rt.ArticlesActionTypes.CHANGE_SELECTED_FILTERS:
            var _ = e.payload,
              v = _.type,
              b = _.selectedFilters;
            return Pt(Pt({}, t), {
              filters: Pt(Pt({}, t.filters), (o = {}, o[v] = Pt(Pt({}, t.filters[v]), {
                selectedFilters: b
              }), o))
            });
          case Rt.ArticlesActionTypes.SET_IS_FILTER_KEY_PRESS:
            return Pt(Pt({}, t), {
              isFilterKeyPress: e.payload.isFilterKeyPress
            });
          case Rt.ArticlesActionTypes.SWITCH_ARTICLE_LOADING_STATE:
            return Pt(Pt({}, t), {
              isLoading: e.payload.isLoading
            });
          case Rt.ArticlesActionTypes.SET_FIRST_VIEW:
            return Pt(Pt({}, t), {
              filters: Pt(Pt({}, t.filters), (a = {}, a[t.type] = {
                name: jt.b.filters[t.type].name
              }, a)),
              navigation: Pt(Pt({}, t.navigation), {
                current: t.navigation.mainView,
                history: [t.navigation.mainView]
              })
            });
          case Rt.ArticlesActionTypes.LOAD_INIT_ARTICLE:
            return Pt(Pt({}, t), {
              initArticle: e.payload.article
            });
          case Rt.ArticlesActionTypes.SWITCH_APPLY_LOADING:
            return Pt(Pt({}, t), {
              isApplyLoading: e.payload.isLoading
            });
          case Rt.ArticlesActionTypes.SET_MAIN_VIEW:
            return Pt(Pt({}, t), {
              navigation: Pt(Pt({}, t.navigation), {
                mainView: e.payload.view,
                current: e.payload.view,
                history: [e.payload.view]
              })
            });
          case Rt.ArticlesActionTypes.INIT_FAVORITE_ARTICLES:
            return Pt(Pt({}, t), {
              favorites: Pt({}, e.payload.favorites)
            });
          case Rt.ArticlesActionTypes.SET_IS_LOADING_FAVORITES:
            return Pt(Pt({}, t), {
              favorites: Pt(Pt({}, t.favorites), (c = {}, c[e.payload.surface] = Pt(Pt({}, t.favorites[e.payload.surface]), {
                isLoading: e.payload.isLoading
              }), c))
            });
          case Rt.ArticlesActionTypes.ADD_FAVORITE_ARTICLES:
            var O = -1 === (m = t.favorites[e.payload.articleType].items.findIndex(Object(wt.b)(e.payload.article))) ? Nt(Nt([], t.favorites[e.payload.articleType].items || [], !0), [e.payload.article], !1) : t.favorites[e.payload.articleType].items;
            return Pt(Pt({}, t), {
              favorites: Pt(Pt({}, t.favorites), (u = {}, u[e.payload.articleType] = Pt(Pt({}, t.favorites[e.payload.articleType]), {
                articles: Nt(Nt([], t.favorites[e.payload.articleType].articles, !0), [{
                  article_uuid: e.payload.article.uuid,
                  collection_uuid: e.payload.article.collection_uuid
                }], !1),
                items: O,
                meta: Pt(Pt({}, t.favorites[e.payload.articleType].meta), {
                  total: t.favorites[e.payload.articleType].meta.total + 1
                })
              }), u))
            });
          case Rt.ArticlesActionTypes.DELETE_FAVORITE_ARTICLE:
            var E = t.favorites[e.payload.surface].items.findIndex((function(t) {
              return t.uuid == e.payload.article.uuid && t.collection_uuid == e.payload.article.collection_uuid
            }));
            O = Nt([], t.favorites[e.payload.surface].items, !0);
            t.navigation.current !== Ct.a.favorites && -1 !== E && O.splice(E, 1);
            var m = t.favorites[e.payload.surface].articles.findIndex(Object(wt.c)(e.payload.article)),
              y = Nt([], t.favorites[e.payload.surface].articles, !0);
            return y.splice(m, 1), Pt(Pt({}, t), {
              favorites: Pt(Pt({}, t.favorites), (l = {}, l[e.payload.surface] = Pt(Pt({}, t.favorites[e.payload.surface]), {
                articles: y,
                items: O,
                meta: Pt(Pt({}, t.favorites[e.payload.surface].meta), {
                  total: t.favorites[e.payload.surface].meta.total - 1
                })
              }), l))
            });
          case Rt.ArticlesActionTypes.REMOVE_INACTIVE_FAVORITES:
            var g = (d = t.favorites, Object.keys(d).reduce((function(t, e) {
              var n, r = d[e].items.reduce((function(t, n) {
                var r;
                return ((null === (r = d[e]) || void 0 === r ? void 0 : r.articles) || []).find((function(t) {
                  return t.article_uuid === n.uuid && t.collection_uuid === n.collection_uuid
                })) && t.push(n), t
              }), []);
              return Lt(Lt({}, t), ((n = {})[e] = Lt(Lt({}, d[e]), {
                items: r
              }), n))
            }), {}));
            return Pt(Pt({}, t), {
              favorites: g
            });
          case Rt.ArticlesActionTypes.CATALOG_INIT_WITH_ARTICLE:
            return Pt(Pt({}, t), {
              isCatalogInitWithArticle: e.payload.isCatalogInitWithArticle
            });
          case Rt.ArticlesActionTypes.CHANGE_IS_OPEN_CATALOG:
            return Pt(Pt({}, t), {
              isCatalogOpen: !0
            });
          case Rt.ArticlesActionTypes.SET_SCROLL_POSITION:
            return Pt(Pt({}, t), {
              scrollPosition: Pt(Pt({}, t.scrollPosition), (s = {}, s[e.payload.view] = {
                top: e.payload.scrollTopPosition,
                orientation: e.payload.orientation,
                isMiniCatalog: e.payload.isMiniCatalog
              }, s))
            });
          case Rt.ArticlesActionTypes.CHANGE_IS_OPEN_PATTERNS_POPUP:
            return Pt(Pt({}, t), {
              isOpenPatternPopup: e.payload.isOpen
            });
          default:
            return t
        }
      },
      miniCatalog: function(t, e) {
        switch (void 0 === t && (t = Ft), e.type) {
          case Dt.a:
            return Mt(Mt({}, t), {
              isCollapsed: !t.isCollapsed
            });
          default:
            return t
        }
      },
      myRoom: function(t, e) {
        switch (void 0 === t && (t = Ut), e.type) {
          case Vt.c:
            return xt(xt({}, t), {
              isLoading: e.payload.isLoading
            });
          case Vt.b:
            return xt(xt({}, t), {
              list: e.payload.list
            });
          case Vt.a:
            return xt(xt({}, t), {
              list: Ut.list
            });
          default:
            return t
        }
      },
      share: function(t, e) {
        switch (void 0 === t && (t = Ht), e.type) {
          case Bt.d:
            return Gt(Gt({}, t), {
              isOpen: !t.isOpen
            });
          case Bt.a:
            return Gt(Gt({}, t), {
              shareURL: e.payload.shareURL,
              clientName: e.payload.clientName,
              imageURL: e.payload.imageURL
            });
          case Bt.c:
            return Gt(Gt({}, t), {
              isLoading: !t.isLoading
            });
          case Bt.b:
            return Gt(Gt({}, t), {
              isError: e.payload.isError
            });
          default:
            return t
        }
      },
      feedback: function(t, e) {
        switch (void 0 === t && (t = Wt), e.type) {
          case zt.c:
            return Kt(Kt({}, t), {
              isOpen: !t.isOpen
            });
          case zt.e:
            return Kt(Kt({}, t), {
              isOpenedFeedback: e.payload.isOpenedFeedback
            });
          case zt.d:
            return Kt(Kt({}, t), {
              isRate: e.payload.rate
            });
          case zt.f:
            return Kt(Kt({}, t), {
              isOpenSubmitAlert: !t.isOpenSubmitAlert
            });
          case zt.b:
            return Kt(Kt({}, t), {
              message: e.payload.message
            });
          case zt.a:
            return Kt(Kt({}, t), {
              emotion: e.payload.emotion
            });
          default:
            return t
        }
      },
      contactForm: function(t, e) {
        switch (void 0 === t && (t = Yt), e.type) {
          case "[CONTACT-FORM] TOGGLE_CONTACT_FORM":
            return qt(qt({}, t), {
              isOpen: !t.isOpen
            });
          case "[CONTACT-FORM] SET_SUCCESS_REQUEST_CONTACT_FORM":
            return qt(qt({}, t), {
              currentStep: e.payload.currentStep,
              isRequestSuccess: !0
            });
          case "[CONTACT-FORM] COMPLETE_CONTACT_FORM":
            return qt(qt({}, t), {
              isOpen: !1,
              areShownIcons: !1
            });
          case "[CONTACT-FORM] ACTIVATE CONTACT_FORM":
            return qt(qt({}, t), {
              isOpen: !0,
              isActive: !0
            });
          case "[CONTACT-FORM] IS_CALLED_CONTACT_FORM":
            return qt(qt({}, t), {
              isCalled: e.payload.isCalled
            });
          case "[CONTACT-FORM] SHOW_CONTACT_FORM_ICONS":
            return qt(qt({}, t), {
              areShownIcons: !0
            });
          default:
            return t
        }
      },
      disclaimer: function(t, e) {
        switch (void 0 === t && (t = Qt), e.type) {
          case "[DISCLAIMER] CHANGE_IS_OPEN_DISCLAIMER":
            return Jt(Jt({}, t), {
              isOpen: e.payload.isOpen
            });
          case "[DISCLAIMER] IS_CALLED_DISCLAIMER":
            return Jt(Jt({}, t), {
              isCalled: e.payload.isCalled
            });
          default:
            return t
        }
      },
      shoppingCart: function(t, e) {
        switch (void 0 === t && (t = $t), e.type) {
          case Zt.e:
            return Xt(Xt({}, t), {
              isOpen: e.payload.isOpen
            });
          case Zt.d:
            return Xt(Xt({}, t), {
              isLoading: e.payload.isLoading
            });
          case Rt.ArticlesActionTypes.ADD_SHOPPING_CART_ARTICLES:
            return Xt(Xt({}, t), {
              list: te(te([], t.list, !0), [{
                quantity: 1,
                article: e.payload.article,
                articleType: e.payload.articleType
              }], !1)
            });
          case Rt.ArticlesActionTypes.DELETE_SHOPPING_CART_ARTICLES:
            var n = te([], t.list, !0),
              r = n.findIndex((function(t) {
                return t.article.uuid === e.payload.article.uuid && t.article.collection_uuid === e.payload.article.collection_uuid
              }));
            return -1 !== r && n.splice(r, 1), Xt(Xt({}, t), {
              list: n
            });
          case Zt.b:
            return Xt(Xt({}, t), {
              list: t.list.filter((function(t) {
                return 0 !== t.quantity
              }))
            });
          case Zt.a:
            return Xt(Xt({}, t), {
              list: t.list.map((function(t) {
                return t.article.uuid === e.payload.article.uuid && t.article.collection_uuid === e.payload.article.collection_uuid ? {
                  quantity: e.payload.quantity,
                  article: e.payload.article,
                  articleType: t.articleType
                } : t
              }))
            });
          case Zt.c:
            return Xt(Xt({}, t), {
              list: e.payload.list
            });
          default:
            return t
        }
      },
      cookiePolicy: function(t, e) {
        switch (void 0 === t && (t = ee), e.type) {
          case "[COOKIE-POLICY] ACCEPT_COOKIE_POLICY":
            return ne(ne({}, t), {
              isAccepted: !0,
              isOpen: !1
            });
          case "[COOKIE-POLICY] OPEN_COOKIE_POLICY":
            return ne(ne({}, t), {
              isOpen: !0
            });
          default:
            return t
        }
      },
      rooms: function(t, e) {
        var n, r;
        switch (void 0 === t && (t = ie), e.type) {
          case re.d:
            return oe(oe({}, t), {
              rooms: oe(oe({}, e.payload.response), {
                data: ae(ae([], t.rooms.data, !0), e.payload.response.data, !0)
              })
            });
          case re.e:
            var i = e.payload.room;
            return oe(oe({}, t), {
              selectedRoom: i,
              surfaces: ae(ae([], c.b.WALLS_ENABLED && (null === (n = null == i ? void 0 : i.walls) || void 0 === n ? void 0 : n.length) > 0 ? null == i ? void 0 : i.walls.map((function(t) {
                return {
                  active: !1,
                  id: t.wall_id,
                  type: u.b.wall,
                  article: null
                }
              })) : [], !0), (null == i ? void 0 : i.floor) && c.b.FLOORS_ENABLED ? [{
                active: !1,
                id: 0,
                type: u.b.floor,
                article: null
              }] : [], !0)
            });
          case re.a:
            return oe(oe({}, t), {
              rooms: oe(oe({}, t.rooms), {
                data: ae([e.payload.room], t.rooms.data, !0)
              }),
              countMyInteriors: t.countMyInteriors + 1
            });
          case re.c:
            var o = ce(t, e.payload.roomID),
              a = e.payload.roomID === (null === (r = t.selectedRoom) || void 0 === r ? void 0 : r.uuid);
            return oe(oe({}, t), {
              rooms: oe(oe({}, t.rooms), {
                data: ae([], o, !0)
              }),
              overlayResult: a ? null : t.overlayResult,
              selectedRoom: a ? null : t.selectedRoom,
              countMyInteriors: t.countMyInteriors - 1
            });
          case re.f:
            return oe(oe({}, t), {
              overlayResult: e.payload.overlayResult,
              numberOfOverlayResult: e.payload.overlayResult ? t.numberOfOverlayResult + 1 : t.numberOfOverlayResult
            });
          case re.j:
            return oe(oe({}, t), {
              isErrorLoaded: !t.isErrorLoaded
            });
          case re.g:
            return oe(oe({}, t), {
              countMyInteriors: e.payload.countMyInteriors
            });
          case re.b:
            return oe(oe({}, t), {
              isRoomListLoading: e.payload.isRoomListLoading
            });
          case re.h:
            return oe(oe({}, t), {
              isOpenBadPhotoPopup: !!e.payload.photoQualityError,
              photoQualityError: e.payload.photoQualityError
            });
          case re.i:
            o = ae([], t.rooms.data, !0);
            var l = t.rooms.data.findIndex((function(t) {
              return t.uuid === e.payload.uuid
            }));
            return -1 !== l && (o[l].isLoaded = e.payload.isLoaded), oe(oe({}, t), {
              rooms: oe(oe({}, t.rooms), {
                data: o
              })
            });
          default:
            return t
        }
      },
      catalog: ue.a,
      onboarding: de
    });
  var pe = n(33),
    _e = n.n(pe),
    ve = n(11),
    be = n(175),
    Oe = n(62);
  n(122);
  Object(be.polyfill)();
  var Ee, me, ye = (Ee = [st.a], me = Object(ft.composeWithDevTools)(dt.applyMiddleware.apply(void 0, Ee)), Object(dt.createStore)(fe, me));
  window.addEventListener("pagehide", (function() {
    "Android" !== c.b.DEVICE_OS && Object(ve.sessionFinish)()
  }), !1), window.addEventListener("load", (function() {
    Object(Oe.a)({
      eventName: "iframeLoaded"
    })
  })), document.addEventListener("visibilitychange", (function() {
    var t, e;
    "hidden" !== document.visibilityState || (null === (t = null === c.b || void 0 === c.b ? void 0 : c.b.DEVICE) || void 0 === t ? void 0 : t.type) === u.c.DESKTOP || c.b.IS_OPEN_PHOTO_SELECT_VIEW || c.b.BLOCKED ? "visible" !== document.visibilityState || (null === (e = null === c.b || void 0 === c.b ? void 0 : c.b.DEVICE) || void 0 === e ? void 0 : e.type) === u.c.DESKTOP || c.b.IS_OPEN_PHOTO_SELECT_VIEW || c.b.BLOCKED || Object(ve.sessionStart)(!1) : Object(ve.sessionFinish)()
  }));
  _e.a.render(i.a.createElement((function() {
    return i.a.createElement(a.a, {
      store: ye
    }, i.a.createElement(lt, null))
  }), null), document.getElementById("wizart-root"))
}]);
