"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [168],
  {
    7333: function (e, t, n) {
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      n.d(t, {
        z: function () {
          return r;
        },
      });
      var a = n(9477);
      const i = (e, t) => ((e % t) + t) % t;
      class r extends a.pBf {
        constructor(e, t) {
          super(),
            o(this, "object", void 0),
            o(this, "domElement", void 0),
            o(this, "enabled", !0),
            o(this, "target", new a.Pa4()),
            o(this, "minDistance", 0),
            o(this, "maxDistance", 1 / 0),
            o(this, "minZoom", 0),
            o(this, "maxZoom", 1 / 0),
            o(this, "minPolarAngle", 0),
            o(this, "maxPolarAngle", Math.PI),
            o(this, "minAzimuthAngle", -1 / 0),
            o(this, "maxAzimuthAngle", 1 / 0),
            o(this, "enableDamping", !1),
            o(this, "dampingFactor", 0.05),
            o(this, "enableZoom", !0),
            o(this, "zoomSpeed", 1),
            o(this, "enableRotate", !0),
            o(this, "rotateSpeed", 1),
            o(this, "enablePan", !0),
            o(this, "panSpeed", 1),
            o(this, "screenSpacePanning", !0),
            o(this, "keyPanSpeed", 7),
            o(this, "autoRotate", !1),
            o(this, "autoRotateSpeed", 2),
            o(this, "reverseOrbit", !1),
            o(this, "keys", {
              LEFT: "ArrowLeft",
              UP: "ArrowUp",
              RIGHT: "ArrowRight",
              BOTTOM: "ArrowDown",
            }),
            o(this, "mouseButtons", {
              LEFT: a.RsA.ROTATE,
              MIDDLE: a.RsA.DOLLY,
              RIGHT: a.RsA.PAN,
            }),
            o(this, "touches", { ONE: a.QmN.ROTATE, TWO: a.QmN.DOLLY_PAN }),
            o(this, "target0", void 0),
            o(this, "position0", void 0),
            o(this, "zoom0", void 0),
            o(this, "_domElementKeyEvents", null),
            o(this, "getPolarAngle", void 0),
            o(this, "getAzimuthalAngle", void 0),
            o(this, "setPolarAngle", void 0),
            o(this, "setAzimuthalAngle", void 0),
            o(this, "getDistance", void 0),
            o(this, "listenToKeyEvents", void 0),
            o(this, "saveState", void 0),
            o(this, "reset", void 0),
            o(this, "update", void 0),
            o(this, "connect", void 0),
            o(this, "dispose", void 0),
            (this.object = e),
            (this.domElement = t),
            (this.target0 = this.target.clone()),
            (this.position0 = this.object.position.clone()),
            (this.zoom0 = this.object instanceof a.cPb ? this.object.zoom : 1),
            (this.getPolarAngle = () => h.phi),
            (this.getAzimuthalAngle = () => h.theta),
            (this.setPolarAngle = (e) => {
              let t = i(e, 2 * Math.PI),
                o = h.phi;
              o < 0 && (o += 2 * Math.PI), t < 0 && (t += 2 * Math.PI);
              let a = Math.abs(t - o);
              2 * Math.PI - a < a &&
                (t < o ? (t += 2 * Math.PI) : (o += 2 * Math.PI)),
                (d.phi = t - o),
                n.update();
            }),
            (this.setAzimuthalAngle = (e) => {
              let t = i(e, 2 * Math.PI),
                o = h.theta;
              o < 0 && (o += 2 * Math.PI), t < 0 && (t += 2 * Math.PI);
              let a = Math.abs(t - o);
              2 * Math.PI - a < a &&
                (t < o ? (t += 2 * Math.PI) : (o += 2 * Math.PI)),
                (d.theta = t - o),
                n.update();
            }),
            (this.getDistance = () => n.object.position.distanceTo(n.target)),
            (this.listenToKeyEvents = (e) => {
              e.addEventListener("keydown", W), (this._domElementKeyEvents = e);
            }),
            (this.saveState = () => {
              n.target0.copy(n.target),
                n.position0.copy(n.object.position),
                (n.zoom0 = n.object instanceof a.cPb ? n.object.zoom : 1);
            }),
            (this.reset = () => {
              n.target.copy(n.target0),
                n.object.position.copy(n.position0),
                n.object instanceof a.cPb &&
                  ((n.object.zoom = n.zoom0),
                  n.object.updateProjectionMatrix()),
                n.dispatchEvent(r),
                n.update(),
                (u = l.NONE);
            }),
            (this.update = (() => {
              const t = new a.Pa4(),
                o = new a._fP().setFromUnitVectors(e.up, new a.Pa4(0, 1, 0)),
                i = o.clone().invert(),
                s = new a.Pa4(),
                c = new a._fP(),
                g = 2 * Math.PI;
              return function () {
                const e = n.object.position;
                t.copy(e).sub(n.target),
                  t.applyQuaternion(o),
                  h.setFromVector3(t),
                  n.autoRotate &&
                    u === l.NONE &&
                    j(((2 * Math.PI) / 60 / 60) * n.autoRotateSpeed),
                  n.enableDamping
                    ? ((h.theta += d.theta * n.dampingFactor),
                      (h.phi += d.phi * n.dampingFactor))
                    : ((h.theta += d.theta), (h.phi += d.phi));
                let a = n.minAzimuthAngle,
                  y = n.maxAzimuthAngle;
                return (
                  isFinite(a) &&
                    isFinite(y) &&
                    (a < -Math.PI ? (a += g) : a > Math.PI && (a -= g),
                    y < -Math.PI ? (y += g) : y > Math.PI && (y -= g),
                    (h.theta =
                      a <= y
                        ? Math.max(a, Math.min(y, h.theta))
                        : h.theta > (a + y) / 2
                        ? Math.max(a, h.theta)
                        : Math.min(y, h.theta))),
                  (h.phi = Math.max(
                    n.minPolarAngle,
                    Math.min(n.maxPolarAngle, h.phi)
                  )),
                  h.makeSafe(),
                  (h.radius *= m),
                  (h.radius = Math.max(
                    n.minDistance,
                    Math.min(n.maxDistance, h.radius)
                  )),
                  !0 === n.enableDamping
                    ? n.target.addScaledVector(f, n.dampingFactor)
                    : n.target.add(f),
                  t.setFromSpherical(h),
                  t.applyQuaternion(i),
                  e.copy(n.target).add(t),
                  n.object.lookAt(n.target),
                  !0 === n.enableDamping
                    ? ((d.theta *= 1 - n.dampingFactor),
                      (d.phi *= 1 - n.dampingFactor),
                      f.multiplyScalar(1 - n.dampingFactor))
                    : (d.set(0, 0, 0), f.set(0, 0, 0)),
                  (m = 1),
                  !!(
                    b ||
                    s.distanceToSquared(n.object.position) > p ||
                    8 * (1 - c.dot(n.object.quaternion)) > p
                  ) &&
                    (n.dispatchEvent(r),
                    s.copy(n.object.position),
                    c.copy(n.object.quaternion),
                    (b = !1),
                    !0)
                );
              };
            })()),
            (this.connect = (e) => {
              e === document &&
                console.error(
                  'THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'
                ),
                (n.domElement = e),
                (n.domElement.style.touchAction = "none"),
                n.domElement.addEventListener("contextmenu", Q),
                n.domElement.addEventListener("pointerdown", Z),
                n.domElement.addEventListener("pointercancel", V),
                n.domElement.addEventListener("wheel", K);
            }),
            (this.dispose = () => {
              var e, t, o, a, i, r;
              null === (e = n.domElement) ||
                void 0 === e ||
                e.removeEventListener("contextmenu", Q),
                null === (t = n.domElement) ||
                  void 0 === t ||
                  t.removeEventListener("pointerdown", Z),
                null === (o = n.domElement) ||
                  void 0 === o ||
                  o.removeEventListener("pointercancel", V),
                null === (a = n.domElement) ||
                  void 0 === a ||
                  a.removeEventListener("wheel", K),
                null === (i = n.domElement) ||
                  void 0 === i ||
                  i.ownerDocument.removeEventListener("pointermove", G),
                null === (r = n.domElement) ||
                  void 0 === r ||
                  r.ownerDocument.removeEventListener("pointerup", B),
                null !== n._domElementKeyEvents &&
                  n._domElementKeyEvents.removeEventListener("keydown", W);
            });
          const n = this,
            r = { type: "change" },
            s = { type: "start" },
            c = { type: "end" },
            l = {
              NONE: -1,
              ROTATE: 0,
              DOLLY: 1,
              PAN: 2,
              TOUCH_ROTATE: 3,
              TOUCH_PAN: 4,
              TOUCH_DOLLY_PAN: 5,
              TOUCH_DOLLY_ROTATE: 6,
            };
          let u = l.NONE;
          const p = 1e-6,
            h = new a.$V(),
            d = new a.$V();
          let m = 1;
          const f = new a.Pa4();
          let b = !1;
          const g = new a.FM8(),
            y = new a.FM8(),
            E = new a.FM8(),
            v = new a.FM8(),
            P = new a.FM8(),
            w = new a.FM8(),
            A = new a.FM8(),
            O = new a.FM8(),
            T = new a.FM8(),
            M = [],
            L = {};
          function R() {
            return Math.pow(0.95, n.zoomSpeed);
          }
          function j(e) {
            n.reverseOrbit ? (d.theta += e) : (d.theta -= e);
          }
          function N(e) {
            n.reverseOrbit ? (d.phi += e) : (d.phi -= e);
          }
          const k = (() => {
              const e = new a.Pa4();
              return function (t, n) {
                e.setFromMatrixColumn(n, 0), e.multiplyScalar(-t), f.add(e);
              };
            })(),
            F = (() => {
              const e = new a.Pa4();
              return function (t, o) {
                !0 === n.screenSpacePanning
                  ? e.setFromMatrixColumn(o, 1)
                  : (e.setFromMatrixColumn(o, 0),
                    e.crossVectors(n.object.up, e)),
                  e.multiplyScalar(t),
                  f.add(e);
              };
            })(),
            x = (() => {
              const e = new a.Pa4();
              return function (t, o) {
                const i = n.domElement;
                if (
                  i &&
                  n.object instanceof a.cPb &&
                  n.object.isPerspectiveCamera
                ) {
                  const a = n.object.position;
                  e.copy(a).sub(n.target);
                  let r = e.length();
                  (r *= Math.tan(((n.object.fov / 2) * Math.PI) / 180)),
                    k((2 * t * r) / i.clientHeight, n.object.matrix),
                    F((2 * o * r) / i.clientHeight, n.object.matrix);
                } else
                  i &&
                  n.object instanceof a.iKG &&
                  n.object.isOrthographicCamera
                    ? (k(
                        (t * (n.object.right - n.object.left)) /
                          n.object.zoom /
                          i.clientWidth,
                        n.object.matrix
                      ),
                      F(
                        (o * (n.object.top - n.object.bottom)) /
                          n.object.zoom /
                          i.clientHeight,
                        n.object.matrix
                      ))
                    : (console.warn(
                        "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."
                      ),
                      (n.enablePan = !1));
              };
            })();
          function D(e) {
            n.object instanceof a.cPb && n.object.isPerspectiveCamera
              ? (m /= e)
              : n.object instanceof a.iKG && n.object.isOrthographicCamera
              ? ((n.object.zoom = Math.max(
                  n.minZoom,
                  Math.min(n.maxZoom, n.object.zoom * e)
                )),
                n.object.updateProjectionMatrix(),
                (b = !0))
              : (console.warn(
                  "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
                ),
                (n.enableZoom = !1));
          }
          function I(e) {
            n.object instanceof a.cPb && n.object.isPerspectiveCamera
              ? (m *= e)
              : n.object instanceof a.iKG && n.object.isOrthographicCamera
              ? ((n.object.zoom = Math.max(
                  n.minZoom,
                  Math.min(n.maxZoom, n.object.zoom / e)
                )),
                n.object.updateProjectionMatrix(),
                (b = !0))
              : (console.warn(
                  "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
                ),
                (n.enableZoom = !1));
          }
          function S(e) {
            g.set(e.clientX, e.clientY);
          }
          function C(e) {
            v.set(e.clientX, e.clientY);
          }
          function Y() {
            if (1 == M.length) g.set(M[0].pageX, M[0].pageY);
            else {
              const e = 0.5 * (M[0].pageX + M[1].pageX),
                t = 0.5 * (M[0].pageY + M[1].pageY);
              g.set(e, t);
            }
          }
          function _() {
            if (1 == M.length) v.set(M[0].pageX, M[0].pageY);
            else {
              const e = 0.5 * (M[0].pageX + M[1].pageX),
                t = 0.5 * (M[0].pageY + M[1].pageY);
              v.set(e, t);
            }
          }
          function H() {
            const e = M[0].pageX - M[1].pageX,
              t = M[0].pageY - M[1].pageY,
              n = Math.sqrt(e * e + t * t);
            A.set(0, n);
          }
          function z(e) {
            if (1 == M.length) y.set(e.pageX, e.pageY);
            else {
              const t = J(e),
                n = 0.5 * (e.pageX + t.x),
                o = 0.5 * (e.pageY + t.y);
              y.set(n, o);
            }
            E.subVectors(y, g).multiplyScalar(n.rotateSpeed);
            const t = n.domElement;
            t &&
              (j((2 * Math.PI * E.x) / t.clientHeight),
              N((2 * Math.PI * E.y) / t.clientHeight)),
              g.copy(y);
          }
          function U(e) {
            if (1 == M.length) P.set(e.pageX, e.pageY);
            else {
              const t = J(e),
                n = 0.5 * (e.pageX + t.x),
                o = 0.5 * (e.pageY + t.y);
              P.set(n, o);
            }
            w.subVectors(P, v).multiplyScalar(n.panSpeed),
              x(w.x, w.y),
              v.copy(P);
          }
          function X(e) {
            const t = J(e),
              o = e.pageX - t.x,
              a = e.pageY - t.y,
              i = Math.sqrt(o * o + a * a);
            O.set(0, i),
              T.set(0, Math.pow(O.y / A.y, n.zoomSpeed)),
              D(T.y),
              A.copy(O);
          }
          function Z(e) {
            if (!1 !== n.enabled) {
              var t, o;
              if (0 === M.length)
                null === (t = n.domElement) ||
                  void 0 === t ||
                  t.ownerDocument.addEventListener("pointermove", G),
                  null === (o = n.domElement) ||
                    void 0 === o ||
                    o.ownerDocument.addEventListener("pointerup", B);
              !(function (e) {
                M.push(e);
              })(e),
                "touch" === e.pointerType
                  ? (function (e) {
                      switch (($(e), M.length)) {
                        case 1:
                          switch (n.touches.ONE) {
                            case a.QmN.ROTATE:
                              if (!1 === n.enableRotate) return;
                              Y(), (u = l.TOUCH_ROTATE);
                              break;
                            case a.QmN.PAN:
                              if (!1 === n.enablePan) return;
                              _(), (u = l.TOUCH_PAN);
                              break;
                            default:
                              u = l.NONE;
                          }
                          break;
                        case 2:
                          switch (n.touches.TWO) {
                            case a.QmN.DOLLY_PAN:
                              if (!1 === n.enableZoom && !1 === n.enablePan)
                                return;
                              n.enableZoom && H(),
                                n.enablePan && _(),
                                (u = l.TOUCH_DOLLY_PAN);
                              break;
                            case a.QmN.DOLLY_ROTATE:
                              if (!1 === n.enableZoom && !1 === n.enableRotate)
                                return;
                              n.enableZoom && H(),
                                n.enableRotate && Y(),
                                (u = l.TOUCH_DOLLY_ROTATE);
                              break;
                            default:
                              u = l.NONE;
                          }
                          break;
                        default:
                          u = l.NONE;
                      }
                      u !== l.NONE && n.dispatchEvent(s);
                    })(e)
                  : (function (e) {
                      let t;
                      switch (e.button) {
                        case 0:
                          t = n.mouseButtons.LEFT;
                          break;
                        case 1:
                          t = n.mouseButtons.MIDDLE;
                          break;
                        case 2:
                          t = n.mouseButtons.RIGHT;
                          break;
                        default:
                          t = -1;
                      }
                      switch (t) {
                        case a.RsA.DOLLY:
                          if (!1 === n.enableZoom) return;
                          !(function (e) {
                            A.set(e.clientX, e.clientY);
                          })(e),
                            (u = l.DOLLY);
                          break;
                        case a.RsA.ROTATE:
                          if (e.ctrlKey || e.metaKey || e.shiftKey) {
                            if (!1 === n.enablePan) return;
                            C(e), (u = l.PAN);
                          } else {
                            if (!1 === n.enableRotate) return;
                            S(e), (u = l.ROTATE);
                          }
                          break;
                        case a.RsA.PAN:
                          if (e.ctrlKey || e.metaKey || e.shiftKey) {
                            if (!1 === n.enableRotate) return;
                            S(e), (u = l.ROTATE);
                          } else {
                            if (!1 === n.enablePan) return;
                            C(e), (u = l.PAN);
                          }
                          break;
                        default:
                          u = l.NONE;
                      }
                      u !== l.NONE && n.dispatchEvent(s);
                    })(e);
            }
          }
          function G(e) {
            !1 !== n.enabled &&
              ("touch" === e.pointerType
                ? (function (e) {
                    switch (($(e), u)) {
                      case l.TOUCH_ROTATE:
                        if (!1 === n.enableRotate) return;
                        z(e), n.update();
                        break;
                      case l.TOUCH_PAN:
                        if (!1 === n.enablePan) return;
                        U(e), n.update();
                        break;
                      case l.TOUCH_DOLLY_PAN:
                        if (!1 === n.enableZoom && !1 === n.enablePan) return;
                        !(function (e) {
                          n.enableZoom && X(e), n.enablePan && U(e);
                        })(e),
                          n.update();
                        break;
                      case l.TOUCH_DOLLY_ROTATE:
                        if (!1 === n.enableZoom && !1 === n.enableRotate)
                          return;
                        !(function (e) {
                          n.enableZoom && X(e), n.enableRotate && z(e);
                        })(e),
                          n.update();
                        break;
                      default:
                        u = l.NONE;
                    }
                  })(e)
                : (function (e) {
                    if (!1 === n.enabled) return;
                    switch (u) {
                      case l.ROTATE:
                        if (!1 === n.enableRotate) return;
                        !(function (e) {
                          y.set(e.clientX, e.clientY),
                            E.subVectors(y, g).multiplyScalar(n.rotateSpeed);
                          const t = n.domElement;
                          t &&
                            (j((2 * Math.PI * E.x) / t.clientHeight),
                            N((2 * Math.PI * E.y) / t.clientHeight)),
                            g.copy(y),
                            n.update();
                        })(e);
                        break;
                      case l.DOLLY:
                        if (!1 === n.enableZoom) return;
                        !(function (e) {
                          O.set(e.clientX, e.clientY),
                            T.subVectors(O, A),
                            T.y > 0 ? D(R()) : T.y < 0 && I(R()),
                            A.copy(O),
                            n.update();
                        })(e);
                        break;
                      case l.PAN:
                        if (!1 === n.enablePan) return;
                        !(function (e) {
                          P.set(e.clientX, e.clientY),
                            w.subVectors(P, v).multiplyScalar(n.panSpeed),
                            x(w.x, w.y),
                            v.copy(P),
                            n.update();
                        })(e);
                    }
                  })(e));
          }
          function B(e) {
            var t, o, a;
            (q(e), 0 === M.length) &&
              (null === (t = n.domElement) ||
                void 0 === t ||
                t.releasePointerCapture(e.pointerId),
              null === (o = n.domElement) ||
                void 0 === o ||
                o.ownerDocument.removeEventListener("pointermove", G),
              null === (a = n.domElement) ||
                void 0 === a ||
                a.ownerDocument.removeEventListener("pointerup", B));
            n.dispatchEvent(c), (u = l.NONE);
          }
          function V(e) {
            q(e);
          }
          function K(e) {
            !1 === n.enabled ||
              !1 === n.enableZoom ||
              (u !== l.NONE && u !== l.ROTATE) ||
              (e.preventDefault(),
              n.dispatchEvent(s),
              (function (e) {
                e.deltaY < 0 ? I(R()) : e.deltaY > 0 && D(R()), n.update();
              })(e),
              n.dispatchEvent(c));
          }
          function W(e) {
            !1 !== n.enabled &&
              !1 !== n.enablePan &&
              (function (e) {
                let t = !1;
                switch (e.code) {
                  case n.keys.UP:
                    x(0, n.keyPanSpeed), (t = !0);
                    break;
                  case n.keys.BOTTOM:
                    x(0, -n.keyPanSpeed), (t = !0);
                    break;
                  case n.keys.LEFT:
                    x(n.keyPanSpeed, 0), (t = !0);
                    break;
                  case n.keys.RIGHT:
                    x(-n.keyPanSpeed, 0), (t = !0);
                }
                t && (e.preventDefault(), n.update());
              })(e);
          }
          function Q(e) {
            !1 !== n.enabled && e.preventDefault();
          }
          function q(e) {
            delete L[e.pointerId];
            for (let t = 0; t < M.length; t++)
              if (M[t].pointerId == e.pointerId) return void M.splice(t, 1);
          }
          function $(e) {
            let t = L[e.pointerId];
            void 0 === t && ((t = new a.FM8()), (L[e.pointerId] = t)),
              t.set(e.pageX, e.pageY);
          }
          function J(e) {
            const t = e.pointerId === M[0].pointerId ? M[1] : M[0];
            return L[t.pointerId];
          }
          void 0 !== t && this.connect(t), this.update();
        }
      }
    },
    9997: function (e, t, n) {
      n.d(t, {
        q: function () {
          return i;
        },
      });
      var o = n(9477);
      class a extends o.yxD {
        constructor(e) {
          super(e), (this.type = o.cLu);
        }
        parse(e) {
          const t = function (e, t) {
              switch (e) {
                case 1:
                  console.error("THREE.RGBELoader Read Error: " + (t || ""));
                  break;
                case 2:
                  console.error("THREE.RGBELoader Write Error: " + (t || ""));
                  break;
                case 3:
                  console.error(
                    "THREE.RGBELoader Bad File Format: " + (t || "")
                  );
                  break;
                default:
                  console.error("THREE.RGBELoader: Error: " + (t || ""));
              }
              return -1;
            },
            n = function (e, t, n) {
              t = t || 1024;
              let o = e.pos,
                a = -1,
                i = 0,
                r = "",
                s = String.fromCharCode.apply(
                  null,
                  new Uint16Array(e.subarray(o, o + 128))
                );
              for (; 0 > (a = s.indexOf("\n")) && i < t && o < e.byteLength; )
                (r += s),
                  (i += s.length),
                  (o += 128),
                  (s += String.fromCharCode.apply(
                    null,
                    new Uint16Array(e.subarray(o, o + 128))
                  ));
              return (
                -1 < a && (!1 !== n && (e.pos += i + a + 1), r + s.slice(0, a))
              );
            },
            a = function (e, t, n, o) {
              const a = e[t + 3],
                i = Math.pow(2, a - 128) / 255;
              (n[o + 0] = e[t + 0] * i),
                (n[o + 1] = e[t + 1] * i),
                (n[o + 2] = e[t + 2] * i),
                (n[o + 3] = 1);
            },
            i = function (e, t, n, a) {
              const i = e[t + 3],
                r = Math.pow(2, i - 128) / 255;
              (n[a + 0] = o.A5E.toHalfFloat(Math.min(e[t + 0] * r, 65504))),
                (n[a + 1] = o.A5E.toHalfFloat(Math.min(e[t + 1] * r, 65504))),
                (n[a + 2] = o.A5E.toHalfFloat(Math.min(e[t + 2] * r, 65504))),
                (n[a + 3] = o.A5E.toHalfFloat(1));
            },
            r = new Uint8Array(e);
          r.pos = 0;
          const s = (function (e) {
            const o = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,
              a = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,
              i = /^\s*FORMAT=(\S+)\s*$/,
              r = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,
              s = {
                valid: 0,
                string: "",
                comments: "",
                programtype: "RGBE",
                format: "",
                gamma: 1,
                exposure: 1,
                width: 0,
                height: 0,
              };
            let c, l;
            if (e.pos >= e.byteLength || !(c = n(e)))
              return t(1, "no header found");
            if (!(l = c.match(/^#\?(\S+)/))) return t(3, "bad initial token");
            for (
              s.valid |= 1, s.programtype = l[1], s.string += c + "\n";
              (c = n(e)), !1 !== c;

            )
              if (((s.string += c + "\n"), "#" !== c.charAt(0))) {
                if (
                  ((l = c.match(o)) && (s.gamma = parseFloat(l[1])),
                  (l = c.match(a)) && (s.exposure = parseFloat(l[1])),
                  (l = c.match(i)) && ((s.valid |= 2), (s.format = l[1])),
                  (l = c.match(r)) &&
                    ((s.valid |= 4),
                    (s.height = parseInt(l[1], 10)),
                    (s.width = parseInt(l[2], 10))),
                  2 & s.valid && 4 & s.valid)
                )
                  break;
              } else s.comments += c + "\n";
            return 2 & s.valid
              ? 4 & s.valid
                ? s
                : t(3, "missing image size specifier")
              : t(3, "missing format specifier");
          })(r);
          if (-1 !== s) {
            const e = s.width,
              n = s.height,
              c = (function (e, n, o) {
                const a = n;
                if (
                  a < 8 ||
                  a > 32767 ||
                  2 !== e[0] ||
                  2 !== e[1] ||
                  128 & e[2]
                )
                  return new Uint8Array(e);
                if (a !== ((e[2] << 8) | e[3]))
                  return t(3, "wrong scanline width");
                const i = new Uint8Array(4 * n * o);
                if (!i.length) return t(4, "unable to allocate buffer space");
                let r = 0,
                  s = 0;
                const c = 4 * a,
                  l = new Uint8Array(4),
                  u = new Uint8Array(c);
                let p = o;
                for (; p > 0 && s < e.byteLength; ) {
                  if (s + 4 > e.byteLength) return t(1);
                  if (
                    ((l[0] = e[s++]),
                    (l[1] = e[s++]),
                    (l[2] = e[s++]),
                    (l[3] = e[s++]),
                    2 != l[0] || 2 != l[1] || ((l[2] << 8) | l[3]) != a)
                  )
                    return t(3, "bad rgbe scanline format");
                  let n,
                    o = 0;
                  for (; o < c && s < e.byteLength; ) {
                    n = e[s++];
                    const a = n > 128;
                    if ((a && (n -= 128), 0 === n || o + n > c))
                      return t(3, "bad scanline data");
                    if (a) {
                      const t = e[s++];
                      for (let e = 0; e < n; e++) u[o++] = t;
                    } else u.set(e.subarray(s, s + n), o), (o += n), (s += n);
                  }
                  const h = a;
                  for (let e = 0; e < h; e++) {
                    let t = 0;
                    (i[r] = u[e + t]),
                      (t += a),
                      (i[r + 1] = u[e + t]),
                      (t += a),
                      (i[r + 2] = u[e + t]),
                      (t += a),
                      (i[r + 3] = u[e + t]),
                      (r += 4);
                  }
                  p--;
                }
                return i;
              })(r.subarray(r.pos), e, n);
            if (-1 !== c) {
              let t, r, l;
              switch (this.type) {
                case o.VzW:
                  l = c.length / 4;
                  const e = new Float32Array(4 * l);
                  for (let t = 0; t < l; t++) a(c, 4 * t, e, 4 * t);
                  (t = e), (r = o.VzW);
                  break;
                case o.cLu:
                  l = c.length / 4;
                  const n = new Uint16Array(4 * l);
                  for (let t = 0; t < l; t++) i(c, 4 * t, n, 4 * t);
                  (t = n), (r = o.cLu);
                  break;
                default:
                  console.error(
                    "THREE.RGBELoader: unsupported type: ",
                    this.type
                  );
              }
              return {
                width: e,
                height: n,
                data: t,
                header: s.string,
                gamma: s.gamma,
                exposure: s.exposure,
                type: r,
              };
            }
          }
          return null;
        }
        setDataType(e) {
          return (this.type = e), this;
        }
        load(e, t, n, a) {
          return super.load(
            e,
            function (e, n) {
              switch (e.type) {
                case o.VzW:
                case o.cLu:
                  (e.encoding = o.rnI),
                    (e.minFilter = o.wem),
                    (e.magFilter = o.wem),
                    (e.generateMipmaps = !1),
                    (e.flipY = !0);
              }
              t && t(e, n);
            },
            n,
            a
          );
        }
      }
      class i extends o.aNw {
        constructor(e) {
          super(e), (this.hdrLoader = new a()), (this.type = o.cLu);
        }
        load(e, t, n, a) {
          Array.isArray(e) ||
            (console.warn(
              "THREE.HDRCubeTextureLoader signature has changed. Use .setDataType() instead."
            ),
            this.setDataType(e),
            (e = t),
            (t = n),
            (n = a),
            (a = arguments[4]));
          const i = new o.BtG();
          switch (((i.type = this.type), i.type)) {
            case o.VzW:
            case o.cLu:
              (i.encoding = o.rnI),
                (i.minFilter = o.wem),
                (i.magFilter = o.wem),
                (i.generateMipmaps = !1);
          }
          const r = this;
          let s = 0;
          function c(t, n, a, c) {
            new o.hH6(r.manager)
              .setPath(r.path)
              .setResponseType("arraybuffer")
              .setWithCredentials(r.withCredentials)
              .load(
                e[t],
                function (e) {
                  s++;
                  const a = r.hdrLoader.parse(e);
                  if (a) {
                    if (void 0 !== a.data) {
                      const e = new o.IEO(a.data, a.width, a.height);
                      (e.type = i.type),
                        (e.encoding = i.encoding),
                        (e.format = i.format),
                        (e.minFilter = i.minFilter),
                        (e.magFilter = i.magFilter),
                        (e.generateMipmaps = i.generateMipmaps),
                        (i.images[t] = e);
                    }
                    6 === s && ((i.needsUpdate = !0), n && n(i));
                  }
                },
                a,
                c
              );
          }
          for (let o = 0; o < e.length; o++) c(o, t, n, a);
          return i;
        }
        setDataType(e) {
          return (this.type = e), this.hdrLoader.setDataType(e), this;
        }
      }
    },
    8616: function (e, t, n) {
      function o(e, t) {
        return (
          (o =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          o(e, t)
        );
      }
      function a(e, t) {
        return o(e, t);
      }
      function i() {
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
        } catch (e) {
          return !1;
        }
      }
      function r(e, t, n) {
        return (
          (r = i()
            ? Reflect.construct
            : function (e, t, n) {
                var o = [null];
                o.push.apply(o, t);
                var i = new (Function.bind.apply(e, o))();
                return n && a(i, n.prototype), i;
              }),
          r.apply(null, arguments)
        );
      }
      function s(e, t, n) {
        return r.apply(null, arguments);
      }
      n.d(t, {
        Z: function () {
          return s;
        },
      });
    },
    7378: function (e, t, n) {
      n.d(t, {
        q: function () {
          return p;
        },
      });
      var o = n(655),
        a = n(7294),
        i = n(754),
        r = n(406),
        s = n(3234),
        c = n(6014),
        l = n(6681);
      var u = n(8868);
      function p(e, t) {
        void 0 === t && (t = {});
        var n = (0, a.useContext)(c._).isStatic,
          p = (0, a.useRef)(null),
          h = (function (e) {
            var t = (0, l.h)(function () {
              return (0, s.B)(e);
            });
            if ((0, a.useContext)(c._).isStatic) {
              var n = (0, o.CR)((0, a.useState)(e), 2)[1];
              (0, a.useEffect)(function () {
                return t.onChange(n);
              }, []);
            }
            return t;
          })((0, r.i)(e) ? e.get() : e);
        return (
          (0, a.useMemo)(
            function () {
              return h.attach(function (e, a) {
                return n
                  ? a(e)
                  : (p.current && p.current.stop(),
                    (p.current = (0, i.j)(
                      (0, o.pi)(
                        (0, o.pi)(
                          { from: h.get(), to: e, velocity: h.getVelocity() },
                          t
                        ),
                        { onUpdate: a }
                      )
                    )),
                    h.get());
              });
            },
            [JSON.stringify(t)]
          ),
          (function (e, t) {
            (0, u.L)(
              function () {
                if ((0, r.i)(e)) return e.onChange(t);
              },
              [t]
            );
          })(e, function (e) {
            return h.set(parseFloat(e));
          }),
          h
        );
      }
    },
  },
]);
