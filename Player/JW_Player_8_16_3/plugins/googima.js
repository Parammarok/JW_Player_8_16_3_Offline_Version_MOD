! function() {
    function e(t) {
        return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(t)
    }

    function t(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }

    function a(e, t, a) {
        return t && i(e.prototype, t), a && i(e, a), e
    }

    function n(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }

    function r() {
        return (r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a])
            }
            return e
        }).apply(this, arguments)
    }

    function s(e) {
        return function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, i = new Array(e.length); t < e.length; t++) i[t] = e[t];
                return i
            }
        }(e) || function(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    var o, l = "googima",
        d = "TYPE_API",
        u = "TYPE_SCHEDULE",
        g = "viewable",
        c = "-1",
        h = "adCompanions",
        p = "adError",
        f = "adStarted",
        v = 4096,
        m = 1e3,
        y = "__jwpseg__",
        w = "instream",
        b = "article",
        A = (n(o = {}, [w], 1), n(o, ["banner"], 2), n(o, [b], 3), n(o, ["feed"], 4), n(o, ["floating"], 5), n(o, ["interstitial"], 5), n(o, ["slider"], 5), o),
        k = "inference",
        E = function(e) {
            var t = j("".concat(e, "Locator"));
            return null !== t && function(i, a, r, s) {
                var o = T();
                window.addEventListener("message", (function t(i) {
                    var a = i ? i.data : {};
                    if ("string" == typeof a) try {
                        a = JSON.parse(a)
                    } catch (e) {
                        a = {}
                    }
                    var n = "".concat(e, "Return");
                    a[n] && a[n].callId === o && (removeEventListener("message", t), r(a[n].returnValue, a[n].success))
                }), !1);
                var l = void 0 !== s ? "version" : "parameter",
                    d = n({}, ["".concat(e, "Call")], n({
                        command: i,
                        callId: o,
                        parameter: s
                    }, [l], a));
                t.postMessage(JSON.stringify(d), "*")
            }
        },
        P = new RegExp(/^[^/]*:\/\/\/?([^\/]*)/);

    function M(e) {
        var t = e.match(P);
        return t && t.length > 1 ? t[1] : ""
    }
    var j = function(e) {
            for (var t = window; t;) {
                try {
                    if (t.frames[e]) break
                } catch (e) {}
                t = t === window.top ? null : t.parent
            }
            return t
        },
        C = new RegExp(/^[^:\/?#]+:?\/\/[^\/?#]+/);
    var L = /^(https?:\/\/).*.(?:ampproject.org|bing-amp.com)\/(?:.\/)*(.*)\/amp.*$/;
    var _ = null,
        I = {
            gdprApplies: !0,
            consentData: ""
        },
        S = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
            return null === _ && (_ = new Promise((function(e) {
                var t = window.__tcfapi || E("__tcfapi");
                if (t) return t("getTCData", 2, (function(t, i) {
                    e(!1 !== i ? {
                        gdprApplies: t.gdprApplies,
                        consentData: t.tcString
                    } : null)
                }), null);
                var i = window.__cmp || E("__cmp");
                return i ? i("getConsentData", null, (function(t, i) {
                    e(!1 !== i ? {
                        gdprApplies: t.gdprApplies || t.isUserInEu,
                        consentData: t.consentData
                    } : null)
                })) : e({
                    gdprApplies: !1,
                    consentData: ""
                })
            })).then((function(e) {
                return e && (I = e), I
            }))), Promise.race([_, new Promise((function(t) {
                setTimeout(t, e, I)
            }))])
        },
        T = Date.now || function() {
            return (new Date).getTime()
        };

    function R(e) {
        var t = e.advertising;
        if (t && t.placement) {
            var i = t.placement.toLowerCase();
            if (A[i]) return A[i]
        }
        return A[t && t.outstream ? b : w]
    }

    function D() {
        var e, t, i = null !== document.referrer.match(C) ? (e = document.referrer, (t = e.match(L)) && t.length > 1 ? "".concat(t[1]).concat(t[2]) : e) : "";
        if (window.top !== window.self) {
            try {
                return {
                    url: window.top.location.href,
                    domain: window.top.document.domain,
                    referrer: i
                }
            } catch (e) {}
            return {
                url: i,
                domain: M(i),
                referrer: ""
            }
        }
        return {
            url: document.location.href,
            domain: document.domain,
            referrer: i
        }
    }

    function x(e, t) {
        if ("start" === e || "0%" === e) return "pre";
        if ("end" === e || "100%" === e) return "post";
        if ("string" == typeof e && ("pre" === e || "post" === e || e.indexOf("%") >= 0)) return e;
        var i = t.seconds(e);
        return "number" == typeof i && !isNaN(i) && i
    }

    function O(e, t) {
        var i = x(e, t);
        return "pre" === i ? 0 : "post" === i ? -1 : i
    }

    function B(e, t) {
        var i, a = e.getPlugin(k),
            n = t.jwpseg_client_side,
            r = t.jwpseg || [];
        if (!n || !n.length || !a) return r;
        try {
            i = a.predict(n, t)
        } catch (e) {
            return t.jwpseg || []
        }
        var o = Object.keys(i).filter((function(e) {
                return i[e]
            })),
            l = r.filter((function(e) {
                return -1 === n.indexOf(e)
            }));
        return [].concat(s(o), s(l))
    }

    function U(e, t) {
        if (e && e[t] && "function" == typeof e[t]) try {
            for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), n = 2; n < i; n++) a[n - 2] = arguments[n];
            return e[t].apply(e, a)
        } catch (e) {
            return null
        }
        return null
    }

    function q(e, t, i) {
        var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (!e) return Promise.resolve(e);
        var n = t.getPlaylistItem() || {},
            r = t.getConfig(),
            s = D(),
            o = B(t, n); - 1 !== e.indexOf(y) && (a.jwpseg = o);
        for (var l, d, u, g = e.replace("__random-number__", Math.random() * Math.pow(10, 18)).replace("__timestamp__", (new Date).getTime()).replace("__page-url__", encodeURIComponent(s.url)).replace("__referrer__", encodeURIComponent(s.referrer)).replace("__player-height__", t.getHeight() || r.height).replace("__player-width__", t.getWidth() || r.width).replace("__item-duration__", (l = t.getDuration(), d = 3, u = Math.pow(10, d), Math.round(l * u) / u)).replace(y, o).replace("__domain__", encodeURIComponent(s.domain)).replace("__placement__", R(r)).replace("__device-ua__", encodeURIComponent(navigator.userAgent)), c = null, h = /__item-([\w-]+?)(-list)?__/g, p = g = i.companiondiv && i.companiondiv.id ? g.replace("__companion-div__", i.companiondiv.id) : g.replace("__companion-div__", ""); null !== (c = h.exec(p));) {
            var f = c[0],
                w = c[1],
                b = "";
            if (n.hasOwnProperty(w) && "string" == typeof n[w]) {
                b = n[w];
                var A = i.truncateMacros ? m : v;
                b.length > A && (b = b.substring(0, A));
                var k = c[2] ? "," : null;
                b = b.split(k).map(encodeURIComponent)
            }
            g = g.replace(f, b)
        }
        if (n.title && -1 === g.indexOf("vid_t=")) {
            var E = n.title.substring(0, 100).replace(/[^\x00-\x7F]/g, "");
            g += function(e) {
                return -1 !== e.indexOf("?") ? "&" : "?"
            }(g) + "vid_t=" + encodeURIComponent(E)
        }
        return -1 !== g.indexOf("__gdpr__") || -1 !== g.indexOf("__gdpr_consent__") ? S().then((function(e) {
            var t = e.gdprApplies,
                i = e.consentData;
            return g.replace("__gdpr__", t ? 1 : 0).replace("__gdpr_consent__", i)
        })).catch((function() {
            return g
        })) : Promise.resolve(g)
    }

    function V(e, t, i, a) {
        var n = z(e, i, a),
            s = t.getVastErrorCode ? t.getVastErrorCode() : t.code,
            o = t.getErrorCode ? t.getErrorCode() : t.adErrorCode;
        return o = o < 1e4 ? o + 2e4 : o || 60900, r(n, {
            message: "Ad Error: " + (t.getMessage ? t.getMessage() : t.message),
            code: s >= 100 && s <= 1008 ? s : 900,
            adErrorCode: o
        }), e && (20402 === o ? n.timeout = e.options.loadVideoTimeout : 21009 === o ? n.timeout = e.options.vastLoadTimeout : 60004 === o && (n.timeout = e.options.requestTimeout)), void 0 !== t.id && (n.id = t.id), void 0 !== t.placement && (n.placement = t.placement), t.getInnerError && (n.sourceError = t.getInnerError()), void 0 !== t.tag && (n.tag = t.tag), n
    }

    function z(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            a = {
                client: l
            },
            n = e && !e.destroyed();
        if (n) {
            var s = e.player;
            r(a, {
                placement: R(s.getConfig()),
                viewable: s.getViewable()
            }), t && (a.adposition = N(s))
        }
        i.jwpseg && (a.jwpseg = i.jwpseg);
        var o = U(t, "getAdPodInfo");
        if (o) {
            var d = U(o, "getTotalAds");
            d > 1 && r(a, {
                sequence: U(o, "getAdPosition"),
                podcount: d
            });
            var u = U(o, "getTimeOffset");
            0 === u ? a.adposition = "pre" : -1 === u && (a.adposition = "post")
        }
        var g = n ? e.adsLoaderManager : i.loader;
        if (g) {
            var c = o ? U(o, "getTimeOffset") : void 0 !== i.offset && i.offset || g.getTimeoffsetFromPosition_();
            r(a, {
                adBreakId: g.getAdBreakId(c),
                adPlayId: g.getAdPlayId(c, o ? U(o, "getAdPosition") : void 0),
                id: g.getAdBreakId(c)
            });
            var h = g.getBid(c);
            if (h && r(a, h.getEventObject()), t) {
                var p = a.mediationLayerAdServer;
                if ("dfp" === p || "jwpdfp" === p) - 1 !== (t.getWrapperAdSystems() || []).concat(t.getAdSystem()).indexOf("SpotXJW") && a.bidders.forEach((function(e) {
                    e.winner = "SpotX" === e.name
                }));
                var f = g.userRequestContext;
                r(a, {
                    adposition: f && f.adPosition || a.adposition,
                    tag: g.getTag(t),
                    ima: {
                        ad: t,
                        userRequestContext: f
                    }
                })
            }
        }
        if (t) {
            r(a, {
                adtitle: t.getTitle(),
                adsystem: t.getAdSystem(),
                creativetype: t.getContentType(),
                duration: t.getDuration(),
                linear: t.isLinear() ? "linear" : "nonlinear",
                description: t.getDescription(),
                creativeAdId: t.getCreativeAdId(),
                adId: t.getAdId(),
                universalAdId: t.getUniversalAdIds().map((function(e) {
                    return {
                        universalAdIdRegistry: e.g,
                        universalAdIdValue: e.h
                    }
                })),
                advertiser: t.getAdvertiserName(),
                dealId: t.getDealId()
            });
            var v = t.getMediaUrl();
            v && (a.mediaFile = {
                file: v
            })
        }
        return void 0 !== i.offset && r(a, {
            adposition: a.adposition || i.offset,
            offset: i.offset
        }), a
    }

    function N(e) {
        return e.isBeforePlay() || 0 === e.getPosition() ? "pre" : e.isBeforeComplete() || e.getPosition() === e.getDuration() ? "post" : "mid"
    }

    function W(e, t) {
        var i, a, n, r, s, o = x(e, t);
        return o ? "number" != typeof o || isNaN(o) ? o : (i = parseInt(1e3 * o, 10), a = Math.floor(i) % 1e3, n = Math.floor(i / 1e3) % 60, r = Math.floor(i / 6e4) % 60, (s = (s = Math.floor(i / 36e5) % 24) < 10 ? "0" + s : s) + ":" + (r = r < 10 ? "0" + r : r) + ":" + (n = n < 10 ? "0" + n : n) + "." + (a = ("000" + a).slice(-3))) : "pre"
    }

    function J(e, t, i) {
        if (!i) return e;
        var a = e.indexOf("?") >= 0 ? "&" : "?",
            n = e.indexOf("cust_params="),
            r = "cust_params=".length,
            s = "",
            o = "";
        if (t.foreach(i, (function(e, t) {
                s = "".concat(s).concat(o).concat(e, "=").concat(t), o = "&"
            })), s = encodeURIComponent(s), n >= 0) {
            var l = e.substr(0, n + r),
                d = e.substr(n + r);
            return "".concat(l).concat(s, "%26").concat(d)
        }
        return "".concat(e).concat(a, "cust_params=").concat(s)
    }
    var G = function() {
            function e(i, a, n) {
                t(this, e), this.player = i, this.loader = a, this.options = n
            }
            return a(e, [{
                key: "getAdsResponse",
                value: function(e) {
                    var t = this,
                        i = document.implementation.createDocument("http://www.iab.net/videosuite/vmap", "vmap:VMAP", null),
                        a = i.documentElement;
                    return a.setAttribute("version", "1.0"), Object.keys(e).forEach((function(n) {
                        var r, s = e[n];
                        if (s.adm) {
                            if (null === function(e, t, i) {
                                    var a = i.parseXML(t);
                                    return a ? e.appendChild(a.documentElement) : null
                                }(r = i.createElement("vmap:VASTAdData"), s.adm, t.player.utils)) return void t.player.trigger(p, t._getParserErrorObject(s))
                        } else(r = i.createElement("vmap:AdTagURI")).appendChild(i.createCDATASection(s.tag));
                        var o = a.appendChild(i.createElement("vmap:AdBreak"));
                        o.setAttribute("breakId", n), o.setAttribute("breakType", s.type);
                        var l = s.offset.replace("pre", "start").replace("post", "end");
                        o.setAttribute("timeOffset", l);
                        var d = o.appendChild(i.createElement("vmap:AdSource"));
                        d.setAttribute("allowMultipleAds", "true"), d.setAttribute("followRedirects", "true"), d.setAttribute("id", "".concat(n, "-ad-1")), d.appendChild(r)
                    })), a.outerHTML || (new XMLSerializer).serializeToString(a)
                }
            }, {
                key: "normalize",
                value: function(e) {
                    var t = this,
                        i = this.player.utils;
                    "string" == typeof e && (e = {
                        0: {
                            tag: e
                        }
                    });
                    var a = Object.keys(e),
                        n = a.map((function(a) {
                            var n = e[a],
                                s = n.ad || n;
                            if (s.tag) return q(J(s.tag, i, s.custParams), t.player, r({}, t.options, s.custParams), s)
                        }));
                    return Promise.all(n).then((function(t) {
                        return a.reduce((function(a, n, r) {
                            var s = e[n],
                                o = s.ad || s,
                                l = t[r];
                            return a[n] = {
                                offset: W(o.offset || o.position || s.offset || "", i),
                                adm: o.adm,
                                tag: l,
                                type: o.type || s.type || "linear,nonlinear",
                                jwpseg: s.jwpseg
                            }, a
                        }), {})
                    }))
                }
            }, {
                key: "getTagMap",
                value: function(e, t) {
                    var i = this.player,
                        a = i.utils;
                    return Object.keys(e).reduce((function(n, s) {
                        var o = e[s],
                            l = x(o.offset, a);
                        return i._.isString(l) && (l = parseFloat(l.replace("pre", "0").replace("post", "-1"))), n[l] = r({
                            offset: l,
                            adm: o.adm,
                            tag: o.tag,
                            jwpseg: o.jwpseg
                        }, t[l]), n
                    }), {})
                }
            }, {
                key: "_getParserErrorObject",
                value: function(e) {
                    return V(null, {
                        message: "XML parsing error",
                        code: 100,
                        adErrorCode: 20100,
                        placement: R(this.player.getConfig()),
                        tag: e.adm
                    }, null, {
                        loader: this.loader,
                        offset: e.offset
                    })
                }
            }]), e
        }(),
        H = {
            adPosition: "",
            autoplayadsmuted: !1,
            companiondiv: null,
            companionResourceType: "",
            debug: !1,
            enablePreloading: !1,
            loadVideoTimeout: 15e3,
            locale: "",
            maxRedirects: -1,
            preloadAds: !1,
            requestTimeout: 1e4,
            truncateMacros: !0,
            vastLoadTimeout: 1e4,
            vpaidcontrols: !1,
            vpaidmode: "insecure"
        };

    function F(e) {
        if ("true" === e) return !0;
        if ("false" === e) return !1;
        var t = parseFloat(e);
        return isNaN(t) ? e : t
    }
    var K = function() {
            function i(a, n) {
                for (var r in t(this, i), this.config = a, this.utils = n, this.bidsResponse = {}, H)
                    if (H.hasOwnProperty(r)) {
                        var s = a[r],
                            o = H[r],
                            l = e(o);
                        if (void 0 !== s) {
                            if ("boolean" !== l && "number" !== l || (s = F(s)), e(s) !== l) throw new Error("invalid parameter: " + r + " should be a " + l);
                            this[r] = s
                        } else this[r] = o
                    }
            }
            return a(i, [{
                key: "getSingleTagPrerollBlock",
                value: function() {
                    var e = this.getConfigSchedule(),
                        t = this.singleTagBidsResponse;
                    if ("string" == typeof e) {
                        if (!t) return e;
                        var i = t.adm,
                            a = t.tag,
                            n = t.jwpseg,
                            r = t.custParams;
                        return [{
                            adm: i,
                            tag: i || a ? a : J(e, this.utils, r),
                            jwpseg: n
                        }]
                    }
                    return null
                }
            }, {
                key: "addBidsResponse",
                value: function(e, t) {
                    t ? this.bidsResponse[t] = e : this.singleTagBidsResponse = e
                }
            }, {
                key: "resetBidsResponse",
                value: function() {
                    this.bidsResponse = {}, this.singleTagBidsResponse = null
                }
            }, {
                key: "getSchedule",
                value: function() {
                    var e = this,
                        t = this.getConfigSchedule();
                    if (!t) return t;
                    var i = this.utils.extend({}, t),
                        a = this.getSingleTagPrerollBlock();
                    return a || Object.keys(this.bidsResponse).reduce((function(t, i) {
                        var a = t[i],
                            n = e.bidsResponse[i];
                        return a && n && (t[i] = r({}, a, {
                            adm: n.adm,
                            tag: n.adm || n.tag ? n.tag : a.tag,
                            custParams: r({}, a.custParams, n.tag ? {} : n.custParams),
                            jwpseg: n.jwpseg
                        })), t
                    }), i)
                }
            }, {
                key: "getConfigSchedule",
                value: function() {
                    var e = this.config;
                    return this.adschedule || e.tag || e.schedule || e.ad
                }
            }, {
                key: "getAdRules",
                value: function() {
                    var e = this.config.rules || {},
                        t = parseInt(e.frequency, 10);
                    return {
                        startOn: e.startOn || 1,
                        frequency: isNaN(t) ? 1 : t
                    }
                }
            }, {
                key: "setLocalizationOptions",
                value: function(e) {
                    var t = e.admessage,
                        i = e.cuetext,
                        a = e.podmessage,
                        n = e.loadingAd;
                    this.admessage = t, this.cuetext = i, this.podmessage = a, this.loadingAd = n
                }
            }]), i
        }(),
        X = function() {
            function e(i, a, n) {
                t(this, e), n.addClass(i, "jw-plugin-googima");
                var r = document.createElement("div");
                r.id = a + "_ad", r.className = "jw-ads-view", this.visible = !1, this.utils = n, this.div = i, this.adDiv = r, i.appendChild(r)
            }
            return a(e, [{
                key: "resizeNonLinear",
                value: function(e) {
                    this.resize(!1, e)
                }
            }, {
                key: "resizeLinear",
                value: function() {
                    this.resize(!0)
                }
            }, {
                key: "resize",
                value: function(e, t) {
                    var i = this.utils;
                    i.toggleClass(this.div, "jw-ad-non-linear", !e), i.toggleClass(this.div, "jw-ad-linear", e), i.style(this.div, {
                        height: t ? t + "px" : ""
                    })
                }
            }, {
                key: "getAdDiv",
                value: function() {
                    return this.adDiv
                }
            }, {
                key: "adSetup",
                value: function() {
                    this.visible = !0, this.utils.addClass(this.div, "jw-ad-instream"), this.resize(!0)
                }
            }, {
                key: "adTakeDown",
                value: function() {
                    this.visible = !1, this.utils.removeClass(this.div, "jw-ad-instream"), this.resize(!0)
                }
            }]), e
        }(),
        Q = null;

    function $(e) {
        if (Q) return Q;
        if (window.google && google.ima && google.ima.AdDisplayContainer) return Q = Promise.resolve();
        var t = ["//", "imasdk.googleapis.com/js/sdkloader/ima3.js"];
        "file:" === document.location.protocol && t.unshift("https:");
        var i = new(0, e.scriptloader)(t.join(""));
        return Q = i.load()
    }
    var Y = {};
    var Z = function() {
            function e(i, a, n) {
                t(this, e), i.extend(this, a), this.vol = 0, this.imaProxy = null, this.view = n
            }
            return a(e, [{
                key: "setProxy",
                value: function(e) {
                    this.imaProxy = e, "boolean" == typeof this.muted && this.mute(this.muted)
                }
            }, {
                key: "attachMedia",
                value: function() {}
            }, {
                key: "detachMedia",
                value: function() {}
            }, {
                key: "mute",
                value: function(e) {
                    this.muted = e, this.imaProxy && (e ? this.imaProxy.setVolume(0) : this.vol && this.imaProxy.setVolume(this.vol)), this.muteAllAdContainerVideo(e)
                }
            }, {
                key: "muteAllAdContainerVideo",
                value: function(e) {
                    for (var t = this.view.getAdDiv().getElementsByTagName("video"), i = 0; i < t.length; i++) t[i].muted = e
                }
            }, {
                key: "volume",
                value: function(e) {
                    this.vol = e / 100, this.imaProxy && this.imaProxy.setVolume(this.vol)
                }
            }]), e
        }(),
        ee = function() {
            return null
        },
        te = function() {
            function e(i, a, n, r, s, o, l) {
                t(this, e), n.utils.extend(this, n.Events), this.item = i, this.options = a, this.player = n, this.env = n.getEnvironment(), this.utils = n.utils, this.instreamProvider = r, this.view = s, this.initAdsManagerPromise = null, this.blockingInstreamPlayer = null, this.currentAd = null, this.bidding = n.getPlugin("bidding"), this.bids = [], this.bidsPromises = [], this.timeoutAdStart = -1, this.progressIntervalId = -1, this.viewablePlayedTime = 0, this.lastPosition = null, this.adViewableImpressionHandler = ee, this.fullscreenIcon = n.getContainer().querySelector(".jw-icon-fullscreen"), this.adsLoaderManager = o, this.playbackProxy = {
                    currentTime: 0,
                    duration: 0
                }, this.video = l, this.paused = !1, this.hasPreroll = !0, this.reason = null, this._qoe = new n.utils.Timer, this.debugConsoleLog = ee, a.debug && (this.debugConsoleLog = function() {
                    var e;
                    (e = console).log.apply(e, arguments)
                })
            }
            return a(e, [{
                key: "startBid",
                value: function(e, t, i) {
                    var a = this,
                        n = this.player,
                        r = t.offset,
                        s = n.getConfig(),
                        o = B(n, this.item),
                        l = this.bidding.createNewBid({
                            id: this.adsLoaderManager.getAdPlayId(r),
                            tag: t.tag,
                            offset: r,
                            placement: R(s),
                            jwpseg: o
                        }, {
                            getURLParts: D
                        });
                    this.bids.push(l);
                    var d = Promise.resolve().then((function() {
                        return a.adsLoaderManager.setBid(r, l), a.trigger("adBidRequest", z(a, null, {
                            jwpseg: o,
                            offset: r
                        })), l.init(), l.start().then((function(t) {
                            var n = t.result;
                            if (a.destroyed()) return null;
                            n && (n.jwpseg = o), e.addBidsResponse(n, i), a.trigger("adBidResponse", z(a, null, {
                                offset: r
                            }))
                        }))
                    }));
                    this.bidsPromises.push(d)
                }
            }, {
                key: "init",
                value: function(e, t) {
                    var i = this,
                        a = t.config.bids;
                    if (a)
                        if (this.bidding) {
                            var n = t.getSchedule();
                            if ("string" == typeof n) this.startBid(t, {
                                tag: n,
                                offset: "pre"
                            });
                            else {
                                var r = parseInt(a.bidOnBreaks);
                                r = r > 0 ? r : 1 / 0, Object.keys(n).slice(0, r).forEach((function(e) {
                                    i.startBid(t, n[e], e)
                                }))
                            }
                        } else Promise.resolve().then((function() {
                            if (i.destroyed()) return null;
                            var e = V(i, {
                                message: "bidding plugin failed to load",
                                adErrorCode: 60008
                            });
                            i.trigger(p, e)
                        })).catch(ee);
                    var s = this.adsLoaderManager;
                    return this.initAdsManagerPromise = $().then((function() {
                        return i.destroyed() ? null : (i.debugConsoleLog("[JW DEBUG] Open adsLoaderManager"), s.open(e, t, i.video))
                    })).then((function(e) {
                        if (i.destroyed()) return null;
                        var a = s.getAdsManager(e, i.playbackProxy, i.options);
                        i.instreamProvider.setProxy(a), s.bindEvents({
                            LOADED: i.adLoaded.bind(i),
                            AD_ERROR: i.adError.bind(i),
                            CONTENT_PAUSE_REQUESTED: i.pauseRequested.bind(i),
                            CONTENT_RESUME_REQUESTED: i.resumeRequested.bind(i),
                            LOG: i.adLog.bind(i),
                            STARTED: i.adStarted.bind(i),
                            IMPRESSION: i.adImpression.bind(i),
                            LINEAR_CHANGED: i.resize.bind(i),
                            CLICK: i.adClick.bind(i),
                            PAUSED: i.adPaused.bind(i),
                            RESUMED: i.adResumed.bind(i),
                            SKIPPED: i.adSkipped.bind(i),
                            USER_CLOSE: i.adUserClose.bind(i),
                            ALL_ADS_COMPLETED: i.allAdsCompleted.bind(i)
                        });
                        var n = a.getCuePoints(),
                            r = -1 !== n.indexOf(0);
                        if (!t.preloadAds || !r) {
                            var o = i.player.getSafeRegion(!1),
                                l = o.width,
                                d = o.height,
                                u = i.getViewMode();
                            i.debugConsoleLog("[JW DEBUG] adsManager init with", l, d, u), s.init(l, d, u)
                        }
                        if (n.length) {
                            var g = n.filter((function(e) {
                                return e > 0
                            })).map((function(e) {
                                return {
                                    begin: e,
                                    text: i.options.cuetext,
                                    cueType: "ads"
                                }
                            }));
                            i.player.addCues(g)
                        }
                        var c = "string" == typeof s.schedule;
                        return i.hasPreroll = c && 0 === n.length || r, a
                    })).catch((function(e) {
                        throw i.asyncError && i.asyncError(e), e
                    })), this.initAdsManagerPromise
                }
            }, {
                key: "getViewMode",
                value: function() {
                    var e = google.ima.ViewMode;
                    return this.player.getFullscreen() ? e.FULLSCREEN : e.NORMAL
                }
            }, {
                key: "prepareToPlayAd",
                value: function(e) {
                    if (!this.destroyed())
                        if (this.blockingInstreamPlayer) {
                            var t = e ? "" : this.options.loadingAd;
                            this.blockingInstreamPlayer.setText(t)
                        } else clearTimeout(this.timeoutAdStart), this.startBlocking(e), this.muteInstreamProvider()
                }
            }, {
                key: "requestAds",
                value: function(e, t) {
                    var i = this,
                        a = this.bidsPromises.concat($());
                    Promise.all(a).then((function() {
                        if (!i.destroyed()) return null === i.adsLoaderManager.adsRequest ? (i.debugConsoleLog("[JW DEBUG] Request ads to IMA SDK"), i.adsLoaderManager.requestAds(e, t, i.options)) : void 0
                    })).catch((function(e) {
                        i.asyncError && i.asyncError(e)
                    }))
                }
            }, {
                key: "muteInstreamProvider",
                value: function() {
                    var e = this.video.muted || this.player.getMute();
                    this.debugConsoleLog("[JW DEBUG] Setting mute on instreamProvider", e), this.instreamProvider.mute(e)
                }
            }, {
                key: "exitFullscreenOnInlineIOS",
                value: function() {
                    if (this.env.OS.iOS && !(this.env.Browser.version.major < 10)) {
                        var e = this.player.getContainer();
                        e.requestFullscreen || e.webkitRequestFullscreen || (this.debugConsoleLog("[JW DEBUG] Exiting fullscreen mode on iOS 10 or 11"), this.player.setFullscreen(!1), this.utils.style(this.fullscreenIcon, {
                            display: "none"
                        }))
                    }
                }
            }, {
                key: "startBlocking",
                value: function(e) {
                    var t = this;
                    if (!this.blockingInstreamPlayer && !this.destroyed()) {
                        this.debugConsoleLog("[JW DEBUG] JW Player startBlocking"), this.exitFullscreenOnInlineIOS(), this._qoe.tick("adLoading"), this.utils.addClass(this.player.getContainer(), "jw-flag-ads-googleima"), this.blockingInstreamPlayer = this.player.createInstream().init();
                        var i = e ? "" : this.options.loadingAd;
                        this.blockingInstreamPlayer.setText(i), this.blockingInstreamPlayer.applyProviderListeners(this.instreamProvider), this.view.adSetup(), clearTimeout(this.timeoutAdStart), this.timeoutAdStart = setTimeout((function() {
                            t.bids.forEach((function(e) {
                                return e.stop()
                            })), t.debugConsoleLog("[JW DEBUG] Ad request timeout"), t.destroyed() || (t.asyncError = null, t.handleAdError({
                                message: "Ad Request timeout after ".concat(t.options.requestTimeout, " milliseconds"),
                                getErrorCode: function() {
                                    return 60004
                                }
                            }), t.asyncDiscardAdBreak())
                        }), this.options.requestTimeout)
                    }
                }
            }, {
                key: "stopBlocking",
                value: function() {
                    this.destroyed() || (this.debugConsoleLog("[JW DEBUG] JW Player stopBlocking"), this.player.off("viewable", null, this), clearTimeout(this.timeoutAdStart), this.utils.style(this.fullscreenIcon, {
                        display: ""
                    }), this.utils.removeClass(this.player.getContainer(), ["jw-flag-ads-vpaid", "jw-flag-ads-vpaid-controls", "jw-flag-ads-googleima"]), this.blockingInstreamPlayer && (this.instreamProvider.off(), this.blockingInstreamPlayer.destroy(), this.blockingInstreamPlayer = null))
                }
            }, {
                key: "pauseRequested",
                value: function(e) {
                    var t = this;
                    this.prepareToPlayAd();
                    var i = e && e.getAd();
                    this.blockingInstreamPlayer.on("destroyed", (function() {
                        t.player.trigger("adBreakEnd", z(t, i))
                    }));
                    var a = z(this, i);
                    this.player.trigger("adBreakStart", a), this.player.trigger("adItem", a)
                }
            }, {
                key: "resumeRequested",
                value: function() {
                    this.debugConsoleLog("[JW DEBUG] ResumeRequest from IMA SDK"), this.currentAd && this.currentAd.isLinear() && this.finishAd(), this.blockingInstreamPlayer && this.view.adTakeDown(), this.stopBlocking()
                }
            }, {
                key: "finishAd",
                value: function() {
                    this.currentAd && (clearInterval(this.progressIntervalId), this.viewablePlayedTime = 0, this.currentAd = null)
                }
            }, {
                key: "discardAdBreak",
                value: function(e) {
                    !e && this.adsLoaderManager && (e = this.adsLoaderManager.adsManager), !this.destroyed() && e && (0 === e.getCuePoints().length ? this.destroy() : (e.discardAdBreak(), e.stop()))
                }
            }, {
                key: "asyncDiscardAdBreak",
                value: function() {
                    var e = this;
                    this.initAdsManagerPromise && this.initAdsManagerPromise.then((function(t) {
                        return e.discardAdBreak(t)
                    })).catch(ee)
                }
            }, {
                key: "pause",
                value: function(e) {
                    var t = e.reason;
                    if (!this.destroyed()) {
                        var i = this.adsLoaderManager.adsManager;
                        i && (this.viewablePlayedTime = 0, this.debugConsoleLog("[JW DEBUG] JW Player pause ad"), this.reason = t || "external", i.pause())
                    }
                }
            }, {
                key: "resume",
                value: function(e) {
                    var t = e.reason;
                    if (!this.destroyed()) {
                        var i = this.adsLoaderManager.adsManager;
                        i && (this.debugConsoleLog("[JW DEBUG] JW Player resume ad"), this.reason = t || "external", i.resume())
                    }
                }
            }, {
                key: "beforePlay",
                value: function(e) {
                    var t = this;
                    if (this.initAdsManagerPromise) {
                        this.reason = e && e.playReason ? e.playReason : "external", this.bids.forEach((function(e) {
                            return e.timeout()
                        })), this.player.off("beforePlay", null, this);
                        var i = !!e;
                        this.hasPreroll && this.prepareToPlayAd(i), this.adsLoaderManager.initializeDisplay({
                            restrict: !0
                        }), this._qoe.tick("adBeforePlay"), this.initAdsManagerPromise.then((function() {
                            if (!t.destroyed()) {
                                var e = t.adsLoaderManager;
                                if (!e.initialized) {
                                    var i = t.player.getSafeRegion(!1),
                                        a = i.width,
                                        n = i.height,
                                        r = t.getViewMode();
                                    t.debugConsoleLog("[JW DEBUG] adsManager init with", a, n, r), e.init(a, n, r)
                                }
                                t.debugConsoleLog("[JW DEBUG] Start adsManager"), e.start(), !t.hasPreroll && t.blockingInstreamPlayer && (t.debugConsoleLog("[JW DEBUG] Stop blocking since there is no preroll"), t.view.adTakeDown(), t.stopBlocking())
                            }
                        })).catch(ee)
                    }
                }
            }, {
                key: "beforeComplete",
                value: function() {
                    var e = this.adsLoaderManager.adsManager;
                    e && e.getCuePoints().indexOf(-1) > -1 && this.prepareToPlayAd(), this.adsLoaderManager.unbindEvents(["CONTENT_RESUME_REQUESTED"]), this.playbackProxy.currentTime = this.playbackProxy.duration, this.debugConsoleLog("[JW DEBUG] Call contentComplete on IMA SDK"), this.adsLoaderManager.contentComplete()
                }
            }, {
                key: "time",
                value: function(e) {
                    this.playbackProxy.currentTime = e.position, e.duration >= e.position ? this.playbackProxy.duration = e.duration : this.playbackProxy.duration = 1 / 0
                }
            }, {
                key: "resize",
                value: function() {
                    var e = this.currentAd,
                        t = this.adsLoaderManager.adsManager;
                    if (t) {
                        var i = e && !e.isLinear(),
                            a = this.player.getSafeRegion(i);
                        if (i) {
                            var n = e.getHeight();
                            n = this.player.getFullscreen() ? a.height / 2 : Math.max(100, n + 10), this.debugConsoleLog("[JW DEBUG] Resize adsManager", a.width, n, this.getViewMode()), t.resize(a.width, n, this.getViewMode()), this.view.resizeNonLinear(n)
                        } else this.debugConsoleLog("[JW DEBUG] Resize adsManager", a.width, a.height, this.getViewMode()), t.resize(a.width, a.height, this.getViewMode()), this.view.resizeLinear()
                    }
                }
            }, {
                key: "setState",
                value: function(e, t, i) {
                    if (e.isLinear()) {
                        var a = z(this, e);
                        if (a.newstate = t, a.oldstate = i, null !== this.reason) a["playing" === t ? "playReason" : "pauseReason"] = this.reason, this.reason = null;
                        this.instreamProvider.trigger("state", a)
                    }
                }
            }, {
                key: "progressInterval",
                value: function(e, t) {
                    var i = this;
                    if (clearInterval(this.progressIntervalId), t) {
                        var a = e.getAdId(),
                            n = -1,
                            r = this.options.admessage || "",
                            s = this.options.podmessage || "",
                            o = new RegExp("__AD_POD_CURRENT__", "g"),
                            l = new RegExp("__AD_POD_LENGTH__", "g");
                        this.progressIntervalId = setInterval((function() {
                            if (i.currentAd && i.currentAd.getAdId() === a) {
                                var e = t.getRemainingTime();
                                if (!(isNaN(e) || e <= 0) && n !== e) {
                                    n = e;
                                    var d = i.currentAd.getDuration(),
                                        u = d - e,
                                        g = Math.round(d - u);
                                    if (i.blockingInstreamPlayer) {
                                        var c = r.replace(/(\b)xx(s?\b)/g, "$1".concat(g, "$2")),
                                            h = U(i.currentAd, "getAdPodInfo");
                                        if (h) {
                                            var p = U(h, "getTotalAds");
                                            if (p > 1) {
                                                var f = U(h, "getAdPosition");
                                                c = s.replace(o, f).replace(l, p) + "  " + c
                                            }
                                        }
                                        i.blockingInstreamPlayer.setText(c), i.instreamProvider.trigger("time", {
                                            duration: d,
                                            position: u
                                        })
                                    }
                                    if (d > 0) {
                                        var v = z(i, i.currentAd);
                                        v.position = u, v.duration = d, i.adViewableImpressionHandler(v), i.trigger("adTime", v)
                                    }
                                }
                            } else clearInterval(i.progressIntervalId)
                        }), 250)
                    }
                }
            }, {
                key: "adLoaded",
                value: function(e) {
                    var t = e.getAd();
                    this.trigger("adRequest", z(this, t, {
                        jwpseg: this.adsLoaderManager.getJwpSeg(t)
                    }))
                }
            }, {
                key: "adStarted",
                value: function(e) {
                    this.paused = !1, this.currentAd = e.getAd(), this.trigger(f, z(this, this.currentAd))
                }
            }, {
                key: "adImpression",
                value: function(e) {
                    var t = this;
                    this.view.adSetup();
                    var i = e.getAd(),
                        a = i.isLinear(),
                        n = a && (i.getContentType().indexOf("image") >= 0 || -1 === i.getDuration()),
                        r = this.isVpaidAd(i),
                        s = a && r && this.options.vpaidcontrols;
                    this.currentAd = i, this.blockingInstreamPlayer && this.blockingInstreamPlayer.setSkipOffset(i.getSkipTimeOffset()), this.adsLoaderManager.bindEvents({
                        COMPLETE: this.adComplete.bind(this)
                    }), r && this.env.OS.mobile && this.options.autoplayadsmuted && this.adsLoaderManager.bindEvents({
                        VOLUME_CHANGED: function() {
                            t.adsLoaderManager.unbindEvents(["VOLUME_CHANGED"]), t.player.setMute(0 === t.adsLoaderManager.adsManager.getVolume())
                        }
                    }), n ? this.startBlocking() : a || this.stopBlocking(), this.utils.toggleClass(this.player.getContainer(), "jw-flag-ads-vpaid", a && (n || r)), this.utils.toggleClass(this.player.getContainer(), "jw-flag-ads-vpaid-controls", s), this.resize(), this.muteInstreamProvider(), clearTimeout(this.timeoutAdStart);
                    var o = this.adsLoaderManager.adsManager;
                    this.progressInterval(i, o);
                    var l = z(this, i),
                        d = void 0 === l.podcount || 1 === l.sequence;
                    "pre" === l.adposition && d && (this._qoe.tick("adImpression"), l.timeLoading = this._qoe.between("adBeforePlay", "adImpression")), a && !d && this.trigger("adItem", l), this.trigger("adImpression", l), this.setupViewableListener(), this.setState(i, "playing", "buffering")
                }
            }, {
                key: "setupViewableListener",
                value: function() {
                    this.player.off("viewable", this.viewableHandler, this), this.player.on("viewable", this.viewableHandler, this), this.viewableHandler({
                        viewable: this.player.getViewable()
                    })
                }
            }, {
                key: "adViewableHandler",
                value: function(e) {
                    var t = e.position;
                    null === this.lastPosition && (this.lastPosition = t);
                    var i = t - this.lastPosition;
                    this.lastPosition = t, i = Math.min(Math.max(0, i), 4), this.viewablePlayedTime += i, this.viewablePlayedTime >= 2 && (this.player.off("viewable", this.viewableHandler, this), this.adViewableImpressionHandler = ee, this.trigger("adViewableImpression", z(this, this.currentAd)))
                }
            }, {
                key: "viewableHandler",
                value: function(e) {
                    e.viewable ? (this.viewablePlayedTime = 0, this.lastPosition = null, this.adViewableImpressionHandler = this.adViewableHandler) : this.adViewableImpressionHandler = ee
                }
            }, {
                key: "adComplete",
                value: function(e) {
                    this.finishAd(), this.trigger("adComplete", z(this, e.getAd())), this.adsLoaderManager.unbindEvents(["VOLUME_CHANGED"])
                }
            }, {
                key: "adClick",
                value: function(e) {
                    var t = this.adsLoaderManager.adsManager,
                        i = e.getAd();
                    this.reason = "clickthrough", this.isVpaidAd(i) || (this.debugConsoleLog("[JW DEBUG] Ad paused due to ad click"), t.pause()), this.trigger("adClick", z(this, i))
                }
            }, {
                key: "adPaused",
                value: function(e) {
                    if (!this.paused) {
                        this.paused = !0;
                        var t = e.getAd();
                        null === this.reason && this.isVpaidAd(t) && (this.reason = "external"), this.setState(t, "paused")
                    }
                }
            }, {
                key: "adResumed",
                value: function(e) {
                    if (this.paused) {
                        this.paused = !1;
                        var t = e.getAd();
                        null === this.reason && this.isVpaidAd(t) && (this.reason = "external"), this.setState(t, "playing")
                    }
                }
            }, {
                key: "adSkipped",
                value: function(e) {
                    this.debugConsoleLog("[JW DEBUG] AdSkipped"), this.adsLoaderManager.unbindEvents(["COMPLETE", "VOLUME_CHANGED"]), this.finishAd(), this.trigger("adSkipped", z(this, e.getAd()))
                }
            }, {
                key: "adUserClose",
                value: function(e) {
                    this.debugConsoleLog("[JW DEBUG] AdUserClose"), this.currentAd && this.currentAd.isLinear() && -1 === this.currentAd.getDuration() ? this.adSkipped(e) : (this.adsLoaderManager.unbindEvents(["COMPLETE", "VOLUME_CHANGED"]), this.finishAd())
                }
            }, {
                key: "allAdsCompleted",
                value: function() {
                    this.resumeRequested(), this.view.adTakeDown(), this.stopAdsManager()
                }
            }, {
                key: "stopAdsManager",
                value: function() {
                    var e = this;
                    this.initAdsManagerPromise.then((function(t) {
                        e.destroyed() || (e.debugConsoleLog("[JW DEBUG] Stop IMA SDK adsManager"), t.stop(), t.destroy(), e.initAdsManagerPromise = null, e.bids = [], e.bidsPromises = [])
                    })).catch(ee)
                }
            }, {
                key: "adLog",
                value: function(e) {
                    this.debugConsoleLog("[JW DEBUG]", e.type, e);
                    var t = U(e, "getAdData"),
                        i = t && t.adError;
                    if (i && 402 === i.getVastErrorCode()) this.handleAdError(i, e);
                    else if (i) {
                        var a = U(e, "getAd");
                        this.trigger(p, V(this, i, a, {
                            jwpseg: this.adsLoaderManager.getJwpSeg(a)
                        }))
                    }
                }
            }, {
                key: "adError",
                value: function(e) {
                    this.handleAdError(e.getError(), e)
                }
            }, {
                key: "asyncError",
                value: function(e) {
                    var t = this;
                    if (!this.destroyed())
                        if (clearTimeout(this.timeoutAdStart), this.timeoutAdStart = setTimeout((function() {
                                return t.destroy()
                            }), 0), e && e.getError) {
                            var i = e.getError();
                            this.handleAdError(i, e, !0)
                        } else e.target && e.target.src ? console.error("Failed to load " + e.target.src) : console.error(e)
                }
            }, {
                key: "handleAdError",
                value: function(e, t, i) {
                    var a = this;
                    this.options.debug && console.error(e);
                    var n = V(this, e);
                    this.player && 0 === this.player.getPosition() && (this._qoe.tick("adError"), n.timeLoading = this._qoe.between("adBeforePlay", "adError")), this.trigger(p, n), this.destroyed() || (900 === e.getErrorCode() || i ? (clearTimeout(this.timeoutAdStart), this.timeoutAdStart = setTimeout((function() {
                        return a.destroy()
                    }), 0)) : (this.stopBlocking(), this.view.adTakeDown()))
                }
            }, {
                key: "isVpaidAd",
                value: function(e) {
                    var t = e.getContentType();
                    return "application/javascript" === t || "application/x-shockwave-flash" === t
                }
            }, {
                key: "destroy",
                value: function() {
                    if (this.debugConsoleLog("[JW DEBUG] JW Player destroy PlaylistItemManager"), this.off(), !this.destroyed()) {
                        this.player.off(null, null, this), this.bids.map((function(e) {
                            e.stop()
                        })), this.bids = [], this.bidsPromises = [], clearTimeout(this.timeoutAdStart), clearInterval(this.progressIntervalId), this.currentAd = null, this.options = null, this.video = null, this.initAdsManagerPromise = null;
                        var e = this.adsLoaderManager;
                        e && (e.reset(), this.adsLoaderManager = null), this.blockingInstreamPlayer && this.stopBlocking(), this.instreamProvider.off(), this.instreamProvider.setProxy(null), this.instreamProvider = null, this.view.adTakeDown(), this.view = null, this.player = null, this.item = null
                    }
                }
            }, {
                key: "destroyed",
                value: function() {
                    return !this.item
                }
            }]), e
        }(),
        ie = function() {
            function e(i, a) {
                t(this, e), this.adsLoader = null, this.adDisplayContainer = null, this.displayInitialized = !1, this.initialized = !1, this.started = !1, this.adsRequest = null, this.userRequestContext = null, this.adsManager = null, this.adsLoaderEvents = {}, this.adsManagerEvents = {}, this.container = a, this.schedule = null, this.breakMap = {}, this.player = i
            }
            return a(e, [{
                key: "getVpaidMode",
                value: function(e) {
                    var t = google.ima.ImaSdkSettings.VpaidMode;
                    return "disabled" === e || "none" === e ? t.DISABLED : "enabled" === e ? t.ENABLED : t.INSECURE
                }
            }, {
                key: "initializeDisplay",
                value: function(e) {
                    this.adDisplayContainer && !this.displayInitialized && (this.adDisplayContainer.initialize(), e && e.restrict && (this.displayInitialized = !0))
                }
            }, {
                key: "contentComplete",
                value: function() {
                    if (null !== this.adsRequest) {
                        var e = this.adsLoader;
                        e && e.contentComplete(), this.adsRequest = null
                    }
                }
            }, {
                key: "reset",
                value: function() {
                    var e = this;
                    this.userRequestContext = null;
                    var t = this.adsManager;
                    t && (t.destroy(), this.adsManager = null), this.contentComplete(!0), this.schedule = null, this.breakMap = {}, Object.keys(this.adsLoaderEvents).forEach((function(t) {
                        e.adsLoader.removeEventListener(t, e.adsLoaderEvents[t])
                    })), this.adsLoaderEvents = {}, this.adsManagerEvents = {}, this.initialized = this.started = !1
                }
            }, {
                key: "prepare",
                value: function(e) {
                    return null === this.adsLoader && (this.adDisplayContainer = new google.ima.AdDisplayContainer(this.container, e), this.adsLoader = new google.ima.AdsLoader(this.adDisplayContainer)), this.adsLoader
                }
            }, {
                key: "open",
                value: function(e, t, i) {
                    var a = this,
                        n = google.ima.settings;
                    n.setDisableCustomPlaybackForIOS10Plus(!0);
                    var r = t.locale || this.player.getConfig().language;
                    n.setLocale(r), t.maxRedirects >= 0 && n.setNumRedirects(t.maxRedirects);
                    var s = this.prepare(i);
                    return new Promise((function(e, t) {
                        s.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, t, !1), s.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, e, !1), a.adsLoaderEvents[google.ima.AdErrorEvent.Type.AD_ERROR] = t, a.adsLoaderEvents[google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED] = e
                    }))
                }
            }, {
                key: "requestAds",
                value: function(e, t, i) {
                    var a = this;
                    if (null === this.adsRequest) {
                        var n = t.getSchedule();
                        if (n) {
                            var r = this.player,
                                s = this.adsRequest = new google.ima.AdsRequest,
                                o = this.userRequestContext = {
                                    requestType: e,
                                    vpaidMode: t.vpaidmode,
                                    playerVersion: r.version.split("+")[0],
                                    adPosition: t.adPosition
                                };
                            s.setAdWillAutoPlay(!1 !== r.getConfig().autostart), s.setAdWillPlayMuted(r.getMute());
                            var l = r.getSafeRegion(!1);
                            s.linearAdSlotWidth = l.width, s.linearAdSlotHeight = l.height;
                            var d = r.getSafeRegion(!0);
                            s.nonLinearAdSlotWidth = d.width, s.nonLinearAdSlotHeight = d.height, s.forceNonLinearFullSlot = i.forceNonLinearFullSlot, s.vastLoadTimeout = i.vastLoadTimeout;
                            var u = this.adsLoader.getSettings(),
                                g = this.getVpaidMode(o.vpaidMode);
                            u.setPlayerType("jwplayer"), u.setPlayerVersion(o.playerVersion), u.setVpaidMode(g);
                            var c = new G(r, this, i);
                            return c.normalize(n).then((function(e) {
                                var t = Object.keys(e);
                                if (1 === t.length) {
                                    var i = e[t[0]];
                                    "pre" === i.offset && i.tag && (n = s.adTagUrl = o.adTagUrl = i.tag)
                                }
                                o.adTagUrl || (s.adsResponse = o.adsResponse = c.getAdsResponse(e)), a.schedule = n, a.breakMap = c.getTagMap(e, a.breakMap), a.adsLoader.requestAds(s, o)
                            }))
                        }
                    }
                }
            }, {
                key: "getAdsManager",
                value: function(e, t, i) {
                    var a = new google.ima.AdsRenderingSettings;
                    a.enablePreloading = i.enablePreloading || i.preloadAds, a.loadVideoTimeout = i.loadVideoTimeout, a.uiElements = null, a.useStyledNonLinearAds = !0;
                    var n = this.player.getConfig().bandwidthEstimate;
                    return a.bitrate = n ? n / 1e3 : -1, this.adsManager = e.getAdsManager(t, a), this.userRequestContext = e.getUserRequestContext(), this.adsManager
                }
            }, {
                key: "init",
                value: function(e, t, i) {
                    null !== this.adsManager && !1 === this.initialized && (this.adsManager.init(e, t, i), this.initialized = !0)
                }
            }, {
                key: "start",
                value: function() {
                    null !== this.adsManager && !1 === this.started && (this.initializeDisplay({
                        restrict: !0
                    }), this.adsManager.start(), this.started = !0)
                }
            }, {
                key: "bindEvents",
                value: function(e) {
                    var t = this,
                        i = google.ima.AdEvent.Type,
                        a = google.ima.AdErrorEvent.Type;
                    Object.keys(e).forEach((function(n) {
                        var r = i[n] || a[n],
                            s = t.adsManagerEvents[r];
                        s && t.adsManager.removeEventListener(r, s), t.adsManager.addEventListener(r, e[n], !1), t.adsManagerEvents[r] = e[n]
                    }))
                }
            }, {
                key: "unbindEvents",
                value: function(e) {
                    var t = this,
                        i = google.ima.AdEvent.Type,
                        a = google.ima.AdErrorEvent.Type;
                    e.forEach((function(e) {
                        var n = i[e] || a[e],
                            r = t.adsManagerEvents[n];
                        r && (t.adsManager.removeEventListener(n, r), delete t.adsManagerEvents[n])
                    }))
                }
            }, {
                key: "getTag",
                value: function(e) {
                    if ("string" == typeof this.schedule) return this.schedule;
                    var t = U(e, "getAdPodInfo");
                    if (t) {
                        var i = this.breakMap[U(t, "getTimeOffset")] || {};
                        if (i.tag) return i.tag
                    }
                    return this.userRequestContext ? this.userRequestContext.adTagUrl || this.userRequestContext.adsResponse || "" : (console.error("invalid request context", this.userRequestContext), "")
                }
            }, {
                key: "getAdBreakId",
                value: function(e) {
                    var t = this.player.utils,
                        i = O(e, t);
                    return this.breakMap[i] = this.breakMap[i] || {}, this.breakMap[i].adBreakId = this.breakMap[i].adBreakId || t.genId(12), this.breakMap[i].adBreakId
                }
            }, {
                key: "getAdPlayId",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        i = this.player.utils,
                        a = O(e, i);
                    return this.breakMap[a] = this.breakMap[a] || {}, this.breakMap[a].adPlayId = this.breakMap[a].adPlayId || {
                        1: i.genId(12)
                    }, this.breakMap[a].adPlayId[t] = this.breakMap[a].adPlayId[t] || i.genId(12), this.breakMap[a].adPlayId[t]
                }
            }, {
                key: "getJwpSeg",
                value: function(e) {
                    var t = U(e, "getAdPodInfo");
                    if (t) {
                        var i = U(t, "getTimeOffset");
                        return this.breakMap[i] && this.breakMap[i].jwpseg
                    }
                    return null
                }
            }, {
                key: "getTimeoffsetFromPosition_",
                value: function() {
                    var e, t = this.player.getPosition(),
                        i = 1 / 0;
                    return Object.keys(this.breakMap).forEach((function(a) {
                        var n = t - a;
                        n >= 0 && n < i && (e = a, i = n)
                    })), i === 1 / 0 ? -1 : e
                }
            }, {
                key: "skipAd",
                value: function() {
                    this.adsManager && this.adsManager.skip()
                }
            }, {
                key: "getBid",
                value: function(e) {
                    var t = O(e, this.player.utils);
                    return this.breakMap[t] ? this.breakMap[t].bid : null
                }
            }, {
                key: "setBid",
                value: function(e, t) {
                    var i = O(e, this.player.utils);
                    this.breakMap[i] = this.breakMap[i] || {}, this.breakMap[i].bid = t
                }
            }]), e
        }();
    ! function(e) {
        if (e && "undefined" != typeof window) {
            var t = document.createElement("style");
            t.setAttribute("media", "screen"), t.innerHTML = e, document.head.appendChild(t)
        }
    }(".jw-plugin-googima,.jw-plugin-googima.jw-ad-instream .jw-ads-view>:not(div),.jw-plugin-googima.jw-ad-instream .jw-ads-view>div:not(:empty){height:100%;width:100%}.jw-plugin-googima{overflow:hidden;display:block;visibility:hidden;pointer-events:none;opacity:0}.jw-plugin-googima.jw-ad-instream{visibility:visible;display:block;pointer-events:all;opacity:1}.jw-plugin-googima.jw-ad-linear{top:0;left:0;bottom:0}.jw-plugin-googima.jw-ad-non-linear{top:auto}.jw-plugin-googima .jw-ads-view{position:absolute;width:100%;height:100%}.jwplayer.jw-flag-ads-googleima.jw-flag-touch .jw-controlbar{font-size:1em}.jwplayer.jw-flag-ads-googleima.jw-flag-touch .jw-display-icon-display,.jwplayer.jw-flag-ads-googleima.jw-flag-touch .jw-display-icon-display .jw-icon-display{pointer-events:none}.jwplayer.jw-flag-ads-googleima .jw-controlbar{background:0 0!important;pointer-events:none}.jwplayer.jw-flag-ads-googleima .jw-controlbar .jw-icon{pointer-events:all}.jwplayer.jw-flag-ads-googleima .jw-controls-backdrop{display:none}.jwplayer.jw-flag-ads-googleima.jw-ie .jw-slider-volume,.jwplayer.jw-flag-ads-googleima.jw-ie .jw-svg-icon{background:rgba(0,0,0,.25);border-radius:3px}.jwplayer.jw-flag-ads-googleima.jw-ie .jw-slider-volume{margin:0 10px}@supports (filter:drop-shadow(0 0 3px #000)){.jwplayer.jw-flag-ads-googleima.jw-ie .jw-slider-volume,.jwplayer.jw-flag-ads-googleima.jw-ie .jw-svg-icon{background:0 0;border-radius:0}.jwplayer.jw-flag-ads-googleima.jw-ie .jw-slider-volume{margin:0}}.jwplayer.jw-flag-ads-googleima .jw-controlbar .jw-svg-icon{fill:#fff;filter:drop-shadow(0 0 3px #000)}.jwplayer.jw-flag-ads-googleima .jw-spacer,.jwplayer.jw-flag-ads-googleima .jw-text{order:1}.jwplayer.jw-flag-ads-googleima .jw-controlbar .jw-text{text-shadow:0 0 3px #000}.jwplayer.jw-flag-ads-googleima.jw-flag-small-player.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid) .jw-controls .jw-controlbar{pointer-events:none}.jwplayer.jw-flag-ads-googleima.jw-flag-small-player .jw-controlbar{flex-flow:column-reverse nowrap;height:100%;max-height:none}.jwplayer.jw-flag-ads-googleima.jw-flag-small-player .jw-button-container{align-items:flex-end;flex-wrap:wrap;margin-bottom:7px}.jwplayer.jw-flag-ads-googleima.jw-flag-small-player .jw-controlbar .jw-icon{height:30px}.jwplayer.jw-flag-ads-googleima.jw-flag-small-player .jw-text{align-self:flex-start;margin:16px 0 0 16px;order:-1;width:100%}"), (window.jwplayerPluginJsonp || window.jwplayer().registerPlugin)(l, "8.1", (function(e, t, i) {
        var a = this,
            n = e.utils,
            r = e.getConfig(),
            s = new K(t || {}, n),
            o = null,
            l = 0;
        $(n).catch(n.noop);
        var v = e._,
            m = r.key,
            y = new X(i, e.id, n),
            w = new Z(n, e.Events, y),
            b = new ie(e, y.getAdDiv()),
            A = null;

        function k(e, t, i, a) {
            try {
                return e.getCompanionAds(t, i, a)
            } catch (e) {
                return []
            }
        }

        function E(t) {
            var i = new google.ima.CompanionAdSelectionSettings;
            i.sizeCriteria = google.ima.CompanionAdSelectionSettings.SizeCriteria.IGNORE;
            var a = s.companiondiv || {
                    width: 300,
                    height: 250
                },
                n = function(e) {
                    for (var t = [], i = 0; i < e.length; i++) {
                        var a = e[i];
                        t.push({
                            width: a.getWidth(),
                            height: a.getHeight(),
                            type: "html",
                            resource: a.getContent(),
                            click: null
                        })
                    }
                    return t
                }(k(t, a.width, a.height, i)),
                r = n.length;
            if (r) {
                var o = z(A, t);
                o.companions = n, e.trigger(h, o)
            }
            if (s.companiondiv) {
                i = new google.ima.CompanionAdSelectionSettings, s.companionResourceType && (i.resourceType = google.ima.CompanionAdSelectionSettings.ResourceType[s.companionResourceType]);
                var l = k(t, s.companiondiv.width, s.companiondiv.height, i);
                r = Math.max(r, l.length),
                    function(e) {
                        if (e && e.length) {
                            var t = document.getElementById(s.companiondiv.id);
                            if (t) {
                                var i = e[0];
                                i && (v.isFunction(i.getContent) ? t.innerHTML = i.getContent() : t.innerHTML = i.resource || i.content)
                            }
                        }
                    }(l)
            }
            return r > 0
        }

        function P() {
            M(), b && b.adDisplayContainer && b.adDisplayContainer.destroy(), e.off(null, null, this), e.playAd = n.noop
        }

        function M() {
            A && (A.destroy(), A = null)
        }

        function j(t) {
            A && A.discardAdBreak(), b.contentComplete(), M(), t && t.adschedule ? s.adschedule = t.adschedule : s.adschedule = null, e.setCues([])
        }

        function C(t, i, a) {
            var r = t.item || {};
            j(r);
            var d, c, h, p = a.getSchedule();
            if (i === u && (d = s.getAdRules(), c = 0 === d.frequency && 1 === l, h = l >= d.startOn && (l - d.startOn) % d.frequency == 0, !(c || h)) || !p || "string" != typeof p && !Object.keys(p).length) return s.adschedule = null, void $(n).then((function() {
                b.prepare(o)
            })).catch(n.noop);
            if (b.reset(), (A = new te(r, s, e, w, y, b, o)).on("all", (function(t, i) {
                    return e.trigger(t, i)
                })), A.init(i, a).then((function(t) {
                    A.destroyed() || e.trigger("adsManager", {
                        adsManager: t,
                        videoElement: o
                    })
                })).catch(n.noop), A.on(f, (function() {
                    return E(A.currentAd)
                })), a.preloadAds) {
                var v = e.getConfig().autostart;
                !1 === v || v === g && 0 === e.getViewable() ? A.requestAds(i, a) : e.once("autostartNotAllowed", (function() {
                    A.requestAds(i, a)
                }), A)
            }
            e.once("beforePlay", (function(e) {
                A.beforePlay(e), A.requestAds(i, a)
            }), A).on("beforeComplete", (function() {
                return A.beforeComplete()
            }), A).on("time", (function(e) {
                return A.time(e)
            }), A).on("resize", (function() {
                return A.resize()
            }), A).on("fullscreen", (function() {
                return A.resize()
            }), A)
        }
        this.version = "8.7.18", e.utils.extend(this, e.Events), e.pauseAd = function(e, t) {
            A && (e ? A.pause(t || {}) : A.resume(t || {}))
        }, e.playAd = function(i) {
            var a = n.extend({}, t);
            delete a.ad, delete a.tag, delete a.schedule, delete a.adschedule, e._.isArray(i) ? a.tag = i[0] : a.tag = i, a.adPosition = N(e);
            var s = new K(a, n);
            s.setLocalizationOptions(r.localization.advertising);
            var o = A ? A.blockingInstreamPlayer : null;
            o && (o.noResume = !0), C({
                item: e.getPlaylistItem()
            }, d, s), A && (A.beforePlay(null), A.requestAds(d, s))
        }, e.skipAd = function() {
            b && b.skipAd()
        }, e.on("ready", (function() {
            r.localization = e.getConfig().localization, s.setLocalizationOptions(r.localization.advertising), o || (o = e.createInstream().getMediaElement()), $().catch((function(e) {
                e.message.match(/Failed to load/) && _("Ad playback blocked by an ad blocker", 2e4)
            })), L.catch((function(e) {
                _(e.message, 60002)
            }));
            var t = document.body,
                i = function e() {
                    t.removeEventListener("mouseup", e), t.removeEventListener("touchend", e), b.initializeDisplay()
                };
            t.addEventListener("mouseup", i, !1), t.addEventListener("touchend", i, !1)
        }), this).on("playlistItem", (function(e) {
            l++, s.resetBidsResponse(), C(e, u, s)
        }), this).on("playlistComplete", (function() {
            j()
        }), this).on("cast", (function(e) {
            e.active && j()
        }), this).on("mute", (function(e) {
            var t = e.mute;
            w.mute(t)
        }), this).on("destroyPlugin", (function() {
            a.destroy()
        }), this).on("remove", P, this);
        var L = function(e, t, i) {
            var a = Y[t];
            return a || (Y[t] = new Promise((function(a, n) {
                ! function(i) {
                    var a = new e.key(t);
                    if ("unlimited" === a.edition()) return i();
                    var n = ["//", "entitlements.jwplayer.com", "/", a.token(), ".json"];
                    "file:" === window.location.protocol && n.unshift("https:"), e.ajax(n.join(""), (function(e) {
                        i(e && e.response)
                    }), (function() {
                        i()
                    }), {
                        timeout: 1e4,
                        responseType: "json"
                    })
                }((function(e) {
                    var t, r, s = e || {};
                    !0 === i.outstream ? (t = !1 !== s.canPlayOutstreamAds, r = "Outstream Ad Limit Reached") : (t = !1 !== s.canPlayAds, r = "Ad Limit Reached"), !1 !== t ? a({
                        message: "Can Play Ads"
                    }) : n({
                        message: r
                    })
                }))
            })))
        }(n, m, t);
        L.catch(n.noop);
        var _ = function(t, i) {
            P(), e.trigger(p, V(null, {
                message: t,
                adErrorCode: i,
                id: c,
                placement: R(r),
                tag: ""
            }))
        };
        this.destroy = M, this.adsDebugMode = function() {
            s.debug = !0, A && (A.debugConsoleLog = function() {
                var e;
                (e = console).log.apply(e, arguments)
            })
        }
    }))
}();