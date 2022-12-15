btf.isJqueryLoad(function() {

    // 气泡
    function bubble() {
        $('#page-header').circleMagic({
            radius: 10,
            density: .1,
            color: 'rgba(255,255,255,.5)',
            clearOffset: 0.99
        });
    }! function(p) {
        p.fn.circleMagic = function(t) {
            var o, a, n, r, e = !0,
                i = [],
                d = p.extend({ color: "rgba(255,0,0,.5)", radius: 10, density: .3, clearOffset: .2 }, t),
                l = this[0];

            function c() { e = !(document.body.scrollTop > a) }

            function s() { o = l.clientWidth, a = l.clientHeight, l.height = a + "px", n.width = o, n.height = a }

            function h() {
                if (e)
                    for (var t in r.clearRect(0, 0, o, a), i) i[t].draw();
                requestAnimationFrame(h)
            }
            function f() {
                var t = this;

                function e(again) {
                    t.pos.x = Math.random() * o,
                    t.pos.y = again ? 0 : Math.random() * a,
                    t.alpha = .1 +  d.clearOffset,
                    t.scale = 0.05 + .2 * Math.random(),
                    t.speed = Math.random() + 10,
                    "random" === d.color ? t.color = "rgba(255, 255, 255, 0.5)" : t.color = d.color }
                    t.pos = {},
                    e(),
                    this.draw = function() {
                        t.alpha <= 0 && e(true), // 判断 alpha 小于 0 就调用 e()
                        t.pos.y += t.speed,
                        //t.pos.x += Math.random() <= 0.5 ? -Math.random() : Math.random(),
                        // t.alpha -= 5e-4, // alpha 每次 draw 减少 0.005
                        r.beginPath(),
                        r.arc(t.pos.x, t.pos.y, t.scale * d.radius, 0, 2 * Math.PI, !1),
                        r.fillStyle = t.color, r.fill(), r.closePath()
                        if (t.pos.y >= a) {
                            t.alpha = 0
                        }
                }
            }! function() {
                o = l.offsetWidth, a = l.offsetHeight,
                    function() {
                        var t = document.createElement("canvas");
                            t.id = "canvas",
                            t.style.top = 0,
                            t.style.zIndex = 0,
                            t.style.pointerEvents = "none",
                            t.style.position = "absolute",
                            l.appendChild(t),
                            t.parentElement.style.overflow = "hidden"
                    }(), (n = document.getElementById("canvas")).width = o, n.height = a, r = n.getContext("2d");
                for (var t = 0; t < o * d.density; t++) {
                    var e = new f;
                    i.push(e)
                }
                h()
            }(), window.addEventListener("scroll", c, !1), window.addEventListener("resize", s, !1)
        }
    }(jQuery);

    // 调用气泡方法
    bubble();
    //
    function pageTop() {
        document.addEventListener('scroll-down-effects')[0]
    }
})
