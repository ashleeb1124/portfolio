/* ==========================================================
   CAREER STORY + CREDENTIALS (systems live in data/systems.js)
   `id` values are referenced by SITE.LENSES[...].proof[].story.
   lanes = which career lenses the role is relevant to.
   ========================================================== */
window.SITE = window.SITE || {};

SITE.CAREER = [
  {
    id: 'spiro', org: 'Spiro Senior', role: 'COO / Chief Compliance Officer', when: '2026 – Present', start: 2026,
    place: 'Florida · Geriatric in-residence medical practice', lanes: ['ops', 'people', 'brand', 'transform'],
    built: 'A medical practice, from concept to operating company.',
    bullets: [
      'Built the practice from zero: business case, financial model, EMR and data migration, intake, billing and CAQH / PECOS / Medicare credentialing.',
      'Sole operational, compliance and HR owner; built HR, payroll, benefits and job architecture from scratch.',
      'Led brand strategy and launch marketing, from creative direction to paid media and SEO.'
    ],
    pills: ['0 → 1', '8 ALF sites', '$500K / month']
  },
  {
    id: 'wave', org: 'The Wave International', role: 'Chief Operating Officer / Senior HR Leader', when: '2020 – Present', start: 2020,
    place: 'Clearwater, FL · Multi-site behavioral health', lanes: ['ops', 'people', 'transform'],
    built: 'An operating backbone for a company that grew 48x.',
    bullets: [
      'Scaled from about $500K to $24M annualized revenue, integrating existing centers and launching new ones to reach 10 facilities.',
      'Sole People function: recruiting, payroll, total rewards, benefits, ER, investigations and HRIS (implemented BambooHR and Gusto).',
      'Built launch playbooks, KPI dashboards and offshore accounting and after-hours call-center teams in India.'
    ],
    pills: ['$24M', '10 facilities', '15% OpEx cut', '~20% revenue lift']
  },
  {
    id: 'sec', org: 'SEC Global', role: 'Vice President, HR & Operations', when: '2013 – 2019', start: 2013,
    place: 'Tampa, FL · Multi-state solar construction', lanes: ['ops', 'people', 'transform'],
    built: 'The mobilization engine behind ~40 concurrent projects.',
    bullets: [
      'Built the operating infrastructure for growth from ~5 Florida contracts to ~40 concurrent Southeast projects for major utility customers.',
      'Led a 12+ person HR team (payroll, generalists, recruiters) supporting a 1,000+ person multi-state workforce.',
      'Helped lead the NetSuite to Microsoft Dynamics transition and built real-time workforce and project BI.'
    ],
    pills: ['~40 projects', '1,000+ employees', '25% faster', '40% lower admin cost']
  },
  {
    id: 'synergy', org: 'Synergy Medical Centers', role: 'Chief People Officer / Director of Retail Operations', when: '2010 – 2013', start: 2010,
    place: 'Acworth, GA · 20 clinics · ~450 employees', lanes: ['people', 'ops'],
    built: 'A hiring and onboarding machine for 20 clinic launches.',
    bullets: [
      'Led a 5-person HR team and personally led hiring and onboarding for all 20 clinic launches.',
      'Owned DTC retail operations: purchasing, inventory, replenishment, vendors and customer support.'
    ],
    pills: ['20 launches', '~15% lower turnover', 'Best Place to Work']
  },
  {
    id: 'collabera', org: 'Collabera Solutions', role: 'Director, Human Resources / Consultant', when: '2011 – 2013', start: 2011,
    place: 'Pasadena, CA · Global IT staffing & delivery · Remote, concurrent', lanes: ['people', 'ops', 'transform'],
    built: 'HR that ran across two countries at once.',
    bullets: [
      'Led a 14-person HR team split between the U.S. and India: 5 generalists, an HR manager and 8 offshore recruiters.',
      'Supported a Southern California Edison engagement with 150+ onsite consultants and a 360+ person India-based delivery team.',
      'Benchmarked executive compensation, cutting related costs ~45%, and rebuilt the recruiting workflow to cut time-to-hire ~20%.'
    ],
    pills: ['14-person U.S. + India team', '360+ offshore delivery', '~45% comp savings', '20% faster hiring']
  },
  {
    id: 'mct', org: 'Mission Critical Technologies', role: 'Director of Human Resources', when: '2008 – 2011', start: 2008,
    place: 'El Segundo, CA · Government & commercial technology contractor', lanes: ['people'],
    built: 'An HR department, reset and made compliant.',
    bullets: [
      'Stepped into an existing HR department that needed a reset and rebuilt it: policies, procedures, documentation and manager practices.',
      'Kept a California employer compliant with state labor law and with the workforce requirements of its government and commercial contracts.',
      'Onboarded and supported engineers and IT professionals placed on client projects for NASA, Disney, Sony, FOX and Warner Bros.'
    ],
    pills: ['HR turnaround', 'CA + contract compliance', '25% better retention']
  },
  {
    id: 'coke', org: 'Coca-Cola Bottling Company', role: 'HR Assistant → HR Director → Plant Operations Manager', when: '2001 – 2008', start: 2001,
    place: 'Los Angeles, CA · Fortune 500 manufacturing', lanes: ['ops', 'people'],
    built: 'Four promotions in seven years, then the plant itself.',
    bullets: [
      'Four promotions in seven years, from HR Assistant to HR Director, then promoted to run a 150-employee, three-shift bottling plant.'
    ],
    pills: ['150 employees', '3 shifts']
  },
  {
    id: 'sss', org: 'Snow Story Studios', role: 'Founder · Brand + Creative Director', when: 'Ongoing', start: 2020,
    place: 'Brand, decks, digital · Consulting', lanes: ['brand'],
    built: 'The brand studio: identity, investor decks, collateral and web.',
    bullets: [
      'Brand, operations and people consulting for growing businesses, with a design practice behind it.',
      'Investor presentation systems, healthcare collateral, executive portfolios and websites.'
    ],
    pills: ['Brand', 'Decks', 'Web']
  }
];

SITE.CREDENTIALS = {
  education: [
    ['Executive MBA', 'University of West Florida'],
    ['MBA, Human Resource Management', 'Keller Graduate School of Management · GPA 3.97'],
    ['B.S., Human Resource Management', 'University of Phoenix']
  ],
  certifications: [
    { name: 'SPHR', title: 'Senior Professional in Human Resources', since: 'January 2018', renewed: 'January 2024', expires: 'January 2027', number: '482917365SPHR' },
    { name: 'SHRM-SCP', title: 'SHRM Senior Certified Professional', since: 'January 2016', renewed: 'January 2025', expires: 'January 2028' },
    { name: 'PHR', title: 'Professional in Human Resources', since: 'August 2013', renewed: 'August 2025', expires: 'August 2028', number: '705238914PHR' },
    { name: 'SHRM-CP', title: 'SHRM Certified Professional', since: 'December 2012', renewed: 'December 2024', expires: 'December 2027' }
  ]
};
