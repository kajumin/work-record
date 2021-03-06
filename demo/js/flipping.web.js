!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.Flipping = e())
    : (t.Flipping = e());
})(this, function () {
  return (function (t) {
    function e(r) {
      if (n[r]) return n[r].exports;
      var i = (n[r] = { i: r, l: !1, exports: {} });
      return t[r].call(i.exports, i, i.exports, e), (i.l = !0), i.exports;
    }
    var n = {};
    return (
      (e.m = t),
      (e.c = n),
      (e.i = function (t) {
        return t;
      }),
      (e.d = function (t, n, r) {
        e.o(t, n) ||
          Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: r,
          });
      }),
      (e.n = function (t) {
        var n =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return e.d(n, "a", n), n;
      }),
      (e.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (e.p = ""),
      e((e.s = 8))
    );
  })([
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.FOLLOW_ATTR = "data-flip-follow"),
        (e.KEY_ATTR = "data-flip-key"),
        (e.STATE_ATTR = "data-flip-state"),
        (e.NO_DELTA = { top: 0, left: 0, width: 1, height: 1 });
    },
    function (t, e, n) {
      "use strict";
      function r(t, e) {
        var n = {};
        return (
          Object.keys(t).forEach(function (r) {
            n[r] = e(t[r], r, t);
          }),
          n
        );
      }
      function i(t, e, n) {
        var r = {};
        return (
          Object.keys(t || {}).forEach(function (i) {
            r[i] = n(t[i], e[i], i);
          }),
          r
        );
      }
      function o(t, e) {
        return h.translate(t, e).join(",");
      }
      function a(t, e) {
        return h.scale(t, e).join(",");
      }
      function u() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return t
          .filter(function (t) {
            return !!t;
          })
          .reduce(h.multiply)
          .join(",");
      }
      function f(t, e) {
        return -1 !== ["height", "width", "top", "left"].indexOf(t) &&
          "number" == typeof e
          ? e + "px"
          : e;
      }
      function s(t, e) {
        return "function" == typeof e ? e(t) : (e || 0) * t;
      }
      function l(t) {
        var n = e.rect(t),
          r = n.width,
          i = n.height;
        return !(0 === r && 0 === i);
      }
      function c(t, e) {
        return t
          ? t.height
            ? e.height
              ? {
                  top: t.top - e.top,
                  left: t.left - e.left,
                  width: t.width / e.width,
                  height: t.height / e.height,
                }
              : e
            : t
          : p.NO_DELTA;
      }
      function d() {
        var t = {},
          e = [];
        return {
          on: function (n, r) {
            "*" === n ? e.push(r) : (t[n] || (t[n] = [])).push(r);
          },
          off: function (n, r) {
            "*" === n
              ? e.splice(e.indexOf(r) >>> 0, 1)
              : t[n] && t[n].splice(t[n].indexOf(r) >>> 0, 1);
          },
          emit: function (n, r) {
            (t[n] || []).slice().map(function (t) {
              t(r);
            }),
              e.slice().map(function (t) {
                t(n, r);
              });
          },
        };
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var h = n(3),
        p = n(0);
      (e.mapValues = r),
        (e.mapTwoValues = i),
        (e.matrixTranslate = o),
        (e.matrixScale = a),
        (e.matrixMultiply = u),
        (e.styleValue = f),
        (e.getStaggerDelay = s),
        (e.identity = function (t) {
          return t;
        }),
        (e.noop = function () {}),
        (e.rect = function (t) {
          var e = t.getBoundingClientRect();
          return {
            top: e.top,
            left: e.left,
            width: e.width,
            height: e.height,
            get transform() {
              return getComputedStyle(t).transform || void 0;
            },
          };
        }),
        (e.isVisible = l),
        (e.getDelta = c),
        (e.deltaChanged = function (t) {
          return !!t.top || !!t.left || 1 !== t.width || 1 !== t.height;
        }),
        (e.boundsChanged = function (t, e) {
          return !!(
            t.top - e.top ||
            t.left - e.left ||
            t.width - e.width ||
            t.height - e.height
          );
        }),
        (e.mitt = d);
    },
    function (t, e, n) {
      "use strict";
      var r =
        (this && this.__assign) ||
        Object.assign ||
        function (t) {
          for (var e, n = 1, r = arguments.length; n < r; n++) {
            e = arguments[n];
            for (var i in e)
              Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
          }
          return t;
        };
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = n(1),
        o = n(0),
        a = n(4),
        u = n(5),
        f = function () {
          return !0;
        },
        s = function (t) {
          return t;
        },
        l = {
          flipKey: ["key", s],
          flipNoScale: [
            "noScale",
            function () {
              return !0;
            },
          ],
        },
        c = function (t) {
          if (!("dataset" in t)) return {};
          var e = t.dataset,
            n = {};
          return (
            Object.keys(e).forEach(function (t) {
              if (l[t]) {
                var r = l[t],
                  i = r[0],
                  o = r[1];
                n[i] = o(e[t]);
              } else 0 === t.indexOf("flip") && (n[t[4].toLowerCase() + t.slice(5)] = e[t]);
            }),
            n
          );
        },
        d = function (t, e) {
          return (
            void 0 === e && (e = o.KEY_ATTR),
            "string" == typeof t
              ? function (n) {
                  var r = n.querySelectorAll(t),
                    o = {},
                    a = [];
                  return (
                    r.forEach(function (t) {
                      if (i.isVisible(t)) {
                        var n = t.getAttribute(e);
                        n && ((o[n] = t), a.push(t));
                      }
                    }),
                    a
                  );
                }
              : t
          );
        },
        h = (function () {
          function t(t) {
            void 0 === t && (t = {}),
              (this.attribute = t.attribute || o.KEY_ATTR),
              (this.selector = d(
                t.selector || "[" + this.attribute + "]",
                this.attribute
              )),
              (this.active = t.active || f),
              (this.activeSelector = t.activeSelector || i.isVisible),
              (this.getBounds = t.getBounds || i.rect),
              (this.getDelta = t.getDelta || i.getDelta),
              (this.parentElement = t.parent || document.documentElement),
              (this.plugins = t.plugins || [a.default, u.default]),
              (this.emitter = i.mitt()),
              t.onRead && this.on("read", t.onRead),
              t.onFlip && this.on("flip", t.onFlip),
              t.onEnter && this.on("enter", t.onEnter),
              t.onLeave && this.on("leave", t.onLeave),
              (this.states = {});
          }
          return (
            (t.prototype.getRelativeBounds = function (t, e) {
              return r({}, e, { top: e.top - t.top, left: e.left - t.left });
            }),
            (t.prototype.selectActive = function (t) {
              var e = this,
                n = this.selector(t),
                r = {},
                i = [];
              return (
                n.forEach(function (t) {
                  if (e.activeSelector(t)) {
                    var n = t.getAttribute(e.attribute);
                    n && ((r[n] = t), i.push(t));
                  }
                }),
                i
              );
            }),
            (t.prototype.findParent = function (t, e) {
              void 0 === e && (e = this.parentElement);
              var n = t.getAttribute("data-flip-parent"),
                r = t.parentElement;
              if (n)
                for (; r && r.getAttribute(this.attribute) !== n; )
                  r = r.parentElement;
              else
                for (; r && !r.hasAttribute(this.attribute); )
                  r = r.parentElement;
              return r || e;
            }),
            (t.prototype.dispatch = function (t, e) {
              var n = this.plugins.reduce(function (e, n) {
                return n(e, t);
              }, e);
              this.emitter.emit(t, n);
            }),
            (t.prototype.on = function (t, e) {
              this.emitter.on(t, e);
            }),
            (t.prototype.onFlip = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              var n, r;
              2 === t.length ? ((n = t[0]), (r = t[1])) : (r = t[0]),
                this.emitter.on(
                  "flip",
                  n
                    ? function (t) {
                        var e = t[n];
                        e && r(e);
                      }
                    : r
                );
            }),
            (t.prototype.read = function (t) {
              void 0 === t && (t = {}), this.flip(r({}, t, { readOnly: !0 }));
            }),
            (t.prototype.flip = function (t) {
              var e = this;
              void 0 === t && (t = {});
              var n = t.parent || this.parentElement,
                r = this.selectActive(n),
                i = {};
              return (
                r.forEach(function (t, r) {
                  var o = t.getAttribute(e.attribute);
                  if (o) {
                    var a = c(t),
                      u = e.findParent(t, n),
                      f = u.getAttribute(e.attribute),
                      s = f ? i[f] : void 0,
                      l = e.getBounds(u),
                      d = e.states[o],
                      h = d && "LEAVE" !== d.type,
                      p = e.getRelativeBounds(l, e.getBounds(t)),
                      v = h && d && d.bounds ? e.getDelta(d.bounds, p) : void 0,
                      m = {
                        type: h ? "MOVE" : "ENTER",
                        key: o,
                        element: t,
                        bounds: p,
                        delta: v,
                        start: Date.now(),
                        animation: h ? d.animation : void 0,
                        index: r,
                        previous: d
                          ? {
                              type: d.type,
                              bounds: d.bounds,
                              animation: d.animation,
                              element: d.element,
                              data: d.data,
                            }
                          : void 0,
                        parent: s,
                        data: a,
                      };
                    e.states[o] = i[o] = m;
                  }
                }),
                t.readOnly
                  ? this.dispatch("read", i)
                  : (Object.keys(this.states).forEach(function (t, n) {
                      if (!i[t]) {
                        var r = e.states[t];
                        e.states[t] = i[t] = {
                          type: "LEAVE",
                          key: t,
                          element: void 0,
                          bounds: void 0,
                          start: Date.now(),
                          animation: void 0,
                          delta: void 0,
                          index: n,
                          parent: void 0,
                          previous: {
                            type: r.type,
                            bounds: r.bounds,
                            animation: r.animation,
                            element: r.element,
                          },
                        };
                      }
                    }),
                    this.dispatch("flip", i))
              );
            }),
            (t.prototype.setAnimation = function (t, e) {
              this.states[t].animation = e;
            }),
            (t.prototype.wrap = function (t, e) {
              var n = this;
              return (
                void 0 === e && (e = {}),
                function () {
                  for (var r = [], i = 0; i < arguments.length; i++)
                    r[i] = arguments[i];
                  n.read(e);
                  var o = t.apply(null, r);
                  return n.flip(e), o;
                }
              );
            }),
            (t.prototype.progress = function (e, n) {
              var r = this.states[e].delta;
              if (r) return t.progress(r, n);
            }),
            (t.progress = function (t, e) {
              if (!t) return o.NO_DELTA;
              var n = 1 - e;
              return {
                top: t.top * n,
                left: t.left * n,
                width: t.width * n,
                height: t.height * n,
              };
            }),
            (t.rect = i.rect),
            (t.willScale = function (t) {
              return !(
                !t ||
                !t.element ||
                t.element.hasAttribute("data-noflip") ||
                !t.delta ||
                (1 === t.delta.width && 1 === t.delta.height)
              );
            }),
            (t.willMove = function (t) {
              return (
                !(!t || !t.delta) &&
                t &&
                (0 !== t.delta.top || 0 !== t.delta.left)
              );
            }),
            t
          );
        })();
      e.default = h;
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        if (t.constructor !== Array) throw new TypeError("Expected array.");
        if (16 === t.length) return t;
        if (6 === t.length) {
          var e = i();
          return (
            (e[0] = t[0]),
            (e[1] = t[1]),
            (e[4] = t[2]),
            (e[5] = t[3]),
            (e[12] = t[4]),
            (e[13] = t[5]),
            e
          );
        }
        throw new RangeError("Expected array with either 6 or 16 values.");
      }
      function i() {
        for (var t = [], e = 0; e < 16; e++) e % 5 == 0 ? t.push(1) : t.push(0);
        return t;
      }
      function o(t) {
        var e = r(t),
          n = e[0] * e[5] - e[4] * e[1],
          i = e[0] * e[6] - e[4] * e[2],
          o = e[0] * e[7] - e[4] * e[3],
          a = e[1] * e[6] - e[5] * e[2],
          u = e[1] * e[7] - e[5] * e[3],
          f = e[2] * e[7] - e[6] * e[3],
          s = e[10] * e[15] - e[14] * e[11],
          l = e[9] * e[15] - e[13] * e[11],
          c = e[9] * e[14] - e[13] * e[10],
          d = e[8] * e[15] - e[12] * e[11],
          h = e[8] * e[14] - e[12] * e[10],
          p = e[8] * e[13] - e[12] * e[9],
          v = 1 / (n * s - i * l + o * c + a * d - u * h + f * p);
        if (isNaN(v) || v === 1 / 0)
          throw new Error("Inverse determinant attempted to divide by zero.");
        return [
          (e[5] * s - e[6] * l + e[7] * c) * v,
          (-e[1] * s + e[2] * l - e[3] * c) * v,
          (e[13] * f - e[14] * u + e[15] * a) * v,
          (-e[9] * f + e[10] * u - e[11] * a) * v,
          (-e[4] * s + e[6] * d - e[7] * h) * v,
          (e[0] * s - e[2] * d + e[3] * h) * v,
          (-e[12] * f + e[14] * o - e[15] * i) * v,
          (e[8] * f - e[10] * o + e[11] * i) * v,
          (e[4] * l - e[5] * d + e[7] * p) * v,
          (-e[0] * l + e[1] * d - e[3] * p) * v,
          (e[12] * u - e[13] * o + e[15] * n) * v,
          (-e[8] * u + e[9] * o - e[11] * n) * v,
          (-e[4] * c + e[5] * h - e[6] * p) * v,
          (e[0] * c - e[1] * h + e[2] * p) * v,
          (-e[12] * a + e[13] * i - e[14] * n) * v,
          (e[8] * a - e[9] * i + e[10] * n) * v,
        ];
      }
      function a(t, e) {
        for (var n = r(t), i = r(e), o = [], a = 0; a < 4; a++)
          for (
            var u = [n[a], n[a + 4], n[a + 8], n[a + 12]], f = 0;
            f < 4;
            f++
          ) {
            var s = 4 * f,
              l = [i[s], i[s + 1], i[s + 2], i[s + 3]],
              c = u[0] * l[0] + u[1] * l[1] + u[2] * l[2] + u[3] * l[3];
            o[a + s] = c;
          }
        return o;
      }
      function u(t) {
        if ("string" == typeof t) {
          var e = t.match(/matrix(3d)?\(([^)]+)\)/);
          if (e) {
            return r(
              e[2].split(", ").map(function (t) {
                return parseFloat(t);
              })
            );
          }
        }
        return i();
      }
      function f(t) {
        var e = (Math.PI / 180) * t,
          n = i();
        return (
          (n[5] = n[10] = Math.cos(e)),
          (n[6] = n[9] = Math.sin(e)),
          (n[9] *= -1),
          n
        );
      }
      function s(t) {
        var e = (Math.PI / 180) * t,
          n = i();
        return (
          (n[0] = n[10] = Math.cos(e)),
          (n[2] = n[8] = Math.sin(e)),
          (n[2] *= -1),
          n
        );
      }
      function l(t) {
        var e = (Math.PI / 180) * t,
          n = i();
        return (
          (n[0] = n[5] = Math.cos(e)),
          (n[1] = n[4] = Math.sin(e)),
          (n[4] *= -1),
          n
        );
      }
      function c(t, e) {
        var n = i();
        return (n[0] = t), (n[5] = e || t), n;
      }
      function d(t) {
        var e = i();
        return (e[0] = t), e;
      }
      function h(t) {
        var e = i();
        return (e[5] = t), e;
      }
      function p(t) {
        var e = i();
        return (e[10] = t), e;
      }
      function v(t, e) {
        var n = (Math.PI / 180) * t,
          r = i();
        if (((r[4] = Math.tan(n)), e)) {
          var o = (Math.PI / 180) * e;
          r[1] = Math.tan(o);
        }
        return r;
      }
      function m(t) {
        var e = (Math.PI / 180) * t,
          n = i();
        return (n[4] = Math.tan(e)), n;
      }
      function g(t) {
        var e = (Math.PI / 180) * t,
          n = i();
        return (n[1] = Math.tan(e)), n;
      }
      function y(t, e) {
        var n = i();
        return (n[12] = t), e && (n[13] = e), n;
      }
      function b(t) {
        var e = i();
        return (e[12] = t), e;
      }
      function O(t) {
        var e = i();
        return (e[13] = t), e;
      }
      function w(t) {
        var e = i();
        return (e[14] = t), e;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        n.d(e, "format", function () {
          return r;
        }),
        n.d(e, "identity", function () {
          return i;
        }),
        n.d(e, "inverse", function () {
          return o;
        }),
        n.d(e, "multiply", function () {
          return a;
        }),
        n.d(e, "parse", function () {
          return u;
        }),
        n.d(e, "rotateX", function () {
          return f;
        }),
        n.d(e, "rotateY", function () {
          return s;
        }),
        n.d(e, "rotateZ", function () {
          return l;
        }),
        n.d(e, "scale", function () {
          return c;
        }),
        n.d(e, "scaleX", function () {
          return d;
        }),
        n.d(e, "scaleY", function () {
          return h;
        }),
        n.d(e, "scaleZ", function () {
          return p;
        }),
        n.d(e, "skew", function () {
          return v;
        }),
        n.d(e, "skewX", function () {
          return m;
        }),
        n.d(e, "skewY", function () {
          return g;
        }),
        n.d(e, "translate", function () {
          return y;
        }),
        n.d(e, "translateX", function () {
          return b;
        }),
        n.d(e, "translateY", function () {
          return O;
        }),
        n.d(e, "translateZ", function () {
          return w;
        });
    },
    function (t, e, n) {
      "use strict";
      function r(t, e) {
        if ("flip" !== e) return t;
        var n = {};
        return (
          Object.keys(t).forEach(function (e) {
            var r = t[e],
              o = r.element || (r.previous && r.previous.element);
            if (o && o.hasAttribute("data-flip-follow")) {
              var a = o.getAttribute("data-flip-follow");
              if (a && t[a])
                n[e] = i({}, r, {
                  delta: i({ left: 0, top: 0 }, t[a].delta, {
                    width: 1,
                    height: 1,
                  }),
                });
              else if ("ENTER" === r.type || "LEAVE" === r.type) {
                for (
                  var u = o.nextElementSibling;
                  u &&
                  (!u.hasAttribute("data-flip-key") ||
                    "MOVE" !== t[u.getAttribute("data-flip-key")].type);

                )
                  u = u.nextElementSibling;
                if (u) {
                  var f = t[u.getAttribute("data-flip-key")].delta;
                  n[e] = i({}, r, {
                    delta: { left: f.left, top: f.top, width: 1, height: 1 },
                  });
                }
              }
            }
          }),
          Object.assign(t, n)
        );
      }
      var i =
        (this && this.__assign) ||
        Object.assign ||
        function (t) {
          for (var e, n = 1, r = arguments.length; n < r; n++) {
            e = arguments[n];
            for (var i in e)
              Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
          }
          return t;
        };
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = r);
    },
    function (t, e, n) {
      "use strict";
      function r(t, e) {
        return (
          "read" === e &&
            Object.keys(t).forEach(function (e) {
              var n = t[e],
                r = n.element;
              r &&
                (n.data.radius = getComputedStyle
                  ? getComputedStyle(r).borderRadius || "0"
                  : "0");
            }),
          t
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = r);
    },
    function (t, e, n) {
      "use strict";
      var r =
        (this && this.__assign) ||
        Object.assign ||
        function (t) {
          for (var e, n = 1, r = arguments.length; n < r; n++) {
            e = arguments[n];
            for (var i in e)
              Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
          }
          return t;
        };
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = n(1),
        o = n(3);
      (e.scale = function (t) {
        var e = t.bounds,
          n = t.delta;
        if (t.element && n && e) {
          var a = !t.data.noScale && (1 !== n.width || 1 !== n.height),
            u = o.translate(n.left, n.top),
            f = a ? o.scale(n.width, n.height) : void 0,
            s = a ? "top left" : void 0,
            l = i.matrixMultiply(u, f);
          return {
            element: {
              from: r(
                { x: n.left, y: n.top },
                s ? { transformOrigin: s } : void 0,
                { transform: "matrix3d(" + l + ")" }
              ),
              to: r(
                { x: e.left, y: e.top },
                s ? { transformOrigin: s } : void 0,
                { transform: e.transform || "none" }
              ),
            },
          };
        }
      }),
        (e.slide = function (t) {
          var e = t.delta,
            n = t.previous,
            r = t.bounds;
          if (n && n.bounds && r) {
            var o = Math.max(n.bounds.height, r.height),
              a = Math.max(n.bounds.width, r.width),
              u = {
                from: { height: o, width: a, transformOrigin: "top left" },
                to: { height: o, width: a, transformOrigin: "top left" },
              },
              f = {
                from: { height: o, width: a, transformOrigin: "top left" },
                to: { height: o, width: a, transformOrigin: "top left" },
              },
              s = r.width - n.bounds.width,
              l = r.height - n.bounds.height;
            if (e) {
              s > 0
                ? ((f.from.x = -s + e.left),
                  (f.to.x = 0),
                  (u.from.x = s),
                  (u.to.x = 0))
                : ((f.from.x = 0),
                  (f.to.x = s - e.left),
                  (u.from.x = 0),
                  (u.to.x = -s)),
                l > 0
                  ? ((f.from.y = -l + e.top),
                    (f.to.y = 0),
                    (u.from.y = l),
                    (u.to.y = 0))
                  : ((f.from.y = 0),
                    (f.to.y = l - e.top),
                    (u.from.y = 0),
                    (u.to.y = -l));
              var c = i.matrixTranslate(u.from.x, u.from.y),
                d = i.matrixTranslate(u.to.x, u.to.y),
                h = i.matrixTranslate(f.from.x, f.from.y),
                p = i.matrixTranslate(f.to.x, f.to.y);
              return (
                (u.from.transform = "matrix3d(" + c + ")"),
                (u.to.transform = "matrix3d(" + d + ")"),
                (f.from.transform = "matrix3d(" + h + ")"),
                (f.to.transform = "matrix3d(" + p + ")"),
                { element: u, container: f }
              );
            }
          }
        });
    },
    ,
    function (t, e, n) {
      "use strict";
      function r(t, e, n) {
        var r = s.mapValues(e, function (e, r) {
          requestAnimationFrame(function () {
            return e.setAttribute(l, "active");
          });
          var i = e.animate(
            [
              s.mapValues(t[r].from, function (t, e) {
                return s.styleValue(e, t);
              }),
              s.mapValues(t[r].to, function (t, e) {
                return s.styleValue(e, t);
              }),
            ],
            n
          );
          return (
            (i.onfinish = function () {
              e.setAttribute(l, "complete");
            }),
            i
          );
        });
        return {
          finish: function () {
            s.mapValues(r, function (t) {
              t.finish();
            });
          },
        };
      }
      function i(t) {
        Object.keys(t).forEach(function (e) {
          var n = t[e].animation;
          n && n.finish && n.finish();
        });
      }
      var o =
          (this && this.__extends) ||
          (function () {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              };
            return function (e, n) {
              function r() {
                this.constructor = e;
              }
              t(e, n),
                (e.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
        a =
          (this && this.__assign) ||
          Object.assign ||
          function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++) {
              e = arguments[n];
              for (var i in e)
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            }
            return t;
          },
        u = n(2),
        f = n(6),
        s = n(1),
        l = "data-flip-state",
        c = function (t, e) {
          var n = t.element,
            i = f.slide(t);
          if (i && n && n.parentElement)
            return r(i, { element: n, container: n.parentElement }, e);
        },
        d = function (t, e) {
          void 0 === e && (e = {});
          var n = t.element,
            i = f.scale(t);
          if (i && n) return r(i, { element: n }, e);
        },
        h = function (t, e) {
          var n = t.element,
            r = t.delta,
            i = a({}, e, {
              delay:
                +(e.delay || 0) + s.getStaggerDelay(t.index, e.stagger || 0),
              fill: e.stagger ? "both" : "none",
            });
          if (n && r && s.deltaChanged(r)) return d(t, i);
        },
        p = (function (t) {
          function e(n) {
            void 0 === n && (n = {});
            var r = this,
              o = a({}, e.defaults, n);
            return (r =
              t.call(
                this,
                a(
                  {
                    onRead: i,
                    onFlip: function (t) {
                      Object.keys(t).forEach(function (n) {
                        var i = e.animate.auto(t[n], o);
                        r.setAnimation(n, i);
                      });
                    },
                  },
                  o
                )
              ) || this);
          }
          return (
            o(e, t),
            (e.defaults = {
              duration: 300,
              delay: 0,
              easing: "cubic-bezier(.5, 0, .5, 1)",
              fill: "none",
              stagger: 0,
            }),
            (e.animate = { auto: h, transform: d, slidingLayers: c }),
            e
          );
        })(u.default);
      t.exports = p;
    },
  ]);
});
