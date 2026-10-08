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
    {
        group: 'ai',
        name: 'AI Support Ops',
        tagline: 'Matching AI to the job, not the hype',
        intro: 'A support team has five manual workflows. Instead of putting an AI agent in front of all five, I matched each to the least autonomous abstraction that could solve it reliably: 3 Skills, 1 Agent, and 1 capability deliberately left unbuilt.',
        eyebrow: 'AI capability architecture · Skill & Agent design',
        title: "The easy answer was an AI agent for everything. I did the opposite.",
        summary: 'A support team has five manual workflows, and the easy answer is to put an AI agent in front of all five. I looked at what each workflow *actually needed*: deterministic rules, bounded AI judgment, dynamic investigation, or no AI at all. The result was 3 Skills, 1 Agent, and 1 capability deliberately left unbuilt.',
        facts: [
            { k: 'Type', v: 'AI capability architecture · Skill & Agent design' },
            { k: 'Format', v: '5 support workflows · 4 possible automation decisions' },
            { k: 'North star', v: 'Maximise reliable AI coverage, not AI coverage for its own sake' },
            { k: 'The bet', v: 'Matching each workflow to the least autonomous abstraction that can reliably solve it adds AI value without unnecessary autonomy or operational risk.' },
            { k: 'Validation', v: '26/26 test cases passed across the four built capabilities' },
            { k: 'Outcome', v: '3 Skills · 1 Agent · 1 deliberate "Neither"' },
        ],
        sections: [
            {
                heading: 'Intended vs actual',
                paras: [
                    '**Intended:** Reduce support handling effort, improve consistency and policy compliance, and make engineering handoffs more actionable.',
                    "**Actual:** The answer wasn't *add an Agent.* Each of the five workflows needed a different level of autonomy, and one needed none at all.",
                ],
            },
            {
                heading: 'Five workflows, five decisions',
                items: [
                    '**Ticket Triage became a Skill.** Categories, routing and escalation boundaries were already known.',
                    '**Reply Drafting became a Skill.** AI could handle contextual language while policy remained the source of truth.',
                    "**At-Risk Customer Briefing became a Skill.** The sources and retrieval pattern were predictable; the AI's value was synthesis.",
                    '**Bug Triage became an Agent.** The model had to investigate dynamically, evaluate candidate matches and change its next action based on evidence.',
                    "**Weekly QA Grading became Neither.** The underlying judgment didn't have reliable enough ground truth.",
                ],
            },
            {
                heading: 'Fix the automation decision, not just the workflow',
                items: [
                    '**Use AI where language creates ambiguity.** Ticket descriptions vary even when the category and routing rules are fixed. The Skill interprets the language while deterministic rules stay authoritative.',
                    '**Keep policy outside the model\'s authority.** Reply Drafting uses current policy and tone guidance, but it cannot approve refunds, invent policy or make business commitments. A human reviews every draft.',
                    '**Give the Agent autonomy only when the path is genuinely dynamic.** Bug Triage searches the changelog from multiple angles, judges matches on meaning rather than keywords, and returns either a known-issue report or a structured new-issue write-up.',
                    "**Don't automate unreliable judgment.** Weekly QA Grading was left unbuilt because plausible AI scores weren't enough when the ground truth was subjective and the output could misdirect coaching.",
                ],
            },
            {
                heading: 'The tests changed the design',
                paras: [
                    'In At-Risk Customer Briefing, the system initially combined billing lateness and usage decline into an *unsupported causal claim*. I introduced an explicit correlation-vs-causation rule, re-ran the tests and re-validated the capability.',
                    'Bug Triage was tested against a harder case: a genuine known issue with *zero literal keyword overlap* with the changelog entry. The Agent matched it semantically while avoiding a separate false match.',
                    'The goal was never "does the AI produce an answer?" It was "does the capability behave reliably enough for the job we want to give it?"',
                ],
            },
            {
                heading: 'The verdict',
                paras: [
                    "5 workflows. 3 Skills. 1 Agent. 1 deliberate \"Neither.\" 26/26 validation tests passed: Ticket Triage 4/4, Reply Drafting 15/15, At-Risk Briefing 5/5, Bug Triage 2/2.",
                    "The interesting outcome wasn't that I built an Agent. It was that I *didn't* build one for four other workflows where it wasn't the right abstraction. The project became less about how much AI can we add, and more about where AI creates enough value to justify the autonomy we're giving it.",
                ],
            },
        ],
        pdf: 'AI_agent_skill.pdf',
    },
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
