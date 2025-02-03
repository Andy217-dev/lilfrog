import { a as vr } from "./chunk-YTYBRDC3.mjs";
import {
  a as sa,
  b as fa,
  c as se,
  d as Xt,
  e as Pe,
  f as mr,
  g as ce,
  h as ma,
  i as cr,
  j as Gt,
  k as yt,
  l as Xe,
  m as lr,
  n as Ge,
  o as pr,
  p as dr,
  q as qe,
  r as hr,
  s as gr,
  t as ur,
  u as wr,
  v as Ue,
  w as xr,
  x as yr,
  y as ca,
} from "./chunk-TT4BY3TF.mjs";
import {
  A as Mr,
  B as Wr,
  Ba as Ne,
  C as Jr,
  Ca as i,
  D as Pr,
  Da as ve,
  E as Qr,
  Ea as P,
  G as zt,
  J as X,
  L as xe,
  Q as fr,
  S as q,
  V as Ye,
  W as E,
  X as He,
  Y as Se,
  Z as Y,
  _ as S,
  aa as ye,
  b as It,
  ba as $r,
  c as k,
  ca as ea,
  d as or,
  f as ir,
  g as ge,
  ga as ta,
  ha as ra,
  i as Or,
  j as Re,
  ja as l,
  k as et,
  l as ue,
  m as Er,
  ma as xt,
  n as we,
  o as F,
  p as jr,
  qa as aa,
  r as wt,
  ra as na,
  s as e,
  t as _,
  u as sr,
  ua as oa,
  v as ae,
  va as Te,
  w as f,
  wa as ia,
  x as Dt,
  y as ne,
  ya as B,
  z as Br,
  za as A,
} from "./chunk-TVPMZHXF.mjs";
import "./chunk-B4SOVENN.mjs";
import "./chunk-JR5VT52U.mjs";
import { c as j } from "./chunk-RIUMFBNJ.mjs";
var la = (t, r, n) =>
    (((1 - 3 * n + 3 * r) * t + (3 * n - 6 * r)) * t + 3 * r) * t,
  dn = 1e-7,
  hn = 12;
function gn(t, r, n, o, s) {
  let p,
    d,
    x = 0;
  do (d = r + (n - r) / 2), (p = la(d, o, s) - t), p > 0 ? (n = d) : (r = d);
  while (Math.abs(p) > dn && ++x < hn);
  return d;
}
function tt(t, r, n, o) {
  if (t === r && n === o) return ce;
  let s = (p) => gn(p, 0, 1, t, n);
  return (p) => (p === 0 || p === 1 ? p : la(s(p), r, o));
}
var pa =
  (t, r = "end") =>
  (n) => {
    n = r === "end" ? Math.min(n, 0.999) : Math.max(n, 0.001);
    let o = n * t,
      s = r === "end" ? Math.floor(o) : Math.ceil(o);
    return fa(0, 1, s / t);
  };
var un = {
    ease: tt(0.25, 0.1, 0.25, 1),
    "ease-in": tt(0.42, 0, 1, 1),
    "ease-in-out": tt(0.42, 0, 0.58, 1),
    "ease-out": tt(0, 0, 0.58, 1),
  },
  wn = /\((.*?)\)/;
function br(t) {
  if (Xe(t)) return t;
  if (Gt(t)) return tt(...t);
  let r = un[t];
  if (r) return r;
  if (t.startsWith("steps")) {
    let n = wn.exec(t);
    if (n) {
      let o = n[1].split(",");
      return pa(parseFloat(o[0]), o[1].trim());
    }
  }
  return ce;
}
var qt = class {
  constructor(
    r,
    n = [0, 1],
    {
      easing: o,
      duration: s = se.duration,
      delay: p = se.delay,
      endDelay: d = se.endDelay,
      repeat: x = se.repeat,
      offset: C,
      direction: a = "normal",
      autoplay: b = !0,
    } = {}
  ) {
    if (
      ((this.startTime = null),
      (this.rate = 1),
      (this.t = 0),
      (this.cancelTimestamp = null),
      (this.easing = ce),
      (this.duration = 0),
      (this.totalDuration = 0),
      (this.repeat = 0),
      (this.playState = "idle"),
      (this.finished = new Promise((v, m) => {
        (this.resolve = v), (this.reject = m);
      })),
      (o = o || se.easing),
      yt(o))
    ) {
      let v = o.createAnimation(n);
      (o = v.easing), (n = v.keyframes || n), (s = v.duration || s);
    }
    (this.repeat = x),
      (this.easing = Pe(o) ? ce : br(o)),
      this.updateDuration(s);
    let y = cr(n, C, Pe(o) ? o.map(br) : ce);
    (this.tick = (v) => {
      var m;
      let L = 0;
      (L =
        this.pauseTime !== void 0
          ? this.pauseTime
          : (v - this.startTime) * this.rate),
        (this.t = L),
        (L /= 1e3),
        (L = Math.max(L - p, 0)),
        this.playState === "finished" &&
          this.pauseTime === void 0 &&
          (L = this.totalDuration);
      let H = L / this.duration,
        U = Math.floor(H),
        V = H % 1;
      !V && H >= 1 && (V = 1), V === 1 && U--;
      let c = U % 2;
      (a === "reverse" ||
        (a === "alternate" && c) ||
        (a === "alternate-reverse" && !c)) &&
        (V = 1 - V);
      let K = L >= this.totalDuration ? 1 : Math.min(V, 1),
        N = y(this.easing(K));
      r(N),
        this.pauseTime === void 0 &&
        (this.playState === "finished" || L >= this.totalDuration + d)
          ? ((this.playState = "finished"),
            (m = this.resolve) === null || m === void 0 || m.call(this, N))
          : this.playState !== "idle" &&
            (this.frameRequestId = requestAnimationFrame(this.tick));
    }),
      b && this.play();
  }
  play() {
    let r = performance.now();
    (this.playState = "running"),
      this.pauseTime !== void 0
        ? (this.startTime = r - this.pauseTime)
        : this.startTime || (this.startTime = r),
      (this.cancelTimestamp = this.startTime),
      (this.pauseTime = void 0),
      (this.frameRequestId = requestAnimationFrame(this.tick));
  }
  pause() {
    (this.playState = "paused"), (this.pauseTime = this.t);
  }
  finish() {
    (this.playState = "finished"), this.tick(0);
  }
  stop() {
    var r;
    (this.playState = "idle"),
      this.frameRequestId !== void 0 &&
        cancelAnimationFrame(this.frameRequestId),
      (r = this.reject) === null || r === void 0 || r.call(this, !1);
  }
  cancel() {
    this.stop(), this.tick(this.cancelTimestamp);
  }
  reverse() {
    this.rate *= -1;
  }
  commitStyles() {}
  updateDuration(r) {
    (this.duration = r), (this.totalDuration = r * (this.repeat + 1));
  }
  get currentTime() {
    return this.t;
  }
  set currentTime(r) {
    this.pauseTime !== void 0 || this.rate === 0
      ? (this.pauseTime = r)
      : (this.startTime = performance.now() - r / this.rate);
  }
  get playbackRate() {
    return this.rate;
  }
  set playbackRate(r) {
    this.rate = r;
  }
};
var rt = {};
Object.defineProperty(rt, "__esModule", { value: !0 });
rt.warning = function () {};
rt.invariant = function () {};
var Ws = rt.__esModule,
  Js = rt.warning,
  kr = rt.invariant;
var At = class {
  setAnimation(r) {
    (this.animation = r),
      r?.finished.then(() => this.clearAnimation()).catch(() => {});
  }
  clearAnimation() {
    this.animation = this.generator = void 0;
  }
};
function da(t, r) {
  var n = {};
  for (var o in t)
    Object.prototype.hasOwnProperty.call(t, o) &&
      r.indexOf(o) < 0 &&
      (n[o] = t[o]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") {
    var s = 0;
    for (o = Object.getOwnPropertySymbols(t); s < o.length; s++)
      r.indexOf(o[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, o[s]) &&
        (n[o[s]] = t[o[s]]);
  }
  return n;
}
var xn = 5;
function Ht(t, r, n) {
  let o = Math.max(r - xn, 0);
  return pr(n - t(o), r - o);
}
var at = { stiffness: 100, damping: 10, mass: 1 },
  yn = (t = at.stiffness, r = at.damping, n = at.mass) =>
    r / (2 * Math.sqrt(t * n));
function vn(t, r, n) {
  return (t < r && n >= r) || (t > r && n <= r);
}
var Fr = ({
    stiffness: t = at.stiffness,
    damping: r = at.damping,
    mass: n = at.mass,
    from: o = 0,
    to: s = 1,
    velocity: p = 0,
    restSpeed: d,
    restDistance: x,
  } = {}) => {
    p = p ? Ge.s(p) : 0;
    let C = { done: !1, hasReachedTarget: !1, current: o, target: s },
      a = s - o,
      b = Math.sqrt(t / n) / 1e3,
      y = yn(t, r, n),
      v = Math.abs(a) < 5;
    d || (d = v ? 0.01 : 2), x || (x = v ? 0.005 : 0.5);
    let m;
    if (y < 1) {
      let L = b * Math.sqrt(1 - y * y);
      m = (H) =>
        s -
        Math.exp(-y * b * H) *
          (((y * b * a - p) / L) * Math.sin(L * H) + a * Math.cos(L * H));
    } else m = (L) => s - Math.exp(-b * L) * (a + (b * a - p) * L);
    return (L) => {
      C.current = m(L);
      let H = L === 0 ? p : Ht(m, L, C.current),
        U = Math.abs(H) <= d,
        V = Math.abs(s - C.current) <= x;
      return (C.done = U && V), (C.hasReachedTarget = vn(o, s, C.current)), C;
    };
  },
  ha = ({
    from: t = 0,
    velocity: r = 0,
    power: n = 0.8,
    decay: o = 0.325,
    bounceDamping: s,
    bounceStiffness: p,
    changeTarget: d,
    min: x,
    max: C,
    restDistance: a = 0.5,
    restSpeed: b,
  }) => {
    o = Ge.ms(o);
    let y = { hasReachedTarget: !1, done: !1, current: t, target: t },
      v = (Z) => (x !== void 0 && Z < x) || (C !== void 0 && Z > C),
      m = (Z) =>
        x === void 0
          ? C
          : C === void 0 || Math.abs(x - Z) < Math.abs(C - Z)
          ? x
          : C,
      L = n * r,
      H = t + L,
      U = d === void 0 ? H : d(H);
    (y.target = U), U !== H && (L = U - t);
    let V = (Z) => -L * Math.exp(-Z / o),
      c = (Z) => U + V(Z),
      K = (Z) => {
        let D = V(Z),
          g = c(Z);
        (y.done = Math.abs(D) <= a), (y.current = y.done ? U : g);
      },
      N,
      T,
      G = (Z) => {
        v(y.current) &&
          ((N = Z),
          (T = Fr({
            from: y.current,
            to: m(y.current),
            velocity: Ht(c, Z, y.current),
            damping: s,
            stiffness: p,
            restDistance: a,
            restSpeed: b,
          })));
      };
    return (
      G(0),
      (Z) => {
        let D = !1;
        return (
          !T && N === void 0 && ((D = !0), K(Z), G(Z)),
          N !== void 0 && Z > N
            ? ((y.hasReachedTarget = !0), T(Z - N))
            : ((y.hasReachedTarget = !1), !D && K(Z), y)
        );
      }
    );
  },
  _r = 10,
  bn = 1e4;
function ga(t, r = ce) {
  let n,
    o = _r,
    s = t(0),
    p = [r(s.current)];
  for (; !s.done && o < bn; )
    (s = t(o)),
      p.push(r(s.done ? s.target : s.current)),
      n === void 0 && s.hasReachedTarget && (n = o),
      (o += _r);
  let d = o - _r;
  return (
    p.length === 1 && p.push(s.current),
    { keyframes: p, duration: d / 1e3, overshootDuration: (n ?? d) / 1e3 }
  );
}
var Cr = new WeakMap();
function _a(t) {
  return (
    Cr.has(t) || Cr.set(t, { transforms: [], values: new Map() }), Cr.get(t)
  );
}
function kn(t, r) {
  return t.has(r) || t.set(r, new At()), t.get(r);
}
var _n = ["", "X", "Y", "Z"],
  Fn = ["translate", "scale", "rotate", "skew"],
  Et = { x: "translateX", y: "translateY", z: "translateZ" },
  ua = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: (t) => t + "deg",
  },
  Cn = {
    translate: {
      syntax: "<length-percentage>",
      initialValue: "0px",
      toDefaultUnit: (t) => t + "px",
    },
    rotate: ua,
    scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: ce },
    skew: ua,
  },
  ot = new Map(),
  Yr = (t) => `--motion-${t}`,
  jt = ["x", "y", "z"];
Fn.forEach((t) => {
  _n.forEach((r) => {
    jt.push(t + r), ot.set(Yr(t + r), Cn[t]);
  });
});
var Zn = (t, r) => jt.indexOf(t) - jt.indexOf(r),
  Ln = new Set(jt),
  Fa = (t) => Ln.has(t),
  Vn = (t, r) => {
    Et[r] && (r = Et[r]);
    let { transforms: n } = _a(t);
    sa(n, r), (t.style.transform = Kn(n));
  },
  Kn = (t) => t.sort(Zn).reduce(Rn, "").trim(),
  Rn = (t, r) => `${t} ${r}(var(${Yr(r)}))`,
  Kr = (t) => t.startsWith("--"),
  wa = new Set();
function Yn(t) {
  if (!wa.has(t)) {
    wa.add(t);
    try {
      let { syntax: r, initialValue: n } = ot.has(t) ? ot.get(t) : {};
      CSS.registerProperty({
        name: t,
        inherits: !1,
        syntax: r,
        initialValue: n,
      });
    } catch {}
  }
}
var Zr = (t, r) => document.createElement("div").animate(t, r),
  xa = {
    cssRegisterProperty: () =>
      typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: () => {
      try {
        Zr({ opacity: [1] });
      } catch {
        return !1;
      }
      return !0;
    },
    finished: () => !!Zr({ opacity: [0, 1] }, { duration: 0.001 }).finished,
    linearEasing: () => {
      try {
        Zr({ opacity: 0 }, { easing: "linear(0, 1)" });
      } catch {
        return !1;
      }
      return !0;
    },
  },
  Lr = {},
  nt = {};
for (let t in xa) nt[t] = () => (Lr[t] === void 0 && (Lr[t] = xa[t]()), Lr[t]);
var Sn = 0.015,
  Tn = (t, r) => {
    let n = "",
      o = Math.round(r / Sn);
    for (let s = 0; s < o; s++) n += t(ma(0, o - 1, s)) + ", ";
    return n.substring(0, n.length - 2);
  },
  ya = (t, r) =>
    Xe(t)
      ? nt.linearEasing()
        ? `linear(${Tn(t, r)})`
        : se.easing
      : Gt(t)
      ? In(t)
      : t,
  In = ([t, r, n, o]) => `cubic-bezier(${t}, ${r}, ${n}, ${o})`;
function Dn(t, r) {
  for (let n = 0; n < t.length; n++)
    t[n] === null && (t[n] = n ? t[n - 1] : r());
  return t;
}
var zn = (t) => (Array.isArray(t) ? t : [t]);
function Bt(t) {
  return Et[t] && (t = Et[t]), Fa(t) ? Yr(t) : t;
}
var Nt = {
  get: (t, r) => {
    r = Bt(r);
    let n = Kr(r) ? t.style.getPropertyValue(r) : getComputedStyle(t)[r];
    if (!n && n !== 0) {
      let o = ot.get(r);
      o && (n = o.initialValue);
    }
    return n;
  },
  set: (t, r, n) => {
    (r = Bt(r)), Kr(r) ? t.style.setProperty(r, n) : (t.style[r] = n);
  },
};
function Ca(t, r = !0) {
  if (t && t.playState !== "finished")
    try {
      t.stop ? t.stop() : (r && t.commitStyles(), t.cancel());
    } catch {}
}
function Za(t, r) {
  var n;
  let o = r?.toDefaultUnit || ce,
    s = t[t.length - 1];
  if (lr(s)) {
    let p =
      ((n = s.match(/(-?[\d.]+)([a-z%]*)/)) === null || n === void 0
        ? void 0
        : n[2]) || "";
    p && (o = (d) => d + p);
  }
  return o;
}
function Xn() {
  return j.__MOTION_DEV_TOOLS_RECORD;
}
function Gn(t, r, n, o = {}, s) {
  let p = Xn(),
    d = o.record !== !1 && p,
    x,
    {
      duration: C = se.duration,
      delay: a = se.delay,
      endDelay: b = se.endDelay,
      repeat: y = se.repeat,
      easing: v = se.easing,
      persist: m = !1,
      direction: L,
      offset: H,
      allowWebkitAcceleration: U = !1,
      autoplay: V = !0,
    } = o,
    c = _a(t),
    K = Fa(r),
    N = nt.waapi();
  K && Vn(t, r);
  let T = Bt(r),
    G = kn(c.values, T),
    Z = ot.get(T);
  return (
    Ca(G.animation, !(yt(v) && G.generator) && o.record !== !1),
    () => {
      let D = () => {
          var I, W;
          return (W =
            (I = Nt.get(t, T)) !== null && I !== void 0
              ? I
              : Z?.initialValue) !== null && W !== void 0
            ? W
            : 0;
        },
        g = Dn(zn(n), D),
        oe = Za(g, Z);
      if (yt(v)) {
        let I = v.createAnimation(g, r !== "opacity", D, T, G);
        (v = I.easing), (g = I.keyframes || g), (C = I.duration || C);
      }
      if (
        (Kr(T) && (nt.cssRegisterProperty() ? Yn(T) : (N = !1)),
        K && !nt.linearEasing() && (Xe(v) || (Pe(v) && v.some(Xe))) && (N = !1),
        N)
      ) {
        Z && (g = g.map(($) => (Xt($) ? Z.toDefaultUnit($) : $))),
          g.length !== 1 || (nt.partialKeyframes() && !d) || g.unshift(D());
        let I = {
          delay: Ge.ms(a),
          duration: Ge.ms(C),
          endDelay: Ge.ms(b),
          easing: Pe(v) ? void 0 : ya(v, C),
          direction: L,
          iterations: y + 1,
          fill: "both",
        };
        (x = t.animate(
          {
            [T]: g,
            offset: H,
            easing: Pe(v) ? v.map(($) => ya($, C)) : void 0,
          },
          I
        )),
          x.finished ||
            (x.finished = new Promise(($, de) => {
              (x.onfinish = $), (x.oncancel = de);
            }));
        let W = g[g.length - 1];
        x.finished
          .then(() => {
            m || (Nt.set(t, T, W), x.cancel());
          })
          .catch(mr),
          U || (x.playbackRate = 1.000001);
      } else if (s && K)
        (g = g.map((I) => (typeof I == "string" ? parseFloat(I) : I))),
          g.length === 1 && g.unshift(parseFloat(D())),
          (x = new s(
            (I) => {
              Nt.set(t, T, oe ? oe(I) : I);
            },
            g,
            Object.assign(Object.assign({}, o), { duration: C, easing: v })
          ));
      else {
        let I = g[g.length - 1];
        Nt.set(t, T, Z && Xt(I) ? Z.toDefaultUnit(I) : I);
      }
      return (
        d &&
          p(
            t,
            r,
            g,
            { duration: C, delay: a, easing: v, repeat: y, offset: H },
            "motion-one"
          ),
        G.setAnimation(x),
        x && !V && x.pause(),
        x
      );
    }
  );
}
var qn = (t, r) =>
  t[r] ? Object.assign(Object.assign({}, t), t[r]) : Object.assign({}, t);
function Sr(t, r) {
  var n;
  return (
    typeof t == "string"
      ? r
        ? (((n = r[t]) !== null && n !== void 0) ||
            (r[t] = document.querySelectorAll(t)),
          (t = r[t]))
        : (t = document.querySelectorAll(t))
      : t instanceof Element && (t = [t]),
    Array.from(t || [])
  );
}
var An = (t) => t(),
  Hn = (t, r, n = se.duration) =>
    new Proxy(
      { animations: t.map(An).filter(Boolean), duration: n, options: r },
      Un
    ),
  Nn = (t) => t.animations[0],
  Un = {
    get: (t, r) => {
      let n = Nn(t);
      switch (r) {
        case "duration":
          return t.duration;
        case "currentTime":
          return Ge.s(n?.[r] || 0);
        case "playbackRate":
        case "playState":
          return n?.[r];
        case "finished":
          return (
            t.finished ||
              (t.finished = Promise.all(t.animations.map(On)).catch(mr)),
            t.finished
          );
        case "stop":
          return () => {
            t.animations.forEach((o) => Ca(o));
          };
        case "forEachNative":
          return (o) => {
            t.animations.forEach((s) => o(s, t));
          };
        default:
          return typeof n?.[r] > "u"
            ? void 0
            : () => t.animations.forEach((o) => o[r]());
      }
    },
    set: (t, r, n) => {
      switch (r) {
        case "currentTime":
          n = Ge.ms(n);
        case "playbackRate":
          for (let o = 0; o < t.animations.length; o++) t.animations[o][r] = n;
          return !0;
      }
      return !1;
    },
  },
  On = (t) => t.finished;
function En(t, r, n) {
  return Xe(t) ? t(r, n) : t;
}
function jn(t) {
  return function (n, o, s = {}) {
    n = Sr(n);
    let p = n.length;
    kr(!!p, "No valid element provided."), kr(!!o, "No keyframes defined.");
    let d = [];
    for (let x = 0; x < p; x++) {
      let C = n[x];
      for (let a in o) {
        let b = qn(s, a);
        b.delay = En(b.delay, x, p);
        let y = Gn(C, a, o[a], b, t);
        d.push(y);
      }
    }
    return Hn(d, s, s.duration);
  };
}
var w0 = jn(qt);
function va(t) {
  return Xt(t) && !isNaN(t);
}
function Vr(t) {
  return lr(t) ? parseFloat(t) : t;
}
function La(t) {
  let r = new WeakMap();
  return (n = {}) => {
    let o = new Map(),
      s = (d = 0, x = 100, C = 0, a = !1) => {
        let b = `${d}-${x}-${C}-${a}`;
        return (
          o.has(b) ||
            o.set(b, t(Object.assign({ from: d, to: x, velocity: C }, n))),
          o.get(b)
        );
      },
      p = (d, x) => (r.has(d) || r.set(d, ga(d, x)), r.get(d));
    return {
      createAnimation: (d, x = !0, C, a, b) => {
        let y,
          v,
          m,
          L = 0,
          H = ce,
          U = d.length;
        if (x) {
          H = Za(d, a ? ot.get(Bt(a)) : void 0);
          let V = d[U - 1];
          if (((m = Vr(V)), U > 1 && d[0] !== null)) v = Vr(d[0]);
          else {
            let c = b?.generator;
            if (c) {
              let { animation: K, generatorStartTime: N } = b,
                T = K?.startTime || N || 0,
                G = K?.currentTime || performance.now() - T,
                Z = c(G).current;
              (v = Z), (L = Ht((D) => c(D).current, G, Z));
            } else C && (v = Vr(C()));
          }
        }
        if (va(v) && va(m)) {
          let V = s(v, m, L, a?.includes("scale"));
          (y = Object.assign(Object.assign({}, p(V, H)), { easing: "linear" })),
            b &&
              ((b.generator = V), (b.generatorStartTime = performance.now()));
        }
        return (
          y ||
            (y = { easing: "ease", duration: p(s(0, 100)).overshootDuration }),
          y
        );
      },
    };
  };
}
var x0 = La(Fr),
  y0 = La(ha),
  Bn = { any: 0, all: 1 };
function Mn(t, r, { root: n, margin: o, amount: s = "any" } = {}) {
  if (typeof IntersectionObserver > "u") return () => {};
  let p = Sr(t),
    d = new WeakMap(),
    x = (a) => {
      a.forEach((b) => {
        let y = d.get(b.target);
        if (b.isIntersecting !== !!y)
          if (b.isIntersecting) {
            let v = r(b);
            Xe(v) ? d.set(b.target, v) : C.unobserve(b.target);
          } else y && (y(b), d.delete(b.target));
      });
    },
    C = new IntersectionObserver(x, {
      root: n,
      rootMargin: o,
      threshold: typeof s == "number" ? s : Bn[s],
    });
  return p.forEach((a) => C.observe(a)), () => C.disconnect();
}
var Ut = new WeakMap(),
  Oe;
function Wn(t, r) {
  if (r) {
    let { inlineSize: n, blockSize: o } = r[0];
    return { width: n, height: o };
  }
  return t instanceof SVGElement && "getBBox" in t
    ? t.getBBox()
    : { width: t.offsetWidth, height: t.offsetHeight };
}
function Jn({ target: t, contentRect: r, borderBoxSize: n }) {
  var o;
  (o = Ut.get(t)) === null ||
    o === void 0 ||
    o.forEach((s) => {
      s({
        target: t,
        contentSize: r,
        get size() {
          return Wn(t, n);
        },
      });
    });
}
function Pn(t) {
  t.forEach(Jn);
}
function Qn() {
  typeof ResizeObserver < "u" && (Oe = new ResizeObserver(Pn));
}
function $n(t, r) {
  Oe || Qn();
  let n = Sr(t);
  return (
    n.forEach((o) => {
      let s = Ut.get(o);
      s || ((s = new Set()), Ut.set(o, s)), s.add(r), Oe?.observe(o);
    }),
    () => {
      n.forEach((o) => {
        let s = Ut.get(o);
        s?.delete(r), s?.size || Oe?.unobserve(o);
      });
    }
  );
}
var Ot = new Set(),
  vt;
function eo() {
  (vt = () => {
    let t = { width: j.innerWidth, height: j.innerHeight },
      r = { target: j, size: t, contentSize: t };
    Ot.forEach((n) => n(r));
  }),
    j.addEventListener("resize", vt);
}
function to(t) {
  return (
    Ot.add(t),
    vt || eo(),
    () => {
      Ot.delete(t), !Ot.size && vt && (vt = void 0);
    }
  );
}
function Va(t, r) {
  return Xe(t) ? to(t) : $n(t, r);
}
function Rr(t, r, n) {
  t.dispatchEvent(new CustomEvent(r, { detail: { originalEvent: n } }));
}
function ba(t, r, n) {
  t.dispatchEvent(new CustomEvent(r, { detail: { originalEntry: n } }));
}
var ro = {
    isActive: (t) => !!t.inView,
    subscribe: (t, { enable: r, disable: n }, { inViewOptions: o = {} }) => {
      let { once: s } = o,
        p = da(o, ["once"]);
      return Mn(
        t,
        (d) => {
          if ((r(), ba(t, "viewenter", d), !s))
            return (x) => {
              n(), ba(t, "viewleave", x);
            };
        },
        p
      );
    },
  },
  ka = (t, r, n) => (o) => {
    (!o.pointerType || o.pointerType === "mouse") && (n(), Rr(t, r, o));
  },
  ao = {
    isActive: (t) => !!t.hover,
    subscribe: (t, { enable: r, disable: n }) => {
      let o = ka(t, "hoverstart", r),
        s = ka(t, "hoverend", n);
      return (
        t.addEventListener("pointerenter", o),
        t.addEventListener("pointerleave", s),
        () => {
          t.removeEventListener("pointerenter", o),
            t.removeEventListener("pointerleave", s);
        }
      );
    },
  },
  no = {
    isActive: (t) => !!t.press,
    subscribe: (t, { enable: r, disable: n }) => {
      let o = (p) => {
          n(), Rr(t, "pressend", p), j.removeEventListener("pointerup", o);
        },
        s = (p) => {
          r(), Rr(t, "pressstart", p), j.addEventListener("pointerup", o);
        };
      return (
        t.addEventListener("pointerdown", s),
        () => {
          t.removeEventListener("pointerdown", s),
            j.removeEventListener("pointerup", o);
        }
      );
    },
  },
  oo = { inView: ro, hover: ao, press: no },
  v0 = ["initial", "animate", ...Object.keys(oo), "exit"];
var io = 100,
  so = 5e6,
  Mt = "--ticker-offset",
  Tr =
    typeof Animation < "u" &&
    typeof Animation.prototype.updatePlaybackRate == "function",
  Ya = !0;
if (typeof j < "u")
  try {
    j.CSS.registerProperty({
      name: Mt,
      syntax: "<length>",
      initialValue: "0px",
      inherits: !1,
    });
  } catch {
    Ya = !1;
  }
function Ve(t) {
  let {
      slots: r,
      gap: n,
      padding: o,
      paddingPerSide: s,
      paddingTop: p,
      paddingRight: d,
      paddingBottom: x,
      paddingLeft: C,
      speed: a,
      hoverFactor: b,
      direction: y,
      alignment: v,
      sizingOptions: m,
      fadeOptions: L,
      style: H,
    } = t,
    {
      fadeContent: U,
      overflow: V,
      fadeWidth: c,
      fadeInset: K,
      fadeAlpha: N,
    } = L,
    { widthType: T, heightType: G } = m,
    Z = s ? `${p}px ${d}px ${x}px ${C}px` : `${o}px`,
    D = fr.current() === fr.canvas,
    g = r.filter(Boolean),
    oe = It.count(g),
    I = oe > 0;
  y === !0 && (y = "left");
  let W = y === "left" || y === "right",
    $ = Br(0),
    de = W ? "X" : "Y",
    Ie = y === "left" || y === "top" ? "-" : "",
    lt = Mr(() => `translate${de}(${Ie}${$.get()}px)`),
    ke = F(null),
    Be = we(() => [ir(), ir()], []),
    [Q, pt] = jr({ parent: null, children: null, childrenArea: null }),
    he = [],
    De = [],
    ze = 0,
    Me = 0;
  D && ((ze = oe ? Math.floor(10 / oe) : 0), (Me = 1)),
    !D &&
      I &&
      Q.parent &&
      ((ze = Math.round((Q.parent / Q.children) * 2) + 1),
      (ze = Math.min(ze, io)),
      (Me = 1));
  let Kt = Q.childrenArea === null ? null : Q.childrenArea * (ze + 1),
    _e = Kt === null ? null : Kt > so,
    dt = Or(() => {
      if (I && ke.current) {
        let O = W ? ke.current.offsetWidth : ke.current.offsetHeight,
          [z, J] = Be,
          ie = z.current ? z.current.offsetLeft : 0,
          Fe = J.current ? J.current.offsetLeft + J.current.offsetWidth : 0,
          Ce = z.current ? z.current.offsetTop : 0,
          Ze = J.current ? J.current.offsetTop + J.current.offsetHeight : 0,
          Le = Fe - ie,
          Ae = Ze - Ce,
          ut = Le * Ae,
          nr = (W ? Le : Ae) + n;
        pt({ parent: O, children: nr, childrenArea: ut });
      }
    }, []),
    Rt = D ? { contentVisibility: "auto" } : {};
  if (I) {
    if (!D) {
      let O = F(!0);
      et(
        () => (
          sr.read(dt),
          Va(ke.current, ({ contentSize: z }) => {
            !O.current && (z.width || z.height) && sr.read(dt),
              (O.current = !1);
          })
        ),
        []
      );
    }
    he = It.map(g, (O, z) => {
      var J, ie, Fe, Ce;
      let Ze;
      z === 0 && (Ze = Be[0]), z === g.length - 1 && (Ze = Be[1]);
      let Le = {
        width: T
          ? (J = O.props) === null || J === void 0
            ? void 0
            : J.width
          : "100%",
        height: G
          ? (ie = O.props) === null || ie === void 0
            ? void 0
            : ie.height
          : "100%",
      };
      return e(
        ne,
        {
          inherit: "id",
          children: e("li", {
            ref: Ze,
            style: Le,
            children: or(
              O,
              {
                style: {
                  ...((Fe = O.props) === null || Fe === void 0
                    ? void 0
                    : Fe.style),
                  ...Le,
                  flexShrink: 0,
                  ...Rt,
                },
                layoutId: O.props.layoutId
                  ? O.props.layoutId + "-original-" + z
                  : void 0,
              },
              (Ce = O.props) === null || Ce === void 0 ? void 0 : Ce.children
            ),
          }),
        },
        z + "-original"
      );
    });
  }
  if (!D)
    for (let O = 0; O < ze; O++)
      De = [
        ...De,
        ...It.map(g, (z, J) => {
          var ie, Fe, Ce, Ze, Le, Ae;
          let ut = {
            width: T
              ? (ie = z.props) === null || ie === void 0
                ? void 0
                : ie.width
              : "100%",
            height: G
              ? (Fe = z.props) === null || Fe === void 0
                ? void 0
                : Fe.height
              : "100%",
            willChange: _e === !0 ? "auto" : "transform",
          };
          return e(
            ne,
            {
              inherit: "id",
              children: e(
                "li",
                {
                  style: ut,
                  "aria-hidden": !0,
                  children: or(
                    z,
                    {
                      key: O + " " + J,
                      style: {
                        ...((Ce = z.props) === null || Ce === void 0
                          ? void 0
                          : Ce.style),
                        width: T
                          ? (Ze = z.props) === null || Ze === void 0
                            ? void 0
                            : Ze.width
                          : "100%",
                        height: G
                          ? (Le = z.props) === null || Le === void 0
                            ? void 0
                            : Le.height
                          : "100%",
                        flexShrink: 0,
                        ...Rt,
                      },
                      layoutId: z.props.layoutId
                        ? z.props.layoutId + "-dupe-" + O
                        : void 0,
                    },
                    (Ae = z.props) === null || Ae === void 0
                      ? void 0
                      : Ae.children
                  ),
                },
                O + "li" + J
              ),
            },
            O + "lg" + J
          );
        }),
      ];
  let fe = Q.children + Q.children * Math.round(Q.parent / Q.children),
    ht = F(null),
    Qe = F(null),
    $e = F(0),
    We = F(!1),
    Je = Jr(),
    Yt = F(null),
    me = F(null);
  if (!D) {
    let O = Qr(ke);
    Tr && (!_e || (_e && Ya))
      ? (et(() => {
          if (Je || !fe || !a || _e === null) return;
          if (_e)
            try {
              j.CSS.registerProperty({
                name: Mt,
                syntax: "<length>",
                initialValue: "0px",
                inherits: !1,
              });
            } catch {}
          let z = _e
            ? { [Mt]: ["0px", `${Ie}${fe}px`] }
            : {
                transform: [
                  `translate${de}(0px)`,
                  `translate${de}(${Ie}${fe}px)`,
                ],
              };
          return (
            (me.current = Yt.current.animate(z, {
              duration: (Math.abs(fe) / a) * 1e3,
              iterations: 1 / 0,
              easing: "linear",
            })),
            () => me.current.cancel()
          );
        }, [b, fe, a, _e]),
        et(() => {
          me.current &&
            (O && me.current.playState === "paused"
              ? me.current.play()
              : !O && me.current.playState === "running" && me.current.pause());
        }, [O]))
      : Wr((z) => {
          if (!fe || Je || Tr) return;
          ht.current === null && (ht.current = z), (z = z - ht.current);
          let ie = (Qe.current === null ? 0 : z - Qe.current) * (a / 1e3);
          We.current && (ie *= b),
            ($e.current += ie),
            ($e.current = Pr(0, fe, $e.current)),
            (Qe.current = z),
            O && $.set($e.current);
        });
  }
  let rr = W ? "to right" : "to bottom",
    St = c / 2,
    ar = 100 - c / 2,
    Tt = po(K, 0, St),
    ee = 100 - K,
    gt = `linear-gradient(${rr}, rgba(0, 0, 0, ${N}) ${Tt}%, rgba(0, 0, 0, 1) ${St}%, rgba(0, 0, 0, 1) ${ar}%, rgba(0, 0, 0, ${N}) ${ee}%)`;
  return I
    ? e("section", {
        style: {
          ...Ka,
          opacity: Me,
          WebkitMaskImage: U ? gt : void 0,
          MozMaskImage: U ? gt : void 0,
          maskImage: U ? gt : void 0,
          overflow: V ? "visible" : "hidden",
          padding: Z,
        },
        ref: ke,
        children: _(f.ul, {
          ref: Yt,
          style: {
            ...Ka,
            gap: n,
            top: y === "bottom" && Ra(fe) ? -fe : void 0,
            left: y === "right" && Ra(fe) ? -fe : void 0,
            placeItems: v,
            position: "relative",
            flexDirection: W ? "row" : "column",
            ...H,
            willChange: D || _e ? "auto" : "transform",
            transform: Tr ? (_e ? `translate${de}(var(${Mt}))` : "none") : lt,
          },
          onMouseEnter: () => {
            (We.current = !0), me.current && (me.current.playbackRate = b);
          },
          onMouseLeave: () => {
            (We.current = !1), me.current && (me.current.playbackRate = 1);
          },
          children: [he, De],
        }),
      })
    : _("section", {
        style: fo,
        children: [
          e("div", { style: mo, children: "\u2728" }),
          e("p", { style: co, children: "Connect to Content" }),
          e("p", {
            style: lo,
            children:
              "Add layers or components to infinitely loop on your page.",
          }),
        ],
      });
}
Ve.defaultProps = {
  gap: 10,
  padding: 10,
  sizingOptions: { widthType: !0, heightType: !0 },
  fadeOptions: {
    fadeContent: !0,
    overflow: !1,
    fadeWidth: 25,
    fadeAlpha: 0,
    fadeInset: 0,
  },
  direction: !0,
};
Ye(Ve, {
  slots: {
    type: q.Array,
    title: "Children",
    control: { type: q.ComponentInstance },
  },
  speed: {
    type: q.Number,
    title: "Speed",
    min: 0,
    max: 1e3,
    defaultValue: 100,
    unit: "%",
    displayStepper: !0,
    step: 5,
  },
  direction: {
    type: q.Enum,
    title: "Direction",
    options: ["left", "right", "top", "bottom"],
    optionIcons: [
      "direction-left",
      "direction-right",
      "direction-up",
      "direction-down",
    ],
    optionTitles: ["Left", "Right", "Top", "Bottom"],
    defaultValue: "left",
    displaySegmentedControl: !0,
  },
  alignment: {
    type: q.Enum,
    title: "Align",
    options: ["flex-start", "center", "flex-end"],
    optionIcons: {
      direction: {
        right: ["align-top", "align-middle", "align-bottom"],
        left: ["align-top", "align-middle", "align-bottom"],
        top: ["align-left", "align-center", "align-right"],
        bottom: ["align-left", "align-center", "align-right"],
      },
    },
    defaultValue: "center",
    displaySegmentedControl: !0,
  },
  gap: { type: q.Number, title: "Gap" },
  padding: {
    title: "Padding",
    type: q.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
  },
  sizingOptions: {
    type: q.Object,
    title: "Sizing",
    controls: {
      widthType: {
        type: q.Boolean,
        title: "Width",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: !0,
      },
      heightType: {
        type: q.Boolean,
        title: "Height",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: !0,
      },
    },
  },
  fadeOptions: {
    type: q.Object,
    title: "Clipping",
    controls: {
      fadeContent: { type: q.Boolean, title: "Fade", defaultValue: !0 },
      overflow: {
        type: q.Boolean,
        title: "Overflow",
        enabledTitle: "Show",
        disabledTitle: "Hide",
        defaultValue: !1,
        hidden(t) {
          return t.fadeContent === !0;
        },
      },
      fadeWidth: {
        type: q.Number,
        title: "Width",
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: "%",
        hidden(t) {
          return t.fadeContent === !1;
        },
      },
      fadeInset: {
        type: q.Number,
        title: "Inset",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        hidden(t) {
          return t.fadeContent === !1;
        },
      },
      fadeAlpha: {
        type: q.Number,
        title: "Opacity",
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
        hidden(t) {
          return t.fadeContent === !1;
        },
      },
    },
  },
  hoverFactor: {
    type: q.Number,
    title: "Hover",
    min: 0,
    max: 1,
    unit: "x",
    defaultValue: 1,
    step: 0.1,
    displayStepper: !0,
    description: "Slows down the speed while you are hovering.",
  },
});
var Ka = {
    display: "flex",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    placeItems: "center",
    margin: 0,
    padding: 0,
    listStyleType: "none",
    textIndent: "none",
  },
  fo = {
    display: "flex",
    width: "100%",
    height: "100%",
    placeContent: "center",
    placeItems: "center",
    flexDirection: "column",
    color: "#96F",
    background: "rgba(136, 85, 255, 0.1)",
    fontSize: 11,
    overflow: "hidden",
    padding: "20px 20px 30px 20px",
  },
  mo = { fontSize: 32, marginBottom: 10 },
  co = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" },
  lo = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 150,
    lineHeight: 1.5,
    textAlign: "center",
  },
  po = (t, r, n) => Math.min(Math.max(t, r), n),
  Ra = (t) => typeof t == "number" && !isNaN(t);
var ho = P(qe),
  go = "framer-dcrGX",
  uo = { CJzz6hXba: "framer-v-i0cv56" };
var wo = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  xo = ({ value: t, children: r }) => {
    let n = Re(ae),
      o = t ?? n.transition,
      s = we(() => ({ ...n, transition: o }), [JSON.stringify(o)]);
    return e(ae.Provider, { value: s, children: r });
  },
  yo = f.create(k),
  vo = ({ height: t, id: r, width: n, ...o }) => ({ ...o }),
  bo = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  ko = ge(function (t, r) {
    let { activeLocale: n, setLocale: o } = xe(),
      { style: s, className: p, layoutId: d, variant: x, ...C } = vo(t),
      {
        baseVariant: a,
        classNames: b,
        clearLoadingGesture: y,
        gestureHandlers: v,
        gestureVariant: m,
        isLoading: L,
        setGestureState: H,
        setVariant: U,
        variants: V,
      } = Te({
        defaultVariant: "CJzz6hXba",
        variant: x,
        variantClassNames: uo,
      }),
      c = bo(t, V),
      K = F(null),
      N = ue(),
      T = [],
      G = Se();
    return e(ne, {
      id: d ?? N,
      children: e(yo, {
        animate: V,
        initial: !1,
        children: e(xo, {
          value: wo,
          children: e(f.div, {
            ...C,
            ...v,
            className: E(go, ...T, "framer-i0cv56", p, b),
            "data-framer-name": "Variant 1",
            layoutDependency: c,
            layoutId: "CJzz6hXba",
            ref: r ?? K,
            style: { ...s },
            children: e(Y, {
              children: e(f.div, {
                className: "framer-13zci62-container",
                layoutDependency: c,
                layoutId: "dumeGO1iA-container",
                children: e(qe, {
                  customColor:
                    "var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151))",
                  customPadding: 0,
                  customStrokeWidth: 2,
                  customSvgCode:
                    '<svg width="1547" height="182" viewBox="0 0 1547 182" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.125 3.90393H78.983V121.372H199.727V178H0.125V3.90393Z" fill="#F3F597"/> <path d="M292.868 3.90393V178H214.244V3.90393H292.868Z" fill="#F3F597"/> <path d="M311.135 3.90393H389.993V121.372H510.737V178H311.135V3.90393Z" fill="#F3F597"/> <path d="M525.254 3.90393H723.452V50.0019H602.942V67.3179H721.346V113.182H602.942V178H525.254V3.90393Z" fill="#F3F597"/> <path d="M818.003 49.0659V74.5719H887.969C901.073 74.5719 905.753 69.1899 905.753 61.9359V61.7019C905.753 54.4479 901.073 49.0659 887.969 49.0659H818.003ZM818.003 120.436V178H739.145V3.90393H916.283C960.041 3.90393 986.951 16.3059 986.951 48.1299V50.4699C986.951 76.6779 963.551 86.5059 949.043 90.2499C973.613 95.1639 987.653 110.374 987.653 132.838V159.046C987.653 169.342 989.057 173.554 990.929 176.596V178H909.965C908.795 176.83 908.327 174.49 908.327 170.98V150.154C908.327 131.434 899.435 120.436 873.929 120.436H818.003Z" fill="#F3F597"/> <path d="M1127.39 0.62793H1138.63C1253.99 0.62793 1270.37 52.1079 1270.37 86.9739V93.9939C1270.37 128.392 1253.99 181.276 1138.63 181.276H1127.39C1012.27 181.276 995.886 128.392 995.886 93.9939V86.9739C995.886 52.1079 1012.27 0.62793 1127.39 0.62793ZM1188.7 91.6539V88.3779C1188.7 71.5299 1176.77 52.1079 1133.01 52.1079C1088.08 52.1079 1077.32 71.5299 1077.32 88.3779V91.1859C1077.32 108.268 1089.25 129.328 1133.01 129.328C1176.77 129.328 1188.7 108.736 1188.7 91.6539Z" fill="#F3F597"/> <path d="M1404.2 181.276H1398.35C1301.71 181.276 1279.25 132.136 1279.25 93.7599V86.7399C1279.25 45.5559 1303.11 0.62793 1408.41 0.62793H1416.6C1532.2 0.62793 1545.77 43.9179 1545.77 68.7219V68.9559H1464.57C1463.4 64.5099 1457.32 50.0019 1414.26 50.0019C1374.02 50.0019 1360.68 67.3179 1360.68 89.0799V91.1859C1360.68 112.948 1374.95 132.604 1413.56 132.604C1453.34 132.604 1464.34 119.266 1464.34 114.352H1411.22V79.4859H1546.94V178H1495.23C1494.06 172.618 1489.61 162.322 1485.63 157.174C1479.55 163.258 1458.26 181.276 1404.2 181.276Z" fill="#F3F597"/> </svg>',
                  description: "",
                  height: "100%",
                  id: "dumeGO1iA",
                  layoutId: "dumeGO1iA",
                  lineCap: "butt",
                  lineJoin: "miter",
                  style: { height: "100%", width: "100%" },
                  title: "",
                  width: "100%",
                }),
              }),
            }),
          }),
        }),
      }),
    });
  }),
  _o = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-dcrGX.framer-19dhi8m, .framer-dcrGX .framer-19dhi8m { display: block; }",
    ".framer-dcrGX.framer-i0cv56 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 184px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1564px; }",
    ".framer-dcrGX .framer-13zci62-container { aspect-ratio: 8.5 / 1; flex: none; height: 100%; position: relative; width: var(--framer-aspect-ratio-supported, 1564px); }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-dcrGX.framer-i0cv56 { gap: 0px; } .framer-dcrGX.framer-i0cv56 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-dcrGX.framer-i0cv56 > :first-child { margin-left: 0px; } .framer-dcrGX.framer-i0cv56 > :last-child { margin-right: 0px; } }",
  ],
  Wt = ye(ko, _o, "framer-dcrGX"),
  Ee = Wt;
Wt.displayName = "Lilfrog-logo";
Wt.defaultProps = { height: 184, width: 1564 };
ve(Wt, [{ explicitInter: !0, fonts: [] }, ...ho], {
  supportsExplicitInterCodegen: !0,
});
var Fo = ["OpJHNzVxb", "uZWl4ujGH"],
  Co = "framer-PiLxG",
  Zo = { OpJHNzVxb: "framer-v-o6khl1", uZWl4ujGH: "framer-v-1nadjgi" };
function Jt(t, ...r) {
  let n = {};
  return r?.forEach((o) => o && Object.assign(n, t[o])), n;
}
var Lo = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  Vo = (t, r) => `translateX(-50%) ${r}`,
  Ko = ({ value: t, children: r }) => {
    let n = Re(ae),
      o = t ?? n.transition,
      s = we(() => ({ ...n, transition: o }), [JSON.stringify(o)]);
    return e(ae.Provider, { value: s, children: r });
  },
  Ro = { desktop: "OpJHNzVxb", mobile: "uZWl4ujGH" },
  Yo = ({ height: t, id: r, width: n, ...o }) => {
    var s, p;
    return {
      ...o,
      variant:
        (p = (s = Ro[o.variant]) !== null && s !== void 0 ? s : o.variant) !==
          null && p !== void 0
          ? p
          : "OpJHNzVxb",
    };
  },
  So = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  To = f.create(k),
  Io = ge(function (t, r) {
    let { activeLocale: n, setLocale: o } = xe(),
      { style: s, className: p, layoutId: d, variant: x, ...C } = Yo(t),
      {
        baseVariant: a,
        classNames: b,
        clearLoadingGesture: y,
        gestureHandlers: v,
        gestureVariant: m,
        isLoading: L,
        setGestureState: H,
        setVariant: U,
        variants: V,
      } = Te({
        cycleOrder: Fo,
        defaultVariant: "OpJHNzVxb",
        variant: x,
        variantClassNames: Zo,
      }),
      c = So(t, V),
      N = E(Co, ...[]),
      T = F(null),
      G = () => a === "uZWl4ujGH",
      Z = () => a !== "uZWl4ujGH",
      D = ue(),
      g = Se();
    return e(ne, {
      id: d ?? D,
      children: e(To, {
        animate: V,
        initial: !1,
        children: e(Ko, {
          value: Lo,
          children: _(f.div, {
            ...C,
            ...v,
            className: E(N, "framer-o6khl1", p, b),
            "data-framer-name": "desktop",
            layoutDependency: c,
            layoutId: "OpJHNzVxb",
            ref: r ?? T,
            style: { ...s },
            ...Jt({ uZWl4ujGH: { "data-framer-name": "mobile" } }, a, m),
            children: [
              e(f.div, {
                className: "framer-1ukmy47",
                "data-framer-name": "halo",
                layoutDependency: c,
                layoutId: "YDOIMgX6X",
                style: {
                  backgroundColor: "rgb(84, 253, 134)",
                  borderBottomLeftRadius: "100%",
                  borderBottomRightRadius: "100%",
                  borderTopLeftRadius: "100%",
                  borderTopRightRadius: "100%",
                  filter: "blur(70px)",
                  WebkitFilter: "blur(70px)",
                },
                variants: {
                  uZWl4ujGH: {
                    filter: "blur(20px)",
                    WebkitFilter: "blur(20px)",
                  },
                },
              }),
              G() &&
                e(B, {
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 1870,
                    intrinsicWidth: 2420,
                    pixelHeight: 1870,
                    pixelWidth: 2420,
                    src: "/framerusercontent.com/images/rOgyE5AVL45CHsSnJ3W5Rp9Rcg.png",
                    srcSet:
                      "/framerusercontent.com/images/rOgyE5AVL45CHsSnJ3W5Rp9Rcg.png?scale-down-to=512 512w,/framerusercontent.com/images/rOgyE5AVL45CHsSnJ3W5Rp9Rcg.png?scale-down-to=1024 1024w,/framerusercontent.com/images/rOgyE5AVL45CHsSnJ3W5Rp9Rcg.png?scale-down-to=2048 2048w,/framerusercontent.com/images/rOgyE5AVL45CHsSnJ3W5Rp9Rcg.png 2420w",
                  },
                  className: "framer-zanxfj",
                  "data-framer-name": "byfungo-mobile",
                  layoutDependency: c,
                  layoutId: "A7rCdanRF",
                  transformTemplate: Vo,
                  ...Jt(
                    {
                      uZWl4ujGH: {
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 1870,
                          intrinsicWidth: 2420,
                          loading: i((g?.y || 0) + 158),
                          pixelHeight: 1870,
                          pixelWidth: 2420,
                          sizes: "390px",
                          src: "/framerusercontent.com/images/rOgyE5AVL45CHsSnJ3W5Rp9Rcg.png",
                          srcSet:
                            "/framerusercontent.com/images/rOgyE5AVL45CHsSnJ3W5Rp9Rcg.png?scale-down-to=512 512w,/framerusercontent.com/images/rOgyE5AVL45CHsSnJ3W5Rp9Rcg.png?scale-down-to=1024 1024w,/framerusercontent.com/images/rOgyE5AVL45CHsSnJ3W5Rp9Rcg.png?scale-down-to=2048 2048w,/framerusercontent.com/images/rOgyE5AVL45CHsSnJ3W5Rp9Rcg.png 2420w",
                        },
                      },
                    },
                    a,
                    m
                  ),
                }),
              Z() &&
                e(B, {
                  background: {
                    alt: "",
                    fit: "fit",
                    intrinsicHeight: 1106,
                    intrinsicWidth: 3200,
                    loading: i(
                      (g?.y || 0) +
                        ((g?.height || 953) * 0.7397691500524661 - 272)
                    ),
                    pixelHeight: 1106,
                    pixelWidth: 3200,
                    positionX: "center",
                    positionY: "center",
                    sizes: "1574px",
                    src: "/framerusercontent.com/images/dPKldViSQQ4v1VhXkK2euIcwQZs.png",
                    srcSet:
                      "/framerusercontent.com/images/dPKldViSQQ4v1VhXkK2euIcwQZs.png?scale-down-to=512 512w,/framerusercontent.com/images/dPKldViSQQ4v1VhXkK2euIcwQZs.png?scale-down-to=1024 1024w,/framerusercontent.com/images/dPKldViSQQ4v1VhXkK2euIcwQZs.png?scale-down-to=2048 2048w,/framerusercontent.com/images/dPKldViSQQ4v1VhXkK2euIcwQZs.png 3174w",
                  },
                  className: "framer-rcqxt4",
                  "data-framer-name": "byfungo-dektop",
                  layoutDependency: c,
                  layoutId: "WO0oSMzTd",
                }),
              e(B, {
                background: {
                  alt: "",
                  fit: "fit",
                  loading: i(
                    (g?.y || 0) +
                      ((g?.height || 953) * 0.43966421825813246 - 419.5)
                  ),
                  positionX: "center",
                  positionY: "center",
                  sizes: "1600px",
                  src: "/framerusercontent.com/images/HCQYAdhhLmCGzHoNhP7B4kuzQxw.png",
                  srcSet:
                    "/framerusercontent.com/images/HCQYAdhhLmCGzHoNhP7B4kuzQxw.png?scale-down-to=512 512w,/framerusercontent.com/images/HCQYAdhhLmCGzHoNhP7B4kuzQxw.png?scale-down-to=1024 1024w,/framerusercontent.com/images/HCQYAdhhLmCGzHoNhP7B4kuzQxw.png?scale-down-to=2048 2048w,/framerusercontent.com/images/HCQYAdhhLmCGzHoNhP7B4kuzQxw.png 3264w",
                },
                className: "framer-wzq3s7",
                "data-framer-name": "lil-back-shadow",
                layoutDependency: c,
                layoutId: "U1DuDmtJD",
                ...Jt(
                  {
                    uZWl4ujGH: {
                      background: {
                        alt: "",
                        fit: "fit",
                        loading: i((g?.y || 0) + 0),
                        positionX: "center",
                        positionY: "center",
                        sizes: "529px",
                        src: "/framerusercontent.com/images/HCQYAdhhLmCGzHoNhP7B4kuzQxw.png",
                        srcSet:
                          "/framerusercontent.com/images/HCQYAdhhLmCGzHoNhP7B4kuzQxw.png?scale-down-to=512 512w,/framerusercontent.com/images/HCQYAdhhLmCGzHoNhP7B4kuzQxw.png?scale-down-to=1024 1024w,/framerusercontent.com/images/HCQYAdhhLmCGzHoNhP7B4kuzQxw.png?scale-down-to=2048 2048w,/framerusercontent.com/images/HCQYAdhhLmCGzHoNhP7B4kuzQxw.png 3264w",
                      },
                    },
                  },
                  a,
                  m
                ),
              }),
              e(B, {
                background: {
                  alt: "",
                  fit: "fill",
                  loading: i(
                    (g?.y || 0) +
                      ((g?.height || 953) * 0.3567681007345228 - 327)
                  ),
                  sizes: "1446px",
                  src: "/framerusercontent.com/images/YTLCHnlYEuG5H1QPdZkKLVpUA2w.png",
                  srcSet:
                    "/framerusercontent.com/images/YTLCHnlYEuG5H1QPdZkKLVpUA2w.png?scale-down-to=512 512w,/framerusercontent.com/images/YTLCHnlYEuG5H1QPdZkKLVpUA2w.png?scale-down-to=1024 1024w,/framerusercontent.com/images/YTLCHnlYEuG5H1QPdZkKLVpUA2w.png?scale-down-to=2048 2048w,/framerusercontent.com/images/YTLCHnlYEuG5H1QPdZkKLVpUA2w.png 2316w",
                },
                className: "framer-1c17lbs",
                "data-framer-name": "lil",
                layoutDependency: c,
                layoutId: "Ol4GjzpwQ",
                style: { rotate: -1 },
                ...Jt(
                  {
                    uZWl4ujGH: {
                      background: {
                        alt: "",
                        fit: "fill",
                        loading: i((g?.y || 0) + 4),
                        sizes: "477px",
                        src: "/framerusercontent.com/images/YTLCHnlYEuG5H1QPdZkKLVpUA2w.png",
                        srcSet:
                          "/framerusercontent.com/images/YTLCHnlYEuG5H1QPdZkKLVpUA2w.png?scale-down-to=512 512w,/framerusercontent.com/images/YTLCHnlYEuG5H1QPdZkKLVpUA2w.png?scale-down-to=1024 1024w,/framerusercontent.com/images/YTLCHnlYEuG5H1QPdZkKLVpUA2w.png?scale-down-to=2048 2048w,/framerusercontent.com/images/YTLCHnlYEuG5H1QPdZkKLVpUA2w.png 2316w",
                      },
                    },
                  },
                  a,
                  m
                ),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Do = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-PiLxG.framer-1a77yav, .framer-PiLxG .framer-1a77yav { display: block; }",
    ".framer-PiLxG.framer-o6khl1 { height: 953px; overflow: visible; position: relative; width: 1600px; }",
    ".framer-PiLxG .framer-1ukmy47 { flex: none; height: 476px; left: calc(50.93750000000002% - 1093px / 2); position: absolute; top: calc(38.824763903462774% - 476px / 2); width: 1093px; }",
    ".framer-PiLxG .framer-zanxfj { aspect-ratio: 1.2941176470588236 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 301px); left: 50%; overflow: visible; position: absolute; top: 158px; width: 390px; }",
    ".framer-PiLxG .framer-rcqxt4 { flex: none; height: 544px; left: calc(49.93750000000002% - 1574px / 2); overflow: visible; position: absolute; top: calc(73.97691500524661% - 544px / 2); width: 1574px; }",
    ".framer-PiLxG .framer-wzq3s7 { flex: none; height: 839px; left: calc(50.00000000000002% - 1600px / 2); position: absolute; top: calc(43.96642182581324% - 839px / 2); width: 1600px; }",
    ".framer-PiLxG .framer-1c17lbs { flex: none; height: 654px; left: calc(49.12500000000002% - 1446px / 2); position: absolute; top: calc(35.67681007345228% - 654px / 2); width: 1446px; }",
    ".framer-PiLxG.framer-v-1nadjgi.framer-o6khl1 { height: 459px; width: 390px; }",
    ".framer-PiLxG.framer-v-1nadjgi .framer-1ukmy47 { height: 116px; left: calc(50.76923076923079% - 267px / 2); top: 76px; width: 267px; }",
    ".framer-PiLxG.framer-v-1nadjgi .framer-wzq3s7 { height: 278px; left: calc(38.205128205128226% - 529px / 2); top: 0px; width: 529px; }",
    ".framer-PiLxG.framer-v-1nadjgi .framer-1c17lbs { height: 218px; left: calc(37.179487179487204% - 477px / 2); top: 4px; width: 477px; }",
  ],
  kt = ye(Io, Do, "framer-PiLxG"),
  Ir = kt;
kt.displayName = "footer-banner";
kt.defaultProps = { height: 953, width: 1600 };
Ye(kt, {
  variant: {
    options: ["OpJHNzVxb", "uZWl4ujGH"],
    optionTitles: ["desktop", "mobile"],
    title: "Variant",
    type: q.Enum,
  },
});
ve(kt, [{ explicitInter: !0, fonts: [] }], {
  supportsExplicitInterCodegen: !0,
});
var zo = { uNliHfFeI: { hover: !0 } },
  Xo = "framer-CHW92",
  Go = { uNliHfFeI: "framer-v-rhkvz" };
function qo(t, ...r) {
  let n = {};
  return r?.forEach((o) => o && Object.assign(n, t[o])), n;
}
var Ao = (t) => {
    if (typeof t != "number") return t;
    if (Number.isFinite(t)) return Math.max(0, t) + "px";
  },
  Pt = (t, r) => {
    if (typeof t == "number" && Number.isFinite(t))
      return Math.max(0, t) + "px";
    if (typeof t != "string" || typeof r != "number") return;
    let n = t.split(" ");
    return n[r] || n[r - 2] || n[0];
  },
  Ho = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  No = (t) =>
    typeof t == "object" && t !== null && typeof t.src == "string"
      ? t
      : typeof t == "string"
      ? { src: t }
      : void 0,
  Uo = ({ value: t, children: r }) => {
    let n = Re(ae),
      o = t ?? n.transition,
      s = we(() => ({ ...n, transition: o }), [JSON.stringify(o)]);
    return e(ae.Provider, { value: s, children: r });
  },
  Oo = f.create(k),
  Eo = ({
    description: t,
    height: r,
    id: n,
    image: o,
    link: s,
    padding: p,
    radius: d,
    title: x,
    width: C,
    ...a
  }) => {
    var b, y, v, m, L;
    return {
      ...a,
      d_yWV25VY: (b = d ?? a.d_yWV25VY) !== null && b !== void 0 ? b : "16px",
      d8y8V7ehU:
        (y = x ?? a.d8y8V7ehU) !== null && y !== void 0 ? y : "0xfungo",
      k72w7NzTD: (v = p ?? a.k72w7NzTD) !== null && v !== void 0 ? v : "4px",
      kYIP1MhlJ:
        (m = o ?? a.kYIP1MhlJ) !== null && m !== void 0
          ? m
          : {
              alt: "",
              src: "/framerusercontent.com/images/PXpRZucktvC01iLCZ9tC5Wi6fLE.png",
            },
      MWEdP3qke:
        (L = t ?? a.MWEdP3qke) !== null && L !== void 0
          ? L
          : "Design and website by oxFungo",
      OuV4IAc6z: s ?? a.OuV4IAc6z,
    };
  },
  jo = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  Bo = ge(function (t, r) {
    let { activeLocale: n, setLocale: o } = xe(),
      {
        style: s,
        className: p,
        layoutId: d,
        variant: x,
        d8y8V7ehU: C,
        MWEdP3qke: a,
        kYIP1MhlJ: b,
        d_yWV25VY: y,
        k72w7NzTD: v,
        OuV4IAc6z: m,
        ...L
      } = Eo(t),
      {
        baseVariant: H,
        classNames: U,
        clearLoadingGesture: V,
        gestureHandlers: c,
        gestureVariant: K,
        isLoading: N,
        setGestureState: T,
        setVariant: G,
        variants: Z,
      } = Te({
        defaultVariant: "uNliHfFeI",
        enabledGestures: zo,
        variant: x,
        variantClassNames: Go,
      }),
      D = jo(t, Z),
      g = F(null),
      oe = ue(),
      I = [],
      W = Se();
    return e(ne, {
      id: d ?? oe,
      children: e(Oo, {
        animate: Z,
        initial: !1,
        children: e(Uo, {
          value: Ho,
          children: e(ra, {
            href: m,
            nodeId: "uNliHfFeI",
            children: _(f.a, {
              ...L,
              ...c,
              className: `${E(Xo, ...I, "framer-rhkvz", p, U)} framer-8bjnv4`,
              "data-framer-name": "Variant 1",
              layoutDependency: D,
              layoutId: "uNliHfFeI",
              ref: r ?? g,
              style: {
                "--gkw0ls": Ao(v),
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderBottomLeftRadius: Pt(y, 3),
                borderBottomRightRadius: Pt(y, 2),
                borderTopLeftRadius: Pt(y, 0),
                borderTopRightRadius: Pt(y, 1),
                ...s,
              },
              variants: {
                "uNliHfFeI-hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              },
              ...qo(
                { "uNliHfFeI-hover": { "data-framer-name": void 0 } },
                H,
                K
              ),
              children: [
                e(B, {
                  background: { alt: "", fit: "fill", sizes: "96px", ...No(b) },
                  className: "framer-1ggy627",
                  "data-framer-name": "image 88",
                  layoutDependency: D,
                  layoutId: "kLe9XqOmN",
                  style: {
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  },
                }),
                e(A, {
                  __fromCanvasComponent: !0,
                  children: e(k, {
                    children: e(f.p, {
                      style: {
                        "--font-selector": "SW50ZXItTWVkaXVt",
                        "--framer-font-family":
                          '"Inter", "Inter Placeholder", sans-serif',
                        "--framer-font-size": "14px",
                        "--framer-font-weight": "500",
                        "--framer-letter-spacing": "-0.02em",
                        "--framer-line-height": "115%",
                        "--framer-text-alignment": "left",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                        "--framer-text-transform": "uppercase",
                      },
                      children: "0xfungo",
                    }),
                  }),
                  className: "framer-zkr1j7",
                  "data-framer-name": "Design and website",
                  fonts: ["Inter-Medium"],
                  layoutDependency: D,
                  layoutId: "zS_MphU7j",
                  style: {
                    "--extracted-r6o4lv": "rgb(255, 255, 255)",
                    "--framer-paragraph-spacing": "0px",
                  },
                  text: C,
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
                e(A, {
                  __fromCanvasComponent: !0,
                  children: e(k, {
                    children: e(f.p, {
                      style: {
                        "--font-selector": "SW50ZXItTWVkaXVt",
                        "--framer-font-family":
                          '"Inter", "Inter Placeholder", sans-serif',
                        "--framer-font-size": "14px",
                        "--framer-font-weight": "500",
                        "--framer-letter-spacing": "-0.02em",
                        "--framer-line-height": "115%",
                        "--framer-text-alignment": "left",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                        "--framer-text-transform": "uppercase",
                      },
                      children: "Designand website by oxFungo",
                    }),
                  }),
                  className: "framer-1kkju6r",
                  "data-framer-name": "Design and website",
                  fonts: ["Inter-Medium"],
                  layoutDependency: D,
                  layoutId: "k88nw1jHQ",
                  style: {
                    "--extracted-r6o4lv": "rgb(255, 255, 255)",
                    "--framer-paragraph-spacing": "0px",
                    opacity: 0.5,
                  },
                  text: a,
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  Mo = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-CHW92.framer-8bjnv4, .framer-CHW92 .framer-8bjnv4 { display: block; }",
    ".framer-CHW92.framer-rhkvz { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: var(--gkw0ls); position: relative; text-decoration: none; width: 350px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-CHW92 .framer-1ggy627 { aspect-ratio: 1 / 1; flex: none; height: 96px; position: relative; width: var(--framer-aspect-ratio-supported, 96px); z-index: 1; }",
    ".framer-CHW92 .framer-zkr1j7, .framer-CHW92 .framer-1kkju6r { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; z-index: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-CHW92.framer-rhkvz { gap: 0px; } .framer-CHW92.framer-rhkvz > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-CHW92.framer-rhkvz > :first-child { margin-left: 0px; } .framer-CHW92.framer-rhkvz > :last-child { margin-right: 0px; } }",
  ],
  _t = ye(Bo, Mo, "framer-CHW92"),
  Ft = _t;
_t.displayName = "menu-list";
_t.defaultProps = { height: 104, width: 350 };
Ye(_t, {
  d8y8V7ehU: {
    defaultValue: "0xfungo",
    displayTextArea: !1,
    title: "title",
    type: q.String,
  },
  MWEdP3qke: {
    defaultValue: "Design and website by oxFungo",
    displayTextArea: !0,
    title: "description",
    type: q.String,
  },
  kYIP1MhlJ: {
    __defaultAssetReference:
      "data:framer/asset-reference,PXpRZucktvC01iLCZ9tC5Wi6fLE.png?originalFilename=image+88.png&preferredSize=auto",
    __vekterDefault: {
      alt: "",
      assetReference:
        "data:framer/asset-reference,PXpRZucktvC01iLCZ9tC5Wi6fLE.png?originalFilename=image+88.png&preferredSize=auto",
    },
    title: "Image",
    type: q.ResponsiveImage,
  },
  d_yWV25VY: { defaultValue: "16px", title: "Radius", type: q.BorderRadius },
  k72w7NzTD: { defaultValue: "4px", title: "Padding", type: q.Padding },
  OuV4IAc6z: { title: "Link", type: q.Link },
});
ve(
  _t,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "/framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "/framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "/framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "/framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "/framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "/framerusercontent.com/assets/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "/framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2",
          weight: "500",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Wo = [
    "ap20IZUme",
    "OtSX71sTU",
    "mnNfk6f2w",
    "y_lBCAqRP",
    "ZkygCb7DR",
    "NCKO0NgR2",
    "v2mtFeAuk",
    "tiRcsvzuk",
    "Od5xvdYEm",
    "kMUl0Afd9",
    "lVU25KIsK",
    "kc7aC3P2l",
    "GmVAWTfaL",
    "v1W3w7FD4",
    "c9Qk6uHGo",
    "s_qou4L88",
    "QCiXVrMlL",
    "XTjSCZ3LX",
    "JO9dP7zD1",
    "pNafs84zT",
  ],
  Jo = "framer-75DvK",
  Po = {
    ap20IZUme: "framer-v-1jk7sqm",
    c9Qk6uHGo: "framer-v-1w3zgn0",
    GmVAWTfaL: "framer-v-jy5ndw",
    JO9dP7zD1: "framer-v-3erv8r",
    kc7aC3P2l: "framer-v-9kkmg4",
    kMUl0Afd9: "framer-v-e4icku",
    lVU25KIsK: "framer-v-1u2wxj",
    mnNfk6f2w: "framer-v-1bnv3s",
    NCKO0NgR2: "framer-v-1ehiy6v",
    Od5xvdYEm: "framer-v-qqlda0",
    OtSX71sTU: "framer-v-96il6j",
    pNafs84zT: "framer-v-1lg26im",
    QCiXVrMlL: "framer-v-bnbo05",
    s_qou4L88: "framer-v-17w7gtx",
    tiRcsvzuk: "framer-v-64soip",
    v1W3w7FD4: "framer-v-1fcx0j5",
    v2mtFeAuk: "framer-v-40werk",
    XTjSCZ3LX: "framer-v-1ixeeri",
    y_lBCAqRP: "framer-v-134kyg1",
    ZkygCb7DR: "framer-v-v6adgt",
  };
function h(t, ...r) {
  let n = {};
  return r?.forEach((o) => o && Object.assign(n, t[o])), n;
}
var u = { bounce: 0.2, delay: 0, duration: 1, type: "spring" },
  w = ({ value: t, children: r }) => {
    let n = Re(ae),
      o = t ?? n.transition,
      s = we(() => ({ ...n, transition: o }), [JSON.stringify(o)]);
    return e(ae.Provider, { value: s, children: r });
  },
  it = { opacity: 0.2, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 0 },
  Sa = { bounce: 0, delay: 0.025, duration: 0, type: "spring" },
  Qt = {
    effect: it,
    repeat: !0,
    tokenization: "character",
    transition: Sa,
    trigger: "onInView",
    type: "appear",
  },
  Ta = { bounce: 0, delay: 0.0175, duration: 0, type: "spring" },
  be = {
    effect: it,
    repeat: !0,
    tokenization: "character",
    transition: Ta,
    trigger: "onInView",
    type: "appear",
  },
  Qo = { opacity: 0.5, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 0 },
  Dr = { bounce: 0, delay: 0.05, duration: 0, type: "spring" },
  $o = {
    effect: Qo,
    tokenization: "character",
    transition: Dr,
    trigger: "onMount",
    type: "appear",
  },
  Ia = { opacity: 0.25, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 0 },
  je = {
    effect: Ia,
    threshold: 1,
    tokenization: "character",
    transition: Dr,
    trigger: "onInView",
    type: "appear",
  },
  ei = {
    effect: it,
    tokenization: "character",
    transition: Sa,
    trigger: "onInView",
    type: "appear",
  },
  ti = {
    effect: Ia,
    repeat: !0,
    threshold: 1,
    tokenization: "character",
    transition: Dr,
    trigger: "onInView",
    type: "appear",
  },
  ri = { bounce: 0.2, delay: 0.0175, duration: 0, type: "spring" },
  ai = {
    effect: it,
    repeat: !0,
    threshold: 1,
    tokenization: "character",
    transition: ri,
    trigger: "onInView",
    type: "appear",
  },
  ni = {
    effect: it,
    repeat: !0,
    threshold: 0,
    tokenization: "character",
    transition: Ta,
    trigger: "onInView",
    type: "appear",
  },
  oi = { bounce: 0, delay: 0.017, duration: 0, type: "spring" },
  ii = {
    effect: it,
    repeat: !0,
    tokenization: "character",
    transition: oi,
    trigger: "onInView",
    type: "appear",
  },
  si = {
    "D-01-introduction": "ap20IZUme",
    "D-02-Mushrooms": "OtSX71sTU",
    "D-03-magicmushrooms": "mnNfk6f2w",
    "D-04-crazymush": "y_lBCAqRP",
    "D-05-meetup": "ZkygCb7DR",
    "D-06-legend": "NCKO0NgR2",
    "D-07-bff": "v2mtFeAuk",
    "D-08-buttcoin": "tiRcsvzuk",
    "D-09-12inchs": "Od5xvdYEm",
    "D-10-gaz-refexion": "kMUl0Afd9",
    "M-02-Mushrooms": "kc7aC3P2l",
    "M-04-crazymush": "v1W3w7FD4",
    "M-05-meetup": "c9Qk6uHGo",
    "M-06-legend": "s_qou4L88",
    "M-07-bff": "QCiXVrMlL",
    "M-08-buttcoin": "XTjSCZ3LX",
    "M-09-12inchs": "JO9dP7zD1",
    "M-10-gaz-refexion": "pNafs84zT",
    "M/01-introduction": "lVU25KIsK",
    "M/03-magicmushrooms": "GmVAWTfaL",
  },
  fi = ({ height: t, id: r, width: n, ...o }) => {
    var s, p;
    return {
      ...o,
      variant:
        (p = (s = si[o.variant]) !== null && s !== void 0 ? s : o.variant) !==
          null && p !== void 0
          ? p
          : "ap20IZUme",
    };
  },
  mi = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  ci = f.create(k),
  li = ge(function (t, r) {
    let { activeLocale: n, setLocale: o } = xe(),
      { style: s, className: p, layoutId: d, variant: x, ...C } = fi(t),
      {
        baseVariant: a,
        classNames: b,
        clearLoadingGesture: y,
        gestureHandlers: v,
        gestureVariant: m,
        isLoading: L,
        setGestureState: H,
        setVariant: U,
        variants: V,
      } = Te({
        cycleOrder: Wo,
        defaultVariant: "ap20IZUme",
        variant: x,
        variantClassNames: Po,
      }),
      c = mi(t, V),
      N = E(Jo, ...[]),
      T = F(null),
      G = () =>
        ![
          "OtSX71sTU",
          "mnNfk6f2w",
          "y_lBCAqRP",
          "ZkygCb7DR",
          "NCKO0NgR2",
          "v2mtFeAuk",
          "tiRcsvzuk",
          "Od5xvdYEm",
          "kMUl0Afd9",
          "kc7aC3P2l",
          "GmVAWTfaL",
          "v1W3w7FD4",
          "c9Qk6uHGo",
          "s_qou4L88",
          "QCiXVrMlL",
          "XTjSCZ3LX",
          "JO9dP7zD1",
          "pNafs84zT",
        ].includes(a),
      Z = () => a !== "lVU25KIsK",
      D = () => !!["OtSX71sTU", "kc7aC3P2l"].includes(a),
      g = () => a === "mnNfk6f2w",
      oe = () => !!["y_lBCAqRP", "GmVAWTfaL", "v1W3w7FD4"].includes(a),
      I = () => !!["ZkygCb7DR", "c9Qk6uHGo"].includes(a),
      W = () => a !== "c9Qk6uHGo",
      $ = () => !!["NCKO0NgR2", "s_qou4L88"].includes(a),
      de = () => !!["v2mtFeAuk", "QCiXVrMlL"].includes(a),
      Ie = () => a !== "QCiXVrMlL",
      lt = () => !!["tiRcsvzuk", "XTjSCZ3LX"].includes(a),
      ke = () => a !== "XTjSCZ3LX",
      Be = () => !!["Od5xvdYEm", "JO9dP7zD1"].includes(a),
      Q = () => a !== "JO9dP7zD1",
      pt = () => !!["kMUl0Afd9", "pNafs84zT"].includes(a),
      he = () => a !== "pNafs84zT",
      De = ue(),
      ze = Se();
    return e(ne, {
      id: d ?? De,
      children: e(ci, {
        animate: V,
        initial: !1,
        children: e(w, {
          value: u,
          children: e(f.div, {
            ...C,
            ...v,
            className: E(N, "framer-1jk7sqm", p, b),
            "data-framer-name": "D-01-introduction",
            layoutDependency: c,
            layoutId: "ap20IZUme",
            ref: r ?? T,
            style: {
              backgroundColor:
                "var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151))",
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              ...s,
            },
            variants: {
              c9Qk6uHGo: {
                backgroundColor: "rgb(243, 245, 158)",
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              },
              GmVAWTfaL: {
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              },
              JO9dP7zD1: {
                backgroundColor:
                  "var(--token-7d2312d1-edd7-4229-828d-c62ca2e9628d, rgb(89, 252, 143))",
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              },
              kc7aC3P2l: {
                backgroundColor: "rgb(157, 245, 158)",
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              },
              lVU25KIsK: {
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              },
              NCKO0NgR2: { backgroundColor: "rgb(255, 88, 214)" },
              Od5xvdYEm: {
                backgroundColor:
                  "var(--token-7d2312d1-edd7-4229-828d-c62ca2e9628d, rgb(89, 252, 143))",
              },
              OtSX71sTU: { backgroundColor: "rgb(155, 245, 152)" },
              pNafs84zT: {
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              },
              QCiXVrMlL: {
                backgroundColor:
                  "var(--token-7d2312d1-edd7-4229-828d-c62ca2e9628d, rgb(89, 252, 143))",
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              },
              s_qou4L88: {
                backgroundColor: "rgb(254, 90, 210)",
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              },
              v1W3w7FD4: {
                backgroundColor: "rgb(254, 53, 147)",
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              },
              v2mtFeAuk: {
                backgroundColor:
                  "var(--token-7d2312d1-edd7-4229-828d-c62ca2e9628d, rgb(89, 252, 143))",
              },
              XTjSCZ3LX: {
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              },
              y_lBCAqRP: { backgroundColor: "rgb(255, 49, 149)" },
            },
            ...h(
              {
                c9Qk6uHGo: { "data-framer-name": "M-05-meetup" },
                GmVAWTfaL: { "data-framer-name": "M/03-magicmushrooms" },
                JO9dP7zD1: { "data-framer-name": "M-09-12inchs" },
                kc7aC3P2l: { "data-framer-name": "M-02-Mushrooms" },
                kMUl0Afd9: { "data-framer-name": "D-10-gaz-refexion" },
                lVU25KIsK: { "data-framer-name": "M/01-introduction" },
                mnNfk6f2w: { "data-framer-name": "D-03-magicmushrooms" },
                NCKO0NgR2: { "data-framer-name": "D-06-legend" },
                Od5xvdYEm: { "data-framer-name": "D-09-12inchs" },
                OtSX71sTU: { "data-framer-name": "D-02-Mushrooms" },
                pNafs84zT: { "data-framer-name": "M-10-gaz-refexion" },
                QCiXVrMlL: { "data-framer-name": "M-07-bff" },
                s_qou4L88: { "data-framer-name": "M-06-legend" },
                tiRcsvzuk: { "data-framer-name": "D-08-buttcoin" },
                v1W3w7FD4: { "data-framer-name": "M-04-crazymush" },
                v2mtFeAuk: { "data-framer-name": "D-07-bff" },
                XTjSCZ3LX: { "data-framer-name": "M-08-buttcoin" },
                y_lBCAqRP: { "data-framer-name": "D-04-crazymush" },
                ZkygCb7DR: { "data-framer-name": "D-05-meetup" },
              },
              a,
              m
            ),
            children: e(w, {
              value: u,
              children: _(f.div, {
                className: "framer-1w14b",
                "data-framer-name": "container",
                layoutDependency: c,
                layoutId: "FFGV_2HJu",
                children: [
                  G() &&
                    e(w, {
                      value: u,
                      children: _(f.div, {
                        className: "framer-6hgg7i",
                        "data-framer-name": "1",
                        layoutDependency: c,
                        layoutId: "z65tnLhxe",
                        style: {
                          borderBottomLeftRadius: 12,
                          borderBottomRightRadius: 12,
                          borderTopLeftRadius: 12,
                          borderTopRightRadius: 12,
                        },
                        children: [
                          e(w, {
                            value: u,
                            children: e(f.div, {
                              className: "framer-1c72o6e",
                              layoutDependency: c,
                              layoutId: "jjjxq1ZXJ",
                              children: e(w, {
                                value: u,
                                children: e(A, {
                                  __fromCanvasComponent: !0,
                                  children: e(k, {
                                    children: e(f.p, {
                                      style: {
                                        "--font-selector": "SW50ZXItQm9sZA==",
                                        "--framer-font-family":
                                          '"Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "12px",
                                        "--framer-font-weight": "700",
                                        "--framer-letter-spacing": "-0.01em",
                                        "--framer-line-height": "115%",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.95))",
                                        "--framer-text-transform": "uppercase",
                                      },
                                      children: "Lil frog?",
                                    }),
                                  }),
                                  className: "framer-1edys97",
                                  "data-framer-name": "Introduction",
                                  fonts: ["Inter-Bold"],
                                  layoutDependency: c,
                                  layoutId: "I2_e2uSRc",
                                  style: {
                                    "--extracted-r6o4lv": "rgba(0, 0, 0, 0.95)",
                                    "--framer-paragraph-spacing": "0px",
                                  },
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                          }),
                          Z() &&
                            e(w, {
                              value: u,
                              children: e(f.div, {
                                className: "framer-zn4ofe",
                                "data-framer-name": "split",
                                layoutDependency: c,
                                layoutId: "S9z_RC5Vt",
                                style: {
                                  backgroundColor: "rgb(0, 0, 0)",
                                  opacity: 0.2,
                                },
                              }),
                            }),
                          e(w, {
                            value: u,
                            children: e(f.div, {
                              className: "framer-1u7ayb6",
                              layoutDependency: c,
                              layoutId: "rmRbwiiK3",
                              children: e(w, {
                                value: u,
                                children: e(A, {
                                  __fromCanvasComponent: !0,
                                  children: e(k, {
                                    children: e(f.p, {
                                      style: {
                                        "--font-selector": "SW50ZXItTWVkaXVt",
                                        "--framer-font-family":
                                          '"Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "14px",
                                        "--framer-font-weight": "500",
                                        "--framer-letter-spacing": "-0.025em",
                                        "--framer-line-height": "115%",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.95))",
                                      },
                                      children:
                                        "Deep in a forgotten swamp, at the heart of a forest, lives Lil Frog, a humanoid frog with a one-item menu: magic mushrooms.",
                                    }),
                                  }),
                                  className: "framer-1423bre",
                                  "data-framer-name":
                                    "Deep in a forgotten swamp, at the heart of a forest lives Lil Frog, a humanoid frog with a one-item menu: magic mushrooms.",
                                  effect: Qt,
                                  fonts: ["Inter-Medium"],
                                  layoutDependency: c,
                                  layoutId: "DKekiIoNh",
                                  style: {
                                    "--extracted-r6o4lv": "rgba(0, 0, 0, 0.95)",
                                    "--framer-paragraph-spacing": "0px",
                                  },
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                  ...h(
                                    {
                                      lVU25KIsK: {
                                        children: e(k, {
                                          children: e(f.p, {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-letter-spacing":
                                                "-0.025em",
                                              "--framer-line-height": "115%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.95))",
                                            },
                                            children:
                                              "Deep in a forgotten swamp, at the heart of a forest, lives Lil Frog, a humanoid frog with a one-item menu: magic mushrooms.",
                                          }),
                                        }),
                                        effect: be,
                                      },
                                    },
                                    a,
                                    m
                                  ),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  D() &&
                    e(w, {
                      ...h({ OtSX71sTU: { value: u } }, a, m),
                      children: _(f.div, {
                        className: "framer-xdohff",
                        "data-framer-name": "2",
                        layoutDependency: c,
                        layoutId: "PClecmeFe",
                        style: {
                          borderBottomLeftRadius: 12,
                          borderBottomRightRadius: 12,
                          borderTopLeftRadius: 12,
                          borderTopRightRadius: 12,
                        },
                        children: [
                          e(w, {
                            ...h({ OtSX71sTU: { value: u } }, a, m),
                            children: e(f.div, {
                              className: "framer-1izbe7o",
                              layoutDependency: c,
                              layoutId: "upd9nR70O",
                              children: e(w, {
                                ...h({ OtSX71sTU: { value: u } }, a, m),
                                children: e(A, {
                                  __fromCanvasComponent: !0,
                                  children: e(k, {
                                    children: e(f.p, {
                                      style: {
                                        "--font-selector": "SW50ZXItQm9sZA==",
                                        "--framer-font-family":
                                          '"Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "12px",
                                        "--framer-font-weight": "700",
                                        "--framer-letter-spacing": "-0.01em",
                                        "--framer-line-height": "115%",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.95))",
                                        "--framer-text-transform": "uppercase",
                                      },
                                      children: "Mushrooms",
                                    }),
                                  }),
                                  className: "framer-pyy89k",
                                  "data-framer-name": "Introduction",
                                  effect: $o,
                                  fonts: ["Inter-Bold"],
                                  layoutDependency: c,
                                  layoutId: "G_XpLBl7C",
                                  style: {
                                    "--extracted-r6o4lv": "rgba(0, 0, 0, 0.95)",
                                    "--framer-paragraph-spacing": "0px",
                                  },
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                  ...h(
                                    {
                                      kc7aC3P2l: { effect: void 0 },
                                      OtSX71sTU: { effect: void 0 },
                                    },
                                    a,
                                    m
                                  ),
                                }),
                              }),
                            }),
                          }),
                          e(w, {
                            ...h({ OtSX71sTU: { value: u } }, a, m),
                            children: e(f.div, {
                              className: "framer-27gh2d",
                              "data-framer-name": "split",
                              layoutDependency: c,
                              layoutId: "qZPPGQ3cV",
                              style: {
                                backgroundColor: "rgb(0, 0, 0)",
                                opacity: 0.2,
                              },
                            }),
                          }),
                          e(w, {
                            ...h({ OtSX71sTU: { value: u } }, a, m),
                            children: e(f.div, {
                              className: "framer-on23iz",
                              layoutDependency: c,
                              layoutId: "p31ukhmas",
                              children: e(w, {
                                ...h({ OtSX71sTU: { value: u } }, a, m),
                                children: e(A, {
                                  __fromCanvasComponent: !0,
                                  children: e(k, {
                                    children: e(f.p, {
                                      style: {
                                        "--font-selector": "SW50ZXItTWVkaXVt",
                                        "--framer-font-family":
                                          '"Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "14px",
                                        "--framer-font-weight": "500",
                                        "--framer-letter-spacing": "-0.025em",
                                        "--framer-line-height": "115%",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.95))",
                                      },
                                      children:
                                        "Not the kind you toss in your pasta.",
                                    }),
                                  }),
                                  className: "framer-14yqg3y",
                                  "data-framer-name":
                                    "Deep in a forgotten swamp, at the heart of a forest lives Lil Frog, a humanoid frog with a one-item menu: magic mushrooms.",
                                  fonts: ["Inter-Medium"],
                                  layoutDependency: c,
                                  layoutId: "BNQtslBCw",
                                  style: {
                                    "--extracted-r6o4lv": "rgba(0, 0, 0, 0.95)",
                                    "--framer-paragraph-spacing": "0px",
                                  },
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                  ...h(
                                    {
                                      kc7aC3P2l: {
                                        children: e(k, {
                                          children: e(f.p, {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-letter-spacing":
                                                "-0.025em",
                                              "--framer-line-height": "115%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.95))",
                                            },
                                            children:
                                              "Not the kind you toss in your pasta.",
                                          }),
                                        }),
                                        effect: be,
                                      },
                                      OtSX71sTU: { effect: Qt },
                                    },
                                    a,
                                    m
                                  ),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  g() &&
                    e(w, {
                      value: u,
                      children: _(f.div, {
                        className: "framer-1owgiau",
                        "data-framer-name": "3",
                        layoutDependency: c,
                        layoutId: "zCYWh7KR4",
                        style: {
                          borderBottomLeftRadius: 12,
                          borderBottomRightRadius: 12,
                          borderTopLeftRadius: 12,
                          borderTopRightRadius: 12,
                        },
                        children: [
                          e(w, {
                            value: u,
                            children: e(f.div, {
                              className: "framer-1totk00",
                              layoutDependency: c,
                              layoutId: "ZWtQge8W0",
                              children: e(w, {
                                value: u,
                                children: e(A, {
                                  __fromCanvasComponent: !0,
                                  children: e(k, {
                                    children: e(f.p, {
                                      style: {
                                        "--font-selector": "SW50ZXItQm9sZA==",
                                        "--framer-font-family":
                                          '"Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "12px",
                                        "--framer-font-weight": "700",
                                        "--framer-letter-spacing": "-0.01em",
                                        "--framer-line-height": "115%",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.95))",
                                        "--framer-text-transform": "uppercase",
                                      },
                                      children: "Magic shrooms ",
                                    }),
                                  }),
                                  className: "framer-ttxx4w",
                                  "data-framer-name": "Introduction",
                                  effect: je,
                                  fonts: ["Inter-Bold"],
                                  layoutDependency: c,
                                  layoutId: "ZvKcCwTMg",
                                  style: {
                                    "--extracted-r6o4lv": "rgba(0, 0, 0, 0.95)",
                                    "--framer-paragraph-spacing": "0px",
                                  },
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                  ...h({ mnNfk6f2w: { effect: void 0 } }, a, m),
                                }),
                              }),
                            }),
                          }),
                          e(w, {
                            value: u,
                            children: e(f.div, {
                              className: "framer-374zzv",
                              "data-framer-name": "split",
                              layoutDependency: c,
                              layoutId: "Hb87lFnzq",
                              style: {
                                backgroundColor: "rgb(0, 0, 0)",
                                opacity: 0.2,
                              },
                            }),
                          }),
                          e(w, {
                            value: u,
                            children: e(f.div, {
                              className: "framer-1710euf",
                              layoutDependency: c,
                              layoutId: "mGRYQQTZy",
                              children: e(w, {
                                value: u,
                                children: e(A, {
                                  __fromCanvasComponent: !0,
                                  children: e(k, {
                                    children: e(f.p, {
                                      style: {
                                        "--font-selector": "SW50ZXItTWVkaXVt",
                                        "--framer-font-family":
                                          '"Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "14px",
                                        "--framer-font-weight": "500",
                                        "--framer-letter-spacing": "-0.025em",
                                        "--framer-line-height": "115%",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.95))",
                                      },
                                      children: "Or maybe\u2026 who cares.",
                                    }),
                                  }),
                                  className: "framer-tq68d5",
                                  "data-framer-name":
                                    "Deep in a forgotten swamp, at the heart of a forest lives Lil Frog, a humanoid frog with a one-item menu: magic mushrooms.",
                                  fonts: ["Inter-Medium"],
                                  layoutDependency: c,
                                  layoutId: "z86KFjnw8",
                                  style: {
                                    "--extracted-r6o4lv": "rgba(0, 0, 0, 0.95)",
                                    "--framer-paragraph-spacing": "0px",
                                  },
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                  ...h({ mnNfk6f2w: { effect: Qt } }, a, m),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  oe() &&
                    e(w, {
                      ...h({ y_lBCAqRP: { value: u } }, a, m),
                      children: _(f.div, {
                        className: "framer-11djac5",
                        "data-framer-name": "4",
                        layoutDependency: c,
                        layoutId: "nOhZXgpx5",
                        style: {
                          borderBottomLeftRadius: 12,
                          borderBottomRightRadius: 12,
                          borderTopLeftRadius: 12,
                          borderTopRightRadius: 12,
                        },
                        children: [
                          e(w, {
                            ...h({ y_lBCAqRP: { value: u } }, a, m),
                            children: e(f.div, {
                              className: "framer-1gnornq",
                              layoutDependency: c,
                              layoutId: "jbtABK95C",
                              children: e(w, {
                                ...h({ y_lBCAqRP: { value: u } }, a, m),
                                children: e(A, {
                                  __fromCanvasComponent: !0,
                                  children: e(k, {
                                    children: e(f.p, {
                                      style: {
                                        "--font-selector": "SW50ZXItQm9sZA==",
                                        "--framer-font-family":
                                          '"Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "12px",
                                        "--framer-font-weight": "700",
                                        "--framer-letter-spacing": "-0.01em",
                                        "--framer-line-height": "115%",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.95))",
                                        "--framer-text-transform": "uppercase",
                                      },
                                      children: "Crazy shrooms ",
                                    }),
                                  }),
                                  className: "framer-j6ut1l",
                                  "data-framer-name": "Introduction",
                                  effect: je,
                                  fonts: ["Inter-Bold"],
                                  layoutDependency: c,
                                  layoutId: "o4qSnmTuR",
                                  style: {
                                    "--extracted-r6o4lv": "rgba(0, 0, 0, 0.95)",
                                    "--framer-paragraph-spacing": "0px",
                                  },
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                  ...h(
                                    {
                                      GmVAWTfaL: { effect: void 0 },
                                      v1W3w7FD4: { effect: void 0 },
                                      y_lBCAqRP: { effect: void 0 },
                                    },
                                    a,
                                    m
                                  ),
                                }),
                              }),
                            }),
                          }),
                          e(w, {
                            ...h({ y_lBCAqRP: { value: u } }, a, m),
                            children: e(f.div, {
                              className: "framer-1ps0w74",
                              "data-framer-name": "split",
                              layoutDependency: c,
                              layoutId: "pWIu_IpJX",
                              style: {
                                backgroundColor: "rgb(0, 0, 0)",
                                opacity: 0.2,
                              },
                            }),
                          }),
                          e(w, {
                            ...h({ y_lBCAqRP: { value: u } }, a, m),
                            children: e(f.div, {
                              className: "framer-69f2jq",
                              layoutDependency: c,
                              layoutId: "QkHtHOSxI",
                              children: e(w, {
                                ...h({ y_lBCAqRP: { value: u } }, a, m),
                                children: e(A, {
                                  __fromCanvasComponent: !0,
                                  children: e(k, {
                                    children: e(f.p, {
                                      style: {
                                        "--font-selector": "SW50ZXItTWVkaXVt",
                                        "--framer-font-family":
                                          '"Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "14px",
                                        "--framer-font-weight": "500",
                                        "--framer-letter-spacing": "-0.025em",
                                        "--framer-line-height": "115%",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.95))",
                                      },
                                      children:
                                        "Woahhhhhh! PASTAAAAAAAAAAAAAAAAAAAAAAAA!",
                                    }),
                                  }),
                                  className: "framer-5qdt9m",
                                  "data-framer-name":
                                    "Deep in a forgotten swamp, at the heart of a forest lives Lil Frog, a humanoid frog with a one-item menu: magic mushrooms.",
                                  fonts: ["Inter-Medium"],
                                  layoutDependency: c,
                                  layoutId: "SNPLhGx8G",
                                  style: {
                                    "--extracted-r6o4lv": "rgba(0, 0, 0, 0.95)",
                                    "--framer-paragraph-spacing": "0px",
                                  },
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                  ...h(
                                    {
                                      GmVAWTfaL: {
                                        children: e(k, {
                                          children: e(f.p, {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-letter-spacing":
                                                "-0.025em",
                                              "--framer-line-height": "115%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.95))",
                                            },
                                            children:
                                              "Or maybe\u2026 who cares.",
                                          }),
                                        }),
                                        effect: be,
                                      },
                                      v1W3w7FD4: {
                                        children: e(k, {
                                          children: e(f.p, {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-letter-spacing":
                                                "-0.025em",
                                              "--framer-line-height": "115%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.95))",
                                            },
                                            children:
                                              "Woahhhhhh! PASTAAAAAAAAAAAAAAAAAAAAAAA!",
                                          }),
                                        }),
                                        effect: be,
                                      },
                                      y_lBCAqRP: { effect: ei },
                                    },
                                    a,
                                    m
                                  ),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  I() &&
                    e(w, {
                      ...h({ ZkygCb7DR: { value: u } }, a, m),
                      children: _(f.div, {
                        className: "framer-vozf0u",
                        "data-framer-name": "5",
                        layoutDependency: c,
                        layoutId: "bSFownFTI",
                        style: {
                          borderBottomLeftRadius: 12,
                          borderBottomRightRadius: 12,
                          borderTopLeftRadius: 12,
                          borderTopRightRadius: 12,
                        },
                        children: [
                          e(w, {
                            ...h({ ZkygCb7DR: { value: u } }, a, m),
                            children: e(f.div, {
                              className: "framer-6dv1qc",
                              layoutDependency: c,
                              layoutId: "JlLbKbRa1",
                              children: e(w, {
                                ...h({ ZkygCb7DR: { value: u } }, a, m),
                                children: e(A, {
                                  __fromCanvasComponent: !0,
                                  children: e(k, {
                                    children: e(f.p, {
                                      style: {
                                        "--font-selector": "SW50ZXItQm9sZA==",
                                        "--framer-font-family":
                                          '"Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "12px",
                                        "--framer-font-weight": "700",
                                        "--framer-letter-spacing": "-0.01em",
                                        "--framer-line-height": "115%",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.95))",
                                        "--framer-text-transform": "uppercase",
                                      },
                                      children: "Pepe",
                                    }),
                                  }),
                                  className: "framer-8mmfq4",
                                  "data-framer-name": "Introduction",
                                  effect: je,
                                  fonts: ["Inter-Bold"],
                                  layoutDependency: c,
                                  layoutId: "gcukPAmhv",
                                  style: {
                                    "--extracted-r6o4lv": "rgba(0, 0, 0, 0.95)",
                                    "--framer-paragraph-spacing": "0px",
                                  },
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                  ...h(
                                    {
                                      c9Qk6uHGo: { effect: void 0 },
                                      ZkygCb7DR: { effect: void 0 },
                                    },
                                    a,
                                    m
                                  ),
                                }),
                              }),
                            }),
                          }),
                          W() &&
                            e(w, {
                              value: u,
                              children: e(f.div, {
                                className: "framer-1j39dge",
                                "data-framer-name": "split",
                                layoutDependency: c,
                                layoutId: "NEdTgo4fw",
                                style: {
                                  backgroundColor: "rgb(0, 0, 0)",
                                  opacity: 0.2,
                                },
                              }),
                            }),
                          e(w, {
                            ...h({ ZkygCb7DR: { value: u } }, a, m),
                            children: e(f.div, {
                              className: "framer-62xkpw",
                              layoutDependency: c,
                              layoutId: "DHeCHsCCS",
                              children: e(w, {
                                ...h({ ZkygCb7DR: { value: u } }, a, m),
                                children: e(A, {
                                  __fromCanvasComponent: !0,
                                  children: e(k, {
                                    children: e(f.p, {
                                      style: {
                                        "--font-selector": "SW50ZXItTWVkaXVt",
                                        "--framer-font-family":
                                          '"Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "14px",
                                        "--framer-font-weight": "500",
                                        "--framer-letter-spacing": "-0.025em",
                                        "--framer-line-height": "115%",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.95))",
                                      },
                                      children:
                                        "One day, while Pepe was wandering through the mushroom forest, dodging the chaos of Memeworld fame, he stumbled upon the swamp.",
                                    }),
                                  }),
                                  className: "framer-810q2a",
                                  "data-framer-name":
                                    "Deep in a forgotten swamp, at the heart of a forest lives Lil Frog, a humanoid frog with a one-item menu: magic mushrooms.",
                                  fonts: ["Inter-Medium"],
                                  layoutDependency: c,
                                  layoutId: "LxwnWYCSB",
                                  style: {
                                    "--extracted-r6o4lv": "rgba(0, 0, 0, 0.95)",
                                    "--framer-paragraph-spacing": "0px",
                                  },
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                  ...h(
                                    {
                                      c9Qk6uHGo: {
                                        children: e(k, {
                                          children: e(f.p, {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-letter-spacing":
                                                "-0.025em",
                                              "--framer-line-height": "115%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.95))",
                                            },
                                            children:
                                              "One day, while Pepe was wandering through the mushroom forest, dodging the chaos of Memeworld fame, he stumbled upon the swamp.",
                                          }),
                                        }),
                                        effect: be,
                                      },
                                      ZkygCb7DR: { effect: Qt },
                                    },
                                    a,
                                    m
                                  ),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  $() &&
                    e(w, {
                      ...h({ NCKO0NgR2: { value: u } }, a, m),
                      children: _(f.div, {
                        className: "framer-1840efa",
                        "data-framer-name": "6",
                        layoutDependency: c,
                        layoutId: "QGMl4_hb1",
                        style: {
                          borderBottomLeftRadius: 12,
                          borderBottomRightRadius: 12,
                          borderTopLeftRadius: 12,
                          borderTopRightRadius: 12,
                        },
                        children: [
                          e(w, {
                            ...h({ NCKO0NgR2: { value: u } }, a, m),
                            children: e(f.div, {
                              className: "framer-1yv0kva",
                              layoutDependency: c,
                              layoutId: "Hzz24dLQC",
                              children: e(w, {
                                ...h({ NCKO0NgR2: { value: u } }, a, m),
                                children: e(A, {
                                  __fromCanvasComponent: !0,
                                  children: e(k, {
                                    children: e(f.p, {
                                      style: {
                                        "--font-selector": "SW50ZXItQm9sZA==",
                                        "--framer-font-family":
                                          '"Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "12px",
                                        "--framer-font-weight": "700",
                                        "--framer-letter-spacing": "-0.01em",
                                        "--framer-line-height": "115%",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.95))",
                                        "--framer-text-transform": "uppercase",
                                      },
                                      children: "Lil frog the legend",
                                    }),
                                  }),
                                  className: "framer-1fpy30i",
                                  "data-framer-name": "Introduction",
                                  effect: je,
                                  fonts: ["Inter-Bold"],
                                  layoutDependency: c,
                                  layoutId: "NrFCEEspW",
                                  style: {
                                    "--extracted-r6o4lv": "rgba(0, 0, 0, 0.95)",
                                    "--framer-paragraph-spacing": "0px",
                                  },
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                  ...h(
                                    {
                                      NCKO0NgR2: { effect: void 0 },
                                      s_qou4L88: { effect: void 0 },
                                    },
                                    a,
                                    m
                                  ),
                                }),
                              }),
                            }),
                          }),
                          e(w, {
                            ...h({ NCKO0NgR2: { value: u } }, a, m),
                            children: e(f.div, {
                              className: "framer-187upc0",
                              "data-framer-name": "split",
                              layoutDependency: c,
                              layoutId: "I4urflL4d",
                              style: {
                                backgroundColor: "rgb(0, 0, 0)",
                                opacity: 0.2,
                              },
                            }),
                          }),
                          e(w, {
                            ...h({ NCKO0NgR2: { value: u } }, a, m),
                            children: e(f.div, {
                              className: "framer-18xqwzp",
                              layoutDependency: c,
                              layoutId: "IoPOqsdBJ",
                              children: e(w, {
                                ...h({ NCKO0NgR2: { value: u } }, a, m),
                                children: e(A, {
                                  __fromCanvasComponent: !0,
                                  children: e(k, {
                                    children: e(f.p, {
                                      style: {
                                        "--font-selector": "SW50ZXItTWVkaXVt",
                                        "--framer-font-family":
                                          '"Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "14px",
                                        "--framer-font-weight": "500",
                                        "--framer-letter-spacing": "-0.025em",
                                        "--framer-line-height": "115%",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.95))",
                                      },
                                      children:
                                        "And jackpot: he didn\u2019t just find a frog\u2014he found a fuken legend.",
                                    }),
                                  }),
                                  className: "framer-97ftmf",
                                  "data-framer-name":
                                    "Deep in a forgotten swamp, at the heart of a forest lives Lil Frog, a humanoid frog with a one-item menu: magic mushrooms.",
                                  fonts: ["Inter-Medium"],
                                  layoutDependency: c,
                                  layoutId: "YNG6uoGdE",
                                  style: {
                                    "--extracted-r6o4lv": "rgba(0, 0, 0, 0.95)",
                                    "--framer-paragraph-spacing": "0px",
                                  },
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                  ...h(
                                    {
                                      NCKO0NgR2: { effect: be },
                                      s_qou4L88: {
                                        children: e(k, {
                                          children: e(f.p, {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-letter-spacing":
                                                "-0.025em",
                                              "--framer-line-height": "115%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.95))",
                                            },
                                            children:
                                              "And jackpot: he didn\u2019t just find a frog\u2014he found a fuken legend.",
                                          }),
                                        }),
                                        effect: be,
                                      },
                                    },
                                    a,
                                    m
                                  ),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  de() &&
                    e(w, {
                      ...h({ v2mtFeAuk: { value: u } }, a, m),
                      children: _(f.div, {
                        className: "framer-186pnli",
                        "data-framer-name": "7",
                        layoutDependency: c,
                        layoutId: "FFXWpB11y",
                        style: {
                          borderBottomLeftRadius: 12,
                          borderBottomRightRadius: 12,
                          borderTopLeftRadius: 12,
                          borderTopRightRadius: 12,
                        },
                        children: [
                          e(w, {
                            ...h({ v2mtFeAuk: { value: u } }, a, m),
                            children: e(f.div, {
                              className: "framer-h8yhen",
                              layoutDependency: c,
                              layoutId: "Zfu88NuPg",
                              children: e(w, {
                                ...h({ v2mtFeAuk: { value: u } }, a, m),
                                children: e(A, {
                                  __fromCanvasComponent: !0,
                                  children: e(k, {
                                    children: e(f.p, {
                                      style: {
                                        "--font-selector": "SW50ZXItQm9sZA==",
                                        "--framer-font-family":
                                          '"Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "12px",
                                        "--framer-font-weight": "700",
                                        "--framer-letter-spacing": "-0.01em",
                                        "--framer-line-height": "115%",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.95))",
                                        "--framer-text-transform": "uppercase",
                                      },
                                      children: "Mushies BFF",
                                    }),
                                  }),
                                  className: "framer-1tahquw",
                                  "data-framer-name": "Introduction",
                                  effect: je,
                                  fonts: ["Inter-Bold"],
                                  layoutDependency: c,
                                  layoutId: "tSlnsv3px",
                                  style: {
                                    "--extracted-r6o4lv": "rgba(0, 0, 0, 0.95)",
                                    "--framer-paragraph-spacing": "0px",
                                  },
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                  ...h(
                                    {
                                      QCiXVrMlL: { effect: void 0 },
                                      v2mtFeAuk: { effect: void 0 },
                                    },
                                    a,
                                    m
                                  ),
                                }),
                              }),
                            }),
                          }),
                          Ie() &&
                            e(w, {
                              value: u,
                              children: e(f.div, {
                                className: "framer-d0vdjy",
                                "data-framer-name": "split",
                                layoutDependency: c,
                                layoutId: "nLCZA6Qmg",
                                style: {
                                  backgroundColor: "rgb(0, 0, 0)",
                                  opacity: 0.2,
                                },
                              }),
                            }),
                          e(w, {
                            ...h({ v2mtFeAuk: { value: u } }, a, m),
                            children: e(f.div, {
                              className: "framer-1vm9rcd",
                              layoutDependency: c,
                              layoutId: "KqPJQeykP",
                              children: e(w, {
                                ...h({ v2mtFeAuk: { value: u } }, a, m),
                                children: e(A, {
                                  __fromCanvasComponent: !0,
                                  children: e(k, {
                                    children: e(f.p, {
                                      style: {
                                        "--font-selector": "SW50ZXItTWVkaXVt",
                                        "--framer-font-family":
                                          '"Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "14px",
                                        "--framer-font-weight": "500",
                                        "--framer-letter-spacing": "-0.025em",
                                        "--framer-line-height": "115%",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.95))",
                                      },
                                      children:
                                        "They clicked instantly, bonding over their shared love of trippy escapades and staying under the radar.",
                                    }),
                                  }),
                                  className: "framer-sveyiz",
                                  "data-framer-name":
                                    "Deep in a forgotten swamp, at the heart of a forest lives Lil Frog, a humanoid frog with a one-item menu: magic mushrooms.",
                                  effect: ti,
                                  fonts: ["Inter-Medium"],
                                  layoutDependency: c,
                                  layoutId: "eja3ouCVp",
                                  style: {
                                    "--extracted-r6o4lv": "rgba(0, 0, 0, 0.95)",
                                    "--framer-paragraph-spacing": "0px",
                                  },
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                  ...h(
                                    {
                                      QCiXVrMlL: {
                                        children: e(k, {
                                          children: e(f.p, {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-letter-spacing":
                                                "-0.025em",
                                              "--framer-line-height": "115%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.95))",
                                            },
                                            children:
                                              "They clicked instantly, bonding over their shared love of trippy escapades and staying under the radar.",
                                          }),
                                        }),
                                        effect: ni,
                                      },
                                      v2mtFeAuk: { effect: ai },
                                    },
                                    a,
                                    m
                                  ),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  lt() &&
                    e(w, {
                      ...h({ tiRcsvzuk: { value: u } }, a, m),
                      children: _(f.div, {
                        className: "framer-1t7a51i",
                        "data-framer-name": "8",
                        layoutDependency: c,
                        layoutId: "NUhmZ48tt",
                        style: {
                          borderBottomLeftRadius: 12,
                          borderBottomRightRadius: 12,
                          borderTopLeftRadius: 12,
                          borderTopRightRadius: 12,
                        },
                        children: [
                          e(w, {
                            ...h({ tiRcsvzuk: { value: u } }, a, m),
                            children: e(f.div, {
                              className: "framer-ayxyh7",
                              layoutDependency: c,
                              layoutId: "fyspOmplv",
                              children: e(w, {
                                ...h({ tiRcsvzuk: { value: u } }, a, m),
                                children: e(A, {
                                  __fromCanvasComponent: !0,
                                  children: e(k, {
                                    children: e(f.p, {
                                      style: {
                                        "--font-selector": "SW50ZXItQm9sZA==",
                                        "--framer-font-family":
                                          '"Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "12px",
                                        "--framer-font-weight": "700",
                                        "--framer-letter-spacing": "-0.01em",
                                        "--framer-line-height": "115%",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.95))",
                                        "--framer-text-transform": "uppercase",
                                      },
                                      children: "Buttcoin",
                                    }),
                                  }),
                                  className: "framer-rtn5ir",
                                  "data-framer-name": "Introduction",
                                  effect: je,
                                  fonts: ["Inter-Bold"],
                                  layoutDependency: c,
                                  layoutId: "vHOnjtExu",
                                  style: {
                                    "--extracted-r6o4lv": "rgba(0, 0, 0, 0.95)",
                                    "--framer-paragraph-spacing": "0px",
                                  },
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                  ...h(
                                    {
                                      tiRcsvzuk: { effect: void 0 },
                                      XTjSCZ3LX: { effect: void 0 },
                                    },
                                    a,
                                    m
                                  ),
                                }),
                              }),
                            }),
                          }),
                          ke() &&
                            e(w, {
                              value: u,
                              children: e(f.div, {
                                className: "framer-f0dh7d",
                                "data-framer-name": "split",
                                layoutDependency: c,
                                layoutId: "La4uA8Tic",
                                style: {
                                  backgroundColor: "rgb(0, 0, 0)",
                                  opacity: 0.2,
                                },
                              }),
                            }),
                          e(w, {
                            ...h({ tiRcsvzuk: { value: u } }, a, m),
                            children: e(f.div, {
                              className: "framer-1w96nuu",
                              layoutDependency: c,
                              layoutId: "cVHAKOiLw",
                              children: e(w, {
                                ...h({ tiRcsvzuk: { value: u } }, a, m),
                                children: e(A, {
                                  __fromCanvasComponent: !0,
                                  children: e(k, {
                                    children: e(f.p, {
                                      style: {
                                        "--font-selector": "SW50ZXItTWVkaXVt",
                                        "--framer-font-family":
                                          '"Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "14px",
                                        "--framer-font-weight": "500",
                                        "--framer-letter-spacing": "-0.025em",
                                        "--framer-line-height": "115%",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.95))",
                                      },
                                      children:
                                        "Whenever Pepe runs low on cash, he knows exactly where to go: his magical buddy\u2019s swamp. Why? Because Lil Frog has a very, uh, unique gift: he can literally shit money. Yep, you read that right.",
                                    }),
                                  }),
                                  className: "framer-195g8az",
                                  "data-framer-name":
                                    "Deep in a forgotten swamp, at the heart of a forest lives Lil Frog, a humanoid frog with a one-item menu: magic mushrooms.",
                                  fonts: ["Inter-Medium"],
                                  layoutDependency: c,
                                  layoutId: "KXq6ihJ2J",
                                  style: {
                                    "--extracted-r6o4lv": "rgba(0, 0, 0, 0.95)",
                                    "--framer-paragraph-spacing": "0px",
                                  },
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                  ...h(
                                    {
                                      tiRcsvzuk: { effect: be },
                                      XTjSCZ3LX: {
                                        children: e(k, {
                                          children: e(f.p, {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-letter-spacing":
                                                "-0.025em",
                                              "--framer-line-height": "115%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.95))",
                                            },
                                            children:
                                              "Whenever Pepe runs low on cash, he knows exactly where to go: his magical buddy\u2019s swamp. Why? Because Lil Frog has a very, uh, unique gift: he can literally shit money. Yep, you read that right.",
                                          }),
                                        }),
                                        effect: be,
                                      },
                                    },
                                    a,
                                    m
                                  ),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  Be() &&
                    e(w, {
                      ...h({ Od5xvdYEm: { value: u } }, a, m),
                      children: _(f.div, {
                        className: "framer-1ekvvzq",
                        "data-framer-name": "9",
                        layoutDependency: c,
                        layoutId: "UDrcPzaJm",
                        style: {
                          borderBottomLeftRadius: 12,
                          borderBottomRightRadius: 12,
                          borderTopLeftRadius: 12,
                          borderTopRightRadius: 12,
                        },
                        children: [
                          e(w, {
                            ...h({ Od5xvdYEm: { value: u } }, a, m),
                            children: e(f.div, {
                              className: "framer-jnvxxg",
                              layoutDependency: c,
                              layoutId: "M8biubbyV",
                              children: e(w, {
                                ...h({ Od5xvdYEm: { value: u } }, a, m),
                                children: e(A, {
                                  __fromCanvasComponent: !0,
                                  children: e(k, {
                                    children: e(f.p, {
                                      style: {
                                        "--font-selector": "SW50ZXItQm9sZA==",
                                        "--framer-font-family":
                                          '"Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "12px",
                                        "--framer-font-weight": "700",
                                        "--framer-letter-spacing": "-0.01em",
                                        "--framer-line-height": "115%",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.95))",
                                        "--framer-text-transform": "uppercase",
                                      },
                                      children: "Max out your green",
                                    }),
                                  }),
                                  className: "framer-v2nob1",
                                  "data-framer-name": "Introduction",
                                  effect: je,
                                  fonts: ["Inter-Bold"],
                                  layoutDependency: c,
                                  layoutId: "S8HX1kJTw",
                                  style: {
                                    "--extracted-r6o4lv": "rgba(0, 0, 0, 0.95)",
                                    "--framer-paragraph-spacing": "0px",
                                  },
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                  ...h(
                                    {
                                      JO9dP7zD1: { effect: void 0 },
                                      Od5xvdYEm: { effect: void 0 },
                                    },
                                    a,
                                    m
                                  ),
                                }),
                              }),
                            }),
                          }),
                          Q() &&
                            e(w, {
                              value: u,
                              children: e(f.div, {
                                className: "framer-1ok8trn",
                                "data-framer-name": "split",
                                layoutDependency: c,
                                layoutId: "MG2RM5SXc",
                                style: {
                                  backgroundColor: "rgb(0, 0, 0)",
                                  opacity: 0.2,
                                },
                              }),
                            }),
                          e(w, {
                            ...h({ Od5xvdYEm: { value: u } }, a, m),
                            children: e(f.div, {
                              className: "framer-1v1ecfa",
                              layoutDependency: c,
                              layoutId: "NS19VA8ne",
                              children: e(w, {
                                ...h({ Od5xvdYEm: { value: u } }, a, m),
                                children: e(A, {
                                  __fromCanvasComponent: !0,
                                  children: e(k, {
                                    children: e(f.p, {
                                      style: {
                                        "--font-selector": "SW50ZXItTWVkaXVt",
                                        "--framer-font-family":
                                          '"Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "14px",
                                        "--framer-font-weight": "500",
                                        "--framer-letter-spacing": "-0.025em",
                                        "--framer-line-height": "115%",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.95))",
                                      },
                                      children:
                                        "Oh, and he can also extend anything green up to 12 inches. Wink wink. That\u2019s why Pepe keeps him a secret. You\u2019d keep it too.",
                                    }),
                                  }),
                                  className: "framer-1qhk62a",
                                  "data-framer-name":
                                    "Deep in a forgotten swamp, at the heart of a forest lives Lil Frog, a humanoid frog with a one-item menu: magic mushrooms.",
                                  fonts: ["Inter-Medium"],
                                  layoutDependency: c,
                                  layoutId: "dmeJaSNV_",
                                  style: {
                                    "--extracted-r6o4lv": "rgba(0, 0, 0, 0.95)",
                                    "--framer-paragraph-spacing": "0px",
                                  },
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                  ...h(
                                    {
                                      JO9dP7zD1: {
                                        children: e(k, {
                                          children: e(f.p, {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-letter-spacing":
                                                "-0.025em",
                                              "--framer-line-height": "115%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.95))",
                                            },
                                            children:
                                              "Oh, and he can also extend anything green up to 12 inches. Wink wink. That\u2019s why Pepe keeps him a secret. You\u2019d keep it too.",
                                          }),
                                        }),
                                        effect: be,
                                      },
                                      Od5xvdYEm: { effect: be },
                                    },
                                    a,
                                    m
                                  ),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  pt() &&
                    e(w, {
                      ...h({ kMUl0Afd9: { value: u } }, a, m),
                      children: _(f.div, {
                        className: "framer-1umhcsw",
                        "data-framer-name": "10",
                        layoutDependency: c,
                        layoutId: "qfOUpPUtu",
                        style: {
                          borderBottomLeftRadius: 12,
                          borderBottomRightRadius: 12,
                          borderTopLeftRadius: 12,
                          borderTopRightRadius: 12,
                        },
                        children: [
                          e(w, {
                            ...h({ kMUl0Afd9: { value: u } }, a, m),
                            children: e(f.div, {
                              className: "framer-cdvny5",
                              layoutDependency: c,
                              layoutId: "CJFT5qxPP",
                              children: e(w, {
                                ...h({ kMUl0Afd9: { value: u } }, a, m),
                                children: e(A, {
                                  __fromCanvasComponent: !0,
                                  children: e(k, {
                                    children: e(f.p, {
                                      style: {
                                        "--font-selector": "SW50ZXItQm9sZA==",
                                        "--framer-font-family":
                                          '"Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "12px",
                                        "--framer-font-weight": "700",
                                        "--framer-letter-spacing": "-0.01em",
                                        "--framer-line-height": "115%",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.95))",
                                        "--framer-text-transform": "uppercase",
                                      },
                                      children: "Swamp Gas Revelations",
                                    }),
                                  }),
                                  className: "framer-mt8wg6",
                                  "data-framer-name": "Introduction",
                                  effect: je,
                                  fonts: ["Inter-Bold"],
                                  layoutDependency: c,
                                  layoutId: "PWxEjrXT8",
                                  style: {
                                    "--extracted-r6o4lv": "rgba(0, 0, 0, 0.95)",
                                    "--framer-paragraph-spacing": "0px",
                                  },
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                  ...h(
                                    {
                                      kMUl0Afd9: { effect: void 0 },
                                      pNafs84zT: { effect: void 0 },
                                    },
                                    a,
                                    m
                                  ),
                                }),
                              }),
                            }),
                          }),
                          he() &&
                            e(w, {
                              value: u,
                              children: e(f.div, {
                                className: "framer-1q55c4w",
                                "data-framer-name": "split",
                                layoutDependency: c,
                                layoutId: "ztGNibksS",
                                style: {
                                  backgroundColor: "rgb(0, 0, 0)",
                                  opacity: 0.2,
                                },
                              }),
                            }),
                          e(w, {
                            ...h({ kMUl0Afd9: { value: u } }, a, m),
                            children: e(f.div, {
                              className: "framer-pe4gcs",
                              layoutDependency: c,
                              layoutId: "iv3elyskO",
                              children: e(w, {
                                ...h({ kMUl0Afd9: { value: u } }, a, m),
                                children: e(A, {
                                  __fromCanvasComponent: !0,
                                  children: e(k, {
                                    children: e(f.p, {
                                      style: {
                                        "--font-selector": "SW50ZXItTWVkaXVt",
                                        "--framer-font-family":
                                          '"Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "14px",
                                        "--framer-font-weight": "500",
                                        "--framer-letter-spacing": "-0.025em",
                                        "--framer-line-height": "115%",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.95))",
                                      },
                                      children:
                                        "But, of course, incredible powers come at a cost. To operate at full capacity, Lil Frog has to be buzzed out of his tiny froggy mind. And when he\u2019s buzzed, he gets way too introspective. Like, \u201Cphilosophy of farts\u201D level introspective. See, his powers also trigger mystical flatulence that Pepe has to deal with. Not that Pepe minds\u2014he finds it hilarious.",
                                    }),
                                  }),
                                  className: "framer-mflm6k",
                                  "data-framer-name":
                                    "Deep in a forgotten swamp, at the heart of a forest lives Lil Frog, a humanoid frog with a one-item menu: magic mushrooms.",
                                  fonts: ["Inter-Medium"],
                                  layoutDependency: c,
                                  layoutId: "YXfvWiRbt",
                                  style: {
                                    "--extracted-r6o4lv": "rgba(0, 0, 0, 0.95)",
                                    "--framer-paragraph-spacing": "0px",
                                  },
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                  ...h(
                                    {
                                      kMUl0Afd9: { effect: be },
                                      pNafs84zT: {
                                        children: e(k, {
                                          children: e(f.p, {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-letter-spacing":
                                                "-0.025em",
                                              "--framer-line-height": "115%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.95))",
                                            },
                                            children:
                                              "But, of course, incredible powers come at a cost. To operate at full capacity, Lil Frog has to be buzzed out of his tiny froggy mind. And when he\u2019s buzzed, he gets way too introspective. Like, \u201Cphilosophy of farts\u201D level introspective. See, his powers also trigger mystical flatulence that Pepe has to deal with. Not that Pepe minds\u2014he finds it hilarious.",
                                          }),
                                        }),
                                        effect: ii,
                                      },
                                    },
                                    a,
                                    m
                                  ),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                ],
              }),
            }),
          }),
        }),
      }),
    });
  }),
  pi = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-75DvK.framer-biwqwc, .framer-75DvK .framer-biwqwc { display: block; }",
    ".framer-75DvK.framer-1jk7sqm { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 639px; }",
    ".framer-75DvK .framer-1w14b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 639px; }",
    ".framer-75DvK .framer-6hgg7i, .framer-75DvK .framer-xdohff, .framer-75DvK .framer-1owgiau, .framer-75DvK .framer-11djac5, .framer-75DvK .framer-vozf0u, .framer-75DvK .framer-1840efa, .framer-75DvK .framer-186pnli, .framer-75DvK .framer-1t7a51i, .framer-75DvK .framer-1ekvvzq, .framer-75DvK .framer-1umhcsw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; min-height: 48px; overflow: hidden; padding: 0px 8px 0px 16px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }",
    ".framer-75DvK .framer-1c72o6e, .framer-75DvK .framer-1izbe7o, .framer-75DvK .framer-1totk00, .framer-75DvK .framer-1gnornq, .framer-75DvK .framer-6dv1qc, .framer-75DvK .framer-1yv0kva, .framer-75DvK .framer-h8yhen, .framer-75DvK .framer-ayxyh7, .framer-75DvK .framer-jnvxxg, .framer-75DvK .framer-cdvny5 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 4px 0px 4px 0px; position: relative; width: 1px; }",
    ".framer-75DvK .framer-1edys97, .framer-75DvK .framer-pyy89k, .framer-75DvK .framer-ttxx4w, .framer-75DvK .framer-j6ut1l, .framer-75DvK .framer-8mmfq4, .framer-75DvK .framer-1fpy30i, .framer-75DvK .framer-1tahquw, .framer-75DvK .framer-rtn5ir, .framer-75DvK .framer-v2nob1, .framer-75DvK .framer-mt8wg6 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 152px; word-break: break-word; word-wrap: break-word; }",
    ".framer-75DvK .framer-zn4ofe, .framer-75DvK .framer-27gh2d, .framer-75DvK .framer-374zzv, .framer-75DvK .framer-1ps0w74, .framer-75DvK .framer-1j39dge, .framer-75DvK .framer-187upc0, .framer-75DvK .framer-d0vdjy, .framer-75DvK .framer-f0dh7d, .framer-75DvK .framer-1ok8trn, .framer-75DvK .framer-1q55c4w { align-self: stretch; flex: none; height: auto; position: relative; width: 1px; }",
    ".framer-75DvK .framer-1u7ayb6, .framer-75DvK .framer-62xkpw { align-content: center; align-items: center; display: flex; flex: 2.75 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 8px 0px 8px 0px; position: relative; width: 1px; }",
    ".framer-75DvK .framer-1423bre, .framer-75DvK .framer-810q2a { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-75DvK .framer-on23iz, .framer-75DvK .framer-1710euf, .framer-75DvK .framer-69f2jq, .framer-75DvK .framer-1w96nuu, .framer-75DvK .framer-1v1ecfa, .framer-75DvK .framer-pe4gcs { align-content: center; align-items: center; display: flex; flex: 2.75 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 8px 0px 8px 0px; position: relative; width: 1px; }",
    ".framer-75DvK .framer-14yqg3y, .framer-75DvK .framer-tq68d5, .framer-75DvK .framer-5qdt9m, .framer-75DvK .framer-97ftmf, .framer-75DvK .framer-sveyiz, .framer-75DvK .framer-195g8az, .framer-75DvK .framer-1qhk62a, .framer-75DvK .framer-mflm6k { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-75DvK .framer-18xqwzp, .framer-75DvK .framer-1vm9rcd { align-content: center; align-items: center; display: flex; flex: 2.75 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 4px 0px 4px 0px; position: relative; width: 1px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-75DvK.framer-1jk7sqm, .framer-75DvK .framer-1w14b, .framer-75DvK .framer-6hgg7i, .framer-75DvK .framer-1c72o6e, .framer-75DvK .framer-1u7ayb6, .framer-75DvK .framer-xdohff, .framer-75DvK .framer-1izbe7o, .framer-75DvK .framer-on23iz, .framer-75DvK .framer-1owgiau, .framer-75DvK .framer-1totk00, .framer-75DvK .framer-1710euf, .framer-75DvK .framer-11djac5, .framer-75DvK .framer-1gnornq, .framer-75DvK .framer-69f2jq, .framer-75DvK .framer-vozf0u, .framer-75DvK .framer-6dv1qc, .framer-75DvK .framer-62xkpw, .framer-75DvK .framer-1840efa, .framer-75DvK .framer-1yv0kva, .framer-75DvK .framer-18xqwzp, .framer-75DvK .framer-186pnli, .framer-75DvK .framer-h8yhen, .framer-75DvK .framer-1vm9rcd, .framer-75DvK .framer-1t7a51i, .framer-75DvK .framer-ayxyh7, .framer-75DvK .framer-1w96nuu, .framer-75DvK .framer-1ekvvzq, .framer-75DvK .framer-jnvxxg, .framer-75DvK .framer-1v1ecfa, .framer-75DvK .framer-1umhcsw, .framer-75DvK .framer-cdvny5, .framer-75DvK .framer-pe4gcs { gap: 0px; } .framer-75DvK.framer-1jk7sqm > *, .framer-75DvK .framer-1c72o6e > *, .framer-75DvK .framer-1izbe7o > *, .framer-75DvK .framer-on23iz > *, .framer-75DvK .framer-1totk00 > *, .framer-75DvK .framer-1710euf > *, .framer-75DvK .framer-1gnornq > *, .framer-75DvK .framer-69f2jq > *, .framer-75DvK .framer-6dv1qc > *, .framer-75DvK .framer-1yv0kva > *, .framer-75DvK .framer-18xqwzp > *, .framer-75DvK .framer-h8yhen > *, .framer-75DvK .framer-1vm9rcd > *, .framer-75DvK .framer-ayxyh7 > *, .framer-75DvK .framer-1w96nuu > *, .framer-75DvK .framer-jnvxxg > *, .framer-75DvK .framer-1v1ecfa > *, .framer-75DvK .framer-cdvny5 > *, .framer-75DvK .framer-pe4gcs > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-75DvK.framer-1jk7sqm > :first-child, .framer-75DvK .framer-6hgg7i > :first-child, .framer-75DvK .framer-1c72o6e > :first-child, .framer-75DvK .framer-xdohff > :first-child, .framer-75DvK .framer-1izbe7o > :first-child, .framer-75DvK .framer-on23iz > :first-child, .framer-75DvK .framer-1owgiau > :first-child, .framer-75DvK .framer-1totk00 > :first-child, .framer-75DvK .framer-1710euf > :first-child, .framer-75DvK .framer-11djac5 > :first-child, .framer-75DvK .framer-1gnornq > :first-child, .framer-75DvK .framer-69f2jq > :first-child, .framer-75DvK .framer-vozf0u > :first-child, .framer-75DvK .framer-6dv1qc > :first-child, .framer-75DvK .framer-1840efa > :first-child, .framer-75DvK .framer-1yv0kva > :first-child, .framer-75DvK .framer-18xqwzp > :first-child, .framer-75DvK .framer-186pnli > :first-child, .framer-75DvK .framer-h8yhen > :first-child, .framer-75DvK .framer-1vm9rcd > :first-child, .framer-75DvK .framer-1t7a51i > :first-child, .framer-75DvK .framer-ayxyh7 > :first-child, .framer-75DvK .framer-1w96nuu > :first-child, .framer-75DvK .framer-1ekvvzq > :first-child, .framer-75DvK .framer-jnvxxg > :first-child, .framer-75DvK .framer-1v1ecfa > :first-child, .framer-75DvK .framer-1umhcsw > :first-child, .framer-75DvK .framer-cdvny5 > :first-child, .framer-75DvK .framer-pe4gcs > :first-child { margin-left: 0px; } .framer-75DvK.framer-1jk7sqm > :last-child, .framer-75DvK .framer-6hgg7i > :last-child, .framer-75DvK .framer-1c72o6e > :last-child, .framer-75DvK .framer-xdohff > :last-child, .framer-75DvK .framer-1izbe7o > :last-child, .framer-75DvK .framer-on23iz > :last-child, .framer-75DvK .framer-1owgiau > :last-child, .framer-75DvK .framer-1totk00 > :last-child, .framer-75DvK .framer-1710euf > :last-child, .framer-75DvK .framer-11djac5 > :last-child, .framer-75DvK .framer-1gnornq > :last-child, .framer-75DvK .framer-69f2jq > :last-child, .framer-75DvK .framer-vozf0u > :last-child, .framer-75DvK .framer-6dv1qc > :last-child, .framer-75DvK .framer-1840efa > :last-child, .framer-75DvK .framer-1yv0kva > :last-child, .framer-75DvK .framer-18xqwzp > :last-child, .framer-75DvK .framer-186pnli > :last-child, .framer-75DvK .framer-h8yhen > :last-child, .framer-75DvK .framer-1vm9rcd > :last-child, .framer-75DvK .framer-1t7a51i > :last-child, .framer-75DvK .framer-ayxyh7 > :last-child, .framer-75DvK .framer-1w96nuu > :last-child, .framer-75DvK .framer-1ekvvzq > :last-child, .framer-75DvK .framer-jnvxxg > :last-child, .framer-75DvK .framer-1v1ecfa > :last-child, .framer-75DvK .framer-1umhcsw > :last-child, .framer-75DvK .framer-cdvny5 > :last-child, .framer-75DvK .framer-pe4gcs > :last-child { margin-right: 0px; } .framer-75DvK .framer-1w14b > *, .framer-75DvK .framer-1u7ayb6 > *, .framer-75DvK .framer-62xkpw > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-75DvK .framer-1w14b > :first-child, .framer-75DvK .framer-1u7ayb6 > :first-child, .framer-75DvK .framer-62xkpw > :first-child { margin-top: 0px; } .framer-75DvK .framer-1w14b > :last-child, .framer-75DvK .framer-1u7ayb6 > :last-child, .framer-75DvK .framer-62xkpw > :last-child { margin-bottom: 0px; } .framer-75DvK .framer-6hgg7i > *, .framer-75DvK .framer-xdohff > *, .framer-75DvK .framer-1owgiau > *, .framer-75DvK .framer-11djac5 > *, .framer-75DvK .framer-vozf0u > *, .framer-75DvK .framer-1840efa > *, .framer-75DvK .framer-186pnli > *, .framer-75DvK .framer-1t7a51i > *, .framer-75DvK .framer-1ekvvzq > *, .framer-75DvK .framer-1umhcsw > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } }",
    ".framer-75DvK.framer-v-96il6j.framer-1jk7sqm, .framer-75DvK.framer-v-1bnv3s.framer-1jk7sqm, .framer-75DvK.framer-v-134kyg1.framer-1jk7sqm, .framer-75DvK.framer-v-v6adgt.framer-1jk7sqm, .framer-75DvK.framer-v-1ehiy6v.framer-1jk7sqm, .framer-75DvK.framer-v-40werk.framer-1jk7sqm, .framer-75DvK.framer-v-64soip.framer-1jk7sqm, .framer-75DvK.framer-v-qqlda0.framer-1jk7sqm, .framer-75DvK.framer-v-e4icku.framer-1jk7sqm { overflow: hidden; will-change: var(--framer-will-change-override, transform); }",
    ".framer-75DvK.framer-v-40werk .framer-sveyiz { order: 0; }",
    ".framer-75DvK.framer-v-1u2wxj.framer-1jk7sqm, .framer-75DvK.framer-v-9kkmg4.framer-1jk7sqm, .framer-75DvK.framer-v-jy5ndw.framer-1jk7sqm, .framer-75DvK.framer-v-1fcx0j5.framer-1jk7sqm, .framer-75DvK.framer-v-1w3zgn0.framer-1jk7sqm, .framer-75DvK.framer-v-17w7gtx.framer-1jk7sqm, .framer-75DvK.framer-v-bnbo05.framer-1jk7sqm, .framer-75DvK.framer-v-1ixeeri.framer-1jk7sqm, .framer-75DvK.framer-v-3erv8r.framer-1jk7sqm, .framer-75DvK.framer-v-1lg26im.framer-1jk7sqm { width: 370px; }",
    ".framer-75DvK.framer-v-1u2wxj .framer-1w14b, .framer-75DvK.framer-v-9kkmg4 .framer-1w14b, .framer-75DvK.framer-v-jy5ndw .framer-1w14b, .framer-75DvK.framer-v-1fcx0j5 .framer-1w14b, .framer-75DvK.framer-v-1w3zgn0 .framer-1w14b, .framer-75DvK.framer-v-17w7gtx .framer-1w14b, .framer-75DvK.framer-v-bnbo05 .framer-1w14b, .framer-75DvK.framer-v-1ixeeri .framer-1w14b, .framer-75DvK.framer-v-3erv8r .framer-1w14b, .framer-75DvK.framer-v-1lg26im .framer-1w14b { flex: 1 0 0px; padding: 4px 8px 4px 8px; width: 1px; }",
    ".framer-75DvK.framer-v-1u2wxj .framer-6hgg7i, .framer-75DvK.framer-v-9kkmg4 .framer-xdohff, .framer-75DvK.framer-v-jy5ndw .framer-11djac5, .framer-75DvK.framer-v-1fcx0j5 .framer-11djac5, .framer-75DvK.framer-v-1w3zgn0 .framer-vozf0u, .framer-75DvK.framer-v-17w7gtx .framer-1840efa, .framer-75DvK.framer-v-bnbo05 .framer-186pnli, .framer-75DvK.framer-v-1ixeeri .framer-1t7a51i, .framer-75DvK.framer-v-3erv8r .framer-1ekvvzq, .framer-75DvK.framer-v-1lg26im .framer-1umhcsw { flex-direction: column; gap: 0px; padding: 0px; }",
    ".framer-75DvK.framer-v-1u2wxj .framer-1c72o6e, .framer-75DvK.framer-v-9kkmg4 .framer-1izbe7o, .framer-75DvK.framer-v-jy5ndw .framer-1gnornq, .framer-75DvK.framer-v-1fcx0j5 .framer-1gnornq, .framer-75DvK.framer-v-1w3zgn0 .framer-6dv1qc, .framer-75DvK.framer-v-17w7gtx .framer-1yv0kva, .framer-75DvK.framer-v-bnbo05 .framer-h8yhen, .framer-75DvK.framer-v-1ixeeri .framer-ayxyh7, .framer-75DvK.framer-v-3erv8r .framer-jnvxxg, .framer-75DvK.framer-v-1lg26im .framer-cdvny5 { flex: none; width: 100%; }",
    ".framer-75DvK.framer-v-1u2wxj .framer-1edys97 { width: 85px; }",
    ".framer-75DvK.framer-v-1u2wxj .framer-1u7ayb6, .framer-75DvK.framer-v-9kkmg4 .framer-on23iz, .framer-75DvK.framer-v-jy5ndw .framer-69f2jq, .framer-75DvK.framer-v-1fcx0j5 .framer-69f2jq, .framer-75DvK.framer-v-1w3zgn0 .framer-62xkpw, .framer-75DvK.framer-v-1ixeeri .framer-1w96nuu, .framer-75DvK.framer-v-3erv8r .framer-1v1ecfa, .framer-75DvK.framer-v-1lg26im .framer-pe4gcs { flex: none; padding: 0px 0px 8px 0px; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-75DvK.framer-v-1u2wxj .framer-6hgg7i { gap: 0px; } .framer-75DvK.framer-v-1u2wxj .framer-6hgg7i > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-75DvK.framer-v-1u2wxj .framer-6hgg7i > :first-child { margin-top: 0px; } .framer-75DvK.framer-v-1u2wxj .framer-6hgg7i > :last-child { margin-bottom: 0px; } }",
    ".framer-75DvK.framer-v-9kkmg4 .framer-27gh2d, .framer-75DvK.framer-v-jy5ndw .framer-1ps0w74, .framer-75DvK.framer-v-1fcx0j5 .framer-1ps0w74, .framer-75DvK.framer-v-17w7gtx .framer-187upc0 { align-self: unset; height: 0px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-75DvK.framer-v-9kkmg4 .framer-xdohff { gap: 0px; } .framer-75DvK.framer-v-9kkmg4 .framer-xdohff > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-75DvK.framer-v-9kkmg4 .framer-xdohff > :first-child { margin-top: 0px; } .framer-75DvK.framer-v-9kkmg4 .framer-xdohff > :last-child { margin-bottom: 0px; } }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-75DvK.framer-v-jy5ndw .framer-11djac5 { gap: 0px; } .framer-75DvK.framer-v-jy5ndw .framer-11djac5 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-75DvK.framer-v-jy5ndw .framer-11djac5 > :first-child { margin-top: 0px; } .framer-75DvK.framer-v-jy5ndw .framer-11djac5 > :last-child { margin-bottom: 0px; } }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-75DvK.framer-v-1fcx0j5 .framer-11djac5 { gap: 0px; } .framer-75DvK.framer-v-1fcx0j5 .framer-11djac5 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-75DvK.framer-v-1fcx0j5 .framer-11djac5 > :first-child { margin-top: 0px; } .framer-75DvK.framer-v-1fcx0j5 .framer-11djac5 > :last-child { margin-bottom: 0px; } }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-75DvK.framer-v-1w3zgn0 .framer-vozf0u { gap: 0px; } .framer-75DvK.framer-v-1w3zgn0 .framer-vozf0u > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-75DvK.framer-v-1w3zgn0 .framer-vozf0u > :first-child { margin-top: 0px; } .framer-75DvK.framer-v-1w3zgn0 .framer-vozf0u > :last-child { margin-bottom: 0px; } }",
    ".framer-75DvK.framer-v-17w7gtx .framer-18xqwzp, .framer-75DvK.framer-v-bnbo05 .framer-1vm9rcd { flex: none; padding: 0px 0px 4px 0px; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-75DvK.framer-v-17w7gtx .framer-1840efa { gap: 0px; } .framer-75DvK.framer-v-17w7gtx .framer-1840efa > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-75DvK.framer-v-17w7gtx .framer-1840efa > :first-child { margin-top: 0px; } .framer-75DvK.framer-v-17w7gtx .framer-1840efa > :last-child { margin-bottom: 0px; } }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-75DvK.framer-v-bnbo05 .framer-186pnli { gap: 0px; } .framer-75DvK.framer-v-bnbo05 .framer-186pnli > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-75DvK.framer-v-bnbo05 .framer-186pnli > :first-child { margin-top: 0px; } .framer-75DvK.framer-v-bnbo05 .framer-186pnli > :last-child { margin-bottom: 0px; } }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-75DvK.framer-v-1ixeeri .framer-1t7a51i { gap: 0px; } .framer-75DvK.framer-v-1ixeeri .framer-1t7a51i > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-75DvK.framer-v-1ixeeri .framer-1t7a51i > :first-child { margin-top: 0px; } .framer-75DvK.framer-v-1ixeeri .framer-1t7a51i > :last-child { margin-bottom: 0px; } }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-75DvK.framer-v-3erv8r .framer-1ekvvzq { gap: 0px; } .framer-75DvK.framer-v-3erv8r .framer-1ekvvzq > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-75DvK.framer-v-3erv8r .framer-1ekvvzq > :first-child { margin-top: 0px; } .framer-75DvK.framer-v-3erv8r .framer-1ekvvzq > :last-child { margin-bottom: 0px; } }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-75DvK.framer-v-1lg26im .framer-1umhcsw { gap: 0px; } .framer-75DvK.framer-v-1lg26im .framer-1umhcsw > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-75DvK.framer-v-1lg26im .framer-1umhcsw > :first-child { margin-top: 0px; } .framer-75DvK.framer-v-1lg26im .framer-1umhcsw > :last-child { margin-bottom: 0px; } }",
  ],
  Ct = ye(li, pi, "framer-75DvK"),
  zr = Ct;
Ct.displayName = "caption";
Ct.defaultProps = { height: 48, width: 639 };
Ye(Ct, {
  variant: {
    options: [
      "ap20IZUme",
      "OtSX71sTU",
      "mnNfk6f2w",
      "y_lBCAqRP",
      "ZkygCb7DR",
      "NCKO0NgR2",
      "v2mtFeAuk",
      "tiRcsvzuk",
      "Od5xvdYEm",
      "kMUl0Afd9",
      "lVU25KIsK",
      "kc7aC3P2l",
      "GmVAWTfaL",
      "v1W3w7FD4",
      "c9Qk6uHGo",
      "s_qou4L88",
      "QCiXVrMlL",
      "XTjSCZ3LX",
      "JO9dP7zD1",
      "pNafs84zT",
    ],
    optionTitles: [
      "D-01-introduction",
      "D-02-Mushrooms",
      "D-03-magicmushrooms",
      "D-04-crazymush",
      "D-05-meetup",
      "D-06-legend",
      "D-07-bff",
      "D-08-buttcoin",
      "D-09-12inchs",
      "D-10-gaz-refexion",
      "M/01-introduction",
      "M-02-Mushrooms",
      "M/03-magicmushrooms",
      "M-04-crazymush",
      "M-05-meetup",
      "M-06-legend",
      "M-07-bff",
      "M-08-buttcoin",
      "M-09-12inchs",
      "M-10-gaz-refexion",
    ],
    title: "Variant",
    type: q.Enum,
  },
});
ve(
  Ct,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "/framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "/framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "/framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "/framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "/framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "/framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "/framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "/framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "/framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "/framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "/framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "/framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "/framerusercontent.com/assets/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "/framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2",
          weight: "500",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
var di = ["IiqTuEY6X", "lORzuIOu1"],
  hi = "framer-rr3CY",
  gi = { IiqTuEY6X: "framer-v-1sv409j", lORzuIOu1: "framer-v-yqz5ii" };
function Da(t, ...r) {
  let n = {};
  return r?.forEach((o) => o && Object.assign(n, t[o])), n;
}
var ui = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  wi = { delay: 0, duration: 1, ease: [0.18, 0.72, 0, 0.98], type: "tween" },
  xi = ({ value: t, children: r }) => {
    let n = Re(ae),
      o = t ?? n.transition,
      s = we(() => ({ ...n, transition: o }), [JSON.stringify(o)]);
    return e(ae.Provider, { value: s, children: r });
  },
  yi = f.create(k),
  vi = { "Variant 1": "IiqTuEY6X", "Variant 2": "lORzuIOu1" },
  bi = ({ height: t, id: r, width: n, ...o }) => {
    var s, p;
    return {
      ...o,
      variant:
        (p = (s = vi[o.variant]) !== null && s !== void 0 ? s : o.variant) !==
          null && p !== void 0
          ? p
          : "IiqTuEY6X",
    };
  },
  ki = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  _i = ge(function (t, r) {
    let { activeLocale: n, setLocale: o } = xe(),
      { style: s, className: p, layoutId: d, variant: x, ...C } = bi(t),
      {
        baseVariant: a,
        classNames: b,
        clearLoadingGesture: y,
        gestureHandlers: v,
        gestureVariant: m,
        isLoading: L,
        setGestureState: H,
        setVariant: U,
        variants: V,
      } = Te({
        cycleOrder: di,
        defaultVariant: "IiqTuEY6X",
        variant: x,
        variantClassNames: gi,
      }),
      c = ki(t, V),
      K = F(null),
      N = ue(),
      T = [],
      G = Se();
    return e(ne, {
      id: d ?? N,
      children: e(yi, {
        animate: V,
        initial: !1,
        children: e(xi, {
          value: ui,
          ...Da({ lORzuIOu1: { value: wi } }, a, m),
          children: e(B, {
            ...C,
            ...v,
            background: {
              alt: "",
              fit: "fill",
              intrinsicHeight: 1503,
              intrinsicWidth: 2162,
              loading: i(G?.y || 0),
              pixelHeight: 1503,
              pixelWidth: 2162,
              sizes: G?.width || "100vw",
              src: "/framerusercontent.com/images/2Ee3ChQ02AhmwBP7fRexOOYtU.png",
              srcSet:
                "/framerusercontent.com/images/2Ee3ChQ02AhmwBP7fRexOOYtU.png?scale-down-to=512 512w,/framerusercontent.com/images/2Ee3ChQ02AhmwBP7fRexOOYtU.png?scale-down-to=1024 1024w,/framerusercontent.com/images/2Ee3ChQ02AhmwBP7fRexOOYtU.png?scale-down-to=2048 2048w,/framerusercontent.com/images/2Ee3ChQ02AhmwBP7fRexOOYtU.png 2162w",
            },
            className: E(hi, ...T, "framer-1sv409j", p, b),
            "data-framer-name": "Variant 1",
            layoutDependency: c,
            layoutId: "IiqTuEY6X",
            ref: r ?? K,
            style: { ...s },
            ...Da({ lORzuIOu1: { "data-framer-name": "Variant 2" } }, a, m),
          }),
        }),
      }),
    });
  }),
  Fi = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-rr3CY.framer-1uzzizb, .framer-rr3CY .framer-1uzzizb { display: block; }",
    ".framer-rr3CY.framer-1sv409j { height: 932px; overflow: visible; position: relative; width: 582px; }",
    ".framer-rr3CY.framer-v-yqz5ii.framer-1sv409j { height: 1148px; width: 1618px; }",
  ],
  Zt = ye(_i, Fi, "framer-rr3CY"),
  Xr = Zt;
Zt.displayName = "Hands-on-shoulder";
Zt.defaultProps = { height: 932, width: 582 };
Ye(Zt, {
  variant: {
    options: ["IiqTuEY6X", "lORzuIOu1"],
    optionTitles: ["Variant 1", "Variant 2"],
    title: "Variant",
    type: q.Enum,
  },
});
ve(Zt, [{ explicitInter: !0, fonts: [] }], {
  supportsExplicitInterCodegen: !0,
});
var Ci = P(hr),
  Zi = P(dr),
  Li = P(yr),
  Vi = P(qe),
  za = ca(f.div),
  Ki = P(gr),
  Ri = P(ur),
  Yi = P(wr),
  Si = P(Ue),
  Ti = xt(He(S)),
  Ii = P(Ft),
  Lt = He(f.div),
  Di = P(zr),
  zi = ia(zr),
  Xi = He(S),
  Xa = xt(He(B)),
  Gi = P(Ee),
  qi = P(Ve),
  Ai = P(xr),
  Hi = xt(f.div),
  Ni = xt(He(f.div)),
  R = He(B),
  Ui = P(Xr),
  Oi = He(A),
  Ei = P(Ir),
  ji = {
    Byvh2ikpS: "(max-width: 809px)",
    KffKQZNjt: "(min-width: 810px) and (max-width: 1599px)",
    RrypUwcca: "(min-width: 1600px)",
  },
  $t = () => typeof document < "u",
  Bi = "framer-GFhZ0",
  Mi = {
    Byvh2ikpS: "framer-v-14718gw",
    KffKQZNjt: "framer-v-174vl6w",
    RrypUwcca: "framer-v-1rml4m2",
  },
  Wi = { delay: 0, duration: 1, ease: [0.1, 0.89, 0.13, 1.02], type: "tween" },
  Ji = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Wi,
    x: 0,
    y: 0,
  },
  Pi = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: -100,
  },
  Oa = { bounce: 0.2, delay: 0, duration: 1, type: "spring" },
  Qi = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: -145,
  },
  re = (t, r) => `translateX(-50%) ${r}`,
  Ur = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  er = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Ur,
    x: 0,
    y: 0,
  },
  Gr = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Ur,
    x: 0,
    y: 0,
  },
  Vt = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  $i = {
    delay: 0,
    duration: 0.7,
    ease: [0.21, 0.99, 0.11, 0.98],
    type: "tween",
  },
  es = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: $i,
    x: 0,
    y: -100,
  },
  ts = { delay: 0, duration: 2, ease: [0.21, 0.99, 0.11, 0.98], type: "tween" },
  Ga = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: ts,
    x: 0,
    y: 0,
  },
  qa = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: -100,
  },
  st = (t, r) => `translate(-50%, -50%) ${r}`,
  Ea = {
    delay: 0,
    duration: 0.4,
    ease: [0.68, -0.6, 0.32, 1.6],
    type: "tween",
  },
  Aa = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.7,
    skewX: 0,
    skewY: 0,
    transition: Ea,
    x: 0,
    y: 0,
  },
  ja = { delay: 0, duration: 0.7, ease: [0.16, 1, 0.3, 1], type: "tween" },
  rs = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: ja,
    x: 0,
    y: 0,
  },
  as = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.3,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  qr = (t, r) => `translateY(-50%) ${r}`,
  ns = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.6,
    skewX: 0,
    skewY: 0,
    transition: ja,
    x: 0,
    y: 0,
  },
  Ar = () =>
    document.querySelector("#template-overlay") ??
    document.querySelector("#overlay") ??
    document.body,
  os = {
    delay: 0,
    duration: 0.8,
    ease: [0.11, 0.7, 0.19, 0.98],
    type: "tween",
  },
  is = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: os,
    x: 0,
    y: 0,
  },
  ss = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.9,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  fs = {
    delay: 0,
    duration: 0.7,
    ease: [0.28, 0.33, 0.56, 0.65],
    type: "tween",
  },
  ms = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: fs,
    x: 0,
    y: 0,
  },
  cs = { delay: 0, duration: 0, ease: [0.28, 0.33, 0.56, 0.65], type: "tween" },
  ls = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: cs,
    x: 0,
    y: 0,
  },
  ps = {
    delay: 0,
    duration: 0.5,
    ease: [0.16, 0.77, 0.18, 0.93],
    type: "tween",
  },
  Ha = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: ps,
    x: 0,
    y: 0,
  },
  ds = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 75,
  },
  ft = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.8,
    skewX: 0,
    skewY: 0,
    transition: Ea,
    x: 0,
    y: 0,
  },
  hs = { delay: 0, duration: 0.8, ease: [0.16, 1, 0.3, 1], type: "tween" },
  mt = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: hs,
    x: 0,
    y: 0,
  },
  ct = {
    opacity: 0.5,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.6,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  Hr = (t, r) => {
    if (!(!t || typeof t != "object")) return { ...t, alt: r };
  },
  gs = { delay: 0, duration: 0, ease: [0.21, 0.99, 0.11, 0.98], type: "tween" },
  us = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: gs,
    x: 0,
    y: -100,
  },
  ws = { bounce: 0.25, delay: 0, duration: 0.45, type: "spring" },
  xs = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.1,
    skewX: 0,
    skewY: 0,
    transition: ws,
  },
  Nr = ({ children: t, blockDocumentScrolling: r, enabled: n = !0 }) => {
    let [o, s] = oa({ blockDocumentScrolling: r });
    return t({
      hide: () => s(!1),
      show: () => s(!0),
      toggle: () => s(!o),
      visible: n && o,
    });
  },
  ys = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 80,
  },
  Ba = { bounce: 0.2, delay: 0, duration: 0.6, type: "spring" },
  vs = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Ba,
    x: 0,
    y: 0,
  },
  Na = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 100,
  },
  bs = { delay: 0, duration: 12, ease: [0.44, 0, 0.56, 1], type: "tween" },
  ks = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: -500,
    y: 0,
  },
  _s = { delay: 0, duration: 1.5, ease: [0.16, 1, 0.3, 1], type: "tween" },
  Ua = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: _s,
    x: 0,
    y: 0,
  },
  Fs = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.5,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  Cs = { bounceDamping: 30, bounceStiffness: 400, delay: 0, type: "inertia" },
  Zs = (t) => t.preventDefault(),
  Ls = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  Vs = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.1,
    skewX: 0,
    skewY: 0,
    transition: Ls,
  },
  Ks = { cursor: "grabbing" },
  Rs = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Oa,
    x: 0,
    y: 0,
  },
  Ys = {
    opacity: 0.5,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.25,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 50,
  },
  Ss = {
    delay: 0,
    duration: 0.8,
    ease: [0.11, 0.82, 0.26, 0.95],
    type: "tween",
  },
  Ts = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Ss,
    x: 0,
    y: 0,
  },
  Is = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 20,
  },
  Ds = { delay: 0, duration: 3, ease: [0, 0, 1, 1], type: "tween" },
  zs = {
    opacity: 1,
    rotate: 360,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  Xs = ({ value: t }) =>
    ta() ? null : e("style", { dangerouslySetInnerHTML: { __html: t } }),
  Gs = { Desktop: "RrypUwcca", Phone: "Byvh2ikpS", Tablet: "KffKQZNjt" },
  qs = ({ height: t, id: r, width: n, ...o }) => ({
    ...o,
    variant: Gs[o.variant] ?? o.variant ?? "RrypUwcca",
  }),
  As = ge(function (t, r) {
    let { activeLocale: n, setLocale: o } = xe(),
      { style: s, className: p, layoutId: d, variant: x, ...C } = qs(t);
    et(() => {
      let M = vr(void 0, n);
      if (M.robots) {
        let te = document.querySelector('meta[name="robots"]');
        te
          ? te.setAttribute("content", M.robots)
          : ((te = document.createElement("meta")),
            te.setAttribute("name", "robots"),
            te.setAttribute("content", M.robots),
            document.head.appendChild(te));
      }
    }, [void 0, n]),
      Er(() => {
        let M = vr(void 0, n);
        (document.title = M.title || ""),
          M.viewport &&
            document
              .querySelector('meta[name="viewport"]')
              ?.setAttribute("content", M.viewport);
      }, [void 0, n]);
    let [a, b] = na(x, ji, !1),
      y = void 0,
      { activeVariantCallback: v, delay: m } = aa(void 0),
      L = ({ overlay: M, loadMore: te }) =>
        v(async (...Ke) => {
          M.toggle();
        }),
      H = ({ overlay: M, loadMore: te }) =>
        v(async (...Ke) => {
          M.toggle();
        }),
      U = ({ overlay: M, loadMore: te }) =>
        v(async (...Ke) => {
          M.toggle();
        }),
      V = ({ overlay: M, loadMore: te }) =>
        v(async (...Ke) => {
          M.hide();
        }),
      K = E(Bi, ...[]),
      N = F(null),
      T = F(null),
      G = F(null),
      Z = F(null),
      D = F(null),
      g = F(null),
      oe = F(null),
      I = F(null),
      W = F(null),
      $ = F(null),
      de = F(null),
      Ie = F(null),
      lt = X("Cq2BowFKu"),
      ke = F(null),
      Be = X("AetI5MZsW"),
      Q = () => ($t() ? a !== "Byvh2ikpS" : !0),
      pt = X("pPaIImPJb"),
      he = F(null),
      De = () => !$t() || a === "Byvh2ikpS",
      ze = X("UsHo0rhZw"),
      Me = F(null),
      Kt = X("ZJoAY1VS8"),
      _e = X("tgzD5vErP"),
      dt = F(null),
      Rt = X("afV05NWDQ"),
      fe = X("Crn2pN7Xd"),
      ht = X("uhi4Avt6n"),
      Qe = F(null),
      $e = X("s1RT1aLbU"),
      We = () => ($t() ? !["Byvh2ikpS", "KffKQZNjt"].includes(a) : !0),
      Je = () => !!(!$t() || ["Byvh2ikpS", "KffKQZNjt"].includes(a)),
      Yt = X("JxzvF8yUW"),
      me = F(null),
      rr = X("gOQPznUFh"),
      St = X("K6BA4sd8Q"),
      ar = X("HU8fQFEQf"),
      Tt = F(null),
      ee = F(null),
      gt = X("SErN4xt2y"),
      O = X("P4MjFmL90"),
      z = X("KYgh_oueu"),
      J = X("QTZJxKcmi"),
      ie = F(null),
      Fe = X("JrMeIrMq7"),
      Ce = F(null),
      Ze = X("dPGyOXufh"),
      Le = F(null),
      Ae = X("AH3tiZJ41"),
      ut = F(null),
      nr = X("XMmszZC1T"),
      Ma = F(null),
      Wa = X("MUpabZyGC"),
      Ja = F(null),
      Pa = X("XIZK1fxha"),
      Qa = F(null),
      $a = X("UGTOh9gwS"),
      en = F(null),
      tn = X("HSo3leOTs"),
      rn = X("B_gRlxoRl"),
      an = F(null),
      nn = X("uJRSW1J2c"),
      on = F(null),
      sn = X("diVuOebAq"),
      fn = F(null),
      mn = X("GzKxOrCpB"),
      cn = X("aENFTKjzY"),
      ln = F(null),
      pn = ue();
    return (
      $r({}),
      e(ea.Provider, {
        value: { primaryVariantId: "RrypUwcca", variantClassNames: Mi },
        children: _(ne, {
          id: d ?? pn,
          children: [
            _(f.div, {
              ...C,
              className: E(K, "framer-1rml4m2", p),
              draggable: "false",
              ref: r ?? N,
              style: { ...s },
              children: [
                e(Y, {
                  children: e(S, {
                    className: "framer-zb7r0a-container",
                    children: e(hr, {
                      height: "100%",
                      id: "XtsqpLB_b",
                      intensity: 10,
                      layoutId: "XtsqpLB_b",
                      width: "100%",
                    }),
                  }),
                }),
                e(Y, {
                  children: e(S, {
                    className: "framer-1i93ave-container",
                    layoutScroll: !0,
                    children: e(l, {
                      breakpoint: a,
                      overrides: { Byvh2ikpS: { opacity: 0.4 } },
                      children: e(dr, {
                        height: "100%",
                        id: "azWYk1LK8",
                        layoutId: "azWYk1LK8",
                        opacity: 0.2,
                        style: { height: "100%", width: "100%" },
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                e(Nr, {
                  blockDocumentScrolling: !0,
                  children: (M) =>
                    e(Nr, {
                      blockDocumentScrolling: !1,
                      children: (te) =>
                        e(Nr, {
                          blockDocumentScrolling: !1,
                          children: (Ke) =>
                            e(wt, {
                              children: e(l, {
                                breakpoint: a,
                                overrides: {
                                  Byvh2ikpS: { height: 53, width: "370px" },
                                },
                                children: e(Y, {
                                  height: 51,
                                  width: "717px",
                                  y: 10,
                                  children: e(l, {
                                    breakpoint: a,
                                    overrides: {
                                      Byvh2ikpS: {
                                        __framer__animate: { transition: Oa },
                                        __framer__animateOnce: !1,
                                        __framer__scrollDirection: {
                                          direction: "down",
                                          target: Qi,
                                        },
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0.5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        animate: void 0,
                                        initial: void 0,
                                        optimized: void 0,
                                        transformTemplate: re,
                                      },
                                    },
                                    children: _(Ti, {
                                      animate: Ji,
                                      className: "framer-jaq4ea-container",
                                      "data-framer-appear-id": "jaq4ea",
                                      id: "jaq4ea",
                                      initial: Pi,
                                      layoutScroll: !0,
                                      optimized: !0,
                                      children: [
                                        e(l, {
                                          breakpoint: a,
                                          overrides: {
                                            Byvh2ikpS: {
                                              style: { width: "100%" },
                                              variant:
                                                (Ke.visible ||
                                                  te.visible ||
                                                  M.visible,
                                                "fkNkytigO"),
                                            },
                                          },
                                          children: e(yr, {
                                            fFb00J628: L({ overlay: Ke }),
                                            height: "100%",
                                            id: "I5d1Ee7kT",
                                            JVT3l9ZWK: U({ overlay: M }),
                                            layoutId: "I5d1Ee7kT",
                                            pRhHMD2y3: H({ overlay: te }),
                                            style: {
                                              height: "100%",
                                              width: "100%",
                                            },
                                            variant: "CPQXUw5E1",
                                            width: "100%",
                                          }),
                                        }),
                                        e(Dt, {
                                          children:
                                            Ke.visible &&
                                            e(wt, {
                                              children: zt(
                                                _(k, {
                                                  children: [
                                                    e(
                                                      f.div,
                                                      {
                                                        animate: {
                                                          opacity: 1,
                                                          transition: {
                                                            delay: 0,
                                                            duration: 2,
                                                            ease: [
                                                              0.5, 0, 0.88,
                                                              0.77,
                                                            ],
                                                            type: "tween",
                                                          },
                                                        },
                                                        className: E(
                                                          K,
                                                          "framer-mkp6ak"
                                                        ),
                                                        "data-framer-name":
                                                          "Overlay-links",
                                                        "data-framer-portal-id":
                                                          "jaq4ea",
                                                        exit: {
                                                          opacity: 0,
                                                          transition: {
                                                            delay: 0,
                                                            duration: 0,
                                                            ease: [
                                                              0.14, 0.79, 1,
                                                              0.07,
                                                            ],
                                                            type: "tween",
                                                          },
                                                        },
                                                        initial: { opacity: 0 },
                                                        onTap: () => Ke.hide(),
                                                      },
                                                      "ELc4sIAbp"
                                                    ),
                                                    e(f.div, {
                                                      animate: Gr,
                                                      className: E(
                                                        K,
                                                        "framer-1jds1be"
                                                      ),
                                                      "data-framer-name": "bg",
                                                      "data-framer-portal-id":
                                                        "jaq4ea",
                                                      exit: er,
                                                      initial: Vt,
                                                      onTap: V({ overlay: Ke }),
                                                    }),
                                                    e(za, {
                                                      animate: Ga,
                                                      className: E(
                                                        K,
                                                        "framer-6ntgbr"
                                                      ),
                                                      "data-framer-name":
                                                        "close",
                                                      "data-framer-portal-id":
                                                        "jaq4ea",
                                                      exit: es,
                                                      initial: qa,
                                                      onTap: V({ overlay: Ke }),
                                                      transformTemplate: re,
                                                      children: e(Y, {
                                                        children: e(S, {
                                                          className:
                                                            "framer-1ck887x-container",
                                                          transformTemplate: st,
                                                          children: e(qe, {
                                                            customColor:
                                                              "rgb(255, 255, 255)",
                                                            customPadding: 0,
                                                            customStrokeWidth: 2,
                                                            customSvgCode:
                                                              '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="black"/> </svg>',
                                                            description: "",
                                                            height: "100%",
                                                            id: "p6_Z00nvf",
                                                            layoutId:
                                                              "p6_Z00nvf",
                                                            lineCap: "butt",
                                                            lineJoin: "miter",
                                                            style: {
                                                              height: "100%",
                                                              width: "100%",
                                                            },
                                                            title: "",
                                                            width: "100%",
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                    e(l, {
                                                      breakpoint: a,
                                                      overrides: {
                                                        Byvh2ikpS: {
                                                          width:
                                                            "calc(100vw + 76px)",
                                                        },
                                                        KffKQZNjt: {
                                                          width: "759px",
                                                        },
                                                      },
                                                      children: e(Y, {
                                                        width: "1041px",
                                                        children: e(l, {
                                                          breakpoint: a,
                                                          overrides: {
                                                            Byvh2ikpS: {
                                                              animate: ns,
                                                              style: {
                                                                scale: 0.6,
                                                              },
                                                              transformTemplate:
                                                                qr,
                                                            },
                                                          },
                                                          children: e(S, {
                                                            animate: rs,
                                                            className: E(
                                                              K,
                                                              "framer-1wzf9th-container"
                                                            ),
                                                            "data-framer-portal-id":
                                                              "jaq4ea",
                                                            exit: Aa,
                                                            initial: as,
                                                            transformTemplate:
                                                              st,
                                                            children: e(gr, {
                                                              height: "100%",
                                                              id: "sJrib25hb",
                                                              layoutId:
                                                                "sJrib25hb",
                                                              style: {
                                                                width: "100%",
                                                              },
                                                              variant:
                                                                "gc94Brjjk",
                                                              width: "100%",
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                                Ar()
                                              ),
                                            }),
                                        }),
                                        e(Dt, {
                                          children:
                                            te.visible &&
                                            e(wt, {
                                              children: zt(
                                                _(k, {
                                                  children: [
                                                    e(
                                                      f.div,
                                                      {
                                                        animate: {
                                                          opacity: 1,
                                                          transition: {
                                                            delay: 0,
                                                            duration: 0.3,
                                                            ease: [
                                                              0.5, 0, 0.88,
                                                              0.77,
                                                            ],
                                                            type: "tween",
                                                          },
                                                        },
                                                        className: E(
                                                          K,
                                                          "framer-1x8oijt"
                                                        ),
                                                        "data-framer-name":
                                                          "Overlay-contract",
                                                        "data-framer-portal-id":
                                                          "jaq4ea",
                                                        exit: {
                                                          opacity: 0,
                                                          transition: {
                                                            delay: 0,
                                                            duration: 0,
                                                            ease: [0, 0, 1, 1],
                                                            type: "tween",
                                                          },
                                                        },
                                                        initial: { opacity: 0 },
                                                        onTap: () => te.hide(),
                                                      },
                                                      "PKvzeeupI"
                                                    ),
                                                    e(f.div, {
                                                      animate: Gr,
                                                      className: E(
                                                        K,
                                                        "framer-15yzi2v"
                                                      ),
                                                      "data-framer-name": "bg",
                                                      "data-framer-portal-id":
                                                        "jaq4ea",
                                                      exit: er,
                                                      initial: Vt,
                                                      onTap: V({ overlay: te }),
                                                    }),
                                                    _(f.div, {
                                                      animate: is,
                                                      className: E(
                                                        K,
                                                        "framer-5zq7xz"
                                                      ),
                                                      "data-framer-portal-id":
                                                        "jaq4ea",
                                                      exit: Aa,
                                                      initial: ss,
                                                      transformTemplate: st,
                                                      children: [
                                                        _("div", {
                                                          className:
                                                            "framer-30q2w5",
                                                          children: [
                                                            e(Y, {
                                                              width: "48px",
                                                              children: e(S, {
                                                                className:
                                                                  "framer-eh7kug-container",
                                                                children: e(
                                                                  ur,
                                                                  {
                                                                    height:
                                                                      "100%",
                                                                    id: "uEurEbCDW",
                                                                    layoutId:
                                                                      "uEurEbCDW",
                                                                    style: {
                                                                      height:
                                                                        "100%",
                                                                      width:
                                                                        "100%",
                                                                    },
                                                                    variant:
                                                                      "WaU7PxQOC",
                                                                    width:
                                                                      "100%",
                                                                  }
                                                                ),
                                                              }),
                                                            }),
                                                            _("div", {
                                                              className:
                                                                "framer-1squ8vd",
                                                              children: [
                                                                e(A, {
                                                                  __fromCanvasComponent:
                                                                    !0,
                                                                  children: e(
                                                                    k,
                                                                    {
                                                                      children:
                                                                        e("p", {
                                                                          style:
                                                                            {
                                                                              "--font-selector":
                                                                                "SW50ZXItTWVkaXVt",
                                                                              "--framer-font-family":
                                                                                '"Inter", "Inter Placeholder", sans-serif',
                                                                              "--framer-font-size":
                                                                                "14px",
                                                                              "--framer-font-weight":
                                                                                "500",
                                                                              "--framer-letter-spacing":
                                                                                "-0.01em",
                                                                              "--framer-line-height":
                                                                                "1em",
                                                                              "--framer-text-alignment":
                                                                                "left",
                                                                              "--framer-text-color":
                                                                                "rgb(255, 255, 255)",
                                                                            },
                                                                          children:
                                                                            "Lil Frog",
                                                                        }),
                                                                    }
                                                                  ),
                                                                  className:
                                                                    "framer-1dulfq5",
                                                                  fonts: [
                                                                    "Inter-Medium",
                                                                  ],
                                                                  verticalAlignment:
                                                                    "top",
                                                                  withExternalLayout:
                                                                    !0,
                                                                }),
                                                                e(A, {
                                                                  __fromCanvasComponent:
                                                                    !0,
                                                                  children: e(
                                                                    k,
                                                                    {
                                                                      children:
                                                                        e("p", {
                                                                          style:
                                                                            {
                                                                              "--framer-font-size":
                                                                                "14px",
                                                                              "--framer-letter-spacing":
                                                                                "-0.01em",
                                                                              "--framer-line-height":
                                                                                "1em",
                                                                              "--framer-text-color":
                                                                                "rgba(255, 255, 255, 0.5)",
                                                                            },
                                                                          children:
                                                                            "Ethereum",
                                                                        }),
                                                                    }
                                                                  ),
                                                                  className:
                                                                    "framer-clpifi",
                                                                  fonts: [
                                                                    "Inter",
                                                                  ],
                                                                  verticalAlignment:
                                                                    "top",
                                                                  withExternalLayout:
                                                                    !0,
                                                                }),
                                                              ],
                                                            }),
                                                          ],
                                                        }),
                                                        e(l, {
                                                          breakpoint: a,
                                                          overrides: {
                                                            Byvh2ikpS: {
                                                              children: e(k, {
                                                                children: e(
                                                                  "p",
                                                                  {
                                                                    style: {
                                                                      "--font-selector":
                                                                        "SW50ZXItTWVkaXVt",
                                                                      "--framer-font-family":
                                                                        '"Inter", "Inter Placeholder", sans-serif',
                                                                      "--framer-font-size":
                                                                        "14px",
                                                                      "--framer-font-weight":
                                                                        "500",
                                                                      "--framer-letter-spacing":
                                                                        "-0.01em",
                                                                      "--framer-line-height":
                                                                        "1em",
                                                                      "--framer-text-color":
                                                                        "rgba(255, 255, 255, 0.8)",
                                                                    },
                                                                    children:
                                                                      "0x854bB9fbd2f4F72B4C61d1e673486baECfd93319",
                                                                  }
                                                                ),
                                                              }),
                                                            },
                                                            KffKQZNjt: {
                                                              children: e(k, {
                                                                children: e(
                                                                  "p",
                                                                  {
                                                                    style: {
                                                                      "--font-selector":
                                                                        "SW50ZXItTWVkaXVt",
                                                                      "--framer-font-family":
                                                                        '"Inter", "Inter Placeholder", sans-serif',
                                                                      "--framer-font-weight":
                                                                        "500",
                                                                      "--framer-letter-spacing":
                                                                        "-0.01em",
                                                                      "--framer-line-height":
                                                                        "1em",
                                                                      "--framer-text-color":
                                                                        "rgba(255, 255, 255, 0.8)",
                                                                    },
                                                                    children:
                                                                      "0x854bB9fbd2f4F72B4C61d1e673486baECfd93319",
                                                                  }
                                                                ),
                                                              }),
                                                            },
                                                          },
                                                          children: e(A, {
                                                            __fromCanvasComponent:
                                                              !0,
                                                            children: e(k, {
                                                              children: e("p", {
                                                                style: {
                                                                  "--font-selector":
                                                                    "SW50ZXItTWVkaXVt",
                                                                  "--framer-font-family":
                                                                    '"Inter", "Inter Placeholder", sans-serif',
                                                                  "--framer-font-size":
                                                                    "20px",
                                                                  "--framer-font-weight":
                                                                    "500",
                                                                  "--framer-letter-spacing":
                                                                    "-0.01em",
                                                                  "--framer-line-height":
                                                                    "1em",
                                                                  "--framer-text-color":
                                                                    "rgba(255, 255, 255, 0.8)",
                                                                },
                                                                children:
                                                                  "0x854bB9fbd2f4F72B4C61d1e673486baECfd93319",
                                                              }),
                                                            }),
                                                            className:
                                                              "framer-1vgbf6v",
                                                            fonts: [
                                                              "Inter-Medium",
                                                            ],
                                                            verticalAlignment:
                                                              "top",
                                                            withExternalLayout:
                                                              !0,
                                                          }),
                                                        }),
                                                        e(Y, {
                                                          children: e(S, {
                                                            className:
                                                              "framer-19u50ix-container",
                                                            children: e(l, {
                                                              breakpoint: a,
                                                              overrides: {
                                                                Byvh2ikpS: {
                                                                  kmK5HfVNG:
                                                                    "10px",
                                                                  style: {
                                                                    height:
                                                                      "100%",
                                                                    width:
                                                                      "100%",
                                                                  },
                                                                },
                                                              },
                                                              children: e(wr, {
                                                                aCeOAHQBL:
                                                                  "rgb(0, 0, 0)",
                                                                b8ei7OpHv:
                                                                  "rgb(94, 227, 119)",
                                                                bcOKL_7fc:
                                                                  '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3 2C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H4C4.55228 13 5 13.4477 5 14C5 14.5523 4.55228 15 4 15H3C2.20435 15 1.44129 14.6839 0.87868 14.1213C0.31607 13.5587 0 12.7956 0 12V3C0 2.20435 0.31607 1.44129 0.87868 0.87868C1.44129 0.31607 2.20435 0 3 0H12C12.7956 0 13.5587 0.31607 14.1213 0.87868C14.6839 1.44129 15 2.20435 15 3V4C15 4.55228 14.5523 5 14 5C13.4477 5 13 4.55228 13 4V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2H3ZM10 9C9.44771 9 9 9.44771 9 10V19C9 19.5523 9.44771 20 10 20H19C19.5523 20 20 19.5523 20 19V10C20 9.44771 19.5523 9 19 9H10ZM7 10C7 8.34315 8.34315 7 10 7H19C20.6569 7 22 8.34315 22 10V19C22 20.6569 20.6569 22 19 22H10C8.34315 22 7 20.6569 7 19V10Z" fill="black"/> </svg>',
                                                                bPCJyrIbK:
                                                                  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C12.5523 1 13 1.44772 13 2V6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6V2C11 1.44772 11.4477 1 12 1ZM4.22289 4.22289C4.61342 3.83237 5.24658 3.83237 5.63711 4.22289L8.46711 7.05289C8.85763 7.44342 8.85763 8.07658 8.46711 8.46711C8.07658 8.85763 7.44342 8.85763 7.05289 8.46711L4.22289 5.63711C3.83237 5.24658 3.83237 4.61342 4.22289 4.22289ZM19.7771 4.22289C20.1676 4.61342 20.1676 5.24658 19.7771 5.63711L16.9471 8.46711C16.5566 8.85763 15.9234 8.85763 15.5329 8.46711C15.1424 8.07658 15.1424 7.44342 15.5329 7.05289L18.3629 4.22289C18.7534 3.83237 19.3866 3.83237 19.7771 4.22289ZM1 12C1 11.4477 1.44772 11 2 11H6C6.55228 11 7 11.4477 7 12C7 12.5523 6.55228 13 6 13H2C1.44772 13 1 12.5523 1 12ZM17 12C17 11.4477 17.4477 11 18 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H18C17.4477 13 17 12.5523 17 12ZM8.46711 15.5329C8.85763 15.9234 8.85763 16.5566 8.46711 16.9471L5.63711 19.7771C5.24658 20.1676 4.61342 20.1676 4.22289 19.7771C3.83237 19.3866 3.83237 18.7534 4.22289 18.3629L7.05289 15.5329C7.44342 15.1424 8.07658 15.1424 8.46711 15.5329ZM15.5329 15.5329C15.9234 15.1424 16.5566 15.1424 16.9471 15.5329L19.7771 18.3629C20.1676 18.7534 20.1676 19.3866 19.7771 19.7771C19.3866 20.1676 18.7534 20.1676 18.3629 19.7771L15.5329 16.9471C15.1424 16.5566 15.1424 15.9234 15.5329 15.5329ZM12 17C12.5523 17 13 17.4477 13 18V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V18C11 17.4477 11.4477 17 12 17Z" fill="black"/> </svg>',
                                                                height: "100%",
                                                                id: "N1wPQ907J",
                                                                kmK5HfVNG:
                                                                  "100px",
                                                                layoutId:
                                                                  "N1wPQ907J",
                                                                PbW7K4Unr:
                                                                  "rgb(0, 0, 0)",
                                                                qIDNNRI0q:
                                                                  "0x854bB9fbd2f4F72B4C61d1e673486baECfd93319",
                                                                rIGEnoYqD:
                                                                  "Copied",
                                                                style: {
                                                                  height:
                                                                    "100%",
                                                                },
                                                                variant:
                                                                  "TEDvwxlqM",
                                                                width: "100%",
                                                                wr2g_fjxZ:
                                                                  "rgb(255, 255, 255)",
                                                                zhU3xY_Ux:
                                                                  "Copy",
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                Ar()
                                              ),
                                            }),
                                        }),
                                        e(Dt, {
                                          children:
                                            M.visible &&
                                            e(wt, {
                                              children: zt(
                                                _(k, {
                                                  children: [
                                                    e(
                                                      f.div,
                                                      {
                                                        animate: { opacity: 1 },
                                                        className: E(
                                                          K,
                                                          "framer-1kh5282"
                                                        ),
                                                        "data-framer-name":
                                                          "Overlay-tokenomics",
                                                        "data-framer-portal-id":
                                                          "jaq4ea",
                                                        exit: { opacity: 0 },
                                                        initial: { opacity: 0 },
                                                        onTap: () => M.hide(),
                                                        transition: {
                                                          delay: 0,
                                                          duration: 0,
                                                          ease: [0, 0, 1, 1],
                                                          type: "tween",
                                                        },
                                                      },
                                                      "DUUntlisq"
                                                    ),
                                                    e(f.div, {
                                                      animate: ls,
                                                      className: E(
                                                        K,
                                                        "framer-gqei6h"
                                                      ),
                                                      "data-framer-name": "bg",
                                                      "data-framer-portal-id":
                                                        "jaq4ea",
                                                      exit: ms,
                                                      initial: Vt,
                                                    }),
                                                    _("div", {
                                                      className: E(
                                                        K,
                                                        "framer-1ykwaw"
                                                      ),
                                                      "data-framer-portal-id":
                                                        "jaq4ea",
                                                      children: [
                                                        e(f.div, {
                                                          animate: Gr,
                                                          className:
                                                            "framer-8i4412",
                                                          "data-framer-name":
                                                            "hitzone",
                                                          exit: er,
                                                          initial: Vt,
                                                          onTap: V({
                                                            overlay: M,
                                                          }),
                                                        }),
                                                        e(l, {
                                                          breakpoint: a,
                                                          overrides: {
                                                            Byvh2ikpS: {
                                                              transformTemplate:
                                                                re,
                                                            },
                                                          },
                                                          children: _(f.div, {
                                                            animate: Ha,
                                                            className:
                                                              "framer-hxony5",
                                                            exit: Ha,
                                                            initial: ds,
                                                            children: [
                                                              e(l, {
                                                                breakpoint: a,
                                                                overrides: {
                                                                  Byvh2ikpS: {
                                                                    width:
                                                                      "178.5px",
                                                                  },
                                                                  KffKQZNjt: {
                                                                    width:
                                                                      "375px",
                                                                  },
                                                                },
                                                                children: e(Y, {
                                                                  width:
                                                                    "514.5px",
                                                                  children: e(
                                                                    S,
                                                                    {
                                                                      animate:
                                                                        mt,
                                                                      className:
                                                                        "framer-zt279u-container",
                                                                      exit: ft,
                                                                      initial:
                                                                        ct,
                                                                      children:
                                                                        e(l, {
                                                                          breakpoint:
                                                                            a,
                                                                          overrides:
                                                                            {
                                                                              Byvh2ikpS:
                                                                                {
                                                                                  variant:
                                                                                    "Qeh02OMki",
                                                                                },
                                                                            },
                                                                          children:
                                                                            e(
                                                                              Ue,
                                                                              {
                                                                                height:
                                                                                  "100%",
                                                                                hn11_Vo84:
                                                                                  !1,
                                                                                id: "Q9F2Ee47E",
                                                                                layoutId:
                                                                                  "Q9F2Ee47E",
                                                                                style:
                                                                                  {
                                                                                    height:
                                                                                      "100%",
                                                                                    width:
                                                                                      "100%",
                                                                                  },
                                                                                tAnOtrGiG:
                                                                                  "AKA Lil Frog",
                                                                                variant:
                                                                                  "oSl4e0fPr",
                                                                                width:
                                                                                  "100%",
                                                                                XgTiR1Rgh:
                                                                                  "Ticker",
                                                                                y33U6RPLX:
                                                                                  "$LIL",
                                                                              }
                                                                            ),
                                                                        }),
                                                                    }
                                                                  ),
                                                                }),
                                                              }),
                                                              e(l, {
                                                                breakpoint: a,
                                                                overrides: {
                                                                  Byvh2ikpS: {
                                                                    width:
                                                                      "365px",
                                                                  },
                                                                  KffKQZNjt: {
                                                                    width:
                                                                      "375px",
                                                                  },
                                                                },
                                                                children: e(Y, {
                                                                  width:
                                                                    "514.5px",
                                                                  children: e(
                                                                    S,
                                                                    {
                                                                      animate:
                                                                        mt,
                                                                      className:
                                                                        "framer-1l1jr0z-container",
                                                                      exit: ft,
                                                                      initial:
                                                                        ct,
                                                                      children:
                                                                        e(l, {
                                                                          breakpoint:
                                                                            a,
                                                                          overrides:
                                                                            {
                                                                              Byvh2ikpS:
                                                                                {
                                                                                  variant:
                                                                                    "Qeh02OMki",
                                                                                },
                                                                            },
                                                                          children:
                                                                            e(
                                                                              Ue,
                                                                              {
                                                                                height:
                                                                                  "100%",
                                                                                hn11_Vo84:
                                                                                  !1,
                                                                                id: "Z1eTnQMR9",
                                                                                layoutId:
                                                                                  "Z1eTnQMR9",
                                                                                style:
                                                                                  {
                                                                                    height:
                                                                                      "100%",
                                                                                    width:
                                                                                      "100%",
                                                                                  },
                                                                                tAnOtrGiG:
                                                                                  "One Billion, Baby!",
                                                                                variant:
                                                                                  "oSl4e0fPr",
                                                                                width:
                                                                                  "100%",
                                                                                XgTiR1Rgh:
                                                                                  "Supply",
                                                                                y33U6RPLX:
                                                                                  "1,000,000,000",
                                                                              }
                                                                            ),
                                                                        }),
                                                                    }
                                                                  ),
                                                                }),
                                                              }),
                                                              e(l, {
                                                                breakpoint: a,
                                                                overrides: {
                                                                  Byvh2ikpS: {
                                                                    width:
                                                                      "178.5px",
                                                                  },
                                                                  KffKQZNjt: {
                                                                    width:
                                                                      "247.3333px",
                                                                  },
                                                                },
                                                                children: e(Y, {
                                                                  width:
                                                                    "340.3333px",
                                                                  children: e(
                                                                    S,
                                                                    {
                                                                      animate:
                                                                        mt,
                                                                      className:
                                                                        "framer-1xbdxwj-container",
                                                                      exit: ft,
                                                                      initial:
                                                                        ct,
                                                                      children:
                                                                        e(l, {
                                                                          breakpoint:
                                                                            a,
                                                                          overrides:
                                                                            {
                                                                              Byvh2ikpS:
                                                                                {
                                                                                  variant:
                                                                                    "Qeh02OMki",
                                                                                },
                                                                            },
                                                                          children:
                                                                            e(
                                                                              Ue,
                                                                              {
                                                                                height:
                                                                                  "100%",
                                                                                hn11_Vo84:
                                                                                  !1,
                                                                                id: "ex0M9WBQ8",
                                                                                layoutId:
                                                                                  "ex0M9WBQ8",
                                                                                style:
                                                                                  {
                                                                                    height:
                                                                                      "100%",
                                                                                    width:
                                                                                      "100%",
                                                                                  },
                                                                                tAnOtrGiG:
                                                                                  "Rug Pull Risk: 0%",
                                                                                variant:
                                                                                  "oSl4e0fPr",
                                                                                width:
                                                                                  "100%",
                                                                                XgTiR1Rgh:
                                                                                  "Liquidity Pool",
                                                                                y33U6RPLX:
                                                                                  "LP Burned",
                                                                              }
                                                                            ),
                                                                        }),
                                                                    }
                                                                  ),
                                                                }),
                                                              }),
                                                              e(l, {
                                                                breakpoint: a,
                                                                overrides: {
                                                                  Byvh2ikpS: {
                                                                    width:
                                                                      "365px",
                                                                  },
                                                                  KffKQZNjt: {
                                                                    width:
                                                                      "247.3333px",
                                                                  },
                                                                },
                                                                children: e(Y, {
                                                                  width:
                                                                    "340.3333px",
                                                                  children: e(
                                                                    S,
                                                                    {
                                                                      animate:
                                                                        mt,
                                                                      className:
                                                                        "framer-ajpwf4-container",
                                                                      exit: ft,
                                                                      initial:
                                                                        ct,
                                                                      children:
                                                                        e(l, {
                                                                          breakpoint:
                                                                            a,
                                                                          overrides:
                                                                            {
                                                                              Byvh2ikpS:
                                                                                {
                                                                                  variant:
                                                                                    "Qeh02OMki",
                                                                                },
                                                                            },
                                                                          children:
                                                                            e(
                                                                              Ue,
                                                                              {
                                                                                height:
                                                                                  "100%",
                                                                                hn11_Vo84:
                                                                                  !1,
                                                                                id: "WVfQbNIBq",
                                                                                layoutId:
                                                                                  "WVfQbNIBq",
                                                                                style:
                                                                                  {
                                                                                    height:
                                                                                      "100%",
                                                                                    width:
                                                                                      "100%",
                                                                                  },
                                                                                tAnOtrGiG:
                                                                                  "Fees Are for Pussies. Ribbit.",
                                                                                variant:
                                                                                  "oSl4e0fPr",
                                                                                width:
                                                                                  "100%",
                                                                                XgTiR1Rgh:
                                                                                  "Taxes",
                                                                                y33U6RPLX:
                                                                                  "0%",
                                                                              }
                                                                            ),
                                                                        }),
                                                                    }
                                                                  ),
                                                                }),
                                                              }),
                                                              e(l, {
                                                                breakpoint: a,
                                                                overrides: {
                                                                  Byvh2ikpS: {
                                                                    width:
                                                                      "365px",
                                                                  },
                                                                  KffKQZNjt: {
                                                                    width:
                                                                      "247.3333px",
                                                                  },
                                                                },
                                                                children: e(Y, {
                                                                  width:
                                                                    "340.3333px",
                                                                  children: e(
                                                                    S,
                                                                    {
                                                                      animate:
                                                                        mt,
                                                                      className:
                                                                        "framer-w4stqj-container",
                                                                      exit: ft,
                                                                      initial:
                                                                        ct,
                                                                      children:
                                                                        e(l, {
                                                                          breakpoint:
                                                                            a,
                                                                          overrides:
                                                                            {
                                                                              Byvh2ikpS:
                                                                                {
                                                                                  variant:
                                                                                    "Qeh02OMki",
                                                                                },
                                                                            },
                                                                          children:
                                                                            e(
                                                                              Ue,
                                                                              {
                                                                                height:
                                                                                  "100%",
                                                                                hn11_Vo84:
                                                                                  !1,
                                                                                id: "S0HAPOqi3",
                                                                                layoutId:
                                                                                  "S0HAPOqi3",
                                                                                style:
                                                                                  {
                                                                                    height:
                                                                                      "100%",
                                                                                    width:
                                                                                      "100%",
                                                                                  },
                                                                                tAnOtrGiG:
                                                                                  "Community Takeover Since Sep '24",
                                                                                variant:
                                                                                  "oSl4e0fPr",
                                                                                width:
                                                                                  "100%",
                                                                                XgTiR1Rgh:
                                                                                  "Community Owned",
                                                                                y33U6RPLX:
                                                                                  "CTO",
                                                                              }
                                                                            ),
                                                                        }),
                                                                    }
                                                                  ),
                                                                }),
                                                              }),
                                                              e(l, {
                                                                breakpoint: a,
                                                                overrides: {
                                                                  Byvh2ikpS: {
                                                                    width:
                                                                      "365px",
                                                                  },
                                                                  KffKQZNjt: {
                                                                    width:
                                                                      "502.6667px",
                                                                  },
                                                                },
                                                                children: e(Y, {
                                                                  width:
                                                                    "688.6667px",
                                                                  children: e(
                                                                    S,
                                                                    {
                                                                      animate:
                                                                        mt,
                                                                      className:
                                                                        "framer-cf92tp-container",
                                                                      exit: ft,
                                                                      initial:
                                                                        ct,
                                                                      children:
                                                                        e(Ue, {
                                                                          height:
                                                                            "100%",
                                                                          hn11_Vo84:
                                                                            !0,
                                                                          id: "FPmQXT7Yp",
                                                                          layoutId:
                                                                            "FPmQXT7Yp",
                                                                          style:
                                                                            {
                                                                              height:
                                                                                "100%",
                                                                              width:
                                                                                "100%",
                                                                            },
                                                                          tAnOtrGiG:
                                                                            "as Part of the Hedz Collection",
                                                                          variant:
                                                                            "oSl4e0fPr",
                                                                          Wb6AcaNIX:
                                                                            Hr(
                                                                              {
                                                                                src: "/framerusercontent.com/images/wTV0g7PqtOh7TbuuJWE6f44TE.png",
                                                                                srcSet:
                                                                                  "/framerusercontent.com/images/wTV0g7PqtOh7TbuuJWE6f44TE.png?scale-down-to=512 512w,/framerusercontent.com/images/wTV0g7PqtOh7TbuuJWE6f44TE.png?scale-down-to=1024 1024w,/framerusercontent.com/images/wTV0g7PqtOh7TbuuJWE6f44TE.png 1339w",
                                                                              },
                                                                              ""
                                                                            ),
                                                                          width:
                                                                            "100%",
                                                                          XgTiR1Rgh:
                                                                            "Narrative",
                                                                          y33U6RPLX:
                                                                            "Created by Matt Furie",
                                                                        }),
                                                                    }
                                                                  ),
                                                                }),
                                                              }),
                                                            ],
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                    e(za, {
                                                      animate: Ga,
                                                      className: E(
                                                        K,
                                                        "framer-1o9g9px"
                                                      ),
                                                      "data-framer-name":
                                                        "close",
                                                      "data-framer-portal-id":
                                                        "jaq4ea",
                                                      exit: us,
                                                      initial: qa,
                                                      onTap: V({ overlay: M }),
                                                      transformTemplate: re,
                                                      whileHover: xs,
                                                      children: e(Y, {
                                                        children: e(S, {
                                                          className:
                                                            "framer-506dj8-container",
                                                          transformTemplate: st,
                                                          children: e(qe, {
                                                            customColor:
                                                              "rgb(255, 255, 255)",
                                                            customPadding: 0,
                                                            customStrokeWidth: 2,
                                                            customSvgCode:
                                                              '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="black"/> </svg>',
                                                            description: "",
                                                            height: "100%",
                                                            id: "nq5vE_YOk",
                                                            layoutId:
                                                              "nq5vE_YOk",
                                                            lineCap: "butt",
                                                            lineJoin: "miter",
                                                            style: {
                                                              height: "100%",
                                                              width: "100%",
                                                            },
                                                            title: "",
                                                            width: "100%",
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                                Ar()
                                              ),
                                            }),
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              }),
                            }),
                        }),
                    }),
                }),
                e(l, {
                  breakpoint: a,
                  overrides: {
                    Byvh2ikpS: {
                      __framer__transformTargets: [
                        {
                          target: {
                            opacity: 0.8,
                            rotate: 0,
                            rotateX: 0,
                            rotateY: 0,
                            scale: 1,
                            skewX: 0,
                            skewY: 0,
                            x: 0,
                            y: 250,
                          },
                        },
                        {
                          target: {
                            opacity: 1,
                            rotate: 0,
                            rotateX: 0,
                            rotateY: 0,
                            scale: 1,
                            skewX: 0,
                            skewY: 0,
                            x: 0,
                            y: 0,
                          },
                        },
                      ],
                    },
                    KffKQZNjt: { transformTemplate: void 0 },
                  },
                  children: _(Lt, {
                    __framer__spring: {
                      damping: 60,
                      delay: 0,
                      duration: 0.3,
                      ease: [0.44, 0, 0.56, 1],
                      mass: 1,
                      stiffness: 500,
                      type: "spring",
                    },
                    __framer__styleTransformEffectEnabled: !0,
                    __framer__transformTargets: [
                      {
                        target: {
                          opacity: 0.8,
                          rotate: 0,
                          rotateX: 0,
                          rotateY: 0,
                          scale: 1,
                          skewX: 0,
                          skewY: 0,
                          x: 0,
                          y: 100,
                        },
                      },
                      {
                        target: {
                          opacity: 1,
                          rotate: 0,
                          rotateX: 0,
                          rotateY: 0,
                          scale: 1,
                          skewX: 0,
                          skewY: 0,
                          x: 0,
                          y: 0,
                        },
                      },
                    ],
                    __framer__transformTrigger: "onInView",
                    __perspectiveFX: !1,
                    __targetOpacity: 1,
                    className: "framer-9zpetz",
                    "data-border": !0,
                    "data-framer-name": "meta",
                    transformTemplate: re,
                    children: [
                    ],
                  }),
                }),
                e("div", {
                  className: "framer-1t24yw8",
                  "data-framer-name": "caption-holder",
                  children: e(l, {
                    breakpoint: a,
                    overrides: { Byvh2ikpS: { width: "370px" } },
                    children: e(Y, {
                      height: 48,
                      width: "639px",
                      y: 944,
                      children: e(l, {
                        breakpoint: a,
                        overrides: {
                          Byvh2ikpS: {
                            __framer__enter: Na,
                            __framer__threshold: 1,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                offset: 250,
                                ref: G,
                                target: {
                                  opacity: 0,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 100,
                                },
                              },
                            ],
                          },
                        },
                        children: e(Xi, {
                          __framer__animate: { transition: Ba },
                          __framer__animateOnce: !1,
                          __framer__enter: ys,
                          __framer__exit: vs,
                          __framer__spring: {
                            bounce: 0.2,
                            damping: 60,
                            delay: 0,
                            duration: 0.3,
                            durationBasedSpring: !0,
                            ease: [0.44, 0, 0.56, 1],
                            mass: 1,
                            stiffness: 500,
                            type: "spring",
                          },
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__styleTransformEffectEnabled: !0,
                          __framer__targets: [{ ref: T, target: "animate" }],
                          __framer__threshold: 0.5,
                          __framer__transformTargets: [
                            {
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0,
                              },
                            },
                            {
                              offset: 250,
                              ref: G,
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 400,
                              },
                            },
                          ],
                          __framer__transformTrigger: "onScrollTarget",
                          __framer__transformViewportThreshold: 1,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: "framer-1yrjsz2-container",
                          children: e(l, {
                            breakpoint: a,
                            overrides: {
                              Byvh2ikpS: {
                                __framer__targets: [
                                  { ref: Z, target: "kc7aC3P2l" },
                                  { ref: D, target: "GmVAWTfaL" },
                                  { ref: g, target: "v1W3w7FD4" },
                                  { ref: oe, target: "c9Qk6uHGo" },
                                  { ref: I, target: "s_qou4L88" },
                                  { offset: -800, ref: W, target: "QCiXVrMlL" },
                                  { ref: $, target: "XTjSCZ3LX" },
                                  { ref: de, target: "JO9dP7zD1" },
                                  { ref: Ie, target: "pNafs84zT" },
                                ],
                                variant: "lVU25KIsK",
                              },
                            },
                            children: e(zi, {
                              __framer__animateOnce: !1,
                              __framer__targets: [
                                { ref: Z, target: "OtSX71sTU" },
                                { ref: D, target: "mnNfk6f2w" },
                                { ref: g, target: "y_lBCAqRP" },
                                { ref: oe, target: "ZkygCb7DR" },
                                { ref: I, target: "NCKO0NgR2" },
                                { offset: -800, ref: W, target: "v2mtFeAuk" },
                                { ref: $, target: "tiRcsvzuk" },
                                { ref: de, target: "Od5xvdYEm" },
                                { ref: Ie, target: "kMUl0Afd9" },
                              ],
                              __framer__threshold: 1,
                              __framer__variantAppearEffectEnabled: !0,
                              height: "100%",
                              id: "PEhEoizu1",
                              layoutId: "PEhEoizu1",
                              style: { width: "100%" },
                              variant: "ap20IZUme",
                              width: "100%",
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
                _("header", {
                  className: "framer-o0mzm0",
                  "data-framer-name": "Main",
                  children: [
                    _("div", {
                      background: { alt: "", fit: "fill" },
                      className: "framer-ab08lb",
                      "data-framer-name": "header",
                      id: lt,
                      ref: ke,
                      children: [
                        e(Xa, {
                          __framer__adjustPosition: !1,
                          __framer__loop: ks,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: "mirror",
                          __framer__loopTransition: bs,
                          __framer__offset: 0,
                          __framer__parallaxTransformEnabled: !0,
                          __framer__speed: 77,
                          __framer__styleTransformEffectEnabled: !0,
                          __framer__transformTargets: [
                            {
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0,
                              },
                            },
                            {
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 0.9,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0,
                              },
                            },
                          ],
                          __framer__transformTrigger: "onScroll",
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          animate: Ua,
                          background: {
                            alt: "",
                            fit: "fill",
                            loading: i(-343.75),
                            sizes: "calc(100vw + 1230px)",
                            src: "/framerusercontent.com/images/LaoJmwRjd2TWErGC6QIpGkAWuwU.webp",
                            srcSet:
                              "/framerusercontent.com/images/LaoJmwRjd2TWErGC6QIpGkAWuwU.webp?scale-down-to=512 512w,/framerusercontent.com/images/LaoJmwRjd2TWErGC6QIpGkAWuwU.webp?scale-down-to=1024 1024w,/framerusercontent.com/images/LaoJmwRjd2TWErGC6QIpGkAWuwU.webp?scale-down-to=2048 2048w,/framerusercontent.com/images/LaoJmwRjd2TWErGC6QIpGkAWuwU.webp 3350w",
                          },
                          className: "framer-wzyyrq",
                          "data-framer-appear-id": "wzyyrq",
                          "data-framer-name": "cloud-bg",
                          initial: Fs,
                          optimized: !0,
                        }),
                        _("div", {
                          className: "framer-gw8nh1",
                          children: [
                            e(Y, {
                              children: e(S, {
                                className: "framer-1vv9068-container",
                                children: e(Ve, {
                                  alignment: "center",
                                  direction: "right",
                                  fadeOptions: {
                                    fadeAlpha: 0,
                                    fadeContent: !1,
                                    fadeInset: 1,
                                    fadeWidth: 10,
                                    overflow: !1,
                                  },
                                  gap: 40,
                                  height: "100%",
                                  hoverFactor: 1,
                                  id: "i3i6KuylR",
                                  layoutId: "i3i6KuylR",
                                  padding: 10,
                                  paddingBottom: 10,
                                  paddingLeft: 10,
                                  paddingPerSide: !1,
                                  paddingRight: 10,
                                  paddingTop: 10,
                                  sizingOptions: {
                                    heightType: !0,
                                    widthType: !0,
                                  },
                                  slots: [
                                    e(Y, {
                                      height: 182,
                                      width: "1547px",
                                      children: e(S, {
                                        className: "framer-1vnk48o-container",
                                        children: e(Ee, {
                                          height: "100%",
                                          id: "RgO0jT_J7",
                                          layoutId: "RgO0jT_J7",
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                          width: "100%",
                                        }),
                                      }),
                                    }),
                                  ],
                                  speed: 35,
                                  style: { height: "100%", width: "100%" },
                                  width: "100%",
                                }),
                              }),
                            }),
                            e(Y, {
                              children: e(S, {
                                className: "framer-prwvm9-container",
                                children: e(Ve, {
                                  alignment: "center",
                                  direction: "left",
                                  fadeOptions: {
                                    fadeAlpha: 0,
                                    fadeContent: !1,
                                    fadeInset: 1,
                                    fadeWidth: 10,
                                    overflow: !1,
                                  },
                                  gap: 40,
                                  height: "100%",
                                  hoverFactor: 1,
                                  id: "QpRuDtEbe",
                                  layoutId: "QpRuDtEbe",
                                  padding: 10,
                                  paddingBottom: 10,
                                  paddingLeft: 10,
                                  paddingPerSide: !1,
                                  paddingRight: 10,
                                  paddingTop: 10,
                                  sizingOptions: {
                                    heightType: !0,
                                    widthType: !0,
                                  },
                                  slots: [
                                    e(Y, {
                                      height: 182,
                                      width: "1547px",
                                      children: e(S, {
                                        className: "framer-1vnk48o-container",
                                        children: e(Ee, {
                                          height: "100%",
                                          id: "RgO0jT_J7",
                                          layoutId: "RgO0jT_J7",
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                          width: "100%",
                                        }),
                                      }),
                                    }),
                                  ],
                                  speed: 35,
                                  style: { height: "100%", width: "100%" },
                                  width: "100%",
                                }),
                              }),
                            }),
                            e(Y, {
                              children: e(S, {
                                className: "framer-11960q8-container",
                                children: e(Ve, {
                                  alignment: "center",
                                  direction: "right",
                                  fadeOptions: {
                                    fadeAlpha: 0,
                                    fadeContent: !1,
                                    fadeInset: 1,
                                    fadeWidth: 10,
                                    overflow: !1,
                                  },
                                  gap: 40,
                                  height: "100%",
                                  hoverFactor: 1,
                                  id: "NwGRrihRI",
                                  layoutId: "NwGRrihRI",
                                  padding: 10,
                                  paddingBottom: 10,
                                  paddingLeft: 10,
                                  paddingPerSide: !1,
                                  paddingRight: 10,
                                  paddingTop: 10,
                                  sizingOptions: {
                                    heightType: !0,
                                    widthType: !0,
                                  },
                                  slots: [
                                    e(Y, {
                                      height: 182,
                                      width: "1547px",
                                      children: e(S, {
                                        className: "framer-1vnk48o-container",
                                        children: e(Ee, {
                                          height: "100%",
                                          id: "RgO0jT_J7",
                                          layoutId: "RgO0jT_J7",
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                          width: "100%",
                                        }),
                                      }),
                                    }),
                                  ],
                                  speed: 35,
                                  style: { height: "100%", width: "100%" },
                                  width: "100%",
                                }),
                              }),
                            }),
                            e(Y, {
                              children: e(S, {
                                className: "framer-kmtkng-container",
                                children: e(Ve, {
                                  alignment: "center",
                                  direction: "left",
                                  fadeOptions: {
                                    fadeAlpha: 0,
                                    fadeContent: !1,
                                    fadeInset: 1,
                                    fadeWidth: 10,
                                    overflow: !1,
                                  },
                                  gap: 40,
                                  height: "100%",
                                  hoverFactor: 1,
                                  id: "rjfofOAJD",
                                  layoutId: "rjfofOAJD",
                                  padding: 10,
                                  paddingBottom: 10,
                                  paddingLeft: 10,
                                  paddingPerSide: !1,
                                  paddingRight: 10,
                                  paddingTop: 10,
                                  sizingOptions: {
                                    heightType: !0,
                                    widthType: !0,
                                  },
                                  slots: [
                                    e(Y, {
                                      height: 182,
                                      width: "1547px",
                                      children: e(S, {
                                        className: "framer-1vnk48o-container",
                                        children: e(Ee, {
                                          height: "100%",
                                          id: "RgO0jT_J7",
                                          layoutId: "RgO0jT_J7",
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                          width: "100%",
                                        }),
                                      }),
                                    }),
                                  ],
                                  speed: 35,
                                  style: { height: "100%", width: "100%" },
                                  width: "100%",
                                }),
                              }),
                            }),
                            e(Y, {
                              children: e(S, {
                                className: "framer-1fh6v44-container",
                                children: e(Ve, {
                                  alignment: "center",
                                  direction: "right",
                                  fadeOptions: {
                                    fadeAlpha: 0,
                                    fadeContent: !1,
                                    fadeInset: 1,
                                    fadeWidth: 10,
                                    overflow: !1,
                                  },
                                  gap: 40,
                                  height: "100%",
                                  hoverFactor: 1,
                                  id: "Fk3SDgBhw",
                                  layoutId: "Fk3SDgBhw",
                                  padding: 10,
                                  paddingBottom: 10,
                                  paddingLeft: 10,
                                  paddingPerSide: !1,
                                  paddingRight: 10,
                                  paddingTop: 10,
                                  sizingOptions: {
                                    heightType: !0,
                                    widthType: !0,
                                  },
                                  slots: [
                                    e(Y, {
                                      height: 182,
                                      width: "1547px",
                                      children: e(S, {
                                        className: "framer-1vnk48o-container",
                                        children: e(Ee, {
                                          height: "100%",
                                          id: "RgO0jT_J7",
                                          layoutId: "RgO0jT_J7",
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                          width: "100%",
                                        }),
                                      }),
                                    }),
                                  ],
                                  speed: 35,
                                  style: { height: "100%", width: "100%" },
                                  width: "100%",
                                }),
                              }),
                            }),
                            e(Y, {
                              children: e(S, {
                                className: "framer-ps30qn-container",
                                children: e(Ve, {
                                  alignment: "center",
                                  direction: "left",
                                  fadeOptions: {
                                    fadeAlpha: 0,
                                    fadeContent: !1,
                                    fadeInset: 1,
                                    fadeWidth: 10,
                                    overflow: !1,
                                  },
                                  gap: 40,
                                  height: "100%",
                                  hoverFactor: 1,
                                  id: "pbGcpJ4Bf",
                                  layoutId: "pbGcpJ4Bf",
                                  padding: 10,
                                  paddingBottom: 10,
                                  paddingLeft: 10,
                                  paddingPerSide: !1,
                                  paddingRight: 10,
                                  paddingTop: 10,
                                  sizingOptions: {
                                    heightType: !0,
                                    widthType: !0,
                                  },
                                  slots: [
                                    e(Y, {
                                      height: 182,
                                      width: "1547px",
                                      children: e(S, {
                                        className: "framer-1vnk48o-container",
                                        children: e(Ee, {
                                          height: "100%",
                                          id: "RgO0jT_J7",
                                          layoutId: "RgO0jT_J7",
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                          width: "100%",
                                        }),
                                      }),
                                    }),
                                  ],
                                  speed: 35,
                                  style: { height: "100%", width: "100%" },
                                  width: "100%",
                                }),
                              }),
                            }),
                          ],
                        }),
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              background: {
                                alt: "",
                                fit: "stretch",
                                loading: i(1069),
                                positionX: "center",
                                positionY: "center",
                                sizes: "100vw",
                                src: "/framerusercontent.com/images/adWN9mFtloX62KLxxCMxUgYwH8.png",
                                srcSet:
                                  "/framerusercontent.com/images/adWN9mFtloX62KLxxCMxUgYwH8.png?scale-down-to=512 512w,/framerusercontent.com/images/adWN9mFtloX62KLxxCMxUgYwH8.png?scale-down-to=1024 1024w,/framerusercontent.com/images/adWN9mFtloX62KLxxCMxUgYwH8.png 1920w",
                              },
                            },
                          },
                          children: e(B, {
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: i(993),
                              sizes: "100vw",
                              src: "/framerusercontent.com/images/adWN9mFtloX62KLxxCMxUgYwH8.png",
                              srcSet:
                                "/framerusercontent.com/images/adWN9mFtloX62KLxxCMxUgYwH8.png?scale-down-to=512 512w,/framerusercontent.com/images/adWN9mFtloX62KLxxCMxUgYwH8.png?scale-down-to=1024 1024w,/framerusercontent.com/images/adWN9mFtloX62KLxxCMxUgYwH8.png 1920w",
                            },
                            className: "framer-mwns4z",
                            "data-framer-name": "image 38",
                          }),
                        }),
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              background: {
                                alt: "",
                                fit: "fit",
                                intrinsicHeight: 1055,
                                intrinsicWidth: 763,
                                loading: i(515.6872037914692),
                                pixelHeight: 1055,
                                pixelWidth: 763,
                                positionX: "center",
                                positionY: "bottom",
                                sizes: "497px",
                                src: "/framerusercontent.com/images/uTMeX2YBQRieIe6ag80BbHQQ1s.webp",
                                srcSet:
                                  "/framerusercontent.com/images/uTMeX2YBQRieIe6ag80BbHQQ1s.webp?scale-down-to=1024 740w,/framerusercontent.com/images/uTMeX2YBQRieIe6ag80BbHQQ1s.webp 763w",
                              },
                            },
                          },
                          children: e(Xa, {
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 0.9,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 216,
                                },
                              },
                            ],
                            __framer__transformTrigger: "onScroll",
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            animate: Ua,
                            background: {
                              alt: "",
                              fit: "fit",
                              intrinsicHeight: 1055,
                              intrinsicWidth: 763,
                              loading: i(322.5),
                              pixelHeight: 1055,
                              pixelWidth: 763,
                              positionX: "center",
                              positionY: "bottom",
                              sizes: "674px",
                              src: "/framerusercontent.com/images/uTMeX2YBQRieIe6ag80BbHQQ1s.webp",
                              srcSet:
                                "/framerusercontent.com/images/uTMeX2YBQRieIe6ag80BbHQQ1s.webp?scale-down-to=1024 740w,/framerusercontent.com/images/uTMeX2YBQRieIe6ag80BbHQQ1s.webp 763w",
                            },
                            className: "framer-8kho14",
                            "data-framer-appear-id": "8kho14",
                            "data-framer-name": "Lilfrog-matt-furie-hedz",
                            initial: Na,
                            optimized: !0,
                          }),
                        }),
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              drag: void 0,
                              onMouseDown: void 0,
                              whileTap: void 0,
                            },
                          },
                          children: _(Ni, {
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            animate: Rs,
                            className: "framer-arg8mv",
                            "data-framer-appear-id": "arg8mv",
                            "data-framer-name": "hedz-official",
                            drag: !0,
                            dragConstraints: ke,
                            dragMomentum: !0,
                            dragTransition: Cs,
                            initial: Ys,
                            onMouseDown: Zs,
                            optimized: !0,
                            whileHover: Vs,
                            whileTap: Ks,
                            children: [
                              e("div", {
                                className: "framer-2hsnyy",
                                "data-framer-name": "bg",
                              }),
                              e("div", {
                                className: "framer-ad7swl",
                                "data-framer-name": "bg",
                              }),
                              e(l, {
                                breakpoint: a,
                                overrides: { Byvh2ikpS: { y: 886 } },
                                children: e(Y, {
                                  height: 164,
                                  width: "236px",
                                  y: 726,
                                  children: e(S, {
                                    className: "framer-x0dk9s-container",
                                    children: e(xr, {
                                      height: "100%",
                                      id: "VtUMDGe5U",
                                      layoutId: "VtUMDGe5U",
                                      style: { height: "100%", width: "100%" },
                                      width: "100%",
                                    }),
                                  }),
                                }),
                              }),
                              _(Hi, {
                                animate: Ts,
                                className: "framer-chujfk",
                                "data-framer-appear-id": "chujfk",
                                "data-framer-name": "info-wrapper",
                                initial: Is,
                                optimized: !0,
                                transformTemplate: re,
                                children: [
                                  e(l, {
                                    breakpoint: a,
                                    overrides: {
                                      Byvh2ikpS: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          loading: i(1037.5),
                                          sizes: "39px",
                                          src: "/framerusercontent.com/images/2CyawhHhk99tNXBN1u7VRCipADw.png",
                                          srcSet:
                                            "/framerusercontent.com/images/2CyawhHhk99tNXBN1u7VRCipADw.png?scale-down-to=512 512w,/framerusercontent.com/images/2CyawhHhk99tNXBN1u7VRCipADw.png?scale-down-to=1024 1024w,/framerusercontent.com/images/2CyawhHhk99tNXBN1u7VRCipADw.png 1116w",
                                        },
                                      },
                                    },
                                    children: e(B, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        loading: i(877.5),
                                        sizes: "39px",
                                        src: "/framerusercontent.com/images/2CyawhHhk99tNXBN1u7VRCipADw.png",
                                        srcSet:
                                          "/framerusercontent.com/images/2CyawhHhk99tNXBN1u7VRCipADw.png?scale-down-to=512 512w,/framerusercontent.com/images/2CyawhHhk99tNXBN1u7VRCipADw.png?scale-down-to=1024 1024w,/framerusercontent.com/images/2CyawhHhk99tNXBN1u7VRCipADw.png 1116w",
                                      },
                                      className: "framer-1nctxk2",
                                      "data-framer-name": "lil-frog-logo",
                                    }),
                                  }),
                                  e(A, {
                                    __fromCanvasComponent: !0,
                                    children: e(k, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector": "SW50ZXItQm9sZA==",
                                          "--framer-font-family":
                                            '"Inter", "Inter Placeholder", sans-serif',
                                          "--framer-font-size": "12px",
                                          "--framer-font-weight": "700",
                                          "--framer-line-height": "100%",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                          "--framer-text-transform":
                                            "uppercase",
                                        },
                                        children:
                                          "Lil Frog is Part of the Hedz Collection  by Matt Furie.",
                                      }),
                                    }),
                                    className: "framer-pk6iq1",
                                    "data-framer-name":
                                      "Lil Frog is Part of the Hedz Collection by Matt Furie.",
                                    fonts: ["Inter-Bold"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                  _("div", {
                                    className: "framer-1gq29qj",
                                    "data-framer-name": "badge",
                                    children: [
                                      e(Lt, {
                                        __framer__loop: zs,
                                        __framer__loopEffectEnabled: !0,
                                        __framer__loopRepeatDelay: 0,
                                        __framer__loopRepeatType: "loop",
                                        __framer__loopTransition: Ds,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: "framer-29vh6f",
                                        "data-framer-name": "bg",
                                        children: e(Ne, {
                                          className: "framer-11w7oi1",
                                          "data-framer-name": "badge",
                                          layout: "position",
                                          opacity: 1,
                                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 8.767 0.548 C 9.412 -0.183 10.588 -0.183 11.233 0.548 L 12.011 1.428 C 12.407 1.876 13.033 2.071 13.628 1.932 L 14.797 1.658 C 15.768 1.431 16.719 2.093 16.793 3.048 L 16.883 4.199 C 16.928 4.784 17.315 5.295 17.882 5.517 L 18.996 5.955 C 19.92 6.318 20.283 7.389 19.758 8.204 L 19.125 9.185 C 18.803 9.684 18.803 10.316 19.125 10.815 L 19.758 11.796 C 20.283 12.611 19.92 13.682 18.996 14.045 L 17.882 14.483 C 17.315 14.705 16.928 15.216 16.883 15.801 L 16.793 16.952 C 16.719 17.907 15.768 18.569 14.797 18.342 L 13.628 18.068 C 13.033 17.929 12.407 18.124 12.011 18.572 L 11.233 19.452 C 10.588 20.183 9.412 20.183 8.767 19.452 L 7.989 18.572 C 7.593 18.124 6.967 17.929 6.372 18.068 L 5.203 18.342 C 4.232 18.569 3.281 17.907 3.207 16.952 L 3.117 15.801 C 3.072 15.216 2.685 14.705 2.118 14.483 L 1.004 14.045 C 0.08 13.682 -0.283 12.611 0.242 11.796 L 0.875 10.815 C 1.197 10.316 1.197 9.684 0.875 9.185 L 0.242 8.204 C -0.283 7.389 0.08 6.318 1.004 5.955 L 2.118 5.517 C 2.685 5.295 3.072 4.784 3.117 4.199 L 3.207 3.048 C 3.281 2.093 4.232 1.431 5.203 1.658 L 6.372 1.932 C 6.967 2.071 7.593 1.876 7.989 1.428 Z" fill="rgb(26, 98, 232)"></path></svg>',
                                          svgContentId: 10819771416,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      e(Ne, {
                                        className: "framer-bv7uhv",
                                        layout: "position",
                                        opacity: 1,
                                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 11 8"><path d="M 3.79 6.034 L 1.668 4 L 0.961 4.678 L 3.79 7.39 L 9.851 1.579 L 9.144 0.901 Z" fill="rgb(255,255,255)" stroke="rgb(255,255,255)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                                        svgContentId: 9480013380,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    _("div", {
                      className: "framer-18hopws",
                      "data-framer-name": "introduction-hands",
                      id: Be,
                      ref: T,
                      children: [
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(975),
                                sizes: "calc(100vw + 308px)",
                                src: "/framerusercontent.com/images/6lUIM4p6PMrzT2NyD7lfGJdgFOM.png",
                                srcSet:
                                  "/framerusercontent.com/images/6lUIM4p6PMrzT2NyD7lfGJdgFOM.png?scale-down-to=1024 910w,/framerusercontent.com/images/6lUIM4p6PMrzT2NyD7lfGJdgFOM.png?scale-down-to=2048 1820w,/framerusercontent.com/images/6lUIM4p6PMrzT2NyD7lfGJdgFOM.png 3200w",
                              },
                            },
                          },
                          children: e(R, {
                            __framer__spring: {
                              damping: 60,
                              delay: 0,
                              duration: 0.3,
                              ease: [0.44, 0, 0.56, 1],
                              mass: 1,
                              stiffness: 500,
                              type: "spring",
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 15,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                            ],
                            __framer__transformTrigger: "onInView",
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: i(975),
                              sizes: "calc(100vw + 723px)",
                              src: "/framerusercontent.com/images/6lUIM4p6PMrzT2NyD7lfGJdgFOM.png",
                              srcSet:
                                "/framerusercontent.com/images/6lUIM4p6PMrzT2NyD7lfGJdgFOM.png?scale-down-to=1024 910w,/framerusercontent.com/images/6lUIM4p6PMrzT2NyD7lfGJdgFOM.png?scale-down-to=2048 1820w,/framerusercontent.com/images/6lUIM4p6PMrzT2NyD7lfGJdgFOM.png 3200w",
                            },
                            className: "framer-esbw9t",
                            "data-framer-name": "Noise & Texture",
                          }),
                        }),
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(1237.7700000000002),
                                sizes: "570px",
                                src: "/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png",
                                srcSet:
                                  "/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png?scale-down-to=1024 822w,/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png 1140w",
                              },
                              style: { rotate: 28, scale: 0.6 },
                            },
                          },
                          children: e(R, {
                            __framer__spring: {
                              bounce: 0.2,
                              damping: 60,
                              delay: 0,
                              duration: 1,
                              durationBasedSpring: !0,
                              ease: [0.44, 0, 0.56, 1],
                              mass: 1,
                              stiffness: 500,
                              type: "spring",
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                ref: T,
                                target: {
                                  opacity: 1,
                                  rotate: 25,
                                  rotateX: 25,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                            ],
                            __framer__transformTrigger: "onScrollTarget",
                            __framer__transformViewportThreshold: 1,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: i(1569.0000000000005),
                              sizes: "570px",
                              src: "/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png",
                              srcSet:
                                "/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png?scale-down-to=1024 822w,/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png 1140w",
                            },
                            className: "framer-6yl0fr",
                            "data-framer-name": "mush",
                            style: { rotate: 28 },
                          }),
                        }),
                        Q() &&
                          e(R, {
                            __framer__spring: {
                              damping: 60,
                              delay: 0,
                              duration: 0.3,
                              ease: [0.44, 0, 0.56, 1],
                              mass: 1,
                              stiffness: 500,
                              type: "spring",
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 0.9,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 20,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1.1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 78,
                                  y: -500,
                                },
                              },
                            ],
                            __framer__transformTrigger: "onInView",
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: i(1598.0000000000005),
                              sizes: "790px",
                              src: "/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png",
                              srcSet:
                                "/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png?scale-down-to=1024 822w,/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png 1140w",
                            },
                            className: "framer-1ijcf09 hidden-14718gw",
                            "data-framer-name": "mush",
                            style: { rotate: 41 },
                          }),
                        Q() &&
                          e(R, {
                            __framer__animate: { transition: Ur },
                            __framer__animateOnce: !1,
                            __framer__enter: Vt,
                            __framer__exit: er,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 0.9,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 20,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1.1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 78,
                                  y: -250,
                                },
                              },
                            ],
                            __framer__transformTrigger: "onInView",
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: i(1367),
                              sizes: "863px",
                              src: "/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png",
                              srcSet:
                                "/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png?scale-down-to=1024 822w,/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png 1140w",
                            },
                            className: "framer-1l5567a hidden-14718gw",
                            "data-framer-name": "mush",
                            style: { rotate: -23 },
                          }),
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(1265),
                                sizes: "585px",
                                src: "/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png",
                                srcSet:
                                  "/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png?scale-down-to=1024 822w,/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png 1140w",
                              },
                              style: { rotate: -23, scale: 0.6 },
                            },
                          },
                          children: e(R, {
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 0.9,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 20,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1.1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 78,
                                  y: -150,
                                },
                              },
                            ],
                            __framer__transformTrigger: "onScroll",
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: i(1814),
                              sizes: "585px",
                              src: "/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png",
                              srcSet:
                                "/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png?scale-down-to=1024 822w,/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png 1140w",
                            },
                            className: "framer-1p3jjql",
                            "data-framer-name": "mush",
                            style: { rotate: -23 },
                          }),
                        }),
                        e(l, {
                          breakpoint: a,
                          overrides: { Byvh2ikpS: { style: { scale: 0.6 } } },
                          children: e(Lt, {
                            __framer__spring: {
                              damping: 100,
                              delay: 0,
                              duration: 0.3,
                              ease: [0.44, 0, 0.56, 1],
                              mass: 0.5,
                              stiffness: 500,
                              type: "spring",
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 0.8,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 15,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1.115,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                            ],
                            __framer__transformTrigger: "onInView",
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: "framer-1hhfz7f",
                            "data-framer-name": "hand-left",
                            children: e(l, {
                              breakpoint: a,
                              overrides: {
                                Byvh2ikpS: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 959,
                                    intrinsicWidth: 816,
                                    loading: i(978),
                                    pixelHeight: 959,
                                    pixelWidth: 816,
                                    sizes: "816px",
                                    src: "/framerusercontent.com/images/ZCRZG4N4UZdy0WWsACAPCA3sSJQ.png",
                                    srcSet:
                                      "/framerusercontent.com/images/ZCRZG4N4UZdy0WWsACAPCA3sSJQ.png 816w",
                                  },
                                },
                              },
                              children: e(B, {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 959,
                                  intrinsicWidth: 816,
                                  loading: i(1527),
                                  pixelHeight: 959,
                                  pixelWidth: 816,
                                  sizes: "816px",
                                  src: "/framerusercontent.com/images/ZCRZG4N4UZdy0WWsACAPCA3sSJQ.png",
                                  srcSet:
                                    "/framerusercontent.com/images/ZCRZG4N4UZdy0WWsACAPCA3sSJQ.png 816w",
                                },
                                className: "framer-txkbu2",
                                "data-framer-name": "Scene2-hand-left",
                              }),
                            }),
                          }),
                        }),
                        e(l, {
                          breakpoint: a,
                          overrides: { Byvh2ikpS: { style: { scale: 0.6 } } },
                          children: e(Lt, {
                            __framer__spring: {
                              damping: 100,
                              delay: 0,
                              duration: 0.3,
                              ease: [0.44, 0, 0.56, 1],
                              mass: 0.7,
                              stiffness: 500,
                              type: "spring",
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 0.75,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                target: {
                                  opacity: 1,
                                  rotate: -15,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1.25,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                            ],
                            __framer__transformTrigger: "onInView",
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: "framer-1xyr7df",
                            "data-framer-name": "hand-right",
                            children: e(l, {
                              breakpoint: a,
                              overrides: {
                                Byvh2ikpS: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 743,
                                    intrinsicWidth: 565,
                                    loading: i(1191),
                                    pixelHeight: 743,
                                    pixelWidth: 565,
                                    sizes: "565px",
                                    src: "/framerusercontent.com/images/133nNcOnOVKZpSohhcYPLEak8.png",
                                    srcSet:
                                      "/framerusercontent.com/images/133nNcOnOVKZpSohhcYPLEak8.png 565w",
                                  },
                                },
                              },
                              children: e(B, {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 743,
                                  intrinsicWidth: 565,
                                  loading: i(1740),
                                  pixelHeight: 743,
                                  pixelWidth: 565,
                                  sizes: "565px",
                                  src: "/framerusercontent.com/images/133nNcOnOVKZpSohhcYPLEak8.png",
                                  srcSet:
                                    "/framerusercontent.com/images/133nNcOnOVKZpSohhcYPLEak8.png 565w",
                                },
                                className: "framer-wi83ky",
                                "data-framer-name": "Scene2-hand-right",
                              }),
                            }),
                          }),
                        }),
                        e("div", { className: "framer-1pdbebv" }),
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(1199),
                                sizes: "calc(100vw + 130px)",
                                src: "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png",
                                srcSet:
                                  "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=512 512w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=1024 1024w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png 1920w",
                              },
                            },
                          },
                          children: e(B, {
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: i(1199),
                              sizes: "100vw",
                              src: "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png",
                              srcSet:
                                "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=512 512w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=1024 1024w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png 1920w",
                            },
                            className: "framer-1d7qwd5",
                            "data-framer-name": "splitter-zig-zag 2",
                            style: { rotate: 180 },
                          }),
                        }),
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(1791),
                                sizes: "100vw",
                                src: "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png",
                                srcSet:
                                  "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=512 512w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=1024 1024w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png 1920w",
                              },
                            },
                          },
                          children: e(B, {
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: i(2340),
                              sizes: "100vw",
                              src: "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png",
                              srcSet:
                                "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=512 512w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=1024 1024w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png 1920w",
                            },
                            className: "framer-wup9le",
                            "data-framer-name": "splitter-zig-zag 2",
                          }),
                        }),
                      ],
                    }),
                    _("div", {
                      className: "framer-tgbvc8",
                      "data-framer-name": "mushroom-mouth",
                      id: pt,
                      ref: he,
                      children: [
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(1715),
                                sizes: "672px",
                                src: "/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png",
                                srcSet:
                                  "/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png?scale-down-to=1024 822w,/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png 1140w",
                              },
                              style: { rotate: 23, scale: 0.6 },
                            },
                            KffKQZNjt: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(2535),
                                sizes: "672px",
                                src: "/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png",
                                srcSet:
                                  "/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png?scale-down-to=1024 822w,/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png 1140w",
                              },
                            },
                          },
                          children: e(R, {
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 0.9,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                offset: 0,
                                ref: he,
                                target: {
                                  opacity: 1,
                                  rotate: -20,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1.1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: -100,
                                  y: 26,
                                },
                              },
                            ],
                            __framer__transformTrigger: "onScrollTarget",
                            __framer__transformViewportThreshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: i(2685),
                              sizes: "672px",
                              src: "/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png",
                              srcSet:
                                "/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png?scale-down-to=1024 822w,/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png 1140w",
                            },
                            className: "framer-11fbw9v",
                            "data-framer-name": "mush",
                            style: { rotate: 23 },
                          }),
                        }),
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(1915),
                                sizes: "672px",
                                src: "/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png",
                                srcSet:
                                  "/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png?scale-down-to=1024 822w,/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png 1140w",
                              },
                              style: { rotate: -14, scale: 0.6 },
                            },
                            KffKQZNjt: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(2775.0185185185187),
                                sizes: "672px",
                                src: "/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png",
                                srcSet:
                                  "/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png?scale-down-to=1024 822w,/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png 1140w",
                              },
                            },
                          },
                          children: e(R, {
                            __framer__spring: {
                              damping: 60,
                              delay: 0,
                              duration: 0.3,
                              ease: [0.44, 0, 0.56, 1],
                              mass: 1,
                              stiffness: 500,
                              type: "spring",
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 0.9,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                offset: 0,
                                ref: he,
                                target: {
                                  opacity: 1,
                                  rotate: 20,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1.1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 78,
                                  y: 26,
                                },
                              },
                            ],
                            __framer__transformTrigger: "onScrollTarget",
                            __framer__transformViewportThreshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: i(2821.3914518317506),
                              sizes: "672px",
                              src: "/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png",
                              srcSet:
                                "/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png?scale-down-to=1024 822w,/framerusercontent.com/images/RGYSJ3ihHFaBqZCPBcgrOrWk.png 1140w",
                            },
                            className: "framer-m3dk5p",
                            "data-framer-name": "mush",
                            style: { rotate: -14 },
                          }),
                        }),
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              __framer__transformTargets: [
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0,
                                  },
                                },
                                {
                                  offset: 0,
                                  ref: he,
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: -80,
                                  },
                                },
                              ],
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 289,
                                intrinsicWidth: 1140,
                                loading: i(2360),
                                pixelHeight: 289,
                                pixelWidth: 1140,
                                sizes: "100vw",
                                src: "/framerusercontent.com/images/49LBakcuRaSqX1VYeH0MgNajGI.png",
                                srcSet:
                                  "/framerusercontent.com/images/49LBakcuRaSqX1VYeH0MgNajGI.png?scale-down-to=512 512w,/framerusercontent.com/images/49LBakcuRaSqX1VYeH0MgNajGI.png?scale-down-to=1024 1024w,/framerusercontent.com/images/49LBakcuRaSqX1VYeH0MgNajGI.png 1140w",
                              },
                              style: { scale: 2.2 },
                            },
                            KffKQZNjt: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 289,
                                intrinsicWidth: 1140,
                                loading: i(3264),
                                pixelHeight: 289,
                                pixelWidth: 1140,
                                sizes: "calc(100vw + 364px)",
                                src: "/framerusercontent.com/images/49LBakcuRaSqX1VYeH0MgNajGI.png",
                                srcSet:
                                  "/framerusercontent.com/images/49LBakcuRaSqX1VYeH0MgNajGI.png?scale-down-to=512 512w,/framerusercontent.com/images/49LBakcuRaSqX1VYeH0MgNajGI.png?scale-down-to=1024 1024w,/framerusercontent.com/images/49LBakcuRaSqX1VYeH0MgNajGI.png 1140w",
                              },
                              style: { scale: 1.5 },
                            },
                          },
                          children: e(R, {
                            __framer__spring: {
                              bounce: 0.2,
                              damping: 60,
                              delay: 0,
                              duration: 0.3,
                              durationBasedSpring: !0,
                              ease: [0.44, 0, 0.56, 1],
                              mass: 1,
                              stiffness: 500,
                              type: "spring",
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                offset: 0,
                                ref: he,
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: -175,
                                },
                              },
                            ],
                            __framer__transformTrigger: "onScrollTarget",
                            __framer__transformViewportThreshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 289,
                              intrinsicWidth: 1140,
                              loading: i(3199),
                              pixelHeight: 289,
                              pixelWidth: 1140,
                              sizes: "100vw",
                              src: "/framerusercontent.com/images/49LBakcuRaSqX1VYeH0MgNajGI.png",
                              srcSet:
                                "/framerusercontent.com/images/49LBakcuRaSqX1VYeH0MgNajGI.png?scale-down-to=512 512w,/framerusercontent.com/images/49LBakcuRaSqX1VYeH0MgNajGI.png?scale-down-to=1024 1024w,/framerusercontent.com/images/49LBakcuRaSqX1VYeH0MgNajGI.png 1140w",
                            },
                            className: "framer-dg0n98",
                            "data-framer-name": "Mouth-down",
                          }),
                        }),
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              __framer__transformTargets: [
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0,
                                  },
                                },
                                {
                                  offset: 0,
                                  ref: he,
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 40,
                                  },
                                },
                              ],
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 481,
                                intrinsicWidth: 1140,
                                loading: i(1649),
                                pixelHeight: 481,
                                pixelWidth: 1140,
                                sizes: "1600px",
                                src: "/framerusercontent.com/images/lsl8q4kQ1mqN5Ab00oA8oZs83r8.png",
                                srcSet:
                                  "/framerusercontent.com/images/lsl8q4kQ1mqN5Ab00oA8oZs83r8.png?scale-down-to=512 512w,/framerusercontent.com/images/lsl8q4kQ1mqN5Ab00oA8oZs83r8.png?scale-down-to=1024 1024w,/framerusercontent.com/images/lsl8q4kQ1mqN5Ab00oA8oZs83r8.png 1140w",
                              },
                              style: { scale: 0.4 },
                              transformTemplate: re,
                            },
                            KffKQZNjt: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 481,
                                intrinsicWidth: 1140,
                                loading: i(2404),
                                pixelHeight: 481,
                                pixelWidth: 1140,
                                sizes: "calc(100vw + 440px)",
                                src: "/framerusercontent.com/images/lsl8q4kQ1mqN5Ab00oA8oZs83r8.png",
                                srcSet:
                                  "/framerusercontent.com/images/lsl8q4kQ1mqN5Ab00oA8oZs83r8.png?scale-down-to=512 512w,/framerusercontent.com/images/lsl8q4kQ1mqN5Ab00oA8oZs83r8.png?scale-down-to=1024 1024w,/framerusercontent.com/images/lsl8q4kQ1mqN5Ab00oA8oZs83r8.png 1140w",
                              },
                            },
                          },
                          children: e(R, {
                            __framer__spring: {
                              bounce: 0.2,
                              damping: 60,
                              delay: 0,
                              duration: 0.3,
                              durationBasedSpring: !0,
                              ease: [0.44, 0, 0.56, 1],
                              mass: 1,
                              stiffness: 500,
                              type: "spring",
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                offset: 0,
                                ref: he,
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 136,
                                },
                              },
                            ],
                            __framer__transformTrigger: "onScrollTarget",
                            __framer__transformViewportThreshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 481,
                              intrinsicWidth: 1140,
                              loading: i(2297),
                              pixelHeight: 481,
                              pixelWidth: 1140,
                              sizes: "100vw",
                              src: "/framerusercontent.com/images/lsl8q4kQ1mqN5Ab00oA8oZs83r8.png",
                              srcSet:
                                "/framerusercontent.com/images/lsl8q4kQ1mqN5Ab00oA8oZs83r8.png?scale-down-to=512 512w,/framerusercontent.com/images/lsl8q4kQ1mqN5Ab00oA8oZs83r8.png?scale-down-to=1024 1024w,/framerusercontent.com/images/lsl8q4kQ1mqN5Ab00oA8oZs83r8.png 1140w",
                            },
                            className: "framer-18cmtif",
                            "data-framer-name": "Mouth-up",
                          }),
                        }),
                        De() &&
                          e(l, {
                            breakpoint: a,
                            overrides: {
                              Byvh2ikpS: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  loading: i(2445),
                                  sizes: "100vw",
                                  src: "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png",
                                  srcSet:
                                    "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=512 512w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=1024 1024w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png 1920w",
                                },
                              },
                            },
                            children: e(B, {
                              background: {
                                alt: "",
                                fit: "fill",
                                src: "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png",
                                srcSet:
                                  "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=512 512w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=1024 1024w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png 1920w",
                              },
                              className:
                                "framer-btcs1u hidden-1rml4m2 hidden-174vl6w",
                              "data-framer-name": "splitter-zig-zag 2",
                            }),
                          }),
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(1851),
                                sizes: "100vw",
                                src: "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png",
                                srcSet:
                                  "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=512 512w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=1024 1024w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png 1920w",
                              },
                            },
                          },
                          children: e(B, {
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: i(2389),
                              sizes: "100vw",
                              src: "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png",
                              srcSet:
                                "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=512 512w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=1024 1024w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png 1920w",
                            },
                            className: "framer-m3pkyo",
                            "data-framer-name": "splitter-zig-zag 2",
                            style: { rotate: 180 },
                          }),
                        }),
                      ],
                    }),
                    _("div", {
                      className: "framer-k5szjo",
                      children: [
                        _("div", {
                          className: "framer-1v0dz1s",
                          "data-framer-name": "trippy-1",
                          children: [
                            e("div", {
                              className: "framer-qspn6w",
                              "data-framer-name": "scroll-trigger",
                              id: ze,
                              ref: Me,
                            }),
                            e(l, {
                              breakpoint: a,
                              overrides: {
                                Byvh2ikpS: {
                                  __framer__spring: {
                                    bounce: 0.2,
                                    damping: 60,
                                    delay: 0,
                                    duration: 1,
                                    durationBasedSpring: !0,
                                    ease: [0.44, 0, 0.56, 1],
                                    mass: 1,
                                    stiffness: 500,
                                    type: "spring",
                                  },
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                    {
                                      ref: Me,
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1.3,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                  ],
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 942,
                                    intrinsicWidth: 1605,
                                    loading: i(2385),
                                    pixelHeight: 942,
                                    pixelWidth: 1605,
                                    positionX: "center",
                                    positionY: "top",
                                    sizes: "calc(100vw + 449px)",
                                    src: "/framerusercontent.com/images/MdFUJ7zBbMxHO5kanFEifMTrlM.png",
                                    srcSet:
                                      "/framerusercontent.com/images/MdFUJ7zBbMxHO5kanFEifMTrlM.png?scale-down-to=512 512w,/framerusercontent.com/images/MdFUJ7zBbMxHO5kanFEifMTrlM.png?scale-down-to=1024 1024w,/framerusercontent.com/images/MdFUJ7zBbMxHO5kanFEifMTrlM.png 1605w",
                                  },
                                },
                              },
                              children: e(R, {
                                __framer__spring: {
                                  damping: 60,
                                  delay: 0,
                                  duration: 0.3,
                                  ease: [0.44, 0, 0.56, 1],
                                  mass: 1,
                                  stiffness: 500,
                                  type: "spring",
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                  {
                                    ref: Me,
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1.25,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                ],
                                __framer__transformTrigger: "onScrollTarget",
                                __framer__transformViewportThreshold: 1,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 942,
                                  intrinsicWidth: 1605,
                                  loading: i(3310),
                                  pixelHeight: 942,
                                  pixelWidth: 1605,
                                  positionX: "center",
                                  positionY: "top",
                                  sizes: "calc(100vw - 20px)",
                                  src: "/framerusercontent.com/images/MdFUJ7zBbMxHO5kanFEifMTrlM.png",
                                  srcSet:
                                    "/framerusercontent.com/images/MdFUJ7zBbMxHO5kanFEifMTrlM.png?scale-down-to=512 512w,/framerusercontent.com/images/MdFUJ7zBbMxHO5kanFEifMTrlM.png?scale-down-to=1024 1024w,/framerusercontent.com/images/MdFUJ7zBbMxHO5kanFEifMTrlM.png 1605w",
                                },
                                className: "framer-1sy3ddd",
                                "data-framer-name": "Trippy-1",
                                id: Kt,
                                ref: Z,
                              }),
                            }),
                          ],
                        }),
                        _("div", {
                          className: "framer-1o4vwli",
                          "data-framer-name": "trippy-2",
                          children: [
                            e("div", {
                              className: "framer-3u5bhs",
                              "data-framer-name": "scroll-trigger",
                              id: _e,
                              ref: dt,
                            }),
                            e(l, {
                              breakpoint: a,
                              overrides: {
                                Byvh2ikpS: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 942,
                                    intrinsicWidth: 1605,
                                    loading: i(3489),
                                    pixelHeight: 942,
                                    pixelWidth: 1605,
                                    sizes: "calc(100vw + 568px)",
                                    src: "/framerusercontent.com/images/7wc82B1mK6DSWq8aRwYrOfJ32tw.png",
                                    srcSet:
                                      "/framerusercontent.com/images/7wc82B1mK6DSWq8aRwYrOfJ32tw.png?scale-down-to=512 512w,/framerusercontent.com/images/7wc82B1mK6DSWq8aRwYrOfJ32tw.png?scale-down-to=1024 1024w,/framerusercontent.com/images/7wc82B1mK6DSWq8aRwYrOfJ32tw.png 1605w",
                                  },
                                },
                                KffKQZNjt: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 942,
                                    intrinsicWidth: 1605,
                                    loading: i(4050),
                                    pixelHeight: 942,
                                    pixelWidth: 1605,
                                    sizes: "calc(100vw - 20px)",
                                    src: "/framerusercontent.com/images/7wc82B1mK6DSWq8aRwYrOfJ32tw.png",
                                    srcSet:
                                      "/framerusercontent.com/images/7wc82B1mK6DSWq8aRwYrOfJ32tw.png?scale-down-to=512 512w,/framerusercontent.com/images/7wc82B1mK6DSWq8aRwYrOfJ32tw.png?scale-down-to=1024 1024w,/framerusercontent.com/images/7wc82B1mK6DSWq8aRwYrOfJ32tw.png 1605w",
                                  },
                                },
                              },
                              children: e(R, {
                                __framer__spring: {
                                  damping: 60,
                                  delay: 0,
                                  duration: 0.3,
                                  ease: [0.44, 0, 0.56, 1],
                                  mass: 1,
                                  stiffness: 500,
                                  type: "spring",
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                  {
                                    ref: dt,
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1.25,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                ],
                                __framer__transformTrigger: "onScrollTarget",
                                __framer__transformViewportThreshold: 1,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 942,
                                  intrinsicWidth: 1605,
                                  loading: i(4300),
                                  pixelHeight: 942,
                                  pixelWidth: 1605,
                                  sizes: "calc(100vw - 20px)",
                                  src: "/framerusercontent.com/images/7wc82B1mK6DSWq8aRwYrOfJ32tw.png",
                                  srcSet:
                                    "/framerusercontent.com/images/7wc82B1mK6DSWq8aRwYrOfJ32tw.png?scale-down-to=512 512w,/framerusercontent.com/images/7wc82B1mK6DSWq8aRwYrOfJ32tw.png?scale-down-to=1024 1024w,/framerusercontent.com/images/7wc82B1mK6DSWq8aRwYrOfJ32tw.png 1605w",
                                },
                                className: "framer-1ckhe4a",
                                "data-framer-name": "Trippy-2",
                                id: Rt,
                                ref: D,
                              }),
                            }),
                          ],
                        }),
                        _("div", {
                          className: "framer-1bwkuqx",
                          "data-framer-name": "trippy-3",
                          id: fe,
                          ref: g,
                          children: [
                            e("div", {
                              className: "framer-g69587",
                              "data-framer-name": "scroll-trigger",
                              id: ht,
                              ref: Qe,
                            }),
                            e(l, {
                              breakpoint: a,
                              overrides: {
                                Byvh2ikpS: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 942,
                                    intrinsicWidth: 1605,
                                    loading: i(4508),
                                    pixelHeight: 942,
                                    pixelWidth: 1605,
                                    sizes: "calc(100vw + 552px)",
                                    src: "/framerusercontent.com/images/niO2t6u8Otbq8uNZA1mAlY9z4.png",
                                    srcSet:
                                      "/framerusercontent.com/images/niO2t6u8Otbq8uNZA1mAlY9z4.png?scale-down-to=512 512w,/framerusercontent.com/images/niO2t6u8Otbq8uNZA1mAlY9z4.png?scale-down-to=1024 1024w,/framerusercontent.com/images/niO2t6u8Otbq8uNZA1mAlY9z4.png 1605w",
                                  },
                                },
                                KffKQZNjt: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 942,
                                    intrinsicWidth: 1605,
                                    loading: i(4930),
                                    pixelHeight: 942,
                                    pixelWidth: 1605,
                                    sizes: "calc(100vw + 602px)",
                                    src: "/framerusercontent.com/images/niO2t6u8Otbq8uNZA1mAlY9z4.png",
                                    srcSet:
                                      "/framerusercontent.com/images/niO2t6u8Otbq8uNZA1mAlY9z4.png?scale-down-to=512 512w,/framerusercontent.com/images/niO2t6u8Otbq8uNZA1mAlY9z4.png?scale-down-to=1024 1024w,/framerusercontent.com/images/niO2t6u8Otbq8uNZA1mAlY9z4.png 1605w",
                                  },
                                },
                              },
                              children: e(R, {
                                __framer__spring: {
                                  damping: 60,
                                  delay: 0,
                                  duration: 0.3,
                                  ease: [0.44, 0, 0.56, 1],
                                  mass: 1,
                                  stiffness: 500,
                                  type: "spring",
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                  {
                                    ref: Qe,
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1.25,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                ],
                                __framer__transformTrigger: "onScrollTarget",
                                __framer__transformViewportThreshold: 1,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 942,
                                  intrinsicWidth: 1605,
                                  loading: i(5433),
                                  pixelHeight: 942,
                                  pixelWidth: 1605,
                                  sizes: "calc(100vw + 38px)",
                                  src: "/framerusercontent.com/images/niO2t6u8Otbq8uNZA1mAlY9z4.png",
                                  srcSet:
                                    "/framerusercontent.com/images/niO2t6u8Otbq8uNZA1mAlY9z4.png?scale-down-to=512 512w,/framerusercontent.com/images/niO2t6u8Otbq8uNZA1mAlY9z4.png?scale-down-to=1024 1024w,/framerusercontent.com/images/niO2t6u8Otbq8uNZA1mAlY9z4.png 1605w",
                                },
                                className: "framer-18fkbk5",
                                "data-framer-name": "Trippy-3",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    Q() &&
                      e("div", {
                        className: "framer-1rvi7xe hidden-14718gw",
                        "data-framer-name": "spacer",
                      }),
                    _("div", {
                      className: "framer-1htt17w",
                      "data-framer-name": "Frame 26",
                      id: $e,
                      ref: oe,
                      children: [
                        e("div", {
                          className: "framer-1l1mgaa",
                          "data-framer-name": "image",
                        }),
                        We() &&
                          e(Ne, {
                            className:
                              "framer-19wkpwm hidden-14718gw hidden-174vl6w",
                            "data-framer-name": "secret-desktop",
                            layout: "position",
                            opacity: 1,
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 691 764"><path d="M 68.373 760.07 L 57.237 760.07 C 21.805 760.07 3.583 741.859 3.583 706.449 L 3.583 416.087 L 57.237 416.087 L 57.237 703.414 C 57.237 709.484 59.262 712.519 62.299 712.519 C 66.348 712.519 68.373 709.484 68.373 703.414 L 68.373 437.333 C 68.373 421.147 66.348 417.099 59.262 405.971 L 24.842 360.443 C 8.645 337.174 4.596 318.963 4.596 287.6 L 4.596 59.965 C 4.596 23.543 17.756 3.309 58.249 3.309 L 69.385 3.309 C 109.878 3.309 121.014 23.543 121.014 55.918 L 121.014 310.87 L 69.385 310.87 L 69.385 56.93 C 69.385 51.871 67.36 49.848 64.323 49.848 C 60.274 49.848 58.249 51.871 58.249 56.93 L 58.249 291.648 C 58.249 307.834 60.274 310.87 67.36 321.998 L 101.78 368.537 C 121.014 392.818 122.026 409.006 122.026 441.381 L 122.026 702.403 C 122.026 740.848 103.805 760.07 68.373 760.07 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path><path d="M 134.08 5.332 L 221.14 5.332 L 221.14 55.918 L 187.734 55.918 L 187.734 332.116 L 219.115 332.116 L 219.115 384.725 L 187.734 384.725 L 187.734 706.449 L 222.153 706.449 L 222.153 758.047 L 134.08 758.047 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path><path d="M 289.702 710.496 C 292.739 710.496 294.763 707.461 294.763 701.391 L 294.763 395.853 L 347.405 395.853 L 347.405 701.391 C 347.405 736.801 331.207 760.07 294.763 760.07 L 286.665 760.07 C 245.159 760.07 229.974 738.824 229.974 701.391 L 229.974 59.965 C 229.974 26.578 245.159 3.309 286.665 3.309 L 294.763 3.309 C 334.244 3.309 347.405 26.578 347.405 59.965 L 347.405 339.197 L 294.763 339.197 L 294.763 60.977 C 294.763 54.906 292.739 51.871 289.702 51.871 C 285.653 51.871 283.628 54.906 283.628 60.977 L 283.628 701.391 C 283.628 707.461 285.653 710.496 289.702 710.496 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path><path d="M 413.136 389.783 L 413.136 758.047 L 359.482 758.047 L 359.482 5.332 L 443.505 5.332 C 464.764 5.332 476.912 20.508 476.912 44.789 L 476.912 324.022 C 476.912 347.292 465.777 354.373 457.678 357.408 C 465.777 360.443 477.925 370.561 477.925 389.783 L 477.925 743.883 C 477.925 748.941 478.936 752.988 479.949 757.035 L 479.949 758.047 L 427.308 758.047 C 425.284 756.024 424.271 751.976 424.271 744.894 L 424.271 396.865 C 424.271 391.807 422.247 389.783 417.184 389.783 Z M 413.136 51.871 L 413.136 338.186 L 417.184 338.186 C 422.247 338.186 424.271 335.151 424.271 330.093 L 424.271 59.965 C 424.271 54.906 422.247 51.871 418.197 51.871 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path><path d="M 489.978 5.332 L 577.039 5.332 L 577.039 55.918 L 543.631 55.918 L 543.631 332.116 L 575.013 332.116 L 575.013 384.725 L 543.631 384.725 L 543.631 706.449 L 578.05 706.449 L 578.05 758.047 L 489.978 758.047 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path><path d="M 610.121 758.047 L 610.121 55.918 L 585.825 55.918 L 585.825 5.332 L 687.058 5.332 L 687.058 55.918 L 662.762 55.918 L 662.762 758.047 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path></svg>',
                            svgContentId: 12693061168,
                            withExternalLayout: !0,
                          }),
                        We() &&
                          e(R, {
                            __framer__spring: {
                              damping: 60,
                              delay: 0,
                              duration: 0.3,
                              ease: [0.44, 0, 0.56, 1],
                              mass: 1,
                              stiffness: 116,
                              type: "spring",
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 0.6,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: -200,
                                  y: 0,
                                },
                              },
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                            ],
                            __framer__transformTrigger: "onInView",
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: "",
                              fit: "stretch",
                              loading: i(6808),
                              positionX: "center",
                              positionY: "center",
                              sizes: "366px",
                              src: "/framerusercontent.com/images/E1Ux1j32S8q8Ty2FUEUcsENXJpo.png",
                              srcSet:
                                "/framerusercontent.com/images/E1Ux1j32S8q8Ty2FUEUcsENXJpo.png?scale-down-to=2048 973w,/framerusercontent.com/images/E1Ux1j32S8q8Ty2FUEUcsENXJpo.png 1464w",
                            },
                            className:
                              "framer-xkf30b hidden-14718gw hidden-174vl6w",
                            "data-framer-name": "image-desktop",
                            transformTemplate: st,
                          }),
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 371 450"><path d="M 48.503 243.886 L 33.61 243.886 L 33.61 446.494 L 2.036 446.494 L 2.036 3.141 L 47.907 3.141 C 61.609 3.141 70.546 10.292 70.546 27.573 L 70.546 219.454 C 70.546 235.543 61.014 243.886 48.503 243.886 Z M 33.61 30.552 L 33.61 215.283 L 35.993 215.283 C 38.971 215.283 40.163 213.495 40.163 209.92 L 40.163 35.916 C 40.163 32.34 38.971 30.552 35.993 30.552 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path><path d="M 77.666 3.141 L 128.9 3.141 L 128.9 32.936 L 109.241 32.936 L 109.241 195.618 L 127.708 195.618 L 127.708 226.605 L 109.241 226.605 L 109.241 416.102 L 129.495 416.102 L 129.495 446.494 L 77.666 446.494 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path><path d="M 181.73 243.886 L 166.836 243.886 L 166.836 446.494 L 135.262 446.494 L 135.262 3.141 L 181.134 3.141 C 194.836 3.141 203.772 10.292 203.772 27.573 L 203.772 219.454 C 203.772 235.543 194.24 243.886 181.73 243.886 Z M 166.836 30.552 L 166.836 215.283 L 169.219 215.283 C 172.198 215.283 173.389 213.495 173.389 209.92 L 173.389 35.916 C 173.389 32.34 172.198 30.552 169.219 30.552 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path><path d="M 210.893 3.141 L 262.126 3.141 L 262.126 32.936 L 242.467 32.936 L 242.467 195.618 L 260.935 195.618 L 260.935 226.605 L 242.467 226.605 L 242.467 416.102 L 262.722 416.102 L 262.722 446.494 L 210.893 446.494 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path><path d="M 288.148 71.67 L 273.255 71.67 C 275.637 62.731 278.02 51.409 278.02 42.47 L 267.893 42.47 L 267.893 3.141 L 293.509 3.141 L 293.509 37.107 C 293.509 49.025 291.126 62.731 288.148 71.67 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path><path d="M 337.45 447.685 L 330.896 447.685 C 310.046 447.685 299.323 436.959 299.323 416.102 L 299.323 245.078 L 330.896 245.078 L 330.896 414.314 C 330.896 417.89 332.088 419.678 333.875 419.678 C 336.258 419.678 337.45 417.89 337.45 414.314 L 337.45 257.592 C 337.45 248.058 336.258 245.674 332.088 239.119 L 311.833 212.303 C 302.301 198.597 299.918 187.871 299.918 169.398 L 299.918 35.32 C 299.918 13.867 307.663 1.949 331.492 1.949 L 338.045 1.949 C 361.875 1.949 368.428 13.867 368.428 32.936 L 368.428 183.104 L 338.045 183.104 L 338.045 33.532 C 338.045 30.552 336.854 29.361 335.067 29.361 C 332.684 29.361 331.492 30.552 331.492 33.532 L 331.492 171.782 C 331.492 181.316 332.684 183.104 336.854 189.659 L 357.109 217.07 C 368.428 231.372 369.024 240.907 369.024 259.976 L 369.024 413.719 C 369.024 436.363 358.301 447.685 337.45 447.685 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path></svg>',
                              svgContentId: 10256551918,
                            },
                            KffKQZNjt: {
                              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 676 820"><path d="M 88.378 444.414 L 61.24 444.414 L 61.24 813.61 L 3.709 813.61 L 3.709 5.723 L 87.292 5.723 C 112.259 5.723 128.541 18.754 128.541 50.244 L 128.541 399.894 C 128.541 429.212 111.174 444.414 88.378 444.414 Z M 61.24 55.673 L 61.24 392.293 L 65.583 392.293 C 71.01 392.293 73.181 389.036 73.181 382.52 L 73.181 65.446 C 73.181 58.931 71.01 55.673 65.583 55.673 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path><path d="M 141.516 5.723 L 234.869 5.723 L 234.869 60.017 L 199.047 60.017 L 199.047 356.459 L 232.697 356.459 L 232.697 412.924 L 199.047 412.924 L 199.047 758.231 L 235.954 758.231 L 235.954 813.61 L 141.516 813.61 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path><path d="M 331.13 444.414 L 303.992 444.414 L 303.992 813.61 L 246.461 813.61 L 246.461 5.723 L 330.044 5.723 C 355.011 5.723 371.293 18.754 371.293 50.244 L 371.293 399.894 C 371.293 429.212 353.925 444.414 331.13 444.414 Z M 303.992 55.673 L 303.992 392.293 L 308.335 392.293 C 313.762 392.293 315.933 389.036 315.933 382.52 L 315.933 65.446 C 315.933 58.931 313.762 55.673 308.335 55.673 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path><path d="M 384.268 5.723 L 477.621 5.723 L 477.621 60.017 L 441.8 60.017 L 441.8 356.459 L 475.449 356.459 L 475.449 412.924 L 441.8 412.924 L 441.8 758.231 L 478.706 758.231 L 478.706 813.61 L 384.268 813.61 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path><path d="M 525.035 130.598 L 497.898 130.598 C 502.239 114.31 506.582 93.679 506.582 77.391 L 488.128 77.391 L 488.128 5.723 L 534.804 5.723 L 534.804 67.618 C 534.804 89.335 530.462 114.31 525.035 130.598 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path><path d="M 614.868 815.782 L 602.927 815.782 C 564.935 815.782 545.397 796.236 545.397 758.231 L 545.397 446.586 L 602.927 446.586 L 602.927 754.973 C 602.927 761.488 605.099 764.746 608.355 764.746 C 612.697 764.746 614.868 761.488 614.868 754.973 L 614.868 469.389 C 614.868 452.016 612.697 447.672 605.099 435.728 L 568.191 386.863 C 550.824 361.888 546.482 342.343 546.482 308.681 L 546.482 64.36 C 546.482 25.269 560.594 3.552 604.013 3.552 L 615.953 3.552 C 659.374 3.552 671.314 25.269 671.314 60.017 L 671.314 333.656 L 615.953 333.656 L 615.953 61.103 C 615.953 55.673 613.782 53.501 610.526 53.501 C 606.184 53.501 604.013 55.673 604.013 61.103 L 604.013 313.025 C 604.013 330.398 606.184 333.656 613.782 345.6 L 650.689 395.55 C 671.314 421.611 672.4 438.985 672.4 473.733 L 672.4 753.888 C 672.4 795.151 652.861 815.782 614.868 815.782 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path></svg>',
                              svgContentId: 11840303077,
                            },
                          },
                          children: e(Ne, {
                            className: "framer-11q9h9p",
                            "data-framer-name": "PEPE\u2019s",
                            layout: "position",
                            opacity: 1,
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 635 770"><path d="M 83.018 417.316 L 57.526 417.316 L 57.526 764 L 3.484 764 L 3.484 5.374 L 81.998 5.374 C 105.45 5.374 120.745 17.61 120.745 47.18 L 120.745 375.51 C 120.745 403.041 104.431 417.316 83.018 417.316 Z M 57.526 52.279 L 57.526 368.373 L 61.605 368.373 C 66.703 368.373 68.742 365.314 68.742 359.196 L 68.742 61.455 C 68.742 55.337 66.703 52.279 61.605 52.279 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path><path d="M 132.933 5.374 L 220.624 5.374 L 220.624 56.357 L 186.975 56.357 L 186.975 334.724 L 218.584 334.724 L 218.584 387.746 L 186.975 387.746 L 186.975 711.997 L 221.643 711.997 L 221.643 764 L 132.933 764 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path><path d="M 311.047 417.316 L 285.555 417.316 L 285.555 764 L 231.513 764 L 231.513 5.374 L 310.027 5.374 C 333.479 5.374 348.774 17.61 348.774 47.18 L 348.774 375.51 C 348.774 403.041 332.459 417.316 311.047 417.316 Z M 285.555 52.279 L 285.555 368.373 L 289.634 368.373 C 294.732 368.373 296.771 365.314 296.771 359.196 L 296.771 61.455 C 296.771 55.337 294.732 52.279 289.634 52.279 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path><path d="M 360.962 5.374 L 448.653 5.374 L 448.653 56.357 L 415.004 56.357 L 415.004 334.724 L 446.613 334.724 L 446.613 387.746 L 415.004 387.746 L 415.004 711.997 L 449.672 711.997 L 449.672 764 L 360.962 764 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path><path d="M 493.191 122.635 L 467.7 122.635 C 471.778 107.34 475.857 87.967 475.857 72.672 L 458.523 72.672 L 458.523 5.374 L 502.368 5.374 L 502.368 63.495 C 502.368 83.888 498.289 107.34 493.191 122.635 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path><path d="M 577.576 766.039 L 566.359 766.039 C 530.671 766.039 512.318 747.685 512.318 711.997 L 512.318 419.355 L 566.359 419.355 L 566.359 708.938 C 566.359 715.056 568.399 718.115 571.458 718.115 C 575.536 718.115 577.576 715.056 577.576 708.938 L 577.576 440.768 C 577.576 424.454 575.536 420.375 568.399 409.159 L 533.73 363.274 C 517.416 339.822 513.337 321.468 513.337 289.859 L 513.337 60.436 C 513.337 23.728 526.593 3.335 567.379 3.335 L 578.595 3.335 C 619.382 3.335 630.598 23.728 630.598 56.357 L 630.598 313.311 L 578.595 313.311 L 578.595 57.377 C 578.595 52.279 576.556 50.239 573.497 50.239 C 569.418 50.239 567.379 52.279 567.379 57.377 L 567.379 293.938 C 567.379 310.252 569.418 313.311 576.556 324.527 L 611.224 371.431 C 630.598 395.903 631.618 412.218 631.618 444.847 L 631.618 707.919 C 631.618 746.666 613.264 766.039 577.576 766.039 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path></svg>',
                            svgContentId: 12131747537,
                            withExternalLayout: !0,
                          }),
                        }),
                        Je() &&
                          e(l, {
                            breakpoint: a,
                            overrides: {
                              Byvh2ikpS: {
                                background: {
                                  alt: "",
                                  fit: "stretch",
                                  loading: i(6089),
                                  positionX: "center",
                                  positionY: "center",
                                  sizes: "386px",
                                  src: "/framerusercontent.com/images/E1Ux1j32S8q8Ty2FUEUcsENXJpo.png",
                                  srcSet:
                                    "/framerusercontent.com/images/E1Ux1j32S8q8Ty2FUEUcsENXJpo.png?scale-down-to=2048 973w,/framerusercontent.com/images/E1Ux1j32S8q8Ty2FUEUcsENXJpo.png 1464w",
                                },
                              },
                              KffKQZNjt: {
                                background: {
                                  alt: "",
                                  fit: "stretch",
                                  loading: i(6587),
                                  positionX: "center",
                                  positionY: "center",
                                  sizes: "644px",
                                  src: "/framerusercontent.com/images/E1Ux1j32S8q8Ty2FUEUcsENXJpo.png",
                                  srcSet:
                                    "/framerusercontent.com/images/E1Ux1j32S8q8Ty2FUEUcsENXJpo.png?scale-down-to=2048 973w,/framerusercontent.com/images/E1Ux1j32S8q8Ty2FUEUcsENXJpo.png 1464w",
                                },
                              },
                            },
                            children: e(R, {
                              __framer__spring: {
                                damping: 60,
                                delay: 0,
                                duration: 0.3,
                                ease: [0.44, 0, 0.56, 1],
                                mass: 1,
                                stiffness: 116,
                                type: "spring",
                              },
                              __framer__styleTransformEffectEnabled: !0,
                              __framer__transformTargets: [
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: -200,
                                    y: 0,
                                  },
                                },
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0,
                                  },
                                },
                              ],
                              __framer__transformTrigger: "onInView",
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              background: {
                                alt: "",
                                fit: "stretch",
                                positionX: "center",
                                positionY: "center",
                                src: "/framerusercontent.com/images/E1Ux1j32S8q8Ty2FUEUcsENXJpo.png",
                                srcSet:
                                  "/framerusercontent.com/images/E1Ux1j32S8q8Ty2FUEUcsENXJpo.png?scale-down-to=2048 973w,/framerusercontent.com/images/E1Ux1j32S8q8Ty2FUEUcsENXJpo.png 1464w",
                              },
                              className: "framer-aldw6y hidden-1rml4m2",
                              "data-framer-name": "image-mobile",
                              transformTemplate: re,
                            }),
                          }),
                        Je() &&
                          e(l, {
                            breakpoint: a,
                            overrides: {
                              Byvh2ikpS: {
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 372 411"><path d="M 36.808 408.886 L 30.814 408.886 C 11.739 408.886 1.929 399.089 1.929 380.04 L 1.929 223.838 L 30.814 223.838 L 30.814 378.407 C 30.814 381.673 31.904 383.306 33.539 383.306 C 35.719 383.306 36.808 381.673 36.808 378.407 L 36.808 235.267 C 36.808 226.559 35.719 224.382 31.904 218.395 L 13.374 193.903 C 4.654 181.386 2.474 171.589 2.474 154.717 L 2.474 32.259 C 2.474 12.665 9.559 1.78 31.359 1.78 L 37.353 1.78 C 59.153 1.78 65.148 12.665 65.148 30.082 L 65.148 167.235 L 37.353 167.235 L 37.353 30.626 C 37.353 27.905 36.263 26.816 34.628 26.816 C 32.449 26.816 31.359 27.905 31.359 30.626 L 31.359 156.894 C 31.359 165.602 32.449 167.235 36.263 173.222 L 54.793 198.257 C 65.148 211.32 65.693 220.028 65.693 237.444 L 65.693 377.863 C 65.693 398.545 55.883 408.886 36.808 408.886 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path><path d="M 72.182 2.869 L 119.051 2.869 L 119.051 30.082 L 101.066 30.082 L 101.066 178.664 L 117.961 178.664 L 117.961 206.966 L 101.066 206.966 L 101.066 380.04 L 119.596 380.04 L 119.596 407.797 L 72.182 407.797 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path><path d="M 155.961 382.217 C 157.596 382.217 158.686 380.584 158.686 377.319 L 158.686 212.952 L 187.026 212.952 L 187.026 377.319 C 187.026 396.368 178.306 408.886 158.686 408.886 L 154.326 408.886 C 131.981 408.886 123.807 397.456 123.807 377.319 L 123.807 32.259 C 123.807 14.298 131.981 1.78 154.326 1.78 L 158.686 1.78 C 179.941 1.78 187.026 14.298 187.026 32.259 L 187.026 182.474 L 158.686 182.474 L 158.686 32.803 C 158.686 29.537 157.596 27.905 155.961 27.905 C 153.781 27.905 152.691 29.537 152.691 32.803 L 152.691 377.319 C 152.691 380.584 153.781 382.217 155.961 382.217 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path><path d="M 222.965 209.732 L 222.965 407.843 L 194.08 407.843 L 194.08 2.914 L 239.314 2.914 C 250.759 2.914 257.299 11.078 257.299 24.14 L 257.299 174.356 C 257.299 186.873 251.304 190.683 246.945 192.316 C 251.304 193.948 257.844 199.391 257.844 209.732 L 257.844 400.223 C 257.844 402.944 258.389 405.121 258.934 407.298 L 258.934 407.843 L 230.595 407.843 C 229.505 406.754 228.96 404.577 228.96 400.767 L 228.96 213.542 C 228.96 210.821 227.87 209.732 225.145 209.732 Z M 221.854 27.858 L 221.854 181.883 L 224.033 181.883 C 226.758 181.883 227.848 180.25 227.848 177.529 L 227.848 32.212 C 227.848 29.49 226.758 27.858 224.578 27.858 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path><path d="M 263.78 2.869 L 310.649 2.869 L 310.649 30.082 L 292.664 30.082 L 292.664 178.664 L 309.559 178.664 L 309.559 206.966 L 292.664 206.966 L 292.664 380.04 L 311.194 380.04 L 311.194 407.797 L 263.78 407.797 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path><path d="M 328.459 407.797 L 328.459 30.082 L 315.379 30.082 L 315.379 2.869 L 369.878 2.869 L 369.878 30.082 L 356.798 30.082 L 356.798 407.797 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path></svg>',
                                svgContentId: 9520562900,
                              },
                              KffKQZNjt: {
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 683 755"><path d="M 67.581 751.116 L 56.574 751.116 C 21.553 751.116 3.542 733.12 3.542 698.127 L 3.542 411.186 L 56.574 411.186 L 56.574 695.128 C 56.574 701.126 58.576 704.126 61.577 704.126 C 65.58 704.126 67.581 701.126 67.581 695.128 L 67.581 432.182 C 67.581 416.185 65.58 412.186 58.576 401.188 L 24.555 356.197 C 8.545 333.202 4.543 315.206 4.543 284.212 L 4.543 59.258 C 4.543 23.266 17.551 3.27 57.575 3.27 L 68.582 3.27 C 108.606 3.27 119.613 23.266 119.613 55.259 L 119.613 307.208 L 68.582 307.208 L 68.582 56.259 C 68.582 51.26 66.581 49.261 63.579 49.261 C 59.576 49.261 57.575 51.26 57.575 56.259 L 57.575 288.212 C 57.575 304.208 59.576 307.208 66.581 318.205 L 100.601 364.195 C 119.613 388.191 120.613 404.188 120.613 436.181 L 120.613 694.128 C 120.613 732.121 102.603 751.116 67.581 751.116 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path><path d="M 132.528 5.27 L 218.58 5.27 L 218.58 55.259 L 185.56 55.259 L 185.56 328.203 L 216.579 328.203 L 216.579 380.193 L 185.56 380.193 L 185.56 698.127 L 219.581 698.127 L 219.581 749.117 L 132.528 749.117 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path><path d="M 286.348 702.126 C 289.35 702.126 291.351 699.127 291.351 693.128 L 291.351 391.19 L 343.383 391.19 L 343.383 693.128 C 343.383 728.121 327.373 751.116 291.351 751.116 L 283.346 751.116 C 242.321 751.116 227.311 730.12 227.311 693.128 L 227.311 59.258 C 227.311 26.265 242.321 3.27 283.346 3.27 L 291.351 3.27 C 330.375 3.27 343.383 26.265 343.383 59.258 L 343.383 335.201 L 291.351 335.201 L 291.351 60.258 C 291.351 54.259 289.35 51.26 286.348 51.26 C 282.346 51.26 280.344 54.259 280.344 60.258 L 280.344 693.128 C 280.344 699.127 282.346 702.126 286.348 702.126 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path><path d="M 409.368 385.274 L 409.368 749.2 L 356.336 749.2 L 356.336 5.352 L 439.386 5.352 C 460.399 5.352 472.407 20.349 472.407 44.344 L 472.407 320.288 C 472.407 343.283 461.4 350.281 453.395 353.281 C 461.4 356.28 473.408 366.278 473.408 385.274 L 473.408 735.203 C 473.408 740.202 474.408 744.201 475.408 748.2 L 475.408 749.2 L 423.377 749.2 C 421.376 747.2 420.375 743.201 420.375 736.202 L 420.375 392.273 C 420.375 387.274 418.374 385.274 413.37 385.274 Z M 407.055 51.174 L 407.055 334.116 L 411.057 334.116 C 416.061 334.116 418.062 331.117 418.062 326.118 L 418.062 59.172 C 418.062 54.173 416.061 51.174 412.058 51.174 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path><path d="M 484.305 5.27 L 570.358 5.27 L 570.358 55.259 L 537.338 55.259 L 537.338 328.203 L 568.356 328.203 L 568.356 380.193 L 537.338 380.193 L 537.338 698.127 L 571.358 698.127 L 571.358 749.117 L 484.305 749.117 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path><path d="M 603.058 749.117 L 603.058 55.259 L 579.043 55.259 L 579.043 5.27 L 679.104 5.27 L 679.104 55.259 L 655.089 55.259 L 655.089 749.117 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path></svg>',
                                svgContentId: 11627186261,
                              },
                            },
                            children: e(Ne, {
                              className: "framer-19yhsda hidden-1rml4m2",
                              "data-framer-name": "secret-mobile",
                              layout: "position",
                              opacity: 1,
                              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 372 411"><path d="M 36.808 408.886 L 30.814 408.886 C 11.739 408.886 1.929 399.089 1.929 380.04 L 1.929 223.838 L 30.814 223.838 L 30.814 378.407 C 30.814 381.673 31.904 383.306 33.539 383.306 C 35.719 383.306 36.808 381.673 36.808 378.407 L 36.808 235.267 C 36.808 226.559 35.719 224.382 31.904 218.395 L 13.374 193.903 C 4.654 181.386 2.474 171.589 2.474 154.717 L 2.474 32.259 C 2.474 12.665 9.559 1.78 31.359 1.78 L 37.353 1.78 C 59.153 1.78 65.148 12.665 65.148 30.082 L 65.148 167.235 L 37.353 167.235 L 37.353 30.626 C 37.353 27.905 36.263 26.816 34.628 26.816 C 32.449 26.816 31.359 27.905 31.359 30.626 L 31.359 156.894 C 31.359 165.602 32.449 167.235 36.263 173.222 L 54.793 198.257 C 65.148 211.32 65.693 220.028 65.693 237.444 L 65.693 377.863 C 65.693 398.545 55.883 408.886 36.808 408.886 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path><path d="M 72.182 2.869 L 119.051 2.869 L 119.051 30.082 L 101.066 30.082 L 101.066 178.664 L 117.961 178.664 L 117.961 206.966 L 101.066 206.966 L 101.066 380.04 L 119.596 380.04 L 119.596 407.797 L 72.182 407.797 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path><path d="M 155.961 382.217 C 157.596 382.217 158.686 380.584 158.686 377.319 L 158.686 212.952 L 187.026 212.952 L 187.026 377.319 C 187.026 396.368 178.306 408.886 158.686 408.886 L 154.326 408.886 C 131.981 408.886 123.807 397.456 123.807 377.319 L 123.807 32.259 C 123.807 14.298 131.981 1.78 154.326 1.78 L 158.686 1.78 C 179.941 1.78 187.026 14.298 187.026 32.259 L 187.026 182.474 L 158.686 182.474 L 158.686 32.803 C 158.686 29.537 157.596 27.905 155.961 27.905 C 153.781 27.905 152.691 29.537 152.691 32.803 L 152.691 377.319 C 152.691 380.584 153.781 382.217 155.961 382.217 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path><path d="M 222.965 209.732 L 222.965 407.843 L 194.08 407.843 L 194.08 2.914 L 239.314 2.914 C 250.759 2.914 257.299 11.078 257.299 24.14 L 257.299 174.356 C 257.299 186.873 251.304 190.683 246.945 192.316 C 251.304 193.948 257.844 199.391 257.844 209.732 L 257.844 400.223 C 257.844 402.944 258.389 405.121 258.934 407.298 L 258.934 407.843 L 230.595 407.843 C 229.505 406.754 228.96 404.577 228.96 400.767 L 228.96 213.542 C 228.96 210.821 227.87 209.732 225.145 209.732 Z M 221.705 27.858 L 221.705 181.883 L 223.885 181.883 C 226.61 181.883 227.7 180.25 227.7 177.529 L 227.7 32.212 C 227.7 29.49 226.61 27.858 224.43 27.858 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path><path d="M 263.78 2.869 L 310.649 2.869 L 310.649 30.082 L 292.664 30.082 L 292.664 178.664 L 309.559 178.664 L 309.559 206.966 L 292.664 206.966 L 292.664 380.04 L 311.194 380.04 L 311.194 407.797 L 263.78 407.797 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path><path d="M 328.459 407.797 L 328.459 30.082 L 315.379 30.082 L 315.379 2.869 L 369.878 2.869 L 369.878 30.082 L 356.798 30.082 L 356.798 407.797 Z" fill="var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)) /* {&quot;name&quot;:&quot;accent&quot;} */"></path></svg>',
                              svgContentId: 8816649025,
                              withExternalLayout: !0,
                            }),
                          }),
                      ],
                    }),
                    _("div", {
                      className: "framer-12iimvw",
                      id: Yt,
                      ref: me,
                      children: [
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              height: 580,
                              width: "818px",
                              y: 7035.5,
                            },
                            KffKQZNjt: { y: 8168 },
                          },
                          children: e(Y, {
                            height: 932,
                            y: 7725,
                            children: e(S, {
                              className: "framer-oow3au-container",
                              id: rr,
                              ref: I,
                              children: e(l, {
                                breakpoint: a,
                                overrides: {
                                  Byvh2ikpS: {
                                    style: { height: "100%", width: "100%" },
                                  },
                                },
                                children: e(Xr, {
                                  height: "100%",
                                  id: "gOQPznUFh",
                                  layoutId: "gOQPznUFh",
                                  variant: "lORzuIOu1",
                                  width: "100%",
                                }),
                              }),
                            }),
                          }),
                        }),
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(7554),
                                sizes: "100vw",
                                src: "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png",
                                srcSet:
                                  "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=512 512w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=1024 1024w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png 1920w",
                              },
                            },
                            KffKQZNjt: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(9166),
                                sizes: "100vw",
                                src: "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png",
                                srcSet:
                                  "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=512 512w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=1024 1024w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png 1920w",
                              },
                            },
                          },
                          children: e(B, {
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: i(8723),
                              sizes: "100vw",
                              src: "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png",
                              srcSet:
                                "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=512 512w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=1024 1024w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png 1920w",
                            },
                            className: "framer-1ad08q6",
                            "data-framer-name": "splitter-zig-zag 2",
                          }),
                        }),
                      ],
                    }),
                    _("div", {
                      className: "framer-mnfkb7",
                      id: St,
                      ref: W,
                      children: [
                        _("div", {
                          className: "framer-hwiom4",
                          children: [
                            e(l, {
                              breakpoint: a,
                              overrides: {
                                Byvh2ikpS: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 1837,
                                    intrinsicWidth: 1328,
                                    loading: i(7675),
                                    pixelHeight: 1837,
                                    pixelWidth: 1328,
                                    sizes: "795px",
                                    src: "/framerusercontent.com/images/RVVeJvy3JYDlvh51ZTE4HBqOZ0.png",
                                    srcSet:
                                      "/framerusercontent.com/images/RVVeJvy3JYDlvh51ZTE4HBqOZ0.png?scale-down-to=1024 740w,/framerusercontent.com/images/RVVeJvy3JYDlvh51ZTE4HBqOZ0.png 1328w",
                                  },
                                },
                                KffKQZNjt: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 1837,
                                    intrinsicWidth: 1328,
                                    loading: i(9445),
                                    pixelHeight: 1837,
                                    pixelWidth: 1328,
                                    sizes: "795px",
                                    src: "/framerusercontent.com/images/RVVeJvy3JYDlvh51ZTE4HBqOZ0.png",
                                    srcSet:
                                      "/framerusercontent.com/images/RVVeJvy3JYDlvh51ZTE4HBqOZ0.png?scale-down-to=1024 740w,/framerusercontent.com/images/RVVeJvy3JYDlvh51ZTE4HBqOZ0.png 1328w",
                                  },
                                },
                              },
                              children: e(R, {
                                __framer__spring: {
                                  damping: 20,
                                  delay: 0,
                                  duration: 0.3,
                                  ease: [0.44, 0, 0.56, 1],
                                  mass: 0.5,
                                  stiffness: 400,
                                  type: "spring",
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 0.1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 0.1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 50,
                                    },
                                  },
                                ],
                                __framer__transformTrigger: "onInView",
                                __perspectiveFX: !1,
                                __targetOpacity: 0.5,
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 1837,
                                  intrinsicWidth: 1328,
                                  loading: i(9348.5),
                                  pixelHeight: 1837,
                                  pixelWidth: 1328,
                                  sizes: "795px",
                                  src: "/framerusercontent.com/images/RVVeJvy3JYDlvh51ZTE4HBqOZ0.png",
                                  srcSet:
                                    "/framerusercontent.com/images/RVVeJvy3JYDlvh51ZTE4HBqOZ0.png?scale-down-to=1024 740w,/framerusercontent.com/images/RVVeJvy3JYDlvh51ZTE4HBqOZ0.png 1328w",
                                },
                                className: "framer-j33wok",
                                "data-framer-name": "Frozen-lil",
                              }),
                            }),
                            e(l, {
                              breakpoint: a,
                              overrides: {
                                Byvh2ikpS: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 1837,
                                    intrinsicWidth: 1328,
                                    loading: i(7626),
                                    pixelHeight: 1837,
                                    pixelWidth: 1328,
                                    sizes: "795px",
                                    src: "/framerusercontent.com/images/RVVeJvy3JYDlvh51ZTE4HBqOZ0.png",
                                    srcSet:
                                      "/framerusercontent.com/images/RVVeJvy3JYDlvh51ZTE4HBqOZ0.png?scale-down-to=1024 740w,/framerusercontent.com/images/RVVeJvy3JYDlvh51ZTE4HBqOZ0.png 1328w",
                                  },
                                },
                                KffKQZNjt: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 1837,
                                    intrinsicWidth: 1328,
                                    loading: i(9396),
                                    pixelHeight: 1837,
                                    pixelWidth: 1328,
                                    sizes: "795px",
                                    src: "/framerusercontent.com/images/RVVeJvy3JYDlvh51ZTE4HBqOZ0.png",
                                    srcSet:
                                      "/framerusercontent.com/images/RVVeJvy3JYDlvh51ZTE4HBqOZ0.png?scale-down-to=1024 740w,/framerusercontent.com/images/RVVeJvy3JYDlvh51ZTE4HBqOZ0.png 1328w",
                                  },
                                },
                              },
                              children: e(R, {
                                __framer__spring: {
                                  damping: 20,
                                  delay: 0,
                                  duration: 0.3,
                                  ease: [0.44, 0, 0.56, 1],
                                  mass: 0.5,
                                  stiffness: 400,
                                  type: "spring",
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 150,
                                    },
                                  },
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: -50,
                                    },
                                  },
                                ],
                                __framer__transformTrigger: "onInView",
                                __perspectiveFX: !1,
                                __targetOpacity: 0.5,
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 1837,
                                  intrinsicWidth: 1328,
                                  loading: i(9299.5),
                                  pixelHeight: 1837,
                                  pixelWidth: 1328,
                                  sizes: "795px",
                                  src: "/framerusercontent.com/images/RVVeJvy3JYDlvh51ZTE4HBqOZ0.png",
                                  srcSet:
                                    "/framerusercontent.com/images/RVVeJvy3JYDlvh51ZTE4HBqOZ0.png?scale-down-to=1024 740w,/framerusercontent.com/images/RVVeJvy3JYDlvh51ZTE4HBqOZ0.png 1328w",
                                },
                                className: "framer-g6b5g8",
                                "data-framer-name": "Frozen-lil",
                              }),
                            }),
                            e(l, {
                              breakpoint: a,
                              overrides: {
                                Byvh2ikpS: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 1837,
                                    intrinsicWidth: 1328,
                                    loading: i(7595),
                                    pixelHeight: 1837,
                                    pixelWidth: 1328,
                                    sizes: "795px",
                                    src: "/framerusercontent.com/images/RVVeJvy3JYDlvh51ZTE4HBqOZ0.png",
                                    srcSet:
                                      "/framerusercontent.com/images/RVVeJvy3JYDlvh51ZTE4HBqOZ0.png?scale-down-to=1024 740w,/framerusercontent.com/images/RVVeJvy3JYDlvh51ZTE4HBqOZ0.png 1328w",
                                  },
                                },
                                KffKQZNjt: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 1837,
                                    intrinsicWidth: 1328,
                                    loading: i(9365),
                                    pixelHeight: 1837,
                                    pixelWidth: 1328,
                                    sizes: "795px",
                                    src: "/framerusercontent.com/images/RVVeJvy3JYDlvh51ZTE4HBqOZ0.png",
                                    srcSet:
                                      "/framerusercontent.com/images/RVVeJvy3JYDlvh51ZTE4HBqOZ0.png?scale-down-to=1024 740w,/framerusercontent.com/images/RVVeJvy3JYDlvh51ZTE4HBqOZ0.png 1328w",
                                  },
                                },
                              },
                              children: e(R, {
                                __framer__spring: {
                                  damping: 20,
                                  delay: 0,
                                  duration: 0.3,
                                  ease: [0.44, 0, 0.56, 1],
                                  mass: 0.5,
                                  stiffness: 400,
                                  type: "spring",
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1.2,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: -100,
                                    },
                                  },
                                ],
                                __framer__transformTrigger: "onInView",
                                __perspectiveFX: !1,
                                __targetOpacity: 0.5,
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 1837,
                                  intrinsicWidth: 1328,
                                  loading: i(9268.5),
                                  pixelHeight: 1837,
                                  pixelWidth: 1328,
                                  sizes: "795px",
                                  src: "/framerusercontent.com/images/RVVeJvy3JYDlvh51ZTE4HBqOZ0.png",
                                  srcSet:
                                    "/framerusercontent.com/images/RVVeJvy3JYDlvh51ZTE4HBqOZ0.png?scale-down-to=1024 740w,/framerusercontent.com/images/RVVeJvy3JYDlvh51ZTE4HBqOZ0.png 1328w",
                                },
                                className: "framer-1np9laa",
                                "data-framer-name": "Frozen-lil",
                              }),
                            }),
                          ],
                        }),
                        _("div", {
                          className: "framer-1g18u9g",
                          children: [
                            e(l, {
                              breakpoint: a,
                              overrides: {
                                Byvh2ikpS: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 1811,
                                    intrinsicWidth: 1253,
                                    loading: i(8724),
                                    pixelHeight: 1811,
                                    pixelWidth: 1253,
                                    sizes: "775px",
                                    src: "/framerusercontent.com/images/JISJ7exftFxKXSwj7NMjTXZdYo.png",
                                    srcSet:
                                      "/framerusercontent.com/images/JISJ7exftFxKXSwj7NMjTXZdYo.png?scale-down-to=1024 708w,/framerusercontent.com/images/JISJ7exftFxKXSwj7NMjTXZdYo.png 1253w",
                                  },
                                  transformTemplate: qr,
                                },
                                KffKQZNjt: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 1811,
                                    intrinsicWidth: 1253,
                                    loading: i(10758),
                                    pixelHeight: 1811,
                                    pixelWidth: 1253,
                                    sizes: "775px",
                                    src: "/framerusercontent.com/images/JISJ7exftFxKXSwj7NMjTXZdYo.png",
                                    srcSet:
                                      "/framerusercontent.com/images/JISJ7exftFxKXSwj7NMjTXZdYo.png?scale-down-to=1024 708w,/framerusercontent.com/images/JISJ7exftFxKXSwj7NMjTXZdYo.png 1253w",
                                  },
                                },
                              },
                              children: e(R, {
                                __framer__spring: {
                                  bounce: 0.2,
                                  damping: 13,
                                  delay: 0,
                                  duration: 0.3,
                                  durationBasedSpring: !1,
                                  ease: [0.44, 0, 0.56, 1],
                                  mass: 1,
                                  stiffness: 500,
                                  type: "spring",
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 100,
                                    },
                                  },
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 100,
                                    },
                                  },
                                ],
                                __framer__transformTrigger: "onInView",
                                __perspectiveFX: !1,
                                __targetOpacity: 0.5,
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 1811,
                                  intrinsicWidth: 1253,
                                  loading: i(9438.5),
                                  pixelHeight: 1811,
                                  pixelWidth: 1253,
                                  sizes: "775px",
                                  src: "/framerusercontent.com/images/JISJ7exftFxKXSwj7NMjTXZdYo.png",
                                  srcSet:
                                    "/framerusercontent.com/images/JISJ7exftFxKXSwj7NMjTXZdYo.png?scale-down-to=1024 708w,/framerusercontent.com/images/JISJ7exftFxKXSwj7NMjTXZdYo.png 1253w",
                                },
                                className: "framer-12uj858",
                                "data-framer-name": "Frozen-pepe",
                                transformTemplate: re,
                              }),
                            }),
                            e(l, {
                              breakpoint: a,
                              overrides: {
                                Byvh2ikpS: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 1811,
                                    intrinsicWidth: 1253,
                                    loading: i(8654),
                                    pixelHeight: 1811,
                                    pixelWidth: 1253,
                                    sizes: "775px",
                                    src: "/framerusercontent.com/images/JISJ7exftFxKXSwj7NMjTXZdYo.png",
                                    srcSet:
                                      "/framerusercontent.com/images/JISJ7exftFxKXSwj7NMjTXZdYo.png?scale-down-to=1024 708w,/framerusercontent.com/images/JISJ7exftFxKXSwj7NMjTXZdYo.png 1253w",
                                  },
                                  transformTemplate: void 0,
                                },
                                KffKQZNjt: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 1811,
                                    intrinsicWidth: 1253,
                                    loading: i(10688),
                                    pixelHeight: 1811,
                                    pixelWidth: 1253,
                                    sizes: "775px",
                                    src: "/framerusercontent.com/images/JISJ7exftFxKXSwj7NMjTXZdYo.png",
                                    srcSet:
                                      "/framerusercontent.com/images/JISJ7exftFxKXSwj7NMjTXZdYo.png?scale-down-to=1024 708w,/framerusercontent.com/images/JISJ7exftFxKXSwj7NMjTXZdYo.png 1253w",
                                  },
                                },
                              },
                              children: e(R, {
                                __framer__spring: {
                                  bounce: 0.2,
                                  damping: 13,
                                  delay: 0,
                                  duration: 0.3,
                                  durationBasedSpring: !1,
                                  ease: [0.44, 0, 0.56, 1],
                                  mass: 1,
                                  stiffness: 500,
                                  type: "spring",
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 0.1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 0.1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 100,
                                    },
                                  },
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                ],
                                __framer__transformTrigger: "onInView",
                                __perspectiveFX: !1,
                                __targetOpacity: 0.5,
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 1811,
                                  intrinsicWidth: 1253,
                                  loading: i(9368.5),
                                  pixelHeight: 1811,
                                  pixelWidth: 1253,
                                  sizes: "775px",
                                  src: "/framerusercontent.com/images/JISJ7exftFxKXSwj7NMjTXZdYo.png",
                                  srcSet:
                                    "/framerusercontent.com/images/JISJ7exftFxKXSwj7NMjTXZdYo.png?scale-down-to=1024 708w,/framerusercontent.com/images/JISJ7exftFxKXSwj7NMjTXZdYo.png 1253w",
                                },
                                className: "framer-fzebqj",
                                "data-framer-name": "Frozen-pepe",
                                transformTemplate: re,
                              }),
                            }),
                            e(l, {
                              breakpoint: a,
                              overrides: {
                                Byvh2ikpS: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 1811,
                                    intrinsicWidth: 1253,
                                    loading: i(8727),
                                    pixelHeight: 1811,
                                    pixelWidth: 1253,
                                    sizes: "775px",
                                    src: "/framerusercontent.com/images/JISJ7exftFxKXSwj7NMjTXZdYo.png",
                                    srcSet:
                                      "/framerusercontent.com/images/JISJ7exftFxKXSwj7NMjTXZdYo.png?scale-down-to=1024 708w,/framerusercontent.com/images/JISJ7exftFxKXSwj7NMjTXZdYo.png 1253w",
                                  },
                                  transformTemplate: re,
                                },
                                KffKQZNjt: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 1811,
                                    intrinsicWidth: 1253,
                                    loading: i(10761.308223477716),
                                    pixelHeight: 1811,
                                    pixelWidth: 1253,
                                    sizes: "775px",
                                    src: "/framerusercontent.com/images/JISJ7exftFxKXSwj7NMjTXZdYo.png",
                                    srcSet:
                                      "/framerusercontent.com/images/JISJ7exftFxKXSwj7NMjTXZdYo.png?scale-down-to=1024 708w,/framerusercontent.com/images/JISJ7exftFxKXSwj7NMjTXZdYo.png 1253w",
                                  },
                                },
                              },
                              children: e(R, {
                                __framer__spring: {
                                  bounce: 0.2,
                                  damping: 13,
                                  delay: 0,
                                  duration: 0.3,
                                  durationBasedSpring: !1,
                                  ease: [0.44, 0, 0.56, 1],
                                  mass: 1,
                                  stiffness: 500,
                                  type: "spring",
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: -100,
                                    },
                                  },
                                ],
                                __framer__transformTrigger: "onInView",
                                __perspectiveFX: !1,
                                __targetOpacity: 0.5,
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 1811,
                                  intrinsicWidth: 1253,
                                  loading: i(9441.808223477716),
                                  pixelHeight: 1811,
                                  pixelWidth: 1253,
                                  sizes: "775px",
                                  src: "/framerusercontent.com/images/JISJ7exftFxKXSwj7NMjTXZdYo.png",
                                  srcSet:
                                    "/framerusercontent.com/images/JISJ7exftFxKXSwj7NMjTXZdYo.png?scale-down-to=1024 708w,/framerusercontent.com/images/JISJ7exftFxKXSwj7NMjTXZdYo.png 1253w",
                                },
                                className: "framer-smbhsj",
                                "data-framer-name": "Frozen-pepe",
                                transformTemplate: st,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    _("div", {
                      className: "framer-10ytyjo",
                      "data-framer-name": "Frame 31",
                      id: ar,
                      ref: Tt,
                      children: [
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(10055.5),
                                sizes: "1020px",
                                src: "/framerusercontent.com/images/tg6FSya7VhN5bpHHW60yRy3Yu8s.png",
                                srcSet:
                                  "/framerusercontent.com/images/tg6FSya7VhN5bpHHW60yRy3Yu8s.png?scale-down-to=1024 881w,/framerusercontent.com/images/tg6FSya7VhN5bpHHW60yRy3Yu8s.png?scale-down-to=2048 1762w,/framerusercontent.com/images/tg6FSya7VhN5bpHHW60yRy3Yu8s.png 3016w",
                              },
                            },
                            KffKQZNjt: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(12741),
                                sizes: "1508px",
                                src: "/framerusercontent.com/images/tg6FSya7VhN5bpHHW60yRy3Yu8s.png",
                                srcSet:
                                  "/framerusercontent.com/images/tg6FSya7VhN5bpHHW60yRy3Yu8s.png?scale-down-to=1024 881w,/framerusercontent.com/images/tg6FSya7VhN5bpHHW60yRy3Yu8s.png?scale-down-to=2048 1762w,/framerusercontent.com/images/tg6FSya7VhN5bpHHW60yRy3Yu8s.png 3016w",
                              },
                            },
                          },
                          children: e(R, {
                            __framer__spring: {
                              damping: 60,
                              delay: 0,
                              duration: 0.3,
                              ease: [0.44, 0, 0.56, 1],
                              mass: 1,
                              stiffness: 500,
                              type: "spring",
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 250,
                                },
                              },
                            ],
                            __framer__transformTrigger: "onInView",
                            __perspectiveFX: !1,
                            __targetOpacity: 0.5,
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: i(11478),
                              sizes: "1508px",
                              src: "/framerusercontent.com/images/tg6FSya7VhN5bpHHW60yRy3Yu8s.png",
                              srcSet:
                                "/framerusercontent.com/images/tg6FSya7VhN5bpHHW60yRy3Yu8s.png?scale-down-to=1024 881w,/framerusercontent.com/images/tg6FSya7VhN5bpHHW60yRy3Yu8s.png?scale-down-to=2048 1762w,/framerusercontent.com/images/tg6FSya7VhN5bpHHW60yRy3Yu8s.png 3016w",
                            },
                            className: "framer-8ksuqa",
                            "data-framer-name": "image",
                            transformTemplate: qr,
                          }),
                        }),
                        Je() &&
                          e(l, {
                            breakpoint: a,
                            overrides: { KffKQZNjt: { style: { scale: 1.8 } } },
                            children: e(Lt, {
                              __framer__spring: {
                                bounce: 0.2,
                                damping: 60,
                                delay: 0,
                                duration: 1,
                                durationBasedSpring: !0,
                                ease: [0.44, 0, 0.56, 1],
                                mass: 1,
                                stiffness: 500,
                                type: "spring",
                              },
                              __framer__styleTransformEffectEnabled: !0,
                              __framer__transformTargets: [
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0,
                                  },
                                },
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: -200,
                                  },
                                },
                              ],
                              __framer__transformTrigger: "onInView",
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: "framer-1gtjk00 hidden-1rml4m2",
                              children:
                                Je() &&
                                e(Ne, {
                                  className: "framer-ivcu9z hidden-1rml4m2",
                                  "data-framer-name":
                                    "12 Inches of Magic Power",
                                  fill: "rgba(0,0,0,1)",
                                  intrinsicHeight: 1533,
                                  intrinsicWidth: 947,
                                  svg: `<svg width="947" height="1533" viewBox="-3 -3 947 1533" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M365.344 78.7094H340.222V28.9394C362.5 28.9394 371.98 18.9854 373.402 3.3434H424.594V355.999H365.344V78.7094Z" fill="#F3F597"/>
<path d="M494.894 46.4774C491.576 46.4774 489.68 48.8474 489.68 53.5874V122.317H436.118V49.3214C436.118 23.2514 452.234 0.0253906 490.628 0.0253906H501.056C540.872 0.0253906 560.306 19.4594 560.306 53.5874V98.6174C560.306 126.583 558.41 140.329 540.872 173.035L519.068 212.377C489.206 261.199 487.784 269.257 487.784 285.847V306.703H510.062V235.603H561.728V355.999H433.748V293.431C433.748 261.673 434.696 249.349 465.032 193.417L484.94 153.601C496.316 126.583 500.108 119.473 500.108 105.253V53.5874C500.108 48.8474 498.212 46.4774 494.894 46.4774Z" fill="#F3F597"/>
<path d="M141.709 392.343V744.999H81.5107V392.343H141.709Z" fill="#F3F597"/>
<path d="M151.407 392.343H212.079L235.305 583.365L234.831 392.343H284.601V744.999H229.143L201.177 533.595L201.651 744.999H151.407V392.343Z" fill="#F3F597"/>
<path d="M361.76 696.651C366.974 696.651 367.922 692.385 367.922 686.697V583.839H426.698V688.119C426.698 719.877 409.16 748.317 366.974 748.317H357.494C311.99 748.317 293.978 724.143 293.978 682.431V453.015C293.978 416.043 311.99 389.025 357.02 389.025H366.974C408.686 389.025 426.698 411.777 426.698 446.379V539.757H367.922V448.275C367.922 442.587 366.974 439.269 361.76 439.269C357.494 439.269 355.598 442.113 355.598 448.275V686.697C355.598 693.333 357.494 696.651 361.76 696.651Z" fill="#F3F597"/>
<path d="M435.622 744.999V392.343H495.82V529.329H508.618V392.343H568.342V744.999H508.618V591.423H495.82V744.999H435.622Z" fill="#F3F597"/>
<path d="M577.729 392.343H679.165V446.379H636.505V532.173H672.529V588.105H636.505V690.015H680.588V744.999H577.729V392.343Z" fill="#F3F597"/>
<path d="M760.397 748.317H746.651C707.309 748.317 687.875 730.305 687.875 693.807V601.377H746.651V689.541C746.651 695.703 748.547 699.021 752.813 699.021C757.079 699.021 759.449 695.703 759.449 689.067V620.337C759.449 608.961 758.027 604.221 749.021 596.163L718.211 569.619C697.829 552.555 689.297 533.121 689.297 506.577V444.009C689.297 411.303 706.361 389.025 749.495 389.025H763.241C806.375 389.025 820.121 410.829 820.121 439.269V517.005H762.293V442.113C762.293 436.899 760.397 434.529 756.131 434.529C751.865 434.529 749.969 436.899 749.969 442.113V502.311C749.969 511.791 751.865 515.109 759.449 522.219L789.785 548.763C813.485 568.671 822.491 584.313 822.491 615.597V685.749C822.491 723.669 804.005 748.317 760.397 748.317Z" fill="#F3F597"/>
<path d="M137.733 847.703V1069.06C137.733 1113.14 113.559 1137.32 74.2174 1137.32H64.2634C22.5514 1137.32 0.273438 1112.67 0.273438 1069.06V847.703C0.273438 804.095 19.2334 778.025 64.2634 778.025H73.7434C118.773 778.025 137.733 805.517 137.733 847.703ZM76.1134 1074.28V841.067C76.1134 833.957 73.7434 830.639 69.0034 830.639C64.7374 830.639 62.3674 833.957 62.3674 841.067V1074.28C62.3674 1080.44 64.7374 1083.76 69.0034 1083.76C73.7434 1083.76 76.1134 1080.44 76.1134 1074.28Z" fill="#F3F597"/>
<path d="M147.01 1134V781.343H247.498V835.379H205.786V921.647H240.388L240.862 977.105H205.786V1134H147.01Z" fill="#F3F597"/>
<path d="M293.283 1134V781.343H362.013L372.441 952.457L382.869 781.343H449.703V1134H399.459V936.815L381.921 1134H360.591L342.579 936.815V1134H293.283Z" fill="#F3F597"/>
<path d="M526.306 1018.82L519.196 884.675L512.086 1018.82H526.306ZM532.468 1134L529.15 1070.48H508.768L505.45 1134H453.784L483.172 781.343H559.012L590.77 1134H532.468Z" fill="#F3F597"/>
<path d="M641.121 1137.32H639.699C607.941 1137.32 592.773 1110.3 592.773 1079.02V839.171C592.773 806.465 608.889 778.025 656.289 778.025H664.347C712.221 778.025 725.967 805.991 725.967 834.431V913.589H668.139V836.801C668.139 831.113 666.717 827.795 661.029 827.795C656.763 827.795 654.393 830.639 654.393 836.801V1077.59C654.393 1084.7 657.237 1088.5 662.925 1088.5C668.613 1088.5 671.457 1084.7 671.457 1077.59V972.365H659.133V926.387H728.337V1134H688.047C686.625 1128.79 683.781 1115.99 681.885 1111.72C673.827 1124.52 661.503 1137.32 641.121 1137.32Z" fill="#F3F597"/>
<path d="M797.856 781.343V1134H737.658V781.343H797.856Z" fill="#F3F597"/>
<path d="M875.337 1085.65C880.551 1085.65 881.499 1081.39 881.499 1075.7V972.839H940.275V1077.12C940.275 1108.88 922.737 1137.32 880.551 1137.32H871.071C825.567 1137.32 807.555 1113.14 807.555 1071.43V842.015C807.555 805.043 825.567 778.025 870.597 778.025H880.551C922.263 778.025 940.275 800.777 940.275 835.379V928.757H881.499V837.275C881.499 831.587 880.551 828.269 875.337 828.269C871.071 828.269 869.175 831.113 869.175 837.275V1075.7C869.175 1082.33 871.071 1085.65 875.337 1085.65Z" fill="#F3F597"/>
<path d="M190.042 1377.01H161.602V1523H101.878V1170.34H189.094C214.216 1170.34 232.228 1183.62 232.228 1216.32V1330.08C232.228 1361.84 213.268 1377.01 190.042 1377.01ZM161.602 1215.85V1329.13H165.868C170.608 1329.13 172.978 1326.29 172.978 1320.13V1224.85C172.978 1219.17 172.03 1215.85 165.868 1215.85H161.602Z" fill="#F3F597"/>
<path d="M378.205 1236.7V1458.06C378.205 1502.14 354.031 1526.32 314.689 1526.32H304.735C263.023 1526.32 240.745 1501.67 240.745 1458.06V1236.7C240.745 1193.1 259.705 1167.03 304.735 1167.03H314.215C359.245 1167.03 378.205 1194.52 378.205 1236.7ZM316.585 1463.28V1230.07C316.585 1222.96 314.215 1219.64 309.475 1219.64C305.209 1219.64 302.839 1222.96 302.839 1230.07V1463.28C302.839 1469.44 305.209 1472.76 309.475 1472.76C314.215 1472.76 316.585 1469.44 316.585 1463.28Z" fill="#F3F597"/>
<path d="M478.071 1523H408.867L379.953 1170.34H442.047L449.157 1400.71L459.111 1170.34H515.043L525.471 1402.13L532.581 1170.34H590.409L561.495 1523H493.713L486.129 1322.02L478.071 1523Z" fill="#F3F597"/>
<path d="M594.856 1170.34H696.292V1224.38H653.632V1310.17H689.656V1366.11H653.632V1468.02H697.714V1523H594.856V1170.34Z" fill="#F3F597"/>
<path d="M766.611 1214.9V1317.76H771.351C775.617 1317.76 777.987 1314.91 777.987 1309.7V1222.96C777.987 1217.27 777.039 1214.9 771.825 1214.9H766.611ZM766.611 1368V1523H706.413V1170.34H799.791C820.647 1170.34 837.237 1183.62 837.237 1212.53V1295.48C837.237 1319.65 825.861 1329.13 815.907 1333.4C825.861 1337.67 838.185 1347.62 838.185 1366.11V1505.94C838.185 1513.05 839.133 1518.26 841.029 1521.58V1523H781.779C779.409 1519.68 777.987 1514.94 777.987 1508.31V1376.06C777.987 1370.85 777.039 1368 771.351 1368H766.611Z" fill="#F3F597"/>
</svg>
`,
                                  withExternalLayout: !0,
                                }),
                            }),
                          }),
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              __framer__transformTargets: [
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0,
                                  },
                                },
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: -250,
                                  },
                                },
                              ],
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(10662),
                                sizes: "1508px",
                                src: "/framerusercontent.com/images/tg6FSya7VhN5bpHHW60yRy3Yu8s.png",
                                srcSet:
                                  "/framerusercontent.com/images/tg6FSya7VhN5bpHHW60yRy3Yu8s.png?scale-down-to=1024 881w,/framerusercontent.com/images/tg6FSya7VhN5bpHHW60yRy3Yu8s.png?scale-down-to=2048 1762w,/framerusercontent.com/images/tg6FSya7VhN5bpHHW60yRy3Yu8s.png 3016w",
                              },
                              style: { scale: 0.8 },
                            },
                            KffKQZNjt: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(13171),
                                sizes: "1508px",
                                src: "/framerusercontent.com/images/tg6FSya7VhN5bpHHW60yRy3Yu8s.png",
                                srcSet:
                                  "/framerusercontent.com/images/tg6FSya7VhN5bpHHW60yRy3Yu8s.png?scale-down-to=1024 881w,/framerusercontent.com/images/tg6FSya7VhN5bpHHW60yRy3Yu8s.png?scale-down-to=2048 1762w,/framerusercontent.com/images/tg6FSya7VhN5bpHHW60yRy3Yu8s.png 3016w",
                              },
                            },
                          },
                          children: e(R, {
                            __framer__spring: {
                              damping: 60,
                              delay: 0,
                              duration: 0.3,
                              ease: [0.44, 0, 0.56, 1],
                              mass: 1,
                              stiffness: 500,
                              type: "spring",
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 250,
                                },
                              },
                            ],
                            __framer__transformTrigger: "onInView",
                            __perspectiveFX: !1,
                            __targetOpacity: 0.5,
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: i(11908),
                              sizes: "1508px",
                              src: "/framerusercontent.com/images/tg6FSya7VhN5bpHHW60yRy3Yu8s.png",
                              srcSet:
                                "/framerusercontent.com/images/tg6FSya7VhN5bpHHW60yRy3Yu8s.png?scale-down-to=1024 881w,/framerusercontent.com/images/tg6FSya7VhN5bpHHW60yRy3Yu8s.png?scale-down-to=2048 1762w,/framerusercontent.com/images/tg6FSya7VhN5bpHHW60yRy3Yu8s.png 3016w",
                            },
                            className: "framer-16d0owj",
                            "data-framer-name": "image",
                          }),
                        }),
                        We() &&
                          e(Oi, {
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: -800,
                                },
                              },
                              {
                                ref: Tt,
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                            ],
                            __framer__transformTrigger: "onScrollTarget",
                            __framer__transformViewportThreshold: 1,
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            children: e(k, {
                              children: e("p", {
                                style: {
                                  "--font-selector":
                                    "R0Y7RHJ1ayBDb25kZW5zZWQtOTAw",
                                  "--framer-font-family":
                                    '"Druk Condensed", sans-serif',
                                  "--framer-font-size": "474px",
                                  "--framer-font-weight": "900",
                                  "--framer-line-height": "82%",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151))",
                                  "--framer-text-transform": "uppercase",
                                },
                                children: "12 Inches of Magic Power",
                              }),
                            }),
                            className:
                              "framer-g3fm13 hidden-14718gw hidden-174vl6w",
                            "data-framer-name": "12 Inches of Magic Power",
                            fonts: ["GF;Druk Condensed-900"],
                            transformTemplate: re,
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(10780),
                                sizes: "406px",
                                src: "/framerusercontent.com/images/w3jTOPxnMxQbAk75Rf08lzyHTvE.png",
                                srcSet:
                                  "/framerusercontent.com/images/w3jTOPxnMxQbAk75Rf08lzyHTvE.png 812w",
                              },
                            },
                            KffKQZNjt: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(13409),
                                sizes: "406px",
                                src: "/framerusercontent.com/images/w3jTOPxnMxQbAk75Rf08lzyHTvE.png",
                                srcSet:
                                  "/framerusercontent.com/images/w3jTOPxnMxQbAk75Rf08lzyHTvE.png 812w",
                              },
                            },
                          },
                          children: e(R, {
                            __framer__spring: {
                              damping: 60,
                              delay: 0,
                              duration: 0.3,
                              ease: [0.44, 0, 0.56, 1],
                              mass: 1,
                              stiffness: 500,
                              type: "spring",
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                ref: ee,
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 45,
                                  rotateY: 45,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: -125,
                                },
                              },
                            ],
                            __framer__transformTrigger: "onScrollTarget",
                            __framer__transformViewportThreshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: i(12146),
                              sizes: "406px",
                              src: "/framerusercontent.com/images/w3jTOPxnMxQbAk75Rf08lzyHTvE.png",
                              srcSet:
                                "/framerusercontent.com/images/w3jTOPxnMxQbAk75Rf08lzyHTvE.png 812w",
                            },
                            className: "framer-1f4z2l6",
                            "data-framer-name": "image",
                          }),
                        }),
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(11280),
                                sizes: "406px",
                                src: "/framerusercontent.com/images/w3jTOPxnMxQbAk75Rf08lzyHTvE.png",
                                srcSet:
                                  "/framerusercontent.com/images/w3jTOPxnMxQbAk75Rf08lzyHTvE.png 812w",
                              },
                            },
                            KffKQZNjt: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(13909),
                                sizes: "406px",
                                src: "/framerusercontent.com/images/w3jTOPxnMxQbAk75Rf08lzyHTvE.png",
                                srcSet:
                                  "/framerusercontent.com/images/w3jTOPxnMxQbAk75Rf08lzyHTvE.png 812w",
                              },
                            },
                          },
                          children: e(R, {
                            __framer__spring: {
                              damping: 60,
                              delay: 0,
                              duration: 0.3,
                              ease: [0.44, 0, 0.56, 1],
                              mass: 1,
                              stiffness: 500,
                              type: "spring",
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                ref: ee,
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: -20,
                                  x: 0,
                                  y: -125,
                                },
                              },
                            ],
                            __framer__transformTrigger: "onScrollTarget",
                            __framer__transformViewportThreshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: i(12646),
                              sizes: "406px",
                              src: "/framerusercontent.com/images/w3jTOPxnMxQbAk75Rf08lzyHTvE.png",
                              srcSet:
                                "/framerusercontent.com/images/w3jTOPxnMxQbAk75Rf08lzyHTvE.png 812w",
                            },
                            className: "framer-1lvxr7n",
                            "data-framer-name": "image",
                          }),
                        }),
                        e(Ne, {
                          className: "framer-1ukf8md",
                          "data-framer-name": "toilet",
                          fill: "rgba(0,0,0,1)",
                          intrinsicHeight: 467,
                          intrinsicWidth: 668,
                          svg: `<svg width="668" height="467" viewBox="-1 -1 668 467" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M662.5 162C671.5 60.5 661 78.5 596 2.5L102 0C74.1665 17.5 15.2996 67 2.49963 125C-10.3004 183 59.4996 351.833 95.9996 429C205 443.333 427 470.3 443 463.5C463 455 653.5 263.5 662.5 162Z" fill="black"/>
</svg>
`,
                          withExternalLayout: !0,
                        }),
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(10464.5),
                                sizes: "999px",
                                src: "/framerusercontent.com/images/ZL0luQYqEvGoccdLFJdTmeS1joU.png",
                                srcSet:
                                  "/framerusercontent.com/images/ZL0luQYqEvGoccdLFJdTmeS1joU.png?scale-down-to=1024 623w,/framerusercontent.com/images/ZL0luQYqEvGoccdLFJdTmeS1joU.png?scale-down-to=2048 1247w,/framerusercontent.com/images/ZL0luQYqEvGoccdLFJdTmeS1joU.png 1696w",
                              },
                              style: { scale: 0.6 },
                            },
                            KffKQZNjt: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(13093.5),
                                sizes: "999px",
                                src: "/framerusercontent.com/images/ZL0luQYqEvGoccdLFJdTmeS1joU.png",
                                srcSet:
                                  "/framerusercontent.com/images/ZL0luQYqEvGoccdLFJdTmeS1joU.png?scale-down-to=1024 623w,/framerusercontent.com/images/ZL0luQYqEvGoccdLFJdTmeS1joU.png?scale-down-to=2048 1247w,/framerusercontent.com/images/ZL0luQYqEvGoccdLFJdTmeS1joU.png 1696w",
                              },
                            },
                          },
                          children: e(R, {
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 250,
                                },
                              },
                            ],
                            __framer__transformTrigger: "onInView",
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: i(11830.5),
                              sizes: "999px",
                              src: "/framerusercontent.com/images/ZL0luQYqEvGoccdLFJdTmeS1joU.png",
                              srcSet:
                                "/framerusercontent.com/images/ZL0luQYqEvGoccdLFJdTmeS1joU.png?scale-down-to=1024 623w,/framerusercontent.com/images/ZL0luQYqEvGoccdLFJdTmeS1joU.png?scale-down-to=2048 1247w,/framerusercontent.com/images/ZL0luQYqEvGoccdLFJdTmeS1joU.png 1696w",
                            },
                            className: "framer-ozzd80",
                            "data-framer-name": "lil-toilet 2",
                            id: gt,
                            ref: $,
                          }),
                        }),
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              background: {
                                alt: "",
                                fit: "stretch",
                                loading: i(11115),
                                positionX: "center",
                                positionY: "center",
                                sizes: "505px",
                                src: "/framerusercontent.com/images/Z1fmVV7cKogpVDInRRHJYw8sViI.png",
                                srcSet:
                                  "/framerusercontent.com/images/Z1fmVV7cKogpVDInRRHJYw8sViI.png?scale-down-to=1024 863w,/framerusercontent.com/images/Z1fmVV7cKogpVDInRRHJYw8sViI.png?scale-down-to=2048 1726w,/framerusercontent.com/images/Z1fmVV7cKogpVDInRRHJYw8sViI.png 2020w",
                              },
                              style: { scale: 0.6 },
                            },
                            KffKQZNjt: {
                              background: {
                                alt: "",
                                fit: "stretch",
                                loading: i(13744),
                                positionX: "center",
                                positionY: "center",
                                sizes: "505px",
                                src: "/framerusercontent.com/images/Z1fmVV7cKogpVDInRRHJYw8sViI.png",
                                srcSet:
                                  "/framerusercontent.com/images/Z1fmVV7cKogpVDInRRHJYw8sViI.png?scale-down-to=1024 863w,/framerusercontent.com/images/Z1fmVV7cKogpVDInRRHJYw8sViI.png?scale-down-to=2048 1726w,/framerusercontent.com/images/Z1fmVV7cKogpVDInRRHJYw8sViI.png 2020w",
                              },
                            },
                          },
                          children: e(R, {
                            __framer__spring: {
                              damping: 60,
                              delay: 0,
                              duration: 0.3,
                              ease: [0.44, 0, 0.56, 1],
                              mass: 1,
                              stiffness: 500,
                              type: "spring",
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                ref: ee,
                                target: {
                                  opacity: 1,
                                  rotate: 45,
                                  rotateX: 45,
                                  rotateY: 45,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: -125,
                                },
                              },
                            ],
                            __framer__transformTrigger: "onScrollTarget",
                            __framer__transformViewportThreshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: "",
                              fit: "stretch",
                              loading: i(12481),
                              positionX: "center",
                              positionY: "center",
                              sizes: "505px",
                              src: "/framerusercontent.com/images/Z1fmVV7cKogpVDInRRHJYw8sViI.png",
                              srcSet:
                                "/framerusercontent.com/images/Z1fmVV7cKogpVDInRRHJYw8sViI.png?scale-down-to=1024 863w,/framerusercontent.com/images/Z1fmVV7cKogpVDInRRHJYw8sViI.png?scale-down-to=2048 1726w,/framerusercontent.com/images/Z1fmVV7cKogpVDInRRHJYw8sViI.png 2020w",
                            },
                            className: "framer-1qy10e",
                            "data-framer-name": "image 68",
                          }),
                        }),
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              background: {
                                alt: "",
                                fit: "stretch",
                                loading: i(11615),
                                positionX: "center",
                                positionY: "center",
                                sizes: "505px",
                                src: "/framerusercontent.com/images/Z1fmVV7cKogpVDInRRHJYw8sViI.png",
                                srcSet:
                                  "/framerusercontent.com/images/Z1fmVV7cKogpVDInRRHJYw8sViI.png?scale-down-to=1024 863w,/framerusercontent.com/images/Z1fmVV7cKogpVDInRRHJYw8sViI.png?scale-down-to=2048 1726w,/framerusercontent.com/images/Z1fmVV7cKogpVDInRRHJYw8sViI.png 2020w",
                              },
                              style: { scale: 0.8 },
                            },
                            KffKQZNjt: {
                              background: {
                                alt: "",
                                fit: "stretch",
                                loading: i(14244),
                                positionX: "center",
                                positionY: "center",
                                sizes: "505px",
                                src: "/framerusercontent.com/images/Z1fmVV7cKogpVDInRRHJYw8sViI.png",
                                srcSet:
                                  "/framerusercontent.com/images/Z1fmVV7cKogpVDInRRHJYw8sViI.png?scale-down-to=1024 863w,/framerusercontent.com/images/Z1fmVV7cKogpVDInRRHJYw8sViI.png?scale-down-to=2048 1726w,/framerusercontent.com/images/Z1fmVV7cKogpVDInRRHJYw8sViI.png 2020w",
                              },
                            },
                          },
                          children: e(R, {
                            __framer__spring: {
                              damping: 60,
                              delay: 0,
                              duration: 0.3,
                              ease: [0.44, 0, 0.56, 1],
                              mass: 1,
                              stiffness: 500,
                              type: "spring",
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                ref: ee,
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 15,
                                  x: 0,
                                  y: -125,
                                },
                              },
                            ],
                            __framer__transformTrigger: "onScrollTarget",
                            __framer__transformViewportThreshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: "",
                              fit: "stretch",
                              loading: i(12981),
                              positionX: "center",
                              positionY: "center",
                              sizes: "505px",
                              src: "/framerusercontent.com/images/Z1fmVV7cKogpVDInRRHJYw8sViI.png",
                              srcSet:
                                "/framerusercontent.com/images/Z1fmVV7cKogpVDInRRHJYw8sViI.png?scale-down-to=1024 863w,/framerusercontent.com/images/Z1fmVV7cKogpVDInRRHJYw8sViI.png?scale-down-to=2048 1726w,/framerusercontent.com/images/Z1fmVV7cKogpVDInRRHJYw8sViI.png 2020w",
                            },
                            className: "framer-ls3pqs",
                            "data-framer-name": "image 68",
                          }),
                        }),
                        Q() &&
                          e(l, {
                            breakpoint: a,
                            overrides: {
                              KffKQZNjt: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  loading: i(13771.5),
                                  sizes: "354px",
                                  src: "/framerusercontent.com/images/mhtyZhdqJnsQ3KJUKZiTAzryU.png",
                                  srcSet:
                                    "/framerusercontent.com/images/mhtyZhdqJnsQ3KJUKZiTAzryU.png 708w",
                                },
                              },
                            },
                            children: e(R, {
                              __framer__spring: {
                                damping: 60,
                                delay: 0,
                                duration: 0.3,
                                ease: [0.44, 0, 0.56, 1],
                                mass: 1,
                                stiffness: 500,
                                type: "spring",
                              },
                              __framer__styleTransformEffectEnabled: !0,
                              __framer__transformTargets: [
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0,
                                  },
                                },
                                {
                                  ref: ee,
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 15,
                                    rotateY: 80,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: -200,
                                  },
                                },
                              ],
                              __framer__transformTrigger: "onScrollTarget",
                              __framer__transformViewportThreshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(12508.5),
                                sizes: "354px",
                                src: "/framerusercontent.com/images/mhtyZhdqJnsQ3KJUKZiTAzryU.png",
                                srcSet:
                                  "/framerusercontent.com/images/mhtyZhdqJnsQ3KJUKZiTAzryU.png 708w",
                              },
                              className: "framer-pjn93a hidden-14718gw",
                              "data-framer-name": "image",
                            }),
                          }),
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(11643),
                                sizes: "354px",
                                src: "/framerusercontent.com/images/mhtyZhdqJnsQ3KJUKZiTAzryU.png",
                                srcSet:
                                  "/framerusercontent.com/images/mhtyZhdqJnsQ3KJUKZiTAzryU.png 708w",
                              },
                            },
                            KffKQZNjt: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(14272),
                                sizes: "354px",
                                src: "/framerusercontent.com/images/mhtyZhdqJnsQ3KJUKZiTAzryU.png",
                                srcSet:
                                  "/framerusercontent.com/images/mhtyZhdqJnsQ3KJUKZiTAzryU.png 708w",
                              },
                            },
                          },
                          children: e(R, {
                            __framer__spring: {
                              damping: 60,
                              delay: 0,
                              duration: 0.3,
                              ease: [0.44, 0, 0.56, 1],
                              mass: 1,
                              stiffness: 500,
                              type: "spring",
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                ref: ee,
                                target: {
                                  opacity: 1,
                                  rotate: 50,
                                  rotateX: 150,
                                  rotateY: 50,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: -200,
                                },
                              },
                            ],
                            __framer__transformTrigger: "onScrollTarget",
                            __framer__transformViewportThreshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: i(13009),
                              sizes: "354px",
                              src: "/framerusercontent.com/images/mhtyZhdqJnsQ3KJUKZiTAzryU.png",
                              srcSet:
                                "/framerusercontent.com/images/mhtyZhdqJnsQ3KJUKZiTAzryU.png 708w",
                            },
                            className: "framer-s356mu",
                            "data-framer-name": "image",
                          }),
                        }),
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              __framer__transformTargets: [
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0,
                                  },
                                },
                                {
                                  ref: ee,
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 80,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: -20,
                                    x: 0,
                                    y: -500,
                                  },
                                },
                              ],
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(11755),
                                sizes: "500px",
                                src: "/framerusercontent.com/images/7Oq2BB7IpKVm4UNTSyudQf8EQ.png",
                                srcSet:
                                  "/framerusercontent.com/images/7Oq2BB7IpKVm4UNTSyudQf8EQ.png?scale-down-to=1024 759w,/framerusercontent.com/images/7Oq2BB7IpKVm4UNTSyudQf8EQ.png 1064w",
                              },
                              style: { scale: 0.7 },
                            },
                            KffKQZNjt: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(14384),
                                sizes: "500px",
                                src: "/framerusercontent.com/images/7Oq2BB7IpKVm4UNTSyudQf8EQ.png",
                                srcSet:
                                  "/framerusercontent.com/images/7Oq2BB7IpKVm4UNTSyudQf8EQ.png?scale-down-to=1024 759w,/framerusercontent.com/images/7Oq2BB7IpKVm4UNTSyudQf8EQ.png 1064w",
                              },
                            },
                          },
                          children: e(R, {
                            __framer__spring: {
                              damping: 60,
                              delay: 0,
                              duration: 0.3,
                              ease: [0.44, 0, 0.56, 1],
                              mass: 1,
                              stiffness: 500,
                              type: "spring",
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                ref: ee,
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 80,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: -20,
                                  x: 0,
                                  y: -800,
                                },
                              },
                            ],
                            __framer__transformTrigger: "onScrollTarget",
                            __framer__transformViewportThreshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: i(13121),
                              sizes: "500px",
                              src: "/framerusercontent.com/images/7Oq2BB7IpKVm4UNTSyudQf8EQ.png",
                              srcSet:
                                "/framerusercontent.com/images/7Oq2BB7IpKVm4UNTSyudQf8EQ.png?scale-down-to=1024 759w,/framerusercontent.com/images/7Oq2BB7IpKVm4UNTSyudQf8EQ.png 1064w",
                            },
                            className: "framer-1b6rw4c",
                            "data-framer-name": "image",
                          }),
                        }),
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              __framer__transformTargets: [
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0,
                                  },
                                },
                                {
                                  ref: ee,
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 15,
                                    rotateY: -40,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: -2,
                                    x: 0,
                                    y: -300,
                                  },
                                },
                              ],
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(11916),
                                sizes: "calc(100vw + 204px)",
                                src: "/framerusercontent.com/images/5aQbu9sGQ02Dw4dluOrRYlda6XU.png",
                                srcSet:
                                  "/framerusercontent.com/images/5aQbu9sGQ02Dw4dluOrRYlda6XU.png?scale-down-to=1024 912w,/framerusercontent.com/images/5aQbu9sGQ02Dw4dluOrRYlda6XU.png 1280w",
                              },
                            },
                            KffKQZNjt: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(14545),
                                sizes: "594px",
                                src: "/framerusercontent.com/images/5aQbu9sGQ02Dw4dluOrRYlda6XU.png",
                                srcSet:
                                  "/framerusercontent.com/images/5aQbu9sGQ02Dw4dluOrRYlda6XU.png?scale-down-to=1024 912w,/framerusercontent.com/images/5aQbu9sGQ02Dw4dluOrRYlda6XU.png 1280w",
                              },
                            },
                          },
                          children: e(R, {
                            __framer__spring: {
                              damping: 60,
                              delay: 0,
                              duration: 0.3,
                              ease: [0.44, 0, 0.56, 1],
                              mass: 1,
                              stiffness: 500,
                              type: "spring",
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                ref: ee,
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 15,
                                  rotateY: -40,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: -2,
                                  x: 0,
                                  y: -1e3,
                                },
                              },
                            ],
                            __framer__transformTrigger: "onScrollTarget",
                            __framer__transformViewportThreshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: i(13282),
                              sizes: "594px",
                              src: "/framerusercontent.com/images/5aQbu9sGQ02Dw4dluOrRYlda6XU.png",
                              srcSet:
                                "/framerusercontent.com/images/5aQbu9sGQ02Dw4dluOrRYlda6XU.png?scale-down-to=1024 912w,/framerusercontent.com/images/5aQbu9sGQ02Dw4dluOrRYlda6XU.png 1280w",
                            },
                            className: "framer-m18zv1",
                            "data-framer-name": "image",
                          }),
                        }),
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(11532),
                                sizes: "337px",
                                src: "/framerusercontent.com/images/WbRuXWTtxl8nvxd4nKPu0Aae36s.png",
                                srcSet:
                                  "/framerusercontent.com/images/WbRuXWTtxl8nvxd4nKPu0Aae36s.png 674w",
                              },
                            },
                            KffKQZNjt: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(14161),
                                sizes: "337px",
                                src: "/framerusercontent.com/images/WbRuXWTtxl8nvxd4nKPu0Aae36s.png",
                                srcSet:
                                  "/framerusercontent.com/images/WbRuXWTtxl8nvxd4nKPu0Aae36s.png 674w",
                              },
                            },
                          },
                          children: e(R, {
                            __framer__spring: {
                              damping: 60,
                              delay: 0,
                              duration: 0.3,
                              ease: [0.44, 0, 0.56, 1],
                              mass: 1,
                              stiffness: 500,
                              type: "spring",
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                ref: ee,
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: -20,
                                  x: 0,
                                  y: -175,
                                },
                              },
                            ],
                            __framer__transformTrigger: "onScrollTarget",
                            __framer__transformViewportThreshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: i(12898),
                              sizes: "337px",
                              src: "/framerusercontent.com/images/WbRuXWTtxl8nvxd4nKPu0Aae36s.png",
                              srcSet:
                                "/framerusercontent.com/images/WbRuXWTtxl8nvxd4nKPu0Aae36s.png 674w",
                            },
                            className: "framer-nyngik",
                            "data-framer-name": "image",
                          }),
                        }),
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(12032),
                                sizes: "337px",
                                src: "/framerusercontent.com/images/WbRuXWTtxl8nvxd4nKPu0Aae36s.png",
                                srcSet:
                                  "/framerusercontent.com/images/WbRuXWTtxl8nvxd4nKPu0Aae36s.png 674w",
                              },
                            },
                            KffKQZNjt: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(14661),
                                sizes: "337px",
                                src: "/framerusercontent.com/images/WbRuXWTtxl8nvxd4nKPu0Aae36s.png",
                                srcSet:
                                  "/framerusercontent.com/images/WbRuXWTtxl8nvxd4nKPu0Aae36s.png 674w",
                              },
                            },
                          },
                          children: e(R, {
                            __framer__spring: {
                              damping: 60,
                              delay: 0,
                              duration: 0.3,
                              ease: [0.44, 0, 0.56, 1],
                              mass: 1,
                              stiffness: 500,
                              type: "spring",
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                ref: ee,
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 180,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: -300,
                                },
                              },
                            ],
                            __framer__transformTrigger: "onScrollTarget",
                            __framer__transformViewportThreshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: i(13398),
                              sizes: "337px",
                              src: "/framerusercontent.com/images/WbRuXWTtxl8nvxd4nKPu0Aae36s.png",
                              srcSet:
                                "/framerusercontent.com/images/WbRuXWTtxl8nvxd4nKPu0Aae36s.png 674w",
                            },
                            className: "framer-1kyeqy1",
                            "data-framer-name": "image",
                          }),
                        }),
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(10632),
                                sizes: "488px",
                                src: "/framerusercontent.com/images/ow2kf12XRR7mgN0RX73G6bqhrY.png",
                                srcSet:
                                  "/framerusercontent.com/images/ow2kf12XRR7mgN0RX73G6bqhrY.png?scale-down-to=1024 839w,/framerusercontent.com/images/ow2kf12XRR7mgN0RX73G6bqhrY.png 1008w",
                              },
                            },
                            KffKQZNjt: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(13261),
                                sizes: "488px",
                                src: "/framerusercontent.com/images/ow2kf12XRR7mgN0RX73G6bqhrY.png",
                                srcSet:
                                  "/framerusercontent.com/images/ow2kf12XRR7mgN0RX73G6bqhrY.png?scale-down-to=1024 839w,/framerusercontent.com/images/ow2kf12XRR7mgN0RX73G6bqhrY.png 1008w",
                              },
                            },
                          },
                          children: e(R, {
                            __framer__spring: {
                              damping: 60,
                              delay: 0,
                              duration: 0.3,
                              ease: [0.44, 0, 0.56, 1],
                              mass: 1,
                              stiffness: 500,
                              type: "spring",
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                ref: ee,
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: -20,
                                  x: 0,
                                  y: -400,
                                },
                              },
                            ],
                            __framer__transformTrigger: "onScrollTarget",
                            __framer__transformViewportThreshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: i(11998),
                              sizes: "488px",
                              src: "/framerusercontent.com/images/ow2kf12XRR7mgN0RX73G6bqhrY.png",
                              srcSet:
                                "/framerusercontent.com/images/ow2kf12XRR7mgN0RX73G6bqhrY.png?scale-down-to=1024 839w,/framerusercontent.com/images/ow2kf12XRR7mgN0RX73G6bqhrY.png 1008w",
                            },
                            className: "framer-1jlug1v",
                            "data-framer-name": "image",
                          }),
                        }),
                        Q() &&
                          e(l, {
                            breakpoint: a,
                            overrides: {
                              KffKQZNjt: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  loading: i(14888),
                                  sizes: "100vw",
                                  src: "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png",
                                  srcSet:
                                    "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=512 512w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=1024 1024w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png 1920w",
                                },
                              },
                            },
                            children: e(B, {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(13562),
                                sizes: "100vw",
                                src: "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png",
                                srcSet:
                                  "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=512 512w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=1024 1024w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png 1920w",
                              },
                              className: "framer-1gfg1m9 hidden-14718gw",
                              "data-framer-name": "splitter-zig-zag 3",
                            }),
                          }),
                        e("div", {
                          className: "framer-1kogld",
                          "data-framer-name": "dollar-sign-section",
                          id: O,
                          ref: ee,
                        }),
                      ],
                    }),
                    _("div", {
                      className: "framer-1csghqk",
                      "data-framer-name": "12-inches",
                      children: [
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              __framer__spring: {
                                damping: 60,
                                delay: 0,
                                duration: 0.3,
                                ease: [0.44, 0, 0.56, 1],
                                mass: 1,
                                stiffness: 500,
                                type: "spring",
                              },
                              __framer__transformTargets: [
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1.1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: -100,
                                    y: 0,
                                  },
                                },
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 5,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1.25,
                                    skewX: 0,
                                    skewY: 0,
                                    x: -100,
                                    y: -150,
                                  },
                                },
                              ],
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(11481),
                                sizes: "656px",
                                src: "/framerusercontent.com/images/FA5q4xzqTzD0sshNGsSiWe5eZK0.png",
                                srcSet:
                                  "/framerusercontent.com/images/FA5q4xzqTzD0sshNGsSiWe5eZK0.png?scale-down-to=512 512w,/framerusercontent.com/images/FA5q4xzqTzD0sshNGsSiWe5eZK0.png?scale-down-to=1024 1024w,/framerusercontent.com/images/FA5q4xzqTzD0sshNGsSiWe5eZK0.png?scale-down-to=2048 2048w,/framerusercontent.com/images/FA5q4xzqTzD0sshNGsSiWe5eZK0.png 2336w",
                              },
                              style: { rotate: 35 },
                            },
                            KffKQZNjt: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(14954),
                                sizes: "1866px",
                                src: "/framerusercontent.com/images/FA5q4xzqTzD0sshNGsSiWe5eZK0.png",
                                srcSet:
                                  "/framerusercontent.com/images/FA5q4xzqTzD0sshNGsSiWe5eZK0.png?scale-down-to=512 512w,/framerusercontent.com/images/FA5q4xzqTzD0sshNGsSiWe5eZK0.png?scale-down-to=1024 1024w,/framerusercontent.com/images/FA5q4xzqTzD0sshNGsSiWe5eZK0.png?scale-down-to=2048 2048w,/framerusercontent.com/images/FA5q4xzqTzD0sshNGsSiWe5eZK0.png 2336w",
                              },
                              style: { scale: 0.8 },
                            },
                          },
                          children: e(R, {
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 0.8,
                                  rotate: 20,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 22,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: -200,
                                },
                              },
                            ],
                            __framer__transformTrigger: "onInView",
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: i(13691),
                              sizes: "1866px",
                              src: "/framerusercontent.com/images/FA5q4xzqTzD0sshNGsSiWe5eZK0.png",
                              srcSet:
                                "/framerusercontent.com/images/FA5q4xzqTzD0sshNGsSiWe5eZK0.png?scale-down-to=512 512w,/framerusercontent.com/images/FA5q4xzqTzD0sshNGsSiWe5eZK0.png?scale-down-to=1024 1024w,/framerusercontent.com/images/FA5q4xzqTzD0sshNGsSiWe5eZK0.png?scale-down-to=2048 2048w,/framerusercontent.com/images/FA5q4xzqTzD0sshNGsSiWe5eZK0.png 2336w",
                            },
                            className: "framer-1pcnp6g",
                            "data-framer-name": "12-tete",
                            id: z,
                            ref: de,
                            transformTemplate: re,
                          }),
                        }),
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              __framer__transformTargets: [
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 15,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 100,
                                  },
                                },
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 25,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: -100,
                                    y: -100,
                                  },
                                },
                              ],
                              background: {
                                alt: "",
                                fit: "stretch",
                                loading: i(11769),
                                positionX: "center",
                                positionY: "center",
                                sizes: "743px",
                                src: "/framerusercontent.com/images/wC0hlSMr6Njtcdhh4pdtVF7s.png",
                                srcSet:
                                  "/framerusercontent.com/images/wC0hlSMr6Njtcdhh4pdtVF7s.png?scale-down-to=2048 762w,/framerusercontent.com/images/wC0hlSMr6Njtcdhh4pdtVF7s.png 779w",
                              },
                              style: { rotate: 62, scale: 0.5 },
                            },
                            KffKQZNjt: {
                              background: {
                                alt: "",
                                fit: "stretch",
                                loading: i(14670),
                                positionX: "center",
                                positionY: "center",
                                sizes: "779px",
                                src: "/framerusercontent.com/images/wC0hlSMr6Njtcdhh4pdtVF7s.png",
                                srcSet:
                                  "/framerusercontent.com/images/wC0hlSMr6Njtcdhh4pdtVF7s.png?scale-down-to=2048 762w,/framerusercontent.com/images/wC0hlSMr6Njtcdhh4pdtVF7s.png 779w",
                              },
                            },
                          },
                          children: e(R, {
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 15,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 225,
                                },
                              },
                              {
                                target: {
                                  opacity: 1,
                                  rotate: -25,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: -100,
                                },
                              },
                            ],
                            __framer__transformTrigger: "onInView",
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: "",
                              fit: "stretch",
                              loading: i(13407),
                              positionX: "center",
                              positionY: "center",
                              sizes: "779px",
                              src: "/framerusercontent.com/images/wC0hlSMr6Njtcdhh4pdtVF7s.png",
                              srcSet:
                                "/framerusercontent.com/images/wC0hlSMr6Njtcdhh4pdtVF7s.png?scale-down-to=2048 762w,/framerusercontent.com/images/wC0hlSMr6Njtcdhh4pdtVF7s.png 779w",
                            },
                            className: "framer-jejx8f",
                            "data-framer-name": "12-main-gauche",
                            style: { rotate: 62 },
                          }),
                        }),
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              __framer__transformTargets: [
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 20,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: -200,
                                    y: -250,
                                  },
                                },
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 20,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: -200,
                                    y: 150,
                                  },
                                },
                              ],
                              background: {
                                alt: "",
                                fit: "stretch",
                                loading: i(12298),
                                positionX: "center",
                                positionY: "center",
                                sizes: "943px",
                                src: "/framerusercontent.com/images/OEHSkgxt15JxW9Fo1LJUrTP9X1I.png",
                                srcSet:
                                  "/framerusercontent.com/images/OEHSkgxt15JxW9Fo1LJUrTP9X1I.png?scale-down-to=1024 543w,/framerusercontent.com/images/OEHSkgxt15JxW9Fo1LJUrTP9X1I.png?scale-down-to=2048 1086w,/framerusercontent.com/images/OEHSkgxt15JxW9Fo1LJUrTP9X1I.png 1990w",
                              },
                              style: { rotate: 50, scale: 0.5 },
                            },
                            KffKQZNjt: {
                              background: {
                                alt: "",
                                fit: "stretch",
                                loading: i(15358),
                                positionX: "center",
                                positionY: "center",
                                sizes: "995px",
                                src: "/framerusercontent.com/images/OEHSkgxt15JxW9Fo1LJUrTP9X1I.png",
                                srcSet:
                                  "/framerusercontent.com/images/OEHSkgxt15JxW9Fo1LJUrTP9X1I.png?scale-down-to=1024 543w,/framerusercontent.com/images/OEHSkgxt15JxW9Fo1LJUrTP9X1I.png?scale-down-to=2048 1086w,/framerusercontent.com/images/OEHSkgxt15JxW9Fo1LJUrTP9X1I.png 1990w",
                              },
                            },
                          },
                          children: e(R, {
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 20,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: -300,
                                  y: 0,
                                },
                              },
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 20,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: -200,
                                  y: 150,
                                },
                              },
                            ],
                            __framer__transformTrigger: "onInView",
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: "",
                              fit: "stretch",
                              loading: i(14185),
                              positionX: "center",
                              positionY: "center",
                              sizes: "995px",
                              src: "/framerusercontent.com/images/OEHSkgxt15JxW9Fo1LJUrTP9X1I.png",
                              srcSet:
                                "/framerusercontent.com/images/OEHSkgxt15JxW9Fo1LJUrTP9X1I.png?scale-down-to=1024 543w,/framerusercontent.com/images/OEHSkgxt15JxW9Fo1LJUrTP9X1I.png?scale-down-to=2048 1086w,/framerusercontent.com/images/OEHSkgxt15JxW9Fo1LJUrTP9X1I.png 1990w",
                            },
                            className: "framer-z7hmhb",
                            "data-framer-name": "12-main-droite",
                            style: { rotate: 50 },
                          }),
                        }),
                        _("div", {
                          className: "framer-clh1r5",
                          "data-framer-name": "ruler-list",
                          children: [
                            e("div", {
                              className: "framer-cv85ui",
                              "data-framer-name": "1",
                              id: J,
                              ref: ie,
                            }),
                            e("div", {
                              className: "framer-tpe2u1",
                              "data-framer-name": "2",
                              id: Fe,
                              ref: Ce,
                            }),
                            e("div", {
                              className: "framer-ipmt4a",
                              "data-framer-name": "3",
                              id: Ze,
                              ref: Le,
                            }),
                            e("div", {
                              className: "framer-16gz2ir",
                              "data-framer-name": "4",
                              id: Ae,
                              ref: ut,
                            }),
                            e("div", {
                              className: "framer-xmlgnn",
                              "data-framer-name": "5",
                              id: nr,
                              ref: Ma,
                            }),
                            e("div", {
                              className: "framer-1257s3u",
                              "data-framer-name": "6",
                              id: Wa,
                              ref: Ja,
                            }),
                            e("div", {
                              className: "framer-1k5cb74",
                              "data-framer-name": "7",
                              id: Pa,
                              ref: Qa,
                            }),
                          ],
                        }),
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(12995),
                                sizes: "100vw",
                                src: "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png",
                                srcSet:
                                  "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=512 512w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=1024 1024w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png 1920w",
                              },
                            },
                            KffKQZNjt: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(16074),
                                sizes: "100vw",
                                src: "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png",
                                srcSet:
                                  "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=512 512w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=1024 1024w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png 1920w",
                              },
                            },
                          },
                          children: e(B, {
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: i(14811),
                              sizes: "100vw",
                              src: "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png",
                              srcSet:
                                "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=512 512w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=1024 1024w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png 1920w",
                            },
                            className: "framer-14sh7hd",
                            "data-framer-name": "splitter-zig-zag 3",
                          }),
                        }),
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(12323),
                                sizes: "calc(100vw - 1px)",
                                src: "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png",
                                srcSet:
                                  "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=512 512w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=1024 1024w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png 1920w",
                              },
                            },
                            KffKQZNjt: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(14951),
                                sizes: "calc(100vw - 1px)",
                                src: "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png",
                                srcSet:
                                  "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=512 512w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=1024 1024w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png 1920w",
                              },
                            },
                          },
                          children: e(B, {
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: i(13688),
                              sizes: "calc(100vw - 1px)",
                              src: "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png",
                              srcSet:
                                "/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=512 512w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png?scale-down-to=1024 1024w,/framerusercontent.com/images/ZensKpVA3FKyJYA3qYIuOKG6t1U.png 1920w",
                            },
                            className: "framer-7ps9cg",
                            "data-framer-name": "splitter-zig-zag 2",
                            style: { rotate: 180 },
                          }),
                        }),
                      ],
                    }),
                    _("div", {
                      className: "framer-kcykm",
                      "data-framer-name": "Frame 32",
                      id: $a,
                      ref: en,
                      children: [
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(14192),
                                pixelHeight: 1734,
                                pixelWidth: 1066,
                                sizes: "448px",
                                src: "/framerusercontent.com/images/CUVppHYVkiRalfyIYDrc6tL2xUY.png",
                                srcSet:
                                  "/framerusercontent.com/images/CUVppHYVkiRalfyIYDrc6tL2xUY.png?scale-down-to=1024 629w,/framerusercontent.com/images/CUVppHYVkiRalfyIYDrc6tL2xUY.png 1066w",
                              },
                            },
                            KffKQZNjt: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(17751),
                                pixelHeight: 1734,
                                pixelWidth: 1066,
                                sizes: "845px",
                                src: "/framerusercontent.com/images/CUVppHYVkiRalfyIYDrc6tL2xUY.png",
                                srcSet:
                                  "/framerusercontent.com/images/CUVppHYVkiRalfyIYDrc6tL2xUY.png?scale-down-to=1024 629w,/framerusercontent.com/images/CUVppHYVkiRalfyIYDrc6tL2xUY.png 1066w",
                              },
                            },
                          },
                          children: e(R, {
                            __framer__spring: {
                              damping: 60,
                              delay: 0,
                              duration: 0.3,
                              ease: [0.44, 0, 0.56, 1],
                              mass: 1,
                              stiffness: 500,
                              type: "spring",
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1.1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                            ],
                            __framer__transformTrigger: "onInView",
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: i(16158),
                              pixelHeight: 1734,
                              pixelWidth: 1066,
                              sizes: "845px",
                              src: "/framerusercontent.com/images/CUVppHYVkiRalfyIYDrc6tL2xUY.png",
                              srcSet:
                                "/framerusercontent.com/images/CUVppHYVkiRalfyIYDrc6tL2xUY.png?scale-down-to=1024 629w,/framerusercontent.com/images/CUVppHYVkiRalfyIYDrc6tL2xUY.png 1066w",
                            },
                            className: "framer-1fr9lww",
                            "data-framer-name": "thinking-3 1",
                          }),
                        }),
                        e(l, {
                          breakpoint: a,
                          overrides: {
                            Byvh2ikpS: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(13210.000151441263),
                                pixelHeight: 1461,
                                pixelWidth: 1030,
                                sizes: "calc(100vw + 410px)",
                                src: "/framerusercontent.com/images/sATGJ6n8yZOTgmSMGkqmKfy9pE.png",
                                srcSet:
                                  "/framerusercontent.com/images/sATGJ6n8yZOTgmSMGkqmKfy9pE.png?scale-down-to=1024 721w,/framerusercontent.com/images/sATGJ6n8yZOTgmSMGkqmKfy9pE.png 1030w",
                              },
                            },
                            KffKQZNjt: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: i(16191),
                                pixelHeight: 1461,
                                pixelWidth: 1030,
                                sizes: "1099px",
                                src: "/framerusercontent.com/images/sATGJ6n8yZOTgmSMGkqmKfy9pE.png",
                                srcSet:
                                  "/framerusercontent.com/images/sATGJ6n8yZOTgmSMGkqmKfy9pE.png?scale-down-to=1024 721w,/framerusercontent.com/images/sATGJ6n8yZOTgmSMGkqmKfy9pE.png 1030w",
                              },
                            },
                          },
                          children: e(R, {
                            __framer__spring: {
                              damping: 60,
                              delay: 0,
                              duration: 0.3,
                              ease: [0.44, 0, 0.56, 1],
                              mass: 1,
                              stiffness: 500,
                              type: "spring",
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 0.8,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1.1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                            ],
                            __framer__transformTrigger: "onScroll",
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: i(14928),
                              pixelHeight: 1461,
                              pixelWidth: 1030,
                              sizes: "1099px",
                              src: "/framerusercontent.com/images/sATGJ6n8yZOTgmSMGkqmKfy9pE.png",
                              srcSet:
                                "/framerusercontent.com/images/sATGJ6n8yZOTgmSMGkqmKfy9pE.png?scale-down-to=1024 721w,/framerusercontent.com/images/sATGJ6n8yZOTgmSMGkqmKfy9pE.png 1030w",
                            },
                            className: "framer-19oqsw2",
                            "data-framer-name": "thinking 2",
                            style: { rotate: 1 },
                          }),
                        }),
                        e(Y, {
                          children: e(l, {
                            breakpoint: a,
                            overrides: {
                              Byvh2ikpS: {
                                style: { scale: 0.7 },
                                transformTemplate: void 0,
                              },
                            },
                            children: e(S, {
                              className: "framer-307cnd-container",
                              transformTemplate: re,
                              children: e(qe, {
                                customColor:
                                  "var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151))",
                                customPadding: 0,
                                customStrokeWidth: 2,
                                customSvgCode:
                                  '<svg width="600" height="929" viewBox="0 0 600 929" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.834514 441V0.949056H87.7801C111.439 0.949056 126.225 13.3698 126.225 43.5346V168.334C126.225 190.218 112.622 200.865 103.75 203.231C113.805 206.188 130.366 216.834 130.366 243.45V390.134C130.366 423.847 116.17 441 87.1886 441H0.834514ZM62.9385 45.309H58.7982V187.261H62.9385C67.6702 187.261 70.0361 184.304 70.0361 178.98V53.5895C70.0361 47.0834 69.4446 45.309 62.9385 45.309ZM64.1214 230.438H58.7982V395.457H64.1214C70.6275 395.457 70.6275 393.091 70.6275 386.585V239.901C70.6275 233.395 68.2617 230.438 64.1214 230.438ZM196.846 45.309V189.035H200.986C205.126 189.035 207.492 186.669 207.492 181.346V52.9981C207.492 47.6749 206.9 45.309 201.577 45.309H196.846ZM196.846 238.719V441H138.882V0.949056H228.785C249.486 0.949056 264.273 13.9613 264.273 41.7602V168.925C264.273 191.993 253.035 201.456 244.163 205.596C253.626 209.737 265.456 219.2 265.456 237.536V425.03C265.456 431.537 266.047 435.677 267.821 439.817V441H211.632C208.675 438.043 207.492 433.311 207.492 426.805V246.408C207.492 242.267 207.492 238.719 200.986 238.719H196.846ZM339.666 301.414L332.569 115.694L325.471 301.414H339.666ZM344.989 441L341.441 351.689H323.105L319.556 441H269.873L297.672 0.949056H371.014L400.587 441H344.989ZM462.543 0.949056V441H404.58V0.949056H462.543ZM472.751 0.949056H531.306L553.782 254.688L552.599 0.949056H599.916V441H546.093L518.885 158.279L519.477 441H472.751V0.949056ZM81.7799 928.957H66.4018C29.1394 928.957 16.1272 906.482 16.1272 878.683V740.28H68.1762V873.359C68.1762 877.5 69.9506 879.274 73.4994 879.274C76.4567 879.274 78.2311 877.5 78.2311 873.359V485.949H136.786V877.5C136.786 906.482 120.225 928.957 81.7799 928.957ZM215.303 928.957H206.431C162.071 928.957 146.102 903.524 146.102 873.359V485.949H204.657V866.853C204.657 872.768 206.431 875.725 210.572 875.725C214.712 875.725 217.078 872.768 217.078 866.853V485.949H275.633V873.359C275.633 903.524 257.298 928.957 215.303 928.957ZM343.268 485.949V926H285.304V485.949H343.268ZM417.354 878.683C421.494 878.683 423.269 875.725 423.269 869.219V720.761H479.458V870.402C479.458 902.933 462.897 928.957 422.677 928.957H413.214C370.037 928.957 352.884 905.89 352.884 865.67V544.504C352.884 508.425 368.854 482.992 413.214 482.992H422.677C462.897 482.992 479.458 505.467 479.458 539.181V674.627H423.269V540.955C423.269 535.041 421.494 532.083 417.354 532.083C413.214 532.083 411.439 535.041 411.439 540.955V869.219C411.439 875.725 413.214 878.683 417.354 878.683ZM488.043 485.949H584.452V538.59H544.824V666.938H579.129V721.353H544.824V872.768H585.635V926H488.043V485.949Z" fill="#54FD87"/> </svg>',
                                description: "",
                                height: "100%",
                                id: "gDFtj74OE",
                                layoutId: "gDFtj74OE",
                                lineCap: "butt",
                                lineJoin: "miter",
                                style: { height: "100%", width: "100%" },
                                title: "",
                                width: "100%",
                              }),
                            }),
                          }),
                        }),
                        e(Y, {
                          children: e(l, {
                            breakpoint: a,
                            overrides: {
                              Byvh2ikpS: {
                                style: { scale: 0.7 },
                                transformTemplate: void 0,
                              },
                            },
                            children: e(S, {
                              className: "framer-1hk9via-container",
                              transformTemplate: re,
                              children: e(qe, {
                                customColor:
                                  "var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151))",
                                customPadding: 0,
                                customStrokeWidth: 2,
                                customSvgCode:
                                  '<svg width="880" height="915" viewBox="0 0 880 915" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M104.178 434V0.586159H197.968V52.4327H159.52V179.428H192.143L192.725 232.439H159.52V434H104.178ZM274.168 436.913H265.43C221.739 436.913 206.01 411.863 206.01 382.153V0.586159H263.682V375.745C263.682 381.571 265.43 384.484 269.508 384.484C273.585 384.484 275.916 381.571 275.916 375.745V0.586159H333.588V382.153C333.588 411.863 315.529 436.913 274.168 436.913ZM343.113 0.586159H438.068V52.4327H399.037V178.845H432.825V232.439H399.037V381.571H439.233V434H343.113V0.586159ZM447.22 0.586159H503.145L503.727 380.988H538.68V434H447.22V0.586159ZM546.776 0.586159H641.731V52.4327H602.701V178.845H636.488V232.439H602.701V381.571H642.896V434H546.776V0.586159ZM650.884 434V0.586159H731.858C756.907 0.586159 775.548 13.9847 775.548 48.9374V383.319C775.548 417.689 758.072 434 733.023 434H650.884ZM706.808 47.1898V386.231H712.051C716.711 386.231 719.042 382.736 719.042 375.163V57.6756C719.042 50.685 716.711 47.1898 712.051 47.1898H706.808ZM0.924555 912V478.586H86.5587C109.861 478.586 124.424 490.82 124.424 520.529V643.447C124.424 665.001 111.026 675.487 102.287 677.817C112.191 680.729 128.502 691.215 128.502 717.43V861.901C128.502 895.106 114.521 912 85.9762 912H0.924555ZM62.0918 522.277H58.014V662.088H62.0918C66.7522 662.088 69.0824 659.175 69.0824 653.932V530.433C69.0824 524.025 68.4998 522.277 62.0918 522.277ZM63.2569 704.614H58.014V867.144H63.2569C69.6649 867.144 69.6649 864.814 69.6649 858.406V713.935C69.6649 707.527 67.3347 704.614 63.2569 704.614ZM162.076 912V736.071L125.958 478.586H181.882L191.786 641.116L201.689 478.586H252.37L218.583 736.071V912H162.076ZM293.335 912V478.586H387.125V530.433H348.677V657.428H381.299L381.882 710.439H348.677V912H293.335ZM447.286 774.519L440.296 591.6L433.305 774.519H447.286ZM452.529 912L449.034 824.036H430.975L427.48 912H378.546L405.926 478.586H478.161L507.289 912H452.529ZM568.31 522.277V663.836H572.388C576.466 663.836 578.796 661.505 578.796 656.263V529.85C578.796 524.607 578.213 522.277 572.971 522.277H568.31ZM568.31 712.769V912H511.221V478.586H599.768C620.157 478.586 634.72 491.402 634.72 518.782V644.029C634.72 666.748 623.652 676.069 614.914 680.147C624.235 684.225 635.885 693.545 635.885 711.604V896.271C635.885 902.679 636.468 906.757 638.216 910.835V912H582.874C579.961 909.087 578.796 904.427 578.796 898.019V720.343C578.796 716.265 578.796 712.769 572.388 712.769H568.31ZM666.519 912V530.433H641.47V478.586H748.075V530.433H722.443V912H666.519ZM821.713 914.913H808.897C771.614 914.913 752.973 897.436 752.973 862.484V727.333H808.897V858.406C808.897 864.814 810.645 867.727 814.722 867.727C818.8 867.727 821.13 864.814 821.13 858.406V745.975C821.13 734.324 819.965 730.246 811.227 721.508L780.352 691.215C761.711 673.156 754.72 655.097 754.72 627.718V529.268C754.72 496.645 769.866 475.673 811.227 475.673H824.043C865.404 475.673 877.637 496.645 877.637 524.607V641.116H823.461V526.937C823.461 522.277 821.713 519.947 817.635 519.947C813.557 519.947 811.81 522.277 811.81 526.937V625.388C811.81 636.456 813.557 639.951 820.548 647.524L850.84 677.817C872.394 698.206 879.967 713.352 879.967 743.644V855.493C879.967 892.776 861.326 914.913 821.713 914.913Z" fill="#54FD87"/> </svg>',
                                description: "",
                                height: "100%",
                                id: "HzWVO20Ll",
                                layoutId: "HzWVO20Ll",
                                lineCap: "butt",
                                lineJoin: "miter",
                                style: { height: "100%", width: "100%" },
                                title: "",
                                width: "100%",
                              }),
                            }),
                          }),
                        }),
                        e(l, {
                          breakpoint: a,
                          overrides: { Byvh2ikpS: { style: { scale: 0.3 } } },
                          children: e(f.div, {
                            className: "framer-e34nco",
                            id: tn,
                            ref: Ie,
                          }),
                        }),
                      ],
                    }),
                    e("div", { className: "framer-pf7mlq", id: rn, ref: an }),
                    De() &&
                      e("div", {
                        className:
                          "framer-1oryf6n hidden-1rml4m2 hidden-174vl6w",
                        id: nn,
                        ref: on,
                      }),
                    De() &&
                      e("div", {
                        className:
                          "framer-1h5f3tx hidden-1rml4m2 hidden-174vl6w",
                        id: sn,
                        ref: fn,
                      }),
                    e("div", {
                      className: "framer-1pk46w7",
                      id: mn,
                      ref: G,
                      children: e(l, {
                        breakpoint: a,
                        overrides: {
                          Byvh2ikpS: { height: 459, width: "390px", y: 15581 },
                          KffKQZNjt: { y: 19627 },
                        },
                        children: e(Y, {
                          height: 953,
                          width: "100vw",
                          y: 17790,
                          children: e(l, {
                            breakpoint: a,
                            overrides: { KffKQZNjt: { style: { scale: 0.5 } } },
                            children: e(S, {
                              className: "framer-1ly14f4-container",
                              children: e(l, {
                                breakpoint: a,
                                overrides: {
                                  Byvh2ikpS: { variant: "uZWl4ujGH" },
                                },
                                children: e(Ir, {
                                  height: "100%",
                                  id: "Y0sZoHvhs",
                                  layoutId: "Y0sZoHvhs",
                                  style: { height: "100%", width: "100%" },
                                  variant: "OpJHNzVxb",
                                  width: "100%",
                                }),
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                    e("div", {
                      className: "framer-fhalzc",
                      id: cn,
                      ref: ln,
                      children: e(A, {
                        __fromCanvasComponent: !0,
                        children: e(k, {
                          children: e("p", {
                            style: {
                              "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                              "--framer-font-family":
                                '"Inter", "Inter Placeholder", sans-serif',
                              "--framer-font-size": "12px",
                              "--framer-font-weight": "600",
                              "--framer-letter-spacing": "-0.02em",
                              "--framer-line-height": "100%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "rgb(255, 255, 255)",
                              "--framer-text-transform": "uppercase",
                            },
                            children: "Credits",
                          }),
                        }),
                        className: "framer-1xes1st",
                        "data-framer-name": "Design and website",
                        fonts: ["Inter-SemiBold"],
                        transformTemplate: re,
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            e(Xs, { value: "html body { background: rgb(0, 0, 0); }" }),
            e("div", { id: "overlay" }),
          ],
        }),
      })
    );
  }),
  Hs = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-GFhZ0.framer-1qbco65, .framer-GFhZ0 .framer-1qbco65 { display: block; }",
    ".framer-GFhZ0.framer-1rml4m2 { align-content: center; align-items: center; background-color: #000000; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1600px; }",
    ".framer-GFhZ0 .framer-zb7r0a-container, .framer-GFhZ0 .framer-oow3au-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-GFhZ0 .framer-1i93ave-container { flex: none; height: 100vh; left: 0px; mix-blend-mode: overlay; pointer-events: none; position: fixed; right: -1px; top: calc(50.00000000000002% - 100vh / 2); z-index: 10; }",
    ".framer-GFhZ0 .framer-jaq4ea-container { flex: none; height: 51px; left: calc(47.93750000000002% - 717px / 2); position: fixed; top: 10px; width: 717px; z-index: 10; }",
    ".framer-GFhZ0.framer-mkp6ak, .framer-GFhZ0.framer-1x8oijt, .framer-GFhZ0.framer-1kh5282 { inset: 0px; position: fixed; user-select: none; z-index: 10; }",
    ".framer-GFhZ0.framer-1jds1be, .framer-GFhZ0.framer-15yzi2v { -webkit-backdrop-filter: blur(20px); backdrop-filter: blur(20px); background-color: rgba(0, 0, 0, 0.47); bottom: 0px; cursor: pointer; flex: none; left: 0px; overflow: hidden; position: fixed; right: 0px; top: 0px; z-index: 10; }",
    ".framer-GFhZ0.framer-6ntgbr, .framer-GFhZ0.framer-1o9g9px { aspect-ratio: 1 / 1; background-color: rgba(0, 0, 0, 0.5); border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; cursor: pointer; flex: none; height: var(--framer-aspect-ratio-supported, 60px); left: 50%; overflow: hidden; position: fixed; top: 15px; transform: translateX(-50%); width: 60px; will-change: var(--framer-will-change-override, transform); z-index: 10; }",
    ".framer-GFhZ0 .framer-1ck887x-container, .framer-GFhZ0 .framer-506dj8-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 24px; }",
    ".framer-GFhZ0.framer-1wzf9th-container { flex: none; height: auto; left: 50%; position: fixed; top: 50%; transform: translate(-50%, -50%); width: 1041px; z-index: 10; }",
    ".framer-GFhZ0.framer-5zq7xz { align-content: center; align-items: center; background-color: #1c1c1c; border-bottom-left-radius: 60px; border-bottom-right-radius: 60px; border-top-left-radius: 60px; border-top-right-radius: 60px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; left: 51%; overflow: hidden; padding: 16px; position: fixed; top: 48%; transform: translate(-50%, -50%); width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 10; }",
    ".framer-GFhZ0 .framer-30q2w5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-GFhZ0 .framer-eh7kug-container { flex: none; height: 48px; position: relative; width: 48px; }",
    ".framer-GFhZ0 .framer-1squ8vd { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-GFhZ0 .framer-1dulfq5, .framer-GFhZ0 .framer-clpifi, .framer-GFhZ0 .framer-1vgbf6v { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-GFhZ0 .framer-19u50ix-container { flex: none; height: 44px; position: relative; width: auto; }",
    ".framer-GFhZ0.framer-gqei6h { -webkit-backdrop-filter: blur(20px); backdrop-filter: blur(20px); background-color: rgba(0, 0, 0, 0.5); bottom: 0px; flex: none; left: 0px; overflow: hidden; position: fixed; right: 0px; top: 0px; z-index: 10; }",
    ".framer-GFhZ0.framer-1ykwaw { flex: none; height: 100vh; left: 0px; overflow: auto; position: fixed; right: 0px; top: 0px; z-index: 10; }",
    ".framer-GFhZ0 .framer-8i4412 { bottom: 0px; cursor: pointer; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; }",
    ".framer-GFhZ0 .framer-hxony5 { display: grid; flex: none; gap: 8px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(6, minmax(50px, 1fr)); grid-template-rows: repeat(3, minmax(0, 1fr)); height: 1000px; justify-content: center; left: calc(50.00000000000002% - 1037px / 2); overflow: visible; padding: 16px 0px 20px 0px; position: absolute; top: 100px; width: 1037px; z-index: 10; }",
    ".framer-GFhZ0 .framer-zt279u-container, .framer-GFhZ0 .framer-1l1jr0z-container { align-self: start; flex: none; grid-column: auto / span 3; height: 100%; justify-self: start; position: relative; width: 100%; }",
    ".framer-GFhZ0 .framer-1xbdxwj-container, .framer-GFhZ0 .framer-ajpwf4-container { align-self: start; flex: none; grid-column: auto / span 2; height: 100%; justify-self: start; position: relative; width: 100%; }",
    ".framer-GFhZ0 .framer-w4stqj-container { align-self: start; flex: none; grid-column: auto / span 2; grid-row: auto / span 2; height: 100%; justify-self: start; position: relative; width: 100%; }",
    ".framer-GFhZ0 .framer-cf92tp-container { align-self: start; flex: none; grid-column: auto / span 4; height: 100%; justify-self: start; position: relative; width: 100%; }",
    ".framer-GFhZ0 .framer-9zpetz { --border-bottom-width: 1px; --border-color: rgba(255, 255, 255, 0.05); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; -webkit-backdrop-filter: blur(5px); align-content: center; align-items: center; backdrop-filter: blur(5px); background-color: rgba(15, 15, 15, 0.8); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; bottom: 46px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 1px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 0px; position: absolute; transform: translateX(-50%); width: 494px; will-change: var(--framer-will-change-override, transform); z-index: 10; }",
    ".framer-GFhZ0 .framer-1n8u20w-container, .framer-GFhZ0 .framer-dr4mn6-container, .framer-GFhZ0 .framer-1gphmwg-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-GFhZ0 .framer-ltuffh, .framer-GFhZ0 .framer-1lb091d { --border-bottom-width: 1px; --border-color: rgba(255, 255, 255, 0.05); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; background-color: rgba(0, 0, 0, 0.09); flex: none; height: 1px; overflow: hidden; position: relative; width: 100%; }",
    ".framer-GFhZ0 .framer-1t24yw8 { align-content: flex-end; align-items: flex-end; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 8px; position: fixed; right: -1px; z-index: 9; }",
    ".framer-GFhZ0 .framer-1yrjsz2-container { flex: none; height: auto; position: relative; width: 639px; z-index: 10; }",
    ".framer-GFhZ0 .framer-o0mzm0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-GFhZ0 .framer-ab08lb { flex: none; height: 100vh; overflow: hidden; position: relative; width: 100%; z-index: 1; }",
    ".framer-GFhZ0 .framer-wzyyrq { bottom: -530px; flex: none; height: 207.375vh; left: -615px; overflow: hidden; position: absolute; right: -615px; z-index: 1; }",
    ".framer-GFhZ0 .framer-gw8nh1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100vh; justify-content: flex-start; left: 0px; overflow: hidden; padding: 0px; position: absolute; right: 0px; top: 60px; }",
    ".framer-GFhZ0 .framer-1vv9068-container, .framer-GFhZ0 .framer-11960q8-container, .framer-GFhZ0 .framer-1fh6v44-container { flex: none; height: 190px; position: relative; width: 100%; z-index: 1; }",
    ".framer-GFhZ0 .framer-1vnk48o-container { aspect-ratio: 8.5 / 1; height: var(--framer-aspect-ratio-supported, 182px); position: relative; width: 1547px; }",
    ".framer-GFhZ0 .framer-prwvm9-container, .framer-GFhZ0 .framer-kmtkng-container, .framer-GFhZ0 .framer-ps30qn-container { flex: none; height: 186px; position: relative; width: 100%; z-index: 1; }",
    ".framer-GFhZ0 .framer-mwns4z { aspect-ratio: 7.4766355140186915 / 1; bottom: -7px; flex: none; height: var(--framer-aspect-ratio-supported, 214px); left: 0px; pointer-events: none; position: absolute; right: 0px; z-index: 7; }",
    ".framer-GFhZ0 .framer-8kho14 { bottom: -10px; flex: none; height: 88.75vh; left: calc(46.25000000000002% - 674px / 2); overflow: hidden; pointer-events: none; position: absolute; width: 674px; z-index: 1; }",
    ".framer-GFhZ0 .framer-arg8mv { bottom: 265px; cursor: grab; flex: none; height: 269px; left: calc(88.62500000000001% - 325px / 2); overflow: visible; position: absolute; width: 325px; z-index: 6; }",
    ".framer-GFhZ0 .framer-2hsnyy { -webkit-backdrop-filter: blur(0px); backdrop-filter: blur(0px); background-color: rgba(0, 0, 0, 0.2); border-bottom-left-radius: 28px; border-bottom-right-radius: 28px; border-top-left-radius: 28px; border-top-right-radius: 28px; bottom: 0px; flex: none; height: 158px; left: calc(50.153846153846175% - 276px / 2); position: absolute; width: 276px; }",
    ".framer-GFhZ0 .framer-ad7swl { -webkit-backdrop-filter: blur(27.5px); backdrop-filter: blur(27.5px); background-color: rgba(0, 0, 0, 0.1); border-bottom-left-radius: 28px; border-bottom-right-radius: 28px; border-top-left-radius: 28px; border-top-right-radius: 28px; bottom: 0px; flex: none; height: 158px; left: calc(50.153846153846175% - 276px / 2); position: absolute; width: 276px; }",
    ".framer-GFhZ0 .framer-x0dk9s-container { flex: none; height: 164px; left: calc(51.076923076923094% - 236px / 2); position: absolute; top: calc(52.78810408921936% - 164px / 2); width: 236px; }",
    ".framer-GFhZ0 .framer-chujfk { align-content: center; align-items: center; bottom: 8px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; left: 50%; overflow: visible; padding: 0px; position: absolute; transform: translateX(-50%); width: min-content; }",
    ".framer-GFhZ0 .framer-1nctxk2 { aspect-ratio: 1 / 1; border-bottom-left-radius: 234px; border-bottom-right-radius: 234px; border-top-left-radius: 234px; border-top-right-radius: 234px; flex: none; height: var(--framer-aspect-ratio-supported, 39px); position: relative; width: 39px; }",
    ".framer-GFhZ0 .framer-pk6iq1 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 190px; word-break: break-word; word-wrap: break-word; }",
    ".framer-GFhZ0 .framer-1gq29qj { flex: none; height: 20px; overflow: hidden; position: relative; width: 20px; }",
    ".framer-GFhZ0 .framer-29vh6f { flex: none; height: 20px; left: calc(50.00000000000002% - 20px / 2); overflow: hidden; position: absolute; top: calc(50.00000000000002% - 20px / 2); width: 20px; }",
    ".framer-GFhZ0 .framer-11w7oi1 { flex: none; height: 20px; left: calc(50.00000000000002% - 20px / 2); position: absolute; top: calc(50.00000000000002% - 20px / 2); width: 20px; }",
    ".framer-GFhZ0 .framer-bv7uhv { flex: none; height: 8px; left: calc(45.00000000000002% - 11px / 2); position: absolute; top: calc(50.00000000000002% - 8px / 2); width: 11px; }",
    ".framer-GFhZ0 .framer-18hopws { flex: none; height: 1200px; overflow: hidden; position: relative; width: 100%; }",
    ".framer-GFhZ0 .framer-esbw9t { flex: none; height: 1665px; left: -307px; position: absolute; right: -416px; top: -225px; z-index: 1; }",
    ".framer-GFhZ0 .framer-6yl0fr { flex: none; height: 710px; left: calc(39.93750000000002% - 570px / 2); position: absolute; top: calc(60.333333333333364% - 710px / 2); width: 570px; z-index: 2; }",
    ".framer-GFhZ0 .framer-1ijcf09 { -webkit-filter: blur(6px); filter: blur(6px); flex: none; height: 984px; left: calc(7.687500000000022% - 790px / 2); position: absolute; top: calc(74.16666666666669% - 984px / 2); width: 790px; z-index: 2; }",
    ".framer-GFhZ0 .framer-1l5567a { -webkit-filter: blur(13px); filter: blur(13px); flex: none; height: 1075px; left: 1068px; position: absolute; top: 167px; width: 863px; z-index: 2; }",
    ".framer-GFhZ0 .framer-1p3jjql { -webkit-filter: blur(4px); bottom: -143px; filter: blur(4px); flex: none; height: 729px; position: absolute; right: 258px; width: 585px; z-index: 1; }",
    ".framer-GFhZ0 .framer-1hhfz7f { bottom: -639px; flex: none; height: 1512px; left: calc(19.93750000000002% - 816px / 2); overflow: visible; position: absolute; width: 816px; z-index: 1; }",
    ".framer-GFhZ0 .framer-txkbu2 { bottom: 553px; flex: none; height: 959px; left: calc(50.00000000000002% - 816px / 2); overflow: visible; position: absolute; width: 816px; z-index: 2; }",
    ".framer-GFhZ0 .framer-1xyr7df { bottom: -617px; flex: none; height: 1281px; left: calc(73.87500000000003% - 565px / 2); overflow: visible; position: absolute; width: 565px; z-index: 1; }",
    ".framer-GFhZ0 .framer-wi83ky { bottom: 534px; flex: none; height: 743px; left: calc(49.911504424778784% - 565px / 2); overflow: visible; position: absolute; width: 565px; z-index: 2; }",
    ".framer-GFhZ0 .framer-1pdbebv { -webkit-filter: blur(100px); background-color: #000000; filter: blur(100px); flex: none; height: 127px; left: 129px; overflow: hidden; position: absolute; top: 0px; width: 138px; }",
    ".framer-GFhZ0 .framer-1d7qwd5 { flex: none; height: 102px; left: 0px; position: absolute; right: 0px; top: -1px; z-index: 3; }",
    ".framer-GFhZ0 .framer-wup9le { bottom: -8px; flex: none; height: 68px; left: 0px; position: absolute; right: 0px; z-index: 3; }",
    ".framer-GFhZ0 .framer-tgbvc8, .framer-GFhZ0 .framer-1v0dz1s, .framer-GFhZ0 .framer-1o4vwli, .framer-GFhZ0 .framer-1bwkuqx { flex: none; height: 100vh; overflow: hidden; position: relative; width: 100%; }",
    ".framer-GFhZ0 .framer-11fbw9v { bottom: -122px; flex: none; height: 837px; left: 335px; position: absolute; width: 672px; z-index: 0; }",
    ".framer-GFhZ0 .framer-m3dk5p { flex: none; height: 837px; left: calc(66.18750000000003% - 672px / 2); position: absolute; top: calc(83.98914518317505% - 837px / 2); width: 672px; z-index: 1; }",
    ".framer-GFhZ0 .framer-dg0n98 { aspect-ratio: 3.944636678200692 / 1; bottom: -205px; flex: none; height: var(--framer-aspect-ratio-supported, 406px); left: 0px; overflow: visible; position: absolute; right: 0px; z-index: 0; }",
    ".framer-GFhZ0 .framer-18cmtif { aspect-ratio: 2.37006237006237 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 675px); left: 0px; overflow: visible; position: absolute; right: 0px; top: -103px; z-index: 0; }",
    ".framer-GFhZ0 .framer-btcs1u { bottom: -50px; flex: none; height: 80px; left: 0px; position: absolute; right: 0px; z-index: 1; }",
    ".framer-GFhZ0 .framer-m3pkyo { flex: none; height: 50px; left: 0px; position: absolute; right: 0px; top: -11px; z-index: 1; }",
    ".framer-GFhZ0 .framer-k5szjo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 10px; position: relative; width: 100%; }",
    ".framer-GFhZ0 .framer-qspn6w { background-color: #000000; bottom: -675px; flex: none; height: 139.92890995260663vh; left: 0px; overflow: hidden; position: absolute; right: 0px; }",
    ".framer-GFhZ0 .framer-1sy3ddd { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: -100px; }",
    ".framer-GFhZ0 .framer-3u5bhs { background-color: #000000; bottom: -639px; flex: none; height: 139.875vh; left: 0px; overflow: hidden; position: absolute; right: 0px; }",
    ".framer-GFhZ0 .framer-1ckhe4a { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: -120px; }",
    ".framer-GFhZ0 .framer-g69587 { background-color: #000000; bottom: -599px; flex: none; height: 139.875vh; left: 0px; overflow: hidden; position: absolute; right: 0px; }",
    ".framer-GFhZ0 .framer-18fkbk5 { bottom: 0px; flex: none; left: -58px; overflow: visible; position: absolute; right: 0px; top: 3px; }",
    ".framer-GFhZ0 .framer-1rvi7xe { flex: none; height: 355px; overflow: hidden; position: relative; width: 100%; }",
    ".framer-GFhZ0 .framer-1htt17w { flex: none; height: 796px; overflow: visible; position: relative; width: 1600px; }",
    ".framer-GFhZ0 .framer-1l1mgaa { background: linear-gradient(90deg, #000000 -20%, rgba(0, 0, 0, 0) 55.00000000000001%); flex: none; height: 770px; left: 462px; position: absolute; top: calc(50.00000000000002% - 770px / 2); width: 467px; }",
    ".framer-GFhZ0 .framer-19wkpwm { background-color: rgba(0, 0, 0, 0); flex: none; height: 764px; left: calc(76.93750000000003% - 691px / 2); position: absolute; top: 21px; width: 691px; }",
    ".framer-GFhZ0 .framer-xkf30b { aspect-ratio: 0.4753246753246753 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 770px); left: 47%; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 366px; }",
    ".framer-GFhZ0 .framer-11q9h9p { flex: none; height: 770px; left: calc(21.659435272216797% - 635px / 2); position: absolute; top: 19px; width: 635px; }",
    ".framer-GFhZ0 .framer-aldw6y { -webkit-mask: linear-gradient(180deg, #000000 32%, rgba(0,0,0,0) 87%) add; aspect-ratio: 0.4753246753246753 / 1; bottom: 135px; flex: none; height: var(--framer-aspect-ratio-supported, 813px); left: 47%; mask: linear-gradient(180deg, #000000 32%, rgba(0,0,0,0) 87%) add; position: absolute; transform: translateX(-50%); width: 386px; }",
    ".framer-GFhZ0 .framer-19yhsda { background-color: rgba(0, 0, 0, 0); bottom: 132px; flex: none; height: 411px; left: calc(50.00000000000002% - 372px / 2); position: absolute; width: 372px; }",
    ".framer-GFhZ0 .framer-12iimvw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 1200px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-GFhZ0 .framer-1ad08q6 { bottom: 0px; flex: none; height: 68px; left: 0px; position: absolute; right: 0px; z-index: 3; }",
    ".framer-GFhZ0 .framer-mnfkb7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 2046px; justify-content: flex-start; overflow: visible; padding: 250px 0px 0px 0px; position: relative; width: 1600px; }",
    ".framer-GFhZ0 .framer-hwiom4 { flex: none; height: 1103px; overflow: visible; position: relative; width: 795px; }",
    ".framer-GFhZ0 .framer-j33wok { flex: none; height: 1100px; left: 0px; opacity: 0.5; overflow: visible; position: absolute; right: 0px; top: -39px; }",
    ".framer-GFhZ0 .framer-g6b5g8 { flex: none; height: 1099px; left: 0px; opacity: 0.5; overflow: visible; position: absolute; right: 0px; top: -88px; }",
    ".framer-GFhZ0 .framer-1np9laa { flex: none; height: 1100px; left: 0px; opacity: 0.5; overflow: visible; position: absolute; right: 0px; top: -119px; }",
    ".framer-GFhZ0 .framer-1g18u9g { flex: 1 0 0px; height: 1343px; overflow: hidden; position: relative; width: 1px; }",
    ".framer-GFhZ0 .framer-12uj858 { aspect-ratio: 0.6918829376035339 / 1; bottom: 52px; flex: none; height: var(--framer-aspect-ratio-supported, 1121px); left: 50%; opacity: 0.5; overflow: visible; position: absolute; transform: translateX(-50%); width: 775px; }",
    ".framer-GFhZ0 .framer-fzebqj { aspect-ratio: 0.6918829376035339 / 1; bottom: 122px; flex: none; height: var(--framer-aspect-ratio-supported, 1121px); left: 50%; opacity: 0.5; overflow: visible; position: absolute; transform: translateX(-50%); width: 775px; }",
    ".framer-GFhZ0 .framer-smbhsj { aspect-ratio: 0.6918829376035339 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 1120px); left: 50%; opacity: 0.5; overflow: visible; position: absolute; top: 55%; transform: translate(-50%, -50%); width: 775px; }",
    ".framer-GFhZ0 .framer-10ytyjo { flex: none; height: 2852px; overflow: hidden; position: relative; width: 100%; }",
    ".framer-GFhZ0 .framer-8ksuqa { aspect-ratio: 0.860730593607306 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 1752px); opacity: 0.5; position: absolute; right: -622px; top: 53%; transform: translateY(-50%); width: 1508px; }",
    ".framer-GFhZ0 .framer-1gtjk00 { flex: none; height: 808px; left: calc(50.00000000000002% - 376px / 2); overflow: hidden; position: absolute; top: 466px; width: 376px; }",
    ".framer-GFhZ0 .framer-ivcu9z { bottom: 0px; flex: none; left: calc(50.00000000000002% - 375px / 2); position: absolute; top: 0px; width: 375px; }",
    ".framer-GFhZ0 .framer-16d0owj { aspect-ratio: 0.860730593607306 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 1752px); opacity: 0.5; position: absolute; right: 758px; top: 1071px; width: 1508px; }",
    ".framer-GFhZ0 .framer-g3fm13 { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 50%; position: absolute; top: 754px; transform: translateX(-50%); white-space: pre-wrap; width: 1600px; word-break: break-word; word-wrap: break-word; }",
    ".framer-GFhZ0 .framer-1f4z2l6 { aspect-ratio: 0.8202020202020202 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 495px); left: 1184px; position: absolute; top: 1309px; width: 406px; }",
    ".framer-GFhZ0 .framer-1lvxr7n { aspect-ratio: 0.8202020202020202 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 495px); left: 1114px; position: absolute; top: 1809px; width: 406px; }",
    ".framer-GFhZ0 .framer-1ukf8md { flex: none; height: 467px; left: calc(86.87500000000003% - 668px / 2); position: absolute; top: calc(89.7615708274895% - 467px / 2); width: 668px; }",
    ".framer-GFhZ0 .framer-ozzd80 { flex: none; height: 1639px; left: calc(48.75000000000002% - 999px / 2); position: absolute; top: calc(63.56942496493691% - 1639px / 2); width: 999px; }",
    ".framer-GFhZ0 .framer-1qy10e { bottom: 609px; flex: none; height: 599px; left: -185px; position: absolute; width: 505px; }",
    ".framer-GFhZ0 .framer-ls3pqs { bottom: 109px; flex: none; height: 599px; left: -105px; position: absolute; width: 505px; }",
    ".framer-GFhZ0 .framer-pjn93a { flex: none; height: 429px; left: calc(57.31250000000002% - 354px / 2); position: absolute; top: calc(66.12903225806454% - 429px / 2); width: 354px; }",
    ".framer-GFhZ0 .framer-s356mu { bottom: 251px; flex: none; height: 429px; left: 820px; position: absolute; width: 354px; }",
    ".framer-GFhZ0 .framer-1b6rw4c { bottom: -117px; flex: none; height: 685px; position: absolute; right: 64px; width: 500px; z-index: 1; }",
    ".framer-GFhZ0 .framer-m18zv1 { aspect-ratio: 0.8839285714285714 / 1; bottom: -265px; flex: none; height: var(--framer-aspect-ratio-supported, 672px); left: -188px; position: absolute; width: 594px; z-index: 1; }",
    ".framer-GFhZ0 .framer-nyngik { bottom: 300px; flex: none; height: 491px; left: 252px; position: absolute; width: 337px; }",
    ".framer-GFhZ0 .framer-1kyeqy1 { bottom: -200px; flex: none; height: 491px; left: 1152px; position: absolute; width: 337px; }",
    ".framer-GFhZ0 .framer-1jlug1v { bottom: 1092px; flex: none; height: 599px; left: 152px; position: absolute; width: 488px; }",
    ".framer-GFhZ0 .framer-1gfg1m9 { aspect-ratio: 12.5 / 1; bottom: -1px; flex: none; height: var(--framer-aspect-ratio-supported, 128px); left: 0px; position: absolute; right: 0px; z-index: 2; }",
    ".framer-GFhZ0 .framer-1kogld { bottom: 40px; flex: none; height: 1140px; left: calc(49.75000000000002% - 1564px / 2); overflow: hidden; position: absolute; width: 1564px; }",
    ".framer-GFhZ0 .framer-1csghqk { background-color: #000000; flex: none; height: 1250px; overflow: hidden; position: relative; width: 100%; }",
    ".framer-GFhZ0 .framer-1pcnp6g { -webkit-filter: grayscale(0.2); aspect-ratio: 1.1405867970660146 / 1; bottom: -388px; filter: grayscale(0.2); flex: none; height: var(--framer-aspect-ratio-supported, 1636px); left: 54%; position: absolute; transform: translateX(-50%); width: 1866px; }",
    ".framer-GFhZ0 .framer-jejx8f { -webkit-filter: grayscale(0.19); aspect-ratio: 0.3723709369024857 / 1; bottom: -560px; filter: grayscale(0.19); flex: none; height: var(--framer-aspect-ratio-supported, 2092px); left: -179px; position: absolute; width: 779px; }",
    ".framer-GFhZ0 .framer-z7hmhb { -webkit-filter: grayscale(0.23); aspect-ratio: 0.5306666666666666 / 1; bottom: -1121px; filter: grayscale(0.23); flex: none; height: var(--framer-aspect-ratio-supported, 1875px); left: 176px; position: absolute; width: 995px; }",
    ".framer-GFhZ0 .framer-clh1r5 { align-content: center; align-items: center; bottom: -154px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 1px; height: 1336px; justify-content: flex-start; left: calc(49.31250000000002% - 1432px / 2); opacity: 0; overflow: hidden; padding: 0px; position: absolute; width: 1432px; }",
    ".framer-GFhZ0 .framer-cv85ui, .framer-GFhZ0 .framer-tpe2u1, .framer-GFhZ0 .framer-ipmt4a, .framer-GFhZ0 .framer-16gz2ir, .framer-GFhZ0 .framer-xmlgnn, .framer-GFhZ0 .framer-1257s3u, .framer-GFhZ0 .framer-1k5cb74 { background-color: #44ccff; flex: 1 0 0px; height: 1px; overflow: hidden; position: relative; width: 100%; }",
    ".framer-GFhZ0 .framer-14sh7hd { aspect-ratio: 12.5 / 1; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 128px); left: 0px; position: absolute; right: 0px; }",
    ".framer-GFhZ0 .framer-7ps9cg { flex: none; height: 66px; left: 1px; position: absolute; right: 0px; top: -1px; z-index: 1; }",
    ".framer-GFhZ0 .framer-kcykm { background-color: #000000; flex: none; height: 2590px; overflow: hidden; position: relative; width: 100%; }",
    ".framer-GFhZ0 .framer-1fr9lww { flex: none; height: 1336px; left: calc(25.06250000000002% - 845px / 2); position: absolute; top: 1219px; width: 845px; }",
    ".framer-GFhZ0 .framer-19oqsw2 { -webkit-filter: grayscale(0.13); filter: grayscale(0.13); flex: none; height: 1525px; left: calc(71.75000000000003% - 1099px / 2); position: absolute; top: -11px; width: 1099px; }",
    ".framer-GFhZ0 .framer-307cnd-container { aspect-ratio: 0.6312056737588653 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 1068px); left: 24%; position: absolute; top: 152px; transform: translateX(-50%); width: 674px; }",
    ".framer-GFhZ0 .framer-1hk9via-container { aspect-ratio: 0.9617918313570487 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 908px); left: 68%; position: absolute; top: 1352px; transform: translateX(-50%); width: 873px; }",
    ".framer-GFhZ0 .framer-e34nco { flex: none; height: 581px; left: calc(50.00000000000002% - 1438px / 2); overflow: hidden; position: absolute; top: 652px; width: 1438px; }",
    ".framer-GFhZ0 .framer-pf7mlq { flex: none; height: 261px; overflow: hidden; position: relative; width: 1625px; }",
    ".framer-GFhZ0 .framer-1oryf6n { flex: none; height: 100px; overflow: hidden; position: relative; width: 1625px; }",
    ".framer-GFhZ0 .framer-1h5f3tx { flex: none; height: 220px; overflow: hidden; position: relative; width: 393px; }",
    ".framer-GFhZ0 .framer-1pk46w7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; scroll-margin-top: 250px; width: 100%; }",
    ".framer-GFhZ0 .framer-1ly14f4-container { flex: none; height: 953px; position: relative; width: 100%; }",
    ".framer-GFhZ0 .framer-fhalzc { flex: none; height: 248px; overflow: hidden; position: relative; width: 100%; }",
    ".framer-GFhZ0 .framer-1xes1st { --framer-paragraph-spacing: 0px; bottom: 18px; flex: none; height: auto; left: 50%; position: absolute; transform: translateX(-50%); white-space: pre-wrap; width: 100px; word-break: break-word; word-wrap: break-word; z-index: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-GFhZ0.framer-1rml4m2, .framer-GFhZ0.framer-5zq7xz, .framer-GFhZ0 .framer-30q2w5, .framer-GFhZ0 .framer-1squ8vd, .framer-GFhZ0 .framer-9zpetz, .framer-GFhZ0 .framer-1t24yw8, .framer-GFhZ0 .framer-o0mzm0, .framer-GFhZ0 .framer-gw8nh1, .framer-GFhZ0 .framer-chujfk, .framer-GFhZ0 .framer-k5szjo, .framer-GFhZ0 .framer-12iimvw, .framer-GFhZ0 .framer-mnfkb7, .framer-GFhZ0 .framer-clh1r5, .framer-GFhZ0 .framer-1pk46w7 { gap: 0px; } .framer-GFhZ0.framer-1rml4m2 > *, .framer-GFhZ0 .framer-o0mzm0 > *, .framer-GFhZ0 .framer-gw8nh1 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-GFhZ0.framer-1rml4m2 > :first-child, .framer-GFhZ0 .framer-1squ8vd > :first-child, .framer-GFhZ0 .framer-9zpetz > :first-child, .framer-GFhZ0 .framer-o0mzm0 > :first-child, .framer-GFhZ0 .framer-gw8nh1 > :first-child, .framer-GFhZ0 .framer-k5szjo > :first-child, .framer-GFhZ0 .framer-clh1r5 > :first-child, .framer-GFhZ0 .framer-1pk46w7 > :first-child { margin-top: 0px; } .framer-GFhZ0.framer-1rml4m2 > :last-child, .framer-GFhZ0 .framer-1squ8vd > :last-child, .framer-GFhZ0 .framer-9zpetz > :last-child, .framer-GFhZ0 .framer-o0mzm0 > :last-child, .framer-GFhZ0 .framer-gw8nh1 > :last-child, .framer-GFhZ0 .framer-k5szjo > :last-child, .framer-GFhZ0 .framer-clh1r5 > :last-child, .framer-GFhZ0 .framer-1pk46w7 > :last-child { margin-bottom: 0px; } .framer-GFhZ0.framer-5zq7xz > * { margin: 0px; margin-left: calc(40px / 2); margin-right: calc(40px / 2); } .framer-GFhZ0.framer-5zq7xz > :first-child, .framer-GFhZ0 .framer-30q2w5 > :first-child, .framer-GFhZ0 .framer-1t24yw8 > :first-child, .framer-GFhZ0 .framer-chujfk > :first-child, .framer-GFhZ0 .framer-12iimvw > :first-child, .framer-GFhZ0 .framer-mnfkb7 > :first-child { margin-left: 0px; } .framer-GFhZ0.framer-5zq7xz > :last-child, .framer-GFhZ0 .framer-30q2w5 > :last-child, .framer-GFhZ0 .framer-1t24yw8 > :last-child, .framer-GFhZ0 .framer-chujfk > :last-child, .framer-GFhZ0 .framer-12iimvw > :last-child, .framer-GFhZ0 .framer-mnfkb7 > :last-child { margin-right: 0px; } .framer-GFhZ0 .framer-30q2w5 > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-GFhZ0 .framer-1squ8vd > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } .framer-GFhZ0 .framer-9zpetz > *, .framer-GFhZ0 .framer-clh1r5 > * { margin: 0px; margin-bottom: calc(1px / 2); margin-top: calc(1px / 2); } .framer-GFhZ0 .framer-1t24yw8 > *, .framer-GFhZ0 .framer-12iimvw > *, .framer-GFhZ0 .framer-mnfkb7 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-GFhZ0 .framer-chujfk > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-GFhZ0 .framer-k5szjo > *, .framer-GFhZ0 .framer-1pk46w7 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }",
    '.framer-GFhZ0[data-hide-scrollbars="true"]::-webkit-scrollbar, .framer-GFhZ0 [data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }',
    '.framer-GFhZ0[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb, .framer-GFhZ0 [data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }',
    '.framer-GFhZ0[data-border="true"]::after, .framer-GFhZ0 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@media (max-width: 809px) { .framer-GFhZ0.framer-1rml4m2 { width: 390px; } .framer-GFhZ0 .framer-jaq4ea-container { height: auto; left: 50%; transform: translateX(-50%); width: 370px; } .framer-GFhZ0.framer-1wzf9th-container { left: -38px; right: -38px; transform: translateY(-50%); width: unset; } .framer-GFhZ0.framer-5zq7xz { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; flex-direction: column; } .framer-GFhZ0 .framer-30q2w5, .framer-GFhZ0 .framer-ab08lb { order: 0; } .framer-GFhZ0 .framer-1vgbf6v { order: 1; } .framer-GFhZ0 .framer-19u50ix-container { align-self: stretch; order: 2; } .framer-GFhZ0 .framer-hxony5 { grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(3, min-content); height: min-content; left: 51%; padding: 8px 8px 120px 8px; transform: translateX(-50%); width: 381px; } .framer-GFhZ0 .framer-zt279u-container { grid-column: unset; height: 200px; order: 0; } .framer-GFhZ0 .framer-1l1jr0z-container { grid-column: auto / span 2; height: 200px; order: 2; } .framer-GFhZ0 .framer-1xbdxwj-container { grid-column: unset; height: 200px; order: 1; } .framer-GFhZ0 .framer-ajpwf4-container { height: 200px; order: 3; } .framer-GFhZ0 .framer-w4stqj-container { height: 200px; order: 4; } .framer-GFhZ0 .framer-cf92tp-container { grid-column: auto / span 2; height: 308px; order: 5; } .framer-GFhZ0 .framer-9zpetz { bottom: 76px; width: 370px; } .framer-GFhZ0 .framer-1t24yw8 { right: 0px; } .framer-GFhZ0 .framer-1yrjsz2-container { width: 370px; } .framer-GFhZ0 .framer-mwns4z { aspect-ratio: unset; bottom: 0px; height: 131px; } .framer-GFhZ0 .framer-8kho14 { height: 69.43127962085308vh; left: calc(41.2820512820513% - 497px / 2); width: 497px; } .framer-GFhZ0 .framer-arg8mv { bottom: 105px; cursor: unset; left: calc(51.2820512820513% - 325px / 2); } .framer-GFhZ0 .framer-18hopws { height: 651px; order: 1; } .framer-GFhZ0 .framer-esbw9t { right: -1px; } .framer-GFhZ0 .framer-1hhfz7f { left: calc(-10.769230769230747% - 816px / 2); } .framer-GFhZ0 .framer-1xyr7df { left: calc(94.35897435897438% - 565px / 2); } .framer-GFhZ0 .framer-1d7qwd5 { right: -130px; } .framer-GFhZ0 .framer-tgbvc8 { height: 624px; order: 2; } .framer-GFhZ0 .framer-11fbw9v { bottom: unset; left: -235px; top: -136px; } .framer-GFhZ0 .framer-m3dk5p { bottom: -277px; left: calc(68.71794871794874% - 672px / 2); top: unset; } .framer-GFhZ0 .framer-dg0n98 { aspect-ratio: unset; bottom: -25px; height: 140px; } .framer-GFhZ0 .framer-18cmtif { left: 50%; right: unset; top: -202px; transform: translateX(-50%); width: 1600px; } .framer-GFhZ0 .framer-m3pkyo, .framer-GFhZ0 .framer-7ps9cg { height: 76px; top: 0px; z-index: 2; } .framer-GFhZ0 .framer-k5szjo { order: 3; padding: 10px 0px 0px 0px; } .framer-GFhZ0 .framer-1sy3ddd { bottom: -30px; left: -325px; right: -124px; } .framer-GFhZ0 .framer-1ckhe4a { bottom: -43px; left: -524px; right: -44px; top: -6px; } .framer-GFhZ0 .framer-18fkbk5 { left: -38px; right: -514px; } .framer-GFhZ0 .framer-1htt17w { height: 1532px; order: 5; } .framer-GFhZ0 .framer-1l1mgaa { height: 1115px; left: calc(50.00000000000002% - 676px / 2); top: calc(52.545691906005246% - 1115px / 2); width: 676px; } .framer-GFhZ0 .framer-11q9h9p { height: 450px; left: calc(49.87500000000003% - 371px / 2); top: 192px; width: 371px; } .framer-GFhZ0 .framer-aldw6y { height: var(--framer-aspect-ratio-supported, 812px); } .framer-GFhZ0 .framer-12iimvw { height: 577px; order: 6; } .framer-GFhZ0 .framer-oow3au-container { height: 580px; width: 818px; } .framer-GFhZ0 .framer-1ad08q6 { bottom: -8px; } .framer-GFhZ0 .framer-mnfkb7 { align-content: flex-start; align-items: flex-start; flex-direction: column; height: min-content; order: 8; padding: 0px; width: 1202px; } .framer-GFhZ0 .framer-hwiom4 { height: 992px; } .framer-GFhZ0 .framer-1g18u9g { flex: none; height: 1180px; overflow: visible; width: 100%; } .framer-GFhZ0 .framer-12uj858 { bottom: unset; height: var(--framer-aspect-ratio-supported, 1120px); left: 292px; top: 48%; transform: translateY(-50%); } .framer-GFhZ0 .framer-fzebqj { bottom: unset; height: var(--framer-aspect-ratio-supported, 1120px); left: 292px; top: -62px; transform: unset; } .framer-GFhZ0 .framer-smbhsj { bottom: 49px; left: 56%; top: unset; transform: translateX(-50%); } .framer-GFhZ0 .framer-10ytyjo { height: 2427px; order: 9; } .framer-GFhZ0 .framer-8ksuqa { height: var(--framer-aspect-ratio-supported, 1185px); right: -134px; top: 31%; width: 1020px; } .framer-GFhZ0 .framer-16d0owj { right: -559px; top: 766px; } .framer-GFhZ0 .framer-1f4z2l6 { left: -16px; top: 884px; } .framer-GFhZ0 .framer-1lvxr7n { left: unset; right: 0px; top: 1384px; } .framer-GFhZ0 .framer-1ukf8md { left: calc(86.92307692307695% - 668px / 2); top: calc(87.96868562010715% - 467px / 2); } .framer-GFhZ0 .framer-ozzd80 { left: calc(48.71794871794874% - 999px / 2); top: calc(57.18994643592915% - 1639px / 2); } .framer-GFhZ0 .framer-1qy10e { bottom: unset; top: 1219px; } .framer-GFhZ0 .framer-s356mu { bottom: unset; top: 1747px; } .framer-GFhZ0 .framer-1b6rw4c { bottom: unset; top: 1859px; } .framer-GFhZ0 .framer-m18zv1 { right: -16px; width: unset; } .framer-GFhZ0 .framer-nyngik { bottom: unset; left: 132px; top: 1636px; } .framer-GFhZ0 .framer-1kyeqy1 { bottom: unset; top: 2136px; } .framer-GFhZ0 .framer-1jlug1v { bottom: unset; top: 736px; } .framer-GFhZ0 .framer-1kogld { left: -588px; right: -586px; width: unset; } .framer-GFhZ0 .framer-1csghqk { height: 800px; order: 10; } .framer-GFhZ0 .framer-1pcnp6g { bottom: 6px; height: var(--framer-aspect-ratio-supported, 575px); left: 47%; width: 656px; } .framer-GFhZ0 .framer-jejx8f { bottom: -640px; height: var(--framer-aspect-ratio-supported, 1995px); left: -473px; width: 743px; } .framer-GFhZ0 .framer-z7hmhb { bottom: -952px; height: var(--framer-aspect-ratio-supported, 1777px); left: -339px; width: 943px; } .framer-GFhZ0 .framer-14sh7hd { height: var(--framer-aspect-ratio-supported, 31px); } .framer-GFhZ0 .framer-kcykm { height: 2252px; order: 11; } .framer-GFhZ0 .framer-1fr9lww { bottom: 383px; height: unset; left: calc(52.05128205128208% - 448px / 2); top: 1069px; width: 448px; } .framer-GFhZ0 .framer-19oqsw2 { aspect-ratio: 0.8760655737704918 / 1; height: var(--framer-aspect-ratio-supported, 913px); left: -106px; right: -304px; top: 87px; width: unset; } .framer-GFhZ0 .framer-307cnd-container { height: var(--framer-aspect-ratio-supported, 781px); left: -55px; right: -48px; top: 436px; transform: unset; width: unset; } .framer-GFhZ0 .framer-1hk9via-container { bottom: 80px; height: var(--framer-aspect-ratio-supported, 530px); left: -60px; right: -60px; top: unset; transform: unset; width: unset; } .framer-GFhZ0 .framer-e34nco { height: 1821px; left: -524px; right: -524px; top: calc(47.64653641207818% - 1821px / 2); width: unset; } .framer-GFhZ0 .framer-pf7mlq { height: 206px; order: 12; } .framer-GFhZ0 .framer-1oryf6n { order: 7; } .framer-GFhZ0 .framer-1h5f3tx { order: 14; } .framer-GFhZ0 .framer-1pk46w7 { order: 13; } .framer-GFhZ0 .framer-1ly14f4-container { height: 459px; width: 390px; } .framer-GFhZ0 .framer-fhalzc { height: 100px; order: 15; } .framer-GFhZ0 .framer-1xes1st { bottom: 15px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-GFhZ0.framer-5zq7xz, .framer-GFhZ0 .framer-mnfkb7 { gap: 0px; } .framer-GFhZ0.framer-5zq7xz > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-GFhZ0.framer-5zq7xz > :first-child, .framer-GFhZ0 .framer-mnfkb7 > :first-child { margin-top: 0px; } .framer-GFhZ0.framer-5zq7xz > :last-child, .framer-GFhZ0 .framer-mnfkb7 > :last-child { margin-bottom: 0px; } .framer-GFhZ0 .framer-mnfkb7 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }}",
    "@media (min-width: 810px) and (max-width: 1599px) { .framer-GFhZ0.framer-1rml4m2 { width: 810px; } .framer-GFhZ0.framer-1wzf9th-container { width: 759px; } .framer-GFhZ0 .framer-hxony5 { left: calc(50.00000000000002% - 758px / 2); width: 758px; } .framer-GFhZ0 .framer-9zpetz { left: 0px; right: 0px; transform: unset; width: unset; } .framer-GFhZ0 .framer-ab08lb { order: 0; } .framer-GFhZ0 .framer-mwns4z { height: var(--framer-aspect-ratio-supported, 108px); } .framer-GFhZ0 .framer-arg8mv { left: calc(80.00000000000003% - 325px / 2); } .framer-GFhZ0 .framer-18hopws { order: 1; } .framer-GFhZ0 .framer-tgbvc8 { order: 2; } .framer-GFhZ0 .framer-11fbw9v { bottom: 28px; left: -95px; } .framer-GFhZ0 .framer-m3dk5p { left: calc(64.9382716049383% - 672px / 2); top: calc(79.35185185185188% - 837px / 2); } .framer-GFhZ0 .framer-dg0n98 { bottom: -161px; height: var(--framer-aspect-ratio-supported, 298px); left: -182px; right: -182px; } .framer-GFhZ0 .framer-18cmtif { height: var(--framer-aspect-ratio-supported, 527px); left: -220px; right: -220px; top: 4px; } .framer-GFhZ0 .framer-k5szjo { order: 3; } .framer-GFhZ0 .framer-1v0dz1s, .framer-GFhZ0 .framer-1o4vwli, .framer-GFhZ0 .framer-1bwkuqx { height: 75vh; } .framer-GFhZ0 .framer-18fkbk5 { right: -564px; top: 0px; } .framer-GFhZ0 .framer-1rvi7xe { order: 4; } .framer-GFhZ0 .framer-1htt17w { height: 1989px; order: 5; } .framer-GFhZ0 .framer-1l1mgaa { top: calc(53.79587732528911% - 770px / 2); } .framer-GFhZ0 .framer-11q9h9p { height: 820px; left: calc(50.00000000000002% - 676px / 2); top: 13px; width: 676px; } .framer-GFhZ0 .framer-aldw6y { bottom: 92px; height: var(--framer-aspect-ratio-supported, 1355px); left: 48%; width: 644px; } .framer-GFhZ0 .framer-19yhsda { bottom: 139px; height: 755px; left: calc(50.00000000000002% - 683px / 2); width: 683px; } .framer-GFhZ0 .framer-12iimvw { order: 6; } .framer-GFhZ0 .framer-mnfkb7 { flex-direction: column; gap: 0px; height: min-content; order: 7; } .framer-GFhZ0 .framer-1g18u9g { flex: none; width: 100%; } .framer-GFhZ0 .framer-12uj858, .framer-GFhZ0 .framer-fzebqj { height: var(--framer-aspect-ratio-supported, 1120px); } .framer-GFhZ0 .framer-10ytyjo { height: 3022px; order: 8; } .framer-GFhZ0 .framer-8ksuqa { top: 56%; } .framer-GFhZ0 .framer-1gtjk00 { top: 636px; } .framer-GFhZ0 .framer-ivcu9z { aspect-ratio: 0.46410891089108913 / 1; bottom: -7px; left: 50%; transform: translateX(-50%); width: var(--framer-aspect-ratio-supported, 375px); } .framer-GFhZ0 .framer-16d0owj { top: 1241px; } .framer-GFhZ0 .framer-1f4z2l6 { top: 1479px; } .framer-GFhZ0 .framer-1lvxr7n { top: 1979px; } .framer-GFhZ0 .framer-1ukf8md { left: calc(86.9135802469136% - 668px / 2); top: calc(90.33752481800134% - 467px / 2); } .framer-GFhZ0 .framer-ozzd80 { left: calc(48.76543209876545% - 999px / 2); top: calc(65.61879549966912% - 1639px / 2); } .framer-GFhZ0 .framer-pjn93a { left: calc(57.28395061728398% - 354px / 2); top: calc(68.03441429516879% - 429px / 2); } .framer-GFhZ0 .framer-1gfg1m9, .framer-GFhZ0 .framer-14sh7hd { height: var(--framer-aspect-ratio-supported, 65px); } .framer-GFhZ0 .framer-1kogld { left: -379px; right: -375px; width: unset; } .framer-GFhZ0 .framer-1csghqk { order: 9; } .framer-GFhZ0 .framer-1pcnp6g { left: 41%; } .framer-GFhZ0 .framer-jejx8f { left: -669px; } .framer-GFhZ0 .framer-z7hmhb { bottom: -1031px; left: -314px; } .framer-GFhZ0 .framer-kcykm { height: 3164px; order: 10; } .framer-GFhZ0 .framer-1fr9lww { left: calc(50.00000000000002% - 845px / 2); top: 1549px; } .framer-GFhZ0 .framer-307cnd-container { height: var(--framer-aspect-ratio-supported, 783px); left: 50%; top: 810px; width: 494px; } .framer-GFhZ0 .framer-1hk9via-container { height: var(--framer-aspect-ratio-supported, 672px); left: 50%; top: 2472px; width: 646px; } .framer-GFhZ0 .framer-pf7mlq { order: 11; } .framer-GFhZ0 .framer-1pk46w7 { order: 14; } .framer-GFhZ0 .framer-fhalzc { order: 15; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-GFhZ0 .framer-mnfkb7 { gap: 0px; } .framer-GFhZ0 .framer-mnfkb7 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-GFhZ0 .framer-mnfkb7 > :first-child { margin-top: 0px; } .framer-GFhZ0 .framer-mnfkb7 > :last-child { margin-bottom: 0px; } }}",
  ],
  tr = ye(As, Hs, "framer-GFhZ0"),
  Ff = tr;
tr.displayName = "Page";
tr.defaultProps = { height: 17791, width: 1600 };
ve(
  tr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "/framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "/framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "/framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "/framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "/framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "/framerusercontent.com/assets/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "/framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "/framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "/framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "/framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "/framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "/framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "/framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "/framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "/framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "/framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "/framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "/framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "/framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "/framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "/framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "/framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "/framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "/framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "/framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "/framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "/framerusercontent.com/assets/1ZFS7N918ojhhd0nQWdj3jz4w.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "/framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2",
          weight: "600",
        },
      ],
    },
    ...Ci,
    ...Zi,
    ...Li,
    ...Vi,
    ...Ki,
    ...Ri,
    ...Yi,
    ...Si,
    ...Ii,
    ...Di,
    ...Gi,
    ...qi,
    ...Ai,
    ...Ui,
    ...Ei,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Cf = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FramerNYptFwJkI",
      slots: [],
      annotations: {
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Byvh2ikpS":{"layout":["fixed","auto"]},"KffKQZNjt":{"layout":["fixed","auto"]}}}',
        framerComponentViewportWidth: "true",
        framerIntrinsicWidth: "1600",
        framerContractVersion: "1",
        framerImmutableVariables: "true",
        framerDisplayContentsDiv: "false",
        framerResponsiveScreen: "",
        framerIntrinsicHeight: "17791",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
export { Cf as __FramerMetadata__, Ff as default };
//# sourceMappingURL=7KoJUjbxDCD4lSKxq-GN0J1d0-yDdieKsz-hdjN8BsY.DASHE4G2.mjs.map
