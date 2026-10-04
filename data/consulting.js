/* ==========================================================
   CONSULTING PORTFOLIO: Services > Business Operations & HR Consulting
   > Selected Consulting Work. Same fields as data/projects.js, plus
     group (the heading it sits under), focus (the small label on the card)
     and optional pages: [{ src, caption }] for a multi-page project viewer.
   ========================================================== */
window.SITE = window.SITE || {};

SITE.CONSULTING_GROUPS = [
  { label: "Business Strategy & Growth", blurb: "Investor and business-development materials that tell a business story and show how it will run." },
  { label: "HR Infrastructure", blurb: "Policies, handbooks and the employee experience around them." },
  { label: "Process & Workflow Design", blurb: "Workflows and forms that move work cleanly from one team to the next." },
  { label: "Revenue Operations", blurb: "Sales process, pipeline visibility and the metrics that run it." },
  { label: "Customer Experience", blurb: "Service standards, escalation and root-cause improvement." },
  { label: "Documentation & SOPs", blurb: "Standard work, written down, owned and measured." },
];

SITE.CONSULTING = [
  {
    group: 'Business Strategy & Growth', focus: 'Business Strategy & Growth',
    id: 'everbloom-investor-deck', title: 'EverBloom Investor & Business Development Deck', category: 'Business Strategy & Growth',
    career_lane: ['ops'], company_or_project: 'EverBloom Center for Women',
    thumbnail: 'assets/work/thumb-everbloom-care-continuum.jpg',
    short_description: 'The investor and business-development deck for a new women’s behavioral health program: the care model, operating disciplines, accreditation path and governance in one story.',
    problem: 'A new behavioral health program had to explain four levels of care, and prove it could run with control, to investors in a single clear story.',
    what_i_built: 'A full investor and business-development presentation: the care continuum across residential, PHP, IOP and outpatient care; operating disciplines (governance, utilization, revenue cycle, outcomes and cost control) designed in from day one; a 14-month accreditation roadmap with budget and payer checkpoints; and clinical outcomes with a governance cadence and operating targets. Two slides are shown here as an example.',
    my_role: 'Business storytelling, deck architecture, operating-model content and presentation design.',
    tools_used: ['Presentation design', 'Business storytelling', 'Operating model design', 'Project planning'],
    outcome: 'A clear, investor-ready explanation of the care model and how it will be run.',
    pages: [
      { src: 'assets/work/everbloom-care-continuum.jpg', caption: 'The Care Model: one continuum across residential, PHP, IOP and outpatient care' },
      { src: 'assets/work/everbloom-disciplines.jpg', caption: 'Operating Disciplines: governance, utilization, revenue cycle, outcomes and cost control' }
    ],
    file_url: 'assets/work/everbloom-care-continuum.jpg', preview_url: 'assets/work/everbloom-care-continuum.jpg',
    featured: true, tags: ['presentation', 'healthcare'], year: '', format: 'Investor deck · 2 slides shown', status: 'live'
  },
  {
    group: 'HR Infrastructure',
    focus: 'HR Infrastructure · Policy Development · Employee Experience · Documentation',
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
    group: "Process & Workflow Design", focus: "Operational Workflow & Business Documentation",
    id: 'provider-referral-form', title: "Provider Referral Form", category: "Operational Workflow & Business Documentation",
    career_lane: ['ops'], company_or_project: "Harbourlight Psychological Assessments \u00b7 fictional sample by Snow Story Studios",
    thumbnail: 'assets/work/thumb-provider-referral-form.jpg',
    short_description: "A six-section intake form that moves a referral from a provider to the clinical team in one pass.",
    problem: "Referrals arrive incomplete, so intake spends days chasing missing information.",
    what_i_built: "A structured referral form: referring provider, patient information, reason for referral, evaluation requested, clinical notes with records attached, payment preference, signature and a confidentiality notice, designed to be faxed or completed digitally.",
    my_role: "Workflow and form designer.",
    tools_used: ["Workflow design", "Form design", "Canva"],
    outcome: "Complete referrals the first time, and a clear handoff into intake.",
    file_url: 'assets/work/provider-referral-form.jpg', preview_url: 'assets/work/provider-referral-form.jpg',
    featured: false, tags: ["process", "healthcare"], year: '', format: "Form \u00b7 Image", status: 'live'
  },
  {
    group: "Documentation & SOPs", focus: "Process Documentation & Standardization",
    id: 'sop-qa-review', title: "Standard Operating Procedure: Quality Assurance Review", category: "Process Documentation & Standardization",
    career_lane: ['ops'], company_or_project: "Northbridge Professional Services \u00b7 fictional portfolio example",
    thumbnail: 'assets/work/thumb-sop-qa-review.jpg',
    short_description: "A complete SOP: purpose, scope, roles, an eight-step process flow, review checklist, service levels, escalation path and success metrics.",
    problem: "Client deliverables went out with inconsistent quality because nobody owned the review step.",
    what_i_built: "A controlled SOP (ID, version, owner, review cycle) with purpose and scope, roles and responsibilities, an eight-step flow from draft to archive, a seven-area QA review checklist, review turnaround standards, an escalation path and success metrics.",
    my_role: "Process designer and author.",
    tools_used: ["SOP writing", "Process mapping", "Canva"],
    outcome: "A review process that is documented, owned and measurable. The sample metrics shown are illustrative.",
    file_url: 'assets/work/sop-qa-review.jpg', preview_url: 'assets/work/sop-qa-review.jpg',
    featured: false, tags: ["process", "writing"], year: '', format: "SOP \u00b7 Image", status: 'live'
  },
  {
    group: "Revenue Operations", focus: "Revenue Operations & Sales Process",
    id: 'sales-pipeline-system', title: "Sales Process & Pipeline Management System", category: "Revenue Operations & Sales Process",
    career_lane: ['ops'], company_or_project: "Northbridge Professional Services \u00b7 consulting work sample",
    thumbnail: 'assets/work/thumb-sales-pipeline-system.jpg',
    short_description: "A structured sales process from lead intake to closed deal, with stage definitions, response-time standards, CRM workflow and KPI tracking.",
    problem: "Leads were handled inconsistently, follow-up timing varied by rep, pipeline visibility was weak and leadership had no clear view of conversion.",
    what_i_built: "An end-to-end sales process with stage definitions, owners, qualification and exit criteria, response-time standards, a weekly governance cadence, and a dashboard of the funnel, pipeline value by stage, stage-to-stage conversion, days in stage and rep follow-up compliance.",
    my_role: "Process and reporting designer.",
    tools_used: ["CRM workflow design", "KPI dashboards", "Process design"],
    outcome: "Better pipeline visibility, faster follow-up and clearer accountability. Figures shown are illustrative.",
    file_url: 'assets/work/sales-pipeline-system.jpg', preview_url: 'assets/work/sales-pipeline-system.jpg',
    featured: false, tags: ["dashboard", "process"], year: '', format: "Sales system \u00b7 Image", status: 'live'
  },
  {
    group: "Customer Experience", focus: "Customer Experience & Process Improvement",
    id: 'complaint-resolution-process', title: "Customer Complaint Resolution Process", category: "Customer Experience & Process Improvement",
    career_lane: ['ops'], company_or_project: "Asteron Client Services \u00b7 fictional consulting portfolio sample",
    thumbnail: 'assets/work/thumb-complaint-resolution-process.jpg',
    short_description: "A complaint intake-to-resolution workflow with severity levels, SLAs, escalation triggers and root-cause tracking.",
    problem: "Complaints were handled inconsistently, response times varied, root causes were not tracked and issues sometimes escalated too late.",
    what_i_built: "An eight-step complaint workflow with severity levels and response and resolution SLAs, escalation triggers and path, a governance cadence, a closed-loop root cause and corrective action process, and a dashboard of volume, categories and recovery.",
    my_role: "Process designer and author.",
    tools_used: ["Process design", "SLA design", "Reporting"],
    outcome: "Standardized handling, defined escalation and trend visibility. Figures shown are illustrative.",
    file_url: 'assets/work/complaint-resolution-process.jpg', preview_url: 'assets/work/complaint-resolution-process.jpg',
    featured: false, tags: ["process"], year: '', format: "Process \u00b7 Image", status: 'live'
  }
];
