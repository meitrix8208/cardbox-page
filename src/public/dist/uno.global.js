/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/@unocss/runtime@0.58.0/uno.global.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var e =
    "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : {},
  t = [],
  r = [],
  n = "undefined" != typeof Uint8Array ? Uint8Array : Array,
  o = !1;
function i() {
  o = !0;
  for (
    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      n = 0;
    n < 64;
    ++n
  )
    (t[n] = e[n]), (r[e.charCodeAt(n)] = n);
  (r["-".charCodeAt(0)] = 62), (r["_".charCodeAt(0)] = 63);
}
function a(e, r, n) {
  for (var o, i, a = [], s = r; s < n; s += 3)
    (o = (e[s] << 16) + (e[s + 1] << 8) + e[s + 2]),
      a.push(
        t[((i = o) >> 18) & 63] +
          t[(i >> 12) & 63] +
          t[(i >> 6) & 63] +
          t[63 & i]
      );
  return a.join("");
}
function s(e) {
  var r;
  o || i();
  for (
    var n = e.length, s = n % 3, l = "", c = [], f = 16383, u = 0, p = n - s;
    u < p;
    u += f
  )
    c.push(a(e, u, u + f > p ? p : u + f));
  return (
    1 === s
      ? ((r = e[n - 1]), (l += t[r >> 2]), (l += t[(r << 4) & 63]), (l += "=="))
      : 2 === s &&
        ((r = (e[n - 2] << 8) + e[n - 1]),
        (l += t[r >> 10]),
        (l += t[(r >> 4) & 63]),
        (l += t[(r << 2) & 63]),
        (l += "=")),
    c.push(l),
    c.join("")
  );
}
function l(e, t, r, n, o) {
  var i,
    a,
    s = 8 * o - n - 1,
    l = (1 << s) - 1,
    c = l >> 1,
    f = -7,
    u = r ? o - 1 : 0,
    p = r ? -1 : 1,
    d = e[t + u];
  for (
    u += p, i = d & ((1 << -f) - 1), d >>= -f, f += s;
    f > 0;
    i = 256 * i + e[t + u], u += p, f -= 8
  );
  for (
    a = i & ((1 << -f) - 1), i >>= -f, f += n;
    f > 0;
    a = 256 * a + e[t + u], u += p, f -= 8
  );
  if (0 === i) i = 1 - c;
  else {
    if (i === l) return a ? NaN : (1 / 0) * (d ? -1 : 1);
    (a += Math.pow(2, n)), (i -= c);
  }
  return (d ? -1 : 1) * a * Math.pow(2, i - n);
}
function c(e, t, r, n, o, i) {
  var a,
    s,
    l,
    c = 8 * i - o - 1,
    f = (1 << c) - 1,
    u = f >> 1,
    p = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
    d = n ? 0 : i - 1,
    m = n ? 1 : -1,
    h = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
  for (
    t = Math.abs(t),
      isNaN(t) || t === 1 / 0
        ? ((s = isNaN(t) ? 1 : 0), (a = f))
        : ((a = Math.floor(Math.log(t) / Math.LN2)),
          t * (l = Math.pow(2, -a)) < 1 && (a--, (l *= 2)),
          (t += a + u >= 1 ? p / l : p * Math.pow(2, 1 - u)) * l >= 2 &&
            (a++, (l /= 2)),
          a + u >= f
            ? ((s = 0), (a = f))
            : a + u >= 1
            ? ((s = (t * l - 1) * Math.pow(2, o)), (a += u))
            : ((s = t * Math.pow(2, u - 1) * Math.pow(2, o)), (a = 0)));
    o >= 8;
    e[r + d] = 255 & s, d += m, s /= 256, o -= 8
  );
  for (
    a = (a << o) | s, c += o;
    c > 0;
    e[r + d] = 255 & a, d += m, a /= 256, c -= 8
  );
  e[r + d - m] |= 128 * h;
}
var f = {}.toString,
  u =
    Array.isArray ||
    function (e) {
      return "[object Array]" == f.call(e);
    };
function p() {
  return m.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function d(e, t) {
  if (p() < t) throw new RangeError("Invalid typed array length");
  return (
    m.TYPED_ARRAY_SUPPORT
      ? ((e = new Uint8Array(t)).__proto__ = m.prototype)
      : (null === e && (e = new m(t)), (e.length = t)),
    e
  );
}
function m(e, t, r) {
  if (!(m.TYPED_ARRAY_SUPPORT || this instanceof m)) return new m(e, t, r);
  if ("number" == typeof e) {
    if ("string" == typeof t)
      throw new Error(
        "If encoding is specified then the first argument must be a string"
      );
    return b(this, e);
  }
  return h(this, e, t, r);
}
function h(e, t, r, n) {
  if ("number" == typeof t)
    throw new TypeError('"value" argument must not be a number');
  return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
    ? (function (e, t, r, n) {
        if ((t.byteLength, r < 0 || t.byteLength < r))
          throw new RangeError("'offset' is out of bounds");
        if (t.byteLength < r + (n || 0))
          throw new RangeError("'length' is out of bounds");
        t =
          void 0 === r && void 0 === n
            ? new Uint8Array(t)
            : void 0 === n
            ? new Uint8Array(t, r)
            : new Uint8Array(t, r, n);
        m.TYPED_ARRAY_SUPPORT
          ? ((e = t).__proto__ = m.prototype)
          : (e = y(e, t));
        return e;
      })(e, t, r, n)
    : "string" == typeof t
    ? (function (e, t, r) {
        ("string" == typeof r && "" !== r) || (r = "utf8");
        if (!m.isEncoding(r))
          throw new TypeError('"encoding" must be a valid string encoding');
        var n = 0 | w(t, r);
        e = d(e, n);
        var o = e.write(t, r);
        o !== n && (e = e.slice(0, o));
        return e;
      })(e, t, r)
    : (function (e, t) {
        if (v(t)) {
          var r = 0 | x(t.length);
          return 0 === (e = d(e, r)).length || t.copy(e, 0, 0, r), e;
        }
        if (t) {
          if (
            ("undefined" != typeof ArrayBuffer &&
              t.buffer instanceof ArrayBuffer) ||
            "length" in t
          )
            return "number" != typeof t.length || (n = t.length) != n
              ? d(e, 0)
              : y(e, t);
          if ("Buffer" === t.type && u(t.data)) return y(e, t.data);
        }
        var n;
        throw new TypeError(
          "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
        );
      })(e, t);
}
function g(e) {
  if ("number" != typeof e)
    throw new TypeError('"size" argument must be a number');
  if (e < 0) throw new RangeError('"size" argument must not be negative');
}
function b(e, t) {
  if ((g(t), (e = d(e, t < 0 ? 0 : 0 | x(t))), !m.TYPED_ARRAY_SUPPORT))
    for (var r = 0; r < t; ++r) e[r] = 0;
  return e;
}
function y(e, t) {
  var r = t.length < 0 ? 0 : 0 | x(t.length);
  e = d(e, r);
  for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];
  return e;
}
function x(e) {
  if (e >= p())
    throw new RangeError(
      "Attempt to allocate Buffer larger than maximum size: 0x" +
        p().toString(16) +
        " bytes"
    );
  return 0 | e;
}
function v(e) {
  return !(null == e || !e._isBuffer);
}
function w(e, t) {
  if (v(e)) return e.length;
  if (
    "undefined" != typeof ArrayBuffer &&
    "function" == typeof ArrayBuffer.isView &&
    (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
  )
    return e.byteLength;
  "string" != typeof e && (e = "" + e);
  var r = e.length;
  if (0 === r) return 0;
  for (var n = !1; ; )
    switch (t) {
      case "ascii":
      case "latin1":
      case "binary":
        return r;
      case "utf8":
      case "utf-8":
      case void 0:
        return V(e).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return 2 * r;
      case "hex":
        return r >>> 1;
      case "base64":
        return Z(e).length;
      default:
        if (n) return V(e).length;
        (t = ("" + t).toLowerCase()), (n = !0);
    }
}
function $(e, t, r) {
  var n = !1;
  if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return "";
  if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
    return "";
  if ((r >>>= 0) <= (t >>>= 0)) return "";
  for (e || (e = "utf8"); ; )
    switch (e) {
      case "hex":
        return P(this, t, r);
      case "utf8":
      case "utf-8":
        return T(this, t, r);
      case "ascii":
        return O(this, t, r);
      case "latin1":
      case "binary":
        return N(this, t, r);
      case "base64":
        return L(this, t, r);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return F(this, t, r);
      default:
        if (n) throw new TypeError("Unknown encoding: " + e);
        (e = (e + "").toLowerCase()), (n = !0);
    }
}
function k(e, t, r) {
  var n = e[t];
  (e[t] = e[r]), (e[r] = n);
}
function E(e, t, r, n, o) {
  if (0 === e.length) return -1;
  if (
    ("string" == typeof r
      ? ((n = r), (r = 0))
      : r > 2147483647
      ? (r = 2147483647)
      : r < -2147483648 && (r = -2147483648),
    (r = +r),
    isNaN(r) && (r = o ? 0 : e.length - 1),
    r < 0 && (r = e.length + r),
    r >= e.length)
  ) {
    if (o) return -1;
    r = e.length - 1;
  } else if (r < 0) {
    if (!o) return -1;
    r = 0;
  }
  if (("string" == typeof t && (t = m.from(t, n)), v(t)))
    return 0 === t.length ? -1 : S(e, t, r, n, o);
  if ("number" == typeof t)
    return (
      (t &= 255),
      m.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf
        ? o
          ? Uint8Array.prototype.indexOf.call(e, t, r)
          : Uint8Array.prototype.lastIndexOf.call(e, t, r)
        : S(e, [t], r, n, o)
    );
  throw new TypeError("val must be string, number or Buffer");
}
function S(e, t, r, n, o) {
  var i,
    a = 1,
    s = e.length,
    l = t.length;
  if (
    void 0 !== n &&
    ("ucs2" === (n = String(n).toLowerCase()) ||
      "ucs-2" === n ||
      "utf16le" === n ||
      "utf-16le" === n)
  ) {
    if (e.length < 2 || t.length < 2) return -1;
    (a = 2), (s /= 2), (l /= 2), (r /= 2);
  }
  function c(e, t) {
    return 1 === a ? e[t] : e.readUInt16BE(t * a);
  }
  if (o) {
    var f = -1;
    for (i = r; i < s; i++)
      if (c(e, i) === c(t, -1 === f ? 0 : i - f)) {
        if ((-1 === f && (f = i), i - f + 1 === l)) return f * a;
      } else -1 !== f && (i -= i - f), (f = -1);
  } else
    for (r + l > s && (r = s - l), i = r; i >= 0; i--) {
      for (var u = !0, p = 0; p < l; p++)
        if (c(e, i + p) !== c(t, p)) {
          u = !1;
          break;
        }
      if (u) return i;
    }
  return -1;
}
function z(e, t, r, n) {
  r = Number(r) || 0;
  var o = e.length - r;
  n ? (n = Number(n)) > o && (n = o) : (n = o);
  var i = t.length;
  if (i % 2 != 0) throw new TypeError("Invalid hex string");
  n > i / 2 && (n = i / 2);
  for (var a = 0; a < n; ++a) {
    var s = parseInt(t.substr(2 * a, 2), 16);
    if (isNaN(s)) return a;
    e[r + a] = s;
  }
  return a;
}
function j(e, t, r, n) {
  return G(V(t, e.length - r), e, r, n);
}
function A(e, t, r, n) {
  return G(
    (function (e) {
      for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
      return t;
    })(t),
    e,
    r,
    n
  );
}
function _(e, t, r, n) {
  return A(e, t, r, n);
}
function C(e, t, r, n) {
  return G(Z(t), e, r, n);
}
function R(e, t, r, n) {
  return G(
    (function (e, t) {
      for (var r, n, o, i = [], a = 0; a < e.length && !((t -= 2) < 0); ++a)
        (n = (r = e.charCodeAt(a)) >> 8), (o = r % 256), i.push(o), i.push(n);
      return i;
    })(t, e.length - r),
    e,
    r,
    n
  );
}
function L(e, t, r) {
  return 0 === t && r === e.length ? s(e) : s(e.slice(t, r));
}
function T(e, t, r) {
  r = Math.min(e.length, r);
  for (var n = [], o = t; o < r; ) {
    var i,
      a,
      s,
      l,
      c = e[o],
      f = null,
      u = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
    if (o + u <= r)
      switch (u) {
        case 1:
          c < 128 && (f = c);
          break;
        case 2:
          128 == (192 & (i = e[o + 1])) &&
            (l = ((31 & c) << 6) | (63 & i)) > 127 &&
            (f = l);
          break;
        case 3:
          (i = e[o + 1]),
            (a = e[o + 2]),
            128 == (192 & i) &&
              128 == (192 & a) &&
              (l = ((15 & c) << 12) | ((63 & i) << 6) | (63 & a)) > 2047 &&
              (l < 55296 || l > 57343) &&
              (f = l);
          break;
        case 4:
          (i = e[o + 1]),
            (a = e[o + 2]),
            (s = e[o + 3]),
            128 == (192 & i) &&
              128 == (192 & a) &&
              128 == (192 & s) &&
              (l =
                ((15 & c) << 18) |
                ((63 & i) << 12) |
                ((63 & a) << 6) |
                (63 & s)) > 65535 &&
              l < 1114112 &&
              (f = l);
      }
    null === f
      ? ((f = 65533), (u = 1))
      : f > 65535 &&
        ((f -= 65536),
        n.push(((f >>> 10) & 1023) | 55296),
        (f = 56320 | (1023 & f))),
      n.push(f),
      (o += u);
  }
  return (function (e) {
    var t = e.length;
    if (t <= U) return String.fromCharCode.apply(String, e);
    var r = "",
      n = 0;
    for (; n < t; )
      r += String.fromCharCode.apply(String, e.slice(n, (n += U)));
    return r;
  })(n);
}
(m.TYPED_ARRAY_SUPPORT =
  void 0 === e.TYPED_ARRAY_SUPPORT || e.TYPED_ARRAY_SUPPORT),
  p(),
  (m.poolSize = 8192),
  (m._augment = function (e) {
    return (e.__proto__ = m.prototype), e;
  }),
  (m.from = function (e, t, r) {
    return h(null, e, t, r);
  }),
  m.TYPED_ARRAY_SUPPORT &&
    ((m.prototype.__proto__ = Uint8Array.prototype),
    (m.__proto__ = Uint8Array),
    "undefined" != typeof Symbol && Symbol.species && m[Symbol.species]),
  (m.alloc = function (e, t, r) {
    return (function (e, t, r, n) {
      return (
        g(t),
        t <= 0
          ? d(e, t)
          : void 0 !== r
          ? "string" == typeof n
            ? d(e, t).fill(r, n)
            : d(e, t).fill(r)
          : d(e, t)
      );
    })(null, e, t, r);
  }),
  (m.allocUnsafe = function (e) {
    return b(null, e);
  }),
  (m.allocUnsafeSlow = function (e) {
    return b(null, e);
  }),
  (m.isBuffer = function (e) {
    return (
      null != e &&
      (!!e._isBuffer ||
        J(e) ||
        (function (e) {
          return (
            "function" == typeof e.readFloatLE &&
            "function" == typeof e.slice &&
            J(e.slice(0, 0))
          );
        })(e))
    );
  }),
  (m.compare = function (e, t) {
    if (!v(e) || !v(t)) throw new TypeError("Arguments must be Buffers");
    if (e === t) return 0;
    for (var r = e.length, n = t.length, o = 0, i = Math.min(r, n); o < i; ++o)
      if (e[o] !== t[o]) {
        (r = e[o]), (n = t[o]);
        break;
      }
    return r < n ? -1 : n < r ? 1 : 0;
  }),
  (m.isEncoding = function (e) {
    switch (String(e).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }),
  (m.concat = function (e, t) {
    if (!u(e))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (0 === e.length) return m.alloc(0);
    var r;
    if (void 0 === t) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
    var n = m.allocUnsafe(t),
      o = 0;
    for (r = 0; r < e.length; ++r) {
      var i = e[r];
      if (!v(i))
        throw new TypeError('"list" argument must be an Array of Buffers');
      i.copy(n, o), (o += i.length);
    }
    return n;
  }),
  (m.byteLength = w),
  (m.prototype._isBuffer = !0),
  (m.prototype.swap16 = function () {
    var e = this.length;
    if (e % 2 != 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var t = 0; t < e; t += 2) k(this, t, t + 1);
    return this;
  }),
  (m.prototype.swap32 = function () {
    var e = this.length;
    if (e % 4 != 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var t = 0; t < e; t += 4) k(this, t, t + 3), k(this, t + 1, t + 2);
    return this;
  }),
  (m.prototype.swap64 = function () {
    var e = this.length;
    if (e % 8 != 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var t = 0; t < e; t += 8)
      k(this, t, t + 7),
        k(this, t + 1, t + 6),
        k(this, t + 2, t + 5),
        k(this, t + 3, t + 4);
    return this;
  }),
  (m.prototype.toString = function () {
    var e = 0 | this.length;
    return 0 === e
      ? ""
      : 0 === arguments.length
      ? T(this, 0, e)
      : $.apply(this, arguments);
  }),
  (m.prototype.equals = function (e) {
    if (!v(e)) throw new TypeError("Argument must be a Buffer");
    return this === e || 0 === m.compare(this, e);
  }),
  (m.prototype.inspect = function () {
    var e = "";
    return (
      this.length > 0 &&
        ((e = this.toString("hex", 0, 50).match(/.{2}/g).join(" ")),
        this.length > 50 && (e += " ... ")),
      "<Buffer " + e + ">"
    );
  }),
  (m.prototype.compare = function (e, t, r, n, o) {
    if (!v(e)) throw new TypeError("Argument must be a Buffer");
    if (
      (void 0 === t && (t = 0),
      void 0 === r && (r = e ? e.length : 0),
      void 0 === n && (n = 0),
      void 0 === o && (o = this.length),
      t < 0 || r > e.length || n < 0 || o > this.length)
    )
      throw new RangeError("out of range index");
    if (n >= o && t >= r) return 0;
    if (n >= o) return -1;
    if (t >= r) return 1;
    if (this === e) return 0;
    for (
      var i = (o >>>= 0) - (n >>>= 0),
        a = (r >>>= 0) - (t >>>= 0),
        s = Math.min(i, a),
        l = this.slice(n, o),
        c = e.slice(t, r),
        f = 0;
      f < s;
      ++f
    )
      if (l[f] !== c[f]) {
        (i = l[f]), (a = c[f]);
        break;
      }
    return i < a ? -1 : a < i ? 1 : 0;
  }),
  (m.prototype.includes = function (e, t, r) {
    return -1 !== this.indexOf(e, t, r);
  }),
  (m.prototype.indexOf = function (e, t, r) {
    return E(this, e, t, r, !0);
  }),
  (m.prototype.lastIndexOf = function (e, t, r) {
    return E(this, e, t, r, !1);
  }),
  (m.prototype.write = function (e, t, r, n) {
    if (void 0 === t) (n = "utf8"), (r = this.length), (t = 0);
    else if (void 0 === r && "string" == typeof t)
      (n = t), (r = this.length), (t = 0);
    else {
      if (!isFinite(t))
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      (t |= 0),
        isFinite(r)
          ? ((r |= 0), void 0 === n && (n = "utf8"))
          : ((n = r), (r = void 0));
    }
    var o = this.length - t;
    if (
      ((void 0 === r || r > o) && (r = o),
      (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
    )
      throw new RangeError("Attempt to write outside buffer bounds");
    n || (n = "utf8");
    for (var i = !1; ; )
      switch (n) {
        case "hex":
          return z(this, e, t, r);
        case "utf8":
        case "utf-8":
          return j(this, e, t, r);
        case "ascii":
          return A(this, e, t, r);
        case "latin1":
        case "binary":
          return _(this, e, t, r);
        case "base64":
          return C(this, e, t, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return R(this, e, t, r);
        default:
          if (i) throw new TypeError("Unknown encoding: " + n);
          (n = ("" + n).toLowerCase()), (i = !0);
      }
  }),
  (m.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0),
    };
  });
var U = 4096;
function O(e, t, r) {
  var n = "";
  r = Math.min(e.length, r);
  for (var o = t; o < r; ++o) n += String.fromCharCode(127 & e[o]);
  return n;
}
function N(e, t, r) {
  var n = "";
  r = Math.min(e.length, r);
  for (var o = t; o < r; ++o) n += String.fromCharCode(e[o]);
  return n;
}
function P(e, t, r) {
  var n = e.length;
  (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
  for (var o = "", i = t; i < r; ++i) o += H(e[i]);
  return o;
}
function F(e, t, r) {
  for (var n = e.slice(t, r), o = "", i = 0; i < n.length; i += 2)
    o += String.fromCharCode(n[i] + 256 * n[i + 1]);
  return o;
}
function M(e, t, r) {
  if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
  if (e + t > r) throw new RangeError("Trying to access beyond buffer length");
}
function W(e, t, r, n, o, i) {
  if (!v(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (t > o || t < i) throw new RangeError('"value" argument is out of bounds');
  if (r + n > e.length) throw new RangeError("Index out of range");
}
function B(e, t, r, n) {
  t < 0 && (t = 65535 + t + 1);
  for (var o = 0, i = Math.min(e.length - r, 2); o < i; ++o)
    e[r + o] = (t & (255 << (8 * (n ? o : 1 - o)))) >>> (8 * (n ? o : 1 - o));
}
function D(e, t, r, n) {
  t < 0 && (t = 4294967295 + t + 1);
  for (var o = 0, i = Math.min(e.length - r, 4); o < i; ++o)
    e[r + o] = (t >>> (8 * (n ? o : 3 - o))) & 255;
}
function I(e, t, r, n, o, i) {
  if (r + n > e.length) throw new RangeError("Index out of range");
  if (r < 0) throw new RangeError("Index out of range");
}
function Y(e, t, r, n, o) {
  return o || I(e, 0, r, 4), c(e, t, r, n, 23, 4), r + 4;
}
function X(e, t, r, n, o) {
  return o || I(e, 0, r, 8), c(e, t, r, n, 52, 8), r + 8;
}
(m.prototype.slice = function (e, t) {
  var r,
    n = this.length;
  if (
    ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
    (t = void 0 === t ? n : ~~t) < 0
      ? (t += n) < 0 && (t = 0)
      : t > n && (t = n),
    t < e && (t = e),
    m.TYPED_ARRAY_SUPPORT)
  )
    (r = this.subarray(e, t)).__proto__ = m.prototype;
  else {
    var o = t - e;
    r = new m(o, void 0);
    for (var i = 0; i < o; ++i) r[i] = this[i + e];
  }
  return r;
}),
  (m.prototype.readUIntLE = function (e, t, r) {
    (e |= 0), (t |= 0), r || M(e, t, this.length);
    for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256); )
      n += this[e + i] * o;
    return n;
  }),
  (m.prototype.readUIntBE = function (e, t, r) {
    (e |= 0), (t |= 0), r || M(e, t, this.length);
    for (var n = this[e + --t], o = 1; t > 0 && (o *= 256); )
      n += this[e + --t] * o;
    return n;
  }),
  (m.prototype.readUInt8 = function (e, t) {
    return t || M(e, 1, this.length), this[e];
  }),
  (m.prototype.readUInt16LE = function (e, t) {
    return t || M(e, 2, this.length), this[e] | (this[e + 1] << 8);
  }),
  (m.prototype.readUInt16BE = function (e, t) {
    return t || M(e, 2, this.length), (this[e] << 8) | this[e + 1];
  }),
  (m.prototype.readUInt32LE = function (e, t) {
    return (
      t || M(e, 4, this.length),
      (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
        16777216 * this[e + 3]
    );
  }),
  (m.prototype.readUInt32BE = function (e, t) {
    return (
      t || M(e, 4, this.length),
      16777216 * this[e] +
        ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
    );
  }),
  (m.prototype.readIntLE = function (e, t, r) {
    (e |= 0), (t |= 0), r || M(e, t, this.length);
    for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256); )
      n += this[e + i] * o;
    return n >= (o *= 128) && (n -= Math.pow(2, 8 * t)), n;
  }),
  (m.prototype.readIntBE = function (e, t, r) {
    (e |= 0), (t |= 0), r || M(e, t, this.length);
    for (var n = t, o = 1, i = this[e + --n]; n > 0 && (o *= 256); )
      i += this[e + --n] * o;
    return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i;
  }),
  (m.prototype.readInt8 = function (e, t) {
    return (
      t || M(e, 1, this.length),
      128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
    );
  }),
  (m.prototype.readInt16LE = function (e, t) {
    t || M(e, 2, this.length);
    var r = this[e] | (this[e + 1] << 8);
    return 32768 & r ? 4294901760 | r : r;
  }),
  (m.prototype.readInt16BE = function (e, t) {
    t || M(e, 2, this.length);
    var r = this[e + 1] | (this[e] << 8);
    return 32768 & r ? 4294901760 | r : r;
  }),
  (m.prototype.readInt32LE = function (e, t) {
    return (
      t || M(e, 4, this.length),
      this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24)
    );
  }),
  (m.prototype.readInt32BE = function (e, t) {
    return (
      t || M(e, 4, this.length),
      (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]
    );
  }),
  (m.prototype.readFloatLE = function (e, t) {
    return t || M(e, 4, this.length), l(this, e, !0, 23, 4);
  }),
  (m.prototype.readFloatBE = function (e, t) {
    return t || M(e, 4, this.length), l(this, e, !1, 23, 4);
  }),
  (m.prototype.readDoubleLE = function (e, t) {
    return t || M(e, 8, this.length), l(this, e, !0, 52, 8);
  }),
  (m.prototype.readDoubleBE = function (e, t) {
    return t || M(e, 8, this.length), l(this, e, !1, 52, 8);
  }),
  (m.prototype.writeUIntLE = function (e, t, r, n) {
    ((e = +e), (t |= 0), (r |= 0), n) ||
      W(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
    var o = 1,
      i = 0;
    for (this[t] = 255 & e; ++i < r && (o *= 256); )
      this[t + i] = (e / o) & 255;
    return t + r;
  }),
  (m.prototype.writeUIntBE = function (e, t, r, n) {
    ((e = +e), (t |= 0), (r |= 0), n) ||
      W(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
    var o = r - 1,
      i = 1;
    for (this[t + o] = 255 & e; --o >= 0 && (i *= 256); )
      this[t + o] = (e / i) & 255;
    return t + r;
  }),
  (m.prototype.writeUInt8 = function (e, t, r) {
    return (
      (e = +e),
      (t |= 0),
      r || W(this, e, t, 1, 255, 0),
      m.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
      (this[t] = 255 & e),
      t + 1
    );
  }),
  (m.prototype.writeUInt16LE = function (e, t, r) {
    return (
      (e = +e),
      (t |= 0),
      r || W(this, e, t, 2, 65535, 0),
      m.TYPED_ARRAY_SUPPORT
        ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
        : B(this, e, t, !0),
      t + 2
    );
  }),
  (m.prototype.writeUInt16BE = function (e, t, r) {
    return (
      (e = +e),
      (t |= 0),
      r || W(this, e, t, 2, 65535, 0),
      m.TYPED_ARRAY_SUPPORT
        ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
        : B(this, e, t, !1),
      t + 2
    );
  }),
  (m.prototype.writeUInt32LE = function (e, t, r) {
    return (
      (e = +e),
      (t |= 0),
      r || W(this, e, t, 4, 4294967295, 0),
      m.TYPED_ARRAY_SUPPORT
        ? ((this[t + 3] = e >>> 24),
          (this[t + 2] = e >>> 16),
          (this[t + 1] = e >>> 8),
          (this[t] = 255 & e))
        : D(this, e, t, !0),
      t + 4
    );
  }),
  (m.prototype.writeUInt32BE = function (e, t, r) {
    return (
      (e = +e),
      (t |= 0),
      r || W(this, e, t, 4, 4294967295, 0),
      m.TYPED_ARRAY_SUPPORT
        ? ((this[t] = e >>> 24),
          (this[t + 1] = e >>> 16),
          (this[t + 2] = e >>> 8),
          (this[t + 3] = 255 & e))
        : D(this, e, t, !1),
      t + 4
    );
  }),
  (m.prototype.writeIntLE = function (e, t, r, n) {
    if (((e = +e), (t |= 0), !n)) {
      var o = Math.pow(2, 8 * r - 1);
      W(this, e, t, r, o - 1, -o);
    }
    var i = 0,
      a = 1,
      s = 0;
    for (this[t] = 255 & e; ++i < r && (a *= 256); )
      e < 0 && 0 === s && 0 !== this[t + i - 1] && (s = 1),
        (this[t + i] = (((e / a) >> 0) - s) & 255);
    return t + r;
  }),
  (m.prototype.writeIntBE = function (e, t, r, n) {
    if (((e = +e), (t |= 0), !n)) {
      var o = Math.pow(2, 8 * r - 1);
      W(this, e, t, r, o - 1, -o);
    }
    var i = r - 1,
      a = 1,
      s = 0;
    for (this[t + i] = 255 & e; --i >= 0 && (a *= 256); )
      e < 0 && 0 === s && 0 !== this[t + i + 1] && (s = 1),
        (this[t + i] = (((e / a) >> 0) - s) & 255);
    return t + r;
  }),
  (m.prototype.writeInt8 = function (e, t, r) {
    return (
      (e = +e),
      (t |= 0),
      r || W(this, e, t, 1, 127, -128),
      m.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
      e < 0 && (e = 255 + e + 1),
      (this[t] = 255 & e),
      t + 1
    );
  }),
  (m.prototype.writeInt16LE = function (e, t, r) {
    return (
      (e = +e),
      (t |= 0),
      r || W(this, e, t, 2, 32767, -32768),
      m.TYPED_ARRAY_SUPPORT
        ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
        : B(this, e, t, !0),
      t + 2
    );
  }),
  (m.prototype.writeInt16BE = function (e, t, r) {
    return (
      (e = +e),
      (t |= 0),
      r || W(this, e, t, 2, 32767, -32768),
      m.TYPED_ARRAY_SUPPORT
        ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
        : B(this, e, t, !1),
      t + 2
    );
  }),
  (m.prototype.writeInt32LE = function (e, t, r) {
    return (
      (e = +e),
      (t |= 0),
      r || W(this, e, t, 4, 2147483647, -2147483648),
      m.TYPED_ARRAY_SUPPORT
        ? ((this[t] = 255 & e),
          (this[t + 1] = e >>> 8),
          (this[t + 2] = e >>> 16),
          (this[t + 3] = e >>> 24))
        : D(this, e, t, !0),
      t + 4
    );
  }),
  (m.prototype.writeInt32BE = function (e, t, r) {
    return (
      (e = +e),
      (t |= 0),
      r || W(this, e, t, 4, 2147483647, -2147483648),
      e < 0 && (e = 4294967295 + e + 1),
      m.TYPED_ARRAY_SUPPORT
        ? ((this[t] = e >>> 24),
          (this[t + 1] = e >>> 16),
          (this[t + 2] = e >>> 8),
          (this[t + 3] = 255 & e))
        : D(this, e, t, !1),
      t + 4
    );
  }),
  (m.prototype.writeFloatLE = function (e, t, r) {
    return Y(this, e, t, !0, r);
  }),
  (m.prototype.writeFloatBE = function (e, t, r) {
    return Y(this, e, t, !1, r);
  }),
  (m.prototype.writeDoubleLE = function (e, t, r) {
    return X(this, e, t, !0, r);
  }),
  (m.prototype.writeDoubleBE = function (e, t, r) {
    return X(this, e, t, !1, r);
  }),
  (m.prototype.copy = function (e, t, r, n) {
    if (
      (r || (r = 0),
      n || 0 === n || (n = this.length),
      t >= e.length && (t = e.length),
      t || (t = 0),
      n > 0 && n < r && (n = r),
      n === r)
    )
      return 0;
    if (0 === e.length || 0 === this.length) return 0;
    if (t < 0) throw new RangeError("targetStart out of bounds");
    if (r < 0 || r >= this.length)
      throw new RangeError("sourceStart out of bounds");
    if (n < 0) throw new RangeError("sourceEnd out of bounds");
    n > this.length && (n = this.length),
      e.length - t < n - r && (n = e.length - t + r);
    var o,
      i = n - r;
    if (this === e && r < t && t < n)
      for (o = i - 1; o >= 0; --o) e[o + t] = this[o + r];
    else if (i < 1e3 || !m.TYPED_ARRAY_SUPPORT)
      for (o = 0; o < i; ++o) e[o + t] = this[o + r];
    else Uint8Array.prototype.set.call(e, this.subarray(r, r + i), t);
    return i;
  }),
  (m.prototype.fill = function (e, t, r, n) {
    if ("string" == typeof e) {
      if (
        ("string" == typeof t
          ? ((n = t), (t = 0), (r = this.length))
          : "string" == typeof r && ((n = r), (r = this.length)),
        1 === e.length)
      ) {
        var o = e.charCodeAt(0);
        o < 256 && (e = o);
      }
      if (void 0 !== n && "string" != typeof n)
        throw new TypeError("encoding must be a string");
      if ("string" == typeof n && !m.isEncoding(n))
        throw new TypeError("Unknown encoding: " + n);
    } else "number" == typeof e && (e &= 255);
    if (t < 0 || this.length < t || this.length < r)
      throw new RangeError("Out of range index");
    if (r <= t) return this;
    var i;
    if (
      ((t >>>= 0),
      (r = void 0 === r ? this.length : r >>> 0),
      e || (e = 0),
      "number" == typeof e)
    )
      for (i = t; i < r; ++i) this[i] = e;
    else {
      var a = v(e) ? e : V(new m(e, n).toString()),
        s = a.length;
      for (i = 0; i < r - t; ++i) this[i + t] = a[i % s];
    }
    return this;
  });
var q = /[^+\/0-9A-Za-z-_]/g;
function H(e) {
  return e < 16 ? "0" + e.toString(16) : e.toString(16);
}
function V(e, t) {
  var r;
  t = t || 1 / 0;
  for (var n = e.length, o = null, i = [], a = 0; a < n; ++a) {
    if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
      if (!o) {
        if (r > 56319) {
          (t -= 3) > -1 && i.push(239, 191, 189);
          continue;
        }
        if (a + 1 === n) {
          (t -= 3) > -1 && i.push(239, 191, 189);
          continue;
        }
        o = r;
        continue;
      }
      if (r < 56320) {
        (t -= 3) > -1 && i.push(239, 191, 189), (o = r);
        continue;
      }
      r = 65536 + (((o - 55296) << 10) | (r - 56320));
    } else o && (t -= 3) > -1 && i.push(239, 191, 189);
    if (((o = null), r < 128)) {
      if ((t -= 1) < 0) break;
      i.push(r);
    } else if (r < 2048) {
      if ((t -= 2) < 0) break;
      i.push((r >> 6) | 192, (63 & r) | 128);
    } else if (r < 65536) {
      if ((t -= 3) < 0) break;
      i.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
    } else {
      if (!(r < 1114112)) throw new Error("Invalid code point");
      if ((t -= 4) < 0) break;
      i.push(
        (r >> 18) | 240,
        ((r >> 12) & 63) | 128,
        ((r >> 6) & 63) | 128,
        (63 & r) | 128
      );
    }
  }
  return i;
}
function Z(e) {
  return (function (e) {
    var t, a, s, l, c, f;
    o || i();
    var u = e.length;
    if (u % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    (c = "=" === e[u - 2] ? 2 : "=" === e[u - 1] ? 1 : 0),
      (f = new n((3 * u) / 4 - c)),
      (s = c > 0 ? u - 4 : u);
    var p = 0;
    for (t = 0, a = 0; t < s; t += 4, a += 3)
      (l =
        (r[e.charCodeAt(t)] << 18) |
        (r[e.charCodeAt(t + 1)] << 12) |
        (r[e.charCodeAt(t + 2)] << 6) |
        r[e.charCodeAt(t + 3)]),
        (f[p++] = (l >> 16) & 255),
        (f[p++] = (l >> 8) & 255),
        (f[p++] = 255 & l);
    return (
      2 === c
        ? ((l = (r[e.charCodeAt(t)] << 2) | (r[e.charCodeAt(t + 1)] >> 4)),
          (f[p++] = 255 & l))
        : 1 === c &&
          ((l =
            (r[e.charCodeAt(t)] << 10) |
            (r[e.charCodeAt(t + 1)] << 4) |
            (r[e.charCodeAt(t + 2)] >> 2)),
          (f[p++] = (l >> 8) & 255),
          (f[p++] = 255 & l)),
      f
    );
  })(
    (function (e) {
      if (
        (e = (function (e) {
          return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
        })(e).replace(q, "")).length < 2
      )
        return "";
      for (; e.length % 4 != 0; ) e += "=";
      return e;
    })(e)
  );
}
function G(e, t, r, n) {
  for (var o = 0; o < n && !(o + r >= t.length || o >= e.length); ++o)
    t[o + r] = e[o];
  return o;
}
function J(e) {
  return (
    !!e.constructor &&
    "function" == typeof e.constructor.isBuffer &&
    e.constructor.isBuffer(e)
  );
}
(() => {
  var e = Object.defineProperty;
  function t(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function r(e) {
    let t,
      r = e.length,
      n = -1,
      o = "",
      i = e.charCodeAt(0);
    for (; ++n < r; )
      (t = e.charCodeAt(n)),
        (o +=
          0 !== t
            ? 37 !== t
              ? 44 !== t
                ? (t >= 1 && t <= 31) ||
                  127 === t ||
                  (0 === n && t >= 48 && t <= 57) ||
                  (1 === n && t >= 48 && t <= 57 && 45 === i)
                  ? `\\${t.toString(16)} `
                  : (0 !== n || 1 !== r || 45 !== t) &&
                    (t >= 128 ||
                      45 === t ||
                      95 === t ||
                      (t >= 48 && t <= 57) ||
                      (t >= 65 && t <= 90) ||
                      (t >= 97 && t <= 122))
                  ? e.charAt(n)
                  : `\\${e.charAt(n)}`
                : "\\,"
              : "\\%"
            : "�");
    return o;
  }
  var n = r;
  function o(e = []) {
    return Array.isArray(e) ? e : [e];
  }
  function i(e) {
    return Array.from(new Set(e));
  }
  function a(e) {
    return "string" == typeof e;
  }
  function s(e) {
    return a(e)
      ? e
      : (Array.isArray(e) ? e : Object.entries(e)).filter((e) => null != e[1]);
  }
  function l(e) {
    return null == e
      ? ""
      : (function (e) {
          return e.filter(([t, r], n) => {
            if (t.startsWith("$$")) return !1;
            for (let o = n - 1; o >= 0; o--)
              if (e[o][0] === t && e[o][1] === r) return !1;
            return !0;
          });
        })(e)
          .map(([e, t]) => (null != t ? `${e}:${t};` : void 0))
          .filter(Boolean)
          .join("");
  }
  function c(e) {
    return e && "object" == typeof e && !Array.isArray(e);
  }
  function f(e, t, r = !1) {
    let n = e,
      o = t;
    if (Array.isArray(o)) return r && Array.isArray(o) ? [...n, ...o] : [...o];
    let i = { ...n };
    return (
      c(n) &&
        c(o) &&
        Object.keys(o).forEach((e) => {
          (c(n[e]) && c(o[e])) || (Array.isArray(n[e]) && Array.isArray(o[e]))
            ? (i[e] = f(n[e], o[e], r))
            : Object.assign(i, { [e]: o[e] });
        }),
      i
    );
  }
  function u(e) {
    let t, r, n;
    if (Array.isArray(e)) {
      for (r = Array((t = e.length)); t--; )
        r[t] = (n = e[t]) && "object" == typeof n ? u(n) : n;
      return r;
    }
    if ("[object Object]" === Object.prototype.toString.call(e)) {
      for (t in ((r = {}), e))
        "__proto__" === t
          ? Object.defineProperty(r, t, {
              value: u(e[t]),
              configurable: !0,
              enumerable: !0,
              writable: !0,
            })
          : (r[t] = (n = e[t]) && "object" == typeof n ? u(n) : n);
      return r;
    }
    return e;
  }
  var p = /[\w\u00A0-\uFFFF-_:%-?]/,
    d = "$$shortcut-no-merge";
  function h(e) {
    return "function" == typeof e ? { match: e } : e;
  }
  function g(e) {
    return 3 === e.length;
  }
  function b(e) {
    return null != e;
  }
  function y() {}
  var x = class extends Set {
    _map;
    constructor(e) {
      super(e), (this._map ??= new Map());
    }
    add(e) {
      return (
        (this._map ??= new Map()),
        this._map.set(e, (this._map.get(e) ?? 0) + 1),
        super.add(e)
      );
    }
    delete(e) {
      return this._map.delete(e), super.delete(e);
    }
    clear() {
      this._map.clear(), super.clear();
    }
    getCount(e) {
      return this._map.get(e) ?? 0;
    }
    setCount(e, t) {
      return this._map.set(e, t), super.add(e);
    }
  };
  function v(e) {
    return e instanceof x;
  }
  var w = {};
  function $(e, t = ["-", ":"], r = 5) {
    let n,
      o,
      i = (function (e = ["-", ":"]) {
        let t = e.join("|");
        return (
          w[t] ||
            (w[t] = new RegExp(
              `((?:[!@<~\\w+:_/-]|\\[&?>?:?\\S*\\])+?)(${t})\\(((?:[~!<>\\w\\s:/\\\\,%#.$?-]|\\[.*?\\])+?)\\)(?!\\s*?=>)`,
              "gm"
            )),
          (w[t].lastIndex = 0),
          w[t]
        );
      })(t),
      a = e.toString(),
      s = new Set(),
      l = new Map();
    do {
      (n = !1),
        (a = a.replace(i, (e, r, o, i, a) => {
          if (!t.includes(o)) return e;
          (n = !0), s.add(r + o);
          let c = a + r.length + o.length + 1,
            f = { length: e.length, items: [] };
          l.set(a, f);
          for (let e of [...i.matchAll(/\S+/g)]) {
            let t = c + e.index,
              n = l.get(t)?.items;
            n
              ? l.delete(t)
              : (n = [{ offset: t, length: e[0].length, className: e[0] }]);
            for (let e of n)
              (e.className =
                "~" === e.className
                  ? r
                  : e.className.replace(/^(!?)(.*)/, `$1${r}${o}$2`)),
                f.items.push(e);
          }
          return "$".repeat(e.length);
        })),
        (r -= 1);
    } while (n && r);
    if ("string" == typeof e) {
      o = "";
      let t = 0;
      for (let [r, n] of l)
        (o += e.slice(t, r)),
          (o += n.items.map((e) => e.className).join(" ")),
          (t = r + n.length);
      o += e.slice(t);
    } else {
      o = e;
      for (let [e, t] of l)
        o.overwrite(e, e + t.length, t.items.map((e) => e.className).join(" "));
    }
    return {
      prefixes: Array.from(s),
      hasChanged: n,
      groupsByOffset: l,
      get expanded() {
        return o.toString();
      },
    };
  }
  var k = new Set();
  function E(e) {
    k.has(e) || (console.warn("[unocss]", e), k.add(e));
  }
  var S = /[\\:]?[\s'"`;{}]+/g;
  var z = {
    name: "@unocss/core/extractor-split",
    order: 0,
    extract: ({ code: e }) =>
      (function (e) {
        return e.split(S);
      })(e),
  };
  var j = "default",
    A = "preflights",
    _ = { imports: -200, [A]: -100, shortcuts: -10, [j]: 0 };
  function C(e) {
    return o(e).flatMap((e) => (Array.isArray(e) ? [e] : Object.entries(e)));
  }
  var R = "_uno_resolved";
  function L(e) {
    let t = (function (e) {
      let t = "function" == typeof e ? e() : e;
      if (R in t) return t;
      (t = { ...t }),
        Object.defineProperty(t, R, { value: !0, enumerable: !1 });
      let r = t.shortcuts ? C(t.shortcuts) : void 0;
      if (((t.shortcuts = r), t.prefix || t.layer)) {
        let e = (e) => {
          e[2] || (e[2] = {});
          let r = e[2];
          null == r.prefix && t.prefix && (r.prefix = o(t.prefix)),
            null == r.layer && t.layer && (r.layer = t.layer);
        };
        r?.forEach(e), t.rules?.forEach(e);
      }
      return t;
    })(e);
    return t.presets ? [t, ...(t.presets || []).flatMap(o).flatMap(L)] : [t];
  }
  function T(e = {}, t = {}) {
    let r = Object.assign({}, t, e),
      n = (function (e, t) {
        return e.reduce(
          (e, r) => (-1 === e.findIndex((e) => t(r, e)) && e.push(r), e),
          []
        );
      })((r.presets || []).flatMap(o).flatMap(L), (e, t) => e.name === t.name),
      s = [
        ...n.filter((e) => "pre" === e.enforce),
        ...n.filter((e) => !e.enforce),
        ...n.filter((e) => "post" === e.enforce),
      ],
      l = [...s, r],
      c = [...l].reverse(),
      p = Object.assign({}, _, ...l.map((e) => e.layers));
    function d(e) {
      return i(l.flatMap((t) => o(t[e] || [])));
    }
    let m = d("extractors"),
      g = c.find((e) => void 0 !== e.extractorDefault)?.extractorDefault;
    void 0 === g && (g = z),
      g && !m.includes(g) && m.unshift(g),
      m.sort((e, t) => (e.order || 0) - (t.order || 0));
    let b = d("rules"),
      y = {},
      x = b.length,
      v = b
        .map((e, t) => {
          if (
            !(function (e) {
              return a(e[0]);
            })(e)
          )
            return [t, ...e];
          o(e[2]?.prefix || "").forEach((r) => {
            y[r + e[0]] = [t, e[1], e[2], e];
          });
        })
        .filter(Boolean)
        .reverse(),
      w = (function (e) {
        return e.map((e) => (e ? u(e) : {})).reduce((e, t) => f(e, t), {});
      })(l.map((e) => e.theme)),
      $ = d("extendTheme");
    for (let e of $) w = e(w) || w;
    let k = {
        templates: i(l.flatMap((e) => o(e.autocomplete?.templates))),
        extractors: l
          .flatMap((e) => o(e.autocomplete?.extractors))
          .sort((e, t) => (e.order || 0) - (t.order || 0)),
        shorthands: U(l.map((e) => e.autocomplete?.shorthands || {})),
      },
      E = d("separators");
    E.length || (E = [":", "-"]);
    let S = {
      mergeSelectors: !0,
      warn: !0,
      sortLayers: (e) => e,
      ...r,
      blocklist: d("blocklist"),
      presets: s,
      envMode: r.envMode || "build",
      shortcutsLayer: r.shortcutsLayer || "shortcuts",
      layers: p,
      theme: w,
      rulesSize: x,
      rulesDynamic: v,
      rulesStaticMap: y,
      preprocess: d("preprocess"),
      postprocess: d("postprocess"),
      preflights: d("preflights"),
      autocomplete: k,
      variants: d("variants")
        .map(h)
        .sort((e, t) => (e.order || 0) - (t.order || 0)),
      shortcuts: C(d("shortcuts")).reverse(),
      extractors: m,
      safelist: d("safelist"),
      separators: E,
      details: r.details ?? "dev" === r.envMode,
    };
    for (let e of l) e?.configResolved?.(S);
    return S;
  }
  function U(e) {
    return e.reduce((e, t) => {
      let r = {};
      for (let e in t) {
        let n = t[e];
        Array.isArray(n) ? (r[e] = `(${n.join("|")})`) : (r[e] = n);
      }
      return { ...e, ...r };
    }, {});
  }
  var O = class {
    constructor(e = {}, t = {}) {
      (this.userConfig = e),
        (this.defaults = t),
        (this.config = T(e, t)),
        this.events.emit("config", this.config);
    }
    version = "0.58.0";
    _cache = new Map();
    config;
    blocked = new Set();
    parentOrders = new Map();
    events = (function () {
      return {
        events: {},
        emit(e, ...t) {
          (this.events[e] || []).forEach((e) => e(...t));
        },
        on(e, t) {
          return (
            (this.events[e] = this.events[e] || []).push(t),
            () =>
              (this.events[e] = (this.events[e] || []).filter((e) => e !== t))
          );
        },
      };
    })();
    setConfig(e, t) {
      e &&
        (t && (this.defaults = t),
        (this.userConfig = e),
        this.blocked.clear(),
        this.parentOrders.clear(),
        this._cache.clear(),
        (this.config = T(e, this.defaults)),
        this.events.emit("config", this.config));
    }
    async applyExtractors(e, t, r = new Set()) {
      let n = {
        original: e,
        code: e,
        id: t,
        extracted: r,
        envMode: this.config.envMode,
      };
      for (let e of this.config.extractors) {
        let t = await e.extract?.(n);
        if (t)
          if (v(t) && v(r))
            for (let e of t) r.setCount(e, r.getCount(e) + t.getCount(e));
          else for (let e of t) r.add(e);
      }
      return r;
    }
    makeContext(e, t) {
      let r = {
        rawSelector: e,
        currentSelector: t[1],
        theme: this.config.theme,
        generator: this,
        variantHandlers: t[2],
        constructCSS: (...e) => this.constructCustomCSS(r, ...e),
        variantMatch: t,
      };
      return r;
    }
    async parseToken(e, t) {
      if (this.blocked.has(e)) return;
      let r = `${e}${t ? ` ${t}` : ""}`;
      if (this._cache.has(r)) return this._cache.get(r);
      let n = e;
      for (let t of this.config.preprocess) n = t(e);
      if (this.isBlocked(n))
        return this.blocked.add(e), void this._cache.set(r, null);
      let o = await this.matchVariants(e, n);
      if (!o || this.isBlocked(o[1]))
        return this.blocked.add(e), void this._cache.set(r, null);
      let i = this.makeContext(e, [t || o[0], o[1], o[2], o[3]]);
      this.config.details && (i.variants = [...o[3]]);
      let a = await this.expandShortcut(i.currentSelector, i),
        s = a
          ? await this.stringifyShortcuts(i.variantMatch, i, a[0], a[1])
          : (await this.parseUtil(i.variantMatch, i))
              ?.map((e) => this.stringifyUtil(e, i))
              .filter(b);
      if (s?.length) return this._cache.set(r, s), s;
      this._cache.set(r, null);
    }
    async generate(e, t = {}) {
      let {
          id: r,
          scope: n,
          preflights: o = !0,
          safelist: s = !0,
          minify: l = !1,
          extendedInfo: c = !1,
        } = t,
        f = a(e)
          ? await this.applyExtractors(e, r, c ? new x() : new Set())
          : Array.isArray(e)
          ? new Set(e)
          : e;
      s &&
        this.config.safelist.forEach((e) => {
          f.has(e) || f.add(e);
        });
      let u = l ? "" : "\n",
        p = new Set([j]),
        d = c ? new Map() : new Set(),
        m = new Map(),
        h = {},
        g = Array.from(f).map(async (e) => {
          if (d.has(e)) return;
          let t = await this.parseToken(e);
          if (null != t) {
            d instanceof Map
              ? d.set(e, { data: t, count: v(f) ? f.getCount(e) : -1 })
              : d.add(e);
            for (let e of t) {
              let t = e[3] || "",
                r = e[4]?.layer;
              m.has(t) || m.set(t, []), m.get(t).push(e), r && p.add(r);
            }
          }
        });
      await Promise.all(g),
        await (async () => {
          if (!o) return;
          let e = { generator: this, theme: this.config.theme },
            t = new Set([]);
          this.config.preflights.forEach(({ layer: e = A }) => {
            p.add(e), t.add(e);
          }),
            (h = Object.fromEntries(
              await Promise.all(
                Array.from(t).map(async (t) => {
                  let r = (
                    await Promise.all(
                      this.config.preflights
                        .filter((e) => (e.layer || A) === t)
                        .map(async (t) => await t.getCSS(e))
                    )
                  )
                    .filter(Boolean)
                    .join(u);
                  return [t, r];
                })
              )
            ));
        })();
      let b = this.config.sortLayers(
          Array.from(p).sort(
            (e, t) =>
              (this.config.layers[e] ?? 0) - (this.config.layers[t] ?? 0) ||
              e.localeCompare(t)
          )
        ),
        y = {},
        w = (e) => {
          if (y[e]) return y[e];
          let t = Array.from(m)
            .sort(
              (e, t) =>
                (this.parentOrders.get(e[0]) ?? 0) -
                  (this.parentOrders.get(t[0]) ?? 0) ||
                e[0]?.localeCompare(t[0] || "") ||
                0
            )
            .map(([t, r]) => {
              let o = r.length,
                a = r
                  .filter((t) => (t[4]?.layer || j) === e)
                  .sort(
                    (e, t) =>
                      e[0] - t[0] ||
                      (e[4]?.sort || 0) - (t[4]?.sort || 0) ||
                      e[5]?.currentSelector?.localeCompare(
                        t[5]?.currentSelector ?? ""
                      ) ||
                      e[1]?.localeCompare(t[1] || "") ||
                      e[2]?.localeCompare(t[2] || "") ||
                      0
                  )
                  .map(([, e, t, , r, , o]) => [
                    [[(e && P(e, n)) ?? "", r?.sort ?? 0]],
                    t,
                    !!(o ?? r?.noMerge),
                  ]);
              if (!a.length) return;
              let s = a
                .reverse()
                .map(([e, t, r], n) => {
                  if (!r && this.config.mergeSelectors)
                    for (let r = n + 1; r < o; r++) {
                      let n = a[r];
                      if (
                        n &&
                        !n[2] &&
                        ((e && n[0]) || (null == e && null == n[0])) &&
                        n[1] === t
                      )
                        return e && n[0] && n[0].push(...e), null;
                    }
                  let s = e
                    ? i(
                        e
                          .sort(
                            (e, t) =>
                              e[1] - t[1] ||
                              e[0]?.localeCompare(t[0] || "") ||
                              0
                          )
                          .map((e) => e[0])
                          .filter(Boolean)
                      )
                    : [];
                  return s.length ? `${s.join(`,${u}`)}{${t}}` : t;
                })
                .filter(Boolean)
                .reverse()
                .join(u);
              if (!t) return s;
              let l = t.split(" $$ ");
              return `${l.join("{")}{${u}${s}${u}${"}".repeat(l.length)}`;
            })
            .filter(Boolean)
            .join(u);
          o && (t = [h[e], t].filter(Boolean).join(u));
          let r = l ? "" : `/* layer: ${e} */${u}`;
          return (y[e] = t ? r + t : "");
        },
        $ = (e = b, t) =>
          e
            .filter((e) => !t?.includes(e))
            .map((e) => w(e) || "")
            .filter(Boolean)
            .join(u);
      return {
        get css() {
          return $();
        },
        layers: b,
        matched: d,
        getLayers: $,
        getLayer: w,
      };
    }
    async matchVariants(e, t) {
      let r = new Set(),
        n = [],
        o = t || e,
        i = !0,
        s = { rawSelector: e, theme: this.config.theme, generator: this };
      for (; i; ) {
        i = !1;
        for (let e of this.config.variants) {
          if (!e.multiPass && r.has(e)) continue;
          let t = await e.match(o, s);
          if (t) {
            if (a(t)) {
              if (t === o) continue;
              t = { matcher: t };
            }
            (o = t.matcher), n.unshift(t), r.add(e), (i = !0);
            break;
          }
        }
        if (!i) break;
        if (n.length > 500)
          throw new Error(`Too many variants applied to "${e}"`);
      }
      return [e, o, n, r];
    }
    applyVariants(e, t = e[4], r = e[1]) {
      let o = t
          .slice()
          .sort((e, t) => (e.order || 0) - (t.order || 0))
          .reduceRight(
            (e, t) => (r) => {
              let n = t.body?.(r.entries) || r.entries,
                o = Array.isArray(t.parent) ? t.parent : [t.parent, void 0];
              return (t.handle ?? M)(
                {
                  ...r,
                  entries: n,
                  selector: t.selector?.(r.selector, n) || r.selector,
                  parent: o[0] || r.parent,
                  parentOrder: o[1] || r.parentOrder,
                  layer: t.layer || r.layer,
                  sort: t.sort || r.sort,
                },
                e
              );
            },
            (e) => e
          )({
          prefix: "",
          selector:
            ((s = r),
            F.test(s)
              ? s.replace(F, (e, t, r, o) => `[${n(t)}${r}"${n(o)}"]`)
              : `.${n(s)}`),
          pseudo: "",
          entries: e[2],
        }),
        { parent: i, parentOrder: a } = o;
      var s;
      null != i && null != a && this.parentOrders.set(i, a);
      let l = {
        selector: [o.prefix, o.selector, o.pseudo].join(""),
        entries: o.entries,
        parent: i,
        layer: o.layer,
        sort: o.sort,
        noMerge: o.noMerge,
      };
      for (let e of this.config.postprocess) e(l);
      return l;
    }
    constructCustomCSS(e, t, r) {
      let n = s(t);
      if (a(n)) return n;
      let {
          selector: o,
          entries: i,
          parent: c,
        } = this.applyVariants([
          0,
          r || e.rawSelector,
          n,
          void 0,
          e.variantHandlers,
        ]),
        f = `${o}{${l(i)}}`;
      return c ? `${c}{${f}}` : f;
    }
    async parseUtil(e, t, r = !1, n) {
      let [i, l, c] = a(e) ? await this.matchVariants(e) : e;
      this.config.details && (t.rules = t.rules ?? []);
      let f = this.config.rulesStaticMap[l];
      if (f && f[1] && (r || !f[2]?.internal)) {
        this.config.details && t.rules.push(f[3]);
        let e = f[0],
          r = s(f[1]),
          n = f[2];
        return a(r) ? [[e, r, n]] : [[e, i, r, n, c]];
      }
      t.variantHandlers = c;
      let { rulesDynamic: u } = this.config;
      for (let [e, f, d, m] of u) {
        if (m?.internal && !r) continue;
        let u = l;
        if (m?.prefix) {
          let e = o(m.prefix);
          if (n) {
            let t = o(n);
            if (!e.some((e) => t.includes(e))) continue;
          } else {
            let t = e.find((e) => l.startsWith(e));
            if (null == t) continue;
            u = l.slice(t.length);
          }
        }
        let h = u.match(f);
        if (!h) continue;
        let g = await d(h, t);
        if (!g) continue;
        this.config.details && t.rules.push([f, d, m]);
        let b = ((p = g),
        Array.isArray(p)
          ? p.find((e) => !Array.isArray(e) || Array.isArray(e[0]))
            ? p.map((e) => s(e))
            : [p]
          : [s(p)]).filter((e) => e.length);
        if (b.length) return b.map((t) => (a(t) ? [e, t, m] : [e, i, t, m, c]));
      }
      var p;
    }
    stringifyUtil(e, t) {
      if (!e) return;
      if (g(e))
        return [
          e[0],
          void 0,
          e[1],
          void 0,
          e[2],
          this.config.details ? t : void 0,
          void 0,
        ];
      let {
          selector: r,
          entries: n,
          parent: o,
          layer: i,
          sort: a,
          noMerge: s,
        } = this.applyVariants(e),
        c = l(n);
      if (!c) return;
      let { layer: f, sort: u, ...p } = e[3] ?? {},
        d = { ...p, layer: i ?? f, sort: a ?? u };
      return [e[0], r, c, o, d, this.config.details ? t : void 0, s];
    }
    async expandShortcut(e, t, r = 5) {
      if (0 === r) return;
      let n,
        i,
        s = this.config.details
          ? (e) => {
              (t.shortcuts = t.shortcuts ?? []), t.shortcuts.push(e);
            }
          : y;
      for (let r of this.config.shortcuts) {
        let l = e;
        if (r[2]?.prefix) {
          let t = o(r[2].prefix).find((t) => e.startsWith(t));
          if (null == t) continue;
          l = e.slice(t.length);
        }
        if (a(r[0])) {
          if (r[0] === l) {
            (n = n || r[2]), (i = r[1]), s(r);
            break;
          }
        } else {
          let e = l.match(r[0]);
          if ((e && (i = r[1](e, t)), i)) {
            (n = n || r[2]), s(r);
            break;
          }
        }
      }
      if (
        (a(i) &&
          (i = (function (e, t = ["-", ":"], r = 5) {
            let n = $(e, t, r);
            return "string" == typeof e ? n.expanded : e;
          })(i.trim()).split(/\s+/g)),
        !i)
      ) {
        let [n, o] = a(e) ? await this.matchVariants(e) : e;
        if (n !== o) {
          let e = await this.expandShortcut(o, t, r - 1);
          e && (i = e[0].map((e) => (a(e) ? n.replace(o, e) : e)));
        }
      }
      return i
        ? [
            (
              await Promise.all(
                i.map(
                  async (e) =>
                    (a(e)
                      ? (
                          await this.expandShortcut(e, t, r - 1)
                        )?.[0]
                      : void 0) || [e]
                )
              )
            )
              .flat(1)
              .filter(Boolean),
            n,
          ]
        : void 0;
    }
    async stringifyShortcuts(
      e,
      t,
      r,
      n = { layer: this.config.shortcutsLayer }
    ) {
      let o = new (class {
          _map = new Map();
          get(e, t) {
            let r = this._map.get(e);
            if (r) return r.get(t);
          }
          getFallback(e, t, r) {
            let n = this._map.get(e);
            return (
              n || ((n = new Map()), this._map.set(e, n)),
              n.has(t) || n.set(t, r),
              n.get(t)
            );
          }
          set(e, t, r) {
            let n = this._map.get(e);
            return (
              n || ((n = new Map()), this._map.set(e, n)), n.set(t, r), this
            );
          }
          has(e, t) {
            return this._map.get(e)?.has(t);
          }
          delete(e, t) {
            return this._map.get(e)?.delete(t) || !1;
          }
          deleteTop(e) {
            return this._map.delete(e);
          }
          map(e) {
            return Array.from(this._map.entries()).flatMap(([t, r]) =>
              Array.from(r.entries()).map(([r, n]) => e(n, t, r))
            );
          }
        })(),
        c = (
          await Promise.all(
            i(r).map(async (r) => {
              let o = a(r)
                ? await this.parseUtil(r, t, !0, n.prefix)
                : [[Number.POSITIVE_INFINITY, "{inline}", s(r), void 0, []]];
              return (
                !o &&
                  this.config.warn &&
                  E(`unmatched utility "${r}" in shortcut "${e[1]}"`),
                o || []
              );
            })
          )
        )
          .flat(1)
          .filter(Boolean)
          .sort((e, t) => e[0] - t[0]),
        [f, , u] = e,
        p = [];
      for (let e of c) {
        if (g(e)) {
          p.push([e[0], void 0, e[1], void 0, e[2], t, void 0]);
          continue;
        }
        let {
          selector: r,
          entries: n,
          parent: i,
          sort: a,
          noMerge: s,
        } = this.applyVariants(e, [...e[4], ...u], f);
        o.getFallback(r, i, [[], e[0]])[0].push([
          n,
          !!(s ?? e[3]?.noMerge),
          a ?? 0,
        ]);
      }
      return p.concat(
        o
          .map(([e, r], o, i) => {
            let a = (e, a, s) => {
              let c = Math.max(...s.map((e) => e[1])),
                f = s.map((e) => e[0]);
              return (e ? [f.flat(1)] : f).map((e) => {
                let s = l(e);
                if (s)
                  return [r, o, s, i, { ...n, noMerge: a, sort: c }, t, void 0];
              });
            };
            return [
              [e.filter(([, e]) => e).map(([e, , t]) => [e, t]), !0],
              [e.filter(([, e]) => !e).map(([e, , t]) => [e, t]), !1],
            ].map(([e, t]) => [
              ...a(
                !1,
                t,
                e.filter(([e]) => e.some((e) => e[0] === d))
              ),
              ...a(
                !0,
                t,
                e.filter(([e]) => e.every((e) => e[0] !== d))
              ),
            ]);
          })
          .flat(2)
          .filter(Boolean)
      );
    }
    isBlocked(e) {
      return (
        !e ||
        this.config.blocklist.some((t) =>
          "function" == typeof t ? t(e) : a(t) ? t === e : t.test(e)
        )
      );
    }
  };
  var N = /\s\$\$\s+/g;
  function P(e, t) {
    return (function (e) {
      return N.test(e);
    })(e)
      ? e.replace(N, t ? ` ${t} ` : " ")
      : t
      ? `${t} ${e}`
      : e;
  }
  var F = /^\[(.+?)(~?=)"(.*)"\]$/;
  function M(e, t) {
    return t(e);
  }
  var W = /\/\/#\s*sourceMappingURL=.*\n?/g;
  var B = /(?:[\w&:[\]-]|\[\S+=\S+\])+\[\\?['"]?\S+?['"]\]\]?[\w:-]*/g,
    D = /\[(\\\W|[\w-])+:[^\s:]*?("\S+?"|'\S+?'|`\S+?`|[^\s:]+?)[^\s:]*?\)?\]/g,
    I = /^\[(\\\W|[\w-])+:['"]?\S+?['"]?\]$/;
  function Y(e) {
    let t = [];
    for (let r of e.matchAll(D))
      (0 !== r.index && !/^[\s'"`]/.test(e[r.index - 1] ?? "")) || t.push(r[0]);
    for (let r of e.matchAll(B)) t.push(r[0]);
    return (
      e.split(S).forEach((e) => {
        (function (e = "") {
          return p.test(e);
        })(e) &&
          !I.test(e) &&
          t.push(e);
      }),
      t
    );
  }
  var X = {
      name: "@unocss/extractor-arbitrary-variants",
      order: 0,
      extract: ({ code: e }) =>
        Y(
          (function (e) {
            return e.includes("sourceMappingURL=") ? e.replace(W, "") : e;
          })(e)
        ),
    },
    q = [
      {
        layer: "preflights",
        getCSS(e) {
          if (e.theme.preflightBase) {
            let t = l(Object.entries(e.theme.preflightBase));
            return o(
              e.theme.preflightRoot ?? ["*,::before,::after", "::backdrop"]
            )
              .map((e) => `${e}{${t}}`)
              .join("");
          }
        },
      },
    ],
    H = {
      l: ["-left"],
      r: ["-right"],
      t: ["-top"],
      b: ["-bottom"],
      s: ["-inline-start"],
      e: ["-inline-end"],
      x: ["-left", "-right"],
      y: ["-top", "-bottom"],
      "": [""],
      bs: ["-block-start"],
      be: ["-block-end"],
      is: ["-inline-start"],
      ie: ["-inline-end"],
      block: ["-block-start", "-block-end"],
      inline: ["-inline-start", "-inline-end"],
    },
    V = {
      ...H,
      s: ["-inset-inline-start"],
      start: ["-inset-inline-start"],
      e: ["-inset-inline-end"],
      end: ["-inset-inline-end"],
      bs: ["-inset-block-start"],
      be: ["-inset-block-end"],
      is: ["-inset-inline-start"],
      ie: ["-inset-inline-end"],
      block: ["-inset-block-start", "-inset-block-end"],
      inline: ["-inset-inline-start", "-inset-inline-end"],
    },
    Z = {
      l: ["-top-left", "-bottom-left"],
      r: ["-top-right", "-bottom-right"],
      t: ["-top-left", "-top-right"],
      b: ["-bottom-left", "-bottom-right"],
      tl: ["-top-left"],
      lt: ["-top-left"],
      tr: ["-top-right"],
      rt: ["-top-right"],
      bl: ["-bottom-left"],
      lb: ["-bottom-left"],
      br: ["-bottom-right"],
      rb: ["-bottom-right"],
      "": [""],
      bs: ["-start-start", "-start-end"],
      be: ["-end-start", "-end-end"],
      s: ["-end-start", "-start-start"],
      is: ["-end-start", "-start-start"],
      e: ["-start-end", "-end-end"],
      ie: ["-start-end", "-end-end"],
      ss: ["-start-start"],
      "bs-is": ["-start-start"],
      "is-bs": ["-start-start"],
      se: ["-start-end"],
      "bs-ie": ["-start-end"],
      "ie-bs": ["-start-end"],
      es: ["-end-start"],
      "be-is": ["-end-start"],
      "is-be": ["-end-start"],
      ee: ["-end-end"],
      "be-ie": ["-end-end"],
      "ie-be": ["-end-end"],
    },
    G = { x: ["-x"], y: ["-y"], z: ["-z"], "": ["-x", "-y"] },
    J = [
      "top",
      "top center",
      "top left",
      "top right",
      "bottom",
      "bottom center",
      "bottom left",
      "bottom right",
      "left",
      "left center",
      "left top",
      "left bottom",
      "right",
      "right center",
      "right top",
      "right bottom",
      "center",
      "center top",
      "center bottom",
      "center left",
      "center right",
      "center center",
    ],
    K = Object.assign(
      {},
      ...J.map((e) => ({ [e.replace(/ /, "-")]: e })),
      ...J.map((e) => ({ [e.replace(/\b(\w)\w+/g, "$1").replace(/ /, "")]: e }))
    ),
    Q = ["inherit", "initial", "revert", "revert-layer", "unset"],
    ee = /^(calc|clamp|min|max)\s*\((.+)\)(.*)/;
  function te(e, t, r) {
    if ("" === e) return;
    let n = e.length,
      o = 0,
      i = !1,
      a = 0;
    for (let s = 0; s < n; s++)
      switch (e[s]) {
        case t:
          i || ((i = !0), (a = s)), o++;
          break;
        case r:
          if ((--o, o < 0)) return;
          if (0 === o)
            return [e.slice(a, s + 1), e.slice(s + 1), e.slice(0, a)];
      }
  }
  function re(e, t, r, n) {
    if ("" === e || (a(n) && (n = [n]), 0 === n.length)) return;
    let o = e.length,
      i = 0;
    for (let a = 0; a < o; a++)
      switch (e[a]) {
        case t:
          i++;
          break;
        case r:
          if (--i < 0) return;
          break;
        default:
          for (let t of n) {
            let r = t.length;
            if (r && t === e.slice(a, a + r) && 0 === i)
              return 0 === a || a === o - r
                ? void 0
                : [e.slice(0, a), e.slice(a + r)];
          }
      }
    return [e, ""];
  }
  function ne(e, t, r) {
    r = r ?? 10;
    let n = [],
      o = 0;
    for (; "" !== e; ) {
      if (++o > r) return;
      let i = re(e, "(", ")", t);
      if (!i) return;
      let [a, s] = i;
      n.push(a), (e = s);
    }
    if (n.length > 0) return n;
  }
  var oe = [
      "hsl",
      "hsla",
      "hwb",
      "lab",
      "lch",
      "oklab",
      "oklch",
      "rgb",
      "rgba",
    ],
    ie = ["%alpha", "<alpha-value>"],
    ae = new RegExp(ie.map((e) => t(e)).join("|"));
  function se(e = "") {
    let t = (function (e) {
      if (!e) return;
      let t = (function (e) {
        let [, t] = e.match(/^#([\da-f]+)$/i) || [];
        if (t)
          switch (t.length) {
            case 3:
            case 4:
              let e = Array.from(t, (e) => Number.parseInt(e, 16)).map(
                (e) => (e << 4) | e
              );
              return {
                type: "rgb",
                components: e.slice(0, 3),
                alpha:
                  3 === t.length
                    ? void 0
                    : Math.round((e[3] / 255) * 100) / 100,
              };
            case 6:
            case 8:
              let r = Number.parseInt(t, 16);
              return {
                type: "rgb",
                components:
                  6 === t.length
                    ? [(r >> 16) & 255, (r >> 8) & 255, 255 & r]
                    : [(r >> 24) & 255, (r >> 16) & 255, (r >> 8) & 255],
                alpha:
                  6 === t.length
                    ? void 0
                    : Math.round(((255 & r) / 255) * 100) / 100,
              };
          }
      })(e);
      if (
        null != t ||
        ((t = (function (e) {
          let t = { rebeccapurple: [102, 51, 153, 1] }[e];
          if (null != t)
            return { type: "rgb", components: t.slice(0, 3), alpha: t[3] };
        })(e)),
        null != t) ||
        ((t = (function (e) {
          let t = e.match(/^(rgb|rgba|hsl|hsla)\((.+)\)$/i);
          if (!t) return;
          let [, r, n] = t,
            o = ne(n, ",", 5);
          if (o) {
            if ([3, 4].includes(o.length))
              return { type: r, components: o.slice(0, 3), alpha: o[3] };
            if (1 !== o.length) return !1;
          }
        })(e)),
        null != t) ||
        ((t = (function (e) {
          let t = e.match(fe);
          if (!t) return;
          let [, r, n] = t,
            o = ue(`${r} ${n}`);
          if (o) {
            let {
              alpha: e,
              components: [t, ...r],
            } = o;
            return { type: t, components: r, alpha: e };
          }
        })(e)),
        null != t) ||
        ((t = (function (e) {
          let t = e.match(/^color\((.+)\)$/);
          if (!t) return;
          let r = ue(t[1]);
          if (r) {
            let {
              alpha: e,
              components: [t, ...n],
            } = r;
            return { type: t, components: n, alpha: e };
          }
        })(e)),
        null != t)
      )
        return t;
    })(e);
    if (null == t || !1 === t) return;
    let { type: r, components: n, alpha: o } = t,
      i = r.toLowerCase();
    return 0 === n.length || (oe.includes(i) && ![1, 3].includes(n.length))
      ? void 0
      : {
          type: i,
          components: n.map((e) => ("string" == typeof e ? e.trim() : e)),
          alpha: "string" == typeof o ? o.trim() : o,
        };
  }
  function le(e) {
    let t = e.alpha ?? 1;
    return "string" == typeof t && ie.includes(t) ? 1 : t;
  }
  function ce(e, t) {
    if ("string" == typeof e) return e.replace(ae, `${t ?? 1}`);
    let { components: r } = e,
      { alpha: n, type: o } = e;
    return (
      (n = t ?? n),
      (o = o.toLowerCase()),
      ["hsla", "rgba"].includes(o)
        ? `${o}(${r.join(", ")}${null == n ? "" : `, ${n}`})`
        : ((n = null == n ? "" : ` / ${n}`),
          oe.includes(o)
            ? `${o}(${r.join(" ")}${n})`
            : `color(${o} ${r.join(" ")}${n})`)
    );
  }
  var fe = new RegExp(`^(${oe.join("|")})\\((.+)\\)$`, "i");
  function ue(e) {
    let t = ne(e, " ");
    if (!t) return;
    let r = t.length;
    if ("/" === t[r - 2])
      return { components: t.slice(0, r - 2), alpha: t[r - 1] };
    if (
      null != t[r - 2] &&
      (t[r - 2].endsWith("/") || t[r - 1].startsWith("/"))
    ) {
      let e = t.splice(r - 2);
      t.push(e.join(" ")), --r;
    }
    let n = ne(t[r - 1], "/", 2);
    if (!n) return;
    if (1 === n.length || "" === n[n.length - 1]) return { components: t };
    let o = n.pop();
    return (t[r - 1] = n.join("/")), { components: t, alpha: o };
  }
  function pe(e) {
    let t = function (t) {
      let r = this.__options?.sequence || [];
      this.__options.sequence = [];
      for (let n of r) {
        let r = e[n](t);
        if (null != r) return r;
      }
    };
    function r(e, t) {
      return (
        e.__options || (e.__options = { sequence: [] }),
        e.__options.sequence.push(t),
        e
      );
    }
    for (let n of Object.keys(e))
      Object.defineProperty(t, n, {
        enumerable: !0,
        get() {
          return r(this, n);
        },
      });
    return t;
  }
  function de(e, r) {
    let n;
    return {
      name: e,
      match(o, i) {
        n ||
          (n = new RegExp(
            `^${t(e)}(?:${i.generator.config.separators.join("|")})`
          ));
        let a = o.match(n);
        if (a)
          return {
            matcher: o.slice(a[0].length),
            handle: (e, t) => t({ ...e, ...r(e) }),
          };
      },
      autocomplete: `${e}:`,
    };
  }
  function me(e, r) {
    let n;
    return {
      name: e,
      match(o, i) {
        n ||
          (n = new RegExp(
            `^${t(e)}(?:${i.generator.config.separators.join("|")})`
          ));
        let a = o.match(n);
        if (a)
          return {
            matcher: o.slice(a[0].length),
            handle: (e, t) =>
              t({ ...e, parent: `${e.parent ? `${e.parent} $$ ` : ""}${r}` }),
          };
      },
      autocomplete: `${e}:`,
    };
  }
  function he(e, t, r) {
    if (t.startsWith(`${e}[`)) {
      let [n, o] = te(t.slice(e.length), "[", "]") ?? [];
      if (n && o) {
        for (let e of r) if (o.startsWith(e)) return [n, o.slice(e.length), e];
        return [n, o, ""];
      }
    }
  }
  function ge(e, t, r) {
    if (t.startsWith(e)) {
      let n = he(e, t, r);
      if (n) {
        let [e = "", t = n[1]] = ge("/", n[1], r) ?? [];
        return [n[0], t, e];
      }
      for (let n of r.filter((e) => "/" !== e)) {
        let r = t.indexOf(n, e.length);
        if (-1 !== r) {
          let o = t.indexOf("/", e.length),
            i = -1 === o || r <= o;
          return [
            t.slice(e.length, i ? r : o),
            t.slice(r + n.length),
            i ? "" : t.slice(o + 1, r),
          ];
        }
      }
    }
  }
  var be = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    ye = new Uint8Array(64),
    xe = new Uint8Array(128);
  for (let e = 0; e < 64; e++) {
    let t = be.charCodeAt(e);
    (ye[e] = t), (xe[t] = e);
  }
  var ve =
    typeof TextDecoder < "u"
      ? new TextDecoder()
      : {
          decode: (e) =>
            m.from(e.buffer, e.byteOffset, e.byteLength).toString(),
        };
  function we(e, t, r, n, o) {
    let i = n[o],
      a = i - r[o];
    (r[o] = i), (a = a < 0 ? (-a << 1) | 1 : a << 1);
    do {
      let r = 31 & a;
      (a >>>= 5), a > 0 && (r |= 32), (e[t++] = ye[r]);
    } while (a > 0);
    return t;
  }
  var $e = class e {
      constructor(t) {
        this.bits = t instanceof e ? t.bits.slice() : [];
      }
      add(e) {
        this.bits[e >> 5] |= 1 << (31 & e);
      }
      has(e) {
        return !!(this.bits[e >> 5] & (1 << (31 & e)));
      }
    },
    ke = class e {
      constructor(e, t, r) {
        (this.start = e),
          (this.end = t),
          (this.original = r),
          (this.intro = ""),
          (this.outro = ""),
          (this.content = r),
          (this.storeName = !1),
          (this.edited = !1),
          (this.previous = null),
          (this.next = null);
      }
      appendLeft(e) {
        this.outro += e;
      }
      appendRight(e) {
        this.intro = this.intro + e;
      }
      clone() {
        let t = new e(this.start, this.end, this.original);
        return (
          (t.intro = this.intro),
          (t.outro = this.outro),
          (t.content = this.content),
          (t.storeName = this.storeName),
          (t.edited = this.edited),
          t
        );
      }
      contains(e) {
        return this.start < e && e < this.end;
      }
      eachNext(e) {
        let t = this;
        for (; t; ) e(t), (t = t.next);
      }
      eachPrevious(e) {
        let t = this;
        for (; t; ) e(t), (t = t.previous);
      }
      edit(e, t, r) {
        return (
          (this.content = e),
          r || ((this.intro = ""), (this.outro = "")),
          (this.storeName = t),
          (this.edited = !0),
          this
        );
      }
      prependLeft(e) {
        this.outro = e + this.outro;
      }
      prependRight(e) {
        this.intro = e + this.intro;
      }
      split(t) {
        let r = t - this.start,
          n = this.original.slice(0, r),
          o = this.original.slice(r);
        this.original = n;
        let i = new e(t, this.end, o);
        return (
          (i.outro = this.outro),
          (this.outro = ""),
          (this.end = t),
          this.edited
            ? (i.edit("", !1), (this.content = ""))
            : (this.content = n),
          (i.next = this.next),
          i.next && (i.next.previous = i),
          (i.previous = this),
          (this.next = i),
          i
        );
      }
      toString() {
        return this.intro + this.content + this.outro;
      }
      trimEnd(e) {
        if (((this.outro = this.outro.replace(e, "")), this.outro.length))
          return !0;
        let t = this.content.replace(e, "");
        return t.length
          ? (t !== this.content &&
              (this.split(this.start + t.length).edit("", void 0, !0),
              this.edited && this.edit(t, this.storeName, !0)),
            !0)
          : (this.edit("", void 0, !0),
            (this.intro = this.intro.replace(e, "")),
            !!this.intro.length || void 0);
      }
      trimStart(e) {
        if (((this.intro = this.intro.replace(e, "")), this.intro.length))
          return !0;
        let t = this.content.replace(e, "");
        if (t.length) {
          if (t !== this.content) {
            let e = this.split(this.end - t.length);
            this.edited && e.edit(t, this.storeName, !0),
              this.edit("", void 0, !0);
          }
          return !0;
        }
        return (
          this.edit("", void 0, !0),
          (this.outro = this.outro.replace(e, "")),
          !!this.outro.length || void 0
        );
      }
    };
  var Ee =
    typeof window < "u" && "function" == typeof window.btoa
      ? (e) => window.btoa(unescape(encodeURIComponent(e)))
      : (e) => m.from(e, "utf-8").toString("base64");
  function Se(e, t) {
    let r = e.split(/[/\\]/),
      n = t.split(/[/\\]/);
    for (r.pop(); r[0] === n[0]; ) r.shift(), n.shift();
    if (r.length) {
      let e = r.length;
      for (; e--; ) r[e] = "..";
    }
    return r.concat(n).join("/");
  }
  var ze = Object.prototype.toString;
  function je(e) {
    let t = e.split("\n"),
      r = [];
    for (let e = 0, n = 0; e < t.length; e++) r.push(n), (n += t[e].length + 1);
    return function (e) {
      let t = 0,
        n = r.length;
      for (; t < n; ) {
        let o = (t + n) >> 1;
        e < r[o] ? (n = o) : (t = o + 1);
      }
      let o = t - 1;
      return { line: o, column: e - r[o] };
    };
  }
  var Ae = /\w/,
    _e = "\n",
    Ce = { insertLeft: !1, insertRight: !1, storeName: !1 },
    Re = /theme\(\s*['"]?(.*?)['"]?\s*\)/g;
  function Le(e, t, r = !0) {
    let n = Array.from(e.toString().matchAll(Re));
    if (!n.length) return e;
    let o = new (class e {
      constructor(e, t = {}) {
        let r = new ke(0, e.length, e);
        Object.defineProperties(this, {
          original: { writable: !0, value: e },
          outro: { writable: !0, value: "" },
          intro: { writable: !0, value: "" },
          firstChunk: { writable: !0, value: r },
          lastChunk: { writable: !0, value: r },
          lastSearchedChunk: { writable: !0, value: r },
          byStart: { writable: !0, value: {} },
          byEnd: { writable: !0, value: {} },
          filename: { writable: !0, value: t.filename },
          indentExclusionRanges: {
            writable: !0,
            value: t.indentExclusionRanges,
          },
          sourcemapLocations: { writable: !0, value: new $e() },
          storedNames: { writable: !0, value: {} },
          indentStr: { writable: !0, value: void 0 },
          ignoreList: { writable: !0, value: t.ignoreList },
        }),
          (this.byStart[0] = r),
          (this.byEnd[e.length] = r);
      }
      addSourcemapLocation(e) {
        this.sourcemapLocations.add(e);
      }
      append(e) {
        if ("string" != typeof e)
          throw new TypeError("outro content must be a string");
        return (this.outro += e), this;
      }
      appendLeft(e, t) {
        if ("string" != typeof t)
          throw new TypeError("inserted content must be a string");
        this._split(e);
        let r = this.byEnd[e];
        return r ? r.appendLeft(t) : (this.intro += t), this;
      }
      appendRight(e, t) {
        if ("string" != typeof t)
          throw new TypeError("inserted content must be a string");
        this._split(e);
        let r = this.byStart[e];
        return r ? r.appendRight(t) : (this.outro += t), this;
      }
      clone() {
        let t = new e(this.original, { filename: this.filename }),
          r = this.firstChunk,
          n = (t.firstChunk = t.lastSearchedChunk = r.clone());
        for (; r; ) {
          (t.byStart[n.start] = n), (t.byEnd[n.end] = n);
          let e = r.next,
            o = e && e.clone();
          o && ((n.next = o), (o.previous = n), (n = o)), (r = e);
        }
        return (
          (t.lastChunk = n),
          this.indentExclusionRanges &&
            (t.indentExclusionRanges = this.indentExclusionRanges.slice()),
          (t.sourcemapLocations = new $e(this.sourcemapLocations)),
          (t.intro = this.intro),
          (t.outro = this.outro),
          t
        );
      }
      generateDecodedMap(e) {
        e = e || {};
        let t = Object.keys(this.storedNames),
          r = new (class {
            constructor(e) {
              (this.hires = e),
                (this.generatedCodeLine = 0),
                (this.generatedCodeColumn = 0),
                (this.raw = []),
                (this.rawSegments = this.raw[this.generatedCodeLine] = []),
                (this.pending = null);
            }
            addEdit(e, t, r, n) {
              if (t.length) {
                let o = t.indexOf("\n", 0),
                  i = -1;
                for (; o >= 0; ) {
                  let a = [this.generatedCodeColumn, e, r.line, r.column];
                  n >= 0 && a.push(n),
                    this.rawSegments.push(a),
                    (this.generatedCodeLine += 1),
                    (this.raw[this.generatedCodeLine] = this.rawSegments = []),
                    (this.generatedCodeColumn = 0),
                    (i = o),
                    (o = t.indexOf("\n", o + 1));
                }
                let a = [this.generatedCodeColumn, e, r.line, r.column];
                n >= 0 && a.push(n),
                  this.rawSegments.push(a),
                  this.advance(t.slice(i + 1));
              } else
                this.pending &&
                  (this.rawSegments.push(this.pending), this.advance(t));
              this.pending = null;
            }
            addUneditedChunk(e, t, r, n, o) {
              let i = t.start,
                a = !0,
                s = !1;
              for (; i < t.end; ) {
                if (this.hires || a || o.has(i)) {
                  let t = [this.generatedCodeColumn, e, n.line, n.column];
                  "boundary" === this.hires
                    ? Ae.test(r[i])
                      ? s || (this.rawSegments.push(t), (s = !0))
                      : (this.rawSegments.push(t), (s = !1))
                    : this.rawSegments.push(t);
                }
                "\n" === r[i]
                  ? ((n.line += 1),
                    (n.column = 0),
                    (this.generatedCodeLine += 1),
                    (this.raw[this.generatedCodeLine] = this.rawSegments = []),
                    (this.generatedCodeColumn = 0),
                    (a = !0))
                  : ((n.column += 1),
                    (this.generatedCodeColumn += 1),
                    (a = !1)),
                  (i += 1);
              }
              this.pending = null;
            }
            advance(e) {
              if (!e) return;
              let t = e.split("\n");
              if (t.length > 1) {
                for (let e = 0; e < t.length - 1; e++)
                  this.generatedCodeLine++,
                    (this.raw[this.generatedCodeLine] = this.rawSegments = []);
                this.generatedCodeColumn = 0;
              }
              this.generatedCodeColumn += t[t.length - 1].length;
            }
          })(e.hires),
          n = je(this.original);
        return (
          this.intro && r.advance(this.intro),
          this.firstChunk.eachNext((e) => {
            let o = n(e.start);
            e.intro.length && r.advance(e.intro),
              e.edited
                ? r.addEdit(
                    0,
                    e.content,
                    o,
                    e.storeName ? t.indexOf(e.original) : -1
                  )
                : r.addUneditedChunk(
                    0,
                    e,
                    this.original,
                    o,
                    this.sourcemapLocations
                  ),
              e.outro.length && r.advance(e.outro);
          }),
          {
            file: e.file ? e.file.split(/[/\\]/).pop() : void 0,
            sources: [e.source ? Se(e.file || "", e.source) : e.file || ""],
            sourcesContent: e.includeContent ? [this.original] : void 0,
            names: t,
            mappings: r.raw,
            x_google_ignoreList: this.ignoreList ? [0] : void 0,
          }
        );
      }
      generateMap(e) {
        return new (class {
          constructor(e) {
            (this.version = 3),
              (this.file = e.file),
              (this.sources = e.sources),
              (this.sourcesContent = e.sourcesContent),
              (this.names = e.names),
              (this.mappings = (function (e) {
                let t = new Int32Array(5),
                  r = 16384,
                  n = r - 36,
                  o = new Uint8Array(r),
                  i = o.subarray(0, n),
                  a = 0,
                  s = "";
                for (let l = 0; l < e.length; l++) {
                  let c = e[l];
                  if (
                    (l > 0 &&
                      (a === r && ((s += ve.decode(o)), (a = 0)),
                      (o[a++] = 59)),
                    0 !== c.length)
                  ) {
                    t[0] = 0;
                    for (let e = 0; e < c.length; e++) {
                      let r = c[e];
                      a > n &&
                        ((s += ve.decode(i)), o.copyWithin(0, n, a), (a -= n)),
                        e > 0 && (o[a++] = 44),
                        (a = we(o, a, t, r, 0)),
                        1 !== r.length &&
                          ((a = we(o, a, t, r, 1)),
                          (a = we(o, a, t, r, 2)),
                          (a = we(o, a, t, r, 3)),
                          4 !== r.length && (a = we(o, a, t, r, 4)));
                    }
                  }
                }
                return s + ve.decode(o.subarray(0, a));
              })(e.mappings)),
              typeof e.x_google_ignoreList < "u" &&
                (this.x_google_ignoreList = e.x_google_ignoreList);
          }
          toString() {
            return JSON.stringify(this);
          }
          toUrl() {
            return (
              "data:application/json;charset=utf-8;base64," +
              Ee(this.toString())
            );
          }
        })(this.generateDecodedMap(e));
      }
      _ensureindentStr() {
        void 0 === this.indentStr &&
          (this.indentStr = (function (e) {
            let t = e.split("\n"),
              r = t.filter((e) => /^\t+/.test(e)),
              n = t.filter((e) => /^ {2,}/.test(e));
            if (0 === r.length && 0 === n.length) return null;
            if (r.length >= n.length) return "\t";
            let o = n.reduce((e, t) => {
              let r = /^ +/.exec(t)[0].length;
              return Math.min(r, e);
            }, 1 / 0);
            return new Array(o + 1).join(" ");
          })(this.original));
      }
      _getRawIndentString() {
        return this._ensureindentStr(), this.indentStr;
      }
      getIndentString() {
        return (
          this._ensureindentStr(),
          null === this.indentStr ? "\t" : this.indentStr
        );
      }
      indent(e, t) {
        let r = /^[^\r\n]/gm;
        if (
          ((function (e) {
            return "[object Object]" === ze.call(e);
          })(e) && ((t = e), (e = void 0)),
          void 0 === e &&
            (this._ensureindentStr(), (e = this.indentStr || "\t")),
          "" === e)
        )
          return this;
        let n = {};
        (t = t || {}).exclude &&
          ("number" == typeof t.exclude[0] ? [t.exclude] : t.exclude).forEach(
            (e) => {
              for (let t = e[0]; t < e[1]; t += 1) n[t] = !0;
            }
          );
        let o = !1 !== t.indentStart,
          i = (t) => (o ? `${e}${t}` : ((o = !0), t));
        this.intro = this.intro.replace(r, i);
        let a = 0,
          s = this.firstChunk;
        for (; s; ) {
          let t = s.end;
          if (s.edited)
            n[a] ||
              ((s.content = s.content.replace(r, i)),
              s.content.length &&
                (o = "\n" === s.content[s.content.length - 1]));
          else
            for (a = s.start; a < t; ) {
              if (!n[a]) {
                let t = this.original[a];
                "\n" === t
                  ? (o = !0)
                  : "\r" !== t &&
                    o &&
                    ((o = !1),
                    a === s.start || (this._splitChunk(s, a), (s = s.next)),
                    s.prependRight(e));
              }
              a += 1;
            }
          (a = s.end), (s = s.next);
        }
        return (this.outro = this.outro.replace(r, i)), this;
      }
      insert() {
        throw new Error(
          "magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)"
        );
      }
      insertLeft(e, t) {
        return (
          Ce.insertLeft ||
            (console.warn(
              "magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead"
            ),
            (Ce.insertLeft = !0)),
          this.appendLeft(e, t)
        );
      }
      insertRight(e, t) {
        return (
          Ce.insertRight ||
            (console.warn(
              "magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead"
            ),
            (Ce.insertRight = !0)),
          this.prependRight(e, t)
        );
      }
      move(e, t, r) {
        if (r >= e && r <= t)
          throw new Error("Cannot move a selection inside itself");
        this._split(e), this._split(t), this._split(r);
        let n = this.byStart[e],
          o = this.byEnd[t],
          i = n.previous,
          a = o.next,
          s = this.byStart[r];
        if (!s && o === this.lastChunk) return this;
        let l = s ? s.previous : this.lastChunk;
        return (
          i && (i.next = a),
          a && (a.previous = i),
          l && (l.next = n),
          s && (s.previous = o),
          n.previous || (this.firstChunk = o.next),
          o.next ||
            ((this.lastChunk = n.previous), (this.lastChunk.next = null)),
          (n.previous = l),
          (o.next = s || null),
          l || (this.firstChunk = n),
          s || (this.lastChunk = o),
          this
        );
      }
      overwrite(e, t, r, n) {
        return (
          (n = n || {}),
          this.update(e, t, r, { ...n, overwrite: !n.contentOnly })
        );
      }
      update(e, t, r, n) {
        if ("string" != typeof r)
          throw new TypeError("replacement content must be a string");
        for (; e < 0; ) e += this.original.length;
        for (; t < 0; ) t += this.original.length;
        if (t > this.original.length) throw new Error("end is out of bounds");
        if (e === t)
          throw new Error(
            "Cannot overwrite a zero-length range – use appendLeft or prependRight instead"
          );
        this._split(e),
          this._split(t),
          !0 === n &&
            (Ce.storeName ||
              (console.warn(
                "The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string"
              ),
              (Ce.storeName = !0)),
            (n = { storeName: !0 }));
        let o = void 0 !== n && n.storeName,
          i = void 0 !== n && n.overwrite;
        if (o) {
          let r = this.original.slice(e, t);
          Object.defineProperty(this.storedNames, r, {
            writable: !0,
            value: !0,
            enumerable: !0,
          });
        }
        let a = this.byStart[e],
          s = this.byEnd[t];
        if (a) {
          let e = a;
          for (; e !== s; ) {
            if (e.next !== this.byStart[e.end])
              throw new Error("Cannot overwrite across a split point");
            (e = e.next), e.edit("", !1);
          }
          a.edit(r, o, !i);
        } else {
          let n = new ke(e, t, "").edit(r, o);
          (s.next = n), (n.previous = s);
        }
        return this;
      }
      prepend(e) {
        if ("string" != typeof e)
          throw new TypeError("outro content must be a string");
        return (this.intro = e + this.intro), this;
      }
      prependLeft(e, t) {
        if ("string" != typeof t)
          throw new TypeError("inserted content must be a string");
        this._split(e);
        let r = this.byEnd[e];
        return r ? r.prependLeft(t) : (this.intro = t + this.intro), this;
      }
      prependRight(e, t) {
        if ("string" != typeof t)
          throw new TypeError("inserted content must be a string");
        this._split(e);
        let r = this.byStart[e];
        return r ? r.prependRight(t) : (this.outro = t + this.outro), this;
      }
      remove(e, t) {
        for (; e < 0; ) e += this.original.length;
        for (; t < 0; ) t += this.original.length;
        if (e === t) return this;
        if (e < 0 || t > this.original.length)
          throw new Error("Character is out of bounds");
        if (e > t) throw new Error("end must be greater than start");
        this._split(e), this._split(t);
        let r = this.byStart[e];
        for (; r; )
          (r.intro = ""),
            (r.outro = ""),
            r.edit(""),
            (r = t > r.end ? this.byStart[r.end] : null);
        return this;
      }
      lastChar() {
        if (this.outro.length) return this.outro[this.outro.length - 1];
        let e = this.lastChunk;
        do {
          if (e.outro.length) return e.outro[e.outro.length - 1];
          if (e.content.length) return e.content[e.content.length - 1];
          if (e.intro.length) return e.intro[e.intro.length - 1];
        } while ((e = e.previous));
        return this.intro.length ? this.intro[this.intro.length - 1] : "";
      }
      lastLine() {
        let e = this.outro.lastIndexOf(_e);
        if (-1 !== e) return this.outro.substr(e + 1);
        let t = this.outro,
          r = this.lastChunk;
        do {
          if (r.outro.length > 0) {
            if (((e = r.outro.lastIndexOf(_e)), -1 !== e))
              return r.outro.substr(e + 1) + t;
            t = r.outro + t;
          }
          if (r.content.length > 0) {
            if (((e = r.content.lastIndexOf(_e)), -1 !== e))
              return r.content.substr(e + 1) + t;
            t = r.content + t;
          }
          if (r.intro.length > 0) {
            if (((e = r.intro.lastIndexOf(_e)), -1 !== e))
              return r.intro.substr(e + 1) + t;
            t = r.intro + t;
          }
        } while ((r = r.previous));
        return (
          (e = this.intro.lastIndexOf(_e)),
          -1 !== e ? this.intro.substr(e + 1) + t : this.intro + t
        );
      }
      slice(e = 0, t = this.original.length) {
        for (; e < 0; ) e += this.original.length;
        for (; t < 0; ) t += this.original.length;
        let r = "",
          n = this.firstChunk;
        for (; n && (n.start > e || n.end <= e); ) {
          if (n.start < t && n.end >= t) return r;
          n = n.next;
        }
        if (n && n.edited && n.start !== e)
          throw new Error(
            `Cannot use replaced character ${e} as slice start anchor.`
          );
        let o = n;
        for (; n; ) {
          n.intro && (o !== n || n.start === e) && (r += n.intro);
          let i = n.start < t && n.end >= t;
          if (i && n.edited && n.end !== t)
            throw new Error(
              `Cannot use replaced character ${t} as slice end anchor.`
            );
          let a = o === n ? e - n.start : 0,
            s = i ? n.content.length + t - n.end : n.content.length;
          if (
            ((r += n.content.slice(a, s)),
            n.outro && (!i || n.end === t) && (r += n.outro),
            i)
          )
            break;
          n = n.next;
        }
        return r;
      }
      snip(e, t) {
        let r = this.clone();
        return r.remove(0, e), r.remove(t, r.original.length), r;
      }
      _split(e) {
        if (this.byStart[e] || this.byEnd[e]) return;
        let t = this.lastSearchedChunk,
          r = e > t.end;
        for (; t; ) {
          if (t.contains(e)) return this._splitChunk(t, e);
          t = r ? this.byStart[t.end] : this.byEnd[t.start];
        }
      }
      _splitChunk(e, t) {
        if (e.edited && e.content.length) {
          let r = je(this.original)(t);
          throw new Error(
            `Cannot split a chunk that has already been edited (${r.line}:${r.column} – "${e.original}")`
          );
        }
        let r = e.split(t);
        return (
          (this.byEnd[t] = e),
          (this.byStart[t] = r),
          (this.byEnd[r.end] = r),
          e === this.lastChunk && (this.lastChunk = r),
          (this.lastSearchedChunk = e),
          !0
        );
      }
      toString() {
        let e = this.intro,
          t = this.firstChunk;
        for (; t; ) (e += t.toString()), (t = t.next);
        return e + this.outro;
      }
      isEmpty() {
        let e = this.firstChunk;
        do {
          if (
            (e.intro.length && e.intro.trim()) ||
            (e.content.length && e.content.trim()) ||
            (e.outro.length && e.outro.trim())
          )
            return !1;
        } while ((e = e.next));
        return !0;
      }
      length() {
        let e = this.firstChunk,
          t = 0;
        do {
          t += e.intro.length + e.content.length + e.outro.length;
        } while ((e = e.next));
        return t;
      }
      trimLines() {
        return this.trim("[\\r\\n]");
      }
      trim(e) {
        return this.trimStart(e).trimEnd(e);
      }
      trimEndAborted(e) {
        let t = new RegExp((e || "\\s") + "+$");
        if (((this.outro = this.outro.replace(t, "")), this.outro.length))
          return !0;
        let r = this.lastChunk;
        do {
          let e = r.end,
            n = r.trimEnd(t);
          if (
            (r.end !== e &&
              (this.lastChunk === r && (this.lastChunk = r.next),
              (this.byEnd[r.end] = r),
              (this.byStart[r.next.start] = r.next),
              (this.byEnd[r.next.end] = r.next)),
            n)
          )
            return !0;
          r = r.previous;
        } while (r);
        return !1;
      }
      trimEnd(e) {
        return this.trimEndAborted(e), this;
      }
      trimStartAborted(e) {
        let t = new RegExp("^" + (e || "\\s") + "+");
        if (((this.intro = this.intro.replace(t, "")), this.intro.length))
          return !0;
        let r = this.firstChunk;
        do {
          let e = r.end,
            n = r.trimStart(t);
          if (
            (r.end !== e &&
              (r === this.lastChunk && (this.lastChunk = r.next),
              (this.byEnd[r.end] = r),
              (this.byStart[r.next.start] = r.next),
              (this.byEnd[r.next.end] = r.next)),
            n)
          )
            return !0;
          r = r.next;
        } while (r);
        return !1;
      }
      trimStart(e) {
        return this.trimStartAborted(e), this;
      }
      hasChanged() {
        return this.original !== this.toString();
      }
      _replaceRegexp(e, t) {
        function r(e, r) {
          return "string" == typeof t
            ? t.replace(/\$(\$|&|\d+)/g, (t, r) =>
                "$" === r
                  ? "$"
                  : "&" === r
                  ? e[0]
                  : +r < e.length
                  ? e[+r]
                  : `$${r}`
              )
            : t(...e, e.index, r, e.groups);
        }
        if (e.global)
          (function (e, t) {
            let r,
              n = [];
            for (; (r = e.exec(t)); ) n.push(r);
            return n;
          })(e, this.original).forEach((e) => {
            null != e.index &&
              this.overwrite(
                e.index,
                e.index + e[0].length,
                r(e, this.original)
              );
          });
        else {
          let t = this.original.match(e);
          t &&
            null != t.index &&
            this.overwrite(t.index, t.index + t[0].length, r(t, this.original));
        }
        return this;
      }
      _replaceString(e, t) {
        let { original: r } = this,
          n = r.indexOf(e);
        return -1 !== n && this.overwrite(n, n + e.length, t), this;
      }
      replace(e, t) {
        return "string" == typeof e
          ? this._replaceString(e, t)
          : this._replaceRegexp(e, t);
      }
      _replaceAllString(e, t) {
        let { original: r } = this,
          n = e.length;
        for (let o = r.indexOf(e); -1 !== o; o = r.indexOf(e, o + n))
          this.overwrite(o, o + n, t);
        return this;
      }
      replaceAll(e, t) {
        if ("string" == typeof e) return this._replaceAllString(e, t);
        if (!e.global)
          throw new TypeError(
            "MagicString.prototype.replaceAll called with a non-global RegExp argument"
          );
        return this._replaceRegexp(e, t);
      }
    })(e);
    for (let e of n) {
      let n = e[1];
      if (!n) throw new Error("theme() expect exact one argument, but got 0");
      let [i, a] = n.split("/"),
        s = i
          .trim()
          .split(".")
          .reduce((e, t) => e?.[t], t);
      if ("string" == typeof s) {
        if (a) {
          let e = se(s);
          e && (s = ce(e, a));
        }
        o.overwrite(e.index, e.index + e[0].length, s);
      } else if (r) throw new Error(`theme of "${n}" did not found`);
    }
    return o.toString();
  }
  var Te = {};
  ((t, r) => {
    for (var n in r) e(t, n, { get: r[n], enumerable: !0 });
  })(Te, {
    auto: () => Be,
    bracket: () => Ve,
    bracketOfColor: () => Ze,
    bracketOfLength: () => Ge,
    bracketOfPosition: () => Je,
    cssvar: () => Ke,
    degree: () => et,
    fraction: () => qe,
    global: () => tt,
    number: () => Ye,
    numberWithUnit: () => We,
    percent: () => Xe,
    position: () => nt,
    properties: () => rt,
    px: () => Ie,
    rem: () => De,
    time: () => Qe,
  });
  var Ue =
      /^(-?\d*(?:\.\d+)?)(px|pt|pc|%|r?(?:em|ex|lh|cap|ch|ic)|(?:[sld]?v|cq)(?:[whib]|min|max)|in|cm|mm|rpx)?$/i,
    Oe = /^(-?\d*(?:\.\d+)?)$/i,
    Ne = /^(px)$/i,
    Pe = /^\[(color|length|position|quoted|string):/i,
    Fe = [
      "color",
      "border-color",
      "background-color",
      "flex-grow",
      "flex",
      "flex-shrink",
      "caret-color",
      "font",
      "gap",
      "opacity",
      "visibility",
      "z-index",
      "font-weight",
      "zoom",
      "text-shadow",
      "transform",
      "box-shadow",
      "background-position",
      "left",
      "right",
      "top",
      "bottom",
      "object-position",
      "max-height",
      "min-height",
      "max-width",
      "min-width",
      "height",
      "width",
      "border-width",
      "margin",
      "padding",
      "outline-width",
      "outline-offset",
      "font-size",
      "line-height",
      "text-indent",
      "vertical-align",
      "border-spacing",
      "letter-spacing",
      "word-spacing",
      "stroke",
      "filter",
      "backdrop-filter",
      "fill",
      "mask",
      "mask-size",
      "mask-border",
      "clip-path",
      "clip",
      "border-radius",
    ];
  function Me(e) {
    return e
      .toFixed(10)
      .replace(/\.0+$/, "")
      .replace(/(\.\d+?)0+$/, "$1");
  }
  function We(e) {
    let t = e.match(Ue);
    if (!t) return;
    let [, r, n] = t,
      o = Number.parseFloat(r);
    return n && !Number.isNaN(o) ? `${Me(o)}${n}` : void 0;
  }
  function Be(e) {
    if ("auto" === e || "a" === e) return "auto";
  }
  function De(e) {
    if (Ne.test(e)) return `1${e}`;
    let t = e.match(Ue);
    if (!t) return;
    let [, r, n] = t,
      o = Number.parseFloat(r);
    return Number.isNaN(o)
      ? void 0
      : 0 === o
      ? "0"
      : n
      ? `${Me(o)}${n}`
      : `${Me(o / 4)}rem`;
  }
  function Ie(e) {
    if (Ne.test(e)) return `1${e}`;
    let t = e.match(Ue);
    if (!t) return;
    let [, r, n] = t,
      o = Number.parseFloat(r);
    return Number.isNaN(o) ? void 0 : n ? `${Me(o)}${n}` : `${Me(o)}px`;
  }
  function Ye(e) {
    if (!Oe.test(e)) return;
    let t = Number.parseFloat(e);
    return Number.isNaN(t) ? void 0 : Me(t);
  }
  function Xe(e) {
    if ((e.endsWith("%") && (e = e.slice(0, -1)), !Oe.test(e))) return;
    let t = Number.parseFloat(e);
    return Number.isNaN(t) ? void 0 : `${Me(t / 100)}`;
  }
  function qe(e) {
    if ("full" === e) return "100%";
    let [t, r] = e.split("/"),
      n = Number.parseFloat(t) / Number.parseFloat(r);
    return Number.isNaN(n) ? void 0 : 0 === n ? "0" : `${Me(100 * n)}%`;
  }
  function He(e, t) {
    if (e && e.startsWith("[") && e.endsWith("]")) {
      let r,
        n,
        o = e.match(Pe);
      if (
        (o
          ? (t || (n = o[1]), (r = e.slice(o[0].length, -1)))
          : (r = e.slice(1, -1)),
        !r || '=""' === r)
      )
        return;
      r.startsWith("--") && (r = `var(${r})`);
      let i = 0;
      for (let e of r)
        if ("[" === e) i += 1;
        else if ("]" === e && ((i -= 1), i < 0)) return;
      if (i) return;
      switch (n) {
        case "string":
          return r.replace(/(^|[^\\])_/g, "$1 ").replace(/\\_/g, "_");
        case "quoted":
          return r
            .replace(/(^|[^\\])_/g, "$1 ")
            .replace(/\\_/g, "_")
            .replace(/(["\\])/g, "\\$1")
            .replace(/^(.+)$/, '"$1"');
      }
      return r
        .replace(/(url\(.*?\))/g, (e) => e.replace(/_/g, "\\_"))
        .replace(/(^|[^\\])_/g, "$1 ")
        .replace(/\\_/g, "_")
        .replace(/(?:calc|clamp|max|min)\((.*)/g, (e) => {
          let t = [];
          return e
            .replace(
              /var\((--.+?)[,)]/g,
              (e, r) => (t.push(r), e.replace(r, "--un-calc"))
            )
            .replace(
              /(-?\d*\.?\d(?!\b-\d.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,
              "$1 $2 "
            )
            .replace(/--un-calc/g, () => t.shift());
        });
    }
  }
  function Ve(e) {
    return He(e);
  }
  function Ze(e) {
    return He(e, "color");
  }
  function Ge(e) {
    return He(e, "length");
  }
  function Je(e) {
    return He(e, "position");
  }
  function Ke(e) {
    if (/^\$[^\s'"`;{}]/.test(e)) return `var(--${r(e.slice(1))})`;
  }
  function Qe(e) {
    let t = e.match(/^(-?[0-9.]+)(s|ms)?$/i);
    if (!t) return;
    let [, r, n] = t,
      o = Number.parseFloat(r);
    return Number.isNaN(o)
      ? void 0
      : 0 !== o || n
      ? n
        ? `${Me(o)}${n}`
        : `${Me(o)}ms`
      : "0s";
  }
  function et(e) {
    let t = e.match(/^(-?[0-9.]+)(deg|rad|grad|turn)?$/i);
    if (!t) return;
    let [, r, n] = t,
      o = Number.parseFloat(r);
    return Number.isNaN(o)
      ? void 0
      : 0 === o
      ? "0"
      : n
      ? `${Me(o)}${n}`
      : `${Me(o)}deg`;
  }
  function tt(e) {
    if (Q.includes(e)) return e;
  }
  function rt(e) {
    if (e.split(",").every((e) => Fe.includes(e))) return e;
  }
  function nt(e) {
    if (["top", "left", "right", "bottom", "center"].includes(e)) return e;
  }
  var ot = pe(Te),
    it = {
      mid: "middle",
      base: "baseline",
      btm: "bottom",
      baseline: "baseline",
      top: "top",
      start: "top",
      middle: "middle",
      bottom: "bottom",
      end: "bottom",
      "text-top": "text-top",
      "text-bottom": "text-bottom",
      sub: "sub",
      super: "super",
      ...Object.fromEntries(Q.map((e) => [e, e])),
    },
    at = [
      [
        /^(?:vertical|align|v)-([-\w]+%?)$/,
        ([, e]) => ({ "vertical-align": it[e] ?? ot.numberWithUnit(e) }),
        {
          autocomplete: [
            `(vertical|align|v)-(${Object.keys(it).join("|")})`,
            "(vertical|align|v)-<percentage>",
          ],
        },
      ],
    ],
    st = ["center", "left", "right", "justify", "start", "end"].map((e) => [
      `text-${e}`,
      { "text-align": e },
    ]);
  function lt(e) {
    return ([t, r, n], { theme: o }) => {
      let i =
        o.spacing?.[n || "DEFAULT"] ??
        ot.bracket.cssvar.global.auto.fraction.rem(n);
      if (null != i) return H[r].map((t) => [`${e}${t}`, i]);
    };
  }
  function ct(e, t, r = "colors") {
    let n = e[r],
      o = -1;
    for (let e of t) {
      if (((o += 1), n && "string" != typeof n)) {
        let r = t
          .slice(o)
          .join("-")
          .replace(/(-[a-z])/g, (e) => e.slice(1).toUpperCase());
        if (n[r]) return n[r];
        if (n[e]) {
          n = n[e];
          continue;
        }
      }
      return;
    }
    return n;
  }
  function ft(e, t, r) {
    return ct(e, t, r) || ct(e, t, "colors");
  }
  function ut(e, t) {
    let [r, n] = re(e, "[", "]", ["/", ":"]) ?? [];
    if (null != r) {
      let e = (r.match(Pe) ?? [])[1];
      if (null == e || e === t) return [r, n];
    }
  }
  function pt(e, t, r) {
    let n = ut(e, "color");
    if (!n) return;
    let [o, i] = n,
      a = o.replace(/([a-z])([0-9])/g, "$1-$2").split(/-/g),
      [s] = a;
    if (!s) return;
    let l,
      c = ot.bracketOfColor(o),
      f = c || o;
    if (ot.numberWithUnit(f)) return;
    if (
      (/^#[\da-fA-F]+/.test(f)
        ? (l = f)
        : /^hex-[\da-fA-F]+/.test(f)
        ? (l = `#${f.slice(4)}`)
        : o.startsWith("$") && (l = ot.cssvar(o)),
      (l = l || c),
      !l)
    ) {
      let e = ft(t, [o], r);
      "string" == typeof e && (l = e);
    }
    let u = "DEFAULT";
    if (!l) {
      let e,
        [n] = a.slice(-1);
      /^\d+$/.test(n)
        ? ((u = n),
          (e = ft(t, a.slice(0, -1), r)),
          (l = e && "string" != typeof e ? e[u] : void 0))
        : ((e = ft(t, a, r)),
          !e && a.length <= 2 && (([, u = u] = a), (e = ft(t, [s], r))),
          "string" == typeof e ? (l = e) : u && e && (l = e[u]));
    }
    return {
      opacity: i,
      name: s,
      no: u,
      color: l,
      cssColor: se(l),
      alpha: ot.bracket.cssvar.percent(i ?? ""),
    };
  }
  function dt(e, t, r, n) {
    return ([, o], { theme: i }) => {
      let a = pt(o, i, r);
      if (!a) return;
      let { alpha: s, color: l, cssColor: c } = a,
        f = {};
      return (
        c
          ? null != s
            ? (f[e] = ce(c, s))
            : ((f[`--un-${t}-opacity`] = le(c)),
              (f[e] = ce(c, `var(--un-${t}-opacity)`)))
          : l && (f[e] = ce(l, s)),
        !1 !== n?.(f) ? f : void 0
      );
    };
  }
  function mt(e, t) {
    let r = [];
    e = o(e);
    for (let n = 0; n < e.length; n++) {
      let o = ne(e[n], " ", 6);
      if (!o || o.length < 3 || se(o.at(0))) return e;
      let i = "";
      if (se(o.at(-1))) {
        let e = se(o.pop());
        e && (i = `, ${ce(e)}`);
      }
      r.push(`${o.join(" ")} var(${t}${i})`);
    }
    return r;
  }
  function ht(e, t, r) {
    return null != e && !!pt(e, t, r)?.color;
  }
  function gt({ theme: e, generator: t }, r = "breakpoints") {
    let n;
    return (
      t.userConfig && t.userConfig.theme && (n = t.userConfig.theme[r]),
      n || (n = e[r]),
      n
        ? Object.entries(n)
            .sort(
              (e, t) =>
                Number.parseInt(e[1].replace(/[a-z]+/gi, "")) -
                Number.parseInt(t[1].replace(/[a-z]+/gi, ""))
            )
            .map(([e, t]) => ({ point: e, size: t }))
        : void 0
    );
  }
  function bt(e, t) {
    return Q.map((r) => [`${e}-${r}`, { [t ?? e]: r }]);
  }
  function yt(e) {
    return null != e && ee.test(e);
  }
  var xt = [
    [
      /^outline-(?:width-|size-)?(.+)$/,
      vt,
      { autocomplete: "outline-(width|size)-<num>" },
    ],
    [
      /^outline-(?:color-)?(.+)$/,
      function (e, t) {
        return yt(ot.bracket(e[1]))
          ? vt(e, t)
          : dt("outline-color", "outline-color", "borderColor")(e, t);
      },
      { autocomplete: "outline-$colors" },
    ],
    [
      /^outline-offset-(.+)$/,
      ([, e], { theme: t }) => ({
        "outline-offset": t.lineWidth?.[e] ?? ot.bracket.cssvar.global.px(e),
      }),
      { autocomplete: "outline-(offset)-<num>" },
    ],
    ["outline", { "outline-style": "solid" }],
    ...[
      "auto",
      "dashed",
      "dotted",
      "double",
      "hidden",
      "solid",
      "groove",
      "ridge",
      "inset",
      "outset",
      ...Q,
    ].map((e) => [`outline-${e}`, { "outline-style": e }]),
    [
      "outline-none",
      { outline: "2px solid transparent", "outline-offset": "2px" },
    ],
  ];
  function vt([, e], { theme: t }) {
    return {
      "outline-width": t.lineWidth?.[e] ?? ot.bracket.cssvar.global.px(e),
    };
  }
  var wt = [
    ["appearance-none", { "-webkit-appearance": "none", appearance: "none" }],
  ];
  function $t(e) {
    return (
      ot.properties.auto.global(e) ??
      { contents: "contents", scroll: "scroll-position" }[e]
    );
  }
  var kt = [[/^will-change-(.+)/, ([, e]) => ({ "will-change": $t(e) })]],
    Et = [
      "solid",
      "dashed",
      "dotted",
      "double",
      "hidden",
      "none",
      "groove",
      "ridge",
      "inset",
      "outset",
      ...Q,
    ],
    St = [
      [
        /^(?:border|b)()(?:-(.+))?$/,
        zt,
        { autocomplete: "(border|b)-<directions>" },
      ],
      [/^(?:border|b)-([xy])(?:-(.+))?$/, zt],
      [/^(?:border|b)-([rltbse])(?:-(.+))?$/, zt],
      [/^(?:border|b)-(block|inline)(?:-(.+))?$/, zt],
      [/^(?:border|b)-([bi][se])(?:-(.+))?$/, zt],
      [
        /^(?:border|b)-()(?:width|size)-(.+)$/,
        zt,
        { autocomplete: ["(border|b)-<num>", "(border|b)-<directions>-<num>"] },
      ],
      [/^(?:border|b)-([xy])-(?:width|size)-(.+)$/, zt],
      [/^(?:border|b)-([rltbse])-(?:width|size)-(.+)$/, zt],
      [/^(?:border|b)-(block|inline)-(?:width|size)-(.+)$/, zt],
      [/^(?:border|b)-([bi][se])-(?:width|size)-(.+)$/, zt],
      [
        /^(?:border|b)-()(?:color-)?(.+)$/,
        jt,
        {
          autocomplete: [
            "(border|b)-$colors",
            "(border|b)-<directions>-$colors",
          ],
        },
      ],
      [/^(?:border|b)-([xy])-(?:color-)?(.+)$/, jt],
      [/^(?:border|b)-([rltbse])-(?:color-)?(.+)$/, jt],
      [/^(?:border|b)-(block|inline)-(?:color-)?(.+)$/, jt],
      [/^(?:border|b)-([bi][se])-(?:color-)?(.+)$/, jt],
      [
        /^(?:border|b)-()op(?:acity)?-?(.+)$/,
        At,
        { autocomplete: "(border|b)-(op|opacity)-<percent>" },
      ],
      [/^(?:border|b)-([xy])-op(?:acity)?-?(.+)$/, At],
      [/^(?:border|b)-([rltbse])-op(?:acity)?-?(.+)$/, At],
      [/^(?:border|b)-(block|inline)-op(?:acity)?-?(.+)$/, At],
      [/^(?:border|b)-([bi][se])-op(?:acity)?-?(.+)$/, At],
      [
        /^(?:border-|b-)?(?:rounded|rd)()(?:-(.+))?$/,
        _t,
        {
          autocomplete: [
            "(border|b)-(rounded|rd)",
            "(border|b)-(rounded|rd)-<num>",
            "(rounded|rd)",
            "(rounded|rd)-<num>",
          ],
        },
      ],
      [/^(?:border-|b-)?(?:rounded|rd)-([rltbse])(?:-(.+))?$/, _t],
      [/^(?:border-|b-)?(?:rounded|rd)-([rltb]{2})(?:-(.+))?$/, _t],
      [/^(?:border-|b-)?(?:rounded|rd)-([bise][se])(?:-(.+))?$/, _t],
      [/^(?:border-|b-)?(?:rounded|rd)-([bi][se]-[bi][se])(?:-(.+))?$/, _t],
      [
        /^(?:border|b)-(?:style-)?()(.+)$/,
        Ct,
        {
          autocomplete: [
            "(border|b)-style",
            `(border|b)-(${Et.join("|")})`,
            "(border|b)-<directions>-style",
            `(border|b)-<directions>-(${Et.join("|")})`,
            `(border|b)-<directions>-style-(${Et.join("|")})`,
            `(border|b)-style-(${Et.join("|")})`,
          ],
        },
      ],
      [/^(?:border|b)-([xy])-(?:style-)?(.+)$/, Ct],
      [/^(?:border|b)-([rltbse])-(?:style-)?(.+)$/, Ct],
      [/^(?:border|b)-(block|inline)-(?:style-)?(.+)$/, Ct],
      [/^(?:border|b)-([bi][se])-(?:style-)?(.+)$/, Ct],
    ];
  function zt([, e = "", t], { theme: r }) {
    let n =
      r.lineWidth?.[t || "DEFAULT"] ?? ot.bracket.cssvar.global.px(t || "1");
    if (e in H && null != n) return H[e].map((e) => [`border${e}-width`, n]);
  }
  function jt([, e = "", t], r) {
    if (e in H) {
      if (yt(ot.bracket(t))) return zt(["", e, t], r);
      if (ht(t, r.theme, "borderColor"))
        return Object.assign(
          {},
          ...H[e].map((e) =>
            (function (e) {
              return ([, t], r) => {
                let n = pt(t, r, "borderColor");
                if (!n) return;
                let { alpha: o, color: i, cssColor: a } = n;
                return a
                  ? null != o
                    ? { [`border${e}-color`]: ce(a, o) }
                    : "" === e
                    ? {
                        "--un-border-opacity": le(a),
                        "border-color": ce(a, "var(--un-border-opacity)"),
                      }
                    : {
                        "--un-border-opacity": le(a),
                        [`--un-border${e}-opacity`]: "var(--un-border-opacity)",
                        [`border${e}-color`]: ce(
                          a,
                          `var(--un-border${e}-opacity)`
                        ),
                      }
                  : i
                  ? { [`border${e}-color`]: ce(i, o) }
                  : void 0;
              };
            })(e)(["", t], r.theme)
          )
        );
    }
  }
  function At([, e = "", t]) {
    let r = ot.bracket.percent.cssvar(t);
    if (e in H && null != r)
      return H[e].map((e) => [`--un-border${e}-opacity`, r]);
  }
  function _t([, e = "", t], { theme: r }) {
    let n =
      r.borderRadius?.[t || "DEFAULT"] ||
      ot.bracket.cssvar.global.fraction.rem(t || "1");
    if (e in Z && null != n) return Z[e].map((e) => [`border${e}-radius`, n]);
  }
  function Ct([, e = "", t]) {
    if (Et.includes(t) && e in H)
      return H[e].map((e) => [`border${e}-style`, t]);
  }
  var Rt = [
      [
        /^op(?:acity)?-?(.+)$/,
        ([, e]) => ({ opacity: ot.bracket.percent.cssvar(e) }),
      ],
    ],
    Lt = /^\[url\(.+\)\]$/,
    Tt = /^\[length:.+\]$/,
    Ut = /^\[position:.+\]$/,
    Ot = [
      [
        /^bg-(.+)$/,
        (...e) => {
          let t = e[0][1];
          return Lt.test(t)
            ? { "--un-url": ot.bracket(t), "background-image": "var(--un-url)" }
            : Tt.test(t) && null != ot.bracketOfLength(t)
            ? {
                "background-size": ot
                  .bracketOfLength(t)
                  .split(" ")
                  .map((e) => ot.fraction.auto.px.cssvar(e) ?? e)
                  .join(" "),
              }
            : ((function (e) {
                return (
                  "[" === e[0] && "]" === e.slice(-1) && (e = e.slice(1, -1)),
                  ee.test(e) || Ue.test(e)
                );
              })(t) ||
                Ut.test(t)) &&
              null != ot.bracketOfPosition(t)
            ? {
                "background-position": ot
                  .bracketOfPosition(t)
                  .split(" ")
                  .map((e) => ot.position.fraction.auto.px.cssvar(e) ?? e)
                  .join(" "),
              }
            : dt("background-color", "bg", "backgroundColor")(...e);
        },
      ],
      [
        /^bg-op(?:acity)?-?(.+)$/,
        ([, e]) => ({ "--un-bg-opacity": ot.bracket.percent.cssvar(e) }),
        { autocomplete: "bg-(op|opacity)-<percent>" },
      ],
    ],
    Nt = [
      [
        /^@container(?:\/(\w+))?(?:-(normal))?$/,
        ([, e, t]) => (
          E(
            "The container query rule is experimental and may not follow semver."
          ),
          { "container-type": t ?? "inline-size", "container-name": e }
        ),
      ],
    ],
    Pt = ["solid", "double", "dotted", "dashed", "wavy", ...Q],
    Ft = [
      [
        /^(?:decoration-)?(underline|overline|line-through)$/,
        ([, e]) => ({ "text-decoration-line": e }),
        { autocomplete: "decoration-(underline|overline|line-through)" },
      ],
      [
        /^(?:underline|decoration)-(?:size-)?(.+)$/,
        Mt,
        { autocomplete: "(underline|decoration)-<num>" },
      ],
      [
        /^(?:underline|decoration)-(auto|from-font)$/,
        ([, e]) => ({ "text-decoration-thickness": e }),
        { autocomplete: "(underline|decoration)-(auto|from-font)" },
      ],
      [
        /^(?:underline|decoration)-(.+)$/,
        function (e, t) {
          if (yt(ot.bracket(e[1]))) return Mt(e, t);
          let r = dt("text-decoration-color", "line", "borderColor")(e, t);
          if (r)
            return {
              "-webkit-text-decoration-color": r["text-decoration-color"],
              ...r,
            };
        },
        { autocomplete: "(underline|decoration)-$colors" },
      ],
      [
        /^(?:underline|decoration)-op(?:acity)?-?(.+)$/,
        ([, e]) => ({ "--un-line-opacity": ot.bracket.percent.cssvar(e) }),
        { autocomplete: "(underline|decoration)-(op|opacity)-<percent>" },
      ],
      [
        /^(?:underline|decoration)-offset-(.+)$/,
        ([, e], { theme: t }) => ({
          "text-underline-offset":
            t.lineWidth?.[e] ?? ot.auto.bracket.cssvar.global.px(e),
        }),
        { autocomplete: "(underline|decoration)-(offset)-<num>" },
      ],
      ...Pt.map((e) => [`underline-${e}`, { "text-decoration-style": e }]),
      ...Pt.map((e) => [`decoration-${e}`, { "text-decoration-style": e }]),
      ["no-underline", { "text-decoration": "none" }],
      ["decoration-none", { "text-decoration": "none" }],
    ];
  function Mt([, e], { theme: t }) {
    return {
      "text-decoration-thickness":
        t.lineWidth?.[e] ?? ot.bracket.cssvar.global.px(e),
    };
  }
  var Wt = {
    all: "all",
    colors: [
      "color",
      "background-color",
      "border-color",
      "outline-color",
      "text-decoration-color",
      "fill",
      "stroke",
    ].join(","),
    none: "none",
    opacity: "opacity",
    shadow: "box-shadow",
    transform: "transform",
  };
  function Bt(e) {
    return ot.properties(e) ?? Wt[e];
  }
  var Dt = [
      [
        /^transition(?:-([a-z-]+(?:,[a-z-]+)*))?(?:-(\d+))?$/,
        ([, e, t], { theme: r }) => {
          let n =
            null != e
              ? Bt(e)
              : [
                  Wt.colors,
                  "opacity",
                  "box-shadow",
                  "transform",
                  "filter",
                  "backdrop-filter",
                ].join(",");
          if (n) {
            return {
              "transition-property": n,
              "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
              "transition-duration":
                r.duration?.[t || "DEFAULT"] ?? ot.time(t || "150"),
            };
          }
        },
        { autocomplete: `transition-(${Object.keys(Wt).join("|")})` },
      ],
      [
        /^(?:transition-)?duration-(.+)$/,
        ([, e], { theme: t }) => ({
          "transition-duration":
            t.duration?.[e || "DEFAULT"] ?? ot.bracket.cssvar.time(e),
        }),
        {
          autocomplete: ["transition-duration-$duration", "duration-$duration"],
        },
      ],
      [
        /^(?:transition-)?delay-(.+)$/,
        ([, e], { theme: t }) => ({
          "transition-delay":
            t.duration?.[e || "DEFAULT"] ?? ot.bracket.cssvar.time(e),
        }),
        { autocomplete: ["transition-delay-$duration", "delay-$duration"] },
      ],
      [
        /^(?:transition-)?ease(?:-(.+))?$/,
        ([, e], { theme: t }) => ({
          "transition-timing-function":
            t.easing?.[e || "DEFAULT"] ?? ot.bracket.cssvar(e),
        }),
        {
          autocomplete: [
            "transition-ease-(linear|in|out|in-out|DEFAULT)",
            "ease-(linear|in|out|in-out|DEFAULT)",
          ],
        },
      ],
      [
        /^(?:transition-)?property-(.+)$/,
        ([, e]) => ({ "transition-property": ot.bracket.global(e) || Bt(e) }),
        {
          autocomplete: [
            `transition-property-(${[...Q, ...Object.keys(Wt)].join("|")})`,
          ],
        },
      ],
      ["transition-none", { transition: "none" }],
      ...bt("transition"),
    ],
    It = [
      ["flex", { display: "flex" }],
      ["inline-flex", { display: "inline-flex" }],
      ["flex-inline", { display: "inline-flex" }],
      [
        /^flex-(.*)$/,
        ([, e]) => ({
          flex:
            null != ot.bracket(e)
              ? ot
                  .bracket(e)
                  .split(" ")
                  .map((e) => ot.cssvar.fraction(e) ?? e)
                  .join(" ")
              : ot.cssvar.fraction(e),
        }),
      ],
      ["flex-1", { flex: "1 1 0%" }],
      ["flex-auto", { flex: "1 1 auto" }],
      ["flex-initial", { flex: "0 1 auto" }],
      ["flex-none", { flex: "none" }],
      [
        /^(?:flex-)?shrink(?:-(.*))?$/,
        ([, e = ""]) => ({ "flex-shrink": ot.bracket.cssvar.number(e) ?? 1 }),
        { autocomplete: ["flex-shrink-<num>", "shrink-<num>"] },
      ],
      [
        /^(?:flex-)?grow(?:-(.*))?$/,
        ([, e = ""]) => ({ "flex-grow": ot.bracket.cssvar.number(e) ?? 1 }),
        { autocomplete: ["flex-grow-<num>", "grow-<num>"] },
      ],
      [
        /^(?:flex-)?basis-(.+)$/,
        ([, e], { theme: t }) => ({
          "flex-basis":
            t.spacing?.[e] ?? ot.bracket.cssvar.auto.fraction.rem(e),
        }),
        { autocomplete: ["flex-basis-$spacing", "basis-$spacing"] },
      ],
      ["flex-row", { "flex-direction": "row" }],
      ["flex-row-reverse", { "flex-direction": "row-reverse" }],
      ["flex-col", { "flex-direction": "column" }],
      ["flex-col-reverse", { "flex-direction": "column-reverse" }],
      ["flex-wrap", { "flex-wrap": "wrap" }],
      ["flex-wrap-reverse", { "flex-wrap": "wrap-reverse" }],
      ["flex-nowrap", { "flex-wrap": "nowrap" }],
    ],
    Yt = [
      [
        /^text-(.+)$/,
        function ([, e = "base"], { theme: t }) {
          let r = ut(e, "length");
          if (!r) return;
          let [n, i] = r,
            a = o(t.fontSize?.[n]),
            s = i ? Zt(i, t, "lineHeight") : void 0;
          if (a?.[0]) {
            let [e, r, n] = a;
            return "object" == typeof r
              ? { "font-size": e, ...r }
              : {
                  "font-size": e,
                  "line-height": s ?? r ?? "1",
                  "letter-spacing": n ? Zt(n, t, "letterSpacing") : void 0,
                };
          }
          let l = ot.bracketOfLength.rem(n);
          return s && l
            ? { "font-size": l, "line-height": s }
            : { "font-size": ot.bracketOfLength.rem(e) };
        },
        { autocomplete: "text-$fontSize" },
      ],
      [
        /^(?:text|font)-size-(.+)$/,
        Gt,
        { autocomplete: "text-size-$fontSize" },
      ],
      [
        /^text-(?:color-)?(.+)$/,
        function (e, t) {
          return yt(ot.bracket(e[1]))
            ? Gt(e, t)
            : dt("color", "text", "textColor")(e, t);
        },
        { autocomplete: "text-$colors" },
      ],
      [
        /^(?:color|c)-(.+)$/,
        dt("color", "text", "textColor"),
        { autocomplete: "(color|c)-$colors" },
      ],
      [
        /^(?:text|color|c)-(.+)$/,
        ([, e]) => (Q.includes(e) ? { color: e } : void 0),
        { autocomplete: `(text|color|c)-(${Q.join("|")})` },
      ],
      [
        /^(?:text|color|c)-op(?:acity)?-?(.+)$/,
        ([, e]) => ({ "--un-text-opacity": ot.bracket.percent.cssvar(e) }),
        { autocomplete: "(text|color|c)-(op|opacity)-<percent>" },
      ],
      [
        /^(?:font|fw)-?([^-]+)$/,
        ([, e], { theme: t }) => ({
          "font-weight": t.fontWeight?.[e] || ot.bracket.global.number(e),
        }),
        {
          autocomplete: [
            "(font|fw)-(100|200|300|400|500|600|700|800|900)",
            "(font|fw)-$fontWeight",
          ],
        },
      ],
      [
        /^(?:font-)?(?:leading|lh|line-height)-(.+)$/,
        ([, e], { theme: t }) => ({ "line-height": Zt(e, t, "lineHeight") }),
        { autocomplete: "(leading|lh|line-height)-$lineHeight" },
      ],
      ["font-synthesis-weight", { "font-synthesis": "weight" }],
      ["font-synthesis-style", { "font-synthesis": "style" }],
      ["font-synthesis-small-caps", { "font-synthesis": "small-caps" }],
      ["font-synthesis-none", { "font-synthesis": "none" }],
      [
        /^font-synthesis-(.+)$/,
        ([, e]) => ({ "font-synthesis": ot.bracket.cssvar.global(e) }),
      ],
      [
        /^(?:font-)?tracking-(.+)$/,
        ([, e], { theme: t }) => ({
          "letter-spacing":
            t.letterSpacing?.[e] || ot.bracket.cssvar.global.rem(e),
        }),
        { autocomplete: "tracking-$letterSpacing" },
      ],
      [
        /^(?:font-)?word-spacing-(.+)$/,
        ([, e], { theme: t }) => ({
          "word-spacing": t.wordSpacing?.[e] || ot.bracket.cssvar.global.rem(e),
        }),
        { autocomplete: "word-spacing-$wordSpacing" },
      ],
      [
        /^font-(.+)$/,
        ([, e], { theme: t }) => ({
          "font-family": t.fontFamily?.[e] || ot.bracket.cssvar.global(e),
        }),
        { autocomplete: "font-$fontFamily" },
      ],
    ],
    Xt = [
      [
        /^tab(?:-(.+))?$/,
        ([, e]) => {
          let t = ot.bracket.cssvar.global.number(e || "4");
          if (null != t)
            return { "-moz-tab-size": t, "-o-tab-size": t, "tab-size": t };
        },
      ],
    ],
    qt = [
      [
        /^indent(?:-(.+))?$/,
        ([, e], { theme: t }) => ({
          "text-indent":
            t.textIndent?.[e || "DEFAULT"] ||
            ot.bracket.cssvar.global.fraction.rem(e),
        }),
        { autocomplete: "indent-$textIndent" },
      ],
    ],
    Ht = [
      [
        /^text-stroke(?:-(.+))?$/,
        ([, e], { theme: t }) => ({
          "-webkit-text-stroke-width":
            t.textStrokeWidth?.[e || "DEFAULT"] || ot.bracket.cssvar.px(e),
        }),
        { autocomplete: "text-stroke-$textStrokeWidth" },
      ],
      [
        /^text-stroke-(.+)$/,
        dt("-webkit-text-stroke-color", "text-stroke", "borderColor"),
        { autocomplete: "text-stroke-$colors" },
      ],
      [
        /^text-stroke-op(?:acity)?-?(.+)$/,
        ([, e]) => ({
          "--un-text-stroke-opacity": ot.bracket.percent.cssvar(e),
        }),
        { autocomplete: "text-stroke-(op|opacity)-<percent>" },
      ],
    ],
    Vt = [
      [
        /^text-shadow(?:-(.+))?$/,
        ([, e], { theme: t }) => {
          let r = t.textShadow?.[e || "DEFAULT"];
          return null != r
            ? {
                "--un-text-shadow": mt(r, "--un-text-shadow-color").join(","),
                "text-shadow": "var(--un-text-shadow)",
              }
            : { "text-shadow": ot.bracket.cssvar.global(e) };
        },
        { autocomplete: "text-shadow-$textShadow" },
      ],
      [
        /^text-shadow-color-(.+)$/,
        dt("--un-text-shadow-color", "text-shadow", "shadowColor"),
        { autocomplete: "text-shadow-color-$colors" },
      ],
      [
        /^text-shadow-color-op(?:acity)?-?(.+)$/,
        ([, e]) => ({
          "--un-text-shadow-opacity": ot.bracket.percent.cssvar(e),
        }),
        { autocomplete: "text-shadow-color-(op|opacity)-<percent>" },
      ],
    ];
  function Zt(e, t, r) {
    return t[r]?.[e] || ot.bracket.cssvar.global.rem(e);
  }
  function Gt([, e], { theme: t }) {
    let r = o(t.fontSize?.[e])?.[0] ?? ot.bracket.cssvar.global.rem(e);
    if (null != r) return { "font-size": r };
  }
  var Jt = { "": "", x: "column-", y: "row-" };
  function Kt([, e = "", t], { theme: r }) {
    let n = r.spacing?.[t] ?? ot.bracket.cssvar.global.rem(t);
    if (null != n) return { [`${Jt[e]}gap`]: n };
  }
  var Qt = [
    [
      /^(?:flex-|grid-)?gap-?()(.+)$/,
      Kt,
      { autocomplete: ["gap-$spacing", "gap-<num>"] },
    ],
    [
      /^(?:flex-|grid-)?gap-([xy])-?(.+)$/,
      Kt,
      { autocomplete: ["gap-(x|y)-$spacing", "gap-(x|y)-<num>"] },
    ],
  ];
  function er(e) {
    return e.replace("col", "column");
  }
  function tr(e) {
    return "r" === e[0] ? "Row" : "Column";
  }
  function rr(e, t, r) {
    let n = t[`gridAuto${tr(e)}`]?.[r];
    if (null != n) return n;
    switch (r) {
      case "min":
        return "min-content";
      case "max":
        return "max-content";
      case "fr":
        return "minmax(0,1fr)";
    }
    return ot.bracket.cssvar.auto.rem(r);
  }
  var nr = [
      ["grid", { display: "grid" }],
      ["inline-grid", { display: "inline-grid" }],
      [
        /^(?:grid-)?(row|col)-(.+)$/,
        ([, e, t], { theme: r }) => ({
          [`grid-${er(e)}`]:
            r[`grid${tr(e)}`]?.[t] ?? ot.bracket.cssvar.auto(t),
        }),
      ],
      [
        /^(?:grid-)?(row|col)-span-(.+)$/,
        ([, e, t]) => {
          if ("full" === t) return { [`grid-${er(e)}`]: "1/-1" };
          let r = ot.bracket.number(t);
          return null != r
            ? { [`grid-${er(e)}`]: `span ${r}/span ${r}` }
            : void 0;
        },
        { autocomplete: ["grid-(row|col)-span-<num>", "(row|col)-span-<num>"] },
      ],
      [
        /^(?:grid-)?(row|col)-start-(.+)$/,
        ([, e, t]) => ({ [`grid-${er(e)}-start`]: ot.bracket.cssvar(t) ?? t }),
      ],
      [
        /^(?:grid-)?(row|col)-end-(.+)$/,
        ([, e, t]) => ({ [`grid-${er(e)}-end`]: ot.bracket.cssvar(t) ?? t }),
        { autocomplete: ["grid-(row|col)-(start|end)-<num>"] },
      ],
      [
        /^(?:grid-)?auto-(rows|cols)-(.+)$/,
        ([, e, t], { theme: r }) => ({ [`grid-auto-${er(e)}`]: rr(e, r, t) }),
        { autocomplete: ["grid-auto-(rows|cols)-<num>"] },
      ],
      [
        /^(?:grid-auto-flow|auto-flow|grid-flow)-(.+)$/,
        ([, e]) => ({ "grid-auto-flow": ot.bracket.cssvar(e) }),
      ],
      [
        /^(?:grid-auto-flow|auto-flow|grid-flow)-(row|col|dense|row-dense|col-dense)$/,
        ([, e]) => ({ "grid-auto-flow": er(e).replace("-", " ") }),
        {
          autocomplete: [
            "(grid-auto-flow|auto-flow|grid-flow)-(row|col|dense|row-dense|col-dense)",
          ],
        },
      ],
      [
        /^grid-(rows|cols)-(.+)$/,
        ([, e, t], { theme: r }) => ({
          [`grid-template-${er(e)}`]:
            r[`gridTemplate${tr(e)}`]?.[t] ?? ot.bracket.cssvar(t),
        }),
      ],
      [
        /^grid-(rows|cols)-minmax-([\w.-]+)$/,
        ([, e, t]) => ({
          [`grid-template-${er(e)}`]: `repeat(auto-fill,minmax(${t},1fr))`,
        }),
      ],
      [
        /^grid-(rows|cols)-(\d+)$/,
        ([, e, t]) => ({
          [`grid-template-${er(e)}`]: `repeat(${t},minmax(0,1fr))`,
        }),
        { autocomplete: ["grid-(rows|cols)-<num>", "grid-(rows|cols)-none"] },
      ],
      [
        /^grid-area(s)?-(.+)$/,
        ([, e, t]) =>
          null != e
            ? {
                "grid-template-areas":
                  ot.cssvar(t) ??
                  t
                    .split("-")
                    .map((e) => `"${ot.bracket(e)}"`)
                    .join(" "),
              }
            : { "grid-area": ot.bracket.cssvar(t) },
      ],
      ["grid-rows-none", { "grid-template-rows": "none" }],
      ["grid-cols-none", { "grid-template-columns": "none" }],
      ["grid-rows-subgrid", { "grid-template-rows": "subgrid" }],
      ["grid-cols-subgrid", { "grid-template-columns": "subgrid" }],
    ],
    or = ["auto", "hidden", "clip", "visible", "scroll", "overlay", ...Q],
    ir = [
      [
        /^(?:overflow|of)-(.+)$/,
        ([, e]) => (or.includes(e) ? { overflow: e } : void 0),
        {
          autocomplete: [
            `(overflow|of)-(${or.join("|")})`,
            `(overflow|of)-(x|y)-(${or.join("|")})`,
          ],
        },
      ],
      [
        /^(?:overflow|of)-([xy])-(.+)$/,
        ([, e, t]) => (or.includes(t) ? { [`overflow-${e}`]: t } : void 0),
      ],
    ],
    ar = [
      [
        /^(?:position-|pos-)?(relative|absolute|fixed|sticky)$/,
        ([, e]) => ({ position: e }),
        {
          autocomplete: [
            "(position|pos)-<position>",
            "(position|pos)-<globalKeyword>",
            "<position>",
          ],
        },
      ],
      [
        /^(?:position-|pos-)([-\w]+)$/,
        ([, e]) => (Q.includes(e) ? { position: e } : void 0),
      ],
      [/^(?:position-|pos-)?(static)$/, ([, e]) => ({ position: e })],
    ],
    sr = [
      ["justify-start", { "justify-content": "flex-start" }],
      ["justify-end", { "justify-content": "flex-end" }],
      ["justify-center", { "justify-content": "center" }],
      ["justify-between", { "justify-content": "space-between" }],
      ["justify-around", { "justify-content": "space-around" }],
      ["justify-evenly", { "justify-content": "space-evenly" }],
      ["justify-stretch", { "justify-content": "stretch" }],
      ["justify-left", { "justify-content": "left" }],
      ["justify-right", { "justify-content": "right" }],
      ...bt("justify", "justify-content"),
      ["justify-items-start", { "justify-items": "start" }],
      ["justify-items-end", { "justify-items": "end" }],
      ["justify-items-center", { "justify-items": "center" }],
      ["justify-items-stretch", { "justify-items": "stretch" }],
      ...bt("justify-items"),
      ["justify-self-auto", { "justify-self": "auto" }],
      ["justify-self-start", { "justify-self": "start" }],
      ["justify-self-end", { "justify-self": "end" }],
      ["justify-self-center", { "justify-self": "center" }],
      ["justify-self-stretch", { "justify-self": "stretch" }],
      ...bt("justify-self"),
    ],
    lr = [
      [/^order-(.+)$/, ([, e]) => ({ order: ot.bracket.cssvar.number(e) })],
      ["order-first", { order: "-9999" }],
      ["order-last", { order: "9999" }],
      ["order-none", { order: "0" }],
    ],
    cr = [
      ["content-center", { "align-content": "center" }],
      ["content-start", { "align-content": "flex-start" }],
      ["content-end", { "align-content": "flex-end" }],
      ["content-between", { "align-content": "space-between" }],
      ["content-around", { "align-content": "space-around" }],
      ["content-evenly", { "align-content": "space-evenly" }],
      ...bt("content", "align-content"),
      ["items-start", { "align-items": "flex-start" }],
      ["items-end", { "align-items": "flex-end" }],
      ["items-center", { "align-items": "center" }],
      ["items-baseline", { "align-items": "baseline" }],
      ["items-stretch", { "align-items": "stretch" }],
      ...bt("items", "align-items"),
      ["self-auto", { "align-self": "auto" }],
      ["self-start", { "align-self": "flex-start" }],
      ["self-end", { "align-self": "flex-end" }],
      ["self-center", { "align-self": "center" }],
      ["self-stretch", { "align-self": "stretch" }],
      ["self-baseline", { "align-self": "baseline" }],
      ...bt("self", "align-self"),
    ],
    fr = [
      ["place-content-center", { "place-content": "center" }],
      ["place-content-start", { "place-content": "start" }],
      ["place-content-end", { "place-content": "end" }],
      ["place-content-between", { "place-content": "space-between" }],
      ["place-content-around", { "place-content": "space-around" }],
      ["place-content-evenly", { "place-content": "space-evenly" }],
      ["place-content-stretch", { "place-content": "stretch" }],
      ...bt("place-content"),
      ["place-items-start", { "place-items": "start" }],
      ["place-items-end", { "place-items": "end" }],
      ["place-items-center", { "place-items": "center" }],
      ["place-items-stretch", { "place-items": "stretch" }],
      ...bt("place-items"),
      ["place-self-auto", { "place-self": "auto" }],
      ["place-self-start", { "place-self": "start" }],
      ["place-self-end", { "place-self": "end" }],
      ["place-self-center", { "place-self": "center" }],
      ["place-self-stretch", { "place-self": "stretch" }],
      ...bt("place-self"),
    ],
    ur = [...sr, ...cr].flatMap(([e, t]) => [
      [`flex-${e}`, t],
      [`grid-${e}`, t],
    ]);
  function pr(e, { theme: t }) {
    return t.spacing?.[e] ?? ot.bracket.cssvar.global.auto.fraction.rem(e);
  }
  function dr([, e, t], r) {
    let n = pr(t, r);
    if (null != n && e in V) return V[e].map((e) => [e.slice(1), n]);
  }
  var mr = [
      [
        /^(?:position-|pos-)?inset-(.+)$/,
        ([, e], t) => ({ inset: pr(e, t) }),
        {
          autocomplete: [
            "(position|pos)-inset-<directions>-$spacing",
            "(position|pos)-inset-(block|inline)-$spacing",
            "(position|pos)-inset-(bs|be|is|ie)-$spacing",
            "(position|pos)-(top|left|right|bottom)-$spacing",
          ],
        },
      ],
      [/^(?:position-|pos-)?(start|end)-(.+)$/, dr],
      [/^(?:position-|pos-)?inset-([xy])-(.+)$/, dr],
      [/^(?:position-|pos-)?inset-([rltbse])-(.+)$/, dr],
      [/^(?:position-|pos-)?inset-(block|inline)-(.+)$/, dr],
      [/^(?:position-|pos-)?inset-([bi][se])-(.+)$/, dr],
      [
        /^(?:position-|pos-)?(top|left|right|bottom)-(.+)$/,
        ([, e, t], r) => ({ [e]: pr(t, r) }),
      ],
    ],
    hr = [
      ["float-left", { float: "left" }],
      ["float-right", { float: "right" }],
      ["float-none", { float: "none" }],
      ...bt("float"),
      ["clear-left", { clear: "left" }],
      ["clear-right", { clear: "right" }],
      ["clear-both", { clear: "both" }],
      ["clear-none", { clear: "none" }],
      ...bt("clear"),
    ],
    gr = [
      [
        /^(?:position-|pos-)?z([\d.]+)$/,
        ([, e]) => ({ "z-index": ot.number(e) }),
      ],
      [
        /^(?:position-|pos-)?z-(.+)$/,
        ([, e], { theme: t }) => ({
          "z-index": t.zIndex?.[e] ?? ot.bracket.cssvar.global.auto.number(e),
        }),
        { autocomplete: "z-<num>" },
      ],
    ],
    br = [
      ["box-border", { "box-sizing": "border-box" }],
      ["box-content", { "box-sizing": "content-box" }],
      ...bt("box", "box-sizing"),
    ],
    yr = [
      "none",
      "strict",
      "content",
      "size",
      "inline-size",
      "layout",
      "style",
      "paint",
    ],
    xr = " ",
    vr = [
      ["inline", { display: "inline" }],
      ["block", { display: "block" }],
      ["inline-block", { display: "inline-block" }],
      ["contents", { display: "contents" }],
      ["flow-root", { display: "flow-root" }],
      ["list-item", { display: "list-item" }],
      ["hidden", { display: "none" }],
      [/^display-(.+)$/, ([, e]) => ({ display: ot.bracket.cssvar.global(e) })],
    ],
    wr = [
      ["visible", { visibility: "visible" }],
      ["invisible", { visibility: "hidden" }],
      ["backface-visible", { "backface-visibility": "visible" }],
      ["backface-hidden", { "backface-visibility": "hidden" }],
      ...bt("backface", "backface-visibility"),
    ],
    $r = [
      [/^cursor-(.+)$/, ([, e]) => ({ cursor: ot.bracket.cssvar.global(e) })],
      ...[
        "auto",
        "default",
        "none",
        "context-menu",
        "help",
        "pointer",
        "progress",
        "wait",
        "cell",
        "crosshair",
        "text",
        "vertical-text",
        "alias",
        "copy",
        "move",
        "no-drop",
        "not-allowed",
        "grab",
        "grabbing",
        "all-scroll",
        "col-resize",
        "row-resize",
        "n-resize",
        "e-resize",
        "s-resize",
        "w-resize",
        "ne-resize",
        "nw-resize",
        "se-resize",
        "sw-resize",
        "ew-resize",
        "ns-resize",
        "nesw-resize",
        "nwse-resize",
        "zoom-in",
        "zoom-out",
      ].map((e) => [`cursor-${e}`, { cursor: e }]),
    ],
    kr = [
      [
        /^contain-(.*)$/,
        ([, e]) =>
          null != ot.bracket(e)
            ? {
                contain: ot
                  .bracket(e)
                  .split(" ")
                  .map((e) => ot.cssvar.fraction(e) ?? e)
                  .join(" "),
              }
            : yr.includes(e)
            ? { contain: e }
            : void 0,
      ],
    ],
    Er = [
      ["pointer-events-auto", { "pointer-events": "auto" }],
      ["pointer-events-none", { "pointer-events": "none" }],
      ...bt("pointer-events"),
    ],
    Sr = [
      ["resize-x", { resize: "horizontal" }],
      ["resize-y", { resize: "vertical" }],
      ["resize", { resize: "both" }],
      ["resize-none", { resize: "none" }],
      ...bt("resize"),
    ],
    zr = [
      ["select-auto", { "-webkit-user-select": "auto", "user-select": "auto" }],
      ["select-all", { "-webkit-user-select": "all", "user-select": "all" }],
      ["select-text", { "-webkit-user-select": "text", "user-select": "text" }],
      ["select-none", { "-webkit-user-select": "none", "user-select": "none" }],
      ...bt("select", "user-select"),
    ],
    jr = [
      [
        /^(?:whitespace-|ws-)([-\w]+)$/,
        ([, e]) =>
          [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces",
            ...Q,
          ].includes(e)
            ? { "white-space": e }
            : void 0,
        {
          autocomplete:
            "(whitespace|ws)-(normal|nowrap|pre|pre-line|pre-wrap|break-spaces)",
        },
      ],
    ],
    Ar = [
      [
        /^intrinsic-size-(.+)$/,
        ([, e]) => ({
          "contain-intrinsic-size": ot.bracket.cssvar.global.fraction.rem(e),
        }),
        { autocomplete: "intrinsic-size-<num>" },
      ],
      ["content-visibility-visible", { "content-visibility": "visible" }],
      ["content-visibility-hidden", { "content-visibility": "hidden" }],
      ["content-visibility-auto", { "content-visibility": "auto" }],
      ...bt("content-visibility"),
    ],
    _r = [
      [/^content-(.+)$/, ([, e]) => ({ content: ot.bracket.cssvar(e) })],
      ["content-empty", { content: '""' }],
      ["content-none", { content: "none" }],
    ],
    Cr = [
      ["break-normal", { "overflow-wrap": "normal", "word-break": "normal" }],
      ["break-words", { "overflow-wrap": "break-word" }],
      ["break-all", { "word-break": "break-all" }],
      ["break-keep", { "word-break": "keep-all" }],
      ["break-anywhere", { "overflow-wrap": "anywhere" }],
    ],
    Rr = [
      ["text-wrap", { "text-wrap": "wrap" }],
      ["text-nowrap", { "text-wrap": "nowrap" }],
      ["text-balance", { "text-wrap": "balance" }],
      ["text-pretty", { "text-wrap": "pretty" }],
    ],
    Lr = [
      [
        "truncate",
        {
          overflow: "hidden",
          "text-overflow": "ellipsis",
          "white-space": "nowrap",
        },
      ],
      [
        "text-truncate",
        {
          overflow: "hidden",
          "text-overflow": "ellipsis",
          "white-space": "nowrap",
        },
      ],
      ["text-ellipsis", { "text-overflow": "ellipsis" }],
      ["text-clip", { "text-overflow": "clip" }],
    ],
    Tr = [
      ["case-upper", { "text-transform": "uppercase" }],
      ["case-lower", { "text-transform": "lowercase" }],
      ["case-capital", { "text-transform": "capitalize" }],
      ["case-normal", { "text-transform": "none" }],
      ...bt("case", "text-transform"),
    ],
    Ur = [
      ["italic", { "font-style": "italic" }],
      ["not-italic", { "font-style": "normal" }],
      ["font-italic", { "font-style": "italic" }],
      ["font-not-italic", { "font-style": "normal" }],
      ["oblique", { "font-style": "oblique" }],
      ["not-oblique", { "font-style": "normal" }],
      ["font-oblique", { "font-style": "oblique" }],
      ["font-not-oblique", { "font-style": "normal" }],
    ],
    Or = [
      [
        "antialiased",
        {
          "-webkit-font-smoothing": "antialiased",
          "-moz-osx-font-smoothing": "grayscale",
        },
      ],
      [
        "subpixel-antialiased",
        { "-webkit-font-smoothing": "auto", "-moz-osx-font-smoothing": "auto" },
      ],
    ],
    Nr = {
      "--un-ring-inset": xr,
      "--un-ring-offset-width": "0px",
      "--un-ring-offset-color": "#fff",
      "--un-ring-width": "0px",
      "--un-ring-color": "rgb(147 197 253 / 0.5)",
      "--un-shadow": "0 0 rgb(0 0 0 / 0)",
    },
    Pr = [
      [
        /^ring(?:-(.+))?$/,
        ([, e], { theme: t }) => {
          let r = t.ringWidth?.[e || "DEFAULT"] ?? ot.px(e || "1");
          if (r)
            return {
              "--un-ring-width": r,
              "--un-ring-offset-shadow":
                "var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color)",
              "--un-ring-shadow":
                "var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color)",
              "box-shadow":
                "var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow)",
            };
        },
        { autocomplete: "ring-$ringWidth" },
      ],
      [
        /^ring-(?:width-|size-)(.+)$/,
        Fr,
        { autocomplete: "ring-(width|size)-$lineWidth" },
      ],
      ["ring-offset", { "--un-ring-offset-width": "1px" }],
      [
        /^ring-offset-(?:width-|size-)?(.+)$/,
        ([, e], { theme: t }) => ({
          "--un-ring-offset-width": t.lineWidth?.[e] ?? ot.bracket.cssvar.px(e),
        }),
        { autocomplete: "ring-offset-(width|size)-$lineWidth" },
      ],
      [
        /^ring-(.+)$/,
        function (e, t) {
          return yt(ot.bracket(e[1]))
            ? Fr(e, t)
            : dt("--un-ring-color", "ring", "borderColor")(e, t);
        },
        { autocomplete: "ring-$colors" },
      ],
      [
        /^ring-op(?:acity)?-?(.+)$/,
        ([, e]) => ({ "--un-ring-opacity": ot.bracket.percent.cssvar(e) }),
        { autocomplete: "ring-(op|opacity)-<percent>" },
      ],
      [
        /^ring-offset-(.+)$/,
        dt("--un-ring-offset-color", "ring-offset", "borderColor"),
        { autocomplete: "ring-offset-$colors" },
      ],
      [
        /^ring-offset-op(?:acity)?-?(.+)$/,
        ([, e]) => ({
          "--un-ring-offset-opacity": ot.bracket.percent.cssvar(e),
        }),
        { autocomplete: "ring-offset-(op|opacity)-<percent>" },
      ],
      ["ring-inset", { "--un-ring-inset": "inset" }],
    ];
  function Fr([, e], { theme: t }) {
    return { "--un-ring-width": t.ringWidth?.[e] ?? ot.bracket.cssvar.px(e) };
  }
  var Mr = {
      "--un-ring-offset-shadow": "0 0 rgb(0 0 0 / 0)",
      "--un-ring-shadow": "0 0 rgb(0 0 0 / 0)",
      "--un-shadow-inset": xr,
      "--un-shadow": "0 0 rgb(0 0 0 / 0)",
    },
    Wr = [
      [
        /^shadow(?:-(.+))?$/,
        (e, t) => {
          let [, r] = e,
            { theme: n } = t,
            o = n.boxShadow?.[r || "DEFAULT"],
            i = r ? ot.bracket.cssvar(r) : void 0;
          return (null == o && null == i) || ht(i, n, "shadowColor")
            ? dt("--un-shadow-color", "shadow", "shadowColor")(e, t)
            : {
                "--un-shadow": mt(o || i, "--un-shadow-color").join(","),
                "box-shadow":
                  "var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow)",
              };
        },
        { autocomplete: ["shadow-$colors", "shadow-$boxShadow"] },
      ],
      [
        /^shadow-op(?:acity)?-?(.+)$/,
        ([, e]) => ({ "--un-shadow-opacity": ot.bracket.percent.cssvar(e) }),
        { autocomplete: "shadow-(op|opacity)-<percent>" },
      ],
      ["shadow-inset", { "--un-shadow-inset": "inset" }],
    ],
    Br = {
      h: "height",
      w: "width",
      inline: "inline-size",
      block: "block-size",
    };
  function Dr(e, t) {
    return `${e || ""}${Br[t]}`;
  }
  function Ir(e, t, r, n) {
    let o = Dr(e, t).replace(/-(\w)/g, (e, t) => t.toUpperCase()),
      i = r[o]?.[n];
    if (null != i) return i;
    switch (n) {
      case "fit":
      case "max":
      case "min":
        return `${n}-content`;
    }
    return ot.bracket.cssvar.global.auto.fraction.rem(n);
  }
  var Yr = [
    [
      /^(?:size-)?(min-|max-)?([wh])-?(.+)$/,
      ([, e, t, r], { theme: n }) => ({ [Dr(e, t)]: Ir(e, t, n, r) }),
    ],
    [
      /^(?:size-)?(min-|max-)?(block|inline)-(.+)$/,
      ([, e, t, r], { theme: n }) => ({ [Dr(e, t)]: Ir(e, t, n, r) }),
      {
        autocomplete: [
          "(w|h)-$width|height|maxWidth|maxHeight|minWidth|minHeight|inlineSize|blockSize|maxInlineSize|maxBlockSize|minInlineSize|minBlockSize",
          "(block|inline)-$width|height|maxWidth|maxHeight|minWidth|minHeight|inlineSize|blockSize|maxInlineSize|maxBlockSize|minInlineSize|minBlockSize",
          "(max|min)-(w|h|block|inline)",
          "(max|min)-(w|h|block|inline)-$width|height|maxWidth|maxHeight|minWidth|minHeight|inlineSize|blockSize|maxInlineSize|maxBlockSize|minInlineSize|minBlockSize",
          "(w|h)-full",
          "(max|min)-(w|h)-full",
        ],
      },
    ],
    [
      /^(?:size-)?(min-|max-)?(h)-screen-(.+)$/,
      ([, e, t, r], n) => ({ [Dr(e, t)]: Xr(n, r, "verticalBreakpoints") }),
    ],
    [
      /^(?:size-)?(min-|max-)?(w)-screen-(.+)$/,
      ([, e, t, r], n) => ({ [Dr(e, t)]: Xr(n, r) }),
      {
        autocomplete: [
          "(w|h)-screen",
          "(min|max)-(w|h)-screen",
          "h-screen-$verticalBreakpoints",
          "(min|max)-h-screen-$verticalBreakpoints",
          "w-screen-$breakpoints",
          "(min|max)-w-screen-$breakpoints",
        ],
      },
    ],
  ];
  function Xr(e, t, r = "breakpoints") {
    let n = gt(e, r);
    if (n) return n.find((e) => e.point === t)?.size;
  }
  function qr(e) {
    if (/^\d+\/\d+$/.test(e)) return e;
    switch (e) {
      case "square":
        return "1/1";
      case "video":
        return "16/9";
    }
    return ot.bracket.cssvar.global.auto.number(e);
  }
  var Hr = [
      [
        /^(?:size-)?aspect-(?:ratio-)?(.+)$/,
        ([, e]) => ({ "aspect-ratio": qr(e) }),
        {
          autocomplete: [
            "aspect-(square|video|ratio)",
            "aspect-ratio-(square|video)",
          ],
        },
      ],
    ],
    Vr = [
      [
        /^pa?()-?(-?.+)$/,
        lt("padding"),
        { autocomplete: ["(m|p)<num>", "(m|p)-<num>"] },
      ],
      [/^p-?xy()()$/, lt("padding"), { autocomplete: "(m|p)-(xy)" }],
      [/^p-?([xy])(?:-?(-?.+))?$/, lt("padding")],
      [
        /^p-?([rltbse])(?:-?(-?.+))?$/,
        lt("padding"),
        { autocomplete: "(m|p)<directions>-<num>" },
      ],
      [
        /^p-(block|inline)(?:-(-?.+))?$/,
        lt("padding"),
        { autocomplete: "(m|p)-(block|inline)-<num>" },
      ],
      [
        /^p-?([bi][se])(?:-?(-?.+))?$/,
        lt("padding"),
        { autocomplete: "(m|p)-(bs|be|is|ie)-<num>" },
      ],
    ],
    Zr = [
      [/^ma?()-?(-?.+)$/, lt("margin")],
      [/^m-?xy()()$/, lt("margin")],
      [/^m-?([xy])(?:-?(-?.+))?$/, lt("margin")],
      [/^m-?([rltbse])(?:-?(-?.+))?$/, lt("margin")],
      [/^m-(block|inline)(?:-(-?.+))?$/, lt("margin")],
      [/^m-?([bi][se])(?:-?(-?.+))?$/, lt("margin")],
    ],
    Gr = ["translate", "rotate", "scale"],
    Jr = [
      "translateX(var(--un-translate-x))",
      "translateY(var(--un-translate-y))",
      "translateZ(var(--un-translate-z))",
      "rotate(var(--un-rotate))",
      "rotateX(var(--un-rotate-x))",
      "rotateY(var(--un-rotate-y))",
      "rotateZ(var(--un-rotate-z))",
      "skewX(var(--un-skew-x))",
      "skewY(var(--un-skew-y))",
      "scaleX(var(--un-scale-x))",
      "scaleY(var(--un-scale-y))",
      "scaleZ(var(--un-scale-z))",
    ].join(" "),
    Kr = [
      "translate3d(var(--un-translate-x), var(--un-translate-y), var(--un-translate-z))",
      "rotate(var(--un-rotate))",
      "rotateX(var(--un-rotate-x))",
      "rotateY(var(--un-rotate-y))",
      "rotateZ(var(--un-rotate-z))",
      "skewX(var(--un-skew-x))",
      "skewY(var(--un-skew-y))",
      "scaleX(var(--un-scale-x))",
      "scaleY(var(--un-scale-y))",
      "scaleZ(var(--un-scale-z))",
    ].join(" "),
    Qr = {
      "--un-rotate": 0,
      "--un-rotate-x": 0,
      "--un-rotate-y": 0,
      "--un-rotate-z": 0,
      "--un-scale-x": 1,
      "--un-scale-y": 1,
      "--un-scale-z": 1,
      "--un-skew-x": 0,
      "--un-skew-y": 0,
      "--un-translate-x": 0,
      "--un-translate-y": 0,
      "--un-translate-z": 0,
    },
    en = [
      [
        /^(?:transform-)?origin-(.+)$/,
        ([, e]) => ({ "transform-origin": K[e] ?? ot.bracket.cssvar(e) }),
        {
          autocomplete: [
            `transform-origin-(${Object.keys(K).join("|")})`,
            `origin-(${Object.keys(K).join("|")})`,
          ],
        },
      ],
      [
        /^(?:transform-)?perspect(?:ive)?-(.+)$/,
        ([, e]) => {
          let t = ot.bracket.cssvar.px.numberWithUnit(e);
          if (null != t) return { "-webkit-perspective": t, perspective: t };
        },
      ],
      [
        /^(?:transform-)?perspect(?:ive)?-origin-(.+)$/,
        ([, e]) => {
          let t = ot.bracket.cssvar(e) ?? (e.length >= 3 ? K[e] : void 0);
          if (null != t)
            return { "-webkit-perspective-origin": t, "perspective-origin": t };
        },
      ],
      [/^(?:transform-)?translate-()(.+)$/, tn],
      [/^(?:transform-)?translate-([xyz])-(.+)$/, tn],
      [/^(?:transform-)?rotate-()(.+)$/, nn],
      [/^(?:transform-)?rotate-([xyz])-(.+)$/, nn],
      [/^(?:transform-)?skew-()(.+)$/, on],
      [
        /^(?:transform-)?skew-([xy])-(.+)$/,
        on,
        {
          autocomplete: [
            "transform-skew-(x|y)-<percent>",
            "skew-(x|y)-<percent>",
          ],
        },
      ],
      [/^(?:transform-)?scale-()(.+)$/, rn],
      [
        /^(?:transform-)?scale-([xyz])-(.+)$/,
        rn,
        {
          autocomplete: [
            `transform-(${Gr.join("|")})-<percent>`,
            `transform-(${Gr.join("|")})-(x|y|z)-<percent>`,
            `(${Gr.join("|")})-<percent>`,
            `(${Gr.join("|")})-(x|y|z)-<percent>`,
          ],
        },
      ],
      [
        /^(?:transform-)?preserve-3d$/,
        () => ({ "transform-style": "preserve-3d" }),
      ],
      [/^(?:transform-)?preserve-flat$/, () => ({ "transform-style": "flat" })],
      ["transform", { transform: Jr }],
      ["transform-cpu", { transform: Jr }],
      ["transform-gpu", { transform: Kr }],
      ["transform-none", { transform: "none" }],
      ...bt("transform"),
    ];
  function tn([, e, t], { theme: r }) {
    let n = r.spacing?.[t] ?? ot.bracket.cssvar.fraction.rem(t);
    if (null != n)
      return [...G[e].map((e) => [`--un-translate${e}`, n]), ["transform", Jr]];
  }
  function rn([, e, t]) {
    let r = ot.bracket.cssvar.fraction.percent(t);
    if (null != r)
      return [...G[e].map((e) => [`--un-scale${e}`, r]), ["transform", Jr]];
  }
  function nn([, e = "", t]) {
    let r = ot.bracket.cssvar.degree(t);
    if (null != r)
      return e
        ? { "--un-rotate": 0, [`--un-rotate-${e}`]: r, transform: Jr }
        : {
            "--un-rotate-x": 0,
            "--un-rotate-y": 0,
            "--un-rotate-z": 0,
            "--un-rotate": r,
            transform: Jr,
          };
  }
  function on([, e, t]) {
    let r = ot.bracket.cssvar.degree(t);
    if (null != r)
      return [...G[e].map((e) => [`--un-skew${e}`, r]), ["transform", Jr]];
  }
  var an = {
      backface: "backface-visibility",
      break: "word-break",
      case: "text-transform",
      content: "align-content",
      fw: "font-weight",
      items: "align-items",
      justify: "justify-content",
      select: "user-select",
      self: "align-self",
      vertical: "vertical-align",
      visible: "visibility",
      whitespace: "white-space",
      ws: "white-space",
    },
    sn = [
      [
        /^(.+?)-(\$.+)$/,
        ([, e, t]) => {
          let r = an[e];
          if (r) return { [r]: ot.cssvar(t) };
        },
      ],
    ],
    ln = [
      [
        /^\[(.*)\]$/,
        ([e, t], { theme: r }) => {
          if (!t.includes(":")) return;
          let [n, ...o] = t.split(":"),
            i = o.join(":");
          if (
            !(function (e) {
              if (!e.includes("://")) return !1;
              try {
                return "" !== new URL(e).host;
              } catch {
                return !1;
              }
            })(t) &&
            /^[a-z-]+$/.test(n) &&
            (function (e) {
              let t = 0;
              function r(r) {
                for (; t < e.length; ) if (((t += 1), e[t] === r)) return !0;
                return !1;
              }
              for (t = 0; t < e.length; t++) {
                let n = e[t];
                if ("\"`'".includes(n)) {
                  if (!r(n)) return !1;
                } else if ("(" === n) {
                  if (!r(")")) return !1;
                } else if ("[]{}:".includes(n)) return !1;
              }
              return !0;
            })(i)
          ) {
            let e;
            if (
              ((function (e) {
                return e.includes("theme(") && e.includes(")");
              })(i) && (e = Le(i, r)),
              (!e || e === i) && (e = ot.bracket(`[${i}]`)),
              e)
            )
              return { [n]: e };
          }
        },
      ],
    ];
  var cn = [
      [
        /^(where|\?)$/,
        (e, { constructCSS: t, generator: r }) => {
          if ("dev" === r.userConfig.envMode)
            return `@keyframes __un_qm{0%{box-shadow:inset 4px 4px #ff1e90, inset -4px -4px #ff1e90}100%{box-shadow:inset 8px 8px #3399ff, inset -8px -8px #3399ff}}\n${t(
              { animation: "__un_qm 0.5s ease-in-out alternate infinite" }
            )}`;
        },
      ],
    ],
    fn = [
      [
        /^fill-(.+)$/,
        dt("fill", "fill", "backgroundColor"),
        { autocomplete: "fill-$colors" },
      ],
      [
        /^fill-op(?:acity)?-?(.+)$/,
        ([, e]) => ({ "--un-fill-opacity": ot.bracket.percent.cssvar(e) }),
        { autocomplete: "fill-(op|opacity)-<percent>" },
      ],
      ["fill-none", { fill: "none" }],
      [
        /^stroke-(?:width-|size-)?(.+)$/,
        un,
        { autocomplete: ["stroke-width-$lineWidth", "stroke-size-$lineWidth"] },
      ],
      [
        /^stroke-dash-(.+)$/,
        ([, e]) => ({ "stroke-dasharray": ot.bracket.cssvar.number(e) }),
        { autocomplete: "stroke-dash-<num>" },
      ],
      [
        /^stroke-offset-(.+)$/,
        ([, e], { theme: t }) => ({
          "stroke-dashoffset":
            t.lineWidth?.[e] ?? ot.bracket.cssvar.px.numberWithUnit(e),
        }),
        { autocomplete: "stroke-offset-$lineWidth" },
      ],
      [
        /^stroke-(.+)$/,
        function (e, t) {
          return yt(ot.bracket(e[1]))
            ? un(e, t)
            : dt("stroke", "stroke", "borderColor")(e, t);
        },
        { autocomplete: "stroke-$colors" },
      ],
      [
        /^stroke-op(?:acity)?-?(.+)$/,
        ([, e]) => ({ "--un-stroke-opacity": ot.bracket.percent.cssvar(e) }),
        { autocomplete: "stroke-(op|opacity)-<percent>" },
      ],
      ["stroke-cap-square", { "stroke-linecap": "square" }],
      ["stroke-cap-round", { "stroke-linecap": "round" }],
      ["stroke-cap-auto", { "stroke-linecap": "butt" }],
      ["stroke-join-arcs", { "stroke-linejoin": "arcs" }],
      ["stroke-join-bevel", { "stroke-linejoin": "bevel" }],
      ["stroke-join-clip", { "stroke-linejoin": "miter-clip" }],
      ["stroke-join-round", { "stroke-linejoin": "round" }],
      ["stroke-join-auto", { "stroke-linejoin": "miter" }],
      ["stroke-none", { stroke: "none" }],
    ];
  function un([, e], { theme: t }) {
    return {
      "stroke-width":
        t.lineWidth?.[e] ?? ot.bracket.cssvar.fraction.px.number(e),
    };
  }
  var pn = [
      sn,
      ln,
      Vr,
      Zr,
      vr,
      Rt,
      Ot,
      [[/^color-scheme-(\w+)$/, ([, e]) => ({ "color-scheme": e })]],
      fn,
      St,
      Ar,
      _r,
      Yt,
      Xt,
      qt,
      Lr,
      Ft,
      Ht,
      Vt,
      Tr,
      st,
      Ur,
      Or,
      Wr,
      Pr,
      It,
      nr,
      Qt,
      ar,
      Yr,
      Hr,
      $r,
      wr,
      Er,
      Sr,
      at,
      zr,
      jr,
      Cr,
      ir,
      xt,
      wt,
      lr,
      sr,
      cr,
      fr,
      ur,
      mr,
      hr,
      gr,
      br,
      Dt,
      en,
      kt,
      Nt,
      kr,
      Rr,
      cn,
    ].flat(1),
    dn = {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      rose: {
        50: "#fff1f2",
        100: "#ffe4e6",
        200: "#fecdd3",
        300: "#fda4af",
        400: "#fb7185",
        500: "#f43f5e",
        600: "#e11d48",
        700: "#be123c",
        800: "#9f1239",
        900: "#881337",
        950: "#4c0519",
      },
      pink: {
        50: "#fdf2f8",
        100: "#fce7f3",
        200: "#fbcfe8",
        300: "#f9a8d4",
        400: "#f472b6",
        500: "#ec4899",
        600: "#db2777",
        700: "#be185d",
        800: "#9d174d",
        900: "#831843",
        950: "#500724",
      },
      fuchsia: {
        50: "#fdf4ff",
        100: "#fae8ff",
        200: "#f5d0fe",
        300: "#f0abfc",
        400: "#e879f9",
        500: "#d946ef",
        600: "#c026d3",
        700: "#a21caf",
        800: "#86198f",
        900: "#701a75",
        950: "#4a044e",
      },
      purple: {
        50: "#faf5ff",
        100: "#f3e8ff",
        200: "#e9d5ff",
        300: "#d8b4fe",
        400: "#c084fc",
        500: "#a855f7",
        600: "#9333ea",
        700: "#7e22ce",
        800: "#6b21a8",
        900: "#581c87",
        950: "#3b0764",
      },
      violet: {
        50: "#f5f3ff",
        100: "#ede9fe",
        200: "#ddd6fe",
        300: "#c4b5fd",
        400: "#a78bfa",
        500: "#8b5cf6",
        600: "#7c3aed",
        700: "#6d28d9",
        800: "#5b21b6",
        900: "#4c1d95",
        950: "#2e1065",
      },
      indigo: {
        50: "#eef2ff",
        100: "#e0e7ff",
        200: "#c7d2fe",
        300: "#a5b4fc",
        400: "#818cf8",
        500: "#6366f1",
        600: "#4f46e5",
        700: "#4338ca",
        800: "#3730a3",
        900: "#312e81",
        950: "#1e1b4b",
      },
      blue: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
        950: "#172554",
      },
      sky: {
        50: "#f0f9ff",
        100: "#e0f2fe",
        200: "#bae6fd",
        300: "#7dd3fc",
        400: "#38bdf8",
        500: "#0ea5e9",
        600: "#0284c7",
        700: "#0369a1",
        800: "#075985",
        900: "#0c4a6e",
        950: "#082f49",
      },
      cyan: {
        50: "#ecfeff",
        100: "#cffafe",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#22d3ee",
        500: "#06b6d4",
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
        900: "#164e63",
        950: "#083344",
      },
      teal: {
        50: "#f0fdfa",
        100: "#ccfbf1",
        200: "#99f6e4",
        300: "#5eead4",
        400: "#2dd4bf",
        500: "#14b8a6",
        600: "#0d9488",
        700: "#0f766e",
        800: "#115e59",
        900: "#134e4a",
        950: "#042f2e",
      },
      emerald: {
        50: "#ecfdf5",
        100: "#d1fae5",
        200: "#a7f3d0",
        300: "#6ee7b7",
        400: "#34d399",
        500: "#10b981",
        600: "#059669",
        700: "#047857",
        800: "#065f46",
        900: "#064e3b",
        950: "#022c22",
      },
      green: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d",
        950: "#052e16",
      },
      lime: {
        50: "#f7fee7",
        100: "#ecfccb",
        200: "#d9f99d",
        300: "#bef264",
        400: "#a3e635",
        500: "#84cc16",
        600: "#65a30d",
        700: "#4d7c0f",
        800: "#3f6212",
        900: "#365314",
        950: "#1a2e05",
      },
      yellow: {
        50: "#fefce8",
        100: "#fef9c3",
        200: "#fef08a",
        300: "#fde047",
        400: "#facc15",
        500: "#eab308",
        600: "#ca8a04",
        700: "#a16207",
        800: "#854d0e",
        900: "#713f12",
        950: "#422006",
      },
      amber: {
        50: "#fffbeb",
        100: "#fef3c7",
        200: "#fde68a",
        300: "#fcd34d",
        400: "#fbbf24",
        500: "#f59e0b",
        600: "#d97706",
        700: "#b45309",
        800: "#92400e",
        900: "#78350f",
        950: "#451a03",
      },
      orange: {
        50: "#fff7ed",
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fdba74",
        400: "#fb923c",
        500: "#f97316",
        600: "#ea580c",
        700: "#c2410c",
        800: "#9a3412",
        900: "#7c2d12",
        950: "#431407",
      },
      red: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
        950: "#450a0a",
      },
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
        950: "#030712",
      },
      slate: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a",
        950: "#020617",
      },
      zinc: {
        50: "#fafafa",
        100: "#f4f4f5",
        200: "#e4e4e7",
        300: "#d4d4d8",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#18181b",
        950: "#09090b",
      },
      neutral: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
        950: "#0a0a0a",
      },
      stone: {
        50: "#fafaf9",
        100: "#f5f5f4",
        200: "#e7e5e4",
        300: "#d6d3d1",
        400: "#a8a29e",
        500: "#78716c",
        600: "#57534e",
        700: "#44403c",
        800: "#292524",
        900: "#1c1917",
        950: "#0c0a09",
      },
      light: {
        50: "#fdfdfd",
        100: "#fcfcfc",
        200: "#fafafa",
        300: "#f8f9fa",
        400: "#f6f6f6",
        500: "#f2f2f2",
        600: "#f1f3f5",
        700: "#e9ecef",
        800: "#dee2e6",
        900: "#dde1e3",
        950: "#d8dcdf",
      },
      dark: {
        50: "#4a4a4a",
        100: "#3c3c3c",
        200: "#323232",
        300: "#2d2d2d",
        400: "#222222",
        500: "#1f1f1f",
        600: "#1c1c1e",
        700: "#1b1b1b",
        800: "#181818",
        900: "#0f0f0f",
        950: "#080808",
      },
      get lightblue() {
        return this.sky;
      },
      get lightBlue() {
        return this.sky;
      },
      get warmgray() {
        return this.stone;
      },
      get warmGray() {
        return this.stone;
      },
      get truegray() {
        return this.neutral;
      },
      get trueGray() {
        return this.neutral;
      },
      get coolgray() {
        return this.gray;
      },
      get coolGray() {
        return this.gray;
      },
      get bluegray() {
        return this.slate;
      },
      get blueGray() {
        return this.slate;
      },
    };
  Object.values(dn).forEach((e) => {
    "string" != typeof e &&
      void 0 !== e &&
      ((e.DEFAULT = e.DEFAULT || e[400]),
      Object.keys(e).forEach((t) => {
        let r = +t / 100;
        r === Math.round(r) && (e[r] = e[t]);
      }));
  });
  var mn = {
      sans: [
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ].join(","),
      serif: [
        "ui-serif",
        "Georgia",
        "Cambria",
        '"Times New Roman"',
        "Times",
        "serif",
      ].join(","),
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ].join(","),
    },
    hn = {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    gn = hn,
    bn = {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    yn = { ...bn },
    xn = {
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      prose: "65ch",
    },
    vn = { auto: "auto", ...xn, screen: "100vw" },
    wn = { none: "none", ...xn, screen: "100vw" },
    $n = { auto: "auto", ...xn, screen: "100vh" },
    kn = { none: "none", ...xn, screen: "100vh" },
    En = Object.fromEntries(
      Object.entries(xn).map(([e, t]) => [e, `(min-width: ${t})`])
    ),
    Sn = {
      width: vn,
      height: $n,
      maxWidth: wn,
      maxHeight: kn,
      minWidth: wn,
      minHeight: kn,
      inlineSize: vn,
      blockSize: $n,
      maxInlineSize: wn,
      maxBlockSize: kn,
      minInlineSize: wn,
      minBlockSize: kn,
      colors: dn,
      fontFamily: mn,
      fontSize: {
        xs: ["0.75rem", "1rem"],
        sm: ["0.875rem", "1.25rem"],
        base: ["1rem", "1.5rem"],
        lg: ["1.125rem", "1.75rem"],
        xl: ["1.25rem", "1.75rem"],
        "2xl": ["1.5rem", "2rem"],
        "3xl": ["1.875rem", "2.25rem"],
        "4xl": ["2.25rem", "2.5rem"],
        "5xl": ["3rem", "1"],
        "6xl": ["3.75rem", "1"],
        "7xl": ["4.5rem", "1"],
        "8xl": ["6rem", "1"],
        "9xl": ["8rem", "1"],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      breakpoints: bn,
      verticalBreakpoints: yn,
      borderRadius: {
        DEFAULT: "0.25rem",
        none: "0",
        sm: "0.125rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
      lineHeight: {
        none: "1",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
      },
      letterSpacing: hn,
      wordSpacing: gn,
      boxShadow: {
        DEFAULT: [
          "var(--un-shadow-inset) 0 1px 3px 0 rgb(0 0 0 / 0.1)",
          "var(--un-shadow-inset) 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        ],
        none: "0 0 rgb(0 0 0 / 0)",
        sm: "var(--un-shadow-inset) 0 1px 2px 0 rgb(0 0 0 / 0.05)",
        md: [
          "var(--un-shadow-inset) 0 4px 6px -1px rgb(0 0 0 / 0.1)",
          "var(--un-shadow-inset) 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        ],
        lg: [
          "var(--un-shadow-inset) 0 10px 15px -3px rgb(0 0 0 / 0.1)",
          "var(--un-shadow-inset) 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        ],
        xl: [
          "var(--un-shadow-inset) 0 20px 25px -5px rgb(0 0 0 / 0.1)",
          "var(--un-shadow-inset) 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        ],
        "2xl": "var(--un-shadow-inset) 0 25px 50px -12px rgb(0 0 0 / 0.25)",
        inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      },
      textIndent: {
        DEFAULT: "1.5rem",
        xs: "0.5rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
        "3xl": "4rem",
      },
      textShadow: {
        DEFAULT: ["0 0 1px rgb(0 0 0 / 0.2)", "0 0 1px rgb(1 0 5 / 0.1)"],
        none: "0 0 rgb(0 0 0 / 0)",
        sm: "1px 1px 3px rgb(36 37 47 / 0.25)",
        md: [
          "0 1px 2px rgb(30 29 39 / 0.19)",
          "1px 2px 4px rgb(54 64 147 / 0.18)",
        ],
        lg: ["3px 3px 6px rgb(0 0 0 / 0.26)", "0 0 5px rgb(15 3 86 / 0.22)"],
        xl: [
          "1px 1px 3px rgb(0 0 0 / 0.29)",
          "2px 4px 7px rgb(73 64 125 / 0.35)",
        ],
      },
      textStrokeWidth: {
        DEFAULT: "1.5rem",
        none: "0",
        sm: "thin",
        md: "medium",
        lg: "thick",
      },
      blur: {
        DEFAULT: "8px",
        0: "0",
        sm: "4px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px",
        "3xl": "64px",
      },
      dropShadow: {
        DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"],
        sm: "0 1px 1px rgb(0 0 0 / 0.05)",
        md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"],
        lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"],
        xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"],
        "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
        none: "0 0 rgb(0 0 0 / 0)",
      },
      easing: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
        linear: "linear",
        in: "cubic-bezier(0.4, 0, 1, 1)",
        out: "cubic-bezier(0, 0, 0.2, 1)",
        "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      lineWidth: { DEFAULT: "1px", none: "0" },
      spacing: {
        DEFAULT: "1rem",
        none: "0",
        xs: "0.75rem",
        sm: "0.875rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem",
      },
      duration: {
        DEFAULT: "150ms",
        none: "0s",
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1e3: "1000ms",
      },
      ringWidth: { DEFAULT: "1px", none: "0" },
      preflightBase: { ...Qr, ...Mr, ...Nr },
      containers: En,
      zIndex: { auto: "auto" },
      media: { mouse: "(hover) and (pointer: fine)" },
    },
    zn = {
      name: "aria",
      match(e, t) {
        let r = ge("aria-", e, t.generator.config.separators);
        if (r) {
          let [e, n] = r,
            o = ot.bracket(e) ?? t.theme.aria?.[e] ?? "";
          if (o) return { matcher: n, selector: (e) => `${e}[aria-${o}]` };
        }
      },
    };
  function jn(e) {
    let t = e.match(/^-?[0-9]+\.?[0-9]*/)?.[0] || "",
      r = e.slice(t.length);
    if ("px" === r) {
      let n = Number.parseFloat(t) - 0.1;
      return Number.isNaN(n) ? e : `${n}${r}`;
    }
    return `calc(${e} - 0.1px)`;
  }
  function An() {
    let e = {};
    return {
      name: "breakpoints",
      match(t, r) {
        let n = (gt(r) ?? []).map(({ point: e, size: t }, r) => [e, t, r]);
        for (let [o, i, a] of n) {
          e[o] ||
            (e[o] = new RegExp(
              `^((?:([al]t-|[<~]|max-))?${o}(?:${r.generator.config.separators.join(
                "|"
              )}))`
            ));
          let s = t.match(e[o]);
          if (!s) continue;
          let [, l] = s,
            c = t.slice(l.length);
          if ("container" === c) continue;
          let f =
              l.startsWith("lt-") || l.startsWith("<") || l.startsWith("max-"),
            u = l.startsWith("at-") || l.startsWith("~"),
            p = 1e3;
          return f
            ? ((p -= a + 1),
              {
                matcher: c,
                handle: (e, t) =>
                  t({
                    ...e,
                    parent: `${
                      e.parent ? `${e.parent} $$ ` : ""
                    }@media (max-width: ${jn(i)})`,
                    parentOrder: p,
                  }),
              })
            : ((p += a + 1),
              u && a < n.length - 1
                ? {
                    matcher: c,
                    handle: (e, t) =>
                      t({
                        ...e,
                        parent: `${
                          e.parent ? `${e.parent} $$ ` : ""
                        }@media (min-width: ${i}) and (max-width: ${jn(
                          n[a + 1][1]
                        )})`,
                        parentOrder: p,
                      }),
                  }
                : {
                    matcher: c,
                    handle: (e, t) =>
                      t({
                        ...e,
                        parent: `${
                          e.parent ? `${e.parent} $$ ` : ""
                        }@media (min-width: ${i})`,
                        parentOrder: p,
                      }),
                  });
        }
      },
      multiPass: !0,
      autocomplete: "(at-|lt-|max-|)$breakpoints:",
    };
  }
  function _n(e, t) {
    return {
      name: `combinator:${e}`,
      match(r, n) {
        if (!r.startsWith(e)) return;
        let o = n.generator.config.separators,
          i = he(`${e}-`, r, o);
        if (!i) {
          for (let t of o)
            if (r.startsWith(`${e}${t}`)) {
              i = ["", r.slice(e.length + t.length)];
              break;
            }
          if (!i) return;
        }
        let a = ot.bracket(i[0]) ?? "";
        return (
          "" === a && (a = "*"),
          { matcher: i[1], selector: (e) => `${e}${t}${a}` }
        );
      },
      multiPass: !0,
    };
  }
  var Cn = [
      _n("all", " "),
      _n("children", ">"),
      _n("next", "+"),
      _n("sibling", "+"),
      _n("siblings", "~"),
    ],
    Rn = {
      name: "@",
      match(e, t) {
        if (e.startsWith("@container")) return;
        let r = ge("@", e, t.generator.config.separators);
        if (r) {
          let e,
            [n, o, i] = r,
            a = ot.bracket(n);
          if (a) {
            let t = ot.numberWithUnit(a);
            t && (e = `(min-width: ${t})`);
          } else e = t.theme.containers?.[n] ?? "";
          if (e)
            return (
              E(
                "The container query variant is experimental and may not follow semver."
              ),
              {
                matcher: o,
                handle: (t, r) =>
                  r({
                    ...t,
                    parent: `${t.parent ? `${t.parent} $$ ` : ""}@container${
                      i ? ` ${i} ` : " "
                    }${e}`,
                  }),
              }
            );
        }
      },
      multiPass: !0,
    };
  function Ln(e = {}) {
    if ("class" === e?.dark || "object" == typeof e.dark) {
      let { dark: t = ".dark", light: r = ".light" } =
        "string" == typeof e.dark ? {} : e.dark;
      return [
        de("dark", (e) => ({ prefix: `${t} $$ ${e.prefix}` })),
        de("light", (e) => ({ prefix: `${r} $$ ${e.prefix}` })),
      ];
    }
    return [
      me("dark", "@media (prefers-color-scheme: dark)"),
      me("light", "@media (prefers-color-scheme: light)"),
    ];
  }
  var Tn = {
    name: "data",
    match(e, t) {
      let r = ge("data-", e, t.generator.config.separators);
      if (r) {
        let [e, n] = r,
          o = ot.bracket(e) ?? t.theme.data?.[e] ?? "";
        if (o) return { matcher: n, selector: (e) => `${e}[data-${o}]` };
      }
    },
  };
  function Un(e) {
    return {
      name: `${e}-data`,
      match(t, r) {
        let n = ge(`${e}-data-`, t, r.generator.config.separators);
        if (n) {
          let [t, o] = n,
            i = ot.bracket(t) ?? r.theme.data?.[t] ?? "";
          if (i) return { matcher: `${e}-[[data-${i}]]:${o}` };
        }
      },
    };
  }
  var On = [Un("group"), Un("peer"), Un("parent"), Un("previous")],
    Nn = [
      de("rtl", (e) => ({ prefix: `[dir="rtl"] $$ ${e.prefix}` })),
      de("ltr", (e) => ({ prefix: `[dir="ltr"] $$ ${e.prefix}` })),
    ],
    Pn = {
      name: "selector",
      match(e, t) {
        let r = he("selector-", e, t.generator.config.separators);
        if (r) {
          let [e, t] = r,
            n = ot.bracket(e);
          if (n) return { matcher: t, selector: () => n };
        }
      },
    },
    Fn = {
      name: "layer",
      match(e, t) {
        let r = ge("layer-", e, t.generator.config.separators);
        if (r) {
          let [e, t] = r,
            n = ot.bracket(e) ?? e;
          if (n)
            return {
              matcher: t,
              handle: (e, t) =>
                t({
                  ...e,
                  parent: `${e.parent ? `${e.parent} $$ ` : ""}@layer ${n}`,
                }),
            };
        }
      },
    },
    Mn = {
      name: "uno-layer",
      match(e, t) {
        let r = ge("uno-layer-", e, t.generator.config.separators);
        if (r) {
          let [e, t] = r,
            n = ot.bracket(e) ?? e;
          if (n) return { matcher: t, layer: n };
        }
      },
    },
    Wn = {
      name: "scope",
      match(e, t) {
        let r = he("scope-", e, t.generator.config.separators);
        if (r) {
          let [e, t] = r,
            n = ot.bracket(e);
          if (n) return { matcher: t, selector: (e) => `${n} $$ ${e}` };
        }
      },
    },
    Bn = {
      name: "variables",
      match(e, t) {
        if (!e.startsWith("[")) return;
        let r,
          [n, o] = te(e, "[", "]") ?? [];
        if (!n || !o) return;
        for (let e of t.generator.config.separators)
          if (o.startsWith(e)) {
            r = o.slice(e.length);
            break;
          }
        if (null == r) return;
        let i = ot.bracket(n) ?? "",
          a = i.startsWith("@");
        return a || i.includes("&")
          ? {
              matcher: r,
              handle(e, t) {
                let r = a
                  ? { parent: `${e.parent ? `${e.parent} $$ ` : ""}${i}` }
                  : { selector: i.replace(/&/g, e.selector) };
                return t({ ...e, ...r });
              },
            }
          : void 0;
      },
      multiPass: !0,
    },
    Dn = /^-?[0-9.]+(?:[a-z]+|%)?$/,
    In = /-?[0-9.]+(?:[a-z]+|%)?/,
    Yn = [/\b(opacity|color|flex|backdrop-filter|^filter|transform)\b/];
  var Xn = /\b(hue-rotate)\s*(\(.*)/;
  var qn = {
    name: "negative",
    match(e) {
      if (e.startsWith("-"))
        return {
          matcher: e.slice(1),
          body: (e) => {
            if (e.find((e) => "$$mini-no-negative" === e[0])) return;
            let t = !1;
            return (
              e.forEach((e) => {
                let r = e[1]?.toString();
                if (!r || "0" === r || Yn.some((t) => t.test(e[0]))) return;
                let n = (function (e) {
                  let t = e.match(ee);
                  if (t) {
                    let [e, r] = re(`(${t[2]})${t[3]}`, "(", ")", " ") ?? [];
                    if (e) return `calc(${t[1]}${e} * -1)${r ? ` ${r}` : ""}`;
                  }
                })(r);
                if (n) return (e[1] = n), void (t = !0);
                let o = (function (e) {
                  let t = e.match(Xn);
                  if (t) {
                    let [e, r] = re(t[2], "(", ")", " ") ?? [];
                    if (e) {
                      let n = Dn.test(e.slice(1, -1))
                        ? e.replace(In, (e) =>
                            e.startsWith("-") ? e.slice(1) : `-${e}`
                          )
                        : `(calc(${e} * -1))`;
                      return `${t[1]}${n}${r ? ` ${r}` : ""}`;
                    }
                  }
                })(r);
                if (o) return (e[1] = o), void (t = !0);
                Dn.test(r) &&
                  ((e[1] = r.replace(In, (e) =>
                    e.startsWith("-") ? e.slice(1) : `-${e}`
                  )),
                  (t = !0));
              }),
              t ? e : []
            );
          },
        };
    },
  };
  function Hn() {
    let e;
    return {
      name: "important",
      match(t, r) {
        e ||
          (e = new RegExp(
            `^(important(?:${r.generator.config.separators.join("|")})|!)`
          ));
        let n,
          o = t.match(e);
        if (
          (o
            ? (n = t.slice(o[0].length))
            : t.endsWith("!") && (n = t.slice(0, -1)),
          n)
        )
          return {
            matcher: n,
            body: (e) => (
              e.forEach((e) => {
                e[1] && (e[1] += " !important");
              }),
              e
            ),
          };
      },
    };
  }
  var Vn = me("print", "@media print"),
    Zn = {
      name: "media",
      match(e, t) {
        let r = ge("media-", e, t.generator.config.separators);
        if (r) {
          let [e, n] = r,
            o = ot.bracket(e) ?? "";
          if (("" === o && (o = t.theme.media?.[e] ?? ""), o))
            return {
              matcher: n,
              handle: (e, t) =>
                t({
                  ...e,
                  parent: `${e.parent ? `${e.parent} $$ ` : ""}@media ${o}`,
                }),
            };
        }
      },
      multiPass: !0,
    },
    Gn = {
      name: "supports",
      match(e, t) {
        let r = ge("supports-", e, t.generator.config.separators);
        if (r) {
          let [e, n] = r,
            o = ot.bracket(e) ?? "";
          if (("" === o && (o = t.theme.supports?.[e] ?? ""), o))
            return {
              matcher: n,
              handle: (e, t) =>
                t({
                  ...e,
                  parent: `${e.parent ? `${e.parent} $$ ` : ""}@supports ${o}`,
                }),
            };
        }
      },
      multiPass: !0,
    },
    Jn = Object.fromEntries(
      [
        ["first-letter", "::first-letter"],
        ["first-line", "::first-line"],
        "any-link",
        "link",
        "visited",
        "target",
        ["open", "[open]"],
        "default",
        "checked",
        "indeterminate",
        "placeholder-shown",
        "autofill",
        "optional",
        "required",
        "valid",
        "invalid",
        "user-valid",
        "user-invalid",
        "in-range",
        "out-of-range",
        "read-only",
        "read-write",
        "empty",
        "focus-within",
        "hover",
        "focus",
        "focus-visible",
        "active",
        "enabled",
        "disabled",
        "root",
        "empty",
        ["even-of-type", ":nth-of-type(even)"],
        ["even", ":nth-child(even)"],
        ["odd-of-type", ":nth-of-type(odd)"],
        ["odd", ":nth-child(odd)"],
        "first-of-type",
        ["first", ":first-child"],
        "last-of-type",
        ["last", ":last-child"],
        "only-child",
        "only-of-type",
        ["backdrop-element", "::backdrop"],
        ["placeholder", "::placeholder"],
        ["before", "::before"],
        ["after", "::after"],
        ["selection", "::selection"],
        ["marker", "::marker"],
        ["file", "::file-selector-button"],
      ].map((e) => (Array.isArray(e) ? e : [e, `:${e}`]))
    ),
    Kn = Object.keys(Jn),
    Qn = Object.fromEntries(
      [["backdrop", "::backdrop"]].map((e) =>
        Array.isArray(e) ? e : [e, `:${e}`]
      )
    ),
    eo = Object.keys(Qn),
    to = Object.entries(Jn)
      .filter(([, e]) => !e.startsWith("::"))
      .map(([e]) => e)
      .sort((e, t) => t.length - e.length)
      .join("|"),
    ro = Object.entries(Qn)
      .filter(([, e]) => !e.startsWith("::"))
      .map(([e]) => e)
      .sort((e, t) => t.length - e.length)
      .join("|"),
    no = ["not", "is", "where", "has"].join("|");
  function oo(e, n, o) {
    let i,
      a,
      s,
      l,
      c = new RegExp(`^(${t(n)}:)(\\S+)${t(o)}\\1`);
    return {
      name: `pseudo:${e}`,
      match(t, f) {
        if (
          ((i && a && s) ||
            ((i = new RegExp(`(?:${f.generator.config.separators.join("|")})`)),
            (a = new RegExp(
              `^${e}-(?:(?:(${no})-)?(${to}))(?:(/\\w+))?(?:${f.generator.config.separators.join(
                "|"
              )})`
            )),
            (s = new RegExp(
              `^${e}-(?:(?:(${no})-)?(${ro}))(?:(/\\w+))?(?:${f.generator.config.separators
                .filter((e) => "-" !== e)
                .join("|")})`
            )),
            (l = new RegExp(
              `^${e}-(?:(${no})-)?\\[(.+)\\](?:(/\\w+))?(?:${f.generator.config.separators
                .filter((e) => "-" !== e)
                .join("|")})`
            ))),
          !t.startsWith(e))
        )
          return;
        let u =
          ((t) => {
            let o = he(`${e}-`, t, []);
            if (!o) return;
            let [a, s] = o,
              l = ot.bracket(a);
            if (null == l) return;
            let c = s.split(i, 1)?.[0] ?? "",
              f = `${n}${r(c)}`;
            return [
              c,
              t.slice(t.length - (s.length - c.length - 1)),
              l.includes("&") ? l.replace(/&/g, f) : `${f}${l}`,
            ];
          })(t) ||
          ((e) => {
            let t = e.match(a) || e.match(s);
            if (!t) return;
            let [o, i, l] = t,
              c = t[3] ?? "",
              f = Jn[l] || Qn[l] || `:${l}`;
            return (
              i && (f = `:${i}(${f})`),
              [c, e.slice(o.length), `${n}${r(c)}${f}`, l]
            );
          })(t) ||
          ((e) => {
            let t = e.match(l);
            if (!t) return;
            let [o, i, a] = t,
              s = t[3] ?? "",
              c = `:${i}(${a})`;
            return [s, e.slice(o.length), `${n}${r(s)}${c}`];
          })(t);
        if (!u) return;
        let [p, d, m, h = ""] = u;
        return (
          "" !== p &&
            E("The labeled variant is experimental and may not follow semver."),
          {
            matcher: d,
            handle: (e, t) =>
              t({
                ...e,
                prefix: `${m}${o}${e.prefix}`.replace(c, "$1$2:"),
                sort: Kn.indexOf(h) ?? eo.indexOf(h),
              }),
          }
        );
      },
      multiPass: !0,
    };
  }
  var io = [
      "::-webkit-resizer",
      "::-webkit-scrollbar",
      "::-webkit-scrollbar-button",
      "::-webkit-scrollbar-corner",
      "::-webkit-scrollbar-thumb",
      "::-webkit-scrollbar-track",
      "::-webkit-scrollbar-track-piece",
      "::file-selector-button",
    ],
    ao = Object.entries(Jn)
      .map(([e]) => e)
      .sort((e, t) => t.length - e.length)
      .join("|"),
    so = Object.entries(Qn)
      .map(([e]) => e)
      .sort((e, t) => t.length - e.length)
      .join("|");
  function lo() {
    let e, t;
    return {
      name: "pseudo",
      match(r, n) {
        (e && e) ||
          ((e = new RegExp(
            `^(${ao})(?:${n.generator.config.separators.join("|")})`
          )),
          (t = new RegExp(
            `^(${so})(?:${n.generator.config.separators
              .filter((e) => "-" !== e)
              .join("|")})`
          )));
        let o = r.match(e) || r.match(t);
        if (o) {
          let e = Jn[o[1]] || Qn[o[1]] || `:${o[1]}`,
            t = Kn.indexOf(o[1]);
          return (
            -1 === t && (t = eo.indexOf(o[1])),
            -1 === t && (t = void 0),
            {
              matcher: r.slice(o[0].length),
              handle: (r, n) => {
                let o =
                  e.startsWith("::") && !io.includes(e)
                    ? { pseudo: `${r.pseudo}${e}` }
                    : { selector: `${r.selector}${e}` };
                return n({ ...r, ...o, sort: t, noMerge: !0 });
              },
            }
          );
        }
      },
      multiPass: !0,
      autocomplete: `(${ao}|${so}):`,
    };
  }
  function co() {
    let e, t, r;
    return {
      match(n, o) {
        (e && t) ||
          ((e = new RegExp(
            `^(${no})-(${to})(?:${o.generator.config.separators.join("|")})`
          )),
          (t = new RegExp(
            `^(${no})-(${ro})(?:${o.generator.config.separators
              .filter((e) => "-" !== e)
              .join("|")})`
          )),
          (r = new RegExp(
            `^(${no})-(\\[.+\\])(?:${o.generator.config.separators
              .filter((e) => "-" !== e)
              .join("|")})`
          )));
        let i = n.match(e) || n.match(t) || n.match(r);
        if (i) {
          let e = i[1],
            t = te(i[2], "[", "]")
              ? ot.bracket(i[2])
              : Jn[i[2]] || Qn[i[2]] || `:${i[2]}`;
          return {
            matcher: n.slice(i[0].length),
            selector: (r) => `${r}:${e}(${t})`,
          };
        }
      },
      multiPass: !0,
      autocomplete: `(${no})-(${to}|${ro}):`,
    };
  }
  function fo(e = {}) {
    let t = !!e?.attributifyPseudo,
      r = e?.prefix ?? "";
    r = (Array.isArray(r) ? r : [r]).filter(Boolean)[0] ?? "";
    let n = (e, n) => oo(e, t ? `[${r}${e}=""]` : `.${r}${e}`, n);
    return [
      n("group", " "),
      n("peer", "~"),
      n("parent", ">"),
      n("previous", "+"),
    ];
  }
  var uo = /(part-\[(.+)]:)(.+)/,
    po = {
      match(e) {
        let t = e.match(uo);
        if (t) {
          let r = `part(${t[2]})`;
          return {
            matcher: e.slice(t[1].length),
            selector: (e) => `${e}::${r}`,
          };
        }
      },
      multiPass: !0,
    };
  function mo(e) {
    return [
      zn,
      Tn,
      Fn,
      Pn,
      Mn,
      qn,
      Hn(),
      Gn,
      Vn,
      Zn,
      An(),
      ...Cn,
      lo(),
      co(),
      ...fo(e),
      po,
      ...Ln(e),
      ...Nn,
      Wn,
      Rn,
      Bn,
      ...On,
    ];
  }
  var ho = {
      position: ["relative", "absolute", "fixed", "sticky", "static"],
      globalKeyword: Q,
    },
    go = (e = {}) => (
      (e.dark = e.dark ?? "class"),
      (e.attributifyPseudo = e.attributifyPseudo ?? !1),
      (e.preflight = e.preflight ?? !0),
      (e.variablePrefix = e.variablePrefix ?? "un-"),
      {
        name: "@unocss/preset-mini",
        theme: Sn,
        rules: pn,
        variants: mo(e),
        options: e,
        prefix: e.prefix,
        postprocess: bo(e.variablePrefix),
        preflights: e.preflight ? yo(q, e.variablePrefix) : [],
        extractorDefault: !1 === e.arbitraryVariants ? void 0 : X,
        autocomplete: { shorthands: ho },
      }
    );
  function bo(e) {
    if ("un-" !== e)
      return (t) => {
        t.entries.forEach((t) => {
          (t[0] = t[0].replace(/^--un-/, `--${e}`)),
            "string" == typeof t[1] &&
              (t[1] = t[1].replace(/var\(--un-/g, `var(--${e}`));
        });
      };
  }
  function yo(e, t) {
    return "un-" !== t
      ? e.map((e) => ({
          ...e,
          getCSS: async (r) => {
            let n = await e.getCSS(r);
            if (n) return n.replace(/--un-/g, `--${t}`);
          },
        }))
      : e;
  }
  var xo = [
    [
      /^(?:animate-)?keyframes-(.+)$/,
      ([, e], { theme: t }) => {
        let r = t.animation?.keyframes?.[e];
        if (r) return [`@keyframes ${e}${r}`, { animation: e }];
      },
      {
        autocomplete: [
          "animate-keyframes-$animation.keyframes",
          "keyframes-$animation.keyframes",
        ],
      },
    ],
    [
      /^animate-(.+)$/,
      ([, e], { theme: t }) => {
        let r = t.animation?.keyframes?.[e];
        if (r) {
          let n = t.animation?.durations?.[e] ?? "1s",
            o = t.animation?.timingFns?.[e] ?? "linear",
            i = t.animation?.counts?.[e] ?? 1,
            a = t.animation?.properties?.[e];
          return [
            `@keyframes ${e}${r}`,
            { animation: `${e} ${n} ${o} ${i}`, ...a },
          ];
        }
        return { animation: ot.bracket.cssvar(e) };
      },
      { autocomplete: "animate-$animation.keyframes" },
    ],
    [
      /^animate-name-(.+)/,
      ([, e]) => ({ "animation-name": ot.bracket.cssvar(e) ?? e }),
    ],
    [
      /^animate-duration-(.+)$/,
      ([, e], { theme: t }) => ({
        "animation-duration":
          t.duration?.[e || "DEFAULT"] ?? ot.bracket.cssvar.time(e),
      }),
      { autocomplete: ["animate-duration", "animate-duration-$duration"] },
    ],
    [
      /^animate-delay-(.+)$/,
      ([, e], { theme: t }) => ({
        "animation-delay":
          t.duration?.[e || "DEFAULT"] ?? ot.bracket.cssvar.time(e),
      }),
      { autocomplete: ["animate-delay", "animate-delay-$duration"] },
    ],
    [
      /^animate-ease(?:-(.+))?$/,
      ([, e], { theme: t }) => ({
        "animation-timing-function":
          t.easing?.[e || "DEFAULT"] ?? ot.bracket.cssvar(e),
      }),
      { autocomplete: ["animate-ease", "animate-ease-$easing"] },
    ],
    [
      /^animate-(fill-mode-|fill-|mode-)?(.+)$/,
      ([, e, t]) =>
        ["none", "forwards", "backwards", "both", e ? Q : []].includes(t)
          ? { "animation-fill-mode": t }
          : void 0,
      {
        autocomplete: [
          "animate-(fill|mode|fill-mode)",
          "animate-(fill|mode|fill-mode)-(none|forwards|backwards|both|inherit|initial|revert|revert-layer|unset)",
          "animate-(none|forwards|backwards|both|inherit|initial|revert|revert-layer|unset)",
        ],
      },
    ],
    [
      /^animate-(direction-)?(.+)$/,
      ([, e, t]) =>
        [
          "normal",
          "reverse",
          "alternate",
          "alternate-reverse",
          e ? Q : [],
        ].includes(t)
          ? { "animation-direction": t }
          : void 0,
      {
        autocomplete: [
          "animate-direction",
          "animate-direction-(normal|reverse|alternate|alternate-reverse|inherit|initial|revert|revert-layer|unset)",
          "animate-(normal|reverse|alternate|alternate-reverse|inherit|initial|revert|revert-layer|unset)",
        ],
      },
    ],
    [
      /^animate-(?:iteration-count-|iteration-|count-)(.+)$/,
      ([, e]) => ({
        "animation-iteration-count":
          ot.bracket.cssvar(e) ?? e.replace(/\-/g, ","),
      }),
      {
        autocomplete: [
          "animate-(iteration|count|iteration-count)",
          "animate-(iteration|count|iteration-count)-<num>",
        ],
      },
    ],
    [
      /^animate-(play-state-|play-|state-)?(.+)$/,
      ([, e, t]) =>
        ["paused", "running", e ? Q : []].includes(t)
          ? { "animation-play-state": t }
          : void 0,
      {
        autocomplete: [
          "animate-(play|state|play-state)",
          "animate-(play|state|play-state)-(paused|running|inherit|initial|revert|revert-layer|unset)",
          "animate-(paused|running|inherit|initial|revert|revert-layer|unset)",
        ],
      },
    ],
    ["animate-none", { animation: "none" }],
    ...bt("animate", "animation"),
  ];
  function vo(e) {
    return e ? ce(e, 0) : "rgb(255 255 255 / 0)";
  }
  function wo() {
    return ([, e, t], { theme: r }) => {
      let n = pt(t, r, "backgroundColor");
      if (!n) return;
      let { alpha: o, color: i, cssColor: a } = n;
      if (!i) return;
      let s = (function (e, t, r, n) {
        return t
          ? ce(t, null != n ? n : `var(--un-${e}-opacity, ${le(t)})`)
          : ce(r, n);
      })(e, a, i, o);
      switch (e) {
        case "from":
          return {
            "--un-gradient-from-position": "0%",
            "--un-gradient-from": `${s} var(--un-gradient-from-position)`,
            "--un-gradient-to-position": "100%",
            "--un-gradient-to": `${vo(a)} var(--un-gradient-to-position)`,
            "--un-gradient-stops":
              "var(--un-gradient-from), var(--un-gradient-to)",
          };
        case "via":
          return {
            "--un-gradient-via-position": "50%",
            "--un-gradient-to": vo(a),
            "--un-gradient-stops": `var(--un-gradient-from), ${s} var(--un-gradient-via-position), var(--un-gradient-to)`,
          };
        case "to":
          return {
            "--un-gradient-to-position": "100%",
            "--un-gradient-to": `${s} var(--un-gradient-to-position)`,
          };
      }
    };
  }
  var $o = [
      [
        /^bg-gradient-(.+)$/,
        ([, e]) => ({ "--un-gradient": ot.bracket(e) }),
        {
          autocomplete: [
            "bg-gradient",
            "bg-gradient-(from|to|via)",
            "bg-gradient-(from|to|via)-$colors",
            "bg-gradient-(from|to|via)-(op|opacity)",
            "bg-gradient-(from|to|via)-(op|opacity)-<percent>",
          ],
        },
      ],
      [
        /^(?:bg-gradient-)?stops-(\[.+\])$/,
        ([, e]) => ({ "--un-gradient-stops": ot.bracket(e) }),
      ],
      [/^(?:bg-gradient-)?(from)-(.+)$/, wo()],
      [/^(?:bg-gradient-)?(via)-(.+)$/, wo()],
      [/^(?:bg-gradient-)?(to)-(.+)$/, wo()],
      [
        /^(?:bg-gradient-)?(from|via|to)-op(?:acity)?-?(.+)$/,
        ([, e, t]) => ({ [`--un-${e}-opacity`]: ot.bracket.percent(t) }),
      ],
      [
        /^(from|via|to)-([\d\.]+)%$/,
        ([, e, t]) => ({
          [`--un-gradient-${e}-position`]:
            100 * Number(ot.bracket.cssvar.percent(t)) + "%",
        }),
      ],
      [
        /^bg-gradient-((?:repeating-)?(?:linear|radial|conic))$/,
        ([, e]) => ({
          "background-image": `${e}-gradient(var(--un-gradient, var(--un-gradient-stops, rgb(255 255 255 / 0))))`,
        }),
        {
          autocomplete: [
            "bg-gradient-repeating",
            "bg-gradient-(linear|radial|conic)",
            "bg-gradient-repeating-(linear|radial|conic)",
          ],
        },
      ],
      [
        /^bg-gradient-to-([rltb]{1,2})$/,
        ([, e]) => {
          if (e in K)
            return {
              "--un-gradient-shape": `to ${K[e]}`,
              "--un-gradient":
                "var(--un-gradient-shape), var(--un-gradient-stops)",
              "background-image": "linear-gradient(var(--un-gradient))",
            };
        },
        {
          autocomplete: `bg-gradient-to-(${Object.keys(K)
            .filter(
              (e) =>
                e.length <= 2 && Array.from(e).every((e) => "rltb".includes(e))
            )
            .join("|")})`,
        },
      ],
      [
        /^(?:bg-gradient-)?shape-(.+)$/,
        ([, e]) => {
          let t = e in K ? `to ${K[e]}` : ot.bracket(e);
          if (null != t)
            return {
              "--un-gradient-shape": t,
              "--un-gradient":
                "var(--un-gradient-shape), var(--un-gradient-stops)",
            };
        },
        {
          autocomplete: [
            "bg-gradient-shape",
            `bg-gradient-shape-(${Object.keys(K).join("|")})`,
            `shape-(${Object.keys(K).join("|")})`,
          ],
        },
      ],
      ["bg-none", { "background-image": "none" }],
      ["box-decoration-slice", { "box-decoration-break": "slice" }],
      ["box-decoration-clone", { "box-decoration-break": "clone" }],
      ...bt("box-decoration", "box-decoration-break"),
      ["bg-auto", { "background-size": "auto" }],
      ["bg-cover", { "background-size": "cover" }],
      ["bg-contain", { "background-size": "contain" }],
      ["bg-fixed", { "background-attachment": "fixed" }],
      ["bg-local", { "background-attachment": "local" }],
      ["bg-scroll", { "background-attachment": "scroll" }],
      [
        "bg-clip-border",
        {
          "-webkit-background-clip": "border-box",
          "background-clip": "border-box",
        },
      ],
      [
        "bg-clip-content",
        {
          "-webkit-background-clip": "content-box",
          "background-clip": "content-box",
        },
      ],
      [
        "bg-clip-padding",
        {
          "-webkit-background-clip": "padding-box",
          "background-clip": "padding-box",
        },
      ],
      [
        "bg-clip-text",
        { "-webkit-background-clip": "text", "background-clip": "text" },
      ],
      ...Q.map((e) => [
        `bg-clip-${e}`,
        { "-webkit-background-clip": e, "background-clip": e },
      ]),
      [/^bg-([-\w]{3,})$/, ([, e]) => ({ "background-position": K[e] })],
      ["bg-repeat", { "background-repeat": "repeat" }],
      ["bg-no-repeat", { "background-repeat": "no-repeat" }],
      ["bg-repeat-x", { "background-repeat": "repeat-x" }],
      ["bg-repeat-y", { "background-repeat": "repeat-y" }],
      ["bg-repeat-round", { "background-repeat": "round" }],
      ["bg-repeat-space", { "background-repeat": "space" }],
      ...bt("bg-repeat", "background-repeat"),
      ["bg-origin-border", { "background-origin": "border-box" }],
      ["bg-origin-padding", { "background-origin": "padding-box" }],
      ["bg-origin-content", { "background-origin": "content-box" }],
      ...bt("bg-origin", "background-origin"),
    ],
    ko = {
      disc: "disc",
      circle: "circle",
      square: "square",
      decimal: "decimal",
      "zero-decimal": "decimal-leading-zero",
      greek: "lower-greek",
      roman: "lower-roman",
      "upper-roman": "upper-roman",
      alpha: "lower-alpha",
      "upper-alpha": "upper-alpha",
      latin: "lower-latin",
      "upper-latin": "upper-latin",
    },
    Eo = [
      [
        /^list-(.+?)(?:-(outside|inside))?$/,
        ([, e, t]) => {
          let r = ko[e];
          if (r)
            return t
              ? { "list-style-position": t, "list-style-type": r }
              : { "list-style-type": r };
        },
        {
          autocomplete: [
            `list-(${Object.keys(ko).join("|")})`,
            `list-(${Object.keys(ko).join("|")})-(outside|inside)`,
          ],
        },
      ],
      ["list-outside", { "list-style-position": "outside" }],
      ["list-inside", { "list-style-position": "inside" }],
      ["list-none", { "list-style-type": "none" }],
      [
        /^list-image-(.+)$/,
        ([, e]) => {
          if (/^\[url\(.+\)\]$/.test(e))
            return { "list-style-image": ot.bracket(e) };
        },
      ],
      ["list-image-none", { "list-style-image": "none" }],
      ...bt("list", "list-style-type"),
    ],
    So = [
      [
        /^accent-(.+)$/,
        dt("accent-color", "accent", "accentColor"),
        { autocomplete: "accent-$colors" },
      ],
      [
        /^accent-op(?:acity)?-?(.+)$/,
        ([, e]) => ({ "--un-accent-opacity": ot.bracket.percent(e) }),
        {
          autocomplete: [
            "accent-(op|opacity)",
            "accent-(op|opacity)-<percent>",
          ],
        },
      ],
    ],
    zo = [
      [
        /^caret-(.+)$/,
        dt("caret-color", "caret", "textColor"),
        { autocomplete: "caret-$colors" },
      ],
      [
        /^caret-op(?:acity)?-?(.+)$/,
        ([, e]) => ({ "--un-caret-opacity": ot.bracket.percent(e) }),
        {
          autocomplete: ["caret-(op|opacity)", "caret-(op|opacity)-<percent>"],
        },
      ],
    ],
    jo = [
      ["overscroll-auto", { "overscroll-behavior": "auto" }],
      ["overscroll-contain", { "overscroll-behavior": "contain" }],
      ["overscroll-none", { "overscroll-behavior": "none" }],
      ...bt("overscroll", "overscroll-behavior"),
      ["overscroll-x-auto", { "overscroll-behavior-x": "auto" }],
      ["overscroll-x-contain", { "overscroll-behavior-x": "contain" }],
      ["overscroll-x-none", { "overscroll-behavior-x": "none" }],
      ...bt("overscroll-x", "overscroll-behavior-x"),
      ["overscroll-y-auto", { "overscroll-behavior-y": "auto" }],
      ["overscroll-y-contain", { "overscroll-behavior-y": "contain" }],
      ["overscroll-y-none", { "overscroll-behavior-y": "none" }],
      ...bt("overscroll-y", "overscroll-behavior-y"),
    ],
    Ao = [
      ["scroll-auto", { "scroll-behavior": "auto" }],
      ["scroll-smooth", { "scroll-behavior": "smooth" }],
      ...bt("scroll", "scroll-behavior"),
    ],
    _o = [
      [
        /^columns-(.+)$/,
        ([, e]) => ({
          columns: ot.bracket.global.number.auto.numberWithUnit(e),
        }),
        { autocomplete: "columns-<num>" },
      ],
      ["break-before-auto", { "break-before": "auto" }],
      ["break-before-avoid", { "break-before": "avoid" }],
      ["break-before-all", { "break-before": "all" }],
      ["break-before-avoid-page", { "break-before": "avoid-page" }],
      ["break-before-page", { "break-before": "page" }],
      ["break-before-left", { "break-before": "left" }],
      ["break-before-right", { "break-before": "right" }],
      ["break-before-column", { "break-before": "column" }],
      ...bt("break-before"),
      ["break-inside-auto", { "break-inside": "auto" }],
      ["break-inside-avoid", { "break-inside": "avoid" }],
      ["break-inside-avoid-page", { "break-inside": "avoid-page" }],
      ["break-inside-avoid-column", { "break-inside": "avoid-column" }],
      ...bt("break-inside"),
      ["break-after-auto", { "break-after": "auto" }],
      ["break-after-avoid", { "break-after": "avoid" }],
      ["break-after-all", { "break-after": "all" }],
      ["break-after-avoid-page", { "break-after": "avoid-page" }],
      ["break-after-page", { "break-after": "page" }],
      ["break-after-left", { "break-after": "left" }],
      ["break-after-right", { "break-after": "right" }],
      ["break-after-column", { "break-after": "column" }],
      ...bt("break-after"),
    ],
    Co = /@media \(min-width: (.+)\)/,
    Ro = [
      [
        /^__container$/,
        (e, t) => {
          let r,
            { theme: n, variantHandlers: o } = t,
            i = n.container?.padding;
          r = a(i) ? i : i?.DEFAULT;
          let s,
            l = n.container?.maxWidth;
          for (let e of o) {
            let n = e.handle?.({}, (e) => e)?.parent;
            if (a(n)) {
              let e = n.match(Co)?.[1];
              if (e) {
                let n = (gt(t) ?? []).find((t) => t.size === e)?.point;
                l ? n && (s = l?.[n]) : (s = e),
                  n && !a(i) && (r = i?.[n] ?? r);
              }
            }
          }
          let c = { "max-width": s };
          return (
            o.length || (c.width = "100%"),
            n.container?.center &&
              ((c["margin-left"] = "auto"), (c["margin-right"] = "auto")),
            i && ((c["padding-left"] = r), (c["padding-right"] = r)),
            c
          );
        },
        { internal: !0 },
      ],
    ],
    Lo = [
      [
        /^(?:(\w+)[:-])?container$/,
        ([, e], t) => {
          let r = (gt(t) ?? []).map((e) => e.point);
          if (e) {
            if (!r.includes(e)) return;
            r = r.slice(r.indexOf(e));
          }
          let n = r.map((e) => `${e}:__container`);
          return e || n.unshift("__container"), n;
        },
      ],
    ],
    To = {
      "--un-blur": xr,
      "--un-brightness": xr,
      "--un-contrast": xr,
      "--un-drop-shadow": xr,
      "--un-grayscale": xr,
      "--un-hue-rotate": xr,
      "--un-invert": xr,
      "--un-saturate": xr,
      "--un-sepia": xr,
    },
    Uo =
      "var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-saturate) var(--un-sepia)",
    Oo = {
      "--un-backdrop-blur": xr,
      "--un-backdrop-brightness": xr,
      "--un-backdrop-contrast": xr,
      "--un-backdrop-grayscale": xr,
      "--un-backdrop-hue-rotate": xr,
      "--un-backdrop-invert": xr,
      "--un-backdrop-opacity": xr,
      "--un-backdrop-saturate": xr,
      "--un-backdrop-sepia": xr,
    },
    No =
      "var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia)";
  function Po(e) {
    let t = ot.bracket.cssvar(e || "");
    if (
      null != t ||
      ((t = e ? ot.percent(e) : "1"), null != t && Number.parseFloat(t) <= 1)
    )
      return t;
  }
  function Fo(e, t) {
    return ([, r, n], { theme: o }) => {
      let i = t(n, o) ?? ("none" === n ? "0" : "");
      if ("" !== i)
        return r
          ? {
              [`--un-${r}${e}`]: `${e}(${i})`,
              "-webkit-backdrop-filter": No,
              "backdrop-filter": No,
            }
          : { [`--un-${e}`]: `${e}(${i})`, filter: Uo };
    };
  }
  var Mo = [
      [
        /^(?:(backdrop-)|filter-)?blur(?:-(.+))?$/,
        Fo(
          "blur",
          (e, t) => t.blur?.[e || "DEFAULT"] || ot.bracket.cssvar.px(e)
        ),
        {
          autocomplete: [
            "(backdrop|filter)-blur-$blur",
            "blur-$blur",
            "filter-blur",
          ],
        },
      ],
      [
        /^(?:(backdrop-)|filter-)?brightness-(.+)$/,
        Fo("brightness", (e) => ot.bracket.cssvar.percent(e)),
        {
          autocomplete: [
            "(backdrop|filter)-brightness-<percent>",
            "brightness-<percent>",
          ],
        },
      ],
      [
        /^(?:(backdrop-)|filter-)?contrast-(.+)$/,
        Fo("contrast", (e) => ot.bracket.cssvar.percent(e)),
        {
          autocomplete: [
            "(backdrop|filter)-contrast-<percent>",
            "contrast-<percent>",
          ],
        },
      ],
      [
        /^(?:filter-)?drop-shadow(?:-(.+))?$/,
        function ([, e], { theme: t }) {
          let r = t.dropShadow?.[e || "DEFAULT"];
          return null != r
            ? {
                "--un-drop-shadow": `drop-shadow(${mt(
                  r,
                  "--un-drop-shadow-color"
                ).join(") drop-shadow(")})`,
                filter: Uo,
              }
            : ((r = ot.bracket.cssvar(e)),
              null != r
                ? { "--un-drop-shadow": `drop-shadow(${r})`, filter: Uo }
                : void 0);
        },
        {
          autocomplete: [
            "filter-drop",
            "filter-drop-shadow",
            "filter-drop-shadow-color",
            "drop-shadow",
            "drop-shadow-color",
            "filter-drop-shadow-$dropShadow",
            "drop-shadow-$dropShadow",
            "filter-drop-shadow-color-$colors",
            "drop-shadow-color-$colors",
            "filter-drop-shadow-color-(op|opacity)",
            "drop-shadow-color-(op|opacity)",
            "filter-drop-shadow-color-(op|opacity)-<percent>",
            "drop-shadow-color-(op|opacity)-<percent>",
          ],
        },
      ],
      [
        /^(?:filter-)?drop-shadow-color-(.+)$/,
        dt("--un-drop-shadow-color", "drop-shadow", "shadowColor"),
      ],
      [
        /^(?:filter-)?drop-shadow-color-op(?:acity)?-?(.+)$/,
        ([, e]) => ({ "--un-drop-shadow-opacity": ot.bracket.percent(e) }),
      ],
      [
        /^(?:(backdrop-)|filter-)?grayscale(?:-(.+))?$/,
        Fo("grayscale", Po),
        {
          autocomplete: [
            "(backdrop|filter)-grayscale",
            "(backdrop|filter)-grayscale-<percent>",
            "grayscale-<percent>",
          ],
        },
      ],
      [
        /^(?:(backdrop-)|filter-)?hue-rotate-(.+)$/,
        Fo("hue-rotate", (e) => ot.bracket.cssvar.degree(e)),
      ],
      [
        /^(?:(backdrop-)|filter-)?invert(?:-(.+))?$/,
        Fo("invert", Po),
        {
          autocomplete: [
            "(backdrop|filter)-invert",
            "(backdrop|filter)-invert-<percent>",
            "invert-<percent>",
          ],
        },
      ],
      [
        /^(backdrop-)op(?:acity)-(.+)$/,
        Fo("opacity", (e) => ot.bracket.cssvar.percent(e)),
        {
          autocomplete: [
            "backdrop-(op|opacity)",
            "backdrop-(op|opacity)-<percent>",
          ],
        },
      ],
      [
        /^(?:(backdrop-)|filter-)?saturate-(.+)$/,
        Fo("saturate", (e) => ot.bracket.cssvar.percent(e)),
        {
          autocomplete: [
            "(backdrop|filter)-saturate",
            "(backdrop|filter)-saturate-<percent>",
            "saturate-<percent>",
          ],
        },
      ],
      [
        /^(?:(backdrop-)|filter-)?sepia(?:-(.+))?$/,
        Fo("sepia", Po),
        {
          autocomplete: [
            "(backdrop|filter)-sepia",
            "(backdrop|filter)-sepia-<percent>",
            "sepia-<percent>",
          ],
        },
      ],
      ["filter", { filter: Uo }],
      [
        "backdrop-filter",
        { "-webkit-backdrop-filter": No, "backdrop-filter": No },
      ],
      ["filter-none", { filter: "none" }],
      [
        "backdrop-filter-none",
        { "-webkit-backdrop-filter": "none", "backdrop-filter": "none" },
      ],
      ...Q.map((e) => [`filter-${e}`, { filter: e }]),
      ...Q.map((e) => [
        `backdrop-filter-${e}`,
        { "-webkit-backdrop-filter": e, "backdrop-filter": e },
      ]),
    ],
    Wo = [
      [
        /^space-([xy])-(-?.+)$/,
        Bo,
        {
          autocomplete: [
            "space-(x|y|block|inline)",
            "space-(x|y|block|inline)-reverse",
            "space-(x|y|block|inline)-$spacing",
          ],
        },
      ],
      [
        /^space-([xy])-reverse$/,
        ([, e]) => ({ [`--un-space-${e}-reverse`]: 1 }),
      ],
      [/^space-(block|inline)-(-?.+)$/, Bo],
      [
        /^space-(block|inline)-reverse$/,
        ([, e]) => ({ [`--un-space-${e}-reverse`]: 1 }),
      ],
    ];
  function Bo([, e, t], { theme: r }) {
    let n =
      r.spacing?.[t || "DEFAULT"] ??
      ot.bracket.cssvar.auto.fraction.rem(t || "1");
    if (null != n) {
      "0" === n && (n = "0px");
      let t = H[e].map((t) => [
        `margin${t}`,
        t.endsWith("right") || t.endsWith("bottom")
          ? `calc(${n} * var(--un-space-${e}-reverse))`
          : `calc(${n} * calc(1 - var(--un-space-${e}-reverse)))`,
      ]);
      if (t) return [[`--un-space-${e}-reverse`, 0], ...t];
    }
  }
  var Do = [
      ...["manual", "auto", "none", ...Q].map((e) => [
        `hyphens-${e}`,
        { "-webkit-hyphens": e, "-ms-hyphens": e, hyphens: e },
      ]),
    ],
    Io = [
      ["write-vertical-right", { "writing-mode": "vertical-rl" }],
      ["write-vertical-left", { "writing-mode": "vertical-lr" }],
      ["write-normal", { "writing-mode": "horizontal-tb" }],
      ...bt("write", "writing-mode"),
    ],
    Yo = [
      ["write-orient-mixed", { "text-orientation": "mixed" }],
      ["write-orient-sideways", { "text-orientation": "sideways" }],
      ["write-orient-upright", { "text-orientation": "upright" }],
      ...bt("write-orient", "text-orientation"),
    ],
    Xo = [
      ["object-cover", { "object-fit": "cover" }],
      ["object-contain", { "object-fit": "contain" }],
      ["object-fill", { "object-fit": "fill" }],
      ["object-scale-down", { "object-fit": "scale-down" }],
      ["object-none", { "object-fit": "none" }],
      [
        /^object-(.+)$/,
        ([, e]) =>
          K[e]
            ? { "object-position": K[e] }
            : null != ot.bracketOfPosition(e)
            ? {
                "object-position": ot
                  .bracketOfPosition(e)
                  .split(" ")
                  .map((e) => ot.position.fraction.auto.px.cssvar(e) ?? e)
                  .join(" "),
              }
            : void 0,
        { autocomplete: `object-(${Object.keys(K).join("|")})` },
      ],
    ],
    qo = [
      ["bg-blend-multiply", { "background-blend-mode": "multiply" }],
      ["bg-blend-screen", { "background-blend-mode": "screen" }],
      ["bg-blend-overlay", { "background-blend-mode": "overlay" }],
      ["bg-blend-darken", { "background-blend-mode": "darken" }],
      ["bg-blend-lighten", { "background-blend-mode": "lighten" }],
      ["bg-blend-color-dodge", { "background-blend-mode": "color-dodge" }],
      ["bg-blend-color-burn", { "background-blend-mode": "color-burn" }],
      ["bg-blend-hard-light", { "background-blend-mode": "hard-light" }],
      ["bg-blend-soft-light", { "background-blend-mode": "soft-light" }],
      ["bg-blend-difference", { "background-blend-mode": "difference" }],
      ["bg-blend-exclusion", { "background-blend-mode": "exclusion" }],
      ["bg-blend-hue", { "background-blend-mode": "hue" }],
      ["bg-blend-saturation", { "background-blend-mode": "saturation" }],
      ["bg-blend-color", { "background-blend-mode": "color" }],
      ["bg-blend-luminosity", { "background-blend-mode": "luminosity" }],
      ["bg-blend-normal", { "background-blend-mode": "normal" }],
      ...bt("bg-blend", "background-blend"),
    ],
    Ho = [
      ["mix-blend-multiply", { "mix-blend-mode": "multiply" }],
      ["mix-blend-screen", { "mix-blend-mode": "screen" }],
      ["mix-blend-overlay", { "mix-blend-mode": "overlay" }],
      ["mix-blend-darken", { "mix-blend-mode": "darken" }],
      ["mix-blend-lighten", { "mix-blend-mode": "lighten" }],
      ["mix-blend-color-dodge", { "mix-blend-mode": "color-dodge" }],
      ["mix-blend-color-burn", { "mix-blend-mode": "color-burn" }],
      ["mix-blend-hard-light", { "mix-blend-mode": "hard-light" }],
      ["mix-blend-soft-light", { "mix-blend-mode": "soft-light" }],
      ["mix-blend-difference", { "mix-blend-mode": "difference" }],
      ["mix-blend-exclusion", { "mix-blend-mode": "exclusion" }],
      ["mix-blend-hue", { "mix-blend-mode": "hue" }],
      ["mix-blend-saturation", { "mix-blend-mode": "saturation" }],
      ["mix-blend-color", { "mix-blend-mode": "color" }],
      ["mix-blend-luminosity", { "mix-blend-mode": "luminosity" }],
      ["mix-blend-plus-lighter", { "mix-blend-mode": "plus-lighter" }],
      ["mix-blend-normal", { "mix-blend-mode": "normal" }],
      ...bt("mix-blend"),
    ],
    Vo = "var(--un-border-spacing-x) var(--un-border-spacing-y)",
    Zo = [
      ["inline-table", { display: "inline-table" }],
      ["table", { display: "table" }],
      ["table-caption", { display: "table-caption" }],
      ["table-cell", { display: "table-cell" }],
      ["table-column", { display: "table-column" }],
      ["table-column-group", { display: "table-column-group" }],
      ["table-footer-group", { display: "table-footer-group" }],
      ["table-header-group", { display: "table-header-group" }],
      ["table-row", { display: "table-row" }],
      ["table-row-group", { display: "table-row-group" }],
      ["border-collapse", { "border-collapse": "collapse" }],
      ["border-separate", { "border-collapse": "separate" }],
      [
        /^border-spacing-(.+)$/,
        ([, e], { theme: t }) => {
          let r =
            t.spacing?.[e] ?? ot.bracket.cssvar.global.auto.fraction.rem(e);
          if (null != r)
            return {
              "--un-border-spacing-x": r,
              "--un-border-spacing-y": r,
              "border-spacing": Vo,
            };
        },
        { autocomplete: ["border-spacing", "border-spacing-$spacing"] },
      ],
      [
        /^border-spacing-([xy])-(.+)$/,
        ([, e, t], { theme: r }) => {
          let n =
            r.spacing?.[t] ?? ot.bracket.cssvar.global.auto.fraction.rem(t);
          if (null != n)
            return { [`--un-border-spacing-${e}`]: n, "border-spacing": Vo };
        },
        {
          autocomplete: [
            "border-spacing-(x|y)",
            "border-spacing-(x|y)-$spacing",
          ],
        },
      ],
      ["caption-top", { "caption-side": "top" }],
      ["caption-bottom", { "caption-side": "bottom" }],
      ["table-auto", { "table-layout": "auto" }],
      ["table-fixed", { "table-layout": "fixed" }],
      ["table-empty-cells-visible", { "empty-cells": "show" }],
      ["table-empty-cells-hidden", { "empty-cells": "hide" }],
    ],
    Go = {
      "bg-blend": "background-blend-mode",
      "bg-clip": "-webkit-background-clip",
      "bg-gradient": "linear-gradient",
      "bg-image": "background-image",
      "bg-origin": "background-origin",
      "bg-position": "background-position",
      "bg-repeat": "background-repeat",
      "bg-size": "background-size",
      "mix-blend": "mix-blend-mode",
      object: "object-fit",
      "object-position": "object-position",
      write: "writing-mode",
      "write-orient": "text-orientation",
    },
    Jo = [
      [
        /^(.+?)-(\$.+)$/,
        ([, e, t]) => {
          let r = Go[e];
          if (r) return { [r]: ot.cssvar(t) };
        },
      ],
    ],
    Ko = [
      [
        /^divide-?([xy])$/,
        Qo,
        {
          autocomplete: [
            "divide-(x|y|block|inline)",
            "divide-(x|y|block|inline)-reverse",
            "divide-(x|y|block|inline)-$lineWidth",
          ],
        },
      ],
      [/^divide-?([xy])-?(-?.+)$/, Qo],
      [
        /^divide-?([xy])-reverse$/,
        ([, e]) => ({ [`--un-divide-${e}-reverse`]: 1 }),
      ],
      [/^divide-(block|inline)$/, Qo],
      [/^divide-(block|inline)-(-?.+)$/, Qo],
      [
        /^divide-(block|inline)-reverse$/,
        ([, e]) => ({ [`--un-divide-${e}-reverse`]: 1 }),
      ],
      [
        /^divide-(.+)$/,
        dt("border-color", "divide", "borderColor"),
        { autocomplete: "divide-$colors" },
      ],
      [
        /^divide-op(?:acity)?-?(.+)$/,
        ([, e]) => ({ "--un-divide-opacity": ot.bracket.percent(e) }),
        {
          autocomplete: [
            "divide-(op|opacity)",
            "divide-(op|opacity)-<percent>",
          ],
        },
      ],
      ...Et.map((e) => [`divide-${e}`, { "border-style": e }]),
    ];
  function Qo([, e, t], { theme: r }) {
    let n = r.lineWidth?.[t || "DEFAULT"] ?? ot.bracket.cssvar.px(t || "1");
    if (null != n) {
      "0" === n && (n = "0px");
      let t = H[e].map((t) => [
        `border${t}-width`,
        t.endsWith("right") || t.endsWith("bottom")
          ? `calc(${n} * var(--un-divide-${e}-reverse))`
          : `calc(${n} * calc(1 - var(--un-divide-${e}-reverse)))`,
      ]);
      if (t) return [[`--un-divide-${e}-reverse`, 0], ...t];
    }
  }
  var ei = [
      [
        /^line-clamp-(\d+)$/,
        ([, e]) => ({
          overflow: "hidden",
          display: "-webkit-box",
          "-webkit-box-orient": "vertical",
          "-webkit-line-clamp": e,
          "line-clamp": e,
        }),
        { autocomplete: ["line-clamp", "line-clamp-<num>"] },
      ],
      ...["none", ...Q].map((e) => [
        `line-clamp-${e}`,
        {
          overflow: "visible",
          display: "block",
          "-webkit-box-orient": "horizontal",
          "-webkit-line-clamp": e,
          "line-clamp": e,
        },
      ]),
    ],
    ti = {
      "--un-ordinal": xr,
      "--un-slashed-zero": xr,
      "--un-numeric-figure": xr,
      "--un-numeric-spacing": xr,
      "--un-numeric-fraction": xr,
    };
  function ri(e) {
    return {
      ...e,
      "font-variant-numeric":
        "var(--un-ordinal) var(--un-slashed-zero) var(--un-numeric-figure) var(--un-numeric-spacing) var(--un-numeric-fraction)",
    };
  }
  var ni = [
      [
        /^ordinal$/,
        () => ri({ "--un-ordinal": "ordinal" }),
        { autocomplete: "ordinal" },
      ],
      [
        /^slashed-zero$/,
        () => ri({ "--un-slashed-zero": "slashed-zero" }),
        { autocomplete: "slashed-zero" },
      ],
      [
        /^lining-nums$/,
        () => ri({ "--un-numeric-figure": "lining-nums" }),
        { autocomplete: "lining-nums" },
      ],
      [
        /^oldstyle-nums$/,
        () => ri({ "--un-numeric-figure": "oldstyle-nums" }),
        { autocomplete: "oldstyle-nums" },
      ],
      [
        /^proportional-nums$/,
        () => ri({ "--un-numeric-spacing": "proportional-nums" }),
        { autocomplete: "proportional-nums" },
      ],
      [
        /^tabular-nums$/,
        () => ri({ "--un-numeric-spacing": "tabular-nums" }),
        { autocomplete: "tabular-nums" },
      ],
      [
        /^diagonal-fractions$/,
        () => ri({ "--un-numeric-fraction": "diagonal-fractions" }),
        { autocomplete: "diagonal-fractions" },
      ],
      [
        /^stacked-fractions$/,
        () => ri({ "--un-numeric-fraction": "stacked-fractions" }),
        { autocomplete: "stacked-fractions" },
      ],
      ["normal-nums", { "font-variant-numeric": "normal" }],
    ],
    oi = { "--un-pan-x": xr, "--un-pan-y": xr, "--un-pinch-zoom": xr },
    ii = "var(--un-pan-x) var(--un-pan-y) var(--un-pinch-zoom)",
    ai = [
      [
        /^touch-pan-(x|left|right)$/,
        ([, e]) => ({ "--un-pan-x": `pan-${e}`, "touch-action": ii }),
        { autocomplete: ["touch-pan", "touch-pan-(x|left|right|y|up|down)"] },
      ],
      [
        /^touch-pan-(y|up|down)$/,
        ([, e]) => ({ "--un-pan-y": `pan-${e}`, "touch-action": ii }),
      ],
      [
        "touch-pinch-zoom",
        { "--un-pinch-zoom": "pinch-zoom", "touch-action": ii },
      ],
      ["touch-auto", { "touch-action": "auto" }],
      ["touch-manipulation", { "touch-action": "manipulation" }],
      ["touch-none", { "touch-action": "none" }],
      ...bt("touch", "touch-action"),
    ],
    si = [
      [
        /^snap-(x|y)$/,
        ([, e]) => ({
          "scroll-snap-type": `${e} var(--un-scroll-snap-strictness)`,
        }),
        { autocomplete: "snap-(x|y|both)" },
      ],
      [
        /^snap-both$/,
        () => ({ "scroll-snap-type": "both var(--un-scroll-snap-strictness)" }),
      ],
      ["snap-mandatory", { "--un-scroll-snap-strictness": "mandatory" }],
      ["snap-proximity", { "--un-scroll-snap-strictness": "proximity" }],
      ["snap-none", { "scroll-snap-type": "none" }],
      ["snap-start", { "scroll-snap-align": "start" }],
      ["snap-end", { "scroll-snap-align": "end" }],
      ["snap-center", { "scroll-snap-align": "center" }],
      ["snap-align-none", { "scroll-snap-align": "none" }],
      ["snap-normal", { "scroll-snap-stop": "normal" }],
      ["snap-always", { "scroll-snap-stop": "always" }],
      [
        /^scroll-ma?()-?(-?.+)$/,
        lt("scroll-margin"),
        {
          autocomplete: [
            "scroll-(m|p|ma|pa|block|inline)",
            "scroll-(m|p|ma|pa|block|inline)-$spacing",
            "scroll-(m|p|ma|pa|block|inline)-(x|y|r|l|t|b|bs|be|is|ie)",
            "scroll-(m|p|ma|pa|block|inline)-(x|y|r|l|t|b|bs|be|is|ie)-$spacing",
          ],
        },
      ],
      [/^scroll-m-?([xy])-?(-?.+)$/, lt("scroll-margin")],
      [/^scroll-m-?([rltb])-?(-?.+)$/, lt("scroll-margin")],
      [/^scroll-m-(block|inline)-(-?.+)$/, lt("scroll-margin")],
      [/^scroll-m-?([bi][se])-?(-?.+)$/, lt("scroll-margin")],
      [/^scroll-pa?()-?(-?.+)$/, lt("scroll-padding")],
      [/^scroll-p-?([xy])-?(-?.+)$/, lt("scroll-padding")],
      [/^scroll-p-?([rltb])-?(-?.+)$/, lt("scroll-padding")],
      [/^scroll-p-(block|inline)-(-?.+)$/, lt("scroll-padding")],
      [/^scroll-p-?([bi][se])-?(-?.+)$/, lt("scroll-padding")],
    ],
    li = [
      [
        /^\$ placeholder-(.+)$/,
        dt("color", "placeholder", "accentColor"),
        { autocomplete: "placeholder-$colors" },
      ],
      [
        /^\$ placeholder-op(?:acity)?-?(.+)$/,
        ([, e]) => ({ "--un-placeholder-opacity": ot.bracket.percent(e) }),
        {
          autocomplete: [
            "placeholder-(op|opacity)",
            "placeholder-(op|opacity)-<percent>",
          ],
        },
      ],
    ],
    ci = [
      sn,
      Jo,
      ln,
      Ro,
      kr,
      [
        [
          "sr-only",
          {
            position: "absolute",
            width: "1px",
            height: "1px",
            padding: "0",
            margin: "-1px",
            overflow: "hidden",
            clip: "rect(0,0,0,0)",
            "white-space": "nowrap",
            "border-width": 0,
          },
        ],
        [
          "not-sr-only",
          {
            position: "static",
            width: "auto",
            height: "auto",
            padding: "0",
            margin: "0",
            overflow: "visible",
            clip: "auto",
            "white-space": "normal",
          },
        ],
      ],
      Er,
      wr,
      ar,
      mr,
      ei,
      [
        ["isolate", { isolation: "isolate" }],
        ["isolate-auto", { isolation: "auto" }],
        ["isolation-auto", { isolation: "auto" }],
      ],
      gr,
      lr,
      nr,
      hr,
      Zr,
      br,
      vr,
      Hr,
      Yr,
      It,
      Zo,
      en,
      xo,
      $r,
      ai,
      zr,
      Sr,
      si,
      Eo,
      wt,
      _o,
      fr,
      cr,
      sr,
      Qt,
      ur,
      Wo,
      Ko,
      ir,
      jo,
      Ao,
      Lr,
      jr,
      Cr,
      St,
      Ot,
      $o,
      fn,
      Xo,
      Vr,
      st,
      qt,
      Rr,
      at,
      Yt,
      Tr,
      [
        ["uppercase", { "text-transform": "uppercase" }],
        ["lowercase", { "text-transform": "lowercase" }],
        ["capitalize", { "text-transform": "capitalize" }],
        ["normal-case", { "text-transform": "none" }],
      ],
      Ur,
      ni,
      Ft,
      Or,
      Xt,
      Ht,
      Vt,
      Do,
      Io,
      Yo,
      zo,
      So,
      Rt,
      qo,
      Ho,
      Wr,
      xt,
      Pr,
      [
        ["image-render-auto", { "image-rendering": "auto" }],
        ["image-render-edge", { "image-rendering": "crisp-edges" }],
        [
          "image-render-pixel",
          [
            ["-ms-interpolation-mode", "nearest-neighbor"],
            ["image-rendering", "-webkit-optimize-contrast"],
            ["image-rendering", "-moz-crisp-edges"],
            ["image-rendering", "-o-pixelated"],
            ["image-rendering", "pixelated"],
          ],
        ],
      ],
      Mo,
      Dt,
      kt,
      Ar,
      _r,
      li,
      Nt,
      [
        [
          /^view-transition-([\w_-]+)$/,
          ([, e]) => ({ "view-transition-name": e }),
        ],
      ],
      cn,
    ].flat(1),
    fi = [...Lo],
    ui = {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      rose: {
        50: "#fff1f2",
        100: "#ffe4e6",
        200: "#fecdd3",
        300: "#fda4af",
        400: "#fb7185",
        500: "#f43f5e",
        600: "#e11d48",
        700: "#be123c",
        800: "#9f1239",
        900: "#881337",
        950: "#4c0519",
      },
      pink: {
        50: "#fdf2f8",
        100: "#fce7f3",
        200: "#fbcfe8",
        300: "#f9a8d4",
        400: "#f472b6",
        500: "#ec4899",
        600: "#db2777",
        700: "#be185d",
        800: "#9d174d",
        900: "#831843",
        950: "#500724",
      },
      fuchsia: {
        50: "#fdf4ff",
        100: "#fae8ff",
        200: "#f5d0fe",
        300: "#f0abfc",
        400: "#e879f9",
        500: "#d946ef",
        600: "#c026d3",
        700: "#a21caf",
        800: "#86198f",
        900: "#701a75",
        950: "#4a044e",
      },
      purple: {
        50: "#faf5ff",
        100: "#f3e8ff",
        200: "#e9d5ff",
        300: "#d8b4fe",
        400: "#c084fc",
        500: "#a855f7",
        600: "#9333ea",
        700: "#7e22ce",
        800: "#6b21a8",
        900: "#581c87",
        950: "#3b0764",
      },
      violet: {
        50: "#f5f3ff",
        100: "#ede9fe",
        200: "#ddd6fe",
        300: "#c4b5fd",
        400: "#a78bfa",
        500: "#8b5cf6",
        600: "#7c3aed",
        700: "#6d28d9",
        800: "#5b21b6",
        900: "#4c1d95",
        950: "#2e1065",
      },
      indigo: {
        50: "#eef2ff",
        100: "#e0e7ff",
        200: "#c7d2fe",
        300: "#a5b4fc",
        400: "#818cf8",
        500: "#6366f1",
        600: "#4f46e5",
        700: "#4338ca",
        800: "#3730a3",
        900: "#312e81",
        950: "#1e1b4b",
      },
      blue: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
        950: "#172554",
      },
      sky: {
        50: "#f0f9ff",
        100: "#e0f2fe",
        200: "#bae6fd",
        300: "#7dd3fc",
        400: "#38bdf8",
        500: "#0ea5e9",
        600: "#0284c7",
        700: "#0369a1",
        800: "#075985",
        900: "#0c4a6e",
        950: "#082f49",
      },
      cyan: {
        50: "#ecfeff",
        100: "#cffafe",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#22d3ee",
        500: "#06b6d4",
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
        900: "#164e63",
        950: "#083344",
      },
      teal: {
        50: "#f0fdfa",
        100: "#ccfbf1",
        200: "#99f6e4",
        300: "#5eead4",
        400: "#2dd4bf",
        500: "#14b8a6",
        600: "#0d9488",
        700: "#0f766e",
        800: "#115e59",
        900: "#134e4a",
        950: "#042f2e",
      },
      emerald: {
        50: "#ecfdf5",
        100: "#d1fae5",
        200: "#a7f3d0",
        300: "#6ee7b7",
        400: "#34d399",
        500: "#10b981",
        600: "#059669",
        700: "#047857",
        800: "#065f46",
        900: "#064e3b",
        950: "#022c22",
      },
      green: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d",
        950: "#052e16",
      },
      lime: {
        50: "#f7fee7",
        100: "#ecfccb",
        200: "#d9f99d",
        300: "#bef264",
        400: "#a3e635",
        500: "#84cc16",
        600: "#65a30d",
        700: "#4d7c0f",
        800: "#3f6212",
        900: "#365314",
        950: "#1a2e05",
      },
      yellow: {
        50: "#fefce8",
        100: "#fef9c3",
        200: "#fef08a",
        300: "#fde047",
        400: "#facc15",
        500: "#eab308",
        600: "#ca8a04",
        700: "#a16207",
        800: "#854d0e",
        900: "#713f12",
        950: "#422006",
      },
      amber: {
        50: "#fffbeb",
        100: "#fef3c7",
        200: "#fde68a",
        300: "#fcd34d",
        400: "#fbbf24",
        500: "#f59e0b",
        600: "#d97706",
        700: "#b45309",
        800: "#92400e",
        900: "#78350f",
        950: "#451a03",
      },
      orange: {
        50: "#fff7ed",
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fdba74",
        400: "#fb923c",
        500: "#f97316",
        600: "#ea580c",
        700: "#c2410c",
        800: "#9a3412",
        900: "#7c2d12",
        950: "#431407",
      },
      red: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
        950: "#450a0a",
      },
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
        950: "#030712",
      },
      slate: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a",
        950: "#020617",
      },
      zinc: {
        50: "#fafafa",
        100: "#f4f4f5",
        200: "#e4e4e7",
        300: "#d4d4d8",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#18181b",
        950: "#09090b",
      },
      neutral: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
        950: "#0a0a0a",
      },
      stone: {
        50: "#fafaf9",
        100: "#f5f5f4",
        200: "#e7e5e4",
        300: "#d6d3d1",
        400: "#a8a29e",
        500: "#78716c",
        600: "#57534e",
        700: "#44403c",
        800: "#292524",
        900: "#1c1917",
        950: "#0c0a09",
      },
      light: {
        50: "#fdfdfd",
        100: "#fcfcfc",
        200: "#fafafa",
        300: "#f8f9fa",
        400: "#f6f6f6",
        500: "#f2f2f2",
        600: "#f1f3f5",
        700: "#e9ecef",
        800: "#dee2e6",
        900: "#dde1e3",
        950: "#d8dcdf",
      },
      dark: {
        50: "#4a4a4a",
        100: "#3c3c3c",
        200: "#323232",
        300: "#2d2d2d",
        400: "#222222",
        500: "#1f1f1f",
        600: "#1c1c1e",
        700: "#1b1b1b",
        800: "#181818",
        900: "#0f0f0f",
        950: "#080808",
      },
      get lightblue() {
        return this.sky;
      },
      get lightBlue() {
        return this.sky;
      },
      get warmgray() {
        return this.stone;
      },
      get warmGray() {
        return this.stone;
      },
      get truegray() {
        return this.neutral;
      },
      get trueGray() {
        return this.neutral;
      },
      get coolgray() {
        return this.gray;
      },
      get coolGray() {
        return this.gray;
      },
      get bluegray() {
        return this.slate;
      },
      get blueGray() {
        return this.slate;
      },
    };
  Object.values(ui).forEach((e) => {
    "string" != typeof e &&
      void 0 !== e &&
      ((e.DEFAULT = e.DEFAULT || e[400]),
      Object.keys(e).forEach((t) => {
        let r = +t / 100;
        r === Math.round(r) && (e[r] = e[t]);
      }));
  });
  var pi = [
      "top",
      "top center",
      "top left",
      "top right",
      "bottom",
      "bottom center",
      "bottom left",
      "bottom right",
      "left",
      "left center",
      "left top",
      "left bottom",
      "right",
      "right center",
      "right top",
      "right bottom",
      "center",
      "center top",
      "center bottom",
      "center left",
      "center right",
      "center center",
    ],
    di = Object.assign(
      {},
      ...pi.map((e) => ({ [e.replace(/ /, "-")]: e })),
      ...pi.map((e) => ({
        [e.replace(/\b(\w)\w+/g, "$1").replace(/ /, "")]: e,
      }))
    ),
    mi = ["inherit", "initial", "revert", "revert-layer", "unset"],
    hi =
      /^(-?\d*(?:\.\d+)?)(px|pt|pc|%|r?(?:em|ex|lh|cap|ch|ic)|(?:[sld]?v|cq)(?:[whib]|min|max)|in|cm|mm|rpx)?$/i,
    gi = /^(-?\d*(?:\.\d+)?)$/i,
    bi = /^(px)$/i,
    yi = /^\[(color|length|position|quoted|string):/i,
    xi = [
      "color",
      "border-color",
      "background-color",
      "flex-grow",
      "flex",
      "flex-shrink",
      "caret-color",
      "font",
      "gap",
      "opacity",
      "visibility",
      "z-index",
      "font-weight",
      "zoom",
      "text-shadow",
      "transform",
      "box-shadow",
      "background-position",
      "left",
      "right",
      "top",
      "bottom",
      "object-position",
      "max-height",
      "min-height",
      "max-width",
      "min-width",
      "height",
      "width",
      "border-width",
      "margin",
      "padding",
      "outline-width",
      "outline-offset",
      "font-size",
      "line-height",
      "text-indent",
      "vertical-align",
      "border-spacing",
      "letter-spacing",
      "word-spacing",
      "stroke",
      "filter",
      "backdrop-filter",
      "fill",
      "mask",
      "mask-size",
      "mask-border",
      "clip-path",
      "clip",
      "border-radius",
    ];
  function vi(e) {
    return e
      .toFixed(10)
      .replace(/\.0+$/, "")
      .replace(/(\.\d+?)0+$/, "$1");
  }
  function wi(e, t) {
    if (e && e.startsWith("[") && e.endsWith("]")) {
      let r,
        n,
        o = e.match(yi);
      if (
        (o
          ? (t || (n = o[1]), (r = e.slice(o[0].length, -1)))
          : (r = e.slice(1, -1)),
        !r || '=""' === r)
      )
        return;
      r.startsWith("--") && (r = `var(${r})`);
      let i = 0;
      for (let e of r)
        if ("[" === e) i += 1;
        else if ("]" === e && ((i -= 1), i < 0)) return;
      if (i) return;
      switch (n) {
        case "string":
          return r.replace(/(^|[^\\])_/g, "$1 ").replace(/\\_/g, "_");
        case "quoted":
          return r
            .replace(/(^|[^\\])_/g, "$1 ")
            .replace(/\\_/g, "_")
            .replace(/(["\\])/g, "\\$1")
            .replace(/^(.+)$/, '"$1"');
      }
      return r
        .replace(/(url\(.*?\))/g, (e) => e.replace(/_/g, "\\_"))
        .replace(/(^|[^\\])_/g, "$1 ")
        .replace(/\\_/g, "_")
        .replace(/(?:calc|clamp|max|min)\((.*)/g, (e) => {
          let t = [];
          return e
            .replace(
              /var\((--.+?)[,)]/g,
              (e, r) => (t.push(r), e.replace(r, "--un-calc"))
            )
            .replace(
              /(-?\d*\.?\d(?!\b-\d.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,
              "$1 $2 "
            )
            .replace(/--un-calc/g, () => t.shift());
        });
    }
  }
  var $i = {
    __proto__: null,
    auto: function (e) {
      if ("auto" === e || "a" === e) return "auto";
    },
    bracket: function (e) {
      return wi(e);
    },
    bracketOfColor: function (e) {
      return wi(e, "color");
    },
    bracketOfLength: function (e) {
      return wi(e, "length");
    },
    bracketOfPosition: function (e) {
      return wi(e, "position");
    },
    cssvar: function (e) {
      if (/^\$[^\s'"`;{}]/.test(e)) return `var(--${r(e.slice(1))})`;
    },
    degree: function (e) {
      let t = e.match(/^(-?[0-9.]+)(deg|rad|grad|turn)?$/i);
      if (!t) return;
      let [, r, n] = t,
        o = Number.parseFloat(r);
      return Number.isNaN(o)
        ? void 0
        : 0 === o
        ? "0"
        : n
        ? `${vi(o)}${n}`
        : `${vi(o)}deg`;
    },
    fraction: function (e) {
      if ("full" === e) return "100%";
      let [t, r] = e.split("/"),
        n = Number.parseFloat(t) / Number.parseFloat(r);
      return Number.isNaN(n) ? void 0 : 0 === n ? "0" : `${vi(100 * n)}%`;
    },
    global: function (e) {
      if (mi.includes(e)) return e;
    },
    number: function (e) {
      if (!gi.test(e)) return;
      let t = Number.parseFloat(e);
      return Number.isNaN(t) ? void 0 : vi(t);
    },
    numberWithUnit: function (e) {
      let t = e.match(hi);
      if (!t) return;
      let [, r, n] = t,
        o = Number.parseFloat(r);
      return n && !Number.isNaN(o) ? `${vi(o)}${n}` : void 0;
    },
    percent: function (e) {
      if ((e.endsWith("%") && (e = e.slice(0, -1)), !gi.test(e))) return;
      let t = Number.parseFloat(e);
      return Number.isNaN(t) ? void 0 : `${vi(t / 100)}`;
    },
    position: function (e) {
      if (["top", "left", "right", "bottom", "center"].includes(e)) return e;
    },
    properties: function (e) {
      if (e.split(",").every((e) => xi.includes(e))) return e;
    },
    px: function (e) {
      if (bi.test(e)) return `1${e}`;
      let t = e.match(hi);
      if (!t) return;
      let [, r, n] = t,
        o = Number.parseFloat(r);
      return Number.isNaN(o) ? void 0 : n ? `${vi(o)}${n}` : `${vi(o)}px`;
    },
    rem: function (e) {
      if (bi.test(e)) return `1${e}`;
      let t = e.match(hi);
      if (!t) return;
      let [, r, n] = t,
        o = Number.parseFloat(r);
      return Number.isNaN(o)
        ? void 0
        : 0 === o
        ? "0"
        : n
        ? `${vi(o)}${n}`
        : `${vi(o / 4)}rem`;
    },
    time: function (e) {
      let t = e.match(/^(-?[0-9.]+)(s|ms)?$/i);
      if (!t) return;
      let [, r, n] = t,
        o = Number.parseFloat(r);
      return Number.isNaN(o)
        ? void 0
        : 0 !== o || n
        ? n
          ? `${vi(o)}${n}`
          : `${vi(o)}ms`
        : "0s";
    },
  };
  pe($i);
  var ki,
    Ei,
    Si = {
      "--un-ring-inset": " ",
      "--un-ring-offset-width": "0px",
      "--un-ring-offset-color": "#fff",
      "--un-ring-width": "0px",
      "--un-ring-color": "rgb(147 197 253 / 0.5)",
      "--un-shadow": "0 0 rgb(0 0 0 / 0)",
    },
    zi = {
      "--un-ring-offset-shadow": "0 0 rgb(0 0 0 / 0)",
      "--un-ring-shadow": "0 0 rgb(0 0 0 / 0)",
      "--un-shadow-inset": " ",
      "--un-shadow": "0 0 rgb(0 0 0 / 0)",
    },
    ji = ["translate", "rotate", "scale"];
  [
    "translateX(var(--un-translate-x))",
    "translateY(var(--un-translate-y))",
    "translateZ(var(--un-translate-z))",
    "rotate(var(--un-rotate))",
    "rotateX(var(--un-rotate-x))",
    "rotateY(var(--un-rotate-y))",
    "rotateZ(var(--un-rotate-z))",
    "skewX(var(--un-skew-x))",
    "skewY(var(--un-skew-y))",
    "scaleX(var(--un-scale-x))",
    "scaleY(var(--un-scale-y))",
    "scaleZ(var(--un-scale-z))",
  ].join(" "),
    [
      "translate3d(var(--un-translate-x), var(--un-translate-y), var(--un-translate-z))",
      "rotate(var(--un-rotate))",
      "rotateX(var(--un-rotate-x))",
      "rotateY(var(--un-rotate-y))",
      "rotateZ(var(--un-rotate-z))",
      "skewX(var(--un-skew-x))",
      "skewY(var(--un-skew-y))",
      "scaleX(var(--un-scale-x))",
      "scaleY(var(--un-scale-y))",
      "scaleZ(var(--un-scale-z))",
    ].join(" ");
  Object.keys(di).join("|"),
    Object.keys(di).join("|"),
    ji.join("|"),
    ji.join("|"),
    ji.join("|"),
    ji.join("|"),
    (ki = "transform"),
    mi.map((e) => [`${ki}-${e}`, { [Ei ?? ki]: e }]);
  var Ai = {
      sans: [
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ].join(","),
      serif: [
        "ui-serif",
        "Georgia",
        "Cambria",
        '"Times New Roman"',
        "Times",
        "serif",
      ].join(","),
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ].join(","),
    },
    _i = {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    Ci = _i,
    Ri = {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    Li = { ...Ri },
    Ti = {
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      prose: "65ch",
    },
    Ui = { auto: "auto", ...Ti, screen: "100vw" },
    Oi = { none: "none", ...Ti, screen: "100vw" },
    Ni = { auto: "auto", ...Ti, screen: "100vh" },
    Pi = { none: "none", ...Ti, screen: "100vh" },
    Fi = Object.fromEntries(
      Object.entries(Ti).map(([e, t]) => [e, `(min-width: ${t})`])
    ),
    Mi = {
      ...{
        width: Ui,
        height: Ni,
        maxWidth: Oi,
        maxHeight: Pi,
        minWidth: Oi,
        minHeight: Pi,
        inlineSize: Ui,
        blockSize: Ni,
        maxInlineSize: Oi,
        maxBlockSize: Pi,
        minInlineSize: Oi,
        minBlockSize: Pi,
        colors: ui,
        fontFamily: Ai,
        fontSize: {
          xs: ["0.75rem", "1rem"],
          sm: ["0.875rem", "1.25rem"],
          base: ["1rem", "1.5rem"],
          lg: ["1.125rem", "1.75rem"],
          xl: ["1.25rem", "1.75rem"],
          "2xl": ["1.5rem", "2rem"],
          "3xl": ["1.875rem", "2.25rem"],
          "4xl": ["2.25rem", "2.5rem"],
          "5xl": ["3rem", "1"],
          "6xl": ["3.75rem", "1"],
          "7xl": ["4.5rem", "1"],
          "8xl": ["6rem", "1"],
          "9xl": ["8rem", "1"],
        },
        fontWeight: {
          thin: "100",
          extralight: "200",
          light: "300",
          normal: "400",
          medium: "500",
          semibold: "600",
          bold: "700",
          extrabold: "800",
          black: "900",
        },
        breakpoints: Ri,
        verticalBreakpoints: Li,
        borderRadius: {
          DEFAULT: "0.25rem",
          none: "0",
          sm: "0.125rem",
          md: "0.375rem",
          lg: "0.5rem",
          xl: "0.75rem",
          "2xl": "1rem",
          "3xl": "1.5rem",
          full: "9999px",
        },
        lineHeight: {
          none: "1",
          tight: "1.25",
          snug: "1.375",
          normal: "1.5",
          relaxed: "1.625",
          loose: "2",
        },
        letterSpacing: _i,
        wordSpacing: Ci,
        boxShadow: {
          DEFAULT: [
            "var(--un-shadow-inset) 0 1px 3px 0 rgb(0 0 0 / 0.1)",
            "var(--un-shadow-inset) 0 1px 2px -1px rgb(0 0 0 / 0.1)",
          ],
          none: "0 0 rgb(0 0 0 / 0)",
          sm: "var(--un-shadow-inset) 0 1px 2px 0 rgb(0 0 0 / 0.05)",
          md: [
            "var(--un-shadow-inset) 0 4px 6px -1px rgb(0 0 0 / 0.1)",
            "var(--un-shadow-inset) 0 2px 4px -2px rgb(0 0 0 / 0.1)",
          ],
          lg: [
            "var(--un-shadow-inset) 0 10px 15px -3px rgb(0 0 0 / 0.1)",
            "var(--un-shadow-inset) 0 4px 6px -4px rgb(0 0 0 / 0.1)",
          ],
          xl: [
            "var(--un-shadow-inset) 0 20px 25px -5px rgb(0 0 0 / 0.1)",
            "var(--un-shadow-inset) 0 8px 10px -6px rgb(0 0 0 / 0.1)",
          ],
          "2xl": "var(--un-shadow-inset) 0 25px 50px -12px rgb(0 0 0 / 0.25)",
          inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
        },
        textIndent: {
          DEFAULT: "1.5rem",
          xs: "0.5rem",
          sm: "1rem",
          md: "1.5rem",
          lg: "2rem",
          xl: "2.5rem",
          "2xl": "3rem",
          "3xl": "4rem",
        },
        textShadow: {
          DEFAULT: ["0 0 1px rgb(0 0 0 / 0.2)", "0 0 1px rgb(1 0 5 / 0.1)"],
          none: "0 0 rgb(0 0 0 / 0)",
          sm: "1px 1px 3px rgb(36 37 47 / 0.25)",
          md: [
            "0 1px 2px rgb(30 29 39 / 0.19)",
            "1px 2px 4px rgb(54 64 147 / 0.18)",
          ],
          lg: ["3px 3px 6px rgb(0 0 0 / 0.26)", "0 0 5px rgb(15 3 86 / 0.22)"],
          xl: [
            "1px 1px 3px rgb(0 0 0 / 0.29)",
            "2px 4px 7px rgb(73 64 125 / 0.35)",
          ],
        },
        textStrokeWidth: {
          DEFAULT: "1.5rem",
          none: "0",
          sm: "thin",
          md: "medium",
          lg: "thick",
        },
        blur: {
          DEFAULT: "8px",
          0: "0",
          sm: "4px",
          md: "12px",
          lg: "16px",
          xl: "24px",
          "2xl": "40px",
          "3xl": "64px",
        },
        dropShadow: {
          DEFAULT: [
            "0 1px 2px rgb(0 0 0 / 0.1)",
            "0 1px 1px rgb(0 0 0 / 0.06)",
          ],
          sm: "0 1px 1px rgb(0 0 0 / 0.05)",
          md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"],
          lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"],
          xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"],
          "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
          none: "0 0 rgb(0 0 0 / 0)",
        },
        easing: {
          DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
          linear: "linear",
          in: "cubic-bezier(0.4, 0, 1, 1)",
          out: "cubic-bezier(0, 0, 0.2, 1)",
          "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
        },
        lineWidth: { DEFAULT: "1px", none: "0" },
        spacing: {
          DEFAULT: "1rem",
          none: "0",
          xs: "0.75rem",
          sm: "0.875rem",
          lg: "1.125rem",
          xl: "1.25rem",
          "2xl": "1.5rem",
          "3xl": "1.875rem",
          "4xl": "2.25rem",
          "5xl": "3rem",
          "6xl": "3.75rem",
          "7xl": "4.5rem",
          "8xl": "6rem",
          "9xl": "8rem",
        },
        duration: {
          DEFAULT: "150ms",
          none: "0s",
          75: "75ms",
          100: "100ms",
          150: "150ms",
          200: "200ms",
          300: "300ms",
          500: "500ms",
          700: "700ms",
          1e3: "1000ms",
        },
        ringWidth: { DEFAULT: "1px", none: "0" },
        preflightBase: {
          "--un-rotate": 0,
          "--un-rotate-x": 0,
          "--un-rotate-y": 0,
          "--un-rotate-z": 0,
          "--un-scale-x": 1,
          "--un-scale-y": 1,
          "--un-scale-z": 1,
          "--un-skew-x": 0,
          "--un-skew-y": 0,
          "--un-translate-x": 0,
          "--un-translate-y": 0,
          "--un-translate-z": 0,
          ...zi,
          ...Si,
        },
        containers: Fi,
        zIndex: { auto: "auto" },
        media: { mouse: "(hover) and (pointer: fine)" },
      },
      aria: {
        busy: 'busy="true"',
        checked: 'checked="true"',
        disabled: 'disabled="true"',
        expanded: 'expanded="true"',
        hidden: 'hidden="true"',
        pressed: 'pressed="true"',
        readonly: 'readonly="true"',
        required: 'required="true"',
        selected: 'selected="true"',
      },
      animation: {
        keyframes: {
          pulse: "{0%, 100% {opacity:1} 50% {opacity:.5}}",
          bounce:
            "{0%, 100% {transform:translateY(-25%);animation-timing-function:cubic-bezier(0.8,0,1,1)} 50% {transform:translateY(0);animation-timing-function:cubic-bezier(0,0,0.2,1)}}",
          spin: "{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}",
          ping: "{0%{transform:scale(1);opacity:1}75%,100%{transform:scale(2);opacity:0}}",
          "bounce-alt":
            "{from,20%,53%,80%,to{animation-timing-function:cubic-bezier(0.215,0.61,0.355,1);transform:translate3d(0,0,0)}40%,43%{animation-timing-function:cubic-bezier(0.755,0.05,0.855,0.06);transform:translate3d(0,-30px,0)}70%{animation-timing-function:cubic-bezier(0.755,0.05,0.855,0.06);transform:translate3d(0,-15px,0)}90%{transform:translate3d(0,-4px,0)}}",
          flash: "{from,50%,to{opacity:1}25%,75%{opacity:0}}",
          "pulse-alt":
            "{from{transform:scale3d(1,1,1)}50%{transform:scale3d(1.05,1.05,1.05)}to{transform:scale3d(1,1,1)}}",
          "rubber-band":
            "{from{transform:scale3d(1,1,1)}30%{transform:scale3d(1.25,0.75,1)}40%{transform:scale3d(0.75,1.25,1)}50%{transform:scale3d(1.15,0.85,1)}65%{transform:scale3d(0.95,1.05,1)}75%{transform:scale3d(1.05,0.95,1)}to{transform:scale3d(1,1,1)}}",
          "shake-x":
            "{from,to{transform:translate3d(0,0,0)}10%,30%,50%,70%,90%{transform:translate3d(-10px,0,0)}20%,40%,60%,80%{transform:translate3d(10px,0,0)}}",
          "shake-y":
            "{from,to{transform:translate3d(0,0,0)}10%,30%,50%,70%,90%{transform:translate3d(0,-10px,0)}20%,40%,60%,80%{transform:translate3d(0,10px,0)}}",
          "head-shake":
            "{0%{transform:translateX(0)}6.5%{transform:translateX(-6px) rotateY(-9deg)}18.5%{transform:translateX(5px) rotateY(7deg)}31.5%{transform:translateX(-3px) rotateY(-5deg)}43.5%{transform:translateX(2px) rotateY(3deg)}50%{transform:translateX(0)}}",
          swing:
            "{20%{transform:rotate3d(0,0,1,15deg)}40%{transform:rotate3d(0,0,1,-10deg)}60%{transform:rotate3d(0,0,1,5deg)}80%{transform:rotate3d(0,0,1,-5deg)}to{transform:rotate3d(0,0,1,0deg)}}",
          tada: "{from{transform:scale3d(1,1,1)}10%,20%{transform:scale3d(0.9,0.9,0.9) rotate3d(0,0,1,-3deg)}30%,50%,70%,90%{transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg)}40%,60%,80%{transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg)}to{transform:scale3d(1,1,1)}}",
          wobble:
            "{from{transform:translate3d(0,0,0)}15%{transform:translate3d(-25%,0,0) rotate3d(0,0,1,-5deg)}30%{transform:translate3d(20%,0,0) rotate3d(0,0,1,3deg)}45%{transform:translate3d(-15%,0,0) rotate3d(0,0,1,-3deg)}60%{transform:translate3d(10%,0,0) rotate3d(0,0,1,2deg)}75%{transform:translate3d(-5%,0,0) rotate3d(0,0,1,-1deg)}to{transform:translate3d(0,0,0)}}",
          jello:
            "{from,11.1% to{transform:translate3d(0,0,0)}22.2%{transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{transform:skewX(6.25deg) skewY(6.25deg)}44.4%{transform:skewX(-3.125deg)skewY(-3.125deg)}55.5%{transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{transform:skewX(-0.78125deg) skewY(-0.78125deg)}77.7%{transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{transform:skewX(-0.1953125deg) skewY(-0.1953125deg)}}",
          "heart-beat":
            "{0%{transform:scale(1)}14%{transform:scale(1.3)}28%{transform:scale(1)}42%{transform:scale(1.3)}70%{transform:scale(1)}}",
          hinge:
            "{0%{transform-origin:top left;animation-timing-function:ease-in-out}20%,60%{transform:rotate3d(0,0,1,80deg);transform-origin:top left;animation-timing-function:ease-in-out}40%,80%{transform:rotate3d(0,0,1,60deg);transform-origin:top left;animation-timing-function:ease-in-out}to{transform:translate3d(0,700px,0);opacity:0}}",
          "jack-in-the-box":
            "{from{opacity:0;transform-origin:center bottom;transform:scale(0.1) rotate(30deg)}50%{transform:rotate(-10deg)}70%{transform:rotate(3deg)}to{transform:scale(1)}}",
          "light-speed-in-left":
            "{from{opacity:0;transform:translate3d(-100%,0,0) skewX(-30deg)}60%{opacity:1;transform:skewX(20deg)}80%{transform:skewX(-5deg)}to{transform:translate3d(0,0,0)}}",
          "light-speed-in-right":
            "{from{opacity:0;transform:translate3d(100%,0,0) skewX(-30deg)}60%{opacity:1;transform:skewX(20deg)}80%{transform:skewX(-5deg)}to{transform:translate3d(0,0,0)}}",
          "light-speed-out-left":
            "{from{opacity:1}to{opacity:0;transform:translate3d(-100%,0,0) skewX(30deg)}}",
          "light-speed-out-right":
            "{from{opacity:1}to{opacity:0;transform:translate3d(100%,0,0) skewX(30deg)}}",
          flip: "{from{transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);animation-timing-function:ease-out}40%{transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);animation-timing-function:ease-out}50%{transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);animation-timing-function:ease-in}80%{transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);animation-timing-function:ease-in}to{transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);animation-timing-function:ease-in}}",
          "flip-in-x":
            "{from{transform:perspective(400px) rotate3d(1,0,0,90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotate3d(1,0,0,-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotate3d(1,0,0,10deg);opacity:1}80%{transform:perspective(400px) rotate3d(1,0,0,-5deg)}to{transform:perspective(400px)}}",
          "flip-in-y":
            "{from{transform:perspective(400px) rotate3d(0,1,0,90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotate3d(0,1,0,-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotate3d(0,1,0,10deg);opacity:1}80%{transform:perspective(400px) rotate3d(0,1,0,-5deg)}to{transform:perspective(400px)}}",
          "flip-out-x":
            "{from{transform:perspective(400px)}30%{transform:perspective(400px) rotate3d(1,0,0,-20deg);opacity:1}to{transform:perspective(400px) rotate3d(1,0,0,90deg);opacity:0}}",
          "flip-out-y":
            "{from{transform:perspective(400px)}30%{transform:perspective(400px) rotate3d(0,1,0,-15deg);opacity:1}to{transform:perspective(400px) rotate3d(0,1,0,90deg);opacity:0}}",
          "rotate-in":
            "{from{transform-origin:center;transform:rotate3d(0,0,1,-200deg);opacity:0}to{transform-origin:center;transform:translate3d(0,0,0);opacity:1}}",
          "rotate-in-down-left":
            "{from{transform-origin:left bottom;transform:rotate3d(0,0,1,-45deg);opacity:0}to{transform-origin:left bottom;transform:translate3d(0,0,0);opacity:1}}",
          "rotate-in-down-right":
            "{from{transform-origin:right bottom;transform:rotate3d(0,0,1,45deg);opacity:0}to{transform-origin:right bottom;transform:translate3d(0,0,0);opacity:1}}",
          "rotate-in-up-left":
            "{from{transform-origin:left top;transform:rotate3d(0,0,1,45deg);opacity:0}to{transform-origin:left top;transform:translate3d(0,0,0);opacity:1}}",
          "rotate-in-up-right":
            "{from{transform-origin:right bottom;transform:rotate3d(0,0,1,-90deg);opacity:0}to{transform-origin:right bottom;transform:translate3d(0,0,0);opacity:1}}",
          "rotate-out":
            "{from{transform-origin:center;opacity:1}to{transform-origin:center;transform:rotate3d(0,0,1,200deg);opacity:0}}",
          "rotate-out-down-left":
            "{from{transform-origin:left bottom;opacity:1}to{transform-origin:left bottom;transform:rotate3d(0,0,1,45deg);opacity:0}}",
          "rotate-out-down-right":
            "{from{transform-origin:right bottom;opacity:1}to{transform-origin:right bottom;transform:rotate3d(0,0,1,-45deg);opacity:0}}",
          "rotate-out-up-left":
            "{from{transform-origin:left bottom;opacity:1}to{transform-origin:left bottom;transform:rotate3d(0,0,1,-45deg);opacity:0}}",
          "rotate-out-up-right":
            "{from{transform-origin:right bottom;opacity:1}to{transform-origin:left bottom;transform:rotate3d(0,0,1,90deg);opacity:0}}",
          "roll-in":
            "{from{opacity:0;transform:translate3d(-100%,0,0) rotate3d(0,0,1,-120deg)}to{opacity:1;transform:translate3d(0,0,0)}}",
          "roll-out":
            "{from{opacity:1}to{opacity:0;transform:translate3d(100%,0,0) rotate3d(0,0,1,120deg)}}",
          "zoom-in":
            "{from{opacity:0;transform:scale3d(0.3,0.3,0.3)}50%{opacity:1}}",
          "zoom-in-down":
            "{from{opacity:0;transform:scale3d(0.1,0.1,0.1) translate3d(0,-1000px,0);animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}60%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(0,60px,0);animation-timing-function:cubic-bezier(0.175,0.885,0.32,1)}}",
          "zoom-in-left":
            "{from{opacity:0;transform:scale3d(0.1,0.1,0.1) translate3d(-1000px,0,0);animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}60%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(10px,0,0);animation-timing-function:cubic-bezier(0.175,0.885,0.32,1)}}",
          "zoom-in-right":
            "{from{opacity:0;transform:scale3d(0.1,0.1,0.1) translate3d(1000px,0,0);animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}60%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(-10px,0,0);animation-timing-function:cubic-bezier(0.175,0.885,0.32,1)}}",
          "zoom-in-up":
            "{from{opacity:0;transform:scale3d(0.1,0.1,0.1) translate3d(0,1000px,0);animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}60%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(0,-60px,0);animation-timing-function:cubic-bezier(0.175,0.885,0.32,1)}}",
          "zoom-out":
            "{from{opacity:1}50%{opacity:0;transform:scale3d(0.3,0.3,0.3)}to{opacity:0}}",
          "zoom-out-down":
            "{40%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(0,-60px,0);animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}to{opacity:0;transform:scale3d(0.1,0.1,0.1) translate3d(0,2000px,0);transform-origin:center bottom;animation-timing-function:cubic-bezier(0.175,0.885,0.32,1)}}",
          "zoom-out-left":
            "{40%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(42px,0,0)}to{opacity:0;transform:scale(0.1) translate3d(-2000px,0,0);transform-origin:left center}}",
          "zoom-out-right":
            "{40%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(-42px,0,0)}to{opacity:0;transform:scale(0.1) translate3d(2000px,0,0);transform-origin:right center}}",
          "zoom-out-up":
            "{40%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(0,60px,0);animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}to{opacity:0;transform:scale3d(0.1,0.1,0.1) translate3d(0,-2000px,0);transform-origin:center bottom;animation-timing-function:cubic-bezier(0.175,0.885,0.32,1)}}",
          "bounce-in":
            "{from,20%,40%,60%,80%,to{animation-timing-function:ease-in-out}0%{opacity:0;transform:scale3d(0.3,0.3,0.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(0.9,0.9,0.9)}60%{transform:scale3d(1.03,1.03,1.03);opacity:1}80%{transform:scale3d(0.97,0.97,0.97)}to{opacity:1;transform:scale3d(1,1,1)}}",
          "bounce-in-down":
            "{from,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215,0.61,0.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:translate3d(0,0,0)}}",
          "bounce-in-left":
            "{from,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215,0.61,0.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:translate3d(0,0,0)}}",
          "bounce-in-right":
            "{from,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215,0.61,0.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:translate3d(0,0,0)}}",
          "bounce-in-up":
            "{from,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215,0.61,0.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translate3d(0,0,0)}}",
          "bounce-out":
            "{20%{transform:scale3d(0.9,0.9,0.9)}50%,55%{opacity:1;transform:scale3d(1.1,1.1,1.1)}to{opacity:0;transform:scale3d(0.3,0.3,0.3)}}",
          "bounce-out-down":
            "{20%{transform:translate3d(0,10px,0)}40%,45%{opacity:1;transform:translate3d(0,-20px,0)}to{opacity:0;transform:translate3d(0,2000px,0)}}",
          "bounce-out-left":
            "{20%{opacity:1;transform:translate3d(20px,0,0)}to{opacity:0;transform:translate3d(-2000px,0,0)}}",
          "bounce-out-right":
            "{20%{opacity:1;transform:translate3d(-20px,0,0)}to{opacity:0;transform:translate3d(2000px,0,0)}}",
          "bounce-out-up":
            "{20%{transform:translate3d(0,-10px,0)}40%,45%{opacity:1;transform:translate3d(0,20px,0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}",
          "slide-in-down":
            "{from{transform:translate3d(0,-100%,0);visibility:visible}to{transform:translate3d(0,0,0)}}",
          "slide-in-left":
            "{from{transform:translate3d(-100%,0,0);visibility:visible}to{transform:translate3d(0,0,0)}}",
          "slide-in-right":
            "{from{transform:translate3d(100%,0,0);visibility:visible}to{transform:translate3d(0,0,0)}}",
          "slide-in-up":
            "{from{transform:translate3d(0,100%,0);visibility:visible}to{transform:translate3d(0,0,0)}}",
          "slide-out-down":
            "{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(0,100%,0)}}",
          "slide-out-left":
            "{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(-100%,0,0)}}",
          "slide-out-right":
            "{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(100%,0,0)}}",
          "slide-out-up":
            "{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(0,-100%,0)}}",
          "fade-in": "{from{opacity:0}to{opacity:1}}",
          "fade-in-down":
            "{from{opacity:0;transform:translate3d(0,-100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
          "fade-in-down-big":
            "{from{opacity:0;transform:translate3d(0,-2000px,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
          "fade-in-left":
            "{from{opacity:0;transform:translate3d(-100%,0,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
          "fade-in-left-big":
            "{from{opacity:0;transform:translate3d(-2000px,0,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
          "fade-in-right":
            "{from{opacity:0;transform:translate3d(100%,0,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
          "fade-in-right-big":
            "{from{opacity:0;transform:translate3d(2000px,0,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
          "fade-in-up":
            "{from{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
          "fade-in-up-big":
            "{from{opacity:0;transform:translate3d(0,2000px,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
          "fade-in-top-left":
            "{from{opacity:0;transform:translate3d(-100%,-100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
          "fade-in-top-right":
            "{from{opacity:0;transform:translate3d(100%,-100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
          "fade-in-bottom-left":
            "{from{opacity:0;transform:translate3d(-100%,100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
          "fade-in-bottom-right":
            "{from{opacity:0;transform:translate3d(100%,100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
          "fade-out": "{from{opacity:1}to{opacity:0}}",
          "fade-out-down":
            "{from{opacity:1}to{opacity:0;transform:translate3d(0,100%,0)}}",
          "fade-out-down-big":
            "{from{opacity:1}to{opacity:0;transform:translate3d(0,2000px,0)}}",
          "fade-out-left":
            "{from{opacity:1}to{opacity:0;transform:translate3d(-100%,0,0)}}",
          "fade-out-left-big":
            "{from{opacity:1}to{opacity:0;transform:translate3d(-2000px,0,0)}}",
          "fade-out-right":
            "{from{opacity:1}to{opacity:0;transform:translate3d(100%,0,0)}}",
          "fade-out-right-big":
            "{from{opacity:1}to{opacity:0;transform:translate3d(2000px,0,0)}}",
          "fade-out-up":
            "{from{opacity:1}to{opacity:0;transform:translate3d(0,-100%,0)}}",
          "fade-out-up-big":
            "{from{opacity:1}to{opacity:0;transform:translate3d(0,-2000px,0)}}",
          "fade-out-top-left":
            "{from{opacity:1;transform:translate3d(0,0,0)}to{opacity:0;transform:translate3d(-100%,-100%,0)}}",
          "fade-out-top-right":
            "{from{opacity:1;transform:translate3d(0,0,0)}to{opacity:0;transform:translate3d(100%,-100%,0)}}",
          "fade-out-bottom-left":
            "{from{opacity:1;transform:translate3d(0,0,0)}to{opacity:0;transform:translate3d(-100%,100%,0)}}",
          "fade-out-bottom-right":
            "{from{opacity:1;transform:translate3d(0,0,0)}to{opacity:0;transform:translate3d(100%,100%,0)}}",
          "back-in-up":
            "{0%{opacity:0.7;transform:translateY(1200px) scale(0.7)}80%{opacity:0.7;transform:translateY(0px) scale(0.7)}100%{opacity:1;transform:scale(1)}}",
          "back-in-down":
            "{0%{opacity:0.7;transform:translateY(-1200px) scale(0.7)}80%{opacity:0.7;transform:translateY(0px) scale(0.7)}100%{opacity:1;transform:scale(1)}}",
          "back-in-right":
            "{0%{opacity:0.7;transform:translateX(2000px) scale(0.7)}80%{opacity:0.7;transform:translateY(0px) scale(0.7)}100%{opacity:1;transform:scale(1)}}",
          "back-in-left":
            "{0%{opacity:0.7;transform:translateX(-2000px) scale(0.7)}80%{opacity:0.7;transform:translateX(0px) scale(0.7)}100%{opacity:1;transform:scale(1)}}",
          "back-out-up":
            "{0%{opacity:1;transform:scale(1)}80%{opacity:0.7;transform:translateY(0px) scale(0.7)}100%{opacity:0.7;transform:translateY(-700px) scale(0.7)}}",
          "back-out-down":
            "{0%{opacity:1;transform:scale(1)}80%{opacity:0.7;transform:translateY(0px) scale(0.7)}100%{opacity:0.7;transform:translateY(700px) scale(0.7)}}",
          "back-out-right":
            "{0%{opacity:1;transform:scale(1)}80%{opacity:0.7;transform:translateY(0px) scale(0.7)}100%{opacity:0.7;transform:translateX(2000px) scale(0.7)}}",
          "back-out-left":
            "{0%{opacity:1;transform:scale(1)}80%{opacity:0.7;transform:translateX(-2000px) scale(0.7)}100%{opacity:0.7;transform:translateY(-700px) scale(0.7)}}",
        },
        durations: {
          pulse: "2s",
          "heart-beat": "1.3s",
          "bounce-in": "0.75s",
          "bounce-out": "0.75s",
          "flip-out-x": "0.75s",
          "flip-out-y": "0.75s",
          hinge: "2s",
        },
        timingFns: {
          pulse: "cubic-bezier(0.4,0,.6,1)",
          ping: "cubic-bezier(0,0,.2,1)",
          "head-shake": "ease-in-out",
          "heart-beat": "ease-in-out",
          "pulse-alt": "ease-in-out",
          "light-speed-in-left": "ease-out",
          "light-speed-in-right": "ease-out",
          "light-speed-out-left": "ease-in",
          "light-speed-out-right": "ease-in",
        },
        properties: {
          "bounce-alt": { "transform-origin": "center bottom" },
          jello: { "transform-origin": "center" },
          swing: { "transform-origin": "top center" },
          flip: { "backface-visibility": "visible" },
          "flip-in-x": { "backface-visibility": "visible !important" },
          "flip-in-y": { "backface-visibility": "visible !important" },
          "flip-out-x": { "backface-visibility": "visible !important" },
          "flip-out-y": { "backface-visibility": "visible !important" },
          "rotate-in": { "transform-origin": "center" },
          "rotate-in-down-left": { "transform-origin": "left bottom" },
          "rotate-in-down-right": { "transform-origin": "right bottom" },
          "rotate-in-up-left": { "transform-origin": "left bottom" },
          "rotate-in-up-right": { "transform-origin": "right bottom" },
          "rotate-out": { "transform-origin": "center" },
          "rotate-out-down-left": { "transform-origin": "left bottom" },
          "rotate-out-down-right": { "transform-origin": "right bottom" },
          "rotate-out-up-left": { "transform-origin": "left bottom" },
          "rotate-out-up-right": { "transform-origin": "right bottom" },
          hinge: { "transform-origin": "top left" },
          "zoom-out-down": { "transform-origin": "center bottom" },
          "zoom-out-left": { "transform-origin": "left center" },
          "zoom-out-right": { "transform-origin": "right center" },
          "zoom-out-up": { "transform-origin": "center bottom" },
        },
        counts: {
          spin: "infinite",
          ping: "infinite",
          pulse: "infinite",
          "pulse-alt": "infinite",
          bounce: "infinite",
          "bounce-alt": "infinite",
        },
      },
      media: {
        portrait: "(orientation: portrait)",
        landscape: "(orientation: landscape)",
        os_dark: "(prefers-color-scheme: dark)",
        os_light: "(prefers-color-scheme: light)",
        motion_ok: "(prefers-reduced-motion: no-preference)",
        motion_not_ok: "(prefers-reduced-motion: reduce)",
        high_contrast: "(prefers-contrast: high)",
        low_contrast: "(prefers-contrast: low)",
        opacity_ok: "(prefers-reduced-transparency: no-preference)",
        opacity_not_ok: "(prefers-reduced-transparency: reduce)",
        use_data_ok: "(prefers-reduced-data: no-preference)",
        use_data_not_ok: "(prefers-reduced-data: reduce)",
        touch: "(hover: none) and (pointer: coarse)",
        stylus: "(hover: none) and (pointer: fine)",
        pointer: "(hover) and (pointer: coarse)",
        mouse: "(hover) and (pointer: fine)",
        hd_color: "(dynamic-range: high)",
      },
      supports: { grid: "(display: grid)" },
      preflightBase: {
        ...Qr,
        ...oi,
        "--un-scroll-snap-strictness": "proximity",
        ...ti,
        "--un-border-spacing-x": 0,
        "--un-border-spacing-y": 0,
        ...Mr,
        ...Nr,
        ...To,
        ...Oo,
      },
    },
    Wi = [de("svg", (e) => ({ selector: `${e.selector} svg` }))],
    Bi = [
      de(".dark", (e) => ({ prefix: `.dark $$ ${e.prefix}` })),
      de(".light", (e) => ({ prefix: `.light $$ ${e.prefix}` })),
      me("@dark", "@media (prefers-color-scheme: dark)"),
      me("@light", "@media (prefers-color-scheme: light)"),
    ],
    Di = [
      me("contrast-more", "@media (prefers-contrast: more)"),
      me("contrast-less", "@media (prefers-contrast: less)"),
    ],
    Ii = [
      me("motion-reduce", "@media (prefers-reduced-motion: reduce)"),
      me("motion-safe", "@media (prefers-reduced-motion: no-preference)"),
    ],
    Yi = [
      me("landscape", "@media (orientation: landscape)"),
      me("portrait", "@media (orientation: portrait)"),
    ],
    Xi = (e) => {
      if (
        !e.startsWith("_") &&
        (/space-([xy])-(-?.+)$/.test(e) || /divide-/.test(e))
      )
        return {
          matcher: e,
          selector: (e) => {
            let t = ">:not([hidden])~:not([hidden])";
            return e.includes(t) ? e : `${e}${t}`;
          },
        };
    },
    qi = [
      de("@hover", (e) => ({
        parent:
          (e.parent ? `${e.parent} $$ ` : "") +
          "@media (hover: hover) and (pointer: fine)",
        selector: `${e.selector || ""}:hover`,
      })),
    ],
    Hi = (e, { theme: t }) => {
      let r = e.match(/^(.*)\b(placeholder-)(.+)$/);
      if (r) {
        let [, e = "", n, o] = r;
        if (
          ht(o, t, "accentColor") ||
          (function (e) {
            let t = e.match(/^op(?:acity)?-?(.+)$/);
            return !(!t || null == t[1]) && null != ot.bracket.percent(t[1]);
          })(o)
        )
          return { matcher: `${e}placeholder-$ ${n}${o}` };
      }
    };
  function Vi(e) {
    return [Hi, Xi, ...mo(e), ...Di, ...Yi, ...Ii, ...Wi, ...Bi, ...qi];
  }
  function Zi(e, t, r) {
    return `calc(${t} + (${e} - ${t}) * ${r} / 100)`;
  }
  function Gi(e, t, r) {
    let n = [e, t],
      o = [];
    for (let e = 0; e < 2; ++e) {
      let t = "string" == typeof n[e] ? se(n[e]) : n[e];
      if (!t || !["rgb", "rgba"].includes(t.type)) return;
      o.push(t);
    }
    let i = [];
    for (let e = 0; e < 3; ++e)
      i.push(Zi(o[0].components[e], o[1].components[e], r));
    return {
      type: "rgb",
      components: i,
      alpha: Zi(o[0].alpha ?? 1, o[1].alpha ?? 1, r),
    };
  }
  function Ji(e, t) {
    return Gi("#fff", e, t);
  }
  function Ki(e, t) {
    return Gi("#000", e, t);
  }
  var Qi = {
    tint: Ji,
    shade: Ki,
    shift: function (e, t) {
      let r = Number.parseFloat(`${t}`);
      if (!Number.isNaN(r)) return r > 0 ? Ki(e, t) : Ji(e, -r);
    },
  };
  function ea() {
    let e;
    return {
      name: "mix",
      match(t, r) {
        e ||
          (e = new RegExp(
            `^mix-(tint|shade|shift)-(-?\\d{1,3})(?:${r.generator.config.separators.join(
              "|"
            )})`
          ));
        let n = t.match(e);
        if (n)
          return {
            matcher: t.slice(n[0].length),
            body: (e) => (
              e.forEach((e) => {
                if (e[1]) {
                  let t = se(`${e[1]}`);
                  if (t) {
                    let r = Qi[n[1]](t, n[2]);
                    r && (e[1] = ce(r));
                  }
                }
              }),
              e
            ),
          };
      },
    };
  }
  var ta = (e = {}) => {
    let t = ((e = {}) => ({
      ...go(e),
      name: "@unocss/preset-wind",
      theme: Mi,
      rules: ci,
      shortcuts: fi,
      variants: Vi(e),
    }))(e);
    return {
      ...t,
      name: "@unocss/preset-uno",
      variants: [...t.variants, ea()],
    };
  };
  function ra(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  function na(e) {
    return e.replace(/(?:^|\B)([A-Z])/g, "-$1").toLowerCase();
  }
  var oa = ["Webkit", "Moz", "ms"];
  function ia(e) {
    let t = {};
    return ({ entries: r }) =>
      r.forEach((r) => {
        r[0].startsWith("--") ||
          (r[0] = (function (r) {
            let n = t[r];
            if (n) return n;
            let o = (function (e) {
              return e.replace(/-(\w)/g, (e, t) => (t ? t.toUpperCase() : ""));
            })(r);
            if ("filter" !== o && o in e) return (t[r] = na(o));
            o = ra(o);
            for (let n = 0; n < oa.length; n++) {
              let i = `${oa[n]}${o}`;
              if (i in e) return (t[r] = na(ra(i)));
            }
            return r;
          })(r[0]));
      });
  }
  !(function (e = {}) {
    if (typeof window > "u")
      return void console.warn(
        "@unocss/runtime been used in non-browser environment, skipped."
      );
    let t = window,
      r = window.document,
      n = () => r.documentElement,
      i = t.__unocss || {},
      s = Object.assign({}, e, i.runtime),
      l = s.defaults || {},
      c = s.cloakAttribute ?? "un-cloak";
    s.autoPrefix &&
      (l.postprocess = o(l.postprocess)).unshift(
        ia(r.createElement("div").style)
      ),
      s.configResolved?.(i, l);
    let f,
      u,
      p = (function (e, t) {
        return new O(e, t);
      })(i, l),
      d = (e) => (s.inject ? s.inject(e) : n().prepend(e)),
      m = () => (s.rootElement ? s.rootElement() : r.body),
      h = new Map(),
      g = !0,
      b = new Set(),
      y = [],
      x = () =>
        new Promise((e) => {
          y.push(e),
            null != u && clearTimeout(u),
            (u = setTimeout(
              () =>
                $().then(() => {
                  let e = y;
                  (y = []), e.forEach((e) => e());
                }),
              0
            ));
        });
    function v(e) {
      if (1 !== e.nodeType) return;
      let t = e;
      t.hasAttribute(c) && t.removeAttribute(c),
        t.querySelectorAll(`[${c}]`).forEach((e) => {
          e.removeAttribute(c);
        });
    }
    function w(e, t) {
      let n = h.get(e);
      if (!n)
        if (
          ((n = r.createElement("style")),
          n.setAttribute("data-unocss-runtime-layer", e),
          h.set(e, n),
          null == t)
        )
          d(n);
        else {
          let e = w(t),
            r = e.parentNode;
          r ? r.insertBefore(n, e.nextSibling) : d(n);
        }
      return n;
    }
    async function $() {
      let e = await p.generate(b);
      return (
        e.layers.reduce(
          (t, r) => ((w(r, t).innerHTML = e.getLayer(r) ?? ""), r),
          void 0
        ),
        (b = e.matched),
        { ...e, getStyleElement: (e) => h.get(e), getStyleElements: () => h }
      );
    }
    async function k(e) {
      let t = b.size;
      await p.applyExtractors(e, void 0, b), t !== b.size && (await x());
    }
    async function E(e = m()) {
      let t = e && e.outerHTML;
      t &&
        (await k(
          `${t} ${(function (e) {
            return e
              .replace(/&amp;/g, "&")
              .replace(/&gt;/g, ">")
              .replace(/&lt;/g, "<");
          })(t)}`
        ),
        v(n()),
        v(e));
    }
    let S = new MutationObserver((e) => {
        g ||
          e.forEach(async (e) => {
            if (1 !== e.target.nodeType) return;
            let t = e.target;
            for (let e of h) if (t === e[1]) return;
            if ("childList" === e.type)
              e.addedNodes.forEach(async (e) => {
                if (1 !== e.nodeType) return;
                let t = e;
                (f && !f(t)) || (await k(t.outerHTML), v(t));
              });
            else {
              if (f && !f(t)) return;
              if (e.attributeName !== c) {
                let e = Array.from(t.attributes)
                    .map((e) => (e.value ? `${e.name}="${e.value}"` : e.name))
                    .join(" "),
                  r = `<${t.tagName.toLowerCase()} ${e}>`;
                await k(r);
              }
              t.hasAttribute(c) && t.removeAttribute(c);
            }
          });
      }),
      z = !1;
    function j() {
      s.bypassDefined &&
        (function (e = new Set()) {
          for (let t = 0; t < document.styleSheets.length; t++) {
            let r,
              n = document.styleSheets[t];
            try {
              if (((r = n.cssRules || n.rules), !r)) continue;
              Array.from(r)
                .flatMap((e) => e.selectorText?.split(/,/g) || [])
                .forEach((t) => {
                  t &&
                    ((t = t.trim()).startsWith(".") && (t = t.slice(1)),
                    e.add(t));
                });
            } catch {
              continue;
            }
          }
        })(p.blocked),
        E(),
        (function () {
          if (z) return;
          let e = s.observer?.target ? s.observer.target() : m();
          e &&
            (S.observe(e, {
              childList: !0,
              subtree: !0,
              attributes: !0,
              attributeFilter: s.observer?.attributeFilter,
            }),
            (z = !0));
        })();
    }
    function A() {
      "loading" === r.readyState
        ? t.addEventListener("DOMContentLoaded", j)
        : j();
    }
    let _ =
      (t.__unocss_runtime =
      t.__unocss_runtime =
        {
          version: p.version,
          uno: p,
          async extract(e) {
            a(e) || (e.forEach((e) => b.add(e)), (e = "")), await k(e);
          },
          extractAll: E,
          inspect(e) {
            f = e;
          },
          toggleObserver(e) {
            (g = void 0 === e ? !g : !!e), !z && !g && A();
          },
          update: $,
          presets: t.__unocss_runtime?.presets ?? {},
        });
    !1 !== s.ready?.(_) && ((g = !1), A());
  })({ defaults: { presets: [ta()] } });
})();
