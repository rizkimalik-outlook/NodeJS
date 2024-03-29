var Cookie = function() {
    function a() {}
    return a.set = function(a, b, c, d, e, f) {
        void 0 === c && (c = null), void 0 === d && (d = null), void 0 === e && (e = null), void 0 === f && (f = !1);
        var g = a + "=" + encodeURIComponent(b.toString()) + "; ";
        if (g += "path=" + (d || "/") + "; ", c)
            if ("string" == typeof c || c instanceof String) g += "expires=" + c + "; ";
            else {
                var h = new Date;
                h.setTime(h.getTime() + 1e3 * c), g += "expires=" + h.toUTCString() + "; "
            } e && (g += "domain=" + e + "; "), f && (g += "secure; "), document.cookie = g
    }, a.get = function(a) {
        for (var b = a + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
            for (var e = c[d];
                " " == e.charAt(0);) e = e.substring(1);
            if (0 == e.indexOf(b)) return decodeURIComponent(e.substring(b.length, e.length))
        }
        return null
    }, a.check = function(a) {
        return null !== this.get(a)
    }, a.remove = function(a) {
        this.set(a, "", "Thu, 01 Jan 1970 00:00:01 GMT")
    }, a
}(),
WidgetDetect = function() {
    function a() {}
    return a.isIOS = function() {
        return /ip(hone|od|ad)/i.test(a.getUserAgent())
    }, a.isAndroid = function() {
        return -1 !== a.getUserAgent().indexOf("android")
    }, a.isMobile = function() {
        var b = a.isIOS() || a.isAndroid();
        if (!1 === b) {
            var c = a.getUserAgent();
            b = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(c) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(c.substr(0, 4))
        }
        return b
    }, a.getUserAgent = function() {
        return navigator.userAgent || navigator.vendor || window.opera
    }, a
}(),
WidgetDOM = function() {
    function a() {}
    return a.addStyle = function(a) {
        var b = document.createElement("style");
        b.type = "text/css", b.textContent = a, document.body.insertBefore(b, document.body.getElementsByTagName("*")[0])
    }, a.addScript = function(a, b) {
        void 0 === b && (b = null);
        var c = document.createElement("script");
        c.setAttribute("src", a), c.setAttribute("type", "text/javascript"), c.setAttribute("async", "true"), b && (c.onload = b), document.body.appendChild(c)
    }, a.addInlineScript = function(a, b) {
        void 0 === b && (b = null);
        var c = document.createElement("script");
        c.innerHTML = a, c.setAttribute("type", "text/javascript"), b && (c.onload = b), document.body.appendChild(c)
    }, a.unsetClass = function(a, b) {
        a.className = (" " + a.className + " ").replace(" " + b + " ", " ").replace(/^ /, "").replace(/ $/, "")
    }, a.hasClass = function(a, b) {
        return a.className == b || -1 !== (" " + a.className + " ").indexOf(" " + b + " ")
    }, a.addMeta = function(a) {
        var b = document.createElement("meta");
        b.id = a, b.name = "viewport", b.content = "width=device-width, initial-scale=1.0", document.getElementsByTagName("head")[0].appendChild(b)
    }, a.isViewportExist = function() {
        for (var a = document.getElementsByTagName("meta"), b = 0; b < a.length; b++)
            if ("viewport" === a[b].name) return !0;
        return !1
    }, a.addLink = function(a) {
        var b = document.createElement("link");
        b.type = "text/css", b.href = a, b.rel = "stylesheet", document.getElementsByTagName("head")[0].appendChild(b)
    }, a.addDiv = function(a, b, c) {
        void 0 === c && (c = !0);
        var d = document.createElement("div");
        return d.id = a, "string" == typeof b || b instanceof String ? d.innerHTML = b.toString() : d.appendChild(b), c ? document.body.insertBefore(d, document.body.getElementsByTagName("*")[0]) : document.body.appendChild(d), d
    }, a.addDivClear = function(b) {
        var c = document.createElement("div");
        return a.setClass(c, "clear"), b.appendChild(c), b
    }, a.addMetricsIframe = function(a, b) {
        var c = document.createElement("iframe");
        c.id = b, c.style.display = "none", c.setAttribute("src", a), document.body.appendChild(c)
    }, a
}();
WidgetDOM.setClass = function(a, b) {
WidgetDOM.hasClass(a, b) || (a.className += " " + b)
}, WidgetDOM.toggleClass = function(a, b) {
WidgetDOM.hasClass(a, b) ? WidgetDOM.unsetClass(a, b) : WidgetDOM.setClass(a, b)
};
var WidgetHelper = function() {
    function a() {}
    return a.encodeGetParams = function(a) {
        var b = [];
        for (var c in a) a.hasOwnProperty(c) && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
        return 0 === b.length ? "" : b.join("&")
    }, a.extend = function() {
        for (var a = [], b = 0; b < arguments.length; b++) a[b] = arguments[b];
        if (0 === a.length) return null;
        if (1 === a.length) return a[0];
        for (var c = a[0], d = 1; d < a.length; d++) {
            var e = a[d];
            for (var f in e) e.hasOwnProperty(f) && (c[f] = e[f])
        }
        return c
    }, a.isArray = function(a) {
        return Array.isArray ? Array.isArray(a) : "[object Array]" === Object.prototype.toString.call(a)
    }, a.isObject = function(a) {
        return null !== a && "object" == typeof a
    }, a.isString = function(a) {
        return "string" == typeof a
    }, a
}(),
WidgetElement = function() {
    function a() {}
    return a.getCssFromElement = function(a) {
        var b = window.getComputedStyle(a);
        return b || null
    }, a.getCssPropertyFromElement = function(b, c) {
        var d = a.getCssFromElement(b);
        return d && d[c] && "none" !== d[c] ? d[c] : null
    }, a.getCssMaxWIdthFromElement = function(b) {
        var c = a.getCssPropertyFromElement(b, "maxWidth");
        if (!c) return null;
        try {
            return parseInt(c.replace("px", ""))
        } catch (a) {
            return null
        }
    }, a.getCssWIdthFromElement = function(b) {
        var c = a.getCssPropertyFromElement(b, "width");
        if (!c) return null;
        try {
            return parseInt(c.replace("px", ""))
        } catch (a) {
            return null
        }
    }, a.getHTMLChildren = function(b) {
        try {
            var c = b.children;
            if (c) return c
        } catch (a) {}
        for (var d = [], e = 0; e < b.childNodes.length; e++) {
            var f = b.childNodes[e];
            a.isHTMLElement(f) && d.push(f)
        }
        return d
    }, a.isHTMLElement = function(a) {
        return !!a.getAttribute
    }, a
}(),
WhWidgetSendButton = function() {
    function a() {}
    return a.getMetricsIframeId = function() {
        return "iframe-metrics-" + a.widgetWrapperId
    }, a.checkParams = function(a, b, c) {
        return !(!a || 0 === String(a).length) && !(!b || 0 === String(b).length)
    }, a.checkDocumentIsLoading = function() {
        return "loading" === document.readyState
    }, a.addMetricsIframe = function(b, c, d) {
        var e = {
            page_id: d.facebook,
            source: window.location.hostname,
            referrer: window.document.referrer
        };
        WidgetDOM.addMetricsIframe(c + "//" + b + "/widget/metrics?" + WidgetHelper.encodeGetParams(e), a.getMetricsIframeId())
    }, a.clear = function() {
        var b = document.getElementById(a.getMetricsIframeId());
        if (null !== b) {
            b.parentNode.removeChild(b)
        }
    }, a.init = function(b, c, d) {
        if (b = b.replace("whatshelp.io", "getbutton.io"), b = b.replace("wh.test", "getbutton.test"), a.checkParams(b, c, d)) {
            a.clear();
            var e = {
                wrapperId: a.widgetWrapperId,
                host: b,
                proto: c,
                clientHostname: window.location.hostname,
                isMobile: WidgetDetect.isMobile()
            };
            d = WidgetInitializer.checkAndClearProOptions(d, window.location.hostname), WidgetDetect.isMobile() && d.hasOwnProperty("mobile") && !1 === d.mobile || !WidgetDetect.isMobile() && d.hasOwnProperty("desktop") && !1 === d.desktop || WidgetInitializer.widgetInitialize("container", e, d)
        }
    }, a
}();
WhWidgetSendButton.widgetWrapperId = "wh-widget-send-button";
var WidgetInitializer = function() {
function a() {}
return a.widgetInitialize = function(b, c, d) {
    var e = a.initParams(c),
        f = a.initOptions(d, e);
    switch (b) {
        case "mobile":
            a.whWidgetObject = new WidgetSendButtonMobile(e, f);
            break;
        case "container":
            a.whWidgetObject = new WidgetSendButtonContainer(e, f);
            break;
        case "desktop":
            a.whWidgetObject = new WidgetSendButtonDesktop(e, f)
    }
    return a.whWidgetObject
}, a.initParams = function(a) {
    var b = {
        wrapperId: a.wrapperId,
        clientHostname: a.clientHostname,
        proto: "",
        host: "",
        staticHost: "",
        showHelloPopup: !!a.showHelloPopup,
        parentWrapperId: a.parentWrapperId,
        isMobile: a.isMobile
    };
    return b.proto = "https:" === a.proto ? "https:" : "http:", b.host = a.host, b
}, a.initOptions = function(b, c) {
    var d = b;
    return -1 === a.supportedPosition.indexOf(d.position) && (d.position = a.RIGHT_POSITION), d.button_color || (d.button_color = a.DEFAULT_BUTTON_COLOR), d.hasOwnProperty("branding") || (d.branding = !0), d.hasOwnProperty("shift_vertical") || (d.shift_vertical = 0), d.hasOwnProperty("shift_horizontal") || (d.shift_horizontal = 0), d = a.checkAndClearProOptions(d, c.clientHostname)
}, a.checkAndClearProOptions = function(b, c) {
    var d = b.alias ? b.alias.filter(function() {
        return !0
    }) : [];
    return b.domain && d.push(b.domain), b.hasOwnProperty("domain") && b.hasOwnProperty("key") && b.domain && b.key && -1 !== a.getAvailableProOptionsDomains(d).indexOf(c.toLowerCase()) ? b.domain = a.prepareDomain(b.domain) : (b.ga = !1, b.branding = !0, b.mobile = !0, b.desktop = !0, delete b.greeting, b.shift_vertical = 0, b.shift_horizontal = 0, b.domain = null, b.key = null), b
}, a.prepareDomain = function(a) {
    var b = a.toLowerCase().replace(/^https?:\/\//, "").split(/[\/?#]/)[0];
    return "www." === b.substr(0, 4) && (b = b.substr(4)), b
}, a.getAvailableProOptionsDomains = function(b) {
    for (var c = [], d = 0, e = b; d < e.length; d++) {
        var f = e[d],
            g = a.prepareDomain(f);
        c.push(g), c.push("www." + g), c.push("m." + g)
    }
    return c
}, a
}();
WidgetInitializer.DEFAULT_BUTTON_COLOR = "#ff6550", WidgetInitializer.LEFT_POSITION = "left", WidgetInitializer.RIGHT_POSITION = "right", WidgetInitializer.supportedPosition = [WidgetInitializer.LEFT_POSITION, WidgetInitializer.RIGHT_POSITION], WidgetInitializer.whWidgetObject = null;
var WidgetSendButtonBase = function() {
    function a(a, b, c) {
        var d = this;
        this.widgetState = null, this.animationControl = null, this.container = null, this.reInitWidget = function(a) {
            d.goState(d.widgetState.baseState), d.options = WidgetInitializer.initOptions(a, d.params), d.reBuildWidget()
        }, this.resize = function(a) {
            if (null !== d.params.parentWrapperId && void 0 !== d.params.parentWrapperId) {
                var b = a && a.length > 0 ? a[0] : null;
                if (null !== b && b.hasOwnProperty("width") && b.hasOwnProperty("height")) return void ParentWindowHelper.resize(d.params.parentWrapperId, b.width, b.height);
                var c = WidgetSize.getSize(d);
                null !== c && ParentWindowHelper.resize(d.params.parentWrapperId, b && b.width ? b.width + 1 : c.width + 1, b && b.height ? b.height : c.height)
            }
        }, this.onClickButton = function(a) {
            if (!d.animationControl.isRunAnimation()) {
                var b = a[0];
                d.slider.isActivator(b) ? StateMashine.WIDGET_STATE_ACTIVATOR === d.widgetState.getState() || StateMashine.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION === d.widgetState.getState() || StateMashine.WIDGET_STATE_HELLO === d.widgetState.getState() ? d.slider.isSingleMode() ? d.goState(StateMashine.WIDGET_STATE_BUTTON_ACTION, b) : d.goState(StateMashine.WIDGET_STATE_SLIDER) : d.goState(d.params.isMobile ? StateMashine.WIDGET_STATE_ACTIVATOR : StateMashine.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION) : d.goState(StateMashine.WIDGET_STATE_BUTTON_ACTION, b)
            }
        }, this.onMouseOver = function() {
            d.animationControl.isRunAnimation() || EventManager.publish(EventManager.EVENT_RESIZE_WIDGET)
        }, this.onMouseOut = function() {
            d.animationControl.isRunAnimation() || EventManager.publish(EventManager.EVENT_RESIZE_WIDGET)
        }, this.onMouseenterButton = function(a) {
            if (!d.animationControl.isRunAnimation()) {
                var b = a[0];
                if (!b) return void(d.slider.isSingleMode() ? d.goState(StateMashine.WIDGET_STATE_BUTTON_ACTION, d.slider.getOrderButtons()[0]) : d.goState(StateMashine.WIDGET_STATE_SLIDER));
                d.slider.isActivator(b) && (StateMashine.WIDGET_STATE_ACTIVATOR !== d.widgetState.getState() && StateMashine.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION !== d.widgetState.getState() && StateMashine.WIDGET_STATE_HELLO !== d.widgetState.getState() || (d.slider.isSingleMode() ? d.goState(StateMashine.WIDGET_STATE_BUTTON_ACTION, b) : d.goState(StateMashine.WIDGET_STATE_SLIDER)))
            }
        }, this.onClickClosePopup = function() {
            d.animationControl.isRunAnimation() || d.goState(d.params.isMobile ? StateMashine.WIDGET_STATE_ACTIVATOR : StateMashine.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION)
        }, this.onCloseHelloPopup = function() {
            d.animationControl.isRunAnimation() || d.goState(d.params.isMobile ? StateMashine.WIDGET_STATE_ACTIVATOR : StateMashine.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION)
        }, this.goState = function(a, b) {
            if (void 0 === b && (b = null), !d.animationControl.isRunAnimation()) {
                var c = d.widgetState.getState();
                if (d.widgetState.canGoState(c, a)) {
                    switch (d.params.showHelloPopup = !1, c) {
                        case StateMashine.WIDGET_STATE_HELLO:
                            EventManager.publish(EventManager.EVENT_CLOSE_POPUP);
                            break;
                        case StateMashine.WIDGET_STATE_ACTIVATOR:
                            break;
                        case StateMashine.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION:
                            EventManager.publish(EventManager.EVENT_HIDE_CALL_TO_ACTION);
                            break;
                        case StateMashine.WIDGET_STATE_BUTTON_ACTION:
                            d.slider.goStateAsOpen(), EventManager.publish(EventManager.EVENT_CLOSE_POPUP);
                            break;
                        case StateMashine.WIDGET_STATE_SLIDER:
                            d.slider.goStateAsOpen()
                    }
                    setTimeout(function() {
                        d.callbackGoToState(d, a, b)
                    }, 100)
                }
            }
        }, this.callbackGoToState = function(a, b, c, e) {
            if (void 0 === c && (c = null), void 0 === e && (e = 0), !(e > 100))
                if (a.animationControl.isRunAnimation()) setTimeout(function() {
                    a.callbackGoToState(a, b, c, e + 1)
                }, 100);
                else switch (b) {
                    case StateMashine.WIDGET_STATE_ACTIVATOR:
                        d.slider.goStateAsOpen(), d.widgetState.goState(StateMashine.WIDGET_STATE_ACTIVATOR);
                        break;
                    case StateMashine.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION:
                        d.widgetState.goState(StateMashine.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION) && EventManager.publish(EventManager.EVENT_SHOW_CALL_TO_ACTION);
                        break;
                    case StateMashine.WIDGET_STATE_BUTTON_ACTION:
                        c.isExistActionState() ? d.slider.goStateAsClose() : d.slider.goStateAsOpen(), c.runButtonAction(), c.isExistActionState() ? d.widgetState.goState(StateMashine.WIDGET_STATE_BUTTON_ACTION) : d.widgetState.goState(StateMashine.WIDGET_STATE_ACTIVATOR);
                        break;
                    case StateMashine.WIDGET_STATE_SLIDER:
                        d.slider.goStateAsSlide(), d.widgetState.goState(StateMashine.WIDGET_STATE_SLIDER)
                }
        }, this.params = a, this.options = b, this.slider = c, this.widgetState = new StateMashine(StateMashine.WIDGET_STATE_ACTIVATOR, this.params.isMobile), this.animationControl = new AnimationControl, this.buildWidget(), this.container = document.getElementById(this.params.wrapperId), EventManager.subscribe(EventManager.EVENT_RESIZE_WIDGET, this.resize), EventManager.subscribe(EventManager.EVENT_MOUSEENTER_MSG_BUTTON, this.onMouseenterButton), EventManager.subscribe(EventManager.EVENT_MOUSE_OUT_MSG_BUTTON, this.onMouseOut), EventManager.subscribe(EventManager.EVENT_MOUSE_OVER_MSG_BUTTON, this.onMouseOver), EventManager.subscribe(EventManager.EVENT_CLICK_MSG_BUTTON, this.onClickButton), EventManager.subscribe(EventManager.EVENT_CLICK_CLOSE_POPUP, this.onClickClosePopup), EventManager.subscribe(EventManager.EVENT_CLOSE_HELLO_POPUP, this.onCloseHelloPopup), this.resize()
    }
    return a.prototype.getContainer = function() {
        return this.container
    }, a.prototype.buildWidget = function() {
        this.widgetState.initJumpRules(this.slider.isSingleMode()), this.slider.renderButtonList()
    }, a.prototype.reBuildWidget = function() {
        this.slider.setOptions(this.options), this.widgetState.initJumpRules(this.slider.isSingleMode()), this.slider.renderButtonList(), this.resize()
    }, a
}(),
ParentWindowHelper = function() {
    function a() {}
    return a.resize = function(a, b, c) {
        var d = {
            name: "wh-resize-widget",
            elemId: a,
            width: b,
            height: c
        };
        window.parent.postMessage(JSON.stringify(d), "*")
    }, a.changeURL = function(a, b) {
        var c = {
            name: "wh-change-url",
            url: a,
            type: b
        };
        window.parent.postMessage(JSON.stringify(c), "*")
    }, a.openTab = function(a, b) {
        var c = {
            name: "wh-open-tab",
            url: a,
            type: b
        };
        window.parent.postMessage(JSON.stringify(c), "*")
    }, a.buttonClicked = function(a) {
        var b = {
            name: "wh-click-button",
            type: a
        };
        window.parent.postMessage(JSON.stringify(b), "*")
    }, a
}(),
WidgetSize = function() {
    function a() {}
    return a.getSize = function(a) {
        var b = a.getContainer();
        return null === b ? null : {
            width: b.clientWidth,
            height: b.clientHeight
        }
    }, a
}(),
Animates = function() {
    function a(b, c, d, e) {
        void 0 === e && (e = ""), this.object = b, this.type = c, this.direction = d, this.status = e || a.ANIMATE_STATUS_RUNNING
    }
    return a.prototype.isEqual = function(a) {
        return this.object === a.object && this.type === a.type && this.direction === a.direction
    }, a
}();
Animates.ANIMATE_STATUS_RUNNING = "animateStatusRunnig", Animates.ANIMATE_STATUS_CLOSE = "animateStatusClose";
var AnimationControl = function() {
    function a() {
        var a = this;
        this.runningAnimates = [], this.onUpdateAnimates = function(b) {
            for (var c = b[0], d = 0; d < a.runningAnimates.length; d++)
                if (a.runningAnimates[d].isEqual(c)) return void(c.status === Animates.ANIMATE_STATUS_CLOSE && a.runningAnimates.splice(d));
            c.status === Animates.ANIMATE_STATUS_RUNNING && a.runningAnimates.push(c)
        }, this.isRunAnimation = function() {
            return a.runningAnimates.length > 0
        }, EventManager.subscribe(EventManager.EVENT_UPDATE_ANIMATES_STATUS, this.onUpdateAnimates)
    }
    return a
}(),
StateMashine = function() {
    function a(b, c) {
        void 0 === b && (b = null), void 0 === c && (c = !1);
        var d = this;
        this.state = a.WIDGET_STATE_ACTIVATOR, this.isMobile = !1, this.stateJumps = {}, this.getState = function() {
            return d.state
        }, this.setState = function(a) {
            d.state = a
        }, this.goState = function(a) {
            return !!d.canGoState(d.state, a) && (d.setState(a), !0)
        }, this.initJumpRules = function(b) {
            d.stateJumps = a.stateJumpRules(b, d.isMobile)
        }, this.canGoState = function(a, b) {
            if (d.stateJumps[a])
                for (var c = 0; c < d.stateJumps[a].length; c++)
                    if (d.stateJumps[a][c] === b) return !0;
            return !1
        }, this.isMobile = c, this.state = b || a.WIDGET_STATE_ACTIVATOR, this.isMobile ? this.baseState = a.WIDGET_STATE_ACTIVATOR : this.baseState = a.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION
    }
    return a.stateJumpRules = function(b, c) {
        void 0 === c && (c = !1);
        var d = {};
        return d[a.WIDGET_STATE_ACTIVATOR] = [], d[a.WIDGET_STATE_SLIDER] = [c ? a.WIDGET_STATE_ACTIVATOR : a.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION, a.WIDGET_STATE_BUTTON_ACTION], d[a.WIDGET_STATE_BUTTON_ACTION] = [c ? a.WIDGET_STATE_ACTIVATOR : a.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION], c || (d[a.WIDGET_STATE_HELLO] = [a.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION, a.WIDGET_STATE_BUTTON_ACTION], d[a.WIDGET_STATE_ACTIVATOR].push(a.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION), d[a.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION] = []), b ? (d[a.WIDGET_STATE_ACTIVATOR].push(a.WIDGET_STATE_BUTTON_ACTION), c || d[a.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION].push(a.WIDGET_STATE_BUTTON_ACTION)) : (d[a.WIDGET_STATE_ACTIVATOR].push(a.WIDGET_STATE_SLIDER), c || (d[a.WIDGET_STATE_HELLO].push(a.WIDGET_STATE_SLIDER), d[a.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION].push(a.WIDGET_STATE_SLIDER))), d
    }, a
}();
StateMashine.WIDGET_STATE_ACTIVATOR = "widgetStateActivator", StateMashine.WIDGET_STATE_ACTIVATOR_WITH_CALL_TO_ACTION = "widgetStateActivatorWithCallToAction", StateMashine.WIDGET_STATE_HELLO = "widgetStateHello", StateMashine.WIDGET_STATE_SLIDER = "widgetStateSlider", StateMashine.WIDGET_STATE_BUTTON_ACTION = "widgetStateButtonAction";
var WidgetSendButtonContainer = function() {
function a(a, b) {
    var c = this;
    this.container = null, this.onPostMessage = function(a) {
        if (a.origin.replace(/^https?:\/\//, "") === "widget." + c.params.host) try {
            var b = JSON.parse(a.data);
            if (null === b || !b.hasOwnProperty("name")) return;
            "wh-resize-widget" === b.name && c.onPostMessageResize(b), "wh-change-url" === b.name && c.onPostMessageClickButton(b, c.onPostMessageChangeUrl), "wh-open-tab" === b.name && (c.onPostMessageClickButton(b), c.onPostMessageOpenTab(b)), "wh-click-button" === b.name && c.onPostMessageClickButton(b)
        } catch (a) {}
    }, this.params = a, this.options = b, this.addStyles(), this.buildWidget(), window.addEventListener("message", this.onPostMessage, !1)
}
return a.prototype.reInitWidget = function(a) {
    this.options = WidgetInitializer.initOptions(a, this.params)
}, a.prototype.getContainer = function() {
    return this.container
}, a.prototype.onPostMessageClickButton = function(a, b) {
    if (void 0 === b && (b = null), this.options.ga) {
        if (a.type && "activator" !== a.type)
            if (window.hasOwnProperty("gtag")) {
                var c = {
                    event_category: "WhatsHelp Widget",
                    event_label: "click_" + a.type
                };
                null !== b && (c.event_callback = function() {
                    b(a)
                }), window.gtag("event", "click", c)
            } else if (window.hasOwnProperty("ga")) {
            var d = {
                eventCategory: "WhatsHelp Widget",
                eventAction: "click_" + a.type
            };
            null !== b && (d.hitCallback = function() {
                b(a)
            });
            var e = window.ga.getAll()[0];
            e ? e.send("event", "click", d) : null !== b && b(a)
        } else null !== b && b(a)
    } else null !== b && b(a)
}, a.prototype.onPostMessageResize = function(a) {
    var b = document.getElementById(a.elemId);
    b && (b.style.width = a.width.toString() + "px", b.style.height = a.height.toString() + "px")
}, a.prototype.onPostMessageChangeUrl = function(a) {
    a.url && window.location.assign(a.url)
}, a.prototype.onPostMessageOpenTab = function(a) {
    a.url && window.open(a.url, "_blank")
}, a.prototype.clear = function() {
    var a = document.getElementById(this.params.wrapperId);
    if (null !== a) {
        a.parentNode.removeChild(a)
    }
}, a.prototype.buildWidget = function() {
    this.clear();
    var b = document.createElement("iframe");
    b.id = a.getIframeId(this.params.wrapperId), b.setAttribute("title", 'GetButton.io'), b.setAttribute("src", this.getWidgetUrl());
    var c = WidgetDOM.addDiv(this.params.wrapperId, b, !1);
    if (this.options.shift_horizontal > 0 && (c.style[this.options.position] = this.options.shift_horizontal + "px"), this.options.shift_vertical > 0) {
        var d = c.getAttribute("style");
        null === d && (d = ""), c.setAttribute("style", d + " bottom: " + this.options.shift_vertical + "px !important;")
    }
    WidgetDOM.setClass(c, "wh-widget-" + this.options.position), this.container = c, this.params.isMobile && !WidgetDOM.isViewportExist() && WidgetDOM.addMeta("wh-viewport")
}, a.getIframeId = function(a) {
    return a + "-iframe"
}, a.prototype.getWidgetUrl = function() {
    var b = 0;
    Cookie.check(a.cookieName) || (b = 1, Cookie.set(a.cookieName, "1", a.cookieExpire));
    var c = WidgetHelper.extend({}, this.options, {
        parentWrapperId: this.params.wrapperId,
        clientHostname: this.params.clientHostname,
        showHelloPopup: b,
        isMobile: this.params.isMobile ? 1 : 0
    });
    return this.params.proto + "//widget." + this.params.host + "/widget/wSendButton?" + WidgetHelper.encodeGetParams(c)
}, a.prototype.addStyles = function() {
    WidgetDOM.addStyle(this.getStyles())
}, a.prototype.getStyles = function() {
    return "    #" + this.params.wrapperId + " {        margin: 0 !important;        padding: 0 !important;        position: fixed !important;        z-index: 16000160 !important;        bottom: 0 !important;        text-align: center !important;        height: 90px;        width: 60px;        visibility: visible;        transition: none !important;    }    #" + this.params.wrapperId + ".wh-widget-right {        right: 0;    }    #" + this.params.wrapperId + ".wh-widget-left {        left: 10px;    }    #" + this.params.wrapperId + " iframe {        width: 100%;        height: 100%;        border: 0;    }div.clear {    clear: both;}"
}, a
}();
WidgetSendButtonContainer.cookieName = "wh-widget-cookie", WidgetSendButtonContainer.cookieExpire = 86400;