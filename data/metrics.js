/* ==========================================================
   METRICS — one object per number.
   pre / n / suf are animated; `text` is shown as-is (no counter).
   `lever` = the operating levers that moved it (shown on hover/tap).
   ========================================================== */
window.SITE = window.SITE || {};

SITE.METRICS = [
  { id: 'years', pre: '', n: 20, suf: '+', label: 'Years leading', lanes: ['ops', 'people', 'brand'], lever: 'Hands-on leadership across healthcare, construction, manufacturing and technology.' },
  { id: 'growth', pre: '$500K → $', n: 24, suf: 'M', label: 'Business growth supported', lanes: ['ops'], lever: 'Launch playbooks, acquisition integration, billing + credentialing, KPI dashboards and an executive operating cadence at The Wave International.' },
  { id: 'workforce', pre: '', n: 1000, suf: '+', label: 'Multi-state workforce', lanes: ['ops', 'people'], lever: 'HR team, payroll, onboarding and real-time workforce reporting at SEC Global.' },
  { id: 'projects', pre: '~5 → ~', n: 40, suf: '', label: 'Concurrent infrastructure projects', lanes: ['ops'], lever: 'A repeatable contract-mobilization process: standard workflows, decision rights and workforce plans.' },
  { id: 'launches', pre: '', n: 30, suf: '', label: 'Healthcare sites launched or scaled', lanes: ['ops'], lever: '20 clinic launches at Synergy plus the 10-facility behavioral health platform at The Wave. Confirm before quoting externally.' },
  { id: 'opex', pre: '', n: 15, suf: '%', label: 'Operating expense reduction', lanes: ['ops'], lever: 'Automation and process redesign.' },
  { id: 'timelines', pre: '~', n: 25, suf: '%', label: 'Faster project timelines', lanes: ['ops'], lever: 'Standardized mobilization workflows across multi-state utility projects.' },
  { id: 'payroll', pre: '~', n: 40, suf: '%', label: 'Lower payroll administration cost', lanes: ['ops', 'people'], lever: 'Payroll and HR systems consolidation and process redesign.' },
  { id: 'comp', pre: '~', n: 45, suf: '%', label: 'Compensation-related cost improvement', lanes: ['people'], lever: 'Executive compensation benchmarking at Collabera.' },
  { id: 'revlift', pre: '~', n: 20, suf: '%', label: 'Revenue lift', lanes: ['ops'], lever: 'Billing, credentialing and payer-workflow integration.' },
  { id: 'locations', pre: '', n: 10, suf: '', label: 'Healthcare locations', lanes: ['ops'], lever: 'Integration of existing centers plus new launches at The Wave International.' },
  { id: 'launchesPeople', pre: '', n: 20, suf: '', label: 'Multi-site workforce launches', lanes: ['people'], lever: 'Hiring, onboarding and training playbook repeated at each new clinic.' },
  { id: 'india', pre: '', n: 360, suf: '+', label: 'India delivery team supported', lanes: ['people'], lever: 'Cross-time-zone HR and recruiting across the U.S. and India at Collabera.' },
  { id: 'employees450', pre: '', n: 450, suf: '', label: 'Employees across 20 locations', lanes: ['people'], lever: 'People function and clinic-launch hiring at Synergy Medical Centers.' },
  { id: 'turnover', pre: '~', n: 15, suf: '%', label: 'Turnover reduction', lanes: ['people'], lever: 'Consistent hiring and onboarding, manager development and engagement programs.' },
  { id: 'hris', text: 'Multiple', label: 'HRIS implementations', lanes: ['people'], lever: 'BambooHR and Gusto at The Wave, plus earlier platforms across prior employers.' },
  { id: 'integration', text: 'Sale + integration', label: 'Company sale / integration support', lanes: ['people', 'ops'], lever: 'People-side planning through a company sale and integration.' }
];

/* The animated "Results" strip (section on the page). Order is the display order. */
SITE.RESULT_IDS = ['years', 'growth', 'workforce', 'projects', 'launches', 'opex', 'timelines', 'payroll', 'comp'];
