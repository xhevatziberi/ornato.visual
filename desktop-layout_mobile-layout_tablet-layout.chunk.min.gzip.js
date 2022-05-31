(window.webpackJsonp = window.webpackJsonp || []).push([
  [3], {
    262: function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
        return c
      })), n.d(t, "b", (function() {
        return l
      }));
      var a = n(5),
        r = n(2),
        c = function(e, t, n) {
          return n ? Object(a.g)({
            shortPath: e.image_path,
            size: r.d.large
          }) : t && t.src ? t.src : e ? Object(a.g)({
            shortPath: e.image_path,
            size: r.d.large
          }) : ""
        },
        l = function(e, t, n) {
          return e.find((function(e) {
            return e.surfaceType === t && e.product && e.product.uuid === n.uuid && e.product.collection_uuid === n.collection_uuid && e.product.isRecommended === n.isRecommended
          }))
        }
    },
    266: function(e, t, n) {
      "use strict";
      n.d(t, "b", (function() {
        return c
      })), n.d(t, "a", (function() {
        return l
      }));
      var a = n(7),
        r = function(e) {
          return e.disclaimer
        },
        c = Object(a.a)(r, (function(e) {
          return e.isOpen
        })),
        l = Object(a.a)(r, (function(e) {
          return e.isCalled
        }))
    },
    277: function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
        return o
      }));
      var a = n(0),
        r = n.n(a),
        c = n(17),
        l = n.n(c),
        i = n(249),
        o = function(e) {
          var t, n = e.children,
            a = e.className;
          return r.a.createElement(r.a.Suspense, {
            fallback: r.a.createElement("div", {
              className: l()("suspenese-circular", (t = {}, t[a] = !!a, t))
            }, r.a.createElement(i.a, {
              className: "suspenese-circular__icon"
            }))
          }, n)
        }
    },
    287: function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
        return r
      }));
      var a = n(0),
        r = Object(a.lazy)((function() {
          return n.e(26).then(n.bind(null, 355))
        }))
    },
    288: function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
        return r
      }));
      var a = n(0),
        r = Object(a.lazy)((function() {
          return n.e(27).then(n.bind(null, 357))
        }))
    },
    289: function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
        return r
      }));
      var a = n(7),
        r = Object(a.a)((function(e) {
          return e.navigation
        }), (function(e) {
          return e.isControlsVisible
        }))
    },
    292: function(e, t, n) {
      "use strict";
      var a = n(0),
        r = n.n(a),
        c = n(22),
        l = n(8),
        i = n(41),
        o = n(96),
        s = n(5),
        u = n(2),
        f = n(47),
        d = n(18),
        p = n(262),
        m = n(17),
        v = n.n(m),
        g = n(1),
        b = n(13),
        h = {
          x: 0,
          lastTranslateX: 0,
          y: 0,
          lastTranslateY: 0,
          k: 1,
          rangeMinX: 0,
          rangeMinY: 0,
          rangeMaxX: 0,
          rangeMaxY: 0,
          lastScale: 1,
          initSacle: 1
        },
        E = n(36),
        O = n(6),
        y = n(40),
        w = function() {
          return (w = Object.assign || function(e) {
            for (var t, n = 1, a = arguments.length; n < a; n++)
              for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
          }).apply(this, arguments)
        },
        S = function(e, t, n) {
          return Math.min(Math.max(t, e), n)
        },
        A = function(e, t) {
          Object(l.d)(b.d);
          var c = Object(l.d)(b.b),
            i = Object(l.d)(b.a),
            o = Object(l.d)(b.h),
            s = Object(l.d)(y.getApplyLoading),
            u = Object(l.d)(f.g),
            d = Object(l.c)(),
            p = r.a.useState(1),
            m = p[0],
            v = p[1],
            g = r.a.useState(!1)[1],
            A = r.a.useState([]),
            j = A[0],
            T = A[1],
            _ = r.a.useState({
              width: 0,
              height: 0,
              src: null,
              room: null
            }),
            C = _[0],
            k = _[1];
          r.a.useEffect((function() {
            C.room && t.uuid === C.room.uuid && T(u)
          }), [t, C, u]);
          var x = r.a.useRef(null),
            L = r.a.useRef(null),
            N = r.a.useState(w({}, h)),
            P = N[0],
            M = N[1];
          r.a.useEffect((function() {
            g(!1)
          }), [t, e]);
          var R = function(e) {
              1 === e.maxPointers && M((function(t) {
                var n = S(t.lastTranslateX + e.deltaX, t.rangeMinX, t.rangeMaxX),
                  a = S(t.lastTranslateY + e.deltaY, t.rangeMinY, t.rangeMaxY);
                return w(w({}, t), {
                  x: n,
                  y: a
                })
              }))
            },
            I = function(e) {
              1 === e.maxPointers && M((function(e) {
                return w(w({}, e), {
                  lastTranslateX: e.x,
                  lastTranslateY: e.y
                })
              }))
            },
            W = function(e, t) {
              var n = Math.max(0, Math.round(L.current.offsetWidth * e) - x.current.offsetWidth),
                a = Math.max(0, Math.round(L.current.offsetHeight * e) - x.current.offsetHeight),
                r = Math.round(n / 2),
                c = Math.round(a / 2),
                l = 0 - r,
                i = 0 - c,
                o = S(t.x, l, r),
                s = S(t.y, i, c);
              return w(w({}, t), {
                k: e,
                x: o,
                y: s,
                lastTranslateX: o,
                lastTranslateY: s,
                rangeMinX: l,
                rangeMinY: i,
                rangeMaxX: r,
                rangeMaxY: c
              })
            },
            z = function(e) {
              M((function(t) {
                var n = t.lastScale * e.scale;
                if (n <= t.initSacle) return W(t.initSacle, t);
                if (n >= 5 * t.initSacle) return W(5 * t.initSacle, t);
                var a = W(n, t);
                return w(w({}, t), a)
              })), g((function(t) {
                return !t && e.scale > 1 ? (O.c.fireEvent(O.a.zoomImage), !0) : t
              }))
            },
            B = function() {
              M((function(e) {
                return w(w({}, e), {
                  lastScale: (t = e.k, n = e.initSacle, S(t, n, 5 * n))
                });
                var t, n
              }))
            };
          return r.a.useEffect((function() {
            if (t && e && L.current && x.current && !s) {
              var n = new Image;
              n.onload = function() {
                setTimeout((function() {
                  var n = 1;
                  n = x.current.offsetWidth / x.current.offsetHeight > t.width / t.height ? x.current.offsetHeight / t.height : x.current.offsetWidth / t.width, v(n);
                  var a = W(n, h);
                  M(w(w({}, a), {
                    lastScale: a.k,
                    initSacle: n
                  })), k({
                    width: t.width,
                    height: t.height,
                    src: e,
                    room: t
                  })
                }), 0)
              }, n.src = e
            }
          }), [e, o, i, c, t, s]), r.a.useEffect((function() {
            var e;
            return n.e(35).then(n.t.bind(null, 375, 7)).then((function(t) {
                var n = x.current;
                (e = new t.Manager(n, {
                  recognizers: [
                    [t.Rotate],
                    [t.Pinch, {
                        enable: !0
                      },
                      ["rotate"]
                    ],
                    [t.Pan, {
                      direction: t.DIRECTION_HORIZONTAL,
                      threshold: 0
                    }]
                  ]
                })).add(new t.Tap({
                  event: "doubletap",
                  taps: 2
                })), e.add(new t.Tap({
                  event: "singletap",
                  taps: 1
                })), e.get("doubletap").recognizeWith("singletap"), e.get("singletap").requireFailure("doubletap"), e.get("pinch").set({
                  enable: !0
                }), e.get("pan").set({
                  direction: t.DIRECTION_HORIZONTAL
                }), e.on("pan", R), e.on("panend", I), e.on("pinch pinchmove", z), e.on("pinchend pinchcancel", B), e.on("doubletap", (function(e) {
                  var t, n;
                  (null === (n = null === (t = e.target) || void 0 === t ? void 0 : t.className) || void 0 === n ? void 0 : n.includes) && e.target.className.includes("w-preview-image") && (M((function(e) {
                    if (e.initSacle > e.k) return e;
                    var t = e.k === e.initSacle ? 2 * e.initSacle : e.initSacle,
                      n = W(t, e);
                    return w(w(w({}, e), n), {
                      lastScale: n.k
                    })
                  })), g((function(e) {
                    return e || (O.c.fireEvent(O.a.zoomImage), !0)
                  })))
                })), e.on("singletap", (function(e) {
                  var t, n;
                  (null === (n = null === (t = e.target) || void 0 === t ? void 0 : t.className) || void 0 === n ? void 0 : n.includes) && e.target.className.includes("w-preview-image") && d(Object(E.b)({
                    sendAnalytics: !0
                  }))
                }))
              })),
              function() {
                e && (e.remove("pan"), e.remove("pinch"), e.remove("panend"), e.remove("doubletap"), e.remove("singletap"), e.remove("pinch pinchmove"), e.remove("pinchend pinchcancel"))
              }
          }), [m, c, i, o, t]), Object(a.useEffect)((function() {
            var e = function(e) {
              e.preventDefault();
              var t = e.deltaY || 0;
              M((function(e) {
                var n = e.k - t / 300,
                  a = 5 * e.initSacle;
                if (n <= e.initSacle) return W(e.initSacle, e);
                if (n >= a) return W(a, e);
                var r = W(n, e);
                return w(w(w({}, e), r), {
                  lastScale: n
                })
              })), g((function(e) {
                return !e && t < 0 ? (O.c.fireEvent(O.a.zoomImage), !0) : e
              }))
            };
            return x.current.addEventListener("wheel", e, {
                passive: !1
              }),
              function() {
                (null == x ? void 0 : x.current) && x.current.removeEventListener("wheel", e)
              }
          }), [x.current, c, i, o, t, m]), [x, L, P, m, C, j]
        },
        j = n(3),
        T = n(20),
        _ = n(81),
        C = n(46),
        k = n(38),
        x = n(44),
        L = n(21),
        N = n(25),
        P = n(86),
        M = n(266),
        R = n(72),
        I = n(146),
        W = n(33),
        z = n.n(W),
        B = r.a.lazy((function() {
          return n.e(30).then(n.bind(null, 225))
        })),
        D = r.a.forwardRef((function(e, t) {
          var n = Object(l.d)(b.g),
            a = document.getElementById("patterns-portal"),
            c = function() {
              e.onClose(e.surface)
            };
          return r.a.createElement(r.a.Fragment, null, (n === u.c.MOBILE || n === u.c.TABLET) && r.a.createElement(r.a.Fragment, null, a && e.surface.isActiveSettings && z.a.createPortal(r.a.createElement(I.a, {
            onClose: c,
            surface: null == e ? void 0 : e.surface,
            generalSurfaceButton: e.generalSurfaceButton,
            surfaces: e.surfaces,
            productType: e.surface.product.product_type.code
          }), a), r.a.createElement("div", {
            className: v()("surafce-settings roller flex-center", {
              "surafce-settings--active": e.surface.isActiveSettings
            }),
            onClick: function() {
              return e.onClick(e.surface)
            }
          }, r.a.createElement(T.X, null))), n === u.c.DESKTOP && r.a.createElement(r.a.Suspense, {
            fallback: r.a.createElement(r.a.Fragment, null)
          }, r.a.createElement(B, {
            open: e.surface.isActiveSettings,
            title: r.a.createElement(I.a, {
              onClose: c,
              surface: null == e ? void 0 : e.surface,
              generalSurfaceButton: e.generalSurfaceButton,
              surfaces: e.surfaces,
              productType: e.surface.product.product_type.code
            }),
            PopperProps: {
              disablePortal: !0,
              modifiers: {
                preventOverflow: {
                  enabled: !0,
                  boundariesElement: null == t ? void 0 : t.current
                },
                offset: {
                  offset: "0,6px"
                }
              }
            },
            classes: {
              tooltip: "surafce-settings__tooltip"
            },
            placement: e.placement
          }, r.a.createElement("div", {
            className: v()("surafce-settings roller flex-center", {
              "surafce-settings--active": e.surface.isActiveSettings
            }),
            onClick: function() {
              return e.onClick(e.surface)
            }
          }, r.a.createElement(T.X, null)))))
        })),
        F = r.a.forwardRef((function(e, t) {
          var n = e.deviceType,
            a = e.isActive,
            c = e.isFloorRoller,
            l = e.onClick;
          return r.a.createElement("div", {
            ref: t,
            className: v()("surface-roller flex-center action-button", {
              "surface-roller--active": a
            }),
            onClick: l
          }, r.a.createElement(r.a.Fragment, null, (n === u.c.DESKTOP || n === u.c.TABLET) && (c ? r.a.createElement(T.x, null) : r.a.createElement(T.gb, null)), n === u.c.MOBILE && r.a.createElement("div", {
            className: "surface-roller__inner"
          })))
        })),
        Y = Object(l.b)((function(e) {
          return {
            deviceType: Object(b.g)(e)
          }
        }))(F),
        X = Object(_.a)((function(e) {
          var t, n = e.deviceType,
            a = e.isActive,
            c = e.onClick,
            l = e.getLocalizationProperty;
          return r.a.createElement("div", {
            className: v()("screen-position__all-roller", "flex-center", "w-all-roller__wall", "w-all-roller__wall--" + n, (t = {}, t["w-all-roller__wall--" + n + "--active"] = a, t["w-all-roller__wall--active"] = a, t["w-all-roller__wall--active--custom"] = a && g.b.MAIN_COLOR, t)),
            onClick: c
          }, l("SURFACES.WALLS"))
        })),
        H = Object(l.b)((function(e) {
          return {
            deviceType: Object(b.g)(e)
          }
        }))(X),
        V = function() {};
      var K = "undefined" != typeof window,
        Q = K ? a.useLayoutEffect : a.useEffect,
        U = {
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        };
      var J = K && void 0 !== window.ResizeObserver ? function() {
          var e = Object(a.useState)(null),
            t = e[0],
            n = e[1],
            r = Object(a.useState)(U),
            c = r[0],
            l = r[1],
            i = Object(a.useMemo)((function() {
              return new window.ResizeObserver((function(e) {
                if (e[0]) {
                  var t = e[0].contentRect,
                    n = t.x,
                    a = t.y,
                    r = t.width,
                    c = t.height,
                    i = t.top,
                    o = t.left,
                    s = t.bottom,
                    u = t.right;
                  l({
                    x: n,
                    y: a,
                    width: r,
                    height: c,
                    top: i,
                    left: o,
                    bottom: s,
                    right: u
                  })
                }
              }))
            }), []);
          return Q((function() {
            if (t) return i.observe(t),
              function() {
                i.disconnect()
              }
          }), [t]), [n, c]
        } : function() {
          return [V, U]
        },
        Z = function(e) {
          var t = e.children,
            n = e.isControlsVisible,
            a = e.item,
            c = e.transform,
            l = e.rollerSize,
            i = void 0 === l ? 0 : l;
          return r.a.createElement("div", {
            className: v()("surface-actions", "controls-element", {
              "controls-element--hide": !n
            }),
            style: {
              position: "absolute",
              top: "calc(" + a.y + "%)",
              left: "calc(" + a.x + "%)",
              transformOrigin: "left top",
              transform: "translateX(" + -i / 2 * 1 / c.k + "px) translateY(" + -i / 2 * 1 / c.k + "px) scale(" + 1 / c.k + ")",
              zIndex: a.isActiveSettings ? 2 : 1
            }
          }, t)
        },
        q = r.a.forwardRef((function(e, t) {
          var n, a, c, l, i, o, s = e.item,
            f = e.isControlsVisible,
            d = e.transform,
            p = e.wallActivity,
            m = e.room,
            v = e.foundLeftWallDot,
            b = e.surfaces,
            h = e.selectSurface,
            E = e.onSettingsClick,
            y = e.onHandleClickWallsButon,
            w = J(),
            S = w[0],
            A = w[1],
            j = J(),
            T = j[0],
            _ = j[1],
            C = g.b.WALLS_ENABLED && s.surfaceType === u.b.wall && s.isActive && s.product && (null === (a = null === (n = s.product) || void 0 === n ? void 0 : n.laying_patterns) || void 0 === a ? void 0 : a.length) > 1 && (!p.activeAllWalls || 1 === p.wallsCount || p.productTypes.length > 1) || g.b.FLOORS_ENABLED && s.surfaceType === u.b.floor && s.isActive && !!s.product;
          return r.a.createElement(r.a.Fragment, {
            key: s.id + "_" + s.surfaceType
          }, (g.b.WALLS_ENABLED && s.surfaceType === u.b.wall || g.b.FLOORS_ENABLED && s.surfaceType === u.b.floor) && r.a.createElement(Z, {
            isControlsVisible: f,
            item: s,
            transform: d,
            isA: C,
            rollerSize: s.surfaceType === u.b.floor ? A.width : _.height
          }, g.b.WALLS_ENABLED && s.surfaceType === u.b.wall && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
            className: "surface-actions__column"
          }, r.a.createElement("div", {
            ref: T,
            className: "action-button"
          }, r.a.createElement(Y, {
            isActive: s.isActive,
            onClick: function(e) {
              e.stopPropagation(), h(s)
            }
          })), s.isActive && s.product && (null === (l = null === (c = s.product) || void 0 === c ? void 0 : c.laying_patterns) || void 0 === l ? void 0 : l.length) > 1 && (!p.activeAllWalls || 1 === p.wallsCount || p.productTypes.length > 1) && r.a.createElement(D, {
            ref: t,
            surface: s,
            onClick: E,
            onClose: E,
            placement: "right-start"
          })), v === s.x && 1 !== m.walls.length && r.a.createElement("div", {
            className: "surface-actions__column"
          }, r.a.createElement("div", {
            className: "action-button"
          }, r.a.createElement(H, {
            isActive: !!p.activeAllWalls,
            onClick: function(e) {
              e.stopPropagation(), y(), O.c.selectSurface(u.b.wall, !p.activeAllWalls, O.b.walls_button)
            }
          })), p.activeAllWalls && 1 === p.productTypes.length && (null === (o = null === (i = s.product) || void 0 === i ? void 0 : i.laying_patterns) || void 0 === o ? void 0 : o.length) > 1 && r.a.createElement(D, {
            ref: t,
            surface: s,
            generalSurfaceButton: !0,
            surfaces: b,
            onClick: E,
            onClose: E,
            placement: "right-start"
          }))), g.b.FLOORS_ENABLED && s.surfaceType === u.b.floor && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
            className: "surface-actions__column",
            ref: S
          }, r.a.createElement(Y, {
            isFloorRoller: !0,
            isActive: s.isActive,
            onClick: function(e) {
              e.stopPropagation(), h(s)
            }
          })), s.isActive && s.product && r.a.createElement(D, {
            surface: s,
            onClick: E,
            onClose: E,
            ref: t,
            placement: "top-start"
          }))))
        })),
        G = n(138),
        $ = function() {
          var e = Object(l.c)(),
            t = Object(l.d)(M.a),
            n = Object(l.d)(o.e);
          Object(a.useEffect)((function() {
            0 === t && g.b.DISCLAIMER && 1 === n && (e(Object(G.c)()), e(Object(G.a)(!0)), O.c.fireEvent(O.a.disclaimerShown))
          }), [n, t])
        },
        ee = Object(_.a)((function(e) {
          var t = e.room,
            n = e.roomSrc,
            a = e.deviceType,
            c = e.orientation,
            i = e.isLoading,
            o = e.isOpenBadPhotoPopup,
            s = e.photoQualityErrorMessage,
            f = e.photoQualityError,
            p = e.isControlsVisible,
            m = e.getLocalizationProperty,
            b = e.closeErrorPhotoPopupAndDeletePhoto,
            h = e.onClickUseAnyWay,
            E = e.selectSurface,
            w = e.selectAllSurfacesByType;
          if (!t) return null;
          $();
          var S, _ = Object(l.c)(),
            I = Object(l.d)(L.f),
            W = Object(l.d)(y.getArticleType),
            z = Object(l.d)(M.b),
            B = A(n, t),
            D = B[0],
            F = B[1],
            Y = B[2],
            X = B[3],
            H = B[4],
            V = B[5],
            K = r.a.useMemo((function() {
              var e = V.filter((function(e) {
                  return e.surfaceType === u.b.wall
                })),
                t = e.filter((function(e) {
                  return e.isActive
                }));
              return {
                activeAllWalls: e.length === t.length,
                countActiveWalls: t.length,
                wallsCount: e.length,
                productTypes: e.reduce((function(e, t) {
                  return t.product && !e.includes(t.product.product_type.code) && e.push(t.product.product_type.code), e
                }), [])
              }
            }), [V]),
            Q = r.a.useCallback((function() {
              w(u.b.wall, !K.activeAllWalls), W !== u.b.wall && (_(Object(d.switchArticleType)(u.b.wall)), _(Object(x.resetSelectedFilters)(W)), _(Object(L.p)({
                type: u.b.wall
              })), I.wall.steps.length || _(Object(L.u)())), 0 === K.countActiveWalls && a !== u.c.DESKTOP && _(Object(N.openArticlesPicker)())
            }), [K, W]),
            U = t.walls.map((function(e) {
              return e.x
            })),
            J = Math.min.apply(Math, U),
            Z = function(e) {
              _(Object(R.b)(e, !e.isActiveSettings)), e.isActiveSettings && O.c.fireEvent(O.a.layingPatternsMenu)
            };
          return i || (S = V.map((function(e) {
            return r.a.createElement(q, {
              ref: D,
              item: e,
              isControlsVisible: p,
              transform: Y,
              wallActivity: K,
              room: t,
              foundLeftWallDot: J,
              surfaces: V,
              selectSurface: E,
              onSettingsClick: Z,
              onHandleClickWallsButon: Q,
              key: e.id + "_" + e.surfaceType
            })
          }))), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
            className: v()("w-preview-image", "w-preview-image--" + a, {
              "w-preview-image--scaled": Y.k > X
            }),
            ref: D
          }, r.a.createElement("div", {
            className: "w-preview-image__inner",
            style: {
              transform: "translate3d(" + Y.x + "px, " + Y.y + "px, 0px) scale(" + Y.k + ")"
            },
            ref: F
          }, H.src && r.a.createElement(r.a.Fragment, null, r.a.createElement("img", {
            src: H.src,
            style: {
              width: H.width + "px",
              height: H.height + "px"
            },
            className: "w-preview-image__image",
            alt: "selected room"
          }), S))), r.a.createElement(r.a.Suspense, {
            fallback: r.a.createElement(r.a.Fragment, null)
          }, r.a.createElement(j.o, {
            zIndex: 5,
            disablePortal: !0,
            deviceType: a,
            orientation: c,
            open: o,
            title: s
          }, r.a.createElement("div", {
            className: "bad-upload"
          }, r.a.createElement("img", {
            className: "bad-upload--image",
            src: T.g
          })), r.a.createElement(j.b, {
            justifyContent: "center",
            deviceType: a
          }, r.a.createElement(j.n, {
            deviceType: a,
            view: "extra",
            size: k.a.L,
            onClick: function() {
              return b(t)
            }
          }, m("COMMON.RETRY")), f !== C.a.surfaceRecognized && r.a.createElement(j.n, {
            deviceType: a,
            onClick: function() {
              return h(t)
            },
            size: k.a.L
          }, m("COMMON.USE_ANYWAY"))))), !!g.b.DISCLAIMER && z && r.a.createElement(r.a.Suspense, {
            fallback: r.a.createElement(r.a.Fragment, null)
          }, r.a.createElement(P.b, {
            deviceType: a,
            orientation: c
          })), (o || z) && a === u.c.DESKTOP && r.a.createElement("div", {
            className: "w-disable-catalog"
          }))
        })),
        te = n(118),
        ne = n(289),
        ae = {
          closeErrorPhotoPopupAndDeletePhoto: te.a,
          onClickUseAnyWay: te.f,
          selectSurface: d.selectSurface,
          selectAllSurfacesByType: d.selectAllSurfacesByType
        },
        re = Object(l.b)((function(e) {
          return {
            room: e.rooms.selectedRoom,
            roomSrc: Object(p.a)(e.rooms.selectedRoom, e.rooms.overlayResult, e.auxiliaries.showInitialImagePath),
            isLoading: e.auxiliaries.isLoadingEnabledSurfaces,
            isOpenBadPhotoPopup: Object(o.c)(e),
            photoQualityErrorMessage: Object(o.g)(e),
            deviceType: Object(b.g)(e),
            photoQualityError: Object(o.f)(e),
            orientation: Object(b.h)(e),
            isControlsVisible: Object(ne.a)(e)
          }
        }), ae)(ee),
        ce = r.a.lazy((function() {
          return Promise.all([n.e(36), n.e(16)]).then(n.bind(null, 393))
        }));
      t.a = function() {
        var e = Object(l.d)(o.i),
          t = Object(l.d)(f.f),
          n = Object(l.d)(c.getLastSelectedProduct);
        return r.a.createElement(r.a.Fragment, null, r.a.createElement(re, null), (n && n.product_type.code === i.b.rug || t) && r.a.createElement(r.a.Suspense, {
          fallback: r.a.createElement("div", {
            className: "fitting-room__suspense"
          }, r.a.createElement("img", {
            src: Object(s.g)({
              shortPath: e.image_path,
              size: u.d.large,
              type: u.e.interior
            })
          }))
        }, r.a.createElement(ce, null)))
      }
    },
    295: function(e, t, n) {
      "use strict";
      var a = n(8),
        r = n(0),
        c = n.n(r),
        l = n(251),
        i = function(e) {
          var t = e.isOpen,
            n = e.anchor,
            a = e.variant,
            r = e.onHandleClose,
            i = e.children;
          return c.a.createElement(l.a, {
            anchor: n,
            elevation: 0,
            variant: a,
            open: t,
            onClose: r,
            classes: {
              paper: "w-paper"
            },
            style: {
              zIndex: 1300
            }
          }, i)
        },
        o = n(13),
        s = n(2);
      t.a = Object(a.b)((function(e) {
        return {
          isOpen: e.modal.isOpen,
          anchor: Object(o.g)(e) !== s.c.DESKTOP || e.navigation.view !== s.k.ArticlesInfo && e.navigation.view !== s.k.ShoppingCart ? "bottom" : "right",
          variant: Object(o.g)(e) !== s.c.DESKTOP || e.navigation.view !== s.k.ArticlesInfo && e.navigation.view !== s.k.ShoppingCart ? "temporary" : "persistent"
        }
      }))(i)
    }
  }
]);
