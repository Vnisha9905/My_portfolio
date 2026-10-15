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
 * summary:  modal intro — one paragraph, or a list of paragraphs
 * facts:    { k, v } pairs shown as a 2-column grid
 * sections: { heading, paras } or { heading, items }
 *           paras: paragraphs, items: "+" bullet points
 *           a paragraph starting with "> " is shown as a pull quote
 *           an { image, alt, caption } entry in paras shows a picture
 *           (click opens it full size)
 * skills:   optional list shown as tags under "Skills showcased";
 *           start an entry with "!" to highlight it
 * pdf:      path or URL to the PDF (shows the PDF icon button)
 * link:     live product / prototype URL (shows the link icon button)
 * linkLabel: optional text for the link button (default "Try the product")
 * linkType:  optional, 'prototype' shows a phone icon instead of the link icon
 * pdfLabel:  optional text for the PDF button (default "Case study PDF")
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

    {
        group: 'case',
        name: 'PulseFit',
        tagline: 'A reason to come back',
        intro: "VitaFit users started strong, then quietly stopped opening the app. I turned that retention problem into a motivation loop — personalized challenges, XP, an evolving avatar and community — tied to a +20% repeat-user target.",
        eyebrow: 'Retention & engagement',
        title: "The problem wasn't getting users to start. It was giving them a reason to come back.",
        summary: [
            "VitaFit users begin with high motivation. But after the first few weeks, workouts start feeling repetitive: progress isn't visible, showing up isn't meaningfully rewarded, and instructors disappear after the session.",
            "The result isn't an obvious rage-quit. Users simply *start opening the app less* — until the routine breaks.",
        ],
        facts: [
            { k: 'Type', v: '0→1 Product Strategy · Engagement & Retention' },
            { k: 'Format', v: 'PRD · User flows · Wireframes · Interactive prototype · Roadmap' },
            { k: 'North star', v: '+20% Repeat User Rate within the first 3 months — supported by +15–20% WAU, +15% sessions/user/week and +10% 30-day retention.' },
            { k: 'The bet', v: 'If every workout creates visible progress, meaningful reward and social connection, users have a reason to return for the next one — turning isolated workouts into a repeatable motivation loop.' },
        ],
        sections: [
            {
                heading: 'From a workout app to a reason to return',
                paras: [
                    "**Before:** Users complete essentially the same experience, progress lives mostly in memory, instructors appear once and disappear, and nothing meaningfully pulls someone back after a missed day.",
                    "**With Pulse:** Every workout feeds the next one. Personalized challenges create an achievable goal; completion earns XP; progress becomes visible through rewards and avatar evolution; community challenges create accountability; and instructors re-enter the experience as challenge leaders and sources of guidance.",
                    "The product wasn't designed around adding more fitness content. It was designed around the question:",
                    "> What should happen between today's workout and tomorrow's decision to come back?",
                ],
            },
            {
                heading: 'Build the motivation loop',
                items: [
                    '**Make the next action obvious.** Instead of asking users to decide what to do every time they open the app, Pulse puts a personalized daily challenge in front of them, sized to their fitness level.',
                    '**Turn effort into visible progress.** Completing challenges earns XP, updates leaderboard position and moves users toward meaningful milestones. An evolving avatar makes longer-term progress visible instead of leaving it as another number on a chart.',
                    '**Make consistency social.** Group challenges, progress sharing, local events and nearby users turn an individual fitness routine into something other people participate in too.',
                    '**Put instructors back into the loop.** Instead of creating a disconnected instructor feature, instructors become challenge leaders and sources of milestone guidance inside the experience users already return to.',
                ],
            },
            {
                heading: 'Design for the loop, not individual screens',
                paras: [
                    'The prototype follows one behavioural loop:',
                    '> Open → Start → Finish → Reward → Share → Return',
                    {
                        image: 'assets/PulseFit-Prototype-Flow.png',
                        alt: 'Four prototype screens in sequence: Pulse Home with today\'s personalized challenge, Live Challenge with GPS workout tracking, Rewards and Progress with XP and leaderboard, and Community with friends and group challenges.',
                        caption: 'Pulse Home → Live Challenge → Rewards & Progress → Community · click to enlarge',
                    },
                    "Pulse Home surfaces today's goal. Live Challenge tracks the activity. Rewards make completion visible. Community creates the reason to carry that momentum into the next session.",
                    'Even edge cases were designed around protecting that loop: weak GPS, abandoning a challenge midway, missed days, expired challenges and maximum-XP states each have defined fallback behaviour.',
                ],
            },
            {
                heading: 'Prioritize what needs proving first',
                paras: [
                    "I didn't put the most impressive features into the MVP.",
                    'The roadmap starts with the core motivation loop — personalized challenges, XP and rewards. Social motivation comes next. Deeper personalization follows only after usage data exists.',
                    'Expensive features such as full live GPS rendering and real-time avatar movement are deliberately pushed later, after adoption justifies the investment.',
                    'That makes the roadmap less about *"What else can we build?"* and more about:',
                    '> What assumption do we need to prove before earning the right to build the next layer?',
                ],
            },
            {
                heading: 'The verdict',
                paras: [
                    "PulseFit wasn't designed to remind people that fitness is important. It was designed to *make showing up feel noticed*.",
                    'A workout becomes progress. Progress becomes reward. Reward becomes something worth returning for. And community makes that return harder to quietly abandon.',
                    'The success criteria reflect that: +20% repeat-user rate, alongside targets of +15–20% WAU, +15% sessions per user/week, +10% 30-day retention and +25% engagement with community and instructor features.',
                    "> The problem was never that users forgot to work out. It's that nothing in the app noticed when they did.",
                ],
            },
        ],
        skills: [
            'Product Strategy', 'Problem Framing', 'Product Discovery', 'User Personas',
            '!Retention & Engagement Strategy', 'Gamification', 'Habit Loop Design', 'PRD Writing',
            'Feature Prioritization', '!MVP Scoping', 'User Flows', 'Wireframing', 'Prototyping',
            'Edge-Case Design', '!Success Metrics', 'Roadmapping',
        ],
        pdf: 'assets/PulseFit-Product-Story.pdf',
        link: 'https://personal-pulse-quest.lovable.app/',
        linkLabel: 'View the prototype',
    },

    {
        group: 'case',
        name: 'K-12 Learning',
        tagline: 'Personalised Learning Recommendation System',
        intro: "Every learner on a K-12 Math platform got the same post-class experience. I designed a personalised learning layer — adaptive practice, a learning roadmap and on-demand doubt resolution — and the system architecture to run it at sub-2s speed.",
        eyebrow: 'K-12 Learning Platform · Product Strategy · Recommendation Systems · System Design',
        title: 'Personalised Learning Recommendation System',
        summary: "Designed a personalised learning layer for a K-12 Math platform to make post-class learning *more relevant to each learner's performance, skill gaps and learning journey*.",
        facts: [
            { k: 'Type', v: 'Product Strategy · Recommendation Systems · System Design' },
            { k: 'Goal', v: '+25% engagement · +30% completion · +20% satisfaction' },
            { k: 'North star', v: 'Weekly Active Practice Rate: ~18% baseline → ≥45% at 6 months → ≥65% at 12 months' },
            { k: 'Deliverables', v: 'PRD · User Stories · Requirements · Prioritisation Matrix · System Architecture · Database Schema · Wireflows · NFRs · Metrics · Trade-off Analysis' },
        ],
        sections: [
            {
                heading: 'The problem',
                paras: [
                    "Bhanzu's live-class infrastructure was already in place, but learners received *the same post-class experience* regardless of their performance or learning gaps. Struggling learners lacked targeted reinforcement, trainers lacked consolidated learner context, and admins had limited visibility into recommendation effectiveness.",
                ],
            },
            {
                heading: 'Product strategy',
                paras: [
                    "**Personalise the learner's next action.** I translated the needs of Learners, Trainers and Platform Admins into a 10-requirement product scope.",
                ],
                items: [
                    '**Learner:** Adaptive Practice · Learning Roadmap · On-Demand Doubt Resolution',
                    '**Trainer:** Learner Performance Dashboard · Post-Class Assignment Visibility · Session Prep Summary',
                    '**Admin:** Recommendation Analytics · Platform Quality Monitoring · Credit Depletion Alerts',
                ],
            },
            {
                heading: 'The core recommendation loop',
                paras: [
                    '> Learning activity → Identify skill gaps → Recommend practice → Measure action & outcome',
                    'Target metrics included ≥40% recommendation CTR, ≥30% roadmap-to-practice conversion, +15% post-practice quiz improvement and ≥70% module completion.',
                ],
            },
            {
                heading: 'Prioritisation & system design',
                paras: [
                    '**Turn requirements into a feasible product.** Used Impact × Effort to prioritise Adaptive Practice, Doubt Resolution and Learning Roadmap as *strategic bets*, while Post-Class Assignments, Session Prep Summary and Credit Alerts became *quick wins*.',
                    'Designed a service-oriented architecture connecting:',
                    '> Learner / Trainer / Admin → API Gateway → Auth, Recommendation, Session, Analytics & Notification Services → dedicated data stores',
                    'with requirements for 10K concurrent users, 99.9% availability and sub-2s quiz load time.',
                ],
            },
            {
                heading: 'Key product trade-off',
                paras: [
                    '**Personalisation vs. performance.** Deeper real-time analysis could improve recommendation precision but increase latency. I prioritised the sub-2-second experience and designed around:',
                    '> Precomputed recommendations + 15–30 min caching + event-driven refresh',
                    'This keeps recommendations sufficiently fresh while *protecting response speed for K-12 learners*.',
                ],
            },
            {
                heading: 'Validation',
                paras: [
                    '**Measure behaviour, not just recommendation quality.** Defined metrics across engagement, learning outcomes, satisfaction, trainer effectiveness and platform health, with future experiments including A/B testing cache freshness and adding learner feedback to improve recommendation relevance.',
                ],
            },
        ],
        skills: [
            'Product Discovery', 'Problem Framing', 'Product Strategy', 'Personalisation',
            'Recommendation Systems', 'PRD', 'Requirements', 'Prioritisation', 'System Design',
            'Architecture', 'Database Design', 'API Design', 'NFRs', 'Performance & Scalability',
            'Product Metrics', 'Experimentation', 'Wireflows',
        ],
        pdf: 'assets/K12-Personalised-Learning-PRD.pdf',
        link: 'https://elevate-teach-admin.lovable.app',
        linkLabel: 'View the prototype',
    },
    {
        group: 'case',
        name: 'Uber Find My Ride',
        tagline: 'Research first, solution second',
        intro: "Uber lets riders drop a pickup pin without checking whether a car can legally reach it. I researched where pickups fail (regulations, market trends, a rider survey and in-depth interviews) before proposing anything. The research showed this is a compliance gap, not a UX problem, so every proposed feature traces back to a finding.",
        eyebrow: 'Product case study · Uber India · Research-led',
        title: "Pickup confusion isn't a UX problem. It's a regulatory compliance gap.",
        summary: "Uber operates across Delhi NCR, Mumbai, Bangalore, Hyderabad and Pune: cities with dense infrastructure, regulated transit zones and complex pickup environments. At the start of every trip, users drop a pin wherever they are standing and the app accepts it without validation. Drivers then navigate to a point that may be inside a restricted zone, a narrow lane or a gated complex. The calls, waiting and cancellations happen only *after the driver has already arrived*. I treated this as a research question before it became a design question.",
        facts: [
            { k: 'Type', v: 'Product research & strategy' },
            { k: 'Scope', v: 'Cab rides in metro cities, focused on Premium and Corporate users booking from airports, malls, metro stations and office complexes' },
            { k: 'Research base', v: 'Regulatory analysis · market trends · rider survey (n=10) · in-depth interviews (n=3)' },
            { k: 'The bet', v: "Pickups fail because the app doesn't know where a car can legally stop. Fixing that beats clearer copy." },
            { k: 'Output', v: 'Smart Pickup Validation & Guidance System, with a working prototype' },
        ],
        sections: [
            {
                heading: 'Intended vs actual',
                paras: [
                    '**Intended:** Find out why pickups go wrong at complex locations and propose a fix.',
                    '**Actual:** The research moved the problem from "users are confused" to *"the app accepts pins that cannot be served."* That changed the solution from better instructions to validation against real, regulated pickup zones.',
                ],
            },
            {
                heading: 'How I approached it',
                items: [
                    '**Regulatory:** What rules govern cab pickups at airports, metro stations and malls?',
                    '**Market:** How big is the problem, which segment should come first, and why does it matter now?',
                    '**Survey:** How often do pickups fail, and where?',
                    '**Interviews:** What do riders do when it fails, and what does it cost them?',
                ],
            },
            {
                heading: 'What the research found',
                items: [
                    "**Regulations:** At Delhi airport, T3 pickups are restricted to a remote cab marshalling area. Metro authorities set pickup bays back from exit gates and prohibit roadside stopping within 50–100 m. Malls ban cabs at the main gate, enforce wait limits of 3–10 minutes, and limit commercial vehicle entry at peak hours.",
                    '**Market:** Uber India covered 11.6B km in 2025, up 26.5%. Premium and airport rides are growing in the cities with the hardest pickup spots. Geofencing is now mature and affordable, and riders already expect proactive guidance from apps like Swiggy, Zomato and IRCTC.',
                    '**Survey:** 7 of 10 riders had experienced a driver who could not locate them, and 5 of 10 said pin and driver mismatches happen frequently. Only 4 of 10 said pickup confusion had never led to a cancellation.',
                    '**Interviews:** A metro commuter walked 400 m after the driver stopped at a different entrance. An airport traveller missed two flights because the driver could not enter the zone the pin was in. A mall visitor had two cancellations without knowing cabs are not allowed at the entrance.',
                ],
            },
            {
                heading: 'Where I would start',
                paras: [
                    'I scored 12 rider segments on market scale against barrier to conversion. *Premium & Corporate* had the lowest barrier (2/10) and the highest revenue potential (9/10). These riders already pay for reliability, pickup confusion is their top pain point, and they are concentrated in three cities, which makes a pilot easy to run.',
                ],
            },
            {
                heading: 'From findings to features',
                items: [
                    '**Restricted zones at airports, metro stations and malls** led to verified pickup zone mapping and accessibility-based pickup validation.',
                    '**The commuter who pinned the exit gate and got a driver at another entrance** led to smart nudges that warn before the pin is confirmed.',
                    '**The traveller who missed two flights** led to predefined terminal pickup points, shown before the ride is booked.',
                    '**The mall visitor who did not know cabs are restricted** led to an in-app warning with a walking route and distance to the nearest valid bay.',
                    '**Calls and messages after dispatch** led to shared pickup context, so rider and driver see the same validated point.',
                    '**Peak-hour entry limits and strict wait times at malls** led to traffic-aware pickup recommendations for riders and drivers, with alternate points when access is restricted.',
                ],
            },
            {
                heading: 'What this does not prove yet',
                paras: [
                    'The survey (n=10) and interviews (n=3) give a directional signal, not statistical proof, and the survey skewed toward daily commuters rather than the Premium & Corporate segment I prioritised.',
                    'The expected outcomes (fewer pickup mismatches, fewer coordination calls, lower cancellation rates, faster pickups) are hypotheses to test in a pilot, not measured results.',
                ],
            },
        ],
        pdf: 'Uber_Find_My_Ride.pdf',
        link: 'https://smart-pick-up-guide.lovable.app/',
        linkType: 'prototype',
        linkLabel: 'Try the prototype',
    },    {
        group: 'case',
        name: 'B2B Corporate L&D Strategy',
        tagline: 'Proof of impact, not completion rates',
        intro: "L&D managers walk into budget reviews with completion rates and walk out with budget cuts, because training's business impact can't be proven. This 2–3 year strategy for mid-sized Indian IT services companies connects learning data to Jira outcomes, starting with one integration, one buyer and one department.",
        eyebrow: 'Product strategy case study · B2B SaaS · Corporate learning',
        title: 'Training works. Nobody can prove it.',
        summary: "Every year, L&D managers walk into budget reviews with completion rates and walk out with budget cuts. It isn't because training doesn't work, but because its business impact can't be proven. That *ROI invisibility* is directly causing clients to reduce platform spend and skip renewals. I built a 2–3 year strategy for mid-sized IT services companies in India that turns a corporate learning platform from a content delivery tool into a business impact engine.",
        facts: [
            { k: 'Type', v: 'B2B product strategy · 2–3 year horizon' },
            { k: 'Segment', v: 'Mid-sized IT services companies in India. Primary buyer: L&D or HR Manager. Secondary: CLO or VP of L&D.' },
            { k: 'Market sizing', v: 'My estimates: TAM $180–300M ARR · SAM $45–75M · SOM $3.5–7.5M within 2–3 years' },
            { k: 'The bet', v: 'These companies will share Jira data in exchange for proof that their training worked.' },
            { k: 'Output', v: 'Land–Expand–Entrench strategy, quarterly roadmap, moats, trade-offs and metrics' },
            { k: 'Market data source', v: 'IMARC Group, India Corporate Training Market Size and Report, 2034' },
        ],
        sections: [
            {
                heading: 'Intended vs actual',
                paras: [
                    '**Intended:** Help L&D managers defend their training budget, so that clients renew.',
                    "**Actual:** The Impact Dashboard isn't the strategy. It's the *wedge*: the mechanism that earns the data-sharing relationship the wider platform depends on.",
                ],
            },
            {
                heading: 'The market',
                items: [
                    "**Size and growth:** India's corporate training market was valued at about $12.2B in 2025 and is projected to reach $39.9B by 2034, a 12.86% CAGR over 2026–2034 (source: IMARC Group).",
                    '**My sizing:** I estimated TAM, SAM and SOM myself, narrowing from the technology workforce to mid-sized IT services companies and engineering units in tech parks such as Bengaluru, Hyderabad, Pune and Gurugram. These are my estimates, not published figures.',
                ],
            },
            {
                heading: 'The gap in the competition (my analysis)',
                items: [
                    '**Content libraries (Udemy Business, Coursera, LinkedIn Learning):** cheap and broad, but low completion. *Opening:* automated interactive learning plus tracking that proves ROI.',
                    '**Legacy vendors (NIIT, Vinsys):** strong CLO relationships, but weak software and heavy manual administration. *Opening:* a seamless SaaS workflow.',
                    '**Tech bootcamps (Scaler for Business, Edstellar):** strong coding labs, but expensive seats and little non-technical coverage. *Opening:* technical and soft skills under one affordable platform.',
                    '**Assessment suites (Mercer | Mettl, KNOLSKAPE):** excellent ROI data, but standalone with no learning environment. *Opening:* assessment data built into an everyday learning engine.',
                ],
            },
            {
                heading: 'The bet and the staged path',
                items: [
                    '**Land:** One department, one Jira integration, priced per active learner. Data foundation in Q1, ROI visible in Q2. *Big bet, high confidence.*',
                    '**Expand:** Once multi-department demand justifies it, add GitHub and HRMS integrations and premium analytics. Each new department head has the same budget-defence need. *Pilot, medium confidence.*',
                    '**Entrench:** The platform becomes the skill-to-performance source of truth, with an AI layer on the accumulated data and multi-year contracts. *Pilot, low confidence until Expand data exists.*',
                    '**Why it should spread:** The L&D manager who survives a budget review holds proof that peer departments lack. That visibility gap, not a sales pitch, creates the internal pull.',
                ],
            },
            {
                heading: 'What I chose not to do',
                items: [
                    '**Depth over breadth.** One integration, one buyer, one department at launch. Breadth is deferred, not abandoned.',
                    '**No** GitHub, HRMS or other integrations until the Jira wedge is validated.',
                    '**No** large-enterprise or CLO-led deals in year 1.',
                    '**No** standalone assessment product. The platform stays an active learning engine with outcome proof built in.',
                ],
            },
            {
                heading: 'The biggest risk and the mitigation',
                paras: [
                    "Not every client will agree to share Jira data, because of privacy and governance policies, and that is a dependency I can't fully control. So the plan has three safeguards:",
                ],
                items: [
                    '**Phased consent:** start with read-only, aggregated ticket volumes and no individual-level access.',
                    '**Fallback metric:** a self-reported outcome survey where Jira access is refused.',
                    '**Early signal:** track the opt-in rate in Q1. A low rate means revisit the approach, not assume the bet has failed.',
                ],
            },
            {
                heading: 'Moats',
                items: [
                    '**Data advantage:** matched training-to-Jira outcome data that no competitor has.',
                    '**Integration stickiness:** leaving means losing the ROI report history used in past budget reviews.',
                    '**Cross-client benchmarking:** each client improves the peer benchmark for the others.',
                    '**First-mover brand:** only valuable because it lets the dataset build before a fast follower catches up.',
                ],
            },
            {
                heading: 'Stress test',
                paras: [
                    "A funded competitor could copy the dashboard and the Jira integration in a quarter. They couldn't copy the matched historical dataset or the position inside clients' budget reviews, because both take real usage time to build.",
                ],
            },
            {
                heading: 'Roadmap and metrics',
                items: [
                    '**Q1, Connect data:** Jira integration and training-to-outcome mapping.',
                    '**Q2, Prove impact:** Impact Dashboard and before-vs-after ROI reports for leadership.',
                    '**Q3, Drive renewals:** automated impact reports and renewal insights.',
                    '**Leading metrics:** Jira consent rate, report usage rate, department expansion rate.',
                    '**Lagging metrics:** ARR, LTV, Magic Number and NRR.',
                ],
            },
            {
                heading: 'What this does not prove yet',
                paras: [
                    "The pain is identified through the market and competitive research in this package. Validating it with L&D managers is the next step.",
                    'The core assumption, that clients will share Jira data, is untested. The expansion triggers (2–3 successful quarterly reviews, 3+ active departments) are hypotheses to validate, not commitments.',
                ],
            },
        ],
        pdf: 'B2B_Product_Strategy.pdf',
        pdfLabel: 'Product strategy PDF',
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
        proto: '<rect x="7" y="2.5" width="10" height="19" rx="2.2"/><path d="M10.5 18.5h3"/><path d="M10 8.5l5 3.5-5 3.5z"/>',
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
        const summary = Array.isArray(p.summary) ? p.summary : [p.summary || ''];
        document.getElementById('modalSummary').replaceChildren(...summary.map(t => rich('p', t)));

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
            (s.paras || []).forEach(t => {
                if (typeof t === 'object' && t.image) {
                    const fig = el('figure', 'modal-figure');
                    const a = el('a');
                    a.href = t.image;
                    a.target = '_blank';
                    a.rel = 'noopener noreferrer';
                    const img = el('img');
                    img.src = t.image;
                    img.alt = t.alt || '';
                    img.loading = 'lazy';
                    a.appendChild(img);
                    fig.appendChild(a);
                    if (t.caption) fig.appendChild(el('figcaption', null, t.caption));
                    box.appendChild(fig);
                } else {
                    box.appendChild(t.startsWith('> ') ? rich('p', t.slice(2), 'quote') : rich('p', t));
                }
            });
            if (s.items) {
                const ul = el('ul');
                s.items.forEach(t => ul.appendChild(rich('li', t)));
                box.appendChild(ul);
            }
            sections.appendChild(box);
        });
        if (p.skills && p.skills.length) {
            const box = el('div', 'modal-section');
            box.appendChild(el('h4', null, 'Skills showcased'));
            const tags = el('div', 'skills');
            p.skills.forEach(k => tags.appendChild(
                k.startsWith('!') ? el('span', 'tag key', k.slice(1)) : el('span', 'tag', k)));
            box.appendChild(tags);
            sections.appendChild(box);
        }

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
        if (p.pdf) addLink(p.pdf, 'pdf', p.pdfLabel || 'Case study PDF');
        if (p.link) addLink(p.link, p.linkType === 'prototype' ? 'proto' : 'link', p.linkLabel || 'Try the product');
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
