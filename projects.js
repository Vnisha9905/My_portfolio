/*
 * Proof-of-work data. Every card in the Work section and its modal are
 * generated from this list, so adding a project means adding one object.
 *
 * type:     one of the keys in TYPES below (controls the filter + label)
 * facts:    exactly four { k, v } pairs, shown as the modal's 4-cell grid
 * sections: titled blocks in the modal; use `body` for a paragraph or
 *           `list` for bullet points
 * links:    CTAs at the bottom of the modal (PDF, live product, Figma, ...)
 * template: true marks a placeholder card; delete these once real work is in
 */
const TYPES = {
    case: 'Case study',
    prd: 'PRD',
    teardown: 'Teardown',
    product: 'Product built',
};

const PROJECTS = [
    {
        template: true,
        type: 'case',
        title: 'Your case study title',
        summary: 'One or two lines: the user problem you found and what you proposed. Replace this template in projects.js.',
        tags: ['EdTech', 'Research'],
        facts: [
            { k: 'Problem', v: 'What was broken' },
            { k: 'Role', v: 'What you did' },
            { k: 'Timeline', v: '2 weeks' },
            { k: 'Outcome', v: 'Key result' },
        ],
        sections: [
            { heading: 'Context', body: 'Who the users are and why this problem matters.' },
            { heading: 'Approach', list: ['User interviews / data you looked at', 'Options you considered', 'What you chose and why'] },
            { heading: 'Impact', body: 'Metrics moved, or the metrics you would track.' },
        ],
        links: [{ label: 'Read the full case study', url: '#' }],
    },
    {
        template: true,
        type: 'prd',
        title: 'Your PRD title',
        summary: 'The feature you specced, for whom, and the success metric. Replace this template in projects.js.',
        tags: ['PRD', 'Metrics'],
        facts: [
            { k: 'Feature', v: 'Feature name' },
            { k: 'Users', v: 'Target segment' },
            { k: 'North star', v: 'Success metric' },
            { k: 'Scope', v: 'MVP / v1' },
        ],
        sections: [
            { heading: 'Problem statement', body: 'The user pain this feature solves.' },
            { heading: 'Requirements', list: ['Must-have', 'Should-have', 'Out of scope'] },
        ],
        links: [{ label: 'Open the PRD (PDF)', url: '#' }],
    },
    {
        template: true,
        type: 'teardown',
        title: 'Your product teardown',
        summary: 'The product you analysed and your sharpest insight. Replace this template in projects.js.',
        tags: ['Teardown', 'UX'],
        facts: [
            { k: 'Product', v: 'App name' },
            { k: 'Focus', v: 'Onboarding / feature' },
            { k: 'Insight', v: 'Main finding' },
            { k: 'Proposal', v: 'Your fix' },
        ],
        sections: [
            { heading: 'What works', list: ['Strength 1', 'Strength 2'] },
            { heading: 'What I would change', list: ['Gap and proposed fix'] },
        ],
        links: [{ label: 'Read the teardown', url: '#' }],
    },
    {
        template: true,
        type: 'product',
        title: 'Product you built',
        summary: 'What you built, who it is for, and what it does. Replace this template in projects.js.',
        tags: ['No-code', 'AI'],
        facts: [
            { k: 'Built with', v: 'Tools used' },
            { k: 'Users', v: 'Who uses it' },
            { k: 'Status', v: 'Live / beta' },
            { k: 'Result', v: 'Usage or learning' },
        ],
        sections: [
            { heading: 'Why I built it', body: 'The problem that pushed you to build this.' },
            { heading: 'How it works', list: ['Key feature 1', 'Key feature 2'] },
            { heading: 'What I learned', body: 'The product lesson from shipping it.' },
        ],
        links: [{ label: 'Try it live', url: '#' }],
    },
];

(() => {
    const grid = document.getElementById('workGrid');
    const filters = document.getElementById('workFilters');
    const modal = document.getElementById('projectModal');
    if (!grid || !filters || !modal) return;

    const el = (tag, cls, text) => {
        const n = document.createElement(tag);
        if (cls) n.className = cls;
        if (text != null) n.textContent = text;
        return n;
    };
    const arrow = () => el('span', 'arrow');

    // Filters: "All" plus only the types that actually have projects
    let active = 'all';
    const used = Object.keys(TYPES).filter(t => PROJECTS.some(p => p.type === t));
    [['all', 'All'], ...used.map(t => [t, TYPES[t]])].forEach(([key, label]) => {
        const b = el('button', 'filter', label);
        b.type = 'button';
        b.dataset.key = key;
        b.setAttribute('aria-pressed', key === active);
        b.addEventListener('click', () => {
            active = key;
            filters.querySelectorAll('.filter').forEach(f => f.setAttribute('aria-pressed', f.dataset.key === key));
            render();
        });
        filters.appendChild(b);
    });

    function render() {
        grid.replaceChildren();
        PROJECTS.forEach((p, i) => {
            if (active !== 'all' && p.type !== active) return;
            const card = el('button', 'card work-card' + (p.template ? ' template' : ''));
            card.type = 'button';
            card.appendChild(el('div', 'type', TYPES[p.type] || p.type));
            card.appendChild(el('h3', null, p.title));
            card.appendChild(el('p', null, p.summary));
            if (p.tags && p.tags.length) {
                const meta = el('div', 'meta');
                p.tags.forEach(t => meta.appendChild(el('span', 'tag', t)));
                card.appendChild(meta);
            }
            const open = el('div', 'open', 'Open');
            open.appendChild(arrow());
            card.appendChild(open);
            card.addEventListener('click', () => openModal(i, card));
            grid.appendChild(card);
        });
    }

    let lastFocus = null;
    function openModal(i, trigger) {
        const p = PROJECTS[i];
        lastFocus = trigger;
        document.getElementById('modalType').textContent = TYPES[p.type] || p.type;
        document.getElementById('modalTitle').textContent = p.title;
        document.getElementById('modalSummary').textContent = p.summary;

        const facts = document.getElementById('modalFacts');
        facts.replaceChildren();
        (p.facts || []).forEach(f => {
            const c = el('div', 'fact');
            c.appendChild(el('div', 'k', f.k));
            c.appendChild(el('div', 'v', f.v));
            facts.appendChild(c);
        });
        facts.hidden = !(p.facts && p.facts.length);

        const sections = document.getElementById('modalSections');
        sections.replaceChildren();
        (p.sections || []).forEach(s => {
            const box = el('div', 'modal-section');
            box.appendChild(el('h4', null, s.heading));
            if (s.body) box.appendChild(el('p', null, s.body));
            if (s.list) {
                const ul = el('ul');
                s.list.forEach(item => ul.appendChild(el('li', null, item)));
                box.appendChild(ul);
            }
            sections.appendChild(box);
        });

        const actions = document.getElementById('modalActions');
        actions.replaceChildren();
        (p.links || []).forEach((l, j) => {
            const a = el('a', 'cta' + (j === 0 ? ' primary' : ''), l.label + ' ');
            a.href = l.url;
            if (/^https?:/.test(l.url)) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
            a.appendChild(arrow());
            actions.appendChild(a);
        });

        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
        document.getElementById('modalClose').focus();
    }

    function closeModal() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
        if (lastFocus) lastFocus.focus();
    }

    document.getElementById('modalClose').addEventListener('click', closeModal);
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('open')) closeModal(); });

    render();
})();
