/* Progressive enhancement: scroll-reveal + pointer-tracked card glow.
   No dependencies. Respects prefers-reduced-motion. */
(function () {
    'use strict';

    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---- Scroll reveal ------------------------------------------------------ */
    function initReveal() {
        var targets = document.querySelectorAll('.reveal');
        if (!targets.length) return;

        if (reduced || !('IntersectionObserver' in window)) {
            targets.forEach(function (el) { el.classList.add('is-visible'); });
            return;
        }

        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                var el = entry.target;
                /* Stagger is expressed as a CSS transition-delay so it is not
                   affected by background-tab timer throttling. */
                el.classList.add('is-visible');
                io.unobserve(el);
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        targets.forEach(function (el) { io.observe(el); });

        /* Failsafe: never leave content hidden if the observer misfires. */
        setTimeout(function () {
            targets.forEach(function (el) { el.classList.add('is-visible'); });
        }, 2500);
    }

    /* Auto-stagger groups: any element with [data-stagger] staggers its
       .reveal children by 70ms each. */
    function applyStagger() {
        document.querySelectorAll('[data-stagger]').forEach(function (group) {
            var step = parseInt(group.getAttribute('data-stagger') || '70', 10);
            var kids = group.querySelectorAll('.reveal');
            kids.forEach(function (el, i) {
                el.style.setProperty('--reveal-delay', (i * step) + 'ms');
            });
        });
    }

    /* ---- Pointer-tracked glow on cards ----------------------------------- */
    function initCardGlow() {
        if (reduced) return;
        document.querySelectorAll('.post-card').forEach(function (card) {
            card.addEventListener('pointermove', function (e) {
                var r = card.getBoundingClientRect();
                card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
            });
            card.addEventListener('pointerleave', function () {
                card.style.removeProperty('--mx');
            });
        });
    }

    /* ---- Header shadow on scroll -------------------------------------------- */
    function initHeaderScroll() {
        var header = document.querySelector('header');
        if (!header) return;
        var onScroll = function () {
            if (window.scrollY > 8) header.classList.add('is-scrolled');
            else header.classList.remove('is-scrolled');
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
    }

    function boot() {
        applyStagger();
        initReveal();
        initCardGlow();
        initHeaderScroll();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})();
