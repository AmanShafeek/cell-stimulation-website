/**
 * CELL STIMULATION — CORE JAVASCRIPT
 * Handles navigation, mobile menu, interactive showcases, FAQ accordion,
 * support email generator, and accessibility helpers.
 */

// Global Configuration Variables (Easily customizable for production)
const APP_CONFIG = {
  appName: 'Cell Stimulation',
  supportEmail: 'support@apporithm.tech',
  appStoreUrl: '#app-download',
  copyrightYear: 2026,
  copyrightNotice: '2026 Cell Stimulation',
  supportUrl: 'https://amanshafeek.github.io/cell-stimulation-website/support/'
};

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initFaqAccordion();
  initExperienceTabs();
  initSupportEmailHelper();
  initCopyButtons();
  initLegalScrollSpy();
  updateConfigPlaceholders();
});

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');

  if (!toggleBtn || !mobileDrawer) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = mobileDrawer.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
    
    // Animate hamburger lines
    const lines = toggleBtn.querySelectorAll('.hamburger-line');
    if (lines.length === 3) {
      if (isOpen) {
        lines[0].style.transform = 'translateY(8px) rotate(45deg)';
        lines[1].style.opacity = '0';
        lines[2].style.transform = 'translateY(-8px) rotate(-45deg)';
      } else {
        lines[0].style.transform = 'none';
        lines[1].style.opacity = '1';
        lines[2].style.transform = 'none';
      }
    }
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (mobileDrawer.classList.contains('open') && !mobileDrawer.contains(e.target) && !toggleBtn.contains(e.target)) {
      mobileDrawer.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      const lines = toggleBtn.querySelectorAll('.hamburger-line');
      if (lines.length === 3) {
        lines[0].style.transform = 'none';
        lines[1].style.opacity = '1';
        lines[2].style.transform = 'none';
      }
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
      mobileDrawer.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/**
 * Interactive Experience Tab Switcher (Home Page)
 */
const EXPERIENCE_DATA = [
  {
    id: 'check-in',
    title: 'Daily Check-In',
    badge: 'Consistent Awareness',
    desc: 'Stay consistent with simple daily check-ins. Reflect on energy, rest, focus, and hydration to build steady mindfulness without friction.',
    previewTitle: 'Morning Reflection & Wellness Metrics',
    previewDetails: [
      'Simple, single-tap self-assessments (Energy, Sleep Quality, Stress)',
      'Optional qualitative note to capture what helped or challenged you',
      'Instant sync with your coach to spot gentle patterns over time'
    ],
    phoneContent: `
      <div class="mini-card">
        <div class="mini-card-header">
          <span class="mini-card-title">Today's Check-in</span>
          <span class="mini-badge">Completed</span>
        </div>
        <div class="mini-progress-row">
          <div class="mini-progress-bar"><div class="mini-progress-fill" style="width: 100%;"></div></div>
          <span style="font-size:10px; font-weight:700; color:var(--sage-dark);">4 / 4 Done</span>
        </div>
      </div>
      <div class="mini-metrics-grid">
        <div class="mini-metric-item">
          <div class="mini-metric-label">Energy Level</div>
          <div class="mini-metric-value" style="color:var(--sage-dark);">Balanced (8/10)</div>
        </div>
        <div class="mini-metric-item">
          <div class="mini-metric-label">Rest Quality</div>
          <div class="mini-metric-value">Deep (7.5 hrs)</div>
        </div>
      </div>
      <div class="mini-card">
        <div style="font-size:10px; color:var(--text-muted); margin-bottom:4px;">Journal Note</div>
        <div style="font-size:11px; color:var(--text-primary); font-style:italic;">"Feeling clearer stamina after morning hydration protocol."</div>
      </div>
    `
  },
  {
    id: 'sessions',
    title: 'Personalized Sessions',
    badge: 'Dedicated Guidance',
    desc: 'Access sessions and guidance provided by your coaching team. View upcoming appointments, agendas, and key takeaways in one organized hub.',
    previewTitle: '1-on-1 Coaching Appointments & Prep',
    previewDetails: [
      'Direct schedule sync with session reminders and video call access',
      'Shared agenda prepared by your coach before each meeting',
      'Post-session takeaways and action items pinned to your home screen'
    ],
    phoneContent: `
      <div class="mini-coach-session">
        <div class="coach-thumb">EL</div>
        <div class="coach-info">
          <div class="coach-title">Session with Elena</div>
          <div class="coach-sub">Today · 2:00 PM (45m)</div>
        </div>
        <span class="btn-mini-join">Join Call</span>
      </div>
      <div class="mini-card">
        <div class="mini-card-header">
          <span class="mini-card-title">Session Focus</span>
          <span class="mini-badge">Phase 2</span>
        </div>
        <p style="font-size:11px; color:var(--text-secondary); line-height:1.4;">Reviewing sleep routine adjustments and midday reset breathing techniques.</p>
      </div>
    `
  },
  {
    id: 'goals',
    title: 'Goals & Progress',
    badge: 'Sustainable Habits',
    desc: 'Keep your goals organized and stay connected to your progress. Follow milestones customized specifically for your lifestyle and pace.',
    previewTitle: 'Milestones & Habit Momentum',
    previewDetails: [
      'Visual progress tracking without punitive streaks or gamified pressure',
      'Coach-collaborative milestones adjusted according to your real life',
      'Weekly summaries celebrating steady consistency'
    ],
    phoneContent: `
      <div class="mini-card">
        <div class="mini-card-header">
          <span class="mini-card-title">Active Goals</span>
          <span class="mini-badge">3 in Progress</span>
        </div>
        <div style="margin-bottom:8px;">
          <div style="display:flex; justify-content:space-between; font-size:11px; font-weight:600; margin-bottom:3px;">
            <span>Morning Light Protocol</span>
            <span style="color:var(--sage-dark);">5/7 Days</span>
          </div>
          <div class="mini-progress-bar"><div class="mini-progress-fill" style="width: 71%;"></div></div>
        </div>
        <div>
          <div style="display:flex; justify-content:space-between; font-size:11px; font-weight:600; margin-bottom:3px;">
            <span>Digital Sunset (9:30 PM)</span>
            <span style="color:var(--sage-dark);">6/7 Days</span>
          </div>
          <div class="mini-progress-bar"><div class="mini-progress-fill" style="width: 85%;"></div></div>
        </div>
      </div>
    `
  },
  {
    id: 'journal',
    title: 'Private Journaling',
    badge: 'Quiet Reflection',
    desc: 'Record personal reflections and maintain your wellness journal in one place. Keep thoughts private or choose what to share with your coach.',
    previewTitle: 'Encrypted Personal Reflections',
    previewDetails: [
      'Distraction-free, calm writing space designed for daily self-inquiry',
      'Optional guided reflection prompts shared by your wellness coach',
      'Granular privacy control: mark entries private or share with your coach'
    ],
    phoneContent: `
      <div class="mini-card">
        <div class="mini-card-header">
          <span class="mini-card-title">Today's Reflection</span>
          <span class="mini-badge" style="background:#EBF3EB; color:#3B6140;">🔒 Private</span>
        </div>
        <div style="font-size:12px; font-weight:700; margin-bottom:4px; color:var(--primary-dark);">Midweek Energy Shift</div>
        <p style="font-size:11px; color:var(--text-secondary); line-height:1.5;">Noticed how stepping away from screens 30 minutes before sleep drastically reduced wakeful restlessness...</p>
      </div>
    `
  },
  {
    id: 'messages',
    title: 'Direct Communication',
    badge: 'Private Support',
    desc: 'Communicate privately with your coaching team through the app. Ask questions, receive voice notes, and get thoughtful encouragement between sessions.',
    previewTitle: 'Private Coach Messaging Channel',
    previewDetails: [
      'Direct, asynchronous messaging without having to share personal phone numbers',
      'Voice memo audio messaging for nuanced guidance and quick questions',
      'Protected environment keeping coaching communications confidential'
    ],
    phoneContent: `
      <div class="mini-card" style="background:#FAF8F5;">
        <div style="display:flex; gap:8px; align-items:flex-start; margin-bottom:10px;">
          <div class="coach-thumb" style="width:26px; height:26px; font-size:10px;">EL</div>
          <div style="background:#FFFFFF; border:1px solid rgba(23,35,29,0.06); padding:8px 10px; border-radius:12px; font-size:11px; max-width:85%;">
            Hi Sarah! Great job on today's check-in. I left a short voice note reviewing your evening routine.
          </div>
        </div>
        <div style="display:flex; justify-content:flex-end; margin-bottom:6px;">
          <div style="background:var(--sage); color:#FFF; padding:8px 10px; border-radius:12px; font-size:11px; max-width:80%;">
            Thank you Elena, listened and it makes total sense!
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'resources',
    title: 'Resources & Protocols',
    badge: 'Curated Knowledge',
    desc: 'Access resources and personalized protocols shared by your coaching team. Bookmark custom recipes, guided audio, and wellness routines.',
    previewTitle: 'Personalized Member Library',
    previewDetails: [
      'Tailored protocols created specifically for your current wellness phase',
      'Downloadable audio practices, habit templates, and nutritional guides',
      'Organized library accessible anytime, both online and offline'
    ],
    phoneContent: `
      <div class="mini-card">
        <div class="mini-card-header">
          <span class="mini-card-title">Shared Protocols</span>
          <span class="mini-badge">Updated Yesterday</span>
        </div>
        <div style="display:flex; align-items:center; gap:8px; padding:6px 0; border-bottom:1px solid rgba(23,35,29,0.05);">
          <span style="font-size:14px;">📄</span>
          <div>
            <div style="font-size:11px; font-weight:700;">Evening Wind-Down Guide</div>
            <div style="font-size:9px; color:var(--text-muted);">PDF · 3 Pages · By Coach Elena</div>
          </div>
        </div>
        <div style="display:flex; align-items:center; gap:8px; padding:6px 0;">
          <span style="font-size:14px;">🎧</span>
          <div>
            <div style="font-size:11px; font-weight:700;">10-Min Vitality Breathwork</div>
            <div style="font-size:9px; color:var(--text-muted);">Audio · Guided Meditation</div>
          </div>
        </div>
      </div>
    `
  }
];

function initExperienceTabs() {
  const tabButtons = document.querySelectorAll('.exp-tab-button');
  const previewCard = document.querySelector('.exp-screen-card');

  if (!tabButtons.length || !previewCard) return;

  tabButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const data = EXPERIENCE_DATA[index];
      if (!data) return;

      // Update right-side card
      previewCard.style.opacity = '0';
      setTimeout(() => {
        previewCard.innerHTML = `
          <div class="exp-screen-badge">
            <span class="eyebrow-dot"></span>
            ${data.badge}
          </div>
          <h3 class="exp-screen-title">${data.previewTitle}</h3>
          <p class="exp-screen-desc">${data.desc}</p>
          <div class="screen-preview-box">
            <div style="font-size:0.85rem; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; color:var(--sage-dark); margin-bottom:0.75rem;">
              Key Member Features
            </div>
            <ul style="display:flex; flex-direction:column; gap:0.6rem;">
              ${data.previewDetails.map(detail => `
                <li style="display:flex; align-items:flex-start; gap:0.6rem; font-size:0.95rem; color:var(--text-secondary);">
                  <svg style="width:18px; height:18px; color:var(--sage); flex-shrink:0; margin-top:2px;" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>${detail}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        `;
        previewCard.style.opacity = '1';
      }, 150);
    });
  });
}

/**
 * Support FAQ Accordion
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isAlreadyOpen = item.classList.contains('open');
      
      // Close other accordion items
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
          const otherBtn = other.querySelector('.faq-question');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current
      if (isAlreadyOpen) {
        item.classList.remove('open');
        questionBtn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/**
 * Support Page Email Helper & Device Diagnostics
 * Generates ready-to-send support email with client environment info for App Store review compliance
 */
function initSupportEmailHelper() {
  const genBtn = document.querySelector('#generate-email-btn');
  if (!genBtn) return;

  // Auto-fill device info
  const deviceInput = document.querySelector('#support-device-input');
  const osInput = document.querySelector('#support-os-input');

  if (deviceInput && !deviceInput.value) {
    const isApple = /iPhone|iPad|Macintosh/i.test(navigator.userAgent);
    if (/iPhone/i.test(navigator.userAgent)) deviceInput.value = 'Apple iPhone';
    else if (/iPad/i.test(navigator.userAgent)) deviceInput.value = 'Apple iPad';
    else if (/Macintosh/i.test(navigator.userAgent)) deviceInput.value = 'macOS';
    else deviceInput.value = 'iOS / Mobile';
  }

  genBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const issueCategory = document.querySelector('#support-category-select')?.value || 'General Inquiry';
    const appVersion = document.querySelector('#support-version-input')?.value || '1.0';
    const device = document.querySelector('#support-device-input')?.value || 'iOS Device';
    const description = document.querySelector('#support-notes-input')?.value || 'Please describe your inquiry or feedback here.';

    const subject = encodeURIComponent(`[Cell Stimulation Support] ${issueCategory}`);
    const bodyText = 
`Hello Cell Stimulation Support Team,

Issue / Question:
${description}

--- Diagnostic Details (Optional) ---
App Version: ${appVersion}
Device Model: ${device}
Date: ${new Date().toLocaleDateString()}
`;

    const mailtoLink = `mailto:${APP_CONFIG.supportEmail}?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
    window.location.href = mailtoLink;
  });
}

/**
 * Copy to Clipboard Helper
 */
function initCopyButtons() {
  const copyBtns = document.querySelectorAll('.copy-email-btn, .copy-btn, .spec-copy-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy-text') || btn.getAttribute('data-email') || APP_CONFIG.supportEmail;
      if (!navigator.clipboard) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand('copy');
          displayCopiedState(btn);
        } catch (e) {
          console.error('Fallback copy failed', e);
        }
        document.body.removeChild(textarea);
        return;
      }

      navigator.clipboard.writeText(textToCopy).then(() => {
        displayCopiedState(btn);
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    });
  });
}

function displayCopiedState(btn) {
  const originalHtml = btn.innerHTML;
  btn.innerHTML = `
    <svg style="width:16px;height:16px;" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
    </svg>
    Copied!
  `;
  btn.classList.add('copied');
  setTimeout(() => {
    btn.innerHTML = originalHtml;
    btn.classList.remove('copied');
  }, 2200);
}

/**
 * Privacy Policy Table of Contents ScrollSpy
 */
function initLegalScrollSpy() {
  const tocLinks = document.querySelectorAll('.legal-toc-link');
  const sections = document.querySelectorAll('.legal-section-block');

  if (!tocLinks.length || !sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        tocLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -70% 0px'
  });

  sections.forEach(section => observer.observe(section));
}

/**
 * Populate dynamic placeholder configs across the document
 */
function updateConfigPlaceholders() {
  // Update year
  const yearElements = document.querySelectorAll('.current-year');
  yearElements.forEach(el => {
    el.textContent = APP_CONFIG.copyrightYear;
  });

  // Update support email links
  const emailLinks = document.querySelectorAll('.support-email-link');
  emailLinks.forEach(link => {
    link.href = `mailto:${APP_CONFIG.supportEmail}`;
    link.textContent = APP_CONFIG.supportEmail;
  });

  // Update dynamic copyright notice text
  const copyrightNoticeElements = document.querySelectorAll('.app-copyright-notice');
  copyrightNoticeElements.forEach(el => {
    el.textContent = APP_CONFIG.copyrightNotice;
  });

  // Update dynamic support url text
  const supportUrlElements = document.querySelectorAll('.app-support-url');
  supportUrlElements.forEach(el => {
    el.textContent = APP_CONFIG.supportUrl;
    if (el.tagName === 'A') el.href = APP_CONFIG.supportUrl;
  });
}
