try {
    ;(function () {
            var aC = window._vwo_code;
            if (aC) {
                window._vwo_j_e = window._vwo_j_e || 0;
                if (window._vwo_j_e == 1) {
                    window._vwo_mt = "dupCode";
                    clearTimeout(window._vwo_settings_timer);
                    if (window.VWO && window.VWO._ && window.VWO._.bIE) {
                        window._vwo_code.finish()
                    }
                    return
                }
                if (window._vwo_j_e == -1) {
                    window._vwo_j_e = 1
                }
            }
            window._vwo_mt = "live";
            try {
                window._vwo_tm = "{\"_vis_preview_499844\":1}";
                var getMode = function (e) {
                    var n;
                    if (window.name.indexOf(e) > -1) {
                        n = window.name
                    } else {
                        n = window.location.search.match("_vwo_m=([^&]*)");
                        n = n && n[1]
                    }
                    return n && JSON.parse(decodeURIComponent(n))
                };
                if (window.name.indexOf("_vis_heatmap") > -1 || window.name.indexOf("_vis_editor") > -1 || getMode("_vwo_cc") || window.name.indexOf("_vis_preview") > -1) {
                    window._vwo_mt = window.name
                } else if (window._vwo_tm.length) {
                    window._vwo_mt = window._vwo_tm
                } else if (location.href.indexOf("_vis_opt_preview_combination") !== -1 && location.href.indexOf("_vis_test_id") !== -1) {
                    window._vwo_mt = "sharedPreview"
                }
                if (window._vwo_mt !== "live") {
                    if (!getMode("_vwo_cc")) {
                        _vwo_code.load('https://dev.visualwebsiteoptimizer.com/j.php?mode=' + encodeURIComponent(window._vwo_mt) + '&a=499844&f=1&u=' + encodeURIComponent(window._vis_opt_url || document.URL));
                    } else {
                        (function () {
                                window._vwo_code && window._vwo_code.finish();
                                _vwo_ccc = {
                                    u: "/j.php?a=499844&u=https%3A%2F%2Fwww.furbysofie.dk%2F&f=1&r=0.4472233574462825"
                                };
                                var s = document.createElement("script");
                                s.src = "https://app.vwo.com/visitor-behavior-analysis/dist/codechecker/cc.min.js?r=" + Math.random();
                                document.head.appendChild(s)
                            }
                        )()
                    }
                }
            } catch (e) {
                var b = new Image;
                b.src = "https://dev.visualwebsiteoptimizer.com/e.gif?s=mode_det&e=" + encodeURIComponent(e && e.stack && e.stack.substring(0, 1e3));
                aC && window._vwo_code.finish()
            }
        }
    )();
    if (window._vwo_mt === 'live') {
        window.VWO = window.VWO || [];
        window.VWO.push(['fetchPCSettings']);
        ;window.VWO = window.VWO || [];
        window.VWO.push(['modifyClickPauseTime', {
            time: 0
        }]);
        _vwo_code.sT = _vwo_code.finished();
        (function (c, a, e, d, b, z) {
                function f(a, b, d) {
                    e.cookie = a + "=" + b + "; expires=" + new Date(864e5 * d + +new Date).toGMTString() + "; domain=" + c + "; path=/"
                }

                -1 == e.cookie.indexOf("_vis_opt_out") && -1 == d.location.href.indexOf("vwo_opt_out=1") && (a = e.cookie.replace(/(?:(?:^|.*;\s*)_vwo_uuid_v2\s*=\s*([^;]*).*$)|^.*$/, "$1") || a,
                    a = a.split("|"),
                    b = new Image,
                    c = d.location.hostname || c,
                    b.src = "https://dev.visualwebsiteoptimizer.com/v.gif?cd=" + (window._vis_opt_cookieDays || 0) + "&a=499844&d=" + encodeURIComponent(c) + "&u=" + a[0] + "&h=" + a[1] + "&t=" + z + "&r=" + Math.random(),
                    d.vwo_iehack_queue = [b],
                    f("_vwo_uuid_v2", a.join("|"), 366))
            }
        )("furbysofie.dk", "DE72A45EDB2B29E60677C6E3AD13323FC|356d5ce43869695d2db57a1cbce20209", document, window, 0, _vwo_code.sT);
        var _vwo_acc_id = 499844;
        clearTimeout(_vwo_settings_timer);
        _vwo_exp_ids = [],
            _vwo_exp = {};
        window.VWO = window.VWO || [];
        window.VWO.data = {
            "rp": 30,
            "noSS": false,
            "pc": {
                "a": 100,
                "t": 0
            },
            "url": {},
            "ts": 1618637079
        };
        var _vwo_style = document.getElementById('_vis_opt_path_hides')
            ,
            _vwo_css = window._vwo_el_style || '{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}';
        if (_vwo_style) {
            _vwo_style.parentNode.removeChild(_vwo_style);
        }
        (function () {
                window.VWO = window.VWO || [];
                var pollInterval = 100;
                var _vis_data = {};
                var intervalObj = {};
                var analyticsTimerObj = {};
                var experimentListObj = {};
                window.VWO.push(["onVariationApplied", function (data) {
                    if (!data) {
                        return
                    }
                    var expId = data[1]
                        , variationId = data[2];
                    if (expId && variationId && ["VISUAL_AB", "VISUAL", "SPLIT_URL"].indexOf(window._vwo_exp[expId].type) > -1) {
                    }
                }
                ])
            }
        )();
        window.VWO.data.vi = window.VWO.data.vi || {
            "os": "MacOS",
            "de": "Other",
            "dt": "desktop",
            "br": "Chrome"
        };
        window.VWO.push(['enableSPA']);
        VWO.load_co = function (a) {
            var b = document.createElement('script');
            b.src = a;
            b.crossOrigin = 'anonymous';
            b.type = 'text/javascript';
            b.innerText;
            b.onerror = function () {
                _vwo_code.finish();
            }
            ;
            document.getElementsByTagName('head')[0].appendChild(b);
        }
        var _vwo_cookieDomain = 'furbysofie.dk'
            , _vwo_uuid = 'DE72A45EDB2B29E60677C6E3AD13323FC';
        window.VWO.data.as = "r3.visualwebsiteoptimizer.com";
        var _vwo_library_timer = setTimeout(function () {
            _vwo_code.finish()
        }, _vwo_code.library_tolerance());
        var _vis_opt_file = 'web/djIkdGU6Ny4wOmFzeW5jJWdxdWVyeQ==/tag-c9d810bc9adac9b6c876bfeeb0f74b35.js'
            ,
            _vis_opt_lib = (typeof _vis_opt_lib == 'undefined') ? 'https://dev.visualwebsiteoptimizer.com/' + _vis_opt_file : _vis_opt_lib;
        VWO.load_co(_vis_opt_lib);
        (function () {
                VWO._ = VWO._ || {};
                var ctId = +new Date()
                    , dtc = VWO._.dtc = {
                    ctId: ctId,
                    js: {},
                    tag: ['https://dev.visualwebsiteoptimizer.com/web/djIkdHI6Ny4w/tag-a2e7bdbb07b0d9cf2efe65392711bbd2.js']
                };
                dtc.js[ctId] = function () {
                    var cb = function () {
                        setTimeout(function () {
                            for (var i = 0; i < VWO._.dtc.tag.length; i++) {
                                VWO._.coreLib.lS(VWO._.dtc.tag[i])
                            }
                        }, 1000)
                    };
                    if (document.readyState == 'complete')
                        cb();
                    else
                        window.addEventListener('load', cb)
                }
                ;
                dtc.sC = function () {
                    return _vwo_s().f_e(_vwo_s().dt(), 'mobile')
                }
                ;
                ;
            }
        )();
        VWO._.dtc.tC = function () {
            return _vwo_t.cm('eO', 'js', VWO._.dtc.ctId);
        }
        ;
        ;window.VWO = window.VWO || [];
        window.VWO.data = window.VWO.data || {};
        VWO.data.content = {
            "fns": {
                "list": {
                    "vn": 1,
                    "args": {
                        "1": {}
                    }
                }
            }
        };
        ;window.VWO = window.VWO || [];
        window.VWO._ = window.VWO._ || {};
        VWO._.ac = VWO._.ac || {};
        VWO._.ac.dNdOfst = 1000;
    }
} catch (e) {
    _vwo_code.finish();
    var b = new Image;
    b.src = "https://dev.visualwebsiteoptimizer.com/e.gif?a=499844&s=j.php&e=" + encodeURIComponent(e && e.message && e.message.substring(0, 1000))
}
