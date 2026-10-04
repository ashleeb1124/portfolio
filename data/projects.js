/* ==========================================================
   THE PROOF LIBRARY
   To add a work sample: copy one object below, change the fields, save.
   No HTML to touch.

   Fields
     id, title, category, career_lane ('ops' | 'people' | 'transform', one or many). Creative work lives in data/creative.js,
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
  { id: 'ops', label: 'Business Operations', lane: 'ops' },
  { id: 'people', label: 'People + HR', lane: 'people' },
  { id: 'transform', label: 'Systems + Transformation', lane: 'transform' },
  { id: 'dashboard', label: 'Dashboards + Data', tag: 'dashboard' },
  { id: 'writing', label: 'Writing', tag: 'writing' },
  { id: 'systems', label: 'Systems + Process', tag: 'systems' },
  { id: 'healthcare', label: 'Healthcare', tag: 'healthcare' },
  { id: 'energy', label: 'Energy + Infrastructure', tag: 'energy' },
  { id: 'ai', label: 'AI + Automation', tag: 'ai' }
];

/* ---------- SYSTEMS & TOOLKITS ----------
   A project with  kit: '<category label>'  appears in Systems & Toolkits under that
   category (categories with no items stay hidden). Without  kit  it stays in Work Samples. */
SITE.KIT_CATEGORIES = [
  { label: 'Dashboards & KPI Systems', blurb: 'One page of defined metrics that leaders can run the business from.' },
  { label: 'Operating Reviews & Performance Tracking', blurb: 'Review packs that end with owners, dates and next steps.' },
  { label: 'Launch Plans & Opening Playbooks', blurb: 'Repeatable plans for opening a site, from licensing to go-live.' },
  { label: 'Process Optimization', blurb: 'Process maps and redesigns that remove manual work and wait time.' },
  { label: 'Workflow & Systems Design', blurb: 'Phased workflows with decision rights, reporting and technology built in.' },
  { label: 'HR / People Operations Tools', blurb: 'Policies, onboarding and pay structures that scale with the business.' },
  { label: 'Implementation Plans', blurb: 'Moving a company onto a new system without missing a paycheck.' },
  { label: 'Checklists & SOPs', blurb: 'The standard work that survives personnel changes.' },
  { label: 'Capacity / Staffing Models', blurb: 'Demand, headcount and cost in one model.' },
  { label: 'Budget / Variance Tracking', blurb: 'Plan against actual, with the variance explained.' },
  { label: 'Vendor / SLA Scorecards', blurb: 'Service, cost and risk, reviewed on a fixed cadence.' },
  { label: 'Integration / 30-60-90 Plans', blurb: 'Sequenced plans for the first 90 days of a launch, program or integration.' },
];

SITE.PROJECTS = [
  /* ---------- LIVE SAMPLES ---------- */
  {
    kit: 'Dashboards & KPI Systems',
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
    kit: 'Operating Reviews & Performance Tracking',
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
    kit: 'Workflow & Systems Design',
    id: 'sec-duke-bartow-workflow', title: 'Utility Project Launch Workflow', category: 'Systems + Process',
    career_lane: ['ops', 'transform'], company_or_project: 'SEC Global · utility-scale solar',
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
    kit: 'Launch Plans & Opening Playbooks',
    id: 'wave-site-launch-playbook', title: "New-Site Launch Playbook: 90-Day Checklist", category: 'Systems + Process',
    career_lane: ['ops', 'people', 'transform'], company_or_project: "The Wave International",
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
    kit: 'Process Optimization',
    id: 'scaling-case-study', title: "Case Study: Scaling from 5 Contracts to ~40 Projects", category: 'Business Operations',
    career_lane: ['ops', 'transform'], company_or_project: "SEC Global",
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
    kit: 'Launch Plans & Opening Playbooks',
    id: 'master-opening-roadmap', title: "Master Opening Roadmap", category: 'Business Operations',
    career_lane: ['ops', 'transform'], company_or_project: "Opening plan work sample",
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
    kit: 'Implementation Plans',
    id: 'hris-implementation-plan', title: "HRIS Implementation Plan", category: 'People + HR',
    career_lane: ['people', 'ops', 'transform'], company_or_project: "Spiro Senior",
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
    kit: 'Integration / 30-60-90 Plans',
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
    kit: 'HR / People Operations Tools',
    id: 'ca-hr-policy-toolkit', title: "California HR Operations + Employee Handbook Toolkit", category: 'People + HR',
    career_lane: ['people'], company_or_project: "Illustrative sample \u00b7 California employers",
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
    kit: 'Implementation Plans',
    id: 'peo-to-adp-playbook', title: "PEO to ADP Workforce Now Conversion Playbook", category: 'People + HR',
    career_lane: ['people', 'ops', 'transform'], company_or_project: "Illustrative sample \u00b7 payroll transition",
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
    kit: 'HR / People Operations Tools',
    id: 'onboarding-kit', title: "New-Hire Onboarding Kit", category: 'People + HR',
    career_lane: ['people'], company_or_project: "Illustrative sample \u00b7 Northline Works",
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


  /* ---------- COMING SOON (placeholders: edit in place when the sample is ready) ---------- */
  {
    kit: 'Capacity / Staffing Models',
    id: 'workforce-model', title: 'Workforce + Capacity Planning Model', category: 'Dashboards + Data',
    career_lane: ['ops', 'people', 'transform'], company_or_project: 'SEC Global · illustrative figures',
    thumbnail: 'assets/work/thumb-workforce-model.jpg',
    short_description: 'Headcount, capacity and labor cost in one model that answers “can we take this on?”',
    problem: 'Growth decisions get made before anyone knows whether the people and capacity are there.',
    what_i_built: 'A staffing and capacity model linking demand, headcount, hiring lead time and cost: projected vs. required headcount, capacity vs. demand, headcount by function, a hiring plan against time-to-hire, a labor-cost forecast against budget, capacity utilization, a role-based hiring plan and a project pipeline with resource requirements.',
    my_role: 'Model owner. Built the model and the planning view for leadership.',
    tools_used: ['Advanced Excel', 'Power BI', 'Workforce planning'],
    outcome: 'One view that shows whether the workforce and capacity are in place before taking on the next project. Figures shown are illustrative.',
    file_url: 'assets/work/workforce-model.jpg', preview_url: 'assets/work/workforce-model.jpg',
    featured: false, tags: ['dashboard', 'systems', 'energy'], year: '', format: 'Planning model · Image', status: 'live'
  },
  {
    kit: 'Integration / 30-60-90 Plans',
    id: 'acquisition-integration', title: 'Acquisition Integration Plan', category: 'Business Operations',
    career_lane: ['ops', 'people', 'transform'], company_or_project: 'Synergy Medical Centers · illustrative sample',
    thumbnail: 'assets/work/thumb-acquisition-integration.jpg',
    short_description: 'A six-workstream integration plan with owners, dates, deliverables and milestones in a Smartsheet Gantt.',
    problem: 'Acquired teams lose time and trust when systems, pay and reporting lines stay unclear.',
    what_i_built: 'An integration plan across six workstreams: operations, finance, people, systems, communications and stakeholder engagement, and key milestones. Each has an executive owner, task-level dates, status, percent complete, the key deliverable and a Gantt timeline.',
    my_role: 'Integration lead. Built the plan and ran the cadence.',
    tools_used: ['Smartsheet', 'Project planning', 'Microsoft 365'],
    outcome: 'One plan that shows every workstream, owner and milestone from day one to full integration. Dates and statuses shown are illustrative.',
    file_url: 'assets/work/acquisition-integration.jpg', preview_url: 'assets/work/acquisition-integration.jpg',
    featured: false, tags: ['process', 'systems', 'healthcare'], year: '', format: 'Integration plan · Image', status: 'live'
  },
  {
    kit: 'Vendor / SLA Scorecards',
    id: 'vendor-scorecard', title: 'Vendor Scorecard + SLA', category: 'Dashboards + Data',
    career_lane: ['ops', 'transform'], company_or_project: 'Spiro Senior · illustrative figures',
    thumbnail: 'assets/work/thumb-vendor-scorecard.jpg',
    short_description: 'One page to see which vendors earn their contract and which need a conversation, reviewed on a fixed cadence.',
    problem: 'Vendor reviews run on anecdote, so the vendors that need attention get noticed late.',
    what_i_built: 'A vendor scorecard with service, cost, responsiveness and risk scores for each strategic vendor, a weighted performance summary (service 30%, cost 25%, responsiveness 25%, risk 20%), an SLA compliance trend, a risk-versus-performance view, a governance cadence (monthly, quarterly, annual renewal) and key insights with actions.',
    my_role: 'Designer and owner of the scorecard and the review cadence.',
    tools_used: ['Advanced Excel', 'Power BI', 'Vendor management'],
    outcome: 'A scorecard that flags at-risk vendors, shows SLA compliance moving over time and ends each review with named actions. Figures shown are illustrative.',
    file_url: 'assets/work/vendor-scorecard.jpg', preview_url: 'assets/work/vendor-scorecard.jpg',
    featured: false, tags: ['dashboard', 'process', 'healthcare'], year: '', format: 'Scorecard · Image', status: 'live'
  },
  {
    kit: 'Workflow & Systems Design',
    id: 'custom-lms-healthcare', title: 'Custom-Built LMS for Healthcare', category: 'Systems + Process',
    career_lane: ['people', 'ops', 'transform'], company_or_project: 'The Wave International · illustrative figures',
    thumbnail: 'assets/work/thumb-custom-lms-healthcare.jpg',
    short_description: 'The Wave University: a learning platform built for a healthcare organization, with compliance tracking, required courses and a certification tracker.',
    problem: 'Healthcare teams have to prove training and certifications are current, and off-the-shelf learning tools were slow to fit that need.',
    what_i_built: 'A custom learning management system for healthcare staff: a personal dashboard with compliance rate, overdue items and expiring certifications; required courses in progress; upcoming deadlines; assigned learning paths by role; training categories; featured courses; and a transcript and certification tracker.',
    my_role: 'Product owner and builder. Designed the platform and built it.',
    tools_used: ['Base44', 'Custom LMS development', 'Training content', 'Learning workflows'],
    outcome: 'One place where staff see what is required and what is due, and where leaders see compliance at a glance. Figures shown are illustrative.',
    file_url: 'assets/work/custom-lms-healthcare.jpg', preview_url: 'assets/work/custom-lms-healthcare.jpg',
    featured: false, tags: ['systems', 'healthcare', 'process'], year: '', format: 'Custom LMS · Image', status: 'live'
  }
];
