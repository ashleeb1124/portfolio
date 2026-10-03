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

  {
    id: 'wave-site-launch-playbook', title: "New-Site Launch Playbook: 90-Day Checklist", category: 'Systems + Process',
    career_lane: ['ops', 'people'], company_or_project: "The Wave International",
    thumbnail: 'assets/work/thumb-wave-site-launch-playbook.jpg',
    short_description: "A 90-day opening checklist for a new behavioral health site, with owners, vendors, licensing and go-live gates.",
    problem: "Every new site risks becoming a one-off: different hires, vendors and go-live dates.",
    what_i_built: "A phase-by-phase launch playbook covering licensing and credentialing, facilities, hiring, vendors, systems, policies and the first 30 days after opening, with key roles, success metrics and lessons learned.",
    my_role: "Author and owner of the launch process.",
    tools_used: ["Launch playbooks", "SOPs", "Project planning"],
    outcome: "A repeatable way to open sites, used across the facility growth from about $500K to $24M in annualized revenue.",
    file_url: 'assets/work/wave-site-launch-playbook.jpg', preview_url: 'assets/work/wave-site-launch-playbook.jpg',
    featured: false, tags: ['systems', 'process', 'healthcare'], year: '', format: "Playbook \u00b7 Image", status: 'live'
  },
  {
    id: 'scaling-case-study', title: "Case Study: Scaling from 5 Contracts to ~40 Projects", category: 'Business Operations',
    career_lane: ['ops'], company_or_project: "SEC Global",
    thumbnail: 'assets/work/thumb-scaling-case-study.jpg',
    short_description: "Two-page operations case study: situation, challenges, my role and what I did to scale a multi-state workforce.",
    problem: "Contracts were being won in waves while onboarding stayed ad hoc, with leaders stretched across too many projects at once.",
    what_i_built: "A standard contract-launch process: workforce plan, vendor setup, reporting and decision rights built once and reused on every project.",
    my_role: "VP, HR + Operations.",
    tools_used: ["Microsoft Dynamics", "Workforce BI", "Process design"],
    outcome: "~5 Florida contracts to ~40 concurrent Southeast projects, about 25% faster timelines and about 40% lower admin cost.",
    file_url: 'assets/work/scaling-case-study.pdf', preview_url: 'assets/work/scaling-case-study.pdf',
    featured: false, tags: ['systems', 'process', 'energy'], year: '', format: "Case study \u00b7 PDF", status: 'live'
  },
  {
    id: 'master-opening-roadmap', title: "Master Opening Roadmap", category: 'Business Operations',
    career_lane: ['ops'], company_or_project: "Opening plan work sample",
    thumbnail: 'assets/work/thumb-master-opening-roadmap.jpg',
    short_description: "A Gantt-style master roadmap that sequences operations, licensing, hiring and systems through opening.",
    problem: "Opening a site means dozens of dependent workstreams, and delays hide until they are expensive.",
    what_i_built: "An eight-page master opening plan with workstreams, timing bars, owners and milestones laid out on one timeline.",
    my_role: "Planner and designer.",
    tools_used: ["Smartsheet", "Advanced Excel", "Project planning"],
    outcome: "One view of what has to happen, in what order, and who owns it.",
    file_url: 'assets/work/master-opening-roadmap.pdf', preview_url: 'assets/work/master-opening-roadmap.pdf',
    featured: false, tags: ['process', 'systems'], year: '', format: "Roadmap \u00b7 PDF", status: 'live'
  },
  {
    id: 'hris-implementation-plan', title: "HRIS Implementation Plan", category: 'People + HR',
    career_lane: ['people', 'ops'], company_or_project: "Spiro Senior",
    thumbnail: 'assets/work/thumb-hris-implementation-plan.jpg',
    short_description: "BambooHR + Gusto selection, data migration, configuration and a training roadmap on one page.",
    problem: "A new practice needs a real HR and payroll system on day one, without losing a paycheck.",
    what_i_built: "An implementation plan: project objectives, platform selection criteria, five-phase timeline, data-migration workstreams, training plan and risk controls.",
    my_role: "Project owner. Built HR, payroll, benefits and job architecture from scratch.",
    tools_used: ["BambooHR", "Gusto", "Advanced Excel"],
    outcome: "Payroll and people systems live from the start, with a defined migration and training path.",
    file_url: 'assets/work/hris-implementation-plan.jpg', preview_url: 'assets/work/hris-implementation-plan.jpg',
    featured: false, tags: ['systems', 'process'], year: '', format: "Implementation plan \u00b7 Image", status: 'live'
  },
  {
    id: 'ca-hr-90-day-roadmap', title: "90-Day HR Roadmap + California Compliance Guide", category: 'People + HR',
    career_lane: ['people'], company_or_project: "Illustrative sample \u00b7 California employers",
    thumbnail: 'assets/work/thumb-ca-hr-90-day-roadmap.jpg',
    short_description: "A phased plan for standing up HR in a 50-employee California business, with a quick-reference compliance guide.",
    problem: "Small California employers face complex rules and rarely have time to build HR in the right order.",
    what_i_built: "A 30-60-90 day HR roadmap (stabilize, build, embed) with deliverables for each phase, plus a one-page California requirements guide for hiring, wages and hours, leave, ER, policies and performance.",
    my_role: "Author and designer.",
    tools_used: ["California compliance", "HR operating model", "Canva"],
    outcome: "A clear first 90 days and a checklist a business owner can actually use.",
    file_url: 'assets/work/ca-hr-90-day-roadmap.jpg', preview_url: 'assets/work/ca-hr-90-day-roadmap.jpg',
    featured: false, tags: ['systems', 'process', 'writing'], year: '', format: "Roadmap + guide \u00b7 Image", status: 'live'
  },
  {
    id: 'ca-hr-policy-toolkit', title: "California HR Operations + Employee Handbook Toolkit", category: 'People + HR',
    career_lane: ['people', 'brand'], company_or_project: "Illustrative sample \u00b7 California employers",
    thumbnail: 'assets/work/thumb-ca-hr-policy-toolkit.jpg',
    short_description: "An HR roadmap paired with a California-focused employee handbook and policy toolkit.",
    problem: "Employers need compliant, readable policies, not a binder nobody opens.",
    what_i_built: "A two-part toolkit: a California HR operations roadmap and an employee handbook with table of contents, key policy examples and sample templates.",
    my_role: "Author and designer.",
    tools_used: ["Policy writing", "California compliance", "Canva"],
    outcome: "A handbook and roadmap packaged so a small employer can adopt them quickly.",
    file_url: 'assets/work/ca-hr-policy-toolkit.jpg', preview_url: 'assets/work/ca-hr-policy-toolkit.jpg',
    featured: false, tags: ['writing', 'process'], year: '', format: "Toolkit \u00b7 Image", status: 'live'
  },
  {
    id: 'peo-to-adp-playbook', title: "PEO to ADP Workforce Now Conversion Playbook", category: 'People + HR',
    career_lane: ['people', 'ops'], company_or_project: "Illustrative sample \u00b7 payroll transition",
    thumbnail: 'assets/work/thumb-peo-to-adp-playbook.jpg',
    short_description: "A first-payroll command-center playbook for moving a workforce from a PEO to ADP Workforce Now.",
    problem: "Payroll conversions fail on the first pay run: missing deductions, direct deposit gaps and unanswered employee questions.",
    what_i_built: "A command-center plan: objectives, support lanes (payroll, benefits, access, time, cases), first-payroll triage workflow, first-week plan, sample KPIs and a knowledge-base snapshot.",
    my_role: "Author. Built from payroll and HRIS implementation experience.",
    tools_used: ["ADP Workforce Now", "Payroll", "SOPs"],
    outcome: "A day-by-day plan that protects the first paycheck and keeps employees informed.",
    file_url: 'assets/work/peo-to-adp-playbook.jpg', preview_url: 'assets/work/peo-to-adp-playbook.jpg',
    featured: false, tags: ['systems', 'process'], year: '', format: "Playbook \u00b7 Image", status: 'live'
  },
  {
    id: 'handbook-before-after', title: "Employee Handbook Redesign: Before + After", category: 'People + HR',
    career_lane: ['people', 'brand'], company_or_project: "Illustrative sample \u00b7 Rivermark",
    thumbnail: 'assets/work/thumb-handbook-before-after.jpg',
    short_description: "A PTO policy rewritten and redesigned: from a dense page of text to something employees will read.",
    problem: "Most handbooks are written for lawyers, so employees skip them.",
    what_i_built: "A side-by-side redesign of the same policy: plain-language rewrite, clear accrual table, icons and examples, in a consistent branded layout.",
    my_role: "Policy writer and designer.",
    tools_used: ["Policy writing", "Canva", "Brand system"],
    outcome: "The same policy, clearer to read and easier to follow.",
    file_url: 'assets/work/handbook-before-after.jpg', preview_url: 'assets/work/handbook-before-after.jpg',
    featured: false, tags: ['writing', 'presentation'], year: '', format: "Handbook design \u00b7 Image", status: 'live'
  },
  {
    id: 'onboarding-kit', title: "New-Hire Onboarding Kit", category: 'People + HR',
    career_lane: ['people', 'brand'], company_or_project: "Illustrative sample \u00b7 Northline Works",
    thumbnail: 'assets/work/thumb-onboarding-kit.jpg',
    short_description: "A welcome guide, first-week checklist and 30/60/90 plan for a smooth employee start.",
    problem: "New hires learn the company from whoever sits next to them.",
    what_i_built: "A branded onboarding kit: welcome letter and values, a day-by-day first-week checklist and a 30/60/90 plan with outcomes for each stage.",
    my_role: "Writer and designer.",
    tools_used: ["Onboarding design", "Canva", "Microsoft 365"],
    outcome: "Faster ramp-up and a consistent first week for every hire.",
    file_url: 'assets/work/onboarding-kit.jpg', preview_url: 'assets/work/onboarding-kit.jpg',
    featured: false, tags: ['writing', 'process'], year: '', format: "Onboarding kit \u00b7 Image", status: 'live'
  },
  {
    id: 'everwell-brand-launch', title: "Everwell: Brand Launch Portfolio", category: 'Brand + Design',
    career_lane: ['brand'], company_or_project: "Illustrative sample \u00b7 Snow Story Studios",
    thumbnail: 'assets/work/thumb-everwell-brand-launch.jpg',
    short_description: "A complete brand launch for a wellness company: identity, collateral, social, guidelines and launch materials.",
    problem: "A new business has to look credible and consistent from the first day.",
    what_i_built: "Brand strategy, logo and color system, business collateral, digital and social assets, brand guidelines and a launch presentation.",
    my_role: "Brand strategy and creative direction.",
    tools_used: ["Brand strategy", "Visual identity", "Canva"],
    outcome: "A concept brand system, from idea to market-ready materials.",
    file_url: 'assets/work/everwell-brand-launch.jpg', preview_url: 'assets/work/everwell-brand-launch.jpg',
    featured: false, tags: ['presentation'], year: '', format: "Brand portfolio \u00b7 Image", status: 'live'
  },
  {
    id: 'tidewell-hospitality-brand', title: "Tidewell: Boutique Hotel Brand System", category: 'Brand + Design',
    career_lane: ['brand'], company_or_project: "Illustrative sample \u00b7 Snow Story Studios",
    thumbnail: 'assets/work/thumb-tidewell-hospitality-brand.jpg',
    short_description: "Identity, signage, key cards, web and collateral for a coastal boutique hotel.",
    problem: "A hospitality brand has to feel the same on a website, a key card and a lobby wall.",
    what_i_built: "Logo and wordmark, palette and type, welcome collateral, wayfinding signage, mobile web and merchandise.",
    my_role: "Brand and creative direction.",
    tools_used: ["Visual identity", "Signage", "Canva"],
    outcome: "A concept identity that carries across digital and physical touchpoints.",
    file_url: 'assets/work/tidewell-hospitality-brand.jpg', preview_url: 'assets/work/tidewell-hospitality-brand.jpg',
    featured: false, tags: ['presentation'], year: '', format: "Brand system \u00b7 Image", status: 'live'
  },
  {
    id: 'harbourlight-brochure', title: "Harbourlight: Healthcare Brochure", category: 'Brand + Design',
    career_lane: ['brand', 'ops'], company_or_project: "Illustrative sample \u00b7 healthcare collateral",
    thumbnail: 'assets/work/thumb-harbourlight-brochure.jpg',
    short_description: "A tri-fold referral brochure for a psychological assessment practice.",
    problem: "Referring providers need to understand services, process and how to refer in one glance.",
    what_i_built: "A print and digital tri-fold with services, assessment packages, patient journey and referral information, in a calm, clinical-but-warm brand.",
    my_role: "Brand and layout design.",
    tools_used: ["Healthcare collateral", "Print design", "Canva"],
    outcome: "Collateral that makes the referral decision easier.",
    file_url: 'assets/work/harbourlight-brochure.jpg', preview_url: 'assets/work/harbourlight-brochure.jpg',
    featured: false, tags: ['presentation', 'healthcare'], year: '', format: "Brochure \u00b7 Image", status: 'live'
  },
  {
    id: 'daily-bean-brand', title: "Daily Bean: Coffee Brand + Packaging", category: 'Brand + Design',
    career_lane: ['brand'], company_or_project: "Illustrative sample \u00b7 Snow Story Studios",
    thumbnail: 'assets/work/thumb-daily-bean-brand.jpg',
    short_description: "Identity, packaging, cups, menu, loyalty card and social for a coffee company.",
    problem: "A food-and-beverage brand lives on packaging and in the customer\u2019s hand.",
    what_i_built: "Logo system, palette and type, bags and cups, menu, loyalty card, social templates and a mobile experience.",
    my_role: "Brand strategy and design.",
    tools_used: ["Packaging design", "Visual identity", "Canva"],
    outcome: "A concept brand with a consistent look from bag to phone screen.",
    file_url: 'assets/work/daily-bean-brand.jpg', preview_url: 'assets/work/daily-bean-brand.jpg',
    featured: false, tags: ['presentation'], year: '', format: "Brand + packaging \u00b7 Image", status: 'live'
  },
  {
    id: 'harvest-and-hue-brand', title: "Harvest & Hue: Food Brand + Packaging", category: 'Brand + Design',
    career_lane: ['brand'], company_or_project: "Illustrative sample \u00b7 Snow Story Studios",
    thumbnail: 'assets/work/thumb-harvest-and-hue-brand.jpg',
    short_description: "Logo, packaging, photography direction and social for a better-for-you food brand.",
    problem: "A new food brand has to stand out on a shelf and a feed.",
    what_i_built: "Logo and palette, jar and pouch packaging, labels, mobile and social layouts and photography direction.",
    my_role: "Brand strategy and design.",
    tools_used: ["Packaging design", "Visual identity", "Canva"],
    outcome: "A concept brand built for shelf and screen.",
    file_url: 'assets/work/harvest-and-hue-brand.jpg', preview_url: 'assets/work/harvest-and-hue-brand.jpg',
    featured: false, tags: ['presentation'], year: '', format: "Brand + packaging \u00b7 Image", status: 'live'
  },
  {
    id: 'northline-logistics-brand', title: "Northline Logistics: Brand Strategy + Identity", category: 'Brand + Design',
    career_lane: ['brand', 'ops'], company_or_project: "Illustrative sample \u00b7 Snow Story Studios",
    thumbnail: 'assets/work/thumb-northline-logistics-brand.jpg',
    short_description: "Strategy snapshot, audience and messaging, brand applications and a visual identity system for a freight company.",
    problem: "A logistics company has to sound dependable and look modern in a crowded category.",
    what_i_built: "A brand strategy snapshot, audience and messaging, identity system and applications across fleet, digital and collateral.",
    my_role: "Brand strategy and design.",
    tools_used: ["Brand strategy", "Visual identity", "Canva"],
    outcome: "A concept identity with a clear message and a consistent system.",
    file_url: 'assets/work/northline-logistics-brand.jpg', preview_url: 'assets/work/northline-logistics-brand.jpg',
    featured: false, tags: ['presentation'], year: '', format: "Brand strategy \u00b7 Image", status: 'live'
  },

  {
    id: 'resume-coo-sample', title: "Executive Resume Design: COO", category: 'Brand + Design',
    career_lane: ['brand', 'people'], company_or_project: 'Illustrative sample · fictional candidate',
    thumbnail: 'assets/work/thumb-resume-coo-sample.jpg',
    short_description: "A two-column executive resume with a profile, key skills, experience and a bold photo-and-landscape header.",
    problem: 'Most resumes bury the story. A hiring manager gives them seconds.',
    what_i_built: "An executive resume layout: positioning summary, skills sidebar, role-by-role results and credentials, in a palette that matches a personal brand.",
    my_role: 'Resume writing and design.',
    tools_used: ['Canva', 'Resume writing', 'Brand system'],
    outcome: 'A resume that reads quickly and makes the strongest points first. The candidate is fictional.',
    file_url: 'assets/work/resume-coo-sample.jpg', preview_url: 'assets/work/resume-coo-sample.jpg',
    featured: false, tags: ['presentation', 'writing'], year: '', format: "Resume \u00b7 Image", status: 'live'
  },
  {
    id: 'resume-hr-director-sample', title: "Resume Design: HR Director (Manufacturing)", category: 'Brand + Design',
    career_lane: ['brand', 'people'], company_or_project: 'Illustrative sample · fictional candidate',
    thumbnail: 'assets/work/thumb-resume-hr-director-sample.jpg',
    short_description: "An HR leadership resume with a headline tagline, quantified achievements and certifications.",
    problem: 'Most resumes bury the story. A hiring manager gives them seconds.',
    what_i_built: "A landscape resume with a branded header, experience with measurable results, a key-achievements panel and credentials.",
    my_role: 'Resume writing and design.',
    tools_used: ['Canva', 'Resume writing', 'Brand system'],
    outcome: 'A resume that reads quickly and makes the strongest points first. The candidate is fictional.',
    file_url: 'assets/work/resume-hr-director-sample.jpg', preview_url: 'assets/work/resume-hr-director-sample.jpg',
    featured: false, tags: ['presentation', 'writing'], year: '', format: "Resume \u00b7 Image", status: 'live'
  },
  {
    id: 'resume-systems-engineer-sample', title: "Resume Design: Systems Engineer", category: 'Brand + Design',
    career_lane: ['brand', 'people'], company_or_project: 'Illustrative sample · fictional candidate',
    thumbnail: 'assets/work/thumb-resume-systems-engineer-sample.jpg',
    short_description: "A technical resume with a dark theme, skills visualization and tools list.",
    problem: 'Most resumes bury the story. A hiring manager gives them seconds.',
    what_i_built: "A resume that shows experience, skills and tooling at a glance, with a distinct visual identity for a technical candidate.",
    my_role: 'Resume writing and design.',
    tools_used: ['Canva', 'Resume writing', 'Brand system'],
    outcome: 'A resume that reads quickly and makes the strongest points first. The candidate is fictional.',
    file_url: 'assets/work/resume-systems-engineer-sample.jpg', preview_url: 'assets/work/resume-systems-engineer-sample.jpg',
    featured: false, tags: ['presentation', 'writing'], year: '', format: "Resume \u00b7 Image", status: 'live'
  },
  {
    id: 'resume-entry-level-sample', title: "Resume Design: Entry-Level Apprentice", category: 'Brand + Design',
    career_lane: ['brand', 'people'], company_or_project: 'Illustrative sample · fictional candidate',
    thumbnail: 'assets/work/thumb-resume-entry-level-sample.jpg',
    short_description: "A one-page apprentice resume that leads with momentum, skills and quick-scan achievements.",
    problem: 'Most resumes bury the story. A hiring manager gives them seconds.',
    what_i_built: "A one-page resume for an early-career candidate: profile, core strengths, relevant experience and selected achievements.",
    my_role: 'Resume writing and design.',
    tools_used: ['Canva', 'Resume writing', 'Brand system'],
    outcome: 'A resume that reads quickly and makes the strongest points first. The candidate is fictional.',
    file_url: 'assets/work/resume-entry-level-sample.pdf', preview_url: 'assets/work/resume-entry-level-sample.pdf',
    featured: false, tags: ['presentation', 'writing'], year: '', format: "Resume \u00b7 PDF", status: 'live'
  },

  /* ---------- COMING SOON (placeholders: edit in place when the sample is ready) ---------- */
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
