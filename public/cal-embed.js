// Cal.com inline embed loader for /contact.
// Reads the booking link from #cal-inline[data-cal-link] (set server-side from
// CAL_LINK in src/pages/contact.astro) and mounts the inline scheduler. Lives in
// public/ (eslint-ignored, served verbatim) so the vendor snippet stays out of the
// .astro inline-script path that prettier can't parse.
(function (C, A, L) {
  const p = function (a, ar) {
    a.q.push(ar);
  };
  const d = C.document;
  C.Cal =
    C.Cal ||
    function (...ar) {
      const cal = C.Cal;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        d.head.appendChild(d.createElement('script')).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api = function (...apiArgs) {
          p(api, apiArgs);
        };
        const namespace = ar[1];
        api.q = api.q || [];
        if (typeof namespace === 'string') {
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace], ar);
          p(cal, ['initNamespace', namespace]);
        } else {
          p(cal, ar);
        }
        return;
      }
      p(cal, ar);
    };
})(window, 'https://app.cal.com/embed/embed.js', 'init');

(function () {
  const el = document.getElementById('cal-inline');
  const calLink = el && el.dataset.calLink;
  if (!calLink) return;
  Cal('init', { origin: 'https://cal.com' });
  Cal('inline', {
    elementOrSelector: '#cal-inline',
    calLink: calLink,
    layout: 'month_view',
  });
  Cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
})();
