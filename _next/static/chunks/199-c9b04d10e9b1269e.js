(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [199],
  {
    5192: function (e, t, n) {
      "use strict";
      n.d(t, {
        $: function () {
          return l;
        },
      });
      var r = n(5893),
        a = n(270),
        i = n(7346),
        s = n(2362),
        o = n(1883),
        c = n.n(o),
        l = function (e) {
          var t = e.className;
          return (0, r.jsx)("footer", {
            className: (0, s.Sh)(c().footer, t),
            children: (0, r.jsxs)(i.x, {
              size: "s",
              align: "center",
              children: [
                (0, r.jsx)("span", {
                  className: c().date,
                  children: "\xa9 ".concat(
                    new Date().getFullYear(),
                    " Muhammad Harris."
                  ),
                }),
                (0, r.jsx)(a.r, {
                  secondary: !0,
                  className: c().link,
                  href: "/humans.txt",
                  target: "_self",
                  children: "Crafted by yours truly",
                }),
              ],
            }),
          });
        };
    },
    2221: function (e, t, n) {
      "use strict";
      n.d(t, {
        X: function () {
          return d;
        },
      });
      var r = n(1799),
        a = n(9396),
        i = n(9534),
        s = n(5893),
        o = n(7294),
        c = n(2362),
        l = n(361),
        u = n.n(l),
        d = function (e) {
          var t = e.children,
            n = e.level,
            l = void 0 === n ? 1 : n,
            d = e.as,
            p = e.align,
            f = void 0 === p ? "auto" : p,
            m = e.weight,
            h = void 0 === m ? "medium" : m,
            v = e.className,
            g = (0, i.Z)(e, [
              "children",
              "level",
              "as",
              "align",
              "weight",
              "className",
            ]),
            x = Math.min(Math.max(l, 0), 5),
            y = d || "h".concat(Math.max(x, 1));
          return (0, s.jsx)(o.Fragment, {
            children: (0, s.jsx)(
              y,
              (0, a.Z)(
                (0, r.Z)(
                  {
                    className: (0, c.Sh)(u().heading, v),
                    "data-align": f,
                    "data-weight": h,
                    "data-level": x,
                  },
                  g
                ),
                { children: t }
              )
            ),
          });
        };
    },
    1424: function (e, t, n) {
      "use strict";
      n.d(t, {
        E: function () {
          return y;
        },
      });
      var r = n(7568),
        a = n(1799),
        i = n(9534),
        s = n(4051),
        o = n.n(s),
        c = n(5893),
        l = n(8526),
        u = n(1879),
        d = n(8718),
        p = n(6240),
        f = n(4529),
        m = n(7294),
        h = n(5622),
        v = n(2362),
        g = n(2288),
        x = n.n(g),
        y = function (e) {
          var t = e.className,
            n = e.style,
            r = e.reveal,
            s = e.delay,
            o = void 0 === s ? 0 : s,
            l = e.raised,
            u = e.src,
            p = e.srcSet,
            h = e.placeholder,
            g = (0, i.Z)(e, [
              "className",
              "style",
              "reveal",
              "delay",
              "raised",
              "src",
              "srcSet",
              "placeholder",
            ]),
            y = (0, m.useState)(!1),
            j = y[0],
            S = y[1],
            N = (0, d.Fg)().themeId,
            Z = (0, m.useRef)(),
            b = u || (null === p || void 0 === p ? void 0 : p[0]),
            k = (0, f.NM)(Z, !_(b)),
            E = (0, m.useCallback)(function () {
              S(!0);
            }, []);
          return (0, c.jsx)("div", {
            className: (0, v.Sh)(x().image, t),
            "data-visible": k || j,
            "data-reveal": r,
            "data-raised": l,
            "data-theme": N,
            style: (0, v.Fh)({ delay: (0, v.aU)(o) }, n),
            ref: Z,
            children: (0, c.jsx)(
              w,
              (0, a.Z)(
                {
                  delay: o,
                  onLoad: E,
                  loaded: j,
                  inViewport: k,
                  reveal: r,
                  src: b,
                  srcSet: p,
                  placeholder: h,
                },
                g
              )
            ),
          });
        },
        w = function (e) {
          var t = e.onLoad,
            n = e.loaded,
            s = e.inViewport,
            d = e.srcSet,
            g = e.placeholder,
            y = e.delay,
            w = e.src,
            j = e.alt,
            S = e.play,
            N = void 0 === S || S,
            Z = e.restartOnPause,
            b = e.reveal,
            k = e.sizes,
            E = e.noPauseButton,
            F = (0, i.Z)(e, [
              "onLoad",
              "loaded",
              "inViewport",
              "srcSet",
              "placeholder",
              "delay",
              "src",
              "alt",
              "play",
              "restartOnPause",
              "reveal",
              "sizes",
              "noPauseButton",
            ]),
            I = (0, p.J)(),
            R = (0, m.useState)(!0),
            L = R[0],
            P = R[1],
            z = (0, m.useState)(!I),
            C = z[0],
            W = z[1],
            B = (0, m.useState)(),
            M = B[0],
            H = B[1],
            U = (0, m.useState)(!1),
            V = U[0],
            D = U[1],
            J = (0, m.useRef)(),
            K = (0, m.useRef)(),
            O = _(w),
            X = s,
            Y = (0, h.A2)(d),
            A = (0, f.f3)();
          (0, m.useEffect)(
            function () {
              var e = (function () {
                var e = (0, r.Z)(
                  o().mark(function e() {
                    var t;
                    return o().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), (0, h.Ro)({ srcSet: d, sizes: k })
                            );
                          case 2:
                            (t = e.sent), H(t);
                          case 4:
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
              O && d ? e() : O && H(w.src);
            },
            [O, k, w, d]
          ),
            (0, m.useEffect)(
              function () {
                if (K.current && M) {
                  var e = function () {
                    W(!1), K.current.pause();
                  };
                  N || (e(), Z && (K.current.currentTime = 0)),
                    V || (s ? s && !I && N && (W(!0), K.current.play()) : e());
                }
              },
              [s, N, I, Z, V, M]
            );
          return (0, c.jsxs)("div", {
            className: x().elementWrapper,
            "data-reveal": b,
            "data-visible": s || n,
            style: (0, v.Fh)({ delay: (0, v.aU)(y + 1e3) }),
            children: [
              O &&
                A &&
                (0, c.jsxs)(m.Fragment, {
                  children: [
                    (0, c.jsx)(
                      "video",
                      (0, a.Z)(
                        {
                          muted: !0,
                          loop: !0,
                          playsInline: !0,
                          className: x().element,
                          "data-loaded": n,
                          autoPlay: !I,
                          role: "img",
                          onLoadStart: t,
                          src: M,
                          "aria-label": j,
                          ref: K,
                        },
                        F
                      )
                    ),
                    !E &&
                      (0, c.jsxs)(l.z, {
                        className: x().button,
                        onClick: function (e) {
                          e.preventDefault(),
                            D(!0),
                            K.current.paused
                              ? (W(!0), K.current.play())
                              : (W(!1), K.current.pause());
                        },
                        children: [
                          (0, c.jsx)(u.J, { icon: C ? "pause" : "play" }),
                          C ? "Pause" : "Play",
                        ],
                      }),
                  ],
                }),
              !O &&
                (0, c.jsx)(
                  "img",
                  (0, a.Z)(
                    {
                      className: x().element,
                      "data-loaded": n,
                      onLoad: t,
                      decoding: "async",
                      src: X ? w.src : void 0,
                      srcSet: X ? Y : void 0,
                      width: w.width,
                      height: w.height,
                      alt: j,
                      sizes: k,
                    },
                    F
                  )
                ),
              L &&
                (0, c.jsx)("img", {
                  "aria-hidden": !0,
                  className: x().placeholder,
                  "data-loaded": n,
                  style: (0, v.Fh)({ delay: (0, v.aU)(y) }),
                  ref: J,
                  src: g.src,
                  width: g.width,
                  height: g.height,
                  onTransitionEnd: function () {
                    return P(!1);
                  },
                  decoding: "async",
                  alt: "",
                  role: "presentation",
                }),
            ],
          });
        };
      function _(e) {
        return "string" === typeof e.src && e.src.endsWith(".mp4");
      }
    },
    270: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return m;
        },
      });
      var r = n(1799),
        a = n(9396),
        i = n(9534),
        s = n(5893),
        o = n(1664),
        c = n.n(o),
        l = n(7294),
        u = n(2362),
        d = n(8469),
        p = n.n(d),
        f = ["txt", "png", "jpg"];
      var m = (0, l.forwardRef)(function (e, t) {
          var n = e.href,
            a = (0, i.Z)(e, ["href"]);
          return (function (e) {
            var t = f.includes(
              null === e || void 0 === e ? void 0 : e.split(".").pop()
            );
            return (
              (null === e || void 0 === e ? void 0 : e.includes("://")) ||
              "#" === (null === e || void 0 === e ? void 0 : e[0]) ||
              t
            );
          })(n)
            ? (0, s.jsx)(h, (0, r.Z)({ href: n, ref: t }, a))
            : (0, s.jsx)(c(), {
                passHref: !0,
                href: n,
                scroll: !1,
                children: (0, s.jsx)(h, (0, r.Z)({ ref: t }, a)),
              });
        }),
        h = (0, l.forwardRef)(function (e, t) {
          var n = e.rel,
            o = e.target,
            c = e.children,
            l = e.secondary,
            d = e.className,
            f = e.href,
            m = (0, i.Z)(e, [
              "rel",
              "target",
              "children",
              "secondary",
              "className",
              "href",
            ]),
            h = null === f || void 0 === f ? void 0 : f.includes("://"),
            v = n || (h ? "noreferrer noopener" : void 0),
            g = o || (h ? "_blank" : void 0);
          return (0,
          s.jsx)("a", (0, a.Z)((0, r.Z)({ className: (0, u.Sh)(p().link, d), "data-secondary": l, rel: v, href: f, target: g, ref: t }, m), { children: c }));
        });
    },
    5633: function (e, t, n) {
      "use strict";
      n.d(t, {
        h: function () {
          return u;
        },
      });
      var r = n(5893),
        a = n(9008),
        i = n.n(a),
        s = "https://hamishw.com",
        o = "Muhammad Harris",
        c = "@hamishMW",
        l = "".concat(s, "/social-image.png"),
        u = function (e) {
          var t = e.title,
            n = e.description,
            a = e.prefix,
            u = void 0 === a ? o : a,
            d = e.ogImage,
            p = void 0 === d ? l : d,
            f = [u, t].filter(Boolean).join(" | ");
          return (0, r.jsxs)(i(), {
            children: [
              (0, r.jsx)("title", { children: f }, "title"),
              (0, r.jsx)(
                "meta",
                { name: "description", content: n },
                "description"
              ),
              (0, r.jsx)("meta", { name: "author", content: o }),
              (0, r.jsx)("meta", { property: "og:image", content: p }),
              (0, r.jsx)("meta", {
                property: "og:image:alt",
                content: "Banner for the site",
              }),
              (0, r.jsx)("meta", {
                property: "og:image:type",
                content: "image/png",
              }),
              (0, r.jsx)("meta", {
                property: "og:image:width",
                content: "1280",
              }),
              (0, r.jsx)("meta", {
                property: "og:image:height",
                content: "675",
              }),
              (0, r.jsx)("meta", { property: "og:title", content: f }),
              (0, r.jsx)("meta", { property: "og:site_name", content: o }),
              (0, r.jsx)("meta", { property: "og:type", content: "website" }),
              (0, r.jsx)("meta", { property: "og:url", content: s }),
              (0, r.jsx)("meta", { property: "og:description", content: n }),
              (0, r.jsx)("meta", {
                name: "twitter:card",
                content: "summary_large_image",
              }),
              (0, r.jsx)("meta", { name: "twitter:description", content: n }),
              (0, r.jsx)("meta", { name: "twitter:title", content: f }),
              (0, r.jsx)("meta", { name: "twitter:site", content: c }),
              (0, r.jsx)("meta", { name: "twitter:creator", content: c }),
              (0, r.jsx)("meta", { name: "twitter:image", content: p }),
            ],
          });
        };
    },
    6602: function (e, t, n) {
      "use strict";
      n.d(t, {
        $: function () {
          return d;
        },
      });
      var r = n(1799),
        a = n(9396),
        i = n(9534),
        s = n(5893),
        o = n(7294),
        c = n(2362),
        l = n(4828),
        u = n.n(l),
        d = (0, o.forwardRef)(function (e, t) {
          var n = e.as,
            o = void 0 === n ? "div" : n,
            l = e.children,
            d = e.className,
            p = (0, i.Z)(e, ["as", "children", "className"]);
          return (0,
          s.jsx)(o, (0, a.Z)((0, r.Z)({ className: (0, c.Sh)(u().section, d), ref: t }, p), { children: l }));
        });
    },
    5622: function (e, t, n) {
      "use strict";
      n.d(t, {
        A2: function () {
          return l;
        },
        Ro: function () {
          return p;
        },
      });
      var r = n(7568),
        a = n(828),
        i = n(4051),
        s = n.n(i);
      function o(e) {
        return c.apply(this, arguments);
      }
      function c() {
        return (c = (0, r.Z)(
          s().mark(function e(t) {
            var n, r, a;
            return s().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.src),
                      (r = t.srcSet),
                      (a = t.sizes),
                      e.abrupt(
                        "return",
                        new Promise(function (e, t) {
                          var i = l(r);
                          try {
                            if (!n && !r)
                              throw new Error(
                                "No image src or srcSet provided"
                              );
                            var s = new Image();
                            n && (s.src = n),
                              i && (s.srcset = i),
                              a && (s.sizes = a);
                            var o = function () {
                              s.removeEventListener("load", o);
                              var t = s.currentSrc;
                              (s = null), e(t);
                            };
                            s.addEventListener("load", o);
                          } catch (c) {
                            t("Error loading ".concat(i, ": ").concat(c));
                          }
                        })
                      )
                    );
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function l() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "string" === typeof e
          ? e
          : e
              .map(function (e) {
                return "".concat(e.src, " ").concat(e.width, "w");
              })
              .join(", ");
      }
      function u() {
        return d.apply(this, arguments);
      }
      function d() {
        return (
          (d = (0, r.Z)(
            s().mark(function e() {
              var t,
                n,
                a = arguments;
              return s().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = a.length > 0 && void 0 !== a[0] ? a[0] : 1),
                        (n = a.length > 1 && void 0 !== a[1] ? a[1] : 1),
                        e.abrupt(
                          "return",
                          new Promise(function (e) {
                            var a = document.createElement("canvas"),
                              i = a.getContext("2d");
                            (a.width = t),
                              (a.height = n),
                              (i.fillStyle = "rgba(0, 0, 0, 0)"),
                              i.fillRect(0, 0, t, n),
                              a.toBlob(
                                (function () {
                                  var t = (0, r.Z)(
                                    s().mark(function t(n) {
                                      var r;
                                      return s().wrap(function (t) {
                                        for (;;)
                                          switch ((t.prev = t.next)) {
                                            case 0:
                                              if (n) {
                                                t.next = 2;
                                                break;
                                              }
                                              throw new Error(
                                                "Video thumbnail failed to load"
                                              );
                                            case 2:
                                              (r = URL.createObjectURL(n)),
                                                a.remove(),
                                                e(r);
                                            case 5:
                                            case "end":
                                              return t.stop();
                                          }
                                      }, t);
                                    })
                                  );
                                  return function (e) {
                                    return t.apply(this, arguments);
                                  };
                                })()
                              );
                          })
                        )
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          d.apply(this, arguments)
        );
      }
      function p(e) {
        return f.apply(this, arguments);
      }
      function f() {
        return (
          (f = (0, r.Z)(
            s().mark(function e(t) {
              var n, i, c, d, p, f, m;
              return s().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = t.srcSet),
                        (i = t.sizes),
                        (c = l(n)),
                        (e.next = 4),
                        Promise.all(
                          c.split(", ").map(
                            (function () {
                              var e = (0, r.Z)(
                                s().mark(function e(t) {
                                  var n, r, i, o, c;
                                  return s().wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (n = (0, a.Z)(t.split(" "), 2)),
                                            (r = n[0]),
                                            (i = n[1]),
                                            (o = Number(i.replace("w", ""))),
                                            (e.next = 4),
                                            u(o)
                                          );
                                        case 4:
                                          return (
                                            (c = e.sent),
                                            e.abrupt("return", {
                                              src: r,
                                              image: c,
                                              width: i,
                                            })
                                          );
                                        case 6:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                })
                              );
                              return function (t) {
                                return e.apply(this, arguments);
                              };
                            })()
                          )
                        )
                      );
                    case 4:
                      return (
                        (d = e.sent),
                        (p = d
                          .map(function (e) {
                            var t = e.image,
                              n = e.width;
                            return "".concat(t, " ").concat(n);
                          })
                          .join(", ")),
                        (e.next = 8),
                        o({ srcSet: p, sizes: i })
                      );
                    case 8:
                      return (
                        (f = e.sent),
                        (m = d.find(function (e) {
                          return e.image === f;
                        })),
                        e.abrupt("return", m.src)
                      );
                    case 11:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          f.apply(this, arguments)
        );
      }
    },
    1883: function (e) {
      e.exports = {
        footer: "Footer_footer__nKPS_",
        link: "Footer_link__2Y2qR",
        date: "Footer_date__d0nD9",
      };
    },
    361: function (e) {
      e.exports = { heading: "Heading_heading__209rB" };
    },
    2288: function (e) {
      e.exports = {
        image: "Image_image__fhfXL",
        container: "Image_container__9ry6H",
        elementWrapper: "Image_elementWrapper__dY5KC",
        placeholder: "Image_placeholder__rZeKX",
        element: "Image_element__EpM9I",
        button: "Image_button__S1k_J",
      };
    },
    8469: function (e) {
      e.exports = { link: "Link_link__1F_mp" };
    },
    4828: function (e) {
      e.exports = { section: "Section_section__FuI7l" };
    },
  },
]);
