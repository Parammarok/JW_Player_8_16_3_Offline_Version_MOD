! function(e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var i = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
    }
    r.m = e, r.c = t, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) r.d(n, i, function(t) {
                return e[t]
            }.bind(null, i));
        return n
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 132)
}([function(e, t, r) {
    "use strict";
    r.r(t);
    var n = r(1),
        i = r(2),
        o = r(75),
        a = r.n(o),
        s = r(76),
        d = r.n(s),
        u = r(5),
        c = r.n(u),
        f = r(3),
        l = r.n(f);

    function p(e, t, r, n, i) {
        for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++) e = e ? e[t[n]] : i;
        return e === i ? r : e
    }
    var g = function(e, t, r) {
        t.split && (t = t.split("."));
        for (var n, i = 0, o = t.length, a = e; i < o; ++i) n = a[t[i]], a = a[t[i]] = i === o - 1 ? r : null != n ? n : !~t[i + 1].indexOf(".") && +t[i + 1] > -1 ? [] : {}
    };
    r.d(t, "internal", (function() {
        return C
    })), r.d(t, "bind", (function() {
        return j
    })), r.d(t, "replaceTokenInString", (function() {
        return R
    })), r.d(t, "getUniqueIdentifierStr", (function() {
        return U
    })), r.d(t, "generateUUID", (function() {
        return D
    })), r.d(t, "getBidIdParameter", (function() {
        return k
    })), r.d(t, "tryAppendQueryString", (function() {
        return N
    })), r.d(t, "parseQueryStringParameters", (function() {
        return M
    })), r.d(t, "transformAdServerTargetingObj", (function() {
        return q
    })), r.d(t, "getAdUnitSizes", (function() {
        return W
    })), r.d(t, "parseSizesInput", (function() {
        return G
    })), r.d(t, "parseGPTSingleSizeArray", (function() {
        return z
    })), r.d(t, "parseGPTSingleSizeArrayToRtbSize", (function() {
        return L
    })), r.d(t, "getWindowTop", (function() {
        return F
    })), r.d(t, "getWindowSelf", (function() {
        return Y
    })), r.d(t, "getWindowLocation", (function() {
        return H
    })), r.d(t, "logMessage", (function() {
        return K
    })), r.d(t, "logInfo", (function() {
        return J
    })), r.d(t, "logWarn", (function() {
        return X
    })), r.d(t, "logError", (function() {
        return $
    })), r.d(t, "hasConsoleLogger", (function() {
        return Z
    })), r.d(t, "debugTurnedOn", (function() {
        return ee
    })), r.d(t, "createInvisibleIframe", (function() {
        return te
    })), r.d(t, "getParameterByName", (function() {
        return re
    })), r.d(t, "hasValidBidRequest", (function() {
        return ne
    })), r.d(t, "addEventHandler", (function() {
        return ie
    })), r.d(t, "isA", (function() {
        return oe
    })), r.d(t, "isFn", (function() {
        return ae
    })), r.d(t, "isStr", (function() {
        return se
    })), r.d(t, "isArray", (function() {
        return de
    })), r.d(t, "isNumber", (function() {
        return ue
    })), r.d(t, "isPlainObject", (function() {
        return ce
    })), r.d(t, "isBoolean", (function() {
        return fe
    })), r.d(t, "isEmpty", (function() {
        return le
    })), r.d(t, "isEmptyStr", (function() {
        return pe
    })), r.d(t, "_each", (function() {
        return ge
    })), r.d(t, "contains", (function() {
        return me
    })), r.d(t, "indexOf", (function() {
        return ve
    })), r.d(t, "_map", (function() {
        return ye
    })), r.d(t, "hasOwn", (function() {
        return be
    })), r.d(t, "insertElement", (function() {
        return he
    })), r.d(t, "triggerPixel", (function() {
        return Ae
    })), r.d(t, "callBurl", (function() {
        return Ee
    })), r.d(t, "insertHtmlIntoIframe", (function() {
        return Se
    })), r.d(t, "insertUserSyncIframe", (function() {
        return Te
    })), r.d(t, "createTrackPixelHtml", (function() {
        return Ie
    })), r.d(t, "createTrackPixelIframeHtml", (function() {
        return _e
    })), r.d(t, "getIframeDocument", (function() {
        return we
    })), r.d(t, "getValueString", (function() {
        return Oe
    })), r.d(t, "uniques", (function() {
        return Ce
    })), r.d(t, "flatten", (function() {
        return Pe
    })), r.d(t, "getBidRequest", (function() {
        return je
    })), r.d(t, "getKeys", (function() {
        return Re
    })), r.d(t, "getValue", (function() {
        return xe
    })), r.d(t, "getKeyByValue", (function() {
        return Be
    })), r.d(t, "getBidderCodes", (function() {
        return Ue
    })), r.d(t, "isGptPubadsDefined", (function() {
        return De
    })), r.d(t, "getHighestCpm", (function() {
        return ke
    })), r.d(t, "getOldestHighestCpmBid", (function() {
        return Ne
    })), r.d(t, "getLatestHighestCpmBid", (function() {
        return Me
    })), r.d(t, "shuffle", (function() {
        return We
    })), r.d(t, "adUnitsFilter", (function() {
        return Ge
    })), r.d(t, "isSrcdocSupported", (function() {
        return ze
    })), r.d(t, "deepClone", (function() {
        return Le
    })), r.d(t, "inIframe", (function() {
        return Ve
    })), r.d(t, "isSafariBrowser", (function() {
        return Fe
    })), r.d(t, "replaceAuctionPrice", (function() {
        return Ye
    })), r.d(t, "timestamp", (function() {
        return He
    })), r.d(t, "hasDeviceAccess", (function() {
        return Ke
    })), r.d(t, "checkCookieSupport", (function() {
        return Je
    })), r.d(t, "delayExecution", (function() {
        return Xe
    })), r.d(t, "groupBy", (function() {
        return $e
    })), r.d(t, "createContentToExecuteExtScriptInFriendlyFrame", (function() {
        return Qe
    })), r.d(t, "getDefinedParams", (function() {
        return Ze
    })), r.d(t, "isValidMediaTypes", (function() {
        return et
    })), r.d(t, "getBidderRequest", (function() {
        return tt
    })), r.d(t, "getUserConfiguredParams", (function() {
        return rt
    })), r.d(t, "getOrigin", (function() {
        return nt
    })), r.d(t, "getDNT", (function() {
        return it
    })), r.d(t, "isAdUnitCodeMatchingSlot", (function() {
        return at
    })), r.d(t, "isSlotMatchingAdUnitCode", (function() {
        return st
    })), r.d(t, "getGptSlotInfoForAdUnitCode", (function() {
        return dt
    })), r.d(t, "unsupportedBidderMessage", (function() {
        return ut
    })), r.d(t, "deletePropertyFromObject", (function() {
        return ct
    })), r.d(t, "isInteger", (function() {
        return ft
    })), r.d(t, "convertCamelToUnderscore", (function() {
        return lt
    })), r.d(t, "cleanObj", (function() {
        return pt
    })), r.d(t, "pick", (function() {
        return gt
    })), r.d(t, "transformBidderParamKeywords", (function() {
        return mt
    })), r.d(t, "convertTypes", (function() {
        return vt
    })), r.d(t, "isArrayOfNums", (function() {
        return yt
    })), r.d(t, "fill", (function() {
        return bt
    })), r.d(t, "chunk", (function() {
        return ht
    })), r.d(t, "getMinValueFromArray", (function() {
        return At
    })), r.d(t, "getMaxValueFromArray", (function() {
        return Et
    })), r.d(t, "compareOn", (function() {
        return St
    })), r.d(t, "deepEqual", (function() {
        return Tt
    })), r.d(t, "deepAccess", (function() {
        return p
    })), r.d(t, "deepSetValue", (function() {
        return g
    }));
    var m = r(6),
        v = "Array",
        y = "String",
        b = "Function",
        h = "Number",
        A = "Object",
        E = "Boolean",
        S = Object.prototype.toString,
        T = Boolean(window.console),
        I = Boolean(T && window.console.log),
        _ = Boolean(T && window.console.info),
        w = Boolean(T && window.console.warn),
        O = Boolean(T && window.console.error),
        C = {
            checkCookieSupport: Je,
            createTrackPixelIframeHtml: _e,
            getWindowSelf: Y,
            getWindowTop: F,
            getWindowLocation: H,
            insertUserSyncIframe: Te,
            insertElement: he,
            isFn: ae,
            triggerPixel: Ae,
            logError: $,
            logWarn: X,
            logMessage: K,
            logInfo: J,
            deepEqual: Tt
        },
        P = {},
        j = function(e, t) {
            return t
        }.bind(null, 1, P)() === P ? Function.prototype.bind : function(e) {
            var t = this,
                r = Array.prototype.slice.call(arguments, 1);
            return function() {
                return t.apply(e, r.concat(Array.prototype.slice.call(arguments)))
            }
        };

    function R(e, t, r) {
        return ge(t, (function(t, n) {
            t = void 0 === t ? "" : t;
            var i = r + n.toUpperCase() + r,
                o = new RegExp(i, "g");
            e = e.replace(o, t)
        })), e
    }
    var x, B = (x = 0, function() {
        return ++x
    });

    function U() {
        return B() + Math.random().toString(16).substr(2)
    }

    function D(e) {
        return e ? (e ^ (window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random()) >> e / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, D)
    }

    function k(e, t) {
        return t && t[e] ? t[e] : ""
    }

    function N(e, t, r) {
        return r ? e + (t + "=") + encodeURIComponent(r) + "&" : e
    }

    function M(e) {
        var t = "";
        for (var r in e) e.hasOwnProperty(r) && (t += r + "=" + encodeURIComponent(e[r]) + "&");
        return t
    }

    function q(e) {
        return e && Object.getOwnPropertyNames(e).length > 0 ? Re(e).map((function(t) {
            return t + "=" + encodeURIComponent(xe(e, t))
        })).join("&") : ""
    }

    function W(e) {
        if (e) {
            var t = [];
            if (e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes)) {
                var r = e.mediaTypes.banner.sizes;
                Array.isArray(r[0]) ? t = r : t.push(r)
            } else Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? t = e.sizes : t.push(e.sizes));
            return t
        }
    }

    function G(e) {
        var t = [];
        if ("string" == typeof e) {
            var r = e.split(","),
                n = /^(\d)+x(\d)+$/i;
            if (r)
                for (var i in r) be(r, i) && r[i].match(n) && t.push(r[i])
        } else if ("object" == typeof e) {
            var o = e.length;
            if (o > 0)
                if (2 === o && "number" == typeof e[0] && "number" == typeof e[1]) t.push(z(e));
                else
                    for (var a = 0; a < o; a++) t.push(z(e[a]))
        }
        return t
    }

    function z(e) {
        if (V(e)) return e[0] + "x" + e[1]
    }

    function L(e) {
        if (V(e)) return {
            w: e[0],
            h: e[1]
        }
    }

    function V(e) {
        return de(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1])
    }

    function F() {
        return window.top
    }

    function Y() {
        return window.self
    }

    function H() {
        return window.location
    }

    function K() {
        ee() && I && console.log.apply(console, Q(arguments, "MESSAGE:"))
    }

    function J() {
        ee() && _ && console.info.apply(console, Q(arguments, "INFO:"))
    }

    function X() {
        ee() && w && console.warn.apply(console, Q(arguments, "WARNING:"))
    }

    function $() {
        ee() && O && console.error.apply(console, Q(arguments, "ERROR:"))
    }

    function Q(e, t) {
        return e = [].slice.call(e), t && e.unshift(t), e.unshift("display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;"), e.unshift("%cPrebid"), e
    }

    function Z() {
        return I
    }

    function ee() {
        return !!i.b.getConfig("debug")
    }

    function te() {
        var e = document.createElement("iframe");
        return e.id = U(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", e
    }

    function re(e) {
        var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search);
        return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
    }

    function ne(e, t, r) {
        var n = !1;

        function i(e, r) {
            r === t[o] && (n = !0)
        }
        for (var o = 0; o < t.length; o++)
            if (n = !1, ge(e, i), !n) return $("Params are missing for bid request. One of these required paramaters are missing: " + t, r), !1;
        return !0
    }

    function ie(e, t, r) {
        e.addEventListener ? e.addEventListener(t, r, !0) : e.attachEvent && e.attachEvent("on" + t, r)
    }

    function oe(e, t) {
        return S.call(e) === "[object " + t + "]"
    }

    function ae(e) {
        return oe(e, b)
    }

    function se(e) {
        return oe(e, y)
    }

    function de(e) {
        return oe(e, v)
    }

    function ue(e) {
        return oe(e, h)
    }

    function ce(e) {
        return oe(e, A)
    }

    function fe(e) {
        return oe(e, E)
    }

    function le(e) {
        if (!e) return !0;
        if (de(e) || se(e)) return !(e.length > 0);
        for (var t in e)
            if (hasOwnProperty.call(e, t)) return !1;
        return !0
    }

    function pe(e) {
        return se(e) && (!e || 0 === e.length)
    }

    function ge(e, t) {
        if (!le(e)) {
            if (ae(e.forEach)) return e.forEach(t, this);
            var r = 0,
                n = e.length;
            if (n > 0)
                for (; r < n; r++) t(e[r], r, e);
            else
                for (r in e) hasOwnProperty.call(e, r) && t.call(this, e[r], r)
        }
    }

    function me(e, t) {
        if (le(e)) return !1;
        if (ae(e.indexOf)) return -1 !== e.indexOf(t);
        for (var r = e.length; r--;)
            if (e[r] === t) return !0;
        return !1
    }
    var ve = function() {
        if (Array.prototype.indexOf) return Array.prototype.indexOf
    }();

    function ye(e, t) {
        if (le(e)) return [];
        if (ae(e.map)) return e.map(t);
        var r = [];
        return ge(e, (function(n, i) {
            r.push(t(n, i, e))
        })), r
    }

    function be(e, t) {
        return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t]
    }

    function he(e, t, r, n) {
        var i;
        t = t || document, i = r ? t.getElementsByTagName(r) : t.getElementsByTagName("head");
        try {
            if ((i = i.length ? i : t.getElementsByTagName("body")).length) {
                i = i[0];
                var o = n ? null : i.firstChild;
                return i.insertBefore(e, o)
            }
        } catch (e) {}
    }

    function Ae(e, t) {
        var r = new Image;
        t && C.isFn(t) && (r.addEventListener("load", t), r.addEventListener("error", t)), r.src = e
    }

    function Ee(e) {
        var t = e.source,
            r = e.burl;
        t === m.S2S.SRC && r && C.triggerPixel(r)
    }

    function Se(e) {
        if (e) {
            var t = document.createElement("iframe");
            t.id = U(), t.width = 0, t.height = 0, t.hspace = "0", t.vspace = "0", t.marginWidth = "0", t.marginHeight = "0", t.style.display = "none", t.style.height = "0px", t.style.width = "0px", t.scrolling = "no", t.frameBorder = "0", t.allowtransparency = "true", C.insertElement(t, document, "body"), t.contentWindow.document.open(), t.contentWindow.document.write(e), t.contentWindow.document.close()
        }
    }

    function Te(e, t) {
        var r = C.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"),
            n = document.createElement("div");
        n.innerHTML = r;
        var i = n.firstChild;
        t && C.isFn(t) && (i.addEventListener("load", t), i.addEventListener("error", t)), C.insertElement(i, document, "html", !0)
    }

    function Ie(e) {
        if (!e) return "";
        var t = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
        return t += '<img src="' + encodeURI(e) + '"></div>'
    }

    function _e(e, t, r) {
        return void 0 === t && (t = !0), void 0 === r && (r = ""), e ? (t && (e = encodeURI(e)), r && (r = 'sandbox="' + r + '"'), "<iframe " + r + ' id="' + U() + '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="' + e + '">\n    </iframe>') : ""
    }

    function we(e) {
        if (e) {
            var t;
            try {
                t = e.contentWindow ? e.contentWindow.document : e.contentDocument.document ? e.contentDocument.document : e.contentDocument
            } catch (e) {
                C.logError("Cannot get iframe document", e)
            }
            return t
        }
    }

    function Oe(e, t, r) {
        return null == t ? r : se(t) ? t : ue(t) ? t.toString() : void C.logWarn("Unsuported type for param: " + e + " required type: String")
    }

    function Ce(e, t, r) {
        return r.indexOf(e) === t
    }

    function Pe(e, t) {
        return e.concat(t)
    }

    function je(e, t) {
        var r;
        if (e) return t.some((function(t) {
            var n = c()(t.bids, (function(t) {
                return ["bidId", "adId", "bid_id"].some((function(r) {
                    return t[r] === e
                }))
            }));
            return n && (r = n), n
        })), r
    }

    function Re(e) {
        return Object.keys(e)
    }

    function xe(e, t) {
        return e[t]
    }

    function Be(e, t) {
        for (var r in e)
            if (e.hasOwnProperty(r) && e[r] === t) return r
    }

    function Ue(e) {
        return void 0 === e && (e = jwpb.adUnits), e.map((function(e) {
            return e.bids.map((function(e) {
                return e.bidder
            })).reduce(Pe, [])
        })).reduce(Pe).filter(Ce)
    }

    function De() {
        if (window.googletag && ae(window.googletag.pubads) && ae(window.googletag.pubads().getSlots)) return !0
    }
    var ke = qe("timeToRespond", (function(e, t) {
            return e > t
        })),
        Ne = qe("responseTimestamp", (function(e, t) {
            return e > t
        })),
        Me = qe("responseTimestamp", (function(e, t) {
            return e < t
        }));

    function qe(e, t) {
        return function(r, n) {
            return r.cpm === n.cpm ? t(r[e], n[e]) ? n : r : r.cpm < n.cpm ? n : r
        }
    }

    function We(e) {
        for (var t = e.length; t > 0;) {
            var r = Math.floor(Math.random() * t),
                n = e[--t];
            e[t] = e[r], e[r] = n
        }
        return e
    }

    function Ge(e, t) {
        return l()(e, t && t.adUnitCode)
    }

    function ze(e) {
        return e.defaultView && e.defaultView.frameElement && "srcdoc" in e.defaultView.frameElement && !/firefox/i.test(navigator.userAgent)
    }

    function Le(e) {
        return a()(e)
    }

    function Ve() {
        try {
            return C.getWindowSelf() !== C.getWindowTop()
        } catch (e) {
            return !0
        }
    }

    function Fe() {
        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    }

    function Ye(e, t) {
        if (e) return e.replace(/\$\{AUCTION_PRICE\}/g, t)
    }

    function He() {
        return (new Date).getTime()
    }

    function Ke() {
        return !1 !== i.b.getConfig("deviceAccess")
    }

    function Je() {
        if (window.navigator.cookieEnabled || document.cookie.length) return !0
    }

    function Xe(e, t) {
        if (t < 1) throw new Error("numRequiredCalls must be a positive number. Got " + t);
        var r = 0;
        return function() {
            ++r === t && e.apply(this, arguments)
        }
    }

    function $e(e, t) {
        return e.reduce((function(e, r) {
            return (e[r[t]] = e[r[t]] || []).push(r), e
        }), {})
    }

    function Qe(e) {
        return e ? '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;<\/script></head><body>\x3c!--PRE_SCRIPT_TAG_MACRO--\x3e<script src="' + e + '"><\/script>\x3c!--POST_SCRIPT_TAG_MACRO--\x3e</body></html>' : ""
    }

    function Ze(e, t) {
        return t.filter((function(t) {
            return e[t]
        })).reduce((function(t, r) {
            var i;
            return Object(n.default)(t, ((i = {})[r] = e[r], i))
        }), {})
    }

    function et(e) {
        var t = ["banner", "native", "video"];
        return !!Object.keys(e).every((function(e) {
            return l()(t, e)
        })) && (!e.video || !e.video.context || l()(["instream", "outstream", "adpod"], e.video.context))
    }

    function tt(e, t, r) {
        return c()(e, (function(e) {
            return e.bids.filter((function(e) {
                return e.bidder === t && e.adUnitCode === r
            })).length > 0
        })) || {
            start: null,
            auctionId: null
        }
    }

    function rt(e, t, r) {
        return e.filter((function(e) {
            return e.code === t
        })).map((function(e) {
            return e.bids
        })).reduce(Pe, []).filter((function(e) {
            return e.bidder === r
        })).map((function(e) {
            return e.params || {}
        }))
    }

    function nt() {
        return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
    }

    function it() {
        return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack
    }
    var ot = function(e, t) {
        return e.getAdUnitPath() === t || e.getSlotElementId() === t
    };

    function at(e) {
        return function(t) {
            return ot(e, t)
        }
    }

    function st(e) {
        return function(t) {
            return ot(t, e)
        }
    }

    function dt(e) {
        var t;
        return De() && (t = c()(window.googletag.pubads().getSlots(), st(e))), t ? {
            gptSlot: t.getAdUnitPath(),
            divId: t.getSlotElementId()
        } : {}
    }

    function ut(e, t) {
        var r = Object.keys(e.mediaTypes || {
            banner: "banner"
        }).join(", ");
        return "\n    " + e.code + " is a " + r + " ad unit\n    containing bidders that don't support " + r + ": " + t + ".\n    This bidder won't fetch demand.\n  "
    }

    function ct(e, t) {
        var r = Object(n.default)({}, e);
        return delete r[t], r
    }

    function ft(e) {
        return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e
    }

    function lt(e) {
        return e.replace(/(?:^|\.?)([A-Z])/g, (function(e, t) {
            return "_" + t.toLowerCase()
        })).replace(/^_/, "")
    }

    function pt(e) {
        return Object.keys(e).reduce((function(t, r) {
            return void 0 !== e[r] && (t[r] = e[r]), t
        }), {})
    }

    function gt(e, t) {
        return "object" != typeof e ? {} : t.reduce((function(r, n, i) {
            if ("function" == typeof n) return r;
            var o = n,
                a = n.match(/^(.+?)\sas\s(.+?)$/i);
            a && (n = a[1], o = a[2]);
            var s = e[n];
            return "function" == typeof t[i + 1] && (s = t[i + 1](s, r)), void 0 !== s && (r[o] = s), r
        }), {})
    }

    function mt(e, t) {
        void 0 === t && (t = "keywords");
        var r = [];
        return ge(e, (function(e, n) {
            if (de(e)) {
                var i = [];
                ge(e, (function(e) {
                    ((e = Oe(t + "." + n, e)) || "" === e) && i.push(e)
                })), e = i
            } else {
                if (!se(e = Oe(t + "." + n, e))) return;
                e = [e]
            }
            r.push({
                key: n,
                value: e
            })
        })), r
    }

    function vt(e, t) {
        return Object.keys(e).forEach((function(r) {
            var n, i;
            t[r] && (ae(e[r]) ? t[r] = e[r](t[r]) : t[r] = (n = e[r], i = t[r], "string" === n ? i && i.toString() : "number" === n ? Number(i) : i), isNaN(t[r]) && delete t.key)
        })), t
    }

    function yt(e, t) {
        return de(e) && (!t || e.length === t) && e.every((function(e) {
            return ft(e)
        }))
    }

    function bt(e, t) {
        for (var r = [], n = 0; n < t; n++) {
            var i = ce(e) ? Le(e) : e;
            r.push(i)
        }
        return r
    }

    function ht(e, t) {
        for (var r = [], n = 0; n < Math.ceil(e.length / t); n++) {
            var i = n * t,
                o = i + t;
            r.push(e.slice(i, o))
        }
        return r
    }

    function At(e) {
        return Math.min.apply(Math, e)
    }

    function Et(e) {
        return Math.max.apply(Math, e)
    }

    function St(e) {
        return function(t, r) {
            return t[e] < r[e] ? 1 : t[e] > r[e] ? -1 : 0
        }
    }

    function Tt(e, t) {
        return d()(e, t)
    }
}, function(e, t, r) {
    "use strict";

    function n() {
        return (n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }).apply(this, arguments)
    }
    r.r(t), r.d(t, "default", (function() {
        return n
    }))
}, function(e, t, r) {
    "use strict";
    r.d(t, "a", (function() {
        return T
    })), r.d(t, "b", (function() {
        return C
    }));
    var n = r(1),
        i = r(37),
        o = r(5),
        a = r.n(o),
        s = r(3),
        d = r.n(s),
        u = r(74),
        c = r.n(u),
        f = r(8),
        l = r(108),
        p = r(0),
        g = r(6),
        m = "TRUE" === (Object(f.d)(window.location.search)[g.DEBUG_MODE] || "").toUpperCase(),
        v = 3e3,
        y = window.location.origin,
        b = !0,
        h = !1,
        A = !1,
        E = !0,
        S = 400,
        T = "random",
        I = {};
    I[T] = !0, I.fixed = !0;
    var _ = T,
        w = {
            LOW: "low",
            MEDIUM: "medium",
            HIGH: "high",
            AUTO: "auto",
            DENSE: "dense",
            CUSTOM: "custom"
        },
        O = "*";
    var C = function() {
        var e, t, r, o = [],
            s = null;

        function u() {
            e = {};
            var n = {
                _debug: m,
                get debug() {
                    return this._debug
                },
                set debug(e) {
                    this._debug = e
                },
                _bidderTimeout: v,
                get bidderTimeout() {
                    return this._bidderTimeout
                },
                set bidderTimeout(e) {
                    this._bidderTimeout = e
                },
                _publisherDomain: y,
                get publisherDomain() {
                    return this._publisherDomain
                },
                set publisherDomain(e) {
                    this._publisherDomain = e
                },
                _priceGranularity: w.MEDIUM,
                set priceGranularity(e) {
                    s(e) && ("string" == typeof e ? this._priceGranularity = o(e) ? e : w.MEDIUM : p.isPlainObject(e) && (this._customPriceBucket = e, this._priceGranularity = w.CUSTOM, p.logMessage("Using custom price granularity")))
                },
                get priceGranularity() {
                    return this._priceGranularity
                },
                _customPriceBucket: {},
                get customPriceBucket() {
                    return this._customPriceBucket
                },
                _mediaTypePriceGranularity: {},
                get mediaTypePriceGranularity() {
                    return this._mediaTypePriceGranularity
                },
                set mediaTypePriceGranularity(e) {
                    var t = this;
                    this._mediaTypePriceGranularity = Object.keys(e).reduce((function(r, n) {
                        return s(e[n]) ? "string" == typeof e ? r[n] = o(e[n]) ? e[n] : t._priceGranularity : p.isPlainObject(e) && (r[n] = e[n], p.logMessage("Using custom price granularity for " + n)) : p.logWarn("Invalid price granularity for media type: " + n), r
                    }), {})
                },
                _sendAllBids: b,
                get enableSendAllBids() {
                    return this._sendAllBids
                },
                set enableSendAllBids(e) {
                    this._sendAllBids = e
                },
                _useBidCache: A,
                get useBidCache() {
                    return this._useBidCache
                },
                set useBidCache(e) {
                    this._useBidCache = e
                },
                _deviceAccess: E,
                get deviceAccess() {
                    return this._deviceAccess
                },
                set deviceAccess(e) {
                    this._deviceAccess = e
                },
                _bidderSequence: _,
                get bidderSequence() {
                    return this._bidderSequence
                },
                set bidderSequence(e) {
                    I[e] ? this._bidderSequence = e : p.logWarn("Invalid order: " + e + ". Bidder Sequence was not set.")
                },
                _timeoutBuffer: S,
                get timeoutBuffer() {
                    return this._timeoutBuffer
                },
                set timeoutBuffer(e) {
                    this._timeoutBuffer = e
                },
                _disableAjaxTimeout: h,
                get disableAjaxTimeout() {
                    return this._disableAjaxTimeout
                },
                set disableAjaxTimeout(e) {
                    this._disableAjaxTimeout = e
                }
            };

            function o(e) {
                return a()(Object.keys(w), (function(t) {
                    return e === w[t]
                }))
            }

            function s(e) {
                if (!e) return p.logError("Prebid Error: no value passed to `setPriceGranularity()`"), !1;
                if ("string" == typeof e) o(e) || p.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");
                else if (p.isPlainObject(e) && !Object(i.b)(e)) return p.logError("Invalid custom price value passed to `setPriceGranularity()`"), !1;
                return !0
            }
            t && T(Object.keys(t).reduce((function(e, r) {
                return t[r] !== n[r] && (e[r] = n[r] || {}), e
            }), {})), t = n, r = {}
        }

        function f() {
            if (s && r && p.isPlainObject(r[s])) {
                var e = r[s],
                    i = new c.a(Object.keys(t).concat(Object.keys(e)));
                return l(i).reduce((function(r, i) {
                    return void 0 === e[i] ? r[i] = t[i] : void 0 === t[i] ? r[i] = e[i] : p.isPlainObject(e[i]) ? r[i] = Object(n.default)({}, t[i], e[i]) : r[i] = e[i], r
                }), {})
            }
            return Object(n.default)({}, t)
        }

        function g(e, t) {
            var r = t;
            if ("string" != typeof e && (r = e, e = O), "function" == typeof r) {
                var n = {
                    topic: e,
                    callback: r
                };
                return o.push(n),
                    function() {
                        o.splice(o.indexOf(n), 1)
                    }
            }
            p.logError("listener must be a function")
        }

        function T(e) {
            var t = Object.keys(e);
            o.filter((function(e) {
                return d()(t, e.topic)
            })).forEach((function(t) {
                var r;
                t.callback(((r = {})[t.topic] = e[t.topic], r))
            })), o.filter((function(e) {
                return e.topic === O
            })).forEach((function(t) {
                return t.callback(e)
            }))
        }

        function C(e, t) {
            s = e;
            try {
                return t()
            } finally {
                s = null
            }
        }
        return u(), {
            getCurrentBidder: function() {
                return s
            },
            getConfig: function() {
                if (arguments.length <= 1 && "function" != typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
                    var e = arguments.length <= 0 ? void 0 : arguments[0];
                    return e ? p.deepAccess(f(), e) : f()
                }
                return g.apply(void 0, arguments)
            },
            setConfig: function(r) {
                if (p.isPlainObject(r)) {
                    var i = Object.keys(r),
                        o = {};
                    i.forEach((function(i) {
                        var a = r[i];
                        p.isPlainObject(e[i]) && p.isPlainObject(a) && (a = Object(n.default)({}, e[i], a)), o[i] = t[i] = a
                    })), T(o)
                } else p.logError("setConfig options must be an object")
            },
            setDefaults: function(r) {
                p.isPlainObject(e) ? (Object(n.default)(e, r), Object(n.default)(t, r)) : p.logError("defaults must be an object")
            },
            resetConfig: u,
            runWithBidder: C,
            callbackWithBidder: function(e) {
                return function(t) {
                    return function() {
                        if ("function" == typeof t) {
                            for (var r, n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                            return C(e, (r = p.bind).call.apply(r, [t, this].concat(i)))
                        }
                        p.logWarn("config.callbackWithBidder callback is not a function")
                    }
                }
            },
            setBidderConfig: function(e) {
                try {
                    ! function(e) {
                        if (!p.isPlainObject(e)) throw "setBidderConfig bidder options must be an object";
                        if (!Array.isArray(e.bidders) || !e.bidders.length) throw "setBidderConfig bidder options must contain a bidders list with at least 1 bidder";
                        if (!p.isPlainObject(e.config)) throw "setBidderConfig bidder options must contain a config object"
                    }(e), e.bidders.forEach((function(t) {
                        r[t] || (r[t] = {}), Object.keys(e.config).forEach((function(i) {
                            var o = e.config[i];
                            p.isPlainObject(o) ? r[t][i] = Object(n.default)({}, r[t][i] || {}, o) : r[t][i] = o
                        }))
                    }))
                } catch (e) {
                    p.logError(e)
                }
            },
            getBidderConfig: function() {
                return r
            }
        }
    }()
}, function(e, t, r) {
    r(84), e.exports = r(14).Array.includes
}, function(e, t, r) {
    "use strict";
    r.d(t, "c", (function() {
        return n
    })), r.d(t, "d", (function() {
        return i
    })), r.d(t, "b", (function() {
        return o
    })), r.d(t, "a", (function() {
        return a
    }));
    var n = "native",
        i = "video",
        o = "banner",
        a = "adpod"
}, function(e, t, r) {
    r(78), e.exports = r(14).Array.find
}, function(e) {
    e.exports = JSON.parse('{"JSON_MAPPING":{"PL_CODE":"code","PL_SIZE":"sizes","PL_BIDS":"bids","BD_BIDDER":"bidder","BD_ID":"paramsd","BD_PL_ID":"placementId","ADSERVER_TARGETING":"adserverTargeting","BD_SETTING_STANDARD":"standard"},"DEBUG_MODE":"pbjs_debug","STATUS":{"GOOD":1,"NO_BID":2},"CB":{"TYPE":{"ALL_BIDS_BACK":"allRequestedBidsBack","AD_UNIT_BIDS_BACK":"adUnitBidsBack","BID_WON":"bidWon","REQUEST_BIDS":"requestBids"}},"EVENTS":{"AUCTION_INIT":"auctionInit","AUCTION_END":"auctionEnd","BID_ADJUSTMENT":"bidAdjustment","BID_TIMEOUT":"bidTimeout","BID_REQUESTED":"bidRequested","BID_RESPONSE":"bidResponse","NO_BID":"noBid","BID_WON":"bidWon","BIDDER_DONE":"bidderDone","SET_TARGETING":"setTargeting","BEFORE_REQUEST_BIDS":"beforeRequestBids","REQUEST_BIDS":"requestBids","ADD_AD_UNITS":"addAdUnits","AD_RENDER_FAILED":"adRenderFailed"},"AD_RENDER_FAILED_REASON":{"PREVENT_WRITING_ON_MAIN_DOCUMENT":"preventWritingOnMainDocuemnt","NO_AD":"noAd","EXCEPTION":"exception","CANNOT_FIND_AD":"cannotFindAd","MISSING_DOC_OR_ADID":"missingDocOrAdid"},"EVENT_ID_PATHS":{"bidWon":"adUnitCode"},"GRANULARITY_OPTIONS":{"LOW":"low","MEDIUM":"medium","HIGH":"high","AUTO":"auto","DENSE":"dense","CUSTOM":"custom"},"TARGETING_KEYS":{"BIDDER":"hb_bidder","AD_ID":"hb_adid","PRICE_BUCKET":"hb_pb","SIZE":"hb_size","DEAL":"hb_deal","SOURCE":"hb_source","FORMAT":"hb_format","UUID":"hb_uuid","CACHE_ID":"hb_cache_id","CACHE_HOST":"hb_cache_host"},"NATIVE_KEYS":{"title":"hb_native_title","body":"hb_native_body","body2":"hb_native_body2","privacyLink":"hb_native_privacy","privacyIcon":"hb_native_privicon","sponsoredBy":"hb_native_brand","image":"hb_native_image","icon":"hb_native_icon","clickUrl":"hb_native_linkurl","displayUrl":"hb_native_displayurl","cta":"hb_native_cta","rating":"hb_native_rating","address":"hb_native_address","downloads":"hb_native_downloads","likes":"hb_native_likes","phone":"hb_native_phone","price":"hb_native_price","salePrice":"hb_native_saleprice"},"S2S":{"SRC":"s2s","DEFAULT_ENDPOINT":"https://prebid.adnxs.com/pbs/v1/openrtb2/auction","SYNCED_BIDDERS_KEY":"pbjsSyncs"},"BID_STATUS":{"BID_TARGETING_SET":"targetingSet","RENDERED":"rendered","BID_REJECTED":"bidRejected"},"SUBMODULES_THAT_ALWAYS_REFRESH_ID":{"parrableId":true}}')
}, function(e, t, r) {
    "use strict";
    r.d(t, "b", (function() {
        return o
    })), r.d(t, "a", (function() {
        return a
    })), r.d(t, "c", (function() {
        return s
    }));
    var n = r(31),
        i = r.n(n),
        o = i()({
            ready: i.a.SYNC | i.a.ASYNC | i.a.QUEUE
        }),
        a = o.get;

    function s(e) {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        a(e).before((function(e, t) {
            t.push(r), e(t)
        }))
    }
}, function(e, t, r) {
    "use strict";

    function n(e) {
        return e ? e.replace(/^\?/, "").split("&").reduce((function(e, t) {
            var r = t.split("="),
                n = r[0],
                i = r[1];
            return /\[\]$/.test(n) ? (e[n = n.replace("[]", "")] = e[n] || [], e[n].push(i)) : e[n] = i || "", e
        }), {}) : {}
    }

    function i(e) {
        return Object.keys(e).map((function(t) {
            return Array.isArray(e[t]) ? e[t].map((function(e) {
                return t + "[]=" + e
            })).join("&") : t + "=" + e[t]
        })).join("&")
    }

    function o(e, t) {
        var r = document.createElement("a");
        t && "noDecodeWholeURL" in t && t.noDecodeWholeURL ? r.href = e : r.href = decodeURIComponent(e);
        var i = t && "decodeSearchAsString" in t && t.decodeSearchAsString;
        return {
            href: r.href,
            protocol: (r.protocol || "").replace(/:$/, ""),
            hostname: r.hostname,
            port: +r.port,
            pathname: r.pathname.replace(/^(?!\/)/, "/"),
            search: i ? r.search : n(r.search || ""),
            hash: (r.hash || "").replace(/^#/, ""),
            host: r.host || window.location.host
        }
    }

    function a(e) {
        return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":" + e.port : "")) + (e.pathname || "") + (e.search ? "?" + i(e.search || "") : "") + (e.hash ? "#" + e.hash : "")
    }
    r.d(t, "d", (function() {
        return n
    })), r.d(t, "b", (function() {
        return i
    })), r.d(t, "c", (function() {
        return o
    })), r.d(t, "a", (function() {
        return a
    }))
}, function(e, t, r) {
    "use strict";
    r.d(t, "e", (function() {
        return s
    })), r.d(t, "a", (function() {
        return d
    })), r.d(t, "g", (function() {
        return c
    })), r.d(t, "f", (function() {
        return f
    })), r.d(t, "b", (function() {
        return l
    })), r.d(t, "d", (function() {
        return p
    })), r.d(t, "c", (function() {
        return g
    }));
    var n = r(0),
        i = r(3),
        o = r.n(i),
        a = r(6),
        s = [],
        d = Object.keys(a.NATIVE_KEYS).map((function(e) {
            return a.NATIVE_KEYS[e]
        })),
        u = {
            image: {
                image: {
                    required: !0
                },
                title: {
                    required: !0
                },
                sponsoredBy: {
                    required: !0
                },
                clickUrl: {
                    required: !0
                },
                body: {
                    required: !1
                },
                icon: {
                    required: !1
                }
            }
        };

    function c(e) {
        return e && e.type && function(e) {
            if (!e || !o()(Object.keys(u), e)) return Object(n.logError)(e + " nativeParam is not supported"), !1;
            return !0
        }(e.type) ? u[e.type] : e
    }

    function f(e, t) {
        var r = Object(n.getBidRequest)(e.requestId, t);
        if (!r) return !1;
        if (!Object(n.deepAccess)(e, "native.clickUrl")) return !1;
        if (Object(n.deepAccess)(e, "native.image") && (!Object(n.deepAccess)(e, "native.image.height") || !Object(n.deepAccess)(e, "native.image.width"))) return !1;
        if (Object(n.deepAccess)(e, "native.icon") && (!Object(n.deepAccess)(e, "native.icon.height") || !Object(n.deepAccess)(e, "native.icon.width"))) return !1;
        var i = r.nativeParams;
        if (!i) return !0;
        var a = Object.keys(i).filter((function(e) {
                return i[e].required
            })),
            s = Object.keys(e.native).filter((function(t) {
                return e.native[t]
            }));
        return a.every((function(e) {
            return o()(s, e)
        }))
    }

    function l(e, t) {
        var r;
        return "click" === e.action ? r = t.native && t.native.clickTrackers : (r = t.native && t.native.impressionTrackers, t.native && t.native.javascriptTrackers && Object(n.insertHtmlIntoIframe)(t.native.javascriptTrackers)), (r || []).forEach(n.triggerPixel), e.action
    }

    function p(e, t) {
        var r = {};
        return Object.keys(e.native).forEach((function(i) {
            var o = a.NATIVE_KEYS[i],
                s = m(e.native[i]);
            Object(n.deepAccess)(t, "mediaTypes.native." + i + ".sendId") && (s = o + ":" + e.adId);
            o && s && (r[o] = s)
        })), r
    }

    function g(e, t) {
        var r = {
            message: "assetResponse",
            adId: e.adId,
            assets: []
        };
        return e.assets.forEach((function(e) {
            var i = Object(n.getKeyByValue)(a.NATIVE_KEYS, e),
                o = m(t.native[i]);
            r.assets.push({
                key: i,
                value: o
            })
        })), r
    }

    function m(e) {
        return "object" == typeof e && e.url ? e.url : e
    }
}, function(e, t, r) {
    "use strict";
    var n = r(1);

    function i(e) {
        var t = e;
        return {
            callBids: function() {},
            setBidderCode: function(e) {
                t = e
            },
            getBidderCode: function() {
                return t
            }
        }
    }
    var o = r(11),
        a = r(2),
        s = r(27),
        d = r(25),
        u = r(9),
        c = r(38),
        f = r(6),
        l = r(18),
        p = r.n(l),
        g = r(3),
        m = r.n(g),
        v = r(22),
        y = r(0),
        b = r(4),
        h = r(7),
        A = r(26);
    r.d(t, "b", (function() {
        return I
    })), r.d(t, "a", (function() {
        return _
    }));
    var E = Object(A.a)("bidderFactory"),
        S = ["requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency"],
        T = 1;

    function I(e) {
        var t = Array.isArray(e.supportedMediaTypes) ? {
            supportedMediaTypes: e.supportedMediaTypes
        } : void 0;

        function r(e) {
            var r = _(e);
            o.default.registerBidAdapter(r, e.code, t)
        }
        r(e), Array.isArray(e.aliases) && e.aliases.forEach((function(t) {
            o.default.aliasRegistry[t] = e.code, r(Object(n.default)({}, e, {
                code: t
            }))
        }))
    }

    function _(e) {
        return Object(n.default)(new i(e.code), {
            getSpec: function() {
                return Object.freeze(e)
            },
            registerSyncs: t,
            callBids: function(i, o, a, d, l, g) {
                if (Array.isArray(i.bids)) {
                    var v = {},
                        b = [],
                        h = i.bids.filter(r);
                    if (0 !== h.length) {
                        var A = {};
                        h.forEach((function(e) {
                            A[e.bidId] = e, e.adUnitCode || (e.adUnitCode = e.placementCode)
                        }));
                        var E = e.buildRequests(h, i);
                        if (E && 0 !== E.length) {
                            Array.isArray(E) || (E = [E]);
                            var T = Object(y.delayExecution)(g(_), E.length);
                            E.forEach((function(t) {
                                switch (t.method) {
                                    case "GET":
                                        d("" + t.url + function(e) {
                                            if (e) return "?" + ("object" == typeof e ? Object(y.parseQueryStringParameters)(e) : e);
                                            return ""
                                        }(t.data), {
                                            success: g(r),
                                            error: i
                                        }, void 0, Object(n.default)({
                                            method: "GET",
                                            withCredentials: !0
                                        }, t.options));
                                        break;
                                    case "POST":
                                        d(t.url, {
                                            success: g(r),
                                            error: i
                                        }, "string" == typeof t.data ? t.data : JSON.stringify(t.data), Object(n.default)({
                                            method: "POST",
                                            contentType: "text/plain",
                                            withCredentials: !0
                                        }, t.options));
                                        break;
                                    default:
                                        Object(y.logWarn)("Skipping invalid request from " + e.code + ". Request type " + t.type + " must be GET or POST"), T()
                                }

                                function r(r, i) {
                                    l(e.code);
                                    try {
                                        r = JSON.parse(r)
                                    } catch (e) {}
                                    var o;
                                    r = {
                                        body: r,
                                        headers: {
                                            get: i.getResponseHeader.bind(i)
                                        }
                                    }, b.push(r);
                                    try {
                                        o = e.interpretResponse(r, t)
                                    } catch (t) {
                                        return Object(y.logError)("Bidder " + e.code + " failed to interpret the server's response. Continuing without bids", null, t), void T()
                                    }

                                    function a(t) {
                                        var r = A[t.requestId];
                                        if (r) {
                                            t.originalCpm = t.cpm, t.originalCurrency = t.currency;
                                            var i = Object(n.default)(Object(s.a)(f.STATUS.GOOD, r), t);
                                            I(r.adUnitCode, i)
                                        } else Object(y.logWarn)("Bidder " + e.code + " made bid for unknown request ID: " + t.requestId + ". Ignoring.")
                                    }
                                    o && (Object(y.isArray)(o) ? o.forEach(a) : a(o)), T(o)
                                }

                                function i(t) {
                                    l(e.code), Object(y.logError)("Server call for " + e.code + " failed: " + t + ". Continuing without bids."), T()
                                }
                            }))
                        } else _()
                    } else _()
                }

                function I(e, t) {
                    v[e] = !0,
                        function(e, t, r) {
                            function n(e) {
                                return "Invalid bid from " + t.bidderCode + ". Ignoring bid: " + e
                            }
                            if (!e) return Object(y.logWarn)("No adUnitCode was supplied to addBidResponse."), !1;
                            if (!t) return Object(y.logWarn)("Some adapter tried to add an undefined bid for " + e + "."), !1;
                            if (i = Object.keys(t), !S.every((function(e) {
                                    return m()(i, e) && !m()([void 0, null], t[e])
                                }))) return Object(y.logError)(n("Bidder " + t.bidderCode + " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params.")), !1;
                            var i;
                            if ("native" === t.mediaType && !Object(u.f)(t, r)) return Object(y.logError)(n("Native bid missing some required properties.")), !1;
                            if ("video" === t.mediaType && !Object(c.b)(t, r)) return Object(y.logError)(n("Video bid does not have required vastUrl or renderer property")), !1;
                            if ("banner" === t.mediaType && ! function(e, t, r) {
                                    if ((t.width || 0 === parseInt(t.width, 10)) && (t.height || 0 === parseInt(t.height, 10))) return t.width = parseInt(t.width, 10), t.height = parseInt(t.height, 10), !0;
                                    var n = Object(y.getBidderRequest)(r, t.bidderCode, e),
                                        i = n && n.bids && n.bids[0] && n.bids[0].sizes,
                                        o = Object(y.parseSizesInput)(i);
                                    if (1 === o.length) {
                                        var a = o[0].split("x"),
                                            s = a[0],
                                            d = a[1];
                                        return t.width = parseInt(s, 10), t.height = parseInt(d, 10), !0
                                    }
                                    return !1
                                }(e, t, r)) return Object(y.logError)(n("Banner bids require a width and height")), !1;
                            return !0
                        }(e, t, [i]) && o(e, t)
                }

                function _() {
                    a(), p.a.emit(f.EVENTS.BIDDER_DONE, i), t(b, i.gdprConsent, i.uspConsent)
                }
            }
        });

        function t(t, r, n) {
            w(e, t, r, n)
        }

        function r(t) {
            return !!e.isBidRequestValid(t) || (Object(y.logWarn)("Invalid bid sent to bidder " + e.code + ": " + JSON.stringify(t)), !1)
        }
    }
    var w = Object(h.b)("async", (function(e, t, r, n) {
        var i = a.b.getConfig("userSync.aliasSyncEnabled");
        if (e.getUserSyncs && (i || !o.default.aliasRegistry[e.code])) {
            var s = a.b.getConfig("userSync.filterSettings"),
                u = e.getUserSyncs({
                    iframeEnabled: !(!s || !s.iframe && !s.all),
                    pixelEnabled: !(!s || !s.image && !s.all)
                }, t, r, n);
            u && (Array.isArray(u) || (u = [u]), u.forEach((function(t) {
                d.a.registerSync(t.type, e.code, t.url)
            })))
        }
    }), "registerSyncs");
    Object(h.a)("checkAdUnitSetup").before((function(e, t) {
        if (!a.b.getConfig("adpod.brandCategoryExclusion")) return e.call(this, t);
        t.filter((function(e) {
            return Object(y.deepAccess)(e, "mediaTypes.video.context") === b.a
        })).map((function(e) {
            return e.bids.map((function(e) {
                return e.bidder
            }))
        })).reduce(y.flatten, []).filter(y.uniques).forEach((function(e) {
            var t = o.default.getBidAdapter(e);
            if (t.getSpec().getMappingFileInfo) {
                var r = t.getSpec().getMappingFileInfo(),
                    n = r.refreshInDays ? r.refreshInDays : T,
                    i = r.localStorageKey ? r.localStorageKey : t.getSpec().code,
                    a = E.getDataFromLocalStorage(i);
                (!a || Object(y.timestamp)() < a.lastUpdated + 24 * n * 60 * 60 * 1e3) && Object(v.a)(r.url, {
                    success: function(t) {
                        try {
                            t = JSON.parse(t);
                            var r = {
                                lastUpdated: Object(y.timestamp)(),
                                mapping: t.mapping
                            };
                            E.setDataInLocalStorage(i, JSON.stringify(r))
                        } catch (t) {
                            Object(y.logError)("Failed to parse " + e + " bidder translation mapping file")
                        }
                    },
                    error: function() {
                        Object(y.logError)("Failed to load " + e + " bidder translation file")
                    }
                })
            }
        })), e.call(this, t)
    }))
}, function(e, t, r) {
    "use strict";
    r.r(t);
    var n = r(1),
        i = r(0),
        o = r(23),
        a = r(9),
        s = r(10),
        d = r(22),
        u = r(2),
        c = r(7),
        f = r(3),
        l = r.n(f),
        p = r(5),
        g = r.n(p),
        m = r(19);
    var v = function(e) {
        function t() {
            var t = function() {
                    var t, o = [];
                    do {
                        try {
                            t = t ? t.parent : e;
                            try {
                                var a = t == e.top,
                                    s = {
                                        referrer: t.document.referrer || null,
                                        location: t.location.href || null,
                                        isTop: a
                                    };
                                a && (s = Object(n.default)(s, {
                                    canonicalUrl: r(t.document)
                                })), o.push(s)
                            } catch (r) {
                                o.push({
                                    referrer: null,
                                    location: null,
                                    isTop: t == e.top
                                }), Object(i.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location")
                            }
                        } catch (e) {
                            return o.push({
                                referrer: null,
                                location: null,
                                isTop: !1
                            }), o
                        }
                    } while (t != e.top);
                    return o
                }(),
                o = function() {
                    try {
                        if (!e.location.ancestorOrigins) return;
                        return e.location.ancestorOrigins
                    } catch (e) {}
                }();
            if (o)
                for (var a = 0, s = o.length; a < s; a++) t[a].ancestor = o[a];
            return t
        }

        function r(e) {
            try {
                var t = e.querySelector("link[rel='canonical']");
                if (null !== t) return t.href
            } catch (e) {}
            return null
        }
        return function() {
            try {
                var e, r = t(),
                    n = r.length - 1,
                    i = null !== r[n].location || n > 0 && null !== r[n - 1].referrer,
                    o = function(e) {
                        var t, r = [],
                            n = null,
                            i = null,
                            o = null,
                            a = null,
                            s = null;
                        for (t = e.length - 1; t >= 0; t--) {
                            try {
                                n = e[t].location
                            } catch (e) {}
                            if (n) r.push(n), s || (s = n);
                            else if (0 !== t) {
                                i = e[t - 1];
                                try {
                                    o = i.referrer, a = i.ancestor
                                } catch (e) {}
                                o ? (r.push(o), s || (s = o)) : a ? (r.push(a), s || (s = a)) : r.push(null)
                            } else r.push(null)
                        }
                        return {
                            stack: r,
                            detectedRefererUrl: s
                        }
                    }(r);
                return r[r.length - 1].canonicalUrl && (e = r[r.length - 1].canonicalUrl), {
                    referer: o.detectedRefererUrl,
                    reachedTop: i,
                    numIframes: n,
                    stack: o.stack,
                    canonicalUrl: e
                }
            } catch (e) {}
        }
    }(window);
    r.d(t, "gdprDataHandler", (function() {
        return O
    })), r.d(t, "uspDataHandler", (function() {
        return C
    })), r.d(t, "setS2STestingModule", (function() {
        return j
    }));
    var y, b = r(0),
        h = r(6),
        A = r(18),
        E = {},
        S = E.bidderRegistry = {},
        T = E.aliasRegistry = {},
        I = {};
    u.b.getConfig("s2sConfig", (function(e) {
        I = e.s2sConfig
    }));
    var _ = {};
    var w = Object(c.b)("sync", (function(e) {
        var t = e.bidderCode,
            r = e.auctionId,
            s = e.bidderRequestId,
            d = e.adUnits,
            u = e.labels,
            c = e.src;
        return d.reduce((function(e, d) {
            var f = Object(o.b)(Object(o.a)(d, u), d.mediaTypes, d.sizes),
                l = f.active,
                p = f.mediaTypes,
                g = f.filterResults;
            return l ? g && b.logInfo('Size mapping filtered adUnit "' + d.code + '" banner sizes from ', g.before, "to ", g.after) : b.logInfo('Size mapping disabled adUnit "' + d.code + '"'), l && e.push(d.bids.filter((function(e) {
                return e.bidder === t
            })).reduce((function(e, t) {
                var f = d.nativeParams || b.deepAccess(d, "mediaTypes.native");
                f && (t = Object(n.default)({}, t, {
                    nativeParams: Object(a.g)(f)
                })), t = Object(n.default)({}, t, Object(i.getDefinedParams)(d, ["fpd", "mediaType", "renderer", "storedAuctionResponse"]));
                var l = Object(o.b)(Object(o.a)(t, u), p),
                    g = l.active,
                    v = l.mediaTypes,
                    y = l.filterResults;
                return g ? y && b.logInfo('Size mapping filtered adUnit "' + d.code + '" bidder "' + t.bidder + '" banner sizes from ', y.before, "to ", y.after) : b.logInfo('Size mapping deactivated adUnit "' + d.code + '" bidder "' + t.bidder + '"'), b.isValidMediaTypes(v) ? t = Object(n.default)({}, t, {
                    mediaTypes: v
                }) : b.logError("mediaTypes is not correctly configured for adunit " + d.code), g && e.push(Object(n.default)({}, t, {
                    adUnitCode: d.code,
                    transactionId: d.transactionId,
                    sizes: b.deepAccess(v, "banner.sizes") || b.deepAccess(v, "video.playerSize") || [],
                    bidId: t.bid_id || b.getUniqueIdentifierStr(),
                    bidderRequestId: s,
                    auctionId: r,
                    src: c,
                    bidRequestsCount: m.a.getRequestsCounter(d.code),
                    bidderRequestsCount: m.a.getBidderRequestsCounter(d.code, t.bidder),
                    bidderWinsCount: m.a.getBidderWinsCounter(d.code, t.bidder)
                })), e
            }), [])), e
        }), []).reduce(i.flatten, []).filter((function(e) {
            return "" !== e
        }))
    }), "getBids");
    var O = {
            consentData: null,
            setConsentData: function(e) {
                O.consentData = e
            },
            getConsentData: function() {
                return O.consentData
            }
        },
        C = {
            consentData: null,
            setConsentData: function(e) {
                C.consentData = e
            },
            getConsentData: function() {
                return C.consentData
            }
        };

    function P() {
        return I && I.enabled && I.testing && y
    }

    function j(e) {
        y = e
    }

    function R(e, t, r) {
        try {
            var n = S[e].getSpec();
            n && n[t] && "function" == typeof n[t] && (b.logInfo("Invoking " + e + "." + t), u.b.runWithBidder(e, i.bind.call(n[t], n, r)))
        } catch (r) {
            b.logWarn("Error calling " + t + " of " + e)
        }
    }
    E.makeBidRequests = Object(c.b)("sync", (function(e, t, r, n, o) {
        A.emit(h.EVENTS.BEFORE_REQUEST_BIDS, e);
        var a = [],
            s = Object(i.getBidderCodes)(e);
        u.b.getConfig("bidderSequence") === u.a && (s = Object(i.shuffle)(s));
        var d = v(),
            c = s,
            f = [];
        if (I.enabled) {
            if (P()) {
                var p = y.getSourceBidderMap(e);
                f = p[y.CLIENT]
            }
            var m = I.bidders;
            c = s.filter((function(e) {
                return !l()(m, e) || l()(f, e)
            }));
            Boolean(P() && I.testServerOnly) && function(e) {
                return Boolean(g()(e, (function(e) {
                    return g()(e.bids, (function(e) {
                        return (e.bidSource || I.bidderControl && I.bidderControl[e.bidder]) && e.finalSource === y.SERVER
                    }))
                })))
            }(e) && (c.length = 0);
            var E = function(e) {
                    var t = I.bidders,
                        r = b.deepClone(e);
                    return r.forEach((function(e) {
                        e.bids = e.bids.filter((function(e) {
                            return l()(t, e.bidder) && (!P() || e.finalSource !== y.CLIENT)
                        })).map((function(e) {
                            return e.bid_id = b.getUniqueIdentifierStr(), e
                        }))
                    })), r = r.filter((function(e) {
                        return 0 !== e.bids.length
                    }))
                }(e),
                T = b.generateUUID();
            m.forEach((function(e) {
                var n = b.getUniqueIdentifierStr(),
                    i = {
                        bidderCode: e,
                        auctionId: r,
                        bidderRequestId: n,
                        tid: T,
                        bids: w({
                            bidderCode: e,
                            auctionId: r,
                            bidderRequestId: n,
                            adUnits: b.deepClone(E),
                            labels: o,
                            src: h.S2S.SRC
                        }),
                        auctionStart: t,
                        timeout: I.timeout,
                        src: h.S2S.SRC,
                        refererInfo: d
                    };
                0 !== i.bids.length && a.push(i)
            })), E.forEach((function(e) {
                var t = e.bids.filter((function(e) {
                    return g()(a, (function(t) {
                        return g()(t.bids, (function(t) {
                            return t.bidId === e.bid_id
                        }))
                    }))
                }));
                e.bids = t
            })), a.forEach((function(e) {
                e.adUnitsS2SCopy = E.filter((function(e) {
                    return e.bids.length > 0
                }))
            }))
        }
        var _ = function(e) {
            var t = b.deepClone(e);
            return t.forEach((function(e) {
                e.bids = e.bids.filter((function(e) {
                    return !P() || e.finalSource !== y.SERVER
                }))
            })), t = t.filter((function(e) {
                return 0 !== e.bids.length
            }))
        }(e);
        return c.forEach((function(e) {
            var i = b.getUniqueIdentifierStr(),
                s = {
                    bidderCode: e,
                    auctionId: r,
                    bidderRequestId: i,
                    bids: w({
                        bidderCode: e,
                        auctionId: r,
                        bidderRequestId: i,
                        adUnits: b.deepClone(_),
                        labels: o,
                        src: "client"
                    }),
                    auctionStart: t,
                    timeout: n,
                    refererInfo: d
                },
                u = S[e];
            u || b.logError("Trying to make a request for bidder that does not exist: " + e), u && s.bids && 0 !== s.bids.length && a.push(s)
        })), O.getConsentData() && a.forEach((function(e) {
            e.gdprConsent = O.getConsentData()
        })), C.getConsentData() && a.forEach((function(e) {
            e.uspConsent = C.getConsentData()
        })), a
    }), "makeBidRequests"), E.callBids = function(e, t, r, n, o, a, s) {
        if (t.length) {
            var c = t.reduce((function(e, t) {
                    return e[Number(void 0 !== t.src && t.src === h.S2S.SRC)].push(t), e
                }), [
                    [],
                    []
                ]),
                f = c[0],
                p = c[1];
            if (p.length) {
                var g = Object(d.b)(a, o ? {
                        request: o.request.bind(null, "s2s"),
                        done: o.done
                    } : void 0),
                    m = I.bidders,
                    v = S[I.adapter],
                    y = p[0].tid,
                    E = p[0].adUnitsS2SCopy;
                if (v) {
                    var T = {
                        tid: y,
                        ad_units: E
                    };
                    if (T.ad_units.length) {
                        var _ = p.map((function(e) {
                                return e.start = Object(i.timestamp)(), n.bind(e)
                            })),
                            w = T.ad_units.reduce((function(e, t) {
                                return e.concat((t.bids || []).reduce((function(e, t) {
                                    return e.concat(t.bidder)
                                }), []))
                            }), []);
                        b.logMessage("CALLING S2S HEADER BIDDERS ==== " + m.filter((function(e) {
                            return l()(w, e)
                        })).join(",")), p.forEach((function(e) {
                            A.emit(h.EVENTS.BID_REQUESTED, e)
                        })), v.callBids(T, p, (function(e, t) {
                            var n = Object(i.getBidderRequest)(p, t.bidderCode, e);
                            n && r.call(n, e, t)
                        }), (function() {
                            return _.forEach((function(e) {
                                return e()
                            }))
                        }), g)
                    }
                } else b.logError("missing " + I.adapter)
            }
            f.forEach((function(e) {
                e.start = Object(i.timestamp)();
                var t = S[e.bidderCode];
                b.logMessage("CALLING BIDDER ======= " + e.bidderCode), A.emit(h.EVENTS.BID_REQUESTED, e);
                var c = Object(d.b)(a, o ? {
                        request: o.request.bind(null, e.bidderCode),
                        done: o.done
                    } : void 0),
                    f = n.bind(e);
                try {
                    u.b.runWithBidder(e.bidderCode, i.bind.call(t.callBids, t, e, r.bind(e), f, c, s, u.b.callbackWithBidder(e.bidderCode)))
                } catch (t) {
                    b.logError(e.bidderCode + " Bid Adapter emitted an uncaught error when parsing their bidRequest", {
                        e: t,
                        bidRequest: e
                    }), f()
                }
            }))
        } else b.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")
    }, E.videoAdapters = [], E.registerBidAdapter = function(e, t, r) {
        var n = (void 0 === r ? {} : r).supportedMediaTypes,
            i = void 0 === n ? [] : n;
        e && t ? "function" == typeof e.callBids ? (S[t] = e, l()(i, "video") && E.videoAdapters.push(t), l()(i, "native") && a.e.push(t)) : b.logError("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : b.logError("bidAdaptor or bidderCode not specified")
    }, E.aliasBidAdapter = function(e, t) {
        if (void 0 === S[t]) {
            var r = S[e];
            if (void 0 === r) {
                var i = u.b.getConfig("s2sConfig"),
                    o = i && i.bidders;
                o && l()(o, t) ? T[t] = e : b.logError('bidderCode "' + e + '" is not an existing bidder.', "adapterManager.aliasBidAdapter")
            } else try {
                var d, c = function(e) {
                    var t = [];
                    return l()(E.videoAdapters, e) && t.push("video"), l()(a.e, e) && t.push("native"), t
                }(e);
                if (r.constructor.prototype != Object.prototype)(d = new r.constructor).setBidderCode(t);
                else {
                    var f = r.getSpec();
                    d = Object(s.a)(Object(n.default)({}, f, {
                        code: t
                    })), T[t] = e
                }
                E.registerBidAdapter(d, t, {
                    supportedMediaTypes: c
                })
            } catch (t) {
                b.logError(e + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter")
            }
        } else b.logMessage('alias name "' + t + '" has been already specified.')
    }, E.registerAnalyticsAdapter = function(e) {
        var t = e.adapter,
            r = e.code;
        t && r ? "function" == typeof t.enableAnalytics ? (t.code = r, _[r] = t) : b.logError('Prebid Error: Analytics adaptor error for analytics "' + r + '"\n        analytics adapter must implement an enableAnalytics() function') : b.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")
    }, E.enableAnalytics = function(e) {
        b.isArray(e) || (e = [e]), b._each(e, (function(e) {
            var t = _[e.provider];
            t ? t.enableAnalytics(e) : b.logError("Prebid Error: no analytics adapter found in registry for\n        " + e.provider + ".")
        }))
    }, E.getBidAdapter = function(e) {
        return S[e]
    }, E.callTimedOutBidders = function(e, t, r) {
        t = t.map((function(t) {
            return t.params = b.getUserConfiguredParams(e, t.adUnitCode, t.bidder), t.timeout = r, t
        })), t = b.groupBy(t, "bidder"), Object.keys(t).forEach((function(e) {
            R(e, "onTimeout", t[e])
        }))
    }, E.callBidWonBidder = function(e, t, r) {
        t.params = b.getUserConfiguredParams(r, t.adUnitCode, t.bidder), m.a.incrementBidderWinsCounter(t.adUnitCode, t.bidder), R(e, "onBidWon", t)
    }, E.callSetTargetingBidder = function(e, t) {
        R(e, "onSetTargeting", t)
    };
    t.default = E
}, function(e, t, r) {
    var n = r(55)("wks"),
        i = r(42),
        o = r(16).Symbol,
        a = "function" == typeof o;
    (e.exports = function(e) {
        return n[e] || (n[e] = a && o[e] || (a ? o : i)("Symbol." + e))
    }).store = n
}, function(e, t, r) {
    var n = r(16),
        i = r(14),
        o = r(24),
        a = r(20),
        s = r(29),
        d = function e(t, r, d) {
            var u, c, f, l = t & e.F,
                p = t & e.G,
                g = t & e.S,
                m = t & e.P,
                v = t & e.B,
                y = t & e.W,
                b = p ? i : i[r] || (i[r] = {}),
                h = b.prototype,
                A = p ? n : g ? n[r] : (n[r] || {}).prototype;
            for (u in p && (d = r), d)(c = !l && A && void 0 !== A[u]) && s(b, u) || (f = c ? A[u] : d[u], b[u] = p && "function" != typeof A[u] ? d[u] : v && c ? o(f, n) : y && A[u] == f ? function(e) {
                var t = function(t, r, n) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t);
                            case 2:
                                return new e(t, r)
                        }
                        return new e(t, r, n)
                    }
                    return e.apply(this, arguments)
                };
                return t.prototype = e.prototype, t
            }(f) : m && "function" == typeof f ? o(Function.call, f) : f, m && ((b.virtual || (b.virtual = {}))[u] = f, t & e.R && h && !h[u] && a(h, u, f)))
        };
    d.F = 1, d.G = 2, d.S = 4, d.P = 8, d.B = 16, d.W = 32, d.U = 64, d.R = 128, e.exports = d
}, function(e, t) {
    var r = e.exports = {
        version: "2.6.11"
    };
    "number" == typeof __e && (__e = r)
}, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function(e, t) {
    var r = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = r)
}, function(e, t, r) {
    var n = r(28),
        i = r(79),
        o = r(80),
        a = Object.defineProperty;
    t.f = r(21) ? Object.defineProperty : function(e, t, r) {
        if (n(e), t = o(t, !0), n(r), i) try {
            return a(e, t, r)
        } catch (e) {}
        if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
        return "value" in r && (e[t] = r.value), e
    }
}, function(e, t, r) {
    "use strict";
    var n, i = (n = r(1)) && n.__esModule ? n : {
        default: n
    };
    var o = r(0),
        a = r(6),
        s = Array.prototype.slice,
        d = Array.prototype.push,
        u = o._map(a.EVENTS, (function(e) {
            return e
        })),
        c = a.EVENT_ID_PATHS,
        f = [];
    e.exports = function() {
        var e = {},
            t = {};

        function r(t, r) {
            o.logMessage("Emitting event for: " + t);
            var n = r[0] || {},
                i = n[c[t]],
                a = e[t] || {
                    que: []
                },
                s = o._map(a, (function(e, t) {
                    return t
                })),
                u = [];
            f.push({
                eventType: t,
                args: n,
                id: i
            }), i && o.contains(s, i) && d.apply(u, a[i].que), d.apply(u, a.que), o._each(u, (function(e) {
                if (e) try {
                    e.apply(null, r)
                } catch (e) {
                    o.logError("Error executing handler:", "events.js", e)
                }
            }))
        }
        return t.on = function(t, r, n) {
            if (function(e) {
                    return o.contains(u, e)
                }(t)) {
                var i = e[t] || {
                    que: []
                };
                n ? (i[n] = i[n] || {
                    que: []
                }, i[n].que.push(r)) : i.que.push(r), e[t] = i
            } else o.logError("Wrong event name : " + t + " Valid event names :" + u)
        }, t.emit = function(e) {
            var t = s.call(arguments, 1);
            r(e, t)
        }, t.off = function(t, r, n) {
            var i = e[t];
            o.isEmpty(i) || o.isEmpty(i.que) && o.isEmpty(i[n]) || n && (o.isEmpty(i[n]) || o.isEmpty(i[n].que)) || (n ? o._each(i[n].que, (function(e) {
                var t = i[n].que;
                e === r && t.splice(o.indexOf.call(t, e), 1)
            })) : o._each(i.que, (function(e) {
                var t = i.que;
                e === r && t.splice(o.indexOf.call(t, e), 1)
            })), e[t] = i)
        }, t.get = function() {
            return e
        }, t.getEvents = function() {
            var e = [];
            return o._each(f, (function(t) {
                var r = (0, i.default)({}, t);
                e.push(r)
            })), e
        }, t
    }()
}, function(e, t, r) {
    "use strict";
    r.d(t, "a", (function() {
        return a
    }));
    var n = r(0),
        i = {};

    function o(e, t, r) {
        var n = function(e, t) {
            var r = i[e] = i[e] || {
                bidders: {}
            };
            return t ? r.bidders[t] = r.bidders[t] || {} : r
        }(e, r);
        return n[t] = (n[t] || 0) + 1, n[t]
    }
    var a = {
        incrementRequestsCounter: function(e) {
            return o(e, "requestsCounter")
        },
        incrementBidderRequestsCounter: function(e, t) {
            return o(e, "requestsCounter", t)
        },
        incrementBidderWinsCounter: function(e, t) {
            return o(e, "winsCounter", t)
        },
        getRequestsCounter: function(e) {
            return Object(n.deepAccess)(i, e + ".requestsCounter") || 0
        },
        getBidderRequestsCounter: function(e, t) {
            return Object(n.deepAccess)(i, e + ".bidders." + t + ".requestsCounter") || 0
        },
        getBidderWinsCounter: function(e, t) {
            return Object(n.deepAccess)(i, e + ".bidders." + t + ".winsCounter") || 0
        }
    }
}, function(e, t, r) {
    var n = r(17),
        i = r(39);
    e.exports = r(21) ? function(e, t, r) {
        return n.f(e, t, i(1, r))
    } : function(e, t, r) {
        return e[t] = r, e
    }
}, function(e, t, r) {
    e.exports = !r(32)((function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    }))
}, function(e, t, r) {
    "use strict";
    r.d(t, "a", (function() {
        return d
    })), r.d(t, "b", (function() {
        return u
    }));
    var n = r(1),
        i = r(8),
        o = r(2),
        a = r(0),
        s = 4,
        d = u();

    function u(e, t) {
        void 0 === e && (e = 3e3);
        var r = void 0 === t ? {} : t,
            d = r.request,
            u = r.done;
        return function(t, r, c, f) {
            void 0 === f && (f = {});
            try {
                var l, p = f.method || (c ? "POST" : "GET"),
                    g = document.createElement("a");
                g.href = t;
                var m = "object" == typeof r && null !== r ? r : {
                    success: function() {
                        a.logMessage("xhr success")
                    },
                    error: function(e) {
                        a.logError("xhr error", null, e)
                    }
                };
                if ("function" == typeof r && (m.success = r), (l = new window.XMLHttpRequest).onreadystatechange = function() {
                        if (l.readyState === s) {
                            "function" == typeof u && u(g.origin);
                            var e = l.status;
                            e >= 200 && e < 300 || 304 === e ? m.success(l.responseText, l) : m.error(l.statusText, l)
                        }
                    }, o.b.getConfig("disableAjaxTimeout") || (l.ontimeout = function() {
                        a.logError("  xhr timeout after ", l.timeout, "ms")
                    }), "GET" === p && c) {
                    var v = Object(i.c)(t, f);
                    Object(n.default)(v.search, c), t = Object(i.a)(v)
                }
                l.open(p, t, !0), o.b.getConfig("disableAjaxTimeout") || (l.timeout = e), f.withCredentials && (l.withCredentials = !0), a._each(f.customHeaders, (function(e, t) {
                    l.setRequestHeader(t, e)
                })), f.preflight && l.setRequestHeader("X-Requested-With", "XMLHttpRequest"), l.setRequestHeader("Content-Type", f.contentType || "text/plain"), "function" == typeof d && d(g.origin), "POST" === p && c ? l.send(c) : l.send()
            } catch (e) {
                a.logError("xhr construction", e)
            }
        }
    }
}, function(e, t, r) {
    "use strict";
    r.d(t, "a", (function() {
        return d
    })), r.d(t, "c", (function() {
        return u
    })), r.d(t, "b", (function() {
        return c
    }));
    var n = r(2),
        i = r(0),
        o = r(3),
        a = r.n(o),
        s = [];

    function d(e, t) {
        return e.labelAll ? {
            labelAll: !0,
            labels: e.labelAll,
            activeLabels: t
        } : {
            labelAll: !1,
            labels: e.labelAny,
            activeLabels: t
        }
    }

    function u(e, t) {
        void 0 === t && (t = s);
        var r = f(t);
        return !r.shouldFilter || !!r.sizesSupported[e]
    }

    function c(e, t, r, n) {
        var o = void 0 === e ? {} : e,
            d = o.labels,
            u = void 0 === d ? [] : d,
            c = o.labelAll,
            l = void 0 !== c && c,
            p = o.activeLabels,
            g = void 0 === p ? [] : p;
        void 0 === n && (n = s);
        var m = f(n);
        t = Object(i.isPlainObject)(t) ? Object(i.deepClone)(t) : r ? {
            banner: {
                sizes: r
            }
        } : {};
        var v = Object(i.deepAccess)(t, "banner.sizes");
        m.shouldFilter && v && (t.banner.sizes = v.filter((function(e) {
            return m.sizesSupported[e]
        })));
        var y = Object.keys(t),
            b = {
                active: y.every((function(e) {
                    return "banner" !== e
                })) || y.some((function(e) {
                    return "banner" === e
                })) && Object(i.deepAccess)(t, "banner.sizes.length") > 0 && (0 === u.length || !l && (u.some((function(e) {
                    return m.labels[e]
                })) || u.some((function(e) {
                    return a()(g, e)
                }))) || l && u.reduce((function(e, t) {
                    return e ? m.labels[t] || a()(g, t) : e
                }), !0)),
                mediaTypes: t
            };
        return v && v.length !== t.banner.sizes.length && (b.filterResults = {
            before: v,
            after: t.banner.sizes
        }), b
    }

    function f(e) {
        return e.reduce((function(e, t) {
            if ("object" == typeof t && "string" == typeof t.mediaQuery) {
                var r = !1;
                if ("" === t.mediaQuery) r = !0;
                else try {
                    r = Object(i.getWindowTop)().matchMedia(t.mediaQuery).matches
                } catch (e) {
                    Object(i.logWarn)("Unfriendly iFrame blocks sizeConfig from being correctly evaluated"), r = matchMedia(t.mediaQuery).matches
                }
                r && (Array.isArray(t.sizesSupported) && (e.shouldFilter = !0), ["labels", "sizesSupported"].forEach((function(r) {
                    return (t[r] || []).forEach((function(t) {
                        return e[r][t] = !0
                    }))
                })))
            } else Object(i.logWarn)('sizeConfig rule missing required property "mediaQuery"');
            return e
        }), {
            labels: {},
            sizesSupported: {},
            shouldFilter: !1
        })
    }
    n.b.getConfig("sizeConfig", (function(e) {
        return function(e) {
            s = e
        }(e.sizeConfig)
    }))
}, function(e, t, r) {
    var n = r(51);
    e.exports = function(e, t, r) {
        if (n(e), void 0 === t) return e;
        switch (r) {
            case 1:
                return function(r) {
                    return e.call(t, r)
                };
            case 2:
                return function(r, n) {
                    return e.call(t, r, n)
                };
            case 3:
                return function(r, n, i) {
                    return e.call(t, r, n, i)
                }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
}, function(e, t, r) {
    "use strict";
    r.d(t, "a", (function() {
        return f
    }));
    var n = r(1),
        i = r(0),
        o = r(2),
        a = r(3),
        s = r.n(a),
        d = r(26);
    o.b.setDefaults({
        userSync: i.deepClone({
            syncEnabled: !0,
            filterSettings: {
                image: {
                    bidders: "*",
                    filter: "include"
                }
            },
            syncsPerBidder: 5,
            syncDelay: 3e3,
            auctionDelay: 0
        })
    });
    var u = Object(d.a)("usersync");
    var c = !i.isSafariBrowser() && u.cookiesAreEnabled(),
        f = function(e) {
            var t = {},
                r = {
                    image: [],
                    iframe: []
                },
                a = new Set,
                d = {},
                u = {
                    image: !0,
                    iframe: !1
                },
                c = e.config;

            function f() {
                if (c.syncEnabled && e.browserSupportsCookies) {
                    try {
                        ! function() {
                            if (!u.image) return;
                            l(r.image, (function(e) {
                                var t = e[0],
                                    r = e[1];
                                i.logMessage("Invoking image pixel user sync for bidder: " + t), i.triggerPixel(r)
                            }))
                        }(),
                        function() {
                            if (!u.iframe) return;
                            l(r.iframe, (function(e) {
                                var t = e[0],
                                    r = e[1];
                                i.logMessage("Invoking iframe user sync for bidder: " + t), i.insertUserSyncIframe(r)
                            }))
                        }()
                    } catch (e) {
                        return i.logError("Error firing user syncs", e)
                    }
                    r = {
                        image: [],
                        iframe: []
                    }
                }
            }

            function l(e, t) {
                i.shuffle(e).forEach((function(e) {
                    t(e), a.add(e[0])
                }))
            }

            function p(e, t) {
                var r = c.filterSettings;
                if (function(e, t) {
                        if (e.all && e[t]) return i.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.' + t + '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.'), !1;
                        var r = e.all ? e.all : e[t],
                            n = e.all ? "all" : t;
                        if (!r) return !1;
                        var o = r.filter,
                            a = r.bidders;
                        if (o && "include" !== o && "exclude" !== o) return i.logWarn('UserSync "filterSettings.' + n + ".filter\" setting '" + o + "' is not a valid option; use either 'include' or 'exclude'."), !1;
                        if ("*" !== a && !(Array.isArray(a) && a.length > 0 && a.every((function(e) {
                                return i.isStr(e) && "*" !== e
                            })))) return i.logWarn('Detected an invalid setup in userSync "filterSettings.' + n + ".bidders\"; use either '*' (to represent all bidders) or an array of bidders."), !1;
                        return !0
                    }(r, e)) {
                    u[e] = !0;
                    var n = r.all ? r.all : r[e],
                        o = "*" === n.bidders ? [t] : n.bidders;
                    return {
                        include: function(e, t) {
                            return !s()(e, t)
                        },
                        exclude: function(e, t) {
                            return s()(e, t)
                        }
                    } [n.filter || "include"](o, t)
                }
                return !1
            }
            return o.b.getConfig("userSync", (function(e) {
                if (e.userSync) {
                    var t = e.userSync.filterSettings;
                    i.isPlainObject(t) && (t.image || t.all || (e.userSync.filterSettings.image = {
                        bidders: "*",
                        filter: "include"
                    }))
                }
                c = Object(n.default)(c, e.userSync)
            })), t.registerSync = function(e, n, o) {
                return a.has(n) ? i.logMessage('already fired syncs for "' + n + '", ignoring registerSync call') : c.syncEnabled && i.isArray(r[e]) ? n ? 0 !== c.syncsPerBidder && Number(d[n]) >= c.syncsPerBidder ? i.logWarn('Number of user syncs exceeded for "' + n + '"') : t.canBidderRegisterSync(e, n) ? (r[e].push([n, o]), void(d = function(e, t) {
                    return e[t] ? e[t] += 1 : e[t] = 1, e
                }(d, n))) : i.logWarn('Bidder "' + n + '" not permitted to register their "' + e + '" userSync pixels.') : i.logWarn("Bidder is required for registering sync") : i.logWarn('User sync type "' + e + '" not supported')
            }, t.syncUsers = function(e) {
                if (void 0 === e && (e = 0), e) return setTimeout(f, Number(e));
                f()
            }, t.triggerUserSyncs = function() {
                c.enableOverride && t.syncUsers()
            }, t.canBidderRegisterSync = function(e, t) {
                return !c.filterSettings || !p(e, t)
            }, t
        }({
            config: o.b.getConfig("userSync"),
            browserSupportsCookies: c
        })
}, function(e, t, r) {
    "use strict";
    r.d(t, "b", (function() {
        return d
    })), r.d(t, "a", (function() {
        return f
    }));
    var n = r(7),
        i = r(0),
        o = r(3),
        a = r.n(o),
        s = ["core", "prebid-module"],
        d = [];

    function u(e) {
        var t = void 0 === e ? {} : e,
            r = t.gvlid,
            n = t.moduleName,
            o = t.moduleType;

        function u(e) {
            if (a()(s, o)) {
                return e({
                    valid: !0
                })
            }
            var t;
            return c(r, n, {
                hasEnforcementHook: !1
            }, (function(r) {
                if (r && r.hasEnforcementHook) t = e(r);
                else {
                    var n = {
                        hasEnforcementHook: !1,
                        valid: i.hasDeviceAccess()
                    };
                    t = e(n)
                }
            })), t
        }
        return {
            setCookie: function(e, t, r, n, i, o) {
                var a = function(o) {
                    if (o && o.valid) {
                        var a = i && "" !== i ? " ;domain=" + encodeURIComponent(i) : "",
                            s = r && "" !== r ? " ;expires=" + r : "",
                            d = null != n && "none" == n.toLowerCase() ? "; Secure" : "";
                        document.cookie = e + "=" + encodeURIComponent(t) + s + "; path=/" + a + (n ? "; SameSite=" + n : "") + d
                    }
                };
                if (!o || "function" != typeof o) return u(a);
                d.push((function() {
                    var e = u(a);
                    o(e)
                }))
            },
            getCookie: function(e, t) {
                var r = function(t) {
                    if (t && t.valid) {
                        var r = window.document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)");
                        return r ? decodeURIComponent(r[2]) : null
                    }
                    return null
                };
                if (!t || "function" != typeof t) return u(r);
                d.push((function() {
                    var e = u(r);
                    t(e)
                }))
            },
            localStorageIsEnabled: function(e) {
                var t = function(e) {
                    if (e && e.valid) try {
                        return localStorage.setItem("prebid.cookieTest", "1"), "1" === localStorage.getItem("prebid.cookieTest")
                    } catch (e) {}
                    return !1
                };
                if (!e || "function" != typeof e) return u(t);
                d.push((function() {
                    var r = u(t);
                    e(r)
                }))
            },
            cookiesAreEnabled: function(e) {
                var t = function(e) {
                    return !(!e || !e.valid) && (!!i.checkCookieSupport() || (window.document.cookie = "prebid.cookieTest", -1 !== window.document.cookie.indexOf("prebid.cookieTest")))
                };
                if (!e || "function" != typeof e) return u(t);
                d.push((function() {
                    var r = u(t);
                    e(r)
                }))
            },
            setDataInLocalStorage: function(e, t, r) {
                var n = function(r) {
                    r && r.valid && window.localStorage.setItem(e, t)
                };
                if (!r || "function" != typeof r) return u(n);
                d.push((function() {
                    var e = u(n);
                    r(e)
                }))
            },
            getDataFromLocalStorage: function(e, t) {
                var r = function(t) {
                    return t && t.valid ? window.localStorage.getItem(e) : null
                };
                if (!t || "function" != typeof t) return u(r);
                d.push((function() {
                    var e = u(r);
                    t(e)
                }))
            },
            removeDataFromLocalStorage: function(e, t) {
                var r = function(t) {
                    t && t.valid && window.localStorage.removeItem(e)
                };
                if (!t || "function" != typeof t) return u(r);
                d.push((function() {
                    var e = u(r);
                    t(e)
                }))
            },
            hasLocalStorage: function(e) {
                var t = function(e) {
                    if (e && e.valid) try {
                        return !!window.localStorage
                    } catch (e) {
                        i.logError("Local storage api disabled")
                    }
                    return !1
                };
                if (!e || "function" != typeof e) return u(t);
                d.push((function() {
                    var r = u(t);
                    e(r)
                }))
            },
            findSimilarCookies: function(e, t) {
                var r = function(t) {
                    if (t && t.valid) {
                        var r = [];
                        if (i.hasDeviceAccess())
                            for (var n = document.cookie.split(";"); n.length;) {
                                var o = n.pop(),
                                    a = o.indexOf("=");
                                a = a < 0 ? o.length : a, decodeURIComponent(o.slice(0, a).replace(/^\s+/, "")).indexOf(e) >= 0 && r.push(decodeURIComponent(o.slice(a + 1)))
                            }
                        return r
                    }
                };
                if (!t || "function" != typeof t) return u(r);
                d.push((function() {
                    var e = u(r);
                    t(e)
                }))
            }
        }
    }
    var c = Object(n.b)("async", (function(e, t, r, n) {
        n(r)
    }), "validateStorageEnforcement");

    function f(e) {
        return u({
            moduleName: e,
            moduleType: "core"
        })
    }
}, function(e, t, r) {
    "use strict";
    r.d(t, "a", (function() {
        return o
    }));
    var n = r(0);

    function i(e, t) {
        var r = t && t.src || "client",
            i = e || 0;
        this.bidderCode = t && t.bidder || "", this.width = 0, this.height = 0, this.statusMessage = function() {
            switch (i) {
                case 0:
                    return "Pending";
                case 1:
                    return "Bid available";
                case 2:
                    return "Bid returned empty or error response";
                case 3:
                    return "Bid timed out"
            }
        }(), this.adId = n.getUniqueIdentifierStr(), this.requestId = t && t.bidId, this.mediaType = "banner", this.source = r, this.getStatusCode = function() {
            return i
        }, this.getSize = function() {
            return this.width + "x" + this.height
        }
    }

    function o(e, t) {
        return new i(e, t)
    }
}, function(e, t, r) {
    var n = r(15);
    e.exports = function(e) {
        if (!n(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function(e, t) {
    var r = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return r.call(e, t)
    }
}, function(e, t) {
    e.exports = {}
}, function(e, t) {
    /*
     * @license MIT
     * Fun Hooks v0.9.9
     * (c) @snapwich
     */
    d.SYNC = 1, d.ASYNC = 2, d.QUEUE = 4;
    var r = "fun-hooks";
    var n = Object.freeze({
            useProxy: !0,
            ready: 0
        }),
        i = new WeakMap,
        o = "2,1,0" === [1].reduce((function(e, t, r) {
            return [e, t, r]
        }), 2).toString() ? Array.prototype.reduce : function(e, t) {
            var r, n = Object(this),
                i = n.length >>> 0,
                o = 0;
            if (t) r = t;
            else {
                for (; o < i && !(o in n);) o++;
                r = n[o++]
            }
            for (; o < i;) o in n && (r = e(r, n[o], o, n)), o++;
            return r
        };

    function a(e, t) {
        return Array.prototype.slice.call(e, t)
    }
    var s = Object.assign || function(e) {
        return o.call(a(arguments, 1), (function(e, t) {
            return t && Object.keys(t).forEach((function(r) {
                e[r] = t[r]
            })), e
        }), e)
    };

    function d(e) {
        var t, u = {},
            c = [];

        function f(e, t) {
            return "function" == typeof e ? m.call(null, "sync", e, t) : "string" == typeof e && "function" == typeof t ? m.apply(null, arguments) : "object" == typeof e ? l.apply(null, arguments) : void 0
        }

        function l(e, t, r) {
            var n = !0;
            void 0 === t && (t = Object.getOwnPropertyNames(e), n = !1);
            var i = {},
                o = ["constructor"];
            do {
                (t = t.filter((function(t) {
                    return !("function" != typeof e[t] || -1 !== o.indexOf(t) || t.match(/^_/))
                }))).forEach((function(t) {
                    var n = t.split(":"),
                        o = n[0],
                        a = n[1] || "sync";
                    if (!i[o]) {
                        var s = e[o];
                        i[o] = e[o] = m(a, s, r ? [r, o] : void 0)
                    }
                })), e = Object.getPrototypeOf(e)
            } while (n && e);
            return i
        }

        function p(e) {
            var n = Array.isArray(e) ? e : e.split(".");
            return o.call(n, (function(i, o, a) {
                var s = i[o],
                    d = !1;
                return s || (a === n.length - 1 ? (t || c.push((function() {
                    d || console.warn(r + ": referenced '" + e + "' but it was never created")
                })), i[o] = g((function(e) {
                    i[o] = e, d = !0
                }))) : i[o] = {})
            }), u)
        }

        function g(e) {
            var t = [],
                r = [],
                n = function() {},
                o = {
                    before: function(e, r) {
                        return d.call(this, t, "before", e, r)
                    },
                    after: function(e, t) {
                        return d.call(this, r, "after", e, t)
                    },
                    getHooks: function(e) {
                        var n = t.concat(r);
                        "object" == typeof e && (n = n.filter((function(t) {
                            return Object.keys(e).every((function(r) {
                                return t[r] === e[r]
                            }))
                        })));
                        try {
                            s(n, {
                                remove: function() {
                                    return n.forEach((function(e) {
                                        e.remove()
                                    })), this
                                }
                            })
                        } catch (e) {
                            console.error("error adding `remove` to array, did you modify Array.prototype?")
                        }
                        return n
                    },
                    removeAll: function() {
                        return this.getHooks().remove()
                    }
                },
                a = {
                    install: function(i, o, a) {
                        this.type = i, n = a, a(t, r), e && e(o)
                    }
                };
            return i.set(o.after, a), o;

            function d(e, i, o, a) {
                var s = {
                    hook: o,
                    type: i,
                    priority: a || 10,
                    remove: function() {
                        var i = e.indexOf(s); - 1 !== i && (e.splice(i, 1), n(t, r))
                    }
                };
                return e.push(s), e.sort((function(e, t) {
                    return t.priority - e.priority
                })), n(t, r), this
            }
        }

        function m(n, o, u) {
            var f = o.after && i.get(o.after);
            if (f) {
                if (f.type !== n) throw r + ": recreated hookable with different type";
                return o
            }
            var l, m, v = u ? p(u) : g(),
                y = {
                    get: function(e, t) {
                        return v[t] || Reflect.get.apply(Reflect, arguments)
                    }
                };
            return t || c.push(b), e.useProxy && "function" == typeof Proxy && Proxy.revocable ? m = new Proxy(o, y) : s(m = function() {
                return y.apply ? y.apply(o, this, a(arguments)) : o.apply(this, arguments)
            }, v), i.get(m.after).install(n, m, (function(e, t) {
                var r, i = [];
                e.length || t.length ? (e.forEach(o), r = i.push(void 0) - 1, t.forEach(o), l = function(e, t, o) {
                    var s, d = 0,
                        u = "async" === n && "function" == typeof o[o.length - 1] && o.pop();

                    function c(e) {
                        "sync" === n ? s = e : u && u.apply(null, arguments)
                    }

                    function f(e) {
                        if (i[d]) {
                            var r = a(arguments);
                            return f.bail = c, r.unshift(f), i[d++].apply(t, r)
                        }
                        "sync" === n ? s = e : u && u.apply(null, arguments)
                    }
                    return i[r] = function() {
                        var r = a(arguments, 1);
                        "async" === n && u && (delete f.bail, r.push(f));
                        var i = e.apply(t, r);
                        "sync" === n && f(i)
                    }, f.apply(null, o), s
                }) : l = void 0;

                function o(e) {
                    i.push(e.hook)
                }
                b()
            })), m;

            function b() {
                !t && ("sync" !== n || e.ready & d.SYNC) && ("async" !== n || e.ready & d.ASYNC) ? "sync" !== n && e.ready & d.QUEUE ? y.apply = function() {
                    var e = arguments;
                    c.push((function() {
                        m.apply(e[1], e[2])
                    }))
                } : y.apply = function() {
                    throw r + ": hooked function not ready"
                } : y.apply = l
            }
        }
        return (e = s({}, n, e)).ready ? f.ready = function() {
            t = !0,
                function(e) {
                    for (var t; t = e.shift();) t()
                }(c)
        } : t = !0, f.get = p, f
    }
    e.exports = d
}, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function(e, t) {
    var r = {}.toString;
    e.exports = function(e) {
        return r.call(e).slice(8, -1)
    }
}, function(e, t) {
    e.exports = function(e) {
        if (null == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}, function(e, t, r) {
    var n = r(41),
        i = Math.min;
    e.exports = function(e) {
        return e > 0 ? i(n(e), 9007199254740991) : 0
    }
}, function(e, t, r) {
    var n = r(24),
        i = r(64),
        o = r(65),
        a = r(28),
        s = r(35),
        d = r(66),
        u = {},
        c = {};
    (t = e.exports = function(e, t, r, f, l) {
        var p, g, m, v, y = l ? function() {
                return e
            } : d(e),
            b = n(r, f, t ? 2 : 1),
            h = 0;
        if ("function" != typeof y) throw TypeError(e + " is not iterable!");
        if (o(y)) {
            for (p = s(e.length); p > h; h++)
                if ((v = t ? b(a(g = e[h])[0], g[1]) : b(e[h])) === u || v === c) return v
        } else
            for (m = y.call(e); !(g = m.next()).done;)
                if ((v = i(m, b, g.value, t)) === u || v === c) return v
    }).BREAK = u, t.RETURN = c
}, function(e, t, r) {
    "use strict";
    r.d(t, "a", (function() {
        return l
    })), r.d(t, "b", (function() {
        return g
    }));
    var n = r(5),
        i = r.n(n),
        o = r(0),
        a = 2,
        s = {
            buckets: [{
                max: 5,
                increment: .5
            }]
        },
        d = {
            buckets: [{
                max: 20,
                increment: .1
            }]
        },
        u = {
            buckets: [{
                max: 20,
                increment: .01
            }]
        },
        c = {
            buckets: [{
                max: 3,
                increment: .01
            }, {
                max: 8,
                increment: .05
            }, {
                max: 20,
                increment: .5
            }]
        },
        f = {
            buckets: [{
                max: 5,
                increment: .05
            }, {
                max: 10,
                increment: .1
            }, {
                max: 20,
                increment: .5
            }]
        };

    function l(e, t, r) {
        void 0 === r && (r = 1);
        var n = parseFloat(e);
        return isNaN(n) && (n = ""), {
            low: "" === n ? "" : p(e, s, r),
            med: "" === n ? "" : p(e, d, r),
            high: "" === n ? "" : p(e, u, r),
            auto: "" === n ? "" : p(e, f, r),
            dense: "" === n ? "" : p(e, c, r),
            custom: "" === n ? "" : p(e, t, r)
        }
    }

    function p(e, t, r) {
        var n = "";
        if (!g(t)) return n;
        var o = t.buckets.reduce((function(e, t) {
                return e.max > t.max ? e : t
            }), {
                max: 0
            }),
            s = 0,
            d = i()(t.buckets, (function(t) {
                if (e > o.max * r) {
                    var i = t.precision;
                    void 0 === i && (i = a), n = (t.max * r).toFixed(i)
                } else {
                    if (e <= t.max * r && e >= s * r) return t.min = s, t;
                    s = t.max
                }
            }));
        return d && (n = function(e, t, r) {
            var n = void 0 !== t.precision ? t.precision : a,
                i = t.increment * r,
                o = t.min * r,
                s = Math.pow(10, n + 2),
                d = (e * s - o * s) / (i * s),
                u = Math.floor(d) * i + o;
            return (u = Number(u.toFixed(10))).toFixed(n)
        }(e, d, r)), n
    }

    function g(e) {
        if (o.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
        var t = !0;
        return e.buckets.forEach((function(e) {
            e.max && e.increment || (t = !1)
        })), t
    }
}, function(e, t, r) {
    "use strict";
    r.d(t, "a", (function() {
        return a
    })), r.d(t, "b", (function() {
        return s
    }));
    r(11);
    var n = r(0),
        i = r(2),
        o = (r(3), r(7)),
        a = "outstream";

    function s(e, t) {
        var r = Object(n.getBidRequest)(e.requestId, t),
            i = r && Object(n.deepAccess)(r, "mediaTypes.video"),
            o = i && Object(n.deepAccess)(i, "context");
        return d(e, r, i, o)
    }
    var d = Object(o.b)("sync", (function(e, t, r, o) {
        return !t || r && o !== a ? i.b.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : (Object(n.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with jwpb.setConfig({ cache: {url: "..."} });\n      '), !1) : o !== a || !(!e.renderer && !t.renderer)
    }), "checkVideoBidSetup")
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}, function(e, t, r) {
    var n = r(34);
    e.exports = function(e) {
        return Object(n(e))
    }
}, function(e, t) {
    var r = Math.ceil,
        n = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? n : r)(e)
    }
}, function(e, t) {
    var r = 0,
        n = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++r + n).toString(36))
    }
}, function(e, t) {
    e.exports = function() {}
}, function(e, t, r) {
    var n = r(54),
        i = r(34);
    e.exports = function(e) {
        return n(i(e))
    }
}, function(e, t, r) {
    "use strict";
    var n = r(56),
        i = r(13),
        o = r(88),
        a = r(20),
        s = r(30),
        d = r(89),
        u = r(47),
        c = r(94),
        f = r(12)("iterator"),
        l = !([].keys && "next" in [].keys()),
        p = function() {
            return this
        };
    e.exports = function(e, t, r, g, m, v, y) {
        d(r, t, g);
        var b, h, A, E = function(e) {
                if (!l && e in _) return _[e];
                switch (e) {
                    case "keys":
                    case "values":
                        return function() {
                            return new r(this, e)
                        }
                }
                return function() {
                    return new r(this, e)
                }
            },
            S = t + " Iterator",
            T = "values" == m,
            I = !1,
            _ = e.prototype,
            w = _[f] || _["@@iterator"] || m && _[m],
            O = w || E(m),
            C = m ? T ? E("entries") : O : void 0,
            P = "Array" == t && _.entries || w;
        if (P && (A = c(P.call(new e))) !== Object.prototype && A.next && (u(A, S, !0), n || "function" == typeof A[f] || a(A, f, p)), T && w && "values" !== w.name && (I = !0, O = function() {
                return w.call(this)
            }), n && !y || !l && !I && _[f] || a(_, f, O), s[t] = O, s[S] = p, m)
            if (b = {
                    values: T ? O : E("values"),
                    keys: v ? O : E("keys"),
                    entries: C
                }, y)
                for (h in b) h in _ || o(_, h, b[h]);
            else i(i.P + i.F * (l || I), t, b);
        return b
    }
}, function(e, t, r) {
    var n = r(55)("keys"),
        i = r(42);
    e.exports = function(e) {
        return n[e] || (n[e] = i(e))
    }
}, function(e, t, r) {
    var n = r(17).f,
        i = r(29),
        o = r(12)("toStringTag");
    e.exports = function(e, t, r) {
        e && !i(e = r ? e : e.prototype, o) && n(e, o, {
            configurable: !0,
            value: t
        })
    }
}, function(e, t, r) {
    "use strict";
    var n = r(117);
    e.exports = Function.prototype.bind || n
}, function(e, t, r) {
    "use strict";
    var n = r(70),
        i = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
        o = Object.prototype.toString,
        a = Array.prototype.concat,
        s = Object.defineProperty,
        d = s && function() {
            var e = {};
            try {
                for (var t in s(e, "x", {
                        enumerable: !1,
                        value: e
                    }), e) return !1;
                return e.x === e
            } catch (e) {
                return !1
            }
        }(),
        u = function(e, t, r, n) {
            var i;
            t in e && ("function" != typeof(i = n) || "[object Function]" !== o.call(i) || !n()) || (d ? s(e, t, {
                configurable: !0,
                enumerable: !1,
                value: r,
                writable: !0
            }) : e[t] = r)
        },
        c = function(e, t) {
            var r = arguments.length > 2 ? arguments[2] : {},
                o = n(t);
            i && (o = a.call(o, Object.getOwnPropertySymbols(t)));
            for (var s = 0; s < o.length; s += 1) u(e, o[s], t[o[s]], r[o[s]])
        };
    c.supportsDescriptors = !!d, e.exports = c
}, function(e, t, r) {
    r(130), e.exports = r(14).Number.isInteger
}, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function(e, t, r) {
    var n = r(15),
        i = r(16).document,
        o = n(i) && n(i.createElement);
    e.exports = function(e) {
        return o ? i.createElement(e) : {}
    }
}, function(e, t, r) {
    var n = r(24),
        i = r(54),
        o = r(40),
        a = r(35),
        s = r(81);
    e.exports = function(e, t) {
        var r = 1 == e,
            d = 2 == e,
            u = 3 == e,
            c = 4 == e,
            f = 6 == e,
            l = 5 == e || f,
            p = t || s;
        return function(t, s, g) {
            for (var m, v, y = o(t), b = i(y), h = n(s, g, 3), A = a(b.length), E = 0, S = r ? p(t, A) : d ? p(t, 0) : void 0; A > E; E++)
                if ((l || E in b) && (v = h(m = b[E], E, y), e))
                    if (r) S[E] = v;
                    else if (v) switch (e) {
                case 3:
                    return !0;
                case 5:
                    return m;
                case 6:
                    return E;
                case 2:
                    S.push(m)
            } else if (c) return !1;
            return f ? -1 : u || c ? c : S
        }
    }
}, function(e, t, r) {
    var n = r(33);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == n(e) ? e.split("") : Object(e)
    }
}, function(e, t, r) {
    var n = r(14),
        i = r(16),
        o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
    (e.exports = function(e, t) {
        return o[e] || (o[e] = void 0 !== t ? t : {})
    })("versions", []).push({
        version: n.version,
        mode: r(56) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function(e, t) {
    e.exports = !0
}, function(e, t, r) {
    var n = r(44),
        i = r(35),
        o = r(85);
    e.exports = function(e) {
        return function(t, r, a) {
            var s, d = n(t),
                u = i(d.length),
                c = o(a, u);
            if (e && r != r) {
                for (; u > c;)
                    if ((s = d[c++]) != s) return !0
            } else
                for (; u > c; c++)
                    if ((e || c in d) && d[c] === r) return e || c || 0;
            return !e && -1
        }
    }
}, function(e, t, r) {
    "use strict";
    var n = r(87)(!0);
    r(45)(String, "String", (function(e) {
        this._t = String(e), this._i = 0
    }), (function() {
        var e, t = this._t,
            r = this._i;
        return r >= t.length ? {
            value: void 0,
            done: !0
        } : (e = n(t, r), this._i += e.length, {
            value: e,
            done: !1
        })
    }))
}, function(e, t, r) {
    var n = r(28),
        i = r(90),
        o = r(60),
        a = r(46)("IE_PROTO"),
        s = function() {},
        d = function() {
            var e, t = r(52)("iframe"),
                n = o.length;
            for (t.style.display = "none", r(93).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), d = e.F; n--;) delete d.prototype[o[n]];
            return d()
        };
    e.exports = Object.create || function(e, t) {
        var r;
        return null !== e ? (s.prototype = n(e), r = new s, s.prototype = null, r[a] = e) : r = d(), void 0 === t ? r : i(r, t)
    }
}, function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            value: t,
            done: !!e
        }
    }
}, function(e, t, r) {
    var n = r(20);
    e.exports = function(e, t, r) {
        for (var i in t) r && e[i] ? e[i] = t[i] : n(e, i, t[i]);
        return e
    }
}, function(e, t) {
    e.exports = function(e, t, r, n) {
        if (!(e instanceof t) || void 0 !== n && n in e) throw TypeError(r + ": incorrect invocation!");
        return e
    }
}, function(e, t, r) {
    var n = r(28);
    e.exports = function(e, t, r, i) {
        try {
            return i ? t(n(r)[0], r[1]) : t(r)
        } catch (t) {
            var o = e.return;
            throw void 0 !== o && n(o.call(e)), t
        }
    }
}, function(e, t, r) {
    var n = r(30),
        i = r(12)("iterator"),
        o = Array.prototype;
    e.exports = function(e) {
        return void 0 !== e && (n.Array === e || o[i] === e)
    }
}, function(e, t, r) {
    var n = r(67),
        i = r(12)("iterator"),
        o = r(30);
    e.exports = r(14).getIteratorMethod = function(e) {
        if (null != e) return e[i] || e["@@iterator"] || o[n(e)]
    }
}, function(e, t, r) {
    var n = r(33),
        i = r(12)("toStringTag"),
        o = "Arguments" == n(function() {
            return arguments
        }());
    e.exports = function(e) {
        var t, r, a;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(r = function(e, t) {
            try {
                return e[t]
            } catch (e) {}
        }(t = Object(e), i)) ? r : o ? n(t) : "Object" == (a = n(t)) && "function" == typeof t.callee ? "Arguments" : a
    }
}, function(e, t, r) {
    var n = r(42)("meta"),
        i = r(15),
        o = r(29),
        a = r(17).f,
        s = 0,
        d = Object.isExtensible || function() {
            return !0
        },
        u = !r(32)((function() {
            return d(Object.preventExtensions({}))
        })),
        c = function(e) {
            a(e, n, {
                value: {
                    i: "O" + ++s,
                    w: {}
                }
            })
        },
        f = e.exports = {
            KEY: n,
            NEED: !1,
            fastKey: function(e, t) {
                if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!o(e, n)) {
                    if (!d(e)) return "F";
                    if (!t) return "E";
                    c(e)
                }
                return e[n].i
            },
            getWeak: function(e, t) {
                if (!o(e, n)) {
                    if (!d(e)) return !0;
                    if (!t) return !1;
                    c(e)
                }
                return e[n].w
            },
            onFreeze: function(e) {
                return u && f.NEED && d(e) && !o(e, n) && c(e), e
            }
        }
}, function(e, t, r) {
    var n = r(15);
    e.exports = function(e, t) {
        if (!n(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
        return e
    }
}, function(e, t, r) {
    "use strict";
    var n = Array.prototype.slice,
        i = r(71),
        o = Object.keys,
        a = o ? function(e) {
            return o(e)
        } : r(112),
        s = Object.keys;
    a.shim = function() {
        Object.keys ? function() {
            var e = Object.keys(arguments);
            return e && e.length === arguments.length
        }(1, 2) || (Object.keys = function(e) {
            return i(e) ? s(n.call(e)) : s(e)
        }) : Object.keys = a;
        return Object.keys || a
    }, e.exports = a
}, function(e, t, r) {
    "use strict";
    var n = Object.prototype.toString;
    e.exports = function(e) {
        var t = n.call(e),
            r = "[object Arguments]" === t;
        return r || (r = "[object Array]" !== t && null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Function]" === n.call(e.callee)), r
    }
}, function(e, t, r) {
    "use strict";
    var n = Object,
        i = TypeError;
    e.exports = function() {
        if (null != this && this !== n(this)) throw new i("RegExp.prototype.flags getter called on non-object");
        var e = "";
        return this.global && (e += "g"), this.ignoreCase && (e += "i"), this.multiline && (e += "m"), this.dotAll && (e += "s"), this.unicode && (e += "u"), this.sticky && (e += "y"), e
    }
}, function(e, t, r) {
    "use strict";
    var n = r(72),
        i = r(49).supportsDescriptors,
        o = Object.getOwnPropertyDescriptor,
        a = TypeError;
    e.exports = function() {
        if (!i) throw new a("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
        if ("gim" === /a/gim.flags) {
            var e = o(RegExp.prototype, "flags");
            if (e && "function" == typeof e.get && "boolean" == typeof /a/.dotAll) return e.get
        }
        return n
    }
}, function(e, t, r) {
    r(86), r(58), r(95), r(97), r(101), r(104), r(106), e.exports = r(14).Set
}, function(e, t) {
    e.exports = function e(t) {
        var r = Array.isArray(t) ? [] : {};
        for (var n in t) {
            var i = t[n];
            r[n] = i && "object" == typeof i ? e(i) : i
        }
        return r
    }
}, function(e, t, r) {
    var n = r(70),
        i = r(113),
        o = r(114),
        a = r(115),
        s = r(118),
        d = r(125),
        u = Date.prototype.getTime;

    function c(e, t, r) {
        var p = r || {};
        return !(p.strict ? !o(e, t) : e !== t) || (!e || !t || "object" != typeof e && "object" != typeof t ? p.strict ? o(e, t) : e == t : function(e, t, r) {
            var o, p;
            if (typeof e != typeof t) return !1;
            if (f(e) || f(t)) return !1;
            if (e.prototype !== t.prototype) return !1;
            if (i(e) !== i(t)) return !1;
            var g = a(e),
                m = a(t);
            if (g !== m) return !1;
            if (g || m) return e.source === t.source && s(e) === s(t);
            if (d(e) && d(t)) return u.call(e) === u.call(t);
            var v = l(e),
                y = l(t);
            if (v !== y) return !1;
            if (v || y) {
                if (e.length !== t.length) return !1;
                for (o = 0; o < e.length; o++)
                    if (e[o] !== t[o]) return !1;
                return !0
            }
            if (typeof e != typeof t) return !1;
            try {
                var b = n(e),
                    h = n(t)
            } catch (e) {
                return !1
            }
            if (b.length !== h.length) return !1;
            for (b.sort(), h.sort(), o = b.length - 1; o >= 0; o--)
                if (b[o] != h[o]) return !1;
            for (o = b.length - 1; o >= 0; o--)
                if (p = b[o], !c(e[p], t[p], r)) return !1;
            return !0
        }(e, t, p))
    }

    function f(e) {
        return null == e
    }

    function l(e) {
        return !(!e || "object" != typeof e || "number" != typeof e.length) && ("function" == typeof e.copy && "function" == typeof e.slice && !(e.length > 0 && "number" != typeof e[0]))
    }
    e.exports = c
}, function(e, t, r) {
    r(126), e.exports = r(14).String.includes
}, function(e, t, r) {
    "use strict";
    var n = r(13),
        i = r(53)(5),
        o = !0;
    "find" in [] && Array(1).find((function() {
        o = !1
    })), n(n.P + n.F * o, "Array", {
        find: function(e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), r(43)("find")
}, function(e, t, r) {
    e.exports = !r(21) && !r(32)((function() {
        return 7 != Object.defineProperty(r(52)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }))
}, function(e, t, r) {
    var n = r(15);
    e.exports = function(e, t) {
        if (!n(e)) return e;
        var r, i;
        if (t && "function" == typeof(r = e.toString) && !n(i = r.call(e))) return i;
        if ("function" == typeof(r = e.valueOf) && !n(i = r.call(e))) return i;
        if (!t && "function" == typeof(r = e.toString) && !n(i = r.call(e))) return i;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(e, t, r) {
    var n = r(82);
    e.exports = function(e, t) {
        return new(n(e))(t)
    }
}, function(e, t, r) {
    var n = r(15),
        i = r(83),
        o = r(12)("species");
    e.exports = function(e) {
        var t;
        return i(e) && ("function" != typeof(t = e.constructor) || t !== Array && !i(t.prototype) || (t = void 0), n(t) && null === (t = t[o]) && (t = void 0)), void 0 === t ? Array : t
    }
}, function(e, t, r) {
    var n = r(33);
    e.exports = Array.isArray || function(e) {
        return "Array" == n(e)
    }
}, function(e, t, r) {
    "use strict";
    var n = r(13),
        i = r(57)(!0);
    n(n.P, "Array", {
        includes: function(e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), r(43)("includes")
}, function(e, t, r) {
    var n = r(41),
        i = Math.max,
        o = Math.min;
    e.exports = function(e, t) {
        return (e = n(e)) < 0 ? i(e + t, 0) : o(e, t)
    }
}, function(e, t) {}, function(e, t, r) {
    var n = r(41),
        i = r(34);
    e.exports = function(e) {
        return function(t, r) {
            var o, a, s = String(i(t)),
                d = n(r),
                u = s.length;
            return d < 0 || d >= u ? e ? "" : void 0 : (o = s.charCodeAt(d)) < 55296 || o > 56319 || d + 1 === u || (a = s.charCodeAt(d + 1)) < 56320 || a > 57343 ? e ? s.charAt(d) : o : e ? s.slice(d, d + 2) : a - 56320 + (o - 55296 << 10) + 65536
        }
    }
}, function(e, t, r) {
    e.exports = r(20)
}, function(e, t, r) {
    "use strict";
    var n = r(59),
        i = r(39),
        o = r(47),
        a = {};
    r(20)(a, r(12)("iterator"), (function() {
        return this
    })), e.exports = function(e, t, r) {
        e.prototype = n(a, {
            next: i(1, r)
        }), o(e, t + " Iterator")
    }
}, function(e, t, r) {
    var n = r(17),
        i = r(28),
        o = r(91);
    e.exports = r(21) ? Object.defineProperties : function(e, t) {
        i(e);
        for (var r, a = o(t), s = a.length, d = 0; s > d;) n.f(e, r = a[d++], t[r]);
        return e
    }
}, function(e, t, r) {
    var n = r(92),
        i = r(60);
    e.exports = Object.keys || function(e) {
        return n(e, i)
    }
}, function(e, t, r) {
    var n = r(29),
        i = r(44),
        o = r(57)(!1),
        a = r(46)("IE_PROTO");
    e.exports = function(e, t) {
        var r, s = i(e),
            d = 0,
            u = [];
        for (r in s) r != a && n(s, r) && u.push(r);
        for (; t.length > d;) n(s, r = t[d++]) && (~o(u, r) || u.push(r));
        return u
    }
}, function(e, t, r) {
    var n = r(16).document;
    e.exports = n && n.documentElement
}, function(e, t, r) {
    var n = r(29),
        i = r(40),
        o = r(46)("IE_PROTO"),
        a = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) {
        return e = i(e), n(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
    }
}, function(e, t, r) {
    r(96);
    for (var n = r(16), i = r(20), o = r(30), a = r(12)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), d = 0; d < s.length; d++) {
        var u = s[d],
            c = n[u],
            f = c && c.prototype;
        f && !f[a] && i(f, a, u), o[u] = o.Array
    }
}, function(e, t, r) {
    "use strict";
    var n = r(43),
        i = r(61),
        o = r(30),
        a = r(44);
    e.exports = r(45)(Array, "Array", (function(e, t) {
        this._t = a(e), this._i = 0, this._k = t
    }), (function() {
        var e = this._t,
            t = this._k,
            r = this._i++;
        return !e || r >= e.length ? (this._t = void 0, i(1)) : i(0, "keys" == t ? r : "values" == t ? e[r] : [r, e[r]])
    }), "values"), o.Arguments = o.Array, n("keys"), n("values"), n("entries")
}, function(e, t, r) {
    "use strict";
    var n = r(98),
        i = r(69);
    e.exports = r(100)("Set", (function(e) {
        return function() {
            return e(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }), {
        add: function(e) {
            return n.def(i(this, "Set"), e = 0 === e ? 0 : e, e)
        }
    }, n)
}, function(e, t, r) {
    "use strict";
    var n = r(17).f,
        i = r(59),
        o = r(62),
        a = r(24),
        s = r(63),
        d = r(36),
        u = r(45),
        c = r(61),
        f = r(99),
        l = r(21),
        p = r(68).fastKey,
        g = r(69),
        m = l ? "_s" : "size",
        v = function(e, t) {
            var r, n = p(t);
            if ("F" !== n) return e._i[n];
            for (r = e._f; r; r = r.n)
                if (r.k == t) return r
        };
    e.exports = {
        getConstructor: function(e, t, r, u) {
            var c = e((function(e, n) {
                s(e, c, t, "_i"), e._t = t, e._i = i(null), e._f = void 0, e._l = void 0, e[m] = 0, null != n && d(n, r, e[u], e)
            }));
            return o(c.prototype, {
                clear: function() {
                    for (var e = g(this, t), r = e._i, n = e._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = void 0), delete r[n.i];
                    e._f = e._l = void 0, e[m] = 0
                },
                delete: function(e) {
                    var r = g(this, t),
                        n = v(r, e);
                    if (n) {
                        var i = n.n,
                            o = n.p;
                        delete r._i[n.i], n.r = !0, o && (o.n = i), i && (i.p = o), r._f == n && (r._f = i), r._l == n && (r._l = o), r[m]--
                    }
                    return !!n
                },
                forEach: function(e) {
                    g(this, t);
                    for (var r, n = a(e, arguments.length > 1 ? arguments[1] : void 0, 3); r = r ? r.n : this._f;)
                        for (n(r.v, r.k, this); r && r.r;) r = r.p
                },
                has: function(e) {
                    return !!v(g(this, t), e)
                }
            }), l && n(c.prototype, "size", {
                get: function() {
                    return g(this, t)[m]
                }
            }), c
        },
        def: function(e, t, r) {
            var n, i, o = v(e, t);
            return o ? o.v = r : (e._l = o = {
                i: i = p(t, !0),
                k: t,
                v: r,
                p: n = e._l,
                n: void 0,
                r: !1
            }, e._f || (e._f = o), n && (n.n = o), e[m]++, "F" !== i && (e._i[i] = o)), e
        },
        getEntry: v,
        setStrong: function(e, t, r) {
            u(e, t, (function(e, r) {
                this._t = g(e, t), this._k = r, this._l = void 0
            }), (function() {
                for (var e = this._k, t = this._l; t && t.r;) t = t.p;
                return this._t && (this._l = t = t ? t.n : this._t._f) ? c(0, "keys" == e ? t.k : "values" == e ? t.v : [t.k, t.v]) : (this._t = void 0, c(1))
            }), r ? "entries" : "values", !r, !0), f(t)
        }
    }
}, function(e, t, r) {
    "use strict";
    var n = r(16),
        i = r(14),
        o = r(17),
        a = r(21),
        s = r(12)("species");
    e.exports = function(e) {
        var t = "function" == typeof i[e] ? i[e] : n[e];
        a && t && !t[s] && o.f(t, s, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(e, t, r) {
    "use strict";
    var n = r(16),
        i = r(13),
        o = r(68),
        a = r(32),
        s = r(20),
        d = r(62),
        u = r(36),
        c = r(63),
        f = r(15),
        l = r(47),
        p = r(17).f,
        g = r(53)(0),
        m = r(21);
    e.exports = function(e, t, r, v, y, b) {
        var h = n[e],
            A = h,
            E = y ? "set" : "add",
            S = A && A.prototype,
            T = {};
        return m && "function" == typeof A && (b || S.forEach && !a((function() {
            (new A).entries().next()
        }))) ? (A = t((function(t, r) {
            c(t, A, e, "_c"), t._c = new h, null != r && u(r, y, t[E], t)
        })), g("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), (function(e) {
            var t = "add" == e || "set" == e;
            e in S && (!b || "clear" != e) && s(A.prototype, e, (function(r, n) {
                if (c(this, A, e), !t && b && !f(r)) return "get" == e && void 0;
                var i = this._c[e](0 === r ? 0 : r, n);
                return t ? this : i
            }))
        })), b || p(A.prototype, "size", {
            get: function() {
                return this._c.size
            }
        })) : (A = v.getConstructor(t, e, y, E), d(A.prototype, r), o.NEED = !0), l(A, e), T[e] = A, i(i.G + i.W + i.F, T), b || v.setStrong(A, e, y), A
    }
}, function(e, t, r) {
    var n = r(13);
    n(n.P + n.R, "Set", {
        toJSON: r(102)("Set")
    })
}, function(e, t, r) {
    var n = r(67),
        i = r(103);
    e.exports = function(e) {
        return function() {
            if (n(this) != e) throw TypeError(e + "#toJSON isn't generic");
            return i(this)
        }
    }
}, function(e, t, r) {
    var n = r(36);
    e.exports = function(e, t) {
        var r = [];
        return n(e, !1, r.push, r, t), r
    }
}, function(e, t, r) {
    r(105)("Set")
}, function(e, t, r) {
    "use strict";
    var n = r(13);
    e.exports = function(e) {
        n(n.S, e, {
            of: function() {
                for (var e = arguments.length, t = new Array(e); e--;) t[e] = arguments[e];
                return new this(t)
            }
        })
    }
}, function(e, t, r) {
    r(107)("Set")
}, function(e, t, r) {
    "use strict";
    var n = r(13),
        i = r(51),
        o = r(24),
        a = r(36);
    e.exports = function(e) {
        n(n.S, e, {
            from: function(e) {
                var t, r, n, s, d = arguments[1];
                return i(this), (t = void 0 !== d) && i(d), null == e ? new this : (r = [], t ? (n = 0, s = o(d, arguments[2], 2), a(e, !1, (function(e) {
                    r.push(s(e, n++))
                }))) : a(e, !1, r.push, r), new this(r))
            }
        })
    }
}, function(e, t, r) {
    r(58), r(109), e.exports = r(14).Array.from
}, function(e, t, r) {
    "use strict";
    var n = r(24),
        i = r(13),
        o = r(40),
        a = r(64),
        s = r(65),
        d = r(35),
        u = r(110),
        c = r(66);
    i(i.S + i.F * !r(111)((function(e) {
        Array.from(e)
    })), "Array", {
        from: function(e) {
            var t, r, i, f, l = o(e),
                p = "function" == typeof this ? this : Array,
                g = arguments.length,
                m = g > 1 ? arguments[1] : void 0,
                v = void 0 !== m,
                y = 0,
                b = c(l);
            if (v && (m = n(m, g > 2 ? arguments[2] : void 0, 2)), null == b || p == Array && s(b))
                for (r = new p(t = d(l.length)); t > y; y++) u(r, y, v ? m(l[y], y) : l[y]);
            else
                for (f = b.call(l), r = new p; !(i = f.next()).done; y++) u(r, y, v ? a(f, m, [i.value, y], !0) : i.value);
            return r.length = y, r
        }
    })
}, function(e, t, r) {
    "use strict";
    var n = r(17),
        i = r(39);
    e.exports = function(e, t, r) {
        t in e ? n.f(e, t, i(0, r)) : e[t] = r
    }
}, function(e, t, r) {
    var n = r(12)("iterator"),
        i = !1;
    try {
        var o = [7][n]();
        o.return = function() {
            i = !0
        }, Array.from(o, (function() {
            throw 2
        }))
    } catch (e) {}
    e.exports = function(e, t) {
        if (!t && !i) return !1;
        var r = !1;
        try {
            var o = [7],
                a = o[n]();
            a.next = function() {
                return {
                    done: r = !0
                }
            }, o[n] = function() {
                return a
            }, e(o)
        } catch (e) {}
        return r
    }
}, function(e, t, r) {
    "use strict";
    var n;
    if (!Object.keys) {
        var i = Object.prototype.hasOwnProperty,
            o = Object.prototype.toString,
            a = r(71),
            s = Object.prototype.propertyIsEnumerable,
            d = !s.call({
                toString: null
            }, "toString"),
            u = s.call((function() {}), "prototype"),
            c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
            f = function(e) {
                var t = e.constructor;
                return t && t.prototype === e
            },
            l = {
                $applicationCache: !0,
                $console: !0,
                $external: !0,
                $frame: !0,
                $frameElement: !0,
                $frames: !0,
                $innerHeight: !0,
                $innerWidth: !0,
                $onmozfullscreenchange: !0,
                $onmozfullscreenerror: !0,
                $outerHeight: !0,
                $outerWidth: !0,
                $pageXOffset: !0,
                $pageYOffset: !0,
                $parent: !0,
                $scrollLeft: !0,
                $scrollTop: !0,
                $scrollX: !0,
                $scrollY: !0,
                $self: !0,
                $webkitIndexedDB: !0,
                $webkitStorageInfo: !0,
                $window: !0
            },
            p = function() {
                if ("undefined" == typeof window) return !1;
                for (var e in window) try {
                    if (!l["$" + e] && i.call(window, e) && null !== window[e] && "object" == typeof window[e]) try {
                        f(window[e])
                    } catch (e) {
                        return !0
                    }
                } catch (e) {
                    return !0
                }
                return !1
            }();
        n = function(e) {
            var t = null !== e && "object" == typeof e,
                r = "[object Function]" === o.call(e),
                n = a(e),
                s = t && "[object String]" === o.call(e),
                l = [];
            if (!t && !r && !n) throw new TypeError("Object.keys called on a non-object");
            var g = u && r;
            if (s && e.length > 0 && !i.call(e, 0))
                for (var m = 0; m < e.length; ++m) l.push(String(m));
            if (n && e.length > 0)
                for (var v = 0; v < e.length; ++v) l.push(String(v));
            else
                for (var y in e) g && "prototype" === y || !i.call(e, y) || l.push(String(y));
            if (d)
                for (var b = function(e) {
                        if ("undefined" == typeof window || !p) return f(e);
                        try {
                            return f(e)
                        } catch (e) {
                            return !1
                        }
                    }(e), h = 0; h < c.length; ++h) b && "constructor" === c[h] || !i.call(e, c[h]) || l.push(c[h]);
            return l
        }
    }
    e.exports = n
}, function(e, t, r) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
        i = Object.prototype.toString,
        o = function(e) {
            return !(n && e && "object" == typeof e && Symbol.toStringTag in e) && "[object Arguments]" === i.call(e)
        },
        a = function(e) {
            return !!o(e) || null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Array]" !== i.call(e) && "[object Function]" === i.call(e.callee)
        },
        s = function() {
            return o(arguments)
        }();
    o.isLegacyArguments = a, e.exports = s ? o : a
}, function(e, t, r) {
    "use strict";
    var n = function(e) {
        return e != e
    };
    e.exports = function(e, t) {
        return 0 === e && 0 === t ? 1 / e == 1 / t : e === t || !(!n(e) || !n(t))
    }
}, function(e, t, r) {
    "use strict";
    var n = r(116),
        i = RegExp.prototype.exec,
        o = Object.getOwnPropertyDescriptor,
        a = Object.prototype.toString,
        s = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
    e.exports = function(e) {
        if (!e || "object" != typeof e) return !1;
        if (!s) return "[object RegExp]" === a.call(e);
        var t = o(e, "lastIndex");
        return !(!t || !n(t, "value")) && function(e) {
            try {
                var t = e.lastIndex;
                return e.lastIndex = 0, i.call(e), !0
            } catch (e) {
                return !1
            } finally {
                e.lastIndex = t
            }
        }(e)
    }
}, function(e, t, r) {
    "use strict";
    var n = r(48);
    e.exports = n.call(Function.call, Object.prototype.hasOwnProperty)
}, function(e, t, r) {
    "use strict";
    var n = "Function.prototype.bind called on incompatible ",
        i = Array.prototype.slice,
        o = Object.prototype.toString;
    e.exports = function(e) {
        var t = this;
        if ("function" != typeof t || "[object Function]" !== o.call(t)) throw new TypeError(n + t);
        for (var r, a = i.call(arguments, 1), s = function() {
                if (this instanceof r) {
                    var n = t.apply(this, a.concat(i.call(arguments)));
                    return Object(n) === n ? n : this
                }
                return t.apply(e, a.concat(i.call(arguments)))
            }, d = Math.max(0, t.length - a.length), u = [], c = 0; c < d; c++) u.push("$" + c);
        if (r = Function("binder", "return function (" + u.join(",") + "){ return binder.apply(this,arguments); }")(s), t.prototype) {
            var f = function() {};
            f.prototype = t.prototype, r.prototype = new f, f.prototype = null
        }
        return r
    }
}, function(e, t, r) {
    "use strict";
    var n = r(49),
        i = r(119),
        o = r(72),
        a = r(73),
        s = r(124),
        d = i(o);
    n(d, {
        getPolyfill: a,
        implementation: o,
        shim: s
    }), e.exports = d
}, function(e, t, r) {
    "use strict";
    var n = r(48),
        i = r(120)("%Function%"),
        o = i.apply,
        a = i.call;
    e.exports = function() {
        return n.apply(a, arguments)
    }, e.exports.apply = function() {
        return n.apply(o, arguments)
    }
}, function(e, t, r) {
    "use strict";
    var n = TypeError,
        i = Object.getOwnPropertyDescriptor;
    if (i) try {
        i({}, "")
    } catch (e) {
        i = null
    }
    var o = function() {
            throw new n
        },
        a = i ? function() {
            try {
                return arguments.callee, o
            } catch (e) {
                try {
                    return i(arguments, "callee").get
                } catch (e) {
                    return o
                }
            }
        }() : o,
        s = r(121)(),
        d = Object.getPrototypeOf || function(e) {
            return e.__proto__
        },
        u = void 0,
        c = "undefined" == typeof Uint8Array ? void 0 : d(Uint8Array),
        f = {
            "%Array%": Array,
            "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer,
            "%ArrayBufferPrototype%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer.prototype,
            "%ArrayIteratorPrototype%": s ? d([][Symbol.iterator]()) : void 0,
            "%ArrayPrototype%": Array.prototype,
            "%ArrayProto_entries%": Array.prototype.entries,
            "%ArrayProto_forEach%": Array.prototype.forEach,
            "%ArrayProto_keys%": Array.prototype.keys,
            "%ArrayProto_values%": Array.prototype.values,
            "%AsyncFromSyncIteratorPrototype%": void 0,
            "%AsyncFunction%": void 0,
            "%AsyncFunctionPrototype%": void 0,
            "%AsyncGenerator%": void 0,
            "%AsyncGeneratorFunction%": void 0,
            "%AsyncGeneratorPrototype%": void 0,
            "%AsyncIteratorPrototype%": u && s && Symbol.asyncIterator ? u[Symbol.asyncIterator]() : void 0,
            "%Atomics%": "undefined" == typeof Atomics ? void 0 : Atomics,
            "%Boolean%": Boolean,
            "%BooleanPrototype%": Boolean.prototype,
            "%DataView%": "undefined" == typeof DataView ? void 0 : DataView,
            "%DataViewPrototype%": "undefined" == typeof DataView ? void 0 : DataView.prototype,
            "%Date%": Date,
            "%DatePrototype%": Date.prototype,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": Error,
            "%ErrorPrototype%": Error.prototype,
            "%eval%": eval,
            "%EvalError%": EvalError,
            "%EvalErrorPrototype%": EvalError.prototype,
            "%Float32Array%": "undefined" == typeof Float32Array ? void 0 : Float32Array,
            "%Float32ArrayPrototype%": "undefined" == typeof Float32Array ? void 0 : Float32Array.prototype,
            "%Float64Array%": "undefined" == typeof Float64Array ? void 0 : Float64Array,
            "%Float64ArrayPrototype%": "undefined" == typeof Float64Array ? void 0 : Float64Array.prototype,
            "%Function%": Function,
            "%FunctionPrototype%": Function.prototype,
            "%Generator%": void 0,
            "%GeneratorFunction%": void 0,
            "%GeneratorPrototype%": void 0,
            "%Int8Array%": "undefined" == typeof Int8Array ? void 0 : Int8Array,
            "%Int8ArrayPrototype%": "undefined" == typeof Int8Array ? void 0 : Int8Array.prototype,
            "%Int16Array%": "undefined" == typeof Int16Array ? void 0 : Int16Array,
            "%Int16ArrayPrototype%": "undefined" == typeof Int16Array ? void 0 : Int8Array.prototype,
            "%Int32Array%": "undefined" == typeof Int32Array ? void 0 : Int32Array,
            "%Int32ArrayPrototype%": "undefined" == typeof Int32Array ? void 0 : Int32Array.prototype,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": s ? d(d([][Symbol.iterator]())) : void 0,
            "%JSON%": "object" == typeof JSON ? JSON : void 0,
            "%JSONParse%": "object" == typeof JSON ? JSON.parse : void 0,
            "%Map%": "undefined" == typeof Map ? void 0 : Map,
            "%MapIteratorPrototype%": "undefined" != typeof Map && s ? d((new Map)[Symbol.iterator]()) : void 0,
            "%MapPrototype%": "undefined" == typeof Map ? void 0 : Map.prototype,
            "%Math%": Math,
            "%Number%": Number,
            "%NumberPrototype%": Number.prototype,
            "%Object%": Object,
            "%ObjectPrototype%": Object.prototype,
            "%ObjProto_toString%": Object.prototype.toString,
            "%ObjProto_valueOf%": Object.prototype.valueOf,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": "undefined" == typeof Promise ? void 0 : Promise,
            "%PromisePrototype%": "undefined" == typeof Promise ? void 0 : Promise.prototype,
            "%PromiseProto_then%": "undefined" == typeof Promise ? void 0 : Promise.prototype.then,
            "%Promise_all%": "undefined" == typeof Promise ? void 0 : Promise.all,
            "%Promise_reject%": "undefined" == typeof Promise ? void 0 : Promise.reject,
            "%Promise_resolve%": "undefined" == typeof Promise ? void 0 : Promise.resolve,
            "%Proxy%": "undefined" == typeof Proxy ? void 0 : Proxy,
            "%RangeError%": RangeError,
            "%RangeErrorPrototype%": RangeError.prototype,
            "%ReferenceError%": ReferenceError,
            "%ReferenceErrorPrototype%": ReferenceError.prototype,
            "%Reflect%": "undefined" == typeof Reflect ? void 0 : Reflect,
            "%RegExp%": RegExp,
            "%RegExpPrototype%": RegExp.prototype,
            "%Set%": "undefined" == typeof Set ? void 0 : Set,
            "%SetIteratorPrototype%": "undefined" != typeof Set && s ? d((new Set)[Symbol.iterator]()) : void 0,
            "%SetPrototype%": "undefined" == typeof Set ? void 0 : Set.prototype,
            "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer,
            "%SharedArrayBufferPrototype%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer.prototype,
            "%String%": String,
            "%StringIteratorPrototype%": s ? d("" [Symbol.iterator]()) : void 0,
            "%StringPrototype%": String.prototype,
            "%Symbol%": s ? Symbol : void 0,
            "%SymbolPrototype%": s ? Symbol.prototype : void 0,
            "%SyntaxError%": SyntaxError,
            "%SyntaxErrorPrototype%": SyntaxError.prototype,
            "%ThrowTypeError%": a,
            "%TypedArray%": c,
            "%TypedArrayPrototype%": c ? c.prototype : void 0,
            "%TypeError%": n,
            "%TypeErrorPrototype%": n.prototype,
            "%Uint8Array%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array,
            "%Uint8ArrayPrototype%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array.prototype,
            "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray,
            "%Uint8ClampedArrayPrototype%": "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray.prototype,
            "%Uint16Array%": "undefined" == typeof Uint16Array ? void 0 : Uint16Array,
            "%Uint16ArrayPrototype%": "undefined" == typeof Uint16Array ? void 0 : Uint16Array.prototype,
            "%Uint32Array%": "undefined" == typeof Uint32Array ? void 0 : Uint32Array,
            "%Uint32ArrayPrototype%": "undefined" == typeof Uint32Array ? void 0 : Uint32Array.prototype,
            "%URIError%": URIError,
            "%URIErrorPrototype%": URIError.prototype,
            "%WeakMap%": "undefined" == typeof WeakMap ? void 0 : WeakMap,
            "%WeakMapPrototype%": "undefined" == typeof WeakMap ? void 0 : WeakMap.prototype,
            "%WeakSet%": "undefined" == typeof WeakSet ? void 0 : WeakSet,
            "%WeakSetPrototype%": "undefined" == typeof WeakSet ? void 0 : WeakSet.prototype
        },
        l = r(48).call(Function.call, String.prototype.replace),
        p = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        g = /\\(\\)?/g,
        m = function(e) {
            var t = [];
            return l(e, p, (function(e, r, n, i) {
                t[t.length] = n ? l(i, g, "$1") : r || e
            })), t
        },
        v = function(e, t) {
            if (!(e in f)) throw new SyntaxError("intrinsic " + e + " does not exist!");
            if (void 0 === f[e] && !t) throw new n("intrinsic " + e + " exists, but is not available. Please file an issue!");
            return f[e]
        };
    e.exports = function(e, t) {
        if ("string" != typeof e || 0 === e.length) throw new TypeError("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && "boolean" != typeof t) throw new TypeError('"allowMissing" argument must be a boolean');
        for (var r = m(e), o = v("%" + (r.length > 0 ? r[0] : "") + "%", t), a = 1; a < r.length; a += 1)
            if (null != o)
                if (i && a + 1 >= r.length) {
                    var s = i(o, r[a]);
                    if (!(t || r[a] in o)) throw new n("base intrinsic for " + e + " exists, but the property is not available.");
                    o = s ? s.get || s.value : o[r[a]]
                } else o = o[r[a]];
        return o
    }
}, function(e, t, r) {
    "use strict";
    (function(t) {
        var n = t.Symbol,
            i = r(123);
        e.exports = function() {
            return "function" == typeof n && ("function" == typeof Symbol && ("symbol" == typeof n("foo") && ("symbol" == typeof Symbol("bar") && i())))
        }
    }).call(this, r(122))
}, function(e, t) {
    var r;
    r = function() {
        return this
    }();
    try {
        r = r || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (r = window)
    }
    e.exports = r
}, function(e, t, r) {
    "use strict";
    e.exports = function() {
        if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
        if ("symbol" == typeof Symbol.iterator) return !0;
        var e = {},
            t = Symbol("test"),
            r = Object(t);
        if ("string" == typeof t) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(t)) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(r)) return !1;
        for (t in e[t] = 42, e) return !1;
        if ("function" == typeof Object.keys && 0 !== Object.keys(e).length) return !1;
        if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e).length) return !1;
        var n = Object.getOwnPropertySymbols(e);
        if (1 !== n.length || n[0] !== t) return !1;
        if (!Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
        if ("function" == typeof Object.getOwnPropertyDescriptor) {
            var i = Object.getOwnPropertyDescriptor(e, t);
            if (42 !== i.value || !0 !== i.enumerable) return !1
        }
        return !0
    }
}, function(e, t, r) {
    "use strict";
    var n = r(49).supportsDescriptors,
        i = r(73),
        o = Object.getOwnPropertyDescriptor,
        a = Object.defineProperty,
        s = TypeError,
        d = Object.getPrototypeOf,
        u = /a/;
    e.exports = function() {
        if (!n || !d) throw new s("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
        var e = i(),
            t = d(u),
            r = o(t, "flags");
        return r && r.get === e || a(t, "flags", {
            configurable: !0,
            enumerable: !1,
            get: e
        }), e
    }
}, function(e, t, r) {
    "use strict";
    var n = Date.prototype.getDay,
        i = Object.prototype.toString,
        o = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
    e.exports = function(e) {
        return "object" == typeof e && null !== e && (o ? function(e) {
            try {
                return n.call(e), !0
            } catch (e) {
                return !1
            }
        }(e) : "[object Date]" === i.call(e))
    }
}, function(e, t, r) {
    "use strict";
    var n = r(13),
        i = r(127);
    n(n.P + n.F * r(129)("includes"), "String", {
        includes: function(e) {
            return !!~i(this, e, "includes").indexOf(e, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(e, t, r) {
    var n = r(128),
        i = r(34);
    e.exports = function(e, t, r) {
        if (n(t)) throw TypeError("String#" + r + " doesn't accept regex!");
        return String(i(e))
    }
}, function(e, t, r) {
    var n = r(15),
        i = r(33),
        o = r(12)("match");
    e.exports = function(e) {
        var t;
        return n(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e))
    }
}, function(e, t, r) {
    var n = r(12)("match");
    e.exports = function(e) {
        var t = /./;
        try {
            "/./" [e](t)
        } catch (r) {
            try {
                return t[n] = !1, !"/./" [e](t)
            } catch (e) {}
        }
        return !0
    }
}, function(e, t, r) {
    var n = r(13);
    n(n.S, "Number", {
        isInteger: r(131)
    })
}, function(e, t, r) {
    var n = r(15),
        i = Math.floor;
    e.exports = function(e) {
        return !n(e) && isFinite(e) && i(e) === e
    }
}, function(e, t, r) {
    "use strict";
    r.r(t);
    var n = {};
    r.r(n), r.d(n, "bidder", (function() {
        return Or
    })), r.d(n, "generate", (function() {
        return Cr
    })), r.d(n, "validate", (function() {
        return Pr
    }));
    var i = {};
    r.r(i), r.d(i, "bidder", (function() {
        return xr
    })), r.d(i, "generate", (function() {
        return Br
    })), r.d(i, "validate", (function() {
        return Ur
    }));
    var o = {};
    r.r(o), r.d(o, "bidder", (function() {
        return Dr
    })), r.d(o, "generate", (function() {
        return kr
    })), r.d(o, "validate", (function() {
        return Nr
    }));
    var a = {};
    r.r(a), r.d(a, "bidder", (function() {
        return rn
    })), r.d(a, "generate", (function() {
        return nn
    })), r.d(a, "validate", (function() {
        return on
    }));
    var s = {};
    r.r(s), r.d(s, "bidder", (function() {
        return Nn
    })), r.d(s, "generate", (function() {
        return Mn
    })), r.d(s, "validate", (function() {
        return qn
    }));
    var d = {};
    r.r(d), r.d(d, "bidder", (function() {
        return Hn
    })), r.d(d, "generate", (function() {
        return Kn
    })), r.d(d, "validate", (function() {
        return Jn
    }));
    var u = r(1);

    function c() {
        return window.jwpb
    }
    window.jwpb = window.jwpb || {}, window.jwpb.cmd = window.jwpb.cmd || [], window.jwpb.que = window.jwpb.que || [], window._pbjsGlobals = window._pbjsGlobals || [], window._pbjsGlobals.push("jwpb");
    var f = r(0),
        l = r(18),
        p = r.n(l),
        g = r(9),
        m = r(6),
        v = r(8),
        y = r(37),
        b = r(22),
        h = r(2);

    function A(e) {
        var t, r, n = {
            type: "xml",
            value: e.vastXml ? e.vastXml : (t = e.vastUrl, r = e.vastImpUrl, '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA[' + t + "]]></VASTAdTagURI>\n        <Impression>" + (r ? "<![CDATA[" + r + "]]>" : "") + "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>"),
            ttlseconds: Number(e.ttl)
        };
        return h.b.getConfig("cache.vasttrack") && (n.bidder = e.bidder, n.bidid = e.requestId), "string" == typeof e.customCacheKey && "" !== e.customCacheKey && (n.key = e.customCacheKey), n
    }

    function E(e, t) {
        var r = {
            puts: e.map(A)
        };
        Object(b.a)(h.b.getConfig("cache.url"), function(e) {
            return {
                success: function(t) {
                    var r;
                    try {
                        r = JSON.parse(t).responses
                    } catch (t) {
                        return void e(t, [])
                    }
                    r ? e(null, r) : e(new Error("The cache server didn't respond with a responses property."), [])
                },
                error: function(t, r) {
                    e(new Error("Error storing video ad in the cache: " + t + ": " + JSON.stringify(r)), [])
                }
            }
        }(t), JSON.stringify(r), {
            contentType: "text/plain",
            withCredentials: !0
        })
    }
    var S = r(3),
        T = r.n(S),
        I = {},
        _ = ["criteo", "outstream", "adagio", "browsi"];
    var w = r(5),
        O = r.n(w),
        C = "outstream";

    function P(e) {
        var t = this,
            r = e.url,
            n = e.config,
            i = e.id,
            o = e.callback,
            a = e.loaded,
            s = e.adUnitCode;
        this.url = r, this.config = n, this.handlers = {}, this.id = i, this.loaded = a, this.cmd = [], this.push = function(e) {
                "function" == typeof e ? t.loaded ? e.call() : t.cmd.push(e) : f.logError("Commands given to Renderer.push must be wrapped in a function")
            }, this.callback = o || function() {
                t.loaded = !0, t.process()
            },
            function(e) {
                var t = jwpb.adUnits,
                    r = O()(t, (function(t) {
                        return t.code === e
                    }));
                return !!(r && r.renderer && r.renderer.url && r.renderer.render)
            }(s) ? f.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit " + s) : function(e, t, r) {
                if (t && e) {
                    if (T()(_, t)) return I[e] ? (r && "function" == typeof r && (I[e].loaded ? r() : I[e].callbacks.push(r)), I[e].tag) : (I[e] = {
                        loaded: !1,
                        tag: null,
                        callbacks: []
                    }, r && "function" == typeof r && I[e].callbacks.push(r), f.logWarn("module " + t + " is loading external JavaScript"), function(t, r) {
                        var n = document.createElement("script");
                        n.type = "text/javascript", n.async = !0, I[e].tag = n, n.readyState ? n.onreadystatechange = function() {
                            "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null, r())
                        } : n.onload = function() {
                            r()
                        };
                        return n.src = t, f.insertElement(n), n
                    }(e, (function() {
                        I[e].loaded = !0;
                        try {
                            for (var t = 0; t < I[e].callbacks.length; t++) I[e].callbacks[t]()
                        } catch (e) {
                            f.logError("Error executing callback", "adloader.js:loadExternalScript", e)
                        }
                    })));
                    f.logError(t + " not whitelisted for loading external JavaScript")
                } else f.logError("cannot load external script without url and moduleCode")
            }(r, C, this.callback)
    }

    function j(e) {
        return !(!e || !e.url)
    }

    function R(e, t) {
        e.render(t)
    }
    P.install = function(e) {
        return new P({
            url: e.url,
            config: e.config,
            id: e.id,
            callback: e.callback,
            loaded: e.loaded,
            adUnitCode: e.adUnitCode
        })
    }, P.prototype.getConfig = function() {
        return this.config
    }, P.prototype.setRender = function(e) {
        this.render = e
    }, P.prototype.setEventHandlers = function(e) {
        this.handlers = e
    }, P.prototype.handleVideoEvent = function(e) {
        var t = e.id,
            r = e.eventName;
        "function" == typeof this.handlers[r] && this.handlers[r](), f.logMessage("Prebid Renderer event for id " + t + " type " + r)
    }, P.prototype.process = function() {
        for (; this.cmd.length > 0;) try {
            this.cmd.shift().call()
        } catch (e) {
            f.logError("Error processing Renderer command: ", e)
        }
    };
    var x = r(25),
        B = r(7),
        U = r(38),
        D = r(4),
        k = x.a.syncUsers,
        N = r(0),
        M = r(11).default,
        q = r(18),
        W = r(6),
        G = "started",
        z = "inProgress",
        L = "completed";
    q.on(W.EVENTS.BID_ADJUSTMENT, (function(e) {
        ! function(e) {
            var t, r = e.bidderCode,
                n = e.cpm;
            if (jwpb.bidderSettings && (r && jwpb.bidderSettings[r] && "function" == typeof jwpb.bidderSettings[r].bidCpmAdjustment ? t = jwpb.bidderSettings[r].bidCpmAdjustment : jwpb.bidderSettings[W.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof jwpb.bidderSettings[W.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (t = jwpb.bidderSettings[W.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), t)) try {
                n = t(e.cpm, Object(u.default)({}, e))
            } catch (e) {
                N.logError("Error during bid adjustment", "bidmanager.js", e)
            }
            n >= 0 && (e.cpm = n)
        }(e)
    }));
    var V = 4,
        F = {},
        Y = {},
        H = [];

    function K(e) {
        var t, r, n, i, o = e.adUnits,
            a = e.adUnitCodes,
            s = e.callback,
            d = e.cbTimeout,
            c = e.labels,
            l = e.auctionId,
            p = o,
            g = c,
            m = a,
            v = [],
            b = [],
            A = [],
            E = l || N.generateUUID(),
            S = s,
            T = d,
            I = [],
            _ = new Set;

        function w() {
            return {
                auctionId: E,
                timestamp: t,
                auctionEnd: r,
                auctionStatus: n,
                adUnits: p,
                adUnitCodes: m,
                labels: g,
                bidderRequests: v,
                noBids: A,
                bidsReceived: b,
                winningBids: I,
                timeout: T
            }
        }

        function C(e, t) {
            if (t && clearTimeout(i), void 0 === r) {
                var a = [];
                e && (N.logMessage("Auction " + E + " timedOut"), s = _, (a = v.map((function(e) {
                    return (e.bids || []).filter((function(e) {
                        return !s.has(e.bidder)
                    }))
                })).reduce(f.flatten, []).map((function(e) {
                    return {
                        bidId: e.bidId,
                        bidder: e.bidder,
                        adUnitCode: e.adUnitCode,
                        auctionId: e.auctionId
                    }
                }))).length && q.emit(W.EVENTS.BID_TIMEOUT, a)), n = L, r = Date.now(), q.emit(W.EVENTS.AUCTION_END, w()), $(p, (function() {
                    try {
                        if (null != S) {
                            var t = m,
                                r = b.filter(N.bind.call(f.adUnitsFilter, this, t)).reduce(ae, {});
                            S.apply(jwpb, [r, e, E]), S = null
                        }
                    } catch (e) {
                        N.logError("Error executing bidsBackHandler", null, e)
                    } finally {
                        a.length && M.callTimedOutBidders(o, a, T);
                        var n = h.b.getConfig("userSync") || {};
                        n.enableOverride || k(n.syncDelay)
                    }
                }))
            }
            var s
        }

        function j() {
            N.logInfo("Bids Received for Auction with id: " + E, b), n = L, C(!1, !0)
        }

        function R(e) {
            _.add(e)
        }

        function x(e) {
            var t = this;
            e.forEach((function(e) {
                var t;
                t = e, v = v.concat(t)
            }));
            var r = {},
                o = {
                    bidRequests: e,
                    run: function() {
                        var o, d;
                        o = C.bind(null, !0), d = setTimeout(o, T), i = d, n = z, q.emit(W.EVENTS.AUCTION_INIT, w());
                        var c = function(e, t) {
                            var r = 0,
                                n = !1,
                                i = new Set,
                                o = {};

                            function a() {
                                r--, n && 0 === r && e()
                            }
                            return {
                                addBidResponse: function(e, n) {
                                    o[n.requestId] = !0, r++;
                                    var i = function(e) {
                                        var t = e.adUnitCode,
                                            r = e.bid,
                                            n = e.bidderRequest,
                                            i = e.auctionId,
                                            o = n.start,
                                            a = Object(u.default)({}, r, {
                                                auctionId: i,
                                                responseTimestamp: Object(f.timestamp)(),
                                                requestTimestamp: o,
                                                cpm: parseFloat(r.cpm) || 0,
                                                bidder: r.bidderCode,
                                                adUnitCode: t
                                            });
                                        a.timeToRespond = a.responseTimestamp - a.requestTimestamp, q.emit(W.EVENTS.BID_ADJUSTMENT, a);
                                        var s = n.bids && O()(n.bids, (function(e) {
                                                return e.adUnitCode == t
                                            })),
                                            d = s && s.renderer;
                                        d && d.url && (a.renderer = P.install({
                                            url: d.url
                                        }), a.renderer.setRender(d.render));
                                        var c = te(r.mediaType, s, h.b.getConfig("mediaTypePriceGranularity")),
                                            l = Object(y.a)(a.cpm, "object" == typeof c ? c : h.b.getConfig("customPriceBucket"), h.b.getConfig("currency.granularityMultiplier"));
                                        return a.pbLg = l.low, a.pbMg = l.med, a.pbHg = l.high, a.pbAg = l.auto, a.pbDg = l.dense, a.pbCg = l.custom, a
                                    }({
                                        adUnitCode: e,
                                        bid: n,
                                        bidderRequest: this,
                                        auctionId: t.getAuctionId()
                                    });
                                    "video" === i.mediaType ? function(e, t, r, n) {
                                        var i = !0,
                                            o = Object(f.getBidRequest)(t.requestId, [r]),
                                            a = o && Object(f.deepAccess)(o, "mediaTypes.video"),
                                            s = a && Object(f.deepAccess)(a, "context");
                                        h.b.getConfig("cache.url") && s !== U.a && (t.videoCacheKey ? t.vastUrl || (N.logError("videoCacheKey specified but not required vastUrl for video bid"), i = !1) : (i = !1, ee(e, t, n, o)));
                                        i && (Z(e, t), n())
                                    }(t, i, this, a) : (Z(t, i), a())
                                },
                                adapterDone: function() {
                                    i.add(this), n = t.getBidRequests().every((function(e) {
                                        return i.has(e)
                                    })), this.bids.forEach((function(e) {
                                        o[e.bidId] || (t.addNoBid(e), q.emit(W.EVENTS.NO_BID, e))
                                    })), n && 0 === r && e()
                                }
                            }
                        }(j, t);
                        M.callBids(p, e, (function() {
                            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                            J.apply({
                                dispatch: c.addBidResponse,
                                bidderRequest: this
                            }, t)
                        }), c.adapterDone, {
                            request: function(e, t) {
                                s(F, t), s(r, e), Y[e] || (Y[e] = {
                                    SRA: !0,
                                    origin: t
                                }), r[e] > 1 && (Y[e].SRA = !1)
                            },
                            done: function(e) {
                                F[e]--, H[0] && a(H[0]) && H.shift()
                            }
                        }, T, R)
                    }
                };

            function a(e) {
                var t = !0,
                    r = h.b.getConfig("maxRequestsPerOrigin") || V;
                return e.bidRequests.some((function(e) {
                    var n = 1,
                        i = void 0 !== e.src && e.src === W.S2S.SRC ? "s2s" : e.bidderCode;
                    return Y[i] && (!1 === Y[i].SRA && (n = Math.min(e.bids.length, r)), F[Y[i].origin] + n > r && (t = !1)), !t
                })), t && e.run(), t
            }

            function s(e, t) {
                void 0 === e[t] ? e[t] = 1 : e[t]++
            }
            a(o) || (N.logWarn("queueing auction due to limited endpoint capacity"), H.push(o))
        }
        return {
            addBidReceived: function(e) {
                b = b.concat(e)
            },
            addNoBid: function(e) {
                A = A.concat(e)
            },
            executeCallback: C,
            callBids: function() {
                n = G, t = Date.now();
                var e = M.makeBidRequests(p, t, E, T, g);
                N.logInfo("Bids Requested for Auction with id: " + E, e), e.length < 1 ? (N.logWarn("No valid bid requests returned for auction"), j()) : X.call({
                    dispatch: x,
                    context: this
                }, e)
            },
            addWinningBid: function(e) {
                I = I.concat(e), M.callBidWonBidder(e.bidder, e, o)
            },
            setBidTargeting: function(e) {
                M.callSetTargetingBidder(e.bidder, e)
            },
            getWinningBids: function() {
                return I
            },
            getTimeout: function() {
                return T
            },
            getAuctionId: function() {
                return E
            },
            getAuctionStatus: function() {
                return n
            },
            getAdUnits: function() {
                return p
            },
            getAdUnitCodes: function() {
                return m
            },
            getBidRequests: function() {
                return v
            },
            getBidsReceived: function() {
                return b
            },
            getNoBids: function() {
                return A
            }
        }
    }
    var J = Object(B.b)("async", (function(e, t) {
            this.dispatch.call(this.bidderRequest, e, t)
        }), "addBidResponse"),
        X = Object(B.b)("sync", (function(e) {
            this.dispatch.call(this.context, e)
        }), "addBidderRequests"),
        $ = Object(B.b)("async", (function(e, t) {
            t && t()
        }), "bidsBackCallback");

    function Q(e, t) {
        t.timeToRespond > e.getTimeout() + h.b.getConfig("timeoutBuffer") && e.executeCallback(!0)
    }

    function Z(e, t) {
        var r = e.getBidRequests(),
            n = O()(r, (function(e) {
                return e.bidderCode === t.bidderCode
            }));
        ! function(e, t) {
            var r;
            if (e.bidderCode && (e.cpm > 0 || e.dealId)) {
                var n = O()(t.bids, (function(t) {
                    return t.adUnitCode === e.adUnitCode
                }));
                r = function(e, t, r) {
                    if (!t) return {};
                    var n = {},
                        i = jwpb.bidderSettings;
                    if (i) {
                        var o = ie(t.mediaType, e, r);
                        oe(n, o, t), e && i[e] && i[e][W.JSON_MAPPING.ADSERVER_TARGETING] && (oe(n, i[e], t), t.sendStandardTargeting = i[e].sendStandardTargeting)
                    }
                    t.native && (n = Object(u.default)({}, n, Object(g.d)(t, r)));
                    return n
                }(e.bidderCode, e, n)
            }
            e.adserverTargeting = Object(u.default)(e.adserverTargeting || {}, r)
        }(t, n), q.emit(W.EVENTS.BID_RESPONSE, t), e.addBidReceived(t), Q(e, t)
    }
    var ee = Object(B.b)("async", (function(e, t, r, n) {
        E([t], (function(n, i) {
            var o;
            n ? (N.logWarn("Failed to save to the video cache: " + n + ". Video bid must be discarded."), Q(e, t)) : "" === i[0].uuid ? (N.logWarn("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."), Q(e, t)) : (t.videoCacheKey = i[0].uuid, t.vastUrl || (t.vastUrl = (o = t.videoCacheKey, h.b.getConfig("cache.url") + "?uuid=" + o)), Z(e, t), r())
        }))
    }), "callPrebidCache");

    function te(e, t, r) {
        if (e && r) {
            if (e === D.d) {
                var n = Object(f.deepAccess)(t, "mediaTypes." + D.d + ".context", "instream");
                if (r[D.d + "-" + n]) return r[D.d + "-" + n]
            }
            return r[e]
        }
    }
    var re = function(e, t) {
            var r = te(e, t, h.b.getConfig("mediaTypePriceGranularity"));
            return "string" == typeof e && r ? "string" == typeof r ? r : "custom" : h.b.getConfig("priceGranularity")
        },
        ne = function(e) {
            return function(t) {
                return e === W.GRANULARITY_OPTIONS.AUTO ? t.pbAg : e === W.GRANULARITY_OPTIONS.DENSE ? t.pbDg : e === W.GRANULARITY_OPTIONS.LOW ? t.pbLg : e === W.GRANULARITY_OPTIONS.MEDIUM ? t.pbMg : e === W.GRANULARITY_OPTIONS.HIGH ? t.pbHg : e === W.GRANULARITY_OPTIONS.CUSTOM ? t.pbCg : void 0
            }
        };

    function ie(e, t, r) {
        function n(e, t) {
            return {
                key: e,
                val: "function" == typeof t ? function(e) {
                    return t(e)
                } : function(e) {
                    return Object(f.getValue)(e, t)
                }
            }
        }
        var i = W.TARGETING_KEYS,
            o = re(e, r),
            a = jwpb.bidderSettings;
        if (a[W.JSON_MAPPING.BD_SETTING_STANDARD] || (a[W.JSON_MAPPING.BD_SETTING_STANDARD] = {}), a[W.JSON_MAPPING.BD_SETTING_STANDARD][W.JSON_MAPPING.ADSERVER_TARGETING] || (a[W.JSON_MAPPING.BD_SETTING_STANDARD][W.JSON_MAPPING.ADSERVER_TARGETING] = [n(i.BIDDER, "bidderCode"), n(i.AD_ID, "adId"), n(i.PRICE_BUCKET, ne(o)), n(i.SIZE, "size"), n(i.DEAL, "dealId"), n(i.SOURCE, "source"), n(i.FORMAT, "mediaType")]), "video" === e) {
            var s = a[W.JSON_MAPPING.BD_SETTING_STANDARD][W.JSON_MAPPING.ADSERVER_TARGETING];
            if ([i.UUID, i.CACHE_ID].forEach((function(e) {
                    void 0 === O()(s, (function(t) {
                        return t.key === e
                    })) && s.push(n(e, "videoCacheKey"))
                })), h.b.getConfig("cache.url") && (!t || !1 !== N.deepAccess(a, t + ".sendStandardTargeting"))) {
                var d = Object(v.c)(h.b.getConfig("cache.url"));
                void 0 === O()(s, (function(e) {
                    return e.key === i.CACHE_HOST
                })) && s.push(n(i.CACHE_HOST, (function(e) {
                    return N.deepAccess(e, "adserverTargeting." + i.CACHE_HOST) ? e.adserverTargeting[i.CACHE_HOST] : d.hostname
                })))
            }
        }
        return a[W.JSON_MAPPING.BD_SETTING_STANDARD]
    }

    function oe(e, t, r) {
        var n = t[W.JSON_MAPPING.ADSERVER_TARGETING];
        return r.size = r.getSize(), N._each(n, (function(n) {
            var i = n.key,
                o = n.val;
            if (e[i] && N.logWarn("The key: " + i + " is getting ovewritten"), N.isFn(o)) try {
                o = o(r)
            } catch (e) {
                N.logError("bidmanager", "ERROR", e)
            }(void 0 === t.suppressEmptyKeys || !0 !== t.suppressEmptyKeys) && i !== W.TARGETING_KEYS.DEAL || !N.isEmptyStr(o) && null != o ? e[i] = o : N.logInfo("suppressing empty key '" + i + "' from adserver targeting")
        })), e
    }

    function ae(e, t) {
        return e[t.adUnitCode] || (e[t.adUnitCode] = {
            bids: []
        }), e[t.adUnitCode].bids.push(t), e
    }
    var se = r(6);
    var de, ue, ce = (de = [], (ue = {}).addWinningBid = function(e) {
            var t = O()(de, (function(t) {
                return t.getAuctionId() === e.auctionId
            }));
            t ? (e.status = se.BID_STATUS.RENDERED, t.addWinningBid(e)) : Object(f.logWarn)("Auction not found when adding winning bid")
        }, ue.getAllWinningBids = function() {
            return de.map((function(e) {
                return e.getWinningBids()
            })).reduce(f.flatten, [])
        }, ue.getBidsRequested = function() {
            return de.map((function(e) {
                return e.getBidRequests()
            })).reduce(f.flatten, [])
        }, ue.getNoBids = function() {
            return de.map((function(e) {
                return e.getNoBids()
            })).reduce(f.flatten, [])
        }, ue.getBidsReceived = function() {
            return de.map((function(e) {
                if (e.getAuctionStatus() === L) return e.getBidsReceived()
            })).reduce(f.flatten, []).filter((function(e) {
                return e
            }))
        }, ue.getAdUnits = function() {
            return de.map((function(e) {
                return e.getAdUnits()
            })).reduce(f.flatten, [])
        }, ue.getAdUnitCodes = function() {
            return de.map((function(e) {
                return e.getAdUnitCodes()
            })).reduce(f.flatten, []).filter(f.uniques)
        }, ue.createAuction = function(e) {
            var t = K({
                adUnits: e.adUnits,
                adUnitCodes: e.adUnitCodes,
                callback: e.callback,
                cbTimeout: e.cbTimeout,
                labels: e.labels,
                auctionId: e.auctionId
            });
            return function(e) {
                de.push(e)
            }(t), t
        }, ue.findBidByAdId = function(e) {
            return O()(de.map((function(e) {
                return e.getBidsReceived()
            })).reduce(f.flatten, []), (function(t) {
                return t.adId === e
            }))
        }, ue.getStandardBidderAdServerTargeting = function() {
            return ie()[se.JSON_MAPPING.ADSERVER_TARGETING]
        }, ue.setStatusForBids = function(e, t) {
            var r = ue.findBidByAdId(e);
            if (r && (r.status = t), r && t === se.BID_STATUS.BID_TARGETING_SET) {
                var n = O()(de, (function(e) {
                    return e.getAuctionId() === r.auctionId
                }));
                n && n.setBidTargeting(r)
            }
        }, ue.getLastAuctionId = function() {
            return de.length && de[de.length - 1].getAuctionId()
        }, ue),
        fe = m.EVENTS.BID_WON;

    function le(e) {
        var t = e.message ? "message" : "data",
            r = {};
        try {
            r = JSON.parse(e[t])
        } catch (e) {
            return
        }
        if (r && r.adId) {
            var n = O()(ce.getBidsReceived(), (function(e) {
                return e.adId === r.adId
            }));
            if (n && "Prebid Request" === r.message && (! function(e, t, r) {
                    var n = e.adId,
                        i = e.ad,
                        o = e.adUrl,
                        a = e.width,
                        s = e.height,
                        d = e.renderer,
                        u = e.cpm;
                    j(d) ? R(d, e) : n && (! function(e) {
                        var t = e.adId,
                            r = e.adUnitCode,
                            n = e.width,
                            i = e.height;

                        function o(e) {
                            var n = function(e, t) {
                                    return window.googletag ? function(e) {
                                        return O()(window.googletag.pubads().getSlots(), (function(t) {
                                            return O()(t.getTargetingKeys(), (function(r) {
                                                return T()(t.getTargeting(r), e)
                                            }))
                                        })).getSlotElementId()
                                    }(e) : window.apntag ? function(e) {
                                        var t = window.apntag.getTag(e);
                                        return t && t.targetId
                                    }(t) : t
                                }(t, r),
                                i = document.getElementById(n);
                            return i && i.querySelector(e)
                        } ["div", "iframe"].forEach((function(e) {
                            var t = o(e + ':not([style*="display: none"])');
                            if (t) {
                                var a = t.style;
                                a.width = n + "px", a.height = i + "px"
                            } else Object(f.logWarn)("Unable to locate matching page element for adUnitCode " + r + ".  Can't resize it to ad's dimensions.  Please review setup.")
                        }))
                    }(e), r.postMessage(JSON.stringify({
                        message: "Prebid Response",
                        ad: Object(f.replaceAuctionPrice)(i, u),
                        adUrl: Object(f.replaceAuctionPrice)(o, u),
                        adId: n,
                        width: a,
                        height: s
                    }), t))
                }(n, r.adServerDomain, e.source), ce.addWinningBid(n), p.a.emit(fe, n)), n && "Prebid Native" === r.message) {
                if ("assetRequest" === r.action) {
                    var i = Object(g.c)(r, n);
                    return void e.source.postMessage(JSON.stringify(i), e.origin)
                }
                if ("click" === Object(g.b)(r, n)) return;
                ce.addWinningBid(n), p.a.emit(fe, n)
            }
        }
    }
    var pe = r(23),
        ge = r(0),
        me = r(6),
        ve = [],
        ye = 20,
        be = Object.keys(me.TARGETING_KEYS).map((function(e) {
            return me.TARGETING_KEYS[e]
        })),
        he = {
            isBidNotExpired: function(e) {
                return e.responseTimestamp + 1e3 * e.ttl + 1e3 > Object(f.timestamp)()
            },
            isUnusedBid: function(e) {
                return e && (e.status && !T()([me.BID_STATUS.RENDERED], e.status) || !e.status)
            }
        };

    function Ae(e, t, r) {
        void 0 === r && (r = 0);
        var n = [],
            i = h.b.getConfig("sendBidsControl.dealPrioritization"),
            o = Object(f.groupBy)(e, "adUnitCode");
        return Object.keys(o).forEach((function(e) {
            var a = [],
                s = Object(f.groupBy)(o[e], "bidderCode");
            Object.keys(s).forEach((function(e) {
                return a.push(s[e].reduce(t))
            })), r > 0 ? (a = i ? a(Ee(!0)) : a.sort((function(e, t) {
                return t.cpm - e.cpm
            })), n.push.apply(n, a.slice(0, r))) : n.push.apply(n, a)
        })), n
    }

    function Ee(e) {
        return void 0 === e && (e = !1),
            function(t, r) {
                return void 0 !== t.adUnitTargeting.hb_deal && void 0 === r.adUnitTargeting.hb_deal ? -1 : void 0 === t.adUnitTargeting.hb_deal && void 0 !== r.adUnitTargeting.hb_deal ? 1 : e ? r.cpm - t.cpm : r.adUnitTargeting.hb_pb - t.adUnitTargeting.hb_pb
            }
    }
    var Se, Te, Ie = function(e) {
            var t = {},
                r = {};

            function n(e, t) {
                return e.adserverTargeting && t && (ge.isArray(t) && T()(t, e.adUnitCode) || "string" == typeof t && e.adUnitCode === t)
            }

            function i(t) {
                return "string" == typeof t ? [t] : ge.isArray(t) ? t : e.getAdUnitCodes() || []
            }

            function o() {
                var t = e.getBidsReceived();
                return h.b.getConfig("useBidCache") || (t = t.filter((function(e) {
                    return r[e.adUnitCode] === e.auctionId
                }))), Ae(t = t.filter((function(e) {
                    return Object(f.deepAccess)(e, "video.context") !== D.a
                })).filter((function(e) {
                    return "banner" !== e.mediaType || Object(pe.c)([e.width, e.height])
                })).filter(he.isUnusedBid).filter(he.isBidNotExpired), f.getOldestHighestCpmBid)
            }

            function a(e, r) {
                var n = t.getWinningBids(e, r),
                    i = s();
                return n = n.map((function(e) {
                    var t;
                    return (t = {})[e.adUnitCode] = Object.keys(e.adserverTargeting).filter((function(t) {
                        return void 0 === e.sendStandardTargeting || e.sendStandardTargeting || -1 === i.indexOf(t)
                    })).reduce((function(t, r) {
                        var n, i = [e.adserverTargeting[r]],
                            o = ((n = {})[r.substring(0, ye)] = i, n);
                        if (r === me.TARGETING_KEYS.DEAL) {
                            var a, s = ((a = {})[(r + "_" + e.bidderCode).substring(0, ye)] = i, a);
                            return [].concat(t, [o, s])
                        }
                        return [].concat(t, [o])
                    }), []), t
                }))
            }

            function s() {
                return e.getStandardBidderAdServerTargeting().map((function(e) {
                    return e.key
                })).concat(be).filter(f.uniques)
            }

            function d(e, t, r, n) {
                return Object.keys(t.adserverTargeting).filter(c()).forEach((function(r) {
                    e.length && e.filter(function(e) {
                        return function(r) {
                            return r.adUnitCode === t.adUnitCode && r.adserverTargeting[e]
                        }
                    }(r)).forEach(function(e) {
                        return function(r) {
                            ge.isArray(r.adserverTargeting[e]) || (r.adserverTargeting[e] = [r.adserverTargeting[e]]), r.adserverTargeting[e] = r.adserverTargeting[e].concat(t.adserverTargeting[e]).filter(f.uniques), delete t.adserverTargeting[e]
                        }
                    }(r))
                })), e.push(t), e
            }

            function c() {
                var e = s().concat(g.a);
                return function(t) {
                    return -1 === e.indexOf(t)
                }
            }

            function l(e) {
                var t;
                return (t = {})[e.adUnitCode] = Object.keys(e.adserverTargeting).filter(c()).map((function(t) {
                    var r;
                    return (r = {})[t.substring(0, ye)] = [e.adserverTargeting[t]], r
                })), t
            }

            function p(e, t) {
                return t.map((function(t) {
                    var r;
                    return (r = {})[(t + "_" + e.bidderCode).substring(0, ye)] = [e.adserverTargeting[t]], r
                }))
            }
            return t.setLatestAuctionForAdUnit = function(e, t) {
                r[e] = t
            }, t.resetPresetTargeting = function(t) {
                if (Object(f.isGptPubadsDefined)()) {
                    var r = i(t),
                        n = e.getAdUnits().filter((function(e) {
                            return T()(r, e.code)
                        }));
                    window.googletag.pubads().getSlots().forEach((function(e) {
                        ve.forEach((function(t) {
                            n.forEach((function(r) {
                                r.code !== e.getAdUnitPath() && r.code !== e.getSlotElementId() || e.setTargeting(t, null)
                            }))
                        }))
                    }))
                }
            }, t.resetPresetTargetingAST = function(e) {
                i(e).forEach((function(e) {
                    var t = window.apntag.getTag(e);
                    if (t && t.keywords) {
                        var r = Object.keys(t.keywords),
                            n = {};
                        r.forEach((function(e) {
                            T()(ve, e.toLowerCase()) || (n[e] = t.keywords[e])
                        })), window.apntag.modifyTag(e, {
                            keywords: n
                        })
                    }
                }))
            }, t.getAllTargeting = function(e, t) {
                void 0 === t && (t = o());
                var r = i(e),
                    s = a(r, t).concat(function(e, t) {
                        return t.filter((function(t) {
                            return T()(e, t.adUnitCode)
                        })).map((function(e) {
                            return Object(u.default)({}, e)
                        })).reduce(d, []).map(l).filter((function(e) {
                            return e
                        }))
                    }(r, t)).concat(h.b.getConfig("enableSendAllBids") ? function(e, t) {
                        var r = be.concat(g.a),
                            i = h.b.getConfig("sendBidsControl.bidLimit");
                        return Ae(t, f.getHighestCpm, i).map((function(t) {
                            var i;
                            if (n(t, e)) return (i = {})[t.adUnitCode] = p(t, r.filter((function(e) {
                                return void 0 !== t.adserverTargeting[e]
                            }))), i
                        })).filter((function(e) {
                            return e
                        }))
                    }(r, t) : function(e, t) {
                        if (!0 === h.b.getConfig("targetingControls.alwaysIncludeDeals")) {
                            var r = be.concat(g.a);
                            return Ae(t, f.getHighestCpm).map((function(t) {
                                var i;
                                if (t.dealId && n(t, e)) return (i = {})[t.adUnitCode] = p(t, r.filter((function(e) {
                                    return void 0 !== t.adserverTargeting[e]
                                }))), i
                            })).filter((function(e) {
                                return e
                            }))
                        }
                        return []
                    }(r, t));
                s.map((function(e) {
                    Object.keys(e).map((function(t) {
                        e[t].map((function(e) {
                            -1 === ve.indexOf(Object.keys(e)[0]) && (ve = Object.keys(e).concat(ve))
                        }))
                    }))
                })), s = function(e) {
                    return e.map((function(e) {
                        var t;
                        return (t = {})[Object.keys(e)[0]] = e[Object.keys(e)[0]].map((function(e) {
                            var t;
                            return (t = {})[Object.keys(e)[0]] = e[Object.keys(e)[0]].join(", "), t
                        })).reduce((function(e, t) {
                            return Object(u.default)(t, e)
                        }), {}), t
                    })).reduce((function(e, t) {
                        var r = Object.keys(t)[0];
                        return e[r] = Object(u.default)({}, e[r], t[r]), e
                    }), {})
                }(s);
                var c = h.b.getConfig("targetingControls.auctionKeyMaxChars");
                return c && (Object(f.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of " + c + " characters.  Running checks on auction keys..."), s = function(e, t) {
                    var r = Object(f.deepClone)(e);
                    return Object.keys(r).map((function(e) {
                        return {
                            adUnitCode: e,
                            adUnitTargeting: r[e]
                        }
                    })).sort(Ee()).reduce((function(e, n, i, o) {
                        var a, s = (a = n.adUnitTargeting, Object.keys(a).reduce((function(e, t) {
                            return e + (t + "%3d") + encodeURIComponent(a[t]) + "%26"
                        }), ""));
                        i + 1 === o.length && (s = s.slice(0, -3));
                        var d = n.adUnitCode,
                            u = s.length;
                        return u <= t ? (t -= u, Object(f.logInfo)("AdUnit '" + d + "' auction keys comprised of " + u + " characters.  Deducted from running threshold; new limit is " + t, r[d]), e[d] = r[d]) : Object(f.logWarn)("The following keys for adUnitCode '" + d + "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was " + u + ", the current allotted amount was " + t + ".\n", r[d]), i + 1 === o.length && 0 === Object.keys(e).length && Object(f.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."), e
                    }), {})
                }(s, c)), r.forEach((function(e) {
                    s[e] || (s[e] = {})
                })), s
            }, t.setTargetingForGPT = function(e, t) {
                window.googletag.pubads().getSlots().forEach((function(r) {
                    Object.keys(e).filter(t ? t(r) : Object(f.isAdUnitCodeMatchingSlot)(r)).forEach((function(t) {
                        return Object.keys(e[t]).forEach((function(n) {
                            var i = e[t][n].split(",");
                            (i = i.length > 1 ? [i] : i).map((function(e) {
                                return ge.logMessage("Attempting to set key value for slot: " + r.getSlotElementId() + " key: " + n + " value: " + e), e
                            })).forEach((function(e) {
                                r.setTargeting(n, e)
                            }))
                        }))
                    }))
                }))
            }, t.getWinningBids = function(e, t) {
                void 0 === t && (t = o());
                var r = i(e);
                return t.filter((function(e) {
                    return T()(r, e.adUnitCode)
                })).filter((function(e) {
                    return e.cpm > 0
                })).map((function(e) {
                    return e.adUnitCode
                })).filter(f.uniques).map((function(e) {
                    return t.filter((function(t) {
                        return t.adUnitCode === e ? t : null
                    })).reduce(f.getHighestCpm)
                }))
            }, t.setTargetingForAst = function(e) {
                var r = t.getAllTargeting(e);
                try {
                    t.resetPresetTargetingAST(e)
                } catch (e) {
                    ge.logError("unable to reset targeting for AST" + e)
                }
                Object.keys(r).forEach((function(e) {
                    return Object.keys(r[e]).forEach((function(t) {
                        if (ge.logMessage("Attempting to set targeting for targetId: " + e + " key: " + t + " value: " + r[e][t]), ge.isStr(r[e][t]) || ge.isArray(r[e][t])) {
                            var n = {};
                            t.search(/pt[0-9]/) < 0 ? n[t.toUpperCase()] = r[e][t] : n[t] = r[e][t], window.apntag.setKeywords(e, n, {
                                overrideKeyValue: !0
                            })
                        }
                    }))
                }))
            }, t.isApntagDefined = function() {
                if (window.apntag && ge.isFn(window.apntag.setKeywords)) return !0
            }, t
        }(ce),
        _e = "jwpb:debugging";

    function we(e) {
        Object(f.logMessage)("DEBUG: " + e)
    }

    function Oe(e) {
        Object(f.logWarn)("DEBUG: " + e)
    }

    function Ce(e) {
        Se = Ue.bind(e), J.before(Se, 5), Te = De.bind(e), X.before(Te, 5)
    }

    function Pe() {
        J.getHooks({
            hook: Se
        }).remove(), X.getHooks({
            hook: Te
        }).remove()
    }

    function je(e, t) {
        void 0 === t && (t = !1), h.b.setConfig({
            debug: !0
        }), Pe(), Ce(e), we("bidder overrides enabled" + (t ? " from session" : ""))
    }

    function Re(e, t, r) {
        return !(!e.bidder || e.bidder === t) || !(!e.adUnitCode || e.adUnitCode === r)
    }

    function xe(e, t) {
        return Array.isArray(e) && -1 === e.indexOf(t)
    }

    function Be(e, t, r) {
        return Object.keys(e).filter((function(e) {
            return -1 === ["adUnitCode", "bidder"].indexOf(e)
        })).reduce((function(t, n) {
            return we("bidder overrides changed '" + t.adUnitCode + "/" + t.bidderCode + "' " + r + "." + n + " from '" + t[n] + ".js' to '" + e[n] + "'"), t[n] = e[n], t
        }), t)
    }

    function Ue(e, t, r) {
        xe(this.bidders, r.bidderCode) ? Oe("bidder '" + r.bidderCode + "' excluded from auction by bidder overrides") : (Array.isArray(this.bids) && this.bids.forEach((function(e) {
            Re(e, r.bidderCode, t) || Be(e, r, "bidder")
        })), e(t, r))
    }

    function De(e, t) {
        var r = this,
            n = t.filter((function(e) {
                return !xe(r.bidders, e.bidderCode) || (Oe("bidRequest '" + e.bidderCode + "' excluded from auction by bidder overrides"), !1)
            }));
        Array.isArray(r.bidRequests) && n.forEach((function(e) {
            r.bidRequests.forEach((function(t) {
                e.bids.forEach((function(r) {
                    Re(t, e.bidderCode, r.adUnitCode) || Be(t, r, "bidRequest")
                }))
            }))
        })), e(n)
    }

    function ke(e) {
        if (e.enabled) {
            try {
                window.sessionStorage.setItem(_e, JSON.stringify(e))
            } catch (e) {}
            je(e)
        } else {
            Pe(), we("bidder overrides disabled");
            try {
                window.sessionStorage.removeItem(_e)
            } catch (e) {}
        }
    }
    h.b.getConfig("debugging", (function(e) {
        return ke(e.debugging)
    }));
    var Ne = r(19),
        Me = r(27),
        qe = r(26),
        We = c(),
        Ge = r(6),
        ze = r(0),
        Le = r(11).default,
        Ve = r(18),
        Fe = x.a.triggerUserSyncs,
        Ye = Ge.EVENTS,
        He = Ye.ADD_AD_UNITS,
        Ke = Ye.BID_WON,
        Je = Ye.REQUEST_BIDS,
        Xe = Ye.SET_TARGETING,
        $e = Ye.AD_RENDER_FAILED,
        Qe = Ge.AD_RENDER_FAILED_REASON,
        Ze = Qe.PREVENT_WRITING_ON_MAIN_DOCUMENT,
        et = Qe.NO_AD,
        tt = Qe.EXCEPTION,
        rt = Qe.CANNOT_FIND_AD,
        nt = Qe.MISSING_DOC_OR_ADID,
        it = {
            bidWon: function(e) {
                var t = ce.getBidsRequested().map((function(e) {
                    return e.bids.map((function(e) {
                        return e.adUnitCode
                    }))
                })).reduce(f.flatten).filter(f.uniques);
                if (!ze.contains(t, e)) return void ze.logError('The "' + e + '" placement is not defined.');
                return !0
            }
        };

    function ot(e, t, r) {
        e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t, e.defaultView.frameElement.height = r)
    }

    function at(e, t) {
        var r = [];
        return ze.isArray(e) && (t ? e.length === t : e.length > 0) && (e.every((function(e) {
            return Object(f.isArrayOfNums)(e, 2)
        })) ? r = e : Object(f.isArrayOfNums)(e, 2) && r.push(e)), r
    }

    function st(e) {
        var t = e.mediaTypes.banner,
            r = at(t.sizes);
        r.length > 0 ? (t.sizes = r, e.sizes = r) : (ze.logError("Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."), delete e.mediaTypes.banner)
    }

    function dt(e) {
        var t = e.mediaTypes.video,
            r = "number" == typeof t.playerSize[0] ? 2 : 1,
            n = at(t.playerSize, r);
        n.length > 0 ? (2 === r && ze.logInfo("Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format."), t.playerSize = n, e.sizes = n) : (ze.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."), delete e.mediaTypes.video.playerSize)
    }

    function ut(e) {
        var t = e.mediaTypes.native;
        t.image && t.image.sizes && !Array.isArray(t.image.sizes) && (ze.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), delete e.mediaTypes.native.image.sizes), t.image && t.image.aspect_ratios && !Array.isArray(t.image.aspect_ratios) && (ze.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), delete e.mediaTypes.native.image.aspect_ratios), t.icon && t.icon.sizes && !Array.isArray(t.icon.sizes) && (ze.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), delete e.mediaTypes.native.icon.sizes)
    }! function(e) {
        var t;
        try {
            e = e || window.sessionStorage, t = JSON.parse(e.getItem(_e))
        } catch (e) {}
        t && je(t, !0)
    }(), We.bidderSettings = We.bidderSettings || {}, We.libLoaded = !0, We.version = "v3.15.0", ze.logInfo("Prebid.js v3.15.0 loaded"), We.adUnits = We.adUnits || [], We.triggerUserSyncs = Fe;
    var ct = Object(B.b)("sync", (function(e) {
        return e.filter((function(e) {
            var t = e.mediaTypes;
            if (!t || 0 === Object.keys(t).length) return ze.logError("Detected adUnit.code '" + e.code + "' did not have a 'mediaTypes' object defined.  This is a required field for the auction, so this adUnit has been removed."), !1;
            (t.banner && st(e), t.video) && (t.video.playerSize && dt(e));
            return t.native && ut(e), !0
        }))
    }), "checkAdUnitSetup");

    function ft(e) {
        var t = ce[e]().filter(ze.bind.call(f.adUnitsFilter, this, ce.getAdUnitCodes())),
            r = ce.getLastAuctionId();
        return t.map((function(e) {
            return e.adUnitCode
        })).filter(f.uniques).map((function(e) {
            return t.filter((function(t) {
                return t.auctionId === r && t.adUnitCode === e
            }))
        })).filter((function(e) {
            return e && e[0] && e[0].adUnitCode
        })).map((function(e) {
            var t;
            return (t = {})[e[0].adUnitCode] = {
                bids: e
            }, t
        })).reduce((function(e, t) {
            return Object(u.default)(e, t)
        }), {})
    }

    function lt(e) {
        var t = e.reason,
            r = e.message,
            n = e.bid,
            i = e.id,
            o = {
                reason: t,
                message: r
            };
        n && (o.bid = n), i && (o.adId = i), ze.logError(r), Ve.emit($e, o)
    }

    function pt(e) {
        e.forEach((function(e) {
            if (void 0 === e.called) try {
                e.call(), e.called = !0
            } catch (e) {
                ze.logError("Error processing command :", "prebid.js", e)
            }
        }))
    }
    We.getAdserverTargetingForAdUnitCodeStr = function(e) {
        if (ze.logInfo("Invoking jwpb.getAdserverTargetingForAdUnitCodeStr", arguments), e) {
            var t = We.getAdserverTargetingForAdUnitCode(e);
            return ze.transformAdServerTargetingObj(t)
        }
        ze.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
    }, We.getAdserverTargetingForAdUnitCode = function(e) {
        return We.getAdserverTargeting(e)[e]
    }, We.getAdserverTargeting = function(e) {
        return ze.logInfo("Invoking jwpb.getAdserverTargeting", arguments), Ie.getAllTargeting(e)
    }, We.getNoBids = function() {
        return ze.logInfo("Invoking jwpb.getNoBids", arguments), ft("getNoBids")
    }, We.getBidResponses = function() {
        return ze.logInfo("Invoking jwpb.getBidResponses", arguments), ft("getBidsReceived")
    }, We.getBidResponsesForAdUnitCode = function(e) {
        return {
            bids: ce.getBidsReceived().filter((function(t) {
                return t.adUnitCode === e
            }))
        }
    }, We.setTargetingForGPTAsync = function(e, t) {
        if (ze.logInfo("Invoking jwpb.setTargetingForGPTAsync", arguments), Object(f.isGptPubadsDefined)()) {
            var r = Ie.getAllTargeting(e);
            Ie.resetPresetTargeting(e), Ie.setTargetingForGPT(r, t), Object.keys(r).forEach((function(e) {
                Object.keys(r[e]).forEach((function(t) {
                    "hb_adid" === t && ce.setStatusForBids(r[e][t], Ge.BID_STATUS.BID_TARGETING_SET)
                }))
            })), Ve.emit(Xe, r)
        } else ze.logError("window.googletag is not defined on the page")
    }, We.setTargetingForAst = function(e) {
        ze.logInfo("Invoking jwpb.setTargetingForAn", arguments), Ie.isApntagDefined() ? (Ie.setTargetingForAst(e), Ve.emit(Xe, Ie.getAllTargeting())) : ze.logError("window.apntag is not defined on the page")
    }, We.renderAd = function(e, t) {
        if (ze.logInfo("Invoking jwpb.renderAd", arguments), ze.logMessage("Calling renderAd with adId :" + t), e && t) try {
            var r = ce.findBidByAdId(t);
            if (r) {
                r.ad = ze.replaceAuctionPrice(r.ad, r.cpm), r.adUrl = ze.replaceAuctionPrice(r.adUrl, r.cpm), ce.addWinningBid(r), Ve.emit(Ke, r);
                var n = r.height,
                    i = r.width,
                    o = r.ad,
                    a = r.mediaType,
                    s = r.adUrl,
                    d = r.renderer,
                    u = document.createComment("Creative " + r.creativeId + " served by " + r.bidder + " Prebid.js Header Bidding");
                if (ze.insertElement(u, e, "body"), j(d)) R(d, r);
                else if (e === document && !ze.inIframe() || "video" === a) {
                    var c = "Error trying to write ad. Ad render call ad id " + t + " was prevented from writing to the main document.";
                    lt({
                        reason: Ze,
                        message: c,
                        bid: r,
                        id: t
                    })
                } else if (o) {
                    if (navigator.userAgent && navigator.userAgent.toLowerCase().indexOf("firefox/") > -1) {
                        var f = /firefox\/([\d\.]+)/,
                            l = navigator.userAgent.toLowerCase().match(f)[1];
                        l && parseInt(l, 10) < 67 && e.open("text/html", "replace")
                    }
                    e.write(o), e.close(), ot(e, i, n), ze.callBurl(r)
                } else if (s) {
                    var p = ze.createInvisibleIframe();
                    p.height = n, p.width = i, p.style.display = "inline", p.style.overflow = "hidden", p.src = s, ze.insertElement(p, e, "body"), ot(e, i, n), ze.callBurl(r)
                } else {
                    var g = "Error trying to write ad. No ad for bid response id: " + t;
                    lt({
                        reason: et,
                        message: g,
                        bid: r,
                        id: t
                    })
                }
            } else {
                var m = "Error trying to write ad. Cannot find ad by given id : " + t;
                lt({
                    reason: rt,
                    message: m,
                    id: t
                })
            }
        } catch (e) {
            var v = "Error trying to write ad Id :" + t + " to the page:" + e.message;
            lt({
                reason: tt,
                message: v,
                id: t
            })
        } else {
            var y = "Error trying to write ad Id :" + t + " to the page. Missing document or adId";
            lt({
                reason: nt,
                message: y,
                id: t
            })
        }
    }, We.removeAdUnit = function(e) {
        (ze.logInfo("Invoking jwpb.removeAdUnit", arguments), e) ? (ze.isArray(e) ? e : [e]).forEach((function(e) {
            for (var t = We.adUnits.length - 1; t >= 0; t--) We.adUnits[t].code === e && We.adUnits.splice(t, 1)
        })): We.adUnits = []
    }, We.requestBids = Object(B.b)("async", (function(e) {
        var t = void 0 === e ? {} : e,
            r = t.bidsBackHandler,
            n = t.timeout,
            i = t.adUnits,
            o = t.adUnitCodes,
            a = t.labels,
            s = t.auctionId;
        Ve.emit(Je);
        var d = n || h.b.getConfig("bidderTimeout");
        if (i = i || We.adUnits, ze.logInfo("Invoking jwpb.requestBids", arguments), o && o.length ? i = i.filter((function(e) {
                return T()(o, e.code)
            })) : o = i && i.map((function(e) {
                return e.code
            })), (i = ct(i)).forEach((function(e) {
                var t = Object.keys(e.mediaTypes || {
                        banner: "banner"
                    }),
                    r = e.bids.map((function(e) {
                        return e.bidder
                    })),
                    n = Le.bidderRegistry,
                    i = h.b.getConfig("s2sConfig"),
                    o = i && i.bidders,
                    a = o ? r.filter((function(e) {
                        return !T()(o, e)
                    })) : r;
                e.transactionId = ze.generateUUID(), a.forEach((function(r) {
                    var i = n[r],
                        o = i && i.getSpec && i.getSpec(),
                        a = o && o.supportedMediaTypes || ["banner"];
                    t.some((function(e) {
                        return T()(a, e)
                    })) ? Ne.a.incrementBidderRequestsCounter(e.code, r) : (ze.logWarn(ze.unsupportedBidderMessage(e, r)), e.bids = e.bids.filter((function(e) {
                        return e.bidder !== r
                    })))
                })), Ne.a.incrementRequestsCounter(e.code)
            })), i && 0 !== i.length) {
            var u = ce.createAuction({
                    adUnits: i,
                    adUnitCodes: o,
                    callback: r,
                    cbTimeout: d,
                    labels: a,
                    auctionId: s
                }),
                c = i.length;
            return c > 15 && ze.logInfo("Current auction " + u.getAuctionId() + " contains " + c + " adUnits.", i), o.forEach((function(e) {
                return Ie.setLatestAuctionForAdUnit(e, u.getAuctionId())
            })), u.callBids(), u
        }
        if (ze.logMessage("No adUnits configured. No bids requested."), "function" == typeof r) try {
            r()
        } catch (e) {
            ze.logError("Error executing bidsBackHandler", null, e)
        }
    })), We.requestBids.before((function(e, t) {
        ! function(e) {
            var t;
            for (; t = e.shift();) t()
        }(qe.b), e.call(this, t)
    }), 49), We.addAdUnits = function(e) {
        ze.logInfo("Invoking jwpb.addAdUnits", arguments), ze.isArray(e) ? We.adUnits.push.apply(We.adUnits, e) : "object" == typeof e && We.adUnits.push(e), Ve.emit(He)
    }, We.onEvent = function(e, t, r) {
        ze.logInfo("Invoking jwpb.onEvent", arguments), ze.isFn(t) ? !r || it[e].call(null, r) ? Ve.on(e, t, r) : ze.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : ze.logError('The event handler provided is not a function and was not set on event "' + e + '".')
    }, We.offEvent = function(e, t, r) {
        ze.logInfo("Invoking jwpb.offEvent", arguments), r && !it[e].call(null, r) || Ve.off(e, t, r)
    }, We.registerBidAdapter = function(e, t) {
        ze.logInfo("Invoking jwpb.registerBidAdapter", arguments);
        try {
            Le.registerBidAdapter(e(), t)
        } catch (e) {
            ze.logError("Error registering bidder adapter : " + e.message)
        }
    }, We.registerAnalyticsAdapter = function(e) {
        ze.logInfo("Invoking jwpb.registerAnalyticsAdapter", arguments);
        try {
            Le.registerAnalyticsAdapter(e)
        } catch (e) {
            ze.logError("Error registering analytics adapter : " + e.message)
        }
    }, We.createBid = function(e) {
        return ze.logInfo("Invoking jwpb.createBid", arguments), Object(Me.a)(e)
    }, We.enableAnalytics = function(e) {
        e && !ze.isEmpty(e) ? (ze.logInfo("Invoking jwpb.enableAnalytics for: ", e), Le.enableAnalytics(e)) : ze.logError("jwpb.enableAnalytics should be called with option {}")
    }, We.aliasBidder = function(e, t) {
        ze.logInfo("Invoking jwpb.aliasBidder", arguments), e && t ? Le.aliasBidAdapter(e, t) : ze.logError("bidderCode and alias must be passed as arguments", "jwpb.aliasBidder")
    }, We.getAllWinningBids = function() {
        return ce.getAllWinningBids()
    }, We.getAllPrebidWinningBids = function() {
        return ce.getBidsReceived().filter((function(e) {
            return e.status === Ge.BID_STATUS.BID_TARGETING_SET
        }))
    }, We.getHighestCpmBids = function(e) {
        return Ie.getWinningBids(e)
    }, We.markWinningBidAsUsed = function(e) {
        var t = [];
        e.adUnitCode && e.adId ? t = ce.getBidsReceived().filter((function(t) {
            return t.adId === e.adId && t.adUnitCode === e.adUnitCode
        })) : e.adUnitCode ? t = Ie.getWinningBids(e.adUnitCode) : e.adId ? t = ce.getBidsReceived().filter((function(t) {
            return t.adId === e.adId
        })) : ze.logWarn("Inproper usage of markWinningBidAsUsed. It'll need an adUnitCode and/or adId to function."), t.length > 0 && (t[0].status = Ge.BID_STATUS.RENDERED)
    }, We.getConfig = h.b.getConfig, We.setConfig = h.b.setConfig, We.setBidderConfig = h.b.setBidderConfig, We.que.push((function() {
        window.addEventListener("message", le, !1)
    })), We.cmd.push = function(e) {
        if ("function" == typeof e) try {
            e.call()
        } catch (e) {
            ze.logError("Error processing command :", e.message, e.stack)
        } else ze.logError("Commands written into jwpb.cmd.push must be wrapped in a function")
    }, We.que.push = We.cmd.push, We.processQueue = function() {
        B.b.ready(), pt(We.que), pt(We.cmd)
    };
    var gt, mt, vt, yt, bt, ht, At = We,
        Et = r(11),
        St = r(77),
        Tt = r.n(St),
        It = "iab",
        _t = 1e4,
        wt = !0,
        Ot = 0,
        Ct = !1,
        Pt = {
            iab: function(e, t, r) {
                function n(n, i) {
                    f.logInfo("Received a response from CMP", n), i ? "tcloaded" === n.eventStatus || "useractioncomplete" === n.eventStatus ? e(n, r) : "cmpuishown" === n.eventStatus && n.tcString.length > 0 && !0 === n.purposeOneTreatment && e(n, r) : t("CMP unable to register callback function.  Please check CMP setup.", r)
                }
                var i = function() {
                        var t = {};

                        function n() {
                            t.getConsentData && t.getVendorConsents && (f.logInfo("Received all requested responses from CMP", t), e(t, r))
                        }
                        return {
                            consentDataCallback: function(e) {
                                t.getConsentData = e, n()
                            },
                            vendorConsentsCallback: function(e) {
                                t.getVendorConsents = e, n()
                            }
                        }
                    }(),
                    o = {},
                    a = function() {
                        for (var e, t, r = window; !e;) {
                            try {
                                if ("function" == typeof r.__tcfapi || "function" == typeof r.__cmp) {
                                    "function" == typeof r.__tcfapi ? (Ot = 2, t = r.__tcfapi) : (Ot = 1, t = r.__cmp), e = r;
                                    break
                                }
                            } catch (e) {}
                            try {
                                if (r.frames.__tcfapiLocator) {
                                    Ot = 2, e = r;
                                    break
                                }
                            } catch (e) {}
                            try {
                                if (r.frames.__cmpLocator) {
                                    Ot = 1, e = r;
                                    break
                                }
                            } catch (e) {}
                            if (r === window.top) break;
                            r = r.parent
                        }
                        return {
                            cmpFrame: e,
                            cmpFunction: t
                        }
                    }(),
                    s = a.cmpFrame,
                    d = a.cmpFunction;
                if (!s) return t("CMP not found.", r);
                f.isFn(d) ? (f.logInfo("Detected CMP API is directly accessible, calling it now..."), 1 === Ot ? (d("getConsentData", null, i.consentDataCallback), d("getVendorConsents", null, i.vendorConsentsCallback)) : 2 === Ot && d("addEventListener", Ot, n)) : 1 === Ot && window.$sf && window.$sf.ext && "function" == typeof window.$sf.ext.cmp ? (f.logInfo("Detected Prebid.js is encased in a SafeFrame and CMP is registered, calling it now..."), u("getConsentData", i.consentDataCallback), u("getVendorConsents", i.vendorConsentsCallback)) : (f.logInfo("Detected CMP is outside the current iframe where Prebid.js is located, calling it now..."), 1 === Ot ? (c("getConsentData", s, i.consentDataCallback), c("getVendorConsents", s, i.vendorConsentsCallback)) : 2 === Ot && c("addEventListener", s, n));

                function u(e, t) {
                    var n = r.adUnits,
                        i = 1,
                        o = 1;
                    if (Array.isArray(n) && n.length > 0) {
                        var a = f.getAdUnitSizes(n[0]);
                        i = a[0][0], o = a[0][1]
                    }
                    window.$sf.ext.register(i, o, (function(r, n) {
                        if ("cmpReturn" === r) {
                            var i = "getConsentData" === e ? n.vendorConsentData : n.vendorConsents;
                            t(i)
                        }
                    })), window.$sf.ext.cmp(e)
                }

                function c(e, t, r) {
                    var n = 2 === Ot ? "__tcfapi" : "__cmp";
                    window[n] = function(e, r, i) {
                        var a, s = Math.random() + "",
                            d = n + "Call",
                            u = ((a = {})[d] = {
                                command: e,
                                parameter: r,
                                callId: s
                            }, a);
                        1 !== Ot && (u[d].version = Ot), o[s] = i, t.postMessage(u, "*")
                    }, window.addEventListener("message", (function(e) {
                        var t = n + "Return",
                            r = "string" == typeof e.data && Tt()(e.data, t) ? JSON.parse(e.data) : e.data;
                        if (r[t] && r[t].callId) {
                            var i = r[t];
                            void 0 !== o[i.callId] && o[i.callId](i.returnValue, i.success)
                        }
                    }), !1), window[n](e, null, r)
                }
            },
            static: function(e, t, r) {
                e(bt, r)
            }
        };

    function jt(e, t) {
        var r = {
            context: this,
            args: [t],
            nextFn: e,
            adUnits: t.adUnits || jwpb.adUnits,
            bidsBackHandler: t.bidsBackHandler,
            haveExited: !1,
            timer: null
        };
        return ht ? (f.logInfo("User consent information already known.  Pulling internally stored information..."), Dt(null, r)) : T()(Object.keys(Pt), gt) ? (Pt[gt].call(this, Rt, Bt, r), void(r.haveExited || (0 === mt ? Rt(void 0, r) : r.timer = setTimeout(xt.bind(null, r), mt)))) : (f.logWarn("CMP framework (" + gt + ") is not a supported framework.  Aborting consentManagement module and resuming auction."), r.nextFn.apply(r.context, r.args))
    }

    function Rt(e, t) {
        "static" === gt && 2 === (Ot = e.getConsentData ? 1 : e.getTCData ? 2 : 0) && (e = e.getTCData);
        var r = 1 === Ot ? function(e) {
            var t = e && e.getConsentData && e.getConsentData.gdprApplies;
            return !("boolean" == typeof t && (!0 !== t || f.isStr(e.getConsentData.consentData) && f.isPlainObject(e.getVendorConsents) && Object.keys(e.getVendorConsents).length > 1))
        } : 2 === Ot ? function() {
            var t = e && e.gdprApplies,
                r = e && e.tcString;
            return !("boolean" == typeof t && (!0 !== t || f.isStr(r)))
        } : null;
        f.isFn(r) ? r(e) ? Bt("CMP returned unexpected value during lookup process.", t, e) : (clearTimeout(t.timer), Ut(e), Dt(null, t)) : Bt("Unable to derive CMP version to process data.  Consent object does not conform to TCF v1 or v2 specs.", t, e)
    }

    function xt(e) {
        Bt("CMP workflow exceeded timeout threshold.", e)
    }

    function Bt(e, t, r) {
        clearTimeout(t.timer), vt && Ut(void 0), Dt(e, t, r)
    }

    function Ut(e) {
        (ht = 1 === Ot ? {
            consentString: e ? e.getConsentData.consentData : void 0,
            vendorData: e ? e.getVendorConsents : void 0,
            gdprApplies: e ? e.getConsentData.gdprApplies : yt
        } : {
            consentString: e ? e.tcString : void 0,
            vendorData: e || void 0,
            gdprApplies: e ? e.gdprApplies : yt
        }).apiVersion = Ot, Et.gdprDataHandler.setConsentData(ht)
    }

    function Dt(e, t, r) {
        if (!1 === t.haveExited) {
            t.haveExited = !0;
            var n = t.context,
                i = t.args,
                o = t.nextFn;
            e ? vt ? (f.logWarn(e + " Resuming auction without consent data as per consentManagement config.", r), o.apply(n, i)) : (f.logError(e + " Canceling auction as per consentManagement config.", r), "function" == typeof t.bidsBackHandler ? t.bidsBackHandler() : f.logError("Error executing bidsBackHandler")) : o.apply(n, i)
        }
    }
    h.b.getConfig("consentManagement", (function(e) {
        return function(e) {
            (e = e.gdpr || e.usp ? e.gdpr : e) && "object" == typeof e ? (f.isStr(e.cmpApi) ? gt = e.cmpApi : (gt = It, f.logInfo("consentManagement config did not specify cmp.  Using system default setting (" + It + ").")), f.isNumber(e.timeout) ? mt = e.timeout : (mt = _t, f.logInfo("consentManagement config did not specify timeout.  Using system default setting (" + _t + ").")), "boolean" == typeof e.allowAuctionWithoutConsent ? vt = e.allowAuctionWithoutConsent : (vt = wt, f.logInfo("consentManagement config did not specify allowAuctionWithoutConsent.  Using system default setting (" + wt + ").")), yt = !0 === e.defaultGdprScope, f.logInfo("consentManagement module has been activated..."), "static" === gt && (f.isPlainObject(e.consentData) ? (bt = e.consentData, mt = 0) : f.logError("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")), Ct || jwpb.requestBids.before(jt, 50), Ct = !0) : f.logWarn("consentManagement config not defined, exiting consent manager")
        }(e.consentManagement)
    }));
    var kt = r(10),
        Nt = "https://x.bidswitch.net/sync?ssp=iponweblabs",
        Mt = !1,
        qt = {
            noAdm: "Bid from response has no adm parameter - ",
            noPrice: "Bid from response has no price parameter - ",
            wrongContentType: "Bid from response has wrong content_type parameter - ",
            noBid: "Array of bid objects is empty",
            noPlacementCode: "Can't find in requested bids the bid with auid - ",
            emptyUids: "Uids should be not empty",
            emptySeatbid: "Seatbid array from response has empty item",
            emptyResponse: "Response is empty",
            hasEmptySeatbidArray: "Response has empty seatbid array",
            hasNoArrayOfBids: "Seatbid from response has no array of bid objects - "
        },
        Wt = {
            code: "gridNM",
            supportedMediaTypes: [D.d],
            isBidRequestValid: function(e) {
                var t = !(e.params.source && f.isStr(e.params.source) && e.params.secid && f.isStr(e.params.secid) && e.params.pubid && f.isStr(e.params.pubid));
                if (t || (t = !e.params.video || !e.params.video.protocols || !e.params.video.mimes), !t) {
                    var r = e.params.video,
                        n = r.protocols,
                        i = r.mimes;
                    (t = !f.isArray(i) || !i.length || i.filter((function(e) {
                        return !(e && f.isStr(e))
                    })).length) || (t = !f.isArray(n) || !n.length || n.filter((function(e) {
                        return !(f.isNumber(e) && e > 0 && !(e % 1))
                    })).length)
                }
                return !t
            },
            buildRequests: function(e, t) {
                var r = [];
                return (e || []).forEach((function(e) {
                    var n = e.params,
                        i = e.bidderRequestId,
                        o = e.sizes,
                        a = {
                            sizes: f.parseSizesInput(o).join(","),
                            r: i,
                            wrapperType: "Prebid_js",
                            wrapperVersion: "3.15.0"
                        };
                    t && (t.refererInfo && t.refererInfo.referer && (a.u = t.refererInfo.referer), t.timeout && (a.wtimeout = t.timeout), t.gdprConsent && (t.gdprConsent.consentString && (a.gdpr_consent = t.gdprConsent.consentString), a.gdpr_applies = "boolean" == typeof t.gdprConsent.gdprApplies ? Number(t.gdprConsent.gdprApplies) : 1), t.uspConsent && (a.us_privacy = t.uspConsent)), r.push({
                        method: "POST",
                        url: "https://grid.bidswitch.net/hbnm?" + f.parseQueryStringParameters(a).replace(/\&$/, ""),
                        bid: e,
                        data: n
                    })
                })), r
            },
            interpretResponse: function(e, t) {
                var r, n = [];
                if ((e = e && e.body) ? e.seatbid && !e.seatbid.length && (r = qt.hasEmptySeatbidArray) : r = qt.emptyResponse, !r && e.seatbid) {
                    var i = function(e) {
                        e ? e.bid ? e.bid[0] || f.logError(qt.noBid) : f.logError(qt.hasNoArrayOfBids + JSON.stringify(e)) : f.logError(qt.emptySeatbid);
                        return e && e.bid && e.bid[0]
                    }(e.seatbid[0]);
                    if (i && (i.adm ? i.price ? "video" !== i.content_type && (r = qt.wrongContentType + i.content_type) : r = qt.noPrice + JSON.stringify(i) : r = qt.noAdm + JSON.stringify(i), !r)) {
                        var o = t.bid;
                        if (!i.w || !i.h) {
                            var a = f.parseSizesInput(o.sizes)[0].split("x");
                            i.w = a[0], i.h = a[1]
                        }
                        var s = {
                            requestId: o.bidId,
                            bidderCode: Wt.code,
                            cpm: i.price,
                            width: i.w,
                            height: i.h,
                            creativeId: i.auid || o.bidderRequestId,
                            currency: "USD",
                            netRevenue: !1,
                            ttl: 360,
                            dealId: i.dealid,
                            vastXml: i.adm,
                            mediaType: D.d,
                            adResponse: {
                                content: i.adm
                            }
                        };
                        o.renderer || o.mediaTypes && o.mediaTypes.video && "outstream" !== o.mediaTypes.video.context || (s.renderer = function(e, t) {
                            var r = P.install({
                                id: t.id,
                                url: t.url,
                                loaded: !1
                            });
                            try {
                                r.setRender(Gt)
                            } catch (e) {
                                f.logWarn("Prebid Error calling setRender on renderer", e)
                            }
                            return r
                        }(0, {
                            id: o.bidId,
                            url: "https://acdn.adnxs.com/video/outstream/ANOutstreamVideo.js"
                        })), n.push(s)
                    }
                }
                return r && f.logError(r), n
            },
            getUserSyncs: function(e, t, r, n) {
                if (!Mt && e.pixelEnabled) {
                    var i = "";
                    return r && "string" == typeof r.consentString && ("boolean" == typeof r.gdprApplies ? i += "&gdpr=" + Number(r.gdprApplies) + "&gdpr_consent=" + r.consentString : i += "&gdpr_consent=" + r.consentString), n && (i += "&us_privacy=" + n), Mt = !0, {
                        type: "image",
                        url: Nt + i
                    }
                }
            }
        };

    function Gt(e) {
        e.renderer.push((function() {
            window.ANOutstreamVideo.renderAd({
                targetId: e.adUnitCode,
                adResponse: e.adResponse
            })
        }))
    }
    Object(kt.b)(Wt);
    var zt = c();
    var Lt, Vt, Ft, Yt, Ht = {
            env: "vp",
            gdfp_req: 1,
            output: "xml_vast3",
            unviewed_position_start: 1
        },
        Kt = {};

    function Jt(e, t, r) {
        if (!h.b.getConfig("cache.url"))
            if (Object(f.deepAccess)(t, r + ".description_url")) Object(f.logError)("input cannnot contain description_url");
            else {
                var n = e && e.vastUrl;
                if (n) return encodeURIComponent(n)
            }
    }

    function Xt(e, t) {
        var r = e && e.adserverTargeting || {},
            n = {},
            i = t && t.adUnit;
        if (i) {
            var o = Ie.getAllTargeting(i.code);
            n = o ? o[i.code] : {}
        }
        var a = Object(f.deepAccess)(t, "params.cust_params"),
            s = Object(u.default)({}, {
                hb_uuid: e && e.videoCacheKey
            }, {
                hb_cache_id: e && e.videoCacheKey
            }, n, r, a);
        return encodeURIComponent(Object(v.b)(s))
    }
    Object(B.a)("registerAdserver").before((function(e) {
        e.call(this, "dfp")
    })), Lt = "dfp", Vt = {
        buildVideoUrl: function(e) {
            if (e.params || e.url) {
                var t = e.adUnit,
                    r = e.bid || Ie.getWinningBids(t.code)[0],
                    n = {};
                if (e.url && (n = Object(v.c)(e.url, {
                        noDecodeWholeURL: !0
                    }), Object(f.isEmpty)(e.params))) return function(e, t, r) {
                    var n = Jt(t, e, "search");
                    n && (e.search.description_url = n);
                    var i = Xt(t, r);
                    return e.search.cust_params = e.search.cust_params ? e.search.cust_params + "%26" + i : i, Object(v.a)(e)
                }(n, r, e);
                var i = {
                        correlator: Date.now(),
                        sz: Object(f.parseSizesInput)(t.sizes).join("|"),
                        url: encodeURIComponent(location.href)
                    },
                    o = Xt(r, e),
                    a = Object(u.default)({}, Ht, n.search, i, e.params, {
                        cust_params: o
                    }),
                    s = Jt(r, e, "params");
                return s && (a.description_url = s), Object(v.a)({
                    protocol: "https",
                    host: "securepubads.g.doubleclick.net",
                    pathname: "/gampad/ads",
                    search: a
                })
            }
            Object(f.logError)("A params object or a url is required to use jwpb.adServers.dfp.buildVideoUrl")
        },
        buildAdpodVideoUrl: function(e) {
            var t = void 0 === e ? {} : e,
                r = t.code,
                n = t.params,
                i = t.callback;
            if (n && i) {
                var o = {
                    correlator: Date.now(),
                    sz: function(e) {
                        var t = ce.getAdUnits().filter((function(t) {
                                return t.code === e
                            })),
                            r = Object(f.deepAccess)(t[0], "mediaTypes.video.playerSize");
                        return Object(f.parseSizesInput)(r).join("|")
                    }(r),
                    url: encodeURIComponent(location.href)
                };
                Kt.getTargeting({
                    codes: [r],
                    callback: function(e, t) {
                        var a;
                        if (e) i(e, null);
                        else {
                            var s = ((a = {})[Kt.TARGETING_KEY_PB_CAT_DUR] = void 0, a[Kt.TARGETING_KEY_CACHE_ID] = void 0, a),
                                d = {};
                            t[r] && (d = t[r].reduce((function(e, t) {
                                return Object.keys(t)[0] === Kt.TARGETING_KEY_PB_CAT_DUR ? e[Kt.TARGETING_KEY_PB_CAT_DUR] = void 0 !== e[Kt.TARGETING_KEY_PB_CAT_DUR] ? e[Kt.TARGETING_KEY_PB_CAT_DUR] + "," + t[Kt.TARGETING_KEY_PB_CAT_DUR] : t[Kt.TARGETING_KEY_PB_CAT_DUR] : Object.keys(t)[0] === Kt.TARGETING_KEY_CACHE_ID && (e[Kt.TARGETING_KEY_CACHE_ID] = t[Kt.TARGETING_KEY_CACHE_ID]), e
                            }), s));
                            var c = encodeURIComponent(Object(v.b)(d)),
                                f = Object(u.default)({}, Ht, o, n, {
                                    cust_params: c
                                }),
                                l = Object(v.a)({
                                    protocol: "https",
                                    host: "securepubads.g.doubleclick.net",
                                    pathname: "/gampad/ads",
                                    search: f
                                });
                            i(null, l)
                        }
                    }
                })
            } else Object(f.logError)("A params object and a callback is required to use pbjs.adServers.dfp.buildAdpodVideoUrl")
        },
        getAdpodTargeting: function(e) {
            return Kt.getTargeting(e)
        }
    }, zt.adServers = zt.adServers || {}, zt.adServers[Lt] = zt.adServers[Lt] || {}, Object.keys(Vt).forEach((function(e) {
        zt.adServers[Lt][e] ? Object(f.logWarn)("Attempting to add an already registered function property " + e + " for AdServer " + Lt + ".") : zt.adServers[Lt][e] = Vt[e]
    })), Object(B.c)("adpod", Kt);
    var $t = "USD",
        Qt = .01,
        Zt = 1,
        er = ["video/mp4", "video/ogg", "video/webm", "video/aac", "application/vnd.apple.mpegurl"],
        tr = "instream",
        rr = "dfp",
        nr = "jwp",
        ir = "jwpspotx",
        or = "jwpdfp",
        ar = nr,
        sr = {
            emx: "EMX",
            mediagrid: "MediaGrid",
            indexexchange: "IndexExchange",
            pubmatic: "PubMatic",
            spotx: "SpotX",
            telaria: "Telaria"
        },
        dr = ["EMX", "IndexExchange", "MediaGrid", "PubMatic", "SpotX", "Telaria"],
        ur = ((Ft = {})[[rr]] = dr, Ft[[nr]] = dr, Ft[[or]] = dr, Ft[[ir]] = ["SpotX"], Ft),
        cr = {
            VPAID_1_0: 1,
            VPAID_2_0: 2
        },
        fr = {
            VAST_2_0: 2,
            VAST_3_0: 3,
            VAST_2_0_WRAPPER: 5,
            VAST_3_0_WRAPPER: 6,
            VAST_4_0: 7,
            VAST_4_0_WRAPPER: 8
        },
        lr = {
            AUTOPLAY: 1,
            AUTOPLAY_MUTED: 2,
            CLICK_TO_PLAY: 3,
            CLICK_TO_PLAY_MUTED: 4,
            VIEWABLE: 5,
            VIEWABLE_MUTED: 6
        },
        pr = "abort",
        gr = ((Yt = {})[["noBid"]] = 0, Yt[["bid"]] = 1, Yt[["timeout"]] = 2, Yt[["invalid"]] = 3, Yt[[pr]] = 4, Yt[["error"]] = 5, Yt);

    function mr(e, t, r, n) {
        void 0 === n && (n = {});
        var i = e.createElement(t);
        return i.appendChild(e.createCDATASection(r)), Object.keys(n).forEach((function(e) {
            i.setAttribute(e, n[e])
        })), i
    }

    function vr(e) {
        void 0 === e && (e = []);
        var t = document.createElement("video");
        return e.filter((function(e) {
            return t.canPlayType(e)
        })).concat("application/javascript")
    }

    function yr(e, t, r) {
        return e.filter((function(e) {
            return e[t] === r
        }))[0]
    }

    function br(e, t) {
        return e === m.GRANULARITY_OPTIONS.DENSE ? t.pbDg : e === m.GRANULARITY_OPTIONS.LOW ? t.pbLg : e === m.GRANULARITY_OPTIONS.MEDIUM ? t.pbMg : e === m.GRANULARITY_OPTIONS.HIGH ? t.pbHg : e === m.GRANULARITY_OPTIONS.CUSTOM ? t.pbCg : t.pbAg
    }

    function hr(e) {
        var t = e.map((function(e) {
            return Object(u.default)({
                increment: Qt,
                min: 0,
                max: 1 / 0
            }, e)
        }));
        t.sort((function(e, t) {
            return e.min - t.min
        }));
        var r = 0;
        return t.reduce((function(e, t) {
            var n = t.min;
            return n > r && e.push({
                increment: Qt,
                max: n
            }), r = t.max, e.push(t), e
        }), [])
    }

    function Ar(e) {
        var t = e.autoplay,
            r = e.mute,
            n = e.autoplayAdsMuted;
        return t ? r || n ? lr.AUTOPLAY_MUTED : lr.AUTOPLAY : lr.CLICK_TO_PLAY
    }

    function Er(e) {
        if ("start" === e || "0%" === e || !e || "pre" === e || "00:00:00" === e) return 0;
        if ("end" === e || "100%" === e || "post" === e) return -2;
        if ("string" == typeof e && e.indexOf("%") >= 0) return -1;
        var t = parseInt(e);
        return t >= 0 ? t : -1
    }

    function Sr(e) {
        return e === nr || e === or || e === ir
    }
    var Tr = Date.now || function() {
        return (new Date).getTime()
    };
    var Ir = {
            consented_providers: ["3", "7", "11", "12", "15", "20", "22", "35", "43", "46", "48", "55", "57", "61", "62", "66", "70", "80", "83", "85", "86", "89", "93", "108", "122", "124", "125", "126", "131", "134", "135", "136", "143", "144", "147", "149", "153", "154", "159", "161", "162", "165", "167", "171", "178", "184", "188", "192", "195", "196", "202", "209", "211", "218", "221", "228", "229", "230", "236", "239", "241", "253", "255", "259", "266", "271", "272", "274", "286", "291", "294", "303", "308", "310", "311", "313", "314", "316", "317", "322", "323", "327", "336", "338", "340", "348", "350", "358", "359", "363", "367", "370", "371", "384", "385", "389", "393", "394", "397", "398", "407", "414", "415", "424", "429", "430", "432", "436", "438", "440", "442", "443", "445", "448", "449", "453", "459", "479", "482", "486", "491", "492", "494", "495", "503", "505", "510", "522", "523", "528", "537", "540", "550", "559", "560", "568", "571", "574", "575", "576", "584", "585", "587", "588", "590", "591", "592", "595", "609", "621", "624", "723", "725", "733", "737", "776", "780", "782", "787", "797", "798", "802", "803", "814", "817", "820", "821", "827", "829", "839", "853", "864", "867", "874", "899", "904", "922", "926", "931", "932", "933", "938", "955", "973", "976", "979", "981", "985", "987", "991", "1003", "1024", "1025", "1027", "1028", "1029", "1033", "1034", "1040", "1047", "1048", "1051", "1052", "1053", "1054", "1062", "1063", "1067", "1072", "1085", "1092", "1095", "1097", "1099", "1100", "1107", "1126", "1127", "1143", "1149", "1152", "1162", "1166", "1167", "1170", "1171", "1172", "1188", "1192", "1199", "1201", "1204", "1205", "1211", "1212", "1215", "1220", "1225", "1226", "1227", "1230", "1232", "1236", "1241", "1248", "1250", "1252", "1268", "1275", "1276", "1284", "1286", "1298", "1301", "1307", "1312", "1313", "1317", "1329", "1336", "1344", "1345", "1356", "1362", "1365", "1375", "1403", "1409", "1411", "1415", "1416", "1419", "1423", "1440", "1442", "1449", "1451", "1455", "1456", "1468", "1496", "1503", "1509", "1512", "1514", "1517", "1520", "1525", "1540", "1547", "1548", "1555", "1558", "1570", "1575", "1577", "1579", "1583", "1584", "1591", "1598", "1603", "1608", "1613", "1616", "1626", "1631", "1633", "1638", "1642", "1648", "1651", "1652", "1653", "1660", "1665", "1667", "1669", "1671", "1674", "1677", "1678", "1682", "1684", "1697", "1703", "1705", "1716", "1720", "1721", "1722", "1725", "1732", "1733", "1735", "1739", "1741", "1745", "1750", "1753", "1760", "1765", "1769", "1776", "1780", "1782", "1786", "1791", "1794", "1799", "1800", "1801", "1810", "1827", "1831", "1832", "1834", "1837", "1840", "1843", "1844", "1845", "1858", "1859", "1863", "1866", "1870", "1872", "1875", "1878", "1880", "1882", "1883", "1889", "1892", "1896", "1898", "1899", "1902", "1905", "1911", "1922", "1928", "1929", "1934", "1942", "1943", "1944", "1945", "1958", "1960", "1962", "1963", "1964", "1967", "1968", "1978", "1985", "1986", "1987", "1998", "2003", "2007", "2012", "2013", "2027", "2035", "2038", "2039", "2044", "2047", "2052", "2056", "2059", "2062", "2064", "2068", "2070", "2072", "2078", "2079", "2084", "2088", "2090", "2095", "2100", "2103", "2107", "2109", "2113", "2115", "2121", "2127", "2130", "2133", "2137", "2140", "2141", "2145", "2147", "2150", "2156", "2166", "2170", "2171", "2176", "2177", "2179", "2183", "2186", "2192", "2198", "2202", "2205", "2214", "2216", "2219", "2220", "2222", "2223", "2224", "2225", "2227", "2228", "2234", "2238", "2247", "2251", "2253", "2262", "2264", "2271", "2276", "2278", "2279", "2282", "2290", "2292", "2295", "2299", "2305", "2306", "2310", "2311", "2312", "2315", "2320", "2325", "2328", "2331", "2334", "2335", "2336", "2337", "2343", "2346", "2354", "2357", "2358", "2359", "2366", "2370", "2373", "2376", "2377", "2380", "2382", "2387", "2389", "2392", "2394", "2400", "2403", "2405", "2406", "2407", "2410", "2411", "2413", "2414", "2415", "2416", "2418", "2422", "2425", "2427", "2435", "2437", "2440", "2441", "2447", "2453", "2459", "2461", "2462", "2464", "2467", "2468", "2472", "2477", "2481", "2484", "2486", "2492", "2493", "2496", "2497", "2498", "2499", "2504", "2506", "2510", "2511", "2512", "2517", "2526", "2527", "2531", "2532", "2534", "2542", "2544", "2552", "2555", "2559", "2563", "2564", "2567", "2568", "2569", "2571", "2572", "2573", "2575", "2577", "2579", "2583", "2584", "2586", "2589", "2595", "2596", "2597", "2601", "2604", "2605", "2609", "2610", "2612", "2614", "2621", "2622", "2624", "2628", "2629", "2632", "2634", "2636", "2639", "2643", "2645", "2646", "2647", "2649", "2650", "2651", "2652", "2656", "2657", "2658", "2660", "2661", "2662", "2663", "2664", "2669", "2670", "2673", "2676", "2677", "2678", "2681", "2682", "2684", "2685", "2686", "2689", "2690", "2691", "2695", "2698", "2699", "2702", "2704", "2705", "2706", "2707", "2709", "2710", "2713", "2714", "2727", "2729", "2739", "2758", "2765", "2766", "2767", "2768", "2770", "2771", "2772", "2776", "2777", "2778", "2779", "2780", "2783", "2784", "2786", "2787", "2791", "2792", "2793", "2797", "2798", "2801", "2802", "2803", "2805", "2808", "2809", "2810", "2811", "2812", "2813", "2814", "2817", "2818", "2824", "2826", "2827", "2829", "2830", "2831", "2832", "2834", "2836", "2838", "2840", "2842", "2843", "2844", "2850", "2851", "2852", "2854", "2858", "2860", "2862", "2864", "2865", "2866", "2867", "2868", "2869", "2871"]
        },
        _r = {
            code: "spotx",
            gvlid: 165,
            aliases: ["spotx"],
            supportedMediaTypes: [D.d],
            isBidRequestValid: function(e) {
                if (e && "object" != typeof e.params) return f.logError("spotx: params is not defined or is incorrect in the bidder settings."), !1;
                if (!f.deepAccess(e, "mediaTypes.video")) return f.logError("spotx: mediaTypes.video is not present in the bidder settings."), !1;
                var t = f.deepAccess(e, "mediaTypes.video.playerSize");
                if (!t || !f.isArray(t)) return f.logError("spotx: mediaTypes.video.playerSize is not defined in the bidder settings."), !1;
                if (!f.getBidIdParameter("channel_id", e.params)) return f.logError("spotx: channel_id is not present in bidder params"), !1;
                if (("outstream" == f.deepAccess(e, "mediaTypes.video.context") || "outstream" == f.deepAccess(e, "params.ad_unit")) && !f.getBidIdParameter("outstream_function", e.params)) {
                    if (!f.getBidIdParameter("outstream_options", e.params)) return f.logError("spotx: please define outstream_options parameter or override the default SpotX outstream rendering by defining your own Outstream function using field outstream_function."), !1;
                    if (!f.getBidIdParameter("slot", e.params.outstream_options)) return f.logError("spotx: please define parameters slot outstream_options object in the configuration."), !1
                }
                return !0
            },
            buildRequests: function(e, t) {
                var r = t.refererInfo.referer,
                    n = !!r.match(/^https:/);
                return e.map((function(e) {
                    var i = f.getBidIdParameter("channel_id", e.params),
                        o = null,
                        a = f.deepAccess(e, "mediaTypes.video.playerSize"),
                        s = a[0][0],
                        d = a[0][1],
                        u = n || (f.getBidIdParameter("secure", e.params) ? 1 : 0),
                        c = {
                            sdk_name: "Prebid 1+",
                            player_vendor: "SpotXJW",
                            versionOrtb: "2.3"
                        };
                    if ("" != f.getBidIdParameter("hide_skin", e.params) && (c.hide_skin = +!!f.getBidIdParameter("hide_skin", e.params)), "" != f.getBidIdParameter("ad_volume", e.params) && (c.ad_volume = f.getBidIdParameter("ad_volume", e.params)), "" != f.getBidIdParameter("ad_unit", e.params) && (c.ad_unit = f.getBidIdParameter("ad_unit", e.params)), "" != f.getBidIdParameter("outstream_options", e.params) && (c.outstream_options = f.getBidIdParameter("outstream_options", e.params)), "" != f.getBidIdParameter("outstream_function", e.params) && (c.outstream_function = f.getBidIdParameter("outstream_function", e.params)), "" != f.getBidIdParameter("custom", e.params) && (c.custom = f.getBidIdParameter("custom", e.params)), "" != f.getBidIdParameter("pre_market_bids", e.params) && f.isArray(f.getBidIdParameter("pre_market_bids", e.params))) {
                        var l = f.getBidIdParameter("pre_market_bids", e.params);
                        for (var p in c.pre_market_bids = [], l) {
                            var g = l[p],
                                m = "";
                            g.vast_url ? m = '<?xml version="1.0" encoding="utf-8"?><VAST version="2.0"><Ad><Wrapper><VASTAdTagURI>' + g.vast_url + "</VASTAdTagURI></Wrapper></Ad></VAST>" : g.vast_string && (m = g.vast_string), c.pre_market_bids.push({
                                id: g.deal_id,
                                seatbid: [{
                                    bid: [{
                                        impid: Date.now(),
                                        dealid: g.deal_id,
                                        price: g.price,
                                        adm: m
                                    }]
                                }],
                                cur: g.currency,
                                ext: {
                                    event_log: [{}]
                                }
                            })
                        }
                    }
                    var v = f.getBidIdParameter("mimes", e.params) || ["application/javascript", "video/mp4", "video/webm"],
                        y = {
                            id: e.bidId,
                            secure: u,
                            video: {
                                w: s,
                                h: d,
                                ext: c,
                                mimes: v
                            }
                        };
                    "" != f.getBidIdParameter("price_floor", e.params) && (y.bidfloor = f.getBidIdParameter("price_floor", e.params)), "" != f.getBidIdParameter("start_delay", e.params) && (y.video.startdelay = 0 + Boolean(f.getBidIdParameter("start_delay", e.params))), "" != f.getBidIdParameter("min_duration", e.params) && (y.video.minduration = f.getBidIdParameter("min_duration", e.params)), "" != f.getBidIdParameter("max_duration", e.params) && (y.video.maxduration = f.getBidIdParameter("max_duration", e.params)), e.crumbs && e.crumbs.pubcid && (o = e.crumbs.pubcid);
                    var b = navigator.language ? "language" : "userLanguage",
                        h = {
                            h: screen.height,
                            w: screen.width,
                            dnt: f.getDNT() ? 1 : 0,
                            language: navigator[b].split("-")[0],
                            make: navigator.vendor ? navigator.vendor : "",
                            ua: navigator.userAgent
                        },
                        A = {
                            id: i,
                            imp: y,
                            site: {
                                id: "",
                                page: r,
                                content: "content"
                            },
                            device: h,
                            ext: {
                                wrap_response: 1
                            }
                        };
                    f.getBidIdParameter("number_of_ads", e.params) && (A.ext.number_of_ads = f.getBidIdParameter("number_of_ads", e.params));
                    var E = {};
                    return 1 == f.getBidIdParameter("spotx_all_google_consent", e.params) && (E.consented_providers_settings = Ir), t && t.gdprConsent && (E.consent = t.gdprConsent.consentString, void 0 !== t.gdprConsent.gdprApplies && f.deepSetValue(A, "regs.ext.gdpr", t.gdprConsent.gdprApplies ? 1 : 0)), t && t.uspConsent && f.deepSetValue(A, "regs.ext.us_privacy", t.uspConsent), e && e.userId && e.userId.id5id && (E.eids = E.eids || [], E.eids.push({
                        source: "id5-sync.com",
                        uids: [{
                            id: e.userId.id5id
                        }]
                    })), o && (E.fpc = o), e && e.schain && (A.source = {
                        ext: {
                            schain: e.schain
                        }
                    }), e && e.userId && e.userId.tdid && (E.eids = E.eids || [], E.eids.push({
                        source: "adserver.org",
                        uids: [{
                            id: e.userId.tdid,
                            ext: {
                                rtiPartner: "TDID"
                            }
                        }]
                    })), f.isEmpty(E) || (A.user = {
                        ext: E
                    }), {
                        method: "POST",
                        url: "https://search.spotxchange.com/openrtb/2.3/dados/" + i,
                        data: A,
                        bidRequest: t
                    }
                }))
            },
            interpretResponse: function(e, t) {
                var r = [],
                    n = e.body;
                return n && f.isArray(n.seatbid) && f._each(n.seatbid, (function(e) {
                    f._each(e.bid, (function(e) {
                        var i = {};
                        for (var o in t.bidRequest.bids) e.impid == t.bidRequest.bids[o].bidId && (i = t.bidRequest.bids[o]);
                        f._each(i.params.pre_market_bids, (function(t) {
                            t.deal_id == e.id && (e.price = t.price, n.cur = t.currency)
                        }));
                        var a = {
                                requestId: i.bidId,
                                currency: n.cur || "USD",
                                cpm: e.price,
                                creativeId: e.crid || "",
                                ttl: 360,
                                netRevenue: !0,
                                channel_id: n.id,
                                cache_key: e.ext.cache_key,
                                vastUrl: "https://search.spotxchange.com/ad/vast.html?key=" + e.ext.cache_key,
                                videoCacheKey: e.ext.cache_key,
                                mediaType: D.d,
                                width: e.w,
                                height: e.h
                            },
                            s = f.deepAccess(i, "mediaTypes.video.context"),
                            d = f.deepAccess(i, "params.ad_unit");
                        if ("outstream" == s || "outstream" == d) {
                            var u = f.deepAccess(i, "mediaTypes.video.playerSize"),
                                c = P.install({
                                    id: 0,
                                    url: "//",
                                    config: {
                                        adText: "SpotX Outstream Video Ad via Prebid.js",
                                        player_width: u[0][0],
                                        player_height: u[0][1],
                                        content_page_url: f.deepAccess(t, "data.site.page"),
                                        ad_mute: +!!f.deepAccess(i, "params.ad_mute"),
                                        hide_skin: +!!f.deepAccess(i, "params.hide_skin"),
                                        outstream_options: f.deepAccess(i, "params.outstream_options"),
                                        outstream_function: f.deepAccess(i, "params.outstream_function")
                                    }
                                });
                            try {
                                c.setRender(wr), c.setEventHandlers({
                                    impression: function() {
                                        return f.logMessage("SpotX outstream video impression event")
                                    },
                                    loaded: function() {
                                        return f.logMessage("SpotX outstream video loaded event")
                                    },
                                    ended: function() {
                                        f.logMessage("SpotX outstream renderer video event")
                                    }
                                })
                            } catch (e) {
                                f.logWarn("Prebid Error calling setRender or setEve,tHandlers on renderer", e)
                            }
                            a.renderer = c
                        }
                        r.push(a)
                    }))
                })), r
            }
        };

    function wr(e) {
        var t = function(e) {
            var t = f.getBidIdParameter("slot", e.renderer.config.outstream_options);
            f.logMessage("[SPOTX][renderer] Handle SpotX outstream renderer");
            var r = window.document.createElement("script");
            r.type = "text/javascript", r.src = "https://js.spotx.tv/easi/v1/" + e.channel_id + ".js";
            var n = {};
            n["data-spotx_channel_id"] = "" + e.channel_id, n["data-spotx_vast_url"] = "" + e.vastUrl, n["data-spotx_content_page_url"] = e.renderer.config.content_page_url, n["data-spotx_ad_unit"] = "incontent", f.logMessage("[SPOTX][renderer] Default beahavior"), f.getBidIdParameter("ad_mute", e.renderer.config.outstream_options) && (n["data-spotx_ad_mute"] = "0"), n["data-spotx_collapse"] = "0", n["data-spotx_autoplay"] = "1", n["data-spotx_blocked_autoplay_override_mode"] = "1", n["data-spotx_video_slot_can_autoplay"] = "1";
            var i = f.getBidIdParameter("playersize_auto_adapt", e.renderer.config.outstream_options);
            if (i && f.isBoolean(i) && !0 === i)
                if (e.width && f.isNumber(e.width) && e.height && f.isNumber(e.height)) {
                    var o = e.width / e.height,
                        a = window.document.getElementById(t).clientWidth,
                        s = e.renderer.config.player_width,
                        d = e.renderer.config.player_height,
                        u = 0,
                        c = 0;
                    a < s && (d = (s = a) / o), o <= 1 ? (u = Math.round(d * o), c = d) : (u = s, c = Math.round(s / o)), n["data-spotx_content_width"] = "" + u, n["data-spotx_content_height"] = "" + c
                } else f.logWarn("[SPOTX][renderer] PlayerSize auto adapt: bid.width and bid.height are incorrect");
            var l = f.getBidIdParameter("custom_override", e.renderer.config.outstream_options);
            if (l && f.isPlainObject(l))
                for (var p in f.logMessage("[SPOTX][renderer] Custom beahavior."), l) l.hasOwnProperty(p) && ("channel_id" === p || "vast_url" === p || "content_page_url" === p || "ad_unit" === p ? f.logWarn("[SPOTX][renderer] Custom beahavior: following option cannot be overrided: " + p) : n["data-spotx_" + p] = l[p]);
            for (var g in n) n.hasOwnProperty(g) && r.setAttribute(g, n[g]);
            return r
        }(e);
        if (null != e.renderer.config.outstream_function && "function" == typeof e.renderer.config.outstream_function) e.renderer.config.outstream_function(e, t);
        else try {
            var r = f.getBidIdParameter("in_iframe", e.renderer.config.outstream_options);
            if (r && "IFRAME" == window.document.getElementById(r).nodeName) {
                var n = window.document.getElementById(r),
                    i = n.contentDocument;
                !i && n.contentWindow && (i = n.contentWindow.document), i.body.appendChild(t)
            } else {
                var o = f.getBidIdParameter("slot", e.renderer.config.outstream_options);
                o && window.document.getElementById(o) ? window.document.getElementById(o).appendChild(t) : window.document.getElementsByTagName("head")[0].appendChild(t)
            }
        } catch (e) {
            f.logError("[SPOTX][renderer] Error:" + e.message)
        }
    }
    Object(kt.b)(_r);
    var Or = _r.code;

    function Cr(e, t) {
        var r = e.player,
            n = e.params,
            i = e.settings,
            o = vr(er),
            a = {
                bidder: Or,
                params: {
                    channel_id: t.id,
                    ad_unit: tr,
                    mimes: o,
                    ad_volume: r.getVolume(),
                    hide_skin: !0,
                    start_delay: Er(n.offset),
                    custom: {},
                    min_duration: 3,
                    max_duration: 300
                }
            };
        if (t.optionalParams && (Object(u.default)(a.params, t.optionalParams), t.optionalParams.no_vpaid_ads)) {
            var s = o.indexOf("application/javascript");
            o.splice(s, 1)
        }
        t.passFloorPrice && void 0 !== i.floorPriceCents && (a.params.price_floor = i.floorPriceCents / 100);
        var d = n.jwpseg;
        return Array.isArray(d) && d.length && Object(u.default)(a.params.custom, {
            jwpseg: d
        }), a
    }

    function Pr(e) {
        return void 0 === e && (e = {}), void 0 !== e.id
    }
    At.bidderSettings[Or] = {
        sendStandardTargeting: !1,
        adserverTargeting: [{
            key: "spotx_bid",
            val: function(e) {
                return br(At.getConfig("priceGranularity"), e)
            }
        }, {
            key: "spotx_ad_key",
            val: function(e) {
                return e.videoCacheKey
            }
        }]
    };
    var jr = {
            validateSizes: function(e) {
                return f.isArray(e) && void 0 !== e[0] ? e.every((function(e) {
                    return f.isArray(e) && 2 === e.length
                })) : (f.logWarn("emx_digital: Sizes should be an array"), !1)
            },
            checkVideoContext: function(e) {
                return e && e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context && ("instream" === e.mediaTypes.video.context || "outstream" === e.mediaTypes.video.context)
            },
            buildBanner: function(e) {
                var t = [];
                return t = e.mediaTypes && e.mediaTypes.banner && e.mediaTypes.banner.sizes ? e.mediaTypes.banner.sizes : e.sizes, jr.validateSizes(t) || (f.logWarn("emx_digital: could not detect mediaType banner sizes. Assigning to bid sizes instead"), t = e.sizes), {
                    format: t.map((function(e) {
                        return {
                            w: e[0],
                            h: e[1]
                        }
                    })),
                    w: t[0][0],
                    h: t[0][1]
                }
            },
            formatVideoResponse: function(e, t, r) {
                return e.vastXml = t.adm, r.bidRequest && r.bidRequest.mediaTypes && r.bidRequest.mediaTypes.video && "outstream" === r.bidRequest.mediaTypes.video.context && (e.renderer = jr.createRenderer(e, {
                    id: t.id,
                    url: "https://js.brealtime.com/outstream/1.30.0/bundle.js"
                })), e
            },
            isMobile: function() {
                return /(ios|ipod|ipad|iphone|android)/i.test(navigator.userAgent)
            },
            isConnectedTV: function() {
                return /(smart[-]?tv|hbbtv|appletv|googletv|hdmi|netcast\.tv|viera|nettv|roku|\bdtv\b|sonydtv|inettvbrowser|\btv\b)/i.test(navigator.userAgent)
            },
            getDevice: function() {
                return {
                    ua: navigator.userAgent,
                    js: 1,
                    dnt: "yes" === navigator.doNotTrack || "1" === navigator.doNotTrack || "1" === navigator.msDoNotTrack ? 1 : 0,
                    h: screen.height,
                    w: screen.width,
                    devicetype: jr.isMobile() ? 1 : jr.isConnectedTV() ? 3 : 2,
                    language: navigator.language || navigator.browserLanguage || navigator.userLanguage || navigator.systemLanguage
                }
            },
            cleanProtocols: function(e) {
                return e.protocols && T()(e.protocols, 7) && (f.logWarn("emx_digital: VAST 4.0 is currently not supported. This protocol has been filtered out of the request."), e.protocols = e.protocols.filter((function(e) {
                    return 7 !== e
                }))), e
            },
            outstreamRender: function(e) {
                e.renderer.push((function() {
                    var t = e && e.params && e.params[0] && e.params[0].video ? e.params[0].video : {};
                    window.emxVideoQueue = window.emxVideoQueue || [], window.queueEmxVideo({
                        id: e.adUnitCode,
                        adsResponses: e.vastXml,
                        options: t
                    }), window.emxVideoReady && window.videojs && window.emxVideoReady()
                }))
            },
            createRenderer: function(e, t) {
                var r = P.install({
                    id: t.id,
                    url: "https://js.brealtime.com/outstream/1.30.0/bundle.js",
                    loaded: !1
                });
                try {
                    r.setRender(jr.outstreamRender)
                } catch (e) {
                    f.logWarn("Prebid Error calling setRender on renderer", e)
                }
                return r
            },
            buildVideo: function(e) {
                var t = Object(u.default)(e.mediaTypes.video, e.params.video);
                return f.isArray(e.mediaTypes.video.playerSize[0]) ? (t.w = e.mediaTypes.video.playerSize[0][0], t.h = e.mediaTypes.video.playerSize[0][1]) : (t.w = e.mediaTypes.video.playerSize[0], t.h = e.mediaTypes.video.playerSize[1]), jr.cleanProtocols(t)
            },
            parseResponse: function(e) {
                try {
                    return decodeURIComponent(e.replace(/%(?![0-9][0-9a-fA-F]+)/g, "%25"))
                } catch (e) {
                    f.logError("emx_digitalBidAdapter", "error", e)
                }
            },
            getReferrer: function() {
                try {
                    return window.top.document.referrer
                } catch (e) {
                    return document.referrer
                }
            },
            getSite: function(e) {
                return {
                    domain: Object(v.c)(e.referer).hostname,
                    page: e.referer,
                    ref: jr.getReferrer()
                }
            },
            getGdpr: function(e, t) {
                return e.gdprConsent && (t.regs = {
                    ext: {
                        gdpr: !0 === e.gdprConsent.gdprApplies ? 1 : 0
                    }
                }), e.gdprConsent && e.gdprConsent.gdprApplies && (t.user = {
                    ext: {
                        consent: e.gdprConsent.consentString
                    }
                }), t
            }
        },
        Rr = {
            code: "emx_digital",
            supportedMediaTypes: [D.b, D.d],
            isBidRequestValid: function(e) {
                if (!e || !e.params) return f.logWarn("emx_digital: Missing bid or bid params."), !1;
                if ("emx_digital" !== e.bidder) return f.logWarn('emx_digital: Must use "emx_digital" as bidder code.'), !1;
                if (!e.params.tagid || !f.isStr(e.params.tagid)) return f.logWarn("emx_digital: Missing tagid param or tagid present and not type String."), !1;
                var t;
                if (e.mediaTypes && e.mediaTypes.banner) {
                    if (t = e.mediaTypes.banner.sizes ? e.mediaTypes.banner.sizes : e.sizes, !jr.validateSizes(t)) return f.logWarn("emx_digital: Missing sizes in bid"), !1
                } else if (e.mediaTypes && e.mediaTypes.video) {
                    if (!jr.checkVideoContext(e)) return f.logWarn("emx_digital: Missing video context: instream or outstream"), !1;
                    if (!e.mediaTypes.video.playerSize) return f.logWarn("emx_digital: Missing video playerSize"), !1
                }
                return !0
            },
            buildRequests: function(e, t) {
                var r = [],
                    n = "https://hb.emxdgt.com?t=" + (t.timeout || "") + "&ts=" + Date.now() + "&src=pbjs",
                    i = location.protocol.indexOf("https") > -1 ? 1 : 0,
                    o = jr.getDevice(),
                    a = jr.getSite(t.refererInfo);
                f._each(e, (function(e) {
                    var t = f.getBidIdParameter("tagid", e.params),
                        n = parseFloat(f.getBidIdParameter("bidfloor", e.params)) || 0,
                        o = !!e.mediaTypes.video,
                        a = {
                            id: e.bidId,
                            tid: e.transactionId,
                            tagid: t,
                            secure: i
                        },
                        s = o ? {
                            video: jr.buildVideo(e)
                        } : {
                            banner: jr.buildBanner(e)
                        },
                        d = n > 0 ? {
                            bidfloor: n,
                            bidfloorcur: "USD"
                        } : {},
                        c = Object(u.default)(a, s, d);
                    r.push(c)
                }));
                var s = {
                    id: t.auctionId,
                    imp: r,
                    device: o,
                    site: a,
                    cur: "USD",
                    version: "1.5.0"
                };
                return s = jr.getGdpr(t, Object(u.default)({}, s)), t && t.uspConsent && (s.us_privacy = t.uspConsent), {
                    method: "POST",
                    url: n,
                    data: JSON.stringify(s),
                    options: {
                        withCredentials: !0
                    },
                    bidderRequest: t
                }
            },
            interpretResponse: function(e, t) {
                var r = [],
                    n = e.body || {};
                return n.seatbid && n.seatbid.length > 0 && n.seatbid[0].bid && n.seatbid.forEach((function(e) {
                    e = e.bid[0];
                    var n = !1,
                        i = jr.parseResponse(e.adm) || "",
                        o = {
                            requestId: e.id,
                            cpm: e.price,
                            width: e.w,
                            height: e.h,
                            creativeId: e.crid || e.id,
                            dealId: e.dealid || null,
                            currency: "USD",
                            netRevenue: !0,
                            ttl: e.ttl,
                            ad: i
                        };
                    e.adm && e.adm.indexOf("<?xml version=") > -1 && (n = !0, o = jr.formatVideoResponse(o, Object(u.default)({}, e), t)), o.mediaType = n ? D.d : D.b, r.push(o)
                })), r
            },
            getUserSyncs: function(e) {
                var t = [];
                return e.iframeEnabled && t.push({
                    type: "iframe",
                    url: "https://biddr.brealtime.com/check.html"
                }), t
            }
        };
    Object(kt.b)(Rr);
    var xr = Rr.code;

    function Br(e, t) {
        var r = e.params,
            n = e.player,
            i = e.settings,
            o = {
                bidder: xr,
                params: {
                    tagid: "" + t.id,
                    video: {
                        mimes: vr(er),
                        minduration: 3,
                        maxduration: 300,
                        protocols: [fr.VAST_2_0, fr.VAST_3_0, fr.VAST_4_0, fr.VAST_2_0_WRAPPER, fr.VAST_3_0_WRAPPER, fr.VAST_4_0_WRAPPER],
                        startdelay: Er(r.offset),
                        placement: r.placement,
                        linearity: 1,
                        playbackmethod: [Ar(n.getConfig())],
                        api: [cr.VPAID_2_0]
                    }
                }
            };
        void 0 !== i.floorPriceCents && (o.params.bidfloor = i.floorPriceCents / 100);
        var a = r.jwpseg,
            s = r.skipoffset;
        if (void 0 !== s) {
            var d = s >= 0;
            o.params.video.skip = d, d && Object(u.default)(o.params.video, {
                skipmin: s + 2,
                skipafter: s
            })
        }
        return Array.isArray(a) && a.length && (o.params.video.ext = {
            custom: {
                jwpseg: a
            }
        }), o
    }

    function Ur(e) {
        return void 0 === e && (e = {}), void 0 !== e.id
    }
    At.bidderSettings[xr] = {
        sendStandardTargeting: !1,
        adserverTargeting: [{
            key: "vpb_emx_bid",
            val: function(e) {
                return br(At.getConfig("priceGranularity"), e)
            }
        }, {
            key: "vpb_emx_key",
            val: function(e) {
                return e.videoCacheKey
            }
        }]
    };
    var Dr = Wt.code;

    function kr(e, t) {
        var r = e.params,
            n = e.player,
            i = e.settings,
            o = {
                bidder: Dr,
                params: {
                    source: "jwp",
                    secid: "" + t.id,
                    pubid: "" + t.pubid,
                    video: {
                        mimes: vr(er),
                        mind: 3,
                        maxd: 300,
                        protocols: [fr.VAST_2_0, fr.VAST_3_0, fr.VAST_4_0, fr.VAST_2_0_WRAPPER, fr.VAST_3_0_WRAPPER, fr.VAST_4_0_WRAPPER],
                        startdelay: Er(r.offset),
                        placement: r.placement,
                        linearity: 1,
                        playbackmethod: [Ar(n.getConfig())],
                        api: [cr.VPAID_2_0],
                        size: n.getWidth() + "x" + n.getHeight()
                    }
                }
            };
        void 0 !== i.floorPriceCents && (o.params.floorcpm = i.floorPriceCents / 100);
        var a = r.jwpseg,
            s = r.skipoffset;
        if (void 0 !== s) {
            var d = s >= 0;
            o.params.video.skip = d, d && Object(u.default)(o.params.video, {
                skipmin: s + 2,
                skipafter: s
            })
        }
        return Array.isArray(a) && a.length && (o.params.pubdata = {
            jwpseg: a
        }), o
    }

    function Nr(e) {
        return void 0 === e && (e = {}), void 0 !== e.pubid
    }
    At.bidderSettings[Dr] = {
        sendStandardTargeting: !1,
        adserverTargeting: [{
            key: "vpb_mediagrid_bid",
            val: function(e) {
                return br(At.getConfig("priceGranularity"), e)
            }
        }, {
            key: "vpb_mediagrid_key",
            val: function(e) {
                return e.videoCacheKey
            }
        }]
    };
    var Mr = r(50),
        qr = r.n(Mr),
        Wr = "https://as-sec.casalemedia.com/cygnus",
        Gr = [D.b, D.d],
        zr = 8.1,
        Lr = 100,
        Vr = 300,
        Fr = 3600,
        Yr = !0,
        Hr = {
            JPY: 1
        };

    function Kr(e) {
        var t = Jr(e);
        t.video = f.deepClone(e.params.video), t.video.w = e.params.size[0], t.video.h = e.params.size[1];
        var r = f.deepAccess(e, "mediaTypes.video.context");
        return r && ("instream" === r ? t.video.placement = 1 : "outstream" === r ? t.video.placement = 4 : f.logWarn("ix bidder params: video context '" + r + "' is not supported")), t
    }

    function Jr(e) {
        var t = {};
        return t.id = e.bidId, t.ext = {}, t.ext.siteID = e.params.siteId, !e.params.hasOwnProperty("id") || "string" != typeof e.params.id && "number" != typeof e.params.id ? t.ext.sid = e.params.size[0] + "x" + e.params.size[1] : t.ext.sid = String(e.params.id), e.params.hasOwnProperty("bidFloor") && e.params.hasOwnProperty("bidFloorCur") && (t.bidfloor = e.params.bidFloor, t.bidfloorcur = e.params.bidFloorCur), t
    }

    function Xr(e, t, r) {
        var n = {};
        return Hr.hasOwnProperty(t) ? n.cpm = e.price / Hr[t] : n.cpm = e.price / Lr, n.requestId = e.impid, n.dealId = f.deepAccess(e, "ext.dealid"), n.netRevenue = Yr, n.currency = t, n.creativeId = e.hasOwnProperty("crid") ? e.crid : "-", f.deepAccess(e, "ext.vasturl") ? (n.vastUrl = e.ext.vasturl, n.width = r.video.w, n.height = r.video.h, n.mediaType = D.d, n.ttl = Fr) : (n.ad = e.adm, n.width = e.w, n.height = e.h, n.mediaType = D.b, n.ttl = Vr), n.meta = {}, n.meta.networkId = f.deepAccess(e, "ext.dspid"), n.meta.brandId = f.deepAccess(e, "ext.advbrandid"), n.meta.brandName = f.deepAccess(e, "ext.advbrand"), n
    }

    function $r(e) {
        return Array.isArray(e) && 2 === e.length && qr()(e[0]) && qr()(e[1])
    }

    function Qr(e, t) {
        if ($r(e)) return e[0] === t[0] && e[1] === t[1];
        for (var r = 0; r < e.length; r++)
            if (e[r][0] === t[0] && e[r][1] === t[1]) return !0;
        return !1
    }

    function Zr(e, t) {
        if (e) return O()(t, (function(t) {
            return t.id === e
        }))
    }

    function en(e, t, r, n) {
        var i = [],
            o = Wr;
        if (window.headertag && "function" == typeof window.headertag.getIdentityInfo) {
            var a = window.headertag.getIdentityInfo();
            if (a && "object" == typeof a)
                for (var s in a)
                    if (a.hasOwnProperty(s)) {
                        var d = a[s];
                        !d.responsePending && d.data && "object" == typeof d.data && Object.keys(d.data).length && i.push(d.data)
                    }
        }
        var u = {};
        if (u.id = e[0].bidderRequestId, u.imp = r, u.site = {}, u.ext = {}, u.ext.source = "prebid", e[0].schain && (u.source = {
                ext: {
                    schain: e[0].schain
                }
            }), i.length > 0 && (u.user = {}, u.user.eids = i), document.referrer && "" !== document.referrer && (u.site.ref = document.referrer), t) {
            if (t.gdprConsent) {
                var c = t.gdprConsent;
                c.hasOwnProperty("gdprApplies") && (u.regs = {
                    ext: {
                        gdpr: c.gdprApplies ? 1 : 0
                    }
                }), c.hasOwnProperty("consentString") && (u.user = u.user || {}, u.user.ext = {
                    consent: c.consentString || ""
                })
            }
            t.uspConsent && f.deepSetValue(u, "regs.ext.us_privacy", t.uspConsent), t.refererInfo && (u.site.page = t.refererInfo.referer)
        }
        var l = {},
            p = h.b.getConfig("ix");
        if (p) {
            if ("object" == typeof p.firstPartyData) {
                var g = p.firstPartyData,
                    m = "?";
                for (var v in g) g.hasOwnProperty(v) && (m += encodeURIComponent(v) + "=" + encodeURIComponent(g[v]) + "&");
                m = m.slice(0, -1), u.site.page += m
            }
            "number" == typeof p.timeout && (l.t = p.timeout)
        }
        return l.s = e[0].params.siteId, l.v = n, l.r = JSON.stringify(u), l.ac = "j", l.sd = 1, n === zr && (l.nf = 1), {
            method: "GET",
            url: o,
            data: l
        }
    }
    var tn = {
        code: "ix",
        gvlid: 10,
        supportedMediaTypes: Gr,
        isBidRequestValid: function(e) {
            if (!$r(e.params.size)) return f.logError("ix bidder params: bid size has invalid format."), !1;
            if (!Qr(e.sizes, e.params.size)) return f.logError("ix bidder params: bid size is not included in ad unit sizes."), !1;
            if (e.hasOwnProperty("mediaType") && !f.contains(Gr, e.mediaType)) return !1;
            if (e.hasOwnProperty("mediaTypes") && !f.deepAccess(e, "mediaTypes.banner.sizes") && !f.deepAccess(e, "mediaTypes.video.playerSize")) return !1;
            if ("string" != typeof e.params.siteId && "number" != typeof e.params.siteId) return f.logError("ix bidder params: siteId must be string or number value."), !1;
            var t, r, n = e.params.hasOwnProperty("bidFloor"),
                i = e.params.hasOwnProperty("bidFloorCur");
            return !!(!n && !i || n && i && (t = e.params.bidFloor, r = e.params.bidFloorCur, Boolean("number" == typeof t && "string" == typeof r && r.match(/^[A-Z]{3}$/)))) || (f.logError("ix bidder params: bidFloor / bidFloorCur parameter has invalid format."), !1)
        },
        buildRequests: function(e, t) {
            for (var r, n, i = [], o = [], a = [], s = null, d = 0; d < e.length; d++)((s = e[d]).mediaType === D.d || f.deepAccess(s, "mediaTypes.video")) && (s.mediaType === D.d || Qr(s.mediaTypes.video.playerSize, s.params.size) ? a.push(Kr(s)) : f.logError("Bid size is not included in video playerSize")), (s.mediaType === D.b || f.deepAccess(s, "mediaTypes.banner") || !s.mediaType && !s.mediaTypes) && o.push((n = void 0, (n = Jr(r = s)).banner = {}, n.banner.w = r.params.size[0], n.banner.h = r.params.size[1], n.banner.topframe = f.inIframe() ? 0 : 1, n));
            return o.length > 0 && i.push(en(e, t, o, 7.2)), a.length > 0 && i.push(en(e, t, a, zr)), i
        },
        interpretResponse: function(e, t) {
            var r = [],
                n = null;
            if (!e.hasOwnProperty("body") || !e.body.hasOwnProperty("seatbid")) return r;
            for (var i = e.body, o = i.seatbid, a = 0; a < o.length; a++)
                if (o[a].hasOwnProperty("bid"))
                    for (var s = o[a].bid, d = JSON.parse(t.data.r), u = 0; u < s.length; u++) {
                        var c = Zr(s[u].impid, d.imp);
                        n = Xr(s[u], i.cur, c), r.push(n)
                    }
            return r
        },
        transformBidParams: function(e, t) {
            return f.convertTypes({
                siteID: "number"
            }, e)
        },
        getUserSyncs: function(e, t) {
            return e.iframeEnabled ? [{
                type: "iframe",
                url: "https://js-sec.indexww.com/um/ixmatch.html"
            }] : []
        }
    };
    Object(kt.b)(tn);
    var rn = tn.code;

    function nn(e, t) {
        var r = e.params,
            n = e.player,
            i = {
                bidder: rn,
                params: {
                    id: "JWPlayer",
                    siteId: t.id,
                    size: [n.getWidth(), n.getHeight()],
                    video: {
                        mimes: vr(er),
                        minduration: 3,
                        maxduration: 300,
                        protocols: [fr.VAST_2_0, fr.VAST_3_0, fr.VAST_4_0, fr.VAST_2_0_WRAPPER, fr.VAST_3_0_WRAPPER, fr.VAST_4_0_WRAPPER],
                        linearity: 1,
                        placement: r.placement,
                        playbackmethod: [Ar(n.getConfig())],
                        startdelay: Er(r.offset),
                        api: [cr.VPAID_2_0]
                    }
                }
            },
            o = r.jwpseg,
            a = r.skipoffset;
        if (void 0 !== a) {
            var s = a >= 0;
            i.params.video.skip = s, s && Object(u.default)(i.params.video, {
                skipmin: a + 2,
                skipafter: a
            })
        }
        return Array.isArray(o) && o.length && (i.params.video.ext = {
            jwpseg: o
        }), i
    }

    function on(e) {
        return void 0 === e && (e = {}), void 0 !== e.id
    }
    var an = "PubMatic: ",
        sn = "USD",
        dn = 1,
        un = "nFIn8aLzbd",
        cn = void 0,
        fn = 0,
        ln = 0,
        pn = "http://prebid.org/dev-docs/show-native-ads.html",
        gn = {
            kadpageurl: "",
            gender: "",
            yob: "",
            lat: "",
            lon: "",
            wiid: "",
            profId: "",
            verId: ""
        },
        mn = {
            NUMBER: "number",
            STRING: "string",
            BOOLEAN: "boolean",
            ARRAY: "array",
            OBJECT: "object"
        },
        vn = {
            mimes: mn.ARRAY,
            minduration: mn.NUMBER,
            maxduration: mn.NUMBER,
            startdelay: mn.NUMBER,
            playbackmethod: mn.ARRAY,
            api: mn.ARRAY,
            protocols: mn.ARRAY,
            w: mn.NUMBER,
            h: mn.NUMBER,
            battr: mn.ARRAY,
            linearity: mn.NUMBER,
            placement: mn.NUMBER,
            minbitrate: mn.NUMBER,
            maxbitrate: mn.NUMBER
        },
        yn = {
            TITLE: {
                ID: 1,
                KEY: "title",
                TYPE: 0
            },
            IMAGE: {
                ID: 2,
                KEY: "image",
                TYPE: 0
            },
            ICON: {
                ID: 3,
                KEY: "icon",
                TYPE: 0
            },
            SPONSOREDBY: {
                ID: 4,
                KEY: "sponsoredBy",
                TYPE: 1
            },
            BODY: {
                ID: 5,
                KEY: "body",
                TYPE: 2
            },
            CLICKURL: {
                ID: 6,
                KEY: "clickUrl",
                TYPE: 0
            },
            VIDEO: {
                ID: 7,
                KEY: "video",
                TYPE: 0
            },
            EXT: {
                ID: 8,
                KEY: "ext",
                TYPE: 0
            },
            DATA: {
                ID: 9,
                KEY: "data",
                TYPE: 0
            },
            LOGO: {
                ID: 10,
                KEY: "logo",
                TYPE: 0
            },
            SPONSORED: {
                ID: 11,
                KEY: "sponsored",
                TYPE: 1
            },
            DESC: {
                ID: 12,
                KEY: "data",
                TYPE: 2
            },
            RATING: {
                ID: 13,
                KEY: "rating",
                TYPE: 3
            },
            LIKES: {
                ID: 14,
                KEY: "likes",
                TYPE: 4
            },
            DOWNLOADS: {
                ID: 15,
                KEY: "downloads",
                TYPE: 5
            },
            PRICE: {
                ID: 16,
                KEY: "price",
                TYPE: 6
            },
            SALEPRICE: {
                ID: 17,
                KEY: "saleprice",
                TYPE: 7
            },
            PHONE: {
                ID: 18,
                KEY: "phone",
                TYPE: 8
            },
            ADDRESS: {
                ID: 19,
                KEY: "address",
                TYPE: 9
            },
            DESC2: {
                ID: 20,
                KEY: "desc2",
                TYPE: 10
            },
            DISPLAYURL: {
                ID: 21,
                KEY: "displayurl",
                TYPE: 11
            },
            CTA: {
                ID: 22,
                KEY: "cta",
                TYPE: 12
            }
        },
        bn = {
            ICON: 1,
            LOGO: 2,
            IMAGE: 3
        },
        hn = [{
            id: yn.SPONSOREDBY.ID,
            required: !0,
            data: {
                type: 1
            }
        }, {
            id: yn.TITLE.ID,
            required: !0
        }, {
            id: yn.IMAGE.ID,
            required: !0
        }],
        An = {
            1: "PMP",
            5: "PREF",
            6: "PMPG"
        },
        En = 0,
        Sn = !1,
        Tn = {},
        In = {};

    function _n(e, t) {
        if (!f.isStr(t)) return t && f.logWarn(an + "Ignoring param key: " + e + ", expects string-value, found " + typeof t), cn;
        switch (e) {
            case "pmzoneid":
                return t.split(",").slice(0, 50).map((function(e) {
                    return e.trim()
                })).join();
            case "kadfloor":
            case "lat":
            case "lon":
                return parseFloat(t) || cn;
            case "yob":
                return parseInt(t) || cn;
            default:
                return t
        }
    }

    function wn(e) {
        var t;
        e.params.adUnit = "", e.params.adUnitIndex = "0", e.params.width = 0, e.params.height = 0, e.params.adSlot = (t = e.params.adSlot, f.isStr(t) ? t.replace(/^\s+/g, "").replace(/\s+$/g, "") : "");
        var r = e.params.adSlot,
            n = r.split(":");
        if (r = n[0], 2 == n.length && (e.params.adUnitIndex = n[1]), n = r.split("@"), e.params.adUnit = n[0], n.length > 1) {
            if (2 != (n = n[1].split("x")).length) return void f.logWarn(an + "AdSlot Error: adSlot not in required format");
            e.params.width = parseInt(n[0], 10), e.params.height = parseInt(n[1], 10)
        } else if (e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty(D.b) && e.mediaTypes.banner.hasOwnProperty("sizes")) {
            for (var i = 0, o = []; i < e.mediaTypes.banner.sizes.length; i++) 2 === e.mediaTypes.banner.sizes[i].length && o.push(e.mediaTypes.banner.sizes[i]);
            e.mediaTypes.banner.sizes = o, e.mediaTypes.banner.sizes.length >= 1 && (e.params.width = e.mediaTypes.banner.sizes[0][0], e.params.height = e.mediaTypes.banner.sizes[0][1], e.mediaTypes.banner.sizes = e.mediaTypes.banner.sizes.splice(1, e.mediaTypes.banner.sizes.length - 1))
        }
    }

    function On(e, t, r) {
        var n, i = "Ignoring param key: " + e + ", expects " + r + ", found " + typeof t;
        switch (r) {
            case mn.BOOLEAN:
                n = f.isBoolean;
                break;
            case mn.NUMBER:
                n = f.isNumber;
                break;
            case mn.STRING:
                n = f.isStr;
                break;
            case mn.ARRAY:
                n = f.isArray
        }
        return n(t) ? t : (f.logWarn(an + i), cn)
    }

    function Cn(e, t) {
        var r = e.KEY;
        return {
            id: e.ID,
            required: t[r].required ? 1 : 0,
            data: {
                type: e.TYPE,
                len: t[r].len,
                ext: t[r].ext
            }
        }
    }

    function Pn(e) {
        var t = {
            assets: []
        };
        for (var r in e) {
            if (e.hasOwnProperty(r)) {
                var n = {};
                if (!(t.assets && t.assets.length > 0 && t.assets.hasOwnProperty(r))) switch (r) {
                    case yn.TITLE.KEY:
                        e[r].len || e[r].length ? n = {
                            id: yn.TITLE.ID,
                            required: e[r].required ? 1 : 0,
                            title: {
                                len: e[r].len || e[r].length,
                                ext: e[r].ext
                            }
                        } : f.logWarn(an + "Error: Title Length is required for native ad: " + JSON.stringify(e));
                        break;
                    case yn.IMAGE.KEY:
                        e[r].sizes && e[r].sizes.length > 0 ? n = {
                            id: yn.IMAGE.ID,
                            required: e[r].required ? 1 : 0,
                            img: {
                                type: bn.IMAGE,
                                w: e[r].w || e[r].width || (e[r].sizes ? e[r].sizes[0] : cn),
                                h: e[r].h || e[r].height || (e[r].sizes ? e[r].sizes[1] : cn),
                                wmin: e[r].wmin || e[r].minimumWidth || (e[r].minsizes ? e[r].minsizes[0] : cn),
                                hmin: e[r].hmin || e[r].minimumHeight || (e[r].minsizes ? e[r].minsizes[1] : cn),
                                mimes: e[r].mimes,
                                ext: e[r].ext
                            }
                        } : f.logWarn(an + "Error: Image sizes is required for native ad: " + JSON.stringify(e));
                        break;
                    case yn.ICON.KEY:
                        e[r].sizes && e[r].sizes.length > 0 ? n = {
                            id: yn.ICON.ID,
                            required: e[r].required ? 1 : 0,
                            img: {
                                type: bn.ICON,
                                w: e[r].w || e[r].width || (e[r].sizes ? e[r].sizes[0] : cn),
                                h: e[r].h || e[r].height || (e[r].sizes ? e[r].sizes[1] : cn)
                            }
                        } : f.logWarn(an + "Error: Icon sizes is required for native ad: " + JSON.stringify(e));
                        break;
                    case yn.VIDEO.KEY:
                        n = {
                            id: yn.VIDEO.ID,
                            required: e[r].required ? 1 : 0,
                            video: {
                                minduration: e[r].minduration,
                                maxduration: e[r].maxduration,
                                protocols: e[r].protocols,
                                mimes: e[r].mimes,
                                ext: e[r].ext
                            }
                        };
                        break;
                    case yn.EXT.KEY:
                        n = {
                            id: yn.EXT.ID,
                            required: e[r].required ? 1 : 0
                        };
                        break;
                    case yn.LOGO.KEY:
                        n = {
                            id: yn.LOGO.ID,
                            required: e[r].required ? 1 : 0,
                            img: {
                                type: bn.LOGO,
                                w: e[r].w || e[r].width || (e[r].sizes ? e[r].sizes[0] : cn),
                                h: e[r].h || e[r].height || (e[r].sizes ? e[r].sizes[1] : cn)
                            }
                        };
                        break;
                    case yn.SPONSOREDBY.KEY:
                    case yn.BODY.KEY:
                    case yn.RATING.KEY:
                    case yn.LIKES.KEY:
                    case yn.DOWNLOADS.KEY:
                    case yn.PRICE.KEY:
                    case yn.SALEPRICE.KEY:
                    case yn.PHONE.KEY:
                    case yn.ADDRESS.KEY:
                    case yn.DESC2.KEY:
                    case yn.DISPLAYURL.KEY:
                    case yn.CTA.KEY:
                        n = Cn(In[r], e)
                }
            }
            n && n.id && (t.assets[t.assets.length] = n)
        }
        var i = hn.length,
            o = 0;
        return hn.forEach((function(e) {
            for (var r = t.assets.length, n = 0; n < r; n++)
                if (e.id == t.assets[n].id) {
                    o++;
                    break
                }
        })), Sn = i != o, t
    }

    function jn(e) {
        var t, r = e.mediaTypes.banner.sizes,
            n = [];
        if (r !== cn && f.isArray(r)) {
            if (t = {}, e.params.width || e.params.height) t.w = e.params.width, t.h = e.params.height;
            else {
                if (0 === r.length) return t = cn, f.logWarn(an + "Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), t;
                t.w = parseInt(r[0][0], 10), t.h = parseInt(r[0][1], 10), r = r.splice(1, r.length - 1)
            }
            r.length > 0 && (n = [], r.forEach((function(e) {
                e.length > 1 && n.push({
                    w: e[0],
                    h: e[1]
                })
            })), n.length > 0 && (t.format = n)), t.pos = 0, t.topframe = f.inIframe() ? 0 : 1
        } else f.logWarn(an + "Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), t = cn;
        return t
    }

    function Rn(e) {
        var t, r = e.params.video;
        if (r !== cn) {
            for (var n in t = {}, vn) r.hasOwnProperty(n) && (t[n] = On(n, r[n], vn[n]));
            f.isArray(e.mediaTypes.video.playerSize[0]) ? (t.w = parseInt(e.mediaTypes.video.playerSize[0][0], 10), t.h = parseInt(e.mediaTypes.video.playerSize[0][1], 10)) : f.isNumber(e.mediaTypes.video.playerSize[0]) && (t.w = parseInt(e.mediaTypes.video.playerSize[0], 10), t.h = parseInt(e.mediaTypes.video.playerSize[1], 10)), e.params.video.hasOwnProperty("skippable") && (t.ext = {
                video_skippable: e.params.video.skippable ? 1 : 0
            })
        } else t = cn, f.logWarn(an + "Error: Video config params missing for adunit: " + e.params.adUnit + " with mediaType set as video. Ignoring video impression in the adunit.");
        return t
    }

    function xn(e, t) {
        var r, n, i = {},
            o = {},
            a = e.hasOwnProperty("sizes") ? e.sizes : [],
            s = "",
            d = [];
        if (function(e, t) {
                t.params.deals && (f.isArray(t.params.deals) ? t.params.deals.forEach((function(t) {
                    f.isStr(t) && t.length > 3 ? (e.pmp || (e.pmp = {
                        private_auction: 0,
                        deals: []
                    }), e.pmp.deals.push({
                        id: t
                    })) : f.logWarn(an + "Error: deal-id present in array bid.params.deals should be a strings with more than 3 charaters length, deal-id ignored: " + t)
                })) : f.logWarn(an + "Error: bid.params.deals should be an array of strings."))
            }(i = {
                id: e.bidId,
                tagid: e.params.adUnit || void 0,
                bidfloor: _n("kadfloor", e.params.kadfloor),
                secure: 1,
                ext: {
                    pmZoneId: _n("pmzoneid", e.params.pmzoneid)
                },
                bidfloorcur: e.params.currency ? _n("currency", e.params.currency) : sn
            }, e), e.hasOwnProperty("mediaTypes"))
            for (s in e.mediaTypes) switch (s) {
                case D.b:
                    (r = jn(e)) !== cn && (i.banner = r);
                    break;
                case D.c:
                    o.request = JSON.stringify(Pn(e.nativeParams)), Sn ? f.logWarn(an + "Error: Error in Native adunit " + e.params.adUnit + ". Ignoring the adunit. Refer to " + pn + " for more details.") : i.native = o;
                    break;
                case D.d:
                    (n = Rn(e)) !== cn && (i.video = n)
            } else r = {
                pos: 0,
                w: e.params.width,
                h: e.params.height,
                topframe: f.inIframe() ? 0 : 1
            }, f.isArray(a) && a.length > 1 && ((a = a.splice(1, a.length - 1)).forEach((function(e) {
                d.push({
                    w: e[0],
                    h: e[1]
                })
            })), r.format = d), i.banner = r;
        return i.hasOwnProperty(D.b) || i.hasOwnProperty(D.c) || i.hasOwnProperty(D.d) ? i : cn
    }

    function Bn(e) {
        var t = function(e) {
            var t, r = (t = window.DigiTrust && (h.b.getConfig("digiTrustId") || window.DigiTrust.getUser({
                member: e
            }))) && t.success && t.identity || null;
            return !r || r.privacy && r.privacy.optout ? null : r
        }(un);
        null !== t && e.push({
            source: "digitru.st",
            uids: [{
                id: t.id || "",
                atype: 1,
                ext: {
                    keyv: parseInt(t.keyv) || 0
                }
            }]
        })
    }

    function Un(e, t, r, n) {
        f.isStr(t) && e.push({
            source: r,
            uids: [{
                id: t,
                atype: n
            }]
        })
    }

    function Dn(e, t) {
        var r = [];
        Bn(r),
            function(e, t) {
                var r = null,
                    n = h.b.getConfig("adsrvrOrgId");
                f.isStr(f.deepAccess(t, "0.userId.tdid")) ? r = t[0].userId.tdid : n && f.isStr(n.TDID) && (r = n.TDID), null !== r && e.push({
                    source: "adserver.org",
                    uids: [{
                        id: r,
                        atype: 1,
                        ext: {
                            rtiPartner: "TDID"
                        }
                    }]
                })
            }(r, t);
        var n = t[0];
        n && n.userId && (Un(r, f.deepAccess(n, "userId.pubcid"), "pubcid.org", 1), Un(r, f.deepAccess(n, "userId.digitrustid.data.id"), "digitru.st", 1), Un(r, f.deepAccess(n, "userId.id5id"), "id5-sync.com", 1), Un(r, f.deepAccess(n, "userId.criteoId"), "criteo.com", 1), Un(r, f.deepAccess(n, "userId.idl_env"), "liveramp.com", 1), Un(r, f.deepAccess(n, "userId.lipb.lipbid"), "liveintent.com", 1), Un(r, f.deepAccess(n, "userId.parrableid"), "parrable.com", 1), Un(r, f.deepAccess(n, "userId.britepoolid"), "britepool.com", 1), Un(r, f.deepAccess(n, "userId.netId"), "netid.de", 1)), r.length > 0 && (e.user.eids = r)
    }
    f._each(yn, (function(e) {
        Tn[e.ID] = e.KEY
    })), f._each(yn, (function(e) {
        In[e.KEY] = e
    }));
    var kn = {
        code: "pubmatic",
        gvlid: 76,
        supportedMediaTypes: [D.b, D.d, D.c],
        isBidRequestValid: function(e) {
            return !(!e || !e.params) && (f.isStr(e.params.publisherId) ? !!(!e.params.hasOwnProperty("video") || e.params.video.hasOwnProperty("mimes") && f.isArray(e.params.video.mimes) && 0 !== e.params.video.mimes.length) || (f.logWarn(an + "Error: For video ads, mimes is mandatory and must specify atlease 1 mime value. Call to OpenBid will not be sent for ad unit:" + JSON.stringify(e)), !1) : (f.logWarn(an + "Error: publisherId is mandatory and cannot be numeric. Call to OpenBid will not be sent for ad unit: " + JSON.stringify(e)), !1))
        },
        buildRequests: function(e, t) {
            var r;
            t && t.refererInfo && (r = t.refererInfo);
            var n, i, o, a = function(e) {
                    return {
                        pageURL: e && e.referer ? e.referer : window.location.href,
                        refURL: window.document.referrer
                    }
                }(r),
                s = function(e) {
                    return {
                        id: "" + (new Date).getTime(),
                        at: dn,
                        cur: [sn],
                        imp: [],
                        site: {
                            page: e.pageURL,
                            ref: e.refURL,
                            publisher: {}
                        },
                        device: {
                            ua: navigator.userAgent,
                            js: 1,
                            dnt: "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack ? 1 : 0,
                            h: screen.height,
                            w: screen.width,
                            language: navigator.language
                        },
                        user: {},
                        ext: {}
                    }
                }(a),
                d = "",
                c = [],
                l = [];
            if (e.forEach((function(e) {
                    if ((n = f.deepClone(e)).params.adSlot = n.params.adSlot || "", wn(n), n.params.hasOwnProperty("video"));
                    else if (!(n.hasOwnProperty("mediaTypes") && n.mediaTypes.hasOwnProperty(D.c) || 0 !== n.params.width || 0 !== n.params.height)) return void f.logWarn(an + "Skipping the non-standard adslot: ", n.params.adSlot, JSON.stringify(n));
                    a.pubId = a.pubId || n.params.publisherId, (a = function(e, t) {
                        var r, n, i;
                        for (r in t.kadpageurl || (t.kadpageurl = t.pageURL), gn) gn.hasOwnProperty(r) && (n = e[r]) && ("object" == typeof(i = gn[r]) && (n = i.f(n, t)), f.isStr(n) ? t[r] = n : f.logWarn(an + "Ignoring param : " + r + " with value : " + gn[r] + ", expects string-value, found " + typeof n));
                        return t
                    }(n.params, a)).transactionId = n.transactionId, "" === d ? d = n.params.currency || cn : n.params.hasOwnProperty("currency") && d !== n.params.currency && f.logWarn(an + "Currency specifier ignored. Only one currency permitted."), n.params.currency = d, n.params.hasOwnProperty("dctr") && f.isStr(n.params.dctr) && c.push(n.params.dctr), n.params.hasOwnProperty("bcat") && f.isArray(n.params.bcat) && (l = l.concat(n.params.bcat));
                    var t = xn(n);
                    t && s.imp.push(t)
                })), 0 != s.imp.length) return s.site.publisher.id = a.pubId.trim(), En = a.pubId.trim(), s.ext.wrapper = {}, s.ext.wrapper.profile = parseInt(a.profId) || cn, s.ext.wrapper.version = parseInt(a.verId) || cn, s.ext.wrapper.wiid = a.wiid || cn, s.ext.wrapper.wv = "prebid_prebid_3.15.0", s.ext.wrapper.transactionId = a.transactionId, s.ext.wrapper.wp = "pbjs", s.user.gender = a.gender ? a.gender.trim() : cn, s.user.geo = {}, s.user.geo.lat = _n("lat", a.lat), s.user.geo.lon = _n("lon", a.lon), s.user.yob = _n("yob", a.yob), s.device.geo = s.user.geo, s.site.page = a.kadpageurl.trim() || s.site.page.trim(), s.site.domain = (i = s.site.page, (o = document.createElement("a")).href = i, o.hostname), "object" == typeof h.b.getConfig("device") && (s.device = Object(u.default)(s.device, h.b.getConfig("device"))), f.deepSetValue(s, "source.tid", a.transactionId), -1 !== window.location.href.indexOf("pubmaticTest=true") && (s.test = 1), e[0].schain && f.deepSetValue(s, "source.ext.schain", e[0].schain), t && t.gdprConsent && (f.deepSetValue(s, "user.ext.consent", t.gdprConsent.consentString), f.deepSetValue(s, "regs.ext.gdpr", t.gdprConsent.gdprApplies ? 1 : 0)), t && t.uspConsent && f.deepSetValue(s, "regs.ext.us_privacy", t.uspConsent), !0 === h.b.getConfig("coppa") && f.deepSetValue(s, "regs.coppa", 1),
                function(e, t, r) {
                    var n, i = "";
                    if (t.length > 0)
                        if (r[0].params.hasOwnProperty("dctr")) {
                            if (i = r[0].params.dctr, f.isStr(i) && i.length > 0) {
                                var o = i.split("|");
                                i = "", o.forEach((function(e) {
                                    i += e.length > 0 ? e.trim() + "|" : ""
                                })), n = i.length, "|" === i.substring(n, n - 1) && (i = i.substring(0, n - 1)), e.site.ext = {
                                    key_val: i.trim()
                                }
                            } else f.logWarn(an + "Ignoring param : dctr with value : " + i + ", expects string-value, found empty or non-string value");
                            t.length > 1 && f.logWarn(an + "dctr value found in more than 1 adunits. Value from 1st adunit will be picked. Ignoring values from subsequent adunits")
                        } else f.logWarn(an + "dctr value not found in 1st adunit, ignoring values from subsequent adunits")
                }(s, c, e), Dn(s, e),
                function(e, t) {
                    (t = t.filter((function(e) {
                        return "string" == typeof e || (f.logWarn(an + "bcat: Each category should be a string, ignoring category: " + e), !1)
                    })).map((function(e) {
                        return e.trim()
                    })).filter((function(e, t, r) {
                        if (e.length > 3) return r.indexOf(e) === t;
                        f.logWarn(an + "bcat: Each category should have a value of a length of more than 3 characters, ignoring category: " + e)
                    }))).length > 0 && (f.logWarn(an + "bcat: Selected: ", t), e.bcat = t)
                }(s, l), "object" == typeof h.b.getConfig("app") && (s.app = h.b.getConfig("app"), s.app.publisher = s.site.publisher, s.app.ext = s.site.ext || cn, delete s.site), {
                    method: "POST",
                    url: "https://hbopenbid.pubmatic.com/translator?source=prebid-client", /* ------ */
                    data: JSON.stringify(s)
                }
        },
        interpretResponse: function(e, t) {
            var r = [],
                n = sn,
                i = JSON.parse(t.data),
                o = i.site && i.site.ref ? i.site.ref : "";
            try {
                e.body && e.body.seatbid && f.isArray(e.body.seatbid) && (n = e.body.cur || n, e.body.seatbid.forEach((function(e) {
                    e.bid && f.isArray(e.bid) && e.bid.forEach((function(t) {
                        var a = {
                            requestId: t.impid,
                            cpm: (parseFloat(t.price) || 0).toFixed(2),
                            width: t.w,
                            height: t.h,
                            creativeId: t.crid || t.id,
                            dealId: t.dealid,
                            currency: n,
                            netRevenue: !1,
                            ttl: 300,
                            referrer: o,
                            ad: t.adm,
                            pm_seat: e.seat || null,
                            pm_dspid: t.ext && t.ext.dspid ? t.ext.dspid : null
                        };
                        i.imp && i.imp.length > 0 && i.imp.forEach((function(e) {
                            if (t.impid === e.id) switch (function(e, t) {
                                var r = "",
                                    n = new RegExp(/VAST\s+version/);
                                if (e.indexOf('span class="PubAPIAd"') >= 0) t.mediaType = D.b;
                                else if (n.test(e)) t.mediaType = D.d;
                                else try {
                                    (r = JSON.parse(e.replace(/\\/g, ""))) && r.native && (t.mediaType = D.c)
                                } catch (t) {
                                    f.logWarn(an + "Error: Cannot parse native reponse for ad response: " + e)
                                }
                            }(t.adm, a), a.mediaType) {
                                case D.b:
                                    break;
                                case D.d:
                                    a.width = t.hasOwnProperty("w") ? t.w : e.video.w, a.height = t.hasOwnProperty("h") ? t.h : e.video.h, a.vastXml = t.adm;
                                    break;
                                case D.c:
                                    ! function(e, t) {
                                        if (t.native = {}, e.hasOwnProperty("adm")) {
                                            var r = "";
                                            try {
                                                r = JSON.parse(e.adm.replace(/\\/g, ""))
                                            } catch (e) {
                                                return void f.logWarn(an + "Error: Cannot parse native reponse for ad response: " + t.adm)
                                            }
                                            if (r && r.native && r.native.assets && r.native.assets.length > 0) {
                                                t.mediaType = D.c;
                                                for (var n = 0, i = r.native.assets.length; n < i; n++) switch (r.native.assets[n].id) {
                                                    case yn.TITLE.ID:
                                                        t.native.title = r.native.assets[n].title && r.native.assets[n].title.text;
                                                        break;
                                                    case yn.IMAGE.ID:
                                                        t.native.image = {
                                                            url: r.native.assets[n].img && r.native.assets[n].img.url,
                                                            height: r.native.assets[n].img && r.native.assets[n].img.h,
                                                            width: r.native.assets[n].img && r.native.assets[n].img.w
                                                        };
                                                        break;
                                                    case yn.ICON.ID:
                                                        t.native.icon = {
                                                            url: r.native.assets[n].img && r.native.assets[n].img.url,
                                                            height: r.native.assets[n].img && r.native.assets[n].img.h,
                                                            width: r.native.assets[n].img && r.native.assets[n].img.w
                                                        };
                                                        break;
                                                    case yn.SPONSOREDBY.ID:
                                                    case yn.BODY.ID:
                                                    case yn.LIKES.ID:
                                                    case yn.DOWNLOADS.ID:
                                                    case yn.PRICE:
                                                    case yn.SALEPRICE.ID:
                                                    case yn.PHONE.ID:
                                                    case yn.ADDRESS.ID:
                                                    case yn.DESC2.ID:
                                                    case yn.CTA.ID:
                                                    case yn.RATING.ID:
                                                    case yn.DISPLAYURL.ID:
                                                        t.native[Tn[r.native.assets[n].id]] = r.native.assets[n].data && r.native.assets[n].data.value
                                                }
                                                t.native.clickUrl = r.native.link && r.native.link.url, t.native.clickTrackers = r.native.link && r.native.link.clicktrackers || [], t.native.impressionTrackers = r.native.imptrackers || [], t.native.jstracker = r.native.jstracker || [], t.width || (t.width = fn), t.height || (t.height = ln)
                                            }
                                        }
                                    }(t, a)
                            }
                        })), t.ext && t.ext.deal_channel && (a.dealChannel = An[t.ext.deal_channel] || null), a.meta = {}, t.ext && t.ext.dspid && (a.meta.networkId = t.ext.dspid), t.ext && t.ext.advid && (a.meta.buyerId = t.ext.advid), t.adomain && t.adomain.length > 0 && (a.meta.clickUrl = t.adomain[0]), r.push(a)
                    }))
                })))
            } catch (e) {
                f.logError(e)
            }
            return r
        },
        getUserSyncs: function(e, t, r, n) {
            var i = "https://ads.pubmatic.com/AdServer/js/showad.js#PIX&kdntuid=1&p=" + En; ////////////////////////
            if (r && (i += "&gdpr=" + (r.gdprApplies ? 1 : 0), i += "&gdpr_consent=" + encodeURIComponent(r.consentString || "")), n && (i += "&us_privacy=" + encodeURIComponent(n)), !0 === h.b.getConfig("coppa") && (i += "&coppa=1"), e.iframeEnabled) return [{
                type: "iframe",
                url: i
            }];
            f.logWarn(an + "Please enable iframe based user sync.")
        },
        transformBidParams: function(e, t) {
            return f.convertTypes({
                publisherId: "string",
                adSlot: "string"
            }, e)
        }
    };
    Object(kt.b)(kn);
    var Nn = kn.code;

    function Mn(e, t) {
        var r = e.settings,
            n = e.params,
            i = e.player,
            o = {
                bidder: Nn,
                params: {
                    publisherId: "" + t.pubid,
                    adSlot: "" + t.id,
                    video: {
                        mimes: vr(er),
                        minduration: 3,
                        maxduration: 300,
                        protocols: [fr.VAST_2_0, fr.VAST_3_0, fr.VAST_4_0, fr.VAST_2_0_WRAPPER, fr.VAST_3_0_WRAPPER, fr.VAST_4_0_WRAPPER],
                        startdelay: Er(n.offset),
                        placement: n.placement,
                        linearity: 1,
                        playbackmethod: [Ar(i.getConfig())],
                        api: [cr.VPAID_2_0]
                    }
                }
            },
            a = n.jwpseg,
            s = n.skipoffset;
        return void 0 !== s && (o.params.video.skippable = s >= 0), t.optionalParams && Object(u.default)(o.params, t.optionalParams), Array.isArray(a) && a.length && (o.params.deals = a), void 0 !== r.floorPriceCents && (o.params.kadfloor = "" + r.floorPriceCents / 100), r.floorPriceCurrency && (o.params.currency = r.floorPriceCurrency), o
    }

    function qn(e) {
        return void 0 === e && (e = {}), void 0 !== e.id && void 0 !== e.pubid
    }
    At.bidderSettings[Nn] = {
        sendStandardTargeting: !1,
        adserverTargeting: [{
            key: "vpb_pubmatic_bid",
            val: function(e) {
                return br(At.getConfig("priceGranularity"), e)
            }
        }, {
            key: "vpb_pubmatic_key",
            val: function(e) {
                return e.videoCacheKey
            }
        }]
    };
    var Wn = "ads.tremorhub.com/ad/tag",
        Gn = {
            code: "telaria",
            aliases: ["tremor", "tremorvideo"],
            supportedMediaTypes: [D.d],
            isBidRequestValid: function(e) {
                return !!(e && e.params && e.params.adCode && e.params.supplyCode)
            },
            buildRequests: function(e, t) {
                var r = [];
                return e.forEach((function(e) {
                    var n = function(e, t) {
                        var r, n, i = f.deepAccess(e, "mediaTypes.video.playerSize");
                        i || f.logWarn("Although player size isn't required it is highly recommended");
                        i && (!f.isArray(i) || 2 !== i.length || isNaN(i[0]) || isNaN(i[1]) ? "object" == typeof i && (r = i[0][0], n = i[0][1]) : (r = i[0], n = i[1]));
                        var o = f.deepAccess(e, "params.supplyCode"),
                            a = f.deepAccess(e, "params.adCode");
                        if (o && a) {
                            var s = "https://" + o + "." + Wn + "?adCode=" + a;
                            r && (s += "&playerWidth=" + r), n && (s += "&playerHeight=" + n);
                            var d = Object(u.default)({
                                srcPageUrl: zn()
                            }, e.params);
                            return delete d.adCode, s += "" + Vn(d, e.schain), s += "&transactionId=" + e.transactionId, t && (t.gdprConsent && ("boolean" == typeof t.gdprConsent.gdprApplies && (s += "&gdpr=" + (t.gdprConsent.gdprApplies ? 1 : 0)), t.gdprConsent.consentString && (s += "&gdpr_consent=" + t.gdprConsent.consentString)), t.refererInfo && t.refererInfo.referer && (s += "&referrer=" + encodeURIComponent(t.refererInfo.referer))), s + "&hb=1&fmt=json"
                        }
                    }(e, t);
                    n && r.push({
                        method: "GET",
                        url: n,
                        bidId: e.bidId,
                        vastUrl: n.split("&fmt=json")[0]
                    })
                })), r
            },
            interpretResponse: function(e, t) {
                var r, n, i, o = [];
                try {
                    r = e.body, t.url.split("&").forEach((function(e) {
                        var t = e.toLowerCase();
                        t.indexOf("player") > -1 && (t.indexOf("width") > -1 ? n = e.split("=")[1] : t.indexOf("height") > -1 && (i = e.split("=")[1]))
                    }))
                } catch (e) {
                    f.logError(e), n = 0, i = 0
                }
                if (!r || r.error) {
                    var a = "in response for " + t.bidderCode + " adapter";
                    r && r.error && (a += ": " + r.error), f.logError(a)
                } else f.isEmpty(r.seatbid) || r.seatbid[0].bid.forEach((function(e) {
                    o.push(function(e, t, r, n, i, o) {
                        var a = Object(Me.a)(e, t);
                        r && Object(u.default)(a, {
                            requestId: t.bidId,
                            cpm: r.price,
                            creativeId: r.crid || "-1",
                            vastXml: r.adm,
                            vastUrl: t.vastUrl,
                            mediaType: "video",
                            width: n,
                            height: i,
                            bidderCode: o,
                            adId: r.id,
                            currency: "USD",
                            netRevenue: !0,
                            ttl: 300,
                            ad: r.adm
                        });
                        return a
                    }(m.STATUS.GOOD, t, e, n, i, "telaria"))
                }));
                return o
            },
            getUserSyncs: function(e, t) {
                var r = [];
                return e.pixelEnabled && t.length && (f.deepAccess(t, "0.body.ext.telaria.userSync") || []).forEach((function(e) {
                    return r.push({
                        type: "image",
                        url: e
                    })
                })), r
            },
            onTimeout: function(e) {
                var t = Fn(e);
                t && f.triggerPixel(t)
            }
        };

    function zn() {
        return encodeURIComponent(document.location.href)
    }

    function Ln(e) {
        return f.isEmpty(e) ? "" : encodeURIComponent(e)
    }

    function Vn(e, t) {
        var r = "";
        if (!f.isEmpty(e)) {
            for (var n in e) "schain" !== n && e.hasOwnProperty(n) && !f.isEmpty(e[n]) && (r += "&" + n + "=" + e[n]);
            r += function(e) {
                if (f.isEmpty(e)) return "";
                var t = "&schain=" + e.ver + "," + e.complete;
                return e.nodes.forEach((function(e) {
                    t += "!", t += Ln(e.asi) + ",", t += Ln(e.sid) + ",", t += Ln(e.hp) + ",", t += Ln(e.rid) + ",", t += Ln(e.name) + ",", t += "" + Ln(e.domain)
                })), t
            }(f.isEmpty(t) ? e.schain : t)
        }
        return r
    }
    var Fn = function(e) {
        var t = f.deepAccess(e, "0.params.0");
        if (!f.isEmpty(t)) {
            var r = "https://events.tremorhub.com/diag"; ///////////////////////////////
            return r += "" + Vn(t = Object(u.default)({
                srcPageUrl: zn()
            }, t)), r += "&hb=1&evt=TO"
        }
    };
    Object(kt.b)(Gn);
    var Yn, Hn = Gn.code;

    function Kn(e, t) {
        var r = e.params,
            n = e.utils,
            i = r.placement,
            o = r.skipoffset,
            a = {
                bidder: Hn,
                params: {
                    supplyCode: t.pubid,
                    adCode: t.id,
                    srcPageUrl: n.getURLParts().url,
                    placement: "" + i
                }
            };
        if (void 0 !== o) {
            var s = o >= 0;
            a.params.skip = s ? "1" : "0", s && Object(u.default)(a.params, {
                skipmin: "" + (o + 2),
                skipafter: "" + o
            })
        }
        return a
    }

    function Jn(e) {
        return void 0 === e && (e = {}), void 0 !== e.id && void 0 !== e.pubid
    }
    At.bidderSettings[Hn] = {
        sendStandardTargeting: !1,
        adserverTargeting: [{
            key: "vpb_telaria_bid",
            val: function(e) {
                return br(At.getConfig("priceGranularity"), e)
            }
        }, {
            key: "vpb_telaria_key",
            val: function(e) {
                return e.videoCacheKey
            }
        }]
    };
    var Xn = ((Yn = {})[["EMX"]] = i, Yn[["IndexExchange"]] = a, Yn[["MediaGrid"]] = o, Yn[["PubMatic"]] = s, Yn[["SpotX"]] = n, Yn[["Telaria"]] = d, Yn),
        $n = m.EVENTS.AUCTION_INIT,
        Qn = m.EVENTS.BID_ADJUSTMENT,
        Zn = m.EVENTS.BID_REQUESTED,
        ei = m.EVENTS.BID_RESPONSE,
        ti = m.EVENTS.BID_TIMEOUT,
        ri = m.EVENTS.NO_BID,
        ni = function(e, t) {
            var r = e.floorPriceCents,
                n = e.mediationLayerAdServer;
            return Sr(n) && isNaN(parseFloat(r)) ? [] : t.filter((function(e) {
                var t = e.name;
                return t = sr[t.toLowerCase()], -1 !== ur[n].indexOf(t)
            })).map((function(e) {
                var t = sr[e.name.toLowerCase()];
                return Object(u.default)(e, e.custom_params, {
                    name: t
                })
            }))
        };
    var ii = function() {
        function e(e, t, r, n, i) {
            var o = this;
            this.id = n.id || e.utils.genId(12), this.player = e, this.engine = t, this.settings = function(e) {
                var t = Object(u.default)({}, e),
                    r = t.floorPriceCurrency;
                ur[t.mediationLayerAdServer] || (t.mediationLayerAdServer = ar);
                var n = t.mediationLayerAdServer;
                return n === ir ? t.floorPriceCents = Zt : n !== nr && n !== or || (t.floorPriceCents = +t.floorPriceCents || 0), r ? t.floorPriceCurrency = r.toUpperCase() : void 0 !== t.floorPriceCents && (t.floorPriceCurrency = $t), t
            }(r.settings || {}), this.bidders = ni(this.settings, r.bidders || []), this.params = n, this.utils = i, this.auctionStart = null, this.hasWinner = this.settings.mediationLayerAdServer === nr, this._auctionStartHandler = this._auctionStartHandler.bind(this), this._bidAdjustmentHandler = this._bidAdjustmentHandler.bind(this), this._bidRequestedHandler = this._bidRequestedHandler.bind(this), this._bidResponseHandler = this._bidResponseHandler.bind(this), this._bidTimeoutHandler = this._bidTimeoutHandler.bind(this), this._noBidHandler = this._noBidHandler.bind(this), this._abortPromise = new Promise((function(e) {
                o._resolve = e
            })).then((function() {
                return o.updateBids(o.bidders, {
                    result: pr
                }), t.getBidResponsesForAdUnitCode(o.id).bids
            }))
        }
        var t = e.prototype;
        return t.init = function() {
            var e = this,
                t = this.bidders.reduce((function(t, r) {
                    var n = Xn[r.name];
                    return n && n.validate(r) ? (t.push(n.generate(e, r)), e.updatePrebidConfig(r), e.updateBid(r, {
                        bidder: n.bidder
                    })) : e.updateBid(r, {
                        bidder: n ? n.bidder : null,
                        result: "invalid",
                        timeForBidResponse: 0
                    }), t
                }), []),
                r = this.player,
                n = [r.getWidth(), r.getHeight()];
            this.engine.addAdUnits({
                code: this.id,
                sizes: n,
                bids: t,
                mediaTypes: {
                    video: {
                        context: tr,
                        playerSize: n
                    }
                }
            })
        }, t.getEventObject = function() {
            var e = this.settings,
                t = e.bidTimeout,
                r = e.floorPriceCents,
                n = e.floorPriceCurrency,
                i = e.mediationLayerAdServer,
                o = {
                    bidsVersion: "0.3.12",
                    mediationLayerAdServer: i,
                    bidders: this.bidders.map((function(e) {
                        return Object(u.default)({}, e)
                    })),
                    bidTimeout: t || this.engine.getConfig("bidderTimeout"),
                    floorPriceCurrency: n
                };
            i !== nr && i !== or || (o.floorPriceCents = r);
            var a = o.bidders.reduce((function(e, t) {
                return t.timeForVPBCache && (e.total += t.timeForVPBCache, e.count += 1), e
            }), {
                total: 0,
                count: 0
            });
            return a.count && (o.timeForVPBCache = a.total / a.count), o
        }, t._auctionStartHandler = function(e) {
            var t = e.timestamp;
            this.auctionStart = t
        }, t._bidAdjustmentHandler = function(e) {
            if (e.adUnitCode === this.id) {
                var t = {
                    priceInCents: 100 * e.cpm,
                    grossPriceInCents: parseFloat(e.originalCpm) !== parseFloat(e.cpm) ? 100 * e.originalCpm : void 0,
                    timeForBidResponse: e.timeToRespond
                };
                if (!e.videoCacheKey) {
                    e.meta = e.meta || {};
                    var r = this.player,
                        n = this.settings;
                    if (this.hasWinner = this.hasWinner || t.priceInCents >= n.floorPriceCents && Sr(n.mediationLayerAdServer), this.hasWinner) e.meta.vastUrl = e.vastUrl, e.vastUrl = e.videoCacheKey = !0;
                    else {
                        t.cacheKey = e.customCacheKey = e.customCacheKey || r.utils.genId(12), e.meta.vpbCacheStart = Tr();
                        var i = e.vastXml || (a = e.customCacheKey, s = e.vastUrl, '\n<VAST version="4.0">\n    <Ad id="' + a + '">\n        <Wrapper>\n            <AdSystem version="0.3.12">JWP</AdSystem>\n            <VASTAdTagURI><![CDATA[' + s + "]]></VASTAdTagURI>\n        </Wrapper>\n    </Ad>\n</VAST>\n"),
                            o = yr(this.bidders, "bidder", e.bidder);
                        e.vastXml = this.appendPings(i, o ? o.name : e.bidder, e.customCacheKey)
                    }
                }
                this.updateBid(e, t)
            }
            var a, s
        }, t._bidRequestedHandler = function(e) {
            var t = e.refererInfo,
                r = this.engine,
                n = this.utils.getURLParts(),
                i = n.url,
                o = n.domain;
            t && i && (t.referer = i), r.setConfig({
                publisherDomain: o
            }), r.offEvent(Zn, this._bidRequestedHandler)
        }, t._bidResponseHandler = function(e) {
            if (e.adUnitCode === this.id) {
                var t = {
                    dealId: e.dealId,
                    priceCurrency: e.currency,
                    result: "bid",
                    requestId: e.requestId
                };
                e.meta && e.meta.vpbCacheStart && (t.timeForVPBCache = Tr() - e.meta.vpbCacheStart, t.timeForBidResponse = e.timeToRespond + t.timeForVPBCache), this.updateBid(e, t, e.meta && e.meta.vpbCacheStart)
            }
        }, t._bidTimeoutHandler = function(e) {
            var t = this,
                r = Tr() - this.auctionStart,
                n = e.filter((function(e) {
                    return e.adUnitCode === t.id
                }));
            this.updateBids(n, {
                result: "timeout",
                timeForBidResponse: r
            })
        }, t._noBidHandler = function(e) {
            if (e.adUnitCode === this.id) {
                var t = Tr() - this.auctionStart;
                this.updateBid(e, {
                    result: "noBid",
                    timeForBidResponse: t
                })
            }
        }, t.start = function() {
            var e = this,
                t = this.engine,
                r = new Promise((function(r) {
                    t.onEvent($n, e._auctionStartHandler), t.onEvent(Zn, e._bidRequestedHandler), t.onEvent(Qn, e._bidAdjustmentHandler), t.onEvent(ei, e._bidResponseHandler), t.onEvent(ti, e._bidTimeoutHandler), t.onEvent(ri, e._noBidHandler);
                    var n = e.id;
                    t.requestBids({
                        adUnitCodes: [n],
                        bidsBackHandler: function(e) {
                            var t = e[n] || {};
                            r(t.bids)
                        },
                        timeout: e.settings.bidTimeout
                    })
                }));
            return Promise.race([r, this._abortPromise]).then((function(r) {
                return t.offEvent($n, e._auctionStartHandler), t.offEvent(Zn, e._bidRequestedHandler), t.offEvent(Qn, e._bidAdjustmentHandler), t.offEvent(ei, e._bidResponseHandler), t.offEvent(ti, e._bidTimeoutHandler), t.offEvent(ri, e._noBidHandler), e.bidsBackHandler(r)
            })).then((function(e) {
                return {
                    result: e
                }
            }))
        }, t.bidsBackHandler = function(e) {
            void 0 === e && (e = []);
            var t = Tr() - this.auctionStart,
                r = this.engine,
                n = this.id,
                i = this.settings,
                o = i.floorPriceCents,
                a = i.mediationLayerAdServer,
                s = Sr(a);
            this.updateBids(e, {
                result: "bid"
            }), this.updateBids(this.bidders, (function(e) {
                var r = e.result,
                    n = e.cacheKey,
                    i = {
                        result: "error",
                        code: !r && n ? 599 : void 0,
                        timeForBidResponse: t
                    };
                return s && (i.winner = !1), i
            }));
            var d = r.getHighestCpmBids(n)[0];
            if (s && d && 100 * d.cpm >= o) {
                this.updateBid(d, {
                    winner: !0
                }, !0);
                var u = d.meta && d.meta.hasOwnProperty("vastUrl");
                return {
                    adm: d.vastXml,
                    tag: u && d.meta ? d.meta.vastUrl : d.vastUrl
                }
            }
            return d && function(e) {
                return e === rr || e === or
            }(a) ? (this.updateBids(e, (function(e) {
                return {
                    custParams: e.adserverTargeting
                }
            })), {
                tag: r.adServers.dfp.buildVideoUrl({
                    adUnit: yr(r.adUnits, "code", n),
                    url: this.params.tag
                }),
                custParams: r.getAdserverTargetingForAdUnitCode(n)
            }) : null
        }, t.appendPings = function(e, t, r) {
            var n, i = this.player,
                o = i.utils.parseXML(e),
                a = i.getPlugin("jwpsrv");
            if (null !== o && a && a.getTrackingPixelURLs) {
                for (var s = a.getTrackingPixelURLs(t, r), d = s.impression, u = s.error, c = o.querySelectorAll("InLine,Wrapper"), f = 0; f < c.length; f += 1) c[f].appendChild(mr(o, "Impression", d, {
                    id: r
                })), c[f].appendChild(mr(o, "Error", u));
                return (n = o).outerHTML || (new XMLSerializer).serializeToString(n)
            }
            return e
        }, t.updateBid = function(e, t, r) {
            void 0 === t && (t = {}), void 0 === r && (r = !1);
            var n = "function" == typeof t ? t(e) : t;
            n.result && void 0 === n.code && (n.code = gr[n.result]);
            var i = yr(this.bidders, "bidder", e.bidder);
            i ? Object(u.default)(i, r ? n : Object(u.default)({}, n, i)) : this.bidders.push(Object(u.default)({
                name: e.bidder,
                bidder: e.bidder,
                external: !0
            }, n))
        }, t.updateBids = function(e) {
            for (var t = this, r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
            e.forEach((function(e) {
                return t.updateBid.apply(t, [e].concat(n))
            }))
        }, t.updatePrebidConfig = function(e) {
            "MediaGrid" === e.name && (this.engine.bidderSettings[Wt.code].bidCpmAdjustment = function(t) {
                return t * (e.netBidPct || .7)
            })
        }, t.stop = function() {
            this._resolve()
        }, t.timeout = function() {}, e
    }();
    r.d(t, "pluginClass", (function() {
        return oi
    }));
    var oi = function(e, t) {
        void 0 === t && (t = {});
        var r = (t.settings || {}).buckets;
        r = Array.isArray(r) && r.length ? r : [{
            increment: Qt
        }], At.setConfig({
            bidderTimeout: 2e3,
			/////////////////////////////////////////////////
            cache: {
                url: "https://vpb-cache.jwplayer.com/cache"
            },
            debug: !1,
            priceGranularity: {
                buckets: hr(r)
            },
            consentManagement: {
                gdpr: {
                    allowAuctionWithoutConsent: !0,
                    cmpApi: "iab",
                    timeout: 1e3
                }
            }
        }), At.processQueue();
        var n = {};
        return {
            createNewBid: function(r, i) {
                var o = new ii(e, At, t, r, i);
                return n[o.id] = o, o
            },
            getBid: function(e) {
                return n[e]
            },
            getEngine: function() {
                return At
            }
        }
    };
    (window.jwplayerPluginJsonp || window.jwplayer().registerPlugin)("bidding", "8.1", oi)
}]);