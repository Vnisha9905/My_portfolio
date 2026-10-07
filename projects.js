/*
 * Project data for the Projects section. Each entry becomes a card in its
 * group, and every card opens the same floating modal.
 *
 * group:    'ai' (AI & me) or 'case' (Case studies)
 * name:     big label on the card banner
 * tagline:  short line on the card (shown in italics)
 * intro:    2–3 lines on the card
 * eyebrow:  small pink label above the modal title
 * title:    modal heading
 * summary:  modal intro paragraph
 * facts:    { k, v } pairs shown as a 2-column grid
 * sections: { heading, paras } or { heading, items }
 *           paras: paragraphs, items: "+" bullet points
 * pdf:      path or URL to the PDF (shows the PDF icon button)
 * link:     live product URL (shows the link icon button)
 *
 * In any text, *word* renders as pink italics and **word** as bold.
 */
const PROJECTS = [
    {
        group: 'ai',
        name: 'OutLoud',
        tagline: 'Speaking under pressure',
        intro: 'A judgment-free voice AI coach for early-career job seekers who read and write English but freeze when they have to speak it live. Three practice modes: everyday, interview and workplace.',
        eyebrow: 'AI product · OutLoud V2',
        title: "Knowing English isn't the same as being able to speak it",
        summary: 'OutLoud is built around a simple observation: many early-career job seekers can read and write English, but *freeze when they have to speak it live* — in interviews, meetings, or everyday conversations. The product removes the audience first, then makes practice specific to the situation.',
        facts: [
            { k: 'Type', v: 'AI speaking coach · self-initiated' },
            { k: 'Format', v: 'Voice-first · mobile-first · 3 practice modes' },
            { k: 'North star', v: 'Week-4 practice completion ≥40%' },
            { k: 'The bet', v: 'More relevant practice will make speaking practice easier to repeat.' },
        ],
        sections: [
            {
                heading: 'Intended vs actual',
                paras: [
                    '**Intended:** A private, free space to practise speaking without judgement.',
                    "**Actual:** The product deliberately avoids turning English practice into another test. No scores. No accent correction. No punishment for fillers, pauses or common Indian English. Interview mode doesn't interrupt the user to correct them; feedback comes separately. Workplace practice adapts to the situation the user actually needs to handle.",
                ],
            },
            {
                heading: 'Fix the speaking gap',
                items: [
                    '**Make practice match the moment.** General conversation for everyday confidence. Interview mode adapts to the user\'s target role. Workplace mode practises situations such as presentations, meetings and client conversations.',
                    '**Give feedback without turning it into a score.** Interview and Workplace users can request feedback during practice and receive up to two evidence-based improvement points.',
                    '**Make privacy part of the product.** Conversation transcripts are discarded after each session. Only lightweight session statistics are retained.',
                    '**Bring users back without nagging.** Users control their own email practice reminders rather than being pushed into streaks or engagement loops.',
                ],
            },
            {
                heading: 'The verdict',
                paras: [
                    "The product isn't trying to teach users more English. It's trying to give them *more chances to speak the English they already know* — before the moment when it actually matters.",
                    'V1 showed that users came for interviews and workplace situations but were given only general conversation. V2 responds by turning one generic speaking partner into three context-specific practice experiences.',
                ],
            },
        ],
        pdf: 'assets/OutLoud-V2-Case-Study.pdf',
        link: 'https://outloud-v-2.replit.app',
    },
];

(() => {
    const grids = { ai: document.getElementById('aiGrid'), case: document.getElementById('caseGrid') };
    const modal = document.getElementById('projectModal');
    if (!modal || !grids.ai || !grids.case) return;

    const el = (tag, cls, text) => {
        const n = document.createElement(tag);
        if (cls) n.className = cls;
        if (text != null) n.textContent = text;
        return n;
    };

    // Renders *em* and **strong** without using innerHTML
    const rich = (tag, text, cls) => {
        const n = el(tag, cls);
        text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/).forEach(part => {
            if (!part) return;
            if (part.startsWith('**')) n.appendChild(el('strong', null, part.slice(2, -2)));
            else if (part.startsWith('*')) n.appendChild(el('em', null, part.slice(1, -1)));
            else n.appendChild(document.createTextNode(part));
        });
        return n;
    };

    const svg = (paths) => {
        const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        s.setAttribute('viewBox', '0 0 24 24');
        s.setAttribute('fill', 'none');
        s.setAttribute('stroke', 'currentColor');
        s.setAttribute('stroke-width', '1.6');
        s.setAttribute('stroke-linecap', 'round');
        s.setAttribute('stroke-linejoin', 'round');
        s.setAttribute('aria-hidden', 'true');
        s.innerHTML = paths;
        return s;
    };
    const ICONS = {
        pdf: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><text x="12" y="17.5" text-anchor="middle" font-size="5.5" font-family="sans-serif" font-weight="700" fill="currentColor" stroke="none">PDF</text>',
        link: '<path d="M14 4h6v6"/><path d="M20 4l-9 9"/><path d="M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4"/>',
    };

    PROJECTS.forEach((p, i) => {
        const grid = grids[p.group];
        if (!grid) return;
        const card = el('button', 'card work-card');
        card.type = 'button';
        card.appendChild(el('div', 'banner', p.name));
        const body = el('div', 'body');
        body.appendChild(el('div', 'type', p.group === 'ai' ? 'AI product' : 'Case study'));
        body.appendChild(el('h4', null, p.tagline));
        body.appendChild(rich('p', p.intro));
        const open = el('div', 'open', 'Read more');
        open.appendChild(el('span', 'arrow'));
        body.appendChild(open);
        card.appendChild(body);
        card.addEventListener('click', () => openModal(i, card));
        grid.appendChild(card);
    });

    Object.entries(grids).forEach(([group, grid]) => {
        if (!grid.children.length) {
            grid.appendChild(el('div', 'empty-note', group === 'case'
                ? 'Case studies are being written up and will appear here soon.'
                : 'Products will appear here soon.'));
        }
    });

    let lastFocus = null;
    function openModal(i, trigger) {
        const p = PROJECTS[i];
        lastFocus = trigger;
        document.getElementById('modalType').textContent = p.eyebrow || '';
        document.getElementById('modalTitle').textContent = p.title;
        document.getElementById('modalSummary').replaceChildren(...rich('span', p.summary || '').childNodes);

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
            (s.paras || []).forEach(t => box.appendChild(rich('p', t)));
            if (s.items) {
                const ul = el('ul');
                s.items.forEach(t => ul.appendChild(rich('li', t)));
                box.appendChild(ul);
            }
            sections.appendChild(box);
        });

        const links = document.getElementById('modalLinks');
        links.replaceChildren();
        const addLink = (href, kind, label) => {
            const a = el('a', 'icon-link ' + kind);
            a.href = href;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.setAttribute('aria-label', label);
            a.title = label;
            a.appendChild(svg(ICONS[kind]));
            a.appendChild(el('span', null, label));
            links.appendChild(a);
        };
        if (p.pdf) addLink(p.pdf, 'pdf', 'Case study PDF');
        if (p.link) addLink(p.link, 'link', 'Try the product');
        links.hidden = !links.children.length;

        modal.classList.add('open');
        modal.querySelector('.modal-box').scrollTop = 0;
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
})();
