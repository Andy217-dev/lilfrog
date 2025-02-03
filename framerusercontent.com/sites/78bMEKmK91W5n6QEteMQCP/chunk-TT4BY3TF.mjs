import {
  Ba as n1,
  Ca as c1,
  Da as Q,
  Ea as i1,
  L as G,
  Q as v1,
  S as d,
  V as U,
  W,
  Y as J,
  Z as q,
  aa as K,
  c as R,
  g as z,
  ha as I1,
  i as O1,
  j as Z,
  k as D,
  l as X,
  n as A,
  o as B,
  p as h1,
  qa as o1,
  r as $1,
  s as n,
  t as P,
  ta as M1,
  v as _,
  va as Y,
  w as p,
  xa as ee,
  y as j,
  ya as u1,
  za as r1,
} from "./chunk-TVPMZHXF.mjs";
import { b as L, c as h } from "./chunk-RIUMFBNJ.mjs";
function Oa(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
var H1 = (t, e, r) => Math.min(Math.max(r, t), e),
  Ha = { duration: 0.3, delay: 0, endDelay: 0, repeat: 0, easing: "ease" },
  te = (t) => typeof t == "number",
  ve = (t) => Array.isArray(t) && !te(t[0]),
  xe = (t, e, r) => {
    let a = e - t;
    return ((((r - t) % a) + a) % a) + t;
  };
function we(t, e) {
  return ve(t) ? t[xe(0, t.length, e)] : t;
}
var re = (t, e, r) => -r * t + r * e + t,
  Wa = () => {},
  ae = (t) => t,
  ne = (t, e, r) => (e - t === 0 ? 1 : (r - t) / (e - t));
function oe(t, e) {
  let r = t[t.length - 1];
  for (let a = 1; a <= e; a++) {
    let i = ne(0, e, a);
    t.push(re(r, 1, i));
  }
}
function be(t) {
  let e = [0];
  return oe(e, t - 1), e;
}
function ja(t, e = be(t.length), r = ae) {
  let a = t.length,
    i = a - e.length;
  return (
    i > 0 && oe(e, i),
    (s) => {
      let o = 0;
      for (; o < a - 2 && !(s < e[o + 1]); o++);
      let c = H1(0, 1, ne(e[o], e[o + 1], s));
      return (c = we(r, o)(c)), re(t[o], t[o + 1], c);
    }
  );
}
var qa = (t) => Array.isArray(t) && te(t[0]),
  za = (t) => typeof t == "object" && !!t.createAnimation,
  Za = (t) => typeof t == "function",
  Xa = (t) => typeof t == "string",
  Ga = { ms: (t) => 1e3 * t, s: (t) => t / 1e3 };
function Ja(t, e) {
  return e ? t * (1e3 / e) : 0;
}
var ie =
  (t, e = "end") =>
  (r) => {
    r = e === "end" ? Math.min(r, 0.999) : Math.max(r, 0.001);
    let a = r * t,
      i = e === "end" ? Math.floor(a) : Math.ceil(a);
    return H1(0, 1, i / t);
  };
function W1(t) {
  let { opacity: e, style: r } = t,
    a = ["0%", "-5%", "-15%", "7%", "-5%", "-15%", "15%", "0%", "3%", "-10%"],
    i = ["0%", "-10%", "5%", "-25%", "25%", "10%", "0%", "15%", "35%", "10%"],
    s = v1.current() === v1.canvas;
  return n("div", {
    style: {
      width: "100%",
      height: "100%",
      position: "relative",
      overflow: "hidden",
    },
    children: n(p.div, {
      style: {
        ...Le,
        opacity: e,
        inset: s ? 0 : "-200%",
        width: s ? "100%" : "400%",
        height: s ? "100%" : "400%",
        position: "absolute",
      },
      animate: !s && { x: a, y: i },
      transition: { ease: ie(10, "start"), repeat: 1 / 0, duration: 8 },
    }),
  });
}
W1.defaultProps = { opacity: 0.5 };
U(W1, {
  opacity: {
    title: "Opacity",
    type: d.Number,
    step: 0.1,
    displayStepper: !0,
    max: 1,
    min: 0,
  },
});
var Le = {
  backgroundSize: "256px 256px",
  backgroundRepeat: "repeat",
  background:
    "url('/framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')",
};
function U1(t) {
  let [e, r] = h1(null);
  D(() => {
    let o = t.customSvgCode;
    a(o);
  });
  let a = (o) => {
      let c = [
          [/width="[^"]*"/, 'width="100%"'],
          [/height="[^"]*"/, 'height="100%"'],
        ],
        m = o.includes('stroke="'),
        f = o.includes('stroke-width="'),
        C = o.includes('stroke-linecap="'),
        y = o.includes('stroke-linejoin="');
      if (o.includes("<circle")) {
        let g = /<circle[^>]*fill="([^"]*)"/,
          u = o.match(g);
        if (u) {
          let x = u[0].replace(u[1], t.customColor);
          o = o.replace(g, x);
        } else c.push([/<circle/g, `<circle fill="${t.customColor}"`]);
      }
      m
        ? (C
            ? c.push([
                /<path/g,
                `<path stroke="${t.customColor}" stroke-linecap="${t.lineCap}"`,
              ])
            : c.push([/<path/g, `<path stroke="${t.customColor}"`]),
          f &&
            c.push([
              /stroke-width="(?!0\b)\d+(\.\d+)?"/g,
              `stroke-width="${t.customStrokeWidth}"`,
            ]))
        : c.push([/<path/g, `<path fill="${t.customColor}"`]),
        o.includes('overflow="')
          ? c.push([/overflow="[^"]*"/, 'overflow="visible"'])
          : c.push([/<svg/, '<svg overflow="visible"']),
        y
          ? c.push([
              /stroke-linejoin="[^"]*"/,
              `stroke-linejoin="${t.lineJoin}"`,
            ])
          : c.push([/<path/g, `<path stroke-linejoin="${t.lineJoin}"`]),
        c.forEach(([g, u]) => {
          o = o.replace(g, u);
        }),
        r(o);
    },
    i = {
      padding: `${t.customPadding}px`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      overflow: "visible",
    },
    s = {
      role: "img",
      ...(t.title && { "aria-label": t.title }),
      ...(t.description && { "aria-description": t.description }),
    };
  return n("div", { dangerouslySetInnerHTML: { __html: e }, style: i, ...s });
}
U1.displayName = "SVG";
U1.defaultProps = {
  customSvgCode:
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_967_124)"> <path d="M18 6.09674C18 6.0348 18.0246 5.97539 18.0684 5.93159L23.6013 0.398708C23.7484 0.251575 24 0.35578 24 0.563858V11.9033C24 11.9652 23.9754 12.0246 23.9316 12.0684L18 18V6.09674Z" fill="white"/> <path d="M6 18V6.56386C6 6.35578 5.74843 6.25158 5.60129 6.39871L0.0684074 11.9316C0.0246069 11.9754 0 12.0348 0 12.0967V23.7664C0 23.8954 0.104567 24 0.233557 24H11.9033C11.9652 24 12.0246 23.9754 12.0684 23.9316L18 18H6Z" fill="white"/> </g> <defs> <clipPath id="clip0_967_124"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg>',
  customColor: "#ffffff",
  customPadding: 0,
  customStrokeWidth: 2,
  lineCap: "butt",
  lineJoin: "miter",
  title: "",
  description: "",
};
U(U1, {
  customSvgCode: { type: d.String, title: "SVG Code", displayTextArea: !1 },
  customColor: { type: d.Color, title: "Color", defaultValue: "#ffffff" },
  customPadding: {
    type: d.Number,
    title: "Padding",
    defaultValue: 0,
    min: 0,
    step: 1,
    displayStepper: !0,
  },
  customStrokeWidth: {
    type: d.Number,
    title: "Stroke",
    defaultValue: 2,
    min: 0,
    step: 0.1,
    displayStepper: !0,
    hidden: (t) => !t.customSvgCode.includes('stroke="'),
  },
  lineCap: {
    type: d.Enum,
    title: "Line Cap",
    options: ["butt", "round", "square"],
    optionTitles: ["Butt", "Round", "Square"],
    defaultValue: "butt",
    hidden: (t) => !t.customSvgCode.includes('stroke="'),
  },
  lineJoin: {
    type: d.Enum,
    title: "Line Join",
    options: ["round", "miter", "bevel"],
    optionTitles: ["Round", "Miter", "Bevel"],
    defaultValue: "miter",
    hidden: (t) => !t.customSvgCode.includes('stroke="'),
  },
  title: {
    type: d.String,
    title: "Title",
    defaultValue: "",
    placeholder: "Icon name...",
  },
  description: {
    type: d.String,
    title: "Description",
    defaultValue: "",
    placeholder: "Icon purpose...",
    description:
      "More components at [Framer University](https://frameruni.link/cc).",
  },
});
var C1 = U1;
function le(t, e, r) {
  return Math.max(t, Math.min(e, r));
}
var j1 = class {
    constructor() {
      (this.isRunning = !1),
        (this.value = 0),
        (this.from = 0),
        (this.to = 0),
        (this.duration = 0),
        (this.currentTime = 0);
    }
    advance(e) {
      var r;
      if (!this.isRunning) return;
      let a = !1;
      if (this.duration && this.easing) {
        this.currentTime += e;
        let i = le(0, this.currentTime / this.duration, 1);
        a = i >= 1;
        let s = a ? 1 : this.easing(i);
        this.value = this.from + (this.to - this.from) * s;
      } else
        this.lerp
          ? ((this.value = (function (s, o, c, m) {
              return (function (C, y, g) {
                return (1 - g) * C + g * y;
              })(s, o, 1 - Math.exp(-c * m));
            })(this.value, this.to, 60 * this.lerp, e)),
            Math.round(this.value) === this.to &&
              ((this.value = this.to), (a = !0)))
          : ((this.value = this.to), (a = !0));
      a && this.stop(),
        (r = this.onUpdate) === null ||
          r === void 0 ||
          r.call(this, this.value, a);
    }
    stop() {
      this.isRunning = !1;
    }
    fromTo(e, r, { lerp: a, duration: i, easing: s, onStart: o, onUpdate: c }) {
      (this.from = this.value = e),
        (this.to = r),
        (this.lerp = a),
        (this.duration = i),
        (this.easing = s),
        (this.currentTime = 0),
        (this.isRunning = !0),
        o?.(),
        (this.onUpdate = c);
    }
  },
  q1 = class {
    constructor({
      wrapper: e,
      content: r,
      autoResize: a = !0,
      debounce: i = 250,
    } = {}) {
      (this.width = 0),
        (this.height = 0),
        (this.scrollWidth = 0),
        (this.scrollHeight = 0),
        (this.resize = () => {
          this.onWrapperResize(), this.onContentResize();
        }),
        (this.onWrapperResize = () => {
          this.wrapper === h
            ? ((this.width = h.innerWidth), (this.height = h.innerHeight))
            : this.wrapper instanceof HTMLElement &&
              ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        }),
        (this.onContentResize = () => {
          this.wrapper === h
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : this.wrapper instanceof HTMLElement &&
              ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        }),
        (this.wrapper = e),
        (this.content = r),
        a &&
          ((this.debouncedResize = (function (o, c) {
            let m;
            return function () {
              let f = arguments,
                C = this;
              clearTimeout(m),
                (m = setTimeout(function () {
                  o.apply(C, f);
                }, c));
            };
          })(this.resize, i)),
          this.wrapper === h
            ? h.addEventListener("resize", this.debouncedResize, !1)
            : ((this.wrapperResizeObserver = new ResizeObserver(
                this.debouncedResize
              )),
              this.wrapperResizeObserver.observe(this.wrapper)),
          (this.contentResizeObserver = new ResizeObserver(
            this.debouncedResize
          )),
          this.contentResizeObserver.observe(this.content)),
        this.resize();
    }
    destroy() {
      var e, r;
      (e = this.wrapperResizeObserver) === null ||
        e === void 0 ||
        e.disconnect(),
        (r = this.contentResizeObserver) === null ||
          r === void 0 ||
          r.disconnect(),
        h.removeEventListener("resize", this.debouncedResize, !1);
    }
    get limit() {
      return {
        x: this.scrollWidth - this.width,
        y: this.scrollHeight - this.height,
      };
    }
  },
  N1 = class {
    constructor() {
      this.events = {};
    }
    emit(e, ...r) {
      let a = this.events[e] || [];
      for (let i = 0, s = a.length; i < s; i++) a[i](...r);
    }
    on(e, r) {
      var a;
      return (
        (!((a = this.events[e]) === null || a === void 0) && a.push(r)) ||
          (this.events[e] = [r]),
        () => {
          var i;
          this.events[e] =
            (i = this.events[e]) === null || i === void 0
              ? void 0
              : i.filter((s) => r !== s);
        }
      );
    }
    off(e, r) {
      var a;
      this.events[e] =
        (a = this.events[e]) === null || a === void 0
          ? void 0
          : a.filter((i) => r !== i);
    }
    destroy() {
      this.events = {};
    }
  },
  se = 100 / 6,
  z1 = class {
    constructor(e, { wheelMultiplier: r = 1, touchMultiplier: a = 1 }) {
      (this.lastDelta = { x: 0, y: 0 }),
        (this.windowWidth = 0),
        (this.windowHeight = 0),
        (this.onTouchStart = (i) => {
          let { clientX: s, clientY: o } = i.targetTouches
            ? i.targetTouches[0]
            : i;
          (this.touchStart.x = s),
            (this.touchStart.y = o),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: i });
        }),
        (this.onTouchMove = (i) => {
          var s, o, c, m;
          let { clientX: f, clientY: C } = i.targetTouches
              ? i.targetTouches[0]
              : i,
            y =
              -(
                f -
                ((o =
                  (s = this.touchStart) === null || s === void 0
                    ? void 0
                    : s.x) !== null && o !== void 0
                  ? o
                  : 0)
              ) * this.touchMultiplier,
            g =
              -(
                C -
                ((m =
                  (c = this.touchStart) === null || c === void 0
                    ? void 0
                    : c.y) !== null && m !== void 0
                  ? m
                  : 0)
              ) * this.touchMultiplier;
          (this.touchStart.x = f),
            (this.touchStart.y = C),
            (this.lastDelta = { x: y, y: g }),
            this.emitter.emit("scroll", { deltaX: y, deltaY: g, event: i });
        }),
        (this.onTouchEnd = (i) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: i,
          });
        }),
        (this.onWheel = (i) => {
          let { deltaX: s, deltaY: o, deltaMode: c } = i;
          (s *= c === 1 ? se : c === 2 ? this.windowWidth : 1),
            (o *= c === 1 ? se : c === 2 ? this.windowHeight : 1),
            (s *= this.wheelMultiplier),
            (o *= this.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: s, deltaY: o, event: i });
        }),
        (this.onWindowResize = () => {
          (this.windowWidth = h.innerWidth),
            (this.windowHeight = h.innerHeight);
        }),
        (this.element = e),
        (this.wheelMultiplier = r),
        (this.touchMultiplier = a),
        (this.touchStart = { x: null, y: null }),
        (this.emitter = new N1()),
        h.addEventListener("resize", this.onWindowResize, !1),
        this.onWindowResize(),
        this.element.addEventListener("wheel", this.onWheel, { passive: !1 }),
        this.element.addEventListener("touchstart", this.onTouchStart, {
          passive: !1,
        }),
        this.element.addEventListener("touchmove", this.onTouchMove, {
          passive: !1,
        }),
        this.element.addEventListener("touchend", this.onTouchEnd, {
          passive: !1,
        });
    }
    on(e, r) {
      return this.emitter.on(e, r);
    }
    destroy() {
      this.emitter.destroy(),
        h.removeEventListener("resize", this.onWindowResize, !1),
        this.element.removeEventListener("wheel", this.onWheel),
        this.element.removeEventListener("touchstart", this.onTouchStart),
        this.element.removeEventListener("touchmove", this.onTouchMove),
        this.element.removeEventListener("touchend", this.onTouchEnd);
    }
  },
  E1 = class {
    constructor({
      wrapper: e = h,
      content: r = document.documentElement,
      wheelEventsTarget: a = e,
      eventsTarget: i = a,
      smoothWheel: s = !0,
      syncTouch: o = !1,
      syncTouchLerp: c = 0.075,
      touchInertiaMultiplier: m = 35,
      duration: f,
      easing: C = (V) => Math.min(1, 1.001 - Math.pow(2, -10 * V)),
      lerp: y = 0.1,
      infinite: g = !1,
      orientation: u = "vertical",
      gestureOrientation: x = "vertical",
      touchMultiplier: N = 1,
      wheelMultiplier: O = 1,
      autoResize: S = !0,
      prevent: w,
      virtualScroll: F,
      __experimental__naiveDimensions: H = !1,
    } = {}) {
      (this.__isScrolling = !1),
        (this.__isStopped = !1),
        (this.__isLocked = !1),
        (this.userData = {}),
        (this.lastVelocity = 0),
        (this.velocity = 0),
        (this.direction = 0),
        (this.onPointerDown = (V) => {
          V.button === 1 && this.reset();
        }),
        (this.onVirtualScroll = (V) => {
          if (
            typeof this.options.virtualScroll == "function" &&
            this.options.virtualScroll(V) === !1
          )
            return;
          let { deltaX: b, deltaY: v, event: I } = V;
          if (
            (this.emitter.emit("virtual-scroll", {
              deltaX: b,
              deltaY: v,
              event: I,
            }),
            I.ctrlKey)
          )
            return;
          let E = I.type.includes("touch"),
            $ = I.type.includes("wheel");
          if (
            ((this.isTouching =
              I.type === "touchstart" || I.type === "touchmove"),
            this.options.syncTouch &&
              E &&
              I.type === "touchstart" &&
              !this.isStopped &&
              !this.isLocked)
          )
            return void this.reset();
          let e1 = b === 0 && v === 0,
            M =
              (this.options.gestureOrientation === "vertical" && v === 0) ||
              (this.options.gestureOrientation === "horizontal" && b === 0);
          if (e1 || M) return;
          let a1 = I.composedPath();
          a1 = a1.slice(0, a1.indexOf(this.rootElement));
          let s1 = this.options.prevent;
          if (
            a1.find((T) => {
              var l1, g1, _1, y1, P1;
              return (
                T instanceof Element &&
                ((typeof s1 == "function" && s1?.(T)) ||
                  ((l1 = T.hasAttribute) === null || l1 === void 0
                    ? void 0
                    : l1.call(T, "data-lenis-prevent")) ||
                  (E &&
                    ((g1 = T.hasAttribute) === null || g1 === void 0
                      ? void 0
                      : g1.call(T, "data-lenis-prevent-touch"))) ||
                  ($ &&
                    ((_1 = T.hasAttribute) === null || _1 === void 0
                      ? void 0
                      : _1.call(T, "data-lenis-prevent-wheel"))) ||
                  (((y1 = T.classList) === null || y1 === void 0
                    ? void 0
                    : y1.contains("lenis")) &&
                    !(
                      !((P1 = T.classList) === null || P1 === void 0) &&
                      P1.contains("lenis-stopped")
                    )))
              );
            })
          )
            return;
          if (this.isStopped || this.isLocked) return void I.preventDefault();
          if (
            !((this.options.syncTouch && E) || (this.options.smoothWheel && $))
          )
            return (this.isScrolling = "native"), void this.animate.stop();
          I.preventDefault();
          let t1 = v;
          this.options.gestureOrientation === "both"
            ? (t1 = Math.abs(v) > Math.abs(b) ? v : b)
            : this.options.gestureOrientation === "horizontal" && (t1 = b);
          let p1 = E && this.options.syncTouch,
            l = E && I.type === "touchend" && Math.abs(t1) > 5;
          l && (t1 = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(
              this.targetScroll + t1,
              Object.assign(
                { programmatic: !1 },
                p1
                  ? { lerp: l ? this.options.syncTouchLerp : 1 }
                  : {
                      lerp: this.options.lerp,
                      duration: this.options.duration,
                      easing: this.options.easing,
                    }
              )
            );
        }),
        (this.onNativeScroll = () => {
          if (
            (clearTimeout(this.__resetVelocityTimeout),
            delete this.__resetVelocityTimeout,
            this.__preventNextNativeScrollEvent)
          )
            delete this.__preventNextNativeScrollEvent;
          else if (this.isScrolling === !1 || this.isScrolling === "native") {
            let V = this.animatedScroll;
            (this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.lastVelocity = this.velocity),
              (this.velocity = this.animatedScroll - V),
              (this.direction = Math.sign(this.animatedScroll - V)),
              (this.isScrolling = "native"),
              this.emit(),
              this.velocity !== 0 &&
                (this.__resetVelocityTimeout = setTimeout(() => {
                  (this.lastVelocity = this.velocity),
                    (this.velocity = 0),
                    (this.isScrolling = !1),
                    this.emit();
                }, 400));
          }
        }),
        (h.lenisVersion = "1.1.9"),
        (e && e !== document.documentElement && e !== document.body) || (e = h),
        (this.options = {
          wrapper: e,
          content: r,
          wheelEventsTarget: a,
          eventsTarget: i,
          smoothWheel: s,
          syncTouch: o,
          syncTouchLerp: c,
          touchInertiaMultiplier: m,
          duration: f,
          easing: C,
          lerp: y,
          infinite: g,
          gestureOrientation: x,
          orientation: u,
          touchMultiplier: N,
          wheelMultiplier: O,
          autoResize: S,
          prevent: w,
          virtualScroll: F,
          __experimental__naiveDimensions: H,
        }),
        (this.animate = new j1()),
        (this.emitter = new N1()),
        (this.dimensions = new q1({ wrapper: e, content: r, autoResize: S })),
        this.updateClassName(),
        (this.userData = {}),
        (this.time = 0),
        (this.velocity = this.lastVelocity = 0),
        (this.isLocked = !1),
        (this.isStopped = !1),
        (this.isScrolling = !1),
        (this.targetScroll = this.animatedScroll = this.actualScroll),
        this.options.wrapper.addEventListener(
          "scroll",
          this.onNativeScroll,
          !1
        ),
        this.options.wrapper.addEventListener(
          "pointerdown",
          this.onPointerDown,
          !1
        ),
        (this.virtualScroll = new z1(i, {
          touchMultiplier: N,
          wheelMultiplier: O,
        })),
        this.virtualScroll.on("scroll", this.onVirtualScroll);
    }
    destroy() {
      this.emitter.destroy(),
        this.options.wrapper.removeEventListener(
          "scroll",
          this.onNativeScroll,
          !1
        ),
        this.options.wrapper.removeEventListener(
          "pointerdown",
          this.onPointerDown,
          !1
        ),
        this.virtualScroll.destroy(),
        this.dimensions.destroy(),
        this.cleanUpClassName();
    }
    on(e, r) {
      return this.emitter.on(e, r);
    }
    off(e, r) {
      return this.emitter.off(e, r);
    }
    setScroll(e) {
      this.isHorizontal
        ? (this.rootElement.scrollLeft = e)
        : (this.rootElement.scrollTop = e);
    }
    resize() {
      this.dimensions.resize();
    }
    emit() {
      this.emitter.emit("scroll", this);
    }
    reset() {
      (this.isLocked = !1),
        (this.isScrolling = !1),
        (this.animatedScroll = this.targetScroll = this.actualScroll),
        (this.lastVelocity = this.velocity = 0),
        this.animate.stop();
    }
    start() {
      this.isStopped && ((this.isStopped = !1), this.reset());
    }
    stop() {
      this.isStopped ||
        ((this.isStopped = !0), this.animate.stop(), this.reset());
    }
    raf(e) {
      let r = e - (this.time || e);
      (this.time = e), this.animate.advance(0.001 * r);
    }
    scrollTo(
      e,
      {
        offset: r = 0,
        immediate: a = !1,
        lock: i = !1,
        duration: s = this.options.duration,
        easing: o = this.options.easing,
        lerp: c = this.options.lerp,
        onStart: m,
        onComplete: f,
        force: C = !1,
        programmatic: y = !0,
        userData: g = {},
      } = {}
    ) {
      if ((!this.isStopped && !this.isLocked) || C) {
        if (typeof e == "string" && ["top", "left", "start"].includes(e)) e = 0;
        else if (typeof e == "string" && ["bottom", "right", "end"].includes(e))
          e = this.limit;
        else {
          let u;
          if (
            (typeof e == "string"
              ? (u = document.querySelector(e))
              : e instanceof HTMLElement && e?.nodeType && (u = e),
            u)
          ) {
            if (this.options.wrapper !== h) {
              let N = this.rootElement.getBoundingClientRect();
              r -= this.isHorizontal ? N.left : N.top;
            }
            let x = u.getBoundingClientRect();
            e = (this.isHorizontal ? x.left : x.top) + this.animatedScroll;
          }
        }
        if (
          typeof e == "number" &&
          ((e += r),
          (e = Math.round(e)),
          this.options.infinite
            ? y && (this.targetScroll = this.animatedScroll = this.scroll)
            : (e = le(0, e, this.limit)),
          e !== this.targetScroll)
        ) {
          if (((this.userData = g), a))
            return (
              (this.animatedScroll = this.targetScroll = e),
              this.setScroll(this.scroll),
              this.reset(),
              this.preventNextNativeScrollEvent(),
              this.emit(),
              f?.(this),
              void (this.userData = {})
            );
          y || (this.targetScroll = e),
            this.animate.fromTo(this.animatedScroll, e, {
              duration: s,
              easing: o,
              lerp: c,
              onStart: () => {
                i && (this.isLocked = !0),
                  (this.isScrolling = "smooth"),
                  m?.(this);
              },
              onUpdate: (u, x) => {
                (this.isScrolling = "smooth"),
                  (this.lastVelocity = this.velocity),
                  (this.velocity = u - this.animatedScroll),
                  (this.direction = Math.sign(this.velocity)),
                  (this.animatedScroll = u),
                  this.setScroll(this.scroll),
                  y && (this.targetScroll = u),
                  x || this.emit(),
                  x &&
                    (this.reset(),
                    this.emit(),
                    f?.(this),
                    (this.userData = {}),
                    this.preventNextNativeScrollEvent());
              },
            });
        }
      }
    }
    preventNextNativeScrollEvent() {
      (this.__preventNextNativeScrollEvent = !0),
        requestAnimationFrame(() => {
          delete this.__preventNextNativeScrollEvent;
        });
    }
    get rootElement() {
      return this.options.wrapper === h
        ? document.documentElement
        : this.options.wrapper;
    }
    get limit() {
      return this.options.__experimental__naiveDimensions
        ? this.isHorizontal
          ? this.rootElement.scrollWidth - this.rootElement.clientWidth
          : this.rootElement.scrollHeight - this.rootElement.clientHeight
        : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
    }
    get isHorizontal() {
      return this.options.orientation === "horizontal";
    }
    get actualScroll() {
      return this.isHorizontal
        ? this.rootElement.scrollLeft
        : this.rootElement.scrollTop;
    }
    get scroll() {
      return this.options.infinite
        ? (function (r, a) {
            return ((r % a) + a) % a;
          })(this.animatedScroll, this.limit)
        : this.animatedScroll;
    }
    get progress() {
      return this.limit === 0 ? 1 : this.scroll / this.limit;
    }
    get isScrolling() {
      return this.__isScrolling;
    }
    set isScrolling(e) {
      this.__isScrolling !== e &&
        ((this.__isScrolling = e), this.updateClassName());
    }
    get isStopped() {
      return this.__isStopped;
    }
    set isStopped(e) {
      this.__isStopped !== e &&
        ((this.__isStopped = e), this.updateClassName());
    }
    get isLocked() {
      return this.__isLocked;
    }
    set isLocked(e) {
      this.__isLocked !== e && ((this.__isLocked = e), this.updateClassName());
    }
    get isSmooth() {
      return this.isScrolling === "smooth";
    }
    get className() {
      let e = "lenis";
      return (
        this.isStopped && (e += " lenis-stopped"),
        this.isLocked && (e += " lenis-locked"),
        this.isScrolling && (e += " lenis-scrolling"),
        this.isScrolling === "smooth" && (e += " lenis-smooth"),
        e
      );
    }
    updateClassName() {
      this.cleanUpClassName(),
        (this.rootElement.className =
          `${this.rootElement.className} ${this.className}`.trim());
    }
    cleanUpClassName() {
      this.rootElement.className = this.rootElement.className
        .replace(/lenis(-\w+)?/g, "")
        .trim();
    }
  };
function Z1(t) {
  let { intensity: e } = t,
    r = B(null);
  return (
    D(() => {
      r.current && r.current.scrollTo(0, { immediate: !0 });
    }, [r]),
    D(() => {
      let a = document.getElementById("overlay");
      if (a) {
        let i = () => {
            h.getComputedStyle(document.documentElement).overflow ===
              "hidden" && a.setAttribute("data-lenis-prevent", "true");
          },
          s = new MutationObserver((o) => {
            for (let c of o)
              c.type === "attributes" && c.attributeName === "style" && i();
          });
        return (
          s.observe(document.documentElement, {
            attributes: !0,
            attributeFilter: ["style"],
          }),
          i(),
          () => {
            s.disconnect();
          }
        );
      }
    }, []),
    D(() => {
      let a = document.getElementsByTagName("*");
      for (let i = 0; i < a.length; i++) {
        let s = a[i];
        h.getComputedStyle(s).getPropertyValue("overflow") === "auto" &&
          s.setAttribute("data-lenis-prevent", "true");
      }
    }, []),
    D(() => {
      r.current = new E1({ duration: e / 10 });
      let a = (i) => {
        r.current && (r.current.raf(i), requestAnimationFrame(a));
      };
      return (
        requestAnimationFrame(a),
        () => {
          r.current && (r.current.destroy(), (r.current = null));
        }
      );
    }, []),
    D(() => {
      let a = document.createElement("style");
      return (
        (a.textContent = `
html.lenis {
height: auto;
}
.lenis.lenis-smooth {

scroll-behavior: auto !important;
}
.lenis.lenis-smooth [data-lenis-prevent] {

overscroll-behavior: contain;
}
.lenis.lenis-stopped {

overflow: hidden;
}
.lenis.lenis-scrolling iframe {

pointer-events: none;
}
`),
        document.head.appendChild(a),
        () => {
          document.head.removeChild(a);
        }
      );
    }, []),
    D(() => {
      let a = [...document.querySelectorAll("a[href]")]
          .filter((o) => o.href.includes("#"))
          .map((o) => {
            let c = `#${o.href.split("#").pop()}`,
              m = decodeURIComponent(c),
              f = 0,
              C = document.querySelector(m);
            return (
              C && (f = parseInt(h.getComputedStyle(C).scrollMarginTop)),
              { href: c, scrollMargin: f, anchorElement: o }
            );
          }),
        i = (o, c, m) => {
          o.preventDefault(), r.current.scrollTo(c, { offset: -m });
        },
        s = a.map(
          ({ href: o, scrollMargin: c }) =>
            (m) =>
              i(m, o, c)
        );
      return (
        a.forEach(({ anchorElement: o }, c) => {
          o.addEventListener("click", s[c]);
        }),
        () => {
          a.forEach(({ anchorElement: o }, c) => {
            o.removeEventListener("click", s[c]);
          });
        }
      );
    }, [r]),
    n($1, {})
  );
}
Z1.displayName = "Smooth Scroll";
U(Z1, {
  intensity: {
    title: "Intensity",
    type: d.Number,
    defaultValue: 10,
    description:
      "More components at [Framer University](https://frameruni.link/cc).",
  },
});
var ke = i1(C1),
  Ve = { jcodxlUWJ: { hover: !0, pressed: !0 } },
  Se = ["AIAOqiS3b", "jcodxlUWJ"],
  Fe = "framer-Rqt1f",
  Re = { AIAOqiS3b: "framer-v-su2t3m", jcodxlUWJ: "framer-v-7rehkm" };
function ce(t, ...e) {
  let r = {};
  return e?.forEach((a) => a && Object.assign(r, t[a])), r;
}
var _e = { delay: 0, duration: 1.2, ease: [0.16, 1, 0.3, 1], type: "tween" },
  Ie = { bounce: 0.2, delay: 0, duration: 0.5, type: "spring" },
  Me = ({ value: t, children: e }) => {
    let r = Z(_),
      a = t ?? r.transition,
      i = A(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
    return n(_.Provider, { value: i, children: e });
  },
  Ue = p.create(R),
  Ne = { appear: "AIAOqiS3b", default: "jcodxlUWJ" },
  Ee = ({
    bgColor: t,
    height: e,
    iconColor: r,
    id: a,
    link: i,
    sVGCode: s,
    title: o,
    width: c,
    ...m
  }) => {
    var f, C, y, g, u, x;
    return {
      ...m,
      apBal1M_j: i ?? m.apBal1M_j,
      CLre6seVz:
        (f = t ?? m.CLre6seVz) !== null && f !== void 0 ? f : "rgb(0, 0, 0)",
      FaBRk7FNY:
        (C = s ?? m.FaBRk7FNY) !== null && C !== void 0
          ? C
          : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_967_124)"> <path d="M18 6.09674C18 6.0348 18.0246 5.97539 18.0684 5.93159L23.6013 0.398708C23.7484 0.251575 24 0.35578 24 0.563858V11.9033C24 11.9652 23.9754 12.0246 23.9316 12.0684L18 18V6.09674Z" fill="white"/> <path d="M6 18V6.56386C6 6.35578 5.74843 6.25158 5.60129 6.39871L0.0684074 11.9316C0.0246069 11.9754 0 12.0348 0 12.0967V23.7664C0 23.8954 0.104567 24 0.233557 24H11.9033C11.9652 24 12.0246 23.9754 12.0684 23.9316L18 18H6Z" fill="white"/> </g> <defs> <clipPath id="clip0_967_124"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg>',
      mbN7oYsAx:
        (y = r ?? m.mbN7oYsAx) !== null && y !== void 0
          ? y
          : "rgb(255, 255, 255)",
      variant:
        (u = (g = Ne[m.variant]) !== null && g !== void 0 ? g : m.variant) !==
          null && u !== void 0
          ? u
          : "AIAOqiS3b",
      Zg1jePVp4: (x = o ?? m.Zg1jePVp4) !== null && x !== void 0 ? x : "Label",
    };
  },
  Ae = (t, e) =>
    t.layoutDependency ? e.join("-") + t.layoutDependency : e.join("-"),
  Te = z(function (t, e) {
    let { activeLocale: r, setLocale: a } = G(),
      {
        style: i,
        className: s,
        layoutId: o,
        variant: c,
        CLre6seVz: m,
        mbN7oYsAx: f,
        FaBRk7FNY: C,
        Zg1jePVp4: y,
        apBal1M_j: g,
        ...u
      } = Ee(t),
      {
        baseVariant: x,
        classNames: N,
        clearLoadingGesture: O,
        gestureHandlers: S,
        gestureVariant: w,
        isLoading: F,
        setGestureState: H,
        setVariant: V,
        variants: b,
      } = Y({
        cycleOrder: Se,
        defaultVariant: "AIAOqiS3b",
        enabledGestures: Ve,
        variant: c,
        variantClassNames: Re,
      }),
      v = Ae(t, b),
      { activeVariantCallback: I, delay: E } = o1(x),
      $ = I(async (...t1) => {
        await E(() => V("jcodxlUWJ"), 10);
      });
    M1(x, { default: $, jcodxlUWJ: void 0 });
    let e1 = B(null),
      M = X(),
      a1 = [],
      s1 = J();
    return n(j, {
      id: o ?? M,
      children: n(Ue, {
        animate: b,
        initial: !1,
        children: n(Me, {
          value: _e,
          ...ce({ jcodxlUWJ: { value: Ie } }, x, w),
          children: n(I1, {
            href: g,
            nodeId: "AIAOqiS3b",
            openInNewTab: !0,
            children: P(p.a, {
              ...u,
              ...S,
              className: `${W(
                Fe,
                ...a1,
                "framer-su2t3m",
                s,
                N
              )} framer-187c5k3`,
              "data-framer-name": "appear",
              "data-highlight": !0,
              layoutDependency: v,
              layoutId: "AIAOqiS3b",
              ref: e ?? e1,
              style: { ...i },
              ...ce(
                {
                  "jcodxlUWJ-hover": {
                    "data-framer-name": void 0,
                    "data-highlight": void 0,
                  },
                  "jcodxlUWJ-pressed": {
                    "data-framer-name": void 0,
                    "data-highlight": void 0,
                  },
                  jcodxlUWJ: {
                    "data-framer-name": "default",
                    "data-highlight": void 0,
                  },
                },
                x,
                w
              ),
              children: [
                n(p.div, {
                  className: "framer-vgd1v1",
                  "data-framer-name": "symbol-wrapper",
                  layoutDependency: v,
                  layoutId: "D8tTNidq2",
                  style: {
                    backgroundColor: m,
                    borderBottomLeftRadius: 40,
                    borderBottomRightRadius: 40,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    scale: 0.7,
                  },
                  variants: {
                    "jcodxlUWJ-hover": { scale: 1.1 },
                    "jcodxlUWJ-pressed": { scale: 0.9 },
                    jcodxlUWJ: { scale: 1 },
                  },
                  children: n(q, {
                    children: n(p.div, {
                      className: "framer-hz03fp-container",
                      layoutDependency: v,
                      layoutId: "JbX03pMtE-container",
                      style: { scale: 1 },
                      variants: {
                        "jcodxlUWJ-hover": { scale: 1.2 },
                        "jcodxlUWJ-pressed": { scale: 0.7 },
                      },
                      children: n(C1, {
                        customColor: f,
                        customPadding: 40,
                        customStrokeWidth: 2,
                        customSvgCode: C,
                        description: "",
                        height: "100%",
                        id: "JbX03pMtE",
                        layoutId: "JbX03pMtE",
                        lineCap: "butt",
                        lineJoin: "miter",
                        style: { height: "100%", width: "100%" },
                        title: "",
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                n(r1, {
                  __fromCanvasComponent: !0,
                  children: n(R, {
                    children: n(p.p, {
                      style: {
                        "--framer-text-alignment": "center",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                      },
                      children: "Label trop long",
                    }),
                  }),
                  className: "framer-4ngxm5",
                  "data-framer-name": "Line:1",
                  fonts: ["Inter"],
                  layoutDependency: v,
                  layoutId: "sGBNzqD1t",
                  style: {
                    "--extracted-r6o4lv": "rgb(255, 255, 255)",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  text: y,
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
  De = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-Rqt1f.framer-187c5k3, .framer-Rqt1f .framer-187c5k3 { display: block; }",
    ".framer-Rqt1f.framer-su2t3m { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-Rqt1f .framer-vgd1v1 { flex: none; height: 160px; overflow: visible; position: relative; width: 160px; z-index: 0; }",
    ".framer-Rqt1f .framer-hz03fp-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 160px); left: 0px; position: absolute; right: 0px; top: 0px; }",
    ".framer-Rqt1f .framer-4ngxm5 { flex: none; height: 22px; position: relative; white-space: pre-wrap; width: 160px; word-break: break-word; word-wrap: break-word; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Rqt1f.framer-su2t3m { gap: 0px; } .framer-Rqt1f.framer-su2t3m > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-Rqt1f.framer-su2t3m > :first-child { margin-top: 0px; } .framer-Rqt1f.framer-su2t3m > :last-child { margin-bottom: 0px; } }",
    ".framer-Rqt1f.framer-v-7rehkm.framer-su2t3m { cursor: pointer; }",
  ],
  x1 = K(Te, De, "framer-Rqt1f"),
  f1 = x1;
x1.displayName = "chip";
x1.defaultProps = { height: 190, width: 160 };
U(x1, {
  variant: {
    options: ["AIAOqiS3b", "jcodxlUWJ"],
    optionTitles: ["appear", "default"],
    title: "Variant",
    type: d.Enum,
  },
  CLre6seVz: { defaultValue: "rgb(0, 0, 0)", title: "bg-color", type: d.Color },
  mbN7oYsAx: {
    defaultValue: "rgb(255, 255, 255)",
    title: "icon-color",
    type: d.Color,
  },
  FaBRk7FNY: {
    defaultValue:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_967_124)"> <path d="M18 6.09674C18 6.0348 18.0246 5.97539 18.0684 5.93159L23.6013 0.398708C23.7484 0.251575 24 0.35578 24 0.563858V11.9033C24 11.9652 23.9754 12.0246 23.9316 12.0684L18 18V6.09674Z" fill="white"/> <path d="M6 18V6.56386C6 6.35578 5.74843 6.25158 5.60129 6.39871L0.0684074 11.9316C0.0246069 11.9754 0 12.0348 0 12.0967V23.7664C0 23.8954 0.104567 24 0.233557 24H11.9033C11.9652 24 12.0246 23.9754 12.0684 23.9316L18 18H6Z" fill="white"/> </g> <defs> <clipPath id="clip0_967_124"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg>',
    displayTextArea: !1,
    title: "SVG Code",
    type: d.String,
  },
  Zg1jePVp4: {
    defaultValue: "Label",
    displayTextArea: !1,
    title: "Title",
    type: d.String,
  },
  apBal1M_j: { title: "Link", type: d.Link },
});
Q(
  x1,
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
      ],
    },
    ...ke,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Be = i1(f1),
  Pe = ["gc94Brjjk", "ldOtSuNLp"],
  Oe = "framer-qL0Lh",
  He = { gc94Brjjk: "framer-v-1uytkr9", ldOtSuNLp: "framer-v-beizj2" };
function de(t, ...e) {
  let r = {};
  return e?.forEach((a) => a && Object.assign(r, t[a])), r;
}
var We = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  je = { bounce: 0.2, delay: 0, duration: 1, type: "spring" },
  qe = ({ value: t, children: e }) => {
    let r = Z(_),
      a = t ?? r.transition,
      i = A(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
    return n(_.Provider, { value: i, children: e });
  },
  ze = p.create(R),
  Ze = { "Variant 1": "gc94Brjjk", "Variant 2": "ldOtSuNLp" },
  Xe = ({ click: t, height: e, id: r, width: a, ...i }) => {
    var s, o;
    return {
      ...i,
      bYwI8yM7s: t ?? i.bYwI8yM7s,
      variant:
        (o = (s = Ze[i.variant]) !== null && s !== void 0 ? s : i.variant) !==
          null && o !== void 0
          ? o
          : "gc94Brjjk",
    };
  },
  Ge = (t, e) =>
    t.layoutDependency ? e.join("-") + t.layoutDependency : e.join("-"),
  Je = z(function (t, e) {
    let { activeLocale: r, setLocale: a } = G(),
      {
        style: i,
        className: s,
        layoutId: o,
        variant: c,
        bYwI8yM7s: m,
        ...f
      } = Xe(t),
      {
        baseVariant: C,
        classNames: y,
        clearLoadingGesture: g,
        gestureHandlers: u,
        gestureVariant: x,
        isLoading: N,
        setGestureState: O,
        setVariant: S,
        variants: w,
      } = Y({
        cycleOrder: Pe,
        defaultVariant: "gc94Brjjk",
        variant: c,
        variantClassNames: He,
      }),
      F = Ge(t, w),
      { activeVariantCallback: H, delay: V } = o1(C),
      b = H(async (...e1) => {
        if ((O({ isPressed: !1 }), m && (await m(...e1)) === !1)) return !1;
      }),
      v = B(null),
      I = X(),
      E = [],
      $ = J();
    return n(j, {
      id: o ?? I,
      children: n(ze, {
        animate: w,
        initial: !1,
        children: n(qe, {
          value: We,
          ...de({ ldOtSuNLp: { value: je } }, C, x),
          children: n(p.div, {
            ...f,
            ...u,
            className: W(Oe, ...E, "framer-1uytkr9", s, y),
            "data-framer-name": "Variant 1",
            "data-highlight": !0,
            layoutDependency: F,
            layoutId: "gc94Brjjk",
            onTap: b,
            ref: e ?? v,
            style: { ...i },
            ...de({ ldOtSuNLp: { "data-framer-name": "Variant 2" } }, C, x),
            children: P(p.div, {
              className: "framer-1c7dgqi",
              layoutDependency: F,
              layoutId: "IPDkDlbxF",
              children: [
                n(q, {
                  height: 190,
                  children: n(p.div, {
                    className: "framer-130ul3i-container",
                    layoutDependency: F,
                    layoutId: "uInvObeMV-container",
                    children: n(f1, {
                      apBal1M_j: "https://t.me/lilfrog_eth",
                      CLre6seVz: "rgb(255, 255, 255)",
                      FaBRk7FNY:
                        '<svg width="172" height="172" viewBox="0 0 172 172" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9779 76.152C55.4457 55.988 81.0543 42.5896 93.9136 36.0894C130.513 17.6499 138.207 14.4662 143.152 14.3335C144.252 14.3335 146.669 14.5988 148.318 16.1907C149.637 17.5173 149.967 19.2418 150.187 20.5684C150.406 21.895 150.626 24.6808 150.406 26.8033C148.428 52.0083 139.855 113.163 135.459 141.287C133.59 153.226 129.963 157.206 126.446 157.604C118.753 158.4 112.928 151.502 105.564 145.665C93.9136 136.511 87.429 130.807 76.1085 121.786C63.0294 111.439 71.4923 105.735 78.9661 96.4486C80.9444 94.0608 114.686 56.9166 115.346 53.6002C115.456 53.2022 115.456 51.6103 114.686 50.8144C113.917 50.0184 112.818 50.2837 111.939 50.5491C110.73 50.8144 92.265 65.672 56.325 94.9894C51.0494 99.3671 46.3234 101.49 42.037 101.357C37.3109 101.224 28.2984 98.1732 21.4841 95.52C13.241 92.3362 6.64655 90.6117 7.19609 85.0401C7.52581 82.1216 10.8231 79.2031 16.9779 76.152Z" fill="white" fill-opacity="0.95"/> </svg>',
                      height: "100%",
                      id: "uInvObeMV",
                      layoutId: "uInvObeMV",
                      mbN7oYsAx: "rgb(24, 168, 240)",
                      variant: "AIAOqiS3b",
                      width: "100%",
                      Zg1jePVp4: "Telegram",
                    }),
                  }),
                }),
                n(q, {
                  height: 190,
                  children: n(p.div, {
                    className: "framer-1dk6i16-container",
                    layoutDependency: F,
                    layoutId: "r2nSwv0Dp-container",
                    children: n(f1, {
                      apBal1M_j: "https://x.com/RealLilFrog",
                      CLre6seVz: "rgb(0, 0, 0)",
                      FaBRk7FNY:
                        '<svg width="172" height="172" viewBox="0 0 172 172" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M130.746 16.125H154.453L102.66 75.3217L163.591 155.875H115.882L78.5154 107.02L35.759 155.875H12.0374L67.4357 92.5575L8.98438 16.125H57.904L91.6806 60.7805L130.746 16.125ZM122.426 141.685H135.562L50.766 29.5697H36.6692L122.426 141.685Z" fill="white" fill-opacity="0.95"/> </svg>',
                      height: "100%",
                      id: "r2nSwv0Dp",
                      layoutId: "r2nSwv0Dp",
                      mbN7oYsAx: "rgb(255, 255, 255)",
                      variant: "AIAOqiS3b",
                      width: "100%",
                      Zg1jePVp4: "X",
                    }),
                  }),
                }),
                n(q, {
                  height: 190,
                  children: n(p.div, {
                    className: "framer-sd4w48-container",
                    layoutDependency: F,
                    layoutId: "Ka0cPb1W5-container",
                    children: n(f1, {
                      apBal1M_j:
                        "https://dexscreener.com/ethereum/0x5079820198de910d56d16465295f53256c7afb45",
                      CLre6seVz: "rgb(20, 20, 20)",
                      FaBRk7FNY:
                        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0388 8.54928C14.7741 8.1832 15.7096 7.64432 16.6463 6.906C16.8438 7.31552 16.8655 7.67288 16.7637 7.96144C16.6916 8.1648 16.5557 8.34168 16.377 8.4824C16.1836 8.63448 15.9419 8.7452 15.6748 8.80504C15.1679 8.91904 14.5762 8.85248 14.0388 8.54928ZM14.1663 12.3002L15.1396 12.8615C13.1523 13.9737 12.612 16.0388 11.9702 18.0502C11.3285 16.0388 10.7882 13.9737 8.80097 12.8615L9.77428 12.3002C9.86844 12.2646 9.94891 12.2003 10.0042 12.1163C10.0594 12.0323 10.0867 11.933 10.0819 11.8326C9.99277 9.9488 10.5022 9.11576 11.1893 8.59272C11.4358 8.40536 11.7048 8.31128 11.9702 8.31128C12.2357 8.31128 12.5047 8.40536 12.7513 8.59272C13.4384 9.11576 13.9478 9.9488 13.8586 11.8326C13.8539 11.933 13.8811 12.0323 13.9364 12.1163C13.9916 12.2003 14.0721 12.2646 14.1663 12.3002ZM11.9702 0C13.0953 0.03016 14.2232 0.24824 15.202 0.67248C15.8798 0.96664 16.5123 1.3552 17.085 1.81984C17.3436 2.0296 17.5566 2.23224 17.7912 2.46552C18.4239 2.48736 19.3486 1.78552 19.7779 1.1288C19.0391 3.5472 15.6677 6.40312 13.3337 7.49592C13.3328 7.49552 13.3321 7.49496 13.3314 7.49448C12.9125 7.17512 12.4414 7.01544 11.9702 7.01544C11.499 7.01544 11.028 7.17512 10.6091 7.49448C10.6084 7.49488 10.6078 7.4956 10.6068 7.49592C8.27274 6.40312 4.90149 3.5472 4.16269 1.1288C4.5919 1.78552 5.51658 2.48736 6.14929 2.46552C6.38397 2.23232 6.59693 2.0296 6.85548 1.81984C7.42818 1.3552 8.06066 0.96664 8.73848 0.67248C9.7174 0.24824 10.8453 0.03016 11.9702 0ZM9.90168 8.54928C9.16649 8.1832 8.23083 7.64432 7.29422 6.906C7.09672 7.31552 7.07509 7.67288 7.17676 7.96144C7.24895 8.1648 7.38484 8.34168 7.56343 8.4824C7.757 8.63448 7.99864 8.7452 8.26577 8.80504C8.77261 8.91904 9.3643 8.85248 9.90168 8.54928Z" fill="black"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6722 6.00128C18.1879 5.48168 18.6422 4.90656 19.0076 4.39336L19.1931 4.74208C19.7905 5.93544 20.1009 7.124 20.1009 8.4616L20.0996 10.5842L20.1108 11.6845C20.1541 14.3858 20.7395 17.1188 22.0655 19.6199L19.2911 17.3862L17.3281 20.5669L15.2658 18.6284L11.9702 23.9683L8.6747 18.6285L6.61247 20.567L4.64943 17.3862L1.875 19.62C3.201 17.1189 3.78636 14.3858 3.82971 11.6846L3.84093 10.5842L3.83965 8.46168C3.83965 7.124 4.14995 5.93544 4.7475 4.74216L4.93298 4.39344C5.29833 4.90664 5.75261 5.48168 6.26835 6.00136L6.10731 6.33536C5.79444 6.98408 5.69084 7.70944 5.93457 8.39928C6.09168 8.8436 6.37844 9.22464 6.74812 9.51552C7.10706 9.798 7.53186 9.9884 7.97661 10.0884C8.26633 10.1535 8.56149 10.1803 8.85473 10.1712C8.78631 10.5585 8.75643 10.9602 8.7545 11.3694L6.13743 12.8787L8.15696 14.009C8.31838 14.0994 8.47204 14.2029 8.61637 14.3186C10.2814 15.8112 11.2824 20.227 11.9703 22.3838C12.6583 20.227 13.6593 15.8112 15.3243 14.3186C15.4687 14.2029 15.6223 14.0994 15.7838 14.009L17.8033 12.8787L15.1861 11.3694C15.1842 10.9602 15.1543 10.5585 15.0859 10.1712C15.3791 10.1803 15.6743 10.1535 15.964 10.0884C16.4088 9.9884 16.8337 9.798 17.1925 9.51552C17.5621 9.22464 17.8489 8.8436 18.006 8.39928C18.2498 7.70944 18.1461 6.98416 17.8333 6.33536L17.6722 6.00128Z" fill="black"/> </svg>',
                      height: "100%",
                      id: "Ka0cPb1W5",
                      layoutId: "Ka0cPb1W5",
                      mbN7oYsAx: "rgb(255, 255, 255)",
                      variant: "AIAOqiS3b",
                      width: "100%",
                      Zg1jePVp4: "DEXScrenner",
                    }),
                  }),
                }),
                n(q, {
                  height: 190,
                  children: n(p.div, {
                    className: "framer-ys7y4s-container",
                    layoutDependency: F,
                    layoutId: "ocrvslG6I-container",
                    children: n(f1, {
                      apBal1M_j: "https://www.dextools.io/app/en/ether/pair-explorer/0x5079820198de910d56d16465295f53256c7afb45?t=1738618829791",
                      CLre6seVz: "rgb(18, 162, 198)",
                      FaBRk7FNY:
                        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_1768_499)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.28366 1.35558C7.8499 2.09953 6.67689 2.72906 6.67714 2.75466C6.67778 2.82075 10.1182 4.55629 10.2403 4.55206C10.2959 4.55021 10.6988 4.36545 11.1357 4.14153L11.9302 3.73448L12.7979 4.17875L13.6656 4.6231L15.0866 3.9871C17.2277 3.02874 17.45 2.92372 17.4152 2.88844C17.3689 2.84163 16.601 2.43068 14.5174 1.33805C13.5105 0.809969 12.5331 0.292204 12.3455 0.187434C12.1579 0.0826645 11.9788 -0.00161575 11.9475 1.56615e-05C11.9162 0.00164707 10.7174 0.611656 9.28366 1.35558ZM2.99522 4.59921L1.50269 5.36713V8.7374C1.50269 10.5911 1.52229 12.1076 1.54633 12.1076C1.57029 12.1076 2.30461 11.7906 3.17812 11.403L4.76634 10.6984V7.14595L5.54244 7.56713C6.14049 7.89139 6.73891 8.21499 7.33768 8.53793L8.35679 9.08755L8.81028 8.88329C9.09468 8.75498 9.37852 8.62543 9.66177 8.49463C9.88066 8.39309 10.418 8.15203 10.8558 7.95883C11.2936 7.76555 11.6988 7.57119 11.7563 7.5269C11.8326 7.46806 10.9018 6.95568 8.31341 5.6317C6.36232 4.63369 4.70338 3.82031 4.62687 3.82421C4.55037 3.8281 3.81612 4.17681 2.99522 4.59921ZM17.6842 4.81486C16.6677 5.27196 15.8353 5.66421 15.8343 5.68658C15.8334 5.70893 16.3875 6.03706 17.0656 6.41566C17.7436 6.79434 18.2984 7.12441 18.2984 7.14927C18.2984 7.17407 17.6984 7.46366 16.9651 7.79293C16.2318 8.12211 14.3781 8.95596 12.8458 9.64593L7.71155 11.9576C6.42003 12.5392 5.25588 13.0633 5.12455 13.1226C2.48655 14.3121 1.76147 14.6422 1.66189 14.6988C1.56177 14.7559 1.53909 15.0873 1.52126 16.7506L1.5 18.7344L2.83468 19.4118L4.16934 20.0891L6.02004 19.2572C7.03796 18.7996 7.87075 18.4013 7.87075 18.372C7.87075 18.3427 7.68265 18.2206 7.45286 18.1006C7.22295 17.9805 6.74837 17.7147 6.39813 17.5098C6.04791 17.3049 5.6987 17.1169 5.62203 17.092C5.54538 17.0671 5.48378 17.0236 5.48503 16.9952C5.48631 16.967 6.30128 16.5814 7.29596 16.1383C9.22795 15.2779 10.7065 14.6147 13.8806 13.1849C15.3 12.5457 16.7195 11.9069 18.1392 11.2684C19.387 10.7075 20.8377 10.0523 21.3631 9.81247L22.3183 9.3765L22.3395 7.37012L22.3609 5.36381L21.0072 4.67171C20.2626 4.29109 19.6262 3.9806 19.5928 3.98173C19.5595 3.98278 18.7006 4.35765 17.6842 4.81486ZM21.9556 12.0531C21.7561 12.1502 21.3621 12.3319 21.08 12.4569C20.7979 12.5819 20.2626 12.8225 19.8904 12.9916L19.2138 13.299L19.1984 15.0605C19.1899 16.0292 19.1541 16.8176 19.1188 16.8124C19.0387 16.8006 17.7706 16.1528 16.4959 15.4724C15.5759 14.9814 15.5181 14.9619 15.3019 15.0685C15.1769 15.1302 14.4298 15.4639 13.6418 15.8103C12.8537 16.1565 12.1833 16.4625 12.1518 16.4902C12.1203 16.5178 13.7064 17.3741 15.6764 18.3931L19.2582 20.2458L20.7883 19.4574C21.6297 19.0238 22.3453 18.6283 22.3782 18.5786C22.4524 18.4667 22.446 11.8613 22.3718 11.8702C22.3424 11.8737 22.1551 11.9561 21.9556 12.0531ZM13.4826 19.8062C13.2172 19.9199 12.9519 20.0337 12.6866 20.1477C11.8856 20.4929 12.0426 20.5043 11.0896 20.0318C10.4548 19.717 10.1812 19.6199 10.0625 19.6671C9.9734 19.7024 9.20677 20.046 8.35871 20.4305C7.51071 20.8151 6.78746 21.1297 6.75148 21.1297C6.39569 21.1297 6.98719 21.4817 9.26967 22.6285L11.9465 23.9734L13.0727 23.4196C13.6922 23.1149 14.9416 22.5049 15.8493 22.064C16.7569 21.623 17.4883 21.2507 17.4746 21.2367C17.4608 21.2227 16.7003 20.8337 15.7845 20.3722L14.1194 19.5334L13.4826 19.8062Z" fill="black"/> </g> <defs> <clipPath id="clip0_1768_499"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg>',
                      height: "100%",
                      id: "ocrvslG6I",
                      layoutId: "ocrvslG6I",
                      mbN7oYsAx: "rgb(28, 40, 43)",
                      variant: "AIAOqiS3b",
                      width: "100%",
                      Zg1jePVp4: "DEXTools",
                    }),
                  }),
                }),
                n(q, {
                  height: 190,
                  children: n(p.div, {
                    className: "framer-env0hf-container",
                    layoutDependency: F,
                    layoutId: "dFa7wj1Xw-container",
                    children: n(f1, {
                      apBal1M_j:
                        "https://app.uniswap.org/swap?outputCurrency=0x854bB9fbd2f4F72B4C61d1e673486baECfd93319&chain=ethereum",
                      CLre6seVz: "rgb(255, 207, 229)",
                      FaBRk7FNY:
                        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.61654 0.61068C4.10581 3.60681 6.01724 5.29033 6.9341 6.09786C7.24657 6.37308 7.44353 6.54656 7.50847 6.63556C7.71939 6.92471 7.64 7.18465 7.27866 7.38838C7.07771 7.50165 6.66459 7.61641 6.45774 7.61641C6.22379 7.61641 6.14347 7.52691 6.14347 7.52691C6.12702 7.51144 6.11144 7.49817 6.09552 7.48461C5.98017 7.38638 5.84691 7.27288 5.23481 6.1954C4.2677 4.70722 3.45835 3.4727 3.43627 3.45204C3.38522 3.40424 3.38609 3.40585 5.1362 6.51122C5.36107 7.02594 5.26385 7.28158 5.21462 7.41105C5.20194 7.44438 5.19245 7.46935 5.19245 7.48823C5.19245 7.67576 5.14086 7.77432 4.90758 8.03235C4.51871 8.46257 4.34488 8.94597 4.21939 9.9464C4.07871 11.0678 3.68315 11.86 2.58688 13.2159C1.94518 14.0096 1.84018 14.155 1.67825 14.4749C1.4743 14.8777 1.41822 15.1033 1.39549 15.612C1.37147 16.1498 1.41826 16.4973 1.58395 17.0115C1.729 17.4616 1.88042 17.7589 2.2675 18.3535C2.60154 18.8666 2.79389 19.2479 2.79389 19.397C2.79389 19.5157 2.81674 19.5158 3.33436 19.4C4.57312 19.1225 5.57899 18.6346 6.14471 18.0368C6.49482 17.6666 6.57702 17.4623 6.57969 16.9551C6.58144 16.6234 6.56967 16.554 6.47925 16.3631C6.33206 16.0525 6.06411 15.7943 5.47354 15.3939C4.69971 14.8693 4.36921 14.447 4.27791 13.8662C4.20303 13.3896 4.2899 13.0534 4.71798 12.1636C5.16107 11.2427 5.27087 10.8502 5.34515 9.92189C5.39312 9.32215 5.45956 9.08562 5.63332 8.89576C5.81454 8.69779 5.97769 8.63074 6.42619 8.56997C7.15736 8.47091 7.62294 8.28332 8.00564 7.93359C8.33764 7.6302 8.47656 7.33787 8.49789 6.8978L8.51407 6.56424L8.32854 6.34974C7.65667 5.57287 1.1666 0 1.12526 0C1.11642 0 1.33751 0.274825 1.61654 0.61068ZM3.17103 16.2206C3.32294 15.9538 3.24223 15.6108 2.98814 15.4432C2.74805 15.2849 2.3751 15.3595 2.3751 15.5659C2.3751 15.6288 2.41019 15.6746 2.48931 15.715C2.62253 15.7829 2.63219 15.8594 2.52739 16.0156C2.42123 16.1738 2.4298 16.3129 2.55155 16.4075C2.74778 16.5599 3.02556 16.476 3.17103 16.2206Z" fill="black"/> <path d="M7.74329 1.67214C7.44355 1.62603 7.43091 1.62062 7.57197 1.59913C7.84228 1.5579 8.48057 1.61409 8.92041 1.71781C9.94726 1.95986 10.8816 2.57993 11.879 3.68118L12.144 3.97375L12.5231 3.91332C14.1199 3.65883 15.7445 3.86109 17.1033 4.48357C17.477 4.65482 18.0664 4.99571 18.1401 5.08331C18.1635 5.11123 18.2066 5.29094 18.2358 5.48271C18.3367 6.14616 18.2861 6.6547 18.0815 7.03452C17.9703 7.24121 17.964 7.30671 18.0389 7.4836C18.0986 7.62475 18.2652 7.72923 18.4302 7.729C18.7679 7.72855 19.1313 7.18725 19.2997 6.43406L19.3666 6.13488L19.4991 6.28373C20.226 7.1004 20.7968 8.21413 20.8949 9.00688L20.9204 9.21358L20.7983 9.02567C20.588 8.70233 20.3768 8.48222 20.1062 8.3047C19.6185 7.9847 19.1029 7.87579 17.7373 7.80443C16.5039 7.73998 15.8059 7.6355 15.1137 7.41168C13.936 7.03091 13.3424 6.5238 11.9435 4.70371C11.3222 3.89529 10.9381 3.448 10.5561 3.08779C9.68807 2.26933 8.83513 1.84009 7.74329 1.67214Z" fill="black"/> <path d="M18.4182 3.47716C18.4493 2.93544 18.5233 2.57813 18.6723 2.25182C18.7312 2.12266 18.7865 2.01695 18.795 2.01695C18.8035 2.01695 18.7779 2.11228 18.738 2.22878C18.6298 2.54547 18.6119 2.97863 18.6866 3.48257C18.7812 4.12201 18.835 4.21427 19.5166 4.90499C19.8363 5.22897 20.208 5.63758 20.3428 5.81301L20.5879 6.13199L20.3428 5.90402C20.0432 5.62525 19.3539 5.08158 19.2016 5.00387C19.0995 4.95174 19.0844 4.95264 19.0214 5.0148C18.9634 5.07207 18.9511 5.15813 18.943 5.56498C18.9306 6.19907 18.8434 6.60606 18.6331 7.01302C18.5193 7.23313 18.5013 7.18616 18.6043 6.93771C18.6812 6.75221 18.689 6.67067 18.6884 6.05682C18.6872 4.82347 18.5395 4.52697 17.6736 4.01904C17.4544 3.89035 17.0929 3.70479 16.8706 3.60663C16.6481 3.50847 16.4715 3.42298 16.4779 3.41658C16.5025 3.39239 17.3469 3.63681 17.6868 3.76646C18.1924 3.95932 18.2757 3.98431 18.3372 3.96105C18.3784 3.94546 18.3983 3.82658 18.4182 3.47716Z" fill="black"/> <path d="M7.42204 2.53029C7.34053 3.4825 7.71703 4.75629 8.32553 5.58708C8.79725 6.23109 9.52847 6.73154 10.0683 6.77987C10.4218 6.81151 10.528 6.70178 10.3681 6.47021C10.1461 6.14868 9.87302 5.65359 9.80077 5.44164C9.75587 5.30996 9.65833 4.921 9.58398 4.57729C9.33015 3.40384 9.08066 2.94687 8.50436 2.59978C8.29435 2.47329 7.84586 2.30774 7.58576 2.26069L7.44724 2.23562L7.42204 2.53029Z" fill="black"/> <path d="M17.6802 11.7703C14.8365 10.6347 13.8348 9.64916 13.8348 7.98621C13.8348 7.74148 13.8434 7.54124 13.8537 7.54124C13.864 7.54124 13.9741 7.622 14.0982 7.72073C14.6749 8.17941 15.3206 8.3753 17.1082 8.63393C18.1602 8.78614 18.7522 8.90906 19.2983 9.08866C21.0339 9.6595 22.1078 10.818 22.3639 12.3959C22.4383 12.8543 22.3946 13.7141 22.274 14.1673C22.1788 14.5251 21.8881 15.1703 21.811 15.1951C21.7897 15.2019 21.7687 15.1207 21.7632 15.0101C21.7339 14.4177 21.432 13.8408 20.925 13.4087C20.3485 12.9175 19.574 12.5264 17.6802 11.7703Z" fill="black"/> <path d="M15.5465 11.6452C15.5864 11.7632 15.6481 12.0316 15.6838 12.242C15.9115 13.5862 15.1999 14.6723 13.8158 15.0932C13.6693 15.1378 13.092 15.2497 12.5331 15.3421C11.4016 15.5289 10.8966 15.6612 10.3893 15.9035C10.0295 16.0754 9.59395 16.3329 9.61984 16.3584C9.62817 16.3667 9.7103 16.3473 9.80228 16.3152C10.442 16.0924 11.154 15.9771 12.2359 15.9213C12.6651 15.8992 13.1534 15.8639 13.3209 15.8431C14.2846 15.7226 14.9525 15.4323 15.4719 14.908C15.761 14.6163 15.9333 14.3446 16.0722 13.9612C16.1601 13.7182 16.1721 13.6279 16.1728 13.1971C16.1735 12.7583 16.1628 12.678 16.0675 12.4079C15.9425 12.0541 15.7951 11.7885 15.6086 11.5809L15.4739 11.4308L15.5465 11.6452Z" fill="black"/> <path d="M16.9874 14.5378C16.6095 13.7324 16.5227 12.9547 16.7297 12.2294C16.752 12.1519 16.7875 12.0885 16.809 12.0885C16.8304 12.0885 16.9196 12.1363 17.0071 12.1946C17.1812 12.3109 17.5303 12.5066 18.4606 13.0096C19.6215 13.6373 20.2834 14.1233 20.7336 14.6786C21.1278 15.1649 21.3717 15.7188 21.4891 16.3942C21.5556 16.7768 21.5166 17.6973 21.4176 18.0826C21.1055 19.2972 20.3801 20.2513 19.3455 20.8081C19.1938 20.8896 19.0577 20.9566 19.043 20.9569C19.0283 20.9572 19.0835 20.8179 19.1658 20.6474C19.5138 19.9259 19.5534 19.224 19.2903 18.4428C19.1291 17.9644 18.8007 17.3808 18.1373 16.3944C17.3662 15.2474 17.1771 14.9423 16.9874 14.5378Z" fill="black"/> <path d="M9.87039 17.1796C8.67434 17.3723 7.36131 18.0001 6.30603 18.8837L5.99184 19.1468L6.26795 19.1895C7.7088 19.4126 8.09679 19.6104 9.09622 20.6314C9.67139 21.2188 9.86563 21.3496 10.3427 21.4704C11.0434 21.6478 11.7341 21.3218 11.971 20.702C12.0768 20.425 12.0627 19.9664 11.9413 19.7361C11.6523 19.1878 10.8108 19.0105 10.4039 19.4122C10.0649 19.7468 10.1637 20.2508 10.5852 20.3375C10.6818 20.3573 10.679 20.3532 10.5606 20.3001C10.3761 20.2173 10.296 20.1026 10.295 19.9201C10.2926 19.4921 10.7865 19.2518 11.2459 19.4573C11.5824 19.6079 11.716 19.8047 11.716 20.1494C11.716 20.6805 11.2602 21.0806 10.7299 21.0152C10.4464 20.9801 10.0997 20.8004 9.91379 20.5919C9.44604 20.0674 9.62825 19.2397 10.2813 18.9221C10.7785 18.6804 11.4394 18.7401 11.9519 19.0728C12.5407 19.4553 12.7911 19.8047 13.2984 20.9519C13.4635 21.3253 13.6759 21.7457 13.7705 21.8861C14.2508 22.5994 14.8265 22.9491 15.5199 22.9491C15.9023 22.9491 16.19 22.8799 16.5518 22.7006C16.8208 22.5674 17.202 22.3143 17.1746 22.2873C17.1667 22.2795 17.0551 22.3139 16.9267 22.3636C16.1697 22.6564 15.4001 22.6363 14.9531 22.3119C14.6717 22.1076 14.4447 21.7008 14.3279 21.192C14.3078 21.104 14.2411 20.7149 14.1798 20.3276C14.0244 19.3457 13.8752 18.9044 13.5274 18.398C13.1713 17.8798 12.487 17.4449 11.7218 17.2508C11.2445 17.1296 10.3858 17.0966 9.87039 17.1796Z" fill="black"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.19529 9.58856C8.29857 9.21027 8.63225 8.8495 8.9755 8.74495C9.19377 8.67851 9.64493 8.72094 9.85707 8.82786C10.2682 9.03514 10.5666 9.50731 10.5019 9.84801C10.4229 10.2636 9.74331 10.5961 8.96161 10.6015C8.56234 10.6043 8.41489 10.5511 8.26241 10.3492C8.16803 10.2242 8.13228 9.81933 8.19529 9.58856ZM9.7521 8.97596C9.95712 9.10012 10.0098 9.2837 9.88931 9.45357C9.80628 9.57059 9.54921 9.68168 9.36137 9.68168C9.07914 9.68168 8.77124 9.48302 8.77124 9.30095C8.77124 8.93518 9.36167 8.73953 9.7521 8.97596Z" fill="black"/> </svg>',
                      height: "100%",
                      id: "dFa7wj1Xw",
                      layoutId: "dFa7wj1Xw",
                      mbN7oYsAx: "rgb(255, 12, 126)",
                      variant: "AIAOqiS3b",
                      width: "100%",
                      Zg1jePVp4: "Uniswap",
                    }),
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  Ke = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-qL0Lh.framer-9npbwj, .framer-qL0Lh .framer-9npbwj { display: block; }",
    ".framer-qL0Lh.framer-1uytkr9 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: wrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1041px; }",
    ".framer-qL0Lh .framer-1c7dgqi { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: wrap; gap: 60px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }",
    ".framer-qL0Lh .framer-130ul3i-container, .framer-qL0Lh .framer-1dk6i16-container, .framer-qL0Lh .framer-sd4w48-container, .framer-qL0Lh .framer-ys7y4s-container, .framer-qL0Lh .framer-env0hf-container { flex: none; height: auto; position: relative; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-qL0Lh.framer-1uytkr9, .framer-qL0Lh .framer-1c7dgqi { gap: 0px; } .framer-qL0Lh.framer-1uytkr9 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-qL0Lh.framer-1uytkr9 > :first-child, .framer-qL0Lh .framer-1c7dgqi > :first-child { margin-left: 0px; } .framer-qL0Lh.framer-1uytkr9 > :last-child, .framer-qL0Lh .framer-1c7dgqi > :last-child { margin-right: 0px; } .framer-qL0Lh .framer-1c7dgqi > * { margin: 0px; margin-left: calc(60px / 2); margin-right: calc(60px / 2); } }",
  ],
  w1 = K(Je, Ke, "framer-qL0Lh"),
  Mn = w1;
w1.displayName = "links";
w1.defaultProps = { height: 190, width: 1041 };
U(w1, {
  variant: {
    options: ["gc94Brjjk", "ldOtSuNLp"],
    optionTitles: ["Variant 1", "Variant 2"],
    title: "Variant",
    type: d.Enum,
  },
  bYwI8yM7s: { title: "Click", type: d.EventHandler },
});
Q(w1, [{ explicitInter: !0, fonts: [] }, ...Be], {
  supportsExplicitInterCodegen: !0,
});
var Ye = ["WaU7PxQOC", "JjpnOfF1H"],
  Qe = "framer-1p9an",
  $e = { JjpnOfF1H: "framer-v-snfs17", WaU7PxQOC: "framer-v-1lloyh" };
function me(t, ...e) {
  let r = {};
  return e?.forEach((a) => a && Object.assign(r, t[a])), r;
}
var et = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  tt = ({ value: t, children: e }) => {
    let r = Z(_),
      a = t ?? r.transition,
      i = A(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
    return n(_.Provider, { value: i, children: e });
  },
  rt = p.create(R),
  at = { "Variant 1": "WaU7PxQOC", "Variant 2": "JjpnOfF1H" },
  nt = ({ height: t, id: e, width: r, ...a }) => {
    var i, s;
    return {
      ...a,
      variant:
        (s = (i = at[a.variant]) !== null && i !== void 0 ? i : a.variant) !==
          null && s !== void 0
          ? s
          : "WaU7PxQOC",
    };
  },
  ot = (t, e) =>
    t.layoutDependency ? e.join("-") + t.layoutDependency : e.join("-"),
  it = z(function (t, e) {
    let { activeLocale: r, setLocale: a } = G(),
      { style: i, className: s, layoutId: o, variant: c, ...m } = nt(t),
      {
        baseVariant: f,
        classNames: C,
        clearLoadingGesture: y,
        gestureHandlers: g,
        gestureVariant: u,
        isLoading: x,
        setGestureState: N,
        setVariant: O,
        variants: S,
      } = Y({
        cycleOrder: Ye,
        defaultVariant: "WaU7PxQOC",
        variant: c,
        variantClassNames: $e,
      }),
      w = ot(t, S),
      F = B(null),
      H = () => f === "JjpnOfF1H",
      V = X(),
      b = [],
      v = J();
    return n(j, {
      id: o ?? V,
      children: n(rt, {
        animate: S,
        initial: !1,
        children: n(tt, {
          value: et,
          children: n(u1, {
            ...m,
            ...g,
            background: {
              alt: "",
              fit: "fill",
              loading: c1(v?.y || 0),
              sizes: v?.width || "100vw",
              src: "/framerusercontent.com/images/2CyawhHhk99tNXBN1u7VRCipADw.png",
              srcSet:
                "/framerusercontent.com/images/2CyawhHhk99tNXBN1u7VRCipADw.png?scale-down-to=512 512w,/framerusercontent.com/images/2CyawhHhk99tNXBN1u7VRCipADw.png?scale-down-to=1024 1024w,/framerusercontent.com/images/2CyawhHhk99tNXBN1u7VRCipADw.png 1116w",
            },
            className: W(Qe, ...b, "framer-1lloyh", s, C),
            "data-framer-name": "Variant 1",
            layoutDependency: w,
            layoutId: "WaU7PxQOC",
            ref: e ?? F,
            style: {
              borderBottomLeftRadius: 800,
              borderBottomRightRadius: 800,
              borderTopLeftRadius: 800,
              borderTopRightRadius: 800,
              ...i,
            },
            ...me(
              {
                JjpnOfF1H: {
                  "data-framer-name": "Variant 2",
                  background: {
                    alt: "",
                    positionX: "center",
                    positionY: "center",
                  },
                },
              },
              f,
              u
            ),
            children:
              H() &&
              n(u1, {
                background: {
                  alt: "",
                  fit: "fill",
                  src: "/framerusercontent.com/images/2CyawhHhk99tNXBN1u7VRCipADw.png",
                  srcSet:
                    "/framerusercontent.com/images/2CyawhHhk99tNXBN1u7VRCipADw.png?scale-down-to=512 512w,/framerusercontent.com/images/2CyawhHhk99tNXBN1u7VRCipADw.png?scale-down-to=1024 1024w,/framerusercontent.com/images/2CyawhHhk99tNXBN1u7VRCipADw.png 1116w",
                },
                className: "framer-1uc6o0g",
                "data-framer-name": "Variant 2",
                layoutDependency: w,
                layoutId: "OdmgsJUUk",
                style: {
                  borderBottomLeftRadius: 800,
                  borderBottomRightRadius: 800,
                  borderTopLeftRadius: 800,
                  borderTopRightRadius: 800,
                },
                ...me(
                  {
                    JjpnOfF1H: {
                      background: {
                        alt: "",
                        fit: "fill",
                        loading: c1((v?.y || 0) + 0),
                        sizes: (v?.height || 205) - 0,
                        src: "/framerusercontent.com/images/2CyawhHhk99tNXBN1u7VRCipADw.png",
                        srcSet:
                          "/framerusercontent.com/images/2CyawhHhk99tNXBN1u7VRCipADw.png?scale-down-to=512 512w,/framerusercontent.com/images/2CyawhHhk99tNXBN1u7VRCipADw.png?scale-down-to=1024 1024w,/framerusercontent.com/images/2CyawhHhk99tNXBN1u7VRCipADw.png 1116w",
                      },
                    },
                  },
                  f,
                  u
                ),
              }),
          }),
        }),
      }),
    });
  }),
  st = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-1p9an.framer-yp5dmx, .framer-1p9an .framer-yp5dmx { display: block; }",
    ".framer-1p9an.framer-1lloyh { height: 205px; position: relative; width: 205px; }",
    ".framer-1p9an .framer-1uc6o0g { aspect-ratio: 1 / 1; bottom: 0px; flex: none; position: absolute; right: -1px; top: 0px; width: var(--framer-aspect-ratio-supported, 205px); }",
    ".framer-1p9an.framer-v-snfs17.framer-1lloyh { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 205px); }",
  ],
  b1 = K(it, st, "framer-1p9an"),
  Dn = b1;
b1.displayName = "logo";
b1.defaultProps = { height: 205, width: 205 };
U(b1, {
  variant: {
    options: ["WaU7PxQOC", "JjpnOfF1H"],
    optionTitles: ["Variant 1", "Variant 2"],
    title: "Variant",
    type: d.Enum,
  },
});
Q(b1, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 });
var X1 =
    '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  ue = {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  lt = {
    ...ue,
    borderRadius: 6,
    background: "rgba(136, 85, 255, 0.3)",
    color: "#85F",
    border: "1px dashed #85F",
    flexDirection: "column",
  },
  G1 = {
    onClick: { type: d.EventHandler },
    onMouseEnter: { type: d.EventHandler },
    onMouseLeave: { type: d.EventHandler },
  },
  ct = {
    type: d.Number,
    title: "Font Size",
    min: 2,
    max: 200,
    step: 1,
    displayStepper: !0,
  },
  dt = {
    font: {
      type: d.Boolean,
      title: "Font",
      defaultValue: !1,
      disabledTitle: "Default",
      enabledTitle: "Custom",
    },
    fontFamily: {
      type: d.String,
      title: "Family",
      placeholder: "Inter",
      hidden: ({ font: t }) => !t,
    },
    fontWeight: {
      type: d.Enum,
      title: "Weight",
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      optionTitles: [
        "Thin",
        "Extra-light",
        "Light",
        "Regular",
        "Medium",
        "Semi-bold",
        "Bold",
        "Extra-bold",
        "Black",
      ],
      hidden: ({ font: t }) => !t,
    },
  };
var ut = {
  100: "Thin",
  200: "Extra-light",
  300: "Light",
  400: "Regular",
  500: "Medium",
  600: "Semi-bold",
  700: "Bold",
  800: "Extra-bold",
  900: "Black",
};
function J1(t) {
  let {
      fontFamily: e = "Inter",
      fontSize: r = 16,
      fontWeight: a = 400,
      font: i = !1,
    } = t,
    s = ut[a],
    o = `"${e} ${s}", "${e}", ${X1}`,
    c = e
      ? { fontSize: r, fontWeight: a, fontFamily: o }
      : { fontSize: r, fontWeight: a },
    m = async () => {
      await ee
        .loadWebFontsFromSelectors([
          `CUSTOM;${e}`,
          `CUSTOM;${e} ${s}`,
          `GF;${e}-${s.toLowerCase()}`,
        ])
        .catch((f) => console.error(f));
    };
  return (
    D(() => {
      i && m();
    }, [i, e, a]),
    c
  );
}
function K1(t) {
  let {
    borderRadius: e,
    isMixedBorderRadius: r,
    topLeftRadius: a,
    topRightRadius: i,
    bottomRightRadius: s,
    bottomLeftRadius: o,
  } = t;
  return A(
    () => (r ? `${a}px ${i}px ${s}px ${o}px` : `${e}px`),
    [e, r, a, i, s, o]
  );
}
var ft = {
  borderRadius: {
    title: "Radius",
    type: d.FusedNumber,
    toggleKey: "isMixedBorderRadius",
    toggleTitles: ["Radius", "Radius per corner"],
    valueKeys: [
      "topLeftRadius",
      "topRightRadius",
      "bottomRightRadius",
      "bottomLeftRadius",
    ],
    valueLabels: ["TL", "TR", "BR", "BL"],
    min: 0,
  },
};
function Y1(t) {
  let {
    padding: e,
    paddingPerSide: r,
    paddingTop: a,
    paddingRight: i,
    paddingBottom: s,
    paddingLeft: o,
  } = t;
  return A(() => (r ? `${a}px ${i}px ${s}px ${o}px` : e), [e, r, a, i, s, o]);
}
var pt = {
  padding: {
    type: d.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
    title: "Padding",
  },
};
function L1(t) {
  let {
      label: e,
      content: r,
      fill: a,
      color: i,
      style: s,
      onClick: o,
      font: c,
      hoverOptions: m,
      ...f
    } = t,
    C = J1({ fontWeight: 500, ...f }),
    y = K1(t),
    g = Y1(t),
    u = O1(() => {
      var x;
      (x = L.clipboard) === null || x === void 0 || x.writeText(r), o?.();
    }, [o, r]);
  return n(p.button, {
    style: {
      border: "none",
      outline: "none",
      resize: "none",
      width: "max-content",
      wordBreak: "break-word",
      overflowWrap: "break-word",
      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      letterSpacing: "-0.2px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: a,
      borderRadius: y,
      cursor: "pointer",
      padding: g,
      color: i,
      ...C,
      ...c,
      ...s,
    },
    onClick: u,
    ...f,
    whileHover: m,
    transition: m?.transition,
    children: e,
  });
}
U(L1, {
  content: {
    type: d.String,
    title: "Content",
    displayTextArea: !0,
    description: "When clicked, this content will be copied to the clipboard.",
  },
  label: { type: d.String, title: "Label", defaultValue: "Copy to Clipboard" },
  fill: { type: d.Color, title: "Fill", defaultValue: "#06F" },
  color: { type: d.Color, title: "Text", defaultValue: "#fff" },
  font: { type: d.Font, controls: "extended", defaultValue: { fontSize: 16 } },
  hoverOptions: {
    type: d.Object,
    title: "Hover",
    buttonTitle: "Effect",
    optional: !0,
    controls: {
      scale: {
        type: d.Number,
        title: "Scale",
        min: 0,
        max: 10,
        displayStepper: !0,
        step: 0.01,
        defaultValue: 1.1,
      },
      backgroundColor: {
        type: d.Color,
        title: "Fill",
        defaultValue: "#0088FF",
        optional: !0,
      },
      color: {
        type: d.Color,
        title: "Color",
        defaultValue: "#FFF",
        optional: !0,
      },
      transition: {
        type: d.Transition,
        title: "Transition",
        defaultValue: { type: "spring", stiffness: 400, damping: 30 },
      },
    },
  },
  padding: {
    type: d.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
    title: "Padding",
    defaultValue: 10,
  },
  borderRadius: {
    title: "Radius",
    type: d.FusedNumber,
    toggleKey: "isMixedBorderRadius",
    toggleTitles: ["Radius", "Radius per corner"],
    valueKeys: [
      "topLeftRadius",
      "topRightRadius",
      "bottomRightRadius",
      "bottomLeftRadius",
    ],
    valueLabels: ["TL", "TR", "BR", "BL"],
    min: 0,
    defaultValue: 50,
  },
  ...G1,
});
function Q1(t) {
  let [e, r] = h1(null);
  D(() => {
    let s = t.customSvgCode;
    a(s);
  });
  let a = (s) => {
      let o = [
          [/width="[^"]*"/, 'width="100%"'],
          [/height="[^"]*"/, 'height="100%"'],
        ],
        c = s.includes('stroke="'),
        m = s.includes('stroke-width="'),
        f = s.includes('stroke-linecap="'),
        C = s.includes('stroke-linejoin="');
      if (s.includes("<circle")) {
        let y = /<circle[^>]*fill="([^"]*)"/,
          g = s.match(y);
        if (g) {
          let u = g[0].replace(g[1], t.customColor);
          s = s.replace(y, u);
        } else o.push([/<circle/g, `<circle fill="${t.customColor}"`]);
      }
      c
        ? (f
            ? o.push([
                /<path/g,
                `<path stroke="${t.customColor}" stroke-linecap="${t.lineCap}"`,
              ])
            : o.push([/<path/g, `<path stroke="${t.customColor}"`]),
          m &&
            o.push([
              /stroke-width="(?!0\b)\d+(\.\d+)?"/g,
              `stroke-width="${t.customStrokeWidth}"`,
            ]))
        : o.push([/<path/g, `<path fill="${t.customColor}"`]),
        s.includes('overflow="')
          ? o.push([/overflow="[^"]*"/, 'overflow="visible"'])
          : o.push([/<svg/, '<svg overflow="visible"']),
        C
          ? o.push([
              /stroke-linejoin="[^"]*"/,
              `stroke-linejoin="${t.lineJoin}"`,
            ])
          : o.push([/<path/g, `<path stroke-linejoin="${t.lineJoin}"`]),
        o.forEach(([y, g]) => {
          s = s.replace(y, g);
        }),
        r(s);
    },
    i = {
      padding: `${t.customPadding}px`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      overflow: "visible",
    };
  return n("div", { dangerouslySetInnerHTML: { __html: e }, style: i });
}
Q1.defaultProps = {
  customSvgCode:
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.9996 4.58607L19.414 12.0001L22.9139 8.50015L15.4997 1.08594L11.9996 4.58607Z" fill="black"/> <path d="M18.403 13.8175L10.1822 5.59708L5.63438 7.25082L3.08203 19.5021L8.15387 14.4302C8.0427 14.1472 7.98166 13.839 7.98166 13.5166C7.98166 12.1359 9.10095 11.0166 10.4817 11.0166C11.8624 11.0166 12.9817 12.1359 12.9817 13.5166C12.9817 14.8973 11.8624 16.0166 10.4817 16.0166C10.1592 16.0166 9.85109 15.9556 9.56811 15.8444L4.49378 20.9188L16.7491 18.3656L18.403 13.8175Z" fill="black"/> </svg>',
  customColor: "#ffffff",
  customPadding: 0,
  customStrokeWidth: 2,
  lineCap: "butt",
  lineJoin: "miter",
};
U(Q1, {
  customSvgCode: { type: d.String, title: "SVG Code", displayTextArea: !1 },
  customColor: { type: d.Color, title: "Color", defaultValue: "#ffffff" },
  customStrokeWidth: {
    type: d.Number,
    title: "Stroke",
    defaultValue: 2,
    min: 0,
    step: 0.1,
    displayStepper: !0,
    hidden: (t) => !t.customSvgCode.includes('stroke="'),
  },
  customPadding: {
    type: d.Number,
    title: "Padding",
    defaultValue: 0,
    min: 0,
    step: 1,
    displayStepper: !0,
  },
  lineCap: {
    type: d.Enum,
    title: "Line Cap",
    options: ["butt", "round", "square"],
    optionTitles: ["Butt", "Round", "Square"],
    defaultValue: "butt",
    hidden: (t) => !t.customSvgCode.includes('stroke="'),
  },
  lineJoin: {
    type: d.Enum,
    title: "Line Join",
    options: ["round", "miter", "bevel"],
    optionTitles: ["Round", "Miter", "Bevel"],
    defaultValue: "miter",
    hidden: (t) => !t.customSvgCode.includes('stroke="'),
  },
});
var A1 = Q1;
var ht = i1(A1),
  Ct = i1(L1),
  gt = { TEDvwxlqM: { hover: !0 } },
  yt = ["TEDvwxlqM", "Floa_c6Go"],
  vt = "framer-Nu4ZW",
  xt = { Floa_c6Go: "framer-v-157nw93", TEDvwxlqM: "framer-v-1q7tvkr" };
function wt(t, ...e) {
  let r = {};
  return e?.forEach((a) => a && Object.assign(r, t[a])), r;
}
var T1 = (t, e) => {
    if (typeof t == "number" && Number.isFinite(t))
      return Math.max(0, t) + "px";
    if (typeof t != "string" || typeof e != "number") return;
    let r = t.split(" ");
    return r[e] || r[e - 2] || r[0];
  },
  bt = { damping: 45, delay: 0, mass: 1, stiffness: 600, type: "spring" },
  Lt = (t, e) => `translate(-50%, -50%) ${e}`,
  kt = ({ value: t, children: e }) => {
    let r = Z(_),
      a = t ?? r.transition,
      i = A(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
    return n(_.Provider, { value: i, children: e });
  },
  Vt = p.create(R),
  St = { Copied: "Floa_c6Go", Default: "TEDvwxlqM" },
  Ft = ({
    bG: t,
    bGHover: e,
    clipboardContent: r,
    height: a,
    iconCopied: i,
    iconCopy: s,
    icons: o,
    id: c,
    labelCopied: m,
    labelCopy: f,
    labels: C,
    radius: y,
    width: g,
    ...u
  }) => {
    var x, N, O, S, w, F, H, V, b, v, I, E;
    return {
      ...u,
      aCeOAHQBL:
        (x = C ?? u.aCeOAHQBL) !== null && x !== void 0
          ? x
          : "var(--token-419394a1-565d-4952-8ba3-b4f1eb92339c, rgb(5, 5, 5))",
      b8ei7OpHv:
        (N = t ?? u.b8ei7OpHv) !== null && N !== void 0
          ? N
          : "var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255))",
      bcOKL_7fc:
        (O = s ?? u.bcOKL_7fc) !== null && O !== void 0
          ? O
          : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M21 3H7V7H3V21H17V17H21V3ZM17 15H19V5H9V7H17V15Z" fill="white"/> </svg>',
      bPCJyrIbK:
        (S = i ?? u.bPCJyrIbK) !== null && S !== void 0
          ? S
          : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M3 15L9.29412 20L21 4" stroke="black" stroke-width="2" stroke-linecap="square"/> </svg>',
      kmK5HfVNG: (w = y ?? u.kmK5HfVNG) !== null && w !== void 0 ? w : "100px",
      PbW7K4Unr:
        (F = o ?? u.PbW7K4Unr) !== null && F !== void 0
          ? F
          : "var(--token-419394a1-565d-4952-8ba3-b4f1eb92339c, rgb(5, 5, 5))",
      qIDNNRI0q:
        (H = r ?? u.qIDNNRI0q) !== null && H !== void 0 ? H : "Copied text.",
      rIGEnoYqD: (V = m ?? u.rIGEnoYqD) !== null && V !== void 0 ? V : "Copied",
      variant:
        (v = (b = St[u.variant]) !== null && b !== void 0 ? b : u.variant) !==
          null && v !== void 0
          ? v
          : "TEDvwxlqM",
      wr2g_fjxZ:
        (I = e ?? u.wr2g_fjxZ) !== null && I !== void 0
          ? I
          : "rgb(212, 212, 212)",
      zhU3xY_Ux:
        (E = f ?? u.zhU3xY_Ux) !== null && E !== void 0 ? E : "Copy component",
    };
  },
  Rt = (t, e) =>
    t.layoutDependency ? e.join("-") + t.layoutDependency : e.join("-"),
  _t = z(function (t, e) {
    let { activeLocale: r, setLocale: a } = G(),
      {
        style: i,
        className: s,
        layoutId: o,
        variant: c,
        bcOKL_7fc: m,
        zhU3xY_Ux: f,
        bPCJyrIbK: C,
        rIGEnoYqD: y,
        b8ei7OpHv: g,
        wr2g_fjxZ: u,
        PbW7K4Unr: x,
        aCeOAHQBL: N,
        qIDNNRI0q: O,
        kmK5HfVNG: S,
        ...w
      } = Ft(t),
      {
        baseVariant: F,
        classNames: H,
        clearLoadingGesture: V,
        gestureHandlers: b,
        gestureVariant: v,
        isLoading: I,
        setGestureState: E,
        setVariant: $,
        variants: e1,
      } = Y({
        cycleOrder: yt,
        defaultVariant: "TEDvwxlqM",
        enabledGestures: gt,
        variant: c,
        variantClassNames: xt,
      }),
      M = Rt(t, e1),
      { activeVariantCallback: a1, delay: s1 } = o1(F),
      t1 = a1(async (...y1) => {
        E({ isPressed: !1 }), $("Floa_c6Go");
      }),
      p1 = a1(async (...y1) => {
        await s1(() => $("TEDvwxlqM"), 1500);
      });
    M1(F, { Floa_c6Go: p1 });
    let l = B(null),
      T = () => F !== "Floa_c6Go",
      l1 = X(),
      g1 = [],
      _1 = J();
    return n(j, {
      id: o ?? l1,
      children: n(Vt, {
        animate: e1,
        initial: !1,
        children: n(kt, {
          value: bt,
          children: P(p.div, {
            ...w,
            ...b,
            className: W(vt, ...g1, "framer-1q7tvkr", s, H),
            "data-framer-name": "Default",
            "data-highlight": !0,
            layoutDependency: M,
            layoutId: "TEDvwxlqM",
            onTap: t1,
            ref: e ?? l,
            style: {
              backgroundColor: g,
              borderBottomLeftRadius: T1(S, 3),
              borderBottomRightRadius: T1(S, 2),
              borderTopLeftRadius: T1(S, 0),
              borderTopRightRadius: T1(S, 1),
              ...i,
            },
            variants: { "TEDvwxlqM-hover": { backgroundColor: u } },
            ...wt(
              {
                "TEDvwxlqM-hover": { "data-framer-name": void 0 },
                Floa_c6Go: { "data-framer-name": "Copied", onTap: void 0 },
              },
              F,
              v
            ),
            children: [
              P(p.div, {
                className: "framer-11ky8l1",
                "data-framer-name": "Content - Default",
                layoutDependency: M,
                layoutId: "QIQCtmxWS",
                style: {
                  filter: "none",
                  opacity: 1,
                  scale: 1,
                  WebkitFilter: "none",
                },
                variants: {
                  Floa_c6Go: {
                    filter: "blur(4px)",
                    opacity: 0,
                    scale: 1.2,
                    WebkitFilter: "blur(4px)",
                  },
                },
                children: [
                  n(q, {
                    children: n(p.div, {
                      className: "framer-1dgjt7l-container",
                      layoutDependency: M,
                      layoutId: "M1k5JIR_5-container",
                      children: n(A1, {
                        customColor: x,
                        customPadding: 0,
                        customStrokeWidth: 2,
                        customSvgCode: m,
                        height: "100%",
                        id: "M1k5JIR_5",
                        layoutId: "M1k5JIR_5",
                        lineCap: "butt",
                        lineJoin: "miter",
                        style: { height: "100%", width: "100%" },
                        width: "100%",
                      }),
                    }),
                  }),
                  n(r1, {
                    __fromCanvasComponent: !0,
                    children: n(R, {
                      children: n(p.p, {
                        style: {
                          "--font-selector": "SW50ZXItTWVkaXVt",
                          "--framer-font-family":
                            '"Inter", "Inter Placeholder", sans-serif',
                          "--framer-font-weight": "500",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--variable-reference-aCeOAHQBL-mHWiAebX9))",
                        },
                        children: "Copy component",
                      }),
                    }),
                    className: "framer-1sq8mv9",
                    fonts: ["Inter-Medium"],
                    layoutDependency: M,
                    layoutId: "bunj_WUv1",
                    style: {
                      "--extracted-r6o4lv":
                        "var(--variable-reference-aCeOAHQBL-mHWiAebX9)",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                      "--variable-reference-aCeOAHQBL-mHWiAebX9": N,
                    },
                    text: f,
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                ],
              }),
              P(p.div, {
                className: "framer-1pohrjc",
                "data-framer-name": "Content - Copied",
                layoutDependency: M,
                layoutId: "amA04PoPs",
                style: {
                  filter: "blur(4px)",
                  opacity: 0,
                  scale: 0.6,
                  WebkitFilter: "blur(4px)",
                },
                transformTemplate: Lt,
                variants: {
                  Floa_c6Go: {
                    filter: "blur(0px)",
                    opacity: 1,
                    scale: 1,
                    WebkitFilter: "blur(0px)",
                  },
                },
                children: [
                  n(q, {
                    children: n(p.div, {
                      className: "framer-v28sgf-container",
                      layoutDependency: M,
                      layoutId: "LdxX4fDA8-container",
                      children: n(A1, {
                        customColor: x,
                        customPadding: 0,
                        customStrokeWidth: 2,
                        customSvgCode: C,
                        height: "100%",
                        id: "LdxX4fDA8",
                        layoutId: "LdxX4fDA8",
                        lineCap: "butt",
                        lineJoin: "miter",
                        style: { height: "100%", width: "100%" },
                        width: "100%",
                      }),
                    }),
                  }),
                  n(r1, {
                    __fromCanvasComponent: !0,
                    children: n(R, {
                      children: n(p.p, {
                        style: {
                          "--font-selector": "SW50ZXItTWVkaXVt",
                          "--framer-font-family":
                            '"Inter", "Inter Placeholder", sans-serif',
                          "--framer-font-weight": "500",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--variable-reference-aCeOAHQBL-mHWiAebX9))",
                        },
                        children: "Copied",
                      }),
                    }),
                    className: "framer-11mb27u",
                    fonts: ["Inter-Medium"],
                    layoutDependency: M,
                    layoutId: "l_tvHTNER",
                    style: {
                      "--extracted-r6o4lv":
                        "var(--variable-reference-aCeOAHQBL-mHWiAebX9)",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                      "--variable-reference-aCeOAHQBL-mHWiAebX9": N,
                    },
                    text: y,
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                ],
              }),
              T() &&
                n(q, {
                  children: n(p.div, {
                    className: "framer-1bjmlyn-container",
                    layoutDependency: M,
                    layoutId: "gpbstLw0F-container",
                    children: n(L1, {
                      borderRadius: 100,
                      bottomLeftRadius: 100,
                      bottomRightRadius: 100,
                      color: "rgba(255, 255, 255, 0)",
                      content: O,
                      fill: "rgba(0, 102, 255, 0)",
                      font: {},
                      height: "100%",
                      id: "gpbstLw0F",
                      isMixedBorderRadius: !1,
                      label: "",
                      layoutId: "gpbstLw0F",
                      padding: 0,
                      paddingBottom: 0,
                      paddingLeft: 0,
                      paddingPerSide: !1,
                      paddingRight: 0,
                      paddingTop: 0,
                      style: { height: "100%", width: "100%" },
                      topLeftRadius: 100,
                      topRightRadius: 100,
                      width: "100%",
                    }),
                  }),
                }),
            ],
          }),
        }),
      }),
    });
  }),
  It = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-Nu4ZW.framer-kte9y0, .framer-Nu4ZW .framer-kte9y0 { display: block; }",
    ".framer-Nu4ZW.framer-1q7tvkr { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 44px; justify-content: center; overflow: hidden; padding: 0px 20px 0px 20px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-Nu4ZW .framer-11ky8l1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-Nu4ZW .framer-1dgjt7l-container, .framer-Nu4ZW .framer-v28sgf-container { flex: none; height: 20px; position: relative; width: 20px; }",
    ".framer-Nu4ZW .framer-1sq8mv9, .framer-Nu4ZW .framer-11mb27u { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }",
    ".framer-Nu4ZW .framer-1pohrjc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; left: 49%; overflow: hidden; padding: 0px; position: absolute; top: 50%; width: min-content; z-index: 1; }",
    ".framer-Nu4ZW .framer-1bjmlyn-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 4; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Nu4ZW.framer-1q7tvkr, .framer-Nu4ZW .framer-11ky8l1, .framer-Nu4ZW .framer-1pohrjc { gap: 0px; } .framer-Nu4ZW.framer-1q7tvkr > *, .framer-Nu4ZW .framer-11ky8l1 > *, .framer-Nu4ZW .framer-1pohrjc > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-Nu4ZW.framer-1q7tvkr > :first-child, .framer-Nu4ZW .framer-11ky8l1 > :first-child, .framer-Nu4ZW .framer-1pohrjc > :first-child { margin-left: 0px; } .framer-Nu4ZW.framer-1q7tvkr > :last-child, .framer-Nu4ZW .framer-11ky8l1 > :last-child, .framer-Nu4ZW .framer-1pohrjc > :last-child { margin-right: 0px; } }",
  ],
  k1 = K(_t, It, "framer-Nu4ZW"),
  ji = k1;
k1.displayName = "Copy Button";
k1.defaultProps = { height: 44, width: 199 };
U(k1, {
  variant: {
    options: ["TEDvwxlqM", "Floa_c6Go"],
    optionTitles: ["Default", "Copied"],
    title: "Variant",
    type: d.Enum,
  },
  bcOKL_7fc: {
    defaultValue:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M21 3H7V7H3V21H17V17H21V3ZM17 15H19V5H9V7H17V15Z" fill="white"/> </svg>',
    displayTextArea: !1,
    title: "Icon - Copy",
    type: d.String,
  },
  zhU3xY_Ux: {
    defaultValue: "Copy component",
    displayTextArea: !1,
    title: "Label - Copy",
    type: d.String,
  },
  bPCJyrIbK: {
    defaultValue:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M3 15L9.29412 20L21 4" stroke="black" stroke-width="2" stroke-linecap="square"/> </svg>',
    displayTextArea: !1,
    title: "Icon - Copied",
    type: d.String,
  },
  rIGEnoYqD: {
    defaultValue: "Copied",
    displayTextArea: !1,
    title: "Label - Copied",
    type: d.String,
  },
  b8ei7OpHv: {
    defaultValue:
      'var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255)) /* {"name":"12"} */',
    title: "BG",
    type: d.Color,
  },
  wr2g_fjxZ: {
    defaultValue: "rgb(212, 212, 212)",
    title: "BG - Hover",
    type: d.Color,
  },
  PbW7K4Unr: {
    defaultValue:
      'var(--token-419394a1-565d-4952-8ba3-b4f1eb92339c, rgb(5, 5, 5)) /* {"name":"1"} */',
    title: "Icons",
    type: d.Color,
  },
  aCeOAHQBL: {
    defaultValue:
      "var(--token-419394a1-565d-4952-8ba3-b4f1eb92339c, rgb(5, 5, 5))",
    title: "Labels",
    type: d.Color,
  },
  qIDNNRI0q: {
    defaultValue: "Copied text.",
    displayTextArea: !0,
    title: "Clipboard Content",
    type: d.String,
  },
  kmK5HfVNG: { defaultValue: "100px", title: "Radius", type: d.BorderRadius },
});
Q(
  k1,
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
    ...ht,
    ...Ct,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Mt = ["oSl4e0fPr", "Qeh02OMki"],
  Ut = "framer-ifklZ",
  Nt = { oSl4e0fPr: "framer-v-1st7oww", Qeh02OMki: "framer-v-10zepqg" };
function D1(t, ...e) {
  let r = {};
  return e?.forEach((a) => a && Object.assign(r, t[a])), r;
}
var Et = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  At = (t) =>
    typeof t == "object" && t !== null && typeof t.src == "string"
      ? t
      : typeof t == "string"
      ? { src: t }
      : void 0,
  Tt = ({ value: t, children: e }) => {
    let r = Z(_),
      a = t ?? r.transition,
      i = A(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
    return n(_.Provider, { value: i, children: e });
  },
  Dt = { desktop: "oSl4e0fPr", mobile: "Qeh02OMki" },
  Bt = ({
    bg: t,
    description: e,
    height: r,
    id: a,
    showBg: i,
    title: s,
    titleTop: o,
    width: c,
    ...m
  }) => {
    var f, C, y, g, u;
    return {
      ...m,
      hn11_Vo84: i ?? m.hn11_Vo84,
      tAnOtrGiG:
        (f = e ?? m.tAnOtrGiG) !== null && f !== void 0
          ? f
          : "Community Take Over since XXX",
      variant:
        (y = (C = Dt[m.variant]) !== null && C !== void 0 ? C : m.variant) !==
          null && y !== void 0
          ? y
          : "oSl4e0fPr",
      Wb6AcaNIX: t ?? m.Wb6AcaNIX,
      XgTiR1Rgh: (g = o ?? m.XgTiR1Rgh) !== null && g !== void 0 ? g : "CTO",
      y33U6RPLX:
        (u = s ?? m.y33U6RPLX) !== null && u !== void 0 ? u : "Community Owned",
    };
  },
  Pt = (t, e) =>
    t.layoutDependency ? e.join("-") + t.layoutDependency : e.join("-"),
  Ot = p.create(R),
  Ht = z(function (t, e) {
    let { activeLocale: r, setLocale: a } = G(),
      {
        style: i,
        className: s,
        layoutId: o,
        variant: c,
        Wb6AcaNIX: m,
        hn11_Vo84: f,
        y33U6RPLX: C,
        XgTiR1Rgh: y,
        tAnOtrGiG: g,
        ...u
      } = Bt(t),
      {
        baseVariant: x,
        classNames: N,
        clearLoadingGesture: O,
        gestureHandlers: S,
        gestureVariant: w,
        isLoading: F,
        setGestureState: H,
        setVariant: V,
        variants: b,
      } = Y({
        cycleOrder: Mt,
        defaultVariant: "oSl4e0fPr",
        variant: c,
        variantClassNames: Nt,
      }),
      v = Pt(t, b),
      E = W(Ut, ...[]),
      $ = B(null),
      e1 = X(),
      M = J();
    return n(j, {
      id: o ?? e1,
      children: n(Ot, {
        animate: b,
        initial: !1,
        children: n(Tt, {
          value: Et,
          children: P(p.div, {
            ...u,
            ...S,
            className: W(E, "framer-1st7oww", s, N),
            "data-framer-name": "desktop",
            layoutDependency: v,
            layoutId: "oSl4e0fPr",
            ref: e ?? $,
            style: {
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              borderBottomLeftRadius: 32,
              borderBottomRightRadius: 32,
              borderTopLeftRadius: 32,
              borderTopRightRadius: 32,
              ...i,
            },
            ...D1({ Qeh02OMki: { "data-framer-name": "mobile" } }, x, w),
            children: [
              f &&
                n(u1, {
                  background: {
                    alt: "",
                    fit: "fill",
                    loading: c1((M?.y || 0) + 0),
                    sizes: M?.width || "100vw",
                    ...At(m),
                  },
                  className: "framer-15qcl7d",
                  "data-framer-name": "bg",
                  layoutDependency: v,
                  layoutId: "zfjyybaA6",
                  style: {
                    backdropFilter: "blur(40px)",
                    WebkitBackdropFilter: "blur(40px)",
                  },
                }),
              n(r1, {
                __fromCanvasComponent: !0,
                children: n(R, {
                  children: n(p.p, {
                    style: {
                      "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                      "--framer-font-family":
                        '"Inter", "Inter Placeholder", sans-serif',
                      "--framer-font-size": "14px",
                      "--framer-font-weight": "600",
                      "--framer-letter-spacing": "-0.05em",
                      "--framer-line-height": "100%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                      "--framer-text-transform": "uppercase",
                    },
                    children: "CTO",
                  }),
                }),
                className: "framer-zvgy9g",
                "data-framer-name": "top-title",
                fonts: ["Inter-SemiBold"],
                layoutDependency: v,
                layoutId: "IUdPx0fwy",
                style: {
                  "--extracted-r6o4lv": "rgb(255, 255, 255)",
                  "--framer-paragraph-spacing": "0px",
                },
                text: y,
                verticalAlignment: "top",
                withExternalLayout: !0,
                ...D1(
                  {
                    Qeh02OMki: {
                      children: n(R, {
                        children: n(p.p, {
                          style: {
                            "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                            "--framer-font-family":
                              '"Inter", "Inter Placeholder", sans-serif',
                            "--framer-font-size": "12px",
                            "--framer-font-weight": "600",
                            "--framer-letter-spacing": "-0.05em",
                            "--framer-line-height": "100%",
                            "--framer-text-alignment": "center",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                            "--framer-text-transform": "uppercase",
                          },
                          children: "CTO",
                        }),
                      }),
                    },
                  },
                  x,
                  w
                ),
              }),
              n(r1, {
                __fromCanvasComponent: !0,
                children: n(R, {
                  children: n(p.p, {
                    style: {
                      "--font-selector": "SW50ZXItQmxhY2s=",
                      "--framer-font-size": "40px",
                      "--framer-font-weight": "900",
                      "--framer-line-height": "100%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                    },
                    children: "Community Owned",
                  }),
                }),
                className: "framer-1o24n0g",
                "data-framer-name": "title",
                fonts: ["Inter-Black"],
                layoutDependency: v,
                layoutId: "FpBMzUMxB",
                style: {
                  "--extracted-r6o4lv": "rgb(255, 255, 255)",
                  "--framer-paragraph-spacing": "0px",
                },
                text: C,
                verticalAlignment: "top",
                withExternalLayout: !0,
                ...D1(
                  {
                    Qeh02OMki: {
                      children: n(R, {
                        children: n(p.p, {
                          style: {
                            "--font-selector": "SW50ZXItQmxhY2s=",
                            "--framer-font-size": "32px",
                            "--framer-font-weight": "900",
                            "--framer-line-height": "100%",
                            "--framer-text-alignment": "center",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                          },
                          children: "Community Owned",
                        }),
                      }),
                    },
                  },
                  x,
                  w
                ),
              }),
              n(r1, {
                __fromCanvasComponent: !0,
                children: n(R, {
                  children: n(p.p, {
                    style: {
                      "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                      "--framer-font-family":
                        '"Inter", "Inter Placeholder", sans-serif',
                      "--framer-font-weight": "600",
                      "--framer-letter-spacing": "-0.05em",
                      "--framer-line-height": "105%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                    },
                    children: "Community Take Over since XXX",
                  }),
                }),
                className: "framer-j8axat",
                "data-framer-name": "subtitle",
                fonts: ["Inter-SemiBold"],
                layoutDependency: v,
                layoutId: "IEU7MFZKV",
                style: {
                  "--extracted-r6o4lv": "rgb(255, 255, 255)",
                  "--framer-paragraph-spacing": "0px",
                },
                text: g,
                verticalAlignment: "top",
                withExternalLayout: !0,
                ...D1(
                  {
                    Qeh02OMki: {
                      children: n(R, {
                        children: n(p.p, {
                          style: {
                            "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                            "--framer-font-family":
                              '"Inter", "Inter Placeholder", sans-serif',
                            "--framer-font-size": "14px",
                            "--framer-font-weight": "600",
                            "--framer-letter-spacing": "-0.05em",
                            "--framer-line-height": "105%",
                            "--framer-text-alignment": "center",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                          },
                          children: "Community Take Over since XXX",
                        }),
                      }),
                    },
                  },
                  x,
                  w
                ),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Wt = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-ifklZ.framer-pg6nrp, .framer-ifklZ .framer-pg6nrp { display: block; }",
    ".framer-ifklZ.framer-1st7oww { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; height: 865px; justify-content: space-between; overflow: hidden; padding: 32px 13px 32px 13px; position: relative; width: 440px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-ifklZ .framer-15qcl7d { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 0; }",
    ".framer-ifklZ .framer-zvgy9g, .framer-ifklZ .framer-1o24n0g, .framer-ifklZ .framer-j8axat { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-ifklZ.framer-v-10zepqg.framer-1st7oww { padding: 16px 12px 16px 12px; }",
  ],
  V1 = K(Ht, Wt, "framer-ifklZ"),
  Ji = V1;
V1.displayName = "tile-card";
V1.defaultProps = { height: 865, width: 440 };
U(V1, {
  variant: {
    options: ["oSl4e0fPr", "Qeh02OMki"],
    optionTitles: ["desktop", "mobile"],
    title: "Variant",
    type: d.Enum,
  },
  Wb6AcaNIX: { title: "bg", type: d.ResponsiveImage },
  hn11_Vo84: { defaultValue: !1, title: "show-bg", type: d.Boolean },
  y33U6RPLX: {
    defaultValue: "Community Owned",
    displayTextArea: !1,
    title: "Title",
    type: d.String,
  },
  XgTiR1Rgh: {
    defaultValue: "CTO",
    displayTextArea: !1,
    title: "title-top",
    type: d.String,
  },
  tAnOtrGiG: {
    defaultValue: "Community Take Over since XXX",
    displayTextArea: !1,
    title: "description",
    type: d.String,
  },
});
Q(
  V1,
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
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "/framerusercontent.com/assets/mkY5Sgyq51ik0AMrSBwhm9DJg.woff2",
          weight: "900",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "/framerusercontent.com/assets/X5hj6qzcHUYv7h1390c8Rhm6550.woff2",
          weight: "900",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "/framerusercontent.com/assets/gQhNpS3tN86g8RcVKYUUaKt2oMQ.woff2",
          weight: "900",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "/framerusercontent.com/assets/cugnVhSraaRyANCaUtI5FV17wk.woff2",
          weight: "900",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "/framerusercontent.com/assets/5HcVoGak8k5agFJSaKa4floXVu0.woff2",
          weight: "900",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "/framerusercontent.com/assets/jn4BtSPLlS0NDp1KiFAtFKiiY0o.woff2",
          weight: "900",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "/framerusercontent.com/assets/P2Bw01CtL0b9wqygO0sSVogWbo.woff2",
          weight: "900",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
var jt = "framer-78WB1",
  qt = { hLHFhDXyO: "framer-v-kmubns" };
var zt = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  Zt = ({ value: t, children: e }) => {
    let r = Z(_),
      a = t ?? r.transition,
      i = A(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
    return n(_.Provider, { value: i, children: e });
  },
  Xt = p.create(R),
  Gt = ({ height: t, id: e, width: r, ...a }) => ({ ...a }),
  Jt = (t, e) =>
    t.layoutDependency ? e.join("-") + t.layoutDependency : e.join("-"),
  Kt = z(function (t, e) {
    let { activeLocale: r, setLocale: a } = G(),
      { style: i, className: s, layoutId: o, variant: c, ...m } = Gt(t),
      {
        baseVariant: f,
        classNames: C,
        clearLoadingGesture: y,
        gestureHandlers: g,
        gestureVariant: u,
        isLoading: x,
        setGestureState: N,
        setVariant: O,
        variants: S,
      } = Y({ defaultVariant: "hLHFhDXyO", variant: c, variantClassNames: qt }),
      w = Jt(t, S),
      F = B(null),
      H = X(),
      V = [],
      b = J();
    return n(j, {
      id: o ?? H,
      children: n(Xt, {
        animate: S,
        initial: !1,
        children: n(Zt, {
          value: zt,
          children: P(p.div, {
            ...m,
            ...g,
            className: W(jt, ...V, "framer-kmubns", s, C),
            "data-framer-name": "Variant 1",
            layoutDependency: w,
            layoutId: "hLHFhDXyO",
            ref: e ?? F,
            style: { ...i },
            children: [
              n(n1, {
                className: "framer-3kyfgz",
                "data-framer-name": "Vector",
                fill: "rgba(0,0,0,1)",
                intrinsicHeight: 215,
                intrinsicWidth: 311,
                layoutDependency: w,
                layoutId: "I15977:1457;15937:4425",
                svg: `<svg width="311" height="215" viewBox="0 0 311 215" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M265.162 215C257.881 215 250.881 212.111 244.358 206.417C243.368 205.55 242.43 204.724 241.538 203.937C239.125 201.807 236.199 199.224 234.676 198.219C234.361 198.294 233.907 198.417 233.3 198.62C232.282 198.962 231.296 199.3 230.342 199.629C223.977 201.815 218.479 203.699 212.725 203.699C205.689 203.699 199.738 200.754 195.842 195.83C191.354 195.413 187.43 194.177 184.101 192.139C179.306 194.336 174.06 195.934 168.949 195.934C165.865 195.934 159.957 195.934 153.261 193.514C143.496 202.447 130.056 207.943 116.209 207.943C114.762 207.943 113.291 207.883 111.847 207.764C105.265 207.227 99.3888 204.672 94.2777 200.134C93.3864 200.21 92.4911 200.245 91.5998 200.245C86.8989 200.245 82.4621 199.16 78.5538 197.166C77.556 199.908 76.2585 202.149 74.9413 203.937C70.0037 210.633 62.195 214.476 53.5108 214.476C42.2947 214.476 31.3152 208.034 26.1883 198.445C10.5315 169.174 2.33634 147.727 0.963904 111.736C0.912635 110.424 0.861366 109.137 0.81404 107.873C-0.0969729 84.9957 -0.818685 66.9266 11.5096 42.9802C18.4546 29.489 29.5445 21.7479 41.9358 21.7479C50.7502 21.7479 59.1859 25.7456 65.0779 32.7197C70.8398 39.5428 73.3717 48.2972 72.015 56.7416C70.6505 65.2377 69.7829 73.2331 69.2268 80.1516C69.9564 80.1118 70.6939 80.092 71.4353 80.092C77.7887 80.092 87.9164 81.6934 97.6259 90.0186C105.6 85.2421 115.026 82.3928 123.679 82.3928C130.158 82.3928 136.113 83.8751 141.268 86.6687C147.724 82.5836 155.087 80.2509 162.596 80.1198C158.723 68.544 153.19 56.9046 147.093 44.6174C143.764 37.9095 142.577 31.6944 143.468 25.6145C144.372 19.4351 147.854 10.7602 159.295 4.51331C164.327 1.76738 169.608 0.372559 174.987 0.372559C193.72 0.372559 206.565 17.476 210.785 23.095C216.712 30.9871 221.307 43.2266 224.833 60.5168C225.045 61.5659 225.251 62.611 225.452 63.6521C226.327 63.5647 227.211 63.521 228.102 63.521C232.783 63.521 237.52 61.4859 242.58 63.8662C251.859 68.2295 255.562 69.0561 259.147 69.0561C272.596 69.0561 289.571 59.3024 302.21 67.7928C315.374 76.6386 310.377 97.6325 306.445 112.348C306.208 113.234 305.992 114.104 305.779 114.951C304.406 120.45 302.695 127.293 297.414 133.346C294.346 136.862 290.556 139.561 285.977 141.476C296.964 147.135 302.028 156.354 303.108 161.258C306.484 176.573 301.314 190.482 291.443 200.428C291.084 200.79 290.607 201.298 290.106 201.839C285.815 206.437 277.821 214.992 265.162 214.992V215Z" fill="#020B50"/>
</svg>
`,
                withExternalLayout: !0,
              }),
              n(n1, {
                className: "framer-1cxz0ge",
                "data-framer-name": "Vector",
                fill: "rgba(0,0,0,1)",
                intrinsicHeight: 215,
                intrinsicWidth: 311,
                layoutDependency: w,
                layoutId: "I15977:1457;15937:4459",
                svg: `<svg width="311" height="215" viewBox="0 0 311 215" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M264.794 214.628C257.514 214.628 250.514 211.739 243.991 206.044C243.001 205.178 242.063 204.351 241.171 203.564C238.758 201.434 235.831 198.851 234.309 197.846C233.994 197.922 233.54 198.045 232.933 198.247C231.915 198.589 230.929 198.927 229.975 199.257C223.61 201.442 218.112 203.326 212.358 203.326C205.322 203.326 199.371 200.381 195.475 195.458C190.987 195.041 187.063 193.805 183.734 191.766C178.938 193.964 173.693 195.561 168.582 195.561C165.498 195.561 159.59 195.561 152.894 193.141C143.129 202.074 129.688 207.57 115.842 207.57C114.394 207.57 112.923 207.51 111.48 207.391C104.898 206.855 99.0216 204.3 93.9105 199.761C93.0192 199.837 92.124 199.873 91.2327 199.873C86.5317 199.873 82.0949 198.788 78.1866 196.793C77.1889 199.535 75.8914 201.776 74.5741 203.564C69.6365 210.26 61.8278 214.103 53.1436 214.103C41.9275 214.103 30.948 207.661 25.8211 198.073C10.1643 168.801 1.96915 147.354 0.596716 111.363C0.545447 110.052 0.494178 108.764 0.446853 107.501C-0.46416 84.6231 -1.18587 66.554 11.1424 42.6076C18.0874 29.1164 29.1773 21.3753 41.5686 21.3753C50.383 21.3753 58.8187 25.373 64.7107 32.3471C70.4726 39.1702 73.0045 47.9246 71.6478 56.3691C70.2833 64.8651 69.4157 72.8605 68.8596 79.779C69.5892 79.7393 70.3267 79.7194 71.0681 79.7194C77.4215 79.7194 87.5492 81.3209 97.2588 89.6461C105.233 84.8695 114.659 82.0203 123.311 82.0203C129.791 82.0203 135.746 83.5025 140.901 86.2961C147.357 82.211 154.72 79.8784 162.229 79.7472C158.356 68.1714 152.823 56.532 146.726 44.2448C143.397 37.537 142.21 31.3219 143.101 25.2419C144.004 19.0626 147.487 10.3876 158.928 4.14075C163.96 1.39482 169.241 0 174.62 0C193.353 0 206.198 17.1034 210.418 22.7225C216.345 30.6145 220.94 42.854 224.465 60.1442C224.678 61.1933 224.883 62.2384 225.085 63.2796C225.96 63.1922 226.843 63.1484 227.735 63.1484C232.416 63.1484 237.152 61.1134 242.212 63.4937C251.492 67.857 255.195 68.6835 258.78 68.6835C272.229 68.6835 289.204 58.9299 301.843 67.4202C315.007 76.266 310.01 97.26 306.078 111.975C305.841 112.861 305.624 113.732 305.411 114.578C304.039 120.078 302.327 126.921 297.047 132.973C293.978 136.49 290.188 139.188 285.61 141.103C296.597 146.762 301.661 155.982 302.741 160.885C306.117 176.201 300.947 190.109 291.076 200.056C290.717 200.417 290.24 200.926 289.739 201.466C285.448 206.064 277.454 214.62 264.794 214.62V214.628Z" fill="#F768CD"/>
</svg>
`,
                withExternalLayout: !0,
              }),
              n(n1, {
                className: "framer-151wvt1",
                "data-framer-name": "outline",
                fill: "rgba(0,0,0,1)",
                intrinsicHeight: 215,
                intrinsicWidth: 311,
                layoutDependency: w,
                layoutId: "I15977:1457;15937:4458",
                svg: `<svg width="311" height="215" viewBox="0 0 311 215" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M241.171 203.564C242.063 204.351 243.001 205.178 243.991 206.044C249.795 211.111 255.978 213.957 262.399 214.523C262.975 214.573 263.553 214.606 264.133 214.62C264.353 214.625 264.574 214.628 264.794 214.628V214.62C277.454 214.62 285.448 206.064 289.739 201.466C290.24 200.926 290.717 200.417 291.076 200.056C300.947 190.109 306.117 176.201 302.741 160.885C301.75 156.385 297.403 148.249 288.2 142.567C287.376 142.058 286.513 141.569 285.61 141.103C286.539 140.715 287.435 140.294 288.3 139.841C291.696 138.06 294.601 135.776 297.047 132.973C302.327 126.921 304.039 120.078 305.411 114.578L305.485 114.287C305.674 113.533 305.868 112.76 306.078 111.975C310.01 97.26 315.007 76.266 301.843 67.4202C293.52 61.8297 283.318 64.1491 273.481 66.3856C268.378 67.5457 263.374 68.6835 258.78 68.6835C255.195 68.6835 251.492 67.857 242.212 63.4937C238.734 61.8574 235.409 62.3076 232.149 62.7489C230.667 62.9496 229.198 63.1484 227.735 63.1484C226.843 63.1484 225.96 63.1922 225.085 63.2796C224.883 62.2384 224.678 61.1933 224.465 60.1442C220.94 42.854 216.345 30.6145 210.418 22.7225C206.198 17.1035 193.353 0 174.62 0C169.241 0 163.96 1.39482 158.928 4.14075C147.487 10.3876 144.004 19.0626 143.101 25.2419C142.21 31.3219 143.397 37.537 146.726 44.2448C152.406 55.693 157.598 66.5788 161.412 77.3748C161.692 78.166 161.964 78.9568 162.229 79.7472C161.398 79.7617 160.569 79.8032 159.742 79.871C153.101 80.416 146.642 82.663 140.901 86.2961C135.746 83.5025 129.791 82.0203 123.311 82.0203C114.659 82.0203 105.233 84.8695 97.2588 89.6461C87.6502 81.4075 77.6323 79.7535 71.2677 79.7199C71.2008 79.7196 71.1342 79.7194 71.0681 79.7194C70.3267 79.7194 69.5892 79.7393 68.8596 79.779C68.923 78.9904 68.9904 78.1878 69.0622 77.3721C69.6199 71.0314 70.4388 63.8967 71.6478 56.3691C73.0045 47.9246 70.4726 39.1702 64.7107 32.3471C58.8187 25.373 50.383 21.3753 41.5686 21.3753C29.1773 21.3753 18.0874 29.1164 11.1424 42.6076C-1.18385 66.5501 -0.464396 84.6172 0.446405 107.489L0.446853 107.501C0.482944 108.464 0.521329 109.442 0.560258 110.433C0.572376 110.742 0.584546 111.052 0.596716 111.363C1.96915 147.354 10.1643 168.801 25.8211 198.073C30.948 207.661 41.9275 214.103 53.1436 214.103C61.8278 214.103 69.6365 210.26 74.5741 203.564C75.5168 202.285 76.4493 200.773 77.2691 199.012C77.5949 198.312 77.9029 197.573 78.1866 196.793C78.8981 197.156 79.627 197.489 80.3719 197.791C83.7189 199.147 87.3874 199.873 91.2327 199.873C92.124 199.873 93.0192 199.837 93.9105 199.761C99.0216 204.3 104.898 206.855 111.48 207.391C112.923 207.51 114.394 207.57 115.842 207.57C129.688 207.57 143.129 202.074 152.894 193.141C159.59 195.561 165.498 195.561 168.582 195.561C173.693 195.561 178.938 193.964 183.734 191.766C187.063 193.805 190.987 195.041 195.475 195.458C199.371 200.381 205.322 203.326 212.358 203.326C218.112 203.326 223.61 201.442 229.975 199.257C230.929 198.927 231.915 198.589 232.933 198.247C233.54 198.045 233.994 197.922 234.309 197.846C235.829 198.85 238.748 201.426 241.16 203.554L241.171 203.564ZM229.192 196.995C230.15 196.663 231.143 196.323 232.169 195.979L232.174 195.977C232.845 195.753 233.366 195.611 233.751 195.518L234.762 195.276L235.63 195.849C237.292 196.947 240.281 199.585 242.594 201.626L242.757 201.77L242.757 201.771C243.647 202.556 244.583 203.38 245.569 204.244C251.545 209.46 257.789 212.065 264.163 212.226H264.794C276.307 212.226 283.655 204.476 287.983 199.838C288.483 199.299 288.984 198.764 289.375 198.37C298.738 188.936 303.584 175.835 300.402 161.4C299.472 157.182 294.857 148.559 284.512 143.231L279.944 140.879L284.685 138.896C288.945 137.113 292.428 134.625 295.241 131.4L297.047 132.973L295.241 131.4C300.1 125.831 301.709 119.52 303.087 113.999L303.088 113.994L303.161 113.703C303.35 112.951 303.549 112.161 303.763 111.358L303.763 111.358C305.735 103.977 307.885 95.3227 307.976 87.4689C308.067 79.6114 306.104 73.1682 300.506 69.4066C295.012 65.7158 288.434 65.8668 281.048 67.2222C278.709 67.6515 276.419 68.1724 274.094 68.7015C272.715 69.0151 271.324 69.3316 269.903 69.6335C266.189 70.4225 262.404 71.0772 258.78 71.0772C254.652 71.0772 250.556 70.0623 241.192 65.6595L241.192 65.6593C239.204 64.724 237.238 64.6196 235.042 64.8128C234.202 64.8867 233.387 64.997 232.515 65.1151C232.208 65.1566 231.894 65.1991 231.569 65.2413C230.367 65.3976 229.067 65.5421 227.735 65.5421C226.922 65.5421 226.118 65.5819 225.323 65.6613L223.147 65.8786L222.732 63.7332C222.532 62.6972 222.329 61.6606 222.118 60.6221C218.616 43.4471 214.109 31.6248 208.502 24.1592L210.418 22.7225L208.501 24.1591C206.4 21.3605 202.281 15.8854 196.443 11.1055C190.602 6.32358 183.23 2.39362 174.62 2.39362C169.669 2.39362 164.78 3.67438 160.076 6.24152C149.396 12.0733 146.284 20.0327 145.472 25.5878L145.472 25.5888C144.665 31.0896 145.712 36.8128 148.872 43.1816C154.97 55.4708 160.57 67.2407 164.501 78.9883L165.536 82.0834L162.27 82.1405C155.232 82.2634 148.294 84.4512 142.182 88.3183L140.994 89.07L139.758 88.4001C134.979 85.8096 129.42 84.4139 123.311 84.4139C115.148 84.4139 106.143 87.115 98.4905 91.6991L97.0093 92.5863L95.6987 91.4626C86.5372 83.6073 77.0194 82.113 71.0681 82.113C70.3694 82.113 69.6754 82.1317 68.99 82.1691L66.2522 82.3182L66.4717 79.5874C67.0318 72.6189 67.9061 64.5596 69.2825 55.9898L69.2825 55.9897C70.523 48.2684 68.2153 40.2091 62.8802 33.8911C57.4247 27.4337 49.6489 23.769 41.5686 23.769C30.2943 23.769 19.9182 30.7929 13.2727 43.7025L13.2726 43.7025C1.2539 67.0477 1.9307 84.5575 2.84054 107.405L2.84076 107.411C2.87676 108.372 2.91502 109.347 2.95393 110.338C2.96606 110.647 2.97826 110.957 2.99047 111.27L2.99056 111.272C4.34513 146.795 12.3901 167.884 27.9339 196.944L27.9341 196.945C32.6285 205.725 42.7774 211.709 53.1436 211.709C61.104 211.709 68.1806 208.199 72.6448 202.146C73.84 200.523 75.023 198.482 75.9353 195.975L76.8618 193.429L79.2764 194.661C82.8412 196.481 86.9036 197.479 91.2327 197.479C92.0601 197.479 92.8877 197.446 93.7081 197.376L94.7329 197.29L95.5017 197.972C100.24 202.179 105.631 204.513 111.675 205.006L111.677 205.006C113.054 205.119 114.459 205.176 115.842 205.176C129.071 205.176 141.939 199.917 151.276 191.376L152.345 190.397L153.708 190.89C159.989 193.16 165.54 193.167 168.582 193.167C173.22 193.167 178.11 191.71 182.735 189.59L183.897 189.058L184.986 189.725C187.958 191.545 191.518 192.686 195.697 193.074L196.718 193.169L197.354 193.973C200.778 198.3 206.025 200.932 212.358 200.932C217.638 200.932 222.745 199.208 229.192 196.995Z" fill="black"/>
</svg>
`,
                withExternalLayout: !0,
              }),
              n(n1, {
                className: "framer-4o1m7e",
                "data-framer-name": "shadow",
                fill: "rgba(0,0,0,1)",
                intrinsicHeight: 190,
                intrinsicWidth: 288,
                layoutDependency: w,
                layoutId: "I15977:1457;15937:4427",
                svg: `<svg width="288" height="190" viewBox="-4 -4 288 190" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M187.62 162.521C175.889 163.231 176.185 157.3 176.391 153.176L176.391 153.175C176.416 152.667 176.44 152.187 176.44 151.749C172.049 155.34 161.589 162.521 154.882 162.521C148.497 162.521 141.41 161.681 135.033 154.116C130.042 165.664 115.138 175.852 98.2956 174.49C92.296 174.004 88.2254 169.535 85.1506 164.437C78.3803 168.269 69.253 168.09 65.838 160.128C62.0517 151.301 60.2091 141.314 58.5397 132.265C57.5685 127.002 56.6559 122.056 55.4535 117.841C53.8601 112.256 37.0874 103.944 37.0874 120.234C37.0874 132.869 39.7785 141.002 43.1836 151.292C44.1688 154.269 45.2136 157.426 46.2704 160.926C53.8601 186.059 30.7029 184.463 25.1095 174.091C9.6874 145.492 2.80103 126.766 1.55298 94.3036C1.50177 92.9718 1.44932 91.6661 1.39781 90.384C0.524671 68.6505 -0.075057 53.7225 10.3368 33.6653C21.934 11.3245 41.483 24.4893 39.483 36.8568C34.9025 65.1801 35.4903 87.9206 35.4903 87.9206C35.4903 87.9206 62.9382 65.268 80.5102 98.1044C81.8744 96.057 83.4918 94.1048 85.4002 92.2806C95.387 82.7343 118.143 75.9524 126.528 93.5058C126.56 93.5722 126.591 93.6388 126.622 93.7056C132.445 84.2977 142.17 80.1114 149.688 80.3399C158.962 80.6218 167.098 81.6963 171.25 90.3133C170.091 64.8452 159.319 42.1349 148.093 19.7016C145.298 14.1165 143.701 7.33459 153.283 2.14842C162.866 -3.03775 172.448 1.35055 183.627 16.1112C193.517 29.1695 198.095 63.1467 199.572 81.8589C200.538 78.8672 201.667 76.1091 202.795 73.9567C203.052 73.5455 203.308 73.1292 203.564 72.7119C207.285 66.6516 211.153 60.3538 222.359 65.5791C234.337 71.1642 240.725 72.7599 248.71 72.361C251.982 72.1975 256.191 70.7618 260.351 69.3432C266.344 67.2993 272.233 65.2909 275.062 67.1748C279.853 70.3663 280.651 80.7386 277.856 91.111C277.59 92.0984 277.347 93.0647 277.11 94.0062L277.11 94.0071C274.856 102.956 273.165 109.671 257.893 111.058C240.326 112.654 208.871 142.163 237.531 138.185C255.498 135.692 270.27 137.787 272.666 148.558C275.062 159.329 272.267 166.909 267.076 172.095C266.526 172.645 265.952 173.254 265.353 173.89C260.307 179.249 253.428 186.553 242.721 177.281C241.741 176.432 240.813 175.62 239.931 174.848L239.93 174.847C230.036 166.184 225.77 162.448 214.773 166.111C213.703 166.467 212.666 166.82 211.663 167.161C201.43 170.643 194.774 172.907 194.41 164.914C194.37 164.023 194.342 163.065 194.337 162.053C192.631 162.218 190.588 162.341 188.148 162.489L187.62 162.521ZM123.437 127.431C123.988 129.684 124.56 131.794 125.154 133.769C122.597 135.224 119.958 138.09 117.305 140.97C113.467 145.139 109.6 149.338 105.913 149.338C104.589 149.338 102.049 148.803 100.982 147.87C97.4792 144.808 96.0329 140.705 97.9623 136.256C98.6059 134.772 99.5056 133.355 101.016 132.58C103.925 131.087 107.944 130.638 111.355 130.257L111.356 130.256L111.357 130.256C111.909 130.194 112.446 130.134 112.959 130.072L113.326 130.028C116.329 129.665 120.332 129.182 123.437 127.431ZM201.78 136.092C203.276 134.037 205.06 132.057 207.187 130.207C212.078 125.95 218.529 120.634 224.592 115.637L224.592 115.637L224.592 115.637C233.87 107.991 242.239 101.094 242.721 99.8876C243.519 97.8929 244.319 95.4993 237.531 98.2918C231.253 100.875 208.241 108.235 200.713 105.539C201.03 114.064 201.356 123.639 201.643 132.057L201.643 132.065L201.643 132.076L201.78 136.092ZM169.255 131.005C169.388 130.207 169.574 125.42 169.255 112.654C160.072 108.266 146.497 108.664 146.497 121.43C146.497 131.643 161.669 132.069 169.255 131.005ZM96.1839 118.638C96.1839 113.053 100.576 102.282 108.162 103.08C115.748 103.878 116.546 111.857 115.349 112.654C114.39 113.293 102.173 116.91 96.1839 118.638Z" fill="#8B0246"/>
</svg>
`,
                withExternalLayout: !0,
              }),
              n(n1, {
                className: "framer-suigrx",
                "data-framer-name": "z",
                fill: "rgba(0,0,0,1)",
                intrinsicHeight: 122,
                intrinsicWidth: 89,
                layoutDependency: w,
                layoutId: "I15977:1457;15937:4432",
                svg: `<svg width="89" height="122" viewBox="0 0 89 122" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.1792 3.99491C18.2013 -1.5902 14.6079 5.98959 10.6153 12.3726C6.22337 20.7502 1.83185 38.3034 7.02227 43.0907C12.2127 47.8779 38.5637 39.5002 45.3515 36.7077C52.1394 33.9151 51.3397 36.3087 50.5416 38.3034C49.7434 40.2981 27.3843 57.8513 15.0072 68.6226C2.63001 79.3938 1.83148 94.5534 2.23074 103.33C2.63001 112.107 10.6153 108.516 22.5932 104.527C34.571 100.537 38.5637 105.325 50.5416 115.697C62.5195 126.069 69.7062 115.697 74.8966 110.511C80.087 105.325 82.8819 97.7449 80.4863 86.9736C78.0907 76.2024 63.318 74.108 45.3515 76.6013C16.691 80.5787 48.1464 51.0694 65.7136 49.4736C82.5927 47.9404 82.8819 39.8992 85.6767 29.5268C88.4715 19.1545 87.673 8.78214 82.8819 5.59065C78.0907 2.39916 64.5158 10.3779 56.5305 10.7768C48.5452 11.1758 42.157 9.58001 30.1792 3.99491Z" fill="#F7F200"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M70.1866 115.345C71.2511 114.343 72.2412 113.291 73.1693 112.306C73.7683 111.67 74.3416 111.061 74.8923 110.511C80.0827 105.325 82.8775 97.7448 80.482 86.9736C78.0864 76.2023 63.3137 74.1079 45.3472 76.6012C16.6867 80.5786 48.142 51.0693 65.7092 49.4736C80.981 48.0863 82.672 41.3716 84.9256 32.4229C85.1628 31.4811 85.4062 30.5145 85.6724 29.5268C88.4672 19.1544 87.6687 8.78208 82.8775 5.59059C80.0493 3.70665 74.1602 5.71507 68.167 7.75903C64.0074 9.17761 59.7977 10.6133 56.5262 10.7768C48.5409 11.1757 42.1527 9.57996 30.1748 3.99484C27.7101 2.8456 25.6005 2.25378 23.7693 2.09424C22.7588 3.41441 21.8564 4.88391 20.9625 6.33969C20.7062 6.75705 20.4506 7.17327 20.1934 7.58453C15.8015 15.9622 11.41 33.5154 16.6004 38.3026C21.4331 42.76 43.9184 33.3833 52.4734 29.8157C53.1065 29.5517 53.6634 29.3195 54.1311 29.1271C60.9189 26.3345 60.9178 31.5207 60.1197 33.5154C59.6369 34.7217 51.2678 41.619 41.9901 49.2651C35.9275 54.2615 29.4768 59.5776 24.5853 63.8345C12.2081 74.6058 11.4096 89.7654 11.8089 98.542C12.1725 106.535 18.828 104.271 29.061 100.789C30.0642 100.448 31.1018 100.095 32.1713 99.7388C43.1682 96.0761 47.4342 99.8114 57.3287 108.475C58.2113 109.248 59.1387 110.06 60.1197 110.909C63.9302 114.209 67.2559 115.409 70.1866 115.345Z" fill="#FE7D05"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.99 13.1655C9.88897 17.1926 7.75746 23.4815 6.78877 29.3378C6.3027 32.2764 6.12278 35.0288 6.35289 37.2874C6.5878 39.5932 7.22148 41.1136 8.09321 41.9176C8.42435 42.2231 9.06255 42.5365 10.1545 42.7349C11.2227 42.9291 12.5728 42.986 14.1588 42.9112C17.3285 42.7618 21.2162 42.0991 25.2199 41.1855C33.2239 39.3589 41.4238 36.5923 44.7312 35.2317C46.4697 34.5164 47.8269 34.0878 48.8763 33.9218C49.8268 33.7715 51.0035 33.7569 51.8535 34.5293C52.7699 35.362 52.685 36.5132 52.5825 37.0957C52.4684 37.7442 52.2041 38.4156 52.0122 38.8954C51.8493 39.3023 51.5405 39.6716 51.3371 39.9041C51.086 40.1911 50.7644 40.5209 50.3944 40.8805C49.6514 41.6026 48.6387 42.5162 47.4309 43.5694C45.0115 45.6792 41.7402 48.4091 38.1224 51.4007C36.5999 52.6596 35.0155 53.9654 33.4053 55.2924C27.3445 60.2873 20.9174 65.5841 16.0438 69.8254C4.24523 80.0932 3.4197 94.5931 3.81384 103.257C3.90438 105.247 4.4108 106.137 4.9133 106.56C5.42864 106.994 6.31948 107.261 7.92318 107.125C9.5103 106.991 11.5035 106.489 13.9265 105.733C15.4769 105.25 17.1363 104.685 18.9265 104.076C19.9335 103.734 20.982 103.377 22.0758 103.013C28.3538 100.922 32.8033 101.067 37.2693 103.299C39.4263 104.376 41.5317 105.912 43.8078 107.782C45.3374 109.038 46.9917 110.487 48.8159 112.084C49.6946 112.853 50.6127 113.657 51.5752 114.491C54.4146 116.949 56.8478 118.073 58.9199 118.417C60.9723 118.758 62.8176 118.359 64.5451 117.507C66.2996 116.642 67.9198 115.314 69.4623 113.821C70.2298 113.078 70.962 112.311 71.6767 111.553C71.7828 111.441 71.8888 111.328 71.9947 111.216C72.5929 110.58 73.1855 109.951 73.755 109.382C78.525 104.616 81.203 97.6072 78.9149 87.3193C77.8993 82.7527 74.2788 79.8398 68.3583 78.3609C62.4098 76.875 54.4606 76.9461 45.5589 78.1814C41.8953 78.6898 39.0283 78.6905 36.9033 78.1969C34.7602 77.6991 33.1132 76.6212 32.4572 74.8066C31.838 73.094 32.2912 71.2069 33.1158 69.4943C33.9604 67.7399 35.3286 65.8838 37.0061 64.0503C40.3686 60.375 45.1821 56.5653 50.267 53.5698C55.3276 50.5885 60.8258 48.3137 65.5566 47.884C73.7495 47.1398 77.5134 44.86 79.6702 41.8795C80.7882 40.3345 81.5513 38.4987 82.2123 36.337C82.6269 34.9814 82.9767 33.591 83.3525 32.097C83.5909 31.1493 83.8397 30.16 84.1223 29.1115C85.4795 24.0744 85.9482 19.0878 85.5233 15.0316C85.0891 10.8852 83.7722 8.10936 81.9837 6.91795C81.305 6.46589 80.0755 6.28344 78.087 6.57668C76.1637 6.86031 73.8818 7.53135 71.3921 8.35225C70.5246 8.63829 69.6256 8.94481 68.7151 9.25525C67.0744 9.81469 65.3962 10.3869 63.7973 10.875C61.302 11.6369 58.8003 12.2601 56.5979 12.3701C48.2416 12.7876 41.5781 11.0763 29.4915 5.4405C26.6418 4.11172 24.4123 3.62404 22.6374 3.64528C20.8908 3.66618 19.5 4.18003 18.2971 5.0089C17.0668 5.85671 15.9952 7.06106 14.9601 8.51139C14.1892 9.59161 13.4874 10.7344 12.7582 11.9218C12.5067 12.3313 12.252 12.7461 11.99 13.1655ZM22.5992 0.454018C24.9915 0.42539 27.703 1.08465 30.8422 2.54842C42.7114 8.08284 48.8243 9.56302 56.4384 9.18262C58.2287 9.09318 60.4184 8.56949 62.8639 7.82284C64.4214 7.34734 66.0021 6.8081 67.6034 6.26184C68.526 5.94712 69.4554 5.63006 70.3912 5.32152C72.8924 4.49681 75.4015 3.74664 77.6206 3.41939C79.7745 3.10176 82.0385 3.11879 83.7554 4.26247C86.758 6.26254 88.236 10.2686 88.7001 14.6994C89.1736 19.2203 88.6441 24.606 87.2065 29.9412C86.9564 30.8695 86.7188 31.812 86.4833 32.7462C86.0884 34.3125 85.6994 35.8556 85.267 37.2696C84.5603 39.5807 83.6722 41.7959 82.2586 43.7494C79.3523 47.7659 74.532 50.2734 65.8458 51.0624C61.7931 51.4305 56.7716 53.4428 51.8892 56.319C47.0311 59.181 42.4783 62.7992 39.3636 66.2036C37.8025 67.9099 36.6543 69.5065 35.9941 70.8779C35.3138 72.2911 35.2735 73.2028 35.4613 73.7224C35.6123 74.1399 36.0726 74.7273 37.6265 75.0883C39.1985 75.4534 41.618 75.5062 45.1195 75.0203C54.1843 73.7623 62.6047 73.6339 69.133 75.2647C75.6894 76.9024 80.6531 80.4224 82.033 86.627C84.5361 97.8817 81.6244 106.033 76.0136 111.639C75.4816 112.17 74.9277 112.758 74.3279 113.395C74.2205 113.509 74.1115 113.625 74.001 113.742C73.2824 114.504 72.508 115.317 71.6846 116.113C70.0456 117.7 68.1473 119.289 65.959 120.369C63.7438 121.462 61.2221 122.035 58.3961 121.566C55.5897 121.099 52.6329 119.63 49.4833 116.902C48.4837 116.037 47.547 115.217 46.6606 114.441C44.8618 112.866 43.27 111.472 41.7792 110.247C39.5636 108.427 37.6764 107.07 35.8408 106.153C32.3216 104.395 28.7858 104.142 23.0859 106.04C22.0406 106.388 21.014 106.738 20.0149 107.077C18.1937 107.697 16.4637 108.285 14.8779 108.78C12.4224 109.545 10.1485 110.14 8.19214 110.305C6.25237 110.469 4.32343 110.237 2.85492 109C1.37358 107.753 0.732128 105.8 0.623033 103.402C0.218648 94.5128 0.990168 78.6936 13.9459 67.4188C18.8555 63.1462 25.3299 57.8105 31.3944 52.8126C32.9992 51.4901 34.5752 50.1912 36.086 48.942C39.7048 45.9495 42.9465 43.2439 45.3307 41.1649C46.5247 40.1237 47.4864 39.2545 48.1674 38.5928C48.5093 38.2605 48.762 37.9982 48.9322 37.8036C49.0151 37.7088 49.0606 37.6499 49.0816 37.6219C49.1603 37.4235 49.2275 37.2469 49.2824 37.0897C48.5935 37.2113 47.5294 37.5319 45.9473 38.1828C42.4668 39.6147 34.0972 42.4332 25.9312 44.2968C21.8499 45.2282 17.7524 45.9369 14.3093 46.0992C12.589 46.1802 10.9758 46.128 9.58295 45.8749C8.21386 45.6261 6.89317 45.1542 5.92671 44.2628C4.20323 42.6732 3.43944 40.2042 3.17521 37.6106C2.90617 34.9698 3.12542 31.9127 3.63742 28.8174C4.66061 22.6316 6.90633 15.9845 9.18824 11.6317L9.21645 11.5779L9.24866 11.5264C9.49034 11.14 9.73611 10.7397 9.9865 10.3319C10.7322 9.11748 11.5187 7.83647 12.3595 6.65839C13.4954 5.06682 14.8194 3.52849 16.4837 2.38162C18.1755 1.21581 20.1784 0.482985 22.5992 0.454018ZM49.4515 36.4049C49.4521 36.4043 49.4527 36.4128 49.4514 36.4322C49.4502 36.4152 49.4509 36.4055 49.4515 36.4049Z" fill="black"/>
</svg>
`,
                withExternalLayout: !0,
              }),
              n(n1, {
                className: "framer-rw6956",
                "data-framer-name": "d",
                fill: "rgba(0,0,0,1)",
                intrinsicHeight: 167,
                intrinsicWidth: 85,
                layoutDependency: w,
                layoutId: "I15977:1457;15937:4438",
                svg: `<svg width="85" height="167" viewBox="0 0 85 167" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M57.2126 155.592C57.0065 159.716 56.7104 165.647 68.4413 164.937L68.9697 164.905C81.6705 164.137 83.6079 164.02 83.214 155.362C83.0601 151.979 82.7875 143.97 82.4648 134.492C81.9505 119.383 81.3091 100.54 80.8184 90.7346C80.0199 74.7772 75.628 33.2878 64.4487 18.5272C53.2693 3.76657 43.687 -0.621732 34.1047 4.56444C24.5224 9.75061 26.1194 16.5325 28.9143 22.1176C40.1401 44.5509 50.9129 67.2612 52.0715 92.7293C47.9192 84.1123 39.784 83.0378 30.5091 82.7559C16.9372 82.3434 -3.82748 96.3198 4.15778 129.431C12.143 162.543 24.923 164.937 35.7031 164.937C42.4107 164.937 52.8705 157.756 57.2619 154.165C57.2619 154.603 57.2379 155.084 57.2126 155.592ZM50.0761 115.07C50.3955 127.836 50.2091 132.623 50.0761 133.421C42.4901 134.485 27.3181 134.059 27.3181 123.846C27.3181 111.08 40.893 110.682 50.0761 115.07Z" fill="#F7F200"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M57.3059 159.474C57.076 158.167 57.1442 156.801 57.2046 155.591C57.23 155.083 57.254 154.602 57.254 154.165C55.5129 155.588 52.8178 157.576 49.7809 159.457C49.6777 159.456 49.5735 159.454 49.4683 159.452C46.9667 159.406 43.9168 159.351 39.28 159.351C38.3938 159.351 37.5237 159.373 36.6688 159.394C27.1235 159.631 19.4553 159.821 12.1265 129.431C4.83358 99.1899 21.5216 84.9101 34.8091 82.9757C42.252 83.5665 48.5686 85.4759 52.0636 92.7288C51.9403 90.0195 51.7083 87.3414 51.3784 84.6915C55.0017 86.0846 58.0012 88.4973 60.0403 92.7288C58.8817 67.2606 48.1089 44.5504 36.883 22.1171C34.0882 16.532 32.4911 9.75007 42.0734 4.5639C43.3251 3.88645 44.5768 3.37237 45.8321 3.02344C51.6935 4.62588 57.784 9.73747 64.4407 18.5267C75.6201 33.2873 80.012 74.7767 80.8105 90.7341C81.3012 100.54 81.9426 119.383 82.4569 134.491V134.491L82.4572 134.5C82.7036 141.738 82.9208 148.118 83.0782 152.235C82.1659 158.293 76.9038 158.542 70.6784 158.836C69.9391 158.871 69.1863 158.906 68.4256 158.952C63.2971 159.263 59.9713 159.413 57.3059 159.474ZM40.9444 133.693C34.1523 133.149 27.3101 130.704 27.3101 123.846C27.3101 114.916 33.9532 112.037 41.0888 112.616C44.6048 111.175 49.0528 112.339 52.4551 115.867C57.4319 121.028 58.2304 126.265 53.2536 131.426C49.6542 135.158 44.7282 135.637 40.9444 133.693Z" fill="#FE7D05"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M47.9975 5.51505C43.4709 3.43452 39.2086 3.60944 34.8524 5.96713C30.369 8.39366 28.7911 11.0132 28.4351 13.4239C28.0604 15.9613 28.967 18.6803 30.3298 21.4036C41.5441 43.8137 52.4781 66.8066 53.654 92.6564C53.6885 93.4138 53.1849 94.0908 52.4492 94.2762C51.7135 94.4616 50.9488 94.1042 50.6197 93.4211C48.7377 89.5156 46.0007 87.3618 42.6411 86.112C39.1973 84.8308 35.0791 84.4913 30.4477 84.3505C24.1793 84.16 16.0793 87.3157 10.4982 94.5001C4.9617 101.627 1.7956 112.878 5.69749 129.057C9.65737 145.477 14.7397 153.969 19.9078 158.388C25.0127 162.753 30.429 163.341 35.6902 163.341C38.5988 163.341 42.5766 161.737 46.5566 159.505C50.4654 157.314 54.1018 154.676 56.2376 152.93C56.7152 152.54 57.3752 152.459 57.9329 152.723C58.4906 152.987 58.8461 153.548 58.8461 154.165C58.8461 154.642 58.8204 155.156 58.7959 155.647L58.7947 155.671C58.6854 157.859 58.6497 159.77 59.6367 161.149C60.5181 162.38 62.6531 163.687 68.3318 163.344L68.8604 163.312C72.0573 163.118 74.496 162.97 76.3906 162.725C78.3098 162.476 79.4547 162.149 80.1704 161.722C80.7789 161.359 81.1503 160.881 81.3826 159.994C81.6413 159.005 81.7035 157.584 81.6057 155.434C81.4514 152.043 81.1788 144.035 80.8568 134.577L80.8558 134.545C80.3413 119.43 79.7003 100.603 79.2105 90.8139C78.814 82.8913 77.5229 68.6 74.9423 54.4681C73.6522 47.4028 72.0449 40.4067 70.0769 34.28C68.1006 28.1277 65.7961 22.9673 63.1623 19.4897C57.6322 12.1881 52.6347 7.64642 47.9975 5.51505ZM49.3323 2.61561C54.6767 5.07201 60.0599 10.1048 65.7093 17.5638C68.6651 21.4666 71.1018 27.0276 73.1182 33.3046C75.1427 39.6073 76.7795 46.7485 78.0846 53.8953C80.6944 68.1876 81.9985 82.6197 82.4006 90.6545C82.8919 100.473 83.5336 119.324 84.0476 134.423L84.0481 134.437C84.3709 143.922 84.6431 151.918 84.7965 155.289C84.8956 157.468 84.8633 159.309 84.4727 160.801C84.0556 162.395 83.2227 163.618 81.8085 164.462C80.5015 165.242 78.8052 165.63 76.8014 165.89C74.7854 166.151 72.2381 166.305 69.1111 166.494L68.525 166.529C68.5249 166.529 68.525 166.529 68.525 166.529C62.4729 166.896 58.8904 165.593 57.0386 163.005C55.8093 161.288 55.5522 159.234 55.5414 157.494C53.4466 159.025 50.8513 160.757 48.1197 162.289C44.0951 164.545 39.4892 166.532 35.6902 166.532C30.1713 166.532 23.8076 165.923 17.8311 160.813C11.9179 155.757 6.61764 146.496 2.59226 129.805C-1.4911 112.873 1.73252 100.579 7.97501 92.5432C14.173 84.5647 23.2412 80.9385 30.5448 81.1605C35.1882 81.3016 39.775 81.6402 43.7556 83.1211C46.0987 83.9927 48.2231 85.2564 50.0373 87.0729C47.69 64.2732 37.8482 43.5643 27.4729 22.8308C26.0408 19.969 24.7515 16.5045 25.2752 12.9581C25.8176 9.28498 28.2322 5.92051 33.3311 3.16087C38.5572 0.332388 43.8773 0.10837 49.3323 2.61561ZM34.8492 111.478C39.8509 110.215 45.9289 111.325 50.7522 113.63C51.2941 113.889 51.6447 114.43 51.6597 115.03C51.8197 121.424 51.8533 125.831 51.8298 128.746C51.8069 131.596 51.7302 133.133 51.6385 133.683C51.5238 134.37 50.9759 134.904 50.2851 135.001C46.3745 135.549 40.4528 135.729 35.432 134.405C32.917 133.742 30.502 132.669 28.6956 130.958C26.8437 129.204 25.7081 126.847 25.7081 123.846C25.7081 120.363 26.6393 117.572 28.3239 115.473C30.0027 113.382 32.3188 112.117 34.8492 111.478ZM30.8155 117.47C29.6679 118.9 28.9022 120.946 28.9022 123.846C28.9022 125.951 29.6631 127.477 30.893 128.642C32.1685 129.85 34.0206 130.732 36.2469 131.319C40.2174 132.366 44.9765 132.37 48.5665 131.996C48.5961 131.283 48.6238 130.221 48.6358 128.72C48.6577 126.003 48.6294 121.942 48.491 116.109C44.3136 114.316 39.4415 113.61 35.6319 114.572C33.6206 115.08 31.969 116.034 30.8155 117.47Z" fill="black"/>
</svg>
`,
                withExternalLayout: !0,
              }),
              n(n1, {
                className: "framer-10x6t9c",
                "data-framer-name": "e",
                fill: "rgba(0,0,0,1)",
                intrinsicHeight: 96,
                intrinsicWidth: 67,
                layoutDependency: w,
                layoutId: "I15977:1457;15937:4444",
                svg: `<svg width="67" height="96" viewBox="0 0 67 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M28.8238 51.995C27.3132 52.7701 26.4135 54.1877 25.77 55.6715C23.8405 60.1205 25.2868 64.223 28.7898 67.2856C29.8562 68.2179 32.3968 68.7535 33.7208 68.7535C37.4076 68.7535 41.2745 64.5541 45.1129 60.3856C50.2702 54.7848 55.3761 49.2398 59.9253 54.0112C74.5269 69.3265 52.7385 96.0592 26.1033 93.9048C17.0266 93.1707 12.365 83.3175 8.88724 75.9664C8.72436 75.6221 8.56409 75.2833 8.40607 74.9512C5.53037 68.9073 4.06394 62.2907 2.69291 55.7871C0.696733 41.9276 0.407002 23.932 13.2078 11.6958C23.1946 2.14959 45.9511 -4.63235 54.3356 12.921C58.5102 21.6608 59.1197 34.4894 55.1341 42.8411C52.6468 48.0532 45.7232 48.889 41.134 49.443C41.0099 49.4579 40.8876 49.4727 40.767 49.4873C40.2531 49.5498 39.7159 49.6099 39.1626 49.6718C35.7518 50.0532 31.7323 50.5027 28.8238 51.995ZM23.9916 38.0537C23.9916 32.4686 28.3835 21.6973 35.9695 22.4952C43.5555 23.293 44.354 31.2719 43.1562 32.0697C42.198 32.708 29.9805 36.325 23.9916 38.0537Z" fill="#F7F200"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M46.4855 2.54595C50.2951 4.39501 53.5437 7.53459 55.788 12.2332C57.9846 16.8318 59.2202 22.446 59.4022 27.9736C59.584 33.4938 58.7191 39.0592 56.5868 43.5274C55.0897 46.6645 52.2927 48.3879 49.4687 49.3917C46.6853 50.3811 43.6615 50.7461 41.4004 51.019L40.971 51.0709C40.4493 51.1343 39.9055 51.1951 39.3551 51.2567L39.3513 51.2571C35.8531 51.6483 32.1591 52.0827 29.5645 53.414C28.5453 53.9369 27.8375 54.9428 27.2465 56.3055C26.419 58.2136 26.3388 59.9737 26.7902 61.5621C27.2471 63.17 28.2811 64.7102 29.8526 66.0841C30.1012 66.3015 30.7081 66.5926 31.5838 66.8274C32.4153 67.0504 33.2398 67.1572 33.7319 67.1572C34.9954 67.1572 36.5144 66.417 38.3553 64.9009C40.1608 63.4138 42.0093 61.4109 43.9487 59.3047L44.0678 59.1754C46.5555 56.4734 49.2482 53.5488 51.9377 51.9393C53.3327 51.1045 54.8787 50.5259 56.5127 50.6127C58.1948 50.7019 59.7316 51.4824 61.0927 52.9101C65.0717 57.0835 66.5922 62.0827 66.1483 67.1474C65.7081 72.1697 63.3489 77.1778 59.7157 81.5307C52.4581 90.2259 39.86 96.6171 25.9855 95.4949C20.8333 95.0781 17.0335 92.0641 14.1515 88.403C11.305 84.787 9.20668 80.3516 7.48883 76.7205L7.45449 76.6479C7.29148 76.3033 7.13196 75.9661 6.97483 75.6359C4.00655 69.3974 2.50876 62.6023 1.14126 56.1155L1.13061 56.0649L1.12326 56.0139C-0.879476 42.1089 -1.30194 23.3673 12.1149 10.5423C17.3544 5.53395 25.8751 1.28387 34.2452 0.555833C38.4522 0.189901 42.6982 0.707754 46.4855 2.54595ZM34.5222 3.7353C26.9212 4.39645 19.0703 8.31047 14.323 12.8484C2.15314 24.4814 2.29479 41.7028 4.27746 55.5083C5.64878 62.0113 7.08362 68.4314 9.85953 74.2656C10.0183 74.5993 10.1793 74.9395 10.3419 75.2832C12.0955 78.9898 14.0581 83.1221 16.662 86.4299C19.2494 89.7167 22.3188 91.9964 26.2432 92.3138C39.004 93.3459 50.6177 87.4479 57.2627 79.4866C60.5808 75.5112 62.5956 71.0991 62.9664 66.869C63.3334 62.6811 62.1018 58.5955 58.78 55.1114C57.8666 54.1533 57.0592 53.8376 56.3433 53.7996C55.5794 53.7591 54.6736 54.0222 53.5788 54.6773C51.3317 56.022 48.9358 58.6023 46.2993 61.4656L46.2521 61.5168C44.3671 63.5639 42.3795 65.7225 40.3869 67.3636C38.4131 68.9892 36.1552 70.3487 33.7319 70.3487C32.9 70.3487 31.7923 70.1877 30.7559 69.9098C29.7636 69.6438 28.5671 69.201 27.7493 68.486C25.8178 66.7973 24.3771 64.755 23.7175 62.4338C23.0523 60.0931 23.2138 57.5775 24.3157 55.0365C25.0118 53.4316 26.1034 51.6022 28.1054 50.575C31.2766 48.9479 35.5349 48.4721 38.8367 48.1032L38.996 48.0854C39.5509 48.0234 40.0804 47.9641 40.5853 47.9028L40.9535 47.8582C43.275 47.578 45.9768 47.2455 48.3981 46.3849C50.805 45.5293 52.7134 44.2288 53.7037 42.1538C55.5569 38.2703 56.38 33.2455 56.2099 28.0786C56.0399 22.9191 54.8834 17.749 52.9054 13.6079C50.9574 9.52976 48.2172 6.93457 45.0898 5.41667C41.9401 3.88792 38.3007 3.40664 34.5222 3.7353ZM25.7903 27.0383C27.9651 23.5403 31.4498 20.4136 36.1478 20.9077C40.59 21.3749 43.1276 23.9966 44.3218 26.6216C44.9072 27.9085 45.1818 29.2143 45.2129 30.3032C45.2284 30.8441 45.1853 31.3842 45.058 31.8676C44.9495 32.2795 44.6984 32.9672 44.0532 33.397C43.863 33.5237 43.6424 33.6232 43.4933 33.6875C43.3156 33.7642 43.1049 33.8471 42.8735 33.9335C42.409 34.1069 41.8085 34.3144 41.1142 34.5448C39.7227 35.0066 37.9045 35.5768 35.9391 36.1781C32.0056 37.3815 27.4453 38.7205 24.4459 39.5862L22.4056 40.1752V38.0532C22.4056 34.9393 23.6 30.5613 25.7903 27.0383ZM25.8053 35.8681C28.5752 35.0598 31.9783 34.0521 35.004 33.1265C36.9613 32.5277 38.7515 31.966 40.1074 31.516C40.7869 31.2905 41.3448 31.0972 41.7553 30.9439C41.8486 30.9091 41.9317 30.8773 42.0048 30.8485C42.0177 30.7324 42.0254 30.581 42.0201 30.3944C42.0013 29.738 41.8267 28.8496 41.414 27.9423C40.6118 26.1789 38.9572 24.4123 35.8134 24.0816C32.9254 23.7779 30.4212 25.6379 28.5035 28.7224C27.1011 30.9781 26.1881 33.6366 25.8053 35.8681ZM41.9493 31.115C41.9488 31.1142 41.9521 31.1037 41.9604 31.086C41.9539 31.1069 41.9497 31.1158 41.9493 31.115Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.7966 51.3908C26.4414 49.9622 27.3431 48.5973 28.8568 47.8511C31.7715 46.4142 43.7847 44.3857 47.2027 44.0185L47.2028 44.0185C47.7572 43.9589 48.2956 43.9011 48.8105 43.8409L49.1782 43.7982C50.9471 43.593 53.0621 43.3477 55.1371 42.838C59.121 34.4862 58.5112 21.6597 54.3371 12.921C48.5488 0.803032 35.9111 0.282875 25.3538 4.26347C23.8109 5.26342 22.4078 6.33971 21.1931 7.45521C8.36528 19.2362 8.65563 36.5624 10.656 49.9063C12.03 56.168 13.4995 62.5385 16.3812 68.3576C16.5396 68.6774 16.7002 69.0036 16.8634 69.335C20.3486 76.4127 25.0199 85.8993 34.1158 86.6062C43.1793 87.3105 51.6827 84.8079 58.3884 80.6178C65.415 72.2725 67.2593 61.7022 59.9267 54.0112C58.3805 52.3894 56.77 51.9595 55.115 52.3185C54.4666 52.9763 53.8165 53.6546 53.1655 54.3338C51.7035 55.8593 49.0836 57.6197 46.1945 59.2159C45.8348 59.6032 45.4747 59.9943 45.1144 60.3856C41.2759 64.5541 37.4091 68.7535 33.7223 68.7535C32.3983 68.7535 29.8577 68.2179 28.7913 67.2856C25.7165 64.5974 24.2264 61.108 25.2128 57.2863C24.7181 55.449 24.8631 53.4588 25.7966 51.3908ZM35.971 22.4952C28.385 21.6973 23.9931 32.4686 23.9931 38.0537C29.982 36.325 42.1995 32.708 43.1577 32.0697C44.3555 31.2719 43.557 23.2931 35.971 22.4952Z" fill="#FE7D05"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M46.4855 2.54595C50.2951 4.39501 53.5437 7.53459 55.788 12.2332C57.9846 16.8318 59.2202 22.446 59.4022 27.9736C59.584 33.4938 58.7191 39.0592 56.5868 43.5274C55.0897 46.6645 52.2927 48.3879 49.4687 49.3917C46.6853 50.3811 43.6615 50.7461 41.4004 51.019L40.971 51.0709C40.4493 51.1343 39.9055 51.1951 39.3551 51.2567L39.3513 51.2571C35.8531 51.6483 32.1591 52.0827 29.5645 53.414C28.5453 53.9369 27.8375 54.9428 27.2465 56.3055C26.419 58.2136 26.3388 59.9737 26.7902 61.5621C27.2471 63.17 28.2811 64.7102 29.8526 66.0841C30.1012 66.3015 30.7081 66.5926 31.5838 66.8274C32.4153 67.0504 33.2398 67.1572 33.7319 67.1572C34.9954 67.1572 36.5144 66.417 38.3553 64.9009C40.1608 63.4138 42.0093 61.4109 43.9487 59.3047L44.0678 59.1754C46.5555 56.4734 49.2482 53.5488 51.9377 51.9393C53.3327 51.1045 54.8787 50.5259 56.5127 50.6127C58.1948 50.7019 59.7316 51.4824 61.0927 52.9101C65.0717 57.0835 66.5922 62.0827 66.1483 67.1474C65.7081 72.1697 63.3489 77.1778 59.7157 81.5307C52.4581 90.2259 39.86 96.6171 25.9855 95.4949C20.8333 95.0781 17.0335 92.0641 14.1515 88.403C11.305 84.787 9.20668 80.3516 7.48883 76.7205L7.45449 76.6479C7.29148 76.3033 7.13196 75.9661 6.97483 75.6359C4.00655 69.3974 2.50876 62.6023 1.14126 56.1155L1.13061 56.0649L1.12326 56.0139C-0.879476 42.1089 -1.30194 23.3673 12.1149 10.5423C17.3544 5.53395 25.8751 1.28387 34.2452 0.555833C38.4522 0.189901 42.6982 0.707754 46.4855 2.54595ZM34.5222 3.7353C26.9212 4.39645 19.0703 8.31047 14.323 12.8484C2.15314 24.4814 2.29479 41.7028 4.27746 55.5083C5.64878 62.0113 7.08362 68.4314 9.85953 74.2656C10.0183 74.5993 10.1793 74.9395 10.3419 75.2832C12.0955 78.9898 14.0581 83.1221 16.662 86.4299C19.2494 89.7167 22.3188 91.9964 26.2432 92.3138C39.004 93.3459 50.6177 87.4479 57.2627 79.4866C60.5808 75.5112 62.5956 71.0991 62.9664 66.869C63.3334 62.6811 62.1018 58.5955 58.78 55.1114C57.8666 54.1533 57.0592 53.8376 56.3433 53.7996C55.5794 53.7591 54.6736 54.0222 53.5788 54.6773C51.3317 56.022 48.9358 58.6023 46.2993 61.4656L46.2521 61.5168C44.3671 63.5639 42.3795 65.7225 40.3869 67.3636C38.4131 68.9892 36.1552 70.3487 33.7319 70.3487C32.9 70.3487 31.7923 70.1877 30.7559 69.9098C29.7636 69.6438 28.5671 69.201 27.7493 68.486C25.8178 66.7973 24.3771 64.755 23.7175 62.4338C23.0523 60.0931 23.2138 57.5775 24.3157 55.0365C25.0118 53.4316 26.1034 51.6022 28.1054 50.575C31.2766 48.9479 35.5349 48.4721 38.8367 48.1032L38.996 48.0854C39.5509 48.0234 40.0804 47.9641 40.5853 47.9028L40.9535 47.8582C43.275 47.578 45.9768 47.2455 48.3981 46.3849C50.805 45.5293 52.7134 44.2288 53.7037 42.1538C55.5569 38.2703 56.38 33.2455 56.2099 28.0786C56.0399 22.9191 54.8834 17.749 52.9054 13.6079C50.9574 9.52976 48.2172 6.93457 45.0898 5.41667C41.9401 3.88792 38.3007 3.40664 34.5222 3.7353ZM25.7903 27.0383C27.9651 23.5403 31.4498 20.4136 36.1478 20.9077C40.59 21.3749 43.1276 23.9966 44.3218 26.6216C44.9072 27.9085 45.1818 29.2143 45.2129 30.3032C45.2284 30.8441 45.1853 31.3842 45.058 31.8676C44.9495 32.2795 44.6984 32.9672 44.0532 33.397C43.863 33.5237 43.6424 33.6232 43.4933 33.6875C43.3156 33.7642 43.1049 33.8471 42.8735 33.9335C42.409 34.1069 41.8085 34.3144 41.1142 34.5448C39.7227 35.0066 37.9045 35.5768 35.9391 36.1781C32.0056 37.3815 27.4453 38.7205 24.4459 39.5862L22.4056 40.1752V38.0532C22.4056 34.9393 23.6 30.5613 25.7903 27.0383ZM25.8053 35.8681C28.5752 35.0598 31.9783 34.0521 35.004 33.1265C36.9613 32.5277 38.7515 31.966 40.1074 31.516C40.7869 31.2905 41.3448 31.0972 41.7553 30.9439C41.8486 30.9091 41.9317 30.8773 42.0048 30.8485C42.0177 30.7324 42.0254 30.581 42.0201 30.3944C42.0013 29.738 41.8267 28.8496 41.414 27.9423C40.6118 26.1789 38.9572 24.4123 35.8134 24.0816C32.9254 23.7779 30.4212 25.6379 28.5035 28.7224C27.1011 30.9781 26.1881 33.6366 25.8053 35.8681ZM41.9493 31.115C41.9488 31.1142 41.9521 31.1037 41.9604 31.086C41.9539 31.1069 41.9497 31.1158 41.9493 31.115Z" fill="black"/>
</svg>
`,
                withExternalLayout: !0,
              }),
              n(n1, {
                className: "framer-15xxpy0",
                "data-framer-name": "h",
                fill: "rgba(0,0,0,1)",
                intrinsicHeight: 164,
                intrinsicWidth: 96,
                layoutDependency: w,
                layoutId: "I15977:1457;15937:4450",
                svg: `<svg width="96" height="164" viewBox="0 0 96 164" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40.3033 17.2727C42.3033 4.90526 22.7544 -8.25958 11.1571 14.0812C0.131082 35.3216 1.45405 50.8097 2.37329 74.7195C3.62134 107.182 10.5077 125.908 25.9298 154.507C31.5232 164.879 54.6804 166.475 47.0907 141.342C42.3812 125.746 37.9077 116.94 37.9077 100.65C37.9077 84.3604 54.6804 92.6718 56.2738 98.2568C59.5431 109.716 60.6693 126.582 66.6583 140.544C72.6472 154.507 96.2037 144.534 93.8082 130.97C91.4126 117.406 88.4811 91.9972 81.431 78.7091C63.8635 45.5973 36.3106 68.3366 36.3106 68.3366C36.3106 68.3366 35.7229 45.596 40.3033 17.2727Z" fill="#F7F200"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.5882 4.84257C18.5352 6.36735 15.3531 9.44246 12.5639 14.8155C2.35092 34.4896 2.93352 49.0293 3.80608 70.8057C3.85653 72.0648 3.90795 73.348 3.9583 74.6578C5.19441 106.81 11.9815 125.296 27.3249 153.749C28.5188 155.963 30.7037 157.789 33.2814 158.893C35.8607 159.997 38.6767 160.311 41.0394 159.695C43.3416 159.094 45.2665 157.606 46.2638 154.907C47.2886 152.134 47.3945 147.908 45.5509 141.802C44.5185 138.384 43.4883 135.272 42.5102 132.318C39.0854 121.975 36.2998 113.562 36.2998 100.65C36.2998 96.3395 37.4084 93.274 39.4791 91.4276C41.5608 89.5713 44.2632 89.258 46.7478 89.6764C49.2324 90.0949 51.7053 91.2671 53.6625 92.6944C55.5672 94.0833 57.2557 95.9153 57.7988 97.8188C59.0239 102.113 59.9572 107.172 60.9333 112.463C61.2795 114.34 61.6311 116.246 62.003 118.157C63.4377 125.53 65.1911 133.098 68.1153 139.915C69.4135 142.942 71.6117 144.612 74.1711 145.305C76.7853 146.014 79.8633 145.719 82.7917 144.59C88.7728 142.284 93.2331 136.957 92.2246 131.247C91.7792 128.725 91.3221 125.842 90.8277 122.723C89.9706 117.317 89.0015 111.204 87.7872 105.044C85.8756 95.3451 83.4147 85.8748 80.0091 79.456C75.7345 71.399 70.9347 66.8891 66.2446 64.5461C61.5572 62.2045 56.8239 61.9496 52.5403 62.6785C48.2397 63.4103 44.425 65.1305 41.6655 66.6895C40.2909 67.466 39.1918 68.1949 38.4407 68.7261C38.0654 68.9915 37.778 69.2069 37.5875 69.3534C37.4922 69.4266 37.4213 69.4826 37.3758 69.5189C37.353 69.537 37.3366 69.5503 37.3268 69.5583L37.3169 69.5664L37.3159 69.5671L37.3156 69.5674L34.7879 71.6535L34.7033 68.3773L36.2998 68.3361C34.7033 68.3773 34.7032 68.377 34.7032 68.3766L34.7032 68.3755L34.7031 68.3716L34.7028 68.3577L34.7016 68.3053C34.7006 68.2594 34.6991 68.1918 34.6975 68.103C34.6942 67.9255 34.6901 67.6632 34.6865 67.3204C34.6793 66.6347 34.6742 65.6268 34.6825 64.3301C34.6991 61.7369 34.7692 57.988 34.9831 53.3519C35.4107 44.0819 36.4136 31.2534 38.7158 17.0177C39.5738 11.7122 35.7641 6.00562 30.3094 4.17344C27.6494 3.27997 24.6226 3.32708 21.5882 4.84257ZM37.8727 65.2565C37.8733 64.9729 37.8745 64.6708 37.8765 64.3505C37.8929 61.7948 37.9621 58.0883 38.1738 53.4989C38.5974 44.3177 39.5908 31.6143 41.869 17.5268C43.0111 10.4648 38.0463 3.40522 31.3272 1.14831C27.9003 -0.00275049 23.9904 0.0748679 20.1601 1.98784C16.3485 3.89153 12.738 7.54862 9.72851 13.346C-0.882259 33.7865 -0.265309 49.1024 0.608578 70.7969C0.661102 72.1008 0.714554 73.4278 0.766553 74.7803C2.02654 107.553 9.01215 126.518 24.513 155.263C26.1157 158.235 28.923 160.499 32.0233 161.826C35.1219 163.153 38.6697 163.612 41.8467 162.782C45.0843 161.937 47.8752 159.76 49.2601 156.013C50.6174 152.34 50.56 147.342 48.6088 140.88C47.5272 137.298 46.4675 134.094 45.4755 131.095C42.0912 120.861 39.4939 113.008 39.4939 100.65C39.4939 96.8153 40.4819 94.811 41.6058 93.8087C42.7188 92.8163 44.3092 92.5022 46.2169 92.8235C48.1247 93.1448 50.1437 94.0795 51.7795 95.2723C53.4679 96.5035 54.4734 97.8048 54.727 98.6937C55.9069 102.829 56.7987 107.662 57.7648 112.898C58.1167 114.805 58.4785 116.766 58.8676 118.766C60.3106 126.181 62.1148 134.027 65.1795 141.172C66.8758 145.127 69.868 147.446 73.335 148.386C76.7472 149.31 80.5315 148.882 83.9414 147.568C90.6369 144.986 96.7571 138.546 95.3701 130.692C94.9441 128.28 94.4945 125.447 94.0037 122.354C93.1372 116.893 92.1421 110.622 90.9211 104.427C89.0056 94.7086 86.4757 84.8305 82.8312 77.9611C78.3221 69.4622 73.0899 64.3976 67.673 61.6916C62.2533 58.9841 56.8045 58.7154 52.004 59.5323C47.2204 60.3463 43.049 62.2415 40.0933 63.9114C39.2553 64.3848 38.5106 64.8426 37.8727 65.2565Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M90.8703 140.816C93.1749 138.07 94.4375 134.652 93.7871 130.97C93.3514 128.503 92.898 125.645 92.4054 122.539C90.1891 108.565 87.1779 89.5806 81.4099 78.7091C63.8424 45.5973 36.2895 68.3366 36.2895 68.3366C36.2895 68.3366 35.7018 45.596 40.2822 17.2727C41.7405 8.25515 31.7425 -1.18635 21.7237 3.02072C20.2506 4.69203 18.8365 6.76535 17.5243 9.29327C7.11244 29.3504 7.71217 44.2784 8.58531 66.012C8.63682 67.294 8.68927 68.5997 8.74048 69.9316C9.98853 102.394 16.8749 121.12 32.297 149.719C35.0008 154.733 41.8089 157.696 47.2641 156.58C48.9082 153.341 49.199 148.393 47.0696 141.342C46.0129 137.842 44.968 134.685 43.9828 131.708C40.5777 121.418 37.8866 113.285 37.8866 100.65C37.8866 93.4783 41.1378 91.075 44.9134 91.1083C47.9946 81.4814 61.2342 88.5378 62.641 93.4688C63.8434 97.6835 64.756 102.63 65.7272 107.893C67.3966 116.942 69.2392 126.929 73.0255 135.756C76.1992 143.155 84.3063 143.833 90.8703 140.816Z" fill="#FE7D05"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.5882 4.84257C18.5352 6.36735 15.3531 9.44246 12.5639 14.8155C2.35092 34.4896 2.93352 49.0293 3.80608 70.8057C3.85653 72.0648 3.90795 73.348 3.9583 74.6578C5.19441 106.81 11.9815 125.296 27.3249 153.749C28.5188 155.963 30.7037 157.789 33.2814 158.893C35.8607 159.997 38.6767 160.311 41.0394 159.695C43.3416 159.094 45.2665 157.606 46.2638 154.907C47.2886 152.134 47.3945 147.908 45.5509 141.802C44.5185 138.384 43.4883 135.272 42.5102 132.318C39.0854 121.975 36.2998 113.562 36.2998 100.65C36.2998 96.3395 37.4084 93.274 39.4791 91.4276C41.5608 89.5713 44.2632 89.258 46.7478 89.6764C49.2324 90.0949 51.7053 91.2671 53.6625 92.6944C55.5672 94.0833 57.2557 95.9153 57.7988 97.8188C59.0239 102.113 59.9572 107.172 60.9333 112.463C61.2795 114.34 61.6311 116.246 62.003 118.157C63.4377 125.53 65.1911 133.098 68.1153 139.915C69.4135 142.942 71.6117 144.612 74.1711 145.305C76.7853 146.014 79.8633 145.719 82.7917 144.59C88.7728 142.284 93.2331 136.957 92.2246 131.247C91.7792 128.725 91.3221 125.842 90.8277 122.723C89.9706 117.317 89.0015 111.204 87.7872 105.044C85.8756 95.3451 83.4147 85.8748 80.0091 79.456C75.7345 71.399 70.9347 66.8891 66.2446 64.5461C61.5572 62.2045 56.8239 61.9496 52.5403 62.6785C48.2397 63.4103 44.425 65.1305 41.6655 66.6895C40.2909 67.466 39.1918 68.1949 38.4407 68.7261C38.0654 68.9915 37.778 69.2069 37.5875 69.3534C37.4922 69.4266 37.4213 69.4826 37.3758 69.5189C37.353 69.537 37.3366 69.5503 37.3268 69.5583L37.3169 69.5664L37.3159 69.5671L37.3156 69.5674L34.7879 71.6535L34.7033 68.3773L36.2998 68.3361C34.7033 68.3773 34.7032 68.377 34.7032 68.3766L34.7032 68.3755L34.7031 68.3716L34.7028 68.3577L34.7016 68.3053C34.7006 68.2594 34.6991 68.1918 34.6975 68.103C34.6942 67.9255 34.6901 67.6632 34.6865 67.3204C34.6793 66.6347 34.6742 65.6268 34.6825 64.3301C34.6991 61.7369 34.7692 57.988 34.9831 53.3519C35.4107 44.0819 36.4136 31.2534 38.7158 17.0177C39.5738 11.7122 35.7641 6.00562 30.3094 4.17344C27.6494 3.27997 24.6226 3.32708 21.5882 4.84257ZM37.8727 65.2565C37.8733 64.9729 37.8745 64.6708 37.8765 64.3505C37.8929 61.7948 37.9621 58.0883 38.1738 53.4989C38.5974 44.3177 39.5908 31.6143 41.869 17.5268C43.0111 10.4648 38.0463 3.40522 31.3272 1.14831C27.9003 -0.00275054 23.9904 0.074868 20.1601 1.98784C16.3485 3.89153 12.738 7.54862 9.72851 13.346C-0.882259 33.7865 -0.265309 49.1024 0.608578 70.7969C0.661102 72.1008 0.714554 73.4278 0.766553 74.7803C2.02654 107.553 9.01215 126.518 24.513 155.263C26.1157 158.235 28.923 160.499 32.0233 161.826C35.1219 163.153 38.6697 163.612 41.8467 162.782C45.0843 161.937 47.8752 159.76 49.2601 156.013C50.6174 152.34 50.56 147.342 48.6088 140.88C47.5272 137.298 46.4675 134.094 45.4755 131.095C42.0912 120.861 39.4939 113.008 39.4939 100.65C39.4939 96.8153 40.4819 94.811 41.6058 93.8087C42.7188 92.8163 44.3092 92.5022 46.2169 92.8235C48.1247 93.1448 50.1437 94.0795 51.7795 95.2723C53.4679 96.5035 54.4734 97.8048 54.727 98.6937C55.9069 102.829 56.7987 107.663 57.7648 112.898C58.1167 114.805 58.4785 116.766 58.8676 118.766C60.3106 126.181 62.1148 134.027 65.1795 141.172C66.8758 145.127 69.868 147.446 73.335 148.386C76.7472 149.31 80.5315 148.882 83.9414 147.568C90.6369 144.986 96.7571 138.546 95.3701 130.692C94.9441 128.28 94.4945 125.447 94.0037 122.354C93.1372 116.893 92.1421 110.622 90.9211 104.427C89.0056 94.7086 86.4757 84.8305 82.8312 77.9611C78.3221 69.4622 73.0899 64.3976 67.673 61.6916C62.2533 58.9841 56.8045 58.7154 52.004 59.5323C47.2204 60.3463 43.049 62.2415 40.0933 63.9114C39.2553 64.3848 38.5106 64.8426 37.8727 65.2565Z" fill="black"/>
</svg>
`,
                withExternalLayout: !0,
              }),
              n(n1, {
                className: "framer-1hecong",
                "data-framer-name": "Vector 3 (Stroke)",
                fill: "rgba(0,0,0,1)",
                intrinsicHeight: 34,
                intrinsicWidth: 23,
                layoutDependency: w,
                layoutId: "I15977:1457;15937:4468",
                svg: `<svg width="23" height="34" viewBox="-5 -5 23 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.35649 1.02507C2.08331 0.525789 3.0776 0.709766 3.5773 1.436C5.77272 4.62673 8.02406 7.99581 9.72415 11.3417C11.4173 14.6739 12.6421 18.1303 12.6421 21.489C12.6421 22.3703 11.9271 23.0847 11.045 23.0847C10.163 23.0847 9.44799 22.3703 9.44799 21.489C9.44799 18.8636 8.47686 15.937 6.87607 12.7865C5.28224 9.64968 3.14169 6.43632 0.945225 3.24407C0.445532 2.51784 0.62966 1.52436 1.35649 1.02507Z" fill="black"/>
</svg>
`,
                withExternalLayout: !0,
              }),
              n(n1, {
                className: "framer-6g9djq",
                "data-framer-name": "Vector 4 (Stroke)",
                fill: "rgba(0,0,0,1)",
                intrinsicHeight: 25,
                intrinsicWidth: 29,
                layoutDependency: w,
                layoutId: "I15977:1457;15937:4469",
                svg: `<svg width="29" height="25" viewBox="-5 -5 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.9984 1.10404C15.7535 1.5595 15.9961 2.54036 15.5403 3.29485C14.2443 5.43992 12.8409 7.69497 11.295 9.62228C9.75872 11.5376 7.97993 13.2615 5.8804 14.2119C5.07698 14.5756 4.1306 14.2197 3.76661 13.4169C3.40261 12.6142 3.75883 11.6686 4.56225 11.3049C5.99325 10.6571 7.39386 9.38268 8.80258 7.62639C10.2017 5.88207 11.5089 3.79213 12.8058 1.64548C13.2616 0.89099 14.2433 0.648581 14.9984 1.10404Z" fill="black"/>
</svg>
`,
                withExternalLayout: !0,
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Yt = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-78WB1.framer-xqs1b, .framer-78WB1 .framer-xqs1b { display: block; }",
    ".framer-78WB1.framer-kmubns { height: 164px; overflow: visible; position: relative; width: 236px; }",
    ".framer-78WB1 .framer-3kyfgz { flex: none; height: 191px; left: calc(51.27118644067799% - 274px / 2); position: absolute; top: calc(41.46341463414636% - 191px / 2); width: 274px; }",
    ".framer-78WB1 .framer-1cxz0ge, .framer-78WB1 .framer-151wvt1 { flex: none; height: 191px; left: calc(46.186440677966125% - 275px / 2); position: absolute; top: calc(36.58536585365856% - 191px / 2); width: 275px; }",
    ".framer-78WB1 .framer-4o1m7e { flex: none; height: 169px; left: calc(47.03389830508477% - 255px / 2); position: absolute; top: calc(36.58536585365856% - 169px / 2); width: 255px; }",
    ".framer-78WB1 .framer-suigrx { flex: none; height: 108px; left: calc(80.50847457627121% - 79px / 2); position: absolute; top: calc(50.609756097561% - 108px / 2); width: 79px; }",
    ".framer-78WB1 .framer-rw6956 { flex: none; height: 147px; left: calc(52.54237288135596% - 75px / 2); position: absolute; top: calc(28.048780487804905% - 147px / 2); width: 75px; }",
    ".framer-78WB1 .framer-10x6t9c { flex: none; height: 85px; left: calc(31.35593220338985% - 59px / 2); position: absolute; top: calc(53.65853658536588% - 85px / 2); width: 59px; }",
    ".framer-78WB1 .framer-15xxpy0 { flex: none; height: 144px; left: calc(9.322033898305108% - 85px / 2); position: absolute; top: calc(39.63414634146344% - 144px / 2); width: 85px; }",
    ".framer-78WB1 .framer-1hecong { flex: none; height: 29px; left: calc(57.62711864406782% - 21px / 2); position: absolute; top: calc(38.414634146341484% - 29px / 2); width: 21px; }",
    ".framer-78WB1 .framer-6g9djq { flex: none; height: 22px; left: calc(58.898305084745786% - 27px / 2); position: absolute; top: calc(64.63414634146343% - 22px / 2); width: 27px; }",
  ],
  B1 = K(Kt, Yt, "framer-78WB1"),
  t3 = B1;
B1.displayName = "hedz-logo";
B1.defaultProps = { height: 164, width: 236 };
Q(B1, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 });
var Qt = ["K9kog_LnC", "rTp3awTpE"],
  $t = "framer-oEu2M",
  er = { K9kog_LnC: "framer-v-t2vgi5", rTp3awTpE: "framer-v-1ymku0h" };
function pe(t, ...e) {
  let r = {};
  return e?.forEach((a) => a && Object.assign(r, t[a])), r;
}
var tr = { delay: 0, duration: 0.6, ease: [0.16, 1, 0.3, 1], type: "tween" },
  rr = { delay: 0, duration: 1, ease: [0.16, 1, 0.3, 1], type: "tween" },
  ar = ({ value: t, children: e }) => {
    let r = Z(_),
      a = t ?? r.transition,
      i = A(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
    return n(_.Provider, { value: i, children: e });
  },
  nr = p.create(R),
  or = { "Variant 2": "rTp3awTpE", default: "K9kog_LnC" },
  ir = ({
    click: t,
    height: e,
    id: r,
    navLinkLine1: a,
    navLinkLine2: i,
    width: s,
    ...o
  }) => {
    var c, m, f, C;
    return {
      ...o,
      bc4gpC1kn: (c = i ?? o.bc4gpC1kn) !== null && c !== void 0 ? c : "line2",
      iJnaH99Wh: (m = a ?? o.iJnaH99Wh) !== null && m !== void 0 ? m : "Line1",
      S7NWOLakN: t ?? o.S7NWOLakN,
      variant:
        (C = (f = or[o.variant]) !== null && f !== void 0 ? f : o.variant) !==
          null && C !== void 0
          ? C
          : "K9kog_LnC",
    };
  },
  sr = (t, e) =>
    t.layoutDependency ? e.join("-") + t.layoutDependency : e.join("-"),
  lr = z(function (t, e) {
    let { activeLocale: r, setLocale: a } = G(),
      {
        style: i,
        className: s,
        layoutId: o,
        variant: c,
        iJnaH99Wh: m,
        bc4gpC1kn: f,
        S7NWOLakN: C,
        ...y
      } = ir(t),
      {
        baseVariant: g,
        classNames: u,
        clearLoadingGesture: x,
        gestureHandlers: N,
        gestureVariant: O,
        isLoading: S,
        setGestureState: w,
        setVariant: F,
        variants: H,
      } = Y({
        cycleOrder: Qt,
        defaultVariant: "K9kog_LnC",
        variant: c,
        variantClassNames: er,
      }),
      V = sr(t, H),
      { activeVariantCallback: b, delay: v } = o1(g),
      I = b(async (...t1) => {
        if ((w({ isPressed: !1 }), C && (await C(...t1)) === !1)) return !1;
      }),
      E = b(async (...t1) => {
        w({ isHovered: !0 }), F("rTp3awTpE");
      }),
      $ = b(async (...t1) => {
        w({ isHovered: !1 }), F("K9kog_LnC");
      }),
      e1 = B(null),
      M = X(),
      a1 = [],
      s1 = J();
    return n(j, {
      id: o ?? M,
      children: n(nr, {
        animate: H,
        initial: !1,
        children: n(ar, {
          value: tr,
          ...pe({ rTp3awTpE: { value: rr } }, g, O),
          children: P(p.div, {
            ...y,
            ...N,
            className: W($t, ...a1, "framer-t2vgi5", s, u),
            "data-framer-name": "default",
            "data-highlight": !0,
            layoutDependency: V,
            layoutId: "K9kog_LnC",
            onMouseEnter: E,
            onTap: I,
            ref: e ?? e1,
            style: { ...i },
            ...pe(
              {
                rTp3awTpE: { "data-framer-name": "Variant 2", onMouseLeave: $ },
              },
              g,
              O
            ),
            children: [
              P(p.div, {
                className: "framer-uaqbk6",
                "data-framer-name": "line1",
                layoutDependency: V,
                layoutId: "UBdmyFnfK",
                children: [
                  n(r1, {
                    __fromCanvasComponent: !0,
                    children: n(R, {
                      children: n(p.p, {
                        style: {
                          "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                          "--framer-font-family":
                            '"Inter", "Inter Placeholder", sans-serif',
                          "--framer-font-size": "14px",
                          "--framer-font-weight": "600",
                          "--framer-letter-spacing": "-0.02em",
                          "--framer-line-height": "1em",
                          "--framer-text-alignment": "center",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)))",
                          "--framer-text-transform": "uppercase",
                        },
                        children: "Line1",
                      }),
                    }),
                    className: "framer-f2ny9p",
                    "data-framer-name": "line1",
                    fonts: ["Inter-SemiBold"],
                    layoutDependency: V,
                    layoutId: "t0nXpmqAC",
                    style: {
                      "--extracted-r6o4lv":
                        "var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151))",
                      opacity: 1,
                    },
                    text: m,
                    variants: { rTp3awTpE: { opacity: 0 } },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  n(r1, {
                    __fromCanvasComponent: !0,
                    children: n(R, {
                      children: n(p.p, {
                        style: {
                          "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                          "--framer-font-family":
                            '"Inter", "Inter Placeholder", sans-serif',
                          "--framer-font-size": "14px",
                          "--framer-font-weight": "600",
                          "--framer-letter-spacing": "-0.02em",
                          "--framer-line-height": "1em",
                          "--framer-text-alignment": "center",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)))",
                          "--framer-text-transform": "uppercase",
                        },
                        children: "Line1",
                      }),
                    }),
                    className: "framer-p5vqro",
                    "data-framer-name": "line1",
                    fonts: ["Inter-SemiBold"],
                    layoutDependency: V,
                    layoutId: "mvY92Qj1h",
                    style: {
                      "--extracted-r6o4lv":
                        "var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151))",
                      opacity: 0,
                    },
                    text: m,
                    variants: { rTp3awTpE: { opacity: 1 } },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                ],
              }),
              P(p.div, {
                className: "framer-1asctfb",
                "data-framer-name": "line2",
                layoutDependency: V,
                layoutId: "mpbPSIhVr",
                children: [
                  n(r1, {
                    __fromCanvasComponent: !0,
                    children: n(R, {
                      children: n(p.p, {
                        style: {
                          "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                          "--framer-font-family":
                            '"Inter", "Inter Placeholder", sans-serif',
                          "--framer-font-size": "14px",
                          "--framer-font-weight": "600",
                          "--framer-letter-spacing": "-0.02em",
                          "--framer-line-height": "1em",
                          "--framer-text-alignment": "center",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)))",
                          "--framer-text-transform": "uppercase",
                        },
                        children: "line2",
                      }),
                    }),
                    className: "framer-tzmac5",
                    "data-framer-name": "line1",
                    fonts: ["Inter-SemiBold"],
                    layoutDependency: V,
                    layoutId: "aZKyUyJ33",
                    style: {
                      "--extracted-r6o4lv":
                        "var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151))",
                      opacity: 0,
                    },
                    text: f,
                    variants: { rTp3awTpE: { opacity: 1 } },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  n(r1, {
                    __fromCanvasComponent: !0,
                    children: n(R, {
                      children: n(p.p, {
                        style: {
                          "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                          "--framer-font-family":
                            '"Inter", "Inter Placeholder", sans-serif',
                          "--framer-font-size": "14px",
                          "--framer-font-weight": "600",
                          "--framer-letter-spacing": "-0.02em",
                          "--framer-line-height": "1em",
                          "--framer-text-alignment": "center",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151)))",
                          "--framer-text-transform": "uppercase",
                        },
                        children: "line2",
                      }),
                    }),
                    className: "framer-4kwozy",
                    "data-framer-name": "line1",
                    fonts: ["Inter-SemiBold"],
                    layoutDependency: V,
                    layoutId: "ldtIG1gLU",
                    style: {
                      "--extracted-r6o4lv":
                        "var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151))",
                      opacity: 1,
                    },
                    text: f,
                    variants: { rTp3awTpE: { opacity: 0 } },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }),
  cr = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-oEu2M.framer-17qxx0, .framer-oEu2M .framer-17qxx0 { display: block; }",
    ".framer-oEu2M.framer-t2vgi5 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-oEu2M .framer-uaqbk6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 14px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-oEu2M .framer-f2ny9p, .framer-oEu2M .framer-p5vqro, .framer-oEu2M .framer-tzmac5, .framer-oEu2M .framer-4kwozy { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-oEu2M .framer-1asctfb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 14px; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-oEu2M.framer-t2vgi5, .framer-oEu2M .framer-uaqbk6, .framer-oEu2M .framer-1asctfb { gap: 0px; } .framer-oEu2M.framer-t2vgi5 > * { margin: 0px; margin-bottom: calc(2px / 2); margin-top: calc(2px / 2); } .framer-oEu2M.framer-t2vgi5 > :first-child, .framer-oEu2M .framer-uaqbk6 > :first-child, .framer-oEu2M .framer-1asctfb > :first-child { margin-top: 0px; } .framer-oEu2M.framer-t2vgi5 > :last-child, .framer-oEu2M .framer-uaqbk6 > :last-child, .framer-oEu2M .framer-1asctfb > :last-child { margin-bottom: 0px; } .framer-oEu2M .framer-uaqbk6 > *, .framer-oEu2M .framer-1asctfb > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } }",
    ".framer-oEu2M.framer-v-1ymku0h .framer-uaqbk6 { justify-content: flex-end; }",
    ".framer-oEu2M.framer-v-1ymku0h .framer-1asctfb { justify-content: flex-start; }",
  ],
  S1 = K(lr, cr, "framer-oEu2M"),
  F1 = S1;
S1.displayName = "nav-button";
S1.defaultProps = { height: 30, width: 38 };
U(S1, {
  variant: {
    options: ["K9kog_LnC", "rTp3awTpE"],
    optionTitles: ["default", "Variant 2"],
    title: "Variant",
    type: d.Enum,
  },
  iJnaH99Wh: {
    defaultValue: "Line1",
    displayTextArea: !1,
    title: "nav-link-line-1",
    type: d.String,
  },
  bc4gpC1kn: {
    defaultValue: "line2",
    description: "",
    displayTextArea: !1,
    placeholder: "",
    title: "nav-link-line-2",
    type: d.String,
  },
  S7NWOLakN: { title: "Click", type: d.EventHandler },
});
Q(
  S1,
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
  ],
  { supportsExplicitInterCodegen: !0 }
);
var dr = i1(C1),
  mr = i1(F1),
  ur = ["CPQXUw5E1", "fkNkytigO", "KkzwvC4PP"],
  fr = "framer-7kt7q",
  pr = {
    CPQXUw5E1: "framer-v-slpmyp",
    fkNkytigO: "framer-v-10q279z",
    KkzwvC4PP: "framer-v-onbgv7",
  };
function m1(t, ...e) {
  let r = {};
  return e?.forEach((a) => a && Object.assign(r, t[a])), r;
}
var hr = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  he = { bounce: 0.2, delay: 0, duration: 1.5, type: "spring" },
  Ce = (t, e) => `translateX(-50%) ${e}`,
  Cr = ({ value: t, children: e }) => {
    let r = Z(_),
      a = t ?? r.transition,
      i = A(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
    return n(_.Provider, { value: i, children: e });
  },
  gr = {
    "mobile-default": "fkNkytigO",
    "mobile-scrolled": "KkzwvC4PP",
    "Nav-desktop": "CPQXUw5E1",
  },
  yr = ({
    click2: t,
    height: e,
    id: r,
    modalContract: a,
    modalLinks: i,
    modalTokenomics: s,
    width: o,
    ...c
  }) => {
    var m, f;
    return {
      ...c,
      fFb00J628: i ?? c.fFb00J628,
      JVT3l9ZWK: s ?? c.JVT3l9ZWK,
      pRhHMD2y3: a ?? c.pRhHMD2y3,
      variant:
        (f = (m = gr[c.variant]) !== null && m !== void 0 ? m : c.variant) !==
          null && f !== void 0
          ? f
          : "CPQXUw5E1",
      xmJcbXRDb: t ?? c.xmJcbXRDb,
    };
  },
  vr = (t, e) =>
    t.layoutDependency ? e.join("-") + t.layoutDependency : e.join("-"),
  xr = p.create(R),
  wr = z(function (t, e) {
    let { activeLocale: r, setLocale: a } = G(),
      {
        style: i,
        className: s,
        layoutId: o,
        variant: c,
        fFb00J628: m,
        pRhHMD2y3: f,
        JVT3l9ZWK: C,
        xmJcbXRDb: y,
        ...g
      } = yr(t),
      {
        baseVariant: u,
        classNames: x,
        clearLoadingGesture: N,
        gestureHandlers: O,
        gestureVariant: S,
        isLoading: w,
        setGestureState: F,
        setVariant: H,
        variants: V,
      } = Y({
        cycleOrder: ur,
        defaultVariant: "CPQXUw5E1",
        variant: c,
        variantClassNames: pr,
      }),
      b = vr(t, V),
      { activeVariantCallback: v, delay: I } = o1(u),
      E = v(async (...T) => {
        if ((F({ isPressed: !1 }), y && (await y(...T)) === !1)) return !1;
      }),
      $ = v(async (...T) => {
        if (m && (await m(...T)) === !1) return !1;
      }),
      e1 = v(async (...T) => {
        if (f && (await f(...T)) === !1) return !1;
      }),
      M = v(async (...T) => {
        if (C && (await C(...T)) === !1) return !1;
      }),
      s1 = W(fr, ...[]),
      t1 = B(null),
      p1 = X(),
      l = J();
    return n(j, {
      id: o ?? p1,
      children: n(xr, {
        animate: V,
        initial: !1,
        children: n(Cr, {
          value: hr,
          ...m1({ fkNkytigO: { value: he }, KkzwvC4PP: { value: he } }, u, S),
          children: P(p.div, {
            ...g,
            ...O,
            className: W(s1, "framer-slpmyp", s, x),
            "data-framer-name": "Nav-desktop",
            "data-highlight": !0,
            layoutDependency: b,
            layoutId: "CPQXUw5E1",
            onTap: E,
            ref: e ?? t1,
            style: {
              backdropFilter: "blur(32px)",
              backgroundColor: "rgba(255, 255, 255, 0.11)",
              borderBottomLeftRadius: 800,
              borderBottomRightRadius: 800,
              borderTopLeftRadius: 800,
              borderTopRightRadius: 800,
              WebkitBackdropFilter: "blur(32px)",
              ...i,
            },
            variants: {
              fkNkytigO: {
                borderBottomLeftRadius: 19,
                borderBottomRightRadius: 19,
                borderTopLeftRadius: 19,
                borderTopRightRadius: 19,
              },
              KkzwvC4PP: {
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              },
            },
            ...m1(
              {
                fkNkytigO: { "data-framer-name": "mobile-default" },
                KkzwvC4PP: { "data-framer-name": "mobile-scrolled" },
              },
              u,
              S
            ),
            children: [
              n(I1, {
                href: { hash: ":aOEW7apm9", webPageId: "augiA20Il" },
                nodeId: "wrk4LhGmb",
                openInNewTab: !1,
                smoothScroll: !0,
                children: P(p.a, {
                  className: "framer-1papb0b framer-1dqhfio",
                  "data-framer-name": "logo",
                  layoutDependency: b,
                  layoutId: "wrk4LhGmb",
                  ...m1(
                    {
                      fkNkytigO: { transformTemplate: Ce },
                      KkzwvC4PP: { transformTemplate: Ce },
                    },
                    u,
                    S
                  ),
                  children: [
                    n(u1, {
                      background: {
                        alt: "",
                        fit: "fill",
                        loading: c1(
                          (l?.y || 0) +
                            (4 + ((l?.height || 53) - 8 - 45) / 2) +
                            0
                        ),
                        sizes: "45px",
                        src: "/framerusercontent.com/images/2CyawhHhk99tNXBN1u7VRCipADw.png",
                        srcSet:
                          "/framerusercontent.com/images/2CyawhHhk99tNXBN1u7VRCipADw.png?scale-down-to=512 512w,/framerusercontent.com/images/2CyawhHhk99tNXBN1u7VRCipADw.png?scale-down-to=1024 1024w,/framerusercontent.com/images/2CyawhHhk99tNXBN1u7VRCipADw.png 1116w",
                      },
                      className: "framer-mtjo7t",
                      "data-framer-name": "image 72",
                      layoutDependency: b,
                      layoutId: "K3tQ0WJqu",
                      style: {
                        borderBottomLeftRadius: 234.15,
                        borderBottomRightRadius: 234.15,
                        borderTopLeftRadius: 234.15,
                        borderTopRightRadius: 234.15,
                      },
                      ...m1(
                        {
                          fkNkytigO: {
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: c1(
                                (l?.y || 0) + (l?.height || 128) - 128 + 8
                              ),
                              sizes: "45px",
                              src: "/framerusercontent.com/images/2CyawhHhk99tNXBN1u7VRCipADw.png",
                              srcSet:
                                "/framerusercontent.com/images/2CyawhHhk99tNXBN1u7VRCipADw.png?scale-down-to=512 512w,/framerusercontent.com/images/2CyawhHhk99tNXBN1u7VRCipADw.png?scale-down-to=1024 1024w,/framerusercontent.com/images/2CyawhHhk99tNXBN1u7VRCipADw.png 1116w",
                            },
                          },
                          KkzwvC4PP: {
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: c1(
                                (l?.y || 0) + (l?.height || 63) - 128 + 8
                              ),
                              sizes: "45px",
                              src: "/framerusercontent.com/images/2CyawhHhk99tNXBN1u7VRCipADw.png",
                              srcSet:
                                "/framerusercontent.com/images/2CyawhHhk99tNXBN1u7VRCipADw.png?scale-down-to=512 512w,/framerusercontent.com/images/2CyawhHhk99tNXBN1u7VRCipADw.png?scale-down-to=1024 1024w,/framerusercontent.com/images/2CyawhHhk99tNXBN1u7VRCipADw.png 1116w",
                            },
                          },
                        },
                        u,
                        S
                      ),
                    }),
                    n(q, {
                      children: n(p.div, {
                        className: "framer-1b4h593-container",
                        layoutDependency: b,
                        layoutId: "HTf2m9qMA-container",
                        children: n(C1, {
                          customColor:
                            "var(--token-cf50e1e4-7f55-4aa2-9af8-f61c3d25e531, rgb(243, 245, 151))",
                          customPadding: 0,
                          customStrokeWidth: 2,
                          customSvgCode:
                            '<svg width="133" height="17" viewBox="0 0 133 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0 1.05979H6.74V11.0998H17.06V15.9398H0V1.05979Z" fill="#F3F597"/> <path d="M25.0208 1.05979V15.9398H18.3008V1.05979H25.0208Z" fill="#F3F597"/> <path d="M26.582 1.05979H33.322V11.0998H43.642V15.9398H26.582V1.05979Z" fill="#F3F597"/> <path d="M44.8828 1.05979H61.8228V4.99978H51.5228V6.47978H61.6428V10.3998H51.5228V15.9398H44.8828V1.05979Z" fill="#F3F597"/> <path d="M69.9041 4.91979V7.09978H75.8841C77.0041 7.09978 77.4041 6.63978 77.4041 6.01978V5.99979C77.4041 5.37979 77.0041 4.91979 75.8841 4.91979H69.9041ZM69.9041 11.0198V15.9398H63.1641V1.05979H78.3041C82.0441 1.05979 84.3441 2.11978 84.3441 4.83979V5.03979C84.3441 7.27979 82.3441 8.11978 81.1041 8.43979C83.2041 8.85979 84.4041 10.1598 84.4041 12.0798V14.3198C84.4041 15.1998 84.5241 15.5598 84.6841 15.8198V15.9398H77.7641C77.6641 15.8398 77.6241 15.6398 77.6241 15.3398V13.5598C77.6241 11.9598 76.8641 11.0198 74.6841 11.0198H69.9041Z" fill="#F3F597"/> <path d="M96.3478 0.779785H97.3078C107.168 0.779785 108.568 5.17978 108.568 8.15978V8.75978C108.568 11.6998 107.168 16.2198 97.3078 16.2198H96.3478C86.5078 16.2198 85.1078 11.6998 85.1078 8.75978V8.15978C85.1078 5.17978 86.5078 0.779785 96.3478 0.779785ZM101.588 8.55978V8.27979C101.588 6.83979 100.568 5.17978 96.8278 5.17978C92.9878 5.17978 92.0678 6.83979 92.0678 8.27979V8.51978C92.0678 9.97979 93.0878 11.7798 96.8278 11.7798C100.568 11.7798 101.588 10.0198 101.588 8.55978Z" fill="#F3F597"/> <path d="M120.007 16.2198H119.507C111.247 16.2198 109.327 12.0198 109.327 8.73979V8.13979C109.327 4.61978 111.367 0.779785 120.367 0.779785H121.067C130.947 0.779785 132.107 4.47979 132.107 6.59979V6.61979H125.167C125.067 6.23979 124.547 4.99978 120.867 4.99978C117.427 4.99978 116.287 6.47979 116.287 8.33979V8.51978C116.287 10.3798 117.507 12.0598 120.807 12.0598C124.207 12.0598 125.147 10.9198 125.147 10.4998H120.607V7.51978H132.207V15.9398H127.787C127.687 15.4798 127.307 14.5998 126.967 14.1598C126.447 14.6798 124.627 16.2198 120.007 16.2198Z" fill="#F3F597"/> </svg>',
                          description: "",
                          height: "100%",
                          id: "HTf2m9qMA",
                          layoutId: "HTf2m9qMA",
                          lineCap: "butt",
                          lineJoin: "miter",
                          style: { height: "100%", width: "100%" },
                          title: "",
                          width: "100%",
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              P(p.div, {
                className: "framer-1hyvei4",
                "data-framer-name": "btns",
                layoutDependency: b,
                layoutId: "rBV2R2ZeE",
                style: {
                  "--border-bottom-width": "0px",
                  "--border-color": "rgba(0, 0, 0, 0)",
                  "--border-left-width": "0px",
                  "--border-right-width": "0px",
                  "--border-style": "solid",
                  "--border-top-width": "0px",
                },
                variants: {
                  fkNkytigO: {
                    "--border-bottom-width": "0px",
                    "--border-color": "rgba(243, 245, 151, 0.1)",
                    "--border-left-width": "0px",
                    "--border-right-width": "0px",
                    "--border-style": "solid",
                    "--border-top-width": "1px",
                  },
                },
                ...m1({ fkNkytigO: { "data-border": !0 } }, u, S),
                children: [
                  n(q, {
                    height: 37,
                    y:
                      (l?.y || 0) +
                      (4 +
                        ((l?.height || 53) - 8 - ((l?.height || 53) - 8) * 1) /
                          2) +
                      (0 + (((l?.height || 53) - 8) * 1 - 0 - 37) / 2),
                    ...m1(
                      {
                        fkNkytigO: {
                          y: (l?.y || 0) + (l?.height || 128) - 62 + 13,
                        },
                        KkzwvC4PP: {
                          y: (l?.y || 0) + (l?.height || 63) - 62 + 13,
                        },
                      },
                      u,
                      S
                    ),
                    children: n(p.div, {
                      className: "framer-1ogpm92-container",
                      layoutDependency: b,
                      layoutId: "WzX9C8B3r-container",
                      children: n(F1, {
                        bc4gpC1kn: "Links",
                        height: "100%",
                        id: "WzX9C8B3r",
                        iJnaH99Wh: "Essential",
                        layoutId: "WzX9C8B3r",
                        S7NWOLakN: $,
                        style: { height: "100%" },
                        variant: "K9kog_LnC",
                        width: "100%",
                      }),
                    }),
                  }),
                  n(q, {
                    height: 37,
                    y:
                      (l?.y || 0) +
                      (4 +
                        ((l?.height || 53) - 8 - ((l?.height || 53) - 8) * 1) /
                          2) +
                      (0 + (((l?.height || 53) - 8) * 1 - 0 - 37) / 2),
                    ...m1(
                      {
                        fkNkytigO: {
                          y: (l?.y || 0) + (l?.height || 128) - 62 + 13,
                        },
                        KkzwvC4PP: {
                          y: (l?.y || 0) + (l?.height || 63) - 62 + 13,
                        },
                      },
                      u,
                      S
                    ),
                    children: n(p.div, {
                      className: "framer-177xwdd-container",
                      layoutDependency: b,
                      layoutId: "muofo2wDE-container",
                      children: n(F1, {
                        bc4gpC1kn: "Contract",
                        height: "100%",
                        id: "muofo2wDE",
                        iJnaH99Wh: "Grab the",
                        layoutId: "muofo2wDE",
                        S7NWOLakN: e1,
                        style: { height: "100%" },
                        variant: "K9kog_LnC",
                        width: "100%",
                      }),
                    }),
                  }),
                  n(q, {
                    height: 37,
                    y:
                      (l?.y || 0) +
                      (4 +
                        ((l?.height || 53) - 8 - ((l?.height || 53) - 8) * 1) /
                          2) +
                      (0 + (((l?.height || 53) - 8) * 1 - 0 - 37) / 2),
                    ...m1(
                      {
                        fkNkytigO: {
                          y: (l?.y || 0) + (l?.height || 128) - 62 + 13,
                        },
                        KkzwvC4PP: {
                          y: (l?.y || 0) + (l?.height || 63) - 62 + 13,
                        },
                      },
                      u,
                      S
                    ),
                    children: n(p.div, {
                      className: "framer-ufuyon-container",
                      layoutDependency: b,
                      layoutId: "VK6yoW6sY-container",
                      children: n(F1, {
                        bc4gpC1kn: "Tokenomics",
                        height: "100%",
                        id: "VK6yoW6sY",
                        iJnaH99Wh: "Explore",
                        layoutId: "VK6yoW6sY",
                        S7NWOLakN: M,
                        style: { height: "100%" },
                        variant: "K9kog_LnC",
                        width: "100%",
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }),
  br = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-7kt7q.framer-1dqhfio, .framer-7kt7q .framer-1dqhfio { display: block; }",
    ".framer-7kt7q.framer-slpmyp { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; padding: 4px 24px 4px 0px; position: relative; width: 654px; }",
    ".framer-7kt7q .framer-1papb0b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: 45px; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 4px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-7kt7q .framer-mtjo7t { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 45px); position: relative; width: 45px; }",
    ".framer-7kt7q .framer-1b4h593-container { aspect-ratio: 8.11111111111111 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 21px); position: relative; width: 162px; }",
    ".framer-7kt7q .framer-1hyvei4 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: auto; justify-content: space-between; overflow: visible; padding: 0px 24px 0px 24px; position: relative; width: 1px; }",
    ".framer-7kt7q .framer-1ogpm92-container, .framer-7kt7q .framer-177xwdd-container, .framer-7kt7q .framer-ufuyon-container { flex: none; height: 37px; position: relative; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-7kt7q.framer-slpmyp, .framer-7kt7q .framer-1papb0b { gap: 0px; } .framer-7kt7q.framer-slpmyp > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-7kt7q.framer-slpmyp > :first-child, .framer-7kt7q .framer-1papb0b > :first-child { margin-left: 0px; } .framer-7kt7q.framer-slpmyp > :last-child, .framer-7kt7q .framer-1papb0b > :last-child { margin-right: 0px; } .framer-7kt7q .framer-1papb0b > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } }",
    ".framer-7kt7q.framer-v-10q279z.framer-slpmyp { display: block; height: 128px; padding: unset; width: 370px; }",
    ".framer-7kt7q.framer-v-10q279z .framer-1papb0b, .framer-7kt7q.framer-v-onbgv7 .framer-1papb0b { bottom: 75px; height: 53px; left: 50%; padding: 8px 0px 0px 4px; position: absolute; }",
    ".framer-7kt7q.framer-v-10q279z .framer-1b4h593-container, .framer-7kt7q.framer-v-onbgv7 .framer-1b4h593-container { height: var(--framer-aspect-ratio-supported, 35px); width: 276px; }",
    ".framer-7kt7q.framer-v-10q279z .framer-1hyvei4, .framer-7kt7q.framer-v-onbgv7 .framer-1hyvei4 { bottom: -1px; flex: none; height: 63px; left: 0px; position: absolute; right: 0px; width: unset; }",
    ".framer-7kt7q.framer-v-10q279z .framer-1ogpm92-container, .framer-7kt7q.framer-v-onbgv7 .framer-1ogpm92-container { order: 1; }",
    ".framer-7kt7q.framer-v-10q279z .framer-177xwdd-container, .framer-7kt7q.framer-v-onbgv7 .framer-177xwdd-container { order: 2; }",
    ".framer-7kt7q.framer-v-10q279z .framer-ufuyon-container, .framer-7kt7q.framer-v-onbgv7 .framer-ufuyon-container { order: 0; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-7kt7q.framer-v-10q279z.framer-slpmyp { gap: 0px; } .framer-7kt7q.framer-v-10q279z.framer-slpmyp > *, .framer-7kt7q.framer-v-10q279z.framer-slpmyp > :first-child, .framer-7kt7q.framer-v-10q279z.framer-slpmyp > :last-child { margin: 0px; } }",
    ".framer-7kt7q.framer-v-onbgv7.framer-slpmyp { display: block; height: 63px; overflow: hidden; padding: unset; width: 370px; will-change: var(--framer-will-change-override, transform); }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-7kt7q.framer-v-onbgv7.framer-slpmyp { gap: 0px; } .framer-7kt7q.framer-v-onbgv7.framer-slpmyp > *, .framer-7kt7q.framer-v-onbgv7.framer-slpmyp > :first-child, .framer-7kt7q.framer-v-onbgv7.framer-slpmyp > :last-child { margin: 0px; } }",
    '.framer-7kt7q[data-border="true"]::after, .framer-7kt7q [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  R1 = K(wr, br, "framer-7kt7q"),
  p3 = R1;
R1.displayName = "nav";
R1.defaultProps = { height: 53, width: 654 };
U(R1, {
  variant: {
    options: ["CPQXUw5E1", "fkNkytigO", "KkzwvC4PP"],
    optionTitles: ["Nav-desktop", "mobile-default", "mobile-scrolled"],
    title: "Variant",
    type: d.Enum,
  },
  fFb00J628: { title: "modal-links", type: d.EventHandler },
  pRhHMD2y3: { title: "modal-contract", type: d.EventHandler },
  JVT3l9ZWK: { title: "modal-tokenomics", type: d.EventHandler },
  xmJcbXRDb: { title: "Click 2", type: d.EventHandler },
});
Q(R1, [{ explicitInter: !0, fonts: [] }, ...dr, ...mr], {
  supportsExplicitInterCodegen: !0,
});
function v3(t) {
  return (e) => (
    D(() => {
      let r = (a) => {
        if (a.key === "Escape") {
          var i;
          let s = document.activeElement;
          s && s.blur(), (i = e.onTap) === null || i === void 0 || i.call(e);
        }
      };
      return (
        h.addEventListener("keydown", r),
        () => h.removeEventListener("keydown", r)
      );
    }, []),
    n(t, { ...e })
  );
}
export {
  Oa as a,
  H1 as b,
  Ha as c,
  te as d,
  ve as e,
  Wa as f,
  ae as g,
  ne as h,
  ja as i,
  qa as j,
  za as k,
  Za as l,
  Xa as m,
  Ga as n,
  Ja as o,
  W1 as p,
  C1 as q,
  Z1 as r,
  Mn as s,
  Dn as t,
  ji as u,
  Ji as v,
  t3 as w,
  p3 as x,
  v3 as y,
};
//# sourceMappingURL=chunk-TT4BY3TF.mjs.map
