(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    4394: function (t, e, n) {
      "use strict";
      n.d(e, {
        K: function () {
          return r;
        },
        k: function () {
          return o;
        },
      });
      var r = function () {},
        o = function () {};
    },
    9266: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(1872);
        },
      ]);
    },
    1210: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getDomainLocale = function (t, e, n, r) {
          return !1;
        });
      ("function" === typeof e.default ||
        ("object" === typeof e.default && null !== e.default)) &&
        "undefined" === typeof e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    8418: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(4941).Z;
      n(5753).default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var o = n(2648).Z,
        i = n(7273).Z,
        a = o(n(7294)),
        u = n(6273),
        c = n(2725),
        s = n(3462),
        l = n(1018),
        f = n(7190),
        d = n(1210),
        p = n(8684),
        v = "undefined" !== typeof a.default.useTransition,
        h = {};
      function m(t, e, n, r) {
        if (t && u.isLocalURL(e)) {
          t.prefetch(e, n, r).catch(function (t) {
            0;
          });
          var o =
            r && "undefined" !== typeof r.locale ? r.locale : t && t.locale;
          h[e + "%" + n + (o ? "%" + o : "")] = !0;
        }
      }
      var g = a.default.forwardRef(function (t, e) {
        var n,
          o = t.href,
          g = t.as,
          y = t.children,
          b = t.prefetch,
          x = t.passHref,
          w = t.replace,
          S = t.soft,
          j = t.shallow,
          O = t.scroll,
          E = t.locale,
          T = t.onClick,
          C = t.onMouseEnter,
          A = t.onTouchStart,
          k = t.legacyBehavior,
          M = void 0 === k ? !0 !== Boolean(!1) : k,
          _ = i(t, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "soft",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
            "onTouchStart",
            "legacyBehavior",
          ]);
        (n = y),
          !M ||
            ("string" !== typeof n && "number" !== typeof n) ||
            (n = a.default.createElement("a", null, n));
        var P = !1 !== b,
          L = r(v ? a.default.useTransition() : [], 2)[1],
          R = a.default.useContext(s.RouterContext),
          V = a.default.useContext(l.AppRouterContext);
        V && (R = V);
        var I,
          N = a.default.useMemo(
            function () {
              var t = r(u.resolveHref(R, o, !0), 2),
                e = t[0],
                n = t[1];
              return { href: e, as: g ? u.resolveHref(R, g) : n || e };
            },
            [R, o, g]
          ),
          z = N.href,
          B = N.as,
          H = a.default.useRef(z),
          Z = a.default.useRef(B);
        M && (I = a.default.Children.only(n));
        var F = M ? I && "object" === typeof I && I.ref : e,
          D = r(f.useIntersection({ rootMargin: "200px" }), 3),
          U = D[0],
          W = D[1],
          Q = D[2],
          $ = a.default.useCallback(
            function (t) {
              (Z.current === B && H.current === z) ||
                (Q(), (Z.current = B), (H.current = z)),
                U(t),
                F &&
                  ("function" === typeof F
                    ? F(t)
                    : "object" === typeof F && (F.current = t));
            },
            [B, F, z, Q, U]
          );
        a.default.useEffect(
          function () {
            var t = W && P && u.isLocalURL(z),
              e = "undefined" !== typeof E ? E : R && R.locale,
              n = h[z + "%" + B + (e ? "%" + e : "")];
            t && !n && m(R, z, B, { locale: e });
          },
          [B, z, W, E, P, R]
        );
        var Y = {
          ref: $,
          onClick: function (t) {
            M || "function" !== typeof T || T(t),
              M &&
                I.props &&
                "function" === typeof I.props.onClick &&
                I.props.onClick(t),
              t.defaultPrevented ||
                (function (t, e, n, r, o, i, a, c, s, l) {
                  if (
                    "A" !== t.currentTarget.nodeName.toUpperCase() ||
                    (!(function (t) {
                      var e = t.currentTarget.target;
                      return (
                        (e && "_self" !== e) ||
                        t.metaKey ||
                        t.ctrlKey ||
                        t.shiftKey ||
                        t.altKey ||
                        (t.nativeEvent && 2 === t.nativeEvent.which)
                      );
                    })(t) &&
                      u.isLocalURL(n))
                  ) {
                    t.preventDefault();
                    var f = function () {
                      "softPush" in e && "softReplace" in e
                        ? e[
                            i
                              ? o
                                ? "softReplace"
                                : "softPush"
                              : o
                              ? "replace"
                              : "push"
                          ](n)
                        : e[o ? "replace" : "push"](n, r, {
                            shallow: a,
                            locale: s,
                            scroll: c,
                          });
                    };
                    l ? l(f) : f();
                  }
                })(t, R, z, B, w, S, j, O, E, V ? L : void 0);
          },
          onMouseEnter: function (t) {
            M || "function" !== typeof C || C(t),
              M &&
                I.props &&
                "function" === typeof I.props.onMouseEnter &&
                I.props.onMouseEnter(t),
              u.isLocalURL(z) && m(R, z, B, { priority: !0 });
          },
          onTouchStart: function (t) {
            M || "function" !== typeof A || A(t),
              M &&
                I.props &&
                "function" === typeof I.props.onTouchStart &&
                I.props.onTouchStart(t),
              u.isLocalURL(z) && m(R, z, B, { priority: !0 });
          },
        };
        if (!M || x || ("a" === I.type && !("href" in I.props))) {
          var X = "undefined" !== typeof E ? E : R && R.locale,
            q =
              R &&
              R.isLocaleDomain &&
              d.getDomainLocale(B, X, R.locales, R.domainLocales);
          Y.href = q || p.addBasePath(c.addLocale(B, X, R && R.defaultLocale));
        }
        return M
          ? a.default.cloneElement(I, Y)
          : a.default.createElement("a", Object.assign({}, _, Y), n);
      });
      (e.default = g),
        ("function" === typeof e.default ||
          ("object" === typeof e.default && null !== e.default)) &&
          "undefined" === typeof e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    7190: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(4941).Z;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.useIntersection = function (t) {
          var e = t.rootRef,
            n = t.rootMargin,
            s = t.disabled || !a,
            l = o.useRef(),
            f = r(o.useState(!1), 2),
            d = f[0],
            p = f[1],
            v = r(o.useState(null), 2),
            h = v[0],
            m = v[1];
          o.useEffect(
            function () {
              if (a) {
                if ((l.current && (l.current(), (l.current = void 0)), s || d))
                  return;
                return (
                  h &&
                    h.tagName &&
                    (l.current = (function (t, e, n) {
                      var r = (function (t) {
                          var e,
                            n = {
                              root: t.root || null,
                              margin: t.rootMargin || "",
                            },
                            r = c.find(function (t) {
                              return t.root === n.root && t.margin === n.margin;
                            });
                          if (r && (e = u.get(r))) return e;
                          var o = new Map(),
                            i = new IntersectionObserver(function (t) {
                              t.forEach(function (t) {
                                var e = o.get(t.target),
                                  n =
                                    t.isIntersecting || t.intersectionRatio > 0;
                                e && n && e(n);
                              });
                            }, t);
                          return (
                            (e = { id: n, observer: i, elements: o }),
                            c.push(n),
                            u.set(n, e),
                            e
                          );
                        })(n),
                        o = r.id,
                        i = r.observer,
                        a = r.elements;
                      return (
                        a.set(t, e),
                        i.observe(t),
                        function () {
                          if ((a.delete(t), i.unobserve(t), 0 === a.size)) {
                            i.disconnect(), u.delete(o);
                            var e = c.findIndex(function (t) {
                              return t.root === o.root && t.margin === o.margin;
                            });
                            e > -1 && c.splice(e, 1);
                          }
                        }
                      );
                    })(
                      h,
                      function (t) {
                        return t && p(t);
                      },
                      { root: null == e ? void 0 : e.current, rootMargin: n }
                    )),
                  function () {
                    null == l.current || l.current(), (l.current = void 0);
                  }
                );
              }
              if (!d) {
                var t = i.requestIdleCallback(function () {
                  return p(!0);
                });
                return function () {
                  return i.cancelIdleCallback(t);
                };
              }
            },
            [h, s, n, e, d]
          );
          var g = o.useCallback(function () {
            p(!1);
          }, []);
          return [m, d, g];
        });
      var o = n(7294),
        i = n(9311),
        a = "function" === typeof IntersectionObserver;
      var u = new Map(),
        c = [];
      ("function" === typeof e.default ||
        ("object" === typeof e.default && null !== e.default)) &&
        "undefined" === typeof e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    1018: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.GlobalLayoutRouterContext =
          e.LayoutRouterContext =
          e.AppRouterContext =
            void 0);
      var r = (0, n(2648).Z)(n(7294)),
        o = r.default.createContext(null);
      e.AppRouterContext = o;
      var i = r.default.createContext(null);
      e.LayoutRouterContext = i;
      var a = r.default.createContext(null);
      e.GlobalLayoutRouterContext = a;
    },
    8526: function (t, e, n) {
      "use strict";
      n.d(e, {
        z: function () {
          return g;
        },
      });
      var r = n(1799),
        o = n(9396),
        i = n(9534),
        a = n(5893),
        u = n(1879),
        c = n(7206),
        s = n(7260),
        l = n(1664),
        f = n.n(l),
        d = n(7294),
        p = n(2362),
        v = n(737),
        h = n.n(v);
      function m(t) {
        return null === t || void 0 === t ? void 0 : t.includes("://");
      }
      var g = (0, d.forwardRef)(function (t, e) {
          var n = t.href,
            o = (0, i.Z)(t, ["href"]);
          return m(n) || !n
            ? (0, a.jsx)(y, (0, r.Z)({ href: n, ref: e }, o))
            : (0, a.jsx)(f(), {
                passHref: !0,
                href: n,
                scroll: !1,
                children: (0, a.jsx)(y, (0, r.Z)({ href: n, ref: e }, o)),
              });
        }),
        y = (0, d.forwardRef)(function (t, e) {
          var n = t.className,
            l = t.as,
            f = t.secondary,
            d = t.loading,
            v = t.loadingText,
            g = void 0 === v ? "loading" : v,
            y = t.icon,
            b = t.iconEnd,
            x = t.iconHoverShift,
            w = t.iconOnly,
            S = t.children,
            j = t.rel,
            O = t.target,
            E = t.href,
            T = t.disabled,
            C = (0, i.Z)(t, [
              "className",
              "as",
              "secondary",
              "loading",
              "loadingText",
              "icon",
              "iconEnd",
              "iconHoverShift",
              "iconOnly",
              "children",
              "rel",
              "target",
              "href",
              "disabled",
            ]),
            A = m(E),
            k = l || (E ? "a" : "button");
          return (0, a.jsxs)(
            k,
            (0, o.Z)(
              (0, r.Z)(
                {
                  className: (0, p.Sh)(h().button, n),
                  "data-loading": d,
                  "data-icon-only": w,
                  "data-secondary": f,
                  "data-icon": y,
                  href: E,
                  rel: j || A ? "noopener noreferrer" : void 0,
                  target: O || A ? "_blank" : void 0,
                  disabled: T,
                  ref: e,
                },
                C
              ),
              {
                children: [
                  !!y &&
                    (0, a.jsx)(u.J, {
                      className: h().icon,
                      "data-start": !w,
                      "data-shift": x,
                      icon: y,
                    }),
                  !!S &&
                    (0, a.jsx)("span", { className: h().text, children: S }),
                  !!b &&
                    (0, a.jsx)(u.J, {
                      className: h().icon,
                      "data-end": !w,
                      "data-shift": x,
                      icon: b,
                    }),
                  (0, a.jsx)(s.u, {
                    unmount: !0,
                    in: d,
                    children: function (t) {
                      return (0, a.jsx)(c.a, {
                        className: h().loader,
                        size: 32,
                        text: g,
                        "data-visible": t,
                      });
                    },
                  }),
                ],
              }
            )
          );
        });
    },
    1879: function (t, e, n) {
      "use strict";
      n.d(e, {
        J: function () {
          return Z;
        },
      });
      var r,
        o = n(1799),
        i = n(9534),
        a = n(5893),
        u = n(2362),
        c = n(7124),
        s = n.n(c),
        l = n(7294);
      function f() {
        return (
          (f = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          f.apply(this, arguments)
        );
      }
      var d;
      function p() {
        return (
          (p = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          p.apply(this, arguments)
        );
      }
      var v;
      function h() {
        return (
          (h = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          h.apply(this, arguments)
        );
      }
      var m;
      function g() {
        return (
          (g = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          g.apply(this, arguments)
        );
      }
      var y;
      function b() {
        return (
          (b = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          b.apply(this, arguments)
        );
      }
      var x;
      function w() {
        return (
          (w = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          w.apply(this, arguments)
        );
      }
      var S;
      function j() {
        return (
          (j = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          j.apply(this, arguments)
        );
      }
      var O;
      function E() {
        return (
          (E = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          E.apply(this, arguments)
        );
      }
      var T;
      function C() {
        return (
          (C = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          C.apply(this, arguments)
        );
      }
      var A;
      function k() {
        return (
          (k = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          k.apply(this, arguments)
        );
      }
      var M;
      function _() {
        return (
          (_ = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          _.apply(this, arguments)
        );
      }
      var P;
      function L() {
        return (
          (L = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          L.apply(this, arguments)
        );
      }
      var R;
      function V() {
        return (
          (V = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          V.apply(this, arguments)
        );
      }
      var I;
      function N() {
        return (
          (N = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          N.apply(this, arguments)
        );
      }
      var z;
      function B() {
        return (
          (B = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          B.apply(this, arguments)
        );
      }
      var H = {
          arrowLeft: (t) =>
            l.createElement(
              "svg",
              f({ width: 24, height: 24, viewBox: "0 0 24 24" }, t),
              r ||
                (r = l.createElement("path", {
                  d: "m9.793 19.207-6.5-6.5L2.586 12l.707-.707 6.5-6.5 1.414 1.414L6.414 11H21v2H6.414l4.793 4.793-1.414 1.414Z",
                }))
            ),
          arrowRight: (t) =>
            l.createElement(
              "svg",
              p({ width: 24, height: 24, viewBox: "0 0 24 24" }, t),
              d ||
                (d = l.createElement("path", {
                  d: "M14.207 4.793l6.5 6.5.707.707-.707.707-6.5 6.5-1.414-1.414L17.586 13H3v-2h14.586l-4.793-4.793 1.414-1.414z",
                }))
            ),
          check: (t) =>
            l.createElement(
              "svg",
              h({ width: 24, height: 24, viewBox: "0 0 24 24" }, t),
              v ||
                (v = l.createElement("path", {
                  d: "m20.207 7.207-10 10-.707.707-.707-.707-5-5 1.414-1.414L9.5 15.086l9.293-9.293 1.414 1.414Z",
                }))
            ),
          chevronRight: (t) =>
            l.createElement(
              "svg",
              g({ width: 24, height: 24, viewBox: "0 0 24 24" }, t),
              m ||
                (m = l.createElement("path", {
                  d: "M13.586 12L7.793 6.207l1.414-1.414 6.5 6.5.707.707-.707.707-6.5 6.5-1.414-1.414L13.586 12z",
                }))
            ),
          close: (t) =>
            l.createElement(
              "svg",
              b({ width: 24, height: 24, viewBox: "0 0 24 24" }, t),
              y ||
                (y = l.createElement("path", {
                  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
                }))
            ),
          copy: (t) =>
            l.createElement(
              "svg",
              w({ width: 24, height: 24, viewBox: "0 0 24 24" }, t),
              x ||
                (x = l.createElement("path", {
                  d: "M3 1H2v16h4v-2H4V3h10v2h2V1H3Zm5 6h14v12.414l-.293.293-3 3-.293.293H8V7Zm2 14h7.586L20 18.586V9H10v12Z",
                }))
            ),
          error: (t) =>
            l.createElement(
              "svg",
              j({ width: 24, height: 24, viewBox: "0 0 24 24" }, t),
              S ||
                (S = l.createElement("path", {
                  d: "M12 5.068 19.697 19H4.302L12 5.068Zm-.876-2.552-9.392 17L2.607 21h18.785l.875-1.484-9.392-17h-1.75ZM11 14v-4h2v4h-2Zm0 3v-2h2v2h-2Z",
                }))
            ),
          figma: (t) =>
            l.createElement(
              "svg",
              E({ width: 24, height: 24, viewBox: "0 0 24 24" }, t),
              O ||
                (O = l.createElement("path", {
                  fillRule: "evenodd",
                  d: "M15 10a2 2 0 100 4 2 2 0 000-4zm-2 5.464A4 4 0 0017.646 9 4 4 0 0015 2H9a4 4 0 00-2.646 7 4.01 4.01 0 00-.818 1 4 4 0 00.818 5 3.977 3.977 0 00-.818 1A4 4 0 1013 18v-2.536zM11 16H9a2 2 0 102 2v-2zM9 8h2V4H9a2 2 0 100 4zm0 2a2 2 0 100 4h2v-4H9zm4-2V4h2a2 2 0 010 4h-2z",
                }))
            ),
          github: (t) =>
            l.createElement(
              "svg",
              C({ width: 24, height: 24, viewBox: "0 0 24 24" }, t),
              T ||
                (T = l.createElement("path", {
                  d: "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z",
                }))
            ),
          link: (t) =>
            l.createElement(
              "svg",
              k({ width: 24, height: 24, viewBox: "0 0 24 24" }, t),
              A ||
                (A = l.createElement("path", {
                  d: "M9 4 8 5v2h2V6h10v7H10v-2H8v3l1 1h12l1-1V5l-1-1H9Zm2 4H3L2 9v9l1 1h12l1-1v-2h-2v1H4v-7h10v2h2V9l-1-1h-4Z",
                }))
            ),
          menu: (t) =>
            l.createElement(
              "svg",
              _({ width: 24, height: 24, viewBox: "0 0 24 24" }, t),
              M ||
                (M = l.createElement("path", {
                  d: "M22 6H2V4h20v2zM2 13h16v-2H2v2zm0 7h20v-2H2v2z",
                }))
            ),
          pause: (t) =>
            l.createElement(
              "svg",
              L({ width: 24, height: 24, viewBox: "0 0 24 24" }, t),
              P ||
                (P = l.createElement("path", {
                  d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z",
                }))
            ),
          play: (t) =>
            l.createElement(
              "svg",
              V({ width: 24, height: 24, viewBox: "0 0 24 24" }, t),
              R || (R = l.createElement("path", { d: "M8 5v14l11-7z" }))
            ),
          send: (t) =>
            l.createElement(
              "svg",
              N({ width: 24, height: 24, viewBox: "0 0 24 24" }, t),
              I ||
                (I = l.createElement("path", {
                  d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2 .01 7z",
                }))
            ),
          twitter: (t) =>
            l.createElement(
              "svg",
              B({ width: 24, height: 24, viewBox: "0 0 24 24" }, t),
              z ||
                (z = l.createElement("path", {
                  d: "M22.92 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.83 4.5 17.72 4 16.46 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.9 20.29 6.16 21 8.58 21c7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z",
                }))
            ),
        },
        Z = function (t) {
          var e = t.icon,
            n = t.className,
            r = (0, i.Z)(t, ["icon", "className"]),
            c = H[e];
          return (0, a.jsx)(
            c,
            (0, o.Z)(
              { "aria-hidden": !0, className: (0, u.Sh)(s().icon, n) },
              r
            )
          );
        };
    },
    7206: function (t, e, n) {
      "use strict";
      n.d(e, {
        a: function () {
          return h;
        },
      });
      var r = n(1799),
        o = n(9396),
        i = n(9534),
        a = n(5893),
        u = n(7346),
        c = n(2323),
        s = n(6240),
        l = n(4529),
        f = n(3935),
        d = n(2362),
        p = n(9034),
        v = n.n(p),
        h = function (t) {
          var e = t.className,
            n = t.style,
            p = t.size,
            h = void 0 === p ? 32 : p,
            m = t.text,
            g = void 0 === m ? "Loading..." : m,
            y = (0, i.Z)(t, ["className", "style", "size", "text"]),
            b = (0, s.J)(),
            x = (0, l.f3)(),
            w = function () {
              if (x)
                return (0, f.createPortal)(
                  (0, a.jsx)(c.T, {
                    className: "loader-announcement",
                    "aria-live": "assertive",
                    children: g,
                  }),
                  document.getElementById("portal-root")
                );
            };
          if (b)
            return (0, a.jsxs)(
              u.x,
              (0, o.Z)(
                (0, r.Z)(
                  { className: (0, d.Sh)(v().text, e), weight: "medium" },
                  y
                ),
                { children: [g, w()] }
              )
            );
          var S = Math.round((h / 3) * 0.2),
            j = Math.round(h / 3 - 2 * S - 1);
          return (0, a.jsxs)(
            "div",
            (0, o.Z)(
              (0, r.Z)(
                {
                  className: (0, d.Sh)(v().loader, e),
                  style: (0, d.Fh)({ size: h, spanSize: j, gapSize: S }, n),
                },
                y
              ),
              {
                children: [
                  (0, a.jsxs)("div", {
                    className: v().content,
                    children: [
                      (0, a.jsx)("div", { className: v().span }),
                      (0, a.jsx)("div", { className: v().span }),
                      (0, a.jsx)("div", { className: v().span }),
                    ],
                  }),
                  w(),
                ],
              }
            )
          );
        };
    },
    7346: function (t, e, n) {
      "use strict";
      n.d(e, {
        x: function () {
          return l;
        },
      });
      var r = n(1799),
        o = n(9396),
        i = n(9534),
        a = n(5893),
        u = n(2362),
        c = n(2278),
        s = n.n(c),
        l = function (t) {
          var e = t.children,
            n = t.size,
            c = void 0 === n ? "m" : n,
            l = t.as,
            f = void 0 === l ? "span" : l,
            d = t.align,
            p = void 0 === d ? "auto" : d,
            v = t.weight,
            h = void 0 === v ? "auto" : v,
            m = t.secondary,
            g = t.className,
            y = (0, i.Z)(t, [
              "children",
              "size",
              "as",
              "align",
              "weight",
              "secondary",
              "className",
            ]);
          return (0, a.jsx)(
            f,
            (0, o.Z)(
              (0, r.Z)(
                {
                  className: (0, u.Sh)(s().text, g),
                  "data-align": p,
                  "data-size": c,
                  "data-weight": h,
                  "data-secondary": m,
                },
                y
              ),
              { children: e }
            )
          );
        };
    },
    8718: function (t, e, n) {
      "use strict";
      n.d(e, {
        Ni: function () {
          return x;
        },
        f6: function () {
          return w;
        },
        Fg: function () {
          return b;
        },
      });
      var r = n(1799),
        o = n(9396),
        i = n(9534),
        a = n(5893),
        u = n.p + "static/media/gotham-bold-italic.72cd55d4.woff2",
        c = n.p + "static/media/gotham-bold.c081ace9.woff2",
        s = n.p + "static/media/gotham-book-italic.30d92fbf.woff2",
        l = n.p + "static/media/gotham-book.f0d45f33.woff2",
        f = n.p + "static/media/gotham-medium-italic.f83fe298.woff2",
        d = n.p + "static/media/gotham-medium.cb181817.woff2",
        p = n(4529),
        v = n(9008),
        h = n.n(v),
        m = n(7294),
        g = n(2362),
        y = n(3994);
      function b() {
        return (0, m.useContext)(x);
      }
      var x = (0, m.createContext)({}),
        w = function (t) {
          var e = t.themeId,
            n = void 0 === e ? "dark" : e,
            u = t.theme,
            c = t.children,
            s = t.className,
            l = t.as,
            f = void 0 === l ? "div" : l,
            d = (0, i.Z)(t, [
              "themeId",
              "theme",
              "children",
              "className",
              "as",
            ]),
            v = (0, r.Z)({}, y.r[n], u),
            w = !b().themeId,
            S = (0, p.f3)();
          return (
            (0, m.useEffect)(
              function () {
                w &&
                  S &&
                  (window.localStorage.setItem("theme", JSON.stringify(n)),
                  (document.body.dataset.theme = n));
              },
              [n, w, S]
            ),
            (0, a.jsxs)(x.Provider, {
              value: v,
              children: [
                w &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(h(), {
                        children: (0, a.jsx)("meta", {
                          name: "theme-color",
                          content: "rgb(".concat(v.rgbBackground, ")"),
                        }),
                      }),
                      c,
                    ],
                  }),
                !w &&
                  (0, a.jsx)(
                    f,
                    (0, o.Z)(
                      (0, r.Z)(
                        {
                          className: (0, g.Sh)("theme-provider", s),
                          "data-theme": n,
                        },
                        d
                      ),
                      { children: c }
                    )
                  ),
              ],
            })
          );
        };
      function S(t) {
        return t.replace(/\s\s+/g, " ");
      }
      function j(t) {
        return S(
          Object.keys(t)
            .filter(function (t) {
              return "themeId" !== t;
            })
            .map(function (e) {
              return "--".concat(e, ": ").concat(t[e], ";");
            })
            .join("\n\n")
        );
      }
      S(
        "\n  :root {\n    "
          .concat(j(y.T.base), "\n  }\n\n  ")
          .concat(
            S(
              Object.keys(g.BC)
                .map(function (t) {
                  return "\n        @media (max-width: "
                    .concat(g.BC[t], "px) {\n          :root {\n            ")
                    .concat(j(y.T[t]), "\n          }\n        }\n      ");
                })
                .join("\n")
            ),
            "\n\n  [data-theme='dark'] {\n    "
          )
          .concat(j(y.r.dark), "\n  }\n\n  [data-theme='light'] {\n    ")
          .concat(j(y.r.light), "\n  }\n")
      ),
        S(
          "\n  @font-face {\n    font-family: Gotham;\n    font-weight: 400;\n    src: url("
            .concat(
              l,
              ") format('woff2');\n    font-display: block;\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: Gotham;\n    font-weight: 400;\n    src: url("
            )
            .concat(
              s,
              ") format('woff2');\n    font-display: block;\n    font-style: italic;\n  }\n\n  @font-face {\n    font-family: Gotham;\n    font-weight: 500;\n    src: url("
            )
            .concat(
              d,
              ") format('woff2');\n    font-display: block;\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: Gotham;\n    font-weight: 500;\n    src: url("
            )
            .concat(
              f,
              ") format('woff2');\n    font-display: block;\n    font-style: italic;\n  }\n\n  @font-face {\n    font-family: Gotham;\n    font-weight: 700;\n    src: url("
            )
            .concat(
              c,
              ") format('woff2');\n    font-display: block;\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: Gotham;\n    font-weight: 700;\n    src: url("
            )
            .concat(
              u,
              ") format('woff2');\n    font-display: block;\n    font-style: italic;\n  }\n"
            )
        );
    },
    3994: function (t, e, n) {
      "use strict";
      n.d(e, {
        T: function () {
          return o;
        },
        r: function () {
          return i;
        },
      });
      var r = n(2362),
        o = {
          base: {
            rgbBlack: "0 0 0",
            rgbWhite: "255 255 255",
            bezierFastoutSlowin: "cubic-bezier(0.4, 0.0, 0.2, 1)",
            durationXS: "200ms",
            durationS: "300ms",
            durationM: "400ms",
            durationL: "600ms",
            durationXL: "800ms",
            systemFontStack:
              "system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",
            fontStack: "Gotham, var(--systemFontStack)",
            monoFontStack:
              "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
            japaneseFontStack:
              "\u30d2\u30e9\u30ae\u30ce\u89d2\u30b4 Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, \u30e1\u30a4\u30ea\u30aa, Meiryo, Segoe UI, sans-serif",
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            fontWeightBold: 700,
            fontSizeH0: (0, r.Q1)(140),
            fontSizeH1: (0, r.Q1)(100),
            fontSizeH2: (0, r.Q1)(58),
            fontSizeH3: (0, r.Q1)(38),
            fontSizeH4: (0, r.Q1)(28),
            fontSizeH5: (0, r.Q1)(24),
            fontSizeBodyXL: (0, r.Q1)(22),
            fontSizeBodyL: (0, r.Q1)(20),
            fontSizeBodyM: (0, r.Q1)(18),
            fontSizeBodyS: (0, r.Q1)(16),
            fontSizeBodyXS: (0, r.Q1)(14),
            lineHeightTitle: "1.1",
            lineHeightBody: "1.6",
            maxWidthS: "540px",
            maxWidthM: "720px",
            maxWidthL: "1096px",
            maxWidthXL: "1680px",
            spaceOuter: "64px",
            spaceXS: "4px",
            spaceS: "8px",
            spaceM: "16px",
            spaceL: "24px",
            spaceXL: "32px",
            space2XL: "48px",
            space3XL: "64px",
            space4XL: "96px",
            space5XL: "128px",
            zIndex0: 0,
            zIndex1: 4,
            zIndex2: 8,
            zIndex3: 16,
            zIndex4: 32,
            zIndex5: 64,
          },
          desktop: { fontSizeH0: (0, r.Q1)(120), fontSizeH1: (0, r.Q1)(80) },
          laptop: {
            maxWidthS: "480px",
            maxWidthM: "640px",
            maxWidthL: "1000px",
            maxWidthXL: "1100px",
            spaceOuter: "48px",
            fontSizeH0: (0, r.Q1)(100),
            fontSizeH1: (0, r.Q1)(70),
            fontSizeH2: (0, r.Q1)(50),
            fontSizeH3: (0, r.Q1)(36),
            fontSizeH4: (0, r.Q1)(26),
            fontSizeH5: (0, r.Q1)(22),
          },
          tablet: {
            fontSizeH0: (0, r.Q1)(80),
            fontSizeH1: (0, r.Q1)(60),
            fontSizeH2: (0, r.Q1)(48),
            fontSizeH3: (0, r.Q1)(32),
            fontSizeH4: (0, r.Q1)(24),
            fontSizeH5: (0, r.Q1)(20),
          },
          mobile: {
            spaceOuter: "24px",
            fontSizeH0: (0, r.Q1)(56),
            fontSizeH1: (0, r.Q1)(40),
            fontSizeH2: (0, r.Q1)(34),
            fontSizeH3: (0, r.Q1)(28),
            fontSizeH4: (0, r.Q1)(22),
            fontSizeH5: (0, r.Q1)(18),
            fontSizeBodyL: (0, r.Q1)(17),
            fontSizeBodyM: (0, r.Q1)(16),
            fontSizeBodyS: (0, r.Q1)(14),
          },
          mobileS: {
            spaceOuter: "16px",
            fontSizeH0: (0, r.Q1)(42),
            fontSizeH1: (0, r.Q1)(38),
            fontSizeH2: (0, r.Q1)(28),
            fontSizeH3: (0, r.Q1)(24),
            fontSizeH4: (0, r.Q1)(20),
          },
        },
        i = {
          dark: {
            themeId: "dark",
            rgbBackground: "17 17 17",
            rgbBackgroundLight: "26 26 26",
            rgbPrimary: "0 229 255",
            rgbAccent: "0 229 255",
            rgbText: "255 255 255",
            rgbError: "255 55 102",
            colorTextTitle: "rgb(var(--rgbText) / 1)",
            colorTextBody: "rgb(var(--rgbText) / 0.8)",
            colorTextLight: "rgb(var(--rgbText) / 0.6)",
          },
          light: {
            themeId: "light",
            rgbBackground: "242 242 242",
            rgbBackgroundLight: "255 255 255",
            rgbPrimary: "0 0 0",
            rgbAccent: "0 229 255",
            rgbText: "0 0 0",
            rgbError: "255 0 60",
            colorTextTitle: "rgb(var(--rgbText) / 1)",
            colorTextBody: "rgb(var(--rgbText) / 0.8)",
            colorTextLight: "rgb(var(--rgbText) / 0.6)",
          },
        };
    },
    7260: function (t, e, n) {
      "use strict";
      n.d(e, {
        u: function () {
          return c;
        },
      });
      var r = n(828),
        o = n(5893),
        i = n(1190),
        a = n(5947),
        u = n(7294),
        c = function (t) {
          var e = t.children,
            n = t.timeout,
            r = void 0 === n ? 0 : n,
            a = t.onEnter,
            c = t.onEntered,
            l = t.onExit,
            f = t.onExited,
            d = t.in,
            p = t.unmount,
            v = (0, u.useRef)(),
            h = (0, u.useRef)();
          return (
            (0, u.useEffect)(
              function () {
                d ? clearTimeout(h.current) : clearTimeout(v.current);
              },
              [d]
            ),
            (0, o.jsx)(i.M, {
              children:
                (d || !p) &&
                (0, o.jsx)(s, {
                  timeout: r,
                  enterTimeout: v,
                  exitTimeout: h,
                  onEnter: a,
                  onEntered: c,
                  onExit: l,
                  onExited: f,
                  show: d,
                  children: e,
                }),
            })
          );
        },
        s = function (t) {
          var e = t.children,
            n = t.timeout,
            o = t.enterTimeout,
            i = t.exitTimeout,
            c = t.onEnter,
            s = t.onEntered,
            l = t.onExit,
            f = t.onExited,
            d = t.show,
            p = (0, u.useState)("exited"),
            v = p[0],
            h = p[1],
            m = (0, r.Z)((0, a.oO)(), 2),
            g = m[0],
            y = m[1],
            b = (0, u.useState)(!1),
            x = b[0],
            w = b[1],
            S = "object" === typeof n;
          return (
            (0, u.useEffect)(
              function () {
                if (!x && d) {
                  var t = S ? n.enter : n;
                  clearTimeout(o.current),
                    clearTimeout(i.current),
                    w(!0),
                    h("entering"),
                    null === c || void 0 === c || c(),
                    (o.current = setTimeout(function () {
                      h("entered"), null === s || void 0 === s || s();
                    }, t));
                }
              },
              [c, s, n, v, d]
            ),
            (0, u.useEffect)(
              function () {
                if (!g || !d) {
                  var t = S ? n.exit : n;
                  clearTimeout(o.current),
                    clearTimeout(i.current),
                    h("exiting"),
                    null === l || void 0 === l || l(),
                    (i.current = setTimeout(function () {
                      h("exited"),
                        null === y || void 0 === y || y(),
                        null === f || void 0 === f || f();
                    }, t));
                }
              },
              [g, l, y, n, f, d]
            ),
            e(!(!x || !d) && g, v)
          );
        };
    },
    2323: function (t, e, n) {
      "use strict";
      n.d(e, {
        T: function () {
          return f;
        },
      });
      var r = n(1799),
        o = n(9396),
        i = n(9534),
        a = n(5893),
        u = n(7294),
        c = n(2362),
        s = n(774),
        l = n.n(s),
        f = (0, u.forwardRef)(function (t, e) {
          var n = t.className,
            u = t.showOnFocus,
            s = t.as,
            f = void 0 === s ? "span" : s,
            d = t.children,
            p = t.visible,
            v = (0, i.Z)(t, [
              "className",
              "showOnFocus",
              "as",
              "children",
              "visible",
            ]);
          return (0,
          a.jsx)(f, (0, o.Z)((0, r.Z)({ className: (0, c.Sh)(l().hidden, n), "data-hidden": !p && !u, "data-show-on-focus": u, ref: e }, v), { children: d }));
        });
    },
    4529: function (t, e, n) {
      "use strict";
      n.d(e, {
        bp: function () {
          return i;
        },
        pJ: function () {
          return a;
        },
        S2: function () {
          return u;
        },
        f3: function () {
          return c;
        },
        NM: function () {
          return f;
        },
        Yz: function () {
          return s;
        },
        _: function () {
          return d;
        },
        YT: function () {
          return v;
        },
        D9: function () {
          return h;
        },
        jh: function () {
          return g;
        },
        iP: function () {
          return y;
        },
      });
      var r = n(1872),
        o = n(7294);
      function i() {
        return (0, o.useContext)(r.AppContext);
      }
      function a() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          e = (0, o.useState)(t),
          n = e[0],
          r = e[1],
          i = (0, o.useState)(),
          a = i[0],
          u = i[1],
          c = (0, o.useState)(!1),
          s = c[0],
          l = c[1],
          f = function (t) {
            r(t.target.value), l(!0), a && t.target.checkValidity() && u(null);
          },
          d = function (t) {
            t.preventDefault(), u(t.target.validationMessage);
          },
          p = function (t) {
            s && t.target.checkValidity();
          };
        return { value: n, error: a, onChange: f, onBlur: p, onInvalid: d };
      }
      var u = function () {
        (0, o.useEffect)(function () {
          var t = Array.from(
            document.querySelectorAll('link[rel="stylesheet"][data-n-p]')
          ).map(function (t) {
            return { element: t, href: t.getAttribute("href") };
          });
          t.forEach(function (t) {
            return t.element.removeAttribute("data-n-p");
          });
          var e = [],
            n = new MutationObserver(function (n) {
              n
                .filter(function (t) {
                  var e = t.target;
                  return (
                    "STYLE" === e.nodeName && e.hasAttribute("data-n-href")
                  );
                })
                .map(function (t) {
                  var e = t.target;
                  return { element: e, href: e.getAttribute("data-n-href") };
                })
                .forEach(function (t) {
                  var n = t.element,
                    r = t.href;
                  e.includes(r)
                    ? n.remove()
                    : (n.setAttribute("data-fouc-fix-n-href", r),
                      n.removeAttribute("data-n-href"),
                      e.push(r));
                }),
                (t = t.reduce(function (t, n) {
                  var r = n.element,
                    o = n.href;
                  return e.includes(o) ? r.remove() : t.push(n), t;
                }, []));
            });
          return (
            n.observe(document.head, {
              subtree: !0,
              attributeFilter: ["media"],
            }),
            function () {
              return n.disconnect();
            }
          );
        }, []);
      };
      function c() {
        var t = (0, o.useState)(!1),
          e = t[0],
          n = t[1];
        return (
          (0, o.useEffect)(function () {
            n(!0);
          }, []),
          e
        );
      }
      function s(t, e, n) {
        var r = (0, o.useRef)();
        (0, o.useEffect)(function () {
          r.current = t;
        }),
          (0, o.useEffect)(
            function () {
              if (null !== e) {
                var t = setInterval(function () {
                  r.current();
                }, e);
                return function () {
                  return clearInterval(t);
                };
              }
            },
            [e, n]
          );
      }
      var l = n(828);
      function f(t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r =
            !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          i = (0, o.useState)(!1),
          a = i[0],
          u = i[1],
          c = (0, o.useState)(!1),
          s = c[0],
          f = c[1];
        return (
          (0, o.useEffect)(
            function () {
              if (null === t || void 0 === t ? void 0 : t.current) {
                var o = new IntersectionObserver(function (t) {
                  var n = (0, l.Z)(t, 1)[0],
                    r = n.isIntersecting,
                    i = n.target;
                  u(r), r && e && (o.unobserve(i), f(!0));
                }, n);
                return (
                  !s && r && o.observe(t.current),
                  function () {
                    return o.disconnect();
                  }
                );
              }
            },
            [t, e, n, s, r]
          ),
          a
        );
      }
      function d(t, e) {
        var n = (0, o.useState)(function () {
            try {
              var n = window.localStorage.getItem(t);
              return n ? JSON.parse(n) : e;
            } catch (r) {
              return console.error(r), e;
            }
          }),
          r = n[0],
          i = n[1];
        return [
          r,
          function (e) {
            try {
              var n =
                ((o = e),
                (
                  null != (a = Function) &&
                  "undefined" !== typeof Symbol &&
                  a[Symbol.hasInstance]
                    ? a[Symbol.hasInstance](o)
                    : o instanceof a
                )
                  ? e(r)
                  : e);
              i(n), window.localStorage.setItem(t, JSON.stringify(n));
            } catch (u) {
              console.error(u);
            }
            var o, a;
          },
        ];
      }
      var p = n(6240);
      function v(t, e) {
        var n = (0, p.J)();
        (0, o.useEffect)(
          function () {
            var r = !1,
              o = null,
              i = function () {
                var n = window.innerHeight,
                  o = Math.max(0, window.scrollY) * t,
                  i = Math.max(-n, Math.min(n, o));
                e(i), (r = !1);
              },
              a = function () {
                r || ((r = !0), (o = requestAnimationFrame(i)));
              };
            return (
              n || (window.addEventListener("scroll", a), a()),
              function () {
                window.removeEventListener("scroll", a),
                  cancelAnimationFrame(o);
              }
            );
          },
          [t, e, n]
        );
      }
      function h(t) {
        var e = (0, o.useRef)();
        return (
          (0, o.useEffect)(
            function () {
              e.current = t;
            },
            [t]
          ),
          e.current
        );
      }
      var m = n(1163);
      function g() {
        var t = (0, o.useRef)(),
          e = (0, m.useRouter)(),
          n = e.asPath,
          r = e.push,
          i = (0, p.J)();
        return (0, o.useCallback)(
          function (e, o) {
            var a = e.split("#")[1],
              u = document.getElementById(a),
              c = n.split("#")[0],
              s = "".concat(c, "#").concat(a);
            u.scrollIntoView({ behavior: i ? "auto" : "smooth" });
            var l = function () {
              clearTimeout(t.current),
                (t.current = setTimeout(function () {
                  window.removeEventListener("scroll", l),
                    window.location.pathname === c &&
                      (null === o || void 0 === o || o(),
                      r(s, null, { scroll: !1 }));
                }, 50));
            };
            return (
              window.addEventListener("scroll", l),
              function () {
                window.removeEventListener("scroll", l),
                  clearTimeout(t.current);
              }
            );
          },
          [r, i, n]
        );
      }
      function y() {
        var t = (0, o.useRef)(function () {
            return { w: 1280, h: 800 };
          }),
          e = (0, o.useCallback)(function () {
            var e = document.createElement("div");
            (e.style.position = "fixed"),
              (e.style.height = "100vh"),
              (e.style.width = 0),
              (e.style.top = 0),
              document.documentElement.appendChild(e),
              (t.current.w = window.innerWidth),
              (t.current.h = e.offsetHeight),
              document.documentElement.removeChild(e),
              (e = null);
          }, []),
          n = (0, o.useCallback)(
            function () {
              return (
                null === navigator || void 0 === navigator
                  ? void 0
                  : navigator.userAgent.match(/iphone|ipod|ipad/i)
              )
                ? (e(), t.current.h)
                : window.innerHeight;
            },
            [e]
          ),
          r = (0, o.useCallback)(
            function () {
              return { width: window.innerWidth, height: n() };
            },
            [n]
          ),
          i = (0, o.useState)(t.current),
          a = i[0],
          u = i[1];
        return (
          (0, o.useEffect)(
            function () {
              var t = function () {
                u(r());
              };
              return (
                window.addEventListener("resize", t),
                t(),
                function () {
                  window.removeEventListener("resize", t);
                }
              );
            },
            [r]
          ),
          a
        );
      }
    },
    1872: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          AppContext: function () {
            return tr;
          },
          default: function () {
            return er;
          },
        });
      var r = n(1799),
        o = n(9396),
        i = n(828),
        a = n(5893),
        u = (n(2239), n(4492), n(1879)),
        c = n(9534),
        s = n(7294),
        l = n(2362),
        f = n(2420),
        d = n.n(f),
        p = (0, s.forwardRef)(function (t, e) {
          var n = t.highlight,
            i = t.className,
            u = (0, c.Z)(t, ["highlight", "className"]),
            f = (0, s.useId)(),
            p = "".concat(f, "monogram-clip");
          return (0,
          a.jsxs)("svg", (0, o.Z)((0, r.Z)({ "aria-hidden": !0, className: (0, l.Sh)(d().monogram, i), width: "46", height: "29", viewBox: "0 0 46 29", ref: e }, u), { children: [(0, a.jsx)("defs", { children: (0, a.jsx)("clipPath", { id: p, children: (0, a.jsx)("path", { d: "M16.525 28.462l7.18-18.35.003-.001 9.72 18.442a.838.838 0 001.524-.093l3.39-8.824a.846.846 0 00-.04-.686L30.307 3.605A6.698 6.698 0 0024.367 0h-4.6a.84.84 0 00-.74 1.23l3.63 6.887-3.655 9.15-7.12-13.662A6.698 6.698 0 005.942 0h-4.6a.842.842 0 00-.748 1.23L15 28.554a.839.839 0 001.524-.092zM42.392 8.806a.835.835 0 00.387-.446v.001l2.67-7.23a.838.838 0 00-.785-1.129h-6.578a.837.837 0 00-.736 1.238l3.907 7.226c.22.41.729.56 1.135.34z" }) }) }), (0, a.jsx)("rect", { clipPath: "url(#".concat(p, ")"), width: "100%", height: "100%" }), n && (0, a.jsx)("g", { clipPath: "url(#".concat(p, ")"), children: (0, a.jsx)("rect", { className: d().highlight, width: "100%", height: "100%" }) })] }));
        }),
        v = n(8718),
        h = n(3994),
        m = n(7260),
        g = n(4529),
        y = n(1664),
        b = n.n(y),
        x = n(1163),
        w = n(8526),
        S = n(7786),
        j = n.n(S),
        O = function (t) {
          var e = t.menuOpen,
            n = (0, c.Z)(t, ["menuOpen"]);
          return (0, a.jsx)(
            w.z,
            (0, o.Z)(
              (0, r.Z)(
                {
                  iconOnly: !0,
                  className: j().toggle,
                  "aria-label": "Menu",
                  "aria-expanded": e,
                },
                n
              ),
              {
                children: (0, a.jsxs)("div", {
                  className: j().inner,
                  children: [
                    (0, a.jsx)(u.J, {
                      className: j().icon,
                      "data-menu": !0,
                      "data-open": e,
                      icon: "menu",
                    }),
                    (0, a.jsx)(u.J, {
                      className: j().icon,
                      "data-close": !0,
                      "data-open": e,
                      icon: "close",
                    }),
                  ],
                }),
              }
            )
          );
        },
        E = n(6105),
        T = n.n(E),
        C = n(2279),
        A = n.n(C),
        k = function (t) {
          var e = t.isMobile,
            n = (0, c.Z)(t, ["isMobile"]),
            i = (0, g.bp)().dispatch,
            u = (0, s.useId)(),
            l = "".concat(u, "theme-toggle-mask");
          return (0, a.jsx)(
            w.z,
            (0, o.Z)(
              (0, r.Z)(
                {
                  iconOnly: !0,
                  className: A().toggle,
                  "data-mobile": e,
                  "aria-label": "Toggle theme",
                  onClick: function () {
                    i({ type: "toggleTheme" });
                  },
                },
                n
              ),
              {
                children: (0, a.jsxs)("svg", {
                  "aria-hidden": !0,
                  className: A().svg,
                  width: "38",
                  height: "38",
                  viewBox: "0 0 38 38",
                  children: [
                    (0, a.jsx)("defs", {
                      children: (0, a.jsxs)("mask", {
                        id: l,
                        children: [
                          (0, a.jsx)("circle", {
                            className: A().circle,
                            "data-mask": !0,
                            cx: "19",
                            cy: "19",
                            r: "13",
                          }),
                          (0, a.jsx)("circle", {
                            className: A().mask,
                            cx: "25",
                            cy: "14",
                            r: "9",
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)("path", {
                      className: A().path,
                      d: "M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5",
                    }),
                    (0, a.jsx)("circle", {
                      className: A().circle,
                      mask: "url(#".concat(l, ")"),
                      cx: "19",
                      cy: "19",
                      r: "12",
                    }),
                  ],
                }),
              }
            )
          );
        },
        M = [
          { label: "Projects", pathname: "/#project-1" },
          { label: "Details", pathname: "/#details" },
          { label: "Articles", pathname: "/articles" },
          { label: "Contact", pathname: "/contact" },
        ],
        _ = [
          {
            label: "Twitter",
            url: "https://twitter.com/hamishMW",
            icon: "twitter",
          },
          {
            label: "Figma",
            url: "https://www.figma.com/@Hamish",
            icon: "figma",
          },
          {
            label: "Github",
            url: "https://github.com/HamishMW",
            icon: "github",
          },
        ],
        P = function () {
          var t = (0, s.useState)(),
            e = t[0],
            n = t[1],
            r = (0, s.useState)(),
            o = r[0],
            i = r[1],
            u = (0, v.Fg)().themeId,
            c = (0, g.bp)(),
            f = c.menuOpen,
            d = c.dispatch,
            y = (0, x.useRouter)(),
            w = y.route,
            S = y.asPath,
            j = (0, g.iP)(),
            E = (0, s.useRef)(),
            C = j.width <= l.BC.mobile || j.height <= 696,
            A = (0, g.jh)();
          (0, s.useEffect)(
            function () {
              n(S);
            },
            [S]
          ),
            (0, s.useEffect)(
              function () {
                o &&
                  "/" === w &&
                  (n("".concat(w).concat(o)),
                  A(o, function () {
                    return i(null);
                  }));
              },
              [w, A, o]
            ),
            (0, s.useEffect)(
              function () {
                var t = document.querySelectorAll("[data-navbar-item]"),
                  e = "dark" === u ? "light" : "dark",
                  n = window.innerHeight,
                  r = [],
                  o = [],
                  i = function (t, e, n) {
                    return !(t.bottom - n < e.top || t.top - n > e.bottom);
                  },
                  a = function () {
                    var t = !0,
                      e = !1,
                      n = void 0;
                    try {
                      for (
                        var r, i = o[Symbol.iterator]();
                        !(t = (r = i.next()).done);
                        t = !0
                      ) {
                        r.value.element.dataset.theme = "";
                      }
                    } catch (a) {
                      (e = !0), (n = a);
                    } finally {
                      try {
                        t || null == i.return || i.return();
                      } finally {
                        if (e) throw n;
                      }
                    }
                  },
                  c = function () {
                    var t = document.querySelectorAll(
                      "[data-theme='".concat(e, "'][data-invert]")
                    );
                    if (t) {
                      r = Array.from(t).map(function (t) {
                        return {
                          element: t,
                          top: t.offsetTop,
                          bottom: t.offsetTop + t.offsetHeight,
                        };
                      });
                      var u = window.scrollY;
                      a();
                      var c = !0,
                        s = !1,
                        l = void 0;
                      try {
                        for (
                          var f, d = r[Symbol.iterator]();
                          !(c = (f = d.next()).done);
                          c = !0
                        ) {
                          var p = f.value;
                          if (!(p.top - u > n || p.bottom - u < 0)) {
                            var v = !0,
                              h = !1,
                              m = void 0;
                            try {
                              for (
                                var g, y = o[Symbol.iterator]();
                                !(v = (g = y.next()).done);
                                v = !0
                              ) {
                                var b = g.value;
                                i(p, b, u)
                                  ? (b.element.dataset.theme = e)
                                  : (b.element.dataset.theme = "");
                              }
                            } catch (x) {
                              (h = !0), (m = x);
                            } finally {
                              try {
                                v || null == y.return || y.return();
                              } finally {
                                if (h) throw m;
                              }
                            }
                          }
                        }
                      } catch (x) {
                        (s = !0), (l = x);
                      } finally {
                        try {
                          c || null == d.return || d.return();
                        } finally {
                          if (s) throw l;
                        }
                      }
                    }
                  };
                return (
                  "light" === u &&
                    ((o = Array.from(t).map(function (t) {
                      var e = t.getBoundingClientRect();
                      return { element: t, top: e.top, bottom: e.bottom };
                    })),
                    document.addEventListener("scroll", c),
                    c()),
                  function () {
                    document.removeEventListener("scroll", c), a();
                  }
                );
              },
              [u, j, S]
            );
          var _ = function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                n = (null === e || void 0 === e ? void 0 : e.endsWith("/"))
                  ? null === e || void 0 === e
                    ? void 0
                    : e.slice(0, -1)
                  : e;
              return t === n ? "page" : "";
            },
            P = function (t) {
              var e = t.currentTarget.href.split("#")[1];
              i(null), e && "/" === w && (i("#".concat(e)), t.preventDefault());
            },
            R = function (t) {
              P(t), f && d({ type: "toggleMenu" });
            };
          return (0, a.jsxs)("header", {
            className: T().navbar,
            ref: E,
            children: [
              (0, a.jsx)(b(), {
                href: "/" === w ? "/#intro" : "/",
                scroll: !1,
                children: (0, a.jsx)("a", {
                  "data-navbar-item": !0,
                  className: T().logo,
                  "aria-label": "Inspired By Dune, Emergence",
                  onClick: R,
                  children: (0, a.jsx)(p, { highlight: !0 }),
                }),
              }),
              (0, a.jsx)(O, {
                onClick: function () {
                  return d({ type: "toggleMenu" });
                },
                menuOpen: f,
              }),
              (0, a.jsxs)("nav", {
                className: T().nav,
                children: [
                  (0, a.jsx)("div", {
                    className: T().navList,
                    children: M.map(function (t) {
                      var e = t.label,
                        n = t.pathname;
                      return (0,
                      a.jsx)(b(), { href: n, scroll: !1, children: (0, a.jsx)("a", { "data-navbar-item": !0, className: T().navLink, "aria-current": _(n), onClick: P, children: e }) }, e);
                    }),
                  }),
                  (0, a.jsx)(L, { desktop: !0 }),
                ],
              }),
              (0, a.jsx)(m.u, {
                unmount: !0,
                in: f,
                timeout: (0, l.zG)(h.T.base.durationL),
                children: function (t) {
                  return (0, a.jsxs)("nav", {
                    className: T().mobileNav,
                    "data-visible": t,
                    children: [
                      M.map(function (e, n) {
                        var r = e.label,
                          o = e.pathname;
                        return (0,
                        a.jsx)(b(), { href: o, scroll: !1, children: (0, a.jsx)("a", { className: T().mobileNavLink, "data-visible": t, "aria-current": _(o), onClick: R, style: (0, l.Fh)({ transitionDelay: (0, l.aU)(Number((0, l.zG)(h.T.base.durationS)) + 50 * n) }), children: r }) }, r);
                      }),
                      (0, a.jsx)(L, {}),
                      (0, a.jsx)(k, { isMobile: !0 }),
                    ],
                  });
                },
              }),
              !C && (0, a.jsx)(k, { "data-navbar-item": !0 }),
            ],
          });
        },
        L = function (t) {
          var e = t.desktop;
          return (0, a.jsx)("div", {
            className: T().navIcons,
            children: _.map(function (t) {
              var n = t.label,
                r = t.url,
                o = t.icon;
              return (0,
              a.jsx)("a", { "data-navbar-item": e || void 0, className: T().navIconLink, "aria-label": n, href: r, target: "_blank", rel: "noopener noreferrer", children: (0, a.jsx)(u.J, { className: T().navIcon, icon: o }) }, n);
            }),
          });
        },
        R = n(2323),
        V = n(655),
        I = (0, s.createContext)({ strict: !1 }),
        N = function (t) {
          return {
            isEnabled: function (e) {
              return t.some(function (t) {
                return !!e[t];
              });
            },
          };
        },
        z = {
          measureLayout: N(["layout", "layoutId", "drag"]),
          animation: N([
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
            "whileInView",
          ]),
          exit: N(["exit"]),
          drag: N(["drag", "dragControls"]),
          focus: N(["whileFocus"]),
          hover: N(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: N(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: N(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: N(["whileInView", "onViewportEnter", "onViewportLeave"]),
        };
      function B(t) {
        for (var e in t)
          null !== t[e] &&
            ("projectionNodeConstructor" === e
              ? (z.projectionNodeConstructor = t[e])
              : (z[e].Component = t[e]));
      }
      function H(t) {
        var e = t.children,
          n = t.features,
          r = t.strict,
          o = void 0 !== r && r,
          i = (0, V.CR)((0, s.useState)(!Z(n)), 2)[1],
          a = (0, s.useRef)(void 0);
        if (!Z(n)) {
          var u = n.renderer,
            c = (0, V._T)(n, ["renderer"]);
          (a.current = u), B(c);
        }
        return (
          (0, s.useEffect)(function () {
            Z(n) &&
              n().then(function (t) {
                var e = t.renderer;
                B((0, V._T)(t, ["renderer"])), (a.current = e), i(!0);
              });
          }, []),
          s.createElement(
            I.Provider,
            { value: { renderer: a.current, strict: o } },
            e
          )
        );
      }
      function Z(t) {
        return "function" === typeof t;
      }
      function F(t) {
        return "object" === typeof t && "function" === typeof t.start;
      }
      var D = n(5947),
        U = n(240),
        W = n(8488);
      function Q(t, e) {
        if (!Array.isArray(e)) return !1;
        var n = e.length;
        if (n !== t.length) return !1;
        for (var r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      var $ = n(8899),
        Y = n(8407),
        X = function (t) {
          return /^0[^.\s]+$/.test(t);
        },
        q = n(8715),
        K = n(3234),
        G = n(9135),
        J = n(7405),
        tt = n(1248),
        et = n(2969),
        nt = function (t) {
          return function (e) {
            return e.test(t);
          };
        },
        rt = [
          tt.Rx,
          et.px,
          et.aQ,
          et.RW,
          et.vw,
          et.vh,
          {
            test: function (t) {
              return "auto" === t;
            },
            parse: function (t) {
              return t;
            },
          },
        ],
        ot = function (t) {
          return rt.find(nt(t));
        },
        it = (0, V.ev)((0, V.ev)([], (0, V.CR)(rt), !1), [J.$, Y.P], !1),
        at = function (t) {
          return it.find(nt(t));
        };
      function ut(t) {
        return Array.isArray(t);
      }
      function ct(t) {
        return "string" === typeof t || ut(t);
      }
      function st(t, e, n, r, o) {
        var i;
        return (
          void 0 === r && (r = {}),
          void 0 === o && (o = {}),
          "function" === typeof e &&
            (e = e(null !== n && void 0 !== n ? n : t.custom, r, o)),
          "string" === typeof e &&
            (e = null === (i = t.variants) || void 0 === i ? void 0 : i[e]),
          "function" === typeof e &&
            (e = e(null !== n && void 0 !== n ? n : t.custom, r, o)),
          e
        );
      }
      function lt(t, e, n) {
        var r = t.getProps();
        return st(
          r,
          e,
          null !== n && void 0 !== n ? n : r.custom,
          (function (t) {
            var e = {};
            return (
              t.forEachValue(function (t, n) {
                return (e[n] = t.get());
              }),
              e
            );
          })(t),
          (function (t) {
            var e = {};
            return (
              t.forEachValue(function (t, n) {
                return (e[n] = t.getVelocity());
              }),
              e
            );
          })(t)
        );
      }
      function ft(t) {
        var e;
        return (
          "function" ===
            typeof (null === (e = t.animate) || void 0 === e
              ? void 0
              : e.start) ||
          ct(t.initial) ||
          ct(t.animate) ||
          ct(t.whileHover) ||
          ct(t.whileDrag) ||
          ct(t.whileTap) ||
          ct(t.whileFocus) ||
          ct(t.exit)
        );
      }
      function dt(t) {
        return Boolean(ft(t) || t.variants);
      }
      function pt(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, (0, K.B)(n));
      }
      function vt(t, e) {
        var n = lt(t, e),
          r = n ? t.makeTargetAnimatable(n, !1) : {},
          o = r.transitionEnd,
          i = void 0 === o ? {} : o;
        r.transition;
        var a = (0, V._T)(r, ["transitionEnd", "transition"]);
        for (var u in (a = (0, V.pi)((0, V.pi)({}, a), i))) {
          pt(t, u, (0, q.Y)(a[u]));
        }
      }
      function ht(t, e) {
        if (e) return (e[t] || e.default || e).from;
      }
      var mt = ["", "X", "Y", "Z"],
        gt = ["transformPerspective", "x", "y", "z"];
      function yt(t, e) {
        return gt.indexOf(t) - gt.indexOf(e);
      }
      ["translate", "scale", "rotate", "skew"].forEach(function (t) {
        return mt.forEach(function (e) {
          return gt.push(t + e);
        });
      });
      var bt = new Set(gt);
      function xt(t) {
        return bt.has(t);
      }
      var wt = new Set(["originX", "originY", "originZ"]);
      function St(t) {
        return wt.has(t);
      }
      var jt,
        Ot = n(406);
      function Et(t) {
        return Boolean((0, Ot.i)(t) && t.add);
      }
      function Tt(t, e, n) {
        var r;
        void 0 === n && (n = {});
        var o = lt(t, e, n.custom),
          i = (o || {}).transition,
          a = void 0 === i ? t.getDefaultTransition() || {} : i;
        n.transitionOverride && (a = n.transitionOverride);
        var u = o
            ? function () {
                return Ct(t, o, n);
              }
            : function () {
                return Promise.resolve();
              },
          c = (
            null === (r = t.variantChildren) || void 0 === r ? void 0 : r.size
          )
            ? function (r) {
                void 0 === r && (r = 0);
                var o = a.delayChildren,
                  i = void 0 === o ? 0 : o,
                  u = a.staggerChildren,
                  c = a.staggerDirection;
                return (function (t, e, n, r, o, i) {
                  void 0 === n && (n = 0);
                  void 0 === r && (r = 0);
                  void 0 === o && (o = 1);
                  var a = [],
                    u = (t.variantChildren.size - 1) * r,
                    c =
                      1 === o
                        ? function (t) {
                            return void 0 === t && (t = 0), t * r;
                          }
                        : function (t) {
                            return void 0 === t && (t = 0), u - t * r;
                          };
                  return (
                    Array.from(t.variantChildren)
                      .sort(At)
                      .forEach(function (t, r) {
                        a.push(
                          Tt(
                            t,
                            e,
                            (0, V.pi)((0, V.pi)({}, i), { delay: n + c(r) })
                          ).then(function () {
                            return t.notifyAnimationComplete(e);
                          })
                        );
                      }),
                    Promise.all(a)
                  );
                })(t, e, i + r, u, c, n);
              }
            : function () {
                return Promise.resolve();
              },
          s = a.when;
        if (s) {
          var l = (0, V.CR)("beforeChildren" === s ? [u, c] : [c, u], 2),
            f = l[0],
            d = l[1];
          return f().then(d);
        }
        return Promise.all([u(), c(n.delay)]);
      }
      function Ct(t, e, n) {
        var r,
          o = void 0 === n ? {} : n,
          i = o.delay,
          a = void 0 === i ? 0 : i,
          u = o.transitionOverride,
          c = o.type,
          s = t.makeTargetAnimatable(e),
          l = s.transition,
          f = void 0 === l ? t.getDefaultTransition() : l,
          d = s.transitionEnd,
          p = (0, V._T)(s, ["transition", "transitionEnd"]),
          v = t.getValue("willChange");
        u && (f = u);
        var h = [],
          m =
            c &&
            (null === (r = t.animationState) || void 0 === r
              ? void 0
              : r.getState()[c]),
          g = function (e) {
            var n = t.getValue(e),
              r = p[e];
            if (
              !n ||
              void 0 === r ||
              (m &&
                (function (t, e) {
                  var n = t.protectedKeys,
                    r = t.needsAnimating,
                    o = n.hasOwnProperty(e) && !0 !== r[e];
                  return (r[e] = !1), o;
                })(m, e))
            )
              return "continue";
            var o = (0, V.pi)({ delay: a }, f);
            t.shouldReduceMotion &&
              xt(e) &&
              (o = (0, V.pi)((0, V.pi)({}, o), { type: !1, delay: 0 }));
            var i = (0, $.b8)(e, n, r, o);
            Et(v) &&
              (v.add(e),
              (i = i.then(function () {
                return v.remove(e);
              }))),
              h.push(i);
          };
        for (var y in p) g(y);
        return Promise.all(h).then(function () {
          d && vt(t, d);
        });
      }
      function At(t, e) {
        return t.sortNodePosition(e);
      }
      !(function (t) {
        (t.Animate = "animate"),
          (t.Hover = "whileHover"),
          (t.Tap = "whileTap"),
          (t.Drag = "whileDrag"),
          (t.Focus = "whileFocus"),
          (t.InView = "whileInView"),
          (t.Exit = "exit");
      })(jt || (jt = {}));
      var kt = [
          jt.Animate,
          jt.InView,
          jt.Focus,
          jt.Hover,
          jt.Tap,
          jt.Drag,
          jt.Exit,
        ],
        Mt = (0, V.ev)([], (0, V.CR)(kt), !1).reverse(),
        _t = kt.length;
      function Pt(t) {
        return function (e) {
          return Promise.all(
            e.map(function (e) {
              var n = e.animation,
                r = e.options;
              return (function (t, e, n) {
                var r;
                if (
                  (void 0 === n && (n = {}),
                  t.notifyAnimationStart(e),
                  Array.isArray(e))
                ) {
                  var o = e.map(function (e) {
                    return Tt(t, e, n);
                  });
                  r = Promise.all(o);
                } else if ("string" === typeof e) r = Tt(t, e, n);
                else {
                  var i = "function" === typeof e ? lt(t, e, n.custom) : e;
                  r = Ct(t, i, n);
                }
                return r.then(function () {
                  return t.notifyAnimationComplete(e);
                });
              })(t, n, r);
            })
          );
        };
      }
      function Lt(t) {
        var e = Pt(t),
          n = (function () {
            var t;
            return (
              ((t = {})[jt.Animate] = Rt(!0)),
              (t[jt.InView] = Rt()),
              (t[jt.Hover] = Rt()),
              (t[jt.Tap] = Rt()),
              (t[jt.Drag] = Rt()),
              (t[jt.Focus] = Rt()),
              (t[jt.Exit] = Rt()),
              t
            );
          })(),
          r = !0,
          o = function (e, n) {
            var r = lt(t, n);
            if (r) {
              r.transition;
              var o = r.transitionEnd,
                i = (0, V._T)(r, ["transition", "transitionEnd"]);
              e = (0, V.pi)((0, V.pi)((0, V.pi)({}, e), i), o);
            }
            return e;
          };
        function i(i, a) {
          for (
            var u,
              c = t.getProps(),
              s = t.getVariantContext(!0) || {},
              l = [],
              f = new Set(),
              d = {},
              p = 1 / 0,
              v = function (e) {
                var v = Mt[e],
                  h = n[v],
                  m = null !== (u = c[v]) && void 0 !== u ? u : s[v],
                  g = ct(m),
                  y = v === a ? h.isActive : null;
                !1 === y && (p = e);
                var b = m === s[v] && m !== c[v] && g;
                if (
                  (b && r && t.manuallyAnimateOnMount && (b = !1),
                  (h.protectedKeys = (0, V.pi)({}, d)),
                  (!h.isActive && null === y) ||
                    (!m && !h.prevProp) ||
                    F(m) ||
                    "boolean" === typeof m)
                )
                  return "continue";
                var x = (function (t, e) {
                    if ("string" === typeof e) return e !== t;
                    if (ut(e)) return !Q(e, t);
                    return !1;
                  })(h.prevProp, m),
                  w = x || (v === a && h.isActive && !b && g) || (e > p && g),
                  S = Array.isArray(m) ? m : [m],
                  j = S.reduce(o, {});
                !1 === y && (j = {});
                var O = h.prevResolvedValues,
                  E = void 0 === O ? {} : O,
                  T = (0, V.pi)((0, V.pi)({}, E), j),
                  C = function (t) {
                    (w = !0), f.delete(t), (h.needsAnimating[t] = !0);
                  };
                for (var A in T) {
                  var k = j[A],
                    M = E[A];
                  d.hasOwnProperty(A) ||
                    (k !== M
                      ? (0, W.C)(k) && (0, W.C)(M)
                        ? !Q(k, M) || x
                          ? C(A)
                          : (h.protectedKeys[A] = !0)
                        : void 0 !== k
                        ? C(A)
                        : f.add(A)
                      : void 0 !== k && f.has(A)
                      ? C(A)
                      : (h.protectedKeys[A] = !0));
                }
                (h.prevProp = m),
                  (h.prevResolvedValues = j),
                  h.isActive && (d = (0, V.pi)((0, V.pi)({}, d), j)),
                  r && t.blockInitialAnimation && (w = !1),
                  w &&
                    !b &&
                    l.push.apply(
                      l,
                      (0, V.ev)(
                        [],
                        (0, V.CR)(
                          S.map(function (t) {
                            return {
                              animation: t,
                              options: (0, V.pi)({ type: v }, i),
                            };
                          })
                        ),
                        !1
                      )
                    );
              },
              h = 0;
            h < _t;
            h++
          )
            v(h);
          if (f.size) {
            var m = {};
            f.forEach(function (e) {
              var n = t.getBaseTarget(e);
              void 0 !== n && (m[e] = n);
            }),
              l.push({ animation: m });
          }
          var g = Boolean(l.length);
          return (
            r && !1 === c.initial && !t.manuallyAnimateOnMount && (g = !1),
            (r = !1),
            g ? e(l) : Promise.resolve()
          );
        }
        return {
          animateChanges: i,
          setActive: function (e, r, o) {
            var a;
            if (n[e].isActive === r) return Promise.resolve();
            null === (a = t.variantChildren) ||
              void 0 === a ||
              a.forEach(function (t) {
                var n;
                return null === (n = t.animationState) || void 0 === n
                  ? void 0
                  : n.setActive(e, r);
              }),
              (n[e].isActive = r);
            var u = i(o, e);
            for (var c in n) n[c].protectedKeys = {};
            return u;
          },
          setAnimateFunction: function (n) {
            e = n(t);
          },
          getState: function () {
            return n;
          },
        };
      }
      function Rt(t) {
        return (
          void 0 === t && (t = !1),
          {
            isActive: t,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {},
          }
        );
      }
      var Vt = function (t) {
          return function (e) {
            return t(e), null;
          };
        },
        It = {
          animation: Vt(function (t) {
            var e = t.visualElement,
              n = t.animate;
            e.animationState || (e.animationState = Lt(e)),
              F(n) &&
                (0, s.useEffect)(
                  function () {
                    return n.subscribe(e);
                  },
                  [n]
                );
          }),
          exit: Vt(function (t) {
            var e = t.custom,
              n = t.visualElement,
              r = (0, V.CR)((0, D.oO)(), 2),
              o = r[0],
              i = r[1],
              a = (0, s.useContext)(U.O);
            (0, s.useEffect)(
              function () {
                var t, r;
                n.isPresent = o;
                var u =
                  null === (t = n.animationState) || void 0 === t
                    ? void 0
                    : t.setActive(jt.Exit, !o, {
                        custom:
                          null !==
                            (r =
                              null === a || void 0 === a ? void 0 : a.custom) &&
                          void 0 !== r
                            ? r
                            : e,
                      });
                !o && (null === u || void 0 === u || u.then(i));
              },
              [o]
            );
          }),
        };
      function Nt(t, e, n, r) {
        return (
          void 0 === r && (r = { passive: !0 }),
          t.addEventListener(e, n, r),
          function () {
            return t.removeEventListener(e, n);
          }
        );
      }
      function zt(t, e, n, r) {
        (0, s.useEffect)(
          function () {
            var o = t.current;
            if (n && o) return Nt(o, e, n, r);
          },
          [t, e, n, r]
        );
      }
      function Bt(t) {
        return !!t.touches;
      }
      var Ht = { pageX: 0, pageY: 0 };
      function Zt(t, e) {
        void 0 === e && (e = "page");
        var n = t.touches[0] || t.changedTouches[0] || Ht;
        return { x: n[e + "X"], y: n[e + "Y"] };
      }
      function Ft(t, e) {
        return void 0 === e && (e = "page"), { x: t[e + "X"], y: t[e + "Y"] };
      }
      var Dt = function (t, e) {
          void 0 === e && (e = !1);
          var n,
            r = function (e) {
              return t(
                e,
                (function (t, e) {
                  return (
                    void 0 === e && (e = "page"),
                    { point: Bt(t) ? Zt(t, e) : Ft(t, e) }
                  );
                })(e)
              );
            };
          return e
            ? ((n = r),
              function (t) {
                var e = t instanceof MouseEvent;
                (!e || (e && 0 === t.button)) && n(t);
              })
            : r;
        },
        Ut = n(1741),
        Wt = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave",
        },
        Qt = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel",
        };
      function $t(t) {
        return Ut.j && null === window.onpointerdown
          ? t
          : Ut.j && null === window.ontouchstart
          ? Qt[t]
          : Ut.j && null === window.onmousedown
          ? Wt[t]
          : t;
      }
      function Yt(t, e, n, r) {
        return Nt(t, $t(e), Dt(n, "pointerdown" === e), r);
      }
      function Xt(t, e, n, r) {
        return zt(t, $t(e), n && Dt(n, "pointerdown" === e), r);
      }
      function qt(t) {
        var e = null;
        return function () {
          return (
            null === e &&
            ((e = t),
            function () {
              e = null;
            })
          );
        };
      }
      var Kt = qt("dragHorizontal"),
        Gt = qt("dragVertical");
      function Jt() {
        var t = (function (t) {
          var e = !1;
          if ("y" === t) e = Gt();
          else if ("x" === t) e = Kt();
          else {
            var n = Kt(),
              r = Gt();
            n && r
              ? (e = function () {
                  n(), r();
                })
              : (n && n(), r && r());
          }
          return e;
        })(!0);
        return !t || (t(), !1);
      }
      function te(t, e, n) {
        return function (r, o) {
          var i;
          (function (t) {
            return "undefined" !== typeof PointerEvent &&
              t instanceof PointerEvent
              ? !("mouse" !== t.pointerType)
              : t instanceof MouseEvent;
          })(r) &&
            !Jt() &&
            (null === (i = t.animationState) ||
              void 0 === i ||
              i.setActive(jt.Hover, e),
            null === n || void 0 === n || n(r, o));
        };
      }
      var ee = function (t, e) {
          return !!e && (t === e || ee(t, e.parentElement));
        },
        ne = n(5411),
        re = n(9897);
      var oe = n(9304),
        ie = new Set();
      var ae = new WeakMap(),
        ue = new WeakMap(),
        ce = function (t) {
          var e;
          null === (e = ae.get(t.target)) || void 0 === e || e(t);
        },
        se = function (t) {
          t.forEach(ce);
        };
      function le(t, e, n) {
        var r = (function (t) {
          var e = t.root,
            n = (0, V._T)(t, ["root"]),
            r = e || document;
          ue.has(r) || ue.set(r, {});
          var o = ue.get(r),
            i = JSON.stringify(n);
          return (
            o[i] ||
              (o[i] = new IntersectionObserver(se, (0, V.pi)({ root: e }, n))),
            o[i]
          );
        })(e);
        return (
          ae.set(t, n),
          r.observe(t),
          function () {
            ae.delete(t), r.unobserve(t);
          }
        );
      }
      var fe = { some: 0, all: 1 };
      function de(t, e, n, r) {
        var o = r.root,
          i = r.margin,
          a = r.amount,
          u = void 0 === a ? "some" : a,
          c = r.once;
        (0, s.useEffect)(
          function () {
            if (t) {
              var r = {
                root: null === o || void 0 === o ? void 0 : o.current,
                rootMargin: i,
                threshold: "number" === typeof u ? u : fe[u],
              };
              return le(n.getInstance(), r, function (t) {
                var r,
                  o = t.isIntersecting;
                if (
                  e.isInView !== o &&
                  ((e.isInView = o), !c || o || !e.hasEnteredView)
                ) {
                  o && (e.hasEnteredView = !0),
                    null === (r = n.animationState) ||
                      void 0 === r ||
                      r.setActive(jt.InView, o);
                  var i = n.getProps(),
                    a = o ? i.onViewportEnter : i.onViewportLeave;
                  null === a || void 0 === a || a(t);
                }
              });
            }
          },
          [t, o, i, u]
        );
      }
      function pe(t, e, n, r) {
        var o = r.fallback,
          i = void 0 === o || o;
        (0, s.useEffect)(
          function () {
            var r, o;
            t &&
              i &&
              ("production" !== oe.O &&
                ((r =
                  "IntersectionObserver not available on this device. whileInView animations will trigger on mount."),
                !1 ||
                  ie.has(r) ||
                  (console.warn(r), o && console.warn(o), ie.add(r))),
              requestAnimationFrame(function () {
                var t;
                e.hasEnteredView = !0;
                var r = n.getProps().onViewportEnter;
                null === r || void 0 === r || r(null),
                  null === (t = n.animationState) ||
                    void 0 === t ||
                    t.setActive(jt.InView, !0);
              }));
          },
          [t]
        );
      }
      var ve = {
          inView: Vt(function (t) {
            var e = t.visualElement,
              n = t.whileInView,
              r = t.onViewportEnter,
              o = t.onViewportLeave,
              i = t.viewport,
              a = void 0 === i ? {} : i,
              u = (0, s.useRef)({ hasEnteredView: !1, isInView: !1 }),
              c = Boolean(n || r || o);
            a.once && u.current.hasEnteredView && (c = !1),
              ("undefined" === typeof IntersectionObserver ? pe : de)(
                c,
                u.current,
                e,
                a
              );
          }),
          tap: Vt(function (t) {
            var e = t.onTap,
              n = t.onTapStart,
              r = t.onTapCancel,
              o = t.whileTap,
              i = t.visualElement,
              a = e || n || r || o,
              u = (0, s.useRef)(!1),
              c = (0, s.useRef)(null),
              l = { passive: !(n || e || r || h) };
            function f() {
              var t;
              null === (t = c.current) || void 0 === t || t.call(c),
                (c.current = null);
            }
            function d() {
              var t;
              return (
                f(),
                (u.current = !1),
                null === (t = i.animationState) ||
                  void 0 === t ||
                  t.setActive(jt.Tap, !1),
                !Jt()
              );
            }
            function p(t, n) {
              d() &&
                (ee(i.getInstance(), t.target)
                  ? null === e || void 0 === e || e(t, n)
                  : null === r || void 0 === r || r(t, n));
            }
            function v(t, e) {
              d() && (null === r || void 0 === r || r(t, e));
            }
            function h(t, e) {
              var r;
              f(),
                u.current ||
                  ((u.current = !0),
                  (c.current = (0, re.z)(
                    Yt(window, "pointerup", p, l),
                    Yt(window, "pointercancel", v, l)
                  )),
                  null === (r = i.animationState) ||
                    void 0 === r ||
                    r.setActive(jt.Tap, !0),
                  null === n || void 0 === n || n(t, e));
            }
            Xt(i, "pointerdown", a ? h : void 0, l), (0, ne.z)(f);
          }),
          focus: Vt(function (t) {
            var e = t.whileFocus,
              n = t.visualElement;
            zt(
              n,
              "focus",
              e
                ? function () {
                    var t;
                    null === (t = n.animationState) ||
                      void 0 === t ||
                      t.setActive(jt.Focus, !0);
                  }
                : void 0
            ),
              zt(
                n,
                "blur",
                e
                  ? function () {
                      var t;
                      null === (t = n.animationState) ||
                        void 0 === t ||
                        t.setActive(jt.Focus, !1);
                    }
                  : void 0
              );
          }),
          hover: Vt(function (t) {
            var e = t.onHoverStart,
              n = t.onHoverEnd,
              r = t.whileHover,
              o = t.visualElement;
            Xt(o, "pointerenter", e || r ? te(o, !0, e) : void 0, {
              passive: !e,
            }),
              Xt(o, "pointerleave", n || r ? te(o, !1, n) : void 0, {
                passive: !n,
              });
          }),
        },
        he = n(4735),
        me = n(5985),
        ge = [
          "LayoutMeasure",
          "BeforeLayoutMeasure",
          "LayoutUpdate",
          "ViewportBoxUpdate",
          "Update",
          "Render",
          "AnimationComplete",
          "LayoutAnimationComplete",
          "AnimationStart",
          "LayoutAnimationStart",
          "SetAxisTarget",
          "Unmount",
        ];
      var ye = function (t) {
          var e = t.treeType,
            n = void 0 === e ? "" : e,
            r = t.build,
            o = t.getBaseTarget,
            i = t.makeTargetAnimatable,
            a = t.measureViewportBox,
            u = t.render,
            c = t.readValueFromInstance,
            s = t.removeValueFromRenderState,
            l = t.sortNodePosition,
            f = t.scrapeMotionValuesFromProps;
          return function (t, e) {
            var d = t.parent,
              p = t.props,
              v = t.presenceId,
              h = t.blockInitialAnimation,
              m = t.visualState,
              g = t.shouldReduceMotion;
            void 0 === e && (e = {});
            var y,
              b,
              x = !1,
              w = m.latestValues,
              S = m.renderState,
              j = (function () {
                var t = ge.map(function () {
                    return new me.L();
                  }),
                  e = {},
                  n = {
                    clearAllListeners: function () {
                      return t.forEach(function (t) {
                        return t.clear();
                      });
                    },
                    updatePropListeners: function (t) {
                      ge.forEach(function (r) {
                        var o,
                          i = "on" + r,
                          a = t[i];
                        null === (o = e[r]) || void 0 === o || o.call(e),
                          a && (e[r] = n[i](a));
                      });
                    },
                  };
                return (
                  t.forEach(function (t, e) {
                    (n["on" + ge[e]] = function (e) {
                      return t.add(e);
                    }),
                      (n["notify" + ge[e]] = function () {
                        for (var e = [], n = 0; n < arguments.length; n++)
                          e[n] = arguments[n];
                        return t.notify.apply(
                          t,
                          (0, V.ev)([], (0, V.CR)(e), !1)
                        );
                      });
                  }),
                  n
                );
              })(),
              O = new Map(),
              E = new Map(),
              T = {},
              C = (0, V.pi)({}, w);
            function A() {
              y && x && (k(), u(y, S, p.style, H.projection));
            }
            function k() {
              r(H, S, w, e, p);
            }
            function M() {
              j.notifyUpdate(w);
            }
            function _(t, e) {
              var n = e.onChange(function (e) {
                  (w[t] = e), p.onUpdate && he.ZP.update(M, !1, !0);
                }),
                r = e.onRenderRequest(H.scheduleRender);
              E.set(t, function () {
                n(), r();
              });
            }
            var P = f(p),
              L = P.willChange,
              R = (0, V._T)(P, ["willChange"]);
            for (var I in R) {
              var N = R[I];
              void 0 !== w[I] &&
                (0, Ot.i)(N) &&
                (N.set(w[I], !1), Et(L) && L.add(I));
            }
            var z = ft(p),
              B = dt(p),
              H = (0, V.pi)(
                (0, V.pi)(
                  {
                    treeType: n,
                    current: null,
                    depth: d ? d.depth + 1 : 0,
                    parent: d,
                    children: new Set(),
                    presenceId: v,
                    shouldReduceMotion: g,
                    variantChildren: B ? new Set() : void 0,
                    isVisible: void 0,
                    manuallyAnimateOnMount: Boolean(
                      null === d || void 0 === d ? void 0 : d.isMounted()
                    ),
                    blockInitialAnimation: h,
                    isMounted: function () {
                      return Boolean(y);
                    },
                    mount: function (t) {
                      (x = !0),
                        (y = H.current = t),
                        H.projection && H.projection.mount(t),
                        B &&
                          d &&
                          !z &&
                          (b =
                            null === d || void 0 === d
                              ? void 0
                              : d.addVariantChild(H)),
                        O.forEach(function (t, e) {
                          return _(e, t);
                        }),
                        null === d || void 0 === d || d.children.add(H),
                        H.setProps(p);
                    },
                    unmount: function () {
                      var t;
                      null === (t = H.projection) ||
                        void 0 === t ||
                        t.unmount(),
                        he.qY.update(M),
                        he.qY.render(A),
                        E.forEach(function (t) {
                          return t();
                        }),
                        null === b || void 0 === b || b(),
                        null === d || void 0 === d || d.children.delete(H),
                        j.clearAllListeners(),
                        (y = void 0),
                        (x = !1);
                    },
                    addVariantChild: function (t) {
                      var e,
                        n = H.getClosestVariantNode();
                      if (n)
                        return (
                          null === (e = n.variantChildren) ||
                            void 0 === e ||
                            e.add(t),
                          function () {
                            return n.variantChildren.delete(t);
                          }
                        );
                    },
                    sortNodePosition: function (t) {
                      return l && n === t.treeType
                        ? l(H.getInstance(), t.getInstance())
                        : 0;
                    },
                    getClosestVariantNode: function () {
                      return B
                        ? H
                        : null === d || void 0 === d
                        ? void 0
                        : d.getClosestVariantNode();
                    },
                    getLayoutId: function () {
                      return p.layoutId;
                    },
                    getInstance: function () {
                      return y;
                    },
                    getStaticValue: function (t) {
                      return w[t];
                    },
                    setStaticValue: function (t, e) {
                      return (w[t] = e);
                    },
                    getLatestValues: function () {
                      return w;
                    },
                    setVisibility: function (t) {
                      H.isVisible !== t &&
                        ((H.isVisible = t), H.scheduleRender());
                    },
                    makeTargetAnimatable: function (t, e) {
                      return void 0 === e && (e = !0), i(H, t, p, e);
                    },
                    measureViewportBox: function () {
                      return a(y, p);
                    },
                    addValue: function (t, e) {
                      H.hasValue(t) && H.removeValue(t),
                        O.set(t, e),
                        (w[t] = e.get()),
                        _(t, e);
                    },
                    removeValue: function (t) {
                      var e;
                      O.delete(t),
                        null === (e = E.get(t)) || void 0 === e || e(),
                        E.delete(t),
                        delete w[t],
                        s(t, S);
                    },
                    hasValue: function (t) {
                      return O.has(t);
                    },
                    getValue: function (t, e) {
                      var n = O.get(t);
                      return (
                        void 0 === n &&
                          void 0 !== e &&
                          ((n = (0, K.B)(e)), H.addValue(t, n)),
                        n
                      );
                    },
                    forEachValue: function (t) {
                      return O.forEach(t);
                    },
                    readValue: function (t) {
                      var n;
                      return null !== (n = w[t]) && void 0 !== n
                        ? n
                        : c(y, t, e);
                    },
                    setBaseTarget: function (t, e) {
                      C[t] = e;
                    },
                    getBaseTarget: function (t) {
                      if (o) {
                        var e = o(p, t);
                        if (void 0 !== e && !(0, Ot.i)(e)) return e;
                      }
                      return C[t];
                    },
                  },
                  j
                ),
                {
                  build: function () {
                    return k(), S;
                  },
                  scheduleRender: function () {
                    he.ZP.render(A, !1, !0);
                  },
                  syncRender: A,
                  setProps: function (t) {
                    (t.transformTemplate || p.transformTemplate) &&
                      H.scheduleRender(),
                      (p = t),
                      j.updatePropListeners(t),
                      (T = (function (t, e, n) {
                        var r,
                          o = e.willChange;
                        for (var i in e) {
                          var a = e[i],
                            u = n[i];
                          if ((0, Ot.i)(a)) t.addValue(i, a), Et(o) && o.add(i);
                          else if ((0, Ot.i)(u))
                            t.addValue(i, (0, K.B)(a)), Et(o) && o.remove(i);
                          else if (u !== a)
                            if (t.hasValue(i)) {
                              var c = t.getValue(i);
                              !c.hasAnimated && c.set(a);
                            } else
                              t.addValue(
                                i,
                                (0, K.B)(
                                  null !== (r = t.getStaticValue(i)) &&
                                    void 0 !== r
                                    ? r
                                    : a
                                )
                              );
                        }
                        for (var i in n) void 0 === e[i] && t.removeValue(i);
                        return e;
                      })(H, f(p), T));
                  },
                  getProps: function () {
                    return p;
                  },
                  getVariant: function (t) {
                    var e;
                    return null === (e = p.variants) || void 0 === e
                      ? void 0
                      : e[t];
                  },
                  getDefaultTransition: function () {
                    return p.transition;
                  },
                  getTransformPagePoint: function () {
                    return p.transformPagePoint;
                  },
                  getVariantContext: function (t) {
                    if ((void 0 === t && (t = !1), t))
                      return null === d || void 0 === d
                        ? void 0
                        : d.getVariantContext();
                    if (!z) {
                      var e =
                        (null === d || void 0 === d
                          ? void 0
                          : d.getVariantContext()) || {};
                      return void 0 !== p.initial && (e.initial = p.initial), e;
                    }
                    for (var n = {}, r = 0; r < xe; r++) {
                      var o = be[r],
                        i = p[o];
                      (ct(i) || !1 === i) && (n[o] = i);
                    }
                    return n;
                  },
                }
              );
            return H;
          };
        },
        be = (0, V.ev)(["initial"], (0, V.CR)(kt), !1),
        xe = be.length,
        we = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        };
      function Se(t) {
        return t.startsWith("--");
      }
      var je = function (t, e) {
          return e && "number" === typeof t ? e.transform(t) : t;
        },
        Oe = n(6173);
      function Ee(t, e, n, r) {
        var o,
          i = t.style,
          a = t.vars,
          u = t.transform,
          c = t.transformKeys,
          s = t.transformOrigin;
        c.length = 0;
        var l = !1,
          f = !1,
          d = !0;
        for (var p in e) {
          var v = e[p];
          if (Se(p)) a[p] = v;
          else {
            var h = Oe.j[p],
              m = je(v, h);
            if (xt(p)) {
              if (((l = !0), (u[p] = m), c.push(p), !d)) continue;
              v !== (null !== (o = h.default) && void 0 !== o ? o : 0) &&
                (d = !1);
            } else St(p) ? ((s[p] = m), (f = !0)) : (i[p] = m);
          }
        }
        l
          ? (i.transform = (function (t, e, n, r) {
              var o = t.transform,
                i = t.transformKeys,
                a = e.enableHardwareAcceleration,
                u = void 0 === a || a,
                c = e.allowTransformNone,
                s = void 0 === c || c,
                l = "";
              i.sort(yt);
              for (var f = !1, d = i.length, p = 0; p < d; p++) {
                var v = i[p];
                (l += "".concat(we[v] || v, "(").concat(o[v], ") ")),
                  "z" === v && (f = !0);
              }
              return (
                !f && u && (l += "translateZ(0)"),
                (l = l.trim()),
                r ? (l = r(o, n ? "" : l)) : s && n && (l = "none"),
                l
              );
            })(t, n, d, r))
          : r
          ? (i.transform = r({}, ""))
          : !e.transform && i.transform && (i.transform = "none"),
          f &&
            (i.transformOrigin = (function (t) {
              var e = t.originX,
                n = void 0 === e ? "50%" : e,
                r = t.originY,
                o = void 0 === r ? "50%" : r,
                i = t.originZ,
                a = void 0 === i ? 0 : i;
              return "".concat(n, " ").concat(o, " ").concat(a);
            })(s));
      }
      var Te = n(4394);
      function Ce(t) {
        return "string" === typeof t && t.startsWith("var(--");
      }
      var Ae = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function ke(t, e, n) {
        void 0 === n && (n = 1),
          (0, Te.k)(
            n <= 4,
            'Max CSS variable fallback depth detected in property "'.concat(
              t,
              '". This may indicate a circular fallback dependency.'
            )
          );
        var r = (0, V.CR)(
            (function (t) {
              var e = Ae.exec(t);
              if (!e) return [,];
              var n = (0, V.CR)(e, 3);
              return [n[1], n[2]];
            })(t),
            2
          ),
          o = r[0],
          i = r[1];
        if (o) {
          var a = window.getComputedStyle(e).getPropertyValue(o);
          return a ? a.trim() : Ce(i) ? ke(i, e, n + 1) : i;
        }
      }
      var Me,
        _e = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        Pe = function (t) {
          return _e.has(t);
        },
        Le = function (t, e) {
          t.set(e, !1), t.set(e);
        },
        Re = function (t) {
          return t === tt.Rx || t === et.px;
        };
      !(function (t) {
        (t.width = "width"),
          (t.height = "height"),
          (t.left = "left"),
          (t.right = "right"),
          (t.top = "top"),
          (t.bottom = "bottom");
      })(Me || (Me = {}));
      var Ve = function (t, e) {
          return parseFloat(t.split(", ")[e]);
        },
        Ie = function (t, e) {
          return function (n, r) {
            var o = r.transform;
            if ("none" === o || !o) return 0;
            var i = o.match(/^matrix3d\((.+)\)$/);
            if (i) return Ve(i[1], e);
            var a = o.match(/^matrix\((.+)\)$/);
            return a ? Ve(a[1], t) : 0;
          };
        },
        Ne = new Set(["x", "y", "z"]),
        ze = gt.filter(function (t) {
          return !Ne.has(t);
        });
      var Be = {
          width: function (t, e) {
            var n = t.x,
              r = e.paddingLeft,
              o = void 0 === r ? "0" : r,
              i = e.paddingRight,
              a = void 0 === i ? "0" : i;
            return n.max - n.min - parseFloat(o) - parseFloat(a);
          },
          height: function (t, e) {
            var n = t.y,
              r = e.paddingTop,
              o = void 0 === r ? "0" : r,
              i = e.paddingBottom,
              a = void 0 === i ? "0" : i;
            return n.max - n.min - parseFloat(o) - parseFloat(a);
          },
          top: function (t, e) {
            var n = e.top;
            return parseFloat(n);
          },
          left: function (t, e) {
            var n = e.left;
            return parseFloat(n);
          },
          bottom: function (t, e) {
            var n = t.y,
              r = e.top;
            return parseFloat(r) + (n.max - n.min);
          },
          right: function (t, e) {
            var n = t.x,
              r = e.left;
            return parseFloat(r) + (n.max - n.min);
          },
          x: Ie(4, 13),
          y: Ie(5, 14),
        },
        He = function (t, e, n, r) {
          void 0 === n && (n = {}),
            void 0 === r && (r = {}),
            (e = (0, V.pi)({}, e)),
            (r = (0, V.pi)({}, r));
          var o = Object.keys(e).filter(Pe),
            i = [],
            a = !1,
            u = [];
          if (
            (o.forEach(function (o) {
              var c = t.getValue(o);
              if (t.hasValue(o)) {
                var s,
                  l = n[o],
                  f = ot(l),
                  d = e[o];
                if ((0, W.C)(d)) {
                  var p = d.length,
                    v = null === d[0] ? 1 : 0;
                  (l = d[v]), (f = ot(l));
                  for (var h = v; h < p; h++)
                    s
                      ? (0, Te.k)(
                          ot(d[h]) === s,
                          "All keyframes must be of the same type"
                        )
                      : ((s = ot(d[h])),
                        (0, Te.k)(
                          s === f || (Re(f) && Re(s)),
                          "Keyframes must be of the same dimension as the current value"
                        ));
                } else s = ot(d);
                if (f !== s)
                  if (Re(f) && Re(s)) {
                    var m = c.get();
                    "string" === typeof m && c.set(parseFloat(m)),
                      "string" === typeof d
                        ? (e[o] = parseFloat(d))
                        : Array.isArray(d) &&
                          s === et.px &&
                          (e[o] = d.map(parseFloat));
                  } else
                    (null === f || void 0 === f ? void 0 : f.transform) &&
                    (null === s || void 0 === s ? void 0 : s.transform) &&
                    (0 === l || 0 === d)
                      ? 0 === l
                        ? c.set(s.transform(l))
                        : (e[o] = f.transform(d))
                      : (a ||
                          ((i = (function (t) {
                            var e = [];
                            return (
                              ze.forEach(function (n) {
                                var r = t.getValue(n);
                                void 0 !== r &&
                                  (e.push([n, r.get()]),
                                  r.set(n.startsWith("scale") ? 1 : 0));
                              }),
                              e.length && t.syncRender(),
                              e
                            );
                          })(t)),
                          (a = !0)),
                        u.push(o),
                        (r[o] = void 0 !== r[o] ? r[o] : e[o]),
                        Le(c, d));
              }
            }),
            u.length)
          ) {
            var c = u.indexOf("height") >= 0 ? window.pageYOffset : null,
              s = (function (t, e, n) {
                var r = e.measureViewportBox(),
                  o = e.getInstance(),
                  i = getComputedStyle(o),
                  a = i.display,
                  u = {};
                "none" === a &&
                  e.setStaticValue("display", t.display || "block"),
                  n.forEach(function (t) {
                    u[t] = Be[t](r, i);
                  }),
                  e.syncRender();
                var c = e.measureViewportBox();
                return (
                  n.forEach(function (n) {
                    var r = e.getValue(n);
                    Le(r, u[n]), (t[n] = Be[n](c, i));
                  }),
                  t
                );
              })(e, t, u);
            return (
              i.length &&
                i.forEach(function (e) {
                  var n = (0, V.CR)(e, 2),
                    r = n[0],
                    o = n[1];
                  t.getValue(r).set(o);
                }),
              t.syncRender(),
              Ut.j && null !== c && window.scrollTo({ top: c }),
              { target: s, transitionEnd: r }
            );
          }
          return { target: e, transitionEnd: r };
        };
      function Ze(t, e, n, r) {
        return (function (t) {
          return Object.keys(t).some(Pe);
        })(e)
          ? He(t, e, n, r)
          : { target: e, transitionEnd: r };
      }
      var Fe = function (t, e, n, r) {
          var o = (function (t, e, n) {
            var r,
              o = (0, V._T)(e, []),
              i = t.getInstance();
            if (!(i instanceof Element)) return { target: o, transitionEnd: n };
            for (var a in (n && (n = (0, V.pi)({}, n)),
            t.forEachValue(function (t) {
              var e = t.get();
              if (Ce(e)) {
                var n = ke(e, i);
                n && t.set(n);
              }
            }),
            o)) {
              var u = o[a];
              if (Ce(u)) {
                var c = ke(u, i);
                c &&
                  ((o[a] = c),
                  n && ((null !== (r = n[a]) && void 0 !== r) || (n[a] = u)));
              }
            }
            return { target: o, transitionEnd: n };
          })(t, e, r);
          return Ze(t, (e = o.target), n, (r = o.transitionEnd));
        },
        De = {};
      function Ue(t, e) {
        var n = e.layout,
          r = e.layoutId;
        return (
          xt(t) ||
          St(t) ||
          ((n || void 0 !== r) && (!!De[t] || "opacity" === t))
        );
      }
      function We(t) {
        var e = t.style,
          n = {};
        for (var r in e) ((0, Ot.i)(e[r]) || Ue(r, t)) && (n[r] = e[r]);
        return n;
      }
      function Qe(t, e, n, r) {
        var o = e.style,
          i = e.vars;
        for (var a in (Object.assign(t.style, o, r && r.getProjectionStyles(n)),
        i))
          t.style.setProperty(a, i[a]);
      }
      var $e = n(2728);
      function Ye(t, e) {
        return (function (t) {
          var e = t.top;
          return {
            x: { min: t.left, max: t.right },
            y: { min: e, max: t.bottom },
          };
        })(
          (function (t, e) {
            if (!e) return t;
            var n = e({ x: t.left, y: t.top }),
              r = e({ x: t.right, y: t.bottom });
            return { top: n.y, left: n.x, bottom: r.y, right: r.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      var Xe = {
          treeType: "dom",
          readValueFromInstance: function (t, e) {
            if (xt(e)) {
              var n = (0, $e.A)(e);
              return (n && n.default) || 0;
            }
            var r,
              o = ((r = t), window.getComputedStyle(r)),
              i = (Se(e) ? o.getPropertyValue(e) : o[e]) || 0;
            return "string" === typeof i ? i.trim() : i;
          },
          sortNodePosition: function (t, e) {
            return 2 & t.compareDocumentPosition(e) ? 1 : -1;
          },
          getBaseTarget: function (t, e) {
            var n;
            return null === (n = t.style) || void 0 === n ? void 0 : n[e];
          },
          measureViewportBox: function (t, e) {
            return Ye(t, e.transformPagePoint);
          },
          resetTransform: function (t, e, n) {
            var r = n.transformTemplate;
            (e.style.transform = r ? r({}, "") : "none"), t.scheduleRender();
          },
          restoreTransform: function (t, e) {
            t.style.transform = e.style.transform;
          },
          removeValueFromRenderState: function (t, e) {
            var n = e.vars,
              r = e.style;
            delete n[t], delete r[t];
          },
          makeTargetAnimatable: function (t, e, n, r) {
            var o = e.transition,
              i = e.transitionEnd,
              a = (0, V._T)(e, ["transition", "transitionEnd"]),
              u = n.transformValues;
            void 0 === r && (r = !0);
            var c = (function (t, e, n) {
              var r,
                o,
                i = {};
              for (var a in t)
                i[a] =
                  null !== (r = ht(a, e)) && void 0 !== r
                    ? r
                    : null === (o = n.getValue(a)) || void 0 === o
                    ? void 0
                    : o.get();
              return i;
            })(a, o || {}, t);
            if ((u && (i && (i = u(i)), a && (a = u(a)), c && (c = u(c))), r)) {
              !(function (t, e, n) {
                var r,
                  o,
                  i,
                  a,
                  u = Object.keys(e).filter(function (e) {
                    return !t.hasValue(e);
                  }),
                  c = u.length;
                if (c)
                  for (var s = 0; s < c; s++) {
                    var l = u[s],
                      f = e[l],
                      d = null;
                    Array.isArray(f) && (d = f[0]),
                      null === d &&
                        (d =
                          null !==
                            (o =
                              null !== (r = n[l]) && void 0 !== r
                                ? r
                                : t.readValue(l)) && void 0 !== o
                            ? o
                            : e[l]),
                      void 0 !== d &&
                        null !== d &&
                        ("string" === typeof d &&
                        (/^\-?\d*\.?\d+$/.test(d) || X(d))
                          ? (d = parseFloat(d))
                          : !at(d) && Y.P.test(f) && (d = (0, G.T)(l, f)),
                        t.addValue(l, (0, K.B)(d)),
                        (null !== (i = (a = n)[l]) && void 0 !== i) ||
                          (a[l] = d),
                        t.setBaseTarget(l, d));
                  }
              })(t, a, c);
              var s = Fe(t, a, c, i);
              (i = s.transitionEnd), (a = s.target);
            }
            return (0, V.pi)({ transition: o, transitionEnd: i }, a);
          },
          scrapeMotionValuesFromProps: We,
          build: function (t, e, n, r, o) {
            void 0 !== t.isVisible &&
              (e.style.visibility = t.isVisible ? "visible" : "hidden"),
              Ee(e, n, r, o.transformTemplate);
          },
          render: Qe,
        },
        qe = ye(Xe);
      function Ke(t) {
        var e = We(t);
        for (var n in t) {
          if ((0, Ot.i)(t[n]))
            e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n];
        }
        return e;
      }
      function Ge(t, e, n) {
        return "string" === typeof t ? t : et.px.transform(e + n * t);
      }
      var Je = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        tn = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function en(t, e, n, r) {
        var o = e.attrX,
          i = e.attrY,
          a = e.originX,
          u = e.originY,
          c = e.pathLength,
          s = e.pathSpacing,
          l = void 0 === s ? 1 : s,
          f = e.pathOffset,
          d = void 0 === f ? 0 : f;
        Ee(
          t,
          (0, V._T)(e, [
            "attrX",
            "attrY",
            "originX",
            "originY",
            "pathLength",
            "pathSpacing",
            "pathOffset",
          ]),
          n,
          r
        ),
          (t.attrs = t.style),
          (t.style = {});
        var p = t.attrs,
          v = t.style,
          h = t.dimensions;
        p.transform && (h && (v.transform = p.transform), delete p.transform),
          h &&
            (void 0 !== a || void 0 !== u || v.transform) &&
            (v.transformOrigin = (function (t, e, n) {
              var r = Ge(e, t.x, t.width),
                o = Ge(n, t.y, t.height);
              return "".concat(r, " ").concat(o);
            })(h, void 0 !== a ? a : 0.5, void 0 !== u ? u : 0.5)),
          void 0 !== o && (p.x = o),
          void 0 !== i && (p.y = i),
          void 0 !== c &&
            (function (t, e, n, r, o) {
              void 0 === n && (n = 1),
                void 0 === r && (r = 0),
                void 0 === o && (o = !0),
                (t.pathLength = 1);
              var i = o ? Je : tn;
              t[i.offset] = et.px.transform(-r);
              var a = et.px.transform(e),
                u = et.px.transform(n);
              t[i.array] = "".concat(a, " ").concat(u);
            })(p, c, l, d, !1);
      }
      var nn = /([a-z])([A-Z])/g,
        rn = function (t) {
          return t.replace(nn, "$1-$2").toLowerCase();
        },
        on = new Set([
          "baseFrequency",
          "diffuseConstant",
          "kernelMatrix",
          "kernelUnitLength",
          "keySplines",
          "keyTimes",
          "limitingConeAngle",
          "markerHeight",
          "markerWidth",
          "numOctaves",
          "targetX",
          "targetY",
          "surfaceScale",
          "specularConstant",
          "specularExponent",
          "stdDeviation",
          "tableValues",
          "viewBox",
          "gradientTransform",
          "pathLength",
        ]);
      function an(t, e, n, r) {
        for (var o in (Qe(t, e, void 0, r), e.attrs))
          t.setAttribute(on.has(o) ? o : rn(o), e.attrs[o]);
      }
      var un = ye(
          (0, V.pi)((0, V.pi)({}, Xe), {
            getBaseTarget: function (t, e) {
              return t[e];
            },
            readValueFromInstance: function (t, e) {
              var n;
              return xt(e)
                ? (null === (n = (0, $e.A)(e)) || void 0 === n
                    ? void 0
                    : n.default) || 0
                : ((e = on.has(e) ? e : rn(e)), t.getAttribute(e));
            },
            scrapeMotionValuesFromProps: Ke,
            build: function (t, e, n, r, o) {
              en(e, n, r, o.transformTemplate);
            },
            render: an,
          })
        ),
        cn = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "svg",
          "switch",
          "symbol",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function sn(t) {
        return (
          "string" === typeof t &&
          !t.includes("-") &&
          !!(cn.indexOf(t) > -1 || /[A-Z]/.test(t))
        );
      }
      var ln = (0, V.pi)(
          (0, V.pi)(
            {
              renderer: function (t, e) {
                return sn(t)
                  ? un(e, { enableHardwareAcceleration: !1 })
                  : qe(e, { enableHardwareAcceleration: !0 });
              },
            },
            It
          ),
          ve
        ),
        fn = n(1190),
        dn = Object.keys(z),
        pn = dn.length;
      var vn = n(6014),
        hn = (0, s.createContext)({});
      var mn = n(8868),
        gn = n(6240);
      function yn(t, e, n, r) {
        var o = (0, s.useContext)(I),
          i = (0, s.useContext)(hn).visualElement,
          a = (0, s.useContext)(U.O),
          u = (0, gn.h)(),
          c = (0, s.useRef)(void 0);
        r || (r = o.renderer),
          !c.current &&
            r &&
            (c.current = r(t, {
              visualState: e,
              parent: i,
              props: n,
              presenceId: null === a || void 0 === a ? void 0 : a.id,
              blockInitialAnimation:
                !1 === (null === a || void 0 === a ? void 0 : a.initial),
              shouldReduceMotion: u,
            }));
        var l = c.current;
        return (
          (0, mn.L)(function () {
            null === l || void 0 === l || l.syncRender();
          }),
          (0, s.useEffect)(function () {
            var t;
            null ===
              (t = null === l || void 0 === l ? void 0 : l.animationState) ||
              void 0 === t ||
              t.animateChanges();
          }),
          (0, mn.L)(function () {
            return function () {
              return null === l || void 0 === l ? void 0 : l.notifyUnmount();
            };
          }, []),
          l
        );
      }
      function bn(t) {
        return (
          "object" === typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function xn(t) {
        var e = (function (t, e) {
            if (ft(t)) {
              var n = t.initial,
                r = t.animate;
              return {
                initial: !1 === n || ct(n) ? n : void 0,
                animate: ct(r) ? r : void 0,
              };
            }
            return !1 !== t.inherit ? e : {};
          })(t, (0, s.useContext)(hn)),
          n = e.initial,
          r = e.animate;
        return (0, s.useMemo)(
          function () {
            return { initial: n, animate: r };
          },
          [wn(n), wn(r)]
        );
      }
      function wn(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      var Sn = n(6681),
        jn = !1,
        On = 1;
      var En = n(5364),
        Tn = (0, s.createContext)({});
      var Cn = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          (0, V.ZT)(e, t),
          (e.prototype.getSnapshotBeforeUpdate = function () {
            return this.updateProps(), null;
          }),
          (e.prototype.componentDidUpdate = function () {}),
          (e.prototype.updateProps = function () {
            var t = this.props,
              e = t.visualElement,
              n = t.props;
            e && e.setProps(n);
          }),
          (e.prototype.render = function () {
            return this.props.children;
          }),
          e
        );
      })(s.Component);
      function An(t) {
        var e = t.preloadedFeatures,
          n = t.createVisualElement,
          r = t.projectionNodeConstructor,
          o = t.useRender,
          i = t.useVisualState,
          a = t.Component;
        return (
          e && B(e),
          (0, s.forwardRef)(function (t, u) {
            var c = (function (t) {
              var e,
                n = t.layoutId,
                r =
                  null === (e = (0, s.useContext)(En.p)) || void 0 === e
                    ? void 0
                    : e.id;
              return r && void 0 !== n ? r + "-" + n : n;
            })(t);
            t = (0, V.pi)((0, V.pi)({}, t), { layoutId: c });
            var l = (0, s.useContext)(vn._),
              f = null,
              d = xn(t),
              p = l.isStatic
                ? void 0
                : (0, Sn.h)(function () {
                    if (jn) return On++;
                  }),
              v = i(t, l.isStatic);
            return (
              !l.isStatic &&
                Ut.j &&
                ((d.visualElement = yn(
                  a,
                  v,
                  (0, V.pi)((0, V.pi)({}, l), t),
                  n
                )),
                (function (t, e, n, r) {
                  var o,
                    i = e.layoutId,
                    a = e.layout,
                    u = e.drag,
                    c = e.dragConstraints,
                    l = e.layoutScroll,
                    f = (0, s.useContext)(Tn);
                  r &&
                    n &&
                    !(null === n || void 0 === n ? void 0 : n.projection) &&
                    ((n.projection = new r(
                      t,
                      n.getLatestValues(),
                      null === (o = n.parent) || void 0 === o
                        ? void 0
                        : o.projection
                    )),
                    n.projection.setOptions({
                      layoutId: i,
                      layout: a,
                      alwaysMeasureLayout: Boolean(u) || (c && bn(c)),
                      visualElement: n,
                      scheduleRender: function () {
                        return n.scheduleRender();
                      },
                      animationType: "string" === typeof a ? a : "both",
                      initialPromotionConfig: f,
                      layoutScroll: l,
                    }));
                })(p, t, d.visualElement, r || z.projectionNodeConstructor),
                (f = (function (t, e, n) {
                  var r = [],
                    o = (0, s.useContext)(I);
                  if (!e) return null;
                  "production" !== oe.O &&
                    n &&
                    o.strict &&
                    (0, Te.k)(
                      !1,
                      "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead."
                    );
                  for (var i = 0; i < pn; i++) {
                    var a = dn[i],
                      u = z[a],
                      c = u.isEnabled,
                      l = u.Component;
                    c(t) &&
                      l &&
                      r.push(
                        s.createElement(
                          l,
                          (0, V.pi)({ key: a }, t, { visualElement: e })
                        )
                      );
                  }
                  return r;
                })(t, d.visualElement, e))),
              s.createElement(
                Cn,
                {
                  visualElement: d.visualElement,
                  props: (0, V.pi)((0, V.pi)({}, l), t),
                },
                f,
                s.createElement(
                  hn.Provider,
                  { value: d },
                  o(
                    a,
                    t,
                    p,
                    (function (t, e, n) {
                      return (0, s.useCallback)(
                        function (r) {
                          var o;
                          r &&
                            (null === (o = t.mount) ||
                              void 0 === o ||
                              o.call(t, r)),
                            e && (r ? e.mount(r) : e.unmount()),
                            n &&
                              ("function" === typeof n
                                ? n(r)
                                : bn(n) && (n.current = r));
                        },
                        [e]
                      );
                    })(v, d.visualElement, u),
                    v,
                    l.isStatic,
                    d.visualElement
                  )
                )
              )
            );
          })
        );
      }
      var kn = function () {
        return {
          style: {},
          transform: {},
          transformKeys: [],
          transformOrigin: {},
          vars: {},
        };
      };
      function Mn(t, e, n) {
        for (var r in e) (0, Ot.i)(e[r]) || Ue(r, n) || (t[r] = e[r]);
      }
      function _n(t, e, n) {
        var r = {};
        return (
          Mn(r, t.style || {}, t),
          Object.assign(
            r,
            (function (t, e, n) {
              var r = t.transformTemplate;
              return (0, s.useMemo)(
                function () {
                  var t = {
                    style: {},
                    transform: {},
                    transformKeys: [],
                    transformOrigin: {},
                    vars: {},
                  };
                  Ee(t, e, { enableHardwareAcceleration: !n }, r);
                  var o = t.vars,
                    i = t.style;
                  return (0, V.pi)((0, V.pi)({}, o), i);
                },
                [e]
              );
            })(t, e, n)
          ),
          t.transformValues && (r = t.transformValues(r)),
          r
        );
      }
      function Pn(t, e, n) {
        var r = {},
          o = _n(t, e, n);
        return (
          Boolean(t.drag) &&
            !1 !== t.dragListener &&
            ((r.draggable = !1),
            (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
            (o.touchAction =
              !0 === t.drag
                ? "none"
                : "pan-".concat("x" === t.drag ? "y" : "x"))),
          (r.style = o),
          r
        );
      }
      var Ln = new Set([
        "initial",
        "animate",
        "exit",
        "style",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "layout",
        "layoutId",
        "layoutDependency",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "drag",
        "dragControls",
        "dragListener",
        "dragConstraints",
        "dragDirectionLock",
        "dragSnapToOrigin",
        "_dragX",
        "_dragY",
        "dragElastic",
        "dragMomentum",
        "dragPropagation",
        "dragTransition",
        "whileDrag",
        "onPan",
        "onPanStart",
        "onPanEnd",
        "onPanSessionStart",
        "onTap",
        "onTapStart",
        "onTapCancel",
        "onHoverStart",
        "onHoverEnd",
        "whileFocus",
        "whileTap",
        "whileHover",
        "whileInView",
        "onViewportEnter",
        "onViewportLeave",
        "viewport",
        "layoutScroll",
      ]);
      function Rn(t) {
        return Ln.has(t);
      }
      var Vn,
        In = function (t) {
          return !Rn(t);
        };
      try {
        (Vn = require("@emotion/is-prop-valid").default) &&
          (In = function (t) {
            return t.startsWith("on") ? !Rn(t) : Vn(t);
          });
      } catch (nr) {}
      var Nn = function () {
        return (0, V.pi)(
          (0, V.pi)(
            {},
            {
              style: {},
              transform: {},
              transformKeys: [],
              transformOrigin: {},
              vars: {},
            }
          ),
          { attrs: {} }
        );
      };
      function zn(t, e) {
        var n = (0, s.useMemo)(
          function () {
            var n = Nn();
            return (
              en(n, e, { enableHardwareAcceleration: !1 }, t.transformTemplate),
              (0, V.pi)((0, V.pi)({}, n.attrs), {
                style: (0, V.pi)({}, n.style),
              })
            );
          },
          [e]
        );
        if (t.style) {
          var r = {};
          Mn(r, t.style, t), (n.style = (0, V.pi)((0, V.pi)({}, r), n.style));
        }
        return n;
      }
      function Bn(t) {
        void 0 === t && (t = !1);
        return function (e, n, r, o, i, a) {
          var u = i.latestValues,
            c = (sn(e) ? zn : Pn)(n, u, a),
            l = (function (t, e, n) {
              var r = {};
              for (var o in t)
                (In(o) ||
                  (!0 === n && Rn(o)) ||
                  (!e && !Rn(o)) ||
                  (t.draggable && o.startsWith("onDrag"))) &&
                  (r[o] = t[o]);
              return r;
            })(n, "string" === typeof e, t),
            f = (0, V.pi)((0, V.pi)((0, V.pi)({}, l), c), { ref: o });
          return r && (f["data-projection-id"] = r), (0, s.createElement)(e, f);
        };
      }
      function Hn(t) {
        var e = (0, Ot.i)(t) ? t.get() : t;
        return (0, q.p)(e) ? e.toValue() : e;
      }
      function Zn(t, e, n, r) {
        var o = t.scrapeMotionValuesFromProps,
          i = t.createRenderState,
          a = t.onMount,
          u = { latestValues: Dn(e, n, r, o), renderState: i() };
        return (
          a &&
            (u.mount = function (t) {
              return a(e, t, u);
            }),
          u
        );
      }
      var Fn = function (t) {
        return function (e, n) {
          var r = (0, s.useContext)(hn),
            o = (0, s.useContext)(U.O);
          return n
            ? Zn(t, e, r, o)
            : (0, Sn.h)(function () {
                return Zn(t, e, r, o);
              });
        };
      };
      function Dn(t, e, n, r) {
        var o = {},
          i = !1 === (null === n || void 0 === n ? void 0 : n.initial),
          a = r(t);
        for (var u in a) o[u] = Hn(a[u]);
        var c = t.initial,
          s = t.animate,
          l = ft(t),
          f = dt(t);
        e &&
          f &&
          !l &&
          !1 !== t.inherit &&
          ((null !== c && void 0 !== c) || (c = e.initial),
          (null !== s && void 0 !== s) || (s = e.animate));
        var d = i || !1 === c,
          p = d ? s : c;
        p &&
          "boolean" !== typeof p &&
          !F(p) &&
          (Array.isArray(p) ? p : [p]).forEach(function (e) {
            var n = st(t, e);
            if (n) {
              var r = n.transitionEnd;
              n.transition;
              var i = (0, V._T)(n, ["transitionEnd", "transition"]);
              for (var a in i) {
                var u = i[a];
                if (Array.isArray(u)) u = u[d ? u.length - 1 : 0];
                null !== u && (o[a] = u);
              }
              for (var a in r) o[a] = r[a];
            }
          });
        return o;
      }
      var Un = {
          useVisualState: Fn({
            scrapeMotionValuesFromProps: Ke,
            createRenderState: Nn,
            onMount: function (t, e, n) {
              var r = n.renderState,
                o = n.latestValues;
              try {
                r.dimensions =
                  "function" === typeof e.getBBox
                    ? e.getBBox()
                    : e.getBoundingClientRect();
              } catch (i) {
                r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              en(r, o, { enableHardwareAcceleration: !1 }, t.transformTemplate),
                an(e, r);
            },
          }),
        },
        Wn = {
          useVisualState: Fn({
            scrapeMotionValuesFromProps: We,
            createRenderState: kn,
          }),
        };
      var Qn = (function (t) {
          function e(e, n) {
            return void 0 === n && (n = {}), An(t(e, n));
          }
          if ("undefined" === typeof Proxy) return e;
          var n = new Map();
          return new Proxy(e, {
            get: function (t, r) {
              return n.has(r) || n.set(r, e(r)), n.get(r);
            },
          });
        })(function (t, e, n, r, o) {
          var i = e.forwardMotionProps,
            a = void 0 !== i && i,
            u = sn(t) ? Un : Wn;
          return (0,
          V.pi)((0, V.pi)({}, u), { preloadedFeatures: n, useRender: Bn(a), createVisualElement: r, projectionNodeConstructor: o, Component: t });
        }),
        $n = n(9001),
        Yn = n.n($n),
        Xn = { menuOpen: !1 };
      function qn(t, e) {
        var n = e.type,
          i = e.value;
        switch (n) {
          case "setTheme":
            return (0, o.Z)((0, r.Z)({}, t), { theme: i });
          case "toggleTheme":
            var a = "dark" === t.theme ? "light" : "dark";
            return (0, o.Z)((0, r.Z)({}, t), { theme: a });
          case "toggleMenu":
            return (0, o.Z)((0, r.Z)({}, t), { menuOpen: !t.menuOpen });
          default:
            throw new Error();
        }
      }
      var Kn = n(9008),
        Gn = n.n(Kn),
        Jn = function () {
          var t = (0, D.hO)(),
            e = (0, x.useRouter)(),
            n = e.asPath,
            r = e.beforePopState;
          (0, s.useEffect)(function () {
            window.history.scrollRestoration = "manual";
          }, []),
            (0, s.useEffect)(function () {
              r(function (t) {
                return (t.options.scroll = !1), !0;
              });
            }, []),
            (0, s.useEffect)(
              function () {
                if (t) {
                  var e = n.split("#")[1],
                    r = document.getElementById(e);
                  e && r
                    ? (window.scrollTo(0, r.offsetTop),
                      r.focus({ preventScroll: !0 }))
                    : (window.scrollTo(0, 0),
                      document.body.focus({ preventScroll: !0 }));
                }
              },
              [n, t]
            );
        },
        tr = (0, s.createContext)({}),
        er = function (t) {
          var e = t.Component,
            n = t.pageProps,
            u = (0, i.Z)((0, g._)("theme", "dark"), 1)[0],
            c = (0, s.useReducer)(qn, Xn),
            f = c[0],
            d = c[1],
            p = (0, x.useRouter)(),
            m = p.route,
            y = p.asPath,
            b = "/" === m ? "" : "".concat(y);
          return (
            (0, g.S2)(),
            (0, s.useEffect)(function () {
              console.info(
                "".concat(
                  "\n__  __  __\n\\ \\ \\ \\ \\\u2215\n \\ \\\u2215\\ \\\n  \\\u2215  \\\u2215\n\n\nTaking a peek huh? Check out the source code: https://github.com/HamishMW/portfolio\n",
                  "\n\n"
                )
              );
            }, []),
            (0, s.useEffect)(
              function () {
                d({ type: "setTheme", value: u || "dark" });
              },
              [u]
            ),
            (0, a.jsx)(tr.Provider, {
              value: (0, o.Z)((0, r.Z)({}, f), { dispatch: d }),
              children: (0, a.jsx)(v.f6, {
                themeId: f.theme,
                children: (0, a.jsx)(H, {
                  features: ln,
                  children: (0, a.jsxs)(s.Fragment, {
                    children: [
                      (0, a.jsx)(Gn(), {
                        children: (0, a.jsx)("link", {
                          rel: "canonical",
                          href: "".concat("https://hamishw.com").concat(b),
                        }),
                      }),
                      (0, a.jsx)(R.T, {
                        showOnFocus: !0,
                        as: "a",
                        className: Yn().skip,
                        href: "#MainContent",
                        children: "Skip to main content",
                      }),
                      (0, a.jsx)(P, {}),
                      (0, a.jsx)("main", {
                        className: Yn().app,
                        tabIndex: -1,
                        id: "MainContent",
                        children: (0, a.jsx)(fn.M, {
                          exitBeforeEnter: !0,
                          children: (0, a.jsxs)(
                            Qn.div,
                            {
                              className: Yn().page,
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: { opacity: 0 },
                              transition: {
                                type: "tween",
                                ease: "linear",
                                duration: (0, l.zG)(h.T.base.durationS) / 1e3,
                                delay: 0.1,
                              },
                              children: [
                                (0, a.jsx)(Jn, {}),
                                (0, a.jsx)(e, (0, r.Z)({}, n)),
                              ],
                            },
                            m
                          ),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            })
          );
        };
    },
    2362: function (t, e, n) {
      "use strict";
      n.d(e, {
        BC: function () {
          return o;
        },
        Fh: function () {
          return l;
        },
        Q1: function () {
          return a;
        },
        Sh: function () {
          return f;
        },
        Zm: function () {
          return s;
        },
        aU: function () {
          return c;
        },
        ml: function () {
          return i;
        },
        zG: function () {
          return u;
        },
      });
      var r = n(1799),
        o = {
          desktop: 2080,
          laptop: 1680,
          tablet: 1040,
          mobile: 696,
          mobileS: 400,
        },
        i = function (t) {
          return "".concat(t, "px");
        },
        a = function (t) {
          return "".concat(t / 16, "rem");
        },
        u = function (t) {
          return Number(t.replace("ms", ""));
        },
        c = function (t) {
          return "".concat(t, "ms");
        },
        s = function (t) {
          return (
            (null === t || void 0 === t
              ? void 0
              : t.split(" ").map(function (t) {
                  return Number(t) / 255;
                })) || []
          );
        };
      function l(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = {},
          o = Object.keys(t),
          a = !0,
          u = !1,
          s = void 0;
        try {
          for (
            var l, f = o[Symbol.iterator]();
            !(a = (l = f.next()).done);
            a = !0
          ) {
            var d = l.value,
              p = t[d];
            "number" === typeof p && "delay" === d && (p = c(p)),
              "number" === typeof p && "opacity" !== d && (p = i(p)),
              (n["--".concat(d)] = p);
          }
        } catch (v) {
          (u = !0), (s = v);
        } finally {
          try {
            a || null == f.return || f.return();
          } finally {
            if (u) throw s;
          }
        }
        return (0, r.Z)({}, n, e);
      }
      function f() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        return e.filter(Boolean).join(" ");
      }
    },
    737: function (t) {
      t.exports = {
        button: "Button_button__L2wUb",
        text: "Button_text__t2U9w",
        loader: "Button_loader__aTo2D",
        icon: "Button_icon__mSIRG",
      };
    },
    7124: function (t) {
      t.exports = { icon: "Icon_icon__t_YgI" };
    },
    9034: function (t) {
      t.exports = {
        loader: "Loader_loader__3yamk",
        text: "Loader_text__uupzy",
        content: "Loader_content__rvat_",
        span: "Loader_span__qI8wq",
        loaderSpan: "Loader_loaderSpan__hIbqq",
      };
    },
    2420: function (t) {
      t.exports = {
        monogram: "Monogram_monogram__tnGpV",
        highlight: "Monogram_highlight__ly_rQ",
      };
    },
    7786: function (t) {
      t.exports = {
        toggle: "NavToggle_toggle__gmiZu",
        inner: "NavToggle_inner__0uerT",
        icon: "NavToggle_icon__aG8yu",
      };
    },
    6105: function (t) {
      t.exports = {
        navbar: "Navbar_navbar__7Exjr",
        logo: "Navbar_logo__keI4H",
        nav: "Navbar_nav__Ymaux",
        navList: "Navbar_navList__mg4Oa",
        navLink: "Navbar_navLink__Havgb",
        navIcons: "Navbar_navIcons__KC2a8",
        navIconLink: "Navbar_navIconLink__W8ZFX",
        navIcon: "Navbar_navIcon__lI_cE",
        mobileNav: "Navbar_mobileNav__oBcFx",
        mobileNavLink: "Navbar_mobileNavLink__7KN69",
      };
    },
    2279: function (t) {
      t.exports = {
        toggle: "ThemeToggle_toggle__w8LEU",
        circle: "ThemeToggle_circle__qVSRK",
        mask: "ThemeToggle_mask__Y09BP",
        path: "ThemeToggle_path__9hTG0",
      };
    },
    2278: function (t) {
      t.exports = { text: "Text_text__I2GnQ" };
    },
    774: function (t) {
      t.exports = { hidden: "VisuallyHidden_hidden__D_ZwH" };
    },
    9001: function (t) {
      t.exports = {
        app: "App_app__x2qc1",
        page: "App_page__ZYUk8",
        skip: "App_skip__Hmpeg",
      };
    },
    4492: function () {},
    2239: function () {},
    9008: function (t, e, n) {
      t.exports = n(5443);
    },
    1664: function (t, e, n) {
      t.exports = n(8418);
    },
    1163: function (t, e, n) {
      t.exports = n(387);
    },
    4155: function (t) {
      var e,
        n,
        r = (t.exports = {});
      function o() {
        throw new Error("setTimeout has not been defined");
      }
      function i() {
        throw new Error("clearTimeout has not been defined");
      }
      function a(t) {
        if (e === setTimeout) return setTimeout(t, 0);
        if ((e === o || !e) && setTimeout)
          return (e = setTimeout), setTimeout(t, 0);
        try {
          return e(t, 0);
        } catch (n) {
          try {
            return e.call(null, t, 0);
          } catch (n) {
            return e.call(this, t, 0);
          }
        }
      }
      !(function () {
        try {
          e = "function" === typeof setTimeout ? setTimeout : o;
        } catch (t) {
          e = o;
        }
        try {
          n = "function" === typeof clearTimeout ? clearTimeout : i;
        } catch (t) {
          n = i;
        }
      })();
      var u,
        c = [],
        s = !1,
        l = -1;
      function f() {
        s &&
          u &&
          ((s = !1), u.length ? (c = u.concat(c)) : (l = -1), c.length && d());
      }
      function d() {
        if (!s) {
          var t = a(f);
          s = !0;
          for (var e = c.length; e; ) {
            for (u = c, c = []; ++l < e; ) u && u[l].run();
            (l = -1), (e = c.length);
          }
          (u = null),
            (s = !1),
            (function (t) {
              if (n === clearTimeout) return clearTimeout(t);
              if ((n === i || !n) && clearTimeout)
                return (n = clearTimeout), clearTimeout(t);
              try {
                n(t);
              } catch (e) {
                try {
                  return n.call(null, t);
                } catch (e) {
                  return n.call(this, t);
                }
              }
            })(t);
        }
      }
      function p(t, e) {
        (this.fun = t), (this.array = e);
      }
      function v() {}
      (r.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        c.push(new p(t, e)), 1 !== c.length || s || a(d);
      }),
        (p.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (r.title = "browser"),
        (r.browser = !0),
        (r.env = {}),
        (r.argv = []),
        (r.version = ""),
        (r.versions = {}),
        (r.on = v),
        (r.addListener = v),
        (r.once = v),
        (r.off = v),
        (r.removeListener = v),
        (r.removeAllListeners = v),
        (r.emit = v),
        (r.prependListener = v),
        (r.prependOnceListener = v),
        (r.listeners = function (t) {
          return [];
        }),
        (r.binding = function (t) {
          throw new Error("process.binding is not supported");
        }),
        (r.cwd = function () {
          return "/";
        }),
        (r.chdir = function (t) {
          throw new Error("process.chdir is not supported");
        }),
        (r.umask = function () {
          return 0;
        });
    },
    655: function (t, e, n) {
      "use strict";
      n.d(e, {
        CR: function () {
          return c;
        },
        XA: function () {
          return u;
        },
        ZT: function () {
          return o;
        },
        _T: function () {
          return a;
        },
        ev: function () {
          return s;
        },
        pi: function () {
          return i;
        },
      });
      var r = function (t, e) {
        return (
          (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            }),
          r(t, e)
        );
      };
      function o(t, e) {
        if ("function" !== typeof e && null !== e)
          throw new TypeError(
            "Class extends value " + String(e) + " is not a constructor or null"
          );
        function n() {
          this.constructor = t;
        }
        r(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      }
      var i = function () {
        return (
          (i =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }),
          i.apply(this, arguments)
        );
      };
      function a(t, e) {
        var n = {};
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) &&
            e.indexOf(r) < 0 &&
            (n[r] = t[r]);
        if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(t); o < r.length; o++)
            e.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, r[o]) &&
              (n[r[o]] = t[r[o]]);
        }
        return n;
      }
      Object.create;
      function u(t) {
        var e = "function" === typeof Symbol && Symbol.iterator,
          n = e && t[e],
          r = 0;
        if (n) return n.call(t);
        if (t && "number" === typeof t.length)
          return {
            next: function () {
              return (
                t && r >= t.length && (t = void 0),
                { value: t && t[r++], done: !t }
              );
            },
          };
        throw new TypeError(
          e ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function c(t, e) {
        var n = "function" === typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r,
          o,
          i = n.call(t),
          a = [];
        try {
          for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; )
            a.push(r.value);
        } catch (u) {
          o = { error: u };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      }
      function s(t, e, n) {
        if (n || 2 === arguments.length)
          for (var r, o = 0, i = e.length; o < i; o++)
            (!r && o in e) ||
              (r || (r = Array.prototype.slice.call(e, 0, o)), (r[o] = e[o]));
        return t.concat(r || Array.prototype.slice.call(e));
      }
      Object.create;
    },
    943: function (t, e, n) {
      "use strict";
      function r(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      });
    },
    3375: function (t, e, n) {
      "use strict";
      function r(t) {
        if (
          ("undefined" !== typeof Symbol && null != t[Symbol.iterator]) ||
          null != t["@@iterator"]
        )
          return Array.from(t);
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      });
    },
    1799: function (t, e, n) {
      "use strict";
      function r(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function o(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            o = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable;
              })
            )),
            o.forEach(function (e) {
              r(t, e, n[e]);
            });
        }
        return t;
      }
      n.d(e, {
        Z: function () {
          return o;
        },
      });
    },
    9396: function (t, e, n) {
      "use strict";
      function r(t, e) {
        return (
          (e = null != e ? e : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(t);
                  e &&
                    (r = r.filter(function (e) {
                      return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })),
                    n.push.apply(n, r);
                }
                return n;
              })(Object(e)).forEach(function (n) {
                Object.defineProperty(
                  t,
                  n,
                  Object.getOwnPropertyDescriptor(e, n)
                );
              }),
          t
        );
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      });
    },
    9534: function (t, e, n) {
      "use strict";
      function r(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      });
    },
    828: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return i;
        },
      });
      var r = n(3375);
      var o = n(1566);
      function i(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (0, r.Z)(t, e) ||
          (0, o.Z)(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    1566: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return o;
        },
      });
      var r = n(943);
      function o(t, e) {
        if (t) {
          if ("string" === typeof t) return (0, r.Z)(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(n)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? (0, r.Z)(t, e)
              : void 0
          );
        }
      }
    },
    8488: function (t, e, n) {
      "use strict";
      n.d(e, {
        C: function () {
          return r;
        },
      });
      var r = function (t) {
        return Array.isArray(t);
      };
    },
    8899: function (t, e, n) {
      "use strict";
      n.d(e, {
        b8: function () {
          return N;
        },
      });
      var r = n(655),
        o = n(754),
        i = n(9296),
        a = n(4735);
      var u = function (t) {
          return 1e3 * t;
        },
        c = n(4394),
        s = n(4710);
      const l = (t, e) => 1 - 3 * e + 3 * t,
        f = (t, e) => 3 * e - 6 * t,
        d = (t) => 3 * t,
        p = (t, e, n) => ((l(e, n) * t + f(e, n)) * t + d(e)) * t,
        v = (t, e, n) => 3 * l(e, n) * t * t + 2 * f(e, n) * t + d(e);
      const h = 0.1;
      function m(t, e, n, r) {
        if (t === e && n === r) return s.GE;
        const o = new Float32Array(11);
        for (let a = 0; a < 11; ++a) o[a] = p(a * h, t, n);
        function i(e) {
          let r = 0,
            i = 1;
          for (; 10 !== i && o[i] <= e; ++i) r += h;
          --i;
          const a = r + ((e - o[i]) / (o[i + 1] - o[i])) * h,
            u = v(a, t, n);
          return u >= 0.001
            ? (function (t, e, n, r) {
                for (let o = 0; o < 8; ++o) {
                  const o = v(e, n, r);
                  if (0 === o) return e;
                  e -= (p(e, n, r) - t) / o;
                }
                return e;
              })(e, a, t, n)
            : 0 === u
            ? a
            : (function (t, e, n, r, o) {
                let i,
                  a,
                  u = 0;
                do {
                  (a = e + (n - e) / 2),
                    (i = p(a, r, o) - t),
                    i > 0 ? (n = a) : (e = a);
                } while (Math.abs(i) > 1e-7 && ++u < 10);
                return a;
              })(e, r, r + h, t, n);
        }
        return (t) => (0 === t || 1 === t ? t : p(i(t), e, r));
      }
      var g = {
          linear: s.GE,
          easeIn: s.YQ,
          easeInOut: s.mZ,
          easeOut: s.Vv,
          circIn: s.Z7,
          circInOut: s.X7,
          circOut: s.Bn,
          backIn: s.G2,
          backInOut: s.XL,
          backOut: s.CG,
          anticipate: s.LU,
          bounceIn: s.h9,
          bounceInOut: s.yD,
          bounceOut: s.gJ,
        },
        y = function (t) {
          if (Array.isArray(t)) {
            (0, c.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            var e = (0, r.CR)(t, 4);
            return m(e[0], e[1], e[2], e[3]);
          }
          return "string" === typeof t
            ? ((0, c.k)(
                void 0 !== g[t],
                "Invalid easing type '".concat(t, "'")
              ),
              g[t])
            : t;
        },
        b = n(8407),
        x = function (t, e) {
          return (
            "zIndex" !== t &&
            (!("number" !== typeof e && !Array.isArray(e)) ||
              !("string" !== typeof e || !b.P.test(e) || e.startsWith("url(")))
          );
        },
        w = n(8488),
        S = function () {
          return { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 };
        },
        j = function (t) {
          return {
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10,
          };
        },
        O = function () {
          return { type: "keyframes", ease: "linear", duration: 0.3 };
        },
        E = function (t) {
          return { type: "keyframes", duration: 0.8, values: t };
        },
        T = {
          x: S,
          y: S,
          z: S,
          rotate: S,
          rotateX: S,
          rotateY: S,
          rotateZ: S,
          scaleX: j,
          scaleY: j,
          scale: j,
          opacity: O,
          backgroundColor: O,
          color: O,
          default: j,
        },
        C = n(9135),
        A = !1,
        k = n(8715);
      var M = !1;
      function _(t) {
        var e = t.ease,
          n = t.times,
          o = t.yoyo,
          i = t.flip,
          a = t.loop,
          s = (0, r._T)(t, ["ease", "times", "yoyo", "flip", "loop"]),
          l = (0, r.pi)({}, s);
        return (
          n && (l.offset = n),
          s.duration && (l.duration = u(s.duration)),
          s.repeatDelay && (l.repeatDelay = u(s.repeatDelay)),
          e &&
            (l.ease = (function (t) {
              return Array.isArray(t) && "number" !== typeof t[0];
            })(e)
              ? e.map(y)
              : y(e)),
          "tween" === s.type && (l.type = "keyframes"),
          (o || a || i) &&
            ((0, c.K)(
              !M,
              "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."
            ),
            (M = !0),
            o
              ? (l.repeatType = "reverse")
              : a
              ? (l.repeatType = "loop")
              : i && (l.repeatType = "mirror"),
            (l.repeat = a || o || i || s.repeat)),
          "spring" !== s.type && (l.type = "keyframes"),
          l
        );
      }
      function P(t, e, n) {
        var o;
        return (
          Array.isArray(e.to) &&
            ((null !== (o = t.duration) && void 0 !== o) || (t.duration = 0.8)),
          (function (t) {
            Array.isArray(t.to) &&
              null === t.to[0] &&
              ((t.to = (0, r.ev)([], (0, r.CR)(t.to), !1)), (t.to[0] = t.from));
          })(e),
          (function (t) {
            t.when,
              t.delay,
              t.delayChildren,
              t.staggerChildren,
              t.staggerDirection,
              t.repeat,
              t.repeatType,
              t.repeatDelay,
              t.from;
            var e = (0, r._T)(t, [
              "when",
              "delay",
              "delayChildren",
              "staggerChildren",
              "staggerDirection",
              "repeat",
              "repeatType",
              "repeatDelay",
              "from",
            ]);
            return !!Object.keys(e).length;
          })(t) ||
            (t = (0, r.pi)(
              (0, r.pi)({}, t),
              (function (t, e) {
                var n;
                return (
                  (n = (0, w.C)(e) ? E : T[t] || T.default),
                  (0, r.pi)({ to: e }, n(e))
                );
              })(n, e.to)
            )),
          (0, r.pi)((0, r.pi)({}, e), _(t))
        );
      }
      function L(t, e, n, u, s) {
        var l,
          f = I(u, t),
          d = null !== (l = f.from) && void 0 !== l ? l : e.get(),
          p = x(t, n);
        "none" === d && p && "string" === typeof n
          ? (d = (0, C.T)(t, n))
          : R(d) && "string" === typeof n
          ? (d = V(n))
          : !Array.isArray(n) && R(n) && "string" === typeof d && (n = V(d));
        var v = x(t, d);
        return (
          (0, c.K)(
            v === p,
            "You are trying to animate "
              .concat(t, ' from "')
              .concat(d, '" to "')
              .concat(n, '". ')
              .concat(
                d,
                " is not an animatable value - to enable this animation set "
              )
              .concat(d, " to a value animatable to ")
              .concat(n, " via the `style` property.")
          ),
          v && p && !1 !== f.type
            ? function () {
                var u = {
                  from: d,
                  to: n,
                  velocity: e.getVelocity(),
                  onComplete: s,
                  onUpdate: function (t) {
                    return e.set(t);
                  },
                };
                return "inertia" === f.type || "decay" === f.type
                  ? (function ({
                      from: t = 0,
                      velocity: e = 0,
                      min: n,
                      max: r,
                      power: u = 0.8,
                      timeConstant: c = 750,
                      bounceStiffness: s = 500,
                      bounceDamping: l = 10,
                      restDelta: f = 1,
                      modifyTarget: d,
                      driver: p,
                      onUpdate: v,
                      onComplete: h,
                      onStop: m,
                    }) {
                      let g;
                      function y(t) {
                        return (
                          (void 0 !== n && t < n) || (void 0 !== r && t > r)
                        );
                      }
                      function b(t) {
                        return void 0 === n
                          ? r
                          : void 0 === r || Math.abs(n - t) < Math.abs(r - t)
                          ? n
                          : r;
                      }
                      function x(t) {
                        null === g || void 0 === g || g.stop(),
                          (g = (0, o.j)(
                            Object.assign(Object.assign({}, t), {
                              driver: p,
                              onUpdate: (e) => {
                                var n;
                                null === v || void 0 === v || v(e),
                                  null === (n = t.onUpdate) ||
                                    void 0 === n ||
                                    n.call(t, e);
                              },
                              onComplete: h,
                              onStop: m,
                            })
                          ));
                      }
                      function w(t) {
                        x(
                          Object.assign(
                            {
                              type: "spring",
                              stiffness: s,
                              damping: l,
                              restDelta: f,
                            },
                            t
                          )
                        );
                      }
                      if (y(t)) w({ from: t, velocity: e, to: b(t) });
                      else {
                        let r = u * e + t;
                        "undefined" !== typeof d && (r = d(r));
                        const o = b(r),
                          s = o === n ? -1 : 1;
                        let l, p;
                        const v = (t) => {
                          (l = p),
                            (p = t),
                            (e = (0, i.R)(t - l, (0, a.$B)().delta)),
                            ((1 === s && t > o) || (-1 === s && t < o)) &&
                              w({ from: t, to: o, velocity: e });
                        };
                        x({
                          type: "decay",
                          from: t,
                          velocity: e,
                          timeConstant: c,
                          power: u,
                          restDelta: f,
                          modifyTarget: d,
                          onUpdate: y(r) ? v : void 0,
                        });
                      }
                      return {
                        stop: () =>
                          null === g || void 0 === g ? void 0 : g.stop(),
                      };
                    })((0, r.pi)((0, r.pi)({}, u), f))
                  : (0, o.j)(
                      (0, r.pi)((0, r.pi)({}, P(f, u, t)), {
                        onUpdate: function (t) {
                          var e;
                          u.onUpdate(t),
                            null === (e = f.onUpdate) ||
                              void 0 === e ||
                              e.call(f, t);
                        },
                        onComplete: function () {
                          var t;
                          u.onComplete(),
                            null === (t = f.onComplete) ||
                              void 0 === t ||
                              t.call(f);
                        },
                      })
                    );
              }
            : function () {
                var t,
                  r,
                  o = (0, k.Y)(n);
                return (
                  e.set(o),
                  s(),
                  null ===
                    (t = null === f || void 0 === f ? void 0 : f.onUpdate) ||
                    void 0 === t ||
                    t.call(f, o),
                  null ===
                    (r = null === f || void 0 === f ? void 0 : f.onComplete) ||
                    void 0 === r ||
                    r.call(f),
                  { stop: function () {} }
                );
              }
        );
      }
      function R(t) {
        return (
          0 === t ||
          ("string" === typeof t &&
            0 === parseFloat(t) &&
            -1 === t.indexOf(" "))
        );
      }
      function V(t) {
        return "number" === typeof t ? 0 : (0, C.T)("", t);
      }
      function I(t, e) {
        return t[e] || t.default || t;
      }
      function N(t, e, n, r) {
        return (
          void 0 === r && (r = {}),
          A && (r = { type: !1 }),
          e.start(function (o) {
            var i,
              a,
              c = L(t, e, n, r, o),
              s = (function (t, e) {
                var n, r;
                return null !==
                  (r =
                    null !== (n = (I(t, e) || {}).delay) && void 0 !== n
                      ? n
                      : t.delay) && void 0 !== r
                  ? r
                  : 0;
              })(r, t),
              l = function () {
                return (a = c());
              };
            return (
              s ? (i = window.setTimeout(l, u(s))) : l(),
              function () {
                clearTimeout(i), null === a || void 0 === a || a.stop();
              }
            );
          })
        );
      }
    },
    1190: function (t, e, n) {
      "use strict";
      n.d(e, {
        M: function () {
          return m;
        },
      });
      var r = n(655),
        o = n(7294),
        i = n(9304),
        a = n(4735),
        u = n(8868);
      function c() {
        var t = (0, o.useRef)(!1);
        return (
          (0, u.L)(function () {
            return (
              (t.current = !0),
              function () {
                t.current = !1;
              }
            );
          }, []),
          t
        );
      }
      var s = n(240),
        l = n(6681),
        f = function (t) {
          var e = t.children,
            n = t.initial,
            i = t.isPresent,
            a = t.onExitComplete,
            u = t.custom,
            c = t.presenceAffectsLayout,
            f = (0, l.h)(d),
            p = (0, o.useId)(),
            v = (0, o.useMemo)(
              function () {
                return {
                  id: p,
                  initial: n,
                  isPresent: i,
                  custom: u,
                  onExitComplete: function (t) {
                    var e, n;
                    f.set(t, !0);
                    try {
                      for (
                        var o = (0, r.XA)(f.values()), i = o.next();
                        !i.done;
                        i = o.next()
                      ) {
                        if (!i.value) return;
                      }
                    } catch (u) {
                      e = { error: u };
                    } finally {
                      try {
                        i && !i.done && (n = o.return) && n.call(o);
                      } finally {
                        if (e) throw e.error;
                      }
                    }
                    null === a || void 0 === a || a();
                  },
                  register: function (t) {
                    return (
                      f.set(t, !1),
                      function () {
                        return f.delete(t);
                      }
                    );
                  },
                };
              },
              c ? void 0 : [i]
            );
          return (
            (0, o.useMemo)(
              function () {
                f.forEach(function (t, e) {
                  return f.set(e, !1);
                });
              },
              [i]
            ),
            o.useEffect(
              function () {
                !i && !f.size && (null === a || void 0 === a || a());
              },
              [i]
            ),
            o.createElement(s.O.Provider, { value: v }, e)
          );
        };
      function d() {
        return new Map();
      }
      var p = n(5364),
        v = n(5411),
        h = function (t) {
          return t.key || "";
        };
      var m = function (t) {
        var e = t.children,
          n = t.custom,
          s = t.initial,
          l = void 0 === s || s,
          d = t.onExitComplete,
          m = t.exitBeforeEnter,
          g = t.presenceAffectsLayout,
          y = void 0 === g || g,
          b = (0, r.CR)(
            (function () {
              var t = c(),
                e = (0, r.CR)((0, o.useState)(0), 2),
                n = e[0],
                i = e[1],
                u = (0, o.useCallback)(
                  function () {
                    t.current && i(n + 1);
                  },
                  [n]
                );
              return [
                (0, o.useCallback)(
                  function () {
                    return a.ZP.postRender(u);
                  },
                  [u]
                ),
                n,
              ];
            })(),
            1
          ),
          x = b[0],
          w = (0, o.useContext)(p.p).forceRender;
        w && (x = w);
        var S = c(),
          j = (function (t) {
            var e = [];
            return (
              o.Children.forEach(t, function (t) {
                (0, o.isValidElement)(t) && e.push(t);
              }),
              e
            );
          })(e),
          O = j,
          E = new Set(),
          T = (0, o.useRef)(O),
          C = (0, o.useRef)(new Map()).current,
          A = (0, o.useRef)(!0);
        if (
          ((0, u.L)(function () {
            (A.current = !1),
              (function (t, e) {
                t.forEach(function (t) {
                  var n = h(t);
                  e.set(n, t);
                });
              })(j, C),
              (T.current = O);
          }),
          (0, v.z)(function () {
            (A.current = !0), C.clear(), E.clear();
          }),
          A.current)
        )
          return o.createElement(
            o.Fragment,
            null,
            O.map(function (t) {
              return o.createElement(
                f,
                {
                  key: h(t),
                  isPresent: !0,
                  initial: !!l && void 0,
                  presenceAffectsLayout: y,
                },
                t
              );
            })
          );
        O = (0, r.ev)([], (0, r.CR)(O), !1);
        for (
          var k = T.current.map(h), M = j.map(h), _ = k.length, P = 0;
          P < _;
          P++
        ) {
          var L = k[P];
          -1 === M.indexOf(L) && E.add(L);
        }
        return (
          m && E.size && (O = []),
          E.forEach(function (t) {
            if (-1 === M.indexOf(t)) {
              var e = C.get(t);
              if (e) {
                var r = k.indexOf(t);
                O.splice(
                  r,
                  0,
                  o.createElement(
                    f,
                    {
                      key: h(e),
                      isPresent: !1,
                      onExitComplete: function () {
                        C.delete(t), E.delete(t);
                        var e = T.current.findIndex(function (e) {
                          return e.key === t;
                        });
                        if ((T.current.splice(e, 1), !E.size)) {
                          if (((T.current = j), !1 === S.current)) return;
                          x(), d && d();
                        }
                      },
                      custom: n,
                      presenceAffectsLayout: y,
                    },
                    e
                  )
                );
              }
            }
          }),
          (O = O.map(function (t) {
            var e = t.key;
            return E.has(e)
              ? t
              : o.createElement(
                  f,
                  { key: h(t), isPresent: !0, presenceAffectsLayout: y },
                  t
                );
          })),
          "production" !== i.O &&
            m &&
            O.length > 1 &&
            console.warn(
              "You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."
            ),
          o.createElement(
            o.Fragment,
            null,
            E.size
              ? O
              : O.map(function (t) {
                  return (0, o.cloneElement)(t);
                })
          )
        );
      };
    },
    5947: function (t, e, n) {
      "use strict";
      n.d(e, {
        hO: function () {
          return a;
        },
        oO: function () {
          return i;
        },
      });
      var r = n(7294),
        o = n(240);
      function i() {
        var t = (0, r.useContext)(o.O);
        if (null === t) return [!0, null];
        var e = t.isPresent,
          n = t.onExitComplete,
          i = t.register,
          a = (0, r.useId)();
        (0, r.useEffect)(function () {
          return i(a);
        }, []);
        return !e && n
          ? [
              !1,
              function () {
                return null === n || void 0 === n ? void 0 : n(a);
              },
            ]
          : [!0];
      }
      function a() {
        return null === (t = (0, r.useContext)(o.O)) || t.isPresent;
        var t;
      }
    },
    5364: function (t, e, n) {
      "use strict";
      n.d(e, {
        p: function () {
          return r;
        },
      });
      var r = (0, n(7294).createContext)({});
    },
    6014: function (t, e, n) {
      "use strict";
      n.d(e, {
        _: function () {
          return r;
        },
      });
      var r = (0, n(7294).createContext)({
        transformPagePoint: function (t) {
          return t;
        },
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    240: function (t, e, n) {
      "use strict";
      n.d(e, {
        O: function () {
          return r;
        },
      });
      var r = (0, n(7294).createContext)(null);
    },
    9135: function (t, e, n) {
      "use strict";
      n.d(e, {
        T: function () {
          return a;
        },
      });
      var r = n(5738),
        o = n(8407),
        i = n(2728);
      function a(t, e) {
        var n,
          a = (0, i.A)(t);
        return (
          a !== r.h && (a = o.P),
          null === (n = a.getAnimatableNone) || void 0 === n
            ? void 0
            : n.call(a, e)
        );
      }
    },
    2728: function (t, e, n) {
      "use strict";
      n.d(e, {
        A: function () {
          return c;
        },
      });
      var r = n(655),
        o = n(7405),
        i = n(5738),
        a = n(6173),
        u = (0, r.pi)((0, r.pi)({}, a.j), {
          color: o.$,
          backgroundColor: o.$,
          outlineColor: o.$,
          fill: o.$,
          stroke: o.$,
          borderColor: o.$,
          borderTopColor: o.$,
          borderRightColor: o.$,
          borderBottomColor: o.$,
          borderLeftColor: o.$,
          filter: i.h,
          WebkitFilter: i.h,
        }),
        c = function (t) {
          return u[t];
        };
    },
    6173: function (t, e, n) {
      "use strict";
      n.d(e, {
        j: function () {
          return u;
        },
      });
      var r = n(2969),
        o = n(1248),
        i = n(655),
        a = (0, i.pi)((0, i.pi)({}, o.Rx), { transform: Math.round }),
        u = {
          borderWidth: r.px,
          borderTopWidth: r.px,
          borderRightWidth: r.px,
          borderBottomWidth: r.px,
          borderLeftWidth: r.px,
          borderRadius: r.px,
          radius: r.px,
          borderTopLeftRadius: r.px,
          borderTopRightRadius: r.px,
          borderBottomRightRadius: r.px,
          borderBottomLeftRadius: r.px,
          width: r.px,
          maxWidth: r.px,
          height: r.px,
          maxHeight: r.px,
          size: r.px,
          top: r.px,
          right: r.px,
          bottom: r.px,
          left: r.px,
          padding: r.px,
          paddingTop: r.px,
          paddingRight: r.px,
          paddingBottom: r.px,
          paddingLeft: r.px,
          margin: r.px,
          marginTop: r.px,
          marginRight: r.px,
          marginBottom: r.px,
          marginLeft: r.px,
          rotate: r.RW,
          rotateX: r.RW,
          rotateY: r.RW,
          rotateZ: r.RW,
          scale: o.bA,
          scaleX: o.bA,
          scaleY: o.bA,
          scaleZ: o.bA,
          skew: r.RW,
          skewX: r.RW,
          skewY: r.RW,
          distance: r.px,
          translateX: r.px,
          translateY: r.px,
          translateZ: r.px,
          x: r.px,
          y: r.px,
          z: r.px,
          perspective: r.px,
          transformPerspective: r.px,
          opacity: o.Fq,
          originX: r.$C,
          originY: r.$C,
          originZ: r.px,
          zIndex: a,
          fillOpacity: o.Fq,
          strokeOpacity: o.Fq,
          numOctaves: a,
        };
    },
    1741: function (t, e, n) {
      "use strict";
      n.d(e, {
        j: function () {
          return r;
        },
      });
      var r = "undefined" !== typeof document;
    },
    9304: function (t, e, n) {
      "use strict";
      n.d(e, {
        O: function () {
          return o;
        },
      });
      var r = n(4155),
        o = ("undefined" === typeof r || r.env, "production");
    },
    8715: function (t, e, n) {
      "use strict";
      n.d(e, {
        Y: function () {
          return i;
        },
        p: function () {
          return o;
        },
      });
      var r = n(8488),
        o = function (t) {
          return Boolean(t && "object" === typeof t && t.mix && t.toValue);
        },
        i = function (t) {
          return (0, r.C)(t) ? t[t.length - 1] || 0 : t;
        };
    },
    5985: function (t, e, n) {
      "use strict";
      n.d(e, {
        L: function () {
          return r;
        },
      });
      var r = (function () {
        function t() {
          this.subscriptions = [];
        }
        return (
          (t.prototype.add = function (t) {
            var e,
              n,
              r = this;
            return (
              (e = this.subscriptions),
              (n = t),
              -1 === e.indexOf(n) && e.push(n),
              function () {
                return (function (t, e) {
                  var n = t.indexOf(e);
                  n > -1 && t.splice(n, 1);
                })(r.subscriptions, t);
              }
            );
          }),
          (t.prototype.notify = function (t, e, n) {
            var r = this.subscriptions.length;
            if (r)
              if (1 === r) this.subscriptions[0](t, e, n);
              else
                for (var o = 0; o < r; o++) {
                  var i = this.subscriptions[o];
                  i && i(t, e, n);
                }
          }),
          (t.prototype.getSize = function () {
            return this.subscriptions.length;
          }),
          (t.prototype.clear = function () {
            this.subscriptions.length = 0;
          }),
          t
        );
      })();
    },
    6681: function (t, e, n) {
      "use strict";
      n.d(e, {
        h: function () {
          return o;
        },
      });
      var r = n(7294);
      function o(t) {
        var e = (0, r.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    8868: function (t, e, n) {
      "use strict";
      n.d(e, {
        L: function () {
          return o;
        },
      });
      var r = n(7294),
        o = n(1741).j ? r.useLayoutEffect : r.useEffect;
    },
    6240: function (t, e, n) {
      "use strict";
      n.d(e, {
        J: function () {
          return s;
        },
        h: function () {
          return l;
        },
      });
      var r = n(655),
        o = n(7294),
        i = n(6014),
        a = n(1741),
        u = { current: null },
        c = !1;
      function s() {
        return (
          !c &&
            (function () {
              if (((c = !0), a.j))
                if (window.matchMedia) {
                  var t = window.matchMedia("(prefers-reduced-motion)"),
                    e = function () {
                      return (u.current = t.matches);
                    };
                  t.addListener(e), e();
                } else u.current = !1;
            })(),
          (0, r.CR)((0, o.useState)(u.current), 1)[0]
        );
      }
      function l() {
        var t = s(),
          e = (0, o.useContext)(i._).reducedMotion;
        return "never" !== e && ("always" === e || t);
      }
    },
    5411: function (t, e, n) {
      "use strict";
      n.d(e, {
        z: function () {
          return o;
        },
      });
      var r = n(7294);
      function o(t) {
        return (0, r.useEffect)(function () {
          return function () {
            return t();
          };
        }, []);
      }
    },
    3234: function (t, e, n) {
      "use strict";
      n.d(e, {
        B: function () {
          return u;
        },
      });
      var r = n(4735),
        o = n(9296),
        i = n(5985),
        a = (function () {
          function t(t) {
            var e,
              n = this;
            (this.version = "7.1.0"),
              (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.updateSubscribers = new i.L()),
              (this.velocityUpdateSubscribers = new i.L()),
              (this.renderSubscribers = new i.L()),
              (this.canTrackVelocity = !1),
              (this.updateAndNotify = function (t, e) {
                void 0 === e && (e = !0), (n.prev = n.current), (n.current = t);
                var o = (0, r.$B)(),
                  i = o.delta,
                  a = o.timestamp;
                n.lastUpdated !== a &&
                  ((n.timeDelta = i),
                  (n.lastUpdated = a),
                  r.ZP.postRender(n.scheduleVelocityCheck)),
                  n.prev !== n.current && n.updateSubscribers.notify(n.current),
                  n.velocityUpdateSubscribers.getSize() &&
                    n.velocityUpdateSubscribers.notify(n.getVelocity()),
                  e && n.renderSubscribers.notify(n.current);
              }),
              (this.scheduleVelocityCheck = function () {
                return r.ZP.postRender(n.velocityCheck);
              }),
              (this.velocityCheck = function (t) {
                t.timestamp !== n.lastUpdated &&
                  ((n.prev = n.current),
                  n.velocityUpdateSubscribers.notify(n.getVelocity()));
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = t),
              (this.canTrackVelocity =
                ((e = this.current), !isNaN(parseFloat(e))));
          }
          return (
            (t.prototype.onChange = function (t) {
              return this.updateSubscribers.add(t);
            }),
            (t.prototype.clearListeners = function () {
              this.updateSubscribers.clear();
            }),
            (t.prototype.onRenderRequest = function (t) {
              return t(this.get()), this.renderSubscribers.add(t);
            }),
            (t.prototype.attach = function (t) {
              this.passiveEffect = t;
            }),
            (t.prototype.set = function (t, e) {
              void 0 === e && (e = !0),
                e && this.passiveEffect
                  ? this.passiveEffect(t, this.updateAndNotify)
                  : this.updateAndNotify(t, e);
            }),
            (t.prototype.get = function () {
              return this.current;
            }),
            (t.prototype.getPrevious = function () {
              return this.prev;
            }),
            (t.prototype.getVelocity = function () {
              return this.canTrackVelocity
                ? (0, o.R)(
                    parseFloat(this.current) - parseFloat(this.prev),
                    this.timeDelta
                  )
                : 0;
            }),
            (t.prototype.start = function (t) {
              var e = this;
              return (
                this.stop(),
                new Promise(function (n) {
                  (e.hasAnimated = !0), (e.stopAnimation = t(n));
                }).then(function () {
                  return e.clearAnimation();
                })
              );
            }),
            (t.prototype.stop = function () {
              this.stopAnimation && this.stopAnimation(), this.clearAnimation();
            }),
            (t.prototype.isAnimating = function () {
              return !!this.stopAnimation;
            }),
            (t.prototype.clearAnimation = function () {
              this.stopAnimation = null;
            }),
            (t.prototype.destroy = function () {
              this.updateSubscribers.clear(),
                this.renderSubscribers.clear(),
                this.stop();
            }),
            t
          );
        })();
      function u(t) {
        return new a(t);
      }
    },
    406: function (t, e, n) {
      "use strict";
      n.d(e, {
        i: function () {
          return r;
        },
      });
      var r = function (t) {
        return Boolean(null !== t && "object" === typeof t && t.getVelocity);
      };
    },
    4735: function (t, e, n) {
      "use strict";
      n.d(e, {
        qY: function () {
          return p;
        },
        ZP: function () {
          return y;
        },
        $B: function () {
          return g;
        },
      });
      const r = (1 / 60) * 1e3,
        o =
          "undefined" !== typeof performance
            ? () => performance.now()
            : () => Date.now(),
        i =
          "undefined" !== typeof window
            ? (t) => window.requestAnimationFrame(t)
            : (t) => setTimeout(() => t(o()), r);
      let a = !0,
        u = !1,
        c = !1;
      const s = { delta: 0, timestamp: 0 },
        l = ["read", "update", "preRender", "render", "postRender"],
        f = l.reduce(
          (t, e) => (
            (t[e] = (function (t) {
              let e = [],
                n = [],
                r = 0,
                o = !1,
                i = !1;
              const a = new WeakSet(),
                u = {
                  schedule: (t, i = !1, u = !1) => {
                    const c = u && o,
                      s = c ? e : n;
                    return (
                      i && a.add(t),
                      -1 === s.indexOf(t) &&
                        (s.push(t), c && o && (r = e.length)),
                      t
                    );
                  },
                  cancel: (t) => {
                    const e = n.indexOf(t);
                    -1 !== e && n.splice(e, 1), a.delete(t);
                  },
                  process: (c) => {
                    if (o) i = !0;
                    else {
                      if (
                        ((o = !0),
                        ([e, n] = [n, e]),
                        (n.length = 0),
                        (r = e.length),
                        r)
                      )
                        for (let n = 0; n < r; n++) {
                          const r = e[n];
                          r(c), a.has(r) && (u.schedule(r), t());
                        }
                      (o = !1), i && ((i = !1), u.process(c));
                    }
                  },
                };
              return u;
            })(() => (u = !0))),
            t
          ),
          {}
        ),
        d = l.reduce((t, e) => {
          const n = f[e];
          return (
            (t[e] = (t, e = !1, r = !1) => (u || m(), n.schedule(t, e, r))), t
          );
        }, {}),
        p = l.reduce((t, e) => ((t[e] = f[e].cancel), t), {}),
        v =
          (l.reduce((t, e) => ((t[e] = () => f[e].process(s)), t), {}),
          (t) => f[t].process(s)),
        h = (t) => {
          (u = !1),
            (s.delta = a ? r : Math.max(Math.min(t - s.timestamp, 40), 1)),
            (s.timestamp = t),
            (c = !0),
            l.forEach(v),
            (c = !1),
            u && ((a = !1), i(h));
        },
        m = () => {
          (u = !0), (a = !0), c || i(h);
        },
        g = () => s;
      var y = d;
    },
    754: function (t, e, n) {
      "use strict";
      n.d(e, {
        j: function () {
          return U;
        },
      });
      var r = n(655),
        o = n(4394);
      const i = (t, e, n) => Math.min(Math.max(n, t), e),
        a = 0.001;
      function u({
        duration: t = 800,
        bounce: e = 0.25,
        velocity: n = 0,
        mass: r = 1,
      }) {
        let u, s;
        (0, o.K)(t <= 1e4, "Spring duration must be 10 seconds or less");
        let l = 1 - e;
        (l = i(0.05, 1, l)),
          (t = i(0.01, 10, t / 1e3)),
          l < 1
            ? ((u = (e) => {
                const r = e * l,
                  o = r * t,
                  i = r - n,
                  u = c(e, l),
                  s = Math.exp(-o);
                return a - (i / u) * s;
              }),
              (s = (e) => {
                const r = e * l * t,
                  o = r * n + n,
                  i = Math.pow(l, 2) * Math.pow(e, 2) * t,
                  s = Math.exp(-r),
                  f = c(Math.pow(e, 2), l);
                return ((-u(e) + a > 0 ? -1 : 1) * ((o - i) * s)) / f;
              }))
            : ((u = (e) => Math.exp(-e * t) * ((e - n) * t + 1) - 0.001),
              (s = (e) => Math.exp(-e * t) * (t * t * (n - e))));
        const f = (function (t, e, n) {
          let r = n;
          for (let o = 1; o < 12; o++) r -= t(r) / e(r);
          return r;
        })(u, s, 5 / t);
        if (((t *= 1e3), isNaN(f)))
          return { stiffness: 100, damping: 10, duration: t };
        {
          const e = Math.pow(f, 2) * r;
          return {
            stiffness: e,
            damping: 2 * l * Math.sqrt(r * e),
            duration: t,
          };
        }
      }
      function c(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      const s = ["duration", "bounce"],
        l = ["stiffness", "damping", "mass"];
      function f(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function d(t) {
        var { from: e = 0, to: n = 1, restSpeed: o = 2, restDelta: i } = t,
          a = (0, r._T)(t, ["from", "to", "restSpeed", "restDelta"]);
        const d = { done: !1, value: e };
        let {
            stiffness: v,
            damping: h,
            mass: m,
            velocity: g,
            duration: y,
            isResolvedFromDuration: b,
          } = (function (t) {
            let e = Object.assign(
              {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
              },
              t
            );
            if (!f(t, l) && f(t, s)) {
              const n = u(t);
              (e = Object.assign(Object.assign(Object.assign({}, e), n), {
                velocity: 0,
                mass: 1,
              })),
                (e.isResolvedFromDuration = !0);
            }
            return e;
          })(a),
          x = p,
          w = p;
        function S() {
          const t = g ? -g / 1e3 : 0,
            r = n - e,
            o = h / (2 * Math.sqrt(v * m)),
            a = Math.sqrt(v / m) / 1e3;
          if (
            (void 0 === i && (i = Math.min(Math.abs(n - e) / 100, 0.4)), o < 1)
          ) {
            const e = c(a, o);
            (x = (i) => {
              const u = Math.exp(-o * a * i);
              return (
                n -
                u *
                  (((t + o * a * r) / e) * Math.sin(e * i) +
                    r * Math.cos(e * i))
              );
            }),
              (w = (n) => {
                const i = Math.exp(-o * a * n);
                return (
                  o *
                    a *
                    i *
                    ((Math.sin(e * n) * (t + o * a * r)) / e +
                      r * Math.cos(e * n)) -
                  i *
                    (Math.cos(e * n) * (t + o * a * r) -
                      e * r * Math.sin(e * n))
                );
              });
          } else if (1 === o)
            x = (e) => n - Math.exp(-a * e) * (r + (t + a * r) * e);
          else {
            const e = a * Math.sqrt(o * o - 1);
            x = (i) => {
              const u = Math.exp(-o * a * i),
                c = Math.min(e * i, 300);
              return (
                n -
                (u * ((t + o * a * r) * Math.sinh(c) + e * r * Math.cosh(c))) /
                  e
              );
            };
          }
        }
        return (
          S(),
          {
            next: (t) => {
              const e = x(t);
              if (b) d.done = t >= y;
              else {
                const r = 1e3 * w(t),
                  a = Math.abs(r) <= o,
                  u = Math.abs(n - e) <= i;
                d.done = a && u;
              }
              return (d.value = d.done ? n : e), d;
            },
            flipTarget: () => {
              (g = -g), ([e, n] = [n, e]), S();
            },
          }
        );
      }
      d.needsInterpolation = (t, e) =>
        "string" === typeof t || "string" === typeof e;
      const p = (t) => 0,
        v = (t, e, n) => {
          const r = e - t;
          return 0 === r ? 1 : (n - t) / r;
        },
        h = (t, e, n) => -n * t + n * e + t;
      var m = n(2960),
        g = n(8059),
        y = n(4582);
      function b(t, e, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? t + 6 * (e - t) * n
            : n < 0.5
            ? e
            : n < 2 / 3
            ? t + (e - t) * (2 / 3 - n) * 6
            : t
        );
      }
      function x({ hue: t, saturation: e, lightness: n, alpha: r }) {
        (t /= 360), (n /= 100);
        let o = 0,
          i = 0,
          a = 0;
        if ((e /= 100)) {
          const r = n < 0.5 ? n * (1 + e) : n + e - n * e,
            u = 2 * n - r;
          (o = b(u, r, t + 1 / 3)), (i = b(u, r, t)), (a = b(u, r, t - 1 / 3));
        } else o = i = a = n;
        return {
          red: Math.round(255 * o),
          green: Math.round(255 * i),
          blue: Math.round(255 * a),
          alpha: r,
        };
      }
      const w = (t, e, n) => {
          const r = t * t,
            o = e * e;
          return Math.sqrt(Math.max(0, n * (o - r) + r));
        },
        S = [m.$, g.m, y.J],
        j = (t) => S.find((e) => e.test(t)),
        O = (t) =>
          `'${t}' is not an animatable color. Use the equivalent color code instead.`,
        E = (t, e) => {
          let n = j(t),
            r = j(e);
          (0, o.k)(!!n, O(t)), (0, o.k)(!!r, O(e));
          let i = n.parse(t),
            a = r.parse(e);
          n === y.J && ((i = x(i)), (n = g.m)),
            r === y.J && ((a = x(a)), (r = g.m));
          const u = Object.assign({}, i);
          return (t) => {
            for (const e in u) "alpha" !== e && (u[e] = w(i[e], a[e], t));
            return (u.alpha = h(i.alpha, a.alpha, t)), n.transform(u);
          };
        };
      var T = n(7405),
        C = n(8407);
      var A = n(9897);
      function k(t, e) {
        return "number" === typeof t
          ? (n) => h(t, e, n)
          : T.$.test(t)
          ? E(t, e)
          : L(t, e);
      }
      const M = (t, e) => {
          const n = [...t],
            r = n.length,
            o = t.map((t, n) => k(t, e[n]));
          return (t) => {
            for (let e = 0; e < r; e++) n[e] = o[e](t);
            return n;
          };
        },
        _ = (t, e) => {
          const n = Object.assign(Object.assign({}, t), e),
            r = {};
          for (const o in n)
            void 0 !== t[o] && void 0 !== e[o] && (r[o] = k(t[o], e[o]));
          return (t) => {
            for (const e in r) n[e] = r[e](t);
            return n;
          };
        };
      function P(t) {
        const e = C.P.parse(t),
          n = e.length;
        let r = 0,
          o = 0,
          i = 0;
        for (let a = 0; a < n; a++)
          r || "number" === typeof e[a] ? r++ : void 0 !== e[a].hue ? i++ : o++;
        return { parsed: e, numNumbers: r, numRGB: o, numHSL: i };
      }
      const L = (t, e) => {
          const n = C.P.createTransformer(e),
            r = P(t),
            i = P(e);
          return r.numHSL === i.numHSL &&
            r.numRGB === i.numRGB &&
            r.numNumbers >= i.numNumbers
            ? (0, A.z)(M(r.parsed, i.parsed), n)
            : ((0, o.K)(
                !0,
                `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              (n) => `${n > 0 ? e : t}`);
        },
        R = (t, e) => (n) => h(t, e, n);
      function V(t, e, n) {
        const r = [],
          o =
            n ||
            ("number" === typeof (i = t[0])
              ? R
              : "string" === typeof i
              ? T.$.test(i)
                ? E
                : L
              : Array.isArray(i)
              ? M
              : "object" === typeof i
              ? _
              : void 0);
        var i;
        const a = t.length - 1;
        for (let u = 0; u < a; u++) {
          let n = o(t[u], t[u + 1]);
          if (e) {
            const t = Array.isArray(e) ? e[u] : e;
            n = (0, A.z)(t, n);
          }
          r.push(n);
        }
        return r;
      }
      function I(t, e, { clamp: n = !0, ease: r, mixer: a } = {}) {
        const u = t.length;
        (0, o.k)(
          u === e.length,
          "Both input and output ranges must be the same length"
        ),
          (0, o.k)(
            !r || !Array.isArray(r) || r.length === u - 1,
            "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."
          ),
          t[0] > t[u - 1] &&
            ((t = [].concat(t)), (e = [].concat(e)), t.reverse(), e.reverse());
        const c = V(e, r, a),
          s =
            2 === u
              ? (function ([t, e], [n]) {
                  return (r) => n(v(t, e, r));
                })(t, c)
              : (function (t, e) {
                  const n = t.length,
                    r = n - 1;
                  return (o) => {
                    let i = 0,
                      a = !1;
                    if (
                      (o <= t[0]
                        ? (a = !0)
                        : o >= t[r] && ((i = r - 1), (a = !0)),
                      !a)
                    ) {
                      let e = 1;
                      for (; e < n && !(t[e] > o || e === r); e++);
                      i = e - 1;
                    }
                    const u = v(t[i], t[i + 1], o);
                    return e[i](u);
                  };
                })(t, c);
        return n ? (e) => s(i(t[0], t[u - 1], e)) : s;
      }
      var N = n(4710);
      function z(t, e) {
        return t.map(() => e || N.mZ).splice(0, t.length - 1);
      }
      function B({
        from: t = 0,
        to: e = 1,
        ease: n,
        offset: r,
        duration: o = 300,
      }) {
        const i = { done: !1, value: t },
          a = Array.isArray(e) ? e : [t, e],
          u = (function (t, e) {
            return t.map((t) => t * e);
          })(
            r && r.length === a.length
              ? r
              : (function (t) {
                  const e = t.length;
                  return t.map((t, n) => (0 !== n ? n / (e - 1) : 0));
                })(a),
            o
          );
        function c() {
          return I(u, a, { ease: Array.isArray(n) ? n : z(a, n) });
        }
        let s = c();
        return {
          next: (t) => ((i.value = s(t)), (i.done = t >= o), i),
          flipTarget: () => {
            a.reverse(), (s = c());
          },
        };
      }
      const H = {
        keyframes: B,
        spring: d,
        decay: function ({
          velocity: t = 0,
          from: e = 0,
          power: n = 0.8,
          timeConstant: r = 350,
          restDelta: o = 0.5,
          modifyTarget: i,
        }) {
          const a = { done: !1, value: e };
          let u = n * t;
          const c = e + u,
            s = void 0 === i ? c : i(c);
          return (
            s !== c && (u = s - e),
            {
              next: (t) => {
                const e = -u * Math.exp(-t / r);
                return (
                  (a.done = !(e > o || e < -o)),
                  (a.value = a.done ? s : s + e),
                  a
                );
              },
              flipTarget: () => {},
            }
          );
        },
      };
      var Z = n(4735);
      function F(t, e, n = 0) {
        return t - e - n;
      }
      const D = (t) => {
        const e = ({ delta: e }) => t(e);
        return { start: () => Z.ZP.update(e, !0), stop: () => Z.qY.update(e) };
      };
      function U(t) {
        var e,
          n,
          {
            from: o,
            autoplay: i = !0,
            driver: a = D,
            elapsed: u = 0,
            repeat: c = 0,
            repeatType: s = "loop",
            repeatDelay: l = 0,
            onPlay: f,
            onStop: p,
            onComplete: v,
            onRepeat: h,
            onUpdate: m,
          } = t,
          g = (0, r._T)(t, [
            "from",
            "autoplay",
            "driver",
            "elapsed",
            "repeat",
            "repeatType",
            "repeatDelay",
            "onPlay",
            "onStop",
            "onComplete",
            "onRepeat",
            "onUpdate",
          ]);
        let y,
          b,
          x,
          { to: w } = g,
          S = 0,
          j = g.duration,
          O = !1,
          E = !0;
        const T = (function (t) {
          if (Array.isArray(t.to)) return B;
          if (H[t.type]) return H[t.type];
          const e = new Set(Object.keys(t));
          return e.has("ease") || (e.has("duration") && !e.has("dampingRatio"))
            ? B
            : e.has("dampingRatio") ||
              e.has("stiffness") ||
              e.has("mass") ||
              e.has("damping") ||
              e.has("restSpeed") ||
              e.has("restDelta")
            ? d
            : B;
        })(g);
        (null === (n = (e = T).needsInterpolation) || void 0 === n
          ? void 0
          : n.call(e, o, w)) &&
          ((x = I([0, 100], [o, w], { clamp: !1 })), (o = 0), (w = 100));
        const C = T(Object.assign(Object.assign({}, g), { from: o, to: w }));
        function A() {
          S++,
            "reverse" === s
              ? ((E = S % 2 === 0),
                (u = (function (t, e, n = 0, r = !0) {
                  return r ? F(e + -t, e, n) : e - (t - e) + n;
                })(u, j, l, E)))
              : ((u = F(u, j, l)), "mirror" === s && C.flipTarget()),
            (O = !1),
            h && h();
        }
        function k(t) {
          if ((E || (t = -t), (u += t), !O)) {
            const t = C.next(Math.max(0, u));
            (b = t.value), x && (b = x(b)), (O = E ? t.done : u <= 0);
          }
          null === m || void 0 === m || m(b),
            O &&
              (0 === S && ((null !== j && void 0 !== j) || (j = u)),
              S < c
                ? (function (t, e, n, r) {
                    return r ? t >= e + n : t <= -n;
                  })(u, j, l, E) && A()
                : (y.stop(), v && v()));
        }
        return (
          i && (null === f || void 0 === f || f(), (y = a(k)), y.start()),
          {
            stop: () => {
              null === p || void 0 === p || p(), y.stop();
            },
          }
        );
      }
    },
    4710: function (t, e, n) {
      "use strict";
      n.d(e, {
        LU: function () {
          return g;
        },
        G2: function () {
          return v;
        },
        XL: function () {
          return m;
        },
        CG: function () {
          return h;
        },
        h9: function () {
          return b;
        },
        yD: function () {
          return x;
        },
        gJ: function () {
          return y;
        },
        Z7: function () {
          return f;
        },
        X7: function () {
          return p;
        },
        Bn: function () {
          return d;
        },
        YQ: function () {
          return u;
        },
        mZ: function () {
          return l;
        },
        Vv: function () {
          return s;
        },
        GE: function () {
          return a;
        },
      });
      const r = (t) => (e) => 1 - t(1 - e),
        o = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        i = (t) => (e) => e * e * ((t + 1) * e - t),
        a = (t) => t,
        u = ((c = 2), (t) => Math.pow(t, c));
      var c;
      const s = r(u),
        l = o(u),
        f = (t) => 1 - Math.sin(Math.acos(t)),
        d = r(f),
        p = o(d),
        v = i(1.525),
        h = r(v),
        m = o(v),
        g = ((t) => {
          const e = i(t);
          return (t) =>
            (t *= 2) < 1 ? 0.5 * e(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
        })(1.525),
        y = (t) => {
          if (1 === t || 0 === t) return t;
          const e = t * t;
          return t < 0.36363636363636365
            ? 7.5625 * e
            : t < 0.7272727272727273
            ? 9.075 * e - 9.9 * t + 3.4
            : t < 0.9
            ? 12.066481994459833 * e - 19.63545706371191 * t + 8.898060941828255
            : 10.8 * t * t - 20.52 * t + 10.72;
        },
        b = r(y),
        x = (t) =>
          t < 0.5 ? 0.5 * (1 - y(1 - 2 * t)) : 0.5 * y(2 * t - 1) + 0.5;
    },
    9897: function (t, e, n) {
      "use strict";
      n.d(e, {
        z: function () {
          return o;
        },
      });
      const r = (t, e) => (n) => e(t(n)),
        o = (...t) => t.reduce(r);
    },
    9296: function (t, e, n) {
      "use strict";
      function r(t, e) {
        return e ? t * (1e3 / e) : 0;
      }
      n.d(e, {
        R: function () {
          return r;
        },
      });
    },
    2960: function (t, e, n) {
      "use strict";
      n.d(e, {
        $: function () {
          return o;
        },
      });
      var r = n(8059);
      const o = {
        test: (0, n(3953).i)("#"),
        parse: function (t) {
          let e = "",
            n = "",
            r = "",
            o = "";
          return (
            t.length > 5
              ? ((e = t.substr(1, 2)),
                (n = t.substr(3, 2)),
                (r = t.substr(5, 2)),
                (o = t.substr(7, 2)))
              : ((e = t.substr(1, 1)),
                (n = t.substr(2, 1)),
                (r = t.substr(3, 1)),
                (o = t.substr(4, 1)),
                (e += e),
                (n += n),
                (r += r),
                (o += o)),
            {
              red: parseInt(e, 16),
              green: parseInt(n, 16),
              blue: parseInt(r, 16),
              alpha: o ? parseInt(o, 16) / 255 : 1,
            }
          );
        },
        transform: r.m.transform,
      };
    },
    4582: function (t, e, n) {
      "use strict";
      n.d(e, {
        J: function () {
          return u;
        },
      });
      var r = n(1248),
        o = n(2969),
        i = n(6777),
        a = n(3953);
      const u = {
        test: (0, a.i)("hsl", "hue"),
        parse: (0, a.d)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: n, alpha: a = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          o.aQ.transform((0, i.Nw)(e)) +
          ", " +
          o.aQ.transform((0, i.Nw)(n)) +
          ", " +
          (0, i.Nw)(r.Fq.transform(a)) +
          ")",
      };
    },
    7405: function (t, e, n) {
      "use strict";
      n.d(e, {
        $: function () {
          return u;
        },
      });
      var r = n(6777),
        o = n(2960),
        i = n(4582),
        a = n(8059);
      const u = {
        test: (t) => a.m.test(t) || o.$.test(t) || i.J.test(t),
        parse: (t) =>
          a.m.test(t)
            ? a.m.parse(t)
            : i.J.test(t)
            ? i.J.parse(t)
            : o.$.parse(t),
        transform: (t) =>
          (0, r.HD)(t)
            ? t
            : t.hasOwnProperty("red")
            ? a.m.transform(t)
            : i.J.transform(t),
      };
    },
    8059: function (t, e, n) {
      "use strict";
      n.d(e, {
        m: function () {
          return c;
        },
      });
      var r = n(1248),
        o = n(6777),
        i = n(3953);
      const a = (0, o.uZ)(0, 255),
        u = Object.assign(Object.assign({}, r.Rx), {
          transform: (t) => Math.round(a(t)),
        }),
        c = {
          test: (0, i.i)("rgb", "red"),
          parse: (0, i.d)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: n, alpha: i = 1 }) =>
            "rgba(" +
            u.transform(t) +
            ", " +
            u.transform(e) +
            ", " +
            u.transform(n) +
            ", " +
            (0, o.Nw)(r.Fq.transform(i)) +
            ")",
        };
    },
    3953: function (t, e, n) {
      "use strict";
      n.d(e, {
        d: function () {
          return i;
        },
        i: function () {
          return o;
        },
      });
      var r = n(6777);
      const o = (t, e) => (n) =>
          Boolean(
            ((0, r.HD)(n) && r.mj.test(n) && n.startsWith(t)) ||
              (e && Object.prototype.hasOwnProperty.call(n, e))
          ),
        i = (t, e, n) => (o) => {
          if (!(0, r.HD)(o)) return o;
          const [i, a, u, c] = o.match(r.KP);
          return {
            [t]: parseFloat(i),
            [e]: parseFloat(a),
            [n]: parseFloat(u),
            alpha: void 0 !== c ? parseFloat(c) : 1,
          };
        };
    },
    5738: function (t, e, n) {
      "use strict";
      n.d(e, {
        h: function () {
          return c;
        },
      });
      var r = n(8407),
        o = n(6777);
      const i = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function a(t) {
        let [e, n] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        const [r] = n.match(o.KP) || [];
        if (!r) return t;
        const a = n.replace(r, "");
        let u = i.has(e) ? 1 : 0;
        return r !== n && (u *= 100), e + "(" + u + a + ")";
      }
      const u = /([a-z-]*)\(.*?\)/g,
        c = Object.assign(Object.assign({}, r.P), {
          getAnimatableNone: (t) => {
            const e = t.match(u);
            return e ? e.map(a).join(" ") : t;
          },
        });
    },
    8407: function (t, e, n) {
      "use strict";
      n.d(e, {
        P: function () {
          return d;
        },
      });
      var r = n(7405),
        o = n(1248),
        i = n(6777);
      const a = "${c}",
        u = "${n}";
      function c(t) {
        "number" === typeof t && (t = `${t}`);
        const e = [];
        let n = 0;
        const c = t.match(i.dA);
        c &&
          ((n = c.length),
          (t = t.replace(i.dA, a)),
          e.push(...c.map(r.$.parse)));
        const s = t.match(i.KP);
        return (
          s && ((t = t.replace(i.KP, u)), e.push(...s.map(o.Rx.parse))),
          { values: e, numColors: n, tokenised: t }
        );
      }
      function s(t) {
        return c(t).values;
      }
      function l(t) {
        const { values: e, numColors: n, tokenised: o } = c(t),
          s = e.length;
        return (t) => {
          let e = o;
          for (let o = 0; o < s; o++)
            e = e.replace(
              o < n ? a : u,
              o < n ? r.$.transform(t[o]) : (0, i.Nw)(t[o])
            );
          return e;
        };
      }
      const f = (t) => ("number" === typeof t ? 0 : t);
      const d = {
        test: function (t) {
          var e, n, r, o;
          return (
            isNaN(t) &&
            (0, i.HD)(t) &&
            (null !==
              (n =
                null === (e = t.match(i.KP)) || void 0 === e
                  ? void 0
                  : e.length) && void 0 !== n
              ? n
              : 0) +
              (null !==
                (o =
                  null === (r = t.match(i.dA)) || void 0 === r
                    ? void 0
                    : r.length) && void 0 !== o
                ? o
                : 0) >
              0
          );
        },
        parse: s,
        createTransformer: l,
        getAnimatableNone: function (t) {
          const e = s(t);
          return l(t)(e.map(f));
        },
      };
    },
    1248: function (t, e, n) {
      "use strict";
      n.d(e, {
        Fq: function () {
          return i;
        },
        Rx: function () {
          return o;
        },
        bA: function () {
          return a;
        },
      });
      var r = n(6777);
      const o = {
          test: (t) => "number" === typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        i = Object.assign(Object.assign({}, o), { transform: (0, r.uZ)(0, 1) }),
        a = Object.assign(Object.assign({}, o), { default: 1 });
    },
    2969: function (t, e, n) {
      "use strict";
      n.d(e, {
        $C: function () {
          return l;
        },
        RW: function () {
          return i;
        },
        aQ: function () {
          return a;
        },
        px: function () {
          return u;
        },
        vh: function () {
          return c;
        },
        vw: function () {
          return s;
        },
      });
      var r = n(6777);
      const o = (t) => ({
          test: (e) =>
            (0, r.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        i = o("deg"),
        a = o("%"),
        u = o("px"),
        c = o("vh"),
        s = o("vw"),
        l = Object.assign(Object.assign({}, a), {
          parse: (t) => a.parse(t) / 100,
          transform: (t) => a.transform(100 * t),
        });
    },
    6777: function (t, e, n) {
      "use strict";
      n.d(e, {
        HD: function () {
          return c;
        },
        KP: function () {
          return i;
        },
        Nw: function () {
          return o;
        },
        dA: function () {
          return a;
        },
        mj: function () {
          return u;
        },
        uZ: function () {
          return r;
        },
      });
      const r = (t, e) => (n) => Math.max(Math.min(n, e), t),
        o = (t) => (t % 1 ? Number(t.toFixed(5)) : t),
        i = /(-)?([\d]*\.?[\d])+/g,
        a =
          /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        u =
          /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function c(t) {
        return "string" === typeof t;
      }
    },
  },
  function (t) {
    var e = function (e) {
      return t((t.s = e));
    };
    t.O(0, [774, 179], function () {
      return e(9266), e(387);
    });
    var n = t.O();
    _N_E = n;
  },
]);
