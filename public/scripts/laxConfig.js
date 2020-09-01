"use strict";
!(function () {
  var lax = (function () {
    for (
      var lax = { elements: [] },
        lastY = 0,
        transforms = {
          "data-lax-opacity": function (t, a) {
            t.opacity = a;
          },
          "data-lax-translate": function (t, a) {
            t.transform += " translate(".concat(a, "px, ").concat(a, "px)");
          },
          "data-lax-translate-x": function (t, a) {
            t.transform += " translateX(".concat(a, "px)");
          },
          "data-lax-translate-y": function (t, a) {
            t.transform += " translateY(".concat(a, "px)");
          },
          "data-lax-scale": function (t, a) {
            t.transform += " scale(".concat(a, ")");
          },
          "data-lax-scale-x": function (t, a) {
            t.transform += " scaleX(".concat(a, ")");
          },
          "data-lax-scale-y": function (t, a) {
            t.transform += " scaleY(".concat(a, ")");
          },
          "data-lax-skew": function (t, a) {
            t.transform += " skew(".concat(a, "deg, ").concat(a, "deg)");
          },
          "data-lax-skew-x": function (t, a) {
            t.transform += " skewX(".concat(a, "deg)");
          },
          "data-lax-skew-y": function (t, a) {
            t.transform += " skewY(".concat(a, "deg)");
          },
          "data-lax-rotate": function (t, a) {
            t.transform += " rotate(".concat(a, "deg)");
          },
          "data-lax-brightness": function (t, a) {
            t.filter += " brightness(".concat(a, "%)");
          },
          "data-lax-contrast": function (t, a) {
            t.filter += " contrast(".concat(a, "%)");
          },
          "data-lax-hue-rotate": function (t, a) {
            t.filter += " hue-rotate(".concat(a, "deg)");
          },
          "data-lax-blur": function (t, a) {
            t.filter += " blur(".concat(a, "px)");
          },
          "data-lax-invert": function (t, a) {
            t.filter += "  invert(".concat(a, "%)");
          },
          "data-lax-saturate": function (t, a) {
            t.filter += "  saturate(".concat(a, "%)");
          },
          "data-lax-grayscale": function (t, a) {
            t.filter += "  grayscale(".concat(a, "%)");
          },
          "data-lax-bg-pos": function (t, a) {
            t.backgroundPosition = "".concat(a, "px ").concat(a, "px");
          },
          "data-lax-bg-pos-x": function (t, a) {
            t.backgroundPositionX = "".concat(a, "px");
          },
          "data-lax-bg-pos-y": function (t, a) {
            t.backgroundPositionY = "".concat(a, "px");
          },
        },
        _crazy = "",
        i = 0;
      i < 100;
      i++
    )
      _crazy +=
        " " + window.innerHeight * (i / 100) + " " + 360 * Math.random() + ", ";
    function intrp(t, a) {
      for (var e = 0; t[e][0] <= a && void 0 !== t[e + 1]; ) e += 1;
      var n = t[e][0],
        r = void 0 === t[e - 1] ? n : t[e - 1][0],
        o = t[e][1],
        l = void 0 === t[e - 1] ? o : t[e - 1][1];
      return Math.min(Math.max((a - r) / (n - r), 0), 1) * (o - l) + l;
    }
    return (
      (lax.presets = {
        linger: function (t) {
          return { "data-lax-translate-y": "(vh*0.7) 0, 0 200, -500 0" };
        },
        lazy: function () {
          var t =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : 100;
          return { "data-lax-translate-y": "(vh) 0, (-elh) ".concat(t) };
        },
        eager: function () {
          var t =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : 100;
          return { "data-lax-translate-y": "(vh) 0, (-elh) -".concat(t) };
        },
        slalom: function () {
          var t =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 50;
          return {
            "data-lax-translate-x": "vh "
              .concat(t, ", (vh*0.8) ")
              .concat(-t, ", (vh*0.6) ")
              .concat(t, ", (vh*0.4) ")
              .concat(-t, ", (vh*0.2) ")
              .concat(t, ", (vh*0) ")
              .concat(-t, ", (-elh) ")
              .concat(t),
          };
        },
        crazy: function (t) {
          return { "data-lax-hue-rotate": _crazy };
        },
        spin: function () {
          var t =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : 360;
          return { "data-lax-rotate": "(vh) 0, (-elh) ".concat(t) };
        },
        spinRev: function () {
          var t =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : 360;
          return { "data-lax-rotate": "(vh) 0, (-elh) ".concat(-t) };
        },
        spinIn: function () {
          var t =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : 360;
          return { "data-lax-rotate": "vh ".concat(t, ", (vh*0.5) 0") };
        },
        spinOut: function () {
          var t =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : 360;
          return { "data-lax-rotate": "(vh*0.5) 0, -elh ".concat(t) };
        },
        blurInOut: function () {
          var t =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 40;
          return {
            "data-lax-blur": "(vh) "
              .concat(t, ", (vh*0.8) 0, (vh*0.2) 0, 0 ")
              .concat(t),
          };
        },
        blurIn: function () {
          var t =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 40;
          return { "data-lax-blur": "(vh) ".concat(t, ", (vh*0.7) 0") };
        },
        blurOut: function () {
          var t =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 40;
          return { "data-lax-blur": "(vh*0.3) 0, 0 ".concat(t) };
        },
        fadeInOut: function () {
          return { "data-lax-opacity": "(vh) 0, (vh*0.8) 1, (vh*0.2) 1, 0 0" };
        },
        fadeIn: function () {
          return { "data-lax-opacity": "(vh) 0, (vh*0.7) 1" };
        },
        fadeOut: function () {
          return { "data-lax-opacity": "(vh*0.3) 1, 0 0" };
        },
        driftLeft: function () {
          var t =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : 100;
          return {
            "data-lax-translate-x": "vh ".concat(t, ", -elh ").concat(-t),
          };
        },
        driftRight: function () {
          var t =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : 100;
          return {
            "data-lax-translate-x": "vh ".concat(-t, ", -elh ").concat(t),
          };
        },
        leftToRight: function () {
          var t =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1;
          return { "data-lax-translate-x": "vh 0, -elh (vw*".concat(t, ")") };
        },
        rightToLeft: function () {
          var t =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1;
          return { "data-lax-translate-x": "vh 0, -elh (vw*".concat(-t, ")") };
        },
        zoomInOut: function () {
          var t =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : 0.2;
          return {
            "data-lax-scale": "(vh) "
              .concat(t, ", (vh*0.8) 1, (vh*0.2) 1, -elh ")
              .concat(t),
          };
        },
        zoomIn: function () {
          var t =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : 0.2;
          return { "data-lax-scale": "(vh) ".concat(t, ", (vh*0.7) 1") };
        },
        zoomOut: function () {
          var t =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : 0.2;
          return { "data-lax-scale": "(vh*0.3) 1, -elh ".concat(t) };
        },
        speedy: function () {
          var t =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 30;
          return { "data-lax-skew-x": "(vh) ".concat(t, ", -elh ").concat(-t) };
        },
        swing: function () {
          var t =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 30;
          return { "data-lax-skew-y": "(vh) ".concat(t, ", -elh ").concat(-t) };
        },
      }),
      (lax.addPreset = function (t, a) {
        lax.presets[t] = a;
      }),
      (lax.setup = function (t) {
        lax.populateElements();
      }),
      (lax.removeElement = function (a) {
        var t = this.elements.findIndex(function (t) {
          return (t.el = a);
        });
        -1 < t && this.elements.splice(t, 1);
      }),
      (lax.addElement = function (el) {
        var o = { el: el, transforms: [] },
          presetNames =
            el.attributes["data-lax-preset"] &&
            el.attributes["data-lax-preset"].value;
        presetNames &&
          (presetNames.split(" ").forEach(function (t) {
            var a = t.split("-"),
              e = lax.presets[a[0]];
            if (e) {
              var n = e(a[1]);
              for (var r in n) el.setAttribute(r, n[r]);
            } else console.error("preset ".concat(a[0], " is not defined"));
          }),
          el.setAttribute("data-lax-anchor", "self"),
          el.attributes.removeNamedItem("data-lax-preset"));
        var useGpu = !(
          el.attributes["data-lax-use-gpu"] &&
          "false" === el.attributes["data-lax-use-gpu"].value
        );
        if (
          (useGpu && (el.style["-webkit-backface-visibility"] = "hidden"),
          el.attributes["data-lax-use-gpu"] &&
            el.attributes.removeNamedItem("data-lax-use-gpu"),
          (o.optimise = !1),
          el.attributes["data-lax-optimize"] &&
            "true" === el.attributes["data-lax-optimize"].value)
        ) {
          o.optimise = !0;
          var bounds = el.getBoundingClientRect();
          el.setAttribute(
            "data-lax-opacity",
            ""
              .concat(-bounds.height - 1, " 0, ")
              .concat(-bounds.height, " 1, ")
              .concat(window.innerHeight, " 1, ")
              .concat(window.innerHeight + 1, " 0")
          ),
            el.attributes.removeNamedItem("data-lax-optimize");
        }
        for (var i = 0; i < el.attributes.length; i++) {
          var a = el.attributes[i],
            bits = a.name.split("-");
          if ("lax" === bits[1])
            if ("data-lax-anchor" === a.name) {
              o["data-lax-anchor"] =
                "self" === a.value ? el : document.querySelector(a.value);
              var rect = o["data-lax-anchor"].getBoundingClientRect();
              o["data-lax-anchor-top"] = Math.floor(rect.top) + window.scrollY;
            } else
              o.transforms[a.name] = a.value
                .replace(new RegExp("vw", "g"), window.innerWidth)
                .replace(new RegExp("vh", "g"), window.innerHeight)
                .replace(new RegExp("elh", "g"), el.clientHeight)
                .replace(new RegExp("elw", "g"), el.clientWidth)
                .replace(new RegExp("-vw", "g"), -window.innerWidth)
                .replace(new RegExp("-vh", "g"), -window.innerHeight)
                .replace(new RegExp("-elh", "g"), -el.clientHeight)
                .replace(new RegExp("-elw", "g"), -el.clientWidth)
                .replace(/\s+/g, " ")
                .split(",")
                .map(function (x) {
                  return x
                    .trim()
                    .split(" ")
                    .map(function (y) {
                      return "(" === y[0] ? eval(y) : parseFloat(y);
                    });
                })
                .sort(function (t, a) {
                  return t[0] - a[0];
                });
        }
        lax.elements.push(o), lax.updateElement(o);
      }),
      (lax.populateElements = function () {
        lax.elements = [];
        var t = Object.keys(transforms)
          .map(function (t) {
            return "[".concat(t, "]");
          })
          .join(",");
        (t += ",[data-lax-preset]"),
          document.querySelectorAll(t).forEach(this.addElement);
      }),
      (lax.updateElement = function (t) {
        var a = lastY,
          e = t["data-lax-anchor-top"] ? t["data-lax-anchor-top"] - a : a,
          n = { transform: "", filter: "" };
        for (var r in t.transforms) {
          var o = t.transforms[r],
            l = transforms[r],
            c = intrp(o, e);
          if (!l) return void console.error("lax: " + r + " is not supported");
          l(n, c);
        }
        for (var i in n)
          0 === n.opacity ? (t.el.style.opacity = 0) : (t.el.style[i] = n[i]);
      }),
      (lax.update = function (t) {
        (lastY = t), lax.elements.forEach(lax.updateElement);
      }),
      lax
    );
  })();
  "undefined" != typeof module && void 0 !== module.exports
    ? (module.exports = lax)
    : (window.lax = lax);
})();

window.onload = function () {
  lax.setup(); // init

  document.addEventListener(
    "scroll",
    function (e) {
      lax.update(window.scrollY); // update every scroll
    },
    false
  );
};
