(window.webpackJsonp = window.webpackJsonp || []).push([
  [12], {
    258: function(e, t, a) {
      "use strict";
      a.d(t, "a", (function() {
        return c
      }));
      var n = a(0),
        i = a.n(n),
        o = a(17),
        l = a.n(o),
        r = a(261),
        c = function(e) {
          var t = e.title,
            a = e.children,
            n = e.cutDown,
            o = void 0 !== n && n,
            c = e.padding,
            d = void 0 === c || c,
            m = e.hidden,
            s = void 0 !== m && m,
            u = e.onClose;
          return i.a.createElement("div", {
            className: l()("redesigned-modal", {
              "redesigned-modal--cut-down": o
            }, {
              "redesigned-modal--hidden": s
            })
          }, i.a.createElement(r.b, {
            title: t,
            onClose: u
          }), i.a.createElement("div", {
            className: l()("redesigned-modal__container", {
              "redesigned-modal__container--padding": d
            })
          }, a))
        }
    },
    261: function(e, t, a) {
      "use strict";
      a.d(t, "b", (function() {
        return r
      })), a.d(t, "a", (function() {
        return c.a
      }));
      var n = a(0),
        i = a.n(n),
        o = a(3),
        l = a(20),
        r = function(e) {
          var t = e.title,
            a = e.onClose;
          return i.a.createElement("div", {
            className: "redesigned-modal__header"
          }, i.a.createElement(o.k, {
            as: "h2",
            className: "bold redesigned-modal__title"
          }, t), !!a && i.a.createElement("div", {
            className: "redesigned-modal__close",
            onClick: function() {
              a && a()
            }
          }, i.a.createElement(o.l, {
            title: "TOOLTIPS.CLOSE",
            placement: "bottom"
          }, i.a.createElement(l.k, null))))
        },
        c = a(258)
    },
    376: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(8),
        i = a(0),
        o = a.n(i),
        l = a(2),
        r = a(5),
        c = a(258),
        d = a(81),
        m = a(3),
        s = a(20),
        u = a(13),
        w = Object(m.q)((function(e) {
          var t = e.src,
            a = e.name,
            i = e.onClick,
            r = e.showProcessingScreen,
            c = e.getLocalizationProperty,
            d = Object(n.d)(u.d),
            w = Object(n.d)(u.g),
            g = Object(n.d)(u.f);
          return o.a.createElement("div", {
            className: "download-item"
          }, o.a.createElement(m.k, {
            fontName: "new_body_text",
            className: "bold download-item__title"
          }, a), w === l.c.MOBILE && "iPhone" === g && "Chrome" === d ? o.a.createElement("div", {
            className: "download-item__image"
          }, o.a.createElement("div", {
            className: "download-item__image-wr"
          }, o.a.createElement("div", {
            className: "download-item__image-wrapper"
          }, o.a.createElement("img", {
            className: "download-item__preview",
            src: t
          }))), o.a.createElement("div", {
            className: "download-item__message"
          }, o.a.createElement(m.k, {
            fontName: "new_body_small"
          }, c("DOWNLOAD.DOWNLOAD_HINT")))) : o.a.createElement("div", {
            className: "download-item__image",
            onClick: function() {
              r(!0), i(),
                function(e, t) {
                  void 0 === t && (t = "untitled");
                  var a = document.createElement("a");
                  a.href = e, a.download = t, document.body.appendChild(a), setTimeout((function() {
                    a.click(), r(!1)
                  }), 3e3)
                }(t, a + "_image.jpeg"), setTimeout((function() {
                  r(!1)
                }), 3e3)
            }
          }, o.a.createElement("div", {
            className: "download-item__image-wr"
          }, o.a.createElement("div", {
            className: "download-item__image-wrapper"
          }, o.a.createElement("img", {
            className: "download-item__preview",
            src: t
          }))), o.a.createElement("div", {
            className: "download-item__icon"
          }, o.a.createElement(s.r, null))))
        })),
        g = a(14),
        h = {
          showProcessingScreen: g.j
        },
        _ = Object(n.b)(null, h)(w),
        f = a(6),
        v = a(1),
        E = a(157),
        p = function(e, t) {
          return e * t / 1920
        },
        b = a(310),
        N = a(312),
        O = a(313),
        y = a(314),
        S = a(315),
        T = a(316),
        I = Object(d.a)((function(e) {
          var t = e.appliedArticles,
            a = (e.width, e.name),
            i = e.roomSRC,
            c = e.device,
            d = e.getLocalizationProperty,
            w = e.showProcessingScreen,
            g = Object(n.d)(u.d),
            h = Object(n.d)(u.g),
            _ = Object(n.d)(u.f),
            I = o.a.useState(null),
            L = I[0],
            x = I[1];
          o.a.useEffect((function() {
            Object(E.a)(t).then((function(e) {
              var t = null,
                a = new Image;
              a.src = i, a.crossOrigin = "Anonymous", a.onload = function() {
                var n = a.width,
                  i = a.height,
                  o = a.width > a.height ? n : i,
                  m = p(120, o);
                t = new b.Stage({
                  container: "canvas-container",
                  width: n,
                  height: i
                });
                var s = new N.Layer;
                s.listening(!1);
                var u = new T.Image({
                    x: 0,
                    y: 0,
                    image: a,
                    width: n,
                    height: i
                  }),
                  w = new S.Rect({
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                    fill: "#D2D0C8",
                    opacity: .99,
                    cornerRadius: [0, 0, p(20, o), 0]
                  }),
                  g = new y.Text({
                    x: 0,
                    y: p(40, o),
                    text: d("PRODUCTS.PRODUCTS"),
                    fontSize: p(30, o),
                    fontFamily: "San Francisco, Ubuntu, Arial, sans-serif",
                    fill: "#242236",
                    width: p(400, o),
                    align: "center"
                  });
                s.add(u, w, g), t.add(s);
                var h = e.map((function(e) {
                  return t = e, new Promise((function(e, a) {
                    var n, i = new Image;
                    i.crossOrigin = "Anonymous", i.src = "" + Object(r.g)({
                      shortPath: t.image_path,
                      size: l.d.small,
                      type: l.e.product,
                      fullSizeImage: v.b.FULL_SIZE_IMAGE,
                      productTypeCode: null === (n = null == t ? void 0 : t.product_type) || void 0 === n ? void 0 : n.code
                    }), i.onload = function() {
                      e({
                        image: i,
                        article: t
                      })
                    }, i.onerror = a
                  }));
                  var t
                }));
                Promise.all(h).then((function(e) {
                  e.forEach((function(a, n) {
                    var i = new O.Group({
                        x: p(40, o),
                        y: m,
                        width: p(355, o)
                      }),
                      l = p(90, o),
                      r = a.image.width >= a.image.height,
                      u = a.image.width / a.image.height,
                      g = r ? l : l * u,
                      h = r ? l / u : l,
                      _ = new T.Image({
                        x: 0,
                        image: a.image,
                        width: g,
                        height: h
                      }),
                      f = new y.Text({
                        x: p(120, o),
                        y: 0,
                        text: a.article.brand.name,
                        fontSize: p(20, o),
                        fontFamily: "San Francisco, Ubuntu, Arial, sans-serif",
                        fill: "#242236",
                        width: p(235, o),
                        lineHeight: 1.3,
                        fontStyle: "500"
                      }),
                      v = f.getHeight(),
                      E = new y.Text({
                        x: p(120, o),
                        y: v + p(8, o),
                        text: a.article.collection.name,
                        fontSize: p(20, o),
                        fontFamily: "San Francisco, Ubuntu, Arial, sans-serif",
                        fill: "#242236",
                        width: p(235, o),
                        lineHeight: 1.3,
                        fontStyle: "500"
                      }),
                      b = E.getHeight(),
                      N = new y.Text({
                        x: p(120, o),
                        y: b + v + p(18, o),
                        text: d("ARTICLE_INFO_PANEL.ATTRIBUTES.PRODUCT_ID") + ": " + a.article.sku,
                        fontSize: p(16, o),
                        fontFamily: "San Francisco, Ubuntu, Arial, sans-serif",
                        fill: "rgba(36, 34, 54, 0.8)",
                        width: p(235, o),
                        lineHeight: 1.3
                      });
                    i.add(_, f, E, N), s.add(i), t.add(s);
                    var S = v + b + N.getHeight() + p(40, o);
                    m += S < p(120, o) ? p(120, o) : S, n === e.length - 1 && (w.setSize({
                      width: p(400, o),
                      height: m
                    }), t.draw(), x(t.toDataURL()), "Firefox" !== c.browser.name && (t.setSize({
                      width: 0,
                      height: 0
                    }), t.draw()))
                  }))
                }))
              }
            }))
          }), [t]);
          return o.a.createElement("div", {
            className: "download-item"
          }, o.a.createElement(m.k, {
            fontName: "new_body_text",
            className: "bold download-item__title"
          }, a), h === l.c.MOBILE && "iPhone" === _ && "Chrome" === g ? o.a.createElement("div", {
            className: "download-item__image"
          }, o.a.createElement("div", {
            className: "download-item__image-wr"
          }, o.a.createElement("div", {
            className: "download-item__image-wrapper"
          }, o.a.createElement("div", {
            id: "canvas-container",
            style: {
              visibility: "hidden",
              width: "0px",
              height: "0px"
            }
          }), L && o.a.createElement("img", {
            className: "download-item__preview",
            src: L
          }))), o.a.createElement("div", {
            className: "download-item__message"
          }, o.a.createElement(m.k, {
            fontName: "new_body_small"
          }, "Tap and hold to download"))) : o.a.createElement("div", {
            className: "download-item__image",
            onClick: function() {
              w(!0),
                function(e, t) {
                  void 0 === t && (t = "untitled"), f.c.fireEvent(f.a.downloadResultWithInfo);
                  var a = document.createElement("a");
                  a.href = e, a.download = t, document.body.appendChild(a), setTimeout((function() {
                    a.click(), w(!1)
                  }), 3e3)
                }(L, "result-with-info")
            }
          }, o.a.createElement("div", {
            className: "download-item__image-wr"
          }, o.a.createElement("div", {
            className: "download-item__image-wrapper"
          }, o.a.createElement("div", {
            id: "canvas-container",
            style: {
              visibility: "hidden",
              width: "0px",
              height: "0px"
            }
          }), L && o.a.createElement("img", {
            className: "download-item__preview",
            src: L
          }))), o.a.createElement("div", {
            className: "download-item__icon"
          }, o.a.createElement(s.r, null))))
        })),
        L = a(109),
        x = {
          showProcessingScreen: g.j
        },
        C = Object(n.b)((function(e) {
          return {
            roomSRC: e.rooms.overlayResult.src,
            device: Object(L.b)()
          }
        }), x)(I),
        A = a(47),
        j = Object(d.a)((function(e) {
          var t = e.room,
            a = e.result,
            i = e.onClose,
            d = e.getLocalizationProperty,
            m = Object(n.d)(A.c),
            s = Object(n.d)(A.h);
          return o.a.createElement(c.a, {
            title: d("DOWNLOAD.TITLE"),
            onClose: i
          }, o.a.createElement("div", null, o.a.createElement("div", {
            className: "download-list"
          }, o.a.createElement(_, {
            src: a,
            name: d("DOWNLOAD.RESULT_TITLE"),
            onClick: function() {
              return f.c.fireEvent(f.a.downloadResult)
            }
          }), t.room_type_id === l.g.MyInterior && o.a.createElement(_, {
            src: "" + Object(r.g)({
              shortPath: t.image_path,
              size: l.d.large,
              dl: !0
            }),
            name: d("DOWNLOAD.ORIGINAL_TITLE"),
            onClick: function() {
              return f.c.fireEvent(f.a.downloadOriginal)
            }
          }))))
        }));
      t.default = Object(n.b)((function(e) {
        return {
          room: e.rooms.selectedRoom,
          result: e.rooms.overlayResult.src,
          backButtonAction: e.auxiliaries.backButtonAction
        }
      }))(j)
    }
  }
]);
