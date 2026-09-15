// filters.js — gestion des filtres de la section #missions (Réalisations Professionnelles)
document.addEventListener('DOMContentLoaded', function () {
    const state = { ctx: 'all', comp: 'all' };

    function applyFilters() {
        document.querySelectorAll('.project-item').forEach(function (item) {
            const segments   = (item.dataset.segment || '').toLowerCase().split(' ');
            const categories = (item.dataset.categories || '').toLowerCase().split(' ');

            const ctxOk  = state.ctx  === 'all' || segments.includes(state.ctx);
            const compOk = state.comp === 'all' || categories.includes(state.comp);

            item.style.display = (ctxOk && compOk) ? '' : 'none';
        });
    }

    document.querySelectorAll('.filter-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            const type  = btn.dataset.filterType;
            const value = btn.dataset.filterValue.toLowerCase();
            const groupClass = type === 'ctx' ? '.ctx-btn' : '.comp-btn';

            document.querySelectorAll(groupClass).forEach(function (b) {
                b.classList.remove('active');
            });
            btn.classList.add('active');

            state[type] = value;
            applyFilters();
        });
    });
});