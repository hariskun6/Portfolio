(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [399],
  {
    9495: function (A, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/projects/volkihar-knight",
        function () {
          return t(4765);
        },
      ]);
    },
    638: function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var a = t(6856).Z;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function (A, e) {
          var t = r.default,
            i = {
              loading: function (A) {
                A.error, A.isLoading;
                return A.pastDelay, null;
              },
            };
          a(A, Promise)
            ? (i.loader = function () {
                return A;
              })
            : "function" === typeof A
            ? (i.loader = A)
            : "object" === typeof A && (i = n({}, i, A));
          !1;
          (i = n({}, i, e)).loadableGenerated &&
            delete (i = n({}, i, i.loadableGenerated)).loadableGenerated;
          if ("boolean" === typeof i.ssr && !i.suspense) {
            if (!i.ssr) return delete i.ssr, o(t, i);
            delete i.ssr;
          }
          return t(i);
        }),
        (e.noSSR = o);
      var n = t(6495).Z,
        i = t(2648).Z,
        r = (i(t(7294)), i(t(4302)));
      function o(A, e) {
        return delete e.webpack, delete e.modules, A(e);
      }
      ("function" === typeof e.default ||
        ("object" === typeof e.default && null !== e.default)) &&
        "undefined" === typeof e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (A.exports = e.default));
    },
    6319: function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.LoadableContext = void 0);
      var a = (0, t(2648).Z)(t(7294)).default.createContext(null);
      e.LoadableContext = a;
    },
    4302: function (A, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var a = t(9658).Z,
        n = t(7222).Z;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var i = t(6495).Z,
        r = (0, t(2648).Z)(t(7294)),
        o = t(6319),
        s = t(7294).useSyncExternalStore,
        c = [],
        l = [],
        g = !1;
      function d(A) {
        var e = A(),
          t = { loading: !0, loaded: null, error: null };
        return (
          (t.promise = e
            .then(function (A) {
              return (t.loading = !1), (t.loaded = A), A;
            })
            .catch(function (A) {
              throw ((t.loading = !1), (t.error = A), A);
            })),
          t
        );
      }
      var h = (function () {
        function A(e, t) {
          a(this, A),
            (this._loadFn = e),
            (this._opts = t),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
        return (
          n(A, [
            {
              key: "promise",
              value: function () {
                return this._res.promise;
              },
            },
            {
              key: "retry",
              value: function () {
                var A = this;
                this._clearTimeouts(),
                  (this._res = this._loadFn(this._opts.loader)),
                  (this._state = { pastDelay: !1, timedOut: !1 });
                var e = this._res,
                  t = this._opts;
                e.loading &&
                  ("number" === typeof t.delay &&
                    (0 === t.delay
                      ? (this._state.pastDelay = !0)
                      : (this._delay = setTimeout(function () {
                          A._update({ pastDelay: !0 });
                        }, t.delay))),
                  "number" === typeof t.timeout &&
                    (this._timeout = setTimeout(function () {
                      A._update({ timedOut: !0 });
                    }, t.timeout))),
                  this._res.promise
                    .then(function () {
                      A._update({}), A._clearTimeouts();
                    })
                    .catch(function (e) {
                      A._update({}), A._clearTimeouts();
                    }),
                  this._update({});
              },
            },
            {
              key: "_update",
              value: function (A) {
                (this._state = i(
                  {},
                  this._state,
                  {
                    error: this._res.error,
                    loaded: this._res.loaded,
                    loading: this._res.loading,
                  },
                  A
                )),
                  this._callbacks.forEach(function (A) {
                    return A();
                  });
              },
            },
            {
              key: "_clearTimeouts",
              value: function () {
                clearTimeout(this._delay), clearTimeout(this._timeout);
              },
            },
            {
              key: "getCurrentValue",
              value: function () {
                return this._state;
              },
            },
            {
              key: "subscribe",
              value: function (A) {
                var e = this;
                return (
                  this._callbacks.add(A),
                  function () {
                    e._callbacks.delete(A);
                  }
                );
              },
            },
          ]),
          A
        );
      })();
      function u(A) {
        return (function (A, e) {
          var t = function () {
              if (!c) {
                var e = new h(A, n);
                c = {
                  getCurrentValue: e.getCurrentValue.bind(e),
                  subscribe: e.subscribe.bind(e),
                  retry: e.retry.bind(e),
                  promise: e.promise.bind(e),
                };
              }
              return c.promise();
            },
            a = function () {
              t();
              var A = r.default.useContext(o.LoadableContext);
              A &&
                Array.isArray(n.modules) &&
                n.modules.forEach(function (e) {
                  A(e);
                });
            },
            n = Object.assign(
              {
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                webpack: null,
                modules: null,
                suspense: !1,
              },
              e
            );
          n.suspense && (n.lazy = r.default.lazy(n.loader));
          var c = null;
          if (!g) {
            var d = n.webpack ? n.webpack() : n.modules;
            d &&
              l.push(function (A) {
                var e = !0,
                  a = !1,
                  n = void 0;
                try {
                  for (
                    var i, r = d[Symbol.iterator]();
                    !(e = (i = r.next()).done);
                    e = !0
                  ) {
                    var o = i.value;
                    if (-1 !== A.indexOf(o)) return t();
                  }
                } catch (s) {
                  (a = !0), (n = s);
                } finally {
                  try {
                    e || null == r.return || r.return();
                  } finally {
                    if (a) throw n;
                  }
                }
              });
          }
          var u = n.suspense
            ? function (A, e) {
                return (
                  a(), r.default.createElement(n.lazy, i({}, A, { ref: e }))
                );
              }
            : function (A, e) {
                a();
                var t = s(c.subscribe, c.getCurrentValue, c.getCurrentValue);
                return (
                  r.default.useImperativeHandle(
                    e,
                    function () {
                      return { retry: c.retry };
                    },
                    []
                  ),
                  r.default.useMemo(
                    function () {
                      return t.loading || t.error
                        ? r.default.createElement(n.loading, {
                            isLoading: t.loading,
                            pastDelay: t.pastDelay,
                            timedOut: t.timedOut,
                            error: t.error,
                            retry: c.retry,
                          })
                        : t.loaded
                        ? r.default.createElement(
                            (e = t.loaded) && e.__esModule ? e.default : e,
                            A
                          )
                        : null;
                      var e;
                    },
                    [A, t]
                  )
                );
              };
          return (
            (u.preload = function () {
              return t();
            }),
            (u.displayName = "LoadableComponent"),
            r.default.forwardRef(u)
          );
        })(d, A);
      }
      function E(A, e) {
        for (var t = []; A.length; ) {
          var a = A.pop();
          t.push(a(e));
        }
        return Promise.all(t).then(function () {
          if (A.length) return E(A, e);
        });
      }
      (u.preloadAll = function () {
        return new Promise(function (A, e) {
          E(c).then(A, e);
        });
      }),
        (u.preloadReady = function () {
          var A =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return new Promise(function (e) {
            var t = function () {
              return (g = !0), e();
            };
            E(l, A).then(t, t);
          });
        }),
        (window.__NEXT_PRELOADREADY = u.preloadReady);
      var Q = u;
      e.default = Q;
    },
    2045: function (A, e, t) {
      "use strict";
      t.d(e, {
        FV: function () {
          return x;
        },
        XR: function () {
          return m;
        },
        T4: function () {
          return w;
        },
        KZ: function () {
          return f;
        },
        II: function () {
          return I;
        },
        nU: function () {
          return b;
        },
        IG: function () {
          return p;
        },
        d: function () {
          return v;
        },
        Hr: function () {
          return j;
        },
        ee: function () {
          return D;
        },
      });
      var a = t(1799),
        n = t(9396),
        i = t(9534),
        r = t(5893),
        o = t(8526),
        s = t(2221),
        c = t(1424),
        l = t(6602),
        g = t(7346),
        d = t(3994),
        h = t(7260),
        u = t(4529),
        E = t(7294),
        Q = t(2362),
        C = t(5903),
        B = t.n(C);
      function w(A) {
        var e = A.title,
          t = A.description,
          a = A.linkLabel,
          n = void 0 === a ? "Visit website" : a,
          i = A.url,
          c = A.roles,
          d = A.className;
        return (0, r.jsx)(l.$, {
          className: (0, Q.Sh)(B().header, d),
          as: "section",
          children: (0, r.jsxs)("div", {
            className: B().headerContent,
            style: (0, Q.Fh)({ initDelay: (0, Q.aU)(300) }),
            children: [
              (0, r.jsxs)("div", {
                className: B().details,
                children: [
                  (0, r.jsx)(s.X, {
                    className: B().title,
                    level: 2,
                    as: "h1",
                    children: e,
                  }),
                  (0, r.jsx)(g.x, {
                    className: B().description,
                    size: "xl",
                    as: "p",
                    children: t,
                  }),
                  !!i &&
                    (0, r.jsx)(o.z, {
                      secondary: !0,
                      iconHoverShift: !0,
                      className: B().linkButton,
                      icon: "chevronRight",
                      href: i,
                      children: n,
                    }),
                ],
              }),
              !!(null === c || void 0 === c ? void 0 : c.length) &&
                (0, r.jsx)("ul", {
                  className: B().meta,
                  children:
                    null === c || void 0 === c
                      ? void 0
                      : c.map(function (A, e) {
                          return (0,
                          r.jsx)("li", { className: B().metaItem, style: (0, Q.Fh)({ delay: (0, Q.aU)(600 + 140 * e) }), children: (0, r.jsx)(g.x, { secondary: !0, children: A }) }, A);
                        }),
                }),
            ],
          }),
        });
      }
      var m = function (A) {
          var e = A.className,
            t = (0, i.Z)(A, ["className"]);
          return (0, r.jsx)(
            "article",
            (0, a.Z)({ className: (0, Q.Sh)(B().project, e) }, t)
          );
        },
        I = (0, E.forwardRef)(function (A, e) {
          var t = A.className,
            o = A.light,
            s = A.padding,
            c = void 0 === s ? "both" : s,
            g = A.fullHeight,
            d = A.backgroundOverlayOpacity,
            h = void 0 === d ? 0.9 : d,
            u = A.backgroundElement,
            E = A.children,
            C = (0, i.Z)(A, [
              "className",
              "light",
              "padding",
              "fullHeight",
              "backgroundOverlayOpacity",
              "backgroundElement",
              "children",
            ]);
          return (0,
          r.jsxs)("section", (0, n.Z)((0, a.Z)({ className: (0, Q.Sh)(B().section, t), "data-light": o, "data-full-height": g, ref: e }, C), { children: [!!u && (0, r.jsx)("div", { className: B().sectionBackground, style: (0, Q.Fh)({ opacity: h }), children: u }), (0, r.jsx)(l.$, { className: B().sectionInner, "data-padding": c, children: E })] }));
        }),
        x = function (A) {
          var e = A.opacity,
            t = void 0 === e ? 0.7 : e,
            n = A.className,
            o = (0, i.Z)(A, ["opacity", "className"]),
            s = (0, E.useRef)();
          return (
            (0, u.YT)(0.6, function (A) {
              s.current &&
                s.current.style.setProperty("--offset", "".concat(A, "px"));
            }),
            (0, r.jsx)(h.u, {
              in: !0,
              timeout: (0, Q.zG)(d.T.base.durationM),
              children: function (A) {
                return (0, r.jsxs)("div", {
                  className: (0, Q.Sh)(B().backgroundImage, n),
                  "data-visible": A,
                  children: [
                    (0, r.jsx)("div", {
                      className: B().backgroundImageElement,
                      ref: s,
                      children: (0, r.jsx)(
                        c.E,
                        (0, a.Z)({ alt: "", role: "presentation" }, o)
                      ),
                    }),
                    (0, r.jsx)("div", {
                      className: B().backgroundScrim,
                      style: (0, Q.Fh)({ opacity: t }),
                    }),
                  ],
                });
              },
            })
          );
        },
        f = function (A) {
          var e = A.className,
            t = A.alt,
            n = (0, i.Z)(A, ["className", "alt"]);
          return (0, r.jsx)("div", {
            className: (0, Q.Sh)(B().image, e),
            children: (0, r.jsx)(
              c.E,
              (0, a.Z)({ reveal: !0, alt: t, delay: 300 }, n)
            ),
          });
        },
        p = function (A) {
          var e = A.className,
            t = A.width,
            n = void 0 === t ? "l" : t,
            o = (0, i.Z)(A, ["className", "width"]);
          return (0, r.jsx)(
            "div",
            (0, a.Z)(
              { className: (0, Q.Sh)(B().sectionContent, e), "data-width": n },
              o
            )
          );
        },
        v = function (A) {
          var e = A.className,
            t = A.level,
            n = void 0 === t ? 3 : t,
            o = A.as,
            c = void 0 === o ? "h2" : o,
            l = (0, i.Z)(A, ["className", "level", "as"]);
          return (0, r.jsx)(
            s.X,
            (0, a.Z)(
              {
                className: (0, Q.Sh)(B().sectionHeading, e),
                as: c,
                level: n,
                align: "auto",
              },
              l
            )
          );
        },
        j = function (A) {
          var e = A.className,
            t = (0, i.Z)(A, ["className"]);
          return (0, r.jsx)(
            g.x,
            (0, a.Z)(
              { className: (0, Q.Sh)(B().sectionText, e), size: "l", as: "p" },
              t
            )
          );
        },
        D = function (A) {
          var e = A.center,
            t = A.stretch,
            n = A.justify,
            o = void 0 === n ? "center" : n,
            s = A.width,
            c = void 0 === s ? "m" : s,
            l = A.noMargin,
            g = A.className,
            d = A.centerMobile,
            h = (0, i.Z)(A, [
              "center",
              "stretch",
              "justify",
              "width",
              "noMargin",
              "className",
              "centerMobile",
            ]);
          return (0, r.jsx)(
            "div",
            (0, a.Z)(
              {
                className: (0, Q.Sh)(B().textRow, g),
                "data-center": e,
                "data-stretch": t,
                "data-center-mobile": d,
                "data-no-margin": l,
                "data-width": c,
                "data-justify": o,
              },
              h
            )
          );
        },
        b = function (A) {
          var e = A.className,
            t = A.centered,
            n = (0, i.Z)(A, ["className", "centered"]);
          return (0, r.jsx)(
            p,
            (0, a.Z)(
              {
                className: (0, Q.Sh)(B().sectionColumns, e),
                "data-centered": t,
              },
              n
            )
          );
        };
    },
    4765: function (A, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          default: function () {
            return J;
          },
        });
      var a,
        n = t(5893),
        i = {
          src: "/_next/static/media/volkihar-background-large.30c779ff.jpg",
          height: 1080,
          width: 1920,
          blurDataURL:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAmYYv/8QAGhAAAgIDAAAAAAAAAAAAAAAAAQIDEQAEBf/aAAgBAQABPwDnSOa1WYmKU0Rn/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQACIf/aAAgBAgEBPwCgJs//xAAWEQADAAAAAAAAAAAAAAAAAAAAAQL/2gAIAQMBAT8Apn//2Q==",
        },
        r = {
          src: "/_next/static/media/volkihar-background-placeholder.642594b4.jpg",
          height: 18,
          width: 32,
          blurDataURL:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAmIY//8QAGxAAAgEFAAAAAAAAAAAAAAAAAQIDAAQFETH/2gAIAQEAAT8Ax8jtq2ZiY5Oiv//EABYRAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAgBAgEBPwDAJf/EABcRAAMBAAAAAAAAAAAAAAAAAAABAiH/2gAIAQMBAT8Ap6f/2Q==",
        },
        o = {
          src: "/_next/static/media/volkihar-background.a5c1feb4.jpg",
          height: 720,
          width: 1280,
          blurDataURL:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAmYYv/8QAGhAAAgIDAAAAAAAAAAAAAAAAAQIDEQAEBf/aAAgBAQABPwDnSOa1WYmKU0Rn/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQACIf/aAAgBAgEBPwCgJs//xAAWEQADAAAAAAAAAAAAAAAAAAAAAQL/2gAIAQMBAT8Apn//2Q==",
        },
        s = {
          src: "/_next/static/media/volkihar-banner-large.660b04f7.jpg",
          height: 600,
          width: 1100,
          blurDataURL:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAkgT/xAAdEAABAwUBAAAAAAAAAAAAAAACARESAAMTIlEx/9oACAEBAAE/AFvKQY1APZSbbjPyv//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",
        },
        c = {
          src: "/_next/static/media/volkihar-banner-placeholder.740a91b3.jpg",
          height: 6,
          width: 11,
          blurDataURL:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAJUGf//EABcQAAMBAAAAAAAAAAAAAAAAAAABIQL/2gAIAQEAAT8AdxUj/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",
        },
        l = {
          src: "/_next/static/media/volkihar-banner.97f73d16.jpg",
          height: 436,
          width: 800,
          blurDataURL:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAkgT/xAAcEAABBAMBAAAAAAAAAAAAAAACARESUQADIjH/2gAIAQEAAT8AXcpBBQD2Um6pnrP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",
        },
        g = {
          src: "/_next/static/media/volkihar-book-large.a0bd205b.png",
          height: 600,
          width: 960,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAo0lEQVR42g3MvRGCMBQA4Bd4JAiCnoiFlUto6QpuYOM5jTu4guu4gAVyBydJID+QSP/dR56P+63YllfnbC55u85WZSV5FwHYbBrNCxdJdqGUnVWvAZECY8nhW9VA0YE15oTW2kTJDlQvDDIWaCWJ4MLHjKB3Y4yTc/s0zyBdJlSIHxDiYbdJIcQAjCMFNk3bRKF/z9MHJjWQcDgapcMZ0rrh+g9ip05qsmNwyQAAAABJRU5ErkJggg==",
        },
        d = {
          src: "/_next/static/media/volkihar-book-placeholder.8f07a611.png",
          height: 20,
          width: 32,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAnUlEQVR42h3M2w2CMBgG0A/6c79EEt98M07gBEzgLm7lEL47gisYIUgLpS1txcQzwAke99tVy661elKzGIKs2GHiHIBhh+O5p2XqWyW6yyJHeG+RZQXEp8fXS1TNe6TVSGnUBKe1oTQO7arB+bzBL7FdlSBvTZ6XJaq6SOaZ/5d9kwOIwFhYEouSZwg6gZGkNAoXMaCo6s05S0q71w+mHFM3tG0awQAAAABJRU5ErkJggg==",
        },
        h = {
          src: "/_next/static/media/volkihar-book.f802d435.png",
          height: 300,
          width: 480,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAoklEQVR42g3LOxKCMBAA0I0sQRCIn9HGxkM4tl7BE1jYehrvYO9xPIEz0jBMQj6QZNHXP/Z83G+1WF6JfN3LdlWJbaOVTAF8Ff34wnleXlLkZ2scIHLIsuLQfBvgOAHFcJoRUW6NBKfVmCQYBqejkjpobSESZBiJ9kKUUFYL3qsOGJtgty4gQQYszTdo7NCmyN4xxo+RnYPEHmGaYfD0D3r8ATcSUF4rCSoYAAAAAElFTkSuQmCC",
        },
        u = {
          src: "/_next/static/media/volkihar-enderal-large.d5fb3faf.jpg",
          height: 1080,
          width: 1920,
          blurDataURL:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAJ6Df//EAB0QAAMAAAcAAAAAAAAAAAAAAAECAwAEBSEiMVH/2gAIAQEAAT8AtnXvpyRoiMooSrEc126B8x//xAAYEQACAwAAAAAAAAAAAAAAAAAAARExUf/aAAgBAgEBPwCEq0//xAAYEQACAwAAAAAAAAAAAAAAAAABEQACUf/aAAgBAwEBPwCxJTyf/9k=",
        },
        E = {
          src: "/_next/static/media/volkihar-enderal-logo-large.a48b2c89.png",
          height: 400,
          width: 360,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAyklEQVR42mOAAtbSeG/bgnAntyw/izwGIDg8q4SRQZKBQaQ43ndWipfpwXgXnZ0O+soHlSUEPRhAwNfBpE+BgWHfmR0LNj26sO2/rw7DEgYWno0uphqKDHqqsjMYGBhi24vi/s9qyflvIs/7mJFbwNlQRcqbAQg4vFxs+RkYGF4C8X95SdFtDOjAWF12gZG63H8FMQEdEF9HQYKFwVBZihXE0VeSLNZTknzHwMAA5suICjAyiAvyMUI4guJSwnwTGBgYuEB8Hg52RgCDDywnQZgSsAAAAABJRU5ErkJggg==",
        },
        Q = {
          src: "/_next/static/media/volkihar-enderal-logo-placeholder.9bdfe9da.png",
          height: 20,
          width: 18,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA2klEQVR42g3Jy0rDQBQA0Dt3bhJFi2jEFOpOULtUXLjy690JBV1koRBMSUtpSx5NJpnpvJqzPezj5XmSXF/ecwazbpA3h1ZQ26lF0bYZWaOfOMf3JIkfY+sm2f+q3FZCnGFQkxjUm9J6Pr27nYdRGO/LJuuG5ToIw4IOvYSy7sq82FxwzmdN060ZYmWtM9TL4+dqVz/sqp9XZGxqnMu8gwVDn1MU8D8pj0YT/o4ZGOu+iCC/illD3oNCjvsxUsYYIGIWhSS+062n8yiAkZBKpx68dc6X0vQOAOAEPfJ2FoDqLHgAAAAASUVORK5CYII=",
        },
        C = {
          src: "/_next/static/media/volkihar-enderal-logo.d780cfaa.png",
          height: 200,
          width: 180,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAzElEQVR42mOAAtayBB+b4ggnt2x/yzwGIDgyu4SRQZaBQaQ00W9WqrfpgQQXnR2O+soHVCSEPBhAwM/RtFeFgWHv6e0LNj26sP2/ny7DYgZm7g0uphoKDLoqMtMZGBhi2ovi/s9qyf1vIsf7mIGL38lAWdKbAQg4vFzt+BkYGF4C8X95SdGtDOjAWF12vpG63H8FMX5tEF9HQZyFwUhZihXEMVCSKNJTknzLwMAA5ksJ8zMyiAnyMoI40qKC4lLCfP0MDAxcID4PBxsjAI7KLCV+pgOmAAAAAElFTkSuQmCC",
        },
        B = {
          src: "/_next/static/media/volkihar-enderal-placeholder.913b13aa.jpg",
          height: 45,
          width: 80,
          blurDataURL:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAJwDb//EABwQAQACAQUAAAAAAAAAAAAAAAIBAwQAESExMv/aAAgBAQABPwC7Md2EabAVEPcqfR46jX//xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQIBAT8AwL//xAAYEQACAwAAAAAAAAAAAAAAAAABEQACUf/aAAgBAwEBPwCxJTyf/9k=",
        },
        w = {
          src: "/_next/static/media/volkihar-enderal.75967666.jpg",
          height: 720,
          width: 1280,
          blurDataURL:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAJ6Df//EAB0QAAMAAAcAAAAAAAAAAAAAAAECAwAEBSEiMVH/2gAIAQEAAT8AtnXvpyRoiMooSrEc126B8x//xAAYEQACAwAAAAAAAAAAAAAAAAAAARExUf/aAAgBAgEBPwCEq0//xAAYEQACAwAAAAAAAAAAAAAAAAABEQACUf/aAAgBAwEBPwCxJTyf/9k=",
        },
        m = t(7294);
      function I() {
        return (
          (I = Object.assign
            ? Object.assign.bind()
            : function (A) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var a in t)
                    Object.prototype.hasOwnProperty.call(t, a) && (A[a] = t[a]);
                }
                return A;
              }),
          I.apply(this, arguments)
        );
      }
      var x = (A) =>
          m.createElement(
            "svg",
            I({ width: 532, height: 344, viewBox: "0 0 532 344" }, A),
            a ||
              (a = m.createElement(
                "g",
                { fill: "none", fillRule: "evenodd" },
                m.createElement("path", {
                  d: "M294.971 81.133c22.724 29.428 35.373 45.546 37.95 48.354 5.486 5.982 8.123 9.267 19.709 16.895 6.486 4.394 14.942 7.61 25.37 9.651V159h-54.38L261 77.977V159C191.123 68.072 153.683 20.04 148.683 14.903c-5-5.136-12.56-8.026-22.683-8.668V0l69.584.14V6c-4.38 0-7.994.587-10.845 1.762-4.275 1.761-4.42 5.768-3.412 7.141 1.4 2.138 23.229 30.34 65.487 84.609v-70.08c0-11.449-6.327-16.432-11.333-20.102-3.337-2.447-9.281-3.557-17.832-3.33V.14H289V6c-5.556-.235-13.818.235-19.896 3.33-4.052 2.063-6.753 6.857-8.103 14.382v13.29a24524.908 24524.908 0 0 0 25.533 33.194c23.526-29.352 36.705-45.71 39.538-49.074 4.481-5.32 2.935-11.023-1.577-13.119-3.007-1.397-7.648-2.178-13.922-2.342V0H373v5.661c-7.55 0-13.964 1.666-18.393 3.891-2.954 1.483-6.835 4.828-11.644 10.035l-47.992 61.546z",
                  fill: "currentColor",
                }),
                m.createElement("path", {
                  d: "M18.3 254.75L6.05 224.1c-1.1-2.8-1.85-3.35-3.6-3.85-.75-.2-1.6-.2-1.9-.2-.3 0-.4-.15-.4-.35 0-.3.5-.35 1.3-.35 2.4 0 5.1.15 5.7.15.5 0 2.65-.15 4.55-.15.9 0 1.35.1 1.35.35 0 .25-.15.35-.5.35-.55 0-1.45.05-1.9.25-.55.25-.65.65-.65 1 0 .45.45 1.8 1 3.2l10.2 26.55c2.9-6.7 9.6-24.15 10.7-27.75.25-.75.45-1.45.45-1.9 0-.4-.15-.9-.65-1.15-.6-.2-1.35-.2-1.9-.2-.3 0-.55-.05-.55-.3 0-.3.3-.4 1.1-.4 2 0 4.3.15 4.9.15.3 0 2.45-.15 3.9-.15.55 0 .85.1.85.35 0 .25-.2.35-.6.35-.35 0-1.45 0-2.4.6-.65.45-1.4 1.3-2.75 4.7-.55 1.4-3.05 7.4-5.6 13.55-3.05 7.3-5.3 12.7-6.45 15.15-1.4 3-1.6 3.8-2.1 3.8-.6 0-.85-.7-1.8-3.1zM61 257.7c-12.25 0-17.25-9.1-17.25-16.7 0-6.65 5.15-16.6 17.5-16.6 9.9 0 17.45 5.9 17.45 15.95 0 9.55-7.05 17.35-17.7 17.35zm1.25-1.7C65.6 256 74 254.3 74 241.6c0-10.05-6.2-15.65-13.05-15.65-6.95 0-12.55 4.3-12.55 13.75 0 9.8 5.45 16.3 13.85 16.3zm33.6-18.7v7.6c0 5.75.2 8.65 1.05 9.45.8.7 1.8 1 5.25 1 2.2 0 4.2 0 5.3-1.4.5-.75.85-1.75.95-2.5.05-.4.15-.6.4-.6.2 0 .3.15.3.65s-.3 3.35-.6 4.5c-.3 1-.25 1.25-2.65 1.25-3.4 0-7.15-.25-12.15-.25-1.65 0-2.65.15-4.4.15-.5 0-.8-.1-.8-.4 0-.15.15-.3.55-.3s.8 0 1.2-.1c.85-.15 1.15-1.15 1.3-2.35.3-1.9.2-5.35.2-9.2v-7.5c0-6.6 0-7.7-.1-9.05-.1-1.4-.3-2.3-2-2.5-.3-.05-.85-.05-1.25-.05-.35 0-.55-.15-.55-.35 0-.25.25-.35.75-.35 2.1 0 5.1.15 5.2.15.7 0 3.75-.15 5.15-.15.5 0 .65.15.65.35 0 .2-.25.35-.55.35-.35 0-.85.05-1.35.1-1.4.2-1.7 1-1.8 2.45-.1 1.35-.05 2.45-.05 9.05zm29.2 0v2.35c2.3-2.05 7.75-7.25 10-9.7 2.4-2.65 2.6-2.9 2.6-3.45 0-.35-.2-.6-.8-.8-.35-.1-.55-.2-.55-.4 0-.15.1-.3.5-.3.3 0 1.8.15 3.4.15 1.5 0 4.25-.15 4.9-.15.7 0 .8.1.8.3 0 .2-.15.35-.55.4-.8.05-1.85.25-2.45.5-1.2.4-1.85.95-4.45 3.3-3.65 3.3-8 7.55-10.2 9.55 2.7 2.8 10.8 10.8 12.9 12.7 3.5 3.2 5.2 4.1 7.2 4.55.55.1.3.05 1.15.15.45.05.7.15.7.4 0 .2-.25.3-.8.3h-3.25c-3.9 0-4.9-.45-6.9-1.85-2.25-1.6-10.25-9.8-14.2-14.45v3.95c0 3.85-.05 7.35.2 9.15.2 1.45.4 2 1.7 2.3.65.15 1.7.2 1.9.2.45.05.55.15.55.35 0 .2-.2.35-.7.35-2.55 0-5.45-.15-5.7-.15-.15 0-3.1.15-4.5.15-.45 0-.8-.1-.8-.35 0-.2.2-.35.65-.35.25 0 .8-.05 1.2-.15.85-.2 1-1.2 1.15-2.4.25-1.8.25-5.35.25-9.1v-7.5c0-6.6 0-7.8-.1-9.15-.1-1.35-.4-2.1-1.45-2.3-.5-.1-.85-.1-1.15-.15-.35-.05-.55-.15-.55-.35 0-.25.2-.35.75-.35 1.55 0 4.4.15 4.55.15.2 0 3.1-.15 4.5-.15.5 0 .75.1.75.35 0 .2-.15.3-.55.35-.3.05-.55.05-.9.1-1.45.2-1.6.95-1.7 2.4-.1 1.35-.05 2.5-.05 9.1zm33.3 7.5v-7.5c0-6.6 0-7.8-.1-9.15-.1-1.35-.4-2.1-1.45-2.3-.5-.1-.85-.1-1.15-.15-.35-.05-.55-.15-.55-.35 0-.25.2-.35.75-.35 1.55 0 4.4.15 4.55.15.2 0 3.1-.15 4.5-.15.5 0 .75.1.75.35 0 .2-.15.3-.55.35-.3.05-.55.05-.9.1-1.45.2-1.6.95-1.7 2.4-.1 1.35-.05 2.5-.05 9.1v7.5c0 3.85-.05 7.35.2 9.15.2 1.45.4 2 1.7 2.3.65.15 1.7.2 1.9.2.45.05.55.15.55.35 0 .2-.2.35-.7.35-2.55 0-5.45-.15-5.7-.15-.15 0-3.1.15-4.5.15-.45 0-.8-.1-.8-.35 0-.2.2-.35.65-.35.25 0 .8-.05 1.2-.15.85-.2 1-1.2 1.15-2.4.25-1.8.25-5.35.25-9.1zm27-6.4h18.1c.15 0 .3 0 .3-.25v-.9c0-6.6 0-7.75-.1-9.1-.1-1.35-.3-2.05-1.95-2.35-.35-.05-.85-.1-1.25-.1-.35 0-.6-.15-.6-.35 0-.3.25-.35.7-.35 2.1 0 5.05.15 5.25.15.2 0 3-.15 4.5-.15.5 0 .8.05.8.35 0 .15-.15.35-.55.35-.3 0-.7.05-1 .1-1.35.2-1.55 1-1.65 2.4-.05 1.35-.05 2.5-.05 9.1v7.5c0 4.1 0 7.35.2 9.15.15 1.2.4 2.2 1.7 2.35.65.1 1.3.15 1.75.15.4 0 .65.15.65.35 0 .25-.25.35-.75.35-2.5 0-5.4-.15-5.65-.15-.2 0-3.1.15-4.45.15-.5 0-.75-.1-.75-.4 0-.15.15-.3.55-.3s.75 0 1.15-.1c.85-.15 1.1-1.25 1.25-2.4.25-1.8.25-4.95.25-9v-4.45c0-.2-.15-.3-.3-.3H185.3c-.15 0-.25.05-.25.3v4.45c0 4.05 0 7.3.25 9.1.15 1.1.4 2.1 1.7 2.25.65.1 1.4.15 1.8.15.35 0 .6.15.6.35 0 .2-.2.35-.65.35-2.55 0-5.5-.15-5.75-.15-.15 0-3.2.15-4.5.15-.5 0-.8-.1-.8-.35 0-.15.1-.35.55-.35.4 0 .8-.05 1.2-.15.9-.2 1.1-1.15 1.25-2.25.3-1.8.25-5.15.25-9.25v-7.4c0-6.6 0-7.9-.1-9.25-.1-1.3-.45-2.25-1.9-2.4-.45-.05-.95-.1-1.35-.1-.35 0-.55-.15-.55-.3 0-.3.25-.35.75-.35 2.15 0 4.55.15 5.2.15.2 0 3.1-.15 4.5-.15.5 0 .75.1.75.35 0 .2-.2.3-.5.3s-.45 0-1 .1c-1.25.2-1.55 1.05-1.65 2.45-.05 1.35-.05 2.45-.05 9.05v.9c0 .25.15.25.3.25zm52.2 6.55h-9.1c-.25 0-.4.15-.5.4l-2.2 6.25c-.5 1.4-.85 2.75-.85 3.55 0 .9.55 1.3 1.65 1.3h.35c.45 0 .6.15.6.35 0 .25-.4.35-.75.35-1.1 0-3.4-.15-3.95-.15-.5 0-2.7.15-4.8.15-.55 0-.8-.1-.8-.35 0-.2.2-.35.6-.35.25 0 .7 0 1-.05 2.15-.2 3-1.85 3.85-3.95l10-26.35c.55-1.45.7-1.7 1.05-1.7.25 0 .45.2 1 1.6.7 1.65 7.5 19.1 10.15 25.35 1.65 3.95 3.1 4.6 3.8 4.85.65.25 1.35.25 1.7.25.35 0 .6.1.6.35 0 .25-.2.35-.75.35-.5 0-4.25 0-7.6-.1-.95-.05-1.25-.1-1.25-.35 0-.15.15-.3.35-.35.2-.1.5-.35.2-1.1l-3.95-10.05c-.1-.15-.2-.25-.4-.25zm-8.6-1.75h8c.2 0 .2-.15.15-.3l-3.95-11.05c-.25-.7-.3-.7-.55 0l-3.75 11.05c-.1.2 0 .3.1.3zm31.15 1.6v-7.5c0-6.6 0-7.8-.1-9.15-.1-1.35-.45-2.1-2-2.4-.3-.05-.8-.1-1.2-.1-.35 0-.55-.1-.55-.3 0-.2.15-.35.6-.35 2.15 0 5.2.15 5.3.15.45 0 3.85-.15 5.25-.15 2.8 0 5.85.25 8.2 1.9.95.7 3 2.7 3 6.1 0 2.75-1.35 6.25-5.3 9.45 3.65 4.5 6.65 8.2 9.2 10.85 2.4 2.45 3.9 2.85 5.3 3.05.35.05 1.4.1 1.55.1.4 0 .55.15.55.35 0 .25-.2.35-.9.35h-3.5c-2.35 0-3.45-.15-4.55-.6-2.1-.9-3.6-3.15-6.2-6.5-1.95-2.4-3.95-5.1-4.8-6.15-.2-.2-.3-.3-.6-.3l-5.15-.05c-.2 0-.25.05-.25.25v.7c0 4 0 7.65.25 9.45.15 1.2.3 2.2 1.95 2.4.5.05 1.05.1 1.45.1.45 0 .65.15.65.3 0 .25-.2.4-.7.4-2.6 0-5.4-.15-5.6-.15-.8 0-3 .15-4.35.15-.5 0-.7-.1-.7-.4 0-.15.3-.3.6-.3.35 0 .7 0 1.1-.1.85-.15 1.15-.7 1.3-1.9.25-1.8.2-5.9.2-9.65zm3.85-17.55v13.6c0 .25.05.5.25.6.65.35 2.65.65 4.45.65 1.05 0 2.3-.05 3.35-.75 1.5-.95 2.5-3.15 2.5-6.35 0-5.45-2.9-8.45-7.35-8.45-1.25 0-2.3.1-2.9.25-.15.05-.3.2-.3.45zm56.85 6.6v3.2c1.55-1.5 8.35-8.65 11.4-11.8 3-3.1 3.2-3.6 3.2-4.2 0-.4-.25-.8-.65-.95-.35-.15-.45-.25-.45-.45s.3-.3.75-.3c1.45 0 1.3.15 3 .15 1.55 0 4.5-.15 5.3-.15.7 0 .85.15.85.35 0 .2-.1.3-.55.35-.95.1-1.85.3-2.55.6-1.25.5-2.2 1.1-5.2 4-4.4 4.25-10.1 9.9-11.4 11.35 3.15 3.45 12.25 12.7 14.6 14.9 4.1 3.85 5.85 4.95 8.25 5.4.45.1.95.15 1.45.15.4 0 .7.1.7.35 0 .25-.2.35-.75.35h-3.7c-4.35 0-5.5-.55-7.85-2.4-3-2.35-12-12-16.4-17.25v5.15c0 4.8 0 8.75.25 10.85.15 1.45.45 2.55 1.95 2.75.7.1 1.7.2 2 .2.45 0 .6.2.6.35 0 .25-.2.35-.75.35-2.75 0-5.9-.15-6.15-.15s-3.2.15-4.7.15c-.55 0-.8-.05-.8-.35 0-.15.1-.35.55-.35.3 0 .85-.05 1.3-.15 1-.2 1.3-1.35 1.5-2.8.25-2.1.25-6.05.25-10.85v-8.8c0-7.8 0-9.2-.1-10.8-.1-1.7-.6-2.55-1.7-2.8-.55-.15-1.45-.2-1.8-.2-.4 0-.55-.1-.55-.3 0-.3.25-.4.8-.4 1.65 0 5 .15 5.25.15s3.4-.15 4.9-.15c.55 0 .8.1.8.35 0 .2-.1.3-.55.35-.55.05-.6.05-1.1.1-1.35.15-1.75 1.15-1.85 2.9-.1 1.6-.1 3-.1 10.8zm34.15 17.05c0-23.85.05-16.15 0-24.45 0-1.55.15-2.05.55-2.05.35 0 1.2 1 1.55 1.35.45.5 7.4 7.6 14.4 14.75 3.9 3.8 8.9 8.95 10.2 10.15l-.55-20.8c-.05-2.7-.35-3.6-1.7-3.95-.85-.15-1.6-.2-1.95-.2-.5 0-.6-.2-.6-.4 0-.25.4-.3.9-.3 2.15 0 4.25.15 4.7.15.5 0 2.05-.15 4-.15.55 0 .7.05.7.3 0 .2-.15.35-.45.4-.3.05-.7.05-1.25.15-1.15.25-1.5.75-1.5 3.75l-.1 25.1c0 2.5-.1 2.75-.45 2.75s-.85-.35-3.3-2.65c-.2-.1-7.15-7-11.5-11.25-5.2-5.4-10.2-10.6-11.45-11.9l.65 19.55c.1 3.45.4 4.75 1.65 5.05.8.2 1.65.2 2.05.2.4 0 .6.15.6.35 0 .25-.25.35-.8.35-2.7 0-4.5-.15-4.85-.15-.35 0-2.2.15-4.35.15-.45 0-.75-.05-.75-.35 0-.2.2-.35.7-.35.35 0 .9 0 1.55-.2 1.1-.35 1.35-1.7 1.35-5.35zm46.3-6.1v-7.5c0-6.6 0-7.8-.1-9.15-.1-1.35-.4-2.1-1.45-2.3-.5-.1-.85-.1-1.15-.15-.35-.05-.55-.15-.55-.35 0-.25.2-.35.75-.35 1.55 0 4.4.15 4.55.15.2 0 3.1-.15 4.5-.15.5 0 .75.1.75.35 0 .2-.15.3-.55.35-.3.05-.55.05-.9.1-1.45.2-1.6.95-1.7 2.4-.1 1.35-.05 2.5-.05 9.1v7.5c0 3.85-.05 7.35.2 9.15.2 1.45.4 2 1.7 2.3.65.15 1.7.2 1.9.2.45.05.55.15.55.35 0 .2-.2.35-.7.35-2.55 0-5.45-.15-5.7-.15-.15 0-3.1.15-4.5.15-.45 0-.8-.1-.8-.35 0-.2.2-.35.65-.35.25 0 .8-.05 1.2-.15.85-.2 1-1.2 1.15-2.4.25-1.8.25-5.35.25-9.1zm46.95 4.15v4.5c0 2-.05 2.05-.6 2.35-2.75 1.4-6.75 1.9-9.2 1.9-3.25 0-9.55-.25-14.65-4.5-2.7-2.25-5.4-6.45-5.4-12.15 0-6.8 3.45-11.65 7.55-14.1 3.85-2.25 8.1-2.55 11.15-2.55 3.2 0 5.35.4 7.15.7.8.15 2.75.4 3.8.45.4 0 .4.2.4.4 0 .6-.35 2.1-.35 6.5 0 .7-.05.9-.4.9-.25 0-.3-.3-.35-.6 0-.45-.2-2-.95-3.1-1.15-1.65-4.75-3.5-10.35-3.5-2.7 0-5.85.1-9.2 2.65-2.55 1.95-4.2 5.75-4.2 10.7 0 5.95 3.25 10.35 4.55 11.6 3.3 3.2 7 4.65 11.35 4.65 1.4 0 3.6-.25 4.75-.85.5-.3.85-.8.85-1.5v-7.2c0-3.3-.25-3.95-2-4.2-.3-.05-.8-.1-1.2-.1-.4 0-.6-.2-.6-.35 0-.25.2-.35.75-.35 2 0 4.9.1 5.1.1.2 0 3.15-.1 4.5-.1.5 0 .7.1.7.35 0 .15-.15.35-.6.35-.35 0-.45 0-.85.05-1.2.15-1.5 1.05-1.6 2.5-.1 1.45-.1 2.7-.1 4.5zm20.6-10.55h18.1c.15 0 .3 0 .3-.25v-.9c0-6.6 0-7.75-.1-9.1-.1-1.35-.3-2.05-1.95-2.35-.35-.05-.85-.1-1.25-.1-.35 0-.6-.15-.6-.35 0-.3.25-.35.7-.35 2.1 0 5.05.15 5.25.15.2 0 3-.15 4.5-.15.5 0 .8.05.8.35 0 .15-.15.35-.55.35-.3 0-.7.05-1 .1-1.35.2-1.55 1-1.65 2.4-.05 1.35-.05 2.5-.05 9.1v7.5c0 4.1 0 7.35.2 9.15.15 1.2.4 2.2 1.7 2.35.65.1 1.3.15 1.75.15.4 0 .65.15.65.35 0 .25-.25.35-.75.35-2.5 0-5.4-.15-5.65-.15-.2 0-3.1.15-4.45.15-.5 0-.75-.1-.75-.4 0-.15.15-.3.55-.3s.75 0 1.15-.1c.85-.15 1.1-1.25 1.25-2.4.25-1.8.25-4.95.25-9v-4.45c0-.2-.15-.3-.3-.3h-18.15c-.15 0-.25.05-.25.3v4.45c0 4.05 0 7.3.25 9.1.15 1.1.4 2.1 1.7 2.25.65.1 1.4.15 1.8.15.35 0 .6.15.6.35 0 .2-.2.35-.65.35-2.55 0-5.5-.15-5.75-.15-.15 0-3.2.15-4.5.15-.5 0-.8-.1-.8-.35 0-.15.1-.35.55-.35.4 0 .8-.05 1.2-.15.9-.2 1.1-1.15 1.25-2.25.3-1.8.25-5.15.25-9.25v-7.4c0-6.6 0-7.9-.1-9.25-.1-1.3-.45-2.25-1.9-2.4-.45-.05-.95-.1-1.35-.1-.35 0-.55-.15-.55-.3 0-.3.25-.35.75-.35 2.15 0 4.55.15 5.2.15.2 0 3.1-.15 4.5-.15.5 0 .75.1.75.35 0 .2-.2.3-.5.3s-.45 0-1 .1c-1.25.2-1.55 1.05-1.65 2.45-.05 1.35-.05 2.45-.05 9.05v.9c0 .25.15.25.3.25zm50.65-11.45v17.85c0 3.85.05 7.4.25 9.25.15 1.2.25 1.9 1.5 2.2.6.15 1.55.2 1.95.2.4 0 .6.15.6.3 0 .25-.15.4-.65.4-2.55 0-5.5-.15-5.7-.15-.2 0-3.15.15-4.45.15-.55 0-.75-.1-.75-.35 0-.15.15-.35.55-.35s.7 0 1.1-.05c.95-.15 1.1-.75 1.3-2.45.2-1.8.2-5.4.2-9.15v-17.85c-1.65 0-4.3 0-6.3.05-3.2.05-3.9.55-4.6 1.6-.45.7-.65 1.3-.75 1.55-.15.35-.25.4-.45.4s-.25-.2-.25-.45c-.05-.3.7-3.6 1-4.95.15-.6.3-.8.45-.8.35 0 1.3.45 2.2.55 1.75.2 3.15.25 3.2.25h16.4c1.4 0 2.9-.1 3.6-.25.65-.15.8-.2.95-.2.2 0 .3.25.3.45 0 1.4-.1 4.7-.1 5.1 0 .45-.2.6-.35.6-.25 0-.35-.2-.35-.6 0-.15 0-.2-.05-.7-.2-2-.85-2.5-5.9-2.55-1.9 0-3.45-.05-4.9-.05z",
                  fill: "rgb(var(--rgbPrimary))",
                  fillRule: "nonzero",
                }),
                m.createElement("path", {
                  d: "M228.5 342.162h75.55",
                  stroke: "rgb(var(--rgbPrimary))",
                  strokeWidth: 2,
                  strokeLinecap: "square",
                })
              ))
          ),
        f = {
          src: "/_next/static/media/volkihar-slide-1-large.9687c9ba.jpg",
          height: 1080,
          width: 1920,
          blurDataURL:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAiQa//8QAGhAAAgIDAAAAAAAAAAAAAAAAAQIDEQAEgf/aAAgBAQABPwDaijjsICFVEYWb5n//xAAWEQADAAAAAAAAAAAAAAAAAAAAAkH/2gAIAQIBAT8AWn//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAv/aAAgBAwEBPwCn/9k=",
        },
        p = {
          src: "/_next/static/media/volkihar-slide-1.20ed7eed.jpg",
          height: 540,
          width: 960,
          blurDataURL:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAIkCv//EABoQAAICAwAAAAAAAAAAAAAAAAECAxEABIH/2gAIAQEAAT8A2okjsICFREYWb5n/xAAWEQADAAAAAAAAAAAAAAAAAAAAAkH/2gAIAQIBAT8AWn//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAv/aAAgBAwEBPwCn/9k=",
        },
        v = {
          src: "/_next/static/media/volkihar-slide-2-large.1af069e0.jpg",
          height: 1080,
          width: 1920,
          blurDataURL:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAJkKD//EABwQAAEDBQAAAAAAAAAAAAAAAAIAAwQREiQxwf/aAAgBAQABPwBwsOOFN3Fxf//EABYRAAMAAAAAAAAAAAAAAAAAAAABwf/aAAgBAgEBPwBw/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8Aj//Z",
        },
        j = {
          src: "/_next/static/media/volkihar-slide-2.c361c505.jpg",
          height: 540,
          width: 960,
          blurDataURL:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAJkKD//EABwQAAEDBQAAAAAAAAAAAAAAAAIAAwQREiQxwf/aAAgBAQABPwBwsOOFN3Fxf//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECAQE/AK//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPwCP/9k=",
        },
        D = {
          src: "/_next/static/media/volkihar-slide-3-large.97498b92.jpg",
          height: 1080,
          width: 1920,
          blurDataURL:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAnAaX/8QAGhAAAgIDAAAAAAAAAAAAAAAAAQIAAwQhgv/aAAgBAQABPwAUIMWtutz/xAAZEQACAwEAAAAAAAAAAAAAAAABAgAREkH/2gAIAQIBAT8AZVGaHJ//xAAXEQEAAwAAAAAAAAAAAAAAAAABABFx/9oACAEDAQE/ABW9n//Z",
        },
        b = {
          src: "/_next/static/media/volkihar-slide-3.515264a1.jpg",
          height: 540,
          width: 960,
          blurDataURL:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAnAYX/8QAGhAAAgIDAAAAAAAAAAAAAAAAAQIAAwQhgv/aAAgBAQABPwAUIMWtutz/xAAZEQACAwEAAAAAAAAAAAAAAAABAgAREkH/2gAIAQIBAT8AZVGaHJ//xAAXEQEAAwAAAAAAAAAAAAAAAAABABFx/9oACAEDAQE/ABW9n//Z",
        },
        M = {
          src: "/_next/static/media/volkihar-slide-placeholder.57921ac6.jpg",
          height: 9,
          width: 16,
          blurDataURL:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAhQaf/8QAGRAAAgMBAAAAAAAAAAAAAAAAAQIAAwQx/9oACAEBAAE/ANVaI5Cjgn//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPwCP/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8Ar//Z",
        },
        k = t(8526),
        y = t(5192),
        P = t(1424),
        U = t(5633),
        S = t(2045),
        _ = t(5152),
        F = t.n(_),
        G = t(2362),
        R = t(2594),
        Y = t.n(R),
        K = F()(
          function () {
            return Promise.all([t.e(737), t.e(559), t.e(654)])
              .then(t.bind(t, 1654))
              .then(function (A) {
                return A.Carousel;
              });
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [1654];
              },
            },
          }
        ),
        T = F()(
          function () {
            return Promise.all([t.e(737), t.e(559), t.e(343)])
              .then(t.bind(t, 7460))
              .then(function (A) {
                return A.Armor;
              });
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [7460];
              },
            },
          }
        ),
        V = "Volkihar Knight",
        L =
          "A lore-friendly armor mod for The Elder Scrolls V: Skyrim. Released on PC and Xbox One with over one million downloads across both platforms.",
        Z = ["3D Modelling", "Texturing", "Graphic Design"];
      function J() {
        return (0, n.jsxs)(m.Fragment, {
          children: [
            (0, n.jsx)(U.h, { title: V, prefix: "Projects", description: L }),
            (0, n.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html:
                  "\n            [data-theme='dark'] {\n              --rgbPrimary: 240 211 150;\n              --rgbAccent: 240 211 150;\n            }\n            [data-theme='light'] {\n              --rgbPrimary: 134 99 23;\n              --rgbAccent: 134 99 23;\n            }\n          ",
              },
            }),
            (0, n.jsxs)(S.XR, {
              children: [
                (0, n.jsx)(S.FV, {
                  srcSet: [o, i],
                  placeholder: r,
                  opacity: 0.5,
                }),
                (0, n.jsx)(S.T4, {
                  title: V,
                  description: L,
                  linkLabel: "Get the mod",
                  url: "https://www.nexusmods.com/skyrimspecialedition/mods/4806/",
                  roles: Z,
                }),
                (0, n.jsx)(S.II, {
                  children: (0, n.jsx)(S.IG, {
                    children: (0, n.jsx)(S.KZ, {
                      srcSet: [l, s],
                      placeholder: c,
                      alt: "A dark elf wearing the Volkihar Knight armor with the logo overlaid on the image.",
                      sizes: "(max-width: "
                        .concat(G.BC.mobile, "px) 500px, (max-width: ")
                        .concat(G.BC.tablet, "px) 800px, 1000px"),
                    }),
                  }),
                }),
                (0, n.jsx)(S.II, {
                  children: (0, n.jsx)(S.IG, {
                    children: (0, n.jsx)(P.E, {
                      srcSet: [h, g],
                      placeholder: d,
                      alt: "A book containing a sketch depicting the logo and armor",
                      sizes: "(max-width: "
                        .concat(G.BC.mobile, "px) 90vw, (max-width: ")
                        .concat(G.BC.tablet, "px) 80vw, 70vw"),
                    }),
                  }),
                }),
                (0, n.jsx)(S.II, {
                  children: (0, n.jsxs)(S.nU, {
                    children: [
                      (0, n.jsx)("div", {
                        className: Y().armor,
                        children: (0, n.jsx)(T, {
                          alt: "3D model of the Volkihar Knight armor",
                        }),
                      }),
                      (0, n.jsxs)("div", {
                        className: Y().textSection,
                        children: [
                          (0, n.jsx)(S.d, { children: "Armor design" }),
                          (0, n.jsx)(S.Hr, {
                            children:
                              "As a player I noticed there weren\u2019t any heavy armor options for the Volkihar faction. This kinda sucks when you\u2019ve specialised in heavy armor and decide to join the faction and discover they all wear light armor.",
                          }),
                          (0, n.jsx)(S.Hr, {
                            children:
                              "My solution was to create a mod that combines meshes from the Volkihar faction armor with heavy plate armor. The mod builds upon textures and meshes from the base game, so it unifies with Skyrim\u2019s overall aesthetic. I combined and modified the meshes in 3DS Max. To establish a cohesive design across the set, I edited existing textures, and designed custom textures in Photoshop.",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)(S.II, {
                  children: (0, n.jsxs)(S.IG, {
                    children: [
                      (0, n.jsx)("div", {
                        className: Y().logoContainer,
                        children: (0, n.jsx)(x, {
                          role: "img",
                          "aria-label":
                            "The Volkihar Knight logo, a monogram using the letters 'V' and 'K",
                        }),
                      }),
                      (0, n.jsxs)(S.ee, {
                        center: !0,
                        noMargin: !0,
                        children: [
                          (0, n.jsx)(S.d, { children: "Identity design" }),
                          (0, n.jsx)(S.Hr, {
                            children:
                              "The monogram uses custom designed typography to get the right balance of weight and angularity. I combined this with Trajan for the text, which is also used for Skyrim\u2019s game title wordmark.",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)(S.II, {
                  children: (0, n.jsx)(S.IG, {
                    children: (0, n.jsx)(K, {
                      placeholder: M,
                      images: [
                        {
                          srcSet: [p, f],
                          sizes: "(max-width: "
                            .concat(G.BC.mobile, "px) 100vw, (max-width: ")
                            .concat(G.BC.tablet, "px) 100vw, 1096px"),
                          alt: "A female character wearing the black coloured armor set.",
                        },
                        {
                          srcSet: [j, v],
                          sizes: "(max-width: "
                            .concat(G.BC.mobile, "px) 100vw, (max-width: ")
                            .concat(G.BC.tablet, "px) 100vw, 1096px"),
                          alt: "A close up of the custom gauntlets design.",
                        },
                        {
                          srcSet: [b, D],
                          sizes: "(max-width: "
                            .concat(G.BC.mobile, "px) 100vw, (max-width: ")
                            .concat(G.BC.tablet, "px) 100vw, 1096px"),
                          alt: "A female character wielding a sword and wearing the red coloured armor.",
                        },
                      ],
                      width: 1920,
                      height: 1080,
                    }),
                  }),
                }),
                (0, n.jsx)(S.II, {
                  backgroundElement: (0, n.jsx)(P.E, {
                    srcSet: [w, u],
                    placeholder: B,
                    alt: "A promotional image from Enderal showing several characters in the game overlooking a distant city.",
                    sizes: "100vw",
                  }),
                  children: (0, n.jsx)(S.IG, {
                    children: (0, n.jsxs)(S.ee, {
                      center: !0,
                      centerMobile: !0,
                      noMargin: !0,
                      children: [
                        (0, n.jsx)(P.E, {
                          srcSet: [C, E],
                          placeholder: Q,
                          alt: "The Enderal game logo",
                          sizes: "(max-width: "
                            .concat(G.BC.mobile, "px) 100vw, (max-width: ")
                            .concat(G.BC.tablet, "px) 100vw, 220px"),
                          style: {
                            maxWidth: 220,
                            width: "100%",
                            marginBottom: 30,
                          },
                        }),
                        (0, n.jsx)(S.d, { children: "Featured in Enderal" }),
                        (0, n.jsx)(S.Hr, {
                          children:
                            "I was super stoked to have my work featured in the major standalone mod Enderal, which won best fan creation at the game awards in 2016. Within the game my armor design can be found being used for the Wandering Mage armor set.",
                        }),
                        (0, n.jsx)(k.z, {
                          secondary: !0,
                          iconHoverShift: !0,
                          icon: "chevronRight",
                          href: "https://store.steampowered.com/app/933480/Enderal_Forgotten_Stories/",
                          children: "View on Steam",
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
            (0, n.jsx)(y.$, {}),
          ],
        });
      }
    },
    5903: function (A) {
      A.exports = {
        project: "Project_project__JsLZW",
        section: "Project_section__J6GYi",
        sectionInner: "Project_sectionInner__BbL68",
        sectionBackground: "Project_sectionBackground__c9_MI",
        backgroundImage: "Project_backgroundImage___m2co",
        backgroundImageElement: "Project_backgroundImageElement__YUY7W",
        backgroundScrim: "Project_backgroundScrim__kwaD6",
        header: "Project_header__wfcEM",
        headerContent: "Project_headerContent__vZAy7",
        details: "Project_details__7Wyft",
        title: "Project_title__gFlr3",
        projectFadeSlide: "Project_projectFadeSlide__G5Z1R",
        description: "Project_description__xM50C",
        linkButton: "Project_linkButton__Aa9Ww",
        meta: "Project_meta__i27_j",
        metaItem: "Project_metaItem__wSCNh",
        image: "Project_image__mqYQv",
        sectionContent: "Project_sectionContent__uitMB",
        sectionHeading: "Project_sectionHeading__smXXM",
        sectionText: "Project_sectionText__wfpeH",
        textRow: "Project_textRow__tVxUD",
        sectionColumns: "Project_sectionColumns__uNmfU",
      };
    },
    2594: function (A) {
      A.exports = {
        textSection: "VolkiharKnight_textSection__4ArE8",
        logoContainer: "VolkiharKnight_logoContainer__8hyNF",
        armor: "VolkiharKnight_armor__Lg_VA",
      };
    },
    5152: function (A, e, t) {
      A.exports = t(638);
    },
    7568: function (A, e, t) {
      "use strict";
      function a(A, e, t, a, n, i, r) {
        try {
          var o = A[i](r),
            s = o.value;
        } catch (c) {
          return void t(c);
        }
        o.done ? e(s) : Promise.resolve(s).then(a, n);
      }
      function n(A) {
        return function () {
          var e = this,
            t = arguments;
          return new Promise(function (n, i) {
            var r = A.apply(e, t);
            function o(A) {
              a(r, n, i, o, s, "next", A);
            }
            function s(A) {
              a(r, n, i, o, s, "throw", A);
            }
            o(void 0);
          });
        };
      }
      t.d(e, {
        Z: function () {
          return n;
        },
      });
    },
  },
  function (A) {
    A.O(0, [199, 774, 888, 179], function () {
      return (e = 9495), A((A.s = e));
      var e;
    });
    var e = A.O();
    _N_E = e;
  },
]);
