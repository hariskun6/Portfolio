(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [91],
  {
    9868: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/articles",
        function () {
          return n(5631);
        },
      ]);
    },
    4451: function (e, t, n) {
      "use strict";
      n.d(t, {
        V: function () {
          return Z;
        },
      });
      var s = n(7568),
        i = n(1799),
        r = n(9396),
        a = n(9534),
        c = n(4051),
        h = n.n(c),
        l = n(5893),
        o = n(2323),
        u = n(6240),
        v = n(7378),
        d = n(7294);
      function p(e) {
        return f.apply(this, arguments);
      }
      function f() {
        return (f = (0, s.Z)(
          h().mark(function e(t) {
            return h().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      new Promise(function (e) {
                        return setTimeout(e, t);
                      })
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var m = n(2362),
        _ = n(9085),
        x = n.n(_),
        g = [
          "\u30a2",
          "\u30a4",
          "\u30a6",
          "\u30a8",
          "\u30aa",
          "\u30ab",
          "\u30ad",
          "\u30af",
          "\u30b1",
          "\u30b3",
          "\u30b5",
          "\u30b7",
          "\u30b9",
          "\u30bb",
          "\u30bd",
          "\u30bf",
          "\u30c1",
          "\u30c4",
          "\u30c6",
          "\u30c8",
          "\u30ca",
          "\u30cb",
          "\u30cc",
          "\u30cd",
          "\u30ce",
          "\u30cf",
          "\u30d2",
          "\u30d5",
          "\u30d8",
          "\u30db",
          "\u30de",
          "\u30df",
          "\u30e0",
          "\u30e1",
          "\u30e2",
          "\u30e4",
          "\u30e6",
          "\u30e8",
          "\u30fc",
          "\u30e9",
          "\u30ea",
          "\u30eb",
          "\u30ec",
          "\u30ed",
          "\u30ef",
          "\u30f0",
          "\u30f1",
          "\u30f2",
          "\u30f3",
          "\u30ac",
          "\u30ae",
          "\u30b0",
          "\u30b2",
          "\u30b4",
          "\u30b6",
          "\u30b8",
          "\u30ba",
          "\u30bc",
          "\u30be",
          "\u30c0",
          "\u30c2",
          "\u30c5",
          "\u30c7",
          "\u30c9",
          "\u30d0",
          "\u30d3",
          "\u30d6",
          "\u30d9",
          "\u30dc",
          "\u30d1",
          "\u30d4",
          "\u30d7",
          "\u30da",
          "\u30dd",
        ],
        j = "glyph",
        y = "value";
      var Z = (0, d.memo)(function (e) {
        var t = e.text,
          n = e.start,
          c = void 0 === n || n,
          f = e.delay,
          _ = void 0 === f ? 0 : f,
          Z = e.className,
          N = (0, a.Z)(e, ["text", "start", "delay", "className"]),
          V = (0, d.useRef)([{ type: j, value: "" }]),
          A = (0, d.useRef)(),
          D = (0, u.J)(),
          w = (0, v.q)(0, { stiffness: 8, damping: 5 });
        return (
          (0, d.useEffect)(
            function () {
              var e = A.current,
                n = t.split(""),
                i = function () {
                  var t = V.current.map(function (e) {
                    return '<span class="'
                      .concat(x()[e.type], '">')
                      .concat(e.value, "</span>");
                  });
                  e.innerHTML = t.join("");
                },
                r = w.onChange(function (e) {
                  (V.current = (function (e, t, n) {
                    return e.map(function (e, s) {
                      if (s < n) return { type: y, value: e };
                      if (n % 1 < 0.5) {
                        var i = Math.floor(Math.random() * g.length);
                        return { type: j, value: g[i] };
                      }
                      return { type: j, value: t[s].value };
                    });
                  })(n, V.current, e)),
                    i();
                }),
                a = (function () {
                  var e = (0, s.Z)(
                    h().mark(function e() {
                      return h().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), p(_);
                            case 2:
                              w.set(n.length);
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })();
              return (
                c && !D && a(),
                D &&
                  ((V.current = n.map(function (e, t) {
                    return { type: y, value: n[t] };
                  })),
                  i()),
                function () {
                  null === r || void 0 === r || r();
                }
              );
            },
            [w, D, c, _, t]
          ),
          (0, l.jsxs)(
            "span",
            (0, r.Z)((0, i.Z)({ className: (0, m.Sh)(x().text, Z) }, N), {
              children: [
                (0, l.jsx)(o.T, { className: x().label, children: t }),
                (0, l.jsx)("span", {
                  "aria-hidden": !0,
                  className: x().content,
                  ref: A,
                }),
              ],
            })
          )
        );
      });
    },
    3185: function (e, t, n) {
      "use strict";
      n.d(t, {
        i: function () {
          return o;
        },
      });
      var s = n(1799),
        i = n(9396),
        r = n(9534),
        a = n(5893),
        c = n(2362),
        h = n(3265),
        l = n.n(h),
        o = function (e) {
          var t = e.lineWidth,
            n = e.lineHeight,
            h = e.notchWidth,
            o = e.notchHeight,
            u = e.collapseDelay,
            v = e.collapsed,
            d = e.className,
            p = e.style,
            f = (0, r.Z)(e, [
              "lineWidth",
              "lineHeight",
              "notchWidth",
              "notchHeight",
              "collapseDelay",
              "collapsed",
              "className",
              "style",
            ]);
          return (0, a.jsxs)(
            "div",
            (0, i.Z)(
              (0, s.Z)(
                {
                  className: (0, c.Sh)(l().divider, d),
                  style: (0, c.Fh)(
                    {
                      lineWidth: t,
                      lineHeight: n,
                      notchWidth: h,
                      notchHeight: o,
                      collapseDelay: (0, c.aU)(u),
                    },
                    p
                  ),
                },
                f
              ),
              {
                children: [
                  (0, a.jsx)("div", {
                    className: l().line,
                    "data-collapsed": v,
                  }),
                  (0, a.jsx)("div", {
                    className: l().notch,
                    "data-collapsed": v,
                    style: (0, c.Fh)({ collapseDelay: (0, c.aU)(u + 160) }),
                  }),
                ],
              }
            )
          );
        };
      o.defaultProps = {
        lineWidth: "100%",
        lineHeight: "2px",
        notchWidth: "90px",
        notchHeight: "10px",
        collapsed: !1,
        collapseDelay: 0,
      };
    },
    5631: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSG: function () {
            return H;
          },
          default: function () {
            return b;
          },
        });
      var s,
        i = n(1799),
        r = n(9534),
        a = n(5893),
        c = n(7294);
      function h() {
        return (
          (h = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var s in n)
                    Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
                }
                return e;
              }),
          h.apply(this, arguments)
        );
      }
      var l = (e) =>
          c.createElement(
            "svg",
            h(
              {
                width: 153,
                height: 20,
                fill: "currentColor",
                viewBox: "0 0 153 20",
              },
              e
            ),
            s ||
              (s = c.createElement("path", {
                fillOpacity: 0.6,
                d: "M153 0v20h-2V0h2Zm-4 0v20h-4V0h4Zm-6 0v20h-2V0h2Zm-4 4v3h-2V4h2Zm-5 0V0h3v4h-3Zm-2 0h2v6h-2V4Zm0 0h-2V0h2v4Zm-4-4v4h-4v5h-2v4h-5V9h3V6h-5V0h13Zm-11 13v3h-2v-3h2Zm-4-13v6h-2v4h2v4h-2v2h2v4h-4V0h4Zm-6 4V0h-2v4h2Zm-1 6V7h-4V4h-2V0h-2v4h-2V0H86v4h-2v3h-2v2h-2v4h6v3h-2v4h6v-4h-2v-3h-2V9h-2V7h4V4h3v9h2v7h7v-4h-5v-3h-2V9h2V7h3v3h2v4h6v-4ZM74 7v3h-2v2h2v8h-4V0h8v5h-3V4h-3v3h2Zm28 13h4v-4h-4v4Zm28-6v-4h-2v6h2v4h2v-6h-2Zm9 2v-6h-2v6h-2v4h4v-4Zm-12 4v-4h-4v4h4ZM0 20h2V0H0v20Zm4 0h4V0H4v20Zm6 0h2V0h-2v20Zm5 0h7V0h-7v20Zm12 0h-3V0h3v20Zm5 0h3v-4h5v-6h-5V6h7V3h3V0h-7v3h-3V0h-3v20ZM52 3v3h-3v3h-4V6h1V3h6Zm23 13h6v4h-6v-4Zm-29-6v3h3v-3h3v3h-2v6h-3v-3h-2v-3h-2v-3h3Zm8 6v3h-2v-3h2Zm3 0v3h2v-3h2v-3h-2v3h-2Zm0 0v-6h-3v6h3Zm4-7V6h2V0h-2v6h-2v3h2Zm5-3v3h-2V6h2Zm2 0h-2V3h2v3Zm-9-3V0h-2v3h2Z",
              }))
          ),
        o = n(8526),
        u = n(4451),
        v = n(3185),
        d = n(5192),
        p = n(2221),
        f = n(1424),
        m = n(5633),
        _ = n(6602),
        x = n(7346),
        g = n(6240),
        j = n(4529),
        y = n(1664),
        Z = n.n(y),
        N = n(7715),
        V = n(2362),
        A = n(6923),
        D = n.n(A),
        w = function (e) {
          var t = e.slug,
            n = e.title,
            s = e.abstract,
            i = e.date,
            r = e.featured,
            h = e.banner,
            l = e.timecode,
            u = e.index,
            d = (0, c.useState)(!1),
            m = d[0],
            _ = d[1],
            j = (0, c.useState)(null),
            y = j[0],
            A = j[1],
            w = (0, g.J)();
          (0, c.useEffect)(
            function () {
              A((0, N.p)(i));
            },
            [i, y]
          );
          return (0, a.jsxs)("article", {
            className: D().post,
            "data-featured": !!r,
            style: void 0 !== u ? (0, V.Fh)({ delay: 100 * u + 200 }) : void 0,
            children: [
              r &&
                (0, a.jsx)(x.x, {
                  className: D().postLabel,
                  size: "s",
                  children: "Featured",
                }),
              r &&
                !!h &&
                (0, a.jsx)("div", {
                  className: D().postImage,
                  children: (0, a.jsx)(f.E, {
                    noPauseButton: !0,
                    play: w ? void 0 : m,
                    src: { src: h },
                    placeholder: {
                      src: "".concat(h.split(".")[0], "-placeholder.jpg"),
                    },
                    alt: "",
                    role: "presentation",
                  }),
                }),
              (0, a.jsx)(Z(), {
                href: "/articles/".concat(t),
                scroll: !1,
                children: (0, a.jsx)("a", {
                  className: D().postLink,
                  onMouseEnter: function () {
                    _(!0);
                  },
                  onMouseLeave: function () {
                    _(!1);
                  },
                  children: (0, a.jsxs)("div", {
                    className: D().postDetails,
                    children: [
                      (0, a.jsxs)("div", {
                        "aria-hidden": !0,
                        className: D().postDate,
                        children: [
                          (0, a.jsx)(v.i, {
                            notchWidth: "64px",
                            notchHeight: "8px",
                          }),
                          y,
                        ],
                      }),
                      (0, a.jsx)(p.X, {
                        as: "h2",
                        level: r ? 2 : 4,
                        children: n,
                      }),
                      (0, a.jsx)(x.x, {
                        size: r ? "l" : "s",
                        as: "p",
                        children: s,
                      }),
                      (0, a.jsxs)("div", {
                        className: D().postFooter,
                        children: [
                          (0, a.jsx)(o.z, {
                            secondary: !0,
                            iconHoverShift: !0,
                            icon: "chevronRight",
                            as: "div",
                            children: "Read article",
                          }),
                          (0, a.jsx)(x.x, {
                            className: D().timecode,
                            size: "s",
                            children: l,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              r &&
                (0, a.jsx)(x.x, {
                  "aria-hidden": !0,
                  className: D().postTag,
                  size: "s",
                  children: "477",
                }),
            ],
          });
        },
        k = function (e) {
          var t = e.index;
          return (0, a.jsx)("article", {
            "aria-hidden": "true",
            className: (0, V.Sh)(D().post, D().skeleton),
            style: void 0 !== t ? (0, V.Fh)({ delay: 100 * t + 200 }) : void 0,
            children: (0, a.jsx)("div", {
              className: D().postLink,
              children: (0, a.jsxs)("div", {
                className: D().postDetails,
                children: [
                  (0, a.jsxs)("div", {
                    "aria-hidden": !0,
                    className: D().postDate,
                    children: [
                      (0, a.jsx)(v.i, {
                        notchWidth: "64px",
                        notchHeight: "8px",
                      }),
                      "Coming soon...",
                    ],
                  }),
                  (0, a.jsx)(p.X, {
                    className: D().skeletonBone,
                    as: "h2",
                    level: 4,
                    style: { height: 24, width: "70%" },
                  }),
                  (0, a.jsx)(x.x, {
                    className: D().skeletonBone,
                    size: "s",
                    as: "p",
                    style: { height: 90, width: "100%" },
                  }),
                  (0, a.jsxs)("div", {
                    className: D().postFooter,
                    children: [
                      (0, a.jsx)(o.z, {
                        secondary: !0,
                        iconHoverShift: !0,
                        icon: "chevronRight",
                        as: "div",
                        children: "Read more",
                      }),
                      (0, a.jsx)(x.x, {
                        className: D().timecode,
                        size: "s",
                        children: "00:00:00:00",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        b = function (e) {
          var t = e.posts,
            n = e.featured,
            s = (0, j.iP)().width <= 1190,
            c = (0, a.jsxs)("header", {
              className: D().header,
              children: [
                (0, a.jsx)(p.X, {
                  className: D().heading,
                  level: 5,
                  as: "h1",
                  children: (0, a.jsx)(u.V, { text: "Latest articles" }),
                }),
                (0, a.jsx)(l, {}),
              ],
            }),
            h = (0, a.jsxs)("div", {
              className: D().list,
              children: [
                !s && c,
                t.map(function (e, t) {
                  var n = e.slug,
                    s = (0, r.Z)(e, ["slug"]);
                  return (0, a.jsx)(w, (0, i.Z)({ slug: n, index: t }, s), n);
                }),
                Array(2)
                  .fill()
                  .map(function (e, t) {
                    return (0, a.jsx)(k, {}, t);
                  }),
              ],
            }),
            o = (0, a.jsx)(w, (0, i.Z)({}, n));
          return (0, a.jsxs)("article", {
            className: D().articles,
            children: [
              (0, a.jsx)(m.h, {
                title: "Articles",
                description:
                  "A collection of technical design and development articles. May contain incoherent ramblings.",
              }),
              (0, a.jsxs)(_.$, {
                className: D().content,
                children: [
                  !s &&
                    (0, a.jsxs)("div", {
                      className: D().grid,
                      children: [h, o],
                    }),
                  s &&
                    (0, a.jsxs)("div", {
                      className: D().grid,
                      children: [c, o, h],
                    }),
                ],
              }),
              (0, a.jsx)(d.$, {}),
            ],
          });
        },
        H = !0;
    },
    7715: function (e, t, n) {
      "use strict";
      function s(e) {
        return new Date(e).toLocaleDateString("default", {
          year: "numeric",
          month: "long",
          day: "2-digit",
        });
      }
      n.d(t, {
        p: function () {
          return s;
        },
      });
    },
    9085: function (e) {
      e.exports = {
        text: "DecoderText_text__ZFBnw",
        glyph: "DecoderText_glyph__vCP7h",
        value: "DecoderText_value__DIA5G",
      };
    },
    3265: function (e) {
      e.exports = {
        divider: "Divider_divider__R3vqT",
        line: "Divider_line__bFTLx",
        notch: "Divider_notch__1kxAj",
      };
    },
    6923: function (e) {
      e.exports = {
        articles: "Articles_articles__kfgwL",
        grid: "Articles_grid__TXTIl",
        header: "Articles_header__7uF5I",
        heading: "Articles_heading___Kjnq",
        list: "Articles_list__QQ4iW",
        divider: "Articles_divider__tuqwq",
        skeleton: "Articles_skeleton__NvF6B",
        skeletonBone: "Articles_skeletonBone__siy8J",
        post: "Articles_post__uHvxb",
        postLabel: "Articles_postLabel__5PL1Q",
        postTag: "Articles_postTag__eDm5n",
        labelIn: "Articles_labelIn__Gbml_",
        tagIn: "Articles_tagIn__EAEGX",
        postLink: "Articles_postLink__kuFhH",
        postDate: "Articles_postDate__0YEAe",
        postImage: "Articles_postImage__DkYDa",
        postDetails: "Articles_postDetails__KUGXj",
        postFooter: "Articles_postFooter__99udj",
        timecode: "Articles_timecode__YgrGL",
      };
    },
    7568: function (e, t, n) {
      "use strict";
      function s(e, t, n, s, i, r, a) {
        try {
          var c = e[r](a),
            h = c.value;
        } catch (l) {
          return void n(l);
        }
        c.done ? t(h) : Promise.resolve(h).then(s, i);
      }
      function i(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (i, r) {
            var a = e.apply(t, n);
            function c(e) {
              s(a, i, r, c, h, "next", e);
            }
            function h(e) {
              s(a, i, r, c, h, "throw", e);
            }
            c(void 0);
          });
        };
      }
      n.d(t, {
        Z: function () {
          return i;
        },
      });
    },
    7378: function (e, t, n) {
      "use strict";
      n.d(t, {
        q: function () {
          return u;
        },
      });
      var s = n(655),
        i = n(7294),
        r = n(754),
        a = n(406),
        c = n(3234),
        h = n(6014),
        l = n(6681);
      var o = n(8868);
      function u(e, t) {
        void 0 === t && (t = {});
        var n = (0, i.useContext)(h._).isStatic,
          u = (0, i.useRef)(null),
          v = (function (e) {
            var t = (0, l.h)(function () {
              return (0, c.B)(e);
            });
            if ((0, i.useContext)(h._).isStatic) {
              var n = (0, s.CR)((0, i.useState)(e), 2)[1];
              (0, i.useEffect)(function () {
                return t.onChange(n);
              }, []);
            }
            return t;
          })((0, a.i)(e) ? e.get() : e);
        return (
          (0, i.useMemo)(
            function () {
              return v.attach(function (e, i) {
                return n
                  ? i(e)
                  : (u.current && u.current.stop(),
                    (u.current = (0, r.j)(
                      (0, s.pi)(
                        (0, s.pi)(
                          { from: v.get(), to: e, velocity: v.getVelocity() },
                          t
                        ),
                        { onUpdate: i }
                      )
                    )),
                    v.get());
              });
            },
            [JSON.stringify(t)]
          ),
          (function (e, t) {
            (0, o.L)(
              function () {
                if ((0, a.i)(e)) return e.onChange(t);
              },
              [t]
            );
          })(e, function (e) {
            return v.set(parseFloat(e));
          }),
          v
        );
      }
    },
  },
  function (e) {
    e.O(0, [199, 774, 888, 179], function () {
      return (t = 9868), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
