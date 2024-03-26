(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [93],
  {
    9556: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          Earth: function () {
            return H;
          },
          EarthSection: function () {
            return U;
          },
        });
      var r = t(7568),
        i = t(8616),
        a = t(1799),
        c = t(9396),
        u = t(9815),
        o = t(4051),
        s = t.n(o),
        l = t(5893),
        f = t.p + "static/media/earth.510551ea.glb",
        d = t.p + "static/media/milkyway-nx.0e972b21.hdr",
        v = t.p + "static/media/milkyway-ny.006459f3.hdr",
        p = t.p + "static/media/milkyway-nz.5f35d5a4.hdr",
        m = t.p + "static/media/milkyway-px.2922755b.hdr",
        h = t.p + "static/media/milkyway-py.7aeec30d.hdr",
        y = t.p + "static/media/milkyway-pz.0ef64b21.hdr",
        x = "/_next/static/media/milkyway.dfc91e8e.jpg",
        w = t(7206),
        b = t(6602),
        g = t(3994),
        E = t(7260),
        k = t(6240),
        _ = t(7378),
        S = t(4529),
        C = t(7294),
        R = t(7333),
        j = t(9997),
        z = t(9477),
        P = t(2156),
        A = t(2362),
        M = t(3142);
      var N = t(4708),
        Z = t.n(N),
        F = { x: 0, y: 0, z: 2 },
        L = function (e, n, t) {
          return e + t * (n - e);
        },
        O = function (e) {
          return Object.keys(e)
            .map(function (n) {
              return parseFloat(Math.round(100 * e[n]) / 100).toFixed(2);
            })
            .join(", ");
        },
        q = function (e) {
          return e && e.camera
            ? { x: e.camera[0], y: e.camera[1], z: e.camera[2] }
            : F;
        },
        T = {
          stiffness: 80,
          damping: 40,
          mass: 2,
          restSpeed: 0.001,
          restDelta: 0.001,
        },
        J = {
          stiffness: 40,
          damping: 30,
          mass: 2,
          restSpeed: 0.001,
          restDelta: 0.001,
        },
        D = { stiffness: 40, damping: 30 },
        Y = (0, C.createContext)({}),
        H = function (e) {
          var n = e.position,
            t = void 0 === n ? [0, 0, 0] : n,
            o = e.scale,
            N = void 0 === o ? 1 : o,
            H = e.hideMeshes,
            U = void 0 === H ? [] : H,
            W = e.labels,
            B = void 0 === W ? [] : W,
            I = e.className,
            X = e.children,
            G = (0, C.useState)(!1),
            K = G[0],
            $ = G[1],
            Q = (0, C.useState)(!1),
            V = Q[0],
            ee = Q[1],
            ne = (0, C.useState)(!1),
            te = ne[0],
            re = ne[1],
            ie = (0, C.useState)(!1),
            ae = ie[0],
            ce = ie[1],
            ue = (0, C.useRef)([]),
            oe = (0, C.useRef)(),
            se = (0, C.useRef)(),
            le = (0, C.useRef)(),
            fe = (0, C.useRef)(),
            de = (0, C.useRef)(),
            ve = (0, C.useRef)(),
            pe = (0, C.useRef)(),
            me = (0, C.useRef)(),
            he = (0, C.useRef)(),
            ye = (0, C.useRef)(),
            xe = (0, C.useRef)(),
            we = (0, C.useRef)(),
            be = (0, S.NM)(le),
            ge = (0, C.useRef)(),
            Ee = (0, C.useRef)(q(ue.current[0])),
            ke = (0, C.useRef)([]),
            _e = (0, C.useRef)(),
            Se = (0, C.useRef)(),
            Ce = (0, C.useRef)(),
            Re = (0, C.useRef)(),
            je = (0, S.iP)(),
            ze = je.width,
            Pe = je.height,
            Ae = (0, k.J)(),
            Me = (0, _.q)(0, T),
            Ne = (0, _.q)(0, T),
            Ze = (0, _.q)(0, T),
            Fe = (0, _.q)(0, J),
            Le = (0, _.q)(0, J),
            Oe = (0, _.q)(0, J),
            qe = (0, _.q)(0, D),
            Te = (0, C.useCallback)(
              function () {
                if (be) {
                  ge.current = requestAnimationFrame(Te);
                  var e = pe.current.getDelta();
                  we.current.update(e),
                    _e.current.update(),
                    de.current.render(fe.current, ve.current),
                    ke.current.forEach(function (e) {
                      var n = e.element,
                        t = e.position,
                        r = e.sprite,
                        a = (0, i.Z)(z.Pa4, (0, u.Z)(t)),
                        c = ve.current.position.distanceTo(ye.current.position),
                        o = ve.current.position.distanceTo(r.position) > c;
                      a.project(ve.current),
                        (a.x = Math.round((0.5 + a.x / 2) * window.innerWidth)),
                        (a.y = Math.round(
                          (0.5 - a.y / 2) * window.innerHeight
                        )),
                        n.style.setProperty("--posX", (0, A.ml)(a.x)),
                        n.style.setProperty("--posY", (0, A.ml)(a.y)),
                        (n.dataset.occluded = !!o);
                    });
                } else cancelAnimationFrame(ge.current);
              },
              [be]
            );
          (0, C.useEffect)(function () {
            Re.current = !0;
            var e = window.innerWidth,
              n = window.innerHeight;
            (de.current = new z.CP7({
              canvas: le.current,
              antialias: !1,
              alpha: !0,
              powerPreference: "high-performance",
              failIfMajorPerformanceCaveat: !0,
            })),
              de.current.setPixelRatio(1),
              (de.current.outputEncoding = z.knz),
              (de.current.physicallyCorrectLights = !0),
              (de.current.toneMapping = z.LY2),
              (ve.current = new z.cPb(54, e / n, 0.1, 100)),
              (ve.current.position.x = Ee.current.x),
              (ve.current.position.y = Ee.current.y),
              (ve.current.position.z = Ee.current.z),
              ve.current.lookAt(0, 0, 0),
              Me.set(ve.current.position.x, !1),
              Ne.set(ve.current.position.y, !1),
              Ze.set(ve.current.position.z, !1),
              (fe.current = new z.xsS()),
              (pe.current = new z.SUY()),
              (he.current = new z.iMs());
            var t = new z.Mig(2236962, 0.05),
              r = new z.Ox3(16777215, 1.5);
            r.position.set(3, 0, 1);
            var i = [t, r];
            return (
              i.forEach(function (e) {
                return fe.current.add(e);
              }),
              (_e.current = new R.z(ve.current, le.current)),
              (_e.current.enableZoom = !1),
              (_e.current.enablePan = !1),
              (_e.current.enableDamping = !1),
              (_e.current.rotateSpeed = 0.5),
              function () {
                (Re.current = !1),
                  cancelAnimationFrame(ge.current),
                  (0, M.Ji)(i),
                  (0, M.in)(fe.current),
                  (0, M.e8)(de.current);
              }
            );
          }, []),
            (0, C.useEffect)(
              function () {
                var e = function () {
                    ee(!0), Me.stop(), Ne.stop(), Ze.stop();
                  },
                  n = function () {
                    Me.set(ve.current.position.x, !1),
                      Ne.set(ve.current.position.y, !1),
                      Ze.set(ve.current.position.z, !1),
                      ee(!1);
                  };
                return (
                  _e.current.addEventListener("start", e),
                  _e.current.addEventListener("end", n),
                  function () {
                    _e.current.removeEventListener("start", e),
                      _e.current.removeEventListener("end", n);
                  }
                );
              },
              [Me, Ne, Ze]
            ),
            (0, C.useEffect)(
              function () {
                if (K) {
                  var e = (0, M.x2)("Chunk", ye.current),
                    n = (0, M.x2)("Atmosphere", ye.current),
                    t = function (e, n) {
                      ve.current.position[e] = n;
                    },
                    r = Me.onChange(function (e) {
                      return t("x", e);
                    }),
                    i = Ne.onChange(function (e) {
                      return t("y", e);
                    }),
                    a = Ze.onChange(function (e) {
                      return t("z", e);
                    }),
                    c = function (n, t) {
                      e.position[n] = t;
                    },
                    u = Fe.onChange(function (e) {
                      return c("x", e);
                    }),
                    o = Le.onChange(function (e) {
                      return c("y", e);
                    }),
                    s = Oe.onChange(function (e) {
                      return c("z", e);
                    }),
                    l = qe.onChange(function (e) {
                      n.material.opacity = e;
                    });
                  return function () {
                    r(), i(), a(), u(), o(), s(), l();
                  };
                }
              },
              [Me, Ne, Ze, Fe, Le, Oe, K, qe]
            ),
            (0, C.useEffect)(
              function () {
                ze <= A.BC.tablet && (_e.current.enabled = !1);
              },
              [ze]
            ),
            (0, C.useEffect)(
              function () {
                if (!K) {
                  var e = new j.q(),
                    n = new z.anP(de.current);
                  n.compileCubemapShader();
                  var i = (function () {
                      var e = (0, r.Z)(
                        s().mark(function e() {
                          var n;
                          return s().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (e.next = 2), M.Zf.loadAsync(f);
                                case 2:
                                  (n = e.sent),
                                    (ye.current = n.scene),
                                    (xe.current = n.animations),
                                    (we.current = new z.Xcj(ye.current)),
                                    (we.current.timeScale = 0.1),
                                    ye.current.traverse(
                                      (function () {
                                        var e = (0, r.Z)(
                                          s().mark(function e(n) {
                                            var t;
                                            return s().wrap(function (e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    if (
                                                      ((t = n.material),
                                                      "Atmosphere" === n.name &&
                                                        (t.alphaMap = t.map),
                                                      !t)
                                                    ) {
                                                      e.next = 5;
                                                      break;
                                                    }
                                                    return (
                                                      (e.next = 5),
                                                      de.current.initTexture(t)
                                                    );
                                                  case 5:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e);
                                          })
                                        );
                                        return function (n) {
                                          return e.apply(this, arguments);
                                        };
                                      })()
                                    ),
                                    (ye.current.position.x = t[0]),
                                    (ye.current.position.y = t[1]),
                                    (ye.current.position.z = t[2]),
                                    (ye.current.scale.x = N),
                                    (ye.current.scale.y = N),
                                    (ye.current.scale.z = N);
                                case 14:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                      return function () {
                        return e.apply(this, arguments);
                      };
                    })(),
                    a = (function () {
                      var t = (0, r.Z)(
                        s().mark(function t() {
                          var r;
                          return s().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.next = 2),
                                    e.loadAsync([d, v, p, m, h, y])
                                  );
                                case 2:
                                  return (
                                    ((r = t.sent).magFilter = z.wem),
                                    (Se.current = n.fromCubemap(r)),
                                    n.dispose(),
                                    (t.next = 8),
                                    de.current.initTexture(Se.current.texture)
                                  );
                                case 8:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                        })
                      );
                      return function () {
                        return t.apply(this, arguments);
                      };
                    })(),
                    c = (function () {
                      var e = (0, r.Z)(
                        s().mark(function e() {
                          var n;
                          return s().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (e.next = 2), M.Et.loadAsync(x);
                                case 2:
                                  return (
                                    ((n = e.sent).mapping = z.dSO),
                                    (n.encoding = z.knz),
                                    (fe.current.background = n),
                                    (e.next = 8),
                                    de.current.initTexture(n)
                                  );
                                case 8:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                      return function () {
                        return e.apply(this, arguments);
                      };
                    })(),
                    u = (function () {
                      var e = (0, r.Z)(
                        s().mark(function e() {
                          return s().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2), Promise.all([c(), a(), i()])
                                  );
                                case 2:
                                  ye.current.traverse(function (e) {
                                    var n = e.material;
                                    n &&
                                      ((n.envMap = Se.current.texture),
                                      (n.needsUpdate = !0));
                                  }),
                                    Re.current && $(!0);
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
                  (0, C.startTransition)(function () {
                    u(),
                      setTimeout(function () {
                        ce(!0);
                      }, 1e3);
                  });
                }
              },
              [K, t, N]
            ),
            (0, C.useEffect)(
              function () {
                return (
                  K &&
                    !Ce.current &&
                    (fe.current.add(ye.current), (Ce.current = !0)),
                  K && be && (re(!0), Te()),
                  function () {
                    cancelAnimationFrame(ge.current);
                  }
                );
              },
              [Te, be, K]
            ),
            (0, C.useEffect)(
              function () {
                K &&
                  ((se.current.innerHTML = ""),
                  (ke.current = B.map(function (e) {
                    var n,
                      t = document.createElement("div");
                    t.classList.add(Z().label),
                      (t.dataset.hidden = !0),
                      t.style.setProperty(
                        "--delay",
                        "".concat(e.delay || 0, "ms")
                      ),
                      (t.textContent = e.text),
                      se.current.appendChild(t);
                    var r = new z.jyi();
                    return (
                      (n = r.position).set.apply(n, (0, u.Z)(e.position)),
                      r.scale.set(60, 60, 1),
                      (0, c.Z)((0, a.Z)({ element: t }, e), { sprite: r })
                    );
                  })));
              },
              [B, K]
            ),
            (0, C.useEffect)(
              function () {
                de.current.setSize(ze, Pe),
                  (ve.current.aspect = ze / Pe),
                  ve.current.updateProjectionMatrix();
              },
              [ze, Pe]
            ),
            (0, C.useEffect)(function () {
              var e = le.current,
                n = function (e) {
                  var n = window.innerWidth,
                    t = window.innerHeight,
                    r = O(ve.current.position);
                  console.info({ cameraPosition: r }),
                    (me.current = new z.FM8(
                      (e.clientX / n) * 2 - 1,
                      (-e.clientY / t) * 2 + 1
                    )),
                    he.current.setFromCamera(me.current, ve.current);
                  var i = he.current.intersectObjects(fe.current.children, !0);
                  if (i.length > 0) {
                    var a = O(i[0].point);
                    console.info({ clickPosition: a });
                  }
                };
              return function () {
                e.removeEventListener("click", n);
              };
            }, []);
          var Je = (0, C.useCallback)(
            function () {
              if (oe.current) {
                var e,
                  n = oe.current.offsetTop,
                  t = window.innerHeight,
                  r = window.scrollY - n,
                  i = function (e) {
                    var n = ue.current[e].meshes;
                    ye.current.traverse(function (e) {
                      var t = e.name,
                        r = (0, M.x2)("Chunk", ye.current),
                        i = null === n || void 0 === n ? void 0 : n.includes(t),
                        a = null === U || void 0 === U ? void 0 : U.includes(t);
                      if (i)
                        if ("Atmosphere" === t) (e.visible = !0), qe.set(1);
                        else if ("Chunk" === t) {
                          var c,
                            o = new z.Pa4(-0.4, 0.4, 0.4);
                          if (((e.visible = !0), Ae))
                            (c = e.position).set.apply(
                              c,
                              (0, u.Z)(o.toArray())
                            );
                          else Fe.set(o.x), Le.set(o.y), Oe.set(o.z);
                        } else
                          "EarthFull" === t && r.visible
                            ? (e.visible = !1)
                            : (e.visible = !0);
                      else if (a && !i)
                        if ("Atmosphere" === t) qe.set(0);
                        else if ("Chunk" === t) {
                          var s = new z.Pa4(0, 0, 0);
                          (function (e, n) {
                            var t = function () {
                              var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : 0;
                              return (
                                Math.round(100 * (e + Number.EPSILON)) / 100
                              );
                            };
                            return (
                              t(null === e || void 0 === e ? void 0 : e.x) ===
                                t(null === n || void 0 === n ? void 0 : n.x) &&
                              t(null === e || void 0 === e ? void 0 : e.y) ===
                                t(null === n || void 0 === n ? void 0 : n.y) &&
                              t(null === e || void 0 === e ? void 0 : e.z) ===
                                t(null === n || void 0 === n ? void 0 : n.z)
                            );
                          })(s, r.position) && (e.visible = !1),
                            Fe.set(s.x),
                            Le.set(s.y),
                            Oe.set(s.z);
                        } else
                          "EarthPartial" === t && r.visible
                            ? (e.visible = !0)
                            : (e.visible = !1);
                    });
                  };
                requestAnimationFrame(function () {
                  var n,
                    a = ue.current.length - 1,
                    c = Math.floor(r / t),
                    u = (0, P.u)(c, 0, a),
                    o = ue.current[u],
                    s = ue.current[u + 1],
                    l = q(o) || F,
                    f = q(s) || F,
                    d = (r - t * u) / t,
                    v = (0, P.u)(d, 0, 1),
                    p = L(l.x, f.x, v),
                    m = L(l.y, f.y, v),
                    h = L(l.z, f.z, v);
                  e !== l &&
                    ue.current.length &&
                    o &&
                    (i(u),
                    (function (e) {
                      var n = ue.current[e].animations;
                      Ae ||
                        (xe.current.forEach(function (e, t) {
                          n.find(function (e) {
                            return e.includes(t.toString());
                          }) || we.current.clipAction(e).reset().stop();
                        }),
                        xe.current.length &&
                          ue.current[e].animations &&
                          n.forEach(function (e) {
                            var n = e.split(":"),
                              t = xe.current[Number(n[0])],
                              r = we.current.clipAction(t);
                            (n[1] && "loop" === n[1]) ||
                              ((r.clampWhenFinished = !0), (r.loop = z.jAl)),
                              r.play();
                          }));
                    })(u),
                    (n = u),
                    ke.current.forEach(function (e) {
                      e.hidden &&
                        ((e.element.dataset.hidden = !0),
                        e.element.setAttribute("aria-hidden", !0));
                    }),
                    ue.current[n].labels.forEach(function (e) {
                      ke.current
                        .filter(function (n) {
                          return n.text === e;
                        })
                        .forEach(function (e) {
                          (e.element.dataset.hidden = !1),
                            e.element.setAttribute("aria-hidden", !1);
                        });
                    })),
                    (e = l),
                    V ||
                      (Ae
                        ? ve.current.position.set(p, m, h)
                        : (Me.set(p), Ne.set(m), Ze.set(h)));
                });
              }
            },
            [Me, Ne, Ze, Fe, Le, Oe, V, U, qe, Ae]
          );
          (0, C.useEffect)(
            function () {
              var e = (function (e, n) {
                var t = 0;
                return function () {
                  for (
                    var r = arguments.length, i = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    i[a] = arguments[a];
                  var c = new Date();
                  c - t >= n && (e.apply(void 0, (0, u.Z)(i)), (t = c));
                };
              })(Je, 100);
              return (
                K && be && window.addEventListener("scroll", e),
                function () {
                  window.removeEventListener("scroll", e);
                }
              );
            },
            [Je, be, K, qe]
          );
          var De = (0, C.useCallback)(function (e) {
              ue.current = (0, u.Z)(ue.current).concat([e]);
            }, []),
            Ye = (0, C.useCallback)(function (e) {
              ue.current = ue.current.filter(function (n) {
                return n !== e;
              });
            }, []);
          return (0, l.jsx)(Y.Provider, {
            value: { registerSection: De, unregisterSection: Ye },
            children: (0, l.jsxs)("div", {
              className: (0, A.Sh)(Z().earth, I),
              ref: oe,
              children: [
                (0, l.jsxs)("div", {
                  className: Z().viewport,
                  children: [
                    (0, l.jsx)("canvas", {
                      className: Z().canvas,
                      "data-visible": K && te,
                      "data-grabbing": V,
                      ref: le,
                    }),
                    (0, l.jsx)("div", {
                      className: Z().labels,
                      "aria-live": "polite",
                      ref: se,
                    }),
                    (0, l.jsx)("div", { className: Z().vignette }),
                  ],
                }),
                (0, l.jsx)("div", { className: Z().sections, children: X }),
                (0, l.jsx)(E.u, {
                  unmount: !0,
                  in: !K && ae,
                  timeout: (0, A.zG)(g.T.base.durationL),
                  children: function (e) {
                    return (0, l.jsx)(b.$, {
                      className: Z().loader,
                      "data-visible": e,
                      children: (0, l.jsx)(w.a, {}),
                    });
                  },
                }),
              ],
            }),
          });
        },
        U = (0, C.memo)(function (e) {
          var n = e.children,
            t = e.scrim,
            r = e.scrimReverse,
            i = e.className,
            a = e.camera,
            c = void 0 === a ? [0, 0, 0] : a,
            u = e.animations,
            o = void 0 === u ? [] : u,
            s = e.meshes,
            f = void 0 === s ? [] : s,
            d = e.labels,
            v = void 0 === d ? [] : d,
            p = (0, C.useContext)(Y),
            m = p.registerSection,
            h = p.unregisterSection,
            y = (0, C.useRef)(),
            x =
              JSON.stringify(o) +
              JSON.stringify(c) +
              JSON.stringify(v) +
              JSON.stringify(f);
          return (
            (0, C.useEffect)(
              function () {
                var e = {
                  camera: c,
                  animations: o,
                  meshes: f,
                  labels: v,
                  sectionRef: y,
                };
                return (
                  m(e),
                  function () {
                    h(e);
                  }
                );
              },
              [x, m, h]
            ),
            (0, l.jsx)("div", {
              className: (0, A.Sh)(Z().section, i),
              "data-scrim": t,
              "data-scrim-reverse": r,
              ref: y,
              children: n,
            })
          );
        });
    },
    2156: function (e, n, t) {
      "use strict";
      t.d(n, {
        u: function () {
          return r;
        },
      });
      var r = function (e, n, t) {
        return t
          ? Math.min(e, n) === e
            ? n
            : Math.max(e, t) === e
            ? t
            : e
          : Math.max(e, n) === n
          ? e
          : n;
      };
    },
    3142: function (e, n, t) {
      "use strict";
      t.d(n, {
        Et: function () {
          return s;
        },
        Ji: function () {
          return v;
        },
        Zf: function () {
          return o;
        },
        e8: function () {
          return d;
        },
        in: function () {
          return l;
        },
        x2: function () {
          return p;
        },
      });
      var r = t(9477),
        i = t(4976),
        a = t(7607);
      r.CtF.enabled = !0;
      var c = new i._(),
        u = new a.E();
      c.setDecoderPath("/draco/"), u.setDRACOLoader(c);
      var o = u,
        s = new r.dpR(),
        l = function (e) {
          null === e ||
            void 0 === e ||
            e.traverse(function (e) {
              if (e.isMesh)
                if ((e.geometry.dispose(), e.material.isMaterial))
                  f(e.material);
                else {
                  var n = !0,
                    t = !1,
                    r = void 0;
                  try {
                    for (
                      var i, a = e.material[Symbol.iterator]();
                      !(n = (i = a.next()).done);
                      n = !0
                    ) {
                      var c = i.value;
                      f(c);
                    }
                  } catch (u) {
                    (t = !0), (r = u);
                  } finally {
                    try {
                      n || null == a.return || a.return();
                    } finally {
                      if (t) throw r;
                    }
                  }
                }
            });
        },
        f = function (e) {
          e.dispose();
          var n = !0,
            t = !1,
            r = void 0;
          try {
            for (
              var i, a = Object.keys(e)[Symbol.iterator]();
              !(n = (i = a.next()).done);
              n = !0
            ) {
              var c,
                u,
                o,
                s = e[i.value];
              if (s && "object" === typeof s && "minFilter" in s)
                s.dispose(),
                  null === (c = s.source) ||
                    void 0 === c ||
                    null === (u = c.data) ||
                    void 0 === u ||
                    null === (o = u.close) ||
                    void 0 === o ||
                    o.call(u);
            }
          } catch (l) {
            (t = !0), (r = l);
          } finally {
            try {
              n || null == a.return || a.return();
            } finally {
              if (t) throw r;
            }
          }
        },
        d = function (e) {
          e.dispose(), (e = null);
        },
        v = function (e) {
          var n = !0,
            t = !1,
            r = void 0;
          try {
            for (
              var i, a = e[Symbol.iterator]();
              !(n = (i = a.next()).done);
              n = !0
            ) {
              var c = i.value;
              c.parent.remove(c);
            }
          } catch (u) {
            (t = !0), (r = u);
          } finally {
            try {
              n || null == a.return || a.return();
            } finally {
              if (t) throw r;
            }
          }
        },
        p = function (e, n) {
          var t;
          return (
            n.traverse(function (n) {
              n.name === e && (t = n);
            }),
            t
          );
        };
    },
    4708: function (e) {
      e.exports = {
        earth: "Earth_earth__OpSy9",
        loader: "Earth_loader__FJ8SI",
        viewport: "Earth_viewport__uBdB2",
        canvas: "Earth_canvas__8O7Y6",
        labels: "Earth_labels__dku1G",
        label: "Earth_label__DShU9",
        vignette: "Earth_vignette__8nqic",
        sections: "Earth_sections__KalJU",
        section: "Earth_section__EU8Lb",
      };
    },
  },
]);

