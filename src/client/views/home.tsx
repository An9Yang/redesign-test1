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
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Create Professional Storyboards Instantly with AI - No Sign-Up
              Required
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
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-demo">
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
            <div
              className="value-prop fade-in"
              style={{
                animationDelay: '0s',
              }}
            >
              <div className="value-prop-icon">
                <img
                  src="https://static.step1.dev/1yp0xd/assets/67130feaa44d.svg"
                  alt="Privacy Icon"
                  className="value-prop-img"
                />
              </div>
              <h3>No Sign-Up, No Login</h3>
              <p>
                Start creating immediately. No account creation, no email
                verification, no barriers. Your creativity flows uninterrupted.
              </p>
            </div>
            <div
              className="value-prop fade-in"
              style={{
                animationDelay: '0.1s',
              }}
            >
              <div className="value-prop-icon">
                <img
                  src="https://static.step1.dev/1yp0xd/assets/9ef6ac35b2b1.svg"
                  alt="Shield Icon"
                  className="value-prop-img"
                />
              </div>
              <h3>100% Local Storage</h3>
              <p>
                All your projects and data stay in your browser. We never see
                your content. Your ideas remain yours, always.
              </p>
            </div>
            <div
              className="value-prop fade-in"
              style={{
                animationDelay: '0.2s',
              }}
            >
              <div className="value-prop-icon">
                <img
                  src="https://static.step1.dev/1yp0xd/assets/3ea1c7185b5e.svg"
                  alt="AI Sparkle Icon"
                  className="value-prop-img"
                />
              </div>
              <h3>Advanced GLM Image Model</h3>
              <p>
                Powered by cutting-edge GLM image generation technology. Create
                stunning, professional-quality storyboard frames in seconds.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section key="7" id="how-it-works" className="how-it-works fade-in">
        <div className="container">
          <div className="section-header">
            <h2>From Idea to Storyboard in 4 Simple Steps</h2>
            <p>
              Create professional storyboards with our intuitive AI-powered
              workflow
            </p>
          </div>
          <div className="steps-grid">
            <div
              className="step fade-in"
              style={{
                animationDelay: '0.3s',
              }}
            >
              <div className="step-number">1</div>
              <h3>Write Your Creative Description</h3>
              <p>
                Simply describe your scene in natural language. Our AI
                understands context, camera movements, and visual storytelling.
              </p>
            </div>
            <div
              className="step fade-in"
              style={{
                animationDelay: '0.4s',
              }}
            >
              <div className="step-number">2</div>
              <h3>AI Optimizes Your Text</h3>
              <p>
                Our AI refines your description, extracting key elements like
                camera angles, character actions, and atmosphere.
              </p>
            </div>
            <div
              className="step fade-in"
              style={{
                animationDelay: '0.5s',
              }}
            >
              <div className="step-number">3</div>
              <h3>Fine-Tune Your Vision</h3>
              <p>
                Adjust camera angles, character actions, props, atmosphere, and
                artistic style to match your exact vision.
              </p>
            </div>
            <div
              className="step fade-in"
              style={{
                animationDelay: '0.6s',
              }}
            >
              <div className="step-number">4</div>
              <h3>Generate Images & Videos</h3>
              <p>
                Create high-quality storyboard images instantly. Generate videos
                for each frame. Export and share your professional storyboards.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section key="9" id="use-cases" className="use-cases fade-in">
        <div className="container">
          <div className="section-header">
            <h2>Perfect for Every Creative Project</h2>
            <p>Whether you're making films, ads, or social media content</p>
          </div>
          <div className="use-cases-grid">
            <div
              className="use-case fade-in"
              style={{
                animationDelay: '0.7s',
              }}
            >
              <h3>Film & Screenplay Storyboards</h3>
              <p>
                Visualize your screenplay scenes before production. Perfect for
                directors, cinematographers, and production teams.
              </p>
              <a
                href="https://app.ai-storyboard.com/"
                target="_blank"
                className="use-case-cta"
              >
                Try for Film →
              </a>
            </div>
            <div
              className="use-case fade-in"
              style={{
                animationDelay: '0.8s',
              }}
            >
              <h3>Ad Campaign Storyboards</h3>
              <p>
                Create compelling visual presentations for clients. Show your
                creative vision with professional storyboard frames.
              </p>
              <a
                href="https://app.ai-storyboard.com/"
                target="_blank"
                className="use-case-cta"
              >
                Try for Ads →
              </a>
            </div>
            <div
              className="use-case fade-in"
              style={{
                animationDelay: '0.9s',
              }}
            >
              <h3>Social Media Content</h3>
              <p>
                Plan your YouTube videos, TikTok content, and social media
                posts. Generate storyboard images to guide your production.
              </p>
              <a
                href="https://app.ai-storyboard.com/"
                target="_blank"
                className="use-case-cta"
              >
                Try for Videos →
              </a>
            </div>
          </div>
        </div>
      </section>
      <section key="11" className="social-proof fade-in">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Storyboards Created</div>
            </div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Free Forever</div>
            </div>
            <div className="stat">
              <div className="stat-number">Zero</div>
              <div className="stat-label">Data Collection</div>
            </div>
          </div>
        </div>
      </section>
      <section key="13" className="final-cta fade-in">
        <div className="container">
          <h2>Ready to Bring Your Ideas to Life?</h2>
          <p>
            Join thousands of creators who trust AI Storyboard for their visual
            storytelling needs. Start creating now - completely free.
          </p>
          <div className="cta-actions">
            <a
              href="https://app.ai-storyboard.com/"
              target="_blank"
              className="btn btn-primary btn-large"
            >
              Create Your First Storyboard →
            </a>
            <div className="cta-links">
              <a href="#features">View Features</a>
              <a href="#how-it-works">Read Documentation</a>
              <a href="#faq">Contact Support</a>
            </div>
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
