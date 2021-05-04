try {
    var _vis_opt_heatmap = 0;
    _vwo_code.finishedNew = _vwo_code.finished;
    _vwo_code.finished = function() {
        return 0
    }
    ;
    window.VWO = window.VWO || [];
    window.VWO.data = window.VWO.data || {};
    if (!_vwo_code.finished() || _vis_opt_heatmap) {
        clearTimeout(_vwo_settings_timer);
        if (_vis_opt_heatmap && !document.getElementById('_vis_opt_path_hides')) {
            (function() {
                    var a = document.createElement('style');
                    a.setAttribute('id', '_vis_opt_path_hides');
                    a.setAttribute('type', 'text/css');
                    document.getElementsByTagName('head')[0].appendChild(a);
                }
            )()
        }
        var _vwo_acc_id = 499844
            , _vwo_exp_ids = []
            , _vwo_exp = {}
            , _vwo_cookieDomain = 'furbysofie.dk';
        window._vwo_pc = {};
        ;_vwo_isNewPreview = 1;
        _vwo_exp_ids.push('35');
        _vwo_exp['35'] = {
            "ss": null,
            "manual": false,
            "pc_traffic": 100,
            "version": 4,
            "combs": {
                "2": 0.5,
                "1": 0.5
            },
            "comb_n": {
                "2": "Variation-1",
                "1": "Control"
            },
            "type": "VISUAL_AB",
            "clickmap": 1,
            "goals": {
                "1": {
                    "excludeUrl": "",
                    "type": "ENGAGEMENT",
                    "urlRegex": "^.*$"
                }
            },
            "exclude_url": "",
            "sections": {
                "1": {
                    "path": "",
                    "segment": {
                        "2": 1,
                        "1": 1
                    },
                    "segmentObj": {},
                    "variation_names": {
                        "2": "Variation-1",
                        "1": "Control"
                    },
                    "variations": {
                        "2": "[{\"js\":\"var el,ctx=vwo_$(x);\\n\\\/*vwo_debug log(\\\"changeSRC\\\",\\\".slideshow > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1) > img:nth-of-type(1)\\\"); vwo_debug*\\\/(el=vwo_$(\\\".slideshow > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1) > img:nth-of-type(1)\\\")).vwoAttr({alt:\\\"Furbysofie\\\",title:\\\"\\\",border:\\\"\\\",src:\\\"https:\\\/\\\/cdn.shopify.com\\\/s\\\/files\\\/1\\\/0316\\\/6121\\\/files\\\/DRD5480_banner.jpg?v=1614770926\\\",loader:\\\"!0\\\",loaderConfig:{as:\\\"2.37s\\\",pc:\\\"#eeeff1\\\",sc:\\\"#d6d8e2\\\",id:\\\"23041069480\\\"},removedAttributes:[\\\"data-srcset\\\",\\\"srcset\\\",\\\"class\\\"]});\",\"xpath\":\".slideshow > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1) > img:nth-of-type(1)\"}]",
                        "1": "[]"
                    }
                }
            },
            "pgre": true,
            "urlRegex": "^https\\:\\\/\\\/furbysofie\\.dk\\\/?(?:[\\?#].*)?$",
            "segment_code": "true",
            "ps": true,
            "globalCode": {},
            "ibe": 1,
            "name": "Change Image flicker js",
            "url": "https%3A%2F%2Fwww.furbysofie.dk%2F",
            "status": "NOT_STARTED",
            "multiple_domains": 0
        };
        _vwo_exp['35'].third_party = {};
        _vwo_exp['35'].debug = {
            "l": 0,
            "s": 0,
            "iple": 0,
            "iho": 0,
            "pahi": null,
            "saber": null,
            "newQueryBox": null,
            "v": "2",
            "ts": 1618635527261,
            "app": "app",
            "td": 0,
            "cn": "undefined",
            "tg": 0,
            "alh": 0,
            "url": "https%253A%252F%252Fwww.furbysofie.dk%252F",
            "d": 0,
            "t": 0
        };
        _vwo_exp['35'].previewHash = 'cdb325318ab6757ef929c4560bd61139';
        ;var _vwo_style = document.getElementById('_vis_opt_path_hides')
            , _vwo_css = window._vwo_el_style || '{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}';
        var _vwo_text = ".slideshow > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1) > img:nth-of-type(1)" + _vwo_css;
        if (_vwo_style) {
            if (_vwo_style.styleSheet) {
                _vwo_style.styleSheet.cssText = _vwo_text;
            } else {
                var _vwo_textnode = document.createTextNode(_vwo_text);
                _vwo_style.appendChild(_vwo_textnode);
                _vwo_style.removeChild(_vwo_style.childNodes[0]);
            }
        }
    } else {
        window._vwo_settings_timed_out = 1;
    }
    var _vis_opt_file = 'web/djIkdGU6Ny4wOmFzeW5jJWRlYnVnJWdxdWVyeQ==/tag-cf1742533096bb15117c3f97f4ab88a0.js'
        , _vwo_library_timer = setTimeout('_vwo_code.finish()', _vwo_code.library_tolerance())
        , _vis_opt_lib = '//dev.visualwebsiteoptimizer.com/' + _vis_opt_file;
    _vwo_code.load(_vis_opt_lib);
    window.VWO = window.VWO || [];
    window.VWO.isSPA = true;
    window.VWO.push(['enableSPA']);
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
    window.VWO.data = window.VWO.data || {};
    window.VWO.data.vi = window.VWO.data.vi || {
        "os": "MacOS",
        "de": "Other",
        "dt": "desktop",
        "br": "Chrome"
    };
    ;VWO.DONT_IOS = true;
} catch (e) {
    _vwo_code.finish();
    var b = new Image;
    b.src = "https://dev.visualwebsiteoptimizer.com/e.gif?a=499844&s=j.php&e=" + encodeURIComponent(e && e.message && e.message.substring(0, 1000))
}
