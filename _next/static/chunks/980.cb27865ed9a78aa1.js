(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [980],
  {
    6980: function (n, r, e) {
      "use strict";
      e.r(r),
        e.d(r, {
          DisplacementSphere: function () {
            return y;
          },
        });
      var t = e(8616),
        i = e(1799),
        c = e(9815),
        o = e(5893),
        a = e(8718),
        u = e(7260),
        g = e(6240),
        l = e(7378),
        f = e(4529),
        v = e(7294),
        s = e(9477),
        d = e(2362),
        p = e(3142),
        m = e(9030),
        x = e.n(m),
        _ = { stiffness: 30, damping: 20, mass: 2 },
        y = function (n) {
          var r = (0, a.Fg)(),
            e = r.rgbBackground,
            m = r.themeId,
            y = r.colorWhite,
            z = (0, v.useRef)(Date.now()),
            P = (0, v.useRef)(),
            h = (0, v.useRef)(),
            w = (0, v.useRef)(),
            b = (0, v.useRef)(),
            R = (0, v.useRef)(),
            S = (0, v.useRef)(),
            C = (0, v.useRef)(),
            E = (0, v.useRef)(),
            L = (0, v.useRef)(),
            k = (0, v.useRef)(),
            I = (0, g.J)(),
            D = (0, f.NM)(P),
            M = (0, f.iP)(),
            F = (0, l.q)(0, _),
            j = (0, l.q)(0, _);
          return (
            (0, v.useEffect)(function () {
              var n = window.innerWidth,
                r = window.innerHeight;
              return (
                (h.current = new s.FM8(0.8, 0.5)),
                (w.current = new s.CP7({
                  canvas: P.current,
                  antialias: !1,
                  alpha: !0,
                  powerPreference: "high-performance",
                  failIfMajorPerformanceCaveat: !0,
                })),
                w.current.setSize(n, r),
                w.current.setPixelRatio(1),
                (w.current.outputEncoding = s.knz),
                (b.current = new s.cPb(54, n / r, 0.1, 100)),
                (b.current.position.z = 52),
                (R.current = new s.xsS()),
                (E.current = new s.xoR()),
                (E.current.onBeforeCompile = function (n) {
                  (C.current = s.rDY.merge([
                    n.uniforms,
                    { time: { type: "f", value: 0 } },
                  ])),
                    (n.uniforms = C.current),
                    (n.vertexShader =
                      '//\r\n// GLSL textureless classic 3D noise "cnoise",\r\n// with an RSL-style periodic variant "pnoise".\r\n// Author:  Stefan Gustavson (stefan.gustavson@liu.se)\r\n// Version: 2011-10-11\r\n//\r\n// Many thanks to Ian McEwan of Ashima Arts for the\r\n// ideas for permutation and gradient selection.\r\n//\r\n// Copyright (c) 2011 Stefan Gustavson. All rights reserved.\r\n// Distributed under the MIT license. See LICENSE file.\r\n// https://github.com/ashima/webgl-noise\r\n//\r\n\r\n#define PHONG\r\n\r\nvec3 mod289(vec3 x)\r\n{\r\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\r\n}\r\n\r\nvec4 mod289(vec4 x)\r\n{\r\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\r\n}\r\n\r\nvec4 permute(vec4 x)\r\n{\r\n  return mod289(((x*34.0)+1.0)*x);\r\n}\r\n\r\nvec4 taylorInvSqrt(vec4 r)\r\n{\r\n  return 1.79284291400159 - 0.85373472095314 * r;\r\n}\r\n\r\nvec3 fade(vec3 t) {\r\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\r\n}\r\n\r\n// Classic Perlin noise\r\nfloat cnoise(vec3 P)\r\n{\r\n  vec3 Pi0 = floor(P); // Integer part for indexing\r\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\r\n  Pi0 = mod289(Pi0);\r\n  Pi1 = mod289(Pi1);\r\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\r\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\r\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\r\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\r\n  vec4 iz0 = Pi0.zzzz;\r\n  vec4 iz1 = Pi1.zzzz;\r\n\r\n  vec4 ixy = permute(permute(ix) + iy);\r\n  vec4 ixy0 = permute(ixy + iz0);\r\n  vec4 ixy1 = permute(ixy + iz1);\r\n\r\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\r\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\r\n  gx0 = fract(gx0);\r\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\r\n  vec4 sz0 = step(gz0, vec4(0.0));\r\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\r\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\r\n\r\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\r\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\r\n  gx1 = fract(gx1);\r\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\r\n  vec4 sz1 = step(gz1, vec4(0.0));\r\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\r\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\r\n\r\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\r\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\r\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\r\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\r\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\r\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\r\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\r\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\r\n\r\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\r\n  g000 *= norm0.x;\r\n  g010 *= norm0.y;\r\n  g100 *= norm0.z;\r\n  g110 *= norm0.w;\r\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\r\n  g001 *= norm1.x;\r\n  g011 *= norm1.y;\r\n  g101 *= norm1.z;\r\n  g111 *= norm1.w;\r\n\r\n  float n000 = dot(g000, Pf0);\r\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\r\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\r\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\r\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\r\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\r\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\r\n  float n111 = dot(g111, Pf1);\r\n\r\n  vec3 fade_xyz = fade(Pf0);\r\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\r\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\r\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\r\n  return 2.2 * n_xyz;\r\n}\r\n\r\n// Classic Perlin noise, periodic variant\r\nfloat pnoise(vec3 P, vec3 rep)\r\n{\r\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\r\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\r\n  Pi0 = mod289(Pi0);\r\n  Pi1 = mod289(Pi1);\r\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\r\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\r\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\r\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\r\n  vec4 iz0 = Pi0.zzzz;\r\n  vec4 iz1 = Pi1.zzzz;\r\n\r\n  vec4 ixy = permute(permute(ix) + iy);\r\n  vec4 ixy0 = permute(ixy + iz0);\r\n  vec4 ixy1 = permute(ixy + iz1);\r\n\r\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\r\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\r\n  gx0 = fract(gx0);\r\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\r\n  vec4 sz0 = step(gz0, vec4(0.0));\r\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\r\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\r\n\r\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\r\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\r\n  gx1 = fract(gx1);\r\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\r\n  vec4 sz1 = step(gz1, vec4(0.0));\r\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\r\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\r\n\r\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\r\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\r\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\r\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\r\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\r\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\r\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\r\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\r\n\r\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\r\n  g000 *= norm0.x;\r\n  g010 *= norm0.y;\r\n  g100 *= norm0.z;\r\n  g110 *= norm0.w;\r\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\r\n  g001 *= norm1.x;\r\n  g011 *= norm1.y;\r\n  g101 *= norm1.z;\r\n  g111 *= norm1.w;\r\n\r\n  float n000 = dot(g000, Pf0);\r\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\r\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\r\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\r\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\r\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\r\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\r\n  float n111 = dot(g111, Pf1);\r\n\r\n  vec3 fade_xyz = fade(Pf0);\r\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\r\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\r\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\r\n  return 2.2 * n_xyz;\r\n}\r\n\r\nfloat turbulence(vec3 p) {\r\n  float w = 100.0;\r\n  float t = -.5;\r\n  for (float f = 1.0 ; f <= 10.0 ; f++) {\r\n    float power = pow(2.0, f);\r\n    t += abs(pnoise(vec3(power * p), vec3(10.0, 10.0, 10.0)) / power);\r\n  }\r\n  return t;\r\n}\r\n\r\n// START\r\nuniform float time;\r\nvarying vec2 vUv;\r\nvarying float noise;\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n#include <common>\r\n#include <uv_pars_vertex>\r\n#include <uv2_pars_vertex>\r\n#include <displacementmap_pars_vertex>\r\n#include <envmap_pars_vertex>\r\n#include <color_pars_vertex>\r\n#include <fog_pars_vertex>\r\n#include <normal_pars_vertex>\r\n#include <morphtarget_pars_vertex>\r\n#include <skinning_pars_vertex>\r\n#include <shadowmap_pars_vertex>\r\n#include <logdepthbuf_pars_vertex>\r\n#include <clipping_planes_pars_vertex>\r\n\r\nvoid main() {\r\n\t#include <uv_vertex>\r\n\t#include <uv2_vertex>\r\n\t#include <color_vertex>\r\n\t#include <morphcolor_vertex>\r\n\t#include <beginnormal_vertex>\r\n\t#include <morphnormal_vertex>\r\n\t#include <skinbase_vertex>\r\n\t#include <skinnormal_vertex>\r\n\t#include <defaultnormal_vertex>\r\n\t#include <normal_vertex>\r\n\t#include <begin_vertex>\r\n\t#include <morphtarget_vertex>\r\n\t#include <skinning_vertex>\r\n\t#include <displacementmap_vertex>\r\n\t#include <project_vertex>\r\n\t#include <logdepthbuf_vertex>\r\n\t#include <clipping_planes_vertex>\r\n\r\n\tvViewPosition = - mvPosition.xyz;\r\n\r\n\t#include <worldpos_vertex>\r\n\t#include <envmap_vertex>\r\n\t#include <shadowmap_vertex>\r\n\t#include <fog_vertex>\r\n\r\n  vUv = uv;\r\n\r\n  noise = turbulence(0.01 * position + normal + time * 0.8);\r\n  vec3 displacement = vec3((position.x) * noise, position.y * noise, position.z * noise);\r\n  gl_Position = projectionMatrix * modelViewMatrix * vec4((position + normal) + displacement, 1.0);\r\n}\r\n'),
                    (n.fragmentShader =
                      "#define PHONG\r\n\r\nuniform vec3 diffuse;\r\nuniform vec3 emissive;\r\nuniform vec3 specular;\r\nuniform float shininess;\r\nuniform float opacity;\r\n\r\nuniform float time;\r\nvarying vec2 vUv;\r\nvarying vec3 newPosition;\r\nvarying float noise;\r\n\r\n#include <common>\r\n#include <packing>\r\n#include <dithering_pars_fragment>\r\n#include <color_pars_fragment>\r\n#include <uv_pars_fragment>\r\n#include <uv2_pars_fragment>\r\n#include <map_pars_fragment>\r\n#include <alphamap_pars_fragment>\r\n#include <alphatest_pars_fragment>\r\n#include <aomap_pars_fragment>\r\n#include <lightmap_pars_fragment>\r\n#include <emissivemap_pars_fragment>\r\n#include <envmap_common_pars_fragment>\r\n#include <envmap_pars_fragment>\r\n#include <cube_uv_reflection_fragment>\r\n#include <fog_pars_fragment>\r\n#include <bsdfs>\r\n#include <lights_pars_begin>\r\n#include <normal_pars_fragment>\r\n#include <lights_phong_pars_fragment>\r\n#include <shadowmap_pars_fragment>\r\n#include <bumpmap_pars_fragment>\r\n#include <normalmap_pars_fragment>\r\n#include <specularmap_pars_fragment>\r\n#include <logdepthbuf_pars_fragment>\r\n#include <clipping_planes_pars_fragment>\r\n\r\nvoid main() {\r\n\t#include <clipping_planes_fragment>\r\n\r\n  vec3 color = vec3(vUv * (0.2 - 2.0 * noise), 1.0);\r\n  vec3 finalColors = vec3(color.b * 1.5, color.r, color.r);\r\n  vec4 diffuseColor = vec4(cos(finalColors * noise * 3.0), 1.0);\r\n  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));\r\n  vec3 totalEmissiveRadiance = emissive;\r\n\r\n\t#include <logdepthbuf_fragment>\r\n\t#include <map_fragment>\r\n\t#include <color_fragment>\r\n\t#include <alphamap_fragment>\r\n\t#include <alphatest_fragment>\r\n\t#include <specularmap_fragment>\r\n\t#include <normal_fragment_begin>\r\n\t#include <normal_fragment_maps>\r\n\t#include <emissivemap_fragment>\r\n\t#include <lights_phong_fragment>\r\n\t#include <lights_fragment_begin>\r\n\t#include <lights_fragment_maps>\r\n\t#include <lights_fragment_end>\r\n\t#include <aomap_fragment>\r\n\r\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\r\n  \r\n\t#include <envmap_fragment>\r\n\t#include <output_fragment>\r\n\t#include <tonemapping_fragment>\r\n\t#include <encodings_fragment>\r\n\t#include <fog_fragment>\r\n\t#include <premultiplied_alpha_fragment>\r\n\t#include <dithering_fragment>\r\n\r\n  gl_FragColor = vec4(outgoingLight, diffuseColor.a);\r\n}\r\n");
                }),
                (0, v.startTransition)(function () {
                  (L.current = new s.Aip(32, 128, 128)),
                    (k.current = new s.Kj0(L.current, E.current)),
                    (k.current.position.z = 0),
                    (k.current.modifier = Math.random()),
                    R.current.add(k.current);
                }),
                function () {
                  (0, p.in)(R.current), (0, p.e8)(w.current);
                }
              );
            }, []),
            (0, v.useEffect)(
              function () {
                var n = new s.Ox3(y, 0.6),
                  r = new s.Mig(y, "light" === m ? 0.8 : 0.1);
                return (
                  (n.position.z = 200),
                  (n.position.x = 100),
                  (n.position.y = 100),
                  (S.current = [n, r]),
                  (R.current.background = (0, t.Z)(
                    s.Ilk,
                    (0, c.Z)((0, d.Zm)(e))
                  )),
                  S.current.forEach(function (n) {
                    return R.current.add(n);
                  }),
                  function () {
                    (0, p.Ji)(S.current);
                  }
                );
              },
              [e, y, m]
            ),
            (0, v.useEffect)(
              function () {
                var n = M.width,
                  r = M.height,
                  e = r + 0.3 * r;
                w.current.setSize(n, e),
                  (b.current.aspect = n / e),
                  b.current.updateProjectionMatrix(),
                  I && w.current.render(R.current, b.current),
                  n <= d.BC.mobile
                    ? ((k.current.position.x = 14), (k.current.position.y = 10))
                    : n <= d.BC.tablet
                    ? ((k.current.position.x = 18), (k.current.position.y = 14))
                    : ((k.current.position.x = 22),
                      (k.current.position.y = 16));
              },
              [I, M]
            ),
            (0, v.useEffect)(
              function () {
                var n = function (n) {
                  var r = n.clientX / window.innerWidth,
                    e = n.clientY / window.innerHeight;
                  F.set(e / 2), j.set(r / 2);
                };
                return (
                  !I && D && window.addEventListener("mousemove", n),
                  function () {
                    window.removeEventListener("mousemove", n);
                  }
                );
              },
              [D, I, F, j]
            ),
            (0, v.useEffect)(
              function () {
                var n,
                  r = function () {
                    (n = requestAnimationFrame(r)),
                      void 0 !== C.current &&
                        (C.current.time.value =
                          5e-5 * (Date.now() - z.current)),
                      (k.current.rotation.z += 0.001),
                      (k.current.rotation.x = F.get()),
                      (k.current.rotation.y = j.get()),
                      w.current.render(R.current, b.current);
                  };
                return (
                  !I && D ? r() : w.current.render(R.current, b.current),
                  function () {
                    cancelAnimationFrame(n);
                  }
                );
              },
              [D, I, F, j]
            ),
            (0, o.jsx)(u.u, {
              in: !0,
              timeout: 3e3,
              children: function (r) {
                return (0, o.jsx)(
                  "canvas",
                  (0, i.Z)(
                    {
                      "aria-hidden": !0,
                      className: x().canvas,
                      "data-visible": r,
                      ref: P,
                    },
                    n
                  )
                );
              },
            })
          );
        };
    },
    3142: function (n, r, e) {
      "use strict";
      e.d(r, {
        Et: function () {
          return g;
        },
        Ji: function () {
          return s;
        },
        Zf: function () {
          return u;
        },
        e8: function () {
          return v;
        },
        in: function () {
          return l;
        },
        x2: function () {
          return d;
        },
      });
      var t = e(9477),
        i = e(4976),
        c = e(7607);
      t.CtF.enabled = !0;
      var o = new i._(),
        a = new c.E();
      o.setDecoderPath("/draco/"), a.setDRACOLoader(o);
      var u = a,
        g = new t.dpR(),
        l = function (n) {
          null === n ||
            void 0 === n ||
            n.traverse(function (n) {
              if (n.isMesh)
                if ((n.geometry.dispose(), n.material.isMaterial))
                  f(n.material);
                else {
                  var r = !0,
                    e = !1,
                    t = void 0;
                  try {
                    for (
                      var i, c = n.material[Symbol.iterator]();
                      !(r = (i = c.next()).done);
                      r = !0
                    ) {
                      var o = i.value;
                      f(o);
                    }
                  } catch (a) {
                    (e = !0), (t = a);
                  } finally {
                    try {
                      r || null == c.return || c.return();
                    } finally {
                      if (e) throw t;
                    }
                  }
                }
            });
        },
        f = function (n) {
          n.dispose();
          var r = !0,
            e = !1,
            t = void 0;
          try {
            for (
              var i, c = Object.keys(n)[Symbol.iterator]();
              !(r = (i = c.next()).done);
              r = !0
            ) {
              var o,
                a,
                u,
                g = n[i.value];
              if (g && "object" === typeof g && "minFilter" in g)
                g.dispose(),
                  null === (o = g.source) ||
                    void 0 === o ||
                    null === (a = o.data) ||
                    void 0 === a ||
                    null === (u = a.close) ||
                    void 0 === u ||
                    u.call(a);
            }
          } catch (l) {
            (e = !0), (t = l);
          } finally {
            try {
              r || null == c.return || c.return();
            } finally {
              if (e) throw t;
            }
          }
        },
        v = function (n) {
          n.dispose(), (n = null);
        },
        s = function (n) {
          var r = !0,
            e = !1,
            t = void 0;
          try {
            for (
              var i, c = n[Symbol.iterator]();
              !(r = (i = c.next()).done);
              r = !0
            ) {
              var o = i.value;
              o.parent.remove(o);
            }
          } catch (a) {
            (e = !0), (t = a);
          } finally {
            try {
              r || null == c.return || c.return();
            } finally {
              if (e) throw t;
            }
          }
        },
        d = function (n, r) {
          var e;
          return (
            r.traverse(function (r) {
              r.name === n && (e = r);
            }),
            e
          );
        };
    },
    9030: function (n) {
      n.exports = { canvas: "DisplacementSphere_canvas__zrcVe" };
    },
    8616: function (n, r, e) {
      "use strict";
      function t(n, r) {
        return (
          (t =
            Object.setPrototypeOf ||
            function (n, r) {
              return (n.__proto__ = r), n;
            }),
          t(n, r)
        );
      }
      function i(n, r) {
        return t(n, r);
      }
      function c() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (n) {
          return !1;
        }
      }
      function o(n, r, e) {
        return (
          (o = c()
            ? Reflect.construct
            : function (n, r, e) {
                var t = [null];
                t.push.apply(t, r);
                var c = new (Function.bind.apply(n, t))();
                return e && i(c, e.prototype), c;
              }),
          o.apply(null, arguments)
        );
      }
      function a(n, r, e) {
        return o.apply(null, arguments);
      }
      e.d(r, {
        Z: function () {
          return a;
        },
      });
    },
  },
]);
