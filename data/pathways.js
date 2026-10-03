/* ==========================================================
   THE THREE CAREER LENSES — copy, capabilities, proof, models.
   `metrics` ids refer to SITE.METRICS. `story` ids refer to SITE.CAREER.
   ========================================================== */
window.SITE = window.SITE || {};

SITE.BUILD_WALL = [
  'companies', 'operating models', 'People functions', 'teams', 'systems', 'dashboards',
  'processes', 'brands', 'presentations', 'technology workflows', 'programs', 'infrastructure'
];

SITE.LENSES = {
  ops: {
    id: 'ops', num: '01',
    does: [['Business & Operations', 'Operational assessments, process improvement, workflows, SOPs, dashboards, automation, systems, accountability and scaling.'], ['Business Strategy', 'Strategic planning, executive support, organizational design, financial and operational analysis, and decision support.'], ['Startups & Growth', '0-to-1 business builds, launch planning, operating models, market positioning, implementation and go-to-market support.']],
    title: 'Scale the business', sub: 'Business + Operations',
    short: 'Operations',
    positioning: 'I turn strategy into an operating business.',
    intro: 'Strategy is cheap until someone owns the P&L, the vendors, the systems and the Monday meeting. I build the structure that makes a plan run without heroics.',
    heroLine: 'Operating models, P&L discipline and multi-site growth: the structure that lets a plan actually run.',
    ctaWork: 'Explore the operating work',
    ctaTalk: 'Have a business that needs to scale? Let’s talk.',
    resumeKey: 'coo', resumeLabel: 'Download the COO resume',
    capabilities: ['P&L leadership', 'Business operations', 'Operating model design', 'Strategic planning', 'Business transformation', 'Growth strategy', 'Multi-site operations', '0-to-1 startups', 'Organizational scaling', 'Financial modeling', 'Budgeting', 'Forecasting', 'Profitability analysis', 'KPI dashboards', 'Executive reporting', 'Operating cadence', 'Leadership accountability', 'Vendor management', 'Systems implementation', 'ERP migration', 'Capacity planning', 'Workforce planning', 'Process redesign', 'Cross-functional execution', 'Client / patient operations', 'Revenue cycle', 'Billing', 'New-site launch', 'Project delivery', 'Integration', 'M&A transition', 'Offshore teams', 'AI + automation', 'Technology implementation'],
    proof: [
      { name: 'The Wave International', story: 'wave' }, { name: 'SEC Global', story: 'sec' },
      { name: 'Spiro Senior', story: 'spiro' }, { name: 'Coca-Cola', story: 'coke' },
      { name: 'Synergy Medical Centers', story: 'synergy' }
    ],
    metrics: ['growth', 'opex', 'revlift', 'locations', 'workforce', 'projects', 'timelines', 'payroll', 'launches'],
    framework: ['Diagnose', 'Design', 'Systemize', 'Automate', 'Measure', 'Scale'],
    frameworkNote: ['Go to the work. Find the real constraint, not the loudest one.', 'Define ownership, decision rights and the target model.', 'Write the SOP and playbook that survive personnel changes.', 'Remove manual work with systems, integrations and AI, reviewed by people.', 'KPI dashboards and an operating cadence leaders actually use.', 'Replicate what works at the next site, market or team.'],
    quote: 'The goal is not a better workaround. It is a better operating model.',
    roles: ['Chief Operating Officer', 'VP Operations', 'Healthcare COO', 'Chief of Staff', 'Operations consultant'],
    startHere: ['operating-dashboard', 'scaling-case-study', 'wave-site-launch-playbook']
  },
  people: {
    id: 'people', num: '02',
    does: [['Workforce strategy', 'Headcount, capacity and hiring plans tied to where the business is going.'], ['Organizational structure', 'Org design, roles, decision rights and the HR operating model.'], ['HR infrastructure', 'HRIS, payroll, benefits, compliance, policies and SOPs that hold up.'], ['Employee processes + people systems', 'Onboarding, performance, pay, ER and the systems that run them.']],
    title: 'Build the People function', sub: 'HR + People Operations',
    short: 'People',
    positioning: 'I build People systems that scale with the business.',
    intro: 'Hiring, pay, compliance, culture and leadership should hold up when the company doubles. I build the structure first, then make it feel human.',
    heroLine: 'HR from zero, People systems that scale and teams that stay: structure without bureaucracy.',
    ctaWork: 'Explore the People work',
    ctaTalk: 'Need a People function that scales? Let’s talk.',
    resumeKey: 'hr', resumeLabel: 'Download the People + HR resume',
    capabilities: ['People strategy', 'HR operations', 'HR business partnership', 'Workforce planning', 'Headcount planning', 'Org design', 'Talent acquisition', 'Recruiting', 'Onboarding', 'Employee relations', 'Performance management', 'Compensation', 'Total rewards', 'Benefits', 'Payroll', '401(k)', 'Succession planning', '9-box calibration', 'HiPo programs', 'Leadership development', 'Engagement', 'Culture', 'People analytics', 'HRIS', 'HR automation', 'Immigration', 'Multi-state compliance', 'PEO / EOR', 'Change management', 'Executive coaching', 'Manager development', 'Site-launch workforce planning'],
    proof: [
      { name: 'The Wave International', story: 'wave' }, { name: 'SEC Global', story: 'sec' },
      { name: 'Synergy Medical Centers', story: 'synergy' }, { name: 'Collabera Solutions', story: 'collabera' },
      { name: 'Mission Critical Technologies', story: 'mct' }, { name: 'Coca-Cola', story: 'coke' },
      { name: 'Spiro Senior', story: 'spiro' }
    ],
    metrics: ['years', 'workforce', 'india', 'employees450', 'turnover', 'comp', 'hris', 'launchesPeople', 'integration'],
    framework: ['Strategy', 'Structure', 'Talent', 'Rewards', 'Culture', 'Measure'],
    frameworkNote: ['Tie the People plan to where the business is going.', 'Org design, roles, decision rights and the HR operating model.', 'Recruit, onboard and develop for the plan, not the last one.', 'Pay, benefits and total rewards that are fair and defensible.', 'Manager habits and rituals that make the culture real.', 'People analytics that show what is working and what isn’t.'],
    quote: 'Build the structure first. Then make it feel human.',
    roles: ['VP People / CHRO', 'Head of People Operations', 'HR consultant', 'People Ops builder (0-to-1)', 'Healthcare HR executive'],
    startHere: ['hris-implementation-plan', 'ca-hr-90-day-roadmap', 'onboarding-kit']
  },
  brand: {
    id: 'brand', num: '03',
    does: [['Brand strategy + visual identity', 'Positioning, naming, logo systems and the identity built around them.'], ['Creative direction', 'One point of view across every touchpoint, from deck to storefront.'], ['Marketing collateral, presentations + digital assets', 'Investor decks, brochures, social, landing pages and web.'], ['Brand systems', 'Guidelines and templates so the brand stays consistent without me.'], ['Logo, product design + packaging', 'Marks, labels and packaging that earn a second look.'], ['Event design + branding', 'Signage, collateral and experience design for launches and events.']],
    title: 'Build the brand', sub: 'Branding + Design',
    short: 'Brand',
    positioning: 'I turn business ideas into brands people can understand, trust and remember.',
    intro: 'A brand is an operating decision: what you say, how it looks, and whether the experience matches. I design all three, from the logo to the deck to the landing page.',
    heroLine: 'Brand identity, decks, healthcare collateral and web: ideas people can understand, trust and remember.',
    ctaWork: 'Explore the brand work',
    ctaTalk: 'Have an idea that needs a brand? Let’s talk.',
    resumeKey: 'creative', resumeLabel: 'Download the creative portfolio',
    capabilities: ['Brand strategy', 'Brand positioning', 'Naming', 'Logo systems', 'Visual identity', 'Brand guidelines', 'Marketing collateral', 'Healthcare collateral', 'Investor decks', 'Pitch decks', 'Executive presentations', 'Training decks', 'Social media assets', 'LinkedIn carousels', 'Business cards', 'Brochures', 'Referral forms', 'Letterhead', 'Employee communications', 'Employee handbooks', 'Onboarding kits', 'Logo design', 'Product design', 'Packaging', 'Event design', 'Event branding', 'Websites', 'Landing pages', 'HTML', 'CSS', 'Digital assets', 'Presentation systems', 'Infographics', 'Business storytelling', 'Executive portfolios'],
    proof: [{ name: 'Snow Story Studios', story: 'sss' }, { name: 'Spiro Senior launch brand', story: 'spiro' }],
    metrics: [],
    framework: ['Discover', 'Position', 'Name', 'Design', 'Systemize', 'Launch'],
    frameworkNote: ['Learn the business, the audience and what has to be true.', 'Say one clear thing, and say it better than anyone nearby.', 'Names and taglines that survive a skim.', 'Logo, palette, type and layout with a reason behind each.', 'Guidelines and templates so the brand stays consistent without me.', 'Web, collateral and decks, out the door and in use.'],
    quote: 'A good brand makes the next decision easier for everyone who touches it.',
    roles: ['Brand strategist', 'Marketing + brand lead', 'Creative consultant', 'Presentation + deck design', 'Healthcare marketing collateral'],
    startHere: ['everwell-brand-launch', 'tidewell-hospitality-brand', 'harbourlight-brochure']
  }
};
