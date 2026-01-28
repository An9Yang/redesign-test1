// @ts-nocheck

export const FeaturesGrid = () => {
  return (
    <>
      <div className="features-grid">
        <div className="feature">
          <div className="feature-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M4 8h24M4 14h18M4 20h22M4 26h16" stroke="#020817" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="26" cy="20" r="4" stroke="#ea3a3a" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="feature-content">
            <h3>Intelligent Text Processing</h3>
            <div className="feature-tags">
              <span className="feature-tag">AI</span>
              <span className="feature-tag">NLP</span>
            </div>
            <p className="feature-short">Auto-extracts scenes, camera & actions</p>
            <p className="feature-detail">Analyzes creative descriptions and extracts key storytelling elements including scene descriptions, camera movements, and character actions.</p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect x="4" y="4" width="10" height="10" rx="1" stroke="#020817" strokeWidth="1.5" />
              <rect x="18" y="4" width="10" height="10" rx="1" stroke="#020817" strokeWidth="1.5" />
              <rect x="4" y="18" width="10" height="10" rx="1" stroke="#020817" strokeWidth="1.5" />
              <rect x="18" y="18" width="10" height="10" rx="1" stroke="#ea3a3a" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="feature-content">
            <h3>Complete Control</h3>
            <div className="feature-tags">
              <span className="feature-tag">Camera</span>
              <span className="feature-tag">Style</span>
            </div>
            <p className="feature-short">Fine-tune every visual parameter</p>
            <p className="feature-detail">Comprehensive controls for camera angles, movements, character positioning, and artistic style.</p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect x="4" y="6" width="8" height="8" rx="1" stroke="#020817" strokeWidth="1.5" />
              <rect x="14" y="6" width="8" height="8" rx="1" stroke="#020817" strokeWidth="1.5" />
              <rect x="4" y="18" width="8" height="8" rx="1" stroke="#020817" strokeWidth="1.5" />
              <rect x="14" y="18" width="8" height="8" rx="1" stroke="#020817" strokeWidth="1.5" />
              <path d="M24 10l4-4M28 10l-4-4M24 22l4-4M28 22l-4-4" stroke="#ea3a3a" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="feature-content">
            <h3>Batch Generation</h3>
            <div className="feature-tags">
              <span className="feature-tag">Batch</span>
              <span className="feature-tag">Fast</span>
            </div>
            <p className="feature-short">Generate entire sequences at once</p>
            <p className="feature-detail">Create multiple frames simultaneously with consistent style and progress tracking.</p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect x="4" y="6" width="24" height="16" rx="2" stroke="#020817" strokeWidth="1.5" />
              <path d="M13 14l6-4v8l-6-4z" fill="#ea3a3a" />
              <path d="M8 26h16" stroke="#020817" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="feature-content">
            <h3>Images & Videos</h3>
            <div className="feature-tags">
              <span className="feature-tag">GLM</span>
              <span className="feature-tag">HD</span>
            </div>
            <p className="feature-short">High-quality stills + motion clips</p>
            <p className="feature-detail">Generate storyboard images and short video clips for each frame.</p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect x="6" y="4" width="20" height="24" rx="2" stroke="#020817" strokeWidth="1.5" />
              <path d="M10 10h12M10 16h8M10 22h10" stroke="#020817" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="22" cy="22" r="4" fill="#ea3a3a" />
            </svg>
          </div>
          <div className="feature-content">
            <h3>Project Management</h3>
            <div className="feature-tags">
              <span className="feature-tag">Unlimited</span>
              <span className="feature-tag">Search</span>
            </div>
            <p className="feature-short">Unlimited projects with search & filters</p>
            <p className="feature-detail">Create unlimited projects with search and filter functionality.</p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 4L4 10v8c0 7.18 5.82 13 13 13h-1c7.18 0 13-5.82 13-13v-8L16 4z" stroke="#020817" strokeWidth="1.5" fill="none" />
              <path d="M12 16l4 4 6-6" stroke="#ea3a3a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="feature-content">
            <h3>100% Local & Private</h3>
            <div className="feature-tags">
              <span className="feature-tag">Local</span>
              <span className="feature-tag">No Tracking</span>
            </div>
            <p className="feature-short">Data never leaves your browser</p>
            <p className="feature-detail">No account required, local storage only, complete privacy.</p>
          </div>
        </div>
      </div>
    </>
  );
};
