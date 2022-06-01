(window.webpackJsonp = window.webpackJsonp || []).push([
  [26], {
    325: function(e, t, a) {
      (function(t) {
        var a = /^\[object .+?Constructor\]$/,
          n = "object" == typeof t && t && t.Object === Object && t,
          r = "object" == typeof self && self && self.Object === Object && self,
          o = n || r || Function("return this")();

        function l(e, t, a) {
          switch (a.length) {
            case 0:
              return e.call(t);
            case 1:
              return e.call(t, a[0]);
            case 2:
              return e.call(t, a[0], a[1]);
            case 3:
              return e.call(t, a[0], a[1], a[2])
          }
          return e.apply(t, a)
        }

        function c(e, t) {
          return !!(e ? e.length : 0) && function(e, t, a) {
            if (t != t) return function(e, t, a, n) {
              var r = e.length,
                o = a + (n ? 1 : -1);
              for (; n ? o-- : ++o < r;)
                if (t(e[o], o, e)) return o;
              return -1
            }(e, s, a);
            var n = a - 1,
              r = e.length;
            for (; ++n < r;)
              if (e[n] === t) return n;
            return -1
          }(e, t, 0) > -1
        }

        function i(e, t, a) {
          for (var n = -1, r = e ? e.length : 0; ++n < r;)
            if (a(t, e[n])) return !0;
          return !1
        }

        function u(e, t) {
          for (var a = -1, n = e ? e.length : 0, r = Array(n); ++a < n;) r[a] = t(e[a], a, e);
          return r
        }

        function s(e) {
          return e != e
        }

        function m(e) {
          return function(t) {
            return e(t)
          }
        }

        function _(e, t) {
          return e.has(t)
        }
        var d, p = Array.prototype,
          f = Function.prototype,
          g = Object.prototype,
          E = o["__core-js_shared__"],
          y = (d = /[^.]+$/.exec(E && E.keys && E.keys.IE_PROTO || "")) ? "Symbol(src)_1." + d : "",
          v = f.toString,
          O = g.hasOwnProperty,
          h = g.toString,
          b = RegExp("^" + v.call(O).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
          T = p.splice,
          L = Math.max,
          N = Math.min,
          R = H(o, "Map"),
          S = H(Object, "create");

        function C(e) {
          var t = -1,
            a = e ? e.length : 0;
          for (this.clear(); ++t < a;) {
            var n = e[t];
            this.set(n[0], n[1])
          }
        }

        function I(e) {
          var t = -1,
            a = e ? e.length : 0;
          for (this.clear(); ++t < a;) {
            var n = e[t];
            this.set(n[0], n[1])
          }
        }

        function k(e) {
          var t = -1,
            a = e ? e.length : 0;
          for (this.clear(); ++t < a;) {
            var n = e[t];
            this.set(n[0], n[1])
          }
        }

        function j(e) {
          var t = -1,
            a = e ? e.length : 0;
          for (this.__data__ = new k; ++t < a;) this.add(e[t])
        }

        function w(e, t) {
          for (var a, n, r = e.length; r--;)
            if ((a = e[r][0]) === (n = t) || a != a && n != n) return r;
          return -1
        }

        function P(e) {
          return !(!z(e) || (t = e, y && y in t)) && (D(e) || function(e) {
            var t = !1;
            if (null != e && "function" != typeof e.toString) try {
              t = !!(e + "")
            } catch (e) {}
            return t
          }(e) ? b : a).test(function(e) {
            if (null != e) {
              try {
                return v.call(e)
              } catch (e) {}
              try {
                return e + ""
              } catch (e) {}
            }
            return ""
          }(e));
          var t
        }

        function M(e) {
          return function(e) {
            return function(e) {
              return !!e && "object" == typeof e
            }(e) && function(e) {
              return null != e && function(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
              }(e.length) && !D(e)
            }(e)
          }(e) ? e : []
        }

        function A(e, t) {
          var a, n, r = e.__data__;
          return ("string" == (n = typeof(a = t)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== a : null === a) ? r["string" == typeof t ? "string" : "hash"] : r.map
        }

        function H(e, t) {
          var a = function(e, t) {
            return null == e ? void 0 : e[t]
          }(e, t);
          return P(a) ? a : void 0
        }
        C.prototype.clear = function() {
          this.__data__ = S ? S(null) : {}
        }, C.prototype.delete = function(e) {
          return this.has(e) && delete this.__data__[e]
        }, C.prototype.get = function(e) {
          var t = this.__data__;
          if (S) {
            var a = t[e];
            return "__lodash_hash_undefined__" === a ? void 0 : a
          }
          return O.call(t, e) ? t[e] : void 0
        }, C.prototype.has = function(e) {
          var t = this.__data__;
          return S ? void 0 !== t[e] : O.call(t, e)
        }, C.prototype.set = function(e, t) {
          return this.__data__[e] = S && void 0 === t ? "__lodash_hash_undefined__" : t, this
        }, I.prototype.clear = function() {
          this.__data__ = []
        }, I.prototype.delete = function(e) {
          var t = this.__data__,
            a = w(t, e);
          return !(a < 0) && (a == t.length - 1 ? t.pop() : T.call(t, a, 1), !0)
        }, I.prototype.get = function(e) {
          var t = this.__data__,
            a = w(t, e);
          return a < 0 ? void 0 : t[a][1]
        }, I.prototype.has = function(e) {
          return w(this.__data__, e) > -1
        }, I.prototype.set = function(e, t) {
          var a = this.__data__,
            n = w(a, e);
          return n < 0 ? a.push([e, t]) : a[n][1] = t, this
        }, k.prototype.clear = function() {
          this.__data__ = {
            hash: new C,
            map: new(R || I),
            string: new C
          }
        }, k.prototype.delete = function(e) {
          return A(this, e).delete(e)
        }, k.prototype.get = function(e) {
          return A(this, e).get(e)
        }, k.prototype.has = function(e) {
          return A(this, e).has(e)
        }, k.prototype.set = function(e, t) {
          return A(this, e).set(e, t), this
        }, j.prototype.add = j.prototype.push = function(e) {
          return this.__data__.set(e, "__lodash_hash_undefined__"), this
        }, j.prototype.has = function(e) {
          return this.__data__.has(e)
        };
        var B, x, F = (B = function(e) {
          var t = u(e, M);
          return t.length && t[0] === e[0] ? function(e, t, a) {
            for (var n = a ? i : c, r = e[0].length, o = e.length, l = o, s = Array(o), d = 1 / 0, p = []; l--;) {
              var f = e[l];
              l && t && (f = u(f, m(t))), d = N(f.length, d), s[l] = !a && (t || r >= 120 && f.length >= 120) ? new j(l && f) : void 0
            }
            f = e[0];
            var g = -1,
              E = s[0];
            e: for (; ++g < r && p.length < d;) {
              var y = f[g],
                v = t ? t(y) : y;
              if (y = a || 0 !== y ? y : 0, !(E ? _(E, v) : n(p, v, a))) {
                for (l = o; --l;) {
                  var O = s[l];
                  if (!(O ? _(O, v) : n(e[l], v, a))) continue e
                }
                E && E.push(v), p.push(y)
              }
            }
            return p
          }(t) : []
        }, x = L(void 0 === x ? B.length - 1 : x, 0), function() {
          for (var e = arguments, t = -1, a = L(e.length - x, 0), n = Array(a); ++t < a;) n[t] = e[x + t];
          t = -1;
          for (var r = Array(x + 1); ++t < x;) r[t] = e[t];
          return r[x] = n, l(B, this, r)
        });

        function D(e) {
          var t = z(e) ? h.call(e) : "";
          return "[object Function]" == t || "[object GeneratorFunction]" == t
        }

        function z(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t)
        }
        e.exports = F
      }).call(this, a(126))
    },
    355: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        o = a(17),
        l = a.n(o),
        c = a(8),
        i = a(96),
        u = a(118),
        s = a(28),
        m = a(13),
        _ = a(6),
        d = a(1),
        p = a(22),
        f = a(41),
        g = function() {
          var e = r.a.useState(!1),
            t = e[0],
            a = e[1],
            n = r.a.useState(!1),
            o = n[0],
            l = n[1],
            g = Object(c.c)(),
            E = Object(c.d)(i.h),
            y = Object(c.d)(i.i),
            v = Object(c.d)(i.a),
            O = Object(c.d)(m.f),
            h = Object(c.d)(i.d),
            b = Object(c.d)(i.c),
            T = Object(c.d)(p.getLastSelectedProduct);
          return {
            rooms: E,
            selectedRoom: y,
            countMyInteriors: v,
            isOpenBigFileSizeError: t,
            isRoomListLoading: h,
            isOpenBadPhotoPopup: b,
            isFileTypeError: o,
            onHandleSelectRoom: function(e) {
              var t, a = !y || y.uuid !== e.uuid;
              (null === (t = null == T ? void 0 : T.product_type) || void 0 === t ? void 0 : t.code) === f.b.rug && g(Object(p.resetLastSelectedProduct)()), d.b.CUSTOM_PRODUCT && a ? g(Object(u.j)(e)) : g(a ? Object(u.i)(e) : Object(s.a)())
            },
            onHandleUploadPhoto: function(e) {
              if (e) {
                /(image\/png|image\/jpg|image\/jpeg|image\/webp)$/i.exec(e.type) ? e.size > 10485760 ? (a(!t), _.c.fireEvent(_.a.customInteriorUploadError, {
                  additional_data: {
                    eventValue: {
                      error: "too_large"
                    }
                  }
                })) : g(Object(u.e)(e, O)) : (l(!0), _.c.fireEvent(_.a.errorRoomUpload, {
                  additional_data: {
                    eventValue: {
                      extension_error: !0,
                      file_type: e.type
                    }
                  }
                }))
              }
            },
            onHandleDeleteRoom: function(e) {
              g(Object(u.g)(e)), _.c.fireEvent(_.a.customTnteriorDeleted)
            },
            onHandleCloseView: function() {
              g(Object(s.a)()), _.c.fireEvent(_.a.galleryСlosed)
            },
            loadMoreRooms: function() {
              g(Object(u.c)())
            },
            onHandleCloseBigSizeError: function() {
              a(!t)
            },
            onHandleCloseFileTypeError: function() {
              l(!1)
            }
          }
        },
        E = a(127),
        y = a(2),
        v = a(20),
        O = a(3),
        h = a(106),
        b = Object(O.q)((function(e) {
          var t = e.isBackButtonAction,
            a = e.selectedRoom,
            n = e.listScrollPosition,
            o = e.haveScroll,
            c = e.onHandleClickBackButton,
            i = e.onHandleCloseView,
            u = e.getLocalizationProperty,
            s = Object(h.useDevice)(),
            m = s.isMobile,
            p = s.deviceType,
            g = u("ROOM_LIST.TITLE_ROW1").trim();
          m && n >= 75 && "," === g[g.length - 1] && (g = g.slice(0, g.length - 1));
          var E = function() {
            d.b.MAIN_PAGE_LINK && (_.c.fireEvent(_.a.logoClicked), window.open(d.b.MAIN_PAGE_LINK, "_blank"))
          };
          return r.a.createElement("div", {
            className: l()("room-gallery__header", "room-gallery__header--" + p, {
              "room-gallery__header--client": d.b.LOGO_PATH
            }, {
              "room-gallery__header--collapsed": n >= 75
            }, {
              "room-gallery__header--left-big-padding": !t
            }, {
              "room-gallery__header--right-big-padding": !a
            }, {
              "room-gallery__header--selected-room": a
            }, {
              "room-gallery__header--is-scroll": o
            })
          }, p === y.c.DESKTOP && t && u("ROOM_LIST.BACK_BUTTON") && r.a.createElement(O.n, {
            deviceType: p,
            size: f.a.L,
            onClick: c,
            className: "flex-center room-gallery__back-border back-button--desktop"
          }, r.a.createElement("span", {
            className: "room-gallery__back-arrow"
          }, r.a.createElement(v.d, null)), r.a.createElement(O.k, {
            fontName: "new_button_small",
            className: "weight_700"
          }, u("ROOM_LIST.BACK_BUTTON"))), p !== y.c.DESKTOP && t && u("ROOM_LIST.BACK_BUTTON") && r.a.createElement("div", {
            className: "room-gallery__back-wrapper flex-center"
          }, r.a.createElement("div", {
            className: "room-gallery__back flex-center",
            onClick: c
          }, !m && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
            className: "room-gallery__back-content"
          }, r.a.createElement(v.d, null))), m && r.a.createElement(v.c, null))), r.a.createElement("div", {
            className: l()("room-gallery__title", {
              "room-gallery__title--big": g.length > 20 || 0 === g.length
            }, {
              "room-gallery__title--transition-on": n >= 1
            })
          }, !m && r.a.createElement(O.k, {
            as: "h1",
            className: "weight_600"
          }, u("ROOM_LIST.TITLE")), m && g && r.a.createElement(r.a.Fragment, null, g, r.a.createElement("br", null), r.a.createElement("span", {
            className: l()("room-gallery__title--description", {
              "room-gallery__title--description--hidden": n > 75 && m
            })
          }, u("ROOM_LIST.TITLE_ROW2")))), r.a.createElement("div", {
            className: l()("room-gallery__logo-warapper", {
              "room-gallery__logo-warapper--only-logo": !a
            })
          }, p === y.c.DESKTOP && r.a.createElement(r.a.Fragment, null, d.b.LOGO_PATH ? r.a.createElement("img", {
            alt: "logo",
            className: l()("room-gallery__logo room-gallery__logo--client", {
              "room-gallery__logo--clickable": !!d.b.MAIN_PAGE_LINK
            }),
            src: d.b.LOGO_PATH,
            onClick: E
          }) : r.a.createElement(v.hb, {
            attributes: {
              onClick: E,
              className: l()({
                "room-gallery__logo--clickable": !!d.b.MAIN_PAGE_LINK
              })
            }
          })), a && r.a.createElement("div", {
            className: "room-gallery__close",
            onClick: i
          }, r.a.createElement(O.l, {
            title: "TOOLTIPS.CLOSE",
            placment: "bottom",
            className: "flex-center"
          }, r.a.createElement(v.k, null)))))
        })),
        T = r.a.forwardRef((function(e, t) {
          return r.a.createElement("div", {
            className: "room-gallery__upload-wrapper flex-center",
            onClick: function() {
              _.c.fireEvent(_.a.onClickUploudInterior), t && t.current && t.current.click()
            }
          }, r.a.createElement("span", {
            className: "room-gallery__button-layer"
          }, r.a.createElement(v.fb, null)), r.a.createElement("div", {
            className: "room-gallery__upload flex-center"
          }, r.a.createElement("div", {
            className: l()("room-gallery__upload-inner", {
              "room-gallery__upload-inner-custom": d.b.MAIN_COLOR
            }, "flex-center")
          }, r.a.createElement("div", {
            className: "room-gallery__upload-inner-second flex-center"
          })), r.a.createElement("span", {
            className: "room-gallery__upload-icon"
          }, r.a.createElement(v.h, null))))
        })),
        L = a(128),
        N = a(46),
        R = r.a.forwardRef((function(e, t) {
          var a, n = e.rooms,
            o = e.isRoomListLoading,
            c = e.onHandleSelectRoom,
            i = e.onHandleDeleteRoom,
            u = e.loadMoreRooms,
            s = e.onHandleClickUploadButton,
            m = e.onListScroll,
            _ = e.getLocalizationProperty,
            p = Object(E.a)(),
            f = p.isMobile,
            g = p.orientation,
            O = f && g === y.f.Portrait,
            h = null;
          return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
            className: "room-gallery__list-wrapper",
            ref: t,
            onScroll: function() {
              m(t.current.scrollTop)
            }
          }, (n || o) && r.a.createElement("div", null, O && h, r.a.createElement("div", {
            className: "pin_container"
          }, !O && h, o ? r.a.createElement(x, null) : null === (a = null == n ? void 0 : n.data) || void 0 === a ? void 0 : a.map((function(e, t) {
            var a = t === n.data.length - 1,
              o = e.room_type_id === N.b.MyInteriors;
            return a && n.meta.current_page !== n.meta.last_page ? r.a.createElement(L.a, {
              key: e.uuid,
              as: "span",
              onChange: function(e, t) {
                return function(e, t) {
                  e && t.isIntersecting && n.meta.last_page > n.meta.current_page && u()
                }(e, t)
              }
            }, r.a.createElement(A, {
              room: e,
              isMyInteriorsView: o,
              onHandleDeleteRoom: i,
              onHandleSelectRoom: c
            })) : r.a.createElement(A, {
              room: e,
              key: e.uuid,
              isMyInteriorsView: o,
              onHandleDeleteRoom: i,
              onHandleSelectRoom: c
            })
          })))) ))
        })),
        S = a(81),
        I = a(38),
        k = a(5),
        j = a(142),
        w = a(40),
        P = a(325),
        M = a.n(P),
        A = Object(S.a)((function(e) {
          var t = e.room,
            a = e.isMyInteriorsView,
            n = e.onHandleSelectRoom,
            o = e.onHandleDeleteRoom,
            i = e.getLocalizationProperty,
            s = Object(c.c)(),
            _ = r.a.useState(!1),
            d = _[0],
            p = _[1],
            f = Object(k.g)({
              shortPath: t.image_path,
              size: y.d.thumbnail,
              type: y.e.interior
            }),
            g = Object(j.a)(f, (null == t ? void 0 : t.isLoaded) || !1, (function() {
              setTimeout((function() {
                return s(Object(u.k)(!0, t.uuid))
              }), 1e3)
            })),
            E = g.isLoading,
            h = g.imageRef,
            b = g.error,
            T = Object(c.d)(m.g),
            L = Object(c.d)(w.getInitArticle),
            N = r.a.useMemo((function() {
              var e;
              if (L) {
                var a = [];
                return t.walls.length > 0 && a.push(y.b.wall), (null === (e = t.floor) || void 0 === e ? void 0 : e.x) && a.push(y.b.floor), 0 === M()(a, L.application_type).length
              }
              return !1
            }), [L, t]);
          return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
            className: "room-gallery__image-wrapper card card_small",
            key: t.uuid,
            ref: h
          }, r.a.createElement(B, {
            animation: !!E && "wave"
          }), !E && r.a.createElement(r.a.Fragment, null, r.a.createElement("img", {
            className: l()("room-gallery__image", {
              "room-gallery__image--loaded": null == t ? void 0 : t.isLoaded,
              "room-gallery__image--error": b
            }),
            alt: t.room_type_title + " image",
            src: f,
            onClick: function() {
              b || n(t)
            }
          }), a && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
            className: "room-gallery__date flex-center"
          }, r.a.createElement(v.N, null), r.a.createElement("span", null, t.created_at)), r.a.createElement("div", {
            className: "room-gallery__delete flex-center",
            onClick: function(e) {
              e.stopPropagation(), p(!0)
            }
          }, r.a.createElement(O.l, {
            title: "TOOLTIPS.DELETE_ROOM"
          }, r.a.createElement("div", {
            className: "flex-center"
          }, r.a.createElement(v.n, null))))), N && r.a.createElement("div", {
            className: "room-gallery__image--disabled"
          }, r.a.createElement("img", {
            src: f,
            className: "room-gallery__image--disabled-filter"
          }), r.a.createElement("div", {
            className: "room-gallery__image--disabled-wrapper"
          }, r.a.createElement(v.p, null), r.a.createElement(O.k, {
            as: "div",
            fontName: "new_body_text",
            className: "weight_700 room-gallery__image--disabled-text"
          }, i("ROOM_LIST.ROOM_NOT_AVAILABLE")))))), r.a.createElement(r.a.Suspense, {
            fallback: r.a.createElement(r.a.Fragment, null)
          }, r.a.createElement(O.o, {
            backgroundColorBlur: !0,
            deviceType: T,
            open: d,
            orientation: y.f.Portrait,
            onClose: function() {
              return p(!1)
            },
            title: i("ROOM_LIST.DELETE_ROOM_TITLE"),
            zIndex: 2001
          }, r.a.createElement(O.b, {
            justifyContent: "center",
            deviceType: T
          }, r.a.createElement(O.n, {
            deviceType: T,
            size: I.a.L,
            onClick: function() {
              return p(!1)
            }
          }, i("COMMON.CANCEL")), r.a.createElement(O.n, {
            view: "extra",
            deviceType: T,
            size: I.a.L,
            onClick: function() {
              o(t.uuid), p(!1)
            }
          }, i("COMMON.DELETE"))))))
        })),
        H = a(214),
        B = function(e) {
          var t = e.animation,
            a = void 0 === t ? "pulse" : t,
            n = Object(E.a)().isMobile;
          return r.a.createElement(H.a, {
            variant: "rect",
            animation: a,
            className: l()("room-gallery__image", {
              "room-gallery__image-stub--mobile": n
            })
          })
        },
        x = function() {
          var e = Object(c.d)(m.i),
            t = Object(c.d)(m.g),
            a = 3;
          t !== y.c.DESKTOP && e === y.f.Portrait ? a = 2 : t === y.c.MOBILE && e === y.f.Landscape && (a = 4);
          var n = Array(a).fill(null);
          return r.a.createElement(r.a.Fragment, null, n.map((function() {
            return r.a.createElement("div", {
              key: Object(k.m)(),
              className: "room-gallery__image-wrapper card"
            }, r.a.createElement(B, null))
          })))
        },
        F = function() {
          var e = r.a.useRef(null),
            t = Object(c.d)(i.k);
          return r.a.useEffect((function() {
            e.current && t && e.current.scroll({
              top: 0
            })
          }), [e.current, t]), {
            roomListWrapperRef: e
          }
        },
        D = function() {
          return (D = Object.assign || function(e) {
            for (var t, a = 1, n = arguments.length; a < n; a++)
              for (var r in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
          }).apply(this, arguments)
        };
      t.default = Object(S.a)((function(e) {
        var t, a = e.getLocalizationProperty,
          n = r.a.useState(!1),
          o = n[0],
          c = n[1],
          i = r.a.useRef(null),
          u = Object(E.a)(),
          s = u.deviceType,
          m = u.isMobile,
          p = u.orientation,
          v = F().roomListWrapperRef,
          L = g(),
          N = L.rooms,
          S = L.selectedRoom,
          C = L.isOpenBigFileSizeError,
          I = L.isRoomListLoading,
          k = L.isFileTypeError,
          j = L.onHandleSelectRoom,
          w = L.onHandleUploadPhoto,
          P = L.onHandleDeleteRoom,
          M = L.onHandleCloseView,
          A = L.loadMoreRooms,
          H = L.onHandleCloseBigSizeError,
          B = L.onHandleCloseFileTypeError,
          x = Object(h.useBackButton)(),
          z = x.isBackButtonAction,
          V = x.onHandleClickBackButton,
          U = r.a.useState(0),
          K = U[0],
          G = U[1];
        r.a.useEffect((function() {
          v && v.current && c(v.current.scrollHeight > v.current.clientHeight)
        }), [v, null === (t = null == v ? void 0 : v.current) || void 0 === t ? void 0 : t.scrollHeight]);
        var W = function() {
          window.removeEventListener("focus", W), window.removeEventListener("touchend", W), setTimeout((function() {
            Object(d.a)(D(D({}, d.b), {
              IS_OPEN_PHOTO_SELECT_VIEW: !1
            }))
          }), 2e3)
        };
        return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
          className: l()("room-gallery", "room-gallery--" + s)
        }, r.a.createElement("input", {
          type: "file",
          ref: i,
          onClick: function(e) {
            e.stopPropagation(), window.addEventListener("focus", W), window.addEventListener("touchend", W), Object(d.a)(D(D({}, d.b), {
              IS_OPEN_PHOTO_SELECT_VIEW: !0
            }))
          },
          onChange: function(e) {
            w(e.target.files[0]), e.target.value = null, window.removeEventListener("focus", W), window.removeEventListener("touchend", W), setTimeout((function() {
              Object(d.a)(D(D({}, d.b), {
                IS_OPEN_PHOTO_SELECT_VIEW: !1
              }))
            }), 2e3)
          },
          className: "room-gallery__load-input",
          accept: "image/*;capture=camera,image/jpeg,image/jpg,image/png,image/webp"
        }), r.a.createElement(b, {
          selectedRoom: S,
          isBackButtonAction: z,
          onHandleClickBackButton: V,
          onHandleCloseView: M,
          listScrollPosition: K,
          haveScroll: o
        }), r.a.createElement(R, {
          rooms: N,
          onHandleSelectRoom: j,
          onHandleDeleteRoom: P,
          ref: v,
          onHandleClickUploadButton: function() {
            _.c.fireEvent(_.a.onClickUploudInterior), i && i.current && i.current.click()
          },
          loadMoreRooms: A,
          getLocalizationProperty: a,
          isRoomListLoading: I,
          onListScroll: function(e) {
            G(e)
          }
        }), K > (m ? 200 : 150) && (m || s === y.c.TABLET) && !d.b.DEACTIVATE_CUSTOM_PHOTO && r.a.createElement("div", {
          className: "room-gallery__upload-button-container"
        }, r.a.createElement(T, {
          ref: i
        }))), r.a.createElement(r.a.Suspense, {
          fallback: r.a.createElement(r.a.Fragment, null)
        }, r.a.createElement(O.o, {
          zIndex: 2001,
          backgroundColorBlur: !0,
          deviceType: s,
          orientation: p,
          open: C,
          onClose: H,
          title: a("ERROR_MESSAGES.LARGE_FILE_TITLE")
        }, r.a.createElement(O.b, {
          justifyContent: "center",
          deviceType: s
        }, r.a.createElement(O.n, {
          view: "extra",
          deviceType: s,
          textTransform: "uppercase",
          onClick: H,
          size: f.a.L
        }, a("COMMON.OK"))))), r.a.createElement(r.a.Suspense, {
          fallback: r.a.createElement(r.a.Fragment, null)
        }, r.a.createElement(O.o, {
          zIndex: 2001,
          backgroundColorBlur: !0,
          deviceType: s,
          orientation: p,
          open: k,
          onClose: B,
          title: a("ERROR_MESSAGES.EXTENSION_ERROR.TITLE")
        }, r.a.createElement("div", null, r.a.createElement(O.p, {
          textAlign: "center",
          display: "block"
        }, a("ERROR_MESSAGES.EXTENSION_ERROR.MESSAGE"))), r.a.createElement(O.b, {
          justifyContent: "center",
          deviceType: s
        }, r.a.createElement(O.n, {
          view: "extra",
          deviceType: s,
          textTransform: "uppercase",
          onClick: B,
          size: f.a.L
        }, a("COMMON.OK"))))))
      }))
    }
  }
]);
