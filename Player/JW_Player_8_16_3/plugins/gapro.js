! function() {
    var d = {
            universalga: "ga",
            trackerName: "",
            label: "file",
            trackingobject: "_gaq",
            gtag: "gtag"
        },
        n = function(n, e) {
            var t, o, a, i = n.utils,
                r = n._,
                l = r.extend({}, d, e),
                c = e.debug && r.isFunction(e.onGaTrack) ? e.onGaTrack : i.noop,
                u = !1;
            if (("string" != typeof l.gtag || void 0 === window[l.gtag]) && "function" != typeof l.gtag) {
                var g = f();
                if (!g || "string" == typeof g) return void i.log("Could not find Google Analytics Interface.", l)
            }

            function f() {
                return window[l.universalga] ? (t || (t = {
                    push: function(n) {
                        var e = window[l.universalga],
                            t = l.trackerName ? "".concat(l.trackerName, ".send") : "send";
                        n.splice(0, 1, t, "event"), n[5] = {
                            nonInteraction: n[6]
                        }, n.length = 6, e.apply(window, n)
                    }
                }), t) : "string" == typeof l.trackingobject ? window[l.trackingobject] : l.trackingobject
            }

            function s(n, e) {
                return n ? e && n[e] && n[e].length ? "file" === e ? i.getAbsolutePath(n[e]) : n[e] : n.file ? n.file : n.sources ? function(n) {
                    for (var e = [], t = n.length - 1; t--;) n[t].file && e.push(n[t].file);
                    return e.sort(), i.getAbsolutePath(e[0])
                }(n.sources) : "" : ""
            }

            function p(n, e) {
                var t = "",
                    a = "function" == typeof l.gtag ? l.gtag : window[l.gtag];
                u || (a ? (t = "gtag", function(n, e, t, a, o) {
                    n("event", t, {
                        event_category: e,
                        event_label: a,
                        event_action: t,
                        non_interaction: o
                    })
                }(a, "JW Player Video", n, o.label, e)) : void 0 !== f()._trackEvent ? (t = "sync", function(n, e, t, a) {
                    f()._trackEvent(n, e, t, void 0, a)
                }("JW Player Video", n, o.label, e)) : void 0 !== f().push && (t = "async", function(n, e, t, a) {
                    f().push(["_trackEvent", n, e, t, void 0, a])
                }("JW Player Video", n, o.label, e)), c({
                    type: t,
                    category: "JW Player Video",
                    action: n,
                    label: o.label,
                    nonInteraction: e
                }))
            }
            n.on("playlistItem", function(n) {
                var e = n.item;
                (o = r.extend({
                    played: !1
                }, e)).label = s(e, l.label)
            }), n.on("play", function(n) {
                o.played ? "paused" === a && p("Resume", "interaction" !== n.playReason) : (o.played = !0, p("Play", "interaction" !== n.playReason)), a = "playing"
            }), n.on("buffer", function() {
                p("Buffer", !0), a = "buffering"
            }), n.on("pause", function(n) {
                p("Pause", "interaction" !== n.pauseReason), a = "paused"
            }), n.on("seek", function() {
                p("Seek", !0)
            }), n.on("complete", function() {
                p("Complete", !0)
            }), n.on("cast", function(n) {
                u = !!n.active
            })
        };
    n.version = "2.1.5", (window.jwplayerPluginJsonp || window.jwplayer().registerPlugin)("gapro", "8.0.0", n)
}();