/* ==========================================================
   SITE CONFIG — the one place to edit contact info and links.
   Everything on the site reads from here.
   ========================================================== */
window.SITE = window.SITE || {};

SITE.CONFIG = {
  NAME: 'Ashlee Bryant',
  CREDENTIALS: 'EXEC MBA · MSHRM · SPHR · SHRM-SCP',

  PHONE: '352.769.9599',
  EMAIL: 'ashlee.bryant@yahoo.com',
  LINKEDIN_URL: 'https://www.linkedin.com/in/ashleebryantmba',
  PORTFOLIO_URL: 'https://ashleebryantbrand.netlify.app',
  LOCATION: 'San Antonio, Florida',

  /* BOOKING_URL — Calendly opens as a popup on the page. Any other link opens in a new tab.
     If emptied, every "Book a conversation" button opens a pre-written email instead. */
  BOOKING_URL: 'https://calendly.com/ashleebryant',

  /* VIDEO_URL — paste a YouTube, Vimeo or .mp4 link (or any embeddable URL).
     While empty, the branded "coming soon" thumbnail shows.
     VIDEO_POSTER — optional image shown as the thumbnail once a video exists. */
  VIDEO_URL: '',
  VIDEO_POSTER: 'assets/images/video-poster.jpg',

  /* Snow Story Studios — tagline + descriptor shown in the studio section. */
  SSS_TAGLINE: 'Your story, designed to be remembered.',
  SSS_DESCRIPTOR: 'A brand + design studio: identities, investor decks, packaging, event design and web.',

  AVAILABILITY: ['Remote U.S.', 'Open to travel', 'Open to relocation', 'Available immediately'],

  /* RESUME_URLS — swap any path here. Use '' for "not uploaded yet".
     Planned paths for new files (drop PDFs in assets/resumes/):
       business-operations.pdf, creative-portfolio.pdf, executive-cv.pdf */
  RESUME_URLS: {
    coo: 'assets/resumes/coo.pdf',
    businessOps: 'assets/resumes/coo.pdf',          // → assets/resumes/business-operations.pdf once it exists
    hr: 'assets/resumes/hr.pdf',
    healthcare: 'assets/resumes/healthcare.pdf',
    creative: '',                                   // → assets/resumes/creative-portfolio.pdf
    executiveCv: ''                                 // → assets/resumes/executive-cv.pdf
  }
};

/* Display order + copy for the resume section. `fallback` is used when `url` is empty. */
SITE.RESUMES = [
  { key: 'coo', label: 'Executive / COO Resume', sub: 'COO · VP Operations · Chief of Staff', lane: 'ops', fallback: [] },
  { key: 'businessOps', label: 'Business Operations Resume', sub: 'Operating models · P&L · multi-site growth', lane: 'ops', fallback: ['coo'] },
  { key: 'hr', label: 'People + HR Resume', sub: 'VP People · CHRO · Head of People Ops', lane: 'people', fallback: [] },
  { key: 'healthcare', label: 'Healthcare Operations CV', sub: 'Healthcare COO · Chief Compliance Officer', lane: 'ops', fallback: [] },
  { key: 'creative', label: 'Brand + Creative Portfolio', sub: 'Snow Story Studios · brand, decks, digital', lane: 'brand', fallback: ['executiveCv', 'coo'] },
  { key: 'executiveCv', label: 'General Executive CV', sub: 'The full picture, one document', lane: 'all', fallback: ['coo'] }
];
