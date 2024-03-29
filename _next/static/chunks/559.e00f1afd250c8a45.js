"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [559],
  {
    4976: function (e, t, s) {
      s.d(t, {
        _: function () {
          return o;
        },
      });
      var n = s(9477);
      const r = new WeakMap();
      class o extends n.aNw {
        constructor(e) {
          super(e),
            (this.decoderPath = ""),
            (this.decoderConfig = {}),
            (this.decoderBinary = null),
            (this.decoderPending = null),
            (this.workerLimit = 4),
            (this.workerPool = []),
            (this.workerNextTaskID = 1),
            (this.workerSourceURL = ""),
            (this.defaultAttributeIDs = {
              position: "POSITION",
              normal: "NORMAL",
              color: "COLOR",
              uv: "TEX_COORD",
            }),
            (this.defaultAttributeTypes = {
              position: "Float32Array",
              normal: "Float32Array",
              color: "Float32Array",
              uv: "Float32Array",
            });
        }
        setDecoderPath(e) {
          return (this.decoderPath = e), this;
        }
        setDecoderConfig(e) {
          return (this.decoderConfig = e), this;
        }
        setWorkerLimit(e) {
          return (this.workerLimit = e), this;
        }
        load(e, t, s, r) {
          const o = new n.hH6(this.manager);
          o.setPath(this.path),
            o.setResponseType("arraybuffer"),
            o.setRequestHeader(this.requestHeader),
            o.setWithCredentials(this.withCredentials),
            o.load(
              e,
              (e) => {
                const s = {
                  attributeIDs: this.defaultAttributeIDs,
                  attributeTypes: this.defaultAttributeTypes,
                  useUniqueIDs: !1,
                };
                this.decodeGeometry(e, s).then(t).catch(r);
              },
              s,
              r
            );
        }
        decodeDracoFile(e, t, s, n) {
          const r = {
            attributeIDs: s || this.defaultAttributeIDs,
            attributeTypes: n || this.defaultAttributeTypes,
            useUniqueIDs: !!s,
          };
          this.decodeGeometry(e, r).then(t);
        }
        decodeGeometry(e, t) {
          for (const r in t.attributeTypes) {
            const e = t.attributeTypes[r];
            void 0 !== e.BYTES_PER_ELEMENT && (t.attributeTypes[r] = e.name);
          }
          const s = JSON.stringify(t);
          if (r.has(e)) {
            const t = r.get(e);
            if (t.key === s) return t.promise;
            if (0 === e.byteLength)
              throw new Error(
                "THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred."
              );
          }
          let n;
          const o = this.workerNextTaskID++,
            i = e.byteLength,
            a = this._getWorker(o, i)
              .then(
                (s) => (
                  (n = s),
                  new Promise((s, r) => {
                    (n._callbacks[o] = { resolve: s, reject: r }),
                      n.postMessage(
                        { type: "decode", id: o, taskConfig: t, buffer: e },
                        [e]
                      );
                  })
                )
              )
              .then((e) => this._createGeometry(e.geometry));
          return (
            a
              .catch(() => !0)
              .then(() => {
                n && o && this._releaseTask(n, o);
              }),
            r.set(e, { key: s, promise: a }),
            a
          );
        }
        _createGeometry(e) {
          const t = new n.u9r();
          e.index && t.setIndex(new n.TlE(e.index.array, 1));
          for (let s = 0; s < e.attributes.length; s++) {
            const r = e.attributes[s],
              o = r.name,
              i = r.array,
              a = r.itemSize;
            t.setAttribute(o, new n.TlE(i, a));
          }
          return t;
        }
        _loadLibrary(e, t) {
          const s = new n.hH6(this.manager);
          return (
            s.setPath(this.decoderPath),
            s.setResponseType(t),
            s.setWithCredentials(this.withCredentials),
            new Promise((t, n) => {
              s.load(e, t, void 0, n);
            })
          );
        }
        preload() {
          return this._initDecoder(), this;
        }
        _initDecoder() {
          if (this.decoderPending) return this.decoderPending;
          const e =
              "object" !== typeof WebAssembly ||
              "js" === this.decoderConfig.type,
            t = [];
          return (
            e
              ? t.push(this._loadLibrary("draco_decoder.js", "text"))
              : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")),
                t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))),
            (this.decoderPending = Promise.all(t).then((t) => {
              const s = t[0];
              e || (this.decoderConfig.wasmBinary = t[1]);
              const n = i.toString(),
                r = [
                  "/* draco decoder */",
                  s,
                  "",
                  "/* worker */",
                  n.substring(n.indexOf("{") + 1, n.lastIndexOf("}")),
                ].join("\n");
              this.workerSourceURL = URL.createObjectURL(new Blob([r]));
            })),
            this.decoderPending
          );
        }
        _getWorker(e, t) {
          return this._initDecoder().then(() => {
            if (this.workerPool.length < this.workerLimit) {
              const e = new Worker(this.workerSourceURL);
              (e._callbacks = {}),
                (e._taskCosts = {}),
                (e._taskLoad = 0),
                e.postMessage({
                  type: "init",
                  decoderConfig: this.decoderConfig,
                }),
                (e.onmessage = function (t) {
                  const s = t.data;
                  switch (s.type) {
                    case "decode":
                      e._callbacks[s.id].resolve(s);
                      break;
                    case "error":
                      e._callbacks[s.id].reject(s);
                      break;
                    default:
                      console.error(
                        'THREE.DRACOLoader: Unexpected message, "' +
                          s.type +
                          '"'
                      );
                  }
                }),
                this.workerPool.push(e);
            } else
              this.workerPool.sort(function (e, t) {
                return e._taskLoad > t._taskLoad ? -1 : 1;
              });
            const s = this.workerPool[this.workerPool.length - 1];
            return (s._taskCosts[e] = t), (s._taskLoad += t), s;
          });
        }
        _releaseTask(e, t) {
          (e._taskLoad -= e._taskCosts[t]),
            delete e._callbacks[t],
            delete e._taskCosts[t];
        }
        debug() {
          console.log(
            "Task load: ",
            this.workerPool.map((e) => e._taskLoad)
          );
        }
        dispose() {
          for (let e = 0; e < this.workerPool.length; ++e)
            this.workerPool[e].terminate();
          return (this.workerPool.length = 0), this;
        }
      }
      function i() {
        let e, t;
        function s(e, t, s, n, r, o) {
          const i = o.num_components(),
            a = s.num_points() * i,
            c = a * r.BYTES_PER_ELEMENT,
            l = (function (e, t) {
              switch (t) {
                case Float32Array:
                  return e.DT_FLOAT32;
                case Int8Array:
                  return e.DT_INT8;
                case Int16Array:
                  return e.DT_INT16;
                case Int32Array:
                  return e.DT_INT32;
                case Uint8Array:
                  return e.DT_UINT8;
                case Uint16Array:
                  return e.DT_UINT16;
                case Uint32Array:
                  return e.DT_UINT32;
              }
            })(e, r),
            u = e._malloc(c);
          t.GetAttributeDataArrayForAllPoints(s, o, l, c, u);
          const h = new r(e.HEAPF32.buffer, u, a).slice();
          return e._free(u), { name: n, array: h, itemSize: i };
        }
        onmessage = function (n) {
          const r = n.data;
          switch (r.type) {
            case "init":
              (e = r.decoderConfig),
                (t = new Promise(function (t) {
                  (e.onModuleLoaded = function (e) {
                    t({ draco: e });
                  }),
                    DracoDecoderModule(e);
                }));
              break;
            case "decode":
              const n = r.buffer,
                o = r.taskConfig;
              t.then((e) => {
                const t = e.draco,
                  i = new t.Decoder(),
                  a = new t.DecoderBuffer();
                a.Init(new Int8Array(n), n.byteLength);
                try {
                  const e = (function (e, t, n, r) {
                      const o = r.attributeIDs,
                        i = r.attributeTypes;
                      let a, c;
                      const l = t.GetEncodedGeometryType(n);
                      if (l === e.TRIANGULAR_MESH)
                        (a = new e.Mesh()), (c = t.DecodeBufferToMesh(n, a));
                      else {
                        if (l !== e.POINT_CLOUD)
                          throw new Error(
                            "THREE.DRACOLoader: Unexpected geometry type."
                          );
                        (a = new e.PointCloud()),
                          (c = t.DecodeBufferToPointCloud(n, a));
                      }
                      if (!c.ok() || 0 === a.ptr)
                        throw new Error(
                          "THREE.DRACOLoader: Decoding failed: " + c.error_msg()
                        );
                      const u = { index: null, attributes: [] };
                      for (const h in o) {
                        const n = self[i[h]];
                        let c, l;
                        if (r.useUniqueIDs)
                          (l = o[h]), (c = t.GetAttributeByUniqueId(a, l));
                        else {
                          if (((l = t.GetAttributeId(a, e[o[h]])), -1 === l))
                            continue;
                          c = t.GetAttribute(a, l);
                        }
                        u.attributes.push(s(e, t, a, h, n, c));
                      }
                      l === e.TRIANGULAR_MESH &&
                        (u.index = (function (e, t, s) {
                          const n = 3 * s.num_faces(),
                            r = 4 * n,
                            o = e._malloc(r);
                          t.GetTrianglesUInt32Array(s, r, o);
                          const i = new Uint32Array(
                            e.HEAPF32.buffer,
                            o,
                            n
                          ).slice();
                          return e._free(o), { array: i, itemSize: 1 };
                        })(e, t, a));
                      return e.destroy(a), u;
                    })(t, i, a, o),
                    n = e.attributes.map((e) => e.array.buffer);
                  e.index && n.push(e.index.array.buffer),
                    self.postMessage(
                      { type: "decode", id: r.id, geometry: e },
                      n
                    );
                } catch (c) {
                  console.error(c),
                    self.postMessage({
                      type: "error",
                      id: r.id,
                      error: c.message,
                    });
                } finally {
                  t.destroy(a), t.destroy(i);
                }
              });
          }
        };
      }
    },
    7607: function (e, t, s) {
      s.d(t, {
        E: function () {
          return r;
        },
      });
      var n = s(9477);
      class r extends n.aNw {
        constructor(e) {
          super(e),
            (this.dracoLoader = null),
            (this.ktx2Loader = null),
            (this.meshoptDecoder = null),
            (this.pluginCallbacks = []),
            this.register(function (e) {
              return new u(e);
            }),
            this.register(function (e) {
              return new T(e);
            }),
            this.register(function (e) {
              return new x(e);
            }),
            this.register(function (e) {
              return new d(e);
            }),
            this.register(function (e) {
              return new p(e);
            }),
            this.register(function (e) {
              return new m(e);
            }),
            this.register(function (e) {
              return new f(e);
            }),
            this.register(function (e) {
              return new l(e);
            }),
            this.register(function (e) {
              return new g(e);
            }),
            this.register(function (e) {
              return new h(e);
            }),
            this.register(function (e) {
              return new a(e);
            }),
            this.register(function (e) {
              return new R(e);
            });
        }
        load(e, t, s, r) {
          const o = this;
          let i;
          (i =
            "" !== this.resourcePath
              ? this.resourcePath
              : "" !== this.path
              ? this.path
              : n.Zp0.extractUrlBase(e)),
            this.manager.itemStart(e);
          const a = function (t) {
              r ? r(t) : console.error(t),
                o.manager.itemError(e),
                o.manager.itemEnd(e);
            },
            c = new n.hH6(this.manager);
          c.setPath(this.path),
            c.setResponseType("arraybuffer"),
            c.setRequestHeader(this.requestHeader),
            c.setWithCredentials(this.withCredentials),
            c.load(
              e,
              function (s) {
                try {
                  o.parse(
                    s,
                    i,
                    function (s) {
                      t(s), o.manager.itemEnd(e);
                    },
                    a
                  );
                } catch (n) {
                  a(n);
                }
              },
              s,
              a
            );
        }
        setDRACOLoader(e) {
          return (this.dracoLoader = e), this;
        }
        setDDSLoader() {
          throw new Error(
            'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
          );
        }
        setKTX2Loader(e) {
          return (this.ktx2Loader = e), this;
        }
        setMeshoptDecoder(e) {
          return (this.meshoptDecoder = e), this;
        }
        register(e) {
          return (
            -1 === this.pluginCallbacks.indexOf(e) &&
              this.pluginCallbacks.push(e),
            this
          );
        }
        unregister(e) {
          return (
            -1 !== this.pluginCallbacks.indexOf(e) &&
              this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
            this
          );
        }
        parse(e, t, s, r) {
          let o;
          const a = {},
            l = {};
          if ("string" === typeof e) o = e;
          else {
            if (n.Zp0.decodeText(new Uint8Array(e, 0, 4)) === _) {
              try {
                a[i.KHR_BINARY_GLTF] = new A(e);
              } catch (d) {
                return void (r && r(d));
              }
              o = a[i.KHR_BINARY_GLTF].content;
            } else o = n.Zp0.decodeText(new Uint8Array(e));
          }
          const u = JSON.parse(o);
          if (void 0 === u.asset || u.asset.version[0] < 2)
            return void (
              r &&
              r(
                new Error(
                  "THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."
                )
              )
            );
          const h = new te(u, {
            path: t || this.resourcePath || "",
            crossOrigin: this.crossOrigin,
            requestHeader: this.requestHeader,
            manager: this.manager,
            ktx2Loader: this.ktx2Loader,
            meshoptDecoder: this.meshoptDecoder,
          });
          h.fileLoader.setRequestHeader(this.requestHeader);
          for (let n = 0; n < this.pluginCallbacks.length; n++) {
            const e = this.pluginCallbacks[n](h);
            (l[e.name] = e), (a[e.name] = !0);
          }
          if (u.extensionsUsed)
            for (let n = 0; n < u.extensionsUsed.length; ++n) {
              const e = u.extensionsUsed[n],
                t = u.extensionsRequired || [];
              switch (e) {
                case i.KHR_MATERIALS_UNLIT:
                  a[e] = new c();
                  break;
                case i.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
                  a[e] = new S();
                  break;
                case i.KHR_DRACO_MESH_COMPRESSION:
                  a[e] = new E(u, this.dracoLoader);
                  break;
                case i.KHR_TEXTURE_TRANSFORM:
                  a[e] = new w();
                  break;
                case i.KHR_MESH_QUANTIZATION:
                  a[e] = new b();
                  break;
                default:
                  t.indexOf(e) >= 0 &&
                    void 0 === l[e] &&
                    console.warn(
                      'THREE.GLTFLoader: Unknown extension "' + e + '".'
                    );
              }
            }
          h.setExtensions(a), h.setPlugins(l), h.parse(s, r);
        }
        parseAsync(e, t) {
          const s = this;
          return new Promise(function (n, r) {
            s.parse(e, t, n, r);
          });
        }
      }
      function o() {
        let e = {};
        return {
          get: function (t) {
            return e[t];
          },
          add: function (t, s) {
            e[t] = s;
          },
          remove: function (t) {
            delete e[t];
          },
          removeAll: function () {
            e = {};
          },
        };
      }
      const i = {
        KHR_BINARY_GLTF: "KHR_binary_glTF",
        KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
        KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
        KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
        KHR_MATERIALS_IOR: "KHR_materials_ior",
        KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
          "KHR_materials_pbrSpecularGlossiness",
        KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
        KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
        KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
        KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
        KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
        KHR_MATERIALS_VOLUME: "KHR_materials_volume",
        KHR_TEXTURE_BASISU: "KHR_texture_basisu",
        KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
        KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
        KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
        EXT_TEXTURE_WEBP: "EXT_texture_webp",
        EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
      };
      class a {
        constructor(e) {
          (this.parser = e),
            (this.name = i.KHR_LIGHTS_PUNCTUAL),
            (this.cache = { refs: {}, uses: {} });
        }
        _markDefs() {
          const e = this.parser,
            t = this.parser.json.nodes || [];
          for (let s = 0, n = t.length; s < n; s++) {
            const n = t[s];
            n.extensions &&
              n.extensions[this.name] &&
              void 0 !== n.extensions[this.name].light &&
              e._addNodeRef(this.cache, n.extensions[this.name].light);
          }
        }
        _loadLight(e) {
          const t = this.parser,
            s = "light:" + e;
          let r = t.cache.get(s);
          if (r) return r;
          const o = t.json,
            i = (((o.extensions && o.extensions[this.name]) || {}).lights ||
              [])[e];
          let a;
          const c = new n.Ilk(16777215);
          void 0 !== i.color && c.fromArray(i.color);
          const l = void 0 !== i.range ? i.range : 0;
          switch (i.type) {
            case "directional":
              (a = new n.Ox3(c)),
                a.target.position.set(0, 0, -1),
                a.add(a.target);
              break;
            case "point":
              (a = new n.cek(c)), (a.distance = l);
              break;
            case "spot":
              (a = new n.PMe(c)),
                (a.distance = l),
                (i.spot = i.spot || {}),
                (i.spot.innerConeAngle =
                  void 0 !== i.spot.innerConeAngle ? i.spot.innerConeAngle : 0),
                (i.spot.outerConeAngle =
                  void 0 !== i.spot.outerConeAngle
                    ? i.spot.outerConeAngle
                    : Math.PI / 4),
                (a.angle = i.spot.outerConeAngle),
                (a.penumbra =
                  1 - i.spot.innerConeAngle / i.spot.outerConeAngle),
                a.target.position.set(0, 0, -1),
                a.add(a.target);
              break;
            default:
              throw new Error(
                "THREE.GLTFLoader: Unexpected light type: " + i.type
              );
          }
          return (
            a.position.set(0, 0, 0),
            (a.decay = 2),
            void 0 !== i.intensity && (a.intensity = i.intensity),
            (a.name = t.createUniqueName(i.name || "light_" + e)),
            (r = Promise.resolve(a)),
            t.cache.add(s, r),
            r
          );
        }
        createNodeAttachment(e) {
          const t = this,
            s = this.parser,
            n = s.json.nodes[e],
            r = ((n.extensions && n.extensions[this.name]) || {}).light;
          return void 0 === r
            ? null
            : this._loadLight(r).then(function (e) {
                return s._getNodeRef(t.cache, r, e);
              });
        }
      }
      class c {
        constructor() {
          this.name = i.KHR_MATERIALS_UNLIT;
        }
        getMaterialType() {
          return n.vBJ;
        }
        extendParams(e, t, s) {
          const r = [];
          (e.color = new n.Ilk(1, 1, 1)), (e.opacity = 1);
          const o = t.pbrMetallicRoughness;
          if (o) {
            if (Array.isArray(o.baseColorFactor)) {
              const t = o.baseColorFactor;
              e.color.fromArray(t), (e.opacity = t[3]);
            }
            void 0 !== o.baseColorTexture &&
              r.push(s.assignTexture(e, "map", o.baseColorTexture, n.knz));
          }
          return Promise.all(r);
        }
      }
      class l {
        constructor(e) {
          (this.parser = e), (this.name = i.KHR_MATERIALS_EMISSIVE_STRENGTH);
        }
        extendMaterialParams(e, t) {
          const s = this.parser.json.materials[e];
          if (!s.extensions || !s.extensions[this.name])
            return Promise.resolve();
          const n = s.extensions[this.name].emissiveStrength;
          return void 0 !== n && (t.emissiveIntensity = n), Promise.resolve();
        }
      }
      class u {
        constructor(e) {
          (this.parser = e), (this.name = i.KHR_MATERIALS_CLEARCOAT);
        }
        getMaterialType(e) {
          const t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? n.EJi : null;
        }
        extendMaterialParams(e, t) {
          const s = this.parser,
            r = s.json.materials[e];
          if (!r.extensions || !r.extensions[this.name])
            return Promise.resolve();
          const o = [],
            i = r.extensions[this.name];
          if (
            (void 0 !== i.clearcoatFactor && (t.clearcoat = i.clearcoatFactor),
            void 0 !== i.clearcoatTexture &&
              o.push(s.assignTexture(t, "clearcoatMap", i.clearcoatTexture)),
            void 0 !== i.clearcoatRoughnessFactor &&
              (t.clearcoatRoughness = i.clearcoatRoughnessFactor),
            void 0 !== i.clearcoatRoughnessTexture &&
              o.push(
                s.assignTexture(
                  t,
                  "clearcoatRoughnessMap",
                  i.clearcoatRoughnessTexture
                )
              ),
            void 0 !== i.clearcoatNormalTexture &&
              (o.push(
                s.assignTexture(
                  t,
                  "clearcoatNormalMap",
                  i.clearcoatNormalTexture
                )
              ),
              void 0 !== i.clearcoatNormalTexture.scale))
          ) {
            const e = i.clearcoatNormalTexture.scale;
            t.clearcoatNormalScale = new n.FM8(e, e);
          }
          return Promise.all(o);
        }
      }
      class h {
        constructor(e) {
          (this.parser = e), (this.name = i.KHR_MATERIALS_IRIDESCENCE);
        }
        getMaterialType(e) {
          const t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? n.EJi : null;
        }
        extendMaterialParams(e, t) {
          const s = this.parser,
            n = s.json.materials[e];
          if (!n.extensions || !n.extensions[this.name])
            return Promise.resolve();
          const r = [],
            o = n.extensions[this.name];
          return (
            void 0 !== o.iridescenceFactor &&
              (t.iridescence = o.iridescenceFactor),
            void 0 !== o.iridescenceTexture &&
              r.push(
                s.assignTexture(t, "iridescenceMap", o.iridescenceTexture)
              ),
            void 0 !== o.iridescenceIor &&
              (t.iridescenceIOR = o.iridescenceIor),
            void 0 === t.iridescenceThicknessRange &&
              (t.iridescenceThicknessRange = [100, 400]),
            void 0 !== o.iridescenceThicknessMinimum &&
              (t.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum),
            void 0 !== o.iridescenceThicknessMaximum &&
              (t.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum),
            void 0 !== o.iridescenceThicknessTexture &&
              r.push(
                s.assignTexture(
                  t,
                  "iridescenceThicknessMap",
                  o.iridescenceThicknessTexture
                )
              ),
            Promise.all(r)
          );
        }
      }
      class d {
        constructor(e) {
          (this.parser = e), (this.name = i.KHR_MATERIALS_SHEEN);
        }
        getMaterialType(e) {
          const t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? n.EJi : null;
        }
        extendMaterialParams(e, t) {
          const s = this.parser,
            r = s.json.materials[e];
          if (!r.extensions || !r.extensions[this.name])
            return Promise.resolve();
          const o = [];
          (t.sheenColor = new n.Ilk(0, 0, 0)),
            (t.sheenRoughness = 0),
            (t.sheen = 1);
          const i = r.extensions[this.name];
          return (
            void 0 !== i.sheenColorFactor &&
              t.sheenColor.fromArray(i.sheenColorFactor),
            void 0 !== i.sheenRoughnessFactor &&
              (t.sheenRoughness = i.sheenRoughnessFactor),
            void 0 !== i.sheenColorTexture &&
              o.push(
                s.assignTexture(t, "sheenColorMap", i.sheenColorTexture, n.knz)
              ),
            void 0 !== i.sheenRoughnessTexture &&
              o.push(
                s.assignTexture(t, "sheenRoughnessMap", i.sheenRoughnessTexture)
              ),
            Promise.all(o)
          );
        }
      }
      class p {
        constructor(e) {
          (this.parser = e), (this.name = i.KHR_MATERIALS_TRANSMISSION);
        }
        getMaterialType(e) {
          const t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? n.EJi : null;
        }
        extendMaterialParams(e, t) {
          const s = this.parser,
            n = s.json.materials[e];
          if (!n.extensions || !n.extensions[this.name])
            return Promise.resolve();
          const r = [],
            o = n.extensions[this.name];
          return (
            void 0 !== o.transmissionFactor &&
              (t.transmission = o.transmissionFactor),
            void 0 !== o.transmissionTexture &&
              r.push(
                s.assignTexture(t, "transmissionMap", o.transmissionTexture)
              ),
            Promise.all(r)
          );
        }
      }
      class m {
        constructor(e) {
          (this.parser = e), (this.name = i.KHR_MATERIALS_VOLUME);
        }
        getMaterialType(e) {
          const t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? n.EJi : null;
        }
        extendMaterialParams(e, t) {
          const s = this.parser,
            r = s.json.materials[e];
          if (!r.extensions || !r.extensions[this.name])
            return Promise.resolve();
          const o = [],
            i = r.extensions[this.name];
          (t.thickness = void 0 !== i.thicknessFactor ? i.thicknessFactor : 0),
            void 0 !== i.thicknessTexture &&
              o.push(s.assignTexture(t, "thicknessMap", i.thicknessTexture)),
            (t.attenuationDistance = i.attenuationDistance || 1 / 0);
          const a = i.attenuationColor || [1, 1, 1];
          return (
            (t.attenuationColor = new n.Ilk(a[0], a[1], a[2])), Promise.all(o)
          );
        }
      }
      class f {
        constructor(e) {
          (this.parser = e), (this.name = i.KHR_MATERIALS_IOR);
        }
        getMaterialType(e) {
          const t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? n.EJi : null;
        }
        extendMaterialParams(e, t) {
          const s = this.parser.json.materials[e];
          if (!s.extensions || !s.extensions[this.name])
            return Promise.resolve();
          const n = s.extensions[this.name];
          return (t.ior = void 0 !== n.ior ? n.ior : 1.5), Promise.resolve();
        }
      }
      class g {
        constructor(e) {
          (this.parser = e), (this.name = i.KHR_MATERIALS_SPECULAR);
        }
        getMaterialType(e) {
          const t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? n.EJi : null;
        }
        extendMaterialParams(e, t) {
          const s = this.parser,
            r = s.json.materials[e];
          if (!r.extensions || !r.extensions[this.name])
            return Promise.resolve();
          const o = [],
            i = r.extensions[this.name];
          (t.specularIntensity =
            void 0 !== i.specularFactor ? i.specularFactor : 1),
            void 0 !== i.specularTexture &&
              o.push(
                s.assignTexture(t, "specularIntensityMap", i.specularTexture)
              );
          const a = i.specularColorFactor || [1, 1, 1];
          return (
            (t.specularColor = new n.Ilk(a[0], a[1], a[2])),
            void 0 !== i.specularColorTexture &&
              o.push(
                s.assignTexture(
                  t,
                  "specularColorMap",
                  i.specularColorTexture,
                  n.knz
                )
              ),
            Promise.all(o)
          );
        }
      }
      class T {
        constructor(e) {
          (this.parser = e), (this.name = i.KHR_TEXTURE_BASISU);
        }
        loadTexture(e) {
          const t = this.parser,
            s = t.json,
            n = s.textures[e];
          if (!n.extensions || !n.extensions[this.name]) return null;
          const r = n.extensions[this.name],
            o = t.options.ktx2Loader;
          if (!o) {
            if (
              s.extensionsRequired &&
              s.extensionsRequired.indexOf(this.name) >= 0
            )
              throw new Error(
                "THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures"
              );
            return null;
          }
          return t.loadTextureImage(e, r.source, o);
        }
      }
      class x {
        constructor(e) {
          (this.parser = e),
            (this.name = i.EXT_TEXTURE_WEBP),
            (this.isSupported = null);
        }
        loadTexture(e) {
          const t = this.name,
            s = this.parser,
            n = s.json,
            r = n.textures[e];
          if (!r.extensions || !r.extensions[t]) return null;
          const o = r.extensions[t],
            i = n.images[o.source];
          let a = s.textureLoader;
          if (i.uri) {
            const e = s.options.manager.getHandler(i.uri);
            null !== e && (a = e);
          }
          return this.detectSupport().then(function (r) {
            if (r) return s.loadTextureImage(e, o.source, a);
            if (n.extensionsRequired && n.extensionsRequired.indexOf(t) >= 0)
              throw new Error(
                "THREE.GLTFLoader: WebP required by asset but unsupported."
              );
            return s.loadTexture(e);
          });
        }
        detectSupport() {
          return (
            this.isSupported ||
              (this.isSupported = new Promise(function (e) {
                const t = new Image();
                (t.src =
                  "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"),
                  (t.onload = t.onerror =
                    function () {
                      e(1 === t.height);
                    });
              })),
            this.isSupported
          );
        }
      }
      class R {
        constructor(e) {
          (this.name = i.EXT_MESHOPT_COMPRESSION), (this.parser = e);
        }
        loadBufferView(e) {
          const t = this.parser.json,
            s = t.bufferViews[e];
          if (s.extensions && s.extensions[this.name]) {
            const e = s.extensions[this.name],
              n = this.parser.getDependency("buffer", e.buffer),
              r = this.parser.options.meshoptDecoder;
            if (!r || !r.supported) {
              if (
                t.extensionsRequired &&
                t.extensionsRequired.indexOf(this.name) >= 0
              )
                throw new Error(
                  "THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files"
                );
              return null;
            }
            return n.then(function (t) {
              const s = e.byteOffset || 0,
                n = e.byteLength || 0,
                o = e.count,
                i = e.byteStride,
                a = new Uint8Array(t, s, n);
              return r.decodeGltfBufferAsync
                ? r
                    .decodeGltfBufferAsync(o, i, a, e.mode, e.filter)
                    .then(function (e) {
                      return e.buffer;
                    })
                : r.ready.then(function () {
                    const t = new ArrayBuffer(o * i);
                    return (
                      r.decodeGltfBuffer(
                        new Uint8Array(t),
                        o,
                        i,
                        a,
                        e.mode,
                        e.filter
                      ),
                      t
                    );
                  });
            });
          }
          return null;
        }
      }
      const _ = "glTF",
        y = 1313821514,
        v = 5130562;
      class A {
        constructor(e) {
          (this.name = i.KHR_BINARY_GLTF),
            (this.content = null),
            (this.body = null);
          const t = new DataView(e, 0, 12);
          if (
            ((this.header = {
              magic: n.Zp0.decodeText(new Uint8Array(e.slice(0, 4))),
              version: t.getUint32(4, !0),
              length: t.getUint32(8, !0),
            }),
            this.header.magic !== _)
          )
            throw new Error(
              "THREE.GLTFLoader: Unsupported glTF-Binary header."
            );
          if (this.header.version < 2)
            throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
          const s = this.header.length - 12,
            r = new DataView(e, 12);
          let o = 0;
          for (; o < s; ) {
            const t = r.getUint32(o, !0);
            o += 4;
            const s = r.getUint32(o, !0);
            if (((o += 4), s === y)) {
              const s = new Uint8Array(e, 12 + o, t);
              this.content = n.Zp0.decodeText(s);
            } else if (s === v) {
              const s = 12 + o;
              this.body = e.slice(s, s + t);
            }
            o += t;
          }
          if (null === this.content)
            throw new Error("THREE.GLTFLoader: JSON content not found.");
        }
      }
      class E {
        constructor(e, t) {
          if (!t)
            throw new Error(
              "THREE.GLTFLoader: No DRACOLoader instance provided."
            );
          (this.name = i.KHR_DRACO_MESH_COMPRESSION),
            (this.json = e),
            (this.dracoLoader = t),
            this.dracoLoader.preload();
        }
        decodePrimitive(e, t) {
          const s = this.json,
            n = this.dracoLoader,
            r = e.extensions[this.name].bufferView,
            o = e.extensions[this.name].attributes,
            i = {},
            a = {},
            c = {};
          for (const l in o) {
            const e = B[l] || l.toLowerCase();
            i[e] = o[l];
          }
          for (const l in e.attributes) {
            const t = B[l] || l.toLowerCase();
            if (void 0 !== o[l]) {
              const n = s.accessors[e.attributes[l]],
                r = D[n.componentType];
              (c[t] = r.name), (a[t] = !0 === n.normalized);
            }
          }
          return t.getDependency("bufferView", r).then(function (e) {
            return new Promise(function (t) {
              n.decodeDracoFile(
                e,
                function (e) {
                  for (const t in e.attributes) {
                    const s = e.attributes[t],
                      n = a[t];
                    void 0 !== n && (s.normalized = n);
                  }
                  t(e);
                },
                i,
                c
              );
            });
          });
        }
      }
      class w {
        constructor() {
          this.name = i.KHR_TEXTURE_TRANSFORM;
        }
        extendTexture(e, t) {
          return (
            void 0 !== t.texCoord &&
              console.warn(
                'THREE.GLTFLoader: Custom UV sets in "' +
                  this.name +
                  '" extension not yet supported.'
              ),
            (void 0 === t.offset &&
              void 0 === t.rotation &&
              void 0 === t.scale) ||
              ((e = e.clone()),
              void 0 !== t.offset && e.offset.fromArray(t.offset),
              void 0 !== t.rotation && (e.rotation = t.rotation),
              void 0 !== t.scale && e.repeat.fromArray(t.scale),
              (e.needsUpdate = !0)),
            e
          );
        }
      }
      class M extends n.Wid {
        constructor(e) {
          super(), (this.isGLTFSpecularGlossinessMaterial = !0);
          const t = [
              "#ifdef USE_SPECULARMAP",
              "\tuniform sampler2D specularMap;",
              "#endif",
            ].join("\n"),
            s = [
              "#ifdef USE_GLOSSINESSMAP",
              "\tuniform sampler2D glossinessMap;",
              "#endif",
            ].join("\n"),
            r = [
              "vec3 specularFactor = specular;",
              "#ifdef USE_SPECULARMAP",
              "\tvec4 texelSpecular = texture2D( specularMap, vUv );",
              "\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture",
              "\tspecularFactor *= texelSpecular.rgb;",
              "#endif",
            ].join("\n"),
            o = [
              "float glossinessFactor = glossiness;",
              "#ifdef USE_GLOSSINESSMAP",
              "\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );",
              "\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture",
              "\tglossinessFactor *= texelGlossiness.a;",
              "#endif",
            ].join("\n"),
            i = [
              "PhysicalMaterial material;",
              "material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );",
              "vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );",
              "float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );",
              "material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.",
              "material.roughness += geometryRoughness;",
              "material.roughness = min( material.roughness, 1.0 );",
              "material.specularColor = specularFactor;",
            ].join("\n"),
            a = {
              specular: { value: new n.Ilk().setHex(16777215) },
              glossiness: { value: 1 },
              specularMap: { value: null },
              glossinessMap: { value: null },
            };
          (this._extraUniforms = a),
            (this.onBeforeCompile = function (e) {
              for (const t in a) e.uniforms[t] = a[t];
              e.fragmentShader = e.fragmentShader
                .replace("uniform float roughness;", "uniform vec3 specular;")
                .replace(
                  "uniform float metalness;",
                  "uniform float glossiness;"
                )
                .replace("#include <roughnessmap_pars_fragment>", t)
                .replace("#include <metalnessmap_pars_fragment>", s)
                .replace("#include <roughnessmap_fragment>", r)
                .replace("#include <metalnessmap_fragment>", o)
                .replace("#include <lights_physical_fragment>", i);
            }),
            Object.defineProperties(this, {
              specular: {
                get: function () {
                  return a.specular.value;
                },
                set: function (e) {
                  a.specular.value = e;
                },
              },
              specularMap: {
                get: function () {
                  return a.specularMap.value;
                },
                set: function (e) {
                  (a.specularMap.value = e),
                    e
                      ? (this.defines.USE_SPECULARMAP = "")
                      : delete this.defines.USE_SPECULARMAP;
                },
              },
              glossiness: {
                get: function () {
                  return a.glossiness.value;
                },
                set: function (e) {
                  a.glossiness.value = e;
                },
              },
              glossinessMap: {
                get: function () {
                  return a.glossinessMap.value;
                },
                set: function (e) {
                  (a.glossinessMap.value = e),
                    e
                      ? ((this.defines.USE_GLOSSINESSMAP = ""),
                        (this.defines.USE_UV = ""))
                      : (delete this.defines.USE_GLOSSINESSMAP,
                        delete this.defines.USE_UV);
                },
              },
            }),
            delete this.metalness,
            delete this.roughness,
            delete this.metalnessMap,
            delete this.roughnessMap,
            this.setValues(e);
        }
        copy(e) {
          return (
            super.copy(e),
            (this.specularMap = e.specularMap),
            this.specular.copy(e.specular),
            (this.glossinessMap = e.glossinessMap),
            (this.glossiness = e.glossiness),
            delete this.metalness,
            delete this.roughness,
            delete this.metalnessMap,
            delete this.roughnessMap,
            this
          );
        }
      }
      class S {
        constructor() {
          (this.name = i.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS),
            (this.specularGlossinessParams = [
              "color",
              "map",
              "lightMap",
              "lightMapIntensity",
              "aoMap",
              "aoMapIntensity",
              "emissive",
              "emissiveIntensity",
              "emissiveMap",
              "bumpMap",
              "bumpScale",
              "normalMap",
              "normalMapType",
              "displacementMap",
              "displacementScale",
              "displacementBias",
              "specularMap",
              "specular",
              "glossinessMap",
              "glossiness",
              "alphaMap",
              "envMap",
              "envMapIntensity",
              "refractionRatio",
            ]);
        }
        getMaterialType() {
          return M;
        }
        extendParams(e, t, s) {
          const r = t.extensions[this.name];
          (e.color = new n.Ilk(1, 1, 1)), (e.opacity = 1);
          const o = [];
          if (Array.isArray(r.diffuseFactor)) {
            const t = r.diffuseFactor;
            e.color.fromArray(t), (e.opacity = t[3]);
          }
          if (
            (void 0 !== r.diffuseTexture &&
              o.push(s.assignTexture(e, "map", r.diffuseTexture, n.knz)),
            (e.emissive = new n.Ilk(0, 0, 0)),
            (e.glossiness =
              void 0 !== r.glossinessFactor ? r.glossinessFactor : 1),
            (e.specular = new n.Ilk(1, 1, 1)),
            Array.isArray(r.specularFactor) &&
              e.specular.fromArray(r.specularFactor),
            void 0 !== r.specularGlossinessTexture)
          ) {
            const t = r.specularGlossinessTexture;
            o.push(s.assignTexture(e, "glossinessMap", t)),
              o.push(s.assignTexture(e, "specularMap", t, n.knz));
          }
          return Promise.all(o);
        }
        createMaterial(e) {
          const t = new M(e);
          return (
            (t.fog = !0),
            (t.color = e.color),
            (t.map = void 0 === e.map ? null : e.map),
            (t.lightMap = null),
            (t.lightMapIntensity = 1),
            (t.aoMap = void 0 === e.aoMap ? null : e.aoMap),
            (t.aoMapIntensity = 1),
            (t.emissive = e.emissive),
            (t.emissiveIntensity =
              void 0 === e.emissiveIntensity ? 1 : e.emissiveIntensity),
            (t.emissiveMap = void 0 === e.emissiveMap ? null : e.emissiveMap),
            (t.bumpMap = void 0 === e.bumpMap ? null : e.bumpMap),
            (t.bumpScale = 1),
            (t.normalMap = void 0 === e.normalMap ? null : e.normalMap),
            (t.normalMapType = n.IOt),
            e.normalScale && (t.normalScale = e.normalScale),
            (t.displacementMap = null),
            (t.displacementScale = 1),
            (t.displacementBias = 0),
            (t.specularMap = void 0 === e.specularMap ? null : e.specularMap),
            (t.specular = e.specular),
            (t.glossinessMap =
              void 0 === e.glossinessMap ? null : e.glossinessMap),
            (t.glossiness = e.glossiness),
            (t.alphaMap = null),
            (t.envMap = void 0 === e.envMap ? null : e.envMap),
            (t.envMapIntensity = 1),
            (t.refractionRatio = 0.98),
            t
          );
        }
      }
      class b {
        constructor() {
          this.name = i.KHR_MESH_QUANTIZATION;
        }
      }
      class L extends n._C8 {
        constructor(e, t, s, n) {
          super(e, t, s, n);
        }
        copySampleValue_(e) {
          const t = this.resultBuffer,
            s = this.sampleValues,
            n = this.valueSize,
            r = e * n * 3 + n;
          for (let o = 0; o !== n; o++) t[o] = s[r + o];
          return t;
        }
        interpolate_(e, t, s, n) {
          const r = this.resultBuffer,
            o = this.sampleValues,
            i = this.valueSize,
            a = 2 * i,
            c = 3 * i,
            l = n - t,
            u = (s - t) / l,
            h = u * u,
            d = h * u,
            p = e * c,
            m = p - c,
            f = -2 * d + 3 * h,
            g = d - h,
            T = 1 - f,
            x = g - h + u;
          for (let R = 0; R !== i; R++) {
            const e = o[m + R + i],
              t = o[m + R + a] * l,
              s = o[p + R + i],
              n = o[p + R] * l;
            r[R] = T * e + x * t + f * s + g * n;
          }
          return r;
        }
      }
      const I = new n._fP();
      class P extends L {
        interpolate_(e, t, s, n) {
          const r = super.interpolate_(e, t, s, n);
          return I.fromArray(r).normalize().toArray(r), r;
        }
      }
      const k = 0,
        C = 1,
        O = 2,
        H = 3,
        N = 4,
        U = 5,
        F = 6,
        D = {
          5120: Int8Array,
          5121: Uint8Array,
          5122: Int16Array,
          5123: Uint16Array,
          5125: Uint32Array,
          5126: Float32Array,
        },
        G = {
          9728: n.TyD,
          9729: n.wem,
          9984: n.YLQ,
          9985: n.qyh,
          9986: n.aH4,
          9987: n.D1R,
        },
        j = { 33071: n.uWy, 33648: n.OoA, 10497: n.rpg },
        K = {
          SCALAR: 1,
          VEC2: 2,
          VEC3: 3,
          VEC4: 4,
          MAT2: 4,
          MAT3: 9,
          MAT4: 16,
        },
        B = {
          POSITION: "position",
          NORMAL: "normal",
          TANGENT: "tangent",
          TEXCOORD_0: "uv",
          TEXCOORD_1: "uv2",
          COLOR_0: "color",
          WEIGHTS_0: "skinWeight",
          JOINTS_0: "skinIndex",
        },
        V = {
          scale: "scale",
          translation: "position",
          rotation: "quaternion",
          weights: "morphTargetInfluences",
        },
        z = { CUBICSPLINE: void 0, LINEAR: n.NMF, STEP: n.Syv },
        X = "OPAQUE",
        q = "MASK",
        W = "BLEND";
      function J(e, t, s) {
        for (const n in s.extensions)
          void 0 === e[n] &&
            ((t.userData.gltfExtensions = t.userData.gltfExtensions || {}),
            (t.userData.gltfExtensions[n] = s.extensions[n]));
      }
      function Z(e, t) {
        void 0 !== t.extras &&
          ("object" === typeof t.extras
            ? Object.assign(e.userData, t.extras)
            : console.warn(
                "THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras
              ));
      }
      function Y(e, t) {
        if ((e.updateMorphTargets(), void 0 !== t.weights))
          for (let s = 0, n = t.weights.length; s < n; s++)
            e.morphTargetInfluences[s] = t.weights[s];
        if (t.extras && Array.isArray(t.extras.targetNames)) {
          const s = t.extras.targetNames;
          if (e.morphTargetInfluences.length === s.length) {
            e.morphTargetDictionary = {};
            for (let t = 0, n = s.length; t < n; t++)
              e.morphTargetDictionary[s[t]] = t;
          } else
            console.warn(
              "THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names."
            );
        }
      }
      function Q(e) {
        const t = e.extensions && e.extensions[i.KHR_DRACO_MESH_COMPRESSION];
        let s;
        return (
          (s = t
            ? "draco:" + t.bufferView + ":" + t.indices + ":" + $(t.attributes)
            : e.indices + ":" + $(e.attributes) + ":" + e.mode),
          s
        );
      }
      function $(e) {
        let t = "";
        const s = Object.keys(e).sort();
        for (let n = 0, r = s.length; n < r; n++)
          t += s[n] + ":" + e[s[n]] + ";";
        return t;
      }
      function ee(e) {
        switch (e) {
          case Int8Array:
            return 1 / 127;
          case Uint8Array:
            return 1 / 255;
          case Int16Array:
            return 1 / 32767;
          case Uint16Array:
            return 1 / 65535;
          default:
            throw new Error(
              "THREE.GLTFLoader: Unsupported normalized accessor component type."
            );
        }
      }
      class te {
        constructor(e = {}, t = {}) {
          var s, r;
          (this.json = e),
            (this.extensions = {}),
            (this.plugins = {}),
            (this.options = t),
            (this.cache = new o()),
            (this.associations = new Map()),
            (this.primitiveCache = {}),
            (this.meshCache = { refs: {}, uses: {} }),
            (this.cameraCache = { refs: {}, uses: {} }),
            (this.lightCache = { refs: {}, uses: {} }),
            (this.sourceCache = {}),
            (this.textureCache = {}),
            (this.nodeNamesUsed = {});
          const i =
              "undefined" !== typeof navigator &&
              !0 === /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
            a =
              "undefined" !== typeof navigator &&
              (null === (s = navigator.userAgent) || void 0 === s
                ? void 0
                : s.indexOf("Firefox")) > -1,
            c =
              "undefined" !== typeof navigator && a
                ? null === (r = navigator.userAgent) || void 0 === r
                  ? void 0
                  : r.match(/Firefox\/([0-9]+)\./)[1]
                : -1;
          "undefined" === typeof createImageBitmap || i || (a && c < 98)
            ? (this.textureLoader = new n.dpR(this.options.manager))
            : (this.textureLoader = new n.QRU(this.options.manager)),
            this.textureLoader.setCrossOrigin(this.options.crossOrigin),
            this.textureLoader.setRequestHeader(this.options.requestHeader),
            (this.fileLoader = new n.hH6(this.options.manager)),
            this.fileLoader.setResponseType("arraybuffer"),
            "use-credentials" === this.options.crossOrigin &&
              this.fileLoader.setWithCredentials(!0);
        }
        setExtensions(e) {
          this.extensions = e;
        }
        setPlugins(e) {
          this.plugins = e;
        }
        parse(e, t) {
          const s = this,
            n = this.json,
            r = this.extensions;
          this.cache.removeAll(),
            this._invokeAll(function (e) {
              return e._markDefs && e._markDefs();
            }),
            Promise.all(
              this._invokeAll(function (e) {
                return e.beforeRoot && e.beforeRoot();
              })
            )
              .then(function () {
                return Promise.all([
                  s.getDependencies("scene"),
                  s.getDependencies("animation"),
                  s.getDependencies("camera"),
                ]);
              })
              .then(function (t) {
                const o = {
                  scene: t[0][n.scene || 0],
                  scenes: t[0],
                  animations: t[1],
                  cameras: t[2],
                  asset: n.asset,
                  parser: s,
                  userData: {},
                };
                J(r, o, n),
                  Z(o, n),
                  Promise.all(
                    s._invokeAll(function (e) {
                      return e.afterRoot && e.afterRoot(o);
                    })
                  ).then(function () {
                    e(o);
                  });
              })
              .catch(t);
        }
        _markDefs() {
          const e = this.json.nodes || [],
            t = this.json.skins || [],
            s = this.json.meshes || [];
          for (let n = 0, r = t.length; n < r; n++) {
            const s = t[n].joints;
            for (let t = 0, n = s.length; t < n; t++) e[s[t]].isBone = !0;
          }
          for (let n = 0, r = e.length; n < r; n++) {
            const t = e[n];
            void 0 !== t.mesh &&
              (this._addNodeRef(this.meshCache, t.mesh),
              void 0 !== t.skin && (s[t.mesh].isSkinnedMesh = !0)),
              void 0 !== t.camera &&
                this._addNodeRef(this.cameraCache, t.camera);
          }
        }
        _addNodeRef(e, t) {
          void 0 !== t &&
            (void 0 === e.refs[t] && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
        }
        _getNodeRef(e, t, s) {
          if (e.refs[t] <= 1) return s;
          const n = s.clone(),
            r = (e, t) => {
              const s = this.associations.get(e);
              null != s && this.associations.set(t, s);
              for (const [n, o] of e.children.entries()) r(o, t.children[n]);
            };
          return r(s, n), (n.name += "_instance_" + e.uses[t]++), n;
        }
        _invokeOne(e) {
          const t = Object.values(this.plugins);
          t.push(this);
          for (let s = 0; s < t.length; s++) {
            const n = e(t[s]);
            if (n) return n;
          }
          return null;
        }
        _invokeAll(e) {
          const t = Object.values(this.plugins);
          t.unshift(this);
          const s = [];
          for (let n = 0; n < t.length; n++) {
            const r = e(t[n]);
            r && s.push(r);
          }
          return s;
        }
        getDependency(e, t) {
          const s = e + ":" + t;
          let n = this.cache.get(s);
          if (!n) {
            switch (e) {
              case "scene":
                n = this.loadScene(t);
                break;
              case "node":
                n = this.loadNode(t);
                break;
              case "mesh":
                n = this._invokeOne(function (e) {
                  return e.loadMesh && e.loadMesh(t);
                });
                break;
              case "accessor":
                n = this.loadAccessor(t);
                break;
              case "bufferView":
                n = this._invokeOne(function (e) {
                  return e.loadBufferView && e.loadBufferView(t);
                });
                break;
              case "buffer":
                n = this.loadBuffer(t);
                break;
              case "material":
                n = this._invokeOne(function (e) {
                  return e.loadMaterial && e.loadMaterial(t);
                });
                break;
              case "texture":
                n = this._invokeOne(function (e) {
                  return e.loadTexture && e.loadTexture(t);
                });
                break;
              case "skin":
                n = this.loadSkin(t);
                break;
              case "animation":
                n = this._invokeOne(function (e) {
                  return e.loadAnimation && e.loadAnimation(t);
                });
                break;
              case "camera":
                n = this.loadCamera(t);
                break;
              default:
                throw new Error("Unknown type: " + e);
            }
            this.cache.add(s, n);
          }
          return n;
        }
        getDependencies(e) {
          let t = this.cache.get(e);
          if (!t) {
            const s = this,
              n = this.json[e + ("mesh" === e ? "es" : "s")] || [];
            (t = Promise.all(
              n.map(function (t, n) {
                return s.getDependency(e, n);
              })
            )),
              this.cache.add(e, t);
          }
          return t;
        }
        loadBuffer(e) {
          const t = this.json.buffers[e],
            s = this.fileLoader;
          if (t.type && "arraybuffer" !== t.type)
            throw new Error(
              "THREE.GLTFLoader: " + t.type + " buffer type is not supported."
            );
          if (void 0 === t.uri && 0 === e)
            return Promise.resolve(this.extensions[i.KHR_BINARY_GLTF].body);
          const r = this.options;
          return new Promise(function (e, o) {
            s.load(n.Zp0.resolveURL(t.uri, r.path), e, void 0, function () {
              o(
                new Error(
                  'THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'
                )
              );
            });
          });
        }
        loadBufferView(e) {
          const t = this.json.bufferViews[e];
          return this.getDependency("buffer", t.buffer).then(function (e) {
            const s = t.byteLength || 0,
              n = t.byteOffset || 0;
            return e.slice(n, n + s);
          });
        }
        loadAccessor(e) {
          const t = this,
            s = this.json,
            r = this.json.accessors[e];
          if (void 0 === r.bufferView && void 0 === r.sparse)
            return Promise.resolve(null);
          const o = [];
          return (
            void 0 !== r.bufferView
              ? o.push(this.getDependency("bufferView", r.bufferView))
              : o.push(null),
            void 0 !== r.sparse &&
              (o.push(
                this.getDependency("bufferView", r.sparse.indices.bufferView)
              ),
              o.push(
                this.getDependency("bufferView", r.sparse.values.bufferView)
              )),
            Promise.all(o).then(function (e) {
              const o = e[0],
                i = K[r.type],
                a = D[r.componentType],
                c = a.BYTES_PER_ELEMENT,
                l = c * i,
                u = r.byteOffset || 0,
                h =
                  void 0 !== r.bufferView
                    ? s.bufferViews[r.bufferView].byteStride
                    : void 0,
                d = !0 === r.normalized;
              let p, m;
              if (h && h !== l) {
                const e = Math.floor(u / h),
                  s =
                    "InterleavedBuffer:" +
                    r.bufferView +
                    ":" +
                    r.componentType +
                    ":" +
                    e +
                    ":" +
                    r.count;
                let l = t.cache.get(s);
                l ||
                  ((p = new a(o, e * h, (r.count * h) / c)),
                  (l = new n.vpT(p, h / c)),
                  t.cache.add(s, l)),
                  (m = new n.kB5(l, i, (u % h) / c, d));
              } else (p = null === o ? new a(r.count * i) : new a(o, u, r.count * i)), (m = new n.TlE(p, i, d));
              if (void 0 !== r.sparse) {
                const t = K.SCALAR,
                  s = D[r.sparse.indices.componentType],
                  c = r.sparse.indices.byteOffset || 0,
                  l = r.sparse.values.byteOffset || 0,
                  u = new s(e[1], c, r.sparse.count * t),
                  h = new a(e[2], l, r.sparse.count * i);
                null !== o &&
                  (m = new n.TlE(m.array.slice(), m.itemSize, m.normalized));
                for (let e = 0, n = u.length; e < n; e++) {
                  const t = u[e];
                  if (
                    (m.setX(t, h[e * i]),
                    i >= 2 && m.setY(t, h[e * i + 1]),
                    i >= 3 && m.setZ(t, h[e * i + 2]),
                    i >= 4 && m.setW(t, h[e * i + 3]),
                    i >= 5)
                  )
                    throw new Error(
                      "THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute."
                    );
                }
              }
              return m;
            })
          );
        }
        loadTexture(e) {
          const t = this.json,
            s = this.options,
            n = t.textures[e].source,
            r = t.images[n];
          let o = this.textureLoader;
          if (r.uri) {
            const e = s.manager.getHandler(r.uri);
            null !== e && (o = e);
          }
          return this.loadTextureImage(e, n, o);
        }
        loadTextureImage(e, t, s) {
          const r = this,
            o = this.json,
            i = o.textures[e],
            a = o.images[t],
            c = (a.uri || a.bufferView) + ":" + i.sampler;
          if (this.textureCache[c]) return this.textureCache[c];
          const l = this.loadImageSource(t, s)
            .then(function (t) {
              (t.flipY = !1), i.name && (t.name = i.name);
              const s = (o.samplers || {})[i.sampler] || {};
              return (
                (t.magFilter = G[s.magFilter] || n.wem),
                (t.minFilter = G[s.minFilter] || n.D1R),
                (t.wrapS = j[s.wrapS] || n.rpg),
                (t.wrapT = j[s.wrapT] || n.rpg),
                r.associations.set(t, { textures: e }),
                t
              );
            })
            .catch(function () {
              return null;
            });
          return (this.textureCache[c] = l), l;
        }
        loadImageSource(e, t) {
          const s = this,
            r = this.json,
            o = this.options;
          if (void 0 !== this.sourceCache[e])
            return this.sourceCache[e].then((e) => e.clone());
          const i = r.images[e],
            a = self.URL || self.webkitURL;
          let c = i.uri || "",
            l = !1;
          if (void 0 !== i.bufferView)
            c = s.getDependency("bufferView", i.bufferView).then(function (e) {
              l = !0;
              const t = new Blob([e], { type: i.mimeType });
              return (c = a.createObjectURL(t)), c;
            });
          else if (void 0 === i.uri)
            throw new Error(
              "THREE.GLTFLoader: Image " + e + " is missing URI and bufferView"
            );
          const u = Promise.resolve(c)
            .then(function (e) {
              return new Promise(function (s, r) {
                let i = s;
                !0 === t.isImageBitmapLoader &&
                  (i = function (e) {
                    const t = new n.xEZ(e);
                    (t.needsUpdate = !0), s(t);
                  }),
                  t.load(n.Zp0.resolveURL(e, o.path), i, void 0, r);
              });
            })
            .then(function (e) {
              var t;
              return (
                !0 === l && a.revokeObjectURL(c),
                (e.userData.mimeType =
                  i.mimeType ||
                  ((t = i.uri).search(/\.jpe?g($|\?)/i) > 0 ||
                  0 === t.search(/^data\:image\/jpeg/)
                    ? "image/jpeg"
                    : t.search(/\.webp($|\?)/i) > 0 ||
                      0 === t.search(/^data\:image\/webp/)
                    ? "image/webp"
                    : "image/png")),
                e
              );
            })
            .catch(function (e) {
              throw (
                (console.error("THREE.GLTFLoader: Couldn't load texture", c), e)
              );
            });
          return (this.sourceCache[e] = u), u;
        }
        assignTexture(e, t, s, n) {
          const r = this;
          return this.getDependency("texture", s.index).then(function (o) {
            if (
              (void 0 === s.texCoord ||
                0 == s.texCoord ||
                ("aoMap" === t && 1 == s.texCoord) ||
                console.warn(
                  "THREE.GLTFLoader: Custom UV set " +
                    s.texCoord +
                    " for texture " +
                    t +
                    " not yet supported."
                ),
              r.extensions[i.KHR_TEXTURE_TRANSFORM])
            ) {
              const e =
                void 0 !== s.extensions
                  ? s.extensions[i.KHR_TEXTURE_TRANSFORM]
                  : void 0;
              if (e) {
                const t = r.associations.get(o);
                (o = r.extensions[i.KHR_TEXTURE_TRANSFORM].extendTexture(o, e)),
                  r.associations.set(o, t);
              }
            }
            return void 0 !== n && (o.encoding = n), (e[t] = o), o;
          });
        }
        assignFinalMaterial(e) {
          const t = e.geometry;
          let s = e.material;
          const r = void 0 === t.attributes.tangent,
            o = void 0 !== t.attributes.color,
            i = void 0 === t.attributes.normal;
          if (e.isPoints) {
            const e = "PointsMaterial:" + s.uuid;
            let t = this.cache.get(e);
            t ||
              ((t = new n.UY4()),
              n.F5T.prototype.copy.call(t, s),
              t.color.copy(s.color),
              (t.map = s.map),
              (t.sizeAttenuation = !1),
              this.cache.add(e, t)),
              (s = t);
          } else if (e.isLine) {
            const e = "LineBasicMaterial:" + s.uuid;
            let t = this.cache.get(e);
            t ||
              ((t = new n.nls()),
              n.F5T.prototype.copy.call(t, s),
              t.color.copy(s.color),
              this.cache.add(e, t)),
              (s = t);
          }
          if (r || o || i) {
            let e = "ClonedMaterial:" + s.uuid + ":";
            s.isGLTFSpecularGlossinessMaterial && (e += "specular-glossiness:"),
              r && (e += "derivative-tangents:"),
              o && (e += "vertex-colors:"),
              i && (e += "flat-shading:");
            let t = this.cache.get(e);
            t ||
              ((t = s.clone()),
              o && (t.vertexColors = !0),
              i && (t.flatShading = !0),
              r &&
                (t.normalScale && (t.normalScale.y *= -1),
                t.clearcoatNormalScale && (t.clearcoatNormalScale.y *= -1)),
              this.cache.add(e, t),
              this.associations.set(t, this.associations.get(s))),
              (s = t);
          }
          s.aoMap &&
            void 0 === t.attributes.uv2 &&
            void 0 !== t.attributes.uv &&
            t.setAttribute("uv2", t.attributes.uv),
            (e.material = s);
        }
        getMaterialType() {
          return n.Wid;
        }
        loadMaterial(e) {
          const t = this,
            s = this.json,
            r = this.extensions,
            o = s.materials[e];
          let a;
          const c = {},
            l = o.extensions || {},
            u = [];
          if (l[i.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
            const e = r[i.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
            (a = e.getMaterialType()), u.push(e.extendParams(c, o, t));
          } else if (l[i.KHR_MATERIALS_UNLIT]) {
            const e = r[i.KHR_MATERIALS_UNLIT];
            (a = e.getMaterialType()), u.push(e.extendParams(c, o, t));
          } else {
            const s = o.pbrMetallicRoughness || {};
            if (
              ((c.color = new n.Ilk(1, 1, 1)),
              (c.opacity = 1),
              Array.isArray(s.baseColorFactor))
            ) {
              const e = s.baseColorFactor;
              c.color.fromArray(e), (c.opacity = e[3]);
            }
            void 0 !== s.baseColorTexture &&
              u.push(t.assignTexture(c, "map", s.baseColorTexture, n.knz)),
              (c.metalness =
                void 0 !== s.metallicFactor ? s.metallicFactor : 1),
              (c.roughness =
                void 0 !== s.roughnessFactor ? s.roughnessFactor : 1),
              void 0 !== s.metallicRoughnessTexture &&
                (u.push(
                  t.assignTexture(c, "metalnessMap", s.metallicRoughnessTexture)
                ),
                u.push(
                  t.assignTexture(c, "roughnessMap", s.metallicRoughnessTexture)
                )),
              (a = this._invokeOne(function (t) {
                return t.getMaterialType && t.getMaterialType(e);
              })),
              u.push(
                Promise.all(
                  this._invokeAll(function (t) {
                    return (
                      t.extendMaterialParams && t.extendMaterialParams(e, c)
                    );
                  })
                )
              );
          }
          !0 === o.doubleSided && (c.side = n.ehD);
          const h = o.alphaMode || X;
          if (
            (h === W
              ? ((c.transparent = !0), (c.depthWrite = !1))
              : ((c.transparent = !1),
                h === q &&
                  (c.alphaTest =
                    void 0 !== o.alphaCutoff ? o.alphaCutoff : 0.5)),
            void 0 !== o.normalTexture &&
              a !== n.vBJ &&
              (u.push(t.assignTexture(c, "normalMap", o.normalTexture)),
              (c.normalScale = new n.FM8(1, 1)),
              void 0 !== o.normalTexture.scale))
          ) {
            const e = o.normalTexture.scale;
            c.normalScale.set(e, e);
          }
          return (
            void 0 !== o.occlusionTexture &&
              a !== n.vBJ &&
              (u.push(t.assignTexture(c, "aoMap", o.occlusionTexture)),
              void 0 !== o.occlusionTexture.strength &&
                (c.aoMapIntensity = o.occlusionTexture.strength)),
            void 0 !== o.emissiveFactor &&
              a !== n.vBJ &&
              (c.emissive = new n.Ilk().fromArray(o.emissiveFactor)),
            void 0 !== o.emissiveTexture &&
              a !== n.vBJ &&
              u.push(
                t.assignTexture(c, "emissiveMap", o.emissiveTexture, n.knz)
              ),
            Promise.all(u).then(function () {
              let s;
              return (
                (s =
                  a === M
                    ? r[i.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(
                        c
                      )
                    : new a(c)),
                o.name && (s.name = o.name),
                Z(s, o),
                t.associations.set(s, { materials: e }),
                o.extensions && J(r, s, o),
                s
              );
            })
          );
        }
        createUniqueName(e) {
          const t = n.iUV.sanitizeNodeName(e || "");
          let s = t;
          for (let n = 1; this.nodeNamesUsed[s]; ++n) s = t + "_" + n;
          return (this.nodeNamesUsed[s] = !0), s;
        }
        loadGeometries(e) {
          const t = this,
            s = this.extensions,
            r = this.primitiveCache;
          function o(e) {
            return s[i.KHR_DRACO_MESH_COMPRESSION]
              .decodePrimitive(e, t)
              .then(function (s) {
                return ne(s, e, t);
              });
          }
          const a = [];
          for (let c = 0, l = e.length; c < l; c++) {
            const s = e[c],
              l = Q(s),
              u = r[l];
            if (u) a.push(u.promise);
            else {
              let e;
              (e =
                s.extensions && s.extensions[i.KHR_DRACO_MESH_COMPRESSION]
                  ? o(s)
                  : ne(new n.u9r(), s, t)),
                (r[l] = { primitive: s, promise: e }),
                a.push(e);
            }
          }
          return Promise.all(a);
        }
        loadMesh(e) {
          const t = this,
            s = this.json,
            r = this.extensions,
            o = s.meshes[e],
            i = o.primitives,
            a = [];
          for (let l = 0, u = i.length; l < u; l++) {
            const e =
              void 0 === i[l].material
                ? (void 0 === (c = this.cache).DefaultMaterial &&
                    (c.DefaultMaterial = new n.Wid({
                      color: 16777215,
                      emissive: 0,
                      metalness: 1,
                      roughness: 1,
                      transparent: !1,
                      depthTest: !0,
                      side: n.Wl3,
                    })),
                  c.DefaultMaterial)
                : this.getDependency("material", i[l].material);
            a.push(e);
          }
          var c;
          return (
            a.push(t.loadGeometries(i)),
            Promise.all(a).then(function (s) {
              const a = s.slice(0, s.length - 1),
                c = s[s.length - 1],
                l = [];
              for (let h = 0, d = c.length; h < d; h++) {
                const s = c[h],
                  u = i[h];
                let d;
                const p = a[h];
                if (
                  u.mode === N ||
                  u.mode === U ||
                  u.mode === F ||
                  void 0 === u.mode
                )
                  (d =
                    !0 === o.isSkinnedMesh ? new n.TUv(s, p) : new n.Kj0(s, p)),
                    !0 !== d.isSkinnedMesh ||
                      d.geometry.attributes.skinWeight.normalized ||
                      d.normalizeSkinWeights(),
                    u.mode === U
                      ? (d.geometry = re(d.geometry, n.UlW))
                      : u.mode === F && (d.geometry = re(d.geometry, n.z$h));
                else if (u.mode === C) d = new n.ejS(s, p);
                else if (u.mode === H) d = new n.x12(s, p);
                else if (u.mode === O) d = new n.blk(s, p);
                else {
                  if (u.mode !== k)
                    throw new Error(
                      "THREE.GLTFLoader: Primitive mode unsupported: " + u.mode
                    );
                  d = new n.woe(s, p);
                }
                Object.keys(d.geometry.morphAttributes).length > 0 && Y(d, o),
                  (d.name = t.createUniqueName(o.name || "mesh_" + e)),
                  Z(d, o),
                  u.extensions && J(r, d, u),
                  t.assignFinalMaterial(d),
                  l.push(d);
              }
              for (let n = 0, r = l.length; n < r; n++)
                t.associations.set(l[n], { meshes: e, primitives: n });
              if (1 === l.length) return l[0];
              const u = new n.ZAu();
              t.associations.set(u, { meshes: e });
              for (let e = 0, t = l.length; e < t; e++) u.add(l[e]);
              return u;
            })
          );
        }
        loadCamera(e) {
          let t;
          const s = this.json.cameras[e],
            r = s[s.type];
          if (r)
            return (
              "perspective" === s.type
                ? (t = new n.cPb(
                    n.M8C.radToDeg(r.yfov),
                    r.aspectRatio || 1,
                    r.znear || 1,
                    r.zfar || 2e6
                  ))
                : "orthographic" === s.type &&
                  (t = new n.iKG(
                    -r.xmag,
                    r.xmag,
                    r.ymag,
                    -r.ymag,
                    r.znear,
                    r.zfar
                  )),
              s.name && (t.name = this.createUniqueName(s.name)),
              Z(t, s),
              Promise.resolve(t)
            );
          console.warn("THREE.GLTFLoader: Missing camera parameters.");
        }
        loadSkin(e) {
          const t = this.json.skins[e],
            s = { joints: t.joints };
          return void 0 === t.inverseBindMatrices
            ? Promise.resolve(s)
            : this.getDependency("accessor", t.inverseBindMatrices).then(
                function (e) {
                  return (s.inverseBindMatrices = e), s;
                }
              );
        }
        loadAnimation(e) {
          const t = this.json.animations[e],
            s = [],
            r = [],
            o = [],
            i = [],
            a = [];
          for (let n = 0, c = t.channels.length; n < c; n++) {
            const e = t.channels[n],
              c = t.samplers[e.sampler],
              l = e.target,
              u = l.node,
              h = void 0 !== t.parameters ? t.parameters[c.input] : c.input,
              d = void 0 !== t.parameters ? t.parameters[c.output] : c.output;
            s.push(this.getDependency("node", u)),
              r.push(this.getDependency("accessor", h)),
              o.push(this.getDependency("accessor", d)),
              i.push(c),
              a.push(l);
          }
          return Promise.all([
            Promise.all(s),
            Promise.all(r),
            Promise.all(o),
            Promise.all(i),
            Promise.all(a),
          ]).then(function (s) {
            const r = s[0],
              o = s[1],
              i = s[2],
              a = s[3],
              c = s[4],
              l = [];
            for (let e = 0, t = r.length; e < t; e++) {
              const t = r[e],
                s = o[e],
                u = i[e],
                h = a[e],
                d = c[e];
              if (void 0 === t) continue;
              let p;
              switch ((t.updateMatrix(), V[d.path])) {
                case V.weights:
                  p = n.dUE;
                  break;
                case V.rotation:
                  p = n.iLg;
                  break;
                default:
                  p = n.yC1;
              }
              const m = t.name ? t.name : t.uuid,
                f = void 0 !== h.interpolation ? z[h.interpolation] : n.NMF,
                g = [];
              V[d.path] === V.weights
                ? t.traverse(function (e) {
                    e.morphTargetInfluences && g.push(e.name ? e.name : e.uuid);
                  })
                : g.push(m);
              let T = u.array;
              if (u.normalized) {
                const e = ee(T.constructor),
                  t = new Float32Array(T.length);
                for (let s = 0, n = T.length; s < n; s++) t[s] = T[s] * e;
                T = t;
              }
              for (let e = 0, r = g.length; e < r; e++) {
                const t = new p(g[e] + "." + V[d.path], s.array, T, f);
                "CUBICSPLINE" === h.interpolation &&
                  ((t.createInterpolant = function (e) {
                    return new (this instanceof n.iLg ? P : L)(
                      this.times,
                      this.values,
                      this.getValueSize() / 3,
                      e
                    );
                  }),
                  (t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline =
                    !0)),
                  l.push(t);
              }
            }
            const u = t.name ? t.name : "animation_" + e;
            return new n.m7l(u, void 0, l);
          });
        }
        createNodeMesh(e) {
          const t = this.json,
            s = this,
            n = t.nodes[e];
          return void 0 === n.mesh
            ? null
            : s.getDependency("mesh", n.mesh).then(function (e) {
                const t = s._getNodeRef(s.meshCache, n.mesh, e);
                return (
                  void 0 !== n.weights &&
                    t.traverse(function (e) {
                      if (e.isMesh)
                        for (let t = 0, s = n.weights.length; t < s; t++)
                          e.morphTargetInfluences[t] = n.weights[t];
                    }),
                  t
                );
              });
        }
        loadNode(e) {
          const t = this.json,
            s = this.extensions,
            r = this,
            o = t.nodes[e],
            i = o.name ? r.createUniqueName(o.name) : "";
          return (function () {
            const t = [],
              s = r._invokeOne(function (t) {
                return t.createNodeMesh && t.createNodeMesh(e);
              });
            return (
              s && t.push(s),
              void 0 !== o.camera &&
                t.push(
                  r.getDependency("camera", o.camera).then(function (e) {
                    return r._getNodeRef(r.cameraCache, o.camera, e);
                  })
                ),
              r
                ._invokeAll(function (t) {
                  return t.createNodeAttachment && t.createNodeAttachment(e);
                })
                .forEach(function (e) {
                  t.push(e);
                }),
              Promise.all(t)
            );
          })().then(function (t) {
            let a;
            if (
              ((a =
                !0 === o.isBone
                  ? new n.N$j()
                  : t.length > 1
                  ? new n.ZAu()
                  : 1 === t.length
                  ? t[0]
                  : new n.Tme()),
              a !== t[0])
            )
              for (let e = 0, s = t.length; e < s; e++) a.add(t[e]);
            if (
              (o.name && ((a.userData.name = o.name), (a.name = i)),
              Z(a, o),
              o.extensions && J(s, a, o),
              void 0 !== o.matrix)
            ) {
              const e = new n.yGw();
              e.fromArray(o.matrix), a.applyMatrix4(e);
            } else void 0 !== o.translation && a.position.fromArray(o.translation), void 0 !== o.rotation && a.quaternion.fromArray(o.rotation), void 0 !== o.scale && a.scale.fromArray(o.scale);
            return (
              r.associations.has(a) || r.associations.set(a, {}),
              (r.associations.get(a).nodes = e),
              a
            );
          });
        }
        loadScene(e) {
          const t = this.json,
            s = this.extensions,
            r = this.json.scenes[e],
            o = this,
            i = new n.ZAu();
          r.name && (i.name = o.createUniqueName(r.name)),
            Z(i, r),
            r.extensions && J(s, i, r);
          const a = r.nodes || [],
            c = [];
          for (let n = 0, l = a.length; n < l; n++) c.push(se(a[n], i, t, o));
          return Promise.all(c).then(function () {
            return (
              (o.associations = ((e) => {
                const t = new Map();
                for (const [s, r] of o.associations)
                  (s instanceof n.F5T || s instanceof n.xEZ) && t.set(s, r);
                return (
                  e.traverse((e) => {
                    const s = o.associations.get(e);
                    null != s && t.set(e, s);
                  }),
                  t
                );
              })(i)),
              i
            );
          });
        }
      }
      function se(e, t, s, r) {
        const o = s.nodes[e];
        return r
          .getDependency("node", e)
          .then(function (e) {
            if (void 0 === o.skin) return e;
            let t;
            return r
              .getDependency("skin", o.skin)
              .then(function (e) {
                t = e;
                const s = [];
                for (let n = 0, o = t.joints.length; n < o; n++)
                  s.push(r.getDependency("node", t.joints[n]));
                return Promise.all(s);
              })
              .then(function (s) {
                return (
                  e.traverse(function (e) {
                    if (!e.isMesh) return;
                    const r = [],
                      o = [];
                    for (let i = 0, a = s.length; i < a; i++) {
                      const e = s[i];
                      if (e) {
                        r.push(e);
                        const s = new n.yGw();
                        void 0 !== t.inverseBindMatrices &&
                          s.fromArray(t.inverseBindMatrices.array, 16 * i),
                          o.push(s);
                      } else
                        console.warn(
                          'THREE.GLTFLoader: Joint "%s" could not be found.',
                          t.joints[i]
                        );
                    }
                    e.bind(new n.OdW(r, o), e.matrixWorld);
                  }),
                  e
                );
              });
          })
          .then(function (e) {
            t.add(e);
            const n = [];
            if (o.children) {
              const t = o.children;
              for (let o = 0, i = t.length; o < i; o++) {
                const i = t[o];
                n.push(se(i, e, s, r));
              }
            }
            return Promise.all(n);
          });
      }
      function ne(e, t, s) {
        const r = t.attributes,
          o = [];
        function i(t, n) {
          return s.getDependency("accessor", t).then(function (t) {
            e.setAttribute(n, t);
          });
        }
        for (const n in r) {
          const t = B[n] || n.toLowerCase();
          t in e.attributes || o.push(i(r[n], t));
        }
        if (void 0 !== t.indices && !e.index) {
          const n = s.getDependency("accessor", t.indices).then(function (t) {
            e.setIndex(t);
          });
          o.push(n);
        }
        return (
          Z(e, t),
          (function (e, t, s) {
            const r = t.attributes,
              o = new n.ZzF();
            if (void 0 === r.POSITION) return;
            {
              const e = s.json.accessors[r.POSITION],
                t = e.min,
                i = e.max;
              if (void 0 === t || void 0 === i)
                return void console.warn(
                  "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
                );
              if (
                (o.set(
                  new n.Pa4(t[0], t[1], t[2]),
                  new n.Pa4(i[0], i[1], i[2])
                ),
                e.normalized)
              ) {
                const t = ee(D[e.componentType]);
                o.min.multiplyScalar(t), o.max.multiplyScalar(t);
              }
            }
            const i = t.targets;
            if (void 0 !== i) {
              const e = new n.Pa4(),
                t = new n.Pa4();
              for (let n = 0, r = i.length; n < r; n++) {
                const r = i[n];
                if (void 0 !== r.POSITION) {
                  const n = s.json.accessors[r.POSITION],
                    o = n.min,
                    i = n.max;
                  if (void 0 !== o && void 0 !== i) {
                    if (
                      (t.setX(Math.max(Math.abs(o[0]), Math.abs(i[0]))),
                      t.setY(Math.max(Math.abs(o[1]), Math.abs(i[1]))),
                      t.setZ(Math.max(Math.abs(o[2]), Math.abs(i[2]))),
                      n.normalized)
                    ) {
                      const e = ee(D[n.componentType]);
                      t.multiplyScalar(e);
                    }
                    e.max(t);
                  } else
                    console.warn(
                      "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
                    );
                }
              }
              o.expandByVector(e);
            }
            e.boundingBox = o;
            const a = new n.aLr();
            o.getCenter(a.center),
              (a.radius = o.min.distanceTo(o.max) / 2),
              (e.boundingSphere = a);
          })(e, t, s),
          Promise.all(o).then(function () {
            return void 0 !== t.targets
              ? (function (e, t, s) {
                  let n = !1,
                    r = !1,
                    o = !1;
                  for (let l = 0, u = t.length; l < u; l++) {
                    const e = t[l];
                    if (
                      (void 0 !== e.POSITION && (n = !0),
                      void 0 !== e.NORMAL && (r = !0),
                      void 0 !== e.COLOR_0 && (o = !0),
                      n && r && o)
                    )
                      break;
                  }
                  if (!n && !r && !o) return Promise.resolve(e);
                  const i = [],
                    a = [],
                    c = [];
                  for (let l = 0, u = t.length; l < u; l++) {
                    const u = t[l];
                    if (n) {
                      const t =
                        void 0 !== u.POSITION
                          ? s.getDependency("accessor", u.POSITION)
                          : e.attributes.position;
                      i.push(t);
                    }
                    if (r) {
                      const t =
                        void 0 !== u.NORMAL
                          ? s.getDependency("accessor", u.NORMAL)
                          : e.attributes.normal;
                      a.push(t);
                    }
                    if (o) {
                      const t =
                        void 0 !== u.COLOR_0
                          ? s.getDependency("accessor", u.COLOR_0)
                          : e.attributes.color;
                      c.push(t);
                    }
                  }
                  return Promise.all([
                    Promise.all(i),
                    Promise.all(a),
                    Promise.all(c),
                  ]).then(function (t) {
                    const s = t[0],
                      i = t[1],
                      a = t[2];
                    return (
                      n && (e.morphAttributes.position = s),
                      r && (e.morphAttributes.normal = i),
                      o && (e.morphAttributes.color = a),
                      (e.morphTargetsRelative = !0),
                      e
                    );
                  });
                })(e, t.targets, s)
              : e;
          })
        );
      }
      function re(e, t) {
        let s = e.getIndex();
        if (null === s) {
          const t = [],
            n = e.getAttribute("position");
          if (void 0 === n)
            return (
              console.error(
                "THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
              ),
              e
            );
          for (let e = 0; e < n.count; e++) t.push(e);
          e.setIndex(t), (s = e.getIndex());
        }
        const r = s.count - 2,
          o = [];
        if (t === n.z$h)
          for (let n = 1; n <= r; n++)
            o.push(s.getX(0)), o.push(s.getX(n)), o.push(s.getX(n + 1));
        else
          for (let n = 0; n < r; n++)
            n % 2 === 0
              ? (o.push(s.getX(n)),
                o.push(s.getX(n + 1)),
                o.push(s.getX(n + 2)))
              : (o.push(s.getX(n + 2)),
                o.push(s.getX(n + 1)),
                o.push(s.getX(n)));
        o.length / 3 !== r &&
          console.error(
            "THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles."
          );
        const i = e.clone();
        return i.setIndex(o), i;
      }
    },
  },
]);
