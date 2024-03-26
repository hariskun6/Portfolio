(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [82],
  {
    3082: function (e, r, n) {
      "use strict";
      n.r(r),
        n.d(r, {
          Model: function () {
            return P;
          },
        });
      var t = n(7568),
        u = n(1799),
        a = n(9396),
        i = n(9534),
        c = n(828),
        o = n(9815),
        s = n(4051),
        v = n.n(s),
        f = n(5893),
        l = n(6240),
        d = n(7378),
        p = n(2064),
        m = n(4529),
        y = n(7294),
        x = n(9477);
      const h = {
          uniforms: { tDiffuse: { value: null }, h: { value: 1 / 512 } },
          vertexShader:
            "\n      varying vec2 vUv;\n\n      void main() {\n\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n      }\n  ",
          fragmentShader:
            "\n    uniform sampler2D tDiffuse;\n    uniform float h;\n\n    varying vec2 vUv;\n\n    void main() {\n\n    \tvec4 sum = vec4( 0.0 );\n\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;\n\n    \tgl_FragColor = sum;\n\n    }\n  ",
        },
        w = {
          uniforms: { tDiffuse: { value: null }, v: { value: 1 / 512 } },
          vertexShader:
            "\n    varying vec2 vUv;\n\n    void main() {\n\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n    }\n  ",
          fragmentShader:
            "\n\n  uniform sampler2D tDiffuse;\n  uniform float v;\n\n  varying vec2 vUv;\n\n  void main() {\n\n    vec4 sum = vec4( 0.0 );\n\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;\n\n    gl_FragColor = sum;\n\n  }\n  ",
        };
      var g = n(5622),
        D = n(2362),
        U = n(3142),
        R = n(4209),
        k = n.n(R),
        M = n(6521),
        S = "Frame",
        b = "Screen",
        j = { stiffness: 40, damping: 20, mass: 1.4, restSpeed: 0.001 },
        P = function (e) {
          var r = e.models,
            n = e.show,
            t = void 0 === n || n,
            c = e.showDelay,
            o = void 0 === c ? 0 : c,
            s = e.cameraPosition,
            v = void 0 === s ? { x: 0, y: 0, z: 8 } : s,
            p = e.style,
            g = e.className,
            R = e.alt,
            M = (0, i.Z)(e, [
              "models",
              "show",
              "showDelay",
              "cameraPosition",
              "style",
              "className",
              "alt",
            ]),
            S = (0, y.useState)(!1),
            b = S[0],
            P = S[1],
            Z = (0, y.useRef)(),
            E = (0, y.useRef)(),
            _ = (0, y.useRef)(),
            A = (0, y.useRef)(),
            z = (0, y.useRef)(),
            F = (0, y.useRef)(),
            T = (0, y.useRef)(),
            L = (0, y.useRef)(),
            N = (0, y.useRef)(),
            I = (0, y.useRef)(),
            J = (0, y.useRef)(),
            B = (0, y.useRef)(),
            K = (0, y.useRef)(),
            O = (0, y.useRef)(),
            G = (0, y.useRef)(),
            W = (0, y.useRef)(),
            X = (0, y.useRef)(),
            H = (0, m.NM)(Z, !1, { threshold: 0.2 }),
            q = (0, l.J)(),
            V = (0, d.q)(0, j),
            Y = (0, d.q)(0, j);
          (0, y.useEffect)(function () {
            var e = Z.current,
              r = e.clientWidth,
              n = e.clientHeight;
            (F.current = new x.CP7({
              canvas: E.current,
              alpha: !0,
              antialias: !1,
              powerPreference: "high-performance",
              failIfMajorPerformanceCaveat: !0,
            })),
              F.current.setPixelRatio(2),
              F.current.setSize(r, n),
              (F.current.outputEncoding = x.knz),
              (F.current.physicallyCorrectLights = !0),
              (_.current = new x.cPb(36, r / n, 0.1, 100)),
              _.current.position.set(v.x, v.y, v.z),
              (z.current = new x.xsS()),
              (A.current = new x.ZAu()),
              z.current.add(A.current);
            var t = new x.Mig(16777215, 1.2),
              u = new x.Ox3(16777215, 1.1),
              a = new x.Ox3(16777215, 0.8);
            a.position.set(-6, 2, 2),
              u.position.set(0.5, 0, 0.866),
              (G.current = [t, u, a]),
              G.current.forEach(function (e) {
                return z.current.add(e);
              }),
              (T.current = new x.ZAu()),
              z.current.add(T.current),
              T.current.position.set(0, 0, -0.8),
              T.current.rotateX(Math.PI / 2);
            var i = 512;
            (L.current = new x.dd2(i, i)),
              (L.current.texture.generateMipmaps = !1),
              (N.current = new x.dd2(i, i)),
              (N.current.texture.generateMipmaps = !1);
            var c = new x.BKK(8, 8).rotateX(Math.PI / 2),
              o = new x.vBJ({
                map: L.current.texture,
                opacity: 0.8,
                transparent: !0,
              });
            (O.current = new x.Kj0(c, o)),
              (O.current.scale.y = -1),
              T.current.add(O.current),
              (W.current = new x.Kj0(c)),
              (W.current.visible = !1),
              T.current.add(W.current);
            var s = new x.vBJ({ color: 16777215, opacity: 0, transparent: !0 });
            (X.current = new x.Kj0(c, s)),
              X.current.rotateX(Math.PI),
              (X.current.position.y -= 1e-5),
              T.current.add(X.current),
              (I.current = new x.iKG(-4, 4, 4, -4, 0, 1.5)),
              (I.current.rotation.x = Math.PI / 2),
              T.current.add(I.current),
              (J.current = new x.lRF()),
              (J.current.userData.darkness = { value: 3 }),
              (J.current.onBeforeCompile = function (e) {
                (e.uniforms.darkness = J.current.userData.darkness),
                  (e.fragmentShader =
                    "\n        uniform float darkness;\n        ".concat(
                      e.fragmentShader.replace(
                        "gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );",
                        "gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );"
                      ),
                      "\n      "
                    ));
              }),
              (J.current.depthTest = !1),
              (J.current.depthWrite = !1),
              (B.current = new x.jyz(h)),
              (B.current.depthTest = !1),
              (K.current = new x.jyz(w)),
              (K.current.depthTest = !1);
            var f = V.onChange($),
              l = Y.onChange($);
            return function () {
              L.current.dispose(),
                N.current.dispose(),
                (0, U.Ji)(G.current),
                (0, U.in)(z.current),
                (0, U.e8)(F.current),
                f(),
                l();
            };
          }, []);
          var Q = (0, y.useCallback)(function (e) {
              (W.current.visible = !0),
                (W.current.material = B.current),
                (W.current.material.uniforms.tDiffuse.value =
                  L.current.texture),
                (B.current.uniforms.h.value = e * (1 / 256)),
                F.current.setRenderTarget(N.current),
                F.current.render(W.current, I.current),
                (W.current.material = K.current),
                (W.current.material.uniforms.tDiffuse.value =
                  N.current.texture),
                (K.current.uniforms.v.value = e * (1 / 256)),
                F.current.setRenderTarget(L.current),
                F.current.render(W.current, I.current),
                (W.current.visible = !1);
            }, []),
            $ = (0, y.useCallback)(
              function () {
                var e = z.current.background;
                (z.current.background = null),
                  (z.current.overrideMaterial = J.current),
                  F.current.setRenderTarget(L.current),
                  F.current.render(z.current, I.current),
                  (z.current.overrideMaterial = null),
                  Q(5),
                  Q(2),
                  F.current.setRenderTarget(null),
                  (z.current.background = e),
                  (A.current.rotation.x = V.get()),
                  (A.current.rotation.y = Y.get()),
                  F.current.render(z.current, _.current);
              },
              [Q, V, Y]
            );
          return (
            (0, y.useEffect)(
              function () {
                var e = function (e) {
                  var r = window.innerWidth,
                    n = window.innerHeight,
                    t = (e.clientX - r / 2) / r,
                    u = (e.clientY - n / 2) / n;
                  Y.set(t / 2), V.set(u / 2);
                };
                return (
                  H && !q && window.addEventListener("mousemove", e),
                  function () {
                    window.removeEventListener("mousemove", e);
                  }
                );
              },
              [H, q, V, Y]
            ),
            (0, y.useEffect)(
              function () {
                var e = function () {
                  if (Z.current) {
                    var e = Z.current,
                      r = e.clientWidth,
                      n = e.clientHeight;
                    F.current.setSize(r, n),
                      (_.current.aspect = r / n),
                      _.current.updateProjectionMatrix(),
                      $();
                  }
                };
                return (
                  window.addEventListener("resize", e),
                  e(),
                  function () {
                    window.removeEventListener("resize", e);
                  }
                );
              },
              [$]
            ),
            (0, f.jsxs)(
              "div",
              (0, a.Z)(
                (0, u.Z)(
                  {
                    className: (0, D.Sh)(k().model, g),
                    "data-loaded": b,
                    style: (0, D.Fh)({ delay: (0, D.aU)(o) }, p),
                    ref: Z,
                    role: "img",
                    "aria-label": R,
                  },
                  M
                ),
                {
                  children: [
                    (0, f.jsx)("canvas", { className: k().canvas, ref: E }),
                    r.map(function (e, r) {
                      return (0,
                      f.jsx)(C, { renderer: F, modelGroup: A, show: t, showDelay: o, renderFrame: $, index: r, setLoaded: P, model: e }, JSON.stringify(e.position));
                    }),
                  ],
                }
              )
            )
          );
        },
        C = function (e) {
          var r = e.renderer,
            n = e.model,
            u = e.modelGroup,
            a = e.renderFrame,
            i = e.index,
            s = e.showDelay,
            f = e.setLoaded,
            d = e.show,
            m = (0, y.useState)(),
            h = m[0],
            w = m[1],
            D = (0, l.J)(),
            R = (0, y.createRef)();
          (0, y.useEffect)(function () {
            var e = (function () {
                var e = (0, t.Z)(
                  v().mark(function e(n, t) {
                    return v().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n.encoding = x.knz),
                              (n.flipY = !1),
                              (n.anisotropy =
                                r.current.capabilities.getMaxAnisotropy()),
                              (n.generateMipmaps = !1),
                              (e.next = 6),
                              r.current.initTexture(n)
                            );
                          case 6:
                            (t.material.color = new x.Ilk(16777215)),
                              (t.material.transparent = !0),
                              (t.material.map = n);
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (r, n) {
                  return e.apply(this, arguments);
                };
              })(),
              f = (function () {
                var r = (0, t.Z)(
                  v().mark(function r() {
                    var f, l, d, m, y, h, w, k, j, P;
                    return v().wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (
                              (f = n.texture),
                              (l = n.position),
                              (d = n.url),
                              (r.t0 = c.Z),
                              (r.t1 = Promise),
                              (r.next = 7),
                              U.Et.loadAsync(f.placeholder.src)
                            );
                          case 7:
                            return (
                              (r.t2 = r.sent), (r.next = 10), U.Zf.loadAsync(d)
                            );
                          case 10:
                            return (
                              (r.t3 = r.sent),
                              (r.t4 = [r.t2, r.t3]),
                              (r.next = 14),
                              r.t1.all.call(r.t1, r.t4)
                            );
                          case 14:
                            return (
                              (r.t5 = r.sent),
                              (h = (0, r.t0)(r.t5, 2)),
                              (w = h[0]),
                              (k = h[1]),
                              u.current.add(k.scene),
                              k.scene.traverse(
                                (function () {
                                  var r = (0, t.Z)(
                                    v().mark(function r(n) {
                                      return v().wrap(function (r) {
                                        for (;;)
                                          switch ((r.prev = r.next)) {
                                            case 0:
                                              n.material &&
                                                ((n.material.color = new x.Ilk(
                                                  2039845
                                                )),
                                                n.material.color.convertSRGBToLinear()),
                                                n.name === b &&
                                                  ((R.current = n.clone()),
                                                  (R.current.material =
                                                    n.material.clone()),
                                                  n.parent.add(R.current),
                                                  (R.current.material.opacity = 1),
                                                  (R.current.position.z += 0.001),
                                                  e(w, R.current),
                                                  (m = (0, t.Z)(
                                                    v().mark(function r() {
                                                      var t, u;
                                                      return v().wrap(function (
                                                        r
                                                      ) {
                                                        for (;;)
                                                          switch (
                                                            (r.prev = r.next)
                                                          ) {
                                                            case 0:
                                                              return (
                                                                (r.next = 2),
                                                                (0, g.Ro)(f)
                                                              );
                                                            case 2:
                                                              return (
                                                                (t = r.sent),
                                                                (r.next = 5),
                                                                U.Et.loadAsync(
                                                                  t
                                                                )
                                                              );
                                                            case 5:
                                                              return (
                                                                (u = r.sent),
                                                                (r.next = 8),
                                                                e(u, n)
                                                              );
                                                            case 8:
                                                              (0, p.j)(1, 0, {
                                                                onUpdate:
                                                                  function (e) {
                                                                    (R.current.material.opacity =
                                                                      e),
                                                                      a();
                                                                  },
                                                              });
                                                            case 9:
                                                            case "end":
                                                              return r.stop();
                                                          }
                                                      },
                                                      r);
                                                    })
                                                  )));
                                            case 2:
                                            case "end":
                                              return r.stop();
                                          }
                                      }, r);
                                    })
                                  );
                                  return function (e) {
                                    return r.apply(this, arguments);
                                  };
                                })()
                              ),
                              (j = new x.Pa4(l.x, l.y, l.z)),
                              D &&
                                (P = k.scene.position).set.apply(
                                  P,
                                  (0, o.Z)(j.toArray())
                                ),
                              n.animation === M.u.SpringUp &&
                                (y = function () {
                                  var e,
                                    r = new x.Pa4(j.x, j.y - 1, j.z);
                                  (e = k.scene.position).set.apply(
                                    e,
                                    (0, o.Z)(r.toArray())
                                  ),
                                    (0, p.j)(r.y, j.y, {
                                      type: "spring",
                                      delay: (300 * i + s) / 1e3,
                                      stiffness: 60,
                                      damping: 20,
                                      mass: 1,
                                      restSpeed: 1e-4,
                                      restDelta: 1e-4,
                                      onUpdate: function (e) {
                                        (k.scene.position.y = e), a();
                                      },
                                    });
                                }),
                              n.animation === M.u.LaptopOpen &&
                                (y = function () {
                                  var e,
                                    r,
                                    n = k.scene.children.find(function (e) {
                                      return e.name === S;
                                    }),
                                    t = new x.Pa4(x.M8C.degToRad(90), 0, 0),
                                    u = new x.Pa4(0, 0, 0);
                                  return (
                                    (e = k.scene.position).set.apply(
                                      e,
                                      (0, o.Z)(j.toArray())
                                    ),
                                    (r = n.rotation).set.apply(
                                      r,
                                      (0, o.Z)(t.toArray())
                                    ),
                                    (0, p.j)(t.x, u.x, {
                                      type: "spring",
                                      delay: (300 * i + s + 300) / 1e3,
                                      stiffness: 80,
                                      damping: 20,
                                      restSpeed: 1e-4,
                                      restDelta: 1e-4,
                                      onUpdate: function (e) {
                                        (n.rotation.x = e), a();
                                      },
                                    })
                                  );
                                }),
                              r.abrupt("return", {
                                loadFullResTexture: m,
                                playAnimation: y,
                              })
                            );
                          case 25:
                          case "end":
                            return r.stop();
                        }
                    }, r);
                  })
                );
                return function () {
                  return r.apply(this, arguments);
                };
              })();
            w({ start: f });
          }, []),
            (0, y.useEffect)(
              function () {
                if (h && d) {
                  var e,
                    r = (function () {
                      var r = (0, t.Z)(
                        v().mark(function r() {
                          var n, t, u;
                          return v().wrap(function (r) {
                            for (;;)
                              switch ((r.prev = r.next)) {
                                case 0:
                                  return (r.next = 2), h.start();
                                case 2:
                                  return (
                                    (n = r.sent),
                                    (t = n.loadFullResTexture),
                                    (u = n.playAnimation),
                                    f(!0),
                                    D || (e = u()),
                                    (r.next = 9),
                                    t()
                                  );
                                case 9:
                                  D && a();
                                case 10:
                                case "end":
                                  return r.stop();
                              }
                          }, r);
                        })
                      );
                      return function () {
                        return r.apply(this, arguments);
                      };
                    })();
                  return (
                    (0, y.startTransition)(function () {
                      r();
                    }),
                    function () {
                      null === e || void 0 === e || e.stop();
                    }
                  );
                }
              },
              [h, d]
            );
        };
    },
    3142: function (e, r, n) {
      "use strict";
      n.d(r, {
        Et: function () {
          return s;
        },
        Ji: function () {
          return d;
        },
        Zf: function () {
          return o;
        },
        e8: function () {
          return l;
        },
        in: function () {
          return v;
        },
        x2: function () {
          return p;
        },
      });
      var t = n(9477),
        u = n(4976),
        a = n(7607);
      t.CtF.enabled = !0;
      var i = new u._(),
        c = new a.E();
      i.setDecoderPath("/draco/"), c.setDRACOLoader(i);
      var o = c,
        s = new t.dpR(),
        v = function (e) {
          null === e ||
            void 0 === e ||
            e.traverse(function (e) {
              if (e.isMesh)
                if ((e.geometry.dispose(), e.material.isMaterial))
                  f(e.material);
                else {
                  var r = !0,
                    n = !1,
                    t = void 0;
                  try {
                    for (
                      var u, a = e.material[Symbol.iterator]();
                      !(r = (u = a.next()).done);
                      r = !0
                    ) {
                      var i = u.value;
                      f(i);
                    }
                  } catch (c) {
                    (n = !0), (t = c);
                  } finally {
                    try {
                      r || null == a.return || a.return();
                    } finally {
                      if (n) throw t;
                    }
                  }
                }
            });
        },
        f = function (e) {
          e.dispose();
          var r = !0,
            n = !1,
            t = void 0;
          try {
            for (
              var u, a = Object.keys(e)[Symbol.iterator]();
              !(r = (u = a.next()).done);
              r = !0
            ) {
              var i,
                c,
                o,
                s = e[u.value];
              if (s && "object" === typeof s && "minFilter" in s)
                s.dispose(),
                  null === (i = s.source) ||
                    void 0 === i ||
                    null === (c = i.data) ||
                    void 0 === c ||
                    null === (o = c.close) ||
                    void 0 === o ||
                    o.call(c);
            }
          } catch (v) {
            (n = !0), (t = v);
          } finally {
            try {
              r || null == a.return || a.return();
            } finally {
              if (n) throw t;
            }
          }
        },
        l = function (e) {
          e.dispose(), (e = null);
        },
        d = function (e) {
          var r = !0,
            n = !1,
            t = void 0;
          try {
            for (
              var u, a = e[Symbol.iterator]();
              !(r = (u = a.next()).done);
              r = !0
            ) {
              var i = u.value;
              i.parent.remove(i);
            }
          } catch (c) {
            (n = !0), (t = c);
          } finally {
            try {
              r || null == a.return || a.return();
            } finally {
              if (n) throw t;
            }
          }
        },
        p = function (e, r) {
          var n;
          return (
            r.traverse(function (r) {
              r.name === e && (n = r);
            }),
            n
          );
        };
    },
    4209: function (e) {
      e.exports = {
        model: "Model_model__228ej",
        canvas: "Model_canvas__kaLjL",
      };
    },
    2064: function (e, r, n) {
      "use strict";
      n.d(r, {
        j: function () {
          return i;
        },
      });
      var t = n(3234),
        u = n(406),
        a = n(8899);
      function i(e, r, n) {
        void 0 === n && (n = {});
        var i = (0, u.i)(e) ? e : (0, t.B)(e);
        return (
          (0, a.b8)("", i, r, n),
          {
            stop: function () {
              return i.stop();
            },
            isAnimating: function () {
              return i.isAnimating();
            },
          }
        );
      }
    },
  },
]);
