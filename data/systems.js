/* ==========================================================
   SYSTEMS, TOOLS + COMPLIANCE
   Edit lists here; the page builds the clickable categories from them.

   SITE.SYSTEMS    10 categories. lanes = which career lenses it dims for.
   SITE.COMPLIANCE regulatory / accreditation / licensing / business compliance.
                   Any item with  confirmed: false  stays hidden on the site.
                   Flip it to true (or delete the flag) once Ashlee confirms she
                   handled that agency directly.
   Automation: Base44 is listed as the platform. Zapier / Power Automate are NOT
   listed because they have not been confirmed as tools actually used.
   ========================================================== */
window.SITE = window.SITE || {};

SITE.SYSTEMS = [
  {
    id: 'crm', title: 'CRM, Sales + Call Tracking', lanes: ['ops', 'brand'],
    blurb: 'Admissions pipelines, lead tracking and call-center reporting.',
    groups: [
      { label: 'Platforms', items: ['Salesforce', 'Zoho CRM', 'Alleva CRM', 'CTM / CallTrackingMetrics', 'Matrix call tracking'] },
      { label: 'What I do with them', items: ['Admissions pipeline reporting', 'CRM workflow configuration', 'Lead / inquiry tracking', 'Call-center reporting', 'Sales pipeline reporting', 'CRM campaign / pipeline workflows'] }
    ]
  },
  {
    id: 'healthcare', title: 'Healthcare EHR, Billing + Credentialing', lanes: ['ops'],
    blurb: 'EHR / EMR, revenue cycle, utilization and provider enrollment systems.',
    groups: [
      { label: 'Platforms', items: ['Alleva EHR / EMR', 'Alleva RCM / Billing', 'Alleva Insights', 'Alleva CRM', 'PointClickCare', 'CAQH', 'PECOS', 'Medicare enrollment systems', 'Medicaid / payer portals', 'Provider credentialing systems'] },
      { label: 'Workflows + reporting', items: ['Revenue-cycle workflows', 'Utilization-review reporting', 'Provider utilization reporting', 'Patient intake workflows', 'Commercial-payer credentialing workflows', 'Payer enrollment', 'Credentialing trackers'] }
    ]
  },
  {
    id: 'hris', title: 'HRIS, Payroll + Timekeeping', lanes: ['people'],
    blurb: 'Implementations, migrations and multi-state payroll across a dozen platforms.',
    groups: [
      { label: 'Platforms', items: ['Workday', 'ADP Workforce Now', 'ADP', 'BambooHR', 'Rippling', 'UKG / UltiPro', 'Paylocity', 'Gusto', 'Paycom', 'Paychex', 'Kronos'] },
      { label: 'People systems', items: ['HRIS implementations', 'HRIS migrations', 'Employee data migration', 'Performance-management systems', 'Onboarding workflows', 'Benefits administration systems'] },
      { label: 'Payroll + timekeeping', items: ['Multi-state payroll administration', 'Payroll reporting', 'Payroll reconciliation', 'Payroll journal-entry workflows', 'BambooHR payroll-related workflows'] }
    ]
  },
  {
    id: 'finance', title: 'ERP, Finance + Financial Models', lanes: ['ops'],
    blurb: 'Accounting platforms and the budgets, forecasts and models built on them.',
    groups: [
      { label: 'Platforms', items: ['Microsoft Dynamics', 'NetSuite', 'Sage', 'QuickBooks Enterprise', 'AppFolio', 'Advanced Excel'] },
      { label: 'Reporting', items: ['Financial-modeling workbooks', 'Budget vs. actual reporting', 'Forecasting models', 'Profitability models', 'Vendor-spend reporting', 'Labor-cost reporting'] },
      { label: 'Models I can build', items: ['Annual budgets', 'Budget vs. actual models', 'P&L reporting', 'Financial forecasts', 'Business cases', 'Labor-cost models', 'Staffing models', 'Capacity models', 'Workforce forecasts', 'Provider-utilization models', 'Vendor scorecards', 'Executive KPI dashboards', 'Operational scorecards', 'Monthly business reviews', 'Site-readiness dashboards', 'Revenue-cycle dashboards', 'Project tracking models', 'Compensation benchmarking models', 'Headcount models', 'Cost-control reporting'] }
    ]
  },
  {
    id: 'bi', title: 'Data, BI + Executive Reporting', lanes: ['ops', 'people'],
    blurb: 'Dashboards and scorecards leaders actually run the business from.',
    groups: [
      { label: 'Platforms', items: ['Microsoft Power BI', 'Advanced Microsoft Excel', 'SQL (intermediate)', 'Smartsheet'] },
      { label: 'Reporting I build', items: ['KPI dashboards', 'Executive dashboards', 'Operational scorecards', 'Workforce analytics', 'Capacity models', 'Staffing models', 'Financial dashboards', 'Executive business-review reporting', 'Productivity reporting', 'Headcount reporting', 'Cost reporting', 'Revenue reporting', 'Variance analysis'] }
    ]
  },
  {
    id: 'ai', title: 'AI + Automation', lanes: ['ops', 'people', 'brand'],
    blurb: 'Generative AI and workflow automation, always with a person reviewing the output.',
    groups: [
      { label: 'AI tools', items: ['ChatGPT', 'Claude', 'Gemini', 'Microsoft Copilot', 'Perplexity', 'Alleva Echo', 'Alleva TravisAI'] },
      { label: 'AI capabilities', items: ['Prompt engineering', 'Agentic workflows', 'AI-assisted research', 'AI-assisted analysis', 'AI-assisted documentation', 'AI-assisted policy development', 'AI-assisted workflow design', 'AI-assisted business-case development', 'AI-assisted operating reviews', 'AI-assisted HR workflows', 'AI-assisted executive synthesis'] },
      { label: 'Automation platform', items: ['Base44'] },
      { label: 'Automation capabilities', items: ['AI agent / agentic workflows', 'HR workflow automation', 'Onboarding automation', 'Documentation automation', 'Reporting automation', 'Task routing', 'Approval workflows', 'Notifications', 'Recurring operational workflows', 'Data / process standardization', 'Self-service workflow design'] }
    ],
    note: 'Always with human judgment and review.'
  },
  {
    id: 'work', title: 'Project + Work Management, Microsoft + Google', lanes: ['ops'],
    blurb: 'Trackers, launch plans and accountability systems that keep cross-functional work moving.',
    groups: [
      { label: 'Work management', items: ['Asana', 'Monday.com', 'Smartsheet', 'Microsoft Teams', 'Slack', 'SharePoint'] },
      { label: 'Microsoft ecosystem', items: ['Microsoft 365', 'Excel', 'Word', 'PowerPoint', 'Outlook', 'Teams', 'SharePoint', 'Microsoft Dynamics', 'Power BI', 'Microsoft Copilot'] },
      { label: 'Google ecosystem', items: ['Google Workspace', 'Google Docs', 'Google Sheets', 'Google Slides', 'Google Drive', 'Gmail'] },
      { label: 'Hands-on experience building', items: ['Project trackers', 'Launch plans', '30/60/90 plans', 'Accountability systems', 'Cross-functional workstreams', 'Implementation timelines', 'Operating cadences', 'Action-item tracking', 'Executive follow-up systems'] }
    ]
  },
  {
    id: 'brand', title: 'Brand, Marketing, Design + Web', lanes: ['brand'],
    blurb: 'From identity systems and investor decks to landing pages and ad campaigns.',
    groups: [
      { label: 'Tools', items: ['Figma', 'Canva', 'Adobe Acrobat', 'PowerPoint', 'Google Slides', 'Meta Business Manager', 'Meta Ads', 'Salesforce', 'Zoho', 'HTML', 'CSS', 'Netlify', 'Base44'] },
      { label: 'Design', items: ['Brand identity systems', 'Presentation design', 'Executive-deck design', 'Investor-deck design', 'Marketing collateral', 'Brochure design', 'Business-card design', 'Employee handbook design', 'Onboarding-material design', 'Social-media graphics', 'LinkedIn carousel design', 'Infographic design'] },
      { label: 'Brand, marketing + content systems', items: ['Brand strategy', 'Visual identity', 'Logo systems', 'Brand guidelines', 'Presentation systems', 'Healthcare collateral', 'Referral materials', 'Letterhead', 'Social content', 'Employee communications', 'Marketing copy', 'Digital campaign collateral'] },
      { label: 'Web + digital build', items: ['Website design', 'Landing pages', 'Portfolio websites', 'Executive portfolios', 'Lightweight web applications', 'Digital business assets', 'No-code / low-code builds'] }
    ]
  },
  {
    id: 'learning', title: 'Learning + Training', lanes: ['people'],
    blurb: 'Learning platforms, including a custom LMS built from scratch.',
    groups: [
      { label: 'Platforms', items: ['Relias', 'LearnUpon', 'The Wave University', 'Base44 (used to build The Wave University)'] },
      { label: 'Capabilities', items: ['Custom LMS development', 'Training content', 'Manager training', 'Onboarding training', 'Learning workflows'] }
    ]
  },
  {
    id: 'built', title: 'Operating Systems I Have Built', lanes: ['ops', 'people'],
    blurb: 'The processes, programs and playbooks behind the growth.',
    groups: [
      { label: 'Launch + growth', items: ['New-site launch playbooks', 'Opening-day readiness systems', 'Acquisition / integration plans', 'Admissions pipelines', 'Billing workflows', 'Credentialing workflows', 'Payer workflows', 'Revenue-cycle processes'] },
      { label: 'Leadership + operating rhythm', items: ['Operating cadences', 'Executive business reviews', 'Leadership accountability systems', 'KPI frameworks', 'Escalation processes', 'Workforce-planning systems', 'Vendor-management structures', 'Offshore-team operating systems', 'After-hours call-center infrastructure', 'SOP libraries'] },
      { label: 'Care programs', items: ['Care-coordination programs', 'Case-management programs', 'Peer-support programs'] },
      { label: 'People systems', items: ['Employee onboarding systems', 'HR functions from zero', 'Compensation frameworks', 'Performance-management programs', 'Succession systems', '9-box calibration processes', 'HRIS implementation plans', 'Employee handbooks', 'AI-assisted HR workflows', 'Training / LMS systems'] }
    ]
  }
];

SITE.COMPLIANCE_QUOTE = 'I do not treat licensing as the last box before opening day. I build regulatory readiness into the operating model from the beginning.';

SITE.COMPLIANCE = [
  {
    id: 'licensing', title: 'Healthcare Licensing + Accreditation',
    blurb: 'Accreditation, state licensing and the agencies behind them.',
    detail: [
      { name: 'The Joint Commission', desc: 'Accreditation readiness, survey preparation, documentation, corrective-action support, ongoing compliance and audit response.' },
      { name: 'State Healthcare / Behavioral Health Licensing', desc: 'Facility licensing, license renewals, new-site readiness, regulatory documentation, inspection preparation, corrective actions and multi-state licensing coordination.' },
      { name: 'Florida Agency for Health Care Administration (AHCA)', desc: 'Healthcare facility / provider regulatory requirements, licensing coordination, background-screening requirements, compliance documentation and operational readiness.', confirmed: false },
      { name: 'Florida Department of Children and Families (DCF)', desc: 'Behavioral health / substance-use treatment licensing, facility compliance, documentation, inspections, renewals and corrective-action processes.', confirmed: false },
      { name: 'Other State Regulatory Agencies', desc: 'Coordination with state health departments, behavioral-health authorities, licensing boards and other state agencies governing healthcare facilities and service delivery across multiple states.' }
    ]
  },
  {
    id: 'payer', title: 'Medicare, Medicaid + Payer Compliance',
    blurb: 'Enrollment, credentialing renewals, audits and revenue-cycle compliance.',
    items: ['Centers for Medicare & Medicaid Services (CMS)', 'Medicare provider enrollment', 'Medicaid enrollment and managed Medicaid plans', 'PECOS (Provider Enrollment, Chain, and Ownership System)', 'CAQH (Council for Affordable Quality Healthcare)', 'Commercial payer credentialing', 'Provider enrollment', 'Payer audits', 'Credentialing renewals', 'Provider roster management', 'Network participation', 'Enrollment documentation', 'Billing-readiness requirements', 'Revenue-cycle compliance', 'Utilization-review documentation']
  },
  {
    id: 'credentialing', title: 'Provider Credentialing + Clinical Compliance',
    blurb: 'Credentialing from onboarding through renewal tracking.',
    items: ['Provider credentialing', 'Payer credentialing', 'License / credential tracking', 'CAQH profile management', 'PECOS enrollment', 'Medicare enrollment', 'Medicaid enrollment', 'Commercial payer enrollment', 'Credentialing documentation', 'Contract-provider / 1099 agreements', 'Provider onboarding', 'Credentialing-readiness tracking', 'Expiration / renewal monitoring']
  },
  {
    id: 'readiness', title: 'Facility + New-Site Regulatory Readiness',
    blurb: 'Regulatory readiness built into the launch plan from day one.',
    quote: true,
    items: ['New facility licensing', 'Regulatory readiness checklists', 'Site-opening compliance', 'State registrations', 'Licensing applications', 'Inspection readiness', 'Staffing-compliance requirements', 'Required policies and procedures', 'Vendor / service readiness', 'Credentialing readiness', 'Billing readiness', 'Technology readiness', 'Required operating documentation', 'Renewal calendars', 'Corrective-action tracking', 'Multi-site compliance standardization']
  },
  {
    id: 'formation', title: 'Business Formation + Corporate Registration',
    blurb: 'Entity setup and multi-state operating registrations.',
    items: ['Business registrations', 'State entity registrations', 'Multi-state operating registrations', 'Foreign qualification / registration coordination', 'Business-license applications', 'Local business licensing', 'Annual corporate filing coordination', 'Registered-agent coordination', 'New-state setup', 'Entity / location compliance tracking', 'Operating-documentation maintenance']
  },
  {
    id: 'tax', title: 'Business Tax + Government Filings',
    blurb: 'Registrations, filing calendars and year-end coordination.',
    items: ['Business tax registrations', 'State and local tax account setup', 'Business tax filing coordination', 'Payroll tax registrations', 'State payroll account setup', 'Multi-state tax / registration coordination', 'Annual filing calendars', 'Government filing tracking', 'Corporate filing administration', 'Regulatory deadlines', 'Tax-document organization', 'Year-end filing coordination', 'Payroll / W-2 review', 'Benefits-related filings', '401(k) plan filings']
  },
  {
    id: 'sos', title: 'Secretary of State + State Business Agencies',
    blurb: 'Entity status, annual reports and state employer registrations.',
    items: ['Secretary of State registrations', 'Annual-report filings', 'Entity-status maintenance', 'Foreign registrations', 'State business licensing', 'Local licensing requirements', 'Business tax registrations', 'State employer registrations', 'Multi-state entity compliance', 'Renewal / filing calendars']
  },
  {
    id: 'workforce', title: 'Employment + Workforce Compliance',
    blurb: 'Immigration, I-9 and E-Verify, wage-and-hour and employee records.',
    groups: [
      { label: 'Systems', items: ['E-Verify', 'LawLogix', 'Envoy Global'] },
      { label: 'Immigration + work authorization', items: ['U.S. Citizenship and Immigration Services (USCIS) processes', 'H-1B', 'I-129', 'Labor Condition Applications (LCA)', 'Public Access Files', 'Requests for Evidence (RFEs)', 'Consular processing', 'PERM', 'I-140', 'I-485', 'OPT', 'STEM OPT', 'CPT', 'I-9', 'Reverification'] },
      { label: 'Workforce compliance', items: ['I-9 compliance', 'Multi-state wage-and-hour compliance', 'Background screening', 'Drug-screening processes', 'Employee-record compliance', 'Independent-contractor documentation', 'PEO / Employer of Record arrangements'] }
    ]
  },
  {
    id: 'privacy', title: 'Privacy, Governance + Internal Controls',
    blurb: 'Control design, documentation standards and audit readiness.',
    items: ['SOX control environments', 'GDPR-related processes', 'CCPA-related processes', 'Access / permission governance', 'HR-data controls', 'Documentation standards', 'Audit readiness', 'Recordkeeping', 'Policy governance', 'Internal control design', 'Risk escalation', 'Corrective-action plans']
  },
  {
    id: 'audits', title: 'Audits + Regulatory Reviews',
    blurb: 'Surveys, audits and the corrective action that follows.',
    items: ['The Joint Commission surveys', 'State licensing audits', 'Medicaid audits', 'Commercial payer audits', 'Credentialing reviews', 'Compliance documentation reviews', 'I-9 audits', 'Internal HR / payroll audits', 'Regulatory readiness assessments', 'Corrective-action plans', 'Evidence collection', 'Policy remediation', 'Follow-up documentation', 'Leadership response coordination']
  }
];
