/* ==========================================================
   THE PROOF LIBRARY
   To add a work sample: copy one object below, change the fields, save.
   No HTML to touch.

   Fields
     id, title, category, career_lane ('ops' | 'people' | 'brand', one or many),
     company_or_project, thumbnail, short_description, problem, what_i_built,
     my_role, tools_used[], outcome, file_url (download/open), preview_url
     (image, PDF or embeddable URL), featured, tags[], year, format,
     status ('live' | 'coming')  — 'coming' renders the "case study coming soon" state.

   Snow Story Studios work: set company_or_project to include 'Snow Story Studios' and it appears
   in the studio filter and section automatically. Add a couple of samples at a time.

   Filter tags used by the filter bar:
     dashboard, presentation, systems, process, healthcare, energy, ai, writing
   ========================================================== */
window.SITE = window.SITE || {};

SITE.FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'sss', label: 'Snow Story Studios', co: 'Snow Story Studios' },
  { id: 'ops', label: 'Business Operations', lane: 'ops' },
  { id: 'people', label: 'People + HR', lane: 'people' },
  { id: 'brand', label: 'Brand + Design', lane: 'brand' },
  { id: 'dashboard', label: 'Dashboards + Data', tag: 'dashboard' },
  { id: 'writing', label: 'Writing', tag: 'writing' },
  { id: 'presentation', label: 'Presentations', tag: 'presentation' },
  { id: 'systems', label: 'Systems + Process', tag: 'systems' },
  { id: 'healthcare', label: 'Healthcare', tag: 'healthcare' },
  { id: 'energy', label: 'Energy + Infrastructure', tag: 'energy' },
  { id: 'ai', label: 'AI + Automation', tag: 'ai' }
];

SITE.PROJECTS = [
  /* ---------- LIVE SAMPLES ---------- */
  {
    id: 'operating-dashboard', title: 'Monthly Operating Dashboard', category: 'Dashboards + Data',
    career_lane: ['ops'], company_or_project: 'Multi-site healthcare operations · illustrative figures',
    thumbnail: 'assets/work/thumb-operating-dashboard.jpg',
    short_description: 'Monthly executive view of a 30-bed facility: financials vs. plan, census, patient experience and revenue trend.',
    problem: 'Leaders need one monthly picture of financials vs. plan, census and patient experience, not five spreadsheets and an argument about whose number is right.',
    what_i_built: 'A single-page executive dashboard with defined metrics, a plan-vs-actual spine and a revenue trend, designed to run a monthly review from.',
    my_role: 'Defined the metrics, built the model and designed the page.',
    tools_used: ['Advanced Excel', 'KPI dashboards', 'Executive reporting'],
    outcome: 'One page a leadership team can run the monthly conversation from. Figures shown are illustrative.',
    file_url: 'assets/work/operating-dashboard.jpg', preview_url: 'assets/work/operating-dashboard.jpg',
    featured: true, tags: ['dashboard', 'healthcare', 'systems'], year: '', format: 'Dashboard · Image', status: 'live'
  },
  {
    id: 'management-review', title: 'Management Review Pack', category: 'Dashboards + Data',
    career_lane: ['ops'], company_or_project: 'Multi-site healthcare operations · illustrative figures',
    thumbnail: 'assets/work/thumb-management-review.jpg',
    short_description: 'Payer mix, revenue-cycle KPIs, workforce productivity and an action register with owners and next steps.',
    problem: 'Reviews that end with “good discussion” and no owners don’t change anything.',
    what_i_built: 'A management review pack that pairs payer mix, revenue-cycle KPIs and workforce productivity with an action register: owner, date, next step.',
    my_role: 'Designed the pack, the metric definitions and the review cadence.',
    tools_used: ['Advanced Excel', 'KPI scorecards', 'Operating cadence'],
    outcome: 'A review that ends with decisions and named owners. Figures shown are illustrative.',
    file_url: 'assets/work/management-review.jpg', preview_url: 'assets/work/management-review.jpg',
    featured: true, tags: ['dashboard', 'healthcare', 'process'], year: '', format: 'Operating review · Image', status: 'live'
  },
  {
    id: 'sec-duke-bartow-workflow', title: 'Utility Project Launch Workflow', category: 'Systems + Process',
    career_lane: ['ops'], company_or_project: 'SEC Global · utility-scale solar',
    thumbnail: 'assets/work/thumb-sec-duke-bartow-workflow.jpg',
    short_description: 'Six-phase mobilization model from contract award to steady state for a utility-scale solar project.',
    problem: 'Contracts were being won faster than the company could move awarded work into execution, with ad hoc onboarding on every project.',
    what_i_built: 'A six-phase mobilization model: contract award to steady state, with standard workflows, decision rights, workforce plans and real-time reporting.',
    my_role: 'VP, HR + Operations. Built the process and the infrastructure behind it.',
    tools_used: ['Microsoft Dynamics', 'Workforce + project BI', 'Process mapping'],
    outcome: 'Growth from ~5 Florida contracts to ~40 concurrent Southeast projects, with timelines about 25% faster.',
    file_url: 'assets/work/sec-duke-bartow-workflow.jpg', preview_url: 'assets/work/sec-duke-bartow-workflow.jpg',
    featured: true, tags: ['energy', 'systems', 'process', 'dashboard'], year: '', format: 'Process map · Image', status: 'live'
  },
  {
    id: 'everbloom-care-continuum', title: 'Investor Deck: The Care Model', category: 'Presentations',
    career_lane: ['brand', 'ops'], company_or_project: 'EverBloom · Snow Story Studios',
    thumbnail: 'assets/work/thumb-everbloom-care-continuum.jpg',
    short_description: 'One continuum across residential, PHP, IOP and outpatient care for a new women’s behavioral health program.',
    problem: 'A new behavioral health program had to explain four levels of care to investors in one clear picture.',
    what_i_built: 'A care-continuum slide that connects residential, PHP, IOP and outpatient care into one story, inside a full investor presentation system.',
    my_role: 'Business storytelling, deck architecture and visual design.',
    tools_used: ['Presentation design', 'Brand system', 'Business storytelling'],
    outcome: 'A clear, investor-ready explanation of the care model.',
    file_url: 'assets/work/everbloom-care-continuum.jpg', preview_url: 'assets/work/everbloom-care-continuum.jpg',
    featured: true, tags: ['presentation', 'healthcare'], year: '', format: 'Investor deck · Slide', status: 'live'
  },
  {
    id: 'everbloom-disciplines', title: 'Investor Deck: Operating Disciplines', category: 'Presentations',
    career_lane: ['brand', 'ops'], company_or_project: 'EverBloom · Snow Story Studios',
    thumbnail: 'assets/work/thumb-everbloom-disciplines.jpg',
    short_description: 'Governance, utilization, revenue cycle, outcomes and cost control built into the model from day one.',
    problem: 'Investors back operators who can show control, not just a good idea.',
    what_i_built: 'A slide that lays out governance, utilization, revenue cycle, outcomes and cost control as disciplines designed in from day one.',
    my_role: 'Operating-model content and presentation design.',
    tools_used: ['Presentation design', 'Operating model design'],
    outcome: 'The operating model, visible at a glance.',
    file_url: 'assets/work/everbloom-disciplines.jpg', preview_url: 'assets/work/everbloom-disciplines.jpg',
    featured: false, tags: ['presentation', 'healthcare', 'systems'], year: '', format: 'Investor deck · Slide', status: 'live'
  },
  {
    id: 'everbloom-accreditation', title: 'Investor Deck: Accreditation Plan', category: 'Presentations',
    career_lane: ['brand', 'ops'], company_or_project: 'EverBloom · Snow Story Studios',
    thumbnail: 'assets/work/thumb-everbloom-accreditation.jpg',
    short_description: 'A 14-month path to Joint Commission or CARF accreditation, with budget and payer checkpoints.',
    problem: 'Accreditation is a long road with money and payer milestones attached.',
    what_i_built: 'A 14-month accreditation roadmap with budget and payer checkpoints, designed to be read in one pass.',
    my_role: 'Planning content and presentation design.',
    tools_used: ['Presentation design', 'Project planning'],
    outcome: 'A timeline an investor can follow and hold the team to.',
    file_url: 'assets/work/everbloom-accreditation.jpg', preview_url: 'assets/work/everbloom-accreditation.jpg',
    featured: false, tags: ['presentation', 'healthcare', 'process'], year: '', format: 'Investor deck · Slide', status: 'live'
  },
  {
    id: 'everbloom-governance', title: 'Investor Deck: Outcomes + Governance', category: 'Presentations',
    career_lane: ['brand', 'ops'], company_or_project: 'EverBloom · Snow Story Studios',
    thumbnail: 'assets/work/thumb-everbloom-governance.jpg',
    short_description: 'Clinical outcomes, governance cadence and operating targets investors can track.',
    problem: 'Investors want targets they can track after the check clears.',
    what_i_built: 'A slide pairing clinical outcomes with a governance cadence and operating targets.',
    my_role: 'Governance content and presentation design.',
    tools_used: ['Presentation design', 'Operating cadence'],
    outcome: 'Targets and cadence stated up front.',
    file_url: 'assets/work/everbloom-governance.jpg', preview_url: 'assets/work/everbloom-governance.jpg',
    featured: false, tags: ['presentation', 'healthcare'], year: '', format: 'Investor deck · Slide', status: 'live'
  },
  {
    id: 'executive-portfolio', title: 'Executive Portfolio One-Pager', category: 'Presentations',
    career_lane: ['brand', 'ops'], company_or_project: 'Executive portfolio work',
    thumbnail: 'assets/work/thumb-executive-portfolio.jpg',
    short_description: 'A 30/60/90-day operating plan for entering a growth-stage infrastructure business.',
    problem: 'A new executive has about a quarter to show they understand the business and are moving it.',
    what_i_built: 'A one-page 30/60/90-day operating plan: what gets learned, fixed and built, in what order.',
    my_role: 'Planning and design.',
    tools_used: ['Executive presentation design', '30/60/90 planning'],
    outcome: 'An entry plan that fits on one page.',
    file_url: 'assets/work/executive-portfolio.jpg', preview_url: 'assets/work/executive-portfolio.jpg',
    featured: true, tags: ['presentation', 'energy', 'systems'], year: '', format: 'One-pager · Image', status: 'live'
  },
  {
    id: 'consulting-services', title: 'Consulting Services Flyer', category: 'Brand + Design',
    career_lane: ['brand'], company_or_project: 'Snow Story Studios',
    thumbnail: 'assets/work/thumb-consulting-services.jpg',
    short_description: 'Brand, operations and people services for growing businesses.',
    problem: 'A services business has to explain what it does in the time it takes to glance at a page.',
    what_i_built: 'A services flyer that packages brand, operations and people work for growing businesses.',
    my_role: 'Positioning, copy and design.',
    tools_used: ['Canva', 'Brand system', 'Marketing collateral'],
    outcome: 'A one-page way to say what the studio does.',
    file_url: 'assets/work/consulting-services.jpg', preview_url: 'assets/work/consulting-services.jpg',
    featured: true, tags: ['presentation'], year: '', format: 'Flyer · Image', status: 'live'
  },

  {
    id: 'consultant-one-pager', title: 'Strategy, Operations + Brand One-Pager', category: 'Brand + Design',
    career_lane: ['brand', 'ops'], company_or_project: 'Snow Story Studios',
    thumbnail: 'assets/work/consultant-one-pager.webp',
    short_description: 'Ten services, one page: brand, operations, systems, startups and people for growing businesses.',
    problem: 'A consultant who does brand and operations has to explain both without sounding scattered.',
    what_i_built: 'A one-page services overview: positioning line, ten capabilities and a closing promise, designed as a single system.',
    my_role: 'Positioning, copy and design.',
    tools_used: ['Canva', 'Brand system', 'Marketing collateral'],
    outcome: 'One page that says what the work is and who it is for.',
    file_url: 'assets/work/consultant-one-pager.webp', preview_url: 'assets/work/consultant-one-pager.webp',
    featured: true, tags: ['presentation'], year: '', format: 'One-pager · Image', status: 'live'
  },

  /* ---------- COMING SOON (placeholders: edit in place when the sample is ready) ---------- */
  {
    id: 'site-launch-playbook', title: 'New-Site Launch Playbook', category: 'Systems + Process',
    career_lane: ['ops', 'people'], company_or_project: 'Multi-site healthcare',
    thumbnail: '', short_description: 'Opening a site as a checklist with owners and dates, not an act of heroics.',
    problem: 'Every new site risks becoming a one-off: different hires, different vendors, different go-live dates.',
    what_i_built: 'A phase-by-phase launch plan: licensing, credentialing, hiring, systems, vendors, go-live and 90-day stabilization.',
    my_role: 'Author and owner.', tools_used: ['Smartsheet', 'Advanced Excel', 'SOPs'],
    outcome: '', file_url: '', preview_url: '', featured: false, tags: ['systems', 'process', 'healthcare'], year: '', format: 'PDF · Playbook', status: 'coming'
  },
  {
    id: 'workforce-model', title: 'Workforce + Capacity Planning Model', category: 'Dashboards + Data',
    career_lane: ['ops', 'people'], company_or_project: 'Multi-state operations',
    thumbnail: '', short_description: 'Headcount, capacity and cost in one model that answers “can we take this on?”',
    problem: 'Growth decisions get made before anyone knows whether the people and capacity are there.',
    what_i_built: 'A staffing and capacity model linking demand, headcount, hiring lead time and cost.',
    my_role: 'Model owner.', tools_used: ['Advanced Excel', 'Power BI'],
    outcome: '', file_url: '', preview_url: '', featured: false, tags: ['dashboard', 'systems'], year: '', format: 'XLSX · Model', status: 'coming'
  },
  {
    id: 'acquisition-integration', title: 'Acquisition Integration Plan', category: 'Business Operations',
    career_lane: ['ops'], company_or_project: 'M&A transition',
    thumbnail: '', short_description: 'Day-one to day-90 plan for bringing an acquired business into the operating model.',
    problem: 'Acquired teams lose time and trust when systems, pay and reporting lines stay unclear.',
    what_i_built: 'An integration plan across operations, finance, People, systems and communications.',
    my_role: 'Integration lead.', tools_used: ['Smartsheet', 'Microsoft 365'],
    outcome: '', file_url: '', preview_url: '', featured: false, tags: ['process', 'systems'], year: '', format: 'PDF · Plan', status: 'coming'
  },
  {
    id: 'vendor-scorecard', title: 'Vendor Scorecard', category: 'Dashboards + Data',
    career_lane: ['ops'], company_or_project: 'Vendor management',
    thumbnail: '', short_description: 'One page to see which vendors earn their contract and which need a conversation.',
    problem: 'Vendor reviews run on anecdote.',
    what_i_built: 'A scorecard with service, cost, responsiveness and risk, reviewed on a fixed cadence.',
    my_role: 'Designer and owner.', tools_used: ['Advanced Excel', 'Power BI'],
    outcome: '', file_url: '', preview_url: '', featured: false, tags: ['dashboard', 'process'], year: '', format: 'XLSX · Scorecard', status: 'coming'
  },
  {
    id: 'hris-implementation', title: 'HRIS Implementation Plan', category: 'People + HR',
    career_lane: ['people'], company_or_project: 'The Wave International',
    thumbnail: '', short_description: 'Moving a growing company onto a real HR and payroll system without losing a paycheck.',
    problem: 'Growing companies outrun spreadsheets and paper files long before they notice.',
    what_i_built: 'An implementation plan: data cleanup, configuration, payroll parallel run, training and go-live.',
    my_role: 'Project owner. Implemented BambooHR and Gusto.', tools_used: ['BambooHR', 'Gusto', 'ADP', 'Advanced Excel'],
    outcome: '', file_url: '', preview_url: '', featured: false, tags: ['systems', 'process'], year: '', format: 'PDF · Plan', status: 'coming'
  },
  {
    id: 'comp-framework', title: 'Compensation + Job Architecture Framework', category: 'People + HR',
    career_lane: ['people'], company_or_project: 'Collabera · Spiro Senior',
    thumbnail: '', short_description: 'Pay bands, levels and benchmarking that hold up to a hard question.',
    problem: 'Pay set one hire at a time creates inequity and cost nobody can explain.',
    what_i_built: 'A job architecture and compensation framework with benchmarking and clear bands.',
    my_role: 'Framework designer.', tools_used: ['Advanced Excel', 'Salary benchmarking'],
    outcome: 'Executive compensation benchmarking at Collabera improved related costs by about 45%.',
    file_url: '', preview_url: '', featured: false, tags: ['systems'], year: '', format: 'XLSX · Framework', status: 'coming'
  },
  {
    id: 'handbook-onboarding', title: 'Employee Handbook + Onboarding Kit', category: 'People + HR',
    career_lane: ['people', 'brand'], company_or_project: 'Multi-site employers',
    thumbnail: '', short_description: 'The first 90 days of employment, written and designed to be used.',
    problem: 'New hires learn the company from whoever they sit next to.',
    what_i_built: 'A handbook and onboarding kit: policies in plain language, checklists, manager guides and welcome materials.',
    my_role: 'Writer and designer.', tools_used: ['Canva', 'Microsoft 365', 'LearnUpon'],
    outcome: '', file_url: '', preview_url: '', featured: false, tags: ['writing', 'process'], year: '', format: 'PDF · Handbook', status: 'coming'
  },
  {
    id: 'ai-hr-workflow', title: 'AI-Assisted HR Workflow', category: 'AI + Automation',
    career_lane: ['people', 'ops'], company_or_project: 'HR + operations',
    thumbnail: '', short_description: 'Repeatable work moved to AI, with a person reviewing every output.',
    problem: 'HR and operations teams lose hours to drafting, summarizing and reformatting.',
    what_i_built: 'Prompted workflows for job descriptions, policy drafts, summaries and reporting, each with a human review step.',
    my_role: 'Designer and operator.', tools_used: ['Claude', 'ChatGPT', 'Copilot', 'Prompt engineering'],
    outcome: '', file_url: '', preview_url: '', featured: false, tags: ['ai', 'systems', 'process'], year: '', format: 'Workflow', status: 'coming'
  },
  {
    id: 'brand-identity-systems', title: 'Brand Identity Systems', category: 'Brand + Design',
    career_lane: ['brand'], company_or_project: 'Snow Story Studios',
    thumbnail: '', short_description: 'Logos, palettes, type and guidelines, built to be used by people who aren’t designers.',
    problem: 'A brand without a system gets rebuilt every time someone makes a flyer.',
    what_i_built: 'Identity systems: logo, palette, type, layout rules and starter templates.',
    my_role: 'Strategy and design.', tools_used: ['Figma', 'Canva', 'Adobe Acrobat'],
    outcome: '', file_url: '', preview_url: '', featured: false, tags: ['presentation'], year: '', format: 'PDF · Brand guide', status: 'coming'
  },
  {
    id: 'executive-brief-samples', title: 'Executive Briefs + Business Cases', category: 'Writing',
    career_lane: ['ops', 'brand'], company_or_project: 'Writing + thinking',
    thumbnail: '', short_description: 'Decisions on one page, with the numbers underneath.',
    problem: 'Executives decide quickly. The case has to be short and survive scrutiny.',
    what_i_built: 'Briefs and business cases: recommendation first, evidence behind it, risks named.',
    my_role: 'Author.', tools_used: ['Microsoft 365', 'Advanced Excel'],
    outcome: '', file_url: '', preview_url: '', featured: false, tags: ['writing'], year: '', format: 'PDF · Brief', status: 'coming'
  }
];
