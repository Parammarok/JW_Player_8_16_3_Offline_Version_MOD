! function() {
    var e = "dai",
        t = "-1",
        i = "adError";

    function a(e) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function s(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }

    function r(e, t, i) {
        return t && s(e.prototype, t), i && s(e, i), e
    }

    function o() {
        return (o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a])
            }
            return e
        }).apply(this, arguments)
    }
    var l = {
            apiKey: "",
            assetKey: "",
            cmsID: "",
            debug: !1,
            liveAdMessage: "Playing Ad",
            videoID: ""
        },
        d = function() {
            function e(t, i) {
                for (var s in n(this, e), l)
                    if (l.hasOwnProperty(s)) {
                        var r = t[s],
                            o = l[s],
                            d = a(o);
                        if (void 0 !== r) {
                            if ("boolean" !== d && "number" !== d || (r = u(r)), a(r) !== d) throw new Error("invalid parameter: " + s + " should be a " + d);
                            this[s] = r
                        } else this[s] = o
                    } this.setLocalizationOptions(i)
            }
            return r(e, [{
                key: "setLocalizationOptions",
                value: function(e) {
                    var t = e.loadingAd,
                        i = e.admessage,
                        a = e.podmessage,
                        n = e.cuetext;
                    this.loadingMessage = t, this.admessage = i, this.adcounterdynamic = a, this.cuetext = n
                }
            }]), e
        }();

    function u(e) {
        if ("true" === e) return !0;
        if ("false" === e) return !1;
        var t = parseFloat(e);
        return isNaN(t) ? e : t
    }
    var c = null;

    function _(e) {
        if (c) return c;
        if (window.google && google.ima && google.ima.dai) return c = Promise.resolve();
        var t = ["//", "imasdk.googleapis.com/js/sdkloader/ima3_dai.js"];
        "file:" === document.location.protocol && t.unshift("https:");
        var i = new(0, e.scriptloader)(t.join(""));
        return c = i.load().then((function() {}))
    }
    var h = {};
    var m = function() {
        function t(e) {
            n(this, t), this.player_ = e, this.adBreakIds_ = {}, this.adIds_ = {}, this.currentAd_ = null
        }
        return r(t, [{
            key: "getAdBreakId_",
            value: function(e) {
                return f("b".concat(y(e) || e.getAdId()), this.adBreakIds_)
            }
        }, {
            key: "getAdPlayId_",
            value: function(e) {
                return f("b".concat(y(e), "a").concat(e.getAdId()), this.adIds_)
            }
        }, {
            key: "adEventObject",
            value: function(t) {
                var i = t || this.currentAd_,
                    a = {
                        client: e,
                        viewable: this.player_.getViewable()
                    };
                if (!i) return a;
                this.currentAd_ = i, a.id = this.getAdBreakId_(i), a.adPlayId = this.getAdPlayId_(i), a.adtitle = i.getTitle(), a.adsystem = i.getAdSystem(), a.creativetype = "application/x-mpegURL", a.linear = "linear";
                var n = i.getAdPodInfo();
                if (n) {
                    var s = n.getTotalAds();
                    s > 1 && (a.sequence = n.getAdPosition(), a.podcount = s), a.adposition = function(e) {
                        var t = e.getTimeOffset();
                        if (0 === t) return "pre";
                        if (-1 === t) return "post";
                        return "mid"
                    }(n)
                }
                return a
            }
        }, {
            key: "clearAd",
            value: function() {
                this.currentAd_ = null
            }
        }]), t
    }();

    function f(e, i) {
        if (e) {
            var a = i[e];
            return a || (i[e] = (n = 12, a = new Array(n + 1).join((Math.random().toString(36) + "00000000000000000").slice(2, 18)).slice(0, n))), a
        }
        var n;
        return t
    }

    function y(e) {
        var t = e.getAdPodInfo();
        return t ? "".concat(t.getTimeOffset()).replace(/[-.]/g, "N") : null
    }
    var g = function() {
        function e(t, i, a, s) {
            var r = this;
            n(this, e), this.item_ = t, this.options_ = i, this.player_ = a, this.daiUtils_ = new m(a), this.adCues_ = [], this.utils_ = a.utils, this.playerContainer_ = a.getContainer(), this.playerPositionBeforeMidroll_ = null, this.instream_ = null, this.timeoutAdStart_ = -1, this.isVOD_ = i.cmsID && i.videoID, this.liveMode_ = !this.isVOD_ && i.assetKey, this.video_ = null, this.streamManager_ = null, this.streamManagerEvents_ = null, this.streamEventHandler_ = function(e) {
                r.onStreamEvent_(e)
            }, this.clickElement_ = s
        }
        return r(e, [{
            key: "beforePlay",
            value: function() {
                var e = this;
                this.instream_ || this.destroyed_() || (clearTimeout(this.timeoutAdStart_), this.timeoutAdStart_ = setTimeout((function() {
                    e.destroyed_() || e.stopBlocking_()
                }), "3000"), this.video_ = this.player_.getConfig().mediaElement, this.instream_ = this.player_.createInstream().init().setText(this.options_.loadingMessage), this.init_().catch((function() {
                    e.stopBlocking_()
                })))
            }
        }, {
            key: "pause",
            value: function() {
                this.video_ && this.video_.pause()
            }
        }, {
            key: "resume",
            value: function() {
                this.video_ && this.video_.play()
            }
        }, {
            key: "stopBlocking_",
            value: function() {
                this.destroyed_() || (clearTimeout(this.timeoutAdStart_), this.destroyBlockingInstreamPlayer_())
            }
        }, {
            key: "init_",
            value: function() {
                var e = this;
                return _().then((function() {
                    if (e.destroyed_()) return null;
                    var t, i = google.ima.dai.api.StreamEvent.Type;
                    if (e.streamManager_ = new google.ima.dai.api.StreamManager(e.video_), e.streamManager_.setClickElement(e.clickElement_), e.streamManagerEvents_ = [i.CUEPOINTS_CHANGED, i.LOADED, i.AD_BREAK_STARTED, i.AD_BREAK_ENDED, i.STARTED, i.AD_PROGRESS, i.CLICK, i.COMPLETE, i.ERROR], e.streamManager_.addEventListener(e.streamManagerEvents_, e.streamEventHandler_, !1), e.isVOD_)(t = new google.ima.dai.api.VODStreamRequest).contentSourceId = e.options_.cmsID, t.videoId = e.options_.videoID;
                    else {
                        if (!e.liveMode_) throw new Error("Invalid options");
                        (t = new google.ima.dai.api.LiveStreamRequest).assetKey = e.options_.assetKey, e.player_.off("meta", e.handleMeta_, e), e.player_.on("meta", e.handleMeta_, e)
                    }
                    t.apiKey = e.options_.apiKey, e.streamManager_.requestStream(t)
                }))
            }
        }, {
            key: "loadStream_",
            value: function(e) {
                var t = this.player_.getPlaylistItem(this.player_.getPlaylistIndex()),
                    i = e.url;
                t.sources = [o(t.sources[0], {
                    file: i
                })], this.instream_ && (this.instream_.replacePlaylistItem(t), this.stopBlocking_())
            }
        }, {
            key: "onStreamEvent_",
            value: function(e) {
                var a = this,
                    n = google.ima.dai.api.StreamEvent.Type,
                    s = this.daiUtils_.adEventObject(e.getAd());
                switch (e.type) {
                    case n.CUEPOINTS_CHANGED:
                        var r = this.adCues_ = e.getStreamData().cuepoints;
                        if (r && r.length) {
                            var l = r.filter((function(e) {
                                return e.start > 0
                            })).map((function(e) {
                                return {
                                    begin: e.start,
                                    text: a.options_.cuetext
                                }
                            }));
                            this.player_.setCues(l)
                        }
                        break;
                    case n.LOADED:
                        clearTimeout(this.timeoutAdStart_), this.loadStream_(e.getStreamData());
                        break;
                    case n.AD_BREAK_STARTED:
                        this.player_.trigger("adBreakStart", s), this.setAdsMode_(!0), this.instream_.once("destroyed", (function() {
                            a.instream_ = null, a.player_.trigger("adBreakEnd", s), a.daiUtils_.clearAd()
                        }));
                        break;
                    case n.AD_BREAK_ENDED:
                        this.instream_.off().once("destroyed", (function() {
                            a.instream_ = null, a.player_.trigger("adBreakEnd", s), a.daiUtils_.clearAd()
                        })), this.setAdsMode_(!1);
                        break;
                    case n.STARTED:
                        this.player_.trigger("adImpression", s);
                        var d = this.daiUtils_.adEventObject(null);
                        d.newstate = "playing", this.instream_.setState(d);
                        break;
                    case n.AD_PROGRESS:
                        if (!this.instream_) return;
                        this.handleTime_(e.getStreamData().adProgressData, s);
                        break;
                    case n.CLICK:
                        this.player_.trigger("adClick", s), this.player_.pause();
                        break;
                    case n.COMPLETE:
                        this.player_.trigger("adComplete", s), this.daiUtils_.clearAd();
                        break;
                    case n.ERROR:
                        var u = e.getStreamData().errorMessage,
                            c = o({
                                id: t,
                                message: "Ad Error: " + u
                            }, s);
                        this.player_.trigger(i, c), this.daiUtils_.clearAd()
                }
            }
        }, {
            key: "checkMidrolls_",
            value: function(e) {
                if (this.adCues_.length) {
                    for (var t = e.position, i = -1, a = 0; a < this.adCues_.length && !(this.adCues_[a].start > t); a++) i = a;
                    i > -1 && !this.adCues_[i].played && t !== this.adCues_[i].start && (this.playerPositionBeforeMidroll_ = t, this.player_.seek(this.adCues_[i].start))
                }
            }
        }, {
            key: "handleMeta_",
            value: function(e) {
                var t = e.metadata;
                this.streamManager_ && t && this.streamManager_.onTimedMetadata(t)
            }
        }, {
            key: "setAdsMode_",
            value: function(e) {
                var t = this;
                this.player_.off("time", this.checkMidrolls_, this), e ? (this.utils_.addClass(this.playerContainer_, "jw-flag-ads"), this.instream_ || (this.instream_ = this.player_.createInstream()), this.instream_.enableAdsMode(), this.liveMode_ && this.instream_.setText(this.options_.liveAdMessage), this.instream_.off(null, null, this).on("instreamClick", (function() {
                    t.clickElement_.click()
                }), this).on("state", (function(e) {
                    t.instream_.setState(e)
                }), this), this.liveMode_ && (this.instream_.on("meta", this.handleMeta_, this), this.handleMeta_({
                    metadata: this.player_.getItemMeta()
                }))) : (this.utils_.removeClass(this.playerContainer_, "jw-flag-ads"), this.isVOD_ && this.player_.on("time", this.checkMidrolls_, this), this.destroyBlockingInstreamPlayer_(), this.playerPositionBeforeMidroll_ && (this.video_.currentTime = this.playerPositionBeforeMidroll_, this.playerPositionBeforeMidroll_ = null))
            }
        }, {
            key: "handleTime_",
            value: function(e, t) {
                var i = e.currentTime,
                    a = e.duration;
                if (t.position = i, t.duration = a, this.instream_.setTime(t), this.isVOD_) {
                    var n = e.adPosition,
                        s = e.totalAds,
                        r = this.options_.admessage || "",
                        o = this.options_.adcounterdynamic || "";
                    r = r.replace(/xx/gi, "".concat(Math.ceil(a - i))), s > 1 && (r = (o = (o = o.replace(/__AD_POD_CURRENT__/g, "".concat(n))).replace(/__AD_POD_LENGTH__/g, "".concat(s))) + " " + r), this.instream_.setText(r)
                }
            }
        }, {
            key: "destroyBlockingInstreamPlayer_",
            value: function() {
                this.instream_ && (this.instream_.destroy(), this.instream_ = null)
            }
        }, {
            key: "destroy",
            value: function() {
                clearTimeout(this.timeoutAdStart_), this.destroyed_() || (this.player_.off(null, null, this), this.streamManager_ && this.streamManager_.removeEventListener(this.streamManagerEvents_, this.streamEventHandler_, !1), this.stopBlocking_(), this.options_ = null, this.video_ = null, this.player_ = null, this.item_ = null)
            }
        }, {
            key: "destroyed_",
            value: function() {
                return !this.item_
            }
        }]), e
    }();
    (window.jwplayerPluginJsonp || window.jwplayer().registerPlugin)(e, "8.0", (function(a, n, s) {
        var r, l = a.utils,
            u = a.getConfig(),
            c = new d(n || {}, u.localization.advertising);
        _(l).catch(l.noop);
        var m = u.key;

        function f() {
            r && (r.destroy(), r = null)
        }
        this.version = "0.4.13", o(this, a.Events), a.pauseAd = function(e) {
            e = "boolean" != typeof e || e, r && (e ? r.pause() : r.resume())
        }, a.on("ready", (function() {
            u.localization = a.getConfig().localization, c.setLocalizationOptions(u.localization.advertising), _(l).catch((function() {
                a.getAdBlock() && p("Ad playback blocked by an ad blocker", 2e4)
            })), y.catch((function(e) {
                p("Ad Error: " + e.message, 60002)
            }))
        }), this).on("playlistItem", (function(e) {
            f();
            var t = e.item,
                i = o({}, c, t.daiSetting);
            (i.cmsID && i.videoID || i.assetKey) && (t.preload = "none", r = new g(t, i, a, s), a.once("beforePlay", r.beforePlay, r))
        }), this).on("destroyPlugin", f, this);
        var y = function(e, t, i) {
            var a = h[t];
            return a || (h[t] = new Promise((function(a, n) {
                ! function(i) {
                    var a = new e.key(t);
                    if ("unlimited" === a.edition()) return i(); /////////////////////
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
                    var t, s, r = e || {};
                    !0 === i.outstream ? (t = !1 !== r.canPlayOutstreamAds, s = "Outstream Ad Limit Reached") : (t = !1 !== r.canPlayAds, s = "Ad Limit Reached"), !1 !== t ? a({
                        message: "Can Play Ads"
                    }) : n({
                        message: s
                    })
                }))
            })))
        }(l, m, n);

        function p(n, s) {
            f(), a.off(null, null, this), a.trigger(i, {
                id: t,
                client: e,
                message: n,
                code: 900,
                adErrorCode: s,
                tag: ""
            })
        }
        y.catch(l.noop), this.destroy = f
    }))
}();