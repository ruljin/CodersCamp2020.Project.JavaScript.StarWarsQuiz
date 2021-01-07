(() => {
  'use strict';
  var e,
    t,
    r,
    n = {
      190: (e, t, r) => {
        r.d(t, { Z: () => d });
        var n = r(645),
          o = r.n(n),
          a = r(667),
          i = r.n(a),
          c = r(242),
          s = o()(function (e) {
            return e[1];
          });
        s.push([
          e.id,
          '@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap);'
        ]);
        var l = i()(c);
        s.push([
          e.id,
          'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video,button,input,select,textarea{margin:0;padding:0;font:inherit}ul{list-style:none}html{box-sizing:border-box;font-size:62.5%}*,*::before,*::after{box-sizing:inherit}img,video{height:auto;max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td:not([align]),th:not([align]){text-align:left}.container{font-family:"Montserrat",sans-serif;background-color:#000;background:url(' +
            l +
            ') fixed;background-size:cover}.container--cover-page{width:100vw;height:100vh}.container--default{display:grid;grid-template-rows:min-content 1fr min-content;place-items:center}.container__header{width:100%;margin:3rem 0}.container__body{display:flex;justify-content:space-evenly;align-items:center}.container__footer{width:100%;margin:0 0 3rem 0}.button-container{display:flex;justify-content:space-evenly;align-items:center}.button{width:23rem;height:7rem;border:none;border-radius:.9rem;box-shadow:inset .2rem .3rem .4rem rgba(0,0,0,.5),.4rem .4rem 4rem #fac300;background-color:#fac300;color:#000;font-size:2.5rem;font-weight:600;cursor:pointer}.button--large{width:28rem;height:9rem;font-size:3.5rem}.button--alternative{background-color:#70b5f5;box-shadow:inset .2rem .3rem .4rem rgba(0,0,0,.5),.4rem .4rem 4rem #70b5f5}.banner{width:80%;height:8rem;border-radius:.9rem;margin:0 auto;display:grid;place-items:center;box-shadow:inset .2rem .3rem .4rem rgba(0,0,0,.5),.4rem .4rem 4rem #fac300;background-color:#fac300;color:#000;font-size:3.5rem;font-weight:600}.selector{width:20rem;height:6rem;border:none;border-radius:.9rem;background-color:#fff;color:#000;font-size:2.5rem;font-weight:600;cursor:pointer}.selector--static{outline:none;box-shadow:inset .2rem .3rem .4rem rgba(0,0,0,.5),.4rem .4rem 4rem #fac300;background-color:#fac300;cursor:default}.selector--selected{border:.5rem solid #fac300;box-shadow:.4rem .4rem 4rem #fac300}.text{color:#fff;font-size:2.5rem;font-weight:600}.text--uppercase{text-transform:uppercase}.text--alternative{color:#fac300}.text--large{font-size:3rem;font-weight:700}.table{border-radius:.9rem;background-color:#fff;font-size:2.5rem}.table__head{line-height:3;font-weight:700}.table__body{font-weight:600}.table__row--highlighted{background-color:#fac300}.table__data{padding:.5em 0}.table__row .table__data:first-child{padding-left:1.5em}.table__body .table__row:last-child .table__data{padding-bottom:1em}',
          ''
        ]);
        const d = s;
      },
      645: e => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var r = e(t);
                return t[2] ? '@media '.concat(t[2], ' {').concat(r, '}') : r;
              }).join('');
            }),
            (t.i = function (e, r, n) {
              'string' == typeof e && (e = [[null, e, '']]);
              var o = {};
              if (n)
                for (var a = 0; a < this.length; a++) {
                  var i = this[a][0];
                  null != i && (o[i] = !0);
                }
              for (var c = 0; c < e.length; c++) {
                var s = [].concat(e[c]);
                (n && o[s[0]]) ||
                  (r &&
                    (s[2]
                      ? (s[2] = ''.concat(r, ' and ').concat(s[2]))
                      : (s[2] = r)),
                  t.push(s));
              }
            }),
            t
          );
        };
      },
      667: e => {
        e.exports = function (e, t) {
          return (
            t || (t = {}),
            'string' != typeof (e = e && e.__esModule ? e.default : e)
              ? e
              : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                t.hash && (e += t.hash),
                /["'() \t\n]/.test(e) || t.needQuotes
                  ? '"'.concat(
                      e.replace(/"/g, '\\"').replace(/\n/g, '\\n'),
                      '"'
                    )
                  : e)
          );
        };
      },
      379: (e, t, r) => {
        var n,
          o = (function () {
            var e = {};
            return function (t) {
              if (void 0 === e[t]) {
                var r = document.querySelector(t);
                if (
                  window.HTMLIFrameElement &&
                  r instanceof window.HTMLIFrameElement
                )
                  try {
                    r = r.contentDocument.head;
                  } catch (e) {
                    r = null;
                  }
                e[t] = r;
              }
              return e[t];
            };
          })(),
          a = [];
        function i(e) {
          for (var t = -1, r = 0; r < a.length; r++)
            if (a[r].identifier === e) {
              t = r;
              break;
            }
          return t;
        }
        function c(e, t) {
          for (var r = {}, n = [], o = 0; o < e.length; o++) {
            var c = e[o],
              s = t.base ? c[0] + t.base : c[0],
              l = r[s] || 0,
              d = ''.concat(s, ' ').concat(l);
            r[s] = l + 1;
            var f = i(d),
              u = { css: c[1], media: c[2], sourceMap: c[3] };
            -1 !== f
              ? (a[f].references++, a[f].updater(u))
              : a.push({ identifier: d, updater: p(u, t), references: 1 }),
              n.push(d);
          }
          return n;
        }
        function s(e) {
          var t = document.createElement('style'),
            n = e.attributes || {};
          if (void 0 === n.nonce) {
            var a = r.nc;
            a && (n.nonce = a);
          }
          if (
            (Object.keys(n).forEach(function (e) {
              t.setAttribute(e, n[e]);
            }),
            'function' == typeof e.insert)
          )
            e.insert(t);
          else {
            var i = o(e.insert || 'head');
            if (!i)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            i.appendChild(t);
          }
          return t;
        }
        var l,
          d =
            ((l = []),
            function (e, t) {
              return (l[e] = t), l.filter(Boolean).join('\n');
            });
        function f(e, t, r, n) {
          var o = r
            ? ''
            : n.media
            ? '@media '.concat(n.media, ' {').concat(n.css, '}')
            : n.css;
          if (e.styleSheet) e.styleSheet.cssText = d(t, o);
          else {
            var a = document.createTextNode(o),
              i = e.childNodes;
            i[t] && e.removeChild(i[t]),
              i.length ? e.insertBefore(a, i[t]) : e.appendChild(a);
          }
        }
        function u(e, t, r) {
          var n = r.css,
            o = r.media,
            a = r.sourceMap;
          if (
            (o ? e.setAttribute('media', o) : e.removeAttribute('media'),
            a &&
              'undefined' != typeof btoa &&
              (n += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                ' */'
              )),
            e.styleSheet)
          )
            e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        }
        var m = null,
          h = 0;
        function p(e, t) {
          var r, n, o;
          if (t.singleton) {
            var a = h++;
            (r = m || (m = s(t))),
              (n = f.bind(null, r, a, !1)),
              (o = f.bind(null, r, a, !0));
          } else
            (r = s(t)),
              (n = u.bind(null, r, t)),
              (o = function () {
                !(function (e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e);
                })(r);
              });
          return (
            n(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap
                )
                  return;
                n((e = t));
              } else o();
            }
          );
        }
        e.exports = function (e, t) {
          (t = t || {}).singleton ||
            'boolean' == typeof t.singleton ||
            (t.singleton =
              (void 0 === n &&
                (n = Boolean(
                  window && document && document.all && !window.atob
                )),
              n));
          var r = c((e = e || []), t);
          return function (e) {
            if (
              ((e = e || []),
              '[object Array]' === Object.prototype.toString.call(e))
            ) {
              for (var n = 0; n < r.length; n++) {
                var o = i(r[n]);
                a[o].references--;
              }
              for (var s = c(e, t), l = 0; l < r.length; l++) {
                var d = i(r[l]);
                0 === a[d].references && (a[d].updater(), a.splice(d, 1));
              }
              r = s;
            }
          };
        };
      },
      242: (e, t, r) => {
        e.exports = r.p + '54488fba0f432c699bdc.png';
      }
    },
    o = {};
  function a(e) {
    if (o[e]) return o[e].exports;
    var t = (o[e] = { id: e, exports: {} });
    return n[e](t, t.exports, a), t.exports;
  }
  (a.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return a.d(t, { a: t }), t;
  }),
    (a.d = (e, t) => {
      for (var r in t)
        a.o(t, r) &&
          !a.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (a.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e;
      a.g.importScripts && (e = a.g.location + '');
      var t = a.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var r = t.getElementsByTagName('script');
        r.length && (e = r[r.length - 1].src);
      }
      if (!e)
        throw new Error(
          'Automatic publicPath is not supported in this browser'
        );
      (e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (a.p = e);
    })(),
    (e = a(379)),
    (t = a.n(e)),
    (r = a(190)),
    t()(r.Z, { insert: 'head', singleton: !1 }),
    r.Z.locals;
})();
