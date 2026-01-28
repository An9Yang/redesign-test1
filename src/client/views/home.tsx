// @ts-nocheck
import { Features } from '@/components/home/features';
import { Faq } from '@/components/home/faq';

export function HomePage() {
  return (
    <>
      <nav key="1" className="nav scrolled">
        <div className="nav-container">
          <div className="nav-logo">
            <img
              src="https://static.step1.dev/1yp0xd/assets/a6b07600aa8f.ico"
              alt="AI Storyboard Logo"
              className="nav-logo-icon"
            />
            <strong className="nav-logo-text">AI Storyboard</strong>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#use-cases">Use Cases</a>
            <a href="https://ai-storyboard.com/blog/index.html">Blog</a>
            <a href="https://ai-storyboard.com/docs/index.html">
              Documentation
            </a>
            <a href="#faq">FAQ</a>
            <a
              href="https://app.ai-storyboard.com/"
              target="_blank"
              className="nav-cta"
            >
              Start Creating Free
            </a>
          </div>
        </div>
      </nav>
      <section key="3" className="hero fade-in">
        <div className="hero-background">
          <div className="rain-container" />
          <div className="hero-overlay" />
          {/* Decorative Elements */}
          <div className="hero-decorations">
            {/* Floating circles */}
            <div className="hero-circle hero-circle-1" />
            <div className="hero-circle hero-circle-2" />
            <div className="hero-circle hero-circle-3" />
            {/* Corner accents */}
            <div className="hero-accent hero-accent-tl" />
            <div className="hero-accent hero-accent-br" />
            {/* Grid pattern overlay */}
            <div className="hero-grid" />
          </div>
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Create Professional Storyboards Instantly with AI
            </h1>
            <p className="hero-subtitle">
              Transform your creative ideas into visual storyboards in minutes.
              Free, private, and powered by advanced AI technology.
            </p>
            <div className="hero-actions">
              <a
                href="https://app.ai-storyboard.com/"
                target="_blank"
                className="btn btn-primary"
              >
                Start Creating Free →
              </a>
              <span className="hero-note">No sign-up required</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-demo">
              {/* Glow effect behind demo */}
              <div className="hero-demo-glow" />
              <div className="demo-interface">
                <div className="demo-panel">
                  <div className="demo-frame active" />
                  <div className="demo-frame" />
                  <div className="demo-frame" />
                </div>
                <div className="demo-editor">
                  <div className="demo-textarea" />
                  <div className="demo-controls" />
                </div>
                <div className="demo-params">
                  <div className="demo-param" />
                  <div className="demo-param" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section key="5" className="value-props fade-in">
        <div className="container">
          <div className="value-props-grid">
            <div className="value-prop fade-in" style={{ animationDelay: '0s' }}>
              <div className="value-prop-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="16" r="8" stroke="#020817" strokeWidth="1.5" fill="none" />
                  <path d="M8 42c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="#020817" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  <path d="M32 8l8 8M40 8l-8 8" stroke="#ea3a3a" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Zero Barriers</h3>
              <p className="value-prop-short">No signup. No login. Just create.</p>
              <p className="value-prop-detail">Start immediately without account creation, email verification, or any barriers.</p>
            </div>
            <div className="value-prop fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="value-prop-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4L6 12v12c0 11.046 8.954 20 20 20h-2c11.046 0 20-8.954 20-20V12L24 4z" stroke="#020817" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
                  <path d="M16 24l6 6 12-12" stroke="#ea3a3a" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>100% Private</h3>
              <p className="value-prop-short">Your data stays in your browser.</p>
              <p className="value-prop-detail">All projects stored locally. We never see your content. Complete privacy guaranteed.</p>
            </div>
            <div className="value-prop fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="value-prop-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4v8M24 36v8M4 24h8M36 24h8" stroke="#020817" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M10.1 10.1l5.66 5.66M32.24 32.24l5.66 5.66M37.9 10.1l-5.66 5.66M15.76 32.24l-5.66 5.66" stroke="#020817" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="24" cy="24" r="8" stroke="#ea3a3a" strokeWidth="1.5" fill="none" />
                  <circle cx="24" cy="24" r="3" fill="#ea3a3a" />
                </svg>
              </div>
              <h3>AI-Powered</h3>
              <p className="value-prop-short">GLM model generates pro-quality frames.</p>
              <p className="value-prop-detail">Cutting-edge image generation technology creates stunning storyboards in seconds.</p>
            </div>
          </div>
        </div>
      </section>
      <section key="7" id="how-it-works" className="how-it-works fade-in">
        <div className="container">
          <div className="section-header">
            <h2>Idea to Storyboard in 4 Steps</h2>
          </div>
          <div className="steps-flow">
            <div className="step-item" data-step="1">
              <div className="step-icon-wrap">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M4 8h24M4 16h16M4 24h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="step-label">Describe</span>
              <div className="step-tooltip">Write your scene in natural language</div>
            </div>
            <div className="step-connector"><span /></div>
            <div className="step-item" data-step="2">
              <div className="step-icon-wrap">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 10v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="step-label">AI Refines</span>
              <div className="step-tooltip">AI extracts camera angles, actions & mood</div>
            </div>
            <div className="step-connector"><span /></div>
            <div className="step-item" data-step="3">
              <div className="step-icon-wrap">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="4" y="4" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
                  <rect x="18" y="4" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
                  <rect x="4" y="18" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
                  <rect x="18" y="18" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <span className="step-label">Fine-Tune</span>
              <div className="step-tooltip">Adjust camera, style & atmosphere</div>
            </div>
            <div className="step-connector"><span /></div>
            <div className="step-item" data-step="4">
              <div className="step-icon-wrap">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="4" y="6" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M13 14l6-4v8l-6-4z" fill="currentColor" />
                  <path d="M8 26h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="step-label">Generate</span>
              <div className="step-tooltip">Create images & videos instantly</div>
            </div>
          </div>
        </div>
      </section>
      <section key="9" id="use-cases" className="use-cases fade-in">
        <div className="container">
          <div className="section-header">
            <h2>Built for Creators</h2>
          </div>
          <div className="use-cases-grid">
            <div className="use-case fade-in" style={{ animationDelay: '0.7s' }}>
              <div className="use-case-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect x="4" y="8" width="32" height="20" rx="2" stroke="#020817" strokeWidth="1.5" />
                  <path d="M16 18l8-5v10l-8-5z" fill="#ea3a3a" />
                  <path d="M10 32h20" stroke="#020817" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Film & Video</h3>
              <p>Pre-visualize scenes for production teams</p>
              <a href="https://app.ai-storyboard.com/" target="_blank" className="use-case-cta">Try Now →</a>
            </div>
            <div className="use-case fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="use-case-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect x="6" y="4" width="28" height="32" rx="2" stroke="#020817" strokeWidth="1.5" />
                  <path d="M12 12h16M12 18h10M12 24h14" stroke="#020817" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="28" cy="28" r="6" fill="#ea3a3a" />
                  <path d="M26 28h4M28 26v4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Advertising</h3>
              <p>Present creative vision to clients</p>
              <a href="https://app.ai-storyboard.com/" target="_blank" className="use-case-cta">Try Now →</a>
            </div>
            <div className="use-case fade-in" style={{ animationDelay: '0.9s' }}>
              <div className="use-case-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect x="8" y="4" width="24" height="32" rx="4" stroke="#020817" strokeWidth="1.5" />
                  <circle cx="20" cy="32" r="2" fill="#020817" />
                  <rect x="12" y="10" width="16" height="16" rx="1" stroke="#ea3a3a" strokeWidth="1.5" />
                </svg>
              </div>
              <h3>Social Media</h3>
              <p>Plan YouTube, TikTok & Reels content</p>
              <a href="https://app.ai-storyboard.com/" target="_blank" className="use-case-cta">Try Now →</a>
            </div>
          </div>
        </div>
      </section>
      <section key="11" className="social-proof fade-in">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-number" data-count="10000">10,000+</div>
              <div className="stat-label">Storyboards</div>
            </div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Free Forever</div>
            </div>
            <div className="stat">
              <div className="stat-number">Zero</div>
              <div className="stat-label">Data Collected</div>
            </div>
          </div>
        </div>
      </section>
      <section key="13" className="final-cta fade-in">
        <div className="container">
          <h2>Free. Private. Powerful.</h2>
          <p>Start creating your storyboard now.</p>
          <div className="cta-actions">
            <a href="https://app.ai-storyboard.com/" target="_blank" className="btn btn-primary btn-large">
              Start Creating →
            </a>
          </div>
        </div>
      </section>
      <Features />
      <Faq />
      <footer key="19" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>AI Storyboard</h4>
              <p>
                Create professional storyboards instantly with AI. Free,
                private, and powerful.
              </p>
            </div>
            <div className="footer-section">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#use-cases">Use Cases</a>
              <a href="https://ai-storyboard.com/blog/index.html">Blog</a>
            </div>
            <div className="footer-section">
              <h4>Documentation</h4>
              <a href="https://ai-storyboard.com/docs/getting-started.html">
                Getting Started
              </a>
              <a href="https://ai-storyboard.com/docs/creating-projects.html">
                Creating Projects
              </a>
              <a href="https://ai-storyboard.com/docs/image-generation.html">
                Image Generation
              </a>
              <a href="https://ai-storyboard.com/docs/faq.html">FAQ</a>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <a href="#faq">FAQ</a>
              <a href="mailto:support@aidesign.click" target="_blank">
                Contact
              </a>
              <a href="https://ai-storyboard.com/sitemap.html">Sitemap</a>
            </div>
            <div className="footer-section">
              <h4>Legal</h4>
              <a href="https://ai-storyboard.com/privacy.html">
                Privacy Policy
              </a>
              <a href="https://ai-storyboard.com/terms.html">
                Terms of Service
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 AI Storyboard. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <div key="21" className="mobile-nav">
        <div className="mobile-nav-content">
          <a
            href="https://ai-storyboard.com/index.html"
            style={{
              color: 'var(--primary-color)',
              fontWeight: '600',
            }}
          >
            ← Back to Home
          </a>
          <a href="https://ai-storyboard.com/index.html#features">Features</a>
          <a href="https://ai-storyboard.com/index.html#how-it-works">
            How It Works
          </a>
          <a href="https://ai-storyboard.com/index.html#faq">FAQ</a>
          <a href="https://app.ai-storyboard.com/" className="btn btn-primary">
            Start Creating Free
          </a>
        </div>
      </div>
      <a
        key="23"
        href="#top"
        className="back-to-top visible"
        aria-label="Back to top"
      />
      <div
        key="24"
        id="_r_0_"
        data-base-ui-portal=""
        data-slot="toast-portal-anchored"
      >
        <div
          tabIndex="-1"
          role="region"
          aria-live="polite"
          aria-atomic="false"
          aria-relevant="additions text"
          aria-label="Notifications"
          data-slot="toast-viewport-anchored"
          className="outline-none"
        />
      </div>
      <div key="25" id="_r_1_" data-base-ui-portal="" data-slot="toast-portal">
        <div
          tabIndex="-1"
          role="region"
          aria-live="polite"
          aria-atomic="false"
          aria-relevant="additions text"
          aria-label="Notifications"
          data-position="bottom-right"
          data-slot="toast-viewport"
          className="fixed z-50 mx-auto flex w-[calc(100%-var(--toast-inset)*2)] max-w-90 [--toast-inset:--spacing(4)] sm:[--toast-inset:--spacing(8)] data-[position*=top]:top-(--toast-inset) data-[position*=bottom]:bottom-(--toast-inset) data-[position*=left]:left-(--toast-inset) data-[position*=right]:right-(--toast-inset) data-[position*=center]:-translate-x-1/2 data-[position*=center]:left-1/2"
        />
      </div>
    </>
  );
}
