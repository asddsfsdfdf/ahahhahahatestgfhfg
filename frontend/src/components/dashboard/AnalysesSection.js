// Analyses Section Component - Ultra Professional Enhanced Version
function loadAnalysesSection() {
    const contentArea = document.getElementById('contentArea');
    
    // Mode-based quick access cards
const modeCards = `
    <div class="mode-quick-access">
        <div class="mode-card simple" onclick="showSection('simple')">
            <div class="mode-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                </svg>
            </div>
            <h4>Simple Mode</h4>
            <p>Quick analysis</p>
        </div>
        <div class="mode-card scalping" onclick="showSection('scalping')">
            <div class="mode-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 12h18M3 6h18M3 18h18"/>
                </svg>
            </div>
            <h4>Scalping Mode</h4>
            <p>Fast trades</p>
        </div>
        <div class="mode-card professional" onclick="showSection('professional')">
            <div class="mode-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <path d="M3 9h18M9 21V9"/>
                </svg>
            </div>
            <h4>Professional Mode</h4>
            <p>Advanced tools</p>
        </div>
    </div>
    
    <style>
        .mode-quick-access {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 16px;
            margin-bottom: 32px;
        }
        
        .mode-card {
            background: white;
            border-radius: 12px;
            padding: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-align: center;
            border: 2px solid transparent;
        }
        
        .mode-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 24px rgba(0,0,0,0.1);
        }
        
        .mode-card.simple:hover {
            border-color: #10B981;
        }
        
        .mode-card.scalping:hover {
            border-color: #F59E0B;
        }
        
        .mode-card.professional:hover {
            border-color: #6366F1;
        }
        
        .mode-icon {
            width: 64px;
            height: 64px;
            margin: 0 auto 16px;
            background: #F3F4F6;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .mode-card.simple .mode-icon {
            background: #D1FAE5;
            color: #10B981;
        }
        
        .mode-card.scalping .mode-icon {
            background: #FEF3C7;
            color: #F59E0B;
        }
        
        .mode-card.professional .mode-icon {
            background: #E0E7FF;
            color: #6366F1;
        }
        
        .mode-card h4 {
            font-size: 18px;
            font-weight: 700;
            color: #111827;
            margin-bottom: 4px;
        }
        
        .mode-card p {
            font-size: 14px;
            color: #6B7280;
        }
    </style>
`;

// Fügen Sie modeCards vor dem analyses-header div ein
    
    contentArea.innerHTML = `
        <div class="analyses-container-pro">
            <!-- Hero Section with Modern Design -->
            <div class="analyses-hero-section-improved">
                <div class="hero-content">
                    <div class="hero-badge" data-aos="fade-down" data-aos-delay="100">
                        <span class="badge-dot"></span>
                        <span>AI ANALYSIS HUB</span>
                    </div>
                    <h1 class="hero-title-premium">
                        <span class="title-line">
                            <span class="title-word" data-aos="fade-up" data-aos-delay="200">AI-Powered</span>
                            <span class="title-word gradient-text-animated" data-aos="fade-up" data-aos-delay="300">Chart Analysis</span>
                        </span>
                    </h1>
                    <p class="hero-subtitle-premium" data-aos="fade-up" data-aos-delay="400">
                        <span class="subtitle-highlight">Professional trading insights</span>
                        <span class="subtitle-separator">·</span>
                        <span>powered by advanced artificial intelligence</span>
                    </p>
                    <div class="hero-metrics" data-aos="fade-up" data-aos-delay="500">
                        <div class="metric-item">
                            <span class="metric-value">98.5%</span>
                            <span class="metric-label">Accuracy</span>
                        </div>
                        <div class="metric-divider"></div>
                        <div class="metric-item">
                            <span class="metric-value">0.3s</span>
                            <span class="metric-label">Analysis Time</span>
                        </div>
                        <div class="metric-divider"></div>
                        <div class="metric-item">
                            <span class="metric-value">24/7</span>
                            <span class="metric-label">Real-time</span>
                        </div>
                    </div>
                    
                    <!-- Premium Stats Cards - Ultra Professional Redesign -->
                    <div class="premium-stats-grid-horizontal">
                        <div class="premium-stat-card" data-aos="fade-up" data-aos-delay="100">
                            <div class="stat-glow"></div>
                            <div class="stat-inner">
                                <div class="stat-header">
                                    <div class="stat-icon-modern">
                                        <div class="icon-backdrop"></div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M3 3v18h18" stroke="url(#iconGradient1)" stroke-width="2" stroke-linecap="round"/>
                                            <path d="M7 14l4-4 4 4 5-5" stroke="url(#iconGradient1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    <div class="stat-label-modern">Total Analyses</div>
                                </div>
                                <div class="stat-value-container">
                                    <div class="stat-number-modern" data-count="${userData.analysisCount || 0}">0</div>
                                    <div class="stat-change-indicator positive">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M5 15L10 10L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                        </svg>
                                        <span>+100%</span>
                                    </div>
                                </div>
                                <div class="stat-visual-data">
                                    <div class="mini-bar-chart">
                                        <div class="bar-item" style="--height: 20%"></div>
                                        <div class="bar-item" style="--height: 35%"></div>
                                        <div class="bar-item" style="--height: 45%"></div>
                                        <div class="bar-item" style="--height: 40%"></div>
                                        <div class="bar-item" style="--height: 60%"></div>
                                        <div class="bar-item" style="--height: 80%"></div>
                                        <div class="bar-item" style="--height: 100%"></div>
                                    </div>
                                </div>
                                <div class="stat-footer">
                                    <span class="stat-period">THIS MONTH</span>
                                    <div class="stat-live-indicator">
                                        <span class="live-dot"></span>
                                        <span>LIVE</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="premium-stat-card" data-aos="fade-up" data-aos-delay="200">
                            <div class="stat-glow"></div>
                            <div class="stat-inner">
                                <div class="stat-header">
                                    <div class="stat-icon-modern">
                                        <div class="icon-backdrop"></div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <circle cx="12" cy="12" r="10" stroke="url(#iconGradient1)" stroke-width="2"/>
                                            <circle cx="12" cy="12" r="3" fill="url(#iconGradient1)"/>
                                            <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="url(#iconGradient1)" stroke-width="2" stroke-linecap="round"/>
                                        </svg>
                                    </div>
                                    <div class="stat-label-modern">Most Used Strategy</div>
                                </div>
                                <div class="stat-value-container">
                                    <div class="stat-number-modern">3</div>
                                    <div class="stat-strategy-name">Technical Analysis</div>
                                </div>
                                <div class="stat-progress-modern">
                                    <div class="progress-header">
                                        <span class="progress-label">SUCCESS RATE</span>
                                        <span class="progress-value">75%</span>
                                    </div>
                                    <div class="progress-track-modern">
                                        <div class="progress-fill-modern" style="width: 75%">
                                            <div class="progress-glow"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="success-indicators">
                                    <div class="indicator-dot success"></div>
                                    <div class="indicator-dot success"></div>
                                    <div class="indicator-dot success"></div>
                                    <div class="indicator-dot"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="premium-stat-card" data-aos="fade-up" data-aos-delay="300">
                            <div class="stat-glow"></div>
                            <div class="stat-inner">
                                <div class="stat-header">
                                    <div class="stat-icon-modern">
                                        <div class="icon-backdrop"></div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 2L15 9L22 10L17 15L18 22L12 18L6 22L7 15L2 10L9 9L12 2Z" 
                                                  stroke="url(#iconGradient1)" stroke-width="2" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    <div class="stat-label-modern">Today's Market</div>
                                </div>
                                <div class="market-status-modern">
                                    <div class="market-badge-modern neutral">
                                        <div class="market-pulse"></div>
                                        <span>NEUTRAL</span>
                                    </div>
                                </div>
                                <div class="market-analysis">
                                    <div class="analysis-bars">
                                        <div class="analysis-bar-container">
                                            <div class="analysis-bar bullish" style="height: 40%">
                                                <span class="bar-value">40%</span>
                                            </div>
                                            <span class="bar-label">Bull</span>
                                        </div>
                                        <div class="analysis-bar-container">
                                            <div class="analysis-bar neutral" style="height: 20%">
                                                <span class="bar-value">20%</span>
                                            </div>
                                            <span class="bar-label">Neutral</span>
                                        </div>
                                        <div class="analysis-bar-container">
                                            <div class="analysis-bar bearish" style="height: 40%">
                                                <span class="bar-value">40%</span>
                                            </div>
                                            <span class="bar-label">Bear</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="market-footer">
                                    <span class="market-signal">Mixed market signals</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Start Analysis Section - Ultra Premium Redesign -->
            <div class="start-analysis-section-premium">
                <div class="section-container-premium">
                    <!-- Premium Background Effects -->
                    <div class="premium-bg-effects">
                        <div class="gradient-orb orb-1"></div>
                        <div class="gradient-orb orb-2"></div>
                        <div class="gradient-orb orb-3"></div>
                        <div class="mesh-gradient"></div>
                    </div>
                    
                    <!-- Section Header - Redesigned -->
                    <div class="section-header-premium" data-aos="fade-up">
                        <h2 class="section-title-premium">
                            <span class="title-gradient">Start Your AI Analysis</span>
                        </h2>
                        <p class="section-subtitle-premium">
                            Choose your analysis mode based on your trading strategy
                        </p>
                    </div>
                    
                    <!-- Interactive Tutorial Button - Premium Style -->
                    <div class="tutorial-wrapper" data-aos="fade-up" data-aos-delay="100">
                        <button class="tutorial-btn-premium" onclick="startTutorial()">
                            <div class="btn-backdrop"></div>
                            <div class="btn-content">
                                <div class="btn-icon-wrapper">
                                    <svg class="btn-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                                              fill="url(#gradientPremium)" opacity="0.9"/>
                                    </svg>
                                </div>
                                <div class="btn-text-content">
                                    <span class="btn-label">MASTER THE PLATFORM</span>
                                    <span class="btn-title">Interactive Tutorial</span>
                                </div>
                                <div class="btn-badge">
                                    <span>NEW</span>
                                </div>
                            </div>
                            <div class="btn-hover-effect"></div>
                        </button>
                    </div>
                    
                    <!-- Analysis Mode Cards - Premium Redesign -->
                    <div class="analysis-modes-grid">
                        <!-- Simple Mode Card -->
                        <div class="mode-card-premium simple" onclick="selectAnalysisMode('simple')" data-aos="fade-up" data-aos-delay="200">
                            <div class="card-glow-effect"></div>
                            <div class="card-inner">
                                <div class="card-header">
                                    <div class="mode-icon-wrapper">
                                        <div class="icon-bg"></div>
                                        <span class="mode-emoji">📈</span>
                                    </div>
                                    <span class="mode-badge">BEGINNER FRIENDLY</span>
                                </div>
                                
                                <h3 class="card-title">Simple Mode</h3>
                                <p class="card-description">
                                    Crystal-clear insights designed for beginners. Get actionable buy/sell signals without the complexity.
                                </p>
                                
                                <div class="features-list">
                                    <div class="feature-item">
                                        <div class="feature-dot"></div>
                                        <span>Trend Analysis</span>
                                    </div>
                                    <div class="feature-item">
                                        <div class="feature-dot"></div>
                                        <span>Support & Resistance</span>
                                    </div>
                                    <div class="feature-item">
                                        <div class="feature-dot"></div>
                                        <span>Entry/Exit Points</span>
                                    </div>
                                    <div class="feature-item">
                                        <div class="feature-dot"></div>
                                        <span>Risk Assessment</span>
                                    </div>
                                </div>
                                
                                <div class="card-stats">
                                    <div class="stat-item">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.5"/>
                                            <path d="M8 4v4l3 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                        </svg>
                                        <span>~30s Analysis</span>
                                    </div>
                                    <div class="stat-item">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M8 2L10 6L14 7L11 10L12 14L8 12L4 14L5 10L2 7L6 6L8 2Z" 
                                                  stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                                        </svg>
                                        <span>4.8 Rating</span>
                                    </div>
                                </div>
                                
                                <button class="select-btn">
                                    <span>Start Simple Analysis</span>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        
                        <!-- Scalping Mode Card -->
                        <div class="mode-card-premium scalping featured" onclick="selectAnalysisMode('scalping')" data-aos="fade-up" data-aos-delay="300">
                            <div class="featured-badge">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M8 1L10 5.5L15 6L11.5 9.5L12.5 14L8 11.5L3.5 14L4.5 9.5L1 6L6 5.5L8 1Z" fill="white"/>
                                </svg>
                                <span>MOST POPULAR</span>
                            </div>
                            <div class="card-glow-effect featured"></div>
                            <div class="card-inner">
                                <div class="card-header">
                                    <div class="mode-icon-wrapper featured">
                                        <div class="icon-bg"></div>
                                        <span class="mode-emoji">⚡</span>
                                    </div>
                                    <span class="mode-badge featured">HIGH FREQUENCY</span>
                                </div>
                                
                                <h3 class="card-title">Scalping Mode</h3>
                                <p class="card-description">
                                    Lightning-fast analysis for quick trades. Capture micro-movements with precision timing.
                                </p>
                                
                                <div class="features-list">
                                    <div class="feature-item">
                                        <div class="feature-dot featured"></div>
                                        <span>1-5 Min Analysis</span>
                                    </div>
                                    <div class="feature-item">
                                        <div class="feature-dot featured"></div>
                                        <span>Volume Tracking</span>
                                    </div>
                                    <div class="feature-item">
                                        <div class="feature-dot featured"></div>
                                        <span>Momentum Alerts</span>
                                    </div>
                                    <div class="feature-item">
                                        <div class="feature-dot featured"></div>
                                        <span>Quick Profits</span>
                                    </div>
                                </div>
                                
                                <div class="card-stats">
                                    <div class="stat-item">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.5"/>
                                            <path d="M8 4v4l3 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                        </svg>
                                        <span>~45s Analysis</span>
                                    </div>
                                    <div class="stat-item">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M8 2L10 6L14 7L11 10L12 14L8 12L4 14L5 10L2 7L6 6L8 2Z" 
                                                  stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                                        </svg>
                                        <span>4.9 Rating</span>
                                    </div>
                                </div>
                                
                                <button class="select-btn featured">
                                    <span>Start Scalping Analysis</span>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        
                        <!-- Professional Mode Card -->
                        <div class="mode-card-premium professional" onclick="selectAnalysisMode('professional')" data-aos="fade-up" data-aos-delay="400">
                            <div class="premium-badge">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M8 1C8 1 6 3 6 5C6 7 8 7 8 7C8 7 10 7 10 5C10 3 8 1 8 1Z" fill="white"/>
                                    <path d="M8 7L4 15H12L8 7Z" fill="white"/>
                                </svg>
                                <span>PREMIUM</span>
                            </div>
                            <div class="card-glow-effect premium"></div>
                            <div class="card-inner">
                                <div class="card-header">
                                    <div class="mode-icon-wrapper premium">
                                        <div class="icon-bg"></div>
                                        <span class="mode-emoji">👑</span>
                                    </div>
                                </div>
                                
                                <h3 class="card-title">Professional Mode</h3>
                                <p class="card-description">
                                    Comprehensive market intelligence with advanced indicators and multi-timeframe confluence.
                                </p>
                                
                                <div class="features-list">
                                    <div class="feature-item">
                                        <div class="feature-dot premium"></div>
                                        <span>Multi-Timeframe</span>
                                    </div>
                                    <div class="feature-item">
                                        <div class="feature-dot premium"></div>
                                        <span>Elliott Waves</span>
                                    </div>
                                    <div class="feature-item">
                                        <div class="feature-dot premium"></div>
                                        <span>Order Flow</span>
                                    </div>
                                    <div class="feature-item">
                                        <div class="feature-dot premium"></div>
                                        <span>AI Predictions</span>
                                    </div>
                                </div>
                                
                                <div class="card-stats">
                                    <div class="stat-item">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.5"/>
                                            <path d="M8 4v4l3 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                        </svg>
                                        <span>~2min Analysis</span>
                                    </div>
                                    <div class="stat-item">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M8 2L10 6L14 7L11 10L12 14L8 12L4 14L5 10L2 7L6 6L8 2Z" 
                                                  stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                                        </svg>
                                        <span>5.0 Rating</span>
                                    </div>
                                </div>
                                
                                <button class="select-btn premium">
                                    <span>Start Pro Analysis</span>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Trust Indicators -->
                    <div class="trust-indicators" data-aos="fade-up" data-aos-delay="500">
                        <div class="trust-item">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 2L12 7L17 7.5L13.5 11L14.5 16L10 13.5L5.5 16L6.5 11L3 7.5L8 7L10 2Z" 
                                      fill="url(#gradientTrust)" opacity="0.2" stroke="url(#gradientTrust)" stroke-width="1.5" stroke-linejoin="round"/>
                            </svg>
                            <span>Trusted by 50,000+ traders worldwide</span>
                        </div>
                        <div class="trust-divider"></div>
                        <div class="trust-item">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 2C10 2 4 5 4 10C4 15 10 18 10 18C10 18 16 15 16 10C16 5 10 2 10 2Z" 
                                      stroke="url(#gradientTrust)" stroke-width="1.5"/>
                                <path d="M7 10L9 12L13 8" stroke="url(#gradientTrust)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>Bank-level security & encryption</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Section Divider -->
            <div class="section-divider-premium">
                <div class="divider-line"></div>
                <div class="divider-glow"></div>
            </div>
            
            <!-- Recent Analyses Section -->
            <div class="recent-analyses-section-improved">
                <div class="section-header-pro">
                    <h2 class="section-title-pro">
                        <span class="title-icon">📊</span>
                        Recent Analyses
                    </h2>
                    <div class="view-controls">
                        <button class="view-btn active" onclick="setViewMode('grid')">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                <rect x="1" y="1" width="6" height="6" />
                                <rect x="9" y="1" width="6" height="6" />
                                <rect x="1" y="9" width="6" height="6" />
                                <rect x="9" y="9" width="6" height="6" />
                            </svg>
                        </button>
                        <button class="view-btn" onclick="setViewMode('list')">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                <rect x="1" y="2" width="14" height="2" />
                                <rect x="1" y="7" width="14" height="2" />
                                <rect x="1" y="12" width="14" height="2" />
                            </svg>
                        </button>
                    </div>
                </div>
                
                <div class="empty-state-pro" id="emptyState">
                    <div class="empty-illustration">
                        <div class="empty-chart-wrapper">
                            <svg class="empty-chart-svg" width="120" height="120" viewBox="0 0 120 120" fill="none">
                                <rect x="20" y="80" width="15" height="20" rx="3" fill="url(#barGradient1)" opacity="0.6"/>
                                <rect x="40" y="60" width="15" height="40" rx="3" fill="url(#barGradient1)" opacity="0.7"/>
                                <rect x="60" y="40" width="15" height="60" rx="3" fill="url(#barGradient1)" opacity="0.8"/>
                                <rect x="80" y="50" width="15" height="50" rx="3" fill="url(#barGradient1)" opacity="0.9"/>
                                <path d="M20 70 Q40 50 60 30 T100 20" stroke="url(#lineGradient1)" stroke-width="3" fill="none" stroke-linecap="round"/>
                            </svg>
                            <div class="empty-pulse-ring"></div>
                            <div class="empty-pulse-ring delay-1"></div>
                            <div class="empty-pulse-ring delay-2"></div>
                        </div>
                    </div>
                    <h3 class="empty-title">No analyses yet</h3>
                    <p class="empty-text">Start your journey to professional trading insights</p>
                    <button class="cta-btn-primary" onclick="showSection('upload')">
                        <div class="btn-shine"></div>
                        <svg class="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
                        </svg>
                        <span>Upload Your First Chart</span>
                        <svg class="btn-arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
                
                <div class="analysis-grid-pro" id="analysisList" style="display: none;">
                    <!-- Analysis items will be added here dynamically -->
                </div>
            </div>
            
            <!-- Tutorial Modal -->
            <div class="tutorial-modal" id="tutorialModal">
                <div class="tutorial-modal-content">
                    <button class="tutorial-close" onclick="closeTutorial()">×</button>
                    <div class="tutorial-header">
                        <h2>Choose Your Trading Style</h2>
                        <p>Learn about each analysis mode to make the best choice</p>
                    </div>
                    
                    <div class="tutorial-tabs">
                        <button class="tutorial-tab active" onclick="showTutorialTab('simple')">
                            <span class="tab-icon">📈</span>
                            <span>Simple Mode</span>
                        </button>
                        <button class="tutorial-tab" onclick="showTutorialTab('scalping')">
                            <span class="tab-icon">⚡</span>
                            <span>Scalping Mode</span>
                        </button>
                        <button class="tutorial-tab" onclick="showTutorialTab('professional')">
                            <span class="tab-icon">👑</span>
                            <span>Professional Mode</span>
                        </button>
                    </div>
                    
                    <div class="tutorial-content" id="tutorialContent">
                        <div class="tutorial-section active" data-tab="simple">
                            <div class="tutorial-video-placeholder">
                                <span class="video-icon">▶️</span>
                                <p>Video Tutorial: Simple Mode</p>
                            </div>
                            <h3>Simple Mode - Perfect for Beginners</h3>
                            <p>Simple Mode is designed for traders who want clear, actionable insights without complexity.</p>
                            <h4>What you'll get:</h4>
                            <ul>
                                <li><strong>Clear Buy/Sell Signals:</strong> Easy-to-understand entry and exit points</li>
                                <li><strong>Trend Direction:</strong> Know if the market is bullish, bearish, or neutral</li>
                                <li><strong>Key Levels:</strong> Important support and resistance levels</li>
                                <li><strong>Risk Assessment:</strong> Simple risk rating for each trade</li>
                            </ul>
                            <h4>Best for:</h4>
                            <ul>
                                <li>New traders learning the basics</li>
                                <li>Long-term investors</li>
                                <li>Anyone wanting quick market insights</li>
                            </ul>
                        </div>
                        
                        <div class="tutorial-section" data-tab="scalping">
                            <div class="tutorial-video-placeholder">
                                <span class="video-icon">▶️</span>
                                <p>Video Tutorial: Scalping Mode</p>
                            </div>
                            <h3>Scalping Mode - For Quick Profits</h3>
                            <p>Optimized for traders who make multiple quick trades throughout the day.</p>
                            <h4>What you'll get:</h4>
                            <ul>
                                <li><strong>Micro Timeframe Analysis:</strong> 1, 3, and 5-minute chart insights</li>
                                <li><strong>Precise Entry Points:</strong> Exact prices for entering trades</li>
                                <li><strong>Quick Exit Strategies:</strong> Take profit levels for fast gains</li>
                                <li><strong>Volume Indicators:</strong> Know when big moves are coming</li>
                                <li><strong>Momentum Alerts:</strong> Catch rapid price movements</li>
                            </ul>
                            <h4>Best for:</h4>
                            <ul>
                                <li>Day traders</li>
                                <li>Scalpers seeking quick profits</li>
                                <li>High-frequency traders</li>
                            </ul>
                        </div>
                        
                        <div class="tutorial-section" data-tab="professional">
                            <div class="tutorial-video-placeholder">
                                <span class="video-icon">▶️</span>
                                <p>Video Tutorial: Professional Mode</p>
                            </div>
                            <h3>Professional Mode - Institutional-Grade Analysis</h3>
                            <p>Get the same insights used by professional traders and institutions.</p>
                            <h4>What you'll get:</h4>
                            <ul>
                                <li><strong>Multi-Timeframe Confluence:</strong> Analysis across multiple time periods</li>
                                <li><strong>Advanced Patterns:</strong> Elliott Wave, Harmonic patterns, and more</li>
                                <li><strong>Market Structure:</strong> Understanding of market phases and cycles</li>
                                <li><strong>Order Flow Analysis:</strong> See where smart money is positioned</li>
                                <li><strong>Risk/Reward Optimization:</strong> Professional position sizing</li>
                                <li><strong>Correlation Analysis:</strong> How other markets affect your trade</li>
                            </ul>
                            <h4>Best for:</h4>
                            <ul>
                                <li>Professional traders</li>
                                <li>Hedge fund managers</li>
                                <li>Serious investors seeking deep insights</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="tutorial-footer">
                        <button class="tutorial-start-btn" onclick="closeTutorial()">
                            <span>Got it! Let's start analyzing</span>
                            <span>→</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- SVG Definitions -->
        <svg width="0" height="0" style="position: absolute;">
            <defs>
                <linearGradient id="iconGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#6366f1;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#8b5cf6;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#ec4899;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="gradientElectric" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#6366f1;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#a855f7;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="gradientSuccess" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#10b981;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#34d399;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="gradientSpeed" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#60a5fa;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="gradientPremium" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f59e0b;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#fbbf24;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="gradientSimple" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#6366f1;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#818cf8;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="gradientScalping" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f59e0b;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#ef4444;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="gradientPro" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#ec4899;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="gradientTrust" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#6b7280;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#9ca3af;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="barGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#6366f1;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#ec4899;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#6366f1;stop-opacity:0.8" />
                    <stop offset="100%" style="stop-color:#ec4899;stop-opacity:0.8" />
                </linearGradient>
            </defs>
        </svg>
        
        <style>
        /* Keep all existing styles... */
        /* Hero Section - Ultra Premium Design */
        .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(99, 102, 241, 0.1);
            border: 1px solid rgba(99, 102, 241, 0.2);
            padding: 8px 20px;
            border-radius: 30px;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 1.2px;
            color: #6366f1;
            margin-bottom: 24px;
            position: relative;
            overflow: hidden;
        }
        
        .hero-badge span:last-child {
            position: relative;
            z-index: 1;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 1.2px;
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 25%, #ec4899 50%, #6366f1 75%, #8b5cf6 100%);
            background-size: 200% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: gradientShift 5s ease-in-out infinite;
        }
        
        @keyframes badgeShine {
            0% { left: -100%; }
            50% { left: 100%; }
            100% { left: 100%; }
        }
        
        .hero-badge::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.2), transparent);
            animation: badgeShine 3s ease-in-out infinite;
        }
        
        .badge-dot {
            width: 6px;
            height: 6px;
            background: #6366f1;
            border-radius: 50%;
            animation: dotBlink 2s ease-in-out infinite;
        }
        
        @keyframes dotBlink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
        }
        
        .hero-title-premium {
            font-size: 72px;
            font-weight: 900;
            margin-bottom: 24px;
            line-height: 1.1;
            letter-spacing: -2px;
            font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        .title-line {
            display: block;
        }
        
        .title-word {
            display: inline-block;
            margin: 0 12px;
            color: #111827;
            position: relative;
        }
        
        .gradient-text-animated {
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 25%, #ec4899 50%, #6366f1 75%, #8b5cf6 100%);
            background-size: 200% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: gradientShift 5s ease-in-out infinite;
            position: relative;
        }
        
        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        .hero-subtitle-premium {
            font-size: 20px;
            color: #6b7280;
            margin-bottom: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            font-weight: 500;
        }
        
        .subtitle-highlight {
            color: #374151;
            font-weight: 600;
        }
        
        .subtitle-separator {
            color: #d1d5db;
            font-weight: 300;
        }
        
        .hero-metrics {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 32px;
            margin-bottom: 48px;
        }
        
        .metric-item {
            text-align: center;
        }
        
        .metric-value {
            display: block;
            font-size: 28px;
            font-weight: 800;
            color: #111827;
            margin-bottom: 4px;
            font-family: 'SF Mono', monospace;
        }
        
        .metric-label {
            font-size: 13px;
            color: #9ca3af;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .metric-divider {
            width: 1px;
            height: 40px;
            background: linear-gradient(to bottom, transparent, #e5e7eb, transparent);
        }
        
        /* Market Status Improvements */
        .market-status-container {
            margin: 16px 0;
        }
        
        .market-status-badge {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 12px 24px;
            border-radius: 30px;
            font-weight: 700;
            font-size: 18px;
            letter-spacing: 1px;
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
        }
        
        .market-status-badge.neutral {
            background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(239, 68, 68, 0.1));
            border: 2px solid rgba(245, 158, 11, 0.3);
            color: #f59e0b;
        }
        
        .market-status-badge.bullish {
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(34, 197, 94, 0.1));
            border: 2px solid rgba(16, 185, 129, 0.3);
            color: #10b981;
        }
        
        .market-status-badge.bearish {
            background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.1));
            border: 2px solid rgba(239, 68, 68, 0.3);
            color: #ef4444;
        }
        
        .status-pulse {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: currentColor;
            position: relative;
        }
        
        .status-pulse::before,
        .status-pulse::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: currentColor;
            animation: statusPulse 2s ease-in-out infinite;
        }
        
        .status-pulse::after {
            animation-delay: 0.5s;
        }
        
        @keyframes statusPulse {
            0% {
                transform: translate(-50%, -50%) scale(1);
                opacity: 1;
            }
            100% {
                transform: translate(-50%, -50%) scale(3);
                opacity: 0;
            }
        }
        
        .indicator-bar-chart {
            display: flex;
            align-items: flex-end;
            gap: 3px;
            height: 24px;
            margin-right: 12px;
        }
        
        .indicator-bar-chart .bar {
            width: 8px;
            border-radius: 2px 2px 0 0;
            transition: all 0.3s ease;
        }
        
        .indicator-bar-chart .bar.sell {
            background: #ef4444;
        }
        
        .indicator-bar-chart .bar.neutral {
            background: #f59e0b;
        }
        
        .indicator-bar-chart .bar.buy {
            background: #10b981;
        }
        
        .indicator-text {
            font-size: 13px;
            color: #6b7280;
        }
        
        /* Animations on scroll */
        [data-aos] {
            opacity: 0;
        }
        
        [data-aos="fade-up"] {
            transform: translateY(30px);
        }
        
        [data-aos="fade-down"] {
            transform: translateY(-30px);
        }
        
        [data-aos].aos-animate {
            opacity: 1;
            transform: translateY(0);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
            .hero-title-premium {
                font-size: 48px;
            }
            
            .hero-metrics {
                gap: 20px;
            }
            
            .metric-value {
                font-size: 24px;
            }
        }
        
        /* Analyses Hero Section - White Background */
        .analyses-hero-section-improved {
            position: relative;
            z-index: 2;
            padding: 60px 32px 40px;
            text-align: center;
            background: #ffffff;
            border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }
        
        /* SVG Gradients for charts */
        .stat-sparkline svg {
            width: 100%;
            height: 30px;
        }
        
        /* Premium Stats - Ultra Professional Design */
        .premium-stat-card {
            background: linear-gradient(135deg, #ffffff 0%, #fafbff 100%);
            border: 1px solid rgba(99, 102, 241, 0.08);
            border-radius: 24px;
            padding: 0;
            position: relative;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            flex: 1 1 0;
            min-width: 0;
            max-width: 380px;
            box-shadow: 0 4px 24px rgba(99, 102, 241, 0.06);
        }
        
        .premium-stat-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 40px rgba(99, 102, 241, 0.12);
            border-color: rgba(99, 102, 241, 0.2);
        }
        
        .stat-glow {
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%);
            opacity: 0;
            transition: opacity 0.4s ease;
            pointer-events: none;
        }
        
        .premium-stat-card:hover .stat-glow {
            opacity: 1;
        }
        
        .stat-inner {
            padding: 32px;
            position: relative;
            z-index: 1;
        }
        
        /* Stat Header */
        .stat-header {
            display: flex;
            align-items: center;
            gap: 16px;
            margin-bottom: 24px;
        }
        
        /* Modern Icon Design - Unified Color */
        .stat-icon-modern {
            position: relative;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .icon-backdrop {
            position: absolute;
            inset: -4px;
            background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
            border-radius: 16px;
            transform: rotate(-6deg);
            transition: all 0.3s ease;
        }
        
        .premium-stat-card:hover .icon-backdrop {
            transform: rotate(6deg) scale(1.1);
        }
        
        .stat-icon-modern svg {
            position: relative;
            z-index: 1;
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        }
        
        /* Modern Labels */
        .stat-label-modern {
            font-size: 13px;
            color: #6b7280;
            text-transform: uppercase;
            letter-spacing: 1.2px;
            font-weight: 700;
        }
        
        /* Value Container */
        .stat-value-container {
            display: flex;
            align-items: baseline;
            gap: 16px;
            margin-bottom: 20px;
        }
        
        .stat-number-modern {
            font-size: 48px;
            font-weight: 900;
            color: #111827;
            font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
            letter-spacing: -2px;
            line-height: 1;
            transition: all 0.3s ease;
        }
        
        .premium-stat-card:hover .stat-number-modern {
            transform: scale(1.05);
        }
        
        .stat-change-indicator {
            display: flex;
            align-items: center;
            gap: 4px;
            padding: 6px 12px;
            background: rgba(99, 102, 241, 0.08);
            border: 1px solid rgba(99, 102, 241, 0.15);
            border-radius: 20px;
            font-size: 14px;
            font-weight: 700;
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
        }
        
        .stat-change-indicator span {
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 25%, #ec4899 50%, #6366f1 75%, #8b5cf6 100%);
            background-size: 200% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: gradientShift 5s ease-in-out infinite;
        }
        
        .stat-change-indicator:hover {
            background: rgba(99, 102, 241, 0.12);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
        }
        
        .stat-change-indicator svg {
            width: 16px;
            height: 16px;
            animation: arrowBounce 2s ease-in-out infinite;
        }
        
        .stat-change-indicator svg path {
            stroke: url(#iconGradient1);
        }
        
        @keyframes arrowBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
        }
        
        
        /* Mini Bar Chart for Total Analyses */
        .stat-visual-data {
            margin: 20px 0;
        }
        
        .mini-bar-chart {
            display: flex;
            align-items: flex-end;
            gap: 4px;
            height: 50px;
        }
        
        .bar-item {
            flex: 1;
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 25%, #ec4899 50%, #6366f1 75%, #8b5cf6 100%);
            background-size: 200% 200%;
            animation: gradientShift 5s ease-in-out infinite, barGrowUp 0.8s ease-out forwards;
            animation-delay: 0s, calc(var(--index, 0) * 0.1s);
            height: var(--height);
            border-radius: 3px 3px 0 0;
            opacity: 0.8;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        
        .bar-item::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 100%;
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), transparent);
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .bar-item:hover {
            opacity: 1;
            transform: scaleY(1.05);
        }
        
        .bar-item:hover::after {
            opacity: 1;
        }
        
        .bar-item:nth-child(1) { --index: 0; }
        .bar-item:nth-child(2) { --index: 1; }
        .bar-item:nth-child(3) { --index: 2; }
        .bar-item:nth-child(4) { --index: 3; }
        .bar-item:nth-child(5) { --index: 4; }
        .bar-item:nth-child(6) { --index: 5; }
        .bar-item:nth-child(7) { --index: 6; }
        
        @keyframes barGrowUp {
            from { height: 0; }
        }
        
        .premium-stat-card:hover .bar-item {
            opacity: 1;
            transform: scaleY(1.1);
        }
        
        /* Stat Footer */
        .stat-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: auto;
        }
        
        .stat-period {
            font-size: 12px;
            color: #9ca3af;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-weight: 600;
        }
        
        .stat-live-indicator {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 4px 12px;
            background: rgba(99, 102, 241, 0.08);
            border: 1px solid rgba(99, 102, 241, 0.15);
            border-radius: 20px;
            font-size: 11px;
           font-weight: 700;
           letter-spacing: 0.5px;
           position: relative;
           overflow: hidden;
           transition: all 0.3s ease;
       }
       
       .stat-live-indicator:hover {
           transform: scale(1.05);
           box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
           background: rgba(99, 102, 241, 0.12);
       }
       
       .stat-live-indicator span:last-child {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 25%, #ec4899 50%, #6366f1 75%, #8b5cf6 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 5s ease-in-out infinite;
      }
      
      .live-dot {
          width: 6px;
          height: 6px;
          background: #10b981;
          border-radius: 50%;
          animation: liveBlink 2s ease-in-out infinite;
          box-shadow: 0 0 8px rgba(16, 185, 129, 0.8);
      }
      
      @keyframes liveBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
      }
      
      /* Strategy Specific */
      .stat-strategy-name {
          font-size: 16px;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 25%, #ec4899 50%, #6366f1 75%, #8b5cf6 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 5s ease-in-out infinite;
          font-weight: 600;
      }
      
      /* Modern Progress Bar */
      .stat-progress-modern {
          margin-top: 20px;
      }
      
      .progress-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
      }
      
      /* Progress Bar Styles */
      .progress-label {
          font-size: 12px;
          color: #111827;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 700;
      }
      
      .progress-value {
          font-size: 14px;
          font-weight: 800;
          color: #111827;
      }
      
      .progress-track-modern {
          width: 100%;
          height: 8px;
          background: rgba(99, 102, 241, 0.08);
          border-radius: 10px;
          overflow: hidden;
          position: relative;
      }
      
      .progress-fill-modern {
          height: 100%;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 25%, #ec4899 50%, #6366f1 75%, #8b5cf6 100%);
          background-size: 200% 200%;
          animation: gradientShift 5s ease-in-out infinite;
          border-radius: 10px;
          position: relative;
          transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .progress-glow {
          position: absolute;
          top: 0;
          right: 0;
          width: 40px;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
          animation: progressGlow 2s ease-in-out infinite;
      }
      
      @keyframes progressGlow {
          0% { transform: translateX(-40px); }
          100% { transform: translateX(40px); }
      }
      
      /* Success Indicators */
      .success-indicators {
          display: flex;
          gap: 6px;
          margin-top: 12px;
      }
      
      .indicator-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.2);
          transition: all 0.3s ease;
      }
      
      .indicator-dot.success {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
          box-shadow: 0 0 8px rgba(139, 92, 246, 0.5);
      }
      
      /* Market Status Modern */
      .market-status-modern {
          margin: 20px 0;
      }
      
      .market-badge-modern {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 30px;
          font-weight: 800;
          font-size: 20px;
          letter-spacing: 0.5px;
          position: relative;
          transition: all 0.3s ease;
      }
      
      .market-badge-modern.neutral {
          background: rgba(99, 102, 241, 0.08);
          border: 2px solid rgba(99, 102, 241, 0.15);
          box-shadow: 0 4px 20px rgba(99, 102, 241, 0.1);
          position: relative;
          overflow: hidden;
      }
      
      .market-badge-modern.neutral:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(99, 102, 241, 0.15);
          background: rgba(99, 102, 241, 0.12);
      }
      
      .market-badge-modern.neutral span {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 25%, #ec4899 50%, #6366f1 75%, #8b5cf6 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 5s ease-in-out infinite;
          position: relative;
          z-index: 1;
      }
      
      .market-pulse {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
          position: relative;
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.8);
          animation: marketPulse 2s ease-in-out infinite;
      }
      
      @keyframes marketPulse {
          0%, 100% { 
              transform: scale(1);
              box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
          }
          50% { 
              transform: scale(1.2);
              box-shadow: 0 0 20px rgba(99, 102, 241, 0.7);
          }
      }
      
      /* Market Analysis Bars */
      .market-analysis {
          margin: 20px 0;
      }
      
      .analysis-bars {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          height: 80px;
          gap: 16px;
          margin-bottom: 12px;
      }
      
      .analysis-bar-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
      }
      
      .analysis-bar {
          width: 100%;
          border-radius: 8px 8px 0 0;
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 8px;
          margin-bottom: 8px;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 25%, #ec4899 50%, #6366f1 75%, #8b5cf6 100%);
          background-size: 200% 200%;
          animation: gradientShift 5s ease-in-out infinite, barGrowUp 0.8s ease-out forwards;
          animation-delay: 0s, calc(var(--bar-index, 0) * 0.15s);
      }

      .analysis-bar:hover {
         transform: translateY(-4px);
         filter: brightness(1.1);
         box-shadow: 0 8px 20px rgba(139, 92, 246, 0.3);
     }
     
     .analysis-bar.bullish {
         --bar-index: 0;
     }
     
     .analysis-bar.neutral {
         --bar-index: 1;
     }
     
     .analysis-bar.bearish {
         --bar-index: 2;
     }
     
     .bar-value {
         color: white;
         font-size: 14px;
         font-weight: 700;
         text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
     }
     
     .bar-label {
         font-size: 12px;
         font-weight: 600;
         color: #6b7280;
         text-transform: uppercase;
         letter-spacing: 0.5px;
     }
     
     /* Market Footer */
     .market-footer {
         text-align: center;
         margin-top: 16px;
     }
     
     .market-signal {
         font-size: 13px;
         color: #6b7280;
         font-style: italic;
     }
     
     /* Start Analysis Section - Ultra Premium Redesign */
     .start-analysis-section-premium {
         position: relative;
         padding: 120px 32px;
         background: #ffffff;
         overflow: hidden;
     }
     
     .section-container-premium {
         max-width: 1400px;
         margin: 0 auto;
         position: relative;
         z-index: 2;
     }
     
     /* Premium Background Effects */
     .premium-bg-effects {
         position: absolute;
         inset: 0;
         overflow: hidden;
         z-index: 0;
         opacity: 0; /* Deaktiviert die Hintergrundeffekte für reines Weiß */
     }
     
     .gradient-orb {
         position: absolute;
         border-radius: 50%;
         filter: blur(100px);
         opacity: 0; /* Deaktiviert für reines Weiß */
         animation: orbFloat 25s ease-in-out infinite;
     }
     
     .orb-1 {
         width: 800px;
         height: 800px;
         background: linear-gradient(135deg, #6366f1, #8b5cf6);
         top: -300px;
         left: -300px;
         animation-duration: 30s;
     }
     
     .orb-2 {
         width: 600px;
         height: 600px;
         background: linear-gradient(135deg, #ec4899, #f59e0b);
         bottom: -200px;
         right: -200px;
         animation-duration: 35s;
         animation-delay: -10s;
     }
     
     .orb-3 {
         width: 500px;
         height: 500px;
         background: linear-gradient(135deg, #10b981, #3b82f6);
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         animation-duration: 40s;
         animation-delay: -5s;
     }
     
     @keyframes orbFloat {
         0%, 100% {
             transform: translate(0, 0) scale(1);
         }
         25% {
             transform: translate(100px, -50px) scale(1.1);
         }
         50% {
             transform: translate(-50px, 100px) scale(0.9);
         }
         75% {
             transform: translate(-100px, -30px) scale(1.05);
         }
     }
     
     .mesh-gradient {
         position: absolute;
         inset: 0;
         background-image: none; /* Entfernt das Gitter für reines Weiß */
         background-size: 50px 50px;
         animation: meshMove 30s linear infinite;
     }
     
     @keyframes meshMove {
         0% {
             transform: translate(0, 0);
         }
         100% {
             transform: translate(50px, 50px);
         }
     }
     
     /* Section Header - Premium Redesign */
     .section-header-premium {
         text-align: center;
         margin-bottom: 60px;
         position: relative;
     }
     
     .header-badge {
         display: inline-flex;
         align-items: center;
         justify-content: center;
         padding: 10px 24px;
         background: rgba(99, 102, 241, 0.08);
         border: 1px solid rgba(99, 102, 241, 0.15);
         border-radius: 100px;
         margin-bottom: 32px;
         position: relative;
         overflow: hidden;
     }
     
     .badge-glow {
         position: absolute;
         inset: 0;
         background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.2), transparent);
         animation: badgeGlow 3s ease-in-out infinite;
     }
     
     @keyframes badgeGlow {
         0% {
             transform: translateX(-100%);
         }
         100% {
             transform: translateX(100%);
         }
     }
     
     .header-badge span {
         position: relative;
         z-index: 1;
         font-size: 12px;
         font-weight: 800;
         letter-spacing: 2px;
         background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
         -webkit-background-clip: text;
         -webkit-text-fill-color: transparent;
         background-clip: text;
     }
     
     .section-title-premium {
         font-size: 64px;
         font-weight: 900;
         line-height: 1.1;
         letter-spacing: -2px;
         margin-bottom: 24px;
         font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
     }
     
     .title-gradient {
         background: linear-gradient(135deg, #111827 0%, #374151 100%);
         -webkit-background-clip: text;
         -webkit-text-fill-color: transparent;
         background-clip: text;
         position: relative;
         display: inline-block;
     }
     
     .title-gradient::after {
         content: attr(data-text);
         position: absolute;
         left: 2px;
         top: 2px;
         z-index: -1;
         background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 25%, #ec4899 50%, #6366f1 75%, #8b5cf6 100%);
         background-size: 200% 200%;
         -webkit-background-clip: text;
         -webkit-text-fill-color: transparent;
         background-clip: text;
         animation: gradientShift 5s ease-in-out infinite;
         opacity: 0.7;
         filter: blur(8px);
     }
     
     .section-subtitle-premium {
         font-size: 20px;
         color: #6b7280;
         font-weight: 500;
         letter-spacing: -0.3px;
         max-width: 600px;
         margin: 0 auto;
     }
     
     /* Tutorial Button - Premium Style */
     .tutorial-wrapper {
         display: flex;
         justify-content: center;
         margin-bottom: 80px;
     }
     
     .tutorial-btn-premium {
         position: relative;
         background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
         border: none;
         border-radius: 20px;
         padding: 24px 48px;
         cursor: pointer;
         overflow: hidden;
         transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
         box-shadow: 0 10px 40px rgba(99, 102, 241, 0.3);
     }
     
     .tutorial-btn-premium:hover {
         transform: translateY(-4px) scale(1.02);
         box-shadow: 0 20px 60px rgba(99, 102, 241, 0.4);
     }
     
     .btn-backdrop {
         position: absolute;
         inset: 0;
         background: rgba(255, 255, 255, 0.1);
         opacity: 0;
         transition: opacity 0.3s ease;
     }
     
     .tutorial-btn-premium:hover .btn-backdrop {
         opacity: 1;
     }
     
     .btn-content {
         position: relative;
         z-index: 1;
         display: flex;
         align-items: center;
         gap: 20px;
     }
     
     .btn-icon-wrapper {
         width: 40px;
         height: 40px;
         background: rgba(255, 255, 255, 0.2);
         border-radius: 12px;
         display: flex;
         align-items: center;
         justify-content: center;
         position: relative;
         overflow: hidden;
     }
     
     .btn-icon-wrapper::after {
         content: '';
         position: absolute;
         inset: -50%;
         background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%);
         animation: iconPulse 2s ease-in-out infinite;
     }
     
     @keyframes iconPulse {
         0%, 100% {
             transform: scale(1);
             opacity: 0;
         }
         50% {
             transform: scale(1.5);
             opacity: 1;
         }
     }
     
     .btn-text-content {
         text-align: left;
     }
     
     .btn-label {
         display: block;
         font-size: 12px;
         font-weight: 700;
         letter-spacing: 1.5px;
         color: rgba(255, 255, 255, 0.8);
         margin-bottom: 4px;
     }
     
     .btn-title {
         display: block;
         font-size: 20px;
         font-weight: 800;
         color: white;
         letter-spacing: -0.5px;
     }
     
     .btn-badge {
         padding: 6px 16px;
         background: linear-gradient(135deg, #10b981, #34d399);
         border-radius: 100px;
         position: relative;
         overflow: hidden;
     }
     
     .btn-badge span {
         position: relative;
         z-index: 1;
         font-size: 11px;
         font-weight: 800;
         letter-spacing: 1px;
         color: white;
     }
     
     .btn-badge::before {
         content: '';
         position: absolute;
         top: -50%;
         left: -50%;
         width: 200%;
         height: 200%;
         background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.5) 50%, transparent 70%);
         animation: badgeShineMove 3s ease-in-out infinite;
         transform: rotate(45deg);
     }
     
     @keyframes badgeShineMove {
         0% {
             transform: translateX(-100%) translateY(-100%) rotate(45deg);
         }
         100% {
             transform: translateX(100%) translateY(100%) rotate(45deg);
         }
     }
     
     .btn-hover-effect {
         position: absolute;
         inset: 0;
         background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255, 255, 255, 0.3) 0%, transparent 50%);
         opacity: 0;
         transition: opacity 0.3s ease;
         pointer-events: none;
     }
     
     .tutorial-btn-premium:hover .btn-hover-effect {
         opacity: 1;
     }
     
     /* Analysis Mode Cards - Premium Redesign */
     .analysis-modes-grid {
         display: grid;
         grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
         gap: 32px;
         max-width: 1400px;
         margin: 0 auto 80px;
     }
     
     .mode-card-premium {
         position: relative;
         cursor: pointer;
         transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
     }
     
     .mode-card-premium:hover {
         transform: translateY(-12px);
         z-index: 10;
     }
     
     .card-glow-effect {
         position: absolute;
         inset: -2px;
         background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3));
         border-radius: 28px;
         opacity: 0;
         filter: blur(20px);
         transition: opacity 0.4s ease;
     }
     
     .card-glow-effect.featured {
         background: linear-gradient(135deg, rgba(245, 158, 11, 0.3), rgba(239, 68, 68, 0.3));
     }
     
     .card-glow-effect.premium {
         background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3));
     }
     
     .mode-card-premium:hover .card-glow-effect {
         opacity: 1;
     }
     
     .card-inner {
         position: relative;
         background: #ffffff;
         border: 1px solid rgba(0, 0, 0, 0.08);
         border-radius: 24px;
         padding: 40px;
         height: 100%;
         display: flex;
         flex-direction: column;
         overflow: hidden;
         box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
         transition: all 0.4s ease;
     }
     
     .mode-card-premium:hover .card-inner {
         border-color: rgba(99, 102, 241, 0.2);
         box-shadow: 0 20px 60px rgba(99, 102, 241, 0.15);
     }
     
     /* Card Badges */
     .featured-badge,
     .premium-badge {
         position: absolute;
         top: 24px;
         right: 24px;
         z-index: 2;
         display: flex;
         align-items: center;
         gap: 6px;
         padding: 8px 20px;
         border-radius: 100px;
         font-size: 11px;
         font-weight: 800;
         letter-spacing: 1.5px;
         color: white;
     }
     
     .featured-badge {
         background: linear-gradient(135deg, #f59e0b, #ef4444);
         box-shadow: 0 4px 16px rgba(245, 158, 11, 0.3);
     }
     
     .premium-badge {
         background: linear-gradient(135deg, #8b5cf6, #ec4899);
         box-shadow: 0 4px 16px rgba(139, 92, 246, 0.3);
     }
     
     /* Card Header */
     .card-header {
         display: flex;
         align-items: center;
         gap: 20px;
         margin-bottom: 24px;
     }
     
     .mode-icon-wrapper {
         position: relative;
         width: 64px;
         height: 64px;
         background: rgba(99, 102, 241, 0.08);
         border-radius: 20px;
         display: flex;
         align-items: center;
         justify-content: center;
         overflow: hidden;
     }
     
     .mode-icon-wrapper.featured {
         background: rgba(245, 158, 11, 0.08);
     }
     
     .mode-icon-wrapper.premium {
         background: rgba(139, 92, 246, 0.08);
     }
     
     .icon-bg {
         position: absolute;
         inset: 0;
         background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
         opacity: 0;
         transition: opacity 0.3s ease;
     }
     
     .mode-card-premium:hover .icon-bg {
         opacity: 1;
     }
     
     .mode-emoji {
         font-size: 32px;
         filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1));
         position: relative;
         z-index: 1;
     }
     
     .mode-badge {
         font-size: 11px;
         font-weight: 800;
         letter-spacing: 1.5px;
         color: #6b7280;
         text-transform: uppercase;
     }
     
     .mode-badge.featured {
         color: #f59e0b;
     }
     
     .mode-badge.premium {
         color: #8b5cf6;
     }
     
     /* Card Content */
     .card-title {
         font-size: 32px;
         font-weight: 800;
         color: #111827;
         margin-bottom: 16px;
         letter-spacing: -1px;
     }
     
     .card-description {
         font-size: 16px;
         color: #6b7280;
         line-height: 1.6;
         margin-bottom: 32px;
     }
     
     /* Features List */
     .features-list {
         display: grid;
         grid-template-columns: repeat(2, 1fr);
         gap: 16px;
         margin-bottom: 32px;
         flex: 1;
     }
     
     .feature-item {
         display: flex;
         align-items: center;
         gap: 12px;
         padding: 12px;
         background: rgba(99, 102, 241, 0.04);
         border: 1px solid rgba(99, 102, 241, 0.08);
         border-radius: 12px;
         transition: all 0.3s ease;
     }
     
     .feature-item:hover {
         background: rgba(99, 102, 241, 0.08);
         border-color: rgba(99, 102, 241, 0.15);
         transform: translateX(4px);
     }
     
     .feature-dot {
         width: 8px;
         height: 8px;
         background: linear-gradient(135deg, #6366f1, #8b5cf6);
         border-radius: 50%;
         position: relative;
         flex-shrink: 0;
     }
     
     .feature-dot.featured {
         background: linear-gradient(135deg, #f59e0b, #ef4444);
     }
     
     .feature-dot.premium {
         background: linear-gradient(135deg, #8b5cf6, #ec4899);
     }
     
     .feature-dot::after {
         content: '';
         position: absolute;
         inset: -4px;
         background: inherit;
         border-radius: 50%;
         opacity: 0.3;
         animation: dotPulse 2s ease-in-out infinite;
     }
     
     @keyframes dotPulse {
         0%, 100% {
             transform: scale(1);
             opacity: 0.3;
         }
         50% {
             transform: scale(1.5);
             opacity: 0.1;
         }
     }
     
     .feature-item span {
         font-size: 14px;
         font-weight: 600;
         color: #374151;
     }
     
     /* Card Stats */
     .card-stats {
         display: flex;
         justify-content: space-between;
         margin-bottom: 32px;
         padding: 16px;
         background: rgba(0, 0, 0, 0.02);
         border-radius: 12px;
     }
     
     .stat-item {
         display: flex;
         align-items: center;
         gap: 8px;
         color: #6b7280;
         font-size: 14px;
         font-weight: 600;
     }
     
     /* Select Button */
     .select-btn {
         width: 100%;
         padding: 20px;
         background: transparent;
         border: 2px solid rgba(99, 102, 241, 0.2);
         border-radius: 16px;
         font-size: 16px;
         font-weight: 700;
         color: #6366f1;
         cursor: pointer;
         display: flex;
         align-items: center;
         justify-content: center;
         gap: 12px;
         transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
         position: relative;
         overflow: hidden;
     }
     
     .select-btn::before {
         content: '';
         position: absolute;
         inset: 0;
         background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
         opacity: 0;
         transition: opacity 0.3s ease;
     }
     
     .select-btn:hover::before {
         opacity: 1;
     }
     
     .select-btn:hover {
         transform: translateY(-2px);
         box-shadow: 0 12px 32px rgba(99, 102, 241, 0.3);
         border-color: rgba(99, 102, 241, 0.4);
     }
     
     .select-btn.featured {
         background: linear-gradient(135deg, #f59e0b, #ef4444);
         border: none;
         color: white;
         box-shadow: 0 8px 24px rgba(245, 158, 11, 0.25);
     }
     
     .select-btn.premium {
         background: linear-gradient(135deg, #8b5cf6, #ec4899);
         border: none;
         color: white;
         box-shadow: 0 8px 24px rgba(139, 92, 246, 0.25);
     }
     
     .select-btn.featured:hover,
     .select-btn.premium:hover {
         transform: translateY(-2px) scale(1.02);
         filter: brightness(1.1);
     }
     
     .select-btn span {
         position: relative;
         z-index: 1;
     }
     
     .select-btn svg {
         position: relative;
         z-index: 1;
         transition: transform 0.3s ease;
     }
     
     .select-btn:hover svg {
         transform: translateX(5px);
     }
     
     /* Trust Indicators */
     .trust-indicators {
         display: flex;
         justify-content: center;
         align-items: center;
         gap: 40px;
         margin-top: 80px;
         padding: 32px;
         background: rgba(99, 102, 241, 0.03);
         border: 1px solid rgba(99, 102, 241, 0.08);
         border-radius: 20px;
     }
     
     .trust-item {
         display: flex;
         align-items: center;
         gap: 12px;
         color: #6b7280;
         font-size: 15px;
         font-weight: 500;
     }
     
     .trust-divider {
         width: 1px;
         height: 24px;
         background: rgba(99, 102, 241, 0.2);
     }
     
     /* Section Divider Premium */
     .section-divider-premium {
         position: relative;
         height: 80px;
         display: flex;
         align-items: center;
         justify-content: center;
     }
     
     .divider-line {
         width: 100%;
         height: 1px;
         background: linear-gradient(to right, transparent, rgba(99, 102, 241, 0.2) 20%, rgba(99, 102, 241, 0.2) 80%, transparent);
     }
     
     .divider-glow {
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         width: 200px;
         height: 4px;
         background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.4), transparent);
         filter: blur(10px);
         animation: dividerGlow 3s ease-in-out infinite;
     }
     
     @keyframes dividerGlow {
         0%, 100% {
             opacity: 0.5;
             transform: translate(-50%, -50%) scaleX(0.5);
         }
         50% {
             opacity: 1;
             transform: translate(-50%, -50%) scaleX(1);
         }
     }
     
     /* Recent Analyses Section */
     .recent-analyses-section-improved {
         position: relative;
         z-index: 2;
         padding: 60px 32px;
         background: rgba(249, 250, 251, 0.5) !important;
     }
     
     .section-header-pro {
         text-align: center;
         margin-bottom: 56px;
         position: relative;
     }
     
     .section-title-pro {
         font-size: 42px;
         font-weight: 800;
         color: #111827;
         margin-bottom: 12px;
         display: flex;
         align-items: center;
         justify-content: center;
         gap: 16px;
         position: relative;
     }
     
     .title-icon {
         width: 48px;
         height: 48px;
         background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
         border-radius: 14px;
         display: flex;
         align-items: center;
         justify-content: center;
         position: relative;
     }
     
     .title-icon::before {
         content: '';
         position: absolute;
         inset: -4px;
         background: linear-gradient(135deg, #6366f1, #8b5cf6);
         border-radius: 14px;
         opacity: 0.2;
         transform: rotate(-6deg);
         z-index: -1;
     }
     
     /* View Controls */
     .view-controls {
         position: absolute;
         right: 0;
         top: 50%;
         transform: translateY(-50%);
         display: flex;
         gap: 8px;
         background: rgba(0, 0, 0, 0.04);
         padding: 4px;
         border-radius: 12px;
     }
     
     .view-btn {
         width: 40px;
         height: 40px;
         display: flex;
         align-items: center;
         justify-content: center;
         background: transparent;
         border: none;
         border-radius: 8px;
         cursor: pointer;
         transition: all 0.3s ease;
         color: #6b7280;
     }
     
     .view-btn:hover {
         background: rgba(99, 102, 241, 0.1);
         color: #6366f1;
     }
     
     .view-btn.active {
         background: #6366f1;
         color: white;
     }
     
     /* Empty State */
     .empty-state-pro {
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
         padding: 80px 32px;
         max-width: 600px;
         margin: 0 auto;
     }
     
     .empty-illustration {
         position: relative;
         margin-bottom: 48px;
     }
     
     .empty-chart-wrapper {
         position: relative;
         width: 120px;
         height: 120px;
     }
     
     .empty-pulse-ring {
         position: absolute;
         inset: -20px;
         border: 2px solid rgba(99, 102, 241, 0.2);
         border-radius: 50%;
         animation: pulseRing 3s ease-out infinite;
     }
     
     .empty-pulse-ring.delay-1 {
         animation-delay: 1s;
     }
     
     .empty-pulse-ring.delay-2 {
         animation-delay: 2s;
     }
     
     @keyframes pulseRing {
         0% {
             transform: scale(0.8);
             opacity: 0;
         }
         50% {
             opacity: 0.5;
         }
         100% {
             transform: scale(1.5);
             opacity: 0;
         }
     }
     
     .empty-title {
         font-size: 28px;
         font-weight: 800;
         color: #111827;
         margin-bottom: 16px;
     }
     
     .empty-text {
         font-size: 16px;
         color: #6b7280;
         margin-bottom: 32px;
     }
     
     .cta-btn-primary {
         position: relative;
         padding: 16px 32px;
         background: linear-gradient(135deg, #6366f1, #8b5cf6);
         border: none;
         border-radius: 16px;
         color: white;
         font-size: 16px;
         font-weight: 700;
         cursor: pointer;
         display: flex;
         align-items: center;
         gap: 12px;
         overflow: hidden;
         transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
     }
     
     .cta-btn-primary:hover {
         transform: translateY(-2px);
         box-shadow: 0 12px 32px rgba(99, 102, 241, 0.3);
     }
     
     .btn-shine {
         position: absolute;
         top: -50%;
         left: -50%;
         width: 200%;
         height: 200%;
         background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%);
         transform: rotate(45deg);
         animation: shineMove 3s ease-in-out infinite;
     }
     
     @keyframes shineMove {
         0% {
             transform: translateX(-100%) translateY(-100%) rotate(45deg);
         }
         100% {
             transform: translateX(100%) translateY(100%) rotate(45deg);
         }
     }
     
     /* Analysis Grid */
     .analysis-grid-pro {
         display: grid;
         grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
         gap: 24px;
     }
     
     .analysis-list-pro {
         display: flex;
         flex-direction: column;
         gap: 16px;
     }
     
     /* Analysis Card Styles */
     .analysis-card-pro {
         position: relative;
         transition: all 0.3s ease;
         border-radius: 16px;
         overflow: hidden;
     }
     
     .analysis-card-pro.bullish .analysis-card-inner {
         background: linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(34, 197, 94, 0.05) 100%);
         border: 1px solid rgba(16, 185, 129, 0.2);
     }
     
     .analysis-card-pro.bearish .analysis-card-inner {
         background: linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(220, 38, 38, 0.05) 100%);
         border: 1px solid rgba(239, 68, 68, 0.2);
     }
     
     .analysis-card-pro.neutral .analysis-card-inner {
         background: linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(251, 191, 36, 0.05) 100%);
         border: 1px solid rgba(245, 158, 11, 0.2);
     }
     
     .analysis-card-inner {
         background: #ffffff;
         border: 1px solid rgba(0, 0, 0, 0.08);
         border-radius: 16px;
         overflow: hidden;
         height: 100%;
         display: flex;
         flex-direction: column;
         transition: all 0.3s ease;
     }
     
     .analysis-card-pro:hover .analysis-card-inner {
         transform: translateY(-8px);
         box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
     }
     
     .analysis-card-pro.bullish:hover .analysis-card-inner {
         box-shadow: 0 12px 32px rgba(16, 185, 129, 0.15);
         border-color: rgba(16, 185, 129, 0.3);
     }
     
     .analysis-card-pro.bearish:hover .analysis-card-inner {
         box-shadow: 0 12px 32px rgba(239, 68, 68, 0.15);
         border-color: rgba(239, 68, 68, 0.3);
     }
     
     .analysis-card-pro.neutral:hover .analysis-card-inner {
         box-shadow: 0 12px 32px rgba(245, 158, 11, 0.15);
         border-color: rgba(245, 158, 11, 0.3);
     }
     
     .analysis-image {
         position: relative;
         width: 100%;
         height: 200px;
         overflow: hidden;
         background: #f3f4f6;
     }
     
     .analysis-image img {
         width: 100%;
         height: 100%;
         object-fit: cover;
     }
     
     .analysis-overlay {
         position: absolute;
         inset: 0;
         background: rgba(0, 0, 0, 0.8);
         display: flex;
         align-items: center;
         justify-content: center;
         opacity: 0;
         transition: opacity 0.3s ease;
     }
     
     .analysis-card-pro:hover .analysis-overlay {
         opacity: 1;
     }
     
     .view-analysis-btn {
         display: flex;
         align-items: center;
         gap: 8px;
         padding: 12px 24px;
         background: #ffffff;
         border: none;
         border-radius: 12px;
         font-size: 14px;
         font-weight: 600;
         color: #111827;
         cursor: pointer;
         transition: all 0.3s ease;
     }
     
     .view-analysis-btn:hover {
         transform: scale(1.05);
         box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
     }
     
     .analysis-info {
         padding: 24px;
         flex: 1;
         display: flex;
         flex-direction: column;
     }
     
     .analysis-header {
         display: flex;
         justify-content: space-between;
         align-items: center;
         margin-bottom: 12px;
     }
     
     .analysis-symbol {
         font-size: 20px;
         font-weight: 700;
         color: #111827;
     }
     
     .analysis-timeframe {
         font-size: 14px;
         color: #6b7280;
         font-weight: 500;
     }
     
     .analysis-meta {
         display: flex;
         justify-content: space-between;
         align-items: center;
         margin-bottom: 16px;
     }
     
     .analysis-date {
         font-size: 13px;
         color: #9ca3af;
     }
     
     .analysis-sentiment {
         display: flex;
         align-items: center;
         gap: 6px;
         padding: 6px 12px;
         border-radius: 20px;
         font-size: 12px;
         font-weight: 700;
         text-transform: uppercase;
         letter-spacing: 0.5px;
     }
     
     .analysis-sentiment.bullish {
         background: rgba(16, 185, 129, 0.1);
         color: #10b981;
     }
     
     .analysis-sentiment.bearish {
         background: rgba(239, 68, 68, 0.1);
         color: #ef4444;
     }
     
     .analysis-sentiment.neutral {
         background: rgba(245, 158, 11, 0.1);
         color: #f59e0b;
     }
     
     .analysis-confidence {
         margin-top: auto;
     }
     
     .confidence-bar {
         width: 100%;
         height: 6px;
         background: rgba(0, 0, 0, 0.05);
         border-radius: 3px;
         overflow: hidden;
         margin-bottom: 8px;
     }
     
     .confidence-fill {
         height: 100%;
         background: linear-gradient(90deg, #6366f1, #8b5cf6);
         border-radius: 3px;
         transition: width 0.5s ease;
     }
     
     .confidence-text {
         font-size: 12px;
         color: #6b7280;
         font-weight: 500;
     }
     
     /* Tutorial Modal */
     .tutorial-modal {
         position: fixed;
         inset: 0;
         background: rgba(0, 0, 0, 0.8);
         backdrop-filter: blur(10px);
         display: flex;
         align-items: center;
         justify-content: center;
         z-index: 1000;
         opacity: 0;
         visibility: hidden;
         transition: all 0.3s ease;
     }
     
     .tutorial-modal.show {
         opacity: 1;
         visibility: visible;
     }
     
     .tutorial-modal-content {
         background: white;
         border-radius: 24px;
         max-width: 800px;
         width: 90%;
         max-height: 80vh;
         overflow-y: auto;
         padding: 48px;
         position: relative;
         transform: scale(0.9);
         transition: transform 0.3s ease;
     }
     
     .tutorial-modal.show .tutorial-modal-content {
         transform: scale(1);
     }
     
     .tutorial-close {
         position: absolute;
         top: 24px;
         right: 24px;
         width: 48px;
         height: 48px;
         background: rgba(0, 0, 0, 0.05);
         border: none;
         border-radius: 12px;
         font-size: 24px;
         cursor: pointer;
         transition: all 0.3s ease;
     }
     
     .tutorial-close:hover {
         background: rgba(0, 0, 0, 0.1);
         transform: rotate(90deg);
     }
     
     /* Responsive Design */
     @media (max-width: 1200px) {
         .analysis-modes-grid {
             grid-template-columns: 1fr;
             max-width: 600px;
         }
         
         .premium-stats-grid-horizontal {
             grid-template-columns: 1fr;
             max-width: 600px;
         }
     }
     
     @media (max-width: 768px) {
         .start-analysis-section-premium {
             padding: 60px 20px;
         }
         
         .section-title-premium {
             font-size: 42px;
         }
         
         .tutorial-btn-premium {
             width: 100%;
             max-width: 400px;
         }
         
         .btn-content {
             flex-wrap: wrap;
             justify-content: center;
             text-align: center;
         }
         
         .mode-card-premium {
             margin: 0 auto;
             max-width: 400px;
         }
         
         .card-inner {
             padding: 32px 24px;
         }
         
         .features-list {
             grid-template-columns: 1fr;
         }
         
         .trust-indicators {
             flex-direction: column;
             gap: 20px;
             text-align: center;
         }
         
         .trust-divider {
             display: none;
         }
     }
     
     /* Better stat cards */
     .premium-stat-card {
         background: #ffffff !important;
         backdrop-filter: none;
         border: 1px solid rgba(0, 0, 0, 0.08) !important;
         box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
     }
     
     .premium-stat-card:hover {
         background: #ffffff !important;
         border-color: rgba(139, 92, 246, 0.3) !important;
         box-shadow: 0 8px 24px rgba(139, 92, 246, 0.12) !important;
     }
     
     /* Additional Premium Enhancements */
     .premium-stats-grid-horizontal {
         display: grid;
         grid-template-columns: repeat(3, 1fr);
         gap: 24px;
         max-width: 1200px;
         margin: 0 auto;
     }
     
     .tutorial-button-container {
         display: flex;
         justify-content: center;
         margin-bottom: 56px;
     }
     </style>
 `;
 
 // Initialize animations
 initializeAnalysesAnimations();
 
 // Load analyses
 loadAnalyses();
 
 // Animate stats
 animateStats();
}

// Rest der JavaScript-Funktionen bleiben gleich...
function initializeAnalysesAnimations() {
 const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.classList.add('animate-in');
         }
     });
 }, { threshold: 0.1 });
 
 document.querySelectorAll('[data-aos]').forEach(el => {
     observer.observe(el);
 });
}

function animateStats() {
 const statNumbers = document.querySelectorAll('[data-count]');
 
 statNumbers.forEach(stat => {
     const target = parseInt(stat.getAttribute('data-count'));
     const duration = 2000;
     const increment = target / (duration / 16);
     let current = 0;
     
     const updateNumber = () => {
         current += increment;
         if (current < target) {
             stat.textContent = Math.floor(current);
             requestAnimationFrame(updateNumber);
         } else {
             stat.textContent = target;
         }
     };
     
     const observer = new IntersectionObserver((entries) => {
         if (entries[0].isIntersecting) {
             updateNumber();
             observer.disconnect();
         }
     });
     
     observer.observe(stat);
 });
}

function selectAnalysisMode(mode) {
 window.selectedAnalysisMode = mode;
 
 const cards = document.querySelectorAll('.mode-card-premium');
 cards.forEach(card => card.classList.remove('selected'));
 
 const selectedCard = document.querySelector(`.mode-card-premium.${mode}`);
 if (selectedCard) {
     selectedCard.classList.add('selected');
 }
 
 setTimeout(() => {
     showSection('upload');
 }, 500);
}

function startTutorial() {
 document.getElementById('tutorialModal').classList.add('show');
 document.body.style.overflow = 'hidden';
}

function closeTutorial() {
 document.getElementById('tutorialModal').classList.remove('show');
 document.body.style.overflow = '';
}

function showTutorialTab(tab) {
 document.querySelectorAll('.tutorial-tab').forEach(t => t.classList.remove('active'));
 document.querySelector(`.tutorial-tab:nth-child(${tab === 'simple' ? 1 : tab === 'scalping' ? 2 : 3})`).classList.add('active');
 
 document.querySelectorAll('.tutorial-section').forEach(s => s.classList.remove('active'));
 document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
}

function setViewMode(mode) {
 const analysisList = document.getElementById('analysisList');
 const viewBtns = document.querySelectorAll('.view-btn');
 
 if (mode === 'grid') {
     analysisList.className = 'analysis-grid-pro';
 } else {
     analysisList.className = 'analysis-list-pro';
 }
 
 viewBtns.forEach(btn => btn.classList.remove('active'));
 event.target.closest('.view-btn').classList.add('active');
}

function loadAnalyses() {
 const analyses = JSON.parse(localStorage.getItem('analyses') || '[]');
 const analysisList = document.getElementById('analysisList');
 const emptyState = document.getElementById('emptyState');
 
 if (analyses.length === 0) {
     emptyState.style.display = 'flex';
     analysisList.style.display = 'none';
 } else {
     emptyState.style.display = 'none';
     analysisList.style.display = 'grid';
     
     analysisList.innerHTML = analyses.map((analysis, index) => `
         <div class="analysis-card-pro ${analysis.sentiment}" data-aos="fade-up" data-aos-delay="${index * 50}">
             <div class="analysis-card-inner">
                 <div class="analysis-image">
                     <img src="${analysis.image}" alt="Chart">
                     <div class="analysis-overlay">
                         <button class="view-analysis-btn">
                             <span>View Full Analysis</span>
                             <span>→</span>
                         </button>
                     </div>
                 </div>
                 <div class="analysis-info">
                     <div class="analysis-header">
                         <h3 class="analysis-symbol">${analysis.symbol}</h3>
                         <span class="analysis-timeframe">${analysis.timeframe}</span>
                     </div>
                     <div class="analysis-meta">
                         <span class="analysis-date">${new Date(analysis.date).toLocaleDateString()}</span>
                         <span class="analysis-sentiment ${analysis.sentiment}">
                             ${analysis.sentiment === 'bullish' ? '📈' : analysis.sentiment === 'bearish' ? '📉' : '➡️'} 
                             ${analysis.sentiment.toUpperCase()}
                         </span>
                     </div>
                     <div class="analysis-confidence">
                         <div class="confidence-bar">
                             <div class="confidence-fill" style="width: ${analysis.confidence}%"></div>
                         </div>
                         <span class="confidence-text">${analysis.confidence}% Confidence</span>
                     </div>
                 </div>
             </div>
         </div>
     `).join('');
 }
}